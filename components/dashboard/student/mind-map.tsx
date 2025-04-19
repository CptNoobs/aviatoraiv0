"use client"

import { useRef, useEffect, useState } from "react"
import { Search, Zap, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Export the original MindMap component that was missing
export function MindMap() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Clear any existing content
    containerRef.current.innerHTML = ""

    // Create nodes
    const nodes = [
      { id: "main", label: "Aviation", x: 400, y: 250 },
      { id: "weather", label: "Weather", x: 250, y: 150 },
      { id: "navigation", label: "Navigation", x: 550, y: 150 },
      { id: "regulations", label: "Regulations", x: 250, y: 350 },
      { id: "aircraft", label: "Aircraft", x: 550, y: 350 },
    ]

    // Create connections
    const connections = [
      { from: "main", to: "weather" },
      { from: "main", to: "navigation" },
      { from: "main", to: "regulations" },
      { from: "main", to: "aircraft" },
    ]

    // Create and append nodes
    nodes.forEach((node) => {
      const nodeElement = document.createElement("div")
      nodeElement.className = "mind-map-node"
      nodeElement.id = `node-${node.id}`
      nodeElement.textContent = node.label
      nodeElement.style.position = "absolute"
      nodeElement.style.left = `${node.x - 60}px`
      nodeElement.style.top = `${node.y - 30}px`

      // Make nodes draggable
      nodeElement.style.cursor = "grab"

      containerRef.current?.appendChild(nodeElement)
    })

    // Create and append connections
    connections.forEach((conn) => {
      const fromNode = document.getElementById(`node-${conn.from}`)
      const toNode = document.getElementById(`node-${conn.to}`)

      if (fromNode && toNode) {
        const fromRect = fromNode.getBoundingClientRect()
        const toRect = toNode.getBoundingClientRect()

        const containerRect = containerRef.current!.getBoundingClientRect()

        const fromX = fromRect.left + fromRect.width / 2 - containerRect.left
        const fromY = fromRect.top + fromRect.height / 2 - containerRect.top
        const toX = toRect.left + toRect.width / 2 - containerRect.left
        const toY = toRect.top + toRect.height / 2 - containerRect.top

        const length = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2))
        const angle = (Math.atan2(toY - fromY, toX - fromX) * 180) / Math.PI

        const line = document.createElement("div")
        line.className = "mind-map-line"
        line.style.width = `${length}px`
        line.style.left = `${fromX}px`
        line.style.top = `${fromY}px`
        line.style.transform = `rotate(${angle}deg)`

        containerRef.current?.appendChild(line)
      }
    })

    // Simple drag functionality
    let isDragging = false
    let currentNode: HTMLElement | null = null
    let offsetX = 0
    let offsetY = 0

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.classList.contains("mind-map-node")) {
        isDragging = true
        currentNode = target
        offsetX = e.clientX - target.getBoundingClientRect().left
        offsetY = e.clientY - target.getBoundingClientRect().top
        target.style.cursor = "grabbing"
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && currentNode && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - containerRect.left - offsetX
        const y = e.clientY - containerRect.top - offsetY

        currentNode.style.left = `${x}px`
        currentNode.style.top = `${y}px`

        // Update connections
        const nodeId = currentNode.id.replace("node-", "")

        // Remove old connections
        document.querySelectorAll(".mind-map-line").forEach((line) => {
          line.remove()
        })

        // Redraw connections
        connections.forEach((conn) => {
          const fromNode = document.getElementById(`node-${conn.from}`)
          const toNode = document.getElementById(`node-${conn.to}`)

          if (fromNode && toNode) {
            const fromRect = fromNode.getBoundingClientRect()
            const toRect = toNode.getBoundingClientRect()

            const fromX = fromRect.left + fromRect.width / 2 - containerRect.left
            const fromY = fromRect.top + fromRect.height / 2 - containerRect.top
            const toX = toRect.left + toRect.width / 2 - containerRect.left
            const toY = toRect.top + toRect.height / 2 - containerRect.top

            const length = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2))
            const angle = (Math.atan2(toY - fromY, toX - fromX) * 180) / Math.PI

            const line = document.createElement("div")
            line.className = "mind-map-line"
            line.style.width = `${length}px`
            line.style.left = `${fromX}px`
            line.style.top = `${fromY}px`
            line.style.transform = `rotate(${angle}deg)`

            containerRef.current?.appendChild(line)
          }
        })
      }
    }

    const handleMouseUp = () => {
      if (currentNode) {
        currentNode.style.cursor = "grab"
      }
      isDragging = false
      currentNode = null
    }

    containerRef.current.addEventListener("mousedown", handleMouseDown)
    containerRef.current.addEventListener("mousemove", handleMouseMove)
    containerRef.current.addEventListener("mouseup", handleMouseUp)
    containerRef.current.addEventListener("mouseleave", handleMouseUp)

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousedown", handleMouseDown)
        containerRef.current.removeEventListener("mousemove", handleMouseMove)
        containerRef.current.removeEventListener("mouseup", handleMouseUp)
        containerRef.current.removeEventListener("mouseleave", handleMouseUp)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-[500px] w-full overflow-hidden rounded-md border border-border bg-card/50"
    >
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Loading mind map...</div>
    </div>
  )
}

// Also export the new MindMapExplorer component
export function MindMapExplorer() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample mind map topics
  const popularTopics = [
    "Aircraft Systems",
    "Weather Patterns",
    "Navigation Principles",
    "Air Law Basics",
    "Flight Planning",
    "Aerodynamics",
    "Radio Communications",
    "Emergency Procedures",
  ]

  const recentMaps = [
    { id: 1, title: "VFR Flight Rules", lastViewed: "2 days ago" },
    { id: 2, title: "Aircraft Instruments", lastViewed: "1 week ago" },
    { id: 3, title: "Airspace Classifications", lastViewed: "2 weeks ago" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Interactive Mind Maps</h2>
        <p className="text-muted-foreground">
          Explore aviation concepts through visual mind maps. Search for a topic or browse popular subjects.
        </p>

        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for a topic..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button>
            <Zap className="mr-2 h-4 w-4" />
            Generate
          </Button>
        </div>
      </div>

      <Tabs defaultValue="popular" className="space-y-4">
        <TabsList>
          <TabsTrigger value="popular">Popular Topics</TabsTrigger>
          <TabsTrigger value="recent">Recent Maps</TabsTrigger>
          <TabsTrigger value="saved">Saved Maps</TabsTrigger>
        </TabsList>

        <TabsContent value="popular" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {popularTopics.map((topic) => (
              <Card key={topic} className="cursor-pointer hover:bg-accent/50 transition-colors">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <h3 className="text-lg font-medium text-center">{topic}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recentMaps.map((map) => (
              <Card key={map.id}>
                <CardHeader>
                  <CardTitle>{map.title}</CardTitle>
                  <CardDescription>Last viewed: {map.lastViewed}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-end gap-2">
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Export
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="space-y-4">
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <h3 className="text-lg font-medium mb-2">No saved mind maps yet</h3>
            <p className="text-muted-foreground mb-4">Generate a mind map and save it to access it later.</p>
            <Button>Create Your First Mind Map</Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Mind Map Visualization Placeholder */}
      <Card className="border-dashed">
        <CardHeader>
          <CardTitle>Mind Map Visualization</CardTitle>
          <CardDescription>Select a topic above to view its interactive mind map</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center p-12">
          <div className="text-center">
            <p className="text-muted-foreground">Select a topic to view its interactive mind map visualization</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
