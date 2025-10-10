import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface CompletingSquareVisualizerProps {
  a: number;
  b: number;
  c: number;
  showGeometric?: boolean;
  showAlgebraic?: boolean;
  highlightPerfectSquare?: boolean;
  caption?: string;
}

const CompletingSquareVisualizer: React.FC<CompletingSquareVisualizerProps> = ({
  a,
  b,
  c,
  showGeometric = true,
  showAlgebraic = true,
  highlightPerfectSquare = true,
  caption
}) => {
  const { theme } = useTheme();

  // For a = 1 case, make it simpler
  const isSimple = a === 1;

  //  For ax² + bx + c, complete the square to get a(x + p)² + q
  const p = isSimple ? b / 2 : b / (2 * a);
  const q = isSimple ? c - (b * b) / 4 : c - (b * b) / (4 * a);

  // Generate algebraic steps
  const generateSteps = (): JSX.Element[] => {
    const steps: JSX.Element[] = [];

    // Step 0: Original
    steps.push(
      <div key="step-0" className="mb-3">
        <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
          Original:
        </div>
        <div className="text-base" style={{ color: theme.colors.textPrimary }}>
          <MathText>{`$${isSimple ? '' : a}x^2 ${b >= 0 ? '+' : ''} ${b}x ${c >= 0 ? '+' : ''} ${c}$`}</MathText>
        </div>
      </div>
    );

    // Step 1: Factor out a if needed
    if (!isSimple) {
      steps.push(
        <div key="step-1" className="mb-3">
          <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
            Factor out {a}:
          </div>
          <div className="text-base" style={{ color: theme.colors.textPrimary }}>
            <MathText>{`$${a}(x^2 ${b / a >= 0 ? '+' : ''} ${b / a}x) ${c >= 0 ? '+' : ''} ${c}$`}</MathText>
          </div>
        </div>
      );
    }

    // Step 2: Find (b/2)²
    const halfB = isSimple ? b / 2 : b / (2 * a);
    const halfBSquared = halfB * halfB;

    steps.push(
      <div key="step-2" className="mb-3">
        <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
          Take half of the x-coefficient and square it:
        </div>
        <div className="text-base" style={{ color: highlightPerfectSquare ? theme.colors.brand : theme.colors.textPrimary }}>
          <MathText>{`$(\\frac{${isSimple ? b : b / a}}{2})^2 = ${halfBSquared.toFixed(2)}$`}</MathText>
        </div>
      </div>
    );

    // Step 3: Add and subtract
    steps.push(
      <div key="step-3" className="mb-3">
        <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
          Add and subtract inside:
        </div>
        <div className="text-base" style={{ color: theme.colors.textPrimary }}>
          <MathText>
            {isSimple
              ? `$x^2 ${b >= 0 ? '+' : ''} ${b}x + ${halfBSquared.toFixed(2)} - ${halfBSquared.toFixed(2)} ${c >= 0 ? '+' : ''} ${c}$`
              : `$${a}(x^2 ${b / a >= 0 ? '+' : ''} ${(b / a).toFixed(2)}x + ${halfBSquared.toFixed(2)} - ${halfBSquared.toFixed(2)}) ${c >= 0 ? '+' : ''} ${c}$`
            }
          </MathText>
        </div>
      </div>
    );

    // Step 4: Perfect square form
    steps.push(
      <div key="step-4" className="mb-3">
        <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
          Write as perfect square:
        </div>
        <div className="text-base font-semibold" style={{ color: highlightPerfectSquare ? theme.colors.brand : theme.colors.textPrimary }}>
          <MathText>
            {isSimple
              ? `$(x ${p >= 0 ? '+' : ''} ${p.toFixed(2)})^2 ${q >= 0 ? '+' : ''} ${q.toFixed(2)}$`
              : `$${a}(x ${p >= 0 ? '+' : ''} ${p.toFixed(2)})^2 ${q >= 0 ? '+' : ''} ${q.toFixed(2)}$`
            }
          </MathText>
        </div>
      </div>
    );

    // Vertex
    const h = -p;
    const k = q;
    steps.push(
      <div key="step-5" className="mb-3 pt-3 border-t" style={{ borderColor: theme.colors.border }}>
        <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
          Vertex Form → Vertex at:
        </div>
        <div className="text-base font-semibold" style={{ color: theme.colors.brand }}>
          <MathText>{`$(${h.toFixed(2)}, ${k.toFixed(2)})$`}</MathText>
        </div>
      </div>
    );

    return steps;
  };

  return (
    <div className="my-4 p-4 rounded-lg border" style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.surface }}>
      <div className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
        Completing the Square
      </div>

      {showAlgebraic && <div>{generateSteps()}</div>}

      {showGeometric && (
        <div className="mt-4 pt-4 border-t" style={{ borderColor: theme.colors.border }}>
          <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.textMuted }}>
            Geometric Interpretation:
          </div>
          <div className="text-sm" style={{ color: theme.colors.textSecondary }}>
            We're "completing" a square by adding the missing piece to form a perfect square trinomial.
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

export default CompletingSquareVisualizer;
