"use client"

import { useState, useMemo } from "react"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ExternalLink,
  Github,
  Youtube,
  FileText,
  Search,
  Filter,
  Trophy,
  Medal,
  Award,
  Users,
  Target,
  TrendingUp,
  Zap,
  Star,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useRef } from "react"

type MedalType = "gold" | "silver" | "bronze" | "honorable"
type ColorKey = "primary" | "gold" | "silver" | "bronze"
type SizeKey = "sm" | "md" | "lg" | "xl"
type IconName = "ExternalLink" | "Youtube" | "GitHub" | "FileText"

interface CompetitionLink {
  text: string
  url: string
  icon: IconName
}

interface BaseCompetition {
  id: string
  title: string
  year: string
  medal: MedalType
  description: string
  place?: string
  totalTeams?: string
  highlight?: string
  links?: CompetitionLink[]
  additionalInfo?: string
  specialAchievement?: string
  result?: string
  type?: "ml" | "math" | "achievement"
}

interface MLCompetition extends BaseCompetition {
  type?: "ml"
}

interface MathOlympiad extends BaseCompetition {
  result: string
  medal: "bronze" | "honorable"
  medalEmoji?: string
  type?: "math"
}

interface AchievementCompetition extends BaseCompetition {
  highlight: string
  type: "achievement"
}

type CompetitionEntry =
  | (MLCompetition & { type: "ml" })
  | (MathOlympiad & { type: "math" })
  | AchievementCompetition

