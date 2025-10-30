import React, { useState } from 'react';

const VectorFundamentals: React.FC = () => {
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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 text-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-3">Vector Fundamentals & Geometric Operations</h1>
        <p className="text-xl text-blue-100 dark:text-blue-200">
          Understanding vectors, geometric addition, subtraction, and scalar multiplication
        </p>
      </div>

      {/* Section 1A: Scalars and Vectors */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6 pb-2 border-b-2 border-blue-300 dark:border-blue-600">
          Section 1A: Scalars and Vectors
        </h2>

        {/* Definitions */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">Key Definitions</h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Scalar</h4>
              <p className="text-gray-700 dark:text-gray-300">
                A quantity with <span className="font-semibold text-blue-600 dark:text-blue-400">magnitude only</span>.
                Scalars describe "how much" but not "in what direction."
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400 italic">
                Examples: mass (5 kg), temperature (20°C), time (3 hours), length (10 m)
              </p>
            </div>

            <div>
              <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Vector</h4>
              <p className="text-gray-700 dark:text-gray-300">
                A quantity with <span className="font-semibold text-blue-600 dark:text-blue-400">both magnitude and direction</span>.
                Vectors describe "how much" and "in what direction."
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400 italic">
                Examples: displacement (5 m east), velocity (30 m/s north), force (10 N downward)
              </p>
            </div>
          </div>
        </div>

        {/* Vector Notation */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Vector Notation</h3>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <div className="flex items-center space-x-4">
              <span className="font-mono bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded"><strong>v</strong></span>
              <span>Bold lowercase letter</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-mono bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded">v̄</span>
              <span>Lowercase letter with arrow</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-mono bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded">AB̄</span>
              <span>Two points with arrow (from A to B)</span>
            </div>
          </div>
        </div>

        {/* Equal and Negative Vectors */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 p-5 rounded-lg">
            <h4 className="font-bold text-green-800 dark:text-green-400 mb-3">Equal Vectors</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Two vectors are equal if they have the <span className="font-semibold">same magnitude</span> and
              <span className="font-semibold"> same direction</span>.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-2">
              Position doesn't matter! Vectors can be in different locations and still be equal.
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 p-5 rounded-lg">
            <h4 className="font-bold text-red-800 dark:text-red-400 mb-3">Negative Vectors</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              The negative of vector <strong>v</strong>, written <strong>-v</strong>, has the <span className="font-semibold">same magnitude</span> but
              <span className="font-semibold"> opposite direction</span>.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-2">
              If <strong>v</strong> points east, <strong>-v</strong> points west with the same length.
            </p>
          </div>
        </div>

        {/* Worked Examples 1A */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Worked Examples</h3>

          <div className="space-y-6">
            {/* Example 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 1: Identifying Scalars and Vectors</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Classify each quantity as a scalar or vector:
              </p>
              <p className="ml-4 text-gray-700 dark:text-gray-300 mb-3">
                a) Speed of 50 km/h <br />
                b) Displacement of 20 m north <br />
                c) Temperature of 25°C <br />
                d) Force of 15 N downward
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  a) <span className="font-semibold text-blue-600 dark:text-blue-400">Scalar</span> - has magnitude only (no direction mentioned)<br />
                  b) <span className="font-semibold text-green-600 dark:text-green-400">Vector</span> - has magnitude (20 m) and direction (north)<br />
                  c) <span className="font-semibold text-blue-600 dark:text-blue-400">Scalar</span> - temperature has no direction<br />
                  d) <span className="font-semibold text-green-600 dark:text-green-400">Vector</span> - has magnitude (15 N) and direction (downward)
                </p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 2: Equal Vectors</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Given vectors <strong>p</strong> = 5 m east, <strong>q</strong> = 5 m west, <strong>r</strong> = 5 m east, and <strong>s</strong> = 3 m east,
                which vectors are equal?
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-green-600 dark:text-green-400"><strong>p</strong> = <strong>r</strong></span> - both have magnitude 5 m and direction east<br /><br />
                  <strong>q</strong> ≠ <strong>p</strong> (opposite directions)<br />
                  <strong>s</strong> ≠ <strong>p</strong> (different magnitudes)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems 1A */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Practice Problems</h3>

          <div className="space-y-4">
            {[
              {
                id: '1a-1',
                question: 'Classify: a) 15 kg mass, b) 30 m/s velocity northward, c) 100°C temperature',
                solution: 'a) Scalar (magnitude only), b) Vector (magnitude and direction), c) Scalar (no direction)'
              },
              {
                id: '1a-2',
                question: 'If vector <strong>a</strong> = 8 m south, what is <strong>-a</strong>?',
                solution: '<strong>-a</strong> = 8 m north (same magnitude, opposite direction)'
              },
              {
                id: '1a-3',
                question: 'Are vectors <strong>u</strong> = 10 N right and <strong>v</strong> = 10 N left equal? Explain.',
                solution: 'No, they are not equal. Although they have the same magnitude (10 N), they have opposite directions.'
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

      {/* Section 1B: Geometric Vector Addition */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-6 pb-2 border-b-2 border-green-300 dark:border-green-600">
          Section 1B: Geometric Vector Addition
        </h2>

        {/* Triangle Law */}
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 dark:border-green-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-4">Triangle Law of Addition (Nose-to-Tail Method)</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            To add <strong>a</strong> + <strong>b</strong>:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>Draw vector <strong>a</strong></li>
            <li>Place the tail of <strong>b</strong> at the head (arrow tip) of <strong>a</strong></li>
            <li>The resultant vector <strong>c</strong> = <strong>a</strong> + <strong>b</strong> goes from the tail of <strong>a</strong> to the head of <strong>b</strong></li>
          </ol>
          <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded">
            <p className="font-semibold text-green-800 dark:text-green-300">Key Property: Vector addition is commutative</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2"><strong>a</strong> + <strong>b</strong> = <strong>b</strong> + <strong>a</strong></p>
          </div>
        </div>

        {/* Parallelogram Law */}
        <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-600 dark:border-teal-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-300 mb-4">Parallelogram Law of Addition</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            To add <strong>a</strong> + <strong>b</strong>:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>Draw both vectors <strong>a</strong> and <strong>b</strong> starting from the same point</li>
            <li>Complete a parallelogram with <strong>a</strong> and <strong>b</strong> as adjacent sides</li>
            <li>The diagonal from the common starting point is the resultant <strong>a</strong> + <strong>b</strong></li>
          </ol>
        </div>

        {/* Worked Examples 1B */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Worked Examples</h3>

          <div className="space-y-6">
            {/* Example 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 3: Adding Two Displacement Vectors</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A person walks 3 m east (<strong>a</strong>), then 4 m north (<strong>b</strong>). Find the resultant displacement <strong>a</strong> + <strong>b</strong>.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Using the triangle law:<br />
                  1. Draw <strong>a</strong> = 3 m east (horizontal arrow right)<br />
                  2. From the tip of <strong>a</strong>, draw <strong>b</strong> = 4 m north (vertical arrow up)<br />
                  3. The resultant connects the start of <strong>a</strong> to the end of <strong>b</strong><br /><br />

                  Using Pythagoras: |<strong>a</strong> + <strong>b</strong>| = √(3² + 4²) = √25 = 5 m<br /><br />

                  Direction: tan θ = 4/3, so θ = 53.1° north of east<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Resultant: 5 m at 53.1° north of east
                  </span>
                </p>
              </div>
            </div>

            {/* Example 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 4: Adding Three Vectors</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Find <strong>p</strong> + <strong>q</strong> + <strong>r</strong> where <strong>p</strong> = 2 m east, <strong>q</strong> = 3 m east, <strong>r</strong> = 1 m west.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Add vectors sequentially using triangle law:<br /><br />

                  Step 1: <strong>p</strong> + <strong>q</strong> = 2 m east + 3 m east = 5 m east<br />
                  Step 2: (<strong>p</strong> + <strong>q</strong>) + <strong>r</strong> = 5 m east + 1 m west = 4 m east<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Resultant: 4 m east
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems 1B */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Practice Problems</h3>

          <div className="space-y-4">
            {[
              {
                id: '1b-1',
                question: 'Add vectors <strong>a</strong> = 5 m south and <strong>b</strong> = 12 m east. Find the magnitude and direction of the resultant.',
                solution: 'Magnitude: √(5² + 12²) = √169 = 13 m. Direction: tan θ = 5/12, θ = 22.6° south of east. Resultant: 13 m at 22.6° south of east.'
              },
              {
                id: '1b-2',
                question: 'If <strong>u</strong> = 6 N right and <strong>v</strong> = 8 N right, find <strong>u</strong> + <strong>v</strong>.',
                solution: '<strong>u</strong> + <strong>v</strong> = 6 N + 8 N = 14 N right (vectors in same direction add directly)'
              },
              {
                id: '1b-3',
                question: 'A boat travels 10 km north, then 5 km west. Find the resultant displacement.',
                solution: 'Magnitude: √(10² + 5²) = √125 = 11.2 km. Direction: tan θ = 5/10, θ = 26.6° west of north. Resultant: 11.2 km at 26.6° west of north.'
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

      {/* Section 1C: Geometric Vector Subtraction */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-red-700 dark:text-red-400 mb-6 pb-2 border-b-2 border-red-300 dark:border-red-600">
          Section 1C: Geometric Vector Subtraction
        </h2>

        {/* Subtraction Rule */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 dark:border-red-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-4">Vector Subtraction as Addition of Negative</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            To subtract vectors: <strong>a</strong> - <strong>b</strong> = <strong>a</strong> + (<strong>-b</strong>)
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li>Find <strong>-b</strong> (reverse the direction of <strong>b</strong>)</li>
            <li>Add <strong>a</strong> and <strong>-b</strong> using the triangle law</li>
            <li>The resultant is <strong>a</strong> - <strong>b</strong></li>
          </ol>
          <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 rounded">
            <p className="font-semibold text-red-800 dark:text-red-300">Important: Subtraction is NOT commutative</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2"><strong>a</strong> - <strong>b</strong> ≠ <strong>b</strong> - <strong>a</strong></p>
          </div>
        </div>

        {/* Worked Examples 1C */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Worked Examples</h3>

          <div className="space-y-6">
            {/* Example 5 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 5: Subtracting Vectors</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                If <strong>a</strong> = 8 m east and <strong>b</strong> = 3 m east, find <strong>a</strong> - <strong>b</strong>.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>a</strong> - <strong>b</strong> = <strong>a</strong> + (<strong>-b</strong>)<br /><br />

                  <strong>-b</strong> = 3 m west (opposite direction of <strong>b</strong>)<br /><br />

                  <strong>a</strong> + (<strong>-b</strong>) = 8 m east + 3 m west = 5 m east<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Result: 5 m east
                  </span>
                </p>
              </div>
            </div>

            {/* Example 6 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 6: Relative Velocity</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Car A travels at 60 km/h north (<strong>v</strong>ₐ) and Car B travels at 40 km/h north (<strong>v</strong>ᵦ).
                Find the velocity of Car A relative to Car B.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Relative velocity = <strong>v</strong>ₐ - <strong>v</strong>ᵦ<br /><br />

                  = 60 km/h north - 40 km/h north<br />
                  = 60 km/h north + 40 km/h south<br />
                  = 20 km/h north<br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Car A is moving 20 km/h north relative to Car B
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems 1C */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Practice Problems</h3>

          <div className="space-y-4">
            {[
              {
                id: '1c-1',
                question: 'If <strong>p</strong> = 10 N right and <strong>q</strong> = 6 N right, find <strong>p</strong> - <strong>q</strong>.',
                solution: '<strong>p</strong> - <strong>q</strong> = 10 N right + 6 N left = 4 N right'
              },
              {
                id: '1c-2',
                question: 'Subtract <strong>b</strong> = 5 m north from <strong>a</strong> = 12 m east. Find the magnitude and direction.',
                solution: '<strong>a</strong> - <strong>b</strong> = 12 m east + 5 m south. Magnitude: √(12² + 5²) = 13 m. Direction: tan θ = 5/12, θ = 22.6° south of east.'
              },
              {
                id: '1c-3',
                question: 'Does <strong>a</strong> - <strong>b</strong> = <strong>b</strong> - <strong>a</strong>? Explain with an example.',
                solution: 'No. If <strong>a</strong> = 5 m east and <strong>b</strong> = 3 m east, then <strong>a</strong> - <strong>b</strong> = 2 m east, but <strong>b</strong> - <strong>a</strong> = 2 m west. The results are opposite (negatives of each other).'
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

      {/* Section 1D: Scalar Multiplication */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-6 pb-2 border-b-2 border-purple-300 dark:border-purple-600">
          Section 1D: Geometric Scalar Multiplication
        </h2>

        {/* Scalar Multiplication Rules */}
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600 dark:border-purple-400 p-6 mb-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-4">Multiplying a Vector by a Scalar</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            When multiplying vector <strong>v</strong> by scalar k (written k<strong>v</strong>):
          </p>
          <div className="space-y-4 ml-4">
            <div>
              <p className="font-semibold text-purple-700 dark:text-purple-400">If k &gt; 0 (positive):</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                <li>Direction: <span className="font-semibold">same as <strong>v</strong></span></li>
                <li>Magnitude: <span className="font-semibold">k times |<strong>v</strong>|</span></li>
                <li>Example: 3<strong>v</strong> has same direction as <strong>v</strong>, length 3|<strong>v</strong>|</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-purple-700 dark:text-purple-400">If k &lt; 0 (negative):</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                <li>Direction: <span className="font-semibold">opposite to <strong>v</strong></span></li>
                <li>Magnitude: <span className="font-semibold">|k| times |<strong>v</strong>|</span></li>
                <li>Example: -2<strong>v</strong> has opposite direction to <strong>v</strong>, length 2|<strong>v</strong>|</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-purple-700 dark:text-purple-400">If k = 0:</p>
              <p className="text-gray-700 dark:text-gray-300 ml-4">0<strong>v</strong> = <strong>0</strong> (zero vector - no magnitude, no direction)</p>
            </div>
          </div>
        </div>

        {/* Properties */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Properties of Scalar Multiplication</h3>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p>• k(<strong>a</strong> + <strong>b</strong>) = k<strong>a</strong> + k<strong>b</strong> <span className="text-sm italic">(distributive over vector addition)</span></p>
            <p>• (k + m)<strong>a</strong> = k<strong>a</strong> + m<strong>a</strong> <span className="text-sm italic">(distributive over scalar addition)</span></p>
            <p>• k(m<strong>a</strong>) = (km)<strong>a</strong> <span className="text-sm italic">(associative)</span></p>
            <p>• 1<strong>a</strong> = <strong>a</strong> <span className="text-sm italic">(identity)</span></p>
          </div>
        </div>

        {/* Worked Examples 1D */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Worked Examples</h3>

          <div className="space-y-6">
            {/* Example 7 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 7: Scalar Multiples</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                If <strong>v</strong> = 4 m east, find: a) 3<strong>v</strong>, b) -2<strong>v</strong>, c) 0.5<strong>v</strong>
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  a) 3<strong>v</strong> = 3 × 4 m east = <span className="font-semibold text-green-600 dark:text-green-400">12 m east</span>
                  (same direction, 3 times the magnitude)<br /><br />

                  b) -2<strong>v</strong> = 2 × 4 m west = <span className="font-semibold text-green-600 dark:text-green-400">8 m west</span>
                  (opposite direction, 2 times the magnitude)<br /><br />

                  c) 0.5<strong>v</strong> = 0.5 × 4 m east = <span className="font-semibold text-green-600 dark:text-green-400">2 m east</span>
                  (same direction, half the magnitude)
                </p>
              </div>
            </div>

            {/* Example 8 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-5 rounded-r-lg">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example 8: Simplifying Expressions</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Simplify: 2(<strong>a</strong> + <strong>b</strong>) - 3<strong>a</strong> + <strong>b</strong>
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Solution:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  = 2<strong>a</strong> + 2<strong>b</strong> - 3<strong>a</strong> + <strong>b</strong> <span className="text-sm italic">(distribute the 2)</span><br />
                  = 2<strong>a</strong> - 3<strong>a</strong> + 2<strong>b</strong> + <strong>b</strong> <span className="text-sm italic">(group like terms)</span><br />
                  = -<strong>a</strong> + 3<strong>b</strong> <span className="text-sm italic">(combine)</span><br /><br />

                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Final answer: -<strong>a</strong> + 3<strong>b</strong> or 3<strong>b</strong> - <strong>a</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems 1D */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Practice Problems</h3>

          <div className="space-y-4">
            {[
              {
                id: '1d-1',
                question: 'If <strong>p</strong> = 6 N upward, find: a) 4<strong>p</strong>, b) -<strong>p</strong>, c) -0.5<strong>p</strong>',
                solution: 'a) 4<strong>p</strong> = 24 N upward, b) -<strong>p</strong> = 6 N downward, c) -0.5<strong>p</strong> = 3 N downward'
              },
              {
                id: '1d-2',
                question: 'Simplify: 5<strong>x</strong> - 2(<strong>x</strong> + <strong>y</strong>) + 3<strong>y</strong>',
                solution: '5<strong>x</strong> - 2<strong>x</strong> - 2<strong>y</strong> + 3<strong>y</strong> = 3<strong>x</strong> + <strong>y</strong>'
              },
              {
                id: '1d-3',
                question: 'If <strong>a</strong> and <strong>b</strong> are vectors with |<strong>a</strong>| = 3 and |<strong>b</strong>| = 4, find |2<strong>a</strong>| and |-3<strong>b</strong>|.',
                solution: '|2<strong>a</strong>| = 2 × 3 = 6, |-3<strong>b</strong>| = 3 × 4 = 12 (magnitude is always positive)'
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
      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 border-2 border-indigo-300 dark:border-indigo-600 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-indigo-800 dark:text-indigo-300 mb-4">Key Takeaways</h2>
        <ul className="space-y-2 text-gray-800 dark:text-gray-200">
          <li className="flex items-start">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold mr-2">✓</span>
            <span><strong>Scalars</strong> have magnitude only; <strong>vectors</strong> have magnitude and direction</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold mr-2">✓</span>
            <span>Equal vectors have same magnitude and direction (position doesn't matter)</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold mr-2">✓</span>
            <span>Negative vector <strong>-v</strong> has same magnitude as <strong>v</strong> but opposite direction</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold mr-2">✓</span>
            <span><strong>Triangle law:</strong> Add vectors nose-to-tail; resultant goes from start to finish</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold mr-2">✓</span>
            <span><strong>Parallelogram law:</strong> Vectors from same point; diagonal is the resultant</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold mr-2">✓</span>
            <span>Vector addition is commutative: <strong>a</strong> + <strong>b</strong> = <strong>b</strong> + <strong>a</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold mr-2">✓</span>
            <span>Vector subtraction: <strong>a</strong> - <strong>b</strong> = <strong>a</strong> + (<strong>-b</strong>)</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold mr-2">✓</span>
            <span>Scalar multiplication: k<strong>v</strong> changes magnitude by |k|; negative k reverses direction</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VectorFundamentals;
