import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import ChatInterface from '../ChatInterface';
import SubtopicWelcomeScreen from '../SubtopicWelcomeScreen';
import { sessionStorage } from '../../services/sessionStorage';
import { getFirstSubtopicId } from '../../utils/topicHelpers';
import type { LayoutActions, LayoutState } from './MainLayout';

interface CenterPanelProps {
  layoutActions: LayoutActions;
  layoutState: LayoutState;
}

const CenterPanel: React.FC<CenterPanelProps> = ({ layoutActions, layoutState }) => {
  const { theme, toggleTheme } = useTheme();
  const { pathId } = useParams<{ pathId: string }>();
  const [searchParams] = useSearchParams();
  const { goToHome } = useAppNavigation();
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  // Get section and topic from query params
  const section = searchParams.get('section') || '1';
  const topicFromQuery = searchParams.get('topic');

  // Determine the actual subtopic ID to use:
  // 1. Use topic from query param if provided
  // 2. Otherwise, use first subtopic for the path
  const selectedTopic = topicFromQuery || (pathId ? getFirstSubtopicId(pathId) : null);

  // Category is the pathId (e.g., 's4-math-probability')
  const category = pathId || '';

  // Track which topics user has dismissed this session (separate from localStorage)
  const [dismissedTopics, setDismissedTopics] = useState<Set<string>>(new Set());

  // Calculate if welcome screen should show - SYNCHRONOUSLY during render
  // This prevents ChatInterface from mounting before the check completes
  const shouldShowWelcome = React.useMemo(() => {
    if (!selectedTopic) return false;

    // If user dismissed it this session, don't show again
    if (dismissedTopics.has(selectedTopic)) return false;

    // Check if user has an existing session for this topic
    const hasSession = sessionStorage.getSessionPreview(selectedTopic) !== null;

    // Check if user has seen welcome screen for this topic (persisted)
    const welcomeScreenKey = `welcome_seen_${selectedTopic}`;
    const hasSeenWelcome = localStorage.getItem(welcomeScreenKey) === 'true';

    // Show welcome screen only if:
    // 1. Not dismissed this session
    // 2. User has NOT seen it before for this topic
    // 3. User does NOT have an existing session (first time visiting)
    return !hasSeenWelcome && !hasSession;
  }, [selectedTopic, dismissedTopics]);

  // Handle start learning from welcome screen
  const handleStartLearning = (enableVoice: boolean) => {
    if (selectedTopic) {
      // Mark welcome screen as seen (persisted)
      const welcomeScreenKey = `welcome_seen_${selectedTopic}`;
      localStorage.setItem(welcomeScreenKey, 'true');

      // Set voice preference
      setVoiceEnabled(enableVoice);

      // Mark as dismissed for this session (triggers useMemo recalculation)
      setDismissedTopics(prev => new Set([...prev, selectedTopic]));
    }
  };

  // Handle back from welcome screen
  const handleBackFromWelcome = () => {
    goToHome();
  };

  // If a topic is selected, show either welcome screen or ChatInterface
  if (selectedTopic) {
    // Show welcome screen if it's the user's first time
    if (shouldShowWelcome) {
      return (
        <SubtopicWelcomeScreen
          topicId={selectedTopic}
          category={category}
          onStartLearning={handleStartLearning}
          onBack={handleBackFromWelcome}
        />
      );
    }

    // Show chat interface
    return (
      <div
        className="flex flex-col h-full"
        style={{
          backgroundColor: theme.colors.chat,
        }}
      >
        {/* Top Bar for Mobile Layout Controls */}
        <div
          className="flex items-center justify-between px-4 py-3 border-b md:hidden"
          style={{
            borderColor: theme.colors.border,
            backgroundColor: theme.colors.chat,
          }}
        >
          <div className="flex items-center space-x-2">
            <button
              onClick={layoutActions.toggleLeftPanel}
              className="p-2 rounded-md transition-colors duration-200"
              style={{
                color: theme.colors.textSecondary,
                backgroundColor: 'transparent',
              }}
              title="Topics"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <button
              onClick={layoutActions.toggleRightPanel}
              className="p-2 rounded-md transition-colors duration-200"
              style={{
                color: theme.colors.textSecondary,
                backgroundColor: 'transparent',
              }}
              title="Scratch Pad"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            {/* Voice Assistant Toggle */}
            <div className="flex items-center space-x-2 mr-1">
              <span className="text-lg">🎙️</span>
              <button
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                className="relative inline-flex h-6 w-10 items-center rounded-full transition-colors duration-200"
                style={{
                  backgroundColor: voiceEnabled ? theme.colors.brand : theme.colors.interactive,
                }}
                title={voiceEnabled ? 'Disable Voice Assistant' : 'Enable Voice Assistant'}
              >
                <span
                  className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200"
                  style={{
                    transform: voiceEnabled ? 'translateX(1.5rem)' : 'translateX(0.25rem)',
                  }}
                />
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log('Chat theme toggle clicked, current theme:', theme.name);
                toggleTheme();
              }}
              className="p-2 rounded-md transition-all duration-300 hover:scale-110 relative z-10"
              style={{
                color: theme.colors.textSecondary,
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.interactive;
                e.currentTarget.style.color = theme.colors.textPrimary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = theme.colors.textSecondary;
              }}
              title={`Switch to ${theme.name === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme.name === 'dark' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              onClick={layoutActions.toggleLeftPanel}
              className={`p-2 rounded-md transition-colors duration-200 ${
                layoutState.leftPanelCollapsed ? 'opacity-50' : ''
              }`}
              style={{
                color: theme.colors.textSecondary,
                backgroundColor: layoutState.leftPanelCollapsed ? theme.colors.interactive : 'transparent',
              }}
              title="Toggle Topics Panel"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>

            <button
              onClick={layoutActions.toggleRightPanel}
              className={`p-2 rounded-md transition-colors duration-200 ${
                layoutState.rightPanelCollapsed ? 'opacity-50' : ''
              }`}
              style={{
                color: theme.colors.textSecondary,
                backgroundColor: layoutState.rightPanelCollapsed ? theme.colors.interactive : 'transparent',
              }}
              title="Toggle Scratch Pad"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Chat Interface Container */}
        <div className="flex-1">
          <ChatInterface
            key={selectedTopic}
            topicId={selectedTopic}
            onBackToTopics={goToHome}
          />
        </div>
      </div>
    );
  }

  // Welcome state when no topic is selected
  return (
    <div
      className="flex flex-col h-full"
      style={{
        backgroundColor: theme.colors.chat,
      }}
    >
      {/* Top Bar */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{
          borderColor: theme.colors.border,
          backgroundColor: theme.colors.chat,
        }}
      >
        <div className="flex items-center space-x-3">
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:hidden">
            <button
              onClick={layoutActions.toggleLeftPanel}
              className="p-2 rounded-md transition-colors duration-200"
              style={{
                color: theme.colors.textSecondary,
                backgroundColor: 'transparent',
              }}
              title="Topics"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <button
              onClick={layoutActions.toggleRightPanel}
              className="p-2 rounded-md transition-colors duration-200"
              style={{
                color: theme.colors.textSecondary,
                backgroundColor: 'transparent',
              }}
              title="Scratch Pad"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </div>

          {/* App Info */}
          <div className="flex items-center space-x-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-lg"
              style={{ backgroundColor: theme.colors.brand }}
            >
              📚
            </div>
            <div>
              <h1 className="font-semibold text-lg" style={{ color: theme.colors.textPrimary }}>
                Home Campus
              </h1>
              <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                Select a topic to start learning!
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log('Theme toggle clicked, current theme:', theme.name);
              toggleTheme();
            }}
            className="p-2 rounded-md transition-all duration-300 hover:scale-110 relative z-10"
            style={{
              color: theme.colors.textSecondary,
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              console.log('Theme button mouse enter');
              e.currentTarget.style.backgroundColor = theme.colors.interactive;
              e.currentTarget.style.color = theme.colors.textPrimary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = theme.colors.textSecondary;
            }}
            title={`Switch to ${theme.name === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme.name === 'dark' ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Desktop Panel Toggles */}
          <div className="hidden sm:flex items-center space-x-1">
            <button
              onClick={() => {
                console.log('Desktop left panel toggle clicked, current state:', layoutState.leftPanelCollapsed);
                layoutActions.toggleLeftPanel();
              }}
              className={`p-2 rounded-md transition-colors duration-200 ${
                layoutState.leftPanelCollapsed ? 'opacity-50' : ''
              }`}
              style={{
                color: theme.colors.textSecondary,
                backgroundColor: layoutState.leftPanelCollapsed ? theme.colors.interactive : 'transparent',
              }}
              title="Toggle Topics Panel"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>

            <button
              onClick={() => {
                console.log('Desktop right panel toggle clicked, current state:', layoutState.rightPanelCollapsed);
                layoutActions.toggleRightPanel();
              }}
              className={`p-2 rounded-md transition-colors duration-200 ${
                layoutState.rightPanelCollapsed ? 'opacity-50' : ''
              }`}
              style={{
                color: theme.colors.textSecondary,
                backgroundColor: layoutState.rightPanelCollapsed ? theme.colors.interactive : 'transparent',
              }}
              title="Toggle Scratch Pad"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Welcome Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* Welcome Message */}
            <div className="py-12">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl animate-float"
                style={{
                  background: theme.gradients.brand,
                  boxShadow: theme.shadows.glow,
                }}
              >
                📚
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.textPrimary }}>
                Welcome to Home Campus!
              </h2>
              <p className="text-lg mb-6" style={{ color: theme.colors.textMuted }}>
                Your AI-powered math tutor is ready to help you master mathematics step by step.
              </p>
              <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                👈 Select a topic from the sidebar to get started, or resume your previous session if available.
              </p>
            </div>

            {/* Features Preview */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div
                className="p-6 border backdrop-blur-sm transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{
                  background: theme.glass.background,
                  borderColor: theme.glass.border,
                  borderRadius: theme.radius.lg,
                  boxShadow: theme.shadows.md,
                  backdropFilter: theme.glass.backdrop,
                }}
              >
                <div className="text-2xl mb-3">📝</div>
                <h3 className="font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
                  Interactive Learning
                </h3>
                <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                  Practice with step-by-step guidance and instant feedback.
                </p>
              </div>
              <div
                className="p-6 border backdrop-blur-sm transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{
                  background: theme.glass.background,
                  borderColor: theme.glass.border,
                  borderRadius: theme.radius.lg,
                  boxShadow: theme.shadows.md,
                  backdropFilter: theme.glass.backdrop,
                  animationDelay: '0.1s',
                }}
              >
                <div className="text-2xl mb-3">📊</div>
                <h3 className="font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
                  Visual Tools
                </h3>
                <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                  Use the scratch pad and visualizer to work through problems.
                </p>
              </div>
              <div
                className="p-6 border backdrop-blur-sm transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{
                  background: theme.glass.background,
                  borderColor: theme.glass.border,
                  borderRadius: theme.radius.lg,
                  boxShadow: theme.shadows.md,
                  backdropFilter: theme.glass.backdrop,
                  animationDelay: '0.2s',
                }}
              >
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
                  Adaptive Progress
                </h3>
                <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                  Difficulty adjusts to your learning pace and progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterPanel;