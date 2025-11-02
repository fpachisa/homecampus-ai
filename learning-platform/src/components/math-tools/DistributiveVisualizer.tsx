import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface DistributiveVisualizerProps {
  multiplier: string | number;
  terms: string[];
  operation?: '+' | '-';
  showSteps?: boolean;
  showAnimation?: boolean;
  caption?: string;
}

const DistributiveVisualizer: React.FC<DistributiveVisualizerProps> = ({
  multiplier,
  terms,
  operation = '+',
  showSteps = true,
  showAnimation = true,
  caption
}) => {
  const { theme } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);

  // Colors for visual connections
  const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

  // Build the original expression
  const buildOriginalExpression = () => {
    return `${multiplier}(${terms.join(` ${operation} `)})`;
  };

  // Build final simplified expression
  const buildFinalExpression = () => {
    // Simple multiplication (for now, just concat strings)
    return terms.map(term => {
      // Handle simple cases
      if (multiplier === '1') return term;
      if (multiplier === '-1') return `-${term}`;
      if (term === '1') return `${multiplier}`;

      // Numeric multiplication
      const mult = typeof multiplier === 'number' ? multiplier : multiplier;
      const termMatch = term.match(/^(-?\d*\.?\d*)([a-z]*)$/i);
      if (termMatch) {
        const [, coef, variable] = termMatch;
        const coefficient = coef === '' ? 1 : (coef === '-' ? -1 : parseFloat(coef));
        const multNum = typeof mult === 'number' ? mult : parseFloat(mult.toString());

        if (!isNaN(multNum) && !isNaN(coefficient)) {
          const result = multNum * coefficient;
          return `${result}${variable}`;
        }
      }

      return `${multiplier}${term}`;
    }).join(` ${operation} `);
  };

  const totalSteps = showSteps ? terms.length + 2 : 3;

  return (
    <div
      className="my-4 p-4 rounded-lg border"
      style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.surface }}
    >
      <div className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
        Distributive Law Visualization
      </div>

      {/* Original Expression */}
      <div className="mb-6">
        <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.textMuted }}>
          Original Expression:
        </div>
        <div className="text-2xl p-4 rounded bg-gray-50 dark:bg-gray-800 text-center" style={{ color: theme.colors.textPrimary }}>
          <MathText>{`$${buildOriginalExpression()}$`}</MathText>
        </div>
      </div>

      {/* Visual Distribution Diagram */}
      <div className="mb-6">
        <div className="text-sm font-semibold mb-3" style={{ color: theme.colors.textMuted }}>
          Distribution Diagram:
        </div>
        <div className="relative p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
          {/* Multiplier at top */}
          <div className="flex justify-center mb-8">
            <div
              className="px-4 py-2 rounded-lg text-xl font-bold border-2"
              style={{
                borderColor: theme.colors.brand,
                backgroundColor: `${theme.colors.brand}20`,
                color: theme.colors.brand
              }}
            >
              <MathText>{`$${multiplier}$`}</MathText>
            </div>
          </div>

          {/* Connecting Lines (visual only with CSS) */}
          <div className="relative mb-4">
            <svg className="w-full h-16" viewBox="0 0 400 64" preserveAspectRatio="none">
              {terms.map((_, index) => {
                const x1 = 200; // Center top
                const x2 = (index + 1) * (400 / (terms.length + 1));
                const color = colors[index % colors.length];

                return (
                  <line
                    key={index}
                    x1={x1}
                    y1={0}
                    x2={x2}
                    y2={64}
                    stroke={color}
                    strokeWidth="3"
                    strokeDasharray={showAnimation && currentStep < index + 1 ? "5,5" : "0"}
                    opacity={showAnimation && currentStep < index + 1 ? "0.3" : "1"}
                  />
                );
              })}
            </svg>
          </div>

          {/* Terms at bottom */}
          <div className="flex justify-around items-center gap-4">
            {terms.map((term, index) => {
              const color = colors[index % colors.length];
              return (
                <div
                  key={index}
                  className="px-4 py-2 rounded-lg text-lg font-semibold border-2 flex-1 text-center"
                  style={{
                    borderColor: color,
                    backgroundColor: `${color}15`,
                    color: color,
                    opacity: showAnimation && currentStep < index + 1 ? 0.4 : 1,
                    transition: 'opacity 0.3s'
                  }}
                >
                  <MathText>{`$${term}$`}</MathText>
                </div>
              );
            })}
          </div>
        </div>

        {/* Animation Controls */}
        {showAnimation && totalSteps > 1 && (
          <div className="mt-3 flex items-center gap-3">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="px-3 py-1 rounded text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                backgroundColor: theme.colors.brand,
                color: 'white'
              }}
            >
              Previous
            </button>
            <div className="flex-1 text-center text-sm" style={{ color: theme.colors.textMuted }}>
              Step {currentStep + 1} of {totalSteps}
            </div>
            <button
              onClick={() => setCurrentStep(Math.min(totalSteps - 1, currentStep + 1))}
              disabled={currentStep === totalSteps - 1}
              className="px-3 py-1 rounded text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                backgroundColor: theme.colors.brand,
                color: 'white'
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Step-by-Step Explanation */}
      {showSteps && (
        <div className="mb-4 space-y-3">
          <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.textMuted }}>
            Step-by-Step:
          </div>

          {/* Step 1: Show multiplication symbol */}
          <div
            className="p-3 rounded-lg border-l-4"
            style={{
              borderLeftColor: currentStep >= 0 ? theme.colors.brand : theme.colors.border,
              backgroundColor: currentStep >= 0 ? `${theme.colors.brand}10` : theme.colors.surface,
              opacity: currentStep >= 0 ? 1 : 0.5
            }}
          >
            <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textPrimary }}>
              Step 1: Write out the multiplication
            </div>
            <div className="text-base" style={{ color: theme.colors.textPrimary }}>
              <MathText>{`$${multiplier}(${terms.join(` ${operation} `)})$`}</MathText>
            </div>
          </div>

          {/* Steps 2-N: Each term multiplication */}
          {terms.map((term, index) => {
            const color = colors[index % colors.length];
            return (
              <div
                key={index}
                className="p-3 rounded-lg border-l-4"
                style={{
                  borderLeftColor: currentStep >= index + 1 ? color : theme.colors.border,
                  backgroundColor: currentStep >= index + 1 ? `${color}15` : theme.colors.surface,
                  opacity: currentStep >= index + 1 ? 1 : 0.5
                }}
              >
                <div className="text-sm font-semibold mb-1" style={{ color }}>
                  Step {index + 2}: Multiply {multiplier} by {term}
                </div>
                <div className="text-base" style={{ color: theme.colors.textPrimary }}>
                  <MathText>{`$${multiplier} \\times ${term}$`}</MathText>
                </div>
              </div>
            );
          })}

          {/* Final step: Simplified result */}
          <div
            className="p-3 rounded-lg border-2"
            style={{
              borderColor: currentStep >= totalSteps - 1 ? theme.colors.success || '#10b981' : theme.colors.border,
              backgroundColor: currentStep >= totalSteps - 1 ? '#10b98110' : theme.colors.surface,
              opacity: currentStep >= totalSteps - 1 ? 1 : 0.5
            }}
          >
            <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.success || '#10b981' }}>
              Final Answer:
            </div>
            <div className="text-xl font-bold" style={{ color: theme.colors.textPrimary }}>
              <MathText>{`$${buildFinalExpression()}$`}</MathText>
            </div>
          </div>
        </div>
      )}

      {/* Summary */}
      <div
        className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500"
      >
        <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.brand }}>
          The Distributive Law:
        </div>
        <div className="text-sm" style={{ color: theme.colors.textSecondary }}>
          <MathText>{`$a(b + c) = ab + ac$`}</MathText>
          <div className="mt-2">
            When you multiply a term by an expression in brackets, you must multiply it by
            <strong> every term</strong> inside the brackets.
          </div>
        </div>
      </div>

      {caption && (
        <div
          className="text-sm mt-3 pt-3 border-t"
          style={{ borderColor: theme.colors.border, color: theme.colors.textSecondary }}
        >
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default DistributiveVisualizer;
