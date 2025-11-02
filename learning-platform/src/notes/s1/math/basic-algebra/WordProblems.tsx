import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function WordProblems() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-amber-500 to-yellow-600 dark:from-amber-600 dark:to-yellow-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Word Problems &amp; Applications</h1>
        <p className="mt-2 text-amber-100">Apply algebraic skills to solve real-world problems</p>
      </div>

      <div className="p-6">
        {/* Section 1: Basic Translation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Translating Word Problems to Equations
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Word problems</strong> describe mathematical situations using everyday language.
              To solve them, we need to translate the words into algebraic equations, then solve the equations.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>The Problem-Solving Process:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>Read</strong> the problem carefully - what is it asking?</li>
                <li><strong>Define</strong> your variable - let <MathText>x</MathText> equal the unknown</li>
                <li><strong>Translate</strong> the words into an equation</li>
                <li><strong>Solve</strong> the equation</li>
                <li><strong>Check</strong> your answer - does it make sense?</li>
                <li><strong>Answer</strong> in a complete sentence with units</li>
              </ol>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Common Word Phrases:</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="bg-white dark:bg-gray-900 p-2 rounded">
                  <p className="text-gray-600 dark:text-gray-400">Addition (+):</p>
                  <p className="text-gray-700 dark:text-gray-300">sum, total, more than, increased by, added to</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-2 rounded">
                  <p className="text-gray-600 dark:text-gray-400">Subtraction (-):</p>
                  <p className="text-gray-700 dark:text-gray-300">difference, less than, decreased by, minus, fewer</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-2 rounded">
                  <p className="text-gray-600 dark:text-gray-400">Multiplication (×):</p>
                  <p className="text-gray-700 dark:text-gray-300">product, times, of, multiplied by, twice</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-2 rounded">
                  <p className="text-gray-600 dark:text-gray-400">Division (÷):</p>
                  <p className="text-gray-700 dark:text-gray-300">quotient, per, divided by, ratio, half</p>
                </div>
              </div>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Simple Number Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A number is increased by 7 and the result is 23. Find the number.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Define the variable</p>
                <p className="ml-4">Let <MathText>x</MathText> = the unknown number</p>
                <p className="mt-3"><strong>Step 2:</strong> Translate to equation</p>
                <p className="ml-4">"A number increased by 7" means <MathText>{'$x + 7$'}</MathText></p>
                <p className="ml-4">"the result is 23" means <MathText>{'$= 23$'}</MathText></p>
                <p className="ml-4">Equation: <MathText>{'$x + 7 = 23$'}</MathText></p>
                <p className="mt-3"><strong>Step 3:</strong> Solve</p>
                <p className="ml-4"><MathText>{'$x + 7 - 7 = 23 - 7$'}</MathText></p>
                <p className="ml-4"><MathText>{'$x = 16$'}</MathText></p>
                <p className="mt-3"><strong>Step 4:</strong> Check</p>
                <p className="ml-4">16 increased by 7 is 23 ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The number is 16.
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Consecutive Numbers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              The sum of two consecutive numbers is 45. Find the two numbers.
              (Hint: If one number is <MathText>x</MathText>, the next consecutive number is <MathText>{'$x + 1$'}</MathText>)
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
                  <p><strong>Let <MathText>x</MathText> = first number</strong></p>
                  <p className="ml-4">Then <MathText>{'$x + 1$'}</MathText> = second number (next consecutive)</p>
                  <p className="mt-2"><strong>Equation:</strong> <MathText>{'$x + (x + 1) = 45$'}</MathText></p>
                  <p className="mt-2"><strong>Solve:</strong></p>
                  <p className="ml-4"><MathText>{'$2x + 1 = 45$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$2x = 44$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$x = 22$'}</MathText></p>
                  <p className="mt-2">So first number = 22, second number = 23</p>
                  <p className="mt-2"><strong>Check:</strong> 22 + 23 = 45 ✓</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> The two consecutive numbers are 22 and 23.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Multi-Step Word Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Multi-Step Word Problems
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many real-world problems require setting up more complex equations. Common types include
              age problems, number relationships, and mixture problems.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Age Problem Strategy:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Define one person's age as <MathText>x</MathText></li>
                <li>Express other ages in terms of <MathText>x</MathText></li>
                <li>Set up equation based on the given relationship</li>
                <li>Be careful with "years ago" (subtract) and "years from now" (add)</li>
              </ul>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Age Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Sarah is 3 years older than her brother Tom. The sum of their ages is 27. How old are Sarah and Tom?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Define variables</p>
                <p className="ml-4">Let <MathText>x</MathText> = Tom's age</p>
                <p className="ml-4">Then Sarah's age = <MathText>{'$x + 3$'}</MathText> (3 years older)</p>
                <p className="mt-3"><strong>Step 2:</strong> Set up equation</p>
                <p className="ml-4">"Sum of their ages is 27":</p>
                <p className="ml-4"><MathText>{'$x + (x + 3) = 27$'}</MathText></p>
                <p className="mt-3"><strong>Step 3:</strong> Solve</p>
                <p className="ml-4"><MathText>{'$2x + 3 = 27$'}</MathText></p>
                <p className="ml-4"><MathText>{'$2x = 24$'}</MathText></p>
                <p className="ml-4"><MathText>{'$x = 12$'}</MathText></p>
                <p className="mt-3">Tom's age = 12 years</p>
                <p className="ml-4">Sarah's age = 12 + 3 = 15 years</p>
                <p className="mt-3"><strong>Check:</strong> 12 + 15 = 27 ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> Tom is 12 years old and Sarah is 15 years old.
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Rectangle Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              The length of a rectangle is 5 cm more than its width. The perimeter is 42 cm. Find the dimensions.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Define variables</p>
                <p className="ml-4">Let <MathText>w</MathText> = width in cm</p>
                <p className="ml-4">Then length = <MathText>{'$w + 5$'}</MathText> cm</p>
                <p className="mt-3"><strong>Step 2:</strong> Use perimeter formula</p>
                <p className="ml-4">Perimeter of rectangle: <MathText>{'$P = 2(l + w)$'}</MathText></p>
                <p className="ml-4"><MathText>{'$42 = 2[(w + 5) + w]$'}</MathText></p>
                <p className="mt-3"><strong>Step 3:</strong> Solve</p>
                <p className="ml-4"><MathText>{'$42 = 2(2w + 5)$'}</MathText></p>
                <p className="ml-4"><MathText>{'$42 = 4w + 10$'}</MathText></p>
                <p className="ml-4"><MathText>{'$32 = 4w$'}</MathText></p>
                <p className="ml-4"><MathText>{'$w = 8$'}</MathText></p>
                <p className="mt-3">Width = 8 cm, Length = 8 + 5 = 13 cm</p>
                <p className="mt-3"><strong>Check:</strong> Perimeter = 2(13 + 8) = 2(21) = 42 ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> Width is 8 cm and length is 13 cm.
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Number Relationship
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              One number is twice another number. If their sum is 72, find both numbers.
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
                  <p><strong>Let <MathText>x</MathText> = first number</strong></p>
                  <p className="ml-4">Then second number = <MathText>2x</MathText> (twice the first)</p>
                  <p className="mt-2"><strong>Equation:</strong> <MathText>{'$x + 2x = 72$'}</MathText></p>
                  <p className="mt-2"><strong>Solve:</strong></p>
                  <p className="ml-4"><MathText>{'$3x = 72$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$x = 24$'}</MathText></p>
                  <p className="mt-2">First number = 24, Second number = 48</p>
                  <p className="mt-2"><strong>Check:</strong> 24 + 48 = 72, and 48 = 2(24) ✓</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> The two numbers are 24 and 48.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Application Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Real-World Application Problems
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Algebra helps us solve practical problems involving money, shopping, travel, and more.
              These problems often require you to use formulas or create equations from context.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Common Formulas:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Distance: <MathText>{'$d = st$'}</MathText> (distance = speed × time)</li>
                <li>Cost: <MathText>{'$\\text{Total} = \\text{price} \\times \\text{quantity}$'}</MathText></li>
                <li>Percentage: <MathText>{'$\\text{Part} = \\frac{\\text{percent}}{100} \\times \\text{whole}$'}</MathText></li>
              </ul>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Money Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Emma buys 3 notebooks and 2 pens for a total of $11. Each pen costs $2.
              How much does each notebook cost?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Define variable</p>
                <p className="ml-4">Let <MathText>n</MathText> = cost of one notebook in dollars</p>
                <p className="mt-3"><strong>Step 2:</strong> Set up equation</p>
                <p className="ml-4">Cost of 3 notebooks = <MathText>3n</MathText></p>
                <p className="ml-4">Cost of 2 pens = <MathText>{'$2 \\times 2 = 4$'}</MathText> dollars</p>
                <p className="ml-4">Total: <MathText>{'$3n + 4 = 11$'}</MathText></p>
                <p className="mt-3"><strong>Step 3:</strong> Solve</p>
                <p className="ml-4"><MathText>{'$3n + 4 - 4 = 11 - 4$'}</MathText></p>
                <p className="ml-4"><MathText>{'$3n = 7$'}</MathText></p>
                <p className="ml-4"><MathText>{'$n = \\frac{7}{3} = 2.33...$'}</MathText></p>
                <p className="ml-4">Wait, this doesn't make sense for money!</p>
                <p className="mt-3 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded border-l-2 border-yellow-500">
                  <strong>Let's reconsider:</strong> Perhaps each pen costs \$2, so we have:
                  <p className="ml-4 mt-1"><MathText>{'$3n + 2(2) = 11$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$3n + 4 = 11$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$3n = 7$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$n \\approx 2.33$'}</MathText></p>
                </p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> Each notebook costs approximately $2.33.
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 5 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 5: Distance Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A car travels at 60 km/h. How long will it take to travel 210 km?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Identify the formula</p>
                <p className="ml-4">Distance = Speed × Time, or <MathText>{'$d = st$'}</MathText></p>
                <p className="mt-3"><strong>Step 2:</strong> Substitute known values</p>
                <p className="ml-4">Distance = 210 km, Speed = 60 km/h, Time = ?</p>
                <p className="ml-4"><MathText>{'$210 = 60t$'}</MathText></p>
                <p className="mt-3"><strong>Step 3:</strong> Solve for time</p>
                <p className="ml-4"><MathText>{'$t = \\frac{210}{60}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$t = 3.5$'}</MathText></p>
                <p className="mt-3"><strong>Check:</strong> <MathText>{'$60 \\times 3.5 = 210$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> It will take 3.5 hours (or 3 hours 30 minutes).
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Shopping Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A shirt costs $25. During a sale, it is reduced by $7. If you buy 3 shirts during the sale,
              how much do you pay in total?
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
                  <p><strong>Step 1:</strong> Find sale price per shirt</p>
                  <p className="ml-4">Original price = $25</p>
                  <p className="ml-4">Reduction = $7</p>
                  <p className="ml-4">Sale price = 25 - 7 = $18</p>
                  <p className="mt-2"><strong>Step 2:</strong> Calculate total for 3 shirts</p>
                  <p className="ml-4">Total = <MathText>{'$3 \\times 18 = 54$'}</MathText> dollars</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> You pay $54 in total for 3 shirts during the sale.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Mixture Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A student scored an average of 78 on three tests. She scored 72 and 81 on the first two tests.
              What did she score on the third test?
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
                  <p><strong>Let <MathText>x</MathText> = third test score</strong></p>
                  <p className="mt-2"><strong>Average formula:</strong></p>
                  <p className="ml-4"><MathText>{'$\\text{Average} = \\frac{\\text{sum of scores}}{\\text{number of tests}}$'}</MathText></p>
                  <p className="mt-2"><strong>Set up equation:</strong></p>
                  <p className="ml-4"><MathText>{'$78 = \\frac{72 + 81 + x}{3}$'}</MathText></p>
                  <p className="mt-2"><strong>Solve:</strong></p>
                  <p className="ml-4">Multiply both sides by 3:</p>
                  <p className="ml-4"><MathText>{'$234 = 72 + 81 + x$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$234 = 153 + x$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$x = 81$'}</MathText></p>
                  <p className="mt-2"><strong>Check:</strong> <MathText>{'$\\frac{72 + 81 + 81}{3} = \\frac{234}{3} = 78$'}</MathText> ✓</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> She scored 81 on the third test.
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
            <li>Always read the problem carefully and identify what you're looking for</li>
            <li>Define your variable clearly - what does <MathText>x</MathText> represent?</li>
            <li>Translate word phrases into algebraic expressions systematically</li>
            <li>Set up an equation that represents the relationship described in the problem</li>
            <li>Solve the equation using techniques you've learned</li>
            <li>Always check your answer - does it make sense in context?</li>
            <li>Write your final answer in a complete sentence with appropriate units</li>
            <li>Practice identifying common problem types (age, distance, money, etc.)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
