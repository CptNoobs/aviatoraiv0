"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Set default theme to dark
  useEffect(() => {
    if (mounted && !resolvedTheme) {
      setTheme("dark")
    }
  }, [mounted, resolvedTheme, setTheme])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full h-9 w-9 bg-background/10 backdrop-blur-sm hover:bg-background/20"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 text-blue-300" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="rounded-full h-9 w-9 bg-background/10 backdrop-blur-sm hover:bg-background/20"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5 text-blue-300" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600" />
      )}
    </Button>
  )
}
