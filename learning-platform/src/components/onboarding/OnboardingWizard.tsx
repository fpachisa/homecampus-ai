import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useAuth } from '../../contexts/AuthContext';
import { authService } from '../../services/authService';
import { AccountTypeSelector } from './AccountTypeSelector';
import { StudentProfileForm } from './StudentProfileForm';
import { ParentInviteForm } from './ParentInviteForm';
import { ParentProfileForm } from './ParentProfileForm';
import { AddChildrenForm } from './AddChildrenForm';
import { UnifiedAuthForm } from '../auth/UnifiedAuthForm';

export type AccountType = 'student' | 'parent' | null;
export type OnboardingStep =
  | 'account-type'
  | 'auth'
  | 'student-profile'
  | 'parent-invite'
  | 'parent-profile'
  | 'add-children'
  | 'complete';

interface OnboardingData {
  accountType: AccountType;
  email: string | null;
  displayName: string | null;
  gradeLevel: string | null;
  parentEmail: string | null;
  children: Array<{
    displayName: string;
    gradeLevel: string;
    email?: string;
  }>;
}

interface OnboardingWizardProps {
  onComplete: () => void;
  onCancel: () => void;
  inviteToken?: string | null;
  inviteInfo?: any;
}

export const OnboardingWizard: React.FC<OnboardingWizardProps> = ({
  onComplete,
  onCancel,
  inviteToken,
  inviteInfo
}) => {
  const { theme } = useTheme();
  const { user, sendVerificationEmail, signInWithGoogle, reloadProfile } = useAuth();
  // If invite exists, skip account selection and go straight to auth
  const initialStep: OnboardingStep = inviteToken ? 'auth' : 'account-type';
  const [step, setStep] = useState<OnboardingStep>(initialStep);
  const [data, setData] = useState<OnboardingData>({
    // Auto-set account type to 'parent' if invite exists
    accountType: inviteToken ? 'parent' : null,
    email: null,
    displayName: null,
    gradeLevel: null,
    parentEmail: null,
    children: [],
  });
  const [_isProcessing, setIsProcessing] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  const updateData = (updates: Partial<OnboardingData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const handleAccountTypeSelect = (accountType: AccountType) => {
    updateData({ accountType });
    setStep('auth');
  };

  const handleEmailSubmit = async (email: string) => {
    setAuthLoading(true);
    setAuthError(null);

    try {
      await sendVerificationEmail(email);
      updateData({ email });

      // Show success message and wait for email verification
      alert(`Verification email sent to ${email}. Please check your inbox and click the link to continue.`);

      // Note: User will complete sign-in via email link, then return to app
      // The auth state change will be handled by AuthContext
    } catch (error: any) {
      console.error('Error sending verification email:', error);
      setAuthError(error.message || 'Failed to send verification email');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setAuthLoading(true);
    setAuthError(null);

    try {
      await signInWithGoogle();
      // Auth state change will be handled by AuthContext
      // Once user is authenticated, we'll move to profile step
    } catch (error: any) {
      console.error('Error signing in with Google:', error);
      setAuthError(error.message || 'Failed to sign in with Google');
    } finally {
      setAuthLoading(false);
    }
  };

  // Watch for user authentication to move to next step
  useEffect(() => {
    if (user && step === 'auth') {
      // User is now authenticated, move to profile setup
      updateData({ email: user.email || '' });

      if (data.accountType === 'student') {
        setStep('student-profile');
      } else {
        setStep('parent-profile');
      }
    }
  }, [user, step, data.accountType]);

  const handleStudentProfileComplete = async (displayName: string, gradeLevel: string) => {
    updateData({ displayName, gradeLevel });
    setIsProcessing(true);

    try {
      // Save student profile data to Firestore
      if (user) {
        await authService.updateUserProfile(user.uid, {
          displayName,
          gradeLevel,
          accountType: 'student',
          isParent: false,
        });
      }
      setStep('parent-invite');
    } catch (error) {
      console.error('Error saving student profile:', error);
      // Continue to next step anyway - don't block onboarding
      setStep('parent-invite');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleParentInviteComplete = async (parentEmail: string) => {
    updateData({ parentEmail });
    setIsProcessing(true);

    try {
      // Send parent invite and save to profile if user is authenticated
      if (user) {
        await authService.sendParentInvite(user.uid, parentEmail);
        console.log('Parent invite sent successfully to:', parentEmail);

        // Update profile with parent email and mark as completed
        await authService.updateUserProfile(user.uid, {
          parentEmail,
          profileCompleted: true,
        });
      }
    } catch (error) {
      console.error('Error sending parent invite:', error);
      // Continue anyway - don't block onboarding
    } finally {
      setIsProcessing(false);
      setStep('complete');
    }
  };

  const handleParentProfileComplete = async (displayName: string) => {
    updateData({ displayName });
    setIsProcessing(true);

    try {
      // Save parent profile data to Firestore
      if (user) {
        await authService.updateUserProfile(user.uid, {
          displayName,
          accountType: 'parent',
          isParent: true,
          profileCompleted: true,
        });

        // If accepting an invite, link parent to student
        if (inviteToken) {
          console.log('[OnboardingWizard] Attempting to accept invite with token:', inviteToken);
          try {
            await authService.acceptParentInvite(inviteToken, user.uid);
            console.log('✅ Parent linked to student via invite!');
          } catch (inviteError) {
            console.error('❌ Failed to accept invite:', inviteError);
            // Continue anyway - user can be linked later
          }
          // Skip add-children and go straight to complete
          setStep('complete');
        } else {
          // Normal flow - ask parent to add children
          setStep('add-children');
        }
      }
    } catch (error) {
      console.error('Error saving parent profile:', error);
      // Continue to next step anyway - don't block onboarding
      if (inviteToken) {
        setStep('complete');
      } else {
        setStep('add-children');
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAddChildrenComplete = async (children: Array<{ displayName: string; gradeLevel: string; email?: string }>) => {
    updateData({ children });
    setIsProcessing(true);

    try {
      if (user) {
        // Process each child
        for (const child of children) {
          if (child.email) {
            // Child has email - send invite for linked account
            await authService.sendChildInvite(user.uid, child.email, {
              displayName: child.displayName,
              gradeLevel: child.gradeLevel,
            });
            console.log('Child invite sent to:', child.email);
          } else {
            // No email - create Netflix-style profile
            await authService.addChildProfile(user.uid, {
              displayName: child.displayName,
              gradeLevel: child.gradeLevel,
            });
            console.log('Child profile created for:', child.displayName);
          }
        }

        // Mark parent profile as completed
        await authService.updateUserProfile(user.uid, {
          profileCompleted: true,
        });
      }
    } catch (error) {
      console.error('Error processing children:', error);
      // Continue anyway - don't block onboarding
    } finally {
      setIsProcessing(false);
      setStep('complete');
    }
  };

  const handleComplete = async () => {
    // Reload profile to ensure latest data is loaded
    await reloadProfile();
    // All data collected, proceed to app
    onComplete();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8"
      style={{
        background: theme.gradients.panel,
      }}
    >
      {/* Background pattern */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(217, 119, 87, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(217, 119, 87, 0.05) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 w-full max-w-2xl">
        {/* Progress Indicator */}
        {step !== 'complete' && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium" style={{ color: theme.colors.textSecondary }}>
                {step === 'account-type' && 'Step 1 of 4'}
                {step === 'auth' && 'Step 2 of 4'}
                {(step === 'student-profile' || step === 'parent-profile') && 'Step 3 of 4'}
                {(step === 'parent-invite' || step === 'add-children') && 'Step 4 of 4'}
              </span>
              <button
                onClick={onCancel}
                className="text-sm"
                style={{ color: theme.colors.textMuted }}
              >
                Cancel
              </button>
            </div>
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{ backgroundColor: theme.colors.interactive }}
            >
              <div
                className="h-full transition-all duration-300"
                style={{
                  width: `${
                    step === 'account-type' ? 25 :
                    step === 'auth' ? 50 :
                    (step === 'student-profile' || step === 'parent-profile') ? 75 :
                    100
                  }%`,
                  backgroundColor: theme.colors.brand,
                }}
              />
            </div>
          </div>
        )}

        {/* Step Content */}
        <div
          className="p-8 rounded-2xl"
          style={{
            background: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop,
            boxShadow: theme.shadows.xl,
          }}
        >
          {step === 'account-type' && (
            <AccountTypeSelector onSelect={handleAccountTypeSelect} />
          )}

          {step === 'auth' && (
            <div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: theme.colors.textPrimary }}>
                {data.accountType === 'student' ? 'Create Your Account' : 'Create Parent Account'}
              </h2>
              <p className="mb-6" style={{ color: theme.colors.textSecondary }}>
                {data.accountType === 'student'
                  ? 'Enter your email to get started'
                  : inviteInfo
                  ? `You've been invited to monitor ${inviteInfo.studentName || 'your child'}'s learning progress`
                  : 'Enter your email to create your parent account'}
              </p>
              <UnifiedAuthForm
                onEmailSubmit={handleEmailSubmit}
                onGoogleSignIn={handleGoogleSignIn}
                loading={authLoading}
                error={authError}
              />
            </div>
          )}

          {step === 'student-profile' && (
            <StudentProfileForm
              onComplete={handleStudentProfileComplete}
              onBack={() => setStep('auth')}
            />
          )}

          {step === 'parent-invite' && (
            <ParentInviteForm
              studentName={data.displayName || ''}
              onComplete={handleParentInviteComplete}
              onBack={() => setStep('student-profile')}
            />
          )}

          {step === 'parent-profile' && (
            <ParentProfileForm
              onComplete={handleParentProfileComplete}
              onBack={() => setStep('auth')}
            />
          )}

          {step === 'add-children' && (
            <AddChildrenForm
              onComplete={handleAddChildrenComplete}
              onBack={() => setStep('parent-profile')}
            />
          )}

          {step === 'complete' && (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
                Welcome to Home Campus!
              </h2>
              <p className="text-lg mb-8" style={{ color: theme.colors.textSecondary }}>
                {data.accountType === 'student'
                  ? 'Your account is ready. Let\'s start learning!'
                  : inviteToken && inviteInfo
                  ? `You're now connected with ${inviteInfo.studentName || 'your child'}. Ready to monitor their progress!`
                  : 'Your parent account is set up. Ready to monitor progress!'}
              </p>
              <button
                onClick={handleComplete}
                className="px-8 py-3 rounded-xl text-lg font-semibold text-white transition-all"
                style={{
                  background: theme.gradients.brand,
                  boxShadow: theme.shadows.md,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = theme.shadows.glow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = theme.shadows.md;
                }}
              >
                {data.accountType === 'student' ? 'Start Learning' : 'Go to Dashboard'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingWizard;
