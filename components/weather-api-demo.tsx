"use client"

import { useState, useEffect } from "react"
import { Cloud, Search, RefreshCw, Wind, Droplets, Thermometer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export function WeatherApiDemo() {
  const [airport, setAirport] = useState("KJFK")
  const [loading, setLoading] = useState(false)
  const [weatherData, setWeatherData] = useState<any>(null)

  // Simulated weather data
  const sampleData = {
    station: "KJFK",
    name: "John F. Kennedy International Airport",
    time: "2023-04-15T12:00:00Z",
    temperature: {
      celsius: 18,
      fahrenheit: 64,
    },
    wind: {
      direction: 240,
      speed_kts: 12,
      speed_mph: 14,
      gust_kts: 18,
    },
    visibility: {
      miles: 10,
      meters: 16093,
    },
    clouds: [
      {
        type: "FEW",
        altitude: 12000,
        description: "Few clouds at 12,000 feet",
      },
    ],
    conditions: "Few clouds, good visibility",
    raw_metar: "KJFK 151651Z 24012G18KT 10SM FEW120 18/08 A3002 RMK AO2 SLP166 T01830078",
    raw_taf:
      "KJFK 151130Z 1512/1618 24010KT P6SM FEW120\nFM151800 25012G20KT P6SM SCT100 BKN250\nFM160000 27008KT P6SM FEW150 BKN250\nFM160600 29006KT P6SM FEW150 BKN250",
  }

  const fetchWeather = async () => {
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, you would fetch from a weather API
    setWeatherData({
      ...sampleData,
      station: airport,
    })

    setLoading(false)
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  if (!weatherData) {
    return (
      <div className="flex h-full min-h-[400px] items-center justify-center">
        <Cloud className="h-12 w-12 animate-pulse text-blue-400/50" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-300/50" />
          <Input
            type="text"
            value={airport}
            onChange={(e) => setAirport(e.target.value.toUpperCase())}
            placeholder="Enter airport code (e.g., KJFK)"
            className="border-blue-500/20 bg-blue-900/10 pl-9 text-blue-100 placeholder:text-blue-300/50"
          />
        </div>
        <Button onClick={fetchWeather} disabled={loading} className="bg-blue-600 text-white hover:bg-blue-700">
          {loading ? "Loading..." : "Search"}
        </Button>
        <Button
          variant="outline"
          onClick={fetchWeather}
          disabled={loading}
          className="border-blue-500/20 text-blue-300 hover:bg-blue-900/20 hover:text-blue-200"
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      <motion.div variants={fadeIn} initial="hidden" animate="visible" className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-blue-500/20 bg-blue-900/10 p-4 backdrop-blur-sm">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-blue-300">Temperature</h3>
            <Thermometer className="h-4 w-4 text-blue-400" />
          </div>
          <div className="flex items-end justify-between">
            <div className="text-3xl font-bold text-white">{weatherData.temperature.celsius}°C</div>
            <div className="text-sm text-blue-300">{weatherData.temperature.fahrenheit}°F</div>
          </div>
        </div>

        <div className="rounded-lg border border-blue-500/20 bg-blue-900/10 p-4 backdrop-blur-sm">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-blue-300">Wind</h3>
            <Wind className="h-4 w-4 text-blue-400" />
          </div>
          <div className="flex items-end justify-between">
            <div className="text-3xl font-bold text-white">
              {weatherData.wind.direction}° / {weatherData.wind.speed_kts}kt
            </div>
            <div className="text-sm text-blue-300">Gusts: {weatherData.wind.gust_kts}kt</div>
          </div>
        </div>

        <div className="rounded-lg border border-blue-500/20 bg-blue-900/10 p-4 backdrop-blur-sm">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-blue-300">Visibility</h3>
            <Droplets className="h-4 w-4 text-blue-400" />
          </div>
          <div className="flex items-end justify-between">
            <div className="text-3xl font-bold text-white">{weatherData.visibility.miles} SM</div>
            <div className="text-sm text-blue-300">{weatherData.visibility.meters} m</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="rounded-lg border border-blue-500/20 bg-blue-900/10 p-4 backdrop-blur-sm"
      >
        <h3 className="mb-2 text-sm font-medium text-blue-300">METAR</h3>
        <div className="rounded-md bg-blue-950/50 p-3">
          <code className="text-sm text-blue-100">{weatherData.raw_metar}</code>
        </div>
        <div className="mt-3 text-sm text-blue-300">
          <p>
            {weatherData.conditions} at {weatherData.name}
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
        className="rounded-lg border border-blue-500/20 bg-blue-900/10 p-4 backdrop-blur-sm"
      >
        <h3 className="mb-2 text-sm font-medium text-blue-300">TAF</h3>
        <div className="rounded-md bg-blue-950/50 p-3">
          <pre className="whitespace-pre-wrap text-sm text-blue-100">{weatherData.raw_taf}</pre>
        </div>
      </motion.div>
    </div>
  )
}
