"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page the user has scrolled
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY / windowHeight

      setScrollProgress(scrolled)

      // Only show progress bar after scrolling past hero section
      const heroHeight = window.innerHeight
      if (window.scrollY > heroHeight * 0.7) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-16 left-0 z-50 h-1 w-full bg-blue-900/20"
    >
      <motion.div className="h-full bg-blue-500" style={{ width: `${scrollProgress * 100}%` }} />
    </motion.div>
  )
}
