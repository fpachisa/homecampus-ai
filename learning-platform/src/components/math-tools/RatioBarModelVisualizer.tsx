/**
 * Ratio Bar Model Visualizer
 *
 * Specialized Singapore Math bar model for ratio word problems.
 * Designed for P6 Ratios topic - used in hints and solutions.
 *
 * KEY FEATURES:
 * - Supports up to 6 bars (for complex multi-item problems)
 * - Partial brackets (show value for subset of units)
 * - Total brackets (group multiple bars)
 * - Difference brackets (compare two bars)
 * - Simple, flat parameters for AI generation
 *
 * DESIGN PRINCIPLES:
 * - Parameters are flat and explicit (AI-friendly)
 * - Each bar defined with simple label + units
 * - Brackets specified separately for flexibility
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';

// ============================================
// TYPE DEFINITIONS (AI-Friendly - Flat Structure)
// ============================================

interface RatioBarModelVisualizerProps {
  /**
   * Title for the diagram (optional)
   * Example: "Anna and Jill's Money"
   */
  title?: string;

  /**
   * Array of bars to display (up to 6 bars)
   * Each bar: { label: "Name", units: 3, color?: "green" }
   *
   * SIMPLE EXAMPLE - Ratio 2:3:
   * bars: [
   *   { label: "Anna", units: 2 },
   *   { label: "Jill", units: 3 }
   * ]
   */
  bars: {
    label: string;           // Row label: "Anna", "Boys", "Adult ticket"
    units: number;           // Number of equal units in this bar
    color?: 'green' | 'blue' | 'yellow' | 'pink' | 'orange' | 'purple';
    unitLabel?: string;      // Optional label inside each unit (e.g., "?" or value)
  }[];

  /**
   * Show bracket under/over PART of a bar (for showing known values)
   *
   * EXAMPLE - Ken has 21 coins (3 units of a 7-unit total):
   * partialBracket: { barIndex: 0, fromUnit: 0, toUnit: 3, value: "21", position: "bottom" }
   */
  partialBracket?: {
    barIndex: number;        // Which bar (0-indexed)
    fromUnit: number;        // Starting unit (0-indexed)
    toUnit: number;          // Ending unit (exclusive)
    value: string;           // Label: "21", "$50", "?"
    position: 'top' | 'bottom';
  };

  /**
   * Show bracket grouping multiple bars (for totals)
   *
   * EXAMPLE - Total of $50 for bars 0 and 1:
   * totalBracket: { barIndices: [0, 1], value: "$50" }
   */
  totalBracket?: {
    barIndices: number[];    // Which bars to group [0, 1] or [0, 1, 2]
    value: string;           // Label: "$50", "1500", "?"
    position?: 'right' | 'left';
  };

  /**
   * Show bracket indicating difference between two bars
   *
   * EXAMPLE - 12 more boys than girls:
   * differenceBracket: { barIndices: [0, 1], value: "12" }
   */
  differenceBracket?: {
    barIndices: [number, number];  // Two bars to compare [0, 1]
    value: string;           // Difference value: "12", "$60", "?"
  };

  /**
   * Show a second partial bracket (for complex problems)
   */
  partialBracket2?: {
    barIndex: number;
    fromUnit: number;
    toUnit: number;
    value: string;
    position: 'top' | 'bottom';
  };

  /**
   * Show unit value annotation
   * Example: "1 unit = $10"
   */
  unitValue?: string;

  /**
   * Caption text below the diagram
   */
  caption?: string;

  /**
   * Whether to show dashed dividers between units
   * Default: true
   */
  showUnitDividers?: boolean;
}

// ============================================
// COMPONENT IMPLEMENTATION
// ============================================

