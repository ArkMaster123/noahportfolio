"use client"
import { Linkedin, Globe, Mail, ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-lorenzo-dark py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h2 className="font-brier text-4xl text-white mb-4">NOAH SANTONI</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Head of Growth @ GroundCtrl
              <br />
              Founder @ Born & Brand
              <br />
              AI Innovation & Business Growth
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Experience", "Achievements", "Services", "Speaking"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-lorenzo-accent transition-colors text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/noahsantoni/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-lorenzo-accent transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://bornandbrand.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-lorenzo-accent transition-colors text-sm"
              >
                <Globe className="w-4 h-4" />
                Born & Brand
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="mailto:noah@bornandbrand.com"
                className="flex items-center gap-2 text-white hover:text-lorenzo-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                noah@bornandbrand.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
            <p>© 2025 Noah Santoni. All rights reserved.</p>
            <p>Built with passion in London</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
