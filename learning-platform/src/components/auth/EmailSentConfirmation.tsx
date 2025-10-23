import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface EmailSentConfirmationProps {
  email: string;
  onChangeEmail: () => void;
  onResendEmail: () => void;
  resending?: boolean;
}

export const EmailSentConfirmation: React.FC<EmailSentConfirmationProps> = ({
  email,
  onChangeEmail,
  onResendEmail,
  resending = false,
}) => {
  const { theme } = useTheme();
  const [showResendSuccess, setShowResendSuccess] = useState(false);

  const handleResend = () => {
    onResendEmail();
    setShowResendSuccess(true);
    setTimeout(() => setShowResendSuccess(false), 3000);
  };

  return (
    <div className="w-full max-w-md mx-auto px-6 py-8">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: `${theme.colors.brand}20`,
          }}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke={theme.colors.brand}
          >
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1
          className="text-3xl font-bold mb-3"
          style={{ color: theme.colors.textPrimary }}
        >
          Check your email
        </h1>
        <p
          className="text-base leading-relaxed mb-2"
          style={{ color: theme.colors.textSecondary }}
        >
          We sent a verification link to
        </p>
        <p
          className="text-base font-semibold mb-4"
          style={{ color: theme.colors.brand }}
        >
          {email}
        </p>
        <p
          className="text-sm leading-relaxed"
          style={{ color: theme.colors.textMuted }}
        >
          Click the link in the email to continue. The link will expire in 10 minutes.
        </p>
      </div>

      {/* Success message for resend */}
      {showResendSuccess && (
        <div
          className="mb-6 p-4 rounded-lg text-sm text-center animate-fade-in"
          style={{
            backgroundColor: `${theme.colors.success}20`,
            border: `1px solid ${theme.colors.success}40`,
            color: theme.colors.success,
          }}
        >
          ✓ Email sent successfully
        </div>
      )}

      {/* Actions */}
      <div className="space-y-4">
        {/* Resend button */}
        <button
          type="button"
          onClick={handleResend}
          disabled={resending}
          className="w-full py-3 px-4 font-semibold rounded-lg text-base transition-all"
          style={{
            border: `1.5px solid ${theme.colors.border}`,
            backgroundColor: 'transparent',
            color: theme.colors.textPrimary,
            opacity: resending ? 0.5 : 1,
            cursor: resending ? 'not-allowed' : 'pointer',
          }}
          onMouseEnter={(e) => {
            if (!resending) {
              e.currentTarget.style.backgroundColor = theme.colors.interactive;
            }
          }}
          onMouseLeave={(e) => {
            if (!resending) {
              e.currentTarget.style.backgroundColor = 'transparent';
            }
          }}
        >
          {resending ? 'Sending...' : 'Resend email'}
        </button>

        {/* Change email button */}
        <button
          type="button"
          onClick={onChangeEmail}
          className="w-full py-3 px-4 font-medium rounded-lg text-base transition-all"
          style={{
            backgroundColor: 'transparent',
            color: theme.colors.textSecondary,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = theme.colors.brand;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = theme.colors.textSecondary;
          }}
        >
          Use a different email
        </button>
      </div>

      {/* Help text */}
      <div
        className="mt-8 p-4 rounded-lg text-sm"
        style={{
          backgroundColor: `${theme.colors.interactive}80`,
          border: `1px solid ${theme.colors.border}`,
        }}
      >
        <p
          className="font-semibold mb-2"
          style={{ color: theme.colors.textPrimary }}
        >
          Didn't receive the email?
        </p>
        <ul
          className="space-y-1 text-sm"
          style={{ color: theme.colors.textSecondary }}
        >
          <li>• Check your spam or junk folder</li>
          <li>• Make sure you entered the correct email</li>
          <li>• Try resending the email</li>
        </ul>
      </div>
    </div>
  );
};
