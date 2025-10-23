import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ParentProfileFormProps {
  onSubmit: (data: {
    displayName: string;
    studentInfo?: { displayName: string; gradeLevel: string };
  }) => void;
  loading?: boolean;
}

const gradeLevels = [
  'Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', 'Primary 6',
  'Secondary 1', 'Secondary 2', 'Secondary 3', 'Secondary 4', 'Secondary 5',
];

export const ParentProfileForm: React.FC<ParentProfileFormProps> = ({
  onSubmit,
  loading = false,
}) => {
  const { theme } = useTheme();
  const [displayName, setDisplayName] = useState('');
  const [addStudent, setAddStudent] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentGrade, setStudentGrade] = useState('Secondary 3');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (displayName.trim()) {
      onSubmit({
        displayName: displayName.trim(),
        studentInfo: addStudent && studentName.trim()
          ? {
              displayName: studentName.trim(),
              gradeLevel: studentGrade,
            }
          : undefined,
      });
    }
  };

  const canSubmit = displayName.trim() && (!addStudent || studentName.trim()) && !loading;

  return (
    <div className="w-full max-w-md mx-auto px-6 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${theme.colors.brand} 0%, ${theme.colors.brandHover} 100%)`,
            }}
          >
            <span className="text-3xl">👨‍👩‍👧</span>
          </div>
        </div>
        <h1
          className="text-3xl font-bold mb-3"
          style={{ color: theme.colors.textPrimary }}
        >
          Tell us about yourself
        </h1>
        <p
          className="text-base"
          style={{ color: theme.colors.textSecondary }}
        >
          Set up your parent account
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Parent name */}
        <div>
          <label
            htmlFor="displayName"
            className="block text-sm font-semibold mb-2"
            style={{ color: theme.colors.textPrimary }}
          >
            Your Name
          </label>
          <input
            type="text"
            id="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="e.g., John Tan"
            className="w-full px-4 py-3 rounded-lg text-base transition-all focus:outline-none"
            style={{
              backgroundColor: theme.colors.interactive,
              border: `1.5px solid ${theme.colors.border}`,
              color: theme.colors.textPrimary,
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = theme.colors.brand;
              e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.colors.brand}20`;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = theme.colors.border;
              e.currentTarget.style.boxShadow = 'none';
            }}
            disabled={loading}
            autoFocus
            required
          />
        </div>

        {/* Add student toggle */}
        <div
          className="p-4 rounded-lg"
          style={{
            border: `1.5px solid ${theme.colors.border}`,
            backgroundColor: `${theme.colors.interactive}60`,
          }}
        >
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={addStudent}
              onChange={(e) => setAddStudent(e.target.checked)}
              className="w-5 h-5 rounded cursor-pointer"
              style={{
                accentColor: theme.colors.brand,
              }}
              disabled={loading}
            />
            <div className="flex-1">
              <span
                className="text-sm font-semibold block"
                style={{ color: theme.colors.textPrimary }}
              >
                Add your child now
              </span>
              <span
                className="text-xs block mt-0.5"
                style={{ color: theme.colors.textSecondary }}
              >
                You can add more students later from your dashboard
              </span>
            </div>
          </label>
        </div>

        {/* Student info (conditional) */}
        {addStudent && (
          <div
            className="space-y-4 p-4 rounded-lg animate-fade-in"
            style={{
              backgroundColor: `${theme.colors.brand}10`,
              border: `1.5px solid ${theme.colors.brand}30`,
            }}
          >
            <div>
              <label
                htmlFor="studentName"
                className="block text-sm font-semibold mb-2"
                style={{ color: theme.colors.textPrimary }}
              >
                Child's Name
              </label>
              <input
                type="text"
                id="studentName"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="e.g., Sarah Tan"
                className="w-full px-4 py-3 rounded-lg text-base transition-all focus:outline-none"
                style={{
                  backgroundColor: theme.colors.overlay,
                  border: `1.5px solid ${theme.colors.border}`,
                  color: theme.colors.textPrimary,
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.brand;
                  e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.colors.brand}20`;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border;
                  e.currentTarget.style.boxShadow = 'none';
                }}
                disabled={loading}
                required={addStudent}
              />
            </div>

            <div>
              <label
                htmlFor="studentGrade"
                className="block text-sm font-semibold mb-2"
                style={{ color: theme.colors.textPrimary }}
              >
                Child's Grade Level
              </label>
              <select
                id="studentGrade"
                value={studentGrade}
                onChange={(e) => setStudentGrade(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-base transition-all focus:outline-none cursor-pointer"
                style={{
                  backgroundColor: theme.colors.overlay,
                  border: `1.5px solid ${theme.colors.border}`,
                  color: theme.colors.textPrimary,
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.brand;
                  e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.colors.brand}20`;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border;
                  e.currentTarget.style.boxShadow = 'none';
                }}
                disabled={loading}
              >
                {gradeLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full py-3.5 text-white font-semibold rounded-lg text-base transition-all mt-8"
          style={{
            backgroundColor: canSubmit ? theme.colors.brand : theme.colors.interactive,
            opacity: canSubmit ? 1 : 0.5,
            cursor: canSubmit ? 'pointer' : 'not-allowed',
          }}
          onMouseEnter={(e) => {
            if (canSubmit) {
              e.currentTarget.style.backgroundColor = theme.colors.brandHover;
            }
          }}
          onMouseLeave={(e) => {
            if (canSubmit) {
              e.currentTarget.style.backgroundColor = theme.colors.brand;
            }
          }}
        >
          {loading ? 'Setting up...' : 'Get Started'}
        </button>
      </form>
    </div>
  );
};
