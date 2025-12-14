/**
 * UnlocksPreview - Shows what students can unlock as they learn
 *
 * Purpose: Build excitement and motivation for new students
 * Shows preview of:
 * - Leveling system
 * - Streak system
 * - Achievement badges
 */

import { useTheme } from '../../hooks/useTheme';

export const UnlocksPreview: React.FC = () => {
  const { theme } = useTheme();

  const unlockCategories = [
    {
      icon: '🌟',
      title: 'Level Up',
      description: 'Gain XP from every problem you solve and reach new levels',
      details: ['Start at Level 1', 'Unlock perks as you level up', 'Show off your progress'],
    },
    {
      icon: '🔥',
      title: 'Daily Streaks',
      description: 'Keep your learning streak alive by practicing every day',
      details: ['Earn bonus XP', 'Build consistency', 'Track your dedication'],
    },
    {
      icon: '🏅',
      title: 'Achievements',
      description: 'Unlock 17 unique badges as you master different skills',
      details: ['First Problem', 'Perfect scores', 'Marathon sessions'],
    },
  ];

  return (
    <section className="mt-16">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2
          className="text-3xl font-bold mb-3"
          style={{ color: theme.colors.textPrimary }}
        >
          🏆 What You'll Unlock
        </h2>
        <p
          className="text-lg"
          style={{ color: theme.colors.textSecondary }}
        >
          As you learn, you'll earn rewards and unlock new features
        </p>
      </div>

      {/* Unlock Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {unlockCategories.map((category, index) => (
          <div
            key={index}
            className="glass-surface p-8 rounded-2xl text-center"
            style={{
              background: theme.glass.background,
              border: `1px solid ${theme.glass.border}`,
              backdropFilter: theme.glass.backdrop,
              boxShadow: theme.shadows.md,
            }}
          >
            {/* Icon */}
            <div className="text-6xl mb-4">{category.icon}</div>

            {/* Title */}
            <h3
              className="text-xl font-bold mb-3"
              style={{ color: theme.colors.textPrimary }}
            >
              {category.title}
            </h3>

            {/* Description */}
            <p
              className="text-sm mb-6"
              style={{ color: theme.colors.textSecondary }}
            >
              {category.description}
            </p>

            {/* Details List */}
            <ul className="space-y-2 text-left">
              {category.details.map((detail, detailIndex) => (
                <li
                  key={detailIndex}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: theme.colors.textSecondary }}
                >
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p
          className="text-lg font-medium"
          style={{ color: theme.colors.brand }}
        >
          Ready to unlock your potential? Start learning now! ↑
        </p>
      </div>
    </section>
  );
};
