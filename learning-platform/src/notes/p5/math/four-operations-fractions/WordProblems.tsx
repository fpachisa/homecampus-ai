/**
 * Word Problems Notes (Combined)
 *
 * Comprehensive notes for P5 Four Operations of Fractions - Word Problems
 * covering both addition/subtraction and multiplication problems.
 * Uses inline SVG bar models for accurate visual representation.
 */

import { useState } from 'react';
import MathText from '../../../../components/MathText';

// ============================================
// PROBLEM DATA TYPES
// ============================================

interface WordProblem {
  id: string;
  title: string;
  difficulty: 1 | 2 | 3;
  problem: React.ReactNode;
  barModelSvg: React.ReactNode;
  solution: {
    steps: { description: React.ReactNode; calculation: React.ReactNode; result: React.ReactNode }[];
    answer: React.ReactNode;
  };
  tip?: React.ReactNode;
}

// ============================================
// ADDITION/SUBTRACTION BAR MODELS
// ============================================

// Problem: Orange Syrup and Water
const OrangeSyrupBarModel = () => (
  <svg viewBox="0 0 400 80" className="w-full max-w-md">
    <rect x="20" y="30" width="120" height="30" fill="#FFA500" stroke="#374151" strokeWidth="1" />
    <text x="80" y="50" textAnchor="middle" className="fill-white text-xs font-bold">1/8 litre</text>

    <rect x="140" y="30" width="200" height="30" fill="#60A5FA" stroke="#374151" strokeWidth="1" />
    <text x="240" y="50" textAnchor="middle" className="fill-white text-xs font-bold">9/10 litre</text>

    <path d="M 20 65 L 20 70 L 340 70 L 340 65" fill="none" stroke="#374151" strokeWidth="1.5" className="dark:stroke-gray-400" />
    <text x="180" y="78" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">?</text>
  </svg>
);

// Problem: Pole A and Pole B
const PolesBarModel = () => (
  <svg viewBox="0 0 400 120" className="w-full max-w-md">
    <text x="180" y="15" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-sm">3/4 m</text>
    <path d="M 20 25 L 20 20 L 340 20 L 340 25" fill="none" stroke="#374151" strokeWidth="1" className="dark:stroke-gray-400" />

    <text x="10" y="45" textAnchor="end" className="fill-gray-600 dark:fill-gray-400 text-xs">Pole A</text>
    <rect x="20" y="35" width="320" height="25" fill="#FBBF24" stroke="#374151" strokeWidth="1" />

    <text x="10" y="80" textAnchor="end" className="fill-gray-600 dark:fill-gray-400 text-xs">Pole B</text>
    <rect x="20" y="70" width="260" height="25" fill="#34D399" stroke="#374151" strokeWidth="1" />

    <path d="M 280 70 L 280 60 L 340 60 L 340 70" fill="none" stroke="#EF4444" strokeWidth="1.5" />
    <text x="310" y="55" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-xs">1/5 m</text>

    <path d="M 20 100 L 20 105 L 280 105 L 280 100" fill="none" stroke="#374151" strokeWidth="1" className="dark:stroke-gray-400" />
    <text x="150" y="115" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">?</text>
  </svg>
);

// Problem: Potatoes
const PotatoesBarModel = () => (
  <svg viewBox="0 0 400 80" className="w-full max-w-md">
    <text x="200" y="15" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-sm">1 kg</text>
    <path d="M 20 25 L 20 20 L 380 20 L 380 25" fill="none" stroke="#374151" strokeWidth="1" className="dark:stroke-gray-400" />

    <rect x="20" y="30" width="144" height="30" fill="#EF4444" stroke="#374151" strokeWidth="1" />
    <text x="92" y="50" textAnchor="middle" className="fill-white text-xs font-bold">2/5 kg</text>

    <rect x="164" y="30" width="72" height="30" fill="#F59E0B" stroke="#374151" strokeWidth="1" />
    <text x="200" y="50" textAnchor="middle" className="fill-white text-xs font-bold">1/10 kg</text>

    <rect x="236" y="30" width="144" height="30" fill="#10B981" stroke="#374151" strokeWidth="1" />
    <text x="308" y="50" textAnchor="middle" className="fill-white text-xs font-bold">?</text>
  </svg>
);

// Problem: Three Boxes
const ThreeBoxesBarModel = () => (
  <svg viewBox="0 0 420 140" className="w-full max-w-lg">
    <text x="5" y="23" textAnchor="start" className="fill-gray-700 dark:fill-gray-300 text-xs font-medium">X</text>
    <rect x="25" y="10" width="200" height="25" fill="#3B82F6" stroke="#374151" strokeWidth="1" />
    <text x="125" y="27" textAnchor="middle" className="fill-white text-xs font-bold">8½ kg</text>
    <text x="350" y="27" textAnchor="start" className="fill-blue-600 dark:fill-blue-400 text-xs">(given)</text>

    <text x="5" y="58" textAnchor="start" className="fill-gray-700 dark:fill-gray-300 text-xs font-medium">Y</text>
    <rect x="25" y="45" width="280" height="25" fill="#10B981" stroke="#374151" strokeWidth="1" />

    <rect x="225" y="45" width="80" height="25" fill="#10B981" fillOpacity="0.4" stroke="#EF4444" strokeWidth="2" strokeDasharray="4,2" />
    <text x="265" y="62" textAnchor="middle" className="fill-red-700 dark:fill-red-300 text-xs font-bold">2⅖ kg</text>

    <text x="5" y="98" textAnchor="start" className="fill-gray-700 dark:fill-gray-300 text-xs font-medium">Z</text>
    <rect x="25" y="85" width="240" height="25" fill="#F59E0B" stroke="#374151" strokeWidth="1" />
    <text x="145" y="102" textAnchor="middle" className="fill-white text-xs font-bold">?</text>
    <text x="350" y="102" textAnchor="start" className="fill-orange-600 dark:fill-orange-400 text-xs">(find)</text>

    <rect x="265" y="85" width="40" height="25" fill="#F59E0B" fillOpacity="0.4" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4,2" />
    <text x="285" y="102" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-xs font-bold">1¼ kg</text>
  </svg>
);

