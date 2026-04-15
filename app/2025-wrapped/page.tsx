"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown, Home, Volume2, VolumeX, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const slides = [
  {
    id: "intro",
    bg: "bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]",
    content: "intro",
  },
  {
    id: "hackathons",
    bg: "bg-gradient-to-br from-[#ff6b35] via-[#f7931e] to-[#ffcc02]",
    content: "hackathons",
  },
  {
    id: "cloudflare",
    bg: "bg-gradient-to-br from-[#f38020] via-[#faae2b] to-[#f9d423]",
    content: "cloudflare",
  },
  {
    id: "anthropic",
    bg: "bg-gradient-to-br from-[#d4a574] via-[#c9956c] to-[#b8860b]",
    content: "anthropic",
  },
  {
    id: "speaking",
    bg: "bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb]",
    content: "speaking",
  },
  {
    id: "impact",
    bg: "bg-gradient-to-br from-[#11998e] via-[#38ef7d] to-[#c8f550]",
    content: "impact",
  },
  {
    id: "ventures",
    bg: "bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]",
    content: "ventures",
  },
  {
    id: "github",
    bg: "bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#21262d]",
    content: "github",
  },
  {
    id: "recognition",
    bg: "bg-gradient-to-br from-[#8e2de2] via-[#4a00e0] to-[#1a1a2e]",
    content: "recognition",
  },
  {
    id: "languages",
    bg: "bg-gradient-to-br from-[#ec008c] via-[#fc6767] to-[#f38020]",
    content: "languages",
  },
  {
    id: "finale",
    bg: "bg-gradient-to-br from-[#c8f550] via-[#a8e063] to-[#56ab2f]",
    content: "finale",
  },
]

