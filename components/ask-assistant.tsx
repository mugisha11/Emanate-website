"use client"

import { useState } from 'react'

export function AskAssistant() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([])

  async function send() {
    if (!query.trim()) return
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
      setMessages((m) => [...m, { role: 'assistant', text: 'Error: could not reach assistant.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white/5 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-white mb-2">Ask EMANATE</h3>

      <div className="space-y-3 mb-3">
        {messages.map((m, i) => (
          <div key={i} className={`p-3 rounded-md ${m.role === 'user' ? 'bg-white/10 text-white self-end' : 'bg-white/10 text-white'}`}>
            <p className="text-sm">{m.text}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 rounded-md px-3 py-2 bg-white/10 text-white placeholder:text-white/70"
          placeholder="Ask a question about EMANATE"
          onKeyDown={(e) => e.key === 'Enter' && send()}
        />
        <button
          onClick={send}
          disabled={loading}
          className="rounded-md bg-[#0a58ca] px-4 py-2 text-white disabled:opacity-60"
        >
          {loading ? '...' : 'Ask'}
        </button>
      </div>

      <p className="mt-3 text-sm text-white/70">Note: This demo replies with canned answers unless an OpenAI key is configured.</p>
    </div>
  )
}
