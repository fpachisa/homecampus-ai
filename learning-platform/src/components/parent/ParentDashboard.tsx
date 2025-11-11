import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useAuth } from '../../contexts/AuthContext';
import { useActiveProfile } from '../../contexts/ActiveProfileContext';
import { ChildCard } from './ChildCard';
import { authService } from '../../services/authService';
import type { LinkedChild } from '../../types/user';

export const ParentDashboard: React.FC = () => {
  const { theme } = useTheme();
  const { user, userProfile } = useAuth();
  const { switchToChildProfile, switchToLinkedChild } = useActiveProfile();
  const [pendingInvites, setPendingInvites] = useState<Array<{
    email: string;
    displayName: string;
    gradeLevel: string;
    sentAt: string;
  }>>([]);
  const [linkedChildren, setLinkedChildren] = useState<LinkedChild[]>([]);

  // Fetch pending invites
  useEffect(() => {
    async function loadPendingInvites() {
      if (user) {
        const invites = await authService.getPendingChildInvites(user.uid);
        setPendingInvites(invites);
      }
    }
    loadPendingInvites();
  }, [user]);

  // Fetch linked children from subcollection
  useEffect(() => {
    async function loadLinkedChildren() {
      if (user) {
        const children = await authService.getLinkedChildren(user.uid);
        setLinkedChildren(children);
      }
    }
    loadLinkedChildren();
  }, [user]);

  if (!userProfile) {
    return null;
  }

  const childProfiles = userProfile.childProfiles || [];
  const totalChildren = childProfiles.length + linkedChildren.length + pendingInvites.length;

  return (
    <div className="max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-2" style={{ color: theme.colors.textPrimary }}>
          Welcome back, {userProfile.displayName}!
        </h2>
        <p className="text-lg" style={{ color: theme.colors.textSecondary }}>
          Monitor your children's learning progress
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div
          className="p-6 rounded-2xl"
          style={{
            background: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop,
            boxShadow: theme.shadows.md,
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: theme.colors.brand }}
            >
              👨‍👩‍👧‍👦
            </div>
            <div>
              <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                Total Children
              </p>
              <p className="text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
                {totalChildren}
              </p>
            </div>
          </div>
        </div>

        <div
          className="p-6 rounded-2xl"
          style={{
            background: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop,
            boxShadow: theme.shadows.md,
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: theme.colors.success }}
            >
              👤
            </div>
            <div>
              <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                Profiles
              </p>
              <p className="text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
                {childProfiles.length}
              </p>
            </div>
          </div>
        </div>

        <div
          className="p-6 rounded-2xl"
          style={{
            background: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop,
            boxShadow: theme.shadows.md,
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: theme.colors.info }}
            >
              ✓
            </div>
            <div>
              <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                Linked Accounts
              </p>
              <p className="text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
                {linkedChildren.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Children Section */}
      {totalChildren > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-6" style={{ color: theme.colors.textPrimary }}>
            Your Children
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Netflix-style Child Profiles */}
            {childProfiles.map((child) => (
              <ChildCard
                key={child.profileId}
                child={child}
                type="child-profile"
                onSwitch={() =>
                  switchToChildProfile(child.profileId, child.displayName, child.gradeLevel)
                }
              />
            ))}

            {/* Linked Children (Independent Accounts) */}
            {linkedChildren.map((child) => (
              <ChildCard
                key={child.uid}
                child={child}
                type="linked-child"
                onSwitch={() => switchToLinkedChild(child.uid, child.displayName, child.grade)}
              />
            ))}

            {/* Pending Invites */}
            {pendingInvites.map((invite, index) => (
              <div
                key={`pending-${index}`}
                className="p-6 rounded-2xl"
                style={{
                  background: theme.glass.background,
                  border: `1px solid ${theme.colors.border}`,
                  backdropFilter: theme.glass.backdrop,
                  boxShadow: theme.shadows.md,
                  opacity: 0.7,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-1" style={{ color: theme.colors.textPrimary }}>
                      {invite.displayName}
                    </h4>
                    <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                      {invite.gradeLevel}
                    </p>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: theme.colors.warning + '20',
                      color: theme.colors.warning,
                    }}
                  >
                    Pending
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                    {invite.email}
                  </p>
                </div>

                <div
                  className="p-3 rounded-lg flex items-center gap-2 text-sm"
                  style={{
                    backgroundColor: theme.colors.info + '10',
                    color: theme.colors.textSecondary,
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Awaiting account creation
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Empty State
        <div
          className="p-12 rounded-2xl text-center"
          style={{
            background: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop,
          }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6"
            style={{ backgroundColor: theme.colors.interactive }}
          >
            👨‍👩‍👧‍👦
          </div>
          <h3 className="text-2xl font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
            No Children Added Yet
          </h3>
          <p className="text-base mb-6" style={{ color: theme.colors.textSecondary }}>
            Start by adding children to monitor their learning progress
          </p>
          <button
            className="px-6 py-3 rounded-xl font-medium transition-all"
            style={{
              backgroundColor: theme.colors.brand,
              color: '#ffffff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Add Your First Child
          </button>
        </div>
      )}

      {/* Recent Activity Section (Future Enhancement) */}
      {totalChildren > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6" style={{ color: theme.colors.textPrimary }}>
            Recent Activity
          </h3>
          <div
            className="p-8 rounded-2xl text-center"
            style={{
              background: theme.glass.background,
              border: `1px solid ${theme.glass.border}`,
              backdropFilter: theme.glass.backdrop,
            }}
          >
            <p className="text-base" style={{ color: theme.colors.textMuted }}>
              Activity tracking coming soon
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentDashboard;
