import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const question = body?.question ?? ''

    // If OpenAI key is set, optionally forward the request. For now, return a canned response.
    if (!process.env.OPENAI_API_KEY) {
      const canned = `Thanks — I can help with that. Here's a short answer about "${question}". For more details please contact EMANATE.`
      return NextResponse.json({ answer: canned })
    }

    // If key exists, call OpenAI (simple fetch, you can replace with SDK)
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'system', content: 'You are EMANATE assistant. Answer concisely.' }, { role: 'user', content: question }],
        max_tokens: 300,
      }),
    })

    const data = await openaiRes.json()
    const answer = data?.choices?.[0]?.message?.content ?? 'Sorry, no answer available.'
    return NextResponse.json({ answer })
  } catch (err) {
    return NextResponse.json({ answer: 'Error processing request.' }, { status: 500 })
  }
}
