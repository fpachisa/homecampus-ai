import { useState, createContext, useContext, useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import HomePage from './components/HomePage';
import FractionsTopicView from './components/FractionsTopicView';
import TTSTest from './components/TTSTest';
import AvatarTest from './components/AvatarTest';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { sessionStorage } from './services/sessionStorage';
import type { TopicId } from './prompts/topics/P6-Math-Fractions';
import { registerAllVisualizers } from './utils/registerVisualizers';
import './styles/animations.css';

// App state context for managing application-wide state
interface AppState {
  selectedCategory: string | null; // 'fractions', 'whole-numbers', etc.
  selectedTopic: TopicId | null;
}

interface AppContextType {
  appState: AppState;
  handleCategorySelect: (category: string) => void;
  handleTopicSelect: (topicId: TopicId) => void;
  handleBackToTopics: () => void;
  handleBackToHome: () => void;
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
    selectedCategory: null,
    selectedTopic: null,
  });

  const handleCategorySelect = (category: string) => {
    setAppState({
      selectedCategory: category,
      selectedTopic: null,
    });
  };

  const handleTopicSelect = (topicId: TopicId) => {
    setAppState((prev) => ({
      ...prev,
      selectedTopic: topicId,
    }));
  };

  const handleBackToTopics = () => {
    setAppState((prev) => ({
      ...prev,
      selectedTopic: null,
    }));
  };

  const handleBackToHome = () => {
    setAppState({
      selectedCategory: null,
      selectedTopic: null,
    });
  };

  return (
    <AppContext.Provider value={{
      appState,
      handleCategorySelect,
      handleTopicSelect,
      handleBackToTopics,
      handleBackToHome,
    }}>
      {children}
    </AppContext.Provider>
  );
}

// Inner App component that has access to theme context
function AppContent() {
  // Check if test mode is enabled via URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const testMode = urlParams.get('test');

  if (testMode === 'tts') {
    return <TTSTest />;
  }

  if (testMode === 'avatar') {
    return <AvatarTest />;
  }

  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

// Router component to handle navigation between HomePage, TopicView, and MainLayout
function AppRouter() {
  const { appState, handleCategorySelect, handleTopicSelect, handleBackToHome } = useAppContext();

  // Show HomePage when no category is selected
  if (!appState.selectedCategory) {
    return <HomePage onTopicSelect={handleCategorySelect} />;
  }

  // Show FractionsTopicView when category is selected but no subtopic
  if (appState.selectedCategory === 'fractions' && !appState.selectedTopic) {
    return (
      <FractionsTopicView
        onSubtopicSelect={handleTopicSelect}
        onBackToHome={handleBackToHome}
      />
    );
  }

  // Show MainLayout (3-panel learning interface) when both category and topic are selected
  return <MainLayout />;
}

// Main App component with providers
function App() {
  // Register all visualizers when the app starts
  useEffect(() => {
    registerAllVisualizers();
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
