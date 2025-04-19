"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useAuth } from "@/components/auth/auth-provider"
import { Button } from "@/components/ui/button"
import { BookOpen, Cloud, GraduationCap, Home, LayoutDashboard, Plane, Settings, Users } from "lucide-react"

interface SidebarLinkProps {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
}

function SidebarLink({ href, icon, children }: SidebarLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Button
      asChild
      variant={isActive ? "secondary" : "ghost"}
      className={cn("w-full justify-start", isActive ? "bg-muted" : "")}
    >
      <Link href={href}>
        {icon}
        <span className="ml-2">{children}</span>
      </Link>
    </Button>
  )
}

export function DashboardSidebar() {
  const { profile } = useAuth()
  const role = profile?.role || "student"

  return (
    <div className="hidden border-r bg-background md:block md:w-64">
      <div className="flex h-full flex-col gap-2 p-4">
        <div className="py-2">
          <h2 className="px-4 text-lg font-semibold tracking-tight">Dashboard</h2>
        </div>
        <div className="flex-1 space-y-1">
          <SidebarLink href="/dashboard" icon={<Home className="h-4 w-4" />}>
            Overview
          </SidebarLink>

          {/* Role-specific navigation */}
          {role === "student" && (
            <>
              <SidebarLink href="/dashboard/student" icon={<GraduationCap className="h-4 w-4" />}>
                My Learning
              </SidebarLink>
              <SidebarLink href="/dashboard/weather" icon={<Cloud className="h-4 w-4" />}>
                Weather
              </SidebarLink>
            </>
          )}

          {role === "instructor" && (
            <>
              <SidebarLink href="/dashboard/instructor" icon={<Users className="h-4 w-4" />}>
                Students
              </SidebarLink>
              <SidebarLink href="/dashboard/courses" icon={<BookOpen className="h-4 w-4" />}>
                Courses
              </SidebarLink>
            </>
          )}

          {role === "pro" && (
            <>
              <SidebarLink href="/dashboard/pilot" icon={<Plane className="h-4 w-4" />}>
                Flight Planning
              </SidebarLink>
              <SidebarLink href="/dashboard/weather" icon={<Cloud className="h-4 w-4" />}>
                Weather
              </SidebarLink>
            </>
          )}

          {role === "dispatch" && (
            <>
              <SidebarLink href="/dashboard/dispatch" icon={<LayoutDashboard className="h-4 w-4" />}>
                Operations
              </SidebarLink>
              <SidebarLink href="/dashboard/fleet" icon={<Plane className="h-4 w-4" />}>
                Fleet
              </SidebarLink>
            </>
          )}

          {/* Common navigation */}
          <SidebarLink href="/academy" icon={<BookOpen className="h-4 w-4" />}>
            Academy
          </SidebarLink>
          <SidebarLink href="/dashboard/settings" icon={<Settings className="h-4 w-4" />}>
            Settings
          </SidebarLink>
        </div>
      </div>
    </div>
  )
}
