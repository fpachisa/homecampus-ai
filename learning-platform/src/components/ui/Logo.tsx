import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import logoLight from '/logo.png?url';
import logoDark from '/logo-dark.png?url';

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  showTagline?: boolean;
  animated?: boolean;
  linkToHome?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10 sm:w-12 sm:h-12',
  lg: 'w-12 h-12 sm:w-14 sm:h-14',
};

const textSizeClasses = {
  sm: 'text-base sm:text-lg',
  md: 'text-lg sm:text-xl lg:text-2xl',
  lg: 'text-xl sm:text-2xl lg:text-3xl',
};

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  (
    {
      size = 'md',
      showText = false,
      showTagline = false,
      animated = false,
      linkToHome = false,
      className = '',
    },
    ref
  ) => {
    const { isDark, theme } = useTheme();
    const logoSrc = isDark ? logoDark : logoLight;

    const content = (
      <div
        ref={ref}
        className={`flex items-center space-x-2 sm:space-x-3 ${className}`}
      >
        <div
          className={`${sizeClasses[size]} flex items-center justify-center ${
            animated ? 'animate-float' : ''
          }`}
        >
          <img
            src={logoSrc}
            alt="Home Campus Logo"
            className={`${sizeClasses[size]} object-contain`}
          />
        </div>
        {showText && (
          <div>
            <h1
              className={`${textSizeClasses[size]} font-bold`}
              style={{ color: theme.colors.textPrimary }}
            >
              Home Campus
            </h1>
            {showTagline && (
              <p
                className="text-xs sm:text-sm"
                style={{ color: theme.colors.textMuted }}
              >
                AI-Powered Home Learning
              </p>
            )}
          </div>
        )}
      </div>
    );

    if (linkToHome) {
      return (
        <Link to="/home" className="no-underline">
          {content}
        </Link>
      );
    }

    return content;
  }
);

Logo.displayName = 'Logo';
