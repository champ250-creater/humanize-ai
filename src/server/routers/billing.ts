import { z } from 'zod';
import { protectedProcedure, router } from '../trpc';
import Stripe from 'stripe';

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error('STRIPE_SECRET_KEY not set');
  return new Stripe(key, { apiVersion: '2026-08-26.dahlia' });
}

export const billingRouter = router({
  createCheckoutSession: protectedProcedure
    .input(z.object({ priceId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const stripe = getStripe();
      const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

      const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [{ price: input.priceId, quantity: 1 }],
        success_url: `${appUrl}/dashboard?upgraded=true`,
        cancel_url: `${appUrl}/dashboard?cancelled=true`,
        client_reference_id: ctx.userId,
        metadata: { userId: ctx.userId },
      });

      return { url: session.url };
    }),

  createPortalSession: protectedProcedure.mutation(async ({ ctx }) => {
    const stripe = getStripe();
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    // TODO: Get stripeCustomerId from database
    // const user = await db.query.users.findFirst({ where: eq(users.clerkId, ctx.userId) });
    // For now, return a placeholder
    return { url: `${appUrl}/dashboard/settings` };
  }),
});
