/**
 * PathColumn - Single difficulty column
 *
 * Displays a vertical column of nodes for one difficulty level
 * with connecting lines and header.
 */

import React from 'react';
import type { PathNode, PathProgress, PathDifficulty } from '../../types/practice';
import { PathNodeCard } from './PathNodeCard';

interface PathColumnProps {
  difficulty: PathDifficulty;
  nodes: PathNode[];
  progress: PathProgress;
  onSelectNode: (nodeId: string) => void;
}

export const PathColumn: React.FC<PathColumnProps> = ({
  difficulty,
  nodes,
  progress,
  onSelectNode,
}) => {
  // Color schemes
  const colorSchemes = {
    easy: {
      title: 'Easy Path',
      icon: '🟢',
      gradient: 'from-emerald-400 to-green-500',
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-300',
    },
    medium: {
      title: 'Medium Path',
      icon: '🟡',
      gradient: 'from-amber-400 to-orange-500',
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-300',
    },
    hard: {
      title: 'Hard Path',
      icon: '🔴',
      gradient: 'from-rose-400 to-purple-600',
      bg: 'bg-rose-50',
      text: 'text-rose-700',
      border: 'border-rose-300',
    },
  };

  const colors = colorSchemes[difficulty];

  // Calculate completion stats
  const completedNodes = Object.values(progress.nodes).filter(
    (n) => n.status === 'completed'
  ).length;

  const totalNodes = nodes.length;
  const progressPercent = totalNodes > 0 ? Math.round((completedNodes / totalNodes) * 100) : 0;

  // Determine node status
  const getNodeStatus = (nodeId: string): 'locked' | 'current' | 'completed' => {
    const nodeProgress = progress.nodes[nodeId];
    if (!nodeProgress) return 'locked';
    return nodeProgress.status;
  };

  return (
    <div className={`flex flex-col items-center p-4 rounded-lg ${colors.bg} ${colors.border} border-2`}>
      {/* Header */}
      <div className="text-center mb-6">
        <div className="text-2xl mb-2">{colors.icon}</div>
        <h3 className={`text-lg font-bold ${colors.text}`}>{colors.title}</h3>
        <div className="mt-2 text-sm text-gray-600">
          Progress: {completedNodes}/{totalNodes}
        </div>
        <div className="mt-1 w-32 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <div
            className={`h-full bg-gradient-to-r ${colors.gradient} transition-all`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Nodes Path */}
      <div className="relative flex flex-col items-center space-y-6">
        {/* Start marker */}
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Start
        </div>

        {/* Nodes */}
        {nodes.map((node, index) => (
          <div key={node.id} className="relative flex flex-col items-center">
            {/* Connecting line (before node, except first) */}
            {index > 0 && (
              <div
                className={`absolute -top-6 w-0.5 h-6 bg-gradient-to-b ${colors.gradient}`}
                style={{ top: '-1.5rem' }}
              />
            )}

            {/* Node Card */}
            <PathNodeCard
              node={node}
              nodeProgress={progress.nodes[node.id]}
              status={getNodeStatus(node.id)}
              difficulty={difficulty}
              onClick={() => onSelectNode(node.id)}
            />

            {/* Connecting line (after node, except last) */}
            {index < nodes.length - 1 && (
              <div className={`w-0.5 h-6 bg-gradient-to-b ${colors.gradient} mt-2`} />
            )}
          </div>
        ))}

        {/* End marker (if all complete) */}
        {completedNodes === totalNodes && totalNodes > 0 && (
          <div className="mt-4 text-2xl">
            🏆
            <div className="text-xs font-semibold text-gray-500 mt-1">Complete!</div>
          </div>
        )}
      </div>
    </div>
  );
};
