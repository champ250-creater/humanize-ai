import { z } from 'zod';
import { protectedProcedure, router } from '../trpc';
import { callClaude } from '@/lib/ai';
import { DETECTION_SYSTEM_PROMPT } from '@/lib/prompts';

export const detectionRouter = router({
  analyze: protectedProcedure
    .input(z.object({ text: z.string().min(20).max(50000) }))
    .mutation(async ({ input }) => {
      const result = await callClaude({
        systemPrompt: DETECTION_SYSTEM_PROMPT,
        userMessage: input.text,
        maxTokens: 4096,
        temperature: 0.3,
      });

      try {
        const parsed = JSON.parse(result);
        return {
          overallScore: parsed.overallScore ?? 0.5,
          sentences: parsed.sentences ?? [],
          topIssues: parsed.topIssues ?? [],
          recommendation: parsed.recommendation ?? 'Unable to analyze.',
        };
      } catch {
        return {
          overallScore: 0.5,
          sentences: [],
          topIssues: ['Analysis parsing failed'],
          recommendation: 'Please try again.',
        };
      }
    }),
});
