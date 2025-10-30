import React from 'react';

interface ComponentFormVisualizerProps {
  vectorX: number;
  vectorY: number;
  label?: string;
  showIJ?: boolean;
  showColumn?: boolean;
  showGrid?: boolean;
  highlightComponent?: 'none' | 'x' | 'y' | 'both';
}

const ComponentFormVisualizer: React.FC<ComponentFormVisualizerProps> = ({
  vectorX,
  vectorY,
  label = 'v',
  showIJ = true,
  showColumn = true,
  showGrid = true,
  highlightComponent = 'none'
}) => {
  // SVG dimensions
  const width = 500;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = 30; // pixels per unit

  // Convert vector coordinates to SVG coordinates
  const toSVG = (x: number, y: number) => ({
    x: centerX + x * scale,
    y: centerY - y * scale // Flip y-axis
  });

  // Calculate grid range based on vector magnitude
  const maxComponent = Math.max(Math.abs(vectorX), Math.abs(vectorY));
  const gridRange = Math.max(5, Math.ceil(maxComponent) + 2);

  // Draw grid
  const renderGrid = () => {
    if (!showGrid) return null;

    const lines = [];
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

      // Grid labels
      if (i !== 0 && i % 1 === 0) {
        lines.push(
          <text
            key={`label-x-${i}`}
            x={svgPos.x}
            y={centerY + 18}
            fontSize="11"
            textAnchor="middle"
            fill="#94a3b8"
            className="select-none dark:fill-slate-500"
          >
            {i}
          </text>
        );
        lines.push(
          <text
            key={`label-y-${i}`}
            x={centerX - 18}
            y={svgPosY.y + 4}
            fontSize="11"
            textAnchor="middle"
            fill="#94a3b8"
            className="select-none dark:fill-slate-500"
          >
            {i}
          </text>
        );
      }
    }

    return lines;
  };

  // Draw arrow
  const drawArrow = (
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    color: string,
    strokeWidth = 2.5
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
          strokeWidth={strokeWidth}
        />
        <polygon
          points={`${endX},${endY} ${arrowX1},${arrowY1} ${arrowX2},${arrowY2}`}
          fill={color}
        />
      </g>
    );
  };

  // Calculate positions
  const origin = toSVG(0, 0);
  const vectorEnd = toSVG(vectorX, vectorY);
  const xComponent = toSVG(vectorX, 0);
  const yComponentStart = toSVG(vectorX, 0);

  // Colors based on highlighting
  const xColor = highlightComponent === 'x' || highlightComponent === 'both' ? '#ef4444' : '#94a3b8';
  const yColor = highlightComponent === 'y' || highlightComponent === 'both' ? '#ef4444' : '#94a3b8';
  const vectorColor = '#3b82f6';

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

        {/* X component (horizontal dashed line) */}
        {vectorX !== 0 && (
          <g>
            <line
              x1={origin.x}
              y1={origin.y}
              x2={xComponent.x}
              y2={xComponent.y}
              stroke={xColor}
              strokeWidth={highlightComponent === 'x' || highlightComponent === 'both' ? 2.5 : 1.5}
              strokeDasharray="5,5"
              className={highlightComponent === 'x' || highlightComponent === 'both' ? 'dark:stroke-red-500' : 'dark:stroke-slate-500'}
            />
            <text
              x={(origin.x + xComponent.x) / 2}
              y={origin.y + 25}
              fontSize="14"
              fontWeight={highlightComponent === 'x' || highlightComponent === 'both' ? 'bold' : 'normal'}
              fill={xColor}
              textAnchor="middle"
              className={`select-none ${highlightComponent === 'x' || highlightComponent === 'both' ? 'dark:fill-red-400' : 'dark:fill-slate-400'}`}
            >
              {vectorX}i
            </text>
          </g>
        )}

        {/* Y component (vertical dashed line) */}
        {vectorY !== 0 && (
          <g>
            <line
              x1={yComponentStart.x}
              y1={yComponentStart.y}
              x2={vectorEnd.x}
              y2={vectorEnd.y}
              stroke={yColor}
              strokeWidth={highlightComponent === 'y' || highlightComponent === 'both' ? 2.5 : 1.5}
              strokeDasharray="5,5"
              className={highlightComponent === 'y' || highlightComponent === 'both' ? 'dark:stroke-red-500' : 'dark:stroke-slate-500'}
            />
            <text
              x={vectorEnd.x + 25}
              y={(yComponentStart.y + vectorEnd.y) / 2}
              fontSize="14"
              fontWeight={highlightComponent === 'y' || highlightComponent === 'both' ? 'bold' : 'normal'}
              fill={yColor}
              textAnchor="middle"
              className={`select-none ${highlightComponent === 'y' || highlightComponent === 'both' ? 'dark:fill-red-400' : 'dark:fill-slate-400'}`}
            >
              {vectorY}j
            </text>
          </g>
        )}

        {/* Main vector */}
        {drawArrow(origin.x, origin.y, vectorEnd.x, vectorEnd.y, vectorColor, 3)}

        {/* Vector label */}
        <text
          x={vectorEnd.x + 15}
          y={vectorEnd.y - 15}
          fontSize="18"
          fontWeight="bold"
          fill={vectorColor}
          className="select-none dark:fill-blue-400"
        >
          {label}
        </text>

        {/* Endpoint coordinates */}
        <circle
          cx={vectorEnd.x}
          cy={vectorEnd.y}
          r="4"
          fill={vectorColor}
          className="dark:fill-blue-400"
        />
        <text
          x={vectorEnd.x + 15}
          y={vectorEnd.y + 25}
          fontSize="12"
          fill="#64748b"
          className="select-none dark:fill-slate-400"
        >
          ({vectorX}, {vectorY})
        </text>
      </svg>

      {/* Notation displays */}
      <div className="flex flex-col items-center space-y-2 text-gray-800 dark:text-gray-200">
        {showColumn && (
          <div className="flex items-center space-x-3">
            <span className="font-semibold text-blue-600 dark:text-blue-400">{label}</span>
            <span>=</span>
            <div className="flex flex-col items-center border-l-2 border-r-2 border-gray-600 dark:border-gray-400 px-2">
              <span className={highlightComponent === 'x' || highlightComponent === 'both' ? 'text-red-600 dark:text-red-400 font-bold' : ''}>
                {vectorX}
              </span>
              <span className={highlightComponent === 'y' || highlightComponent === 'both' ? 'text-red-600 dark:text-red-400 font-bold' : ''}>
                {vectorY}
              </span>
            </div>
          </div>
        )}

        {showIJ && (
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-blue-600 dark:text-blue-400">{label}</span>
            <span>=</span>
            <span className={highlightComponent === 'x' || highlightComponent === 'both' ? 'text-red-600 dark:text-red-400 font-bold' : ''}>
              {vectorX}
            </span>
            <span className={highlightComponent === 'x' || highlightComponent === 'both' ? 'text-red-600 dark:text-red-400 font-bold' : ''}>
              i
            </span>
            <span>{vectorY >= 0 ? '+' : ''}</span>
            <span className={highlightComponent === 'y' || highlightComponent === 'both' ? 'text-red-600 dark:text-red-400 font-bold' : ''}>
              {vectorY}
            </span>
            <span className={highlightComponent === 'y' || highlightComponent === 'both' ? 'text-red-600 dark:text-red-400 font-bold' : ''}>
              j
            </span>
          </div>
        )}

        {/* Magnitude */}
        <div className="text-sm text-gray-600 dark:text-gray-400">
          |{label}| = √({vectorX}² + {vectorY}²) = {Math.sqrt(vectorX * vectorX + vectorY * vectorY).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default ComponentFormVisualizer;
