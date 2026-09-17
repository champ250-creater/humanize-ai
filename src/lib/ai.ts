import { GoogleGenAI } from '@google/genai';

/** Lazy-initialized Gemini client */
let _client: GoogleGenAI | null = null;

export function getGeminiClient(): GoogleGenAI {
  if (!_client) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not set. Add it to your .env file.');
    }
    _client = new GoogleGenAI({ apiKey });
  }
  return _client;
}

/** Call Gemini with a system prompt and user message */
export async function callAI(options: {
  systemPrompt: string;
  userMessage: string;
  maxTokens?: number;
  temperature?: number;
}): Promise<string> {
  const client = getGeminiClient();
  const response = await client.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: options.userMessage,
    config: {
      systemInstruction: options.systemPrompt,
      maxOutputTokens: options.maxTokens ?? 4096,
      temperature: options.temperature ?? 0.7,
    }
  });

  if (!response.text) {
    throw new Error('No text response from Gemini');
  }
  return response.text;
}
