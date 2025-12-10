import { onRequest } from 'firebase-functions/v2/https';
import Stripe from 'stripe';
import { db, FieldValue, Timestamp } from '../config/firebase';
import { STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, getStripeClient } from '../config/stripe';
import { handleCheckoutCompleted } from './handlers/checkoutCompleted';
import { handleSubscriptionCreated, handleSubscriptionUpdated, handleSubscriptionDeleted } from './handlers/subscription';
import { handlePaymentSucceeded, handlePaymentFailed } from './handlers/payment';
import { handleRefund } from './handlers/refund';
import { handleDispute } from './handlers/dispute';

export const stripeWebhook = onRequest(
  {
    region: 'asia-southeast1',
    secrets: [STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET],
  },
  async (req, res) => {
    // Only allow POST requests
    if (req.method !== 'POST') {
      res.status(405).send('Method Not Allowed');
      return;
    }

    const sig = req.headers['stripe-signature'];
    if (!sig) {
      res.status(400).send('Missing stripe-signature header');
      return;
    }

    const stripe = getStripeClient();
    let event: Stripe.Event;

    try {
      // CRITICAL: Use req.rawBody, not req.body
      // DO NOT use body-parsing middleware on this route
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        sig as string,
        STRIPE_WEBHOOK_SECRET.value()
      );
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      res.status(400).send(`Webhook Error: ${(err as Error).message}`);
      return;
    }

    // Idempotency check
    const eventRef = db.collection('stripeEvents').doc(event.id);
    const existing = await eventRef.get();

    // Already fully processed - skip
    if (existing.exists && existing.data()?.processedAt) {
      console.log(`Event ${event.id} already processed, skipping`);
      res.status(200).send('Already processed');
      return;
    }

    // STEP 1: Mark as received (but not processed yet)
    if (!existing.exists) {
      await eventRef.set({
        type: event.type,
        created: event.created,
        receivedAt: FieldValue.serverTimestamp(),
        processedAt: null,
      });
    }

    try {
      // Handle event types
      switch (event.type) {
        case 'checkout.session.completed':
          await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
          break;

        case 'customer.subscription.created':
          await handleSubscriptionCreated(event.data.object as Stripe.Subscription);
          break;

        case 'customer.subscription.updated':
          await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
          break;

        case 'customer.subscription.deleted':
          await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
          break;

        case 'invoice.payment_succeeded':
          await handlePaymentSucceeded(event.data.object as Stripe.Invoice);
          break;

        case 'invoice.payment_failed':
          await handlePaymentFailed(event.data.object as Stripe.Invoice);
          break;

        case 'charge.refunded':
          await handleRefund(event.data.object as Stripe.Charge);
          break;

        case 'charge.dispute.created':
          await handleDispute(event.data.object as Stripe.Dispute);
          break;

        default:
          console.log(`Unhandled event type: ${event.type}`);
      }

      // STEP 2: Mark as successfully processed
      await eventRef.update({
        processedAt: FieldValue.serverTimestamp(),
        expireAt: Timestamp.fromMillis(Date.now() + 90 * 24 * 60 * 60 * 1000) // TTL: 90 days
      });

      console.log(`Event ${event.id} (${event.type}) processed successfully`);
      res.status(200).send('OK');

    } catch (error) {
      console.error(`Webhook handler failed for ${event.type}:`, error);
      // Return non-2xx so Stripe retries
      res.status(500).send('Handler failed');
    }
  }
);
