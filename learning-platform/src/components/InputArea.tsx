import { useState, useRef, useImperativeHandle, forwardRef, useEffect, useCallback, type KeyboardEvent } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useKeyboardHeight } from '../hooks/useKeyboardHeight';
import MathInputToolbar from './MathInputToolbar';

// Maximum input length to prevent abuse
const MAX_INPUT_LENGTH = 1000;

interface Props {
  onSubmit: (input: string) => void;
  disabled: boolean;
  topicId?: string;
}

export interface InputAreaHandle {
  focus: () => void;
}

const InputArea = forwardRef<InputAreaHandle, Props>(({ onSubmit, disabled, topicId }, ref) => {
  const { theme } = useTheme();
  const { keyboardHeight } = useKeyboardHeight(); // Mobile keyboard detection
  const [input, setInput] = useState('');
  const [showMathToolbar, setShowMathToolbar] = useState(false);
  const [showLengthWarning, setShowLengthWarning] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Check if input is too long
  const isOverLimit = input.length > MAX_INPUT_LENGTH;
  const isNearLimit = input.length > MAX_INPUT_LENGTH * 0.8; // Show warning at 80%

  // Expose focus method to parent
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    }
  }));

  // Auto-resize textarea based on content
  const adjustHeight = useCallback(() => {
    const textarea = inputRef.current;
    if (!textarea) return;

    // Reset height to auto to get accurate scrollHeight
    textarea.style.height = 'auto';
    // Set to scrollHeight, capped at maxHeight (200px)
    const maxHeight = 200;
    const newHeight = Math.min(textarea.scrollHeight, maxHeight);
    textarea.style.height = `${newHeight}px`;
    // Only show overflow if content exceeds max height
    textarea.style.overflow = textarea.scrollHeight > maxHeight ? 'auto' : 'hidden';
  }, []);

  // Adjust height whenever input changes
  useEffect(() => {
    adjustHeight();
  }, [input, adjustHeight]);

  const handleSubmit = () => {
    // Prevent submission if over limit
    if (isOverLimit) {
      setShowLengthWarning(true);
      setTimeout(() => setShowLengthWarning(false), 3000);
      return;
    }

    if (input.trim() && !disabled) {
      onSubmit(input);
      setInput('');
      // Reset textarea height after clearing
      if (inputRef.current) {
        inputRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Submit on Ctrl+Enter or Cmd+Enter (same as Practice module)
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && !disabled) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleMathInsert = (text: string) => {
    const currentInput = inputRef.current;
    if (!currentInput) return;

    const start = currentInput.selectionStart || 0;
    const end = currentInput.selectionEnd || 0;
    const newValue = input.slice(0, start) + text + input.slice(end);

    setInput(newValue);

    // Set cursor position after inserted text
    setTimeout(() => {
      const newCursorPos = start + text.length;
      currentInput.setSelectionRange(newCursorPos, newCursorPos);
      currentInput.focus();
    }, 0);
  };

  return (
    <div
      className="border-t p-3 pb-safe-b"
      style={{
        backgroundColor: theme.colors.chat,
        borderColor: theme.colors.border,
        // Add extra padding when keyboard is open to prevent input being hidden
        paddingBottom: `max(calc(env(safe-area-inset-bottom) + 12px), ${keyboardHeight > 0 ? '12px' : '12px'})`,
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Math Toolbar (collapsible) */}
        {showMathToolbar && (
          <div className="mb-3">
            <MathInputToolbar onInsert={handleMathInsert} disabled={disabled} topicId={topicId} />
          </div>
        )}

        <div
          className="flex items-end space-x-3 p-3 border backdrop-blur-sm"
          style={{
            background: theme.glass.background,
            borderColor: theme.glass.border,
            borderRadius: theme.radius.xl,
            boxShadow: theme.shadows.lg,
            backdropFilter: theme.glass.backdrop,
          }}
        >
          {/* Math toolbar toggle button - inside input area */}
          <button
            onClick={() => setShowMathToolbar(!showMathToolbar)}
            disabled={disabled}
            className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150 focus:outline-none"
            style={{
              backgroundColor: showMathToolbar ? theme.colors.brand : theme.colors.interactive,
              color: showMathToolbar ? '#ffffff' : theme.colors.textPrimary,
              cursor: disabled ? 'not-allowed' : 'pointer',
            }}
            onMouseEnter={(e) => {
              if (!disabled) {
                e.currentTarget.style.transform = 'scale(1.05)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            title="Toggle math symbols"
          >
            <span className="text-lg">{showMathToolbar ? '✕' : '∑'}</span>
          </button>

          {/* Input field - textarea for multiline support with auto-resize */}
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              maxLength={MAX_INPUT_LENGTH + 100} // Allow slight overflow for better UX
              placeholder="Type your answer or ask for help... (Ctrl+Enter to send)"
              rows={1}
              className="w-full px-3 sm:px-4 py-3 bg-transparent text-base focus:outline-none disabled:cursor-not-allowed resize-none"
              style={{
                color: theme.colors.textPrimary,
                fontSize: '16px', // Prevent iOS zoom on focus
                lineHeight: '1.5',
                overflow: 'hidden', // Changed dynamically by adjustHeight
                ...(disabled && {
                  color: theme.colors.textMuted,
                }),
                ...(isOverLimit && {
                  color: '#ef4444', // Red when over limit
                }),
              }}
              inputMode="text"
            />
            {/* Character counter - shows when near limit */}
            {(isNearLimit || showLengthWarning) && (
              <div
                className="absolute bottom-1 right-2 text-xs"
                style={{
                  color: isOverLimit ? '#ef4444' : theme.colors.textMuted,
                }}
              >
                {input.length}/{MAX_INPUT_LENGTH}
                {isOverLimit && ' (too long)'}
              </div>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={disabled || !input.trim() || isOverLimit}
            className="px-4 sm:px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 min-w-[44px] min-h-[44px]"
            style={{
              background: disabled || !input.trim() || isOverLimit ? theme.colors.interactive : theme.gradients.brand,
              color: disabled || !input.trim() || isOverLimit ? theme.colors.textMuted : '#ffffff',
              cursor: disabled || !input.trim() || isOverLimit ? 'not-allowed' : 'pointer',
              touchAction: 'manipulation', // Prevent 300ms delay on mobile
              ...(!(disabled || !input.trim() || isOverLimit) && {
                boxShadow: theme.shadows.glow,
              }),
            }}
            onMouseEnter={(e) => {
              if (!(disabled || !input.trim() || isOverLimit)) {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = theme.shadows.xl;
              }
            }}
            onMouseLeave={(e) => {
              if (!(disabled || !input.trim() || isOverLimit)) {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = theme.shadows.glow;
              }
            }}
          >
            {disabled ? (
              <div className="flex items-center space-x-1">
                <div
                  className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin"
                  style={{ borderColor: theme.colors.textMuted }}
                />
              </div>
            ) : (
              <div className="flex items-center space-x-1.5">
                <span className="text-sm">Send</span>
                <span className="text-sm opacity-50">Ctrl</span>
                <span className="text-sm opacity-50">↵</span>
              </div>
            )}
          </button>
        </div>


      </div>
    </div>
  );
});

InputArea.displayName = 'InputArea';

export default InputArea;