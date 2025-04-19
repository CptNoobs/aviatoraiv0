"use client"

import { useState } from "react"
import { CheckCircle, ChevronRight, HelpCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

export function QuizDemo() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      question: "What does METAR stand for?",
      options: [
        "Meteorological Terminal Air Report",
        "Measured Terminal Atmospheric Reading",
        "Meteorological Terrain Analysis Report",
        "Measured Terminal Air Reading",
      ],
      correctAnswer: "Meteorological Terminal Air Report",
    },
    {
      question: "Which of the following is NOT a type of cloud?",
      options: ["Cumulus", "Stratus", "Nimbus", "Colossus"],
      correctAnswer: "Colossus",
    },
    {
      question: "What is the primary purpose of a TAF?",
      options: [
        "To report current weather conditions",
        "To forecast weather conditions",
        "To analyze terrain features",
        "To measure air temperature",
      ],
      correctAnswer: "To forecast weather conditions",
    },
  ]

  const handleAnswerSelect = (answer: string) => {
    if (!isAnswered) {
      setSelectedAnswer(answer)
    }
  }

  const handleSubmit = () => {
    if (!selectedAnswer) return

    setIsAnswered(true)

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setShowResults(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setScore(0)
    setShowResults(false)
  }

  const currentProgress = ((currentQuestion + 1) / questions.length) * 100

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  if (showResults) {
    return (
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="rounded-lg border border-blue-500/20 bg-blue-900/10 p-6 text-center backdrop-blur-sm"
      >
        <div className="mb-6 text-6xl font-bold text-blue-400">
          {score} / {questions.length}
        </div>
        <p className="mb-6 text-xl text-blue-100">
          {score === questions.length
            ? "Perfect score! Excellent work!"
            : score >= questions.length / 2
              ? "Good job! Keep studying to improve."
              : "Keep practicing. You'll get better!"}
        </p>
        <Button onClick={handleRestart} className="bg-blue-600 text-white hover:bg-blue-700">
          Try Again
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible" className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-blue-300">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-blue-300">Score: {score}</span>
        </div>
        <Progress value={currentProgress} className="h-2 bg-blue-900/30" indicatorClassName="bg-blue-500" />
      </div>

      <div className="rounded-lg border border-blue-500/20 bg-blue-900/10 p-6 backdrop-blur-sm">
        <div className="mb-6 flex items-start gap-3">
          <HelpCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
          <h3 className="text-xl font-semibold text-white">{questions[currentQuestion].question}</h3>
        </div>

        <RadioGroup value={selectedAnswer || ""} className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => {
            const isCorrect = option === questions[currentQuestion].correctAnswer
            const isSelected = option === selectedAnswer

            return (
              <div
                key={index}
                className={`flex items-center space-x-2 rounded-md border p-3 transition-colors ${
                  isAnswered && isSelected
                    ? isCorrect
                      ? "border-green-500 bg-green-500/10"
                      : "border-red-500 bg-red-500/10"
                    : isAnswered && isCorrect
                      ? "border-green-500 bg-green-500/10"
                      : "border-blue-500/20 bg-blue-900/10 hover:border-blue-400/30"
                }`}
              >
                <RadioGroupItem
                  value={option}
                  id={`option-${index}`}
                  disabled={isAnswered}
                  onClick={() => handleAnswerSelect(option)}
                  className="border-blue-500"
                />
                <Label
                  htmlFor={`option-${index}`}
                  className="flex flex-1 cursor-pointer items-center justify-between text-blue-100"
                >
                  {option}
                  {isAnswered && (
                    <>
                      {isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        isSelected && <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </>
                  )}
                </Label>
              </div>
            )
          })}
        </RadioGroup>

        <div className="mt-6 flex justify-between">
          {!isAnswered ? (
            <Button
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className="w-full bg-blue-600 text-white hover:bg-blue-700"
            >
              Submit Answer
            </Button>
          ) : (
            <Button onClick={handleNext} className="w-full bg-blue-600 text-white hover:bg-blue-700">
              {currentQuestion < questions.length - 1 ? (
                <>
                  Next Question
                  <ChevronRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                "View Results"
              )}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
