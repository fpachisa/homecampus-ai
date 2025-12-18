/**
 * TrapeziumAnglesVisualizer
 *
 * Displays a trapezium with angle labels at vertices for teaching angle properties.
 * Designed for P5 students learning:
 * - A trapezium has exactly ONE pair of parallel sides
 * - Angles between parallel sides sum to 180° (co-interior angles)
 * - ∠x + ∠y = 180° and ∠z + ∠w = 180°
 *
 * Simple parameters for easy AI usage.
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface TrapeziumAnglesVisualizerProps {
  // Vertex labels at corners [bottomLeft, bottomRight, topRight, topLeft]
  vertexLabels?: [string, string, string, string];

  // Angle labels/values at each vertex [bottomLeft, bottomRight, topRight, topLeft]
  // Use string for labels like '116°', 'x', '∠QRS', or null to hide
  angles?: [string | null, string | null, string | null, string | null];

  // Which angles to highlight (indices 0-3)
  highlightAngles?: number[];

  // Show parallel side markers (arrows on the ONE pair of parallel sides)
  showParallelMarkers?: boolean;

  // Show angle sum annotations (∠x + ∠y = 180°)
  showAngleSumAnnotation?: boolean;

  // Ratio of top to bottom side (0.3-0.9, default: 0.5)
  topSideRatio?: number;

  // Whether to show the shape as isosceles trapezium (equal non-parallel sides)
  isIsosceles?: boolean;

  // Show equal side markers on non-parallel sides (for isosceles)
  showEqualSideMarkers?: boolean;

  // Optional caption
  caption?: string;
}

const TrapeziumAnglesVisualizer: React.FC<TrapeziumAnglesVisualizerProps> = ({
  vertexLabels = ['S', 'R', 'Q', 'P'],
  angles = [null, null, null, null],
  highlightAngles = [],
  showParallelMarkers = true,
  showAngleSumAnnotation = false,
  topSideRatio = 0.5,
  isIsosceles = false,
  showEqualSideMarkers = false,
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions
  const svgWidth = 520;
  const svgHeight = 380;

  // Trapezium dimensions
  const bottomWidth = 280;
  const clampedRatio = Math.max(0.3, Math.min(0.9, topSideRatio));
  const topWidth = bottomWidth * clampedRatio;
  const trapHeight = 150;

  // Calculate offset - centered for isosceles, or asymmetric for general
  const centerOffset = (bottomWidth - topWidth) / 2;
  const leftOffset = isIsosceles ? centerOffset : centerOffset * 0.6;

  // Calculate vertices [bottomLeft, bottomRight, topRight, topLeft]
  const bottomLeftX = 100;
  const bottomLeftY = svgHeight - 100;

  const vertices = [
    { x: bottomLeftX, y: bottomLeftY },                               // 0: bottom-left
    { x: bottomLeftX + bottomWidth, y: bottomLeftY },                 // 1: bottom-right
    { x: bottomLeftX + leftOffset + topWidth, y: bottomLeftY - trapHeight },  // 2: top-right
    { x: bottomLeftX + leftOffset, y: bottomLeftY - trapHeight }      // 3: top-left
  ];

  // Colors
  const colors = {
    shape: theme.colors.textPrimary,
    shapeFill: '#f59e0b15', // Slight orange tint
    angleArc: '#3b82f6',
    angleHighlight: '#ef4444',
    parallelMarker: '#22c55e',
    equalMarker: '#8b5cf6',
    annotationColor: '#f97316',
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

    const arcRadius = 28;

    // Calculate arc sweep for interior angle
    let startAngle = angleToPrev;
    let endAngle = angleToNext;

    let sweep = endAngle - startAngle;
    if (sweep < 0) sweep += 2 * Math.PI;
    if (sweep > Math.PI) {
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
          x={labelX - 30}
          y={labelY - 14}
          width="60"
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

  // Draw parallel markers (arrows)
  const drawParallelMarkers = (x1: number, y1: number, x2: number, y2: number) => {
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;

    // Direction vector
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / len;
    const uy = dy / len;

    // Perpendicular for arrow head
    const px = -uy * 5;
    const py = ux * 5;

    const arrowSize = 7;
    const spacing = 5;

    return (
      <g>
        {/* Double arrow markers for parallel sides */}
        <polygon
          points={`
            ${midX - spacing * ux},${midY - spacing * uy}
            ${midX - spacing * ux - arrowSize * ux + px},${midY - spacing * uy - arrowSize * uy + py}
            ${midX - spacing * ux - arrowSize * ux - px},${midY - spacing * uy - arrowSize * uy - py}
          `}
          fill={colors.parallelMarker}
        />
        <polygon
          points={`
            ${midX + spacing * ux},${midY + spacing * uy}
            ${midX + spacing * ux - arrowSize * ux + px},${midY + spacing * uy - arrowSize * uy + py}
            ${midX + spacing * ux - arrowSize * ux - px},${midY + spacing * uy - arrowSize * uy - py}
          `}
          fill={colors.parallelMarker}
        />
      </g>
    );
  };

  // Draw equal side markers (for isosceles trapezium)
  const drawEqualMarkers = (x1: number, y1: number, x2: number, y2: number) => {
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;

    // Perpendicular direction
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const px = -dy / len;
    const py = dx / len;

    const tickLength = 10;

    return (
      <line
        x1={midX - tickLength * px}
        y1={midY - tickLength * py}
        x2={midX + tickLength * px}
        y2={midY + tickLength * py}
        stroke={colors.equalMarker}
        strokeWidth="3"
      />
    );
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
        {/* Trapezium shape */}
        <polygon
          points={vertices.map(v => `${v.x},${v.y}`).join(' ')}
          fill={colors.shapeFill}
          stroke={colors.shape}
          strokeWidth="2.5"
        />

        {/* Parallel markers on top and bottom sides (the ONE pair of parallel sides) */}
        {showParallelMarkers && (
          <>
            {/* Bottom side */}
            {drawParallelMarkers(vertices[0].x, vertices[0].y, vertices[1].x, vertices[1].y)}
            {/* Top side */}
            {drawParallelMarkers(vertices[3].x, vertices[3].y, vertices[2].x, vertices[2].y)}
          </>
        )}

        {/* Equal side markers for isosceles trapezium */}
        {showEqualSideMarkers && isIsosceles && (
          <>
            {/* Left slant side */}
            {drawEqualMarkers(vertices[0].x, vertices[0].y, vertices[3].x, vertices[3].y)}
            {/* Right slant side */}
            {drawEqualMarkers(vertices[1].x, vertices[1].y, vertices[2].x, vertices[2].y)}
          </>
        )}

        {/* Angle arcs and labels */}
        {angles.map((angle, index) => drawAngleArc(index, angle))}

        {/* Angle sum annotation */}
        {showAngleSumAnnotation && (
          <>
            {/* Left side annotation */}
            <foreignObject
              x={vertices[0].x - 70}
              y={(vertices[0].y + vertices[3].y) / 2 - 12}
              width="60"
              height="24"
            >
              <div style={{
                fontSize: '11px',
                color: colors.annotationColor,
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                = 180°
              </div>
            </foreignObject>
            {/* Right side annotation */}
            <foreignObject
              x={vertices[1].x + 15}
              y={(vertices[1].y + vertices[2].y) / 2 - 12}
              width="60"
              height="24"
            >
              <div style={{
                fontSize: '11px',
                color: colors.annotationColor,
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                = 180°
              </div>
            </foreignObject>
          </>
        )}

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

export default TrapeziumAnglesVisualizer;
