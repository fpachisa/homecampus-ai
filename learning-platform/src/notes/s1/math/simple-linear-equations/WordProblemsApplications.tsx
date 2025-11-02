import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function WordProblemsApplications() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Word Problems & Applications</h1>
        <p className="mt-2 text-amber-100">Apply linear equations to solve real-world problems involving numbers, ages, geometry, and more</p>
      </div>

      <div className="p-6">
        {/* Section 1: Translation Process */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Translating Word Problems to Equations
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Word problems</strong> describe mathematical situations using everyday language.
              To solve them, we need a systematic approach to translate words into equations.
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>The 7-Step Problem-Solving Process:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li><strong>Read</strong> carefully and identify what's being asked</li>
                <li><strong>Define</strong> variable: Let <MathText>x</MathText> = [unknown quantity with units]</li>
                <li><strong>Express</strong> other quantities in terms of the variable</li>
                <li><strong>Form</strong> equation based on relationships in the problem</li>
                <li><strong>Solve</strong> the equation</li>
                <li><strong>Answer</strong> in complete sentence with context and units</li>
                <li><strong>Check</strong> solution makes sense in the original problem</li>
              </ol>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Translation Keywords:</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="bg-white dark:bg-gray-900 p-2 rounded">
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">Equals (=):</p>
                  <p className="text-gray-700 dark:text-gray-300">is, equals, is the same as, results in</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-2 rounded">
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">Addition (+):</p>
                  <p className="text-gray-700 dark:text-gray-300">more than, sum, total, increased by, plus</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-2 rounded">
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">Subtraction (-):</p>
                  <p className="text-gray-700 dark:text-gray-300">less than, difference, decreased by, minus</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-2 rounded">
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">Multiplication (×):</p>
                  <p className="text-gray-700 dark:text-gray-300">times, product, of, twice, multiplied by</p>
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
              Five more than twice a number is 17. Find the number.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1: Read</strong> - Find the unknown number</p>
                <p><strong>Step 2: Define</strong> - Let <MathText>x</MathText> = the number</p>
                <p><strong>Step 3: Express</strong> - "Twice a number" = <MathText>2x</MathText></p>
                <p className="ml-4">"Five more than twice a number" = <MathText>{'$2x + 5$'}</MathText></p>
                <p><strong>Step 4: Form equation</strong> - "is 17" means <MathText>{'$= 17$'}</MathText></p>
                <p className="ml-4">Equation: <MathText>{'$2x + 5 = 17$'}</MathText></p>
                <p><strong>Step 5: Solve</strong></p>
                <p className="ml-4"><MathText>{'$2x = 17 - 5 = 12$'}</MathText></p>
                <p className="ml-4"><MathText>{'$x = 6$'}</MathText></p>
                <p><strong>Step 6: Answer</strong> - The number is 6.</p>
                <p><strong>Step 7: Check</strong> - <MathText>{'$2(6) + 5 = 12 + 5 = 17$'}</MathText> ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Final Answer:</strong> The number is 6.
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Relationship Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Seven less than four times a number equals twice the number plus 9. Find the number.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Define:</strong> Let <MathText>n</MathText> = the number</p>
                <p><strong>Translate:</strong></p>
                <p className="ml-4">"Four times a number" = <MathText>4n</MathText></p>
                <p className="ml-4">"Seven less than four times a number" = <MathText>{'$4n - 7$'}</MathText></p>
                <p className="ml-4">"Twice the number" = <MathText>2n</MathText></p>
                <p className="ml-4">"Twice the number plus 9" = <MathText>{'$2n + 9$'}</MathText></p>
                <p><strong>Equation:</strong> <MathText>{'$4n - 7 = 2n + 9$'}</MathText></p>
                <p><strong>Solve:</strong></p>
                <p className="ml-4"><MathText>{'$4n - 2n = 9 + 7$'}</MathText></p>
                <p className="ml-4"><MathText>{'$2n = 16$'}</MathText></p>
                <p className="ml-4"><MathText>{'$n = 8$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The number is 8.
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Translation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              When 8 is subtracted from three times a number, the result is 13. What is the number?
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
                  <p>Let <MathText>x</MathText> = the number</p>
                  <p>"Three times a number" = <MathText>3x</MathText></p>
                  <p>"8 subtracted from three times a number" = <MathText>{'$3x - 8$'}</MathText></p>
                  <p>Equation: <MathText>{'$3x - 8 = 13$'}</MathText></p>
                  <p><MathText>{'$3x = 21$'}</MathText>, so <MathText>{'$x = 7$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">The number is 7.</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Number & Age Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Number & Age Problems
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These problems involve relationships between numbers or ages. Understanding the patterns
              helps translate the problem correctly.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Consecutive Integers:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Three consecutive integers: <MathText>n</MathText>, <MathText>{'$n+1$'}</MathText>, <MathText>{'$n+2$'}</MathText></li>
                <li>Three consecutive even integers: <MathText>n</MathText>, <MathText>{'$n+2$'}</MathText>, <MathText>{'$n+4$'}</MathText></li>
                <li>Three consecutive odd integers: <MathText>n</MathText>, <MathText>{'$n+2$'}</MathText>, <MathText>{'$n+4$'}</MathText></li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Age Problems:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Current age: Let <MathText>x</MathText> = current age</li>
                <li>Age 5 years ago: <MathText>{'$x - 5$'}</MathText></li>
                <li>Age 5 years from now: <MathText>{'$x + 5$'}</MathText></li>
                <li><strong>Key:</strong> Time passes equally for everyone!</li>
              </ul>
            </div>
          </div>

          {/* Worked Example 3 - Consecutive */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Consecutive Integers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              The sum of three consecutive integers is 48. Find the three integers.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Define:</strong> Let <MathText>n</MathText> = first integer</p>
                <p className="ml-4">Then <MathText>{'$n+1$'}</MathText> = second integer</p>
                <p className="ml-4">And <MathText>{'$n+2$'}</MathText> = third integer</p>
                <p><strong>Equation:</strong> <MathText>{'$n + (n+1) + (n+2) = 48$'}</MathText></p>
                <p><strong>Solve:</strong></p>
                <p className="ml-4"><MathText>{'$3n + 3 = 48$'}</MathText></p>
                <p className="ml-4"><MathText>{'$3n = 45$'}</MathText></p>
                <p className="ml-4"><MathText>{'$n = 15$'}</MathText></p>
                <p><strong>Find all three:</strong></p>
                <p className="ml-4">First: 15, Second: 16, Third: 17</p>
                <p><strong>Check:</strong> 15 + 16 + 17 = 48 ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The three consecutive integers are 15, 16, and 17.
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 4 - Age */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Age Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Sarah is 5 years older than Tom. The sum of their ages is 27. How old are Sarah and Tom?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Define:</strong> Let <MathText>x</MathText> = Tom's age</p>
                <p className="ml-4">Then Sarah's age = <MathText>{'$x + 5$'}</MathText> (5 years older)</p>
                <p><strong>Equation:</strong> "Sum is 27"</p>
                <p className="ml-4"><MathText>{'$x + (x + 5) = 27$'}</MathText></p>
                <p><strong>Solve:</strong></p>
                <p className="ml-4"><MathText>{'$2x + 5 = 27$'}</MathText></p>
                <p className="ml-4"><MathText>{'$2x = 22$'}</MathText></p>
                <p className="ml-4"><MathText>{'$x = 11$'}</MathText></p>
                <p><strong>Find both ages:</strong></p>
                <p className="ml-4">Tom: 11 years old</p>
                <p className="ml-4">Sarah: 11 + 5 = 16 years old</p>
                <p><strong>Check:</strong> 11 + 16 = 27 ✓, and 16 - 11 = 5 ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> Tom is 11 years old and Sarah is 16 years old.
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 5 - Future age */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 5: Future Age Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              In 3 years, Maria will be twice as old as she was 2 years ago. How old is Maria now?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Define:</strong> Let <MathText>x</MathText> = Maria's current age</p>
                <p><strong>Express:</strong></p>
                <p className="ml-4">In 3 years: <MathText>{'$x + 3$'}</MathText></p>
                <p className="ml-4">2 years ago: <MathText>{'$x - 2$'}</MathText></p>
                <p><strong>Equation:</strong> "In 3 years, will be twice as old as 2 years ago"</p>
                <p className="ml-4"><MathText>{'$x + 3 = 2(x - 2)$'}</MathText></p>
                <p><strong>Solve:</strong></p>
                <p className="ml-4"><MathText>{'$x + 3 = 2x - 4$'}</MathText></p>
                <p className="ml-4"><MathText>{'$3 + 4 = 2x - x$'}</MathText></p>
                <p className="ml-4"><MathText>{'$x = 7$'}</MathText></p>
                <p><strong>Check:</strong> In 3 years: 10, Was 2 years ago: 5, and 10 = 2(5) ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> Maria is currently 7 years old.
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Consecutive Even Integers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Find three consecutive even integers whose sum is 54.
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
                  <p>Let <MathText>n</MathText>, <MathText>{'$n+2$'}</MathText>, <MathText>{'$n+4$'}</MathText> be the three consecutive even integers</p>
                  <p>Equation: <MathText>{'$n + (n+2) + (n+4) = 54$'}</MathText></p>
                  <p><MathText>{'$3n + 6 = 54$'}</MathText>, <MathText>{'$3n = 48$'}</MathText>, <MathText>{'$n = 16$'}</MathText></p>
                  <p>The integers are: 16, 18, 20</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    Answer: 16, 18, and 20
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Geometric & Real-World */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Geometric & Real-World Applications
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Linear equations are used to solve many practical problems involving geometry,
              money, measurements, and other real-world situations.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Common Formulas:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Rectangle perimeter: <MathText>{'$P = 2l + 2w$'}</MathText> or <MathText>{'$P = 2(l + w)$'}</MathText></li>
                <li>Square perimeter: <MathText>{'$P = 4s$'}</MathText></li>
                <li>Triangle perimeter: <MathText>{'$P = a + b + c$'}</MathText></li>
                <li>Complementary angles: sum = <MathText>90°</MathText></li>
                <li>Supplementary angles: sum = <MathText>180°</MathText></li>
              </ul>
            </div>
          </div>

          {/* Worked Example 6 - Perimeter */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 6: Rectangle Perimeter
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              The length of a rectangle is 3 cm more than its width. If the perimeter is 26 cm, find the dimensions.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Define:</strong> Let <MathText>w</MathText> = width in cm</p>
                <p className="ml-4">Then length = <MathText>{'$w + 3$'}</MathText> cm</p>
                <p><strong>Formula:</strong> Perimeter = <MathText>{'$2l + 2w$'}</MathText></p>
                <p><strong>Equation:</strong> <MathText>{'$2(w + 3) + 2w = 26$'}</MathText></p>
                <p><strong>Solve:</strong></p>
                <p className="ml-4"><MathText>{'$2w + 6 + 2w = 26$'}</MathText></p>
                <p className="ml-4"><MathText>{'$4w + 6 = 26$'}</MathText></p>
                <p className="ml-4"><MathText>{'$4w = 20$'}</MathText></p>
                <p className="ml-4"><MathText>{'$w = 5$'}</MathText></p>
                <p><strong>Find both:</strong> Width = 5 cm, Length = 5 + 3 = 8 cm</p>
                <p><strong>Check:</strong> Perimeter = 2(8) + 2(5) = 16 + 10 = 26 ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> Width is 5 cm and length is 8 cm.
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 7 - Angles */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 7: Complementary Angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Two angles are complementary. One angle is 15° more than the other. Find both angles.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Define:</strong> Let <MathText>x</MathText> = smaller angle</p>
                <p className="ml-4">Then larger angle = <MathText>{'$x + 15°$'}</MathText></p>
                <p><strong>Equation:</strong> Complementary means sum = 90°</p>
                <p className="ml-4"><MathText>{'$x + (x + 15) = 90$'}</MathText></p>
                <p><strong>Solve:</strong></p>
                <p className="ml-4"><MathText>{'$2x + 15 = 90$'}</MathText></p>
                <p className="ml-4"><MathText>{'$2x = 75$'}</MathText></p>
                <p className="ml-4"><MathText>{'$x = 37.5°$'}</MathText></p>
                <p><strong>Find both:</strong> First angle = 37.5°, Second angle = 37.5° + 15° = 52.5°</p>
                <p><strong>Check:</strong> 37.5° + 52.5° = 90° ✓</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> The two angles are 37.5° and 52.5°.
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 8 - Money */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 8: Money Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Emma buys 3 notebooks and 2 pens for a total of $11. Each pen costs $2. How much does each notebook cost?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Define:</strong> Let <MathText>n</MathText> = cost of one notebook in dollars</p>
                <p><strong>Express:</strong></p>
                <p className="ml-4">Cost of 3 notebooks = <MathText>3n</MathText></p>
                <p className="ml-4">Cost of 2 pens = <MathText>{'$2 \\times 2 = 4$'}</MathText></p>
                <p><strong>Equation:</strong> Total cost = $11</p>
                <p className="ml-4"><MathText>{'$3n + 4 = 11$'}</MathText></p>
                <p><strong>Solve:</strong></p>
                <p className="ml-4"><MathText>{'$3n = 7$'}</MathText></p>
                <p className="ml-4"><MathText>{'$n = \\frac{7}{3} \\approx 2.33$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> Each notebook costs approximately $2.33.
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Perimeter Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              The length of a rectangle is twice its width. If the perimeter is 36 cm, find the length and width.
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
                  <p>Let <MathText>w</MathText> = width, then length = <MathText>2w</MathText></p>
                  <p>Perimeter: <MathText>{'$2(2w) + 2w = 36$'}</MathText></p>
                  <p><MathText>{'$4w + 2w = 36$'}</MathText>, <MathText>{'$6w = 36$'}</MathText>, <MathText>{'$w = 6$'}</MathText></p>
                  <p>Width = 6 cm, Length = 2(6) = 12 cm</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    Answer: Width is 6 cm, length is 12 cm
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-amber-700 dark:text-amber-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Follow the <strong>7-step process</strong>: Read, Define, Express, Form, Solve, Answer, Check</li>
            <li><strong>Define your variable clearly</strong> with units: "Let x = ..."</li>
            <li>For <strong>consecutive integers</strong>: use n, n+1, n+2 (or n, n+2, n+4 for even/odd)</li>
            <li>For <strong>age problems</strong>: remember time passes equally for everyone</li>
            <li>Use <strong>appropriate formulas</strong> for geometric problems (perimeter, angles)</li>
            <li>Always <strong>answer in context</strong> with units and check if the answer makes sense</li>
            <li>Translate carefully: "5 more than x" is <MathText>{'$x + 5$'}</MathText>, not <MathText>{'$5 + x$'}</MathText> (though equivalent)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
