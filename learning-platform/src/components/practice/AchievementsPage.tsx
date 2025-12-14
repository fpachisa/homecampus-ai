/**
 * AchievementsPage - Full page view of all achievements
 *
 * Displays earned achievements and locked achievements that can be earned.
 * Shows progress and stats related to achievements.
 */

import { useMemo } from 'react';
import type { Achievement, PathProgress, DailyStreak } from '../../types/practice';
import { achievementService } from '../../services/achievementService';
import { initializeStreak } from '../../services/streakService';
import { useTheme } from '../../hooks/useTheme';
import { BackButton } from '../BackButton';

interface AchievementsPageProps {
  progress: PathProgress;
  globalStreak?: DailyStreak; // Optional - if not provided, streak achievements won't be checkable
  onBack: () => void;
}

export const AchievementsPage: React.FC<AchievementsPageProps> = ({ progress, globalStreak, onBack }) => {
  const { theme } = useTheme();

  // Get all achievement definitions
  const allDefinitions = achievementService.ACHIEVEMENT_DEFINITIONS;

  // Create maps for easy lookup
  const earnedMap = useMemo(() => {
    const map = new Map<string, Achievement>();
    progress.achievements.forEach(a => map.set(a.id, a));
    return map;
  }, [progress.achievements]);

  // Categorize achievements
  const categories = useMemo(() => {
    const categorized = {
      'First Steps': [] as typeof allDefinitions,
      'Consistency': [] as typeof allDefinitions,
      'Accuracy': [] as typeof allDefinitions,
      'Volume': [] as typeof allDefinitions,
      'Layer Completion': [] as typeof allDefinitions,
      'Speed & Time': [] as typeof allDefinitions,
    };

    allDefinitions.forEach(def => {
      if (def.id.includes('first-')) categorized['First Steps'].push(def);
      else if (def.id.includes('streak')) categorized['Consistency'].push(def);
      else if (def.id.includes('accuracy') || def.id.includes('perfectionist')) categorized['Accuracy'].push(def);
      else if (def.id.includes('problem-solver') || def.id.includes('century')) categorized['Volume'].push(def);
      else if (def.id.includes('complete')) categorized['Layer Completion'].push(def);
      else categorized['Speed & Time'].push(def);
    });

    return categorized;
  }, [allDefinitions]);

  // Calculate stats
  const totalEarned = progress.achievements.length;
  const totalPossible = allDefinitions.length;
  const totalXPFromAchievements = progress.achievements.reduce((sum, a) => sum + a.xpReward, 0);
  const progressPercent = totalPossible > 0 ? Math.round((totalEarned / totalPossible) * 100) : 0;

  return (
    <div className="min-h-screen" style={{ background: theme.gradients.panel }}>
      {/* Header */}
      <div
        className="sticky top-0 z-10 border-b"
        style={{
          backgroundColor: theme.glass.background,
          borderColor: theme.glass.border,
          backdropFilter: theme.glass.backdrop,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <BackButton onClick={onBack} />
              <div>
                <h1 className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
                  🏆 Achievements
                </h1>
                <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                  {totalEarned} of {totalPossible} earned
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold" style={{ color: '#57F287' }}>
                +{totalXPFromAchievements} XP
              </div>
              <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
                Total earned
              </div>
            </div>
          </div>

          {/* Overall Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2" style={{ color: theme.colors.textSecondary }}>
              <span>Overall Progress</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="h-3 rounded-full overflow-hidden" style={{ backgroundColor: theme.colors.interactive }}>
              <div
                className="h-full transition-all duration-500"
                style={{
                  width: `${progressPercent}%`,
                  backgroundColor: '#FFA500',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Achievement Categories */}
        {Object.entries(categories).map(([categoryName, defs]) => {
          if (defs.length === 0) return null;

          return (
            <div key={categoryName} className="mb-8">
              {/* Category Header */}
              <div className="mb-4">
                <h2 className="text-xl font-bold" style={{ color: theme.colors.textPrimary }}>
                  {categoryName}
                </h2>
                <div className="h-1 w-16 rounded-full mt-2" style={{ backgroundColor: '#FFA500' }} />
              </div>

              {/* Achievement Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {defs.map(def => {
                  const earned = earnedMap.get(def.id);
                  const isEarned = !!earned;
                  const canEarn = !isEarned && def.check(progress, globalStreak || initializeStreak());

                  return (
                    <div
                      key={def.id}
                      className="p-4 rounded-lg transition-all duration-300"
                      style={{
                        backgroundColor: theme.glass.background,
                        border: `2px solid ${
                          isEarned
                            ? '#FFA500'
                            : canEarn
                            ? theme.colors.brand
                            : theme.glass.border
                        }`,
                        backdropFilter: theme.glass.backdrop,
                        opacity: isEarned || canEarn ? 1 : 0.6,
                        boxShadow: isEarned ? '0 0 20px #FFA50040' : 'none',
                      }}
                    >
                      {/* Icon */}
                      <div className="text-center mb-3">
                        <div
                          className="text-5xl inline-block"
                          style={{
                            filter: isEarned || canEarn ? 'none' : 'grayscale(100%) opacity(0.5)',
                          }}
                        >
                          {def.icon}
                        </div>
                        {isEarned && (
                          <div
                            className="inline-block ml-2 px-2 py-0.5 rounded-full text-xs font-bold"
                            style={{
                              backgroundColor: '#57F287',
                              color: '#ffffff',
                            }}
                          >
                            ✓
                          </div>
                        )}
                        {canEarn && !isEarned && (
                          <div
                            className="inline-block ml-2 px-2 py-0.5 rounded-full text-xs font-bold animate-pulse"
                            style={{
                              backgroundColor: theme.colors.brand,
                              color: '#ffffff',
                            }}
                          >
                            READY!
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <div
                        className="text-base font-bold text-center mb-2"
                        style={{ color: isEarned ? theme.colors.textPrimary : theme.colors.textSecondary }}
                      >
                        {def.title}
                      </div>

                      {/* Description */}
                      <div
                        className="text-sm text-center mb-3 min-h-[40px]"
                        style={{ color: theme.colors.textSecondary }}
                      >
                        {def.description}
                      </div>

                      {/* XP Reward */}
                      <div
                        className="text-xs font-semibold text-center px-2 py-1 rounded"
                        style={{
                          backgroundColor: '#57F28720',
                          color: '#57F287',
                        }}
                      >
                        +{def.xpReward} XP
                      </div>

                      {/* Earned Date (if earned) */}
                      {earned && (
                        <div className="text-xs text-center mt-2" style={{ color: theme.colors.textMuted }}>
                          Earned {new Date(earned.earnedAt).toLocaleDateString()}
                        </div>
                      )}

                      {/* Locked indicator */}
                      {!isEarned && !canEarn && (
                        <div className="text-xs text-center mt-2" style={{ color: theme.colors.textMuted }}>
                          🔒 Locked
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
