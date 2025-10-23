import React from 'react';
import { useTheme } from '../hooks/useTheme';

interface SyncStatusIndicatorProps {
  isSyncing: boolean;
  lastSyncTime: Date | null;
  syncError: string | null;
  compact?: boolean; // Show icon only (for mobile)
}

export const SyncStatusIndicator: React.FC<SyncStatusIndicatorProps> = ({
  isSyncing,
  lastSyncTime,
  syncError,
  compact = false,
}) => {
  const { theme } = useTheme();

  // Format relative time
  const getRelativeTime = (date: Date): string => {
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (seconds < 10) return 'just now';
    if (seconds < 60) return `${seconds}s ago`;

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;

    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  if (syncError) {
    return (
      <div className="flex items-center gap-2 text-xs" style={{ color: theme.colors.error }}>
        <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {!compact && <span>Sync error</span>}
      </div>
    );
  }

  if (isSyncing) {
    return (
      <div className="flex items-center gap-2 text-xs" style={{ color: theme.colors.textMuted }}>
        <svg
          className="w-4 h-4 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        {!compact && <span>Saving...</span>}
      </div>
    );
  }

  if (lastSyncTime) {
    return (
      <div className="flex items-center gap-2 text-xs" style={{ color: theme.colors.success }}>
        <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M5 13l4 4L19 7" />
        </svg>
        {!compact && <span>Saved {getRelativeTime(lastSyncTime)}</span>}
      </div>
    );
  }

  return null;
};
