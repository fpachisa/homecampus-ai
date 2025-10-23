import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import type { ChildProfile, LinkedChild } from '../../types/user';

interface ChildCardProps {
  child: ChildProfile | LinkedChild;
  type: 'child-profile' | 'linked-child';
  onSwitch: () => void;
}

export const ChildCard: React.FC<ChildCardProps> = ({ child, type, onSwitch }) => {
  const { theme } = useTheme();

  // Determine display values based on child type
  const isLinked = type === 'linked-child';
  const linkedChild = isLinked ? (child as LinkedChild) : null;
  const childProfile = !isLinked ? (child as ChildProfile) : null;

  const displayName = isLinked ? linkedChild!.displayName : childProfile!.displayName;
  const gradeLevel = isLinked ? linkedChild!.grade : childProfile!.gradeLevel;
  const lastActivity = 'lastActivityAt' in child ? child.lastActivityAt : null;

  // Calculate progress statistics (only for child profiles with stored progress)
  let completedTopics = 0;
  let totalProgress = 0;

  if (childProfile?.pathProgress) {
    const progressEntries = Object.values(childProfile.pathProgress);
    completedTopics = progressEntries.reduce(
      (sum, progress) => sum + (progress.completedTopics?.length || 0),
      0
    );
    totalProgress = progressEntries.reduce(
      (sum, progress) => sum + (progress.accuracy || 0),
      0
    ) / (progressEntries.length || 1);
  }

  // Format last activity
  const formatLastActivity = (timestamp?: string) => {
    if (!timestamp) return 'No recent activity';

    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) return 'Active now';
    if (diffHours < 24) return `Active ${diffHours}h ago`;
    if (diffDays === 1) return 'Active yesterday';
    if (diffDays < 7) return `Active ${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <button
      onClick={onSwitch}
      className="group relative p-6 rounded-2xl transition-all duration-300 text-left w-full"
      style={{
        background: theme.glass.background,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
        boxShadow: theme.shadows.md,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = theme.shadows.glow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = theme.shadows.md;
      }}
    >
      {/* Profile Type Badge */}
      <div className="absolute top-4 right-4">
        <div
          className="px-3 py-1 rounded-full text-xs font-medium"
          style={{
            backgroundColor: isLinked ? theme.colors.success + '20' : theme.colors.brand + '20',
            color: isLinked ? theme.colors.success : theme.colors.brand,
          }}
        >
          {isLinked ? '✓ Independent' : '👤 Profile'}
        </div>
      </div>

      {/* Child Icon */}
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4"
        style={{
          backgroundColor: theme.colors.interactive,
        }}
      >
        {isLinked ? '👨‍🎓' : '👤'}
      </div>

      {/* Child Name & Grade */}
      <h3
        className="text-xl font-semibold mb-1"
        style={{ color: theme.colors.textPrimary }}
      >
        {displayName}
      </h3>
      <p
        className="text-sm mb-4"
        style={{ color: theme.colors.textSecondary }}
      >
        {gradeLevel}
      </p>

      {/* Progress Stats (for child profiles) */}
      {!isLinked && childProfile && (
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm" style={{ color: theme.colors.textMuted }}>
              Topics Completed
            </span>
            <span className="text-sm font-semibold" style={{ color: theme.colors.textPrimary }}>
              {completedTopics}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm" style={{ color: theme.colors.textMuted }}>
              Average Progress
            </span>
            <span className="text-sm font-semibold" style={{ color: theme.colors.textPrimary }}>
              {Math.round(totalProgress)}%
            </span>
          </div>
        </div>
      )}

      {/* Last Activity */}
      <div
        className="text-xs pt-4 border-t"
        style={{
          color: theme.colors.textMuted,
          borderColor: theme.colors.border,
        }}
      >
        {formatLastActivity(lastActivity)}
      </div>

      {/* View Arrow */}
      <div
        className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all"
        style={{
          backgroundColor: theme.colors.brand,
          color: '#ffffff',
        }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};
