"use client"

import { CheckCircle2, XCircle, Lightbulb, RotateCcw, Code2, Clock, AlertTriangle, Layers } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function PostmortemSection() {
  return (
    <section id="postmortem" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Project Postmortem
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Reflecting on our development journey and lessons learned
            </p>
          </div>
        </ScrollReveal>

        {/* Iteration 2 Improvement */}
        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-[#22577A] to-[#38A3A5] rounded-2xl p-8 text-white">
              <h3 className="font-heading text-2xl font-bold mb-4 flex items-center gap-3">
                <Lightbulb className="w-7 h-7" />
                One Thing We Would Improve from Iteration 2
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                [One specific aspect of this iteration we needed to  improve was our project scheduling and time
                estimation. Because this iteration involved our most significant growth, we underestimated
                how long the implementation would take. This later resulted in team conflict and submission
                anxiety. To resolve this, the HighSchoolMusical group implemented strict internal milestones
                before deadline. Additionally, the team broke down future large features down to smaller
                feasible tasks that can be approached/tackled by other team members. As evidence, in iteration 3, the
                team submitted all project related deliverables days ahead of the deadline.]
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* What Went Well / What Went Wrong */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <ScrollReveal delay={200}>
            <div className="bg-card rounded-2xl p-8 border border-border h-full">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#57CC99]" />
                What Went Well
              </h3>
              <ul className="space-y-4">
                {[
                  "Team collaboration and communication",
                  "Clear division of responsibilities",
                  "Consistent use of version control",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#57CC99] mt-2 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-card rounded-2xl p-8 border border-border h-full">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-red-500" />
                What Went Wrong
              </h3>
              <ul className="space-y-4">
                {[
                  "Underestimated time for certain features",
                  "Some integration challenges",
                  "Testing coverage could be better",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Technical Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          <ScrollReveal delay={400}>
            <div className="bg-card rounded-xl p-6 border border-border text-center hover:border-[#38A3A5] transition-colors">
              <Layers className="w-8 h-8 text-[#22577A] dark:text-[#57CC99] mx-auto mb-3" />
              <h4 className="font-heading font-semibold text-foreground mb-2">Architecture</h4>
              <p className="text-muted-foreground text-sm">
                [MVVM, Clean Architecture, etc.]
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="bg-card rounded-xl p-6 border border-border text-center hover:border-[#38A3A5] transition-colors">
              <Code2 className="w-8 h-8 text-[#22577A] dark:text-[#57CC99] mx-auto mb-3" />
              <h4 className="font-heading font-semibold text-foreground mb-2">Project Size</h4>
              <p className="text-muted-foreground text-sm">
                [Lines of code, files, classes]
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="bg-card rounded-xl p-6 border border-border text-center hover:border-[#38A3A5] transition-colors">
              <Clock className="w-8 h-8 text-[#22577A] dark:text-[#57CC99] mx-auto mb-3" />
              <h4 className="font-heading font-semibold text-foreground mb-2">Time Distribution</h4>
              <p className="text-muted-foreground text-sm">
                [Coding, testing, design, meetings]
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <div className="bg-card rounded-xl p-6 border border-border text-center hover:border-[#38A3A5] transition-colors">
              <AlertTriangle className="w-8 h-8 text-[#22577A] dark:text-[#57CC99] mx-auto mb-3" />
              <h4 className="font-heading font-semibold text-foreground mb-2">Technical Debt</h4>
              <p className="text-muted-foreground text-sm">
                [Areas needing refactoring]
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Lessons Learned & If Starting Over */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <ScrollReveal delay={800}>
            <div className="bg-secondary/50 dark:bg-secondary/20 rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-[#38A3A5]" />
                Lessons Learned
              </h3>
              <ul className="space-y-4">
                {[
                  "Importance of early integration",
                  "Value of clear communication",
                  "Benefits of test-driven development",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#38A3A5] font-bold">{index + 1}.</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={900}>
            <div className="bg-secondary/50 dark:bg-secondary/20 rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <RotateCcw className="w-6 h-6 text-[#38A3A5]" />
                If We Started Over
              </h3>
              <ul className="space-y-4">
                {[
                  "Establish coding standards earlier",
                  "Implement CI/CD from day one",
                  "Allocate more time for testing",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#38A3A5] font-bold">{index + 1}.</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Course Techniques */}
        <ScrollReveal delay={1000}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 text-center">
                Course Techniques Applied
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "User Stories",
                  "Acceptance Tests",
                  "Unit Testing",
                  "Integration Testing",
                  "Code Reviews",
                  "Agile/Scrum",
                  "Version Control",
                  "CI/CD",
                  "Design Patterns",
                  "SOLID Principles",
                ].map((technique) => (
                  <span
                    key={technique}
                    className="px-4 py-2 bg-[#22577A] text-white rounded-full font-medium text-sm hover:bg-[#38A3A5] transition-colors cursor-default"
                  >
                    {technique}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
