import { OFFICES } from '@/data/offices'
import { AnimatedSection } from '@/components/ui/animated-section'
import { SectionLabel } from '@/components/ui/section-label'

export function OfficesMapBlock() {
  return (
    <section className="bg-bg-base py-20">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="mb-12">
          <SectionLabel>Locations</SectionLabel>
          <h2 className="text-5xl font-serif font-bold text-text-primary mb-6">
            Three Offices Across East London
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-12 gap-8">
            {OFFICES.map((office) => (
              <div key={office.id} className="col-span-12 md:col-span-4">
                <div className="bg-bg-surface rounded-lg overflow-hidden shadow-card hover:shadow-panel transition-shadow">
                  {/* Map placeholder gradient */}
                  <div className="h-48 bg-gradient-to-br from-gold/20 to-navy/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-text-muted text-sm">
                      Map: {office.name}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-lg font-bold text-text-primary mb-3">
                      {office.name}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4">
                      {office.address}
                      <br />
                      {office.postcode}
                    </p>
                    <div className="space-y-2 mb-6">
                      {office.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/ /g, '')}`}
                          className="block text-accent hover:text-accent-hover transition-colors text-sm font-medium"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                    <button className="w-full px-4 py-2 rounded-lg bg-accent text-navy font-medium hover:bg-accent-hover transition-colors text-sm">
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
