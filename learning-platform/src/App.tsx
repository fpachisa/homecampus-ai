import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { registerAllVisualizers } from './utils/registerVisualizers';

/**
 * Main App component - Entry point for the application
 *
 * This component sets up:
 * - React Router for URL-based navigation
 * - Math visualizer registration
 * 
 * Note: Context Providers (Auth, Theme, etc.) are moved to main.tsx
 */
function App() {
  // Register all math visualizers when the app starts
  useEffect(() => {
    registerAllVisualizers();
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
