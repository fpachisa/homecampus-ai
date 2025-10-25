import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ParentProfileFormProps {
  onComplete: (displayName: string) => void;
  onBack: () => void;
}

export const ParentProfileForm: React.FC<ParentProfileFormProps> = ({ onComplete, onBack }) => {
  const { theme } = useTheme();
  const [displayName, setDisplayName] = useState('');

  const canContinue = displayName.trim().length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canContinue) {
      onComplete(displayName.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-2" style={{ color: theme.colors.textPrimary }}>
        Welcome, Parent!
      </h2>
      <p className="mb-6" style={{ color: theme.colors.textSecondary }}>
        Let's set up your account so you can monitor your child's learning progress
      </p>

      {/* Name Input */}
      <div className="mb-8">
        <label
          htmlFor="displayName"
          className="block text-sm font-semibold mb-2"
          style={{ color: theme.colors.textPrimary }}
        >
          Your Name
        </label>
        <input
          id="displayName"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-3 rounded-lg transition-all"
          style={{
            backgroundColor: theme.colors.secondary,
            border: `2px solid ${theme.colors.border}`,
            color: theme.colors.textPrimary,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = theme.colors.brand;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = theme.colors.border;
          }}
          autoFocus
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 px-6 py-3 rounded-lg font-semibold transition-all"
          style={{
            backgroundColor: theme.colors.interactive,
            border: `1px solid ${theme.colors.border}`,
            color: theme.colors.textPrimary,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.interactiveHover;
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.interactive;
            e.currentTarget.style.color = theme.colors.textPrimary;
          }}
        >
          Back
        </button>
        <button
          type="submit"
          disabled={!canContinue}
          className="flex-1 px-6 py-3 rounded-lg font-semibold text-white transition-all"
          style={{
            backgroundColor: canContinue ? theme.colors.brand : theme.colors.interactive,
            opacity: canContinue ? 1 : 0.5,
            cursor: canContinue ? 'pointer' : 'not-allowed',
          }}
          onMouseEnter={(e) => {
            if (canContinue) {
              e.currentTarget.style.backgroundColor = theme.colors.brandHover;
            }
          }}
          onMouseLeave={(e) => {
            if (canContinue) {
              e.currentTarget.style.backgroundColor = theme.colors.brand;
            }
          }}
        >
          Continue
        </button>
      </div>
    </form>
  );
};
