# Payment Gateway Integration Plan - AI Campus

## Overview

Implement Stripe subscription-based payments for AI Campus learning platform using Firebase Cloud Functions as the backend.

**Configuration:**
- Provider: Stripe
- Model: 7-day free access → Subscription required
- Tiers: Single Premium tier (no permanent free tier)
- Currency: SGD (Singapore Dollar)
- Backend: Firebase Cloud Functions
- **Billing Model: Per-Child** - Each child requires their own subscription

**Key Design Decisions:**
- ✅ Subcollection model for child profiles (atomic updates, granular security)
- ✅ Denormalized trial tracking for scalable queries
- ✅ Two-step webhook idempotency with event ordering protection
- ✅ Server-side only subscription management (no client writes)

---

## 1. Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND (React)                         │
├─────────────────────────────────────────────────────────────────┤
│  BillingService  │  useSubscription  │  useFeatureAccess       │
│  PricingModal    │  BillingPage      │  UpgradePrompt          │
└────────────────────────────┬────────────────────────────────────┘
                             │ HTTPS Callable
┌────────────────────────────▼────────────────────────────────────┐
│                   FIREBASE CLOUD FUNCTIONS                      │
├─────────────────────────────────────────────────────────────────┤
│  createCheckoutSession  │  createPortalSession  │  stripeWebhook│
└────────────────────────────┬────────────────────────────────────┘
                             │ API
┌────────────────────────────▼────────────────────────────────────┐
│                          STRIPE                                 │
├─────────────────────────────────────────────────────────────────┤
│  Checkout  │  Customer Portal  │  Subscriptions  │  Webhooks   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Firestore Data Model

### 2.1 Data Model Architecture: Subcollections (Recommended)

**Why Subcollections over Nested Arrays:**
- ✅ Atomic updates - no read-modify-write race conditions
- ✅ Granular security rules - can protect subscription fields directly
- ✅ Better query performance - can query across all children
- ✅ Webhook-safe - concurrent updates don't conflict
- ❌ Nested arrays require full document read/write, can't be protected by rules

### 2.2 Collection Structure

```
users/{parentUid}
├── displayName, email, accountType, ...
├── stripeCustomerId: string | null     // Parent's Stripe customer ID
└── (no subscription here - parent doesn't have subscription)

users/{parentUid}/childProfiles/{childProfileId}
├── displayName: string
├── gradeLevel: string
├── avatarUrl: string | null
├── createdAt: Timestamp
├── subscription: SubscriptionData      // Each child has own subscription
└── ...other child fields

activeTrials/{parentUid_childProfileId}  // Denormalized for efficient queries
├── parentUid: string
├── childProfileId: string
├── trialEndDate: Timestamp             // Indexed for queries
├── effectiveTrialEnd: Timestamp        // Max of trialEndDate and trialExtendedUntil
├── reminderSent: boolean               // Prevent duplicate emails
├── expiredProcessed: boolean           // Prevent duplicate expiration processing

stripeCustomers/{stripeCustomerId}
├── uid: string                         // Firebase user (parent) ID
├── email: string
└── createdAt: Timestamp

stripeEvents/{eventId}                  // Webhook idempotency
├── type: string
├── created: number
├── receivedAt: Timestamp
├── processedAt: Timestamp | null
```

### 2.3 Type Definitions (`src/types/user.ts`)

```typescript
export type SubscriptionStatus =
  | 'trial'           // 7-day free access (no payment yet)
  | 'trial_expired'   // Trial ended, no subscription
  | 'active'          // Paid and active
  | 'past_due'        // Payment failed, grace period
  | 'canceled'        // User canceled, access until period end
  | 'expired';        // Subscription ended

export interface SubscriptionData {
  // Trial tracking (set when child profile created via Cloud Function)
  trialStartDate: Timestamp;          // Firestore Timestamp - server-side
  trialEndDate: Timestamp;            // Firestore Timestamp - 7 days after creation

  // Admin trial extension (optional override)
  trialExtendedUntil: Timestamp | null;  // If set, overrides trialEndDate
  trialExtensionReason: string | null;   // "beta_tester", "support_issue", "promo_2024"
  trialExtensionSetBy: string | null;    // Admin UID who set it
  trialExtensionSetAt: Timestamp | null;

  // Stripe identifiers (null until first payment)
  stripeCustomerId: string | null;       // References parent's Stripe customer
  subscriptionId: string | null;         // This child's specific subscription

  // Subscription details
  subscriptionStatus: SubscriptionStatus;
  priceId: string | null;
  billingInterval: 'month' | 'year' | null;
  currentPeriodStart: Timestamp | null;
  currentPeriodEnd: Timestamp | null;
  cancelAtPeriodEnd: boolean;

  // Grace period for past_due (allows 7 days before blocking access)
  graceUntil: Timestamp | null;       // Set when entering past_due, null otherwise

  // Payment info
  lastPaymentDate: Timestamp | null;
  lastPaymentAmount: number | null;   // In cents (minor units)
  currency: string;                    // 'SGD' (uppercase)

  updatedAt: Timestamp;               // Server timestamp
}

// Child profile document (in subcollection)
export interface ChildProfile {
  profileId: string;                  // Same as document ID
  displayName: string;
  gradeLevel: string;
  avatarUrl: string | null;
  createdAt: Timestamp;
  subscription: SubscriptionData;
  // ... other child-specific fields
}

// Parent's UserProfile (no subscription field)
export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  accountType: 'parent' | 'child';    // Only parents manage billing
  stripeCustomerId: string | null;    // Stripe customer for this parent
  // ... other parent fields
  // NOTE: childProfiles are in subcollection, not embedded
}

// Active trial tracking (denormalized for queries)
export interface ActiveTrial {
  parentUid: string;
  childProfileId: string;
  trialEndDate: Timestamp;
  effectiveTrialEnd: Timestamp;       // Considers extensions
  reminderSent: boolean;
  expiredProcessed: boolean;
}
```

### 2.4 Trial Initialization (Per-Child, Server-Side via Callable)

**CRITICAL**: Trials are per-child profile, not per-user account.
- Parent accounts do NOT have subscriptions
- Each child profile gets its own 7-day trial when created
- **Use Callable Function** (not Firestore trigger) for reliable initialization

**Why Callable over Firestore Trigger:**
- ✅ Atomic operation - create child + initialize trial in one transaction
- ✅ No need to diff arrays to detect new children
- ✅ Immediate feedback to client on success/failure
- ✅ Easier to test and debug

```typescript
// functions/src/children/addChildProfile.ts
import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { FieldValue, Timestamp } from 'firebase-admin/firestore';

interface AddChildRequest {
  displayName: string;
  gradeLevel: string;
  avatarUrl?: string;
}

export const addChildProfile = onCall(
  { region: 'asia-southeast1' },
  async (request) => {
    // 1. Validate authenticated parent
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Must be logged in');
    }
    const parentUid = request.auth.uid;

    // Verify caller is a parent account
    const parentDoc = await db.collection('users').doc(parentUid).get();
    if (!parentDoc.exists || parentDoc.data()?.accountType !== 'parent') {
      throw new HttpsError('permission-denied', 'Only parents can add children');
    }

    const { displayName, gradeLevel, avatarUrl } = request.data as AddChildRequest;

    // 2. Generate child profile ID
    const childProfileId = db.collection('_').doc().id; // Generate unique ID

    // 3. Initialize trial dates
    const now = Timestamp.now();
    const trialEnd = Timestamp.fromMillis(now.toMillis() + 7 * 24 * 60 * 60 * 1000);

    const subscription: SubscriptionData = {
      trialStartDate: now,
      trialEndDate: trialEnd,
      trialExtendedUntil: null,
      trialExtensionReason: null,
      trialExtensionSetBy: null,
      trialExtensionSetAt: null,
      stripeCustomerId: null,
      subscriptionId: null,
      subscriptionStatus: 'trial',
      priceId: null,
      billingInterval: null,
      currentPeriodStart: null,
      currentPeriodEnd: null,
      cancelAtPeriodEnd: false,
      graceUntil: null,
      lastPaymentDate: null,
      lastPaymentAmount: null,
      currency: 'SGD',
      updatedAt: now
    };

    const childProfile: ChildProfile = {
      profileId: childProfileId,
      displayName,
      gradeLevel,
      avatarUrl: avatarUrl || null,
      createdAt: now,
      subscription
    };

    // 4. Use batch write for atomicity
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

    // 5. Queue welcome email (non-blocking)
    const parent = parentDoc.data();
    await db.collection('mail').add({
      to: parent?.email,
      template: {
        name: 'child-trial-started',
        data: {
          parentName: parent?.displayName,
          childName: displayName,
          trialEndDate: trialEnd.toDate().toLocaleDateString('en-SG')
        }
      }
    });

    return {
      childProfileId,
      trialEndDate: trialEnd.toDate().toISOString()
    };
  }
);
```

---

## 3. Firebase Cloud Functions

