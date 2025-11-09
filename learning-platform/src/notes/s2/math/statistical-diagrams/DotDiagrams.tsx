import { useState } from 'react';

export default function DotDiagramsNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showExample, setShowExample] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Dot Diagrams</h1>
        <p className="mt-2 text-blue-100">Visualizing small numerical data sets with equal intervals</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Understanding Dot Diagrams */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What is a Dot Diagram?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>dot diagram</strong> (also called a <strong>dot plot</strong>) is a simple way to display
              <strong> numerical data</strong> by plotting dots above a number line.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Each dot represents <strong>one data value</strong> in the data set. When multiple data points
              have the same value, the dots are stacked vertically above that value on the number line.
            </p>
          </div>

          {/* Key Features */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-6">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3">
              Key Features of Dot Diagrams
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Uses a <strong>horizontal number line</strong> with equal intervals</li>
              <li>Each dot represents <strong>one unit</strong> or data value</li>
              <li>Dots are placed <strong>directly above</strong> their value on the number line</li>
              <li>Dots are <strong>stacked vertically</strong> when values repeat</li>
              <li>Dots must be <strong>equally spaced</strong> vertically</li>
              <li>The number line must include the <strong>full range of values</strong> (from minimum to maximum)</li>
            </ul>
          </div>

          {/* Visual Example: Simple Dot Diagram */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Example: Travel Times to School
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Data: 20, 22, 21, 21, 18, 18, 22, 20, 30, 23 (minutes)
            </p>

            {/* SVG Dot Diagram */}
            <svg viewBox="0 0 600 200" className="w-full h-auto">
              {/* Number line */}
              <line
                x1="50"
                y1="150"
                x2="550"
                y2="150"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-800 dark:text-gray-300"
              />

              {/* Tick marks and labels */}
              {[18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((value) => {
                const x = 50 + (value - 18) * 40;
                return (
                  <g key={value}>
                    <line
                      x1={x}
                      y1="145"
                      x2={x}
                      y2="155"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-800 dark:text-gray-300"
                    />
                    <text
                      x={x}
                      y="175"
                      textAnchor="middle"
                      className="fill-gray-700 dark:fill-gray-300 text-sm font-medium"
                    >
                      {value}
                    </text>
                  </g>
                );
              })}

              {/* Dots */}
              {/* 18: 2 dots */}
              <circle cx="50" cy="130" r="5" fill="#3b82f6" />
              <circle cx="50" cy="110" r="5" fill="#3b82f6" />

              {/* 20: 2 dots */}
              <circle cx="130" cy="130" r="5" fill="#3b82f6" />
              <circle cx="130" cy="110" r="5" fill="#3b82f6" />

              {/* 21: 2 dots */}
              <circle cx="170" cy="130" r="5" fill="#3b82f6" />
              <circle cx="170" cy="110" r="5" fill="#3b82f6" />

              {/* 22: 2 dots */}
              <circle cx="210" cy="130" r="5" fill="#3b82f6" />
              <circle cx="210" cy="110" r="5" fill="#3b82f6" />

              {/* 23: 1 dot */}
              <circle cx="250" cy="130" r="5" fill="#3b82f6" />

              {/* 30: 1 dot */}
              <circle cx="530" cy="130" r="5" fill="#ef4444" />

              {/* Axis label */}
              <text
                x="300"
                y="195"
                textAnchor="middle"
                className="fill-gray-700 dark:fill-gray-300 text-sm font-semibold"
              >
                Time (minutes)
              </text>
            </svg>

            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Observations:</strong> Most students take 18-23 minutes to travel to school.
                There is one outlier at 30 minutes (shown in red) who takes significantly longer.
                The data is clustered around 20-22 minutes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Constructing Dot Diagrams */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            How to Construct a Dot Diagram
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Follow these steps to create an accurate dot diagram:
            </p>
          </div>

          {/* Step-by-Step Guide */}
          <div className="space-y-4 mb-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Step 1: Identify the range of values
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Find the <strong>minimum</strong> and <strong>maximum</strong> values in your data set.
                This determines the span of your number line.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-xs mt-2 italic">
                Example: For data 18, 22, 21, 23, 18, 22, 20 → Range is 18 to 23
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Step 2: Draw a horizontal number line with equal intervals
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Create a number line that covers the range from minimum to maximum. Mark tick marks at
                <strong> equal intervals</strong>. Important: The number line should <strong>not have missing values</strong> -
                even if a value has zero frequency, it must still be included on the line.
              </p>
              <div className="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                <p className="text-xs text-yellow-900 dark:text-yellow-200">
                  <strong>Common Mistake:</strong> Students sometimes skip values that don't appear in the data.
                  For example, if no one scored 19 minutes, you still need 19 on the number line between 18 and 20!
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Step 3: Plot each data value with a dot
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                For each value in your data set, place a dot directly above its position on the number line.
                The dots must be <strong>equally spaced vertically</strong>.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Step 4: Stack dots for repeated values
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                When multiple data points have the same value, stack the dots vertically above that value.
                Each dot still represents one data point.
              </p>
            </div>
          </div>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Worked Example: Number of Art Pieces Submitted
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A group of students submit art pieces for an exhibition. The number of pieces each student
              submits is recorded:
            </p>
            <p className="text-gray-800 dark:text-gray-200 font-mono bg-white dark:bg-gray-800 p-3 rounded mb-3">
              6, 13, 12, 5, 6, 12, 12, 6, 8, 8, 10, 9, 10, 4, 5, 14, 6, 8, 10, 9, 13, 12
            </p>

            <button
              onClick={() => setShowExample(!showExample)}
              className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded transition-colors"
            >
              {showExample ? 'Hide' : 'Show'} Step-by-Step Solution
            </button>

            {showExample && (
              <div className="mt-4 space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    Step 1: Range
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Minimum = 4, Maximum = 14<br />
                    Range: 4 to 14 (11 different possible values)
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    Step 2: Count frequencies
                  </p>
                  <div className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <p>4: ● (1)</p>
                    <p>5: ●● (2)</p>
                    <p>6: ●●●● (4)</p>
                    <p>7: (0)</p>
                    <p>8: ●●● (3)</p>
                    <p>9: ●● (2)</p>
                    <p>10: ●●● (3)</p>
                    <p>11: (0)</p>
                    <p>12: ●●●● (4)</p>
                    <p>13: ●● (2)</p>
                    <p>14: ● (1)</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded">
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
                    Step 3: Draw the dot diagram
                  </p>

                  {/* SVG for art pieces */}
                  <svg viewBox="0 0 700 180" className="w-full h-auto">
                    {/* Number line */}
                    <line
                      x1="50"
                      y1="140"
                      x2="650"
                      y2="140"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-800 dark:text-gray-300"
                    />

                    {/* Tick marks */}
                    {[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((value) => {
                      const x = 50 + (value - 4) * 55;
                      return (
                        <g key={value}>
                          <line
                            x1={x}
                            y1="135"
                            x2={x}
                            y2="145"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-gray-800 dark:text-gray-300"
                          />
                          <text
                            x={x}
                            y="160"
                            textAnchor="middle"
                            className="fill-gray-700 dark:fill-gray-300 text-xs font-medium"
                          >
                            {value}
                          </text>
                        </g>
                      );
                    })}

                    {/* Dots for each value */}
                    {/* 4: 1 dot */}
                    <circle cx="50" cy="120" r="4" fill="#3b82f6" />

                    {/* 5: 2 dots */}
                    <circle cx="105" cy="120" r="4" fill="#3b82f6" />
                    <circle cx="105" cy="102" r="4" fill="#3b82f6" />

                    {/* 6: 4 dots */}
                    <circle cx="160" cy="120" r="4" fill="#10b981" />
                    <circle cx="160" cy="102" r="4" fill="#10b981" />
                    <circle cx="160" cy="84" r="4" fill="#10b981" />
                    <circle cx="160" cy="66" r="4" fill="#10b981" />

                    {/* 8: 3 dots */}
                    <circle cx="270" cy="120" r="4" fill="#3b82f6" />
                    <circle cx="270" cy="102" r="4" fill="#3b82f6" />
                    <circle cx="270" cy="84" r="4" fill="#3b82f6" />

                    {/* 9: 2 dots */}
                    <circle cx="325" cy="120" r="4" fill="#3b82f6" />
                    <circle cx="325" cy="102" r="4" fill="#3b82f6" />

                    {/* 10: 3 dots */}
                    <circle cx="380" cy="120" r="4" fill="#3b82f6" />
                    <circle cx="380" cy="102" r="4" fill="#3b82f6" />
                    <circle cx="380" cy="84" r="4" fill="#3b82f6" />

                    {/* 12: 4 dots */}
                    <circle cx="490" cy="120" r="4" fill="#10b981" />
                    <circle cx="490" cy="102" r="4" fill="#10b981" />
                    <circle cx="490" cy="84" r="4" fill="#10b981" />
                    <circle cx="490" cy="66" r="4" fill="#10b981" />

                    {/* 13: 2 dots */}
                    <circle cx="545" cy="120" r="4" fill="#3b82f6" />
                    <circle cx="545" cy="102" r="4" fill="#3b82f6" />

                    {/* 14: 1 dot */}
                    <circle cx="600" cy="120" r="4" fill="#3b82f6" />

                    {/* Axis label */}
                    <text
                      x="350"
                      y="175"
                      textAnchor="middle"
                      className="fill-gray-700 dark:fill-gray-300 text-sm font-semibold"
                    >
                      Number of Art Pieces
                    </text>
                  </svg>

                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                    <strong>Observations:</strong> The most common submissions are 6 and 12 pieces (shown in green).
                    No students submitted 7 or 11 pieces. The distribution shows two peaks (bimodal distribution).
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Interpreting & Describing Distributions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Describing Distributions from Dot Diagrams
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When describing a distribution shown in a dot diagram, we look for several key features:
            </p>
          </div>

          {/* Distribution Features */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border-l-4 border-purple-500">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                1. Range
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                The span from the lowest to highest value. Example: "The masses range from 25 kg to 39 kg."
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border-l-4 border-purple-500">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                2. Clusters
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Groups of data that are close together. Example: "The data is clustered around 28-32 kg."
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border-l-4 border-purple-500">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                3. Extreme Values (Outliers)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Values that deviate significantly from others. Example: "There are two extreme values at 25 kg and 39 kg."
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border-l-4 border-purple-500">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                4. Symmetry
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Whether the distribution is balanced. Example: "The distribution is approximately symmetrical about 32 kg."
              </p>
            </div>
          </div>

          {/* Practice Question 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Describing a Distribution
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The dot diagram below shows the ages (in years) of contestants in a karaoke contest:
            </p>

            {/* SVG for karaoke ages */}
            <svg viewBox="0 0 600 160" className="w-full h-auto mb-3">
              <line x1="50" y1="120" x2="550" y2="120" stroke="currentColor" strokeWidth="2" className="text-gray-800 dark:text-gray-300" />
              {[10, 15, 20, 25, 30].map((value) => {
                const x = 50 + (value - 10) * 25;
                return (
                  <g key={value}>
                    <line x1={x} y1="115" x2={x} y2="125" stroke="currentColor" strokeWidth="2" className="text-gray-800 dark:text-gray-300" />
                    <text x={x} y="140" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs font-medium">{value}</text>
                  </g>
                );
              })}

              {/* Age 14: 1 dot */}
              <circle cx="150" cy="100" r="4" fill="#3b82f6" />

              {/* Age 20: 1 dot */}
              <circle cx="300" cy="100" r="4" fill="#3b82f6" />

              {/* Age 22: 2 dots */}
              <circle cx="350" cy="100" r="4" fill="#3b82f6" />
              <circle cx="350" cy="82" r="4" fill="#3b82f6" />

              {/* Age 23: 4 dots */}
              <circle cx="375" cy="100" r="4" fill="#10b981" />
              <circle cx="375" cy="82" r="4" fill="#10b981" />
              <circle cx="375" cy="64" r="4" fill="#10b981" />
              <circle cx="375" cy="46" r="4" fill="#10b981" />

              {/* Age 24: 3 dots */}
              <circle cx="400" cy="100" r="4" fill="#3b82f6" />
              <circle cx="400" cy="82" r="4" fill="#3b82f6" />
              <circle cx="400" cy="64" r="4" fill="#3b82f6" />

              {/* Age 25: 1 dot */}
              <circle cx="425" cy="100" r="4" fill="#3b82f6" />

              <text x="300" y="155" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-sm font-semibold">Age (years)</text>
            </svg>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Describe the distribution of the ages.
            </p>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">
                  Sample Description:
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
                  <span className="block">• <strong>Range:</strong> The ages range from 14 years to 25 years.</span>
                  <span className="block">• <strong>Clustering:</strong> The majority of contestants are clustered between 22 and 25 years old, with the highest frequency at age 23 (4 contestants).</span>
                  <span className="block">• <strong>Outlier:</strong> There is one younger contestant at age 14, which is significantly lower than the main cluster.</span>
                  <span className="block">• <strong>Shape:</strong> The distribution is not symmetrical - it is skewed toward the younger ages with the outlier at 14.</span>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Advantages and Limitations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Advantages and Limitations of Dot Diagrams
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Advantages */}
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-500">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">✓</span>
                Advantages
              </h3>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                  <span><strong>Simple and quick to construct</strong> - Easy to create by hand or digitally</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                  <span><strong>Shows every data point</strong> - Each value is visible and countable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                  <span><strong>Easy to identify mode</strong> - The tallest stack shows the most common value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                  <span><strong>Reveals distribution patterns</strong> - Clusters and gaps are visible at a glance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                  <span><strong>Perfect for small data sets</strong> - Works well with 10-30 data points</span>
                </li>
              </ul>
            </div>

            {/* Limitations */}
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-2 border-red-500">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">✗</span>
                Limitations
              </h3>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                  <span><strong>Not suitable for large data sets</strong> - Too many dots become cluttered and hard to read</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                  <span><strong>Inefficient for many different values</strong> - If values vary widely, the number line becomes too long</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                  <span><strong>Each dot represents only one unit</strong> - Can't easily scale for larger datasets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                  <span><strong>Difficult with decimal values</strong> - Values like 12.3, 12.4, 12.5 would need many tick marks</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              <strong>When to use dot diagrams:</strong> They work best for small sets of numerical data
              (typically fewer than 30 values) where you want to see the exact distribution and identify
              the mode quickly. For larger data sets or data with many different values, histograms or
              stem-and-leaf diagrams are more appropriate.
            </p>
          </div>
        </section>

        {/* Practice Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Practice Problems
          </h2>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Constructing a Dot Diagram
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The number of text messages sent by 15 students on a weekend:
            </p>
            <p className="font-mono bg-white dark:bg-gray-800 p-2 rounded text-gray-800 dark:text-gray-200 mb-3">
              12, 15, 18, 12, 20, 18, 15, 10, 18, 20, 15, 12, 18, 15, 20
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              (a) Construct a dot diagram for this data.<br />
              (b) What is the most common number of messages sent?<br />
              (c) How many students sent at least 18 messages?
            </p>

            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700 space-y-4">
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">(a) Dot Diagram:</p>
                  <svg viewBox="0 0 600 160" className="w-full h-auto">
                    <line x1="50" y1="120" x2="550" y2="120" stroke="currentColor" strokeWidth="2" className="text-gray-800 dark:text-gray-300" />
                    {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((value) => {
                      const x = 50 + (value - 10) * 50;
                      return (
                        <g key={value}>
                          <line x1={x} y1="115" x2={x} y2="125" stroke="currentColor" strokeWidth="2" className="text-gray-800 dark:text-gray-300" />
                          <text x={x} y="140" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">{value}</text>
                        </g>
                      );
                    })}
                    {/* 10: 1 */}
                    <circle cx="50" cy="100" r="4" fill="#3b82f6" />
                    {/* 12: 3 */}
                    <circle cx="150" cy="100" r="4" fill="#3b82f6" />
                    <circle cx="150" cy="82" r="4" fill="#3b82f6" />
                    <circle cx="150" cy="64" r="4" fill="#3b82f6" />
                    {/* 15: 4 */}
                    <circle cx="300" cy="100" r="4" fill="#10b981" />
                    <circle cx="300" cy="82" r="4" fill="#10b981" />
                    <circle cx="300" cy="64" r="4" fill="#10b981" />
                    <circle cx="300" cy="46" r="4" fill="#10b981" />
                    {/* 18: 4 */}
                    <circle cx="450" cy="100" r="4" fill="#10b981" />
                    <circle cx="450" cy="82" r="4" fill="#10b981" />
                    <circle cx="450" cy="64" r="4" fill="#10b981" />
                    <circle cx="450" cy="46" r="4" fill="#10b981" />
                    {/* 20: 3 */}
                    <circle cx="550" cy="100" r="4" fill="#3b82f6" />
                    <circle cx="550" cy="82" r="4" fill="#3b82f6" />
                    <circle cx="550" cy="64" r="4" fill="#3b82f6" />
                    <text x="300" y="155" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-sm">Number of Messages</text>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">(b) Most common:</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Both 15 and 18 messages are equally common (each appears 4 times). The data is <strong>bimodal</strong>
                    with modes at 15 and 18.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">(c) At least 18 messages:</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Students who sent ≥18: 18 (4 students) + 20 (3 students) = <strong>7 students</strong>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Analysis Question
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A teacher wants to display data about the number of books read by 50 students during summer vacation.
              The values range from 0 to 45 books, with many different values.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Would a dot diagram be appropriate for this data? Explain your answer.
            </p>

            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  <strong>No, a dot diagram would NOT be appropriate</strong> for this data for several reasons:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm ml-4">
                  <li>
                    <strong>Large range:</strong> The values span from 0 to 45, requiring 46 tick marks on the number line,
                    which would make the diagram very wide and difficult to read.
                  </li>
                  <li>
                    <strong>Many different values:</strong> With many possible values, dots would be spread thinly
                    across the number line, making patterns hard to identify.
                  </li>
                  <li>
                    <strong>Larger data set:</strong> With 50 students, a dot diagram becomes cluttered.
                  </li>
                  <li>
                    <strong>Better alternatives:</strong> A histogram with grouped data (e.g., 0-9, 10-19, 20-29, etc.)
                    or a stem-and-leaf diagram would be much more appropriate for displaying this data clearly.
                  </li>
                </ul>
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
            <li>
              Dot diagrams use a <strong>horizontal number line with equal intervals</strong> and plot each
              data value as a dot above its position.
            </li>
            <li>
              The number line must include <strong>all values in the range</strong>, even if some values have zero frequency.
            </li>
            <li>
              Dots are <strong>stacked vertically</strong> for repeated values and must be equally spaced.
            </li>
            <li>
              Dot diagrams are <strong>ideal for small numerical data sets</strong> (typically under 30 values)
              where you want to see the exact distribution.
            </li>
            <li>
              When describing distributions, look for: <strong>range, clusters, extreme values (outliers), and symmetry</strong>.
            </li>
            <li>
              Dot diagrams are <strong>not suitable</strong> for large data sets, data with many different values,
              or data with a large range.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
