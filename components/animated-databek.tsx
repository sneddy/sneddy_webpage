"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

export function AnimatedDatabek() {
  const [isHandUp, setIsHandUp] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHandUp((prev) => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-[300px] h-[300px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={isHandUp ? "up" : "down"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={
              isHandUp
                ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Databek%20hand%20up-MFKPtAyROb3C4R9DpfKpF4cPNeUu1N.png"
                : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Databek%20hand%20down-zHRPwlBKn0TbEupEdDym62oxRXjPjb.png"
            }
            alt="Databek mascot"
            width={300}
            height={300}
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
