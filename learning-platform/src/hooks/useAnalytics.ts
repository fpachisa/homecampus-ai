import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '../services/firebase';
import { logEvent } from 'firebase/analytics';

/**
 * Hook to track page views in Google Analytics
 * This hook should be used once in the root of the application (inside Router)
 */
export const useAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Analytics is initialized asynchronously and might be null in non-browser envs
        if (analytics) {
            analytics.then((analyticsInstance) => {
                if (analyticsInstance) {

                    logEvent(analyticsInstance, 'page_view', {
                        page_path: location.pathname + location.search,
                        page_title: document.title
                    });
                }
            });
        }
    }, [location]);
};
