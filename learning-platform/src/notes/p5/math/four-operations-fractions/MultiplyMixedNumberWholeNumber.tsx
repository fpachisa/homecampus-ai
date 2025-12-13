/**
 * Multiplying a Mixed Number and a Whole Number Notes
 *
 * Covers:
 * 1. Converting mixed numbers to improper fractions
 * 2. Multiplying and converting back
 * 3. Visual understanding
 * 4. Word problems
 */

import { useState } from 'react';
import MathText from '../../../../components/MathText';

// ============================================
// SVG COMPONENTS
// ============================================

const MixedNumberTimesWhole = ({
  wholes,
  numerator,
  denominator,
  multiplier
}: {
  wholes: number;
  numerator: number;
  denominator: number;
  multiplier: number;
}) => {
  const circleSize = 50;
  const gap = 8;
  const groupGap = 20;

  // numerator represents the fraction parts (used directly in rendering below)
  void numerator; // Acknowledge param is used in Array.from logic

  return (
    <svg
      viewBox={`0 0 ${(circleSize + gap) * (wholes + 1) * multiplier + groupGap * (multiplier - 1)} ${circleSize + 40}`}
      className="w-full max-w-2xl"
      style={{ maxHeight: '120px' }}
    >
      {Array.from({ length: multiplier }).map((_, groupIdx) => {
        const groupX = groupIdx * ((circleSize + gap) * (wholes + 1) + groupGap);

        return (
          <g key={groupIdx}>
            {/* Whole circles */}
            {Array.from({ length: wholes }).map((_, circleIdx) => (
              <g key={`whole-${circleIdx}`}>
                <circle
                  cx={groupX + circleIdx * (circleSize + gap) + circleSize / 2}
                  cy={circleSize / 2 + 5}
                  r={circleSize / 2 - 2}
                  fill="#3B82F6"
                  stroke="#1E40AF"
                  strokeWidth="1"
                />
              </g>
            ))}

            {/* Partial circle */}
            {numerator > 0 && (
              <g>
                <circle
                  cx={groupX + wholes * (circleSize + gap) + circleSize / 2}
                  cy={circleSize / 2 + 5}
                  r={circleSize / 2 - 2}
                  fill="none"
                  stroke="#374151"
                  strokeWidth="1"
                  className="dark:stroke-gray-400"
                />
                {/* Filled segment */}
                {Array.from({ length: denominator }).map((_, i) => {
                  const startAngle = (i * 360) / denominator - 90;
                  const endAngle = ((i + 1) * 360) / denominator - 90;
                  const filled = i < numerator;

                  const startRad = (startAngle * Math.PI) / 180;
                  const endRad = (endAngle * Math.PI) / 180;
                  const r = circleSize / 2 - 2;
                  const cx = groupX + wholes * (circleSize + gap) + circleSize / 2;
                  const cy = circleSize / 2 + 5;

                  const x1 = cx + r * Math.cos(startRad);
                  const y1 = cy + r * Math.sin(startRad);
                  const x2 = cx + r * Math.cos(endRad);
                  const y2 = cy + r * Math.sin(endRad);

                  return (
                    <path
                      key={i}
                      d={`M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`}
                      fill={filled ? '#3B82F6' : 'transparent'}
                      stroke="#374151"
                      strokeWidth="0.5"
                      className="dark:stroke-gray-400"
                    />
                  );
                })}
              </g>
            )}

            {/* Group label */}
            <text
              x={groupX + ((wholes + 1) * (circleSize + gap) - gap) / 2}
              y={circleSize + 25}
              textAnchor="middle"
              className="fill-gray-600 dark:fill-gray-400 text-xs"
            >
              Group {groupIdx + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

export default function MultiplyMixedNumberWholeNumber() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 text-white p-6 rounded-t-lg mb-6">
        <h1 className="text-3xl font-bold">Multiplying a Mixed Number and a Whole Number</h1>
        <p className="mt-2 text-orange-100">Learn to multiply mixed numbers by whole numbers using the convert-multiply-convert method</p>
      </div>

      {/* Section 1: The Method */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          1. The Method: Convert → Multiply → Convert
        </h2>

        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
          <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Three Steps</h3>
          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li><strong>Convert</strong> the mixed number to an improper fraction</li>
            <li><strong>Multiply</strong> the improper fraction by the whole number</li>
            <li><strong>Convert</strong> the result back to a mixed number</li>
          </ol>
        </div>

        {/* Example */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example: <MathText>{'$1\\frac{1}{2} \\times 3$'}</MathText>
          </h4>

          {/* Visual */}
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Visual: 3 groups of <MathText>{'$1\\frac{1}{2}$'}</MathText>
            </p>
            <MixedNumberTimesWhole wholes={1} numerator={1} denominator={2} multiplier={3} />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              3 wholes + 3 halves = 3 + <MathText>{'$1\\frac{1}{2}$'}</MathText> = <MathText>{'$4\\frac{1}{2}$'}</MathText>
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 1:</strong> Convert <MathText>{'$1\\frac{1}{2}$'}</MathText> to improper fraction
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <MathText>{'$1\\frac{1}{2} = \\frac{1 \\times 2 + 1}{2} = \\frac{3}{2}$'}</MathText>
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 2:</strong> Multiply by 3
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <MathText>{'$\\frac{3}{2} \\times 3 = \\frac{3 \\times 3}{2} = \\frac{9}{2}$'}</MathText>
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 3:</strong> Convert back to mixed number
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <MathText>{'$\\frac{9}{2} = 4\\frac{1}{2}$'}</MathText> (9 ÷ 2 = 4 remainder 1)
              </p>
            </div>

            <p className="text-xl font-bold text-green-700 dark:text-green-300">
              Answer: <MathText>{'$4\\frac{1}{2}$'}</MathText>
            </p>
          </div>
        </div>

        {/* Conversion reminder */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
          <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
            Reminder: Converting Mixed to Improper
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            <MathText>{'$a\\frac{b}{c} = \\frac{a \\times c + b}{c}$'}</MathText>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Multiply whole by denominator, add numerator, keep same denominator.
          </p>
        </div>
      </section>

      {/* Section 2: More Examples */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          2. More Examples
        </h2>

        {/* Example 2 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example: <MathText>{'$6 \\times 1\\frac{2}{9}$'}</MathText>
          </h4>

          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Step 1:</strong> <MathText>{'$1\\frac{2}{9} = \\frac{1 \\times 9 + 2}{9} = \\frac{11}{9}$'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Step 2:</strong> <MathText>{'$6 \\times \\frac{11}{9} = \\frac{66}{9}$'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Step 3:</strong> <MathText>{'$\\frac{66}{9} = 7\\frac{3}{9} = 7\\frac{1}{3}$'}</MathText> (simplified)
            </p>
            <p className="text-xl font-bold text-green-700 dark:text-green-300">
              Answer: <MathText>{'$7\\frac{1}{3}$'}</MathText>
            </p>
          </div>
        </div>

        {/* Example with cancellation */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example with Cancellation: <MathText>{'$4 \\times 2\\frac{1}{5}$'}</MathText>
          </h4>

          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Step 1:</strong> <MathText>{'$2\\frac{1}{5} = \\frac{11}{5}$'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Step 2:</strong> <MathText>{'$4 \\times \\frac{11}{5} = \\frac{44}{5}$'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Step 3:</strong> <MathText>{'$\\frac{44}{5} = 8\\frac{4}{5}$'}</MathText> (44 ÷ 5 = 8 R 4)
            </p>
            <p className="text-xl font-bold text-green-700 dark:text-green-300">
              Answer: <MathText>{'$8\\frac{4}{5}$'}</MathText>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Word Problems */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          3. Word Problems
        </h2>

        {/* Word Problem 1 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example: Rope Problem
          </h4>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded mb-4">
            <p className="text-gray-700 dark:text-gray-300">
              The length of a piece of rope is <MathText>{'$2\\frac{1}{5}$'}</MathText> m.
              What is the total length of 4 such identical pieces of rope?
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Solution:</strong> 4 × <MathText>{'$2\\frac{1}{5}$'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              = 4 × <MathText>{'$\\frac{11}{5}$'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              = <MathText>{'$\\frac{44}{5}$'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              = <MathText>{'$8\\frac{4}{5}$'}</MathText> m
            </p>
            <p className="text-xl font-bold text-green-700 dark:text-green-300">
              The total length of 4 pieces of rope is <MathText>{'$8\\frac{4}{5}$'}</MathText> m.
            </p>
          </div>
        </div>

        {/* Word Problem 2 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example: Pies Distribution
          </h4>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded mb-4">
            <p className="text-gray-700 dark:text-gray-300">
              Mrs Li has 3 children. She gives each child <MathText>{'$1\\frac{1}{2}$'}</MathText> pies.
              How many pies do they have altogether?
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Solution:</strong> 3 × <MathText>{'$1\\frac{1}{2}$'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              = 3 × <MathText>{'$\\frac{3}{2}$'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              = <MathText>{'$\\frac{9}{2}$'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              = <MathText>{'$4\\frac{1}{2}$'}</MathText> pies
            </p>
            <p className="text-xl font-bold text-green-700 dark:text-green-300">
              They have <MathText>{'$4\\frac{1}{2}$'}</MathText> pies altogether.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Problems */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          4. Practice Problems
        </h2>

        <div className="space-y-4">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Calculate <MathText>{'$5 \\times 2\\frac{3}{4}$'}</MathText>
            </h4>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$2\\frac{3}{4} = \\frac{11}{4}$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$5 \\times \\frac{11}{4} = \\frac{55}{4} = 13\\frac{3}{4}$'}</MathText>
                </p>
                <p className="font-bold text-green-600 dark:text-green-400">
                  Answer: <MathText>{'$13\\frac{3}{4}$'}</MathText>
                </p>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Calculate <MathText>{'$8 \\times 3\\frac{1}{6}$'}</MathText>
            </h4>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$3\\frac{1}{6} = \\frac{19}{6}$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$8 \\times \\frac{19}{6} = \\frac{152}{6} = \\frac{76}{3} = 25\\frac{1}{3}$'}</MathText>
                </p>
                <p className="font-bold text-green-600 dark:text-green-400">
                  Answer: <MathText>{'$25\\frac{1}{3}$'}</MathText>
                </p>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: A container holds <MathText>{'$1\\frac{3}{8}$'}</MathText> litres of juice. How much juice is in 6 such containers?
            </h4>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$1\\frac{3}{8} = \\frac{11}{8}$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$6 \\times \\frac{11}{8} = \\frac{66}{8} = \\frac{33}{4} = 8\\frac{1}{4}$'}</MathText> litres
                </p>
                <p className="font-bold text-green-600 dark:text-green-400">
                  There is <MathText>{'$8\\frac{1}{4}$'}</MathText> litres of juice in 6 containers.
                </p>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Each bag of rice weighs <MathText>{'$2\\frac{2}{3}$'}</MathText> kg. What is the total weight of 9 bags?
            </h4>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$2\\frac{2}{3} = \\frac{8}{3}$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$9 \\times \\frac{8}{3} = \\frac{72}{3} = 24$'}</MathText> kg
                </p>
                <p className="font-bold text-green-600 dark:text-green-400">
                  The total weight of 9 bags is 24 kg.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <div className="bg-orange-50 dark:bg-orange-900/30 border-l-4 border-orange-500 p-6 rounded mt-8">
        <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 mb-3">
          Key Takeaways
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Three-step method:</strong> Convert → Multiply → Convert</li>
          <li><strong>Mixed to improper:</strong> <MathText>{'$a\\frac{b}{c} = \\frac{ac + b}{c}$'}</MathText></li>
          <li><strong>Multiply fraction by whole:</strong> <MathText>{'$\\frac{a}{b} \\times n = \\frac{an}{b}$'}</MathText></li>
          <li><strong>Improper to mixed:</strong> Divide numerator by denominator</li>
          <li><strong>Use cancellation</strong> when possible to simplify calculations</li>
          <li><strong>Always simplify</strong> final answers</li>
          <li><strong>Include units</strong> in word problem answers</li>
        </ul>
      </div>
    </div>
  );
}
