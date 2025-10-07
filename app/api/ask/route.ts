import { NextResponse } from 'next/server'
import { generateGeminiResponse } from '@/lib/gemini'
import { SYSTEM_CONTEXT, CHAT_PROMPT } from '@/lib/prompts'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const question = body?.question ?? ''

    // Format messages for Gemini API with rich context
    const messages = [
      { role: 'user' as const, parts: [{ text: SYSTEM_CONTEXT }] },
      { role: 'assistant' as const, parts: [{ text: 'I understand. I will help users with questions about EMANATE.' }] },
      { role: 'user' as const, parts: [{ text: CHAT_PROMPT }] },
      { role: 'assistant' as const, parts: [{ text: 'I will act as EMANATE\'s AI assistant and provide accurate, helpful information about the organization.' }] },
      { role: 'user' as const, parts: [{ text: question }] },
    ]

    const { text, error } = await generateGeminiResponse(messages)
    
    if (error) {
      console.error('Error from Gemini:', error)
      return NextResponse.json({ 
        answer: 'Sorry, I\'m temporarily unavailable. Please try again later or contact info@emanate.org for immediate assistance.' 
      }, { status: 500 })
    }

    return NextResponse.json({ answer: text })
  } catch (err) {
    console.error('API route error:', err)
    return NextResponse.json({ 
      answer: 'I apologize, but I encountered an error. For immediate assistance, please contact info@emanate.org or visit our website at https://emanateorg.netlify.app/' 
    }, { status: 500 })
  }
}
