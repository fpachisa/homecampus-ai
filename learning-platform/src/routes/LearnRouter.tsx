import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

/**
 * LearnRouter handles all /learn/* routes
 *
 * Routes:
 * - /learn - Overview/topic selector (redirects to /home for now)
 * - /learn/:pathId - Welcome screen for a topic
 * - /learn/:pathId/socratic - Active Socratic learning session
 *
 * Query params:
 * - ?section=N - Section number for progression tracking
 */

// Learn overview/selector - for now, redirect to /home
const LearnOverview = () => {
  return <Navigate to="/home" replace />;
};

// Topic welcome screen
// Note: This route is currently not used - we go directly to socratic mode
// Keeping it for future use if we want a welcome screen before socratic
const TopicWelcome = () => {
  const { pathId } = useParams<{ pathId: string }>();

  if (!pathId) {
    return <Navigate to="/home" replace />;
  }

  // Redirect to socratic mode for now
  return <Navigate to={`/learn/${pathId}/socratic`} replace />;
};

// Active Socratic session
// Note: MainLayout will read pathId and section from URL params internally
const SocraticSession = () => {
  const { pathId } = useParams<{ pathId: string }>();

  if (!pathId) {
    return <Navigate to="/home" replace />;
  }

  return <MainLayout />;
};

export default function LearnRouter() {
  return (
    <Routes>
      <Route index element={<LearnOverview />} />
      <Route path=":pathId" element={<TopicWelcome />} />
      <Route path=":pathId/socratic" element={<SocraticSession />} />
    </Routes>
  );
}