// Define the competition data directly with updated competitions
const mlCompetitionsData: { competitions: MLCompetition[] } = {
  competitions: [
    // Gold medals first
    {
      id: "neurips-eeg-foundation-2025",
      title: "NeurIPS EEG Foundation Challenge",
      year: "2025",
      place: "1",
      totalTeams: "1,186",
      medal: "gold",
      description:
        "NeurIPS 2025 Competition Track challenge focused on EEG foundation models; achieved the top combined metric across two sub-challenges.",
      specialAchievement: "Invited Speaker, NeurIPS 2025 Competition Track",
      links: [
        {
          text: "Competition Track",
          url: "https://www.codabench.org/competitions/9975/#/results-tab",
          icon: "ExternalLink",
        },
        {
          text: "GitHub Solution",
          url: "https://github.com/sneddy/neurosned",
          icon: "GitHub",
        },
      ],
    },
    {
      id: "siim-acr-pneumothorax",
      title: "SIIM-ACR Pneumothorax Segmentation",
      year: "2019",
      place: "1",
      totalTeams: "1,475",
      medal: "gold",
      description:
        "The SIIM-ACR Pneumothorax Segmentation competition, hosted on Kaggle by the Society for Imaging Informatics in Medicine (SIIM) and the American College of Radiology (ACR), challenged participants to develop AI models capable of detecting and segmenting pneumothorax (collapsed lung) in chest X-ray images. Accurate identification of pneumothorax is critical for timely medical intervention, and this competition aimed to enhance diagnostic tools to assist radiologists and improve patient outcomes.",
      additionalInfo:
        "As a result of winning this competition, I was invited to speak at the 2019 C-MIMI conference in Austin, Texas, where I presented our solution to the medical imaging community.",
      specialAchievement: "Invited Speaker at C-MIMI 2019",
      links: [
        {
          text: "View Leaderboard",
          url: "https://siim.org/research-journal/siim-machine-learning-challenges/pneumothorax-kaggle-challenge/",
          icon: "ExternalLink",
        },
        {
          text: "First Place Solution",
          url: "https://youtu.be/Wuf0wE3Mrxg?si=8Oh6mqIMf2t5xV3t",
          icon: "Youtube",
        },
        {
          text: "GitHub Codebase",
          url: "https://github.com/sneddy/pneumothorax-segmentation",
          icon: "GitHub",
        },
      ],
    },
    {
      id: "avito-demand-prediction",
      title: "Avito Demand Prediction Challenge",
      year: "2018",
      place: "12",
      totalTeams: "1,917",
      medal: "gold",
      description:
        "The Avito Demand Prediction Challenge, hosted on Kaggle, tasked participants with predicting the demand for online classified ads on Avito, Russia's largest classifieds website. Competitors utilized various data modalities—including textual descriptions, images, and contextual information—to forecast the likelihood of an ad leading to a successful transaction. Accurate demand prediction is crucial for optimizing user experience and platform efficiency, helping sellers set appropriate expectations and pricing. This competition aimed to enhance Avito's ability to match supply and demand effectively, thereby improving overall user satisfaction.",
      links: [
        {
          text: "View Leaderboard",
          url: "https://www.kaggle.com/competitions/avito-demand-prediction/leaderboard",
          icon: "ExternalLink",
        },
      ],
    },
    {
      id: "home-credit-default",
      title: "Home Credit Default Risk",
      year: "2018",
      place: "18",
      totalTeams: "7,198",
      medal: "gold",
      description:
        "The Home Credit Default Risk competition, hosted on Kaggle, invited participants to develop machine learning models to predict the repayment capabilities of clients using alternative data sources, such as telecommunications and transactional information. The goal was to enhance financial inclusion by enabling Home Credit to offer safe borrowing experiences to individuals with limited or no credit histories. Accurate predictions would ensure that clients capable of repayment are approved for loans with appropriate terms, while minimizing the risk of default.",
      links: [
        {
          text: "View Leaderboard",
          url: "https://www.kaggle.com/competitions/home-credit-default-risk/leaderboard",
          icon: "ExternalLink",
        },
      ],
    },
    // Silver medals after gold
    {
      id: "quickdraw-doodle-recognition",
      title: "Quick, Draw! Doodle Recognition Challenge",
      year: "2018",
      place: "49",
      totalTeams: "1,309",
      medal: "silver",
      description:
        "Google Research featured prediction competition focused on building a better classifier for the Quick, Draw! dataset. The task was to improve pattern recognition solutions for handwriting recognition with robust applications in OCR (Optical Character Recognition), ASR (Automatic Speech Recognition) & NLP (Natural Language Processing). By advancing models on this dataset, participants could improve pattern recognition solutions more broadly.",
      additionalInfo:
        "This competition had immediate impact on handwriting recognition and its robust applications in areas including OCR, ASR, and NLP, representing a significant contribution to Google's research initiatives.",
      links: [
        {
          text: "View Leaderboard",
          url: "https://www.kaggle.com/competitions/quickdraw-doodle-recognition/leaderboard",
          icon: "ExternalLink",
        },
      ],
    },
    {
      id: "microsoft-malware-prediction",
      title: "Microsoft Malware Prediction",
      year: "2019",
      place: "55",
      totalTeams: "2,410",
      medal: "silver",
      description:
        "Microsoft challenged the data science community to develop techniques to predict if a machine will soon be hit with malware. With more than one billion enterprise and consumer customers, Microsoft takes this problem very seriously and is deeply invested in improving security. As one part of their overall strategy, Microsoft provided Kagglers with an unprecedented malware dataset to encourage open-source progress on effective techniques for predicting malware occurrences.",
      additionalInfo:
        "The goal was to help protect more than one billion machines from damage BEFORE it happens, representing a critical cybersecurity challenge with massive real-world impact.",
      links: [
        {
          text: "View Leaderboard",
          url: "https://www.kaggle.com/competitions/microsoft-malware-prediction/leaderboard",
          icon: "ExternalLink",
        },
      ],
    },
    {
      id: "talkingdata-adtracking-fraud",
      title: "TalkingData AdTracking Fraud Detection Challenge",
      year: "2018",
      place: "81",
      totalTeams: "3,943",
      medal: "silver",
      description:
        "TalkingData, China's largest independent big data service platform, covers over 70% of active mobile devices nationwide. They handle 3 billion clicks per day, of which 90% are potentially fraudulent. Participants were challenged to build an algorithm that predicts whether a user will download an app after clicking a mobile app ad. The competition provided a generous dataset covering approximately 200 million clicks over 4 days.",
      additionalInfo:
        "With over 1 billion smart mobile devices in active use every month, China is the largest mobile market in the world and therefore suffers from huge volumes of fraudulent traffic, making this a critical business problem.",
      links: [
        {
          text: "View Leaderboard",
          url: "https://www.kaggle.com/competitions/talkingdata-adtracking-fraud-detection/leaderboard",
          icon: "ExternalLink",
        },
      ],
    },
    {
      id: "freesound-audio-tagging",
      title: "Freesound Audio Tagging 2019",
      year: "2019",
      place: "21",
      totalTeams: "880",
      medal: "silver",
      description:
        "The Freesound Audio Tagging 2019 competition, hosted on Kaggle by Freesound and Google's Machine Perception team, challenged participants to develop multi-label audio tagging systems capable of recognizing 80 diverse sound categories from real-world environments. Participants utilized both curated and noisy datasets, applying machine learning techniques to automatically tag audio clips. The primary evaluation metric was label-weighted label-ranking average precision (lwlrap), measuring the precision of ranked label lists for each test clip.",
      links: [
        {
          text: "View Leaderboard",
          url: "https://www.kaggle.com/competitions/freesound-audio-tagging-2019/leaderboard",
          icon: "ExternalLink",
        },
        {
          text: "Solution Discussion",
          url: "https://www.kaggle.com/competitions/freesound-audio-tagging-2019/discussion/95347",
          icon: "FileText",
        },
      ],
    },
    {
      id: "imaterialist-fashion-2019",
      title: "iMaterialist (Fashion) 2019 at FGVC6",
      year: "2019",
      place: "24",
      totalTeams: "241",
      medal: "silver",
      description:
        "The iMaterialist (Fashion) 2019 competition, part of the Fine-Grained Visual Categorization Workshop (FGVC6) at CVPR, challenged participants to develop algorithms for accurate segmentation and attribute labeling of fashion images. Visual analysis of clothing has received increasing attention in recent years, with applications that could enhance shopping experiences for consumers and increase work efficiency for fashion professionals. This competition introduced a novel fine-grained segmentation task that unified both categorization and segmentation of rich and complete apparel attributes.",
      additionalInfo:
        "This competition represented an important step toward real-world applications in fashion AI, requiring models to not only identify clothing items but also understand their detailed attributes and precise pixel-level segmentation.",
      links: [
        {
          text: "View Leaderboard",
          url: "https://www.kaggle.com/competitions/imaterialist-fashion-2019-FGVC6/leaderboard",
          icon: "ExternalLink",
        },
      ],
    },
    {
      id: "rsna-intracranial-hemorrhage",
      title: "RSNA Intracranial Hemorrhage Detection",
      year: "2019",
      place: "33",
      totalTeams: "1,345",
      medal: "silver",
      description:
        "Intracranial hemorrhage, bleeding that occurs inside the cranium, is a serious health problem requiring rapid and often intensive medical treatment. For example, intracranial hemorrhages account for approximately 10% of strokes in the U.S., where stroke is the fifth-leading cause of death. Identifying the location and type of any hemorrhage present is a critical step in treating the patient. In this competition, hosted by the Radiological Society of North America (RSNA), participants were challenged to build an algorithm to detect acute intracranial hemorrhage and its subtypes from head CT scans, aiming to help reduce the time to diagnosis.",
      additionalInfo:
        "The competition required detecting multiple subtypes of hemorrhages, including epidural, intraparenchymal, intraventricular, subarachnoid, subdural, and any hemorrhage, making it a complex multi-label classification problem.",
      links: [
        {
          text: "View Leaderboard",
          url: "https://www.kaggle.com/competitions/rsna-intracranial-hemorrhage-detection/leaderboard",
          icon: "ExternalLink",
        },
      ],
    },
  ],
}

