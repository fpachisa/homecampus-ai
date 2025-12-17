/**
 * Pie Chart Visualizer
 *
 * Displays categorical data as sectors in a circular chart.
 * Shows proportions, calculates sector angles, and supports interactive learning.
 * Used for teaching: angle calculations (frequency/total × 360°), proportions, percentages.
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface PieChartVisualizerProps {
  categories: string[];              // Category labels (e.g., ['Red', 'Blue', 'Green'])
  frequencies: number[];             // Counts for each category
  title?: string;                    // Chart title
  showAngles?: boolean;              // Show sector angles (default: true)
  displayMode?: 'frequency' | 'percentage' | 'none';  // What to display on labels (default: 'frequency')
  highlightSector?: number;          // Index of sector to highlight (default: -1, none)
  showCalculations?: boolean;        // Show angle calculation steps (default: false)
  caption?: string;                  // Optional caption below chart
  hiddenSlices?: number[];           // Indices of slices to show "?" instead of value (for "find the missing %" problems)
  hiddenAngles?: number[];           // Indices of slices to show "?" instead of angle (for "find the angle" problems)
}

const PieChartVisualizer: React.FC<PieChartVisualizerProps> = ({
  categories,
  frequencies,
  title,
  showAngles = true,
  displayMode = 'frequency',
  highlightSector = -1,
  showCalculations = false,
  caption,
  hiddenSlices,
  hiddenAngles
}) => {
  const { theme } = useTheme();

  // Validation
  if (!categories || !frequencies || categories.length === 0 || frequencies.length === 0) {
    console.error('PieChartVisualizer: categories and frequencies are required');
    return (
      <div className="p-4 border rounded" style={{
        backgroundColor: theme.colors.error + '20',
        borderColor: theme.colors.error,
        color: theme.colors.textPrimary
      }}>
        Invalid pie chart: categories and frequencies are required
      </div>
    );
  }

  if (categories.length !== frequencies.length) {
    console.error('PieChartVisualizer: categories and frequencies must have same length');
    return (
      <div className="p-4 border rounded" style={{
        backgroundColor: theme.colors.error + '20',
        borderColor: theme.colors.error,
        color: theme.colors.textPrimary
      }}>
        Invalid pie chart: categories ({categories.length}) and frequencies ({frequencies.length}) must match
      </div>
    );
  }

  if (frequencies.some(f => f < 0)) {
    console.error('PieChartVisualizer: negative frequencies not allowed');
    return (
      <div className="p-4 border rounded" style={{
        backgroundColor: theme.colors.error + '20',
        borderColor: theme.colors.error,
        color: theme.colors.textPrimary
      }}>
        Invalid pie chart: frequencies cannot be negative
      </div>
    );
  }

  // SVG dimensions
  const width = 600;
  const height = 500;
  const centerX = 280;
  const centerY = 240;
  const radius = 140;
  const labelRadius = radius + 50;

  // Calculate total frequency
  const total = frequencies.reduce((sum, f) => sum + f, 0);

  if (total === 0) {
    return (
      <div className="p-4 border rounded" style={{
        backgroundColor: theme.colors.error + '20',
        borderColor: theme.colors.error,
        color: theme.colors.textPrimary
      }}>
        Invalid pie chart: total frequency cannot be zero
      </div>
    );
  }

  // Color palette (works in both light and dark themes)
  const colorPalette = [
    '#3b82f6', // blue-500
    '#10b981', // green-500
    '#f59e0b', // amber-500
    '#ef4444', // red-500
    '#8b5cf6', // violet-500
    '#ec4899', // pink-500
    '#06b6d4', // cyan-500
    '#f97316', // orange-500
  ];

  // Theme colors
  const textColor = theme.colors.textPrimary || '#1f2937';
  const mutedColor = theme.colors.textMuted || '#6b7280';
  const bgColor = theme.colors.panel || '#ffffff';

  // Calculate angles and percentages
  const dataWithAngles = categories.map((category, index) => {
    const frequency = frequencies[index];
    const percentage = (frequency / total) * 100;
    const angle = (frequency / total) * 360;
    return {
      category,
      frequency,
      percentage,
      angle,
      color: colorPalette[index % colorPalette.length],
      isHighlighted: index === highlightSector
    };
  });

  // Convert angle to radians
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  // Create SVG path for pie sector
  const createSectorPath = (
    startAngle: number,
    endAngle: number,
    radius: number,
    isHighlighted: boolean
  ): string => {
    // Offset for highlighted sector (push it out slightly)
    const offset = isHighlighted ? 10 : 0;
    const midAngle = (startAngle + endAngle) / 2;
    const offsetX = offset * Math.cos(toRadians(midAngle - 90));
    const offsetY = offset * Math.sin(toRadians(midAngle - 90));

    const adjustedCenterX = centerX + offsetX;
    const adjustedCenterY = centerY + offsetY;

    const startRadians = toRadians(startAngle - 90); // Start from top (12 o'clock)
    const endRadians = toRadians(endAngle - 90);

    const x1 = adjustedCenterX + radius * Math.cos(startRadians);
    const y1 = adjustedCenterY + radius * Math.sin(startRadians);
    const x2 = adjustedCenterX + radius * Math.cos(endRadians);
    const y2 = adjustedCenterY + radius * Math.sin(endRadians);

    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    return `M ${adjustedCenterX} ${adjustedCenterY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  // Calculate label position
  const calculateLabelPosition = (midAngle: number, radius: number) => {
    const radians = toRadians(midAngle - 90);
    return {
      x: centerX + radius * Math.cos(radians),
      y: centerY + radius * Math.sin(radians)
    };
  };

  // Render sectors
  let currentAngle = 0;
  const sectors = dataWithAngles.map((data, index) => {
    const startAngle = currentAngle;
    const endAngle = currentAngle + data.angle;
    const midAngle = (startAngle + endAngle) / 2;
    currentAngle = endAngle;

    const labelPos = calculateLabelPosition(midAngle, labelRadius);

    // Text anchor based on position
    const textAnchor = labelPos.x > centerX + 10 ? 'start' : labelPos.x < centerX - 10 ? 'end' : 'middle';

    return (
      <g key={index}>
        {/* Sector */}
        <path
          d={createSectorPath(startAngle, endAngle, radius, data.isHighlighted)}
          fill={data.color}
          opacity={data.isHighlighted ? 1 : 0.85}
          stroke={data.isHighlighted ? data.color : bgColor}
          strokeWidth={data.isHighlighted ? 3 : 2}
        />

        {/* Label */}
        <text
          x={labelPos.x}
          y={labelPos.y - 10}
          fontSize="13"
          fontWeight={data.isHighlighted ? 'bold' : 'normal'}
          textAnchor={textAnchor}
          fill={textColor}
        >
          {data.category}
        </text>

        {/* Value based on displayMode - hidden when 'none' */}
        {displayMode !== 'none' && (
          <text
            x={labelPos.x}
            y={labelPos.y + 5}
            fontSize="12"
            textAnchor={textAnchor}
            fill={mutedColor}
          >
            {hiddenSlices?.includes(index)
              ? '?'
              : displayMode === 'frequency'
                ? data.frequency
                : `${data.percentage.toFixed(0)}%`}
          </text>
        )}

        {/* Angle if enabled */}
        {showAngles && (
          <text
            x={labelPos.x}
            y={labelPos.y + 20}
            fontSize="11"
            fontStyle="italic"
            textAnchor={textAnchor}
            fill={mutedColor}
          >
            {hiddenAngles?.includes(index) ? '?' : `${data.angle.toFixed(1)}°`}
          </text>
        )}
      </g>
    );
  });

  return (
    <div className="flex flex-col items-center space-y-4">
      <svg
        width={width}
        height={height}
        style={{
          backgroundColor: bgColor,
          borderRadius: '8px',
        }}
      >
        {/* Title */}
        {title && (
          <text
            x={width / 2}
            y={30}
            fontSize="16"
            fontWeight="bold"
            textAnchor="middle"
            fill={textColor}
          >
            {title}
          </text>
        )}

        {/* Sectors and labels */}
        {sectors}
      </svg>

      {/* Calculation steps */}
      {showCalculations && (
        <div className="w-full max-w-xl p-4 rounded-lg border" style={{
          backgroundColor: bgColor,
          borderColor: theme.colors.border || '#e5e7eb',
          color: textColor
        }}>
          <h4 className="font-semibold mb-3" style={{ color: textColor }}>
            Angle Calculations:
          </h4>
          <div className="space-y-2 text-sm" style={{ color: mutedColor }}>
            <p className="font-medium" style={{ color: textColor }}>
              Formula: Angle = (Frequency ÷ Total) × 360°
            </p>
            <p>Total frequency = {total}</p>
            <div className="mt-3 space-y-2">
              {dataWithAngles.map((data, index) => {
                const freqHidden = hiddenSlices?.includes(index);
                const angleHidden = hiddenAngles?.includes(index);
                const freqDisplay = freqHidden ? '?' : data.frequency;
                const angleDisplay = angleHidden ? '?' : `${data.angle.toFixed(1)}°`;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded"
                      style={{ backgroundColor: data.color }}
                    />
                    <MathText>
                      {`${data.category}: (${freqDisplay} ÷ ${total}) × 360° = ${angleDisplay}`}
                    </MathText>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Caption */}
      {caption && (
        <div className="text-sm mt-2" style={{ color: mutedColor, maxWidth: '600px', textAlign: 'center' }}>
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default PieChartVisualizer;
