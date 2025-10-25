import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface Child {
  displayName: string;
  gradeLevel: string;
  email?: string;
}

interface AddChildrenFormProps {
  onComplete: (children: Child[]) => void;
  onBack: () => void;
}

export const AddChildrenForm: React.FC<AddChildrenFormProps> = ({ onComplete, onBack }) => {
  const { theme } = useTheme();
  const [children, setChildren] = useState<Child[]>([
    { displayName: '', gradeLevel: 'sec-1', email: '' }
  ]);

  const grades = [
    { id: 'sec-1', label: 'Secondary 1', displayLabel: 'Sec 1' },
    { id: 'sec-2', label: 'Secondary 2', displayLabel: 'Sec 2' },
    { id: 'sec-3', label: 'Secondary 3', displayLabel: 'Sec 3' },
    { id: 'sec-4', label: 'Secondary 4', displayLabel: 'Sec 4' },
  ];

  const validateEmail = (email: string): boolean => {
    if (!email) return true; // Email is optional
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const updateChild = (index: number, field: keyof Child, value: string) => {
    setChildren(prev => prev.map((child, i) =>
      i === index ? { ...child, [field]: value } : child
    ));
  };

  const addChild = () => {
    setChildren(prev => [...prev, { displayName: '', gradeLevel: 'sec-1', email: '' }]);
  };

  const removeChild = (index: number) => {
    if (children.length > 1) {
      setChildren(prev => prev.filter((_, i) => i !== index));
    }
  };

  const canContinue = children.every(child =>
    child.displayName.trim().length > 0 && validateEmail(child.email || '')
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canContinue) {
      const processedChildren = children.map(child => ({
        displayName: child.displayName.trim(),
        gradeLevel: grades.find(g => g.id === child.gradeLevel)?.label || 'Secondary 1',
        ...(child.email?.trim() && { email: child.email.trim() })
      }));
      onComplete(processedChildren);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-h-[70vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-2" style={{ color: theme.colors.textPrimary }}>
        Add Your Children
      </h2>
      <p className="mb-6" style={{ color: theme.colors.textSecondary }}>
        Add each child you'd like to monitor. You can add more children later.
      </p>

      {/* Children List */}
      <div className="space-y-6 mb-6">
        {children.map((child, index) => (
          <div
            key={index}
            className="p-4 rounded-lg"
            style={{
              backgroundColor: theme.colors.secondary,
              border: `1px solid ${theme.colors.border}`,
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold" style={{ color: theme.colors.textPrimary }}>
                Child {index + 1}
              </h4>
              {children.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeChild(index)}
                  className="text-sm px-3 py-1 rounded"
                  style={{ color: theme.colors.error }}
                >
                  Remove
                </button>
              )}
            </div>

            {/* Child Name */}
            <div className="mb-3">
              <label
                htmlFor={`child-${index}-name`}
                className="block text-sm font-medium mb-1"
                style={{ color: theme.colors.textPrimary }}
              >
                Name
              </label>
              <input
                id={`child-${index}-name`}
                type="text"
                value={child.displayName}
                onChange={(e) => updateChild(index, 'displayName', e.target.value)}
                placeholder="Enter child's name"
                className="w-full px-3 py-2 rounded-lg"
                style={{
                  backgroundColor: theme.colors.primary,
                  border: `1px solid ${theme.colors.border}`,
                  color: theme.colors.textPrimary,
                }}
              />
            </div>

            {/* Grade Level */}
            <div className="mb-3">
              <label
                htmlFor={`child-${index}-grade`}
                className="block text-sm font-medium mb-1"
                style={{ color: theme.colors.textPrimary }}
              >
                Grade
              </label>
              <select
                id={`child-${index}-grade`}
                value={child.gradeLevel}
                onChange={(e) => updateChild(index, 'gradeLevel', e.target.value)}
                className="w-full px-3 py-2 rounded-lg"
                style={{
                  backgroundColor: theme.colors.primary,
                  border: `1px solid ${theme.colors.border}`,
                  color: theme.colors.textPrimary,
                }}
              >
                {grades.map(grade => (
                  <option key={grade.id} value={grade.id}>
                    {grade.displayLabel}
                  </option>
                ))}
              </select>
            </div>

            {/* Email (Optional) */}
            <div>
              <label
                htmlFor={`child-${index}-email`}
                className="block text-sm font-medium mb-1"
                style={{ color: theme.colors.textPrimary }}
              >
                Email <span style={{ color: theme.colors.textMuted }}>(optional)</span>
              </label>
              <input
                id={`child-${index}-email`}
                type="email"
                value={child.email}
                onChange={(e) => updateChild(index, 'email', e.target.value)}
                placeholder="child@example.com"
                className="w-full px-3 py-2 rounded-lg"
                style={{
                  backgroundColor: theme.colors.primary,
                  border: `1px solid ${!validateEmail(child.email || '') ? theme.colors.error : theme.colors.border}`,
                  color: theme.colors.textPrimary,
                }}
              />
              <p className="mt-1 text-xs" style={{ color: theme.colors.textMuted }}>
                {child.email?.trim()
                  ? 'Child will receive their own login'
                  : 'You\'ll use your account to access their profile'}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Another Child */}
      <button
        type="button"
        onClick={addChild}
        className="w-full mb-6 px-4 py-3 rounded-lg font-medium transition-all"
        style={{
          backgroundColor: theme.colors.interactive,
          border: `2px dashed ${theme.colors.border}`,
          color: theme.colors.textPrimary,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = theme.colors.brand;
          e.currentTarget.style.color = theme.colors.brand;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = theme.colors.border;
          e.currentTarget.style.color = theme.colors.textPrimary;
        }}
      >
        + Add Another Child
      </button>

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
          Complete Setup
        </button>
      </div>
    </form>
  );
};
