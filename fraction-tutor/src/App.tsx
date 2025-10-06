import { useState, createContext, useContext, useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import HomePage from './components/HomePage';
import FractionsTopicView from './components/FractionsTopicView';
import ModeSelector from './components/ModeSelector';
import PracticeInterface from './components/PracticeInterface';
import TTSTest from './components/TTSTest';
import AvatarTest from './components/AvatarTest';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { sessionStorage } from './services/sessionStorage';
import type { TopicId } from './prompts/topics/P6-Math-Fractions';
import type { PracticeConfig } from './types/types';
import { registerAllVisualizers } from './utils/registerVisualizers';
import './styles/animations.css';

// App state context for managing application-wide state
interface AppState {
  selectedCategory: string | null; // 'fractions', 'whole-numbers', etc.
  selectedTopic: TopicId | null;
  selectedMode: 'socratic' | 'practice' | null; // Learning mode
  practiceConfig?: PracticeConfig; // Practice mode configuration
}

interface AppContextType {
  appState: AppState;
  handleCategorySelect: (category: string) => void;
  handleTopicSelect: (topicId: TopicId) => void;
  handleModeSelect: (mode: 'socratic' | 'practice', config?: PracticeConfig) => void;
  handleBackToModeSelect: () => void;
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
    selectedMode: null,
    practiceConfig: undefined,
  });

  const handleCategorySelect = (category: string) => {
    setAppState({
      selectedCategory: category,
      selectedTopic: null,
      selectedMode: null,
      practiceConfig: undefined,
    });
  };

  const handleTopicSelect = (topicId: TopicId) => {
    setAppState((prev) => ({
      ...prev,
      selectedTopic: topicId,
      selectedMode: null, // Reset mode when selecting new topic
      practiceConfig: undefined,
    }));
  };

  const handleModeSelect = (mode: 'socratic' | 'practice', config?: PracticeConfig) => {
    setAppState((prev) => ({
      ...prev,
      selectedMode: mode,
      practiceConfig: config,
    }));
  };

  const handleBackToModeSelect = () => {
    setAppState((prev) => ({
      ...prev,
      selectedMode: null,
      practiceConfig: undefined,
    }));
  };

  const handleBackToTopics = () => {
    setAppState((prev) => ({
      ...prev,
      selectedTopic: null,
      selectedMode: null,
      practiceConfig: undefined,
    }));
  };

  const handleBackToHome = () => {
    setAppState({
      selectedCategory: null,
      selectedTopic: null,
      selectedMode: null,
      practiceConfig: undefined,
    });
  };

  return (
    <AppContext.Provider value={{
      appState,
      handleCategorySelect,
      handleTopicSelect,
      handleModeSelect,
      handleBackToModeSelect,
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

// Router component to handle navigation between all views
function AppRouter() {
  const {
    appState,
    handleCategorySelect,
    handleTopicSelect,
    handleModeSelect,
    handleBackToModeSelect,
    handleBackToTopics,
    handleBackToHome
  } = useAppContext();

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

  // Show ModeSelector when topic is selected but no mode
  if (appState.selectedTopic && !appState.selectedMode) {
    return (
      <ModeSelector
        topicId={appState.selectedTopic}
        onModeSelect={handleModeSelect}
        onBack={handleBackToTopics}
      />
    );
  }

  // Show PracticeInterface when practice mode is selected
  if (appState.selectedMode === 'practice' && appState.selectedTopic && appState.practiceConfig) {
    return (
      <PracticeInterface
        topicId={appState.selectedTopic}
        practiceConfig={appState.practiceConfig}
        onBackToModeSelect={handleBackToModeSelect}
      />
    );
  }

  // Show MainLayout (Socratic learning interface) when Socratic mode is selected
  if (appState.selectedMode === 'socratic') {
    return <MainLayout />;
  }

  // Fallback to home
  return <HomePage onTopicSelect={handleCategorySelect} />;
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
