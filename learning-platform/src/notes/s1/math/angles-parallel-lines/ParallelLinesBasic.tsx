import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function ParallelLinesBasic() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);
  const [showSolution6, setShowSolution6] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Parallel Lines - Basic Properties</h1>
        <p className="mt-2 text-indigo-100">Master corresponding angles (F-pattern), alternate angles (Z-pattern), and co-interior angles (C-pattern)</p>
      </div>

      <div className="p-6">
        {/* Introduction */}
        <section className="mb-8">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>What are Parallel Lines?</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Parallel lines</strong> are lines that <strong>never meet</strong>, no matter how far they are extended.
              They are always the same distance apart and are marked with matching arrow symbols (→ →).
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When a <strong>transversal</strong> (a line that crosses both parallel lines) cuts through parallel lines,
              it creates <strong>8 angles</strong> with special relationships.
            </p>
          </div>
        </section>

        {/* Section 1: Corresponding Angles (F-pattern) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Corresponding Angles (F-Pattern)
          </h2>

          <div className="mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Key Rule:</strong>
              </p>
              <p className="text-xl text-center font-semibold text-blue-800 dark:text-blue-300 my-3">
                When parallel lines are cut by a transversal, corresponding angles are EQUAL
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>How to Spot Corresponding Angles (F-Pattern):</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>They are on the <strong>same side</strong> of the transversal</li>
                <li>One is <strong>above</strong> the top parallel line, the other is <strong>above</strong> the bottom parallel line</li>
                <li>They are in <strong>matching positions</strong> at each intersection</li>
                <li>When you trace them with the transversal, it makes an <strong>"F" shape</strong></li>
                <li>There are <strong>4 pairs</strong> of corresponding angles when a transversal crosses parallel lines</li>
              </ul>
            </div>

            {/* Visual Example - F Pattern */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Visual Example - Corresponding Angles (F-Pattern):</h4>
              <MathToolRenderer
                toolName="parallelLinesTransversal"
                parameters={{
                  knownAngle: 65,
                  knownPosition: 0,
                  highlightPattern: 'corresponding',
                  labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
                }}
                caption="Corresponding angles are in matching positions - notice the F-pattern"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                All corresponding angle pairs are equal: a = e, b = f, c = g, d = h
              </p>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Finding a Corresponding Angle
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Parallel lines AB and CD are cut by transversal EF. If one angle is <MathText>{'$65^{\\circ}$'}</MathText>,
              find the corresponding angle.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Identify the pattern</p>
                <p className="ml-4">The angle is on one parallel line, and we need the matching position on the other parallel line</p>
                <p><strong>Step 2:</strong> Apply the F-pattern rule</p>
                <p className="ml-4">Corresponding angles are equal when lines are parallel</p>
                <p><strong>Step 3:</strong> Find the answer</p>
                <p className="ml-4">The corresponding angle = <MathText>{'$65^{\\circ}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$65^{\\circ}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Corresponding Angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Lines PQ and RS are parallel. A transversal cuts them forming an angle of <MathText>{'$110^{\\circ}$'}</MathText> with PQ.
              What is the corresponding angle with RS?
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
                  <p><strong>Rule:</strong> Corresponding angles are equal (F-pattern)</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$110^{\\circ}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Alternate Angles (Z-pattern) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Alternate Angles (Z-Pattern)
          </h2>

          <div className="mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Key Rule:</strong>
              </p>
              <p className="text-xl text-center font-semibold text-green-800 dark:text-green-300 my-3">
                When parallel lines are cut by a transversal, alternate angles are EQUAL
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>How to Spot Alternate Angles (Z-Pattern):</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>They are on <strong>opposite sides</strong> of the transversal</li>
                <li>They are <strong>between</strong> the two parallel lines (interior angles)</li>
                <li>When you trace them with the transversal, it makes a <strong>"Z" shape</strong> (or reverse Z)</li>
                <li>There are <strong>2 pairs</strong> of alternate angles</li>
                <li>Also called <strong>"alternate interior angles"</strong></li>
              </ul>
            </div>

            {/* Visual Example - Z Pattern */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Visual Example - Alternate Angles (Z-Pattern):</h4>
              <MathToolRenderer
                toolName="parallelLinesTransversal"
                parameters={{
                  knownAngle: 75,
                  knownPosition: 2,
                  highlightPattern: 'alternate',
                  labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
                }}
                caption="Alternate angles are on opposite sides, both interior - notice the Z-pattern"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                The two pairs of alternate angles are equal: b = g, and d = e
              </p>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Finding an Alternate Angle
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Lines AB ∥ CD (AB is parallel to CD). A transversal crosses them. One interior angle is <MathText>{'$75^{\\circ}$'}</MathText>.
              Find its alternate angle.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Check the angle is interior (between the parallel lines)</p>
                <p className="ml-4">The angle is between AB and CD ✓</p>
                <p><strong>Step 2:</strong> Find the angle on the opposite side of the transversal</p>
                <p className="ml-4">Look for the Z-pattern</p>
                <p><strong>Step 3:</strong> Apply the rule</p>
                <p className="ml-4">Alternate angles are equal = <MathText>{'$75^{\\circ}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$75^{\\circ}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Using Algebra with Alternate Angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              AB ∥ CD. Two alternate angles are <MathText>{'$(3x + 15)^{\\circ}$'}</MathText> and <MathText>{'$(5x - 25)^{\\circ}$'}</MathText>. Find <MathText>x</MathText>.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Apply alternate angles rule</p>
                <p className="ml-4">Alternate angles are equal, so:</p>
                <p className="ml-4"><MathText>{'$3x + 15 = 5x - 25$'}</MathText></p>
                <p><strong>Step 2:</strong> Rearrange</p>
                <p className="ml-4"><MathText>{'$15 + 25 = 5x - 3x$'}</MathText></p>
                <p className="ml-4"><MathText>{'$40 = 2x$'}</MathText></p>
                <p><strong>Step 3:</strong> Solve</p>
                <p className="ml-4"><MathText>{'$x = 20$'}</MathText></p>
                <p><strong>Check:</strong> <MathText>{'$3(20) + 15 = 75^{\\circ}$'}</MathText>, <MathText>{'$5(20) - 25 = 75^{\\circ}$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$x = 20$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Alternate Angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              PQ ∥ RS. If one alternate interior angle is <MathText>{'$48^{\\circ}$'}</MathText>, what is the other alternate interior angle?
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
                  <p><strong>Rule:</strong> Alternate angles are equal (Z-pattern)</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$48^{\\circ}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Co-interior Angles (C-pattern) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Co-interior Angles (C-Pattern)
          </h2>

          <div className="mb-6">
            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Key Rule:</strong>
              </p>
              <p className="text-xl text-center font-semibold text-amber-800 dark:text-amber-300 my-3">
                When parallel lines are cut by a transversal, co-interior angles are SUPPLEMENTARY (sum to 180°)
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>How to Spot Co-interior Angles (C-Pattern):</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>They are on the <strong>same side</strong> of the transversal</li>
                <li>They are <strong>between</strong> the two parallel lines (both interior)</li>
                <li>When you trace them with the transversal, it makes a <strong>"C" shape</strong> (or reverse C)</li>
                <li>They <strong>ADD UP to 180°</strong> (supplementary) - NOT equal!</li>
                <li>There are <strong>2 pairs</strong> of co-interior angles</li>
                <li>Also called <strong>"allied angles"</strong> or <strong>"consecutive interior angles"</strong></li>
              </ul>
            </div>

            {/* Visual Example - C Pattern */}
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Visual Example - Co-interior Angles (C-Pattern):</h4>
              <MathToolRenderer
                toolName="parallelLinesTransversal"
                parameters={{
                  knownAngle: 70,
                  knownPosition: 2,
                  highlightPattern: 'cointerior',
                  labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
                }}
                caption="Co-interior angles are on same side, both interior - notice the C-pattern. They sum to 180°"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                The two pairs sum to 180°: d + g = 180°, and b + e = 180°
              </p>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Finding a Co-interior Angle
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              AB ∥ CD. One co-interior angle is <MathText>{'$70^{\\circ}$'}</MathText>. Find the other co-interior angle.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Recall the rule</p>
                <p className="ml-4">Co-interior angles sum to <MathText>{'$180^{\\circ}$'}</MathText></p>
                <p><strong>Step 2:</strong> Set up equation</p>
                <p className="ml-4"><MathText>{'$70^{\\circ} + \\text{other angle} = 180^{\\circ}$'}</MathText></p>
                <p><strong>Step 3:</strong> Solve</p>
                <p className="ml-4"><MathText>{'$\\text{other angle} = 180^{\\circ} - 70^{\\circ} = 110^{\\circ}$'}</MathText></p>
                <p><strong>Check:</strong> <MathText>{'$70^{\\circ} + 110^{\\circ} = 180^{\\circ}$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$110^{\\circ}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 5 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 5: Algebra with Co-interior Angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              PQ ∥ RS. Two co-interior angles are <MathText>{'$(2x + 30)^{\\circ}$'}</MathText> and <MathText>{'$(3x - 10)^{\\circ}$'}</MathText>. Find <MathText>x</MathText> and both angles.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Apply co-interior rule</p>
                <p className="ml-4">Co-interior angles sum to <MathText>{'$180^{\\circ}$'}</MathText>, so:</p>
                <p className="ml-4"><MathText>{'$(2x + 30) + (3x - 10) = 180$'}</MathText></p>
                <p><strong>Step 2:</strong> Simplify</p>
                <p className="ml-4"><MathText>{'$5x + 20 = 180$'}</MathText></p>
                <p><strong>Step 3:</strong> Solve</p>
                <p className="ml-4"><MathText>{'$5x = 160$'}</MathText></p>
                <p className="ml-4"><MathText>{'$x = 32$'}</MathText></p>
                <p><strong>Step 4:</strong> Find the angles</p>
                <p className="ml-4">First: <MathText>{'$2x + 30 = 2(32) + 30 = 94^{\\circ}$'}</MathText></p>
                <p className="ml-4">Second: <MathText>{'$3x - 10 = 3(32) - 10 = 86^{\\circ}$'}</MathText></p>
                <p><strong>Check:</strong> <MathText>{'$94^{\\circ} + 86^{\\circ} = 180^{\\circ}$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$x = 32$'}</MathText>; angles are <MathText>{'$94^{\\circ}$'}</MathText> and <MathText>{'$86^{\\circ}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Co-interior Angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Lines AB and CD are parallel. One co-interior angle is <MathText>{'$125^{\\circ}$'}</MathText>. Find the other co-interior angle.
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Rule:</strong> Co-interior angles sum to <MathText>{'$180^{\\circ}$'}</MathText> (C-pattern)</p>
                  <p><strong>Calculation:</strong> <MathText>{'$180^{\\circ} - 125^{\\circ} = 55^{\\circ}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$55^{\\circ}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Comparison and Mixed Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Comparing the Three Patterns
          </h2>

          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 text-center">F-Pattern</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  <strong>Corresponding Angles</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">• Same side of transversal</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">• Matching positions</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">• <strong className="text-blue-600 dark:text-blue-400">EQUAL</strong></p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2 text-center">Z-Pattern</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  <strong>Alternate Angles</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">• Opposite sides of transversal</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">• Between parallel lines</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">• <strong className="text-green-600 dark:text-green-400">EQUAL</strong></p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 p-4 rounded">
                <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2 text-center">C-Pattern</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  <strong>Co-interior Angles</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">• Same side of transversal</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">• Between parallel lines</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">• <strong className="text-amber-600 dark:text-amber-400">SUM = 180°</strong></p>
              </div>
            </div>
          </div>

          {/* Practice Problem 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Identify the Pattern
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              AB ∥ CD cut by transversal EF. Angle p and angle q are on opposite sides of EF and both between the parallel lines.
              If angle p = <MathText>{'$52^{\\circ}$'}</MathText>, what is angle q? What pattern is this?
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Analysis:</strong></p>
                  <p className="ml-4">• Opposite sides of transversal ✓</p>
                  <p className="ml-4">• Both between parallel lines ✓</p>
                  <p className="ml-4">→ This is the <strong className="text-green-600 dark:text-green-400">Z-pattern (Alternate Angles)</strong></p>
                  <p><strong>Rule:</strong> Alternate angles are equal</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> Angle q = <MathText>{'$52^{\\circ}$'}</MathText> (alternate angles)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 5 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 5: Mixed Algebraic Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              PQ ∥ RS. Angle a = <MathText>{'$(4x + 20)^{\\circ}$'}</MathText> and angle b = <MathText>{'$(6x - 30)^{\\circ}$'}</MathText> are corresponding angles.
              Find <MathText>x</MathText> and both angles.
            </p>
            <button
              onClick={() => setShowSolution5(!showSolution5)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution5 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution5 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Pattern:</strong> Corresponding angles (F-pattern) are equal</p>
                  <p><strong>Equation:</strong> <MathText>{'$4x + 20 = 6x - 30$'}</MathText></p>
                  <p><strong>Rearrange:</strong> <MathText>{'$20 + 30 = 6x - 4x$'}</MathText></p>
                  <p><strong>Solve:</strong> <MathText>{'$50 = 2x$'}</MathText>, so <MathText>{'$x = 25$'}</MathText></p>
                  <p><strong>Angle a:</strong> <MathText>{'$4(25) + 20 = 120^{\\circ}$'}</MathText></p>
                  <p><strong>Angle b:</strong> <MathText>{'$6(25) - 30 = 120^{\\circ}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$x = 25$'}</MathText>; both angles = <MathText>{'$120^{\\circ}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 6 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 6: Challenge - Which Pattern?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              AB ∥ CD. Angle m = <MathText>{'$(5x + 15)^{\\circ}$'}</MathText> and angle n = <MathText>{'$(2x + 60)^{\\circ}$'}</MathText> are co-interior angles.
              Find <MathText>x</MathText> and both angles.
            </p>
            <button
              onClick={() => setShowSolution6(!showSolution6)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution6 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution6 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Pattern:</strong> Co-interior angles (C-pattern) sum to <MathText>{'$180^{\\circ}$'}</MathText></p>
                  <p><strong>Equation:</strong> <MathText>{'$(5x + 15) + (2x + 60) = 180$'}</MathText></p>
                  <p><strong>Simplify:</strong> <MathText>{'$7x + 75 = 180$'}</MathText></p>
                  <p><strong>Solve:</strong> <MathText>{'$7x = 105$'}</MathText>, so <MathText>{'$x = 15$'}</MathText></p>
                  <p><strong>Angle m:</strong> <MathText>{'$5(15) + 15 = 90^{\\circ}$'}</MathText></p>
                  <p><strong>Angle n:</strong> <MathText>{'$2(15) + 60 = 90^{\\circ}$'}</MathText></p>
                  <p><strong>Check:</strong> <MathText>{'$90^{\\circ} + 90^{\\circ} = 180^{\\circ}$'}</MathText> ✓</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$x = 15$'}</MathText>; both angles = <MathText>{'$90^{\\circ}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>F-Pattern (Corresponding):</strong> Same side of transversal, matching positions → <strong>EQUAL</strong></li>
            <li><strong>Z-Pattern (Alternate):</strong> Opposite sides of transversal, both interior → <strong>EQUAL</strong></li>
            <li><strong>C-Pattern (Co-interior):</strong> Same side of transversal, both interior → <strong>SUM = 180°</strong></li>
            <li>All three patterns ONLY work when lines are <strong>parallel</strong> - check for parallel marks (→ →)</li>
            <li>For algebraic problems: set angles equal (F or Z) OR set sum to 180° (C)</li>
            <li>Memorize: <strong>F = Equal, Z = Equal, C = 180</strong></li>
            <li>Quick check: If both patterns are between the lines, it's either Z (opposite sides) or C (same side)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
