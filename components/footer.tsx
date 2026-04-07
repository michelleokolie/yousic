"use client"

import { Github, ExternalLink, Music } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const quickLinks = [
  { name: "Overview", href: "#overview" },
  { name: "Features", href: "#features" },
  { name: "Demo", href: "#demo" },
  { name: "Timeline", href: "#timeline" },
  { name: "Team", href: "#team" },
  { name: "Postmortem", href: "#postmortem" },
]

export function Footer() {
  return (
    <footer className="bg-[#22577A] text-white py-16">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Music className="w-6 h-6 text-[#80ED99]" />
                <h3 className="font-heading text-2xl font-bold">Yousic</h3>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                A fun, innovative and easy-to-use mobile music manager app 
                geared toward all enjoyers of music.
              </p>
              <a
                href="https://code.cs.umanitoba.ca/comp3350-winter2026/a01-g01-projectgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors font-medium"
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4 text-white/90">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#80ED99] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Info */}
            <div>
              <h4 className="font-heading font-semibold mb-4 text-white/90">Project Info</h4>
              <ul className="space-y-3 text-white/70">
                <li>
                  <span className="text-white/50">Course:</span>{" "}
                  <span>COMP 3350</span>
                </li>
                <li>
                  <span className="text-white/50">Term:</span>{" "}
                  <span>Winter 2025</span>
                </li>
                <li>
                  <span className="text-white/50">University:</span>{" "}
                  <span>University of Manitoba</span>
                </li>
                <li>
                  <span className="text-white/50">Platform:</span>{" "}
                  <span>Android</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/50 text-sm">
                Built with care by the Yousic team
              </p>
              <p className="text-white/50 text-sm">
                COMP 3350 - Software Engineering 1
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
