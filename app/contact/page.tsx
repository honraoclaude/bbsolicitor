import { PageHero } from '@/components/ui/page-hero'
import { AnimatedSection } from '@/components/ui/animated-section'
import { OFFICES } from '@/data/offices'
import { Mail, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Speak to Our Team"
        subtitle="Three convenient offices across East London, ready to help with your legal needs."
      />

      <section className="bg-bg-base py-20 border-b border-border-hairline">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            {OFFICES.map((office, idx) => (
              <AnimatedSection key={office.id} delay={idx * 0.15} className="col-span-12 md:col-span-4">
                <div className="bg-bg-surface rounded-lg p-8">
                  <h3 className="font-serif text-xl font-bold text-text-primary mb-4">
                    {office.name}
                  </h3>
                  <p className="text-sm text-text-secondary mb-6">
                    {office.address}
                    <br />
                    {office.postcode}
                  </p>

                  <div className="space-y-3">
                    {office.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/ /g, '')}`}
                        className="flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
                      >
                        <Phone size={16} />
                        {phone}
                      </a>
                    ))}
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
                    >
                      <Mail size={16} />
                      {office.email}
                    </a>
                  </div>

                  <p className="text-xs text-text-muted mt-6">{office.hours}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-serif font-bold mb-4">Use Ask Briton</h2>
            <p className="text-lg text-ivory/80 mb-8 max-w-2xl mx-auto">
              Or click the chat button in the bottom right corner for immediate answers to common questions.
            </p>
            <button className="px-8 py-3 rounded-lg bg-accent text-navy font-semibold hover:bg-accent-hover transition-colors">
              Open Chat
            </button>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
