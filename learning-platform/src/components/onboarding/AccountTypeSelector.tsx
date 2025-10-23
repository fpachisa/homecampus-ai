import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import type { AccountType } from './OnboardingWizard';

interface AccountTypeSelectorProps {
  onSelect: (accountType: AccountType) => void;
}

export const AccountTypeSelector: React.FC<AccountTypeSelectorProps> = ({ onSelect }) => {
  const { theme } = useTheme();

  const accountTypes = [
    {
      type: 'student' as const,
      icon: '👤',
      title: 'I\'m a Student',
      description: 'Learn mathematics with AI-powered tutoring',
    },
    {
      type: 'parent' as const,
      icon: '👨‍👩‍👧',
      title: 'I\'m a Parent',
      description: 'Monitor your child\'s learning progress',
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: theme.colors.textPrimary }}>
        Welcome to AI Campus
      </h2>
      <p className="text-center mb-8" style={{ color: theme.colors.textSecondary }}>
        Let's get started. Are you a student or parent?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accountTypes.map(({ type, icon, title, description }) => (
          <button
            key={type}
            onClick={() => onSelect(type)}
            className="p-8 rounded-xl transition-all duration-300 text-center"
            style={{
              background: theme.colors.secondary,
              border: `2px solid ${theme.colors.border}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = theme.colors.brand;
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = theme.shadows.glow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = theme.colors.border;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="text-6xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
              {title}
            </h3>
            <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
              {description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
