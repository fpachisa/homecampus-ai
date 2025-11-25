/**
 * OLevelTopicSelector - Topic selection page for O-Level Mathematics practice
 *
 * Layout (header, footer, background) is handled by AuthenticatedLayout via PracticeRouter
 */

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { oLevelPathLoader } from '../../services/oLevelPathLoader';

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
    color: '#D97757',
    topics: ['n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9']
  },
  {
    name: 'Geometry & Measurement',
    icon: '📐',
    color: '#D97757',
    topics: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7']
  },
  {
    name: 'Statistics & Probability',
    icon: '📊',
    color: '#D97757',
    topics: ['s1', 's2']
  }
];

const OLevelTopicSelector: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [topicsData, setTopicsData] = useState<Map<string, TopicInfo>>(new Map());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">📚</div>
          <p className="text-lg" style={{ color: theme.colors.textSecondary }}>
            Loading O-Level topics...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Page Header */}
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
    </div>
  );
};

export default OLevelTopicSelector;
