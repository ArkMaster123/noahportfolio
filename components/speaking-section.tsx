"use client"

import { motion } from "framer-motion"
import { Mic, Users, MapPin } from "lucide-react"

const speakingEngagements = [
  {
    event: "Vercel NextJS Conference",
    venue: "Virtual / Global",
    audience: "Developer Community",
    topic: "WordPress to NextJS Migrations & AI-Powered Development",
    type: "Keynote Speaker",
  },
  {
    event: "Cloudflare Hackathon",
    venue: "Virtual",
    audience: "Global Developer Community",
    topic: "MCP for AI Psychosis (3rd Place)",
    type: "Hackathon (3rd Place)",
  },
  {
    event: "RAION SAIF, Gibraltar",
    venue: "Gibraltar",
    audience: "25 Elite Global Talents",
    topic: "AI Product Development & Vibe Coding",
    type: "Invited Leader",
  },
]

export default function SpeakingSection() {
  return (
    <section id="speaking" className="relative bg-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mic className="w-8 h-8 text-lorenzo-accent" />
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-tight text-lorenzo-dark">
            <span className="block font-sans leading-[0.85]">SPEAKING</span>
            <span className="block font-brier">ENGAGEMENTS</span>
          </h2>
          <p className="text-base mt-6 max-w-2xl mx-auto text-lorenzo-dark/70 md:text-lg">
            Recognized as a leading voice in AI innovation, sharing insights with hundreds of industry leaders,
            enterprise clients, and developers worldwide.
          </p>
        </motion.div>

        <div className="space-y-6">
          {speakingEngagements.map((engagement, index) => (
            <motion.div
              key={engagement.event}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl bg-lorenzo-dark text-white overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-lorenzo-accent/10 rounded-full blur-[100px]" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-lorenzo-accent text-lorenzo-dark text-xs font-bold uppercase rounded-full mb-4">
                    {engagement.type}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase mb-2">{engagement.event}</h3>
                  <p className="text-white/60 text-sm">{engagement.topic}</p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-white/60">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-lorenzo-accent" />
                    {engagement.venue}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-lorenzo-accent" />
                    {engagement.audience}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lorenzo-dark/60 text-sm mb-4">
            Available for speaking engagements on AI innovation, business transformation, and cutting-edge technology
            solutions.
          </p>
          <a
            href="mailto:noah.santoni@gmail.com"
            className="inline-flex items-center gap-2 text-lorenzo-dark font-bold uppercase tracking-wider hover:text-lorenzo-accent transition-colors"
          >
            <Mic className="w-4 h-4" />
            Book for your event
          </a>
        </motion.div>
      </div>
    </section>
  )
}
