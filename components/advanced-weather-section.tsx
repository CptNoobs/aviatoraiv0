"use client"

import { motion } from "framer-motion"
import { Cloud, Wind, Radar, Map, BarChart, Thermometer, Droplets, AlertTriangle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WeatherApiDemo } from "@/components/weather-api-demo"

export function AdvancedWeatherSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="advanced-weather" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            <span className="text-gradient-cyan">AI Weather Intelligence</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-blue-300/80">
            Comprehensive aviation weather data transformed into actionable insights for professional pilots and
            operations.
          </p>
        </motion.div>

        <Tabs defaultValue="metar-taf" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="metar-taf" className="gap-2">
              <Cloud className="h-4 w-4" />
              <span>METAR/TAF</span>
            </TabsTrigger>
            <TabsTrigger value="winds" className="gap-2">
              <Wind className="h-4 w-4" />
              <span>Winds Aloft</span>
            </TabsTrigger>
            <TabsTrigger value="radar" className="gap-2">
              <Radar className="h-4 w-4" />
              <span>Radar/Satellite</span>
            </TabsTrigger>
            <TabsTrigger value="charts" className="gap-2">
              <Map className="h-4 w-4" />
              <span>GFA/Charts</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="metar-taf">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-blue-500/20 bg-blue-900/10 p-6 backdrop-blur-sm"
            >
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-bold">METAR/TAF Decoded</h3>
                  <p className="mb-4 text-blue-300/80">
                    Our AI instantly translates complex METAR and TAF data into plain language, highlighting critical
                    information relevant to your specific flight profile and aircraft type.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <AlertTriangle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Hazard Identification</h4>
                        <p className="text-blue-300/80">
                          Automatically highlights critical weather phenomena like wind shear, microbursts, and rapidly
                          changing conditions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <BarChart className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Trend Analysis</h4>
                        <p className="text-blue-300/80">
                          Visualizes weather trends over time, helping you anticipate changes during your flight window.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-blue-500/20 bg-blue-950/30 p-4">
                  <WeatherApiDemo />
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="winds">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-blue-500/20 bg-blue-900/10 p-6 backdrop-blur-sm"
            >
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-bold">Upper & Lower Winds</h3>
                  <p className="mb-4 text-blue-300/80">
                    Comprehensive wind data at all flight levels, optimized for your specific route and altitude, with
                    AI-powered recommendations for the most efficient flight path.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                        <Wind className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">FL180-450 Upper Winds</h4>
                        <p className="text-blue-300/80">
                          High-altitude wind forecasts with jet stream visualization and turbulence predictions based on
                          wind shear analysis.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                        <Thermometer className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Temperature Gradients</h4>
                        <p className="text-blue-300/80">
                          Temperature analysis at each flight level to identify potential icing conditions and optimize
                          fuel efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex h-full min-h-[300px] items-center justify-center rounded-lg border border-blue-500/20 bg-blue-950/30 p-4">
                  <div className="text-center">
                    <Wind className="mx-auto mb-4 h-12 w-12 text-cyan-400 opacity-50" />
                    <p className="text-blue-300">Interactive wind visualization coming soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="radar">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-blue-500/20 bg-blue-900/10 p-6 backdrop-blur-sm"
            >
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-bold">Radar & Satellite Imagery</h3>
                  <p className="mb-4 text-blue-300/80">
                    High-resolution radar and satellite imagery with AI-enhanced interpretation, providing clear
                    insights into precipitation, cloud formations, and convective activity.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                        <Radar className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Composite Radar</h4>
                        <p className="text-blue-300/80">
                          Multi-level radar data with precipitation type identification and storm cell tracking with
                          predictive movement paths.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                        <Droplets className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Precipitation Analysis</h4>
                        <p className="text-blue-300/80">
                          Detailed precipitation type, intensity, and altitude data with icing risk assessment for your
                          specific route.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex h-full min-h-[300px] items-center justify-center rounded-lg border border-blue-500/20 bg-blue-950/30 p-4">
                  <div className="text-center">
                    <Radar className="mx-auto mb-4 h-12 w-12 text-indigo-400 opacity-50" />
                    <p className="text-blue-300">Interactive radar visualization coming soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="charts">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-blue-500/20 bg-blue-900/10 p-6 backdrop-blur-sm"
            >
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-bold">GFA & Aviation Charts</h3>
                  <p className="mb-4 text-blue-300/80">
                    Comprehensive Graphical Forecast Area (GFA) charts and aviation-specific weather maps with
                    AI-enhanced interpretation for your flight planning needs.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <Map className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Interactive GFA</h4>
                        <p className="text-blue-300/80">
                          Graphical area forecasts with cloud layers, icing, turbulence, and frontal systems visualized
                          in an interactive 3D environment.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                        <AlertTriangle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">SIGMET & AIRMET</h4>
                        <p className="text-blue-300/80">
                          Significant meteorological information and airmen's meteorological information displayed on
                          your route with time-based filtering.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex h-full min-h-[300px] items-center justify-center rounded-lg border border-blue-500/20 bg-blue-950/30 p-4">
                  <div className="text-center">
                    <Map className="mx-auto mb-4 h-12 w-12 text-blue-400 opacity-50" />
                    <p className="text-blue-300">Interactive GFA visualization coming soon</p>
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
