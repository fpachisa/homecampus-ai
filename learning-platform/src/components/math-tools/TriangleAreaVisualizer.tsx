/**
 * Triangle Area Visualizer
 *
 * Purpose: Show triangles with given dimensions for area calculation problems.
 * Used for P5 "Area of Triangle" subtopic.
 *
 * Key Features:
 * - Shows triangle with base and height dimension labels
 * - Dashed height line with right-angle marker
 * - Light shading to indicate "find this area"
 * - For obtuse triangles, shows extended base line
 * - NO formulas or calculations - student figures out Area = ½ × base × height
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface TriangleAreaVisualizerProps {
  // Dimensions (REQUIRED) - what we show on the diagram
  base?: string;      // e.g., "10 cm", "15 m", "8 m"
  height?: string;    // e.g., "6 cm", "h", "4 m"

  // Triangle shape (REQUIRED)
  // acute = height inside triangle
  // right = right angle at one corner
  // obtuse-left = apex leans left, height falls outside on left
  // obtuse-right = apex leans right, height falls outside on right
  shape?: 'acute' | 'right' | 'obtuse-left' | 'obtuse-right';

  // Rotation for different orientations (default: 0)
  rotation?: 0 | 90 | 180 | 270;

  // Light shading to indicate area to find (default: true)
  shaded?: boolean;

  // Optional vertex labels
  labels?: {
    apex?: string;
    baseLeft?: string;
    baseRight?: string;
  };

  caption?: string;
}

const TriangleAreaVisualizer: React.FC<TriangleAreaVisualizerProps> = ({
  base = '10 cm',
  height = '6 cm',
  shape = 'acute',
  rotation = 0,
  shaded = true,
  labels,
  caption
}) => {
  const { theme, isDark } = useTheme();

  // SVG dimensions - extra width for dimension labels
  const svgWidth = 480;
  const svgHeight = 340;
  const padding = 70;

  // Calculate triangle vertices based on shape
  const baseY = svgHeight - padding - 50;
  const baseLeftX = padding + 30;
  const baseRightX = svgWidth - padding - 60;
  const baseMidX = (baseLeftX + baseRightX) / 2;

  // Calculate apex position based on shape
  let apexX: number;
  let apexY: number;
  let heightFootX: number;
  let heightFootY: number;
  let isHeightOutside: boolean = false;
  let extendedBaseStartX: number | null = null;
  let extendedBaseEndX: number | null = null;

  const triangleHeight = 150; // Visual height of triangle

  switch (shape) {
    case 'acute':
      // Apex is roughly centered, height falls inside
      apexX = baseMidX + 15;
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
      apexX = baseLeftX - 50;
      apexY = baseY - triangleHeight + 20;
      heightFootX = apexX;
      heightFootY = baseY;
      isHeightOutside = true;
      extendedBaseStartX = heightFootX - 25;
      extendedBaseEndX = baseLeftX;
      break;

    case 'obtuse-right':
      // Apex leans far right, height falls outside on right
      apexX = baseRightX + 50;
      apexY = baseY - triangleHeight + 20;
      heightFootX = apexX;
      heightFootY = baseY;
      isHeightOutside = true;
      extendedBaseStartX = baseRightX;
      extendedBaseEndX = heightFootX + 25;
      break;

    default:
      apexX = baseMidX;
      apexY = baseY - triangleHeight;
      heightFootX = apexX;
      heightFootY = baseY;
  }

  // Right angle marker size
  const rightAngleSize = 12;

  // Dimension line offset
  const dimOffset = 25;
  const dimArrowSize = 6;

  // Colors
  const colors = {
    triangleFill: shaded
      ? (isDark ? 'rgba(96, 165, 250, 0.25)' : 'rgba(59, 130, 246, 0.15)')
      : 'transparent',
    triangleStroke: isDark ? '#60a5fa' : '#2563eb',
    heightLine: isDark ? '#f87171' : '#dc2626',
    extendedBase: isDark ? '#9ca3af' : '#6b7280',
    rightAngle: isDark ? '#34d399' : '#059669',
    dimension: isDark ? '#c084fc' : '#7c3aed',
    dimensionText: isDark ? '#e9d5ff' : '#6b21a8',
    vertexDot: isDark ? '#60a5fa' : '#2563eb',
    text: isDark ? '#f3f4f6' : '#1f2937',
  };

  // Calculate center for rotation
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;

  // Triangle points string for polygon
  const trianglePoints = `${baseLeftX},${baseY} ${apexX},${apexY} ${baseRightX},${baseY}`;

  // Render dimension arrow (tick marks at ends)
  const renderDimensionLine = (
    x1: number, y1: number,
    x2: number, y2: number,
    label: string,
    orientation: 'horizontal' | 'vertical',
    labelPosition: 'left' | 'right' | 'center' = 'center'
  ) => {
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;

    // Calculate label position based on orientation and side
    let labelX: number;
    let labelY: number;
    let textAnchor: 'start' | 'middle' | 'end';

    if (orientation === 'horizontal') {
      labelX = midX;
      labelY = midY + 20;
      textAnchor = 'middle';
    } else {
      // Vertical dimension - position label to the side
      if (labelPosition === 'left') {
        labelX = x1 - 12;
        textAnchor = 'end';
      } else {
        labelX = x1 + 12;
        textAnchor = 'start';
      }
      labelY = midY;
    }

    return (
      <g>
        {/* Main line */}
        <line
          x1={x1} y1={y1}
          x2={x2} y2={y2}
          stroke={colors.dimension}
          strokeWidth="2"
        />
        {/* End ticks */}
        {orientation === 'horizontal' ? (
          <>
            <line x1={x1} y1={y1 - dimArrowSize} x2={x1} y2={y1 + dimArrowSize} stroke={colors.dimension} strokeWidth="2" />
            <line x1={x2} y1={y2 - dimArrowSize} x2={x2} y2={y2 + dimArrowSize} stroke={colors.dimension} strokeWidth="2" />
          </>
        ) : (
          <>
            <line x1={x1 - dimArrowSize} y1={y1} x2={x1 + dimArrowSize} y2={y1} stroke={colors.dimension} strokeWidth="2" />
            <line x1={x2 - dimArrowSize} y1={y2} x2={x2 + dimArrowSize} y2={y2} stroke={colors.dimension} strokeWidth="2" />
          </>
        )}
        {/* Label */}
        <text
          x={labelX}
          y={labelY}
          textAnchor={textAnchor}
          dominantBaseline="middle"
          fill={colors.dimensionText}
          fontSize="16"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          {label}
        </text>
      </g>
    );
  };

  // Right angle marker
  const getRightAngleMarker = () => {
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

          {/* Triangle fill and stroke */}
          <polygon
            points={trianglePoints}
            fill={colors.triangleFill}
            stroke={colors.triangleStroke}
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Height line (dashed) */}
          {shape !== 'right' && (
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

          {/* For right triangle, highlight the vertical side as height */}
          {shape === 'right' && (
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

          {/* Height foot dot */}
          {shape !== 'right' && (
            <circle cx={heightFootX} cy={heightFootY} r="4" fill={colors.heightLine} />
          )}

          {/* Base dimension line (below the base) */}
          {renderDimensionLine(
            baseLeftX, baseY + dimOffset,
            baseRightX, baseY + dimOffset,
            base,
            'horizontal'
          )}

          {/* Height dimension line */}
          {shape === 'right' ? (
            // For right triangle, height dimension is on the left side
            renderDimensionLine(
              baseLeftX - dimOffset, baseY,
              baseLeftX - dimOffset, apexY,
              height,
              'vertical',
              'left'
            )
          ) : (
            // For other shapes, height dimension next to the height line
            renderDimensionLine(
              heightFootX + dimOffset, heightFootY,
              heightFootX + dimOffset, apexY,
              height,
              'vertical',
              'right'
            )
          )}

          {/* Optional vertex labels */}
          {labels?.apex && (
            <>
              <circle cx={apexX} cy={apexY} r="4" fill={colors.vertexDot} />
              <text
                x={apexX}
                y={apexY - 15}
                textAnchor="middle"
                fill={colors.text}
                fontSize="16"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
              >
                {labels.apex}
              </text>
            </>
          )}

          {labels?.baseLeft && (
            <>
              <circle cx={baseLeftX} cy={baseY} r="4" fill={colors.vertexDot} />
              <text
                x={baseLeftX - 15}
                y={baseY + 20}
                textAnchor="middle"
                fill={colors.text}
                fontSize="16"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
              >
                {labels.baseLeft}
              </text>
            </>
          )}

          {labels?.baseRight && (
            <>
              <circle cx={baseRightX} cy={baseY} r="4" fill={colors.vertexDot} />
              <text
                x={baseRightX + 15}
                y={baseY + 20}
                textAnchor="middle"
                fill={colors.text}
                fontSize="16"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
              >
                {labels.baseRight}
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

export default TriangleAreaVisualizer;
