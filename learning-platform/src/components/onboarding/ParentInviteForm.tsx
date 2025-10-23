import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ParentInviteFormProps {
  studentName: string;
  onComplete: (parentEmail: string) => void;
  onBack: () => void;
}

export const ParentInviteForm: React.FC<ParentInviteFormProps> = ({ studentName, onComplete, onBack }) => {
  const { theme } = useTheme();
  const [parentEmail, setParentEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const canContinue = parentEmail.trim().length > 0 && validateEmail(parentEmail) && !emailError;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setParentEmail(email);

    if (email.trim().length > 0 && !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canContinue) {
      onComplete(parentEmail.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-2" style={{ color: theme.colors.textPrimary }}>
        Add your parent
      </h2>
      <p className="mb-6" style={{ color: theme.colors.textSecondary }}>
        Your parent can monitor your progress and support your learning journey.
        We'll send them an invitation to create their account.
      </p>

      {/* Parent Email Input */}
      <div className="mb-8">
        <label
          htmlFor="parentEmail"
          className="block text-sm font-semibold mb-2"
          style={{ color: theme.colors.textPrimary }}
        >
          Parent's Email Address
        </label>
        <input
          id="parentEmail"
          type="email"
          value={parentEmail}
          onChange={handleEmailChange}
          placeholder="parent@example.com"
          className="w-full px-4 py-3 rounded-lg transition-all"
          style={{
            backgroundColor: theme.colors.secondary,
            border: `2px solid ${emailError ? theme.colors.error : theme.colors.border}`,
            color: theme.colors.textPrimary,
          }}
          onFocus={(e) => {
            if (!emailError) {
              e.currentTarget.style.borderColor = theme.colors.brand;
            }
          }}
          onBlur={(e) => {
            if (!emailError) {
              e.currentTarget.style.borderColor = theme.colors.border;
            }
          }}
          autoFocus
        />
        {emailError && (
          <p className="mt-2 text-sm" style={{ color: theme.colors.error }}>
            {emailError}
          </p>
        )}
      </div>

      {/* Info Box */}
      <div
        className="p-4 rounded-lg mb-8"
        style={{
          backgroundColor: theme.colors.info + '20',
          border: `1px solid ${theme.colors.info}`,
        }}
      >
        <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
          <strong style={{ color: theme.colors.textPrimary }}>What happens next?</strong><br />
          We'll send an email to your parent with a link to create their account and connect with you.
        </p>
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
          Send Invite
        </button>
      </div>
    </form>
  );
};
