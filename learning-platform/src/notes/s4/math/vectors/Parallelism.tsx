import React, { useState } from 'react';

const Parallelism: React.FC = () => {
  const [expandedSolutions, setExpandedSolutions] = useState<Set<string>>(new Set());

  const toggleSolution = (id: string) => {
    const newExpanded = new Set(expandedSolutions);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSolutions(newExpanded);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-700 dark:from-emerald-700 dark:to-green-800 text-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-3">Parallelism & Geometric Applications</h1>
        <p className="text-xl text-emerald-100 dark:text-emerald-200">
          Understanding parallel vectors and applying them to geometric proofs
        </p>
      </div>

      {/* Section 4A: Parallelism */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-6 pb-2 border-b-2 border-emerald-300 dark:border-emerald-600">
          Section 4A: Parallelism
        </h2>

        {/* Parallel Condition */}
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-600 dark:border-emerald-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300 mb-4">When Are Two Vectors Parallel?</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Two vectors are <span className="font-semibold text-emerald-600 dark:text-emerald-400">parallel</span> if one is a scalar multiple of the other.
          </p>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg mb-4">
            <p className="font-semibold text-emerald-700 dark:text-emerald-400 mb-3">Mathematical Definition:</p>
            <p className="text-gray-700 dark:text-gray-300 font-mono bg-emerald-100 dark:bg-emerald-900/30 px-3 py-2 rounded inline-block">
              <strong>a</strong> ∥ <strong>b</strong> ⟺ <strong>a</strong> = k<strong>b</strong> for some scalar k ≠ 0
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              The double arrow (⟺) means "if and only if" - it works both ways
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 p-4 rounded">
              <p className="font-semibold text-green-800 dark:text-green-400 mb-2">If k &gt; 0 (positive):</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Vectors point in the <span className="font-semibold">same direction</span>
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                Example: (2/4) and (1/2) are parallel with k = 2
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 p-4 rounded">
              <p className="font-semibold text-red-800 dark:text-red-400 mb-2">If k &lt; 0 (negative):</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Vectors point in <span className="font-semibold">opposite directions</span>
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                Example: (3/6) and (-1/-2) are parallel with k = -3
              </p>
            </div>
          </div>
        </div>

        {/* Component Test */}
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 dark:border-green-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-4">Testing Parallelism Using Components</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            For vectors in component form, check if the ratios of corresponding components are equal:
          </p>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg mb-4">
            <p className="text-gray-700 dark:text-gray-300 font-mono bg-green-100 dark:bg-green-900/30 px-3 py-2 rounded inline-block">
              (a₁/a₂) ∥ (b₁/b₂) ⟺ a₁/b₁ = a₂/b₂ = k
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              If the x-component ratio equals the y-component ratio, the vectors are parallel
            </p>
          </div>

          <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded">
            <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Steps to Test Parallelism:</p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 text-sm">
              <li>Write both vectors in component form</li>
              <li>Calculate the ratio a₁/b₁ (x-components)</li>
              <li>Calculate the ratio a₂/b₂ (y-components)</li>
              <li>If ratios are equal, vectors are parallel with scalar k = a₁/b₁</li>
            </ol>
          </div>
        </div>

        {/* Geometric Applications */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">Geometric Applications</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Parallel vectors are used to prove important geometric properties:
          </p>

          <div className="space-y-3 ml-4">
            <div>
              <p className="font-semibold text-blue-700 dark:text-blue-400">Parallel Lines:</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm ml-4">
                If direction vectors of two lines are parallel, then the lines are parallel
              </p>
            </div>

            <div>
              <p className="font-semibold text-blue-700 dark:text-blue-400">Collinear Points:</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm ml-4">
                Points A, B, C are collinear if AB̄ ∥ AC̄
              </p>
            </div>

            <div>
              <p className="font-semibold text-blue-700 dark:text-blue-400">Parallelograms:</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm ml-4">
                Opposite sides are parallel: AB̄ ∥ DC̄ and AD̄ ∥ BC̄
              </p>
            </div>

            <div>
              <p className="font-semibold text-blue-700 dark:text-blue-400">Similar Triangles:</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm ml-4">
                Corresponding sides are parallel with the same ratio k
              </p>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Worked Examples</h3>

          <div className="space-y-6">
            {/* Example 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 1: Testing Parallelism</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Determine if <strong>a</strong> = (6/9) and <strong>b</strong> = (4/6) are parallel.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Check if a₁/b₁ = a₂/b₂:<br /><br />

                  x-component ratio: a₁/b₁ = 6/4 = 3/2<br />
                  y-component ratio: a₂/b₂ = 9/6 = 3/2<br /><br />

                  Since 6/4 = 9/6 = 3/2, the ratios are equal.<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Yes, <strong>a</strong> and <strong>b</strong> are parallel with <strong>a</strong> = (3/2)<strong>b</strong> (k = 3/2, same direction)
                  </span>
                </p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 2: Opposite Directions</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Are <strong>p</strong> = 3<strong>i</strong> + 6<strong>j</strong> and <strong>q</strong> = -2<strong>i</strong> - 4<strong>j</strong> parallel?
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>p</strong> = (3/6), <strong>q</strong> = (-2/-4)<br /><br />

                  x-component ratio: 3/(-2) = -3/2<br />
                  y-component ratio: 6/(-4) = -3/2<br /><br />

                  Since 3/(-2) = 6/(-4) = -3/2, the ratios are equal.<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Yes, <strong>p</strong> and <strong>q</strong> are parallel with <strong>p</strong> = (-3/2)<strong>q</strong> (k = -3/2, opposite directions)
                  </span>
                </p>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 3: Finding the Scalar k</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Given <strong>a</strong> = (2/5) and <strong>b</strong> = (8/20), find the scalar k such that <strong>b</strong> = k<strong>a</strong>.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  If <strong>b</strong> = k<strong>a</strong>, then (8/20) = k(2/5)<br /><br />

                  Using x-components: 8 = k(2), so k = 8/2 = 4<br />
                  Check with y-components: 20 = k(5) = 4(5) = 20 ✓<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    k = 4 (so <strong>b</strong> = 4<strong>a</strong>)
                  </span>
                </p>
              </div>
            </div>

            {/* Example 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 4: Proving Parallel Lines</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Points A(1, 2), B(3, 5), C(4, 1), and D(6, 4) form a quadrilateral.
                Show that AB is parallel to CD.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Find direction vectors:<br /><br />

                  AB̄ = <strong>b</strong> - <strong>a</strong> = (3/5) - (1/2) = (2/3)<br />
                  CD̄ = <strong>d</strong> - <strong>c</strong> = (6/4) - (4/1) = (2/3)<br /><br />

                  Since AB̄ = CD̄, we have AB̄ ∥ CD̄ with k = 1<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    AB is parallel to CD (same direction and same magnitude - they're equal vectors)
                  </span>
                </p>
              </div>
            </div>

            {/* Example 5 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 5: Collinear Points</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Show that points P(2, 3), Q(5, 6), and R(8, 9) are collinear.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Points are collinear if PQ̄ ∥ PR̄<br /><br />

                  PQ̄ = (5/6) - (2/3) = (3/3)<br />
                  PR̄ = (8/9) - (2/3) = (6/6)<br /><br />

                  Check parallelism:<br />
                  x-ratio: 3/6 = 1/2<br />
                  y-ratio: 3/6 = 1/2<br /><br />

                  Since ratios are equal, PQ̄ ∥ PR̄<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    P, Q, and R are collinear (they lie on the same straight line)
                  </span>
                </p>
              </div>
            </div>

            {/* Example 6 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 6: Finding Unknown Components</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                If <strong>a</strong> = (4/6) is parallel to <strong>b</strong> = (10/y), find the value of y.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  For parallel vectors: a₁/b₁ = a₂/b₂<br /><br />

                  4/10 = 6/y<br />
                  2/5 = 6/y <span className="text-sm italic">(simplify left side)</span><br />
                  2y = 5 × 6 <span className="text-sm italic">(cross multiply)</span><br />
                  2y = 30<br />
                  y = 15<br /><br />

                  Check: 4/10 = 2/5 and 6/15 = 2/5 ✓<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    y = 15
                  </span>
                </p>
              </div>
            </div>

            {/* Example 7 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 7: Parallelogram Proof</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                ABCD is a quadrilateral with A(0, 0), B(4, 2), C(7, 6), and D(3, 4).
                Prove it is a parallelogram by showing opposite sides are parallel.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Find all side vectors:<br /><br />

                  AB̄ = (4/2) - (0/0) = (4/2)<br />
                  DC̄ = (7/6) - (3/4) = (4/2)<br />
                  AD̄ = (3/4) - (0/0) = (3/4)<br />
                  BC̄ = (7/6) - (4/2) = (3/4)<br /><br />

                  Check opposite sides:<br />
                  AB̄ = DC̄ = (4/2), so AB ∥ DC ✓<br />
                  AD̄ = BC̄ = (3/4), so AD ∥ BC ✓<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    ABCD is a parallelogram (both pairs of opposite sides are parallel)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Practice Problems</h3>

          <div className="space-y-4">
            {[
              {
                id: '4a-1',
                question: 'Are <strong>u</strong> = (10/15) and <strong>v</strong> = (2/3) parallel? If so, find k.',
                solution: 'x-ratio: 10/2 = 5, y-ratio: 15/3 = 5. Yes, parallel with k = 5 (<strong>u</strong> = 5<strong>v</strong>)'
              },
              {
                id: '4a-2',
                question: 'Determine if <strong>p</strong> = 4<strong>i</strong> - 6<strong>j</strong> and <strong>q</strong> = -6<strong>i</strong> + 9<strong>j</strong> are parallel.',
                solution: '<strong>p</strong> = (4/-6), <strong>q</strong> = (-6/9). x-ratio: 4/(-6) = -2/3, y-ratio: -6/9 = -2/3. Yes, parallel with k = -2/3 (opposite directions)'
              },
              {
                id: '4a-3',
                question: 'If (3/m) ∥ (9/21), find m.',
                solution: '3/9 = m/21. 1/3 = m/21. m = 21/3 = 7'
              },
              {
                id: '4a-4',
                question: 'Show that points A(1, 2), B(4, 5), and C(7, 8) are collinear.',
                solution: 'AB̄ = (3/3), AC̄ = (6/6). x-ratio: 3/6 = 1/2, y-ratio: 3/6 = 1/2. AB̄ ∥ AC̄, so points are collinear'
              },
              {
                id: '4a-5',
                question: 'Points P(2, 1), Q(5, 4), R(8, 7), S(5, 4) form quadrilateral PQRS. Is it a parallelogram?',
                solution: 'PQ̄ = (3/3), SR̄ = (3/3), so PQ ∥ SR. PS̄ = (3/3), QR̄ = (3/3), so PS ∥ QR. Yes, it is a parallelogram'
              },
              {
                id: '4a-6',
                question: 'Given <strong>a</strong> = (k/12) is parallel to <strong>b</strong> = (3/4), find all possible values of k.',
                solution: 'k/3 = 12/4. k/3 = 3. k = 9'
              }
            ].map((problem) => (
              <div key={problem.id} className="border border-indigo-300 dark:border-indigo-700 rounded p-4">
                <p className="text-gray-800 dark:text-gray-200 font-medium mb-2" dangerouslySetInnerHTML={{ __html: problem.question }} />
                <button
                  onClick={() => toggleSolution(problem.id)}
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold text-sm"
                >
                  {expandedSolutions.has(problem.id) ? '▼ Hide Solution' : '▶ Show Solution'}
                </button>
                {expandedSolutions.has(problem.id) && (
                  <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border-l-4 border-indigo-500 dark:border-indigo-400">
                    <p className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: problem.solution }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 border-2 border-emerald-300 dark:border-emerald-600 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">Key Takeaways</h2>
        <ul className="space-y-2 text-gray-800 dark:text-gray-200">
          <li className="flex items-start">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold mr-2">✓</span>
            <span><strong>Parallel condition:</strong> <strong>a</strong> ∥ <strong>b</strong> ⟺ <strong>a</strong> = k<strong>b</strong> for some scalar k ≠ 0</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold mr-2">✓</span>
            <span><strong>Component test:</strong> a₁/b₁ = a₂/b₂ = k (ratios of components must be equal)</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold mr-2">✓</span>
            <span><strong>Same direction:</strong> k &gt; 0 means vectors point the same way</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold mr-2">✓</span>
            <span><strong>Opposite direction:</strong> k &lt; 0 means vectors point opposite ways</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold mr-2">✓</span>
            <span><strong>Collinear points:</strong> A, B, C are collinear if AB̄ ∥ AC̄</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold mr-2">✓</span>
            <span><strong>Parallelogram:</strong> Opposite sides parallel: AB̄ ∥ DC̄ and AD̄ ∥ BC̄</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold mr-2">✓</span>
            <span><strong>Finding k:</strong> Use one component ratio: k = a₁/b₁ = a₂/b₂</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold mr-2">✓</span>
            <span><strong>Applications:</strong> Proves parallel lines, collinearity, and properties of quadrilaterals</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Parallelism;
