import { useState } from 'react';

const FunctionNotation = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [inputValue, setInputValue] = useState(2);

  // Example function: f(x) = 2x - 1
  const f = (x: number) => 2 * x - 1;
  const result = f(inputValue);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Function Notation</h1>
        <p className="text-lg">Understanding and using f(x) notation to represent and evaluate functions</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Function Notation Basics */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. Function Notation Basics</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Function Machine:</h3>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              We can think of a function as a <strong>machine</strong> that takes an input and produces an output.
            </p>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-600">
              <div className="flex items-center justify-between gap-4">
                <div className="text-center flex-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">INPUT</p>
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded font-mono text-lg text-gray-900 dark:text-gray-100">x</div>
                </div>

                <div className="text-3xl text-blue-600 dark:text-blue-400">→</div>

                <div className="text-center flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-lg">
                  <p className="text-sm mb-2">FUNCTION</p>
                  <p className="font-bold text-lg">Double and subtract 1</p>
                  <p className="text-xs mt-2 opacity-90">f(x) = 2x − 1</p>
                </div>

                <div className="text-3xl text-blue-600 dark:text-blue-400">→</div>

                <div className="text-center flex-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">OUTPUT</p>
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded font-mono text-lg text-gray-900 dark:text-gray-100">2x − 1</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded border-2 border-indigo-300 dark:border-indigo-600 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Reading f(x):</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded space-y-3">
              <div className="text-center">
                <p className="text-3xl font-mono mb-3 text-gray-900 dark:text-gray-100">f(x)</p>
                <p className="text-lg text-gray-700 dark:text-gray-300">is read as <strong className="text-indigo-600 dark:text-indigo-400">"f of x"</strong></p>
              </div>
              <div className="border-t border-gray-300 dark:border-gray-600 pt-3 text-sm text-gray-800 dark:text-gray-200">
                <p className="mb-2"><strong>f</strong> is the <strong>name of the function</strong></p>
                <p className="mb-2"><strong>x</strong> is the <strong>input variable</strong></p>
                <p><strong>f(x)</strong> represents the <strong>output value</strong> (also called the <strong>function value</strong> or <strong>image</strong>)</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Traditional Notation:</h3>
              <p className="font-mono text-center text-xl mb-2 text-gray-900 dark:text-gray-100">y = 2x − 1</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                The variable y depends on x
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-indigo-400 dark:border-indigo-600">
              <h3 className="font-bold mb-3 text-indigo-700 dark:text-indigo-300">Function Notation:</h3>
              <p className="font-mono text-center text-xl mb-2 text-gray-900 dark:text-gray-100">f(x) = 2x − 1</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                More explicit: f is the function that converts x to 2x − 1
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">Important:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              The equations <strong>y = 2x − 1</strong> and <strong>f(x) = 2x − 1</strong> represent the same function.
              We can also write <strong>y = f(x)</strong>, meaning "y equals f of x".
            </p>
          </div>
        </div>

        {/* Section 2: Evaluating Functions */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Evaluating Functions</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What Does f(x) Mean?</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              <strong>f(x)</strong> is the value of <strong>y</strong> for a given value of <strong>x</strong>.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-center text-xl font-mono mb-2 text-gray-900 dark:text-gray-100">
                y = f(x)
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                f(x) is sometimes called the <strong>function value</strong> or <strong>image</strong> of x
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example: Evaluating f(2)</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">For f(x) = 2x − 1, find f(2):</p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded space-y-2 font-mono text-sm text-gray-900 dark:text-gray-100">
              <p>f(x) = 2x − 1</p>
              <p className="text-gray-600 dark:text-gray-400">↓ Replace x with 2</p>
              <p>f(2) = 2(2) − 1</p>
              <p>f(2) = 4 − 1</p>
              <p className="font-bold text-lg">f(2) = 3</p>
            </div>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
              This means the point (2, 3) lies on the graph of the function.
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded mb-4 border border-purple-200 dark:border-purple-700">
            <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Interactive: Evaluate f(x) = 2x − 1</p>
            <div className="flex gap-3 items-center mb-3">
              <span className="text-gray-800 dark:text-gray-200">f(</span>
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
                className="px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded w-24 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                placeholder="2"
              />
              <span className="text-gray-800 dark:text-gray-200">) = 2({inputValue}) − 1 = <strong className="text-blue-600 dark:text-blue-400">{result}</strong></span>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                The point <strong>({inputValue}, {result})</strong> lies on the graph of f(x) = 2x − 1
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Common Function Evaluations:</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">1. Evaluating at a Number:</p>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded font-mono text-sm text-gray-800 dark:text-gray-200">
                  <p>If f(x) = 3x² − 4x, find f(2)</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">f(2) = 3(2)² − 4(2) = 3(4) − 8 = 12 − 8 = 4</p>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">2. Evaluating at Negative Numbers:</p>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded font-mono text-sm text-gray-800 dark:text-gray-200">
                  <p>If f(x) = 3x² − 4x, find f(−5)</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">f(−5) = 3(−5)² − 4(−5) = 3(25) + 20 = 75 + 20 = 95</p>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">3. Evaluating at Expressions:</p>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded font-mono text-sm text-gray-800 dark:text-gray-200">
                  <p>If f(x) = 4 − 3x − x², find f(x + 2)</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">f(x + 2) = 4 − 3(x + 2) − (x + 2)²</p>
                  <p className="text-gray-600 dark:text-gray-400">= 4 − 3x − 6 − (x² + 4x + 4)</p>
                  <p className="text-gray-600 dark:text-gray-400">= 4 − 3x − 6 − x² − 4x − 4</p>
                  <p className="text-gray-600 dark:text-gray-400">= −x² − 7x − 6</p>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">4. Evaluating f(−x):</p>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded font-mono text-sm text-gray-800 dark:text-gray-200">
                  <p>If f(x) = 4 − 3x − x², find f(−x)</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">f(−x) = 4 − 3(−x) − (−x)²</p>
                  <p className="text-gray-600 dark:text-gray-400">= 4 + 3x − x²</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-2 border-yellow-400 dark:border-yellow-600">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">Key Strategy:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              To evaluate f(a), <strong>replace every x</strong> in the function rule with <strong>a</strong> (in parentheses if necessary),
              then simplify. Be careful with negative numbers and expressions!
            </p>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Basic Function Evaluation
            </button>

            {showExample1 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  For f(x) = 2x² − 3x + 2, find:
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">a) f(2)</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p className="font-mono">f(2) = 2(2)² − 3(2) + 2</p>
                      <p className="font-mono">= 2(4) − 6 + 2</p>
                      <p className="font-mono">= 8 − 6 + 2</p>
                      <p className="font-mono font-bold">= 4</p>
                      <p className="text-green-600 dark:text-green-400 mt-2">∴ The point (2, 4) lies on the graph.</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">b) f(−4)</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p className="font-mono">f(−4) = 2(−4)² − 3(−4) + 2</p>
                      <p className="font-mono">= 2(16) + 12 + 2</p>
                      <p className="font-mono">= 32 + 12 + 2</p>
                      <p className="font-mono font-bold">= 46</p>
                      <p className="text-green-600 dark:text-green-400 mt-2">∴ The point (−4, 46) lies on the graph.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/70 transition text-gray-900 dark:text-gray-100"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Evaluating at Expressions
            </button>

            {showExample2 && (
              <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-blue-500 dark:border-blue-400">
                <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  For g(x) = −5x + 3, find:
                </p>

                <div className="ml-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">a) g(−x)</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p className="font-mono">g(−x) = −5(−x) + 3</p>
                      <p className="font-mono font-bold">= 5x + 3</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">b) g(x + 4)</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p className="font-mono">g(x + 4) = −5(x + 4) + 3</p>
                      <p className="font-mono">= −5x − 20 + 3</p>
                      <p className="font-mono font-bold">= −5x − 17</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">c) g(x − 1) + 2</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p className="font-mono">g(x − 1) + 2 = [−5(x − 1) + 3] + 2</p>
                      <p className="font-mono">= −5x + 5 + 3 + 2</p>
                      <p className="font-mono font-bold">= −5x + 10</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">d) 2g(x/5)</p>
                    <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <p className="font-mono">2g(x/5) = 2[−5(x/5) + 3]</p>
                      <p className="font-mono">= 2[−x + 3]</p>
                      <p className="font-mono font-bold">= −2x + 6</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. For f(x) = x² + 3x − 1, find:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) f(0)</p>
                <p>b) f(3)</p>
                <p>c) f(−2)</p>
                <p>d) f(−1)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> f(0) = 0² + 3(0) − 1 = −1</p>
                  <p><strong>b)</strong> f(3) = 3² + 3(3) − 1 = 9 + 9 − 1 = 17</p>
                  <p><strong>c)</strong> f(−2) = (−2)² + 3(−2) − 1 = 4 − 6 − 1 = −3</p>
                  <p><strong>d)</strong> f(−1) = (−1)² + 3(−1) − 1 = 1 − 3 − 1 = −3</p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. For h(x) = 2x − 5, find and simplify:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) h(−x)</p>
                <p>b) h(x + 1)</p>
                <p>c) 3h(x − 2)</p>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">Show Solutions</summary>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> h(−x) = 2(−x) − 5 = −2x − 5</p>
                  <p><strong>b)</strong> h(x + 1) = 2(x + 1) − 5 = 2x + 2 − 5 = 2x − 3</p>
                  <p><strong>c)</strong> 3h(x − 2) = 3[2(x − 2) − 5] = 3[2x − 4 − 5] = 3[2x − 9] = 6x − 27</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>f(x)</strong> is read as "f of x" and represents the output value of the function</li>
            <li>A function can be thought of as a <strong>machine</strong> that transforms inputs to outputs</li>
            <li><strong>y = f(x)</strong> means "y equals f of x" - they represent the same value</li>
            <li>f(x) is also called the <strong>function value</strong> or <strong>image</strong> of x</li>
            <li>To evaluate <strong>f(a)</strong>, replace every x in the function with a</li>
            <li>Use <strong>parentheses</strong> when substituting negative numbers or expressions</li>
            <li>If f(a) = b, then the point <strong>(a, b)</strong> lies on the graph of the function</li>
            <li>Function notation makes it clear which variable is independent (input) and which is dependent (output)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FunctionNotation;
