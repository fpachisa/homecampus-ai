import { useState } from 'react';
import MathText from '../../../../components/MathText';

const Comparing = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Comparing Two Quantities by Percentage</h1>
        <p className="mt-2 text-orange-100">Using percentages to make fair comparisons with different bases</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg space-y-8">

        {/* Section 1: Comparing Using Percentage (Different Bases) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Comparing Using Percentage (Different Bases)
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When comparing two quantities that have <strong>different bases (wholes)</strong>, we cannot compare
              the raw numbers directly. We must convert each to a percentage of its own whole, then compare the percentages.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <p className="font-semibold text-red-800 dark:text-red-300 mb-2">⚠️ Why Percentages?</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Comparing 18 out of 25 with 15 out of 20 is difficult because the bases (25 vs 20) are different.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Percentages give us a <strong>common denominator of 100</strong>, making comparison fair and easy.
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-4">
              <p className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Comparison Method:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Calculate percentage for Quantity A = <MathText>{'$(A\'s\\,part / A\'s\\,whole) \\times 100\\%$'}</MathText></li>
                <li>Calculate percentage for Quantity B = <MathText>{'$(B\'s\\,part / B\'s\\,whole) \\times 100\\%$'}</MathText></li>
                <li>Compare the resulting percentages</li>
                <li>State conclusion in context</li>
              </ol>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Shooter Accuracy Comparison
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              In a competition, Shooter A hit 18 targets out of 25 shots, while Shooter B hit 15 targets out of 20 shots.
              Who has better accuracy?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Calculate Shooter A's accuracy
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>{'$\\frac{18}{25} \\times 100\\% = \\frac{1800}{25}\\% = 72\\%$'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2">
                <strong>Step 2:</strong> Calculate Shooter B's accuracy
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>{'$\\frac{15}{20} \\times 100\\% = \\frac{1500}{20}\\% = 75\\%$'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2">
                <strong>Step 3:</strong> Compare percentages
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>{'$75\\% > 72\\%$'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Conclusion:</strong> Shooter B has better accuracy (75% vs 72%), even though Shooter A hit
                more targets in absolute numbers (18 vs 15).
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                This shows why we cannot compare raw numbers when bases are different!
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Test Score Comparison
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Student A scored 36 marks out of 50 in a Mathematics test. Student B scored 56 marks out of 80 in the same test
              (different paper). Who performed better?
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Step 1:</strong> Calculate Student A's percentage</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$\\frac{36}{50} \\times 100\\% = 72\\%$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Step 2:</strong> Calculate Student B's percentage</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$\\frac{56}{80} \\times 100\\% = 70\\%$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Step 3:</strong> Compare</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$72\\% > 70\\%$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Answer:</strong> Student A performed better, scoring 72% compared to Student B's 70%,
                  despite Student B having a higher raw score (56 vs 36).
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Real-World Comparison Applications */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Real-World Comparison Applications
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Percentage comparison is essential in many real-world contexts: product quality (defect rates),
              composition (water content), efficiency (success rates), and more.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Common Applications:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Quality Control:</strong> Comparing defect rates across different production batches</li>
                <li><strong>Composition:</strong> Comparing water content, nutrient levels, material composition</li>
                <li><strong>Performance:</strong> Comparing success rates, accuracy, efficiency metrics</li>
                <li><strong>Statistics:</strong> Comparing survey results, demographic proportions</li>
              </ul>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Water Content Comparison
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A 250g peach contains 220g of water. A 250g pear contains 210g of water.
              Which fruit has a higher water content percentage?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Peach water content:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>{'$\\frac{220}{250} \\times 100\\% = 88\\%$'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2">
                <strong>Pear water content:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>{'$\\frac{210}{250} \\times 100\\% = 84\\%$'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Conclusion:</strong> The peach has higher water content at 88%, compared to the pear's 84%.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                Note: Even though both fruits weigh the same (250g), the peach contains 10g more water,
                resulting in a 4 percentage point difference.
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Defect Rate Comparison
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Factory A produced 300 items and found 3 defects. Factory B produced 210 items and found 2 defects.
              Which factory has a better quality record (lower defect rate)?
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Factory A defect rate:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$\\frac{3}{300} \\times 100\\% = 1\\%$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Factory B defect rate:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$\\frac{2}{210} \\times 100\\% = 0.952...\\% \\approx 0.95\\%$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Comparison:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$0.95\\% < 1\\%$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Answer:</strong> Factory B has a better quality record with a lower defect rate (0.95% vs 1%),
                  even though Factory A had more defects in absolute numbers.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                  When comparing quality, we must consider the defect rate (percentage) rather than the raw number of defects.
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
            <li>Different bases prevent direct comparison - we must use percentages</li>
            <li>Convert each quantity to percentage of its own whole: <MathText>{'$(part/whole) \\times 100\\%$'}</MathText></li>
            <li>Percentages provide a common denominator (100) for fair comparison</li>
            <li>Higher percentage does not necessarily mean higher absolute value</li>
            <li>Always state conclusions in context (who has better accuracy, which has more water, etc.)</li>
            <li>Apply to real-world scenarios: accuracy, quality control, composition, performance metrics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comparing;