### 3.1 Project Structure

```
aicampus/
├── functions/
│   ├── src/
│   │   ├── index.ts              # Function exports
│   │   ├── children/
│   │   │   └── addChildProfile.ts  # Callable - creates child + initializes trial
│   │   ├── stripe/
│   │   │   ├── checkout.ts       # createCheckoutSession callable
│   │   │   ├── portal.ts         # createPortalSession callable
│   │   │   ├── webhooks.ts       # stripeWebhook HTTP handler
│   │   │   ├── handlers/         # Individual webhook event handlers
│   │   │   │   ├── checkoutCompleted.ts
│   │   │   │   ├── subscriptionCreated.ts
│   │   │   │   ├── subscriptionUpdated.ts
│   │   │   │   ├── subscriptionDeleted.ts
│   │   │   │   ├── paymentSucceeded.ts
│   │   │   │   ├── paymentFailed.ts
│   │   │   │   ├── refund.ts     # NEW: Handle refunds
│   │   │   │   └── dispute.ts    # NEW: Handle disputes
│   │   │   ├── sync.ts           # syncSubscription callable (resilience)
│   │   │   └── statusMapping.ts  # Stripe → internal status mapping
│   │   ├── admin/
│   │   │   └── extendTrial.ts    # Admin-only trial extension
│   │   ├── scheduled/
│   │   │   └── trialReminder.ts  # Daily check using activeTrials collection
│   │   ├── config/
│   │   │   └── stripe.ts         # Stripe client initialization
│   │   └── utils/
│   │       ├── firestore.ts      # Firestore helpers
│   │       ├── idempotency.ts    # Webhook idempotency helpers
│   │       ├── email.ts          # Email queueing helper
│   │       └── subscriptionHelpers.ts  # Common subscription update logic
│   ├── package.json
│   └── tsconfig.json
├── firebase.json                  # Add functions config (region: asia-southeast1)
└── .firebaserc
```

### 3.2 Cloud Functions to Implement

#### `addChildProfile` (HTTPS Callable) - NEW
- **Gate**: Only parents can call
- Creates child profile in subcollection
- Initializes 7-day trial with server timestamps
- Creates `activeTrials` record for efficient queries
- Queues welcome email
- Returns `{ childProfileId, trialEndDate }`
- See Section 2.4 for full implementation

#### `createCheckoutSession` (HTTPS Callable)
- **Gate**: Only parents can call (block children via `parentUid` check)
- **Validates `priceId`** against allowlist (`STRIPE_PRICE_MONTHLY`, `STRIPE_PRICE_YEARLY`) - prevents tampering
- **Requires `childProfileId`** - identifies which child this subscription is for
- **Validates child exists** in subcollection and belongs to parent
- Creates/retrieves Stripe customer (stored on parent document)
- Includes `client_reference_id: uid`, `customer_email`, `metadata: { parentUid, childProfileId }`
- Sets `success_url` with `?session_id={CHECKOUT_SESSION_ID}&child={childProfileId}` for client-side sync
- Sets `cancel_url` for return on cancel
- Creates checkout session (no Stripe trial - we handle trial ourselves)
- Returns `{ sessionId, url }`

#### `createPortalSession` (HTTPS Callable)
- **Gate**: Only parents can call
- Validates user has `stripeCustomerId`
- Creates Stripe Customer Portal session
- Returns `{ url }`

> ⚠️ **Portal UX Limitation**
>
> Stripe's Customer Portal does **not** display subscription metadata (like `childProfileId`).
> Parents with multiple children will see a list of subscriptions without knowing which is for which child.
>
> **Workarounds:**
> 1. **Recommended:** Use your own `BillingPage` for subscription management (shows child names clearly)
> 2. **Use portal only for payment method updates** - link directly to payment method section
> 3. **Alternative:** Create unique Stripe Products per child (e.g., "AI Campus - [Child Name]") - not scalable but provides clarity
>
> For best UX, your `BillingPage` should show all children with their subscription status, and only open the Portal for specific actions like updating payment methods.

#### `syncSubscription` (HTTPS Callable) - Resilience
- **Requires `childProfileId`** to sync specific child
- Fetches current Stripe subscription by `subscriptionId` from child profile
- Reconciles Firestore with Stripe state
- Call after Checkout/Portal redirects or when mismatch detected
- Returns normalized subscription state

#### `stripeWebhook` (HTTPS Request)
- **Uses `req.rawBody`** for signature verification (critical!)
- **Idempotency**: Two-step check via `stripeEvents/{eventId}` (receivedAt → processedAt)
- **Event Ordering**: Handles out-of-order delivery gracefully (see Section 3.4)
- Handles events:

| Event | Action |
|-------|--------|
| `checkout.session.completed` | Map `customer ↔ parentUid`, extract `childProfileId` from metadata |
| `customer.subscription.created` | Set child's status to `active`, populate all fields, delete `activeTrials` record |
| `customer.subscription.updated` | Sync status, dates, `cancelAtPeriodEnd`, handle price changes, handle cancellation |
| `customer.subscription.deleted` | Set status to `expired` (NOT "free" - we have no free tier) |
| `invoice.payment_succeeded` | Update `lastPaymentDate/Amount`, clear `graceUntil`, set `active` |
| `invoice.payment_failed` | Set `past_due`, set `graceUntil` = now + 7 days, queue payment failed email |
| `charge.refunded` | **NEW**: Handle refund policy (see Section 3.6) |
| `charge.dispute.created` | **NEW**: Alert admin, optionally suspend access (see Section 3.6) |

> 💡 **Cancellation Handling Details**
>
> When a user cancels via Stripe Portal, `subscription.updated` fires with `cancel_at_period_end = true`.
> The subscription is NOT immediately deleted - it remains `active` until the period ends.
>
> **State transitions:**
> 1. User cancels → `subscription.updated` with `cancel_at_period_end: true`
>    - Set internal status to `canceled`
>    - Keep access until `current_period_end`
>    - Queue "subscription canceled" email
>
> 2. Period ends → `subscription.deleted`
>    - Set internal status to `expired`
>    - Block access
>    - Queue "subscription ended" email
>
> **Important:** Don't double-flip status. If status is already `canceled`, don't change it on subsequent `updated` events.
>
> **Grace period alignment:** Your 7-day grace window for `past_due` should align with Stripe Smart Retries.
> Stripe typically retries for ~3-4 weeks before marking as `canceled`. Don't block access while Stripe is still retrying.

#### `trialReminderJob` (Scheduled - Daily)
- **Uses `activeTrials` collection** for efficient queries (not scanning all users)
- Query where `effectiveTrialEnd` is within 2 days AND `reminderSent = false`
- Queue "trial ending" emails, set `reminderSent = true`
- Query where `effectiveTrialEnd` has passed AND `expiredProcessed = false`
- Update child's status to `trial_expired`, set `expiredProcessed = true`, queue email
- See Section 3.5 for optimized implementation

#### `extendTrial` (HTTPS Callable - Admin Only)
- Requires admin custom claim (`request.auth.token.admin`)
- **Requires `parentUid` and `childProfileId`**
- Sets `trialExtendedUntil` to specified date on child's subscription
- Updates `activeTrials` record's `effectiveTrialEnd`, resets flags
- Records `trialExtensionReason`, `trialExtensionSetBy`, `trialExtensionSetAt`
- Resets status to `trial` if it was `trial_expired`
- Use cases: beta testers, support issues, promotional offers

### 3.3 Stripe → Internal Status Mapping

```typescript
// functions/src/stripe/statusMapping.ts
export function mapStripeStatus(stripeStatus: string): SubscriptionStatus {
  // Note: Stripe doesn't have 'paused' status. Pausing uses pause_collection object.
  const mapping: Record<string, SubscriptionStatus> = {
    'active': 'active',
    'trialing': 'active',        // Stripe trial (if used) = active for us
    'past_due': 'past_due',
    'canceled': 'canceled',
    'unpaid': 'expired',
    'incomplete': 'expired',
    'incomplete_expired': 'expired',
  };
  return mapping[stripeStatus] ?? 'expired';
}
```

### 3.4 Webhook Handler (Idempotency + Event Ordering Protection)

**Event Ordering Problem:** Stripe can deliver events out of order. For example, `customer.subscription.updated` might arrive before `customer.subscription.created`.

**Solution:** Before processing updates, verify the subscription exists. If not, fetch full state from Stripe API.

> ⚠️ **CRITICAL: `req.rawBody` Requirement**
>
> Firebase Functions v2 exposes `req.rawBody` for signature verification. However:
> - **DO NOT** use Express body-parsing middleware (e.g., `express.json()`) on the webhook route
> - Body parsers consume the raw body before you can access it, breaking signature verification
> - If using an Express app wrapper, mount the webhook on a separate raw-body route
> - The webhook function should be a standalone `onRequest` handler, not part of an Express app

