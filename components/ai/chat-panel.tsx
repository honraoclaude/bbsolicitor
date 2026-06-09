'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'
import { useChatContext } from '@/lib/chat-context'
import { useChatStream } from './use-chat-stream'
import { ChatMessageComponent } from './chat-message'
import { DisclaimerBanner } from './disclaimer-banner'
import { SuggestedChips } from './suggested-chips'

export function ChatPanel() {
  const { isOpen, close, initialMessage } = useChatContext()
  const { messages, isLoading, sendMessage, clearMessages } = useChatStream()
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Handle initial message
  useEffect(() => {
    if (isOpen && initialMessage && messages.length === 0) {
      sendMessage(initialMessage)
    }
  }, [isOpen, initialMessage, messages.length, sendMessage])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const handleSend = (text: string) => {
    if (!text.trim() || isLoading) return
    sendMessage(text)
    inputRef.current!.value = ''
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-navy/40 z-40"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: 450 }}
            animate={{ x: 0 }}
            exit={{ x: 450 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-bg-base shadow-panel z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-border-hairline flex items-center justify-between">
              <h2 className="font-serif text-lg font-bold text-text-primary">
                Ask Briton
              </h2>
              <button
                onClick={close}
                className="p-2 hover:bg-bg-surface rounded transition-colors"
                aria-label="Close chat"
              >
                <X size={20} className="text-text-secondary" />
              </button>
            </div>

            {/* Disclaimer */}
            <DisclaimerBanner />

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <SuggestedChips
                  onSelect={handleSend}
                  isHidden={false}
                />
              ) : (
                <>
                  {messages.map((msg) => (
                    <ChatMessageComponent key={msg.id} message={msg} />
                  ))}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border-hairline">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask about our services..."
                  disabled={isLoading}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSend(e.currentTarget.value)
                    }
                  }}
                  className="flex-1 px-4 py-2 rounded-lg border border-border-hairline bg-bg-surface text-text-primary placeholder-text-muted focus:outline-none focus:border-accent disabled:opacity-50"
                />
                <button
                  onClick={() => handleSend(inputRef.current?.value || '')}
                  disabled={isLoading}
                  className="p-2 rounded-lg bg-accent text-navy hover:bg-accent-hover transition-colors disabled:opacity-50"
                  aria-label="Send message"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
