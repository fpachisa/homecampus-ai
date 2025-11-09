import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function ExperimentalProbability() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Experimental Probability</h1>
        <p className="mt-2 text-green-100">Understanding probability through experiments and the law of large numbers</p>
      </div>

      <div className="p-6 space-y-8">

        {/* Section 1: Theoretical vs Experimental Probability */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Theoretical vs. Experimental Probability
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In previous sections, we learned how to calculate the probability of a single event by finding the measures of the possible and favourable outcomes. This is called <strong className="text-green-600 dark:text-green-400">theoretical probability</strong> because it's calculated <em>in theory</em>, before doing the experiment.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For example, when we toss a coin, the theoretical probability of obtaining a 'head' is 1/2, because there are only two possible outcomes 'head' and 'tail', and one favourable outcome 'head':
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-300 dark:border-gray-700 mb-4 text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                P(Head) = (number of favourable outcomes) ÷ (total number of possible outcomes) = 1/2
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              But what if we <strong>actually toss a coin</strong> a number of times and record the number of times we get a 'head'? Will the probability obtained through this <strong>experimental approach</strong> be equal to the theoretical probability of 1/2?
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For example, if we toss a coin 10 times, will we always get exactly 5 'heads' and 5 'tails'?
            </p>
          </div>

          {/* Comparing Theoretical and Experimental */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-500 dark:border-blue-600">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3 text-xl">
                📊 Theoretical Probability
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculated using the probability formula <strong>before</strong> conducting the experiment.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-300 dark:border-blue-700 mb-3">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2"><strong>Example:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  P(Head when tossing a fair coin) = 1/2 = 0.5
                </p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Based on:</strong> Mathematical reasoning and the structure of the experiment
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-2 border-orange-500 dark:border-orange-600">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-3 text-xl">
                🔬 Experimental Probability
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculated by <strong>actually performing</strong> the experiment and recording results.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-orange-300 dark:border-orange-700 mb-3">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2"><strong>Example:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  Toss a coin 20 times<br />
                  Get 12 'heads'<br />
                  Experimental P(Head) = 12/20 = 0.6
                </p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Based on:</strong> Actual observed outcomes from trials
              </p>
            </div>
          </div>

          {/* Relative Frequency */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg mb-6 border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3 text-xl flex items-center">
              <span className="text-3xl mr-3">📈</span>
              Relative Frequency
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The experimental probability is also called the <strong className="text-green-600 dark:text-green-400">relative frequency</strong> of obtaining a 'head'. It's calculated as:
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-green-500 dark:border-green-600 text-center">
              <p className="text-xl text-gray-800 dark:text-gray-200 font-semibold">
                Relative frequency = <span className="text-blue-600 dark:text-blue-400">number of occurrences</span> ÷ <span className="text-purple-600 dark:text-purple-400">total number of trials</span>
              </p>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Coin Tossing Experiment
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Sarah tosses a coin 50 times and obtains 'head' 28 times.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) What is the theoretical probability of obtaining a 'head'?<br />
              (b) What is the relative frequency (experimental probability) of obtaining a 'head' based on Sarah's experiment?<br />
              (c) Are the theoretical and experimental probabilities the same?
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Solution:</strong>
            </p>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(a) Theoretical probability:</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  A fair coin has two equally likely outcomes: 'head' and 'tail'.<br />
                  P(Head) = 1/2 = <strong>0.5</strong>
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(b) Experimental probability (Relative frequency):</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Number of 'heads' obtained = 28<br />
                  Total number of tosses = 50
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Relative frequency = 28/50 = <strong>0.56</strong>
                </p>
                <div className="mt-3">
                  <MathToolRenderer
                    toolName="fractionBar"
                    parameters={{
                      fraction1: "28/50"
                    }}
                    caption="Experimental result: 28/50 = 0.56"
                  />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(c) Comparison:</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>No</strong>, they are not the same. The theoretical probability is 0.5, but the experimental probability is 0.56.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  The difference is: 0.56 − 0.5 = 0.06
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded border-l-4 border-green-500">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">
                💡 Important Observation
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                The <strong>relative frequency</strong> of obtaining a 'head' in a probability experiment is <strong>not always equal</strong> to the <strong>theoretical value</strong> of 1/2. When the number of tosses is small, it is <strong>still possible</strong> for the relative frequency to be equal to the theoretical value, but this is not guaranteed.
              </p>
            </div>
          </div>

          {/* Practice Problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Dice Rolling Experiment
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Marcus rolls a fair six-sided die 60 times and gets a '6' on 12 occasions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) What is the theoretical probability of rolling a '6'?<br />
              (b) What is the relative frequency of rolling a '6' in Marcus's experiment?<br />
              (c) How close is the experimental result to the theoretical probability?
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(a) Theoretical probability:</strong><br />
                      A fair die has 6 equally likely outcomes.<br />
                      P(6) = 1/6 ≈ <strong>0.1667</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(b) Experimental probability (Relative frequency):</strong><br />
                      Relative frequency = 12/60 = 1/5 = <strong>0.2</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(c) Comparison:</strong><br />
                      Difference = 0.2 − 0.1667 = 0.0333<br />
                      The experimental result is fairly close to the theoretical value, with a difference of about 0.033 or 3.3%.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: The Law of Large Numbers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            The Law of Large Numbers
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              What happens when we increase the number of coin tosses? Will the experimental probability get closer to the theoretical probability of 1/2?
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Let's look at actual data from a coin-tossing experiment with increasing numbers of tosses.
            </p>
          </div>

          {/* Data Table */}
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-6 border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-4 text-lg">
              📊 Experimental Data: Coin Tosses
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded">
                <thead>
                  <tr className="bg-purple-100 dark:bg-purple-900/40">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200">Number of Tosses</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200">Number of Heads</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200">Fraction of Heads</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">20</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">14</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">0.70</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">50</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">26</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">0.52</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">100</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">48</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">0.48</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">200</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">105</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">0.525</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">400</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">198</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">0.495</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">700</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">354</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">0.506</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">1000</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">503</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center text-gray-700 dark:text-gray-300">0.503</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 text-center">
              <em>Notice how the fraction of heads gets closer to 0.5 as the number of tosses increases</em>
            </p>
          </div>

          {/* Convergence Graph - CRITICAL VISUALIZATION */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg mb-6 border-2 border-blue-500 dark:border-blue-600">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-4 text-xl flex items-center">
              <span className="text-3xl mr-3">📈</span>
              Visualizing Convergence to Theoretical Probability
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The graph below shows how the fraction of obtaining a 'head' changes as the number of tosses increases. The horizontal line represents the theoretical value of 0.5.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-300 dark:border-blue-700">
              <MathToolRenderer
                toolName="lineChart"
                parameters={{
                  xLabels: ['0', '100', '200', '300', '400', '500', '600', '700'],
                  yValues: [0.65, 0.50, 0.55, 0.53, 0.495, 0.52, 0.51, 0.506],
                  xAxisLabel: 'Number of tosses',
                  yAxisLabel: 'Fraction of obtaining "head"',
                  title: 'Experimental Probability Approaching Theoretical Value',
                  showPoints: true,
                  showGrid: true,
                  highlightPoint: -1,
                  trendLine: false
                }}
                caption="As the number of tosses increases, the experimental probability approaches 0.5"
              />
            </div>
            <div className="mt-4 p-4 bg-blue-100 dark:bg-blue-900/30 rounded">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>Key Observation:</strong> The graph shows that the fraction of obtaining a 'head' approaches the theoretical value of 0.5 (shown as the reference line) when the number of tosses increases. Notice the initial variation at smaller numbers of tosses, and how the values stabilize closer to 0.5 as we approach 700 tosses.
              </p>
            </div>
          </div>

          {/* The Law Explained */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg mb-6 border-2 border-green-500 dark:border-green-600">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3 text-xl flex items-center">
              <span className="text-3xl mr-3">🎯</span>
              The Law of Large Numbers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              From the above investigation, we observe the following:
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-green-500 dark:border-green-600">
              <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
                <li>The <strong>relative frequency</strong> of obtaining a 'head' in a probability experiment is <strong>not always equal</strong> to the theoretical value of 1/2.</li>
                <li>When the number of tosses <strong>increases</strong>, the relative frequency of obtaining a 'head' will generally <strong className="text-green-600 dark:text-green-400">approach</strong> the theoretical value of 1/2, but the relative frequency <strong className="text-orange-600 dark:text-orange-400">may also deviate</strong> further from 1/2 for some large number of tosses.</li>
                <li>On the other hand, when the number of tosses is <strong>small</strong>, it is <strong className="text-blue-600 dark:text-blue-400">still possible</strong> for the relative frequency of obtaining a 'head' to be equal to the theoretical value of 1/2, e.g., see the point (100, 0.5) in the graph above.</li>
              </ul>
            </div>
          </div>

          {/* Historical Context */}
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-6 border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3 text-lg">
              📚 Coin-Toss Champions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-purple-300 dark:border-purple-700">
                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Count Buffon (1707–1788)</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Tossed a coin <strong>4,040 times</strong> and obtained <strong>2,048 'heads'</strong>
                </p>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  Relative frequency ≈ 0.5069
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-purple-300 dark:border-purple-700">
                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">John Kerrich (1903–1985)</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Tossed a coin <strong>10,000 times</strong> and obtained <strong>5,067 'heads'</strong>
                </p>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  Relative frequency ≈ 0.5067
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-purple-300 dark:border-purple-700">
                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Karl Pearson (1857–1936)</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Tossed a coin <strong>24,000 times</strong> and obtained <strong>12,012 'heads'</strong>
                </p>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  Relative frequency = 0.5005
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-4 text-center italic">
              As the number of trials increases, the relative frequency approaches the theoretical value of 0.5!
            </p>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Analyzing Experimental Data
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A student conducts two experiments flipping a coin:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-3 space-y-1">
              <li>Experiment A: 10 flips, gets 7 heads (relative frequency = 0.7)</li>
              <li>Experiment B: 1000 flips, gets 520 heads (relative frequency = 0.52)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) Which experiment's result is closer to the theoretical probability of 0.5?<br />
              (b) Which experiment gives a more reliable estimate of the true probability? Why?
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Solution:</strong>
            </p>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(a) Which is closer to 0.5?</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Experiment A: |0.7 − 0.5| = 0.2 (difference of 0.2)<br />
                  Experiment B: |0.52 − 0.5| = 0.02 (difference of 0.02)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Experiment B</strong> is closer to the theoretical probability of 0.5.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(b) Which is more reliable?</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Experiment B</strong> gives a more reliable estimate because it has many more trials (1000 vs. 10). According to the law of large numbers, larger sample sizes tend to give results closer to the theoretical probability.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  With only 10 flips in Experiment A, there's much more room for random variation. Getting 7 heads in 10 flips is not unusual. But with 1000 flips, the experimental probability should be much closer to 0.5, which it is (0.52).
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problems */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Understanding the Law
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A researcher conducts three die-rolling experiments to estimate P(rolling a 6):
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-3 space-y-1">
              <li>Experiment 1: 30 rolls → 8 sixes → relative frequency = 0.267</li>
              <li>Experiment 2: 300 rolls → 55 sixes → relative frequency = 0.183</li>
              <li>Experiment 3: 3000 rolls → 512 sixes → relative frequency = 0.171</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              (a) What is the theoretical probability of rolling a 6?<br />
              (b) Which experiment gives the best estimate? Explain.<br />
              (c) Does this data support the law of large numbers?
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(a) Theoretical probability:</strong><br />
                      A fair die has 6 equally likely outcomes.<br />
                      P(6) = 1/6 ≈ <strong>0.1667</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong>(b) Best estimate:</strong>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Comparing to theoretical (0.1667):
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-4">
                      <li>Experiment 1: |0.267 − 0.1667| = 0.100</li>
                      <li>Experiment 2: |0.183 − 0.1667| = 0.016</li>
                      <li>Experiment 3: |0.171 − 0.1667| = 0.004</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      <strong>Experiment 3</strong> (3000 rolls) gives the best estimate, with the smallest difference from the theoretical value.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>(c) Support for law of large numbers:</strong><br />
                      <strong>Yes!</strong> As the number of trials increases (30 → 300 → 3000), the relative frequency gets progressively closer to the theoretical probability of 0.1667. This perfectly demonstrates the law of large numbers.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: True or False
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Determine if each statement is true or false. Explain your reasoning.
            </p>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-3 space-y-2">
              <li>If you flip a fair coin 100 times, you will get exactly 50 heads.</li>
              <li>The more times you repeat an experiment, the closer the experimental probability gets to the theoretical probability.</li>
              <li>Experimental probability is always more accurate than theoretical probability.</li>
            </ol>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>1. FALSE</strong><br />
                      While the expected number of heads is 50, you won't necessarily get exactly 50 heads. You might get 48, 52, 47, 53, etc. The theoretical probability tells us the <em>expected</em> value, not the <em>guaranteed</em> outcome.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>2. TRUE (generally)</strong><br />
                      This is the law of large numbers. As the number of trials increases, the experimental probability <em>generally approaches</em> the theoretical probability. However, there may still be some deviation even with large numbers of trials.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>3. FALSE</strong><br />
                      Theoretical probability is based on mathematical reasoning and is the "true" probability when all outcomes are equally likely. Experimental probability approaches theoretical probability with many trials, but it's an <em>estimate</em> based on observed data. Theoretical probability is more accurate because it's calculated mathematically, not estimated from experiments.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Theoretical probability</strong> is calculated using the formula before conducting the experiment</li>
            <li><strong>Experimental probability (relative frequency)</strong> is calculated by actually performing the experiment: (number of occurrences) ÷ (total trials)</li>
            <li>Experimental and theoretical probabilities are <strong>not always equal</strong>, especially with small sample sizes</li>
            <li><strong>Law of Large Numbers:</strong> As the number of trials increases, the relative frequency <em>generally approaches</em> the theoretical probability</li>
            <li>With <strong>small samples</strong>, there can be significant variation from theoretical probability</li>
            <li>With <strong>large samples</strong>, experimental results become more reliable and closer to theoretical values</li>
            <li>Even with many trials, the experimental probability may still <strong>deviate slightly</strong> from the theoretical value</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