```typescript
// functions/src/stripe/webhooks.ts
import { onRequest } from 'firebase-functions/v2/https';
import Stripe from 'stripe';
import { STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, getStripeClient } from '../config/stripe';

export const stripeWebhook = onRequest(
  {
    region: 'asia-southeast1',
    secrets: [STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET],  // Declare secrets
  },
  async (req, res) => {
    const sig = req.headers['stripe-signature'];
    if (!sig) return res.status(400).send('Missing signature');

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
      return res.status(400).send(`Webhook Error: ${(err as Error).message}`);
    }

    const eventRef = db.collection('stripeEvents').doc(event.id);
    const existing = await eventRef.get();

    // Already fully processed - skip (idempotency)
    if (existing.exists && existing.data()?.processedAt) {
      return res.status(200).send('Already processed');
    }

    // STEP 1: Mark as received (but not processed yet)
    // If handler fails, Stripe will retry and we'll see receivedAt without processedAt
    if (!existing.exists) {
      await eventRef.set({
        type: event.type,
        created: event.created,
        receivedAt: FieldValue.serverTimestamp(),
        processedAt: null,  // Not processed yet
      });
    }

    try {
      // Handle event types...
      switch (event.type) {
        case 'checkout.session.completed':
          await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
          break;

        case 'customer.subscription.created':
          await handleSubscriptionCreated(event.data.object as Stripe.Subscription);
          break;

        case 'customer.subscription.updated':
          // EVENT ORDERING: Ensure subscription exists before updating
          await handleSubscriptionUpdatedWithOrdering(event.data.object as Stripe.Subscription);
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
      }

      // STEP 2: Mark as successfully processed
      await eventRef.update({
        processedAt: FieldValue.serverTimestamp(),
      });

      return res.status(200).send('OK');
    } catch (error) {
      console.error('Webhook handler failed:', error);
      // Return non-2xx so Stripe retries
      return res.status(500).send('Handler failed');
    }
  }
);

// Handle out-of-order subscription updates
async function handleSubscriptionUpdatedWithOrdering(subscription: Stripe.Subscription) {
  const { parentUid, childProfileId } = await getUidsFromSubscription(subscription);

  if (!parentUid || !childProfileId) {
    console.error('Missing metadata for subscription:', subscription.id);
    return;
  }

  // Check if child profile has this subscription
  const childRef = db
    .collection('users')
    .doc(parentUid)
    .collection('childProfiles')
    .doc(childProfileId);

  const childDoc = await childRef.get();
  const existingSubId = childDoc.data()?.subscription?.subscriptionId;

  if (!existingSubId || existingSubId !== subscription.id) {
    // Subscription.created hasn't been processed yet - fetch full state from Stripe
    console.log('Out-of-order event detected, fetching full subscription state');
    const fullSubscription = await stripe.subscriptions.retrieve(subscription.id);

    // Process as if it's a creation event first
    await handleSubscriptionCreated(fullSubscription);
  }

  // Now safe to process the update
  await handleSubscriptionUpdate(subscription);
}

// Helper: Get UIDs from subscription metadata or customer mapping
async function getUidsFromSubscription(subscription: Stripe.Subscription): Promise<{
  parentUid: string | null;
  childProfileId: string | null;
}> {
  // First try metadata (set during checkout)
  const parentUid = subscription.metadata?.parentUid;
  const childProfileId = subscription.metadata?.childProfileId;

  if (parentUid && childProfileId) {
    return { parentUid, childProfileId };
  }

  // Fallback: Look up from stripeCustomers collection
  const customerId = typeof subscription.customer === 'string'
    ? subscription.customer
    : subscription.customer.id;

  const customerDoc = await db.collection('stripeCustomers').doc(customerId).get();
  if (customerDoc.exists) {
    return {
      parentUid: customerDoc.data()?.uid || null,
      childProfileId: subscription.metadata?.childProfileId || null
    };
  }

  return { parentUid: null, childProfileId: null };
}

// ATOMIC BATCH WRITE: Update subscription + delete trial record together
async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  const { parentUid, childProfileId } = await getUidsFromSubscription(subscription);
  if (!parentUid || !childProfileId) {
    console.error('Missing UIDs for subscription:', subscription.id);
    return;
  }

  const batch = db.batch();

  // 1. Update child's subscription
  const childRef = db
    .collection('users')
    .doc(parentUid)
    .collection('childProfiles')
    .doc(childProfileId);

  batch.update(childRef, {
    'subscription.subscriptionId': subscription.id,
    'subscription.stripeCustomerId': subscription.customer,
    'subscription.subscriptionStatus': mapStripeStatus(subscription.status),
    'subscription.priceId': subscription.items.data[0]?.price.id,
    'subscription.billingInterval': subscription.items.data[0]?.price.recurring?.interval,
    'subscription.currentPeriodStart': Timestamp.fromMillis(subscription.current_period_start * 1000),
    'subscription.currentPeriodEnd': Timestamp.fromMillis(subscription.current_period_end * 1000),
    'subscription.cancelAtPeriodEnd': subscription.cancel_at_period_end,
    'subscription.updatedAt': FieldValue.serverTimestamp()
  });

  // 2. Delete active trial record (no longer needed)
  const trialRef = db.collection('activeTrials').doc(`${parentUid}_${childProfileId}`);
  batch.delete(trialRef);

  // 3. Commit atomically - both succeed or both fail
  await batch.commit();

  console.log(`Subscription ${subscription.id} created for child ${childProfileId}`);
}
```

> 💡 **Atomicity Best Practice**
>
> Always use Firestore batch writes or transactions when updating multiple documents that must stay consistent:
> - Subscription update + trial deletion
> - Status change + grace period update
> - Any multi-document update in webhook handlers
>
> This prevents partial updates if the function crashes mid-execution.

### 3.5 Optimized Trial Reminder Job (Using Denormalized Data)

**Why Denormalize:** Scanning all parents and their children is expensive at scale. The `activeTrials` collection enables efficient queries.

```typescript
// functions/src/scheduled/trialReminder.ts
import { onSchedule } from 'firebase-functions/v2/scheduler';
import { Timestamp, FieldValue } from 'firebase-admin/firestore';

export const trialReminderJob = onSchedule(
  {
    schedule: 'every day 09:00',
    timeZone: 'Asia/Singapore',
    region: 'asia-southeast1'
  },
  async () => {
    const now = Timestamp.now();
    const twoDaysFromNow = Timestamp.fromMillis(
      now.toMillis() + 2 * 24 * 60 * 60 * 1000
    );

    // EFFICIENT QUERY 1: Trials ending soon (not yet notified)
    const endingSoonQuery = await db.collection('activeTrials')
      .where('effectiveTrialEnd', '<=', twoDaysFromNow)
      .where('effectiveTrialEnd', '>', now)
      .where('reminderSent', '==', false)
      .get();

    for (const trialDoc of endingSoonQuery.docs) {
      const trial = trialDoc.data();
      const parentDoc = await db.collection('users').doc(trial.parentUid).get();
      const childDoc = await db
        .collection('users')
        .doc(trial.parentUid)
        .collection('childProfiles')
        .doc(trial.childProfileId)
        .get();

      if (parentDoc.exists && childDoc.exists) {
        // Queue reminder email
        await db.collection('mail').add({
          to: parentDoc.data()?.email,
          template: {
            name: 'child-trial-ending-soon',
            data: {
              parentName: parentDoc.data()?.displayName,
              childName: childDoc.data()?.displayName,
              trialEndDate: trial.effectiveTrialEnd.toDate().toLocaleDateString('en-SG')
            }
          }
        });

        // Mark as notified (prevent duplicates)
        await trialDoc.ref.update({ reminderSent: true });
      }
    }

    // EFFICIENT QUERY 2: Expired trials (not yet processed)
    const expiredQuery = await db.collection('activeTrials')
      .where('effectiveTrialEnd', '<=', now)
      .where('expiredProcessed', '==', false)
      .get();

    for (const trialDoc of expiredQuery.docs) {
      const trial = trialDoc.data();

      // Update child's subscription status
      const childRef = db
        .collection('users')
        .doc(trial.parentUid)
        .collection('childProfiles')
        .doc(trial.childProfileId);

      await childRef.update({
        'subscription.subscriptionStatus': 'trial_expired',
        'subscription.updatedAt': FieldValue.serverTimestamp()
      });

      // Queue trial ended email
      const parentDoc = await db.collection('users').doc(trial.parentUid).get();
      const childDoc = await childRef.get();

      if (parentDoc.exists && childDoc.exists) {
        await db.collection('mail').add({
          to: parentDoc.data()?.email,
          template: {
            name: 'child-trial-ended',
            data: {
              parentName: parentDoc.data()?.displayName,
              childName: childDoc.data()?.displayName
            }
          }
        });
      }

      // Mark as processed (can delete later via TTL or keep for audit)
      await trialDoc.ref.update({ expiredProcessed: true });
    }

    console.log(`Processed ${endingSoonQuery.size} reminders, ${expiredQuery.size} expirations`);
  }
);
```

