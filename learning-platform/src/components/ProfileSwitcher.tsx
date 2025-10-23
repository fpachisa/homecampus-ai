import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useActiveProfile } from '../contexts/ActiveProfileContext';
import { useAuth } from '../contexts/AuthContext';

export const ProfileSwitcher: React.FC = () => {
  const { theme } = useTheme();
  const { activeProfile, switchToSelf, switchToChildProfile, switchToLinkedChild, canSwitchProfiles } = useActiveProfile();
  const { userProfile } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!activeProfile || !canSwitchProfiles) {
    // Students see their name but no dropdown
    return (
      <div
        className="px-4 py-2 rounded-lg"
        style={{
          backgroundColor: theme.colors.interactive,
          color: theme.colors.textPrimary,
        }}
      >
        <span className="font-medium">{activeProfile?.displayName || 'Student'}</span>
      </div>
    );
  }

  // Get available profiles for parents
  const profiles: Array<{
    id: string;
    label: string;
    subtitle: string;
    type: 'self' | 'child-profile' | 'linked-child';
    icon: string;
    profileId?: string;
    childUid?: string;
    gradeLevel: string;
  }> = [];

  // Add parent's own profile
  profiles.push({
    id: 'parent-self',
    label: userProfile?.displayName || 'Parent',
    subtitle: 'Parent Dashboard',
    type: 'self',
    icon: '👨‍👩‍👧',
    gradeLevel: '',
  });

  // Add Netflix-style child profiles (no email)
  if (userProfile?.childProfiles) {
    userProfile.childProfiles.forEach((child: any) => {
      profiles.push({
        id: child.profileId,
        label: child.displayName,
        subtitle: child.gradeLevel,
        type: 'child-profile',
        icon: '👤',
        profileId: child.profileId,
        gradeLevel: child.gradeLevel,
      });
    });
  }

  // Add linked children (with independent accounts)
  if (userProfile?.linkedChildren) {
    userProfile.linkedChildren.forEach((child: any) => {
      profiles.push({
        id: child.uid,
        label: child.displayName,
        subtitle: `${child.grade} (Independent)`,
        type: 'linked-child',
        icon: '✓',
        childUid: child.uid,
        gradeLevel: child.grade,
      });
    });
  }

  const handleProfileSelect = (profile: typeof profiles[0]) => {
    if (profile.type === 'self') {
      switchToSelf();
    } else if (profile.type === 'child-profile' && profile.profileId) {
      switchToChildProfile(profile.profileId, profile.label, profile.gradeLevel);
    } else if (profile.type === 'linked-child' && profile.childUid) {
      switchToLinkedChild(profile.childUid, profile.label, profile.gradeLevel);
    }
    setIsOpen(false);
  };

  const currentProfileLabel = activeProfile.type === 'self'
    ? 'Parent'
    : activeProfile.displayName;

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
        style={{
          backgroundColor: theme.colors.interactive,
          color: theme.colors.textPrimary,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = theme.colors.interactiveHover;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = theme.colors.interactive;
        }}
      >
        <span className="font-medium">
          Viewing as: {currentProfileLabel}
        </span>
        <svg
          className="w-4 h-4 transition-transform"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 rounded-xl overflow-hidden shadow-xl min-w-[250px]"
          style={{
            backgroundColor: theme.colors.overlay,
            border: `1px solid ${theme.colors.border}`,
            zIndex: 9999,
          }}
        >
          {profiles.map((profile) => {
            const isActive =
              (profile.type === 'self' && activeProfile.type === 'self') ||
              (profile.type === 'child-profile' && activeProfile.profileId === profile.profileId) ||
              (profile.type === 'linked-child' && activeProfile.uid === profile.childUid);

            return (
              <button
                key={profile.id}
                onClick={() => handleProfileSelect(profile)}
                className="w-full px-4 py-3 flex items-center gap-3 transition-all text-left"
                style={{
                  backgroundColor: isActive ? theme.colors.brand + '20' : 'transparent',
                  borderLeft: isActive ? `4px solid ${theme.colors.brand}` : '4px solid transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = theme.colors.interactive;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span className="text-2xl">{profile.icon}</span>
                <div className="flex-1">
                  <div
                    className="font-semibold"
                    style={{ color: isActive ? theme.colors.brand : theme.colors.textPrimary }}
                  >
                    {profile.label}
                  </div>
                  <div className="text-sm" style={{ color: theme.colors.textSecondary }}>
                    {profile.subtitle}
                  </div>
                </div>
                {isActive && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" style={{ color: theme.colors.brand }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
