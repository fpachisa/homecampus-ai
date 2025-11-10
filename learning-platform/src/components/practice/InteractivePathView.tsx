/**
 * InteractivePathView - Complete redesign with 3-column layout
 *
 * Left: Stats Panel
 * Center: Curved path with circular nodes
 * Right: Leaderboard & Goals
 */

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { useAuth } from '../../contexts/AuthContext';
import type { PathNode, PathLayer, PathProgress, DailyStreak } from '../../types/practice';
import { yamlPathLoader } from '../../services/yamlPathLoader';
import { pathProgressService } from '../../services/pathProgressService';
import {
  loadPracticeProgress,
  savePracticeProgress,
  pathProgressToFirestore
} from '../../services/firestoreProgressService';
import { loadGlobalStreak } from '../../services/globalStreakService';
import { initializeStreak } from '../../services/streakService';
import { generateMeanderingPath } from '../../utils/pathGeometryUtils';
import { CircularPathNode } from './CircularPathNode';
import { StatsPanel } from './StatsPanel';
import { LeaderboardPanel } from './LeaderboardPanel';
import { MilestoneMarker } from './MilestoneMarker';
import { BackButton } from '../BackButton';
import { useTheme } from '../../hooks/useTheme';

interface InteractivePathViewProps {
  // Props removed - now reads from URL
}

