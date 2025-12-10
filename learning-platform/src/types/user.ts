// User and UserProfile type definitions for authentication and progress tracking

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  isGuest: boolean;
  isParent: boolean;           // True if parent account
  parentUid?: string;          // For student accounts linked to parent
  createdAt: string;
  lastLogin: string;
}

export interface StudentInfo {
  uid: string;
  displayName: string;
  gradeLevel: string;
  email?: string | null;
}

export interface PathProgressData {
  completedTopics: string[];
  currentTopicId: string;
  currentSectionIndex: number;
  lastAccessedAt: string;
  timeSpentMinutes: number;
  problemsCompleted: number;
  accuracy: number;            // 0-100
  hintsUsed: number;
}

// Netflix-style child profile (no email, stored in parent's document)
export interface ChildProfile {
  profileId: string;
  displayName: string;
  gradeLevel: string;
  pathProgress: {
    [pathId: string]: PathProgressData;
  };
  settings: {
    ttsSpeaker: string;
    theme: 'light' | 'dark';
    audioEnabled: boolean;
  };
  createdAt: string;
  lastActivityAt?: string;
}

// Linked child with independent account
export interface LinkedChild {
  uid: string;
  email: string;
  displayName: string;
  grade: string;
  lastActivityAt?: string;
}

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string;
  photoURL: string | null;
  gradeLevel: string;          // e.g., "Secondary 3"
  isGuest: boolean;
  isParent: boolean;

  // NEW: Onboarding tracking
  profileCompleted: boolean;   // True when user completes profile setup
  accountType: 'student' | 'parent'; // Account type choice
  onboardingCompletedAt?: string; // Timestamp when onboarding finished

  // For parent accounts
  students?: StudentInfo[];    // Legacy: Children linked to this parent account
  childProfiles?: ChildProfile[]; // Netflix-style profiles (no email)
  linkedChildren?: LinkedChild[]; // Children with independent accounts
  studentInfo?: {              // Optional student added during signup
    displayName: string;
    gradeLevel: string;
  };

  // For student accounts
  parentUid?: string;          // Parent's UID if linked
  parentEmail?: string;        // Parent's email address
  parentInvitePending?: boolean; // True if parent invite has been sent
  parentLinked?: boolean;      // True if parent account is linked
  parents?: string[];          // Array of parent UIDs (for security rules)

  pathProgress: {
    [pathId: string]: PathProgressData;
  };

  // Gamification stats (aggregated from practice progress)
  gamification?: {
    totalXP: number;
    currentLevel: number;
    currentStreak: number;
    longestStreak: number;
    lastActivityDate: string; // YYYY-MM-DD format for streak validation
    streakDates: string[];    // Array of active dates (last 30 days)
    totalAchievements: number;
    lastUpdated?: string; // ISO timestamp
  };

  settings: {
    ttsSpeaker: string;
    theme: 'light' | 'dark';
    audioEnabled: boolean;
  };

  createdAt: string;
  lastLogin: string;
}

// Profile setup data (used after email verification)
export interface ProfileSetupData {
  displayName: string;
  accountType: 'student' | 'parent';
  gradeLevel?: string; // For students, optional for parents
  isParent: boolean;

  // If parent, optionally add student info during setup
  studentInfo?: {
    displayName: string;
    gradeLevel: string;
  };
}

// ==================== SUBSCRIPTION TYPES ====================

export type SubscriptionStatus =
  | 'trial'           // 7-day free access (no payment yet)
  | 'trial_expired'   // Trial ended, no subscription
  | 'active'          // Paid and active
  | 'past_due'        // Payment failed, grace period
  | 'canceled'        // User canceled, access until period end
  | 'expired';        // Subscription ended

export interface SubscriptionData {
  // Trial tracking
  trialStartDate: Date;
  trialEndDate: Date;

  // Admin trial extension (optional override)
  trialExtendedUntil: Date | null;
  trialExtensionReason: string | null;
  trialExtensionSetBy: string | null;
  trialExtensionSetAt: Date | null;

  // Stripe identifiers (null until first payment)
  stripeCustomerId: string | null;
  subscriptionId: string | null;

  // Subscription details
  subscriptionStatus: SubscriptionStatus;
  priceId: string | null;
  billingInterval: 'month' | 'year' | null;
  currentPeriodStart: Date | null;
  currentPeriodEnd: Date | null;
  cancelAtPeriodEnd: boolean;

  // Grace period for past_due
  graceUntil: Date | null;

  // Payment info
  lastPaymentDate: Date | null;
  lastPaymentAmount: number | null;  // In cents
  currency: string;

  updatedAt: Date;
}

// Child profile with subscription (from subcollection)
export interface ChildProfileWithSubscription extends ChildProfile {
  subscription: SubscriptionData;
}

// Computed subscription state for UI
export interface ChildSubscriptionState {
  childProfileId: string;
  childName: string;
  status: SubscriptionStatus;
  hasAccess: boolean;
  isInTrial: boolean;
  isTrialExpired: boolean;
  isSubscribed: boolean;
  isPastDue: boolean;
  isCanceled: boolean;
  trialEndsAt: Date | null;
  trialDaysRemaining: number | null;
  graceEndsAt: Date | null;
  currentPeriodEnd: Date | null;
}
