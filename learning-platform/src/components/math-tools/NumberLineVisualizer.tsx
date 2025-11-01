/**
 * Number Line Visualizer
 *
 * Interactive number line for teaching intervals, inequalities,
 * special number sets, integer operations, and real-world contexts.
 *
 * Enhanced for S1 Real Numbers:
 * - Temperature/altitude context overlays
 * - Integer operation animations (addition/subtraction)
 * - Comparison mode with distance visualization
 * - Dark mode support
 */

import React, { useState, useEffect } from 'react';

interface Interval {
  start: number | null;              // null for -∞
  end: number | null;                // null for +∞
  startInclusive?: boolean;          // Closed circle at start (default: false)
  endInclusive?: boolean;            // Closed circle at end (default: false)
  color?: string;                    // Interval color
  label?: string;                    // Label for this interval
}

interface Point {
  value: number;
  label?: string;
  style?: 'open' | 'closed' | 'none';
  color?: string;
}

interface NumberLineVisualizerProps {
  // Range
  min?: number;
  max?: number;
  step?: number;                     // Tick mark spacing

  // Intervals to display
  intervals?: Interval[];

  // Individual points to mark
  points?: Point[];

  // Visual options
  showTickMarks?: boolean;
  showTickLabels?: boolean;
  showArrows?: boolean;              // Show arrows at ends
  highlightIntegers?: boolean;       // Highlight integer positions

  // NEW: Operation visualization
  operation?: 'add' | 'subtract' | 'compare';
  operationValues?: [number, number]; // [start, value] for add/subtract, [num1, num2] for compare
  showMovement?: boolean;             // Animate operation movement

  // NEW: Context overlays
  context?: 'default' | 'temperature' | 'altitude';

  // Labels
  title?: string;
  caption?: string;
}

