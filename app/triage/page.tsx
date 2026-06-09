import { PageHero } from '@/components/ui/page-hero'
import { StubPageContent } from '@/components/ui/stub-page-content'

export default function TriagePage() {
  return (
    <>
      <PageHero
        label="Matter Triage"
        title="Find Your Right Solution"
        subtitle="Our quick assessment tool connects you to the right service and solicitor for your needs."
      />
      <StubPageContent
        message="Our Matter Triage wizard is coming soon — a guided conversation that asks key questions about your situation and recommends the best-fit service, fee structure, and solicitor for your matter."
        ctaLabel="Talk to Ask Briton"
        ctaHref="/contact"
      />
    </>
  )
}
