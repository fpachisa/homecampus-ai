import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface AnglesAtPointVisualizerProps {
  // Simple array of angle values (2-6 angles)
  angles: (number | null)[];  // e.g., [90, 120, 150] or [90, null, 150]

  // Optional labels (defaults to lowercase letters a, b, c, d if not provided)
  labels?: string[];  // e.g., ['x', '2x', '3x'] or ['75°', 'a', 'b']

  // Which angle to highlight (0-indexed, optional)
  highlight?: number;  // e.g., 1 means highlight the second angle

  // Show the sum equation at bottom
  showSum?: boolean;  // default: true, shows "a + b + c + ... = 360°"

  // Optional caption
  caption?: string;
}

/**
 * Angles at a Point Visualizer
 *
 * Visualizes 2-6 angles meeting at a central point.
 * Angles are arranged in a pie-chart style, starting from the right (0°) and going counter-clockwise.
 *
 * Key property: Angles at a point sum to 360°
 */

const AnglesAtPointVisualizer: React.FC<AnglesAtPointVisualizerProps> = ({
  angles,
  labels,
  highlight,
  showSum = true,
  caption
}) => {
  const { isDark } = useTheme();

  // Validate input
  if (!angles || angles.length < 2 || angles.length > 6) {
    return (
      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded">
        <p className="text-red-800 dark:text-red-300">
          Error: anglesAtPoint requires 2-6 angles. Received: {angles?.length || 0}
        </p>
      </div>
    );
  }

  // ============================================
  // CALCULATE ANGLES
  // ============================================
  // If some angles are null, we need to calculate them
  // For now, we'll distribute the remaining evenly
  const totalKnownAngle = angles.reduce((sum: number, angle) =>
    sum + (angle !== null ? angle : 0), 0
  );
  const nullCount = angles.filter(a => a === null).length;
  const remainingAngle = 360 - totalKnownAngle;
  const anglePerNull = nullCount > 0 ? remainingAngle / nullCount : 0;

  const calculatedAngles = angles.map(angle =>
    angle !== null ? angle : anglePerNull
  );

  // Default labels if not provided
  const angleLabels = labels || ['a', 'b', 'c', 'd', 'e', 'f'].slice(0, angles.length);

  // ============================================
  // SVG RENDERING
  // ============================================
  const width = 300;
  const height = 300;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = 100;

  // Colors
  const textColor = isDark ? '#F3F4F6' : '#1F2937';  // gray-100 : gray-800
  const highlightColor = isDark ? '#FBB6CE' : '#F472B6';  // pink-300 : pink-400
  const normalColors = [
    isDark ? '#60A5FA' : '#3B82F6',  // blue-400 : blue-500
    isDark ? '#34D399' : '#10B981',  // emerald-400 : emerald-500
    isDark ? '#FBBF24' : '#F59E0B',  // amber-400 : amber-500
    isDark ? '#A78BFA' : '#8B5CF6',  // violet-400 : violet-500
    isDark ? '#F87171' : '#EF4444',  // red-400 : red-500
    isDark ? '#2DD4BF' : '#14B8A6',  // teal-400 : teal-500
  ];
  const lineColor = isDark ? '#9CA3AF' : '#6B7280';  // gray-400 : gray-500

  /**
   * Draw an angle sector (pie slice)
   */
  const drawAngleSector = (
    startAngle: number,
    angleSize: number,
    index: number
  ) => {
    const endAngle = startAngle + angleSize;

    // Convert to radians (SVG 0° is right, positive is clockwise)
    // We want to start from right (0°) and go counter-clockwise
    const startRad = (-startAngle * Math.PI) / 180;
    const endRad = (-endAngle * Math.PI) / 180;

    // Arc endpoints
    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);

    const largeArcFlag = angleSize > 180 ? 1 : 0;

    // Path: start at center, line to arc start, arc to arc end, line back to center
    const sectorPath = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${x2} ${y2} Z`;

    const isHighlighted = highlight === index;
    const fillColor = isHighlighted ? highlightColor : normalColors[index % normalColors.length];
    const fillOpacity = isHighlighted ? 0.4 : 0.2;

    // Label position (middle of the angle, about 2/3 of radius from center)
    const midAngle = startAngle + angleSize / 2;
    const labelRadius = radius * 0.65;
    const labelX = centerX + labelRadius * Math.cos((-midAngle * Math.PI) / 180);
    const labelY = centerY + labelRadius * Math.sin((-midAngle * Math.PI) / 180);

    // Line from center to arc (to show angle boundaries)
    const lineEndX = centerX + (radius + 20) * Math.cos(startRad);
    const lineEndY = centerY + (radius + 20) * Math.sin(startRad);

    return (
      <g key={`angle-${index}`}>
        {/* Filled sector */}
        <path
          d={sectorPath}
          fill={fillColor}
          fillOpacity={fillOpacity}
          stroke={fillColor}
          strokeWidth={isHighlighted ? 3 : 2}
          strokeOpacity={isHighlighted ? 0.8 : 0.5}
        />

        {/* Boundary line */}
        <line
          x1={centerX}
          y1={centerY}
          x2={lineEndX}
          y2={lineEndY}
          stroke={lineColor}
          strokeWidth={2}
        />

        {/* Angle arc (small arc near center) */}
        {angleSize > 15 && ( // Only show arc if angle is large enough
          <>
            {(() => {
              const arcRadius = 40;
              const arcX1 = centerX + arcRadius * Math.cos(startRad);
              const arcY1 = centerY + arcRadius * Math.sin(startRad);
              const arcX2 = centerX + arcRadius * Math.cos(endRad);
              const arcY2 = centerY + arcRadius * Math.sin(endRad);
              const arcLargeFlag = angleSize > 180 ? 1 : 0;

              return (
                <path
                  d={`M ${arcX1} ${arcY1} A ${arcRadius} ${arcRadius} 0 ${arcLargeFlag} 0 ${arcX2} ${arcY2}`}
                  fill="none"
                  stroke={isHighlighted ? highlightColor : fillColor}
                  strokeWidth={isHighlighted ? 3 : 2}
                  opacity={0.8}
                />
              );
            })()}
          </>
        )}

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
  };

  // Draw all angles
  let currentAngle = 0;
  const sectors = calculatedAngles.map((angle, index) => {
    const sector = drawAngleSector(currentAngle, angle, index);
    currentAngle += angle;
    return sector;
  });

  // Build the sum equation
  const sumEquation = angleLabels.join(' + ') + ' = 360°';

  return (
    <div className="max-w-md mx-auto flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg">
      <svg width={width} height={height} className="max-w-full h-auto">
        {/* All angle sectors */}
        {sectors}

        {/* Central point marker */}
        <circle
          cx={centerX}
          cy={centerY}
          r={4}
          fill={textColor}
        />

        {/* Point label */}
        <text
          x={centerX}
          y={centerY - 180}
          textAnchor="middle"
          fill={textColor}
          fontSize="16"
          fontWeight="bold"
        >
          Point O
        </text>
      </svg>

      {/* Sum equation */}
      {showSum && (
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
          <p className="text-center text-gray-800 dark:text-gray-200 font-medium">
            {sumEquation}
          </p>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-1">
            Angles at a point sum to 360°
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

export default AnglesAtPointVisualizer;
