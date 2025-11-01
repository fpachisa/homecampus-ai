/**
 * Algebra Disc Simulator
 *
 * Interactive visualizer for integer operations using algebra discs (counters).
 * Blue discs = positive (+1), Red discs = negative (-1)
 * Zero pairs: One blue + one red = 0
 *
 * Teaches integer addition, subtraction, and multiplication through
 * concrete visual models.
 */

import React, { useState, useEffect } from 'react';

interface AlgebraDiscSimulatorProps {
  operation: 'add' | 'subtract' | 'multiply';
  firstNumber: number;
  secondNumber: number;
  showSteps?: boolean;
  highlightZeroPairs?: boolean;
  title?: string;
  caption?: string;
}

interface Disc {
  id: string;
  type: 'positive' | 'negative';
  x: number;
  y: number;
  isPaired?: boolean;
  isAnimating?: boolean;
  isRemoved?: boolean; // Disc is being subtracted (grayed out + crossed)
  isAddedZeroPair?: boolean; // Disc was added as zero pair for subtraction
}

const AlgebraDiscSimulator: React.FC<AlgebraDiscSimulatorProps> = ({
  operation,
  firstNumber,
  secondNumber,
  showSteps = false,
  highlightZeroPairs = true,
  title,
  caption
}) => {
  const [discs, setDiscs] = useState<Disc[]>([]);
  const [beforeRemovalDiscs, setBeforeRemovalDiscs] = useState<Disc[]>([]); // For subtraction: show before removal
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<string[]>([]);

  // Constants
  const discRadius = 18;
  const spacing = 45;
  const width = 600;
  const height = 300;
  const leftStartX = 80;
  const rightStartX = 320;
  const startY = 100;

  // Generate discs for a number
  const generateDiscs = (
    num: number,
    startX: number,
    startY: number,
    idPrefix: string
  ): Disc[] => {
    const absNum = Math.abs(num);
    const type = num >= 0 ? 'positive' : 'negative';
    const discsArray: Disc[] = [];

    for (let i = 0; i < absNum; i++) {
      const row = Math.floor(i / 5);
      const col = i % 5;
      discsArray.push({
        id: `${idPrefix}-${i}`,
        type,
        x: startX + col * spacing,
        y: startY + row * spacing,
        isPaired: false,
        isAnimating: false
      });
    }

    return discsArray;
  };

  // Calculate result and generate visualization
  useEffect(() => {
    const calculateAndVisualize = () => {
      const newSteps: string[] = [];
      let resultDiscs: Disc[] = [];

      if (operation === 'add') {
        newSteps.push(`Start with ${firstNumber}`);
        newSteps.push(`Add ${secondNumber}`);

        // Generate discs for both numbers
        const firstDiscs = generateDiscs(firstNumber, leftStartX, startY, 'first');
        const secondDiscs = generateDiscs(secondNumber, rightStartX, startY, 'second');

        resultDiscs = [...firstDiscs, ...secondDiscs];
        newSteps.push('Combine all discs');

        // Identify zero pairs
        if (highlightZeroPairs) {
          const positiveDiscs = resultDiscs.filter(d => d.type === 'positive' && !d.isPaired);
          const negativeDiscs = resultDiscs.filter(d => d.type === 'negative' && !d.isPaired);
          const pairCount = Math.min(positiveDiscs.length, negativeDiscs.length);

          for (let i = 0; i < pairCount; i++) {
            positiveDiscs[i].isPaired = true;
            negativeDiscs[i].isPaired = true;
          }

          if (pairCount > 0) {
            newSteps.push(`Remove ${pairCount} zero pair${pairCount > 1 ? 's' : ''}`);
          }
        }

        const result = firstNumber + secondNumber;
        newSteps.push(`Result: ${result}`);
      } else if (operation === 'subtract') {
        newSteps.push(`Start with ${firstNumber}`);

        // Physical removal model: To subtract, we physically remove discs
        // Step 1: Create initial discs
        const firstDiscs = generateDiscs(firstNumber, leftStartX, startY, 'first');
        resultDiscs = [...firstDiscs];

        // Step 2: Determine what we need to remove
        let removalType: 'positive' | 'negative';
        let removalCount: number;

        if (secondNumber >= 0) {
          // Subtracting a positive: remove positive discs
          removalType = 'positive';
          removalCount = secondNumber;
          newSteps.push(`Subtract ${secondNumber} (remove ${secondNumber} positive disc${secondNumber !== 1 ? 's' : ''})`);
        } else {
          // Subtracting a negative: remove negative discs
          removalType = 'negative';
          removalCount = Math.abs(secondNumber);
          newSteps.push(`Subtract ${secondNumber} (remove ${removalCount} negative disc${removalCount !== 1 ? 's' : ''})`);
        }

        // Step 3: Count how many discs of removalType we have
        const availableForRemoval = resultDiscs.filter(d => d.type === removalType).length;

        // Step 4: Add zero pairs if needed
        if (availableForRemoval < removalCount) {
          const deficit = removalCount - availableForRemoval;
          newSteps.push(`Add ${deficit} zero pair${deficit !== 1 ? 's' : ''} to enable removal`);

          // Add zero pairs (positioned on the right side, in proper pairs)
          for (let i = 0; i < deficit; i++) {
            const row = Math.floor(i / 3);
            const col = (i % 3) * 2; // Each pair takes 2 columns

            // Add positive disc (left of pair)
            resultDiscs.push({
              id: `zeropair-pos-${i}`,
              type: 'positive',
              x: rightStartX + col * spacing,
              y: startY + row * spacing,
              isAddedZeroPair: true
            });

            // Add negative disc (right of pair)
            resultDiscs.push({
              id: `zeropair-neg-${i}`,
              type: 'negative',
              x: rightStartX + (col + 1) * spacing,
              y: startY + row * spacing,
              isAddedZeroPair: true
            });
          }
        }

        // Step 5: Save state before removal (for two-stage visualization)
        const beforeRemoval = resultDiscs.map(d => ({ ...d }));

        // Step 6: Mark discs for removal
        let removed = 0;
        for (const disc of resultDiscs) {
          if (disc.type === removalType && !disc.isRemoved && removed < removalCount) {
            disc.isRemoved = true;
            removed++;
          }
        }

        newSteps.push(`Remove ${removalCount} ${removalType} disc${removalCount !== 1 ? 's' : ''}`);

        const result = firstNumber - secondNumber;
        newSteps.push(`Result: ${result}`);

        // Store both states for two-stage display
        setBeforeRemovalDiscs(beforeRemoval);
      } else if (operation === 'multiply') {
        newSteps.push(`Multiply ${firstNumber} × ${secondNumber}`);

        const absFirst = Math.abs(firstNumber);
        const absSecond = Math.abs(secondNumber);

        if (absFirst <= 10 && absSecond <= 10) {
          // Visual multiplication: groups of discs
          newSteps.push(`Create ${absFirst} group${absFirst > 1 ? 's' : ''} of ${absSecond}`);

          let discId = 0;
          for (let group = 0; group < absFirst; group++) {
            const groupStartY = startY + Math.floor(group / 2) * (spacing * 3);
            const groupStartX = leftStartX + (group % 2) * (spacing * 6);

            for (let disc = 0; disc < absSecond; disc++) {
              const row = Math.floor(disc / 5);
              const col = disc % 5;

              // Determine disc type based on signs
              let type: 'positive' | 'negative';
              if (secondNumber >= 0) {
                type = 'positive';
              } else {
                type = 'negative';
              }

              resultDiscs.push({
                id: `mult-${discId++}`,
                type,
                x: groupStartX + col * spacing,
                y: groupStartY + row * spacing,
                isPaired: false
              });
            }
          }

          // Handle negative multiplier (flip sign)
          if (firstNumber < 0) {
            newSteps.push('Negative multiplier: flip all disc signs');
            resultDiscs = resultDiscs.map(d => ({
              ...d,
              type: d.type === 'positive' ? 'negative' : 'positive'
            }));
          }
        } else {
          // Too many discs, show result only
          newSteps.push('Too many discs to display visually');
          const result = firstNumber * secondNumber;
          resultDiscs = generateDiscs(result, leftStartX, startY, 'result');
        }

        const result = firstNumber * secondNumber;
        newSteps.push(`Result: ${result}`);
      }

      setSteps(newSteps);
      setDiscs(resultDiscs);
      setCurrentStep(0);

      // Clear beforeRemovalDiscs for non-subtraction operations
      if (operation !== 'subtract') {
        setBeforeRemovalDiscs([]);
      }
    };

    calculateAndVisualize();
  }, [operation, firstNumber, secondNumber, highlightZeroPairs]);

  // Render a single disc
  const renderDisc = (disc: Disc) => {
    const isPositive = disc.type === 'positive';
    const baseColor = isPositive ? '#3b82f6' : '#ef4444'; // blue or red

    // Determine opacity based on state
    const opacity = disc.isRemoved ? 0.3 : (disc.isPaired ? 0.3 : 1);

    return (
      <g key={disc.id}>
        {/* Disc circle */}
        <circle
          cx={disc.x}
          cy={disc.y}
          r={discRadius}
          fill={baseColor}
          stroke="white"
          strokeWidth="3"
          opacity={opacity}
          className={isPositive ? "dark:fill-blue-400" : "dark:fill-red-400"}
        />

        {/* Sign symbol */}
        <text
          x={disc.x}
          y={disc.y + 6}
          fontSize="20"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
          opacity={opacity}
        >
          {isPositive ? '+' : '−'}
        </text>

        {/* Added zero pair indicator (green/teal dashed border) - only show on discs that remain */}
        {disc.isAddedZeroPair && !disc.isRemoved && (
          <circle
            cx={disc.x}
            cy={disc.y}
            r={discRadius + 5}
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="dark:stroke-emerald-400"
          />
        )}

        {/* Natural zero pair indicator (yellow dashed border) */}
        {disc.isPaired && highlightZeroPairs && !disc.isAddedZeroPair && (
          <circle
            cx={disc.x}
            cy={disc.y}
            r={discRadius + 5}
            fill="none"
            stroke="#fbbf24"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="dark:stroke-yellow-400"
          />
        )}

        {/* Removed disc indicator (crossed out with X) */}
        {disc.isRemoved && (
          <>
            {/* X symbol */}
            <line
              x1={disc.x - discRadius * 0.5}
              y1={disc.y - discRadius * 0.5}
              x2={disc.x + discRadius * 0.5}
              y2={disc.y + discRadius * 0.5}
              stroke="#dc2626"
              strokeWidth="3"
              className="dark:stroke-red-500"
            />
            <line
              x1={disc.x + discRadius * 0.5}
              y1={disc.y - discRadius * 0.5}
              x2={disc.x - discRadius * 0.5}
              y2={disc.y + discRadius * 0.5}
              stroke="#dc2626"
              strokeWidth="3"
              className="dark:stroke-red-500"
            />
          </>
        )}
      </g>
    );
  };

  // Calculate final result
  const getFinalResult = (): number => {
    if (operation === 'add') return firstNumber + secondNumber;
    if (operation === 'subtract') return firstNumber - secondNumber;
    if (operation === 'multiply') return firstNumber * secondNumber;
    return 0;
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* Title */}
      {title && (
        <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {title}
        </div>
      )}

      {/* Operation display */}
      <div className="text-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {firstNumber} {operation === 'add' ? '+' : operation === 'subtract' ? '−' : '×'} {secondNumber} = {getFinalResult()}
        </div>
        <div className="flex items-center justify-center gap-6 text-sm flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center text-white font-bold text-xs">+</div>
            <span className="text-gray-600 dark:text-gray-400">Positive</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-400 flex items-center justify-center text-white font-bold text-xs">−</div>
            <span className="text-gray-600 dark:text-gray-400">Negative</span>
          </div>
          {operation === 'subtract' && (
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border-2 border-dashed border-emerald-500 dark:border-emerald-400"></div>
              <span className="text-gray-600 dark:text-gray-400">Added Zero Pair</span>
            </div>
          )}
          {highlightZeroPairs && operation === 'add' && (
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border-2 border-dashed border-yellow-500 dark:border-yellow-400"></div>
              <span className="text-gray-600 dark:text-gray-400">Zero Pair</span>
            </div>
          )}
        </div>
      </div>

      {/* SVG Canvas - Two-stage for subtraction */}
      {operation === 'subtract' && beforeRemovalDiscs.length > 0 ? (
        <div className="flex flex-col gap-4">
          {/* Stage 1: Before Removal */}
          <div>
            <div className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 text-center">
              Stage 1: Add zero pairs
            </div>
            <svg
              width={width}
              height={200}
              className="border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800"
            >
              {beforeRemovalDiscs.map(renderDisc)}
            </svg>
          </div>

          {/* Stage 2: After Removal */}
          <div>
            <div className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 text-center">
              Stage 2: Remove discs
            </div>
            <svg
              width={width}
              height={200}
              className="border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800"
            >
              {discs.map(renderDisc)}
            </svg>
          </div>
        </div>
      ) : (
        /* Single stage for addition/multiplication */
        <svg
          width={width}
          height={height}
          className="border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800"
        >
          {/* Render all discs */}
          {discs.map(renderDisc)}

          {/* Zero pair count */}
          {highlightZeroPairs && (
            <g>
              {(() => {
                const pairedCount = discs.filter(d => d.isPaired).length / 2;
                if (pairedCount > 0) {
                  return (
                    <text
                      x={width - 100}
                      y={30}
                      fontSize="14"
                      fontWeight="600"
                      fill="#f59e0b"
                      className="dark:fill-yellow-400"
                    >
                      {pairedCount} zero pair{pairedCount > 1 ? 's' : ''} removed
                    </text>
                  );
                }
                return null;
              })()}
            </g>
          )}
        </svg>
      )}

      {/* Steps display */}
      {showSteps && steps.length > 0 && (
        <div className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-4">
          <div className="font-semibold text-gray-700 dark:text-gray-200 mb-2">Steps:</div>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
            {steps.map((step, idx) => (
              <li key={idx} className={idx === currentStep ? 'font-semibold text-blue-600 dark:text-blue-400' : ''}>
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Caption */}
      {caption && (
        <div className="text-sm text-center text-gray-600 dark:text-gray-400 max-w-md">
          {caption}
        </div>
      )}
    </div>
  );
};

export default AlgebraDiscSimulator;
