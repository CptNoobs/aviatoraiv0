"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { GraduationCap, Send } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function AITutorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI aviation tutor. I can help you with questions about flight training, aviation concepts, regulations, and more. What would you like to learn today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        role: "assistant",
        content: getSimulatedResponse(input),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">AI Tutor</h1>
        <p className="text-muted-foreground">
          Ask questions about aviation concepts, regulations, and flight training.
        </p>
      </div>

      <Card className="flex flex-col h-[calc(100vh-12rem)]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            <div>
              <CardTitle>Aviation AI Tutor</CardTitle>
              <CardDescription>Your personal aviation learning assistant</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
          <ScrollArea className="h-full pr-4">
            <div className="flex flex-col gap-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"></div>
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce delay-75"></div>
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="border-t p-4">
          <div className="flex w-full items-center gap-2">
            <Input
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <Button size="icon" onClick={handleSend} disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

// Simulated AI responses for demo purposes
function getSimulatedResponse(question: string): string {
  const lowerQuestion = question.toLowerCase()

  if (lowerQuestion.includes("private pilot") || lowerQuestion.includes("ppl")) {
    return "The Private Pilot License (PPL) is the first step for most pilots. It requires a minimum of 40 flight hours, passing a written exam, and a practical test. You'll learn basic flight maneuvers, navigation, and emergency procedures."
  }

  if (lowerQuestion.includes("weather") || lowerQuestion.includes("metar")) {
    return "METARs (Meteorological Aerodrome Reports) are coded weather observations. They include wind, visibility, clouds, temperature, and other important weather information pilots need before flight."
  }

  if (lowerQuestion.includes("instrument") || lowerQuestion.includes("ifr")) {
    return "Instrument Flight Rules (IFR) allow pilots to fly in conditions with reduced visibility by referencing instruments instead of visual references. An Instrument Rating requires additional training beyond the Private Pilot License."
  }

  return "That's a great aviation question! To provide the most accurate information, I'd need to research this topic further. In a full implementation, I would connect to aviation databases and resources to give you detailed answers."
}
