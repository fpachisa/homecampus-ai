import { useState, createContext, useContext, useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import HomePage from './components/HomePage';
import ModeSelector from './components/ModeSelector';
import { InteractivePathView } from './components/practice/InteractivePathView';
import { PracticeSessionView } from './components/practice/PracticeSessionView';
import { AchievementsPage } from './components/practice/AchievementsPage';
import TTSTest from './components/TTSTest';
import AvatarTest from './components/AvatarTest';
import VisualizerTestPage from './pages/VisualizerTestPage';
import QuestionPreviewPage from './components/QuestionPreviewPage';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ActiveProfileProvider } from './contexts/ActiveProfileContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import LandingPage from './components/LandingPage';
import { authService } from './services/authService';
// OLD: Fractions not migrated - commented out
// import type { TopicId } from './prompts/topics/P6-Math-Fractions';
import type { TrigonometryTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-trigonometry';
import type { CircleGeometryTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-circle-geometry';
import type { QuadraticEquationsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-quadratic-equations';
import type { ExponentialLogarithmsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-exponential-logarithms';
import type { SetsVennDiagramsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
import type { ExponentsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-exponents';
import type { SurdsRadicalsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-surds-radicals';
import type { StatisticsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-statistics';
import type { RelationsFunctionsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-relations-functions';
import type { CoordinateGeometryTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-coordinate-geometry';
import type { DifferentialCalculusTopicId } from '../prompt-library/subjects/mathematics/secondary/s4-differential-calculus';
import type { IntegrationTopicId } from '../prompt-library/subjects/mathematics/secondary/s4-integration';
import type { ProbabilityTopicId } from '../prompt-library/subjects/mathematics/secondary/s4-probability';
import type { PathDifficulty } from './types/practice';
import { registerAllVisualizers } from './utils/registerVisualizers';
import { pathConfigLoader } from './services/pathConfigLoader';
import { pathProgressService } from './services/pathProgressService';
import './styles/animations.css';

// App state context for managing application-wide state
interface AppState {
  selectedCategory: string | null; // 's3-math-trigonometry', 's3-math-circle-geometry', 's3-math-quadratic-equations', 's3-math-exponential-logarithms', 's3-math-sets-venn-diagrams', 's3-math-exponents', 's3-math-surds-radicals', 's3-math-statistics', 's3-math-relations-functions', 's3-math-coordinate-geometry', 's4-math-differential-calculus', 's4-math-integration', 's4-math-probability'
  selectedTopic: TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | ExponentialLogarithmsTopicId | SetsVennDiagramsTopicId | ExponentsTopicId | SurdsRadicalsTopicId | StatisticsTopicId | RelationsFunctionsTopicId | CoordinateGeometryTopicId | DifferentialCalculusTopicId | IntegrationTopicId | ProbabilityTopicId | null;
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
  handleTopicSelect: (topicId: TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | ExponentialLogarithmsTopicId | SetsVennDiagramsTopicId | ExponentsTopicId | SurdsRadicalsTopicId | StatisticsTopicId | RelationsFunctionsTopicId | CoordinateGeometryTopicId | DifferentialCalculusTopicId | IntegrationTopicId | ProbabilityTopicId) => void;
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

  const handleTopicSelect = (topicId: TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | ExponentialLogarithmsTopicId | SetsVennDiagramsTopicId | ExponentsTopicId | SurdsRadicalsTopicId | StatisticsTopicId | RelationsFunctionsTopicId | CoordinateGeometryTopicId | DifferentialCalculusTopicId) => {
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

  if (testMode === 'visualizers') {
    return <VisualizerTestPage />;
  }

  if (testMode === 'preview') {
    return <QuestionPreviewPage />;
  }

  return (
    <ErrorBoundary>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </ErrorBoundary>
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
    <ErrorBoundary>
      <PracticeSessionView
        category={appState.selectedCategory!}
        difficulty={'easy'} // Kept for compatibility, not used in unified system
        node={currentNode}
        onComplete={handleBackToPathMap}
        onBack={handleBackToPathMap}
      />
    </ErrorBoundary>
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
  const { user, userProfile, loading } = useAuth();
  const [showLanding, setShowLanding] = useState(() => {
    // Check if user has completed onboarding
    const hasCompletedOnboarding = localStorage.getItem('onboarding-completed');
    return !hasCompletedOnboarding && !user;
  });
  const [inviteMessage, setInviteMessage] = useState<string | null>(null);

  // Handle invite acceptance from URL parameters
  useEffect(() => {
    const handleInvites = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const parentInviteToken = urlParams.get('parentInvite');
      const childInviteToken = urlParams.get('childInvite');

      if (parentInviteToken && user) {
        try {
          await authService.acceptParentInvite(parentInviteToken, user.uid);
          setInviteMessage('Successfully connected to your child\'s account!');
          // Remove token from URL
          window.history.replaceState({}, '', window.location.pathname);
        } catch (error: any) {
          console.error('Error accepting parent invite:', error);
          setInviteMessage(`Error: ${error.message}`);
        }
      }

      if (childInviteToken && user) {
        try {
          await authService.acceptChildInvite(childInviteToken, user.uid);
          setInviteMessage('Successfully connected to your parent\'s account!');
          // Remove token from URL
          window.history.replaceState({}, '', window.location.pathname);
        } catch (error: any) {
          console.error('Error accepting child invite:', error);
          setInviteMessage(`Error: ${error.message}`);
        }
      }
    };

    if (user && !loading) {
      handleInvites();
    }
  }, [user, loading]);

  // Show loading while auth state is being determined
  if (loading) {
    return null; // or a loading spinner
  }

  // Show landing page for first-time visitors
  if (showLanding) {
    return (
      <LandingPage
        onComplete={() => {
          localStorage.setItem('onboarding-completed', 'true');
          setShowLanding(false);
        }}
      />
    );
  }

  // Show invite message if present
  if (inviteMessage) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md text-center">
          <div className="text-6xl mb-4">{inviteMessage.includes('Error') ? '⚠️' : '🎉'}</div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#1a1a2e' }}>{inviteMessage.includes('Error') ? 'Oops!' : 'Success!'}</h2>
          <p className="text-gray-600 mb-6">{inviteMessage}</p>
          <button
            onClick={() => setInviteMessage(null)}
            className="px-6 py-3 rounded-lg font-medium text-white"
            style={{ backgroundColor: '#667eea' }}
          >
            Continue to Dashboard
          </button>
        </div>
      </div>
    );
  }

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
    return (
      <ErrorBoundary>
        <MainLayout />
      </ErrorBoundary>
    );
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
        <ActiveProfileProvider>
          <AppContent />
        </ActiveProfileProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
