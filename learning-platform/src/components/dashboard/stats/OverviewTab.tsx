/**
 * Overview Tab
 *
 * Displays global statistics, activity heatmap, week comparison,
 * performance charts, and topics overview.
 */

import React from 'react';
import type { StudentDashboardData } from '../../../types/studentDashboard';
import { HeroStatsSection } from './overview/HeroStatsSection';
import { ActivityHeatmap } from './overview/ActivityHeatmap';
import { WeekComparisonCard } from './overview/WeekComparisonCard';
import { QuickStatsGrid } from './overview/QuickStatsGrid';
import { TopicsTable } from './overview/TopicsTable';

interface OverviewTabProps {
  data: StudentDashboardData['overview'];
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ data }) => {

  return (
    <div className="space-y-6">
      {/* Hero Stats Section */}
      <HeroStatsSection stats={data.stats} />

      {/* Quick Stats Grid */}
      <QuickStatsGrid stats={data.stats} />

      {/* Week Comparison */}
      <WeekComparisonCard comparison={data.weekComparison} />

      {/* Activity Heatmap */}
      <ActivityHeatmap activities={data.activityHeatmap} mostActiveTime={data.mostActiveTime} />

      {/* Topics Overview */}
      <TopicsTable topics={data.topicsOverview} />

      {/* Performance Charts - TODO: Implement in future */}
      {/* <PerformanceCharts data={data.performanceCharts} /> */}
    </div>
  );
};
