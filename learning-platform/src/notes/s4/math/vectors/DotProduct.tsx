import React, { useState } from 'react';

const DotProduct: React.FC = () => {
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
      <div className="bg-gradient-to-r from-violet-600 to-purple-700 dark:from-violet-700 dark:to-purple-800 text-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-3">Dot Product & Angles</h1>
        <p className="text-xl text-violet-100 dark:text-violet-200">
          Understanding scalar product, perpendicularity, and angles between vectors
        </p>
      </div>

      {/* Section 5A: The Scalar (Dot) Product */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-violet-700 dark:text-violet-400 mb-6 pb-2 border-b-2 border-violet-300 dark:border-violet-600">
          Section 5A: The Scalar (Dot) Product
        </h2>

        {/* Dot Product Definition */}
        <div className="bg-violet-50 dark:bg-violet-900/20 border-l-4 border-violet-600 dark:border-violet-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-violet-800 dark:text-violet-300 mb-4">What is the Dot Product?</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The <span className="font-semibold text-violet-600 dark:text-violet-400">dot product</span> (also called <span className="font-semibold">scalar product</span>)
            of two vectors produces a <span className="font-semibold">scalar</span> (not a vector).
          </p>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-violet-700 dark:text-violet-400 mb-2">2D Dot Product:</p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 font-mono bg-violet-100 dark:bg-violet-900/30 px-3 py-2 rounded inline-block">
                  <strong>a</strong> · <strong>b</strong> = a₁b₁ + a₂b₂
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-2">
                  for <strong>a</strong> = (a₁/a₂) and <strong>b</strong> = (b₁/b₂)
                </p>
              </div>

              <div className="pt-3 border-t border-violet-200 dark:border-violet-800">
                <p className="font-semibold text-violet-700 dark:text-violet-400 mb-2">3D Dot Product:</p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 font-mono bg-violet-100 dark:bg-violet-900/30 px-3 py-2 rounded inline-block">
                  <strong>a</strong> · <strong>b</strong> = a₁b₁ + a₂b₂ + a₃b₃
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-2">
                  for <strong>a</strong> = (a₁/a₂/a₃) and <strong>b</strong> = (b₁/b₂/b₃)
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-4">
            Example: (3/2) · (1/4) = 3(1) + 2(4) = 3 + 8 = 11 (scalar result!)
          </p>
        </div>

        {/* Properties */}
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600 dark:border-purple-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-4">Properties of the Dot Product</h3>

          <div className="space-y-3">
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-purple-700 dark:text-purple-400 mb-2">1. Commutative Property:</p>
              <p className="text-gray-700 dark:text-gray-300 ml-4 font-mono bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded inline-block">
                <strong>a</strong> · <strong>b</strong> = <strong>b</strong> · <strong>a</strong>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-2">
                Order doesn't matter
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-purple-700 dark:text-purple-400 mb-2">2. Distributive Property:</p>
              <p className="text-gray-700 dark:text-gray-300 ml-4 font-mono bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded inline-block">
                <strong>a</strong> · (<strong>b</strong> + <strong>c</strong>) = <strong>a</strong> · <strong>b</strong> + <strong>a</strong> · <strong>c</strong>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-2">
                Distributes over addition
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-purple-700 dark:text-purple-400 mb-2">3. Scalar Multiplication:</p>
              <p className="text-gray-700 dark:text-gray-300 ml-4 font-mono bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded inline-block">
                (k<strong>a</strong>) · <strong>b</strong> = k(<strong>a</strong> · <strong>b</strong>) = <strong>a</strong> · (k<strong>b</strong>)
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-purple-700 dark:text-purple-400 mb-2">4. Dot Product with Itself:</p>
              <p className="text-gray-700 dark:text-gray-300 ml-4 font-mono bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded inline-block">
                <strong>a</strong> · <strong>a</strong> = |<strong>a</strong>|²
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-2">
                Very useful for finding magnitude!
              </p>
            </div>
          </div>
        </div>

        {/* Perpendicularity */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 dark:border-red-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-4">Testing for Perpendicularity</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Two vectors are <span className="font-semibold text-red-600 dark:text-red-400">perpendicular</span> (at right angles, 90°)
            if and only if their dot product is zero.
          </p>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg mb-4">
            <p className="text-gray-700 dark:text-gray-300 font-mono bg-red-100 dark:bg-red-900/30 px-3 py-2 rounded inline-block">
              <strong>a</strong> ⊥ <strong>b</strong> ⟺ <strong>a</strong> · <strong>b</strong> = 0
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              The symbol ⊥ means "perpendicular to"
            </p>
          </div>

          <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded">
            <p className="font-semibold text-red-800 dark:text-red-300">Important:</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              The zero vector <strong>0</strong> is perpendicular to every vector since <strong>0</strong> · <strong>v</strong> = 0 for all <strong>v</strong>
            </p>
          </div>
        </div>

        {/* Geometric Interpretation */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">Geometric Interpretation</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The dot product relates to the angle between two vectors:
          </p>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 font-mono bg-blue-100 dark:bg-blue-900/30 px-3 py-2 rounded inline-block">
              <strong>a</strong> · <strong>b</strong> = |<strong>a</strong>| |<strong>b</strong>| cos θ
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              where θ is the angle between vectors <strong>a</strong> and <strong>b</strong>
            </p>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-4">
            This formula connects algebra (components) to geometry (angle)
          </p>
        </div>

        {/* Worked Examples 5A */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Worked Examples</h3>

          <div className="space-y-6">
            {/* Example 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 1: Calculating Dot Product</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Find <strong>a</strong> · <strong>b</strong> where <strong>a</strong> = (3/2) and <strong>b</strong> = (1/4).
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>a</strong> · <strong>b</strong> = a₁b₁ + a₂b₂<br />
                  = 3(1) + 2(4)<br />
                  = 3 + 8<br />
                  = 11<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    <strong>a</strong> · <strong>b</strong> = 11
                  </span>
                </p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 2: Dot Product with i,j Notation</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculate (2<strong>i</strong> + 3<strong>j</strong>) · (4<strong>i</strong> - <strong>j</strong>).
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>a</strong> = 2<strong>i</strong> + 3<strong>j</strong> = (2/3)<br />
                  <strong>b</strong> = 4<strong>i</strong> - <strong>j</strong> = (4/-1)<br /><br />

                  <strong>a</strong> · <strong>b</strong> = 2(4) + 3(-1)<br />
                  = 8 - 3<br />
                  = 5<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    (2<strong>i</strong> + 3<strong>j</strong>) · (4<strong>i</strong> - <strong>j</strong>) = 5
                  </span>
                </p>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 3: Testing Perpendicularity</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Determine if <strong>p</strong> = (3/-2) and <strong>q</strong> = (2/3) are perpendicular.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Calculate <strong>p</strong> · <strong>q</strong>:<br />
                  <strong>p</strong> · <strong>q</strong> = 3(2) + (-2)(3)<br />
                  = 6 - 6<br />
                  = 0<br /><br />

                  Since <strong>p</strong> · <strong>q</strong> = 0:<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Yes, <strong>p</strong> and <strong>q</strong> are perpendicular (⊥)
                  </span>
                </p>
              </div>
            </div>

            {/* Example 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 4: Finding Unknown for Perpendicularity</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Find k such that <strong>a</strong> = (4/k) and <strong>b</strong> = (3/-2) are perpendicular.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  For perpendicular vectors: <strong>a</strong> · <strong>b</strong> = 0<br /><br />

                  4(3) + k(-2) = 0<br />
                  12 - 2k = 0<br />
                  2k = 12<br />
                  k = 6<br /><br />

                  Check: <strong>a</strong> = (4/6), <strong>b</strong> = (3/-2)<br />
                  <strong>a</strong> · <strong>b</strong> = 4(3) + 6(-2) = 12 - 12 = 0 ✓<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    k = 6
                  </span>
                </p>
              </div>
            </div>

            {/* Example 5 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 5: Using <strong>a</strong> · <strong>a</strong> = |<strong>a</strong>|²</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                If <strong>v</strong> = (5/12), find |<strong>v</strong>| using the dot product.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Use the property <strong>v</strong> · <strong>v</strong> = |<strong>v</strong>|²<br /><br />

                  <strong>v</strong> · <strong>v</strong> = 5(5) + 12(12)<br />
                  = 25 + 144<br />
                  = 169<br /><br />

                  So |<strong>v</strong>|² = 169<br />
                  |<strong>v</strong>| = √169 = 13<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    |<strong>v</strong>| = 13
                  </span>
                </p>
              </div>
            </div>

            {/* Example 6 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 6: 3D Dot Product</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculate <strong>a</strong> · <strong>b</strong> where <strong>a</strong> = (1/2/3) and <strong>b</strong> = (4/0/-1).
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  For 3D vectors: <strong>a</strong> · <strong>b</strong> = a₁b₁ + a₂b₂ + a₃b₃<br /><br />

                  <strong>a</strong> · <strong>b</strong> = 1(4) + 2(0) + 3(-1)<br />
                  = 4 + 0 - 3<br />
                  = 1<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    <strong>a</strong> · <strong>b</strong> = 1
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems 5A */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Practice Problems</h3>

          <div className="space-y-4">
            {[
              {
                id: '5a-1',
                question: 'Calculate (6/8) · (3/4).',
                solution: '6(3) + 8(4) = 18 + 32 = 50'
              },
              {
                id: '5a-2',
                question: 'Are u = (2/5) and v = (10/-4) perpendicular?',
                solution: 'u · v = 2(10) + 5(-4) = 20 - 20 = 0. Yes, they are perpendicular'
              },
              {
                id: '5a-3',
                question: 'Find k if (k/3) ⊥ (2/4).',
                solution: 'k(2) + 3(4) = 0. 2k + 12 = 0. k = -6'
              },
              {
                id: '5a-4',
                question: 'If a = i + 2j and b = 3i - j, find a · b.',
                solution: 'a = (1/2), b = (3/-1). a · b = 1(3) + 2(-1) = 3 - 2 = 1'
              },
              {
                id: '5a-5',
                question: 'Calculate (2/1/-3) · (-1/4/2).',
                solution: '2(-1) + 1(4) + (-3)(2) = -2 + 4 - 6 = -4'
              },
              {
                id: '5a-6',
                question: 'If |v| = 10, find v · v.',
                solution: 'v · v = |v|² = 10² = 100'
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

      {/* Section 5B: The Angle Between Two Vectors */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-pink-700 dark:text-pink-400 mb-6 pb-2 border-b-2 border-pink-300 dark:border-pink-600">
          Section 5B: The Angle Between Two Vectors
        </h2>

        {/* Angle Formula */}
        <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-600 dark:border-pink-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-pink-800 dark:text-pink-300 mb-4">Finding the Angle Between Vectors</h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We can rearrange the geometric formula for dot product to find the angle θ between two vectors:
          </p>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg mb-4">
            <p className="font-semibold text-pink-700 dark:text-pink-400 mb-3">Step 1: Calculate cos θ</p>
            <p className="text-gray-700 dark:text-gray-300 font-mono bg-pink-100 dark:bg-pink-900/30 px-3 py-2 rounded inline-block">
              cos θ = (<strong>a</strong> · <strong>b</strong>) / (|<strong>a</strong>| |<strong>b</strong>|)
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <p className="font-semibold text-pink-700 dark:text-pink-400 mb-3">Step 2: Find θ using inverse cosine</p>
            <p className="text-gray-700 dark:text-gray-300 font-mono bg-pink-100 dark:bg-pink-900/30 px-3 py-2 rounded inline-block">
              θ = arccos[(<strong>a</strong> · <strong>b</strong>) / (|<strong>a</strong>| |<strong>b</strong>|)]
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              Also written as θ = cos⁻¹[(<strong>a</strong> · <strong>b</strong>) / (|<strong>a</strong>| |<strong>b</strong>|)]
            </p>
          </div>
        </div>

        {/* Angle Properties */}
        <div className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-600 dark:border-rose-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-rose-800 dark:text-rose-300 mb-4">Properties and Special Cases</h3>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-rose-700 dark:text-rose-400 mb-2">Angle Range:</p>
              <p className="text-gray-700 dark:text-gray-300 ml-4">
                0° ≤ θ ≤ 180° (angles between vectors are always between 0° and 180°)
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-rose-700 dark:text-rose-400 mb-2">Acute Angle (0° &lt; θ &lt; 90°):</p>
              <p className="text-gray-700 dark:text-gray-300 ml-4">
                <strong>a</strong> · <strong>b</strong> &gt; 0 (positive dot product)
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-rose-700 dark:text-rose-400 mb-2">Right Angle (θ = 90°):</p>
              <p className="text-gray-700 dark:text-gray-300 ml-4">
                <strong>a</strong> · <strong>b</strong> = 0 (perpendicular vectors)
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="font-semibold text-rose-700 dark:text-rose-400 mb-2">Obtuse Angle (90° &lt; θ &lt; 180°):</p>
              <p className="text-gray-700 dark:text-gray-300 ml-4">
                <strong>a</strong> · <strong>b</strong> &lt; 0 (negative dot product)
              </p>
            </div>
          </div>
        </div>

        {/* Worked Examples 5B */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Worked Examples</h3>

          <div className="space-y-6">
            {/* Example 7 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 7: Finding Angle Between Vectors</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Find the angle between <strong>a</strong> = (1/0) and <strong>b</strong> = (1/1).
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Step 1: Calculate <strong>a</strong> · <strong>b</strong><br />
                  <strong>a</strong> · <strong>b</strong> = 1(1) + 0(1) = 1<br /><br />

                  Step 2: Calculate magnitudes<br />
                  |<strong>a</strong>| = √(1² + 0²) = 1<br />
                  |<strong>b</strong>| = √(1² + 1²) = √2<br /><br />

                  Step 3: Calculate cos θ<br />
                  cos θ = 1/(1 × √2) = 1/√2<br /><br />

                  Step 4: Find θ<br />
                  θ = arccos(1/√2) = 45°<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    θ = 45° (acute angle)
                  </span>
                </p>
              </div>
            </div>

            {/* Example 8 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 8: Obtuse Angle</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Find the angle between <strong>p</strong> = (2/1) and <strong>q</strong> = (-1/2).
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>p</strong> · <strong>q</strong> = 2(-1) + 1(2) = -2 + 2 = 0<br /><br />

                  Since <strong>p</strong> · <strong>q</strong> = 0:<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    θ = 90° (right angle - vectors are perpendicular)
                  </span>
                </p>
              </div>
            </div>

            {/* Example 9 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 9: General Angle Calculation</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Find the angle between <strong>a</strong> = 3<strong>i</strong> + 4<strong>j</strong> and <strong>b</strong> = <strong>i</strong> - <strong>j</strong>.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>a</strong> = (3/4), <strong>b</strong> = (1/-1)<br /><br />

                  <strong>a</strong> · <strong>b</strong> = 3(1) + 4(-1) = 3 - 4 = -1<br /><br />

                  |<strong>a</strong>| = √(3² + 4²) = √25 = 5<br />
                  |<strong>b</strong>| = √(1² + (-1)²) = √2<br /><br />

                  cos θ = -1/(5√2) = -1/(5√2) ≈ -0.1414<br /><br />

                  θ = arccos(-0.1414) ≈ 98.1°<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    θ ≈ 98.1° (obtuse angle, since <strong>a</strong> · <strong>b</strong> &lt; 0)
                  </span>
                </p>
              </div>
            </div>

            {/* Example 10 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 10: Parallel Vectors</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Find the angle between <strong>u</strong> = (2/3) and <strong>v</strong> = (4/6).
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Note: <strong>v</strong> = 2<strong>u</strong> (vectors are parallel, same direction)<br /><br />

                  <strong>u</strong> · <strong>v</strong> = 2(4) + 3(6) = 8 + 18 = 26<br /><br />

                  |<strong>u</strong>| = √(4 + 9) = √13<br />
                  |<strong>v</strong>| = √(16 + 36) = √52 = 2√13<br /><br />

                  cos θ = 26/(√13 × 2√13) = 26/26 = 1<br /><br />

                  θ = arccos(1) = 0°<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    θ = 0° (vectors point in exactly the same direction)
                  </span>
                </p>
              </div>
            </div>

            {/* Example 11 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 11: 3D Angle Calculation</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Find the angle between <strong>a</strong> = (1/2/2) and <strong>b</strong> = (2/1/-2).
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>a</strong> · <strong>b</strong> = 1(2) + 2(1) + 2(-2) = 2 + 2 - 4 = 0<br /><br />

                  Since <strong>a</strong> · <strong>b</strong> = 0, vectors are perpendicular<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    θ = 90° (right angle)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems 5B */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Practice Problems</h3>

          <div className="space-y-4">
            {[
              {
                id: '5b-1',
                question: 'Find the angle between a = (1/√3) and b = (√3/1).',
                solution: 'a · b = √3 + √3 = 2√3. |a| = 2, |b| = 2. cos θ = 2√3/4 = √3/2. θ = 30°'
              },
              {
                id: '5b-2',
                question: 'Is the angle between (2/5) and (3/-2) acute, right, or obtuse?',
                solution: '(2/5) · (3/-2) = 6 - 10 = -4 < 0. Obtuse angle'
              },
              {
                id: '5b-3',
                question: 'Find the angle between i and i + j.',
                solution: 'i = (1/0), i + j = (1/1). i · (i + j) = 1. |i| = 1, |i + j| = √2. cos θ = 1/√2. θ = 45°'
              },
              {
                id: '5b-4',
                question: 'If the angle between a and b is 60°, |a| = 2, |b| = 3, find a · b.',
                solution: 'a · b = |a||b|cos θ = 2(3)cos 60° = 6(1/2) = 3'
              },
              {
                id: '5b-5',
                question: 'Show that (1/1/1) and (1/-2/1) are perpendicular.',
                solution: '(1/1/1) · (1/-2/1) = 1 - 2 + 1 = 0. Since dot product is zero, vectors are perpendicular'
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
      <div className="bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 border-2 border-violet-300 dark:border-violet-600 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-violet-800 dark:text-violet-300 mb-4">Key Takeaways</h2>
        <ul className="space-y-2 text-gray-800 dark:text-gray-200">
          <li className="flex items-start">
            <span className="text-violet-600 dark:text-violet-400 font-bold mr-2">✓</span>
            <span><strong>Dot product (2D):</strong> <strong>a</strong> · <strong>b</strong> = a₁b₁ + a₂b₂ (gives a scalar, not a vector)</span>
          </li>
          <li className="flex items-start">
            <span className="text-violet-600 dark:text-violet-400 font-bold mr-2">✓</span>
            <span><strong>Dot product (3D):</strong> <strong>a</strong> · <strong>b</strong> = a₁b₁ + a₂b₂ + a₃b₃</span>
          </li>
          <li className="flex items-start">
            <span className="text-violet-600 dark:text-violet-400 font-bold mr-2">✓</span>
            <span><strong>Commutative:</strong> <strong>a</strong> · <strong>b</strong> = <strong>b</strong> · <strong>a</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-violet-600 dark:text-violet-400 font-bold mr-2">✓</span>
            <span><strong>Magnitude property:</strong> <strong>a</strong> · <strong>a</strong> = |<strong>a</strong>|²</span>
          </li>
          <li className="flex items-start">
            <span className="text-violet-600 dark:text-violet-400 font-bold mr-2">✓</span>
            <span><strong>Perpendicular test:</strong> <strong>a</strong> ⊥ <strong>b</strong> ⟺ <strong>a</strong> · <strong>b</strong> = 0</span>
          </li>
          <li className="flex items-start">
            <span className="text-violet-600 dark:text-violet-400 font-bold mr-2">✓</span>
            <span><strong>Angle formula:</strong> cos θ = (<strong>a</strong> · <strong>b</strong>)/(|<strong>a</strong>||<strong>b</strong>|)</span>
          </li>
          <li className="flex items-start">
            <span className="text-violet-600 dark:text-violet-400 font-bold mr-2">✓</span>
            <span><strong>Angle range:</strong> 0° ≤ θ ≤ 180°</span>
          </li>
          <li className="flex items-start">
            <span className="text-violet-600 dark:text-violet-400 font-bold mr-2">✓</span>
            <span><strong>Acute vs obtuse:</strong> <strong>a</strong> · <strong>b</strong> &gt; 0 means acute, <strong>a</strong> · <strong>b</strong> &lt; 0 means obtuse</span>
          </li>
          <li className="flex items-start">
            <span className="text-violet-600 dark:text-violet-400 font-bold mr-2">✓</span>
            <span><strong>Geometric meaning:</strong> <strong>a</strong> · <strong>b</strong> = |<strong>a</strong>||<strong>b</strong>|cos θ connects algebra to geometry</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DotProduct;
