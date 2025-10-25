import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, isSignInWithEmailLink } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { auth } from '../services/firebase';
import { authService } from '../services/authService';
import { progressSyncService } from '../services/progressSyncService';
import type { UserProfile } from '../types/user';

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  needsProfileSetup: boolean; // NEW - tracks if profile setup is needed

  // New email link auth methods
  sendVerificationEmail: (email: string) => Promise<void>;
  completeEmailSignIn: (email: string) => Promise<void>;

  // Keep existing methods
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
  completeProfileSetup: (profileData: Partial<UserProfile>) => Promise<void>;
  reloadProfile: () => Promise<void>; // NEW - manually reload profile from Firestore
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [needsProfileSetup, setNeedsProfileSetup] = useState(false);

  // Send verification email
  const sendVerificationEmail = async (email: string) => {
    try {
      await authService.sendVerificationEmail(email);
    } catch (error) {
      console.error('Error sending verification email:', error);
      throw error;
    }
  };

  // Complete email sign in with email link
  const completeEmailSignIn = async (email: string) => {
    try {
      await authService.completeEmailSignIn(email);
      // onAuthStateChanged will handle setting the user and checking profile
    } catch (error) {
      console.error('Error completing email sign in:', error);
      throw error;
    }
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      await authService.signInWithGoogle();
      // onAuthStateChanged will handle setting the user and checking profile
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    try {
      await authService.signOut();
      setUserProfile(null);
      setNeedsProfileSetup(false);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  // Update user profile
  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) return;

    try {
      await authService.updateUserProfile(user.uid, updates);
      setUserProfile((prev) => prev ? { ...prev, ...updates } : null);
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  };

  // Complete profile setup after account type selection
  const completeProfileSetup = async (profileData: Partial<UserProfile>) => {
    if (!user) return;

    try {
      await authService.completeProfileSetup(user.uid, profileData);
      // Reload profile after setup
      const updatedProfile = await authService.getUserProfile(user.uid);
      setUserProfile(updatedProfile);
      setNeedsProfileSetup(false);
    } catch (error) {
      console.error('Error completing profile setup:', error);
      throw error;
    }
  };

  // Manually reload profile from Firestore (useful after onboarding)
  const reloadProfile = async () => {
    if (!user) return;

    try {
      const updatedProfile = await authService.getUserProfile(user.uid);
      setUserProfile(updatedProfile);
      const needsSetup = await authService.needsProfileSetup(user.uid);
      setNeedsProfileSetup(needsSetup);
    } catch (error) {
      console.error('Error reloading profile:', error);
    }
  };

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        // Load user profile from Firestore
        const profile = await authService.getUserProfile(firebaseUser.uid);
        setUserProfile(profile);

        // Check if profile setup is needed
        const needsSetup = await authService.needsProfileSetup(firebaseUser.uid);
        setNeedsProfileSetup(needsSetup);

        // Start auto-sync for authenticated user
        progressSyncService.startAutoSync(firebaseUser.uid);

        // Check for guest data to migrate (only for non-anonymous users)
        if (!firebaseUser.isAnonymous) {
          const guestData = progressSyncService.loadGuestData();
          if (guestData) {
            try {
              console.log('📦 Migrating guest progress to authenticated user...');
              await progressSyncService.migrateGuestProgress(guestData, firebaseUser.uid);
              console.log('✅ Guest progress migrated successfully!');
              // Note: Could show toast notification here in the future
            } catch (error) {
              console.error('❌ Failed to migrate guest progress:', error);
            }
          }
        }
      } else {
        setUserProfile(null);
        setNeedsProfileSetup(false);

        // Stop auto-sync and start guest mode sync
        progressSyncService.stopAutoSync();
        progressSyncService.startAutoSync(null); // null = guest mode
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Check for email link sign-in on app load
  useEffect(() => {
    const handleEmailLink = async () => {
      // Check if current URL is an email sign-in link
      if (isSignInWithEmailLink(auth, window.location.href)) {
        // Get email from localStorage or prompt user
        let email = authService.getSavedEmail();

        if (!email) {
          // If no saved email, this might be a different device
          // In production, you'd want to show a modal asking for email
          email = window.prompt('Please provide your email for confirmation');
        }

        if (email) {
          try {
            await completeEmailSignIn(email);
            // Clean up URL (remove email link params)
            window.history.replaceState({}, document.title, window.location.pathname);
          } catch (error) {
            console.error('Error handling email link:', error);
          }
        }
      }
    };

    handleEmailLink();
  }, []);

  const value: AuthContextType = {
    user,
    userProfile,
    loading,
    needsProfileSetup,
    sendVerificationEmail,
    completeEmailSignIn,
    signInWithGoogle,
    logout,
    updateProfile,
    completeProfileSetup,
    reloadProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};