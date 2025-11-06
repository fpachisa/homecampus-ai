import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function IntroductionToInequalities() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Introduction to Inequalities</h1>
        <p className="mt-2 text-purple-100">Understanding inequality symbols and real-world applications</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Understanding Inequality Symbols */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Understanding Inequality Symbols
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              An <strong>inequality</strong> is a mathematical statement that compares two values. Unlike equations, which show that two values are equal, inequalities show that one value is <em>greater than</em>, <em>less than</em>, <em>greater than or equal to</em>, or <em>less than or equal to</em> another value.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">The Four Inequality Symbols</h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 w-12">&lt;</span>
                  <span className="flex-1"><strong>Less than</strong> – The value on the left is smaller</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Example: 3 &lt; 5</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 w-12">&gt;</span>
                  <span className="flex-1"><strong>Greater than</strong> – The value on the left is larger</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Example: 8 &gt; 2</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400 w-12">≤</span>
                  <span className="flex-1"><strong>Less than or equal to</strong> – Can be smaller or the same</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Example: x ≤ 10</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400 w-12">≥</span>
                  <span className="flex-1"><strong>Greater than or equal to</strong> – Can be larger or the same</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Example: x ≥ 5</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                💡 Key Difference: Strict vs Non-Strict
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Strict inequalities (&lt; and &gt;):</strong> Do NOT include the boundary value<br />
                <strong>Non-strict inequalities (≤ and ≥):</strong> DO include the boundary value<br /><br />
                Think of it like: "You must be OVER 18" (&gt;18) vs "You must be 18 or over" (≥18)
              </p>
            </div>

            {/* Visual: Number Line Comparison */}
            <div className="my-6">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Visual Comparison on Number Line</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">x &lt; 3 (open circle, shade left)</p>
                  <div className="w-full overflow-hidden">
                    <MathToolRenderer
                      toolName="numberLine"
                      parameters={{
                        min: -1,
                        max: 5,
                        intervals: [
                          { start: null, end: 3, startInclusive: false, endInclusive: false, color: "#3b82f6" }
                        ],
                        points: [
                          { value: 3, style: "open", color: "#3b82f6" }
                        ]
                      }}
                    />
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">x ≥ 2 (closed circle, shade right)</p>
                  <div className="w-full overflow-hidden">
                    <MathToolRenderer
                      toolName="numberLine"
                      parameters={{
                        min: -1,
                        max: 5,
                        intervals: [
                          { start: 2, end: null, startInclusive: true, color: "#8b5cf6" }
                        ],
                        points: [
                          { value: 2, style: "closed", color: "#8b5cf6" }
                        ]
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Which symbol is correct?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Fill in the blank with the correct inequality symbol:<br />
              (a) 7 ___ 12<br />
              (b) -3 ___ -5<br />
              (c) 0 ___ 0
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 font-semibold">Solution:</p>
              <p className="text-gray-700 dark:text-gray-300">
                (a) 7 <strong>&lt;</strong> 12 (7 is less than 12)<br />
                (b) -3 <strong>&gt;</strong> -5 (On a number line, -3 is to the right of -5, so it's greater)<br />
                (c) 0 <strong>=</strong> 0 OR we could say 0 ≤ 0 OR 0 ≥ 0 (they're equal, so any works!)
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Real-World Inequality Contexts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Real-World Applications of Inequalities
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Inequalities appear everywhere in daily life! They represent <strong>constraints</strong>, <strong>limits</strong>, and <strong>ranges</strong> that we encounter constantly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Budget Example */}
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 p-4 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💰</span>
                  <h3 className="font-semibold text-green-800 dark:text-green-300">Budget Constraints</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  "You have $50 to spend on lunch for the week"
                </p>
                <p className="text-green-700 dark:text-green-400 font-mono">
                  Total spent ≤ 50
                </p>
              </div>

              {/* Speed Limit Example */}
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 p-4 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🚗</span>
                  <h3 className="font-semibold text-red-800 dark:text-red-300">Speed Limits</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  "Speed limit: 60 km/h"
                </p>
                <p className="text-red-700 dark:text-red-400 font-mono">
                  Speed ≤ 60
                </p>
              </div>

              {/* Age Restriction Example */}
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-300 dark:border-purple-700 p-4 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🎬</span>
                  <h3 className="font-semibold text-purple-800 dark:text-purple-300">Age Restrictions</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  "Movie rated PG-13: Must be 13 or older"
                </p>
                <p className="text-purple-700 dark:text-purple-400 font-mono">
                  Age ≥ 13
                </p>
              </div>

              {/* Temperature Example */}
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-300 dark:border-orange-700 p-4 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🌡️</span>
                  <h3 className="font-semibold text-orange-800 dark:text-orange-300">Temperature Ranges</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  "Water is liquid between 0°C and 100°C"
                </p>
                <p className="text-orange-700 dark:text-orange-400 font-mono">
                  0 &lt; Temperature &lt; 100
                </p>
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Writing Real-World Inequalities
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Write an inequality for each situation:<br />
              (a) A elevator has a maximum capacity of 800 kg<br />
              (b) You need at least 60% to pass an exam<br />
              (c) The temperature must stay above freezing (0°C)
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Solution:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Let w = weight, s = score, t = temperature<br /><br />
                (a) <strong>w ≤ 800</strong> (weight must be less than or equal to 800 kg)<br />
                (b) <strong>s ≥ 60</strong> (score must be greater than or equal to 60%)<br />
                (c) <strong>t &gt; 0</strong> (temperature must be strictly greater than 0°C)
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Comparing Equations and Inequalities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Equations vs Inequalities: Key Differences
          </h2>

          <div className="mb-6">
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 dark:border-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-800 dark:text-gray-100">Feature</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-800 dark:text-gray-100">Equation</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-800 dark:text-gray-100">Inequality</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Symbol</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">=</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">&lt;, &gt;, ≤, ≥</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Meaning</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Exactly equal</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Comparison relationship</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Solutions</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">One value (usually)</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">A <strong>range</strong> of values</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Example</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">x + 5 = 8<br /><span className="text-sm">(x = 3 only)</span></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">x + 5 &gt; 8<br /><span className="text-sm">(x &gt; 3, infinitely many!)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              🎯 Critical Insight: Solution Sets
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              The biggest difference: An equation gives you <strong>one answer</strong> (or a few specific values), but an inequality gives you a <strong>whole set of answers</strong> – often infinitely many!
            </p>
          </div>
        </section>

        {/* Practice Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Practice Problems
          </h2>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Symbol Recognition
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Which inequality symbol makes each statement true?<br />
              (a) 15 ___ 20<br />
              (b) -8 ___ -2<br />
              (c) A bag can hold at most 5 kg: weight ___ 5
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  (a) 15 <strong>&lt;</strong> 20<br />
                  (b) -8 <strong>&lt;</strong> -2 (Remember: more negative = smaller!)<br />
                  (c) weight <strong>≤</strong> 5 ("at most" means can equal 5 or be less)
                </p>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Real-World Translation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Write an inequality for each scenario:<br />
              (a) A concert venue can hold up to 500 people<br />
              (b) You must be taller than 120 cm to ride the roller coaster<br />
              (c) A phone plan includes at least 10 GB of data
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Let p = number of people, h = height in cm, d = data in GB<br /><br />
                  (a) <strong>p ≤ 500</strong> ("up to" includes 500)<br />
                  (b) <strong>h &gt; 120</strong> ("taller than" means strictly greater)<br />
                  (c) <strong>d ≥ 10</strong> ("at least" means 10 or more)
                </p>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Critical Thinking
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Explain the difference between:<br />
              (a) x &lt; 10 and x ≤ 10<br />
              (b) An equation that equals 7 and an inequality greater than 7
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  (a) x &lt; 10 means x can be ANY value less than 10 (9.9, 9, 5, -100...) but <strong>NOT 10 itself</strong>.<br />
                  x ≤ 10 means x can be less than 10 OR exactly 10.<br /><br />

                  (b) An equation like "x = 7" has only ONE solution: x must be exactly 7.<br />
                  An inequality like "x &gt; 7" has INFINITELY MANY solutions: x could be 7.1, 8, 100, 1000, etc.
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
            <li><strong>Four symbols:</strong> &lt; (less than), &gt; (greater than), ≤ (less than or equal), ≥ (greater than or equal)</li>
            <li><strong>Strict vs Non-strict:</strong> &lt; and &gt; do NOT include the boundary; ≤ and ≥ DO include it</li>
            <li><strong>Real-world use:</strong> Inequalities model constraints, limits, budgets, and ranges we encounter daily</li>
            <li><strong>Solution sets:</strong> Unlike equations (one answer), inequalities have a whole RANGE of solutions</li>
            <li><strong>Number line:</strong> Open circles for strict (&lt;, &gt;), closed circles for non-strict (≤, ≥)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
