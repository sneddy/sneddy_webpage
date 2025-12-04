"use client"

import { useMemo, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  ExternalLink,
  Calendar,
  ArrowRight,
  Sparkles,
  Star,
  BookOpen,
  Award,
  Building2,
  MapPin,
  Play,
  FileText,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import kazpravdaData from "@/locals/en/media/kazpravda.json"
import steppeData from "@/locals/en/media/steppe.json"
import zertteyData from "@/locals/en/media/zerttey.json"
import limonData from "@/locals/en/media/limon.json"
import cdmoData from "@/locals/en/media/cdmo.json"

// Enhanced article data with source information
const articlesData = [
  {
    ...kazpravdaData,
    id: "kazpravda",
    slug: "kazpravda",
    category: "Interview",
    readTime: "8 min read",
    publishDate: "2019-09-05",
    tags: ["AI", "Machine Learning", "Kazakhstan", "Career"],
    featured: true,
    difficulty: "Beginner",
    color: "from-blue-500 via-cyan-500 to-teal-500",
    accentColor: "bg-blue-500",
    excerpt:
      "A talk with Anuar Aimoldin about how he builds smart algorithms, wins global AI competitions, and helps grow a community of young machine learning engineers in Kazakhstan.",
    keyTopics: ["Algorithm Basics", "Career Advice", "AI Accessibility", "Educational Content"],
    authorNote:
      "A foundational interview that made complex AI concepts accessible to the general public in Kazakhstan.",
    sourceInfo: {
      name: "Kazakhstanskaya Pravda",
      description:
        "Kazakhstan's leading national newspaper, established in 1920, serving as the country's primary source of news and analysis",
      url: "https://kazpravda.kz/n/nehitrye-algoritmy/",
      location: "Kazakhstan",
      type: "National Newspaper",
    },
  },
  {
    ...limonData,
    id: "limon",
    slug: "limon",
    category: "Interview",
    readTime: "25 min read",
    publishDate: "2024-12-15",
    tags: ["AI", "Community", "Kazakhstan", "Education", "dsml.kz", "Kaggle", "Career", "Math Olympiad"],
    featured: true,
    difficulty: "Intermediate",
    color: "from-emerald-500 via-teal-500 to-cyan-500",
    accentColor: "bg-emerald-500",
    excerpt:
      "In this comprehensive interview with Limon.kg, Anuar Aimoldin shares his journey from mathematical competitions to becoming a globally recognized AI expert, discussing his work in building Kazakhstan's largest ML community.",
    keyTopics: ["Community Building", "AI Education", "Career Development", "Kazakhstan Tech Scene"],
    authorNote:
      "An in-depth conversation about the intersection of mathematics, artificial intelligence, and community building in Central Asia.",
    sourceInfo: {
      name: "Limon.kg",
      description:
        "a leading digital media platform covering technology, innovation, and entrepreneurship across Central Asia",
      url: "https://limon.kg",
      location: "Kyrgyzstan",
      type: "Digital Media Platform",
    },
  },
  {
    ...cdmoData,
    id: "cdmo",
    slug: "from-math-olympiads-to-ml",
    category: "Personal Story",
    readTime: "12 min read",
    publishDate: "2021-01-03",
    tags: ["Mathematics", "Education", "Career Journey", "CDMO"],
    featured: false,
    difficulty: "Intermediate",
    color: "from-purple-500 via-pink-500 to-rose-500",
    accentColor: "bg-purple-500",
    excerpt:
      "A personal narrative about transitioning from competitive mathematics to machine learning research and industry applications.",
    keyTopics: ["Mathematical Foundations", "Competitive Programming", "Skill Transfer", "Personal Growth"],
    authorNote: "A reflective piece on how mathematical competition experience shaped an AI career path.",
    sourceInfo: {
      name: "CDMO",
      description:
        "the Center for Development of Mathematical Olympiads, Kazakhstan's premier organization for mathematical education and competition training",
      url: "#",
      location: "Kazakhstan",
      type: "Educational Organization",
    },
  },
  {
    ...steppeData,
    id: "steppe",
    slug: "steppe",
    category: "Industry Analysis",
    readTime: "6 min read",
    publishDate: "2020-03-15",
    tags: ["Tech Industry", "Kazakhstan", "Talent", "BTS Digital"],
    featured: true,
    difficulty: "Advanced",
    color: "from-green-500 via-emerald-500 to-cyan-500",
    accentColor: "bg-green-500",
    excerpt:
      "A talk with Anuar Aimoldin about his IT journey, how to grow Kazakhstan’s tech market, and how to stop brain drain and keep talent at home.",
    keyTopics: ["Talent Retention", "Tech Policy", "Economic Development", "Industry Analysis"],
    authorNote: "A critical examination of Kazakhstan's tech talent landscape and retention challenges.",
    sourceInfo: {
      name: "The Steppe",
      description:
        "an independent English-language publication focused on Central Asian affairs, politics, and culture",
      url: "https://thesteppe.com",
      location: "Central Asia",
      type: "Independent Publication",
    },
  },
  {
    ...zertteyData,
    id: "zerttey",
    slug: "data-science-job-market",
    category: "Research",
    readTime: "10 min read",
    publishDate: "2020-07-20",
    tags: ["Data Science", "Job Market", "Research", "Analytics"],
    featured: false,
    difficulty: "Intermediate",
    color: "from-orange-500 via-red-500 to-pink-500",
    accentColor: "bg-orange-500",
    excerpt:
      "Comprehensive analysis of the data science job market trends, salary expectations, and skill requirements.",
    keyTopics: ["Job Market", "Salary Analysis", "Skill Requirements", "Career Planning"],
    authorNote: "Data-driven insights into the evolving data science job market in Kazakhstan and the region.",
    sourceInfo: {
      name: "Zerttey",
      description:
        "a Kazakhstani research and analytics platform specializing in data-driven insights and market analysis",
      url: "#",
      location: "Kazakhstan",
      type: "Research Platform",
    },
  },
]

export default function MediaPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const normalizedArticles = useMemo(
    () =>
      articlesData.map((article) => ({
        ...article,
        imageAlt: (article as { imageAlt?: string; title: string }).imageAlt ?? article.title,
      })),
    [],
  )

  // Filter and sort articles
  const filteredAndSortedArticles = useMemo(() => {
    return [...normalizedArticles].sort(
      (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
    )
  }, [normalizedArticles])

  const clearFilters = () => {
    // Placeholder to satisfy UI action; filters removed
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const featuredArticles = filteredAndSortedArticles.filter((article) => article.featured)
  const regularArticles = filteredAndSortedArticles.filter((article) => !article.featured)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800"
      case "Intermediate":
        return "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800"
      case "Advanced":
        return "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30">
      {/* Redesigned Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Enhanced Background with Geometric Patterns */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-emerald-600/5 dark:from-blue-400/5 dark:via-purple-400/5 dark:to-emerald-400/5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl" />

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Elegant Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-full text-sm font-medium mb-12 shadow-lg shadow-slate-900/5 dark:shadow-slate-900/20"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
              Media Coverage & Publications
              <Badge
                variant="secondary"
                className="ml-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-0 font-medium"
              >
                {articlesData.length}
              </Badge>
            </motion.div>

            {/* Sophisticated Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-slate-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight tracking-tight"
            >
              Media & Press
            </motion.h1>

            {/* Refined Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed font-light"
            >
              Interviews, features, and publications showcasing AI research, community building, and insights on the
              evolving tech landscape in Kazakhstan and beyond.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 pb-24">
        {/* Premium Featured Articles */}
        {featuredArticles.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-24"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <div>
                <h2 className="text-4xl font-bold mb-3 text-slate-900 dark:text-slate-100">Featured Articles</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">In-depth coverage and personal insights</p>
              </div>
              <div className="ml-auto p-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl">
                <Sparkles className="h-6 w-6 text-blue-500" />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="group relative"
                >
                  {/* Premium Card with Gradient Border */}
                  <div className="relative">
                    {/* Gradient Border Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${article.color} rounded-3xl blur-sm opacity-0 group-hover:opacity-30 transition-all duration-700`}
                    ></div>

                    <Card className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border-0 shadow-xl shadow-slate-900/5 dark:shadow-slate-900/20 group-hover:shadow-2xl group-hover:shadow-slate-900/10 dark:group-hover:shadow-slate-900/30 transition-all duration-700 group-hover:scale-[1.02]">
                      {/* Premium Image Section */}
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={article.imageUrl || "/placeholder.svg"}
                          alt={article.imageAlt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* Floating Badges */}
                        <div className="absolute top-6 left-6 flex gap-3">
                          <Badge className="bg-white/95 backdrop-blur-sm text-slate-800 font-semibold px-4 py-2 text-sm border-0 shadow-lg">
                            {article.category}
                          </Badge>
                        </div>

                        <div className="absolute top-6 right-6">
                          <Badge
                            className={`${getDifficultyColor(article.difficulty)} font-semibold px-4 py-2 text-sm border shadow-lg backdrop-blur-sm`}
                          >
                            {article.difficulty}
                          </Badge>
                        </div>

                        {/* Elegant Title Overlay */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-white text-2xl font-bold mb-3 line-clamp-2 group-hover:text-blue-200 transition-colors duration-300">
                            {article.title}
                          </h3>
                          <div className="flex items-center gap-4 text-white/80 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {new Date(article.publishDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {article.readTime}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Premium Content Section */}
                      <CardContent className="p-8 space-y-6">
                        <CardDescription className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
                          {article.subtitle}
                        </CardDescription>

                        {/* Enhanced Source Information */}
                        <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 dark:from-slate-800 dark:to-blue-950/50 rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg">
                              <Building2 className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-slate-900 dark:text-slate-100">
                                  {article.sourceInfo.name}
                                </h4>
                                <Badge
                                  variant="outline"
                                  className="text-xs font-medium border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400"
                                >
                                  {article.sourceInfo.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2 leading-relaxed">
                                {article.sourceInfo.description}
                              </p>
                              <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                                  <MapPin className="h-4 w-4" />
                                  {article.sourceInfo.location}
                                </div>
                                {article.sourceInfo.url !== "#" && (
                                  <Link
                                    href={article.sourceInfo.url}
                                    target="_blank"
                                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                                  >
                                    <ExternalLink className="h-4 w-4" />
                                    Visit Source
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Premium Action Button */}
                        <Link href={`/media/${article.slug}`} className="block">
                          <Button className="w-full h-16 text-lg font-semibold rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 dark:from-slate-100 dark:to-slate-300 dark:hover:from-slate-200 dark:hover:to-slate-400 dark:text-slate-900 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative flex items-center justify-center gap-3">
                              <FileText className="h-5 w-5" />
                              Read Full Article
                              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Premium Regular Articles */}
        {regularArticles.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="w-1 h-16 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full"></div>
              <div>
                <h2 className="text-4xl font-bold mb-3 text-slate-900 dark:text-slate-100">All Articles</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">Complete collection of media coverage</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-500 group-hover:scale-[1.03] border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-slate-900/20 rounded-2xl">
                    {/* Premium Image Section */}
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <Image
                        src={article.imageUrl || "/placeholder.svg"}
                        alt={article.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Floating Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-semibold px-3 py-1 border-0 shadow-lg">
                          {article.category}
                        </Badge>
                      </div>

                      <div className="absolute top-4 right-4">
                        <Badge
                          className={`${getDifficultyColor(article.difficulty)} text-xs font-semibold px-3 py-1 border shadow-lg backdrop-blur-sm`}
                        >
                          {article.difficulty}
                        </Badge>
                      </div>

                      {/* Gradient Accent */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 ${article.accentColor}`}></div>
                    </div>

                    {/* Premium Content Section */}
                    <div className="flex-1 flex flex-col">
                      <CardHeader className="pb-4">
                        <CardTitle
                          className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 font-bold text-slate-900 dark:text-slate-100 text-xl"
                        >
                          {article.title}
                        </CardTitle>
                        <CardDescription
                          className="line-clamp-2 text-slate-600 dark:text-slate-400 leading-relaxed text-base"
                        >
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                        {/* Enhanced Source Info */}
                        <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 dark:from-slate-800 dark:to-blue-950/30 rounded-xl p-4 border border-slate-200/50 dark:border-slate-700/50">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                              <Building2 className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                                  {article.sourceInfo.name}
                                </span>
                                <Badge
                                  variant="outline"
                                  className="text-xs px-2 py-0 border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400"
                                >
                                  {article.sourceInfo.type}
                                </Badge>
                              </div>
                              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">
                                {article.sourceInfo.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Metadata */}
                        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {new Date(article.publishDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </div>
                        </div>

                        {/* Key Topics */}
                        <div className="flex flex-wrap gap-2">
                          {article.keyTopics.slice(0, 2).map((topic) => (
                            <Badge
                              key={topic}
                              variant="secondary"
                              className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-0"
                            >
                              {topic}
                            </Badge>
                          ))}
                          {article.keyTopics.length > 2 && (
                            <Badge
                              variant="secondary"
                              className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-0"
                            >
                              +{article.keyTopics.length - 2}
                            </Badge>
                          )}
                        </div>

                        {/* Premium Action Buttons */}
                        <div className="flex gap-3 pt-2">
                          <Link href={`/media/${article.slug}`} className="flex-1">
                            <Button
                              size="sm"
                              className="w-full h-12 font-semibold rounded-xl bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 dark:from-slate-100 dark:to-slate-300 dark:hover:from-slate-200 dark:hover:to-slate-400 dark:text-slate-900 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="relative flex items-center justify-center gap-2">
                                <Play className="h-4 w-4" />
                                Read More
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </div>
                            </Button>
                          </Link>
                          {article.sourceInfo.url !== "#" && (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="h-12 w-12 rounded-xl border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors bg-transparent"
                            >
                              <Link href={article.sourceInfo.url} target="_blank">
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Premium No Results State */}
        {filteredAndSortedArticles.length === 0 && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center py-24">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-3xl flex items-center justify-center">
              <FileText className="h-12 w-12 text-slate-400" />
            </div>
            <h3 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">No articles found</h3>
            <p className="text-slate-600 dark:text-slate-400 text-xl mb-12 max-w-md mx-auto leading-relaxed">
              Try adjusting your search terms or filters to discover more content
            </p>
            <Button
              onClick={clearFilters}
              size="lg"
              className="px-12 py-6 text-lg rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 dark:from-slate-100 dark:to-slate-300 dark:hover:from-slate-200 dark:hover:to-slate-400 dark:text-slate-900 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Clear all filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
