"use server"

import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import type { Database } from "@/types/supabase"

// Helper function to add delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Retry function with exponential backoff
async function retryOperation<T>(operation: () => Promise<T>, maxRetries = 3, initialDelay = 1000): Promise<T> {
  let retries = 0

  while (true) {
    try {
      return await operation()
    } catch (error: any) {
      if (retries >= maxRetries || !error.message?.includes("Too Many")) {
        throw error
      }

      const delayTime = initialDelay * Math.pow(2, retries)
      console.log(`Retrying after ${delayTime}ms...`)
      await delay(delayTime)
      retries++
    }
  }
}

export async function createUserProfile(userId: string, email: string, role = "student") {
  // Create a Supabase client with the cookies
  const cookieStore = cookies()
  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!, // Use service role key to bypass RLS
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: any) {
          cookieStore.set({ name, value: "", ...options })
        },
      },
    },
  )

  try {
    // Check if profile already exists with retry logic
    const { data: existingProfile } = await retryOperation(
      () => supabase.from("profiles").select("*").eq("user_id", userId).maybeSingle(),
      3,
      1000,
    )

    // If profile exists, return it
    if (existingProfile) {
      return { success: true, profile: existingProfile }
    }

    // Create new profile with service role (bypasses RLS) with retry logic
    const { data, error } = await retryOperation(
      () =>
        supabase
          .from("profiles")
          .insert({
            user_id: userId,
            full_name: email.split("@")[0], // Simple default name from email
            role,
          })
          .select()
          .single(),
      3,
      1000,
    )

    if (error) {
      console.error("Server action - Error creating profile:", error)
      return { success: false, error: error.message }
    }

    return { success: true, profile: data }
  } catch (error: any) {
    console.error("Server action - Error in createUserProfile:", error)
    return { success: false, error: error.message || "Failed to create profile" }
  }
}

export async function updateUserProfile(userId: string, data: any) {
  // Create a Supabase client with the cookies
  const cookieStore = cookies()
  const supabase = createServerClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: any) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name: string, options: any) {
        cookieStore.set({ name, value: "", ...options })
      },
    },
  })

  try {
    // Update profile with retry logic
    const { data: updatedProfile, error } = await retryOperation(
      () => supabase.from("profiles").update(data).eq("user_id", userId).select().single(),
      3,
      1000,
    )

    if (error) {
      console.error("Error updating profile:", error)
      return { success: false, error: error.message }
    }

    return { success: true, profile: updatedProfile }
  } catch (error: any) {
    console.error("Error in updateUserProfile:", error)
    return { success: false, error: error.message || "Failed to update profile" }
  }
}
