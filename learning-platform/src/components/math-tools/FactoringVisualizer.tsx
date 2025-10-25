/// <reference types="react" />
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface FactoringVisualizerProps {
  equation?: string;
  a: number;
  b: number;
  c: number;
  method?: 'factor-pairs' | 'split-middle' | 'difference-squares';
  showSteps?: boolean;
  highlightFactors?: boolean;
  caption?: string;
}

const FactoringVisualizer: React.FC<FactoringVisualizerProps> = ({
  equation,
  a,
  b,
  c,
  method = 'factor-pairs',
  showSteps = true,
  highlightFactors = false,
  caption
}) => {
  const { theme } = useTheme();

  // Find factor pairs of ac that add to b
  const findFactorPairs = (product: number, sum: number): [number, number] | null => {
    for (let i = 1; i <= Math.abs(product); i++) {
      if (product % i === 0) {
        const j = product / i;
        if (i + j === sum) return [i, j];
        if (-i - j === sum) return [-i, -j];
        if (i - j === sum) return [i, -j];
        if (-i + j === sum) return [-i, j];
      }
    }
    return null;
  };

  // Calculate roots using quadratic formula
  const discriminant = b * b - 4 * a * c;
  const hasRealRoots = discriminant >= 0;

  let root1: number | null = null;
  let root2: number | null = null;

  if (hasRealRoots) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  }

  // Generate steps based on method
  const generateSteps = (): React.ReactElement[] => {
    const steps: React.ReactElement[] = [];

    // Original equation
    const originalEq = equation || `${a === 1 ? '' : a}x^2 ${b >= 0 ? '+' : '-'} ${Math.abs(b)}x ${c >= 0 ? '+' : '-'} ${Math.abs(c)} = 0`;
    steps.push(
      <div key="step-0" className="mb-3">
        <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
          Original Equation:
        </div>
        <div className="text-base font-semibold" style={{ color: theme.colors.textPrimary }}>
          <MathText>{`$${originalEq}$`}</MathText>
        </div>
      </div>
    );

    if (method === 'factor-pairs' && a === 1) {
      // Simple factoring for a = 1
      const pairs = findFactorPairs(c, b);
      if (pairs) {
        const [p, q] = pairs;

        steps.push(
          <div key="step-1" className="mb-3">
            <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
              Find factors of {c} that add to {b}:
            </div>
            <div className="text-base" style={{ color: highlightFactors ? theme.colors.brand : theme.colors.textPrimary }}>
              <MathText>{`$${p} \\times ${q} = ${c}$`}</MathText>
              <br />
              <MathText>{`$${p} + ${q} = ${b}$`}</MathText>
            </div>
          </div>
        );

        steps.push(
          <div key="step-2" className="mb-3">
            <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
              Factored Form:
            </div>
            <div className="text-base font-semibold" style={{ color: theme.colors.brand }}>
              <MathText>{`$(x ${p >= 0 ? '+' : '-'} ${Math.abs(p)})(x ${q >= 0 ? '+' : '-'} ${Math.abs(q)}) = 0$`}</MathText>
            </div>
          </div>
        );
      } else {
        steps.push(
          <div key="step-error" className="mb-3">
            <div className="text-sm" style={{ color: theme.colors.textMuted }}>
              This quadratic cannot be factored using simple factor pairs.
            </div>
          </div>
        );
      }
    } else if (method === 'split-middle') {
      // AC method (split the middle term)
      const ac = a * c;
      const pairs = findFactorPairs(ac, b);

      if (pairs) {
        const [p, q] = pairs;

        steps.push(
          <div key="step-1" className="mb-3">
            <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
              Step 1: Find AC = {a} × {c} = {ac}
            </div>
            <div className="text-sm" style={{ color: theme.colors.textMuted }}>
              Find factors of {ac} that add to {b}
            </div>
            <div className="text-base mt-1" style={{ color: highlightFactors ? theme.colors.brand : theme.colors.textPrimary }}>
              <MathText>{`$${p} \\times ${q} = ${ac}, \\quad ${p} + ${q} = ${b}$`}</MathText>
            </div>
          </div>
        );

        steps.push(
          <div key="step-2" className="mb-3">
            <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
              Step 2: Split the middle term:
            </div>
            <div className="text-base" style={{ color: theme.colors.textPrimary }}>
              <MathText>{`$${a}x^2 + ${p}x + ${q}x + ${c} = 0$`}</MathText>
            </div>
          </div>
        );

        steps.push(
          <div key="step-3" className="mb-3">
            <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
              Step 3: Factor by grouping:
            </div>
            <div className="text-base font-semibold" style={{ color: theme.colors.brand }}>
              <MathText>{`$Factored form displayed above$`}</MathText>
            </div>
          </div>
        );
      }
    } else if (method === 'difference-squares') {
      // a² - b² = (a + b)(a - b)
      if (b === 0 && c < 0) {
        const sqrtA = Math.sqrt(Math.abs(a));
        const sqrtC = Math.sqrt(Math.abs(c));

        steps.push(
          <div key="step-1" className="mb-3">
            <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
              Recognize difference of squares pattern:
            </div>
            <div className="text-base" style={{ color: theme.colors.textPrimary }}>
              <MathText>{`$a^2 - b^2 = (a+b)(a-b)$`}</MathText>
            </div>
          </div>
        );

        steps.push(
          <div key="step-2" className="mb-3">
            <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
              Factored Form:
            </div>
            <div className="text-base font-semibold" style={{ color: theme.colors.brand }}>
              <MathText>{`$(${sqrtA}x + ${sqrtC})(${sqrtA}x - ${sqrtC}) = 0$`}</MathText>
            </div>
          </div>
        );
      }
    }

    // Solutions
    if (hasRealRoots && root1 !== null && root2 !== null) {
      steps.push(
        <div key="step-solutions" className="mb-3 pt-3 border-t" style={{ borderColor: theme.colors.border }}>
          <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
            Solutions:
          </div>
          <div className="text-base font-semibold" style={{ color: theme.colors.brand }}>
            <MathText>{`$x = ${root1.toFixed(2)}$ or $x = ${root2.toFixed(2)}$`}</MathText>
          </div>
        </div>
      );
    }

    return steps;
  };

  // Generate factored form string
  const getFactoredForm = (): string => {
    if (!hasRealRoots) {
      return 'Cannot be factored (no real roots)';
    }

    if (method === 'factor-pairs' && a === 1) {
      const pairs = findFactorPairs(c, b);
      if (pairs) {
        const [p, q] = pairs;
        return `$(x ${p >= 0 ? '+' : '-'} ${Math.abs(p)})(x ${q >= 0 ? '+' : '-'} ${Math.abs(q)}) = 0$`;
      }
    } else if (method === 'difference-squares' && b === 0 && c < 0) {
      const sqrtA = Math.sqrt(Math.abs(a));
      const sqrtC = Math.sqrt(Math.abs(c));
      return `$(${sqrtA}x + ${sqrtC})(${sqrtA}x - ${sqrtC}) = 0$`;
    }

    // General case: use roots
    if (root1 !== null && root2 !== null) {
      const r1 = -root1;
      const r2 = -root2;
      return `$${a !== 1 ? a : ''}(x ${r1 >= 0 ? '+' : '-'} ${Math.abs(r1).toFixed(1)})(x ${r2 >= 0 ? '+' : '-'} ${Math.abs(r2).toFixed(1)}) = 0$`;
    }

    return 'Cannot factor';
  };

  return (
    <div className="my-4 p-4 rounded-lg border" style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.surface }}>
      <div className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
        Factoring Process
      </div>

      {/* Original Equation */}
      <div className="mb-3">
        <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
          Original Equation:
        </div>
        <div className="text-base font-semibold" style={{ color: theme.colors.textPrimary }}>
          <MathText>{equation || `$${a === 1 ? '' : a}x^2 ${b >= 0 ? '+' : '-'} ${Math.abs(b)}x ${c >= 0 ? '+' : '-'} ${Math.abs(c)} = 0$`}</MathText>
        </div>
      </div>

      {/* Factored Form - Always shown */}
      <div className="mb-3 p-3 rounded" style={{ backgroundColor: theme.colors.interactive }}>
        <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
          Factored Form:
        </div>
        <div className="text-base font-semibold" style={{ color: theme.colors.brand }}>
          <MathText>{getFactoredForm()}</MathText>
        </div>
      </div>

      {/* Solutions - Always shown if they exist */}
      {hasRealRoots && root1 !== null && root2 !== null && (
        <div className="mb-3">
          <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
            Solutions:
          </div>
          <div className="text-base font-semibold" style={{ color: theme.colors.brand }}>
            <MathText>{`$x = ${root1.toFixed(2)}$ or $x = ${root2.toFixed(2)}$`}</MathText>
          </div>
        </div>
      )}

      {/* Detailed Steps - Only shown if showSteps is true */}
      {showSteps && (
        <div className="mt-4 pt-4 border-t" style={{ borderColor: theme.colors.border }}>
          <div className="text-sm font-bold mb-3" style={{ color: theme.colors.textMuted }}>
            Step-by-step process:
          </div>
          <div>{generateSteps()}</div>
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

export default FactoringVisualizer;
