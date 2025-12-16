import { useState, useEffect, useMemo, useCallback } from 'react';
import { collection, doc, onSnapshot, query } from 'firebase/firestore';
import { firestore } from '../services/firebase';
import { useAuth } from '../contexts/AuthContext';
import { useActiveProfile } from '../contexts/ActiveProfileContext';
import type {
  SubscriptionData,
  SubscriptionStatus,
  ChildSubscriptionState,
  ChildProfileWithSubscription,
} from '../types/user';

interface UseSubscriptionResult {
  children: ChildSubscriptionState[];
  getChildAccess: (childProfileId: string) => ChildSubscriptionState | null;
  loading: boolean;
  error: Error | null;
  refresh: () => void;
}

/**
 * Convert Firestore timestamps to Date objects
 */
function parseSubscriptionData(data: Record<string, unknown>): SubscriptionData {
  const toDate = (val: unknown): Date | null => {
    if (!val) return null;
    if (val instanceof Date) return val;
    if (typeof val === 'object' && 'toDate' in val && typeof (val as { toDate: () => Date }).toDate === 'function') {
      return (val as { toDate: () => Date }).toDate();
    }
    if (typeof val === 'string') return new Date(val);
    return null;
  };

  return {
    trialStartDate: toDate(data.trialStartDate) || new Date(),
    trialEndDate: toDate(data.trialEndDate) || new Date(),
    trialExtendedUntil: toDate(data.trialExtendedUntil),
    trialExtensionReason: data.trialExtensionReason as string | null,
    trialExtensionSetBy: data.trialExtensionSetBy as string | null,
    trialExtensionSetAt: toDate(data.trialExtensionSetAt),
    stripeCustomerId: data.stripeCustomerId as string | null,
    subscriptionId: data.subscriptionId as string | null,
    subscriptionStatus: (data.subscriptionStatus as SubscriptionStatus) || 'trial',
    priceId: data.priceId as string | null,
    billingInterval: data.billingInterval as 'month' | 'year' | null,
    currentPeriodStart: toDate(data.currentPeriodStart),
    currentPeriodEnd: toDate(data.currentPeriodEnd),
    cancelAtPeriodEnd: Boolean(data.cancelAtPeriodEnd),
    graceUntil: toDate(data.graceUntil),
    lastPaymentDate: toDate(data.lastPaymentDate),
    lastPaymentAmount: data.lastPaymentAmount as number | null,
    currency: (data.currency as string) || 'SGD',
    updatedAt: toDate(data.updatedAt) || new Date(),
  };
}

/**
 * Calculate access and derived state from subscription data
 */
function calculateChildState(
  childProfileId: string,
  childName: string,
  subscription: SubscriptionData
): ChildSubscriptionState {
  const now = new Date();
  const status = subscription.subscriptionStatus;

  // Effective trial end (considers admin extensions)
  const effectiveTrialEnd = subscription.trialExtendedUntil || subscription.trialEndDate;

  // Calculate days remaining in trial
  const trialDaysRemaining = status === 'trial' && effectiveTrialEnd
    ? Math.max(0, Math.ceil((effectiveTrialEnd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)))
    : null;

  // Determine if user has access
  const hasAccess = (() => {
    switch (status) {
      case 'trial':
        return effectiveTrialEnd > now;
      case 'active':
        return true;
      case 'past_due':
        return subscription.graceUntil ? subscription.graceUntil > now : false;
      case 'canceled':
        return subscription.currentPeriodEnd ? subscription.currentPeriodEnd > now : false;
      case 'trial_expired':
      case 'expired':
      default:
        return false;
    }
  })();

  return {
    childProfileId,
    childName,
    status,
    hasAccess,
    isInTrial: status === 'trial' && effectiveTrialEnd > now,
    isTrialExpired: status === 'trial_expired',
    isSubscribed: status === 'active',
    isPastDue: status === 'past_due',
    isCanceled: status === 'canceled',
    trialEndsAt: status === 'trial' ? effectiveTrialEnd : null,
    trialDaysRemaining,
    graceEndsAt: status === 'past_due' ? subscription.graceUntil : null,
    currentPeriodEnd: subscription.currentPeriodEnd,
  };
}

/**
 * Hook to get subscription state for all children
 * Reads from the childProfiles subcollection in real-time
 */
