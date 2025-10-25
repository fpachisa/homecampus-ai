import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { useTheme } from '../../hooks/useTheme';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const { theme } = useTheme();

    // Size configurations
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
    };

    // Variant configurations
    const getVariantStyles = () => {
      const variants = {
        primary: {
          backgroundColor: theme.colors.brand,
          color: '#ffffff',
          hoverColor: theme.colors.brandHover,
          activeColor: theme.colors.brandActive,
        },
        secondary: {
          backgroundColor: theme.colors.interactive,
          color: theme.colors.textPrimary,
          hoverColor: theme.colors.interactiveHover,
          activeColor: theme.colors.interactiveActive,
        },
        ghost: {
          backgroundColor: 'transparent',
          color: theme.colors.textSecondary,
          hoverColor: theme.colors.interactive,
          activeColor: theme.colors.interactiveActive,
        },
        danger: {
          backgroundColor: theme.colors.error,
          color: '#ffffff',
          hoverColor: '#c53030',
          activeColor: '#9b2c2c',
        },
        success: {
          backgroundColor: theme.colors.success,
          color: '#ffffff',
          hoverColor: '#2f855a',
          activeColor: '#276749',
        },
      };

      return variants[variant];
    };

    const variantStyles = getVariantStyles();
    const isDisabled = disabled || loading;

    const buttonStyles = {
      backgroundColor: variantStyles.backgroundColor,
      color: variantStyles.color,
      border: 'none',
      borderRadius: theme.radius.md,
      fontWeight: '500',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      opacity: isDisabled ? 0.6 : 1,
      transition: 'all 0.2s ease-in-out',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      outline: 'none',
      position: 'relative' as const,
      overflow: 'hidden' as const,
      ...style,
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled) {
        e.currentTarget.style.backgroundColor = variantStyles.hoverColor;
      }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled) {
        e.currentTarget.style.backgroundColor = variantStyles.backgroundColor;
      }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled) {
        e.currentTarget.style.backgroundColor = variantStyles.activeColor;
      }
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled) {
        e.currentTarget.style.backgroundColor = variantStyles.hoverColor;
      }
    };

    return (
      <button
        ref={ref}
        className={`${sizeClasses[size]} ${className}`}
        style={buttonStyles}
        disabled={isDisabled}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        {...props}
      >
        {loading && (
          <div className="animate-spin">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
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
        )}
        {!loading && leftIcon && <span>{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';