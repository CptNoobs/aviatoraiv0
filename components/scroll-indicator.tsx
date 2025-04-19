"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Hide the indicator when scrolling past the hero section
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("pain-points")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed left-1/2 bottom-10 -translate-x-1/2 z-10 cursor-pointer mx-auto w-auto"
      onClick={scrollToNextSection}
    >
      <div className="flex flex-col items-center">
        <span className="mb-2 text-sm font-medium text-blue-300 whitespace-nowrap">Scroll to Learn More</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 backdrop-blur-sm"
        >
          <ChevronDown className="h-5 w-5 text-blue-300" />
        </motion.div>
      </div>
    </motion.div>
  )
}
