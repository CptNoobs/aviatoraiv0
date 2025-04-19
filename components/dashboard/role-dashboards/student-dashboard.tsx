"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Calendar, Award, BarChart2, Brain, FileText } from "lucide-react"
import { useAuth } from "@/components/auth/auth-provider"

// Student Dashboard Components
import { StudentCourseList } from "@/components/dashboard/student/course-list"
import { MindMapExplorer } from "@/components/dashboard/student/mind-map"
import { QuizEngine } from "@/components/dashboard/student/quiz-engine"
import { ForumThread } from "@/components/dashboard/student/forum-thread"

export function StudentDashboard() {
  const { user, profile } = useAuth()
  const [activeTab, setActiveTab] = useState("overview")

  // Sample data - in a real app, this would come from your database
  const studentData = {
    progress: 68,
    coursesCompleted: 3,
    totalCourses: 7,
    upcomingLessons: [
      { id: 1, title: "Air Law Basics", date: "Today, 3:00 PM", instructor: "Jane Smith" },
      { id: 2, title: "Navigation Fundamentals", date: "Tomorrow, 10:00 AM", instructor: "John Doe" },
    ],
    recentActivity: [
      { id: 1, type: "quiz", title: "Weather Patterns Quiz", score: "85%", date: "Yesterday" },
      { id: 2, type: "course", title: "Flight Controls", progress: "100%", date: "3 days ago" },
    ],
  }

  return (
    <div className="flex flex-col space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {profile?.first_name || user?.email?.split("@")[0] || "Student"}
        </h1>
        <p className="text-muted-foreground">Continue your aviation journey with personalized learning resources.</p>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Your Learning Journey</CardTitle>
          <CardDescription>Track your progress through the aviation curriculum</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm font-medium">{studentData.progress}%</span>
            </div>
            <Progress value={studentData.progress} className="h-2" />

            <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-3">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">
                    {studentData.coursesCompleted}/{studentData.totalCourses}
                  </p>
                  <p className="text-sm text-muted-foreground">Courses Completed</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <Award className="h-5 w-5 text-green-600 dark:text-green-300" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">12</p>
                  <p className="text-sm text-muted-foreground">Achievements</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                  <BarChart2 className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">24.5</p>
                  <p className="text-sm text-muted-foreground">Study Hours</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="mindmaps">Mind Maps</TabsTrigger>
          <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            {/* Upcoming Lessons */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Upcoming Lessons</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.upcomingLessons.map((lesson) => (
                    <div key={lesson.id} className="flex flex-col space-y-1 border-b pb-3 last:border-0">
                      <div className="flex justify-between">
                        <span className="font-medium">{lesson.title}</span>
                        <span className="text-sm text-muted-foreground">{lesson.date}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Instructor: {lesson.instructor}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.recentActivity.map((activity) => (
                    <div key={activity.id} className="flex flex-col space-y-1 border-b pb-3 last:border-0">
                      <div className="flex justify-between">
                        <span className="font-medium">{activity.title}</span>
                        <span className="text-sm text-muted-foreground">{activity.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {activity.type === "quiz" ? (
                          <span className="text-sm text-muted-foreground">Score: {activity.score}</span>
                        ) : (
                          <span className="text-sm text-muted-foreground">Progress: {activity.progress}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Access Tiles */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card
              className="cursor-pointer hover:bg-accent/50 transition-colors"
              onClick={() => setActiveTab("courses")}
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <BookOpen className="h-10 w-10 mb-2 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-medium">My Courses</h3>
                <p className="text-sm text-center text-muted-foreground">Continue your aviation courses</p>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:bg-accent/50 transition-colors"
              onClick={() => setActiveTab("mindmaps")}
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Brain className="h-10 w-10 mb-2 text-purple-600 dark:text-purple-400" />
                <h3 className="text-lg font-medium">Mind Maps</h3>
                <p className="text-sm text-center text-muted-foreground">Visual learning for complex topics</p>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:bg-accent/50 transition-colors"
              onClick={() => setActiveTab("quizzes")}
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Award className="h-10 w-10 mb-2 text-green-600 dark:text-green-400" />
                <h3 className="text-lg font-medium">Quiz Yourself</h3>
                <p className="text-sm text-center text-muted-foreground">Test your aviation knowledge</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Courses Tab */}
        <TabsContent value="courses" className="space-y-4">
          <StudentCourseList />
        </TabsContent>

        {/* Mind Maps Tab */}
        <TabsContent value="mindmaps" className="space-y-4">
          <MindMapExplorer />
        </TabsContent>

        {/* Quizzes Tab */}
        <TabsContent value="quizzes" className="space-y-4">
          <QuizEngine />
        </TabsContent>

        {/* Community Tab */}
        <TabsContent value="community" className="space-y-4">
          <ForumThread />
        </TabsContent>
      </Tabs>
    </div>
  )
}
