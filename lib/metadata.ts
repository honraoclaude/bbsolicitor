import type { Metadata } from 'next'

export function makeMetadata(opts: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = `https://britonsolicitors.co.uk${opts.path}`
  return {
    title: opts.title,
    description: opts.description,
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      type: 'website',
      images: [{ url: `/og?page=${opts.path.replace(/^\//, '').split('/')[0] || 'home'}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
    },
  }
}
