"use client"

import { Music, Play, Users, Upload } from "lucide-react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"

export function HeroSection() {
  return (
    <section id="overview" className="relative bg-white dark:bg-[#22577A] pt-16">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div className="space-y-8">
            <ScrollReveal variant="fade-up">
              <div>
                <h1 className="font-[family-name:var(--font-heading)] text-5xl font-bold text-foreground sm:text-6xl lg:text-7xl tracking-tight">
                  Yousic
                </h1>
                <p className="mt-3 text-lg text-[#38A3A5] dark:text-[#57CC99] font-medium">
                  Your Personal Music Manager
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={100}>
              <p className="text-base leading-relaxed text-muted-foreground">
                Yousic is a fun, innovative and easy-to-use mobile music manager app 
                geared toward all enjoyers of music, helping them to enjoy listening 
                to all of their favourite tunes. Whether you listen to music 24/7 or 
                only during special occasions, Yousic offers a seamless way to browse, 
                play, organize and curate all your favourite tracks.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200}>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                  <Play className="h-4 w-4 text-[#22577A] dark:text-[#80ED99]" />
                  <span>Play Music</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                  <Upload className="h-4 w-4 text-[#22577A] dark:text-[#80ED99]" />
                  <span>Upload Audio</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                  <Users className="h-4 w-4 text-[#22577A] dark:text-[#80ED99]" />
                  <span>Local Sharing</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={300}>
              <div className="rounded-xl border border-border bg-secondary/50 dark:bg-[#1a4057]/50 p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wide text-[#22577A] dark:text-[#80ED99]">
                  Vision Statement
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  At HighSchoolMusical Inc., we want to make the process of listening to music 
                  as simple as possible. Whether it&apos;s a teen with their first device looking 
                  to find the media that will later become their teenage anthem, or your older 
                  loved one trying to find the media that makes them feel young again, Yousic 
                  wants to make that process as simple as possible.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal variant="fade-up" delay={400}>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#22577A] dark:text-[#80ED99]">
                    <AnimatedCounter end={3} suffix="+" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Iterations</p>
                </div>
                <div className="text-center">
                  <div className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#22577A] dark:text-[#80ED99]">
                    <AnimatedCounter end={8} suffix="+" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Features</p>
                </div>
                <div className="text-center">
                  <div className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#22577A] dark:text-[#80ED99]">
                    <AnimatedCounter end={4} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Team Members</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* App Screenshots */}
          <ScrollReveal variant="fade-left" delay={200}>
            <div className="relative flex justify-center gap-4 lg:justify-end">
              <div className="relative h-[480px] w-[230px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/yousic/login.png"
                  alt="Yousic app login screen showing Sign Up and Log In buttons"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative hidden h-[480px] w-[230px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border sm:block transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/yousic/profile.png"
                  alt="Yousic app profile screen showing user listening statistics"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Target Users */}
        <div className="mt-24">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
              Intended Users
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal variant="fade-up" delay={0}>
              <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-[#38A3A5]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#22577A]">
                  <Music className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                  Casual Listeners
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  People who enjoy music occasionally and want a simple, hassle-free 
                  experience without premium features or complex interfaces.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={100}>
              <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-[#38A3A5]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#38A3A5]">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                  Musicophiles
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Dedicated music lovers who want detailed listening statistics, 
                  custom playlists, and deeper insights into their music taste.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={200}>
              <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-[#38A3A5]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#57CC99]">
                  <Upload className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                  Content Creators
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Users who upload their own audio files for a personalized, 
                  centralized all-encompassing audio experience.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
