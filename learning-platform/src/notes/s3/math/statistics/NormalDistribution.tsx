import { useState } from 'react';

const NormalDistribution = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">The Normal Distribution</h1>
        <p className="text-lg">Understanding the bell curve and using it for probability estimates</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Introduction */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-300">1. What is the Normal Distribution?</h2>

          <div className="bg-violet-50 dark:bg-violet-900/30 p-6 rounded-lg border-l-4 border-violet-500 dark:border-violet-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Many observable quantities have distributions that are <strong>symmetrical</strong> and <strong>shaped like a bell</strong>.
              We call this a <strong>normal distribution</strong>.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The normal distribution arises in nature when many different factors affect the value of a variable.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Real-World Examples:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Heights of people</p>
                <p className="text-xs text-gray-700 dark:text-gray-300">Most cluster around average height</p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Test scores</p>
                <p className="text-xs text-gray-700 dark:text-gray-300">Most students score near the average</p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Weights of fruit</p>
                <p className="text-xs text-gray-700 dark:text-gray-300">Most apples weigh close to the mean</p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-1">IQ scores</p>
                <p className="text-xs text-gray-700 dark:text-gray-300">Bell-shaped distribution around 100</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded border-2 border-purple-300 dark:border-purple-600">
            <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Characteristics of Normal Distribution:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200 list-disc ml-6">
              <li><strong>Symmetrical</strong> about the mean (mirror image on both sides)</li>
              <li><strong>Bell-shaped</strong> curve (highest at the mean, tails off on both sides)</li>
              <li>Mean, median, and mode are all <strong>equal</strong> (at the center)</li>
              <li>Most values are close to the mean; fewer values far from the mean</li>
              <li>The curve never actually touches the x-axis (extends to infinity)</li>
            </ul>
          </div>
        </div>

        {/* Section 2: The Empirical Rule (68-95-99.7) */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-300">2. The Empirical Rule (68-95-99.7 Rule)</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Proportions:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              For any population that is <strong>normally distributed</strong> with mean <span className="font-mono">μ</span> and
              standard deviation <span className="font-mono">σ</span>:
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-green-300 dark:border-green-600">
                <p className="font-bold text-green-700 dark:text-green-300 mb-2">≈ 68% (or 0.68)</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  of the population will lie between <span className="font-mono">μ − σ</span> and <span className="font-mono">μ + σ</span>
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-blue-300 dark:border-blue-600">
                <p className="font-bold text-blue-700 dark:text-blue-300 mb-2">≈ 95% (or 0.95)</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  of the population will lie between <span className="font-mono">μ − 2σ</span> and <span className="font-mono">μ + 2σ</span>
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-purple-300 dark:border-purple-600">
                <p className="font-bold text-purple-700 dark:text-purple-300 mb-2">≈ 99.7% (or 0.997)</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  of the population will lie between <span className="font-mono">μ − 3σ</span> and <span className="font-mono">μ + 3σ</span>
                </p>
              </div>
            </div>
          </div>

          {/* Visual representation */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Normal Distribution Curve:</h3>

            <div className="relative h-64 mb-8">
              {/* Bell curve visualization */}
              <div className="absolute inset-0 flex items-end justify-center">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  {/* Bell curve */}
                  <path
                    d="M 20 180 Q 50 180 80 160 Q 110 120 140 80 Q 170 20 200 10 Q 230 20 260 80 Q 290 120 320 160 Q 350 180 380 180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-violet-600 dark:text-violet-400"
                  />

                  {/* Vertical lines for standard deviations */}
                  <line x1="200" y1="10" x2="200" y2="180" stroke="currentColor" strokeWidth="2" className="text-purple-600 dark:text-purple-400" strokeDasharray="4"/>
                  <line x1="140" y1="80" x2="140" y2="180" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-600" strokeDasharray="2"/>
                  <line x1="260" y1="80" x2="260" y2="180" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-600" strokeDasharray="2"/>
                  <line x1="80" y1="160" x2="80" y2="180" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-600" strokeDasharray="2"/>
                  <line x1="320" y1="160" x2="320" y2="180" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-600" strokeDasharray="2"/>

                  {/* Labels */}
                  <text x="200" y="195" textAnchor="middle" className="text-xs fill-gray-700 dark:fill-gray-300">μ</text>
                  <text x="140" y="195" textAnchor="middle" className="text-xs fill-gray-600 dark:fill-gray-400">μ−σ</text>
                  <text x="260" y="195" textAnchor="middle" className="text-xs fill-gray-600 dark:fill-gray-400">μ+σ</text>
                  <text x="80" y="195" textAnchor="middle" className="text-xs fill-gray-600 dark:fill-gray-400">μ−2σ</text>
                  <text x="320" y="195" textAnchor="middle" className="text-xs fill-gray-600 dark:fill-gray-400">μ+2σ</text>

                  {/* Percentage labels */}
                  <text x="200" y="120" textAnchor="middle" className="text-sm font-bold fill-green-600 dark:fill-green-400">68%</text>
                  <text x="110" y="150" textAnchor="middle" className="text-xs fill-blue-600 dark:fill-blue-400">95%</text>
                  <text x="290" y="150" textAnchor="middle" className="text-xs fill-blue-600 dark:fill-blue-400">95%</text>
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 bg-gray-50 dark:bg-gray-700/50 rounded">
                <p className="text-gray-600 dark:text-gray-400">13.59%</p>
              </div>
              <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded">
                <p className="font-bold text-green-700 dark:text-green-300">34.13%</p>
              </div>
              <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded">
                <p className="font-bold text-green-700 dark:text-green-300">34.13%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Using the Normal Distribution */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-300">3. Using the Normal Distribution for Estimates</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Estimating Probabilities:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              For any variable that is normally distributed, we can use the mean <span className="font-mono">μ</span> and
              standard deviation <span className="font-mono">σ</span> to estimate the <strong>probability</strong> that a randomly
              selected member of the population will lie in a given interval.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Step-by-Step Process:</h3>
            <ol className="space-y-2 text-sm text-gray-800 dark:text-gray-200 list-decimal ml-6">
              <li>Identify the mean <span className="font-mono">μ</span> and standard deviation <span className="font-mono">σ</span></li>
              <li>Calculate the interval boundaries (μ ± σ, μ ± 2σ, or μ ± 3σ)</li>
              <li>Determine which region of the curve your interval covers</li>
              <li>Use the 68-95-99.7 rule to estimate the percentage</li>
              <li>Convert to probability if needed (percentage ÷ 100)</li>
            </ol>
          </div>
        </div>

        {/* Section 4: Complementary Regions */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-300">4. Finding Other Proportions</h2>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">Remember:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
              The normal distribution is <strong>symmetrical</strong>, so each half contains 50% of the data.
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              We can use this symmetry and the 68-95-99.7 rule to find other proportions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Common Calculations:</h3>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Between μ and μ + σ:</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">68% ÷ 2 = 34%</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Less than μ − σ or Greater than μ + σ:</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">(100% − 68%) ÷ 2 = 16%</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Between μ + σ and μ + 2σ:</p>
                <p className="text-gray-800 dark:text-gray-200 font-mono">(95% − 68%) ÷ 2 = 13.5%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-violet-100 dark:bg-violet-900/50 rounded-lg font-semibold hover:bg-violet-200 dark:hover:bg-violet-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Strawberry Weights
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-violet-500 dark:border-violet-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Strawberry weights are normally distributed with mean μ = 17 g and standard deviation σ = 3 g.
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold text-violet-700 dark:text-violet-300 mb-2">a) What proportion of strawberries weigh between 20 g and 23 g?</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>μ = 17, σ = 3</p>
                      <p>μ + σ = 17 + 3 = 20 g</p>
                      <p>μ + 2σ = 17 + 6 = 23 g</p>
                      <p>Between μ + σ and μ + 2σ contains <span className="font-bold">(95% − 68%) ÷ 2 = 13.5%</span></p>
                      <p className="font-bold text-violet-600 dark:text-violet-400">About 13.59% of strawberries weigh between 20 g and 23 g</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-green-700 dark:text-green-300 mb-2">b) What proportion weigh less than 11 g?</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>μ − 2σ = 17 − 6 = 11 g</p>
                      <p>Less than μ − 2σ contains <span className="font-bold">(100% − 95%) ÷ 2 = 2.5%</span></p>
                      <p className="font-bold text-green-600 dark:text-green-400">About 2.5% of strawberries weigh less than 11 g</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-violet-100 dark:bg-violet-900/50 rounded-lg font-semibold hover:bg-violet-200 dark:hover:bg-violet-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Test Scores
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-violet-500 dark:border-violet-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Test scores are normally distributed with mean μ = 75 and standard deviation σ = 8.
                  There are 200 students. How many students scored between 67 and 83?
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold text-violet-700 dark:text-violet-300 mb-2">Solution:</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p>μ = 75, σ = 8</p>
                      <p>μ − σ = 75 − 8 = 67</p>
                      <p>μ + σ = 75 + 8 = 83</p>
                      <p>Between μ − σ and μ + σ contains <span className="font-bold">68%</span></p>
                      <p>Number of students = 68% of 200 = 0.68 × 200 = 136</p>
                      <p className="font-bold text-violet-600 dark:text-violet-400">About 136 students scored between 67 and 83</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li>The <strong>normal distribution</strong> is symmetrical and bell-shaped</li>
            <li>Many real-world phenomena follow a normal distribution (heights, test scores, measurements)</li>
            <li>Mean, median, and mode are all <strong>equal</strong> in a normal distribution</li>
            <li><strong>Empirical Rule (68-95-99.7):</strong></li>
            <li className="ml-6">• 68% of data lies within μ ± σ</li>
            <li className="ml-6">• 95% of data lies within μ ± 2σ</li>
            <li className="ml-6">• 99.7% of data lies within μ ± 3σ</li>
            <li>Use symmetry to find other proportions (each half = 50%)</li>
            <li>Can estimate <strong>probabilities</strong> using the normal distribution and standard deviation</li>
            <li>The curve extends to infinity but never touches the x-axis</li>
            <li>Greek letter <strong>μ</strong> (mu) = population mean, <strong>σ</strong> (sigma) = population standard deviation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NormalDistribution;
