import Stripe from 'stripe';
import { db, FieldValue } from '../../config/firebase';
import { queueEmail, EMAIL_TEMPLATES } from '../../utils/email';
import { getStripeClient } from '../../config/stripe';

/**
 * Handle charge.refunded event
 * Full refunds revoke access, partial refunds are goodwill (no change)
 */
export async function handleRefund(charge: Stripe.Charge): Promise<void> {
  // Get subscription from charge's invoice
  if (!charge.invoice) {
    console.log('Refund for non-subscription charge, ignoring:', charge.id);
    return;
  }

  const stripe = getStripeClient();
  const invoice = await stripe.invoices.retrieve(charge.invoice as string);

  if (!invoice.subscription) {
    console.log('Invoice has no subscription:', invoice.id);
    return;
  }

  const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);
  const parentUid = subscription.metadata?.parentUid;
  const childProfileId = subscription.metadata?.childProfileId;

  if (!parentUid || !childProfileId) {
    console.log('Missing metadata for subscription:', subscription.id);
    return;
  }

  const refundedAmount = charge.amount_refunded;
  const totalAmount = charge.amount;
  const isFullRefund = refundedAmount >= totalAmount;

  const childRef = db
    .collection('users')
    .doc(parentUid)
    .collection('childProfiles')
    .doc(childProfileId);

  const childDoc = await childRef.get();
  if (!childDoc.exists) {
    console.log('Child profile not found:', childProfileId);
    return;
  }

  if (isFullRefund) {
    // FULL REFUND: Revoke access
    await childRef.update({
      'subscription.subscriptionStatus': 'expired',
      'subscription.updatedAt': FieldValue.serverTimestamp()
    });

    // Notify parent
    try {
      const parentDoc = await db.collection('users').doc(parentUid).get();

      if (parentDoc.exists) {
        await queueEmail(parentDoc.data()?.email, EMAIL_TEMPLATES.SUBSCRIPTION_REFUNDED, {
          parentName: parentDoc.data()?.displayName || 'Parent',
          childName: childDoc.data()?.displayName || 'Your child',
          amount: (refundedAmount / 100).toFixed(2),
          currency: charge.currency.toUpperCase()
        });
      }
    } catch (emailError) {
      console.error('Failed to queue refund email:', emailError);
    }

    console.log(`Full refund processed for child ${childProfileId}, access revoked`);
  } else {
    // PARTIAL REFUND: Log only, don't revoke (goodwill)
    console.log(`Partial refund of ${refundedAmount / 100} for child ${childProfileId}, no access change`);
  }
}
