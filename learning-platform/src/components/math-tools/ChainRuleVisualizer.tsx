import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ChainRuleVisualizerProps {
  outerFunction: string; // f(u) - outer function in terms of u
  innerFunction: string; // g(x) - inner function
  compositeExpression?: string; // f(g(x)) - computed automatically if not provided
  evaluationPoint?: number; // x-value to evaluate and show
  showSteps?: boolean; // Show step-by-step breakdown
  caption?: string;
}

const ChainRuleVisualizer: React.FC<ChainRuleVisualizerProps> = ({
  outerFunction,
  innerFunction,
  compositeExpression,
  evaluationPoint = 1,
  showSteps = true,
  caption
}) => {
  const { theme } = useTheme();

  // Safe expression evaluator
  const evaluateExpression = (expression: string, varName: string, value: number): number | null => {
    try {
      let expr = expression
        .replace(/\^/g, '**')
        .replace(/(\d)([a-z])/gi, '$1*$2')
        .replace(/([a-z])(\d)/gi, '$1*$2')
        // Handle unary minus before exponentiation (e.g., -x^2 -> -(x**2))
        .replace(/-([a-z]+)\*\*(\w+)/gi, '-($1**$2)');

      const Math_sin = Math.sin;
      const Math_cos = Math.cos;
      const Math_tan = Math.tan;
      const Math_sqrt = Math.sqrt;
      const Math_abs = Math.abs;
      const Math_log = Math.log;
      const Math_exp = Math.exp;

      expr = expr.replace(/sin\(/g, 'Math_sin(');
      expr = expr.replace(/cos\(/g, 'Math_cos(');
      expr = expr.replace(/tan\(/g, 'Math_tan(');
      expr = expr.replace(/sqrt\(/g, 'Math_sqrt(');
      expr = expr.replace(/abs\(/g, 'Math_abs(');
      expr = expr.replace(/ln\(/g, 'Math_log(');
      expr = expr.replace(/log\(/g, 'Math_log(');
      expr = expr.replace(/exp\(/g, 'Math_exp(');

      const result = Function(varName, 'Math_sin', 'Math_cos', 'Math_tan', 'Math_sqrt', 'Math_abs', 'Math_log', 'Math_exp', `return ${expr}`)(
        value, Math_sin, Math_cos, Math_tan, Math_sqrt, Math_abs, Math_log, Math_exp
      );

      return isFinite(result) ? result : null;
    } catch (error) {
      return null;
    }
  };

  // Calculate step-by-step evaluation
  const gX = evaluateExpression(innerFunction, 'x', evaluationPoint);
  const fGX = gX !== null ? evaluateExpression(outerFunction, 'u', gX) : null;

  // SVG dimensions for flow diagram
  const width = 500;
  const height = 300;

  // Box dimensions
  const boxWidth = 120;
  const boxHeight = 60;
  const gap = 50;

  // Calculate positions for 3 boxes (x → g(x) → f(g(x)))
  const totalContentWidth = 3 * boxWidth + 2 * gap;
  const startX = (width - totalContentWidth) / 2;
  const centerY = height / 2;

  // Box positions
  const box1 = { x: startX, y: centerY - boxHeight / 2, width: boxWidth, height: boxHeight };
  const box2 = { x: startX + boxWidth + gap, y: centerY - boxHeight / 2, width: boxWidth, height: boxHeight };
  const box3 = { x: startX + 2 * (boxWidth + gap), y: centerY - boxHeight / 2, width: boxWidth, height: boxHeight };

  return (
    <div className="flex flex-col items-center">
      <svg width={width} height={height} className="bg-white dark:bg-gray-800 rounded">
        {/* Arrow 1: x to g(x) */}
        <defs>
          <marker
            id="arrowhead-chain"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="5"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={theme.colors.textPrimary} />
          </marker>
        </defs>

        <line
          x1={box1.x + box1.width}
          y1={centerY}
          x2={box2.x}
          y2={centerY}
          stroke={theme.colors.textPrimary}
          strokeWidth="2"
          markerEnd="url(#arrowhead-chain)"
        />

        {/* Arrow 2: g(x) to f(g(x)) */}
        <line
          x1={box2.x + box2.width}
          y1={centerY}
          x2={box3.x}
          y2={centerY}
          stroke={theme.colors.textPrimary}
          strokeWidth="2"
          markerEnd="url(#arrowhead-chain)"
        />

        {/* Box 1: Input x */}
        <rect
          x={box1.x}
          y={box1.y}
          width={box1.width}
          height={box1.height}
          fill="#dbeafe"
          stroke="#3b82f6"
          strokeWidth="2"
          rx="5"
        />
        <text
          x={box1.x + box1.width / 2}
          y={box1.y + box1.height / 2 - 10}
          fill={theme.colors.textPrimary}
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle"
        >
          Input
        </text>
        <text
          x={box1.x + box1.width / 2}
          y={box1.y + box1.height / 2 + 10}
          fill={theme.colors.textPrimary}
          fontSize="14"
          textAnchor="middle"
        >
          x = {evaluationPoint}
        </text>

        {/* Box 2: Inner function g(x) */}
        <rect
          x={box2.x}
          y={box2.y}
          width={box2.width}
          height={box2.height}
          fill="#dcfce7"
          stroke="#10b981"
          strokeWidth="2"
          rx="5"
        />
        <text
          x={box2.x + box2.width / 2}
          y={box2.y + box2.height / 2 - 15}
          fill={theme.colors.textPrimary}
          fontSize="14"
          fontWeight="bold"
          textAnchor="middle"
        >
          g(x)
        </text>
        <text
          x={box2.x + box2.width / 2}
          y={box2.y + box2.height / 2 + 5}
          fill={theme.colors.textPrimary}
          fontSize="12"
          textAnchor="middle"
        >
          {innerFunction.length > 15 ? innerFunction.substring(0, 12) + '...' : innerFunction}
        </text>
        {gX !== null && (
          <text
            x={box2.x + box2.width / 2}
            y={box2.y + box2.height / 2 + 20}
            fill="#10b981"
            fontSize="13"
            fontWeight="bold"
            textAnchor="middle"
          >
            = {gX.toFixed(2)}
          </text>
        )}

        {/* Box 3: Outer function f(u) */}
        <rect
          x={box3.x}
          y={box3.y}
          width={box3.width}
          height={box3.height}
          fill="#fef3c7"
          stroke="#f59e0b"
          strokeWidth="2"
          rx="5"
        />
        <text
          x={box3.x + box3.width / 2}
          y={box3.y + box3.height / 2 - 15}
          fill={theme.colors.textPrimary}
          fontSize="14"
          fontWeight="bold"
          textAnchor="middle"
        >
          f(g(x))
        </text>
        <text
          x={box3.x + box3.width / 2}
          y={box3.y + box3.height / 2 + 5}
          fill={theme.colors.textPrimary}
          fontSize="12"
          textAnchor="middle"
        >
          {compositeExpression ?
            (compositeExpression.length > 15 ? compositeExpression.substring(0, 12) + '...' : compositeExpression)
            : 'f(g(x))'}
        </text>
        {fGX !== null && (
          <text
            x={box3.x + box3.width / 2}
            y={box3.y + box3.height / 2 + 20}
            fill="#f59e0b"
            fontSize="13"
            fontWeight="bold"
            textAnchor="middle"
          >
            = {fGX.toFixed(2)}
          </text>
        )}

        {/* Arrow labels */}
        <text
          x={(box1.x + box1.width + box2.x) / 2}
          y={centerY - 15}
          fill={theme.colors.textMuted}
          fontSize="11"
          textAnchor="middle"
        >
          inner
        </text>

        <text
          x={(box2.x + box2.width + box3.x) / 2}
          y={centerY - 15}
          fill={theme.colors.textMuted}
          fontSize="11"
          textAnchor="middle"
        >
          outer
        </text>

        {/* Title */}
        <text
          x={width / 2}
          y={30}
          fill={theme.colors.textPrimary}
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle"
        >
          Function Composition: f ∘ g
        </text>
      </svg>

      {caption && (
        <p className="mt-2 text-sm text-center" style={{ color: theme.colors.textSecondary }}>
          {caption}
        </p>
      )}

      {showSteps && (
        <div className="mt-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded max-w-md">
          <p className="text-sm font-semibold" style={{ color: theme.colors.textPrimary }}>
            Chain Rule:
          </p>
          <p className="text-sm mt-1" style={{ color: theme.colors.textSecondary }}>
            d/dx[f(g(x))] = f'(g(x)) · g'(x)
          </p>
          <p className="text-xs mt-2" style={{ color: theme.colors.textMuted }}>
            Derivative of outer (at inner) × derivative of inner
          </p>
        </div>
      )}
    </div>
  );
};

export default ChainRuleVisualizer;