const mathOlympiadsData: { olympiads: MathOlympiad[] } = {
  olympiads: [
    {
      id: "apmo-2009",
      title: "XXI Asian Pacific Math Olympiad",
      year: "2009",
      result: "Bronze Medal",
      description:
        "The Asia Pacific Mathematical Olympiad (APMO) is an annual high-level competition that challenges high-school students across the Asia–Pacific region to solve advanced problems in algebra, geometry, number theory, and combinatorics. Regularly participating countries include Australia, Canada, China, Hong Kong, Indonesia, Japan, Korea, Malaysia, Mexico, New Zealand, the Philippines, Russia, Singapore, Taiwan, Thailand, the United States, and Vietnam. Over the years, top-performing teams have often hailed from China, Japan, Korea, Russia, and the United States.",
      links: [
        {
          text: "View Leaderboard",
          url: "https://www.apmo-official.org/static/results/apmo2009_res.pdf",
          icon: "ExternalLink",
        },
        {
          text: "View Problems",
          url: "https://www.apmo-official.org/static/problems/apmo2009_prb.pdf",
          icon: "ExternalLink",
        },
      ],
      medal: "bronze",
      medalEmoji: "🥉",
    },
    {
      id: "silk-road-2009",
      title: "VIII Silk Road Math Olympiad",
      year: "2009",
      result: "Diploma of Honorable Mention",
      description:
        "A regional Olympiad-style contest for high-school students from countries along the historic Silk Road, including Kazakhstan, Uzbekistan, Kyrgyzstan, Turkmenistan, Turkey, Azerbaijan, and China. The competition featured challenging problems in algebra, geometry, number theory, and combinatorics, promoting mathematical excellence and fostering collaboration among participating countries.",
      links: [
        {
          text: "View Scoreboard",
          url: "https://scoreboard.bc-pf.org/en/results/math/silk-road-mathematical-competition/2009",
          icon: "ExternalLink",
        },
        {
          text: "View Problems",
          url: "https://artofproblemsolving.com/community/c714830_2009_silk_road",
          icon: "ExternalLink",
        },
      ],
      medal: "honorable",
      medalEmoji: "🏆",
    },
  ],
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
  color?: ColorKey
}) => {
  const colorClasses: Record<ColorKey, string> = {
    primary: "text-primary bg-primary/10 border-primary/20",
    gold: "text-yellow-600 bg-yellow-600/10 border-yellow-600/20",
    silver: "text-gray-600 bg-gray-600/10 border-gray-600/20",
    bronze: "text-orange-600 bg-orange-600/10 border-orange-600/20",
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group"
    >
      <div
        className={`relative rounded-2xl p-6 border backdrop-blur-sm ${colorClasses[color]} group-hover:shadow-lg transition-all duration-300`}
      >
        <Icon className={`h-8 w-8 mx-auto mb-3 ${colorClasses[color].split(" ")[0]}`} />
        <div className={`text-3xl font-bold mb-1 text-center ${colorClasses[color].split(" ")[0]}`}>
          <AnimatedCounter value={value} />
        </div>
        <div className="text-sm text-muted-foreground font-medium text-center">{label}</div>
      </div>
    </motion.div>
  )
}

