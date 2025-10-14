/**
 * CircularPathNode - Interactive circular node
 *
 * Replaces the boxy card design with a large, playful circular node.
 * Features progress rings, icons, and animations.
 */

/**
 * CircularPathNode - Interactive circular node
 *
 * Replaces the boxy card design with a large, playful circular node.
 * Features progress rings, icons, and animations.
 */

import React from 'react';
import type { PathNode, NodeProgress, PathLayer } from '../../types/practice';
import { useTheme } from '../../hooks/useTheme';

interface CircularPathNodeProps {
  node: PathNode;
  nodeProgress: NodeProgress | undefined;
  status: 'locked' | 'current' | 'completed';
  layer: PathLayer;
  position: { x: number; y: number; rotation: number };
  onClick: () => void;
}

export const CircularPathNode: React.FC<CircularPathNodeProps> = ({
  node,
  nodeProgress,
  status,
  layer,
  position,
  onClick,
}) => {
  const { theme } = useTheme();

  // Layer color schemes
  const layerColors = {
    foundation: {
      main: '#FFA500',      // Orange - matches Daily Goal
      light: '#FFA50040',
      dark: '#CC8400',
      glow: '#FFA50080',
    },
    integration: {
      main: '#5865F2',      // Blue
      light: '#5865F240',
      dark: '#4752C4',
      glow: '#5865F280',
    },
    examPractice: {
      main: '#EB459E',      // Pink
      light: '#EB459E40',
      dark: '#C73680',
      glow: '#EB459E80',
    },
  };

  const colors = layerColors[layer];

  // Calculate progress percentage
  const progressPercent = nodeProgress
    ? Math.round((nodeProgress.problemsAttempted / node.problemsRequired) * 100)
    : 0;

  // Debug logging
  React.useEffect(() => {
    if (nodeProgress && nodeProgress.problemsAttempted > 0) {
      console.log(`Node ${node.nodeNumber} (${node.title}):`, {
        attempted: nodeProgress.problemsAttempted,
        required: node.problemsRequired,
        percent: progressPercent,
      });
    }
  }, [nodeProgress, node, progressPercent]);

  // Icon selection based on status
  const getIcon = (): string => {
    if (status === 'completed') return '✓';
    return String(node.nodeNumber);
  };

  // Determine if clickable
  const isClickable = status !== 'locked';

  // SVG circle progress ring - outer ring for Duolingo style
  const outerRadius = 38;  // Smaller outer ring
  const circumference = 2 * Math.PI * outerRadius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div
      className="absolute flex items-center"
      style={{
        left: `${position.x}%`,
        top: `${position.y}px`,
        transform: `translateX(-50%)`,
        transition: 'all 0.3s ease',
      }}
    >
      {/* Main Node Container with proper sizing */}
      <div
        onClick={isClickable ? onClick : undefined}
        className={`
          relative
          w-[84px] h-[84px]
          flex items-center justify-center
          ${isClickable ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}
          transition-all duration-300
          ${isClickable ? 'hover:scale-105' : ''}
        `}
      >
        {/* SVG Progress Ring - Only show when there's progress but not completed */}
        {progressPercent > 0 && status !== 'completed' && (
          <svg
            width="84"
            height="84"
            className="absolute inset-0 pointer-events-none"
            style={{
              transform: 'rotate(-90deg)',
            }}
          >
            {/* Background circle - very light gray */}
            <circle
              cx="42"
              cy="42"
              r={outerRadius}
              fill="none"
              stroke="#F3F4F6"
              strokeWidth="4"
            />

            {/* Progress circle - Always green regardless of layer */}
            <circle
              cx="42"
              cy="42"
              r={outerRadius}
              fill="none"
              stroke="#57F287"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                transition: 'stroke-dashoffset 0.5s ease',
              }}
            />
          </svg>
        )}

        {/* Inner Circle with Icon - Centered within the container */}
        <div
          className="
            w-[56px] h-[56px]
            rounded-full
            flex items-center justify-center
            absolute
            inset-0
            m-auto
          "
          style={{
            backgroundColor: status === 'completed' ? colors.main : '#FFFFFF',
            border: `3px solid ${colors.main}`,
            boxShadow: status === 'completed'
              ? `0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 -2px 4px rgba(0, 0, 0, 0.1)`
              : status === 'current'
              ? `0 4px 16px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06)`
              : `0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)`,
          }}
        >
          {/* Icon */}
          <span
            className="text-xl font-bold select-none"
            style={{
              color: status === 'completed' ? '#ffffff' : colors.dark,
            }}
          >
            {getIcon()}
          </span>
        </div>
      </div>

      {/* Node Label - Next to button with adjusted margin */}
      <div className="ml-4 max-w-[180px]">
        <div
          className="text-sm font-bold"
          style={{
            color: theme.colors.textPrimary,
          }}
        >
          {node.title}
        </div>

        {/* Progress text for current node */}
        {status === 'current' && nodeProgress && nodeProgress.problemsAttempted > 0 && (
          <div
            className="text-xs mt-0.5 font-semibold"
            style={{
              color: colors.main,
            }}
          >
            {nodeProgress.problemsAttempted}/{node.problemsRequired} problems
          </div>
        )}

        {/* Completed badge */}
        {status === 'completed' && (
          <div
            className="text-xs mt-0.5 font-semibold"
            style={{
              color: colors.main,
            }}
          >
            ✓ Complete
          </div>
        )}
      </div>
    </div>
  );
};