export default function YearWrapped() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState(0)
  const [isMuted, setIsMuted] = useState(true)

  const goToSlide = useCallback(
    (newSlide: number, dir: number) => {
      if (isAnimating || newSlide < 0 || newSlide >= slides.length) return
      setIsAnimating(true)
      setDirection(dir)
      setCurrentSlide(newSlide)
      setTimeout(() => setIsAnimating(false), 800)
    },
    [isAnimating],
  )

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1, 1)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1, -1)
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        prevSlide()
      }
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (e.deltaY > 0) nextSlide()
      else prevSlide()
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("wheel", handleWheel)
    }
  }, [nextSlide, prevSlide])

  const slideVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      y: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
    }),
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const numberVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.5,
      },
    },
  }

  const GitHubGraph = () => {
    const months = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const days = ["Mon", "Wed", "Fri"]

    // Generate contribution data similar to the image
    const generateContributions = () => {
      const data: number[][] = []
      for (let week = 0; week < 53; week++) {
        const weekData: number[] = []
        for (let day = 0; day < 7; day++) {
          // Create patterns similar to the screenshot
          const rand = Math.random()
          if (rand < 0.3) weekData.push(0)
          else if (rand < 0.5) weekData.push(1)
          else if (rand < 0.7) weekData.push(2)
          else if (rand < 0.85) weekData.push(3)
          else weekData.push(4)
        }
        data.push(weekData)
      }
      return data
    }

    const contributions = generateContributions()
    const colors = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"]

    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex gap-1 mb-2 ml-8">
          {months.map((month, i) => (
            <span key={i} className="text-xs text-gray-500 flex-1 text-center">
              {month}
            </span>
          ))}
        </div>
        <div className="flex">
          <div className="flex flex-col justify-around mr-2 text-xs text-gray-500">
            {days.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className="flex gap-[3px] overflow-hidden">
            {contributions.map((week, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-[3px]">
                {week.map((level, dayIdx) => (
                  <motion.div
                    key={dayIdx}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + (weekIdx * 7 + dayIdx) * 0.002 }}
                    className="w-[10px] h-[10px] rounded-[2px]"
                    style={{ backgroundColor: colors[level] }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end gap-1 mt-4 text-xs text-gray-500">
          <span>Less</span>
          {colors.map((color, i) => (
            <div key={i} className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: color }} />
          ))}
          <span>More</span>
        </div>
      </div>
    )
  }

  const renderSlideContent = (slideId: string) => {
    switch (slideId) {
      case "intro":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center h-full text-center px-6"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 mx-auto">
                <Image
                  src="/spacesuit/visor-off.png"
                  alt="Noah Santoni"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-[#c8f550] text-lg md:text-2xl font-bold uppercase tracking-wider mb-2"
            >
              "Cracked Noah"
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-white/60 text-base md:text-lg uppercase tracking-[0.3em] mb-4"
            >
              Noah Santoni
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-8xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-brier)" }}
            >
              2025
            </motion.h1>
            <motion.p variants={itemVariants} className="text-2xl md:text-4xl text-white/80 font-light">
              Year in Review
            </motion.p>
            <motion.div variants={itemVariants} className="mt-12 flex flex-col items-center gap-2 text-white/40">
              <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </motion.div>
        )

      case "hackathons":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center h-full text-center px-6"
          >
            <motion.p variants={itemVariants} className="text-black/60 text-sm uppercase tracking-[0.3em] mb-4">
              This year you entered
            </motion.p>
            <motion.div
              variants={numberVariants}
              className="text-[120px] md:text-[200px] font-black text-black leading-none"
              style={{ fontFamily: "var(--font-brier)" }}
            >
              5
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-black mt-4">
              AI Hackathons
            </motion.h2>
            <motion.p variants={itemVariants} className="text-black/70 text-xl mt-6 max-w-md">
              And you didn{"'"}t just participate...
            </motion.p>
          </motion.div>
        )

      case "cloudflare":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center h-full text-center px-6"
          >
            <motion.div
              variants={itemVariants}
              className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-2xl"
            >
              <span className="text-4xl md:text-5xl">☁️</span>
            </motion.div>
            <motion.p variants={itemVariants} className="text-black/60 text-sm uppercase tracking-[0.3em] mb-2">
              Cloudflare Hackathon
            </motion.p>
            <motion.div variants={numberVariants} className="flex items-baseline gap-2">
              <span
                className="text-[100px] md:text-[160px] font-black text-black leading-none"
                style={{ fontFamily: "var(--font-brier)" }}
              >
                3rd
              </span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-bold text-black mt-4">
              Place Worldwide
            </motion.h2>
            <motion.p variants={itemVariants} className="text-black/60 text-lg mt-4 max-w-sm">
              Competing against thousands of developers globally
            </motion.p>
          </motion.div>
        )

      case "anthropic":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center h-full text-center px-6"
          >
            <motion.div
              variants={itemVariants}
              className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-2xl"
            >
              <span className="text-4xl md:text-5xl">🤖</span>
            </motion.div>
            <motion.p variants={itemVariants} className="text-white/60 text-sm uppercase tracking-[0.3em] mb-2">
              Anthropic Hackathon
            </motion.p>
            <motion.div variants={numberVariants} className="flex items-baseline gap-2">
              <span
                className="text-[100px] md:text-[160px] font-black text-white leading-none"
                style={{ fontFamily: "var(--font-brier)" }}
              >
                4th
              </span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-bold text-white mt-4">
              Place Worldwide
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/60 text-lg mt-4 max-w-sm">
              Building with Claude at the cutting edge of AI
            </motion.p>
          </motion.div>
        )

      case "speaking":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center h-full text-center px-6"
          >
            <motion.p variants={itemVariants} className="text-white/60 text-sm uppercase tracking-[0.3em] mb-4">
              You delivered
            </motion.p>
            <motion.div
              variants={numberVariants}
              className="text-[120px] md:text-[200px] font-black text-white leading-none"
              style={{ fontFamily: "var(--font-brier)" }}
            >
              3
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mt-4">
              Keynote Speeches
            </motion.h2>
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mt-8">
              {["AI Surrey", "NextJS Conf", "V0 Vercel"].map((event) => (
                <span key={event} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                  {event}
                </span>
              ))}
            </motion.div>
          </motion.div>
        )

      case "impact":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center h-full text-center px-6"
          >
            <motion.p variants={itemVariants} className="text-black/60 text-sm uppercase tracking-[0.3em] mb-8">
              Your AI solutions delivered
            </motion.p>
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8 md:gap-16">
              <div className="flex flex-col items-center">
                <motion.span
                  variants={numberVariants}
                  className="text-[60px] md:text-[100px] font-black text-black leading-none"
                  style={{ fontFamily: "var(--font-brier)" }}
                >
                  40%
                </motion.span>
                <span className="text-black/70 text-sm md:text-base mt-2">Efficiency Boost</span>
              </div>
              <div className="flex flex-col items-center">
                <motion.span
                  variants={numberVariants}
                  className="text-[60px] md:text-[100px] font-black text-black leading-none"
                  style={{ fontFamily: "var(--font-brier)" }}
                >
                  30%
                </motion.span>
                <span className="text-black/70 text-sm md:text-base mt-2">Cost Reduction</span>
              </div>
            </motion.div>
            <motion.p variants={itemVariants} className="text-black/60 text-lg mt-8 max-w-md">
              For clients across industries
            </motion.p>
          </motion.div>
        )

      case "ventures":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center h-full text-center px-6"
          >
            <motion.p variants={itemVariants} className="text-white/60 text-sm uppercase tracking-[0.3em] mb-8">
              You{"'"}re leading
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              {[
                { name: "Born & Brand", role: "Co-Founder" },
                { name: "GroundCtrl", role: "Head of AI & Growth" },
                { name: "whatAIdea", role: "Founder" },
              ].map((venture, index) => (
                <motion.div
                  key={venture.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-3 h-3 bg-[#c8f550] rounded-full" />
                  <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{venture.name}</h3>
                    <p className="text-white/60 text-sm">{venture.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )

      case "github":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center h-full text-center px-6"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <Github className="w-10 h-10 md:w-12 md:h-12 text-white" />
              <span className="text-white/60 text-lg">@ArkMaster123</span>
            </motion.div>
            <motion.p variants={itemVariants} className="text-white/60 text-sm uppercase tracking-[0.3em] mb-2">
              You made
            </motion.p>
            <motion.div
              variants={numberVariants}
              className="text-[80px] md:text-[140px] font-black text-white leading-none"
              style={{ fontFamily: "var(--font-brier)" }}
            >
              1,343
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-bold text-white mt-2 mb-8">
              Contributions
            </motion.h2>

            <motion.div variants={itemVariants} className="w-full max-w-2xl mb-8">
              <GitHubGraph />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-[#39d353]/20 to-[#26a641]/20 border border-[#39d353]/30 rounded-2xl p-6 max-w-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🔥</span>
                <span className="text-[#39d353] font-bold uppercase text-sm tracking-wider">Viral Project</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">F5-TTS</h3>
              <p className="text-white/70 text-sm">
                Open-sourced a FREE alternative to ElevenLabs voice cloning that went viral in the AI community
              </p>
            </motion.div>
          </motion.div>
        )

      case "recognition":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center h-full text-center px-6"
          >
            <motion.div
              variants={itemVariants}
              className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-8 shadow-2xl"
            >
              <span className="text-5xl md:text-6xl">🏆</span>
            </motion.div>
            <motion.p variants={itemVariants} className="text-white/60 text-sm uppercase tracking-[0.3em] mb-2">
              You were recognized by
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold text-white mt-4"
              style={{ fontFamily: "var(--font-brier)" }}
            >
              RAION x SAIF
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/70 text-xl mt-4">
              Top 100 AI Leaders
            </motion.p>
            <motion.p variants={itemVariants} className="text-white/50 text-base mt-2 max-w-sm">
              Recognizing exceptional contributions to the AI ecosystem
            </motion.p>
          </motion.div>
        )

      case "languages":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center h-full text-center px-6"
          >
            <motion.p variants={itemVariants} className="text-white/60 text-sm uppercase tracking-[0.3em] mb-4">
              You speak
            </motion.p>
            <motion.div
              variants={numberVariants}
              className="text-[120px] md:text-[200px] font-black text-white leading-none"
              style={{ fontFamily: "var(--font-brier)" }}
            >
              4
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mt-4">
              Languages
            </motion.h2>
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                { lang: "English", flag: "🇬🇧" },
                { lang: "Portuguese", flag: "🇧🇷" },
                { lang: "Spanish", flag: "🇪🇸" },
                { lang: "Italian", flag: "🇮🇹" },
              ].map((item) => (
                <span
                  key={item.lang}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white flex items-center gap-2"
                >
                  <span>{item.flag}</span>
                  <span>{item.lang}</span>
                </span>
              ))}
            </motion.div>
          </motion.div>
        )

      case "finale":
        return (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center h-full text-center px-6"
          >
            <motion.p variants={itemVariants} className="text-black/60 text-sm uppercase tracking-[0.3em] mb-2">
              That{"'"}s a wrap for
            </motion.p>
            <motion.p variants={itemVariants} className="text-[#1a1a2e] text-xl md:text-2xl font-bold mb-4">
              "Cracked Noah"
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-7xl font-black text-black mb-6"
              style={{ fontFamily: "var(--font-brier)" }}
            >
              What{"'"}s Next?
            </motion.h1>
            <motion.p variants={itemVariants} className="text-black/70 text-xl max-w-md mb-8">
              Let{"'"}s build something extraordinary together
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:scale-105 transition-transform"
              >
                View Portfolio
              </Link>
              <a
                href="https://github.com/ArkMaster123"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-black/10 text-black rounded-full font-semibold hover:bg-black/20 transition-colors flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/noahsantoni"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-black/10 text-black rounded-full font-semibold hover:bg-black/20 transition-colors"
              >
                Connect
              </a>
            </motion.div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50 flex items-center gap-4">
        <Link
          href="/"
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <Home className="w-5 h-5" />
        </Link>
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index, index > currentSlide ? 1 : -1)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-150" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <span className="text-white/60 text-sm font-mono">
          {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.4 },
          }}
          className={`absolute inset-0 ${slides[currentSlide].bg}`}
        >
          {renderSlideContent(slides[currentSlide].content)}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
