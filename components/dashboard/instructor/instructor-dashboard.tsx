"use client"

import { useState } from "react"
import { BarChart, FileUp, Pencil, Plus, Search } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StudentRoster } from "@/components/dashboard/instructor/student-roster"
import { LessonUpload } from "@/components/dashboard/instructor/lesson-upload"
import { WeatherWidget } from "@/components/dashboard/weather/weather-widget"

export function InstructorDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Instructor Dashboard</h1>
        <p className="text-muted-foreground">Manage your students and course materials.</p>
      </div>

      {/* Weather Widget */}
      <WeatherWidget />

      <Tabs defaultValue="roster" className="space-y-4">
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="roster">Student Roster</TabsTrigger>
          <TabsTrigger value="progress">Student Progress</TabsTrigger>
          <TabsTrigger value="lessons">Lesson Upload</TabsTrigger>
        </TabsList>

        <TabsContent value="roster" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="text-xl font-semibold">Student Roster</h2>
            <div className="flex items-center gap-2">
              <div className="relative flex-1 sm:flex-none">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search students..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button size="sm">
                <Plus className="mr-1 h-4 w-4" />
                <span className="hidden sm:inline">Add Student</span>
                <span className="sm:hidden">Add</span>
              </Button>
            </div>
          </div>

          <StudentRoster searchQuery={searchQuery} />
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Student Progress</h2>
            <Button variant="outline" size="sm">
              <FileUp className="mr-1 h-4 w-4" />
              <span className="hidden sm:inline">Export Report</span>
              <span className="sm:hidden">Export</span>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {studentProgress.map((student) => (
              <Card key={student.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{student.initials}</AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-base">{student.name}</CardTitle>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Overall Progress</span>
                      <span className="font-medium">{student.overallProgress}%</span>
                    </div>
                    <Progress value={student.overallProgress} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Ground School</span>
                      <span className="font-medium">{student.groundSchool}%</span>
                    </div>
                    <Progress value={student.groundSchool} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Flight Training</span>
                      <span className="font-medium">{student.flightTraining}%</span>
                    </div>
                    <Progress value={student.flightTraining} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    <BarChart className="mr-2 h-4 w-4" />
                    <span className="hidden sm:inline">Detailed Analytics</span>
                    <span className="sm:hidden">Analytics</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="lessons">
          <Card>
            <CardHeader>
              <CardTitle>Lesson Upload Tool</CardTitle>
              <CardDescription>Create and manage lesson content for your students</CardDescription>
            </CardHeader>
            <CardContent>
              <LessonUpload />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const studentProgress = [
  {
    id: 1,
    name: "Alex Johnson",
    initials: "AJ",
    overallProgress: 78,
    groundSchool: 85,
    flightTraining: 70,
  },
  {
    id: 2,
    name: "Sarah Williams",
    initials: "SW",
    overallProgress: 62,
    groundSchool: 75,
    flightTraining: 50,
  },
  {
    id: 3,
    name: "Michael Chen",
    initials: "MC",
    overallProgress: 91,
    groundSchool: 95,
    flightTraining: 88,
  },
]
