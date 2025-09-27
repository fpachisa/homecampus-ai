import { useThemeContext } from '../contexts/ThemeContext';
import type { Theme } from '../styles/themes';

export interface UseThemeReturn {
  theme: Theme;
  themeName: 'dark' | 'light';
  toggleTheme: () => void;
  setTheme: (themeName: 'dark' | 'light') => void;
  isDark: boolean;
  isLight: boolean;

  // Utility functions for common theme operations
  getColor: (colorKey: keyof Theme['colors']) => string;
  getShadow: (shadowKey: keyof Theme['shadows']) => string;
  getRadius: (radiusKey: keyof Theme['radius']) => string;

  // CSS-in-JS style helpers
  bg: (colorKey: keyof Theme['colors']) => { backgroundColor: string };
  text: (colorKey: keyof Theme['colors']) => { color: string };
  border: (colorKey: keyof Theme['colors']) => { borderColor: string };

  // Conditional styling helpers
  when: {
    dark: <T>(value: T) => T | undefined;
    light: <T>(value: T) => T | undefined;
  };

  // Tailwind class helpers
  tw: {
    bg: (colorKey: keyof Theme['colors']) => string;
    text: (colorKey: keyof Theme['colors']) => string;
    border: (colorKey: keyof Theme['colors']) => string;
  };
}

/**
 * Enhanced theme hook with utility functions
 * Provides easy access to theme values and helper functions
 */
export const useTheme = (): UseThemeReturn => {
  const context = useThemeContext();

  const getColor = (colorKey: keyof Theme['colors']): string => {
    return context.theme.colors[colorKey];
  };

  const getShadow = (shadowKey: keyof Theme['shadows']): string => {
    return context.theme.shadows[shadowKey];
  };

  const getRadius = (radiusKey: keyof Theme['radius']): string => {
    return context.theme.radius[radiusKey];
  };

  // CSS-in-JS helpers
  const bg = (colorKey: keyof Theme['colors']) => ({
    backgroundColor: getColor(colorKey),
  });

  const text = (colorKey: keyof Theme['colors']) => ({
    color: getColor(colorKey),
  });

  const border = (colorKey: keyof Theme['colors']) => ({
    borderColor: getColor(colorKey),
  });

  // Conditional styling
  const when = {
    dark: <T>(value: T): T | undefined => (context.isDark ? value : undefined),
    light: <T>(value: T): T | undefined => (!context.isDark ? value : undefined),
  };

  // Tailwind CSS variable helpers
  const tw = {
    bg: (colorKey: keyof Theme['colors']) => `bg-[var(--color-${colorKey})]`,
    text: (colorKey: keyof Theme['colors']) => `text-[var(--color-${colorKey})]`,
    border: (colorKey: keyof Theme['colors']) => `border-[var(--color-${colorKey})]`,
  };

  return {
    ...context,
    isLight: !context.isDark,

    // Utility functions
    getColor,
    getShadow,
    getRadius,

    // CSS-in-JS helpers
    bg,
    text,
    border,

    // Conditional helpers
    when,

    // Tailwind helpers
    tw,
  };
};

// Hook for accessing theme colors directly
export const useThemeColors = () => {
  const { theme } = useTheme();
  return theme.colors;
};

// Hook for accessing theme values as CSS custom properties
export const useThemeVariables = () => {
  const { theme } = useTheme();

  const colors = Object.fromEntries(
    Object.keys(theme.colors).map(key => [key, `var(--color-${key})`])
  );

  const shadows = Object.fromEntries(
    Object.keys(theme.shadows).map(key => [key, `var(--shadow-${key})`])
  );

  const radius = Object.fromEntries(
    Object.keys(theme.radius).map(key => [key, `var(--radius-${key})`])
  );

  return { colors, shadows, radius };
};

// Hook for theme-aware animations
export const useThemeTransitions = () => {
  return {
    theme: 'all 0.2s ease-in-out',
    fast: 'all 0.1s ease-in-out',
    slow: 'all 0.3s ease-in-out',
    bounce: 'all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  };
};