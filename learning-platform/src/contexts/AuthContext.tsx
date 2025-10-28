import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, isSignInWithEmailLink } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { auth } from '../services/firebase';
import { authService } from '../services/authService';
import type { UserProfile } from '../types/user';

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  needsProfileSetup: boolean; // Tracks if profile setup is needed
  isProcessingEmailLink: boolean; // Tracks if email link is being processed (prevents page flash)

  // Email link auth methods
  sendVerificationEmail: (email: string, accountType?: 'student' | 'parent') => Promise<void>;
  completeEmailSignIn: (email: string) => Promise<void>;

  // Keep existing methods
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
  completeProfileSetup: (profileData: Partial<UserProfile>) => Promise<void>;
  reloadProfile: () => Promise<void>; // Manually reload profile from Firestore
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
  // Initialize based on URL check to prevent homepage flash (runs before first render)
  const [isProcessingEmailLink, setIsProcessingEmailLink] = useState(() =>
    isSignInWithEmailLink(auth, window.location.href)
  );

  // Send verification email with account type for cross-device flow
  const sendVerificationEmail = async (email: string, accountType?: 'student' | 'parent') => {
    try {
      await authService.sendVerificationEmail(email, accountType);
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
      } else {
        setUserProfile(null);
        setNeedsProfileSetup(false);
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
        setIsProcessingEmailLink(true); // Show loading state (prevents page flash)

        try {
          const url = new URL(window.location.href);
          const urlParams = new URLSearchParams(url.search);

          // Try to get email from URL first (cross-device), then localStorage
          let email = urlParams.get('email') || authService.getSavedEmail();

          if (!email) {
            // Last resort: prompt user (only if URL doesn't have email)
            email = window.prompt('Please provide your email for confirmation');
          }

          if (email) {
            await completeEmailSignIn(email);
            // Preserve important params (emailSignIn, accountType) for OnboardingWizard
            // but remove Firebase-specific params (apiKey, mode, oobCode, etc.)
            const preservedParams = new URLSearchParams();
            const emailSignIn = urlParams.get('emailSignIn');
            const accountType = urlParams.get('accountType');

            if (emailSignIn) preservedParams.set('emailSignIn', emailSignIn);
            if (accountType) preservedParams.set('accountType', accountType);

            const newUrl = preservedParams.toString()
              ? `${window.location.pathname}?${preservedParams.toString()}`
              : window.location.pathname;

            window.history.replaceState({}, document.title, newUrl);
          }
        } catch (error) {
          console.error('Error handling email link:', error);
        } finally {
          setIsProcessingEmailLink(false);
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
    isProcessingEmailLink,
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