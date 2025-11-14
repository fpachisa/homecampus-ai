/**
 * HomeworkHelper Component
 * Main container orchestrating the homework help flow
 */

import React, { useState, useCallback } from 'react';
import { BookOpen, Loader, AlertCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { UploadZone } from './UploadZone';
import { ProblemPreview } from './ProblemPreview';
import { HomeworkSessionView } from './HomeworkSession';
import { ProblemAnalysisService } from '../../services/problemAnalysisService';
import { GradeAppropriatenessService } from '../../services/gradeAppropriatenessService';
import { HomeworkHelperService } from '../../services/homeworkHelperService';
import type {
  UploadedProblem,
  ProblemAnalysis,
  GradeAppropriatenessCheck,
  HomeworkSession,
  HomeworkMessage,
  HomeworkHelperContext,
} from '../../types/homework';

interface HomeworkHelperProps {
  studentId: string;
  studentGrade: number;
}

type FlowState = 'upload' | 'analyzing' | 'preview' | 'session' | 'error';

export const HomeworkHelper: React.FC<HomeworkHelperProps> = ({ studentId, studentGrade }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  // Services
  const [analysisService] = useState(() => new ProblemAnalysisService());
  const [gradeService] = useState(() => new GradeAppropriatenessService());
  const [helperService] = useState(() => new HomeworkHelperService());

  // State
  const [flowState, setFlowState] = useState<FlowState>('upload');
  const [currentProblem, setCurrentProblem] = useState<UploadedProblem | null>(null);
  const [gradeCheck, setGradeCheck] = useState<GradeAppropriatenessCheck | null>(null);
  const [session, setSession] = useState<HomeworkSession | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  /**
   * Handle file upload
   */
  const handleUpload = useCallback(
    async (file: File) => {
      setError(null);
      setFlowState('analyzing');

      try {
        // Convert file to base64
        const imageData = await fileToBase64(file);

        // Create uploaded problem object
        const problem: UploadedProblem = {
          id: generateId(),
          studentId,
          uploadedAt: new Date().toISOString(),
          imageUrl: imageData,
          imageData,
          fileType: file.type as UploadedProblem['fileType'],
          status: 'analyzing',
        };

        setCurrentProblem(problem);

        // Step 1: Analyze the problem
        const analysis = await analysisService.analyzeProblem(problem);

        // Step 2: Check grade appropriateness
        const check = await gradeService.checkAppropriateness(analysis, studentGrade);

        // Update problem with analysis
        const analyzedProblem: UploadedProblem = {
          ...problem,
          status: 'ready',
          analysis,
          gradeCheck: check,
        };

        setCurrentProblem(analyzedProblem);
        setGradeCheck(check);
        setFlowState('preview');
      } catch (err) {
        console.error('Upload/analysis failed:', err);
        setError(
          err instanceof Error ? err.message : 'Failed to analyze problem. Please try again.'
        );
        setFlowState('error');
      }
    },
    [studentId, studentGrade, analysisService, gradeService]
  );

  /**
   * Start tutoring session
   */
  const handleStartSession = useCallback(
    async (finalText: string) => {
      if (!currentProblem?.analysis) return;

      setIsProcessing(true);

      try {
        // Update problem text if edited
        const updatedAnalysis: ProblemAnalysis = {
          ...currentProblem.analysis,
          extractedText: finalText,
        };

        // Create session
        const newSession: HomeworkSession = {
          sessionId: generateId(),
          problemId: currentProblem.id,
          studentId,
          startedAt: new Date().toISOString(),
          lastActivityAt: new Date().toISOString(),
          status: 'active',
          messages: [],
          hintsGiven: 0,
          questionsAsked: 0,
          studentAttempts: 0,
          understoodConcepts: [],
          strugglingConcepts: [],
        };

        // Generate initial greeting
        const context: HomeworkHelperContext = {
          problem: { ...currentProblem, analysis: updatedAnalysis },
          analysis: updatedAnalysis,
          studentGrade,
          conversationHistory: [],
          hintsGiven: 0,
          questionsAsked: 0,
          studentDemonstrated: [],
        };

        const greeting = await helperService.generateInitialGreeting(context);

        // Add greeting to session
        const greetingMessage: HomeworkMessage = {
          id: generateId(),
          role: 'tutor',
          timestamp: new Date().toISOString(),
          speech: greeting.speech,
          display: greeting.display,
          messageType: 'clarification',
          conceptsAddressed: greeting.conceptsAddressed,
        };

        newSession.messages.push(greetingMessage);

        setSession(newSession);
        setFlowState('session');
      } catch (err) {
        console.error('Failed to start session:', err);
        setError('Failed to start tutoring session. Please try again.');
        setFlowState('error');
      } finally {
        setIsProcessing(false);
      }
    },
    [currentProblem, studentId, studentGrade, helperService]
  );

  /**
   * Handle student message in session
   */
  const handleSendMessage = useCallback(
    async (messageText: string) => {
      if (!session || !currentProblem?.analysis) return;

      setIsProcessing(true);

      try {
        // Add student message
        const studentMessage: HomeworkMessage = {
          id: generateId(),
          role: 'student',
          timestamp: new Date().toISOString(),
          text: messageText,
          messageType: 'answer-attempt',
        };

        const updatedMessages = [...session.messages, studentMessage];

        // Build context for helper
        const context: HomeworkHelperContext = {
          problem: currentProblem,
          analysis: currentProblem.analysis,
          studentGrade,
          conversationHistory: updatedMessages,
          hintsGiven: session.hintsGiven,
          questionsAsked: session.questionsAsked,
          studentDemonstrated: session.understoodConcepts,
        };

        // Generate response
        const response = await helperService.generateResponse(context, messageText);

        // Add tutor message
        const tutorMessage: HomeworkMessage = {
          id: generateId(),
          role: 'tutor',
          timestamp: new Date().toISOString(),
          speech: response.speech,
          display: response.display,
          conceptsAddressed: response.conceptsAddressed,
        };

        const finalMessages = [...updatedMessages, tutorMessage];

        // Update session
        const updatedSession: HomeworkSession = {
          ...session,
          messages: finalMessages,
          lastActivityAt: new Date().toISOString(),
          hintsGiven:
            response.teachingAction === 'hint' ? session.hintsGiven + 1 : session.hintsGiven,
          questionsAsked:
            response.teachingAction === 'question'
              ? session.questionsAsked + 1
              : session.questionsAsked,
          understoodConcepts: [
            ...new Set([...session.understoodConcepts, ...response.conceptsAddressed]),
          ],
          status: response.sessionComplete ? 'completed' : 'active',
          completedAt: response.sessionComplete ? new Date().toISOString() : undefined,
          finalOutcome: response.completionReason === 'understood' ? 'solved-with-understanding' : response.completionReason as HomeworkSession['finalOutcome'],
        };

        setSession(updatedSession);
      } catch (err) {
        console.error('Failed to send message:', err);
        // Show error state - don't fake AI response
        setError(
          err instanceof Error ? err.message : 'Failed to get response. Please try again.'
        );
        // Note: Error is displayed in UI, user can retry
      } finally {
        setIsProcessing(false);
      }
    },
    [session, currentProblem, studentGrade, helperService]
  );

  /**
   * Reset to upload state
   */
  const handleReset = useCallback(() => {
    setFlowState('upload');
    setCurrentProblem(null);
    setGradeCheck(null);
    setSession(null);
    setError(null);
  }, []);

  // Render based on flow state
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

      {/* Header - show unless in session */}
      {flowState !== 'session' && (
        <header className="relative z-10 border-b" style={{ borderColor: theme.colors.border }}>
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/home')}
                className="p-2 rounded-lg transition-all duration-200"
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
                title="Back to home"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
                  Homework Helper
                </h1>
                <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                  Get hints and guidance to solve your math problems step-by-step
                </p>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="relative z-10 flex-1 overflow-y-auto">
        {flowState === 'upload' && (
          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Welcome Card */}
            <div
              className="p-8 rounded-2xl mb-6"
              style={{
                background: theme.glass.background,
                border: `1px solid ${theme.glass.border}`,
                backdropFilter: theme.glass.backdrop,
                boxShadow: theme.shadows.lg,
              }}
            >
              <div className="text-center mb-6">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{ backgroundColor: `${theme.colors.brand}20` }}
                >
                  <BookOpen className="w-8 h-8" style={{ color: theme.colors.brand }} />
                </div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: theme.colors.textPrimary }}>
                  Upload Your Math Problem
                </h2>
                <p style={{ color: theme.colors.textSecondary }}>
                  I'll guide you through solving it step by step - without giving away the answer!
                </p>
              </div>

              <UploadZone onUpload={handleUpload} theme={theme} />
            </div>

            {/* How It Works Card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: theme.glass.background,
                border: `1px solid ${theme.glass.border}`,
                backdropFilter: theme.glass.backdrop,
                boxShadow: theme.shadows.md,
              }}
            >
              <h3 className="font-semibold mb-4 flex items-center space-x-2" style={{ color: theme.colors.textPrimary }}>
                <span>💡</span>
                <span>How it works</span>
              </h3>
              <ol className="space-y-3">
                {[
                  'Upload a clear photo or PDF of your math problem',
                  'I\'ll analyze it and check if it matches your grade level',
                  'I\'ll guide you through solving it with questions and hints',
                  'You do the thinking - I\'ll provide the support!',
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold"
                      style={{
                        backgroundColor: `${theme.colors.brand}20`,
                        color: theme.colors.brand,
                      }}
                    >
                      {idx + 1}
                    </span>
                    <span style={{ color: theme.colors.textSecondary }}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {flowState === 'analyzing' && (
          <div className="flex items-center justify-center py-32">
            <div className="text-center">
              <Loader
                className="w-12 h-12 animate-spin mx-auto mb-4"
                style={{ color: theme.colors.brand }}
              />
              <h2 className="text-xl font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
                Analyzing your problem...
              </h2>
              <p style={{ color: theme.colors.textSecondary }}>This will just take a moment</p>
            </div>
          </div>
        )}

        {flowState === 'preview' && currentProblem && gradeCheck && (
          <div className="max-w-6xl mx-auto px-6 py-8">
            <ProblemPreview
              imageUrl={currentProblem.imageUrl || currentProblem.imageData!}
              analysis={currentProblem.analysis!}
              gradeCheck={gradeCheck}
              onConfirm={handleStartSession}
              onCancel={handleReset}
              theme={theme}
            />
          </div>
        )}

        {flowState === 'session' && session && currentProblem && (
          <HomeworkSessionView
            session={session}
            problem={currentProblem}
            onSendMessage={handleSendMessage}
            onExit={handleReset}
            isLoading={isProcessing}
            error={error}
            onClearError={() => setError(null)}
            theme={theme}
          />
        )}

        {flowState === 'error' && (
          <div className="max-w-2xl mx-auto px-6 py-12">
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid #ef4444',
              }}
            >
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-red-800 mb-2">Something went wrong</h3>
                  <p className="text-red-700 mb-4">{error}</p>
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 rounded-lg transition-colors"
                    style={{
                      backgroundColor: '#ef4444',
                      color: '#ffffff',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#dc2626';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ef4444';
                    }}
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

// Utility functions
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