// Problem: Flask of Water
const FlaskBarModel = () => (
  <svg viewBox="0 0 400 90" className="w-full max-w-md">
    <rect x="20" y="15" width="140" height="35" fill="#3B82F6" stroke="#374151" strokeWidth="1" />
    <text x="90" y="38" textAnchor="middle" className="fill-white text-sm font-bold">?</text>

    <rect x="160" y="15" width="80" height="35" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" strokeDasharray="5,3" className="dark:fill-red-900/30" />
    <text x="200" y="38" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-xs font-bold">−1⅜ ℓ</text>

    <rect x="240" y="15" width="100" height="35" fill="#10B981" stroke="#374151" strokeWidth="1" />
    <text x="290" y="38" textAnchor="middle" className="fill-white text-xs font-bold">+1¾ ℓ</text>

    <path d="M 20 55 L 20 60 L 340 60 L 340 55" fill="none" stroke="#374151" strokeWidth="1.5" className="dark:stroke-gray-400" />
    <text x="180" y="78" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-sm font-bold">4 litres</text>
  </svg>
);

// ============================================
// MULTIPLICATION BAR MODELS
// ============================================

// Problem: Concert Adults/Children
const ConcertBarModel = () => (
  <svg viewBox="0 0 400 95" className="w-full max-w-md">
    <text x="200" y="15" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-sm font-medium">150 people</text>
    <path d="M 40 25 L 40 20 L 360 20 L 360 25" fill="none" stroke="#374151" strokeWidth="1" className="dark:stroke-gray-400" />

    <rect x="40" y="30" width="106" height="35" fill="#3B82F6" stroke="#374151" strokeWidth="1" />
    <rect x="146" y="30" width="107" height="35" fill="#3B82F6" stroke="#374151" strokeWidth="1" />
    <rect x="253" y="30" width="107" height="35" fill="#93C5FD" stroke="#374151" strokeWidth="1" />

    <text x="146" y="52" textAnchor="middle" className="fill-white text-xs font-bold">Adults</text>
    <text x="306" y="52" textAnchor="middle" className="fill-blue-900 dark:fill-blue-200 text-xs font-bold">Children</text>

    <path d="M 40 70 L 40 75 L 253 75 L 253 70" fill="none" stroke="#3B82F6" strokeWidth="2" />
    <text x="146" y="90" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-xs">2/3 = ?</text>
  </svg>
);

// Problem: Flour Usage
const FlourBarModel = () => (
  <svg viewBox="0 0 400 100" className="w-full max-w-md">
    <text x="200" y="15" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-sm font-medium">3/4 kg flour</text>
    <path d="M 40 25 L 40 20 L 360 20 L 360 25" fill="none" stroke="#374151" strokeWidth="1" className="dark:stroke-gray-400" />

    <rect x="40" y="30" width="106" height="30" fill="#F59E0B" stroke="#374151" strokeWidth="1" />
    <rect x="146" y="30" width="107" height="30" fill="#E5E7EB" stroke="#374151" strokeWidth="1" className="dark:fill-gray-600" />
    <rect x="253" y="30" width="107" height="30" fill="#E5E7EB" stroke="#374151" strokeWidth="1" className="dark:fill-gray-600" />

    <path d="M 40 65 L 40 70 L 146 70 L 146 65" fill="none" stroke="#F59E0B" strokeWidth="2" />
    <text x="93" y="83" textAnchor="middle" className="fill-orange-600 dark:fill-orange-400 text-xs">1/3 used = ?</text>

    <path d="M 146 65 L 146 70 L 360 70 L 360 65" fill="none" stroke="#10B981" strokeWidth="2" />
    <text x="253" y="83" textAnchor="middle" className="fill-green-600 dark:fill-green-400 text-xs">left = ?</text>
  </svg>
);

// Problem: Students with Glasses (Two-step)
const StudentsBarModel = () => (
  <svg viewBox="0 0 400 145" className="w-full max-w-md">
    <text x="200" y="15" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-sm font-medium">480 students</text>
    <path d="M 20 25 L 20 20 L 380 20 L 380 25" fill="none" stroke="#374151" strokeWidth="1" className="dark:stroke-gray-400" />

    {[0, 1, 2, 3, 4].map((i) => (
      <rect
        key={i}
        x={20 + i * 72}
        y={30}
        width={72}
        height={30}
        fill={i < 3 ? '#EC4899' : '#E5E7EB'}
        stroke="#374151"
        strokeWidth="1"
        className={i >= 3 ? 'dark:fill-gray-600' : ''}
      />
    ))}

    <path d="M 20 65 L 20 70 L 236 70 L 236 65" fill="none" stroke="#EC4899" strokeWidth="1.5" />
    <text x="128" y="82" textAnchor="middle" className="fill-pink-600 dark:fill-pink-400 text-xs">3/5 = Girls</text>

    <text x="128" y="97" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400 text-xs">Girls divided into 4 parts:</text>
    {[0, 1, 2, 3].map((i) => (
      <rect
        key={i}
        x={20 + i * 54}
        y={105}
        width={54}
        height={20}
        fill={i === 0 ? '#8B5CF6' : '#FDE8E8'}
        stroke="#374151"
        strokeWidth="1"
        className={i !== 0 ? 'dark:fill-pink-900/30' : ''}
      />
    ))}
    <text x="47" y="119" textAnchor="middle" className="fill-white text-xs font-bold">1/4</text>
    <text x="130" y="140" textAnchor="middle" className="fill-purple-600 dark:fill-purple-400 text-xs">wear glasses</text>
  </svg>
);

