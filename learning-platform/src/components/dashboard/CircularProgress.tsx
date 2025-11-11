/**
 * CircularProgress - Reusable circular progress ring
 *
 * A visual component that displays progress as a circular ring.
 * Used for topic progress, achievement progress, etc.
 *
 * Features:
 * - Smooth animations
 * - Customizable size and colors
 * - Displays percentage in center
 */

import { useTheme } from '../../hooks/useTheme';

interface CircularProgressProps {
  progress: number; // 0-100
  size?: number; // Diameter in pixels
  strokeWidth?: number; // Ring thickness
  color?: string; // Progress color (defaults to theme brand color)
  showPercentage?: boolean; // Show percentage text in center
  className?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  progress,
  size = 80,
  strokeWidth = 8,
  color,
  showPercentage = true,
  className = '',
}) => {
  const { theme } = useTheme();

  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(100, Math.max(0, progress));

  // Calculate circle dimensions
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (clampedProgress / 100) * circumference;

  // Use provided color or default to theme brand color
  const progressColor = color || theme.colors.brand;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={theme.colors.interactive}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.5s ease-in-out',
          }}
        />
      </svg>
      {/* Percentage text */}
      {showPercentage && (
        <div
          className="absolute inset-0 flex items-center justify-center font-bold"
          style={{
            color: theme.colors.textPrimary,
            fontSize: `${size / 4}px`,
          }}
        >
          {Math.round(clampedProgress)}%
        </div>
      )}
    </div>
  );
};
