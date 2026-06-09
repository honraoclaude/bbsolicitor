import { AnimatedSection } from '@/components/ui/animated-section'
import { SectionLabel } from '@/components/ui/section-label'
import { CheckCircle2 } from 'lucide-react'

export function TrustStrip() {
  const badges = [
    { label: 'SRA Regulated', icon: true },
    { label: 'Law Society', icon: true },
    { label: 'Registered Trademark (UK00003299310)', icon: true },
    { label: 'Three Offices Across Ilford', icon: true },
  ]

  return (
    <section className="bg-bg-base border-y border-border-hairline">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <AnimatedSection className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-8">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3">
              {badge.icon && <CheckCircle2 size={20} className="text-accent" />}
              <span className="text-sm font-medium text-text-primary whitespace-nowrap">
                {badge.label}
              </span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
