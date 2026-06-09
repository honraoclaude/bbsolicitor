import Link from 'next/link'

interface StubPageContentProps {
  message: string
  ctaLabel?: string
  ctaHref?: string
}

export function StubPageContent({
  message,
  ctaLabel = 'Get in touch',
  ctaHref = '/contact',
}: StubPageContentProps) {
  return (
    <section className="bg-bg-base py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-6">
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              {message}
            </p>
            <Link
              href={ctaHref}
              className="inline-block px-6 py-3 rounded-lg bg-accent text-navy font-medium hover:bg-accent-hover transition-colors"
            >
              {ctaLabel}
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 h-64 bg-gradient-to-br from-ivory to-[#EDE4D4] rounded-lg" />
        </div>
      </div>
    </section>
  )
}
