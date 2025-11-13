/**
 * InsightsPanel Component
 *
 * Displays AI-generated insights and recommendations for parents.
 * Shows celebrations, alerts, and actionable recommendations.
 */

import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import type { Insight } from '../../../services/analytics/parentAnalyticsService';

interface InsightsPanelProps {
  insights: Insight[];
}

export const InsightsPanel: React.FC<InsightsPanelProps> = ({ insights }) => {
  const { theme } = useTheme();

  if (insights.length === 0) {
    return null;
  }

  const getSentimentColor = (sentiment: 'positive' | 'warning' | 'info'): string => {
    switch (sentiment) {
      case 'positive':
        return theme.colors.success;
      case 'warning':
        return theme.colors.warning;
      case 'info':
        return theme.colors.info;
      default:
        return theme.colors.textMuted;
    }
  };

  const getSentimentBackground = (sentiment: 'positive' | 'warning' | 'info'): string => {
    switch (sentiment) {
      case 'positive':
        return `${theme.colors.success}10`;
      case 'warning':
        return `${theme.colors.warning}10`;
      case 'info':
        return `${theme.colors.info}10`;
      default:
        return `${theme.colors.textMuted}10`;
    }
  };

  return (
    <div
      className="p-6 rounded-2xl"
      style={{
        background: theme.glass.background,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
        boxShadow: theme.shadows.md,
      }}
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">💡</span>
          <h3 className="text-lg font-semibold" style={{ color: theme.colors.textPrimary }}>
            Insights & Recommendations
          </h3>
        </div>
        <p className="text-sm" style={{ color: theme.colors.textMuted }}>
          Personalized insights about your child's learning
        </p>
      </div>

      {/* Insights List */}
      <div className="space-y-3">
        {insights.map((insight, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl transition-all duration-200 hover:scale-[1.01]"
            style={{
              background: getSentimentBackground(insight.sentiment),
              border: `1px solid ${getSentimentColor(insight.sentiment)}30`,
            }}
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                style={{
                  backgroundColor: `${getSentimentColor(insight.sentiment)}20`,
                }}
              >
                {insight.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-sm leading-relaxed" style={{ color: theme.colors.textPrimary }}>
                  {insight.message}
                </p>

                {/* Action Button */}
                {insight.action && (
                  <button
                    className="mt-3 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: getSentimentColor(insight.sentiment),
                      color: '#ffffff',
                    }}
                    onClick={() => {
                      // TODO: Implement navigation
                      console.log('Navigate to:', insight.action?.route);
                    }}
                  >
                    {insight.action.label} →
                  </button>
                )}
              </div>

              {/* Type Badge */}
              <div
                className="px-2 py-1 rounded-md text-xs font-medium capitalize flex-shrink-0"
                style={{
                  backgroundColor: `${getSentimentColor(insight.sentiment)}20`,
                  color: getSentimentColor(insight.sentiment),
                }}
              >
                {insight.type}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Tip */}
      <div
        className="mt-6 pt-4 border-t text-xs"
        style={{ borderColor: theme.colors.border, color: theme.colors.textMuted }}
      >
        <p>💡 Tip: These insights are generated based on recent activity and learning patterns.</p>
      </div>
    </div>
  );
};
