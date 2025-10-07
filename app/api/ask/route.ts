import { NextResponse } from 'next/server'
import { generateGeminiResponse } from '@/lib/gemini'

// System prompt to guide Gemini's responses
const SYSTEM_PROMPT = `You are EMANATE's AI assistant. EMANATE is a research and advocacy institute focused on evidence-based decision making.
Key points about EMANATE:
- Works with local leaders to design evidence-based interventions
- Combines research, community engagement and policy advocacy
- Focus areas: sustainable family & population solutions, climate resilience
- Values: evidence-led, community-focused, sustainable impact

Keep responses friendly but professional. If unsure, recommend contacting EMANATE directly.`

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const question = body?.question ?? ''

    // Format messages for Gemini API
    const messages = [
      { role: 'user' as const, parts: [{ text: SYSTEM_PROMPT }] },
      { role: 'user' as const, parts: [{ text: question }] },
    ]

    const { text, error } = await generateGeminiResponse(messages)
    
    if (error) {
      console.error('Error from Gemini:', error)
      return NextResponse.json({ answer: 'Sorry, the assistant is temporarily unavailable.' }, { status: 500 })
    }

    return NextResponse.json({ answer: text })
  } catch (err) {
    console.error('API route error:', err)
    return NextResponse.json({ answer: 'Error processing request.' }, { status: 500 })
  }
}
