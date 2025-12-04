"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export function FeaturedWorkSection() {
  const featuredWork = [
    {
      title: "Chest X-Ray AI Diagnostic Tool",
      description:
        "Deep learning model for detecting 120+ pathologies in chest X-rays, published in The Lancet and deployed in 250+ Australian clinics.",
      category: "Healthcare AI",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      link: "/research",
      buttonText: "Read Publication",
      metrics: ["120+ pathologies", "250+ clinics", "Lancet published"],
      isExternal: false,
    },
    {
      title: "Kaggle Competition Mastery",
      description: "Ranked #14 globally out of 200K+ users with multiple gold medals in machine learning competitions.",
      category: "Competitions",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      link: "/competitions",
      buttonText: "Learn More",
      metrics: ["#14 global rank", "3 gold medals", "6 silver medals"],
      isExternal: false,
    },
    {
      title: "First Republican AI Olympiad for Kazakhstan Students",
      description:
        "Pioneered the first national AI olympiad for high school students in Kazakhstan, fostering the next generation of AI talent and establishing educational standards for AI competitions.",
      category: "Education",
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      link: "https://www.linkedin.com/posts/anuar-aimoldin_%D0%B2%D1%87%D0%B5%D1%80%D0%B0-%D0%B7%D0%B0%D0%B2%D0%B5%D1%80%D1%88%D0%B8%D0%BB%D0%B0%D1%81%D1%8C-%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F-%D0%B2-%D0%BA%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD%D0%B5-%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F-activity-7325565559209705473-zBNI?utm_source=share&utm_medium=member_desktop&rcm=ACoAABj8WGEBnRza8VnCG_0-GHHOwC2-xcbhiKA",
      buttonText: "Learn More",
      metrics: ["First in Kazakhstan", "High school students", "National scale"],
      isExternal: true,
    },
  ]

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
              Featured Projects
            </Badge>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Work
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Highlighting key projects that demonstrate expertise in AI research, competitions, and education across
            healthcare, technology, and community impact
          </p>
        </motion.div>

        <div className="space-y-12">
          {featuredWork.map((work, index) => (
            <motion.div
              key={work.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Background Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${work.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 scale-105`}
              />

              <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 group-hover:shadow-2xl">
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 items-center">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                          <Badge
                            variant="secondary"
                            className={`bg-gradient-to-r ${work.gradient} text-white border-0 px-4 py-2 text-sm font-semibold`}
                          >
                            {work.category}
                          </Badge>
                        </motion.div>

                        <h3 className="text-2xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                          {work.title}
                        </h3>

                        <p className="text-muted-foreground text-lg leading-relaxed">{work.description}</p>
                      </div>

                      <Link href={work.link} target={work.isExternal ? "_blank" : undefined}>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            size="lg"
                            className="group/btn bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-base font-semibold shadow-lg"
                          >
                            {work.buttonText}
                            {work.isExternal ? (
                              <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                            ) : (
                              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                            )}
                          </Button>
                        </motion.div>
                      </Link>
                    </div>

                    {/* Metrics Section */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Key Metrics
                      </h4>
                      <div className="space-y-3">
                        {work.metrics.map((metric, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl border border-border/30 hover:bg-muted/50 transition-colors duration-300"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${work.gradient}`} />
                            <span className="text-sm font-medium text-foreground">{metric}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
