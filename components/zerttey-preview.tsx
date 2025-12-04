"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface ArticleData {
  title: string
  subtitle: string
  source: {
    name: string
    description: string
    url: string
  }
  preview: string
  readMoreText: string
}

export function ZertteyPreview() {
  const [data, setData] = useState<ArticleData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/zerttey-article.json")
        const articleData = await response.json()
        setData(articleData)
      } catch (error) {
        console.error("Error loading article data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading || !data) {
    return <div className="py-8 text-center">Loading article...</div>
  }

  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col">
        <div className="p-6">
          <CardHeader className="p-0">
            <CardTitle className="text-2xl mb-2">{data.title}</CardTitle>
            <CardDescription className="text-lg">{data.subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="p-0 mt-4">
            <div className="text-sm text-muted-foreground mb-4">
              <strong>{data.source.name}</strong> — {data.source.description.split(",")[0]}
            </div>
            <p className="mb-4">{data.preview}</p>
            <Link href="/media" className="inline-block mb-8">
              <Button variant="outline">{data.readMoreText}</Button>
            </Link>
          </CardContent>
        </div>
        <div className="flex justify-center pb-6">
          <div className="relative w-full max-w-md aspect-video bg-muted">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5PxnGy7lO2v5x14ZQBX2IPszGdaJH9.png"
              alt="Portrait of Anuar Aimoldin"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
