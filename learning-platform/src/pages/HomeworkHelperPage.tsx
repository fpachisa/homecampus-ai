/**
 * HomeworkHelperPage - Wrapper page for Homework Helper feature
 * Provides student context and integrates with the app's auth system
 */

import { HomeworkHelper } from '../components/homework';
import { useAuth } from '../contexts/AuthContext';
import { useActiveProfile } from '../contexts/ActiveProfileContext';
import LoadingSpinner from '../components/LoadingSpinner';

const HomeworkHelperPage: React.FC = () => {
  const { userProfile, loading } = useAuth();
  const { activeProfile } = useActiveProfile();

  // Use active profile if viewing as student, otherwise use userProfile
  const currentProfile = activeProfile || userProfile;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (!currentProfile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Profile Not Found</h2>
          <p className="text-gray-600">Please log in to use the Homework Helper.</p>
        </div>
      </div>
    );
  }

  // Extract student information
  const studentId = currentProfile.uid;

  // Extract numeric grade from gradeLevel string (e.g., "Secondary 3" -> 9)
  // Secondary 1 = Grade 7, Secondary 2 = Grade 8, Secondary 3 = Grade 9, etc.
  let studentGrade = 9; // Default to grade 9 if not set
  if (currentProfile.gradeLevel) {
    const match = currentProfile.gradeLevel.match(/Secondary (\d+)/);
    if (match) {
      const secondaryLevel = parseInt(match[1]);
      studentGrade = secondaryLevel + 6; // Secondary 1 = Grade 7
    }
  }

  return (
    <HomeworkHelper
      studentId={studentId}
      studentGrade={studentGrade}
    />
  );
};

export default HomeworkHelperPage;
