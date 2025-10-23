import React from 'react';
import { useThemeContext } from '../contexts/ThemeContext';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  message?: string;
  fullScreen?: boolean;
}

/**
 * Loading Spinner Component
 * Shows animated spinner with optional message
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  message,
  fullScreen = false,
}) => {
  const { theme } = useThemeContext();

  const sizeMap = {
    small: '24px',
    medium: '48px',
    large: '64px',
  };

  const spinnerSize = sizeMap[size];

  const containerStyle: React.CSSProperties = fullScreen
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.overlay,
        backdropFilter: 'blur(4px)',
        zIndex: 9998,
      }
    : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      };

  return (
    <div style={containerStyle}>
      {/* Spinner */}
      <div
        style={{
          width: spinnerSize,
          height: spinnerSize,
          border: `4px solid ${theme.colors.border}`,
          borderTop: `4px solid ${theme.colors.brand}`,
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />

      {/* Optional message */}
      {message && (
        <p
          style={{
            marginTop: '1rem',
            fontSize: theme.typography.fontSize.base,
            color: theme.colors.textSecondary,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          {message}
        </p>
      )}

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

/**
 * Skeleton Loader Component
 * Shows placeholder boxes while content loads
 */
interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '1rem',
  borderRadius,
}) => {
  const { theme } = useThemeContext();

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: theme.colors.interactive,
        borderRadius: borderRadius || theme.radius.sm,
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }}
    >
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

/**
 * Message Skeleton - For chat message loading
 */
export const MessageSkeleton: React.FC = () => {
  const { theme } = useThemeContext();

  return (
    <div
      style={{
        display: 'flex',
        gap: '0.75rem',
        padding: '1rem',
        fontFamily: theme.typography.fontFamily,
      }}
    >
      {/* Avatar skeleton */}
      <Skeleton width="40px" height="40px" borderRadius="50%" />

      {/* Message content skeleton */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Skeleton width="30%" height="1rem" />
        <Skeleton width="100%" height="3rem" />
        <Skeleton width="60%" height="1rem" />
      </div>
    </div>
  );
};

/**
 * Dashboard Card Skeleton
 */
export const CardSkeleton: React.FC = () => {
  const { theme } = useThemeContext();

  return (
    <div
      style={{
        padding: '1.5rem',
        backgroundColor: theme.colors.secondary,
        borderRadius: theme.radius.lg,
        border: `1px solid ${theme.colors.border}`,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Skeleton width="40%" height="1.5rem" />
          <Skeleton width="60px" height="60px" borderRadius="50%" />
        </div>
        <Skeleton width="100%" height="4rem" />
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Skeleton width="30%" height="2rem" />
          <Skeleton width="30%" height="2rem" />
        </div>
      </div>
    </div>
  );
};

/**
 * Topic List Skeleton
 */
export const TopicListSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {Array.from({ length: count }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
};

/**
 * Problem Loading State
 * Shows while AI generates a new problem
 */
interface ProblemLoadingProps {
  message?: string;
}

export const ProblemLoading: React.FC<ProblemLoadingProps> = ({
  message = 'Generating your next question...',
}) => {
  const { theme } = useThemeContext();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1rem',
        textAlign: 'center',
      }}
    >
      {/* Animated brain icon or similar */}
      <div
        style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          animation: 'bounce 1s ease-in-out infinite',
        }}
      >
        🤔
      </div>

      <p
        style={{
          fontSize: theme.typography.fontSize.lg,
          color: theme.colors.textPrimary,
          fontWeight: theme.typography.fontWeight.semibold,
          marginBottom: '0.5rem',
          fontFamily: theme.typography.fontFamily,
        }}
      >
        {message}
      </p>

      <p
        style={{
          fontSize: theme.typography.fontSize.sm,
          color: theme.colors.textMuted,
          maxWidth: '400px',
          fontFamily: theme.typography.fontFamily,
        }}
      >
        This usually takes 3-5 seconds
      </p>

      {/* Progress dots */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          marginTop: '1.5rem',
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: theme.colors.brand,
              borderRadius: '50%',
              animation: `dotPulse 1.4s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes dotPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

/**
 * Session Loading State
 * Shows while restoring a saved session
 */
export const SessionLoading: React.FC = () => {
  const { theme } = useThemeContext();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        backgroundColor: theme.colors.primary,
      }}
    >
      <LoadingSpinner size="large" />

      <p
        style={{
          marginTop: '1.5rem',
          fontSize: theme.typography.fontSize.lg,
          color: theme.colors.textPrimary,
          fontWeight: theme.typography.fontWeight.semibold,
          fontFamily: theme.typography.fontFamily,
        }}
      >
        Restoring your session...
      </p>

      <p
        style={{
          marginTop: '0.5rem',
          fontSize: theme.typography.fontSize.sm,
          color: theme.colors.textMuted,
          fontFamily: theme.typography.fontFamily,
        }}
      >
        Loading your progress and conversation history
      </p>
    </div>
  );
};
