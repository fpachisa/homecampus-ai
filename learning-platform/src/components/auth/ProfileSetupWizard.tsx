import { useState } from 'react';
import { AccountTypeSelector } from './AccountTypeSelector';
import { StudentProfileForm } from './StudentProfileForm';
import { ParentProfileForm } from './ParentProfileForm';
import { useTheme } from '../../hooks/useTheme';
import type { UserProfile } from '../../types/user';

interface ProfileSetupWizardProps {
  onComplete: (profileData: Partial<UserProfile>) => Promise<void>;
}

type WizardStep = 'account-type' | 'profile-details';

export const ProfileSetupWizard: React.FC<ProfileSetupWizardProps> = ({
  onComplete,
}) => {
  const { theme } = useTheme();
  const [currentStep, setCurrentStep] = useState<WizardStep>('account-type');
  const [accountType, setAccountType] = useState<'student' | 'parent' | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAccountTypeSelect = (type: 'student' | 'parent') => {
    setAccountType(type);
    setCurrentStep('profile-details');
  };

  const handleStudentSubmit = async (data: { displayName: string; gradeLevel: string }) => {
    setLoading(true);
    try {
      await onComplete({
        displayName: data.displayName,
        gradeLevel: data.gradeLevel,
        accountType: 'student',
        isParent: false,
        profileCompleted: true,
      });
    } catch (error) {
      console.error('Error completing profile:', error);
      setLoading(false);
    }
  };

  const handleParentSubmit = async (data: {
    displayName: string;
    studentInfo?: { displayName: string; gradeLevel: string };
  }) => {
    setLoading(true);
    try {
      await onComplete({
        displayName: data.displayName,
        accountType: 'parent',
        isParent: true,
        profileCompleted: true,
        ...(data.studentInfo && { studentInfo: data.studentInfo }),
      });
    } catch (error) {
      console.error('Error completing profile:', error);
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Progress indicator */}
      {currentStep === 'profile-details' && (
        <div className="w-full max-w-md mx-auto px-6 pt-6 pb-4">
          <div className="flex items-center justify-between mb-2">
            <span
              className="text-xs font-semibold"
              style={{ color: theme.colors.textSecondary }}
            >
              Step {(currentStep as WizardStep) === 'account-type' ? 1 : 2} of 2
            </span>
            <button
              onClick={() => setCurrentStep('account-type')}
              className="text-xs font-medium hover:underline"
              style={{ color: theme.colors.brand }}
              disabled={loading}
            >
              ← Back
            </button>
          </div>
          <div
            className="w-full h-1.5 rounded-full overflow-hidden"
            style={{ backgroundColor: `${theme.colors.brand}20` }}
          >
            <div
              className="h-full transition-all duration-500 ease-out rounded-full"
              style={{
                backgroundColor: theme.colors.brand,
                width: (currentStep as WizardStep) === 'account-type' ? '50%' : '100%',
              }}
            />
          </div>
        </div>
      )}

      {/* Step content */}
      <div>
        {currentStep === 'account-type' && (
          <AccountTypeSelector onSelect={handleAccountTypeSelect} />
        )}

        {currentStep === 'profile-details' && accountType === 'student' && (
          <StudentProfileForm onSubmit={handleStudentSubmit} loading={loading} />
        )}

        {currentStep === 'profile-details' && accountType === 'parent' && (
          <ParentProfileForm onSubmit={handleParentSubmit} loading={loading} />
        )}
      </div>
    </div>
  );
};
