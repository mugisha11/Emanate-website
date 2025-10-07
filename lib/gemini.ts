const GEMINI_API_KEY = 'AIzaSyBpc0vmfVRP8ap2PW2mdF2Y6BIDVj882P8'
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent'

export interface GeminiMessage {
  role: 'user' | 'assistant' | 'model'
  parts: { text: string }[]
}

export async function generateGeminiResponse(
  messages: GeminiMessage[],
  options: { maxTokens?: number } = {}
) {
  try {
    // Get the latest message - Gemini does not support chat history
    const latestMessage = messages[messages.length - 1]
    
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': GEMINI_API_KEY
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: latestMessage.parts[0].text
          }]
        }]
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Gemini API error:', error);
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    const data = await response.json();
    const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      throw new Error('No response generated');
    }

    return {
      text: generatedText,
      error: null
    };
  } catch (error) {
    console.error('Gemini API error:', error);
    return {
      text: 'Sorry, there was an error reaching the assistant.',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}
