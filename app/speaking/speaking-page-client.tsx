"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, MapPin, Calendar, Users, ExternalLink, ChevronRight, Mic, X } from "lucide-react"
import Header from "@/components/header"

interface Event {
  id: string
  title: string
  date: string
  location: string
  audience: string
  description: string
  type: "keynote" | "featured" | "invited" | "hackathon" | "community"
  photo?: string
  link?: string
  featured?: boolean
  tags: string[]
}

const events: Event[] = [
  {
    id: "nextjs-london",
    title: "Next.js London Watch Party",
    date: "October 22, 2025",
    location: "London, UK",
    audience: "Developer Community",
    description:
      "Speaking at the Next.js London Watch Party as Head of Growth at GroundCtrl, covering MVPs, AI-powered app migrations, and how we help businesses escape legacy tech debt. Presented to a live London audience alongside the global Next.js conference stream.",
    type: "keynote",
    photo: "/events/nextjsconference.jpeg",
    featured: true,
    tags: ["Next.js", "AI", "GroundCtrl", "London"],
  },
  {
    id: "vercel-v0",
    title: "How v0 Became whatAIdea's Chief Prototype Officer",
    date: "March 6, 2025",
    location: "Online (Vercel Community)",
    audience: "Global Developer Community",
    description:
      "Invited by Vercel staff to share how v0 revolutionised the prototyping process at whatAIdea, making it an integral part of the development workflow. Hosted on Vercel's official community platform alongside Vercel's Amy Egan.",
    type: "featured",
    photo: "/events/vercelv0event.png",
    link: "https://vercel.com",
    featured: true,
    tags: ["Vercel", "v0", "Prototyping", "AI"],
  },
  {
    id: "gibraltar-saif",
    title: "RAION Sovereign AI Forum (SAIF)",
    date: "March 24–26, 2024",
    location: "Gibraltar",
    audience: "25 hand-picked global leaders",
    description:
      "Invited to join an exclusive group of 25 leaders and experts in emerging tech and defence from the US, UK, Europe, Asia and Space. The RAION SAIF unites global AI, business and government leaders to advance society through the 4th industrial revolution. Sponsored by raion.io.",
    type: "invited",
    tags: ["Defence", "Sovereign AI", "Gibraltar", "Government"],
    featured: true,
  },
  {
    id: "lightning-ai",
    title: "Lightning AI: Replit, Windsurf, Cursor",
    date: "2025",
    location: "London, UK",
    audience: "AI Developer Community",
    description:
      "Speaking at a Lightning AI community event showcasing the vibe-coding toolchain, covering Replit, Windsurf, and Cursor and how to build production-grade products with AI-first development workflows.",
    type: "community",
    photo: "/events/lightningaielevenlabsclone.jpeg",
    tags: ["Vibe Coding", "Cursor", "Replit", "Windsurf"],
  },
  {
    id: "surrey-devs",
    title: "SurreyDevs: Build Your Own Chatbot",
    date: "January 25, 2024",
    location: "Surrey, UK",
    audience: "Local Developer Community",
    description:
      "Delivered a presentation on \"How to build your own chatbot for less than a cup of coffee\", sharing expertise in accessible, affordable AI solutions using Flowise and open-source LLMs.",
    type: "community",
    photo: "/events/SurreyDevs.jpeg",
    tags: ["Flowise", "LLMs", "Chatbots", "Open Source"],
  },
  {
    id: "drupal-london",
    title: "Drupal Meetup London",
    date: "February 20, 2024",
    location: "London, UK",
    audience: "Drupal & Web Developer Community",
    description:
      "Presented on integrating Flowise with LLM models and datasets, demonstrating how to create intelligent, conversational agents that enhance user engagement and automate site interactions.",
    type: "community",
    photo: "/events/DrupalAIConference.jpeg",
    tags: ["Drupal", "Flowise", "LLMs", "Conversational AI"],
  },
  {
    id: "futures-forum",
    title: "Futures Forum: AI/LLM Meetup Launch",
    date: "November 21, 2023",
    location: "London, UK",
    audience: "AI & Tech Community",
    description:
      "Joined the inaugural Futures Forum exploring how generative AI and LLMs are shaping the world, participating in talks and networking with industry peers at this landmark early community event.",
    type: "community",
    tags: ["Generative AI", "LLMs", "Community"],
  },
]

const typeConfig = {
  keynote: { label: "Keynote", color: "bg-lorenzo-accent text-lorenzo-dark" },
  featured: { label: "Featured Speaker", color: "bg-white text-lorenzo-dark" },
  invited: { label: "Invited Leader", color: "bg-blue-400 text-white" },
  hackathon: { label: "Hackathon", color: "bg-orange-400 text-white" },
  community: { label: "Community", color: "bg-white/20 text-white" },
}

