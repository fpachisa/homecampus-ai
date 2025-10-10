import React, { useState, useMemo } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useAppContext } from '../../App';
import { sessionStorage } from '../../services/sessionStorage';
import { progressService } from '../../services/progressService';
import { P6_MATH_FRACTIONS } from '../../prompts/topics/P6-Math-Fractions';
import type { TopicId } from '../../prompts/topics/P6-Math-Fractions';
import { S3_MATH_TRIGONOMETRY } from '../../prompts/topics/S3-Math-Trigonometry';
import type { TrigonometryTopicId } from '../../prompts/topics/S3-Math-Trigonometry';
import { S3_MATH_CIRCLE_GEOMETRY } from '../../prompts/topics/S3-Math-CircleGeometry';
import type { CircleGeometryTopicId } from '../../prompts/topics/S3-Math-CircleGeometry';
import { S3_MATH_QUADRATIC_EQUATIONS } from '../../prompts/topics/S3-Math-QuadraticEquations';
import type { QuadraticEquationsTopicId } from '../../prompts/topics/S3-Math-QuadraticEquations';
import type { LayoutActions } from './MainLayout';

interface LeftPanelProps {
  isCollapsed: boolean;
  width: number;
  layoutActions: LayoutActions;
}

function getTopicIcon(topicId: string): string {
  // P6 Fractions icons
  if (topicId.includes('dividing-whole-numbers')) return '➗';
  if (topicId.includes('whole-number-dividing')) return '🔢';
  if (topicId.includes('fraction-dividing-fraction')) return '📏';
  if (topicId.includes('word-problems')) return '📝';

  // S3 Trigonometry icons
  if (topicId.includes('basic-ratios')) return '📐';
  if (topicId.includes('problem-solving')) return '🧮';
  if (topicId.includes('true-bearings')) return '🧭';
  if (topicId.includes('obtuse-angles')) return '📏';
  if (topicId.includes('area-of-triangle')) return '🔺';
  if (topicId.includes('sine-rule')) return '📊';
  if (topicId.includes('cosine-rule')) return '📈';

  // S3 Circle Geometry icons
  if (topicId.includes('definitions')) return '⭕';
  if (topicId.includes('angle-semicircle')) return '📐';
  if (topicId.includes('chords')) return '📏';
  if (topicId.includes('radius-tangent')) return '📍';
  if (topicId.includes('tangents-external')) return '✏️';
  if (topicId.includes('angle-centre')) return '🎯';
  if (topicId.includes('angle-same-arc')) return '🔵';

  // S3 Quadratic Equations icons
  if (topicId.includes('solving-standard-form')) return '🔢';
  if (topicId.includes('solving-factorization')) return '✂️';
  if (topicId.includes('solving-fractional')) return '➗';
  if (topicId.includes('solving-completing-square')) return '◼️';
  if (topicId.includes('solving-formula')) return '📐';
  if (topicId.includes('solving-exponential')) return '⚡';
  if (topicId.includes('word-problems')) return '💡';
  if (topicId.includes('graph-features')) return '📊';
  if (topicId.includes('graph-completed-square')) return '🎯';
  if (topicId.includes('graph-factorised')) return '🔍';
  if (topicId.includes('graph-polynomial')) return '📈';
  if (topicId.includes('graph-finding-function')) return '🔎';
  if (topicId.includes('graph-problem-solving')) return '🎨';

  return '📐';
}

