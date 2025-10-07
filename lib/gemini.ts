const GEMINI_API_KEY = 'AIzaSyBpc0vmfVRP8ap2PW2mdF2Y6BIDVj882P8'
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'

export interface GeminiMessage {
  role: 'user' | 'model'
  parts: { text: string }[]
}

export async function generateGeminiResponse(
  messages: GeminiMessage[],
  options: { maxTokens?: number } = {}
) {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: messages,
        generationConfig: {
          maxOutputTokens: options.maxTokens || 800,
          temperature: 0.7,
          topP: 0.8,
          topK: 40,
        },
      }),
    })

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.statusText}`)
    }

    const data = await response.json()
    return {
      text: data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, could not generate a response.',
      error: null,
    }
  } catch (error) {
    console.error('Gemini API error:', error)
    return {
      text: 'Sorry, there was an error reaching the assistant.',
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}