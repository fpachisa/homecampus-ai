import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface UnitCircleVisualizerProps {
  angle?: number;                    // Angle in degrees (default: 45)
  showPoint?: boolean;               // Show P(cos θ, sin θ) (default: true)
  showTriangle?: boolean;            // Show reference triangle (default: false)
  showQuadrants?: boolean;           // Highlight quadrants (default: false)
  showSpecialAngles?: boolean;       // Mark 0°, 30°, 45°, 60°, 90°, etc. (default: false)
  highlightQuadrant?: 1 | 2 | 3 | 4; // Highlight specific quadrant (default: none)
  showCoordinates?: boolean;         // Display (cos θ, sin θ) (default: true)
  showASTC?: boolean;                // Show ASTC labels (default: false)
  showAngleArc?: boolean;            // Show arc from 0° to θ (default: true)
  angleMode?: 'degrees' | 'radians'; // Display mode (default: 'degrees')
  caption?: string;                  // Optional caption
}

const UnitCircleVisualizer: React.FC<UnitCircleVisualizerProps> = ({
  angle = 45,
  showPoint = true,
  showTriangle = false,
  showQuadrants = false,
  showSpecialAngles = false,
  highlightQuadrant,
  showCoordinates = true,
  showASTC = false,
  showAngleArc = true,
  angleMode = 'degrees',
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions and setup
  const svgSize = 500;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  const radius = 180; // Unit circle visual radius
  const padding = 50;

  // Convert angle to radians for calculations
  // Handle null angle case - use 0 for calculations but don't display
  const angleRad = angle !== null ? (angle * Math.PI) / 180 : 0;

  // Calculate point P coordinates on unit circle
  const cosTheta = Math.cos(angleRad);
  const sinTheta = Math.sin(angleRad);

  // Convert unit circle coords to SVG coords
  const pointX = centerX + cosTheta * radius;
  const pointY = centerY - sinTheta * radius; // negative because SVG y increases downward

  // Colors
  const axisColor = theme.colors.textSecondary || '#666';
  const circleColor = theme.colors.brand || '#5865F2';
  const pointColor = '#ef4444'; // Red
  const triangleColor = '#10b981'; // Green
  const quadrantColor = '#93c5fd'; // Medium blue for better visibility
  const specialAngleColor = theme.colors.textMuted || '#999';
  const angleArcColor = circleColor;

  // Special angles in degrees: 0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360
  const specialAngles = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];

  // Format angle display based on mode
  const formatAngle = (deg: number): string => {
    if (angleMode === 'radians') {
      const rad = (deg * Math.PI) / 180;
      // Common radian values
      if (deg === 0) return '0';
      if (deg === 30) return 'π/6';
      if (deg === 45) return 'π/4';
      if (deg === 60) return 'π/3';
      if (deg === 90) return 'π/2';
      if (deg === 120) return '2π/3';
      if (deg === 135) return '3π/4';
      if (deg === 150) return '5π/6';
      if (deg === 180) return 'π';
      if (deg === 210) return '7π/6';
      if (deg === 225) return '5π/4';
      if (deg === 240) return '4π/3';
      if (deg === 270) return '3π/2';
      if (deg === 300) return '5π/3';
      if (deg === 315) return '7π/4';
      if (deg === 330) return '11π/6';
      if (deg === 360) return '2π';
      return `${rad.toFixed(2)}`;
    }
    return `${deg}°`;
  };

  // Draw quadrant highlight
  const renderQuadrantHighlight = (quadrant: number) => {
    const startAngle = (quadrant - 1) * 90;
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (startRad + Math.PI / 2);

    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY - radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY - radius * Math.sin(endRad);

    return (
      <path
        d={`M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 0 0 ${x2} ${y2} Z`}
        fill={quadrantColor}
        opacity={0.4}
      />
    );
  };

  // Generate angle arc path
  const getAngleArcPath = (): string => {
    const arcRadius = 40;
    const normalized = ((angle % 360) + 360) % 360;
    const largeArc = normalized > 180 ? 1 : 0;

    const endX = centerX + arcRadius * Math.cos(angleRad);
    const endY = centerY - arcRadius * Math.sin(angleRad);

    return `M ${centerX + arcRadius} ${centerY} A ${arcRadius} ${arcRadius} 0 ${largeArc} 0 ${endX} ${endY}`;
  };

  return (
    <div className="my-4">
      <svg width={svgSize} height={svgSize} className="mx-auto">
        {/* Quadrant highlights */}
        {showQuadrants && [1, 2, 3, 4].map(q => (
          <React.Fragment key={`quad-${q}`}>
            {renderQuadrantHighlight(q)}
          </React.Fragment>
        ))}

        {/* Specific quadrant highlight */}
        {highlightQuadrant && renderQuadrantHighlight(highlightQuadrant)}

        {/* Grid lines (light) */}
        <line x1={padding} y1={centerY} x2={svgSize - padding} y2={centerY} stroke={axisColor} strokeWidth={1} opacity={0.3} />
        <line x1={centerX} y1={padding} x2={centerX} y2={svgSize - padding} stroke={axisColor} strokeWidth={1} opacity={0.3} />

        {/* Main axes */}
        <defs>
          <marker id="arrowhead-x" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={axisColor} />
          </marker>
          <marker id="arrowhead-y" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={axisColor} />
          </marker>
        </defs>

        {/* X-axis */}
        <line
          x1={padding}
          y1={centerY}
          x2={svgSize - padding}
          y2={centerY}
          stroke={axisColor}
          strokeWidth={2}
          markerEnd="url(#arrowhead-x)"
        />
        <text x={svgSize - padding + 10} y={centerY + 5} fill={axisColor} className="text-sm">x</text>

        {/* Y-axis */}
        <line
          x1={centerX}
          y1={svgSize - padding}
          x2={centerX}
          y2={padding}
          stroke={axisColor}
          strokeWidth={2}
          markerEnd="url(#arrowhead-y)"
        />
        <text x={centerX + 5} y={padding - 10} fill={axisColor} className="text-sm">y</text>

        {/* Unit circle */}
        <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke={circleColor} strokeWidth={2} />

        {/* Special angle markers */}
        {showSpecialAngles && specialAngles.map(specialAngle => {
          const rad = (specialAngle * Math.PI) / 180;
          const x = centerX + radius * Math.cos(rad);
          const y = centerY - radius * Math.sin(rad);
          return (
            <g key={`special-${specialAngle}`}>
              <circle cx={x} cy={y} r={3} fill={specialAngleColor} />
              <text
                x={x + (Math.cos(rad) * 20)}
                y={y - (Math.sin(rad) * 20)}
                fill={specialAngleColor}
                className="text-xs"
                textAnchor="middle"
              >
                {formatAngle(specialAngle)}
              </text>
            </g>
          );
        })}

        {/* Reference triangle */}
        {showTriangle && (
          <>
            {/* Horizontal line (cos θ) */}
            <line
              x1={centerX}
              y1={centerY}
              x2={pointX}
              y2={centerY}
              stroke={triangleColor}
              strokeWidth={2}
              strokeDasharray="4 2"
            />
            {/* Vertical line (sin θ) */}
            <line
              x1={pointX}
              y1={centerY}
              x2={pointX}
              y2={pointY}
              stroke={triangleColor}
              strokeWidth={2}
              strokeDasharray="4 2"
            />
            {/* Hypotenuse (radius) */}
            <line
              x1={centerX}
              y1={centerY}
              x2={pointX}
              y2={pointY}
              stroke={triangleColor}
              strokeWidth={2}
            />

            {/* Right angle marker at corner (pointX, centerY) */}
            {(() => {
              const markerSize = 15;
              // Draw right angle marker at the corner of the triangle
              return (
                <rect
                  x={pointX - (cosTheta >= 0 ? markerSize : 0)}
                  y={centerY - (sinTheta >= 0 ? markerSize : 0)}
                  width={markerSize}
                  height={markerSize}
                  fill="none"
                  stroke={triangleColor}
                  strokeWidth={1.5}
                />
              );
            })()}

            {/* Label cos θ */}
            <foreignObject
              x={centerX + (pointX - centerX) / 2 - 30}
              y={centerY + 5}
              width={60}
              height={25}
            >
              <div className="flex items-center justify-center h-full">
                <div className="text-xs font-semibold" style={{ color: triangleColor }}>
                  <MathText>{`$\\cos\\theta$`}</MathText>
                </div>
              </div>
            </foreignObject>

            {/* Label sin θ */}
            <foreignObject
              x={pointX + 5}
              y={centerY + (pointY - centerY) / 2 - 12}
              width={60}
              height={25}
            >
              <div className="flex items-center justify-start h-full">
                <div className="text-xs font-semibold" style={{ color: triangleColor }}>
                  <MathText>{`$\\sin\\theta$`}</MathText>
                </div>
              </div>
            </foreignObject>
          </>
        )}

        {/* Angle arc */}
        {showAngleArc && angle !== null && angle !== 0 && (() => {
          const normalized = ((angle % 360) + 360) % 360;
          const isRightAngle = Math.abs(normalized - 90) < 1 || Math.abs(normalized - 270) < 1;

          return (
            <>
              {/* Show arc only if NOT a right angle */}
              {!isRightAngle && (
                <path
                  d={getAngleArcPath()}
                  fill="none"
                  stroke={angleArcColor}
                  strokeWidth={2}
                />
              )}

              {/* Right angle marker for 90° and 270° */}
              {isRightAngle && (() => {
                const markerSize = 25;
                const is90 = Math.abs(normalized - 90) < 1;

                if (is90) {
                  // 90° - marker in quadrant 1
                  return (
                    <rect
                      x={centerX}
                      y={centerY - markerSize}
                      width={markerSize}
                      height={markerSize}
                      fill="none"
                      stroke={angleArcColor}
                      strokeWidth={2}
                    />
                  );
                } else {
                  // 270° - marker in quadrant 3
                  return (
                    <rect
                      x={centerX - markerSize}
                      y={centerY}
                      width={markerSize}
                      height={markerSize}
                      fill="none"
                      stroke={angleArcColor}
                      strokeWidth={2}
                    />
                  );
                }
              })()}

              {/* Angle label - positioned outside the arc to avoid overlap */}
              {(() => {
                // Position label well outside the arc (arc is at 40px radius)
                const normalized = ((angle % 360) + 360) % 360;
                let labelAngle = angleRad / 2; // Default: bisector
                let labelRadius = 75; // Well outside the 40px arc to avoid overlap

                // For angles near cardinal directions, adjust positioning
                if (normalized >= 80 && normalized <= 100) {
                  // 90° - position more horizontally
                  labelAngle = 45 * Math.PI / 180; // Position at 45°
                  labelRadius = 80;
                } else if (normalized >= 170 && normalized <= 190) {
                  // 180° - position at 90° (top)
                  labelAngle = 90 * Math.PI / 180;
                  labelRadius = 80;
                } else if (normalized >= 260 && normalized <= 280) {
                  // 270° - position at 135° (upper left)
                  labelAngle = 135 * Math.PI / 180;
                  labelRadius = 80;
                } else if (normalized >= 40 && normalized <= 50) {
                  // 45° - move further out to avoid arc overlap
                  labelRadius = 80;
                }

                const labelX = centerX + labelRadius * Math.cos(labelAngle);
                const labelY = centerY - labelRadius * Math.sin(labelAngle);

                return (
                  <foreignObject
                    x={labelX - 40}
                    y={labelY - 12}
                    width={80}
                    height={25}
                  >
                    <div className="flex items-center justify-center h-full">
                      <div className="text-sm font-semibold" style={{ color: angleArcColor }}>
                        <MathText>{angleMode === 'radians' ? `$\\theta$` : `$\\theta = ${angle}°$`}</MathText>
                      </div>
                    </div>
                  </foreignObject>
                );
              })()}
            </>
          );
        })()}

        {/* Point P */}
        {showPoint && (
          <>
            {/* Radius line from center to point P */}
            <line
              x1={centerX}
              y1={centerY}
              x2={pointX}
              y2={pointY}
              stroke={pointColor}
              strokeWidth={2}
              opacity={0.6}
            />
            <circle cx={pointX} cy={pointY} r={5} fill={pointColor} />
            {(() => {
              // Position P label intelligently based on angle to avoid overlaps and circle edge
              const normalized = ((angle % 360) + 360) % 360;
              let offsetX = 10;
              let offsetY = -10;

              // Adjust based on quadrant to keep label away from circle edge
              if (normalized >= 80 && normalized <= 100) {
                // Near 90° - position label above and to the right
                offsetX = 20;
                offsetY = -15;
              } else if (normalized >= 170 && normalized <= 190) {
                // Near 180° - position to the left
                offsetX = -30;
                offsetY = 5;
              } else if (normalized >= 260 && normalized <= 280) {
                // Near 270° - position below and to the right
                offsetX = 20;
                offsetY = 20;
              } else if (normalized >= 350 || normalized <= 10) {
                // Near 0°/360° - position to the right
                offsetX = 15;
                offsetY = -10;
              }

              return (
                <text x={pointX + offsetX} y={pointY + offsetY} fill={pointColor} className="text-sm font-semibold">P</text>
              );
            })()}
          </>
        )}

        {/* Coordinate display */}
        {showCoordinates && showPoint && (
          (() => {
            // Position coordinates intelligently to avoid overlaps
            const normalized = ((angle % 360) + 360) % 360;
            let offsetX = 15;
            let offsetY = -5;

            // Adjust based on angle to prevent overlapping with P label or going off-screen
            if (normalized >= 80 && normalized <= 100) {
              // Near 90° - position below the point
              offsetX = -50;
              offsetY = 15;
            } else if (normalized >= 170 && normalized <= 190) {
              // Near 180° - position to the left
              offsetX = -110;
              offsetY = -5;
            } else if (normalized >= 260 && normalized <= 280) {
              // Near 270° - position above
              offsetX = -50;
              offsetY = -35;
            } else if (normalized >= 350 || normalized <= 10) {
              // Near 0°/360° - position to the right
              offsetX = 15;
              offsetY = -5;
            }

            return (
              <foreignObject
                x={pointX + offsetX}
                y={pointY + offsetY}
                width={100}
                height={30}
              >
                <div className="flex items-center justify-start h-full">
                  <div className="text-xs font-semibold" style={{ color: pointColor }}>
                    <MathText>{`$(${cosTheta.toFixed(2)}, ${sinTheta.toFixed(2)})$`}</MathText>
                  </div>
                </div>
              </foreignObject>
            );
          })()
        )}

        {/* ASTC labels */}
        {showASTC && (
          <>
            {/* Quadrant 1: All positive (A) */}
            <text x={centerX + radius * 0.6} y={centerY - radius * 0.6} fill={axisColor} className="text-xl font-bold">
              A
            </text>
            <text x={centerX + radius * 0.5} y={centerY - radius * 0.45} fill={specialAngleColor} className="text-xs">
              (All positive)
            </text>

            {/* Quadrant 2: Sin positive (S) */}
            <text x={centerX - radius * 0.6} y={centerY - radius * 0.6} fill={axisColor} className="text-xl font-bold">
              S
            </text>
            <text x={centerX - radius * 0.7} y={centerY - radius * 0.45} fill={specialAngleColor} className="text-xs">
              (Sin positive)
            </text>

            {/* Quadrant 3: Tan positive (T) */}
            <text x={centerX - radius * 0.6} y={centerY + radius * 0.6} fill={axisColor} className="text-xl font-bold">
              T
            </text>
            <text x={centerX - radius * 0.7} y={centerY + radius * 0.75} fill={specialAngleColor} className="text-xs">
              (Tan positive)
            </text>

            {/* Quadrant 4: Cos positive (C) */}
            <text x={centerX + radius * 0.6} y={centerY + radius * 0.6} fill={axisColor} className="text-xl font-bold">
              C
            </text>
            <text x={centerX + radius * 0.5} y={centerY + radius * 0.75} fill={specialAngleColor} className="text-xs">
              (Cos positive)
            </text>
          </>
        )}

        {/* Axis labels for 1 and -1 */}
        <text x={centerX + radius + 20} y={centerY + 5} fill={axisColor} className="text-xs">1</text>
        <text x={centerX - radius - 25} y={centerY + 5} fill={axisColor} className="text-xs">-1</text>
        <text x={centerX + 5} y={centerY - radius - 10} fill={axisColor} className="text-xs">1</text>
        <text x={centerX + 5} y={centerY + radius + 20} fill={axisColor} className="text-xs">-1</text>
      </svg>

      {/* Caption */}
      {caption && (
        <div
          className="text-sm text-center mt-2 px-4"
          style={{ color: theme.colors.textSecondary }}
        >
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default UnitCircleVisualizer;