// Problem: Buttons (Multi-part) - Singapore Math Style
const ButtonsBarModel = () => {
  const unitWidth = 28;
  const startX = 20;
  const barHeight = 28;

  return (
    <svg viewBox="0 0 400 185" className="w-full max-w-lg">
      {/* === FIRST BAR: Initial breakdown === */}
      {/* Labels above - brackets point downward (∩ shape) */}
      <text x={startX + 1.5 * unitWidth} y="12" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">red</text>
      <path d={`M ${startX} 20 L ${startX} 15 L ${startX + 3 * unitWidth} 15 L ${startX + 3 * unitWidth} 20`} fill="none" stroke="#374151" strokeWidth="1" className="dark:stroke-gray-400" />

      <text x={startX + 5 * unitWidth} y="12" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">blue</text>
      <path d={`M ${startX + 3 * unitWidth} 20 L ${startX + 3 * unitWidth} 15 L ${startX + 7 * unitWidth} 15 L ${startX + 7 * unitWidth} 20`} fill="none" stroke="#374151" strokeWidth="1" className="dark:stroke-gray-400" />

      <text x={startX + 9.5 * unitWidth} y="12" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">remaining</text>
      <path d={`M ${startX + 7 * unitWidth} 20 L ${startX + 7 * unitWidth} 15 L ${startX + 12 * unitWidth} 15 L ${startX + 12 * unitWidth} 20`} fill="none" stroke="#374151" strokeWidth="1" className="dark:stroke-gray-400" />

      {/* First bar - 12 units */}
      {/* Red: 3 units */}
      {[0, 1, 2].map(i => (
        <rect key={`red-${i}`} x={startX + i * unitWidth} y={22} width={unitWidth} height={barHeight} fill="#EF4444" stroke="#374151" strokeWidth="1" />
      ))}
      {/* Blue: 4 units */}
      {[3, 4, 5, 6].map(i => (
        <rect key={`blue-${i}`} x={startX + i * unitWidth} y={22} width={unitWidth} height={barHeight} fill="#3B82F6" stroke="#374151" strokeWidth="1" />
      ))}
      {/* Remaining: 5 units (light gray with dashed internal divisions) */}
      {[7, 8, 9, 10, 11].map(i => (
        <rect key={`rem-${i}`} x={startX + i * unitWidth} y={22} width={unitWidth} height={barHeight} fill="#E5E7EB" stroke="#374151" strokeWidth="1" className="dark:fill-gray-600" />
      ))}

      {/* Sub-bracket for green/white within remaining */}
      <text x={startX + 7.5 * unitWidth} y="68" textAnchor="middle" className="fill-green-600 dark:fill-green-400 text-xs">green</text>
      <path d={`M ${startX + 7 * unitWidth} 53 L ${startX + 7 * unitWidth} 58 L ${startX + 8 * unitWidth} 58 L ${startX + 8 * unitWidth} 53`} fill="none" stroke="#10B981" strokeWidth="1" />

      <text x={startX + 10 * unitWidth} y="68" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400 text-xs">white</text>
      <path d={`M ${startX + 8 * unitWidth} 53 L ${startX + 8 * unitWidth} 58 L ${startX + 12 * unitWidth} 58 L ${startX + 12 * unitWidth} 53`} fill="none" stroke="#6B7280" strokeWidth="1" />

      {/* Arrow pointing down */}
      <path d="M 200 78 L 200 92 M 195 87 L 200 92 L 205 87" fill="none" stroke="#374151" strokeWidth="2" className="dark:stroke-gray-400" />

      {/* === SECOND BAR: Consolidated view === */}
      {/* Labels above second bar - brackets point downward (∩ shape) */}
      <text x={startX + 1.5 * unitWidth} y="105" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">red</text>
      <path d={`M ${startX} 113 L ${startX} 108 L ${startX + 3 * unitWidth} 108 L ${startX + 3 * unitWidth} 113`} fill="none" stroke="#374151" strokeWidth="1" className="dark:stroke-gray-400" />

      <text x={startX + 5 * unitWidth} y="105" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">blue</text>
      <path d={`M ${startX + 3 * unitWidth} 113 L ${startX + 3 * unitWidth} 108 L ${startX + 7 * unitWidth} 108 L ${startX + 7 * unitWidth} 113`} fill="none" stroke="#374151" strokeWidth="1" className="dark:stroke-gray-400" />

      <text x={startX + 7.5 * unitWidth} y="105" textAnchor="middle" className="fill-green-600 dark:fill-green-400 text-xs">green</text>
      <path d={`M ${startX + 7 * unitWidth} 113 L ${startX + 7 * unitWidth} 108 L ${startX + 8 * unitWidth} 108 L ${startX + 8 * unitWidth} 113`} fill="none" stroke="#10B981" strokeWidth="1" />

      <text x={startX + 10 * unitWidth} y="105" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400 text-xs">white</text>
      <path d={`M ${startX + 8 * unitWidth} 113 L ${startX + 8 * unitWidth} 108 L ${startX + 12 * unitWidth} 108 L ${startX + 12 * unitWidth} 113`} fill="none" stroke="#6B7280" strokeWidth="1" />

      {/* Second bar - 12 units with final colors */}
      {/* Red: 3 units */}
      {[0, 1, 2].map(i => (
        <rect key={`red2-${i}`} x={startX + i * unitWidth} y={115} width={unitWidth} height={barHeight} fill="#EF4444" stroke="#374151" strokeWidth="1" />
      ))}
      {/* Blue: 4 units */}
      {[3, 4, 5, 6].map(i => (
        <rect key={`blue2-${i}`} x={startX + i * unitWidth} y={115} width={unitWidth} height={barHeight} fill="#3B82F6" stroke="#374151" strokeWidth="1" />
      ))}
      {/* Green: 1 unit (1/12 of total) */}
      <rect x={startX + 7 * unitWidth} y={115} width={unitWidth} height={barHeight} fill="#10B981" stroke="#374151" strokeWidth="1" />
      {/* White: 4 units (4/12 = 1/3 of total) */}
      {[8, 9, 10, 11].map(i => (
        <rect key={`white2-${i}`} x={startX + i * unitWidth} y={115} width={unitWidth} height={barHeight} fill="#F9FAFB" stroke="#374151" strokeWidth="1" className="dark:fill-gray-500" />
      ))}

      {/* Total bracket with ? */}
      <path d={`M ${startX} 148 L ${startX} 153 L ${startX + 12 * unitWidth} 153 L ${startX + 12 * unitWidth} 148`} fill="none" stroke="#374151" strokeWidth="1.5" className="dark:stroke-gray-400" />
      <text x={startX + 6 * unitWidth} y="168" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-sm font-medium">?</text>

      {/* Key insight annotation - positioned below */}
      <text x={startX + 6 * unitWidth} y="182" textAnchor="middle" className="fill-orange-600 dark:fill-orange-400 text-xs font-medium">4 units − 1 unit = 3 units = 36</text>
    </svg>
  );
};

