import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import type { GradeLevel } from '../config/topicsByGrade';
import { GRADE_LEVELS } from '../config/topicsByGrade';

interface GradeSelectorProps {
  currentGrade: GradeLevel;
  onGradeChange: (grade: GradeLevel) => void;
  disabled?: boolean;
}

export const GradeSelector: React.FC<GradeSelectorProps> = ({
  currentGrade,
  onGradeChange,
  disabled = false,
}) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleGradeSelect = (grade: GradeLevel) => {
    onGradeChange(grade);
    setIsOpen(false);
  };

  // Short labels for grades
  const getShortLabel = (grade: GradeLevel): string => {
    return grade.replace('Secondary ', 'Sec ');
  };

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {/* Trigger Button */}
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all"
        style={{
          backgroundColor: theme.colors.interactive,
          color: theme.colors.textPrimary,
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
        onMouseEnter={(e) => {
          if (!disabled) {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.boxShadow = theme.shadows.sm;
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <span className="text-sm">Grade:</span>
        <span className="font-semibold">{getShortLabel(currentGrade)}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 w-48 rounded-xl overflow-hidden shadow-lg"
          style={{
            background: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop,
            zIndex: 9998,
          }}
        >
          <div className="py-2">
            {GRADE_LEVELS.map((grade) => {
              const isSelected = grade === currentGrade;

              return (
                <button
                  key={grade}
                  onClick={() => handleGradeSelect(grade)}
                  className="w-full px-4 py-3 text-left flex items-center justify-between transition-all"
                  style={{
                    backgroundColor: isSelected ? theme.colors.brand + '20' : 'transparent',
                    color: isSelected ? theme.colors.brand : theme.colors.textPrimary,
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = theme.colors.interactive;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <span className="font-medium">{grade}</span>
                  {isSelected && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
