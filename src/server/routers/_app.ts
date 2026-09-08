/**
 * Root tRPC router.
 * Merges all sub-routers into the main app router.
 */
import { router } from "../trpc";
import { humanizerRouter } from "./humanizer";

export const appRouter = router({
  humanizer: humanizerRouter,
  // TODO: Add more routers as features are built:
  // documents: documentsRouter,
  // citations: citationsRouter,
  // research: researchRouter,
  // detection: detectionRouter,
  // voiceProfile: voiceProfileRouter,
  // billing: billingRouter,
});

/** Type definition for the app router — used on the client */
export type AppRouter = typeof appRouter;
