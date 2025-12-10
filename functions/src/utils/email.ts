import { db, FieldValue } from '../config/firebase';

/**
 * Queue an email to be sent via Firebase Trigger Email extension
 */
export async function queueEmail(
  to: string,
  template: string,
  data: Record<string, unknown>
): Promise<void> {
  await db.collection('mail').add({
    to,
    template: {
      name: template,
      data: {
        ...data,
        supportEmail: 'support@homecampus.ai',
        appUrl: 'https://homecampus.ai'
      }
    },
    createdAt: FieldValue.serverTimestamp()
  });
}

// Email template names
export const EMAIL_TEMPLATES = {
  CHILD_TRIAL_STARTED: 'child-trial-started',
  CHILD_TRIAL_ENDING_SOON: 'child-trial-ending-soon',
  CHILD_TRIAL_ENDED: 'child-trial-ended',
  CHILD_SUBSCRIPTION_ACTIVATED: 'child-subscription-activated',
  PAYMENT_FAILED: 'payment-failed',
  SUBSCRIPTION_CANCELED: 'subscription-canceled',
  SUBSCRIPTION_RENEWED: 'subscription-renewed',
  SUBSCRIPTION_REFUNDED: 'subscription-refunded',
  ADMIN_DISPUTE_ALERT: 'admin-dispute-alert',
} as const;
