/**
 * Session Detail View
 * Displays complete conversation history and stats for a homework session
 */

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import {
  ArrowLeft,
  Clock,
  MessageCircle,
  Lightbulb,
  Target,
  Calendar,
  Loader
} from 'lucide-react';
import {
  homeworkPersistenceService,
  type FirestoreProblemDocument,
  type FirestoreSessionDocument
} from '../../services/homework/homeworkPersistenceService';
import { MessageDisplay } from '../chat/MessageDisplay';

interface SessionDetailViewProps {
  studentId: string;
}

export const SessionDetailView: React.FC<SessionDetailViewProps> = ({ studentId }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { problemId } = useParams<{ problemId: string }>();

  const [problem, setProblem] = useState<FirestoreProblemDocument | null>(null);
  const [sessions, setSessions] = useState<FirestoreSessionDocument[]>([]);
  const [selectedSessionIndex, setSelectedSessionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (problemId) {
      loadProblemAndSessions();
    }
  }, [problemId, studentId]);

  const loadProblemAndSessions = async () => {
    if (!problemId) return;

    setIsLoading(true);
    try {
      const [problemData, sessionsData] = await Promise.all([
        homeworkPersistenceService.getProblem(studentId, problemId),
        homeworkPersistenceService.getSessionsForProblem(studentId, problemId)
      ]);

      setProblem(problemData);
      setSessions(sessionsData);
    } catch (error) {
      console.error('Failed to load session details:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const currentSession = sessions[selectedSessionIndex];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: theme.gradients.panel }}>
        <div className="text-center">
          <Loader className="w-12 h-12 animate-spin mx-auto mb-4" style={{ color: theme.colors.brand }} />
          <p style={{ color: theme.colors.textSecondary }}>Loading session details...</p>
        </div>
      </div>
    );
  }

  if (!problem || sessions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: theme.gradients.panel }}>
        <div className="text-center">
          <p className="text-xl font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
            Session not found
          </p>
          <button
            onClick={() => navigate('/homework/history')}
            className="text-sm"
            style={{ color: theme.colors.brand }}
          >
            ← Back to history
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (timestamp: any) => {
    const date = timestamp.toDate();
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }).format(date);
  };

  const formatDuration = (startTimestamp: any, endTimestamp?: any) => {
    const start = startTimestamp.toDate();
    const end = endTimestamp ? endTimestamp.toDate() : new Date();
    const diffMs = end.getTime() - start.getTime();
    const minutes = Math.floor(diffMs / (1000 * 60));

    if (minutes < 1) return '< 1 minute';
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    const hours = Math.floor(minutes / 60);
    const remainingMins = minutes % 60;
    return `${hours}h ${remainingMins}m`;
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: theme.gradients.panel }}>
      {/* Background texture */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(88, 101, 242, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(71, 82, 196, 0.05) 0%, transparent 50%)',
        }}
      />

      {/* Header */}
      <header className="relative z-10 border-b" style={{ borderColor: theme.colors.border }}>
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/homework/history')}
              className="p-2 rounded-lg transition-all"
              style={{
                backgroundColor: theme.colors.interactive,
                color: theme.colors.textSecondary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.brand;
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.interactive;
                e.currentTarget.style.color = theme.colors.textSecondary;
              }}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1">
              <h1 className="text-xl font-bold capitalize" style={{ color: theme.colors.textPrimary }}>
                {problem.topic} - {problem.difficulty}
              </h1>
              <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                {sessions.length} session{sessions.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            {/* Left: Problem Details & Stats */}
            <div className="lg:col-span-1 space-y-6 overflow-y-auto">
              {/* Problem Card */}
              <div
                className="rounded-xl p-6"
                style={{
                  backgroundColor: theme.colors.secondary,
                  border: `1px solid ${theme.colors.border}`,
                }}
              >
                <h3 className="font-semibold mb-3" style={{ color: theme.colors.textPrimary }}>
                  Problem
                </h3>
                <p className="text-sm mb-4" style={{ color: theme.colors.textSecondary }}>
                  {problem.extractedText}
                </p>

                {/* Concepts */}
                {problem.keyMathConcepts.length > 0 && (
                  <div>
                    <p className="text-xs font-medium mb-2" style={{ color: theme.colors.textMuted }}>
                      Key Concepts:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {problem.keyMathConcepts.map((concept, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            backgroundColor: `${theme.colors.brand}20`,
                            color: theme.colors.brand,
                          }}
                        >
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Session Selector (if multiple sessions) */}
              {sessions.length > 1 && (
                <div
                  className="rounded-xl p-4"
                  style={{
                    backgroundColor: theme.colors.secondary,
                    border: `1px solid ${theme.colors.border}`,
                  }}
                >
                  <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: theme.colors.textPrimary }}>
                    <Calendar size={18} />
                    Sessions
                  </h3>
                  <div className="space-y-2">
                    {sessions.map((session, idx) => (
                      <button
                        key={session.sessionId}
                        onClick={() => setSelectedSessionIndex(idx)}
                        className="w-full text-left px-3 py-2 rounded-lg transition-all text-sm"
                        style={{
                          backgroundColor:
                            selectedSessionIndex === idx ? theme.colors.brand : theme.colors.interactive,
                          color: selectedSessionIndex === idx ? '#ffffff' : theme.colors.textSecondary,
                        }}
                      >
                        {formatDate(session.startedAt)}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Session Stats */}
              {currentSession && (
                <div
                  className="rounded-xl p-6"
                  style={{
                    backgroundColor: theme.colors.secondary,
                    border: `1px solid ${theme.colors.border}`,
                  }}
                >
                  <h3 className="font-semibold mb-4" style={{ color: theme.colors.textPrimary }}>
                    Session Stats
                  </h3>

                  <div className="space-y-4">
                    <StatItem
                      icon={<Clock size={18} />}
                      label="Duration"
                      value={formatDuration(currentSession.startedAt, currentSession.completedAt)}
                      theme={theme}
                    />
                    <StatItem
                      icon={<MessageCircle size={18} />}
                      label="Messages"
                      value={currentSession.messages.length.toString()}
                      theme={theme}
                    />
                    <StatItem
                      icon={<Lightbulb size={18} />}
                      label="Hints Given"
                      value={currentSession.progress.hintsGiven.toString()}
                      theme={theme}
                    />
                    <StatItem
                      icon={<Target size={18} />}
                      label="Concepts Understood"
                      value={currentSession.progress.understoodConcepts.length.toString()}
                      theme={theme}
                    />

                    {currentSession.progress.understoodConcepts.length > 0 && (
                      <div className="pt-3 border-t" style={{ borderColor: theme.colors.border }}>
                        <p className="text-xs font-medium mb-2" style={{ color: theme.colors.textMuted }}>
                          Concepts Mastered:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {currentSession.progress.understoodConcepts.map((concept, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-1 rounded"
                              style={{
                                backgroundColor: '#10b98120',
                                color: '#10b981',
                              }}
                            >
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentSession.progress.strugglingConcepts.length > 0 && (
                      <div className="pt-3 border-t" style={{ borderColor: theme.colors.border }}>
                        <p className="text-xs font-medium mb-2" style={{ color: theme.colors.textMuted }}>
                          Needs More Practice:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {currentSession.progress.strugglingConcepts.map((concept, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-1 rounded"
                              style={{
                                backgroundColor: '#f59e0b20',
                                color: '#f59e0b',
                              }}
                            >
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Conversation History */}
            <div className="lg:col-span-2">
              <div
                className="rounded-xl h-full flex flex-col"
                style={{
                  backgroundColor: theme.colors.secondary,
                  border: `1px solid ${theme.colors.border}`,
                }}
              >
                <div className="px-6 py-4 border-b" style={{ borderColor: theme.colors.border }}>
                  <h3 className="font-semibold flex items-center gap-2" style={{ color: theme.colors.textPrimary }}>
                    <MessageCircle size={18} />
                    Conversation
                  </h3>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {currentSession?.messages.map((message, idx) => (
                    <div
                      key={message.id || idx}
                      className={`flex ${message.role === 'student' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-xl p-4 ${
                          message.role === 'student' ? 'ml-auto' : 'mr-auto'
                        }`}
                        style={{
                          backgroundColor:
                            message.role === 'student'
                              ? theme.colors.brand
                              : theme.colors.interactive,
                          color: message.role === 'student' ? '#ffffff' : theme.colors.textPrimary,
                        }}
                      >
                        {/* Student message */}
                        {message.role === 'student' && message.text && (
                          <p className="whitespace-pre-wrap">{message.text}</p>
                        )}

                        {/* Tutor message */}
                        {message.role === 'tutor' && message.display && (
                          <MessageDisplay
                            content={message.display.content}
                          />
                        )}

                        {/* Timestamp */}
                        <p
                          className="text-xs mt-2 opacity-70"
                          style={{
                            color: message.role === 'student' ? '#ffffff' : theme.colors.textMuted,
                          }}
                        >
                          {new Date(message.timestamp).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Stat Item Component
interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  theme: any;
}

const StatItem: React.FC<StatItemProps> = ({ icon, label, value, theme }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div style={{ color: theme.colors.brand }}>{icon}</div>
      <span className="text-sm" style={{ color: theme.colors.textSecondary }}>
        {label}
      </span>
    </div>
    <span className="font-semibold" style={{ color: theme.colors.textPrimary }}>
      {value}
    </span>
  </div>
);
