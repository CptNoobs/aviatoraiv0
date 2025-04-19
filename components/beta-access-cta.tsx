"use client"

import { motion } from "framer-motion"
import { WaitlistForm } from "@/components/waitlist-form"

export function BetaAccessCTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="beta-access" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none"></div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="max-w-3xl mx-auto text-center mb-10" variants={itemVariants}>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Join the Aviator AI Beta Program
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Be among the first to experience the future of aviation technology. Sign up now for early access to Aviator
            AI.
          </p>
        </motion.div>

        <WaitlistForm />

        <motion.div
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="bg-black/20 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4 md:p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-500 mb-2">Early Access</div>
            <p className="text-muted-foreground text-sm md:text-base">
              Be the first to experience our revolutionary aviation AI platform.
            </p>
          </div>

          <div className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 md:p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-500 mb-2">Exclusive Features</div>
            <p className="text-muted-foreground text-sm md:text-base">
              Get access to beta features before they're released to the public.
            </p>
          </div>

          <div className="bg-black/20 backdrop-blur-sm border border-indigo-500/20 rounded-lg p-4 md:p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-indigo-500 mb-2">Shape the Future</div>
            <p className="text-muted-foreground text-sm md:text-base">
              Provide feedback that will help shape the future of Aviator AI.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
