import { PageHero } from '@/components/ui/page-hero'
import { AnimatedSection } from '@/components/ui/animated-section'
import { SectionLabel } from '@/components/ui/section-label'

export default function AIPolicyPage() {
  return (
    <>
      <PageHero
        label="AI Transparency"
        title="Ask Briton — Our AI Assistant Policy"
        subtitle="How Briton Solicitors uses AI technology responsibly and transparently."
      />

      <section className="bg-bg-base py-20 space-y-20">
        <div className="max-w-3xl mx-auto px-4">
          {/* What Ask Briton Does */}
          <AnimatedSection className="mb-20">
            <SectionLabel>What Ask Briton Does</SectionLabel>
            <h2 className="text-4xl font-serif font-bold text-text-primary mb-6">
              General Guidance Only
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Ask Briton is an AI-powered chat assistant available on our website. It provides general information about our services, office locations, fees, and legal concepts. It is <strong>not</strong> a substitute for personal legal advice from a qualified solicitor.
            </p>

            <div className="bg-gold/10 rounded-lg p-6 border border-gold/20">
              <p className="font-semibold text-text-primary mb-2">Key limitation:</p>
              <p className="text-text-secondary">
                Ask Briton cannot assess your specific circumstances, provide case-specific advice, predict outcomes, draft legal documents, or form a solicitor-client relationship.
              </p>
            </div>
          </AnimatedSection>

          {/* How It Works */}
          <AnimatedSection delay={0.1} className="mb-20">
            <SectionLabel>How Ask Briton Works</SectionLabel>
            <h2 className="text-4xl font-serif font-bold text-text-primary mb-6">
              Powered by Claude AI
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Ask Briton runs on Claude Sonnet, an AI model developed by Anthropic. Our system:
            </p>

            <ul className="space-y-4">
              {[
                'Processes your questions in real-time using AI language models',
                'Automatically detects your language and responds accordingly (English, Bengali, Urdu, Hindi, Tamil, Romanian)',
                'Caches firm information to reduce response latency and API costs',
                'Escalates urgent matters (removal notices, court deadlines, domestic violence) to human advisors',
                'Never stores your conversation data after you close the chat',
              ].map((point, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-text-secondary">{point}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* What Ask Briton Will Not Do */}
          <AnimatedSection delay={0.2} className="mb-20">
            <SectionLabel>What Ask Briton Will Not Do</SectionLabel>
            <h2 className="text-4xl font-serif font-bold text-text-primary mb-6">
              Strict Boundaries
            </h2>

            <div className="grid grid-cols-12 gap-6">
              {[
                { title: 'Give specific legal advice', desc: 'No case assessments or predictions' },
                { title: 'Guarantee outcomes', desc: 'Never promise visa approvals or case wins' },
                { title: 'Draft legal documents', desc: 'No letters, agreements, or declarations' },
                { title: 'Form attorney-client relationships', desc: 'Chat alone does not create legal representation' },
                { title: 'Replace human solicitors', desc: 'Always recommends speaking to a qualified lawyer' },
                { title: 'Store sensitive data', desc: 'No PII retention after conversation ends' },
              ].map((item) => (
                <div key={item.title} className="col-span-12 md:col-span-6 bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                  <p className="font-semibold text-red-800 dark:text-red-300 mb-1">
                    ✗ {item.title}
                  </p>
                  <p className="text-sm text-red-700 dark:text-red-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Data & Privacy */}
          <AnimatedSection delay={0.3} className="mb-20">
            <SectionLabel>Data & Privacy</SectionLabel>
            <h2 className="text-4xl font-serif font-bold text-text-primary mb-6">
              No Data Retention
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">What We Do With Your Input</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Sent to Anthropic's API for processing in real-time</li>
                  <li>• Used to generate your response</li>
                  <li>• Deleted immediately after response generation (no logs)</li>
                </ul>
              </div>

              <div className="bg-bg-surface rounded-lg p-6">
                <h3 className="font-semibold text-text-primary mb-2">What We Do NOT Do</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• We do not store your messages on our servers</li>
                  <li>• We do not use your questions to train models</li>
                  <li>• We do not sell or share your input with third parties</li>
                  <li>• We do not retain personally identifiable information (PII)</li>
                </ul>
              </div>

              <p className="text-sm text-text-muted italic">
                For Anthropic's privacy practices, see: https://www.anthropic.com/privacy
              </p>
            </div>
          </AnimatedSection>

          {/* When to Speak to a Solicitor */}
          <AnimatedSection delay={0.4} className="mb-20">
            <SectionLabel>When to Speak to a Solicitor</SectionLabel>
            <h2 className="text-4xl font-serif font-bold text-text-primary mb-6">
              You Always Have This Option
            </h2>

            <div className="bg-navy text-ivory rounded-lg p-8">
              <p className="text-lg mb-6 leading-relaxed">
                <strong>You should speak to a qualified solicitor immediately if:</strong>
              </p>
              <ul className="space-y-3 text-ivory/90">
                <li>• You have a legal matter you need to resolve</li>
                <li>• You have received a notice from the Home Office, court, or government body</li>
                <li>• You have a deadline approaching (less than 2 weeks)</li>
                <li>• Your situation involves domestic violence or urgent safety concerns</li>
                <li>• You need documents prepared, reviewed, or signed</li>
                <li>• You want your solicitor-client privilege protected</li>
              </ul>

              <div className="mt-8 pt-8 border-t border-ivory/20">
                <p className="mb-4">Contact any of our offices:</p>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <a href="tel:+442034754545" className="hover:text-gold transition-colors">
                    📞 Head Office (Ilford): +44 203 475 4545
                  </a>
                  <a href="tel:+442035004192" className="hover:text-gold transition-colors">
                    📞 Goodmayes: +44 203 500 4192
                  </a>
                  <a href="tel:+442034757845" className="hover:text-gold transition-colors">
                    📞 Seven Kings: +44 203 475 7845
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Regulatory Compliance */}
          <AnimatedSection delay={0.5}>
            <SectionLabel>Regulatory & Professional Standards</SectionLabel>
            <h2 className="text-4xl font-serif font-bold text-text-primary mb-6">
              SRA Regulated
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                Briton Solicitors is regulated by the Solicitors Regulation Authority (SRA). Our use of Ask Briton complies with:
              </p>

              <div className="grid grid-cols-12 gap-6">
                {[
                  {
                    title: 'SRA Standards & Regulations',
                    desc: 'Ask Briton operates within SRA Outcome Focused Regulation (OFR) and does not form a legal relationship.',
                  },
                  {
                    title: 'Consumer Protection',
                    desc: 'We clearly label AI-generated responses and recommend legal consultation for case-specific matters.',
                  },
                  {
                    title: 'Data Protection (GDPR)',
                    desc: 'We comply with UK data protection law, including GDPR, with zero data retention.',
                  },
                  {
                    title: 'Professional Standards',
                    desc: 'Our system enforces refusal rules to prevent misleading advice or unauthorized practice.',
                  },
                ]
                  .map((item) => (
                    <div key={item.title} className="col-span-12 md:col-span-6">
                      <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  ))}
              </div>

              <p className="text-sm text-text-muted mt-6">
                For SRA regulations on AI and emerging technologies, see: https://www.sra.org.uk/
              </p>
            </div>
          </AnimatedSection>

          {/* Contact & Complaints */}
          <section className="mt-20 pt-20 border-t border-border-hairline">
            <AnimatedSection delay={0.6}>
              <SectionLabel>Questions or Complaints?</SectionLabel>
              <h2 className="text-4xl font-serif font-bold text-text-primary mb-6">
                We're Here to Help
              </h2>

              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-6">
                  <h3 className="font-semibold text-text-primary mb-3">About Ask Briton</h3>
                  <p className="text-text-secondary mb-4">
                    Questions about how Ask Briton works or our AI policy?
                  </p>
                  <a href="/contact" className="text-accent hover:text-accent-hover font-medium">
                    Contact us →
                  </a>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <h3 className="font-semibold text-text-primary mb-3">File a Complaint</h3>
                  <p className="text-text-secondary mb-4">
                    If you have a complaint about our service, including Ask Briton:
                  </p>
                  <a href="/complaints" className="text-accent hover:text-accent-hover font-medium">
                    View our complaints procedure →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </section>
        </div>
      </section>
    </>
  )
}
