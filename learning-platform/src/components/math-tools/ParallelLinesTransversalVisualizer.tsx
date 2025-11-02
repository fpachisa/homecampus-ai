import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ParallelLinesTransversalVisualizerProps {
  knownAngle: number;
  knownPosition: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  labels?: string[];
  highlightPattern?: 'corresponding' | 'alternate' | 'cointerior' | 'none';
  highlightAngles?: number[];
  caption?: string;
}

/**
 * Parallel Lines and Transversal Visualizer
 *
 * Position numbering at each intersection:
 *
 * Top intersection (line AB):
 *      2   0
 *   ---•---  (AB)
 *      3   1
 *
 * Bottom intersection (line CD):
 *      6   4
 *   ---•---  (CD)
 *      7   5
 *
 * Position 0: Top line, above, RIGHT of transversal
 * Position 1: Top line, below, RIGHT of transversal
 * Position 2: Top line, above, LEFT of transversal
 * Position 3: Top line, below, LEFT of transversal
 * Position 4: Bottom line, above, RIGHT of transversal
 * Position 5: Bottom line, below, RIGHT of transversal
 * Position 6: Bottom line, above, LEFT of transversal
 * Position 7: Bottom line, below, LEFT of transversal
 *
 * When parallel lines are cut by a transversal:
 * - Vertically opposite: 0=3, 1=2, 4=7, 5=6
 * - Corresponding (F-pattern): 0=4, 1=5, 2=6, 3=7
 * - Alternate interior (Z-pattern): 1=6, 3=4
 * - Alternate exterior (Z-pattern): 0=7, 2=5
 * - Co-interior (C-pattern): 1+4=180°, 3+6=180°
 */

