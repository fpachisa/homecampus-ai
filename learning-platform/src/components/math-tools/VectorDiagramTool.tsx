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

  // Calculate bounds from all vectors for auto-scaling
  const calculateVectorBounds = () => {
    if (vectorList.length === 0) return { minX: -10, maxX: 10, minY: -10, maxY: 10 };

    let minX = 0, maxX = 0, minY = 0, maxY = 0;

    // ONLY check the input vectors (not resultant)
    // This ensures the grid scales to show the problem values, not calculation results
    vectorList.forEach(v => {
      minX = Math.min(minX, v.x);
      maxX = Math.max(maxX, v.x);
      minY = Math.min(minY, v.y);
      maxY = Math.max(maxY, v.y);
    });

    // For subtract operation, also include -b in bounds since it's displayed
    if (operation === 'subtract' && vectorList.length >= 2) {
      const negX = -vectorList[1].x;
      const negY = -vectorList[1].y;
      minX = Math.min(minX, negX);
      maxX = Math.max(maxX, negX);
      minY = Math.min(minY, negY);
      maxY = Math.max(maxY, negY);
    }

    // Add 25% padding for visual breathing room and resultant
    const rangeX = Math.max(maxX - minX, 1);
    const rangeY = Math.max(maxY - minY, 1);
    const paddingX = Math.max(1, rangeX * 0.25);
    const paddingY = Math.max(1, rangeY * 0.25);

    return {
      minX: Math.floor(minX - paddingX),
      maxX: Math.ceil(maxX + paddingX),
      minY: Math.floor(minY - paddingY),
      maxY: Math.ceil(maxY + paddingY)
    };
  };

  const bounds = calculateVectorBounds();

  // SVG dimensions
  const width = 600;
  const height = 600;

  // Calculate dynamic scale to fit all vectors
  const rangeX = Math.max(bounds.maxX - bounds.minX, 1);
  const rangeY = Math.max(bounds.maxY - bounds.minY, 1);

  // Scale to fit the larger dimension (with margins for labels)
  const dynamicScale = Math.min(
    (width - 100) / rangeX,   // Leave 100px for labels
    (height - 100) / rangeY
  );

  // Use manual gridSize if provided, otherwise use auto-scale
  const effectiveGridSize = gridSize !== 10 ? gridSize : Math.max(
    Math.abs(bounds.minX),
    Math.abs(bounds.maxX),
    Math.abs(bounds.minY),
    Math.abs(bounds.maxY)
  );

  // If manual gridSize is provided and differs from default, calculate scale based on it
  const scale = gridSize !== 10 ? (width - 100) / (gridSize * 2) : dynamicScale;

  // Center based on actual vector bounds
  const centerX = width / 2 - ((bounds.minX + bounds.maxX) / 2) * scale;
  const centerY = height / 2 + ((bounds.minY + bounds.maxY) / 2) * scale;

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

  // Label collision detection
  const labelPositions: Array<{ x: number; y: number; width: number; height: number }> = [];

  const calculateLabelPosition = (endX: number, endY: number, angle: number, label: string) => {
    // Estimate label dimensions
    const charWidth = 11;
    const labelWidth = label.length * charWidth;
    const labelHeight = 22;

    // Try multiple positions around the arrow tip (closer to arrow)
    const offsetDistance = 15; // Reduced from 25 to 15 for closer placement
    const positions = [
      // Above-right (perpendicular offset)
      { x: endX + Math.cos(angle + Math.PI / 2) * offsetDistance, y: endY + Math.sin(angle + Math.PI / 2) * offsetDistance },
      // Below-left (opposite perpendicular)
      { x: endX + Math.cos(angle - Math.PI / 2) * offsetDistance, y: endY + Math.sin(angle - Math.PI / 2) * offsetDistance },
      // Forward along arrow direction
      { x: endX + Math.cos(angle) * offsetDistance, y: endY + Math.sin(angle) * offsetDistance },
      // Diagonal above
      { x: endX + Math.cos(angle + Math.PI / 3) * offsetDistance, y: endY + Math.sin(angle + Math.PI / 3) * offsetDistance },
      // Diagonal below
      { x: endX + Math.cos(angle - Math.PI / 3) * offsetDistance, y: endY + Math.sin(angle - Math.PI / 3) * offsetDistance },
    ];

    // Find first non-colliding position
    for (const pos of positions) {
      const bounds = {
        x: pos.x - labelWidth / 2,
        y: pos.y - labelHeight / 2,
        width: labelWidth,
        height: labelHeight
      };

      const hasCollision = labelPositions.some(existing => {
        return !(
          bounds.x + bounds.width < existing.x ||
          bounds.x > existing.x + existing.width ||
          bounds.y + bounds.height < existing.y ||
          bounds.y > existing.y + existing.height
        );
      });

      if (!hasCollision) {
        labelPositions.push(bounds);
        return pos;
      }
    }

    // Fallback to first position
    const fallback = positions[0];
    labelPositions.push({
      x: fallback.x - labelWidth / 2,
      y: fallback.y - labelHeight / 2,
      width: labelWidth,
      height: labelHeight
    });
    return fallback;
  };

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

    // Label position at end of arrow with smart offset
    const labelPos = calculateLabelPosition(endX, endY, angle, label);
    const labelX = labelPos.x;
    const labelY = labelPos.y;

    return (
      <g key={`arrow-${label}-${startX}-${startY}`}>
        <line
          x1={startX}
          y1={startY}
          x2={endX}
          y2={endY}
          stroke={color}
          strokeWidth="2.5"
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
            textAnchor="middle"
            dominantBaseline="middle"
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
    // Use calculated effective grid size for auto-scaling
    const range = Math.ceil(effectiveGridSize);

    // Calculate "nice" grid intervals based on the actual vector values
    // This ensures grid lines align with problem values (e.g., 50, 100, 150)
    const calculateNiceInterval = (_rangeValue: number): number => {
      // Find the magnitude of the largest vector value
      const maxValue = Math.max(
        ...vectorList.map(v => Math.max(Math.abs(v.x), Math.abs(v.y)))
      );

      // Choose intervals that are "nice" round numbers
      // Priority: show actual vector values on grid when possible
      if (maxValue <= 10) return 1;
      if (maxValue <= 20) return 2;
      if (maxValue <= 30) return 5;
      if (maxValue <= 50) return 5;
      if (maxValue <= 100) return 10;
      if (maxValue <= 150) return 25;   // For values like 100, 150 → grid at 0, 25, 50, 75, 100, 125, 150
      if (maxValue <= 200) return 50;   // For values like 150, 200 → grid at 0, 50, 100, 150, 200
      if (maxValue <= 500) return 50;
      if (maxValue <= 1000) return 100;
      return 200;
    };

    // Grid line interval - finer than labels
    const calculateGridLineInterval = (rangeValue: number): number => {
      const niceInterval = calculateNiceInterval(rangeValue);
      // Grid lines can be denser for larger intervals
      if (niceInterval >= 100) return niceInterval / 2;  // Half as dense
      if (niceInterval >= 50) return niceInterval / 2;
      return niceInterval;
    };

    // Label interval - less frequent to avoid crowding
    const calculateLabelInterval = (rangeValue: number): number => {
      const niceInterval = calculateNiceInterval(rangeValue);
      // Labels match the nice interval (or 2x for very small intervals)
      if (niceInterval <= 2) return niceInterval * 2;
      return niceInterval;
    };

    const gridLineInterval = calculateGridLineInterval(range);
    const labelInterval = calculateLabelInterval(range);

    // Calculate a nice starting point that's a multiple of gridLineInterval
    const startPos = Math.floor(-range / gridLineInterval) * gridLineInterval;
    const endPos = Math.ceil(range / gridLineInterval) * gridLineInterval;

    // Draw grid lines at appropriate intervals (not every unit!)
    for (let i = startPos; i <= endPos; i += gridLineInterval) {
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

      // Grid labels - use adaptive interval
      if (i !== 0 && i % labelInterval === 0) {
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
      // Group identical vectors together
      const vectorGroups = new Map<string, { vectors: Vector[], indices: number[] }>();

      vectorList.forEach((v, idx) => {
        const key = `${v.x},${v.y}`;
        if (!vectorGroups.has(key)) {
          vectorGroups.set(key, { vectors: [], indices: [] });
        }
        vectorGroups.get(key)!.vectors.push(v);
        vectorGroups.get(key)!.indices.push(idx);
      });

      // Draw each unique vector with combined labels
      vectorGroups.forEach((group) => {
        const v = group.vectors[0];
        const start = toSVG(0, 0);
        const end = toSVG(v.x, v.y);
        const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'];

        // Use first color, or mix colors if multiple vectors
        const color = colors[group.indices[0] % colors.length];

        // Combine labels with commas if multiple identical vectors
        const combinedLabel = group.vectors.map(vec => vec.label).join(', ');

        elements.push(
          drawArrow(start.x, start.y, end.x, end.y, color, combinedLabel)
        );

        // Show components if requested (only for first vector in group)
        if (showComponents && v.x !== 0 && v.y !== 0) {
          const componentColor = '#94a3b8';
          const firstIdx = group.indices[0];
          // X component
          elements.push(
            <line
              key={`comp-x-${firstIdx}`}
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
              key={`comp-y-${firstIdx}`}
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
              key={`comp-label-x-${firstIdx}`}
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
              key={`comp-label-y-${firstIdx}`}
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
