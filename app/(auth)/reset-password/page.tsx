import type { Metadata } from "next"
import Link from "next/link"
import { ResetPasswordForm } from "@/components/auth/reset-password-form"
import { Logo } from "@/components/ui/logo"

export const metadata: Metadata = {
  title: "Reset Password | Aviator AI",
  description: "Reset your Aviator AI account password",
}

export default function ResetPasswordPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Logo className="mx-auto h-10 w-10" />
          <h1 className="text-2xl font-semibold tracking-tight">Reset password</h1>
          <p className="text-sm text-muted-foreground">Enter your email to receive a password reset link</p>
        </div>
        <ResetPasswordForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link href="/login" className="hover:text-brand underline underline-offset-4">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  )
}
