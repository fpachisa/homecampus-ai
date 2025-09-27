import { useState, createContext, useContext } from 'react';
import MainLayout from './components/layout/MainLayout';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { sessionStorage } from './services/sessionStorage';
import type { TopicId } from './prompts/topics/P6-Math-Fractions';
import './styles/animations.css';

// App state context for managing application-wide state
interface AppState {
  selectedTopic: TopicId | null;
  resumeSession: boolean;
}

interface AppContextType {
  appState: AppState;
  handleTopicSelect: (topicId: TopicId) => void;
  handleResumeSession: () => void;
  handleBackToTopics: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

// App state provider
function AppProvider({ children }: { children: React.ReactNode }) {
  const [appState, setAppState] = useState<AppState>({
    selectedTopic: null,
    resumeSession: false,
  });

  const handleTopicSelect = (topicId: TopicId) => {
    setAppState({
      selectedTopic: topicId,
      resumeSession: false, // New session
    });
  };

  const handleResumeSession = () => {
    const sessionData = sessionStorage.loadSession();
    if (sessionData) {
      setAppState({
        selectedTopic: sessionData.topicId as TopicId,
        resumeSession: true,
      });
    }
  };

  const handleBackToTopics = () => {
    setAppState({
      selectedTopic: null,
      resumeSession: false,
    });
  };

  return (
    <AppContext.Provider value={{
      appState,
      handleTopicSelect,
      handleResumeSession,
      handleBackToTopics,
    }}>
      {children}
    </AppContext.Provider>
  );
}

// Inner App component that has access to theme context
function AppContent() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

// Main App component with providers
function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
