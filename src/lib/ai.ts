import Anthropic from '@anthropic-ai/sdk';

/** Lazy-initialized Anthropic client */
let _client: Anthropic | null = null;

export function getAnthropicClient(): Anthropic {
  if (!_client) {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      throw new Error('ANTHROPIC_API_KEY is not set. Add it to your .env file.');
    }
    _client = new Anthropic({ apiKey });
  }
  return _client;
}

/** Call Claude with a system prompt and user message */
export async function callClaude(options: {
  systemPrompt: string;
  userMessage: string;
  maxTokens?: number;
  temperature?: number;
}): Promise<string> {
  const client = getAnthropicClient();
  const response = await client.messages.create({
    model: 'claude-3-5-sonnet-20240620',
    max_tokens: options.maxTokens ?? 4096,
    temperature: options.temperature ?? 0.7,
    system: options.systemPrompt,
    messages: [{ role: 'user', content: options.userMessage }],
  });

  const textBlock = response.content.find((block) => block.type === 'text');
  if (!textBlock || textBlock.type !== 'text') {
    throw new Error('No text response from Claude');
  }
  return textBlock.text;
}
