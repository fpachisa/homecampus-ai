import React, { useState, type KeyboardEvent } from 'react';

interface Props {
  onSubmit: (input: string) => void;
  disabled: boolean;
}

const InputArea: React.FC<Props> = ({ onSubmit, disabled }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim() && !disabled) {
      onSubmit(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur border-t border-gray-200 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end space-x-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
          <div className="flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={disabled}
              placeholder="Type your answer or ask for help..."
              className="
                w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm
                focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100
                disabled:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-400
                transition-all duration-200 placeholder-gray-400
              "
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={disabled || !input.trim()}
            className={`
              px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200
              ${disabled || !input.trim()
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 shadow-md hover:shadow-lg'
              }
            `}
          >
            {disabled ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <span>Send</span>
                <span>↗</span>
              </div>
            )}
          </button>
        </div>

        {/* Helpful hints */}
        {!disabled && (
          <div className="mt-3 text-center">
            <p className="text-xs text-gray-500">
              💡 Try expressions like "1/2 ÷ 3" or ask "Can you help me understand this?"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputArea;