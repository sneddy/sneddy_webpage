import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/home/hero-section"
import { StatsSection } from "@/components/sections/home/stats-section"
import { FeaturedWorkSection } from "@/components/sections/home/featured-work-section"
import { CommunitySection } from "@/components/sections/home/community-section"

export const metadata: Metadata = {
  title: "Anuar Aimoldin | AI Researcher, Kaggle Master, Community Leader",
  description:
    "Portfolio of Anuar Aimoldin: AI researcher, Kaggle Competitions Master (#14 global), keynote speaker, and community builder advancing AI through research, competitions, and education.",
  alternates: { canonical: "https://anuar.best/" },
  openGraph: {
    title: "Anuar Aimoldin | AI Researcher & Kaggle Master",
    description:
      "Explore Anuar Aimoldin’s work across AI research, Kaggle competitions, publications, and community initiatives in Central Asia and beyond.",
    url: "https://anuar.best/",
    siteName: "anuar.best",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuar Aimoldin | AI Researcher & Kaggle Master",
    description:
      "AI researcher, Kaggle Competitions Master (#14), and community leader advancing AI through research, competitions, and education.",
  },
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <StatsSection />
      <FeaturedWorkSection />
      <CommunitySection />
    </main>
  )
}
