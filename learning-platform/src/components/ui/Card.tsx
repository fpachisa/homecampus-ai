import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { useTheme } from '../../hooks/useTheme';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'user' | 'tutor' | 'system' | 'elevated';
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  selected?: boolean;
  avatar?: ReactNode;
  timestamp?: string;
  actions?: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      size = 'md',
      interactive = false,
      selected = false,
      avatar,
      timestamp,
      actions,
      className = '',
      style,
      onClick,
      ...props
    },
    ref
  ) => {
    const { theme } = useTheme();

    // Size configurations
    const sizeConfig = {
      sm: {
        padding: 'p-3',
        text: 'text-sm',
        avatarSize: 'w-6 h-6',
      },
      md: {
        padding: 'p-4',
        text: 'text-sm',
        avatarSize: 'w-8 h-8',
      },
      lg: {
        padding: 'p-6',
        text: 'text-base',
        avatarSize: 'w-10 h-10',
      },
    };

    // Variant configurations
    const getVariantStyles = () => {
      const variants = {
        default: {
          backgroundColor: theme.colors.secondary,
          color: theme.colors.textPrimary,
          border: `1px solid ${theme.colors.border}`,
        },
        user: {
          backgroundColor: theme.colors.userMessage,
          color: '#ffffff',
          border: 'none',
        },
        tutor: {
          backgroundColor: theme.colors.tutorMessage,
          color: theme.colors.textPrimary,
          border: 'none',
        },
        system: {
          backgroundColor: theme.colors.systemMessage,
          color: '#ffffff',
          border: 'none',
        },
        elevated: {
          backgroundColor: theme.colors.primary,
          color: theme.colors.textPrimary,
          border: 'none',
          boxShadow: theme.shadows.md,
        },
      };

      return variants[variant];
    };

    const variantStyles = getVariantStyles();
    const config = sizeConfig[size];

    const cardStyles = {
      borderRadius: theme.radius.lg,
      transition: 'all 0.2s ease-in-out',
      cursor: interactive ? 'pointer' : 'default',
      position: 'relative' as const,
      ...variantStyles,
      ...(selected && {
        boxShadow: `0 0 0 2px ${theme.colors.brand}`,
      }),
      ...(interactive && {
        ':hover': {
          transform: 'translateY(-1px)',
          boxShadow: theme.shadows.lg,
        },
      }),
      ...style,
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (interactive && onClick) {
        onClick(e);
      }
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      if (interactive) {
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.boxShadow = theme.shadows.lg;
      }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      if (interactive) {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = (variantStyles as any).boxShadow || 'none';
      }
    };

    return (
      <div
        ref={ref}
        className={`${config.padding} ${config.text} ${className}`}
        style={cardStyles}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Header with Avatar and Timestamp */}
        {(avatar || timestamp || actions) && (
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3">
              {avatar && (
                <div className={`${config.avatarSize} flex-shrink-0`}>
                  {avatar}
                </div>
              )}
              {timestamp && (
                <span
                  className="text-xs"
                  style={{
                    color: variant === 'user' || variant === 'system'
                      ? 'rgba(255, 255, 255, 0.8)'
                      : theme.colors.textMuted
                  }}
                >
                  {timestamp}
                </span>
              )}
            </div>
            {actions && (
              <div className="flex items-center space-x-1">
                {actions}
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="space-y-2">
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';

// Message Card specialized component
export type MessageCardProps = Omit<CardProps, 'children' | 'variant'> & {
  role: 'user' | 'tutor' | 'system';
  author?: string;
  content?: ReactNode;
  reactions?: Array<{ emoji: string; count: number; active?: boolean }>;
  onReaction?: (emoji: string) => void;
};

export const MessageCard = forwardRef<HTMLDivElement, MessageCardProps>(
  (
    {
      role,
      author,
      content,
      reactions,
      onReaction,
      timestamp,
      ...props
    },
    ref
  ) => {
    const { theme } = useTheme();

    const avatarMap = {
      user: '👤',
      tutor: '📚',
      system: '⚙️',
    };

    const Avatar = () => (
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium"
        style={{
          backgroundColor: role === 'user' ? theme.colors.brand :
                          role === 'tutor' ? theme.colors.success :
                          theme.colors.interactive,
          color: '#ffffff',
        }}
      >
        {avatarMap[role]}
      </div>
    );

    const Actions = () => (
      <>
        {reactions && reactions.length > 0 && (
          <div className="flex items-center space-x-1">
            {reactions.map((reaction, index) => (
              <button
                key={index}
                onClick={() => onReaction?.(reaction.emoji)}
                className={`px-2 py-1 rounded-full text-xs transition-colors duration-200 ${
                  reaction.active ? 'bg-brand/20' : 'bg-interactive/50'
                }`}
                style={{
                  backgroundColor: reaction.active
                    ? `${theme.colors.brand}20`
                    : `${theme.colors.interactive}50`,
                  cursor: 'pointer',
                }}
              >
                {reaction.emoji} {reaction.count}
              </button>
            ))}
          </div>
        )}
        <button
          className="p-1 rounded-md opacity-60 hover:opacity-100 transition-opacity duration-200"
          style={{ color: 'currentColor', cursor: 'pointer' }}
          title="More actions"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </>
    );

    return (
      <Card
        ref={ref}
        variant={role}
        avatar={<Avatar />}
        timestamp={timestamp}
        actions={<Actions />}
        {...props}
      >
        {author && (
          <div className="font-medium text-sm mb-1 opacity-90">
            {author}
          </div>
        )}
        <div>{content}</div>
      </Card>
    );
  }
);

MessageCard.displayName = 'MessageCard';