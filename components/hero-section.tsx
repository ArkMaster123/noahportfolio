"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import InteractivePortrait from "./interactive-portrait"
import SignatureMarqueeSection from "./signature-marquee-section"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // Wait for preloader (2.5s + buffer)
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 2600)
    return () => clearTimeout(timer)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const scale = useTransform(smoothProgress, [0, 0.4], [1, 0.45])
  const textOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1])
  const exitY = useTransform(smoothProgress, [0.85, 1], ["0%", "-100%"])
  const exitOpacity = useTransform(smoothProgress, [0.9, 1], [1, 0])

  // Mobile: static single-screen hero, no scroll animation
  if (isMobile) {
    return (
      <section className="relative min-h-[100svh] bg-[#1a1f1a] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 w-full h-full flex items-center justify-center px-6 py-20">
          <div className="relative w-full max-w-sm aspect-[4/5]">
            <Image
              src="/spacesuit/visor-off.png"
              alt="Noah Santoni"
              fill
              sizes="(max-width: 768px) 90vw, 400px"
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 z-20 pointer-events-none bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
          <p className="text-white/60 text-xs font-medium">Head of Growth at GroundCtrl</p>
          <p className="text-lorenzo-accent text-xs font-bold">Founder at Born & Brand</p>
        </div>
      </section>
    )
  }

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#1a1f1a]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-background">
        {/* Background Text Layer */}
        <motion.div
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
          style={{
            y: exitY,
            opacity: exitOpacity,
          }}
        >
          <motion.div
            className="w-full h-full flex items-center justify-center opacity-0"
            style={{ opacity: textOpacity }}
          >
            <SignatureMarqueeSection />
          </motion.div>
        </motion.div>

        {/* Foreground Portrait Layer */}
        <motion.div
          className="relative z-10 w-full h-full flex items-center justify-center"
          style={{
            scale: scale,
            y: exitY,
            opacity: exitOpacity,
          }}
        >
          {isReady && <InteractivePortrait />}
        </motion.div>
      </div>
    </section>
  )
}
