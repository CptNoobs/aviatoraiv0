import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AcademyPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Aviator AI Academy</h1>
        <p className="text-muted-foreground">
          Welcome to the Aviator AI Academy, your comprehensive learning platform for aviation training.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <BookOpen className="h-5 w-5" />
            <div>
              <CardTitle>Courses</CardTitle>
              <CardDescription>Browse our comprehensive course catalog</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Access a wide range of aviation courses, from private pilot to advanced instrument training.
            </p>
            <Button asChild>
              <Link href="/academy/courses">Browse Courses</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            <div>
              <CardTitle>AI Tutor</CardTitle>
              <CardDescription>Get personalized learning assistance</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our AI tutor provides personalized learning assistance and answers your aviation questions.
            </p>
            <Button asChild>
              <Link href="/academy/ai-tutor">Start Learning</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Users className="h-5 w-5" />
            <div>
              <CardTitle>Community</CardTitle>
              <CardDescription>Connect with fellow aviation enthusiasts</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Join our community of aviation enthusiasts, students, and instructors to share knowledge.
            </p>
            <Button asChild>
              <Link href="/academy/community">Join Community</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold tracking-tight mb-4">Featured Courses</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">{course.lessons} lessons</div>
                  <Button variant="outline" asChild>
                    <Link href={`/academy/courses/${course.slug}`}>View Course</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const featuredCourses = [
  {
    id: 1,
    title: "Private Pilot Ground School",
    description: "Complete ground school for private pilot certification",
    lessons: 24,
    slug: "private-pilot",
  },
  {
    id: 2,
    title: "Weather Theory Advanced",
    description: "Master aviation weather theory and forecasting",
    lessons: 16,
    slug: "weather-theory",
  },
  {
    id: 3,
    title: "Navigation Fundamentals",
    description: "Learn the essentials of aviation navigation",
    lessons: 18,
    slug: "navigation-fundamentals",
  },
]
