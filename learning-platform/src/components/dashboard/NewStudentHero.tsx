/**
 * NewStudentHero - Welcome section for new students
 *
 * Shows:
 * - Welcome message
 * - Quick 3-step guide
 * - Encouraging tone to get started
 */

import { useTheme } from '../../hooks/useTheme';

interface NewStudentHeroProps {
  name: string;
}

export const NewStudentHero: React.FC<NewStudentHeroProps> = ({ name }) => {
  const { theme } = useTheme();

  const quickSteps = [
    {
      icon: '1️⃣',
      title: 'Choose a Topic',
      description: 'Pick any topic below to start learning',
    },
    {
      icon: '2️⃣',
      title: 'Complete Problems',
      description: 'Practice with AI-guided problems',
    },
    {
      icon: '3️⃣',
      title: 'Earn Rewards',
      description: 'Gain XP, unlock achievements, and level up!',
    },
  ];

  return (
    <div
      className="glass-surface rounded-2xl p-8 md:p-12"
      style={{
        background: theme.glass.background,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
        boxShadow: theme.shadows.glow,
      }}
    >
      {/* Welcome Message */}
      <div className="text-center mb-8">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          style={{ color: theme.colors.textPrimary }}
        >
          🎉 Welcome to Home Campus, {name}!
        </h1>
        <p
          className="text-lg md:text-xl"
          style={{ color: theme.colors.textSecondary }}
        >
          Start your learning journey - pick your first topic below
        </p>
      </div>

      {/* Quick Guide */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mt-8">
        {quickSteps.map((step, index) => (
          <div
            key={index}
            className="flex-1 p-6 rounded-xl text-center"
            style={{
              backgroundColor: theme.colors.interactive,
              border: `1px solid ${theme.colors.border}`,
            }}
          >
            <div className="text-4xl mb-3">{step.icon}</div>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: theme.colors.textPrimary }}
            >
              {step.title}
            </h3>
            <p
              className="text-sm"
              style={{ color: theme.colors.textSecondary }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Motivational Message */}
      <div className="text-center mt-8">
        <p
          className="text-sm italic"
          style={{ color: theme.colors.textMuted }}
        >
          Your learning adventure starts now. Ready? Let's go! 🚀
        </p>
      </div>
    </div>
  );
};
