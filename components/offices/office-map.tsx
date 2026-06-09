interface OfficeMapProps {
  address: string
  title: string
}

export function OfficeMap({ address, title }: OfficeMapProps) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed&z=15`

  return (
    <div className="relative overflow-hidden rounded-lg h-64">
      <iframe
        title={`Map showing ${title}`}
        src={src}
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0 w-full h-full"
        aria-label={`Interactive map for ${title}`}
      />
    </div>
  )
}
