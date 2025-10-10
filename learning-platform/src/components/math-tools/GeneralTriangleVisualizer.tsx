import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface GeneralTriangleVisualizerProps {
  // Side lengths (as labels, not numeric values)
  sideA?: string; // Side opposite to angle A
  sideB?: string; // Side opposite to angle B
  sideC?: string; // Side opposite to angle C

  // Angles in degrees (or null for unknown)
  angleA?: number | null; // Angle at vertex A
  angleB?: number | null; // Angle at vertex B
  angleC?: number | null; // Angle at vertex C

  // Labels for angles (e.g., "θ", "45°", "x")
  // If provided, these override the default angle value display
  angleA_label?: string;
  angleB_label?: string;
  angleC_label?: string;

  // Labels for vertices (e.g., "P", "Q", "R")
  // If not provided, defaults to "A", "B", "C"
  vertexA_label?: string;
  vertexB_label?: string;
  vertexC_label?: string;

  // Highlighting
  highlightSide?: 'a' | 'b' | 'c' | 'none';
  highlightAngle?: 'A' | 'B' | 'C' | 'none';

  // Display options
  showAngles?: boolean; // Show angle arcs and labels
  showSides?: boolean; // Show side labels
  triangleType?: 'acute' | 'obtuse' | 'right' | 'auto'; // Triangle type for better visualization

  // Optional: Show ambiguous case (two possible triangles for SSA)
  showAmbiguousCase?: boolean;

  caption?: string; // Optional caption explaining the diagram
}

