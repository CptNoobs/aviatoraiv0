"use client"

import type React from "react"

import { useState } from "react"
import { FileText, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export function LessonUpload() {
  const { toast } = useToast()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [course, setCourse] = useState("")
  const [files, setFiles] = useState<File[]>([])
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles([...files, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    const newFiles = [...files]
    newFiles.splice(index, 1)
    setFiles(newFiles)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !description || !course || files.length === 0) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields and upload at least one file.",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)

    // Simulate upload
    setTimeout(() => {
      setIsUploading(false)
      toast({
        title: "Lesson uploaded successfully",
        description: "Your lesson has been uploaded and is now available to students.",
      })

      // Reset form
      setTitle("")
      setDescription("")
      setCourse("")
      setFiles([])
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Lesson Title</Label>
        <Input id="title" placeholder="Enter lesson title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="course">Course</Label>
        <Select value={course} onValueChange={setCourse}>
          <SelectTrigger>
            <SelectValue placeholder="Select a course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="private-pilot">Private Pilot</SelectItem>
            <SelectItem value="instrument-rating">Instrument Rating</SelectItem>
            <SelectItem value="commercial-pilot">Commercial Pilot</SelectItem>
            <SelectItem value="flight-instructor">Flight Instructor</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Lesson Description</Label>
        <Textarea
          id="description"
          placeholder="Enter lesson description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="min-h-[120px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="files">Upload Files</Label>
        <div className="rounded-md border border-dashed border-border p-6 text-center">
          <Input id="files" type="file" multiple className="hidden" onChange={handleFileChange} />
          <Label htmlFor="files" className="cursor-pointer">
            <div className="flex flex-col items-center gap-2">
              <Upload className="h-10 w-10 text-muted-foreground" />
              <p className="text-sm font-medium">Drag and drop files here or click to browse</p>
              <p className="text-xs text-muted-foreground">Supports PDF, PPTX, DOCX, MP4, and images</p>
            </div>
          </Label>
        </div>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          <Label>Selected Files</Label>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-md border border-border bg-card p-2"
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-sm">{file.name}</span>
                </div>
                <Button type="button" variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeFile(index)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isUploading}>
        {isUploading ? "Uploading..." : "Upload Lesson"}
      </Button>
    </form>
  )
}
