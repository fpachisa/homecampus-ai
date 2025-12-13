/**
 * Addition and Subtraction of Mixed Numbers Notes
 *
 * Covers:
 * 1. Recall: Adding/Subtracting fractions with unlike denominators
 * 2. Adding mixed numbers
 * 3. Subtracting mixed numbers (with regrouping)
 */

import { useState } from 'react';
import MathText from '../../../../components/MathText';

// ============================================
// SVG COMPONENTS FOR VISUALIZATIONS
// ============================================

const FractionCircle = ({
  numerator,
  denominator,
  color = '#3B82F6',
  size = 80
}: {
  numerator: number;
  denominator: number;
  color?: string;
  size?: number;
}) => {
  const segments = [];
  const anglePerSegment = 360 / denominator;

  for (let i = 0; i < denominator; i++) {
    const startAngle = i * anglePerSegment - 90;
    const endAngle = startAngle + anglePerSegment;
    const filled = i < numerator;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = 50 + 45 * Math.cos(startRad);
    const y1 = 50 + 45 * Math.sin(startRad);
    const x2 = 50 + 45 * Math.cos(endRad);
    const y2 = 50 + 45 * Math.sin(endRad);

    const largeArc = anglePerSegment > 180 ? 1 : 0;

    segments.push(
      <path
        key={i}
        d={`M 50 50 L ${x1} ${y1} A 45 45 0 ${largeArc} 1 ${x2} ${y2} Z`}
        fill={filled ? color : 'transparent'}
        stroke="#374151"
        strokeWidth="1"
        className="dark:stroke-gray-400"
      />
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#374151" strokeWidth="2" className="dark:stroke-gray-400" />
      {segments}
    </svg>
  );
};

const MixedNumberVisual = ({
  wholes,
  numerator,
  denominator,
  color = '#3B82F6'
}: {
  wholes: number;
  numerator: number;
  denominator: number;
  color?: string;
}) => (
  <div className="flex items-center gap-2 flex-wrap">
    {Array.from({ length: wholes }).map((_, i) => (
      <FractionCircle key={`whole-${i}`} numerator={denominator} denominator={denominator} color={color} size={60} />
    ))}
    {numerator > 0 && (
      <FractionCircle numerator={numerator} denominator={denominator} color={color} size={60} />
    )}
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export default function AddSubtractMixedNumbers() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);
  // Reserved for future practice problems
  const [, ] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-6 rounded-t-lg mb-6">
        <h1 className="text-3xl font-bold">Addition and Subtraction of Mixed Numbers</h1>
        <p className="mt-2 text-blue-100">Master adding and subtracting fractions and mixed numbers with unlike denominators</p>
      </div>

      {/* Section 1: Recall - Unlike Denominators */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          1. Recall: Adding and Subtracting Fractions
        </h2>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
          <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Key Rule</h3>
          <p className="text-gray-700 dark:text-gray-300">
            To add or subtract fractions with <strong>unlike denominators</strong>, you must first make the denominators the same by finding the <strong>Least Common Denominator (LCD)</strong>.
          </p>
        </div>

        {/* Example 1: Adding fractions */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example 1: Add <MathText>{'$\\frac{2}{3}$'}</MathText> and <MathText>{'$\\frac{1}{5}$'}</MathText>
          </h4>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded mb-4">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Step 1:</strong> Find the LCD of 3 and 5.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Multiples of 3: 3, 6, 9, 12, <span className="font-bold text-green-600 dark:text-green-400">15</span>, 18...
              <br />
              Multiples of 5: 5, 10, <span className="font-bold text-green-600 dark:text-green-400">15</span>, 20...
              <br />
              LCD = 15
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded mb-4">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Step 2:</strong> Convert both fractions to equivalent fractions with denominator 15.
            </p>
            <div className="flex flex-wrap gap-8 mt-3">
              <div className="text-center">
                <MathText>{'$\\frac{2}{3} = \\frac{2 \\times 5}{3 \\times 5} = \\frac{10}{15}$'}</MathText>
              </div>
              <div className="text-center">
                <MathText>{'$\\frac{1}{5} = \\frac{1 \\times 3}{5 \\times 3} = \\frac{3}{15}$'}</MathText>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Step 3:</strong> Add the numerators.
            </p>
            <p className="text-xl font-bold text-blue-700 dark:text-blue-300">
              <MathText>{'$\\frac{10}{15} + \\frac{3}{15} = \\frac{13}{15}$'}</MathText>
            </p>
          </div>
        </div>

        {/* Example 2: Subtracting fractions */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example 2: Subtract <MathText>{'$\\frac{3}{4}$'}</MathText> from <MathText>{'$\\frac{5}{6}$'}</MathText>
          </h4>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            <MathText>{'$\\frac{5}{6} - \\frac{3}{4}$'}</MathText>
          </p>

          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              LCD of 4 and 6 = 12
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <MathText>{'$\\frac{5}{6} = \\frac{10}{12}$'}</MathText> and <MathText>{'$\\frac{3}{4} = \\frac{9}{12}$'}</MathText>
            </p>
            <p className="text-xl font-bold text-blue-700 dark:text-blue-300">
              <MathText>{'$\\frac{10}{12} - \\frac{9}{12} = \\frac{1}{12}$'}</MathText>
            </p>
          </div>
        </div>

        {/* Practice 1 */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
            Practice: Find <MathText>{'$\\frac{1}{8}$'}</MathText> + <MathText>{'$\\frac{9}{10}$'}</MathText>
          </h4>
          <button
            onClick={() => setShowSolution1(!showSolution1)}
            className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
          >
            {showSolution1 ? 'Hide' : 'Show'} Solution
          </button>
          {showSolution1 && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">LCD of 8 and 10 = 40</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <MathText>{'$\\frac{1}{8} = \\frac{5}{40}$'}</MathText> and <MathText>{'$\\frac{9}{10} = \\frac{36}{40}$'}</MathText>
              </p>
              <p className="font-bold text-green-600 dark:text-green-400">
                <MathText>{'$\\frac{5}{40} + \\frac{36}{40} = \\frac{41}{40} = 1\\frac{1}{40}$'}</MathText>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Section 2: Adding Mixed Numbers */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          2. Adding Mixed Numbers
        </h2>

        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
          <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Strategy</h3>
          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Add the <strong>whole numbers</strong> first</li>
            <li>Add the <strong>fractional parts</strong> (find LCD if needed)</li>
            <li>If the fraction sum is improper, convert and add to the whole</li>
          </ol>
        </div>

        {/* Example: Adding mixed numbers */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example: Add <MathText>{'$1\\frac{1}{2}$'}</MathText> and <MathText>{'$1\\frac{1}{3}$'}</MathText>
          </h4>

          {/* Visual representation */}
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Visual: Adding the mixed numbers</p>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="text-center">
                <MixedNumberVisual wholes={1} numerator={1} denominator={2} color="#3B82F6" />
                <p className="mt-2 text-gray-700 dark:text-gray-300"><MathText>{'$1\\frac{1}{2}$'}</MathText></p>
              </div>
              <span className="text-2xl font-bold text-gray-700 dark:text-gray-300">+</span>
              <div className="text-center">
                <MixedNumberVisual wholes={1} numerator={1} denominator={3} color="#10B981" />
                <p className="mt-2 text-gray-700 dark:text-gray-300"><MathText>{'$1\\frac{1}{3}$'}</MathText></p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 1:</strong> Add whole numbers: 1 + 1 = 2
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Add fractional parts (LCD of 2 and 3 = 6)
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>{'$\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$'}</MathText>
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 3:</strong> Combine: <span className="text-xl font-bold text-purple-700 dark:text-purple-300"><MathText>{'$2\\frac{5}{6}$'}</MathText></span>
              </p>
            </div>
          </div>
        </div>

        {/* Example with improper result */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example: When fraction sum exceeds 1
          </h4>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Add <MathText>{'$2\\frac{3}{4}$'}</MathText> and <MathText>{'$1\\frac{1}{2}$'}</MathText>
          </p>

          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              Whole numbers: 2 + 1 = 3
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Fractions: <MathText>{'$\\frac{3}{4} + \\frac{2}{4} = \\frac{5}{4} = 1\\frac{1}{4}$'}</MathText>
            </p>
            <p className="text-xl font-bold text-blue-700 dark:text-blue-300">
              Final: 3 + <MathText>{'$1\\frac{1}{4} = 4\\frac{1}{4}$'}</MathText>
            </p>
          </div>
        </div>

        {/* Practice 2 */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
            Practice: Add <MathText>{'$3\\frac{2}{5}$'}</MathText> + <MathText>{'$2\\frac{3}{4}$'}</MathText>
          </h4>
          <button
            onClick={() => setShowSolution2(!showSolution2)}
            className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
          >
            {showSolution2 ? 'Hide' : 'Show'} Solution
          </button>
          {showSolution2 && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
              <p className="text-gray-700 dark:text-gray-300 mb-2">Whole numbers: 3 + 2 = 5</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Fractions (LCD = 20): <MathText>{'$\\frac{8}{20} + \\frac{15}{20} = \\frac{23}{20} = 1\\frac{3}{20}$'}</MathText>
              </p>
              <p className="font-bold text-green-600 dark:text-green-400">
                Answer: 5 + <MathText>{'$1\\frac{3}{20} = 6\\frac{3}{20}$'}</MathText>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Section 3: Subtracting Mixed Numbers */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          3. Subtracting Mixed Numbers (with Regrouping)
        </h2>

        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
          <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">When to Regroup (Rename)</h3>
          <p className="text-gray-700 dark:text-gray-300">
            When the <strong>fractional part being subtracted is larger</strong> than the fractional part you have,
            you need to <strong>borrow 1 whole</strong> and convert it to a fraction.
          </p>
        </div>

        {/* Simple subtraction example */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example 1 (No Regrouping): <MathText>{'$5 - 1\\frac{3}{7}$'}</MathText>
          </h4>

          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              Think of 5 as <MathText>{'$4\\frac{7}{7}$'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <MathText>{'$4\\frac{7}{7} - 1\\frac{3}{7}$'}</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Whole numbers: 4 - 1 = 3
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Fractions: <MathText>{'$\\frac{7}{7} - \\frac{3}{7} = \\frac{4}{7}$'}</MathText>
            </p>
            <p className="text-xl font-bold text-blue-700 dark:text-blue-300">
              Answer: <MathText>{'$3\\frac{4}{7}$'}</MathText>
            </p>
          </div>
        </div>

        {/* Regrouping example */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
            Example 2 (With Regrouping): Subtract <MathText>{'$1\\frac{5}{8}$'}</MathText> from <MathText>{'$3\\frac{1}{4}$'}</MathText>
          </h4>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded mb-4">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Problem:</strong> <MathText>{'$3\\frac{1}{4} - 1\\frac{5}{8}$'}</MathText>
            </p>
            <p className="text-sm text-red-600 dark:text-red-400 mt-2">
              We need to subtract <MathText>{'$\\frac{5}{8}$'}</MathText> from <MathText>{'$\\frac{1}{4} = \\frac{2}{8}$'}</MathText>, but <MathText>{'$\\frac{2}{8} < \\frac{5}{8}$'}</MathText>!
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 1:</strong> Convert to same denominator (LCD = 8)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <MathText>{'$3\\frac{1}{4} = 3\\frac{2}{8}$'}</MathText>
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 2:</strong> Regroup (rename) by borrowing 1 whole
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>{'$3\\frac{2}{8} = 2 + 1 + \\frac{2}{8} = 2 + \\frac{8}{8} + \\frac{2}{8} = 2\\frac{10}{8}$'}</MathText>
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 3:</strong> Now subtract
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <MathText>{'$2\\frac{10}{8} - 1\\frac{5}{8}$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Wholes: 2 - 1 = 1
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Fractions: <MathText>{'$\\frac{10}{8} - \\frac{5}{8} = \\frac{5}{8}$'}</MathText>
              </p>
            </div>

            <p className="text-xl font-bold text-blue-700 dark:text-blue-300">
              Answer: <MathText>{'$1\\frac{5}{8}$'}</MathText>
            </p>
          </div>
        </div>

        {/* Practice problems */}
        <div className="space-y-4">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: <MathText>{'$3\\frac{4}{9} - 1\\frac{5}{6}$'}</MathText>
            </h4>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">LCD of 9 and 6 = 18</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$3\\frac{4}{9} = 3\\frac{8}{18}$'}</MathText> and <MathText>{'$1\\frac{5}{6} = 1\\frac{15}{18}$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Since <MathText>{'$\\frac{8}{18} < \\frac{15}{18}$'}</MathText>, regroup:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$3\\frac{8}{18} = 2\\frac{26}{18}$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$2\\frac{26}{18} - 1\\frac{15}{18} = 1\\frac{11}{18}$'}</MathText>
                </p>
                <p className="font-bold text-green-600 dark:text-green-400">
                  Answer: <MathText>{'$1\\frac{11}{18}$'}</MathText>
                </p>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: <MathText>{'$4\\frac{5}{12} - 1\\frac{1}{6}$'}</MathText>
            </h4>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">LCD of 12 and 6 = 12</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$1\\frac{1}{6} = 1\\frac{2}{12}$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Since <MathText>{'$\\frac{5}{12} > \\frac{2}{12}$'}</MathText>, no regrouping needed!
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Wholes: 4 - 1 = 3
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Fractions: <MathText>{'$\\frac{5}{12} - \\frac{2}{12} = \\frac{3}{12} = \\frac{1}{4}$'}</MathText>
                </p>
                <p className="font-bold text-green-600 dark:text-green-400">
                  Answer: <MathText>{'$3\\frac{1}{4}$'}</MathText>
                </p>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: <MathText>{'$7\\frac{1}{10} - 3\\frac{1}{2}$'}</MathText>
            </h4>
            <button
              onClick={() => setShowSolution5(!showSolution5)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution5 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution5 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">LCD of 10 and 2 = 10</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$3\\frac{1}{2} = 3\\frac{5}{10}$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Since <MathText>{'$\\frac{1}{10} < \\frac{5}{10}$'}</MathText>, regroup:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$7\\frac{1}{10} = 6\\frac{11}{10}$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MathText>{'$6\\frac{11}{10} - 3\\frac{5}{10} = 3\\frac{6}{10} = 3\\frac{3}{5}$'}</MathText>
                </p>
                <p className="font-bold text-green-600 dark:text-green-400">
                  Answer: <MathText>{'$3\\frac{3}{5}$'}</MathText>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Summary/Key Takeaways */}
      <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
        <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
          Key Takeaways
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Unlike denominators:</strong> Always find the LCD first before adding or subtracting</li>
          <li><strong>Adding mixed numbers:</strong> Add wholes first, then add fractions</li>
          <li><strong>Improper fraction sum:</strong> If fractions add to more than 1, convert and add to whole number</li>
          <li><strong>Subtracting with regrouping:</strong> If the fraction being subtracted is larger, borrow 1 whole</li>
          <li><strong>Regrouping formula:</strong> <MathText>{'$a\\frac{b}{c} = (a-1)\\frac{c+b}{c}$'}</MathText></li>
          <li><strong>Always simplify:</strong> Express final answers in simplest form</li>
        </ul>
      </div>
    </div>
  );
}
