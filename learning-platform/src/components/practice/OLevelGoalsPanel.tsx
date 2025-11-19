/**
 * OLevelGoalsPanel - Right sidebar for O-Level practice
 *
 * Shows exam preparation goals, tips, and paper-specific information
 */

import React from 'react';
import type { PathProgress } from '../../types/practice';
import { useTheme } from '../../hooks/useTheme';

interface OLevelGoalsPanelProps {
  progress: PathProgress | null;
  selectedPaper: 'paper1' | 'paper2';
  totalNodes: number;
}

export const OLevelGoalsPanel: React.FC<OLevelGoalsPanelProps> = ({
  progress,
  selectedPaper,
  totalNodes,
}) => {
  const { theme } = useTheme();

  // Calculate completion stats
  const completedNodes = progress
    ? Object.values(progress.nodes).filter(n => n.status === 'completed').length
    : 0;

  const completionPercentage = totalNodes > 0
    ? Math.round((completedNodes / totalNodes) * 100)
    : 0;

  // Define milestones
  const milestones = [
    { threshold: 25, icon: '🌱', label: 'Getting Started', message: 'Complete 25% of questions' },
    { threshold: 50, icon: '🌿', label: 'Halfway There', message: 'Complete 50% of questions' },
    { threshold: 75, icon: '🌳', label: 'Almost Done', message: 'Complete 75% of questions' },
    { threshold: 100, icon: '🏆', label: 'Mastery', message: 'Complete all questions' },
  ];

  // Paper-specific info (from official O-Level scheme of assessment)
  const paperInfo = selectedPaper === 'paper1'
    ? {
        name: 'Paper 1',
        duration: '2 hours 15 minutes',
        marks: '90 marks (50% weighting)',
        description: 'About 26 short answer questions',
        requirement: 'Answer ALL questions',
        tips: [
          'Focus on speed and accuracy',
          'Practice mental math techniques',
          'Review basic formulas regularly',
          'Time yourself: ~5 min per question'
        ]
      }
    : {
        name: 'Paper 2',
        duration: '2 hours 15 minutes',
        marks: '90 marks (50% weighting)',
        description: '9-10 questions of varying lengths',
        requirement: 'Answer ALL questions. Last question applies math to real-world scenarios',
        tips: [
          'Show all working clearly',
          'Read questions carefully',
          'Check units and conversions',
          'Time yourself: ~13-15 min per question'
        ]
      };

  return (
    <div className="h-full overflow-y-auto p-3 space-y-3">
      {/* Paper Info Card */}
      <div
        className="p-3 rounded-lg"
        style={{
          backgroundColor: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">📄</span>
          <div>
            <div className="text-sm font-bold" style={{ color: theme.colors.textPrimary }}>
              {paperInfo.name}
            </div>
            <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
              Exam Information
            </div>
          </div>
        </div>

        <div className="space-y-2 text-xs" style={{ color: theme.colors.textSecondary }}>
          <div>
            <div className="font-semibold mb-0.5" style={{ color: theme.colors.textPrimary }}>
              ⏱️ Duration
            </div>
            <div>{paperInfo.duration}</div>
          </div>
          <div>
            <div className="font-semibold mb-0.5" style={{ color: theme.colors.textPrimary }}>
              📊 Marks
            </div>
            <div>{paperInfo.marks}</div>
          </div>
          <div>
            <div className="font-semibold mb-0.5" style={{ color: theme.colors.textPrimary }}>
              📝 Format
            </div>
            <div>{paperInfo.description}</div>
          </div>
          <div>
            <div className="font-semibold mb-0.5" style={{ color: theme.colors.textPrimary }}>
              ✅ Requirement
            </div>
            <div>{paperInfo.requirement}</div>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div
        className="p-3 rounded-lg"
        style={{
          backgroundColor: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
        }}
      >
        <div className="text-sm font-semibold mb-3" style={{ color: theme.colors.textPrimary }}>
          🎯 Milestones
        </div>

        <div className="space-y-2">
          {milestones.map((milestone, index) => {
            const isAchieved = completionPercentage >= milestone.threshold;
            const isCurrent = completionPercentage < milestone.threshold &&
                            (index === 0 || completionPercentage >= milestones[index - 1].threshold);

            return (
              <div
                key={milestone.threshold}
                className="flex items-center gap-2 p-2 rounded"
                style={{
                  backgroundColor: isAchieved
                    ? theme.colors.interactive
                    : isCurrent
                    ? theme.colors.interactive + '80'
                    : 'transparent',
                  opacity: isAchieved || isCurrent ? 1 : 0.5,
                }}
              >
                <span className="text-xl">{milestone.icon}</span>
                <div className="flex-1">
                  <div
                    className="text-xs font-semibold"
                    style={{ color: theme.colors.textPrimary }}
                  >
                    {milestone.label}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    {milestone.message}
                  </div>
                </div>
                {isAchieved && (
                  <span className="text-sm" style={{ color: '#10B981' }}>✓</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Exam Tips */}
      <div
        className="p-3 rounded-lg"
        style={{
          backgroundColor: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
        }}
      >
        <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
          💡 {paperInfo.name} Tips
        </div>
        <ul className="text-xs space-y-1.5" style={{ color: theme.colors.textSecondary }}>
          {paperInfo.tips.map((tip, index) => (
            <li key={index}>• {tip}</li>
          ))}
        </ul>
      </div>

      {/* Encouragement */}
      <div
        className="p-3 rounded-lg text-center"
        style={{
          backgroundColor: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
        }}
      >
        <div className="text-2xl mb-2">
          {completionPercentage === 0 ? '🚀' :
           completionPercentage < 50 ? '💪' :
           completionPercentage < 100 ? '⭐' : '🎉'}
        </div>
        <div className="text-xs font-semibold" style={{ color: theme.colors.textPrimary }}>
          {completionPercentage === 0 ? 'Start your journey!' :
           completionPercentage < 50 ? 'Keep going!' :
           completionPercentage < 100 ? "You're almost there!" :
           'Excellent work!'}
        </div>
      </div>
    </div>
  );
};

export default OLevelGoalsPanel;
