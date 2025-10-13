/**
 * Extended Line Triangle Visualizer
 *
 * Draws a triangle with one side extended beyond a vertex to show exterior angles.
 * Useful for problems involving exterior angles and their trigonometric ratios.
 *
 * Example: Triangle ABC with side BC extended to point D, forming exterior angle ∠ACD
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface ExtendedLineTriangleVisualizerProps {
  // Vertex labels (e.g., "A", "B", "C", "D")
  vertexA?: string;
  vertexB?: string;
  vertexC?: string;
  vertexD?: string; // Extended point

  // Side lengths as labels
  sideAB?: string; // Side from A to B
  sideBC?: string; // Side from B to C
  sideAC?: string; // Side from A to C (hypotenuse if right triangle)

  // Angles in degrees
  angleAtA?: number; // Angle at vertex A
  angleAtB?: number; // Angle at vertex B (often 90° for right triangle)
  interiorAngleAtC?: number; // Interior angle BCA (θ)

  // Angle labels (override default degree display)
  interiorAngleLabel?: string; // e.g., "θ" or "45°"
  exteriorAngleLabel?: string; // e.g., "find this" or leave empty

  // Display options
  showRightAngle?: boolean; // Show right angle marker at B
  showInteriorAngle?: boolean; // Show interior angle at C
  showExteriorAngle?: boolean; // Show exterior angle at C
  highlightExteriorAngle?: boolean; // Highlight the exterior angle

  // Extension length
  extensionLength?: number; // How far to extend the line (default: 60)

  // Orientation
  rotation?: number; // Rotation angle in degrees (0 = standard, 90 = rotated 90° clockwise, etc.)

  caption?: string;
}

const ExtendedLineTriangleVisualizer: React.FC<ExtendedLineTriangleVisualizerProps> = ({
  vertexA = 'A',
  vertexB = 'B',
  vertexC = 'C',
  vertexD = 'D',
  sideAB,
  sideBC,
  sideAC,
  angleAtA,
  angleAtB = 90, // Default to right angle at B
  interiorAngleAtC,
  interiorAngleLabel,
  exteriorAngleLabel,
  showRightAngle = true,
  showInteriorAngle = true,
  showExteriorAngle = true,
  highlightExteriorAngle = false,
  extensionLength = 60,
  rotation = 0,
  caption
}) => {
  const { theme } = useTheme();

  // ============================================
  // CALCULATE TRIANGLE GEOMETRY
  // ============================================

  // SVG dimensions
  const svgWidth = 500;
  const svgHeight = 320;

  // Center point for rotation
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;

  // Calculate the third angle if not provided
  let calcAngleAtA = angleAtA ?? 180 - angleAtB - (interiorAngleAtC ?? 60);
  let calcInteriorAngleAtC = interiorAngleAtC ?? 180 - angleAtB - calcAngleAtA;

  // Triangle base and height
  const baseLength = 180; // Length of AB (base) - reduced for better fit
  const triangleHeight = baseLength * Math.tan((calcAngleAtA * Math.PI) / 180);

  // Position vertices CENTERED in canvas
  // Calculate triangle center to position it in the middle
  const triangleBaseY = centerY + 40; // Slight offset below center
  const vertexBPos = { x: centerX - baseLength / 2, y: triangleBaseY };
  const vertexAPos = { x: centerX + baseLength / 2, y: triangleBaseY };

  // C is above B, forming the right angle at B
  const vertexCPos = {
    x: vertexBPos.x,
    y: vertexBPos.y - triangleHeight
  };

  // D is the extension of line BC beyond C
  // Calculate direction from B to C
  const bcDirX = vertexCPos.x - vertexBPos.x;
  const bcDirY = vertexCPos.y - vertexBPos.y;
  const bcLength = Math.sqrt(bcDirX * bcDirX + bcDirY * bcDirY);
  const bcUnitX = bcDirX / bcLength;
  const bcUnitY = bcDirY / bcLength;

  // Extend from C to D
  const vertexDPos = {
    x: vertexCPos.x + bcUnitX * extensionLength,
    y: vertexCPos.y + bcUnitY * extensionLength
  };

  // Calculate actual side lengths for display
  const actualSideBC = Math.sqrt(
    Math.pow(vertexCPos.x - vertexBPos.x, 2) +
    Math.pow(vertexCPos.y - vertexBPos.y, 2)
  );
  const actualSideAC = Math.sqrt(
    Math.pow(vertexCPos.x - vertexAPos.x, 2) +
    Math.pow(vertexCPos.y - vertexAPos.y, 2)
  );

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
    interiorAngle: '#3498DB',
    exteriorAngle: highlightExteriorAngle ? '#FF6B6B' : '#9B59B6',
    rightAngle: '#27AE60',
  };

  // ============================================
  // ANGLE ARC HELPERS
  // ============================================

  const createAngleArc = (
    vertex: { x: number; y: number },
    startPoint: { x: number; y: number },
    endPoint: { x: number; y: number },
    radius: number = 35
  ): string => {
    const startAngle = Math.atan2(startPoint.y - vertex.y, startPoint.x - vertex.x);
    const endAngle = Math.atan2(endPoint.y - vertex.y, endPoint.x - vertex.x);

    const startX = vertex.x + radius * Math.cos(startAngle);
    const startY = vertex.y + radius * Math.sin(startAngle);
    const endX = vertex.x + radius * Math.cos(endAngle);
    const endY = vertex.y + radius * Math.sin(endAngle);

    let deltaAngle = endAngle - startAngle;
    while (deltaAngle > Math.PI) deltaAngle -= 2 * Math.PI;
    while (deltaAngle < -Math.PI) deltaAngle += 2 * Math.PI;

    const absAngle = Math.abs(deltaAngle);
    const largeArcFlag = absAngle > Math.PI ? 1 : 0;
    const sweepFlag = deltaAngle > 0 ? 1 : 0;

    return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}`;
  };

  const getAngleLabelPosition = (
    vertex: { x: number; y: number },
    point1: { x: number; y: number },
    point2: { x: number; y: number },
    distance: number = 50
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
        {/* Apply rotation transform to entire triangle group */}
        <g transform={`rotate(${rotation}, ${centerX}, ${centerY})`}>
        {/* ============================================ */}
        {/* EXTENDED LINE (B → C → D) */}
        {/* ============================================ */}
        <line
          x1={vertexBPos.x}
          y1={vertexBPos.y}
          x2={vertexDPos.x}
          y2={vertexDPos.y}
          stroke={colors.extension}
          strokeWidth="2"
          strokeDasharray="none"
        />

        {/* ============================================ */}
        {/* TRIANGLE SIDES */}
        {/* ============================================ */}
        {/* Side AB (base) */}
        <line
          x1={vertexAPos.x}
          y1={vertexAPos.y}
          x2={vertexBPos.x}
          y2={vertexBPos.y}
          stroke={colors.triangle}
          strokeWidth="3"
        />

        {/* Side AC (hypotenuse) */}
        <line
          x1={vertexAPos.x}
          y1={vertexAPos.y}
          x2={vertexCPos.x}
          y2={vertexCPos.y}
          stroke={colors.triangle}
          strokeWidth="3"
        />

        {/* Side BC - already drawn as part of extended line, just make it bolder */}
        <line
          x1={vertexBPos.x}
          y1={vertexBPos.y}
          x2={vertexCPos.x}
          y2={vertexCPos.y}
          stroke={colors.triangle}
          strokeWidth="3"
        />

        {/* ============================================ */}
        {/* SIDE LABELS */}
        {/* ============================================ */}
        {sideAB && (
          <foreignObject
            x={(vertexAPos.x + vertexBPos.x) / 2 - 40}
            y={vertexAPos.y + 15}
            width="80"
            height="30"
          >
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: colors.triangle,
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              <MathText>{ensureLatexWrapped(sideAB)}</MathText>
            </div>
          </foreignObject>
        )}

        {sideBC && (
          <foreignObject
            x={vertexBPos.x - 60}
            y={(vertexBPos.y + vertexCPos.y) / 2 - 15}
            width="80"
            height="30"
          >
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: colors.triangle,
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              <MathText>{ensureLatexWrapped(sideBC)}</MathText>
            </div>
          </foreignObject>
        )}

        {sideAC && (
          <foreignObject
            x={(vertexAPos.x + vertexCPos.x) / 2 + 5}
            y={(vertexAPos.y + vertexCPos.y) / 2 - 25}
            width="80"
            height="30"
          >
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: colors.triangle,
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              <MathText>{ensureLatexWrapped(sideAC)}</MathText>
            </div>
          </foreignObject>
        )}

        {/* ============================================ */}
        {/* RIGHT ANGLE MARKER AT B */}
        {/* ============================================ */}
        {showRightAngle && angleAtB === 90 && (
          <>
            <rect
              x={vertexBPos.x}
              y={vertexBPos.y - 15}
              width="15"
              height="15"
              fill="none"
              stroke={colors.rightAngle}
              strokeWidth="2"
            />
          </>
        )}

        {/* ============================================ */}
        {/* INTERIOR ANGLE AT C (θ) */}
        {/* ============================================ */}
        {showInteriorAngle && (
          <>
            <path
              d={createAngleArc(vertexCPos, vertexBPos, vertexAPos, 35)}
              fill="none"
              stroke={colors.interiorAngle}
              strokeWidth="2.5"
              opacity="0.8"
            />
            {(() => {
              const labelPos = getAngleLabelPosition(vertexCPos, vertexBPos, vertexAPos, 50);
              return (
                <foreignObject
                  x={labelPos.x - 30}
                  y={labelPos.y - 15}
                  width="60"
                  height="30"
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: colors.interiorAngle,
                    fontSize: '15px',
                    fontWeight: 'bold'
                  }}>
                    <MathText>
                      {ensureLatexWrapped(interiorAngleLabel || `θ`)}
                    </MathText>
                  </div>
                </foreignObject>
              );
            })()}
          </>
        )}

        {/* ============================================ */}
        {/* EXTERIOR ANGLE AT C */}
        {/* ============================================ */}
        {showExteriorAngle && (
          <>
            <path
              d={createAngleArc(vertexCPos, vertexAPos, vertexDPos, 45)}
              fill="none"
              stroke={colors.exteriorAngle}
              strokeWidth={highlightExteriorAngle ? 3.5 : 2.5}
              opacity="0.9"
            />
            {exteriorAngleLabel && (() => {
              const labelPos = getAngleLabelPosition(vertexCPos, vertexAPos, vertexDPos, 60);
              return (
                <foreignObject
                  x={labelPos.x - 40}
                  y={labelPos.y - 15}
                  width="80"
                  height="30"
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: colors.exteriorAngle,
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    <MathText>{ensureLatexWrapped(exteriorAngleLabel)}</MathText>
                  </div>
                </foreignObject>
              );
            })()}
          </>
        )}

        {/* ============================================ */}
        {/* VERTEX LABELS */}
        {/* ============================================ */}
        <circle cx={vertexAPos.x} cy={vertexAPos.y} r="4" fill={colors.primary} />
        <text
          x={vertexAPos.x}
          y={vertexAPos.y + 20}
          fill={theme.colors.textPrimary}
          fontSize="18"
          fontWeight="bold"
          textAnchor="middle"
        >
          {vertexA}
        </text>

        <circle cx={vertexBPos.x} cy={vertexBPos.y} r="4" fill={colors.primary} />
        <text
          x={vertexBPos.x - 10}
          y={vertexBPos.y + 20}
          fill={theme.colors.textPrimary}
          fontSize="18"
          fontWeight="bold"
          textAnchor="middle"
        >
          {vertexB}
        </text>

        <circle cx={vertexCPos.x} cy={vertexCPos.y} r="4" fill={colors.primary} />
        <text
          x={vertexCPos.x - 15}
          y={vertexCPos.y}
          fill={theme.colors.textPrimary}
          fontSize="18"
          fontWeight="bold"
          textAnchor="middle"
        >
          {vertexC}
        </text>

        <circle cx={vertexDPos.x} cy={vertexDPos.y} r="4" fill={colors.extension} />
        <text
          x={vertexDPos.x - 10}
          y={vertexDPos.y - 10}
          fill={theme.colors.textPrimary}
          fontSize="18"
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
