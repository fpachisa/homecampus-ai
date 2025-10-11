/**
 * PathNodeCard - Individual node rendering with status
 *
 * Displays a single node in the learning path with appropriate
 * visual styling based on status (locked, current, completed).
 */

import React from 'react';
import type { PathNode, NodeProgress, PathDifficulty } from '../../types/practice';

interface PathNodeCardProps {
  node: PathNode;
  nodeProgress: NodeProgress | undefined;
  status: 'locked' | 'current' | 'completed';
  difficulty: PathDifficulty;
  onClick: () => void;
}

export const PathNodeCard: React.FC<PathNodeCardProps> = ({
  node,
  nodeProgress,
  status,
  difficulty,
  onClick,
}) => {
  // Color schemes by difficulty
  const colorSchemes = {
    easy: {
      gradient: 'from-emerald-400 to-green-500',
      bg: 'bg-emerald-50',
      border: 'border-emerald-400',
      text: 'text-emerald-700',
      hover: 'hover:shadow-emerald-300',
    },
    medium: {
      gradient: 'from-amber-400 to-orange-500',
      bg: 'bg-amber-50',
      border: 'border-amber-400',
      text: 'text-amber-700',
      hover: 'hover:shadow-amber-300',
    },
    hard: {
      gradient: 'from-rose-400 to-purple-600',
      bg: 'bg-rose-50',
      border: 'border-rose-400',
      text: 'text-rose-700',
      hover: 'hover:shadow-rose-300',
    },
  };

  const colors = colorSchemes[difficulty];

  // Determine styling based on status
  const getNodeStyles = () => {
    if (status === 'locked') {
      return {
        container: 'opacity-40 cursor-not-allowed',
        circle: 'bg-gray-300 border-gray-400',
        icon: '🔒',
      };
    }

    if (status === 'completed') {
      return {
        container: `cursor-pointer transition-all hover:scale-110 ${colors.hover}`,
        circle: `bg-gradient-to-br ${colors.gradient} border-${difficulty === 'easy' ? 'emerald' : difficulty === 'medium' ? 'amber' : 'rose'}-500`,
        icon: '✓',
      };
    }

    // current
    return {
      container: `cursor-pointer transition-all hover:scale-110 ${colors.hover} animate-pulse`,
      circle: `bg-gradient-to-br ${colors.gradient} border-${difficulty === 'easy' ? 'emerald' : difficulty === 'medium' ? 'amber' : 'rose'}-600 ring-4 ring-offset-2 ring-${difficulty === 'easy' ? 'emerald' : difficulty === 'medium' ? 'amber' : 'rose'}-300`,
      icon: '⭐',
    };
  };

  const styles = getNodeStyles();

  // Calculate progress percentage
  const progressPercent = nodeProgress
    ? Math.round((nodeProgress.problemsAttempted / node.problemsRequired) * 100)
    : 0;

  const handleClick = () => {
    if (status !== 'locked') {
      onClick();
    }
  };

  return (
    <div className={`relative flex flex-col items-center ${styles.container}`}>
      {/* Node Circle */}
      <div
        onClick={handleClick}
        className={`
          w-16 h-16 rounded-full
          border-4
          flex items-center justify-center
          shadow-lg
          ${styles.circle}
        `}
      >
        <span className="text-2xl text-white font-bold">
          {styles.icon}
        </span>
      </div>

      {/* Node Number */}
      <div className={`mt-1 text-xs font-semibold ${status === 'locked' ? 'text-gray-400' : colors.text}`}>
        Node {node.nodeNumber}
      </div>

      {/* Progress Bar (only for in-progress nodes) */}
      {status === 'current' && nodeProgress && nodeProgress.problemsAttempted > 0 && (
        <div className="mt-2 w-20">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${colors.gradient} transition-all`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className={`text-xs text-center mt-1 ${colors.text}`}>
            {nodeProgress.problemsAttempted}/{node.problemsRequired}
          </div>
        </div>
      )}

      {/* Tooltip on hover (only for unlocked nodes) */}
      {status !== 'locked' && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
          {node.title}
        </div>
      )}
    </div>
  );
};
