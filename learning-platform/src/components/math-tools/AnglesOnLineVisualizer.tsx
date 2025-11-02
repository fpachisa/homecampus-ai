import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface AnglesOnLineVisualizerProps {
  // Simple array of 2-4 angles on the line
  angles: (number | null)[];  // e.g., [110, 70] or [x, null]

  // Optional labels (defaults to a, b, c if not provided)
  labels?: string[];  // e.g., ['x', '180-x'] or ['110°', '70°']

  // Which angle to highlight (0-indexed)
  highlight?: number;

  // Show the sum equation
  showSum?: boolean;  // default: true, shows "a + b + c = 180°"

  // Optional caption
  caption?: string;
}

/**
 * Angles on a Straight Line Visualizer
 *
 * Visualizes 2-4 angles on a straight line by showing rays extending from a point.
 * Key property: Angles on a straight line sum to 180°
 */

const AnglesOnLineVisualizer: React.FC<AnglesOnLineVisualizerProps> = ({
  angles,
  labels,
  highlight,
  showSum = true,
  caption
}) => {
  const { isDark } = useTheme();

  // Validate input
  if (!angles || angles.length < 2 || angles.length > 4) {
    return (
      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded">
        <p className="text-red-800 dark:text-red-300">
          Error: anglesOnLine requires 2-4 angles. Received: {angles?.length || 0}
        </p>
      </div>
    );
  }

  // ============================================
  // CALCULATE ANGLES
  // ============================================
  const totalKnownAngle = angles.reduce((sum: number, angle) =>
    sum + (angle !== null ? angle : 0), 0
  );
  const nullCount = angles.filter(a => a === null).length;
  const remainingAngle = 180 - totalKnownAngle;
  const anglePerNull = nullCount > 0 ? remainingAngle / nullCount : 0;

  const calculatedAngles = angles.map(angle =>
    angle !== null ? angle : anglePerNull
  );

  // Default labels if not provided
  const angleLabels = labels || ['a', 'b', 'c', 'd'].slice(0, angles.length);

  // ============================================
  // SVG RENDERING
  // ============================================
  const width = 500;
  const height = 250;

  // Central point on the line where angles meet
  const pointX = width / 2;
  const pointY = height / 2;

  // Line extends left and right
  const lineLeftX = 50;
  const lineRightX = width - 50;

  // Ray length
  const rayLength = 100;

  // Colors
  const lineColor = isDark ? '#9CA3AF' : '#4B5563';  // gray-400 : gray-600
  const textColor = isDark ? '#F3F4F6' : '#1F2937';  // gray-100 : gray-800
  const highlightColor = isDark ? '#FBB6CE' : '#F472B6';  // pink-300 : pink-400
  const normalColors = [
    isDark ? '#60A5FA' : '#3B82F6',  // blue-400 : blue-500
    isDark ? '#34D399' : '#10B981',  // emerald-400 : emerald-500
    isDark ? '#FBBF24' : '#F59E0B',  // amber-400 : amber-500
    isDark ? '#A78BFA' : '#8B5CF6',  // violet-400 : violet-500
  ];

  // ============================================
  // DRAW ANGLES AS RAYS
  // ============================================

  // Start from the left horizontal ray (180° in standard position)
  // and work counter-clockwise, drawing each angle
  const rays: React.JSX.Element[] = [];
  const arcs: React.JSX.Element[] = [];
  const angleLabelsElements: React.JSX.Element[] = [];

  let currentAngle = 0; // Start pointing right (on the base line)

  // Always draw the base line (left and right) - no arrows
  rays.push(
    <line
      key="base-line"
      x1={lineLeftX}
      y1={pointY}
      x2={lineRightX}
      y2={pointY}
      stroke={lineColor}
      strokeWidth={2}
    />
  );

  // Draw each angle
  calculatedAngles.forEach((angle, index) => {
    const isHighlighted = highlight === index;
    const color = isHighlighted ? highlightColor : normalColors[index % normalColors.length];

    // Starting angle for this arc
    const startAngle = currentAngle;

    // Ending angle (going clockwise upward, so add)
    currentAngle = currentAngle + angle;
    const endAngle = currentAngle;

    // Draw the ray at the end of this angle (unless it's the last angle which ends on the base line)
    if (index < calculatedAngles.length - 1) {
      const rayEndX = pointX + rayLength * Math.cos((endAngle * Math.PI) / 180);
      const rayEndY = pointY - rayLength * Math.sin((endAngle * Math.PI) / 180);

      rays.push(
        <line
          key={`ray-${index}`}
          x1={pointX}
          y1={pointY}
          x2={rayEndX}
          y2={rayEndY}
          stroke={color}
          strokeWidth={2.5}
          opacity={isHighlighted ? 1 : 0.8}
        />
      );
    }

    // Draw arc for this angle (above the line)
    const arcRadius = 45;
    const startX = pointX + arcRadius * Math.cos((startAngle * Math.PI) / 180);
    const startY = pointY - arcRadius * Math.sin((startAngle * Math.PI) / 180);
    const endX = pointX + arcRadius * Math.cos((endAngle * Math.PI) / 180);
    const endY = pointY - arcRadius * Math.sin((endAngle * Math.PI) / 180);

    const largeArcFlag = angle > 180 ? 1 : 0;
    const sweepFlag = 0; // Counter-clockwise (outward curve)

    const arcPath = `M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}`;

    arcs.push(
      <path
        key={`arc-${index}`}
        d={arcPath}
        fill="none"
        stroke={color}
        strokeWidth={isHighlighted ? 3 : 2}
        opacity={isHighlighted ? 1 : 0.7}
      />
    );

    // Label position (middle of arc, above the line)
    const midAngle = (startAngle + endAngle) / 2;
    const labelRadius = arcRadius + 25;
    const labelX = pointX + labelRadius * Math.cos((midAngle * Math.PI) / 180);
    const labelY = pointY - labelRadius * Math.sin((midAngle * Math.PI) / 180);

    angleLabelsElements.push(
      <text
        key={`label-${index}`}
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
    );
  });

  // Build the sum equation
  const sumEquation = angleLabels.join(' + ') + ' = 180°';

  return (
    <div className="max-w-lg mx-auto flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg">
      <svg width={width} height={height} className="max-w-full h-auto">
        {/* Draw all rays first (base layer) */}
        {rays}

        {/* Draw arcs */}
        {arcs}

        {/* Draw angle labels */}
        {angleLabelsElements}

        {/* Central point marker */}
        <circle
          cx={pointX}
          cy={pointY}
          r={4}
          fill={textColor}
        />
      </svg>

      {/* Sum equation */}
      {showSum && (
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
          <p className="text-center text-gray-800 dark:text-gray-200 font-medium">
            {sumEquation}
          </p>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-1">
            Angles on a straight line sum to 180°
          </p>
        </div>
      )}

      {/* Caption */}
      {caption && (
        <p className="mt-3 text-center text-gray-700 dark:text-gray-300 text-sm max-w-lg">
          {caption}
        </p>
      )}
    </div>
  );
};

export default AnglesOnLineVisualizer;
