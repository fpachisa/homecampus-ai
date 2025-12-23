/**
 * MilestoneMarker - Special markers for layer transitions and path completion
 *
 * Displays treasure chests, trophies, or other special markers at key points.
 */

import React from 'react';
import type { PathLayer } from '../../types/practice';
import { useTheme } from '../../hooks/useTheme';

interface MilestoneMarkerProps {
  type: 'layer-start' | 'layer-complete' | 'path-complete';
  layer?: PathLayer;
  position: { x: number; y: number };
  isUnlocked: boolean;
}

export const MilestoneMarker: React.FC<MilestoneMarkerProps> = ({
  type,
  layer,
  position,
  isUnlocked,
}) => {
  const { theme } = useTheme();

  // Get icon and colors based on type
  const getMarkerConfig = () => {
    if (type === 'path-complete') {
      return {
        icon: '🏆',
        title: 'Path Complete!',
        color: '#FFA500',
        size: '100px',
      };
    }

    if (type === 'layer-complete') {
      const layerConfig = {
        foundation: { icon: '⭐', color: '#FFA500' },
        integration: { icon: '💎', color: '#5865F2' },
        application: { icon: '🎯', color: '#10B981' },
        examPractice: { icon: '👑', color: '#EB459E' },
        'word-problems': { icon: '📝', color: '#8B5CF6' },
      };
      const config = layerConfig[layer!] || layerConfig.foundation;
      return {
        icon: config.icon,
        title: `${layer} Complete!`,
        color: config.color,
        size: '80px',
      };
    }

    // layer-start
    const layerColors = {
      foundation: '#FFA500',
      integration: '#5865F2',
      application: '#10B981',
      examPractice: '#EB459E',
      'word-problems': '#8B5CF6',
    };
    return {
      icon: '📦',
      title: `${layer} Layer`,
      color: layerColors[layer!] || layerColors.foundation,
      size: '60px',
    };
  };

  const config = getMarkerConfig();

  return (
    <div
      className="absolute flex flex-col items-center"
      style={{
        left: `${position.x}%`,
        top: `${position.y}px`,
        transform: 'translateX(-50%)',
      }}
    >
      {/* Marker Circle */}
      <div
        className="
          rounded-full
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110
        "
        style={{
          width: config.size,
          height: config.size,
          backgroundColor: isUnlocked ? `${config.color}20` : theme.colors.interactive,
          border: `4px solid ${isUnlocked ? config.color : theme.colors.border}`,
          boxShadow: isUnlocked ? `0 0 30px ${config.color}40` : 'none',
          opacity: isUnlocked ? 1 : 0.4,
        }}
      >
        <span
          className="text-4xl"
          style={{
            filter: isUnlocked ? 'none' : 'grayscale(100%)',
          }}
        >
          {config.icon}
        </span>
      </div>

      {/* Title */}
      <div
        className="mt-2 text-sm font-bold text-center capitalize"
        style={{
          color: isUnlocked ? config.color : theme.colors.textMuted,
        }}
      >
        {config.title}
      </div>
    </div>
  );
};