### 3.6 Refund and Dispute Handling

**Refund Policy Options:**
1. **No-action refunds**: Refund doesn't revoke access (goodwill gesture)
2. **Prorated refunds**: Revoke access immediately
3. **Period-end refunds**: Access continues until period end

**Recommendation:** For educational platform, use no-action refunds for partial amounts, revoke for full refunds.

```typescript
// functions/src/stripe/handlers/refund.ts
import Stripe from 'stripe';

export async function handleRefund(charge: Stripe.Charge) {
  // Get subscription from charge's invoice
  if (!charge.invoice) {
    console.log('Refund for non-subscription charge, ignoring');
    return;
  }

  const invoice = await stripe.invoices.retrieve(charge.invoice as string);
  if (!invoice.subscription) return;

  const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);
  const { parentUid, childProfileId } = await getUidsFromSubscription(subscription);

  if (!parentUid || !childProfileId) return;

  const refundedAmount = charge.amount_refunded;
  const totalAmount = charge.amount;
  const isFullRefund = refundedAmount >= totalAmount;

  if (isFullRefund) {
    // FULL REFUND: Revoke access
    const childRef = db
      .collection('users')
      .doc(parentUid)
      .collection('childProfiles')
      .doc(childProfileId);

    await childRef.update({
      'subscription.subscriptionStatus': 'expired',
      'subscription.updatedAt': FieldValue.serverTimestamp()
    });

    // Notify parent
    const parentDoc = await db.collection('users').doc(parentUid).get();
    const childDoc = await childRef.get();

    await db.collection('mail').add({
      to: parentDoc.data()?.email,
      template: {
        name: 'subscription-refunded',
        data: {
          parentName: parentDoc.data()?.displayName,
          childName: childDoc.data()?.displayName,
          amount: (refundedAmount / 100).toFixed(2)
        }
      }
    });

    console.log(`Full refund processed for child ${childProfileId}`);
  } else {
    // PARTIAL REFUND: Log only, don't revoke (goodwill)
    console.log(`Partial refund of ${refundedAmount} for child ${childProfileId}, no access change`);
  }
}

// functions/src/stripe/handlers/dispute.ts
export async function handleDispute(dispute: Stripe.Dispute) {
  // Disputes are serious - alert admin immediately
  const charge = await stripe.charges.retrieve(dispute.charge as string);

  // Find the affected child
  if (!charge.invoice) return;

  const invoice = await stripe.invoices.retrieve(charge.invoice as string);
  if (!invoice.subscription) return;

  const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);
  const { parentUid, childProfileId } = await getUidsFromSubscription(subscription);

  // Log dispute for admin review
  await db.collection('disputes').add({
    disputeId: dispute.id,
    parentUid,
    childProfileId,
    amount: dispute.amount,
    reason: dispute.reason,
    status: dispute.status,
    createdAt: FieldValue.serverTimestamp()
  });

  // OPTION: Suspend access during dispute (uncomment if desired)
  // if (parentUid && childProfileId) {
  //   const childRef = db
  //     .collection('users')
  //     .doc(parentUid)
  //     .collection('childProfiles')
  //     .doc(childProfileId);
  //
  //   await childRef.update({
  //     'subscription.subscriptionStatus': 'disputed',
  //     'subscription.updatedAt': FieldValue.serverTimestamp()
  //   });
  // }

  // Alert admin via email
  await db.collection('mail').add({
    to: 'admin@homecampus.ai',  // Configure admin email
    template: {
      name: 'admin-dispute-alert',
      data: {
        disputeId: dispute.id,
        parentUid,
        childProfileId,
        amount: (dispute.amount / 100).toFixed(2),
        reason: dispute.reason
      }
    }
  });

  console.log(`Dispute ${dispute.id} logged and admin notified`);
}
```

### 3.7 Environment Configuration (Firebase Functions v2)

**IMPORTANT:** Use `defineSecret` from Firebase Functions v2 for proper secret handling. This ensures:
- Secrets are not exposed in logs or error messages
- Proper emulator support with `.env.local`
- Secrets are only available to functions that declare them

```typescript
// functions/src/config/stripe.ts
import { defineSecret } from 'firebase-functions/params';
import Stripe from 'stripe';

// Define secrets (v2 pattern)
export const STRIPE_SECRET_KEY = defineSecret('STRIPE_SECRET_KEY');
export const STRIPE_WEBHOOK_SECRET = defineSecret('STRIPE_WEBHOOK_SECRET');
export const STRIPE_PRICE_MONTHLY = defineSecret('STRIPE_PRICE_MONTHLY');
export const STRIPE_PRICE_YEARLY = defineSecret('STRIPE_PRICE_YEARLY');

// Create Stripe client (call inside function handler, not at module level)
export function getStripeClient(): Stripe {
  return new Stripe(STRIPE_SECRET_KEY.value(), {
    apiVersion: '2024-06-20',
  });
}

// Validate price ID against allowlist
export function isValidPriceId(priceId: string): boolean {
  return [
    STRIPE_PRICE_MONTHLY.value(),
    STRIPE_PRICE_YEARLY.value()
  ].includes(priceId);
}
```

```typescript
// Usage in callable functions - attach secrets
import { onCall } from 'firebase-functions/v2/https';
import { STRIPE_SECRET_KEY, STRIPE_PRICE_MONTHLY, STRIPE_PRICE_YEARLY } from './config/stripe';

export const createCheckoutSession = onCall(
  {
    region: 'asia-southeast1',
    secrets: [STRIPE_SECRET_KEY, STRIPE_PRICE_MONTHLY, STRIPE_PRICE_YEARLY],  // Declare secrets
  },
  async (request) => {
    // Secrets available via .value() inside handler
    const stripe = getStripeClient();
    // ...
  }
);
```

**Set secrets via CLI:**
```bash
# One-time setup (run locally with Firebase admin access)
firebase functions:secrets:set STRIPE_SECRET_KEY
firebase functions:secrets:set STRIPE_WEBHOOK_SECRET
firebase functions:secrets:set STRIPE_PRICE_MONTHLY
firebase functions:secrets:set STRIPE_PRICE_YEARLY
```

**Local development:** Create `functions/.env.local` for emulator:
```bash
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
STRIPE_PRICE_MONTHLY=price_xxx
STRIPE_PRICE_YEARLY=price_xxx
```

---

## 4. Frontend Implementation

### 4.1 New Files to Create

```
src/
├── services/
│   └── billing/
│       ├── billingService.ts        # Main service (singleton)
│       └── types.ts                 # Billing types
├── hooks/
│   ├── useSubscription.ts           # Subscription state hook
│   └── useFeatureAccess.ts          # Feature gating hook
├── components/
│   └── billing/
│       ├── PricingModal.tsx         # Plan selection modal
│       ├── UpgradePrompt.tsx        # Upgrade CTA component
│       └── SubscriptionBadge.tsx    # Status badge
└── pages/
    └── BillingPage.tsx              # Billing management page
```

### 4.2 BillingService (`src/services/billing/billingService.ts`)

```typescript
import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase';

class BillingService {
  // Create checkout session for a specific child
  async createCheckoutSession(
    priceId: string,
    childProfileId: string  // Required - identifies which child
  ): Promise<{ sessionId: string; url: string }> {
    const createCheckout = httpsCallable(functions, 'createCheckoutSession');
    const result = await createCheckout({ priceId, childProfileId });
    return result.data as { sessionId: string; url: string };
  }

  // Open Stripe Customer Portal (shows all subscriptions)
  async openCustomerPortal(): Promise<{ url: string }> {
    const createPortal = httpsCallable(functions, 'createPortalSession');
    const result = await createPortal({});
    return result.data as { url: string };
  }

  // Sync subscription state after checkout/portal redirect
  async syncSubscription(childProfileId: string): Promise<SubscriptionData> {
    const sync = httpsCallable(functions, 'syncSubscription');
    const result = await sync({ childProfileId });
    return result.data as SubscriptionData;
  }
}

export const billingService = new BillingService();
```

### 4.3 useSubscription Hook (Per-Child)

```typescript
interface ChildSubscriptionState {
  childProfileId: string;
  status: SubscriptionStatus;
  hasAccess: boolean;
  isInTrial: boolean;
  isTrialExpired: boolean;
  isSubscribed: boolean;
  isPastDue: boolean;
  isCanceled: boolean;
  trialEndsAt: Date | null;
  trialDaysRemaining: number | null;
  graceEndsAt: Date | null;        // For past_due grace period
  currentPeriodEnd: Date | null;
}

interface UseSubscriptionResult {
  children: ChildSubscriptionState[];  // All children with their status
  getChildAccess: (childProfileId: string) => ChildSubscriptionState | null;
  loading: boolean;
}

function useSubscription(): UseSubscriptionResult;

// Access formula per child:
// hasAccess = isInTrial || isActive || (isPastDue && graceUntil > now) || (isCanceled && periodEnd > now)
```

