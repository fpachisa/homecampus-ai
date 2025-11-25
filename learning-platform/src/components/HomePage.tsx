/**
 * HomePage - Main landing page for authenticated users
 *
 * Routes to:
 * - StudentDashboard (for students)
 * - ParentDashboard (for parents)
 *
 * Layout (header, footer, background) is handled by AuthenticatedLayout
 */

import { ParentDashboard } from './parent/ParentDashboard';
import { StudentDashboard } from './dashboard/StudentDashboard';
import { useActiveProfile } from '../contexts/ActiveProfileContext';

const HomePage: React.FC = () => {
  const { isViewingAsParent } = useActiveProfile();

  return (
    <>
      {isViewingAsParent ? <ParentDashboard /> : <StudentDashboard />}
    </>
  );
};

export default HomePage;
