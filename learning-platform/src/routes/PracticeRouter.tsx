import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { pathConfigLoader } from '../services/pathConfigLoader';
import InteractivePathView from '../components/practice/InteractivePathView';
import PracticeSessionView from '../components/practice/PracticeSessionView';
import type { PathNode } from '../types/practice';

/**
 * PracticeRouter handles all /practice/* routes
 *
 * Routes:
 * - /practice - Overview page (redirects to /home for now)
 * - /practice/:pathId - Interactive path map view
 * - /practice/:pathId/:nodeId - Active practice session on specific node
 *
 * Note: Practice mode uses NODES only, NO sections
 */

// Practice overview - for now, redirect to /home
const PracticeOverview = () => {
  return <Navigate to="/home" replace />;
};

// Interactive path map view
const PathMapView = () => {
  const { pathId } = useParams<{ pathId: string }>();

  if (!pathId) {
    return <Navigate to="/home" replace />;
  }

  // InteractivePathView now reads pathId from URL params internally
  return <InteractivePathView />;
};

// Active practice session on a specific node
const PracticeSession = () => {
  const { pathId, nodeId } = useParams<{ pathId: string; nodeId: string }>();
  const { goToPractice } = useAppNavigation();
  const [node, setNode] = useState<PathNode | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNode = async () => {
      if (!pathId || !nodeId) return;

      try {
        const nodes = await pathConfigLoader.loadUnifiedPathNodes(pathId);
        const foundNode = nodes.find(n => n.id === nodeId);
        setNode(foundNode || null);
      } catch (error) {
        console.error('Failed to load node:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNode();
  }, [pathId, nodeId]);

  if (!pathId || !nodeId) {
    return <Navigate to="/home" replace />;
  }

  if (loading || !node) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <PracticeSessionView
      category={pathId}
      difficulty="easy"
      node={node}
      onComplete={() => goToPractice(pathId)}
      onBack={() => goToPractice(pathId)}
    />
  );
};

export default function PracticeRouter() {
  return (
    <Routes>
      <Route index element={<PracticeOverview />} />
      <Route path=":pathId" element={<PathMapView />} />
      <Route path=":pathId/:nodeId" element={<PracticeSession />} />
    </Routes>
  );
}
