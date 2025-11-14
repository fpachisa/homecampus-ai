import { useTheme } from '../../hooks/useTheme';
import { X } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  confirmText?: string;
  showCloseButton?: boolean;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  confirmText = 'OK',
  showCloseButton = true,
}) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={onClose}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)',
      }}
    >
      {/* Modal */}
      <div
        className="relative max-w-md w-full rounded-2xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: theme.colors.primary,
          border: `1px solid ${theme.colors.border}`,
          boxShadow: theme.shadows.xl,
        }}
      >
        {/* Close button */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-lg transition-colors"
            style={{
              color: theme.colors.textMuted,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.interactive;
              e.currentTarget.style.color = theme.colors.textPrimary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = theme.colors.textMuted;
            }}
          >
            <X size={20} />
          </button>
        )}

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: `${theme.colors.brand}20`,
            }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke={theme.colors.brand}
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2
          className="text-2xl font-bold text-center mb-4"
          style={{ color: theme.colors.textPrimary }}
        >
          {title}
        </h2>

        {/* Message */}
        <p
          className="text-center mb-8 leading-relaxed"
          style={{ color: theme.colors.textSecondary }}
        >
          {message}
        </p>

        {/* OK Button */}
        <button
          onClick={onClose}
          className="w-full py-3 px-6 rounded-xl font-semibold text-white transition-all"
          style={{
            background: theme.gradients.brand,
            boxShadow: theme.shadows.md,
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = theme.shadows.glow;
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = theme.shadows.md;
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
};
