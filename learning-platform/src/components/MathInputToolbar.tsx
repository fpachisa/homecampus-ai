import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { getSymbolsForTopic, type MathButton } from './mathSymbolSets';

interface Props {
  onInsert: (text: string) => void;
  disabled?: boolean;
  topicId?: string;
}

const MathInputToolbar: React.FC<Props> = ({ onInsert, disabled = false, topicId = '' }) => {
  const { theme } = useTheme();

  // Get topic-specific symbols dynamically
  const mathButtons: MathButton[] = getSymbolsForTopic(topicId);

  const handleButtonClick = (insert: string) => {
    if (!disabled) {
      onInsert(insert);
    }
  };

  return (
    <div
      className="flex flex-wrap gap-1.5 p-3 border rounded-lg"
      style={{
        backgroundColor: theme.colors.interactive,
        borderColor: theme.colors.border,
      }}
    >
      <div className="text-xs font-medium mb-1 w-full" style={{ color: theme.colors.textMuted }}>
        Math Symbols:
      </div>
      {mathButtons.map((btn, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(btn.insert)}
          disabled={disabled}
          title={btn.tooltip}
          className="px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2"
          style={{
            backgroundColor: disabled ? theme.colors.interactive : theme.colors.chat,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: theme.colors.border,
            color: disabled ? theme.colors.textMuted : theme.colors.textPrimary,
            cursor: disabled ? 'not-allowed' : 'pointer',
            minWidth: '40px',
          }}
          onMouseEnter={(e) => {
            if (!disabled) {
              e.currentTarget.style.backgroundColor = theme.colors.interactive;
              e.currentTarget.style.borderColor = theme.colors.brand;
            }
          }}
          onMouseLeave={(e) => {
            if (!disabled) {
              e.currentTarget.style.backgroundColor = theme.colors.chat;
              e.currentTarget.style.borderColor = theme.colors.border;
            }
          }}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default MathInputToolbar;
