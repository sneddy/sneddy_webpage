"use client"
import { motion, useInView, useMotionValue, animate } from "framer-motion"
import type React from "react"
import { useRef, useEffect, useState, useMemo } from "react"
import { Award, Users, BookOpen, TrendingUp, Target, Calendar } from "lucide-react"

interface StatItemProps {
  icon: React.ReactNode
  value: string
  label: string
  description: string
  delay: number
}

function StatItem({ icon, value, label, description, delay }: StatItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(value)
  const [mounted, setMounted] = useState(false)
  const counter = useMotionValue(0)

  const { targetNumber, suffix } = useMemo(() => {
    const numMatch = value.match(/[\d.]+/)
    const numeric = numMatch ? Number.parseFloat(numMatch[0]) : null
    const suffixText = numMatch ? value.slice(numMatch[0].length) : ""
    return { targetNumber: numeric, suffix: suffixText }
  }, [value])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !isInView || targetNumber === null) return

    const controls = animate(counter, targetNumber, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => {
        const formatted = Number.isInteger(targetNumber)
          ? Math.floor(latest).toString()
          : latest.toFixed(1)
        setDisplayValue(`${formatted}${suffix}`)
      },
    })

    return () => controls.stop()
  }, [counter, isInView, mounted, suffix, targetNumber])

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="relative p-8 bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-500 group-hover:shadow-xl">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white shadow-lg">
            {icon}
          </div>

          <div className="text-4xl font-bold text-foreground">{mounted ? displayValue : value}</div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">{label}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function StatsSection() {
  const stats = [
    {
      icon: <Award className="h-8 w-8" />,
      value: "#14",
      label: "Kaggle Global Ranking",
      description: "Out of 200K+ competitive data scientists worldwide",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      value: "98.4",
      label: "Lancet Impact Factor",
      description: "Published in top-tier medical journal",
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "10K+",
      label: "Community Members",
      description: "Leading Kazakhstan's largest AI community",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      value: "8",
      label: "Offline Events Organized",
      description: "In-person meetups and conferences across Kazakhstan",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "10+",
      label: "Years Building",
      description: "Continuous innovation in AI and ML",
    },
    {
      icon: <Target className="h-8 w-8" />,
      value: "3",
      label: "Gold Medals",
      description: "Top 0.1% performance in ML competitions",
    },
  ]

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10 max-w-7xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Impact by{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Numbers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Measurable achievements across AI research, competitive programming, community building, and real-world
            deployments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} delay={index * 0.1} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These numbers represent years of dedication to advancing AI technology, fostering community growth, and
            creating real-world impact through innovative solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