const RatioBarModelVisualizer: React.FC<RatioBarModelVisualizerProps> = ({
  title,
  bars,
  partialBracket,
  totalBracket,
  differenceBracket,
  partialBracket2,
  unitValue,
  caption,
  showUnitDividers = true
}) => {
  const { theme } = useTheme();

  // Validation
  if (!bars || bars.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 dark:text-gray-400">
        No bars to display
      </div>
    );
  }

  // Color palette
  const colorMap: Record<string, string> = {
    green: '#22c55e',
    blue: '#3b82f6',
    yellow: '#eab308',
    pink: '#ec4899',
    orange: '#f97316',
    purple: '#8b5cf6'
  };

  const defaultColors = ['#22c55e', '#eab308', '#3b82f6', '#ec4899', '#f97316', '#8b5cf6'];

  const getBarColor = (index: number, specifiedColor?: string): string => {
    if (specifiedColor && colorMap[specifiedColor]) {
      return colorMap[specifiedColor];
    }
    return defaultColors[index % defaultColors.length];
  };

  const getLighterColor = (color: string): string => {
    return color + '30'; // 19% opacity
  };

  // Strip LaTeX escapes from currency (AI often sends \\$ instead of $)
  const cleanValue = (value: string): string => {
    return value.replace(/\\+\$/g, '$');
  };

  // Calculate dimensions
  const maxUnits = Math.max(...bars.map(b => b.units));
  const svgWidth = 520;
  const labelWidth = 100;
  const barStartX = labelWidth + 15;
  const barMaxWidth = svgWidth - barStartX - 80;
  const unitWidth = barMaxWidth / maxUnits;
  const barHeight = 36;
  const baseBarSpacing = 56;

  // Check if any bottom bracket is on a non-last bar (needs extra spacing)
  const hasBottomBracketOnMiddleBar = (
    (partialBracket?.position === 'bottom' && partialBracket.barIndex < bars.length - 1) ||
    (partialBracket2?.position === 'bottom' && partialBracket2.barIndex < bars.length - 1)
  );
  const barSpacing = hasBottomBracketOnMiddleBar ? 76 : baseBarSpacing;

  // Calculate height based on content
  const hasTopBracket = partialBracket?.position === 'top' || partialBracket2?.position === 'top';
  const hasBottomBracket = partialBracket?.position === 'bottom' || partialBracket2?.position === 'bottom';
  const topPadding = hasTopBracket ? 35 : 0;
  const bottomPadding = hasBottomBracket ? 35 : 0;
  const titleHeight = title ? 35 : 0;
  const unitValueHeight = unitValue ? 30 : 0;

  const svgHeight = titleHeight + topPadding + (bars.length * barSpacing) + bottomPadding + unitValueHeight + 20;
  const startY = titleHeight + topPadding + 15;

  // Render a single bar
  const renderBar = (bar: typeof bars[0], barIndex: number) => {
    const y = startY + barIndex * barSpacing;
    const barColor = getBarColor(barIndex, bar.color);
    const barWidth = bar.units * unitWidth;

    return (
      <g key={barIndex}>
        {/* Bar label */}
        <text
          x={labelWidth}
          y={y + barHeight / 2 + 5}
          textAnchor="end"
          className="text-sm font-medium"
          fill={theme.colors.textPrimary}
        >
          {bar.label}
        </text>

        {/* Bar rectangle */}
        <rect
          x={barStartX}
          y={y}
          width={barWidth}
          height={barHeight}
          fill={getLighterColor(barColor)}
          stroke={barColor}
          strokeWidth={2}
          rx={3}
        />

        {/* Unit dividers */}
        {showUnitDividers && bar.units > 1 && (
          <>
            {Array.from({ length: bar.units - 1 }).map((_, i) => (
              <line
                key={i}
                x1={barStartX + (i + 1) * unitWidth}
                y1={y}
                x2={barStartX + (i + 1) * unitWidth}
                y2={y + barHeight}
                stroke={barColor}
                strokeWidth={1}
                strokeDasharray="4 2"
              />
            ))}
          </>
        )}

        {/* Unit labels (if provided) */}
        {bar.unitLabel && (
          <text
            x={barStartX + barWidth / 2}
            y={y + barHeight / 2 + 5}
            textAnchor="middle"
            className="text-sm font-semibold"
            fill={theme.colors.textPrimary}
          >
            {bar.unitLabel}
          </text>
        )}
      </g>
    );
  };

  // Render partial bracket (for subset of units)
  const renderPartialBracket = (bracket: NonNullable<typeof partialBracket>, isSecond: boolean = false) => {
    const bar = bars[bracket.barIndex];
    if (!bar) return null;

    const y = startY + bracket.barIndex * barSpacing;
    const bracketStartX = barStartX + bracket.fromUnit * unitWidth;
    const bracketEndX = barStartX + bracket.toUnit * unitWidth;
    const bracketWidth = bracketEndX - bracketStartX;

    const isTop = bracket.position === 'top';
    const bracketY = isTop ? y - 8 : y + barHeight + 8;
    const bracketEndY = isTop ? y - 20 : y + barHeight + 20;
    const labelY = isTop ? y - 26 : y + barHeight + 32;

    return (
      <g key={isSecond ? 'partial2' : 'partial1'}>
        {/* Bracket shape */}
        <path
          d={`M ${bracketStartX} ${bracketY}
              L ${bracketStartX} ${bracketEndY}
              L ${bracketEndX} ${bracketEndY}
              L ${bracketEndX} ${bracketY}`}
          fill="none"
          stroke={theme.colors.textSecondary}
          strokeWidth={1.5}
        />
        {/* Label */}
        <text
          x={bracketStartX + bracketWidth / 2}
          y={labelY}
          textAnchor="middle"
          className="text-sm font-bold"
          fill={theme.colors.brand}
        >
          {cleanValue(bracket.value)}
        </text>
      </g>
    );
  };

  // Render total bracket (grouping multiple bars)
  const renderTotalBracket = () => {
    if (!totalBracket) return null;

    const indices = totalBracket.barIndices;
    const minIdx = Math.min(...indices);
    const maxIdx = Math.max(...indices);
    const topY = startY + minIdx * barSpacing;
    const bottomY = startY + maxIdx * barSpacing + barHeight;

    const isLeft = totalBracket.position === 'left';
    const x = isLeft ? barStartX - 25 : barStartX + barMaxWidth + 20;
    const bracketX = isLeft ? x - 12 : x + 12;

    return (
      <g>
        {/* Vertical bracket */}
        <path
          d={`M ${x} ${topY}
              L ${bracketX} ${topY}
              L ${bracketX} ${bottomY}
              L ${x} ${bottomY}`}
          fill="none"
          stroke={theme.colors.textSecondary}
          strokeWidth={2}
        />
        {/* Label (rotated) */}
        <text
          x={isLeft ? bracketX - 12 : bracketX + 12}
          y={(topY + bottomY) / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-sm font-bold"
          fill={theme.colors.brand}
          transform={`rotate(-90, ${isLeft ? bracketX - 12 : bracketX + 12}, ${(topY + bottomY) / 2})`}
        >
          {cleanValue(totalBracket.value)}
        </text>
      </g>
    );
  };

  // Render difference bracket
  const renderDifferenceBracket = () => {
    if (!differenceBracket) return null;

    const [idx1, idx2] = differenceBracket.barIndices;
    const bar1 = bars[idx1];
    const bar2 = bars[idx2];
    if (!bar1 || !bar2) return null;

    const bar1Units = bar1.units;
    const bar2Units = bar2.units;
    const longerIdx = bar1Units > bar2Units ? idx1 : idx2;
    const shorterUnits = Math.min(bar1Units, bar2Units);
    const longerUnits = Math.max(bar1Units, bar2Units);

    const y = startY + longerIdx * barSpacing;
    const diffStartX = barStartX + shorterUnits * unitWidth;
    const diffEndX = barStartX + longerUnits * unitWidth;

    // Highlight the difference portion
    return (
      <g>
        {/* Highlight rectangle for difference */}
        <rect
          x={diffStartX}
          y={y}
          width={diffEndX - diffStartX}
          height={barHeight}
          fill="#ef444430"
          stroke="#ef4444"
          strokeWidth={2}
          rx={2}
        />
        {/* Difference label */}
        <text
          x={diffStartX + (diffEndX - diffStartX) / 2}
          y={y + barHeight / 2 + 5}
          textAnchor="middle"
          className="text-sm font-bold"
          fill="#ef4444"
        >
          {cleanValue(differenceBracket.value)}
        </text>
      </g>
    );
  };

  // Render unit value annotation
  const renderUnitValue = () => {
    if (!unitValue) return null;

    const y = startY + bars.length * barSpacing + 15;

    return (
      <text
        x={barStartX + barMaxWidth / 2}
        y={y}
        textAnchor="middle"
        className="text-sm font-semibold"
        fill={theme.colors.brand}
      >
        {cleanValue(unitValue)}
      </text>
    );
  };

  return (
    <div
      className="my-4 p-4 rounded-lg border"
      style={{
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.surface
      }}
    >
      <svg
        width="100%"
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="mx-auto"
        style={{ maxWidth: `${svgWidth}px` }}
      >
        {/* Title */}
        {title && (
          <text
            x={svgWidth / 2}
            y={22}
            textAnchor="middle"
            className="text-base font-bold"
            fill={theme.colors.textPrimary}
          >
            {title}
          </text>
        )}

        {/* Render all bars */}
        {bars.map((bar, index) => renderBar(bar, index))}

        {/* Render brackets */}
        {partialBracket && renderPartialBracket(partialBracket)}
        {partialBracket2 && renderPartialBracket(partialBracket2, true)}
        {renderTotalBracket()}
        {renderDifferenceBracket()}

        {/* Unit value annotation */}
        {renderUnitValue()}
      </svg>

      {caption && (
        <div
          className="text-sm mt-3 pt-3 border-t text-center"
          style={{
            borderColor: theme.colors.border,
            color: theme.colors.textSecondary
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
};

export default RatioBarModelVisualizer;
