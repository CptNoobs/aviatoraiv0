"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

// Sample quiz categories
const quizCategories = [
  { id: "air-law", name: "Air Law" },
  { id: "navigation", name: "Navigation" },
  { id: "meteorology", name: "Meteorology" },
  { id: "principles-of-flight", name: "Principles of Flight" },
  { id: "aircraft-general", name: "Aircraft General Knowledge" },
  { id: "flight-planning", name: "Flight Planning" },
]

// Sample quiz data
const sampleQuiz = {
  title: "Aviation Weather Patterns",
  description: "Test your knowledge of weather systems and their impact on flight operations.",
  questions: [
    {
      id: 1,
      question: "What weather phenomenon is characterized by a sudden, drastic change in wind direction and speed?",
      options: ["Advection fog", "Wind shear", "Virga", "Lenticular clouds"],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "Which cloud type is associated with thunderstorms?",
      options: ["Stratus", "Cirrus", "Cumulonimbus", "Nimbostratus"],
      correctAnswer: 2,
    },
    {
      id: 3,
      question: "What does a METAR code of 'CAVOK' indicate?",
      options: [
        "Ceiling and visibility are OK",
        "Caution: aviation visibility obscured, knots",
        "Clear air visibility over 10 kilometers",
        "Clouds and visibility obscured",
      ],
      correctAnswer: 0,
    },
  ],
}

export function QuizEngine() {
  const [activeQuiz, setActiveQuiz] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)

  const startQuiz = () => {
    setActiveQuiz(sampleQuiz)
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setQuizCompleted(false)
    setScore(0)
  }

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex,
    })
  }

  const handleNextQuestion = () => {
    if (currentQuestion < sampleQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate score
      let correctAnswers = 0
      Object.keys(selectedAnswers).forEach((questionId) => {
        const question = sampleQuiz.questions.find((q) => q.id === Number.parseInt(questionId))
        if (question && selectedAnswers[questionId] === question.correctAnswer) {
          correctAnswers++
        }
      })

      setScore((correctAnswers / sampleQuiz.questions.length) * 100)
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setActiveQuiz(null)
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setQuizCompleted(false)
  }

  return (
    <div className="space-y-6">
      {!activeQuiz ? (
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Quiz Yourself</h2>
            <Button onClick={startQuiz}>Start Random Quiz</Button>
          </div>

          <Tabs defaultValue="categories" className="space-y-4">
            <TabsList>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="categories" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {quizCategories.map((category) => (
                  <Card
                    key={category.id}
                    className="cursor-pointer hover:bg-accent/50 transition-colors"
                    onClick={startQuiz}
                  >
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <h3 className="text-lg font-medium">{category.name}</h3>
                      <p className="text-sm text-center text-muted-foreground mt-2">
                        Test your knowledge in {category.name}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recent" className="space-y-4">
              <div className="flex flex-col items-center justify-center p-12 text-center">
                <h3 className="text-lg font-medium mb-2">No recent quizzes</h3>
                <p className="text-muted-foreground mb-4">Start a quiz to see your recent activity here.</p>
                <Button onClick={startQuiz}>Start a Quiz</Button>
              </div>
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              <div className="flex flex-col items-center justify-center p-12 text-center">
                <h3 className="text-lg font-medium mb-2">No completed quizzes</h3>
                <p className="text-muted-foreground mb-4">Complete a quiz to see your results here.</p>
                <Button onClick={startQuiz}>Start a Quiz</Button>
              </div>
            </TabsContent>
          </Tabs>
        </>
      ) : (
        <Card>
          {!quizCompleted ? (
            <>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>{activeQuiz.title}</CardTitle>
                    <CardDescription>{activeQuiz.description}</CardDescription>
                  </div>
                  <Badge variant="outline" className="ml-2">
                    Question {currentQuestion + 1} of {activeQuiz.questions.length}
                  </Badge>
                </div>
                <Progress value={((currentQuestion + 1) / activeQuiz.questions.length) * 100} className="h-2 mt-2" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-lg font-medium">{activeQuiz.questions[currentQuestion].question}</div>

                <RadioGroup
                  onValueChange={(value) =>
                    handleAnswerSelect(activeQuiz.questions[currentQuestion].id, Number.parseInt(value))
                  }
                  value={selectedAnswers[activeQuiz.questions[currentQuestion].id]?.toString()}
                >
                  {activeQuiz.questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 rounded hover:bg-accent/50">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex justify-between border-t p-4">
                <Button variant="outline" onClick={resetQuiz}>
                  Cancel
                </Button>
                <Button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswers[activeQuiz.questions[currentQuestion].id] === undefined}
                >
                  {currentQuestion < activeQuiz.questions.length - 1 ? "Next Question" : "Finish Quiz"}
                </Button>
              </CardFooter>
            </>
          ) : (
            <>
              <CardHeader>
                <CardTitle>Quiz Results</CardTitle>
                <CardDescription>You've completed the {activeQuiz.title} quiz</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-5xl font-bold mb-4">{Math.round(score)}%</div>
                  <p className="text-lg mb-2">
                    {score >= 80 ? "Excellent work!" : score >= 60 ? "Good job!" : "Keep practicing!"}
                  </p>
                  <p className="text-muted-foreground">
                    You answered {Math.round((score / 100) * activeQuiz.questions.length)} out of{" "}
                    {activeQuiz.questions.length} questions correctly
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Question Summary</h3>
                  {activeQuiz.questions.map((question, index) => {
                    const isCorrect = selectedAnswers[question.id] === question.correctAnswer
                    return (
                      <div key={question.id} className="border rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          {isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                          )}
                          <div>
                            <p className="font-medium">{question.question}</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              Your answer: {question.options[selectedAnswers[question.id] || 0]}
                            </p>
                            {!isCorrect && (
                              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                                Correct answer: {question.options[question.correctAnswer]}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t p-4">
                <Button variant="outline" onClick={resetQuiz}>
                  Back to Quizzes
                </Button>
                <Button onClick={startQuiz}>Retry Quiz</Button>
              </CardFooter>
            </>
          )}
        </Card>
      )}
    </div>
  )
}
