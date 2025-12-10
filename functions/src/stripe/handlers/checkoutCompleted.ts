import Stripe from 'stripe';
import { db, FieldValue } from '../../config/firebase';

/**
 * Handle checkout.session.completed event
 * Maps Stripe customer to Firebase user (parent)
 */
export async function handleCheckoutCompleted(session: Stripe.Checkout.Session): Promise<void> {
  const customerId = session.customer as string;
  const parentUid = session.client_reference_id || session.metadata?.parentUid;

  if (!customerId || !parentUid) {
    console.error('Missing customer ID or parent UID in checkout session', session.id);
    return;
  }

  // Ensure stripeCustomers mapping exists
  const customerRef = db.collection('stripeCustomers').doc(customerId);
  const customerDoc = await customerRef.get();

  if (!customerDoc.exists) {
    await customerRef.set({
      uid: parentUid,
      email: session.customer_email || session.customer_details?.email || '',
      createdAt: FieldValue.serverTimestamp()
    });
  }

  // Update parent's stripeCustomerId if not set
  const parentRef = db.collection('users').doc(parentUid);
  const parentDoc = await parentRef.get();

  if (parentDoc.exists && !parentDoc.data()?.stripeCustomerId) {
    await parentRef.update({
      stripeCustomerId: customerId
    });
  }

  console.log(`Checkout completed: customer ${customerId} mapped to user ${parentUid}`);
}
