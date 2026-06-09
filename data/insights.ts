export interface Insight {
  id: string
  title: string
  category: 'News' | 'Publications' | 'Success Stories' | 'Galleries' | 'International Days'
  date: string
  readingTime: number
  slug: string
}

export const INSIGHTS: Insight[] = [
  {
    id: 'insight-1',
    title: 'Changes to UK Immigration Points System',
    category: 'News',
    date: '2024-11-15',
    readingTime: 5,
    slug: 'immigration-points-changes',
  },
  {
    id: 'insight-2',
    title: 'Protecting Your Intellectual Property Rights',
    category: 'Publications',
    date: '2024-11-08',
    readingTime: 7,
    slug: 'ip-protection-guide',
  },
  {
    id: 'insight-3',
    title: 'Client Success: Successful Visa Appeal Resolution',
    category: 'Success Stories',
    date: '2024-10-31',
    readingTime: 4,
    slug: 'visa-appeal-success',
  },
]
