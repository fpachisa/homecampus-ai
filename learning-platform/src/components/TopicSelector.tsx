import React from 'react';
import MathText from './MathText';
import { sessionStorage } from '../services/sessionStorage';
import { P6_MATH_FRACTIONS } from '../prompts/topics/P6-Math-Fractions';
import type { TopicId } from '../prompts/topics/P6-Math-Fractions';

interface TopicSelectorProps {
  onTopicSelect: (topicId: TopicId) => void;
  onResumeSession?: () => void;
}

const TopicSelector: React.FC<TopicSelectorProps> = ({ onTopicSelect, onResumeSession }) => {
  const topics = Object.entries(P6_MATH_FRACTIONS);
  const sessionInfo = sessionStorage.getSessionInfo();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-3xl text-white shadow-lg mx-auto mb-4">
            ➗
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Fraction Division Tutor
          </h1>
          <p className="text-gray-600">
            Choose a topic to start practicing! Master fractions step by step.
          </p>
        </div>

        {/* Continue Session Banner */}
        {sessionInfo && onResumeSession && (
          <div className="mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                  ⏰
                </div>
                <div>
                  <h3 className="font-semibold text-emerald-800">Continue Learning</h3>
                  <p className="text-sm text-emerald-600">
                    Resume your session from {sessionStorage.getTimeElapsedString(sessionInfo.timestamp)}
                    • {sessionInfo.problemsCompleted} problems completed
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => sessionStorage.clearSession()}
                  className="px-3 py-1 text-sm text-emerald-600 hover:text-emerald-800 transition-colors"
                >
                  Start Fresh
                </button>
                <button
                  onClick={onResumeSession}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors font-medium"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Topic Cards */}
        <div className="grid gap-4">
          {topics.map(([topicId, config]) => (
            <button
              key={topicId}
              onClick={() => onTopicSelect(topicId as TopicId)}
              className="
                bg-white rounded-xl p-6 shadow-sm border border-gray-100
                hover:shadow-md hover:border-blue-200 transition-all duration-200
                text-left group focus:outline-none focus:ring-2 focus:ring-blue-400
              "
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {config.displayName}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Learn {config.topicName}
                  </p>

                  {/* Example problems preview */}
                  <div className="text-xs text-gray-500">
                    {topicId === 'p6-math-fractions-dividing-whole-numbers' && (
                      <>
                        <div className="mb-1"><strong>Easy:</strong> <MathText>1/2 ÷ 2 = 1/4</MathText></div>
                        <div className="mb-1"><strong>Medium:</strong> <MathText>3/5 ÷ 4 = 3/20</MathText></div>
                        <div><strong>Hard:</strong> <MathText>7/8 ÷ 6 = 7/48</MathText></div>
                      </>
                    )}
                    {topicId === 'p6-math-fractions-whole-number-dividing-fractions' && (
                      <>
                        <div className="mb-1"><strong>Easy:</strong> <MathText>3 ÷ 1/2 = 6</MathText></div>
                        <div className="mb-1"><strong>Medium:</strong> <MathText>6 ÷ 2/3 = 9</MathText></div>
                        <div><strong>Hard:</strong> <MathText>12 ÷ 3/8 = 32</MathText></div>
                      </>
                    )}
                    {topicId === 'p6-math-fractions-fraction-dividing-fraction' && (
                      <>
                        <div className="mb-1"><strong>Easy:</strong> <MathText>1/2 ÷ 1/4 = 2</MathText></div>
                        <div className="mb-1"><strong>Medium:</strong> <MathText>5/6 ÷ 1/12 = 10</MathText></div>
                        <div><strong>Hard:</strong> <MathText>7/8 ÷ 1/16 = 14</MathText></div>
                      </>
                    )}
                    {topicId === 'p6-math-fractions-word-problems' && (
                      <>
                        <div className="mb-1"><strong>Easy:</strong> "Nina had 2m of lace. Each bow needs 2/7m..."</div>
                        <div className="mb-1"><strong>Medium:</strong> "A chemist fills bottles with 2/11L each..."</div>
                        <div><strong>Hard:</strong> "Mr. Lee sells bags at $3.50 each..."</div>
                      </>
                    )}
                  </div>
                </div>

                {/* Arrow icon */}
                <div className="ml-4 text-gray-400 group-hover:text-blue-500 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Progress indicator placeholder */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Click to start learning</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="ml-2">Progress: 0%</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            💡 Each topic includes multiple difficulty levels that adapt to your progress.
            <br />
            Complete problems to earn points and unlock harder challenges!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopicSelector;