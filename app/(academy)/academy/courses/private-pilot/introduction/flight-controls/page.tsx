"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Brain, CheckCircle, FileText, Play } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"

export default function FlightControlsLessonPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("content")
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [showInteractiveDemo, setShowInteractiveDemo] = useState(false)

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setQuizSubmitted(true)

    // Calculate score
    const correctAnswers = {
      q1: "b",
      q2: "c",
      q3: "a",
    }

    let score = 0
    Object.keys(correctAnswers).forEach((question) => {
      if (quizAnswers[question] === correctAnswers[question as keyof typeof correctAnswers]) {
        score++
      }
    })

    const percentage = Math.round((score / Object.keys(correctAnswers).length) * 100)

    toast({
      title: "Quiz Submitted",
      description: `You scored ${percentage}% (${score}/${Object.keys(correctAnswers).length})`,
    })
  }

  const handleAnswerSelect = (question: string, answer: string) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [question]: answer,
    }))
  }

  return (
    <div className="container mx-auto max-w-5xl space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2">
            <Link
              href="/academy/courses/private-pilot/introduction"
              className="text-muted-foreground hover:text-foreground"
            >
              Introduction to Flying
            </Link>
            <span className="text-muted-foreground">/</span>
            <span>Flight Controls</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Flight Controls</h1>
          <div className="flex items-center gap-2">
            <Badge>Lesson 3</Badge>
            <Badge variant="outline">15 minutes</Badge>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/academy/courses/private-pilot/introduction/aircraft-components">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/academy/courses/private-pilot/aerodynamics/basic-principles">
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <Progress value={75} className="h-2" />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="content">Lesson Content</TabsTrigger>
          <TabsTrigger value="interactive">Interactive Demo</TabsTrigger>
          <TabsTrigger value="quiz">Knowledge Check</TabsTrigger>
          <TabsTrigger value="resources">Additional Resources</TabsTrigger>
        </TabsList>
        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Primary Flight Controls</CardTitle>
              <CardDescription>Understanding the main control surfaces of an aircraft</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video relative mb-4 overflow-hidden rounded-lg bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=800"
                    alt="Flight Controls Diagram"
                    className="h-full w-full object-cover"
                  />
                  <Button
                    variant="default"
                    size="icon"
                    className="absolute"
                    onClick={() => setShowInteractiveDemo(true)}
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>

              <div className="prose max-w-none dark:prose-invert">
                <h3>Introduction to Flight Controls</h3>
                <p>
                  Flight controls are the mechanisms that allow a pilot to control the aircraft's direction and
                  attitude. The primary flight controls consist of the ailerons, elevator, and rudder. These control
                  surfaces work by changing the airflow around the aircraft, which in turn affects the aircraft's
                  movement in three dimensions.
                </p>

                <h3>Ailerons</h3>
                <p>
                  Ailerons are located on the trailing edge of each wing, typically toward the wingtips. They work in
                  opposition to each other - when one aileron moves up, the other moves down. This creates differential
                  lift, causing the aircraft to roll around its longitudinal axis.
                </p>
                <ul>
                  <li>
                    When the control wheel or stick is moved to the left, the left aileron goes up and the right aileron
                    goes down
                  </li>
                  <li>This causes the aircraft to roll to the left</li>
                  <li>The opposite occurs when the control wheel or stick is moved to the right</li>
                </ul>

                <h3>Elevator</h3>
                <p>
                  The elevator is located on the trailing edge of the horizontal stabilizer. It controls the aircraft's
                  pitch - the up and down movement of the aircraft's nose around its lateral axis.
                </p>
                <ul>
                  <li>When the control wheel or stick is pulled back, the elevator moves up</li>
                  <li>This increases the downward force on the tail, causing the nose to pitch up</li>
                  <li>
                    When the control wheel or stick is pushed forward, the elevator moves down, causing the nose to
                    pitch down
                  </li>
                </ul>

                <h3>Rudder</h3>
                <p>
                  The rudder is located on the trailing edge of the vertical stabilizer. It controls the aircraft's yaw
                  - the side-to-side movement of the aircraft's nose around its vertical axis.
                </p>
                <ul>
                  <li>When the left rudder pedal is pressed, the rudder deflects to the left</li>
                  <li>This pushes the tail to the right, causing the nose to yaw to the left</li>
                  <li>The opposite occurs when the right rudder pedal is pressed</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setActiveTab("interactive")} className="w-full">
                Try Interactive Demo
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Secondary Flight Controls</CardTitle>
              <CardDescription>Understanding trim, flaps, and other auxiliary controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose max-w-none dark:prose-invert">
                <h3>Trim Controls</h3>
                <p>
                  Trim controls are used to reduce the control pressures needed during flight. They allow the pilot to
                  "trim out" control pressures so that the aircraft maintains the desired attitude without constant
                  pressure on the controls.
                </p>

                <h3>Flaps</h3>
                <p>
                  Flaps are located on the trailing edge of the wings, typically inboard of the ailerons. They are used
                  to increase lift at lower airspeeds and to increase drag when needed, such as during landing.
                </p>

                <h3>Slats</h3>
                <p>
                  Slats are located on the leading edge of the wings. They extend forward and down to increase the
                  camber of the wing, which increases lift at lower airspeeds.
                </p>

                <h3>Spoilers</h3>
                <p>
                  Spoilers are located on the top surface of the wings. They are used to disrupt airflow over the wing,
                  which reduces lift and increases drag. They can be used to assist in descent, to reduce airspeed, or
                  to assist in roll control.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interactive" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Flight Controls Demo</CardTitle>
              <CardDescription>Experiment with flight controls and see their effects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video relative overflow-hidden rounded-lg bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=800"
                    alt="Interactive Flight Controls Demo"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-4">
                    <Button>Aileron Demo</Button>
                    <Button>Elevator Demo</Button>
                    <Button>Rudder Demo</Button>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-lg border p-4">
                <h3 className="text-lg font-medium">Control Inputs</h3>
                <p className="text-sm text-muted-foreground">
                  Use the sliders below to control the aircraft's flight surfaces
                </p>

                <div className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="aileron" className="text-sm font-medium">
                        Aileron Position
                      </label>
                      <span className="text-sm text-muted-foreground">Neutral</span>
                    </div>
                    <input type="range" id="aileron" min="-100" max="100" defaultValue="0" className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Left Roll</span>
                      <span>Right Roll</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="elevator" className="text-sm font-medium">
                        Elevator Position
                      </label>
                      <span className="text-sm text-muted-foreground">Neutral</span>
                    </div>
                    <input type="range" id="elevator" min="-100" max="100" defaultValue="0" className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Nose Down</span>
                      <span>Nose Up</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="rudder" className="text-sm font-medium">
                        Rudder Position
                      </label>
                      <span className="text-sm text-muted-foreground">Neutral</span>
                    </div>
                    <input type="range" id="rudder" min="-100" max="100" defaultValue="0" className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Yaw Left</span>
                      <span>Yaw Right</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setActiveTab("quiz")} className="w-full">
                Take Knowledge Check
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="quiz" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Check</CardTitle>
              <CardDescription>Test your understanding of flight controls</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleQuizSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-lg font-medium">
                      1. Which control surface is primarily responsible for roll?
                    </h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="q1"
                          value="a"
                          checked={quizAnswers.q1 === "a"}
                          onChange={() => handleAnswerSelect("q1", "a")}
                          disabled={quizSubmitted}
                        />
                        <span>Elevator</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="q1"
                          value="b"
                          checked={quizAnswers.q1 === "b"}
                          onChange={() => handleAnswerSelect("q1", "b")}
                          disabled={quizSubmitted}
                        />
                        <span>Ailerons</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="q1"
                          value="c"
                          checked={quizAnswers.q1 === "c"}
                          onChange={() => handleAnswerSelect("q1", "c")}
                          disabled={quizSubmitted}
                        />
                        <span>Rudder</span>
                      </label>
                    </div>
                    {quizSubmitted && quizAnswers.q1 === "b" && (
                      <div className="mt-2 text-sm text-green-500">
                        <CheckCircle className="mr-1 inline-block h-4 w-4" />
                        Correct! Ailerons control roll around the longitudinal axis.
                      </div>
                    )}
                    {quizSubmitted && quizAnswers.q1 !== "b" && (
                      <div className="mt-2 text-sm text-red-500">Incorrect. The correct answer is Ailerons.</div>
                    )}
                  </div>

                  <Separator />

                  <div>
                    <h3 className="mb-2 text-lg font-medium">
                      2. When the elevator is moved up, what happens to the aircraft?
                    </h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="q2"
                          value="a"
                          checked={quizAnswers.q2 === "a"}
                          onChange={() => handleAnswerSelect("q2", "a")}
                          disabled={quizSubmitted}
                        />
                        <span>The aircraft rolls to the right</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="q2"
                          value="b"
                          checked={quizAnswers.q2 === "b"}
                          onChange={() => handleAnswerSelect("q2", "b")}
                          disabled={quizSubmitted}
                        />
                        <span>The nose pitches down</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="q2"
                          value="c"
                          checked={quizAnswers.q2 === "c"}
                          onChange={() => handleAnswerSelect("q2", "c")}
                          disabled={quizSubmitted}
                        />
                        <span>The nose pitches up</span>
                      </label>
                    </div>
                    {quizSubmitted && quizAnswers.q2 === "c" && (
                      <div className="mt-2 text-sm text-green-500">
                        <CheckCircle className="mr-1 inline-block h-4 w-4" />
                        Correct! When the elevator moves up, it creates a downward force on the tail, causing the nose
                        to pitch up.
                      </div>
                    )}
                    {quizSubmitted && quizAnswers.q2 !== "c" && (
                      <div className="mt-2 text-sm text-red-500">
                        Incorrect. The correct answer is "The nose pitches up".
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div>
                    <h3 className="mb-2 text-lg font-medium">3. What is the primary purpose of trim controls?</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="q3"
                          value="a"
                          checked={quizAnswers.q3 === "a"}
                          onChange={() => handleAnswerSelect("q3", "a")}
                          disabled={quizSubmitted}
                        />
                        <span>To reduce control pressures needed during flight</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="q3"
                          value="b"
                          checked={quizAnswers.q3 === "b"}
                          onChange={() => handleAnswerSelect("q3", "b")}
                          disabled={quizSubmitted}
                        />
                        <span>To increase lift at lower airspeeds</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="q3"
                          value="c"
                          checked={quizAnswers.q3 === "c"}
                          onChange={() => handleAnswerSelect("q3", "c")}
                          disabled={quizSubmitted}
                        />
                        <span>To disrupt airflow over the wing</span>
                      </label>
                    </div>
                    {quizSubmitted && quizAnswers.q3 === "a" && (
                      <div className="mt-2 text-sm text-green-500">
                        <CheckCircle className="mr-1 inline-block h-4 w-4" />
                        Correct! Trim controls reduce the control pressures needed during flight.
                      </div>
                    )}
                    {quizSubmitted && quizAnswers.q3 !== "a" && (
                      <div className="mt-2 text-sm text-red-500">
                        Incorrect. The correct answer is "To reduce control pressures needed during flight".
                      </div>
                    )}
                  </div>
                </div>

                {!quizSubmitted && (
                  <Button type="submit" className="w-full">
                    Submit Answers
                  </Button>
                )}

                {quizSubmitted && (
                  <Button onClick={() => setActiveTab("resources")} className="w-full">
                    View Additional Resources
                  </Button>
                )}
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
              <CardDescription>Explore more about flight controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-medium">Video Resources</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center gap-2">
                      <Play className="h-4 w-4 text-primary" />
                      <a href="#" className="text-sm hover:underline">
                        Flight Controls Explained (15:32)
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Play className="h-4 w-4 text-primary" />
                      <a href="#" className="text-sm hover:underline">
                        How Ailerons Work (8:45)
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Play className="h-4 w-4 text-primary" />
                      <a href="#" className="text-sm hover:underline">
                        Trim Systems Explained (12:20)
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-medium">Reading Materials</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <a href="#" className="text-sm hover:underline">
                        FAA Pilot's Handbook - Chapter 5: Flight Controls
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <a href="#" className="text-sm hover:underline">
                        Advanced Aerodynamics and Control Surfaces
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <a href="#" className="text-sm hover:underline">
                        Flight Control Systems in Modern Aircraft
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-medium">Ask AI Tutor</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Have questions about flight controls? Ask our AI tutor for personalized explanations.
                </p>
                <div className="mt-4">
                  <Button asChild className="w-full">
                    <Link href="/academy/ai-tutor">
                      <Brain className="mr-2 h-4 w-4" />
                      Start AI Tutor Session
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/academy/courses/private-pilot/aerodynamics/basic-principles">
                  Continue to Next Lesson
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
