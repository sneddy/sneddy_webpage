"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"
import {
  ExternalLink,
  Download,
  BookOpen,
  Award,
  Users,
  TrendingUp,
  FileText,
  Microscope,
  Brain,
  Heart,
  Zap,
  Quote,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type StatColor = "primary" | "secondary" | "green" | "blue"
type Metrics = Record<string, number>

interface ResearchPaper {
  title: string
  journal: string
  date: string
  impactFactor?: string
  authors: string
  url: string
  pdfUrl?: string
  metrics?: Metrics
  background?: string
  findings?: string
  interpretation?: string
  abstract?: string
  conclusion?: string
}

// Animated counter component
const AnimatedCounter = ({ value, suffix = "", duration = 2 }: { value: number | string; suffix?: string; duration?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isInView && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration, ease: "easeOut" }}
        >
          {value}
          {suffix}
        </motion.span>
      )}
    </motion.span>
  )
}

// Stats card component
const StatsCard = ({
  icon: Icon,
  value,
  label,
  delay = 0,
  color = "primary",
}: {
  icon: LucideIcon
  value: number | string
  label: string
  delay?: number
  color?: StatColor
}) => {
  const colorClasses: Record<StatColor, string> = {
    primary: "text-primary bg-primary/10",
    secondary: "text-secondary bg-secondary/10",
    green: "text-green-600 bg-green-600/10",
    blue: "text-blue-600 bg-blue-600/10",
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="text-center group"
    >
      <div className="relative">
        <div
          className={`absolute inset-0 ${colorClasses[color]} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
        ></div>
        <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 group-hover:border-primary/30 transition-all duration-300">
          <Icon className={`h-8 w-8 mx-auto mb-3 ${colorClasses[color].split(" ")[0]}`} />
          <div className={`text-3xl font-bold mb-1 ${colorClasses[color].split(" ")[0]}`}>
            <AnimatedCounter value={value} />
          </div>
          <div className="text-sm text-muted-foreground font-medium">{label}</div>
        </div>
      </div>
    </motion.div>
  )
}

// Enhanced research paper card
const ResearchPaperCard = ({ paper, index, featured = false }: { paper: ResearchPaper; index: number; featured?: boolean }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: featured ? 1.02 : 1.03 }}
      className={`group h-full ${featured ? "lg:col-span-2" : ""}`}
    >
      <div
        className={`relative h-full rounded-2xl p-[2px] overflow-hidden ${
          featured
            ? "bg-gradient-to-r from-yellow-400 via-primary to-secondary"
            : "bg-gradient-to-r from-primary/30 to-secondary/30 hover:from-primary/60 hover:to-secondary/60"
        } transition-all duration-500`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <Card className="relative h-full bg-card/95 backdrop-blur-sm border-0 rounded-2xl overflow-hidden">
          {featured && (
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg">
                <Award className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}

          <CardHeader className={`${featured ? "pb-4" : "pb-2"}`}>
            <div className="flex items-start gap-4 mb-4">
              <motion.div
                className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <FileText className="h-6 w-6 text-primary" />
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {paper.journal}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {paper.date}
                  </Badge>
                  {paper.impactFactor && (
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs">
                      IF: {paper.impactFactor}
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            <CardTitle
              className={`${featured ? "text-2xl" : "text-xl"} font-bold leading-tight group-hover:text-primary transition-colors duration-300`}
            >
              {paper.title}
            </CardTitle>

            <CardDescription className="text-sm text-muted-foreground">
              <strong>Authors:</strong> {paper.authors}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col flex-grow">
            {/* Metrics for featured paper */}
            {featured && paper.metrics && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {Object.entries(paper.metrics).map(([key, value], idx) => (
                  <div key={key} className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      <AnimatedCounter value={value} />
                    </div>
                    <div className="text-xs text-muted-foreground capitalize">{key}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Content sections */}
            <div className="space-y-4 flex-grow">
              {paper.background && (
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Brain className="h-4 w-4" />
                    Background
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{paper.background}</p>
                </div>
              )}

              {paper.findings && (
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Key Findings
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{paper.findings}</p>
                </div>
              )}

              {paper.interpretation && (
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Clinical Impact
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{paper.interpretation}</p>
                </div>
              )}

              {paper.abstract && (
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Quote className="h-4 w-4" />
                    Abstract
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{paper.abstract}</p>
                </div>
              )}

              {paper.conclusion && (
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Conclusion
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{paper.conclusion}</p>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="pt-6 flex flex-wrap gap-3 mt-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                >
                  <Link href={paper.url} target="_blank" rel="noopener noreferrer">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Paper
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>

              {paper.pdfUrl && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10 bg-transparent">
                    <a href={paper.pdfUrl} target="_blank" rel="noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                </motion.div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

// Hero section component
const HeroSection = () => (
  <section className="relative py-20 overflow-hidden">
    {/* Animated background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.12),transparent_50%)]"></div>
      <motion.div
        className="absolute top-1/2 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05),transparent_70%)]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>

    <div className="container px-4 md:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-primary/20"
        >
          <Microscope className="h-5 w-5 text-primary" />
          <span className="text-primary font-semibold">Research Publications</span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
          AI Research
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12"
        >
          Advancing artificial intelligence through machine learning, computer vision, and optimization research, with
          publications in top-tier journals
        </motion.p>

        {/* Research stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <StatsCard icon={FileText} value="2" label="Publications" delay={0.1} color="primary" />
          <StatsCard icon={Users} value="240+" label="Citations" delay={0.2} color="green" />
          <StatsCard icon={TrendingUp} value="2" label="Conference Presentations" delay={0.3} color="blue" />
        </div>
      </motion.div>
    </div>
  </section>
)

// Research focus areas
const FocusAreasSection = () => (
  <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
    <div className="container px-4 md:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Research Areas
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Core areas of AI research spanning machine learning, optimization, and practical applications
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Brain,
            title: "Machine Learning",
            description:
              "Deep learning architectures, neural networks, and advanced ML algorithms for complex pattern recognition and prediction tasks",
            color: "from-blue-500/10 to-cyan-500/10",
            iconColor: "text-blue-600",
          },
          {
            icon: Zap,
            title: "Computer Vision",
            description:
              "Advanced image processing, object detection, and visual analysis techniques for diverse applications and domains",
            color: "from-green-500/10 to-emerald-500/10",
            iconColor: "text-green-600",
          },
          {
            icon: TrendingUp,
            title: "Optimization",
            description:
              "Stochastic optimization algorithms, efficiency analysis, and performance improvements for large-scale AI systems",
            color: "from-purple-500/10 to-pink-500/10",
            iconColor: "text-purple-600",
          },
        ].map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group"
          >
            <div
              className={`relative h-full rounded-2xl p-8 bg-gradient-to-br ${area.color} backdrop-blur-sm border border-border/50 group-hover:border-primary/30 transition-all duration-300`}
            >
              <area.icon
                className={`h-12 w-12 ${area.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
              />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{area.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const ResearchServiceSection = () => {
  const roles = [
    {
      organization: "IOAI - International Olympiad in AI",
      role: "International Scientific Committee",
      period: "Nov 2025 - Present",
      description:
        "Member of the International Scientific Committee of IOAI, the largest AI competition for school students.",
      contributions: [
        "Lead contributions on problem development, validation, and scientific integrity",
        "Scoring methodology, results verification, and score finalization in coordination with the Jury/ISC",
      ],
    },
    {
      organization: "First Republican AI Olympiad for Kazakhstan Students",
      role: "Scientific & Organizational Leadership",
      period: "Dec 2024 - Oct 2025",
      description:
        "Pioneered the first national AI olympiad for high school students in Kazakhstan, fostering the next generation of AI talent and establishing educational standards for AI competitions.",
      contributions: [
        "Launched Kazakhstan's first national AI olympiad for school students",
        "Shaped educational standards and competition design to grow AI talent",
      ],
    },
  ]

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Research Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Committee roles and scientific stewardship supporting the global AI community
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {roles.map((role, idx) => (
            <motion.div
              key={role.organization}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="h-full"
            >
              <Card className="h-full border border-border/60 bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{role.organization}</CardTitle>
                        <CardDescription className="text-sm">{role.role}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {role.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                  <ul className="space-y-2">
                    {role.contributions.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ConferenceSection = () => {
  const talks = [
    {
      title: "Invited Speaker, NeurIPS 2025 Competition Track & Foundation Models for the Brain and Body Workshop",
      location: "San Diego, CA",
      highlight: "1st place in the NeurIPS EEG Foundation Challenge (combined two-challenge metric)",
      link: {
        label: "Competition Track",
        url: "https://www.codabench.org/competitions/9975/#/results-tab",
      },
    },
    {
      title: "Invited Speaker, Conference on Machine Intelligence in Medical Imaging (C-MIMI 2019)",
      location: "Austin, TX",
      highlight: "Presented SIIM-ACR Pneumothorax Segmentation (1st place, one-person team)",
      link: {
        label: "Challenge",
        url: "https://siim.org/research-journal/siim-machine-learning-challenges/pneumothorax-kaggle-challenge/",
      },
    },
  ]

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Conference Presentations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Invited talks highlighting competition wins and applied clinical AI work
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {talks.map((talk, idx) => (
            <motion.div
              key={talk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="text-xl font-semibold leading-tight">{talk.title}</div>
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4" />
                {talk.location}
              </div>
              <p className="text-sm text-foreground mb-4 leading-relaxed">{talk.highlight}</p>
              {talk.link && (
                <Link
                  href={talk.link.url}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  {talk.link.label}
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ResearchPage() {
  const researchPapers: ResearchPaper[] = [
    {
      title:
        "Effect of a comprehensive deep-learning model on the accuracy of chest x-ray interpretation by radiologists: a retrospective, multireader multicase study",
      journal: "The Lancet Digital Health",
      impactFactor: "98.4",
      date: "August 2021",
      authors:
        "Jarrel CY Seah, Cyril H M Tang, Quinlan D Buchheit, Xavier G Holt, Jeffrey B Wardman, Anuar Aimoldin, et al.",
      url: "https://www.thelancet.com/journals/landig/article/PIIS2589-7500(21)00106-0/fulltext",
      pdfUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lancet_paper-9XroxcVRnj1E99qobrtBdfhxva0YV4.pdf",
      metrics: {
        citations: 155,
        captures: 233,
        mentions: 168,
        socialMedia: 328,
      },
      background:
        "Chest x-rays are widely used in clinical practice; however, interpretation can be hindered by human error and a lack of experienced thoracic radiologists. Deep learning has the potential to improve the accuracy of chest x-ray interpretation.",
      findings:
        "Unassisted radiologists had a macroaveraged AUC of 0.713 across the 127 clinical findings, compared with 0.808 when assisted by the model. The deep-learning model statistically significantly improved the classification accuracy of radiologists for 102 (80%) of 127 clinical findings.",
      interpretation:
        "This study shows the potential of a comprehensive deep-learning model to improve chest x-ray interpretation across a large breadth of clinical practice, with deployment in 250+ Australian radiology clinics improving diagnostic accuracy by 45%.",
    },
    {
      title: "Efficiency Analysis of First-Order Stochastic Optimization Algorithms for Image Registration",
      journal: "Norwegian Journal of Development of the International Science",
      date: "2020",
      authors: "Voronov S., Amir M., Kozlov A., Zinollayev A., Aimoldin A.",
      url: "https://nor-ijournal.com/wp-content/uploads/2023/09/NJD_49_1.pdf",
      pdfUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NJD_49_1-ebbEKK44bK8v3ryQ4nI0WJ4ig5DzFl.pdf",
      abstract:
        "This work presents a comparative experimental analysis of different first-order stochastic optimization algorithms for image registration in spatial domain: stochastic gradient descent, Momentum, Nesterov momentum, Adagrad, RMSprop, Adam. Correlation coefficient is considered as the objective function.",
      conclusion:
        "The comparative analysis shows that Adam and RMSprop optimizations provide the best results, with Adam algorithm being almost always preferable as it has less variance than RMSprop.",
    },
  ]

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-background via-primary/2 to-background">
      <HeroSection />
      <FocusAreasSection />
      <ConferenceSection />

      {/* Publications Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Published Research
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Peer-reviewed publications advancing the field of artificial intelligence and machine learning
            </p>
          </motion.div>

          <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2">
            {researchPapers.map((paper, index) => (
              <ResearchPaperCard key={index} paper={paper} index={index} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <ResearchServiceSection />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl p-12 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm border border-primary/20">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Interested in Collaboration?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I'm always open to research collaborations in machine learning, computer vision, optimization, and AI
                applications across various domains. Let's work together to advance the field.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-6 text-lg rounded-full shadow-2xl"
                >
                  <a href="mailto:aimoldin@gmail.com" className="group">
                    Get in Touch
                    <ExternalLink className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
