/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Mobile-first breakpoints
      screens: {
        xs: '360px', // Very small devices
      },

      // Custom CSS variables for dynamic theming
      colors: {
        // Background colors
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',

        // Panel colors
        sidebar: 'var(--color-sidebar)',
        chat: 'var(--color-chat)',
        overlay: 'var(--color-overlay)',

        // Interactive elements
        interactive: 'var(--color-interactive)',
        'interactive-hover': 'var(--color-interactiveHover)',
        'interactive-active': 'var(--color-interactiveActive)',

        // Text colors
        'text-primary': 'var(--color-textPrimary)',
        'text-secondary': 'var(--color-textSecondary)',
        'text-muted': 'var(--color-textMuted)',
        'text-accent': 'var(--color-textAccent)',

        // Border and divider colors
        border: 'var(--color-border)',
        divider: 'var(--color-divider)',

        // Status colors
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',

        // Brand colors (Discord-inspired)
        brand: 'var(--color-brand)',
        'brand-hover': 'var(--color-brandHover)',
        'brand-active': 'var(--color-brandActive)',

        // Message colors
        'user-message': 'var(--color-userMessage)',
        'tutor-message': 'var(--color-tutorMessage)',
        'system-message': 'var(--color-systemMessage)',
      },

      // Custom shadows using CSS variables
      boxShadow: {
        'theme-sm': 'var(--shadow-sm)',
        'theme-md': 'var(--shadow-md)',
        'theme-lg': 'var(--shadow-lg)',
        'theme-xl': 'var(--shadow-xl)',
      },

      // Custom border radius using CSS variables
      borderRadius: {
        'theme-sm': 'var(--radius-sm)',
        'theme-md': 'var(--radius-md)',
        'theme-lg': 'var(--radius-lg)',
        'theme-xl': 'var(--radius-xl)',
      },

      // Discord-inspired spacing and sizing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        // Safe area insets for iOS notch/dynamic island
        'safe-top': 'env(safe-area-inset-top)',
        'safe-right': 'env(safe-area-inset-right)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
      },

      // Safe area padding utilities
      padding: {
        'safe': 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
        'safe-t': 'env(safe-area-inset-top)',
        'safe-r': 'env(safe-area-inset-right)',
        'safe-b': 'env(safe-area-inset-bottom)',
        'safe-l': 'env(safe-area-inset-left)',
      },

      // Min height for mobile dynamic viewport
      minHeight: {
        'screen-dynamic': '100dvh',
      },

      // Typography extensions
      fontFamily: {
        'ui': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },

      // Animation extensions
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },

      // Custom keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },

      // Z-index scale
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      // Backdrop blur
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    // Custom plugin for theme-aware utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.bg-theme-primary': {
          backgroundColor: 'var(--color-primary)',
        },
        '.bg-theme-secondary': {
          backgroundColor: 'var(--color-secondary)',
        },
        '.bg-theme-interactive': {
          backgroundColor: 'var(--color-interactive)',
        },
        '.text-theme-primary': {
          color: 'var(--color-textPrimary)',
        },
        '.text-theme-secondary': {
          color: 'var(--color-textSecondary)',
        },
        '.text-theme-muted': {
          color: 'var(--color-textMuted)',
        },
        '.border-theme': {
          borderColor: 'var(--color-border)',
        },
        '.shadow-theme': {
          boxShadow: 'var(--shadow-md)',
        },
        '.rounded-theme': {
          borderRadius: 'var(--radius-md)',
        },
        // Hover utilities
        '.hover-interactive': {
          '&:hover': {
            backgroundColor: 'var(--color-interactive)',
          },
        },
        '.hover-brand': {
          '&:hover': {
            backgroundColor: 'var(--color-brandHover)',
          },
        },
      };

      addUtilities(newUtilities);
    },
  ],
}