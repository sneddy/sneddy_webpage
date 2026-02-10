"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Mail, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import navigationData from "@/locals/en/navigation.json"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  const navigationLinks = navigationData?.links || []

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (typeof document === "undefined") return
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)

  const HeaderWrapper = mounted ? motion.header : "header"
  const headerProps = mounted
    ? {
        initial: { y: -100 },
        animate: { y: 0 },
        transition: { duration: 0.6 },
      }
    : {}

  return (
    <HeaderWrapper
      {...headerProps}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-[0_10px_20px_-12px_hsl(var(--primary)/0.8)]">
                <span className="text-white font-bold text-lg font-display">A</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-semibold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {navigationData?.brand?.name || "Anuar Aimoldin"}
              </div>
              <div className="text-xs text-muted-foreground">
                {navigationData?.brand?.title || "AI Researcher & Industry leader"}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium tracking-tight transition-colors duration-200 hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
                {pathname === link.href && mounted && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-md -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                {pathname === link.href && !mounted && (
                  <div className="absolute inset-0 bg-primary/10 rounded-md -z-10" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button asChild variant="outline" size="sm" className="rounded-full px-4">
              <a
                href={`mailto:${navigationData?.cta?.email || "aimoldin@gmail.com"}`}
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {navigationData?.cta?.email || "aimoldin@gmail.com"}
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="rounded-full px-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              <a
                href={navigationData?.cta?.telegram || "https://t.me/sneddy"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Telegram
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
              className={`relative w-11 h-11 rounded-xl border border-border/70 transition-all duration-200 flex items-center justify-center touch-manipulation ${
                isOpen
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_10px_20px_-12px_hsl(var(--primary)/0.8)]"
                  : "bg-background/80 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              <div className="relative">
                {isOpen ? (
                  <X className="w-6 h-6 transition-transform duration-200" />
                ) : (
                  <Menu className="w-6 h-6 transition-transform duration-200" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-x-4 top-20 md:hidden rounded-2xl border border-border/60 bg-card/95 shadow-glow overflow-hidden"
              >
                <div className="flex flex-col space-y-2 p-4">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`w-full px-4 py-4 text-left text-base font-medium transition-all duration-200 rounded-xl border touch-manipulation ${
                        pathname === link.href
                          ? "text-primary bg-primary/10 border-primary/20"
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5 border-transparent hover:border-primary/20"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="flex flex-col space-y-3 pt-4 border-t border-border/50">
                    <Button asChild variant="outline" size="lg" className="w-full justify-start">
                      <a href={`mailto:${navigationData?.cta?.email || "aimoldin@gmail.com"}`}>
                        <Mail className="w-5 h-5" />
                        <span className="text-sm">{navigationData?.cta?.email || "aimoldin@gmail.com"}</span>
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      className="w-full justify-start bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    >
                      <a href={navigationData?.cta?.telegram || "https://t.me/sneddy"} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-5 h-5" />
                        <span>Telegram</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </HeaderWrapper>
  )
}
