import { PageHero } from '@/components/ui/page-hero'
import { StubPageContent } from '@/components/ui/stub-page-content'

export default function InsightsPage() {
  return (
    <>
      <PageHero
        label="News & Guidance"
        title="Latest Legal Insights"
        subtitle="Articles, publications, and updates on immigration law, family matters, personal injury, and more."
      />
      <StubPageContent
        message="Our insights section is coming soon with articles, case studies, and legal updates from our team of specialists. Check back for news on recent changes in immigration policy, family law, and other areas of practice."
        ctaLabel="Contact us for advice"
        ctaHref="/contact"
      />
    </>
  )
}
