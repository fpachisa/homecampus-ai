/**
 * Session Resume Modal
 *
 * Displays when an active homework session is found in localStorage
 * Allows user to resume or start fresh
 */

import { useTheme } from '../../hooks/useTheme';
import { Clock, FileText, X } from 'lucide-react';
import type { CachedProblem } from '../../services/homework/homeworkStorageService';
import type { HomeworkSession } from '../../types/homework';

interface SessionResumeModalProps {
  isOpen: boolean;
  onResume: () => void;
  onStartNew: () => void;
  problem: CachedProblem | null;
  session: HomeworkSession | null;
}

export const SessionResumeModal: React.FC<SessionResumeModalProps> = ({
  isOpen,
  onResume,
  onStartNew,
  problem,
  session
}) => {
  const { theme } = useTheme();

  if (!isOpen || !problem || !session) return null;

  // Calculate time ago
  const getTimeAgo = (timestamp: string): string => {
    const now = new Date();
    const past = new Date(timestamp);
    const diffMs = now.getTime() - past.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) {
      return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    } else if (diffHours > 0) {
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else if (diffMinutes > 0) {
      return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
    } else {
      return 'just now';
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={onStartNew}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Modal */}
      <div
        className="relative max-w-lg w-full rounded-2xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: theme.colors.primary,
          border: `1px solid ${theme.colors.border}`,
          boxShadow: theme.shadows.xl,
        }}
      >
        {/* Close button (starts new) */}
        <button
          onClick={onStartNew}
          className="absolute top-4 right-4 p-1 rounded-lg transition-colors"
          style={{
            color: theme.colors.textMuted,
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.interactive;
            e.currentTarget.style.color = theme.colors.textPrimary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = theme.colors.textMuted;
          }}
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: `${theme.colors.brand}20`,
            }}
          >
            <Clock size={32} color={theme.colors.brand} strokeWidth={2.5} />
          </div>
        </div>

        {/* Title */}
        <h2
          className="text-2xl font-bold text-center mb-2"
          style={{ color: theme.colors.textPrimary }}
        >
          Resume Previous Session?
        </h2>

        {/* Time ago */}
        <p
          className="text-center mb-6 text-sm"
          style={{ color: theme.colors.textMuted }}
        >
          Last activity: {getTimeAgo(session.lastActivityAt)}
        </p>

        {/* Problem preview */}
        <div
          className="rounded-xl p-4 mb-6"
          style={{
            backgroundColor: theme.colors.secondary,
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          {/* Problem info */}
          <div className="flex items-start gap-3 mb-3">
            <FileText size={20} color={theme.colors.brand} className="mt-1 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-sm font-semibold"
                  style={{ color: theme.colors.textPrimary }}
                >
                  {problem.analysis.topic}
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: `${theme.colors.brand}20`,
                    color: theme.colors.brand,
                  }}
                >
                  {problem.analysis.difficulty}
                </span>
              </div>
              <p
                className="text-sm line-clamp-3"
                style={{ color: theme.colors.textSecondary }}
              >
                {problem.extractedText.substring(0, 150)}
                {problem.extractedText.length > 150 ? '...' : ''}
              </p>
            </div>
          </div>

          {/* Session progress */}
          <div
            className="pt-3 mt-3 flex items-center justify-between text-xs"
            style={{
              borderTop: `1px solid ${theme.colors.border}`,
              color: theme.colors.textMuted,
            }}
          >
            <span>{session.messages.length} messages</span>
            <span>{session.hintsGiven} hints given</span>
            <span>{session.studentAttempts} attempts</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-3">
          {/* Resume button (primary) */}
          <button
            onClick={onResume}
            className="w-full py-3 px-6 rounded-xl font-semibold text-white transition-all"
            style={{
              background: theme.gradients.brand,
              boxShadow: theme.shadows.md,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = theme.shadows.glow;
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = theme.shadows.md;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Resume Session
          </button>

          {/* Start new button (secondary) */}
          <button
            onClick={onStartNew}
            className="w-full py-3 px-6 rounded-xl font-semibold transition-all"
            style={{
              backgroundColor: theme.colors.interactive,
              color: theme.colors.textPrimary,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.secondary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.interactive;
            }}
          >
            Start New Problem
          </button>
        </div>

        {/* Helper text */}
        <p
          className="text-xs text-center mt-4"
          style={{ color: theme.colors.textMuted }}
        >
          Starting a new problem will save your current progress
        </p>
      </div>
    </div>
  );
};
