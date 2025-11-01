import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function LowestCommonMultiple() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Lowest Common Multiple (LCM)</h1>
        <p className="mt-2 text-orange-100">
          Finding the smallest number that is a multiple of two or more numbers
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Understanding Common Multiples
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong className="text-orange-600 dark:text-orange-400">Lowest Common Multiple (LCM)</strong> of two or more numbers is the smallest positive number that is a multiple of all the given numbers.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example: Finding LCM of 4 and 6
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>Multiples of 4: 4, 8, <span className="text-orange-600 dark:text-orange-400 font-bold">12</span>, 16, 20, <span className="text-orange-600 dark:text-orange-400 font-bold">24</span>...</p>
                <p>Multiples of 6: 6, <span className="text-orange-600 dark:text-orange-400 font-bold">12</span>, 18, <span className="text-orange-600 dark:text-orange-400 font-bold">24</span>...</p>
                <p className="mt-3">Common multiples: 12, 24, 36...</p>
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded border border-orange-300 dark:border-orange-600 mt-3">
                  <p className="font-semibold">LCM(4, 6) = 12</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                Method: LCM Using Prime Factorisation
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Express each number as a product of prime factors</li>
                <li>Take the <strong>highest power</strong> of each prime factor</li>
                <li>Multiply these together</li>
              </ol>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Worked Example: LCM of 24 and 90
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><MathText>$24 = 2^3 \times 3$</MathText></p>
                <p><MathText>$90 = 2 \times 3^2 \times 5$</MathText></p>
                <p className="mt-3"><MathText>Highest powers: $2^3$, $3^2$, $5$</MathText></p>
                <p><MathText>LCM = $2^3 \times 3^2 \times 5 = 8 \times 9 \times 5 = 360$</MathText></p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Find LCM
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Find the LCM of 54, 84, and 110.
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
                  <p><MathText>$54 = 2 \times 3^3$</MathText></p>
                  <p><MathText>$84 = 2^2 \times 3 \times 7$</MathText></p>
                  <p><MathText>$110 = 2 \times 5 \times 11$</MathText></p>
                  <p className="mt-3"><MathText>LCM = $2^2 \times 3^3 \times 5 \times 7 \times 11 = 4 \times 27 \times 5 \times 7 \times 11 = 41,580$</MathText></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Real-World Application */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Real-World Applications
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Tricycle Wheel Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A tricycle's front wheel has circumference 60 cm, rear wheels 45 cm. When will points P and Q touch ground together again?
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <MathText>LCM(60, 45) = $2^2 \times 3^2 \times 5 = 180$ cm</MathText>
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Scheduling Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Doris has lessons every 6, 4, and 8 days. If all on April 1, when next?
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>LCM(6, 4, 8) = $2^3 \times 3 = 24$ days → April 25</MathText>
                </p>
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
            <li>LCM is the smallest number divisible by all given numbers</li>
            <li>Use <strong>highest powers</strong> of all prime factors</li>
            <li>LCM helps solve scheduling and repeating cycle problems</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
