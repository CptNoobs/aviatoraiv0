"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import type { ReactNode } from "react"

interface PillarSectionProps {
  id: string
  title: string
  subtitle: string
  description: string
  icon: ReactNode
  features: {
    title: string
    description: string
  }[]
  isActive: boolean
  color: string
  image?: string
}

export function PillarSection({
  id,
  title,
  subtitle,
  description,
  icon,
  features,
  isActive,
  color,
  image,
}: PillarSectionProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
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
    <section
      id={`pillar-${id}`}
      className={`min-h-screen w-full py-24 transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            className="flex flex-col justify-center"
          >
            <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl ${color}`}>{icon}</div>
            <h2 className="mb-2 text-4xl font-bold text-white">{title}</h2>
            <p className={`mb-4 text-xl font-medium ${color.replace("bg-", "text-").replace("/20", "")}`}>{subtitle}</p>
            <p className="mb-8 text-lg text-blue-100/70">{description}</p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex items-start">
                  <div
                    className={`mr-4 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${color}`}
                  >
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-blue-100/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            className="flex items-center justify-center"
          >
            <div className="relative h-full w-full max-w-md overflow-hidden rounded-xl border border-blue-500/20 bg-blue-900/10 p-4 backdrop-blur-sm">
              {image ? (
                <img src={image || "/placeholder.svg"} alt={title} className="w-full rounded-lg object-cover" />
              ) : (
                <div className="flex h-full min-h-[400px] items-center justify-center rounded-lg border border-dashed border-blue-500/30 bg-blue-950/20 p-8 text-center">
                  <p className="text-blue-300">Interactive {title} visualization coming soon</p>
                </div>
              )}
              <div className="absolute inset-0 pointer-events-none border border-blue-500/10 rounded-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