### 4.4 useFeatureAccess Hook

```typescript
interface FeatureAccess {
  hasAccess: boolean;              // Can use the app at all
  showPaywall: boolean;            // Should show paywall (trial expired, no sub)
  trialDaysRemaining: number | null;
  openPricingModal: () => void;
}

// Simple logic - no feature limits, just access or no access
// During trial OR with subscription: Full access to everything
// Trial expired without subscription: Paywall blocks all features
```

### 4.5 UI Components

#### PricingModal
- Monthly: S$28.88/month
- Yearly: S$288.88/year (2 months free)
- Shows trial countdown if still in trial
- Feature list (all features included)
- Checkout buttons

#### TrialBanner (new)
- Shown in header during trial period
- "X days left in your free trial - Subscribe now"
- Countdown display
- Quick subscribe button

#### Paywall (new)
- Full-screen overlay when trial expires
- "Your free trial has ended"
- Pricing options
- Cannot dismiss without subscribing

#### BillingPage
- Current plan display (Trial / Subscribed)
- Trial countdown if applicable
- Subscription status and renewal date
- "Manage Billing" button → Stripe Portal (only for subscribers)

---

## 5. Stripe Configuration

### 5.1 Products & Prices (Create in Stripe Dashboard)

**Product:** AI Campus Premium

| Price ID | Amount | Interval |
|----------|--------|----------|
| price_monthly | S$28.88 | Monthly |
| price_yearly | S$288.88 | Yearly |

Note: No Stripe-level trial. Trial is handled by our app (7 days from registration).

### 5.2 Customer Portal Settings
- Enable subscription cancellation (end of period)
- Enable payment method updates
- Enable invoice history
- Configure branding (logo, colors)

### 5.3 Webhook Endpoint
```
https://<region>-<project>.cloudfunctions.net/stripeWebhook
```

Events to enable:
- `checkout.session.completed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.payment_succeeded`
- `invoice.payment_failed`
- `charge.refunded` (NEW)
- `charge.dispute.created` (NEW)

---

## 6. Security

### 6.1 Firestore Security Rules Update (Subcollection Model)

**Key Security Principle:** Subscription fields are server-only. Clients can read but never write subscription data.

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Helper function: Check if user is admin
    function isAdmin() {
      return request.auth != null && request.auth.token.admin == true;
    }

    // Helper function: Check if user is the parent
    function isParent(userId) {
      return request.auth != null && request.auth.uid == userId;
    }

    // ==================== USERS COLLECTION ====================
    match /users/{userId} {
      // READ: User can read their own profile
      allow read: if isParent(userId);

      // CREATE: User can create their profile, but not set stripeCustomerId
      // (stripeCustomerId is set by server when first checkout happens)
      allow create: if isParent(userId)
        && !request.resource.data.keys().hasAny(['stripeCustomerId']);

      // UPDATE: User can update profile, but never stripeCustomerId
      allow update: if isParent(userId)
        && !request.resource.data.diff(resource.data).affectedKeys()
            .hasAny(['stripeCustomerId']);

      // DELETE: Not allowed (soft delete only, or admin)
      allow delete: if false;

      // ==================== CHILD PROFILES SUBCOLLECTION ====================
      match /childProfiles/{childId} {
        // READ: Parent can read their children's profiles
        allow read: if isParent(userId);

        // CREATE: BLOCKED - Must use addChildProfile Cloud Function
        // This ensures trial is initialized server-side
        allow create: if false;

        // UPDATE: Parent can update non-subscription fields only
        // Subscription fields are STRICTLY server-only
        allow update: if isParent(userId)
          && !request.resource.data.diff(resource.data).affectedKeys()
              .hasAny(['subscription']);

        // DELETE: Not allowed directly (use Cloud Function for proper cleanup)
        allow delete: if false;
      }
    }

    // ==================== ACTIVE TRIALS (Server-only) ====================
    match /activeTrials/{trialId} {
      // Completely server-managed for trial tracking
      allow read, write: if false;
    }

    // ==================== STRIPE CUSTOMERS (Server-only) ====================
    match /stripeCustomers/{customerId} {
      // Maps Stripe customer ID to Firebase UID
      allow read, write: if false;
    }

    // ==================== STRIPE EVENTS (Server-only) ====================
    match /stripeEvents/{eventId} {
      // Webhook idempotency tracking
      allow read, write: if false;
    }

    // ==================== DISPUTES (Server-only) ====================
    match /disputes/{disputeId} {
      // Admin can read disputes for review
      allow read: if isAdmin();
      allow write: if false;
    }

    // ==================== MAIL QUEUE (Server-only) ====================
    match /mail/{mailId} {
      // Email queue managed by Firebase Extension
      allow read, write: if false;
    }
  }
}
```

### 6.2 Security Rules Testing

```javascript
// Test cases for security rules (use Firebase Emulator)
const testCases = [
  // ✅ SHOULD PASS
  { desc: 'Parent reads own profile', pass: true },
  { desc: 'Parent reads child profiles', pass: true },
  { desc: 'Parent updates child displayName', pass: true },

  // ❌ SHOULD FAIL
  { desc: 'Parent creates child directly (bypassing function)', pass: false },
  { desc: 'Parent updates child subscription', pass: false },
  { desc: 'Parent sets stripeCustomerId', pass: false },
  { desc: 'User reads another user profile', pass: false },
  { desc: 'Client writes to activeTrials', pass: false },
  { desc: 'Client writes to stripeEvents', pass: false },
];
```

### 6.3 TTL for stripeEvents Collection

Configure Firestore TTL to auto-delete old events (reduces storage costs):

```bash
# Via gcloud CLI - delete events after 90 days
gcloud firestore fields ttls update processedAt \
  --collection-group=stripeEvents \
  --enable-ttl

# Alternatively, configure TTL on expireAt field (set explicitly in code)
gcloud firestore fields ttls update expireAt \
  --collection-group=stripeEvents \
  --enable-ttl
```

**Setting expireAt in webhook handler:**
```typescript
// In stripeWebhook handler, when marking as processed:
await eventRef.update({
  processedAt: FieldValue.serverTimestamp(),
  expireAt: Timestamp.fromMillis(Date.now() + 90 * 24 * 60 * 60 * 1000)  // 90 days
});
```

**Consider TTL for other collections:**
- `activeTrials` - Delete processed records after 30 days
- `disputes` - Keep for compliance, but archive after resolution

### 6.4 App Check Enforcement

**IMPORTANT:** Enable App Check on all callable functions to prevent abuse from unauthorized clients.

```typescript
// functions/src/stripe/checkout.ts
import { onCall } from 'firebase-functions/v2/https';

export const createCheckoutSession = onCall(
  {
    region: 'asia-southeast1',
    secrets: [STRIPE_SECRET_KEY, STRIPE_PRICE_MONTHLY, STRIPE_PRICE_YEARLY],
    enforceAppCheck: true,  // Reject requests without valid App Check token
  },
  async (request) => {
    // App Check validated - proceed with checkout
    // ...
  }
);

export const createPortalSession = onCall(
  {
    region: 'asia-southeast1',
    secrets: [STRIPE_SECRET_KEY],
    enforceAppCheck: true,
  },
  async (request) => {
    // ...
  }
);

export const syncSubscription = onCall(
  {
    region: 'asia-southeast1',
    secrets: [STRIPE_SECRET_KEY],
    enforceAppCheck: true,
  },
  async (request) => {
    // ...
  }
);
```

**Frontend Setup:**
```typescript
// src/firebase.ts
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

// Initialize App Check (call early in app initialization)
if (import.meta.env.PROD) {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_SITE_KEY),
    isTokenAutoRefreshEnabled: true,
  });
}
```

**Add to GitHub Secrets:**
- `VITE_RECAPTCHA_SITE_KEY` - reCAPTCHA v3 site key from Google Cloud Console

**Setup Steps:**
1. Enable App Check in Firebase Console
2. Register your web app with reCAPTCHA v3 provider
3. Get reCAPTCHA site key from Google Cloud Console
4. Add `enforceAppCheck: true` to all callable functions
5. Initialize App Check in frontend before calling any functions

### 6.5 API Keys

| Key | Location | Purpose |
|-----|----------|---------|
| `VITE_STRIPE_PUBLISHABLE_KEY` | Frontend `.env` | Stripe.js |
| `VITE_RECAPTCHA_SITE_KEY` | Frontend `.env` | App Check |
| `STRIPE_SECRET_KEY` | Firebase Functions Secrets | API calls |
| `STRIPE_WEBHOOK_SECRET` | Firebase Functions Secrets | Signature verification |

---

## 7. Per-Child Subscription Model

### Key Principle: Each Child = Separate Subscription

- **Parent manages billing** but each child profile requires its own subscription
- **Parent account itself has NO subscription** - only child profiles do
- **Trial is per-child**: Each child profile gets 7-day trial when created
- **No trial abuse**: Children cannot create accounts independently (only parents add children)
- Stripe `metadata.childProfileId` links subscription to specific child

### Data Model for Per-Child Subscriptions

```typescript
// ChildProfile now has subscription field
interface ChildProfile {
  profileId: string;
  displayName: string;
  gradeLevel: string;
  subscription: SubscriptionData;  // Each child has own subscription
  // ... other fields
}

