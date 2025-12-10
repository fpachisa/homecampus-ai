/**
 * Trial Reminder Scheduled Job
 * Runs daily at 09:00 SGT to:
 * 1. Send reminder emails for trials ending soon (within 2 days)
 * 2. Expire trials that have ended
 */

import { onSchedule } from 'firebase-functions/v2/scheduler';
import { db, Timestamp, FieldValue } from '../config/firebase';
import { queueEmail, EMAIL_TEMPLATES } from '../utils/email';

export const trialReminderJob = onSchedule(
  {
    schedule: 'every day 09:00',
    timeZone: 'Asia/Singapore',
    region: 'asia-southeast1',
  },
  async () => {
    const now = Timestamp.now();
    const twoDaysFromNow = Timestamp.fromMillis(
      now.toMillis() + 2 * 24 * 60 * 60 * 1000
    );

    let remindersProcessed = 0;
    let expirationsProcessed = 0;

    // QUERY 1: Trials ending soon (within 2 days) that haven't been notified
    console.log('Querying for trials ending soon...');
    const endingSoonQuery = await db
      .collection('activeTrials')
      .where('effectiveTrialEnd', '<=', twoDaysFromNow)
      .where('effectiveTrialEnd', '>', now)
      .where('reminderSent', '==', false)
      .get();

    console.log(`Found ${endingSoonQuery.size} trials ending soon`);

    for (const trialDoc of endingSoonQuery.docs) {
      const trial = trialDoc.data();

      try {
        // Get parent and child info for email
        const parentDoc = await db.collection('users').doc(trial.parentUid).get();
        const childDoc = await db
          .collection('users')
          .doc(trial.parentUid)
          .collection('childProfiles')
          .doc(trial.childProfileId)
          .get();

        if (parentDoc.exists && childDoc.exists) {
          const parentData = parentDoc.data();
          const childData = childDoc.data();

          // Queue reminder email
          await queueEmail(
            parentData?.email,
            EMAIL_TEMPLATES.CHILD_TRIAL_ENDING_SOON,
            {
              parentName: parentData?.displayName || 'Parent',
              childName: childData?.displayName || 'Your child',
              trialEndDate: trial.effectiveTrialEnd.toDate().toLocaleDateString('en-SG', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              }),
              subscribeUrl: 'https://homecampus.ai/billing',
            }
          );

          // Mark as notified (prevent duplicates)
          await trialDoc.ref.update({ reminderSent: true });
          remindersProcessed++;
          console.log(`Sent reminder for child ${trial.childProfileId}`);
        }
      } catch (error) {
        console.error(`Error processing reminder for trial ${trialDoc.id}:`, error);
      }
    }

    // QUERY 2: Expired trials that haven't been processed
    console.log('Querying for expired trials...');
    const expiredQuery = await db
      .collection('activeTrials')
      .where('effectiveTrialEnd', '<=', now)
      .where('expiredProcessed', '==', false)
      .get();

    console.log(`Found ${expiredQuery.size} expired trials`);

    for (const trialDoc of expiredQuery.docs) {
      const trial = trialDoc.data();

      try {
        // Update child's subscription status to trial_expired
        const childRef = db
          .collection('users')
          .doc(trial.parentUid)
          .collection('childProfiles')
          .doc(trial.childProfileId);

        await childRef.update({
          'subscription.subscriptionStatus': 'trial_expired',
          'subscription.updatedAt': FieldValue.serverTimestamp(),
        });

        // Get parent and child info for email
        const parentDoc = await db.collection('users').doc(trial.parentUid).get();
        const childDoc = await childRef.get();

        if (parentDoc.exists && childDoc.exists) {
          const parentData = parentDoc.data();
          const childData = childDoc.data();

          // Queue trial ended email
          await queueEmail(
            parentData?.email,
            EMAIL_TEMPLATES.CHILD_TRIAL_ENDED,
            {
              parentName: parentData?.displayName || 'Parent',
              childName: childData?.displayName || 'Your child',
              subscribeUrl: 'https://homecampus.ai/billing',
            }
          );
        }

        // Mark as processed
        await trialDoc.ref.update({ expiredProcessed: true });
        expirationsProcessed++;
        console.log(`Expired trial for child ${trial.childProfileId}`);
      } catch (error) {
        console.error(`Error processing expiration for trial ${trialDoc.id}:`, error);
      }
    }

    console.log(
      `Trial reminder job complete: ${remindersProcessed} reminders, ${expirationsProcessed} expirations`
    );
  }
);
