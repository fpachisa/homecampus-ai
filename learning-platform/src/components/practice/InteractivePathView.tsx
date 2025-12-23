/**
 * InteractivePathView - Complete redesign with 3-column layout
 *
 * Left: Stats Panel
 * Center: Curved path with circular nodes
 * Right: Leaderboard & Goals
 */

import { useEffect, useState, useRef, lazy, Suspense, useMemo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { useAuth } from '../../contexts/AuthContext';
import { useActiveProfile } from '../../contexts/ActiveProfileContext';
import { useProgressSummary } from '../../hooks/useProgressSummary';
import type { PathNode, PathLayer, PathProgress, DailyStreak } from '../../types/practice';
import { yamlPathLoader } from '../../services/yamlPathLoader';
import { pathProgressService } from '../../services/pathProgressService';
import {
  loadPracticeProgress,
  savePracticeProgressLightweight,
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
import { LoadingSpinner } from '../LoadingSpinner';
import { useTheme } from '../../hooks/useTheme';

// Lazy load panels for mobile drawers
const StatsPanelLazy = lazy(() => import('./StatsPanel').then(m => ({ default: m.StatsPanel })));
const LeaderboardPanelLazy = lazy(() => import('./LeaderboardPanel').then(m => ({ default: m.LeaderboardPanel })));

interface YAMLFileInfo {
  filename: string;
  displayName: string;
  category: string;
}

interface InteractivePathViewProps {
  // Props removed - now reads from URL
}

export const InteractivePathView: React.FC<InteractivePathViewProps> = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const { goToPractice, goToHome } = useAppNavigation();

  const { user } = useAuth();
  const { activeProfile } = useActiveProfile();
  const effectiveUid = activeProfile?.uid || user?.uid;
  const progressSummary = useProgressSummary();
  const category = pathId!; // pathId is the category
  const { theme } = useTheme();
  const [nodes, setNodes] = useState<PathNode[]>([]);
  const [progress, setProgress] = useState<PathProgress | null>(null);
  const [globalStreak, setGlobalStreak] = useState<DailyStreak>(initializeStreak());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const centerPanelRef = useRef<HTMLDivElement>(null);
  const [_pathWidth, setPathWidth] = useState(600);
  const [displayName, setDisplayName] = useState<string>('');

  // Mobile state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showStats, setShowStats] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  useEffect(() => {
    loadPathData();
  }, [category]);

  // Reload global streak when returning to this view (e.g., after practice session)
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (!document.hidden && effectiveUid) {
        try {
          const streak = await loadGlobalStreak(effectiveUid);
          setGlobalStreak(streak);
        } catch (error) {
          console.error('Failed to reload global streak:', error);
        }
      }
    };

    const handleFocus = async () => {
      if (effectiveUid) {
        try {
          const streak = await loadGlobalStreak(effectiveUid);
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
  }, [effectiveUid]);

  // Measure center panel width for path generation and detect mobile
  useEffect(() => {
    const updateWidth = () => {
      if (centerPanelRef.current) {
        setPathWidth(centerPanelRef.current.offsetWidth);
      }
      setIsMobile(window.innerWidth < 768);
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

      // Load display name from global manifest
      try {
        const manifestPath = '/curriculum-content/index.json';

        console.log(`📋 Loading manifest from: ${manifestPath}`);
        const manifestResponse = await fetch(manifestPath);

        if (manifestResponse.ok) {
          const manifest = await manifestResponse.json();
          const pathInfo = manifest.files?.find((f: YAMLFileInfo) => f.category === category);
          if (pathInfo) {
            setDisplayName(pathInfo.displayName);
            console.log(`✅ Display name loaded: ${pathInfo.displayName}`);
          } else {
            console.warn(`⚠️ Category ${category} not found in manifest`);
            setDisplayName(category.replace(/^s\d+-math-/i, '').replace(/-/g, ' '));
          }
        } else {
          console.warn(`⚠️ Manifest not found at ${manifestPath}`);
          setDisplayName(category.replace(/^s\d+-math-/i, '').replace(/-/g, ' '));
        }
      } catch (manifestError) {
        console.warn('Failed to load manifest, using fallback display name:', manifestError);
        setDisplayName(category.replace(/^s\d+-math-/i, '').replace(/-/g, ' '));
      }

      // ============ FAST LOADING: localStorage FIRST ============
      // This matches how O-Level practice loads (which is fast)

      // PRIORITY 1: Check localStorage FIRST (instant)
      let pathProgress = pathProgressService.loadUnifiedProgress(category);
      let needsBackgroundSync = false;

      if (pathProgress) {
        console.log('📂 Loaded progress from localStorage (fast path)');
        // Will sync with Firestore in background after render
        needsBackgroundSync = !!effectiveUid;
      } else if (effectiveUid) {
        // PRIORITY 2: localStorage empty + authenticated → try Firestore (first visit on this device)
        try {
          const firestoreProgress = await loadPracticeProgress(effectiveUid, category);

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
              achievements: firestoreProgress.achievements.map(a => ({
                ...a,
                earnedAt: a.earnedAt.toDate()
              })),
              sessionHistory: firestoreProgress.sessionHistory,
              totalTimeSpentSeconds: firestoreProgress.totalTimeSpentSeconds,
            };

            // Convert node progress
            Object.entries(firestoreProgress.nodes).forEach(([nodeId, firestoreNode]) => {
              pathProgress!.nodes[nodeId] = {
                nodeId,
                problemsAttempted: firestoreNode.problemsAttempted,
                problemsCorrect: firestoreNode.problemsCorrect,
                status: firestoreNode.status,
                completedAt: firestoreNode.completedAt?.toDate(),
              };
            });

            console.log('✅ Loaded progress from Firestore (first visit on this device)');
          }
        } catch (firestoreErr) {
          console.warn('Firestore load failed:', firestoreErr);
        }
      }

      // PRIORITY 3: Initialize new progress if neither source had data
      if (!pathProgress) {
        pathProgress = pathProgressService.initializeUnifiedProgress(category, loadedNodes);
        console.log('🆕 Initialized new progress');
        needsBackgroundSync = !!effectiveUid; // Sync new progress to Firestore in background
      }

      // Sync with current nodes (handles new nodes added to path)
      pathProgressService.syncUnifiedProgress(pathProgress, loadedNodes);

      // Save to localStorage (fast, always do this)
      pathProgressService.saveUnifiedProgress(category, pathProgress);

      // Set progress and render page immediately
      setProgress(pathProgress);

      // ============ BACKGROUND SYNC (non-blocking) ============
      // Don't await - let it run in background after page renders
      if (needsBackgroundSync && effectiveUid) {
        syncProgressInBackground(effectiveUid, category, pathProgress, loadedNodes);
      }

      // Load global streak (separate from per-topic progress)
      if (effectiveUid) {
        try {
          const streak = await loadGlobalStreak(effectiveUid);
          setGlobalStreak(streak);
          console.log('🔥 Loaded global streak');
        } catch (streakErr) {
          console.warn('Failed to load global streak, using default:', streakErr);
          setGlobalStreak(initializeStreak());
        }
      } else {
        setGlobalStreak(initializeStreak());
      }
    } catch (err) {
      console.error('Failed to load path data:', err);
      setError('Failed to load practice path. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Background sync helper - runs after page renders, non-blocking
  const syncProgressInBackground = async (
    uid: string,
    cat: string,
    localProgress: PathProgress,
    nodes: PathNode[]
  ) => {
    try {
      const firestoreProgress = await loadPracticeProgress(uid, cat);

      if (!firestoreProgress) {
        // No Firestore data - upload local (lightweight, no cascade)
        const displayName = cat.replace(/^s\d+-math-/i, '');
        const converted = pathProgressToFirestore(localProgress, cat, displayName, nodes);
        await savePracticeProgressLightweight(uid, cat, converted);
        console.log('📤 Background: Uploaded local progress to Firestore');
      } else {
        // Compare timestamps - sync if local is newer
        const firestoreDate = firestoreProgress.lastUpdated?.toDate?.() || new Date(0);
        const localDate = localProgress.lastUpdated || new Date(0);

        if (localDate > firestoreDate) {
          // Local is newer - push to Firestore (lightweight, no cascade)
          const displayName = cat.replace(/^s\d+-math-/i, '');
          const converted = pathProgressToFirestore(localProgress, cat, displayName, nodes);
          await savePracticeProgressLightweight(uid, cat, converted);
          console.log('📤 Background: Synced newer local progress to Firestore');
        } else {
          console.log('📂 Background: Firestore already up to date');
        }
      }
    } catch (err) {
      console.warn('Background Firestore sync failed:', err);
      // Non-fatal - user experience not affected
    }
  };

  // ============ ALL HOOKS MUST BE BEFORE EARLY RETURNS ============

  // Memoize path positions (expensive calculation)
  const basePositions = useMemo(() => {
    if (nodes.length === 0) return [];
    const verticalSpacing = isMobile ? 120 : 80;
    return generateMeanderingPath(nodes.length, verticalSpacing);
  }, [nodes.length, isMobile]);

  // Memoize layer groupings
  const nodesByLayer = useMemo<Record<PathLayer, PathNode[]>>(() => ({
    foundation: nodes.filter(n => n.layer === 'foundation'),
    integration: nodes.filter(n => n.layer === 'integration'),
    application: nodes.filter(n => n.layer === 'application'),
    examPractice: nodes.filter(n => n.layer === 'examPractice'),
    'word-problems': nodes.filter(n => n.layer === 'word-problems'),
  }), [nodes]);

  // Memoize layer boundaries
  const { foundationEnd, integrationEnd } = useMemo(() => ({
    foundationEnd: nodesByLayer.foundation.length - 1,
    integrationEnd: nodesByLayer.foundation.length - 1 + nodesByLayer.integration.length,
  }), [nodesByLayer]);

  // Memoize node positions with layer gaps
  const nodePositions = useMemo(() => {
    if (basePositions.length === 0) return [];
    const layerGap = 60;
    return basePositions.map((pos, index) => {
      let extraOffset = 0;
      if (index > foundationEnd) extraOffset += layerGap;
      if (index > integrationEnd) extraOffset += layerGap;
      return { ...pos, y: pos.y + extraOffset };
    });
  }, [basePositions, foundationEnd, integrationEnd]);

  // Memoize total path height
  const totalHeight = useMemo(() =>
    nodePositions.length > 0 ? nodePositions[nodePositions.length - 1].y + 240 : 0,
    [nodePositions]
  );

  // Memoize getNodeStatus callback
  const getNodeStatus = useCallback((nodeId: string): 'current' | 'completed' | 'locked' => {
    if (!progress) return 'current';
    const nodeProgress = progress.nodes[nodeId];
    if (!nodeProgress || nodeProgress.status === 'locked') return 'current';
    return nodeProgress.status === 'completed' ? 'completed' : 'current';
  }, [progress]);

  // Memoize completion stats
  const { totalCompletedNodes, isPathComplete } = useMemo(() => {
    if (!progress) return { totalCompletedNodes: 0, isPathComplete: false };
    const completed = Object.values(progress.nodes).filter(n => n.status === 'completed').length;
    return {
      totalCompletedNodes: completed,
      isPathComplete: completed === nodes.length && nodes.length > 0,
    };
  }, [progress, nodes.length]);

  // ============ EARLY RETURNS AFTER ALL HOOKS ============

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: theme.gradients.panel }}>
        <LoadingSpinner size="large" />
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

  return (
    <div className="min-h-[100dvh] md:flex overflow-hidden" style={{ background: theme.gradients.panel }}>
      {/* Left Sidebar - Stats Panel (25%) - Desktop only */}
      <div
        className="hidden md:flex md:w-1/4 border-r flex-col min-h-[100dvh]"
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

      {/* Center Panel - Curved Path (50% desktop, 100% mobile) - Scrollable */}
      <div
        ref={centerPanelRef}
        className="w-full md:w-1/2 min-h-[100dvh] overflow-y-auto relative flex flex-col pb-20 md:pb-0"
        style={{}}
      >
        {/* Header - Sticky */}
        <div
          className="sticky top-0 z-30 px-4 sm:px-6 py-4 border-b flex-shrink-0"
          style={{
            backgroundColor: theme.glass.background,
            backdropFilter: theme.glass.backdrop,
            borderColor: theme.glass.border,
          }}
        >
          {/* Mobile back button */}
          {isMobile && (
            <div className="mb-3">
              <BackButton onClick={goToHome} />
            </div>
          )}
          <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
            {displayName || 'Loading...'}
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
                isMobile={isMobile}
              />
            );
          })}

          {/* Layer Dividers - Dynamic based on actual layer after foundation */}
          {nodesByLayer.foundation.length > 0 && foundationEnd + 1 < nodes.length && (() => {
            // Determine what layer comes after foundation
            const nextNode = nodes[foundationEnd + 1];
            const layerNames: Record<PathLayer, string> = {
              foundation: 'Foundation',
              integration: 'Integration',
              application: 'Application',
              examPractice: 'Exam Practice',
              'word-problems': 'Word Problems',
            };
            const nextLayerName = layerNames[nextNode?.layer] || 'Next Section';

            return (
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
                  {nextLayerName}
                </div>
              </div>
            );
          })()}

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

      {/* Right Sidebar - Leaderboard Panel (25%) - Desktop only */}
      <div
        className="hidden md:flex md:w-1/4 border-l flex-col min-h-[100dvh]"
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
          <LeaderboardPanel progress={progress} globalStreak={globalStreak} allNodes={nodes} globalDailyProblems={progressSummary.dailyProblems} />
        </div>
      </div>

      {/* Mobile-only UI */}
      {isMobile && (
        <>
          {/* Mobile Action Bar - Fixed at bottom */}
          <div
            className="fixed bottom-0 left-0 right-0 z-30 border-t"
            style={{
              backgroundColor: theme.colors.surface,
              borderColor: theme.glass.border,
              paddingBottom: 'max(env(safe-area-inset-bottom), 12px)',
            }}
          >
            <div className="flex gap-2 p-3">
              <button
                onClick={() => {
                  setShowStats(!showStats);
                  setShowLeaderboard(false);
                }}
                className="flex-1 h-12 rounded-lg font-semibold transition-all"
                style={{
                  backgroundColor: showStats ? theme.colors.brand : `${theme.colors.brand}20`,
                  color: showStats ? '#ffffff' : theme.colors.textPrimary,
                }}
              >
                📊 Stats
              </button>
              <button
                onClick={() => {
                  setShowLeaderboard(!showLeaderboard);
                  setShowStats(false);
                }}
                className="flex-1 h-12 rounded-lg font-semibold transition-all"
                style={{
                  backgroundColor: showLeaderboard ? theme.colors.brand : `${theme.colors.brand}20`,
                  color: showLeaderboard ? '#ffffff' : theme.colors.textPrimary,
                }}
              >
                🏆 Goals
              </button>
            </div>
          </div>

          {/* Stats Drawer - Slide up from bottom */}
          {showStats && (
            <div className="fixed inset-0 z-40" onClick={() => setShowStats(false)}>
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 rounded-t-2xl max-h-[70vh] overflow-y-auto animate-drawer-slide-up"
                style={{
                  backgroundColor: theme.colors.surface,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="sticky top-0 border-b px-4 py-3 flex justify-between items-center"
                  style={{
                    backgroundColor: theme.colors.surface,
                    borderColor: theme.glass.border,
                  }}
                >
                  <h3 className="font-semibold" style={{ color: theme.colors.textPrimary }}>
                    Your Stats
                  </h3>
                  <button
                    onClick={() => setShowStats(false)}
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: theme.glass.background,
                      color: theme.colors.textPrimary,
                    }}
                  >
                    ✕
                  </button>
                </div>
                <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
                  <StatsPanelLazy progress={progress} globalStreak={globalStreak} />
                </Suspense>
              </div>
            </div>
          )}

          {/* Leaderboard Drawer - Slide up from bottom */}
          {showLeaderboard && (
            <div className="fixed inset-0 z-40" onClick={() => setShowLeaderboard(false)}>
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 rounded-t-2xl max-h-[70vh] overflow-y-auto animate-drawer-slide-up"
                style={{
                  backgroundColor: theme.colors.surface,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="sticky top-0 border-b px-4 py-3 flex justify-between items-center"
                  style={{
                    backgroundColor: theme.colors.surface,
                    borderColor: theme.glass.border,
                  }}
                >
                  <h3 className="font-semibold" style={{ color: theme.colors.textPrimary }}>
                    Goals & Progress
                  </h3>
                  <button
                    onClick={() => setShowLeaderboard(false)}
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: theme.glass.background,
                      color: theme.colors.textPrimary,
                    }}
                  >
                    ✕
                  </button>
                </div>
                <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
                  <LeaderboardPanelLazy progress={progress} globalStreak={globalStreak} allNodes={nodes} globalDailyProblems={progressSummary.dailyProblems} />
                </Suspense>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default InteractivePathView;
