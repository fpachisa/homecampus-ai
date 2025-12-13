/**
 * Multiplying a Fraction and a Whole Number Notes
 *
 * Covers:
 * 1. Understanding "fraction OF" a number
 * 2. Bar model method
 * 3. Multiplication method
 * 4. Word problems
 */

import { useState } from 'react';
import MathText from '../../../../components/MathText';

// ============================================
// SVG COMPONENTS FOR BAR MODELS
// ============================================

const FractionOfBarModel = ({
  total,
  denominator,
  numerator,
  label = '',
  showAnswer = true
}: {
  total: number;
  denominator: number;
  numerator: number;
  label?: string;
  showAnswer?: boolean;
}) => {
  const unitWidth = 60;
  const barHeight = 40;
  const totalWidth = denominator * unitWidth;
  const unitValue = total / denominator;
  const answer = unitValue * numerator;

  return (
    <svg viewBox={`0 0 ${totalWidth + 40} 120`} className="w-full max-w-lg" style={{ maxHeight: '150px' }}>
      {/* Total label */}
      <text x={(totalWidth + 40) / 2} y="15" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-sm font-medium">
        {total} {label}
      </text>

      {/* Bracket for total */}
      <path d={`M 20 20 L 20 25 L ${totalWidth + 20} 25 L ${totalWidth + 20} 20`} fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-500 dark:text-gray-400" />

      {/* Bar segments */}
      {Array.from({ length: denominator }).map((_, i) => (
        <g key={i}>
          <rect
            x={20 + i * unitWidth}
            y={30}
            width={unitWidth}
            height={barHeight}
            fill={i < numerator ? '#3B82F6' : '#E5E7EB'}
            stroke="#374151"
            strokeWidth="1"
            className={i < numerator ? '' : 'dark:fill-gray-600'}
          />
          <text
            x={20 + i * unitWidth + unitWidth / 2}
            y={30 + barHeight / 2 + 5}
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300 text-xs"
          >
            {unitValue}
          </text>
        </g>
      ))}

      {/* Bracket for selected portion */}
      <path
        d={`M 20 ${30 + barHeight + 5} L 20 ${30 + barHeight + 10} L ${20 + numerator * unitWidth} ${30 + barHeight + 10} L ${20 + numerator * unitWidth} ${30 + barHeight + 5}`}
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
      />

      {/* Answer label */}
      {showAnswer && (
        <text
          x={20 + (numerator * unitWidth) / 2}
          y={30 + barHeight + 30}
          textAnchor="middle"
          className="fill-blue-600 dark:fill-blue-400 text-sm font-bold"
        >
          {numerator}/{denominator} of {total} = {answer}
        </text>
      )}
    </svg>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

export default function MultiplyFractionWholeNumber() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  // Reserved for future practice problems
  const [, ] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 text-white p-6 rounded-t-lg mb-6">
        <h1 className="text-3xl font-bold">Multiplying a Fraction and a Whole Number</h1>
        <p className="mt-2 text-green-100">Learn to find a fraction OF a number using bar models and multiplication</p>
      </div>

      {/* Section 1: Understanding "Fraction OF" */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          1. Understanding "Fraction OF" a Number
        </h2>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
          <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">Key Concept</h3>
          <p className="text-gray-700 dark:text-gray-300">
            When we say <strong>"fraction OF a number"</strong>, the word <strong>OF</strong> means <strong>multiplication</strong>.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            For example: <MathText>{'$\\frac{3}{4}$'}</MathText> of 12 means <MathText>{'$\\frac{3}{4} \\times 12$'}</MathText>
          </p>
        </div>

        {/* Example with bar model */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example: What is <MathText>{'$\\frac{3}{4}$'}</MathText> of 12?
          </h4>

          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Bar Model Method:</p>
            <FractionOfBarModel total={12} denominator={4} numerator={3} />
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 1:</strong> Divide 12 into 4 equal parts (since denominator = 4)
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                12 ÷ 4 = 3 (each part equals 3)
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 2:</strong> Take 3 parts (since numerator = 3)
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                3 × 3 = 9
              </p>
            </div>

            <p className="text-xl font-bold text-green-700 dark:text-green-300">
              <MathText>{'$\\frac{3}{4}$'}</MathText> of 12 = 9
            </p>
          </div>
        </div>

        {/* Calculation method */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Calculation Method
          </h4>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded mb-4">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Formula:</strong> <MathText>{'$\\frac{a}{b}$'}</MathText> of n = <MathText>{'$\\frac{a \\times n}{b}$'}</MathText>
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              <MathText>{'$\\frac{3}{4}$'}</MathText> of 12 = <MathText>{'$\\frac{3 \\times 12}{4} = \\frac{36}{4} = 9$'}</MathText>
            </p>
          </div>
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
            Example: What is <MathText>{'$\\frac{2}{5}$'}</MathText> of 15?
          </h4>

          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
            <FractionOfBarModel total={15} denominator={5} numerator={2} />
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px]">
              <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Bar Model:</h5>
              <p className="text-gray-600 dark:text-gray-400">15 ÷ 5 = 3 per unit</p>
              <p className="text-gray-600 dark:text-gray-400">2 units = 2 × 3 = 6</p>
            </div>
            <div className="flex-1 min-w-[200px]">
              <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Calculation:</h5>
              <p className="text-gray-600 dark:text-gray-400">
                <MathText>{'$\\frac{2}{5} \\times 15 = \\frac{30}{5} = 6$'}</MathText>
              </p>
            </div>
          </div>
        </div>

        {/* Example 3: With mixed number result */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example: Find <MathText>{'$\\frac{2}{5} \\times 12$'}</MathText>
          </h4>

          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              <MathText>{'$\\frac{2}{5} \\times 12 = \\frac{2 \\times 12}{5} = \\frac{24}{5}$'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Convert improper fraction: <MathText>{'$\\frac{24}{5} = 4\\frac{4}{5}$'}</MathText>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              (24 ÷ 5 = 4 remainder 4)
            </p>
          </div>
        </div>

        {/* Example 4: Commutative property */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
          <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
            Remember: Order Doesn't Matter!
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            <MathText>{'$\\frac{2}{5} \\times 12 = 12 \\times \\frac{2}{5}$'}</MathText>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Both give the same answer: <MathText>{'$4\\frac{4}{5}$'}</MathText>
          </p>
        </div>
      </section>

      {/* Section 3: Word Problems */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          3. Word Problems
        </h2>

        {/* Word Problem Example 1 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example: Painted Pole
          </h4>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded mb-4">
            <p className="text-gray-700 dark:text-gray-300">
              A pole is 15 m long. <MathText>{'$\\frac{2}{5}$'}</MathText> of the pole is painted red.
              What is the length of the pole that is painted red?
            </p>
          </div>

          {/* SVG Bar Model */}
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
            <svg viewBox="0 0 400 100" className="w-full max-w-md">
              {/* Total bracket */}
              <text x="200" y="15" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-sm">15 m</text>
              <path d="M 20 25 L 20 20 L 380 20 L 380 25" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-500 dark:text-gray-400" />

              {/* Bar segments */}
              {[0, 1, 2, 3, 4].map((i) => (
                <rect
                  key={i}
                  x={20 + i * 72}
                  y={30}
                  width={72}
                  height={35}
                  fill={i < 2 ? '#EF4444' : '#E5E7EB'}
                  stroke="#374151"
                  strokeWidth="1"
                  className={i >= 2 ? 'dark:fill-gray-600' : ''}
                />
              ))}

              {/* Labels */}
              <text x="56" y="52" textAnchor="middle" className="fill-white text-xs font-bold">3 m</text>
              <text x="128" y="52" textAnchor="middle" className="fill-white text-xs font-bold">3 m</text>

              {/* Red portion bracket */}
              <path d="M 20 70 L 20 75 L 164 75 L 164 70" fill="none" stroke="#EF4444" strokeWidth="2" />
              <text x="92" y="90" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-sm font-bold">?</text>
            </svg>
          </div>

          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Solution:</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              5 units = 15 m
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              1 unit = 15 ÷ 5 = 3 m
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              2 units = 2 × 3 = 6 m
            </p>
            <p className="text-xl font-bold text-green-700 dark:text-green-300">
              The length of the pole painted red is 6 m.
            </p>
          </div>
        </div>

        {/* Word Problem Example 2 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example: Buttons
          </h4>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded mb-4">
            <p className="text-gray-700 dark:text-gray-300">
              Mrs Lee has 120 buttons. <MathText>{'$\\frac{4}{5}$'}</MathText> of the buttons are red.
              How many red buttons does she have?
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Solution:</strong> <MathText>{'$\\frac{4}{5}$'}</MathText> × 120
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              = <MathText>{'$\\frac{4 \\times 120}{5} = \\frac{480}{5} = 96$'}</MathText>
            </p>
            <p className="text-xl font-bold text-green-700 dark:text-green-300">
              She has 96 red buttons.
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
              Practice 1: Find <MathText>{'$\\frac{3}{7}$'}</MathText> of 28
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
                  Method 1: 28 ÷ 7 = 4 (one unit), 3 × 4 = 12
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Method 2: <MathText>{'$\\frac{3 \\times 28}{7} = \\frac{84}{7} = 12$'}</MathText>
                </p>
                <p className="font-bold text-green-600 dark:text-green-400">Answer: 12</p>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: <MathText>{'$20 \\times \\frac{7}{10}$'}</MathText>
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
                  <MathText>{'$20 \\times \\frac{7}{10} = \\frac{20 \\times 7}{10} = \\frac{140}{10} = 14$'}</MathText>
                </p>
                <p className="font-bold text-green-600 dark:text-green-400">Answer: 14</p>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: A block of butter has a mass of <MathText>{'$\\frac{3}{10}$'}</MathText> kg. Sarah needs 3 blocks. How much butter does she need? Give your answer in kilograms.
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
                  Total butter = 3 × <MathText>{'$\\frac{3}{10}$'}</MathText> kg
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  = <MathText>{'$\\frac{9}{10}$'}</MathText> kg
                </p>
                <p className="font-bold text-green-600 dark:text-green-400">
                  Sarah needs <MathText>{'$\\frac{9}{10}$'}</MathText> kg of butter.
                </p>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: There are 12 glasses, each containing <MathText>{'$\\frac{2}{5}$'}</MathText> litre of water. How much water is there in total?
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
                  Total water = 12 × <MathText>{'$\\frac{2}{5}$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  = <MathText>{'$\\frac{12 \\times 2}{5} = \\frac{24}{5} = 4\\frac{4}{5}$'}</MathText> litres
                </p>
                <p className="font-bold text-green-600 dark:text-green-400">
                  There is <MathText>{'$4\\frac{4}{5}$'}</MathText> litres of water in total.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-6 rounded mt-8">
        <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">
          Key Takeaways
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>"OF" means multiply:</strong> <MathText>{'$\\frac{3}{4}$'}</MathText> of 12 = <MathText>{'$\\frac{3}{4} \\times 12$'}</MathText></li>
          <li><strong>Bar model method:</strong> Divide total into denominator parts, take numerator parts</li>
          <li><strong>Calculation method:</strong> <MathText>{'$\\frac{a}{b} \\times n = \\frac{a \\times n}{b}$'}</MathText></li>
          <li><strong>Commutative:</strong> <MathText>{'$\\frac{a}{b} \\times n = n \\times \\frac{a}{b}$'}</MathText></li>
          <li><strong>Convert improper fractions</strong> to mixed numbers when needed</li>
          <li><strong>Include units</strong> in word problem answers (metres, kg, litres, etc.)</li>
        </ul>
      </div>
    </div>
  );
}
