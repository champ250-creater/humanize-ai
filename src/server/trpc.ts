import { initTRPC } from '@trpc/server';
import { ZodError } from 'zod';

export type TRPCContext = {};

export async function createTRPCContext(): Promise<TRPCContext> {
  return {};
}

const t = initTRPC.context<TRPCContext>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const router = t.router;
export const publicProcedure = t.procedure;
// Map protectedProcedure to publicProcedure since everything is free now
export const protectedProcedure = t.procedure;
