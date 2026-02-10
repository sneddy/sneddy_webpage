"use client"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Sparkles, MessageCircle, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import heroData from "@/locals/en/home/hero.json"
import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const enableMotion = !prefersReducedMotion
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointerFine, setIsPointerFine] = useState(false)

  useEffect(() => {
    if (!enableMotion) return

    const mediaQuery = window.matchMedia("(pointer: fine)")
    const updatePointer = () => setIsPointerFine(mediaQuery.matches)
    updatePointer()

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updatePointer)
    } else {
      mediaQuery.addListener(updatePointer)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updatePointer)
      } else {
        mediaQuery.removeListener(updatePointer)
      }
    }
  }, [enableMotion])

  useEffect(() => {
    if (!enableMotion || !isPointerFine) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 3 })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [enableMotion, isPointerFine])

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_15%_0%,hsl(var(--primary)/0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_85%_10%,hsl(var(--secondary)/0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_50%_100%,hsl(var(--accent)/0.18),transparent_60%)]" />
        {enableMotion && isPointerFine && (
          <div
            className="absolute inset-0 opacity-40 transition-opacity duration-300"
            style={{
              background: `radial-gradient(900px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.16), transparent 55%)`,
            }}
          />
        )}
      </div>

      {/* Enhanced Floating Elements - only render when mounted */}
      {enableMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                x: [0, 150, 0],
                y: [0, -120, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 2,
                ease: "easeInOut",
              }}
              style={{
                left: `${15 + i * 12}%`,
                top: `${25 + i * 8}%`,
              }}
            >
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-sm" />
            </motion.div>
          ))}

          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute"
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 1.5,
              }}
              style={{
                right: `${20 + i * 15}%`,
                top: `${40 + i * 10}%`,
              }}
            >
              <Sparkles className="w-4 h-4 text-primary/20" />
            </motion.div>
          ))}
        </div>
      )}

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 gap-10 sm:gap-14 md:gap-16 lg:grid-cols-[460px_1fr] xl:grid-cols-[500px_1fr] items-center max-w-7xl mx-auto">
          {/* Enhanced Profile Image - static until mounted */}
          <div
            className="relative mx-auto lg:mx-0 order-2 lg:order-1 w-full max-w-[360px] sm:max-w-[420px]"
            style={{ opacity: 1 }}
          >
            <div className="relative">
              {/* Multiple gradient layers for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur-2xl opacity-25 animate-pulse scale-110" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-xl opacity-40 scale-105" />

              <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.9)] transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/images/profile-photo.jpeg"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                  priority
                  loading="eager"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Enhanced Content */}
          <motion.div
            className="flex flex-col justify-center space-y-10 text-center lg:text-left order-1 lg:order-2 w-full"
            initial={false}
            animate={enableMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            {/* Enhanced Greeting */}
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 text-primary border border-white/10 text-sm font-medium mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  Welcome to my portfolio
                </span>
              </div>

              <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl xl:text-7xl/none">
                <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  {heroData.greeting}
                </span>
              </h1>

              <p className="max-w-[650px] text-xl sm:text-2xl text-muted-foreground mx-auto lg:mx-0 leading-relaxed">
                {heroData.subtitle}
              </p>
            </div>

            {/* Enhanced Social Links */}
            <div className="space-y-4">
              {/* First row - GitHub and LinkedIn */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link href="https://github.com/sneddy" target="_blank" className="flex-1 sm:flex-none">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-3 bg-white/5 border-white/10 hover:bg-white/10 px-6 py-3 text-base w-full sm:w-auto min-w-[140px]"
                  >
                    <Github className="h-5 w-5" />
                    <span className="hidden sm:inline">{heroData.links.github}</span>
                    <span className="sm:hidden">GitHub</span>
                  </Button>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/anuar-aimoldin/"
                  target="_blank"
                  className="flex-1 sm:flex-none"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-3 bg-white/5 border-white/10 hover:bg-white/10 px-6 py-3 text-base w-full sm:w-auto min-w-[140px]"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="hidden sm:inline">{heroData.links.linkedin}</span>
                    <span className="sm:hidden">LinkedIn</span>
                  </Button>
                </Link>

                <Link
                  href="https://scholar.google.com/citations?user=SE9vprcAAAAJ"
                  target="_blank"
                  className="flex-1 sm:flex-none"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-3 bg-white/5 border-white/10 hover:bg-white/10 px-6 py-3 text-base w-full sm:w-auto min-w-[140px]"
                  >
                    <BookOpen className="h-5 w-5" />
                    <span className="hidden sm:inline">Google Scholar</span>
                    <span className="sm:hidden">Scholar</span>
                  </Button>
                </Link>
              </div>

              {/* Second row - Email and Telegram */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link href="mailto:aimoldin@gmail.com" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="gap-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 px-6 py-3 text-base font-semibold shadow-[0_12px_30px_-16px_hsl(var(--primary)/0.8)] w-full sm:w-auto min-w-[180px]"
                  >
                    <Mail className="h-5 w-5" />
                    <span>aimoldin@gmail.com</span>
                  </Button>
                </Link>

                <Link href="https://t.me/sneddy" target="_blank" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-3 bg-white/5 border-white/10 hover:bg-white/10 text-secondary px-6 py-3 text-base w-full sm:w-auto min-w-[140px]"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Telegram
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
