'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { TransportNote } from '@/data/offices'

const ICON_MAP = {
  tube: '🚇',
  bus: '🚌',
  rail: '🚂',
  parking: '🅿️',
}

interface TransportNotesProps {
  notes: TransportNote[]
}

export function TransportNotes({ notes }: TransportNotesProps) {
  const [open, setOpen] = useState(true)

  return (
    <div className="border border-border-hairline rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-bg-base transition-colors"
      >
        <span className="font-semibold text-text-primary">Transport & Access</span>
        <ChevronDown
          size={20}
          className={`text-text-muted transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="px-6 py-4 bg-bg-base border-t border-border-hairline space-y-3">
          {notes.map((note, idx) => (
            <div key={idx} className="flex gap-3">
              <span className="text-lg flex-shrink-0">
                {ICON_MAP[note.mode] || '📍'}
              </span>
              <p className="text-sm text-text-secondary">{note.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
