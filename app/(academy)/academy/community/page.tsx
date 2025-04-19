import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, ThumbsUp, Users } from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Community</h1>
        <p className="text-muted-foreground">Connect with fellow aviation enthusiasts, students, and instructors.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Discussion Forums</CardTitle>
            <CardDescription>Join conversations on various aviation topics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span>2,345 members active</span>
            </div>
            <div className="space-y-2">
              {forums.map((forum) => (
                <div key={forum.id} className="flex justify-between items-center">
                  <span>{forum.name}</span>
                  <Badge variant="outline">{forum.topics} topics</Badge>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/academy/community/forums">Browse Forums</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Study Groups</CardTitle>
            <CardDescription>Join or create study groups for specific courses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span>42 active groups</span>
            </div>
            <div className="space-y-2">
              {studyGroups.map((group) => (
                <div key={group.id} className="flex justify-between items-center">
                  <span>{group.name}</span>
                  <Badge variant="outline">{group.members} members</Badge>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/academy/community/study-groups">Find Groups</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Instructor Connect</CardTitle>
            <CardDescription>Connect with certified flight instructors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span>78 instructors available</span>
            </div>
            <div className="space-y-4">
              {instructors.map((instructor) => (
                <div key={instructor.id} className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={instructor.avatar || "/placeholder.svg"} alt={instructor.name} />
                    <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium">{instructor.name}</div>
                    <div className="text-sm text-muted-foreground">{instructor.specialty}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/academy/community/instructors">Find Instructors</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold tracking-tight mb-4">Recent Discussions</h2>
        <div className="space-y-4">
          {discussions.map((discussion) => (
            <Card key={discussion.id}>
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>{discussion.title}</CardTitle>
                  <Badge>{discussion.category}</Badge>
                </div>
                <CardDescription>
                  Posted by {discussion.author} • {discussion.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-2">{discussion.content}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{discussion.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>{discussion.comments}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/academy/community/discussions/${discussion.id}`}>View Discussion</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const forums = [
  { id: 1, name: "Private Pilot Training", topics: 156 },
  { id: 2, name: "Weather & Navigation", topics: 89 },
  { id: 3, name: "Aircraft Systems", topics: 112 },
]

const studyGroups = [
  { id: 1, name: "PPL Study Group", members: 24 },
  { id: 2, name: "IFR Rating Prep", members: 18 },
  { id: 3, name: "Commercial Pilot Exam", members: 15 },
]

const instructors = [
  {
    id: 1,
    name: "Capt. Sarah Johnson",
    specialty: "Private & Commercial",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Capt. Michael Chen",
    specialty: "Instrument & Multi-Engine",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Capt. James Wilson",
    specialty: "Advanced Aerodynamics",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const discussions = [
  {
    id: 1,
    title: "Tips for first solo flight?",
    category: "Student Pilot",
    author: "Alex Thompson",
    date: "2 hours ago",
    content:
      "I'm scheduled for my first solo flight next week and feeling a bit nervous. Any tips from those who've been through it?",
    likes: 24,
    comments: 18,
  },
  {
    id: 2,
    title: "Understanding complex airspace",
    category: "Navigation",
    author: "Jamie Rodriguez",
    date: "1 day ago",
    content:
      "I'm struggling with Class B airspace entry requirements. Can someone explain the procedures in simple terms?",
    likes: 16,
    comments: 22,
  },
  {
    id: 3,
    title: "Best weather resources for pilots",
    category: "Weather",
    author: "Taylor Kim",
    date: "3 days ago",
    content:
      "What weather resources do you find most reliable for flight planning? Looking for recommendations beyond the standard briefing.",
    likes: 42,
    comments: 35,
  },
]
