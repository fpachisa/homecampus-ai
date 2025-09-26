import React from 'react';
import MathText from './MathText';
import type { Message } from '../types/types';

interface Props {
  message: Message;
}

const MessageBubble: React.FC<Props> = ({ message }) => {
  const isTutor = message.role === 'tutor';

  return (
    <div className={`flex items-start space-x-3 message-appear ${isTutor ? 'justify-start' : 'justify-end flex-row-reverse space-x-reverse'}`}>
      {/* Avatar */}
      <div className={`
        flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg
        ${isTutor
          ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-md'
          : 'bg-gradient-to-br from-green-500 to-teal-600 text-white shadow-md'
        }
      `}>
        {isTutor ? '🧠' : '🙋‍♀️'}
      </div>

      {/* Message */}
      <div className={`
        relative max-w-lg rounded-2xl px-5 py-4 shadow-sm transition-all hover:shadow-md
        ${isTutor
          ? 'bg-white border border-gray-100 text-gray-800'
          : 'bg-gradient-to-br from-green-500 to-teal-600 text-white'
        }
      `}>
        {/* Message tail */}
        <div className={`
          absolute top-4 w-3 h-3 transform rotate-45
          ${isTutor
            ? 'bg-white border-l border-t border-gray-100 -left-1.5'
            : 'bg-gradient-to-br from-green-500 to-teal-600 -right-1.5'
          }
        `} />

        <div className={`text-xs font-semibold mb-2 ${isTutor ? 'text-blue-600' : 'text-green-100'}`}>
          {isTutor ? 'Math Tutor' : 'You'}
        </div>

        <div className="text-sm leading-relaxed whitespace-pre-wrap font-medium">
          <MathText>{message.content}</MathText>
        </div>

        {message.metadata?.isCorrect !== undefined && (
          <div className={`text-xs mt-3 pt-2 border-t ${isTutor ? 'border-gray-100 text-gray-500' : 'border-green-400 text-green-100'}`}>
            {message.metadata.isCorrect ? '✓ Correct answer!' : '→ Keep exploring...'}
          </div>
        )}

        {message.metadata?.difficulty && (
          <div className={`text-xs mt-2 ${isTutor ? 'text-gray-400' : 'text-green-200'}`}>
            Level: {message.metadata.difficulty}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;