/**
 * Extended Line Triangle Visualizer
 *
 * Draws a triangle with one side extended beyond a vertex to form a straight line.
 * Essential for P5 "Finding Unknown Angles" problems where students must combine:
 * - Angle sum in triangle = 180°
 * - Angles on a straight line = 180°
 *
 * Example: Triangle ACD with line BCD being straight (D-C-B collinear)
 * Student finds angle x using both properties.
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface ExtendedLineTriangleVisualizerProps {
  // Vertex labels for the triangle (required)
  vertexA?: string;  // Apex vertex (typically at top)
  vertexB?: string;  // Base vertex 1
  vertexC?: string;  // Base vertex 2

  // The extended point label
  vertexD?: string;

  // Which side to extend and in which direction
  // Format: 'XY' means extend side XY beyond vertex Y
  // Options: 'BC', 'CB', 'AC', 'CA', 'AB', 'BA'
  extendedSide?: 'BC' | 'CB' | 'AC' | 'CA' | 'AB' | 'BA';

  // Angles at each vertex (in degrees)
  angleA?: number | null;  // Angle at vertex A
  angleB?: number | null;  // Angle at vertex B
  angleC?: number | null;  // Angle at vertex C

  // Custom angle labels (override calculated values)
  angleA_label?: string;
  angleB_label?: string;
  angleC_label?: string;
  exteriorAngle_label?: string;  // Label for the exterior angle at extension point

  // Side labels
  sideAB?: string;
  sideBC?: string;
  sideAC?: string;

  // Display options
  showAngleA?: boolean;
  showAngleB?: boolean;
  showAngleC?: boolean;
  showExteriorAngle?: boolean;
  showRightAngleMarker?: boolean;  // Show square marker for 90° angles
  highlightExteriorAngle?: boolean;

  // Extension length (how far D extends beyond the vertex)
  extensionLength?: number;

  // Rotation of entire diagram
  rotation?: number;

  caption?: string;
}

const ExtendedLineTriangleVisualizer: React.FC<ExtendedLineTriangleVisualizerProps> = ({
  vertexA = 'A',
  vertexB = 'B',
  vertexC = 'C',
  vertexD = 'D',
  extendedSide = 'BC',
  angleA = null,
  angleB = null,
  angleC = null,
  angleA_label,
  angleB_label,
  angleC_label,
  exteriorAngle_label,
  sideAB,
  sideBC,
  sideAC,
  showAngleA = true,
  showAngleB = true,
  showAngleC = true,
  showExteriorAngle = true,
  showRightAngleMarker = true,
  highlightExteriorAngle = false,
  extensionLength = 70,
  rotation = 0,
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions
  const svgWidth = 500;
  const svgHeight = 350;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;

  // Calculate angles - if not all provided, calculate from what we have
  let calcAngleA = angleA ?? 60;
  let calcAngleB = angleB ?? 60;
  let calcAngleC = angleC ?? 60;

  // If two angles provided, calculate third
  const providedCount = [angleA, angleB, angleC].filter(a => a !== null).length;
  if (providedCount === 2) {
    if (angleA === null) calcAngleA = 180 - (angleB ?? 60) - (angleC ?? 60);
    else if (angleB === null) calcAngleB = 180 - (angleA ?? 60) - (angleC ?? 60);
    else if (angleC === null) calcAngleC = 180 - (angleA ?? 60) - (angleB ?? 60);
  }

  // ============================================
  // CALCULATE VERTEX POSITIONS
  // ============================================
  // Base triangle layout: A at top, B at bottom-left, C at bottom-right
  const baseLength = 180;
  const baseY = centerY + 60;

  // Calculate triangle height based on angles
  const angleA_rad = (calcAngleA * Math.PI) / 180;
  const angleB_rad = (calcAngleB * Math.PI) / 180;

  // Position B and C on the base
  const posB = { x: centerX - baseLength / 2, y: baseY };
  const posC = { x: centerX + baseLength / 2, y: baseY };

  // Calculate A position using angle B
  // A is above the line BC
  const heightFromB = baseLength * Math.sin(angleB_rad) * Math.sin(angleA_rad) / Math.sin(Math.PI - angleA_rad - angleB_rad);
  const horizontalFromB = baseLength * Math.cos(angleB_rad) * Math.sin(angleA_rad) / Math.sin(Math.PI - angleA_rad - angleB_rad);

  const posA = {
    x: posB.x + horizontalFromB,
    y: posB.y - Math.abs(heightFromB)
  };

  // ============================================
  // CALCULATE EXTENSION POINT D
  // ============================================
  let posD = { x: 0, y: 0 };
  let extendFrom = { x: 0, y: 0 };
  let extendTo = { x: 0, y: 0 };

  // Determine which side to extend and direction
  switch (extendedSide) {
    case 'BC':
      // Extend BC beyond C
      extendFrom = posB;
      extendTo = posC;
      break;
    case 'CB':
      // Extend BC beyond B
      extendFrom = posC;
      extendTo = posB;
      break;
    case 'AC':
      // Extend AC beyond C
      extendFrom = posA;
      extendTo = posC;
      break;
    case 'CA':
      // Extend AC beyond A
      extendFrom = posC;
      extendTo = posA;
      break;
    case 'AB':
      // Extend AB beyond B
      extendFrom = posA;
      extendTo = posB;
      break;
    case 'BA':
      // Extend AB beyond A
      extendFrom = posB;
      extendTo = posA;
      break;
  }

  // Calculate D position
  const dirX = extendTo.x - extendFrom.x;
  const dirY = extendTo.y - extendFrom.y;
  const length = Math.sqrt(dirX * dirX + dirY * dirY);
  const unitX = dirX / length;
  const unitY = dirY / length;

  posD = {
    x: extendTo.x + unitX * extensionLength,
    y: extendTo.y + unitY * extensionLength
  };

  // ============================================
  // HELPER FUNCTIONS
  // ============================================
  const ensureLatexWrapped = (text: string | undefined): string => {
    if (!text) return '';
    if (text.startsWith('$') && text.endsWith('$')) return text;
    if (text.includes('\\')) return `$${text}$`;
    return text;
  };

  const colors = {
    primary: theme.colors.brand,
    triangle: theme.colors.textPrimary,
    extension: theme.colors.textMuted,
    angle: '#3498DB',
    exteriorAngle: highlightExteriorAngle ? '#FF6B6B' : '#9B59B6',
    rightAngle: '#27AE60',
  };

  // Draw angle arc between two points from a vertex
  const createAngleArc = (
    vertex: { x: number; y: number },
    point1: { x: number; y: number },
    point2: { x: number; y: number },
    radius: number = 30
  ): string => {
    const angle1 = Math.atan2(point1.y - vertex.y, point1.x - vertex.x);
    const angle2 = Math.atan2(point2.y - vertex.y, point2.x - vertex.x);

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

  // Get position for angle label
  const getAngleLabelPosition = (
    vertex: { x: number; y: number },
    point1: { x: number; y: number },
    point2: { x: number; y: number },
    distance: number = 45
  ): { x: number; y: number } => {
    const angle1 = Math.atan2(point1.y - vertex.y, point1.x - vertex.x);
    const angle2 = Math.atan2(point2.y - vertex.y, point2.x - vertex.x);

    let deltaAngle = angle2 - angle1;
    while (deltaAngle > Math.PI) deltaAngle -= 2 * Math.PI;
    while (deltaAngle < -Math.PI) deltaAngle += 2 * Math.PI;

    const bisectorAngle = angle1 + deltaAngle / 2;

    return {
      x: vertex.x + distance * Math.cos(bisectorAngle),
      y: vertex.y + distance * Math.sin(bisectorAngle)
    };
  };

  // Draw right angle marker
  const drawRightAngleMarker = (
    vertex: { x: number; y: number },
    p1: { x: number; y: number },
    p2: { x: number; y: number }
  ): string => {
    const size = 12;

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

  // Check if angle is 90°
  const isRightAngle = (angle: number | null): boolean => {
    if (angle === null) return false;
    return Math.abs(angle - 90) < 0.5;
  };

  // Get the two adjacent vertices for a given vertex
  const getAdjacentVertices = (vertex: 'A' | 'B' | 'C'): [{ x: number; y: number }, { x: number; y: number }] => {
    switch (vertex) {
      case 'A': return [posB, posC];
      case 'B': return [posA, posC];
      case 'C': return [posA, posB];
    }
  };

  // Get exterior angle adjacent points (for the vertex where extension happens)
  const getExteriorAnglePoints = (): { vertex: { x: number; y: number }, p1: { x: number; y: number }, p2: { x: number; y: number } } | null => {
    if (!showExteriorAngle) return null;

    // The exterior angle is at the extension vertex, between the opposite side and the extension
    switch (extendedSide) {
      case 'BC':
        // At C: between CA and CD
        return { vertex: posC, p1: posA, p2: posD };
      case 'CB':
        // At B: between BA and BD
        return { vertex: posB, p1: posA, p2: posD };
      case 'AC':
        // At C: between CB and CD
        return { vertex: posC, p1: posB, p2: posD };
      case 'CA':
        // At A: between AB and AD
        return { vertex: posA, p1: posB, p2: posD };
      case 'AB':
        // At B: between BC and BD
        return { vertex: posB, p1: posC, p2: posD };
      case 'BA':
        // At A: between AC and AD
        return { vertex: posA, p1: posC, p2: posD };
      default:
        return null;
    }
  };

  // Render angle at a vertex
  const renderAngle = (
    vertex: 'A' | 'B' | 'C',
    angle: number | null,
    label: string | undefined,
    show: boolean
  ) => {
    if (!show || (angle === null && !label)) return null;

    const pos = vertex === 'A' ? posA : vertex === 'B' ? posB : posC;
    const [p1, p2] = getAdjacentVertices(vertex);
    const calcAngle = vertex === 'A' ? calcAngleA : vertex === 'B' ? calcAngleB : calcAngleC;
    const isRight = isRightAngle(calcAngle);

    return (
      <g key={`angle-${vertex}`}>
        {isRight && showRightAngleMarker ? (
          <path
            d={drawRightAngleMarker(pos, p1, p2)}
            fill="none"
            stroke={colors.rightAngle}
            strokeWidth="2"
          />
        ) : (
          <path
            d={createAngleArc(pos, p1, p2, 28)}
            fill="none"
            stroke={colors.angle}
            strokeWidth="2.5"
            opacity="0.8"
          />
        )}
        {(label || angle !== null) && (() => {
          const labelPos = getAngleLabelPosition(pos, p1, p2, 45);
          const displayLabel = label || (angle !== null ? `${angle}°` : '');
          return (
            <foreignObject
              x={labelPos.x - 30}
              y={labelPos.y - 12}
              width="60"
              height="24"
            >
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: isRight ? colors.rightAngle : colors.angle,
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                <MathText>{ensureLatexWrapped(displayLabel)}</MathText>
              </div>
            </foreignObject>
          );
        })()}
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
        <g transform={`rotate(${rotation}, ${centerX}, ${centerY})`}>
          {/* ============================================ */}
          {/* EXTENDED LINE */}
          {/* ============================================ */}
          <line
            x1={extendFrom.x}
            y1={extendFrom.y}
            x2={posD.x}
            y2={posD.y}
            stroke={colors.extension}
            strokeWidth="2"
          />

          {/* ============================================ */}
          {/* TRIANGLE SIDES */}
          {/* ============================================ */}
          {/* Side AB */}
          <line
            x1={posA.x} y1={posA.y}
            x2={posB.x} y2={posB.y}
            stroke={colors.triangle}
            strokeWidth="3"
          />
          {/* Side BC */}
          <line
            x1={posB.x} y1={posB.y}
            x2={posC.x} y2={posC.y}
            stroke={colors.triangle}
            strokeWidth="3"
          />
          {/* Side AC */}
          <line
            x1={posA.x} y1={posA.y}
            x2={posC.x} y2={posC.y}
            stroke={colors.triangle}
            strokeWidth="3"
          />

          {/* ============================================ */}
          {/* SIDE LABELS */}
          {/* ============================================ */}
          {sideAB && (
            <foreignObject
              x={(posA.x + posB.x) / 2 - 40}
              y={(posA.y + posB.y) / 2 - 25}
              width="80"
              height="24"
            >
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: colors.triangle,
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                <MathText>{ensureLatexWrapped(sideAB)}</MathText>
              </div>
            </foreignObject>
          )}
          {sideBC && (
            <foreignObject
              x={(posB.x + posC.x) / 2 - 40}
              y={(posB.y + posC.y) / 2 + 10}
              width="80"
              height="24"
            >
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: colors.triangle,
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                <MathText>{ensureLatexWrapped(sideBC)}</MathText>
              </div>
            </foreignObject>
          )}
          {sideAC && (
            <foreignObject
              x={(posA.x + posC.x) / 2 + 5}
              y={(posA.y + posC.y) / 2 - 25}
              width="80"
              height="24"
            >
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: colors.triangle,
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                <MathText>{ensureLatexWrapped(sideAC)}</MathText>
              </div>
            </foreignObject>
          )}

          {/* ============================================ */}
          {/* INTERIOR ANGLES */}
          {/* ============================================ */}
          {renderAngle('A', angleA, angleA_label, showAngleA)}
          {renderAngle('B', angleB, angleB_label, showAngleB)}
          {renderAngle('C', angleC, angleC_label, showAngleC)}

          {/* ============================================ */}
          {/* EXTERIOR ANGLE */}
          {/* ============================================ */}
          {(() => {
            const extAngle = getExteriorAnglePoints();
            if (!extAngle) return null;

            return (
              <g>
                <path
                  d={createAngleArc(extAngle.vertex, extAngle.p1, extAngle.p2, 40)}
                  fill="none"
                  stroke={colors.exteriorAngle}
                  strokeWidth={highlightExteriorAngle ? 3.5 : 2.5}
                  opacity="0.9"
                />
                {exteriorAngle_label && (() => {
                  const labelPos = getAngleLabelPosition(extAngle.vertex, extAngle.p1, extAngle.p2, 55);
                  return (
                    <foreignObject
                      x={labelPos.x - 35}
                      y={labelPos.y - 12}
                      width="70"
                      height="24"
                    >
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: colors.exteriorAngle,
                        fontSize: '14px',
                        fontWeight: 'bold'
                      }}>
                        <MathText>{ensureLatexWrapped(exteriorAngle_label)}</MathText>
                      </div>
                    </foreignObject>
                  );
                })()}
              </g>
            );
          })()}

          {/* ============================================ */}
          {/* VERTEX LABELS */}
          {/* ============================================ */}
          {/* Vertex A */}
          <circle cx={posA.x} cy={posA.y} r="4" fill={colors.primary} />
          <text
            x={posA.x}
            y={posA.y - 12}
            fill={theme.colors.textPrimary}
            fontSize="16"
            fontWeight="bold"
            textAnchor="middle"
          >
            {vertexA}
          </text>

          {/* Vertex B */}
          <circle cx={posB.x} cy={posB.y} r="4" fill={colors.primary} />
          <text
            x={posB.x - 15}
            y={posB.y + 5}
            fill={theme.colors.textPrimary}
            fontSize="16"
            fontWeight="bold"
            textAnchor="middle"
          >
            {vertexB}
          </text>

          {/* Vertex C */}
          <circle cx={posC.x} cy={posC.y} r="4" fill={colors.primary} />
          <text
            x={posC.x + 15}
            y={posC.y + 5}
            fill={theme.colors.textPrimary}
            fontSize="16"
            fontWeight="bold"
            textAnchor="middle"
          >
            {vertexC}
          </text>

          {/* Vertex D (extension point) */}
          <circle cx={posD.x} cy={posD.y} r="4" fill={colors.extension} />
          <text
            x={posD.x + (extendedSide.includes('B') ? -15 : 15)}
            y={posD.y + 5}
            fill={theme.colors.textPrimary}
            fontSize="16"
            fontWeight="bold"
            textAnchor="middle"
          >
            {vertexD}
          </text>
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
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default ExtendedLineTriangleVisualizer;
