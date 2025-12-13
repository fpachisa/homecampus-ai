/**
 * Fraction Circle Visualizer
 *
 * Displays fractions as divided circles (pizza/cake style).
 * Used for teaching division as fractions and visualizing parts of a whole.
 * Designed for Primary 5 Fractions-Division topic.
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface FractionCircleVisualizerProps {
  numerator: number;           // Number of shaded parts
  denominator: number;         // Total number of equal parts
  highlightPart?: number;      // Which part to highlight with different color (1-indexed)
  caption?: string;            // Optional caption text
}

const FractionCircleVisualizer: React.FC<FractionCircleVisualizerProps> = ({
  numerator,
  denominator,
  highlightPart,
  caption
}) => {
  const { theme } = useTheme();

  // Validation
  if (!denominator || denominator <= 0) {
    return (
      <div className="my-4 p-4 rounded-lg border border-red-300 bg-red-50 dark:bg-red-900/20">
        <p className="text-red-700 dark:text-red-400">Invalid denominator: must be greater than 0</p>
      </div>
    );
  }

  if (numerator < 0) {
    return (
      <div className="my-4 p-4 rounded-lg border border-red-300 bg-red-50 dark:bg-red-900/20">
        <p className="text-red-700 dark:text-red-400">Invalid numerator: cannot be negative</p>
      </div>
    );
  }

  // SVG dimensions
  const svgWidth = 300;
  const svgHeight = 300;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  const radius = 100;

  // Colors
  const filledColor = '#3b82f6'; // blue-500
  const highlightColor = '#f59e0b'; // amber-500
  const emptyColor = theme.colors.surface || '#ffffff';
  const strokeColor = theme.colors.textPrimary || '#1f2937';

  // Convert angle in degrees to radians
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  // Create SVG path for a pie slice/sector
  const createSectorPath = (startAngle: number, endAngle: number): string => {
    // Start from 12 o'clock position (-90 degrees offset)
    const startRad = toRadians(startAngle - 90);
    const endRad = toRadians(endAngle - 90);

    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);

    // Large arc flag: 1 if angle > 180 degrees
    const largeArcFlag = (endAngle - startAngle) > 180 ? 1 : 0;

    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  // Calculate angle per slice
  const anglePerSlice = 360 / denominator;

  // Generate slices
  const slices = Array.from({ length: denominator }, (_, index) => {
    const startAngle = index * anglePerSlice;
    const endAngle = (index + 1) * anglePerSlice;
    const isFilled = index < numerator;
    const isHighlighted = highlightPart !== undefined && index === highlightPart - 1;

    let fillColor = emptyColor;
    if (isHighlighted) {
      fillColor = highlightColor;
    } else if (isFilled) {
      fillColor = filledColor;
    }

    return (
      <path
        key={index}
        d={createSectorPath(startAngle, endAngle)}
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="2"
        opacity={isFilled || isHighlighted ? 0.85 : 0.3}
      />
    );
  });

  return (
    <div
      className="my-4 p-4 rounded-lg border"
      style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.surface }}
    >
      {/* SVG Circle */}
      <div className="flex justify-center">
        <svg
          width={svgWidth}
          height={svgHeight}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          style={{ maxWidth: '100%', height: 'auto' }}
        >
          {/* Background circle (outline) */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
          />

          {/* Slices */}
          {slices}

          {/* Center dot */}
          <circle
            cx={centerX}
            cy={centerY}
            r="4"
            fill={strokeColor}
          />
        </svg>
      </div>

      {/* Caption */}
      {caption && (
        <div
          className="text-sm mt-4 pt-4 border-t text-center"
          style={{ borderColor: theme.colors.border, color: theme.colors.textMuted }}
        >
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default FractionCircleVisualizer;
