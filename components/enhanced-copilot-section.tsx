"use client"

import { motion } from "framer-motion"
import { Plane, Map, Mic, FileCheck, BarChart, Compass, Shield, Headphones } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function EnhancedCopilotSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="enhanced-copilot" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            <span className="text-gradient-blue">AI Co-Pilot Ops</span> Platform
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-blue-300/80">
            Get real-time assistance for safer, more efficient operations with our AI co-pilot that provides contextual
            guidance throughout your flight.
          </p>
        </motion.div>

        <Tabs defaultValue="flight-planning" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="flight-planning" className="gap-2">
              <Map className="h-4 w-4" />
              <span className="hidden sm:inline">Flight Planning</span>
              <span className="sm:hidden">Planning</span>
            </TabsTrigger>
            <TabsTrigger value="in-flight" className="gap-2">
              <Plane className="h-4 w-4" />
              <span className="hidden sm:inline">In-Flight Assistant</span>
              <span className="sm:hidden">In-Flight</span>
            </TabsTrigger>
            <TabsTrigger value="checklists" className="gap-2">
              <FileCheck className="h-4 w-4" />
              <span className="hidden sm:inline">Smart Checklists</span>
              <span className="sm:hidden">Checklists</span>
            </TabsTrigger>
            <TabsTrigger value="safety" className="gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Safety Features</span>
              <span className="sm:hidden">Safety</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flight-planning">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-blue-500/20 bg-blue-900/10 p-4 sm:p-6 backdrop-blur-sm"
            >
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-bold">Intelligent Flight Planning</h3>
                  <p className="mb-4 text-blue-300/80">
                    Generate optimized routes in seconds that account for weather, airspace restrictions, and fuel
                    efficiency, with AI-powered recommendations for the safest and most efficient flight path.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                        <Map className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Route Optimization</h4>
                        <p className="text-blue-300/80">
                          AI analyzes thousands of possible routes to find the optimal path based on your aircraft
                          performance, weather conditions, and preferences.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                        <BarChart className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Fuel Efficiency Analysis</h4>
                        <p className="text-blue-300/80">
                          Calculate precise fuel requirements with real-time wind data and aircraft performance models,
                          reducing fuel costs and environmental impact.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                        <Compass className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Airspace & NOTAMs Integration</h4>
                        <p className="text-blue-300/80">
                          Automatically incorporates active airspace restrictions, NOTAMs, and TFRs into your flight
                          plan with visual alerts for potential conflicts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex h-full items-center justify-center rounded-lg border border-blue-500/20 bg-blue-950/30 p-4">
                  <div className="w-full space-y-4 rounded-lg border border-blue-500/20 bg-blue-900/20 p-4 backdrop-blur-sm">
                    <div className="h-6 w-32 rounded-full bg-indigo-500/20"></div>

                    <div className="h-40 rounded-lg bg-indigo-500/10 p-2">
                      <div className="h-full w-full rounded-lg bg-blue-900/30">
                        <div className="relative h-full w-full">
                          <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-blue-500"></div>
                          <div className="absolute right-1/3 bottom-1/3 h-2 w-2 rounded-full bg-blue-500"></div>
                          <div className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-indigo-500"></div>
                          <div className="absolute left-1/4 top-1/2 right-1/4 h-0.5 bg-blue-500/50"></div>
                          <div className="absolute left-1/2 top-1/4 bottom-1/2 w-0.5 bg-blue-500/50"></div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <div className="h-4 w-full rounded-full bg-indigo-500/20"></div>
                        <div className="h-4 w-3/4 rounded-full bg-indigo-500/20"></div>
                        <div className="h-4 w-1/2 rounded-full bg-indigo-500/20"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-4 w-full rounded-full bg-indigo-500/20"></div>
                        <div className="h-4 w-2/3 rounded-full bg-indigo-500/20"></div>
                        <div className="h-4 w-3/4 rounded-full bg-indigo-500/20"></div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div className="h-8 w-24 rounded-full bg-indigo-500/20"></div>
                      <div className="h-8 w-24 rounded-full bg-blue-500/40"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="in-flight">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-blue-500/20 bg-blue-900/10 p-4 sm:p-6 backdrop-blur-sm"
            >
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-bold">Voice-Activated In-Flight Assistant</h3>
                  <p className="mb-4 text-blue-300/80">
                    Ask questions hands-free during flight for instant calculations and critical information when you
                    need it most, allowing you to maintain focus on flying the aircraft.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <Mic className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Hands-Free Operation</h4>
                        <p className="text-blue-300/80">
                          Voice-activated assistant responds to natural language queries even in noisy cockpit
                          environments, with offline capabilities for areas with limited connectivity.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <Headphones className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Real-Time Calculations</h4>
                        <p className="text-blue-300/80">
                          Instantly calculate fuel consumption, time to destination, crosswind components, and other
                          critical flight parameters based on current conditions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <Plane className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Situational Awareness</h4>
                        <p className="text-blue-300/80">
                          Receive proactive alerts about changing weather conditions, airspace restrictions, and other
                          factors that may affect your flight.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex h-full items-center justify-center rounded-lg border border-blue-500/20 bg-blue-950/30 p-4">
                  <div className="w-full space-y-4 rounded-lg border border-blue-500/20 bg-blue-900/20 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="h-6 w-32 rounded-full bg-blue-500/20"></div>
                      <div className="h-6 w-6 rounded-full bg-blue-500/40 animate-pulse"></div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <div className="h-4 w-4 rounded-full bg-blue-500/40"></div>
                        </div>
                        <div className="h-8 flex-1 rounded-lg bg-blue-500/10"></div>
                      </div>

                      <div className="ml-10 w-3/4 rounded-lg bg-blue-500/20 p-3">
                        <div className="h-4 w-full rounded-full bg-blue-500/30"></div>
                        <div className="mt-2 h-4 w-3/4 rounded-full bg-blue-500/30"></div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <div className="h-4 w-4 rounded-full bg-blue-500/40"></div>
                        </div>
                        <div className="h-8 flex-1 rounded-lg bg-blue-500/10"></div>
                      </div>

                      <div className="ml-10 w-3/4 rounded-lg bg-blue-500/20 p-3">
                        <div className="h-4 w-full rounded-full bg-blue-500/30"></div>
                        <div className="mt-2 h-4 w-1/2 rounded-full bg-blue-500/30"></div>
                      </div>
                    </div>

                    <div className="h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <div className="h-4 w-32 rounded-full bg-blue-500/30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="checklists">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-blue-500/20 bg-blue-900/10 p-4 sm:p-6 backdrop-blur-sm"
            >
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-bold">Smart Checklists & Procedures</h3>
                  <p className="mb-4 text-blue-300/80">
                    Dynamic SOPs that adapt to your aircraft, conditions, and situation for maximum safety and
                    efficiency, with voice-activated progression and intelligent verification.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                        <FileCheck className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Adaptive Checklists</h4>
                        <p className="text-blue-300/80">
                          Checklists automatically adjust based on aircraft type, weather conditions, and phase of
                          flight, highlighting critical items in challenging situations.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                        <Mic className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Voice-Activated Progression</h4>
                        <p className="text-blue-300/80">
                          Hands-free checklist progression with voice commands and responses, allowing you to maintain
                          focus on flying while ensuring all items are completed.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                        <Shield className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Intelligent Verification</h4>
                        <p className="text-blue-300/80">
                          AI monitors checklist completion and can flag potential missed items or inconsistencies,
                          providing an additional layer of safety.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex h-full items-center justify-center rounded-lg border border-blue-500/20 bg-blue-950/30 p-4">
                  <div className="w-full space-y-4 rounded-lg border border-blue-500/20 bg-blue-900/20 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div className="h-6 w-48 rounded-full bg-cyan-500/20"></div>
                      <div className="h-6 w-24 rounded-full bg-cyan-500/20"></div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-md bg-green-500/30 flex items-center justify-center">
                          <div className="h-3 w-3 rounded-sm bg-green-500/60"></div>
                        </div>
                        <div className="h-6 flex-1 rounded-lg bg-cyan-500/10">
                          <div className="h-full w-full px-2 flex items-center">
                            <div className="h-3 w-32 rounded-full bg-cyan-500/30"></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-md bg-green-500/30 flex items-center justify-center">
                          <div className="h-3 w-3 rounded-sm bg-green-500/60"></div>
                        </div>
                        <div className="h-6 flex-1 rounded-lg bg-cyan-500/10">
                          <div className="h-full w-full px-2 flex items-center">
                            <div className="h-3 w-40 rounded-full bg-cyan-500/30"></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-md bg-cyan-500/40 flex items-center justify-center animate-pulse"></div>
                        <div className="h-6 flex-1 rounded-lg bg-cyan-500/20">
                          <div className="h-full w-full px-2 flex items-center">
                            <div className="h-3 w-36 rounded-full bg-cyan-500/50"></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-md bg-cyan-500/10"></div>
                        <div className="h-6 flex-1 rounded-lg bg-cyan-500/10">
                          <div className="h-full w-full px-2 flex items-center">
                            <div className="h-3 w-28 rounded-full bg-cyan-500/30"></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-md bg-cyan-500/10"></div>
                        <div className="h-6 flex-1 rounded-lg bg-cyan-500/10">
                          <div className="h-full w-full px-2 flex items-center">
                            <div className="h-3 w-44 rounded-full bg-cyan-500/30"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div className="h-8 w-24 rounded-full bg-cyan-500/20"></div>
                      <div className="h-8 w-24 rounded-full bg-cyan-500/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="safety">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-blue-500/20 bg-blue-900/10 p-4 sm:p-6 backdrop-blur-sm"
            >
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-bold">Advanced Safety Features</h3>
                  <p className="mb-4 text-blue-300/80">
                    Our AI Co-Pilot continuously monitors flight parameters, weather conditions, and pilot actions to
                    provide proactive safety alerts and recommendations.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                        <Shield className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Terrain Awareness</h4>
                        <p className="text-blue-300/80">
                          Advanced terrain mapping with predictive alerts based on aircraft performance, providing
                          warnings well before potential conflicts arise.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                        <Plane className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Performance Monitoring</h4>
                        <p className="text-blue-300/80">
                          Real-time analysis of aircraft performance parameters with alerts for deviations from expected
                          values, helping identify potential mechanical issues early.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                        <Compass className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Diversion Recommendations</h4>
                        <p className="text-blue-300/80">
                          Intelligent diversion planning that considers weather, airport facilities, and aircraft range
                          to suggest optimal alternate destinations when needed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex h-full items-center justify-center rounded-lg border border-blue-500/20 bg-blue-950/30 p-4">
                  <div className="w-full space-y-4 rounded-lg border border-blue-500/20 bg-blue-900/20 p-4 backdrop-blur-sm">
                    <div className="h-6 w-48 rounded-full bg-red-500/20"></div>

                    <div className="h-40 rounded-lg bg-red-500/10 p-2">
                      <div className="h-full w-full rounded-lg bg-blue-900/30">
                        <div className="relative h-full w-full">
                          <div className="absolute left-1/4 right-1/4 top-1/4 bottom-1/4 rounded-full border-2 border-green-500/30"></div>
                          <div className="absolute left-1/3 right-1/3 top-1/3 bottom-1/3 rounded-full border-2 border-yellow-500/30"></div>
                          <div className="absolute left-2/5 right-2/5 top-2/5 bottom-2/5 rounded-full border-2 border-red-500/30"></div>
                          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500"></div>
                          <div className="absolute right-1/4 top-1/3 h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-lg bg-green-500/20 p-2">
                        <div className="h-3 w-full rounded-full bg-green-500/30"></div>
                        <div className="mt-1 h-6 w-full rounded-lg bg-green-500/10"></div>
                      </div>
                      <div className="rounded-lg bg-yellow-500/20 p-2">
                        <div className="h-3 w-full rounded-full bg-yellow-500/30"></div>
                        <div className="mt-1 h-6 w-full rounded-lg bg-yellow-500/10"></div>
                      </div>
                      <div className="rounded-lg bg-red-500/20 p-2">
                        <div className="h-3 w-full rounded-full bg-red-500/30"></div>
                        <div className="mt-1 h-6 w-full rounded-lg bg-red-500/10"></div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div className="h-8 w-24 rounded-full bg-red-500/20"></div>
                      <div className="h-8 w-24 rounded-full bg-blue-500/40"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
