/**
 * Admin Trial Extension Function
 * Allows admins to extend trials for specific child profiles
 */

import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { db, Timestamp, FieldValue } from '../config/firebase';

interface ExtendTrialRequest {
  parentUid: string;
  childProfileId: string;
  extendUntil: string; // ISO date string
  reason: string;
}

interface ExtendTrialResponse {
  success: boolean;
  extendedUntil: string;
}

export const extendTrial = onCall<ExtendTrialRequest, Promise<ExtendTrialResponse>>(
  { region: 'asia-southeast1' },
  async (request) => {
    // Verify caller is an admin
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Must be logged in');
    }

    if (!request.auth.token.admin) {
      throw new HttpsError(
        'permission-denied',
        'Only administrators can extend trials'
      );
    }

    const { parentUid, childProfileId, extendUntil, reason } = request.data;

    // Validate required fields
    if (!parentUid || !childProfileId || !extendUntil || !reason) {
      throw new HttpsError(
        'invalid-argument',
        'Missing required fields: parentUid, childProfileId, extendUntil, reason'
      );
    }

    // Parse and validate the extension date
    const extendDate = new Date(extendUntil);
    if (isNaN(extendDate.getTime())) {
      throw new HttpsError('invalid-argument', 'Invalid extendUntil date format');
    }

    // Ensure extension is in the future
    if (extendDate <= new Date()) {
      throw new HttpsError(
        'invalid-argument',
        'Extension date must be in the future'
      );
    }

    const extendTimestamp = Timestamp.fromDate(extendDate);
    const batch = db.batch();

    // 1. Update child profile subscription
    const childRef = db
      .collection('users')
      .doc(parentUid)
      .collection('childProfiles')
      .doc(childProfileId);

    const childDoc = await childRef.get();
    if (!childDoc.exists) {
      throw new HttpsError('not-found', 'Child profile not found');
    }

    batch.update(childRef, {
      'subscription.trialExtendedUntil': extendTimestamp,
      'subscription.trialExtensionReason': reason,
      'subscription.trialExtensionSetBy': request.auth.uid,
      'subscription.trialExtensionSetAt': FieldValue.serverTimestamp(),
      'subscription.subscriptionStatus': 'trial', // Reset to trial if expired
      'subscription.updatedAt': FieldValue.serverTimestamp(),
    });

    // 2. Update or create activeTrials record
    const trialRef = db.collection('activeTrials').doc(`${parentUid}_${childProfileId}`);
    const trialDoc = await trialRef.get();

    if (trialDoc.exists) {
      // Update existing record - reset flags for new reminders
      batch.update(trialRef, {
        effectiveTrialEnd: extendTimestamp,
        reminderSent: false,
        expiredProcessed: false,
      });
    } else {
      // Create new record (edge case: admin extending after record was deleted)
      const childData = childDoc.data();
      batch.set(trialRef, {
        parentUid,
        childProfileId,
        trialEndDate: childData?.subscription?.trialEndDate || extendTimestamp,
        effectiveTrialEnd: extendTimestamp,
        reminderSent: false,
        expiredProcessed: false,
      });
    }

    // Commit atomically
    await batch.commit();

    console.log(
      `Admin ${request.auth.uid} extended trial for child ${childProfileId} until ${extendDate.toISOString()}. Reason: ${reason}`
    );

    return {
      success: true,
      extendedUntil: extendDate.toISOString(),
    };
  }
);
