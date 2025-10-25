import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Theme, ThemeName } from '../styles/themes';
import { themes } from '../styles/themes';

interface ThemeContextType {
  theme: Theme;
  themeName: ThemeName;
  toggleTheme: () => void;
  setTheme: (themeName: ThemeName) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeName;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'dark'
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('aicampus-theme') as ThemeName;
    if (savedTheme && themes[savedTheme]) {
      return savedTheme;
    }

    // Check system preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }

    return defaultTheme;
  });

  const theme = themes[themeName];
  const isDark = themeName === 'dark';

  const setTheme = (newThemeName: ThemeName) => {
    setThemeName(newThemeName);
    localStorage.setItem('aicampus-theme', newThemeName);
  };

  const toggleTheme = () => {
    const newTheme = themeName === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  // Apply theme CSS custom properties to document root
  useEffect(() => {
    const root = document.documentElement;

    // Apply color variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Apply shadow variables
    Object.entries(theme.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value);
    });

    // Apply radius variables
    Object.entries(theme.radius).forEach(([key, value]) => {
      root.style.setProperty(`--radius-${key}`, value);
    });

    // Set theme name for conditional styling
    root.setAttribute('data-theme', themeName);

    // Also set class for Tailwind dark mode
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme, themeName, isDark]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if user hasn't explicitly set a preference
      const savedTheme = localStorage.getItem('aicampus-theme');
      if (!savedTheme) {
        setThemeName(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const contextValue: ThemeContextType = {
    theme,
    themeName,
    toggleTheme,
    setTheme,
    isDark,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};