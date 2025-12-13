/**
 * Multiplying Two Fractions Notes
 *
 * Covers:
 * 1. Understanding fraction × fraction conceptually
 * 2. The multiplication algorithm
 * 3. Cancellation (simplifying before multiplying)
 */

import { useState } from 'react';
import MathText from '../../../../components/MathText';

// ============================================
// SVG COMPONENTS FOR VISUALIZATIONS
// ============================================

const FractionOfFractionVisual = () => (
  <div className="flex flex-col items-center gap-4">
    {/* Step 1: Start with 1/2 */}
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 100 100" className="w-20 h-20">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#374151" strokeWidth="2" className="dark:stroke-gray-400" />
        <path d="M 50 5 A 45 45 0 0 1 50 95" fill="#3B82F6" stroke="#374151" strokeWidth="1" />
        <line x1="50" y1="5" x2="50" y2="95" stroke="#374151" strokeWidth="1" className="dark:stroke-gray-400" />
      </svg>
      <span className="text-gray-700 dark:text-gray-300">Start with <MathText>{'$\\frac{1}{2}$'}</MathText> of a pizza</span>
    </div>

    <span className="text-2xl text-gray-500 dark:text-gray-400">↓</span>

    {/* Step 2: Divide into thirds */}
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 100 100" className="w-20 h-20">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#374151" strokeWidth="2" className="dark:stroke-gray-400" />
        {/* The half (gray) */}
        <path d="M 50 5 A 45 45 0 0 1 50 95" fill="#E5E7EB" stroke="#374151" strokeWidth="1" className="dark:fill-gray-600" />
        {/* 1/3 of the half = 1/6 of whole (green) - 60° arc from top */}
        {/* At 30° from horizontal: x = 50 + 45*cos(30°) = 89, y = 50 - 45*sin(30°) = 27.5 */}
        <path d="M 50 50 L 50 5 A 45 45 0 0 1 89 27.5 Z" fill="#10B981" stroke="#374151" strokeWidth="1" />
        {/* Division lines for thirds (every 60°) */}
        <line x1="50" y1="50" x2="50" y2="5" stroke="#374151" strokeWidth="1" />
        <line x1="50" y1="50" x2="89" y2="27.5" stroke="#374151" strokeWidth="1" />
        <line x1="50" y1="50" x2="89" y2="72.5" stroke="#374151" strokeWidth="1" />
        <line x1="50" y1="50" x2="50" y2="95" stroke="#374151" strokeWidth="1" className="dark:stroke-gray-400" />
      </svg>
      <span className="text-gray-700 dark:text-gray-300">Take <MathText>{'$\\frac{1}{3}$'}</MathText> of that half = <MathText>{'$\\frac{1}{6}$'}</MathText></span>
    </div>
  </div>
);

// Area model visual component removed - FractionOfFractionVisual is used instead for clearer visualization

// ============================================
// MAIN COMPONENT
// ============================================

