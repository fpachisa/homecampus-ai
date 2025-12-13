/**
 * Bar Model Visualizer
 *
 * Singapore Math bar model diagram tool for primary school word problems.
 * Supports comparison models, part-whole models, and before-after scenarios.
 *
 * DESIGN PRINCIPLES (AI-Friendly):
 * - Parameters are flat and explicit (no deep nesting)
 * - Each bar is defined with simple properties
 * - Segments use clear numeric arrays
 * - Labels and values are straightforward strings
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';

// ============================================
// TYPE DEFINITIONS (AI-Friendly Structure)
// ============================================

interface BarSegment {
  value: string;      // Display value: "100", "$50", "?", "1 unit"
  units?: number;     // Number of equal-width units this segment spans (default: 1)
  highlight?: boolean; // Highlight this segment (for emphasis)
}

interface Bar {
  label: string;                    // Row label: "Leila", "Packet A", "Mary and Jia Ling"
  segments: BarSegment[];           // Array of segments in the bar
  totalLabel?: string;              // Optional total label shown with bracket: "1500", "$360", "?"
  bracketPosition?: 'top' | 'bottom'; // Where to show the total bracket
}

interface BarModelVisualizerProps {
  /**
   * Title/context for the bar model (optional)
   * Example: "Before", "After", "Money Problem"
   */
  title?: string;

  /**
   * Array of bars to display (up to 4 bars)
   * Each bar has: label, segments[], totalLabel?, bracketPosition?
   *
   * SIMPLE EXAMPLE - 2 bars comparing Mary and John:
   * bars: [
   *   { label: "Mary", segments: [{ value: "?" }], totalLabel: "?" },
   *   { label: "John", segments: [{ value: "120" }], totalLabel: "120" }
   * ]
   *
   * UNITS EXAMPLE - showing equal units:
   * bars: [
   *   { label: "Packet A", segments: [{ value: "", units: 4 }], totalLabel: "?" },
   *   { label: "Packet B", segments: [{ value: "", units: 2 }], totalLabel: "?" }
   * ]
   */
  bars: Bar[];

  /**
   * Show a comparison bracket between bars
   * Used to indicate difference or relationship
   *
   * Example: { value: "$60", between: [0, 1] }
   * Shows "$60" difference bracket between bar 0 and bar 1
   */
  comparison?: {
    value: string;      // Label for the comparison: "$60", "650", "?"
    between: [number, number]; // Indices of bars to compare [0, 1]
    position?: 'right' | 'left'; // Which side to show bracket (default: right)
  };

  /**
   * Show a bracket grouping multiple bars
   * Used for "altogether" or combined totals
   *
   * Example: { value: "1500", bars: [0, 1] }
   */
  groupBracket?: {
    value: string;      // Label: "1500", "$3440", "?"
    bars: number[];     // Indices of bars to group
    position?: 'right' | 'left';
  };

  /**
   * Color scheme for segments
   * Default uses green for filled, lighter for units
   */
  colorScheme?: 'default' | 'money' | 'items';

  /**
   * Show unit dividers within segments that have units > 1
   */
  showUnitDividers?: boolean;

  /**
   * Caption text below the diagram
   */
  caption?: string;
}

// ============================================
// COMPONENT IMPLEMENTATION
// ============================================

