"use client"
import { motion } from "framer-motion"
import { Plane } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function LandingHeader() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-blue-500/10 bg-background/80 backdrop-blur-md"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Plane className="mr-2 h-6 w-6 text-blue-500" />
          <span className="text-xl font-bold">Aviator AI</span>
        </div>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}
