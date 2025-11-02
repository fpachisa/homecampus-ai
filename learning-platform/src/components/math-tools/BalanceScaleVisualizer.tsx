import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface BalanceScaleVisualizerProps {
  leftSide: string;
  rightSide: string;
  operation?: string;
  operationValue?: string;
  step?: number;
  showInverse?: boolean;
  caption?: string;
}

const BalanceScaleVisualizer: React.FC<BalanceScaleVisualizerProps> = ({
  leftSide,
  rightSide,
  operation,
  operationValue,
  step = 0,
  showInverse = true,
  caption
}) => {
  const { theme } = useTheme();

  // Calculate balance tilt (simple visual representation)
  const isBalanced = true; // Equations are always balanced
  const tiltAngle = 0; // No tilt when balanced

  // Get operation description
  const getOperationDescription = () => {
    if (!operation || !operationValue) return null;

    const operations: Record<string, string> = {
      add: `Add ${operationValue} to both sides`,
      subtract: `Subtract ${operationValue} from both sides`,
      multiply: `Multiply both sides by ${operationValue}`,
      divide: `Divide both sides by ${operationValue}`
    };

    return operations[operation] || `Apply ${operation} to both sides`;
  };

  // Apply operation to expression (simplified display)
  const applyOperation = (expr: string) => {
    if (!operation || !operationValue) return expr;

    switch (operation) {
      case 'add':
        return `${expr} + ${operationValue}`;
      case 'subtract':
        return `${expr} - ${operationValue}`;
      case 'multiply':
        return `${operationValue}(${expr})`;
      case 'divide':
        return `\\frac{${expr}}{${operationValue}}`;
      default:
        return expr;
    }
  };

  return (
    <div
      className="my-4 p-4 rounded-lg border"
      style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.surface }}
    >
      <div className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
        Balance Scale - Equation Solving
      </div>

      {/* Current Equation */}
      <div className="mb-6">
        <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.textMuted }}>
          {step === 0 ? 'Original Equation:' : `After Step ${step}:`}
        </div>
        <div className="text-2xl p-4 rounded bg-gray-50 dark:bg-gray-800 text-center" style={{ color: theme.colors.textPrimary }}>
          <MathText>{`$${leftSide} = ${rightSide}$`}</MathText>
        </div>
      </div>

      {/* Balance Scale Visualization */}
      <div className="mb-6">
        <div className="relative p-6">
          {/* Fulcrum (center pivot) */}
          <div className="flex justify-center mb-2">
            <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px]"
              style={{ borderBottomColor: theme.colors.textMuted }}>
            </div>
          </div>

          {/* Balance Beam */}
          <div
            className="relative h-3 rounded-full mx-auto"
            style={{
              width: '80%',
              backgroundColor: theme.colors.textMuted,
              transform: `rotate(${tiltAngle}deg)`,
              transition: 'transform 0.3s ease'
            }}
          >
            {/* Center marker */}
            <div
              className="absolute w-1 h-6 -top-1.5 left-1/2 -translate-x-1/2"
              style={{ backgroundColor: theme.colors.brand }}
            />
          </div>

          {/* Scale Pans */}
          <div className="flex justify-between items-end mt-2 px-[10%]">
            {/* Left Pan */}
            <div className="flex flex-col items-center flex-1">
              <div
                className="w-full max-w-[200px] p-4 rounded-lg border-2 shadow-lg"
                style={{
                  borderColor: theme.colors.brand,
                  backgroundColor: `${theme.colors.brand}10`
                }}
              >
                <div className="text-center text-lg font-bold" style={{ color: theme.colors.brand }}>
                  <MathText>{`$${leftSide}$`}</MathText>
                </div>
              </div>
              <div
                className="w-16 h-1 mt-1"
                style={{ backgroundColor: theme.colors.textMuted }}
              />
              <div className="text-xs mt-1 font-semibold" style={{ color: theme.colors.textMuted }}>
                Left Side
              </div>
            </div>

            {/* Right Pan */}
            <div className="flex flex-col items-center flex-1">
              <div
                className="w-full max-w-[200px] p-4 rounded-lg border-2 shadow-lg"
                style={{
                  borderColor: theme.colors.success || '#10b981',
                  backgroundColor: `${theme.colors.success || '#10b981'}10`
                }}
              >
                <div className="text-center text-lg font-bold" style={{ color: theme.colors.success || '#10b981' }}>
                  <MathText>{`$${rightSide}$`}</MathText>
                </div>
              </div>
              <div
                className="w-16 h-1 mt-1"
                style={{ backgroundColor: theme.colors.textMuted }}
              />
              <div className="text-xs mt-1 font-semibold" style={{ color: theme.colors.textMuted }}>
                Right Side
              </div>
            </div>
          </div>

          {/* Balance Indicator */}
          <div className="mt-4 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                backgroundColor: isBalanced ? '#10b98120' : '#ef444420',
                color: isBalanced ? '#10b981' : '#ef4444'
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                {isBalanced ? (
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                )}
              </svg>
              <span className="font-semibold text-sm">
                {isBalanced ? 'Balanced ✓' : 'Not Balanced'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Operation to Apply */}
      {operation && operationValue && (
        <div className="mb-4">
          <div
            className="p-4 rounded-lg border-l-4"
            style={{
              borderLeftColor: theme.colors.brand,
              backgroundColor: `${theme.colors.brand}10`
            }}
          >
            <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.brand }}>
              Operation to Apply:
            </div>
            <div className="text-base mb-3" style={{ color: theme.colors.textPrimary }}>
              {getOperationDescription()}
            </div>

            {/* Show what happens to each side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div
                className="p-3 rounded bg-white dark:bg-gray-800 border"
                style={{ borderColor: theme.colors.brand }}
              >
                <div className="text-xs font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
                  Left Side:
                </div>
                <div className="text-base" style={{ color: theme.colors.textPrimary }}>
                  <MathText>{`$${applyOperation(leftSide)}$`}</MathText>
                </div>
              </div>
              <div
                className="p-3 rounded bg-white dark:bg-gray-800 border"
                style={{ borderColor: theme.colors.success || '#10b981' }}
              >
                <div className="text-xs font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
                  Right Side:
                </div>
                <div className="text-base" style={{ color: theme.colors.textPrimary }}>
                  <MathText>{`$${applyOperation(rightSide)}$`}</MathText>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inverse Operations Guide */}
      {showInverse && (
        <div
          className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500"
        >
          <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.brand }}>
            Inverse Operations:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm" style={{ color: theme.colors.textSecondary }}>
            <div>
              <strong>To undo addition:</strong> Subtract
              <br />
              <MathText>{'$x + 5 \\rightarrow$ subtract 5'}</MathText>
            </div>
            <div>
              <strong>To undo subtraction:</strong> Add
              <br />
              <MathText>{'$x - 3 \\rightarrow$ add 3'}</MathText>
            </div>
            <div>
              <strong>To undo multiplication:</strong> Divide
              <br />
              <MathText>{'$3x \\rightarrow$ divide by 3'}</MathText>
            </div>
            <div>
              <strong>To undo division:</strong> Multiply
              <br />
              <MathText>{'$\\frac{x}{4} \\rightarrow$ multiply by 4'}</MathText>
            </div>
          </div>
          <div className="mt-3 text-sm font-semibold" style={{ color: theme.colors.brand }}>
            Key Principle: Whatever you do to one side, do to the other!
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

export default BalanceScaleVisualizer;
