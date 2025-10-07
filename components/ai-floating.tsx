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
        className="fixed right-4 bottom-4 z-50 w-14 h-14 rounded-full shadow-lg bg-gradient-to-br from-[#6b21a8] to-[#0a58ca] flex items-center justify-center ring-1 ring-black/10 hover:scale-105 transition"
      >
        {/* Modern AI SVG icon */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="text-white">
          <path d="M12 3C7.03 3 3 6.58 3 11c0 1.96.8 3.76 2.14 5.17L5 21l5.17-1.14C11.24 20.2 11.6 20 12 20c4.97 0 9-3.58 9-9s-4.03-8-9-8z" stroke="rgba(255,255,255,0.95)" strokeWidth="0.6" fill="rgba(255,255,255,0.06)" />
          <path d="M8.5 10.5c0-1.1.9-2 2-2s2 .9 2 2" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 14.5c.5-.5 1.2-1 3-1" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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
