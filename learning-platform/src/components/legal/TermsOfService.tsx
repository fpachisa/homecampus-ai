import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useThemeContext } from '../../contexts/ThemeContext';
import logoLight from '/logo.png?url';
import logoDark from '/logo-dark.png?url';

export const TermsOfService: React.FC = () => {
  const { theme } = useTheme();
  const { isDark } = useThemeContext();
  const logoSrc = isDark ? logoDark : logoLight;

  return (
    <div
      className="min-h-screen"
      style={{
        background: theme.gradients.panel,
        color: theme.colors.textPrimary,
      }}
    >
      {/* Header */}
      <header
        className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6"
        style={{ borderBottom: `1px solid ${theme.colors.border}` }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoSrc} alt="Home Campus" className="w-10 h-10 object-contain" />
            <span
              className="text-xl font-bold"
              style={{ color: theme.colors.textPrimary }}
            >
              Home Campus
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
            style={{
              color: theme.colors.textSecondary,
              backgroundColor: theme.colors.interactive,
            }}
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: theme.colors.textPrimary }}
          >
            Terms of Service
          </h1>
          <p
            className="text-sm mb-8"
            style={{ color: theme.colors.textMuted }}
          >
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div
            className="prose prose-lg max-w-none space-y-8"
            style={{ color: theme.colors.textSecondary }}
          >
            {/* Introduction */}
            <section>
              <p className="text-base leading-relaxed">
                Welcome to Home Campus. These Terms of Service ("Terms") govern your use of our AI tutoring platform and services. By accessing or using Home Campus, you agree to be bound by these Terms.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                1. Acceptance of Terms
              </h2>
              <p className="text-base leading-relaxed">
                By creating an account or using Home Campus, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are a parent or guardian creating an account for a minor, you agree to these Terms on behalf of your child and accept responsibility for their use of the service.
              </p>
            </section>

            {/* Description of Service */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                2. Description of Service
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Home Campus provides an AI-powered tutoring platform designed to help students learn mathematics through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Interactive AI tutoring using Socratic teaching methods</li>
                <li>Personalized practice problems and learning paths</li>
                <li>Progress tracking and performance analytics</li>
                <li>Parent monitoring dashboards</li>
                <li>Exam preparation materials</li>
              </ul>
            </section>

            {/* User Accounts */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                3. User Accounts
              </h2>
              <p className="text-base leading-relaxed mb-4">
                To use Home Campus, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                For student accounts of users under 13, parental consent is required. Parents maintain oversight and can access their child's account data.
              </p>
            </section>

            {/* Acceptable Use */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                4. Acceptable Use
              </h2>
              <p className="text-base leading-relaxed mb-4">
                You agree to use Home Campus only for lawful educational purposes. You shall not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Share your account credentials with others</li>
                <li>Attempt to manipulate or game the learning system</li>
                <li>Use automated systems to access the service</li>
                <li>Upload harmful, inappropriate, or illegal content</li>
                <li>Attempt to reverse engineer or exploit the AI system</li>
                <li>Interfere with other users' experience</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                5. Intellectual Property
              </h2>
              <p className="text-base leading-relaxed">
                All content, features, and functionality of Home Campus—including but not limited to text, graphics, logos, AI algorithms, curriculum content, and software—are owned by Home Campus and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            {/* AI-Generated Content */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                6. AI-Generated Content
              </h2>
              <p className="text-base leading-relaxed">
                Our AI tutor generates personalized responses and explanations. While we strive for accuracy, AI-generated content may occasionally contain errors. The service is designed to supplement, not replace, classroom education and professional academic guidance.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                7. Limitation of Liability
              </h2>
              <p className="text-base leading-relaxed">
                Home Campus is provided "as is" without warranties of any kind. We do not guarantee specific educational outcomes or improvements in academic performance. To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service.
              </p>
            </section>

            {/* Privacy */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                8. Privacy
              </h2>
              <p className="text-base leading-relaxed">
                Your use of Home Campus is also governed by our{' '}
                <Link
                  to="/privacy"
                  style={{ color: theme.colors.brand }}
                  className="hover:underline"
                >
                  Privacy Policy
                </Link>
                , which describes how we collect, use, and protect your information.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                9. Termination
              </h2>
              <p className="text-base leading-relaxed">
                We may suspend or terminate your access to Home Campus at any time, with or without cause or notice. You may also delete your account at any time. Upon termination, your right to use the service will immediately cease.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                10. Changes to Terms
              </h2>
              <p className="text-base leading-relaxed">
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our platform and updating the "Last updated" date. Your continued use of Home Campus after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                11. Governing Law
              </h2>
              <p className="text-base leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law provisions.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                12. Contact Us
              </h2>
              <p className="text-base leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-base mt-2">
                <a
                  href="mailto:support@homecampus.sg"
                  style={{ color: theme.colors.brand }}
                  className="hover:underline"
                >
                  support@homecampus.sg
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="px-4 sm:px-6 lg:px-8 py-6"
        style={{ borderTop: `1px solid ${theme.colors.border}` }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm" style={{ color: theme.colors.textMuted }}>
            © {new Date().getFullYear()} Home Campus. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
