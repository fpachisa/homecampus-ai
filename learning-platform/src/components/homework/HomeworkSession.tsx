/**
 * HomeworkSession Component
 * Main tutoring interface for uploaded homework problems
 */

import React, { useState, useRef, useEffect } from 'react';
import { Send, Image as ImageIcon, Loader, ArrowLeft, AlertCircle, X } from 'lucide-react';
import type { HomeworkSession, UploadedProblem } from '../../types/homework';
import type { Theme } from '../../styles/themes';
import { MessageDisplay } from '../chat/MessageDisplay';
import Avatar from '../Avatar';
import { useAudioManager } from '../../hooks/useAudioManager';

interface HomeworkSessionProps {
  session: HomeworkSession;
  problem: UploadedProblem;
  onSendMessage: (message: string) => Promise<void>;
  onExit: () => void;
  isLoading?: boolean;
  error?: string | null;
  onClearError?: () => void;
  theme: Theme;
}

export const HomeworkSessionView: React.FC<HomeworkSessionProps> = ({
  session,
  problem,
  onSendMessage,
  onExit,
  isLoading = false,
  error = null,
  onClearError,
  theme,
}) => {
  const [input, setInput] = useState('');
  const [showProblemImage, setShowProblemImage] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Audio Manager for TTS and Avatar control
  const { isPlaying, currentSubtitle, avatarState, audioDuration, speakText } = useAudioManager();
  const [showSubtitle] = useState(true);

  // Track last message to trigger speech
  const lastMessageIdRef = useRef<string | null>(null);

  // Track which message is currently being spoken (hide it from chat until speech completes)
  const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null);

  // Track whether to show completion modal (only show after speech completes)
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  // Helper to get avatar emotion from homework emotion
  const getAvatarEmotion = (): 'encouraging' | 'celebratory' | 'supportive' | 'neutral' => {
    if (session.messages.length === 0) return 'neutral';
    const lastMsg = session.messages[session.messages.length - 1];
    if (!lastMsg.speech?.emotion) return 'neutral';
    // Map 'curious' to 'neutral', pass through others
    if (lastMsg.speech.emotion === 'curious') return 'neutral';
    return lastMsg.speech.emotion as 'encouraging' | 'celebratory' | 'supportive' | 'neutral';
  };

  // Auto-scroll to TOP of new message when messages arrive or loading state changes
  useEffect(() => {
    // Small delay to ensure DOM has updated before scrolling
    const scrollTimeout = setTimeout(() => {
      if (lastMessageRef.current) {
        // Scroll to the top of the last message (so user sees the beginning)
        lastMessageRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }, 100);

    return () => clearTimeout(scrollTimeout);
  }, [session.messages, isLoading]);

  // Trigger speech when new tutor message arrives
  useEffect(() => {
    if (session.messages.length === 0) return;

    const lastMessage = session.messages[session.messages.length - 1];

    // Only speak new tutor messages
    if (
      lastMessage.role === 'tutor' &&
      lastMessage.id !== lastMessageIdRef.current &&
      lastMessage.speech?.text
    ) {
      lastMessageIdRef.current = lastMessage.id;

      // Mark this message as currently being spoken (hide from chat)
      setSpeakingMessageId(lastMessage.id);

      // Check if session is completed with this message
      const isSessionCompleted = session.status === 'completed';

      // Generate TTS on-the-fly and speak
      // Map homework emotions to TTS emotions
      const ttsEmotion = (lastMessage.speech.emotion === 'curious' ? 'neutral' : lastMessage.speech.emotion) as
        | 'encouraging'
        | 'celebratory'
        | 'supportive'
        | 'neutral'
        | undefined;

      speakText(
        lastMessage.speech.text,
        ttsEmotion || 'neutral',
        () => {
          // When speech completes:
          // 1. Show the message in chat
          setSpeakingMessageId(null);

          // 2. If session completed, show completion modal AFTER speech
          if (isSessionCompleted) {
            setShowCompletionModal(true);
          }
        }
      );
    }
  }, [session.messages, session.status, speakText]);

  // Auto-focus input
  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    const message = input.trim();
    setInput('');

    await onSendMessage(message);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen relative" style={{ background: theme.gradients.panel }}>
      {/* Background texture */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(88, 101, 242, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(71, 82, 196, 0.05) 0%, transparent 50%)',
        }}
      />

      {/* Header */}
      <div
        className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between relative z-10 pt-safe-t"
        style={{ backgroundColor: theme.colors.chat, borderBottom: `1px solid ${theme.colors.border}` }}
      >
        <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
          <button
            onClick={onExit}
            className="min-w-[44px] min-h-[44px] p-2 rounded-lg transition-colors flex-shrink-0"
            style={{
              backgroundColor: theme.colors.interactive,
              color: theme.colors.textSecondary
            }}
            title="Exit session"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="min-w-0">
            <h2 className="text-base sm:text-lg font-semibold truncate" style={{ color: theme.colors.textPrimary }}>
              Homework Help
            </h2>
            <p className="text-xs sm:text-sm capitalize truncate" style={{ color: theme.colors.textSecondary }}>
              {problem.analysis?.topic || 'Mathematics'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowProblemImage(!showProblemImage)}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 min-h-[44px] rounded-lg transition-colors flex-shrink-0"
          style={{
            backgroundColor: theme.colors.interactive,
            borderColor: theme.colors.border,
            border: `1px solid ${theme.colors.border}`,
            color: theme.colors.textPrimary
          }}
        >
          <ImageIcon className="w-4 h-4" />
          <span className="text-xs sm:text-sm">{showProblemImage ? 'Hide' : 'Show'}</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex">
        {/* Problem Image Sidebar - Hidden on mobile, shown on desktop */}
        {showProblemImage && (
          <div
            className="hidden md:block w-80 p-4 overflow-y-auto relative z-10"
            style={{
              backgroundColor: theme.colors.chat,
              borderRight: `1px solid ${theme.colors.border}`
            }}
          >
            <h3 className="font-semibold mb-3" style={{ color: theme.colors.textPrimary }}>
              Your Problem
            </h3>
            <div className="rounded-lg overflow-hidden" style={{
              border: `1px solid ${theme.colors.border}`,
              backgroundColor: theme.colors.surface
            }}>
              <img
                src={problem.imageUrl || problem.imageData}
                alt="Problem"
                className="w-full h-auto"
              />
            </div>
            {problem.analysis?.extractedText && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2" style={{ color: theme.colors.textSecondary }}>
                  Problem Text
                </h4>
                <p className="text-sm whitespace-pre-wrap" style={{ color: theme.colors.textPrimary }}>
                  {problem.analysis.extractedText}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Mobile Problem Image Overlay */}
        {showProblemImage && (
          <div
            className="md:hidden fixed inset-0 z-40 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
            onClick={() => setShowProblemImage(false)}
          >
            <div
              className="max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-lg p-4"
              style={{ backgroundColor: theme.colors.surface }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold" style={{ color: theme.colors.textPrimary }}>
                  Your Problem
                </h3>
                <button
                  onClick={() => setShowProblemImage(false)}
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: theme.colors.interactive }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="rounded-lg overflow-hidden mb-4" style={{
                border: `1px solid ${theme.colors.border}`,
                backgroundColor: theme.colors.surface
              }}>
                <img
                  src={problem.imageUrl || problem.imageData}
                  alt="Problem"
                  className="w-full h-auto"
                />
              </div>
              {problem.analysis?.extractedText && (
                <div>
                  <h4 className="text-sm font-semibold mb-2" style={{ color: theme.colors.textSecondary }}>
                    Problem Text
                  </h4>
                  <p className="text-sm whitespace-pre-wrap" style={{ color: theme.colors.textPrimary }}>
                    {problem.analysis.extractedText}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Chat Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-3 sm:py-4 space-y-3 sm:space-y-4 relative z-10 pb-safe-b">
            {/* Avatar - Show when no messages or when speaking */}
            {(session.messages.length === 0 || isPlaying) && (
              <div
                className="fixed top-20 sm:top-24 md:top-28 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center"
              >
                <Avatar
                  state={avatarState}
                  emotion={getAvatarEmotion()}
                  subtitle={currentSubtitle}
                  showSubtitle={showSubtitle}
                  size={window.innerWidth < 640 ? 100 : 120}
                  audioDuration={audioDuration}
                />
              </div>
            )}

            {session.messages
              .filter(msg => msg.id !== speakingMessageId) // Hide message being spoken
              .map((message, idx, filteredArray) => {
                const isLastMessage = idx === filteredArray.length - 1;
                return (
              <div
                key={message.id || idx}
                ref={isLastMessage ? lastMessageRef : null}
                className={`flex ${message.role === 'student' ? 'justify-end' : 'justify-start'} animate-message-appear`}
              >
                {message.role === 'student' ? (
                  // Student message
                  <div className="max-w-2xl flex items-end space-x-2">
                    <div className="flex-1">
                      <div
                        className="px-5 py-4 backdrop-blur-sm hover:scale-[1.02] transition-transform"
                        style={{
                          background: theme.gradients.brand,
                          color: '#ffffff',
                          borderRadius: theme.radius.lg,
                          boxShadow: theme.shadows.glow,
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">
                          {message.text}
                        </p>
                      </div>
                      <p className="text-xs mt-1 text-right" style={{ color: theme.colors.textSecondary }}>
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xl">
                      🙋‍♀️
                    </div>
                  </div>
                ) : (
                  // Tutor message
                  <div className="max-w-3xl flex items-start space-x-2">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xl">
                      📚
                    </div>
                    <div className="flex-1">
                      <div
                        className="px-5 py-4 border backdrop-blur-sm hover:scale-[1.02] transition-transform"
                        style={{
                          background: theme.colors.tutorMessage,
                          borderColor: theme.glass.border,
                          color: theme.colors.textPrimary,
                          borderRadius: theme.radius.lg,
                          boxShadow: theme.shadows.md,
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        <div
                          className="text-sm leading-relaxed whitespace-pre-wrap font-medium"
                          style={{ fontFamily: theme.typography.fontFamily }}
                        >
                          {message.display?.content && (
                            <MessageDisplay content={message.display.content} />
                          )}
                        </div>
                        {message.display?.mathTool && (
                          <div className="mt-4 p-4 rounded-lg" style={{
                            backgroundColor: theme.colors.surface,
                            border: `1px solid ${theme.colors.border}`
                          }}>
                            <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                              Visual tool: {message.display.mathTool.type}
                            </p>
                            {/* TODO: Render actual math tool */}
                          </div>
                        )}
                      </div>
                      <p className="text-xs mt-1" style={{ color: theme.colors.textSecondary }}>
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
                );
              })}

            {/* Loading indicator */}
            {isLoading && (
              <div ref={lastMessageRef} className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xl">
                    📚
                  </div>
                  <div
                    className="px-4 py-3 flex items-center space-x-2 backdrop-blur-sm"
                    style={{
                      background: theme.colors.tutorMessage,
                      border: `1px solid ${theme.glass.border}`,
                      borderRadius: theme.radius.lg,
                      boxShadow: theme.shadows.md,
                    }}
                  >
                    <Loader className="w-4 h-4 animate-spin" style={{ color: theme.colors.brand }} />
                    <span style={{ color: theme.colors.textPrimary }}>Analyzing...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Progress Indicator */}
          <div className="px-6 py-2 relative z-10" style={{
            backgroundColor: theme.colors.surface,
            borderTop: `1px solid ${theme.colors.border}`
          }}>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="px-6 py-3 relative z-10" style={{
              backgroundColor: 'rgba(220, 38, 38, 0.1)',
              borderTop: '1px solid rgba(220, 38, 38, 0.3)',
              borderBottom: '1px solid rgba(220, 38, 38, 0.3)'
            }}>
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#DC2626' }} />
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: '#991B1B' }}>Failed to get response</p>
                  <p className="text-sm mt-1" style={{ color: '#B91C1C' }}>{error}</p>
                  <p className="text-xs mt-1" style={{ color: '#DC2626' }}>
                    Please try sending your message again, or exit and restart the session.
                  </p>
                </div>
                {onClearError && (
                  <button
                    onClick={onClearError}
                    className="p-1 rounded transition-colors"
                    style={{ color: '#DC2626' }}
                    title="Dismiss error"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div
            className="px-4 sm:px-6 py-3 sm:py-4 relative z-10"
            style={{
              backgroundColor: theme.colors.chat,
              borderTop: `1px solid ${theme.colors.border}`,
              paddingBottom: 'max(env(safe-area-inset-bottom), 12px)',
            }}
          >
            <form onSubmit={handleSubmit} className="flex items-end gap-2 sm:gap-3">
              <div className="flex-1 min-w-0">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Share your thinking, ask a question, or show your work..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg resize-none focus:ring-2 focus:outline-none text-sm sm:text-base"
                  style={{
                    backgroundColor: theme.colors.surface,
                    border: `1px solid ${theme.colors.border}`,
                    color: theme.colors.textPrimary,
                    borderRadius: theme.radius.lg,
                  }}
                  rows={2}
                  disabled={isLoading}
                />
                <p className="text-[10px] sm:text-xs mt-1 hidden xs:block" style={{ color: theme.colors.textSecondary }}>
                  Press Enter to send, Shift+Enter for new line
                </p>
              </div>

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="px-4 sm:px-6 min-h-[44px] sm:py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 sm:gap-2 flex-shrink-0"
                style={{
                  background: theme.gradients.brand,
                  color: '#ffffff',
                  borderRadius: theme.radius.lg,
                  boxShadow: theme.shadows.md,
                }}
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Session Complete Modal - Only show after speech completes */}
      {showCompletionModal && (
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 z-50" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(4px)'
        }}>
          <div className="p-5 sm:p-6 md:p-8 max-w-md w-full" style={{
            backgroundColor: theme.colors.surface,
            borderRadius: theme.radius.lg,
            boxShadow: theme.shadows.xl,
            border: `1px solid ${theme.colors.border}`
          }}>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: theme.colors.textPrimary }}>
              Great Work! 🎉
            </h3>
            {session.finalOutcome === 'solved-with-understanding' && (
              <div>
                <p className="text-sm sm:text-base mb-3 sm:mb-4" style={{ color: theme.colors.textPrimary }}>
                  You successfully solved the problem and demonstrated solid understanding of:
                </p>
                <ul className="list-disc list-inside space-y-1 mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: theme.colors.textPrimary }}>
                  {session.understoodConcepts.map((concept, idx) => (
                    <li key={idx}>
                      {concept}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex gap-3">
              <button
                onClick={onExit}
                className="flex-1 px-4 py-2.5 sm:py-2 min-h-[44px] rounded-lg transition-colors text-sm sm:text-base font-medium"
                style={{
                  background: theme.gradients.brand,
                  color: '#ffffff',
                  borderRadius: theme.radius.lg,
                  boxShadow: theme.shadows.md,
                }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
