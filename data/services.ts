export interface Service {
  id: string
  title: string
  slug: string
  excerpt: string
  icon: string
  isBuilt: boolean
}

export const SERVICES: Service[] = [
  {
    id: 'immigration',
    title: 'Immigration Law',
    slug: 'immigration',
    excerpt: 'A wide range of UK and international immigration services, with specialist attorneys offering one-to-one representation.',
    icon: 'Plane',
    isBuilt: true,
  },
  {
    id: 'family-law',
    title: 'Family Law',
    slug: 'family-law',
    excerpt: 'Pre- and post-nuptial agreements and related family matters, handled with discretion and care.',
    icon: 'Heart',
    isBuilt: false,
  },
  {
    id: 'personal-injury',
    title: 'Personal Injury',
    slug: 'personal-injury',
    excerpt: 'Compassionate, results-driven support to recover the compensation you deserve.',
    icon: 'Shield',
    isBuilt: false,
  },
  {
    id: 'commercial-property',
    title: 'Commercial Property',
    slug: 'commercial-property',
    excerpt: 'Commercial conveyancing for property and land transactions of every scale.',
    icon: 'Building2',
    isBuilt: false,
  },
  {
    id: 'landlord-tenant',
    title: 'Landlord & Tenant',
    slug: 'landlord-tenant',
    excerpt: 'Dispute resolution for commercial and residential matters — practical, swift, and cost-aware.',
    icon: 'Home',
    isBuilt: false,
  },
  {
    id: 'corporate-law',
    title: 'Corporate Law',
    slug: 'corporate-law',
    excerpt: 'The body of laws, rules and practices that govern the formation and operation of your company.',
    icon: 'Briefcase',
    isBuilt: false,
  },
  {
    id: 'civil-litigation',
    title: 'Civil Litigation',
    slug: 'civil-litigation',
    excerpt: 'Non-criminal dispute resolution — prioritising negotiation and settlement over court.',
    icon: 'Gavel',
    isBuilt: false,
  },
  {
    id: 'commissioner-for-oaths',
    title: 'Commissioner for Oaths',
    slug: 'commissioner-for-oaths',
    excerpt: 'Document verification, affidavits and statutory declarations, same-day where possible.',
    icon: 'FileCheck',
    isBuilt: false,
  },
  {
    id: 'deed-poll',
    title: 'BS Deed Poll Service',
    slug: 'deed-poll',
    excerpt: 'Straightforward name-change applications, prepared by qualified solicitors.',
    icon: 'Edit3',
    isBuilt: false,
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find(s => s.slug === slug)
}