export default function MultiplyTwoFractions() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  // Reserved for future practice problems
  const [, ] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white p-6 rounded-t-lg mb-6">
        <h1 className="text-3xl font-bold">Multiplying Two Fractions</h1>
        <p className="mt-2 text-purple-100">Learn to multiply fractions and simplify using cancellation</p>
      </div>

      {/* Section 1: Understanding Conceptually */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          1. Understanding Fraction × Fraction
        </h2>

        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
          <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Key Insight</h3>
          <p className="text-gray-700 dark:text-gray-300">
            <MathText>{'$\\frac{1}{3}$'}</MathText> of <MathText>{'$\\frac{1}{2}$'}</MathText> means taking one-third OF one-half.
            The result is <strong>smaller than both fractions</strong>.
          </p>
        </div>

        {/* Visual Example */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example: <MathText>{'$\\frac{1}{3}$'}</MathText> of <MathText>{'$\\frac{1}{2}$'}</MathText> = <MathText>{'$\\frac{1}{3} \\times \\frac{1}{2}$'}</MathText>
          </h4>

          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
            <FractionOfFractionVisual />
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Visualize:</strong> Siti had <MathText>{'$\\frac{1}{2}$'}</MathText> of a pizza. She gave <MathText>{'$\\frac{1}{3}$'}</MathText> of it to her friend.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              The whole pizza is divided into 6 parts (2 × 3 = 6).
              Her friend got 1 part = <MathText>{'$\\frac{1}{6}$'}</MathText> of the pizza.
            </p>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
          <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
            Important: Order Doesn't Matter!
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            <MathText>{'$\\frac{1}{3}$'}</MathText> of <MathText>{'$\\frac{1}{2}$'}</MathText> is the same as <MathText>{'$\\frac{1}{2}$'}</MathText> of <MathText>{'$\\frac{1}{3}$'}</MathText>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Both equal <MathText>{'$\\frac{1}{6}$'}</MathText>
          </p>
        </div>
      </section>

      {/* Section 2: The Algorithm */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          2. Multiplying Fractions: The Algorithm
        </h2>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
          <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">The Rule</h3>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            <MathText>{'$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$'}</MathText>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Multiply the numerators together. Multiply the denominators together.
          </p>
        </div>

        {/* Example 1 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example: Find <MathText>{'$\\frac{1}{3} \\times \\frac{5}{4}$'}</MathText>
          </h4>

          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              <MathText>{'$\\frac{1}{3} \\times \\frac{5}{4} = \\frac{1 \\times 5}{3 \\times 4} = \\frac{5}{12}$'}</MathText>
            </p>
            <p className="text-xl font-bold text-green-700 dark:text-green-300">
              Answer: <MathText>{'$\\frac{5}{12}$'}</MathText>
            </p>
          </div>
        </div>

        {/* Example 2 with simplification */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example: Find the product of <MathText>{'$\\frac{3}{4}$'}</MathText> and <MathText>{'$\\frac{8}{7}$'}</MathText>
          </h4>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded mb-4">
            <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Method 1: Multiply, then simplify</h5>
            <p className="text-gray-700 dark:text-gray-300">
              <MathText>{'$\\frac{3}{4} \\times \\frac{8}{7} = \\frac{3 \\times 8}{4 \\times 7} = \\frac{24}{28}$'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Simplify: <MathText>{'$\\frac{24}{28} = \\frac{24 \\div 4}{28 \\div 4} = \\frac{6}{7}$'}</MathText>
            </p>
          </div>

          <p className="text-xl font-bold text-green-700 dark:text-green-300">
            Answer: <MathText>{'$\\frac{6}{7}$'}</MathText>
          </p>
        </div>
      </section>

      {/* Section 3: Cancellation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          3. Cancellation (Simplifying Before Multiplying)
        </h2>

        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
          <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Why Cancellation?</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Cancelling (simplifying before multiplying) makes the numbers <strong>smaller and easier</strong> to work with.
            It also means you don't need to simplify at the end!
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
          <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">How to Cancel</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Look for a common factor between <strong>any numerator</strong> and <strong>any denominator</strong>.
            Divide both by that common factor.
          </p>
        </div>

        {/* Cancellation Example */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example: <MathText>{'$\\frac{3}{4} \\times \\frac{8}{7}$'}</MathText> using cancellation
          </h4>

          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Look for common factors
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                8 (numerator of second fraction) and 4 (denominator of first fraction) share factor 4.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Cancel (divide both by 4)
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                8 ÷ 4 = 2 and 4 ÷ 4 = 1
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <MathText>{'$\\frac{3}{\\cancel{4}^1} \\times \\frac{\\cancel{8}^2}{7} = \\frac{3}{1} \\times \\frac{2}{7}$'}</MathText>
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 3:</strong> Multiply the simplified fractions
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>{'$\\frac{3 \\times 2}{1 \\times 7} = \\frac{6}{7}$'}</MathText>
              </p>
            </div>

            <p className="text-xl font-bold text-green-700 dark:text-green-300">
              Answer: <MathText>{'$\\frac{6}{7}$'}</MathText> (same answer, easier calculation!)
            </p>
          </div>
        </div>

        {/* Another cancellation example */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example: <MathText>{'$\\frac{5}{6} \\times \\frac{9}{10}$'}</MathText>
          </h4>

          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Find common factors:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 ml-4">
              <li>5 and 10 share factor 5 (5 ÷ 5 = 1, 10 ÷ 5 = 2)</li>
              <li>9 and 6 share factor 3 (9 ÷ 3 = 3, 6 ÷ 3 = 2)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              <MathText>{'$\\frac{\\cancel{5}^1}{\\cancel{6}^2} \\times \\frac{\\cancel{9}^3}{\\cancel{10}^2} = \\frac{1 \\times 3}{2 \\times 2} = \\frac{3}{4}$'}</MathText>
            </p>
            <p className="text-xl font-bold text-green-700 dark:text-green-300">
              Answer: <MathText>{'$\\frac{3}{4}$'}</MathText>
            </p>
          </div>
        </div>

        {/* Tip */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
            Tip: You can cancel diagonally!
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            A numerator of the first fraction can cancel with a denominator of the second fraction (or vice versa).
          </p>
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
              Practice 1: Find <MathText>{'$\\frac{2}{5} \\times \\frac{9}{5}$'}</MathText>
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
                  <MathText>{'$\\frac{2}{5} \\times \\frac{9}{5} = \\frac{2 \\times 9}{5 \\times 5} = \\frac{18}{25}$'}</MathText>
                </p>
                <p className="font-bold text-green-600 dark:text-green-400">
                  Answer: <MathText>{'$\\frac{18}{25}$'}</MathText>
                </p>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Find the product of <MathText>{'$\\frac{7}{6}$'}</MathText> and <MathText>{'$\\frac{2}{3}$'}</MathText>
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
                  Using cancellation: 6 and 2 share factor 2
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$\\frac{7}{\\cancel{6}^3} \\times \\frac{\\cancel{2}^1}{3} = \\frac{7 \\times 1}{3 \\times 3} = \\frac{7}{9}$'}</MathText>
                </p>
                <p className="font-bold text-green-600 dark:text-green-400">
                  Answer: <MathText>{'$\\frac{7}{9}$'}</MathText>
                </p>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: <MathText>{'$\\frac{4}{9} \\times \\frac{3}{8}$'}</MathText> (Use cancellation)
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
                  Cancellation opportunities:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-2">
                  <li>4 and 8 share factor 4: 4 ÷ 4 = 1, 8 ÷ 4 = 2</li>
                  <li>3 and 9 share factor 3: 3 ÷ 3 = 1, 9 ÷ 3 = 3</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$\\frac{\\cancel{4}^1}{\\cancel{9}^3} \\times \\frac{\\cancel{3}^1}{\\cancel{8}^2} = \\frac{1 \\times 1}{3 \\times 2} = \\frac{1}{6}$'}</MathText>
                </p>
                <p className="font-bold text-green-600 dark:text-green-400">
                  Answer: <MathText>{'$\\frac{1}{6}$'}</MathText>
                </p>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: <MathText>{'$\\frac{5}{12} \\times \\frac{8}{15}$'}</MathText>
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
                  Cancellation:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-2">
                  <li>5 and 15 share factor 5: 5 ÷ 5 = 1, 15 ÷ 5 = 3</li>
                  <li>8 and 12 share factor 4: 8 ÷ 4 = 2, 12 ÷ 4 = 3</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$\\frac{\\cancel{5}^1}{\\cancel{12}^3} \\times \\frac{\\cancel{8}^2}{\\cancel{15}^3} = \\frac{1 \\times 2}{3 \\times 3} = \\frac{2}{9}$'}</MathText>
                </p>
                <p className="font-bold text-green-600 dark:text-green-400">
                  Answer: <MathText>{'$\\frac{2}{9}$'}</MathText>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6 rounded mt-8">
        <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">
          Key Takeaways
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Fraction × Fraction:</strong> Multiply numerators, multiply denominators</li>
          <li><strong>Formula:</strong> <MathText>{'$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$'}</MathText></li>
          <li><strong>Result is smaller:</strong> When multiplying two proper fractions, the result is smaller than both</li>
          <li><strong>Cancellation:</strong> Look for common factors between ANY numerator and ANY denominator</li>
          <li><strong>Cancel first:</strong> Simplifying before multiplying makes calculations easier</li>
          <li><strong>Always simplify:</strong> Express final answer in lowest terms</li>
        </ul>
      </div>
    </div>
  );
}
