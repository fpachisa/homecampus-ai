import React, { useState } from 'react';

const MagnitudeOperations: React.FC = () => {
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
      <div className="bg-gradient-to-r from-orange-600 to-amber-700 dark:from-orange-700 dark:to-amber-800 text-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-3">Magnitude & Complex Operations</h1>
        <p className="text-xl text-orange-100 dark:text-orange-200">
          Understanding magnitude, unit vectors, and solving complex vector equations
        </p>
      </div>

      {/* Section 3A: The Magnitude of a Vector */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-orange-700 dark:text-orange-400 mb-6 pb-2 border-b-2 border-orange-300 dark:border-orange-600">
          Section 3A: The Magnitude of a Vector
        </h2>

        {/* Magnitude Definition */}
        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-600 dark:border-orange-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-300 mb-4">What is Magnitude?</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The <span className="font-semibold text-orange-600 dark:text-orange-400">magnitude</span> (or length) of a vector is the distance from its tail to its head.
            It's denoted by |<strong>v</strong>| and is always positive or zero.
          </p>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-orange-700 dark:text-orange-400 mb-2">2D Magnitude (Pythagoras Theorem):</p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 font-mono bg-orange-100 dark:bg-orange-900/30 px-3 py-2 rounded inline-block">
                  |<strong>v</strong>| = √(x² + y²)
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-2">
                  for <strong>v</strong> = (x/y) or x<strong>i</strong> + y<strong>j</strong>
                </p>
              </div>

              <div className="pt-3 border-t border-orange-200 dark:border-orange-800">
                <p className="font-semibold text-orange-700 dark:text-orange-400 mb-2">3D Magnitude:</p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 font-mono bg-orange-100 dark:bg-orange-900/30 px-3 py-2 rounded inline-block">
                  |<strong>v</strong>| = √(x² + y² + z²)
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-2">
                  for <strong>v</strong> = (x/y/z) or x<strong>i</strong> + y<strong>j</strong> + z<strong>k</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Distance Between Points */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-600 dark:border-amber-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-4">Distance Between Two Points</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The distance between points A and B can be found using the magnitude of the displacement vector:
          </p>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 font-mono bg-amber-100 dark:bg-amber-900/30 px-3 py-2 rounded inline-block">
              Distance AB = |AB̄| = |<strong>b</strong> - <strong>a</strong>|
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              If <strong>a</strong> = (x₁/y₁) and <strong>b</strong> = (x₂/y₂), then:<br />
              Distance = √((x₂-x₁)² + (y₂-y₁)²)
            </p>
          </div>
        </div>

        {/* Unit Vectors */}
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 dark:border-green-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-4">Unit Vectors</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A <span className="font-semibold text-green-600 dark:text-green-400">unit vector</span> is a vector with magnitude 1.
            It indicates direction only.
          </p>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg mb-4">
            <p className="font-semibold text-green-700 dark:text-green-400 mb-3">To find the unit vector in the direction of <strong>v</strong>:</p>
            <p className="text-gray-700 dark:text-gray-300 ml-4 font-mono bg-green-100 dark:bg-green-900/30 px-3 py-2 rounded inline-block">
              <strong>û</strong> = <strong>v</strong>/|<strong>v</strong>|
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              Divide the vector by its magnitude to get a unit vector in the same direction
            </p>
          </div>

          <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded">
            <p className="font-semibold text-green-800 dark:text-green-300">Properties of Unit Vectors:</p>
            <ul className="text-gray-700 dark:text-gray-300 mt-2 ml-4 space-y-1">
              <li>• Magnitude is always 1: |<strong>û</strong>| = 1</li>
              <li>• Points in same direction as original vector</li>
              <li>• <strong>i</strong>, <strong>j</strong>, <strong>k</strong> are standard unit vectors</li>
            </ul>
          </div>
        </div>

        {/* Worked Examples 3A */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Worked Examples</h3>

          <div className="space-y-6">
            {/* Example 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 1: Finding Magnitude (2D)</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Find the magnitude of <strong>v</strong> = (3/4).
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>v</strong> = (3/4), so x = 3 and y = 4<br /><br />

                  |<strong>v</strong>| = √(x² + y²)<br />
                  = √(3² + 4²)<br />
                  = √(9 + 16)<br />
                  = √25<br />
                  = 5<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    |<strong>v</strong>| = 5 units
                  </span>
                </p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 2: Finding Magnitude (3D)</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Find the magnitude of <strong>p</strong> = 2<strong>i</strong> - 3<strong>j</strong> + 6<strong>k</strong>.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>p</strong> = 2<strong>i</strong> - 3<strong>j</strong> + 6<strong>k</strong> = (2/-3/6)<br /><br />

                  |<strong>p</strong>| = √(x² + y² + z²)<br />
                  = √(2² + (-3)² + 6²)<br />
                  = √(4 + 9 + 36)<br />
                  = √49<br />
                  = 7<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    |<strong>p</strong>| = 7 units
                  </span>
                </p>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 3: Distance Between Points</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Find the distance between A(1, 2) and B(5, 5).
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>a</strong> = (1/2), <strong>b</strong> = (5/5)<br /><br />

                  AB̄ = <strong>b</strong> - <strong>a</strong> = (5/5) - (1/2) = (4/3)<br /><br />

                  Distance = |AB̄| = √(4² + 3²)<br />
                  = √(16 + 9)<br />
                  = √25<br />
                  = 5<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Distance AB = 5 units
                  </span>
                </p>
              </div>
            </div>

            {/* Example 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 4: Finding a Unit Vector</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Find the unit vector in the direction of <strong>v</strong> = (5/12).
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  First find the magnitude:<br />
                  |<strong>v</strong>| = √(5² + 12²) = √(25 + 144) = √169 = 13<br /><br />

                  Unit vector: <strong>û</strong> = <strong>v</strong>/|<strong>v</strong>|<br />
                  = (5/12)/13<br />
                  = (5/13 / 12/13)<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    <strong>û</strong> = (5/13, 12/13) or (5/13)<strong>i</strong> + (12/13)<strong>j</strong>
                  </span><br /><br />

                  Check: |(5/13, 12/13)| = √((5/13)² + (12/13)²) = √(25/169 + 144/169) = √(169/169) = 1 ✓
                </p>
              </div>
            </div>

            {/* Example 5 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 5: Using Dot Product Property</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                If <strong>a</strong> = 3<strong>i</strong> + 4<strong>j</strong>, find |<strong>a</strong>| using the property <strong>a</strong> · <strong>a</strong> = |<strong>a</strong>|².
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>a</strong> · <strong>a</strong> = (3<strong>i</strong> + 4<strong>j</strong>) · (3<strong>i</strong> + 4<strong>j</strong>)<br />
                  = 3(3) + 4(4)<br />
                  = 9 + 16<br />
                  = 25<br /><br />

                  Since <strong>a</strong> · <strong>a</strong> = |<strong>a</strong>|²:<br />
                  |<strong>a</strong>|² = 25<br />
                  |<strong>a</strong>| = √25 = 5<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    |<strong>a</strong>| = 5 units
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems 3A */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Practice Problems</h3>

          <div className="space-y-4">
            {[
              {
                id: '3a-1',
                question: 'Find the magnitude of <strong>v</strong> = (8/15).',
                solution: '|<strong>v</strong>| = √(8² + 15²) = √(64 + 225) = √289 = 17'
              },
              {
                id: '3a-2',
                question: 'Find the magnitude of <strong>p</strong> = <strong>i</strong> - 2<strong>j</strong> + 2<strong>k</strong>.',
                solution: '|<strong>p</strong>| = √(1² + (-2)² + 2²) = √(1 + 4 + 4) = √9 = 3'
              },
              {
                id: '3a-3',
                question: 'Find the distance between P(3, 7) and Q(7, 10).',
                solution: 'PQ̄ = (7/10) - (3/7) = (4/3). Distance = √(4² + 3²) = √25 = 5'
              },
              {
                id: '3a-4',
                question: 'Find the unit vector in the direction of <strong>a</strong> = (3/-4).',
                solution: '|<strong>a</strong>| = √(9 + 16) = 5. <strong>û</strong> = (3/-4)/5 = (3/5, -4/5) or (3/5)<strong>i</strong> - (4/5)<strong>j</strong>'
              },
              {
                id: '3a-5',
                question: 'If |<strong>v</strong>| = 10 and <strong>v</strong> = k<strong>i</strong> + 6<strong>j</strong>, find k.',
                solution: '|<strong>v</strong>|² = k² + 36 = 100, so k² = 64. Therefore k = ±8'
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

      {/* Section 3B: Complex Vector Operations */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-red-700 dark:text-red-400 mb-6 pb-2 border-b-2 border-red-300 dark:border-red-600">
          Section 3B: Complex Vector Operations
        </h2>

        {/* Algebraic Properties */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 dark:border-red-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-4">Properties of Vector Algebra</h3>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <span className="font-semibold text-red-700 dark:text-red-400">Distributive:</span>
                <span className="ml-2 font-mono bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">k(<strong>a</strong> + <strong>b</strong>) = k<strong>a</strong> + k<strong>b</strong></span>
              </div>
              <div>
                <span className="font-semibold text-red-700 dark:text-red-400">Distributive (scalars):</span>
                <span className="ml-2 font-mono bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">(k + m)<strong>a</strong> = k<strong>a</strong> + m<strong>a</strong></span>
              </div>
              <div>
                <span className="font-semibold text-red-700 dark:text-red-400">Associative:</span>
                <span className="ml-2 font-mono bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">(<strong>a</strong> + <strong>b</strong>) + <strong>c</strong> = <strong>a</strong> + (<strong>b</strong> + <strong>c</strong>)</span>
              </div>
              <div>
                <span className="font-semibold text-red-700 dark:text-red-400">Associative (scalars):</span>
                <span className="ml-2 font-mono bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">k(m<strong>a</strong>) = (km)<strong>a</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Solving Vector Equations */}
        <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-600 dark:border-pink-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-pink-800 dark:text-pink-300 mb-4">Solving Vector Equations</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Just like algebraic equations, you can solve for unknown vectors by isolating the variable:
          </p>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <p className="font-semibold text-pink-700 dark:text-pink-400 mb-3">Steps to solve vector equations:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Expand any brackets using distributive property</li>
              <li>Collect like terms (group vectors with same variable)</li>
              <li>Isolate the unknown vector</li>
              <li>Divide by the scalar coefficient if needed</li>
            </ol>
          </div>
        </div>

        {/* Worked Examples 3B */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Worked Examples</h3>

          <div className="space-y-6">
            {/* Example 6 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 6: Simplifying Vector Expressions</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Simplify: 3(<strong>a</strong> + 2<strong>b</strong>) - 2(<strong>a</strong> - <strong>b</strong>)
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  = 3<strong>a</strong> + 6<strong>b</strong> - 2<strong>a</strong> + 2<strong>b</strong> <span className="text-sm italic">(expand brackets)</span><br />
                  = (3<strong>a</strong> - 2<strong>a</strong>) + (6<strong>b</strong> + 2<strong>b</strong>) <span className="text-sm italic">(group like terms)</span><br />
                  = <strong>a</strong> + 8<strong>b</strong> <span className="text-sm italic">(combine)</span><br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Final answer: <strong>a</strong> + 8<strong>b</strong>
                  </span>
                </p>
              </div>
            </div>

            {/* Example 7 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 7: Solving for an Unknown Vector</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Solve for <strong>x</strong>: 2<strong>x</strong> + (3/1) = (7/9)
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  2<strong>x</strong> + (3/1) = (7/9)<br /><br />

                  2<strong>x</strong> = (7/9) - (3/1) <span className="text-sm italic">(subtract (3/1) from both sides)</span><br />
                  2<strong>x</strong> = (4/8) <span className="text-sm italic">(simplify right side)</span><br /><br />

                  <strong>x</strong> = (4/8)/2 <span className="text-sm italic">(divide both sides by 2)</span><br />
                  <strong>x</strong> = (2/4)<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    <strong>x</strong> = (2/4) or 2<strong>i</strong> + 4<strong>j</strong>
                  </span>
                </p>
              </div>
            </div>

            {/* Example 8 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 8: More Complex Equation</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Solve for <strong>p</strong>: 3(<strong>p</strong> - <strong>a</strong>) = 2<strong>b</strong> - <strong>a</strong>, where <strong>a</strong> = (1/2) and <strong>b</strong> = (3/5)
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  3(<strong>p</strong> - <strong>a</strong>) = 2<strong>b</strong> - <strong>a</strong><br />
                  3<strong>p</strong> - 3<strong>a</strong> = 2<strong>b</strong> - <strong>a</strong> <span className="text-sm italic">(expand)</span><br />
                  3<strong>p</strong> = 2<strong>b</strong> - <strong>a</strong> + 3<strong>a</strong> <span className="text-sm italic">(add 3<strong>a</strong> to both sides)</span><br />
                  3<strong>p</strong> = 2<strong>b</strong> + 2<strong>a</strong> <span className="text-sm italic">(simplify)</span><br />
                  <strong>p</strong> = (2<strong>b</strong> + 2<strong>a</strong>)/3 <span className="text-sm italic">(divide by 3)</span><br /><br />

                  Substitute values:<br />
                  <strong>p</strong> = (2(3/5) + 2(1/2))/3<br />
                  = ((6/10) + (2/4))/3<br />
                  = (8/14)/3<br />
                  = (8/3, 14/3)<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    <strong>p</strong> = (8/3, 14/3) or (8/3)<strong>i</strong> + (14/3)<strong>j</strong>
                  </span>
                </p>
              </div>
            </div>

            {/* Example 9 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 9: Expressing in Terms of Other Vectors</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                If <strong>c</strong> = 2<strong>a</strong> + 3<strong>b</strong>, <strong>d</strong> = <strong>a</strong> - <strong>b</strong>, and <strong>e</strong> = <strong>a</strong> + 4<strong>b</strong>, express <strong>c</strong> in terms of <strong>d</strong> and <strong>e</strong>.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  From the given: <strong>d</strong> = <strong>a</strong> - <strong>b</strong>, <strong>e</strong> = <strong>a</strong> + 4<strong>b</strong><br /><br />

                  Solve for <strong>a</strong> and <strong>b</strong>:<br />
                  <strong>d</strong> + <strong>e</strong> = (<strong>a</strong> - <strong>b</strong>) + (<strong>a</strong> + 4<strong>b</strong>) = 2<strong>a</strong> + 3<strong>b</strong><br /><br />

                  Notice: 2<strong>a</strong> + 3<strong>b</strong> = <strong>c</strong><br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Therefore: <strong>c</strong> = <strong>d</strong> + <strong>e</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems 3B */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Practice Problems</h3>

          <div className="space-y-4">
            {[
              {
                id: '3b-1',
                question: 'Simplify: 5(<strong>x</strong> + <strong>y</strong>) - 2(<strong>x</strong> - 3<strong>y</strong>)',
                solution: '5<strong>x</strong> + 5<strong>y</strong> - 2<strong>x</strong> + 6<strong>y</strong> = 3<strong>x</strong> + 11<strong>y</strong>'
              },
              {
                id: '3b-2',
                question: 'Solve for <strong>v</strong>: 4<strong>v</strong> - (2/3) = (10/15)',
                solution: '4<strong>v</strong> = (10/15) + (2/3) = (12/18), so <strong>v</strong> = (12/18)/4 = (3, 4.5) or (3/4.5)'
              },
              {
                id: '3b-3',
                question: 'If 2(<strong>a</strong> + <strong>b</strong>) = 3<strong>a</strong> - <strong>c</strong>, express <strong>c</strong> in terms of <strong>a</strong> and <strong>b</strong>.',
                solution: '2<strong>a</strong> + 2<strong>b</strong> = 3<strong>a</strong> - <strong>c</strong>, so <strong>c</strong> = 3<strong>a</strong> - 2<strong>a</strong> - 2<strong>b</strong> = <strong>a</strong> - 2<strong>b</strong>'
              },
              {
                id: '3b-4',
                question: 'Simplify: k(<strong>p</strong> - <strong>q</strong>) + m(<strong>p</strong> + <strong>q</strong>)',
                solution: 'k<strong>p</strong> - k<strong>q</strong> + m<strong>p</strong> + m<strong>q</strong> = (k+m)<strong>p</strong> + (m-k)<strong>q</strong>'
              },
              {
                id: '3b-5',
                question: 'If <strong>x</strong> = (1/3), <strong>y</strong> = (2/-1), find <strong>z</strong> such that 2<strong>x</strong> + 3<strong>z</strong> = 4<strong>y</strong>.',
                solution: '3<strong>z</strong> = 4<strong>y</strong> - 2<strong>x</strong> = 4(2/-1) - 2(1/3) = (8/-4) - (2/6) = (6/-10). <strong>z</strong> = (6/-10)/3 = (2, -10/3)'
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
      <div className="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 border-2 border-orange-300 dark:border-orange-600 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-orange-800 dark:text-orange-300 mb-4">Key Takeaways</h2>
        <ul className="space-y-2 text-gray-800 dark:text-gray-200">
          <li className="flex items-start">
            <span className="text-orange-600 dark:text-orange-400 font-bold mr-2">✓</span>
            <span><strong>2D Magnitude:</strong> |<strong>v</strong>| = √(x² + y²) using Pythagoras theorem</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 dark:text-orange-400 font-bold mr-2">✓</span>
            <span><strong>3D Magnitude:</strong> |<strong>v</strong>| = √(x² + y² + z²)</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 dark:text-orange-400 font-bold mr-2">✓</span>
            <span><strong>Unit vector:</strong> <strong>û</strong> = <strong>v</strong>/|<strong>v</strong>| has magnitude 1, same direction as <strong>v</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 dark:text-orange-400 font-bold mr-2">✓</span>
            <span><strong>Distance:</strong> AB = |<strong>b</strong> - <strong>a</strong>| = √((x₂-x₁)² + (y₂-y₁)²)</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 dark:text-orange-400 font-bold mr-2">✓</span>
            <span><strong>Dot product property:</strong> <strong>a</strong> · <strong>a</strong> = |<strong>a</strong>|²</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 dark:text-orange-400 font-bold mr-2">✓</span>
            <span><strong>Distributive property:</strong> k(<strong>a</strong> + <strong>b</strong>) = k<strong>a</strong> + k<strong>b</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 dark:text-orange-400 font-bold mr-2">✓</span>
            <span><strong>Solving equations:</strong> Expand, collect like terms, isolate unknown, divide by coefficient</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 dark:text-orange-400 font-bold mr-2">✓</span>
            <span><strong>Vector algebra:</strong> Follow same rules as regular algebra but cannot multiply vectors</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MagnitudeOperations;
