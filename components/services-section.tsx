"use client"

import { motion } from "framer-motion"
import { ArrowRight, Rocket, Bot, BarChart3, Lightbulb, Wrench, Presentation } from "lucide-react"

const services = [
  {
    icon: Rocket,
    title: "RAPID MVPs",
    description: "Transform your idea into a working product in weeks, not months. Validate fast, iterate faster.",
    cta: "Build with us",
  },
  {
    icon: Bot,
    title: "AI Automations",
    description: "Intelligent chatbots, agent swarms, and workflow automation that actually deliver ROI.",
    cta: "Automate now",
  },
  {
    icon: BarChart3,
    title: "AI Audits",
    description: "Comprehensive assessment of your AI readiness with actionable recommendations.",
    cta: "Get audited",
  },
  {
    icon: Lightbulb,
    title: "AI Strategy",
    description: "Predictive analytics and AI implementation roadmaps for businesses of all sizes.",
    cta: "Strategize",
  },
  {
    icon: Wrench,
    title: "RFP Generation",
    description: "AI-powered proposal generation that wins contracts and closes deals faster.",
    cta: "Win more",
  },
  {
    icon: Presentation,
    title: "Workshops",
    description: "Interactive sessions including 'When not to use AI' across HR, Manufacturing, and Publishing.",
    cta: "Book session",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-lorenzo-dark py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-white/40 mb-4">WHAT I DO</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-tight text-white">
            <span className="block font-sans leading-[0.85]">SERVICES &</span>
            <span className="block font-brier text-lorenzo-accent">EXPERTISE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-lorenzo-accent/50 transition-all duration-300 hover:bg-white/10"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-lorenzo-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lorenzo-accent/30 transition-colors">
                <service.icon className="w-7 h-7 text-lorenzo-accent" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black text-white uppercase mb-3">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">{service.description}</p>

              {/* CTA */}
              <button className="flex items-center gap-2 text-lorenzo-accent font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://bornandbrand.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-lorenzo-accent text-lorenzo-dark px-8 py-4 rounded-full text-sm font-black uppercase hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            EXPLORE BORN & BRAND
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
