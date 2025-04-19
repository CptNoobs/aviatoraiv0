"\"use client"

import { Sun, Thermometer, Wind } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WeatherWidget() {
  // Dummy weather data
  const weather = {
    temperature: 20,
    condition: "Sunny",
    windSpeed: 15,
    windDirection: "NW",
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Weather</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center">
          <Thermometer className="mr-2 h-4 w-4" />
          Temperature: {weather.temperature}°C
        </div>
        <div className="flex items-center">
          <Sun className="mr-2 h-4 w-4" />
          Condition: {weather.condition}
        </div>
        <div className="flex items-center">
          <Wind className="mr-2 h-4 w-4" />
          Wind: {weather.windSpeed} km/h {weather.windDirection}
        </div>
      </CardContent>
    </Card>
  )
}
