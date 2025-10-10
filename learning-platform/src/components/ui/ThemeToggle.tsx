import { forwardRef } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Button } from './Button';
import type { ButtonProps } from './Button';

export interface ThemeToggleProps extends Omit<ButtonProps, 'children' | 'leftIcon' | 'rightIcon'> {
  showLabel?: boolean;
  iconOnly?: boolean;
  compact?: boolean;
}

export const ThemeToggle = forwardRef<HTMLButtonElement, ThemeToggleProps>(
  (
    {
      showLabel = false,
      iconOnly = false,
      compact = false,
      variant = 'ghost',
      size = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    const { isDark, toggleTheme, theme } = useTheme();

    const handleToggle = () => {
      toggleTheme();
    };

    // Icon components
    const SunIcon = () => (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    );

    const MoonIcon = () => (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    );

    // Compact toggle switch
    if (compact) {
      const switchStyles = {
        position: 'relative' as const,
        width: '48px',
        height: '24px',
        backgroundColor: isDark ? theme.colors.brand : theme.colors.interactive,
        borderRadius: '12px',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        padding: '2px',
        display: 'flex',
        alignItems: 'center',
        outline: 'none',
      };

      const toggleStyles = {
        width: '20px',
        height: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '50%',
        transform: isDark ? 'translateX(24px)' : 'translateX(0px)',
        transition: 'transform 0.3s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px',
        boxShadow: theme.shadows.sm,
      };

      return (
        <button
          ref={ref}
          style={switchStyles}
          onClick={handleToggle}
          className={className}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          {...props}
        >
          <div style={toggleStyles}>
            {isDark ? '🌙' : '☀️'}
          </div>
        </button>
      );
    }

    // Icon-only button
    if (iconOnly) {
      return (
        <Button
          ref={ref}
          variant={variant}
          size={size}
          onClick={handleToggle}
          className={className}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          {...props}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </Button>
      );
    }

    // Full button with optional label
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        onClick={handleToggle}
        className={className}
        leftIcon={isDark ? <SunIcon /> : <MoonIcon />}
        {...props}
      >
        {showLabel && (isDark ? 'Light Mode' : 'Dark Mode')}
      </Button>
    );
  }
);

ThemeToggle.displayName = 'ThemeToggle';

// Animated Theme Toggle with smooth transition
export interface AnimatedThemeToggleProps extends ThemeToggleProps {
  animationType?: 'slide' | 'flip' | 'rotate';
}

export const AnimatedThemeToggle = forwardRef<HTMLButtonElement, AnimatedThemeToggleProps>(
  (
    {
      animationType = 'slide',
      size = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    const { isDark, toggleTheme, theme } = useTheme();

    const containerStyles = {
      position: 'relative' as const,
      width: '56px',
      height: '28px',
      backgroundColor: isDark ? theme.colors.brand : theme.colors.interactive,
      borderRadius: '14px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease-in-out',
      padding: '2px',
      display: 'flex',
      alignItems: 'center',
      outline: 'none',
      overflow: 'hidden',
    };

    const getToggleStyles = () => {
      const base = {
        width: '24px',
        height: '24px',
        backgroundColor: '#ffffff',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        boxShadow: theme.shadows.sm,
        transition: 'all 0.3s ease-in-out',
      };

      switch (animationType) {
        case 'slide':
          return {
            ...base,
            transform: isDark ? 'translateX(28px)' : 'translateX(0px)',
          };
        case 'flip':
          return {
            ...base,
            transform: isDark
              ? 'translateX(28px) rotateY(180deg)'
              : 'translateX(0px) rotateY(0deg)',
          };
        case 'rotate':
          return {
            ...base,
            transform: isDark
              ? 'translateX(28px) rotate(180deg)'
              : 'translateX(0px) rotate(0deg)',
          };
        default:
          return base;
      }
    };

    const backgroundIconStyles = {
      position: 'absolute' as const,
      fontSize: '14px',
      transition: 'opacity 0.3s ease-in-out',
    };

    return (
      <button
        ref={ref}
        style={containerStyles}
        onClick={toggleTheme}
        className={className}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        {...props}
      >
        {/* Background Icons */}
        <div
          style={{
            ...backgroundIconStyles,
            left: '6px',
            opacity: isDark ? 0 : 1,
          }}
        >
          ☀️
        </div>
        <div
          style={{
            ...backgroundIconStyles,
            right: '6px',
            opacity: isDark ? 1 : 0,
          }}
        >
          🌙
        </div>

        {/* Moving Toggle */}
        <div style={getToggleStyles()}>
          {isDark ? '🌙' : '☀️'}
        </div>
      </button>
    );
  }
);

AnimatedThemeToggle.displayName = 'AnimatedThemeToggle';