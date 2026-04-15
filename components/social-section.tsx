"use client"

import { motion } from "framer-motion"
import { Linkedin, Globe, Mail, Coffee } from "lucide-react"

export default function SocialSection() {
  return (
    <section id="social-section" className="relative bg-[#F5F1E8] text-black py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none text-lorenzo-dark lg:text-6xl">
            LET'S
          </h2>
          <h3 className="text-4xl md:text-6xl font-brier mt-2 lg:text-6xl leading-10 text-lorenzo-dark">CONNECT</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-lorenzo-dark rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Keen to explore how AI can spice up your business? Let's chat over a virtual coffee (or a real one, if
            you're in London!).
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/noahsantoni/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 hover:bg-lorenzo-accent hover:text-lorenzo-dark text-white px-6 py-4 rounded-2xl font-bold uppercase text-sm transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://bornandbrand.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 hover:bg-lorenzo-accent hover:text-lorenzo-dark text-white px-6 py-4 rounded-2xl font-bold uppercase text-sm transition-all duration-300"
            >
              <Globe className="w-5 h-5" />
              Born & Brand
            </a>
            <a
              href="mailto:noah@bornandbrand.com"
              className="flex items-center gap-3 bg-lorenzo-accent text-lorenzo-dark px-6 py-4 rounded-2xl font-bold uppercase text-sm hover:scale-105 transition-transform duration-300"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
            <Coffee className="w-4 h-4" />
            <span>London, England, United Kingdom</span>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-lorenzo-dark/60 mb-4 uppercase tracking-wider">Languages</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { lang: "English", level: "Native" },
              { lang: "Spanish", level: "Professional" },
              { lang: "Italian", level: "Professional" },
              { lang: "Portuguese", level: "Working" },
            ].map((item) => (
              <span key={item.lang} className="px-4 py-2 bg-lorenzo-dark/5 rounded-full text-sm text-lorenzo-dark">
                <span className="font-bold">{item.lang}</span>
                <span className="text-lorenzo-dark/60"> · {item.level}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
