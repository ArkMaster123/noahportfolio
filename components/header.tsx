"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoColor, setLogoColor] = useState<"white" | "dark">("dark")

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrolled(currentScroll >= 300)

      let newColor: "white" | "dark" = "dark"

      if (currentScroll > 2) {
        newColor = "white"
      }

      const headerOffset = 100

      const sections = ["experience", "achievements", "services", "speaking", "social-section"]

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= headerOffset && rect.bottom > headerOffset) {
            // Alternate colors based on section background
            if (sectionId === "achievements" || sectionId === "speaking") {
              newColor = "dark"
            } else {
              newColor = "white"
            }
          }
        }
      })

      setLogoColor(newColor)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center items-start mix-blend-difference"
          >
            <h1
              className={`font-brier text-3xl leading-none mt-1 tracking-tight font-bold transition-colors duration-300 ${
                logoColor === "white" ? "text-white" : "text-lorenzo-dark"
              }`}
            >
              NOAH SANTONI
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mix-blend-difference"
          >
            <Link href="/2025-wrapped">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#c8f550] to-[#a8e063] rounded-full text-black font-semibold text-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>2025 Wrapped</span>
              </motion.div>
            </Link>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 bg-lorenzo-dark/80 border border-white/30 hover:bg-lorenzo-dark rounded-lg transition-colors text-white px-3 py-2.5"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-lorenzo-dark/95 backdrop-blur-xl z-40 flex items-center justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
              className="text-center"
            >
              <motion.ul className="space-y-6 text-4xl md:text-6xl font-black uppercase text-white">
                {["ABOUT", "EXPERIENCE", "ACHIEVEMENTS", "SERVICES", "SPEAKING", "2025 WRAPPED", "CONTACT"].map(
                  (item) => (
                    <motion.li
                      key={item}
                      variants={{
                        open: { opacity: 1, y: 0, rotate: 0 },
                        closed: { opacity: 0, y: 20, rotate: -5 },
                      }}
                    >
                      {item === "2025 WRAPPED" ? (
                        <Link
                          href="/2025-wrapped"
                          className="inline-flex items-center gap-3 hover:text-lorenzo-accent transition-colors duration-300 hover:scale-110 transform"
                          onClick={() => setMenuOpen(false)}
                        >
                          <Sparkles className="w-8 h-8" />
                          {item}
                        </Link>
                      ) : item === "SPEAKING" ? (
                        <Link
                          href="/speaking"
                          className="inline-block hover:text-lorenzo-accent transition-colors duration-300 hover:scale-110 transform"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      ) : (
                        <a
                          href={`#${item.toLowerCase()}`}
                          className="inline-block hover:text-lorenzo-accent transition-colors duration-300 hover:scale-110 transform"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item}
                        </a>
                      )}
                    </motion.li>
                  ),
                )}
              </motion.ul>

              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                className="mt-12 flex justify-center gap-6"
              >
                {["LINKEDIN", "BORN & BRAND", "GROUNDCTRL"].map((social) => (
                  <motion.a
                    key={social}
                    whileHover={{ scale: 1.1, color: "#c8f550" }}
                    href={
                      social === "LINKEDIN"
                        ? "https://www.linkedin.com/in/noahsantoni/"
                        : social === "BORN & BRAND"
                          ? "https://bornandbrand.com"
                          : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white/60 hover:text-lorenzo-accent transition-colors"
                  >
                    {social}
                  </motion.a>
                ))}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
