import React, { useState, useMemo } from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface MultiplicationGridVisualizerProps {
  expression1: string;  // e.g., "x+2", "3x+1", "2x-5"
  expression2: string;  // e.g., "x+3", "x-4"
  mode?: 'expand' | 'factorise';
  showDiscs?: boolean;  // Show colored algebra discs representation
  showGrid?: boolean;   // Show multiplication grid
  highlightCell?: string; // e.g., "0,0" for top-left cell
  stepByStep?: boolean;
  caption?: string;
}

interface Term {
  coefficient: number;
  variable: string;
  display: string;
}

const MultiplicationGridVisualizer: React.FC<MultiplicationGridVisualizerProps> = ({
  expression1,
  expression2,
  mode = 'expand',
  showDiscs = false,
  showGrid = true,
  highlightCell,
  stepByStep = true,
  caption
}) => {
  const { theme } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);

  // Parse expression into terms
  const parseExpression = (expr: string): Term[] => {
    // Remove spaces
    expr = expr.replace(/\s/g, '');

    // Split by + and - while keeping the sign
    const terms: Term[] = [];
    let currentTerm = '';

    for (let i = 0; i < expr.length; i++) {
      const char = expr[i];
      if ((char === '+' || char === '-') && i > 0) {
        if (currentTerm) {
          terms.push(parseTerm(currentTerm));
        }
        currentTerm = char === '-' ? '-' : '';
      } else {
        currentTerm += char;
      }
    }
    if (currentTerm) {
      terms.push(parseTerm(currentTerm));
    }

    return terms;
  };

  const parseTerm = (term: string): Term => {
    // Match pattern: optional sign, coefficient, variable with optional power
    const match = term.match(/^([+-]?\d*\.?\d*)([a-z])?\^?(\d+)?$/i);

    if (!match) {
      // Constant term
      const value = parseFloat(term) || 0;
      return {
        coefficient: value,
        variable: '',
        display: value >= 0 ? `${value}` : `${value}`
      };
    }

    const [, coefStr, variable, power] = match;
    let coefficient = coefStr === '' || coefStr === '+' ? 1 :
                      coefStr === '-' ? -1 :
                      parseFloat(coefStr);

    const varPart = variable ? (power ? `${variable}^{${power}}` : variable) : '';
    const displayCoef = coefficient === 1 && variable ? '' :
                        coefficient === -1 && variable ? '-' :
                        coefficient.toString();

    return {
      coefficient,
      variable: variable || '',
      display: `${displayCoef}${varPart}`
    };
  };

  const terms1 = useMemo(() => parseExpression(expression1), [expression1]);
  const terms2 = useMemo(() => parseExpression(expression2), [expression2]);

  // Multiply two terms
  const multiplyTerms = (term1: Term, term2: Term): { display: string, type: 'x²' | 'x' | 'constant' } => {
    const coef = term1.coefficient * term2.coefficient;

    // Determine variable part
    let variable = '';
    let type: 'x²' | 'x' | 'constant' = 'constant';

    if (term1.variable && term2.variable) {
      variable = `${term1.variable}^2`;
      type = 'x²';
    } else if (term1.variable || term2.variable) {
      variable = term1.variable || term2.variable;
      type = 'x';
    }

    // Build display string
    let display = '';
    if (coef === 1 && variable) {
      display = variable;
    } else if (coef === -1 && variable) {
      display = `-${variable}`;
    } else if (variable) {
      display = `${coef}${variable}`;
    } else {
      display = coef.toString();
    }

    // Add + for positive terms (except if starting with -)
    if (!display.startsWith('-') && coef > 0) {
      display = `+${display}`;
    }

    return { display, type };
  };

  // Create grid data
  const gridData = useMemo(() => {
    return terms2.map((term2) =>
      terms1.map((term1) => multiplyTerms(term1, term2))
    );
  }, [terms1, terms2]);

  // Simplify the result
  const simplifiedResult = useMemo(() => {
    const allTerms = gridData.flat();
    const grouped: { [key: string]: number } = {};

    allTerms.forEach(({ display }) => {
      // Extract coefficient and variable
      const match = display.match(/^([+-]?\d*\.?\d*)(.*)$/);
      if (!match) return;

      const [, coefStr, varPart] = match;
      const coef = coefStr === '' || coefStr === '+' ? 1 :
                   coefStr === '-' ? -1 :
                   parseFloat(coefStr);

      const key = varPart || 'constant';
      grouped[key] = (grouped[key] || 0) + coef;
    });

    // Build simplified expression
    const parts: string[] = [];

    // Order: x², x, constant
    ['x^2', 'x', 'constant'].forEach(key => {
      if (grouped[key] && grouped[key] !== 0) {
        const coef = grouped[key];
        const varPart = key === 'constant' ? '' : key;

        let termDisplay = '';
        if (coef === 1 && varPart) {
          termDisplay = varPart;
        } else if (coef === -1 && varPart) {
          termDisplay = `-${varPart}`;
        } else if (varPart) {
          termDisplay = `${coef}${varPart}`;
        } else {
          termDisplay = coef.toString();
        }

        parts.push(termDisplay);
      }
    });

    // Join with proper signs
    let result = parts[0] || '0';
    for (let i = 1; i < parts.length; i++) {
      if (parts[i].startsWith('-')) {
        result += ` ${parts[i]}`;
      } else {
        result += ` + ${parts[i]}`;
      }
    }

    return result;
  }, [gridData]);

  // Color scheme for different term types
  const getTermColor = (type: 'x²' | 'x' | 'constant') => {
    switch (type) {
      case 'x²':
        return {
          bg: 'bg-green-100 dark:bg-green-900/30',
          border: 'border-green-500',
          text: 'text-green-800 dark:text-green-300'
        };
      case 'x':
        return {
          bg: 'bg-blue-100 dark:bg-blue-900/30',
          border: 'border-blue-500',
          text: 'text-blue-800 dark:text-blue-300'
        };
      case 'constant':
        return {
          bg: 'bg-orange-100 dark:bg-orange-900/30',
          border: 'border-orange-500',
          text: 'text-orange-800 dark:text-orange-300'
        };
    }
  };

  const totalSteps = stepByStep ? (terms1.length * terms2.length) + 2 : 3;

  return (
    <div
      className="my-4 p-6 rounded-lg border"
      style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.surface }}
    >
      {/* Title */}
      <div className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
        {mode === 'expand' ? 'Multiplication Grid - Expansion' : 'Multiplication Grid - Factorisation'}
      </div>

      {/* Original Expression */}
      {mode === 'expand' && (
        <div className="mb-6">
          <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.textMuted }}>
            Expression to Expand:
          </div>
          <div className="text-2xl p-4 rounded bg-gray-50 dark:bg-gray-800 text-center" style={{ color: theme.colors.textPrimary }}>
            <MathText>{`$(${expression1})(${expression2})$`}</MathText>
          </div>
        </div>
      )}

      {/* Multiplication Grid */}
      {showGrid && (
        <div className="mb-6 overflow-x-auto">
          <div className="text-sm font-semibold mb-3" style={{ color: theme.colors.textMuted }}>
            Multiplication Grid:
          </div>

          <div className="inline-block min-w-full">
            <div className="border-2 border-gray-400 dark:border-gray-600 inline-block">
              <div className="grid gap-0" style={{ gridTemplateColumns: `80px repeat(${terms1.length}, minmax(100px, 1fr))` }}>
                {/* Header row */}
                <div className="w-20 h-16 border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 flex items-center justify-center font-bold">
                  ×
                </div>
                {terms1.map((term, idx) => (
                  <div
                    key={`header-${idx}`}
                    className="h-16 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-semibold px-2"
                  >
                    <MathText>{`$${term.display}$`}</MathText>
                  </div>
                ))}

                {/* Data rows */}
                {terms2.map((term2, rowIdx) => (
                  <React.Fragment key={`row-${rowIdx}`}>
                    {/* Row header */}
                    <div className="w-20 h-20 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-semibold">
                      <MathText>{`$${term2.display}$`}</MathText>
                    </div>

                    {/* Data cells */}
                    {terms1.map((_term1, colIdx) => {
                      const cellData = gridData[rowIdx][colIdx];
                      const colors = getTermColor(cellData.type);
                      const cellId = `${rowIdx},${colIdx}`;
                      const isHighlighted = highlightCell === cellId;
                      const stepIndex = rowIdx * terms1.length + colIdx;
                      const isVisible = !stepByStep || currentStep > stepIndex;

                      return (
                        <div
                          key={`cell-${rowIdx}-${colIdx}`}
                          className={`h-20 border-2 flex items-center justify-center font-semibold px-2 transition-all duration-300 ${colors.bg} ${colors.text} ${
                            isHighlighted ? 'ring-4 ring-yellow-400 dark:ring-yellow-500' : colors.border
                          }`}
                          style={{
                            opacity: isVisible ? 1 : 0.3,
                            transform: isVisible ? 'scale(1)' : 'scale(0.95)'
                          }}
                        >
                          <MathText>{`$${cellData.display}$`}</MathText>
                        </div>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 border-2 border-green-500 rounded"></div>
              <span style={{ color: theme.colors.textSecondary }}>x² terms</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500 rounded"></div>
              <span style={{ color: theme.colors.textSecondary }}>x terms</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 border-2 border-orange-500 rounded"></div>
              <span style={{ color: theme.colors.textSecondary }}>Constants</span>
            </div>
          </div>

          {/* Animation Controls */}
          {stepByStep && totalSteps > 1 && (
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="px-4 py-2 rounded text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
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
                className="px-4 py-2 rounded text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
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
      )}

      {/* Simplified Result */}
      <div className="mb-4">
        <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.textMuted }}>
          {mode === 'expand' ? 'Expanded and Simplified:' : 'Factorised Form:'}
        </div>
        <div
          className="text-2xl p-4 rounded border-2"
          style={{
            borderColor: theme.colors.success || '#10b981',
            backgroundColor: '#10b98110',
            color: theme.colors.textPrimary
          }}
        >
          {mode === 'expand' ? (
            <div className="text-center">
              <MathText>{`$(${expression1})(${expression2}) = ${simplifiedResult}$`}</MathText>
            </div>
          ) : (
            <div className="text-center">
              <MathText>{`$${simplifiedResult} = (${expression1})(${expression2})$`}</MathText>
            </div>
          )}
        </div>
      </div>

      {/* Algebra Discs Representation */}
      {showDiscs && (
        <div className="mb-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
          <div className="text-sm font-semibold mb-3" style={{ color: theme.colors.textMuted }}>
            Algebra Discs Representation:
          </div>
          <div className="flex flex-wrap gap-4">
            {gridData.flat().map((cell, idx) => {
              const colors = getTermColor(cell.type);
              const count = Math.abs(parseInt(cell.display.match(/^([+-]?\d+)/)?.[1] || '1'));
              const isNegative = cell.display.startsWith('-');

              return (
                <div key={idx} className="flex items-center gap-2">
                  <div className={`px-3 py-2 rounded ${colors.bg} ${colors.border} border-2`}>
                    <MathText>{`$${cell.display}$`}</MathText>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: Math.min(count, 5) }).map((_, discIdx) => (
                      <div
                        key={discIdx}
                        className={`w-6 h-6 rounded-full ${
                          isNegative ? 'bg-red-500' : colors.bg.replace('dark:bg-', 'dark:bg-').replace('/30', '')
                        } border-2 ${colors.border}`}
                      ></div>
                    ))}
                    {count > 5 && (
                      <div className="text-xs" style={{ color: theme.colors.textMuted }}>
                        +{count - 5} more
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
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

export default MultiplicationGridVisualizer;
