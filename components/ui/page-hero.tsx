import { SectionLabel } from './section-label'

interface PageHeroProps {
  label?: string
  title: string
  subtitle?: string
}

export function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-bg-base py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        {label && <SectionLabel>{label}</SectionLabel>}
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-text-primary mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-text-secondary max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
