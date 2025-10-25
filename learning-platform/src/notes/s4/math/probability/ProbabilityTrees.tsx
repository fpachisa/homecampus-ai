import { useState } from 'react';

const ProbabilityTrees = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Probability Trees</h1>
        <p className="text-lg">Using tree diagrams for multi-stage experiments and complex calculations</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Tree Diagram Basics */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">1. Constructing Tree Diagrams</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What is a Probability Tree?</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              A <strong>tree diagram</strong> shows all possible outcomes for multi-stage experiments with branches showing probabilities.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded space-y-2">
              <p className="font-semibold text-gray-900 dark:text-gray-100">Tree Structure:</p>
              <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1 ml-4">
                <li>• Each stage = a new set of branches</li>
                <li>• Each branch = one possible outcome with its probability</li>
                <li>• Probabilities on all branches from one point add to 1</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600 mb-4">
            <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">💡 Two Key Rules:</p>
            <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
              <li><strong>1. MULTIPLY along branches</strong> (AND rule) - for one complete path</li>
              <li><strong>2. ADD across outcomes</strong> (OR rule) - for multiple paths</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Calculating from Trees */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-300">2. Probability from Trees</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-teal-300 dark:border-teal-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example: Two Coin Flips</h3>
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="mb-3 px-4 py-2 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white rounded transition-colors"
            >
              {showExample1 ? 'Hide' : 'Show'} Solution
            </button>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              A coin is flipped twice. Find P(exactly one head).
            </p>
            {showExample1 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500 dark:border-green-400">
                <div className="space-y-3 text-gray-800 dark:text-gray-200">
                  <p><strong>Tree Diagram:</strong></p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm">
                    <p>         H (1/2) → HH (1/2 × 1/2 = 1/4)</p>
                    <p>    H (1/2)</p>
                    <p>         T (1/2) → HT (1/2 × 1/2 = 1/4)</p>
                    <p>Start</p>
                    <p>         H (1/2) → TH (1/2 × 1/2 = 1/4)</p>
                    <p>    T (1/2)</p>
                    <p>         T (1/2) → TT (1/2 × 1/2 = 1/4)</p>
                  </div>
                  <p><strong>Exactly one head:</strong> paths HT and TH</p>
                  <p className="font-bold">P(exactly one H) = 1/4 + 1/4 = 1/2</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Without Replacement */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">3. Trees Without Replacement</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Difference:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              <strong>Without replacement:</strong> Probabilities CHANGE on later branches because items are not returned.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-blue-300 dark:border-blue-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example: Drawing Cards</h3>
            <button
              onClick={() => setShowExample2(!showExample2)}
              className="mb-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded transition-colors"
            >
              {showExample2 ? 'Hide' : 'Show'} Solution
            </button>
            <p className="text-gray-800 dark:text-gray-200 mb-3">
              A bag has 3 red and 2 blue marbles. Two marbles are drawn without replacement. Find P(both red).
            </p>
            {showExample2 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500 dark:border-green-400">
                <div className="space-y-3 text-gray-800 dark:text-gray-200">
                  <p><strong>First draw:</strong> P(red) = 3/5, P(blue) = 2/5</p>
                  <p><strong>Second draw (if first was red):</strong></p>
                  <p className="ml-4">• Now 2 red and 2 blue left (total 4)</p>
                  <p className="ml-4">• P(red|first red) = 2/4 = 1/2</p>
                  <p><strong>P(both red):</strong></p>
                  <p className="font-bold ml-4">= 3/5 × 2/4 = 6/20 = 3/10</p>
                  <p className="text-sm italic mt-2">Notice: Second probability changed because we removed one red marble!</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/50 dark:to-teal-900/50 p-6 rounded-lg border-2 border-green-400 dark:border-green-600">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">🎯 Key Takeaways</h2>
          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
            <li>✓ Tree diagrams organize multi-stage experiments systematically</li>
            <li>✓ MULTIPLY along one path (AND rule)</li>
            <li>✓ ADD across multiple paths (OR rule)</li>
            <li>✓ Without replacement: probabilities change on later branches</li>
            <li>✓ All probabilities from one point must sum to 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProbabilityTrees;