const GeneralTriangleVisualizer: React.FC<GeneralTriangleVisualizerProps> = ({
  sideA = '',
  sideB = '',
  sideC = '',
  angleA = null,
  angleB = null,
  angleC = null,
  angleA_label,
  angleB_label,
  angleC_label,
  vertexA_label = 'A',
  vertexB_label = 'B',
  vertexC_label = 'C',
  highlightSide = 'none',
  highlightAngle = 'none',
  showAngles = true,
  showSides = true,
  triangleType = 'auto',
  showAmbiguousCase = false,
  caption
}) => {
  const { theme } = useTheme();

  // Helper function to ensure LaTeX expressions are properly wrapped
  const ensureLatexWrapped = (text: string | undefined): string => {
    if (!text) return '';
    // If already wrapped in $, return as-is
    if (text.startsWith('$') && text.endsWith('$')) return text;
    // If contains LaTeX commands (backslash), wrap in $
    if (text.includes('\\')) return `$${text}$`;
    // Otherwise return as-is
    return text;
  };

  // ============================================
  // CALCULATE TRIANGLE GEOMETRY
  // ============================================
  // We need at least some angle information to draw the triangle
  // Default angles if none provided (to make a valid triangle)
  let calcAngleA = angleA ?? 60;
  let calcAngleB = angleB ?? 60;
  let calcAngleC = angleC ?? 60;

  // If only one or two angles provided, calculate the third
  if (angleA !== null && angleB !== null && angleC === null) {
    calcAngleC = 180 - angleA - angleB;
  } else if (angleA !== null && angleC !== null && angleB === null) {
    calcAngleB = 180 - angleA - angleC;
  } else if (angleB !== null && angleC !== null && angleA === null) {
    calcAngleA = 180 - angleB - angleC;
  }

  // Determine triangle type based on angles
  let detectedType: 'acute' | 'obtuse' | 'right' = 'acute';
  if (Math.abs(calcAngleA - 90) < 0.1 || Math.abs(calcAngleB - 90) < 0.1 || Math.abs(calcAngleC - 90) < 0.1) {
    detectedType = 'right';
  } else if (calcAngleA > 90 || calcAngleB > 90 || calcAngleC > 90) {
    detectedType = 'obtuse';
  }

  const finalType = triangleType === 'auto' ? detectedType : triangleType;

  // ============================================
  // TRIANGLE LAYOUT
  // ============================================
  const baseLength = 220; // Length of base side (side c)
  const svgWidth = 450;
  const svgHeight = 320;
  const padding = 90; // Increased from 70 to prevent left cutoff

  // Vertex positions
  // Place vertex C at bottom left, vertex B at bottom right
  const vertexC = { x: padding, y: svgHeight - padding };
  const vertexB = { x: padding + baseLength, y: svgHeight - padding };

  // Calculate vertex A position using angles
  // From vertex C, go at angle (angleB) for some distance to reach A
  const angleB_rad = (calcAngleB * Math.PI) / 180;
  const angleC_rad = (calcAngleC * Math.PI) / 180;

  // Use law of sines to find relative side lengths
  // Let side c (base) = baseLength
  // side a / sin(A) = side c / sin(C)
  // side a = baseLength * sin(A) / sin(C)
  const sideA_visual = (baseLength * Math.sin((calcAngleA * Math.PI) / 180)) / Math.sin(angleC_rad);
  const sideB_visual = (baseLength * Math.sin(angleB_rad)) / Math.sin(angleC_rad);

  // Position vertex A relative to vertex C
  const vertexA = {
    x: vertexC.x + sideB_visual * Math.cos(angleC_rad),
    y: vertexC.y - sideB_visual * Math.sin(angleC_rad)
  };

  // ============================================
  // AMBIGUOUS CASE (SSA) - Calculate second triangle
  // ============================================
  let vertexA2: { x: number; y: number } | null = null;
  let hasAmbiguousCase = false;

  if (showAmbiguousCase) {
    // Check if we have SSA case: two sides and a non-included angle
    // We need to determine if there's a second solution
    // This occurs when we know side a, side b, and angle C (or similar combinations)

    // For the ambiguous case, we're looking for an alternate position of vertex A
    // such that the distance from A to B still equals sideA_visual

    // The second position would be a reflection across the line from C
    // Calculate using law of sines: if sin(A) has two solutions (acute and obtuse)

    // Distance from vertex B to the line from C at angle C
    const lineFromC = {
      x: vertexC.x + sideB_visual * Math.cos(angleC_rad),
      y: vertexC.y - sideB_visual * Math.sin(angleC_rad)
    };

    // Check if circle centered at B with radius sideA_visual intersects
    // the line from C at angle angleC_rad at two points

    // For simplicity, we'll calculate the alternate vertex A by reflecting
    // across the line from C to B, maintaining the distance sideA_visual from B

    // Vector from C in direction of angle C
    const dirX = Math.cos(angleC_rad);
    const dirY = -Math.sin(angleC_rad);

    // Project B onto the line from C
    const CB_x = vertexB.x - vertexC.x;
    const CB_y = vertexB.y - vertexC.y;
    const projection = CB_x * dirX + CB_y * dirY;

    // Point on line closest to B
    const closestX = vertexC.x + projection * dirX;
    const closestY = vertexC.y + projection * dirY;

    // Distance from B to the line
    const distToLine = Math.sqrt(
      Math.pow(vertexB.x - closestX, 2) + Math.pow(vertexB.y - closestY, 2)
    );

    // Check if two intersections exist
    if (distToLine < sideA_visual) {
      // Calculate the distance along the line from closest point to intersection points
      const offset = Math.sqrt(sideA_visual * sideA_visual - distToLine * distToLine);

      // Two possible points: one at +offset, one at -offset
      const point1X = closestX + offset * dirX;
      const point1Y = closestY + offset * dirY;
      const point2X = closestX - offset * dirX;
      const point2Y = closestY - offset * dirY;

      // Choose the point that's different from vertexA (within tolerance)
      const dist1 = Math.sqrt(Math.pow(point1X - vertexA.x, 2) + Math.pow(point1Y - vertexA.y, 2));
      const dist2 = Math.sqrt(Math.pow(point2X - vertexA.x, 2) + Math.pow(point2Y - vertexA.y, 2));

      if (dist1 > 5) {
        vertexA2 = { x: point1X, y: point1Y };
        hasAmbiguousCase = true;
      } else if (dist2 > 5) {
        vertexA2 = { x: point2X, y: point2Y };
        hasAmbiguousCase = true;
      }
    }
  }

  // ============================================
  // HELPER FUNCTIONS
  // ============================================

  // Calculate the bisector angle and label position for an angle at a vertex
  const getAngleLabelPosition = (
    vertex: { x: number; y: number },
    point1: { x: number; y: number },
    point2: { x: number; y: number },
    distance: number = 55
  ): { x: number; y: number } => {
    const angle1 = Math.atan2(point1.y - vertex.y, point1.x - vertex.x);
    const angle2 = Math.atan2(point2.y - vertex.y, point2.x - vertex.x);

    // Calculate the bisector angle
    let deltaAngle = angle2 - angle1;
    while (deltaAngle > Math.PI) deltaAngle -= 2 * Math.PI;
    while (deltaAngle < -Math.PI) deltaAngle += 2 * Math.PI;

    const bisectorAngle = angle1 + deltaAngle / 2;

    return {
      x: vertex.x + distance * Math.cos(bisectorAngle),
      y: vertex.y + distance * Math.sin(bisectorAngle)
    };
  };

  const createAngleArcBetweenPoints = (
    vertex: { x: number; y: number },
    point1: { x: number; y: number },
    point2: { x: number; y: number },
    radius: number = 40
  ): string => {
    // Calculate angles to both points from vertex (accounting for SVG's Y-down coordinate system)
    const angle1 = Math.atan2(point1.y - vertex.y, point1.x - vertex.x);
    const angle2 = Math.atan2(point2.y - vertex.y, point2.x - vertex.x);

    // Start and end points on the arc
    const startX = vertex.x + radius * Math.cos(angle1);
    const startY = vertex.y + radius * Math.sin(angle1);
    const endX = vertex.x + radius * Math.cos(angle2);
    const endY = vertex.y + radius * Math.sin(angle2);

    // Calculate the angle we're sweeping (in radians)
    let deltaAngle = angle2 - angle1;

    // Normalize to [-PI, PI] range
    while (deltaAngle > Math.PI) deltaAngle -= 2 * Math.PI;
    while (deltaAngle < -Math.PI) deltaAngle += 2 * Math.PI;

    // Use the absolute angle to determine large arc flag
    const absAngle = Math.abs(deltaAngle);
    const largeArcFlag = absAngle > Math.PI ? 1 : 0;

    // Sweep flag: 1 for clockwise (positive deltaAngle in SVG coords), 0 for counterclockwise
    const sweepFlag = deltaAngle > 0 ? 1 : 0;

    return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}`;
  };

  const colors = {
    primary: theme.colors.brand,
    highlight: '#FF6B6B',
    side: theme.colors.textPrimary,
    angle: '#3498DB',
    muted: theme.colors.textMuted
  };

  // Helper to get side color
  const getSideColor = (side: 'a' | 'b' | 'c') =>
    highlightSide === side ? colors.highlight : colors.side;

  // Helper to get angle color
  const getAngleColor = (angle: 'A' | 'B' | 'C') =>
    highlightAngle === angle ? colors.highlight : colors.angle;

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
        {/* ============================================ */}
        {/* TRIANGLE SIDES */}
        {/* ============================================ */}
        {/* Side a (from B to C) - opposite angle A */}
        <line
          x1={vertexB.x}
          y1={vertexB.y}
          x2={vertexC.x}
          y2={vertexC.y}
          stroke={getSideColor('a')}
          strokeWidth={highlightSide === 'a' ? 4 : 2}
        />

        {/* Side b (from A to C) - opposite angle B */}
        <line
          x1={vertexA.x}
          y1={vertexA.y}
          x2={vertexC.x}
          y2={vertexC.y}
          stroke={getSideColor('b')}
          strokeWidth={highlightSide === 'b' ? 4 : 2}
        />

        {/* Side c (from A to B) - opposite angle C */}
        <line
          x1={vertexA.x}
          y1={vertexA.y}
          x2={vertexB.x}
          y2={vertexB.y}
          stroke={getSideColor('c')}
          strokeWidth={highlightSide === 'c' ? 4 : 2}
        />

        {/* ============================================ */}
        {/* SIDE LABELS */}
        {/* ============================================ */}
        {showSides && (
          <>
            {/* Side a label (bottom) - opposite angle A */}
            {sideA && (
              <foreignObject
                x={(vertexB.x + vertexC.x) / 2 - 40}
                y={vertexC.y + 10}
                width="80"
                height="30"
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: getSideColor('a'),
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>
                  <MathText>{ensureLatexWrapped(sideA)}</MathText>
                </div>
              </foreignObject>
            )}

            {/* Side b label (left side) - opposite angle B */}
            {sideB && (
              <foreignObject
                x={(vertexA.x + vertexC.x) / 2 - 55}
                y={(vertexA.y + vertexC.y) / 2 - 15}
                width="80"
                height="30"
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: getSideColor('b'),
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>
                  <MathText>{ensureLatexWrapped(sideB)}</MathText>
                </div>
              </foreignObject>
            )}

            {/* Side c label (right side) - opposite angle C */}
            {sideC && (
              <foreignObject
                x={(vertexA.x + vertexB.x) / 2}
                y={(vertexA.y + vertexB.y) / 2 - 15}
                width="80"
                height="30"
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: getSideColor('c'),
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>
                  <MathText>{ensureLatexWrapped(sideC)}</MathText>
                </div>
              </foreignObject>
            )}
          </>
        )}

        {/* ============================================ */}
        {/* ANGLE ARCS AND LABELS */}
        {/* ============================================ */}
        {showAngles && (
          <>
            {/* Angle A (at vertex A) - between sides to B and C */}
            {(angleA !== null || angleA_label) && (() => {
              const labelPos = getAngleLabelPosition(vertexA, vertexC, vertexB, 55);
              return (
                <>
                  <path
                    d={createAngleArcBetweenPoints(vertexA, vertexC, vertexB, 40)}
                    fill="none"
                    stroke={getAngleColor('A')}
                    strokeWidth="2.5"
                    opacity="0.7"
                  />
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
                      color: getAngleColor('A'),
                      fontSize: '15px',
                      fontWeight: 'bold'
                    }}>
                      <MathText>{ensureLatexWrapped(angleA_label || `${calcAngleA.toFixed(0)}°`)}</MathText>
                    </div>
                  </foreignObject>
                </>
              );
            })()}

            {/* Angle B (at vertex B) - between sides to A and C */}
            {(angleB !== null || angleB_label) && (() => {
              const labelPos = getAngleLabelPosition(vertexB, vertexA, vertexC, 55);
              return (
                <>
                  <path
                    d={createAngleArcBetweenPoints(vertexB, vertexA, vertexC, 40)}
                    fill="none"
                    stroke={getAngleColor('B')}
                    strokeWidth="2.5"
                    opacity="0.7"
                  />
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
                      color: getAngleColor('B'),
                      fontSize: '15px',
                      fontWeight: 'bold'
                    }}>
                      <MathText>{ensureLatexWrapped(angleB_label || `${calcAngleB.toFixed(0)}°`)}</MathText>
                    </div>
                  </foreignObject>
                </>
              );
            })()}

            {/* Angle C (at vertex C) - between sides to B and A */}
            {(angleC !== null || angleC_label) && (() => {
              const labelPos = getAngleLabelPosition(vertexC, vertexB, vertexA, 55);
              return (
                <>
                  <path
                    d={createAngleArcBetweenPoints(vertexC, vertexB, vertexA, 40)}
                    fill="none"
                    stroke={getAngleColor('C')}
                    strokeWidth="2.5"
                    opacity="0.7"
                  />
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
                      color: getAngleColor('C'),
                      fontSize: '15px',
                      fontWeight: 'bold'
                    }}>
                      <MathText>{ensureLatexWrapped(angleC_label || `${calcAngleC.toFixed(0)}°`)}</MathText>
                    </div>
                  </foreignObject>
                </>
              );
            })()}
          </>
        )}

        {/* ============================================ */}
        {/* VERTEX LABELS */}
        {/* ============================================ */}
        <circle cx={vertexA.x} cy={vertexA.y} r="4" fill={colors.primary} />
        <text
          x={vertexA.x}
          y={vertexA.y - 10}
          fill={theme.colors.textPrimary}
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle"
        >
          {vertexA_label}
        </text>

        <circle cx={vertexB.x} cy={vertexB.y} r="4" fill={colors.primary} />
        <text
          x={vertexB.x}
          y={vertexB.y + 20}
          fill={theme.colors.textPrimary}
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle"
        >
          {vertexB_label}
        </text>

        <circle cx={vertexC.x} cy={vertexC.y} r="4" fill={colors.primary} />
        <text
          x={vertexC.x}
          y={vertexC.y + 20}
          fill={theme.colors.textPrimary}
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle"
        >
          {vertexC_label}
        </text>

        {/* ============================================ */}
        {/* AMBIGUOUS CASE (SSA) - Second Triangle */}
        {/* ============================================ */}
        {showAmbiguousCase && hasAmbiguousCase && vertexA2 && (
          <>
            {/* Header text */}
            <text
              x={svgWidth / 2}
              y={30}
              fill={colors.muted}
              fontSize="12"
              fontStyle="italic"
              textAnchor="middle"
            >
              Ambiguous case: Two possible triangles
            </text>

            {/* Second triangle with dashed lines - draw all three sides */}
            {/* Side a' (from C to B) - base, shared with first triangle */}
            <line
              x1={vertexC.x}
              y1={vertexC.y}
              x2={vertexB.x}
              y2={vertexB.y}
              stroke={colors.muted}
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.6"
            />

            {/* Side c' (from A2 to B) - dashed */}
            <line
              x1={vertexA2.x}
              y1={vertexA2.y}
              x2={vertexB.x}
              y2={vertexB.y}
              stroke={colors.muted}
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.6"
            />

            {/* Side b' (from A2 to C) - dashed */}
            <line
              x1={vertexA2.x}
              y1={vertexA2.y}
              x2={vertexC.x}
              y2={vertexC.y}
              stroke={colors.muted}
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.6"
            />

            {/* Vertex A2 marker */}
            <circle cx={vertexA2.x} cy={vertexA2.y} r="4" fill={colors.muted} opacity="0.7" />
            <text
              x={vertexA2.x}
              y={vertexA2.y - 10}
              fill={colors.muted}
              fontSize="14"
              fontWeight="bold"
              textAnchor="middle"
            >
              A'
            </text>
          </>
        )}
        {showAmbiguousCase && !hasAmbiguousCase && (
          <text
            x={svgWidth / 2}
            y={30}
            fill={colors.muted}
            fontSize="12"
            fontStyle="italic"
            textAnchor="middle"
          >
            No ambiguous case for this configuration
          </text>
        )}
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

export default GeneralTriangleVisualizer;
