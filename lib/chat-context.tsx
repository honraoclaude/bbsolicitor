'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface ChatContextType {
  isOpen: boolean
  open: (initialMessage?: string) => void
  close: () => void
  initialMessage: string | null
}

const ChatContext = createContext<ChatContextType | null>(null)

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [initialMessage, setInitialMessage] = useState<string | null>(null)

  const open = (message?: string) => {
    setInitialMessage(message ?? null)
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
    setInitialMessage(null)
  }

  return (
    <ChatContext.Provider value={{ isOpen, open, close, initialMessage }}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChatContext() {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChatContext must be used within ChatProvider')
  }
  return context
}