const ParallelLinesTransversalVisualizer: React.FC<ParallelLinesTransversalVisualizerProps> = ({
  knownAngle,
  knownPosition,
  labels,
  highlightPattern = 'none',
  highlightAngles,
  caption
}) => {
  const { isDark } = useTheme();

  // ============================================
  // VALIDATION
  // ============================================
  if (knownAngle < 0 || knownAngle > 180) {
    return (
      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded">
        <p className="text-red-800 dark:text-red-300">
          Error: knownAngle must be between 0° and 180°. Received: {knownAngle}°
        </p>
      </div>
    );
  }

  if (knownPosition < 0 || knownPosition > 7) {
    return (
      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded">
        <p className="text-red-800 dark:text-red-300">
          Error: knownPosition must be 0-7. Received: {knownPosition}
        </p>
      </div>
    );
  }

  // ============================================
  // CALCULATE ALL 8 ANGLES (will be calculated after transversal angle is known)
  // ============================================
  // This will be filled in after we calculate the transversal angle
  const angles = new Array(8).fill(0);

  // ============================================
  // DETERMINE HIGHLIGHTING
  // ============================================
  interface HighlightGroup {
    angleIndices: number[];
    colorIndex: number;
  }

  let highlightGroups: HighlightGroup[] = [];

  if (highlightAngles && highlightAngles.length > 0) {
    // Custom highlighting - each specified angle gets its own color
    highlightGroups = highlightAngles.map((angleIndex, i) => ({
      angleIndices: [angleIndex],
      colorIndex: i % 4
    }));
  } else {
    // Pattern-based highlighting
    switch (highlightPattern) {
      case 'corresponding':
        highlightGroups = [
          { angleIndices: [0, 4], colorIndex: 0 },
          { angleIndices: [1, 5], colorIndex: 1 },
          { angleIndices: [2, 6], colorIndex: 2 },
          { angleIndices: [3, 7], colorIndex: 3 }
        ];
        break;
      case 'alternate':
        // Show alternate interior and alternate exterior
        highlightGroups = [
          { angleIndices: [1, 6], colorIndex: 0 }, // Alternate interior
          { angleIndices: [3, 4], colorIndex: 1 }, // Alternate interior
          { angleIndices: [0, 7], colorIndex: 2 }, // Alternate exterior
          { angleIndices: [2, 5], colorIndex: 3 }  // Alternate exterior
        ];
        break;
      case 'cointerior':
        highlightGroups = [
          { angleIndices: [1, 4], colorIndex: 0 },
          { angleIndices: [3, 6], colorIndex: 1 }
        ];
        break;
      case 'none':
      default:
        highlightGroups = [];
    }
  }

  // Create a map of angle index to highlight color index
  const angleColorMap = new Map<number, number>();
  highlightGroups.forEach(group => {
    group.angleIndices.forEach(angleIdx => {
      angleColorMap.set(angleIdx, group.colorIndex);
    });
  });

  // ============================================
  // SVG SETUP & TRANSVERSAL ANGLE CALCULATION
  // ============================================
  const width = 600;
  const height = 400;

  // Parallel lines (horizontal)
  const topLineY = 120;
  const bottomLineY = 280;
  const lineStartX = 50;
  const lineEndX = 550;

  // Top intersection point (fixed)
  const topIntersectionX = 250;

  // Calculate transversal angle from the known angle
  // Based on correct geometry:
  // Position 0 (a) = θ (transversal angle)
  // Position 1 (b) = 180° - θ (supplementary to a)
  // Position 2 (c) = 180° - θ (vertically opposite to b)
  // Position 3 (d) = θ (vertically opposite to a)
  const localKnownPos = knownPosition % 4;
  let transversalAngleDeg: number;

  if (localKnownPos === 0 || localKnownPos === 3) {
    // angle = θ, so θ = angle
    transversalAngleDeg = knownAngle;
  } else {
    // angle = 180° - θ, so θ = 180° - angle
    transversalAngleDeg = 180 - knownAngle;
  }

  // Calculate all angles based on transversal angle
  // At each intersection:
  // Position 0 & 3: angle = θ (transversal angle)
  // Position 1 & 2: angle = 180° - θ
  angles[0] = transversalAngleDeg;
  angles[1] = 180 - transversalAngleDeg;
  angles[2] = 180 - transversalAngleDeg;
  angles[3] = transversalAngleDeg;
  // Bottom intersection (corresponding angles)
  angles[4] = transversalAngleDeg;
  angles[5] = 180 - transversalAngleDeg;
  angles[6] = 180 - transversalAngleDeg;
  angles[7] = transversalAngleDeg;

  // Calculate bottom intersection position based on transversal angle
  // The transversal should slope from lower-left to upper-right for acute angles
  // This means the bottom intersection is to the LEFT of the top intersection
  const transversalAngleRad = (transversalAngleDeg * Math.PI) / 180;
  const verticalDistance = bottomLineY - topLineY;
  const horizontalDistance = verticalDistance / Math.tan(transversalAngleRad);
  const bottomIntersectionX = topIntersectionX - horizontalDistance;

  // Calculate the direction vector from top to bottom intersection
  const transversalDX = bottomIntersectionX - topIntersectionX;
  const transversalDY = bottomLineY - topLineY;
  const transversalLen = Math.sqrt(transversalDX * transversalDX + transversalDY * transversalDY);

  // Normalize the direction vector
  const dirX = transversalDX / transversalLen;
  const dirY = transversalDY / transversalLen;

  // Extend the line beyond both intersection points
  const extensionLength = 80;
  const topTransversalX1 = topIntersectionX - extensionLength * dirX;
  const topTransversalY1 = topLineY - extensionLength * dirY;
  const bottomTransversalX2 = bottomIntersectionX + extensionLength * dirX;
  const bottomTransversalY2 = bottomLineY + extensionLength * dirY;

  // Colors
  const lineColor = isDark ? '#9CA3AF' : '#4B5563';  // gray-400 : gray-600
  const textColor = isDark ? '#F3F4F6' : '#1F2937';  // gray-100 : gray-800

  const highlightColors = [
    isDark ? '#60A5FA' : '#3B82F6',  // blue-400 : blue-500
    isDark ? '#34D399' : '#10B981',  // emerald-400 : emerald-500
    isDark ? '#FBBF24' : '#F59E0B',  // amber-400 : amber-500
    isDark ? '#A78BFA' : '#8B5CF6',  // violet-400 : violet-500
  ];

  const defaultAngleColor = isDark ? '#9CA3AF' : '#6B7280';  // gray-400 : gray-500

  // Default labels: a-h for positions 0-7 to verify positions are correct
  const angleLabels = labels || ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  // ============================================
  // ANGLE ARC DRAWING
  // ============================================
  const drawAngleArc = (
    position: number,
    intersectionX: number,
    intersectionY: number
  ) => {
    const isHighlighted = angleColorMap.has(position);
    const colorIndex = angleColorMap.get(position) ?? 0;
    const color = isHighlighted ? highlightColors[colorIndex] : defaultAngleColor;
    const strokeWidth = isHighlighted ? 3 : 2;
    const opacity = isHighlighted ? 1 : 0.6;
    const arcRadius = 40;

    // Determine the start and end angles for this position's arc
    // Position definitions:
    //      2   0    Position 0 (a): above line, right of transversal - angle = θ
    //   ---•---     Position 1 (b): below line, right of transversal - angle = 180° - θ
    //      3   1    Position 2 (c): above line, left of transversal - angle = 180° - θ
    //               Position 3 (d): below line, left of transversal - angle = θ
    //
    // Where θ = transversalAngleDeg (angle of transversal from horizontal)
    // Arcs are drawn counter-clockwise in math coordinates (but clockwise in SVG)

    let startAngleDeg: number;
    let endAngleDeg: number;
    const localPos = position % 4; // 0-3 pattern repeats for both intersections

    if (localPos === 0) {
      // Position 0: from right-horizontal (0°) to up-transversal (θ)
      startAngleDeg = 0;
      endAngleDeg = transversalAngleDeg;
    } else if (localPos === 1) {
      // Position 1: from down-transversal (θ+180°) to right-horizontal (360°)
      startAngleDeg = transversalAngleDeg + 180;
      endAngleDeg = 360;
    } else if (localPos === 2) {
      // Position 2: from up-transversal (θ) to left-horizontal (180°)
      startAngleDeg = transversalAngleDeg;
      endAngleDeg = 180;
    } else { // localPos === 3
      // Position 3: from left-horizontal (180°) to down-transversal (θ+180°)
      startAngleDeg = 180;
      endAngleDeg = transversalAngleDeg + 180;
    }

    // Convert to radians (SVG coordinate system: y-axis points down)
    const startRad = (startAngleDeg * Math.PI) / 180;
    const endRad = (endAngleDeg * Math.PI) / 180;

    const x1 = intersectionX + arcRadius * Math.cos(startRad);
    const y1 = intersectionY - arcRadius * Math.sin(startRad);
    const x2 = intersectionX + arcRadius * Math.cos(endRad);
    const y2 = intersectionY - arcRadius * Math.sin(endRad);

    // Calculate arc sweep for large-arc-flag
    const arcSweep = endAngleDeg - startAngleDeg;
    const largeArcFlag = arcSweep > 180 ? 1 : 0;
    const sweepFlag = 0; // Counter-clockwise

    const arcPath = `M ${x1} ${y1} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} ${sweepFlag} ${x2} ${y2}`;

    // Label position (at midpoint of arc, slightly further out)
    const midAngleDeg = (startAngleDeg + endAngleDeg) / 2;
    const labelRadius = arcRadius + 24;
    const labelX = intersectionX + labelRadius * Math.cos((midAngleDeg * Math.PI) / 180);
    const labelY = intersectionY - labelRadius * Math.sin((midAngleDeg * Math.PI) / 180);

    return (
      <g key={`angle-${position}`}>
        {/* Arc */}
        <path
          d={arcPath}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          opacity={opacity}
        />

        {/* Label */}
        <text
          x={labelX}
          y={labelY}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={isHighlighted ? color : textColor}
          fontSize={isHighlighted ? "15" : "13"}
          fontWeight={isHighlighted ? "bold" : "normal"}
        >
          {angleLabels[position]}
        </text>
      </g>
    );
  };

  // ============================================
  // BUILD INFO TEXT
  // ============================================
  let infoText = '';
  switch (highlightPattern) {
    case 'corresponding':
      infoText = 'Corresponding angles are equal (F-pattern)';
      break;
    case 'alternate':
      infoText = 'Alternate interior and exterior angles are equal (Z-pattern)';
      break;
    case 'cointerior':
      infoText = 'Co-interior angles sum to 180° (C-pattern)';
      break;
  }

  // ============================================
  // RENDER
  // ============================================
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg">
      <svg width={width} height={height} className="max-w-full h-auto">
        {/* Top parallel line AB */}
        <line
          x1={lineStartX}
          y1={topLineY}
          x2={lineEndX}
          y2={topLineY}
          stroke={lineColor}
          strokeWidth={2.5}
        />

        {/* Bottom parallel line CD */}
        <line
          x1={lineStartX}
          y1={bottomLineY}
          x2={lineEndX}
          y2={bottomLineY}
          stroke={lineColor}
          strokeWidth={2.5}
        />

        {/* Transversal */}
        <line
          x1={topTransversalX1}
          y1={topTransversalY1}
          x2={bottomTransversalX2}
          y2={bottomTransversalY2}
          stroke={lineColor}
          strokeWidth={2.5}
        />

        {/* Top intersection point marker */}
        <circle
          cx={topIntersectionX}
          cy={topLineY}
          r={4}
          fill={textColor}
        />

        {/* Bottom intersection point marker */}
        <circle
          cx={bottomIntersectionX}
          cy={bottomLineY}
          r={4}
          fill={textColor}
        />

        {/* Line labels */}
        <text
          x={lineStartX - 25}
          y={topLineY}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={textColor}
          fontSize="14"
          fontWeight="bold"
        >
          AB
        </text>

        <text
          x={lineStartX - 25}
          y={bottomLineY}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={textColor}
          fontSize="14"
          fontWeight="bold"
        >
          CD
        </text>

        {/* Draw all 8 angle arcs */}
        {[0, 1, 2, 3].map(pos => drawAngleArc(pos, topIntersectionX, topLineY))}
        {[4, 5, 6, 7].map(pos => drawAngleArc(pos, bottomIntersectionX, bottomLineY))}
      </svg>

      {/* Info box */}
      {highlightPattern !== 'none' && infoText && (
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
          <p className="text-center text-gray-800 dark:text-gray-200 font-medium text-sm">
            {infoText}
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

export default ParallelLinesTransversalVisualizer;
