import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

/**
 * Clerk webhook handler.
 * Syncs user creation/updates from Clerk to our database.
 * In production, verify the webhook signature using svix.
 */
export async function POST(req: Request) {
  const headerPayload = await headers();
  const body = await req.json();

  const eventType = body.type as string;

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { id, email_addresses, first_name, last_name, image_url } = body.data;
    const primaryEmail = email_addresses?.[0]?.email_address;

    console.log(`[Clerk Webhook] ${eventType}:`, {
      clerkId: id,
      email: primaryEmail,
      name: `${first_name} ${last_name}`,
    });

    // TODO: Upsert user in database when DB is connected
    // await db.insert(users).values({ ... }).onConflictDoUpdate(...);
  }

  if (eventType === 'user.deleted') {
    const { id } = body.data;
    console.log(`[Clerk Webhook] user.deleted:`, { clerkId: id });
    // TODO: Soft-delete or archive user data
  }

  return NextResponse.json({ received: true });
}
