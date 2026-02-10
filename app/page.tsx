import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/home/hero-section"
import { StatsSection } from "@/components/sections/home/stats-section"
import { FeaturedWorkSection } from "@/components/sections/home/featured-work-section"
import { CommunitySection } from "@/components/sections/home/community-section"

export const metadata: Metadata = {
  title: "Anuar Aimoldin | AI Researcher & Industry Leader",
  description:
    "Portfolio of Anuar Aimoldin: AI researcher and industry leader, Kaggle Competitions Master (#14 global), keynote speaker, and community builder advancing AI through research, competitions, and education.",
  alternates: { canonical: "https://anuar.best/" },
  openGraph: {
    title: "Anuar Aimoldin | AI Researcher & Industry Leader",
    description:
      "Explore Anuar Aimoldin’s work across AI research, Kaggle competitions, publications, and community initiatives in Central Asia and beyond.",
    url: "https://anuar.best/",
    siteName: "anuar.best",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuar Aimoldin | AI Researcher & Industry Leader",
    description:
      "AI researcher and industry leader, Kaggle Competitions Master (#14), and community leader advancing AI through research, competitions, and education.",
  },
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anuar Aimoldin",
    url: "https://anuar.best",
    image: "https://anuar.best/opengraph-image",
    jobTitle: "AI Researcher & Industry Leader",
    description:
      "AI researcher and industry leader specializing in computer vision, medical imaging, and competitive machine learning.",
    sameAs: [
      "https://github.com/sneddy",
      "https://www.linkedin.com/in/anuar-aimoldin/",
      "https://scholar.google.com/citations?user=SE9vprcAAAAJ",
      "https://t.me/sneddy",
      "https://dsml.kz",
    ],
  }

  return (
    <main className="overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection />
      <StatsSection />
      <FeaturedWorkSection />
      <CommunitySection />
    </main>
  )
}
