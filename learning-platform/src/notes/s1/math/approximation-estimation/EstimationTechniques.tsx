import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function EstimationTechniques() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);
  const [showSolution6, setShowSolution6] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Estimation Techniques</h1>
        <p className="mt-2 text-blue-100">
          Learn powerful mental math strategies for quick approximations
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section A: Estimation by Rounding */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            A. Estimation by Rounding
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The simplest estimation strategy is to <strong>round each number</strong> before calculating. This gives you a quick "ballpark figure" to work with.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                When to Use Estimation by Rounding
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>• <strong>Shopping:</strong> "Do I have enough money?"</p>
                <p>• <strong>Quick checks:</strong> "Is my calculator answer reasonable?"</p>
                <p>• <strong>Mental math:</strong> When you need an approximate answer fast</p>
                <p>• <strong>Planning:</strong> "How many buses do we need?"</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Steps for Estimation by Rounding
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>1.</strong> Round each number to 1 significant figure (or another easy place value)</p>
                <p><strong>2.</strong> Perform the calculation with the rounded numbers</p>
                <p><strong>3.</strong> Check if the result makes sense</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: Shopping Estimation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Mrs Lim has $30. Can she buy milk ($22.50), cereal ($3.45), and buns ($2.80)?
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution by Estimation:</strong></p>
                <p>Round each price to the nearest dollar:</p>
                <p className="ml-4">Milk: $22.50 ≈ $23</p>
                <p className="ml-4">Cereal: $3.45 ≈ $3</p>
                <p className="ml-4">Buns: $2.80 ≈ $3</p>
                <p className="mt-3">Estimated total: $23 + $3 + $3 = $29</p>
                <p className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/30 rounded">
                  <strong>Answer:</strong> Yes, she has enough! Her estimate is $29, and she has $30.
                </p>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-2">
                  Actual total: $28.75 - the estimate was very close!
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 2: Estimating Calculations
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Estimate: <MathText>{'$347 - 482 + 659$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Round each number to the nearest hundred:</p>
                <p className="ml-4">347 ≈ 300</p>
                <p className="ml-4">482 ≈ 500</p>
                <p className="ml-4">659 ≈ 700</p>
                <p className="mt-3">Estimate: 300 − 500 + 700 = 500</p>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-2">
                  Actual answer: 524 - our estimate is close!
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 3: Multiplication Estimation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Estimate: <MathText>{'$23.92 \\times 4.801$'}</MathText> by rounding to 1 s.f.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Round to 1 s.f.:</p>
                <p className="ml-4">23.92 ≈ 20 (to 1 s.f.)</p>
                <p className="ml-4">4.801 ≈ 5 (to 1 s.f.)</p>
                <p className="mt-3">Estimate: <MathText>{'$20 \\times 5 = 100$'}</MathText></p>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-2">
                  Actual answer: 114.88... - estimate gives us the right order of magnitude!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Estimation by Rounding
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Estimate by rounding to 1 s.f.: (a) <MathText>{'$125 + 3.91 \\times 27.48$'}</MathText>, (b) <MathText>{'$13.24 \\times 4.83 \\times 6.09$'}</MathText>
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-3">
                  <p><strong>(a)</strong> <MathText>{'$125 + 3.91 \\times 27.48$'}</MathText></p>
                  <p className="ml-4">Round: 125 ≈ 100, 3.91 ≈ 4, 27.48 ≈ 30</p>
                  <p className="ml-4">Estimate: <MathText>{'$100 + 4 \\times 30 = 100 + 120 = 220$'}</MathText></p>

                  <p className="mt-3"><strong>(b)</strong> <MathText>{'$13.24 \\times 4.83 \\times 6.09$'}</MathText></p>
                  <p className="ml-4">Round: 13.24 ≈ 10, 4.83 ≈ 5, 6.09 ≈ 6</p>
                  <p className="ml-4">Estimate: <MathText>{'$10 \\times 5 \\times 6 = 300$'}</MathText></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section B: Cluster Values */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            B. Cluster Values and Compatible Numbers
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When numbers are <strong>close in value to each other</strong>, we can use a <strong className="text-blue-600 dark:text-blue-400">cluster value</strong> - one representative number for all of them.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 4: Salary Estimation with Cluster Values
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Five employees earn monthly salaries of $3,150, $2,980, $3,040, $2,890, and $2,950. Estimate the total monthly salary.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution using Cluster Value:</strong></p>
                <p>Notice all salaries are close to $3,000:</p>
                <p className="ml-4">$3,150 ≈ $3,000</p>
                <p className="ml-4">$2,980 ≈ $3,000</p>
                <p className="ml-4">$3,040 ≈ $3,000</p>
                <p className="ml-4">$2,890 ≈ $3,000</p>
                <p className="ml-4">$2,950 ≈ $3,000</p>
                <p className="mt-3"><strong>Cluster value:</strong> $3,000</p>
                <p className="mt-3">Estimated total: <MathText>{'$\\$3,000 \\times 5 = \\$15,000$'}</MathText></p>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-2">
                  Actual total: $15,010 - excellent estimate!
                </p>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                Compatible Numbers for Division
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Compatible numbers</strong> are number pairs that divide evenly, making mental calculation easier.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border border-purple-200 dark:border-purple-700">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Example 5: Bus Problem</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  1,180 students need buses. Each bus holds 40 students. Estimate buses needed.
                </p>
                <p className="mt-2"><strong>Solution:</strong></p>
                <p>Use compatible numbers:</p>
                <p className="ml-4">1,180 ≈ 1,200 (divisible by 40)</p>
                <p className="ml-4">40 stays as 40</p>
                <p className="mt-2">Estimate: <MathText>{'$1,200 \\div 40 = 30$'}</MathText> buses</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Cluster Values
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              The population of Singapore was 5,791,901 at a particular point in 2018. Give a meaningful estimation.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p>5,791,901 is very close to 6 million</p>
                  <p><strong>Meaningful estimation:</strong> Approximately 6 million or 5.8 million</p>
                  <p className="mt-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded text-sm">
                    This is much more practical than saying "five million seven hundred ninety-one thousand nine hundred one" in everyday conversation!
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section C: Benchmarks */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            C. Estimation Using Benchmarks
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong className="text-blue-600 dark:text-blue-400">Benchmarks</strong> are reference measurements we can use to estimate other measurements without tools.
            </p>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-3">
                Common Benchmarks
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="font-semibold">$1 coin diameter</p>
                  <p className="text-sm">≈ 2.5 cm</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="font-semibold">Arm span</p>
                  <p className="text-sm">≈ Your height</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="font-semibold">Cubit</p>
                  <p className="text-sm">≈ 45 cm (elbow to fingertip)</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="font-semibold">Footstep</p>
                  <p className="text-sm">≈ 30 cm</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 6: Using Coin Benchmark
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Sulin wants to estimate the thickness of a $1 coin based on a stack of 25 coins with height 5 mm.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Total height = 5 mm</p>
                <p>Number of coins = 25</p>
                <p>Estimated thickness per coin = <MathText>{'$5 \\div 25 = 0.2$'}</MathText> mm</p>
                <p className="mt-3">Or approximately <MathText>{'$0.2$'}</MathText> mm per coin</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 7: Using Arm Span
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                How could you estimate the width of a classroom using your arm span?
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p><strong>Step 1:</strong> Measure your arm span (approximately equal to your height)</p>
                <p><strong>Step 2:</strong> Walk across the room with arms spread, counting how many arm spans</p>
                <p><strong>Step 3:</strong> Multiply: (number of arm spans) × (your arm span length)</p>
                <p className="mt-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
                  <strong>Example:</strong> If your arm span is 1.5 m and you count 8 arm spans, the room is approximately <MathText>{'$8 \\times 1.5 = 12$'}</MathText> m wide.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Benchmarks
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Estimate the length of a line segment if it appears to be about 4 coin diameters long.
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p>$1 coin diameter ≈ 2.5 cm</p>
                  <p>Line is 4 coin diameters long</p>
                  <p>Estimated length: <MathText>{'$4 \\times 2.5 = 10$'}</MathText> cm</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section D: Decomposition-Recomposition */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            D. Decomposition-Recomposition Strategy
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For complex estimations, break the problem into smaller parts, estimate each part, then combine the estimates.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 8: Estimating Building Height
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Estimate the height of a 25-story building if each floor is about 3 m tall.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution using Decomposition:</strong></p>
                <p><strong>Decompose:</strong> Break into individual floors</p>
                <p><strong>Estimate each part:</strong> Each floor ≈ 3 m</p>
                <p><strong>Recompose:</strong> Total height = <MathText>{'$25 \\times 3 = 75$'}</MathText> m</p>
                <p className="mt-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
                  <strong>Answer:</strong> Approximately 75 m tall
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 9: Total Distance of Long Jumps
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                In a long jump event, an athlete made four attempts: 7.58 m, 7.62 m, 7.54 m, 7.63 m. Estimate total distance.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>All distances cluster around 7.6 m</p>
                <p>Use cluster value: 7.6 m for each jump</p>
                <p>Total: <MathText>{'$4 \\times 7.6 = 30.4$'}</MathText> m</p>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-2">
                  Actual total: 30.37 m - very close!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Decomposition
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Estimate the perimeter of a rectangular classroom if it's about 12 m long and 8 m wide.
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution using Decomposition:</strong></p>
                  <p>Perimeter = 2 × length + 2 × width</p>
                  <p>= <MathText>{'$2 \\times 12 + 2 \\times 8$'}</MathText></p>
                  <p>= <MathText>{'$24 + 16$'}</MathText></p>
                  <p>= <MathText>{'$40$'}</MathText> m</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section E: Checking Calculations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            E. Estimating to Check Calculation Results
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              One of the most practical uses of estimation is to check if calculator answers are reasonable. This helps catch errors from pressing wrong keys or misplacing decimals.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3">
                Common Calculator Errors to Catch
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>• Pressing wrong operation key (+ instead of ×)</p>
                <p>• Misplacing decimal point (542.04 vs 5420.4)</p>
                <p>• Entering wrong number (62.9 vs 629)</p>
                <p>• Wrong order of operations (forgetting parentheses)</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 10: Checking Reasonableness
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Miriam calculates <MathText>{'$62.9 - 4.67 \\times 18.62 = 542.0446$'}</MathText>. Is this reasonable?
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Check by Estimation:</strong></p>
                <p>Round to 1 s.f.:</p>
                <p className="ml-4">62.9 ≈ 60</p>
                <p className="ml-4">4.67 ≈ 5</p>
                <p className="ml-4">18.62 ≈ 20</p>
                <p className="mt-3">Estimate: <MathText>{'$60 - 5 \\times 20 = 60 - 100 = -40$'}</MathText></p>
                <p className="mt-3 p-3 bg-red-100 dark:bg-red-900/30 rounded">
                  <strong>Conclusion:</strong> Expected around −40, but got +542. This is NOT reasonable! Miriam made an error.
                </p>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-2">
                  Actual answer: −24.0554. She likely forgot order of operations.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 11: Square Root Check
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculator shows <MathText>{'$\\sqrt{83} \\div \\sqrt[3]{130} = 1.798\\,420\\,573$'}</MathText>. Verify reasonableness.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Estimate:</strong></p>
                <p><MathText>{'$\\sqrt{83} \\approx \\sqrt{81} = 9$'}</MathText></p>
                <p><MathText>{'$\\sqrt[3]{130} \\approx \\sqrt[3]{125} = 5$'}</MathText></p>
                <p className="mt-3">Estimate: <MathText>{'$9 \\div 5 = 1.8$'}</MathText></p>
                <p className="mt-3 p-3 bg-green-100 dark:bg-green-900/30 rounded">
                  <strong>Conclusion:</strong> Calculator answer 1.798... is very close to our estimate 1.8. This IS reasonable!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 5: Error Detection
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Jason calculates <MathText>{'$79.5 - 33.21 \\times 29.52 = -185.3592$'}</MathText>. Use estimation to check if reasonable.
            </p>
            <button
              onClick={() => setShowSolution5(!showSolution5)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution5 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution5 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Estimation:</strong></p>
                  <p>Round to 1 s.f.:</p>
                  <p className="ml-4">79.5 ≈ 80</p>
                  <p className="ml-4">33.21 ≈ 30</p>
                  <p className="ml-4">29.52 ≈ 30</p>
                  <p className="mt-2">Estimate: <MathText>{'$80 - 30 \\times 30 = 80 - 900 = -820$'}</MathText></p>
                  <p className="mt-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
                    Expected around −800, got −185. The answer is close enough in magnitude and sign. This IS reasonable (though exact answer is −900.4392).
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 6: Real-World Estimation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Joyce had $3,458 in her wallet. She spent $361, $86, $405, and $299 at a shop. Estimate money left by rounding to nearest $100.
            </p>
            <button
              onClick={() => setShowSolution6(!showSolution6)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution6 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution6 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p>Round each amount to nearest $100:</p>
                  <p className="ml-4">Started with: $3,458 ≈ $3,400</p>
                  <p className="ml-4">Spent: $361 ≈ $400</p>
                  <p className="ml-4">Spent: $86 ≈ $100</p>
                  <p className="ml-4">Spent: $405 ≈ $400</p>
                  <p className="ml-4">Spent: $299 ≈ $300</p>
                  <p className="mt-3">Total spent: <MathText>{'$\\$400 + \\$100 + \\$400 + \\$300 = \\$1,200$'}</MathText></p>
                  <p className="mt-2">Money left: <MathText>{'$\\$3,400 - \\$1,200 = \\$2,200$'}</MathText></p>
                  <p className="mt-3 text-sm italic text-gray-600 dark:text-gray-400">
                    Actual amount left: $2,307 - our estimate is quite close!
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Estimation by Rounding:</strong> Round each number (usually to 1 s.f.), then calculate - great for quick checks</li>
            <li><strong>Cluster Values:</strong> When numbers are similar, use one representative value for all - efficient for sums</li>
            <li><strong>Compatible Numbers:</strong> Choose number pairs that divide evenly for easy mental division</li>
            <li><strong>Benchmarks:</strong> Use known references ($1 coin ≈ 2.5 cm, arm span ≈ height) for measurements without tools</li>
            <li><strong>Decomposition-Recomposition:</strong> Break complex problems into parts, estimate each, then combine</li>
            <li><strong>Reasonableness Checks:</strong> Always estimate before or after using a calculator to catch errors</li>
            <li>Estimation is a life skill - use it for shopping, planning, and verifying calculations</li>
            <li>Different strategies work better for different problems - choose wisely!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
