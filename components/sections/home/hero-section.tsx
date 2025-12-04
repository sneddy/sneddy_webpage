"use client"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Sparkles, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import heroData from "@/locals/en/home/hero.json"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mounted])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-secondary/5 to-transparent" />
        {mounted && (
          <div
            className="absolute inset-0 opacity-40 transition-opacity duration-300"
            style={{
              background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 174, 199, 0.15), transparent 50%)`,
            }}
          />
        )}
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
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
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 2,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + i * 8}%`,
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-sm" />
          </motion.div>
        ))}

        {/* Additional sparkle effects */}
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

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-[450px_1fr] items-center max-w-7xl mx-auto">
          {/* Enhanced Profile Image */}
          <motion.div
            className="relative mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Multiple gradient layers for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur-2xl opacity-25 animate-pulse scale-110" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-xl opacity-40 scale-105" />

              <motion.div
                className="relative aspect-square overflow-hidden rounded-3xl border-2 border-primary/20 shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/profile-photo.jpeg"
                  alt="Profile photo"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />

                {/* Overlay gradient for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Content */}
          <motion.div
            className="flex flex-col justify-center space-y-10 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Enhanced Greeting */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.span
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 text-primary rounded-full text-sm font-medium mb-6 border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Sparkles className="w-4 h-4" />
                  Welcome to my portfolio
                </motion.span>
              </motion.div>

              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-7xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  {heroData.greeting}
                </span>
              </motion.h1>

              <motion.p
                className="max-w-[650px] text-xl sm:text-2xl text-muted-foreground mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {heroData.subtitle}
              </motion.p>
            </div>

            {/* Enhanced Social Links - Better alignment */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              {/* First row - GitHub and LinkedIn */}
              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link href="https://github.com/sneddy" target="_blank" className="flex-1 sm:flex-none">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent border-2 px-6 py-3 text-base w-full sm:w-auto min-w-[140px]"
                    >
                      <Github className="h-5 w-5" />
                      <span className="hidden sm:inline">{heroData.links.github}</span>
                      <span className="sm:hidden">GitHub</span>
                    </Button>
                  </motion.div>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/anuar-aimoldin/"
                  target="_blank"
                  className="flex-1 sm:flex-none"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent border-2 px-6 py-3 text-base w-full sm:w-auto min-w-[140px]"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="hidden sm:inline">{heroData.links.linkedin}</span>
                      <span className="sm:hidden">LinkedIn</span>
                    </Button>
                  </motion.div>
                </Link>
              </div>

              {/* Second row - Email and Telegram stacked on mobile */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link href="mailto:aimoldin@gmail.com" className="w-full sm:w-auto">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                    <Button
                      size="lg"
                      className="gap-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 px-6 py-3 text-base font-semibold shadow-lg w-full sm:w-auto min-w-[180px]"
                    >
                      <Mail className="h-5 w-5" />
                      <span>aimoldin@gmail.com</span>
                    </Button>
                  </motion.div>
                </Link>

                <Link href="https://t.me/sneddy" target="_blank" className="w-full sm:w-auto">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-3 hover:bg-blue-500 hover:text-white transition-all duration-300 bg-transparent border-2 border-blue-500 text-blue-500 px-6 py-3 text-base w-full sm:w-auto min-w-[140px]"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Telegram
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