export default function SpeakingPageClient() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  const featured = events.filter((e) => e.featured)
  const past = events.filter((e) => !e.featured)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-lorenzo-dark text-white">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
          {/* Accent blob */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lorenzo-accent/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lorenzo-accent/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/40 hover:text-lorenzo-accent text-sm font-bold uppercase tracking-widest transition-colors mb-10"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-lorenzo-accent rounded-2xl flex items-center justify-center">
                  <Mic className="w-6 h-6 text-lorenzo-dark" />
                </div>
                <span className="text-lorenzo-accent font-bold uppercase tracking-widest text-sm">Speaking</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tight leading-[0.85] font-brier text-white">
                ON
                <br />
                <span className="text-lorenzo-accent">STAGE</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
                From sovereign wealth fund AI forums in Gibraltar to Vercel's global community. Keynoting, presenting,
                and building in public across AI, developer tooling, and vibe coding.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-14 flex flex-wrap gap-8"
            >
              {[
                { value: `${events.length}+`, label: "Events" },
                { value: "4", label: "Countries" },
                { value: "2023–", label: "Speaking Since" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-lorenzo-accent pl-4">
                  <div className="text-3xl font-black text-lorenzo-accent">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-lorenzo-accent mb-10"
            >
              Featured
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featured.map((event, i) => (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-lorenzo-accent/40 transition-all duration-300 ${
                    i === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  {event.photo && (
                    <button
                      onClick={() => setLightbox(event.photo!)}
                      className={`block w-full overflow-hidden ${i === 0 ? "h-72 md:h-96" : "h-56"}`}
                    >
                      <Image
                        src={event.photo}
                        alt={event.title}
                        width={1200}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </button>
                  )}

                  {/* If no photo for featured item, show large accent block */}
                  {!event.photo && (
                    <div className={`w-full ${i === 0 ? "h-72 md:h-96" : "h-56"} bg-gradient-to-br from-lorenzo-accent/20 to-blue-500/20 flex items-center justify-center`}>
                      <Mic className="w-20 h-20 text-lorenzo-accent/40" />
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${typeConfig[event.type].color}`}>
                        {typeConfig[event.type].label}
                      </span>
                      {event.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white/60">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl md:text-2xl font-black uppercase mb-3 group-hover:text-lorenzo-accent transition-colors">
                      {event.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-white/40 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        {event.audience}
                      </span>
                    </div>

                    <p className="text-white/60 text-sm leading-relaxed">{event.description}</p>

                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-5 text-xs font-bold uppercase tracking-widest text-lorenzo-accent hover:gap-3 transition-all"
                      >
                        View Event <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="px-6 md:px-12 pb-32 bg-lorenzo-light/5">
          <div className="max-w-6xl mx-auto pt-20">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-10"
            >
              Past Events
            </motion.h2>

            <div className="space-y-px">
              {past.map((event, i) => (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group flex flex-col md:flex-row gap-6 py-8 border-b border-white/10 hover:border-white/20 transition-colors"
                >
                  {/* Photo thumbnail */}
                  {event.photo ? (
                    <button
                      onClick={() => setLightbox(event.photo!)}
                      className="shrink-0 w-full md:w-48 h-32 rounded-2xl overflow-hidden"
                    >
                      <Image
                        src={event.photo}
                        alt={event.title}
                        width={400}
                        height={250}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </button>
                  ) : (
                    <div className="shrink-0 w-full md:w-48 h-32 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Mic className="w-8 h-8 text-white/20" />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${typeConfig[event.type].color}`}>
                        {typeConfig[event.type].label}
                      </span>
                    </div>
                    <h3 className="text-lg font-black uppercase mb-2 group-hover:text-lorenzo-accent transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-xs text-white/40 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {event.location}
                      </span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{event.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {event.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-full text-xs text-white/30 bg-white/5 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 self-center">
                    <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-lorenzo-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 py-24 bg-lorenzo-accent">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-5xl md:text-7xl font-black uppercase text-lorenzo-dark leading-[0.9] font-brier mb-6">
                BOOK ME
                <br />
                TO SPEAK
              </h2>
              <p className="text-lorenzo-dark/70 text-lg mb-10 max-w-xl mx-auto">
                Available for keynotes, panels, and workshops on AI adoption, vibe coding, MVP development, and growth strategy.
              </p>
              <a
                href="mailto:noah.santoni@gmail.com"
                className="inline-flex items-center gap-3 bg-lorenzo-dark text-white px-8 py-4 rounded-full font-black uppercase tracking-wider hover:bg-lorenzo-dark/90 transition-colors text-sm"
              >
                <Mic className="w-4 h-4" />
                noah.santoni@gmail.com
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-5 h-5 text-white" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Event photo"
                width={1400}
                height={900}
                className="w-full h-full object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
