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
    panel: string;
    surface: string;

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
    panel: '#2B2B2B',        // General panel background
    surface: '#1F1F1F',      // Card/container surface

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
    sm: '0 1px 3px rgba(0, 0, 0, 0.35), 0 1px 2px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
    md: '0 6px 18px rgba(0, 0, 0, 0.32), 0 2px 6px rgba(0, 0, 0, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
    lg: '0 10px 36px rgba(0, 0, 0, 0.45), 0 4px 18px rgba(0, 0, 0, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
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
    background: 'rgba(25, 28, 40, 0.55)',
    border: 'rgba(255, 255, 255, 0.14)',
    backdrop: 'blur(18px) saturate(175%) contrast(110%)',
    overlay: 'rgba(15, 16, 20, 0.72)',
  },
  gradients: {
    brand: 'linear-gradient(135deg, #D97757 0%, #C46649 100%)',
    panel: 'radial-gradient(circle at 20% 0%, rgba(217, 119, 87, 0.10) 0%, transparent 55%), radial-gradient(circle at 80% 100%, rgba(217, 119, 87, 0.06) 0%, transparent 60%), linear-gradient(180deg, rgba(31, 31, 34, 0.98) 0%, rgba(18, 18, 20, 1) 100%)',
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
    // Light theme - Enhanced warm coral/orange palette with better contrast
    primary: '#FFFFFF',      // Pure white background (more vibrant than off-white)
    secondary: '#FFF8F5',    // Very light peachy background
    tertiary: '#FFE8DD',     // Light coral tint

    // Panels
    sidebar: '#FFF8F5',      // Left/right panels with warm tint
    chat: '#FFFFFF',         // Main chat area - pure white
    overlay: '#FFFFFF',      // Modals/overlays
    panel: '#FFF8F5',        // General panel background
    surface: '#FFFFFF',      // Card/container surface

    // Interactive
    interactive: 'rgba(255, 240, 232, 0.70)',   // Buttons, inputs - frosted peach
    interactiveHover: '#D97757', // Coral accent
    interactiveActive: '#C46649',

    // Text
    textPrimary: '#1A1A1A',  // Near black (better contrast than brown)
    textSecondary: '#4A4A4A',
    textMuted: '#7A7A7A',
    textAccent: '#D97757',   // Coral

    // Borders
    border: '#FFE0D1',       // Light coral border
    divider: '#FFE0D1',

    // Status
    success: '#10B981',      // Bright green
    warning: '#F59E0B',      // Amber
    error: '#EF4444',        // Bright red
    info: '#D97757',         // Coral

    // Brand
    brand: '#D97757',        // Coral (kept same)
    brandHover: '#C46649',
    brandActive: '#B05538',

    // Messages
    userMessage: '#D97757',  // Coral
    tutorMessage: '#FFF8F5', // Light peachy background
    systemMessage: '#10B981',
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
    md: '0 6px 18px rgba(0, 0, 0, 0.14), 0 2px 8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.85)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.10)',
    xl: '0 16px 64px rgba(0, 0, 0, 0.18), 0 8px 32px rgba(0, 0, 0, 0.12)',
    glow: '0 0 24px rgba(217, 119, 87, 0.3), 0 0 48px rgba(217, 119, 87, 0.15)',
    focus: '0 0 0 3px rgba(217, 119, 87, 0.3), 0 0 20px rgba(217, 119, 87, 0.15)',
  },
  radius: {
    sm: '0.375rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
  },
  glass: {
    background: 'rgba(255, 255, 255, 0.58)',
    border: 'rgba(0, 0, 0, 0.10)',
    backdrop: 'blur(22px) saturate(160%) contrast(110%)',
    overlay: 'rgba(255, 255, 255, 0.82)',
  },
  gradients: {
    brand: 'linear-gradient(135deg, #D97757 0%, #C46649 100%)',
    panel: 'radial-gradient(circle at 18% 0%, rgba(217, 119, 87, 0.16) 0%, transparent 55%), radial-gradient(circle at 85% 100%, rgba(217, 119, 87, 0.10) 0%, transparent 60%), linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 248, 245, 1) 100%)',
    accent: 'linear-gradient(90deg, rgba(217, 119, 87, 0.1) 0%, rgba(196, 102, 73, 0.05) 100%)',
    subtle: 'linear-gradient(180deg, rgba(217, 119, 87, 0.04) 0%, rgba(217, 119, 87, 0.01) 100%)',
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
