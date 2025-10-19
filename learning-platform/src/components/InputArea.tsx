import React, { useState, useRef, useImperativeHandle, forwardRef, type KeyboardEvent } from 'react';
import { useTheme } from '../hooks/useTheme';
import MathInputToolbar from './MathInputToolbar';

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
  const [input, setInput] = useState('');
  const [showMathToolbar, setShowMathToolbar] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Expose focus method to parent
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    }
  }));

  const handleSubmit = () => {
    if (input.trim() && !disabled) {
      onSubmit(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
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
      className="border-t p-3"
      style={{
        backgroundColor: theme.colors.chat,
        borderColor: theme.colors.border,
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
          className="flex items-center space-x-3 p-3 border backdrop-blur-sm"
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

          {/* Input field */}
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={disabled}
            placeholder="Type your answer or ask for help..."
            className="flex-1 px-4 py-3 bg-transparent text-sm focus:outline-none disabled:cursor-not-allowed transition-all duration-200"
            style={{
              color: theme.colors.textPrimary,
              ...(disabled && {
                color: theme.colors.textMuted,
              }),
            }}
          />

          <button
            onClick={handleSubmit}
            disabled={disabled || !input.trim()}
            className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2"
            style={{
              background: disabled || !input.trim() ? theme.colors.interactive : theme.gradients.brand,
              color: disabled || !input.trim() ? theme.colors.textMuted : '#ffffff',
              cursor: disabled || !input.trim() ? 'not-allowed' : 'pointer',
              ...(!(disabled || !input.trim()) && {
                boxShadow: theme.shadows.glow,
              }),
            }}
            onMouseEnter={(e) => {
              if (!(disabled || !input.trim())) {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = theme.shadows.xl;
              }
            }}
            onMouseLeave={(e) => {
              if (!(disabled || !input.trim())) {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = theme.shadows.glow;
              }
            }}
          >
            {disabled ? (
              <div className="flex items-center space-x-2">
                <div
                  className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin"
                  style={{ borderColor: theme.colors.textMuted }}
                />
                <span>Sending...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <span>Send</span>
                <span>↗</span>
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