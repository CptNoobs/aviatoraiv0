import type { Metadata } from "next"
import Link from "next/link"
import { UpdatePasswordForm } from "@/components/auth/update-password-form"
import { Logo } from "@/components/logo"

export const metadata: Metadata = {
  title: "Update Password | Aviator AI",
  description: "Update your Aviator AI password",
}

export default function UpdatePasswordPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Logo className="mx-auto h-10 w-10" />
          <h1 className="text-2xl font-semibold tracking-tight">Update password</h1>
          <p className="text-sm text-muted-foreground">Enter your new password below</p>
        </div>
        <UpdatePasswordForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link href="/login" className="hover:text-brand underline underline-offset-4">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  )
}
