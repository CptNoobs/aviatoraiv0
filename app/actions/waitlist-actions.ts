"use server"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import type { Database } from "@/types/supabase"

type WaitlistFormData = {
  name: string
  email: string
  role: string
}

export async function submitToWaitlist(formData: WaitlistFormData) {
  try {
    // Create a Supabase client on the server
    const cookieStore = cookies()
    const supabase = createServerClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!,
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

    // Check if email already exists in waitlist
    const { data: existingUser } = await supabase.from("waitlist").select("email").eq("email", formData.email).single()

    if (existingUser) {
      return {
        success: false,
        message: "This email is already on our waitlist.",
      }
    }

    // Insert new waitlist entry
    const { error } = await supabase.from("waitlist").insert([
      {
        name: formData.name,
        email: formData.email,
        role: formData.role,
      },
    ])

    if (error) throw error

    return {
      success: true,
      message: "Successfully added to waitlist!",
    }
  } catch (error) {
    console.error("Waitlist submission error:", error)
    return {
      success: false,
      message: "Failed to join waitlist. Please try again later.",
    }
  }
}
