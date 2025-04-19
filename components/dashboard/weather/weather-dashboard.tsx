"use client"

import type React from "react"

import { useState } from "react"
import { Cloud, CloudRain, Download, RefreshCw, Search, Wind } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MetarDisplay } from "@/components/dashboard/weather/metar-display"
import { TafDisplay } from "@/components/dashboard/weather/taf-display"

export function WeatherDashboard() {
  const [airport, setAirport] = useState("KJFK")
  const [isLoading, setIsLoading] = useState(false)
  const [weatherData, setWeatherData] = useState<any>(sampleWeatherData)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (!airport) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // In a real app, you would fetch from a weather API
      setWeatherData({
        ...sampleWeatherData,
        airport: airport,
      })
      setIsLoading(false)
    }, 1000)
  }

  const handleRefresh = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Weather</h1>
        <p className="text-muted-foreground">View METAR and TAF data for airports worldwide.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Airport Weather</CardTitle>
          <CardDescription>Enter an airport ICAO code to view current weather data</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Enter airport code (e.g., KJFK)"
                value={airport}
                onChange={(e) => setAirport(e.target.value.toUpperCase())}
                className="pl-8"
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Search"}
            </Button>
            <Button type="button" variant="outline" disabled={isLoading} onClick={handleRefresh}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>

      {weatherData && (
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{weatherData.airport}</CardTitle>
                <CardDescription>{weatherData.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold">{weatherData.temperature}°C</div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Cloud className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{weatherData.conditions}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Wind</CardTitle>
                <CardDescription>Current wind conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold">
                    {weatherData.wind.direction}° at {weatherData.wind.speed} kts
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Wind className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">Gusts to {weatherData.wind.gusts} kts</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Visibility</CardTitle>
                <CardDescription>Current visibility and ceiling</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold">{weatherData.visibility} SM</div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <CloudRain className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">Ceiling: {weatherData.ceiling} ft</div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="metar" className="space-y-4">
            <TabsList>
              <TabsTrigger value="metar">METAR</TabsTrigger>
              <TabsTrigger value="taf">TAF</TabsTrigger>
            </TabsList>

            <TabsContent value="metar">
              <Card>
                <CardHeader>
                  <CardTitle>METAR</CardTitle>
                  <CardDescription>Meteorological Terminal Air Report - Current conditions</CardDescription>
                </CardHeader>
                <CardContent>
                  <MetarDisplay metar={weatherData.metar} />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download METAR
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="taf">
              <Card>
                <CardHeader>
                  <CardTitle>TAF</CardTitle>
                  <CardDescription>Terminal Aerodrome Forecast - Weather forecast</CardDescription>
                </CardHeader>
                <CardContent>
                  <TafDisplay taf={weatherData.taf} />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download TAF
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}

const sampleWeatherData = {
  airport: "KJFK",
  location: "John F. Kennedy International Airport, New York",
  temperature: 18,
  conditions: "Few clouds, good visibility",
  wind: {
    direction: 240,
    speed: 12,
    gusts: 18,
  },
  visibility: 10,
  ceiling: 12000,
  metar: "KJFK 151651Z 24012G18KT 10SM FEW120 18/08 A3002 RMK AO2 SLP166 T01830078",
  taf: "KJFK 151130Z 1512/1618 24010KT P6SM FEW120\nFM151800 25012G20KT P6SM SCT100 BKN250\nFM160000 27008KT P6SM FEW150 BKN250\nFM160600 29006KT P6SM FEW150 BKN250",
}
