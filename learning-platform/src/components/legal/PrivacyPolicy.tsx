import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useThemeContext } from '../../contexts/ThemeContext';
import logoLight from '/logo.png?url';
import logoDark from '/logo-dark.png?url';

export const PrivacyPolicy: React.FC = () => {
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
            Privacy Policy
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
                Home Campus ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI tutoring platform.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                Information We Collect
              </h2>
              <h3
                className="text-lg font-medium mb-2"
                style={{ color: theme.colors.textPrimary }}
              >
                Personal Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Name and email address when you create an account</li>
                <li>Grade level and school information</li>
                <li>Parent/guardian contact information (for student accounts)</li>
                <li>Profile preferences and settings</li>
              </ul>

              <h3
                className="text-lg font-medium mb-2 mt-4"
                style={{ color: theme.colors.textPrimary }}
              >
                Learning Data
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Answers and interactions with the AI tutor</li>
                <li>Progress data including scores, streaks, and time spent</li>
                <li>Topics studied and mastery levels</li>
                <li>Practice and homework submissions</li>
              </ul>

              <h3
                className="text-lg font-medium mb-2 mt-4"
                style={{ color: theme.colors.textPrimary }}
              >
                Technical Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Device type and browser information</li>
                <li>IP address and approximate location</li>
                <li>Usage patterns and session data</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Provide personalized AI tutoring experiences</li>
                <li>Track and display learning progress</li>
                <li>Enable parent monitoring of student progress</li>
                <li>Improve our AI algorithms and educational content</li>
                <li>Communicate important updates about our service</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
            </section>

            {/* Data Storage & Security */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                Data Storage & Security
              </h2>
              <p className="text-base leading-relaxed">
                We use industry-standard security measures to protect your data. Your information is stored on secure servers provided by Firebase (Google Cloud Platform). We use encryption for data transmission and implement access controls to protect stored data.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                Third-Party Services
              </h2>
              <p className="text-base leading-relaxed mb-4">
                We use the following third-party services to provide our platform:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><strong>Firebase (Google)</strong> - Authentication and data storage</li>
                <li><strong>Google Gemini AI</strong> - AI tutoring capabilities</li>
                <li><strong>Google Cloud Text-to-Speech</strong> - Voice features</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                These services have their own privacy policies governing data handling.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                Children's Privacy
              </h2>
              <p className="text-base leading-relaxed">
                Home Campus is designed for K-12 students. We are committed to protecting children's privacy. Student accounts for users under 13 require parental consent and oversight. Parents can review, modify, or delete their child's data at any time through their parent dashboard.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                Data Retention
              </h2>
              <p className="text-base leading-relaxed">
                We retain your personal information for as long as your account is active or as needed to provide you services. You may request deletion of your account and associated data at any time by contacting us.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                Your Rights
              </h2>
              <p className="text-base leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your learning data</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                Contact Us
              </h2>
              <p className="text-base leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="text-base mt-2">
                <a
                  href="mailto:aitutor@homecampus.ai"
                  style={{ color: theme.colors.brand }}
                  className="hover:underline"
                >
                  aitutor@homecampus.ai
                </a>
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                Changes to This Policy
              </h2>
              <p className="text-base leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
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

export default PrivacyPolicy;
