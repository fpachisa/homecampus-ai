import { useState, createContext, useContext, useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import HomePage from './components/HomePage';
import ModeSelector from './components/ModeSelector';
import { InteractivePathView } from './components/practice/InteractivePathView';
import { PracticeSessionView } from './components/practice/PracticeSessionView';
import { AchievementsPage } from './components/practice/AchievementsPage';
import TTSTest from './components/TTSTest';
import AvatarTest from './components/AvatarTest';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import type { TopicId } from './prompts/topics/P6-Math-Fractions';
import type { TrigonometryTopicId } from './prompts/topics/S3-Math-Trigonometry';
import type { CircleGeometryTopicId } from './prompts/topics/S3-Math-CircleGeometry';
import type { QuadraticEquationsTopicId } from './prompts/topics/S3-Math-QuadraticEquations';
import type { PathDifficulty } from './types/practice';
import { registerAllVisualizers } from './utils/registerVisualizers';
import { pathConfigLoader } from './services/pathConfigLoader';
import { pathProgressService } from './services/pathProgressService';
import './styles/animations.css';

// App state context for managing application-wide state
interface AppState {
  selectedCategory: string | null; // 'fractions', 's3-math-trigonometry', 's3-math-circle-geometry', 's3-math-quadratic-equations'
  selectedTopic: TopicId | TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | null;
  selectedMode: 'socratic' | 'practice' | null; // Learning mode

  // Practice mode state
  practiceState?: {
    selectedDifficulty: PathDifficulty | null;
    selectedNodeId: string | null;
    showingAchievements: boolean;
  };
}

interface AppContextType {
  appState: AppState;
  handleCategorySelect: (category: string) => void;
  handleTopicSelect: (topicId: TopicId | TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId) => void;
  handleModeSelect: (mode: 'socratic' | 'practice') => void;
  handleDifficultySelect: (difficulty: PathDifficulty) => void;
  handleNodeSelect: (difficulty: PathDifficulty, nodeId: string) => void;
  handleBackToPathMap: () => void;
  handleBackToPathSelection: () => void;
  handleBackToModeSelect: () => void;
  handleBackToTopics: () => void;
  handleBackToHome: () => void;
  handleShowAchievements: () => void;
  handleBackFromAchievements: () => void;
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
  });

  const handleCategorySelect = (category: string) => {
    setAppState({
      selectedCategory: category,
      selectedTopic: null,
      selectedMode: null,
    });
  };

  const handleTopicSelect = (topicId: TopicId | TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId) => {
    setAppState((prev) => ({
      ...prev,
      selectedTopic: topicId,
      // Keep socratic mode if already selected, otherwise reset
      selectedMode: prev.selectedMode === 'socratic' ? 'socratic' : null,
    }));
  };

  const handleModeSelect = (mode: 'socratic' | 'practice') => {
    setAppState((prev) => ({
      ...prev,
      selectedMode: mode,
    }));
  };

  const handleDifficultySelect = (difficulty: PathDifficulty) => {
    setAppState((prev) => ({
      ...prev,
      practiceState: {
        selectedDifficulty: difficulty,
        selectedNodeId: null,
      },
    }));
  };

  const handleNodeSelect = (difficulty: PathDifficulty, nodeId: string) => {
    setAppState((prev) => ({
      ...prev,
      practiceState: {
        selectedDifficulty: difficulty,
        selectedNodeId: nodeId,
        showingAchievements: false,
      },
    }));
  };

  const handleShowAchievements = () => {
    setAppState((prev) => ({
      ...prev,
      practiceState: {
        ...prev.practiceState,
        selectedDifficulty: prev.practiceState?.selectedDifficulty || null,
        selectedNodeId: null,
        showingAchievements: true,
      },
    }));
  };

  const handleBackFromAchievements = () => {
    setAppState((prev) => ({
      ...prev,
      practiceState: {
        ...prev.practiceState,
        selectedDifficulty: prev.practiceState?.selectedDifficulty || null,
        selectedNodeId: null,
        showingAchievements: false,
      },
    }));
  };

  const handleBackToPathMap = () => {
    setAppState((prev) => ({
      ...prev,
      practiceState: {
        ...prev.practiceState,
        selectedDifficulty: prev.practiceState?.selectedDifficulty || null,
        selectedNodeId: null,
        showingAchievements: false,
      },
    }));
  };

  const handleBackToPathSelection = () => {
    setAppState((prev) => ({
      ...prev,
      practiceState: {
        selectedDifficulty: null,
        selectedNodeId: null,
      },
    }));
  };

  const handleBackToModeSelect = () => {
    setAppState((prev) => ({
      ...prev,
      selectedMode: null,
      practiceState: undefined,
    }));
  };

  const handleBackToTopics = () => {
    setAppState((prev) => ({
      ...prev,
      selectedTopic: null,
      selectedMode: null,
      practiceState: undefined,
    }));
  };

  const handleBackToHome = () => {
    setAppState({
      selectedCategory: null,
      selectedTopic: null,
      selectedMode: null,
      practiceState: undefined,
    });
  };

  return (
    <AppContext.Provider value={{
      appState,
      handleCategorySelect,
      handleTopicSelect,
      handleModeSelect,
      handleDifficultySelect,
      handleNodeSelect,
      handleBackToPathMap,
      handleBackToPathSelection,
      handleBackToModeSelect,
      handleBackToTopics,
      handleBackToHome,
      handleShowAchievements,
      handleBackFromAchievements,
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

// Practice Router - handles Practice mode navigation
function PracticeRouter() {
  const {
    appState,
    handleNodeSelect,
    handleBackToPathMap,
    handleBackToModeSelect,
    handleBackFromAchievements,
    handleShowAchievements,
  } = useAppContext();

  const [currentNode, setCurrentNode] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Load the selected node configuration
  useEffect(() => {
    async function loadNode() {
      if (!appState.practiceState?.selectedNodeId) {
        setCurrentNode(null);
        return;
      }

      try {
        setLoading(true);
        const nodes = await pathConfigLoader.loadUnifiedPathNodes(appState.selectedCategory!);
        const node = nodes.find(n => n.id === appState.practiceState!.selectedNodeId);
        setCurrentNode(node || null);
      } catch (error) {
        console.error('Failed to load node:', error);
        setCurrentNode(null);
      } finally {
        setLoading(false);
      }
    }

    loadNode();
  }, [appState.practiceState?.selectedNodeId]);

  // Show Achievements Page if viewing achievements
  if (appState.practiceState?.showingAchievements) {
    const progress = pathProgressService.loadUnifiedProgress(appState.selectedCategory!);

    if (!progress) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <p>Loading achievements...</p>
        </div>
      );
    }

    return (
      <AchievementsPage
        progress={progress}
        onBack={handleBackFromAchievements}
      />
    );
  }

  // Show InteractivePathView if no node selected
  if (!appState.practiceState?.selectedNodeId) {
    return (
      <InteractivePathView
        category={appState.selectedCategory!}
        onSelectNode={(nodeId: string) => handleNodeSelect('easy', nodeId)} // Difficulty param kept for compatibility but not used
        onBack={handleBackToModeSelect}
        onShowAchievements={handleShowAchievements}
      />
    );
  }

  // Show loading while node loads
  if (loading || !currentNode) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p>Loading lesson...</p>
      </div>
    );
  }

  // Show PracticeSessionView when node is loaded
  return (
    <PracticeSessionView
      category={appState.selectedCategory!}
      difficulty={'easy'} // Kept for compatibility, not used in unified system
      node={currentNode}
      onComplete={handleBackToPathMap}
      onBack={handleBackToPathMap}
    />
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

  // Show ModeSelector when category is selected but no mode
  if (appState.selectedCategory && !appState.selectedMode) {
    return (
      <ModeSelector
        category={appState.selectedCategory}
        onModeSelect={handleModeSelect}
        onBack={handleBackToHome}
      />
    );
  }

  // Show Practice mode (new path-based system)
  if (appState.selectedMode === 'practice') {
    return <PracticeRouter />;
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
