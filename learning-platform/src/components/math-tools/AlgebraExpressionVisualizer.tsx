import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface AlgebraExpressionVisualizerProps {
  expression: string;
  highlightLikeTerms?: boolean;
  showCoefficients?: boolean;
  showBreakdown?: boolean;
  caption?: string;
}

interface Term {
  coefficient: number;
  variable: string;
  power: number;
  original: string;
  isConstant: boolean;
}

const AlgebraExpressionVisualizer: React.FC<AlgebraExpressionVisualizerProps> = ({
  expression,
  highlightLikeTerms = true,
  showCoefficients = true,
  showBreakdown = true,
  caption
}) => {
  const { theme } = useTheme();

  // Parse algebraic expression into terms
  const parseExpression = (expr: string): Term[] => {
    // Remove spaces
    expr = expr.replace(/\s+/g, '');

    // Split by + and - while keeping the operator
    const termStrings: string[] = [];
    let currentTerm = '';
    let prevChar = '';

    for (let i = 0; i < expr.length; i++) {
      const char = expr[i];
      if ((char === '+' || char === '-') && prevChar !== '' && i !== 0) {
        termStrings.push(currentTerm);
        currentTerm = char;
      } else {
        currentTerm += char;
      }
      prevChar = char;
    }
    if (currentTerm) {
      termStrings.push(currentTerm);
    }

    // Parse each term
    return termStrings.map(termStr => {
      // Match pattern: [sign][coefficient][variable][^power]
      const match = termStr.match(/^([+-]?)(\d*\.?\d*)([a-z]?)(?:\^(\d+))?$/i);

      if (!match) {
        return {
          coefficient: 0,
          variable: '',
          power: 0,
          original: termStr,
          isConstant: true
        };
      }

      const [, sign, coefStr, variable, powerStr] = match;
      let coefficient = coefStr === '' ? 1 : parseFloat(coefStr);
      if (sign === '-') coefficient = -coefficient;

      const power = powerStr ? parseInt(powerStr) : (variable ? 1 : 0);
      const isConstant = !variable;

      return {
        coefficient,
        variable: variable || '',
        power,
        original: termStr,
        isConstant
      };
    });
  };

  const terms = parseExpression(expression);

  // Group terms by variable and power
  const groupLikeTerms = (): Map<string, Term[]> => {
    const groups = new Map<string, Term[]>();

    terms.forEach(term => {
      const key = term.isConstant ? 'constant' : `${term.variable}^${term.power}`;
      if (!groups.has(key)) {
        groups.set(key, []);
      }
      groups.get(key)!.push(term);
    });

    return groups;
  };

  const likeTermGroups = groupLikeTerms();
  const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4'];

  // Assign colors to like term groups
  const termColors = new Map<string, string>();
  let colorIndex = 0;
  likeTermGroups.forEach((_, key) => {
    termColors.set(key, colors[colorIndex % colors.length]);
    colorIndex++;
  });

  return (
    <div
      className="my-4 p-4 rounded-lg border"
      style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.surface }}
    >
      <div className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
        Algebraic Expression Analysis
      </div>

      {/* Original Expression */}
      <div className="mb-4">
        <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.textMuted }}>
          Expression:
        </div>
        <div className="text-xl p-3 rounded bg-gray-50 dark:bg-gray-800" style={{ color: theme.colors.textPrimary }}>
          <MathText>{`$${expression}$`}</MathText>
        </div>
      </div>

      {/* Visual Term Breakdown */}
      {showBreakdown && (
        <div className="mb-4">
          <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.textMuted }}>
            Term Breakdown:
          </div>
          <div className="flex flex-wrap gap-3">
            {terms.map((term, index) => {
              const key = term.isConstant ? 'constant' : `${term.variable}^${term.power}`;
              const color = highlightLikeTerms ? termColors.get(key) : theme.colors.brand;

              return (
                <div
                  key={index}
                  className="p-3 rounded-lg border-2 flex flex-col items-center min-w-[100px]"
                  style={{
                    borderColor: color,
                    backgroundColor: `${color}15`
                  }}
                >
                  <div className="text-lg font-bold mb-1" style={{ color }}>
                    <MathText>{`$${term.original}$`}</MathText>
                  </div>
                  {!term.isConstant && (
                    <>
                      <div className="text-xs mt-1" style={{ color: theme.colors.textMuted }}>
                        Coefficient: <span className="font-semibold">{term.coefficient}</span>
                      </div>
                      <div className="text-xs" style={{ color: theme.colors.textMuted }}>
                        Variable: <span className="font-semibold">{term.variable}</span>
                      </div>
                      {term.power > 1 && (
                        <div className="text-xs" style={{ color: theme.colors.textMuted }}>
                          Power: <span className="font-semibold">{term.power}</span>
                        </div>
                      )}
                    </>
                  )}
                  {term.isConstant && (
                    <div className="text-xs mt-1" style={{ color: theme.colors.textMuted }}>
                      Constant
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Like Terms Groups */}
      {highlightLikeTerms && likeTermGroups.size > 1 && (
        <div className="mb-4">
          <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.textMuted }}>
            Like Terms Groups:
          </div>
          <div className="space-y-2">
            {Array.from(likeTermGroups.entries()).map(([key, groupTerms]) => {
              const color = termColors.get(key);
              const isConstant = key === 'constant';

              return (
                <div
                  key={key}
                  className="p-3 rounded-lg border-l-4"
                  style={{
                    borderLeftColor: color,
                    backgroundColor: `${color}10`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-semibold" style={{ color }}>
                        {isConstant ? 'Constants' : `Terms with ${key.replace('^1', '')}`}
                      </span>
                      <span className="text-xs ml-2" style={{ color: theme.colors.textMuted }}>
                        ({groupTerms.length} term{groupTerms.length > 1 ? 's' : ''})
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {groupTerms.map((term, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded text-sm font-mono"
                          style={{
                            backgroundColor: color,
                            color: 'white'
                          }}
                        >
                          <MathText>{`$${term.original}$`}</MathText>
                        </span>
                      ))}
                    </div>
                  </div>
                  {groupTerms.length > 1 && (
                    <div className="mt-2 text-sm" style={{ color: theme.colors.textSecondary }}>
                      Can be combined: {groupTerms.map(t => t.coefficient).reduce((a, b) => a + b, 0)}
                      {!isConstant && groupTerms[0].variable}
                      {!isConstant && groupTerms[0].power > 1 && `^${groupTerms[0].power}`}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Coefficient Explanation */}
      {showCoefficients && (
        <div
          className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500"
        >
          <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.brand }}>
            About Coefficients:
          </div>
          <div className="text-sm space-y-1" style={{ color: theme.colors.textSecondary }}>
            <div>• The <strong>coefficient</strong> is the number in front of the variable</div>
            <div>• <strong>Like terms</strong> have the same variable and power</div>
            <div>• Only like terms can be added or subtracted</div>
          </div>
        </div>
      )}

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

export default AlgebraExpressionVisualizer;
