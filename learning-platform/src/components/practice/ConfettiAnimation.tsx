/**
 * ConfettiAnimation - Celebration confetti effect
 *
 * Simple confetti animation triggered on achievements and completions.
 */

import { useEffect, useState } from 'react';

interface ConfettiAnimationProps {
  trigger: boolean;
  duration?: number;
}

export const ConfettiAnimation: React.FC<ConfettiAnimationProps> = ({
  trigger,
  duration = 3000,
}) => {
  const [confettiPieces, setConfettiPieces] = useState<{
    id: number;
    x: number;
    y: number;
    color: string;
    rotation: number;
    size: number;
  }[]>([]);

  useEffect(() => {
    if (!trigger) return;

    // Generate confetti pieces
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random X position (percentage)
      y: -10, // Start above viewport
      color: ['#57F287', '#5865F2', '#EB459E', '#FFA500', '#FFD700'][Math.floor(Math.random() * 5)],
      rotation: Math.random() * 360,
      size: 8 + Math.random() * 8,
    }));

    setConfettiPieces(pieces);

    // Clear confetti after duration
    const timeout = setTimeout(() => {
      setConfettiPieces([]);
    }, duration);

    return () => clearTimeout(timeout);
  }, [trigger, duration]);

  if (confettiPieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            animation: `confettiFall ${2 + Math.random() * 2}s ease-in forwards`,
            borderRadius: piece.id % 2 === 0 ? '50%' : '0',
          }}
        />
      ))}

      <style>{`
        @keyframes confettiFall {
          from {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
