import type { Metadata } from "next"
import { SettingsForm } from "@/components/dashboard/settings-form"

export const metadata: Metadata = {
  title: "Settings | Aviator AI",
  description: "Aviator AI Settings",
}

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-sm text-muted-foreground">Manage your account settings and preferences.</p>
      </div>
      <SettingsForm />
    </div>
  )
}
