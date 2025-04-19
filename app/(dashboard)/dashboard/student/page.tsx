import type { Metadata } from "next"
import { StudentDashboard } from "@/components/dashboard/role-dashboards/student-dashboard"

export const metadata: Metadata = {
  title: "Student Dashboard | Aviator AI",
  description: "Aviator AI Student Dashboard",
}

export default function StudentDashboardPage() {
  return <StudentDashboard />
}
