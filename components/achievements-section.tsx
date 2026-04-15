"use client"

import { motion } from "framer-motion"
import { Trophy, Plane, TrendingUp, Brain, Zap } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "3rd Place",
    subtitle: "Cloudflare Hackathon",
    description: "MCP for AI Psychosis project",
    color: "bg-yellow-500",
  },
  {
    icon: Trophy,
    title: "4th Place",
    subtitle: "Anthropic & Lovable",
    description: "AI Agents for Trade Industry",
    color: "bg-orange-500",
  },
  {
    icon: Plane,
    title: "RAION SAIF",
    subtitle: "Gibraltar Invitation",
    description: "Leading 25 elite global talent",
    color: "bg-blue-500",
  },
  {
    icon: Brain,
    title: "40%",
    subtitle: "Efficiency Boost",
    description: "Fintech AI agent swarms",
    color: "bg-lorenzo-accent",
  },
  {
    icon: Zap,
    title: "30%",
    subtitle: "Cost Reduction",
    description: "Healthcare chatbots",
    color: "bg-green-500",
  },
  {
    icon: TrendingUp,
    title: "25%",
    subtitle: "Avg Revenue Growth",
    description: "For 50+ entrepreneurs",
    color: "bg-purple-500",
  },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-tight text-lorenzo-dark">
            <span className="block font-sans leading-[0.85]">KEY</span>
            <span className="block font-brier">ACHIEVEMENTS</span>
          </h2>
          <p className="text-base mt-6 max-w-2xl mx-auto text-lorenzo-dark/70 md:text-lg">
            2025 has been WILD - hackathon wins, speaking engagements, and recognition from sovereign wealth funds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title + achievement.subtitle}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-3xl bg-lorenzo-dark text-white overflow-hidden"
            >
              {/* Background Accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${achievement.color} rounded-full blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity`}
              />

              {/* Icon */}
              <div className={`w-14 h-14 ${achievement.color} rounded-2xl flex items-center justify-center mb-6`}>
                <achievement.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-3xl md:text-4xl font-black text-white mb-1">{achievement.title}</h3>
              <p className="text-lorenzo-accent font-bold uppercase tracking-wider text-sm mb-3">
                {achievement.subtitle}
              </p>
              <p className="text-white/60 text-sm">{achievement.description}</p>

              {/* Decorative Corner */}
              <div className="absolute bottom-4 right-4 flex gap-1 opacity-30">
                <div className={`w-1.5 h-1.5 ${achievement.color} rounded-full`} />
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
