/**
 * BackButton - Reusable back button component
 *
 * Consistent back button design used across all navigation.
 */

import React from 'react';
import { useTheme } from '../hooks/useTheme';

interface BackButtonProps {
  onClick: () => void;
  label?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick, label = 'Back' }) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105"
      style={{
        backgroundColor: theme.colors.interactive,
        color: theme.colors.textPrimary,
        cursor: 'pointer',
      }}
    >
      ← {label}
    </button>
  );
};