// Parent's UserProfile does NOT have subscription
// Parent only has childProfiles[] array
```

### Checkout Flow

```
Parent clicks "Subscribe" for Child A
       ↓
createCheckoutSession({ priceId, childProfileId: 'child_A' })
       ↓
Stripe Checkout (metadata includes childProfileId)
       ↓
Webhook: customer.subscription.created
       ↓
Update users/{parentUid}/childProfiles[childProfileId].subscription
```

### Access Check (Per-Child)

```typescript
// Access check for a specific child profile
const hasAccess = (childProfile: ChildProfile): boolean => {
  const subscription = childProfile.subscription;
  const now = new Date();

  // In trial period - use extended date if set, otherwise regular trialEndDate
  if (subscription.subscriptionStatus === 'trial') {
    const effectiveTrialEnd = subscription.trialExtendedUntil ?? subscription.trialEndDate;
    return effectiveTrialEnd.toDate() > now;
  }

  // Has active subscription
  if (subscription.subscriptionStatus === 'active') {
    return true;
  }

  // Past due - allow access during grace period (reduces churn)
  if (subscription.subscriptionStatus === 'past_due' && subscription.graceUntil) {
    return subscription.graceUntil.toDate() > now;
  }

  // Canceled but period not ended
  if (subscription.subscriptionStatus === 'canceled' && subscription.currentPeriodEnd) {
    return subscription.currentPeriodEnd.toDate() > now;
  }

  // expired, trial_expired = no access
  return false;
};

