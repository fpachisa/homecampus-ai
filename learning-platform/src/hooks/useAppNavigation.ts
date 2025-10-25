import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

/**
 * Custom navigation hook for common routing patterns in the app
 *
 * Provides convenient methods for navigating between pages without
 * manually constructing URLs everywhere
 */
export function useAppNavigation() {
  const navigate = useNavigate();

  return {
    /**
     * Navigate to home/dashboard page
     */
    goToHome: useCallback(() => {
      navigate('/home');
    }, [navigate]),

    /**
     * Navigate to learn mode
     * @param pathId - Optional path identifier (e.g., 's3-math-trigonometry')
     * @param section - Optional section number
     * @param socratic - If true, go directly to socratic mode
     * @param topicId - Optional subtopic identifier (e.g., 's4-math-probability-basic-concepts')
     */
    goToLearn: useCallback(
      (pathId?: string, section?: number, socratic: boolean = false, topicId?: string) => {
        if (!pathId) {
          navigate('/learn');
          return;
        }

        const queryParams = new URLSearchParams();
        if (section) queryParams.set('section', section.toString());
        if (topicId) queryParams.set('topic', topicId);

        const queryString = queryParams.toString();
        const path = socratic
          ? `/learn/${pathId}/socratic${queryString ? `?${queryString}` : ''}`
          : `/learn/${pathId}${queryString ? `?${queryString}` : ''}`;

        navigate(path);
      },
      [navigate]
    ),

    /**
     * Navigate to practice mode
     * @param pathId - Optional path identifier
     * @param nodeId - Optional node identifier for specific practice session
     */
    goToPractice: useCallback(
      (pathId?: string, nodeId?: string) => {
        if (!pathId) {
          navigate('/practice');
          return;
        }

        if (nodeId) {
          navigate(`/practice/${pathId}/${nodeId}`);
        } else {
          navigate(`/practice/${pathId}`);
        }
      },
      [navigate]
    ),

    /**
     * Navigate to profile page
     * @param tab - Optional tab name (e.g., 'settings', 'achievements')
     */
    goToProfile: useCallback(
      (tab?: string) => {
        const tabParam = tab ? `?tab=${tab}` : '';
        navigate(`/profile${tabParam}`);
      },
      [navigate]
    ),

    /**
     * Navigate to parent dashboard
     */
    goToParentDashboard: useCallback(() => {
      navigate('/parent');
    }, [navigate]),

    /**
     * Navigate to onboarding
     */
    goToOnboarding: useCallback(() => {
      navigate('/onboarding');
    }, [navigate]),

    /**
     * Navigate to login
     */
    goToLogin: useCallback(() => {
      navigate('/login');
    }, [navigate]),

    /**
     * Navigate to signup
     */
    goToSignup: useCallback(() => {
      navigate('/signup');
    }, [navigate]),

    /**
     * Navigate to landing page
     */
    goToLanding: useCallback(() => {
      navigate('/');
    }, [navigate]),

    /**
     * Go back to previous page
     */
    goBack: useCallback(() => {
      navigate(-1);
    }, [navigate]),

    /**
     * Navigate to dev tool
     * @param tool - Tool name (e.g., 'tts', 'avatar', 'visualizers')
     */
    goToDev: useCallback(
      (tool?: string) => {
        if (!tool) {
          navigate('/dev');
        } else {
          navigate(`/dev/${tool}`);
        }
      },
      [navigate]
    ),
  };
}
