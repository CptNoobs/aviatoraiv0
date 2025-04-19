import type { Metadata } from "next"
import { PilotDashboard } from "@/components/dashboard/role-dashboards/pilot-dashboard"

export const metadata: Metadata = {
  title: "Pilot Dashboard | Aviator AI",
  description: "Aviator AI Pilot Dashboard",
}

export default function PilotDashboardPage() {
  return <PilotDashboard />
}
