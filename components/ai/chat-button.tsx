'use client'

import { MessageCircle } from 'lucide-react'
import { useChatContext } from '@/lib/chat-context'

export function ChatButton() {
  const { open } = useChatContext()

  return (
    <button
      onClick={() => open()}
      className="fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-accent text-navy shadow-lg hover:shadow-panel hover:bg-accent-hover transition-all duration-300 flex items-center justify-center group"
      aria-label="Open chat"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
    </button>
  )
}
