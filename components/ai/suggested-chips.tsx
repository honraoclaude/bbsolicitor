import { SectionLabel } from '@/components/ui/section-label'

const SUGGESTED_PROMPTS = [
  "How much is a spouse visa application?",
  "What documents do I need to change my name?",
  "I had an accident at work — what now?",
  "Where's my nearest office?",
]

interface SuggestedChipsProps {
  onSelect: (prompt: string) => void
  isHidden?: boolean
}

export function SuggestedChips({ onSelect, isHidden }: SuggestedChipsProps) {
  if (isHidden) return null

  return (
    <div className="px-4 py-3 bg-bg-base">
      <p className="text-xs text-text-muted mb-2">Try asking:</p>
      <div className="grid gap-2">
        {SUGGESTED_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            onClick={() => onSelect(prompt)}
            className="text-left text-xs px-3 py-2 rounded-lg bg-bg-surface border border-border-hairline hover:border-accent hover:bg-accent/5 transition-colors text-text-secondary hover:text-accent"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  )
}
