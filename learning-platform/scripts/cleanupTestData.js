import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
// Initialize with emulator settings
process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';
process.env.FIREBASE_AUTH_EMULATOR_HOST = 'localhost:9099';

// Initialize app with projectId
initializeApp({ projectId: 'homecampus-ai' });

const db = getFirestore();

const PARENT_UID = 'test_parent_uid';
const CHILD_IDS = [
    'child_trial_ending',
    'child_active',
    'child_past_due',
    'child_canceled',
    'child_grace_expired',
    'child_expired',
    'child_newly_added',
    'child_trial_2_days'
];

async function deleteCollection(db, collectionPath, batchSize) {
    const collectionRef = db.collection(collectionPath);
    const query = collectionRef.orderBy('__name__').limit(batchSize);

    return new Promise((resolve, reject) => {
        deleteQueryBatch(db, query, resolve).catch(reject);
    });
}

async function deleteQueryBatch(db, query, resolve) {
    const snapshot = await query.get();

    const batchSize = snapshot.size;
    if (batchSize === 0) {
        resolve();
        return;
    }

    const batch = db.batch();
    snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
    });
    await batch.commit();

    process.nextTick(() => {
        deleteQueryBatch(db, query, resolve);
    });
}

async function cleanup() {
    console.log('Starting cleanup...');

    try {
        // 1. Delete Parent User Document and Subcollections
        console.log(`Deleting parent user ${PARENT_UID}...`);
        // Note: Recursive delete is not natively supported in simple admin SDK without cloud functions or manual recursion
        // For this specific test case, we know the subcollections.

        // Delete subcollection 'childProfiles'
        const childProfilesRefs = await db.collection('users').doc(PARENT_UID).collection('childProfiles').listDocuments();
        if (childProfilesRefs.length > 0) {
            const batch = db.batch();
            childProfilesRefs.forEach(doc => batch.delete(doc));
            await batch.commit();
            console.log(`- Deleted ${childProfilesRefs.length} child profiles from subcollection.`);
        }

        // Delete parent doc
        await db.collection('users').doc(PARENT_UID).delete();
        console.log('- Deleted parent document.');

        // 2. Delete Shadow User Documents
        console.log('Deleting shadow child documents...');
        const shadowBatch = db.batch();
        for (const childId of CHILD_IDS) {
            const docRef = db.collection('users').doc(childId);
            shadowBatch.delete(docRef);
        }
        await shadowBatch.commit();
        console.log(`- Deleted up to ${CHILD_IDS.length} shadow documents.`);

        // 3. Delete Progress Summaries
        console.log('Deleting progress summaries...');
        const progressBatch = db.batch();
        for (const childId of CHILD_IDS) {
            const docRef = db.collection('progressSummaries').doc(childId);
            progressBatch.delete(docRef);
        }
        await progressBatch.commit();
        console.log('- Deleted progress summaries.');

        // 4. Delete Active Trials
        console.log('Deleting active trial records...');
        const trialsSnapshot = await db.collection('activeTrials')
            .where('parentUid', '==', PARENT_UID)
            .get();

        if (!trialsSnapshot.empty) {
            const trialBatch = db.batch();
            trialsSnapshot.forEach(doc => trialBatch.delete(doc.ref));
            await trialBatch.commit();
            console.log(`- Deleted ${trialsSnapshot.size} active trial records.`);
        } else {
            console.log('- No active trials found.');
        }

        console.log('Cleanup complete!');
    } catch (error) {
        console.error('Error during cleanup:', error);
    }
}

cleanup();
