"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowLeft, Clock, Calendar, Share2, Bookmark, Eye, ChevronUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import kazpravdaData from "@/locals/en/media/kazpravda.json"
import steppeData from "@/locals/en/media/steppe.json"
import zertteyData from "@/locals/en/media/zerttey.json"
import cdmoData from "@/locals/en/media/cdmo.json"
import limonData from "@/locals/en/media/limon.json"

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [readingProgress, setReadingProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  // Get the article data based on the slug
  const getArticleData = () => {
    switch (params.slug) {
      case "from-kazakhstan-to-global-ai":
        return {
          ...limonData,
          category: "Interview",
          readTime: "25 min read",
          publishDate: "2024-12-15",
          tags: ["AI", "Community", "Kazakhstan", "Education", "dsml.kz", "Kaggle", "Career", "Math Olympiad"],
          difficulty: "Intermediate",
          views: "3.5k",
        }
      case "uncomplicated-algorithms":
        return {
          ...kazpravdaData,
          category: "Interview",
          readTime: "8 min read",
          publishDate: "2023-03-15",
          tags: ["Algorithms", "Career", "Kazakhstan", "Tech"],
          difficulty: "Beginner",
          views: "2.1k",
        }
      case "brain-drain-kazakhstan":
        return {
          ...steppeData,
          category: "Analysis",
          readTime: "12 min read",
          publishDate: "2023-02-20",
          tags: ["Brain Drain", "Kazakhstan", "Education", "Policy"],
          difficulty: "Intermediate",
          views: "3.5k",
        }
      case "data-science-job-market":
        return {
          ...zertteyData,
          category: "Market Research",
          readTime: "15 min read",
          publishDate: "2023-01-10",
          tags: ["Data Science", "Job Market", "Career", "Analytics"],
          difficulty: "Advanced",
          views: "4.2k",
        }
      case "from-math-olympiads-to-ml":
        return {
          ...cdmoData,
          category: "Career Story",
          readTime: "10 min read",
          publishDate: "2023-04-05",
          tags: ["Math Olympiad", "Machine Learning", "Career Path", "Education"],
          difficulty: "Intermediate",
          views: "1.8k",
        }
      default:
        return null
    }
  }

  const article = getArticleData()

  // Reading progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setReadingProgress(progress)
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: article?.title,
        text: article?.subtitle,
        url: window.location.href,
      })
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500"
      case "Intermediate":
        return "bg-yellow-500"
      case "Advanced":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">Article Not Found</h1>
          <p className="text-lg text-slate-400">The article you're looking for doesn't exist or has been moved.</p>
          <Link href="/media">
            <Button className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Media
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-[#FFD700] to-[#00b2b2]"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 hover:bg-cyan-700"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}

      {/* Navigation Header */}
      <div className="sticky top-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-30">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/media">
              <Button variant="ghost" className="gap-2 hover:bg-slate-800 text-slate-300 hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                Back to Media
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`${isBookmarked ? "text-yellow-500" : "text-slate-400"} hover:text-white`}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleShare} className="text-slate-400 hover:text-white">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Article Header */}
          <div className="space-y-6 mb-12">
            {/* Category and Metadata */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-gradient-to-r from-[#FFD700] to-[#00b2b2] text-black font-medium">
                {article.category}
              </Badge>
              <Badge variant="outline" className={`${getDifficultyColor(article.difficulty)} text-white border-0`}>
                {article.difficulty}
              </Badge>
              {article.tags?.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs bg-slate-800 text-slate-300">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title and Subtitle */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {article.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">{article.subtitle}</p>
            </div>

            {/* Article Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(article.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                {article.views} views
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-video bg-slate-800 rounded-2xl overflow-hidden mb-12 shadow-2xl"
          >
            <Image
              src={article.imageUrl || "/placeholder.svg"}
              alt={article.imageAlt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div className="space-y-8">
              {article.content.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-lg leading-relaxed text-slate-300"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}

              {article.sections?.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * sectionIndex }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold mt-16 mb-8 bg-gradient-to-r from-[#FFD700] to-[#00b2b2] bg-clip-text text-transparent">
                    {section.title}
                  </h2>
                  {section.content.map((paragraph, paragraphIndex) => (
                    <div
                      key={paragraphIndex}
                      className="text-lg leading-relaxed text-slate-300"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.article>

          {/* Source Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 p-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">About the Source</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              <strong className="text-slate-300">{article.source.name}</strong> is {article.source.description}
            </p>
            {article.source.url && article.source.url !== "#" && (
              <Link
                href={article.source.url}
                target="_blank"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Read the original article
                <ExternalLink className="h-4 w-4" />
              </Link>
            )}
          </motion.div>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Continue Reading</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/media" className="group">
                <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors text-white">
                    Explore More Articles
                  </h4>
                  <p className="text-sm text-slate-400">Discover more insights on technology, career, and innovation</p>
                </div>
              </Link>
              <Link href="/competitions" className="group">
                <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors text-white">
                    View Competitions
                  </h4>
                  <p className="text-sm text-slate-400">Check out achievements in ML competitions and math olympiads</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
