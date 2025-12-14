/**
 * Triangle Identify Visualizer
 *
 * Purpose: Help students identify base and height in triangles of various orientations.
 * Used for P5 "Base and Height of a Triangle" subtopic.
 *
 * Key Features:
 * - Shows triangles in different shapes (acute, right, obtuse)
 * - Displays dashed height line with right-angle marker
 * - For obtuse triangles, shows extended base line where height falls outside
 * - Supports rotation for different orientations
 * - NO formulas or calculations - student identifies base/height themselves
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface TriangleIdentifyVisualizerProps {
  // Vertex labels (REQUIRED) - positioned as: apex, base-left, base-right
  apex?: string;           // Vertex opposite to base (e.g., "F")
  baseLeft?: string;       // Left end of base (e.g., "E")
  baseRight?: string;      // Right end of base (e.g., "G")

  // Height foot label (OPTIONAL) - where height meets base
  heightFoot?: string;    // e.g., "H", "J", "K"

  // Triangle shape (REQUIRED)
  // acute = height inside triangle
  // right = right angle at apex (one side IS the height)
  // obtuse-left = apex leans left, height falls outside on right
  // obtuse-right = apex leans right, height falls outside on left
  shape?: 'acute' | 'right' | 'obtuse-left' | 'obtuse-right';

  // Show the height line? (default: true)
  showHeight?: boolean;

  // Rotation for different orientations (default: 0)
  // 0 = base at bottom, 90 = base on right, 180 = base at top, 270 = base on left
  rotation?: 0 | 90 | 180 | 270;

  caption?: string;
}

const TriangleIdentifyVisualizer: React.FC<TriangleIdentifyVisualizerProps> = ({
  apex = 'A',
  baseLeft = 'B',
  baseRight = 'C',
  heightFoot,
  shape = 'acute',
  showHeight = true,
  rotation = 0,
  caption
}) => {
  const { theme, isDark } = useTheme();

  // SVG dimensions
  const svgWidth = 400;
  const svgHeight = 320;
  const padding = 50;

  // Calculate triangle vertices based on shape
  // Base is always horizontal in the unrotated view
  const baseY = svgHeight - padding - 40;
  const baseLeftX = padding + 30;
  const baseRightX = svgWidth - padding - 30;
  const baseMidX = (baseLeftX + baseRightX) / 2;

  // Calculate apex position based on shape
  let apexX: number;
  let apexY: number;
  let heightFootX: number;
  let heightFootY: number;
  let isHeightOutside: boolean = false;
  let extendedBaseStartX: number | null = null;
  let extendedBaseEndX: number | null = null;

  const triangleHeight = 160; // Visual height of triangle

  switch (shape) {
    case 'acute':
      // Apex is roughly centered, height falls inside
      apexX = baseMidX + 20; // Slightly off-center for visual interest
      apexY = baseY - triangleHeight;
      heightFootX = apexX;
      heightFootY = baseY;
      isHeightOutside = false;
      break;

    case 'right':
      // Right angle at base-left, apex directly above base-left
      apexX = baseLeftX;
      apexY = baseY - triangleHeight;
      heightFootX = baseLeftX;
      heightFootY = baseY;
      isHeightOutside = false;
      break;

    case 'obtuse-left':
      // Apex leans far left, height falls outside on left
      apexX = baseLeftX - 60;
      apexY = baseY - triangleHeight + 30;
      // Height foot is on extended base line, to the left of baseLeft
      heightFootX = apexX;
      heightFootY = baseY;
      isHeightOutside = true;
      extendedBaseStartX = heightFootX - 20;
      extendedBaseEndX = baseLeftX;
      break;

    case 'obtuse-right':
      // Apex leans far right, height falls outside on right
      apexX = baseRightX + 60;
      apexY = baseY - triangleHeight + 30;
      // Height foot is on extended base line, to the right of baseRight
      heightFootX = apexX;
      heightFootY = baseY;
      isHeightOutside = true;
      extendedBaseStartX = baseRightX;
      extendedBaseEndX = heightFootX + 20;
      break;

    default:
      apexX = baseMidX;
      apexY = baseY - triangleHeight;
      heightFootX = apexX;
      heightFootY = baseY;
  }

  // Right angle marker size
  const rightAngleSize = 12;

  // Colors
  const colors = {
    triangleFill: isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.1)',
    triangleStroke: isDark ? '#818cf8' : '#4f46e5',
    heightLine: isDark ? '#f87171' : '#dc2626',
    extendedBase: isDark ? '#9ca3af' : '#6b7280',
    rightAngle: isDark ? '#34d399' : '#059669',
    vertexDot: isDark ? '#60a5fa' : '#2563eb',
    text: isDark ? '#f3f4f6' : '#1f2937',
    heightFootDot: isDark ? '#fbbf24' : '#d97706',
  };

  // Calculate center for rotation
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;

  // Triangle points string for polygon
  const trianglePoints = `${baseLeftX},${baseY} ${apexX},${apexY} ${baseRightX},${baseY}`;

  // Right angle marker path (small square at height foot)
  const getRightAngleMarker = () => {
    if (!showHeight) return null;

    // For right triangle, the right angle is at the apex (which is also on the base line vertically)
    if (shape === 'right') {
      // Right angle at base-left corner
      return (
        <path
          d={`M ${baseLeftX + rightAngleSize} ${baseY}
              L ${baseLeftX + rightAngleSize} ${baseY - rightAngleSize}
              L ${baseLeftX} ${baseY - rightAngleSize}`}
          fill="none"
          stroke={colors.rightAngle}
          strokeWidth="2"
        />
      );
    }

    // For other shapes, right angle at height foot
    return (
      <path
        d={`M ${heightFootX + rightAngleSize} ${heightFootY}
            L ${heightFootX + rightAngleSize} ${heightFootY - rightAngleSize}
            L ${heightFootX} ${heightFootY - rightAngleSize}`}
        fill="none"
        stroke={colors.rightAngle}
        strokeWidth="2"
      />
    );
  };

  return (
    <div
      style={{
        padding: '16px',
        borderRadius: theme.radius.lg,
        background: theme.colors.tutorMessage,
        border: `1px solid ${theme.colors.border}`,
        marginTop: '12px'
      }}
    >
      <svg
        width="100%"
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        style={{ display: 'block', margin: '0 auto' }}
      >
        {/* Apply rotation transform */}
        <g transform={`rotate(${rotation}, ${centerX}, ${centerY})`}>

          {/* Extended base line (dashed) for obtuse triangles */}
          {isHeightOutside && extendedBaseStartX !== null && extendedBaseEndX !== null && (
            <line
              x1={extendedBaseStartX}
              y1={baseY}
              x2={extendedBaseEndX}
              y2={baseY}
              stroke={colors.extendedBase}
              strokeWidth="2"
              strokeDasharray="6,4"
            />
          )}

          {/* Triangle fill */}
          <polygon
            points={trianglePoints}
            fill={colors.triangleFill}
            stroke={colors.triangleStroke}
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Height line (dashed) */}
          {showHeight && shape !== 'right' && (
            <line
              x1={apexX}
              y1={apexY}
              x2={heightFootX}
              y2={heightFootY}
              stroke={colors.heightLine}
              strokeWidth="2"
              strokeDasharray="8,4"
            />
          )}

          {/* For right triangle, the height IS the vertical side - highlight it */}
          {showHeight && shape === 'right' && (
            <line
              x1={baseLeftX}
              y1={baseY}
              x2={baseLeftX}
              y2={apexY}
              stroke={colors.heightLine}
              strokeWidth="3"
            />
          )}

          {/* Right angle marker */}
          {getRightAngleMarker()}

          {/* Vertex dots and labels */}
          {/* Apex vertex */}
          <circle cx={apexX} cy={apexY} r="5" fill={colors.vertexDot} />
          <text
            x={apexX}
            y={apexY - 15}
            textAnchor="middle"
            fill={colors.text}
            fontSize="18"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
          >
            {apex}
          </text>

          {/* Base left vertex */}
          <circle cx={baseLeftX} cy={baseY} r="5" fill={colors.vertexDot} />
          <text
            x={baseLeftX - 15}
            y={baseY + 25}
            textAnchor="middle"
            fill={colors.text}
            fontSize="18"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
          >
            {baseLeft}
          </text>

          {/* Base right vertex */}
          <circle cx={baseRightX} cy={baseY} r="5" fill={colors.vertexDot} />
          <text
            x={baseRightX + 15}
            y={baseY + 25}
            textAnchor="middle"
            fill={colors.text}
            fontSize="18"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
          >
            {baseRight}
          </text>

          {/* Height foot point (if showing height and has label) */}
          {showHeight && heightFoot && shape !== 'right' && (
            <>
              <circle cx={heightFootX} cy={heightFootY} r="4" fill={colors.heightFootDot} />
              <text
                x={heightFootX}
                y={heightFootY + 22}
                textAnchor="middle"
                fill={colors.text}
                fontSize="16"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
              >
                {heightFoot}
              </text>
            </>
          )}

        </g>
      </svg>

      {/* Caption */}
      {caption && (
        <div
          style={{
            marginTop: '12px',
            fontSize: '14px',
            color: theme.colors.textMuted,
            textAlign: 'center',
            fontStyle: 'italic'
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
};

export default TriangleIdentifyVisualizer;
