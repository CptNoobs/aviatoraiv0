"use client"

import { motion } from "framer-motion"
import { BookOpen, Brain, MessageSquare, Users, UserPlus, BarChart, FileText, Zap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MindMapDemo } from "@/components/mind-map-demo"

export function EnhancedAcademySection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id="enhanced-academy" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            <span className="text-gradient-blue">AI Academy</span> Learning Platform
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-blue-300/80">
            Our adaptive learning platform uses AI to create a personalized curriculum that evolves with your progress,
            helping you master aviation concepts 2x faster.
          </p>
        </motion.div>

        <Tabs defaultValue="learning-tools" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="learning-tools" className="gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Learning Tools</span>
              <span className="sm:hidden">Tools</span>
            </TabsTrigger>
            <TabsTrigger value="instructor-bridge" className="gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Instructor Bridge</span>
              <span className="sm:hidden">Instructor</span>
            </TabsTrigger>
            <TabsTrigger value="student-tools" className="gap-2">
              <UserPlus className="h-4 w-4" />
              <span className="hidden sm:inline">Student Tools</span>
              <span className="sm:hidden">Student</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="learning-tools">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-blue-500/20 bg-blue-900/10 p-4 sm:p-6 backdrop-blur-sm"
            >
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-bold">Interactive Learning Tools</h3>
                  <p className="mb-4 text-blue-300/80">
                    Our platform offers a suite of interactive tools designed to make complex aviation concepts easier
                    to understand and remember, with AI-powered personalization that adapts to your learning style.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Interactive Mind Maps</h4>
                        <p className="text-blue-300/80">
                          Visualize complex regulations and concepts with dynamic, interconnected maps that adapt to
                          your learning progress.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <Brain className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">AI-Powered Learning Path</h4>
                        <p className="text-blue-300/80">
                          Our AI creates a personalized learning journey that adapts to your strengths, weaknesses, and
                          learning style.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">24/7 AI Tutor</h4>
                        <p className="text-blue-300/80">
                          Get instant answers to your questions at any time, with explanations tailored to your
                          knowledge level.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <MindMapDemo />
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="instructor-bridge">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-blue-500/20 bg-blue-900/10 p-4 sm:p-6 backdrop-blur-sm"
            >
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-bold">Instructor Dashboard</h3>
                  <p className="mb-4 text-blue-300/80">
                    Equip instructors with comprehensive tools to manage classes, track student progress, and provide
                    personalized feedback powered by AI insights.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <BarChart className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">AI-Generated Student Insights</h4>
                        <p className="text-blue-300/80">
                          Receive detailed analytics on student performance with AI-identified knowledge gaps and
                          personalized recommendations.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Automated Lesson Planning</h4>
                        <p className="text-blue-300/80">
                          AI suggests optimal lesson plans based on class progress and individual student needs, saving
                          hours of preparation time.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Real-Time Communication</h4>
                        <p className="text-blue-300/80">
                          Seamlessly connect with students through integrated messaging, with AI-suggested discussion
                          topics based on recent performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex h-full items-center justify-center rounded-lg border border-blue-500/20 bg-blue-950/30 p-4">
                  <div className="space-y-4 rounded-lg border border-blue-500/20 bg-blue-900/20 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-blue-500/20"></div>
                        <div>
                          <div className="h-4 w-32 rounded-full bg-blue-500/20"></div>
                          <div className="mt-1 h-3 w-24 rounded-full bg-blue-500/10"></div>
                        </div>
                      </div>
                      <div className="h-6 w-20 rounded-full bg-blue-500/20"></div>
                    </div>

                    <div className="h-40 rounded-lg bg-blue-500/10"></div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-20 rounded-lg bg-blue-500/20"></div>
                      <div className="h-20 rounded-lg bg-blue-500/20"></div>
                      <div className="h-20 rounded-lg bg-blue-500/20"></div>
                    </div>

                    <div className="flex justify-between">
                      <div className="h-8 w-32 rounded-full bg-blue-500/20"></div>
                      <div className="h-8 w-32 rounded-full bg-blue-500/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="student-tools">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-blue-500/20 bg-blue-900/10 p-4 sm:p-6 backdrop-blur-sm"
            >
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-bold">Student Learning Experience</h3>
                  <p className="mb-4 text-blue-300/80">
                    Our platform provides students with a personalized learning journey that adapts to their unique
                    needs, learning style, and pace.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                        <Brain className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Personalized Learning Path</h4>
                        <p className="text-blue-300/80">
                          AI adapts your curriculum based on your learning style, strengths, and areas needing
                          improvement.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                        <Zap className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Instant Feedback</h4>
                        <p className="text-blue-300/80">
                          Receive immediate, constructive feedback on quizzes and assignments with specific guidance on
                          how to improve.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">AI Study Assistant</h4>
                        <p className="text-blue-300/80">
                          Ask questions anytime and get instant, accurate answers that connect to your course materials
                          and previous lessons.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex h-full items-center justify-center rounded-lg border border-blue-500/20 bg-blue-950/30 p-4">
                  <div className="space-y-4 rounded-lg border border-blue-500/20 bg-blue-900/20 p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-indigo-500/20"></div>
                      <div>
                        <div className="h-4 w-40 rounded-full bg-indigo-500/20"></div>
                        <div className="mt-1 h-3 w-32 rounded-full bg-indigo-500/10"></div>
                      </div>
                    </div>

                    <div className="h-4 w-full rounded-full bg-indigo-500/10">
                      <div className="h-4 w-3/4 rounded-full bg-indigo-500/40"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-2">
                        <div className="h-4 w-full rounded-full bg-indigo-500/20"></div>
                        <div className="h-20 rounded-lg bg-indigo-500/10"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 w-full rounded-full bg-indigo-500/20"></div>
                        <div className="h-20 rounded-lg bg-indigo-500/10"></div>
                      </div>
                    </div>

                    <div className="h-32 rounded-lg bg-indigo-500/10"></div>

                    <div className="flex justify-between">
                      <div className="h-8 w-32 rounded-full bg-indigo-500/20"></div>
                      <div className="h-8 w-32 rounded-full bg-indigo-500/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
