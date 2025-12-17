/**
 * Adjacent Triangles Visualizer
 *
 * Draws two triangles that share a common side.
 * Perfect for P5 triangle problems where students need to:
 * - Find angles using properties of both triangles
 * - Apply equilateral/isosceles properties across adjacent shapes
 * - Combine angle sum property with other angle relationships
 *
 * Examples:
 * - Equilateral triangle PQR adjacent to triangle QRS
 * - Isosceles triangle ABD with point C on extended line AB
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface TriangleConfig {
  vertices: [string, string, string]; // Vertex labels in order
  angles?: [number | null, number | null, number | null]; // Angles at each vertex
  angleLabels?: [string | null, string | null, string | null]; // Custom labels for angles
  type?: 'equilateral' | 'isosceles' | 'right' | 'general';
  showEqualSides?: boolean; // Show tick marks on equal sides
}

interface AdjacentTrianglesVisualizerProps {
  // First triangle (positioned at top or left)
  triangle1: TriangleConfig;

  // Second triangle (shares one side with first)
  triangle2: TriangleConfig;

  // Which vertices form the shared side (must be 2 vertices present in both triangles)
  sharedVertices: [string, string];

  // Layout options
  layout?: 'vertical' | 'horizontal'; // How triangles are arranged
  triangle2Position?: 'below' | 'above' | 'left' | 'right'; // Position of second triangle relative to first

  // Highlighting
  highlightAngle?: string; // Vertex label to highlight the angle at
  highlightSide?: [string, string]; // Two vertex labels to highlight a side

  // Display options
  showAngles?: boolean;
  showAllAngles?: boolean; // Show angles even if not specified

  caption?: string;
}

const AdjacentTrianglesVisualizer: React.FC<AdjacentTrianglesVisualizerProps> = ({
  triangle1,
  triangle2,
  sharedVertices,
  layout = 'vertical',
  triangle2Position = 'below',
  highlightAngle,
  highlightSide,
  showAngles = true,
  showAllAngles = false,
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions
  const svgWidth = 450;
  const svgHeight = 380;
  // const padding = 50; // Reserved for future use

  // Colors
  const colors = {
    triangle1Fill: 'rgba(99, 102, 241, 0.1)',
    triangle2Fill: 'rgba(245, 158, 11, 0.1)',
    stroke: theme.colors.textPrimary,
    highlight: '#FF6B6B',
    angle: '#3498DB',
    rightAngle: '#27AE60',
    tickMark: theme.colors.textPrimary,
    vertex: theme.colors.brand,
  };

  // Calculate all unique vertices and their positions
  const allVertices = new Set([
    ...triangle1.vertices,
    ...triangle2.vertices
  ]);

  // Position calculations
  // We'll place the shared side horizontally in the middle
  const sharedMidX = svgWidth / 2;
  const sharedY = svgHeight / 2;
  const sharedLength = 140;

  // Calculate vertex positions
  const vertexPositions: Record<string, { x: number; y: number }> = {};

  // Place shared vertices first
  const [shared1, shared2] = sharedVertices;
  vertexPositions[shared1] = { x: sharedMidX - sharedLength / 2, y: sharedY };
  vertexPositions[shared2] = { x: sharedMidX + sharedLength / 2, y: sharedY };

  // Find the non-shared vertices
  const t1NonShared = triangle1.vertices.find(v => !sharedVertices.includes(v))!;
  const t2NonShared = triangle2.vertices.find(v => !sharedVertices.includes(v))!;

  // Calculate triangle heights based on type
  const getTriangleHeight = (type?: string) => {
    if (type === 'equilateral') return sharedLength * Math.sqrt(3) / 2;
    if (type === 'isosceles') return sharedLength * 0.8;
    return sharedLength * 0.7;
  };

  const t1Height = getTriangleHeight(triangle1.type);
  const t2Height = getTriangleHeight(triangle2.type);

  // Position non-shared vertices based on layout
  if (layout === 'vertical' || triangle2Position === 'below' || triangle2Position === 'above') {
    // Triangle 1's apex above the shared side
    vertexPositions[t1NonShared] = {
      x: sharedMidX + (triangle1.type === 'right' ? -sharedLength / 2 : 0),
      y: sharedY - t1Height
    };

    // Triangle 2's apex below the shared side
    vertexPositions[t2NonShared] = {
      x: sharedMidX + (triangle2.type === 'right' ? sharedLength / 2 : 0),
      y: sharedY + t2Height
    };
  } else {
    // Horizontal layout
    vertexPositions[t1NonShared] = {
      x: sharedMidX - sharedLength / 2 - t1Height,
      y: sharedY
    };
    vertexPositions[t2NonShared] = {
      x: sharedMidX + sharedLength / 2 + t2Height,
      y: sharedY
    };
  }

  // Helper to get vertices for a triangle
  const getTrianglePoints = (vertices: [string, string, string]) => {
    return vertices.map(v => vertexPositions[v]);
  };

  // Helper to draw angle arc
  const drawAngleArc = (
    vertex: { x: number; y: number },
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    radius: number = 25,
    _isHighlighted: boolean = false // Prefixed with _ to indicate intentionally unused
  ): string => {
    const angle1 = Math.atan2(p1.y - vertex.y, p1.x - vertex.x);
    const angle2 = Math.atan2(p2.y - vertex.y, p2.x - vertex.x);

    const startX = vertex.x + radius * Math.cos(angle1);
    const startY = vertex.y + radius * Math.sin(angle1);
    const endX = vertex.x + radius * Math.cos(angle2);
    const endY = vertex.y + radius * Math.sin(angle2);

    let deltaAngle = angle2 - angle1;
    while (deltaAngle > Math.PI) deltaAngle -= 2 * Math.PI;
    while (deltaAngle < -Math.PI) deltaAngle += 2 * Math.PI;

    const absAngle = Math.abs(deltaAngle);
    const largeArcFlag = absAngle > Math.PI ? 1 : 0;
    const sweepFlag = deltaAngle > 0 ? 1 : 0;

    return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}`;
  };

  // Helper to get angle label position
  const getAngleLabelPosition = (
    vertex: { x: number; y: number },
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    distance: number = 40
  ): { x: number; y: number } => {
    const angle1 = Math.atan2(p1.y - vertex.y, p1.x - vertex.x);
    const angle2 = Math.atan2(p2.y - vertex.y, p2.x - vertex.x);

    let deltaAngle = angle2 - angle1;
    while (deltaAngle > Math.PI) deltaAngle -= 2 * Math.PI;
    while (deltaAngle < -Math.PI) deltaAngle += 2 * Math.PI;

    const bisectorAngle = angle1 + deltaAngle / 2;

    return {
      x: vertex.x + distance * Math.cos(bisectorAngle),
      y: vertex.y + distance * Math.sin(bisectorAngle)
    };
  };

  // Helper to draw right angle marker
  const drawRightAngleMarker = (
    vertex: { x: number; y: number },
    p1: { x: number; y: number },
    p2: { x: number; y: number }
  ): string => {
    const size = 10;

    const dx1 = p1.x - vertex.x;
    const dy1 = p1.y - vertex.y;
    const len1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
    const ux1 = dx1 / len1;
    const uy1 = dy1 / len1;

    const dx2 = p2.x - vertex.x;
    const dy2 = p2.y - vertex.y;
    const len2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
    const ux2 = dx2 / len2;
    const uy2 = dy2 / len2;

    const corner1 = { x: vertex.x + ux1 * size, y: vertex.y + uy1 * size };
    const corner2 = { x: vertex.x + ux2 * size, y: vertex.y + uy2 * size };
    const innerCorner = {
      x: vertex.x + ux1 * size + ux2 * size,
      y: vertex.y + uy1 * size + uy2 * size
    };

    return `M ${corner1.x} ${corner1.y} L ${innerCorner.x} ${innerCorner.y} L ${corner2.x} ${corner2.y}`;
  };

  // Helper to draw tick marks on a side
  const drawTickMarks = (
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    numTicks: number = 1
  ): React.ReactNode => {
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;

    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const perpX = -dy / length;
    const perpY = dx / length;

    const tickLength = 6;
    const tickSpacing = 5;

    const ticks: React.ReactNode[] = [];

    for (let i = 0; i < numTicks; i++) {
      const offset = (i - (numTicks - 1) / 2) * tickSpacing;
      const tickMidX = midX + (dx / length) * offset;
      const tickMidY = midY + (dy / length) * offset;

      ticks.push(
        <line
          key={`tick-${i}`}
          x1={tickMidX + perpX * tickLength}
          y1={tickMidY + perpY * tickLength}
          x2={tickMidX - perpX * tickLength}
          y2={tickMidY - perpY * tickLength}
          stroke={colors.tickMark}
          strokeWidth="2"
        />
      );
    }

    return <g>{ticks}</g>;
  };

  // Render a triangle
  const renderTriangle = (
    config: TriangleConfig,
    fillColor: string,
    triangleIndex: number
  ) => {
    const points = getTrianglePoints(config.vertices);
    const pointsString = points.map(p => `${p.x},${p.y}`).join(' ');

    return (
      <g key={`triangle-${triangleIndex}`}>
        {/* Triangle fill */}
        <polygon
          points={pointsString}
          fill={fillColor}
          stroke={colors.stroke}
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Highlighted side */}
        {highlightSide && config.vertices.includes(highlightSide[0]) && config.vertices.includes(highlightSide[1]) && (
          <line
            x1={vertexPositions[highlightSide[0]].x}
            y1={vertexPositions[highlightSide[0]].y}
            x2={vertexPositions[highlightSide[1]].x}
            y2={vertexPositions[highlightSide[1]].y}
            stroke={colors.highlight}
            strokeWidth="4"
          />
        )}

        {/* Equal side marks for equilateral/isosceles */}
        {config.showEqualSides && config.type === 'equilateral' && (
          <>
            {drawTickMarks(points[0], points[1], 1)}
            {drawTickMarks(points[1], points[2], 1)}
            {drawTickMarks(points[2], points[0], 1)}
          </>
        )}
        {config.showEqualSides && config.type === 'isosceles' && (
          <>
            {/* Mark the two equal sides (sides adjacent to the apex) */}
            {drawTickMarks(points[0], points[1], 1)}
            {drawTickMarks(points[0], points[2], 1)}
          </>
        )}

        {/* Angles */}
        {showAngles && config.vertices.map((vertex, idx) => {
          const angle = config.angles?.[idx];
          const angleLabel = config.angleLabels?.[idx];

          if (!angle && !angleLabel && !showAllAngles) return null;

          const vertexPos = vertexPositions[vertex];
          const prevIdx = (idx + 2) % 3;
          const nextIdx = (idx + 1) % 3;
          const prevPos = vertexPositions[config.vertices[prevIdx]];
          const nextPos = vertexPositions[config.vertices[nextIdx]];

          const isHighlighted = highlightAngle === vertex;
          const isRightAngle = angle === 90;

          return (
            <g key={`angle-${vertex}`}>
              {isRightAngle ? (
                <path
                  d={drawRightAngleMarker(vertexPos, prevPos, nextPos)}
                  fill="none"
                  stroke={isHighlighted ? colors.highlight : colors.rightAngle}
                  strokeWidth="2"
                />
              ) : (
                <path
                  d={drawAngleArc(vertexPos, prevPos, nextPos, 25, isHighlighted)}
                  fill="none"
                  stroke={isHighlighted ? colors.highlight : colors.angle}
                  strokeWidth={isHighlighted ? 3 : 2}
                  opacity="0.8"
                />
              )}
              {(angleLabel || angle) && (
                (() => {
                  const labelPos = getAngleLabelPosition(vertexPos, prevPos, nextPos, 40);
                  return (
                    <foreignObject
                      x={labelPos.x - 25}
                      y={labelPos.y - 12}
                      width="50"
                      height="24"
                    >
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: isHighlighted ? colors.highlight : colors.angle,
                        fontSize: '13px',
                        fontWeight: 'bold'
                      }}>
                        <MathText>{angleLabel || `${angle}°`}</MathText>
                      </div>
                    </foreignObject>
                  );
                })()
              )}
            </g>
          );
        })}
      </g>
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
        {/* Render triangles */}
        {renderTriangle(triangle1, colors.triangle1Fill, 1)}
        {renderTriangle(triangle2, colors.triangle2Fill, 2)}

        {/* Vertex labels */}
        {Array.from(allVertices).map(vertex => {
          const pos = vertexPositions[vertex];
          if (!pos) return null;

          // Determine label offset based on position
          let offsetX = 0;
          let offsetY = -15;

          // If vertex is at bottom, put label below
          if (pos.y > sharedY) {
            offsetY = 20;
          }
          // If vertex is on left, offset left
          if (pos.x < sharedMidX - sharedLength / 4) {
            offsetX = -10;
          }
          // If vertex is on right, offset right
          if (pos.x > sharedMidX + sharedLength / 4) {
            offsetX = 10;
          }

          return (
            <g key={`vertex-${vertex}`}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r="4"
                fill={colors.vertex}
              />
              <text
                x={pos.x + offsetX}
                y={pos.y + offsetY}
                fill={theme.colors.textPrimary}
                fontSize="16"
                fontWeight="bold"
                textAnchor="middle"
              >
                {vertex}
              </text>
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

export default AdjacentTrianglesVisualizer;
