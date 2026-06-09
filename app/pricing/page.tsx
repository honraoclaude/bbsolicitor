import { PageHero } from '@/components/ui/page-hero'
import { StubPageContent } from '@/components/ui/stub-page-content'

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Costs & Funding"
        title="Transparent, Accessible Pricing"
        subtitle="Fixed fees where possible. Time-cost billing elsewhere. Flexible payment options available."
      />
      <StubPageContent
        message="Our pricing page is coming soon with a full breakdown of fixed fees by service, funding options, conditional fee arrangements (no win, no fee), and payment plans. We discuss costs transparently at your initial consultation."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />
    </>
  )
}
