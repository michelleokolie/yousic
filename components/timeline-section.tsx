"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { CheckCircle2, Code2, Rocket, Users, Lightbulb, Bug } from "lucide-react"

const timelineEvents = [
  {
    iteration: "Iteration 1",
    date: "Jan - Feb 2026",
    title: "Foundation & Core Features",
    description: "Set up project architecture, implemented user authentication, and built the basic music library management system.",
    icon: Code2,
    highlights: ["User authentication", "Basic UI scaffolding", "Database schema design"],
    status: "completed",
  },
  {
    iteration: "Iteration 2",
    date: "Feb - Mar 2026",
    title: "Audio Playback & Statistics",
    description: "Integrated audio playback functionality, and implemented custom playlists",
    icon: Rocket,
    highlights: ["Audio player integration", "Playlist features",],
    status: "completed",
  },
  {
    iteration: "Iteration 3",
    date: "Mar - Apr 2026",
    title: "Polish & Final Features",
    description: "Refined UI/UX, added user dashboard, implemented search functionality, added custom upload feature, and implemented listening statistics",
    icon: Users,
    highlights: ["Stats tracking", "Search & filters", "Custom audio uploads"],
    status: "completed",
  },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 bg-white dark:bg-[#1a4057]">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#22577A] dark:text-[#80ED99] mb-4">
              Development Timeline
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our journey building Yousic across three development iterations
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 h-[calc(100%-4rem)] w-0.5 bg-gradient-to-b from-[#22577A] via-[#38A3A5] to-[#57CC99] dark:from-[#80ED99] dark:via-[#57CC99] dark:to-[#38A3A5]" />

          {timelineEvents.map((event, index) => {
            const Icon = event.icon
            const isLeft = index % 2 === 0

            return (
              <ScrollReveal
                key={event.iteration}
                variant={isLeft ? "fade-right" : "fade-left"}
                delay={index * 150}
              >
                <div className={`relative flex items-start gap-8 mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  {/* Content card */}
                  <div className={`flex-1 ml-20 md:ml-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-card dark:bg-[#22577A]/50 rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
                        <span className="text-xs font-mono text-[#38A3A5] dark:text-[#57CC99] bg-[#38A3A5]/10 dark:bg-[#57CC99]/10 px-2 py-1 rounded">
                          {event.iteration}
                        </span>
                        <span className="text-xs text-muted-foreground">{event.date}</span>
                      </div>
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {event.description}
                      </p>
                      <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                        {event.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center gap-1 text-xs bg-[#C7F9CC]/50 dark:bg-[#80ED99]/10 text-[#22577A] dark:text-[#C7F9CC] px-2 py-1 rounded-full"
                          >
                            <CheckCircle2 className="w-3 h-3" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-[#22577A] border-4 border-[#38A3A5] dark:border-[#57CC99] flex items-center justify-center shadow-lg z-10">
                    <Icon className="w-5 h-5 text-[#22577A] dark:text-[#80ED99]" />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden md:block flex-1" />
                </div>
              </ScrollReveal>
            )
          })}

          {/* Final node */}
          <ScrollReveal delay={450}>
            <div className="relative flex justify-center">
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#57CC99] to-[#22577A] dark:from-[#80ED99] dark:to-[#38A3A5] flex items-center justify-center shadow-lg z-10">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <div className="mt-20 text-center">
                <p className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[#22577A] dark:text-[#80ED99]">
                  Project Complete
                </p>
                <p className="text-sm text-muted-foreground">April 2026</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
