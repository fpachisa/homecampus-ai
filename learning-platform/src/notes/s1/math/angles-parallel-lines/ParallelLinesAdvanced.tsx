import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function ParallelLinesAdvanced() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 dark:from-rose-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Parallel Lines - Advanced Problems</h1>
        <p className="mt-2 text-rose-100">Master multi-step problems, word problems, and proofs using parallel line properties</p>
      </div>

      <div className="p-6">
        {/* Section 1: Multi-Step Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Multi-Step Angle Problems
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many problems require combining <strong>multiple angle properties</strong> to find unknown angles.
              You may need to use parallel line rules, angles on a line, angles at a point, and vertically opposite angles together.
            </p>
            <div className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Strategy for Multi-Step Problems:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>Draw and label</strong> the diagram clearly (or redraw if messy)</li>
                <li><strong>Identify</strong> which angles you know and which you need to find</li>
                <li><strong>Look for patterns:</strong> F, Z, or C with parallel lines</li>
                <li><strong>Use basic rules:</strong> angles on a line, at a point, vertically opposite</li>
                <li><strong>Work step by step:</strong> Find one angle at a time, building up to the final answer</li>
                <li><strong>Check:</strong> Does your answer make sense? Do angles add up correctly?</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Combining F-Pattern and Angles on a Line
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              AB ∥ CD. A transversal crosses both lines. Angle p = <MathText>{'$65^{\\circ}$'}</MathText> is on line AB.
              Angle q is on line CD, on the same side of the transversal as angle p.
              Angle r is adjacent to angle q on line CD. Find angles q and r.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Find angle q using corresponding angles</p>
                <p className="ml-4">Angles p and q are corresponding (F-pattern, same side)</p>
                <p className="ml-4"><MathText>{'$q = p = 65^{\\circ}$'}</MathText> (corresponding angles equal)</p>
                <p><strong>Step 2:</strong> Find angle r using angles on a line</p>
                <p className="ml-4">Angles q and r are adjacent on line CD</p>
                <p className="ml-4"><MathText>{'$q + r = 180^{\\circ}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$65^{\\circ} + r = 180^{\\circ}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$r = 115^{\\circ}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$q = 65^{\\circ}$'}</MathText>, <MathText>{'$r = 115^{\\circ}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Three Parallel Lines
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Three parallel lines AB, CD, and EF are cut by a transversal. The angle between the transversal and AB is <MathText>{'$48^{\\circ}$'}</MathText>.
              Find the corresponding angles on CD and EF.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Angle on CD</p>
                <p className="ml-4">AB ∥ CD, so corresponding angle on CD = <MathText>{'$48^{\\circ}$'}</MathText></p>
                <p><strong>Step 2:</strong> Angle on EF</p>
                <p className="ml-4">CD ∥ EF, and the angle on CD is <MathText>{'$48^{\\circ}$'}</MathText></p>
                <p className="ml-4">So corresponding angle on EF = <MathText>{'$48^{\\circ}$'}</MathText></p>
                <p className="ml-4 mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-sm">
                  <strong>Key Insight:</strong> When you have multiple parallel lines, corresponding angles are equal throughout!
                </p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> Both angles = <MathText>{'$48^{\\circ}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Complex Multi-Step Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              PQ ∥ RS. Two transversals cross both lines, meeting at point T between the lines.
              At point T, one angle is <MathText>{'$75^{\\circ}$'}</MathText>. On line PQ, an angle is <MathText>{'$50^{\\circ}$'}</MathText>.
              Find the alternate angle to the <MathText>{'$50^{\\circ}$'}</MathText> angle on line RS.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Identify the pattern</p>
                <p className="ml-4">The <MathText>{'$50^{\\circ}$'}</MathText> angle on PQ and its alternate on RS form a Z-pattern</p>
                <p><strong>Step 2:</strong> Apply alternate angles rule</p>
                <p className="ml-4">PQ ∥ RS, so alternate angles are equal</p>
                <p className="ml-4">Alternate angle on RS = <MathText>{'$50^{\\circ}$'}</MathText></p>
                <p className="ml-4 mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-sm">
                  <strong>Note:</strong> The <MathText>{'$75^{\\circ}$'}</MathText> angle at T is extra information (a distractor) - we don't need it!
                </p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$50^{\\circ}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Multi-Step Challenge
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              AB ∥ CD. Angle a = <MathText>{'$110^{\\circ}$'}</MathText> on line AB. Angle b is vertically opposite to angle a.
              Angle c on line CD is a co-interior angle with angle b. Find angles b and c.
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
                  <p><strong>Step 1:</strong> Find angle b (vertically opposite to a)</p>
                  <p className="ml-4"><MathText>{'$b = a = 110^{\\circ}$'}</MathText> (vertically opposite angles equal)</p>
                  <p><strong>Step 2:</strong> Find angle c (co-interior with b)</p>
                  <p className="ml-4"><MathText>{'$b + c = 180^{\\circ}$'}</MathText> (co-interior angles, C-pattern)</p>
                  <p className="ml-4"><MathText>{'$110^{\\circ} + c = 180^{\\circ}$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$c = 70^{\\circ}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$b = 110^{\\circ}$'}</MathText>, <MathText>{'$c = 70^{\\circ}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Word Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Word Problems and Applications
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Parallel lines appear in many real-world situations: railway tracks, roads, architectural designs, ladder rungs, and more.
              Word problems help us apply angle properties to practical scenarios.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Approach to Word Problems:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>Read carefully</strong> - identify what's parallel and what's the transversal</li>
                <li><strong>Draw a diagram</strong> - label all given information</li>
                <li><strong>Identify patterns</strong> - F, Z, or C</li>
                <li><strong>Write equations</strong> - translate words to math</li>
                <li><strong>Solve</strong> - find the unknown</li>
                <li><strong>Answer in context</strong> - include units and context from the problem</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Railway Track Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Two railway tracks run parallel to each other. A footbridge crosses both tracks at an angle.
              The angle between the footbridge and the first track is <MathText>{'$72^{\\circ}$'}</MathText>.
              What is the corresponding angle with the second track?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Understand the setup</p>
                <p className="ml-4">• Railway tracks = two parallel lines</p>
                <p className="ml-4">• Footbridge = transversal</p>
                <p className="ml-4">• Given angle = <MathText>{'$72^{\\circ}$'}</MathText></p>
                <p><strong>Step 2:</strong> Identify the pattern</p>
                <p className="ml-4">Corresponding angles (F-pattern) - same position on each track</p>
                <p><strong>Step 3:</strong> Apply the rule</p>
                <p className="ml-4">Corresponding angles are equal when lines are parallel</p>
                <p className="ml-4">Angle with second track = <MathText>{'$72^{\\circ}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The angle between the footbridge and the second track is <MathText>{'$72^{\\circ}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 5 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 5: Ladder Against Wall
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A ladder leans against a wall. The wall and the ground are perpendicular (the ground is level).
              If a ladder makes an angle of <MathText>{'$68^{\\circ}$'}</MathText> with the ground,
              and we draw a line parallel to the ground through the middle of the ladder,
              what angle does the ladder make with this parallel line?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Understand the diagram</p>
                <p className="ml-4">• Ground and parallel line = two parallel lines</p>
                <p className="ml-4">• Ladder = transversal</p>
                <p className="ml-4">• Angle with ground = <MathText>{'$68^{\\circ}$'}</MathText></p>
                <p><strong>Step 2:</strong> Identify the pattern</p>
                <p className="ml-4">The angles are alternate (Z-pattern) - opposite sides of ladder, both interior</p>
                <p><strong>Step 3:</strong> Apply alternate angles rule</p>
                <p className="ml-4">Alternate angles are equal</p>
                <p className="ml-4">Angle with parallel line = <MathText>{'$68^{\\circ}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The ladder makes an angle of <MathText>{'$68^{\\circ}$'}</MathText> with the parallel line
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Road Intersection
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Two straight roads run parallel to each other. A third road (a "bypass") crosses both parallel roads.
              The bypass makes an angle of <MathText>{'$105^{\\circ}$'}</MathText> with the first road.
              What angles does it make with the second road? (There are two angles to find.)
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
                  <p><strong>Setup:</strong> Parallel roads, bypass = transversal</p>
                  <p><strong>Angle 1 (corresponding):</strong> Same side as <MathText>{'$105^{\\circ}$'}</MathText></p>
                  <p className="ml-4">Corresponding angle = <MathText>{'$105^{\\circ}$'}</MathText> (F-pattern)</p>
                  <p><strong>Angle 2 (on other side):</strong> Adjacent to first angle</p>
                  <p className="ml-4"><MathText>{'$105^{\\circ} + \\text{angle 2} = 180^{\\circ}$'}</MathText> (angles on line)</p>
                  <p className="ml-4">Angle 2 = <MathText>{'$75^{\\circ}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> The bypass makes angles of <MathText>{'$105^{\\circ}$'}</MathText> and <MathText>{'$75^{\\circ}$'}</MathText> with the second road
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Reasoning and Proofs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Reasoning and Simple Proofs
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In mathematics, we often need to <strong>explain our reasoning</strong> - not just find the answer, but show <em>why</em> it's correct.
            </p>
            <div className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>How to Write Angle Reasoning:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>State the angle you're finding</li>
                <li>Reference the known angle(s) you're using</li>
                <li>State the rule/property you're applying</li>
                <li>Calculate the result</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 6 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 6: Proof with Reasoning
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              AB ∥ CD. Angle x = <MathText>{'$115^{\\circ}$'}</MathText> on line AB. Prove that the co-interior angle y on line CD equals <MathText>{'$65^{\\circ}$'}</MathText>.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Proof:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Given:</strong> AB ∥ CD, angle x = <MathText>{'$115^{\\circ}$'}</MathText></p>
                <p><strong>To prove:</strong> Angle y = <MathText>{'$65^{\\circ}$'}</MathText></p>
                <p><strong>Proof:</strong></p>
                <p className="ml-4">1. Angles x and y are co-interior angles (they are on the same side of the transversal and between the parallel lines)</p>
                <p className="ml-4">2. When parallel lines are cut by a transversal, co-interior angles are supplementary (C-pattern)</p>
                <p className="ml-4">3. Therefore: <MathText>{'$x + y = 180^{\\circ}$'}</MathText></p>
                <p className="ml-4">4. Substituting <MathText>{'$x = 115^{\\circ}$'}</MathText>:</p>
                <p className="ml-4 pl-4"><MathText>{'$115^{\\circ} + y = 180^{\\circ}$'}</MathText></p>
                <p className="ml-4">5. Solving for y:</p>
                <p className="ml-4 pl-4"><MathText>{'$y = 180^{\\circ} - 115^{\\circ} = 65^{\\circ}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Conclusion:</strong> Therefore, angle y = <MathText>{'$65^{\\circ}$'}</MathText>, as required. ✓
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Explain Your Reasoning
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              PQ ∥ RS. Angle a = <MathText>{'$82^{\\circ}$'}</MathText> on PQ. Angle b is the alternate angle on RS.
              Explain why angle b = <MathText>{'$82^{\\circ}$'}</MathText> using clear mathematical reasoning.
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
                  <p><strong>Reasoning:</strong></p>
                  <p className="ml-4">1. Given: PQ ∥ RS, angle a = <MathText>{'$82^{\\circ}$'}</MathText> on PQ</p>
                  <p className="ml-4">2. Angles a and b are alternate angles (they are on opposite sides of the transversal and both between the parallel lines)</p>
                  <p className="ml-4">3. When two parallel lines are cut by a transversal, alternate angles are equal (Z-pattern property)</p>
                  <p className="ml-4">4. Therefore: <MathText>{'$b = a = 82^{\\circ}$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Conclusion:</strong> Angle b = <MathText>{'$82^{\\circ}$'}</MathText> because alternate angles are equal when lines are parallel.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Comprehensive Challenge
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              AB ∥ CD ∥ EF (three parallel lines). A transversal cuts all three lines.
              The angle with AB is <MathText>{'$55^{\\circ}$'}</MathText>. Find the corresponding angles with CD and EF, and explain your reasoning.
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
                  <p><strong>Given:</strong> AB ∥ CD ∥ EF, angle with AB = <MathText>{'$55^{\\circ}$'}</MathText></p>
                  <p><strong>To find:</strong> Corresponding angles with CD and EF</p>
                  <p><strong>Solution:</strong></p>
                  <p className="ml-4"><strong>Angle with CD:</strong></p>
                  <p className="ml-4 pl-4">Since AB ∥ CD, the corresponding angle with CD = <MathText>{'$55^{\\circ}$'}</MathText></p>
                  <p className="ml-4 pl-4">Reason: Corresponding angles are equal (F-pattern)</p>
                  <p className="ml-4"><strong>Angle with EF:</strong></p>
                  <p className="ml-4 pl-4">Since CD ∥ EF, and the angle with CD is <MathText>{'$55^{\\circ}$'}</MathText>,</p>
                  <p className="ml-4 pl-4">the corresponding angle with EF = <MathText>{'$55^{\\circ}$'}</MathText></p>
                  <p className="ml-4 pl-4">Reason: Corresponding angles are equal (F-pattern)</p>
                  <p className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                    <strong>Key Insight:</strong> With multiple parallel lines, all corresponding angles remain equal throughout!
                  </p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> Both angles = <MathText>{'$55^{\\circ}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-rose-50 dark:bg-rose-900/30 border-l-4 border-rose-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-rose-700 dark:text-rose-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Multi-step problems:</strong> Work systematically, one angle at a time, building toward the answer</li>
            <li><strong>Word problems:</strong> Draw a diagram first - identify what's parallel and what's the transversal</li>
            <li><strong>Multiple parallel lines:</strong> Corresponding angles stay equal throughout all parallel lines</li>
            <li><strong>Combine rules:</strong> You often need parallel line properties AND basic angle rules (at a point, on a line, vertical)</li>
            <li><strong>Show reasoning:</strong> State which angles you're using, which property applies, then calculate</li>
            <li><strong>Check your work:</strong> Do angles add up correctly? Does the answer make sense in context?</li>
            <li><strong>Real-world applications:</strong> Railway tracks, roads, architectural beams, ladder problems - parallel lines are everywhere!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
