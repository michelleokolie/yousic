"use client"

import { Github, Linkedin, FolderCode, Mail, Code, ClipboardCheck, Smartphone, Palette, BookMarkedIcon } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const teamMembers = [
   {
    name: "Tife Adegoke",
    role: "Documentation Lead",
    contributions: [
       "Developed Integration and End-to-End (E2E) test suites",
      "Authored the project ReadMe and Iteration documentation",
      "Implemented Search functionality and Log-out logic",
      "Added the Logout logic and Logout confirmation UI",
    ],

    skills: ["E2E Testing", "Integration Testing", "Technical Writing"],
    icon: BookMarkedIcon,
    github: "https://code.cs.umanitoba.ca/tife_adegoke",

  },
  {
    name: "Alvin Elendu",
    role: "Repository Manager",
    contributions: [
      "Implemented the Playlist management system",
      "Developed the drag-and-drop Queue reordering feature",
      "Created user authentication and profile features",
      "Assisted with logic implementation and UI refinement",
    ],
    skills: ["Android UI", "Material Design", "XML"],
    icon: FolderCode,
    github: "https://code.cs.umanitoba.ca/Alvin777",

  },
  {
    name: "Michelle Okolie",
    role: "Technical Lead",
    contributions: [
      "Created the User Stats feature for tracking listening habits",       
      "Designed and implemented the complete SQL persistence layer",
      "Established branching strategy and directed major refactoring",
      "Facilitated team meetings and technical sprint planning",
      "Architected the foundational logic and core system functionality",
    ],
    skills: ["System Architecture", "SQLite", "Data Modeling", "System Logiv"],
    icon: Code,
    github: "https://code.cs.umanitoba.ca/okoliem",
  },
  {
    name: "Richard Shalchi",
    role: "Project Coordinator",
    contributions: [
      "Applied HCI principles to Library, Mini-player and all other component design",
      "Developed the primary Now Playing UI and playback components",
      "Co-developed foundational logic and core user upload features",
      "Led team meetings and managed project reflection worksheets",
      "Recorded meeting minutes and coordinated task distribution",       
    ],
    skills: ["HCI Design", "MediaPlayer API", "Project Coordination", "UI/UX"],
    icon: ClipboardCheck,
    github: "https://code.cs.umanitoba.ca/richardshalchi",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet the Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              HighSchoolMusical Inc. - The developers behind Yousic
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 100}>
              <div className="group bg-card rounded-2xl p-6 border border-border hover:border-[#38A3A5] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#22577A] to-[#38A3A5] flex items-center justify-center text-white">
                    <member.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-[#22577A] dark:group-hover:text-[#57CC99] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[#38A3A5] text-sm font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Contributions
                  </h4>
                  <ul className="space-y-1">
                    {member.contributions.map((contribution) => (
                      <li
                        key={contribution}
                        className="text-muted-foreground text-sm flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#57CC99] mt-1.5 shrink-0" />
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-[#22577A]/10 dark:bg-[#57CC99]/20 text-[#22577A] dark:text-[#57CC99] text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={member.github}
                    className="text-muted-foreground hover:text-[#22577A] dark:hover:text-[#57CC99] transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="text-muted-foreground hover:text-[#22577A] dark:hover:text-[#57CC99] transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-[#22577A] dark:hover:text-[#57CC99] transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
