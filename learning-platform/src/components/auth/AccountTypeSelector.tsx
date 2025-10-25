import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface AccountTypeSelectorProps {
  onSelect: (accountType: 'student' | 'parent') => void;
}

export const AccountTypeSelector: React.FC<AccountTypeSelectorProps> = ({
  onSelect,
}) => {
  const { theme } = useTheme();
  const [hoveredType, setHoveredType] = useState<'student' | 'parent' | null>(null);

  return (
    <div className="w-full max-w-md mx-auto px-6 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1
          className="text-3xl font-bold mb-3"
          style={{ color: theme.colors.textPrimary }}
        >
          Welcome to Home Campus!
        </h1>
        <p
          className="text-base"
          style={{ color: theme.colors.textSecondary }}
        >
          Tell us about yourself to personalize your experience
        </p>
      </div>

      {/* Account type cards */}
      <div className="space-y-4">
        {/* Student Card */}
        <button
          type="button"
          onClick={() => onSelect('student')}
          onMouseEnter={() => setHoveredType('student')}
          onMouseLeave={() => setHoveredType(null)}
          className="w-full p-6 rounded-xl text-left transition-all transform"
          style={{
            border: `2px solid ${hoveredType === 'student' ? theme.colors.brand : theme.colors.border}`,
            backgroundColor: hoveredType === 'student' ? `${theme.colors.brand}10` : theme.colors.interactive,
            transform: hoveredType === 'student' ? 'scale(1.02)' : 'scale(1)',
            cursor: 'pointer',
          }}
        >
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor: hoveredType === 'student' ? theme.colors.brand : `${theme.colors.brand}30`,
              }}
            >
              <span className="text-2xl">🎓</span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3
                className="text-lg font-bold mb-1"
                style={{ color: theme.colors.textPrimary }}
              >
                I'm a Student
              </h3>
              <p
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                Learning mathematics and improving my skills
              </p>
            </div>

            {/* Arrow */}
            <svg
              className="w-6 h-6 flex-shrink-0 transition-transform"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke={hoveredType === 'student' ? theme.colors.brand : theme.colors.textMuted}
              style={{
                transform: hoveredType === 'student' ? 'translateX(4px)' : 'translateX(0)',
              }}
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        {/* Parent Card */}
        <button
          type="button"
          onClick={() => onSelect('parent')}
          onMouseEnter={() => setHoveredType('parent')}
          onMouseLeave={() => setHoveredType(null)}
          className="w-full p-6 rounded-xl text-left transition-all transform"
          style={{
            border: `2px solid ${hoveredType === 'parent' ? theme.colors.brand : theme.colors.border}`,
            backgroundColor: hoveredType === 'parent' ? `${theme.colors.brand}10` : theme.colors.interactive,
            transform: hoveredType === 'parent' ? 'scale(1.02)' : 'scale(1)',
            cursor: 'pointer',
          }}
        >
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor: hoveredType === 'parent' ? theme.colors.brand : `${theme.colors.brand}30`,
              }}
            >
              <span className="text-2xl">👨‍👩‍👧</span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3
                className="text-lg font-bold mb-1"
                style={{ color: theme.colors.textPrimary }}
              >
                I'm a Parent
              </h3>
              <p
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                Supporting my child's educational journey
              </p>
            </div>

            {/* Arrow */}
            <svg
              className="w-6 h-6 flex-shrink-0 transition-transform"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke={hoveredType === 'parent' ? theme.colors.brand : theme.colors.textMuted}
              style={{
                transform: hoveredType === 'parent' ? 'translateX(4px)' : 'translateX(0)',
              }}
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};
