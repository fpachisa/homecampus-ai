import { useState } from 'react';
import MathText from '../../../../components/MathText';

const PerCent = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Per Cent</h1>
        <p className="text-lg">Learn what percentage means - out of 100 equal parts!</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Understanding Per Cent */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">1. What is Per Cent?</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-6">
            <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg border-l-4 border-emerald-500 mb-4">
              <p className="text-emerald-800 dark:text-emerald-300 font-semibold text-lg">
                Per cent means "out of 100"
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                When a whole is divided into <strong>100 equal parts</strong>, each part is <MathText>{'$\\frac{1}{100}$'}</MathText> of the whole.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* Visual: 10x10 grid representation */}
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Visual representation:</p>
                <div className="flex justify-center">
                  <div className="grid grid-cols-10 gap-0.5">
                    {Array.from({ length: 100 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 border border-gray-300 dark:border-gray-600 ${
                          i === 0 ? 'bg-blue-500' : 'bg-white dark:bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-center mt-3 text-gray-700 dark:text-gray-300">
                  1 shaded square out of 100 = <strong>1%</strong>
                </p>
              </div>

              {/* Key facts */}
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-300">
                    <MathText>{'$\\frac{1}{100}$'}</MathText> = <strong>1%</strong>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    1% is read as "1 per cent"
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                  <p className="text-purple-800 dark:text-purple-300">
                    <strong>%</strong> is the symbol for "per cent"
                  </p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg">
                  <p className="text-amber-800 dark:text-amber-300">
                    <MathText>{'$\\frac{100}{100}$'}</MathText> = <strong>100%</strong> = the whole
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Reading Percentages */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">2. Reading Percentages from Grids</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Finding shaded and unshaded percentages</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 35% shaded example */}
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">35 squares shaded:</p>
                <div className="flex justify-center mb-3">
                  <div className="grid grid-cols-10 gap-0.5">
                    {Array.from({ length: 100 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 border border-gray-300 dark:border-gray-600 ${
                          i < 35 ? 'bg-blue-500' : 'bg-white dark:bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-2 text-gray-800 dark:text-gray-200">
                  <p><MathText>{'$\\frac{35}{100}$'}</MathText> = <strong>35%</strong> shaded</p>
                  <p>100% − 35% = <strong>65%</strong> unshaded</p>
                </div>
              </div>

              {/* 12% shaded example */}
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">12 squares shaded:</p>
                <div className="flex justify-center mb-3">
                  <div className="grid grid-cols-10 gap-0.5">
                    {Array.from({ length: 100 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 border border-gray-300 dark:border-gray-600 ${
                          i < 12 ? 'bg-blue-500' : 'bg-white dark:bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-2 text-gray-800 dark:text-gray-200">
                  <p><MathText>{'$\\frac{12}{100}$'}</MathText> = <strong>12%</strong> shaded</p>
                  <p>100% − 12% = <strong>88%</strong> unshaded</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4 border-l-4 border-yellow-500">
              <p className="text-yellow-800 dark:text-yellow-300 font-semibold">💡 Key Idea:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Shaded % + Unshaded % = <strong>100%</strong> (the whole)
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Word Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">3. Simple Percentage Word Problems</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">When the whole is 100</h3>

            {/* Example 1 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Example 1:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                100 people attended a concert. There were 62 adults and 38 children.
              </p>
              <div className="ml-4 space-y-2 text-gray-800 dark:text-gray-200">
                <p><strong>(a)</strong> What percentage of the audience were adults?</p>
                <p className="ml-4"><MathText>{'$\\frac{62}{100}$'}</MathText> = <strong>62%</strong> were adults</p>
                <p><strong>(b)</strong> What percentage of the audience were children?</p>
                <p className="ml-4"><MathText>{'$\\frac{38}{100}$'}</MathText> = <strong>38%</strong> were children</p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Example 2:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Mdm Lee has 100 picture books and storybooks altogether. She has 20 picture books. What percentage of the books are storybooks?
              </p>
              <div className="ml-4 space-y-2 text-gray-800 dark:text-gray-200">
                <p>Number of storybooks = 100 − 20 = 80</p>
                <p><MathText>{'$\\frac{80}{100}$'}</MathText> = <strong>80%</strong> of the books are storybooks</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: Reading from a Grid
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                If 25 squares out of 100 are shaded, what percentage is shaded? What percentage is unshaded?
              </p>
              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution1 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution1 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-2">
                    Shaded: <MathText>{'$\\frac{25}{100}$'}</MathText> = <strong>25%</strong>
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Unshaded: 100% − 25% = <strong>75%</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Word Problem
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                There are 100 marbles in a bag. 47 are red and the rest are blue. What percentage of the marbles are blue?
              </p>
              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution2 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution2 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200 mb-2">
                    Number of blue marbles = 100 − 47 = 53
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    <MathText>{'$\\frac{53}{100}$'}</MathText> = <strong>53%</strong> of the marbles are blue
                  </p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Converting to Percentage
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Express 100 out of 100 as a percentage.
              </p>
              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution3 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution3 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">
                    <MathText>{'$\\frac{100}{100}$'}</MathText> = <strong>100%</strong>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    100% represents the whole!
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-emerald-50 dark:bg-emerald-900/30 border-l-4 border-emerald-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Per cent</strong> means "out of 100"</li>
            <li><strong>%</strong> is the symbol for per cent</li>
            <li><MathText>{'$\\frac{1}{100}$'}</MathText> = <strong>1%</strong>, <MathText>{'$\\frac{100}{100}$'}</MathText> = <strong>100%</strong></li>
            <li>Shaded % + Unshaded % = <strong>100%</strong></li>
            <li>When the whole is 100, finding percentage is simple: just use the number as the %!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PerCent;
