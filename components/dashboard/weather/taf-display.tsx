"use client"

import { Card } from "@/components/ui/card"

interface TafDisplayProps {
  taf: string
}

export function TafDisplay({ taf }: TafDisplayProps) {
  // Split TAF into lines for better display
  const tafLines = taf.split("\n")

  return (
    <div className="space-y-4">
      <Card className="bg-muted/50 p-4">
        <pre className="whitespace-pre-wrap break-all text-sm">{taf}</pre>
      </Card>

      <div className="space-y-4">
        {tafLines.map((line, index) => (
          <div key={index} className="space-y-2">
            <div className="text-sm font-medium">{index === 0 ? "Initial Forecast" : `Forecast Change ${index}`}</div>
            <div className="rounded-md border border-border bg-card p-2 text-sm">{line}</div>
            <div className="rounded-md border border-border bg-card p-4 text-sm">
              <p>
                {index === 0
                  ? `Forecast for ${line.split(" ")[0]}, issued at ${line.split(" ")[1].slice(0, 2)}:${line.split(" ")[1].slice(2, 4)}Z on the ${line.split(" ")[1].slice(0, 2)}th day of the month. Valid from ${line.split(" ")[2].slice(0, 2)}:${line.split(" ")[2].slice(2, 4)}Z to ${line.split(" ")[2].slice(5, 7)}:${line.split(" ")[2].slice(7, 9)}Z.`
                  : line.startsWith("FM")
                    ? `From ${line.slice(2, 4)}:${line.slice(4, 6)}Z: ${line.slice(7)}`
                    : line}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Decoded Information</div>
        <div className="rounded-md border border-border bg-card p-4 text-sm">
          <p>This TAF for {tafLines[0].split(" ")[0]} indicates the following weather conditions:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Initial conditions: {tafLines[0].split(" ").slice(3).join(" ")}</li>
            {tafLines.slice(1).map((line, index) => (
              <li key={index}>
                {line.startsWith("FM") ? `From ${line.slice(2, 4)}:${line.slice(4, 6)}Z: ${line.slice(7)}` : line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