// Problem: Fruits (Complex) - Singapore Math Style
const FruitsBarModel = () => {
  const totalWidth = 336; // Same width for both bars
  const startX = 20;
  const barHeight = 26;

  // First bar: 7 large units (3 apples + 4 remaining)
  const unit7 = totalWidth / 7;
  // Second bar: 14 small units (6 apples + 5 pears + 3 oranges)
  const unit14 = totalWidth / 14;

  return (
    <svg viewBox="0 0 400 190" className="w-full max-w-lg">
      {/* === FIRST BAR: Initial breakdown (7 units for apples/remainder) === */}
      {/* Labels above - brackets point downward (∩ shape) */}
      <text x={startX + 1.5 * unit7} y="12" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">apples</text>
      <path d={`M ${startX} 20 L ${startX} 15 L ${startX + 3 * unit7} 15 L ${startX + 3 * unit7} 20`} fill="none" stroke="#374151" strokeWidth="1" className="dark:stroke-gray-400" />

      <text x={startX + 5 * unit7} y="12" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">remaining fruits</text>
      <path d={`M ${startX + 3 * unit7} 20 L ${startX + 3 * unit7} 15 L ${startX + 7 * unit7} 15 L ${startX + 7 * unit7} 20`} fill="none" stroke="#374151" strokeWidth="1" className="dark:stroke-gray-400" />

      {/* First bar - 7 units: 3 apples, 4 remaining */}
      {[0, 1, 2].map(i => (
        <rect key={`apple-${i}`} x={startX + i * unit7} y={22} width={unit7} height={barHeight} fill="#EF4444" stroke="#374151" strokeWidth="1" />
      ))}
      {[3, 4, 5, 6].map(i => (
        <rect key={`rem-${i}`} x={startX + i * unit7} y={22} width={unit7} height={barHeight} fill="#E5E7EB" stroke="#374151" strokeWidth="1" className="dark:fill-gray-600" />
      ))}

      {/* Sub-bracket for pears/oranges within remaining (5/8 pears, 3/8 oranges) */}
      <text x={startX + 4.25 * unit7} y="68" textAnchor="middle" className="fill-yellow-600 dark:fill-yellow-400 text-xs">pears</text>
      <path d={`M ${startX + 3 * unit7} 52 L ${startX + 3 * unit7} 58 L ${startX + 5.5 * unit7} 58 L ${startX + 5.5 * unit7} 52`} fill="none" stroke="#F59E0B" strokeWidth="1" />

      <text x={startX + 6.25 * unit7} y="68" textAnchor="middle" className="fill-orange-600 dark:fill-orange-400 text-xs">oranges</text>
      <path d={`M ${startX + 5.5 * unit7} 52 L ${startX + 5.5 * unit7} 58 L ${startX + 7 * unit7} 58 L ${startX + 7 * unit7} 52`} fill="none" stroke="#F97316" strokeWidth="1" />

      {/* Arrow pointing down */}
      <path d={`M ${startX + 3.5 * unit7} 78 L ${startX + 3.5 * unit7} 92 M ${startX + 3.5 * unit7 - 5} 87 L ${startX + 3.5 * unit7} 92 L ${startX + 3.5 * unit7 + 5} 87`} fill="none" stroke="#374151" strokeWidth="2" className="dark:stroke-gray-400" />

      {/* === SECOND BAR: Unified view (14 units total) === */}
      {/* Labels above second bar - brackets point downward (∩ shape) */}
      <text x={startX + 3 * unit14} y="105" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">apples</text>
      <path d={`M ${startX} 113 L ${startX} 108 L ${startX + 6 * unit14} 108 L ${startX + 6 * unit14} 113`} fill="none" stroke="#374151" strokeWidth="1" className="dark:stroke-gray-400" />

      <text x={startX + 8.5 * unit14} y="105" textAnchor="middle" className="fill-yellow-600 dark:fill-yellow-400 text-xs">pears</text>
      <path d={`M ${startX + 6 * unit14} 113 L ${startX + 6 * unit14} 108 L ${startX + 11 * unit14} 108 L ${startX + 11 * unit14} 113`} fill="none" stroke="#F59E0B" strokeWidth="1" />

      <text x={startX + 12.5 * unit14} y="105" textAnchor="middle" className="fill-orange-600 dark:fill-orange-400 text-xs">oranges</text>
      <path d={`M ${startX + 11 * unit14} 113 L ${startX + 11 * unit14} 108 L ${startX + 14 * unit14} 108 L ${startX + 14 * unit14} 113`} fill="none" stroke="#F97316" strokeWidth="1" />

      {/* Second bar - 14 units total: 6 apples, 5 pears, 3 oranges */}
      {/* Apples: 6 units */}
      {[0, 1, 2, 3, 4, 5].map(i => (
        <rect key={`apple2-${i}`} x={startX + i * unit14} y={115} width={unit14} height={barHeight} fill="#EF4444" stroke="#374151" strokeWidth="1" />
      ))}
      {/* Pears: 5 units */}
      {[6, 7, 8, 9, 10].map(i => (
        <rect key={`pear2-${i}`} x={startX + i * unit14} y={115} width={unit14} height={barHeight} fill="#FBBF24" stroke="#374151" strokeWidth="1" />
      ))}
      {/* Oranges: 3 units */}
      {[11, 12, 13].map(i => (
        <rect key={`orange2-${i}`} x={startX + i * unit14} y={115} width={unit14} height={barHeight} fill="#F97316" stroke="#374151" strokeWidth="1" />
      ))}

      {/* Total bracket with ? */}
      <path d={`M ${startX} 146 L ${startX} 151 L ${startX + totalWidth} 151 L ${startX + totalWidth} 146`} fill="none" stroke="#374151" strokeWidth="1.5" className="dark:stroke-gray-400" />
      <text x={startX + totalWidth / 2} y="166" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-sm font-medium">?</text>

      {/* Key insight annotation - positioned below */}
      <text x={startX + totalWidth / 2} y="182" textAnchor="middle" className="fill-green-600 dark:fill-green-400 text-xs font-medium">5 units − 3 units = 2 units = 42</text>
    </svg>
  );
};

