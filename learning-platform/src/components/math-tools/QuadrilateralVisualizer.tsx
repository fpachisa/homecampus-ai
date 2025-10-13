/**
 * Quadrilateral Visualizer
 *
 * Visualizes quadrilaterals with labeled vertices, sides, angles, and optional diagonals.
 * Perfect for complex trigonometry problems involving multiple triangles within a quadrilateral.
 *
 * Example: Points P, Q, R, S on horizontal ground with various angles and side lengths
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface Side {
  label?: string;           // e.g., "250 m", "x", "SR"
  showLabel?: boolean;      // Whether to show the side label
}

interface Angle {
  value?: number;           // Angle in degrees, or null if unknown
  label?: string;           // Custom label (e.g., "36°", "θ", "∠QPR")
  showAngle?: boolean;      // Whether to show this angle
}

interface Diagonal {
  from: number;             // Index of starting vertex (0-3)
  to: number;               // Index of ending vertex (0-3)
  label?: string;           // Optional label for diagonal
  showLabel?: boolean;      // Whether to show diagonal label
  style?: 'solid' | 'dashed'; // Line style
}

interface QuadrilateralVisualizerProps {
  // Vertex labels (in order, typically clockwise or counterclockwise)
  vertices: [string, string, string, string];  // e.g., ["P", "Q", "R", "S"]

  // Sides (in order: side 0-1, side 1-2, side 2-3, side 3-0)
  sides: [Side, Side, Side, Side];

  // Angles at each vertex (in order: angle at vertex 0, 1, 2, 3)
  angles: [Angle, Angle, Angle, Angle];

  // Optional diagonals
  diagonals?: Diagonal[];

  // Vertex positions override (optional - for custom shapes)
  // If not provided, will auto-calculate positions based on first two sides and angles
  vertexPositions?: Array<{ x: number; y: number }>;

  // Display options
  showVertices?: boolean;       // Show vertex points
  highlightVertex?: number;     // Index of vertex to highlight (-1 for none)
  highlightSide?: number;       // Index of side to highlight (-1 for none)
  highlightDiagonal?: number;   // Index of diagonal to highlight (-1 for none)

  caption?: string;
}

const QuadrilateralVisualizer: React.FC<QuadrilateralVisualizerProps> = ({
  vertices,
  sides,
  angles,
  diagonals = [],
  vertexPositions,
  showVertices = true,
  highlightVertex = -1,
  highlightSide = -1,
  highlightDiagonal = -1,
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions
  const svgWidth = 700;
  const svgHeight = 500;
  const padding = { left: 80, right: 80, top: 80, bottom: 80 };

  // Colors
  const defaultColor = theme.colors.textPrimary || '#333';
  const lineColor = theme.colors.textSecondary || '#666';
  const highlightColor = '#ef4444';
  const angleColor = '#3b82f6';
  const diagonalColor = '#8b5cf6';

  // Helper function to extract numeric value from a label string
  function extractNumericValue(label: string | undefined): number | null {
    if (!label) return null;
    // Remove common units and extract number
    const match = label.replace(/[m°\s$]/g, '').match(/[\d.]+/);
    return match ? parseFloat(match[0]) : null;
  }

  // Helper function to extract numeric values from all sides
  function extractSideLengths(): (number | null)[] {
    return sides.map(side => extractNumericValue(side.label));
  }

  // Helper function to extract numeric values from all angles
  function extractAngleValues(): (number | null)[] {
    return angles.map(angle => {
      if (angle.value !== undefined) return angle.value;
      return extractNumericValue(angle.label);
    });
  }

  // Calculate vertex positions if not provided
  const positions = vertexPositions || calculatePositions();

  // Check if vertices are ordered clockwise or counterclockwise
  function isClockwise(positions: Array<{ x: number; y: number }>): boolean {
    // Calculate signed area using the shoelace formula
    let sum = 0;
    for (let i = 0; i < positions.length; i++) {
      const j = (i + 1) % positions.length;
      sum += (positions[j].x - positions[i].x) * (positions[j].y + positions[i].y);
    }
    return sum > 0; // Positive sum means clockwise in screen coordinates (y increases downward)
  }

  const isVertexOrderClockwise = isClockwise(positions);

  // Helper function to calculate positions when one side is unknown but angles are known
  function calculatePositionsWithUnknownSide(
    unknownSideIndex: number,
    sideLengths: (number | null)[],
    angleValues: (number | null)[]
  ): Array<{ x: number; y: number }> | null {
    // We need at least 2 consecutive angles to place vertices sequentially
    // For quadrilateral ABCD, sides are [AB, BC, CD, DA] and angles are at [A, B, C, D]

    // Strategy: Place vertices sequentially using known sides and angles
    // Start from a known side, then use angles to place subsequent vertices

    const positions: Array<{ x: number; y: number }> = new Array(4);

    // Start with D at origin and C along x-axis (using CD if known, or work backwards)
    if (unknownSideIndex === 3) {
      // DA is unknown - we have AB, BC, CD and need angles at B and C
      const AB = sideLengths[0];
      const BC = sideLengths[1];
      const CD = sideLengths[2];
      const angleB = angleValues[1]; // Interior angle at B
      const angleC = angleValues[2]; // Interior angle at C

      if (!AB || !BC || !CD || angleB === null || angleC === null) {
        return null; // Need these values for sequential placement
      }

      // Place D at origin, C along x-axis
      positions[3] = { x: 0, y: 0 };
      positions[2] = { x: CD, y: 0 };

      // Place B using BC and angle at C
      // Vector CD points at 180° (from C to D)
      // Interior angle at C is between CB and CD
      // CB should be at angle (180° - angleC) from positive x-axis
      const angleCRad = angleC * Math.PI / 180;
      const cbAngle = Math.PI - angleCRad; // Angle of vector CB from C
      positions[1] = {
        x: positions[2].x + BC * Math.cos(cbAngle),
        y: positions[2].y + BC * Math.sin(cbAngle)
      };

      // Place A using AB and angle at B
      // First, find angle of BC vector
      const bcVector = {
        x: positions[2].x - positions[1].x,
        y: positions[2].y - positions[1].y
      };
      const bcAngle = Math.atan2(bcVector.y, bcVector.x);

      // Interior angle at B is between BA and BC
      // BA should be at angle (bcAngle - angleB) from positive x-axis
      const angleBRad = angleB * Math.PI / 180;
      const baAngle = bcAngle - angleBRad;
      positions[0] = {
        x: positions[1].x + AB * Math.cos(baAngle),
        y: positions[1].y + AB * Math.sin(baAngle)
      };

      return positions;
    }

    // Handle other unknown side cases (AB, BC, CD unknown)
    if (unknownSideIndex === 0) {
      // AB is unknown - we have BC, CD, DA
      const BC = sideLengths[1];
      const CD = sideLengths[2];
      const DA = sideLengths[3];
      const angleC = angleValues[2];
      const angleD = angleValues[3];

      if (!BC || !CD || !DA || angleC === null || angleD === null) {
        return null;
      }

      positions[3] = { x: 0, y: 0 };
      positions[2] = { x: CD, y: 0 };

      const angleCRad = angleC * Math.PI / 180;
      const cbAngle = Math.PI - angleCRad;
      positions[1] = {
        x: positions[2].x + BC * Math.cos(cbAngle),
        y: positions[2].y + BC * Math.sin(cbAngle)
      };

      // Place A using DA and angle at D
      const cdVector = {
        x: positions[2].x - positions[3].x,
        y: positions[2].y - positions[3].y
      };
      const cdAngle = Math.atan2(cdVector.y, cdVector.x);
      const angleDRad = angleD * Math.PI / 180;
      const daAngle = cdAngle + angleDRad;
      positions[0] = {
        x: positions[3].x + DA * Math.cos(daAngle),
        y: positions[3].y + DA * Math.sin(daAngle)
      };

      return positions;
    }

    if (unknownSideIndex === 1) {
      // BC is unknown - we have AB, CD, DA
      const AB = sideLengths[0];
      const CD = sideLengths[2];
      const DA = sideLengths[3];
      const angleA = angleValues[0];
      const angleD = angleValues[3];

      if (!AB || !CD || !DA || angleA === null || angleD === null) {
        return null;
      }

      positions[3] = { x: 0, y: 0 };
      positions[2] = { x: CD, y: 0 };

      // Place A using DA and angle at D
      const cdAngle = 0; // CD is along x-axis
      const angleDRad = angleD * Math.PI / 180;
      const daAngle = cdAngle + angleDRad;
      positions[0] = {
        x: positions[3].x + DA * Math.cos(daAngle),
        y: positions[3].y + DA * Math.sin(daAngle)
      };

      // Place B using AB and angle at A
      const adVector = {
        x: positions[3].x - positions[0].x,
        y: positions[3].y - positions[0].y
      };
      const adAngle = Math.atan2(adVector.y, adVector.x);
      const angleARad = angleA * Math.PI / 180;
      const abAngle = adAngle - angleARad;
      positions[1] = {
        x: positions[0].x + AB * Math.cos(abAngle),
        y: positions[0].y + AB * Math.sin(abAngle)
      };

      return positions;
    }

    if (unknownSideIndex === 2) {
      // CD is unknown - we have AB, BC, DA
      const AB = sideLengths[0];
      const BC = sideLengths[1];
      const DA = sideLengths[3];
      const angleA = angleValues[0];
      const angleB = angleValues[1];

      if (!AB || !BC || !DA || angleA === null || angleB === null) {
        return null;
      }

      // Start with D at origin, but we don't know where C is yet
      // Instead, place D and A first using DA
      positions[3] = { x: 0, y: 0 };
      positions[0] = { x: DA, y: 0 }; // Place A along x-axis from D

      // Place B using AB and angle at A
      // Vector AD points at 180° (from A to D)
      const angleARad = angleA * Math.PI / 180;
      const abAngle = Math.PI - angleARad;
      positions[1] = {
        x: positions[0].x + AB * Math.cos(abAngle),
        y: positions[0].y + AB * Math.sin(abAngle)
      };

      // Place C using BC and angle at B
      const baVector = {
        x: positions[0].x - positions[1].x,
        y: positions[0].y - positions[1].y
      };
      const baAngle = Math.atan2(baVector.y, baVector.x);
      const angleBRad = angleB * Math.PI / 180;
      const bcAngle = baAngle - angleBRad;
      positions[2] = {
        x: positions[1].x + BC * Math.cos(bcAngle),
        y: positions[1].y + BC * Math.sin(bcAngle)
      };

      return positions;
    }

    return null;
  }

  // Helper function to scale and center positions
  function scaleAndCenterPositions(positions: Array<{ x: number; y: number }>): Array<{ x: number; y: number }> {
    // Find bounding box
    const minX = Math.min(...positions.map(p => p.x));
    const maxX = Math.max(...positions.map(p => p.x));
    const minY = Math.min(...positions.map(p => p.y));
    const maxY = Math.max(...positions.map(p => p.y));

    const shapeWidth = maxX - minX;
    const shapeHeight = maxY - minY;

    // Calculate uniform scale to fit in available space
    const availableWidth = svgWidth - padding.left - padding.right;
    const availableHeight = svgHeight - padding.top - padding.bottom;
    const scaleX = (availableWidth * 0.8) / shapeWidth;
    const scaleY = (availableHeight * 0.8) / shapeHeight;
    const scale = Math.min(scaleX, scaleY);

    // Center the shape in the SVG
    const centerX = padding.left + availableWidth / 2;
    const centerY = padding.top + availableHeight / 2;
    const shapeCenterX = (minX + maxX) / 2;
    const shapeCenterY = (minY + maxY) / 2;

    // Apply uniform scaling and centering
    // SVG y-axis increases downward, so we flip the y coordinates
    return positions.map(pos => ({
      x: centerX + (pos.x - shapeCenterX) * scale,
      y: centerY - (pos.y - shapeCenterY) * scale  // Flip Y for SVG
    }));
  }

  function calculatePositions(): Array<{ x: number; y: number }> {
    const sideLengths = extractSideLengths();
    const angleValues = extractAngleValues();

    // Check if we have enough information to calculate positions geometrically
    const hasAnySides = sideLengths.some(len => len !== null);

    if (!hasAnySides) {
      // Fallback to default layout if no dimensions provided
      return getDefaultPositions();
    }

    // Check which sides are unknown
    const unknownSides = sideLengths.map((len, idx) => len === null ? idx : -1).filter(idx => idx !== -1);

    // If exactly one side is unknown and we have sufficient angles, use sequential placement
    if (unknownSides.length === 1) {
      const unknownSideIndex = unknownSides[0];
      const positions = calculatePositionsWithUnknownSide(unknownSideIndex, sideLengths, angleValues);
      if (positions) {
        return scaleAndCenterPositions(positions);
      }
    }

    // Get actual side lengths (no scaling yet - we'll scale uniformly at the end)
    // sides array: [AB, BC, CD, DA]
    // Use reasonable estimates for unknown sides based on known sides
    const knownSides = sideLengths.filter(len => len !== null);
    const avgSide = knownSides.length > 0 ? knownSides.reduce((a, b) => a + b, 0) / knownSides.length : 20;

    const sideAB = sideLengths[0] || avgSide;
    const sideBC = sideLengths[1] || avgSide;
    const sideCD = sideLengths[2] || avgSide;
    const sideDA = sideLengths[3] || avgSide;

    // Create positions that maintain exact proportions
    const calculatedPositions: Array<{ x: number; y: number }> = new Array(4);

    // Start with D at origin, place C along x-axis
    calculatedPositions[3] = { x: 0, y: 0 };  // D at origin
    calculatedPositions[2] = { x: sideCD, y: 0 };  // C at distance CD from D

    // Now we need to find B such that BC has the correct length
    // For a trapezoid-like shape, B should be above C
    // Use the angle at C if provided, otherwise calculate a reasonable position

    // Try to create a shape that looks like a reasonable quadrilateral
    // We'll use circle intersections to maintain exact side lengths

    // B must be at distance BC from C and distance AB from where A will be
    // First, let's place B using angle at C or a default angle
    const angleC = angleValues[2];
    let bPosition: { x: number; y: number };

    if (angleC !== null) {
      // Use the provided angle
      const angleCRadians = angleC * Math.PI / 180;
      bPosition = {
        x: calculatedPositions[2].x - sideBC * Math.cos(angleCRadians),
        y: sideBC * Math.sin(angleCRadians)
      };
    } else {
      // Default: place B at a reasonable angle from C (about 60-80 degrees)
      const defaultAngle = 70 * Math.PI / 180;
      bPosition = {
        x: calculatedPositions[2].x - sideBC * Math.cos(defaultAngle),
        y: sideBC * Math.sin(defaultAngle)
      };
    }
    calculatedPositions[1] = bPosition;

    // Now find A: it must be at distance DA from D and distance AB from B
    // This is the intersection of two circles
    const findCircleIntersections = (
      center1: { x: number; y: number }, radius1: number,
      center2: { x: number; y: number }, radius2: number
    ): { x: number; y: number }[] => {
      const dx = center2.x - center1.x;
      const dy = center2.y - center1.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Check if circles intersect
      if (dist > radius1 + radius2 || dist < Math.abs(radius1 - radius2) || dist === 0) {
        // No intersection or infinite intersections
        return [];
      }

      // Calculate intersection points
      const a = (radius1 * radius1 - radius2 * radius2 + dist * dist) / (2 * dist);
      const h = Math.sqrt(radius1 * radius1 - a * a);

      const px = center1.x + (a * dx) / dist;
      const py = center1.y + (a * dy) / dist;

      const intersection1 = {
        x: px + (h * dy) / dist,
        y: py - (h * dx) / dist
      };
      const intersection2 = {
        x: px - (h * dy) / dist,
        y: py + (h * dx) / dist
      };

      return [intersection1, intersection2];
    };

    // Find where A should be (distance DA from D, distance AB from B)
    const intersections = findCircleIntersections(
      calculatedPositions[3], sideDA,  // Circle centered at D with radius DA
      calculatedPositions[1], sideAB   // Circle centered at B with radius AB
    );

    if (intersections.length > 0) {
      // Choose the intersection that gives a non-crossing quadrilateral
      // Typically, we want A to be on the same side as B (above the DC line)
      calculatedPositions[0] = intersections[0].y > 0 ? intersections[0] :
                               intersections.length > 1 && intersections[1].y > 0 ? intersections[1] :
                               intersections[0];
    } else {
      // If no exact intersection, approximate A's position
      // This happens when the constraints are impossible
      const angleD = angleValues[3] || 110;
      const angleDRadians = angleD * Math.PI / 180;
      calculatedPositions[0] = {
        x: calculatedPositions[3].x + sideDA * Math.cos(angleDRadians),
        y: sideDA * Math.sin(angleDRadians)
      };
    }

    // Scale and center the positions
    return scaleAndCenterPositions(calculatedPositions);
  }

  function getDefaultPositions(): Array<{ x: number; y: number }> {
    const availableWidth = svgWidth - padding.left - padding.right;
    const availableHeight = svgHeight - padding.top - padding.bottom;

    // Default trapezoid layout
    return [
      { x: padding.left + availableWidth * 0.25, y: padding.top + availableHeight * 0.15 },  // A - top-left
      { x: padding.left + availableWidth * 0.75, y: padding.top + availableHeight * 0.15 },  // B - top-right
      { x: padding.left + availableWidth * 0.85, y: padding.top + availableHeight * 0.85 },  // C - bottom-right
      { x: padding.left + availableWidth * 0.15, y: padding.top + availableHeight * 0.85 }   // D - bottom-left
    ];
  }

  // Helper to get midpoint of a side
  const getMidpoint = (i: number, j: number) => ({
    x: (positions[i].x + positions[j].x) / 2,
    y: (positions[i].y + positions[j].y) / 2
  });

  // Helper to calculate offset for label positioning (perpendicular to the side)
  const getLabelOffset = (i: number, j: number) => {
    // Perpendicular offset - push outward from center of quadrilateral
    const centerX = positions.reduce((sum, p) => sum + p.x, 0) / 4;
    const centerY = positions.reduce((sum, p) => sum + p.y, 0) / 4;
    const midX = (positions[i].x + positions[j].x) / 2;
    const midY = (positions[i].y + positions[j].y) / 2;

    // Direction from center to midpoint
    const toCenterDx = midX - centerX;
    const toCenterDy = midY - centerY;
    const toCenterLength = Math.sqrt(toCenterDx * toCenterDx + toCenterDy * toCenterDy);

    // Increased offset to push labels further away from the quadrilateral
    return {
      dx: (toCenterDx / toCenterLength) * 45,
      dy: (toCenterDy / toCenterLength) * 45
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
        {/* Draw sides */}
        {[0, 1, 2, 3].map((i) => {
          const j = (i + 1) % 4;
          const isHighlighted = highlightSide === i;
          const side = sides[i];

          return (
            <g key={`side-${i}`}>
              {/* Side line */}
              <line
                x1={positions[i].x}
                y1={positions[i].y}
                x2={positions[j].x}
                y2={positions[j].y}
                stroke={isHighlighted ? highlightColor : lineColor}
                strokeWidth={isHighlighted ? 3 : 2.5}
              />

              {/* Side label */}
              {side.showLabel !== false && side.label && (() => {
                const mid = getMidpoint(i, j);
                const offset = getLabelOffset(i, j);

                return (
                  <g>
                    {/* Background for readability */}
                    <rect
                      x={mid.x + offset.dx - 38}
                      y={mid.y + offset.dy - 18}
                      width="76"
                      height="36"
                      rx="6"
                      fill={theme.colors.tutorMessage}
                      opacity="0.95"
                    />
                    <foreignObject
                      x={mid.x + offset.dx - 38}
                      y={mid.y + offset.dy - 16}
                      width="76"
                      height="32"
                    >
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: isHighlighted ? highlightColor : defaultColor,
                        fontSize: '16px',
                        fontWeight: 'bold',
                        textAlign: 'center'
                      }}>
                        <MathText>
                          {side.label.includes('$') ? side.label : `$${side.label}$`}
                        </MathText>
                      </div>
                    </foreignObject>
                  </g>
                );
              })()}
            </g>
          );
        })}

        {/* Draw diagonals */}
        {diagonals.map((diagonal, idx) => {
          const isHighlighted = highlightDiagonal === idx;
          const from = positions[diagonal.from];
          const to = positions[diagonal.to];

          return (
            <g key={`diagonal-${idx}`}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={isHighlighted ? highlightColor : diagonalColor}
                strokeWidth={isHighlighted ? 3 : 2}
                strokeDasharray={diagonal.style === 'dashed' ? '5,5' : '0'}
              />

              {/* Diagonal label */}
              {diagonal.showLabel && diagonal.label && (() => {
                const mid = {
                  x: (from.x + to.x) / 2,
                  y: (from.y + to.y) / 2
                };

                return (
                  <foreignObject
                    x={mid.x - 25}
                    y={mid.y - 20}
                    width="50"
                    height="30"
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: isHighlighted ? highlightColor : diagonalColor,
                      fontSize: '14px',
                      fontWeight: 'bold',
                      backgroundColor: theme.colors.tutorMessage,
                      padding: '2px 4px',
                      borderRadius: '3px'
                    }}>
                      <MathText>
                        {diagonal.label.includes('$') ? diagonal.label : `$${diagonal.label}$`}
                      </MathText>
                    </div>
                  </foreignObject>
                );
              })()}
            </g>
          );
        })}

        {/* Draw angles */}
        {angles.map((angle, i) => {
          if (angle.showAngle === false || (!angle.value && !angle.label)) return null;

          const pos = positions[i];
          const prev = positions[(i + 3) % 4]; // Previous vertex in the sequence
          const next = positions[(i + 1) % 4]; // Next vertex in the sequence

          // Calculate angles from current vertex to neighbors
          const angleToPrev = Math.atan2(prev.y - pos.y, prev.x - pos.x);
          const angleToNext = Math.atan2(next.y - pos.y, next.x - pos.x);

          const arcRadius = 40;

          // Calculate the interior angle
          // We always draw from prev to next in the direction that gives us the interior angle
          let angleDiff = angleToNext - angleToPrev;

          // Normalize to [-π, π]
          if (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
          if (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;

          // Determine if we should go the long way or short way
          // For a convex quadrilateral, interior angles should be < 180°
          const useShortArc = Math.abs(angleDiff) <= Math.PI;
          // Invert the sweep flag to draw on the interior side
          const sweepFlag = (isVertexOrderClockwise ? angleDiff < 0 : angleDiff > 0) ? 1 : 0;
          const largeArcFlag = useShortArc ? 0 : 1;

          // Start and end points on the arc
          const startX = pos.x + arcRadius * Math.cos(angleToPrev);
          const startY = pos.y + arcRadius * Math.sin(angleToPrev);
          const endX = pos.x + arcRadius * Math.cos(angleToNext);
          const endY = pos.y + arcRadius * Math.sin(angleToNext);

          // Label position - at the middle of the interior angle arc
          // Calculate the bisector of the interior angle
          const midAngle = angleToPrev + angleDiff / 2;
          const labelRadius = arcRadius + 25;
          const labelX = pos.x + labelRadius * Math.cos(midAngle);
          const labelY = pos.y + labelRadius * Math.sin(midAngle);

          return (
            <g key={`angle-${i}`}>
              {/* Angle arc */}
              <path
                d={`M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}`}
                fill="none"
                stroke={angleColor}
                strokeWidth="2.5"
              />

              {/* Angle label */}
              {angle.label && (
                <g>
                  {/* Background circle for better readability */}
                  <circle
                    cx={labelX}
                    cy={labelY}
                    r="26"
                    fill={theme.colors.tutorMessage}
                    opacity="0.95"
                  />
                  <foreignObject
                    x={labelX - 32}
                    y={labelY - 19}
                    width="64"
                    height="38"
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: angleColor,
                      fontSize: '16px',
                      fontWeight: 'bold'
                    }}>
                      <MathText>
                        {angle.label.includes('$') ? angle.label : `$${angle.label}$`}
                      </MathText>
                    </div>
                  </foreignObject>
                </g>
              )}
            </g>
          );
        })}

        {/* Draw vertices */}
        {showVertices && positions.map((pos, i) => {
          const isHighlighted = highlightVertex === i;

          // Calculate label position - push outward from center
          const centerX = positions.reduce((sum, p) => sum + p.x, 0) / 4;
          const centerY = positions.reduce((sum, p) => sum + p.y, 0) / 4;
          const dx = pos.x - centerX;
          const dy = pos.y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const labelOffsetX = (dx / dist) * 25;
          const labelOffsetY = (dy / dist) * 25;

          return (
            <g key={`vertex-${i}`}>
              {/* Vertex point */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isHighlighted ? 7 : 6}
                fill={isHighlighted ? highlightColor : defaultColor}
              />

              {/* Vertex label - positioned outward from center */}
              <text
                x={pos.x + labelOffsetX}
                y={pos.y + labelOffsetY + 6}
                fill={defaultColor}
                fontSize="22"
                fontWeight="bold"
                textAnchor="middle"
              >
                {vertices[i]}
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

export default QuadrilateralVisualizer;
