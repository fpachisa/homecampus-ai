/**
 * Number Line Visualizer
 *
 * Interactive number line for teaching intervals, inequalities,
 * and special number sets.
 */

import React from 'react';

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
  title,
  caption
}) => {
  // SVG dimensions
  const width = 600;
  const height = 120;
  const lineY = 60;
  const padding = 60;
  const lineLength = width - 2 * padding;

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
        <div className="text-lg font-semibold text-gray-700">
          {title}
        </div>
      )}

      <svg width={width} height={height}>
        {/* Main number line */}
        <line
          x1={padding}
          y1={lineY}
          x2={width - padding}
          y2={lineY}
          stroke="#374151"
          strokeWidth="2"
        />

        {/* Arrows at ends */}
        {showArrows && (
          <>
            <polygon
              points={`${padding - 10},${lineY} ${padding},${lineY - 4} ${padding},${lineY + 4}`}
              fill="#374151"
            />
            <polygon
              points={`${width - padding + 10},${lineY} ${width - padding},${lineY - 4} ${width - padding},${lineY + 4}`}
              fill="#374151"
            />
          </>
        )}

        {/* Tick marks */}
        {showTickMarks && ticks.map(value => {
          const x = valueToX(value);
          const isInteger = Number.isInteger(value);
          const tickHeight = isInteger && highlightIntegers ? 10 : 6;

          return (
            <g key={`tick-${value}`}>
              <line
                x1={x}
                y1={lineY - tickHeight}
                x2={x}
                y2={lineY + tickHeight}
                stroke="#374151"
                strokeWidth={isInteger && highlightIntegers ? 2 : 1}
              />
              {showTickLabels && (
                <text
                  x={x}
                  y={lineY + 20}
                  fontSize="11"
                  fill="#4b5563"
                  textAnchor="middle"
                >
                  {value}
                </text>
              )}
            </g>
          );
        })}

        {/* Render intervals */}
        {intervals.map(renderInterval)}

        {/* Render points */}
        {points.map(renderPoint)}
      </svg>

      {/* Caption */}
      {caption && (
        <div className="text-sm text-center text-gray-600 max-w-md">
          {caption}
        </div>
      )}
    </div>
  );
};

export default NumberLineVisualizer;
