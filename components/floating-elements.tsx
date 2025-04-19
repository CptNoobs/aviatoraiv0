"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Plane, Cloud, GraduationCap } from "lucide-react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Top left elements */}
      <motion.div
        className="absolute left-[10%] top-[15%] flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ rotate: "-10deg" }}
      >
        <Plane className="h-8 w-8 text-blue-400" />
      </motion.div>

      {/* Top right elements */}
      <motion.div
        className="absolute right-[15%] top-[25%] flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{ rotate: "10deg" }}
      >
        <Cloud className="h-7 w-7 text-blue-400" />
      </motion.div>

      {/* Bottom left elements */}
      <motion.div
        className="absolute bottom-[20%] left-[20%] flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        style={{ rotate: "15deg" }}
      >
        <GraduationCap className="h-6 w-6 text-cyan-400" />
      </motion.div>

      {/* Bottom right elements */}
      <motion.div
        className="absolute bottom-[30%] right-[10%] flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ rotate: "-5deg" }}
      >
        <Plane className="h-5 w-5 text-blue-400" />
      </motion.div>

      {/* Animated circles */}
      <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-float-slow rounded-full border border-blue-500/10 opacity-20" />
      <div className="absolute right-1/4 bottom-1/4 h-48 w-48 animate-float rounded-full border border-cyan-500/10 opacity-20" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-rotate-slow rounded-full border border-blue-500/5 opacity-10" />
    </div>
  )
}
