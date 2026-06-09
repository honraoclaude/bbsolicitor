interface SectionLabelProps {
  children: string
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-xs font-sans uppercase tracking-[0.2em] text-text-muted mb-4">
      {children}
    </p>
  )
}
