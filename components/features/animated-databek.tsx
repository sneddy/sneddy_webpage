"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function AnimatedDatabek() {
  const [isHandUp, setIsHandUp] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHandUp((prev) => !prev)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full min-h-[300px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={isHandUp ? "up" : "down"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={
              isHandUp
                ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Databek%20hand%20up%20%282%29-y4L2Qcsntkd50eAYsU8JOp2DrwMuAf.png"
                : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Databek%20hand%20down-daDVCpeQMO1xhSHEMhxdk3XYFStxvr.png"
            }
            alt="Animated Databek character"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
