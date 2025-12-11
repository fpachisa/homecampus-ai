import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface StudentProfileFormProps {
  onComplete: (displayName: string, gradeLevel: string) => void;
  onBack: () => void;
}

export const StudentProfileForm: React.FC<StudentProfileFormProps> = ({ onComplete, onBack }) => {
  const { theme } = useTheme();
  const [displayName, setDisplayName] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

  const grades = [
    { id: 'pri-5', label: 'Primary 5', fullLabel: 'Primary 5' },
    { id: 'pri-6', label: 'Primary 6', fullLabel: 'Primary 6' },
    { id: 'sec-1', label: 'Secondary 1', fullLabel: 'Secondary 1' },
    { id: 'sec-2', label: 'Secondary 2', fullLabel: 'Secondary 2' },
    { id: 'sec-3', label: 'Secondary 3', fullLabel: 'Secondary 3' },
    { id: 'sec-4', label: 'Secondary 4', fullLabel: 'Secondary 4' },
  ];

  const canContinue = displayName.trim().length > 0 && selectedGrade !== null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canContinue) {
      const grade = grades.find(g => g.id === selectedGrade);
      onComplete(displayName.trim(), grade!.fullLabel);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-2" style={{ color: theme.colors.textPrimary }}>
        Tell us about yourself
      </h2>
      <p className="mb-6" style={{ color: theme.colors.textSecondary }}>
        We'll personalize your learning experience
      </p>

      {/* Name Input */}
      <div className="mb-6">
        <label
          htmlFor="displayName"
          className="block text-sm font-semibold mb-2"
          style={{ color: theme.colors.textPrimary }}
        >
          What's your name?
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

      {/* Grade Selection */}
      <div className="mb-8">
        <label className="block text-sm font-semibold mb-3" style={{ color: theme.colors.textPrimary }}>
          Which grade are you in?
        </label>
        <div className="grid grid-cols-2 gap-3">
          {grades.map((grade) => (
            <button
              key={grade.id}
              type="button"
              onClick={() => setSelectedGrade(grade.id)}
              className="p-4 rounded-lg transition-all font-medium"
              style={{
                backgroundColor: selectedGrade === grade.id ? theme.colors.brand : theme.colors.secondary,
                border: `2px solid ${selectedGrade === grade.id ? theme.colors.brand : theme.colors.border}`,
                color: selectedGrade === grade.id ? '#ffffff' : theme.colors.textPrimary,
              }}
              onMouseEnter={(e) => {
                if (selectedGrade !== grade.id) {
                  e.currentTarget.style.borderColor = theme.colors.brand;
                }
              }}
              onMouseLeave={(e) => {
                if (selectedGrade !== grade.id) {
                  e.currentTarget.style.borderColor = theme.colors.border;
                }
              }}
            >
              {grade.label}
            </button>
          ))}
        </div>
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
