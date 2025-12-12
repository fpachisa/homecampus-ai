import { useState } from 'react';

const DivideByTensHundredsThousands = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Dividing by Tens, Hundreds and Thousands</h1>
        <p className="text-lg">Learn to divide by 20, 60, 400, 600, and more!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Dividing by Tens */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">1. Dividing by Tens (20, 30, 60...)</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Strategy</h3>
            <p className="text-gray-800 dark:text-gray-200">
              To divide by 20, 30, 40, etc., <strong>break it into two steps</strong>:
            </p>
            <ol className="list-decimal list-inside mt-2 text-gray-800 dark:text-gray-200">
              <li>First divide by 10</li>
              <li>Then divide by the digit (2, 3, 4, etc.)</li>
            </ol>
          </div>

          {/* Worked Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Divide 860 by 20</h3>
            <div className="space-y-3">
              <p className="text-gray-800 dark:text-gray-200">20 is the same as <strong>10 × 2</strong></p>
              <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100">
                  860 ÷ 20 = 860 ÷ 10 ÷ 2
                </p>
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100 ml-8">
                  = 86 ÷ 2
                </p>
                <p className="font-mono text-lg text-green-600 dark:text-green-400 ml-8">
                  = <strong>43</strong>
                </p>
              </div>
              {/* Arrow diagram */}
              <div className="flex items-center justify-center gap-4 text-gray-700 dark:text-gray-300">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded">860</span>
                <span>→ ÷ 10 →</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded">86</span>
                <span>→ ÷ 2 →</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 rounded font-bold">43</span>
              </div>
            </div>
          </div>

          {/* More Examples */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">More Examples:</h3>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                <p className="font-mono text-gray-900 dark:text-gray-100">8,040 ÷ 60 = 8,040 ÷ 10 ÷ 6 = 804 ÷ 6 = <strong>134</strong></p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                <p className="font-mono text-gray-900 dark:text-gray-100">2,800 ÷ 50 = 2,800 ÷ 10 ÷ 5 = 280 ÷ 5 = <strong>56</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Dividing by Hundreds */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">2. Dividing by Hundreds (200, 400, 600...)</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Strategy</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Same idea! To divide by 400, 600, etc., <strong>break it into two steps</strong>:
            </p>
            <ol className="list-decimal list-inside mt-2 text-gray-800 dark:text-gray-200">
              <li>First divide by 100</li>
              <li>Then divide by the digit (4, 6, etc.)</li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Divide 27,200 by 400</h3>
            <div className="space-y-3">
              <p className="text-gray-800 dark:text-gray-200">400 is the same as <strong>100 × 4</strong></p>
              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded">
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100">
                  27,200 ÷ 400 = 27,200 ÷ 100 ÷ 4
                </p>
                <p className="font-mono text-lg text-gray-900 dark:text-gray-100 ml-8">
                  = 272 ÷ 4
                </p>
                <p className="font-mono text-lg text-purple-600 dark:text-purple-400 ml-8">
                  = <strong>68</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Divide 188,400 by 600</h3>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded">
              <p className="font-mono text-lg text-gray-900 dark:text-gray-100">
                188,400 ÷ 600 = 188,400 ÷ 100 ÷ 6
              </p>
              <p className="font-mono text-lg text-gray-900 dark:text-gray-100 ml-8">
                = 1,884 ÷ 6
              </p>
              <p className="font-mono text-lg text-purple-600 dark:text-purple-400 ml-8">
                = <strong>314</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: The Connection */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">3. Division is the Inverse of Multiplication!</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Check Your Work!</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              You can always check your division answer by multiplying back:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded space-y-2">
              <p className="font-mono text-gray-900 dark:text-gray-100">If 860 ÷ 20 = 43, then 43 × 20 = 860 ✓</p>
              <p className="font-mono text-gray-900 dark:text-gray-100">If 27,200 ÷ 400 = 68, then 68 × 400 = 27,200 ✓</p>
              <p className="font-mono text-gray-900 dark:text-gray-100">If 188,400 ÷ 600 = 314, then 314 × 600 = 188,400 ✓</p>
            </div>
          </div>
        </section>

        {/* Section 4: Alternative Order */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">4. Alternative Method</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">You can divide in any order!</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              For 8,040 ÷ 60, you can also:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-mono text-gray-900 dark:text-gray-100">8,040 ÷ 60 = 8,040 ÷ 10 ÷ 6 = 804 ÷ 6 = 134</p>
              <p className="font-mono text-gray-900 dark:text-gray-100">Or: 8,040 ÷ 60 = 8,040 ÷ 6 ÷ 10 = 1,340 ÷ 10 = 134</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Both ways give the same answer!</p>
            </div>
          </div>
        </section>

        {/* Practice */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">Practice Problems</h2>

          <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">1. Divide by Tens:</p>
            <div className="ml-4 space-y-1 text-gray-800 dark:text-gray-200">
              <p>a) 720 ÷ 20 = ?</p>
              <p>b) 1,500 ÷ 30 = ?</p>
              <p>c) 4,200 ÷ 60 = ?</p>
              <p>d) 3,500 ÷ 70 = ?</p>
            </div>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solutions
            </button>
            {showSolution1 && (
              <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-gray-800 dark:text-gray-200">
                <p><strong>a)</strong> 720 ÷ 20 = 72 ÷ 2 = 36</p>
                <p><strong>b)</strong> 1,500 ÷ 30 = 150 ÷ 3 = 50</p>
                <p><strong>c)</strong> 4,200 ÷ 60 = 420 ÷ 6 = 70</p>
                <p><strong>d)</strong> 3,500 ÷ 70 = 350 ÷ 7 = 50</p>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
            <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">2. Divide by Hundreds:</p>
            <div className="ml-4 space-y-1 text-gray-800 dark:text-gray-200">
              <p>a) 8,000 ÷ 200 = ?</p>
              <p>b) 15,000 ÷ 300 = ?</p>
              <p>c) 24,000 ÷ 400 = ?</p>
              <p>d) 54,000 ÷ 600 = ?</p>
            </div>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-3 px-4 py-2 bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solutions
            </button>
            {showSolution2 && (
              <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-gray-800 dark:text-gray-200">
                <p><strong>a)</strong> 8,000 ÷ 200 = 80 ÷ 2 = 40</p>
                <p><strong>b)</strong> 15,000 ÷ 300 = 150 ÷ 3 = 50</p>
                <p><strong>c)</strong> 24,000 ÷ 400 = 240 ÷ 4 = 60</p>
                <p><strong>d)</strong> 54,000 ÷ 600 = 540 ÷ 6 = 90</p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>÷ 20</strong> = ÷ 10 ÷ 2 (remove one zero, then divide by 2)</li>
            <li><strong>÷ 60</strong> = ÷ 10 ÷ 6 (remove one zero, then divide by 6)</li>
            <li><strong>÷ 400</strong> = ÷ 100 ÷ 4 (remove two zeros, then divide by 4)</li>
            <li><strong>÷ 600</strong> = ÷ 100 ÷ 6 (remove two zeros, then divide by 6)</li>
            <li>Division is the <strong>inverse</strong> of multiplication - check your work by multiplying back!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DivideByTensHundredsThousands;
