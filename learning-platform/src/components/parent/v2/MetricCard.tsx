/**
 * MetricCard Component
 *
 * Reusable card for displaying key metrics with trend indicators.
 * Used in parent dashboard for time, topics, accuracy, and streak metrics.
 */

import React from 'react';
import { useTheme } from '../../../hooks/useTheme';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: string;
  trend?: {
    value: number;
    direction: 'up' | 'down' | 'neutral';
    label?: string;
  };
  color?: string;
  onClick?: () => void;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  trend,
  color,
  onClick
}) => {
  const { theme } = useTheme();

  const getTrendIcon = () => {
    if (!trend) return null;
    if (trend.direction === 'up') return '↑';
    if (trend.direction === 'down') return '↓';
    return '→';
  };

  const getTrendColor = () => {
    if (!trend) return theme.colors.textMuted;
    if (trend.direction === 'up') return theme.colors.success;
    if (trend.direction === 'down') return theme.colors.error;
    return theme.colors.textMuted;
  };

  return (
    <div
      className={`p-6 rounded-2xl transition-all duration-300 ${onClick ? 'cursor-pointer hover:scale-[1.02]' : ''}`}
      style={{
        background: theme.glass.background,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
        boxShadow: theme.shadows.md,
      }}
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium mb-1" style={{ color: theme.colors.textMuted }}>
            {title}
          </p>
        </div>
        {icon && (
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
            style={{
              backgroundColor: color ? `${color}20` : `${theme.colors.brand}20`,
            }}
          >
            {icon}
          </div>
        )}
      </div>

      {/* Value */}
      <div className="mb-2">
        <p className="text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
          {value}
        </p>
      </div>

      {/* Subtitle or Trend */}
      {(subtitle || trend) && (
        <div className="flex items-center gap-2">
          {trend && (
            <div
              className="flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium"
              style={{
                backgroundColor: `${getTrendColor()}20`,
                color: getTrendColor(),
              }}
            >
              <span>{getTrendIcon()}</span>
              <span>
                {trend.value > 0 ? '+' : ''}
                {trend.value}
                {trend.label || '%'}
              </span>
            </div>
          )}
          {subtitle && (
            <p className="text-sm" style={{ color: theme.colors.textMuted }}>
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
