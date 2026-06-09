import { PageHero } from '@/components/ui/page-hero'
import { StubPageContent } from '@/components/ui/stub-page-content'

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Decades of Experience. Three Generations of Trust."
        subtitle="Our full story and team profiles are coming soon."
      />
      <StubPageContent
        message="We're preparing detailed information about our team, firm history, values, and why clients choose us. Our About section will include team bios, firm milestones, and our commitment to excellence."
        ctaLabel="Get in touch"
        ctaHref="/contact"
      />
    </>
  )
}
