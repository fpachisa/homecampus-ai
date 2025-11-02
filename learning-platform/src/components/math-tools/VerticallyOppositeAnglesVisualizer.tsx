import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface VerticallyOppositeAnglesVisualizerProps {
  // Just provide the 4 angles going clockwise from top
  // Angles at positions 0 & 2 are opposite, 1 & 3 are opposite
  angles: [number | null, number | null, number | null, number | null];

  // Labels for the 4 angles (clockwise from top)
  labels?: [string, string, string, string];  // default: ['a', 'b', 'c', 'd']

  // Which angle to highlight (0-indexed)
  highlight?: number;

  // Optional caption
  caption?: string;
}

/**
 * Vertically Opposite Angles Visualizer
 *
 * Visualizes two intersecting lines forming 4 angles.
 * Shows that vertically opposite angles are equal.
 *
 * Position numbering (clockwise from top):
 *     0
 *   \ | /
 * 3--X--1
 *   / | \
 *     2
 *
 * Opposite pairs: 0↔2 (top↔bottom), 1↔3 (right↔left)
 */

const VerticallyOppositeAnglesVisualizer: React.FC<VerticallyOppositeAnglesVisualizerProps> = ({
  angles,
  labels,
  highlight,
  caption
}) => {
  const { isDark } = useTheme();

  // Validate input
  if (!angles || angles.length !== 4) {
    return (
      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded">
        <p className="text-red-800 dark:text-red-300">
          Error: verticallyOppositeAngles requires exactly 4 angles. Received: {angles?.length || 0}
        </p>
      </div>
    );
  }

  // ============================================
  // CALCULATE ANGLES
  // ============================================
  // Vertically opposite angles are equal
  // If angle 0 is known, angle 2 = angle 0
  // If angle 1 is known, angle 3 = angle 1
  // Also, adjacent angles sum to 180°

  let angle0 = angles[0];
  let angle1 = angles[1];
  let angle2 = angles[2];
  let angle3 = angles[3];

  // Determine which angles are known
  const knownAngles = angles.filter(a => a !== null);

  if (knownAngles.length === 0) {
    // Default to 90° all around
    angle0 = angle2 = 90;
    angle1 = angle3 = 90;
  } else {
    // Apply vertical angles property and adjacent angles sum
    if (angle0 !== null) {
      angle2 = angle0;  // Opposite
      if (angle1 === null) angle1 = 180 - angle0;  // Adjacent
      if (angle3 === null) angle3 = angle1;  // Opposite to angle1
    } else if (angle2 !== null) {
      angle0 = angle2;  // Opposite
      if (angle1 === null) angle1 = 180 - angle2;  // Adjacent
      if (angle3 === null) angle3 = angle1;  // Opposite to angle1
    } else if (angle1 !== null) {
      angle3 = angle1;  // Opposite
      if (angle0 === null) angle0 = 180 - angle1;  // Adjacent
      if (angle2 === null) angle2 = angle0;  // Opposite to angle0
    } else if (angle3 !== null) {
      angle1 = angle3;  // Opposite
      if (angle0 === null) angle0 = 180 - angle3;  // Adjacent
      if (angle2 === null) angle2 = angle0;  // Opposite to angle0
    }
  }

  const calculatedAngles = [angle0!, angle1!, angle2!, angle3!];

  // Default labels if not provided
  const angleLabels = labels || ['a', 'b', 'c', 'd'];

  // ============================================
  // SVG RENDERING
  // ============================================
  const width = 300;
  const height = 300;
  const centerX = width / 2;
  const centerY = height / 2;

  // Colors
  const lineColor = isDark ? '#9CA3AF' : '#4B5563';  // gray-400 : gray-600
  const textColor = isDark ? '#F3F4F6' : '#1F2937';  // gray-100 : gray-800
  const highlightColor = isDark ? '#FBB6CE' : '#F472B6';  // pink-300 : pink-400
  const normalColors = [
    isDark ? '#60A5FA' : '#3B82F6',  // blue-400 : blue-500
    isDark ? '#34D399' : '#10B981',  // emerald-400 : emerald-500
    isDark ? '#60A5FA' : '#3B82F6',  // blue-400 : blue-500 (same as 0)
    isDark ? '#34D399' : '#10B981',  // emerald-400 : emerald-500 (same as 1)
  ];

  // Line length
  const lineLength = 120;

  // Line 1 is horizontal (easier to visualize)
  // Line 2's angle is determined by angle0 (the angle between them at the top)
  const line1Angle = 0;   // Horizontal
  const line2Angle = calculatedAngles[0];  // Based on the actual angle

  // The arcs are positioned between the lines:
  // Position 0: from line1 (0°) going counter-clockwise to line2
  // Position 1: from line2 going counter-clockwise to line1+180 (180°)
  // Position 2: from line1+180 (180°) going counter-clockwise to line2+180
  // Position 3: from line2+180 going counter-clockwise back to line1 (or 360°)

  const positions = [
    { name: 'top-right', start: line1Angle, extent: calculatedAngles[0] },           // 0
    { name: 'bottom-right', start: line2Angle, extent: calculatedAngles[1] },        // 1
    { name: 'bottom-left', start: line1Angle + 180, extent: calculatedAngles[2] },   // 2
    { name: 'top-left', start: line2Angle + 180, extent: calculatedAngles[3] }       // 3
  ];

  const arcRadius = 40;

  const angleElements = positions.map((pos, index) => {
    const isHighlighted = highlight === index;
    const color = isHighlighted ? highlightColor : normalColors[index];

    // Calculate arc - from start angle, spanning extent degrees
    const startAngle = pos.start;
    const endAngle = startAngle + pos.extent;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + arcRadius * Math.cos(startRad);
    const y1 = centerY - arcRadius * Math.sin(startRad);
    const x2 = centerX + arcRadius * Math.cos(endRad);
    const y2 = centerY - arcRadius * Math.sin(endRad);

    const largeArcFlag = pos.extent > 180 ? 1 : 0;
    const sweepFlag = 0; // Counter-clockwise

    const arcPath = `M ${x1} ${y1} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} ${sweepFlag} ${x2} ${y2}`;

    // Label position - at the middle of the arc, closer to see them
    const labelAngle = startAngle + pos.extent / 2;
    const labelDist = arcRadius + 20; // Reduced from labelRadius (was 65)
    const labelX = centerX + labelDist * Math.cos((labelAngle * Math.PI) / 180);
    const labelY = centerY - labelDist * Math.sin((labelAngle * Math.PI) / 180);

    return (
      <g key={`angle-${index}`}>
        {/* Angle arc */}
        <path
          d={arcPath}
          fill="none"
          stroke={color}
          strokeWidth={isHighlighted ? 3 : 2}
          opacity={isHighlighted ? 1 : 0.7}
        />

        {/* Label */}
        <text
          x={labelX}
          y={labelY}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={isHighlighted ? highlightColor : textColor}
          fontSize={isHighlighted ? "18" : "16"}
          fontWeight={isHighlighted ? "bold" : "normal"}
        >
          {angleLabels[index]}
        </text>
      </g>
    );
  });

  // Calculate actual line endpoints based on the angles
  // In canvas coordinates, Y increases downward (opposite of math coordinates)
  // Point at angle θ: (centerX + r*cos(θ), centerY - r*sin(θ))
  // Point at angle θ+180°: (centerX - r*cos(θ), centerY + r*sin(θ))
  const line1X1 = centerX - lineLength * Math.cos((line1Angle * Math.PI) / 180);
  const line1Y1 = centerY + lineLength * Math.sin((line1Angle * Math.PI) / 180);
  const line1X2 = centerX + lineLength * Math.cos((line1Angle * Math.PI) / 180);
  const line1Y2 = centerY - lineLength * Math.sin((line1Angle * Math.PI) / 180);

  const line2X1 = centerX - lineLength * Math.cos((line2Angle * Math.PI) / 180);
  const line2Y1 = centerY + lineLength * Math.sin((line2Angle * Math.PI) / 180);
  const line2X2 = centerX + lineLength * Math.cos((line2Angle * Math.PI) / 180);
  const line2Y2 = centerY - lineLength * Math.sin((line2Angle * Math.PI) / 180);

  return (
    <div className="max-w-md mx-auto flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg">
      <svg width={width} height={height} className="max-w-full h-auto">
        {/* Line 1: Horizontal */}
        <line
          x1={line1X1}
          y1={line1Y1}
          x2={line1X2}
          y2={line1Y2}
          stroke={lineColor}
          strokeWidth={2}
        />

        {/* Line 2: At the calculated angle */}
        <line
          x1={line2X1}
          y1={line2Y1}
          x2={line2X2}
          y2={line2Y2}
          stroke={lineColor}
          strokeWidth={2}
        />

        {/* Central point marker */}
        <circle
          cx={centerX}
          cy={centerY}
          r={4}
          fill={textColor}
        />

        {/* Draw all angle arcs and labels */}
        {angleElements}
      </svg>

      {/* Info box showing opposite pairs */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 text-sm">
        <p className="text-center text-gray-800 dark:text-gray-200">
          {angleLabels[0]} = {angleLabels[2]}
        </p>
        <p className="text-center text-gray-800 dark:text-gray-200 mt-1">
          {angleLabels[1]} = {angleLabels[3]}
        </p>
        <p className="text-center text-xs text-gray-600 dark:text-gray-400 mt-2">
          Vertically opposite angles are equal
        </p>
      </div>

      {/* Caption */}
      {caption && (
        <p className="mt-3 text-center text-gray-700 dark:text-gray-300 text-sm max-w-lg">
          {caption}
        </p>
      )}
    </div>
  );
};

export default VerticallyOppositeAnglesVisualizer;
