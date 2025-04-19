"use client"

import { useAuth } from "@/components/auth/auth-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cloud, FileText, Plane, Wind } from "lucide-react"
import Link from "next/link"

export function PilotDashboard() {
  const { profile } = useAuth()

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome, {profile?.full_name}</h1>
        <p className="text-muted-foreground">Here's your flight planning dashboard and weather information.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Flight Plans</CardTitle>
            <Plane className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Active flight plans</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weather Alerts</CardTitle>
            <Cloud className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Active alerts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wind Conditions</CardTitle>
            <Wind className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 kts</div>
            <p className="text-xs text-muted-foreground">Current wind speed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">SOPs</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Available procedures</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Flight Plans</CardTitle>
            <CardDescription>Your recent and upcoming flights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">KSFO to KLAX</h3>
                  <Badge>Tomorrow</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Departure: 10:30 AM PDT</p>
                <p className="text-sm text-muted-foreground">Aircraft: C172</p>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline">
                    Edit Plan
                  </Button>
                  <Button size="sm">View Details</Button>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">KLAX to KLAS</h3>
                  <Badge variant="outline">Next Week</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Departure: 2:15 PM PDT</p>
                <p className="text-sm text-muted-foreground">Aircraft: C182</p>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline">
                    Edit Plan
                  </Button>
                  <Button size="sm">View Details</Button>
                </div>
              </div>
              <Button asChild className="w-full">
                <Link href="/dashboard/pilot/flight-plans">View All Flight Plans</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weather Briefing</CardTitle>
            <CardDescription>Current weather conditions and forecasts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h3 className="font-medium">METAR - KSFO</h3>
                <p className="text-sm font-mono mt-2">
                  KSFO 121856Z 28012KT 10SM FEW018 SCT180 19/12 A3002 RMK AO2 SLP168 T01940117
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h3 className="font-medium">TAF - KSFO</h3>
                <p className="text-sm font-mono mt-2">
                  KSFO 121120Z 1212/1318 28012KT P6SM FEW018 SCT180 FM122000 27008KT P6SM FEW020 FM130600 27006KT P6SM
                  SKC
                </p>
              </div>
              <Button asChild className="w-full">
                <Link href="/dashboard/weather">Full Weather Briefing</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
