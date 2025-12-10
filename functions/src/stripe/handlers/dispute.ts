import Stripe from 'stripe';
import { db, FieldValue } from '../../config/firebase';
import { queueEmail, EMAIL_TEMPLATES } from '../../utils/email';
import { getStripeClient } from '../../config/stripe';

/**
 * Handle charge.dispute.created event
 * Logs dispute, alerts admin
 */
export async function handleDispute(dispute: Stripe.Dispute): Promise<void> {
  const stripe = getStripeClient();

  // Get charge details
  const charge = await stripe.charges.retrieve(dispute.charge as string);

  if (!charge.invoice) {
    console.log('Dispute for non-subscription charge:', dispute.id);
    // Still log the dispute
    await db.collection('disputes').add({
      disputeId: dispute.id,
      chargeId: charge.id,
      parentUid: null,
      childProfileId: null,
      amount: dispute.amount,
      reason: dispute.reason,
      status: dispute.status,
      createdAt: FieldValue.serverTimestamp()
    });
    return;
  }

  const invoice = await stripe.invoices.retrieve(charge.invoice as string);

  if (!invoice.subscription) {
    console.log('Invoice has no subscription:', invoice.id);
    return;
  }

  const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);
  const parentUid = subscription.metadata?.parentUid;
  const childProfileId = subscription.metadata?.childProfileId;

  // Log dispute for admin review
  await db.collection('disputes').add({
    disputeId: dispute.id,
    chargeId: charge.id,
    parentUid: parentUid || null,
    childProfileId: childProfileId || null,
    customerId: typeof charge.customer === 'string' ? charge.customer : charge.customer?.id,
    amount: dispute.amount,
    reason: dispute.reason,
    status: dispute.status,
    evidence_due_by: dispute.evidence_details?.due_by
      ? new Date(dispute.evidence_details.due_by * 1000)
      : null,
    createdAt: FieldValue.serverTimestamp()
  });

  // OPTIONAL: Suspend access during dispute
  // Uncomment if you want to suspend access when disputes occur
  /*
  if (parentUid && childProfileId) {
    const childRef = db
      .collection('users')
      .doc(parentUid)
      .collection('childProfiles')
      .doc(childProfileId);

    await childRef.update({
      'subscription.subscriptionStatus': 'disputed',
      'subscription.updatedAt': FieldValue.serverTimestamp()
    });
  }
  */

  // Alert admin via email
  try {
    await queueEmail('admin@homecampus.ai', EMAIL_TEMPLATES.ADMIN_DISPUTE_ALERT, {
      disputeId: dispute.id,
      parentUid: parentUid || 'Unknown',
      childProfileId: childProfileId || 'Unknown',
      amount: (dispute.amount / 100).toFixed(2),
      currency: dispute.currency.toUpperCase(),
      reason: dispute.reason,
      evidenceDueBy: dispute.evidence_details?.due_by
        ? new Date(dispute.evidence_details.due_by * 1000).toLocaleDateString('en-SG')
        : 'Unknown'
    });
  } catch (emailError) {
    console.error('Failed to queue admin dispute alert:', emailError);
  }

  console.log(`Dispute ${dispute.id} logged and admin notified`);
}
