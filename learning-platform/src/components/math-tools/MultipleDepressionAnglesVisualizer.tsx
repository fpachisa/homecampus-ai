/**
 * Multiple Depression Angles Visualizer
 *
 * Visualizes problems with one observer at an elevated position looking down
 * at multiple targets (boats, objects) at different angles of depression.
 *
 * Example: Person at cliff top Q looking at boats A and B with angles 62° and 36°
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface Target {
  label: string;           // e.g., "A", "B", "Boat 1"
  angle: number | null;    // Angle of depression in degrees, or null to show as variable
  angleLabel?: string;     // Optional custom label (e.g., "α", "62°")
  distance?: string;       // Optional horizontal distance label (e.g., "PA", "x")
  showDistance?: boolean;  // Whether to show distance label
}

interface MultipleDepressionAnglesVisualizerProps {
  // Observer point (top of cliff/building)
  observerPoint?: string;  // e.g., "Q"

  // Base point (bottom of cliff/building)
  basePoint?: string;      // e.g., "P"

  // Height label
  height?: string;         // e.g., "130 m", "h"

  // Targets (boats, points on ground, etc.)
  targets: Target[];       // Array of targets with their angles

  // Display options
  showRightAngles?: boolean;     // Show right angle markers
  showHorizontalLine?: boolean;  // Show horizontal ground/sea line
  highlightTarget?: number;      // Index of target to highlight (-1 for none)

  caption?: string;
}

const MultipleDepressionAnglesVisualizer: React.FC<MultipleDepressionAnglesVisualizerProps> = ({
  observerPoint = 'Q',
  basePoint = 'P',
  height = '',
  targets,
  showRightAngles = true,
  showHorizontalLine = true,
  highlightTarget = -1,
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions
  const svgWidth = 700;
  const svgHeight = 400;

  // Padding around diagram
  const padding = { left: 80, right: 80, top: 60, bottom: 100 };

  // Calculate available width for diagram
  const availableWidth = svgWidth - padding.left - padding.right;
  const availableHeight = svgHeight - padding.top - padding.bottom;

  // First pass: calculate target positions with unit scaling to find max distance
  const cliffHeightUnit = 1; // Unit height for calculation
  const maxHorizontalDistance = Math.max(...targets.map(target => {
    const angle = target.angle ?? 30;
    const angleRad = (angle * Math.PI) / 180;
    return cliffHeightUnit / Math.tan(angleRad);
  }), 0.5); // Ensure minimum distance

  // Calculate scaling factor to fit diagram in available space
  // We need to fit: observer column + max horizontal distance
  const scale = Math.min(
    availableWidth / (maxHorizontalDistance + 0.2), // +0.2 for observer column width
    availableHeight / (cliffHeightUnit + 0.1) // +0.1 for some vertical padding
  );

  // Calculate actual cliff height in SVG pixels
  const cliffHeight = cliffHeightUnit * scale;

  // Observer at top (Q) - positioned with left padding
  const observerX = padding.left;
  const observerY = padding.top;

  // Base point (P) directly below observer
  const baseX = observerX;
  const baseY = observerY + cliffHeight;

  // Colors
  const defaultColor = theme.colors.textPrimary || '#333';
  const lineColor = theme.colors.textSecondary || '#666';
  const angleColor = theme.colors.brand || '#5865F2';
  const highlightColor = '#ef4444';
  const groundColor = '#94a3b8';

  // Calculate target positions based on angles (now with proper scaling)
  const targetPositions = targets.map((target, _index) => {
    const angle = target.angle ?? 30; // Default angle for visualization
    const angleRad = (angle * Math.PI) / 180;

    // Calculate horizontal distance from cliff base (in unit coordinates)
    const horizontalDistanceUnit = cliffHeightUnit / Math.tan(angleRad);

    // Scale to SVG coordinates
    const horizontalDistance = horizontalDistanceUnit * scale;

    return {
      x: baseX + horizontalDistance,
      y: baseY,
      ...target,
      angle: angle
    };
  });

  // Sort targets by x position for proper labeling
  const sortedTargets = [...targetPositions].sort((a, b) => a.x - b.x);

  return (
    <div
      style={{
        padding: '20px',
        borderRadius: theme.radius.lg,
        background: theme.colors.tutorMessage,
        border: `1px solid ${theme.colors.border}`,
        marginTop: '16px'
      }}
    >
      <svg
        width="100%"
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        style={{ display: 'block', margin: '0 auto' }}
      >
        {/* Ground/Sea level line */}
        {showHorizontalLine && (
          <line
            x1={padding.left - 20}
            y1={baseY}
            x2={Math.max(...sortedTargets.map(t => t.x)) + 50}
            y2={baseY}
            stroke={groundColor}
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        )}

        {/* Vertical cliff face (Q to P) */}
        <line
          x1={observerX}
          y1={observerY}
          x2={baseX}
          y2={baseY}
          stroke={defaultColor}
          strokeWidth="3"
        />

        {/* Height label */}
        {height && (
          <foreignObject
            x={observerX - 70}
            y={(observerY + baseY) / 2 - 15}
            width="60"
            height="30"
          >
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: defaultColor,
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              <MathText>{height.includes('$') ? height : `$${height}$`}</MathText>
            </div>
          </foreignObject>
        )}

        {/* Observer point (Q) */}
        <circle cx={observerX} cy={observerY} r="6" fill={angleColor} />
        <text
          x={observerX}
          y={observerY - 15}
          fill={defaultColor}
          fontSize="18"
          fontWeight="bold"
          textAnchor="middle"
        >
          {observerPoint}
        </text>

        {/* Base point (P) */}
        <circle cx={baseX} cy={baseY} r="5" fill={defaultColor} />
        <text
          x={baseX}
          y={baseY + 20}
          fill={defaultColor}
          fontSize="18"
          fontWeight="bold"
          textAnchor="middle"
        >
          {basePoint}
        </text>

        {/* Right angle at P */}
        {showRightAngles && (
          <rect
            x={baseX}
            y={baseY - 12}
            width="12"
            height="12"
            fill="none"
            stroke={defaultColor}
            strokeWidth="2"
          />
        )}

        {/* Draw targets and lines of sight */}
        {sortedTargets.map((target, index) => {
          const isHighlighted = highlightTarget === targets.findIndex(t => t.label === target.label);
          const targetColor = isHighlighted ? highlightColor : defaultColor;
          const lineWidth = isHighlighted ? 3 : 2;

          return (
            <g key={target.label}>
              {/* Horizontal line from P to target */}
              <line
                x1={baseX}
                y1={baseY}
                x2={target.x}
                y2={target.y}
                stroke={lineColor}
                strokeWidth={lineWidth}
              />

              {/* Line of sight from Q to target */}
              <line
                x1={observerX}
                y1={observerY}
                x2={target.x}
                y2={target.y}
                stroke={targetColor}
                strokeWidth={lineWidth}
                strokeDasharray={isHighlighted ? "0" : "5,5"}
              />

              {/* Target point */}
              <circle
                cx={target.x}
                cy={target.y}
                r="6"
                fill={targetColor}
              />

              {/* Target label */}
              <text
                x={target.x}
                y={target.y + 25}
                fill={defaultColor}
                fontSize="18"
                fontWeight="bold"
                textAnchor="middle"
              >
                {target.label}
              </text>

              {/* Angle arc at Q */}
              {target.angle !== null && (() => {
                // Use different arc radii for each target to make them visually distinct
                // Larger angles get smaller radii, smaller angles get larger radii
                const arcRadius = 35 + (index * 20);

                // Start from horizontal line pointing right
                const startX = observerX + arcRadius;
                const startY = observerY;

                // End at the line of sight direction
                const dx = target.x - observerX;
                const dy = target.y - observerY;
                const lineAngle = Math.atan2(dy, dx);
                const endX = observerX + arcRadius * Math.cos(lineAngle);
                const endY = observerY + arcRadius * Math.sin(lineAngle);

                // Assign distinct colors to each angle
                const angleColors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b'];
                const thisAngleColor = isHighlighted ? highlightColor : (angleColors[index % angleColors.length] || angleColor);

                return (
                  <>
                    {/* Horizontal reference line from Q (show only once for first target) */}
                    {index === 0 && (
                      <line
                        x1={observerX}
                        y1={observerY}
                        x2={observerX + 100}
                        y2={observerY}
                        stroke="#94a3b8"
                        strokeWidth="1.5"
                        strokeDasharray="4,4"
                        opacity="0.7"
                      />
                    )}

                    {/* Angle arc */}
                    <path
                      d={`M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 0 1 ${endX} ${endY}`}
                      fill="none"
                      stroke={thisAngleColor}
                      strokeWidth="2.5"
                    />

                    {/* Angle label positioned along the arc */}
                    <foreignObject
                      x={observerX + arcRadius + 8}
                      y={observerY + (index * 20) - 12}
                      width="70"
                      height="30"
                    >
                      <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        color: thisAngleColor,
                        fontSize: '15px',
                        fontWeight: 'bold'
                      }}>

                      </div>
                    </foreignObject>
                  </>
                );
              })()}

              {/* Distance label */}
              {target.showDistance && target.distance && (
                <foreignObject
                  x={(baseX + target.x) / 2 - 30}
                  y={baseY + 10}
                  width="60"
                  height="30"
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: targetColor,
                    fontSize: '15px',
                    fontWeight: 'bold'
                  }}>

                  </div>
                </foreignObject>
              )}
            </g>
          );
        })}
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
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default MultipleDepressionAnglesVisualizer;