const NumberLineVisualizer: React.FC<NumberLineVisualizerProps> = ({
  min = -5,
  max = 5,
  step = 1,
  intervals = [],
  points = [],
  showTickMarks = true,
  showTickLabels = true,
  showArrows = true,
  highlightIntegers = false,
  operation,
  operationValues,
  showMovement = false,
  context = 'default',
  title,
  caption
}) => {
  // SVG dimensions
  const width = 600;
  const height = context !== 'default' ? 160 : 120; // Extra space for context overlays
  const lineY = context !== 'default' ? 80 : 60;
  const padding = 60;
  const lineLength = width - 2 * padding;

  // Animation state for operations
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Trigger animation when showMovement changes
  useEffect(() => {
    if (showMovement && operation && operationValues) {
      setIsAnimating(true);
      setAnimationProgress(0);

      const duration = 2000; // 2 seconds
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setAnimationProgress(progress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [showMovement, operation, operationValues]);

  // Convert value to x coordinate
  const valueToX = (value: number): number => {
    const range = max - min;
    const normalized = (value - min) / range;
    return padding + normalized * lineLength;
  };

  // Generate tick marks
  const generateTicks = (): number[] => {
    const ticks: number[] = [];
    for (let i = min; i <= max; i += step) {
      ticks.push(i);
    }
    return ticks;
  };

  const ticks = generateTicks();

  // Get context label for a value
  const getContextLabel = (value: number): string => {
    if (context === 'temperature') {
      return `${value}°C`;
    } else if (context === 'altitude') {
      return value >= 0 ? `${value}m above` : `${Math.abs(value)}m below`;
    }
    return String(value);
  };

  // Render context overlay
  const renderContextOverlay = () => {
    if (context === 'default') return null;

    const contextColor = context === 'temperature' ? '#ef4444' : '#3b82f6';
    const contextLabel = context === 'temperature' ? 'Temperature Scale' : 'Altitude Scale';

    return (
      <g>
        <text
          x={width / 2}
          y={20}
          fontSize="13"
          fontWeight="600"
          fill={contextColor}
          textAnchor="middle"
          className="dark:fill-current"
        >
          {contextLabel}
        </text>
        {context === 'temperature' && (
          <>
            <text x={padding - 40} y={lineY} fontSize="10" fill="#6b7280" className="dark:fill-gray-400">Freezing</text>
            <line x1={valueToX(0)} y1={lineY - 15} x2={valueToX(0)} y2={lineY - 5} stroke="#3b82f6" strokeWidth="2" />
            <text x={valueToX(0)} y={lineY - 20} fontSize="10" fill="#3b82f6" textAnchor="middle" fontWeight="600">0°C</text>
          </>
        )}
        {context === 'altitude' && (
          <>
            <text x={padding - 40} y={lineY} fontSize="10" fill="#6b7280" className="dark:fill-gray-400">Sea Level</text>
            <line x1={valueToX(0)} y1={lineY - 15} x2={valueToX(0)} y2={lineY - 5} stroke="#10b981" strokeWidth="2" />
            <text x={valueToX(0)} y={lineY - 20} fontSize="10" fill="#10b981" textAnchor="middle" fontWeight="600">0m</text>
          </>
        )}
      </g>
    );
  };

  // Render operation visualization
  const renderOperation = () => {
    if (!operation || !operationValues) return null;

    const [val1, val2] = operationValues;

    if (operation === 'compare') {
      // Comparison mode: highlight distance between two numbers
      const x1 = valueToX(val1);
      const x2 = valueToX(val2);
      const distance = Math.abs(val2 - val1);

      return (
        <g>
          {/* Distance line */}
          <line
            x1={Math.min(x1, x2)}
            y1={lineY - 25}
            x2={Math.max(x1, x2)}
            y2={lineY - 25}
            stroke="#8b5cf6"
            strokeWidth="2"
            className="dark:stroke-purple-400"
          />
          {/* Distance label */}
          <text
            x={(x1 + x2) / 2}
            y={lineY - 30}
            fontSize="12"
            fontWeight="bold"
            fill="#8b5cf6"
            textAnchor="middle"
            className="dark:fill-purple-400"
          >
            Distance: {distance}
          </text>
          {/* Endpoint markers */}
          <circle cx={x1} cy={lineY - 25} r="4" fill="#8b5cf6" className="dark:fill-purple-400" />
          <circle cx={x2} cy={lineY - 25} r="4" fill="#8b5cf6" className="dark:fill-purple-400" />
        </g>
      );
    }

    if (operation === 'add' || operation === 'subtract') {
      // Addition/subtraction: show movement
      const startX = valueToX(val1);
      const movement = operation === 'add' ? val2 : -val2;
      const endX = valueToX(val1 + movement);

      // Animated position
      const currentX = isAnimating
        ? startX + (endX - startX) * animationProgress
        : endX;

      const arrowColor = movement > 0 ? '#10b981' : '#ef4444';

      return (
        <g>
          {/* Movement arrow */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill={arrowColor} />
            </marker>
          </defs>
          <line
            x1={startX}
            y1={lineY - 20}
            x2={currentX}
            y2={lineY - 20}
            stroke={arrowColor}
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
            className={movement > 0 ? "dark:stroke-green-400" : "dark:stroke-red-400"}
          />
          {/* Start point */}
          <circle
            cx={startX}
            cy={lineY}
            r="6"
            fill="#3b82f6"
            stroke="white"
            strokeWidth="2"
            className="dark:fill-blue-400"
          />
          {/* Moving/end point */}
          <circle
            cx={currentX}
            cy={lineY}
            r="6"
            fill={arrowColor}
            stroke="white"
            strokeWidth="2"
            className={movement > 0 ? "dark:fill-green-400" : "dark:fill-red-400"}
          />
          {/* Labels */}
          <text x={startX} y={lineY + 20} fontSize="11" fill="#3b82f6" textAnchor="middle" fontWeight="600" className="dark:fill-blue-400">
            {val1}
          </text>
          <text x={currentX} y={lineY + 20} fontSize="11" fill={arrowColor} textAnchor="middle" fontWeight="600" className={movement > 0 ? "dark:fill-green-400" : "dark:fill-red-400"}>
            {val1 + movement}
          </text>
          {/* Operation label */}
          <text
            x={(startX + currentX) / 2}
            y={lineY - 30}
            fontSize="12"
            fontWeight="bold"
            fill="#6b7280"
            textAnchor="middle"
            className="dark:fill-gray-300"
          >
            {operation === 'add' ? `+${val2}` : `${val2}`}
          </text>
        </g>
      );
    }

    return null;
  };

  // Render interval shading
  const renderInterval = (interval: Interval, idx: number) => {
    const startValue = interval.start !== null ? interval.start : min;
    const endValue = interval.end !== null ? interval.end : max;

    const startX = valueToX(startValue);
    const endX = valueToX(endValue);
    const intervalColor = interval.color || '#fbbf24';

    return (
      <g key={`interval-${idx}`}>
        {/* Shaded region */}
        <line
          x1={startX}
          y1={lineY}
          x2={endX}
          y2={lineY}
          stroke={intervalColor}
          strokeWidth="8"
          opacity="0.5"
        />

        {/* Start marker */}
        {interval.start !== null && (
          <circle
            cx={startX}
            cy={lineY}
            r="5"
            fill={interval.startInclusive ? intervalColor : 'white'}
            stroke={intervalColor}
            strokeWidth="2"
          />
        )}

        {/* End marker */}
        {interval.end !== null && (
          <circle
            cx={endX}
            cy={lineY}
            r="5"
            fill={interval.endInclusive ? intervalColor : 'white'}
            stroke={intervalColor}
            strokeWidth="2"
          />
        )}

        {/* Arrows for unbounded intervals */}
        {interval.start === null && (
          <polygon
            points={`${padding - 10},${lineY} ${padding},${lineY - 6} ${padding},${lineY + 6}`}
            fill={intervalColor}
          />
        )}
        {interval.end === null && (
          <polygon
            points={`${width - padding + 10},${lineY} ${width - padding},${lineY - 6} ${width - padding},${lineY + 6}`}
            fill={intervalColor}
          />
        )}

        {/* Interval label */}
        {interval.label && (
          <text
            x={(startX + endX) / 2}
            y={lineY - 20}
            fontSize="12"
            fontWeight="bold"
            fill={intervalColor}
            textAnchor="middle"
          >
            {interval.label}
          </text>
        )}
      </g>
    );
  };

  // Render individual point markers
  const renderPoint = (point: Point, idx: number) => {
    const x = valueToX(point.value);
    const pointColor = point.color || '#3b82f6';

    if (point.style === 'none') return null;

    return (
      <g key={`point-${idx}`}>
        <circle
          cx={x}
          cy={lineY}
          r="5"
          fill={point.style === 'closed' ? pointColor : 'white'}
          stroke={pointColor}
          strokeWidth="2"
        />
        {point.label && (
          <text
            x={x}
            y={lineY + 25}
            fontSize="12"
            fontWeight="bold"
            fill={pointColor}
            textAnchor="middle"
          >
            {point.label}
          </text>
        )}
      </g>
    );
  };

  return (
    <div className="flex flex-col items-center gap-3 p-4">
      {/* Title */}
      {title && (
        <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {title}
        </div>
      )}

      <svg
        width={width}
        height={height}
        className="border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
      >
        {/* Context overlay (temperature/altitude) */}
        {renderContextOverlay()}

        {/* Main number line */}
        <line
          x1={padding}
          y1={lineY}
          x2={width - padding}
          y2={lineY}
          stroke="#374151"
          strokeWidth="2"
          className="dark:stroke-gray-400"
        />

        {/* Arrows at ends */}
        {showArrows && (
          <>
            <polygon
              points={`${padding - 10},${lineY} ${padding},${lineY - 4} ${padding},${lineY + 4}`}
              fill="#374151"
              className="dark:fill-gray-400"
            />
            <polygon
              points={`${width - padding + 10},${lineY} ${width - padding},${lineY - 4} ${width - padding},${lineY + 4}`}
              fill="#374151"
              className="dark:fill-gray-400"
            />
          </>
        )}

        {/* Tick marks */}
        {showTickMarks && ticks.map(value => {
          const x = valueToX(value);
          const isInteger = Number.isInteger(value);
          const tickHeight = isInteger && highlightIntegers ? 10 : 6;
          const isZero = value === 0;

          return (
            <g key={`tick-${value}`}>
              <line
                x1={x}
                y1={lineY - tickHeight}
                x2={x}
                y2={lineY + tickHeight}
                stroke={isZero ? "#3b82f6" : "#374151"}
                strokeWidth={isInteger && highlightIntegers ? 2 : 1}
                className={isZero ? "dark:stroke-blue-400" : "dark:stroke-gray-500"}
              />
              {showTickLabels && (
                <text
                  x={x}
                  y={lineY + 20}
                  fontSize="11"
                  fill={isZero ? "#3b82f6" : "#4b5563"}
                  fontWeight={isZero ? "600" : "normal"}
                  textAnchor="middle"
                  className={isZero ? "dark:fill-blue-400" : "dark:fill-gray-400"}
                >
                  {context !== 'default' ? getContextLabel(value) : value}
                </text>
              )}
            </g>
          );
        })}

        {/* Render intervals */}
        {intervals.map(renderInterval)}

        {/* Render points */}
        {points.map(renderPoint)}

        {/* Render operation visualization */}
        {renderOperation()}
      </svg>

      {/* Caption */}
      {caption && (
        <div className="text-sm text-center text-gray-600 dark:text-gray-400 max-w-md">
          {caption}
        </div>
      )}
    </div>
  );
};

export default NumberLineVisualizer;