const BarModelVisualizer: React.FC<BarModelVisualizerProps> = ({
  title,
  bars,
  comparison,
  groupBracket,
  colorScheme = 'default',
  showUnitDividers = true,
  caption
}) => {
  const { theme } = useTheme();

  // Validate input
  if (!bars || bars.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 dark:text-gray-400">
        No bars to display
      </div>
    );
  }

  // Calculate total units across all bars for scaling
  const calculateBarTotalUnits = (bar: Bar): number => {
    return bar.segments.reduce((sum, seg) => sum + (seg.units || 1), 0);
  };

  const maxUnits = Math.max(...bars.map(calculateBarTotalUnits));

  // Colors based on theme and scheme
  const getSegmentColor = (index: number, isHighlight: boolean) => {
    const colors = {
      default: ['#22c55e', '#3b82f6', '#f59e0b', '#ec4899'], // green, blue, amber, pink
      money: ['#22c55e', '#16a34a', '#15803d', '#166534'],   // greens
      items: ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'],   // blues
    };
    const palette = colors[colorScheme];
    const baseColor = palette[index % palette.length];

    if (isHighlight) {
      return '#ef4444'; // red for highlight
    }
    return baseColor;
  };

  const getLighterColor = (color: string) => {
    // Return a lighter version for unit backgrounds
    return color + '40'; // 25% opacity
  };

  // SVG dimensions
  const svgWidth = 500;
  // Check if any bar has a top bracket that needs extra space
  const hasTopBracket = bars.some(bar => bar.bracketPosition === 'top' && bar.totalLabel);
  const hasBottomBracket = bars.some(bar => bar.bracketPosition === 'bottom' && bar.totalLabel);
  const topPadding = hasTopBracket ? 40 : 0; // Extra space for top bracket and label
  const bottomPadding = hasBottomBracket ? 30 : 0; // Extra space for bottom bracket
  const svgHeight = 60 + bars.length * 70 + (title ? 30 : 0) + (comparison ? 20 : 0) + topPadding + bottomPadding;
  const labelWidth = 120;
  const barStartX = labelWidth + 10;
  const barMaxWidth = svgWidth - barStartX - 80; // Leave space for brackets
  const barHeight = 40;
  const barSpacing = 60;
  const startY = (title ? 50 : 20) + topPadding;

  // Render a single bar
  const renderBar = (bar: Bar, barIndex: number) => {
    const y = startY + barIndex * barSpacing;
    const totalUnits = calculateBarTotalUnits(bar);
    const unitWidth = barMaxWidth / maxUnits;

    let currentX = barStartX;

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

        {/* Bar segments */}
        {bar.segments.map((segment, segIndex) => {
          const segmentUnits = segment.units || 1;
          const segmentWidth = unitWidth * segmentUnits;
          const segX = currentX;
          currentX += segmentWidth;

          const segmentColor = getSegmentColor(segIndex, segment.highlight || false);

          return (
            <g key={segIndex}>
              {/* Segment rectangle */}
              <rect
                x={segX}
                y={y}
                width={segmentWidth}
                height={barHeight}
                fill={getLighterColor(segmentColor)}
                stroke={segmentColor}
                strokeWidth={2}
                rx={2}
              />

              {/* Unit dividers if multiple units */}
              {showUnitDividers && segmentUnits > 1 && (
                <>
                  {Array.from({ length: segmentUnits - 1 }).map((_, divIndex) => (
                    <line
                      key={divIndex}
                      x1={segX + (divIndex + 1) * (segmentWidth / segmentUnits)}
                      y1={y}
                      x2={segX + (divIndex + 1) * (segmentWidth / segmentUnits)}
                      y2={y + barHeight}
                      stroke={segmentColor}
                      strokeWidth={1}
                      strokeDasharray="4 2"
                    />
                  ))}
                </>
              )}

              {/* Segment value label */}
              {segment.value && (
                <text
                  x={segX + segmentWidth / 2}
                  y={y + barHeight / 2 + 5}
                  textAnchor="middle"
                  className="text-sm font-semibold"
                  fill={theme.colors.textPrimary}
                >
                  {segment.value}
                </text>
              )}
            </g>
          );
        })}

        {/* Total bracket and label */}
        {bar.totalLabel && (
          <g>
            {/* Bracket */}
            <path
              d={`M ${barStartX} ${bar.bracketPosition === 'bottom' ? y + barHeight + 5 : y - 5}
                  L ${barStartX} ${bar.bracketPosition === 'bottom' ? y + barHeight + 15 : y - 15}
                  L ${barStartX + totalUnits * unitWidth} ${bar.bracketPosition === 'bottom' ? y + barHeight + 15 : y - 15}
                  L ${barStartX + totalUnits * unitWidth} ${bar.bracketPosition === 'bottom' ? y + barHeight + 5 : y - 5}`}
              fill="none"
              stroke={theme.colors.textSecondary}
              strokeWidth={1.5}
            />
            {/* Total label */}
            <text
              x={barStartX + (totalUnits * unitWidth) / 2}
              y={bar.bracketPosition === 'bottom' ? y + barHeight + 28 : y - 20}
              textAnchor="middle"
              className="text-sm font-bold"
              fill={theme.colors.brand}
            >
              {bar.totalLabel}
            </text>
          </g>
        )}
      </g>
    );
  };

  // Render comparison bracket between bars
  const renderComparison = () => {
    if (!comparison) return null;

    const [bar1Idx, bar2Idx] = comparison.between;
    const bar1Y = startY + bar1Idx * barSpacing;
    const bar2Y = startY + bar2Idx * barSpacing;
    const bar1Units = calculateBarTotalUnits(bars[bar1Idx]);
    const bar2Units = calculateBarTotalUnits(bars[bar2Idx]);
    const unitWidth = barMaxWidth / maxUnits;

    // Calculate which bar is longer and the difference area
    const minUnits = Math.min(bar1Units, bar2Units);

    // For showing difference portion
    const longerBarY = bar1Units > bar2Units ? bar1Y : bar2Y;
    const shorterUnits = minUnits;

    return (
      <g>
        {/* Difference bracket on the right of the longer bar */}
        <path
          d={`M ${barStartX + shorterUnits * unitWidth} ${longerBarY}
              L ${barStartX + shorterUnits * unitWidth + 5} ${longerBarY}
              L ${barStartX + shorterUnits * unitWidth + 5} ${longerBarY + barHeight}
              L ${barStartX + shorterUnits * unitWidth} ${longerBarY + barHeight}`}
          fill="none"
          stroke="#ef4444"
          strokeWidth={2}
        />
        {/* Difference label */}
        <text
          x={barStartX + shorterUnits * unitWidth + (Math.max(bar1Units, bar2Units) - shorterUnits) * unitWidth / 2 + 5}
          y={longerBarY + barHeight / 2 + 5}
          textAnchor="middle"
          className="text-xs font-bold"
          fill="#ef4444"
        >
          {comparison.value}
        </text>
      </g>
    );
  };

  // Render group bracket
  const renderGroupBracket = () => {
    if (!groupBracket) return null;

    const barIndices = groupBracket.bars;
    const minBarIdx = Math.min(...barIndices);
    const maxBarIdx = Math.max(...barIndices);
    const topY = startY + minBarIdx * barSpacing;
    const bottomY = startY + maxBarIdx * barSpacing + barHeight;

    const x = groupBracket.position === 'left'
      ? barStartX - 20
      : barStartX + barMaxWidth + 15;

    return (
      <g>
        {/* Vertical bracket line */}
        <path
          d={`M ${x} ${topY}
              L ${x + (groupBracket.position === 'left' ? -10 : 10)} ${topY}
              L ${x + (groupBracket.position === 'left' ? -10 : 10)} ${bottomY}
              L ${x} ${bottomY}`}
          fill="none"
          stroke={theme.colors.textSecondary}
          strokeWidth={2}
        />
        {/* Group label */}
        <text
          x={x + (groupBracket.position === 'left' ? -20 : 20)}
          y={(topY + bottomY) / 2 + 5}
          textAnchor="middle"
          className="text-sm font-bold"
          fill={theme.colors.brand}
          transform={`rotate(-90, ${x + (groupBracket.position === 'left' ? -20 : 20)}, ${(topY + bottomY) / 2 + 5})`}
        >
          {groupBracket.value}
        </text>
      </g>
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
      {title && (
        <div
          className="text-lg font-bold mb-3 text-center"
          style={{ color: theme.colors.textPrimary }}
        >
          {title}
        </div>
      )}

      <svg
        width="100%"
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="mx-auto"
        style={{ maxWidth: `${svgWidth}px` }}
      >
        {/* Render all bars */}
        {bars.map((bar, index) => renderBar(bar, index))}

        {/* Render comparison bracket */}
        {renderComparison()}

        {/* Render group bracket */}
        {renderGroupBracket()}
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

export default BarModelVisualizer;
