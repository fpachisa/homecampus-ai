import { useState } from 'react';

const QuadraticFundamentals = () => {
  const [testA, setTestA] = useState(1);
  const [testB, setTestB] = useState(0);
  const [testC, setTestC] = useState(0);
  const [testX, setTestX] = useState(0);
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  // Calculate y for given x
  const calculateY = (a: number, b: number, c: number, x: number) => {
    return a * x * x + b * x + c;
  };

  const yValue = calculateY(testA, testB, testC, testX);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Quadratic Functions Fundamentals</h1>
        <p className="text-lg">Understanding quadratic functions, parabolas, and the standard form</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is a Quadratic Function? */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. What is a Quadratic Function?</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Definition:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              A <strong>quadratic function</strong> is a relationship between two variables which can be written in the form:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded my-3">
              <p className="text-center text-3xl font-mono text-gray-900 dark:text-gray-100">
                y = ax² + bx + c
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                where a, b, c are constants and a ≠ 0
              </p>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
              Using function notation, we can also write: <span className="font-mono">f(x) = ax² + bx + c</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
              <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Standard Form Components:</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li><span className="font-mono font-bold">a</span> - coefficient of x² (leading coefficient)</li>
                <li><span className="font-mono font-bold">b</span> - coefficient of x (linear coefficient)</li>
                <li><span className="font-mono font-bold">c</span> - constant term (y-intercept)</li>
                <li className="text-red-600 dark:text-red-400 font-bold">Important: a ≠ 0</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h3 className="font-bold mb-3 text-green-700 dark:text-green-300">Examples of Quadratics:</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <li className="font-mono">y = x² <span className="text-gray-600 dark:text-gray-400">(a=1, b=0, c=0)</span></li>
                <li className="font-mono">y = 2x² + 4x - 5 <span className="text-gray-600 dark:text-gray-400">(a=2, b=4, c=-5)</span></li>
                <li className="font-mono">y = -x² + 3x <span className="text-gray-600 dark:text-gray-400">(a=-1, b=3, c=0)</span></li>
                <li className="font-mono">y = 3x² - 6 <span className="text-gray-600 dark:text-gray-400">(a=3, b=0, c=-6)</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 dark:border-yellow-400">
            <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-300">Important:</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              The graph of any quadratic function is a curve called a <strong>parabola</strong>.
              Parabolas are U-shaped curves that can open upwards or downwards.
            </p>
          </div>
        </div>

        {/* Section 2: Finding y Given x */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. Finding y Given x</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              For any given value of x, the corresponding value of y can be found by <strong>substituting</strong> into the function.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 1:</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">Suppose <span className="font-mono">y = 2x² + 4x - 5</span>. Find the value of y when:</p>
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">a) x = 0 and b) x = 3</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample1 ? '▼' : '▶'}</span>
            </button>
            {showExample1 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-3">
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100 mb-1">a) When x = 0:</p>
                  <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200">
                    <p>y = 2(0)² + 4(0) - 5</p>
                    <p className="ml-4">= 0 + 0 - 5</p>
                    <p className="ml-4 text-green-600 dark:text-green-400 font-bold">= -5</p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100 mb-1">b) When x = 3:</p>
                  <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200">
                    <p>y = 2(3)² + 4(3) - 5</p>
                    <p className="ml-4">= 2(9) + 12 - 5</p>
                    <p className="ml-4">= 18 + 12 - 5</p>
                    <p className="ml-4 text-green-600 dark:text-green-400 font-bold">= 25</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded mb-4 border border-purple-200 dark:border-purple-700">
            <p className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Interactive: Evaluate a Quadratic Function</p>
            <div className="space-y-3">
              <div className="flex gap-2 items-center flex-wrap">
                <span className="text-gray-800 dark:text-gray-200">y =</span>
                <input
                  type="number"
                  value={testA}
                  onChange={(e) => setTestA(Number(e.target.value))}
                  className="px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded w-20 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                <span className="text-gray-800 dark:text-gray-200">x² +</span>
                <input
                  type="number"
                  value={testB}
                  onChange={(e) => setTestB(Number(e.target.value))}
                  className="px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded w-20 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                <span className="text-gray-800 dark:text-gray-200">x +</span>
                <input
                  type="number"
                  value={testC}
                  onChange={(e) => setTestC(Number(e.target.value))}
                  className="px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded w-20 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-gray-800 dark:text-gray-200">When x =</span>
                <input
                  type="number"
                  value={testX}
                  onChange={(e) => setTestX(Number(e.target.value))}
                  className="px-3 py-2 border-2 border-gray-300 dark:border-gray-600 rounded w-24 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-3 rounded bg-blue-100 dark:bg-blue-900/50">
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  <strong>y = {yValue}</strong>
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Calculation: {testA}({testX})² + {testB}({testX}) + {testC} = {testA * testX * testX} + {testB * testX} + {testC} = {yValue}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Finding x Given y */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">3. Finding x Given y</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 mb-4">
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              When we substitute a value for y, we are left with a <strong>quadratic equation</strong> which we need to solve for x.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Since the equation is quadratic, there may be <strong>0, 1, or 2</strong> possible values for x for any given value of y.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 2:</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">Suppose <span className="font-mono">y = x² - 6x + 8</span>. Find the value(s) of x for which <span className="font-mono">y = -1</span>:</p>
            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample2 ? '▼' : '▶'}</span>
            </button>
            {showExample2 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-2">
                <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200">
                  <p>When y = -1:</p>
                  <p className="ml-4">x² - 6x + 8 = -1</p>
                  <p className="ml-4">x² - 6x + 9 = 0</p>
                  <p className="ml-4">(x - 3)² = 0</p>
                  <p className="ml-4 text-green-600 dark:text-green-400 font-bold">∴ x = 3</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Note: This quadratic has only one solution (the parabola touches the line y = -1 at one point).
                </p>
              </div>
            )}
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600 mb-4">
            <h3 className="font-bold text-green-700 dark:text-green-300 mb-3">Example 3:</h3>
            <p className="mb-2 text-gray-800 dark:text-gray-200">Suppose <span className="font-mono">y = x² - 6x + 8</span>. Find the value(s) of x when <span className="font-mono">y = 15</span>:</p>
            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-bold text-gray-900 dark:text-gray-100">Show solution</span>
              <span className="float-right text-gray-600 dark:text-gray-400">{showExample3 ? '▼' : '▶'}</span>
            </button>
            {showExample3 && (
              <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded space-y-2">
                <div className="font-mono text-sm space-y-1 text-gray-800 dark:text-gray-200">
                  <p>When y = 15:</p>
                  <p className="ml-4">x² - 6x + 8 = 15</p>
                  <p className="ml-4">x² - 6x - 7 = 0</p>
                  <p className="ml-4">(x + 1)(x - 7) = 0</p>
                  <p className="ml-4 text-green-600 dark:text-green-400 font-bold">∴ x = -1 or x = 7</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Note: This quadratic has two solutions (the parabola crosses the line y = 15 at two points).
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Section 4: The Opening Problem */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">4. Real-World Application: Projectile Motion</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 dark:border-orange-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Tennis Ball Problem:</h3>
            <p className="mb-3 text-gray-800 dark:text-gray-200">
              Tennis player Bradley tosses the ball in the air before he serves it. The ball's height above the ground t seconds
              after it is tossed is given by the function:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded my-3">
              <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100">
                H(t) = -5t² + 6t + 2
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                where H is in metres and t is in seconds
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Think about:</h3>
            <ul className="space-y-3 text-gray-800 dark:text-gray-200">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">a)</span>
                <span>How high was the ball when it was released?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">b)</span>
                <span>What was the maximum height reached by the ball?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">c)</span>
                <span>Bradley hits the ball on its way down when it is 3 metres above the ground. How long after Bradley releases the ball does he hit it?</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              We'll learn how to solve these types of problems as we explore quadratic functions further!
            </p>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-600">
          <h3 className="font-bold text-xl mb-4 text-blue-900 dark:text-blue-200">Key Takeaways</h3>
          <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>A quadratic function has the form <span className="font-mono">y = ax² + bx + c</span> where a ≠ 0</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>The graph of a quadratic function is a parabola (U-shaped curve)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>To find y given x, substitute the x-value into the function</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>To find x given y, set up and solve a quadratic equation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>A quadratic equation may have 0, 1, or 2 solutions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Quadratic functions model many real-world situations, especially projectile motion</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuadraticFundamentals;
