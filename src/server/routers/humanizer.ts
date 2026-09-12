import { z } from 'zod';
import { protectedProcedure, router } from '../trpc';
import { callClaude } from '@/lib/ai';
import { buildHumanizerPrompt } from '@/lib/prompts';

const humanizeInputSchema = z.object({
  text: z.string().min(50, 'Text must be at least 50 characters').max(50000, 'Text must be under 50,000 characters'),
  academicLevel: z.enum(['high_school', 'undergraduate', 'masters', 'phd', 'postdoctoral']),
  discipline: z.enum(['stem', 'humanities', 'social_sciences', 'business', 'law', 'medical', 'general']),
  toneSettings: z.object({
    formality: z.number().min(0).max(100),
    creativity: z.number().min(0).max(100),
    assertiveness: z.number().min(0).max(100),
  }),
  documentId: z.string().uuid().optional(),
});

export const humanizerRouter = router({
  humanize: protectedProcedure.input(humanizeInputSchema).mutation(async ({ input, ctx }) => {
    const startTime = Date.now();
    const wordCount = input.text.split(/\s+/).filter(Boolean).length;

    const systemPrompt = buildHumanizerPrompt({
      academicLevel: input.academicLevel,
      discipline: input.discipline,
      toneSettings: input.toneSettings,
      voiceProfile: null,
    });

    const humanizedText = await callClaude({
      systemPrompt,
      userMessage: `Please humanize the following text:\n\n${input.text}`,
      maxTokens: Math.max(4096, wordCount * 3),
      temperature: 0.75 + (input.toneSettings.creativity / 100) * 0.2,
    });

    const latencyMs = Date.now() - startTime;

    // TODO: Log usage to database
    // await db.insert(usageLogs).values({ userId: ctx.userId, action: 'humanize', wordsProcessed: wordCount, ... });

    return {
      humanizedText,
      wordCount,
      latencyMs,
      aiDetectionScore: null, // Will be filled by separate detection call
    };
  }),
});
