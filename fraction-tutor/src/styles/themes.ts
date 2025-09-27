// Discord-inspired theme configuration
export interface Theme {
  name: 'dark' | 'light';
  colors: {
    // Background colors
    primary: string;
    secondary: string;
    tertiary: string;

    // Panel colors
    sidebar: string;
    chat: string;
    overlay: string;

    // Interactive elements
    interactive: string;
    interactiveHover: string;
    interactiveActive: string;

    // Text colors
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    textAccent: string;

    // Border and divider colors
    border: string;
    divider: string;

    // Status colors
    success: string;
    warning: string;
    error: string;
    info: string;

    // Brand colors (Discord-inspired purple/blue)
    brand: string;
    brandHover: string;
    brandActive: string;

    // Message bubble colors
    userMessage: string;
    tutorMessage: string;
    systemMessage: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    glow: string;
    focus: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  glass: {
    background: string;
    border: string;
    backdrop: string;
    overlay: string;
  };
  gradients: {
    brand: string;
    panel: string;
    accent: string;
    subtle: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
    };
    fontWeight: {
      normal: string;
      medium: string;
      semibold: string;
      bold: string;
    };
    lineHeight: {
      tight: string;
      normal: string;
      relaxed: string;
    };
    letterSpacing: {
      tight: string;
      normal: string;
      wide: string;
    };
  };
}

export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    // Dark theme - Discord inspired
    primary: '#36393f',      // Main dark background
    secondary: '#2f3136',    // Darker sections
    tertiary: '#202225',     // Darkest sections

    // Panels
    sidebar: '#2f3136',      // Left/right panels
    chat: '#36393f',         // Main chat area
    overlay: '#18191c',      // Modals/overlays

    // Interactive
    interactive: '#4f545c',   // Buttons, inputs
    interactiveHover: '#5865f2', // Discord brand color
    interactiveActive: '#4752c4',

    // Text
    textPrimary: '#ffffff',
    textSecondary: '#b9bbbe',
    textMuted: '#72767d',
    textAccent: '#5865f2',

    // Borders
    border: '#4f545c',
    divider: '#4f545c',

    // Status
    success: '#3ba55c',
    warning: '#faa61a',
    error: '#ed4245',
    info: '#5865f2',

    // Brand
    brand: '#5865f2',
    brandHover: '#4752c4',
    brandActive: '#3c45a5',

    // Messages
    userMessage: '#5865f2',
    tutorMessage: '#4f545c',
    systemMessage: '#3ba55c',
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    md: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2)',
    xl: '0 16px 64px rgba(0, 0, 0, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)',
    glow: '0 0 20px rgba(88, 101, 242, 0.3), 0 0 40px rgba(88, 101, 242, 0.15)',
    focus: '0 0 0 3px rgba(88, 101, 242, 0.3), 0 0 20px rgba(88, 101, 242, 0.2)',
  },
  radius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  glass: {
    background: 'rgba(47, 49, 54, 0.8)',
    border: 'rgba(255, 255, 255, 0.1)',
    backdrop: 'blur(12px) saturate(180%)',
    overlay: 'rgba(24, 25, 28, 0.85)',
  },
  gradients: {
    brand: 'linear-gradient(135deg, #5865f2 0%, #4752c4 100%)',
    panel: 'linear-gradient(180deg, rgba(54, 57, 63, 0.95) 0%, rgba(47, 49, 54, 0.98) 100%)',
    accent: 'linear-gradient(90deg, rgba(88, 101, 242, 0.1) 0%, rgba(71, 82, 196, 0.05) 100%)',
    subtle: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.625',
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
    },
  },
};

export const lightTheme: Theme = {
  name: 'light',
  colors: {
    // Light theme - Clean and modern
    primary: '#ffffff',      // Main light background
    secondary: '#f2f3f5',    // Light gray sections
    tertiary: '#e3e5e8',     // Lighter sections

    // Panels
    sidebar: '#f2f3f5',      // Left/right panels
    chat: '#ffffff',         // Main chat area
    overlay: '#ffffff',      // Modals/overlays

    // Interactive
    interactive: '#e3e5e8',   // Buttons, inputs
    interactiveHover: '#5865f2', // Same brand color
    interactiveActive: '#4752c4',

    // Text
    textPrimary: '#2e3338',
    textSecondary: '#4e5058',
    textMuted: '#6a6f77',
    textAccent: '#5865f2',

    // Borders
    border: '#e3e5e8',
    divider: '#e3e5e8',

    // Status
    success: '#248046',
    warning: '#f0991f',
    error: '#d83c3e',
    info: '#5865f2',

    // Brand
    brand: '#5865f2',
    brandHover: '#4752c4',
    brandActive: '#3c45a5',

    // Messages
    userMessage: '#5865f2',
    tutorMessage: '#f2f3f5',
    systemMessage: '#248046',
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.16)',
    md: '0 4px 12px rgba(0, 0, 0, 0.10), 0 2px 4px rgba(0, 0, 0, 0.06)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08)',
    xl: '0 16px 64px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(0, 0, 0, 0.10)',
    glow: '0 0 20px rgba(88, 101, 242, 0.2), 0 0 40px rgba(88, 101, 242, 0.1)',
    focus: '0 0 0 3px rgba(88, 101, 242, 0.2), 0 0 20px rgba(88, 101, 242, 0.15)',
  },
  radius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  glass: {
    background: 'rgba(255, 255, 255, 0.8)',
    border: 'rgba(0, 0, 0, 0.1)',
    backdrop: 'blur(12px) saturate(180%)',
    overlay: 'rgba(255, 255, 255, 0.95)',
  },
  gradients: {
    brand: 'linear-gradient(135deg, #5865f2 0%, #4752c4 100%)',
    panel: 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(242, 243, 245, 0.98) 100%)',
    accent: 'linear-gradient(90deg, rgba(88, 101, 242, 0.08) 0%, rgba(71, 82, 196, 0.04) 100%)',
    subtle: 'linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)',
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.625',
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
    },
  },
};

export const themes = {
  dark: darkTheme,
  light: lightTheme,
} as const;

export type ThemeName = keyof typeof themes;