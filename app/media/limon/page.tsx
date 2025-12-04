import Head from "next/head"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  BookOpen,
  Share2,
  Bookmark,
  Quote,
  Lightbulb,
  Star,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import limonData from "@/locals/en/media/limon.json"
import limonFullData from "@/locals/en/media/limon_full.json"

export default function LimonArticlePage() {
  const article = {
    ...limonFullData,
    title: limonData.title, // keep original name
    subtitle: limonData.subtitle,
    content: limonFullData.intro || limonFullData.content || [],
    sections:
      limonFullData.interview?.map((entry: { question: string; answer: string[] }) => ({
        title: entry.question,
        content: entry.answer,
      })) ?? [],
    imageAlt: limonFullData.title,
    tags: limonFullData.tags || ["AI", "Machine Learning", "Kazakhstan"],
    readTime: limonFullData.readTime || limonData.readTime,
    publishedDate: limonFullData.publishedDate || limonData.publishedDate,
  }
  const canonicalUrl = "https://anuar.best/media/limon"
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.preview || article.subtitle,
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    author: { "@type": "Person", name: "Anuar Aimoldin" },
    publisher: {
      "@type": "Organization",
      name: article.source.name,
      url: article.source.url,
    },
    image: article.imageUrl,
    mainEntityOfPage: canonicalUrl,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>{`${article.title} | Anuar Aimoldin`}</title>
        <meta name="description" content={article.preview || article.subtitle} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${article.title} | Anuar Aimoldin`} />
        <meta property="og:description" content={article.preview || article.subtitle} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={article.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${article.title} | Anuar Aimoldin`} />
        <meta name="twitter:description" content={article.preview || article.subtitle} />
        <meta name="twitter:image" content={article.imageUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      {/* Hero Section with Parallax Effect */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <Link
              href="/media"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-1 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Media
            </Link>

            {/* Article Header */}
            <div className="space-y-8">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 border-blue-500/30 px-4 py-2">
                  {article.category}
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-300 border-purple-500/30 px-4 py-2">
                  {article.type}
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-300 border-green-500/30 px-4 py-2">
                  Featured Interview
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
                  {article.title}
                </span>
              </h1>

              <p className="text-2xl text-slate-300 leading-relaxed max-w-4xl font-light">{article.subtitle}</p>

              {/* Enhanced Metadata */}
              <div className="flex flex-wrap items-center gap-8 text-slate-400">
                <div className="flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-full">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span className="font-medium">{article.publishDate}</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 text-green-400" />
                  <span className="font-medium">{article.readTime}</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-full">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  <span className="font-medium">{article.source.name}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg"
                >
                  <a href={article.source.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Read Original
                  </a>
                </Button>
                <Button variant="outline" className="border-slate-600 hover:bg-slate-800 px-6 py-3 bg-transparent">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share Article
                </Button>
                <Button variant="outline" className="border-slate-600 hover:bg-slate-800 px-6 py-3 bg-transparent">
                  <Bookmark className="w-5 h-5 mr-2" />
                  Save for Later
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {/* Hero Image */}
            {article.imageUrl && (
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={article.imageUrl || "/placeholder.svg"}
                  alt={article.imageAlt}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-medium">
                    Exclusive interview with Limon.kg about AI innovation and entrepreneurship
                  </p>
                </div>
              </div>
            )}

            {/* Main Content */}
            <div className="prose prose-xl prose-invert max-w-none">
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-sm rounded-3xl p-10 border border-slate-600/30 shadow-2xl">
                <div className="space-y-10">
                  {/* Introduction */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        About the Interview
                      </span>
                    </h2>
                    <p className="text-slate-200 leading-relaxed text-xl">{article.preview}</p>
                  </div>

                  {/* Key Highlights Box */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Lightbulb className="w-6 h-6 text-yellow-400" />
                      <h3 className="text-2xl font-bold text-white">Key Highlights</h3>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4 text-slate-200 text-lg">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0" />
                        <span>Journey from mathematical competitions to becoming a globally recognized AI expert</span>
                      </li>
                      <li className="flex items-start gap-4 text-slate-200 text-lg">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0" />
                        <span>Building Kazakhstan's largest machine learning community (DSML.kz)</span>
                      </li>
                      <li className="flex items-start gap-4 text-slate-200 text-lg">
                        <span className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0" />
                        <span>Challenges and opportunities in fostering tech talent in Central Asia</span>
                      </li>
                      <li className="flex items-start gap-4 text-slate-200 text-lg">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mt-3 flex-shrink-0" />
                        <span>Achieving top 15 Kaggle Master status globally</span>
                      </li>
                    </ul>
                  </div>

                  {/* Quote Section */}
                  <div className="bg-gradient-to-r from-slate-700/30 to-slate-600/30 border-l-4 border-blue-500 rounded-r-2xl p-8">
                    <div className="flex items-start gap-4">
                      <Quote className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <blockquote className="text-slate-200 italic text-xl leading-relaxed mb-4">
                          "There was a moment that made it all click, though. On my birthday, when I was already Head of
                          AI at BTS Digital, had a Kaggle championship under my belt, and was leading major
                          projects—friends came to celebrate. But no one said, 'Happy birthday, Anuar the Kaggle champ,'
                          or 'Happy birthday, Head of AI.' Instead, they said, 'Thank you for the community.'"
                        </blockquote>
                        <cite className="text-slate-400 font-medium">— From the Limon.kg Interview</cite>
                      </div>
                    </div>
                  </div>

                  {/* Main Interview Content */}
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold">
                      <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                        The Full Interview
                      </span>
                    </h2>

                  <div className="space-y-8">
                    {article.content.map((paragraph, index) => (
                      <div key={index} className="bg-slate-800/30 rounded-xl p-6 border border-slate-600/30">
                        <p className="text-slate-200 leading-relaxed text-lg">{paragraph}</p>
                      </div>
                    ))}
                  </div>

                  {/* Interview QA */}
                  {article.sections && article.sections.length > 0 && (
                    <div className="space-y-10 mt-12">
                      {article.sections.map((section, idx) => (
                        <div key={idx} className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/40 space-y-4">
                          <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                          {section.content.map((answer, aidx) => (
                            <p key={aidx} className="text-slate-200 leading-relaxed text-lg">
                              {answer}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                  </div>

                  {/* Wisdom Box */}
                  <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Star className="w-6 h-6 text-yellow-400" />
                      <h3 className="text-2xl font-bold text-white">Key Insights</h3>
                    </div>
                    <div className="space-y-4">
                      <p className="text-slate-200 text-lg leading-relaxed">
                        <strong className="text-yellow-300">On Innovation:</strong> "True innovation happens at the
                        intersection of deep technical knowledge and real-world problem understanding."
                      </p>
                      <p className="text-slate-200 text-lg leading-relaxed">
                        <strong className="text-yellow-300">On Team Building:</strong> "The best AI teams combine
                        diverse perspectives - technical experts, domain specialists, and business strategists working
                        together."
                      </p>
                      <p className="text-slate-200 text-lg leading-relaxed">
                        <strong className="text-yellow-300">On the Future:</strong> "AI will become increasingly
                        democratized, but the real value will come from those who can apply it thoughtfully to create
                        meaningful impact."
                      </p>
                    </div>
                  </div>

                  {/* Stats Box */}
                  <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/30 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <BarChart3 className="w-6 h-6 text-green-400" />
                      <h3 className="text-2xl font-bold text-white">Impact by Numbers</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">8</div>
                        <div className="text-slate-300">Offline Events Organized</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                        <div className="text-slate-300">Years Building</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">155+</div>
                        <div className="text-slate-300">Citations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Source Information */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-400" />
                Source Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-slate-300">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-400">Publication:</span>
                    <span className="text-white">{article.source.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-400">Date:</span>
                    <span className="text-white">{article.publishDate}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-400">Category:</span>
                    <span className="text-white">{article.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-400">Read Time:</span>
                    <span className="text-white">{article.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-slate-400 mb-6 leading-relaxed">
                  <strong className="text-slate-300">{article.source.name}</strong> is {article.source.description}
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-600/30">
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <a href={article.source.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Full Interview on Limon.kg
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
