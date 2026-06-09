'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface ChatContextType {
  isOpen: boolean
  open: (initialMessage?: string) => void
  close: () => void
  initialMessage: string | null
}

const ChatContext = createContext<ChatContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
  initialMessage: null,
})

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
  return useContext(ChatContext)
}
