/**
 * PathMascot - Animated character that follows progress
 *
 * Simple mascot character positioned at the current node to encourage learners.
 */

import React from 'react';

interface PathMascotProps {
  position: { x: number; y: number };
  mood: 'happy' | 'celebrating' | 'encouraging';
}

export const PathMascot: React.FC<PathMascotProps> = ({ position, mood }) => {
  // Select emoji based on mood
  const getMascotEmoji = () => {
    switch (mood) {
      case 'celebrating':
        return '🎉';
      case 'encouraging':
        return '💪';
      default:
        return '🦉'; // Friendly owl mascot
    }
  };

  return (
    <div
      className="absolute z-20 pointer-events-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -120px)', // Position above the node
        transition: 'all 0.5s ease-in-out',
      }}
    >
      {/* Mascot Character */}
      <div
        className="
          relative
          animate-bounce
        "
        style={{
          animation: mood === 'celebrating' ? 'bounce 0.5s infinite' : 'none',
        }}
      >
        <div className="text-5xl" style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))' }}>
          {getMascotEmoji()}
        </div>

        {/* Speech Bubble (optional) */}
        {mood === 'encouraging' && (
          <div
            className="
              absolute
              -top-10
              left-1/2
              transform -translate-x-1/2
              bg-white
              text-gray-800
              text-xs
              px-3 py-1.5
              rounded-full
              whitespace-nowrap
              shadow-lg
            "
            style={{
              border: '2px solid #57F287',
            }}
          >
            Keep going!
            {/* Speech bubble arrow */}
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"
              style={{
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '6px solid #57F287',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
