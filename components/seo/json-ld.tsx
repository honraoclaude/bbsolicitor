import { OFFICES } from '@/data/offices'

export function BritonJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Briton Solicitors',
    description: 'Expert legal advice in immigration, family, personal injury, and more. Three offices across East London.',
    url: 'https://britonsolicitors.co.uk',
    telephone: OFFICES[0].phones[0],
    email: OFFICES[0].email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: OFFICES[0].address,
      postalCode: OFFICES[0].postcode,
      addressCountry: 'GB',
    },
    areaServed: {
      '@type': 'State',
      name: 'England',
    },
    priceRange: '£',
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessJsonLd() {
  const schemas = OFFICES.map((office) => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Briton Solicitors — ${office.name}`,
    description: 'Legal services in immigration, family law, personal injury, and more.',
    url: 'https://britonsolicitors.co.uk/offices',
    telephone: office.phones[0],
    email: office.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.address,
      addressLocality: 'Ilford',
      postalCode: office.postcode,
      addressCountry: 'GB',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  }))

  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
