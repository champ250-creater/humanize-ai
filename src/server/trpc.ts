/**
 * tRPC server configuration.
 * Sets up the tRPC context, middleware, and procedure builders.
 */
import { initTRPC, TRPCError } from "@trpc/server";
import { ZodError } from "zod";

/** Context available to every tRPC procedure */
export type TRPCContext = {
  userId: string | null;
};

/** Creates the tRPC context from the incoming request */
export async function createTRPCContext(): Promise<TRPCContext> {
  // In production, extract userId from Clerk session:
  // const { userId } = await auth();
  // For now, use a placeholder
  return {
    userId: "demo-user-id",
  };
}

const t = initTRPC.context<TRPCContext>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

/** Router factory */
export const router = t.router;

/** Public procedure — no auth required */
export const publicProcedure = t.procedure;

/** Protected procedure — requires authenticated user */
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.userId) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You must be logged in to perform this action.",
    });
  }
  return next({
    ctx: {
      ...ctx,
      userId: ctx.userId,
    },
  });
});
