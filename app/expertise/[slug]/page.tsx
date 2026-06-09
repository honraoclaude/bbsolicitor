import { SERVICES } from '@/data/services'
import { PageHero } from '@/components/ui/page-hero'
import { StubPageContent } from '@/components/ui/stub-page-content'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return {}

  return {
    title: service.title,
    description: service.excerpt,
    openGraph: {
      title: service.title,
      description: service.excerpt,
      type: 'website',
    },
  }
}

export default function ServicePage({ params }: PageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <PageHero
        label={service.title}
        title={service.title}
        subtitle={service.excerpt}
      />
      <StubPageContent
        message={`Our ${service.title} service provides comprehensive legal support. Click below to learn more or speak to one of our specialists about how we can help with your matter.`}
        ctaLabel="Request a consultation"
        ctaHref="/contact"
      />
    </>
  )
}
