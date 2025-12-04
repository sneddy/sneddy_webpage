"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
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
  content: string[]
  readMoreText: string
  readFullArticleText: string
}

export function ZertteyArticle() {
  const [data, setData] = useState<ArticleData | null>(null)
  const [showFullText, setShowFullText] = useState(false)
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
      <CardHeader>
        <CardTitle className="text-2xl">{data.title}</CardTitle>
        <CardDescription className="text-lg">{data.subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center">
          <div className="relative w-full max-w-md aspect-video bg-muted rounded-md overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5PxnGy7lO2v5x14ZQBX2IPszGdaJH9.png"
              alt="Portrait of Anuar Aimoldin"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p className="text-lg">{data.preview}</p>

        <div className="flex justify-center">
          <Button onClick={() => setShowFullText(!showFullText)} className="gap-2">
            {showFullText ? "Hide Full Text" : "Read Full Interview"}
            {showFullText ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>

        {showFullText && (
          <div className="space-y-4 mt-8 animate-in fade-in duration-500">
            <div className="space-y-4 prose dark:prose-invert max-w-none">
              {data.content.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          </div>
        )}

        <div className="border-t pt-6 mt-8">
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-medium mb-2">About the source:</h4>
            <p className="text-sm text-muted-foreground mb-4">
              <strong>{data.source.name}</strong> is the {data.source.description}
            </p>
            <Link
              href={data.source.url}
              target="_blank"
              className="inline-flex items-center text-primary hover:underline"
            >
              Read the original article
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