// Medal component
const MedalIcon = ({ type, size = "md" }: { type: MedalType; size?: SizeKey }) => {
  const sizeClasses: Record<SizeKey, string> = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  }

  const colors: Record<MedalType, string> = {
    gold: "text-yellow-500",
    silver: "text-gray-400",
    bronze: "text-orange-600",
    honorable: "text-purple-600",
  }

  return (
    <div className={`${sizeClasses[size]} ${colors[type]} flex items-center justify-center`}>
      {type === "gold" && <Trophy className="w-full h-full" />}
      {type === "silver" && <Medal className="w-full h-full" />}
      {type === "bronze" && <Award className="w-full h-full" />}
      {type === "honorable" && <Star className="w-full h-full" />}
    </div>
  )
}

// Enhanced competition card
const CompetitionCard = ({ competition, index }: { competition: CompetitionEntry; index: number }) => {
  const compType: CompetitionEntry["type"] = competition.type ?? "ml"

  const getMedalType = (): MedalType => {
    if (compType === "ml" || compType === "achievement") {
      return competition.medal
    }

    return competition.medal || "honorable"
  }

  const getIconComponent = (iconName: IconName) => {
    switch (iconName) {
      case "ExternalLink":
        return <ExternalLink className="w-4 h-4" />
      case "Youtube":
        return <Youtube className="w-4 h-4" />
      case "GitHub":
        return <Github className="w-4 h-4" />
      case "FileText":
        return <FileText className="w-4 h-4" />
      default:
        return <ExternalLink className="w-4 h-4" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group h-full"
    >
      <div className="relative h-full rounded-2xl p-[2px] overflow-hidden bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <Card className="relative h-full bg-card/95 backdrop-blur-sm border-0 rounded-2xl overflow-hidden">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                  <MedalIcon type={getMedalType()} size="lg" />
                </motion.div>
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {compType === "ml" ? "ML Competition" : compType === "math" ? "Math Olympiad" : "Achievement"}
                  </Badge>
                  <div className="text-sm text-muted-foreground">{competition.year}</div>
                </div>
              </div>
              {competition.specialAchievement && (
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <Zap className="w-3 h-3 mr-1" />
                  Special
                </Badge>
              )}
            </div>

            <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
              {competition.title}
            </CardTitle>

            <div className="text-sm text-muted-foreground space-y-2">
              {compType === "ml" || compType === "achievement" ? (
                <>
                  {competition.place ? (
                    <>
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4" />
                        <span>
                          {competition.place === "1"
                            ? "1st Place"
                            : `${competition.place}${
                                competition.place.endsWith("1")
                                  ? "st"
                                  : competition.place.endsWith("2")
                                    ? "nd"
                                    : competition.place.endsWith("3")
                                      ? "rd"
                                      : "th"
                              } Place`}
                        </span>
                      </div>
                      {competition.totalTeams && (
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>Out of {competition.totalTeams} teams</span>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>Community Recognition Award</span>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>{competition.result}</span>
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent className="flex flex-col flex-grow">
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{competition.description}</p>

            {competition.additionalInfo && (
              <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-sm text-primary font-medium">{competition.additionalInfo}</p>
              </div>
            )}

            {competition.specialAchievement && (
              <div className="mb-4 p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                <p className="text-sm text-purple-700 dark:text-purple-300 font-medium">
                  🎤 {competition.specialAchievement}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-auto">
              {(competition.links || []).map((link, linkIndex) => (
                <motion.div key={linkIndex} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-primary/30 hover:bg-primary/10"
                  >
                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                      {getIconComponent(link.icon)}
                      <span className="ml-2">{link.text}</span>
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

// Hero section
const HeroSection = () => {
  const totalCompetitions = mlCompetitionsData.competitions.length + mathOlympiadsData.olympiads.length + 1 // +1 for ODS
  const kaggleGoldMedals = 3 // SIIM-ACR, Avito, Home Credit
  const kaggleSilverMedals = 6 // Updated to 6 as requested
  const mathMedals = 2 // APMO Bronze + Silk Road Honorable Mention

  return (
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
            <Trophy className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">Competitive Achievements</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
            Competitions
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12"
          >
            From mathematics olympiads to machine learning competitions, showcasing problem-solving excellence and
            competitive achievements
          </motion.p>

          {/* Achievement stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <StatsCard icon={Trophy} value={kaggleGoldMedals} label="Kaggle Gold" delay={0.1} color="gold" />
            <StatsCard icon={Medal} value={kaggleSilverMedals} label="Kaggle Silver" delay={0.2} color="silver" />
            <StatsCard icon={Award} value={mathMedals} label="International Math Medals" delay={0.3} color="bronze" />
            <StatsCard icon={TrendingUp} value="14" label="Kaggle Rank" delay={0.4} color="primary" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Featured achievements section
const FeaturedSection = () => {
  const featuredCompetitions: CompetitionEntry[] = [
    {
      ...mlCompetitionsData.competitions[0], // NeurIPS EEG Foundation Challenge
      type: "ml",
      highlight: "🏆 1st place (combined metric)",
    },
    {
      ...mlCompetitionsData.competitions[1], // SIIM-ACR Pneumothorax
      type: "ml",
      highlight: "🥇 Winner out of 1,475 teams",
    },
    {
      id: "kaggle-competitions-master",
      title: "Kaggle Competitions Master",
      description:
        "Achieved #14 global ranking on Kaggle, the world's largest platform for machine learning competitions and data science challenges. Kaggle hosts competitions where data scientists and ML engineers compete to solve real-world problems for companies like Google, Microsoft, and NASA. With over 200,000+ active competitors worldwide, reaching the top 14 represents exceptional performance across diverse ML domains including computer vision, NLP, and tabular data analysis.",
      year: "2019",
      medal: "gold",
      type: "achievement",
      highlight: "🌟 Top 14 globally out of 200,000+",
    },
  ]

  return (
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
            Featured Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Highlighting the most significant competitive accomplishments across different domains
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCompetitions.map((competition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="relative h-full rounded-2xl p-[3px] overflow-hidden bg-gradient-to-r from-yellow-400 via-primary to-secondary">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Card className="relative h-full bg-card/95 backdrop-blur-sm border-0 rounded-2xl overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <MedalIcon type={competition.type === "math" ? "bronze" : "gold"} size="xl" />
                        </motion.div>
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">Featured</Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{competition.year}</div>
                      </div>
                    </div>

                    <CardTitle className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                      {competition.title}
                    </CardTitle>

                    <div className="text-lg font-semibold text-secondary">{competition.highlight}</div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-6">{competition.description}</p>

                    {competition.links && (
                      <div className="flex flex-wrap gap-3">
                        {competition.links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            asChild
                            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                          >
                            <Link href={link.url} target="_blank" rel="noopener noreferrer">
                              {link.icon === "ExternalLink" && <ExternalLink className="w-4 h-4 mr-2" />}
                              {link.icon === "Youtube" && <Youtube className="w-4 h-4 mr-2" />}
                              {link.icon === "GitHub" && <Github className="w-4 h-4 mr-2" />}
                              {link.text}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function CompetitionsPage() {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [activeFilter, setActiveFilter] = useState<"all" | "ml" | "math">("all")
  const [sortBy, setSortBy] = useState<"year">("year")

  // Combine and filter competitions with proper ordering
  const allCompetitions = useMemo<CompetitionEntry[]>(() => {
    const mlCompetitions = mlCompetitionsData.competitions.map((c) => ({ ...c, type: "ml" as const }))

    // Add ML Competitions Award (ODS Community recognition) as gold medal
    const odsRecognition: CompetitionEntry = {
      id: "ods-recognition",
      title: "ML Competitions Award",
      description:
        "Awarded the ML Competition Progress Award at the annual Open Data Science conference in Moscow, recognizing consistent achievements and contributions to the machine learning competition community.",
      year: "2019",
      medal: "gold",
      type: "ml",
      specialAchievement: "ODS Community Recognition",
      links: [],
    }

    // Add math olympiads - XXI Asian Pacific Math Olympiad should come right after gold medals
    const mathCompetitions = mathOlympiadsData.olympiads.map((o) => ({ ...o, type: "math" as const }))

    let combined = []

    if (activeFilter === "ml") {
      // When filtering by ML, sort by medal then by place
      const goldMLCompetitions = [...mlCompetitions.filter((c) => c.medal === "gold"), odsRecognition]
      const silverMLCompetitions = mlCompetitions.filter((c) => c.medal === "silver")

      // Sort gold medals by place (excluding ODS which doesn't have a meaningful place)
      goldMLCompetitions.sort((a, b) => {
        if (a.id === "ods-recognition") return 1 // ODS goes last among golds
        if (b.id === "ods-recognition") return -1
        return Number.parseInt(a.place ?? "0") - Number.parseInt(b.place ?? "0")
      })

      // Sort silver medals by place
      silverMLCompetitions.sort((a, b) => Number.parseInt(a.place ?? "0") - Number.parseInt(b.place ?? "0"))

      combined = [...goldMLCompetitions, ...silverMLCompetitions]
    } else if (activeFilter === "math") {
      combined = mathCompetitions
    } else {
      // Create ordered array: Gold ML competitions + ODS recognition, then XXI Asian Pacific Math Olympiad, then silver ML competitions, then other math competitions
      const goldMLCompetitions = mlCompetitions.filter((c) => c.medal === "gold")
      goldMLCompetitions.sort((a, b) => Number.parseInt(a.place ?? "0") - Number.parseInt(b.place ?? "0"))

      const silverMLCompetitions = mlCompetitions.filter((c) => c.medal === "silver")
      silverMLCompetitions.sort((a, b) => Number.parseInt(a.place ?? "0") - Number.parseInt(b.place ?? "0"))

      const asianPacificOlympiad = mathCompetitions.find((c) => c.id === "apmo-2009")
      const otherMathCompetitions = mathCompetitions.filter((c) => c.id !== "apmo-2009")

      combined = [
        ...goldMLCompetitions,
        odsRecognition,
        ...(asianPacificOlympiad ? [asianPacificOlympiad] : []),
        ...silverMLCompetitions,
        ...otherMathCompetitions,
      ]
    }

    // Filter by search
    if (searchQuery) {
      combined = combined.filter(
        (c) =>
          c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (c.description && c.description.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Only sort by year if no specific ordering is needed and not filtering by type
    if (sortBy === "year" && activeFilter === "all" && !searchQuery) {
      // Keep the custom ordering when showing all competitions
      return combined
    } else if (sortBy === "year" && searchQuery) {
      combined.sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year))
    }

    return combined
  }, [searchQuery, activeFilter, sortBy])

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-background via-primary/2 to-background">
      <HeroSection />
      <FeaturedSection />

      {/* All Competitions Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              All Competitions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Complete history of competitive achievements across different domains
            </p>

            {/* Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-2xl mx-auto">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search competitions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card/50 backdrop-blur-sm border-primary/20 focus:border-primary/40"
                />
              </div>
              <div className="flex gap-2">
                {(["all", "ml", "math"] as const).map((filter) => (
                  <Button
                    key={filter}
                    variant={activeFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(filter)}
                    className="capitalize"
                  >
                    <Filter className="w-3 h-3 mr-1" />
                    {filter === "ml" ? "ML" : filter === "math" ? "Math" : "All"}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Competition Grid */}
          <AnimatePresence mode="wait">
            {allCompetitions.length > 0 ? (
              <motion.div
                key="competitions-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {allCompetitions.map((competition, index) => (
                  <CompetitionCard
                    key={`${competition.type}-${competition.id}`}
                    competition={competition}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No competitions found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search terms or filters</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveFilter("all")
                  }}
                >
                  Clear filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

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
                Ready for a Challenge?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Interested in collaborating on competitions or discussing problem-solving strategies? Let's connect and
                tackle challenging problems together.
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
