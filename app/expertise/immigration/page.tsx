import { PageHero } from '@/components/ui/page-hero'
import { AnimatedSection } from '@/components/ui/animated-section'
import { SectionLabel } from '@/components/ui/section-label'
import { GoldDivider } from '@/components/ui/gold-divider'
import { EligibilityChecker } from '@/components/expertise/eligibility-checker'
import { DocumentIntelligenceDemo } from '@/components/expertise/document-intelligence-demo'
import { PUBLISHED_FEES } from '@/data/pricing'

export default function ImmigrationPage() {
  return (
    <>
      <PageHero
        label="Immigration Law"
        title="UK and International Immigration Services"
        subtitle="Specialist attorneys offering one-to-one representation across all visa routes."
      />

      {/* What we do */}
      <section className="bg-bg-base py-20 border-b border-border-hairline">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="max-w-3xl">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="text-5xl font-serif font-bold text-text-primary mb-6">
              A wide range of UK and international immigration services
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              We handle all visa routes: spouse visas, family reunification, business immigration, student visas, skilled worker visas, ILR applications, naturalisation, and appeals.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Each matter is handled with specialist knowledge and one-to-one representation, ensuring your case is presented persuasively and your rights are protected throughout.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-bg-base py-20 border-b border-border-hairline">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="max-w-3xl">
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="text-5xl font-serif font-bold text-text-primary mb-8">
              Clear process. Responsive support.
            </h2>

            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Initial Consultation',
                  desc: 'We understand your situation and advise on available visa routes.',
                },
                {
                  step: '2',
                  title: 'Document Preparation',
                  desc: 'We prepare and review all required documentation to Home Office standards.',
                },
                {
                  step: '3',
                  title: 'Application & Submission',
                  desc: 'We submit your application and liaaise with the Home Office on your behalf.',
                },
                {
                  step: '4',
                  title: 'Follow-up & Decision',
                  desc: 'We track your application and advise on the outcome.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-serif text-lg font-bold text-accent">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">{item.title}</h4>
                    <p className="text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* AI Tools */}
      <section className="bg-bg-base py-20 border-b border-border-hairline">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="mb-16">
            <SectionLabel>Interactive Tools</SectionLabel>
            <h2 className="text-5xl font-serif font-bold text-text-primary mb-6">
              Understand your situation
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl">
              Use our interactive tools to get a non-binding initial assessment and see how our document intelligence works.
            </p>
          </AnimatedSection>

          {/* Eligibility Checker */}
          <AnimatedSection delay={0.2} className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-text-primary mb-6">
              Visa Route Eligibility Checker
            </h3>
            <EligibilityChecker />
          </AnimatedSection>

          {/* Document Intelligence */}
          <AnimatedSection delay={0.4}>
            <h3 className="text-2xl font-serif font-bold text-text-primary mb-6">
              Document Analysis Demo
            </h3>
            <DocumentIntelligenceDemo />
          </AnimatedSection>
        </div>
      </section>

      {/* Published Fees */}
      <section className="bg-bg-base py-20 border-b border-border-hairline">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="max-w-3xl">
            <SectionLabel>Transparent Pricing</SectionLabel>
            <h2 className="text-5xl font-serif font-bold text-text-primary mb-8">
              Fixed fees for common matters
            </h2>

            <div className="space-y-6">
              <div className="bg-bg-surface rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-text-primary">Spouse Visa Application</h4>
                  <span className="text-2xl font-bold text-accent">
                    £{PUBLISHED_FEES.immigration.spouseVisa.from}
                  </span>
                </div>
                <p className="text-sm text-text-muted">
                  {PUBLISHED_FEES.immigration.spouseVisa.note}
                </p>
              </div>

              <div className="bg-bg-surface rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-text-primary">Settlement / ILR</h4>
                  <span className="text-2xl font-bold text-accent">
                    £{PUBLISHED_FEES.immigration.settlement.from}
                  </span>
                </div>
                <p className="text-sm text-text-muted">
                  {PUBLISHED_FEES.immigration.settlement.note}
                </p>
              </div>

              <div className="bg-bg-surface rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-text-primary">First-Tier Tribunal Appeal</h4>
                  <span className="text-2xl font-bold text-accent">
                    £{PUBLISHED_FEES.immigration.appeal.from}
                  </span>
                </div>
                <p className="text-sm text-text-muted">
                  {PUBLISHED_FEES.immigration.appeal.note}
                </p>
              </div>
            </div>

            <p className="text-sm text-text-muted mt-8">
              Other matters charged on a time-cost basis. We discuss fees transparently at your initial consultation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-ivory py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-5xl font-serif font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl text-ivory/80 max-w-2xl mx-auto mb-10">
              Book a consultation to discuss your immigration matter with one of our specialist solicitors.
            </p>
            <button className="px-10 py-4 rounded-lg bg-accent text-navy font-semibold hover:bg-accent-hover transition-colors text-lg">
              Request a Consultation
            </button>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
