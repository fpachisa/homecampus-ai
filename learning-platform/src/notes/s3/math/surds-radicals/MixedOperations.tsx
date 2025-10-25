import { useState } from 'react';

const MixedOperations = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showExample4, setShowExample4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Mixed Operations with Surds</h1>
        <p className="text-lg">Combine all surd operations in complex multi-step problems</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Strategy for Mixed Operations */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-pink-800 dark:text-pink-300">1. Strategy for Complex Problems</h2>

          <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg border-l-4 border-pink-500 dark:border-pink-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Order of Operations:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              When working with complex surd expressions, follow a systematic approach:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li><strong>Simplify</strong> all individual surds first</li>
              <li><strong>Expand</strong> any brackets using distributive property or FOIL</li>
              <li><strong>Combine</strong> like surds (add/subtract)</li>
              <li><strong>Rationalize</strong> denominators if needed</li>
              <li><strong>Simplify</strong> the final expression</li>
            </ol>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Common Mistakes to Avoid:</h3>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <li>✗ √a + √b ≠ √(a + b) <span className="text-red-600 dark:text-red-400 ml-2">Wrong!</span></li>
              <li>✗ √a × √b ≠ a × b <span className="text-red-600 dark:text-red-400 ml-2">Wrong!</span></li>
              <li>✓ √a × √b = √(ab) <span className="text-green-600 dark:text-green-400 ml-2">Correct!</span></li>
              <li>✓ √a + √a = 2√a <span className="text-green-600 dark:text-green-400 ml-2">Correct!</span></li>
            </ul>
          </div>
        </div>

        {/* Section 2: Multi-Step Simplification */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-pink-800 dark:text-pink-300">2. Multi-Step Simplification</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example: √50 + √18 - √32</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Simplify each surd</p>
              <p className="font-mono ml-4">√50 = √(25 × 2) = 5√2</p>
              <p className="font-mono ml-4">√18 = √(9 × 2) = 3√2</p>
              <p className="font-mono ml-4">√32 = √(16 × 2) = 4√2</p>

              <p className="font-semibold mt-3 text-gray-900 dark:text-gray-100">Step 2: Substitute and combine</p>
              <p className="font-mono ml-4">= 5√2 + 3√2 - 4√2</p>
              <p className="font-mono ml-4">= (5 + 3 - 4)√2</p>
              <p className="font-mono ml-4 font-bold">= 4√2</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example: (√12 + √27)(√3)</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p className="font-semibold text-gray-900 dark:text-gray-100">Step 1: Simplify surds in brackets</p>
              <p className="font-mono ml-4">√12 = 2√3, √27 = 3√3</p>
              <p className="font-mono ml-4">= (2√3 + 3√3)(√3)</p>
              <p className="font-mono ml-4">= 5√3 × √3</p>

              <p className="font-semibold mt-3 text-gray-900 dark:text-gray-100">Step 2: Multiply</p>
              <p className="font-mono ml-4">= 5 × (√3 × √3)</p>
              <p className="font-mono ml-4 font-bold">= 5 × 3 = 15</p>
            </div>
          </div>
        </div>

        {/* Section 3: Expanding and Simplifying */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-pink-800 dark:text-pink-300">3. Expanding with Simplification</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Complex Bracket Expansion:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When expanding brackets, <strong>simplify surds before expanding</strong> when possible to make the process easier.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example: (√8 + √2)(√8 - √2)</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p className="font-semibold text-gray-900 dark:text-gray-100">Method 1: Simplify first (easier)</p>
              <p className="font-mono ml-4">√8 = 2√2</p>
              <p className="font-mono ml-4">= (2√2 + √2)(2√2 - √2)</p>
              <p className="font-mono ml-4">= (3√2)(√2)</p>
              <p className="font-mono ml-4">= 3 × 2 = 6</p>

              <p className="font-semibold mt-3 text-gray-900 dark:text-gray-100">Method 2: Difference of squares</p>
              <p className="font-mono ml-4">= (√8)² - (√2)²</p>
              <p className="font-mono ml-4">= 8 - 2 = 6</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example: (√12 + 2)(√3 - 1)</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p className="font-mono">(√12 + 2)(√3 - 1)</p>
              <p className="text-gray-600 dark:text-gray-400">↓ Simplify √12 first</p>
              <p className="font-mono">= (2√3 + 2)(√3 - 1)</p>
              <p className="text-gray-600 dark:text-gray-400">↓ Expand using FOIL</p>
              <p className="font-mono">= 2√3 × √3 + 2√3 × (-1) + 2 × √3 + 2 × (-1)</p>
              <p className="font-mono">= 6 - 2√3 + 2√3 - 2</p>
              <p className="font-mono font-bold">= 4</p>
            </div>
          </div>
        </div>

        {/* Section 4: Rationalization in Context */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-pink-800 dark:text-pink-300">4. Complex Rationalization</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Multi-Step Rationalization:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Some problems require simplification <strong>before and after</strong> rationalization.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example: Simplify and rationalize (√8 + √2)/√2</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p className="font-semibold text-gray-900 dark:text-gray-100">Method 1: Simplify first</p>
              <p className="font-mono ml-4">√8 = 2√2</p>
              <p className="font-mono ml-4">= (2√2 + √2)/√2</p>
              <p className="font-mono ml-4">= 3√2/√2</p>
              <p className="font-mono ml-4">= 3</p>

              <p className="font-semibold mt-3 text-gray-900 dark:text-gray-100">Method 2: Split the fraction</p>
              <p className="font-mono ml-4">= √8/√2 + √2/√2</p>
              <p className="font-mono ml-4">= √(8/2) + 1</p>
              <p className="font-mono ml-4">= √4 + 1</p>
              <p className="font-mono ml-4">= 2 + 1 = 3</p>
            </div>
          </div>
        </div>

        {/* Section 5: Problem Solving Applications */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-pink-800 dark:text-pink-300">5. Real-World Applications</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Geometry and Surds:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Surds frequently appear in geometry problems involving:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm mt-2 text-gray-800 dark:text-gray-200">
              <li>Diagonal lengths of squares and rectangles</li>
              <li>Heights of equilateral triangles</li>
              <li>Areas and perimeters involving √2, √3, etc.</li>
              <li>Pythagorean theorem calculations</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Example: Square with diagonal 10 cm</h3>
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              <p className="text-gray-900 dark:text-gray-100">If a square has diagonal 10 cm, find its side length and area.</p>

              <p className="font-semibold mt-3 text-gray-900 dark:text-gray-100">Solution:</p>
              <p className="ml-4">For a square with side s, diagonal d = s√2</p>
              <p className="font-mono ml-4">s√2 = 10</p>
              <p className="font-mono ml-4">s = 10/√2</p>
              <p className="text-gray-600 dark:text-gray-400 ml-4">↓ Rationalize</p>
              <p className="font-mono ml-4">s = 10√2/2 = 5√2 cm</p>

              <p className="font-semibold mt-3 text-gray-900 dark:text-gray-100">Area:</p>
              <p className="font-mono ml-4">A = s² = (5√2)²</p>
              <p className="font-mono ml-4">= 25 × 2</p>
              <p className="font-mono ml-4 font-bold">= 50 cm²</p>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-pink-800 dark:text-pink-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-pink-100 dark:bg-pink-900/50 rounded-lg font-semibold hover:bg-pink-200 dark:hover:bg-pink-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Simplify (√45 + √20)(√5)
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-pink-500 dark:border-pink-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Simplify: (√45 + √20)(√5)</p>

                <div className="ml-4 space-y-2 bg-gray-50 dark:bg-gray-700/50 p-4 rounded text-gray-800 dark:text-gray-200">
                  <p className="font-mono">(√45 + √20)(√5)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Simplify surds in brackets</p>
                  <p className="font-mono">√45 = √(9 × 5) = 3√5</p>
                  <p className="font-mono">√20 = √(4 × 5) = 2√5</p>
                  <p className="font-mono">= (3√5 + 2√5)(√5)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Combine like surds</p>
                  <p className="font-mono">= 5√5 × √5</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Multiply</p>
                  <p className="font-mono">= 5 × 5</p>
                  <p className="font-mono font-bold">= 25</p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-pink-100 dark:bg-pink-900/50 rounded-lg font-semibold hover:bg-pink-200 dark:hover:bg-pink-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Expand (√18 - √2)(√8 + √2)
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-pink-500 dark:border-pink-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Expand and simplify: (√18 - √2)(√8 + √2)</p>

                <div className="ml-4 space-y-2 bg-gray-50 dark:bg-gray-700/50 p-4 rounded text-gray-800 dark:text-gray-200">
                  <p className="font-mono">(√18 - √2)(√8 + √2)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Simplify surds first</p>
                  <p className="font-mono">= (3√2 - √2)(2√2 + √2)</p>
                  <p className="font-mono">= (2√2)(3√2)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Or use FOIL</p>
                  <p className="font-mono">= 3√2 × 2√2 + 3√2 × √2 - √2 × 2√2 - √2 × √2</p>
                  <p className="font-mono">= 12 + 6 - 4 - 2</p>
                  <p className="font-mono font-bold">= 12</p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left p-4 bg-pink-100 dark:bg-pink-900/50 rounded-lg font-semibold hover:bg-pink-200 dark:hover:bg-pink-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample3 ? '▼' : '▶'} Example 3: Rationalize (√12 + √3)/(√3)
            </button>

            {showExample3 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-pink-500 dark:border-pink-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Simplify: (√12 + √3)/(√3)</p>

                <div className="ml-4 space-y-2 bg-gray-50 dark:bg-gray-700/50 p-4 rounded text-gray-800 dark:text-gray-200">
                  <p className="font-mono">(√12 + √3)/(√3)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Simplify √12</p>
                  <p className="font-mono">= (2√3 + √3)/(√3)</p>
                  <p className="font-mono">= 3√3/√3</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Simplify</p>
                  <p className="font-mono font-bold">= 3</p>

                  <p className="text-sm mt-3 text-gray-600 dark:text-gray-400">Alternative: Split the fraction</p>
                  <p className="font-mono">= √12/√3 + √3/√3</p>
                  <p className="font-mono">= √4 + 1</p>
                  <p className="font-mono">= 2 + 1 = 3</p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample4(!showExample4)}
              className="w-full text-left p-4 bg-pink-100 dark:bg-pink-900/50 rounded-lg font-semibold hover:bg-pink-200 dark:hover:bg-pink-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample4 ? '▼' : '▶'} Example 4: Simplify (3 + √2)² - (3 - √2)²
            </button>

            {showExample4 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-pink-500 dark:border-pink-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Simplify: (3 + √2)² - (3 - √2)²</p>

                <div className="ml-4 space-y-2 bg-gray-50 dark:bg-gray-700/50 p-4 rounded text-gray-800 dark:text-gray-200">
                  <p className="font-mono">(3 + √2)² - (3 - √2)²</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Expand each square</p>
                  <p className="font-mono">(3 + √2)² = 9 + 6√2 + 2 = 11 + 6√2</p>
                  <p className="font-mono">(3 - √2)² = 9 - 6√2 + 2 = 11 - 6√2</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">↓ Subtract</p>
                  <p className="font-mono">= (11 + 6√2) - (11 - 6√2)</p>
                  <p className="font-mono">= 11 + 6√2 - 11 + 6√2</p>
                  <p className="font-mono font-bold">= 12√2</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-pink-800 dark:text-pink-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. Simplify completely:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) √72 - √32 + √18</p>
                <p>b) (√27 + √12)(√3)</p>
                <p>c) (√8 + √2)²</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-pink-600 dark:text-pink-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> 6√2 - 4√2 + 3√2 = 5√2</p>
                  <p><strong>b)</strong> (3√3 + 2√3)(√3) = 5√3 × √3 = 15</p>
                  <p><strong>c)</strong> (2√2 + √2)² = (3√2)² = 18</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Expand and simplify:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) (√50 - √2)(√8 + √2)</p>
                <p>b) (2√3 + 1)(2√3 - 1)</p>
                <p>c) (√20 + √5)²</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-pink-600 dark:text-pink-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> (5√2 - √2)(2√2 + √2) = 4√2 × 3√2 = 24</p>
                  <p><strong>b)</strong> (2√3)² - 1² = 12 - 1 = 11</p>
                  <p><strong>c)</strong> (2√5 + √5)² = (3√5)² = 45</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                3. Rationalize and simplify:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) (√18 + √2)/√2</p>
                <p>b) (√12 - √3)/(√3)</p>
                <p>c) (√75 + √27)/(√3)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-pink-600 dark:text-pink-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> (3√2 + √2)/√2 = 4√2/√2 = 4</p>
                  <p><strong>b)</strong> (2√3 - √3)/√3 = √3/√3 = 1</p>
                  <p><strong>c)</strong> (5√3 + 3√3)/√3 = 8√3/√3 = 8</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>Systematic approach:</strong> Simplify → Expand → Combine → Rationalize → Simplify again</li>
            <li><strong>Simplify early:</strong> Simplifying surds before operations makes problems much easier</li>
            <li>Use <strong>difference of squares</strong> (a + √b)(a - √b) = a² - b to eliminate surds</li>
            <li><strong>Check your work:</strong> Final answer should have simplified surds and rational denominators</li>
            <li>Remember common mistakes: √a + √b ≠ √(a + b)</li>
            <li><strong>Real-world applications:</strong> Surds appear in geometry (diagonals, heights, areas)</li>
            <li>Practice recognizing patterns: √2, √3, √5 appear frequently in geometry</li>
            <li>Always look for opportunities to simplify at each step</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MixedOperations;
