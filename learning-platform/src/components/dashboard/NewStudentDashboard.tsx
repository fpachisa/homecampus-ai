/**
 * NewStudentDashboard - Dashboard view for students with no progress
 *
 * Purpose: Eliminate discouragement from seeing zeros, focus on getting started
 *
 * Layout:
 * 1. Welcome Hero - Quick guide (3 steps)
 * 2. Topic Grid - Prominent CTAs to start learning
 * 3. Unlocks Preview - Show what they can earn (motivation)
 */

import { useTheme } from '../../hooks/useTheme';
import { useActiveProfile } from '../../contexts/ActiveProfileContext';
import { getTopicsByGrade, type GradeLevel } from '../../config/topicsByGrade';
import { NewStudentHero } from './NewStudentHero';
import { NewTopicCard } from './NewTopicCard';
import { UnlocksPreview } from './UnlocksPreview';

export const NewStudentDashboard: React.FC = () => {
  const { theme } = useTheme();
  const { activeProfile } = useActiveProfile();

  // Get topics for student's grade
  const gradeLevel = (activeProfile?.gradeLevel as GradeLevel) || 'Secondary 3';
  const topics = getTopicsByGrade(gradeLevel);

  return (
    <div
      className="min-h-screen"
      style={{
        background: theme.gradients.panel,
        color: theme.colors.textPrimary,
      }}
    >
      {/* Background texture */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(88, 101, 242, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(71, 82, 196, 0.05) 0%, transparent 50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Hero Section */}
        <NewStudentHero name={activeProfile?.displayName || 'Student'} />

        {/* Topic Grid Section */}
        <section className="mt-12">
          <div className="mb-6">
            <h2
              className="text-2xl font-bold"
              style={{ color: theme.colors.textPrimary }}
            >
              📚 Your Topics ({gradeLevel})
            </h2>
            <p
              className="text-sm mt-2"
              style={{ color: theme.colors.textSecondary }}
            >
              Choose a topic to start your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {topics
              .filter((topic) => topic.isActive)
              .map((topic) => (
                <NewTopicCard key={topic.id} topic={topic} />
              ))}
          </div>

          {/* Coming Soon Topics */}
          {topics.some((t) => !t.isActive) && (
            <div className="mt-12">
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: theme.colors.textSecondary }}
              >
                Coming Soon
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 opacity-50">
                {topics
                  .filter((topic) => !topic.isActive)
                  .slice(0, 4)
                  .map((topic) => (
                    <NewTopicCard key={topic.id} topic={topic} disabled />
                  ))}
              </div>
            </div>
          )}
        </section>

        {/* Unlocks Preview Section */}
        <UnlocksPreview />
      </div>
    </div>
  );
};
