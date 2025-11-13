/**
 * useChildProgress Hook
 *
 * Fetches and manages child progress data for parent dashboard.
 * Handles loading states, errors, and caching.
 */

import { useState, useEffect, useCallback } from 'react';
import {
  parentAnalyticsService,
  type ChildAnalytics
} from '../../services/analytics/parentAnalyticsService';

interface UseChildProgressResult {
  data: ChildAnalytics | null;
  loading: boolean;
  error: Error | null;
  refresh: () => Promise<void>;
}

/**
 * Hook to fetch child progress analytics
 *
 * @param childUid - For linked children: their user UID. For child profiles: parent's UID
 * @param timeRange - Time range for analytics (7d, 30d, 3m, all)
 * @param childProfileId - For child profiles only: the profile ID within parent's account
 * @returns Analytics data, loading state, error, and refresh function
 */
export function useChildProgress(
  childUid: string | null,
  timeRange: '7d' | '30d' | '3m' | 'all' = '30d',
  childProfileId?: string
): UseChildProgressResult {
  const [data, setData] = useState<ChildAnalytics | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const loadData = useCallback(async () => {
    if (!childUid) {
      setData(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const analytics = await parentAnalyticsService.getChildAnalytics(childUid, timeRange, childProfileId);

      setData(analytics);
    } catch (err) {
      console.error('Error loading child progress:', err);
      setError(err instanceof Error ? err : new Error('Failed to load child progress'));
    } finally {
      setLoading(false);
    }
  }, [childUid, timeRange, childProfileId]);

  // Load data on mount and when dependencies change
  useEffect(() => {
    loadData();
  }, [loadData]);

  // Refresh function for manual reload
  const refresh = useCallback(async () => {
    await loadData();
  }, [loadData]);

  return {
    data,
    loading,
    error,
    refresh
  };
}
