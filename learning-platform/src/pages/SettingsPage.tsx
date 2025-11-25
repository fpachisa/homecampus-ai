/**
 * SettingsPage - User settings and preferences
 *
 * Layout (header, footer, background) is handled by AuthenticatedLayout
 */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../hooks/useTheme';

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, userProfile, updateProfile } = useAuth();
  const { theme, themeName, setTheme } = useTheme();

  // Form state
  const [displayName, setDisplayName] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>(themeName);

  // UI state
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Initialize form with user data
  useEffect(() => {
    if (userProfile) {
      setDisplayName(userProfile.displayName || '');
      setGradeLevel(userProfile.gradeLevel || '');
    }
  }, [userProfile]);

  // Validation
  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!displayName.trim()) {
      errors.displayName = 'Display name is required';
    } else if (displayName.trim().length < 2) {
      errors.displayName = 'Display name must be at least 2 characters';
    }

    if (!gradeLevel) {
      errors.gradeLevel = 'Please select a grade level';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle save
  const handleSave = async () => {
    if (!validate()) {
      return;
    }

    setIsSaving(true);
    setSaveMessage(null);

    try {
      // Update theme immediately in context and localStorage
      if (selectedTheme !== themeName) {
        setTheme(selectedTheme);
      }

      // Update user profile in Firestore
      await updateProfile({
        displayName: displayName.trim(),
        gradeLevel,
        settings: {
          ttsSpeaker: userProfile?.settings?.ttsSpeaker || 'callirrhoe',
          audioEnabled: userProfile?.settings?.audioEnabled ?? true,
          theme: selectedTheme,
        },
      });

      setSaveMessage({ type: 'success', text: 'Settings saved successfully!' });

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSaveMessage(null);
      }, 3000);
    } catch (error) {
      console.error('Failed to save settings:', error);
      setSaveMessage({
        type: 'error',
        text: 'Failed to save settings. Please try again.'
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    navigate(-1);
  };

  if (!user) {
    return null;
  }

  const gradeOptions = [
    'Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', 'Primary 6',
    'Secondary 1', 'Secondary 2', 'Secondary 3', 'Secondary 4',
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-6">
        {/* Success/Error Message */}
        {saveMessage && (
          <div
            className="p-4 rounded-lg"
            style={{
              backgroundColor: saveMessage.type === 'success'
                ? 'rgba(34, 197, 94, 0.1)'
                : 'rgba(239, 68, 68, 0.1)',
              border: `1px solid ${saveMessage.type === 'success' ? '#22c55e' : '#ef4444'}`,
              color: saveMessage.type === 'success' ? '#22c55e' : '#ef4444',
            }}
          >
            <div className="flex items-center space-x-2">
              {saveMessage.type === 'success' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              <span className="font-medium">{saveMessage.text}</span>
            </div>
          </div>
        )}

        {/* Account Settings Section */}
        <div
          className="p-6 rounded-2xl"
          style={{
            background: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop,
            boxShadow: theme.shadows.md,
          }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: theme.colors.brand }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold" style={{ color: theme.colors.textPrimary }}>
                Account Settings
              </h2>
              <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                Manage your account information
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Display Name */}
            <div>
              <label
                htmlFor="displayName"
                className="block text-sm font-medium mb-2"
                style={{ color: theme.colors.textPrimary }}
              >
                Display Name
              </label>
              <input
                id="displayName"
                type="text"
                value={displayName}
                onChange={(e) => {
                  setDisplayName(e.target.value);
                  if (validationErrors.displayName) {
                    setValidationErrors({ ...validationErrors, displayName: '' });
                  }
                }}
                className="w-full px-4 py-3 rounded-lg border-none outline-none transition-colors duration-200"
                style={{
                  backgroundColor: theme.colors.interactive,
                  color: theme.colors.textPrimary,
                }}
                placeholder="Enter your display name"
              />
              {validationErrors.displayName && (
                <p className="mt-1 text-sm text-red-500">{validationErrors.displayName}</p>
              )}
            </div>

            {/* Email (read-only) */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: theme.colors.textPrimary }}
              >
                Email
              </label>
              <div className="flex items-center space-x-2">
                <input
                  id="email"
                  type="email"
                  value={user.email || 'Not set'}
                  disabled
                  className="flex-1 px-4 py-3 rounded-lg border-none outline-none"
                  style={{
                    backgroundColor: theme.colors.interactive,
                    color: theme.colors.textMuted,
                    opacity: 0.7,
                    cursor: 'not-allowed',
                  }}
                />
                {!userProfile?.isGuest && user?.email && (
                  <div
                    className="px-3 py-2 rounded-lg text-xs font-medium"
                    style={{
                      backgroundColor: 'rgba(34, 197, 94, 0.1)',
                      color: '#22c55e',
                    }}
                  >
                    Verified
                  </div>
                )}
              </div>
            </div>

            {/* Grade Level */}
            <div>
              <label
                htmlFor="gradeLevel"
                className="block text-sm font-medium mb-2"
                style={{ color: theme.colors.textPrimary }}
              >
                Grade Level
              </label>
              <select
                id="gradeLevel"
                value={gradeLevel}
                onChange={(e) => {
                  setGradeLevel(e.target.value);
                  if (validationErrors.gradeLevel) {
                    setValidationErrors({ ...validationErrors, gradeLevel: '' });
                  }
                }}
                className="w-full px-4 py-3 rounded-lg border-none outline-none transition-colors duration-200"
                style={{
                  backgroundColor: theme.colors.interactive,
                  color: theme.colors.textPrimary,
                }}
              >
                <option value="">Select grade level</option>
                {gradeOptions.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
              {validationErrors.gradeLevel && (
                <p className="mt-1 text-sm text-red-500">{validationErrors.gradeLevel}</p>
              )}
            </div>

            {/* Account Type (read-only badge) */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: theme.colors.textPrimary }}
              >
                Account Type
              </label>
              <div
                className="inline-flex px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  backgroundColor: theme.colors.interactive,
                  color: theme.colors.brand,
                }}
              >
                {userProfile?.accountType === 'parent' ? '👨‍👩‍👧 Parent' : '🎓 Student'}
              </div>
            </div>
          </div>
        </div>

        {/* Appearance Section */}
        <div
          className="p-6 rounded-2xl"
          style={{
            background: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop,
            boxShadow: theme.shadows.md,
          }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: theme.colors.brand }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold" style={{ color: theme.colors.textPrimary }}>
                Appearance
              </h2>
              <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                Customize how the app looks
              </p>
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-3"
              style={{ color: theme.colors.textPrimary }}
            >
              Theme
            </label>
            <div className="flex space-x-4">
              {/* Light Theme */}
              <button
                type="button"
                onClick={() => setSelectedTheme('light')}
                className="flex-1 p-4 rounded-lg border-2 transition-all duration-200"
                style={{
                  backgroundColor: selectedTheme === 'light' ? theme.colors.interactive : 'transparent',
                  borderColor: selectedTheme === 'light' ? theme.colors.brand : theme.colors.border,
                }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: theme.colors.textPrimary }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className="font-medium" style={{ color: theme.colors.textPrimary }}>
                    Light
                  </span>
                </div>
              </button>

              {/* Dark Theme */}
              <button
                type="button"
                onClick={() => setSelectedTheme('dark')}
                className="flex-1 p-4 rounded-lg border-2 transition-all duration-200"
                style={{
                  backgroundColor: selectedTheme === 'dark' ? theme.colors.interactive : 'transparent',
                  borderColor: selectedTheme === 'dark' ? theme.colors.brand : theme.colors.border,
                }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: theme.colors.textPrimary }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span className="font-medium" style={{ color: theme.colors.textPrimary }}>
                    Dark
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
          <button
            type="submit"
            disabled={isSaving}
            className="flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
            style={{
              background: isSaving ? theme.colors.interactive : theme.gradients.brand,
              color: '#ffffff',
              opacity: isSaving ? 0.6 : 1,
              cursor: isSaving ? 'not-allowed' : 'pointer',
            }}
          >
            {isSaving ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Saving...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Save Changes</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleCancel}
            disabled={isSaving}
            className="flex-1 sm:flex-initial px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            style={{
              backgroundColor: theme.colors.interactive,
              color: theme.colors.textPrimary,
              opacity: isSaving ? 0.6 : 1,
              cursor: isSaving ? 'not-allowed' : 'pointer',
            }}
            onMouseEnter={(e) => {
              if (!isSaving) {
                e.currentTarget.style.backgroundColor = theme.colors.border;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.interactive;
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
