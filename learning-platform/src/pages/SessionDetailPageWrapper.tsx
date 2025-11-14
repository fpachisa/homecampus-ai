/**
 * Session Detail Page Wrapper
 * Provides studentId from auth context to SessionDetailView
 */

import { useAuth } from '../contexts/AuthContext';
import { useActiveProfile } from '../contexts/ActiveProfileContext';
import { SessionDetailView } from '../components/homework/SessionDetailView';
import LoadingSpinner from '../components/LoadingSpinner';

const SessionDetailPageWrapper = () => {
  const { user, userProfile, loading } = useAuth();
  const { activeProfile } = useActiveProfile();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (!user) {
    return <div>Not authenticated</div>;
  }

  // Use active profile if available (for parents viewing student data)
  const studentId = activeProfile?.uid || userProfile?.uid || user.uid;

  return <SessionDetailView studentId={studentId} />;
};

export default SessionDetailPageWrapper;
