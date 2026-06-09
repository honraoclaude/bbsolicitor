import { OFFICES } from '@/data/offices'
import Link from 'next/link'

const PAGE_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'About', href: '/about' },
  { label: 'Offices', href: '/offices' },
  { label: 'Contact', href: '/contact' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'Complaints', href: '/complaints' },
]

export function Footer() {
  return (
    <footer className="bg-navy text-ivory border-t border-gold/20">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-12 gap-12 mb-16">
          {/* Offices */}
          <div className="col-span-12 md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-6">Offices</p>
            <div className="space-y-6">
              {OFFICES.map(office => (
                <div key={office.id} className="text-sm">
                  <p className="font-medium mb-1">{office.name}</p>
                  <p className="text-ivory/70">{office.address}</p>
                  <p className="text-ivory/70">{office.postcode}</p>
                  <a
                    href={`tel:${office.phones[0].replace(/ /g, '')}`}
                    className="text-gold hover:text-gold/80 transition-colors text-sm mt-2 inline-block"
                  >
                    {office.phones[0]}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="col-span-12 md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-6">Site</p>
            <ul className="space-y-3">
              {PAGE_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-12 md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-6">Legal</p>
            <ul className="space-y-3">
              {LEGAL_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-xs text-ivory/60 mb-2">
                SRA Regulated
              </p>
              <p className="text-xs text-ivory/60">
                BS Solicitors Ltd (UK00003299310)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ivory/10 text-center text-sm text-ivory/60">
          <p>&copy; {new Date().getFullYear()} Briton Solicitors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
