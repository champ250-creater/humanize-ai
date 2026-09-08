/**
 * Humanizer tRPC router.
 * Handles text humanization requests with AI processing.
 */
import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

/** Input schema for the humanize mutation */
const humanizeInputSchema = z.object({
  text: z
    .string()
    .min(50, "Text must be at least 50 characters")
    .max(50000, "Text must be under 50,000 characters"),
  academicLevel: z.enum([
    "high_school",
    "undergraduate",
    "masters",
    "phd",
    "postdoctoral",
  ]),
  discipline: z.enum([
    "stem",
    "humanities",
    "social_sciences",
    "business",
    "law",
    "medical",
    "general",
  ]),
  toneSettings: z.object({
    formality: z.number().min(0).max(100),
    creativity: z.number().min(0).max(100),
    assertiveness: z.number().min(0).max(100),
  }),
  documentId: z.string().uuid().optional(),
});

export const humanizerRouter = router({
  /**
   * Humanize AI-generated text.
   * Takes input text with configuration and returns natural, human-like prose.
   */
  humanize: protectedProcedure
    .input(humanizeInputSchema)
    .mutation(async ({ input }) => {
      const startTime = Date.now();
      const wordCount = input.text.split(/\s+/).filter(Boolean).length;

      // ── In production, this calls Claude 3.5 Sonnet ──
      // For now, return a simulated response
      // TODO: Integrate with Anthropic SDK
      // const systemPrompt = buildHumanizerPrompt({ ... });
      // const response = await anthropic.messages.create({ ... });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const humanizedText = simulateHumanization(input.text);
      const latencyMs = Date.now() - startTime;

      return {
        humanizedText,
        wordCount,
        latencyMs,
        aiDetectionScore: 0.08 + Math.random() * 0.07, // Simulated 8-15%
      };
    }),
});

/**
 * Simulates text humanization for demo purposes.
 * In production, this is replaced by actual Claude API calls.
 */
function simulateHumanization(input: string): string {
  const sentences = input.split(/(?<=[.!?])\s+/);

  const transitions: Record<string, string> = {
    Furthermore: "And yet",
    Moreover: "But",
    Additionally: "Still",
    "In conclusion": "So, what does this all mean?",
    "It is worth noting": "The thing is",
    "plays a crucial role": "matters a lot",
    "In today's world": "Right now",
    "shed light on": "help us understand",
    "a myriad of": "many",
    "a plethora of": "plenty of",
  };

  return sentences
    .map((sentence) => {
      let result = sentence;
      for (const [ai, human] of Object.entries(transitions)) {
        result = result.replace(new RegExp(ai, "gi"), human);
      }
      return result;
    })
    .join(" ");
}
