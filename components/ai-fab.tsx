'use client'

import dynamic from 'next/dynamic'

const DynamicAIFloating = dynamic(() => import('./ai-floating').then(m => m.AIFloating), { ssr: false })

export function AIFab() {
  return <DynamicAIFloating />
}
