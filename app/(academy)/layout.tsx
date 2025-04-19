import type React from "react"
import { AuthProvider } from "@/components/auth/auth-provider"
import { AcademyShell } from "@/components/academy/academy-shell"

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <AcademyShell>{children}</AcademyShell>
    </AuthProvider>
  )
}
