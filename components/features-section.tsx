"use client"

import { 
  Music, 
  Search, 
  Upload, 
  ListMusic, 
  BarChart3, 
  User,
  Play,
  Heart
} from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"

const features = [
  {
    icon: Play,
    title: "Music Playback",
    description: "Play music from your favorite artists with a seamless, intuitive interface designed for all music lovers."
  },
  {
    icon: Upload,
    title: "Upload Audio",
    description: "Upload your own personal music files for an even more personalized and centralized audio experience."
  },
  {
    icon: Search,
    title: "Lightweight Search",
    description: "Quickly locate the media that has been rattling away in the back of your mind, or find that artist you can't stop listening to."
  },
  {
    icon: ListMusic,
    title: "Custom Playlists",
    description: "Create and curate the perfect vibe with custom playlists that you can enjoy anytime, anywhere."
  },
  {
    icon: BarChart3,
    title: "Listening Statistics",
    description: "Review your personalized statistics and gain a deeper insight into your music taste over time."
  },
  {
    icon: User,
    title: "Personalized Profiles",
    description: "Save playlists and music libraries to your profile for an even smoother interaction and experience."
  },
  {
    icon: Heart,
    title: "Community Sharing",
    description: "Uploaded audios are available to any music fan, increasing the number of accessible media for everyone."
  },
  {
    icon: Music,
    title: "No Premium Required",
    description: "The days of paying for premium features are gone. Yousic gives you what you want: an easy-to-use music manager."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-secondary/30 dark:bg-[#1a4057] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground">
              Major Features
            </h2>
            <p className="mt-3 text-muted-foreground">
              Everything you need for the ultimate music experience
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <ScrollReveal key={index} variant="fade-up" delay={index * 75}>
              <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-[#38A3A5] hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#22577A] dark:bg-[#38A3A5] transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Success Metrics */}
        <ScrollReveal delay={300}>
          <div className="mt-20 rounded-2xl border border-border bg-card p-8 md:p-10">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
              Success Metrics
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-gradient-to-br from-[#22577A] to-[#38A3A5] p-6 text-white">
                <p className="font-[family-name:var(--font-heading)] text-4xl font-bold">
                  <AnimatedCounter end={15} suffix="%" />
                </p>
                <p className="mt-2 text-sm text-white/80">Month-over-month growth target</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-[#38A3A5] to-[#57CC99] p-6 text-white">
                <p className="font-[family-name:var(--font-heading)] text-4xl font-bold">
                  <AnimatedCounter end={4} suffix="-5" /> Stars
                </p>
                <p className="mt-2 text-sm text-white/80">Listener satisfaction rating goal</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              The success of Yousic is determined by community growth and listener satisfaction, 
              measured through our in-app rating system.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
