import { forwardRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

export interface NavLinkProps {
  to: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: 'sidebar' | 'topbar' | 'footer';
  collapsed?: boolean;
  onClick?: () => void;
  className?: string;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    {
      to,
      icon,
      children,
      variant = 'sidebar',
      collapsed = false,
      onClick,
      className = '',
    },
    ref
  ) => {
    const { theme } = useTheme();
    const location = useLocation();
    const [isHovered, setIsHovered] = useState(false);

    // Check if this link is active
    const isActive =
      location.pathname === to || location.pathname.startsWith(`${to}/`);

    // Get styles based on variant and state
    const getStyles = () => {
      const baseStyles: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: collapsed ? '0' : '0.75rem',
        borderRadius: theme.radius.md,
        transition: 'all 0.2s ease',
        textDecoration: 'none',
        justifyContent: collapsed ? 'center' : 'flex-start',
        fontWeight: isActive ? 600 : 500,
      };

      // Variant-specific styles
      switch (variant) {
        case 'sidebar':
          return {
            ...baseStyles,
            padding: collapsed ? '0.75rem' : '0.75rem 1rem',
            color: isActive
              ? theme.colors.brand
              : isHovered
                ? theme.colors.textPrimary
                : theme.colors.textSecondary,
            backgroundColor: isActive
              ? `${theme.colors.brand}15`
              : isHovered
                ? theme.colors.interactive
                : 'transparent',
          };

        case 'topbar':
          return {
            ...baseStyles,
            padding: '0.5rem 0.75rem',
            color: isActive
              ? theme.colors.brand
              : isHovered
                ? theme.colors.textPrimary
                : theme.colors.textSecondary,
            backgroundColor: isHovered ? theme.colors.interactive : 'transparent',
          };

        case 'footer':
          return {
            ...baseStyles,
            padding: '0.25rem 0',
            color: isHovered ? theme.colors.textPrimary : theme.colors.textSecondary,
            backgroundColor: 'transparent',
          };

        default:
          return baseStyles;
      }
    };

    return (
      <Link
        ref={ref}
        to={to}
        className={className}
        style={getStyles()}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title={collapsed ? String(children) : undefined}
      >
        {icon && <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center">{icon}</span>}
        {!collapsed && <span>{children}</span>}
      </Link>
    );
  }
);

NavLink.displayName = 'NavLink';
