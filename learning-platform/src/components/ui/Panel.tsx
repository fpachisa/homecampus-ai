import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { useTheme } from '../../hooks/useTheme';

export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered' | 'ghost';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  header?: ReactNode;
  footer?: ReactNode;
  loading?: boolean;
  collapsible?: boolean;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const Panel = forwardRef<HTMLDivElement, PanelProps>(
  (
    {
      children,
      variant = 'default',
      padding = 'md',
      header,
      footer,
      loading = false,
      collapsible = false,
      collapsed = false,
      onToggleCollapse,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { theme } = useTheme();
    const isLight = theme.name === 'light';

    // Padding configurations
    const paddingClasses = {
      none: '',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
    };

    // Variant configurations
    const getVariantStyles = () => {
      const variants = {
        default: {
          ...(isLight
            ? {
              background: theme.glass.background,
              border: `1px solid ${theme.glass.border}`,
              backdropFilter: theme.glass.backdrop,
            }
            : {
              backgroundColor: theme.colors.secondary,
            }),
          boxShadow: 'none',
        },
        elevated: {
          ...(isLight
            ? {
              background: theme.glass.background,
              border: `1px solid ${theme.glass.border}`,
              backdropFilter: theme.glass.backdrop,
            }
            : {
              backgroundColor: theme.colors.primary,
            }),
          boxShadow: theme.shadows.md,
        },
        bordered: {
          ...(isLight
            ? {
              background: theme.glass.background,
              border: `1px solid ${theme.glass.border}`,
              backdropFilter: theme.glass.backdrop,
            }
            : {
              backgroundColor: theme.colors.primary,
              border: `1px solid ${theme.colors.border}`,
            }),
          boxShadow: 'none',
        },
        ghost: {
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
        },
      };

      return variants[variant];
    };

    const variantStyles = getVariantStyles();

    const panelStyles = {
      borderRadius: theme.radius.lg,
      color: theme.colors.textPrimary,
      transition: 'all 0.2s ease-in-out',
      overflow: 'hidden' as const,
      ...variantStyles,
      ...style,
    };

    const LoadingOverlay = () => (
      <div
        className="absolute inset-0 flex items-center justify-center z-50"
        style={{
          backgroundColor: `${theme.colors.overlay}90`,
        }}
      >
        <div className="flex items-center space-x-2">
          <div className="animate-spin">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
          <span className="text-sm font-medium" style={{ color: theme.colors.textPrimary }}>
            Loading...
          </span>
        </div>
      </div>
    );

    return (
      <div
        ref={ref}
        className={`relative ${(variant !== 'ghost' && isLight) ? 'glass-surface ' : ''}${className}`}
        style={panelStyles}
        {...props}
      >
        {/* Header */}
        {header && (
          <div
            className={`flex items-center justify-between ${padding !== 'none' ? 'px-4 py-3' : ''} border-b`}
            style={{ borderColor: theme.colors.border }}
          >
            <div className="flex-1">{header}</div>
            {collapsible && (
              <button
                onClick={onToggleCollapse}
                className="ml-2 p-1 rounded-md transition-colors duration-200"
                style={{
                  color: theme.colors.textSecondary,
                  backgroundColor: 'transparent',
                }}
                title={collapsed ? 'Expand' : 'Collapse'}
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    collapsed ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Content */}
        {!collapsed && (
          <div className={padding !== 'none' ? paddingClasses[padding] : ''}>
            {children}
          </div>
        )}

        {/* Footer */}
        {footer && !collapsed && (
          <div
            className={`${padding !== 'none' ? 'px-4 py-3' : ''} border-t`}
            style={{ borderColor: theme.colors.border }}
          >
            {footer}
          </div>
        )}

        {/* Loading Overlay */}
        {loading && <LoadingOverlay />}
      </div>
    );
  }
);

Panel.displayName = 'Panel';
