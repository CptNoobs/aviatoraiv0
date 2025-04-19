"use client"

import { motion } from "framer-motion"
import { Brain, MessageSquare, Users, UserPlus, BarChart, FileText, Zap } from "lucide-react"

export function InstructorStudentBridge() {
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
    <section id="instructor-student-bridge" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            <span className="text-gradient-blue">AI-Powered Bridge</span> Between Instructors & Students
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-blue-300/80">
            Our intelligent platform creates a seamless connection between instructors and students, enhancing the
            learning experience with real-time feedback and personalized insights.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-xl border border-blue-500/20 bg-blue-900/10 p-6 backdrop-blur-sm"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-400">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">For Instructors</h3>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.div variants={fadeIn} className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                  <BarChart className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">AI-Generated Student Insights</h4>
                  <p className="text-blue-300/80">
                    Receive detailed analytics on student performance with AI-identified knowledge gaps and personalized
                    recommendations.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Automated Lesson Planning</h4>
                  <p className="text-blue-300/80">
                    AI suggests optimal lesson plans based on class progress and individual student needs, saving hours
                    of preparation time.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Real-Time Communication</h4>
                  <p className="text-blue-300/80">
                    Seamlessly connect with students through integrated messaging, with AI-suggested discussion topics
                    based on recent performance.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full border border-blue-500/10 opacity-30"></div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-xl border border-blue-500/20 bg-blue-900/10 p-6 backdrop-blur-sm"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400">
                <UserPlus className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">For Students</h3>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.div variants={fadeIn} className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                  <Brain className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Personalized Learning Path</h4>
                  <p className="text-blue-300/80">
                    AI adapts your curriculum based on your learning style, strengths, and areas needing improvement.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Instant Feedback</h4>
                  <p className="text-blue-300/80">
                    Receive immediate, constructive feedback on quizzes and assignments with specific guidance on how to
                    improve.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">AI Study Assistant</h4>
                  <p className="text-blue-300/80">
                    Ask questions anytime and get instant, accurate answers that connect to your course materials and
                    previous lessons.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full border border-indigo-500/10 opacity-30"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative overflow-hidden rounded-lg border border-blue-500/20 bg-blue-900/10 p-8 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                <Brain className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="mb-2 text-xl font-bold">AI-Powered Progress Tracking</h3>
                <p className="text-blue-300/80">
                  Our system continuously monitors student progress and instructor feedback, creating a virtuous
                  learning cycle that gets smarter over time.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
