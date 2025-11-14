/**
 * Homework History Card
 * Dashboard widget showing recent homework activity
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowRight, Clock, CheckCircle, Loader } from 'lucide-react';
import { homeworkPersistenceService } from '../../services/homework/homeworkPersistenceService';
import type { Theme } from '../../styles/themes';

interface HomeworkHistoryCardProps {
  studentId: string;
  theme: Theme;
}

export const HomeworkHistoryCard: React.FC<HomeworkHistoryCardProps> = ({ studentId, theme }) => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalProblems: 0,
    completedProblems: 0,
    totalSessions: 0,
    totalTimeSpent: 0,
    problemsBySubject: {} as Record<string, number>
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadRecentActivity();
  }, [studentId]);

  const loadRecentActivity = async () => {
    setIsLoading(true);
    try {
      const activity = await homeworkPersistenceService.getRecentActivity(studentId, 7); // Last 7 days
      setStats(activity);
    } catch (error) {
      console.error('Failed to load homework activity:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  return (
    <div
      className="rounded-2xl p-6 transition-all hover:scale-[1.01] cursor-pointer"
      style={{
        background: theme.glass.background,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
        boxShadow: theme.shadows.lg,
      }}
      onClick={() => navigate('/homework/history')}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = theme.shadows.xl;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = theme.shadows.lg;
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${theme.colors.brand}20` }}
          >
            <BookOpen size={24} style={{ color: theme.colors.brand }} />
          </div>
          <div>
            <h3 className="text-lg font-semibold" style={{ color: theme.colors.textPrimary }}>
              Homework History
            </h3>
            <p className="text-sm" style={{ color: theme.colors.textMuted }}>
              Last 7 days
            </p>
          </div>
        </div>

        <button
          className="p-2 rounded-lg transition-all"
          style={{
            backgroundColor: theme.colors.interactive,
            color: theme.colors.textSecondary,
          }}
          onMouseEnter={(e) => {
            e.stopPropagation();
            e.currentTarget.style.backgroundColor = theme.colors.brand;
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.stopPropagation();
            e.currentTarget.style.backgroundColor = theme.colors.interactive;
            e.currentTarget.style.color = theme.colors.textSecondary;
          }}
          onClick={(e) => {
            e.stopPropagation();
            navigate('/homework/history');
          }}
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <Loader className="w-8 h-8 animate-spin" style={{ color: theme.colors.brand }} />
        </div>
      )}

      {/* Empty State */}
      {!isLoading && stats.totalProblems === 0 && (
        <div className="text-center py-8">
          <div
            className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center"
            style={{ backgroundColor: `${theme.colors.brand}10` }}
          >
            <BookOpen size={28} style={{ color: theme.colors.brand }} />
          </div>
          <p className="text-sm font-medium mb-1" style={{ color: theme.colors.textPrimary }}>
            No recent homework
          </p>
          <p className="text-xs" style={{ color: theme.colors.textMuted }}>
            Start by uploading a problem to get help
          </p>
        </div>
      )}

      {/* Stats Grid */}
      {!isLoading && stats.totalProblems > 0 && (
        <>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Total Problems */}
            <div
              className="p-4 rounded-xl"
              style={{
                backgroundColor: theme.colors.secondary,
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <BookOpen size={16} style={{ color: theme.colors.brand }} />
                <span className="text-xs font-medium" style={{ color: theme.colors.textMuted }}>
                  Problems
                </span>
              </div>
              <p className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
                {stats.totalProblems}
              </p>
            </div>

            {/* Completed */}
            <div
              className="p-4 rounded-xl"
              style={{
                backgroundColor: theme.colors.secondary,
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle size={16} style={{ color: '#10b981' }} />
                <span className="text-xs font-medium" style={{ color: theme.colors.textMuted }}>
                  Completed
                </span>
              </div>
              <p className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
                {stats.completedProblems}
              </p>
            </div>

            {/* Sessions */}
            <div
              className="p-4 rounded-xl"
              style={{
                backgroundColor: theme.colors.secondary,
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Clock size={16} style={{ color: theme.colors.brand }} />
                <span className="text-xs font-medium" style={{ color: theme.colors.textMuted }}>
                  Sessions
                </span>
              </div>
              <p className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
                {stats.totalSessions}
              </p>
            </div>

            {/* Time Spent */}
            <div
              className="p-4 rounded-xl"
              style={{
                backgroundColor: theme.colors.secondary,
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Clock size={16} style={{ color: theme.colors.brand }} />
                <span className="text-xs font-medium" style={{ color: theme.colors.textMuted }}>
                  Time
                </span>
              </div>
              <p className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
                {formatTime(stats.totalTimeSpent)}
              </p>
            </div>
          </div>

          {/* Subject Breakdown */}
          {Object.keys(stats.problemsBySubject).length > 0 && (
            <div
              className="p-4 rounded-xl"
              style={{
                backgroundColor: theme.colors.secondary,
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              <p className="text-xs font-medium mb-3" style={{ color: theme.colors.textMuted }}>
                By Subject
              </p>
              <div className="space-y-2">
                {Object.entries(stats.problemsBySubject).map(([subject, count]) => (
                  <div key={subject} className="flex items-center justify-between">
                    <span
                      className="text-sm capitalize"
                      style={{ color: theme.colors.textSecondary }}
                    >
                      {subject}
                    </span>
                    <span
                      className="text-sm font-semibold px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: `${theme.colors.brand}20`,
                        color: theme.colors.brand,
                      }}
                    >
                      {count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* View All Button */}
          <button
            className="w-full mt-4 py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
            style={{
              background: theme.gradients.brand,
              color: '#ffffff',
              boxShadow: theme.shadows.md,
            }}
            onMouseEnter={(e) => {
              e.stopPropagation();
              e.currentTarget.style.boxShadow = theme.shadows.glow;
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.stopPropagation();
              e.currentTarget.style.boxShadow = theme.shadows.md;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onClick={(e) => {
              e.stopPropagation();
              navigate('/homework/history');
            }}
          >
            View All History
            <ArrowRight size={18} />
          </button>
        </>
      )}
    </div>
  );
};
