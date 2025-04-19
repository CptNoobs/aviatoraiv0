"use client"
import { BookOpen, CheckCircle, Clock, MessageSquare, Play, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MindMap } from "@/components/dashboard/student/mind-map"
import { ForumThread } from "@/components/dashboard/student/forum-thread"
import { WeatherWidget } from "@/components/dashboard/weather/weather-widget"

export function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
        <p className="text-muted-foreground">Track your progress and continue your learning journey.</p>
      </div>

      {/* Weather Widget */}
      <WeatherWidget />

      <Tabs defaultValue="courses" className="space-y-4">
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="mindmap">Mind Map</TabsTrigger>
          <TabsTrigger value="forum">Forum</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">My Courses</h2>
            <Button size="sm">
              <Plus className="mr-1 h-4 w-4" />
              <span className="hidden sm:inline">Enroll in Course</span>
              <span className="sm:hidden">Enroll</span>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="h-3 bg-primary" />
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="mr-1 h-4 w-4 text-muted-foreground" />
                      <span>{course.lessons} lessons</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    {course.progress === 100 ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Completed
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Continue
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mindmap">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Mind Map</CardTitle>
              <CardDescription>Visualize connections between aviation concepts</CardDescription>
            </CardHeader>
            <CardContent className="min-h-[300px] md:min-h-[500px]">
              <MindMap />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forum">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Forum Discussions</CardTitle>
                <CardDescription>Connect with other students and instructors</CardDescription>
              </div>
              <Button size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">New Thread</span>
                <span className="sm:hidden">New</span>
              </Button>
            </CardHeader>
            <CardContent>
              <ForumThread />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const courses = [
  {
    id: 1,
    title: "Private Pilot Ground School",
    description: "Essential knowledge for the private pilot license",
    duration: "24 hours",
    lessons: 12,
    progress: 75,
  },
  {
    id: 2,
    title: "Weather Theory",
    description: "Understanding aviation weather patterns and forecasts",
    duration: "10 hours",
    lessons: 8,
    progress: 40,
  },
  {
    id: 3,
    title: "Navigation Fundamentals",
    description: "VOR, GPS, and chart reading techniques",
    duration: "15 hours",
    lessons: 10,
    progress: 100,
  },
]
