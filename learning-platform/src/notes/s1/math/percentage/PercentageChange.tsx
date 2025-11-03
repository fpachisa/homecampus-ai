import { useState } from 'react';
import MathText from '../../../../components/MathText';

const PercentageChange = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Percentage Increase and Decrease</h1>
        <p className="mt-2 text-cyan-100">Understanding and calculating percentage changes</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg space-y-8">

        {/* Section 1: Percentage Increase */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Percentage Increase
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>percentage increase</strong> compares how much a value has grown relative to its original value.
              The increase is always calculated as a percentage of the <strong>original value</strong>.
            </p>

            <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 p-4 rounded mb-4">
              <p className="font-semibold text-cyan-800 dark:text-cyan-300 mb-2">Key Formulas:</p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><MathText>{'$\\text{Increase} = \\text{New value} - \\text{Original value}$'}</MathText></p>
                <p><MathText>{'$\\text{Percentage increase} = \\frac{\\text{Increase}}{\\text{Original value}} \\times 100\\%$'}</MathText></p>
                <p><MathText>{'$\\text{New value} = \\text{Original} \\times (100\\% + \\text{\\% increase})$'}</MathText></p>
              </div>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Salary Increase
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Sarah's monthly salary increased from $3600 to $3888. What is the percentage increase?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Calculate the absolute increase
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Increase = $3888 - $3600 = $288
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2">
                <strong>Step 2:</strong> Calculate percentage increase
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>{'$\\text{Percentage increase} = \\frac{288}{3600} \\times 100\\% = 8\\%$'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Answer:</strong> Sarah's salary increased by 8%.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                We can verify: $3600 <MathText>{'$\\times$'}</MathText> 1.08 = $3888 ✓
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Enrollment Increase
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A school's enrollment increased from 850 students to 935 students. Calculate the percentage increase.
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Step 1:</strong> Calculate increase</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Increase = <MathText>{'$935 - 850 = 85$'}</MathText> students
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Step 2:</strong> Calculate percentage increase</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$\\frac{85}{850} \\times 100\\% = 10\\%$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Answer:</strong> The enrollment increased by 10%.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Percentage Decrease */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Percentage Decrease
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>percentage decrease</strong> compares how much a value has fallen relative to its original value.
              Like percentage increase, the decrease is calculated as a percentage of the <strong>original value</strong>.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Key Formulas:</p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><MathText>{'$\\text{Decrease} = \\text{Original value} - \\text{New value}$'}</MathText></p>
                <p><MathText>{'$\\text{Percentage decrease} = \\frac{\\text{Decrease}}{\\text{Original value}} \\times 100\\%$'}</MathText></p>
                <p><MathText>{'$\\text{New value} = \\text{Original} \\times (100\\% - \\text{\\% decrease})$'}</MathText></p>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <p className="font-semibold text-red-800 dark:text-red-300 mb-2">⚠️ Important: Asymmetry of Percentage Changes</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                A 10% increase followed by a 10% decrease does NOT return you to the original value!
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Example: $100 to +10% to $110 to -10% to 99 (not $100!)
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                This happens because each percentage change applies to the <strong>current value</strong>, not the original.
              </p>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Price Decrease
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A laptop's price decreased from $1250 to $1050. Calculate the percentage decrease.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Calculate the absolute decrease
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Decrease = $1250 - $1050 = $200
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2">
                <strong>Step 2:</strong> Calculate percentage decrease
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Percentage decrease = <MathText>{'$\\frac{200}{1250} \\times 100\\% = 16\\%$'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Answer:</strong> The laptop price decreased by 16%.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                We can verify: $1250 <MathText>{'$\\times$'}</MathText> 0.84 = $1050 ✓
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Population Decrease
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A town's population decreased from 45,000 to 42,750. What is the percentage decrease?
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Step 1:</strong> Calculate decrease</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Decrease = 45,000 - 42,750 = 2,250
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Step 2:</strong> Calculate percentage decrease</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$\\frac{2,250}{45,000} \\times 100\\% = 5\\%$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Answer:</strong> The population decreased by 5%.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Sequential Changes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Sequential and Compound Percentage Changes
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When multiple percentage changes occur in sequence, we must apply each change to the result of the previous change,
              not to the original value. The changes <strong>multiply</strong>, they do not add.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Sequential Change Method:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Apply first percentage change to original value</li>
                <li>Apply second change to the result (not original)</li>
                <li>Continue for any additional changes</li>
                <li>Each change uses the current value as its base</li>
              </ol>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <p className="font-semibold text-red-800 dark:text-red-300 mb-2">❌ Common Mistake:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Do NOT add the percentages! +20% then +15% is NOT the same as +35%
              </p>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Plant Growth Over Months
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A plant's height was 50 cm in January. It grew by 7% in February, then by 6.5% in March, and finally by 5% in April.
              What is its height at the end of April?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>January height:</strong> 50 cm
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-2 mb-2">
                <strong>After February (+7%):</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>{'$50 \\times 1.07 = 53.5$'}</MathText> cm
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-2 mb-2">
                <strong>After March (+6.5%):</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>{'$53.5 \\times 1.065 = 56.9775 \\approx 57.0$'}</MathText> cm
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-2 mb-2">
                <strong>After April (+5%):</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>{'$57.0 \\times 1.05 = 59.85$'}</MathText> cm
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Answer:</strong> The plant's height at the end of April is approximately 59.85 cm.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                Note: If we incorrectly added the percentages (7% + 6.5% + 5% = 18.5%), we would get
                <MathText>{'$50 \\times 1.185 = 59.25$'}</MathText> cm, which is wrong!
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Utility Bill Changes
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A family's monthly electricity bill was $150. It increased by 12% in summer, then decreased by 8% in autumn.
              What is the bill amount in autumn?
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Original bill:</strong> $150</p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>After summer increase (+12%):</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  $150 <MathText>{'$\\times$'}</MathText> 1.12 = $168
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>After autumn decrease (-8%):</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  $168 <MathText>{'$\\times$'}</MathText> 0.92 = $154.56
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Answer:</strong> The autumn bill is $154.56.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                  Note: The net change is not +4% (12% - 8%). The actual bill went from $150 to $154.56,
                  which is a 3.04% increase overall.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Percentage Points vs % Change */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            4. Percentage Points vs Percentage Change
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These two terms are often confused but mean very different things. It's crucial to use the correct term
              to avoid misunderstanding.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
                <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Percentage Points:</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  Simple arithmetic difference between two percentages
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  28% - 25% = 3 <strong>percentage points</strong>
                </p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded">
                <p className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Percentage Change:</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  Proportional change relative to original
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <MathText>{'$\\frac{3}{25} \\times 100\\% = 12\\%$'}</MathText> <strong>increase</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Interest Rate Change
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A bank's savings account interest rate increased from 25% to 28%. Describe this change using both terms.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Percentage Point Change (Simple Subtraction):</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>$28\\% - 25\\% = 3$</MathText> percentage points
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2">
                <strong>Percentage Change (Proportional):</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Change = <MathText>$28\\% - 25\\% = 3$</MathText> percentage points
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                <MathText>{'$\\text{Percentage change} = \\frac{3}{25} \\times 100\\% = 12\\%$'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Correct statements:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                <li>"The rate increased by 3 percentage points" ✓</li>
                <li>"The rate increased by 12%" ✓</li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Incorrect statement:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                <li>"The rate increased by 3%" ✗ (Ambiguous and incorrect!)</li>
              </ul>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Grade Distribution
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              In Term 1, 20% of students got an A grade. In Term 2, 25% got an A grade.
              Calculate both the percentage point change and the percentage change.
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Percentage Point Change:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>$25\\% - 20\\% = 5$</MathText> percentage points
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Percentage Change:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  Change = 5 percentage points
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  <MathText>{'$\\frac{5}{20} \\times 100\\% = 25\\%$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Answer:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                  <li>The A grade percentage increased by <strong>5 percentage points</strong></li>
                  <li>This represents a <strong>25% increase</strong> in the proportion of A grades</li>
                </ul>

                <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                  Both statements are correct but convey different information!
                </p>
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
            <li>Percentage increase/decrease = <MathText>{'$(\\text{Change} / \\text{Original}) \\times 100\\%$'}</MathText></li>
            <li>Always calculate percentage change relative to the <strong>original value</strong></li>
            <li>Equal percentage increase and decrease do NOT cancel out (asymmetry)</li>
            <li>Sequential changes: apply each to current value, they multiply (not add)</li>
            <li><strong>Percentage points</strong> = simple subtraction between two percentages</li>
            <li><strong>Percentage change</strong> = proportional change calculated as % of original</li>
            <li>Use correct terminology to avoid confusion in communication</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PercentageChange;
