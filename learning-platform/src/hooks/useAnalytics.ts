import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAnalyticsInstance } from '../services/firebase';

/**
 * Hook to track page views in Google Analytics
 * This hook should be used once in the root of the application (inside Router)
 */
export const useAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize analytics and log page view
        const trackPageView = async () => {
            try {
                const analyticsInstance = await getAnalyticsInstance();
                if (analyticsInstance) {
                    const { logEvent } = await import('firebase/analytics');
                    logEvent(analyticsInstance, 'page_view', {
                        page_path: location.pathname + location.search,
                        page_title: document.title
                    });
                }
            } catch (error) {
                console.warn('Analytics tracking failed:', error);
            }
        };

        trackPageView();
    }, [location]);
};
