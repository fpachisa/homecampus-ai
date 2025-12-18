/**
 * Fraction Division Visualizer
 *
 * Visualizes fraction division using the Singapore Math bar model approach.
 * Supports three types of division:
 * 1. Fraction ÷ Whole Number (e.g., 1/2 ÷ 3 = 1/6)
 * 2. Whole Number ÷ Fraction (e.g., 4 ÷ 1/3 = 12)
 * 3. Fraction ÷ Fraction (e.g., 2/3 ÷ 1/6 = 4)
 *
 * Designed for P6 Fractions topic.
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface FractionDivisionVisualizerProps {
  dividend: string;           // "2/3", "1/2", "4" (whole number)
  divisor: string;            // "1/6", "3", "1/4"
  showReciprocal?: boolean;   // Show "÷1/3 = ×3" rule
  showSteps?: boolean;        // Show step-by-step workings
  showResult?: boolean;       // Show the final answer
  caption?: string;           // Additional explanation
}

interface ParsedValue {
  numerator: number;
  denominator: number;
  isWhole: boolean;
  original: string;
}

const FractionDivisionVisualizer: React.FC<FractionDivisionVisualizerProps> = ({
  dividend,
  divisor,
  showReciprocal = false,
  showSteps = false,
  showResult = false,
  caption
}) => {
  const { theme } = useTheme();

  // Parse a value that could be a fraction "a/b" or whole number "n"
  const parseValue = (value: string): ParsedValue | null => {
    const trimmed = value.trim();

    // Check if it's a fraction
    if (trimmed.includes('/')) {
      const parts = trimmed.split('/');
      if (parts.length !== 2) return null;

      const num = parseInt(parts[0].trim(), 10);
      const den = parseInt(parts[1].trim(), 10);

      if (isNaN(num) || isNaN(den) || den === 0) return null;

      return { numerator: num, denominator: den, isWhole: false, original: trimmed };
    }

    // It's a whole number
    const num = parseInt(trimmed, 10);
    if (isNaN(num)) return null;

    return { numerator: num, denominator: 1, isWhole: true, original: trimmed };
  };

  // Calculate GCD for simplification
  const gcd = (a: number, b: number): number => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  // Simplify a fraction
  const simplify = (num: number, den: number): { numerator: number; denominator: number } => {
    const divisor = gcd(num, den);
    return { numerator: num / divisor, denominator: den / divisor };
  };

  // Format fraction for LaTeX (MathText component)
  const formatFraction = (num: number, den: number): string => {
    if (den === 1) return `${num}`;
    return `$\\frac{${num}}{${den}}$`;
  };

  // Format fraction for plain text (SVG text elements)
  const formatFractionPlain = (num: number, den: number): string => {
    if (den === 1) return `${num}`;
    return `${num}/${den}`;
  };

  const dividendParsed = parseValue(dividend);
  const divisorParsed = parseValue(divisor);

  // Validation
  if (!dividendParsed || !divisorParsed) {
    return (
      <div className="my-4 p-4 rounded-lg border border-red-300 bg-red-50 dark:bg-red-900/20">
        <p className="text-red-700 dark:text-red-400">
          Invalid input. Use format: "numerator/denominator" (e.g., "2/3") or whole number (e.g., "4")
        </p>
      </div>
    );
  }

  if (divisorParsed.numerator === 0) {
    return (
      <div className="my-4 p-4 rounded-lg border border-red-300 bg-red-50 dark:bg-red-900/20">
        <p className="text-red-700 dark:text-red-400">Cannot divide by zero</p>
      </div>
    );
  }

  // Calculate the result: (a/b) ÷ (c/d) = (a/b) × (d/c) = (a×d)/(b×c)
  const resultNum = dividendParsed.numerator * divisorParsed.denominator;
  const resultDen = dividendParsed.denominator * divisorParsed.numerator;
  const simplified = simplify(resultNum, resultDen);

  // Determine division type
  const getDivisionType = (): 'frac-by-whole' | 'whole-by-frac' | 'frac-by-frac' => {
    if (dividendParsed.isWhole && !divisorParsed.isWhole) return 'whole-by-frac';
    if (!dividendParsed.isWhole && divisorParsed.isWhole) return 'frac-by-whole';
    return 'frac-by-frac';
  };

  const divisionType = getDivisionType();

  // SVG dimensions
  const svgWidth = 500;
  const svgHeight = divisionType === 'whole-by-frac' ? 200 : 160;
  const barHeight = 50;
  const barWidth = 400;
  const startX = 50;
  const startY = 40;

  // Colors
  const colors = {
    dividend: '#3b82f6',      // blue-500
    divisor: '#f59e0b',       // amber-500
    result: '#10b981',        // emerald-500
    empty: theme.colors.surface || '#ffffff',
    stroke: theme.colors.textPrimary || '#1f2937',
    highlight: '#ef4444',     // red-500
  };

  // Render bar segments
  const renderBar = (
    y: number,
    totalParts: number,
    filledParts: number,
    fillColor: string,
    showDivisions: boolean = true,
    highlightEvery?: number,
    label?: string
  ) => {
    const segmentWidth = barWidth / totalParts;

    return (
      <g>
        {/* Bar outline */}
        <rect
          x={startX}
          y={y}
          width={barWidth}
          height={barHeight}
          fill="none"
          stroke={colors.stroke}
          strokeWidth="2"
          rx="4"
        />

        {/* Filled segments */}
        {Array.from({ length: totalParts }).map((_, i) => {
          const isFilled = i < filledParts;
          const isHighlighted = highlightEvery && ((i + 1) % highlightEvery === 0);

          let fill = colors.empty;
          if (isFilled) {
            fill = isHighlighted ? colors.highlight : fillColor;
          }

          return (
            <rect
              key={i}
              x={startX + i * segmentWidth}
              y={y}
              width={segmentWidth}
              height={barHeight}
              fill={fill}
              fillOpacity={isFilled ? 0.6 : 0.1}
              stroke={colors.stroke}
              strokeWidth="1"
            />
          );
        })}

        {/* Division lines */}
        {showDivisions && Array.from({ length: totalParts - 1 }).map((_, i) => (
          <line
            key={i}
            x1={startX + (i + 1) * segmentWidth}
            y1={y}
            x2={startX + (i + 1) * segmentWidth}
            y2={y + barHeight}
            stroke={colors.stroke}
            strokeWidth="1"
          />
        ))}

        {/* Label */}
        {label && (
          <text
            x={startX + barWidth / 2}
            y={y + barHeight + 20}
            textAnchor="middle"
            className="text-sm"
            fill={colors.stroke}
          >
            {label}
          </text>
        )}
      </g>
    );
  };

  // Render counting markers for "whole ÷ fraction" type
  const renderCountingMarkers = (y: number, totalParts: number, groupSize: number) => {
    const segmentWidth = barWidth / totalParts;
    const markers = [];

    for (let i = 0; i < totalParts; i += groupSize) {
      const groupNum = Math.floor(i / groupSize) + 1;
      markers.push(
        <g key={i}>
          {/* Bracket under group */}
          <path
            d={`M ${startX + i * segmentWidth + 2} ${y + barHeight + 5}
                L ${startX + i * segmentWidth + 2} ${y + barHeight + 12}
                L ${startX + (i + groupSize) * segmentWidth - 2} ${y + barHeight + 12}
                L ${startX + (i + groupSize) * segmentWidth - 2} ${y + barHeight + 5}`}
            fill="none"
            stroke={colors.divisor}
            strokeWidth="1.5"
          />
          {/* Group number */}
          <text
            x={startX + (i + groupSize / 2) * segmentWidth}
            y={y + barHeight + 25}
            textAnchor="middle"
            className="text-xs font-bold"
            fill={colors.divisor}
          >
            {groupNum}
          </text>
        </g>
      );
    }

    return markers;
  };

  // Render visualization based on division type
  const renderVisualization = () => {
    switch (divisionType) {
      case 'frac-by-whole': {
        // e.g., 1/2 ÷ 3 = 1/6
        // Show: Start with fraction, divide into more parts
        const originalParts = dividendParsed.denominator;
        const filledOriginal = dividendParsed.numerator;
        const newParts = originalParts * divisorParsed.numerator;
        const filledNew = filledOriginal; // Same amount, just more divisions

        return (
          <svg
            width="100%"
            height={svgHeight + 60}
            viewBox={`0 0 ${svgWidth} ${svgHeight + 60}`}
            style={{ maxWidth: '100%' }}
          >
            {/* Step 1: Original fraction */}
            <text x={startX} y={20} className="text-sm font-semibold" fill={colors.stroke}>
              Start: {formatFractionPlain(dividendParsed.numerator, dividendParsed.denominator)}
            </text>
            {renderBar(startY, originalParts, filledOriginal, colors.dividend, true, undefined,
              `${filledOriginal} out of ${originalParts} parts shaded`)}

            {/* Arrow */}
            <text x={svgWidth / 2} y={startY + barHeight + 50} textAnchor="middle" className="text-lg" fill={colors.stroke}>
              ÷ {divisorParsed.numerator} → Each part divided into {divisorParsed.numerator}
            </text>

            {/* Step 2: After division */}
            {renderBar(startY + barHeight + 70, newParts, filledNew, colors.result, true, undefined,
              `${filledNew} out of ${newParts} parts = ${formatFractionPlain(simplified.numerator, simplified.denominator)}`)}
          </svg>
        );
      }

      case 'whole-by-frac': {
        // e.g., 4 ÷ 1/3 = 12
        // Show: Multiple wholes, each divided into parts, count groups
        const wholes = dividendParsed.numerator;
        const partsPerWhole = divisorParsed.denominator;
        const totalParts = wholes * partsPerWhole;
        const groupSize = divisorParsed.numerator; // How many parts make one "group"

        return (
          <svg
            width="100%"
            height={svgHeight + 80}
            viewBox={`0 0 ${svgWidth} ${svgHeight + 80}`}
            style={{ maxWidth: '100%' }}
          >
            {/* Title */}
            <text x={startX} y={20} className="text-sm font-semibold" fill={colors.stroke}>
              {wholes} whole{wholes > 1 ? 's' : ''} ÷ {formatFractionPlain(divisorParsed.numerator, divisorParsed.denominator)}
            </text>

            {/* Bar with all parts */}
            {renderBar(startY, totalParts, totalParts, colors.dividend, true)}

            {/* Whole number dividers */}
            {Array.from({ length: wholes - 1 }).map((_, i) => (
              <line
                key={`whole-${i}`}
                x1={startX + (i + 1) * (barWidth / wholes)}
                y1={startY - 5}
                x2={startX + (i + 1) * (barWidth / wholes)}
                y2={startY + barHeight + 5}
                stroke={colors.stroke}
                strokeWidth="3"
              />
            ))}

            {/* Labels for wholes */}
            {Array.from({ length: wholes }).map((_, i) => (
              <text
                key={`label-${i}`}
                x={startX + (i + 0.5) * (barWidth / wholes)}
                y={startY - 10}
                textAnchor="middle"
                className="text-xs"
                fill={colors.stroke}
              >
                {i + 1}
              </text>
            ))}

            {/* Counting markers */}
            {renderCountingMarkers(startY, totalParts, groupSize)}
          </svg>
        );
      }

      case 'frac-by-frac': {
        // e.g., 2/3 ÷ 1/6 = 4
        // Show: Fraction bar, overlay divisor grid, count how many fit
        const lcm = (a: number, b: number) => Math.abs(a * b) / gcd(a, b);
        const commonDen = lcm(dividendParsed.denominator, divisorParsed.denominator);

        const dividendParts = commonDen;
        const dividendFilled = (dividendParsed.numerator * commonDen) / dividendParsed.denominator;
        const divisorSize = (divisorParsed.numerator * commonDen) / divisorParsed.denominator;
        const numGroups = dividendFilled / divisorSize;

        return (
          <svg
            width="100%"
            height={svgHeight + 100}
            viewBox={`0 0 ${svgWidth} ${svgHeight + 100}`}
            style={{ maxWidth: '100%' }}
          >
            {/* Title */}
            <text x={startX} y={20} className="text-sm font-semibold" fill={colors.stroke}>
              {formatFractionPlain(dividendParsed.numerator, dividendParsed.denominator)} ÷ {formatFractionPlain(divisorParsed.numerator, divisorParsed.denominator)}
            </text>

            {/* Dividend bar */}
            {renderBar(startY, dividendParts, dividendFilled, colors.dividend, true)}

            {/* Label for dividend */}
            <text
              x={startX + barWidth + 10}
              y={startY + barHeight / 2 + 5}
              className="text-xs"
              fill={colors.dividend}
            >
              {formatFractionPlain(dividendParsed.numerator, dividendParsed.denominator)}
            </text>

            {/* Divisor size indicator */}
            <text
              x={svgWidth / 2}
              y={startY + barHeight + 25}
              textAnchor="middle"
              className="text-sm"
              fill={colors.stroke}
            >
              How many {formatFractionPlain(divisorParsed.numerator, divisorParsed.denominator)} fit in {formatFractionPlain(dividendParsed.numerator, dividendParsed.denominator)}?
            </text>

            {/* Counting visualization */}
            <g transform={`translate(0, ${barHeight + 40})`}>
              {Array.from({ length: Math.ceil(numGroups) }).map((_, i) => {
                const segmentWidth = (barWidth / dividendParts) * divisorSize;
                const x = startX + i * segmentWidth;
                const isPartial = i === Math.floor(numGroups) && numGroups % 1 !== 0;

                return (
                  <g key={i}>
                    <rect
                      x={x}
                      y={startY}
                      width={isPartial ? segmentWidth * (numGroups % 1) : segmentWidth}
                      height={barHeight * 0.6}
                      fill={colors.divisor}
                      fillOpacity={0.5}
                      stroke={colors.divisor}
                      strokeWidth="2"
                      rx="2"
                    />
                    <text
                      x={x + segmentWidth / 2}
                      y={startY + barHeight * 0.6 + 15}
                      textAnchor="middle"
                      className="text-xs font-bold"
                      fill={colors.divisor}
                    >
                      {i + 1}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>
        );
      }
    }
  };

  return (
    <div
      className="my-4 p-4 rounded-lg border"
      style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.surface }}
    >
      {/* Visualization */}
      <div className="flex justify-center overflow-x-auto">
        {renderVisualization()}
      </div>

      {/* Reciprocal Rule */}
      {showReciprocal && (
        <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500">
          <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textPrimary }}>
            Remember the Rule:
          </div>
          <div className="text-sm" style={{ color: theme.colors.textSecondary }}>
            <MathText>
              {`Dividing by ${formatFraction(divisorParsed.numerator, divisorParsed.denominator)} is the same as multiplying by ${formatFraction(divisorParsed.denominator, divisorParsed.numerator)}`}
            </MathText>
          </div>
          <div className="mt-2 text-sm font-mono" style={{ color: theme.colors.textMuted }}>
            <MathText>
              {`${formatFraction(dividendParsed.numerator, dividendParsed.denominator)} ÷ ${formatFraction(divisorParsed.numerator, divisorParsed.denominator)} = ${formatFraction(dividendParsed.numerator, dividendParsed.denominator)} × ${formatFraction(divisorParsed.denominator, divisorParsed.numerator)}`}
            </MathText>
          </div>
        </div>
      )}

      {/* Step-by-step working */}
      {showSteps && (
        <div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500">
          <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
            Working:
          </div>
          <div className="space-y-1 text-sm" style={{ color: theme.colors.textSecondary }}>
            <div>
              <MathText>
                {`${formatFraction(dividendParsed.numerator, dividendParsed.denominator)} ÷ ${formatFraction(divisorParsed.numerator, divisorParsed.denominator)}`}
              </MathText>
            </div>
            <div>
              <MathText>
                {`= ${formatFraction(dividendParsed.numerator, dividendParsed.denominator)} × ${formatFraction(divisorParsed.denominator, divisorParsed.numerator)}`}
              </MathText>
            </div>
            <div>
              <MathText>
                {`= $\\frac{${dividendParsed.numerator} × ${divisorParsed.denominator}}{${dividendParsed.denominator} × ${divisorParsed.numerator}}$`}
              </MathText>
            </div>
            <div>
              <MathText>
                {`= $\\frac{${resultNum}}{${resultDen}}$`}
              </MathText>
            </div>
            {(simplified.numerator !== resultNum || simplified.denominator !== resultDen) && (
              <div>
                <MathText>
                  {`= ${formatFraction(simplified.numerator, simplified.denominator)} (simplified)`}
                </MathText>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Final Result */}
      {showResult && (
        <div className="mt-4 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold" style={{ color: theme.colors.textPrimary }}>
              Answer:
            </span>
            <span className="text-lg font-bold" style={{ color: colors.result }}>
              <MathText>
                {formatFraction(simplified.numerator, simplified.denominator)}
              </MathText>
            </span>
          </div>
        </div>
      )}

      {/* Caption */}
      {caption && (
        <div
          className="text-sm mt-4 pt-4 border-t text-center"
          style={{ borderColor: theme.colors.border, color: theme.colors.textMuted }}
        >
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default FractionDivisionVisualizer;
