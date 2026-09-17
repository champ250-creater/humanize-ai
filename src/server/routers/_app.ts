import { router } from '../trpc';
import { humanizerRouter } from './humanizer';
import { detectionRouter } from './detection';
import { citationsRouter } from './citations';

export const appRouter = router({
  humanizer: humanizerRouter,
  detection: detectionRouter,
  citations: citationsRouter,
});

export type AppRouter = typeof appRouter;
