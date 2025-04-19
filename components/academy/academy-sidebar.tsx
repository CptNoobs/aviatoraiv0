"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BookOpen, GraduationCap, Home, MessageSquare, Users } from "lucide-react"

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

export function AcademySidebar() {
  return (
    <div className="hidden border-r bg-background md:block md:w-64">
      <div className="flex h-full flex-col gap-2 p-4">
        <div className="py-2">
          <h2 className="px-4 text-lg font-semibold tracking-tight">Academy</h2>
        </div>
        <div className="flex-1 space-y-1">
          <SidebarLink href="/academy" icon={<Home className="h-4 w-4" />}>
            Overview
          </SidebarLink>
          <SidebarLink href="/academy/courses" icon={<BookOpen className="h-4 w-4" />}>
            Courses
          </SidebarLink>
          <SidebarLink href="/academy/ai-tutor" icon={<GraduationCap className="h-4 w-4" />}>
            AI Tutor
          </SidebarLink>
          <SidebarLink href="/academy/community" icon={<Users className="h-4 w-4" />}>
            Community
          </SidebarLink>
          <SidebarLink href="/academy/discussion" icon={<MessageSquare className="h-4 w-4" />}>
            Discussion
          </SidebarLink>
        </div>
      </div>
    </div>
  )
}
