import type { ChatMessage } from './use-chat-stream'

interface ChatMessageProps {
  message: ChatMessage
}

export function ChatMessageComponent({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isUser ? 'bg-accent/20 text-accent' : 'bg-navy/10 text-navy'
        }`}
      >
        {isUser ? 'You' : '🔹'}
      </div>

      {/* Message bubble */}
      <div
        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
          isUser
            ? 'bg-accent text-navy rounded-br-none'
            : 'bg-bg-surface text-text-primary rounded-bl-none border border-border-hairline'
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {message.content}
          {message.isStreaming && <span className="animate-pulse">▌</span>}
        </p>
      </div>
    </div>
  )
}
