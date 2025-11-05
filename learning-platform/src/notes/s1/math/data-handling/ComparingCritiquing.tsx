import { useState } from 'react';

const ComparingCritiquing = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-purple-600 dark:from-red-600 dark:to-purple-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Comparing & Critiquing Statistical Diagrams</h1>
        <p className="mt-2 text-red-100">Learning to choose appropriate diagrams and identify misleading graphs</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg space-y-8">

        {/* Section 1: Advantages and Disadvantages */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Advantages & Disadvantages of Each Diagram Type
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Each statistical diagram has strengths and weaknesses. Understanding these helps you choose the best representation for your data.
            </p>
          </div>

          {/* Pictograms */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">📊 Pictograms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div>
                <p className="text-green-700 dark:text-green-300 font-semibold mb-1">✅ Advantages:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Visually appealing and engaging</li>
                  <li>Easy to understand at a glance</li>
                  <li>Good for young audiences</li>
                  <li>Memorable representations</li>
                </ul>
              </div>
              <div>
                <p className="text-red-700 dark:text-red-300 font-semibold mb-1">❌ Disadvantages:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Less precise (hard to show exact values)</li>
                  <li>Difficult to show fractions of symbols</li>
                  <li>Can be misleading if symbols vary in size</li>
                  <li>Not suitable for large datasets</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bar Graphs */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">📊 Bar Graphs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div>
                <p className="text-green-700 dark:text-green-300 font-semibold mb-1">✅ Advantages:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Precise values clearly shown</li>
                  <li>Easy to compare quantities</li>
                  <li>Works for many categories</li>
                  <li>Can handle large values</li>
                </ul>
              </div>
              <div>
                <p className="text-red-700 dark:text-red-300 font-semibold mb-1">❌ Disadvantages:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Doesn't show proportions of whole</li>
                  <li>Can become cluttered with too many bars</li>
                  <li>Less visually engaging than pictograms</li>
                  <li>Requires careful axis scaling</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pie Charts */}
          <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-pink-800 dark:text-pink-300 mb-2">📊 Pie Charts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div>
                <p className="text-green-700 dark:text-green-300 font-semibold mb-1">✅ Advantages:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Shows proportions clearly</li>
                  <li>Visual "parts of a whole" representation</li>
                  <li>Good for percentages</li>
                  <li>Compact and attractive</li>
                </ul>
              </div>
              <div>
                <p className="text-red-700 dark:text-red-300 font-semibold mb-1">❌ Disadvantages:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Hard to read exact values</li>
                  <li>Difficult with many categories (&gt;7)</li>
                  <li>Can't show trends over time</li>
                  <li>Small sectors hard to label</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Line Graphs */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">📊 Line Graphs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div>
                <p className="text-green-700 dark:text-green-300 font-semibold mb-1">✅ Advantages:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Perfect for showing trends</li>
                  <li>Easy to spot patterns</li>
                  <li>Can make predictions</li>
                  <li>Shows continuous change</li>
                </ul>
              </div>
              <div>
                <p className="text-red-700 dark:text-red-300 font-semibold mb-1">❌ Disadvantages:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Requires sequential/time data</li>
                  <li>Not good for comparing categories</li>
                  <li>Can be misleading with broken axes</li>
                  <li>Multiple lines can become confusing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Choosing the Best Diagram
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              For each scenario, choose the BEST diagram type and explain why:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-3">
              <li>Showing how a family's monthly budget of $3000 is divided among housing, food, transport, and savings</li>
              <li>Comparing the number of students enrolled in each subject across 8 different courses</li>
              <li>Tracking daily rainfall for one month to identify weather patterns</li>
            </ol>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 ml-4">
                  <li>
                    <strong>Pie chart</strong> - Best for showing how parts make up the whole budget ($3000 = 100%). Each category's proportion is clear.
                  </li>
                  <li>
                    <strong>Bar graph</strong> - Best for comparing frequencies across categories. Easy to see which courses have most/least students.
                  </li>
                  <li>
                    <strong>Line graph</strong> - Best for tracking change over time (day by day). Can easily spot trends, patterns, and rainfall spikes.
                  </li>
                </ol>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Identifying Misleading Graphs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Spotting Misleading Statistical Graphs
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sometimes graphs can be misleading - either accidentally or deliberately. It's important to identify these problems to avoid drawing wrong conclusions.
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <p className="font-semibold text-red-800 dark:text-red-300 mb-2">Common Ways Graphs Mislead:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Inconsistent symbol sizes (pictograms):</strong> Larger symbols suggest more than intended</li>
                <li><strong>Broken or manipulated axis scales:</strong> Makes differences appear larger/smaller</li>
                <li><strong>Starting Y-axis above zero:</strong> Exaggerates differences between values</li>
                <li><strong>Unequal bar widths:</strong> Wider bars look more important</li>
                <li><strong>3D effects:</strong> Distorts visual comparisons</li>
                <li><strong>Cherry-picked time ranges:</strong> Shows only favorable periods</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Misleading Pictogram
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>Problem:</strong> A company shows its growth using car symbols, where Year 1 has a small car 🚗 and Year 2 has a car twice as tall AND twice as wide 🚙.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Why is this misleading?</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                If Year 2's symbol is twice as tall and twice as wide, it takes up <strong>4 times the area</strong> (2 × 2 = 4), not twice the area. This makes growth appear 4× instead of 2×!
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3 font-semibold text-green-600 dark:text-green-400">
                Correct approach: Use two cars of equal size for Year 2, or clearly state what each symbol represents.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Misleading Bar Graph Scale
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Two companies show their sales:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="p-3 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600">
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Company A's Graph:</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Y-axis: 0 to 100</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Sales: 90 (bar reaches near top)</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600">
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Company B's Graph:</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Y-axis: 80 to 100 (starts at 80!)</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Sales: 92 (bar reaches near top)</p>
              </div>
            </div>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Problem:</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                Company B's graph <strong>starts at 80, not 0</strong>. This makes their sales of 92 look huge compared to Company A's 90, when the difference is actually tiny (only 2 units)!
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3 font-semibold text-green-600 dark:text-green-400">
                Always check: Does the Y-axis start at zero? If not, is there a good reason?
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Identifying Misleading Elements
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              You see a line graph showing "Massive Growth in Customer Satisfaction!" The Y-axis starts at 85% and goes to 90%, with a line rising from 87% to 89% over 5 years.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              (a) What makes this graph potentially misleading?<br />
              (b) What is the actual increase in satisfaction?<br />
              (c) How could this graph be improved to show the data honestly?
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
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (a) <strong>The Y-axis starts at 85% instead of 0%</strong>, making the 2% increase look like a huge climb. The title "Massive Growth!" also exaggerates.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  (b) Actual increase: 89% - 87% = <strong>only 2 percentage points</strong> over 5 years (quite small!)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  (c) Improvements:
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mt-1">
                    <li>Start Y-axis at 0% (or at least show a clear axis break if starting higher)</li>
                    <li>Use a neutral title like "Customer Satisfaction 2018-2023"</li>
                    <li>This would show the increase as modest, which is more honest</li>
                  </ul>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Critical Thinking Checklist */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Questions to Ask When Viewing Statistical Diagrams
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Always apply critical thinking when viewing statistical diagrams. Ask yourself these questions:
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-3">Critical Analysis Checklist:</p>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-semibold">📊 About the Data:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-4 mt-1">
                    <li>Where did the data come from? Is the source reliable?</li>
                    <li>How many data points? (Small samples can be misleading)</li>
                    <li>What time period? (Recent or outdated?)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">📐 About the Axes:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-4 mt-1">
                    <li>Does the Y-axis start at zero?</li>
                    <li>Are the scales evenly spaced?</li>
                    <li>Are axes clearly labeled with units?</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">🎨 About the Visual:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-4 mt-1">
                    <li>Are all symbols/bars the same size and properly scaled?</li>
                    <li>Are 3D effects distorting comparisons?</li>
                    <li>Is the title neutral or biased?</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">🤔 About the Message:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-4 mt-1">
                    <li>What story is the graph trying to tell?</li>
                    <li>Could the data be interpreted differently?</li>
                    <li>Is the conclusion supported by the actual numbers?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-red-700 dark:text-red-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Each diagram type has <strong>advantages and disadvantages</strong> - choose based on your data and purpose</li>
            <li><strong>Pictograms</strong> are engaging but less precise; <strong>bar graphs</strong> are precise for comparisons</li>
            <li><strong>Pie charts</strong> show proportions; <strong>line graphs</strong> show trends over time</li>
            <li>Graphs can be <strong>misleading</strong> through manipulated scales, inconsistent symbols, or biased presentation</li>
            <li>Always check: Does the Y-axis start at zero? Are scales consistent? Is the source reliable?</li>
            <li><strong>Critical thinking</strong> is essential - question what you see and look beyond the visual presentation</li>
            <li>The same data can tell different stories depending on how it's presented</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ComparingCritiquing;
