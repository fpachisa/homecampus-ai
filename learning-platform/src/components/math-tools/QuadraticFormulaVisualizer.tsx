import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface QuadraticFormulaVisualizerProps {
  a: number;
  b: number;
  c: number;
  showSubstitution?: boolean;
  showDiscriminant?: boolean;
  showSimplification?: boolean;
  caption?: string;
}

const QuadraticFormulaVisualizer: React.FC<QuadraticFormulaVisualizerProps> = ({
  a,
  b,
  c,
  showSubstitution = true,
  showDiscriminant = true,
  showSimplification = true,
  caption
}) => {
  const { theme } = useTheme();

  // Calculate discriminant
  const discriminant = b * b - 4 * a * c;
  const hasRealRoots = discriminant >= 0;

  // Calculate roots
  let x1: number | null = null;
  let x2: number | null = null;

  if (hasRealRoots) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  }

  // Get discriminant nature
  const getDiscriminantNature = (): string => {
    if (discriminant > 0) return 'Two distinct real roots';
    if (discriminant === 0) return 'One repeated real root';
    return 'No real roots (complex roots)';
  };

  return (
    <div className="my-4 p-4 rounded-lg border" style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.surface }}>
      <div className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
        Quadratic Formula
      </div>

      {/* Formula */}
      <div className="mb-4 p-3 rounded bg-opacity-10" style={{ backgroundColor: theme.colors.brand }}>
        <div className="text-center text-lg font-semibold" style={{ color: theme.colors.brand }}>
          <MathText>{`$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$`}</MathText>
        </div>
      </div>

      {/* Equation */}
      <div className="mb-3">
        <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
          Given Equation:
        </div>
        <div className="text-base" style={{ color: theme.colors.textPrimary }}>
          <MathText>{`$${a}x^2 ${b >= 0 ? '+' : ''} ${b}x ${c >= 0 ? '+' : ''} ${c} = 0$`}</MathText>
        </div>
        <div className="text-sm mt-1" style={{ color: theme.colors.textSecondary }}>
          <MathText>{`$a = ${a}, \\quad b = ${b}, \\quad c = ${c}$`}</MathText>
        </div>
      </div>

      {/* Substitution */}
      {showSubstitution && (
        <div className="mb-3">
          <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
            Substitute values:
          </div>
          <div className="text-base" style={{ color: theme.colors.textPrimary }}>
            <MathText>{`$x = \\frac{-(${b}) \\pm \\sqrt{(${b})^2 - 4(${a})(${c})}}{2(${a})}$`}</MathText>
          </div>
        </div>
      )}

      {/* Discriminant */}
      {showDiscriminant && (
        <div className="mb-3 p-3 rounded" style={{ backgroundColor: theme.colors.interactive }}>
          <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
            <MathText>Discriminant: $b^2 - 4ac$</MathText>
          </div>
          <div className="text-base font-semibold" style={{ color: discriminant >= 0 ? '#10b981' : '#ef4444' }}>
            <MathText>{`$${b}^2 - 4(${a})(${c}) = ${discriminant}$`}</MathText>
          </div>
          <div className="text-sm mt-1" style={{ color: theme.colors.textSecondary }}>
            {getDiscriminantNature()}
          </div>
        </div>
      )}

      {/* Simplification */}
      {showSimplification && hasRealRoots && (
        <div className="mb-3">
          <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
            Simplify:
          </div>
          <div className="text-base" style={{ color: theme.colors.textPrimary }}>
            <MathText>{`$x = \\frac{${-b} \\pm \\sqrt{${discriminant}}}{${2 * a}}$`}</MathText>
          </div>
          {discriminant > 0 && (
            <div className="text-base mt-2" style={{ color: theme.colors.textPrimary }}>
              <MathText>{`$x = \\frac{${-b} \\pm ${Math.sqrt(discriminant).toFixed(2)}}{${2 * a}}$`}</MathText>
            </div>
          )}
        </div>
      )}

      {/* Solutions */}
      {hasRealRoots && x1 !== null && x2 !== null && (
        <div className="mb-3 pt-3 border-t" style={{ borderColor: theme.colors.border }}>
          <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.textMuted }}>
            Solutions:
          </div>
          <div className="text-base font-semibold" style={{ color: theme.colors.brand }}>
            {discriminant === 0 ? (
              <MathText>{`$x = ${x1.toFixed(2)}$ (repeated root)`}</MathText>
            ) : (
              <>
                <MathText>{`$x_1 = ${x1.toFixed(2)}$`}</MathText>
                <br />
                <MathText>{`$x_2 = ${x2.toFixed(2)}$`}</MathText>
              </>
            )}
          </div>
        </div>
      )}

      {!hasRealRoots && (
        <div className="mb-3 pt-3 border-t" style={{ borderColor: theme.colors.border }}>
          <div className="text-sm" style={{ color: '#ef4444' }}>
            No real solutions exist (discriminant is negative)
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

export default QuadraticFormulaVisualizer;
