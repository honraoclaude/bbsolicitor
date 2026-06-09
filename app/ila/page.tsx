import { PageHero } from '@/components/ui/page-hero'
import { AnimatedSection } from '@/components/ui/animated-section'
import { SectionLabel } from '@/components/ui/section-label'

export default function ILAPage() {
  return (
    <>
      <PageHero
        label="Independent Legal Advice"
        title="ILA Certificates for Immigration Matters"
        subtitle="Official independent legal advice certificates required for family reunification and marriage dissolution in immigration proceedings."
      />

      <section className="bg-bg-base py-20">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection className="mb-12">
            <SectionLabel>What is ILA?</SectionLabel>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              An ILA certificate (Independent Legal Advice) is a formal document signed by a qualified solicitor, certifying that a person has received independent advice on the legal implications of a particular action in an immigration context.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              The Home Office requires ILA for certain matters:
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="space-y-6 mb-12">
            {[
              {
                title: 'Marriage in the UK',
                desc: 'Required before a sponsor marries a foreign national where immigration is a consideration.',
              },
              {
                title: 'Family Dissolution',
                desc: 'Needed in some divorce/dissolution proceedings involving immigration-related matters.',
              },
              {
                title: 'Other Family Arrangements',
                desc: 'Depending on the specific circumstance and settlement status.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-bg-surface rounded-lg p-6">
                <h3 className="font-serif text-lg font-bold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="bg-gold/10 rounded-lg p-8">
            <h3 className="font-serif text-xl font-bold text-text-primary mb-4">
              Our ILA Service
            </h3>
            <p className="text-text-secondary mb-6">
              We provide independent legal advice certificates as required by the Home Office. The process is straightforward: we meet with you, explain the legal implications, and if appropriate, provide the certified advice.
            </p>
            <button className="px-8 py-3 rounded-lg bg-accent text-navy font-semibold hover:bg-accent-hover transition-colors">
              Request ILA Appointment
            </button>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
