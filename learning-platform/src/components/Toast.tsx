import { useEffect, useState } from 'react';
import { useThemeContext } from '../contexts/ThemeContext';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  id: string;
  type: ToastType;
  title: string;
  message: string;
  action?: string;
  onAction?: () => void;
  duration?: number; // Auto-dismiss after N milliseconds (0 = no auto-dismiss)
  onDismiss: (id: string) => void;
}

/**
 * Individual Toast Component
 */
export const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  action,
  onAction,
  duration = 5000,
  onDismiss,
}) => {
  const { theme } = useThemeContext();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => {
      onDismiss(id);
    }, 300); // Match animation duration
  };

  const getTypeColors = () => {
    switch (type) {
      case 'success':
        return {
          bg: theme.colors.success,
          icon: '✓',
        };
      case 'error':
        return {
          bg: theme.colors.error,
          icon: '⚠',
        };
      case 'warning':
        return {
          bg: theme.colors.warning,
          icon: '⚡',
        };
      case 'info':
        return {
          bg: theme.colors.info,
          icon: 'ℹ',
        };
    }
  };

  const { bg, icon } = getTypeColors();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'start',
        gap: '0.75rem',
        padding: '1rem',
        backgroundColor: theme.colors.overlay,
        border: `2px solid ${bg}`,
        borderRadius: theme.radius.md,
        boxShadow: theme.shadows.lg,
        minWidth: '320px',
        maxWidth: '500px',
        animation: isExiting ? 'slideOut 0.3s ease-in' : 'slideIn 0.3s ease-out',
        fontFamily: theme.typography.fontFamily,
      }}
    >
      {/* Icon */}
      <div
        style={{
          fontSize: '1.5rem',
          color: bg,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontSize: theme.typography.fontSize.base,
            fontWeight: theme.typography.fontWeight.semibold,
            color: theme.colors.textPrimary,
            marginBottom: '0.25rem',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: theme.typography.fontSize.sm,
            color: theme.colors.textSecondary,
            lineHeight: theme.typography.lineHeight.normal,
            margin: 0,
          }}
        >
          {message}
        </p>

        {/* Action button */}
        {action && onAction && (
          <button
            onClick={onAction}
            style={{
              marginTop: '0.75rem',
              padding: '0.5rem 1rem',
              fontSize: theme.typography.fontSize.sm,
              fontWeight: theme.typography.fontWeight.semibold,
              color: '#FFFFFF',
              backgroundColor: bg,
              border: 'none',
              borderRadius: theme.radius.sm,
              cursor: 'pointer',
              transition: 'opacity 0.2s',
              fontFamily: theme.typography.fontFamily,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            {action}
          </button>
        )}
      </div>

      {/* Close button */}
      <button
        onClick={handleDismiss}
        style={{
          background: 'none',
          border: 'none',
          color: theme.colors.textMuted,
          fontSize: '1.25rem',
          cursor: 'pointer',
          padding: 0,
          lineHeight: 1,
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = theme.colors.textPrimary;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = theme.colors.textMuted;
        }}
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  );
};

/**
 * Toast Container - manages multiple toasts
 */
interface ToastContainerProps {
  toasts: Omit<ToastProps, 'onDismiss'>[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onDismiss }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        pointerEvents: 'none',
      }}
    >
      {toasts.map((toast) => (
        <div key={toast.id} style={{ pointerEvents: 'auto' }}>
          <Toast {...toast} onDismiss={onDismiss} />
        </div>
      ))}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(400px);
            opacity: 0;
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 640px) {
          [style*="position: fixed"][style*="right: 1rem"] {
            left: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

/**
 * Hook for managing toasts
 */
export interface ToastOptions {
  type: ToastType;
  title: string;
  message: string;
  action?: string;
  onAction?: () => void;
  duration?: number;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Omit<ToastProps, 'onDismiss'>[]>([]);

  const showToast = (options: ToastOptions) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, ...options }]);
    return id;
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const showError = (title: string, message: string, action?: string, onAction?: () => void) => {
    return showToast({ type: 'error', title, message, action, onAction });
  };

  const showSuccess = (title: string, message: string) => {
    return showToast({ type: 'success', title, message });
  };

  const showWarning = (title: string, message: string) => {
    return showToast({ type: 'warning', title, message });
  };

  const showInfo = (title: string, message: string) => {
    return showToast({ type: 'info', title, message });
  };

  return {
    toasts,
    showToast,
    dismissToast,
    showError,
    showSuccess,
    showWarning,
    showInfo,
  };
};