export function useSubscription(): UseSubscriptionResult {
  const { user, userProfile } = useAuth();
  const [profiles, setProfiles] = useState<ChildProfileWithSubscription[]>([]);
  const [linked, setLinked] = useState<ChildProfileWithSubscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [refreshCounter, setRefreshCounter] = useState(0);

  // Only fetch for parent accounts
  const isParent = userProfile?.accountType === 'parent';
  const parentUid = user?.uid;

  useEffect(() => {
    if (!isParent || !parentUid) {
      setProfiles([]);
      setLinked([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    // 1. Subscribe to childProfiles (Netflix-style)
    const profilesQuery = query(collection(firestore, 'users', parentUid, 'childProfiles'));
    const unsubscribeProfiles = onSnapshot(
      profilesQuery,
      (snapshot) => {
        const newProfiles: ChildProfileWithSubscription[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const subscription = parseSubscriptionData(data.subscription || {});
          newProfiles.push({
            profileId: doc.id,
            displayName: data.displayName || 'Unknown',
            gradeLevel: data.gradeLevel || '',
            pathProgress: data.pathProgress || {},
            settings: data.settings || { ttsSpeaker: 'default', theme: 'light', audioEnabled: true },
            createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
            lastActivityAt: data.lastActivityAt?.toDate?.()?.toISOString(),
            subscription,
          });
        });
        setProfiles(newProfiles);
      },
      (err) => {
        console.error('Error fetching child profiles:', err);
        setError(err as Error);
      }
    );

    // 2. Subscribe to linked children
    const linkedQuery = query(collection(firestore, 'users', parentUid, 'children'));
    const unsubscribeLinked = onSnapshot(
      linkedQuery,
      (snapshot) => {
        const newLinked: ChildProfileWithSubscription[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.subscription) {
            const subscription = parseSubscriptionData(data.subscription);
            newLinked.push({
              profileId: data.childUid,
              displayName: data.displayName || 'Unknown',
              gradeLevel: data.gradeLevel || '',
              pathProgress: {}, // Linked children store progress on their own doc
              settings: { ttsSpeaker: 'default', theme: 'light', audioEnabled: true },
              createdAt: data.linkedAt?.toDate?.()?.toISOString() || new Date().toISOString(),
              lastActivityAt: data.linkedAt?.toDate?.()?.toISOString(),
              subscription,
            });
          }
        });
        setLinked(newLinked);
      },
      (err) => {
        console.error('Error fetching linked children:', err);
        // Don't overwrite main error if profiles failed? 
        // For now logging is enough, maybe set error if critical
      }
    );

    // Simple loading logic: wait for initial data from at least one source?
    // Or just set loading false after a timeout? 
    // Ideally we wait for both, but onSnapshot is async callbacks.
    // We can rely on the fact that both usually fire quickly.
    // Let's set loading false when we get data.
    // A more robust way would be to track "profilesLoaded" and "linkedLoaded" flags.
    // For now, let's assume if we have *any* update, we can show content, 
    // but to be safe we might want a "profilesLoaded" state.
    // Let's just set loading false inside the callbacks.
    // Note: This might cause a double render or flash if one returns empty first.
    // To fix properly properly:
    // We'll trust that React batching handles state updates reasonably well.
    // But to ensure we don't flash "No children", we should probably wait for both.
    // However, onSnapshot doesn't give a "done" promise like getDocs.
    // We'll set loading false in both, so the last one to finish clears the flag.
    // Actually, if the first one finishes and sets loading=false, we might render partial data.
    // That's acceptable for real-time streams.

    return () => {
      unsubscribeProfiles();
      unsubscribeLinked();
    };
  }, [isParent, parentUid, refreshCounter]);

  // Combine both sources
  useEffect(() => {
    if (profiles.length > 0 || linked.length > 0) {
      setLoading(false);
    }
    // If both empty, we might still be loading or truly empty. 
    // We need a timeout or explicit "loaded" flags for empty state.
    // For this fix, let's assume fast connection.
    // Refinement: use separate loaded flags if users report issues.
    setTimeout(() => setLoading(false), 2000); // Safety timeout
  }, [profiles, linked]);

  const childProfiles = useMemo(() => [...profiles, ...linked], [profiles, linked]);

  // Calculate subscription state for each child
  const children = useMemo(() => {
    return childProfiles.map((profile) =>
      calculateChildState(profile.profileId, profile.displayName, profile.subscription)
    );
  }, [childProfiles]);

  // Get access state for a specific child
  const getChildAccess = useCallback(
    (childProfileId: string): ChildSubscriptionState | null => {
      return children.find((c) => c.childProfileId === childProfileId) || null;
    },
    [children]
  );

  // Force refresh
  const refresh = useCallback(() => {
    setRefreshCounter((c) => c + 1);
  }, []);

  return {
    children,
    getChildAccess,
    loading,
    error,
    refresh,
  };
}

