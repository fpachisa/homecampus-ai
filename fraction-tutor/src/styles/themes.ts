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
    // Dark theme - Claude UI inspired
    primary: '#1F1F1F',      // Very dark background
    secondary: '#2B2B2B',    // Slightly lighter dark
    tertiary: '#383838',     // Medium dark

    // Panels
    sidebar: '#2B2B2B',      // Left/right panels
    chat: '#2B2B2B',         // Main chat area
    overlay: '#1F1F1F',      // Modals/overlays

    // Interactive
    interactive: '#383838',   // Buttons, inputs
    interactiveHover: '#D97757', // Orange/coral accent
    interactiveActive: '#C46649',

    // Text
    textPrimary: '#E8E8E5',  // Light beige/gray
    textSecondary: '#A8A8A3',
    textMuted: '#6B6B68',
    textAccent: '#D97757',   // Orange/coral

    // Borders
    border: '#383838',
    divider: '#383838',

    // Status
    success: '#3ba55c',
    warning: '#faa61a',
    error: '#ed4245',
    info: '#D97757',

    // Brand
    brand: '#D97757',        // Orange/coral
    brandHover: '#C46649',
    brandActive: '#B05538',

    // Messages
    userMessage: '#D97757',
    tutorMessage: '#383838',
    systemMessage: '#3ba55c',
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4)',
    md: '0 4px 12px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.2)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(0, 0, 0, 0.3)',
    xl: '0 16px 64px rgba(0, 0, 0, 0.5), 0 8px 32px rgba(0, 0, 0, 0.4)',
    glow: '0 0 20px rgba(217, 119, 87, 0.3), 0 0 40px rgba(217, 119, 87, 0.15)',
    focus: '0 0 0 3px rgba(217, 119, 87, 0.3), 0 0 20px rgba(217, 119, 87, 0.2)',
  },
  radius: {
    sm: '0.375rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
  },
  glass: {
    background: 'rgba(43, 43, 43, 0.8)',
    border: 'rgba(255, 255, 255, 0.1)',
    backdrop: 'blur(12px) saturate(180%)',
    overlay: 'rgba(31, 31, 31, 0.85)',
  },
  gradients: {
    brand: 'linear-gradient(135deg, #D97757 0%, #C46649 100%)',
    panel: 'linear-gradient(180deg, rgba(43, 43, 43, 0.95) 0%, rgba(31, 31, 31, 0.98) 100%)',
    accent: 'linear-gradient(90deg, rgba(217, 119, 87, 0.1) 0%, rgba(196, 102, 73, 0.05) 100%)',
    subtle: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
  },
  typography: {
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
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
    // Light theme - Warm coral/beige palette
    primary: '#FEFDFB',      // Warm off-white background
    secondary: '#F5F3F0',    // Light beige sections
    tertiary: '#EBE8E3',     // Soft beige

    // Panels
    sidebar: '#F5F3F0',      // Left/right panels
    chat: '#FEFDFB',         // Main chat area
    overlay: '#FEFDFB',      // Modals/overlays

    // Interactive
    interactive: '#EBE8E3',   // Buttons, inputs
    interactiveHover: '#D97757', // Coral accent
    interactiveActive: '#C46649',

    // Text
    textPrimary: '#2C2825',  // Dark brown
    textSecondary: '#5C5854',
    textMuted: '#8C8985',
    textAccent: '#D97757',   // Coral

    // Borders
    border: '#E3DFD8',
    divider: '#E3DFD8',

    // Status
    success: '#3ba55c',
    warning: '#D97757',
    error: '#d83c3e',
    info: '#D97757',

    // Brand
    brand: '#D97757',        // Coral
    brandHover: '#C46649',
    brandActive: '#B05538',

    // Messages
    userMessage: '#D97757',  // Coral
    tutorMessage: '#F5F3F0', // Light beige
    systemMessage: '#3ba55c',
  },
  shadows: {
    sm: '0 1px 3px rgba(217, 119, 87, 0.08), 0 1px 2px rgba(217, 119, 87, 0.16)',
    md: '0 4px 12px rgba(217, 119, 87, 0.10), 0 2px 4px rgba(217, 119, 87, 0.06)',
    lg: '0 8px 32px rgba(217, 119, 87, 0.12), 0 4px 16px rgba(217, 119, 87, 0.08)',
    xl: '0 16px 64px rgba(217, 119, 87, 0.15), 0 8px 32px rgba(217, 119, 87, 0.10)',
    glow: '0 0 20px rgba(217, 119, 87, 0.2), 0 0 40px rgba(217, 119, 87, 0.1)',
    focus: '0 0 0 3px rgba(217, 119, 87, 0.2), 0 0 20px rgba(217, 119, 87, 0.15)',
  },
  radius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  glass: {
    background: 'rgba(254, 253, 251, 0.8)',
    border: 'rgba(217, 119, 87, 0.1)',
    backdrop: 'blur(12px) saturate(180%)',
    overlay: 'rgba(254, 253, 251, 0.95)',
  },
  gradients: {
    brand: 'linear-gradient(135deg, #D97757 0%, #C46649 100%)',
    panel: 'linear-gradient(180deg, rgba(254, 253, 251, 0.95) 0%, rgba(245, 243, 240, 0.98) 100%)',
    accent: 'linear-gradient(90deg, rgba(217, 119, 87, 0.08) 0%, rgba(196, 102, 73, 0.04) 100%)',
    subtle: 'linear-gradient(180deg, rgba(217, 119, 87, 0.02) 0%, rgba(217, 119, 87, 0.01) 100%)',
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