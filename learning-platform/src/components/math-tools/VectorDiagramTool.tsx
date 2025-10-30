import React from 'react';

interface Vector {
  label: string;
  x: number;
  y: number;
}

interface VectorDiagramToolProps {
  vectors: string; // JSON array: [{"label":"a","x":3,"y":4},{"label":"b","x":-2,"y":1}]
  operation?: 'none' | 'add' | 'subtract' | 'scalar';
  resultant?: boolean;
  showComponents?: boolean;
  gridSize?: number;
}

const VectorDiagramTool: React.FC<VectorDiagramToolProps> = ({
  vectors,
  operation = 'none',
  resultant = false,
  showComponents = false,
  gridSize = 10
}) => {
  // Parse vectors from JSON string
  let vectorList: Vector[] = [];
  try {
    vectorList = JSON.parse(vectors);
  } catch (e) {
    return (
      <div className="text-red-600 dark:text-red-400 p-4 border border-red-300 dark:border-red-700 rounded">
        Error: Invalid vectors format. Expected JSON array like: {`[{"label":"a","x":3,"y":4}]`}
      </div>
    );
  }

  // SVG dimensions
  const width = 600;
  const height = 600;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = 25; // pixels per grid unit

  // Calculate resultant vector if needed
  let resultantVector: Vector | null = null;
  if (operation === 'add' && vectorList.length >= 2) {
    const sum = vectorList.reduce((acc, v) => ({
      label: 'resultant',
      x: acc.x + v.x,
      y: acc.y + v.y
    }), { label: 'resultant', x: 0, y: 0 });
    resultantVector = sum;
  } else if (operation === 'subtract' && vectorList.length >= 2) {
    resultantVector = {
      label: 'resultant',
      x: vectorList[0].x - vectorList[1].x,
      y: vectorList[0].y - vectorList[1].y
    };
  }

  // Convert vector coordinates to SVG coordinates
  const toSVG = (x: number, y: number) => ({
    x: centerX + x * scale,
    y: centerY - y * scale // Flip y-axis for mathematical convention
  });

  // Draw arrow
  const drawArrow = (
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    color: string,
    label: string,
    showLabel = true
  ) => {
    const dx = endX - startX;
    const dy = endY - startY;
    const length = Math.sqrt(dx * dx + dy * dy);

    if (length < 1) return null;

    const angle = Math.atan2(dy, dx);
    const arrowSize = 12;

    // Arrow head points
    const arrowX1 = endX - arrowSize * Math.cos(angle - Math.PI / 6);
    const arrowY1 = endY - arrowSize * Math.sin(angle - Math.PI / 6);
    const arrowX2 = endX - arrowSize * Math.cos(angle + Math.PI / 6);
    const arrowY2 = endY - arrowSize * Math.sin(angle + Math.PI / 6);

    // Label position (midpoint, slightly offset)
    const labelX = (startX + endX) / 2 + 15;
    const labelY = (startY + endY) / 2 - 10;

    return (
      <g key={`arrow-${label}-${startX}-${startY}`}>
        <line
          x1={startX}
          y1={startY}
          x2={endX}
          y2={endY}
          stroke={color}
          strokeWidth="2.5"
          markerEnd="url(#arrowhead)"
        />
        <polygon
          points={`${endX},${endY} ${arrowX1},${arrowY1} ${arrowX2},${arrowY2}`}
          fill={color}
        />
        {showLabel && (
          <text
            x={labelX}
            y={labelY}
            fontSize="18"
            fontWeight="bold"
            fill={color}
            className="select-none"
          >
            {label}
          </text>
        )}
      </g>
    );
  };

  // Draw grid
  const renderGrid = () => {
    const lines = [];
    const range = gridSize;

    for (let i = -range; i <= range; i++) {
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
          className="dark:stroke-slate-700"
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
          className="dark:stroke-slate-700"
        />
      );

      // Grid labels
      if (i !== 0 && i % 2 === 0) {
        lines.push(
          <text
            key={`label-x-${i}`}
            x={svgPos.x}
            y={centerY + 20}
            fontSize="12"
            textAnchor="middle"
            fill="#64748b"
            className="select-none dark:fill-slate-400"
          >
            {i}
          </text>
        );
        lines.push(
          <text
            key={`label-y-${i}`}
            x={centerX - 20}
            y={svgPosY.y + 5}
            fontSize="12"
            textAnchor="middle"
            fill="#64748b"
            className="select-none dark:fill-slate-400"
          >
            {i}
          </text>
        );
      }
    }

    return lines;
  };

  // Render vectors based on operation
  const renderVectors = () => {
    const elements = [];

    if (operation === 'none' || operation === 'scalar') {
      // Draw each vector from origin
      vectorList.forEach((v, idx) => {
        const start = toSVG(0, 0);
        const end = toSVG(v.x, v.y);
        const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'];
        const color = colors[idx % colors.length];

        elements.push(
          drawArrow(start.x, start.y, end.x, end.y, color, v.label)
        );

        // Show components if requested
        if (showComponents && v.x !== 0 && v.y !== 0) {
          const componentColor = '#94a3b8';
          // X component
          elements.push(
            <line
              key={`comp-x-${idx}`}
              x1={start.x}
              y1={start.y}
              x2={toSVG(v.x, 0).x}
              y2={toSVG(v.x, 0).y}
              stroke={componentColor}
              strokeWidth="1.5"
              strokeDasharray="4,4"
              className="dark:stroke-slate-500"
            />
          );
          // Y component
          elements.push(
            <line
              key={`comp-y-${idx}`}
              x1={toSVG(v.x, 0).x}
              y1={toSVG(v.x, 0).y}
              x2={end.x}
              y2={end.y}
              stroke={componentColor}
              strokeWidth="1.5"
              strokeDasharray="4,4"
              className="dark:stroke-slate-500"
            />
          );
          // Labels for components
          elements.push(
            <text
              key={`comp-label-x-${idx}`}
              x={(start.x + toSVG(v.x, 0).x) / 2}
              y={start.y + 20}
              fontSize="14"
              fill={componentColor}
              textAnchor="middle"
              className="select-none dark:fill-slate-400"
            >
              {v.x}i
            </text>
          );
          elements.push(
            <text
              key={`comp-label-y-${idx}`}
              x={toSVG(v.x, 0).x + 20}
              y={(toSVG(v.x, 0).y + end.y) / 2}
              fontSize="14"
              fill={componentColor}
              textAnchor="middle"
              className="select-none dark:fill-slate-400"
            >
              {v.y}j
            </text>
          );
        }
      });
    } else if (operation === 'add' && vectorList.length >= 2) {
      // Triangle law: draw vectors head-to-tail
      const start1 = toSVG(0, 0);
      const end1 = toSVG(vectorList[0].x, vectorList[0].y);
      elements.push(
        drawArrow(start1.x, start1.y, end1.x, end1.y, '#3b82f6', vectorList[0].label)
      );

      const start2 = end1;
      const end2 = toSVG(vectorList[0].x + vectorList[1].x, vectorList[0].y + vectorList[1].y);
      elements.push(
        drawArrow(start2.x, start2.y, end2.x, end2.y, '#ef4444', vectorList[1].label)
      );

      // Draw resultant if requested
      if (resultant && resultantVector) {
        const resultStart = toSVG(0, 0);
        const resultEnd = toSVG(resultantVector.x, resultantVector.y);
        elements.push(
          drawArrow(resultStart.x, resultStart.y, resultEnd.x, resultEnd.y, '#10b981', `${vectorList[0].label}+${vectorList[1].label}`)
        );
      }
    } else if (operation === 'subtract' && vectorList.length >= 2) {
      // Draw a and -b, then resultant
      const start1 = toSVG(0, 0);
      const end1 = toSVG(vectorList[0].x, vectorList[0].y);
      elements.push(
        drawArrow(start1.x, start1.y, end1.x, end1.y, '#3b82f6', vectorList[0].label)
      );

      // Draw -b from origin
      const startNeg = toSVG(0, 0);
      const endNeg = toSVG(-vectorList[1].x, -vectorList[1].y);
      elements.push(
        drawArrow(startNeg.x, startNeg.y, endNeg.x, endNeg.y, '#f59e0b', `-${vectorList[1].label}`)
      );

      // Draw resultant if requested
      if (resultant && resultantVector) {
        const resultStart = toSVG(0, 0);
        const resultEnd = toSVG(resultantVector.x, resultantVector.y);
        elements.push(
          drawArrow(resultStart.x, resultStart.y, resultEnd.x, resultEnd.y, '#10b981', `${vectorList[0].label}-${vectorList[1].label}`)
        );
      }
    }

    return elements;
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

        {/* Vectors */}
        {renderVectors()}
      </svg>

      {/* Legend */}
      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
        {operation === 'add' && vectorList.length >= 2 && (
          <p className="text-center">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">{vectorList[0].label}</span>
            {' '}+{' '}
            <span className="text-red-600 dark:text-red-400 font-semibold">{vectorList[1].label}</span>
            {resultant && (
              <>
                {' '}={' '}
                <span className="text-green-600 dark:text-green-400 font-semibold">
                  {vectorList[0].label}+{vectorList[1].label}
                </span>
                {' '}({resultantVector?.x}, {resultantVector?.y})
              </>
            )}
          </p>
        )}
        {operation === 'subtract' && vectorList.length >= 2 && (
          <p className="text-center">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">{vectorList[0].label}</span>
            {' '}-{' '}
            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">{vectorList[1].label}</span>
            {resultant && (
              <>
                {' '}={' '}
                <span className="text-green-600 dark:text-green-400 font-semibold">
                  {vectorList[0].label}-{vectorList[1].label}
                </span>
                {' '}({resultantVector?.x}, {resultantVector?.y})
              </>
            )}
          </p>
        )}
        {showComponents && vectorList.length > 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 text-xs">
            Dashed lines show i and j components
          </p>
        )}
      </div>
    </div>
  );
};

export default VectorDiagramTool;
