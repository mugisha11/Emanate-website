"use client"

import { useState, useRef, useEffect } from 'react'
import { MessageSquare, SendHorizonal, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Message {
  role: 'user' | 'assistant'
  text: string
}

export function AskAssistant() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function send(e?: React.FormEvent) {
    e?.preventDefault()
    if (!query.trim() || loading) return

    const userText = query.trim()
    setMessages((m) => [...m, { role: 'user', text: userText }])
    setQuery('')
    setLoading(true)

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userText }),
      })

      const data = await res.json()
      const answer = data?.answer ?? 'Sorry, no answer available.'
      setMessages((m) => [...m, { role: 'assistant', text: answer }])
    } catch (err) {
      setMessages((m) => [...m, { 
        role: 'assistant', 
        text: 'Sorry, I encountered an error while processing your request. Please try again.' 
      }])
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  return (
    <div className="fixed bottom-24 right-8 w-full max-w-[400px] min-h-[300px] max-h-[600px] flex flex-col bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75 shadow-xl rounded-xl border border-border overflow-hidden z-50">
      {/* Header */}
      <div className="flex items-center gap-2 p-4 border-b">
        <MessageSquare className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Ask EMANATE</h3>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
            <MessageSquare className="w-12 h-12 mb-4 opacity-20" />
            <p className="text-sm">Hi! I am EMANATE\'s AI assistant. Ask me anything about our work in evidence-based research and advocacy.</p>
          </div>
        )}

        {messages.map((message, i) => (
          <div
            key={i}
            className={cn(
              "flex gap-2 text-sm leading-relaxed",
              message.role === 'user' ? "justify-end" : "justify-start"
            )}
          >
            <div className={cn(
              "rounded-lg px-4 py-2 max-w-[85%] break-words",
              message.role === 'user' 
                ? "bg-primary text-primary-foreground ml-4" 
                : "bg-muted text-foreground mr-4"
            )}>
              {message.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg px-4 py-2 max-w-[85%] mr-4">
              <Loader2 className="w-4 h-4 animate-spin" />
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={send} className="p-4 border-t bg-background/50">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-background rounded-md px-3 py-2 text-sm border focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            <SendHorizonal className="w-4 h-4" />
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </form>
    </div>
  )
}
