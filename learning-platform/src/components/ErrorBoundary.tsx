import React, { Component, ErrorInfo, ReactNode } from 'react';
import { useThemeContext } from '../contexts/ThemeContext';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Error Boundary Component
 *
 * Catches React errors in child components and displays user-friendly error UI.
 * Provides options to retry or reset the session without losing progress.
 */
class ErrorBoundaryClass extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details to console
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Update state with error info
    this.setState({
      errorInfo,
    });

    // Call optional error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // In production, you could send this to an error reporting service
    // e.g., Sentry, LogRocket, etc.
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return <ErrorFallback
        error={this.state.error}
        onReset={this.handleReset}
        onReload={this.handleReload}
      />;
    }

    return this.props.children;
  }
}

// Functional wrapper to access theme context
interface ErrorFallbackProps {
  error: Error | null;
  onReset: () => void;
  onReload: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, onReset, onReload }) => {
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
        color: theme.colors.textPrimary,
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* Error Icon */}
        <div
          style={{
            fontSize: '4rem',
            marginBottom: '1.5rem',
            color: theme.colors.error,
          }}
        >
          ⚠️
        </div>

        {/* Error Title */}
        <h1
          style={{
            fontSize: theme.typography.fontSize['2xl'],
            fontWeight: theme.typography.fontWeight.bold,
            marginBottom: '1rem',
            color: theme.colors.textPrimary,
          }}
        >
          Something went wrong
        </h1>

        {/* Error Message */}
        <p
          style={{
            fontSize: theme.typography.fontSize.base,
            color: theme.colors.textSecondary,
            marginBottom: '2rem',
            lineHeight: theme.typography.lineHeight.relaxed,
          }}
        >
          We encountered an unexpected error. Your progress has been saved automatically.
          You can try again or refresh the page to continue learning.
        </p>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && error && (
          <details
            style={{
              marginBottom: '2rem',
              padding: '1rem',
              backgroundColor: theme.colors.secondary,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: theme.radius.md,
              textAlign: 'left',
              fontSize: theme.typography.fontSize.sm,
              color: theme.colors.textMuted,
              cursor: 'pointer',
            }}
          >
            <summary
              style={{
                fontWeight: theme.typography.fontWeight.semibold,
                marginBottom: '0.5rem',
                color: theme.colors.textSecondary,
              }}
            >
              Error Details (Development)
            </summary>
            <pre
              style={{
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                margin: 0,
                fontFamily: 'monospace',
              }}
            >
              {error.toString()}
              {error.stack && `\n\nStack trace:\n${error.stack}`}
            </pre>
          </details>
        )}

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={onReset}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: theme.typography.fontSize.base,
              fontWeight: theme.typography.fontWeight.semibold,
              color: '#FFFFFF',
              backgroundColor: theme.colors.brand,
              border: 'none',
              borderRadius: theme.radius.md,
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              fontFamily: theme.typography.fontFamily,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.brandHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.brand;
            }}
          >
            Try Again
          </button>

          <button
            onClick={onReload}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: theme.typography.fontSize.base,
              fontWeight: theme.typography.fontWeight.semibold,
              color: theme.colors.textPrimary,
              backgroundColor: theme.colors.interactive,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: theme.radius.md,
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              fontFamily: theme.typography.fontFamily,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.interactiveHover;
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.interactive;
              e.currentTarget.style.color = theme.colors.textPrimary;
            }}
          >
            Refresh Page
          </button>

          <button
            onClick={() => window.location.href = '/'}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: theme.typography.fontSize.base,
              fontWeight: theme.typography.fontWeight.semibold,
              color: theme.colors.textSecondary,
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: theme.radius.md,
              cursor: 'pointer',
              textDecoration: 'underline',
              fontFamily: theme.typography.fontFamily,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = theme.colors.textPrimary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = theme.colors.textSecondary;
            }}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

// Export the wrapped component
export const ErrorBoundary: React.FC<ErrorBoundaryProps> = (props) => {
  return <ErrorBoundaryClass {...props} />;
};

export default ErrorBoundary;
