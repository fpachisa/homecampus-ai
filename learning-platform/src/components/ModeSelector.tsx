import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import type { TopicId } from '../prompts/topics/P6-Math-Fractions';
import type { TrigonometryTopicId } from './TrigonometryTopicView';
import type { PracticeConfig } from '../types/types';
import { notesLoader } from '../services/notesLoader';
import NotesViewer from './NotesViewer';

interface ModeSelectorProps {
  topicId: TopicId | TrigonometryTopicId;
  onModeSelect: (mode: 'socratic' | 'practice', config?: PracticeConfig) => void;
  onBack: () => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ topicId, onModeSelect, onBack }) => {
  const { theme } = useTheme();
  const [hasNotes, setHasNotes] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    // Check if notes are available for this topic
    notesLoader.hasNotes(topicId).then(setHasNotes);
  }, [topicId]);

  const handleSocraticMode = () => {
    onModeSelect('socratic');
  };

  const handlePracticeMode = () => {
    // Start with progressive difficulty mode by default
    const config: PracticeConfig = {
      mode: 'subtopic',
      subtopicId: topicId,
      problemTypes: undefined, // Will be determined by difficulty
      totalProblems: undefined, // Unlimited
      showSolutions: true,
      difficulty: 'progressive', // Default to progressive mode
      progressiveConfig: undefined // Will use defaults
    };
    onModeSelect('practice', config);
  };

  const handleViewNotes = () => {
    setShowNotes(true);
  };

  if (showNotes) {
    return <NotesViewer subtopicId={topicId} onClose={() => setShowNotes(false)} />;
  }

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
        <button
          onClick={onBack}
          className="mb-6 p-2 rounded-lg transition-all duration-200"
          style={{
            backgroundColor: theme.colors.interactive,
            color: theme.colors.textSecondary
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.brand;
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.interactive;
            e.currentTarget.style.color = theme.colors.textSecondary;
          }}
          title="Back to Topics"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl text-white mx-auto mb-6"
            style={{ backgroundColor: theme.colors.brand }}
          >
            🎯
          </div>
          <h1 className="text-4xl font-bold mb-3" style={{ color: theme.colors.textPrimary }}>
            Choose Your Learning Mode
          </h1>
          <p className="text-lg" style={{ color: theme.colors.textSecondary }}>
            How would you like to practice today?
          </p>
        </div>

        {/* View Notes Button */}
        {hasNotes && (
          <div className="mb-8 text-center">
            <button
              onClick={handleViewNotes}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-200"
              style={{
                background: theme.glass.background,
                border: `1px solid ${theme.glass.border}`,
                backdropFilter: theme.glass.backdrop,
                color: theme.colors.textPrimary
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = theme.shadows.md;
                e.currentTarget.style.borderColor = '#FFA500';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = theme.glass.border;
              }}
            >
              <span className="text-2xl">📖</span>
              <span className="font-semibold">View Study Notes</span>
            </button>
          </div>
        )}

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
              boxShadow: theme.shadows.md
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
              boxShadow: theme.shadows.md
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
