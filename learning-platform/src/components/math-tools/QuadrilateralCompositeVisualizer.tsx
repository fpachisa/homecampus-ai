/**
 * Quadrilateral Composite Visualizer
 *
 * Renders a quadrilateral by splitting it into two triangles that share a diagonal.
 * This approach is more robust and mathematically sound than trying to construct
 * a quadrilateral directly, as it uses the proven GeneralTriangleVisualizer.
 *
 * Example: Quadrilateral ABCD split by diagonal BD into triangles BCD and ABD
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

interface QuadrilateralCompositeVisualizerProps {
  // Vertex labels (in order, typically clockwise or counterclockwise)
  vertices: [string, string, string, string];  // e.g., ["A", "B", "C", "D"]

  // Sides (in order: side 0-1, side 1-2, side 2-3, side 3-0)
  // For ABCD: [AB, BC, CD, DA]
  sides: [Side, Side, Side, Side];

  // Angles at each vertex (in order: angle at vertex 0, 1, 2, 3)
  // For ABCD: [∠A, ∠B, ∠C, ∠D]
  angles: [Angle, Angle, Angle, Angle];

  // Optional diagonals to show
  diagonals?: Diagonal[];

  // Display options
  showVertices?: boolean;       // Show vertex points
  highlightVertex?: number;     // Index of vertex to highlight (-1 for none)
  highlightSide?: number;       // Index of side to highlight (-1 for none)

  caption?: string;
}

const QuadrilateralCompositeVisualizer: React.FC<QuadrilateralCompositeVisualizerProps> = ({
  vertices,
  sides,
  angles,
  diagonals = [],
  showVertices = true,
  highlightVertex = -1,
  highlightSide = -1,
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions
  const svgWidth = 700;
  const svgHeight = 500;
  const padding = 80;

  // Colors
  const defaultColor = theme.colors.textPrimary || '#333';
  const lineColor = theme.colors.textSecondary || '#666';
  const highlightColor = '#ef4444';
  const angleColor = '#3b82f6';
  const diagonalColor = '#8b5cf6';

  // Helper to extract numeric value from label string
  const extractNumeric = (label: string | undefined): number | null => {
    if (!label) return null;
    const match = label.replace(/[m°\s$kmcm]/g, '').match(/[\d.]+/);
    return match ? parseFloat(match[0]) : null;
  };

  // Extract side lengths and angle values
  const sideLengths = sides.map(s => extractNumeric(s.label));
  const angleValues = angles.map(a => a.value ?? extractNumeric(a.label));

  // For quadrilateral ABCD (vertices 0=A, 1=B, 2=C, 3=D):
  // - Sides: AB (0→1), BC (1→2), CD (2→3), DA (3→0)
  // - Split with diagonal BD (1→3)
  // - Triangle 1: BCD (vertices 1, 2, 3)
  // - Triangle 2: ABD (vertices 0, 1, 3)

  const AB = sideLengths[0];  // Side 0-1
  const BC = sideLengths[1];  // Side 1-2
  const CD = sideLengths[2];  // Side 2-3
  const DA = sideLengths[3];  // Side 3-0

  const angleA = angleValues[0];
  const angleB = angleValues[1];
  const angleC = angleValues[2];
  const angleD = angleValues[3];

  // Calculate diagonal BD using cosine rule from triangle BCD
  // BD² = BC² + CD² - 2·BC·CD·cos(∠BCD)
  let BD: number | null = null;
  let angleBDC: number | null = null;  // Angle at D in triangle BCD
  let angleDBC: number | null = null;  // Angle at B in triangle BCD

  if (BC !== null && CD !== null && angleC !== null) {
    const BCval = BC;
    const CDval = CD;
    const angleCRad = (angleC * Math.PI) / 180;

    // Cosine rule: BD² = BC² + CD² - 2·BC·CD·cos(C)
    const BDsquared = BCval * BCval + CDval * CDval - 2 * BCval * CDval * Math.cos(angleCRad);
    BD = Math.sqrt(BDsquared);

    // Use sine rule to find other angles in triangle BCD
    // BC/sin(∠BDC) = BD/sin(∠BCD)
    // sin(∠BDC) = BC·sin(∠BCD)/BD
    angleBDC = (Math.asin((BCval * Math.sin(angleCRad)) / BD) * 180) / Math.PI;

    // ∠DBC = 180° - ∠BCD - ∠BDC
    angleDBC = 180 - angleC - angleBDC;
  }

  // Calculate positions for vertices
  const positions = calculatePositions();

  function calculatePositions(): Array<{ x: number; y: number }> {
    // Start with D at origin and C on x-axis
    const posD = { x: 0, y: 0 };
    const posC = CD !== null ? { x: CD, y: 0 } : { x: 100, y: 0 };

    // Place B using BC and angle C
    let posB = { x: 0, y: 0 };
    if (BC !== null && angleC !== null) {
      const angleCRad = (angleC * Math.PI) / 180;
      // Vector CB at angle (180° - angleC) from positive x-axis
      const cbAngle = Math.PI - angleCRad;
      posB = {
        x: posC.x + BC * Math.cos(cbAngle),
        y: posC.y + BC * Math.sin(cbAngle)
      };
    } else {
      posB = { x: posC.x - 50, y: 100 };
    }

    // Place A using AB and angle B
    let posA = { x: 0, y: 0 };
    if (AB !== null && angleB !== null && angleDBC !== null) {
      // Find direction of BC vector
      const bcVector = {
        x: posC.x - posB.x,
        y: posC.y - posB.y
      };
      const bcAngle = Math.atan2(bcVector.y, bcVector.x);

      // Interior angle at B is between BA and BC
      // BA is at angle (bcAngle - angleB)
      const angleBRad = (angleB * Math.PI) / 180;
      const baAngle = bcAngle - angleBRad;

      posA = {
        x: posB.x + AB * Math.cos(baAngle),
        y: posB.y + AB * Math.sin(baAngle)
      };
    } else if (AB !== null && DA !== null && angleD !== null && angleBDC !== null) {
      // Alternative: place A using DA and angle at D
      const cdAngle = 0; // CD is along x-axis
      const angleDRad = (angleD * Math.PI) / 180;
      const daAngle = cdAngle + angleDRad;

      posA = {
        x: posD.x + DA * Math.cos(daAngle),
        y: posD.y + DA * Math.sin(daAngle)
      };
    } else {
      // Fallback position
      posA = { x: posD.x + 50, y: 100 };
    }

    const positions = [posA, posB, posC, posD];

    // Scale and center
    return scalePositions(positions);
  }

  function scalePositions(positions: Array<{ x: number; y: number }>): Array<{ x: number; y: number }> {
    const minX = Math.min(...positions.map(p => p.x));
    const maxX = Math.max(...positions.map(p => p.x));
    const minY = Math.min(...positions.map(p => p.y));
    const maxY = Math.max(...positions.map(p => p.y));

    const width = maxX - minX;
    const height = maxY - minY;

    const availableWidth = svgWidth - 2 * padding;
    const availableHeight = svgHeight - 2 * padding;

    const scale = Math.min(availableWidth / width, availableHeight / height) * 0.8;

    const centerX = svgWidth / 2;
    const centerY = svgHeight / 2;
    const shapeCenterX = (minX + maxX) / 2;
    const shapeCenterY = (minY + maxY) / 2;

    return positions.map(pos => ({
      x: centerX + (pos.x - shapeCenterX) * scale,
      y: centerY - (pos.y - shapeCenterY) * scale  // Flip Y
    }));
  }

  // Helper to get midpoint
  const getMidpoint = (i: number, j: number) => ({
    x: (positions[i].x + positions[j].x) / 2,
    y: (positions[i].y + positions[j].y) / 2
  });

  // Helper for label offset
  const getLabelOffset = (i: number, j: number, distance: number = 30) => {
    const centerX = positions.reduce((sum, p) => sum + p.x, 0) / 4;
    const centerY = positions.reduce((sum, p) => sum + p.y, 0) / 4;
    const midX = (positions[i].x + positions[j].x) / 2;
    const midY = (positions[i].y + positions[j].y) / 2;

    const dx = midX - centerX;
    const dy = midY - centerY;
    const len = Math.sqrt(dx * dx + dy * dy);

    return {
      dx: (dx / len) * distance,
      dy: (dy / len) * distance
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
                const offset = getLabelOffset(i, j, 35);

                return (
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
                );
              })()}
            </g>
          );
        })}

        {/* Draw diagonals */}
        {diagonals.map((diagonal, idx) => {
          const from = positions[diagonal.from];
          const to = positions[diagonal.to];

          return (
            <g key={`diagonal-${idx}`}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={diagonalColor}
                strokeWidth={2}
                strokeDasharray={diagonal.style === 'dashed' ? '5,5' : '0'}
              />

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
                      color: diagonalColor,
                      fontSize: '14px',
                      fontWeight: 'bold'
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
          const prev = positions[(i + 3) % 4];
          const next = positions[(i + 1) % 4];

          const angleToPrev = Math.atan2(prev.y - pos.y, prev.x - pos.x);
          const angleToNext = Math.atan2(next.y - pos.y, next.x - pos.x);

          const arcRadius = 40;
          let angleDiff = angleToNext - angleToPrev;

          if (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
          if (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;

          const largeArcFlag = Math.abs(angleDiff) > Math.PI ? 1 : 0;
          const sweepFlag = angleDiff > 0 ? 1 : 0;

          const startX = pos.x + arcRadius * Math.cos(angleToPrev);
          const startY = pos.y + arcRadius * Math.sin(angleToPrev);
          const endX = pos.x + arcRadius * Math.cos(angleToNext);
          const endY = pos.y + arcRadius * Math.sin(angleToNext);

          const midAngle = angleToPrev + angleDiff / 2;
          const labelRadius = arcRadius + 25;
          const labelX = pos.x + labelRadius * Math.cos(midAngle);
          const labelY = pos.y + labelRadius * Math.sin(midAngle);

          return (
            <g key={`angle-${i}`}>
              <path
                d={`M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}`}
                fill="none"
                stroke={angleColor}
                strokeWidth="2.5"
              />

              {angle.label && (
                <foreignObject
                  x={labelX - 28}
                  y={labelY - 16}
                  width="56"
                  height="32"
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
              )}
            </g>
          );
        })}

        {/* Draw vertices */}
        {showVertices && positions.map((pos, i) => {
          const isHighlighted = highlightVertex === i;
          const centerX = positions.reduce((sum, p) => sum + p.x, 0) / 4;
          const centerY = positions.reduce((sum, p) => sum + p.y, 0) / 4;
          const dx = pos.x - centerX;
          const dy = pos.y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const labelOffsetX = (dx / dist) * 25;
          const labelOffsetY = (dy / dist) * 25;

          return (
            <g key={`vertex-${i}`}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isHighlighted ? 7 : 6}
                fill={isHighlighted ? highlightColor : defaultColor}
              />
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

export default QuadrilateralCompositeVisualizer;
