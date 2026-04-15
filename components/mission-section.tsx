"use client"

import { useEffect, useRef, useState } from "react"
import { useScroll, useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Briefcase, Lightbulb, Rocket, Users } from "lucide-react"

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const [scrollProgress, setScrollProgress] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const sectionHeight = rect.height
        const scrolled = -rect.top
        const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1)
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stats = [
    { icon: Briefcase, value: "9+", label: "Years Experience" },
    { icon: Lightbulb, value: "£1.5M", label: "Pipeline Built" },
    { icon: Rocket, value: "£100k+", label: "Revenue (12 months)" },
    { icon: Users, value: "200+", label: "Community Members" },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-lorenzo-dark text-lorenzo-text-light py-14 sm:py-16 md:py-24 flex items-center justify-center"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12 md:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center min-w-0 p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10"
             >
              <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-lorenzo-accent mx-auto mb-2 sm:mb-3" />
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-lorenzo-accent mb-1">{stat.value}</div>
              <div className="text-[11px] sm:text-xs md:text-sm leading-tight text-white/60 uppercase tracking-wide break-words">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <h2 className="text-[clamp(2.2rem,11vw,5rem)] md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.05] md:leading-[1.1] text-balance">
            <span className="text-lorenzo-accent font-brier leading-[1.05] text-[clamp(2.7rem,13vw,6rem)] md:text-8xl">
              TRANSFORMING
            </span>{" "}
            COMPLEX AI
            <br />
            INTO <span className="text-lorenzo-accent font-brier leading-[1.05]">REAL BUSINESS</span>
            <br />
            VALUE. FROM STARTUPS
            <br />
            TO <span className="text-lorenzo-accent font-brier leading-[1.05]">FTSE 100</span>
            <br />
            COMPANIES.
          </h2>
        </div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 max-w-3xl mx-auto text-center px-1 sm:px-0"
        >
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed text-pretty">
            From enterprise sales at Google and BAE Systems to founding AI companies and keynoting Vercel's NextJS Conference. Nine years of transforming businesses, now building AI products, automations, and growth strategies that turn complexity into commercial results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
