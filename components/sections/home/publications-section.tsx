"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Import media data
import kazpravdaData from "@/locals/en/media/kazpravda.json"
import steppeData from "@/locals/en/media/steppe.json"
import zertteyData from "@/locals/en/media/zerttey.json"
import cdmoData from "@/locals/en/media/cdmo.json"

export function PublicationsSection() {
  const articles = [
    {
      ...kazpravdaData,
      slug: "kazpravda",
      image: "/placeholder.svg?height=200&width=300&text=Kazpravda+Article",
    },
    {
      ...cdmoData,
      slug: "cdmo",
      image: "/placeholder.svg?height=200&width=300&text=CDMO+Article",
    },
    {
      ...steppeData,
      slug: "steppe",
      image: "/placeholder.svg?height=200&width=300&text=Steppe+Article",
    },
    {
      ...zertteyData,
      slug: "zerttey",
      image: "/placeholder.svg?height=200&width=300&text=Zerttey+Article",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Media & Publications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Featured articles and interviews about AI, technology trends, and industry insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Link href={`/media/${article.slug}`} className="block h-full">
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group border-border/50 hover:border-primary/50">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-2 bg-background/90 backdrop-blur-sm rounded-full">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {article.publication}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm leading-relaxed line-clamp-3">
                      {article.subtitle}
                    </CardDescription>
                    <div className="flex items-center text-primary font-medium text-sm mt-3 group-hover:translate-x-1 transition-transform duration-300">
                      Read more <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/media">
            <Button variant="outline" size="lg" className="group bg-transparent">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
