import { AlertCircle } from 'lucide-react'

export function DisclaimerBanner() {
  return (
    <div className="bg-gold/10 border-b border-gold/20 px-4 py-3 flex gap-3">
      <AlertCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
      <p className="text-xs text-text-muted">
        <strong>General information only.</strong> This is not legal advice. For your specific matter, please speak to one of our solicitors.
      </p>
    </div>
  )
}
