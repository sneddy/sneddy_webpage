import { HeroSection } from "@/components/sections/home/hero-section"
import { StatsSection } from "@/components/sections/home/stats-section"
import { FeaturedWorkSection } from "@/components/sections/home/featured-work-section"
import { CommunitySection } from "@/components/sections/home/community-section"

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
