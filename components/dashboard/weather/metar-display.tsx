"use client"

import { Card } from "@/components/ui/card"

interface MetarDisplayProps {
  metar: string
}

export function MetarDisplay({ metar }: MetarDisplayProps) {
  // Parse METAR components
  const parts = metar.split(" ")

  // Simple parsing for display purposes
  const metarData = {
    raw: metar,
    station: parts[0],
    time: parts[1],
    wind: parts[2],
    visibility: parts[3],
    clouds: parts[4],
    temperature: parts[5],
    altimeter: parts[6],
  }

  return (
    <div className="space-y-4">
      <Card className="bg-muted/50 p-4">
        <pre className="whitespace-pre-wrap break-all text-sm">{metarData.raw}</pre>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <div className="text-sm font-medium">Station</div>
          <div className="rounded-md border border-border bg-card p-2 text-sm">{metarData.station}</div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Time</div>
          <div className="rounded-md border border-border bg-card p-2 text-sm">{metarData.time}</div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Wind</div>
          <div className="rounded-md border border-border bg-card p-2 text-sm">{metarData.wind}</div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Visibility</div>
          <div className="rounded-md border border-border bg-card p-2 text-sm">{metarData.visibility}</div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Clouds</div>
          <div className="rounded-md border border-border bg-card p-2 text-sm">{metarData.clouds}</div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Temperature/Dew Point</div>
          <div className="rounded-md border border-border bg-card p-2 text-sm">{metarData.temperature}</div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Decoded Information</div>
        <div className="rounded-md border border-border bg-card p-4 text-sm">
          <p>
            At {metarData.station}, observed at {metarData.time.slice(0, 2)}:{metarData.time.slice(2, 4)}Z on the{" "}
            {metarData.time.slice(0, 2)}th day of the month. Wind from {metarData.wind.slice(0, 3)}° at{" "}
            {metarData.wind.slice(3, 5)} knots
            {metarData.wind.includes("G") ? ` with gusts to ${metarData.wind.split("G")[1].slice(0, 2)} knots` : ""}.
            Visibility is {metarData.visibility}. Temperature is {Number.parseInt(metarData.temperature.split("/")[0])}
            °C with a dew point of {Number.parseInt(metarData.temperature.split("/")[1])}°C.
          </p>
        </div>
      </div>
    </div>
  )
}
