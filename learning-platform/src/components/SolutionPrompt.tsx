import { useTheme } from '../hooks/useTheme';

interface SolutionPromptProps {
  onRequestSolution: () => void;
  isLoading?: boolean;
}

/**
 * SolutionPrompt Component
 *
 * Visual cue that appears after 3+ hints have been given, allowing the student
 * to explicitly request a step-by-step solution.
 *
 * Design: A prominent, themed banner with a call-to-action button positioned
 * between the chat messages and the input area.
 */
export default function SolutionPrompt({ onRequestSolution, isLoading = false }: SolutionPromptProps) {
  const { theme } = useTheme();

  return (
    <div className="px-4 py-3 my-4">
      <div
        className="rounded-xl border-2 border-dashed p-4 flex flex-col sm:flex-row items-center justify-between gap-3 transition-all duration-200 hover:shadow-md"
        style={{
          backgroundColor: `${theme.colors.brand}08`,
          borderColor: `${theme.colors.brand}40`,
        }}
      >
        {/* Info text */}
        <div className="flex items-start gap-3 flex-1">
          <div
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm"
            style={{
              backgroundColor: `${theme.colors.brand}20`,
              color: theme.colors.brand,
            }}
          >
            💡
          </div>
          <div className="flex-1">
            <p
              className="text-sm font-medium mb-1"
              style={{ color: theme.colors.textPrimary }}
            >
              Stuck on this problem?
            </p>
            <p
              className="text-xs"
              style={{ color: theme.colors.textSecondary }}
            >
              You can now request a complete step-by-step solution.
            </p>
          </div>
        </div>

        {/* Action button */}
        <button
          onClick={onRequestSolution}
          disabled={isLoading}
          className="flex-shrink-0 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
          style={{
            backgroundColor: theme.colors.brand,
            color: '#FFFFFF',
          }}
        >
          {isLoading ? 'Generating...' : 'Show Solution'}
        </button>
      </div>
    </div>
  );
}
