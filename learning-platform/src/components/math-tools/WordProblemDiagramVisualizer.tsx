import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface WordProblemDiagramVisualizerProps {
  context: 'fencing' | 'projectile' | 'area' | 'profit';
  labels?: {
    [key: string]: string;
  };
  showDimensions?: boolean;
  showEquation?: boolean;
  caption?: string;
}

const WordProblemDiagramVisualizer: React.FC<WordProblemDiagramVisualizerProps> = ({
  context,
  labels = {},
  showDimensions = true,
  showEquation = false,
  caption
}) => {
  const { theme } = useTheme();

  const renderFencingDiagram = () => {
    const width = labels.width || 'x';
    const length = labels.length || '40 - x';
    const perimeter = labels.perimeter || '80 m';

    return (
      <div>
        <svg width="400" height="300" className="mx-auto">
          {/* Rectangle */}
          <rect
            x="80"
            y="80"
            width="240"
            height="140"
            fill="none"
            stroke={theme.colors.brand}
            strokeWidth="3"
          />

          {/* Width label */}
          {showDimensions && (
            <>
              <text
                x="200"
                y="70"
                className="text-base font-semibold"
                fill={theme.colors.brand}
                textAnchor="middle"
              >
                <tspan>{width}</tspan>
              </text>

              {/* Length label */}
              <text
                x="330"
                y="150"
                className="text-base font-semibold"
                fill={theme.colors.brand}
                textAnchor="middle"
              >
                <tspan>{length}</tspan>
              </text>

              {/* Perimeter note */}
              <text
                x="200"
                y="250"
                className="text-sm"
                fill={theme.colors.textSecondary}
                textAnchor="middle"
              >
                Perimeter = {perimeter}
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
    const width = labels.width || 'x';
    const length = labels.length || 'y';

    return (
      <div>
        <svg width="400" height="300" className="mx-auto">
          {/* Rectangle */}
          <rect
            x="100"
            y="80"
            width="200"
            height="120"
            fill={theme.colors.brand}
            fillOpacity="0.2"
            stroke={theme.colors.brand}
            strokeWidth="3"
          />

          {showDimensions && (
            <>
              <text
                x="200"
                y="70"
                className="text-base font-semibold"
                fill={theme.colors.brand}
                textAnchor="middle"
              >
                {width}
              </text>

              <text
                x="310"
                y="140"
                className="text-base font-semibold"
                fill={theme.colors.brand}
                textAnchor="middle"
              >
                {length}
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
