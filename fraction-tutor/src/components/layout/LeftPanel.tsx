import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useAppContext } from '../../App';
import { sessionStorage } from '../../services/sessionStorage';
import { P6_MATH_FRACTIONS } from '../../prompts/topics/P6-Math-Fractions';
import type { TopicId } from '../../prompts/topics/P6-Math-Fractions';
import type { LayoutActions } from './MainLayout';

interface LeftPanelProps {
  isCollapsed: boolean;
  width: number;
  layoutActions: LayoutActions;
}

// Convert topic data to display format
const topicConfigs = Object.entries(P6_MATH_FRACTIONS).map(([topicId, config]) => ({
  id: topicId as TopicId,
  name: config.displayName,
  icon: getTopicIcon(topicId),
  status: 'active' as const,
  description: config.topicName,
}));

function getTopicIcon(topicId: string): string {
  if (topicId.includes('dividing-whole-numbers')) return '➗';
  if (topicId.includes('whole-number-dividing')) return '🔢';
  if (topicId.includes('fraction-dividing-fraction')) return '📏';
  if (topicId.includes('word-problems')) return '📝';
  return '➗';
}

const LeftPanel: React.FC<LeftPanelProps> = ({ isCollapsed, width, layoutActions }) => {
  const { theme } = useTheme();
  const { appState, handleTopicSelect, handleResumeSession } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');

  const sessionInfo = sessionStorage.getSessionInfo();

  if (isCollapsed) {
    return (
      <div
        className="h-full flex flex-col items-center py-4 space-y-4 relative z-10"
        style={{
          width: 60,
          background: theme.glass.background,
          borderRight: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
        }}
      >
        {/* Expand Button */}
        <button
          onClick={layoutActions.toggleLeftPanel}
          className="p-3 rounded-lg transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: theme.colors.interactive,
            color: theme.colors.textSecondary,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.brand;
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.interactive;
            e.currentTarget.style.color = theme.colors.textSecondary;
          }}
          title="Expand Topics Panel"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Topic Icons */}
        {topicConfigs.slice(0, 3).map((topic) => (
          <button
            key={topic.id}
            onClick={() => handleTopicSelect(topic.id)}
            className="p-2 rounded-lg transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: appState.selectedTopic === topic.id ? theme.colors.brand : theme.colors.interactive,
              color: appState.selectedTopic === topic.id ? '#ffffff' : theme.colors.textSecondary,
            }}
            title={topic.name}
          >
            <span className="text-lg">{topic.icon}</span>
          </button>
        ))}

        {/* Session Resume Button if available */}
        {sessionInfo && (
          <button
            onClick={handleResumeSession}
            className="p-2 rounded-lg transition-all duration-200 hover:scale-105 mt-auto"
            style={{
              backgroundColor: theme.colors.brand,
              color: '#ffffff',
            }}
            title="Resume Session"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
          </button>
        )}
      </div>
    );
  }

  const filteredTopics = topicConfigs.filter(topic =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="h-full flex flex-col relative z-10 animate-slide-up"
      style={{
        width,
        background: theme.glass.background,
        borderRight: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
        boxShadow: theme.shadows.lg,
      }}
    >
      {/* Panel Header */}
      <div
        className="flex items-center justify-between p-4 border-b"
        style={{ borderColor: theme.colors.border }}
      >
        <div className="flex items-center space-x-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold animate-float"
            style={{ backgroundColor: theme.colors.brand }}
          >
            🧠
          </div>
          <div>
            <h2 className="font-semibold text-sm" style={{ color: theme.colors.textPrimary }}>
              AI Campus
            </h2>
            <p className="text-xs" style={{ color: theme.colors.textMuted }}>
              Learn Mathematics
            </p>
          </div>
        </div>

        {/* Collapse Button */}
        <button
          onClick={layoutActions.toggleLeftPanel}
          className="p-1.5 rounded-md transition-colors duration-200"
          style={{
            color: theme.colors.textSecondary,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.interactive;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          title="Collapse sidebar"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Search Bar */}
      <div className="p-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-md border-none outline-none transition-colors duration-200"
            style={{
              backgroundColor: theme.colors.interactive,
              color: theme.colors.textPrimary,
            }}
          />
          <svg
            className="absolute right-3 top-2.5 w-4 h-4"
            style={{ color: theme.colors.textMuted }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Topic Categories */}
      <div className="flex-1 overflow-y-auto px-2">
        <div className="space-y-1">
          {/* Section Header */}
          <div className="px-2 py-1.5">
            <h3 className="text-xs font-semibold uppercase tracking-wide" style={{ color: theme.colors.textMuted }}>
              Primary 6 Mathematics
            </h3>
          </div>

          {/* Topic List */}
          {filteredTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => handleTopicSelect(topic.id)}
              className={`w-full flex items-center space-x-3 px-3 py-3 text-left transition-all duration-300 group ${
                appState.selectedTopic === topic.id ? 'bg-brand text-white' : ''
              }`}
              style={{
                background: appState.selectedTopic === topic.id ? theme.gradients.brand : 'transparent',
                color: appState.selectedTopic === topic.id ? '#ffffff' : theme.colors.textSecondary,
                borderRadius: theme.radius.lg,
                boxShadow: appState.selectedTopic === topic.id ? theme.shadows.glow : 'none',
              }}
              onMouseEnter={(e) => {
                if (appState.selectedTopic !== topic.id) {
                  e.currentTarget.style.background = theme.colors.interactive;
                  e.currentTarget.style.boxShadow = theme.shadows.md;
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                if (appState.selectedTopic !== topic.id) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              <span className="text-lg">{topic.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{topic.name}</p>
                <p className="text-xs opacity-70 truncate">{topic.description}</p>
              </div>
              {appState.selectedTopic === topic.id && (
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* Session Resume Section */}
        {sessionInfo && (
          <div className="mt-6 p-3 rounded-lg" style={{ backgroundColor: theme.colors.interactive }}>
            <div className="flex items-center space-x-2 mb-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
                style={{ backgroundColor: theme.colors.brand }}
              >
                ⏰
              </div>
              <h4 className="text-sm font-medium" style={{ color: theme.colors.textPrimary }}>
                Continue Learning
              </h4>
            </div>
            <p className="text-xs mb-3" style={{ color: theme.colors.textMuted }}>
              {sessionStorage.getTimeElapsedString(sessionInfo.timestamp)} • {sessionInfo.problemsCompleted} problems completed
            </p>
            <div className="flex space-x-2">
              <button
                onClick={handleResumeSession}
                className="flex-1 text-xs px-3 py-1.5 font-medium transition-all duration-300"
                style={{
                  background: theme.gradients.brand,
                  color: '#ffffff',
                  borderRadius: theme.radius.md,
                  boxShadow: theme.shadows.md,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = theme.shadows.lg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = theme.shadows.md;
                }}
              >
                Resume
              </button>
              <button
                onClick={() => sessionStorage.clearSession()}
                className="text-xs px-3 py-1.5 rounded-md font-medium transition-colors duration-200"
                style={{
                  backgroundColor: 'transparent',
                  color: theme.colors.textMuted,
                  border: `1px solid ${theme.colors.border}`,
                }}
              >
                Start Fresh
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section - User Profile Placeholder */}
      <div
        className="p-3 border-t"
        style={{ borderColor: theme.colors.border }}
      >
        <div className="flex items-center space-x-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium"
            style={{
              backgroundColor: theme.colors.brand,
              color: '#ffffff',
            }}
          >
            👤
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate" style={{ color: theme.colors.textPrimary }}>
              Student
            </p>
            <p className="text-xs truncate" style={{ color: theme.colors.textMuted }}>
              Learning Mode
            </p>
          </div>
          <button
            className="p-1.5 rounded-md hover:bg-interactive transition-colors duration-200"
            style={{ color: theme.colors.textMuted }}
            title="Settings"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;