// ============================================
// PROBLEM DATA
// ============================================

const ADDITION_SUBTRACTION_PROBLEMS: WordProblem[] = [
  {
    id: 'orange-syrup',
    title: 'Orange Syrup Drink',
    difficulty: 1,
    problem: <>A jug contained <MathText>{'$\\frac{1}{8}$'}</MathText> litre of orange syrup. Mary mixed <MathText>{'$\\frac{9}{10}$'}</MathText> litre of water with the orange syrup to make a drink. What was the volume of the drink? Give your answer as a mixed number.</>,
    barModelSvg: <OrangeSyrupBarModel />,
    solution: {
      steps: [
        { description: 'Find LCD of 8 and 10', calculation: 'LCD = 40', result: '40' },
        { description: 'Convert fractions', calculation: <><MathText>{'$\\frac{1}{8} = \\frac{5}{40}$'}</MathText>, <MathText>{'$\\frac{9}{10} = \\frac{36}{40}$'}</MathText></>, result: <><MathText>{'$\\frac{5}{40}$'}</MathText> and <MathText>{'$\\frac{36}{40}$'}</MathText></> },
        { description: 'Add the fractions', calculation: <MathText>{'$\\frac{5}{40} + \\frac{36}{40}$'}</MathText>, result: <MathText>{'$\\frac{41}{40}$'}</MathText> },
        { description: 'Convert to mixed number', calculation: <MathText>{'$\\frac{41}{40}$'}</MathText>, result: <><MathText>{'$1\\frac{1}{40}$'}</MathText> litres</> }
      ],
      answer: <>The volume of the drink was <MathText>{'$1\\frac{1}{40}$'}</MathText> litres.</>
    },
    tip: 'Remember to express your answer as a mixed number when asked!'
  },
  {
    id: 'poles-comparison',
    title: 'Comparing Pole Lengths',
    difficulty: 2,
    problem: <>Pole A is <MathText>{'$\\frac{3}{4}$'}</MathText> m long. It is <MathText>{'$\\frac{1}{5}$'}</MathText> m longer than Pole B. What is the length of Pole B?</>,
    barModelSvg: <PolesBarModel />,
    solution: {
      steps: [
        { description: 'Understand the relationship', calculation: <><MathText>{'$\\text{Pole A} = \\text{Pole B} + \\frac{1}{5}$'}</MathText></>, result: <><MathText>{'$\\text{Pole B} = \\text{Pole A} - \\frac{1}{5}$'}</MathText></> },
        { description: 'Find LCD of 4 and 5', calculation: 'LCD = 20', result: '20' },
        { description: 'Convert fractions', calculation: <><MathText>{'$\\frac{3}{4} = \\frac{15}{20}$'}</MathText>, <MathText>{'$\\frac{1}{5} = \\frac{4}{20}$'}</MathText></>, result: <><MathText>{'$\\frac{15}{20}$'}</MathText> and <MathText>{'$\\frac{4}{20}$'}</MathText></> },
        { description: 'Subtract', calculation: <MathText>{'$\\frac{15}{20} - \\frac{4}{20}$'}</MathText>, result: <><MathText>{'$\\frac{11}{20}$'}</MathText> m</> }
      ],
      answer: <>The length of Pole B is <MathText>{'$\\frac{11}{20}$'}</MathText> m.</>
    },
    tip: 'Draw the bar model to see that "A is longer than B" means A = B + difference, so B = A − difference.'
  },
  {
    id: 'potatoes',
    title: 'Sharing Potatoes',
    difficulty: 2,
    problem: <>Mrs Toh bought 1 kg of potatoes. She used <MathText>{'$\\frac{2}{5}$'}</MathText> kg of potatoes to cook chicken curry. She gave her neighbour <MathText>{'$\\frac{1}{10}$'}</MathText> kg of potatoes. What was the mass of potatoes she had left? Express your answer in its simplest form.</>,
    barModelSvg: <PotatoesBarModel />,
    solution: {
      steps: [
        { description: 'Find total used/given', calculation: <MathText>{'$\\frac{2}{5} + \\frac{1}{10}$'}</MathText>, result: 'Need LCD = 10' },
        { description: 'Convert and add', calculation: <><MathText>{'$\\frac{4}{10} + \\frac{1}{10} = \\frac{5}{10} = \\frac{1}{2}$'}</MathText> kg</>, result: <><MathText>{'$\\frac{1}{2}$'}</MathText> kg used</> },
        { description: 'Subtract from total', calculation: <MathText>{'$1 - \\frac{1}{2}$'}</MathText>, result: <><MathText>{'$\\frac{1}{2}$'}</MathText> kg left</> }
      ],
      answer: <>She had <MathText>{'$\\frac{1}{2}$'}</MathText> kg of potatoes left.</>
    },
    tip: <>You can also solve this in two steps: <MathText>{'$1 - \\frac{2}{5} = \\frac{3}{5}$'}</MathText>, then <MathText>{'$\\frac{3}{5} - \\frac{1}{10} = \\frac{6}{10} - \\frac{1}{10} = \\frac{5}{10} = \\frac{1}{2}$'}</MathText>.</>
  },
  {
    id: 'three-boxes',
    title: 'Three Boxes',
    difficulty: 3,
    problem: <>The mass of Box X is <MathText>{'$8\\frac{1}{2}$'}</MathText> kg. The mass of Box X is <MathText>{'$2\\frac{2}{5}$'}</MathText> kg less than the mass of Box Y. The mass of Box Y is <MathText>{'$1\\frac{1}{4}$'}</MathText> kg more than the mass of Box Z. What is the mass of Box Z?</>,
    barModelSvg: <ThreeBoxesBarModel />,
    solution: {
      steps: [
        { description: 'Find mass of Box Y', calculation: <MathText>{'$8\\frac{1}{2} + 2\\frac{2}{5}$'}</MathText>, result: <><MathText>{'$8\\frac{5}{10} + 2\\frac{4}{10} = 10\\frac{9}{10}$'}</MathText> kg</> },
        { description: 'Find mass of Box Z', calculation: <MathText>{'$10\\frac{9}{10} - 1\\frac{1}{4}$'}</MathText>, result: <>LCD = 20: <MathText>{'$10\\frac{18}{20} - 1\\frac{5}{20}$'}</MathText></> },
        { description: 'Calculate', calculation: <MathText>{'$10\\frac{18}{20} - 1\\frac{5}{20}$'}</MathText>, result: <><MathText>{'$9\\frac{13}{20}$'}</MathText> kg</> }
      ],
      answer: <>The mass of Box Z is <MathText>{'$9\\frac{13}{20}$'}</MathText> kg.</>
    },
    tip: 'Work step by step: first find Y from X, then find Z from Y.'
  },
  {
    id: 'flask-water',
    title: 'Flask of Water',
    difficulty: 3,
    problem: <>A flask contained some water. Leila drank <MathText>{'$1\\frac{3}{8}$'}</MathText> litres of water. She then filled the flask with <MathText>{'$1\\frac{3}{4}$'}</MathText> litres of water. There was 4 litres of water left in the flask. How much water was in the flask at first?</>,
    barModelSvg: <FlaskBarModel />,
    solution: {
      steps: [
        { description: 'Set up the equation', calculation: <MathText>{'$? - 1\\frac{3}{8} + 1\\frac{3}{4} = 4$'}</MathText>, result: <MathText>{'$? = 4 + 1\\frac{3}{8} - 1\\frac{3}{4}$'}</MathText> },
        { description: 'Find net change (added − drank)', calculation: <MathText>{'$1\\frac{3}{4} - 1\\frac{3}{8} = 1\\frac{6}{8} - 1\\frac{3}{8} = \\frac{3}{8}$'}</MathText>, result: 'Net gain = ⅜ litre' },
        { description: 'Work backwards from 4 litres', calculation: <MathText>{'$? + \\frac{3}{8} = 4$'}</MathText>, result: <MathText>{'$? = 4 - \\frac{3}{8}$'}</MathText> },
        { description: 'Calculate', calculation: <MathText>{'$\\frac{32}{8} - \\frac{3}{8} = \\frac{29}{8} = 3\\frac{5}{8}$'}</MathText>, result: '3⅝ litres' }
      ],
      answer: <>There was <MathText>{'$3\\frac{5}{8}$'}</MathText> litres of water in the flask at first.</>
    },
    tip: 'In before-after problems, find the net change first (added − drank), then work backwards from the final amount.'
  }
];

