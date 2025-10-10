import React, { forwardRef, useState } from 'react';
import type { ImgHTMLAttributes } from 'react';
import { useTheme } from '../../hooks/useTheme';

export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'size' | 'loading'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'circular' | 'rounded' | 'square';
  fallback?: string;
  name?: string;
  status?: 'online' | 'offline' | 'away' | 'busy';
  showStatus?: boolean;
  interactive?: boolean;
  loading?: boolean;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt,
      size = 'md',
      variant = 'circular',
      fallback,
      name,
      status,
      showStatus = false,
      interactive = false,
      loading = false,
      className = '',
      style,
      onClick,
      ...props
    },
    ref
  ) => {
    const { theme } = useTheme();
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    // Size configurations
    const sizeConfig = {
      xs: {
        container: 'w-6 h-6',
        text: 'text-xs',
        status: 'w-2 h-2',
        statusOffset: '-top-0.5 -right-0.5',
      },
      sm: {
        container: 'w-8 h-8',
        text: 'text-sm',
        status: 'w-2.5 h-2.5',
        statusOffset: '-top-0.5 -right-0.5',
      },
      md: {
        container: 'w-10 h-10',
        text: 'text-base',
        status: 'w-3 h-3',
        statusOffset: '-top-1 -right-1',
      },
      lg: {
        container: 'w-12 h-12',
        text: 'text-lg',
        status: 'w-3.5 h-3.5',
        statusOffset: '-top-1 -right-1',
      },
      xl: {
        container: 'w-16 h-16',
        text: 'text-xl',
        status: 'w-4 h-4',
        statusOffset: '-top-1.5 -right-1.5',
      },
      '2xl': {
        container: 'w-20 h-20',
        text: 'text-2xl',
        status: 'w-5 h-5',
        statusOffset: '-top-2 -right-2',
      },
    };

    // Variant configurations
    const variantConfig = {
      circular: 'rounded-full',
      rounded: 'rounded-lg',
      square: 'rounded-none',
    };

    // Status colors
    const statusColors = {
      online: theme.colors.success,
      offline: theme.colors.textMuted,
      away: theme.colors.warning,
      busy: theme.colors.error,
    };

    const config = sizeConfig[size];
    const borderRadius = variantConfig[variant];

    // Generate initials from name
    const getInitials = (name: string): string => {
      return name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2);
    };

    // Generate consistent color from name
    const getNameColor = (name: string): string => {
      const colors = [
        theme.colors.brand,
        theme.colors.success,
        theme.colors.warning,
        theme.colors.info,
        '#8b5cf6', // purple
        '#06b6d4', // cyan
        '#84cc16', // lime
        '#f59e0b', // amber
      ];

      const hash = name.split('').reduce((acc, char) => {
        return char.charCodeAt(0) + ((acc << 5) - acc);
      }, 0);

      return colors[Math.abs(hash) % colors.length];
    };

    const containerStyles = {
      position: 'relative' as const,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'all 0.2s ease-in-out',
      backgroundColor: theme.colors.interactive,
      color: theme.colors.textPrimary,
      ...style,
    };

    const handleImageError = () => {
      setImageError(true);
      setImageLoading(false);
    };

    const handleImageLoad = () => {
      setImageLoading(false);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (interactive && onClick) {
        onClick(e as any);
      }
    };

    const renderContent = () => {
      if (loading || (src && imageLoading && !imageError)) {
        return (
          <div className="animate-pulse">
            <div
              className="w-full h-full"
              style={{ backgroundColor: theme.colors.interactive }}
            />
          </div>
        );
      }

      if (src && !imageError) {
        return (
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            className="w-full h-full object-cover"
            onError={handleImageError}
            onLoad={handleImageLoad}
            {...props}
          />
        );
      }

      if (name) {
        return (
          <div
            className={`w-full h-full flex items-center justify-center font-medium ${config.text}`}
            style={{
              backgroundColor: getNameColor(name),
              color: '#ffffff',
            }}
          >
            {getInitials(name)}
          </div>
        );
      }

      if (fallback) {
        return (
          <div
            className={`w-full h-full flex items-center justify-center ${config.text}`}
            style={{
              backgroundColor: theme.colors.interactive,
              color: theme.colors.textSecondary,
            }}
          >
            {fallback}
          </div>
        );
      }

      // Default fallback
      return (
        <div
          className={`w-full h-full flex items-center justify-center ${config.text}`}
          style={{
            backgroundColor: theme.colors.interactive,
            color: theme.colors.textSecondary,
          }}
        >
          <svg className="w-1/2 h-1/2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={`${config.container} ${borderRadius} ${className}`}
        style={containerStyles}
        onClick={handleClick}
      >
        {renderContent()}

        {/* Status Indicator */}
        {showStatus && status && (
          <div
            className={`absolute ${config.status} ${config.statusOffset} ${borderRadius} border-2`}
            style={{
              backgroundColor: statusColors[status],
              borderColor: theme.colors.primary,
            }}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

// Avatar Group Component
export interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  size?: AvatarProps['size'];
  spacing?: 'tight' | 'normal' | 'loose';
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  max = 5,
  size = 'md',
  spacing = 'normal',
}) => {
  const { theme } = useTheme();
  const avatars = React.Children.toArray(children);
  const visibleAvatars = avatars.slice(0, max);
  const hiddenCount = Math.max(0, avatars.length - max);

  const spacingConfig = {
    tight: '-ml-2',
    normal: '-ml-3',
    loose: '-ml-4',
  };

  const sizeConfig = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-20 h-20',
  };

  return (
    <div className="flex items-center">
      {visibleAvatars.map((avatar, index) => (
        <div
          key={index}
          className={`${index > 0 ? spacingConfig[spacing] : ''} relative`}
          style={{ zIndex: visibleAvatars.length - index }}
        >
          {React.cloneElement(avatar as React.ReactElement<AvatarProps>, { size })}
        </div>
      ))}

      {hiddenCount > 0 && (
        <div
          className={`${spacingConfig[spacing]} ${sizeConfig[size]} rounded-full flex items-center justify-center text-xs font-medium border-2`}
          style={{
            backgroundColor: theme.colors.interactive,
            color: theme.colors.textSecondary,
            borderColor: theme.colors.primary,
            zIndex: 0,
          }}
        >
          +{hiddenCount}
        </div>
      )}
    </div>
  );
};