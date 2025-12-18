/**
 * RhombusAnglesVisualizer
 *
 * Displays a rhombus with angle labels at vertices for teaching angle properties.
 * Designed for P5 students learning:
 * - A rhombus has 4 EQUAL sides (key difference from parallelogram)
 * - Opposite angles are equal
 * - Adjacent angles sum to 180°
 * - Two pairs of parallel sides
 *
 * Simple parameters for easy AI usage.
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface RhombusAnglesVisualizerProps {
  // Vertex labels at corners [top, right, bottom, left] for diamond orientation
  // or [bottomLeft, bottomRight, topRight, topLeft] for tilted orientation
  vertexLabels?: [string, string, string, string];

  // Angle labels/values at each vertex (same order as vertexLabels)
  // Use string for labels like '135°', 'e', '∠GHF', or null to hide
  angles?: [string | null, string | null, string | null, string | null];

  // Which angles to highlight (indices 0-3)
  highlightAngles?: number[];

  // Orientation: 'diamond' (standing on corner) or 'tilted' (like parallelogram)
  orientation?: 'diamond' | 'tilted';

  // Aspect ratio - how stretched the rhombus is (0.3 to 1.0, default 0.6)
  // Lower = more stretched horizontally, 1.0 = square
  aspectRatio?: number;

  // Show equal side markers (tick marks on ALL 4 sides) - KEY for rhombus!
  showEqualSideMarkers?: boolean;

  // Show parallel side markers (arrows)
  showParallelMarkers?: boolean;

  // Optional caption
  caption?: string;
}

const RhombusAnglesVisualizer: React.FC<RhombusAnglesVisualizerProps> = ({
  vertexLabels = ['E', 'F', 'G', 'H'],
  angles = [null, null, null, null],
  highlightAngles = [],
  orientation = 'diamond',
  aspectRatio = 0.6,
  showEqualSideMarkers = true,
  showParallelMarkers = true,
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions
  const svgWidth = 500;
  const svgHeight = 300;

  // Rhombus dimensions
  const sideLength = 120;
  const clampedRatio = Math.max(0.3, Math.min(1.0, aspectRatio));

  // Calculate vertices based on orientation
  // For a rhombus, ALL 4 SIDES MUST BE EQUAL - this is the key property!
  let vertices: { x: number; y: number }[];

  if (orientation === 'diamond') {
    // Diamond orientation - standing on a corner
    // Vertex order: [top, right, bottom, left]
    const centerX = svgWidth / 2;
    const centerY = svgHeight / 2;

    // Calculate half-diagonals from aspectRatio
    // For a rhombus with side s and acute angle α:
    // horizontal half-diagonal = s * cos(α/2)
    // vertical half-diagonal = s * sin(α/2)
    const halfWidth = sideLength * (1 / clampedRatio) * 0.7;
    const halfHeight = sideLength * clampedRatio * 0.9;

    vertices = [
      { x: centerX, y: centerY - halfHeight },           // 0: top
      { x: centerX + halfWidth, y: centerY },            // 1: right
      { x: centerX, y: centerY + halfHeight },           // 2: bottom
      { x: centerX - halfWidth, y: centerY }             // 3: left
    ];
  } else {
    // Tilted orientation - a proper rhombus (NOT a generic parallelogram!)
    // All 4 sides MUST be equal length
    // Vertex order: [bottomLeft, bottomRight, topRight, topLeft]
    //
    // PDF examples show rhombuses with acute angles around 45-55°:
    // - TUVW (page 7): 45° acute angles
    // - PQRS (page 9): 55° acute angle at P

    const side = 130;  // Side length - all sides are this length
    const acuteAngle = (50 * Math.PI) / 180;  // 50 degrees - the acute interior angle

    // For a tilted rhombus, the left side rises at angle (180° - acute)/2 from horizontal
    // But simpler: we place vertices to create the desired acute angle
    const tiltAngle = acuteAngle;  // Angle of left side with horizontal = acute angle

    // Calculate the horizontal and vertical components
    const dx = side * Math.cos(tiltAngle);  // Horizontal offset for the tilt
    const dy = side * Math.sin(tiltAngle);  // Vertical height

    const bottomLeftX = 110;
    const bottomLeftY = svgHeight - 60 - dy / 2; // Center vertically

    // For a proper rhombus with all sides = 'side':
    // BL → BR: horizontal, length = side
    // BL → TL: at angle tiltAngle, length = side
    // BR → TR: at angle tiltAngle, length = side
    // TL → TR: horizontal, length = side
    vertices = [
      { x: bottomLeftX, y: bottomLeftY },                          // 0: bottom-left (acute angle)
      { x: bottomLeftX + side, y: bottomLeftY },                   // 1: bottom-right (obtuse angle)
      { x: bottomLeftX + side + dx, y: bottomLeftY - dy },         // 2: top-right (acute angle)
      { x: bottomLeftX + dx, y: bottomLeftY - dy }                 // 3: top-left (obtuse angle)
    ];
  }

  // Colors
  const colors = {
    shape: theme.colors.textPrimary,
    shapeFill: '#22c55e15', // Slight green tint to differentiate from parallelogram
    angleArc: '#3b82f6',
    angleHighlight: '#ef4444',
    parallelMarker: '#22c55e',
    equalMarker: '#f59e0b', // Orange for equal sides - distinctive!
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

    // Label position - INSIDE the shape, near the angle arc
    // Calculate center of shape to determine inward direction
    const centerX = vertices.reduce((sum, v) => sum + v.x, 0) / 4;
    const centerY = vertices.reduce((sum, v) => sum + v.y, 0) / 4;

    // Direction from vertex toward center (inward)
    const towardCenterX = centerX - vertex.x;
    const towardCenterY = centerY - vertex.y;
    const distToCenter = Math.sqrt(towardCenterX * towardCenterX + towardCenterY * towardCenterY);

    // Position label inside the shape, along the angle bisector direction but toward center
    const labelDistance = 45; // Distance from vertex toward center
    const labelX = vertex.x + (towardCenterX / distToCenter) * labelDistance;
    const labelY = vertex.y + (towardCenterY / distToCenter) * labelDistance;

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

  // Draw equal side markers (tick marks) - ALL 4 sides get the SAME mark
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

    // Single tick mark (same on all sides = all equal)
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

  // Draw parallel markers (arrows)
  const drawParallelMarkers = (x1: number, y1: number, x2: number, y2: number, markerType: 'single' | 'double') => {
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
    const spacing = markerType === 'double' ? 5 : 0;

    return (
      <g>
        <polygon
          points={`
            ${midX - spacing * ux},${midY - spacing * uy}
            ${midX - spacing * ux - arrowSize * ux + px},${midY - spacing * uy - arrowSize * uy + py}
            ${midX - spacing * ux - arrowSize * ux - px},${midY - spacing * uy - arrowSize * uy - py}
          `}
          fill={colors.parallelMarker}
        />
        {markerType === 'double' && (
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
        {/* Rhombus shape */}
        <polygon
          points={vertices.map(v => `${v.x},${v.y}`).join(' ')}
          fill={colors.shapeFill}
          stroke={colors.shape}
          strokeWidth="2.5"
        />

        {/* Equal side markers on ALL 4 sides (key rhombus property!) */}
        {showEqualSideMarkers && (
          <>
            {drawEqualMarkers(vertices[0].x, vertices[0].y, vertices[1].x, vertices[1].y)}
            {drawEqualMarkers(vertices[1].x, vertices[1].y, vertices[2].x, vertices[2].y)}
            {drawEqualMarkers(vertices[2].x, vertices[2].y, vertices[3].x, vertices[3].y)}
            {drawEqualMarkers(vertices[3].x, vertices[3].y, vertices[0].x, vertices[0].y)}
          </>
        )}

        {/* Parallel side markers */}
        {showParallelMarkers && (
          orientation === 'diamond' ? (
            <>
              {/* For diamond: top-right // bottom-left, top-left // bottom-right */}
              {drawParallelMarkers(vertices[0].x, vertices[0].y, vertices[1].x, vertices[1].y, 'single')}
              {drawParallelMarkers(vertices[2].x, vertices[2].y, vertices[3].x, vertices[3].y, 'single')}
              {drawParallelMarkers(vertices[1].x, vertices[1].y, vertices[2].x, vertices[2].y, 'double')}
              {drawParallelMarkers(vertices[3].x, vertices[3].y, vertices[0].x, vertices[0].y, 'double')}
            </>
          ) : (
            <>
              {/* For tilted: same as parallelogram */}
              {drawParallelMarkers(vertices[0].x, vertices[0].y, vertices[1].x, vertices[1].y, 'single')}
              {drawParallelMarkers(vertices[3].x, vertices[3].y, vertices[2].x, vertices[2].y, 'single')}
              {drawParallelMarkers(vertices[0].x, vertices[0].y, vertices[3].x, vertices[3].y, 'double')}
              {drawParallelMarkers(vertices[1].x, vertices[1].y, vertices[2].x, vertices[2].y, 'double')}
            </>
          )
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
          const offsetX = (dx / dist) * 28;
          const offsetY = (dy / dist) * 28;

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

export default RhombusAnglesVisualizer;
