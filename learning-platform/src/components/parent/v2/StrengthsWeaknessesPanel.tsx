/**
 * StrengthsWeaknessesPanel Component
 *
 * Side-by-side display of topics child is excelling at vs struggling with.
 * Helps parents identify where child needs support.
 */

import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import type { TopicInsight } from '../../../services/analytics/parentAnalyticsService';

interface StrengthsWeaknessesPanelProps {
  strengths: TopicInsight[];
  weaknesses: TopicInsight[];
}

export const StrengthsWeaknessesPanel: React.FC<StrengthsWeaknessesPanelProps> = ({
  strengths,
  weaknesses
}) => {
  const { theme } = useTheme();

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours === 0) return `${minutes}m`;
    return `${hours}h ${minutes}m`;
  };

  const TopicCard: React.FC<{ topic: TopicInsight; type: 'strength' | 'weakness' }> = ({ topic, type }) => {
    const isStrength = type === 'strength';

    return (
      <div
        className="p-4 rounded-xl transition-all duration-200 hover:scale-[1.02]"
        style={{
          background: isStrength
            ? `${theme.colors.success}10`
            : `${theme.colors.warning}10`,
          border: `1px solid ${isStrength ? `${theme.colors.success}30` : `${theme.colors.warning}30`}`,
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h4 className="font-semibold text-sm mb-1" style={{ color: theme.colors.textPrimary }}>
              {topic.displayName}
            </h4>
            {topic.accuracy !== undefined && (
              <p className="text-xs" style={{ color: theme.colors.textMuted }}>
                Accuracy: {Math.round(topic.accuracy)}%
              </p>
            )}
          </div>
          <div
            className="px-2 py-1 rounded-md text-xs font-semibold"
            style={{
              backgroundColor: isStrength ? theme.colors.success : theme.colors.warning,
              color: '#ffffff',
            }}
          >
            {Math.round(topic.progress)}%
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-3">
          <div
            className="h-2 rounded-full overflow-hidden"
            style={{ backgroundColor: `${theme.colors.textMuted}20` }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${topic.progress}%`,
                backgroundColor: isStrength ? theme.colors.success : theme.colors.warning,
              }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs" style={{ color: theme.colors.textMuted }}>
          {topic.timeSpent > 0 && <span>⏱️ {formatTime(topic.timeSpent)}</span>}
          {topic.problemsCorrect !== undefined && <span>✓ {topic.problemsCorrect} correct</span>}
          {topic.masteryLevel && (
            <span
              className="capitalize px-2 py-0.5 rounded"
              style={{
                backgroundColor: isStrength ? `${theme.colors.success}20` : `${theme.colors.warning}20`,
                color: isStrength ? theme.colors.success : theme.colors.warning,
              }}
            >
              {topic.masteryLevel}
            </span>
          )}
        </div>

        {/* Issues (for weaknesses) */}
        {!isStrength && topic.issues && topic.issues.length > 0 && (
          <div
            className="mt-3 pt-3 border-t text-xs"
            style={{ borderColor: `${theme.colors.warning}30`, color: theme.colors.textSecondary }}
          >
            {topic.issues.map((issue, idx) => (
              <p key={idx} className="flex items-start gap-2">
                <span>•</span>
                <span>{issue}</span>
              </p>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Strengths */}
      <div
        className="p-6 rounded-2xl"
        style={{
          background: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
          boxShadow: theme.shadows.md,
        }}
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">✅</span>
          <div>
            <h3 className="text-lg font-semibold" style={{ color: theme.colors.textPrimary }}>
              Strong Areas
            </h3>
            <p className="text-sm" style={{ color: theme.colors.textMuted }}>
              Topics with high mastery
            </p>
          </div>
        </div>

        {strengths.length > 0 ? (
          <div className="space-y-3">
            {strengths.map((topic) => (
              <TopicCard key={topic.topicId} topic={topic} type="strength" />
            ))}
          </div>
        ) : (
          <div
            className="text-center py-8 rounded-xl"
            style={{ backgroundColor: `${theme.colors.textMuted}10` }}
          >
            <p className="text-sm" style={{ color: theme.colors.textMuted }}>
              No strong topics yet. Keep learning!
            </p>
          </div>
        )}
      </div>

      {/* Weaknesses */}
      <div
        className="p-6 rounded-2xl"
        style={{
          background: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
          boxShadow: theme.shadows.md,
        }}
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">⚠️</span>
          <div>
            <h3 className="text-lg font-semibold" style={{ color: theme.colors.textPrimary }}>
              Needs Attention
            </h3>
            <p className="text-sm" style={{ color: theme.colors.textMuted }}>
              Topics that need more practice
            </p>
          </div>
        </div>

        {weaknesses.length > 0 ? (
          <div className="space-y-3">
            {weaknesses.map((topic) => (
              <TopicCard key={topic.topicId} topic={topic} type="weakness" />
            ))}
          </div>
        ) : (
          <div
            className="text-center py-8 rounded-xl"
            style={{ backgroundColor: `${theme.colors.success}10` }}
          >
            <p className="text-sm" style={{ color: theme.colors.success }}>
              🎉 No weak topics! Excellent progress!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
