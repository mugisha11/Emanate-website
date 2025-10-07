"use client"

import { useState } from 'react'
import Image from 'next/image'
import { AskAssistant } from './ask-assistant'

export function AIFloating() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      {/* Floating button */}
      <button
        aria-label="Open Ask EMANATE"
        onClick={() => setOpen((s) => !s)}
        className="fixed right-4 bottom-4 z-50 w-14 h-14 rounded-full shadow-lg bg-white/90 flex items-center justify-center ring-1 ring-black/10 hover:scale-105 transition"
      >
        <img src="/placeholder-user.jpg" alt="Ask EMANATE" className="w-10 h-10 rounded-full object-cover" />
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed right-4 bottom-20 z-50 w-80 md:w-96 p-3">
          <AskAssistant />
        </div>
      )}
    </div>
  )
}
