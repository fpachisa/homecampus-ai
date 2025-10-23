import React from 'react';
import { useTheme } from '../hooks/useTheme';
import type { ConversationSnapshot } from '../types/progress';

interface ResumeSessionPromptProps {
  savedSession: ConversationSnapshot;
  onResume: () => void;
  onStartNew: () => void;
}

export const ResumeSessionPrompt: React.FC<ResumeSessionPromptProps> = ({
  savedSession,
  onResume,
  onStartNew,
}) => {
  const { theme } = useTheme();

  // Calculate time since last update
  const lastUpdated = new Date(savedSession.lastUpdated);
  const now = new Date();
  const hoursSince = Math.floor((now.getTime() - lastUpdated.getTime()) / (1000 * 60 * 60));

  const timeAgo = hoursSince < 1
    ? 'less than an hour ago'
    : hoursSince < 24
    ? `${hoursSince} hour${hoursSince > 1 ? 's' : ''} ago`
    : `${Math.floor(hoursSince / 24)} day${Math.floor(hoursSince / 24) > 1 ? 's' : ''} ago`;

  const lastProblem = savedSession.problemState?.currentProblemText || 'No active problem';
  const truncatedProblem = lastProblem.length > 150
    ? lastProblem.substring(0, 150) + '...'
    : lastProblem;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div
        className="relative w-full max-w-lg rounded-2xl shadow-2xl p-8"
        style={{
          backgroundColor: theme.colors.overlay,
          border: `1px solid ${theme.colors.border}`,
        }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: `${theme.colors.brand}20`,
            }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke={theme.colors.brand}
            >
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h2
            className="text-2xl font-bold mb-2"
            style={{ color: theme.colors.textPrimary }}
          >
            Resume Your Session?
          </h2>
          <p
            className="text-sm"
            style={{ color: theme.colors.textSecondary }}
          >
            You have a saved learning session from {timeAgo}
          </p>
        </div>

        {/* Session details */}
        <div
          className="p-4 rounded-lg mb-6 space-y-3"
          style={{
            backgroundColor: `${theme.colors.interactive}80`,
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          <div>
            <div
              className="text-xs font-semibold mb-1"
              style={{ color: theme.colors.textMuted }}
            >
              TOPIC
            </div>
            <div
              className="text-sm font-medium"
              style={{ color: theme.colors.textPrimary }}
            >
              {savedSession.topicId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
            </div>
          </div>

          {savedSession.problemState && (
            <div>
              <div
                className="text-xs font-semibold mb-1"
                style={{ color: theme.colors.textMuted }}
              >
                LAST PROBLEM
              </div>
              <div
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                {truncatedProblem}
              </div>
            </div>
          )}

          <div className="flex gap-4 text-sm">
            <div>
              <div
                className="text-xs font-semibold mb-1"
                style={{ color: theme.colors.textMuted }}
              >
                MESSAGES
              </div>
              <div
                className="font-medium"
                style={{ color: theme.colors.textPrimary }}
              >
                {savedSession.messages.length}
              </div>
            </div>
            <div>
              <div
                className="text-xs font-semibold mb-1"
                style={{ color: theme.colors.textMuted }}
              >
                CORRECT
              </div>
              <div
                className="font-medium"
                style={{ color: theme.colors.success }}
              >
                {savedSession.sessionStats.correctAnswers}
              </div>
            </div>
            <div>
              <div
                className="text-xs font-semibold mb-1"
                style={{ color: theme.colors.textMuted }}
              >
                ATTEMPTS
              </div>
              <div
                className="font-medium"
                style={{ color: theme.colors.textPrimary }}
              >
                {savedSession.sessionStats.problemsAttempted}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={onResume}
            className="w-full py-3.5 text-white font-semibold rounded-lg text-base transition-all"
            style={{
              backgroundColor: theme.colors.brand,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.brandHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.brand;
            }}
          >
            Resume Session
          </button>

          <button
            onClick={onStartNew}
            className="w-full py-3 font-medium rounded-lg text-base transition-all"
            style={{
              border: `1.5px solid ${theme.colors.border}`,
              backgroundColor: 'transparent',
              color: theme.colors.textSecondary,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.interactive;
              e.currentTarget.style.color = theme.colors.textPrimary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = theme.colors.textSecondary;
            }}
          >
            Start New Session
          </button>
        </div>

        <p
          className="mt-4 text-xs text-center"
          style={{ color: theme.colors.textMuted }}
        >
          Starting a new session will save your current progress
        </p>
      </div>
    </div>
  );
};
