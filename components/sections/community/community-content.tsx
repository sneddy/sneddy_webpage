"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Newspaper,
  Briefcase,
  Code,
  Youtube,
  Linkedin,
  ExternalLink,
  Users,
  Calendar,
  TrendingUp,
  Presentation,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

// Modern animated counter component
const AnimatedCounter = ({ value, suffix = "", duration = 2 }) => {
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

// Enhanced feature card with modern design
const FeatureCard = ({ icon: Icon, title, description, stats, linkText, linkUrl, delay = 0, accent = "teal" }) => {
  const accentColors = {
    teal: "from-dsml-teal/10 to-dsml-darkteal/10 hover:from-dsml-teal/20 hover:to-dsml-darkteal/20",
    blue: "from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20",
    purple: "from-purple-500/10 to-purple-600/10 hover:from-purple-500/20 hover:to-purple-600/20",
    green: "from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20",
    orange: "from-orange-500/10 to-orange-600/10 hover:from-orange-500/20 hover:to-orange-600/20",
    red: "from-red-500/10 to-red-600/10 hover:from-red-500/20 hover:to-red-600/20",
  }

  const iconColors = {
    teal: "text-dsml-teal",
    blue: "text-blue-600",
    purple: "text-purple-600",
    green: "text-green-600",
    orange: "text-orange-600",
    red: "text-red-600",
  }

  const buttonColors = {
    teal: "bg-dsml-teal hover:bg-dsml-darkteal",
    blue: "bg-blue-600 hover:bg-blue-700",
    purple: "bg-purple-600 hover:bg-purple-700",
    green: "bg-green-600 hover:bg-green-700",
    orange: "bg-orange-600 hover:bg-orange-700",
    red: "bg-red-600 hover:bg-red-700",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group h-full"
    >
      <div
        className={`relative h-full rounded-2xl p-[1px] overflow-hidden bg-gradient-to-br ${accentColors[accent]} transition-all duration-500`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <Card className="relative h-full bg-card/95 backdrop-blur-sm border-0 rounded-2xl overflow-hidden">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between mb-4">
              <motion.div
                className={`p-3 rounded-xl bg-gradient-to-br ${accentColors[accent]} group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <Icon className={`h-6 w-6 ${iconColors[accent]}`} />
              </motion.div>
              {stats && (
                <Badge variant="secondary" className="bg-background/50 backdrop-blur-sm border-0 text-xs font-medium">
                  {stats}
                </Badge>
              )}
            </div>
            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow pt-0">
            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{description}</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className={`w-full ${buttonColors[accent]} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <Link href={linkUrl} target="_blank" rel="noopener noreferrer" className="group/btn">
                  {linkText}
                  <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

// Stats card component
const StatsCard = ({ icon: Icon, value, label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="text-center"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
      <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
        <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
        <div className="text-3xl font-bold text-primary mb-1">
          <AnimatedCounter value={value} />
        </div>
        <div className="text-sm text-muted-foreground font-medium">{label}</div>
      </div>
    </div>
  </motion.div>
)

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
          <Users className="h-5 w-5 text-primary" />
          <span className="text-primary font-semibold">Community Founder</span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
          DSML Kazakhstan
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12"
        >
          Kazakhstan's largest AI community, fostering knowledge sharing and professional growth in AI/ML since October
          2017
        </motion.p>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <StatsCard icon={Users} value="10,000+" label="Members" delay={0.1} />
          <StatsCard icon={Calendar} value="8" label="Offline Events" delay={0.2} />
          <StatsCard icon={TrendingUp} value="7+" label="Years" delay={0.3} />
          <StatsCard icon={Presentation} value="20+" label="Research Seminars" delay={0.4} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 px-8 py-6 text-lg rounded-full"
          >
            <Link href="https://dsml.kz" target="_blank" rel="noopener noreferrer" className="group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dsml_logo-iqk3NANdn7EIg34HpqcWwVMqbTiR0B.png"
                alt="DSML KZ Logo"
                width={28}
                height={28}
                className="mr-3"
              />
              Visit Community Portal
              <ExternalLink className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

// Video section component (now comes before Story section)
const VideoSection = () => (
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
          What is DSML.KZ?
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Watch as I explain the vision, mission, and impact of Kazakhstan's largest AI and Machine Learning community
        </p>
      </motion.div>

      {/* Video container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative max-w-4xl mx-auto"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary p-[2px] rounded-2xl">
            <div className="bg-background rounded-2xl h-full w-full" />
          </div>

          {/* Video container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/qZ8XGMjok0U?si=h1C6I2tkpdkI9o1L"
              title="What is DSML.KZ - Anuar Aimoldin explains the community vision"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-2xl"
            />
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full opacity-60 animate-pulse" />
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full opacity-40 animate-pulse delay-1000" />
      </motion.div>

      {/* Additional context */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Building Kazakhstan's AI Ecosystem</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Since 2017, DSML KZ has been the cornerstone of Kazakhstan's AI and Machine Learning community. Through
            research seminars, offline events, and continuous knowledge sharing, we've created a thriving ecosystem that
            connects professionals, researchers, and enthusiasts across Central Asia.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
)

// Story section component (now comes after Video section)
const StorySection = () => (
  <section className="py-20 relative">
    <div className="container px-4 md:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            The Story
          </h2>
          <p className="text-xl text-muted-foreground">
            How DSML KZ grew from an idea to Central Asia's leading AI community
          </p>
        </div>

        {/* Timeline cards */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
            <div className="pl-8">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm p-8 rounded-2xl border border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary text-white rounded-full px-4 py-2 text-sm font-bold">2017</div>
                  <h3 className="text-2xl font-bold">The Beginning</h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I started DSML KZ in <span className="font-semibold text-foreground">October 2017</span>, when data
                  science was almost unknown in our region. There were no communities, no career opportunities, no
                  events, and no general understanding from businesses of how it could be applicable in the real world.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-secondary to-primary rounded-full"></div>
            <div className="pr-8 text-right">
              <div className="bg-gradient-to-l from-secondary/10 to-primary/10 backdrop-blur-sm p-8 rounded-2xl border border-secondary/10">
                <div className="flex items-center justify-end gap-3 mb-4">
                  <h3 className="text-2xl font-bold">The Mission</h3>
                  <div className="bg-secondary text-white rounded-full px-4 py-2 text-sm font-bold">Goal</div>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  My goal was to create a space for sharing ideas, collectively working through online courses,
                  supporting each other, and providing career insights—so others wouldn't face the same challenges I
                  did. At that time, I already had 2 years of unique experience in applying machine learning in the
                  industry.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
            <div className="pl-8">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm p-8 rounded-2xl border border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-full px-4 py-2 text-sm font-bold">
                    Today
                  </div>
                  <h3 className="text-2xl font-bold">The Impact</h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Over time, DSML KZ grew from a small Telegram channel into a{" "}
                  <span className="font-semibold text-foreground">thriving network of thousands</span> of learners and
                  professionals. We are now the central hub for Data Science and Machine Learning enthusiasts in
                  Kazakhstan, connecting professionals, sharing knowledge, and building the future of AI in Central
                  Asia.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
)

// Channels section component
const ChannelsSection = () => (
  <section className="py-20">
    <div className="container px-4 md:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Join Our Ecosystem
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Connect with thousands of AI enthusiasts across our specialized channels and platforms
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={MessageCircle}
          title="Discussion Hub"
          description="Join our active Telegram community with specialized topics and AI-generated business cards for members."
          stats="1,500+ active members"
          linkText="Register to Join"
          linkUrl="https://dsml.kz"
          delay={0.1}
          accent="teal"
        />

        <FeatureCard
          icon={Newspaper}
          title="News Feed"
          description="Stay updated with curated content on Data Science, AI research, and industry developments."
          stats="3,363 subscribers"
          linkText="Subscribe"
          linkUrl="https://t.me/main_ds_kz"
          delay={0.2}
          accent="blue"
        />

        <FeatureCard
          icon={Briefcase}
          title="DS Jobs"
          description="Discover ML and Data Science opportunities with AI-enhanced job descriptions and visuals."
          stats="7,450 subscribers"
          linkText="View Opportunities"
          linkUrl="https://t.me/ml_jobs_kz"
          delay={0.3}
          accent="purple"
        />

        <FeatureCard
          icon={Code}
          title="IT Jobs"
          description="Find software and IT positions with structured descriptions generated by our custom AI."
          stats="5,000+ subscribers"
          linkText="Browse Jobs"
          linkUrl="https://t.me/it_jobs_kz"
          delay={0.4}
          accent="green"
        />

        <FeatureCard
          icon={Youtube}
          title="YouTube Channel"
          description="Watch tutorials, talks, and interviews about Data Science in Russian and Kazakh languages."
          stats="Educational content"
          linkText="Subscribe"
          linkUrl="https://www.youtube.com/c/DataScienceKazakhstan"
          delay={0.5}
          accent="red"
        />

        <FeatureCard
          icon={Linkedin}
          title="LinkedIn Page"
          description="Connect with industry professionals and follow the latest updates from our community."
          stats="1,200 followers"
          linkText="Follow Us"
          linkUrl="https://linkedin.com/company/dsmlkz"
          delay={0.6}
          accent="orange"
        />
      </div>
    </div>
  </section>
)

export function CommunityContent() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-background via-primary/2 to-background">
      <HeroSection />
      <VideoSection />
      <StorySection />
      <ChannelsSection />
    </div>
  )
}
