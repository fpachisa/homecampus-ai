/**
 * StudentDashboard - Main dashboard container for students
 *
 * Switches between two views:
 * 1. NewStudentDashboard - For students with no progress (onboarding-focused)
 * 2. ActiveStudentDashboard - For students with progress (progress & recommendations)
 *
 * View switching logic:
 * - If totalXP = 0 AND no topics started AND streak = 0 → New Student View
 * - Otherwise → Active Student View
 */

import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../hooks/useTheme';
import { useGamificationStats } from '../../hooks/useGamificationStats';
import { NewStudentDashboard } from './NewStudentDashboard';
import { ActiveStudentDashboard } from './ActiveStudentDashboard';
import LoadingSpinner from '../LoadingSpinner';

export const StudentDashboard: React.FC = () => {
  const { theme } = useTheme();
  const { loading: authLoading, userProfile } = useAuth();
  const { totalXP, currentStreak, isLoading: statsLoading } = useGamificationStats();
  // null = not yet determined, prevents flash of wrong dashboard during load
  const [hasProgress, setHasProgress] = useState<boolean | null>(null);
  const [isCheckingProgress, setIsCheckingProgress] = useState(true);

  // Determine if student has any progress
  useEffect(() => {
    const checkProgress = async () => {
      if (authLoading || statsLoading) return;

      // Check gamification stats
      const hasGamificationProgress = totalXP > 0 || currentStreak > 0;

      // Check if any topics have been started by looking at localStorage
      // This is a lightweight check - more detailed data comes from useProgressSummary
      let hasTopicsStarted = false;
      try {
        // Check for practice progress
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key?.startsWith('practice_unified_path_')) {
            hasTopicsStarted = true;
            break;
          }
        }

        // If no practice progress, check for learn progress in Firestore via progressSummary
        if (!hasTopicsStarted && userProfile?.uid) {
          const { getProgressSummary } = await import('../../services/firestoreProgressService');
          const summary = await getProgressSummary(userProfile.uid);
          if (summary && (
            (summary.learnSubtopics && Object.keys(summary.learnSubtopics).length > 0) ||
            (summary.practiceTopics && Object.keys(summary.practiceTopics).length > 0)
          )) {
            hasTopicsStarted = true;
          }
        }
      } catch (error) {
        console.error('Error checking topic progress:', error);
      }

      setHasProgress(hasGamificationProgress || hasTopicsStarted);
      setIsCheckingProgress(false);
    };

    checkProgress();
  }, [authLoading, statsLoading, totalXP, currentStreak, userProfile]);

  // Show loading state until hasProgress decision is made
  if (authLoading || statsLoading || isCheckingProgress || hasProgress === null) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background: 'transparent',
          color: theme.colors.textPrimary,
        }}
      >
        <LoadingSpinner size="large" />
      </div>
    );
  }

  // Render appropriate view based on progress
  return hasProgress ? <ActiveStudentDashboard /> : <NewStudentDashboard />;
};
