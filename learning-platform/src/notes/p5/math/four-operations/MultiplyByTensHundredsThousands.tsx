import { useState } from 'react';

const MultiplyByTensHundredsThousands = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Multiplying by Tens, Hundreds and Thousands</h1>
        <p className="text-lg">Learn to multiply by 20, 60, 400, 600, and more!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Multiplying by Tens */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. Multiplying by Tens (20, 30, 60...)</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Strategy</h3>
            <p className="text-gray-800 dark:text-gray-200">
              To multiply by 20, 30, 40, etc., <strong>break it into two steps</strong>:
            </p>
            <ol className="list-decimal list-inside mt-2 text-gray-800 dark:text-gray-200">
              <li>Multiply by the digit (2, 3, 4, etc.)</li>
              <li>Then multiply by 10</li>
            </ol>
          </div>

          {/* Worked Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Multiply 43 by 20</h3>
            <div className="space-y-3">
              <p className="text-gray-800 dark:text-gray-200">20 is the same as <strong>2 × 10</strong></p>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100">
                  43 × 20 = 43 × 2 × 10
                </p>
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100 ml-8">
                  = 86 × 10
                </p>
                <p className="font-mono text-lg text-green-600 dark:text-green-400 ml-8">
                  = <strong>860</strong>
                </p>
              </div>
              {/* Arrow diagram */}
              <div className="flex items-center justify-center gap-4 text-gray-700 dark:text-gray-300">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded">43</span>
                <span>→ × 2 →</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded">86</span>
                <span>→ × 10 →</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 rounded font-bold">860</span>
              </div>
            </div>
          </div>

          {/* More Examples */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">More Examples:</h3>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                <p className="font-mono text-gray-900 dark:text-gray-100">134 × 60 = 134 × 6 × 10 = 804 × 10 = <strong>8,040</strong></p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                <p className="font-mono text-gray-900 dark:text-gray-100">56 × 50 = 56 × 5 × 10 = 280 × 10 = <strong>2,800</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Multiplying by Hundreds */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Multiplying by Hundreds (200, 400, 600...)</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Strategy</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Same idea! To multiply by 400, 600, etc., <strong>break it into two steps</strong>:
            </p>
            <ol className="list-decimal list-inside mt-2 text-gray-800 dark:text-gray-200">
              <li>Multiply by the digit (4, 6, etc.)</li>
              <li>Then multiply by 100</li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Multiply 68 by 400</h3>
            <div className="space-y-3">
              <p className="text-gray-800 dark:text-gray-200">400 is the same as <strong>4 × 100</strong></p>
              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100">
                  68 × 400 = 68 × 4 × 100
                </p>
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100 ml-8">
                  = 272 × 100
                </p>
                <p className="font-mono text-lg text-purple-600 dark:text-purple-400 ml-8">
                  = <strong>27,200</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Multiply 314 by 600</h3>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded">
              <p className="font-mono text-lg text-gray-900 dark:text-gray-100">
                314 × 600 = 314 × 6 × 100
              </p>
              <p className="font-mono text-lg text-gray-900 dark:text-gray-100 ml-8">
                = 1,884 × 100
              </p>
              <p className="font-mono text-lg text-purple-600 dark:text-purple-400 ml-8">
                = <strong>188,400</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Alternative Methods */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">3. Alternative Methods</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Can you think of another way?</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              To find 134 × 60, you could also:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-mono text-gray-900 dark:text-gray-100">134 × 60 = 134 × 6 × 10</p>
              <p className="font-mono text-gray-900 dark:text-gray-100">Or: 134 × 60 = 134 × 10 × 6 = 1,340 × 6 = 8,040</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Both ways give the same answer!</p>
            </div>
          </div>
        </section>

        {/* Practice */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Practice Problems</h2>

          <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">1. Multiply:</p>
            <div className="ml-4 space-y-1 text-gray-800 dark:text-gray-200">
              <p>a) 14 × 10 = ?</p>
              <p>b) 728 × 10 = ?</p>
              <p>c) 10 × 8990 = ?</p>
              <p>d) 27 × 100 = ?</p>
              <p>e) 100 × 4992 = ?</p>
              <p>f) 165 × 1000 = ?</p>
            </div>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solutions
            </button>
            {showSolution1 && (
              <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-gray-800 dark:text-gray-200">
                <p><strong>a)</strong> 14 × 10 = 140</p>
                <p><strong>b)</strong> 728 × 10 = 7,280</p>
                <p><strong>c)</strong> 10 × 8990 = 89,900</p>
                <p><strong>d)</strong> 27 × 100 = 2,700</p>
                <p><strong>e)</strong> 100 × 4992 = 499,200</p>
                <p><strong>f)</strong> 165 × 1000 = 165,000</p>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
            <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">2. Find the product:</p>
            <div className="ml-4 space-y-1 text-gray-800 dark:text-gray-200">
              <p>a) 35 × 20 = ?</p>
              <p>b) 48 × 50 = ?</p>
              <p>c) 72 × 300 = ?</p>
              <p>d) 125 × 400 = ?</p>
            </div>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solutions
            </button>
            {showSolution2 && (
              <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-gray-800 dark:text-gray-200">
                <p><strong>a)</strong> 35 × 20 = 35 × 2 × 10 = 70 × 10 = 700</p>
                <p><strong>b)</strong> 48 × 50 = 48 × 5 × 10 = 240 × 10 = 2,400</p>
                <p><strong>c)</strong> 72 × 300 = 72 × 3 × 100 = 216 × 100 = 21,600</p>
                <p><strong>d)</strong> 125 × 400 = 125 × 4 × 100 = 500 × 100 = 50,000</p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>× 20</strong> = × 2 × 10 (multiply by 2, then add one zero)</li>
            <li><strong>× 60</strong> = × 6 × 10 (multiply by 6, then add one zero)</li>
            <li><strong>× 400</strong> = × 4 × 100 (multiply by 4, then add two zeros)</li>
            <li><strong>× 600</strong> = × 6 × 100 (multiply by 6, then add two zeros)</li>
            <li>You can multiply in any order: 43 × 20 = 43 × 2 × 10 = 43 × 10 × 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MultiplyByTensHundredsThousands;
