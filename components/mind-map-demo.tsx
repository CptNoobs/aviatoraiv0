"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

export function MindMapDemo() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Clear any existing content
    containerRef.current.innerHTML = ""

    // Create nodes
    const nodes = [
      { id: "main", label: "Aviation Fundamentals", x: 400, y: 250 },
      { id: "weather", label: "Weather Theory", x: 250, y: 150 },
      { id: "navigation", label: "Navigation", x: 550, y: 150 },
      { id: "regulations", label: "Regulations", x: 250, y: 350 },
      { id: "aircraft", label: "Aircraft Systems", x: 550, y: 350 },
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
      nodeElement.style.left = `${node.x - 80}px`
      nodeElement.style.top = `${node.y - 30}px`
      nodeElement.style.padding = "10px 15px"
      nodeElement.style.borderRadius = "8px"
      nodeElement.style.backgroundColor = "rgba(59, 130, 246, 0.2)"
      nodeElement.style.backdropFilter = "blur(8px)"
      nodeElement.style.border = "1px solid rgba(59, 130, 246, 0.3)"
      nodeElement.style.color = "white"
      nodeElement.style.fontWeight = "500"
      nodeElement.style.fontSize = "14px"
      nodeElement.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
      nodeElement.style.cursor = "grab"
      nodeElement.style.transition = "all 0.2s ease"
      nodeElement.style.minWidth = "160px"
      nodeElement.style.textAlign = "center"

      // Hover effect
      nodeElement.addEventListener("mouseenter", () => {
        nodeElement.style.backgroundColor = "rgba(59, 130, 246, 0.3)"
        nodeElement.style.transform = "translateY(-2px)"
        nodeElement.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.15)"
      })

      nodeElement.addEventListener("mouseleave", () => {
        nodeElement.style.backgroundColor = "rgba(59, 130, 246, 0.2)"
        nodeElement.style.transform = "translateY(0)"
        nodeElement.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
      })

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
        line.style.position = "absolute"
        line.style.height = "2px"
        line.style.width = `${length}px`
        line.style.left = `${fromX}px`
        line.style.top = `${fromY}px`
        line.style.transformOrigin = "left center"
        line.style.transform = `rotate(${angle}deg)`
        line.style.backgroundColor = "rgba(59, 130, 246, 0.4)"
        line.style.zIndex = "-1"

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
        target.style.zIndex = "10"
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
            line.style.position = "absolute"
            line.style.height = "2px"
            line.style.width = `${length}px`
            line.style.left = `${fromX}px`
            line.style.top = `${fromY}px`
            line.style.transformOrigin = "left center"
            line.style.transform = `rotate(${angle}deg)`
            line.style.backgroundColor = "rgba(59, 130, 246, 0.4)"
            line.style.zIndex = "-1"

            containerRef.current?.appendChild(line)
          }
        })
      }
    }

    const handleMouseUp = () => {
      if (currentNode) {
        currentNode.style.cursor = "grab"
        currentNode.style.zIndex = "1"
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-[400px] w-full overflow-hidden rounded-lg border border-blue-500/20 bg-blue-900/10 backdrop-blur-sm"
    >
      <div ref={containerRef} className="absolute inset-0 cursor-move">
        <div className="absolute inset-0 flex items-center justify-center text-blue-300">Loading mind map...</div>
      </div>
    </motion.div>
  )
}
