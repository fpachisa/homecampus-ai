/**
 * Dot Diagram Visualizer
 *
 * Displays small numerical datasets with individual dots stacked vertically
 * above a number line. Each dot represents one data value.
 *
 * Best for discrete numerical data with 10-30 values where exact values
 * and frequency patterns matter.
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface FrequencyData {
  value: number;
  frequency: number;
}

interface DotDiagramVisualizerProps {
  // PRIMARY DATA INPUT (use one):
  values?: number[];              // Raw data [1,2,2,3,1,0,2,3,1,2]
  data?: FrequencyData[];         // Pre-tallied [{value:0, frequency:1}, ...]

  // RANGE (optional - auto-calculated from data)
  min?: number;
  max?: number;

  // LABELS
  xLabel?: string;
  title?: string;
  caption?: string;              // Supports MathText

  // VISUAL OPTIONS
  showTickLabels?: boolean;      // Show values on number line (default: true)
  showFrequencies?: boolean;     // Show count above each stack (default: false)
  highlightValue?: number;       // Highlight specific value (default: -1)

  // STYLING
  dotColor?: string;             // Override theme color
  highlightColor?: string;       // Color for highlighted value
  dotRadius?: number;            // Dot size (default: 5)
  dotSpacing?: number;           // Vertical spacing (default: 18)

  // ADVANCED
  showMode?: boolean;            // Highlight mode (tallest stack) (default: false)
}

const DotDiagramVisualizer: React.FC<DotDiagramVisualizerProps> = ({
  values,
  data,
  min,
  max,
  xLabel,
  title,
  caption,
  showTickLabels = true,
  showFrequencies = false,
  highlightValue = -1,
  dotColor,
  highlightColor,
  dotRadius = 5,
  dotSpacing = 18,
  showMode = false
}) => {
  const { theme } = useTheme();

  // Validation
  if (!values && !data) {
    return (
      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded">
        <p className="text-red-800 dark:text-red-300 font-semibold">Error: Missing Data</p>
        <p className="text-red-700 dark:text-red-400 text-sm">
          DotDiagram requires either 'values' (raw data array) or 'data' (frequency data).
        </p>
      </div>
    );
  }

  if (values && data) {
    return (
      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded">
        <p className="text-yellow-800 dark:text-yellow-300 font-semibold">Warning: Conflicting Data</p>
        <p className="text-yellow-700 dark:text-yellow-400 text-sm">
          Both 'values' and 'data' provided. Using 'values' and ignoring 'data'.
        </p>
      </div>
    );
  }

  // Calculate frequency data from raw values or use provided data
  let frequencyData: FrequencyData[];
  let dataMin: number;
  let dataMax: number;

  if (values) {
    // Calculate frequencies from raw values
    const frequencyMap = new Map<number, number>();
    values.forEach(v => {
      frequencyMap.set(v, (frequencyMap.get(v) || 0) + 1);
    });

    frequencyData = Array.from(frequencyMap.entries())
      .map(([value, frequency]) => ({ value, frequency }))
      .sort((a, b) => a.value - b.value);

    dataMin = Math.min(...values);
    dataMax = Math.max(...values);
  } else if (data) {
    // Use provided frequency data
    frequencyData = [...data].sort((a, b) => a.value - b.value);
    dataMin = Math.min(...data.map(d => d.value));
    dataMax = Math.max(...data.map(d => d.value));
  } else {
    // Should never reach here due to validation above
    frequencyData = [];
    dataMin = 0;
    dataMax = 0;
  }

  // Apply user-specified min/max or use calculated values
  const rangeMin = min !== undefined ? min : dataMin;
  const rangeMax = max !== undefined ? max : dataMax;

  // Find mode (most frequent value)
  const maxFrequency = Math.max(...frequencyData.map(d => d.frequency), 0);
  const modeValue = frequencyData.find(d => d.frequency === maxFrequency)?.value ?? -1;

  // SVG dimensions
  const width = 600;
  const padding = 60;
  const lineLength = width - 2 * padding;

  // Calculate height based on max frequency
  const maxDots = maxFrequency;
  const dotsHeight = maxDots * dotSpacing + 40; // Extra space for labels
  const lineY = dotsHeight + 30;
  const height = lineY + 60; // Space below for x-axis labels

  // Convert value to x coordinate
  const valueToX = (value: number): number => {
    const range = rangeMax - rangeMin;
    if (range === 0) return width / 2;
    const normalized = (value - rangeMin) / range;
    return padding + normalized * lineLength;
  };

  // Create complete range of values (including zeros)
  const allValues: number[] = [];
  for (let v = rangeMin; v <= rangeMax; v++) {
    allValues.push(v);
  }

  // Get frequency for a value (0 if not in data)
  const getFrequency = (value: number): number => {
    return frequencyData.find(d => d.value === value)?.frequency || 0;
  };

  // Determine colors
  const defaultDotColor = dotColor || theme.colors.brand || '#3b82f6';
  const defaultHighlightColor = highlightColor || theme.colors.success || '#10b981';
  const modeColor = '#f59e0b'; // Amber for mode

  // Render dots for a specific value
  const renderDotsForValue = (value: number, frequency: number, x: number) => {
    if (frequency === 0) return null;

    const isHighlighted = value === highlightValue;
    const isMode = showMode && value === modeValue && maxFrequency > 1;
    const color = isMode ? modeColor : (isHighlighted ? defaultHighlightColor : defaultDotColor);

    return (
      <g key={`dots-${value}`}>
        {/* Stack of dots */}
        {Array.from({ length: frequency }).map((_, i) => (
          <circle
            key={`dot-${value}-${i}`}
            cx={x}
            cy={lineY - 20 - (i * dotSpacing)}
            r={dotRadius}
            fill={color}
            stroke={isMode || isHighlighted ? color : theme.colors.border}
            strokeWidth={isMode || isHighlighted ? 2 : 1}
            opacity={0.85}
          />
        ))}

        {/* Frequency label above stack */}
        {showFrequencies && (
          <text
            x={x}
            y={lineY - 20 - (frequency * dotSpacing) - 8}
            fontSize="11"
            fontWeight="600"
            fill={color}
            textAnchor="middle"
            className="dark:fill-current"
          >
            {frequency}
          </text>
        )}

        {/* Mode label */}
        {isMode && (
          <text
            x={x}
            y={lineY - 20 - (frequency * dotSpacing) - (showFrequencies ? 22 : 14)}
            fontSize="10"
            fontWeight="600"
            fill={modeColor}
            textAnchor="middle"
            className="dark:fill-current"
          >
            MODE
          </text>
        )}
      </g>
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Title */}
      {title && (
        <div className="text-center mb-3">
          <h3 className="text-lg font-semibold" style={{ color: theme.colors.textPrimary }}>
            {title}
          </h3>
        </div>
      )}

      {/* SVG Diagram */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border" style={{ borderColor: theme.colors.border }}>
        <svg width={width} height={height} className="mx-auto">
          {/* Number Line */}
          <line
            x1={padding}
            y1={lineY}
            x2={width - padding}
            y2={lineY}
            stroke={theme.colors.textSecondary}
            strokeWidth="2"
          />

          {/* Arrows at ends */}
          <polygon
            points={`${padding - 8},${lineY} ${padding},${lineY - 5} ${padding},${lineY + 5}`}
            fill={theme.colors.textSecondary}
          />
          <polygon
            points={`${width - padding + 8},${lineY} ${width - padding},${lineY - 5} ${width - padding},${lineY + 5}`}
            fill={theme.colors.textSecondary}
          />

          {/* Tick marks and labels */}
          {allValues.map(value => {
            const x = valueToX(value);
            const freq = getFrequency(value);

            return (
              <g key={`tick-${value}`}>
                {/* Tick mark */}
                <line
                  x1={x}
                  y1={lineY - 6}
                  x2={x}
                  y2={lineY + 6}
                  stroke={theme.colors.textSecondary}
                  strokeWidth="1.5"
                />

                {/* Tick label */}
                {showTickLabels && (
                  <text
                    x={x}
                    y={lineY + 22}
                    fontSize="12"
                    fill={theme.colors.textSecondary}
                    textAnchor="middle"
                    className="dark:fill-current"
                  >
                    {value}
                  </text>
                )}

                {/* Render dots for this value */}
                {renderDotsForValue(value, freq, x)}
              </g>
            );
          })}

          {/* X-axis label */}
          {xLabel && (
            <text
              x={width / 2}
              y={height - 10}
              fontSize="13"
              fontWeight="600"
              fill={theme.colors.textPrimary}
              textAnchor="middle"
              className="dark:fill-current"
            >
              {xLabel}
            </text>
          )}
        </svg>
      </div>

      {/* Caption */}
      {caption && (
        <div className="mt-3 text-center text-sm" style={{ color: theme.colors.textSecondary }}>
          <MathText>{caption}</MathText>
        </div>
      )}

      {/* Legend (if mode or highlight is active) */}
      {(showMode || highlightValue !== -1) && (
        <div className="mt-3 flex justify-center gap-4 text-xs" style={{ color: theme.colors.textSecondary }}>
          {showMode && maxFrequency > 1 && (
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: modeColor }} />
              <span>Mode (most frequent)</span>
            </div>
          )}
          {highlightValue !== -1 && (
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: defaultHighlightColor }} />
              <span>Highlighted value: {highlightValue}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DotDiagramVisualizer;
