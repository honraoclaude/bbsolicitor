import { INSIGHTS } from '@/data/insights'
import { InsightCard } from './insight-card'
import { AnimatedSection } from '@/components/ui/animated-section'
import { SectionLabel } from '@/components/ui/section-label'
import Link from 'next/link'

export function InsightsPreview() {
  return (
    <section className="bg-bg-base py-20 border-t border-border-hairline">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="mb-12 flex justify-between items-start">
          <div>
            <SectionLabel>Insights</SectionLabel>
            <h2 className="text-5xl font-serif font-bold text-text-primary">
              Latest News & Guidance
            </h2>
          </div>
          <Link
            href="/insights"
            className="hidden md:block text-accent hover:text-accent-hover transition-colors font-medium"
          >
            View all →
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-12 gap-8 mb-8">
            {INSIGHTS.map((insight) => (
              <div key={insight.id} className="col-span-12 md:col-span-4">
                <InsightCard {...insight} />
              </div>
            ))}
          </div>

          <Link
            href="/insights"
            className="md:hidden block text-center text-accent hover:text-accent-hover transition-colors font-medium"
          >
            View all insights →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
