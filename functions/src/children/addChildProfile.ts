import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { db, Timestamp } from '../config/firebase';
import { createTrialSubscription, ChildProfile } from '../types/subscription';
import { queueEmail, EMAIL_TEMPLATES } from '../utils/email';

interface AddChildRequest {
  displayName: string;
  gradeLevel: string;
  avatarUrl?: string;
}

interface AddChildResponse {
  childProfileId: string;
  trialEndDate: string;
}

export const addChildProfile = onCall<AddChildRequest, Promise<AddChildResponse>>(
  {
    region: 'asia-southeast1',
    // enforceAppCheck: true,  // Enable in production
  },
  async (request) => {
    // 1. Validate authenticated user
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Must be logged in');
    }
    const parentUid = request.auth.uid;

    // 2. Verify caller is a parent account
    const parentDoc = await db.collection('users').doc(parentUid).get();
    if (!parentDoc.exists) {
      throw new HttpsError('not-found', 'User profile not found');
    }

    const parentData = parentDoc.data();
    if (parentData?.accountType !== 'parent') {
      throw new HttpsError('permission-denied', 'Only parents can add children');
    }

    // 3. Validate input
    const { displayName, gradeLevel, avatarUrl } = request.data;

    if (!displayName || typeof displayName !== 'string' || displayName.trim().length === 0) {
      throw new HttpsError('invalid-argument', 'Display name is required');
    }

    if (!gradeLevel || typeof gradeLevel !== 'string') {
      throw new HttpsError('invalid-argument', 'Grade level is required');
    }

    // 4. Generate child profile ID
    const childProfileId = db.collection('_').doc().id;

    // 5. Initialize trial subscription
    const now = Timestamp.now();
    const subscription = createTrialSubscription(now);
    const trialEnd = subscription.trialEndDate;

    const childProfile: ChildProfile = {
      profileId: childProfileId,
      displayName: displayName.trim(),
      gradeLevel,
      avatarUrl: avatarUrl || null,
      createdAt: now,
      subscription
    };

    // 6. Use batch write for atomicity
    const batch = db.batch();

    // Create child profile in subcollection
    const childRef = db
      .collection('users')
      .doc(parentUid)
      .collection('childProfiles')
      .doc(childProfileId);
    batch.set(childRef, childProfile);

    // Create active trial record for efficient queries
    const trialRef = db.collection('activeTrials').doc(`${parentUid}_${childProfileId}`);
    batch.set(trialRef, {
      parentUid,
      childProfileId,
      trialEndDate: trialEnd,
      effectiveTrialEnd: trialEnd,
      reminderSent: false,
      expiredProcessed: false
    });

    await batch.commit();

    // 7. Queue welcome email (non-blocking)
    try {
      await queueEmail(parentData.email, EMAIL_TEMPLATES.CHILD_TRIAL_STARTED, {
        parentName: parentData.displayName || 'Parent',
        childName: displayName.trim(),
        trialEndDate: trialEnd.toDate().toLocaleDateString('en-SG', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      });
    } catch (emailError) {
      // Don't fail the request if email fails
      console.error('Failed to queue welcome email:', emailError);
    }

    console.log(`Child profile ${childProfileId} created for parent ${parentUid}`);

    return {
      childProfileId,
      trialEndDate: trialEnd.toDate().toISOString()
    };
  }
);
