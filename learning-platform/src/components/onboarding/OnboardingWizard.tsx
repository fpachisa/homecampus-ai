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
import { ConfirmationModal } from '../ui/ConfirmationModal';

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
  inviteType?: 'parent-to-child' | 'student-to-parent' | null;
  accountTypeFromUrl?: 'student' | 'parent' | null;
}

export const OnboardingWizard: React.FC<OnboardingWizardProps> = ({
  onComplete,
  onCancel,
  inviteToken,
  inviteInfo,
  inviteType,
  accountTypeFromUrl
}) => {
  const { theme } = useTheme();
  const { user, userProfile, sendVerificationEmail, signInWithGoogle, reloadProfile } = useAuth();

  // Determine initial step intelligently based on user state
  const getInitialStep = (): OnboardingStep => {
    // Invite flow: go to auth
    if (inviteToken) return 'auth';

    // Email verification return: prioritize sessionStorage > URL param > userProfile
    // sessionStorage is most reliable as it survives redirects and URL changes
    const accountTypeFromSession = sessionStorage.getItem('onboarding_accountType') as 'student' | 'parent' | null;
    const accountType = accountTypeFromSession || accountTypeFromUrl || userProfile?.accountType;

    if (user && accountType) {
      console.log('[OnboardingWizard] Email verification detected, accountType:', accountType, '(from:', accountTypeFromSession ? 'sessionStorage' : accountTypeFromUrl ? 'URL' : 'userProfile', ')');
      return accountType === 'student' ? 'student-profile' : 'parent-profile';
    }

    // New user: start at account type selection
    return 'account-type';
  };

  const initialStep: OnboardingStep = getInitialStep();
  const [step, setStep] = useState<OnboardingStep>(initialStep);
  const [data, setData] = useState<OnboardingData>({
    // Prioritize: invite > sessionStorage > URL param > userProfile > null
    accountType: inviteToken
      ? (inviteType === 'parent-to-child' ? 'student' : 'parent')
      : (sessionStorage.getItem('onboarding_accountType') as 'student' | 'parent' | null)
      || accountTypeFromUrl
      || userProfile?.accountType
      || null,
    email: user?.email || null,
    displayName: userProfile?.displayName || null,
    gradeLevel: userProfile?.gradeLevel || null,
    parentEmail: null,
    children: [],
  });
  const [_isProcessing, setIsProcessing] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [showEmailConfirmation, setShowEmailConfirmation] = useState(false);
  const [confirmationEmail, setConfirmationEmail] = useState('');

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
      // Pass account type to email link for cross-device persistence
      await sendVerificationEmail(email, data.accountType || undefined);
      updateData({ email });

      // Show themed confirmation modal
      setConfirmationEmail(email);
      setShowEmailConfirmation(true);

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

      // Auto-complete profile for child invites (parent already provided name and grade)
      if (data.accountType === 'student' && inviteToken && inviteType === 'parent-to-child' && inviteInfo?.childInfo) {
        console.log('[OnboardingWizard] Auto-completing child profile from invite data:', inviteInfo.childInfo);

        // Async function to handle profile completion
        const autoCompleteProfile = async () => {
          try {
            await handleStudentProfileComplete(
              inviteInfo.childInfo.displayName,
              inviteInfo.childInfo.gradeLevel
            );
          } catch (error) {
            console.error('[OnboardingWizard] Failed to auto-complete profile, falling back to manual entry:', error);
            // Fallback to normal flow if auto-complete fails
            setStep('student-profile');
          }
        };

        autoCompleteProfile();
        return; // Skip normal flow
      }

      // Normal flow
      if (data.accountType === 'student') {
        setStep('student-profile');
      } else {
        setStep('parent-profile');
      }
    }
  }, [user, step, data.accountType, inviteToken, inviteType, inviteInfo]);

  // Handle invite token loading after component mount
  // If invite loads while still on account-type step, jump to auth
  useEffect(() => {
    if (inviteToken && step === 'account-type') {
      console.log('[OnboardingWizard] Invite detected, jumping to auth step');
      setStep('auth');
    }
  }, [inviteToken, step]);

  // Handle authenticated users returning from email verification
  // This catches cases where user lands on 'account-type' step but is already authenticated
  useEffect(() => {
    if (user && userProfile && !inviteToken) {
      // Update wizard data with profile information
      updateData({
        accountType: userProfile.accountType,
        email: user.email || '',
        displayName: userProfile.displayName,
        gradeLevel: userProfile.gradeLevel,
      });

      // If stuck on account-type step but profile has accountType, jump to profile step
      if (step === 'account-type' && userProfile.accountType) {
        console.log('[OnboardingWizard] Detected authenticated user with accountType, jumping to profile step');
        setStep(userProfile.accountType === 'student' ? 'student-profile' : 'parent-profile');
      }
    }
  }, [user, userProfile, inviteToken, step]);

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
          profileCompleted: true,
        });

        // If accepting a child invite (parent-to-child), link child to parent
        if (inviteToken && inviteType === 'parent-to-child') {
          console.log('[OnboardingWizard] Attempting to accept child invite with token:', inviteToken);
          try {
            await authService.acceptChildInvite(inviteToken, user.uid);
            console.log('✅ Child linked to parent via invite!');
          } catch (inviteError) {
            console.error('❌ Failed to accept child invite:', inviteError);
            // Still skip parent-invite step - parent already exists
          }
          // Go directly to complete, skip parent-invite step (even if invite acceptance failed)
          setStep('complete');
          return;
        }
      }
      // Normal flow: go to parent-invite step
      setStep('parent-invite');
    } catch (error) {
      console.error('Error saving student profile:', error);
      // Continue to next step anyway - don't block onboarding
      // For child invites, skip parent-invite step since parent already exists
      if (inviteToken && inviteType === 'parent-to-child') {
        setStep('complete');
      } else {
        setStep('parent-invite');
      }
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

    // Clean up URL parameters and sessionStorage now that onboarding is complete
    window.history.replaceState({}, document.title, window.location.pathname);
    sessionStorage.removeItem('onboarding_accountType');
    console.log('[OnboardingWizard] Cleaned up sessionStorage and URL parameters');

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
                style={{ color: theme.colors.textMuted, cursor: 'pointer' }}
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
                  cursor: 'pointer',
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

      {/* Email Confirmation Modal */}
      <ConfirmationModal
        isOpen={showEmailConfirmation}
        onClose={() => setShowEmailConfirmation(false)}
        title="Email Confirmation"
        message={`Verification email sent to ${confirmationEmail}. Please check your inbox and click the link to continue.`}
        confirmText="OK"
      />
    </div>
  );
};

export default OnboardingWizard;
