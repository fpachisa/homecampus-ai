import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function DirectProportionIntro() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Understanding Direct Proportion</h1>
        <p className="mt-2 text-blue-100">
          Discover how two quantities can be related by a constant factor
        </p>
      </div>

      <div className="p-6">
        {/* Section 1: What is Direct Proportion? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What is Direct Proportion?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In real life, we often encounter situations where two quantities change together. For example,
              if you buy more apples, you pay more money. If a book is overdue for more days, you pay a
              higher fine.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When two quantities are <strong className="text-blue-600 dark:text-blue-400">directly proportional</strong>,
              we write: <MathText>y ∝ x</MathText>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This means:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>When x <strong>doubles</strong>, y also <strong>doubles</strong></li>
              <li>When x <strong>triples</strong>, y also <strong>triples</strong></li>
              <li>When x is <strong>halved</strong>, y is also <strong>halved</strong></li>
            </ul>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Library Fines
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In Singapore, if you borrow a book from a public library and are late in returning it,
              you will be fined 15 cents per day for each overdue book. The table shows the fines:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Number of days (x)</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">1</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">2</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">3</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">4</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">5</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">10</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Fine (y cents)</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">15</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">30</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">45</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">60</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">75</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">150</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Notice that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>When days double from 1 to 2, fine doubles from 15 to 30</li>
              <li>When days triple from 1 to 3, fine triples from 15 to 45</li>
              <li>When days are multiplied by 10 (1 to 10), fine is also multiplied by 10 (15 to 150)</li>
            </ul>

            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-blue-600 dark:text-blue-400">Conclusion:</strong> The fine (y) is
                directly proportional to the number of days (x) overdue.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The Constant Rate */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Understanding the Constant Rate
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In direct proportion, the <strong className="text-blue-600 dark:text-blue-400">rate</strong>
              {' '}<MathText>y/x</MathText> is always constant. This constant is what makes the relationship
              proportional.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Looking at our library fine example:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Days (x)</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Fine (y)</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Rate y/x</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">1</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">15</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-blue-600 dark:text-blue-400 font-semibold">15 ÷ 1 = 15</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">2</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">30</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-blue-600 dark:text-blue-400 font-semibold">30 ÷ 2 = 15</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">3</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">45</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-blue-600 dark:text-blue-400 font-semibold">45 ÷ 3 = 15</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">10</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">150</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-blue-600 dark:text-blue-400 font-semibold">150 ÷ 10 = 15</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-300 dark:border-blue-700 mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-blue-600 dark:text-blue-400">Key Property:</strong> When two
                quantities are directly proportional, their ratio is constant. In this case, the constant
                is 15 cents per day.
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We can also write this as an equality of ratios:
            </p>
            <div className="text-center mb-4">
              <MathText>{'$\\frac{y_1}{x_1} = \\frac{y_2}{x_2}$'}</MathText>
            </div>
          </div>

          {/* Visual: Graph showing direct proportion */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
              Visualizing the Relationship
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Let's plot these points on a graph to see the pattern:
            </p>

            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-800/50">
              <MathToolRenderer
                toolName="cartesianPlane"
                parameters={{
                  xMin: 0,
                  xMax: 11,
                  yMin: 0,
                  yMax: 160,
                  points: [
                    { x: 1, y: 15, label: "(1, 15)", color: "#3b82f6", labelPosition: "bottom-right" },
                    { x: 2, y: 30, label: "(2, 30)", color: "#3b82f6", labelPosition: "left" },
                    { x: 3, y: 45, label: "(3, 45)", color: "#3b82f6", labelPosition: "left" },
                    { x: 4, y: 60, label: "(4, 60)", color: "#3b82f6", labelPosition: "left" },
                    { x: 5, y: 75, label: "(5, 75)", color: "#3b82f6", labelPosition: "left" },
                    { x: 10, y: 150, label: "(10, 150)", color: "#3b82f6", labelPosition: "left" }
                  ],
                  lines: [
                    { type: "linear", slope: 15, yIntercept: 0, equation: "y = 15x", color: "#3b82f6", style: "solid" }
                  ],
                  title: "Library Fine vs Days Overdue",
                  xLabel: "Days Overdue",
                  yLabel: "Fine (cents)",
                  showGrid: true
                }}
              />
            </div>

            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Notice that all the points lie on a <strong className="text-blue-600 dark:text-blue-400">straight line</strong>!
              This is a key characteristic of direct proportion.
            </p>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Biscuit Costs
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              If 6 kg of biscuits cost $27, calculate the cost of 13 kg of biscuits.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong className="text-blue-600 dark:text-blue-400">Solution (Unitary Method):</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Step 1: Find the cost of 1 kg of biscuits first.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              6 kg cost $27
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              1 kg costs <MathText>$27 ÷ 6 = $4.50</MathText>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2 mt-4">
              Step 2: Find the cost of 13 kg.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              1 kg costs $4.50
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              13 kg cost <MathText>$4.50 × 13 = $58.50</MathText>
            </p>

            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-blue-600 dark:text-blue-400">Answer:</strong> 13 kg of biscuits cost $58.50
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Practice Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Practice Problems
          </h2>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Sweet Cost
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              If 50 g of sweets cost $2.10, find the cost of 380 g of sweets. Give your answer correct to the nearest 5 cents.
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 1:</strong> Find cost per gram
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  50 g cost $2.10
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  1 g costs $2.10 ÷ 50 = $0.042
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
                  <strong>Step 2:</strong> Find cost of 380 g
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  380 g cost $0.042 × 380 = $15.96
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
                  <strong>Step 3:</strong> Round to nearest 5 cents
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4">
                  <strong className="text-yellow-600 dark:text-yellow-400">Answer: $15.95</strong>
                </p>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Metal Mass
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <MathText>3/4</MathText> of a piece of metal has a mass of 15 kg. What is the mass of <MathText>2/5</MathText> of the piece of metal?
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 1:</strong> Find the mass of the whole piece
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  <MathText>3/4</MathText> of the piece = 15 kg
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  Whole piece = <MathText>15 ÷ (3/4) = 15 × (4/3) = 20 kg</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
                  <strong>Step 2:</strong> Find mass of <MathText>2/5</MathText> of the piece
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  <MathText>2/5</MathText> of 20 kg = <MathText>20 × (2/5) = 8 kg</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 ml-4">
                  <strong className="text-yellow-600 dark:text-yellow-400">Answer: 8 kg</strong>
                </p>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Sheep Fodder
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A consignment of fodder can feed 1000 sheep for 20 days. Assuming that all the sheep consume
              the fodder at the same rate, how many consignments of fodder are needed to feed 550 sheep for 400 days?
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Method:</strong> Find total "sheep-days" for each scenario
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
                  <strong>Step 1:</strong> Calculate sheep-days for 1 consignment
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  1 consignment feeds: 1000 sheep × 20 days = 20,000 sheep-days
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
                  <strong>Step 2:</strong> Calculate sheep-days needed
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  Need: 550 sheep × 400 days = 220,000 sheep-days
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
                  <strong>Step 3:</strong> Calculate consignments needed
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  Number of consignments = 220,000 ÷ 20,000 = 11
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 ml-4">
                  <strong className="text-yellow-600 dark:text-yellow-400">Answer: 11 consignments</strong>
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
            <li>When y is directly proportional to x (y ∝ x), if x doubles, y also doubles</li>
            <li>The rate y/x remains constant throughout the relationship</li>
            <li>The unitary method helps solve proportion problems: find the value of 1 unit first, then scale up</li>
            <li>All points in a direct proportion relationship lie on a straight line when graphed</li>
            <li>You can check if two quantities are proportional by verifying that y₁/x₁ = y₂/x₂</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
