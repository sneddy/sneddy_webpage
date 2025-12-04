"use client"

// Simple component with minimal React features
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function SimpleZertteyArticle() {
  const [showFullText, setShowFullText] = useState(false)

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl">Data Science Job Market in Kazakhstan</CardTitle>
        <CardDescription className="text-lg">Research insights on data science development</CardDescription>
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

        <p className="text-lg">
          In the "Data Science in Kazakhstan" research by Zerttey, Anuar Aymoldin, Head of Artificial Intelligence at
          BTS Digital, shared insights on the rapid development of the data science market in recent years. He
          highlighted the emergence of specialized programs at universities and anticipated increased competition for
          data analysis professionals, especially in the banking sector.
        </p>

        <div className="flex justify-center">
          <Button onClick={() => setShowFullText(!showFullText)}>
            {showFullText ? "Hide Full Text" : "Read Full Interview"}
          </Button>
        </div>

        {showFullText && (
          <div className="space-y-4 mt-8">
            <p>
              The data science market in Kazakhstan has been actively developing over the past three years. During this
              period, there has been significant growth: large product, infrastructure, and research teams, as well as
              AI-driven startups, have emerged. Numerous meetups are being held, and our specialists are successfully
              participating in international competitions and producing interesting research projects.​
            </p>
            <p>
              It's encouraging that several universities have introduced specialized programs in data science, including
              master's programs at Nazarbayev University, KazNU, KBTU, Yessenov Data Lab at ALMA University, and Astana
              IT University. However, there remains a noticeable shortage of middle and senior specialists, as well as
              individuals with experience in leading data science companies. In the coming years, I anticipate even
              stronger competition for talent in the field of data analysis, especially in the banking sector.
            </p>
          </div>
        )}

        <div className="border-t pt-6 mt-8">
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-medium mb-2">About the source:</h4>
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Zerttey Research</strong> is the Independent research platform focused on technology and education
              trends in Kazakhstan
            </p>
            <Link href="#" target="_blank" className="inline-flex items-center text-primary hover:underline">
              Read the original article
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
