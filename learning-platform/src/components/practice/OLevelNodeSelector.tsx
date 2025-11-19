/**
 * OLevelNodeSelector - Node path view for O-Level practice with Paper 1/2 toggle
 *
 * 3-column layout matching Practice Page design:
 * - Left: Stats Panel (25%)
 * - Center: Curved path with circular nodes (50%)
 * - Right: Goals Panel (25%)
 * - Mobile: Full-width center, bottom action bar for panels
 */

import { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useThemeContext } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { useActiveProfile } from '../../contexts/ActiveProfileContext';
import { ProfileMenu, AuthModal } from '../auth';
import { ProfileSwitcher } from '../ProfileSwitcher';
import { oLevelPathLoader } from '../../services/oLevelPathLoader';
import { pathProgressService } from '../../services/pathProgressService';
import { loadGlobalStreak } from '../../services/globalStreakService';
import { initializeStreak } from '../../services/streakService';
import { generateMeanderingPath } from '../../utils/pathGeometryUtils';
import { CircularPathNode } from './CircularPathNode';
import { OLevelStatsPanel } from './OLevelStatsPanel';
import { OLevelGoalsPanel } from './OLevelGoalsPanel';
import { BackButton } from '../BackButton';
import type { PathNode, PathProgress, DailyStreak } from '../../types/practice';

// Lazy load panels for mobile drawers
const OLevelStatsPanelLazy = lazy(() => import('./OLevelStatsPanel').then(m => ({ default: m.OLevelStatsPanel })));
const OLevelGoalsPanelLazy = lazy(() => import('./OLevelGoalsPanel').then(m => ({ default: m.OLevelGoalsPanel })));

