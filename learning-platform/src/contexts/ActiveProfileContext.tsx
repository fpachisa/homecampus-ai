import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useAuth } from './AuthContext';

export interface ActiveProfile {
  /**
   * Type of profile being viewed
   * - 'self': User viewing their own account
   * - 'child-profile': Parent viewing a Netflix-style child profile (no email)
   * - 'linked-child': Parent viewing a child with independent login
   */
  type: 'self' | 'child-profile' | 'linked-child';

  /**
   * UID of the user
   * - For 'self': user's own UID
   * - For 'child-profile': parent's UID (profile stored in parent's document)
   * - For 'linked-child': child's UID (separate account)
   */
  uid: string;

  /**
   * Profile ID for Netflix-style profiles
   * Only used when type === 'child-profile'
   */
  profileId?: string;

  /**
   * Display name of the profile
   */
  displayName: string;

  /**
   * Grade level (e.g., "Secondary 3")
   */
  gradeLevel: string;

  /**
   * Account type of the logged-in user (not the profile)
   */
  accountType: 'student' | 'parent';
}

interface ActiveProfileContextType {
  activeProfile: ActiveProfile | null;
  setActiveProfile: (profile: ActiveProfile) => void;
  switchToSelf: () => void;
  switchToChildProfile: (profileId: string, displayName: string, gradeLevel: string) => void;
  switchToLinkedChild: (childUid: string, displayName: string, gradeLevel: string) => void;
  isViewingAsParent: boolean; // true if parent viewing dashboard (not child view)
  canSwitchProfiles: boolean; // true if user is a parent
}

const ActiveProfileContext = createContext<ActiveProfileContextType | undefined>(undefined);

export const useActiveProfile = (): ActiveProfileContextType => {
  const context = useContext(ActiveProfileContext);
  if (context === undefined) {
    throw new Error('useActiveProfile must be used within an ActiveProfileProvider');
  }
  return context;
};

interface ActiveProfileProviderProps {
  children: ReactNode;
}

export const ActiveProfileProvider: React.FC<ActiveProfileProviderProps> = ({ children }) => {
  const { user, userProfile, loading } = useAuth();
  const [activeProfile, setActiveProfile] = useState<ActiveProfile | null>(null);

  // Initialize active profile when user logs in or profile loads
  useEffect(() => {
    if (loading || !user || !userProfile) {
      setActiveProfile(null);
      return;
    }

    // Check if there's a saved active profile in localStorage
    const savedProfile = localStorage.getItem('active-profile');
    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile);

        // For parents viewing child profiles, restore the selection
        if (userProfile.accountType === 'parent' && parsed.type !== 'self') {
          // Validate child still exists in parent's profile
          const childExists =
            (parsed.type === 'child-profile' && userProfile.childProfiles?.some(c => c.profileId === parsed.profileId)) ||
            (parsed.type === 'linked-child' && userProfile.linkedChildren?.some(c => c.uid === parsed.uid));

          if (childExists) {
            setActiveProfile(parsed);
            return;
          }
        }

        // For 'self' profiles or invalid child profiles, clear cache and use fresh data
        localStorage.removeItem('active-profile');
      } catch (error) {
        console.error('Failed to parse saved active profile:', error);
        localStorage.removeItem('active-profile');
      }
    }

    // Default: Set to user's own profile with fresh Firestore data
    setActiveProfile({
      type: 'self',
      uid: user.uid,
      displayName: userProfile.displayName,
      gradeLevel: userProfile.gradeLevel || '',
      accountType: userProfile.accountType,
    });
  }, [user, userProfile, loading]);

  // Save active profile to localStorage whenever it changes
  useEffect(() => {
    if (activeProfile) {
      localStorage.setItem('active-profile', JSON.stringify(activeProfile));
    }
  }, [activeProfile]);

  const switchToSelf = () => {
    if (!user || !userProfile) return;

    setActiveProfile({
      type: 'self',
      uid: user.uid,
      displayName: userProfile.displayName,
      gradeLevel: userProfile.gradeLevel || '',
      accountType: userProfile.accountType,
    });
  };

  const switchToChildProfile = (profileId: string, displayName: string, gradeLevel: string) => {
    if (!user || !userProfile || userProfile.accountType !== 'parent') {
      console.error('Only parents can switch to child profiles');
      return;
    }

    setActiveProfile({
      type: 'child-profile',
      uid: profileId, // ✅ FIXED: Use child's pseudo-UID, not parent's UID
      profileId,
      displayName,
      gradeLevel,
      accountType: 'parent',
    });
  };

  const switchToLinkedChild = (childUid: string, displayName: string, gradeLevel: string) => {
    if (!user || !userProfile || userProfile.accountType !== 'parent') {
      console.error('Only parents can switch to linked children');
      return;
    }

    setActiveProfile({
      type: 'linked-child',
      uid: childUid, // Child's UID
      displayName,
      gradeLevel,
      accountType: 'parent',
    });
  };

  const isViewingAsParent = activeProfile?.type === 'self' && activeProfile?.accountType === 'parent';
  const canSwitchProfiles = userProfile?.accountType === 'parent';

  const contextValue: ActiveProfileContextType = {
    activeProfile,
    setActiveProfile,
    switchToSelf,
    switchToChildProfile,
    switchToLinkedChild,
    isViewingAsParent,
    canSwitchProfiles,
  };

  return (
    <ActiveProfileContext.Provider value={contextValue}>
      {children}
    </ActiveProfileContext.Provider>
  );
};
