'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'About', href: '/about' },
  { label: 'Offices', href: '/offices' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-bg-base border-b border-border-hairline">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-serif text-xl font-bold text-text-primary">
            BRITON
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              className="hidden md:block px-4 py-2 rounded-full bg-accent text-navy font-medium text-sm hover:bg-accent-hover transition-colors"
              onClick={() => {
                // Will trigger chat panel open in future
              }}
            >
              Request Consultation
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-text-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border-hairline space-y-2">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full mt-4 px-4 py-2 rounded-full bg-accent text-navy font-medium text-sm hover:bg-accent-hover transition-colors">
              Request Consultation
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
