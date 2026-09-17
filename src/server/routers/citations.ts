import { z } from 'zod';
import { protectedProcedure, router } from '../trpc';
import { callAI } from '@/lib/ai';
import { CITATION_EXTRACTOR_PROMPT } from '@/lib/prompts';

export const citationsRouter = router({
  generate: protectedProcedure
    .input(z.object({
      source: z.string().min(3, 'Enter a URL, DOI, or reference text'),
      style: z.enum(['apa7', 'mla9', 'chicago17', 'ieee', 'harvard', 'vancouver']).default('apa7'),
    }))
    .mutation(async ({ input }) => {
      const result = await callAI({
        systemPrompt: CITATION_EXTRACTOR_PROMPT,
        userMessage: `Extract citation metadata and format in ${input.style} style:\n\n${input.source}`,
        maxTokens: 2048,
        temperature: 0.2,
      });

      try {
        return JSON.parse(result);
      } catch {
        return { formatted: result, raw: null };
      }
    }),
});
