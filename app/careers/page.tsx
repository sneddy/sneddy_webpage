"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  ExternalLink,
  Search,
  TrendingUp,
  Award,
  Users,
  Code,
  Brain,
  Zap,
  Target,
  Globe,
  Building,
  Clock,
  Star,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

const careersData = {
  title: "Career Journey",
  subtitle:
    "Kaggle Master #14, published in The Lancet, building AI solutions across healthcare, retail, and mobility industries",
  stats: {
    totalExperience: "10+ Years",
    education: "MSU & Yandex Graduate",
    competitions: "Kaggle Master #14",
    globalReach: "Work Across 5 Countries",
  },
  education: [
    {
      institution: "Yandex School of Data Analysis",
      location: "Moscow, Russia",
      degree: "Data Science & Machine Learning Program",
      period: "2016 - 2018",
      description: "Two-year intensive program with 5.4% admission rate and rigorous math olympiad-style entrance exam",
      coursework: [
        "Mathematical Statistics",
        "Machine Learning I-II",
        "Bayesian ML Methods",
        "Large-scale ML & Deep Learning",
        "Reinforcement Learning",
        "Natural Language Processing",
        "Algorithms & Data Structures",
      ],
      achievements: [
        "5.4% admission rate - highly selective program",
        "Math olympiad-style entrance examination",
        "Comprehensive ML and AI curriculum",
      ],
    },
    {
      institution: "Moscow State University",
      location: "Moscow, Russia",
      degree: "Specialist (MSc) in Applied Mathematics & Computer Science",
      period: "2009 - 2014",
      description: "Top 50 in 2019 QS World University Rankings in Mathematics and Computer Science",
      coursework: [
        "Advanced Mathematics",
        "Computer Science Fundamentals",
        "Statistical Analysis",
        "Optimization Theory",
        "Computational Methods",
      ],
      achievements: [
        "Top 50 QS World University Rankings (Math & CS)",
        "Specialist degree equivalent to MSc",
        "Strong mathematical foundation",
      ],
    },
  ],
  experiences: [
    {
      id: "careem",
      title: "Senior Machine Learning Engineer",
      company: "Careem",
      location: "Dubai, UAE",
      period: "2023 - 2024",
      duration: "2 years",
      companyUrl: "https://www.careem.com",
      type: "Full-time",
      industry: "Super App / Mobility",
      teamSize: "15+ engineers",
      featured: true,
      achievements: [
        "Led $1.5M annual cost savings through marketplace optimization",
        "Reduced delivery times by 2% across 70+ cities",
        "Improved ETA accuracy by 10% through ML innovations",
        "Detected and reduced GPS spoofing by 93%",
      ],
      description: [
        {
          title: "Matching and ETA Systems:",
          icon: <Target className="w-4 h-4" />,
          points: [
            "Launched priority-based dispatching reducing delivery time by 2% and courier time by 2.5%",
            "Designed real-time GPS spoofing detection, reducing affected orders by 93%",
            "Improved ETA accuracy by 10% through stage splitter system",
          ],
        },
        {
          title: "Courier Operating Model Transformation:",
          icon: <TrendingUp className="w-4 h-4" />,
          points: [
            "Built end-to-end planning system for zone definition and shift optimization",
            "Achieved $1.5M annual savings through improved marketplace balance",
          ],
        },
      ],
    },
    {
      id: "checklens",
      title: "Senior AI Engineer",
      company: "Checklens GmbH",
      location: "Salzburg, Austria",
      period: "2021 - 2022",
      duration: "1 year",
      companyUrl: "https://checklens.ai/",
      type: "Full-time",
      industry: "Computer Vision / Retail",
      teamSize: "Small R&D team",
      featured: true,
      achievements: [
        "Improved retail profitability by 0.5% for IKEA and Netto",
        "Deployed AI systems recognizing 15,000+ products",
        "Built automated checkout solutions for major retailers",
      ],
      description: [
        {
          title: "AI Checkout Automation:",
          icon: <Code className="w-4 h-4" />,
          points: [
            "Led Checkscan development for IKEA and Netto, improving profitability by 0.5%",
            "Trained models for real-time product recognition (15,000+ items)",
            "Automated video ingestion and annotation pipeline",
          ],
        },
      ],
    },
    {
      id: "harrison",
      title: "Senior AI Researcher",
      company: "Harrison.ai",
      location: "Sydney, Australia",
      period: "2020 - 2021",
      duration: "1 year",
      companyUrl: "https://harrison.ai/",
      type: "Full-time",
      industry: "Healthcare AI",
      teamSize: "R&D team",
      featured: true,
      achievements: [
        "Published research in The Lancet (Impact Factor: 98.4)",
        "Improved diagnostic accuracy by 45% in 250+ clinics",
        "Reduced radiologist workload by 20%",
      ],
      description: [
        {
          title: "Annalise CXR Solution:",
          icon: <Brain className="w-4 h-4" />,
          points: [
            "Built training pipeline for detecting 120+ chest X-ray pathologies",
            "Improved diagnostic accuracy by 45% in 250+ Australian radiology clinics",
            "Reduced radiologist workload by 20% through automated reporting",
          ],
        },
      ],
    },
    {
      id: "bts",
      title: "Head of Artificial Intelligence",
      company: "BTS Digital",
      location: "Astana, Kazakhstan",
      period: "2018 - 2020",
      duration: "2 years",
      companyUrl: "https://btsdigital.kz/eng",
      type: "Full-time",
      industry: "Digital Innovation",
      teamSize: "AI team (region-leading)",
      featured: true,
      achievements: [
        "Built the leading AI team in Central Asia",
        "Launched Digital ID with 2M+ monthly verifications",
        "Organized Kazakhstan's first AI course",
      ],
      description: [
        {
          title: "Leadership & Innovation:",
          icon: <Users className="w-4 h-4" />,
          points: [
            "Established ML/AI function, launching Digital ID (facial recognition with anti-spoofing and 2M+ verifications/month)",
            "Developed ASR service for electronic government services call center automation (supporting mixed bilingual dialogues)",
            "Created AI-driven news aggregation platform with smart recommendations",
            "Built the leading AI team in the region, defining vision and roadmap for strategic AI projects",
          ],
        },
        {
          title: "Community Building:",
          icon: <Globe className="w-4 h-4" />,
          points: [
            "Drove AI talent development through industry-academia collaboration",
            "Organized Kazakhstan's first AI course and open research seminars",
          ],
        },
      ],
    },
    {
      id: "kazpost",
      title: "Data Scientist",
      company: "Kazpost",
      location: "Astana, Kazakhstan",
      period: "2017 - 2018",
      duration: "1 year",
      companyUrl: "https://post.kz/",
      type: "Full-time",
      industry: "Postal Services",
      teamSize: "5 analysts",
      featured: false,
      achievements: [
        "Boosted annual revenue by 8% (KZT 1.6B, $5M)",
        "Optimized 3,000+ branch operations",
        "Implemented predictive analytics across postal network",
      ],
      description: [
        {
          title: "Integrated Planning System:",
          icon: <TrendingUp className="w-4 h-4" />,
          points: [
            "Implemented sales targets and compensation plans across 3,000+ branches",
            "Boosted annual revenue by 8% (KZT 1.6B, $5M)",
            "Developed time series forecasting models for performance prediction",
            "Created performance-based branch clustering for targeted optimization",
          ],
        },
      ],
    },
    {
      id: "esculabs",
      title: "Computer Vision Engineer",
      company: "Esculabs",
      location: "Astana, Kazakhstan",
      period: "2016 - 2017",
      duration: "1 year",
      companyUrl: "#",
      type: "Full-time",
      industry: "Medical Technology",
      teamSize: "3 engineers",
      featured: false,
      achievements: [
        "Developed medical imaging quality control systems",
        "Supported Chronic Hepatitis C diagnosis and monitoring",
        "Implemented automated fiber scanning verification",
      ],
      description: [
        {
          title: "Medical Imaging Quality Control:",
          icon: <Zap className="w-4 h-4" />,
          points: [
            "Created a computer vision-based quality control system for fiber scanning",
            "Developed verification algorithms for ultrasound and MRI imaging",
            "Supported diagnosis and treatment monitoring of Chronic Hepatitis C",
            "Implemented image processing pipeline for medical data analysis",
          ],
        },
      ],
    },
    {
      id: "yandex",
      title: "Data Science Intern",
      company: "Yandex",
      location: "Moscow, Russia",
      period: "2016",
      duration: "6 months",
      companyUrl: "https://yandex.com/",
      type: "Internship",
      industry: "Search Engine / Tech",
      teamSize: "10+ data scientists",
      featured: false,
      achievements: [
        "Worked on content filtering algorithms",
        "Improved search result quality metrics",
        "Collaborated with senior data scientists on research",
      ],
      description: [
        {
          title: "Safe Search Department:",
          icon: <Award className="w-4 h-4" />,
          points: [
            "Developed algorithms for content filtering and classification",
            "Worked on machine learning models to detect inappropriate content",
            "Participated in the improvement of search result quality metrics",
            "Collaborated with senior data scientists on research projects",
          ],
        },
      ],
    },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const getIndustryIcon = (industry: string) => {
  if (industry.includes("Healthcare")) return <Brain className="w-4 h-4" />
  if (industry.includes("Retail")) return <Building className="w-4 h-4" />
  if (industry.includes("Super App")) return <Globe className="w-4 h-4" />
  if (industry.includes("Tech")) return <Code className="w-4 h-4" />
  return <Building className="w-4 h-4" />
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "Full-time":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "Internship":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)
  const [activeTab, setActiveTab] = useState("experience")

  const industries = useMemo(() => {
    const allIndustries = careersData.experiences.map((exp) => exp.industry)
    return ["all", ...Array.from(new Set(allIndustries))]
  }, [])

  const types = useMemo(() => {
    const allTypes = careersData.experiences.map((exp) => exp.type)
    return ["all", ...Array.from(new Set(allTypes))]
  }, [])

  const filteredExperiences = useMemo(() => {
    return careersData.experiences.filter((exp) => {
      const matchesSearch =
        exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.industry.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesIndustry = selectedIndustry === "all" || exp.industry === selectedIndustry
      const matchesType = selectedType === "all" || exp.type === selectedType
      const matchesFeatured = !showFeaturedOnly || exp.featured

      return matchesSearch && matchesIndustry && matchesType && matchesFeatured
    })
  }, [searchTerm, selectedIndustry, selectedType, showFeaturedOnly])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Hero Section */}
      <motion.div
        className="relative py-16 sm:py-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              {careersData.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              {careersData.subtitle}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {Object.entries(careersData.stats).map(([key, value], index) => (
              <motion.div
                key={key}
                variants={itemVariants}
                className="bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm border border-primary/10 rounded-xl p-4 sm:p-6 hover:bg-card/90 hover:border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="text-xl sm:text-2xl font-bold text-primary mb-2 leading-tight">{value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground capitalize leading-tight">
                  {key === "globalReach" ? "Global Reach" : key.replace(/([A-Z])/g, " $1").trim()}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Resume Download Section */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              <Link
                href="https://swfxusemimczhhhfzjhc.supabase.co/storage/v1/object/public/resume/personal/CV%20Anuar%20Long.pdf"
                target="_blank"
                className="flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="hidden sm:inline">Download Full CV (2 pages)</span>
                <span className="sm:hidden">Full CV (2 pages)</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 hover:bg-primary/5 transition-all duration-300 bg-transparent w-full sm:w-auto"
            >
              <Link
                href="https://swfxusemimczhhhfzjhc.supabase.co/storage/v1/object/public/resume/personal/CV%20Anuar.pdf"
                target="_blank"
                className="flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="hidden sm:inline">Download Compact CV (1 page)</span>
                <span className="sm:hidden">Compact CV (1 page)</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="container max-w-6xl mx-auto px-4 mb-8">
        <div className="flex justify-center">
          <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-1 flex w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-200 flex-1 sm:flex-none text-sm sm:text-base ${
                activeTab === "experience"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="hidden sm:inline">Professional Experience</span>
              <span className="sm:hidden">Experience</span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 flex-1 sm:flex-none text-sm sm:text-base ${
                activeTab === "education"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Education
            </button>
          </div>
        </div>
      </div>

      {/* Education Section */}
      {activeTab === "education" && (
        <div className="container max-w-6xl mx-auto px-4 pb-20">
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            {careersData.education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-l-4 border-l-primary bg-gradient-to-r from-card to-primary/5 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 flex items-center gap-3">
                          <GraduationCap className="w-6 h-6 text-primary" />
                          {edu.institution}
                        </CardTitle>
                        <CardDescription className="text-base mb-3">
                          <div className="flex flex-wrap items-center gap-4">
                            <span className="font-medium text-primary">{edu.degree}</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {edu.location}
                            </span>
                          </div>
                        </CardDescription>
                        <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        {edu.period}
                      </Badge>
                    </div>

                    {/* Key Achievements */}
                    <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        Key Highlights
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.achievements.map((achievement, idx) => (
                          <div key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      <h3 className="font-medium flex items-center gap-2 text-primary">
                        <Code className="w-4 h-4" />
                        Relevant Coursework
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Experience Section */}
      {activeTab === "experience" && (
        <>
          {/* Filters Section */}
          <div className="container max-w-6xl mx-auto px-4 mb-12">
            <motion.div
              className="bg-card/50 backdrop-blur-sm border rounded-2xl p-4 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex flex-col gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search by role, company, or industry..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background/50 h-10"
                  />
                </div>

                {/* Filters Row */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Industry Filter */}
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="px-4 py-2 rounded-lg border bg-background/50 text-sm flex-1 h-10"
                  >
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry === "all" ? "All Industries" : industry}
                      </option>
                    ))}
                  </select>

                  {/* Type Filter */}
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-4 py-2 rounded-lg border bg-background/50 text-sm flex-1 h-10"
                  >
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type === "all" ? "All Types" : type}
                      </option>
                    ))}
                  </select>

                  {/* Featured Toggle */}
                  <Button
                    variant={showFeaturedOnly ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                    className="flex items-center gap-2 h-10 px-4 flex-1 sm:flex-none"
                  >
                    <Star className="w-4 h-4" />
                    <span className="hidden sm:inline">Featured Only</span>
                    <span className="sm:hidden">Featured</span>
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-4 pt-4 border-t">
                <div className="text-sm text-muted-foreground">
                  Showing {filteredExperiences.length} of {careersData.experiences.length} positions
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedIndustry("all")
                    setSelectedType("all")
                    setShowFeaturedOnly(false)
                  }}
                  className="text-sm self-start sm:self-auto"
                >
                  Clear Filters
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Experiences */}
          <div className="container max-w-6xl mx-auto px-4 pb-20">
            <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
              {filteredExperiences.map((exp, index) => (
                <motion.div key={exp.id} variants={itemVariants} className="group">
                  <Card
                    className={`border-l-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                      exp.featured
                        ? "border-l-gradient-to-b from-primary to-purple-600 bg-gradient-to-r from-card to-primary/5"
                        : "border-l-primary/50"
                    }`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {exp.title}
                            </CardTitle>
                            {exp.featured && (
                              <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-purple-600/20">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>

                          <CardDescription className="flex flex-wrap items-center gap-4 text-base">
                            <Link
                              href={exp.companyUrl}
                              target="_blank"
                              className="text-primary hover:underline font-medium flex items-center gap-1"
                            >
                              {exp.company}
                              <ExternalLink className="w-3 h-3" />
                            </Link>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {exp.duration}
                            </span>
                          </CardDescription>
                        </div>

                        <div className="flex flex-col items-start lg:items-end gap-2">
                          <Badge variant="secondary" className="text-sm">
                            {exp.period}
                          </Badge>
                          <div className="flex flex-wrap gap-2">
                            <Badge className={getTypeColor(exp.type)}>{exp.type}</Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              {getIndustryIcon(exp.industry)}
                              <span className="hidden sm:inline">{exp.industry}</span>
                              <span className="sm:hidden">{exp.industry.split(" ")[0]}</span>
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Key Achievements */}
                      {exp.achievements && (
                        <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <Award className="w-4 h-4 text-primary" />
                            Key Achievements
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {exp.achievements.map((achievement, idx) => (
                              <div key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                {achievement}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {exp.description.map((section, idx) => (
                        <div key={idx} className="space-y-3">
                          <h3 className="font-medium flex items-center gap-2 text-primary">
                            {section.icon}
                            {section.title}
                          </h3>
                          <ul className="space-y-2 ml-6">
                            {section.points.map((point, pidx) => (
                              <li key={pidx} className="text-muted-foreground flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0" />
                                <span className="leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Team Size & Additional Info */}
                      <div className="flex flex-wrap gap-4 pt-4 border-t text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          Team: {exp.teamSize}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {exp.industry}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {filteredExperiences.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                <div className="text-muted-foreground mb-4">No positions match your current filters</div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedIndustry("all")
                    setSelectedType("all")
                    setShowFeaturedOnly(false)
                  }}
                >
                  Clear All Filters
                </Button>
              </motion.div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
