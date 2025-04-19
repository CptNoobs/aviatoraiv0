import type { Metadata } from "next"
import { DispatchDashboard } from "@/components/dashboard/role-dashboards/dispatch-dashboard"

export const metadata: Metadata = {
  title: "Dispatch Dashboard | Aviator AI",
  description: "Aviator AI Dispatch Dashboard",
}

export default function DispatchDashboardPage() {
  return <DispatchDashboard />
}
