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
