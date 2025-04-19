"use client"

import { useAuth } from "@/components/auth/auth-provider"
import { StudentDashboard } from "@/components/dashboard/role-dashboards/student-dashboard"
import { InstructorDashboard } from "@/components/dashboard/role-dashboards/instructor-dashboard"
import { PilotDashboard } from "@/components/dashboard/role-dashboards/pilot-dashboard"
import { DispatchDashboard } from "@/components/dashboard/role-dashboards/dispatch-dashboard"

export function DashboardOverview() {
  const { profile } = useAuth()
  const role = profile?.role || "student"

  // Render the appropriate dashboard based on user role
  switch (role) {
    case "student":
      return <StudentDashboard />
    case "instructor":
      return <InstructorDashboard />
    case "pro":
      return <PilotDashboard />
    case "dispatch":
      return <DispatchDashboard />
    default:
      return <StudentDashboard />
  }
}