// Full access formula:
// hasAccess = isInTrial(effectiveTrialEnd > now) || isActive || (isPastDue && graceUntil > now) || (isCanceled && periodEnd > now)
```

### Admin Trial Extension (Updated for Subcollections)

```typescript
// Cloud Function: extendTrial (admin only)
// functions/src/admin/extendTrial.ts
export const extendTrial = onCall(
  { region: 'asia-southeast1' },
  async (request) => {
    // Verify caller is admin
    if (!request.auth?.token.admin) {
      throw new HttpsError('permission-denied', 'Admin only');
    }

    const { parentUid, childProfileId, extendUntil, reason } = request.data;

    const extendDate = Timestamp.fromDate(new Date(extendUntil));
    const batch = db.batch();

    // Update child profile subscription (subcollection)
    const childRef = db
      .collection('users')
      .doc(parentUid)
      .collection('childProfiles')
      .doc(childProfileId);

    batch.update(childRef, {
      'subscription.trialExtendedUntil': extendDate,
      'subscription.trialExtensionReason': reason,
      'subscription.trialExtensionSetBy': request.auth!.uid,
      'subscription.trialExtensionSetAt': FieldValue.serverTimestamp(),
      'subscription.subscriptionStatus': 'trial',  // Reset if expired
      'subscription.updatedAt': FieldValue.serverTimestamp()
    });

    // Update activeTrials record (reset flags for new reminders)
    const trialRef = db.collection('activeTrials').doc(`${parentUid}_${childProfileId}`);
    batch.update(trialRef, {
      effectiveTrialEnd: extendDate,
      reminderSent: false,       // Allow new reminder
      expiredProcessed: false    // Reset expiration flag
    });

    await batch.commit();

    return { success: true, extendedUntil: extendDate.toDate().toISOString() };
  }
);
```

### UI Implications

- Parent dashboard shows subscription status **per child**
- "Subscribe" button appears for each unsubscribed child
- BillingPage shows list of all children with their subscription status
- Stripe Customer Portal manages all subscriptions under one customer


---

## 8. Implementation Phases

> **Implementation Status** (Last Updated: 2025-11-26)
> - ✅ Phase 0: Skipped (fresh start)
> - ✅ Phase 1: Backend Setup - COMPLETE
> - ✅ Phase 2: Data Model & Email Templates - COMPLETE (email templates need Firebase Extension config)
> - ✅ Phase 3: Frontend Services - COMPLETE
> - ✅ Phase 4: UI Components - COMPLETE
> - ✅ Phase 5: Access Control - COMPLETE
> - ⏳ Phase 6: Testing - PENDING
> - 🔶 Phase 7: Production Checklist - PARTIAL (App Check needs enabling)

---

### Phase 0: Data Model Migration ✅ SKIPPED

**Decision Point:** This plan uses subcollections. If you have existing users with nested `childProfiles[]` arrays, you need to migrate.

**Status:** Skipped - fresh start with subcollections (no existing data to migrate)

1. **New Projects:** Skip to Phase 1 (no migration needed) ✅
2. **Existing Projects with childProfiles array:**
   - Write migration script to move `childProfiles[]` → `childProfiles/` subcollection
   - Update all existing code reading/writing child profiles
   - Test thoroughly before proceeding

```typescript
// Migration script outline (run once)
async function migrateChildProfilesToSubcollection() {
  const usersSnapshot = await db.collection('users').get();

  for (const userDoc of usersSnapshot.docs) {
    const childProfiles = userDoc.data().childProfiles || [];
    if (childProfiles.length === 0) continue;

    const batch = db.batch();

    for (const child of childProfiles) {
      const childRef = userDoc.ref.collection('childProfiles').doc(child.profileId);
      batch.set(childRef, child);
    }

    // Remove array from parent doc (optional - keep for rollback safety)
    // batch.update(userDoc.ref, { childProfiles: FieldValue.delete() });

    await batch.commit();
    console.log(`Migrated ${childProfiles.length} children for user ${userDoc.id}`);
  }
}
```

---

### Phase 1: Backend Setup ✅ COMPLETE

**Status:** All core functions deployed to `asia-southeast1`

| Task | Status | Notes |
|------|--------|-------|
| Initialize Firebase Functions | ✅ | `functions/` directory created |
| Install dependencies | ✅ | `stripe`, `firebase-admin`, `firebase-functions` |
| Configure secrets | ✅ | All 4 secrets set via CLI |
| `addChildProfile` callable | ✅ | `functions/src/children/addChildProfile.ts` |
| `createCheckoutSession` | ✅ | `functions/src/stripe/checkout.ts` |
| `createPortalSession` | ✅ | `functions/src/stripe/portal.ts` |
| `stripeWebhook` | ✅ | `functions/src/stripe/webhooks.ts` |
| `syncSubscription` | ✅ | `functions/src/stripe/sync.ts` |
| Webhook handlers | ✅ | All handlers in `functions/src/stripe/handlers/` |
| `trialReminderJob` | ✅ | `functions/src/scheduled/trialReminder.ts` |
| `extendTrial` admin callable | ✅ | `functions/src/admin/extendTrial.ts` |
| Firestore indexes | ✅ | `activeTrials` indexes in `firestore.indexes.json` |
| Deploy functions | ✅ | Deployed 2025-11-26 |
| Configure Stripe webhook | ✅ | Webhook URL configured, secret set |
| Update Firestore rules | ✅ | `firestore.rules` - childProfiles, activeTrials, stripeCustomers, stripeEvents, disputes |

**Deployed Functions:**
- `addChildProfile` - https://asia-southeast1-homecampus-ai.cloudfunctions.net/addChildProfile
- `createCheckoutSession` - https://asia-southeast1-homecampus-ai.cloudfunctions.net/createCheckoutSession
- `createPortalSession` - https://asia-southeast1-homecampus-ai.cloudfunctions.net/createPortalSession
- `syncSubscription` - https://asia-southeast1-homecampus-ai.cloudfunctions.net/syncSubscription
- `stripeWebhook` - https://asia-southeast1-homecampus-ai.cloudfunctions.net/stripeWebhook
- `trialReminderJob` - Scheduled daily at 09:00 SGT
- `extendTrial` - Admin-only callable

---

### Phase 2: Data Model & Email Templates ✅ COMPLETE

**Status:** All types and code complete. Email templates need Firebase Trigger Email Extension configuration.

| Task | Status | Notes |
|------|--------|-------|
| Add `SubscriptionData` type | ✅ | `src/types/user.ts:139` |
| Add `SubscriptionStatus` type | ✅ | `src/types/user.ts:131` |
| Add `ChildSubscriptionState` type | ✅ | `src/types/user.ts:179` |
| Add `ChildProfileWithSubscription` type | ✅ | `src/types/user.ts:174` |
| `stripeCustomerId` in SubscriptionData | ✅ | `src/types/user.ts:151` |
| Child profile subcollection reads | ✅ | `useSubscription.ts` reads from subcollection |
| Email template names defined | ✅ | `functions/src/utils/email.ts` - EMAIL_TEMPLATES constant |
| Email template: `child-trial-started` | 🔶 | Name defined, configure in Firebase Extension |
| Email template: `child-trial-ending-soon` | 🔶 | Name defined, configure in Firebase Extension |
| Email template: `child-trial-ended` | 🔶 | Name defined, configure in Firebase Extension |
| Email template: `child-subscription-activated` | 🔶 | Name defined, configure in Firebase Extension |
| Email template: `payment-failed` | 🔶 | Name defined, configure in Firebase Extension |
| Email template: `subscription-refunded` | 🔶 | Name defined, configure in Firebase Extension |
| Email template: `admin-dispute-alert` | 🔶 | Name defined, configure in Firebase Extension |
| Email template: `subscription-canceled` | 🔶 | Name defined, configure in Firebase Extension |
| Email template: `subscription-renewed` | 🔶 | Name defined, configure in Firebase Extension |

> **Note:** Email templates are queued via `functions/src/utils/email.ts`. The actual template content needs to be configured in the Firebase Trigger Email Extension in Firebase Console.

---

### Phase 3: Frontend Services ✅ COMPLETE

**Status:** All services and hooks created, CI/CD configured

| Task | Status | Notes |
|------|--------|-------|
| Create `BillingService` | ✅ | `src/services/billing/billingService.ts` |
| - `createCheckoutSession()` | ✅ | Calls Cloud Function |
| - `openCustomerPortal()` | ✅ | Calls Cloud Function |
| - `syncSubscription()` | ✅ | Calls Cloud Function |
| - `addChildProfile()` | ✅ | Calls Cloud Function |
| Create `useSubscription` hook | ✅ | `src/hooks/useSubscription.ts` |
| Create `useFeatureAccess` hook | ✅ | `src/hooks/useFeatureAccess.ts` |
| Export Functions from firebase.ts | ✅ | `functions` export with `asia-southeast1` region |
| Add `VITE_STRIPE_PUBLISHABLE_KEY` | ✅ | Added to `production.yml:104` and `preview.yml:53` |
| Update CI/CD workflows | ✅ | Functions deployment in `production.yml:165-176` |
| CSP headers for Stripe | ✅ | `firebase.json` includes `js.stripe.com`, `checkout.stripe.com`, `api.stripe.com` |

---

### Phase 4: UI Components ✅ COMPLETE

**Status:** All billing UI components implemented

| Task | Status | Notes |
|------|--------|-------|
| `TrialBanner` component | ✅ | `src/components/billing/TrialBanner.tsx` - dismissible, 12hr localStorage |
| `Paywall` component | ✅ | `src/components/billing/Paywall.tsx` - hard-blocking overlay |
| `PaymentFailedBanner` component | ✅ | `src/components/billing/PaymentFailedBanner.tsx` - grace period countdown |
| `PricingModal` component | ✅ | `src/components/billing/PricingModal.tsx` - monthly/yearly selection |
| `BillingPage` | ✅ | `src/pages/BillingPage.tsx` - shows all children with status |
| Billing components index | ✅ | `src/components/billing/index.ts` - exports all components |
| Add billing link to sidebar | ✅ | `src/components/layout/AppSidebar.tsx:172-183` - parent-only |
| Add `/billing` route | ✅ | `src/routes/index.tsx:221-233` - with ParentGuard |
| Post-checkout redirect handling | ✅ | `syncSubscription` available in billingService |

---

### Phase 5: Access Control ✅ COMPLETE

**Status:** All access control implemented and integrated

| Task | Status | Notes |
|------|--------|-------|
| `SubscriptionGuard` wrapper | ✅ | `src/components/auth/SubscriptionGuard.tsx` |
| Integrate in routes | ✅ | Wraps `/stats`, `/homework-helper`, `/learn/*`, `/practice/*` |
| Show `Paywall` when expired | ✅ | SubscriptionGuard shows Paywall for `trial_expired`/`expired` |
| Show `TrialBanner` during trial | ✅ | Shows when `trialDaysRemaining ≤ 3` |
| Show `PaymentFailedBanner` | ✅ | Shows during `past_due` status |
| Child-specific access checks | ✅ | `useFeatureAccess` + `useCurrentChildSubscription` hooks |
| PricingModal event listener | ✅ | `window.dispatchEvent('open-pricing-modal')` pattern |

---

### Phase 6: Testing (Comprehensive) ⏳ PENDING

**Webhook Tests:**
1. Test webhook idempotency (replay same event → no duplicate processing)
2. Test out-of-order event delivery (update before create → handled gracefully)
3. Test webhook signature validation (invalid signature → rejected)

**Trial Flow Tests:**
4. Test child creation → trial starts + `activeTrials` record created
5. Test trial reminder job → emails sent, flags updated
6. Test trial expiration → status updated, paywall shown
7. Test admin trial extension → dates updated, flags reset

**Payment Flow Tests:**
8. Test checkout flow (Stripe test mode) → subscription active
9. Test payment success → `active` status, `activeTrials` deleted
10. Test payment failure → `past_due` + grace period
11. Test full refund → access revoked
12. Test partial refund → access retained
13. Test dispute → admin notified

**Cancellation Tests:**
14. Test cancellation → access until period end
15. Test reactivation before period end → seamless

**Security Tests:**
16. Test client cannot create child directly (must use function)
17. Test client cannot modify subscription fields
18. Test client cannot access other users' data

**Edge Cases:**
19. Test multiple children with different subscription states
20. Test parent with no children
21. Test concurrent webhooks for same subscription

### Phase 7: Production Checklist 🔶 PARTIAL

**Status:** Most items ready, App Check needs enabling

Before going live:
- [ ] **Enable App Check** - Uncomment `enforceAppCheck: true` in:
  - `functions/src/stripe/checkout.ts:27`
  - `functions/src/children/addChildProfile.ts:20`
  - Set up reCAPTCHA v3 in Firebase Console
- [ ] Switch from Stripe test keys to live keys
- [ ] Verify webhook endpoint is HTTPS and accessible
- [ ] Enable Stripe Smart Retries
- [ ] Configure Stripe emails (receipts, upcoming renewal)
- [ ] Configure Firebase Trigger Email templates (9 templates)
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Test with real payment (small amount, refund immediately)
- [ ] Document support procedures for common issues
- [ ] Set up alerts for disputes and payment failures
- [ ] Verify GitHub Secret `VITE_STRIPE_PUBLISHABLE_KEY` is set with production key

---

## 9. Critical Files to Modify

> **Legend:** ✅ Created | 🔶 Partially Done | ⏳ Pending
>
> **Status:** All critical files implemented as of 2025-11-26

### Frontend (`learning-platform/`)

| File | Status | Changes |
|------|--------|---------|
| `src/types/user.ts` | ✅ | Added `SubscriptionData`, `SubscriptionStatus`, `ChildSubscriptionState`, `ChildProfileWithSubscription` |
| `src/services/firebase.ts` | ✅ | Added `functions` export with `asia-southeast1` region |
| `src/services/billing/billingService.ts` | ✅ | Calls Cloud Functions for checkout, portal, sync, addChild |
| `src/services/billing/index.ts` | ✅ | Re-exports billing service |
| `src/hooks/useSubscription.ts` | ✅ | Subscription state + real-time Firestore listener |
| `src/hooks/useFeatureAccess.ts` | ✅ | Access control hook with grace period logic |
| `src/components/billing/PricingModal.tsx` | ✅ | Monthly/yearly plan selection |
| `src/components/billing/Paywall.tsx` | ✅ | Hard-blocking overlay for expired subscriptions |
| `src/components/billing/TrialBanner.tsx` | ✅ | Dismissible trial countdown banner |
| `src/components/billing/PaymentFailedBanner.tsx` | ✅ | Grace period warning with payment update CTA |
| `src/components/billing/index.ts` | ✅ | Exports all billing components |
| `src/pages/BillingPage.tsx` | ✅ | Per-child subscription management |
| `src/components/auth/SubscriptionGuard.tsx` | ✅ | Route wrapper for subscription checks |
| `src/components/layout/AppSidebar.tsx` | ✅ | Billing link for parent accounts |
| `src/routes/index.tsx` | ✅ | `/billing` route + SubscriptionGuard on protected routes |

### Backend (`functions/`)

| File | Status | Changes |
|------|--------|---------|
| `functions/src/index.ts` | ✅ | Exports all 7 functions |
| `functions/src/config/firebase.ts` | ✅ | Firebase Admin initialization |
| `functions/src/config/stripe.ts` | ✅ | Stripe client + defineSecret pattern |
| `functions/src/types/subscription.ts` | ✅ | Subscription types + mapStripeStatus helper |
| `functions/src/children/addChildProfile.ts` | ✅ | Callable - creates child + initializes trial |
| `functions/src/stripe/checkout.ts` | ✅ | createCheckoutSession with price validation |
| `functions/src/stripe/portal.ts` | ✅ | createPortalSession |
| `functions/src/stripe/webhooks.ts` | ✅ | Main webhook handler with idempotency + TTL |
| `functions/src/stripe/sync.ts` | ✅ | syncSubscription callable |
| `functions/src/stripe/handlers/checkoutCompleted.ts` | ✅ | Maps customer ↔ parentUid |
| `functions/src/stripe/handlers/subscription.ts` | ✅ | Handles created/updated/deleted with out-of-order support |
| `functions/src/stripe/handlers/payment.ts` | ✅ | Handles payment succeeded/failed + grace period |
| `functions/src/stripe/handlers/refund.ts` | ✅ | Handles full/partial refunds |
| `functions/src/stripe/handlers/dispute.ts` | ✅ | Logs disputes + admin alerts |
| `functions/src/utils/email.ts` | ✅ | Email queueing helper + EMAIL_TEMPLATES constant |
| `functions/src/admin/extendTrial.ts` | ✅ | Admin trial extension callable |
| `functions/src/scheduled/trialReminder.ts` | ✅ | Daily job at 09:00 SGT |

### Config & CI/CD

| File | Status | Changes |
|------|--------|---------|
| `firebase.json` | ✅ | Functions config + CSP headers for Stripe |
| `functions/package.json` | ✅ | Dependencies: stripe, firebase-admin, firebase-functions |
| `functions/tsconfig.json` | ✅ | TypeScript configuration |
| `functions/.gitignore` | ✅ | Ignores node_modules, lib, env files |
| `firestore.rules` | ✅ | childProfiles, activeTrials, stripeCustomers, stripeEvents, disputes rules |
| `firestore.indexes.json` | ✅ | activeTrials composite indexes for trial queries |
| `.github/workflows/production.yml` | ✅ | VITE_STRIPE_PUBLISHABLE_KEY + functions deployment |
| `.github/workflows/preview.yml` | ✅ | VITE_STRIPE_PUBLISHABLE_KEY for PR previews |

### Firestore Indexes ✅ IMPLEMENTED

The following indexes are configured in `firestore.indexes.json`:

```json
{
  "indexes": [
    {
      "collectionGroup": "activeTrials",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "effectiveTrialEnd", "order": "ASCENDING" },
        { "fieldPath": "reminderSent", "order": "ASCENDING" }
      ]
    },
    {
      "collectionGroup": "activeTrials",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "effectiveTrialEnd", "order": "ASCENDING" },
        { "fieldPath": "expiredProcessed", "order": "ASCENDING" }
      ]
    }
  ]
}
```

---

## 10. Environment Variables & Secrets Management

### Current Setup ✅ CONFIGURED

GitHub Secrets → `.env` during CI/CD build. Stripe secrets are now included.

### GitHub Secrets (Frontend)

| Secret Name | Status | Purpose |
|-------------|--------|---------|
| `VITE_STRIPE_PUBLISHABLE_KEY` | ✅ Added | Stripe.js client-side (added to both workflows) |

### GitHub Workflows ✅ UPDATED

Both workflows now include Stripe publishable key:

- **`production.yml:104`** - `VITE_STRIPE_PUBLISHABLE_KEY=${{ secrets.VITE_STRIPE_PUBLISHABLE_KEY }}`
- **`preview.yml:53`** - Same configuration for PR previews

### Firebase Functions Secrets (Separate from GitHub)

Firebase Functions use their own secrets system (not GitHub Secrets). Set these via CLI:

```bash
# One-time setup (run locally with Firebase admin access)
firebase functions:secrets:set STRIPE_SECRET_KEY
firebase functions:secrets:set STRIPE_WEBHOOK_SECRET
firebase functions:secrets:set STRIPE_PRICE_MONTHLY
firebase functions:secrets:set STRIPE_PRICE_YEARLY
```

Or use Firebase Functions Config (legacy but simpler):
```bash
firebase functions:config:set \
  stripe.secret_key="sk_live_xxx" \
  stripe.webhook_secret="whsec_xxx" \
  stripe.price_monthly="price_xxx" \
  stripe.price_yearly="price_xxx"
```

### Add Functions Deployment to CI/CD

Update **`.github/workflows/production.yml`** to deploy functions:

```yaml
- name: Deploy to Firebase Hosting
  run: |
    npm install -g firebase-tools
    firebase deploy --only hosting --project homecampus-ai

- name: Deploy Firebase Functions
  run: |
    cd functions && npm ci
    firebase deploy --only functions --project homecampus-ai

- name: Deploy Firestore rules
  run: |
    firebase deploy --only firestore:rules --project homecampus-ai
```

### Summary: Where Each Secret Lives

| Secret | Storage | Exposed To |
|--------|---------|------------|
| `VITE_STRIPE_PUBLISHABLE_KEY` | GitHub Secrets → `.env` | Browser (safe - publishable key) |
| `STRIPE_SECRET_KEY` | Firebase Functions Secrets | Server only (Cloud Functions) |
| `STRIPE_WEBHOOK_SECRET` | Firebase Functions Secrets | Server only (Cloud Functions) |
| `STRIPE_PRICE_MONTHLY` | Firebase Functions Secrets | Server only (Cloud Functions) |
| `STRIPE_PRICE_YEARLY` | Firebase Functions Secrets | Server only (Cloud Functions) |

### Local Development

For local development, add to `learning-platform/.env`:
```bash
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_xxx  # Use test key locally
```

For local functions testing, create `functions/.env`:
```bash
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
STRIPE_PRICE_MONTHLY=price_xxx
STRIPE_PRICE_YEARLY=price_xxx
```

---

## 11. Pricing & Access Model

### Per-Child Access Flow
```
Parent adds Child A
       ↓
   Child A gets 7-Day Free Trial (full access)
       ↓
   Trial Expires for Child A
       ↓
   ┌─────────────────────────────┐
   │  PAYWALL for Child A only   │
   └─────────────────────────────┘
       ↓
   Parent subscribes for Child A → Full Access Restored

Parent adds Child B → Child B gets own 7-day trial
```

### Pricing (Per Child)

| Plan | Price | Billing |
|------|-------|---------|
| Monthly | S$28.88/child | Per month, per child |
| Yearly | S$288.88/child | Per year, per child (2 months free) |

**Example:** Family with 2 children
- Monthly: S$28.88 × 2 = S$57.76/month
- Yearly: S$288.88 × 2 = S$577.76/year

### What's Included (Per Subscription)
- Full access for ONE child profile
- Learn mode (AI tutoring)
- Practice mode (unlimited)
- Homework Helper
- All subjects and topics
- Unlimited AI interactions
- Full progress tracking

### Multi-Child Discount (Future Enhancement)
Consider implementing volume discounts:
- 1 child: Full price
- 2 children: 10% off
- 3+ children: 20% off

This can be done via Stripe Coupons applied at checkout.

---

## 12. Email Communications

Leverage your existing email infrastructure (`mail` collection + Firebase Extension).

### Email Templates Required (Per-Child Model)

| Template Name | Trigger | Content |
|---------------|---------|---------|
| `child-trial-started` | Child profile created | [Child name]'s 7-day free trial has started! |
| `child-trial-ending-soon` | Scheduled job (2 days before) | [Child name]'s trial ends in 2 days - subscribe now! |
| `child-trial-ended` | Scheduled job (trial expired) | [Child name]'s trial has ended. Subscribe to continue. |
| `child-subscription-activated` | `customer.subscription.created` | [Child name] now has full access! |
| `payment-failed` | `invoice.payment_failed` | Payment failed for [Child name] - update your card. |
| `child-subscription-canceled` | `customer.subscription.updated` (cancel) | [Child name]'s subscription canceled. Access until [date]. |
| `subscription-renewed` | `invoice.payment_succeeded` (recurring) | Payment received for [Child name] - thank you! |
| `subscription-refunded` | `charge.refunded` (full) | Your subscription for [Child name] has been refunded. |
| `admin-dispute-alert` | `charge.dispute.created` | ⚠️ Dispute received for [Child name] - action required. |

### Email Queueing Pattern

Uses existing `mail` collection (compatible with Firebase Trigger Email extension):

```typescript
// functions/src/utils/email.ts
export async function queueEmail(
  to: string,
  template: string,
  data: Record<string, any>
) {
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

// Usage in webhook handler
await queueEmail(user.email, 'payment-failed', {
  displayName: user.displayName,
  updateCardUrl: 'https://homecampus.ai/billing'
});
```

### Scheduled Trial Reminder Job

**See Section 3.5** for the optimized implementation using the `activeTrials` collection.

The optimized version:
- Uses efficient indexed queries on `activeTrials` collection
- Avoids scanning all parents and children
- Prevents duplicate notifications with `reminderSent` and `expiredProcessed` flags
- Updates child profiles in subcollections (atomic updates)

### Stripe-Handled Emails (Don't Duplicate)

Stripe automatically sends these (configure in Stripe Dashboard → Settings → Emails):
- Payment receipts/invoices
- Upcoming renewal reminders
- Card expiring soon

**Recommendation**: Enable Stripe emails for receipts, but handle trial and subscription lifecycle emails yourself for better control and branding.
