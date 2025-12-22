import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface FractionBarVisualizerProps {
  fraction1: string;              // "numerator/denominator" (e.g., "3/4")
  fraction2?: string;             // Second fraction for compare/operations
  operation?: 'add' | 'subtract' | 'compare' | 'equivalent';
  showLCM?: boolean;              // Show LCD calculation
  showSteps?: boolean;            // Show step-by-step breakdown
  caption?: string;               // Additional explanation
}

interface ParsedFraction {
  numerator: number;
  denominator: number;
  original: string;
}

const FractionBarVisualizer: React.FC<FractionBarVisualizerProps> = ({
  fraction1,
  fraction2,
  operation,
  showLCM = false,
  showSteps = false,
  caption
}) => {
  const { theme } = useTheme();

  // Parse fraction string "a/b" into {numerator, denominator}
  const parseFraction = (fractionStr: string): ParsedFraction | null => {
    const trimmed = fractionStr.trim();
    const parts = trimmed.split('/');

    if (parts.length !== 2) return null;

    const num = parseInt(parts[0].trim(), 10);
    const den = parseInt(parts[1].trim(), 10);

    if (isNaN(num) || isNaN(den) || den === 0) return null;

    return { numerator: num, denominator: den, original: fractionStr };
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

  // Calculate LCM
  const lcm = (a: number, b: number): number => {
    return Math.abs(a * b) / gcd(a, b);
  };

  // Simplify fraction
  const simplifyFraction = (num: number, den: number): { numerator: number; denominator: number } => {
    const divisor = gcd(num, den);
    return { numerator: num / divisor, denominator: den / divisor };
  };

  const frac1 = parseFraction(fraction1);
  const frac2 = fraction2 ? parseFraction(fraction2) : null;

  if (!frac1) {
    return (
      <div className="my-4 p-4 rounded-lg border border-red-300 bg-red-50 dark:bg-red-900/20">
        <p className="text-red-700 dark:text-red-400">Invalid fraction format: {fraction1}</p>
        <p className="text-sm text-red-600 dark:text-red-500 mt-1">Use format: "numerator/denominator" (e.g., "3/4")</p>
      </div>
    );
  }

  // Render a single fraction bar
  const renderFractionBar = (
    frac: ParsedFraction,
    color: string,
    label?: string,
    showDenominator: number = frac.denominator
  ) => {
    const segments = showDenominator;
    const filledSegments = Math.round((frac.numerator / frac.denominator) * showDenominator);
    const segmentWidth = 100 / segments;

    return (
      <div className="mb-4">
        {label && (
          <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
            <MathText>{`$\\frac{${frac.numerator}}{${frac.denominator}}$`}</MathText>
            {label && <span className="ml-2 text-gray-600 dark:text-gray-400">{label}</span>}
          </div>
        )}
        <div className="flex items-center gap-2">
          <div className="flex-1 flex border-2 rounded-lg overflow-hidden" style={{ borderColor: color, height: '60px' }}>
            {Array.from({ length: segments }).map((_, i) => (
              <div
                key={i}
                className="flex-1 border-r last:border-r-0 transition-all"
                style={{
                  width: `${segmentWidth}%`,
                  backgroundColor: i < filledSegments ? color : 'transparent',
                  borderRightColor: theme.colors.border,
                  opacity: i < filledSegments ? 0.8 : 1
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Calculate LCD and convert fractions
  const calculateLCD = () => {
    if (!frac2) return null;

    const commonDen = lcm(frac1.denominator, frac2.denominator);
    const frac1Converted = {
      numerator: frac1.numerator * (commonDen / frac1.denominator),
      denominator: commonDen,
      original: `${frac1.numerator * (commonDen / frac1.denominator)}/${commonDen}`
    };
    const frac2Converted = {
      numerator: frac2.numerator * (commonDen / frac2.denominator),
      denominator: commonDen,
      original: `${frac2.numerator * (commonDen / frac2.denominator)}/${commonDen}`
    };

    return { lcd: commonDen, frac1Converted, frac2Converted };
  };

  const lcdData = frac2 ? calculateLCD() : null;

  // Perform operation
  const performOperation = () => {
    if (!frac2 || !lcdData || !operation) return null;

    const { frac1Converted, frac2Converted, lcd } = lcdData;

    let resultNum = 0;
    let operationSymbol = '';

    if (operation === 'add') {
      resultNum = frac1Converted.numerator + frac2Converted.numerator;
      operationSymbol = '+';
    } else if (operation === 'subtract') {
      resultNum = frac1Converted.numerator - frac2Converted.numerator;
      operationSymbol = '-';
    }

    const simplified = simplifyFraction(resultNum, lcd);

    return {
      resultNumerator: resultNum,
      resultDenominator: lcd,
      simplified,
      operationSymbol
    };
  };

  const operationResult = (operation === 'add' || operation === 'subtract') ? performOperation() : null;

  return (
    <div
      className="my-4 p-4 rounded-lg border"
      style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.surface }}
    >
      {/* Title */}

      {/* Single Fraction */}
      {!frac2 && (
        <div>
          {renderFractionBar(frac1, '#3b82f6')}
        </div>
      )}

      {/* Two Fractions - Compare */}
      {frac2 && operation === 'compare' && (
        <div>
          {renderFractionBar(frac1, '#3b82f6', 'Fraction 1')}
          {renderFractionBar(frac2, '#8b5cf6', 'Fraction 2')}

          {showSteps && lcdData && (
            <div className="mt-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.textMuted }}>
                Convert to Common Denominator (LCD = {lcdData.lcd}):
              </div>
              {renderFractionBar(lcdData.frac1Converted, '#3b82f6', 'Converted Fraction 1', lcdData.lcd)}
              {renderFractionBar(lcdData.frac2Converted, '#8b5cf6', 'Converted Fraction 2', lcdData.lcd)}
            </div>
          )}
        </div>
      )}

      {/* Two Fractions - Add/Subtract */}
      {frac2 && (operation === 'add' || operation === 'subtract') && lcdData && operationResult && (
        <div>
          <div className="text-sm font-semibold mb-3" style={{ color: theme.colors.textMuted }}>
            Step 1: Original Fractions
          </div>
          {renderFractionBar(frac1, '#3b82f6', 'Fraction 1')}
          {renderFractionBar(frac2, '#8b5cf6', 'Fraction 2')}

          {(showLCM || showSteps) && (
            <>
              <div className="text-sm font-semibold mb-3 mt-4" style={{ color: theme.colors.textMuted }}>
                Step 2: Find LCD and Convert
              </div>
              <div className="mb-3 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500">
                <MathText>
                  {`LCD(${frac1.denominator}, ${frac2.denominator}) = ${lcdData.lcd}`}
                </MathText>
              </div>
              {renderFractionBar(lcdData.frac1Converted, '#3b82f6', `= ${lcdData.frac1Converted.numerator}/${lcdData.lcd}`, lcdData.lcd)}
              {renderFractionBar(lcdData.frac2Converted, '#8b5cf6', `= ${lcdData.frac2Converted.numerator}/${lcdData.lcd}`, lcdData.lcd)}
            </>
          )}

          <div className="text-sm font-semibold mb-3 mt-4" style={{ color: theme.colors.textMuted }}>
            Step 3: Perform Operation
          </div>
          <div className="mb-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500">
            <MathText>
              {`$\\frac{${lcdData.frac1Converted.numerator}}{${lcdData.lcd}} ${operationResult.operationSymbol} \\frac{${lcdData.frac2Converted.numerator}}{${lcdData.lcd}} = \\frac{${operationResult.resultNumerator}}{${operationResult.resultDenominator}}$`}
            </MathText>
            {operationResult.simplified.numerator !== operationResult.resultNumerator && (
              <div className="mt-2">
                <MathText>
                  {`Simplified: $\\frac{${operationResult.simplified.numerator}}{${operationResult.simplified.denominator}}$`}
                </MathText>
              </div>
            )}
          </div>
          {renderFractionBar(
            { numerator: operationResult.resultNumerator, denominator: operationResult.resultDenominator, original: '' },
            '#10b981',
            'Result',
            operationResult.resultDenominator
          )}
        </div>
      )}

      {/* Equivalent Fractions */}
      {frac2 && operation === 'equivalent' && (
        <div>
          {renderFractionBar(frac1, '#3b82f6', 'Original Fraction')}
          {renderFractionBar(frac2, '#10b981', 'Equivalent Fraction')}

          <div className="mt-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500">
            <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
              <MathText>
                {`$\\frac{${frac1.numerator}}{${frac1.denominator}}$`}
              </MathText>
              {' and '}
              <MathText>
                {`$\\frac{${frac2.numerator}}{${frac2.denominator}}$`}
              </MathText>
              {' represent the same value.'}
            </p>
          </div>
        </div>
      )}

      {/* Caption */}
      {caption && (
        <div
          className="text-sm mt-4 pt-4 border-t"
          style={{ borderColor: theme.colors.border, color: theme.colors.textSecondary }}
        >
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default FractionBarVisualizer;
