import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ActiveProfileProvider } from './contexts/ActiveProfileContext';
import { registerAllVisualizers } from './utils/registerVisualizers';

/**
 * Main App component - Entry point for the application
 *
 * This component sets up:
 * - Theme system (dark/light mode)
 * - Authentication context
 * - Active profile management (for parent/student switching)
 * - React Router for URL-based navigation
 * - Math visualizer registration
 */
function App() {
  // Register all math visualizers when the app starts
  useEffect(() => {
    registerAllVisualizers();
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <AuthProvider>
        <ActiveProfileProvider>
          <RouterProvider router={router} />
        </ActiveProfileProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
