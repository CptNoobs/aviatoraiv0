"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { BookOpen, Cloud, Plane, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CursorEffects } from "@/components/cursor-effects"
import { LandingHeader } from "@/components/landing-header"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { VerticalPillarNav } from "@/components/vertical-pillar-nav"
import { PillarSection } from "@/components/pillar-section"
import { FloatingAviationIcons } from "@/components/floating-aviation-icons"
import { ScrollProgress } from "@/components/scroll-progress"
import { AdvancedWeatherSection } from "@/components/advanced-weather-section"
import { BetaAccessCTA } from "@/components/beta-access-cta"
import { EnhancedAcademySection } from "@/components/enhanced-academy-section"
import { EnhancedCopilotSection } from "@/components/enhanced-copilot-section"
import { EnhancedAviationChallenges } from "@/components/enhanced-aviation-challenges"
import Link from "next/link"

export function LandingPage() {
  const [activePillar, setActivePillar] = useState("academy")
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleScroll = () => {
      const academySection = document.getElementById("pillar-academy")
      const weatherSection = document.getElementById("pillar-weather")
      const copilotSection = document.getElementById("pillar-copilot")

      if (!academySection || !weatherSection || !copilotSection) return

      const scrollPosition = window.scrollY + window.innerHeight / 2

      if (scrollPosition >= copilotSection.offsetTop) {
        setActivePillar("copilot")
      } else if (scrollPosition >= weatherSection.offsetTop) {
        setActivePillar("weather")
      } else if (scrollPosition >= academySection.offsetTop) {
        setActivePillar("academy")
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="flex min-h-screen flex-col blueprint-bg">
      <LandingHeader />
      {mounted && <CursorEffects />}
      <ScrollProgress />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 text-center md:py-32">
        <FloatingAviationIcons />

        <motion.div style={{ opacity, scale }} className="container relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-block rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-500 backdrop-blur-sm"
          >
            Transport Canada Compliant
          </motion.div>

          <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-6xl">
            <span className="block">Learn Smarter, Fly Safer with</span>
            <span className="text-gradient-blue glow-blue">Your AI Co-Pilot</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 text-base text-blue-300 md:text-xl"
          >
            Aviator AI combines training, weather intelligence, and flight operations into one powerful unified
            platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="btn-blue-glow px-6 md:px-8 text-white"
              onClick={() => {
                const waitlistSection = document.getElementById("beta-access")
                if (waitlistSection) {
                  waitlistSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        <ScrollIndicator />
      </section>

      {/* Enhanced Aviation Challenges Section */}
      <EnhancedAviationChallenges />

      {/* Vertical Pillar Navigation */}
      <VerticalPillarNav activePillar={activePillar} setActivePillar={setActivePillar} />

      {/* AI Academy Pillar */}
      <PillarSection
        id="academy"
        title="AI Academy"
        subtitle="Personalized Learning for Aviation Excellence"
        description="Our adaptive learning platform uses AI to create a personalized curriculum that evolves with your progress, helping you master aviation concepts 2x faster."
        icon={<BookOpen className="h-8 w-8 text-white" />}
        features={[
          {
            title: "Interactive Mind Maps",
            description:
              "Visualize complex regulations and concepts with dynamic, interconnected maps that adapt to your learning progress.",
          },
          {
            title: "AI Tutor Available 24/7",
            description:
              "Ask questions anytime and receive instant, accurate answers tailored to your knowledge level.",
          },
          {
            title: "Personalized Learning Path",
            description:
              "Our AI identifies your knowledge gaps and creates a customized curriculum that evolves as you progress.",
          },
        ]}
        isActive={activePillar === "academy"}
        color="bg-blue-500/20"
      />

      {/* Enhanced Academy Section with Tabs */}
      <EnhancedAcademySection />

      {/* Weather Intelligence Pillar */}
      <PillarSection
        id="weather"
        title="Weather Intelligence"
        subtitle="AI-Powered Weather Analysis"
        description="Transform complex weather data into clear, actionable insights with our AI-powered weather intelligence system."
        icon={<Cloud className="h-8 w-8 text-white" />}
        features={[
          {
            title: "METAR/TAF Decoded",
            description:
              "Our AI instantly translates complex METAR and TAF data into plain language, highlighting critical information.",
          },
          {
            title: "Hazard Identification",
            description: "Automatically identifies and alerts you to potential weather hazards along your route.",
          },
          {
            title: "Real-Time Updates",
            description:
              "Receive instant notifications when weather conditions change, with AI-generated impact assessments.",
          },
        ]}
        isActive={activePillar === "weather"}
        color="bg-cyan-500/20"
      />

      {/* Advanced Weather Section */}
      <AdvancedWeatherSection />

      {/* AI Co-Pilot Ops Pillar */}
      <PillarSection
        id="copilot"
        title="AI Co-Pilot Ops"
        subtitle="Your Intelligent Flight Companion"
        description="Get real-time assistance for safer, more efficient operations with our AI co-pilot that provides contextual guidance throughout your flight."
        icon={<Plane className="h-8 w-8 text-white" />}
        features={[
          {
            title: "Intelligent Flight Planning",
            description:
              "Generate optimized routes in seconds that account for weather, airspace restrictions, and fuel efficiency.",
          },
          {
            title: "Voice-Activated Assistant",
            description:
              "Ask questions hands-free during flight for instant calculations and critical information when you need it most.",
          },
          {
            title: "Smart Checklists & Procedures",
            description:
              "Dynamic SOPs that adapt to your aircraft, conditions, and situation for maximum safety and efficiency.",
          },
        ]}
        isActive={activePillar === "copilot"}
        color="bg-indigo-500/20"
      />

      {/* Enhanced Copilot Section with Tabs */}
      <EnhancedCopilotSection />

      {/* Beta Access CTA */}
      <BetaAccessCTA id="beta-access" />

      {/* Footer */}
      <footer className="border-t border-blue-500/10 bg-background px-4 py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center">
              <Plane className="mr-2 h-5 w-5 text-blue-500" />
              <span className="text-lg font-bold">Aviator AI</span>
            </div>
            <div className="flex gap-4 md:gap-8 text-xs md:text-sm">
              <Link href="#" className="text-blue-300/80 hover:text-blue-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-blue-300/80 hover:text-blue-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-blue-300/80 hover:text-blue-300">
                Contact Us
              </Link>
            </div>
            <div className="text-xs md:text-sm text-blue-300/60">© 2025 Aviator AI. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
