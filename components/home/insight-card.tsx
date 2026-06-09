import Link from 'next/link'
import type { Insight } from '@/data/insights'

export function InsightCard({ title, category, date, readingTime, slug }: Insight) {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <Link href={`/insights/${slug}`}>
      <article className="bg-bg-surface rounded-lg overflow-hidden shadow-card hover:shadow-panel transition-all duration-300 group cursor-pointer">
        {/* Placeholder image */}
        <div className="h-48 bg-gradient-to-br from-navy/10 to-gold/10" />

        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
              {category}
            </span>
          </div>

          <h3 className="font-serif text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
            {title}
          </h3>

          <div className="flex items-center justify-between text-xs text-text-muted">
            <time dateTime={date}>{formattedDate}</time>
            <span>{readingTime} min read</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
