import { NextRequest } from 'next/server'
import type { MessageParam } from '@anthropic-ai/sdk/resources/messages'
import { anthropic } from '@/lib/anthropic'
import { buildSystemMessages } from '@/lib/system-prompt'

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages: MessageParam[] }

    if (!messages || !Array.isArray(messages)) {
      return new Response('Invalid request: messages must be an array', {
        status: 400,
      })
    }

    // Build the full message list with system context
    const fullMessages = [...buildSystemMessages(), ...messages]

    const stream = await anthropic.messages.stream({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      messages: fullMessages,
    })

    // Convert Anthropic stream to Web ReadableStream
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            const data = JSON.stringify(event)
            controller.enqueue(new TextEncoder().encode(`data: ${data}\n\n`))
          }
          controller.close()
        } catch (error) {
          controller.error(error)
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response('Internal server error', { status: 500 })
  }
}
