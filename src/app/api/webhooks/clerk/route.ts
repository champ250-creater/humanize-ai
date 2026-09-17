import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { db } from '@/server/db';
import { users } from '@/server/db/schema';

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

    try {
      await db.insert(users).values({
        clerkId: id,
        email: primaryEmail || '',
        firstName: first_name || '',
        lastName: last_name || '',
      }).onConflictDoUpdate({
        target: users.clerkId,
        set: {
          email: primaryEmail || '',
          firstName: first_name || '',
          lastName: last_name || '',
          updatedAt: new Date(),
        },
      });
      console.log(`Successfully synced user ${id} to database.`);
    } catch (error) {
      console.error(`Failed to sync user ${id}:`, error);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
  }

  if (eventType === 'user.deleted') {
    const { id } = body.data;
    console.log(`[Clerk Webhook] user.deleted:`, { clerkId: id });
    // TODO: Soft-delete or archive user data
  }

  return NextResponse.json({ received: true });
}
