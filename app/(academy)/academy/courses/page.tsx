"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CoursesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
        <p className="text-muted-foreground">Browse our comprehensive catalog of aviation courses.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{course.title}</CardTitle>
                <Badge variant={getBadgeVariant(course.level)}>{course.level}</Badge>
              </div>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Modules:</span>
                  <span>{course.modules}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Duration:</span>
                  <span>{course.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Instructor:</span>
                  <span>{course.instructor}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href={`/academy/courses/${course.slug}`}>View Course</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

function getBadgeVariant(level: string) {
  switch (level) {
    case "Beginner":
      return "default"
    case "Intermediate":
      return "secondary"
    case "Advanced":
      return "destructive"
    default:
      return "outline"
  }
}

const courses = [
  {
    id: 1,
    title: "Private Pilot Ground School",
    description: "Complete ground school preparation for the Private Pilot License written exam.",
    level: "Beginner",
    modules: 12,
    duration: "24 hours",
    instructor: "Capt. Sarah Johnson",
    slug: "private-pilot",
  },
  {
    id: 2,
    title: "Instrument Rating",
    description: "Comprehensive training for instrument flight rules and procedures.",
    level: "Intermediate",
    modules: 10,
    duration: "30 hours",
    instructor: "Capt. Michael Chen",
    slug: "instrument-rating",
  },
  {
    id: 3,
    title: "Commercial Pilot",
    description: "Advanced training for commercial pilot operations and regulations.",
    level: "Advanced",
    modules: 14,
    duration: "40 hours",
    instructor: "Capt. James Wilson",
    slug: "commercial-pilot",
  },
  {
    id: 4,
    title: "Aviation Weather",
    description: "In-depth study of aviation meteorology and weather forecasting.",
    level: "Intermediate",
    modules: 8,
    duration: "16 hours",
    instructor: "Dr. Emily Rodriguez",
    slug: "aviation-weather",
  },
  {
    id: 5,
    title: "Navigation Fundamentals",
    description: "Essential navigation techniques for VFR and IFR flying.",
    level: "Beginner",
    modules: 6,
    duration: "12 hours",
    instructor: "Capt. David Thompson",
    slug: "navigation-fundamentals",
  },
  {
    id: 6,
    title: "Advanced Aerodynamics",
    description: "Detailed study of aircraft performance and aerodynamic principles.",
    level: "Advanced",
    modules: 9,
    duration: "18 hours",
    instructor: "Dr. Robert Lee",
    slug: "advanced-aerodynamics",
  },
]
