"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth/auth-provider"
import { AcademyHeader } from "@/components/academy/academy-header"
import { AcademySidebar } from "@/components/academy/academy-sidebar"
import { LoadingScreen } from "@/components/ui/loading-screen"

export function AcademyShell({ children }: { children: React.ReactNode }) {
  const { isLoading, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [isLoading, user, router])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AcademyHeader />
      <div className="flex flex-1">
        <AcademySidebar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
