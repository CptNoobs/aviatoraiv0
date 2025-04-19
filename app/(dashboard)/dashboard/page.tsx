import { redirect } from "next/navigation"
import { createServerSupabaseClient } from "@/lib/supabase/server"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard | Aviator AI",
  description: "Aviator AI Dashboard",
}

export default async function DashboardPage() {
  try {
    const supabase = createServerSupabaseClient()

    // Get session
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      redirect("/login")
    }

    // Get user profile
    const { data: profile } = await supabase.from("profiles").select("*").eq("user_id", session.user.id).maybeSingle()

    return <DashboardOverview profile={profile} />
  } catch (error) {
    // If there's an error with Supabase, show a helpful message
    return (
      <div className="container flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <div className="rounded-lg bg-red-50 p-6 shadow-lg dark:bg-red-900/20">
          <h2 className="mb-4 text-xl font-bold text-red-700 dark:text-red-400">Dashboard Error</h2>
          <p className="mb-4 text-red-600 dark:text-red-300">
            {error instanceof Error ? error.message : "Failed to load dashboard"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Please check your environment variables and make sure Supabase is properly configured.
          </p>
          <div className="mt-4">
            <a
              href="/debug"
              className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Go to Debug Page
            </a>
          </div>
        </div>
      </div>
    )
  }
}
