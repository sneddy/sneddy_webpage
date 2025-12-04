"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import communityData from "@/locals/en/home/community.json"
import { Users, Calendar, Presentation, TrendingUp, ExternalLink } from "lucide-react"

export function CommunitySection() {
  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "10K+",
      label: "Members",
      description: "Active community participants",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      value: "8",
      label: "Offline Events",
      description: "In-person meetups and conferences",
    },
    {
      icon: <Presentation className="h-6 w-6" />,
      value: "20+",
      label: "Research Seminars",
      description: "Educational workshops and talks",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: "7+",
      label: "Years Active",
      description: "Building Kazakhstan's AI ecosystem",
    },
  ]

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2" />

      <div className="container px-4 md:px-6 relative z-10 max-w-7xl mx-auto">
        <div className="grid gap-16 lg:grid-cols-2 items-center max-w-7xl mx-auto">
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                  🚀 Community Impact
                </span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {communityData.title}
              </motion.h2>

              <motion.p
                className="text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {communityData.description}
              </motion.p>
            </div>

            {/* Enhanced Community Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="group p-6 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-foreground">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link href="https://dsml.kz" target="_blank">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white font-semibold px-8 py-4 text-base shadow-lg"
                  >
                    {communityData.buttonText}
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced Video Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-2">
              <div className="bg-background rounded-2xl overflow-hidden">
                <div className="aspect-video relative group">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/qZ8XGMjok0U?si=a3Q5hLzLqGBakKWt"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>

        {/* Enhanced Additional Community Info */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Building Kazakhstan's{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Ecosystem
              </span>
            </h3>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Since 2017, DSML KZ has been the cornerstone of Kazakhstan's AI and Machine Learning community. Through
              research seminars, offline events, and continuous knowledge sharing, we've created a thriving ecosystem
              that connects professionals, researchers, and enthusiasts across Central Asia.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
