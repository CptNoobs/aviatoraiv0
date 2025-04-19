"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Plane, Cloud, BookOpen, Radar, FileText, Compass, Wind, BarChart } from "lucide-react"

export function FloatingAviationIcons() {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  if (!mounted) return null

  // Reduce number of icons on mobile
  const icons = [
    {
      icon: Plane,
      delay: 0.2,
      duration: 8,
      position: { top: "15%", left: "10%" },
      rotate: -15,
      size: "h-8 w-8",
      color: "text-blue-400",
      bg: "from-blue-500/20 to-indigo-500/20",
      showOnMobile: true,
    },
    {
      icon: Cloud,
      delay: 0.4,
      duration: 10,
      position: { top: "25%", right: "15%" },
      rotate: 10,
      size: "h-7 w-7",
      color: "text-cyan-400",
      bg: "from-cyan-500/20 to-blue-500/20",
      showOnMobile: true,
    },
    {
      icon: BookOpen,
      delay: 0.6,
      duration: 9,
      position: { bottom: "20%", left: "20%" },
      rotate: 15,
      size: "h-6 w-6",
      color: "text-indigo-400",
      bg: "from-indigo-500/20 to-purple-500/20",
      showOnMobile: true,
    },
    {
      icon: Radar,
      delay: 0.8,
      duration: 11,
      position: { bottom: "30%", right: "10%" },
      rotate: -5,
      size: "h-7 w-7",
      color: "text-green-400",
      bg: "from-green-500/20 to-teal-500/20",
      showOnMobile: false,
    },
    {
      icon: FileText,
      delay: 1.0,
      duration: 9.5,
      position: { top: "40%", left: "15%" },
      rotate: 8,
      size: "h-6 w-6",
      color: "text-purple-400",
      bg: "from-purple-500/20 to-indigo-500/20",
      showOnMobile: false,
    },
    {
      icon: Compass,
      delay: 1.2,
      duration: 10.5,
      position: { top: "35%", right: "25%" },
      rotate: -12,
      size: "h-7 w-7",
      color: "text-amber-400",
      bg: "from-amber-500/20 to-orange-500/20",
      showOnMobile: false,
    },
    {
      icon: Wind,
      delay: 1.4,
      duration: 8.5,
      position: { bottom: "35%", left: "30%" },
      rotate: 5,
      size: "h-6 w-6",
      color: "text-teal-400",
      bg: "from-teal-500/20 to-cyan-500/20",
      showOnMobile: false,
    },
    {
      icon: BarChart,
      delay: 1.6,
      duration: 9,
      position: { bottom: "25%", right: "20%" },
      rotate: -8,
      size: "h-6 w-6",
      color: "text-red-400",
      bg: "from-red-500/20 to-pink-500/20",
      showOnMobile: false,
    },
  ]

  // Filter icons for mobile
  const visibleIcons = isMobile ? icons.filter((icon) => icon.showOnMobile) : icons

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {visibleIcons.map((item, index) => {
        const Icon = item.icon

        return (
          <motion.div
            key={index}
            className={`absolute flex items-center justify-center rounded-xl bg-gradient-to-br ${item.bg} backdrop-blur-sm`}
            style={{
              ...item.position,
              rotate: `${item.rotate}deg`,
              width: "3.5rem",
              height: "3.5rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, delay: item.delay }}
          >
            <Icon className={`${item.size} ${item.color}`} />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: item.duration,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-xl border border-blue-500/20"></div>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}
