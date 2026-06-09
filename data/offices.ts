export interface TransportNote {
  mode: 'tube' | 'bus' | 'rail' | 'parking'
  description: string
}

export interface Office {
  id: string
  name: string
  type: 'head' | 'branch'
  address: string
  postcode: string
  phones: string[]
  email: string
  mapQuery: string
  hours: string
  transport: TransportNote[]
}

export const OFFICES: Office[] = [
  {
    id: 'ilford-head',
    name: 'Head Office — Ilford',
    type: 'head',
    address: '170 Cranbrook Road, Ilford',
    postcode: 'IG1 4LX',
    phones: ['+44 203 475 4545', '+44 203 475 4040'],
    email: 'info@britonsolicitors.co.uk',
    mapQuery: '170 Cranbrook Road, Ilford, IG1 4LX',
    hours: 'Mon–Fri 9:00–18:00, Sat 10:00–14:00',
    transport: [
      { mode: 'rail', description: 'Ilford Rail Station — 8 min walk' },
      { mode: 'bus', description: 'Routes 25, 86, 123 stop directly outside' },
      { mode: 'parking', description: 'Street parking available' },
    ],
  },
  {
    id: 'goodmayes',
    name: 'Goodmayes Branch',
    type: 'branch',
    address: '18 Ravenings Parade, Goodmayes Road, Ilford',
    postcode: 'IG3 9NR',
    phones: ['+44 203 500 4192', '+44 203 500 4193'],
    email: 'goodmayes@britonsolicitors.co.uk',
    mapQuery: '18 Ravenings Parade, Goodmayes Road, Ilford, IG3 9NR',
    hours: 'Mon–Fri 9:00–17:30',
    transport: [
      { mode: 'bus', description: 'Routes 123, 128 nearby' },
      { mode: 'parking', description: 'Free car park available' },
    ],
  },
  {
    id: 'seven-kings',
    name: 'Seven Kings Branch',
    type: 'branch',
    address: '602A High Road, Seven Kings Rd, Ilford',
    postcode: 'IG3 8BU',
    phones: ['+44 203 475 7845'],
    email: 'sevenkings@britonsolicitors.co.uk',
    mapQuery: '602A High Road, Seven Kings, Ilford, IG3 8BU',
    hours: 'Mon–Fri 9:00–17:30',
    transport: [
      { mode: 'bus', description: 'Routes 86, 123 stop nearby' },
      { mode: 'parking', description: 'Street parking' },
    ],
  },
]

export function getOfficeById(id: string): Office | undefined {
  return OFFICES.find(o => o.id === id)
}
