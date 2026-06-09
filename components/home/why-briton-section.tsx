import { AnimatedSection } from '@/components/ui/animated-section'
import { SectionLabel } from '@/components/ui/section-label'

export function WhyBritonSection() {
  return (
    <section className="bg-bg-base py-20">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="grid grid-cols-12 gap-12 items-center">
          {/* Left: Copy */}
          <div className="col-span-12 md:col-span-5">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="text-5xl font-serif font-bold text-text-primary mb-6">
              High in Value, Not High in Cost
            </h2>

            <div className="space-y-6 mb-8 text-text-secondary">
              <p>
                At Briton Solicitors, we believe legal expertise shouldn't come with an inaccessible price tag. We combine depth of experience with responsive, affordable service.
              </p>
              <p>
                Our approach is tailored to each client's needs. As we say internally: <em>"We propose the move best matched to your requirement."</em>
              </p>
              <p>
                Whether you need comprehensive legal strategy or focused advice, we deliver lasting relationships built on trust, transparency, and real results.
              </p>
            </div>

            <blockquote className="border-l-4 border-accent pl-6 py-4 mb-8 italic text-text-primary">
              "We propose the move best matched to your requirement."
            </blockquote>

            <button className="px-8 py-3 rounded-lg bg-accent text-navy font-semibold hover:bg-accent-hover transition-colors">
              Get Started
            </button>
          </div>

          {/* Right: Gradient image placeholder */}
          <div className="col-span-12 md:col-span-6 md:col-start-7 h-96 bg-gradient-to-br from-ivory/40 via-gold/10 to-navy/10 rounded-lg flex items-center justify-center">
            <div className="text-center text-text-muted">
              <p className="text-sm">Editorial imagery: Ilford streetscape, hands signing documents</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
