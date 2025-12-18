/**
 * ParallelogramAnglesVisualizer
 *
 * Displays a parallelogram with angle labels at vertices for teaching angle properties.
 * Designed for P5 students learning:
 * - Opposite angles are equal
 * - Adjacent angles sum to 180°
 * - Parallel and equal sides
 *
 * Simple parameters for easy AI usage.
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface ParallelogramAnglesVisualizerProps {
  // Vertex labels at corners [bottomLeft, bottomRight, topRight, topLeft]
  vertexLabels?: [string, string, string, string];

  // Angle labels/values at each vertex [bottomLeft, bottomRight, topRight, topLeft]
  // Use string for labels like '120°', 'x', '∠m', or null to hide
  angles?: [string | null, string | null, string | null, string | null];

  // Which angles to highlight (indices 0-3)
  highlightAngles?: number[];

  // Show parallel side markers (arrows)
  showParallelMarkers?: boolean;

  // Show equal side markers (tick marks) on opposite sides
  showEqualSideMarkers?: boolean;

  // Skew angle of the parallelogram (15-75 degrees, default 30)
  skewAngle?: number;

  // Optional caption
  caption?: string;
}

const ParallelogramAnglesVisualizer: React.FC<ParallelogramAnglesVisualizerProps> = ({
  vertexLabels = ['A', 'B', 'C', 'D'],
  angles = [null, null, null, null],
  highlightAngles = [],
  showParallelMarkers = true,
  showEqualSideMarkers = false,  // Default to false - use arrows only
  skewAngle = 30,
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions
  const svgWidth = 500;
  const svgHeight = 350;

  // Parallelogram dimensions
  const baseLength = 220;
  const heightValue = 140;
  const clampedSkew = Math.max(15, Math.min(75, skewAngle));
  const skew = Math.tan((clampedSkew * Math.PI) / 180) * heightValue;

  // Calculate vertices [bottomLeft, bottomRight, topRight, topLeft]
  const bottomLeftX = 80;
  const bottomLeftY = svgHeight - 80;

  const vertices = [
    { x: bottomLeftX, y: bottomLeftY },                                    // 0: bottom-left
    { x: bottomLeftX + baseLength, y: bottomLeftY },                       // 1: bottom-right
    { x: bottomLeftX + baseLength + skew, y: bottomLeftY - heightValue },  // 2: top-right
    { x: bottomLeftX + skew, y: bottomLeftY - heightValue }                // 3: top-left
  ];

  // Colors
  const colors = {
    shape: theme.colors.textPrimary,
    shapeFill: theme.colors.brand + '15',
    angleArc: '#3b82f6',
    angleHighlight: '#ef4444',
    parallelMarker: '#22c55e',
    equalMarker: '#8b5cf6',
    text: theme.colors.textPrimary,
    muted: theme.colors.textMuted
  };

  // Draw angle arc at a vertex
  const drawAngleArc = (vertexIndex: number, angleLabel: string | null) => {
    if (angleLabel === null) return null;

    const vertex = vertices[vertexIndex];
    const prevVertex = vertices[(vertexIndex + 3) % 4];
    const nextVertex = vertices[(vertexIndex + 1) % 4];

    // Calculate angles to adjacent vertices
    const angleToPrev = Math.atan2(prevVertex.y - vertex.y, prevVertex.x - vertex.x);
    const angleToNext = Math.atan2(nextVertex.y - vertex.y, nextVertex.x - vertex.x);

    const arcRadius = 30;

    // Calculate arc sweep
    let startAngle = angleToPrev;
    let endAngle = angleToNext;

    // Normalize for interior angle
    let sweep = endAngle - startAngle;
    if (sweep < 0) sweep += 2 * Math.PI;
    if (sweep > Math.PI) {
      // Swap direction for interior angle
      const temp = startAngle;
      startAngle = endAngle;
      endAngle = temp;
      sweep = 2 * Math.PI - sweep;
    }

    const startX = vertex.x + arcRadius * Math.cos(startAngle);
    const startY = vertex.y + arcRadius * Math.sin(startAngle);
    const endX = vertex.x + arcRadius * Math.cos(endAngle);
    const endY = vertex.y + arcRadius * Math.sin(endAngle);

    const largeArc = sweep > Math.PI ? 1 : 0;
    const sweepFlag = 1;

    // Label position at midpoint of arc
    const midAngle = startAngle + sweep / 2;
    const labelRadius = arcRadius + 22;
    const labelX = vertex.x + labelRadius * Math.cos(midAngle);
    const labelY = vertex.y + labelRadius * Math.sin(midAngle);

    const isHighlighted = highlightAngles.includes(vertexIndex);
    const arcColor = isHighlighted ? colors.angleHighlight : colors.angleArc;

    return (
      <g key={`angle-${vertexIndex}`}>
        {/* Angle arc */}
        <path
          d={`M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 ${largeArc} ${sweepFlag} ${endX} ${endY}`}
          fill="none"
          stroke={arcColor}
          strokeWidth={isHighlighted ? 3 : 2}
        />

        {/* Angle label */}
        <foreignObject
          x={labelX - 28}
          y={labelY - 14}
          width="56"
          height="28"
        >
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: arcColor,
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            <MathText>{angleLabel}</MathText>
          </div>
        </foreignObject>
      </g>
    );
  };

  // Draw parallel markers (arrows) on a side
  const drawParallelMarkers = (x1: number, y1: number, x2: number, y2: number, double: boolean) => {
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;

    // Direction vector
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / len;
    const uy = dy / len;

    // Perpendicular for arrow head
    const px = -uy * 6;
    const py = ux * 6;

    const arrowSize = 8;
    const spacing = double ? 6 : 0;

    return (
      <g>
        {/* First arrow */}
        <polygon
          points={`
            ${midX - spacing * ux},${midY - spacing * uy}
            ${midX - spacing * ux - arrowSize * ux + px},${midY - spacing * uy - arrowSize * uy + py}
            ${midX - spacing * ux - arrowSize * ux - px},${midY - spacing * uy - arrowSize * uy - py}
          `}
          fill={colors.parallelMarker}
        />
        {double && (
          /* Second arrow */
          <polygon
            points={`
              ${midX + spacing * ux},${midY + spacing * uy}
              ${midX + spacing * ux - arrowSize * ux + px},${midY + spacing * uy - arrowSize * uy + py}
              ${midX + spacing * ux - arrowSize * ux - px},${midY + spacing * uy - arrowSize * uy - py}
            `}
            fill={colors.parallelMarker}
          />
        )}
      </g>
    );
  };

  // Draw equal side markers (tick marks)
  const drawEqualMarkers = (x1: number, y1: number, x2: number, y2: number, count: number) => {
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;

    // Perpendicular direction
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const px = -dy / len;
    const py = dx / len;

    const tickLength = 10;
    const spacing = 5;

    const ticks = [];
    for (let i = 0; i < count; i++) {
      const offset = (i - (count - 1) / 2) * spacing;
      const cx = midX + offset * (dx / len);
      const cy = midY + offset * (dy / len);

      ticks.push(
        <line
          key={i}
          x1={cx - tickLength * px}
          y1={cy - tickLength * py}
          x2={cx + tickLength * px}
          y2={cy + tickLength * py}
          stroke={colors.equalMarker}
          strokeWidth="2"
        />
      );
    }
    return <g>{ticks}</g>;
  };

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
        {/* Parallelogram shape */}
        <polygon
          points={vertices.map(v => `${v.x},${v.y}`).join(' ')}
          fill={colors.shapeFill}
          stroke={colors.shape}
          strokeWidth="2.5"
        />

        {/* Parallel markers on horizontal sides (top and bottom) */}
        {showParallelMarkers && (
          <>
            {/* Bottom side - single arrow */}
            {drawParallelMarkers(vertices[0].x, vertices[0].y, vertices[1].x, vertices[1].y, false)}
            {/* Top side - single arrow */}
            {drawParallelMarkers(vertices[3].x, vertices[3].y, vertices[2].x, vertices[2].y, false)}
            {/* Left side - double arrow */}
            {drawParallelMarkers(vertices[0].x, vertices[0].y, vertices[3].x, vertices[3].y, true)}
            {/* Right side - double arrow */}
            {drawParallelMarkers(vertices[1].x, vertices[1].y, vertices[2].x, vertices[2].y, true)}
          </>
        )}

        {/* Equal side markers */}
        {showEqualSideMarkers && (
          <>
            {/* Bottom and top sides - single tick */}
            {drawEqualMarkers(vertices[0].x, vertices[0].y, vertices[1].x, vertices[1].y, 1)}
            {drawEqualMarkers(vertices[3].x, vertices[3].y, vertices[2].x, vertices[2].y, 1)}
            {/* Left and right sides - double tick */}
            {drawEqualMarkers(vertices[0].x, vertices[0].y, vertices[3].x, vertices[3].y, 2)}
            {drawEqualMarkers(vertices[1].x, vertices[1].y, vertices[2].x, vertices[2].y, 2)}
          </>
        )}

        {/* Angle arcs and labels */}
        {angles.map((angle, index) => drawAngleArc(index, angle))}

        {/* Vertex labels */}
        {vertexLabels.map((label, index) => {
          const vertex = vertices[index];
          // Position labels outside the shape
          const centerX = vertices.reduce((sum, v) => sum + v.x, 0) / 4;
          const centerY = vertices.reduce((sum, v) => sum + v.y, 0) / 4;
          const dx = vertex.x - centerX;
          const dy = vertex.y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const offsetX = (dx / dist) * 25;
          const offsetY = (dy / dist) * 25;

          return (
            <text
              key={`vertex-${index}`}
              x={vertex.x + offsetX}
              y={vertex.y + offsetY + 5}
              fill={colors.text}
              fontSize="18"
              fontWeight="bold"
              textAnchor="middle"
            >
              {label}
            </text>
          );
        })}

        {/* Vertex dots */}
        {vertices.map((vertex, index) => (
          <circle
            key={`dot-${index}`}
            cx={vertex.x}
            cy={vertex.y}
            r="4"
            fill={colors.text}
          />
        ))}
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

export default ParallelogramAnglesVisualizer;
