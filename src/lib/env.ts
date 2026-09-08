const requireEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

export const env = {
  DATABASE_URL: requireEnv('DATABASE_URL'),
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: requireEnv('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY'),
  CLERK_SECRET_KEY: requireEnv('CLERK_SECRET_KEY'),
  ANTHROPIC_API_KEY: requireEnv('ANTHROPIC_API_KEY'),
  STRIPE_SECRET_KEY: requireEnv('STRIPE_SECRET_KEY'),
  STRIPE_WEBHOOK_SECRET: requireEnv('STRIPE_WEBHOOK_SECRET'),
  NEXT_PUBLIC_APP_URL: requireEnv('NEXT_PUBLIC_APP_URL'),
} as const;
