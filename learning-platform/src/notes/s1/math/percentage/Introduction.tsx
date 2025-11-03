import { useState } from 'react';
import MathText from '../../../../components/MathText';

const Introduction = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Introduction to Percentage</h1>
        <p className="mt-2 text-blue-100">Understanding what percentages mean and how they work</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg space-y-8">

        {/* Section 1: Meaning of Percentage */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Meaning of Percentage
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The word <strong>"percent"</strong> comes from the Latin <em>"per centum"</em>, which means <strong>"out of 100"</strong>.
              A percentage is a way of expressing a number as a fraction of 100.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When we write <MathText>{'$35\\%$'}</MathText>, we mean 35 out of 100, or <MathText>{'$\\frac{35}{100}$'}</MathText>.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Key Definition:</p>
              <p className="text-gray-700 dark:text-gray-300">
                <MathText>x% means x out of 100, or $x \\div 100$</MathText>
              </p>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Understanding the Symbol
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              In a survey, 56% of respondents said they prefer online learning. What does this mean?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                56% means 56 out of every 100 respondents prefer online learning.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                If 200 people were surveyed, then <MathText>{'$56\\% \\text{ of } 200 = \\frac{56}{100} \\times 200 = 112$'}</MathText> people prefer online learning.
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Interpreting Percentages
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Your phone storage shows that 68% is used. If your phone has 64 GB total storage, how many GB are currently used?
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  68% of 64 GB means: <MathText>{'$\\frac{68}{100} \\times 64 = 0.68 \\times 64 = 43.52$'}</MathText> GB
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Answer:</strong> 43.52 GB (or approximately 43.5 GB) is currently used.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Percentage as a Proportion */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Percentage as a Proportion
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              One complete whole is always <strong>100%</strong>. This means that if you divide something into parts,
              all the parts together must add up to 100%.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Important Facts:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>100% = one complete whole</li>
                <li>Percentages can be greater than 100% (e.g., 150% growth)</li>
                <li>Percentages can be less than 1% (e.g., 0.5% interest rate)</li>
                <li>When parts make up a whole: Part A % + Part B % + ... = 100%</li>
              </ul>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Parts Making a Whole
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              In a class, 45% of students walk to school, 32% take the bus, and the rest cycle. What percentage cycle to school?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                All students together = 100%
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Walk + Bus + Cycle = 100%
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                45% + 32% + Cycle = 100%
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Cycle = 100% - 45% - 32% = <strong>23%</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                We can verify: 45% + 32% + 23% = 100% ✓
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Complementary Percentages
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A shop's inventory consists of 35% electronics, 28% clothing, 20% home goods, and the rest is toys.
              What percentage of the inventory is toys?
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  Total inventory = 100%
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Electronics + Clothing + Home Goods + Toys = 100%
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  35% + 28% + 20% + Toys = 100%
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  83% + Toys = 100%
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Toys = 100% - 83% = <strong>17%</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Answer:</strong> 17% of the inventory is toys.
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
            <li>"Percent" means "out of 100" - it's a way to express fractions with denominator 100</li>
            <li>The symbol % represents percentage, and x% = x/100</li>
            <li>One complete whole = 100%</li>
            <li>When parts make up a complete whole, they must sum to 100%</li>
            <li>Percentages can be greater than 100% or less than 1%</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
