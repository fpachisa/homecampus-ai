/**
 * Homework History Page Wrapper
 * Provides studentId from auth context to HomeworkHistoryPage
 */

import { useAuth } from '../contexts/AuthContext';
import { useActiveProfile } from '../contexts/ActiveProfileContext';
import { HomeworkHistoryPage } from '../components/homework/HomeworkHistoryPage';
import LoadingSpinner from '../components/LoadingSpinner';

const HomeworkHistoryPageWrapper = () => {
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

  return <HomeworkHistoryPage studentId={studentId} />;
};

export default HomeworkHistoryPageWrapper;
