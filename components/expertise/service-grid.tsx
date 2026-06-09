import { SERVICES } from '@/data/services'
import { ExpertiseCard } from '@/components/home/expertise-card'
import { AnimatedSection } from '@/components/ui/animated-section'

export function ServiceGrid() {
  return (
    <AnimatedSection>
      <div className="grid grid-cols-12 gap-px bg-border-hairline rounded-lg overflow-hidden">
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            className={`bg-bg-surface ${
              index === 0 ? 'col-span-12 md:col-span-8' : 'col-span-12 md:col-span-4'
            }`}
          >
            <ExpertiseCard {...service} />
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
