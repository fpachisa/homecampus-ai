import React from 'react';

interface Props {
  stats: {
    problemsAttempted: number;
    correctAnswers: number;
    hintsProvided: number;
    startTime: Date;
  };
  currentScore?: number;
}

const ProgressIndicator: React.FC<Props> = ({ stats, currentScore = 0 }) => {
  const sessionDuration = Math.round(
    (new Date().getTime() - stats.startTime.getTime()) / 60000
  );


  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-2 bg-white/20 backdrop-blur px-3 py-1 rounded-full">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <span className="text-sm text-white font-medium">
          Score: {currentScore.toFixed(2)}/1.00
        </span>
      </div>

      <div className="flex items-center space-x-2 bg-white/20 backdrop-blur px-3 py-1 rounded-full">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <span className="text-sm text-white font-medium">
          {stats.correctAnswers} {stats.correctAnswers === 1 ? 'Problem' : 'Problems'}
        </span>
      </div>

      <div className="flex items-center space-x-2 bg-white/20 backdrop-blur px-3 py-1 rounded-full">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <span className="text-sm text-white font-medium">
          {sessionDuration}m
        </span>
      </div>
    </div>
  );
};

export default ProgressIndicator;