export const OLevelNodeSelector: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { toggleTheme, isDark } = useThemeContext();
  const { user } = useAuth();
  const { canSwitchProfiles } = useActiveProfile();

  const [selectedPaper, setSelectedPaper] = useState<'paper1' | 'paper2'>('paper1');
  const [nodes, setNodes] = useState<PathNode[]>([]);
  const [progress, setProgress] = useState<PathProgress | null>(null);
  const [globalStreak, setGlobalStreak] = useState<DailyStreak>(initializeStreak());
  const [topicName, setTopicName] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const centerPanelRef = useRef<HTMLDivElement>(null);

  // Mobile state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showStats, setShowStats] = useState(false);
  const [showGoals, setShowGoals] = useState(false);

  // Detect mobile/desktop
  useEffect(() => {
    const updateWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Load nodes and progress when topic or paper changes
  useEffect(() => {
    loadData();
  }, [topicId, selectedPaper]);

  // Load global streak
  useEffect(() => {
    if (user?.uid) {
      loadGlobalStreak(user.uid)
        .then(setGlobalStreak)
        .catch(() => setGlobalStreak(initializeStreak()));
    }
  }, [user?.uid]);

  const loadData = async () => {
    if (!topicId) return;

    try {
      setLoading(true);

      // Load topic metadata
      const metadata = await oLevelPathLoader.getTopicMetadata(topicId);
      setTopicName(metadata.name);

      // Load nodes for selected paper
      const loadedNodes = await oLevelPathLoader.loadOLevelPath(topicId, selectedPaper);
      setNodes(loadedNodes);

      // Load progress from pathProgressService
      const category = `olevel-${topicId}-${selectedPaper}`;
      let loadedProgress = pathProgressService.loadUnifiedProgress(category);

      // Initialize if no progress exists
      if (!loadedProgress) {
        loadedProgress = pathProgressService.initializeUnifiedProgress(category, loadedNodes);
        pathProgressService.saveUnifiedProgress(category, loadedProgress);
      }

      setProgress(loadedProgress);

      console.log(`✅ Loaded ${loadedNodes.length} nodes for ${topicId} ${selectedPaper}`);
    } catch (error) {
      console.error('Failed to load O-Level data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNodeClick = (node: PathNode) => {
    // Extract node ID suffix (e.g., "node1" from "olevel-n3-p1-node1")
    const nodeId = node.id.split('-').pop();
    navigate(`/practice/olevel/${topicId}/${selectedPaper}/${nodeId}`);
  };

  const handleBack = () => {
    navigate('/practice/olevel');
  };

  const getNodeStatus = (nodeId: string): 'current' | 'completed' | 'locked' => {
    if (!progress) return 'current'; // All unlocked
    const nodeProgress = progress.nodes[nodeId];
    return nodeProgress?.status === 'completed' ? 'completed' : 'current';
  };

  // Calculate stats
  const totalNodes = nodes.length;
  const completedNodes = nodes.filter(n => getNodeStatus(n.id) === 'completed').length;
  const progressPercent = totalNodes > 0 ? Math.round((completedNodes / totalNodes) * 100) : 0;

  // Generate meandering path positions
  const verticalSpacing = isMobile ? 120 : 80;
  const nodePositions = generateMeanderingPath(nodes.length, verticalSpacing);

  // Calculate total path height
  const totalHeight = nodePositions.length > 0
    ? nodePositions[nodePositions.length - 1].y + 240
    : 800;

  if (loading) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{
          background: theme.gradients.panel,
          color: theme.colors.textPrimary,
        }}
      >
        <div className="text-6xl mb-4">📚</div>
        <p className="text-lg" style={{ color: theme.colors.textSecondary }}>
          Loading questions...
        </p>
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
          <BackButton onClick={handleBack} />
        </div>
        <div className="flex-1 overflow-y-auto">
          <OLevelStatsPanel
            progress={progress}
            globalStreak={globalStreak}
            topicName={topicName}
            selectedPaper={selectedPaper}
          />
        </div>
      </div>

      {/* Center Panel - Curved Path (50% desktop, 100% mobile) - Scrollable */}
      <div
        ref={centerPanelRef}
        className="w-full md:w-1/2 min-h-[100dvh] overflow-y-auto relative flex flex-col pb-20 md:pb-0"
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
          {/* Mobile header */}
          {isMobile && (
            <div className="flex items-center justify-between mb-3">
              <BackButton onClick={handleBack} />
              <div className="flex items-center space-x-2">
                {canSwitchProfiles && <ProfileSwitcher />}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg transition-all duration-200"
                  style={{
                    backgroundColor: theme.colors.interactive,
                    color: theme.colors.textSecondary,
                  }}
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
                <ProfileMenu onOpenAuth={() => setAuthModalOpen(true)} />
              </div>
            </div>
          )}

          {/* Topic Title */}
          <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
            {topicName}
          </h1>
          <div className="text-sm mt-1" style={{ color: theme.colors.textSecondary }}>
            {completedNodes}/{totalNodes} questions completed • {progressPercent}%
          </div>

          {/* Paper Toggle - Desktop only in header */}
          {!isMobile && (
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={() => setSelectedPaper('paper1')}
                className="px-6 py-2 rounded-lg font-semibold transition-all duration-200"
                style={{
                  backgroundColor: selectedPaper === 'paper1' ? theme.colors.brand : theme.colors.interactive,
                  color: selectedPaper === 'paper1' ? '#ffffff' : theme.colors.textSecondary,
                  border: `2px solid ${selectedPaper === 'paper1' ? theme.colors.brand : 'transparent'}`,
                }}
              >
                📄 Paper 1
              </button>
              <button
                onClick={() => setSelectedPaper('paper2')}
                className="px-6 py-2 rounded-lg font-semibold transition-all duration-200"
                style={{
                  backgroundColor: selectedPaper === 'paper2' ? theme.colors.brand : theme.colors.interactive,
                  color: selectedPaper === 'paper2' ? '#ffffff' : theme.colors.textSecondary,
                  border: `2px solid ${selectedPaper === 'paper2' ? theme.colors.brand : 'transparent'}`,
                }}
              >
                📄 Paper 2
              </button>
            </div>
          )}
        </div>

        {/* Paper Toggle - Mobile only, after header */}
        {isMobile && (
          <div
            className="sticky top-[120px] z-20 px-4 py-3 border-b"
            style={{
              backgroundColor: theme.glass.background,
              backdropFilter: theme.glass.backdrop,
              borderColor: theme.glass.border,
            }}
          >
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedPaper('paper1')}
                className="flex-1 px-4 py-2 rounded-lg font-semibold transition-all duration-200"
                style={{
                  backgroundColor: selectedPaper === 'paper1' ? theme.colors.brand : theme.colors.interactive,
                  color: selectedPaper === 'paper1' ? '#ffffff' : theme.colors.textSecondary,
                }}
              >
                📄 Paper 1
              </button>
              <button
                onClick={() => setSelectedPaper('paper2')}
                className="flex-1 px-4 py-2 rounded-lg font-semibold transition-all duration-200"
                style={{
                  backgroundColor: selectedPaper === 'paper2' ? theme.colors.brand : theme.colors.interactive,
                  color: selectedPaper === 'paper2' ? '#ffffff' : theme.colors.textSecondary,
                }}
              >
                📄 Paper 2
              </button>
            </div>
          </div>
        )}

        {/* Path Container */}
        <div className="relative" style={{ height: `${totalHeight}px`, minHeight: '100vh' }}>
          {nodes.length === 0 ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">📭</div>
                <p className="text-lg" style={{ color: theme.colors.textSecondary }}>
                  No questions available for this paper
                </p>
              </div>
            </div>
          ) : (
            nodes.map((node, index) => {
              const adjustedPosition = {
                ...nodePositions[index],
                y: nodePositions[index].y + 60 // Offset from header
              };

              return (
                <CircularPathNode
                  key={node.id}
                  node={node}
                  nodeProgress={progress?.nodes[node.id]}
                  status={getNodeStatus(node.id)}
                  layer={node.layer}
                  position={adjustedPosition}
                  onClick={() => handleNodeClick(node)}
                  displayNumber={index + 1}
                  isMobile={isMobile}
                />
              );
            })
          )}
        </div>
      </div>

      {/* Right Sidebar - Goals Panel (25%) - Desktop only */}
      <div
        className="hidden md:flex md:w-1/4 border-l flex-col min-h-[100dvh]"
        style={{
          borderColor: theme.glass.border,
          backgroundColor: theme.colors.sidebar,
        }}
      >
        <div className="p-4 border-b flex-shrink-0" style={{ borderColor: theme.glass.border }}>
          <h2 className="text-lg font-bold" style={{ color: theme.colors.textPrimary }}>
            Goals & Tips
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          <OLevelGoalsPanel
            progress={progress}
            selectedPaper={selectedPaper}
            totalNodes={totalNodes}
          />
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
                onClick={() => setShowStats(true)}
                className="flex-1 px-4 py-3 rounded-lg font-semibold transition-all"
                style={{
                  backgroundColor: theme.colors.interactive,
                  color: theme.colors.textPrimary,
                }}
              >
                📊 Stats
              </button>
              <button
                onClick={() => setShowGoals(true)}
                className="flex-1 px-4 py-3 rounded-lg font-semibold transition-all"
                style={{
                  backgroundColor: theme.colors.interactive,
                  color: theme.colors.textPrimary,
                }}
              >
                🎯 Goals
              </button>
            </div>
          </div>

          {/* Stats Drawer */}
          {showStats && (
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-50"
              onClick={() => setShowStats(false)}
            >
              <div
                className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto rounded-t-2xl"
                style={{
                  backgroundColor: theme.colors.surface,
                  paddingBottom: 'max(env(safe-area-inset-bottom), 12px)',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 px-4 py-3 border-b" style={{ borderColor: theme.glass.border, backgroundColor: theme.colors.surface }}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold" style={{ color: theme.colors.textPrimary }}>
                      Your Stats
                    </h3>
                    <button
                      onClick={() => setShowStats(false)}
                      className="text-2xl"
                      style={{ color: theme.colors.textSecondary }}
                    >
                      ×
                    </button>
                  </div>
                </div>
                <Suspense fallback={<div className="p-4">Loading...</div>}>
                  <OLevelStatsPanelLazy
                    progress={progress}
                    globalStreak={globalStreak}
                    topicName={topicName}
                    selectedPaper={selectedPaper}
                  />
                </Suspense>
              </div>
            </div>
          )}

          {/* Goals Drawer */}
          {showGoals && (
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-50"
              onClick={() => setShowGoals(false)}
            >
              <div
                className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto rounded-t-2xl"
                style={{
                  backgroundColor: theme.colors.surface,
                  paddingBottom: 'max(env(safe-area-inset-bottom), 12px)',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 px-4 py-3 border-b" style={{ borderColor: theme.glass.border, backgroundColor: theme.colors.surface }}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold" style={{ color: theme.colors.textPrimary }}>
                      Goals & Tips
                    </h3>
                    <button
                      onClick={() => setShowGoals(false)}
                      className="text-2xl"
                      style={{ color: theme.colors.textSecondary }}
                    >
                      ×
                    </button>
                  </div>
                </div>
                <Suspense fallback={<div className="p-4">Loading...</div>}>
                  <OLevelGoalsPanelLazy
                    progress={progress}
                    selectedPaper={selectedPaper}
                    totalNodes={totalNodes}
                  />
                </Suspense>
              </div>
            </div>
          )}
        </>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  );
};

export default OLevelNodeSelector;
