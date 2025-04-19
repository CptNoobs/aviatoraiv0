"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import type { User, Session } from "@supabase/supabase-js"
import type { Profile } from "@/types/database.types"

type AuthContextType = {
  user: User | null
  profile: Profile | null
  session: Session | null
  isLoading: boolean
  signOut: () => Promise<void>
  refreshProfile: () => Promise<void>
  error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Create Supabase client with error handling
  let supabase
  try {
    // Import dynamically to avoid issues with missing env vars during build
    const { createClientSupabaseClient } = require("@/lib/supabase/client")
    supabase = createClientSupabaseClient()
  } catch (err: any) {
    console.error("Failed to initialize Supabase client:", err)
    setError(err.message || "Failed to initialize authentication")
    setIsLoading(false)
  }

  useEffect(() => {
    if (!supabase) return

    const initAuth = async () => {
      try {
        setIsLoading(true)

        // Get initial session
        const {
          data: { session },
        } = await supabase.auth.getSession()

        if (session) {
          setSession(session)
          setUser(session.user)
          await fetchProfile(session.user.id)
        }

        // Set up auth state change listener
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange(async (event, session) => {
          setSession(session)
          setUser(session?.user || null)

          if (session?.user) {
            await fetchProfile(session.user.id)
          } else {
            setProfile(null)
          }

          router.refresh()
        })

        return () => {
          subscription.unsubscribe()
        }
      } catch (error: any) {
        console.error("Error initializing auth:", error)
        setError(error.message || "Authentication initialization failed")
      } finally {
        setIsLoading(false)
      }
    }

    initAuth()
  }, [supabase, router])

  const fetchProfile = async (userId: string) => {
    if (!supabase) return

    try {
      const { data, error } = await supabase.from("profiles").select("*").eq("user_id", userId).maybeSingle()

      if (error) {
        console.error("Error fetching profile:", error)
        return
      }

      if (data) {
        setProfile(data)
      } else {
        // If no profile exists, create one
        await createProfile(userId)
      }
    } catch (error) {
      console.error("Error in fetchProfile:", error)
    }
  }

  const createProfile = async (userId: string) => {
    if (!supabase) return

    try {
      const { data: userData } = await supabase.auth.getUser()

      if (!userData?.user) return

      const defaultRole = "student"
      const fullName = userData.user.user_metadata?.full_name || userData.user.email?.split("@")[0] || "User"

      const { data, error } = await supabase
        .from("profiles")
        .insert({
          user_id: userId,
          full_name: fullName,
          role: defaultRole,
        })
        .select()
        .single()

      if (error) {
        console.error("Error creating profile:", error)
        return
      }

      setProfile(data)
    } catch (error) {
      console.error("Error in createProfile:", error)
    }
  }

  const refreshProfile = async () => {
    if (user && supabase) {
      await fetchProfile(user.id)
    }
  }

  const signOut = async () => {
    if (supabase) {
      await supabase.auth.signOut()
      router.push("/login")
    }
  }

  const value = {
    user,
    profile,
    session,
    isLoading,
    signOut,
    refreshProfile,
    error,
  }

  // If there's an error with Supabase initialization, show it
  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <div className="rounded-lg bg-red-50 p-6 shadow-lg dark:bg-red-900/20">
          <h2 className="mb-4 text-xl font-bold text-red-700 dark:text-red-400">Authentication Error</h2>
          <p className="mb-4 text-red-600 dark:text-red-300">{error}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Please check your environment variables and make sure Supabase is properly configured.
          </p>
        </div>
      </div>
    )
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}
