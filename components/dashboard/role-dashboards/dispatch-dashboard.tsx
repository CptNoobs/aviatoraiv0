"use client"

import { useAuth } from "@/components/auth/auth-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Cloud, MessageSquare, Plane } from "lucide-react"
import Link from "next/link"

export function DispatchDashboard() {
  const { profile } = useAuth()

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome, {profile?.full_name}</h1>
        <p className="text-muted-foreground">Here's your dispatch operations dashboard.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Flights</CardTitle>
            <Plane className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Currently in air</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weather Alerts</CardTitle>
            <Cloud className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Active alerts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Communications</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Unread messages</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Upcoming flights</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Fleet Status</CardTitle>
            <CardDescription>Current status of all aircraft</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">N12345 - C172</h3>
                  <Badge className="bg-green-500">In Flight</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Route: KSFO to KLAX</p>
                <p className="text-sm text-muted-foreground">ETA: 2:30 PM PDT</p>
                <div className="mt-4">
                  <Button size="sm">Track Flight</Button>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">N54321 - C182</h3>
                  <Badge variant="outline">Maintenance</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Status: Annual inspection</p>
                <p className="text-sm text-muted-foreground">Available: Tomorrow</p>
                <div className="mt-4">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
              <Button asChild className="w-full">
                <Link href="/dashboard/fleet">View All Aircraft</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Operations Log</CardTitle>
            <CardDescription>Recent operational activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Flight N12345 departed KSFO</p>
                  <p className="text-xs text-muted-foreground">10:30 AM PDT</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Weather alert issued for KLAX</p>
                  <p className="text-xs text-muted-foreground">10:15 AM PDT</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Flight N54321 arrived at KLAS</p>
                  <p className="text-xs text-muted-foreground">9:45 AM PDT</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Maintenance scheduled for N54321</p>
                  <p className="text-xs text-muted-foreground">9:30 AM PDT</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Flight N67890 departed KLAS</p>
                  <p className="text-xs text-muted-foreground">9:15 AM PDT</p>
                </div>
              </div>
              <Button asChild className="w-full">
                <Link href="/dashboard/operations">View Full Log</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
