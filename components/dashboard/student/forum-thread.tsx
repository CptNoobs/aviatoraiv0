"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Search, ThumbsUp, MessageCircle, Flag, Filter } from "lucide-react"

// Sample forum categories
const forumCategories = [
  { id: "general", name: "General Discussion", count: 24 },
  { id: "technical", name: "Technical Questions", count: 18 },
  { id: "study-tips", name: "Study Tips", count: 12 },
  { id: "flight-training", name: "Flight Training", count: 15 },
  { id: "career", name: "Career Advice", count: 9 },
]

// Sample forum threads
const forumThreads = [
  {
    id: 1,
    title: "Tips for memorizing airspace classifications?",
    author: "pilot_student_23",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "study-tips",
    replies: 12,
    views: 156,
    lastActivity: "2 hours ago",
    isHot: true,
  },
  {
    id: 2,
    title: "Understanding crosswind landing techniques",
    author: "future_captain",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "flight-training",
    replies: 8,
    views: 94,
    lastActivity: "1 day ago",
    isHot: false,
  },
  {
    id: 3,
    title: "How to interpret complex METAR reports?",
    author: "weather_watcher",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "technical",
    replies: 15,
    views: 203,
    lastActivity: "3 days ago",
    isHot: true,
  },
  {
    id: 4,
    title: "Best resources for PPL written exam",
    author: "study_hard",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "study-tips",
    replies: 6,
    views: 87,
    lastActivity: "1 week ago",
    isHot: false,
  },
]

export function ForumThread() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeThread, setActiveThread] = useState(null)

  const openThread = (threadId) => {
    const thread = forumThreads.find((t) => t.id === threadId)
    setActiveThread(thread)
  }

  const closeThread = () => {
    setActiveThread(null)
  }

  return (
    <div className="space-y-6">
      {!activeThread ? (
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Community Forum</h2>
            <Button>Create New Thread</Button>
          </div>

          <div className="flex gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search forum threads..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Discussions</TabsTrigger>
              {forumCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {forumThreads.map((thread) => (
                      <div
                        key={thread.id}
                        className="p-4 hover:bg-accent/50 cursor-pointer"
                        onClick={() => openThread(thread.id)}
                      >
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={thread.authorAvatar || "/placeholder.svg"} alt={thread.author} />
                            <AvatarFallback>{thread.author.substring(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{thread.title}</h3>
                              {thread.isHot && (
                                <Badge variant="secondary" className="text-xs">
                                  Hot
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>By {thread.author}</span>
                              <span>
                                <Badge variant="outline" className="text-xs font-normal">
                                  {thread.category.replace("-", " ")}
                                </Badge>
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MessageCircle className="h-3.5 w-3.5" />
                                <span>{thread.replies} replies</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span>{thread.views} views</span>
                              </div>
                              <div>
                                <span>Last activity: {thread.lastActivity}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {forumCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-4">
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {forumThreads
                        .filter((thread) => thread.category === category.id)
                        .map((thread) => (
                          <div
                            key={thread.id}
                            className="p-4 hover:bg-accent/50 cursor-pointer"
                            onClick={() => openThread(thread.id)}
                          >
                            <div className="flex items-start gap-4">
                              <Avatar>
                                <AvatarImage src={thread.authorAvatar || "/placeholder.svg"} alt={thread.author} />
                                <AvatarFallback>{thread.author.substring(0, 2).toUpperCase()}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1 space-y-1">
                                <div className="flex items-center gap-2">
                                  <h3 className="font-medium">{thread.title}</h3>
                                  {thread.isHot && (
                                    <Badge variant="secondary" className="text-xs">
                                      Hot
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span>By {thread.author}</span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <MessageCircle className="h-3.5 w-3.5" />
                                    <span>{thread.replies} replies</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <span>{thread.views} views</span>
                                  </div>
                                  <div>
                                    <span>Last activity: {thread.lastActivity}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </>
      ) : (
        <Card>
          <CardHeader>
            <Button variant="ghost" className="w-fit -ml-2 mb-2" onClick={closeThread}>
              ← Back to Forum
            </Button>
            <CardTitle>{activeThread.title}</CardTitle>
            <CardDescription>
              Started by {activeThread.author} • {activeThread.lastActivity}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Thread content - this would be dynamic in a real app */}
            <div className="border rounded-lg p-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={activeThread.authorAvatar || "/placeholder.svg"} alt={activeThread.author} />
                  <AvatarFallback>{activeThread.author.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{activeThread.author}</h3>
                    <span className="text-sm text-muted-foreground">{activeThread.lastActivity}</span>
                  </div>
                  <div className="mt-2 space-y-4">
                    <p>
                      I'm struggling to memorize all the different airspace classifications and their requirements. Does
                      anyone have any good mnemonics or study techniques that helped them?
                    </p>
                    <p>I've been using flashcards but I'm still mixing up Class B, C, and D airspace requirements.</p>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>Like</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <Flag className="h-4 w-4" />
                      <span>Report</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample replies - these would be dynamic in a real app */}
            <div className="border rounded-lg p-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="instructor_jane" />
                  <AvatarFallback>IJ</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">instructor_jane</h3>
                      <Badge>Instructor</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">1 hour ago</span>
                  </div>
                  <div className="mt-2 space-y-4">
                    <p>I recommend the "Big Chickens Don't Eat Grapes" mnemonic:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong>B</strong> - Big (Class B)
                      </li>
                      <li>
                        <strong>C</strong> - Chickens (Class C)
                      </li>
                      <li>
                        <strong>D</strong> - Don't (Class D)
                      </li>
                      <li>
                        <strong>E</strong> - Eat (Class E)
                      </li>
                      <li>
                        <strong>G</strong> - Grapes (Class G)
                      </li>
                    </ul>
                    <p>
                      Then associate each letter with the key requirements. For example, B requires two-way
                      communication, clearance, and a transponder.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>Like (5)</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <Flag className="h-4 w-4" />
                      <span>Report</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Reply form */}
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Post a Reply</h3>
              <Textarea placeholder="Write your reply here..." className="min-h-[100px] mb-4" />
              <div className="flex justify-end">
                <Button>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Post Reply
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
