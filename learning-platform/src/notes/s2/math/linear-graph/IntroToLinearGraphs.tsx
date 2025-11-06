import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

const IntroToLinearGraphs = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Introduction to Linear Graphs</h1>
        <p className="text-lg text-blue-100">Understanding the Cartesian plane, plotting points, and recognizing linear relationships</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Cartesian Plane */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. The Cartesian Plane
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              What is the Cartesian Plane?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>Cartesian plane</strong> (also called the coordinate plane) is a flat surface divided by two perpendicular number lines:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>The <strong>x-axis</strong> runs horizontally (left to right)</li>
              <li>The <strong>y-axis</strong> runs vertically (bottom to top)</li>
              <li>The point where they meet is called the <strong>origin</strong>, labeled (0, 0)</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-700 mb-6">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">
              The Four Quadrants
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The axes divide the plane into four regions called <strong>quadrants</strong>:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Quadrant I (Top Right)</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Both x and y are positive</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Example: (3, 5)</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Quadrant II (Top Left)</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">x is negative, y is positive</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Example: (−2, 4)</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded border-2 border-orange-300 dark:border-orange-600">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Quadrant III (Bottom Left)</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Both x and y are negative</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Example: (−3, −2)</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded border-2 border-purple-300 dark:border-purple-600">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Quadrant IV (Bottom Right)</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">x is positive, y is negative</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Example: (4, −3)</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example: Plotting Points
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              To plot the point (3, 2):
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Start at the origin (0, 0)</li>
              <li>Move 3 units to the right (because x = 3 is positive)</li>
              <li>Then move 2 units up (because y = 2 is positive)</li>
              <li>Mark the point with a dot</li>
            </ol>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Plot these points on graph paper
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A(2, 3), B(−1, 4), C(−3, −2), D(4, −1)
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>A(2, 3):</strong> Right 2, up 3 → Quadrant I</li>
                  <li><strong>B(−1, 4):</strong> Left 1, up 4 → Quadrant II</li>
                  <li><strong>C(−3, −2):</strong> Left 3, down 2 → Quadrant III</li>
                  <li><strong>D(4, −1):</strong> Right 4, down 1 → Quadrant IV</li>
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: What Makes a Graph Linear? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. What Makes a Graph Linear?
          </h2>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              Definition of Linear
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A relationship is <strong>linear</strong> if its graph forms a <strong>straight line</strong> on the Cartesian plane.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The word "linear" comes from "line" – if the points lie on a straight line, the relationship is linear!
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-700 mb-6">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">
              Key Feature: Constant Rate of Change
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In a linear relationship, as x increases by the same amount, y always increases (or decreases) by the same amount.
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example:</p>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-400 dark:border-gray-500">
                    <th className="p-2 text-left text-gray-900 dark:text-gray-100">x</th>
                    <th className="p-2 text-left text-gray-900 dark:text-gray-100">y</th>
                    <th className="p-2 text-left text-sm text-gray-700 dark:text-gray-300">Change in y</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200">
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="p-2">0</td>
                    <td className="p-2">1</td>
                    <td className="p-2 text-sm"></td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="p-2">1</td>
                    <td className="p-2">3</td>
                    <td className="p-2 text-sm text-green-600 dark:text-green-400">+2</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="p-2">2</td>
                    <td className="p-2">5</td>
                    <td className="p-2 text-sm text-green-600 dark:text-green-400">+2</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="p-2">3</td>
                    <td className="p-2">7</td>
                    <td className="p-2 text-sm text-green-600 dark:text-green-400">+2</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                Notice: Every time x increases by 1, y increases by 2. This constant change means the relationship is linear.
              </p>
            </div>
          </div>

          {/* Visual: Linear graph y = 2x + 1 */}
          <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Linear Graph: y = 2x + 1</h4>
            <MathToolRenderer
              toolName="functionGraph"
              parameters={{
                expression: "2*x + 1",
                xMin: -1,
                xMax: 4,
                yMin: -1,
                yMax: 9,
                showGrid: true,
                showPoints: [
                  { x: 0, label: "(0,1)", color: "#3b82f6" },
                  { x: 1, label: "(1,3)", color: "#3b82f6" },
                  { x: 2, label: "(2,5)", color: "#3b82f6" },
                  { x: 3, label: "(3,7)", color: "#3b82f6" }
                ],
                color: "#3b82f6",
                label: "y = 2x + 1",
                caption: "Notice how the points from the table lie perfectly on a straight line!"
              }}
            />
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-2 border-red-300 dark:border-red-600 mb-6">
            <h3 className="font-bold text-red-700 dark:text-red-300 mb-3">
              Non-Linear Example (NOT a straight line)
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-400 dark:border-gray-500">
                    <th className="p-2 text-left text-gray-900 dark:text-gray-100">x</th>
                    <th className="p-2 text-left text-gray-900 dark:text-gray-100">y</th>
                    <th className="p-2 text-left text-sm text-gray-700 dark:text-gray-300">Change in y</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200">
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="p-2">0</td>
                    <td className="p-2">0</td>
                    <td className="p-2 text-sm"></td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="p-2">1</td>
                    <td className="p-2">1</td>
                    <td className="p-2 text-sm text-red-600 dark:text-red-400">+1</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="p-2">2</td>
                    <td className="p-2">4</td>
                    <td className="p-2 text-sm text-red-600 dark:text-red-400">+3</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="p-2">3</td>
                    <td className="p-2">9</td>
                    <td className="p-2 text-sm text-red-600 dark:text-red-400">+5</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                The change is NOT constant (y = x²), so this is NOT linear – it forms a curve.
              </p>
            </div>
          </div>

          {/* Visual: Non-linear graph y = x² */}
          <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Non-Linear Graph: y = x²</h4>
            <MathToolRenderer
              toolName="functionGraph"
              parameters={{
                expression: "x^2",
                xMin: -1,
                xMax: 4,
                yMin: -1,
                yMax: 10,
                showGrid: true,
                showPoints: [
                  { x: 0, label: "(0,0)", color: "#ef4444" },
                  { x: 1, label: "(1,1)", color: "#ef4444" },
                  { x: 2, label: "(2,4)", color: "#ef4444" },
                  { x: 3, label: "(3,9)", color: "#ef4444" }
                ],
                color: "#ef4444",
                label: "y = x²",
                caption: "This forms a CURVE, not a straight line, because the rate of change is not constant"
              }}
            />
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Is this relationship linear?
            </h3>
            <table className="w-full border-collapse mb-3">
              <thead>
                <tr className="border-b-2 border-gray-400 dark:border-gray-500">
                  <th className="p-2 text-left text-gray-900 dark:text-gray-100">x</th>
                  <td className="p-2 text-gray-800 dark:text-gray-200">1</td>
                  <td className="p-2 text-gray-800 dark:text-gray-200">2</td>
                  <td className="p-2 text-gray-800 dark:text-gray-200">3</td>
                  <td className="p-2 text-gray-800 dark:text-gray-200">4</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="p-2 text-left text-gray-900 dark:text-gray-100">y</th>
                  <td className="p-2 text-gray-800 dark:text-gray-200">5</td>
                  <td className="p-2 text-gray-800 dark:text-gray-200">8</td>
                  <td className="p-2 text-gray-800 dark:text-gray-200">11</td>
                  <td className="p-2 text-gray-800 dark:text-gray-200">14</td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Yes, this is linear!</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  From x = 1 to 2: y increases by 3 (from 5 to 8)<br />
                  From x = 2 to 3: y increases by 3 (from 8 to 11)<br />
                  From x = 3 to 4: y increases by 3 (from 11 to 14)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2 font-semibold">
                  The change is constant (+3 each time), so this forms a straight line.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Introduction to Gradient */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Introduction to Gradient (Steepness)
          </h2>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
              What is Gradient?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>gradient</strong> measures how steep a line is – how quickly it rises or falls as you move from left to right.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Think of it like the steepness of a hill: a steep hill has a large gradient, while a gentle slope has a small gradient.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded border-2 border-gray-300 dark:border-gray-700 mb-6">
            <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">
              Visualizing Gradient with Rise over Run
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Gradient is calculated as:
            </p>
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded border-2 border-indigo-400 dark:border-indigo-500">
              <p className="text-center text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Gradient = Rise ÷ Run
              </p>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                (Vertical change ÷ Horizontal change)
              </p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mt-4 ml-4">
              <li><strong>Rise:</strong> How much the line goes up (or down)</li>
              <li><strong>Run:</strong> How much the line goes across to the right</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border-2 border-green-300 dark:border-green-600">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Steep Line</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Large gradient<br />
                Rises quickly
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Example: gradient = 5</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Gentle Line</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Small gradient<br />
                Rises slowly
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Example: gradient = 0.5</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded border-2 border-purple-300 dark:border-purple-600">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Flat Line</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Zero gradient<br />
                Completely horizontal
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Example: gradient = 0</p>
            </div>
          </div>

          {/* Visual: Comparing different gradients */}
          <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Comparing Different Gradients:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">Steep (m = 3)</p>
                <MathToolRenderer
                  toolName="functionGraph"
                  parameters={{
                    expression: "3*x",
                    xMin: -2,
                    xMax: 2,
                    yMin: -6,
                    yMax: 6,
                    showGrid: true,
                    color: "#22c55e",
                    label: "y = 3x"
                  }}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">Gentle (m = 0.5)</p>
                <MathToolRenderer
                  toolName="functionGraph"
                  parameters={{
                    expression: "0.5*x",
                    xMin: -2,
                    xMax: 2,
                    yMin: -6,
                    yMax: 6,
                    showGrid: true,
                    color: "#3b82f6",
                    label: "y = 0.5x"
                  }}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-purple-700 dark:text-purple-400 mb-2">Flat (m = 0)</p>
                <MathToolRenderer
                  toolName="functionGraph"
                  parameters={{
                    expression: "0",
                    xMin: -2,
                    xMax: 2,
                    yMin: -6,
                    yMax: 6,
                    showGrid: true,
                    color: "#8b5cf6",
                    label: "y = 0"
                  }}
                />
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Understanding Gradient
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A line goes up 6 units for every 2 units it goes across. What is its gradient?
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
                  <strong>Gradient = Rise ÷ Run</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Rise = 6 units (up)<br />
                  Run = 2 units (across)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Gradient = 6 ÷ 2 = <strong>3</strong>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  This means for every 1 unit across, the line goes up 3 units. This is a fairly steep line!
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
            <li>The Cartesian plane has two axes (x and y) that divide it into four quadrants</li>
            <li>Points are written as (x, y) and plotted by moving horizontally first, then vertically</li>
            <li>A linear relationship forms a straight line on a graph</li>
            <li>Linear relationships have a constant rate of change</li>
            <li>Gradient measures the steepness of a line using Rise ÷ Run</li>
            <li>Steep lines have large gradients; gentle lines have small gradients</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntroToLinearGraphs;
