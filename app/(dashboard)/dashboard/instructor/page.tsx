import type { Metadata } from "next"
import { InstructorDashboard } from "@/components/dashboard/role-dashboards/instructor-dashboard"

export const metadata: Metadata = {
  title: "Instructor Dashboard | Aviator AI",
  description: "Aviator AI Instructor Dashboard",
}

export default function InstructorDashboardPage() {
  return <InstructorDashboard />
}