const MULTIPLICATION_PROBLEMS: WordProblem[] = [
  {
    id: 'concert',
    title: 'Concert Attendees',
    difficulty: 1,
    problem: <>There are 150 people at a concert. <MathText>{'$\\frac{2}{3}$'}</MathText> of them are adults and the rest are children. (a) How many adults are there? (b) How many children are there?</>,
    barModelSvg: <ConcertBarModel />,
    solution: {
      steps: [
        { description: '(a) Find number of adults', calculation: <MathText>{'$\\frac{2}{3} \\times 150$'}</MathText>, result: <><MathText>{'$\\frac{2}{3} \\times 150 = 100$'}</MathText> adults</> },
        { description: '(b) Find number of children', calculation: <MathText>{'$150 - 100$'}</MathText>, result: '50 children' }
      ],
      answer: '(a) There are 100 adults. (b) There are 50 children.'
    },
    tip: <>Alternative for (b): <MathText>{'$\\frac{1}{3} \\times 150 = 50$'}</MathText> children (since <MathText>{'$1 - \\frac{2}{3} = \\frac{1}{3}$'}</MathText> are children)</>
  },
  {
    id: 'flour',
    title: 'Flour for Baking',
    difficulty: 2,
    problem: <>Mrs Tan had <MathText>{'$\\frac{3}{4}$'}</MathText> kg of flour. She used <MathText>{'$\\frac{1}{3}$'}</MathText> of the flour to bake a cake. (a) How much flour did she use? (b) How much flour was left? Give your answers as fractions in the simplest form.</>,
    barModelSvg: <FlourBarModel />,
    solution: {
      steps: [
        { description: '(a) Find flour used', calculation: <MathText>{'$\\frac{1}{3} \\times \\frac{3}{4} = \\frac{3}{12} = \\frac{1}{4}$'}</MathText>, result: <><MathText>{'$\\frac{1}{4}$'}</MathText> kg</> },
        { description: '(b) Find flour left', calculation: <MathText>{'$\\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4} = \\frac{1}{2}$'}</MathText>, result: <><MathText>{'$\\frac{1}{2}$'}</MathText> kg</> }
      ],
      answer: <>(a) Mrs Tan used <MathText>{'$\\frac{1}{4}$'}</MathText> kg of flour. (b) <MathText>{'$\\frac{1}{2}$'}</MathText> kg of flour was left.</>
    },
    tip: <>Remember: "<MathText>{'$\\frac{1}{3}$'}</MathText> OF <MathText>{'$\\frac{3}{4}$'}</MathText>" means multiply: <MathText>{'$\\frac{1}{3} \\times \\frac{3}{4}$'}</MathText></>
  },
  {
    id: 'students-glasses',
    title: 'Students with Glasses',
    difficulty: 2,
    problem: <>There are 480 students in a hall. <MathText>{'$\\frac{3}{5}$'}</MathText> of the students are girls. <MathText>{'$\\frac{1}{4}$'}</MathText> of the girls wear glasses. How many girls wear glasses?</>,
    barModelSvg: <StudentsBarModel />,
    solution: {
      steps: [
        { description: 'Method 1: Find girls first', calculation: <MathText>{'$\\frac{3}{5} \\times 480 = 288$'}</MathText>, result: '288 girls' },
        { description: 'Then find girls with glasses', calculation: <MathText>{'$\\frac{1}{4} \\times 288 = 72$'}</MathText>, result: '72 girls wear glasses' },
        { description: 'Method 2: Direct calculation', calculation: <MathText>{'$\\frac{1}{4} \\times \\frac{3}{5} \\times 480 = \\frac{3}{20} \\times 480 = 72$'}</MathText>, result: '72' }
      ],
      answer: '72 girls wear glasses.'
    },
    tip: <>You can multiply the fractions first (<MathText>{'$\\frac{1}{4} \\times \\frac{3}{5} = \\frac{3}{20}$'}</MathText>), then multiply by the total.</>
  },
  {
    id: 'buttons',
    title: 'Colored Buttons',
    difficulty: 3,
    problem: <>Mrs Tay had a box of red, blue, green and white buttons. <MathText>{'$\\frac{1}{4}$'}</MathText> of the buttons were red and <MathText>{'$\\frac{1}{3}$'}</MathText> of the buttons were blue. <MathText>{'$\\frac{1}{5}$'}</MathText> of the remaining buttons were green. The rest of the buttons were white. There were 36 more white buttons than green buttons. (a) What fraction of the buttons were green? (b) How many buttons did Mrs Tay have altogether?</>,
    barModelSvg: <ButtonsBarModel />,
    solution: {
      steps: [
        { description: '(a) Find remaining fraction', calculation: <MathText>{'$1 - \\frac{1}{4} - \\frac{1}{3} = \\frac{12}{12} - \\frac{3}{12} - \\frac{4}{12} = \\frac{5}{12}$'}</MathText>, result: <>Remaining = <MathText>{'$\\frac{5}{12}$'}</MathText></> },
        { description: 'Find green fraction', calculation: <MathText>{'$\\frac{1}{5} \\times \\frac{5}{12} = \\frac{5}{60} = \\frac{1}{12}$'}</MathText>, result: <>Green = <MathText>{'$\\frac{1}{12}$'}</MathText></> },
        { description: '(b) Find white fraction', calculation: <MathText>{'$\\frac{5}{12} - \\frac{1}{12} = \\frac{4}{12} = \\frac{1}{3}$'}</MathText>, result: <>White = <MathText>{'$\\frac{1}{3}$'}</MathText></> },
        { description: 'Difference (white − green)', calculation: <MathText>{'$\\frac{1}{3} - \\frac{1}{12} = \\frac{4}{12} - \\frac{1}{12} = \\frac{3}{12} = \\frac{1}{4}$'}</MathText>, result: <>Difference = <MathText>{'$\\frac{1}{4}$'}</MathText></> },
        { description: 'Find total', calculation: <><MathText>{'$\\frac{1}{4}$'}</MathText> of total = 36, so total = 36 × 4</>, result: '144 buttons' }
      ],
      answer: <>(a) <MathText>{'$\\frac{1}{12}$'}</MathText> of the buttons were green. (b) Mrs Tay had 144 buttons altogether.</>
    },
    tip: 'Work step by step: First find remaining, then green, then white, then use the difference to find total.'
  },
  {
    id: 'fruits',
    title: 'Fruits in a Crate',
    difficulty: 3,
    problem: <>There were some fruits in a crate. <MathText>{'$\\frac{3}{7}$'}</MathText> of them were apples and <MathText>{'$\\frac{5}{8}$'}</MathText> of the remainder were pears. The rest of them were oranges. There were 42 more pears than oranges. How many fruits were there in the crate?</>,
    barModelSvg: <FruitsBarModel />,
    solution: {
      steps: [
        { description: 'Find remainder (not apples)', calculation: <MathText>{'$1 - \\frac{3}{7} = \\frac{4}{7}$'}</MathText>, result: <>Remainder = <MathText>{'$\\frac{4}{7}$'}</MathText></> },
        { description: 'Find pears fraction', calculation: <MathText>{'$\\frac{5}{8} \\times \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$'}</MathText>, result: <>Pears = <MathText>{'$\\frac{5}{14}$'}</MathText> of total</> },
        { description: 'Find oranges fraction', calculation: <MathText>{'$\\frac{3}{8} \\times \\frac{4}{7} = \\frac{12}{56} = \\frac{3}{14}$'}</MathText>, result: <>Oranges = <MathText>{'$\\frac{3}{14}$'}</MathText> of total</> },
        { description: 'Find difference', calculation: <MathText>{'$\\frac{5}{14} - \\frac{3}{14} = \\frac{2}{14} = \\frac{1}{7}$'}</MathText>, result: <>Difference = <MathText>{'$\\frac{1}{7}$'}</MathText> of total</> },
        { description: 'Find total', calculation: <><MathText>{'$\\frac{1}{7}$'}</MathText> = 42, so total = 42 × 7</>, result: '294 fruits' }
      ],
      answer: 'There were 294 fruits in the crate.'
    },
    tip: 'Always express each quantity as a fraction of the TOTAL, then use the given difference to find the actual total.'
  }
];

