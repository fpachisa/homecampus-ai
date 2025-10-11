/**
 * InteractivePathView - Complete redesign with 3-column layout
 *
 * Left: Stats Panel
 * Center: Curved path with circular nodes
 * Right: Leaderboard & Goals
 */

import React, { useEffect, useState, useRef } from 'react';
import type { PathNode, PathLayer, PathProgress } from '../../types/practice';
import { yamlPathLoader } from '../../services/yamlPathLoader';
import { pathProgressService } from '../../services/pathProgressService';
import { generateMeanderingPath } from '../../utils/pathGeometryUtils';
import { CircularPathNode } from './CircularPathNode';
import { StatsPanel } from './StatsPanel';
import { LeaderboardPanel } from './LeaderboardPanel';
import { MilestoneMarker } from './MilestoneMarker';
import { BackButton } from '../BackButton';
import { useTheme } from '../../hooks/useTheme';

interface InteractivePathViewProps {
  category: string;
  onSelectNode: (nodeId: string) => void;
  onBack: () => void;
  onShowAchievements?: () => void;
}

export const InteractivePathView: React.FC<InteractivePathViewProps> = ({
  category,
  onSelectNode,
  onBack,
  onShowAchievements,
}) => {
  const { theme } = useTheme();
  const [nodes, setNodes] = useState<PathNode[]>([]);
  const [progress, setProgress] = useState<PathProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const centerPanelRef = useRef<HTMLDivElement>(null);
  const [pathWidth, setPathWidth] = useState(600);

  useEffect(() => {
    loadPathData();
  }, [category]);

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

  const loadPathData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load unified path
      const loadedNodes = await yamlPathLoader.loadUnifiedPath(category);
      setNodes(loadedNodes);

      // Load or initialize progress
      let pathProgress = pathProgressService.loadUnifiedProgress(category);

      if (!pathProgress) {
        pathProgress = pathProgressService.initializeUnifiedProgress(category, loadedNodes);
        pathProgressService.saveUnifiedProgress(category, pathProgress);
      } else {
        const wasUpdated = pathProgressService.syncUnifiedProgress(pathProgress, loadedNodes);
        if (wasUpdated) {
          pathProgressService.saveUnifiedProgress(category, pathProgress);
        }
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
            onClick={onBack}
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
  };

  // Layer boundaries for milestones
  const foundationEnd = nodesByLayer.foundation.length - 1;
  const integrationEnd = foundationEnd + nodesByLayer.integration.length;

  // Add extra spacing at layer boundaries for milestone markers
  const layerGap = 100; // Extra gap for milestone markers
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
          <BackButton onClick={onBack} />
        </div>
        <div className="flex-1 overflow-y-auto">
          <StatsPanel progress={progress} onShowAchievements={onShowAchievements} />
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
                onClick={() => onSelectNode(node.id)}
              />
            );
          })}

          {/* Milestone Markers - positioned in the gap between layers */}
          {nodesByLayer.foundation.length > 0 && foundationEnd + 1 < nodes.length && (
            <MilestoneMarker
              type="layer-complete"
              layer="foundation"
              position={{ x: 50, y: nodePositions[foundationEnd]?.y + 60 + 100 || 0 }}
              isUnlocked={progress.layerProgress.foundation.completed === progress.layerProgress.foundation.total}
            />
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
          <LeaderboardPanel progress={progress} allNodes={nodes} />
        </div>
      </div>
    </div>
  );
};