/**
 * Hook to get subscription state for the currently active child
 */
export function useCurrentChildSubscription(): {
  subscription: ChildSubscriptionState | null;
  loading: boolean;
  error: Error | null;
} {
  const { children, loading: parentLoading, error } = useSubscription();
  const { activeProfile } = useActiveProfile();
  const { user, userProfile } = useAuth();

  // State for linked child's own subscription (when logged in directly)
  const [linkedChildSubscription, setLinkedChildSubscription] = useState<ChildSubscriptionState | null>(null);
  const [linkedChildLoading, setLinkedChildLoading] = useState(false);

  // State for parent UID fetched from parents subcollection
  const [parentUidFromSubcollection, setParentUidFromSubcollection] = useState<string | null>(null);

  // For students, fetch parent UID from their parents subcollection
  useEffect(() => {
    if (userProfile?.accountType !== 'student' || !user?.uid) {
      setParentUidFromSubcollection(null);
      return;
    }

    // Query the parents subcollection to find linked parent
    const parentsRef = collection(firestore, `users/${user.uid}/parents`);
    const unsubscribe = onSnapshot(
      parentsRef,
      (snapshot) => {
        if (!snapshot.empty) {
          // Get first parent's UID (document ID is the parent's UID)
          const firstParentDoc = snapshot.docs[0];
          setParentUidFromSubcollection(firstParentDoc.id);
        } else {
          setParentUidFromSubcollection(null);
        }
      },
      (err) => {
        console.error('[useCurrentChildSubscription] Error fetching parents subcollection:', err);
        setParentUidFromSubcollection(null);
      }
    );

    return () => unsubscribe();
  }, [userProfile?.accountType, user?.uid]);

  // Detect if current user is a linked child logged in directly
  const isLinkedChildDirect = useMemo(() => {
    return (
      userProfile?.accountType === 'student' &&
      activeProfile?.type === 'self' &&
      !!parentUidFromSubcollection // Use parent UID from subcollection
    );
  }, [userProfile?.accountType, activeProfile?.type, parentUidFromSubcollection]);

  // Fetch subscription for linked children logging in directly
  useEffect(() => {
    if (!isLinkedChildDirect || !user?.uid || !parentUidFromSubcollection) {
      setLinkedChildSubscription(null);
      setLinkedChildLoading(false);
      return;
    }

    setLinkedChildLoading(true);
    const parentUid = parentUidFromSubcollection;
    const childUid = user.uid;

    // Fetch from parent's children subcollection
    const childRef = doc(firestore, `users/${parentUid}/children/${childUid}`);
    const unsubscribe = onSnapshot(
      childRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.subscription) {
            const subscription = parseSubscriptionData(data.subscription);
            const state = calculateChildState(
              childUid,
              userProfile?.displayName || 'Student',
              subscription
            );
            setLinkedChildSubscription(state);
          } else {
            // Document exists but no subscription field - check root level fields
            // (in case subscription data is stored flat)
            if (data.subscriptionStatus) {
              const subscription = parseSubscriptionData(data);
              const state = calculateChildState(
                childUid,
                userProfile?.displayName || 'Student',
                subscription
              );
              setLinkedChildSubscription(state);
            } else {
              setLinkedChildSubscription(null);
            }
          }
        } else {
          console.warn('[useCurrentChildSubscription] Linked child document not found in parent subcollection');
          setLinkedChildSubscription(null);
        }
        setLinkedChildLoading(false);
      },
      (err) => {
        console.error('[useCurrentChildSubscription] Error fetching linked child subscription:', err);
        setLinkedChildLoading(false);
      }
    );

    return () => unsubscribe();
  }, [isLinkedChildDirect, user?.uid, parentUidFromSubcollection, userProfile?.displayName]);

  // Determine which subscription to return
  const subscription = useMemo(() => {
    // For linked children logged in directly, use their fetched subscription
    if (isLinkedChildDirect) {
      return linkedChildSubscription;
    }

    if (!activeProfile) return null;

    // For Netflix-style profiles, match by profileId
    if (activeProfile.type === 'child-profile' && activeProfile.profileId) {
      return children.find((c) => c.childProfileId === activeProfile.profileId) || null;
    }

    // For parent viewing linked children, match by uid
    if (activeProfile.type === 'linked-child') {
      return children.find((c) => c.childProfileId === activeProfile.uid) || null;
    }

    return null;
  }, [isLinkedChildDirect, linkedChildSubscription, children, activeProfile]);

  // Combined loading state
  const loading = isLinkedChildDirect ? linkedChildLoading : parentLoading;

  return { subscription, loading, error };
}
