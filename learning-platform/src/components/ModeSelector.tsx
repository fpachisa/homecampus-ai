import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { BackButton } from './BackButton';

interface ModeSelectorProps {
  category: string;
  onModeSelect: (mode: 'socratic' | 'practice') => void;
  onBack: () => void;
}

interface TopicMetadata {
  displayName: string;
  icon: string;
  grade: string;
  subject: string;
}

function getTopicMetadata(category: string): TopicMetadata {
  switch (category) {
    case 'fractions':
      return {
        displayName: 'Fractions',
        icon: '➗',
        grade: 'Primary 6',
        subject: 'Mathematics'
      };
    case 's3-math-trigonometry':
      return {
        displayName: 'Trigonometry',
        icon: '📐',
        grade: 'Secondary 3',
        subject: 'Mathematics'
      };
    case 's3-math-circle-geometry':
      return {
        displayName: 'Circle Geometry',
        icon: '⭕',
        grade: 'Secondary 3',
        subject: 'Mathematics'
      };
    case 's3-math-quadratic-equations':
      return {
        displayName: 'Quadratic Equations',
        icon: '📈',
        grade: 'Secondary 3',
        subject: 'Mathematics'
      };
    case 's3-math-exponential-logarithms':
      return {
        displayName: 'Exponential & Logarithms',
        icon: '📊',
        grade: 'Secondary 3',
        subject: 'Mathematics'
      };
    default:
      return {
        displayName: category,
        icon: '📚',
        grade: 'Unknown',
        subject: 'Mathematics'
      };
  }
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ category, onModeSelect, onBack }) => {
  const { theme } = useTheme();
  const metadata = getTopicMetadata(category);

  const handleSocraticMode = () => {
    onModeSelect('socratic');
  };

  const handlePracticeMode = () => {
    // New path-based practice system
    onModeSelect('practice');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: theme.gradients.panel,
        color: theme.colors.textPrimary
      }}
    >
      {/* Background texture */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(88, 101, 242, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(71, 82, 196, 0.05) 0%, transparent 50%)'
        }}
      />

      <div className="relative z-10 max-w-4xl w-full">
        {/* Back Button */}
        <div className="mb-6">
          <BackButton onClick={onBack} label="Back to Topics" />
        </div>

        {/* Header */}
        <div className="text-center mb-12">

          {/* Topic Icon and Name */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{ backgroundColor: theme.colors.brand }}
            >
              {metadata.icon}
            </div>
            <h2 className="text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
              {metadata.displayName}
            </h2>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold mb-3" style={{ color: theme.colors.textPrimary }}>
            Choose Your Learning Mode
          </h1>
        </div>

        {/* Mode Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Socratic Learning Mode */}
          <button
            onClick={handleSocraticMode}
            className="group relative p-8 rounded-2xl transition-all duration-300 text-left"
            style={{
              background: theme.glass.background,
              border: `1px solid ${theme.glass.border}`,
              backdropFilter: theme.glass.backdrop,
              boxShadow: theme.shadows.md,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = theme.shadows.glow;
              e.currentTarget.style.borderColor = '#5865F2' + '50';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = theme.shadows.md;
              e.currentTarget.style.borderColor = theme.glass.border;
            }}
          >
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6"
              style={{
                backgroundColor: '#5865F2' + '20',
                color: '#5865F2'
              }}
            >
              🎓
            </div>

            {/* Content */}
            <h2 className="text-2xl font-bold mb-3" style={{ color: theme.colors.textPrimary }}>
              Socratic Learning
            </h2>
            <p className="text-base mb-6" style={{ color: theme.colors.textSecondary }}>
              AI-guided step-by-step learning with hints, explanations, and adaptive difficulty
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-6 text-sm" style={{ color: theme.colors.textSecondary }}>
              <li className="flex items-start space-x-2">
                <span style={{ color: '#5865F2' }}>✓</span>
                <span>Personalized hints when stuck</span>
              </li>
              <li className="flex items-start space-x-2">
                <span style={{ color: '#5865F2' }}>✓</span>
                <span>Visual step-by-step solutions</span>
              </li>
              <li className="flex items-start space-x-2">
                <span style={{ color: '#5865F2' }}>✓</span>
                <span>Adaptive difficulty progression</span>
              </li>
              <li className="flex items-start space-x-2">
                <span style={{ color: '#5865F2' }}>✓</span>
                <span>Master topics to 100%</span>
              </li>
            </ul>

            {/* Button */}
            <div
              className="px-6 py-3 rounded-lg text-center font-semibold transition-all duration-200"
              style={{
                backgroundColor: '#5865F2' + '20',
                color: '#5865F2'
              }}
            >
              Start Learning →
            </div>

            {/* Best for badge */}
            <div
              className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: '#5865F2' + '20',
                color: '#5865F2'
              }}
            >
              Best for Beginners
            </div>
          </button>

          {/* Practice Mode */}
          <button
            onClick={handlePracticeMode}
            className="group relative p-8 rounded-2xl transition-all duration-300 text-left"
            style={{
              background: theme.glass.background,
              border: `1px solid ${theme.glass.border}`,
              backdropFilter: theme.glass.backdrop,
              boxShadow: theme.shadows.md,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = theme.shadows.glow;
              e.currentTarget.style.borderColor = '#57F287' + '50';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = theme.shadows.md;
              e.currentTarget.style.borderColor = theme.glass.border;
            }}
          >
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6"
              style={{
                backgroundColor: '#57F287' + '20',
                color: '#57F287'
              }}
            >
              ⚡
            </div>

            {/* Content */}
            <h2 className="text-2xl font-bold mb-3" style={{ color: theme.colors.textPrimary }}>
              Practice Mode
            </h2>
            <p className="text-base mb-6" style={{ color: theme.colors.textSecondary }}>
              Quick practice with instant feedback. Perfect for drilling and building speed
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-6 text-sm" style={{ color: theme.colors.textSecondary }}>
              <li className="flex items-start space-x-2">
                <span style={{ color: '#57F287' }}>✓</span>
                <span>Instant correct/incorrect feedback</span>
              </li>
              <li className="flex items-start space-x-2">
                <span style={{ color: '#57F287' }}>✓</span>
                <span>View solutions when needed</span>
              </li>
              <li className="flex items-start space-x-2">
                <span style={{ color: '#57F287' }}>✓</span>
                <span>Build speed and accuracy</span>
              </li>
              <li className="flex items-start space-x-2">
                <span style={{ color: '#57F287' }}>✓</span>
                <span>Track streaks and progress</span>
              </li>
            </ul>

            {/* Button */}
            <div
              className="px-6 py-3 rounded-lg text-center font-semibold transition-all duration-200"
              style={{
                backgroundColor: '#57F287' + '20',
                color: '#57F287'
              }}
            >
              Start Practicing →
            </div>

            {/* Best for badge */}
            <div
              className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: '#57F287' + '20',
                color: '#57F287'
              }}
            >
              Best for Review
            </div>
          </button>
        </div>

        {/* Info Footer */}
        <div
          className="mt-8 p-6 rounded-xl text-center"
          style={{
            background: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop
          }}
        >
          <p className="text-sm" style={{ color: theme.colors.textMuted }}>
            💡 <strong>Tip:</strong> Use Socratic Learning to master new concepts, then switch to Practice Mode to build fluency
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModeSelector;
