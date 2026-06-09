import { SERVICES } from '@/data/services'
import { ExpertiseCard } from './expertise-card'
import { AnimatedSection } from '@/components/ui/animated-section'
import { SectionLabel } from '@/components/ui/section-label'

export function ExpertiseGrid() {
  return (
    <section className="bg-bg-base py-20">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="mb-12">
          <SectionLabel>What We Offer</SectionLabel>
          <h2 className="text-5xl font-serif font-bold text-text-primary mb-6">
            Nine Areas of Legal Practice
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            Comprehensive legal services across immigration, family, personal injury, commercial property, and more.
          </p>
        </AnimatedSection>

        {/* Hairline grid: gap-px with bg creates 1px dividers */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-12 gap-px bg-border-hairline rounded-lg overflow-hidden">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`bg-bg-surface ${
                  index === 0 ? 'col-span-12 md:col-span-8' : 'col-span-12 md:col-span-4'
                }`}
              >
                <ExpertiseCard {...service} />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
