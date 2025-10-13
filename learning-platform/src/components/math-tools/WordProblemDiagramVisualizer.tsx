import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface WordProblemDiagramVisualizerProps {
  context?: 'fencing' | 'projectile' | 'area' | 'profit';
  problemType?: 'fencing' | 'projectile' | 'area' | 'profit' | 'optimization' | 'generic';
  labels?: {
    [key: string]: string;
  };
  showDimensions?: boolean;
  showEquation?: boolean;
  caption?: string;
}

const WordProblemDiagramVisualizer: React.FC<WordProblemDiagramVisualizerProps> = ({
  context: contextProp,
  problemType: problemTypeProp,
  labels = {},
  showDimensions = true,
  showEquation = false,
  caption
}) => {
  const { theme } = useTheme();

  // Handle both parameter names (context and problemType)
  // Map 'optimization' and 'generic' to appropriate types
  let context: 'fencing' | 'projectile' | 'area' | 'profit';
  const inputType = problemTypeProp || contextProp || 'area';

  if (inputType === 'optimization' || inputType === 'generic') {
    context = 'area'; // Default optimization/generic to area diagram
  } else {
    context = inputType as 'fencing' | 'projectile' | 'area' | 'profit';
  }

  const renderFencingDiagram = () => {
    const width = labels.width || labels.side1 || 'x';
    const length = labels.length || labels.side3 || '40 - x';
    const side2 = labels.side2;
    const perimeter = labels.perimeter || labels.constraint || '80 m';

    return (
      <div>
        <svg width="450" height="300" className="mx-auto">
          {/* Barn or wall (dashed line at top) */}
          <line
            x1="125"
            y1="80"
            x2="325"
            y2="80"
            stroke="#8B4513"
            strokeWidth="5"
            strokeDasharray="10 5"
          />
          <text
            x="225"
            y="70"
            className="text-xs"
            fill="#8B4513"
            textAnchor="middle"
          >
            Barn
          </text>

          {/* Three-sided fence */}
          <rect
            x="125"
            y="80"
            width="200"
            height="120"
            fill="none"
            stroke={theme.colors.brand}
            strokeWidth="3"
          />

          {/* Width labels */}
          {showDimensions && (
            <>
              {/* Left side */}
              <text
                x="110"
                y="145"
                className="text-sm font-semibold"
                fill={theme.colors.brand}
                textAnchor="middle"
              >
                {side2 || width}
              </text>

              {/* Bottom */}
              <text
                x="225"
                y="215"
                className="text-sm font-semibold"
                fill={theme.colors.brand}
                textAnchor="middle"
              >
                {length}
              </text>

              {/* Right side */}
              <text
                x="340"
                y="145"
                className="text-sm font-semibold"
                fill={theme.colors.brand}
                textAnchor="middle"
              >
                {width}
              </text>

              {/* Constraint note */}
              <text
                x="225"
                y="250"
                className="text-sm"
                fill={theme.colors.textSecondary}
                textAnchor="middle"
              >
                {perimeter}
              </text>
            </>
          )}
        </svg>

        {showEquation && (
          <div className="text-center mt-3 text-base" style={{ color: theme.colors.textPrimary }}>
            <MathText>{`$\\text{Area} = ${width} \\times ${length}$`}</MathText>
          </div>
        )}
      </div>
    );
  };

  const renderProjectileDiagram = () => {
    const initialHeight = labels.initialHeight || '0';
    const maxHeight = labels.maxHeight || 'h';

    return (
      <div>
        <svg width="400" height="300" className="mx-auto">
          {/* Ground line */}
          <line
            x1="50"
            y1="250"
            x2="350"
            y2="250"
            stroke={theme.colors.textSecondary}
            strokeWidth="2"
          />

          {/* Parabolic trajectory */}
          <path
            d="M 80 240 Q 200 80 320 240"
            fill="none"
            stroke={theme.colors.brand}
            strokeWidth="3"
          />

          {/* Starting point */}
          <circle cx="80" cy="240" r="5" fill={theme.colors.brand} />

          {/* Max height marker */}
          <line
            x1="200"
            y1="80"
            x2="200"
            y2="250"
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <circle cx="200" cy="80" r="5" fill="#ef4444" />

          {showDimensions && (
            <>
              <text
                x="210"
                y="75"
                className="text-sm font-semibold"
                fill="#ef4444"
              >
                Max height = {maxHeight}
              </text>

              <text
                x="85"
                y="230"
                className="text-sm"
                fill={theme.colors.textSecondary}
              >
                h₀ = {initialHeight}
              </text>
            </>
          )}
        </svg>

        {showEquation && (
          <div className="text-center mt-3 text-base" style={{ color: theme.colors.textPrimary }}>
            <MathText>{`$h(t) = -5t^2 + v_0t + h_0$`}</MathText>
          </div>
        )}
      </div>
    );
  };

  const renderAreaDiagram = () => {
    // Support multiple label formats
    const width = labels.width || labels.side1 || 'x';
    const length = labels.length || labels.side3 || 'y';
    const side2 = labels.side2 || labels.height;
    const constraint = labels.constraint;

    return (
      <div>
        <svg width="450" height="300" className="mx-auto">
          {/* Rectangle representing fenced area */}
          <rect
            x="125"
            y="80"
            width="200"
            height="120"
            fill={theme.colors.brand}
            fillOpacity="0.2"
            stroke={theme.colors.brand}
            strokeWidth="3"
          />

          {/* Barn or wall (dashed line at top) if constraint mentions it */}
          {constraint && constraint.toLowerCase().includes('barn') && (
            <line
              x1="125"
              y1="80"
              x2="325"
              y2="80"
              stroke="#8B4513"
              strokeWidth="5"
              strokeDasharray="10 5"
            />
          )}

          {showDimensions && (
            <>
              {/* Top side label */}
              <text
                x="225"
                y="65"
                className="text-sm font-semibold"
                fill={theme.colors.brand}
                textAnchor="middle"
              >
                {length}
              </text>

              {/* Left side label */}
              <text
                x="110"
                y="145"
                className="text-sm font-semibold"
                fill={theme.colors.brand}
                textAnchor="middle"
              >
                {side2 || width}
              </text>

              {/* Right side label */}
              <text
                x="340"
                y="145"
                className="text-sm font-semibold"
                fill={theme.colors.brand}
                textAnchor="middle"
              >
                {width}
              </text>

              {/* Constraint note */}
              {constraint && (
                <text
                  x="225"
                  y="230"
                  className="text-sm"
                  fill={theme.colors.textSecondary}
                  textAnchor="middle"
                >
                  {constraint}
                </text>
              )}
            </>
          )}
        </svg>

        {showEquation && (
          <div className="text-center mt-3 text-base" style={{ color: theme.colors.textPrimary }}>
            <MathText>{`$\\text{Area} = ${width} \\times ${length}$`}</MathText>
          </div>
        )}
      </div>
    );
  };

  const renderProfitDiagram = () => {
    const items = labels.items || 'x';
    const profit = labels.profit || 'P(x)';

    return (
      <div>
        <svg width="400" height="300" className="mx-auto">
          {/* Axes */}
          <line
            x1="50"
            y1="250"
            x2="350"
            y2="250"
            stroke={theme.colors.textSecondary}
            strokeWidth="2"
          />
          <line
            x1="50"
            y1="250"
            x2="50"
            y2="50"
            stroke={theme.colors.textSecondary}
            strokeWidth="2"
          />

          {/* Parabola (profit curve) */}
          <path
            d="M 60 240 Q 200 80 340 240"
            fill="none"
            stroke={theme.colors.brand}
            strokeWidth="3"
          />

          {/* Maximum profit point */}
          <circle cx="200" cy="80" r="5" fill="#ef4444" />
          <line
            x1="200"
            y1="80"
            x2="200"
            y2="250"
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Labels */}
          <text
            x="350"
            y="265"
            className="text-sm"
            fill={theme.colors.textSecondary}
            textAnchor="end"
          >
            Items ({items})
          </text>

          <text
            x="45"
            y="45"
            className="text-sm"
            fill={theme.colors.textSecondary}
            textAnchor="end"
          >
            {profit}
          </text>

          {showDimensions && (
            <text
              x="205"
              y="75"
              className="text-sm font-semibold"
              fill="#ef4444"
            >
              Max Profit
            </text>
          )}
        </svg>

        {showEquation && (
          <div className="text-center mt-3 text-base" style={{ color: theme.colors.textPrimary }}>
            <MathText>{`$P(x) = ax^2 + bx + c$`}</MathText>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="my-4 p-4 rounded-lg border" style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.surface }}>
      <div className="text-lg font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
        {context === 'fencing' && 'Fencing Problem'}
        {context === 'projectile' && 'Projectile Motion'}
        {context === 'area' && 'Area Optimization'}
        {context === 'profit' && 'Profit Maximization'}
      </div>

      {context === 'fencing' && renderFencingDiagram()}
      {context === 'projectile' && renderProjectileDiagram()}
      {context === 'area' && renderAreaDiagram()}
      {context === 'profit' && renderProfitDiagram()}

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

export default WordProblemDiagramVisualizer;
