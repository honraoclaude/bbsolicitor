import { AnimatedSection } from '@/components/ui/animated-section'

export function CTABand() {
  return (
    <section className="bg-navy text-ivory border-t border-gold/20 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-6">Next Steps</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Ready to Talk?
          </h2>
          <p className="text-xl text-ivory/80 max-w-2xl mx-auto mb-10">
            Get expert legal advice tailored to your needs. Accessible, responsive, and affordable.
          </p>
          <button className="px-10 py-4 rounded-lg bg-accent text-navy font-semibold hover:bg-accent-hover transition-colors text-lg">
            Request a Consultation
          </button>
        </AnimatedSection>
      </div>
    </section>
  )
}
