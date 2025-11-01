import React from 'react';

interface DotProductVisualizerProps {
  vector1X: number;
  vector1Y: number;
  vector2X: number;
  vector2Y: number;
  label1?: string;
  label2?: string;
  showAngle?: boolean;
  showDotProduct?: boolean;
  showMagnitudes?: boolean;
}

const DotProductVisualizer: React.FC<DotProductVisualizerProps> = ({
  vector1X,
  vector1Y,
  vector2X,
  vector2Y,
  label1 = 'a',
  label2 = 'b',
  showAngle = true,
  showDotProduct = true,
  showMagnitudes = false
}) => {
  // SVG dimensions
  const width = 600;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = 35; // pixels per unit

  // Calculate dot product
  const dotProduct = vector1X * vector2X + vector1Y * vector2Y;

  // Calculate magnitudes
  const mag1 = Math.sqrt(vector1X * vector1X + vector1Y * vector1Y);
  const mag2 = Math.sqrt(vector2X * vector2X + vector2Y * vector2Y);

  // Calculate angle between vectors (in degrees)
  const cosTheta = mag1 > 0 && mag2 > 0 ? dotProduct / (mag1 * mag2) : 0;
  const angleRad = Math.acos(Math.max(-1, Math.min(1, cosTheta)));
  const angleDeg = (angleRad * 180) / Math.PI;

  // Check if perpendicular
  const isPerpendicular = Math.abs(dotProduct) < 0.0001;

  // Convert vector coordinates to SVG coordinates
  const toSVG = (x: number, y: number) => ({
    x: centerX + x * scale,
    y: centerY - y * scale
  });

  // Draw arrow
  const drawArrow = (
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    color: string,
    labelText: string
  ) => {
    const dx = endX - startX;
    const dy = endY - startY;
    const length = Math.sqrt(dx * dx + dy * dy);

    if (length < 1) return null;

    const angle = Math.atan2(dy, dx);
    const arrowSize = 12;

    const arrowX1 = endX - arrowSize * Math.cos(angle - Math.PI / 6);
    const arrowY1 = endY - arrowSize * Math.sin(angle - Math.PI / 6);
    const arrowX2 = endX - arrowSize * Math.cos(angle + Math.PI / 6);
    const arrowY2 = endY - arrowSize * Math.sin(angle + Math.PI / 6);

    return (
      <g>
        <line
          x1={startX}
          y1={startY}
          x2={endX}
          y2={endY}
          stroke={color}
          strokeWidth="3"
        />
        <polygon
          points={`${endX},${endY} ${arrowX1},${arrowY1} ${arrowX2},${arrowY2}`}
          fill={color}
        />
        <text
          x={endX + 15}
          y={endY - 10}
          fontSize="18"
          fontWeight="bold"
          fill={color}
          className="select-none"
        >
          {labelText}
        </text>
      </g>
    );
  };

  // Draw angle arc
  const drawAngleArc = () => {
    if (!showAngle || isPerpendicular) return null;

    const arcRadius = 50;
    const angle1 = Math.atan2(-vector1Y, vector1X); // Flip y for SVG
    const angle2 = Math.atan2(-vector2Y, vector2X);

    // Ensure arc goes the shorter way
    let startAngle = angle1;
    let endAngle = angle2;
    if (Math.abs(endAngle - startAngle) > Math.PI) {
      if (startAngle < endAngle) {
        startAngle += 2 * Math.PI;
      } else {
        endAngle += 2 * Math.PI;
      }
    }

    const startX = centerX + arcRadius * Math.cos(startAngle);
    const startY = centerY + arcRadius * Math.sin(startAngle);
    const endX = centerX + arcRadius * Math.cos(endAngle);
    const endY = centerY + arcRadius * Math.sin(endAngle);

    const largeArcFlag = Math.abs(endAngle - startAngle) > Math.PI ? 1 : 0;
    const sweepFlag = endAngle > startAngle ? 1 : 0;

    return (
      <g>
        <path
          d={`M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}`}
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="2"
          className="dark:stroke-purple-400"
        />
        <text
          x={centerX + (arcRadius + 20) * Math.cos((startAngle + endAngle) / 2)}
          y={centerY + (arcRadius + 20) * Math.sin((startAngle + endAngle) / 2)}
          fontSize="14"
          fontWeight="bold"
          fill="#8b5cf6"
          textAnchor="middle"
          className="select-none dark:fill-purple-400"
        >
          θ
        </text>
      </g>
    );
  };

  // Calculate positions
  const origin = toSVG(0, 0);
  const vector1End = toSVG(vector1X, vector1Y);
  const vector2End = toSVG(vector2X, vector2Y);

  // Draw grid
  const renderGrid = () => {
    const lines = [];
    const gridRange = 6;

    for (let i = -gridRange; i <= gridRange; i++) {
      const svgPos = toSVG(i, 0);
      const svgPosY = toSVG(0, i);

      // Vertical lines
      lines.push(
        <line
          key={`v-${i}`}
          x1={svgPos.x}
          y1={0}
          x2={svgPos.x}
          y2={height}
          stroke={i === 0 ? '#64748b' : '#e2e8f0'}
          strokeWidth={i === 0 ? 2 : 1}
          className={i === 0 ? 'dark:stroke-slate-600' : 'dark:stroke-slate-800'}
        />
      );

      // Horizontal lines
      lines.push(
        <line
          key={`h-${i}`}
          x1={0}
          y1={svgPosY.y}
          x2={width}
          y2={svgPosY.y}
          stroke={i === 0 ? '#64748b' : '#e2e8f0'}
          strokeWidth={i === 0 ? 2 : 1}
          className={i === 0 ? 'dark:stroke-slate-600' : 'dark:stroke-slate-800'}
        />
      );
    }

    return lines;
  };

  return (
    <div className="flex flex-col items-center space-y-4 my-6">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900"
      >
        {/* Grid */}
        {renderGrid()}

        {/* Angle arc */}
        {drawAngleArc()}

        {/* Vector 1 */}
        {drawArrow(origin.x, origin.y, vector1End.x, vector1End.y, '#3b82f6', label1)}

        {/* Vector 2 */}
        {drawArrow(origin.x, origin.y, vector2End.x, vector2End.y, '#ef4444', label2)}

        {/* Perpendicular indicator */}
        {isPerpendicular && (() => {
          // Calculate angles of both vectors in SVG coordinates (y is flipped)
          const angle1 = Math.atan2(-vector1Y, vector1X);
          const angle2 = Math.atan2(-vector2Y, vector2X);

          // Size of the right angle marker
          const markerSize = 20;

          // Calculate the four corners of the right angle marker
          // Start from origin, go along vector 1, turn 90°, go along vector 2, back to origin
          const p1 = { x: centerX, y: centerY }; // origin
          const p2 = {
            x: centerX + markerSize * Math.cos(angle1),
            y: centerY + markerSize * Math.sin(angle1)
          };
          const p3 = {
            x: centerX + markerSize * Math.cos(angle1) + markerSize * Math.cos(angle2),
            y: centerY + markerSize * Math.sin(angle1) + markerSize * Math.sin(angle2)
          };
          const p4 = {
            x: centerX + markerSize * Math.cos(angle2),
            y: centerY + markerSize * Math.sin(angle2)
          };

          return (
            <g>
              {/* Draw the right angle marker as a path */}
              <path
                d={`M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} L ${p4.x} ${p4.y} Z`}
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                className="dark:stroke-green-400"
              />
              <text
                x={centerX + 30}
                y={centerY + 5}
                fontSize="14"
                fontWeight="bold"
                fill="#10b981"
                className="select-none dark:fill-green-400"
              >
                ⊥
              </text>
            </g>
          );
        })()}
      </svg>

      {/* Information panel */}
      <div className="flex flex-col items-center space-y-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 w-full max-w-xl">
        {/* Vectors */}
        <div className="flex justify-around w-full text-sm">
          <div className="text-blue-600 dark:text-blue-400 font-semibold">
            {label1} = ({vector1X}, {vector1Y})
          </div>
          <div className="text-red-600 dark:text-red-400 font-semibold">
            {label2} = ({vector2X}, {vector2Y})
          </div>
        </div>

        {/* Magnitudes */}
        {showMagnitudes && (
          <div className="flex justify-around w-full text-sm text-gray-700 dark:text-gray-300">
            <div>
              |{label1}| = {mag1.toFixed(2)}
            </div>
            <div>
              |{label2}| = {mag2.toFixed(2)}
            </div>
          </div>
        )}

        {/* Dot Product */}
        {showDotProduct && (
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {label1} · {label2} = {vector1X}({vector2X}) + {vector1Y}({vector2Y}) ={' '}
              <span className={isPerpendicular ? 'text-green-600 dark:text-green-400' : 'text-purple-600 dark:text-purple-400'}>
                {dotProduct.toFixed(2)}
              </span>
            </div>
            {isPerpendicular && (
              <div className="text-sm text-green-600 dark:text-green-400 font-semibold mt-1">
                Vectors are PERPENDICULAR ({label1} ⊥ {label2})
              </div>
            )}
          </div>
        )}

        {/* Angle */}
        {showAngle && !isPerpendicular && (
          <div className="text-center text-purple-700 dark:text-purple-300">
            <div className="text-sm">
              cos θ = ({label1} · {label2}) / (|{label1}| × |{label2}|) = {dotProduct.toFixed(2)} / ({mag1.toFixed(2)} × {mag2.toFixed(2)})
            </div>
            <div className="text-lg font-semibold mt-1">
              θ = {angleDeg.toFixed(1)}°
              {angleDeg < 90 && <span className="text-sm ml-2">(acute)</span>}
              {angleDeg > 90 && <span className="text-sm ml-2">(obtuse)</span>}
            </div>
          </div>
        )}

        {showAngle && isPerpendicular && (
          <div className="text-center text-green-700 dark:text-green-300 font-semibold">
            θ = 90° (right angle)
          </div>
        )}
      </div>
    </div>
  );
};

export default DotProductVisualizer;
