import type { Office } from '@/data/offices'
import { OfficeMap } from './office-map'
import { TransportNotes } from './transport-notes'
import { Mail } from 'lucide-react'

interface OfficeCardProps {
  office: Office
}

export function OfficeCard({ office }: OfficeCardProps) {
  return (
    <div className="bg-bg-surface rounded-lg overflow-hidden shadow-card hover:shadow-panel transition-shadow">
      {/* Map */}
      <OfficeMap address={office.mapQuery} title={office.name} />

      {/* Content */}
      <div className="p-8">
        <h3 className="font-serif text-2xl font-bold text-text-primary mb-2">
          {office.name}
        </h3>
        <p className="text-text-secondary mb-6">
          {office.address}
          <br />
          <span className="font-medium">{office.postcode}</span>
        </p>

        {/* Contact Info */}
        <div className="space-y-3 mb-6">
          {office.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/ /g, '')}`}
              className="block text-accent hover:text-accent-hover transition-colors font-medium text-sm"
            >
              {phone}
            </a>
          ))}

          <a
            href={`mailto:${office.email}`}
            className="flex items-center gap-2 text-accent hover:text-accent-hover transition-colors text-sm"
          >
            <Mail size={16} />
            {office.email}
          </a>
        </div>

        <p className="text-sm text-text-muted mb-6">{office.hours}</p>

        {/* Transport */}
        <div className="mb-6">
          <TransportNotes notes={office.transport} />
        </div>

        {/* CTA */}
        <button className="w-full px-6 py-3 rounded-lg bg-accent text-navy font-semibold hover:bg-accent-hover transition-colors">
          Book at {office.name.split(' ')[0]}
        </button>
      </div>
    </div>
  )
}