function getCategoryDisplayName(category: string): string {
  if (category === 'fractions') return 'Fractions';
  if (category === 'trigonometry') return 'Trigonometry';
  if (category === 'circle-geometry') return 'Circle Geometry';
  if (category === 'quadratic-equations') return 'Quadratic Equations';
  return category;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ isCollapsed, width, layoutActions }) => {
  const { theme } = useTheme();
  const { appState, handleTopicSelect, handleBackToTopics } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');

  // Dynamically get topic configs based on selected category
  const topicConfigs = useMemo(() => {
    if (appState.selectedCategory === 'fractions') {
      return Object.entries(P6_MATH_FRACTIONS).map(([topicId, config]) => ({
        id: topicId as TopicId | TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (appState.selectedCategory === 'trigonometry') {
      return Object.entries(S3_MATH_TRIGONOMETRY).map(([topicId, config]) => ({
        id: topicId as TopicId | TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (appState.selectedCategory === 'circle-geometry') {
      return Object.entries(S3_MATH_CIRCLE_GEOMETRY).map(([topicId, config]) => ({
        id: topicId as TopicId | TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    } else if (appState.selectedCategory === 'quadratic-equations') {
      return Object.entries(S3_MATH_QUADRATIC_EQUATIONS).map(([topicId, config]) => ({
        id: topicId as TopicId | TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId,
        name: config.displayName,
        icon: getTopicIcon(topicId),
        status: 'active' as const,
        description: config.topicName,
      }));
    }
    return [];
  }, [appState.selectedCategory]);

  const categoryName = getCategoryDisplayName(appState.selectedCategory || '');

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
        {/* Back Button */}
        <button
          onClick={handleBackToTopics}
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
          title={`Back to ${categoryName}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

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
      </div>
    );
  }

  const filteredTopics = topicConfigs.filter(topic =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to get section progress for a topic
  const getSectionProgress = (topicId: string) => {
    // First, try to get section progress from active session (source of truth)
    const session = sessionStorage.loadSession(topicId);
    const sectionProgress = session?.sectionProgress;

    // Get total sections from config
    let topicConfig;
    if (appState.selectedCategory === 'fractions') {
      topicConfig = P6_MATH_FRACTIONS[topicId as TopicId];
    } else if (appState.selectedCategory === 'trigonometry') {
      topicConfig = S3_MATH_TRIGONOMETRY[topicId as TrigonometryTopicId];
    } else if (appState.selectedCategory === 'circle-geometry') {
      topicConfig = S3_MATH_CIRCLE_GEOMETRY[topicId as CircleGeometryTopicId];
    } else if (appState.selectedCategory === 'quadratic-equations') {
      topicConfig = S3_MATH_QUADRATIC_EQUATIONS[topicId as QuadraticEquationsTopicId];
    }

    const sections = (topicConfig as any)?.progressionStructure?.sections || [];
    const totalSections = sections.length;
    const masteredSections = sectionProgress?.masteredSections || [];
    const completedSections = masteredSections.length;

    return {
      completed: completedSections,
      total: totalSections,
      percentage: totalSections > 0 ? (completedSections / totalSections) * 100 : 0,
    };
  };

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
        className="border-b"
        style={{ borderColor: theme.colors.border }}
      >
        {/* Back Button */}
        <button
          onClick={handleBackToTopics}
          className="w-full px-4 py-3 flex items-center space-x-2 transition-colors duration-200 hover:bg-interactive"
          style={{
            color: theme.colors.textSecondary,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.interactive;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          title={`Back to ${categoryName}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Back to {categoryName}</span>
        </button>

        {/* Category Header */}
        <div className="flex items-center justify-between px-4 pb-4">
          <div className="flex items-center space-x-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: theme.colors.brand }}
            >
              {appState.selectedCategory === 'fractions' ? '➗' :
               appState.selectedCategory === 'trigonometry' ? '📐' :
               appState.selectedCategory === 'circle-geometry' ? '⭕' : '📈'}
            </div>
            <div>
              <h2 className="font-semibold text-sm" style={{ color: theme.colors.textPrimary }}>
                {categoryName}
              </h2>
              <p className="text-xs" style={{ color: theme.colors.textMuted }}>
                Choose a subtopic
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
        </div>
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
              {appState.selectedCategory === 'fractions' ? 'Primary 6 Mathematics' : 'Secondary 3 Mathematics'}
            </h3>
          </div>

          {/* Topic List - WhatsApp Style */}
          {filteredTopics.map((topic) => {
            const preview = sessionStorage.getSessionPreview(topic.id);
            const hasSession = preview !== null;
            const sectionProgress = getSectionProgress(topic.id);

            return (
              <button
                key={topic.id}
                onClick={() => handleTopicSelect(topic.id)}
                className={`w-full flex items-start space-x-3 px-3 py-3 text-left transition-all duration-300 group ${
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
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                    style={{
                      backgroundColor: appState.selectedTopic === topic.id
                        ? 'rgba(255, 255, 255, 0.2)'
                        : theme.colors.interactive,
                    }}
                  >
                    {topic.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold truncate">{topic.name}</p>
                    {hasSession && (
                      <span className="text-xs opacity-70 ml-2 flex-shrink-0">
                        {sessionStorage.getTimeElapsedString(preview.timestamp)}
                      </span>
                    )}
                  </div>

                  {hasSession && sectionProgress.total > 0 && (
                    <div className="mt-2 space-y-1">
                      {/* Progress Bar */}
                      <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: appState.selectedTopic === topic.id ? 'rgba(255, 255, 255, 0.2)' : theme.colors.interactive }}>
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{
                            width: `${sectionProgress.percentage}%`,
                            backgroundColor: appState.selectedTopic === topic.id ? '#ffffff' : theme.colors.brand,
                          }}
                        />
                      </div>
                      {/* Progress Text */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs opacity-60">
                          {sectionProgress.completed}/{sectionProgress.total} sections
                        </span>
                        {sectionProgress.completed === sectionProgress.total && (
                          <span className="text-xs opacity-70">✓</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Check mark for selected */}
                {appState.selectedTopic === topic.id && (
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
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