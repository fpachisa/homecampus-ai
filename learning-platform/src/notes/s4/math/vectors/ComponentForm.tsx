import React, { useState } from 'react';

const ComponentForm: React.FC = () => {
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
      <div className="bg-gradient-to-r from-teal-600 to-cyan-700 dark:from-teal-700 dark:to-cyan-800 text-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-3">Component Form & Algebraic Methods</h1>
        <p className="text-xl text-teal-100 dark:text-teal-200">
          Understanding component form, column vectors, i,j notation, and position vectors
        </p>
      </div>

      {/* Section 2A: Vectors in Component Form */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-teal-700 dark:text-teal-400 mb-6 pb-2 border-b-2 border-teal-300 dark:border-teal-600">
          Section 2A: Vectors in Component Form
        </h2>

        {/* Column Form */}
        <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-600 dark:border-teal-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-300 mb-4">Column Form Notation</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Vectors can be written in <span className="font-semibold text-teal-600 dark:text-teal-400">column form</span>, showing the horizontal and vertical components:
          </p>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg mb-4">
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-teal-700 dark:text-teal-400 mb-2">2D Vector:</p>
                <p className="text-gray-700 dark:text-gray-300 ml-4">
                  <span className="font-mono bg-teal-100 dark:bg-teal-900/30 px-3 py-1 rounded"><strong>v</strong> = (x/y)</span> or <span className="font-mono bg-teal-100 dark:bg-teal-900/30 px-3 py-1 rounded">(x, y)</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-1">
                  where x is the horizontal component and y is the vertical component
                </p>
              </div>

              <div>
                <p className="font-semibold text-teal-700 dark:text-teal-400 mb-2">3D Vector:</p>
                <p className="text-gray-700 dark:text-gray-300 ml-4">
                  <span className="font-mono bg-teal-100 dark:bg-teal-900/30 px-3 py-1 rounded"><strong>v</strong> = (x/y/z)</span> or <span className="font-mono bg-teal-100 dark:bg-teal-900/30 px-3 py-1 rounded">(x, y, z)</span>
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            Example: Vector 3 units right and 4 units up is written as (3/4) or (3, 4)
          </p>
        </div>

        {/* i,j Notation */}
        <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-600 dark:border-cyan-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-cyan-800 dark:text-cyan-300 mb-4">i,j Notation</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Another way to write vectors uses <span className="font-semibold text-cyan-600 dark:text-cyan-400">unit vectors</span> <strong>i</strong> and <strong>j</strong>:
          </p>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg mb-4">
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-cyan-700 dark:text-cyan-400 mb-2">Unit Vectors:</p>
                <p className="text-gray-700 dark:text-gray-300 ml-4">
                  <span className="font-mono bg-cyan-100 dark:bg-cyan-900/30 px-3 py-1 rounded"><strong>i</strong> = (1/0)</span> - unit vector in the x-direction (horizontal)
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mt-2">
                  <span className="font-mono bg-cyan-100 dark:bg-cyan-900/30 px-3 py-1 rounded"><strong>j</strong> = (0/1)</span> - unit vector in the y-direction (vertical)
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mt-2">
                  <span className="font-mono bg-cyan-100 dark:bg-cyan-900/30 px-3 py-1 rounded"><strong>k</strong> = (0/0/1)</span> - unit vector in the z-direction (3D only)
                </p>
              </div>

              <div className="pt-3 border-t border-cyan-200 dark:border-cyan-800">
                <p className="font-semibold text-cyan-700 dark:text-cyan-400 mb-2">General Form:</p>
                <p className="text-gray-700 dark:text-gray-300 ml-4">
                  <span className="font-mono bg-cyan-100 dark:bg-cyan-900/30 px-3 py-1 rounded"><strong>v</strong> = xi + yj</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-1">
                  This means <strong>v</strong> = x(1/0) + y(0/1) = (x/y)
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            Example: (3/4) can be written as 3<strong>i</strong> + 4<strong>j</strong>
          </p>
        </div>

        {/* Component Operations */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Operations in Component Form</h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-teal-700 dark:text-teal-400 mb-2">Addition:</h4>
              <p className="text-gray-700 dark:text-gray-300 ml-4">
                Add corresponding components:
              </p>
              <p className="text-gray-700 dark:text-gray-300 ml-4 mt-2 font-mono bg-teal-100 dark:bg-teal-900/30 px-3 py-2 rounded inline-block">
                (a₁/a₂) + (b₁/b₂) = ((a₁+b₁)/(a₂+b₂))
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-2">
                Example: (2/3) + (4/1) = (6/4)
              </p>
            </div>

            <div>
              <h4 className="font-bold text-teal-700 dark:text-teal-400 mb-2">Scalar Multiplication:</h4>
              <p className="text-gray-700 dark:text-gray-300 ml-4">
                Multiply each component by the scalar:
              </p>
              <p className="text-gray-700 dark:text-gray-300 ml-4 mt-2 font-mono bg-teal-100 dark:bg-teal-900/30 px-3 py-2 rounded inline-block">
                k(x/y) = (kx/ky)
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-2">
                Example: 3(2/1) = (6/3)
              </p>
            </div>

            <div>
              <h4 className="font-bold text-teal-700 dark:text-teal-400 mb-2">Subtraction:</h4>
              <p className="text-gray-700 dark:text-gray-300 ml-4">
                Subtract corresponding components:
              </p>
              <p className="text-gray-700 dark:text-gray-300 ml-4 mt-2 font-mono bg-teal-100 dark:bg-teal-900/30 px-3 py-2 rounded inline-block">
                (a₁/a₂) - (b₁/b₂) = ((a₁-b₁)/(a₂-b₂))
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-2">
                Example: (5/7) - (2/3) = (3/4)
              </p>
            </div>
          </div>
        </div>

        {/* Worked Examples 2A */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Worked Examples</h3>

          <div className="space-y-6">
            {/* Example 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 1: Converting Between Notations</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Express the vector <strong>v</strong> = 5<strong>i</strong> + 3<strong>j</strong> in column form.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>v</strong> = 5<strong>i</strong> + 3<strong>j</strong><br />
                  = 5(1/0) + 3(0/1)<br />
                  = (5/0) + (0/3)<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    <strong>v</strong> = (5/3)
                  </span>
                </p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 2: Adding Vectors in Component Form</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                If <strong>a</strong> = (2/5) and <strong>b</strong> = (3/-1), find <strong>a</strong> + <strong>b</strong>.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>a</strong> + <strong>b</strong> = (2/5) + (3/-1)<br /><br />

                  Add x-components: 2 + 3 = 5<br />
                  Add y-components: 5 + (-1) = 4<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    <strong>a</strong> + <strong>b</strong> = (5/4)
                  </span>
                </p>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 3: Scalar Multiplication</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                If <strong>p</strong> = 2<strong>i</strong> - 3<strong>j</strong>, find 4<strong>p</strong>.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>p</strong> = 2<strong>i</strong> - 3<strong>j</strong> = (2/-3)<br /><br />

                  4<strong>p</strong> = 4(2/-3)<br />
                  = (4×2 / 4×(-3))<br />
                  = (8/-12)<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    4<strong>p</strong> = (8/-12) or 8<strong>i</strong> - 12<strong>j</strong>
                  </span>
                </p>
              </div>
            </div>

            {/* Example 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 4: Combined Operations</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                If <strong>a</strong> = (1/4) and <strong>b</strong> = (3/2), find 2<strong>a</strong> + 3<strong>b</strong>.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  2<strong>a</strong> = 2(1/4) = (2/8)<br />
                  3<strong>b</strong> = 3(3/2) = (9/6)<br /><br />

                  2<strong>a</strong> + 3<strong>b</strong> = (2/8) + (9/6)<br />
                  = (2+9 / 8+6)<br />
                  = (11/14)<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    2<strong>a</strong> + 3<strong>b</strong> = (11/14) or 11<strong>i</strong> + 14<strong>j</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems 2A */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Practice Problems</h3>

          <div className="space-y-4">
            {[
              {
                id: '2a-1',
                question: 'Write the vector (6/7) in i,j notation.',
                solution: '(6/7) = 6<strong>i</strong> + 7<strong>j</strong>'
              },
              {
                id: '2a-2',
                question: 'If <strong>u</strong> = (4/3) and <strong>v</strong> = (1/5), find <strong>u</strong> - <strong>v</strong>.',
                solution: '<strong>u</strong> - <strong>v</strong> = (4/3) - (1/5) = (4-1 / 3-5) = (3/-2) or 3<strong>i</strong> - 2<strong>j</strong>'
              },
              {
                id: '2a-3',
                question: 'Given <strong>a</strong> = 3<strong>i</strong> + 2<strong>j</strong> and <strong>b</strong> = -<strong>i</strong> + 4<strong>j</strong>, calculate 2<strong>a</strong> - <strong>b</strong>.',
                solution: '2<strong>a</strong> = 6<strong>i</strong> + 4<strong>j</strong> = (6/4). <strong>b</strong> = (-1/4). 2<strong>a</strong> - <strong>b</strong> = (6/4) - (-1/4) = (7/0) or 7<strong>i</strong>'
              },
              {
                id: '2a-4',
                question: 'Simplify: (5/2) + 3(1/-1) - 2(2/0)',
                solution: '(5/2) + (3/-3) - (4/0) = (5+3-4 / 2-3-0) = (4/-1) or 4<strong>i</strong> - <strong>j</strong>'
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

      {/* Section 2B: Position Vectors and Displacement */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-6 pb-2 border-b-2 border-purple-300 dark:border-purple-600">
          Section 2B: Position Vectors and Displacement
        </h2>

        {/* Position Vectors */}
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600 dark:border-purple-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-4">Position Vectors</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A <span className="font-semibold text-purple-600 dark:text-purple-400">position vector</span> is a vector from the origin O to a point P.
          </p>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg mb-4">
            <p className="font-semibold text-purple-700 dark:text-purple-400 mb-3">For point P(x, y):</p>
            <p className="text-gray-700 dark:text-gray-300 ml-4 font-mono bg-purple-100 dark:bg-purple-900/30 px-3 py-2 rounded inline-block">
              <strong>p</strong> = OP̄ = (x/y) or x<strong>i</strong> + y<strong>j</strong>
            </p>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            Example: Point A(3, 5) has position vector <strong>a</strong> = (3/5) or 3<strong>i</strong> + 5<strong>j</strong>
          </p>
        </div>

        {/* Displacement Vectors */}
        <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-600 dark:border-pink-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-pink-800 dark:text-pink-300 mb-4">Displacement Vectors</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The <span className="font-semibold text-pink-600 dark:text-pink-400">displacement vector</span> from point A to point B is:
          </p>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg mb-4">
            <p className="text-gray-700 dark:text-gray-300 font-mono bg-pink-100 dark:bg-pink-900/30 px-3 py-2 rounded inline-block">
              AB̄ = <strong>b</strong> - <strong>a</strong> (final position - initial position)
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              This represents the change in position from A to B
            </p>
          </div>

          <div className="bg-pink-100 dark:bg-pink-900/30 p-4 rounded">
            <p className="font-semibold text-pink-800 dark:text-pink-300">Remember:</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Displacement = Final - Initial (order matters!)
            </p>
          </div>
        </div>

        {/* Midpoint Formula */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">Midpoint Formula</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The midpoint M of line segment AB has position vector:
          </p>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg mb-4">
            <p className="text-gray-700 dark:text-gray-300 font-mono bg-blue-100 dark:bg-blue-900/30 px-3 py-2 rounded inline-block">
              <strong>m</strong> = (<strong>a</strong> + <strong>b</strong>)/2
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              The midpoint is the average of the two position vectors
            </p>
          </div>
        </div>

        {/* Section Formula */}
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 dark:border-green-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-4">Section Formula</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            To find a point P that divides line segment AB in ratio m:n:
          </p>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg mb-4">
            <p className="text-gray-700 dark:text-gray-300 font-mono bg-green-100 dark:bg-green-900/30 px-3 py-2 rounded inline-block">
              <strong>p</strong> = (n<strong>a</strong> + m<strong>b</strong>)/(m+n)
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              where m:n is the ratio from A to B
            </p>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            Example: If P divides AB in ratio 2:3, then <strong>p</strong> = (3<strong>a</strong> + 2<strong>b</strong>)/5
          </p>
        </div>

        {/* Worked Examples 2B */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Worked Examples</h3>

          <div className="space-y-6">
            {/* Example 5 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 5: Finding Displacement Vectors</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Points A and B have position vectors <strong>a</strong> = (2/5) and <strong>b</strong> = (7/1). Find AB̄.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  AB̄ = <strong>b</strong> - <strong>a</strong><br />
                  = (7/1) - (2/5)<br />
                  = (7-2 / 1-5)<br />
                  = (5/-4)<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    AB̄ = (5/-4) or 5<strong>i</strong> - 4<strong>j</strong>
                  </span>
                </p>
              </div>
            </div>

            {/* Example 6 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 6: Finding the Midpoint</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Find the midpoint M of AB where <strong>a</strong> = 3<strong>i</strong> + 2<strong>j</strong> and <strong>b</strong> = 7<strong>i</strong> + 6<strong>j</strong>.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>m</strong> = (<strong>a</strong> + <strong>b</strong>)/2<br />
                  = ((3/2) + (7/6))/2<br />
                  = (10/8)/2<br />
                  = (5/4)<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Midpoint M has position vector <strong>m</strong> = (5/4) or 5<strong>i</strong> + 4<strong>j</strong>
                  </span>
                </p>
              </div>
            </div>

            {/* Example 7 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 7: Section Formula</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Point P divides AB in the ratio 2:3, where <strong>a</strong> = (1/4) and <strong>b</strong> = (6/9). Find <strong>p</strong>.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Ratio m:n = 2:3, so m = 2, n = 3<br /><br />

                  <strong>p</strong> = (n<strong>a</strong> + m<strong>b</strong>)/(m+n)<br />
                  = (3(1/4) + 2(6/9))/(2+3)<br />
                  = ((3/12) + (12/18))/5<br />
                  = (15/30)/5<br />
                  = (3/6)<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    <strong>p</strong> = (3/6) or 3<strong>i</strong> + 6<strong>j</strong>
                  </span>
                </p>
              </div>
            </div>

            {/* Example 8 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 8: Finding Unknown Position Vector</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Given <strong>a</strong> = (2/3), <strong>b</strong> = (8/7), and AB̄ = <strong>b</strong> - <strong>a</strong>. If C is a point such that AC̄ = 2AB̄, find <strong>c</strong>.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  First find AB̄:<br />
                  AB̄ = <strong>b</strong> - <strong>a</strong> = (8/7) - (2/3) = (6/4)<br /><br />

                  Now AC̄ = 2AB̄:<br />
                  AC̄ = 2(6/4) = (12/8)<br /><br />

                  Since AC̄ = <strong>c</strong> - <strong>a</strong>:<br />
                  <strong>c</strong> = <strong>a</strong> + AC̄<br />
                  = (2/3) + (12/8)<br />
                  = (14/11)<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    <strong>c</strong> = (14/11) or 14<strong>i</strong> + 11<strong>j</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems 2B */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Practice Problems</h3>

          <div className="space-y-4">
            {[
              {
                id: '2b-1',
                question: 'If <strong>a</strong> = (4/7) and <strong>b</strong> = (10/3), find the displacement vector from A to B.',
                solution: 'AB̄ = <strong>b</strong> - <strong>a</strong> = (10/3) - (4/7) = (6/-4) or 6<strong>i</strong> - 4<strong>j</strong>'
              },
              {
                id: '2b-2',
                question: 'Find the midpoint of AB where A has position vector (2/1) and B has position vector (8/9).',
                solution: '<strong>m</strong> = ((2/1) + (8/9))/2 = (10/10)/2 = (5/5)'
              },
              {
                id: '2b-3',
                question: 'Point P divides AB in ratio 1:4 where <strong>a</strong> = (0/5) and <strong>b</strong> = (10/0). Find <strong>p</strong>.',
                solution: '<strong>p</strong> = (4<strong>a</strong> + 1<strong>b</strong>)/(1+4) = (4(0/5) + (10/0))/5 = (10/20)/5 = (2/4)'
              },
              {
                id: '2b-4',
                question: 'If M is the midpoint of AB with <strong>m</strong> = (6/4) and <strong>a</strong> = (2/2), find <strong>b</strong>.',
                solution: '<strong>m</strong> = (<strong>a</strong> + <strong>b</strong>)/2, so (6/4) = ((2/2) + <strong>b</strong>)/2. Therefore <strong>b</strong> = 2(6/4) - (2/2) = (12/8) - (2/2) = (10/6)'
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
      <div className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 border-2 border-teal-300 dark:border-teal-600 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-teal-800 dark:text-teal-300 mb-4">Key Takeaways</h2>
        <ul className="space-y-2 text-gray-800 dark:text-gray-200">
          <li className="flex items-start">
            <span className="text-teal-600 dark:text-teal-400 font-bold mr-2">✓</span>
            <span><strong>Column form:</strong> <strong>v</strong> = (x/y) shows horizontal and vertical components</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-600 dark:text-teal-400 font-bold mr-2">✓</span>
            <span><strong>i,j notation:</strong> <strong>v</strong> = xi + yj uses unit vectors <strong>i</strong> = (1/0) and <strong>j</strong> = (0/1)</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-600 dark:text-teal-400 font-bold mr-2">✓</span>
            <span><strong>Component addition:</strong> Add corresponding components: (a₁/a₂) + (b₁/b₂) = ((a₁+b₁)/(a₂+b₂))</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-600 dark:text-teal-400 font-bold mr-2">✓</span>
            <span><strong>Scalar multiplication:</strong> Multiply each component: k(x/y) = (kx/ky)</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-600 dark:text-teal-400 font-bold mr-2">✓</span>
            <span><strong>Position vector:</strong> From origin to point P(x,y) is <strong>p</strong> = (x/y)</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-600 dark:text-teal-400 font-bold mr-2">✓</span>
            <span><strong>Displacement:</strong> AB̄ = <strong>b</strong> - <strong>a</strong> (final - initial position)</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-600 dark:text-teal-400 font-bold mr-2">✓</span>
            <span><strong>Midpoint:</strong> <strong>m</strong> = (<strong>a</strong> + <strong>b</strong>)/2</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-600 dark:text-teal-400 font-bold mr-2">✓</span>
            <span><strong>Section formula:</strong> <strong>p</strong> = (n<strong>a</strong> + m<strong>b</strong>)/(m+n) for ratio m:n</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComponentForm;
