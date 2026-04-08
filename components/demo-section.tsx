"use client";

import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export function DemoSection() {
  return (
    <section id="demo" className="bg-white dark:bg-[#22577A] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground">
              Product Demonstration
            </h2>
            <p className="mt-3 text-muted-foreground">
              See Yousic in action with our walkthrough of primary user flows
            </p>
          </div>
        </ScrollReveal>

        {/* Video Section */}
        <ScrollReveal variant="zoom-in" delay={100}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="aspect-video w-full">
              <video
                className="h-full w-full object-cover"
                controls
                preload="none"
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </ScrollReveal>

        {/* User Flow Screenshots */}
        <div className="mt-20">
          <ScrollReveal>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
              Primary User Flows
            </h3>
          </ScrollReveal>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <ScrollReveal variant="fade-right" delay={100}>
              <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-xl">
                <div className="mb-4 overflow-hidden rounded-xl bg-secondary/50 dark:bg-[#1a4057] p-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-t11OLgsfRHV9H1wcRowZEWWUKssYEw.png"
                    alt="Yousic login screen"
                    width={300}
                    height={600}
                    className="mx-auto h-72 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                  Authentication Flow
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Simple and intuitive sign up and login process. Users can
                  quickly create an account or access their existing profile
                  with minimal friction.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={200}>
              <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-xl">
                <div className="mb-4 overflow-hidden rounded-xl bg-secondary/50 dark:bg-[#1a4057] p-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8tHntaHaONPHgXX3PUW2BQeST0pX6S.png"
                    alt="Yousic profile and statistics screen"
                    width={300}
                    height={600}
                    className="mx-auto h-72 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                  Profile & Statistics
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  View your listening history, top songs, audiobooks, and
                  podcasts. Upload your own audio files and track your listening
                  time.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Feature Highlights */}
        <ScrollReveal delay={300}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Browse Music",
                desc: "Explore tracks from various artists",
              },
              {
                title: "Play & Control",
                desc: "Full playback controls with queue management",
              },
              {
                title: "Upload Audio",
                desc: "Add your own music files to the library",
              },
              {
                title: "Track Stats",
                desc: "View detailed listening statistics",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-gradient-to-br from-[#22577A] to-[#38A3A5] p-5 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-white">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-[#C7F9CC]">{item.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
