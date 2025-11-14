/**
 * Homework History Page
 * Displays all past homework problems with filtering and search
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { ArrowLeft, Search, Filter, Clock, CheckCircle, XCircle, Loader } from 'lucide-react';
import { homeworkPersistenceService, type FirestoreProblemDocument } from '../../services/homework/homeworkPersistenceService';

interface HomeworkHistoryPageProps {
  studentId: string;
}

type StatusFilter = 'all' | 'completed' | 'active' | 'abandoned';

export const HomeworkHistoryPage: React.FC<HomeworkHistoryPageProps> = ({ studentId }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const [problems, setProblems] = useState<FirestoreProblemDocument[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

  // Load problems on mount
  useEffect(() => {
    loadProblems();
  }, [studentId]);

  const loadProblems = async () => {
    setIsLoading(true);
    try {
      const allProblems = await homeworkPersistenceService.getProblems(studentId, {
        limitCount: 100,
        orderByField: 'lastActivityAt'
      });
      setProblems(allProblems);
    } catch (error) {
      console.error('Failed to load homework history:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter problems
  const filteredProblems = problems.filter(problem => {
    // Status filter
    if (statusFilter !== 'all' && problem.status !== statusFilter) {
      return false;
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      return (
        problem.extractedText.toLowerCase().includes(query) ||
        problem.topic.toLowerCase().includes(query) ||
        problem.subject.toLowerCase().includes(query) ||
        problem.keyMathConcepts.some(concept => concept.toLowerCase().includes(query))
      );
    }

    return true;
  });

  // Group problems by date
  const groupedProblems = groupProblemsByDate(filteredProblems);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: theme.gradients.panel }}>
      {/* Background texture */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(88, 101, 242, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(71, 82, 196, 0.05) 0%, transparent 50%)',
        }}
      />

      {/* Header */}
      <header className="relative z-10 border-b" style={{ borderColor: theme.colors.border }}>
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/home')}
                className="p-2 rounded-lg transition-all duration-200"
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
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
                  Homework History
                </h1>
                <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                  {filteredProblems.length} problem{filteredProblems.length !== 1 ? 's' : ''} found
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Filters */}
          <div className="mb-6 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                style={{ color: theme.colors.textMuted }}
              />
              <input
                type="text"
                placeholder="Search problems by topic, concept, or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl outline-none transition-all"
                style={{
                  backgroundColor: theme.colors.secondary,
                  border: `1px solid ${theme.colors.border}`,
                  color: theme.colors.textPrimary,
                }}
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4" style={{ color: theme.colors.textMuted }} />
              <span className="text-sm font-medium" style={{ color: theme.colors.textSecondary }}>
                Status:
              </span>
              {(['all', 'completed', 'active', 'abandoned'] as StatusFilter[]).map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all capitalize"
                  style={{
                    backgroundColor:
                      statusFilter === status ? theme.colors.brand : theme.colors.interactive,
                    color: statusFilter === status ? '#ffffff' : theme.colors.textSecondary,
                  }}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex items-center justify-center py-32">
              <div className="text-center">
                <Loader
                  className="w-12 h-12 animate-spin mx-auto mb-4"
                  style={{ color: theme.colors.brand }}
                />
                <p style={{ color: theme.colors.textSecondary }}>Loading homework history...</p>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && filteredProblems.length === 0 && (
            <div
              className="rounded-2xl p-12 text-center"
              style={{
                backgroundColor: theme.colors.secondary,
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${theme.colors.brand}20` }}
              >
                <Clock size={32} style={{ color: theme.colors.brand }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
                {searchQuery || statusFilter !== 'all'
                  ? 'No problems found'
                  : 'No homework history yet'}
              </h3>
              <p style={{ color: theme.colors.textSecondary }}>
                {searchQuery || statusFilter !== 'all'
                  ? 'Try adjusting your filters or search query'
                  : 'Your completed homework problems will appear here'}
              </p>
            </div>
          )}

          {/* Grouped Problems List */}
          {!isLoading && filteredProblems.length > 0 && (
            <div className="space-y-8">
              {Object.entries(groupedProblems).map(([dateGroup, groupProblems]) => (
                <div key={dateGroup}>
                  <h2
                    className="text-lg font-semibold mb-4 sticky top-0 py-2 z-10"
                    style={{
                      color: theme.colors.textPrimary,
                      backgroundColor: theme.colors.primary,
                    }}
                  >
                    {dateGroup}
                  </h2>
                  <div className="space-y-3">
                    {groupProblems.map((problem) => (
                      <ProblemCard
                        key={problem.id}
                        problem={problem}
                        onClick={() => navigate(`/homework/history/${problem.id}`)}
                        theme={theme}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

// Problem Card Component
interface ProblemCardProps {
  problem: FirestoreProblemDocument;
  onClick: () => void;
  theme: any;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem, onClick, theme }) => {
  const getStatusIcon = () => {
    switch (problem.status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5" style={{ color: '#10b981' }} />;
      case 'active':
        return <Clock className="w-5 h-5" style={{ color: '#f59e0b' }} />;
      case 'abandoned':
        return <XCircle className="w-5 h-5" style={{ color: '#ef4444' }} />;
      default:
        return <Clock className="w-5 h-5" style={{ color: theme.colors.textMuted }} />;
    }
  };

  const getStatusText = () => {
    switch (problem.status) {
      case 'completed':
        return 'Completed';
      case 'active':
        return 'In Progress';
      case 'abandoned':
        return 'Abandoned';
      default:
        return 'Unknown';
    }
  };

  const formatDuration = () => {
    const minutes = Math.floor((problem.statistics?.totalTimeSpent || 0) / 60);
    if (minutes < 1) return '< 1 min';
    if (minutes < 60) return `${minutes} min`;
    return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
  };

  return (
    <button
      onClick={onClick}
      className="w-full text-left rounded-xl p-4 transition-all hover:scale-[1.01]"
      style={{
        backgroundColor: theme.colors.secondary,
        border: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadows.sm,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = theme.shadows.md;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = theme.shadows.sm;
      }}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Left: Content */}
        <div className="flex-1 min-w-0">
          {/* Topic and Status */}
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold capitalize" style={{ color: theme.colors.textPrimary }}>
              {problem.topic}
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: `${theme.colors.brand}20`,
                color: theme.colors.brand,
              }}
            >
              {problem.difficulty}
            </span>
          </div>

          {/* Problem Text Preview */}
          <p className="text-sm line-clamp-2 mb-3" style={{ color: theme.colors.textSecondary }}>
            {problem.extractedText}
          </p>

          {/* Concepts */}
          {problem.keyMathConcepts.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {problem.keyMathConcepts.slice(0, 3).map((concept, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded"
                  style={{
                    backgroundColor: theme.colors.interactive,
                    color: theme.colors.textSecondary,
                  }}
                >
                  {concept}
                </span>
              ))}
              {problem.keyMathConcepts.length > 3 && (
                <span className="text-xs" style={{ color: theme.colors.textMuted }}>
                  +{problem.keyMathConcepts.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Right: Status and Stats */}
        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          <div className="flex items-center gap-1.5">
            {getStatusIcon()}
            <span className="text-sm font-medium" style={{ color: theme.colors.textSecondary }}>
              {getStatusText()}
            </span>
          </div>

          <div className="text-xs text-right" style={{ color: theme.colors.textMuted }}>
            <div>{formatDuration()}</div>
            {problem.statistics?.totalSessions > 0 && (
              <div>{problem.statistics.totalSessions} session{problem.statistics.totalSessions !== 1 ? 's' : ''}</div>
            )}
          </div>
        </div>
      </div>
    </button>
  );
};

// Helper: Group problems by date
function groupProblemsByDate(
  problems: FirestoreProblemDocument[]
): Record<string, FirestoreProblemDocument[]> {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const thisWeek = new Date(today);
  thisWeek.setDate(thisWeek.getDate() - 7);

  const groups: Record<string, FirestoreProblemDocument[]> = {
    Today: [],
    Yesterday: [],
    'This Week': [],
    Older: [],
  };

  problems.forEach((problem) => {
    const activityDate = problem.lastActivityAt.toDate();
    const activityDay = new Date(
      activityDate.getFullYear(),
      activityDate.getMonth(),
      activityDate.getDate()
    );

    if (activityDay.getTime() === today.getTime()) {
      groups.Today.push(problem);
    } else if (activityDay.getTime() === yesterday.getTime()) {
      groups.Yesterday.push(problem);
    } else if (activityDate >= thisWeek) {
      groups['This Week'].push(problem);
    } else {
      groups.Older.push(problem);
    }
  });

  // Remove empty groups
  Object.keys(groups).forEach((key) => {
    if (groups[key].length === 0) {
      delete groups[key];
    }
  });

  return groups;
}
