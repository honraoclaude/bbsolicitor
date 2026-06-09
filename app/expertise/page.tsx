import { PageHero } from '@/components/ui/page-hero'
import { ServiceGrid } from '@/components/expertise/service-grid'
import { AnimatedSection } from '@/components/ui/animated-section'
import { SectionLabel } from '@/components/ui/section-label'

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Our Areas of Practice"
        subtitle="Deep expertise across immigration, family, personal injury, commercial property, and more."
      />

      <section className="bg-bg-base py-20">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="mb-12">
            <SectionLabel>Nine Practice Areas</SectionLabel>
            <p className="text-lg text-text-secondary max-w-2xl mb-12">
              Each service page includes what we do, how we work, typical matters we handle, transparent pricing, and FAQs. Click any service to learn more.
            </p>
          </AnimatedSection>

          <ServiceGrid />

          <AnimatedSection delay={0.4} className="mt-20 text-center">
            <p className="text-text-secondary mb-6">
              Can't find what you're looking for?
            </p>
            <button className="px-8 py-3 rounded-lg bg-accent text-navy font-semibold hover:bg-accent-hover transition-colors">
              Contact Us
            </button>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
