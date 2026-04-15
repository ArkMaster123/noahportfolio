"use client"

import { motion } from "framer-motion"
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react"

interface Experience {
  title: string
  company: string
  period: string
  location: string
  description: string
  highlights?: string[]
  link?: string
  current?: boolean
}

const experiences: Experience[] = [
  {
    title: "Head of Growth",
    company: "GroundCtrl",
    period: "Jul 2025 – Present",
    location: "Remote",
    description:
      "Built a £1.5M qualified pipeline and closed £100k+ in revenue from a standing start. Conceptualised and negotiated 'Sentinel' — an AI avatar solution — and pioneered 'Vibe Coding as a Service', training the team to ship AI products through prompt-driven development. Client base spans Market Research firms, US Federal Grant Suppliers, and Defence Contractors (NDAs in place).",
    highlights: ["£1.5M pipeline", "£100k+ revenue", "Defence & Federal clients", "Vibe Coding as a Service"],
    current: true,
  },
  {
    title: "Founder & Developer",
    company: "Born & Brand",
    period: "Sept 2024 – Jun 2025",
    location: "London, UK",
    description:
      "Self-taught development using Claude Code and NextJS to build and ship AI products at pace, scaling to £100k+ revenue within 12 months with 3 contractors across 7+ concurrent projects. Built 'WebMD Clone' — distilling 4 years of clinical knowledge into a custom agentic AI — and flow.legal, a legaltech platform using multi-agent pipelines.",
    highlights: ["£100k+ revenue", "WebMD Clone", "flow.legal"],
    link: "https://bornandbrand.com",
  },
  {
    title: "Founder",
    company: "Whataidea Ltd",
    period: "Jun 2023 – Sept 2024",
    location: "Remote",
    description:
      "Built and sold an AI-powered sales tool, signing enterprise clients including Google, Crowdstrike, and BAE Systems. Product was disrupted by Claude MCPs and native AI tooling; made the deliberate decision to shut down and double down on building with the same technology.",
    highlights: ["Google", "Crowdstrike", "BAE Systems"],
    link: "https://whataidea.com",
  },
  {
    title: "Account Manager",
    company: "Euromonitor International",
    period: "Feb 2020 – Sept 2024",
    location: "London, UK",
    description:
      "Managed 19 global enterprise accounts (PepsiCo, Mondelez, Kellanova) across a £6M portfolio. Achieved 115% renewal rate through strategic account planning and measurable client value delivery.",
    highlights: ["19 enterprise accounts", "£6M portfolio", "115% renewal rate"],
  },
  {
    title: "Business Development Manager, Teamsports",
    company: "Pentland Brands",
    period: "Jan 2018 – Jul 2019",
    location: "London, UK",
    description:
      "Managed a £1M EMEA P&L; negotiated distributor agreements adding £100k annual incremental revenue and drove 80% year-on-year secondary distributor sales growth.",
    highlights: ["£1M EMEA P&L", "80% YoY sales growth"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative min-h-screen bg-lorenzo-light py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-tight text-lorenzo-dark">
            <span className="block font-sans leading-[0.85]">CAREER</span>
            <span className="block font-brier text-lorenzo-dark">JOURNEY</span>
          </h2>
          <p className="text-base mt-6 max-w-2xl text-lorenzo-dark/70 md:text-lg">
            A decade of transforming businesses through strategic growth, account management, and AI innovation.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[23px] top-16 bottom-0 w-0.5 bg-lorenzo-dark/20" />
              )}

              <div className="flex gap-6">
                {/* Timeline Dot */}
                <div
                  className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                    exp.current ? "bg-lorenzo-accent" : "bg-lorenzo-dark/20"
                  }`}
                >
                  <Building2 className={`w-5 h-5 ${exp.current ? "text-lorenzo-dark" : "text-lorenzo-dark/60"}`} />
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 p-6 rounded-2xl transition-all duration-300 ${
                    exp.current
                      ? "bg-lorenzo-dark text-white"
                      : "bg-white border border-lorenzo-dark/10 hover:border-lorenzo-accent/50"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3
                        className={`text-xl md:text-2xl font-black uppercase ${
                          exp.current ? "text-white" : "text-lorenzo-dark"
                        }`}
                      >
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`font-bold ${exp.current ? "text-lorenzo-accent" : "text-lorenzo-dark"}`}>
                          {exp.company}
                        </span>
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-lorenzo-accent"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 bg-lorenzo-accent text-lorenzo-dark text-xs font-bold uppercase rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  <div
                    className={`flex flex-wrap gap-4 text-sm mb-4 ${
                      exp.current ? "text-white/60" : "text-lorenzo-dark/60"
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <p
                    className={`text-sm md:text-base leading-relaxed ${
                      exp.current ? "text-white/80" : "text-lorenzo-dark/70"
                    }`}
                  >
                    {exp.description}
                  </p>

                  {exp.highlights && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className={`px-3 py-1 text-xs font-bold uppercase rounded-full ${
                            exp.current ? "bg-white/10 text-white/80" : "bg-lorenzo-dark/5 text-lorenzo-dark/70"
                          }`}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
