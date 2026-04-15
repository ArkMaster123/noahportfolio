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
      className="relative min-h-screen bg-lorenzo-dark text-lorenzo-text-light py-24 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <stat.icon className="w-8 h-8 text-lorenzo-accent mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-black text-lorenzo-accent mb-1">{stat.value}</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-balance leading-[1.1] xl:text-8xl">
            <span className="text-lorenzo-accent font-brier leading-[1.1] text-8xl">TRANSFORMING</span> COMPLEX AI
            <br />
            INTO <span className="text-lorenzo-accent font-brier leading-[1.1]">REAL BUSINESS</span>
            <br />
            VALUE. FROM STARTUPS
            <br />
            TO <span className="text-lorenzo-accent font-brier leading-[1.1]">FTSE 100</span>
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
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            From enterprise sales at Google and BAE Systems to founding AI companies and keynoting Vercel's NextJS Conference. Nine years of transforming businesses, now building AI products, automations, and growth strategies that turn complexity into commercial results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
