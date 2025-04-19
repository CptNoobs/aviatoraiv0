"use client"

import { motion } from "framer-motion"
import { BookOpen, Cloud, Plane } from "lucide-react"
import { useEffect, useState } from "react"

interface VerticalPillarNavProps {
  activePillar: string
  setActivePillar: (pillar: string) => void
}

export function VerticalPillarNav({ activePillar, setActivePillar }: VerticalPillarNavProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handleClick = (pillar: string) => {
    setActivePillar(pillar)
    const element = document.getElementById(`pillar-${pillar}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Hide on mobile and show horizontal navigation instead
  if (isMobile) {
    return (
      <div className="sticky top-16 z-30 bg-background/80 backdrop-blur-md border-b border-blue-500/10">
        <div className="container flex justify-center py-2">
          <div className="flex space-x-4">
            <button
              onClick={() => handleClick("academy")}
              className={`flex flex-col items-center p-2 rounded-md transition-colors ${
                activePillar === "academy" ? "text-blue-500" : "text-blue-300/60 hover:text-blue-300"
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span className="text-xs mt-1">Academy</span>
            </button>
            <button
              onClick={() => handleClick("weather")}
              className={`flex flex-col items-center p-2 rounded-md transition-colors ${
                activePillar === "weather" ? "text-blue-500" : "text-blue-300/60 hover:text-blue-300"
              }`}
            >
              <Cloud className="h-5 w-5" />
              <span className="text-xs mt-1">Weather</span>
            </button>
            <button
              onClick={() => handleClick("copilot")}
              className={`flex flex-col items-center p-2 rounded-md transition-colors ${
                activePillar === "copilot" ? "text-blue-500" : "text-blue-300/60 hover:text-blue-300"
              }`}
            >
              <Plane className="h-5 w-5" />
              <span className="text-xs mt-1">Co-Pilot</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed right-8 top-1/2 z-30 -translate-y-1/2 transform">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col items-center space-y-6"
      >
        <button
          onClick={() => handleClick("academy")}
          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/20 bg-background/80 backdrop-blur-sm transition-all hover:border-blue-500/50"
        >
          <BookOpen
            className={`h-6 w-6 transition-colors ${
              activePillar === "academy" ? "text-blue-500" : "text-blue-300/60 group-hover:text-blue-300"
            }`}
          />
          <span
            className={`absolute right-full mr-4 whitespace-nowrap rounded-md bg-background/80 px-2 py-1 text-sm font-medium backdrop-blur-sm transition-all ${
              activePillar === "academy"
                ? "opacity-100"
                : "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
            }`}
          >
            AI Academy
          </span>
          <div
            className={`absolute left-full ml-2 h-0.5 transition-all ${
              activePillar === "academy" ? "w-8 bg-blue-500" : "w-4 bg-blue-500/40"
            }`}
          ></div>
        </button>

        <button
          onClick={() => handleClick("weather")}
          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/20 bg-background/80 backdrop-blur-sm transition-all hover:border-blue-500/50"
        >
          <Cloud
            className={`h-6 w-6 transition-colors ${
              activePillar === "weather" ? "text-blue-500" : "text-blue-300/60 group-hover:text-blue-300"
            }`}
          />
          <span
            className={`absolute right-full mr-4 whitespace-nowrap rounded-md bg-background/80 px-2 py-1 text-sm font-medium backdrop-blur-sm transition-all ${
              activePillar === "weather"
                ? "opacity-100"
                : "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
            }`}
          >
            Weather Intelligence
          </span>
          <div
            className={`absolute left-full ml-2 h-0.5 transition-all ${
              activePillar === "weather" ? "w-8 bg-blue-500" : "w-4 bg-blue-500/40"
            }`}
          ></div>
        </button>

        <button
          onClick={() => handleClick("copilot")}
          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/20 bg-background/80 backdrop-blur-sm transition-all hover:border-blue-500/50"
        >
          <Plane
            className={`h-6 w-6 transition-colors ${
              activePillar === "copilot" ? "text-blue-500" : "text-blue-300/60 group-hover:text-blue-300"
            }`}
          />
          <span
            className={`absolute right-full mr-4 whitespace-nowrap rounded-md bg-background/80 px-2 py-1 text-sm font-medium backdrop-blur-sm transition-all ${
              activePillar === "copilot"
                ? "opacity-100"
                : "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
            }`}
          >
            AI Co-Pilot Ops
          </span>
          <div
            className={`absolute left-full ml-2 h-0.5 transition-all ${
              activePillar === "copilot" ? "w-8 bg-blue-500" : "w-4 bg-blue-500/40"
            }`}
          ></div>
        </button>
      </motion.div>
    </div>
  )
}