export const InteractivePathView: React.FC<InteractivePathViewProps> = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const { goToPractice, goToHome } = useAppNavigation();
  const { user } = useAuth();
  const category = pathId!; // pathId is the category
  const { theme } = useTheme();
  const [nodes, setNodes] = useState<PathNode[]>([]);
  const [progress, setProgress] = useState<PathProgress | null>(null);
  const [globalStreak, setGlobalStreak] = useState<DailyStreak>(initializeStreak());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const centerPanelRef = useRef<HTMLDivElement>(null);
  const [_pathWidth, setPathWidth] = useState(600);

  useEffect(() => {
    loadPathData();
  }, [category]);

  // Reload global streak when returning to this view (e.g., after practice session)
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (!document.hidden && user?.uid) {
        try {
          const streak = await loadGlobalStreak(user.uid);
          setGlobalStreak(streak);
        } catch (error) {
          console.error('Failed to reload global streak:', error);
        }
      }
    };

    const handleFocus = async () => {
      if (user?.uid) {
        try {
          const streak = await loadGlobalStreak(user.uid);
          setGlobalStreak(streak);
        } catch (error) {
          console.error('Failed to reload global streak:', error);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
    };
  }, [user?.uid]);

  // Measure center panel width for path generation
  useEffect(() => {
    const updateWidth = () => {
      if (centerPanelRef.current) {
        setPathWidth(centerPanelRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Flush pending saves before page unload to prevent data loss
  useEffect(() => {
    const handleBeforeUnload = async () => {
      try {
        await pathProgressService.flushPendingSaves();
      } catch (error) {
        console.error('Failed to flush pending saves:', error);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const loadPathData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load unified path
      const loadedNodes = await yamlPathLoader.loadUnifiedPath(category);
      setNodes(loadedNodes);

      let pathProgress: PathProgress | null = null;

      // PRIORITY 1: Try loading from Firestore (if authenticated)
      if (user?.uid) {
        try {
          const firestoreProgress = await loadPracticeProgress(user.uid, category);

          if (firestoreProgress) {
            // Convert Firestore format to PathProgress format
            pathProgress = {
              category: firestoreProgress.topicId,
              currentNodeId: firestoreProgress.currentNodeId,
              currentCycle: firestoreProgress.currentCycle,
              nodes: {},
              layerProgress: firestoreProgress.layerProgress,
              totalProblemsAttempted: firestoreProgress.totalProblemsAttempted,
              totalProblemsCorrect: firestoreProgress.totalProblemsCorrect,
              pathStartedAt: firestoreProgress.pathStartedAt.toDate(),
              lastUpdated: firestoreProgress.pathStartedAt.toDate(),
              totalXP: firestoreProgress.totalXP,
              currentLevel: firestoreProgress.currentLevel,
              // Convert achievements: Timestamp -> Date
              achievements: firestoreProgress.achievements.map(a => ({
                ...a,
                earnedAt: a.earnedAt.toDate()
              })),
              sessionHistory: firestoreProgress.sessionHistory,
              totalTimeSpentSeconds: firestoreProgress.totalTimeSpentSeconds,
            };

            // Convert node progress (include nodeId)
            Object.entries(firestoreProgress.nodes).forEach(([nodeId, firestoreNode]) => {
              pathProgress!.nodes[nodeId] = {
                nodeId,
                problemsAttempted: firestoreNode.problemsAttempted,
                problemsCorrect: firestoreNode.problemsCorrect,
                status: firestoreNode.status,
                completedAt: firestoreNode.completedAt?.toDate(),
              };
            });

            console.log('✅ Loaded progress from Firestore');
          }
        } catch (firestoreErr) {
          console.warn('Failed to load from Firestore, falling back to localStorage:', firestoreErr);
        }
      }

      // PRIORITY 2: Fall back to localStorage if Firestore had no data
      if (!pathProgress) {
        pathProgress = pathProgressService.loadUnifiedProgress(category);
        if (pathProgress) {
          console.log('📂 Loaded progress from localStorage');
        }
      }

      // PRIORITY 3: Initialize new progress if neither source had data
      if (!pathProgress) {
        pathProgress = pathProgressService.initializeUnifiedProgress(category, loadedNodes);
        console.log('🆕 Initialized new progress');
      } else {
        // Sync progress with current nodes (handles new nodes added to path)
        const wasUpdated = pathProgressService.syncUnifiedProgress(pathProgress, loadedNodes);
        if (wasUpdated) {
          console.log('🔄 Synced progress with current path structure');
        }
      }

      // Save to both localStorage and Firestore
      pathProgressService.saveUnifiedProgress(category, pathProgress);

      if (user?.uid) {
        const displayName = category.replace(/^s\d+-math-/i, '');
        const firestoreProgress = pathProgressToFirestore(pathProgress, category, displayName, loadedNodes);
        await savePracticeProgress(user.uid, category, firestoreProgress);
        console.log('💾 Saved progress to both localStorage and Firestore');
      } else {
        console.log('💾 Saved progress to localStorage only (not authenticated)');
      }

      // Load global streak (separate from per-topic progress)
      if (user?.uid) {
        try {
          const streak = await loadGlobalStreak(user.uid);
          setGlobalStreak(streak);
          console.log('🔥 Loaded global streak');
        } catch (streakErr) {
          console.warn('Failed to load global streak, using default:', streakErr);
          setGlobalStreak(initializeStreak());
        }
      } else {
        setGlobalStreak(initializeStreak());
      }

      setProgress(pathProgress);
    } catch (err) {
      console.error('Failed to load path data:', err);
      setError('Failed to load practice path. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: theme.gradients.panel }}>
        <div className="text-center">
          <div className="text-xl font-semibold" style={{ color: theme.colors.textPrimary }}>
            Loading Practice Path...
          </div>
        </div>
      </div>
    );
  }

  if (error || nodes.length === 0 || !progress) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: theme.gradients.panel }}>
        <div className="text-center">
          <div className="text-xl font-semibold mb-4" style={{ color: theme.colors.error }}>
            {error || 'Failed to load path'}
          </div>
          <button
            onClick={goToHome}
            className="px-6 py-2 rounded-lg transition"
            style={{
              backgroundColor: theme.colors.brand,
              color: '#ffffff',
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Generate meandering path positions with tighter spacing
  const basePositions = generateMeanderingPath(nodes.length, 100);

  // Group nodes by layer
  const nodesByLayer: Record<PathLayer, PathNode[]> = {
    foundation: nodes.filter(n => n.layer === 'foundation'),
    integration: nodes.filter(n => n.layer === 'integration'),
    application: nodes.filter(n => n.layer === 'application'),
    examPractice: nodes.filter(n => n.layer === 'examPractice'),
  };

  // Layer boundaries for milestones
  const foundationEnd = nodesByLayer.foundation.length - 1;
  const integrationEnd = foundationEnd + nodesByLayer.integration.length;

  // Add extra spacing at layer boundaries for dividers
  const layerGap = 60; // Extra gap for layer dividers
  const nodePositions = basePositions.map((pos, index) => {
    let extraOffset = 0;

    // Add extra space after foundation layer
    if (index > foundationEnd) {
      extraOffset += layerGap;
    }

    // Add extra space after integration layer
    if (index > integrationEnd) {
      extraOffset += layerGap;
    }

    return {
      ...pos,
      y: pos.y + extraOffset
    };
  });

  // Calculate total path height (add 80px offset for spacing)
  const totalHeight = nodePositions.length > 0
    ? nodePositions[nodePositions.length - 1].y + 240
    : 0;

  // Get node status
  const getNodeStatus = (nodeId: string): 'current' | 'completed' | 'locked' => {
    const nodeProgress = progress.nodes[nodeId];
    if (!nodeProgress || nodeProgress.status === 'locked') return 'current'; // All unlocked
    return nodeProgress.status === 'completed' ? 'completed' : 'current';
  };

  const totalCompletedNodes = Object.values(progress.nodes).filter(n => n.status === 'completed').length;
  const isPathComplete = totalCompletedNodes === nodes.length && nodes.length > 0;

  return (
    <div className="min-h-screen flex overflow-hidden" style={{ background: theme.gradients.panel }}>
      {/* Left Sidebar - Stats Panel (25%) - Fixed */}
      <div
        className="w-1/4 border-r flex flex-col h-screen"
        style={{
          borderColor: theme.glass.border,
          backgroundColor: theme.colors.sidebar,
        }}
      >
        <div className="p-4 border-b flex-shrink-0" style={{ borderColor: theme.glass.border }}>
          <BackButton onClick={goToHome} />
        </div>
        <div className="flex-1 overflow-y-auto">
          <StatsPanel progress={progress} globalStreak={globalStreak} />
        </div>
      </div>

      {/* Center Panel - Curved Path (50%) - Scrollable */}
      <div
        ref={centerPanelRef}
        className="w-1/2 h-screen overflow-y-auto relative flex flex-col"
        style={{  }}
      >
        {/* Header - Sticky */}
        <div
          className="sticky top-0 z-30 p-6 border-b flex-shrink-0"
          style={{
            backgroundColor: theme.glass.background,
            backdropFilter: theme.glass.backdrop,
            borderColor: theme.glass.border,
          }}
        >
          <h1 className="text-3xl font-bold capitalize" style={{ color: theme.colors.textPrimary }}>
            {category.replace(/^s\d+-math-/i, '')}
          </h1>
          <div className="text-sm mt-1" style={{ color: theme.colors.textSecondary }}>
            {totalCompletedNodes}/{nodes.length} nodes completed
          </div>
        </div>

        {/* Path Container */}
        <div className="relative" style={{ height: `${totalHeight}px`, minHeight: '100vh' }}>
          {/* Nodes */}
          {nodes.map((node, index) => {
            // Add offset to first node to create space from header
            const adjustedPosition = {
              ...nodePositions[index],
              y: nodePositions[index].y + 60
            };
            return (
              <CircularPathNode
                key={node.id}
                node={node}
                nodeProgress={progress.nodes[node.id]}
                status={getNodeStatus(node.id)}
                layer={node.layer}
                position={adjustedPosition}
                onClick={() => goToPractice(category, node.id)}
                displayNumber={index + 1}
              />
            );
          })}

          {/* Layer Dividers */}
          {nodesByLayer.foundation.length > 0 && foundationEnd + 1 < nodes.length && (
            <div
              className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              style={{
                top: `${((nodePositions[foundationEnd]?.y || 0) + (nodePositions[foundationEnd + 1]?.y || 0)) / 2 + 90}px`,
                width: '80%'
              }}
            >
              <div className="w-full h-px" style={{ backgroundColor: theme.glass.border }} />
              <div
                className="text-sm font-semibold mt-2 px-4 py-1 rounded-full"
                style={{
                  color: theme.colors.textSecondary,
                  backgroundColor: theme.glass.background,
                  border: `1px solid ${theme.glass.border}`
                }}
              >
                Exam Practice
              </div>
            </div>
          )}

          {nodesByLayer.integration.length > 0 && integrationEnd < nodes.length && (
            <MilestoneMarker
              type="layer-complete"
              layer="integration"
              position={{ x: 50, y: nodePositions[integrationEnd]?.y + 60 + 100 || 0 }}
              isUnlocked={progress.layerProgress.integration.completed === progress.layerProgress.integration.total}
            />
          )}

          {/* Path Complete Trophy */}
          {isPathComplete && (
            <MilestoneMarker
              type="path-complete"
              position={{ x: 50, y: totalHeight - 100 }}
              isUnlocked={true}
            />
          )}
        </div>
      </div>

      {/* Right Sidebar - Leaderboard Panel (25%) - Fixed */}
      <div
        className="w-1/4 border-l flex flex-col h-screen"
        style={{
          borderColor: theme.glass.border,
          backgroundColor: theme.colors.sidebar,
        }}
      >
        <div className="p-4 border-b flex-shrink-0" style={{ borderColor: theme.glass.border }}>
          <h2 className="text-lg font-bold" style={{ color: theme.colors.textPrimary }}>
            Goals & Progress
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          <LeaderboardPanel progress={progress} globalStreak={globalStreak} allNodes={nodes} />
        </div>
      </div>
    </div>
  );
};

export default InteractivePathView;
