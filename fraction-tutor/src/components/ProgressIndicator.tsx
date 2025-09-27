import React from 'react';
import { useTheme } from '../hooks/useTheme';

interface Props {
  stats: {
    problemsAttempted: number;
    correctAnswers: number;
    hintsProvided: number;
    startTime: Date;
  };
  currentScore?: number;
}

const ProgressIndicator: React.FC<Props> = ({ stats, currentScore = 0 }) => {
  const { theme } = useTheme();
  const sessionDuration = Math.round(
    (new Date().getTime() - stats.startTime.getTime()) / 60000
  );


  return (
    <div className="flex items-center space-x-2">
      <div
        className="flex items-center space-x-2 px-3 py-1.5 rounded-full border"
        style={{
          backgroundColor: theme.colors.interactive,
          borderColor: theme.colors.border,
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: theme.colors.brand }}
        />
        <span className="text-xs font-medium" style={{ color: theme.colors.textSecondary }}>
          Score: {currentScore.toFixed(2)}/1.00
        </span>
      </div>

      <div
        className="flex items-center space-x-2 px-3 py-1.5 rounded-full border"
        style={{
          backgroundColor: theme.colors.interactive,
          borderColor: theme.colors.border,
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: theme.colors.brand }}
        />
        <span className="text-xs font-medium" style={{ color: theme.colors.textSecondary }}>
          {stats.correctAnswers} {stats.correctAnswers === 1 ? 'Problem' : 'Problems'}
        </span>
      </div>

      <div
        className="flex items-center space-x-2 px-3 py-1.5 rounded-full border"
        style={{
          backgroundColor: theme.colors.interactive,
          borderColor: theme.colors.border,
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: theme.colors.brand }}
        />
        <span className="text-xs font-medium" style={{ color: theme.colors.textSecondary }}>
          {sessionDuration}m
        </span>
      </div>
    </div>
  );
};

export default ProgressIndicator;