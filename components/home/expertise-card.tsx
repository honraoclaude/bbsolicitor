import Link from 'next/link'
import { Briefcase } from 'lucide-react'
import * as Icons from 'lucide-react'

interface ExpertiseCardProps {
  title: string
  excerpt: string
  icon: string
  slug: string
}

export function ExpertiseCard({ title, excerpt, icon, slug }: ExpertiseCardProps) {
  const IconComponent = ((Icons as Record<string, unknown>)[icon] as React.ComponentType<{ size: number }>) || Briefcase

  return (
    <Link href={`/expertise/${slug}`}>
      <div className="bg-bg-surface p-8 rounded-lg hover:shadow-card transition-all duration-300 border-l-4 border-transparent hover:border-accent group cursor-pointer h-full">
        <div className="mb-4 text-accent group-hover:scale-110 transition-transform">
          <IconComponent size={32} />
        </div>
        <h3 className="font-serif text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">{excerpt}</p>
      </div>
    </Link>
  )
}
