import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, useParams, Navigate, useNavigate } from 'react-router-dom';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { pathConfigLoader } from '../services/pathConfigLoader';
import { oLevelPathLoader } from '../services/oLevelPathLoader';
import type { PathNode } from '../types/practice';

// Lazy load heavy practice components
const InteractivePathView = lazy(() => import('../components/practice/InteractivePathView'));
const PracticeSessionView = lazy(() => import('../components/practice/PracticeSessionView'));
const OLevelTopicSelector = lazy(() => import('../components/practice/OLevelTopicSelector'));
const OLevelNodeSelector = lazy(() => import('../components/practice/OLevelNodeSelector'));

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
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Loading...</p>
      </div>
    }>
      <InteractivePathView />
    </Suspense>
  );
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
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Loading...</p>
      </div>
    }>
      <PracticeSessionView
        category={pathId}
        difficulty="easy"
        node={node}
        onComplete={() => goToPractice(pathId)}
        onBack={() => goToPractice(pathId)}
      />
    </Suspense>
  );
};

// O-Level topic selector
const OLevelOverview = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Loading O-Level topics...</p>
      </div>
    }>
      <OLevelTopicSelector />
    </Suspense>
  );
};

// O-Level node selector view (shows all nodes for a topic with Paper 1/2 toggle)
const OLevelPathView = () => {
  const { topicId } = useParams<{ topicId: string }>();

  if (!topicId) {
    return <Navigate to="/practice/olevel" replace />;
  }

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Loading questions...</p>
      </div>
    }>
      <OLevelNodeSelector />
    </Suspense>
  );
};

// O-Level practice session
const OLevelSession = () => {
  const { topicId, paper, nodeId } = useParams<{ topicId: string; paper: string; nodeId: string }>();
  const navigate = useNavigate();
  const [nodes, setNodes] = useState<PathNode[]>([]);
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNodes = async () => {
      if (!topicId || !paper) return;

      try {
        const paperType = paper as 'paper1' | 'paper2';
        const loadedNodes = await oLevelPathLoader.loadOLevelPath(topicId, paperType);
        setNodes(loadedNodes);

        // Find current node index by matching node ID
        if (nodeId) {
          // nodeId might be "node1", "node2", etc. or full ID
          const index = loadedNodes.findIndex(n =>
            n.id === nodeId ||
            n.id.endsWith(`-${nodeId}`) ||
            n.id === `olevel-${topicId.toLowerCase()}-${paper}-${nodeId}`
          );
          setCurrentNodeIndex(index >= 0 ? index : 0);
        }
      } catch (error) {
        console.error('Failed to load O-Level nodes:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNodes();
  }, [topicId, paper, nodeId]);

  if (!topicId || !paper) {
    return <Navigate to="/practice/olevel" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Loading questions...</p>
      </div>
    );
  }

  if (nodes.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <p className="mb-4">No questions available for this topic.</p>
          <button
            onClick={() => navigate('/practice/olevel')}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            Back to Topics
          </button>
        </div>
      </div>
    );
  }

  const currentNode = nodes[currentNodeIndex];

  const handleComplete = () => {
    // Move to next node or back to node selector
    if (currentNodeIndex < nodes.length - 1) {
      const nextNode = nodes[currentNodeIndex + 1];
      const nextNodeId = nextNode.id.split('-').pop(); // Extract "node1", "node2", etc.
      navigate(`/practice/olevel/${topicId}/${paper}/${nextNodeId}`);
    } else {
      // All nodes complete, go back to node selector
      navigate(`/practice/olevel/${topicId}`);
    }
  };

  const handleBack = () => {
    // Go back to node selector
    navigate(`/practice/olevel/${topicId}`);
  };

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Loading...</p>
      </div>
    }>
      <PracticeSessionView
        category={`olevel-${topicId}-${paper}`}
        difficulty="easy"
        node={currentNode}
        onComplete={handleComplete}
        onBack={handleBack}
      />
    </Suspense>
  );
};

export default function PracticeRouter() {
  return (
    <Routes>
      <Route index element={<PracticeOverview />} />

      {/* O-Level routes */}
      <Route path="olevel" element={<OLevelOverview />} />
      <Route path="olevel/:topicId" element={<OLevelPathView />} />
      <Route path="olevel/:topicId/:paper/:nodeId" element={<OLevelSession />} />

      {/* Regular practice routes */}
      <Route path=":pathId" element={<PathMapView />} />
      <Route path=":pathId/:nodeId" element={<PracticeSession />} />
    </Routes>
  );
}
