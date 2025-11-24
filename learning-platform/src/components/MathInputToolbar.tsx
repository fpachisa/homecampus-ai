import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { getSymbolsForTopic, type MathButton } from './mathSymbolSets';
import { MatrixBuilderModal } from './ui/MatrixBuilderModal';

interface Props {
  onInsert: (text: string) => void;
  disabled?: boolean;
  topicId?: string;
}

const MathInputToolbar: React.FC<Props> = ({ onInsert, disabled = false, topicId = '' }) => {
  const { theme } = useTheme();
  const [isMatrixModalOpen, setIsMatrixModalOpen] = useState(false);

  // Get topic-specific symbols dynamically
  const mathButtons: MathButton[] = getSymbolsForTopic(topicId);

  const handleButtonClick = (insert: string) => {
    if (!disabled) {
      if (insert === 'MATRIX_BUILDER') {
        setIsMatrixModalOpen(true);
      } else {
        onInsert(insert);
      }

      // Haptic feedback on mobile (if supported)
      if ('vibrate' in navigator) {
        navigator.vibrate(10);
      }
    }
  };

  return (
    <>
      <div
        className="p-3 border rounded-lg"
        style={{
          backgroundColor: theme.colors.interactive,
          borderColor: theme.colors.border,
        }}
      >
        <div className="text-xs font-medium mb-2 w-full" style={{ color: theme.colors.textMuted }}>
          Math Symbols:
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {mathButtons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(btn.insert)}
              disabled={disabled}
              title={btn.tooltip}
              className="min-w-[48px] min-h-[48px] rounded-md text-base sm:text-sm font-medium transition-all duration-150 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 flex items-center justify-center"
              style={{
                backgroundColor: disabled ? theme.colors.interactive : theme.colors.chat,
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: theme.colors.border,
                color: disabled ? theme.colors.textMuted : theme.colors.textPrimary,
                cursor: disabled ? 'not-allowed' : 'pointer',
                touchAction: 'manipulation', // Prevent 300ms delay on mobile
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
      </div>

      <MatrixBuilderModal
        isOpen={isMatrixModalOpen}
        onClose={() => setIsMatrixModalOpen(false)}
        onInsert={onInsert}
      />
    </>
  );
};

export default MathInputToolbar;
