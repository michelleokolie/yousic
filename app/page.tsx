import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TeamSection } from "@/components/team-section"
import { DemoSection } from "@/components/demo-section"
import { TimelineSection } from "@/components/timeline-section"
import { PostmortemSection } from "@/components/postmortem-section"
import { Navigation } from "@/components/navigation"
import { FloatingNav } from "@/components/floating-nav"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <FloatingNav />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <TimelineSection />
      <TeamSection />
      <PostmortemSection />
      <Footer />
    </main>
  )
}
