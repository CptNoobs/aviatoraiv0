"use client"

import { Cloud, GraduationCap, Plane, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

interface PillarCardProps {
  title: string
  description: string
  icon: "GraduationCap" | "Cloud" | "Plane" | "BookOpen"
}

export function PillarCard({ title, description, icon }: PillarCardProps) {
  const IconComponent =
    icon === "GraduationCap" ? GraduationCap : icon === "Cloud" ? Cloud : icon === "BookOpen" ? BookOpen : Plane

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 149, 255, 0.1)" }}
      className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <IconComponent className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-muted-foreground">{description}</p>

      {/* Blueprint decoration in the background */}
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full border border-dashed border-primary/20 opacity-30 transition-all group-hover:border-primary/30 group-hover:opacity-50"></div>
    </motion.div>
  )
}
