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

  // Equal side marks (tick marks) for isosceles/equilateral triangles
  // 'none' = no marks, 'b-c' = sides b and c equal, 'a-b' = sides a and b equal,
  // 'a-c' = sides a and c equal, 'all' = all sides equal (equilateral)
  equalSides?: 'none' | 'b-c' | 'a-b' | 'a-c' | 'all';

  // Show right angle marker (small square) when any angle is 90°
  showRightAngleMarker?: boolean;

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
  triangleType: _triangleType = 'auto',
  showAmbiguousCase = false,
  equalSides = 'none',
  showRightAngleMarker = false,
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
  let calcAngleA: number;
  let calcAngleB: number;
  let calcAngleC: number;

  // Count how many angles are provided
  const anglesProvided = [angleA, angleB, angleC].filter(a => a !== null).length;

  if (anglesProvided === 0) {
    // No angles provided - default to equilateral
    calcAngleA = 60;
    calcAngleB = 60;
    calcAngleC = 60;
  } else if (anglesProvided === 1) {
    // Only one angle provided - distribute remaining angles
    if (angleA !== null) {
      calcAngleA = angleA;
      const remaining = 180 - angleA;
      calcAngleB = remaining / 2;
      calcAngleC = remaining / 2;
    } else if (angleB !== null) {
      calcAngleB = angleB;
      const remaining = 180 - angleB;
      calcAngleA = remaining / 2;
      calcAngleC = remaining / 2;
    } else {
      // angleC is provided
      calcAngleC = angleC!;
      const remaining = 180 - calcAngleC;
      calcAngleA = remaining / 2;
      calcAngleB = remaining / 2;
    }
  } else if (anglesProvided === 2) {
    // Two angles provided - calculate the third
    if (angleA !== null && angleB !== null) {
      calcAngleA = angleA;
      calcAngleB = angleB;
      calcAngleC = 180 - angleA - angleB;
    } else if (angleA !== null && angleC !== null) {
      calcAngleA = angleA;
      calcAngleC = angleC;
      calcAngleB = 180 - angleA - angleC;
    } else {
      // angleB and angleC provided
      calcAngleB = angleB!;
      calcAngleC = angleC!;
      calcAngleA = 180 - calcAngleB - calcAngleC;
    }
  } else {
    // All three angles provided
    calcAngleA = angleA!;
    calcAngleB = angleB!;
    calcAngleC = angleC!;
  }

  // Note: While angle A at the apex works best for obtuse angles,
  // obtuse angles at B or C are now supported (creates a "leaning" triangle)

  // ============================================
  // TRIANGLE LAYOUT
  // ============================================
  const displayHeight = 320; // Fixed display height

  // SIMPLIFIED LAYOUT STRATEGY:
  // - Always place vertex A at top, BC as base at bottom
  // - Adjust scaling based on triangle shape for better visualization

  // Convert angles to radians
  const angleA_rad = (calcAngleA * Math.PI) / 180;
  const angleC_rad = (calcAngleC * Math.PI) / 180;

  // For obtuse angles, use the sides adjacent to the obtuse angle for better proportions
  // For very obtuse angles (> 120°), scale up to make triangle more visible
  const isVeryObtuse = calcAngleA > 120;
  const baseLength = isVeryObtuse ? 300 : 220;
  const basePadding = 80;
  const baseY = 240;

  let vertexA: { x: number; y: number };
  let vertexB: { x: number; y: number };
  let vertexC: { x: number; y: number };
  const baseSide: 'a' = 'a'; // BC is always the base

  // Position base vertices B and C
  vertexC = { x: basePadding, y: baseY };
  vertexB = { x: basePadding + baseLength, y: baseY };

  // Calculate position of vertex A using law of sines
  const sideA_visual = baseLength; // BC is the base
  const sideC_visual = (sideA_visual * Math.sin(angleC_rad)) / Math.sin(angleA_rad);

  // Position A above the base BC, measured from C at angle C
  vertexA = {
    x: vertexC.x + sideC_visual * Math.cos(angleC_rad),
    y: vertexC.y - sideC_visual * Math.sin(angleC_rad)
  };

  // ============================================
  // AMBIGUOUS CASE (SSA) - Calculate second triangle
  // ============================================
  // Note: Ambiguous case calculation is complex and depends on specific SSA configurations
  // For now, we'll skip this in the refactored version
  // TODO: Re-implement ambiguous case for all triangle orientations
  // let vertexA2: { x: number; y: number } | undefined = undefined;
  // let hasAmbiguousCase = false;

  // ============================================
  // CALCULATE DYNAMIC BOUNDS
  // ============================================
  const padding = 60; // Padding around all elements

  // Scale arc radius based on angle size - smaller arcs for obtuse angles
  const arcRadiusA = calcAngleA > 90 ? 30 : 40;
  const arcRadiusB = calcAngleB > 90 ? 30 : 40;
  const arcRadiusC = calcAngleC > 90 ? 30 : 40;

  const labelOffset = 55; // For angle labels
  const vertexLabelOffset = 20; // For vertex labels

  // Start with triangle vertices
  let minX = Math.min(vertexA.x, vertexB.x, vertexC.x);
  let maxX = Math.max(vertexA.x, vertexB.x, vertexC.x);
  let minY = Math.min(vertexA.y, vertexB.y, vertexC.y);
  let maxY = Math.max(vertexA.y, vertexB.y, vertexC.y);

  // Account for vertex labels
  minY = Math.min(minY, vertexA.y - vertexLabelOffset);
  maxY = Math.max(maxY, vertexB.y + vertexLabelOffset, vertexC.y + vertexLabelOffset);

  // Account for angle arcs and labels if showing angles
  if (showAngles) {
    // Angle arcs extend from each vertex (using variable radii)
    minX = Math.min(minX, vertexA.x - arcRadiusA, vertexB.x - arcRadiusB, vertexC.x - arcRadiusC);
    maxX = Math.max(maxX, vertexA.x + arcRadiusA, vertexB.x + arcRadiusB, vertexC.x + arcRadiusC);
    minY = Math.min(minY, vertexA.y - arcRadiusA, vertexB.y - arcRadiusB, vertexC.y - arcRadiusC);
    maxY = Math.max(maxY, vertexA.y + arcRadiusA, vertexB.y + arcRadiusB, vertexC.y + arcRadiusC);

    // Angle labels extend labelOffset from each vertex
    minX = Math.min(minX, vertexA.x - labelOffset, vertexB.x - labelOffset, vertexC.x - labelOffset);
    maxX = Math.max(maxX, vertexA.x + labelOffset, vertexB.x + labelOffset, vertexC.x + labelOffset);
    minY = Math.min(minY, vertexA.y - labelOffset, vertexB.y - labelOffset, vertexC.y - labelOffset);
    maxY = Math.max(maxY, vertexA.y + labelOffset, vertexB.y + labelOffset, vertexC.y + labelOffset);
  }

  // Account for side labels if showing sides
  if (showSides) {
    // Side labels use foreignObject with width 80, height 30
    const sideLabelWidth = 40; // Half of 80
    const sideLabelHeight = 30;

    // Side a label (bottom)
    if (sideA) {
      const labelX = (vertexB.x + vertexC.x) / 2;
      const labelY = vertexC.y + 10;
      minX = Math.min(minX, labelX - sideLabelWidth);
      maxX = Math.max(maxX, labelX + sideLabelWidth);
      maxY = Math.max(maxY, labelY + sideLabelHeight);
    }

    // Side b label (left side)
    if (sideB) {
      const labelX = (vertexA.x + vertexC.x) / 2 - 55;
      const labelY = (vertexA.y + vertexC.y) / 2 - 15;
      minX = Math.min(minX, labelX);
      maxX = Math.max(maxX, labelX + 80);
      minY = Math.min(minY, labelY);
      maxY = Math.max(maxY, labelY + sideLabelHeight);
    }

    // Side c label (right side)
    if (sideC) {
      const labelX = (vertexA.x + vertexB.x) / 2;
      const labelY = (vertexA.y + vertexB.y) / 2 - 15;
      minX = Math.min(minX, labelX);
      maxX = Math.max(maxX, labelX + 80);
      minY = Math.min(minY, labelY);
      maxY = Math.max(maxY, labelY + sideLabelHeight);
    }
  }

  // Account for ambiguous case triangle if present
  // TODO: Re-enable when ambiguous case is implemented
  // const ambiguousVertex = vertexA2;
  // if (showAmbiguousCase && ambiguousVertex) {
  //   minX = Math.min(minX, ambiguousVertex.x - arcRadius);
  //   maxX = Math.max(maxX, ambiguousVertex.x + arcRadius);
  //   minY = Math.min(minY, ambiguousVertex.y - vertexLabelOffset, 30); // Include header text at y=30
  //   maxY = Math.max(maxY, ambiguousVertex.y + arcRadius);
  // }

  // Apply padding and create viewBox
  const viewBoxMinX = minX - padding;
  const viewBoxMinY = minY - padding;
  const viewBoxWidth = (maxX - minX) + (2 * padding);
  const viewBoxHeight = (maxY - minY) + (2 * padding);

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
    radius: number = 40,
    expectedAngleDegrees?: number
  ): string => {
    // Calculate angles to both points from vertex (accounting for SVG's Y-down coordinate system)
    let angle1 = Math.atan2(point1.y - vertex.y, point1.x - vertex.x);
    let angle2 = Math.atan2(point2.y - vertex.y, point2.x - vertex.x);

    // Calculate the angle we're sweeping (in radians)
    let deltaAngle = angle2 - angle1;

    // For triangle interior angles, we ALWAYS want the arc that matches the expected angle
    // Don't normalize to shortest path - instead match the expected angle direction
    if (expectedAngleDegrees !== undefined) {
      const expectedRad = (expectedAngleDegrees * Math.PI) / 180;

      // Normalize deltaAngle to [0, 2PI]
      while (deltaAngle < 0) deltaAngle += 2 * Math.PI;
      while (deltaAngle >= 2 * Math.PI) deltaAngle -= 2 * Math.PI;

      // If the arc is going the long way (exterior angle), flip it
      if (deltaAngle > Math.PI && expectedRad <= Math.PI) {
        // We're drawing the exterior, flip to interior
        deltaAngle = deltaAngle - 2 * Math.PI;
      } else if (deltaAngle < Math.PI && expectedRad > Math.PI) {
        // We need the reflex angle
        deltaAngle = deltaAngle - 2 * Math.PI;
      }
    } else {
      // No expected angle - normalize to shortest path [-PI, PI]
      while (deltaAngle > Math.PI) deltaAngle -= 2 * Math.PI;
      while (deltaAngle < -Math.PI) deltaAngle += 2 * Math.PI;
    }

    const absAngle = Math.abs(deltaAngle);

    // Prevent invalid arcs
    if (absAngle < 0.01 || absAngle > 2 * Math.PI - 0.01) {
      return '';
    }

    // Start and end points on the arc
    const startX = vertex.x + radius * Math.cos(angle1);
    const startY = vertex.y + radius * Math.sin(angle1);
    const endX = vertex.x + radius * Math.cos(angle2);
    const endY = vertex.y + radius * Math.sin(angle2);

    // Use the absolute angle to determine large arc flag
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

  // ============================================
  // EQUAL SIDE TICK MARKS HELPER
  // ============================================
  // Draw tick marks (small perpendicular lines) on a side to indicate equal lengths
  const drawTickMarks = (
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    numTicks: number = 1
  ): React.ReactNode => {
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;

    // Calculate perpendicular direction
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const perpX = -dy / length;
    const perpY = dx / length;

    const tickLength = 8; // Half length of tick mark
    const tickSpacing = 6; // Spacing between multiple ticks

    const ticks: React.ReactNode[] = [];

    for (let i = 0; i < numTicks; i++) {
      // Offset along the side for multiple ticks
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
          stroke={colors.side}
          strokeWidth="2"
        />
      );
    }

    return <g>{ticks}</g>;
  };

  // Determine which sides get tick marks based on equalSides prop
  const getSideTickCount = (side: 'a' | 'b' | 'c'): number => {
    if (equalSides === 'none') return 0;
    if (equalSides === 'all') return 1; // Equilateral: all sides get 1 tick

    // For isosceles triangles, equal sides get 1 tick each
    if (equalSides === 'b-c' && (side === 'b' || side === 'c')) return 1;
    if (equalSides === 'a-b' && (side === 'a' || side === 'b')) return 1;
    if (equalSides === 'a-c' && (side === 'a' || side === 'c')) return 1;

    return 0;
  };

  // ============================================
  // RIGHT ANGLE MARKER HELPER
  // ============================================
  // Draw a small square at the vertex with a 90° angle
  const drawRightAngleMarker = (
    vertex: { x: number; y: number },
    p1: { x: number; y: number },
    p2: { x: number; y: number }
  ): React.ReactNode => {
    const size = 12; // Size of the right angle square

    // Get unit vectors toward each adjacent vertex
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

    // Calculate the three corners of the right angle marker (plus vertex)
    const corner1 = { x: vertex.x + ux1 * size, y: vertex.y + uy1 * size };
    const corner2 = { x: vertex.x + ux2 * size, y: vertex.y + uy2 * size };
    const innerCorner = {
      x: vertex.x + ux1 * size + ux2 * size,
      y: vertex.y + uy1 * size + uy2 * size
    };

    return (
      <path
        d={`M ${corner1.x} ${corner1.y} L ${innerCorner.x} ${innerCorner.y} L ${corner2.x} ${corner2.y}`}
        fill="none"
        stroke="#27AE60"
        strokeWidth="2"
      />
    );
  };

  // Check which angle (if any) is 90° and should show the marker
  const getRightAngleVertex = (): 'A' | 'B' | 'C' | null => {
    if (!showRightAngleMarker) return null;
    const tolerance = 0.5; // Allow small deviation from exactly 90
    if (Math.abs(calcAngleA - 90) < tolerance) return 'A';
    if (Math.abs(calcAngleB - 90) < tolerance) return 'B';
    if (Math.abs(calcAngleC - 90) < tolerance) return 'C';
    return null;
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
        height={displayHeight}
        viewBox={`${viewBoxMinX} ${viewBoxMinY} ${viewBoxWidth} ${viewBoxHeight}`}
        style={{ display: 'block', margin: '0 auto' }}
        preserveAspectRatio="xMidYMid meet"
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
        {/* EQUAL SIDE TICK MARKS */}
        {/* ============================================ */}
        {/* Side a tick marks (B to C) */}
        {getSideTickCount('a') > 0 && drawTickMarks(vertexB, vertexC, getSideTickCount('a'))}

        {/* Side b tick marks (A to C) */}
        {getSideTickCount('b') > 0 && drawTickMarks(vertexA, vertexC, getSideTickCount('b'))}

        {/* Side c tick marks (A to B) */}
        {getSideTickCount('c') > 0 && drawTickMarks(vertexA, vertexB, getSideTickCount('c'))}

        {/* ============================================ */}
        {/* SIDE LABELS */}
        {/* ============================================ */}
        {/* Simplified positioning: base side goes below, others offset from midpoint */}
        {showSides && (
          <>
            {/* Side a label (between B and C) - opposite angle A */}
            {sideA && (() => {
              const isBase = baseSide === 'a';
              const midX = (vertexB.x + vertexC.x) / 2;
              const midY = (vertexB.y + vertexC.y) / 2;

              const labelX = midX - 40; // Center the 80px wide foreignObject
              const labelY = isBase ? Math.max(vertexB.y, vertexC.y) + 10 : midY - 15;

              return (
                <foreignObject x={labelX} y={labelY} width="80" height="30">
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
              );
            })()}

            {/* Side b label (between A and C) - opposite angle B */}
            {sideB && (() => {
              // Side b is never the base (base is always 'a')
              // Calculate perpendicular offset to move label away from the line
              const midX = (vertexA.x + vertexC.x) / 2;
              const midY = (vertexA.y + vertexC.y) / 2;

              // Calculate perpendicular direction (rotate 90° from line direction)
              const dx = vertexC.x - vertexA.x;
              const dy = vertexC.y - vertexA.y;
              const length = Math.sqrt(dx * dx + dy * dy);
              const perpX = -dy / length; // Perpendicular (to the left)
              const perpY = dx / length;

              const offsetDistance = 20; // Distance from line
              const labelX = midX + perpX * offsetDistance - 40; // Center 80px width
              const labelY = midY + perpY * offsetDistance - 15; // Center 30px height

              return (
                <foreignObject x={labelX} y={labelY} width="80" height="30">
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
              );
            })()}

            {/* Side c label (between A and B) - opposite angle C */}
            {sideC && (() => {
              // Side c is never the base (base is always 'a')
              // Calculate perpendicular offset to move label away from the line
              const midX = (vertexA.x + vertexB.x) / 2;
              const midY = (vertexA.y + vertexB.y) / 2;

              // Calculate perpendicular direction (rotate 90° from line direction)
              const dx = vertexB.x - vertexA.x;
              const dy = vertexB.y - vertexA.y;
              const length = Math.sqrt(dx * dx + dy * dy);
              const perpX = dy / length; // Perpendicular (to the right)
              const perpY = -dx / length;

              const offsetDistance = 20; // Distance from line
              const labelX = midX + perpX * offsetDistance - 40; // Center 80px width
              const labelY = midY + perpY * offsetDistance - 15; // Center 30px height

              return (
                <foreignObject x={labelX} y={labelY} width="80" height="30">
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
              );
            })()}
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
              const isRightAngle = showRightAngleMarker && Math.abs(calcAngleA - 90) < 0.5;
              return (
                <>
                  {/* Skip arc if showing right angle marker for this angle */}
                  {!isRightAngle && (
                    <path
                      d={createAngleArcBetweenPoints(vertexA, vertexC, vertexB, arcRadiusA, calcAngleA)}
                      fill="none"
                      stroke={getAngleColor('A')}
                      strokeWidth="2.5"
                      opacity="0.7"
                    />
                  )}
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
              const isRightAngle = showRightAngleMarker && Math.abs(calcAngleB - 90) < 0.5;
              return (
                <>
                  {/* Skip arc if showing right angle marker for this angle */}
                  {!isRightAngle && (
                    <path
                      d={createAngleArcBetweenPoints(vertexB, vertexA, vertexC, arcRadiusB, calcAngleB)}
                      fill="none"
                      stroke={getAngleColor('B')}
                      strokeWidth="2.5"
                      opacity="0.7"
                    />
                  )}
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
              const isRightAngle = showRightAngleMarker && Math.abs(calcAngleC - 90) < 0.5;
              return (
                <>
                  {/* Skip arc if showing right angle marker for this angle */}
                  {!isRightAngle && (
                    <path
                      d={createAngleArcBetweenPoints(vertexC, vertexB, vertexA, arcRadiusC, calcAngleC)}
                      fill="none"
                      stroke={getAngleColor('C')}
                      strokeWidth="2.5"
                      opacity="0.7"
                    />
                  )}
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
        {/* RIGHT ANGLE MARKER */}
        {/* ============================================ */}
        {(() => {
          const rightAngleVertex = getRightAngleVertex();
          if (!rightAngleVertex) return null;

          if (rightAngleVertex === 'A') {
            return drawRightAngleMarker(vertexA, vertexB, vertexC);
          } else if (rightAngleVertex === 'B') {
            return drawRightAngleMarker(vertexB, vertexA, vertexC);
          } else if (rightAngleVertex === 'C') {
            return drawRightAngleMarker(vertexC, vertexA, vertexB);
          }
          return null;
        })()}

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
        {/* TODO: Re-enable when ambiguous case is implemented */}
        {showAmbiguousCase && (
          <text
            x={viewBoxMinX + viewBoxWidth / 2}
            y={30}
            fill={colors.muted}
            fontSize="12"
            fontStyle="italic"
            textAnchor="middle"
          >
            Ambiguous case visualization not yet implemented
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
