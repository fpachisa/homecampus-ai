import React, { useState, type KeyboardEvent } from 'react';
import { useTheme } from '../hooks/useTheme';

interface Props {
  onSubmit: (input: string) => void;
  disabled: boolean;
}

const InputArea: React.FC<Props> = ({ onSubmit, disabled }) => {
  const { theme } = useTheme();
  const [input, setInput] = useState('');

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

  return (
    <div
      className="border-t p-6"
      style={{
        backgroundColor: theme.colors.chat,
        borderColor: theme.colors.border,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div
          className="flex items-end space-x-4 p-4 border backdrop-blur-sm"
          style={{
            background: theme.glass.background,
            borderColor: theme.glass.border,
            borderRadius: theme.radius.xl,
            boxShadow: theme.shadows.lg,
            backdropFilter: theme.glass.backdrop,
          }}
        >
          <div className="flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={disabled}
              placeholder="Type your answer or ask for help..."
              className="w-full px-4 py-3 border-2 rounded-xl text-sm focus:outline-none focus:ring-2 disabled:cursor-not-allowed transition-all duration-200"
              style={{
                backgroundColor: theme.colors.chat,
                borderColor: theme.colors.border,
                color: theme.colors.textPrimary,
                ...(disabled && {
                  backgroundColor: theme.colors.interactive,
                  color: theme.colors.textMuted,
                }),
              }}
              onFocus={(e) => {
                e.target.style.borderColor = theme.colors.brand;
                e.target.style.boxShadow = theme.shadows.focus;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = theme.colors.border;
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

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

        {/* Helpful hints */}
        {!disabled && (
          <div className="mt-3 text-center">
            <p className="text-xs" style={{ color: theme.colors.textMuted }}>
              💡 Try expressions like "1/2 ÷ 3" or ask "Can you help me understand this?"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputArea;