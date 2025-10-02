import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useAppContext } from '../../App';
import ChatInterface from '../ChatInterface';
import { P6_MATH_FRACTIONS } from '../../prompts/topics/P6-Math-Fractions';
import type { LayoutActions, LayoutState } from './MainLayout';

interface CenterPanelProps {
  layoutActions: LayoutActions;
  layoutState: LayoutState;
}

const CenterPanel: React.FC<CenterPanelProps> = ({ layoutActions, layoutState }) => {
  const { theme, setTheme, toggleTheme } = useTheme();
  const { appState, handleBackToTopics } = useAppContext();

  // If a topic is selected, show the ChatInterface wrapped for layout integration
  if (appState.selectedTopic) {

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
            topicId={appState.selectedTopic}
            resumeFromSession={appState.resumeSession}
            onBackToTopics={handleBackToTopics}
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
                AI Campus
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
                Welcome to AI Campus!
              </h2>
              <p className="text-lg mb-6" style={{ color: theme.colors.textMuted }}>
                Your AI-powered math tutor is ready to help you master fractions step by step.
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