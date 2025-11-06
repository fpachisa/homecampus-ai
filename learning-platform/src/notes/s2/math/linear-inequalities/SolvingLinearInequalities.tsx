import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function SolvingLinearInequalities() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Solving Linear Inequalities</h1>
        <p className="mt-2 text-green-100">Master the rules for solving one-variable inequalities</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Addition and Subtraction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Addition and Subtraction Properties
          </h2>

          <div className="mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                The Rule: Adding or Subtracting Preserves the Inequality
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                When you add or subtract the same number from both sides of an inequality, the direction of the inequality stays the same.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm">
                If a &lt; b, then a + c &lt; b + c<br />
                If a &gt; b, then a − c &gt; b − c
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Why?</strong> Think of a number line. If 3 &lt; 5, adding 2 to both gives 5 &lt; 7 (still true!). We're just sliding both values the same amount.
            </p>
          </div>

          {/* Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Solve x + 5 &lt; 12
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 1:</strong> Isolate x by subtracting 5 from both sides
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-mono ml-4">
                x + 5 − 5 &lt; 12 − 5
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-mono ml-4">
                x &lt; 7
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Solution:</strong> x &lt; 7 (any value less than 7 works!)
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Visual representation:</p>
              <MathToolRenderer
                toolName="numberLine"
                parameters={{
                  min: 0,
                  max: 10,
                  intervals: [
                    { start: null, end: 7, startInclusive: false, endInclusive: false, color: "#10b981" }
                  ],
                  points: [
                    { value: 7, style: "open", color: "#10b981" }
                  ],
                  title: "x < 7"
                }}
              />
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Solve x − 3 ≥ 8
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 1:</strong> Add 3 to both sides
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-mono ml-4">
                x − 3 + 3 ≥ 8 + 3
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-mono ml-4">
                x ≥ 11
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Solution:</strong> x ≥ 11 (x can be 11 or anything greater)
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Visual representation:</p>
              <MathToolRenderer
                toolName="numberLine"
                parameters={{
                  min: 8,
                  max: 15,
                  intervals: [
                    { start: 11, end: null, startInclusive: true, color: "#10b981" }
                  ],
                  points: [
                    { value: 11, style: "closed", color: "#10b981" }
                  ],
                  title: "x ≥ 11"
                }}
              />
            </div>
          </div>
        </section>

        {/* Section 2: Multiplication and Division (Positive) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Multiplication and Division by Positive Numbers
          </h2>

          <div className="mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                The Rule: Multiplying or Dividing by a Positive Number Preserves the Inequality
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                When you multiply or divide both sides by a POSITIVE number, the inequality direction stays the same.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm">
                If a &lt; b and c &gt; 0, then ac &lt; bc<br />
                If a &gt; b and c &gt; 0, then a/c &gt; b/c
              </div>
            </div>
          </div>

          {/* Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Solve 3x ≤ 15
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 1:</strong> Divide both sides by 3 (positive!)
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-mono ml-4">
                3x ÷ 3 ≤ 15 ÷ 3
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-mono ml-4">
                x ≤ 5
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Solution:</strong> x ≤ 5<br />
                <span className="text-sm">Note: Inequality stayed ≤ because we divided by positive 3</span>
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Visual representation:</p>
              <MathToolRenderer
                toolName="numberLine"
                parameters={{
                  min: 0,
                  max: 8,
                  intervals: [
                    { start: null, end: 5, startInclusive: false, endInclusive: true, color: "#3b82f6" }
                  ],
                  points: [
                    { value: 5, style: "closed", color: "#3b82f6" }
                  ],
                  title: "x ≤ 5"
                }}
              />
            </div>
          </div>
        </section>

        {/* Section 3: THE CRITICAL NEGATIVE RULE */}
        <section className="mb-8">
          <div className="bg-red-100 dark:bg-red-900/30 border-4 border-red-500 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-red-800 dark:text-red-300">
              ⚠️ 3. THE CRITICAL RULE: Multiplying or Dividing by Negative Numbers
            </h2>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2 text-xl">
                🔥 When you multiply or divide by a NEGATIVE number, you MUST REVERSE the inequality sign!
              </h3>
              <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded font-mono text-lg mt-3">
                If a &lt; b and c &lt; 0, then ac <strong>&gt;</strong> bc<br />
                If a &gt; b and c &lt; 0, then a/c <strong>&lt;</strong> b/c
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Why Does This Happen?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Think about it: We know 2 &lt; 5 (true).<br />
                Now multiply both by −1: we get −2 and −5.<br />
                But −2 &gt; −5 (true, because −2 is to the RIGHT of −5 on the number line!)<br /><br />
                Multiplying by a negative "flips" the order, so we must flip the inequality sign.
              </p>
            </div>
          </div>

          {/* Example 4 */}
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
              Example 4: Solve −2x &gt; 10
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-red-200 dark:border-red-700 space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 1:</strong> Divide both sides by −2
              </p>
              <p className="text-red-700 dark:text-red-400 font-mono ml-4 font-bold">
                −2x ÷ (−2) &gt; 10 ÷ (−2) <span className="text-red-600">← Dividing by NEGATIVE!</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 2:</strong> FLIP the inequality sign!
              </p>
              <p className="text-red-700 dark:text-red-400 font-mono ml-4 font-bold text-lg">
                x <strong>&lt;</strong> −5 <span className="text-red-600">← Sign REVERSED from &gt; to &lt;</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Solution:</strong> x &lt; −5
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Visual representation:</p>
              <MathToolRenderer
                toolName="numberLine"
                parameters={{
                  min: -10,
                  max: 0,
                  intervals: [
                    { start: null, end: -5, startInclusive: false, endInclusive: false, color: "#ef4444" }
                  ],
                  points: [
                    { value: -5, style: "open", color: "#ef4444" }
                  ],
                  title: "x < −5"
                }}
              />
            </div>
          </div>

          {/* Example 5 */}
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
              Example 5: Solve −x/4 ≤ 3
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-red-200 dark:border-red-700 space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 1:</strong> Multiply both sides by −4 to eliminate fraction
              </p>
              <p className="text-red-700 dark:text-red-400 font-mono ml-4 font-bold">
                (−x/4) × (−4) ≤ 3 × (−4) <span className="text-red-600">← Multiplying by NEGATIVE!</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 2:</strong> Simplify and FLIP the sign!
              </p>
              <p className="text-red-700 dark:text-red-400 font-mono ml-4 font-bold text-lg">
                x <strong>≥</strong> −12 <span className="text-red-600">← Sign REVERSED from ≤ to ≥</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Solution:</strong> x ≥ −12
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Visual representation:</p>
              <MathToolRenderer
                toolName="numberLine"
                parameters={{
                  min: -15,
                  max: -5,
                  intervals: [
                    { start: -12, end: null, startInclusive: true, color: "#ef4444" }
                  ],
                  points: [
                    { value: -12, style: "closed", color: "#ef4444" }
                  ],
                  title: "x ≥ −12"
                }}
              />
            </div>
          </div>

          {/* Common Mistake Warning */}
          <div className="bg-red-100 dark:bg-red-900/30 border-l-4 border-red-600 p-4 rounded">
            <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
              ❌ Common Mistake: Forgetting to Flip!
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              The #1 error students make: dividing/multiplying by a negative and forgetting to reverse the sign.<br /><br />
              <strong>Check yourself:</strong> Before finalizing your answer, ask "Did I multiply or divide by a negative? If yes, did I flip the sign?"
            </p>
          </div>
        </section>

        {/* Section 4: Multi-Step Inequalities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            4. Multi-Step Inequalities
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many inequalities require multiple operations to solve. Follow the same process as solving equations, but remember the critical negative rule!
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Strategy for Multi-Step Inequalities
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Simplify both sides (combine like terms, distribute)</li>
                <li>Add or subtract to get variables on one side, constants on other</li>
                <li>Multiply or divide to isolate the variable</li>
                <li><strong className="text-red-600 dark:text-red-400">If you multiply/divide by negative, FLIP the sign!</strong></li>
              </ol>
            </div>
          </div>

          {/* Example 6 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 6: Solve 5x − 7 &gt; 18
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 1:</strong> Add 7 to both sides
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-mono ml-4">
                5x − 7 + 7 &gt; 18 + 7<br />
                5x &gt; 25
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Step 2:</strong> Divide both sides by 5 (positive, so no flip!)
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-mono ml-4">
                5x ÷ 5 &gt; 25 ÷ 5<br />
                x &gt; 5
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Solution:</strong> x &gt; 5
              </p>
            </div>
            <div className="mt-4">
              <MathToolRenderer
                toolName="numberLine"
                parameters={{
                  min: 0,
                  max: 10,
                  intervals: [
                    { start: 5, end: null, startInclusive: false, color: "#10b981" }
                  ],
                  points: [
                    { value: 5, style: "open", color: "#10b981" }
                  ],
                  title: "x > 5"
                }}
              />
            </div>
          </div>

          {/* Example 7 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 7: Solve −3x + 4 ≤ 19
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Step 1:</strong> Subtract 4 from both sides
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-mono ml-4">
                −3x + 4 − 4 ≤ 19 − 4<br />
                −3x ≤ 15
              </p>
              <p className="text-red-700 dark:text-red-400 mt-2">
                <strong>Step 2:</strong> Divide both sides by −3 (NEGATIVE - must flip!)
              </p>
              <p className="text-red-700 dark:text-red-400 font-mono ml-4 font-bold">
                −3x ÷ (−3) ≤ 15 ÷ (−3)<br />
                x <strong>≥</strong> −5 <span className="text-red-600">← Sign flipped from ≤ to ≥</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Solution:</strong> x ≥ −5
              </p>
            </div>
            <div className="mt-4">
              <MathToolRenderer
                toolName="numberLine"
                parameters={{
                  min: -8,
                  max: 2,
                  intervals: [
                    { start: -5, end: null, startInclusive: true, color: "#ef4444" }
                  ],
                  points: [
                    { value: -5, style: "closed", color: "#ef4444" }
                  ],
                  title: "x ≥ −5"
                }}
              />
            </div>
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
              Practice 1: Addition/Subtraction
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Solve: x + 8 ≥ 15
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300">
                  x + 8 ≥ 15<br />
                  x + 8 − 8 ≥ 15 − 8<br />
                  <strong>x ≥ 7</strong>
                </p>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Division by Positive
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Solve: 6x &lt; 42
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
                  6x &lt; 42<br />
                  6x ÷ 6 &lt; 42 ÷ 6<br />
                  <strong>x &lt; 7</strong> (no sign flip - divided by positive 6)
                </p>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Division by Negative (Critical!)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Solve: −4x ≤ 20
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300">
                  −4x ≤ 20<br />
                  −4x ÷ (−4) ≤ 20 ÷ (−4)<br />
                  <strong className="text-red-600 dark:text-red-400">x ≥ −5</strong> (sign FLIPPED from ≤ to ≥ because we divided by negative!)
                </p>
              </div>
            )}
          </div>

          {/* Practice 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Multi-Step
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Solve: 2x + 5 &gt; 17
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300">
                  2x + 5 &gt; 17<br />
                  2x + 5 − 5 &gt; 17 − 5<br />
                  2x &gt; 12<br />
                  2x ÷ 2 &gt; 12 ÷ 2<br />
                  <strong>x &gt; 6</strong>
                </p>
              </div>
            )}
          </div>

          {/* Practice 5 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 5: Multi-Step with Negative
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Solve: −5x + 3 &lt; 23
            </p>
            <button
              onClick={() => setShowSolution5(!showSolution5)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution5 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution5 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300">
                  −5x + 3 &lt; 23<br />
                  −5x + 3 − 3 &lt; 23 − 3<br />
                  −5x &lt; 20<br />
                  −5x ÷ (−5) &lt; 20 ÷ (−5)<br />
                  <strong className="text-red-600 dark:text-red-400">x &gt; −4</strong> (sign FLIPPED from &lt; to &gt;)
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
            <li><strong>Addition/Subtraction:</strong> Add or subtract the same value from both sides - inequality stays the same</li>
            <li><strong>Multiply/Divide by Positive:</strong> Inequality direction stays the same</li>
            <li><strong className="text-red-600 dark:text-red-400">Multiply/Divide by NEGATIVE:</strong> YOU MUST FLIP THE INEQUALITY SIGN! (This is the #1 rule to remember!)</li>
            <li><strong>Multi-step:</strong> Use the same process as equations, but watch for that negative rule</li>
            <li><strong>Check your answer:</strong> Always ask "Did I multiply or divide by a negative?" before finalizing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
