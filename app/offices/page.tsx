import { PageHero } from '@/components/ui/page-hero'
import { AnimatedSection } from '@/components/ui/animated-section'
import { OFFICES } from '@/data/offices'
import { OfficeCard } from '@/components/offices/office-card'

export default function OfficesPage() {
  return (
    <>
      <PageHero
        label="Locations"
        title="Three Offices Across East London"
        subtitle="Conveniently located with excellent transport access in Ilford, Goodmayes, and Seven Kings."
      />

      <section className="bg-bg-base py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            {OFFICES.map((office, idx) => (
              <AnimatedSection key={office.id} delay={idx * 0.2} className="col-span-12 md:col-span-4">
                <OfficeCard office={office} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.6} className="mt-16 text-center">
            <p className="text-text-secondary mb-6">
              Have questions? Reach out to any office directly or use our contact form.
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
