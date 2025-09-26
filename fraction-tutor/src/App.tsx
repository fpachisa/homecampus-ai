import { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import TopicSelector from './components/TopicSelector';
import { AuthProvider } from './contexts/AuthContext';
import { sessionStorage } from './services/sessionStorage';
import type { TopicId } from './prompts/topics/P6-Math-Fractions';

function App() {
  const [selectedTopic, setSelectedTopic] = useState<TopicId | null>(null);
  const [resumeSession, setResumeSession] = useState(false);

  const handleTopicSelect = (topicId: TopicId) => {
    setSelectedTopic(topicId);
    setResumeSession(false); // New session
  };

  const handleResumeSession = () => {
    const sessionData = sessionStorage.loadSession();
    if (sessionData) {
      setSelectedTopic(sessionData.topicId as TopicId);
      setResumeSession(true);
    }
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
    setResumeSession(false);
  };

  return (
    <AuthProvider>
      {!selectedTopic ? (
        <TopicSelector
          onTopicSelect={handleTopicSelect}
          onResumeSession={handleResumeSession}
        />
      ) : (
        <ChatInterface
          topicId={selectedTopic}
          onBackToTopics={handleBackToTopics}
          resumeFromSession={resumeSession}
        />
      )}
    </AuthProvider>
  );
}

export default App;
