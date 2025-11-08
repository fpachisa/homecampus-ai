import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function InverseProportionIntro() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Understanding Inverse Proportion</h1>
        <p className="mt-2 text-orange-100">
          Discover relationships where one quantity increases as another decreases
        </p>
      </div>

      <div className="p-6">
        {/* Section 1: What is Inverse Proportion? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What is Inverse Proportion?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Inverse proportion is the opposite of direct proportion. When two quantities are{' '}
              <strong className="text-orange-600 dark:text-orange-400">inversely proportional</strong>, as
              one increases, the other decreases.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We write: <MathText>{'$y \\propto \\frac{1}{x}$'}</MathText> (read as "y is inversely proportional to x")
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This means:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>When x <strong>doubles</strong>, y is <strong>halved</strong></li>
              <li>When x <strong>triples</strong>, y becomes <strong>one-third</strong></li>
              <li>When x is <strong>halved</strong>, y <strong>doubles</strong></li>
            </ul>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-300 dark:border-blue-700">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Direct Proportion</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Both increase or decrease together</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">Example: More items → Higher cost</p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded border border-orange-300 dark:border-orange-700">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Inverse Proportion</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">One increases as the other decreases</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">Example: Faster speed → Less time</p>
              </div>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
              Example 1: Speed and Time
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A car travels 120 km at different speeds. The table shows the time taken:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Speed (x km/h)</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">10</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">20</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">30</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">40</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">60</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">120</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">Time taken (y hours)</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">12</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">6</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">4</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">3</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">2</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Notice that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>When speed doubles from 10 to 20, time halves from 12 to 6</li>
              <li>When speed triples from 20 to 60, time reduces to one-third (from 6 to 2)</li>
              <li>When speed is multiplied by 12 (10 to 120), time is divided by 12 (12 to 1)</li>
            </ul>

            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded border border-orange-300 dark:border-orange-700">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-orange-600 dark:text-orange-400">Conclusion:</strong> Time (y) is
                inversely proportional to speed (x). As speed increases, time decreases.
              </p>
            </div>
          </div>

          {/* Visual representation */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
              Visualizing the Data
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Let's plot the speed-time relationship:
            </p>

            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-800/50">
              <MathToolRenderer
                toolName="scatterPlot"
                parameters={{
                  points: [
                    { x: 10, y: 12 },
                    { x: 20, y: 6 },
                    { x: 30, y: 4 },
                    { x: 40, y: 3 },
                    { x: 60, y: 2 },
                    { x: 120, y: 1 }
                  ],
                  xLabel: "Speed (km/h)",
                  yLabel: "Time (hours)",
                  title: "Speed vs Time for 120 km Journey",
                  showGrid: true
                }}
              />
            </div>

            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Notice that the points form a <strong className="text-orange-600 dark:text-orange-400">curved pattern</strong>,
              not a straight line. This is characteristic of inverse proportion.
            </p>
          </div>
        </section>

        {/* Section 2: The Constant Product */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Constant Product (xy = k)
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In inverse proportion, while the ratio y/x is NOT constant, the <strong className="text-orange-600 dark:text-orange-400">product
              xy</strong> IS constant.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Speed (x)</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Time (y)</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-100">Product xy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">10</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">12</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-orange-600 dark:text-orange-400 font-semibold">10 × 12 = 120</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">20</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">6</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-orange-600 dark:text-orange-400 font-semibold">20 × 6 = 120</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">30</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">4</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-orange-600 dark:text-orange-400 font-semibold">30 × 4 = 120</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">60</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-700 dark:text-gray-300">2</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-orange-600 dark:text-orange-400 font-semibold">60 × 2 = 120</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded border border-orange-300 dark:border-orange-700 mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-orange-600 dark:text-orange-400">Key Property:</strong> When two
                quantities are inversely proportional, their product is constant. In this case, xy = 120
                (which represents the distance traveled).
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We can also write this as an equality:
            </p>
            <div className="text-center mb-4">
              <MathText>{'$x_1 y_1 = x_2 y_2$'}</MathText>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              This can be rearranged to show the reciprocal relationship:
            </p>
            <div className="text-center">
              <MathText>{'$\\frac{x_2}{x_1} = \\frac{y_1}{y_2}$'}</MathText>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
              Example 2: Water Taps
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              10 identical water taps can fill a swimming pool in 4 hours. If 8 taps are used instead,
              how long will it take to fill the pool?
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong className="text-orange-600 dark:text-orange-400">Solution (Proportion Method):</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Since the number of taps and time are inversely proportional:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              <MathText>{'$x_1 y_1 = x_2 y_2$'}</MathText>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
              Let:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 mb-3">
              <li>x₁ = 10 taps, y₁ = 4 hours</li>
              <li>x₂ = 8 taps, y₂ = ? hours</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              10 × 4 = 8 × y₂
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              40 = 8y₂
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              y₂ = 40 ÷ 8 = 5 hours
            </p>

            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded border border-orange-300 dark:border-orange-700">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-orange-600 dark:text-orange-400">Answer:</strong> 8 taps will take
                5 hours to fill the pool.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                <em>Note: Fewer taps (8 instead of 10) means more time needed (5 hours instead of 4).</em>
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Solving Inverse Proportion Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Solving Problems with Combined Proportions
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sometimes problems involve both direct and inverse proportion simultaneously. We need to
              keep one variable constant while analyzing the relationship with another.
            </p>

            {/* Worked Example 3 */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                Example 3: Men, Houses, and Days
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                In 3 days, 5 men can paint 2 identical houses. Assuming that all the men work at the same
                rate, how long will it take 6 men to paint 7 such houses?
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong className="text-orange-600 dark:text-orange-400">Solution:</strong>
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-300 dark:border-blue-700 mb-3">
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  <strong>Tip:</strong> The 3 variables are:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm ml-4">
                  <li>Number of men (inversely proportional to days)</li>
                  <li>Number of houses (directly proportional to days)</li>
                  <li>Number of days (what we're finding)</li>
                </ul>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Find how long 1 man takes to paint 2 houses
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                5 men can paint 2 houses in 3 days
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                1 man can paint 2 houses in 3 × 5 = 15 days
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
                <strong>Step 2:</strong> Find how long 1 man takes to paint 1 house
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                1 man can paint 1 house in 15 ÷ 2 = 7.5 days
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
                <strong>Step 3:</strong> Find how long 1 man takes to paint 7 houses
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                1 man can paint 7 houses in 7.5 × 7 = 52.5 days
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2 mt-3">
                <strong>Step 4:</strong> Find how long 6 men take to paint 7 houses
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                6 men can paint 7 houses in 52.5 ÷ 6 = 8.75 days
              </p>

              <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded border border-orange-300 dark:border-orange-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong className="text-orange-600 dark:text-orange-400">Answer:</strong> 6 men will take
                  8.75 days (or 8¾ days) to paint 7 houses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Practice Problems
          </h2>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Tank Filling
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A tank can be filled by 4 identical taps in 70 minutes. Find the time taken for 7 such
              taps to fill the same tank.
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
                  Since number of taps and time are inversely proportional:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  <MathText>{'$x_1 y_1 = x_2 y_2$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2 mt-2">
                  Let x₁ = 4 taps, y₁ = 70 minutes
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Let x₂ = 7 taps, y₂ = ? minutes
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2 mt-2 ml-4">
                  4 × 70 = 7 × y₂
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  280 = 7y₂
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
                  y₂ = 280 ÷ 7 = 40 minutes
                </p>

                <div className="mt-3 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-400 dark:border-yellow-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-yellow-600 dark:text-yellow-400">Answer: 40 minutes</strong>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Digging Trenches
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              In 5 hours, 3 men can dig 2 identical trenches. Assuming that all the men work at the same
              rate, how long will it take 5 men to dig 7 such trenches?
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
                  <strong>Step 1:</strong> 1 man digs 2 trenches in how long?
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-2">
                  3 men dig 2 trenches in 5 hours
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-3">
                  1 man digs 2 trenches in 5 × 3 = 15 hours
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 2:</strong> 1 man digs 7 trenches in how long?
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-3">
                  1 man digs 7 trenches in <MathText>(15 ÷ 2) × 7 = 7.5 × 7 = 52.5 hours</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 3:</strong> 5 men dig 7 trenches in how long?
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-2">
                  5 men dig 7 trenches in 52.5 ÷ 5 = 10.5 hours
                </p>

                <div className="mt-3 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-400 dark:border-yellow-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-yellow-600 dark:text-yellow-400">Answer: 10.5 hours (or 10½ hours)</strong>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Making Vases
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              12 glassblowers can make 12 identical vases in 9 minutes. Assuming that all the glassblowers
              work at the same rate, how long will it take 8 glassblowers to make 32 such vases?
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
                  <strong>Step 1:</strong> 1 glassblower makes 12 vases in how long?
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-3">
                  12 glassblowers make 12 vases in 9 minutes, so 1 glassblower takes 9 × 12 = 108 minutes
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 2:</strong> 1 glassblower makes 1 vase in how long?
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-3">
                  1 glassblower makes 1 vase in 108 ÷ 12 = 9 minutes
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 3:</strong> 1 glassblower makes 32 vases in how long?
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-3">
                  1 glassblower makes 32 vases in 9 × 32 = 288 minutes
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Step 4:</strong> 8 glassblowers make 32 vases in how long?
                </p>
                <p className="text-gray-700 dark:text-gray-300 ml-4 mb-2">
                  8 glassblowers make 32 vases in 288 ÷ 8 = 36 minutes
                </p>

                <div className="mt-3 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-400 dark:border-yellow-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-yellow-600 dark:text-yellow-400">Answer: 36 minutes</strong>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-orange-50 dark:bg-orange-900/30 border-l-4 border-orange-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>When y is inversely proportional to x, as x increases, y decreases (and vice versa)</li>
            <li>The product xy remains constant: xy = k or x₁y₁ = x₂y₂</li>
            <li>If x doubles, y halves; if x triples, y becomes one-third</li>
            <li>Real-world examples: speed-time, workers-days, taps-time</li>
            <li>For combined problems, find the rate for 1 unit first, then scale up or down</li>
            <li>The relationship can be written as: <MathText>{'$\\frac{x_2}{x_1} = \\frac{y_1}{y_2}$'}</MathText> (reciprocal)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
