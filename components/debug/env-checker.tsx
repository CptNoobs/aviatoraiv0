"use client"

import { useEffect, useState } from "react"

export function EnvChecker() {
  const [envVars, setEnvVars] = useState<{ [key: string]: string | undefined }>({})

  useEffect(() => {
    setEnvVars({
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    })
  }, [])

  if (process.env.NODE_ENV !== "development") {
    return null
  }

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 bg-black/80 text-white text-xs rounded-tl-lg max-w-xs">
      <h3 className="font-bold mb-2">Environment Variables:</h3>
      <ul>
        {Object.entries(envVars).map(([key, value]) => (
          <li key={key} className="mb-1">
            <span className="font-semibold">{key}:</span>{" "}
            {value ? (
              `${value.substring(0, 5)}...${value.substring(value.length - 5)}`
            ) : (
              <span className="text-red-400">Not set</span>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-2 text-yellow-300 text-[10px]">This debug panel only appears in development mode</p>
    </div>
  )
}