// ============================================
// COMPONENTS
// ============================================

interface ProblemCardProps {
  problem: WordProblem;
  index: number;
  colorScheme: 'teal' | 'purple';
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem, index, colorScheme }) => {
  const [showSolution, setShowSolution] = useState(false);

  const difficultyColor = {
    1: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    2: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    3: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
  };

  const difficultyLabel = { 1: 'Easy', 2: 'Medium', 3: 'Hard' };

  const colors = colorScheme === 'teal'
    ? {
        problem: 'bg-blue-50 dark:bg-blue-900/30 border-blue-400',
        button: 'bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700',
        step: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300'
      }
    : {
        problem: 'bg-purple-50 dark:bg-purple-900/30 border-purple-400',
        button: 'bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700',
        step: 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300'
      };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <h4 className="font-bold text-gray-900 dark:text-gray-100">
          Example {index + 1}: {problem.title}
        </h4>
        <span className={`px-2 py-1 rounded text-xs font-medium ${difficultyColor[problem.difficulty]}`}>
          {difficultyLabel[problem.difficulty]}
        </span>
      </div>

      <div className={`p-4 rounded mb-4 border-l-4 ${colors.problem}`}>
        <p className="text-gray-800 dark:text-gray-200">
          <strong>Problem:</strong> {problem.problem}
        </p>
      </div>

      <button
        onClick={() => setShowSolution(!showSolution)}
        className={`px-4 py-2 ${colors.button} text-white rounded transition-colors font-medium`}
      >
        {showSolution ? 'Hide' : 'Show'} Solution
      </button>

      {showSolution && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded space-y-4">
          <div>
            <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Step 1: Draw the Bar Model
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
              {problem.barModelSvg}
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Step 2: Solve
            </p>
            <div className="space-y-3">
              {problem.solution.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className={`px-2 py-1 ${colors.step} rounded text-sm font-bold min-w-[28px] text-center`}>
                    {String.fromCharCode(97 + idx)}
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                    <p className="font-mono text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded mt-1 inline-block">
                      {step.calculation} = {step.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
            <p className="font-bold text-green-600 dark:text-green-400 text-lg">
              Answer: {problem.solution.answer}
            </p>
          </div>

          {problem.tip && (
            <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border-l-4 border-yellow-400">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Tip:</strong> {problem.tip}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

export default function WordProblems() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Word Problems</h1>
        <p className="text-lg">Using bar models to solve fraction word problems</p>
        <p className="text-indigo-100 mt-2">{ADDITION_SUBTRACTION_PROBLEMS.length + MULTIPLICATION_PROBLEMS.length} problems covering addition, subtraction, and multiplication</p>
      </div>

      {/* Problem-Solving Strategy */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">
          Problem-Solving Strategy
        </h2>

        <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-500 mb-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded">
              <span className="w-10 h-10 flex items-center justify-center bg-teal-500 text-white rounded-full font-bold text-lg">1</span>
              <div>
                <p className="font-bold text-teal-600 dark:text-teal-400">READ</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Identify what you know and what you need to find</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded">
              <span className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold text-lg">2</span>
              <div>
                <p className="font-bold text-blue-600 dark:text-blue-400">DRAW</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Draw a bar model to visualize the relationship</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded">
              <span className="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full font-bold text-lg">3</span>
              <div>
                <p className="font-bold text-purple-600 dark:text-purple-400">SOLVE</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Set up the equation and calculate (find LCD if needed)</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded">
              <span className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-full font-bold text-lg">4</span>
              <div>
                <p className="font-bold text-orange-600 dark:text-orange-400">CHECK</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Verify your answer makes sense and include units</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Addition & Subtraction Problems */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">Part A: Addition & Subtraction Problems</h2>
          <p className="text-teal-100 text-sm">{ADDITION_SUBTRACTION_PROBLEMS.length} problems</p>
        </div>
        <div className="border-2 border-t-0 border-teal-300 dark:border-teal-600 rounded-b-lg p-4 bg-white dark:bg-gray-800">
          {ADDITION_SUBTRACTION_PROBLEMS.map((problem, idx) => (
            <ProblemCard key={problem.id} problem={problem} index={idx} colorScheme="teal" />
          ))}
        </div>
      </section>

      {/* Multiplication Problems */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">Part B: Multiplication Problems</h2>
          <p className="text-purple-100 text-sm">{MULTIPLICATION_PROBLEMS.length} problems</p>
        </div>
        <div className="border-2 border-t-0 border-purple-300 dark:border-purple-600 rounded-b-lg p-4 bg-white dark:bg-gray-800">
          {MULTIPLICATION_PROBLEMS.map((problem, idx) => (
            <ProblemCard key={problem.id} problem={problem} index={idx} colorScheme="purple" />
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
      <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg border-2 border-indigo-400 dark:border-indigo-600">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-800 dark:text-indigo-200">Key Takeaways</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-teal-700 dark:text-teal-300 mb-2">Addition & Subtraction</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 text-sm">
              <li>For <strong>"more than"</strong>: B = A − difference</li>
              <li>For <strong>"less than"</strong>: A = B − difference</li>
              <li>Always <strong>find the LCD</strong> before adding/subtracting</li>
              <li>For <strong>before-after</strong>: find net change first</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Multiplication</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 text-sm">
              <li><strong>"OF" means multiply</strong>: 2/3 of 150 = 2/3 × 150</li>
              <li><strong>Fraction of fraction</strong>: Multiply together</li>
              <li><strong>Remainder</strong> = 1 − fraction taken</li>
              <li>Express ALL parts as fractions of the <strong>SAME total</strong></li>
            </ul>
          </div>
        </div>

        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
          <strong>Remember:</strong> Bar models help visualize relationships. Always include units and simplify your final answer!
        </p>
      </div>
    </div>
  );
}
