import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

// Initialize with emulator settings
process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';
process.env.FIREBASE_AUTH_EMULATOR_HOST = 'localhost:9099';

// Initialize app with projectId
initializeApp({ projectId: 'homecampus-ai' });

const db = getFirestore();
const auth = getAuth();

// Helper to create a full subscription object with all fields
function createSubscription(overrides = {}) {
    const now = Timestamp.now();
    return {
        subscriptionStatus: 'trial',
        trialStartDate: now,
        trialEndDate: now,
        trialExtendedUntil: null,
        trialExtensionReason: null,
        trialExtensionSetBy: null,
        trialExtensionSetAt: null,
        stripeCustomerId: null,
        subscriptionId: null,
        priceId: null,
        billingInterval: null,
        currentPeriodStart: null,
        currentPeriodEnd: null,
        cancelAtPeriodEnd: false,
        graceUntil: null,
        lastPaymentDate: null,
        lastPaymentAmount: null,
        currency: 'SGD',
        updatedAt: now,
        ...overrides,
    };
}

async function seedTestData() {
    const parentUid = 'test_parent_uid';
    const now = Timestamp.now();
    const day = 24 * 60 * 60 * 1000;

    console.log('🌱 Seeding test data...\n');

    // Create test user in Firebase Auth emulator with specific UID
    try {
        await auth.createUser({
            uid: parentUid,
            email: 'parent1@test.com',
            password: 'Test123!',
            displayName: 'Test Parent',
        });
        console.log('✅ Created auth user: parent1@test.com / Test123!');
    } catch (error) {
        if (error.code === 'auth/uid-already-exists') {
            console.log('ℹ️  Auth user already exists, skipping...');
        } else {
            throw error;
        }
    }

    // Child profiles array (for parent document - V2 dashboard reads from this)
    const childProfilesArray = [
        { profileId: 'child_trial_active', displayName: 'Active Trial Child', gradeLevel: 'Secondary 3' },
        { profileId: 'child_trial_ending', displayName: 'Trial Ending Child', gradeLevel: 'Secondary 2' },
        { profileId: 'child_trial_expired', displayName: 'Expired Trial Child', gradeLevel: 'Secondary 1' },
        { profileId: 'child_subscribed', displayName: 'Subscribed Child', gradeLevel: 'Secondary 4' },
        { profileId: 'child_past_due', displayName: 'Past Due Child', gradeLevel: 'Secondary 3' },
        { profileId: 'child_past_due_expired', displayName: 'Grace Expired Child', gradeLevel: 'Secondary 1' },
        { profileId: 'child_canceled', displayName: 'Canceled Child', gradeLevel: 'Secondary 3' },
        { profileId: 'child_expired', displayName: 'Expired Sub Child', gradeLevel: 'Secondary 2' },
        { profileId: 'child_extended_trial', displayName: 'Extended Trial Child', gradeLevel: 'Secondary 4' },
    ];

    // Create parent user document
    await db.collection('users').doc(parentUid).set({
        uid: parentUid,
        email: 'parent1@test.com',
        displayName: 'Test Parent',
        accountType: 'parent',
        stripeCustomerId: null,
        profileCompleted: true,
        isParent: true,
        isGuest: false,
        gradeLevel: '',
        pathProgress: {},
        childProfiles: childProfilesArray, // V2 dashboard reads from this array
        settings: { ttsSpeaker: 'default', theme: 'dark', audioEnabled: true },
        createdAt: now.toDate().toISOString(),
        lastLogin: now.toDate().toISOString(),
    });
    console.log('✅ Created parent user document with childProfiles array');

    const childProfiles = db.collection('users').doc(parentUid).collection('childProfiles');

    // 1. Active trial (4 days left)
    await childProfiles.doc('child_trial_active').set({
        profileId: 'child_trial_active',
        displayName: 'Active Trial Child',
        gradeLevel: 'Secondary 3',
        createdAt: now,
        avatarUrl: null,
        pathProgress: {},
        settings: { ttsSpeaker: 'default', theme: 'dark', audioEnabled: true },
        subscription: createSubscription({
            subscriptionStatus: 'trial',
            trialStartDate: Timestamp.fromMillis(now.toMillis() - 3 * day),
            trialEndDate: Timestamp.fromMillis(now.toMillis() + 4 * day),
        }),
    });

    // 2. Trial ending soon (1 day left) - triggers TrialBanner
    await childProfiles.doc('child_trial_ending').set({
        profileId: 'child_trial_ending',
        displayName: 'Trial Ending Child',
        gradeLevel: 'Secondary 2',
        createdAt: now,
        avatarUrl: null,
        pathProgress: {},
        settings: { ttsSpeaker: 'default', theme: 'dark', audioEnabled: true },
        subscription: createSubscription({
            subscriptionStatus: 'trial',
            trialStartDate: Timestamp.fromMillis(now.toMillis() - 6 * day),
            trialEndDate: Timestamp.fromMillis(now.toMillis() + 1 * day),
        }),
    });

    // 3. Expired trial - triggers Paywall
    await childProfiles.doc('child_trial_expired').set({
        profileId: 'child_trial_expired',
        displayName: 'Expired Trial Child',
        gradeLevel: 'Secondary 1',
        createdAt: now,
        avatarUrl: null,
        pathProgress: {},
        settings: { ttsSpeaker: 'default', theme: 'dark', audioEnabled: true },
        subscription: createSubscription({
            subscriptionStatus: 'trial_expired',
            trialStartDate: Timestamp.fromMillis(now.toMillis() - 10 * day),
            trialEndDate: Timestamp.fromMillis(now.toMillis() - 3 * day),
        }),
    });

    // 4. Active subscription
    await childProfiles.doc('child_subscribed').set({
        profileId: 'child_subscribed',
        displayName: 'Subscribed Child',
        gradeLevel: 'Secondary 4',
        createdAt: now,
        avatarUrl: null,
        pathProgress: {},
        settings: { ttsSpeaker: 'default', theme: 'dark', audioEnabled: true },
        subscription: createSubscription({
            subscriptionStatus: 'active',
            trialStartDate: Timestamp.fromMillis(now.toMillis() - 30 * day),
            trialEndDate: Timestamp.fromMillis(now.toMillis() - 23 * day),
            stripeCustomerId: 'cus_test123',
            subscriptionId: 'sub_test123',
            priceId: 'price_monthly',
            billingInterval: 'month',
            currentPeriodStart: Timestamp.fromMillis(now.toMillis() - 5 * day),
            currentPeriodEnd: Timestamp.fromMillis(now.toMillis() + 25 * day),
            lastPaymentDate: Timestamp.fromMillis(now.toMillis() - 5 * day),
            lastPaymentAmount: 2888,
        }),
    });

    // 5. Past due with grace period (access still granted)
    await childProfiles.doc('child_past_due').set({
        profileId: 'child_past_due',
        displayName: 'Past Due Child',
        gradeLevel: 'Secondary 3',
        createdAt: now,
        avatarUrl: null,
        pathProgress: {},
        settings: { ttsSpeaker: 'default', theme: 'dark', audioEnabled: true },
        subscription: createSubscription({
            subscriptionStatus: 'past_due',
            stripeCustomerId: 'cus_test456',
            subscriptionId: 'sub_test456',
            graceUntil: Timestamp.fromMillis(now.toMillis() + 5 * day),
        }),
    });

    // 6. Past due with grace period EXPIRED (should block access)
    await childProfiles.doc('child_past_due_expired').set({
        profileId: 'child_past_due_expired',
        displayName: 'Grace Expired Child',
        gradeLevel: 'Secondary 1',
        createdAt: now,
        avatarUrl: null,
        pathProgress: {},
        settings: { ttsSpeaker: 'default', theme: 'dark', audioEnabled: true },
        subscription: createSubscription({
            subscriptionStatus: 'past_due',
            stripeCustomerId: 'cus_test789',
            subscriptionId: 'sub_test789',
            graceUntil: Timestamp.fromMillis(now.toMillis() - 2 * day),
        }),
    });

    // 7. Canceled subscription (access until period end)
    await childProfiles.doc('child_canceled').set({
        profileId: 'child_canceled',
        displayName: 'Canceled Child',
        gradeLevel: 'Secondary 3',
        createdAt: now,
        avatarUrl: null,
        pathProgress: {},
        settings: { ttsSpeaker: 'default', theme: 'dark', audioEnabled: true },
        subscription: createSubscription({
            subscriptionStatus: 'canceled',
            stripeCustomerId: 'cus_test_cancel',
            subscriptionId: 'sub_test_cancel',
            currentPeriodEnd: Timestamp.fromMillis(now.toMillis() - 1 * day), // Expired 1 day ago
            cancelAtPeriodEnd: true,
        }),
    });

    // 8. Expired subscription (completely ended)
    await childProfiles.doc('child_expired').set({
        profileId: 'child_expired',
        displayName: 'Expired Sub Child',
        gradeLevel: 'Secondary 2',
        createdAt: now,
        avatarUrl: null,
        pathProgress: {},
        settings: { ttsSpeaker: 'default', theme: 'dark', audioEnabled: true },
        subscription: createSubscription({
            subscriptionStatus: 'expired',
            stripeCustomerId: 'cus_test_expired',
            subscriptionId: 'sub_test_expired',
            currentPeriodEnd: Timestamp.fromMillis(now.toMillis() - 5 * day),
        }),
    });

    // 9. Admin-extended trial
    await childProfiles.doc('child_extended_trial').set({
        profileId: 'child_extended_trial',
        displayName: 'Extended Trial Child',
        gradeLevel: 'Secondary 4',
        createdAt: now,
        avatarUrl: null,
        pathProgress: {},
        settings: { ttsSpeaker: 'default', theme: 'dark', audioEnabled: true },
        subscription: createSubscription({
            subscriptionStatus: 'trial',
            trialStartDate: Timestamp.fromMillis(now.toMillis() - 10 * day),
            trialEndDate: Timestamp.fromMillis(now.toMillis() - 3 * day), // Would be expired
            trialExtendedUntil: Timestamp.fromMillis(now.toMillis() + 5 * day), // But extended!
            trialExtensionReason: 'beta_tester',
            trialExtensionSetBy: 'admin_uid_123',
            trialExtensionSetAt: Timestamp.fromMillis(now.toMillis() - 3 * day),
        }),
    });

    // ============================================================================
    // CRITICAL FIX: Create Shadow User Documents for Child Profiles
    // The ParentAnalyticsService expects a top-level user document for every child
    // to fetch their profile data (getUserProfile). Without this, it returns mock/empty data.
    // ============================================================================
    console.log('👻 Creating shadow user documents for child profiles...');

    for (const child of childProfilesArray) {
        // Read the full child profile data we just created in the subcollection
        const childDoc = await childProfiles.doc(child.profileId).get();
        const childData = childDoc.data();

        if (!childData) continue;

        // Create/Overwrite the top-level user document
        await db.collection('users').doc(child.profileId).set({
            uid: child.profileId,
            displayName: childData.displayName,
            gradeLevel: childData.gradeLevel,
            email: null, // Child profiles don't have emails
            isParent: false,
            isGuest: false,
            photoURL: childData.avatarUrl || null,
            accountType: 'student',
            parentUid: parentUid, // Link back to parent
            parents: [parentUid], // Required for security rules (allow read if auth.uid in resource.data.parents)
            createdAt: childData.createdAt.toDate().toISOString(),
            lastLogin: now.toDate().toISOString(),
            profileCompleted: true,

            // Important: Copy gamification stats if they exist (or set defaults)
            gamification: {
                totalXP: 0,
                currentLevel: 1,
                currentStreak: 0,
                longestStreak: 0,
                lastActiveDate: now.toDate().toISOString().split('T')[0],
                totalTimeSpentSeconds: 0,
                totalProblemsAttempted: 0,
                totalProblemsSolved: 0
            },

            // Settings
            settings: childData.settings || {
                ttsSpeaker: 'callirrhoe',
                theme: 'dark',
                audioEnabled: true
            }
        });
        console.log(`   - Created shadow doc for: ${child.displayName} (${child.profileId})`);
    }

    // Create corresponding activeTrials documents for trial children
    const activeTrials = db.collection('activeTrials');

    await activeTrials.doc(`${parentUid}_child_trial_active`).set({
        parentUid,
        childProfileId: 'child_trial_active',
        trialEndDate: Timestamp.fromMillis(now.toMillis() + 4 * day),
        effectiveTrialEnd: Timestamp.fromMillis(now.toMillis() + 4 * day),
        reminderSent: false,
        expiredProcessed: false,
    });

    await activeTrials.doc(`${parentUid}_child_trial_ending`).set({
        parentUid,
        childProfileId: 'child_trial_ending',
        trialEndDate: Timestamp.fromMillis(now.toMillis() + 1 * day),
        effectiveTrialEnd: Timestamp.fromMillis(now.toMillis() + 1 * day),
        reminderSent: false,
        expiredProcessed: false,
    });

    await activeTrials.doc(`${parentUid}_child_extended_trial`).set({
        parentUid,
        childProfileId: 'child_extended_trial',
        trialEndDate: Timestamp.fromMillis(now.toMillis() - 3 * day),
        effectiveTrialEnd: Timestamp.fromMillis(now.toMillis() + 5 * day), // Extended
        reminderSent: false,
        expiredProcessed: false,
    });

    console.log('\n========================================');
    console.log('🎉 Test data seeded successfully!');
    console.log('========================================\n');
    console.log('Test Account:');
    console.log('  Email: parent1@test.com');
    console.log('  Password: Test123!\n');
    console.log('Created 9 child profiles:');
    console.log('  1. Active Trial Child       - 4 days left, normal access');
    console.log('  2. Trial Ending Child       - 1 day left, shows TrialBanner');
    console.log('  3. Expired Trial Child      - trial_expired, shows Paywall');
    console.log('  4. Subscribed Child         - active subscription');
    console.log('  5. Past Due Child           - past_due with grace, shows PaymentFailedBanner');
    console.log('  6. Grace Expired Child      - past_due, grace expired, shows Paywall');
    console.log('  7. Canceled Child           - canceled, access until period end');
    console.log('  8. Expired Sub Child        - expired subscription, shows Paywall');
    console.log('  9. Extended Trial Child     - admin-extended trial\n');
    console.log('View data at: http://localhost:4000/firestore');
}

seedTestData().catch(console.error);
