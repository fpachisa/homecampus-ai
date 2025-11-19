import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useThemeContext } from '../../contexts/ThemeContext';
import { ProfileMenu, AuthModal } from '../auth';
import { ProfileSwitcher } from '../ProfileSwitcher';
import { useActiveProfile } from '../../contexts/ActiveProfileContext';
import { oLevelPathLoader } from '../../services/oLevelPathLoader';
import logoLight from '/logo.png?url';
import logoDark from '/logo-dark.png?url';

interface TopicInfo {
  id: string;
  name: string;
  paper1Count: number;
  paper2Count: number;
}

interface TopicCategory {
  name: string;
  icon: string;
  color: string;
  topics: string[];
}

const TOPIC_CATEGORIES: TopicCategory[] = [
  {
    name: 'Number & Algebra',
    icon: '🔢',
    color: '#D97757', // App theme color
    topics: ['n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9']
  },
  {
    name: 'Geometry & Measurement',
    icon: '📐',
    color: '#D97757', // App theme color
    topics: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7']
  },
  {
    name: 'Statistics & Probability',
    icon: '📊',
    color: '#D97757', // App theme color
    topics: ['s1', 's2']
  }
];

const OLevelTopicSelector: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { toggleTheme, isDark } = useThemeContext();
  const { canSwitchProfiles } = useActiveProfile();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [topicsData, setTopicsData] = useState<Map<string, TopicInfo>>(new Map());
  const [loading, setLoading] = useState(true);

  // Theme-aware logo
  const logoSrc = isDark ? logoDark : logoLight;

  useEffect(() => {
    // Load metadata for all topics
    const loadTopicsData = async () => {
      const allTopicIds = oLevelPathLoader.getAllTopicIds();
      const dataMap = new Map<string, TopicInfo>();

      await Promise.all(
        allTopicIds.map(async (topicId) => {
          const metadata = await oLevelPathLoader.getTopicMetadata(topicId);
          dataMap.set(topicId, metadata);
        })
      );

      setTopicsData(dataMap);
      setLoading(false);
    };

    loadTopicsData();
  }, []);

  const handleTopicClick = (topicId: string) => {
    navigate(`/practice/olevel/${topicId}`);
  };

  const handleBack = () => {
    navigate('/home');
  };

  if (loading) {
    return (
      <div
        className="min-h-screen flex flex-col"
        style={{
          background: theme.gradients.panel,
          color: theme.colors.textPrimary,
        }}
      >
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4">📚</div>
            <p className="text-lg" style={{ color: theme.colors.textSecondary }}>
              Loading O-Level topics...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: theme.gradients.panel,
        color: theme.colors.textPrimary,
      }}
    >
      {/* Background texture */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(88, 101, 242, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(71, 82, 196, 0.05) 0%, transparent 50%)',
        }}
      />

      {/* Header */}
      <header className="relative z-[100] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-b" style={{ borderColor: theme.colors.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 sm:space-x-4 cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center animate-float">
                <img src={logoSrc} alt="Home Campus Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
                  Home Campus
                </h1>
                <p className="text-xs sm:text-sm" style={{ color: theme.colors.textMuted }}>
                  AI-Powered Home Learning
                </p>
              </div>
            </button>

            {/* Theme toggle and user section */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Profile Switcher (for parents to switch between children) */}
              {canSwitchProfiles && <ProfileSwitcher />}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all duration-200"
                style={{
                  backgroundColor: theme.colors.interactive,
                  color: theme.colors.textSecondary,
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.brand;
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.interactive;
                  e.currentTarget.style.color = theme.colors.textSecondary;
                }}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Profile Menu */}
              <ProfileMenu onOpenAuth={() => setAuthModalOpen(true)} />
            </div>
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      {/* Main Content */}
      <main className="relative z-10 flex-1 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎓</div>
          <h1 className="text-4xl font-bold mb-3" style={{ color: theme.colors.textPrimary }}>
            O-Level Mathematics Practice
          </h1>
          <p className="text-lg mb-2" style={{ color: theme.colors.textSecondary }}>
            Practice with real past-year exam questions
          </p>
        </div>

        {/* Topic Categories */}
        {TOPIC_CATEGORIES.map((category) => (
          <div key={category.name} className="mb-12">
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <h2
                className="text-2xl font-bold"
                style={{ color: category.color }}
              >
                {category.name}
              </h2>
            </div>

            {/* Topics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.topics.map((topicId) => {
                const topicData = topicsData.get(topicId);
                if (!topicData) return null;

                const totalQuestions = topicData.paper1Count + topicData.paper2Count;
                const hasQuestions = totalQuestions > 0;

                return (
                  <button
                    key={topicId}
                    onClick={() => hasQuestions && handleTopicClick(topicId)}
                    disabled={!hasQuestions}
                    className="p-5 rounded-xl transition-all duration-200 text-left w-full hover:scale-105"
                    style={{
                      background: theme.glass.background,
                      border: `2px solid ${hasQuestions ? category.color + '40' : theme.glass.border}`,
                      backdropFilter: theme.glass.backdrop,
                      boxShadow: theme.shadows.sm,
                      cursor: hasQuestions ? 'pointer' : 'not-allowed',
                      opacity: hasQuestions ? 1 : 0.6,
                    }}
                  >
                    {/* Topic Header */}
                    <div className="mb-4">
                      <h3
                        className="font-semibold text-sm mb-1"
                        style={{ color: theme.colors.textSecondary }}
                      >
                        {topicId.toUpperCase()}
                      </h3>
                      <p className="text-base font-medium mb-2" style={{ color: theme.colors.textPrimary }}>
                        {topicData.name}
                      </p>
                    </div>

                    {/* Question Count */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">📚</span>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: category.color }}>
                            {totalQuestions} {totalQuestions === 1 ? 'Question' : 'Questions'}
                          </p>
                          <p className="text-xs" style={{ color: theme.colors.textSecondary }}>
                            {topicData.paper1Count > 0 && `P1: ${topicData.paper1Count}`}
                            {topicData.paper1Count > 0 && topicData.paper2Count > 0 && ' • '}
                            {topicData.paper2Count > 0 && `P2: ${topicData.paper2Count}`}
                          </p>
                        </div>
                      </div>

                      {/* Arrow icon */}
                      {hasQuestions && (
                        <div className="text-2xl" style={{ color: category.color }}>
                          →
                        </div>
                      )}
                    </div>

                    {/* Coming Soon badge for topics with no questions */}
                    {!hasQuestions && (
                      <div className="mt-2">
                        <span
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            backgroundColor: theme.colors.interactive,
                            color: theme.colors.textMuted,
                          }}
                        >
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Info Footer */}

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-4 sm:px-6 lg:px-8 py-4 border-t" style={{ borderColor: theme.colors.border }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm" style={{ color: theme.colors.textMuted }}>
            AI-powered Socratic learning
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OLevelTopicSelector;
