import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import kazpravdaData from "@/locals/en/media/kazpravda.json"
import steppeData from "@/locals/en/media/steppe.json"
import zertteyData from "@/locals/en/media/zerttey.json"

interface ArticlePreviewProps {
  data: typeof kazpravdaData
  imageUrl: string
  imageAlt: string
}

function ArticlePreview({ data, imageUrl, imageAlt }: ArticlePreviewProps) {
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
            <Link
              href={data.title === "Data Science Job Market in Kazakhstan" ? "/blog/data-science-job-market" : "/media"}
              className="inline-block mb-8"
            >
              <Button variant="outline">{data.readMoreText}</Button>
            </Link>
          </CardContent>
        </div>
        <div className="relative aspect-video bg-muted">
          <Image src={imageUrl || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
    </Card>
  )
}

export function PublicationsSection() {
  return (
    <section id="publications" className="py-16 md:py-24 bg-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Media & Publications</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Featured articles and interviews about AI, ML, and technology
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-1">
          <ArticlePreview
            data={zertteyData}
            imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZYLOd72dZd0jE7b41FtRu8N6XcJ3N2.png"
            imageAlt="Anuar Aimoldin discussing data science trends in Kazakhstan"
          />
          <ArticlePreview
            data={steppeData}
            imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZdhcYtibK6gcSxgE4NmJ9xWGw8oCVj.png"
            imageAlt="Anuar Aimoldin during an interview at The Steppe"
          />
          <ArticlePreview
            data={kazpravdaData}
            imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JVrtAxnkPht5FMS6qwBEQDUkjuOGMI.png"
            imageAlt="Anuar Aimoldin giving a presentation about Kaggle experiences"
          />
        </div>
      </div>
    </section>
  )
}
