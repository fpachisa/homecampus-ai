import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function SquareAndCubeRoots() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Square Roots and Cube Roots</h1>
        <p className="mt-2 text-indigo-100">
          Using prime factorisation to find square and cube roots
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Square Roots Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Square Roots Using Prime Factorisation
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong className="text-indigo-600 dark:text-indigo-400">perfect square</strong> is a number whose square root is a whole number. Examples: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100...
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                <MathText>{'Worked Example: Find $\\sqrt{144}$'}</MathText>
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-3">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Step 1:</strong> Express 144 as product of prime factors
                </p>
                <p className="ml-4 text-gray-700 dark:text-gray-300">
                  <MathText>$144 = 2 \times 2 \times 2 \times 2 \times 3 \times 3 = 2^4 \times 3^2$</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Step 2:</strong> Group into pairs
                </p>
                <p className="ml-4 text-gray-700 dark:text-gray-300">
                  <MathText>$144 = (2^2 \times 3) \times (2^2 \times 3) = (2^2 \times 3)^2$</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Step 3:</strong> Take square root
                </p>
                <p className="ml-4 text-gray-700 dark:text-gray-300">
                  <MathText>{'$\\sqrt{144} = \\sqrt{(2^2 \\times 3)^2} = 2^2 \\times 3 = 12$'}</MathText>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-gray-100">Method:</strong> To find square root using prime factorisation, split prime factors into two equal groups.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Square Roots
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <MathText>{'Find $\\sqrt{324}$ using prime factorisation.'}</MathText>
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><MathText>{'$324 = 2^2 \\times 3^4 = (2 \\times 3^2) \\times (2 \\times 3^2)$'}</MathText></p>
                  <p><MathText>{'$\\sqrt{324} = 2 \\times 3^2 = 2 \\times 9 = 18$'}</MathText></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Cube Roots Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Cube Roots Using Prime Factorisation
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong className="text-purple-600 dark:text-purple-400">perfect cube</strong> is a number whose cube root is a whole number. Examples: 1, 8, 27, 64, 125, 216...
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                <MathText>{'Worked Example: Find $\\sqrt[3]{216}$'}</MathText>
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-3">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Step 1:</strong> Prime factorisation
                </p>
                <p className="ml-4 text-gray-700 dark:text-gray-300">
                  <MathText>$216 = 2 \times 2 \times 2 \times 3 \times 3 \times 3 = 2^3 \times 3^3$</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Step 2:</strong> Group into triplets
                </p>
                <p className="ml-4 text-gray-700 dark:text-gray-300">
                  <MathText>$216 = (2 \times 3)^3$</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Step 3:</strong> Take cube root
                </p>
                <p className="ml-4 text-gray-700 dark:text-gray-300">
                  <MathText>{'$\\sqrt[3]{216} = 2 \\times 3 = 6$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Cube Roots
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <MathText>{'Find $\\sqrt[3]{1728}$ using prime factorisation.'}</MathText>
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><MathText>{'$1728 = 2^6 \\times 3^3 = (2^2 \\times 3)^3$'}</MathText></p>
                  <p><MathText>{'$\\sqrt[3]{1728} = 2^2 \\times 3 = 12$'}</MathText></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100...</li>
            <li>Perfect cubes: 1, 8, 27, 64, 125, 216...</li>
            <li>Use prime factorisation: group into pairs for square roots, triplets for cube roots</li>
            <li>
              <MathText>{'Calculator: Use $\\sqrt{}$ key for square roots, SHIFT + $\\sqrt{}$ for cube roots'}</MathText>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
