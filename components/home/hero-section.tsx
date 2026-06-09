'use client'

import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/animated-section'

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy via-navy/90 to-navy/70 flex items-center">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-ivory/5 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-32 md:py-48">
        <AnimatedSection className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-ivory leading-tight mb-6">
            Result-oriented counsel. Built for the{' '}
            <span className="text-accent">matters</span> that matter to you.
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-2xl mb-12">
          <p className="text-xl text-ivory/80 leading-relaxed mb-8">
            Briton Solicitors — combining a rich depth of experience with accessible, responsive and affordable legal services across Ilford and beyond.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="flex flex-col md:flex-row gap-4">
          <button className="px-8 py-4 rounded-lg bg-accent text-navy font-semibold hover:bg-accent-hover transition-colors">
            Request a Consultation
          </button>
          <Link
            href="/expertise"
            className="px-8 py-4 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
          >
            Explore Expertise
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
