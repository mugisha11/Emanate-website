"use client"

import React, { useState } from 'react'
import { AskAssistant } from './ask-assistant'

export function AiFab() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end">
      {open && (
        <div className="mr-4 mb-12 w-[360px] max-w-[calc(100vw-48px)]">
          <div className="bg-zinc-900/95 p-3 rounded-lg shadow-2xl">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-white">Ask EMANATE</h4>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 text-sm px-2 py-1 rounded hover:bg-white/5"
                aria-label="Close assistant"
              >
                Close
              </button>
            </div>

            <AskAssistant />
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open Ask EMANATE"
        className="w-14 h-14 rounded-full bg-white shadow-lg ring-1 ring-zinc-200 flex items-center justify-center"
      >
        <img src="/placeholder-user.jpg" alt="EMANATE AI" className="w-12 h-12 rounded-full object-cover" />
      </button>
    </div>
  )
}
