"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, ExternalLink, Clock, Calendar, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ArticleProps {
  data: {
    title: string
    subtitle: string
    source: {
      name: string
      description: string
      url: string
    }
    preview: string
    content: string[]
    sections?: {
      title: string
      content: string[]
    }[]
    extendedVersion?: {
      title: string
      content: string[]
      sections?: {
        title: string
        content: string[]
      }[]
    }
    imageUrl: string
    imageAlt: string
    category?: string
    readTime?: string
    publishDate?: string
    tags?: string[]
  }
}

export function ArticleDetail({ data }: ArticleProps) {
  const [showFullText, setShowFullText] = useState(false)

  // Get the correct URL for the article page
  const getArticleSlug = () => {
    const title = data.title.toLowerCase()
    if (title.includes("kazpravda") || title.includes("kazakhstanskaya pravda") || title.includes("algorithms")) {
      return "kazpravda"
    }
    if (title.includes("brain drain") || title.includes("steppe")) {
      return "steppe"
    }
    if (title.includes("data science") || title.includes("job market") || title.includes("zerttey")) {
      return "data-science-job-market"
    }
    if (title.includes("math olympiad") || title.includes("cdmo")) {
      return "from-math-olympiads-to-ml"
    }
    if (title.includes("kazakhstan to global") || title.includes("limon") || title.includes("ai innovator")) {
      return "limon"
    }
    return ""
  }

  const slug = getArticleSlug()
  const hasArticlePage = slug !== ""

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative h-full rounded-xl p-[2px] overflow-hidden bg-gradient-to-r from-primary to-secondary group"
    >
      <Card className="relative bg-slate-900 overflow-hidden h-full hover:shadow-2xl transition-all duration-500 border-0">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={data.imageUrl || "/placeholder.svg"}
            alt={data.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {data.category && <Badge className="absolute top-4 left-4 bg-white/90 text-black">{data.category}</Badge>}
        </div>

        <CardHeader className="pb-4">
          <CardTitle className="text-2xl group-hover:text-cyan-400 transition-colors text-white">
            {data.title}
          </CardTitle>
          <CardDescription className="text-lg text-slate-300">{data.subtitle}</CardDescription>

          {/* Metadata */}
          {(data.readTime || data.publishDate) && (
            <div className="flex items-center gap-4 text-sm text-slate-400 pt-2">
              {data.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {data.readTime}
                </div>
              )}
              {data.publishDate && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(data.publishDate).toLocaleDateString()}
                </div>
              )}
            </div>
          )}
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-lg leading-relaxed text-slate-300">{data.preview}</p>

          {/* Tags */}
          {data.tags && data.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs bg-slate-800 text-slate-300">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            {hasArticlePage ? (
              <Link href={`/media/${slug}`} className="flex-1">
                <Button className="w-full gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white">
                  Read Full Article
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Button
                onClick={() => setShowFullText(!showFullText)}
                className="flex-1 gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
              >
                {showFullText ? "Hide Full Text" : "Read Full Interview"}
                {showFullText ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            )}

            {data.source.url && data.source.url !== "#" && (
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-slate-600 hover:bg-slate-800 bg-transparent"
              >
                <Link href={data.source.url} target="_blank">
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>

          {/* Expanded Content */}
          {showFullText && !hasArticlePage && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 pt-6 border-t border-slate-700"
            >
              <div className="prose prose-invert max-w-none">
                {data.content.map((paragraph, index) => (
                  <div key={index} className="mb-4 text-slate-300" dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}

                {data.sections?.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-cyan-400">{section.title}</h3>
                    {section.content.map((paragraph, paragraphIndex) => (
                      <div
                        key={paragraphIndex}
                        className="mb-4 text-slate-300"
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}
                  </div>
                ))}

                {data.extendedVersion && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-cyan-400">{data.extendedVersion.title}</h3>
                    {data.extendedVersion.content.map((paragraph, index) => (
                      <div
                        key={`ext-${index}`}
                        className="mb-4 text-slate-300"
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}

                    {data.extendedVersion.sections?.map((section, sectionIndex) => (
                      <div key={`ext-section-${sectionIndex}`} className="mt-6">
                        <h4 className="text-lg font-semibold mb-3 text-white">{section.title}</h4>
                        {section.content.map((paragraph, paragraphIndex) => (
                          <div
                            key={`ext-section-${sectionIndex}-p-${paragraphIndex}`}
                            className="mb-4 text-slate-300"
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Source Information */}
          <div className="border-t pt-6 mt-8 border-slate-700">
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h4 className="font-medium mb-2 flex items-center gap-2 text-white">
                <User className="h-4 w-4" />
                About the source:
              </h4>
              <p className="text-sm text-slate-400 mb-4">
                <strong className="text-slate-300">{data.source.name}</strong> is {data.source.description}
              </p>
              {data.source.url && data.source.url !== "#" && (
                <Link
                  href={data.source.url}
                  target="_blank"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                >
                  Read the original article
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Link>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
