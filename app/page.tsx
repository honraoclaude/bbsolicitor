import { HeroSection } from '@/components/home/hero-section'
import { TrustStrip } from '@/components/home/trust-strip'
import { ExpertiseGrid } from '@/components/home/expertise-grid'
import { OfficesMapBlock } from '@/components/home/offices-map-block'
import { WhyBritonSection } from '@/components/home/why-briton-section'
import { InsightsPreview } from '@/components/home/insights-preview'
import { CTABand } from '@/components/home/cta-band'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustStrip />
      <ExpertiseGrid />
      <OfficesMapBlock />
      <WhyBritonSection />
      <InsightsPreview />
      <CTABand />
    </main>
  )
}
