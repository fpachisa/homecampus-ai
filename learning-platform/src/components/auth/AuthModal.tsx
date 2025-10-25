import { useState, useEffect } from 'react';
import { UnifiedAuthForm } from './UnifiedAuthForm';
import { EmailSentConfirmation } from './EmailSentConfirmation';
import { ProfileSetupWizard } from './ProfileSetupWizard';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../hooks/useTheme';
import type { UserProfile } from '../../types/user';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalView = 'auth' | 'email-sent' | 'profile-setup';

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { theme } = useTheme();
  const {
    user,
    needsProfileSetup,
    sendVerificationEmail,
    signInWithGoogle,
    completeProfileSetup,
  } = useAuth();

  const [view, setView] = useState<ModalView>('auth');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reset view when modal opens
  useEffect(() => {
    if (isOpen) {
      setView('auth');
      setError(null);
      setLoading(false);
    }
  }, [isOpen]);

  // Show profile setup if user is authenticated but profile incomplete
  useEffect(() => {
    if (user && needsProfileSetup) {
      setView('profile-setup');
    } else if (user && !needsProfileSetup) {
      // User is fully set up, close modal
      onClose();
    }
  }, [user, needsProfileSetup, onClose]);

  const handleEmailSubmit = async (submittedEmail: string) => {
    setError(null);
    setLoading(true);
    setEmail(submittedEmail);

    try {
      await sendVerificationEmail(submittedEmail);
      setView('email-sent');
    } catch (err: any) {
      setError(err.message || 'Failed to send verification email');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);

    try {
      await signInWithGoogle();
      // onAuthStateChanged will handle the rest
    } catch (err: any) {
      setError(err.message || 'Failed to sign in with Google');
      setLoading(false);
    }
  };

  const handleResendEmail = async () => {
    if (!email) return;

    setError(null);
    setLoading(true);

    try {
      await sendVerificationEmail(email);
    } catch (err: any) {
      setError(err.message || 'Failed to resend verification email');
    } finally {
      setLoading(false);
    }
  };

  const handleChangeEmail = () => {
    setView('auth');
    setEmail('');
    setError(null);
  };

  const handleProfileSetupComplete = async (profileData: Partial<UserProfile>) => {
    setError(null);
    try {
      await completeProfileSetup(profileData);
      // Profile setup complete, AuthContext will update and close modal
    } catch (err: any) {
      setError(err.message || 'Failed to complete profile setup');
      throw err; // Throw to wizard so it can show error and stop loading
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div
        className="relative w-full max-w-md rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
        style={{
          backgroundColor: theme.colors.overlay,
          border: `1px solid ${theme.colors.border}`,
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 transition-colors"
          style={{ color: theme.colors.textMuted }}
          aria-label="Close"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = theme.colors.textPrimary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = theme.colors.textMuted;
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Modal content */}
        <div>
          {view === 'auth' && (
            <UnifiedAuthForm
              onEmailSubmit={handleEmailSubmit}
              onGoogleSignIn={handleGoogleSignIn}
              loading={loading}
              error={error}
            />
          )}

          {view === 'email-sent' && (
            <EmailSentConfirmation
              email={email}
              onChangeEmail={handleChangeEmail}
              onResendEmail={handleResendEmail}
              resending={loading}
            />
          )}

          {view === 'profile-setup' && (
            <ProfileSetupWizard
              onComplete={handleProfileSetupComplete}
            />
          )}
        </div>
      </div>
    </div>
  );
};
