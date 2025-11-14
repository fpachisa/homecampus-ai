/**
 * HomeworkSession Component
 * Main tutoring interface for uploaded homework problems
 */

import React, { useState, useRef, useEffect } from 'react';
import { Send, Image as ImageIcon, Loader, ArrowLeft, AlertCircle, X } from 'lucide-react';
import type { HomeworkSession, UploadedProblem } from '../../types/homework';
import type { Theme } from '../../styles/themes';
import { MessageDisplay } from '../chat/MessageDisplay';

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
  theme: _theme, // TODO: Apply theme styling to session view
}) => {
  const [input, setInput] = useState('');
  const [showProblemImage, setShowProblemImage] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [session.messages]);

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
    <div className="flex flex-col h-screen max-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onExit}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Exit session"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Homework Help</h2>
            <p className="text-sm text-gray-600 capitalize">
              {problem.analysis?.topic || 'Mathematics'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowProblemImage(!showProblemImage)}
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <ImageIcon className="w-4 h-4" />
          <span className="text-sm">{showProblemImage ? 'Hide' : 'Show'} Problem</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex">
        {/* Problem Image Sidebar */}
        {showProblemImage && (
          <div className="w-80 border-r bg-white p-4 overflow-y-auto">
            <h3 className="font-semibold text-gray-700 mb-3">Your Problem</h3>
            <div className="border rounded-lg overflow-hidden bg-gray-50">
              <img
                src={problem.imageUrl || problem.imageData}
                alt="Problem"
                className="w-full h-auto"
              />
            </div>
            {problem.analysis?.extractedText && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-600 mb-2">Problem Text</h4>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">
                  {problem.analysis.extractedText}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Chat Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {session.messages.map((message, idx) => (
              <div
                key={message.id || idx}
                className={`flex ${message.role === 'student' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'student' ? (
                  // Student message
                  <div className="max-w-2xl">
                    <div className="bg-blue-600 text-white rounded-lg px-4 py-3">
                      <p className="whitespace-pre-wrap">{message.text}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-right">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                ) : (
                  // Tutor message
                  <div className="max-w-3xl">
                    <div className="bg-white border rounded-lg p-4">
                      {message.display?.content && (
                        <MessageDisplay content={message.display.content} />
                      )}
                      {message.display?.mathTool && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
                          <p className="text-sm text-gray-600">
                            Visual tool: {message.display.mathTool.type}
                          </p>
                          {/* TODO: Render actual math tool */}
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border rounded-lg px-4 py-3 flex items-center space-x-2">
                  <Loader className="w-4 h-4 animate-spin text-blue-600" />
                  <span className="text-gray-600">Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Progress Indicator */}
          <div className="px-6 py-2 bg-gray-100 border-t">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <span>Hints given: {session.hintsGiven}</span>
                <span>Questions asked: {session.questionsAsked}</span>
              </div>
              {session.understoodConcepts.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>{session.understoodConcepts.length} concepts mastered</span>
                </div>
              )}
            </div>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="px-6 py-3 bg-red-50 border-t border-b border-red-200">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-red-800 font-medium">Failed to get response</p>
                  <p className="text-sm text-red-700 mt-1">{error}</p>
                  <p className="text-xs text-red-600 mt-1">
                    Please try sending your message again, or exit and restart the session.
                  </p>
                </div>
                {onClearError && (
                  <button
                    onClick={onClearError}
                    className="p-1 hover:bg-red-100 rounded transition-colors"
                    title="Dismiss error"
                  >
                    <X className="w-4 h-4 text-red-600" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t bg-white px-6 py-4">
            <form onSubmit={handleSubmit} className="flex items-end space-x-3">
              <div className="flex-1">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Share your thinking, ask a question, or show your work..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  rows={3}
                  disabled={isLoading}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Press Enter to send, Shift+Enter for new line
                </p>
              </div>

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Session Complete Modal */}
      {session.status === 'completed' && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Great Work!</h3>
            {session.finalOutcome === 'solved-with-understanding' && (
              <div>
                <p className="text-gray-700 mb-4">
                  You successfully solved the problem and demonstrated solid understanding of:
                </p>
                <ul className="list-disc list-inside space-y-1 mb-6">
                  {session.understoodConcepts.map((concept, idx) => (
                    <li key={idx} className="text-gray-700">
                      {concept}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex space-x-3">
              <button
                onClick={onExit}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
