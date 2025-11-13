/**
 * ChildSelector Component
 *
 * Dropdown selector for parents with multiple children.
 * Allows switching between child profiles to view their analytics.
 */

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import type { ChildProfile, LinkedChild } from '../../../types/user';

interface ChildOption {
  uid: string;
  displayName: string;
  gradeLevel: string;
  type: 'child-profile' | 'linked-child';
}

interface ChildSelectorProps {
  childProfiles: ChildProfile[];
  linkedChildren: LinkedChild[];
  selectedChildUid: string | null;
  onSelect: (uid: string, type: 'child-profile' | 'linked-child') => void;
}

export const ChildSelector: React.FC<ChildSelectorProps> = ({
  childProfiles,
  linkedChildren,
  selectedChildUid,
  onSelect
}) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Combine all children into options
  const options: ChildOption[] = [
    ...childProfiles.map(child => ({
      uid: child.profileId,
      displayName: child.displayName,
      gradeLevel: child.gradeLevel,
      type: 'child-profile' as const
    })),
    ...linkedChildren.map(child => ({
      uid: child.uid,
      displayName: child.displayName,
      gradeLevel: child.grade,
      type: 'linked-child' as const
    }))
  ];

  // Find selected child
  const selectedChild = options.find(opt => opt.uid === selectedChildUid);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // If only one child, don't show selector
  if (options.length <= 1) {
    return null;
  }

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {/* Selected Child Display */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200"
        style={{
          background: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
          boxShadow: theme.shadows.sm,
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
            style={{ backgroundColor: theme.colors.interactive }}
          >
            {selectedChild?.type === 'linked-child' ? '👨‍🎓' : '👤'}
          </div>
          <div className="text-left">
            <p className="font-semibold text-sm" style={{ color: theme.colors.textPrimary }}>
              {selectedChild?.displayName || 'Select Child'}
            </p>
            <p className="text-xs" style={{ color: theme.colors.textMuted }}>
              {selectedChild?.gradeLevel || 'No child selected'}
            </p>
          </div>
        </div>
        <svg
          className="w-5 h-5 transition-transform duration-200"
          style={{
            color: theme.colors.textMuted,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
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
          className="absolute top-full left-0 mt-2 w-full min-w-[280px] rounded-xl overflow-hidden z-50"
          style={{
            background: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop,
            boxShadow: theme.shadows.lg,
          }}
        >
          <div className="py-2">
            {options.map((child) => (
              <button
                key={child.uid}
                onClick={() => {
                  onSelect(child.uid, child.type);
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 transition-all duration-150 hover:scale-[0.98]"
                style={{
                  backgroundColor: child.uid === selectedChildUid
                    ? `${theme.colors.brand}20`
                    : 'transparent',
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                  style={{ backgroundColor: theme.colors.interactive }}
                >
                  {child.type === 'linked-child' ? '👨‍🎓' : '👤'}
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-sm" style={{ color: theme.colors.textPrimary }}>
                    {child.displayName}
                  </p>
                  <p className="text-xs" style={{ color: theme.colors.textMuted }}>
                    {child.gradeLevel}
                  </p>
                </div>
                {child.uid === selectedChildUid && (
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: theme.colors.brand }}
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
            ))}
          </div>

          {/* View All Children Link */}
          <div
            className="border-t px-4 py-3"
            style={{ borderColor: theme.colors.border }}
          >
            <button
              onClick={() => {
                onSelect('', 'child-profile'); // Empty string means "all children view"
                setIsOpen(false);
              }}
              className="text-sm font-medium w-full text-left"
              style={{ color: theme.colors.brand }}
            >
              View All Children →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
