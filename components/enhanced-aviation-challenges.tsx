"use client"

import { motion } from "framer-motion"
import { AlertTriangle, BookOpen, Cloud, FileText, Clock, Database } from "lucide-react"

export function EnhancedAviationChallenges() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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

  const challenges = [
    {
      icon: Database,
      title: "Information Fragmentation",
      description:
        "Critical flight data is scattered across multiple disconnected tools, creating dangerous information gaps.",
      stats: "5+ separate tools | 30+ minutes wasted",
      color: "blue",
    },
    {
      icon: Cloud,
      title: "Weather Complexity",
      description: "Raw METAR/TAF data requires expert decoding under time pressure, leading to misinterpretations.",
      stats: "15+ minutes to decode | 40% misinterpretation rate",
      color: "cyan",
    },
    {
      icon: BookOpen,
      title: "Training Inefficiency",
      description:
        "One-size-fits-all training fails modern pilots with static materials that don't adapt to individual learning styles.",
      stats: "30% knowledge retention | 2x longer learning curve",
      color: "indigo",
    },
    {
      icon: Clock,
      title: "Time Pressure",
      description:
        "Pilots face intense time constraints during pre-flight preparation, often rushing through critical safety checks.",
      stats: "45% of incidents linked to rushed preparation",
      color: "amber",
    },
    {
      icon: AlertTriangle,
      title: "Safety Vulnerabilities",
      description:
        "Human factors and information overload create critical safety vulnerabilities during high-workload phases.",
      stats: "73% of incidents involve human factors",
      color: "red",
    },
    {
      icon: FileText,
      title: "Regulatory Complexity",
      description: "Navigating constantly changing aviation regulations requires significant time and effort.",
      stats: "100+ regulatory changes annually",
      color: "purple",
    },
  ]

  return (
    <section id="pain-points" className="relative px-4 py-24">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            <span className="text-gradient-cyan">Aviation Challenges</span> We Solve
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-blue-300/80">
            Today's pilots face critical obstacles that outdated tools and fragmented systems only make worse.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="card-hover glass-card rounded-xl p-6"
            >
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-${challenge.color}-500/20 to-${challenge.color}-600/20 text-${challenge.color}-400`}
              >
                <challenge.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{challenge.title}</h3>
              <p className="mb-3 text-blue-300/80">{challenge.description}</p>
              <div className="mt-auto rounded-lg bg-blue-900/20 px-3 py-2 text-sm font-medium text-blue-300">
                {challenge.stats}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block rounded-xl border border-blue-500/20 bg-blue-900/10 px-6 py-3 backdrop-blur-sm">
            <p className="text-gradient-cyan text-xl font-medium">
              Aviator AI transforms these challenges into opportunities for safer, more efficient flight operations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
