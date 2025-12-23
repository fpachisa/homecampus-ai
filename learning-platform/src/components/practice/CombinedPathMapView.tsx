/**
 * CombinedPathMapView - Unified single-path practice view
 *
 * Displays a single vertical path with Foundation → Integration → Application layers.
 * All nodes are unlocked with smart entry point suggestions.
 */

import { useEffect, useState } from 'react';
import type { PathNode, PathLayer, PathProgress } from '../../types/practice';
import { yamlPathLoader } from '../../services/yamlPathLoader';
import { pathProgressService } from '../../services/pathProgressService';
import { useTheme } from '../../hooks/useTheme';
import { LoadingSpinner } from '../LoadingSpinner';

interface CombinedPathMapViewProps {
  category: string;
  onSelectNode: (nodeId: string) => void;
  onBack: () => void;
}

export const CombinedPathMapView: React.FC<CombinedPathMapViewProps> = ({
  category,
  onSelectNode,
  onBack,
}) => {
  const { theme } = useTheme();
  const [nodes, setNodes] = useState<PathNode[]>([]);
  const [progress, setProgress] = useState<PathProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPathData();
  }, [category]);

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
        // First time - initialize fresh progress
        pathProgress = pathProgressService.initializeUnifiedProgress(category, loadedNodes);
        pathProgressService.saveUnifiedProgress(category, pathProgress);
      } else {
        // Existing progress - sync with current config in case nodes were added
        const wasUpdated = pathProgressService.syncUnifiedProgress(pathProgress, loadedNodes);

        if (wasUpdated) {
          console.log('✅ Progress synced with updated path configuration');
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

  // Group nodes by layer
  const nodesByLayer: Record<PathLayer, PathNode[]> = {
    foundation: nodes.filter(n => n.layer === 'foundation'),
    integration: nodes.filter(n => n.layer === 'integration'),
    application: nodes.filter(n => n.layer === 'application'),
    examPractice: nodes.filter(n => n.layer === 'examPractice'),
    'word-problems': nodes.filter(n => n.layer === 'word-problems'),
  };

  // Layer metadata
  const layerMetadata: Record<PathLayer, { title: string; icon: string; color: string; colorLight: string; description: string }> = {
    foundation: {
      title: 'Foundation',
      icon: '🏗️',
      color: '#FFA500',
      colorLight: '#FFA50020',
      description: 'Core concepts and individual skills',
    },
    integration: {
      title: 'Integration',
      icon: '🔗',
      color: '#5865F2',
      colorLight: '#5865F220',
      description: 'Combining multiple concepts',
    },
    application: {
      title: 'Application',
      icon: '🎯',
      color: '#10B981',
      colorLight: '#10B98120',
      description: 'Real-world problem solving',
    },
    examPractice: {
      title: 'Exam Practice',
      icon: '👑',
      color: '#EB459E',
      colorLight: '#EB459E20',
      description: 'Exam-style questions and practice',
    },
    'word-problems': {
      title: 'Word Problems',
      icon: '📝',
      color: '#8B5CF6',
      colorLight: '#8B5CF620',
      description: 'Applied word problems with bar models',
    },
  };

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
          <div className="text-6xl mb-4">⚠️</div>
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

  // Calculate overall stats
  const totalNodes = nodes.length;
  const totalCompletedNodes = Object.values(progress.nodes).filter((n) => n.status === 'completed').length;
  const overallProgressPercent = totalNodes > 0 ? Math.round((totalCompletedNodes / totalNodes) * 100) : 0;

  // Get node status (all unlocked in new system)
  const getNodeStatus = (nodeId: string): 'current' | 'completed' => {
    const nodeProgress = progress.nodes[nodeId];
    if (!nodeProgress || nodeProgress.status === 'locked') return 'current'; // All unlocked
    return nodeProgress.status === 'completed' ? 'completed' : 'current';
  };

  // Handle layer card click - scroll to layer
  const handleLayerClick = (layer: PathLayer) => {
    const layerElement = document.getElementById(`layer-${layer}`);
    if (layerElement) {
      layerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen" style={{ background: theme.gradients.panel, color: theme.colors.textPrimary }}>
      {/* Header */}
      <div
        className="sticky top-0 z-10 shadow-md border-b"
        style={{
          background: theme.glass.background,
          backdropFilter: theme.glass.backdrop,
          borderColor: theme.glass.border,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div>
                <h1 className="text-2xl font-bold capitalize" style={{ color: theme.colors.textPrimary }}>
                  {category} Practice
                </h1>
                <div className="text-sm" style={{ color: theme.colors.textSecondary }}>
                  Progress: {totalCompletedNodes}/{totalNodes} nodes ({overallProgressPercent}%)
                </div>
              </div>
            </div>
            <div className="text-4xl">🗺️</div>
          </div>

          {/* Layer Progress Summary - Clickable to jump to sections */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {(['foundation', 'word-problems', 'examPractice'] as PathLayer[]).filter(layer => nodesByLayer[layer].length > 0).map((layer) => {
              const completed = progress.layerProgress[layer].completed;
              const total = progress.layerProgress[layer].total;
              const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
              const meta = layerMetadata[layer];

              return (
                <button
                  key={layer}
                  onClick={() => handleLayerClick(layer)}
                  className="p-3 rounded-lg transition-all duration-200 cursor-pointer text-left"
                  style={{
                    backgroundColor: meta.colorLight,
                    border: `2px solid transparent`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = meta.color;
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <span>{meta.icon}</span>
                    <span className="text-sm font-semibold" style={{ color: meta.color }}>
                      {meta.title}
                    </span>
                  </div>
                  <div className="text-xs" style={{ color: theme.colors.textSecondary }}>
                    {completed}/{total} ({percent}%)
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Single Vertical Path */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Layers - only render layers that have nodes */}
        {(['foundation', 'word-problems', 'examPractice'] as PathLayer[]).filter(layer => nodesByLayer[layer].length > 0).map((layer, layerIndex, filteredLayers) => {
          const layerNodes = nodesByLayer[layer];
          const meta = layerMetadata[layer];

          // Calculate display number offset (count of all nodes in previous rendered layers)
          const displayNumberOffset = filteredLayers
            .slice(0, layerIndex)
            .reduce((sum, prevLayer) => sum + nodesByLayer[prevLayer].length, 0);

          return (
            <div key={layer} id={`layer-${layer}`} className="mb-8">
              {/* Layer Nodes */}
              <div className="flex flex-col items-center space-y-6">
                {layerNodes.map((node, index) => (
                  <div key={node.id} className="relative flex flex-col items-center w-full max-w-md">
                    {/* Connecting line (before node, except first) */}
                    {index > 0 && (
                      <div
                        className="absolute w-1 h-6"
                        style={{
                          top: '-1.5rem',
                          backgroundColor: meta.color,
                          opacity: 0.3,
                        }}
                      />
                    )}

                    {/* Node Card */}
                    <div
                      className="w-full p-6 rounded-xl transition-all duration-300 cursor-pointer"
                      style={{
                        background: theme.glass.background,
                        border: `2px solid ${theme.glass.border}`,
                        backdropFilter: theme.glass.backdrop,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = meta.color;
                        e.currentTarget.style.transform = 'scale(1.02)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = theme.glass.border;
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      onClick={() => onSelectNode(node.id)}
                    >
                      <div className="flex items-start space-x-4">
                        {/* Status Circle */}
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: getNodeStatus(node.id) === 'completed' ? meta.color : meta.colorLight,
                            border: `3px solid ${meta.color}`,
                          }}
                        >
                          <span className="text-xl">
                            {getNodeStatus(node.id) === 'completed' ? '✓' : displayNumberOffset + index + 1}
                          </span>
                        </div>

                        {/* Node Info */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold" style={{ color: theme.colors.textPrimary }}>
                              {node.title}
                            </h3>
                            <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: meta.colorLight, color: meta.color }}>
                              {node.problemsRequired} problems
                            </span>
                          </div>

                          {/* Prerequisites */}
                          {node.prerequisites.length > 0 && (
                            <div className="text-xs mb-2" style={{ color: theme.colors.textMuted }}>
                              💡 Recommended after: {node.prerequisites.map(id => nodes.find(n => n.id === id)?.title || id).join(', ')}
                            </div>
                          )}

                          {/* Progress */}
                          {progress.nodes[node.id] && progress.nodes[node.id].problemsAttempted > 0 && (
                            <div className="mt-2">
                              <div className="flex justify-between text-xs mb-1" style={{ color: theme.colors.textSecondary }}>
                                <span>Progress</span>
                                <span>
                                  {progress.nodes[node.id].problemsAttempted}/{node.problemsRequired}
                                </span>
                              </div>
                              <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: theme.colors.interactive }}>
                                <div
                                  className="h-full transition-all"
                                  style={{
                                    width: `${Math.round((progress.nodes[node.id].problemsAttempted / node.problemsRequired) * 100)}%`,
                                    backgroundColor: meta.color,
                                  }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Connecting line (after node, except last in layer) */}
                    {index < layerNodes.length - 1 && (
                      <div
                        className="w-1 h-6"
                        style={{
                          backgroundColor: meta.color,
                          opacity: 0.3,
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* End Marker */}
        {totalCompletedNodes === totalNodes && totalNodes > 0 && (
          <div className="text-center mt-8">
            <div className="text-6xl mb-2">🏆</div>
            <div className="text-2xl font-bold mb-1" style={{ color: theme.colors.brand }}>
              Path Complete!
            </div>
            <div className="text-sm" style={{ color: theme.colors.textSecondary }}>
              You've mastered all {totalNodes} nodes
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-12 flex justify-center space-x-4">
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to reset all progress?')) {
                pathProgressService.clearUnifiedProgress(category);
                loadPathData();
              }
            }}
            className="px-4 py-2 rounded-lg transition"
            style={{
              backgroundColor: theme.colors.interactive,
              color: theme.colors.textSecondary,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.error;
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.interactive;
              e.currentTarget.style.color = theme.colors.textSecondary;
            }}
          >
            Reset Progress
          </button>
        </div>
      </div>
    </div>
  );
};
