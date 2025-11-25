import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { Logo } from '../ui/Logo';

export interface AppFooterProps {
  variant?: 'full' | 'minimal';
  className?: string;
}

export const AppFooter = forwardRef<HTMLElement, AppFooterProps>(
  ({ variant = 'minimal', className = '' }, ref) => {
    const { theme } = useTheme();

    if (variant === 'minimal') {
      return (
        <footer
          ref={ref}
          className={`px-4 sm:px-6 lg:px-8 py-4 border-t ${className}`}
          style={{ borderColor: theme.colors.border }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm" style={{ color: theme.colors.textMuted }}>
              AI-powered Socratic learning
            </p>
          </div>
        </footer>
      );
    }

    // Full footer variant
    return (
      <footer
        ref={ref}
        className={`px-4 sm:px-6 lg:px-8 py-12 border-t ${className}`}
        style={{
          borderColor: theme.colors.border,
          backgroundColor: theme.colors.secondary,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Logo & Tagline */}
            <div>
              <Logo size="md" showText showTagline />
              <p
                className="mt-4 text-sm"
                style={{ color: theme.colors.textMuted }}
              >
                Empowering students with AI-driven personalized learning
                experiences.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3
                className="font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  { label: 'Features', href: '#features' },
                  { label: 'How It Works', href: '#how-it-works' },
                  { label: 'Testimonials', href: '#testimonials' },
                  { label: 'Get Started', href: '#get-started' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:underline"
                      style={{ color: theme.colors.textSecondary }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = theme.colors.textPrimary;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = theme.colors.textSecondary;
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h3
                className="font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    className="text-sm transition-colors hover:underline"
                    style={{ color: theme.colors.textSecondary }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.colors.textPrimary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.colors.textSecondary;
                    }}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-sm transition-colors hover:underline"
                    style={{ color: theme.colors.textSecondary }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.colors.textPrimary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.colors.textSecondary;
                    }}
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:support@homecampus.ai"
                    className="text-sm transition-colors hover:underline"
                    style={{ color: theme.colors.textSecondary }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.colors.textPrimary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.colors.textSecondary;
                    }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div
            className="mt-8 pt-8 border-t text-center"
            style={{ borderColor: theme.colors.border }}
          >
            <p className="text-sm" style={{ color: theme.colors.textMuted }}>
              &copy; {new Date().getFullYear()} Home Campus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
);

AppFooter.displayName = 'AppFooter';
