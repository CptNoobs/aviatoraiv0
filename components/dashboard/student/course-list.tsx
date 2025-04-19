"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock } from "lucide-react"

// Sample course data - in a real app, this would come from your database
const courses = [
  {
    id: 1,
    title: "Private Pilot Ground School",
    description: "Comprehensive introduction to aviation fundamentals for aspiring private pilots.",
    progress: 75,
    modules: 12,
    completedModules: 9,
    duration: "40 hours",
    level: "Beginner",
    instructor: "Jane Smith",
    tags: ["Private Pilot", "Ground School"],
  },
  {
    id: 2,
    title: "Aviation Weather Theory",
    description: "Understanding weather patterns, forecasts, and their impact on flight planning.",
    progress: 45,
    modules: 8,
    completedModules: 3,
    duration: "24 hours",
    level: "Intermediate",
    instructor: "John Doe",
    tags: ["Weather", "Meteorology"],
  },
  {
    id: 3,
    title: "Navigation Fundamentals",
    description: "Learn VOR, NDB, GPS navigation systems and flight planning techniques.",
    progress: 20,
    modules: 10,
    completedModules: 2,
    duration: "30 hours",
    level: "Intermediate",
    instructor: "Michael Johnson",
    tags: ["Navigation", "Flight Planning"],
  },
  {
    id: 4,
    title: "Aircraft Systems",
    description: "Detailed overview of aircraft systems, components, and operations.",
    progress: 0,
    modules: 14,
    completedModules: 0,
    duration: "36 hours",
    level: "Advanced",
    instructor: "Sarah Williams",
    tags: ["Systems", "Mechanics"],
  },
]

export function StudentCourseList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">My Courses</h2>
        <Button variant="outline">Browse All Courses</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <div
              className="h-3 bg-blue-600"
              style={{
                width: `${course.progress}%`,
                transition: "width 1s ease-in-out",
              }}
            />
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{course.title}</CardTitle>
                <Badge variant={course.progress === 100 ? "default" : "outline"}>
                  {course.progress === 100 ? "Completed" : "In Progress"}
                </Badge>
              </div>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {course.completedModules}/{course.modules} Modules
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {course.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/50 px-6 py-3">
              <Button className="w-full">{course.progress === 0 ? "Start Course" : "Continue Learning"}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
