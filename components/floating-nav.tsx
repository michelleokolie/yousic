"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "demo", label: "Demo" },
  { id: "timeline", label: "Timeline" },
  { id: "team", label: "Team" },
  { id: "postmortem", label: "Postmortem" },
]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      setIsVisible(window.scrollY > 400)

      // Find active section
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id),
      }))

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i]
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={cn(
        "fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3 transition-all duration-300",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
      )}
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group flex items-center gap-3 justify-end"
          aria-label={`Go to ${section.label}`}
        >
          <span
            className={cn(
              "text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-muted-foreground",
              activeSection === section.id && "opacity-100 text-[#22577A] dark:text-[#80ED99]"
            )}
          >
            {section.label}
          </span>
          <span
            className={cn(
              "w-2.5 h-2.5 rounded-full border-2 transition-all duration-200",
              activeSection === section.id
                ? "bg-[#22577A] border-[#22577A] dark:bg-[#80ED99] dark:border-[#80ED99] scale-125"
                : "border-muted-foreground/40 group-hover:border-[#38A3A5] group-hover:scale-110"
            )}
          />
        </button>
      ))}
    </nav>
  )
}
