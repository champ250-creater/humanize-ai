import { router } from '../trpc';
import { humanizerRouter } from './humanizer';
import { detectionRouter } from './detection';
import { citationsRouter } from './citations';
import { billingRouter } from './billing';

export const appRouter = router({
  humanizer: humanizerRouter,
  detection: detectionRouter,
  citations: citationsRouter,
  billing: billingRouter,
});

export type AppRouter = typeof appRouter;
