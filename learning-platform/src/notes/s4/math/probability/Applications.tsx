import { useState } from 'react';

const Applications = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showPractice1, setShowPractice1] = useState(false);
  const [showPractice2, setShowPractice2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Probability Applications & Problem Solving</h1>
        <p className="text-lg">Real-world contexts and advanced problem-solving strategies</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Real-World Applications */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">1. Real-World Probability Applications</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Common Applications:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🎲 Games & Gambling</p>
                <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                  <li>• Fair games (expected value = 0)</li>
                  <li>• House advantage</li>
                  <li>• Odds and payouts</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🏥 Medical Testing</p>
                <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                  <li>• False positives/negatives</li>
                  <li>• Test accuracy vs disease rarity</li>
                  <li>• Bayesian updating</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🏭 Quality Control</p>
                <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                  <li>• Defect rates</li>
                  <li>• Sampling inspection</li>
                  <li>• Batch acceptance</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">📊 Risk Assessment</p>
                <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                  <li>• Insurance premiums</li>
                  <li>• Investment decisions</li>
                  <li>• Safety planning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Example 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-orange-300 dark:border-orange-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 1: Quality Control</h3>
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="mb-3 px-4 py-2 bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white rounded transition-colors"
            >
              {showExample1 ? 'Hide' : 'Show'} Solution
            </button>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              A factory produces light bulbs with a 2% defect rate. A quality inspector randomly selects 3 bulbs. What is the probability that all 3 are non-defective?
            </p>
            {showExample1 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500 dark:border-green-400">
                <div className="space-y-3 text-gray-800 dark:text-gray-200">
                  <p><strong>Given:</strong></p>
                  <p className="ml-4">• P(defective) = 0.02</p>
                  <p className="ml-4">• P(non-defective) = 1 - 0.02 = 0.98</p>

                  <p className="mt-3"><strong>Assuming independence (large production):</strong></p>
                  <p className="ml-4">P(all 3 non-defective) = P(good) × P(good) × P(good)</p>
                  <p className="ml-4">= 0.98 × 0.98 × 0.98</p>
                  <p className="ml-4">= 0.98³</p>
                  <p className="ml-4 font-bold">≈ 0.9412 or 94.12%</p>

                  <p className="text-sm italic mt-3 text-gray-700 dark:text-gray-300">
                    Interpretation: About 94% chance all 3 bulbs are good, or about 6% chance at least one is defective.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 2: "At Least" and "At Most" Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800 dark:text-red-300">2. "At Least" and "At Most" Problems</h2>

          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500 dark:border-red-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Strategic Approach:</h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-red-700 dark:text-red-300 mb-2">"At Least One" Strategy:</p>
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  <strong>Use the complement!</strong> "At least one" = "NOT zero"
                </p>
                <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded">
                  <p className="text-center font-bold text-gray-900 dark:text-gray-100">
                    P(at least one) = 1 - P(none)
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-red-700 dark:text-red-300 mb-2">"At Most" Strategy:</p>
                <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                  <li>• "At most 2" means "0, 1, or 2"</li>
                  <li>• Can use: P(at most 2) = P(0) + P(1) + P(2)</li>
                  <li>• Or complement: P(at most 2) = 1 - P(3 or more)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              💡 Why use complement for "at least one"?
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              "At least one" could mean 1, 2, 3, 4, ... many outcomes to add!<br/>
              But "none" is just ONE outcome to calculate, then subtract from 1. Much easier!
            </p>
          </div>

          {/* Example 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-red-300 dark:border-red-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 2: "At Least One" Problem</h3>
            <button
              onClick={() => setShowExample2(!showExample2)}
              className="mb-3 px-4 py-2 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white rounded transition-colors"
            >
              {showExample2 ? 'Hide' : 'Show'} Solution
            </button>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              A die is rolled 4 times. What is the probability of rolling at least one 6?
            </p>
            {showExample2 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500 dark:border-green-400">
                <div className="space-y-3 text-gray-800 dark:text-gray-200">
                  <p><strong>Method 1: Complement (Recommended)</strong></p>
                  <p className="ml-4">• P(rolling a 6) = 1/6</p>
                  <p className="ml-4">• P(NOT rolling a 6) = 5/6</p>
                  <p className="ml-4">• P(NO sixes in 4 rolls) = (5/6)⁴</p>
                  <p className="ml-4">• P(at least one 6) = 1 - (5/6)⁴</p>
                  <p className="ml-4">= 1 - 625/1296</p>
                  <p className="ml-4 font-bold">= 671/1296 ≈ 0.5177 or 51.77%</p>

                  <p className="mt-3"><strong>Method 2: Direct (Much Harder!)</strong></p>
                  <p className="ml-4">Would need: P(exactly 1 six) + P(exactly 2 sixes) + P(exactly 3 sixes) + P(all 4 sixes)</p>
                  <p className="text-sm italic text-gray-700 dark:text-gray-300">This requires combination formulas - complement is MUCH easier!</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Complex Problem Solving */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">3. Complex Probability Problems</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Problem-Solving Strategies:</h3>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">1. Identify the type:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Addition rule? Multiplication rule? Conditional? Tree diagram needed?</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">2. Look for keywords:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">"AND" → multiply | "OR" → add | "given that" → conditional | "at least" → complement</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">3. Check independence:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">With replacement? Separate experiments? → Independent<br/>Without replacement? One affects other? → Dependent</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">4. Draw diagrams when needed:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Venn diagrams for overlapping events, tree diagrams for sequential events, tables for categorical data</p>
              </div>
            </div>
          </div>

          {/* Example 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-purple-300 dark:border-purple-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example 3: Multi-Step Problem</h3>
            <button
              onClick={() => setShowExample3(!showExample3)}
              className="mb-3 px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded transition-colors"
            >
              {showExample3 ? 'Hide' : 'Show'} Solution
            </button>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Box A contains 3 red and 2 blue marbles. Box B contains 2 red and 4 blue marbles. A box is chosen at random, then a marble is drawn from it. What is the probability the marble is red?
            </p>
            {showExample3 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500 dark:border-green-400">
                <div className="space-y-3 text-gray-800 dark:text-gray-200">
                  <p><strong>This requires tree diagram thinking:</strong></p>

                  <p className="mt-2"><strong>Path 1: Box A → Red</strong></p>
                  <p className="ml-4">• P(choose Box A) = 1/2</p>
                  <p className="ml-4">• P(red | Box A) = 3/5</p>
                  <p className="ml-4">• P(Box A AND red) = 1/2 × 3/5 = 3/10</p>

                  <p className="mt-2"><strong>Path 2: Box B → Red</strong></p>
                  <p className="ml-4">• P(choose Box B) = 1/2</p>
                  <p className="ml-4">• P(red | Box B) = 2/6 = 1/3</p>
                  <p className="ml-4">• P(Box B AND red) = 1/2 × 1/3 = 1/6</p>

                  <p className="mt-3"><strong>Total probability of red:</strong></p>
                  <p className="ml-4">P(red) = P(Box A AND red) + P(Box B AND red)</p>
                  <p className="ml-4">= 3/10 + 1/6</p>
                  <p className="ml-4">= 9/30 + 5/30</p>
                  <p className="ml-4 font-bold">= 14/30 = 7/15 ≈ 0.467 or 46.7%</p>

                  <p className="text-sm italic mt-3 text-gray-700 dark:text-gray-300">
                    This is the "Law of Total Probability" - sum all paths to the event.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Practice Problems</h2>

          {/* Practice 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-blue-300 dark:border-blue-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Practice 1: At Most Problem</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              Three coins are flipped. Find the probability of getting at most 1 head.
            </p>
            <button
              onClick={() => setShowPractice1(!showPractice1)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded transition-colors"
            >
              {showPractice1 ? 'Hide' : 'Show'} Solution
            </button>
            {showPractice1 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500 dark:border-green-400">
                <div className="space-y-2 text-gray-800 dark:text-gray-200">
                  <p><strong>"At most 1 head" means 0 heads or 1 head</strong></p>

                  <p className="mt-2"><strong>Sample space for 3 coins (8 outcomes):</strong></p>
                  <p className="ml-4">HHH, HHT, HTH, HTT, THH, THT, TTH, TTT</p>

                  <p className="mt-2"><strong>0 heads (all tails):</strong> TTT → 1 outcome</p>
                  <p><strong>1 head:</strong> HTT, THT, TTH → 3 outcomes</p>

                  <p className="mt-2"><strong>At most 1 head:</strong> 1 + 3 = 4 outcomes</p>
                  <p className="font-bold">P(at most 1 head) = 4/8 = 1/2 or 50%</p>

                  <p className="text-sm italic mt-3 text-gray-700 dark:text-gray-300">
                    Alternative: Could use complement → P(at most 1) = 1 - P(2 or more heads)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-blue-300 dark:border-blue-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Practice 2: Real-World Application</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              An email spam filter correctly identifies spam 98% of the time and correctly identifies legitimate emails 95% of the time. If 20% of all emails are spam, what is the probability that an email flagged as spam is actually spam?
            </p>
            <button
              onClick={() => setShowPractice2(!showPractice2)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded transition-colors"
            >
              {showPractice2 ? 'Hide' : 'Show'} Solution
            </button>
            {showPractice2 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500 dark:border-green-400">
                <div className="space-y-3 text-gray-800 dark:text-gray-200">
                  <p><strong>This is a Bayes' theorem problem!</strong></p>
                  <p>We want: P(actually spam | flagged as spam)</p>

                  <p className="mt-2"><strong>Given information:</strong></p>
                  <p className="ml-4">• P(spam) = 0.20, P(legitimate) = 0.80</p>
                  <p className="ml-4">• P(flagged spam | spam) = 0.98</p>
                  <p className="ml-4">• P(flagged legitimate | legitimate) = 0.95</p>
                  <p className="ml-4">• P(flagged spam | legitimate) = 0.05 (false positive)</p>

                  <p className="mt-3"><strong>Tree diagram paths to "flagged as spam":</strong></p>
                  <p className="ml-4">Path 1: Spam AND flagged = 0.20 × 0.98 = 0.196</p>
                  <p className="ml-4">Path 2: Legitimate AND flagged = 0.80 × 0.05 = 0.040</p>
                  <p className="ml-4">Total P(flagged spam) = 0.196 + 0.040 = 0.236</p>

                  <p className="mt-3"><strong>Apply conditional probability formula:</strong></p>
                  <p className="ml-4">P(spam | flagged spam) = 0.196 / 0.236</p>
                  <p className="ml-4 font-bold">≈ 0.831 or 83.1%</p>

                  <p className="text-sm italic mt-3 text-red-700 dark:text-red-300">
                    Even with high accuracy, about 17% of flagged emails are false positives!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 p-6 rounded-lg border-2 border-orange-400 dark:border-orange-600">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">🎯 Key Takeaways</h2>
          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
            <li>✓ Real-world applications: medical testing, quality control, risk assessment</li>
            <li>✓ "At least one" strategy: use complement P(at least one) = 1 - P(none)</li>
            <li>✓ "At most k" means sum P(0) + P(1) + ... + P(k), or use complement</li>
            <li>✓ Complex problems: break into paths, use tree diagrams, apply multiple rules</li>
            <li>✓ Law of total probability: sum all possible paths to an event</li>
            <li>✓ Bayes' theorem: update probabilities with new information</li>
            <li>✓ Always check: independent or dependent? With or without replacement?</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Applications;
