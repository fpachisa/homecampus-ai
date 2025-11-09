import { useState } from 'react';

export default function IntroductionNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Introduction to Statistical Diagrams</h1>
        <p className="mt-2 text-purple-100">Understanding data types and choosing the right visual representation</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: What is Statistics? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What is Statistics?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Statistics is the study of the <strong>collection, organization, and interpretation of numerical data</strong>.
              When we collect data, we often have large amounts of information that can be difficult to understand at a glance.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Statistical diagrams help us <strong>visualize patterns, trends, and distributions</strong> in data sets,
              making it easier to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Identify the most common values (mode)</li>
              <li>See how data is spread out (distribution)</li>
              <li>Compare different groups or categories</li>
              <li>Make predictions and informed decisions</li>
            </ul>
          </div>

          {/* Visual: Quote Box */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
            <p className="text-sm text-purple-900 dark:text-purple-200 italic">
              <strong>Historical Note:</strong> John Graunt (1620-1674), an English statistician,
              is considered the father of statistics. He was the first to study population patterns
              by analyzing death records in British cities, discovering patterns even though individual
              deaths seemed random.
            </p>
          </div>
        </section>

        {/* Section 2: Types of Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Types of Data
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Before choosing a statistical diagram, we must understand what <strong>type of data</strong> we have.
              There are two main types:
            </p>
          </div>

          {/* Categorical Data */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">
              1. Categorical Data (Qualitative)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Data that can be <strong>grouped into categories</strong> or labels. This data represents qualities or characteristics.
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Examples:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Favorite fruit: Apple, Pear, Orange, Watermelon</li>
                <li>Eye color: Brown, Blue, Green, Hazel</li>
                <li>Mode of transport: Car, Bus, Train, Bicycle</li>
                <li>Country: Singapore, Malaysia, Indonesia</li>
              </ul>
            </div>

            <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded">
              <p className="text-sm text-blue-900 dark:text-blue-200">
                <strong>Key Point:</strong> Categorical data uses <strong>labels or names</strong>, not numbers.
                Even if we count how many people chose each category, the categories themselves are not numbers.
              </p>
            </div>
          </div>

          {/* Numerical Data */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded mb-6">
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3">
              2. Numerical Data (Quantitative)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Data that consists of <strong>numbers representing measurements or counts</strong>.
              This data can be measured or counted.
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded mt-3">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Examples:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Heights: 152 cm, 165 cm, 178 cm</li>
                <li>Test scores: 75, 82, 91, 68</li>
                <li>Ages: 12, 13, 14 years</li>
                <li>Number of goals scored: 0, 1, 2, 3</li>
                <li>Temperature: 28°C, 30°C, 32°C</li>
              </ul>
            </div>

            <div className="mt-4 space-y-3">
              <p className="text-sm font-semibold text-green-900 dark:text-green-200">
                Numerical data can be further classified into:
              </p>

              <div className="ml-4 space-y-2">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded">
                  <p className="font-semibold text-green-900 dark:text-green-200">
                    Discrete Data: Can only take specific values (usually whole numbers)
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    Example: Number of siblings (0, 1, 2, 3...), number of books (you can't have 2.5 books!)
                  </p>
                </div>

                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded">
                  <p className="font-semibold text-green-900 dark:text-green-200">
                    Continuous Data: Can take any value within a range
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    Example: Height (165.2 cm), weight (45.7 kg), temperature (28.5°C)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Practice: Identifying Data Types */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Identify the Data Type
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              For each data set below, identify whether it is <strong>categorical</strong> or <strong>numerical</strong>:
            </p>

            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Travel times to school: 20, 22, 21, 23, 18, 18, 22, 20 minutes</li>
              <li>Students' favorite subjects: Math, Science, English, History</li>
              <li>Masses of students: 32 kg, 35 kg, 31 kg, 28 kg</li>
              <li>Types of pets: Dog, Cat, Fish, Bird</li>
            </ol>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li><strong>Numerical</strong> - These are measurements in minutes</li>
                  <li><strong>Categorical</strong> - These are category labels (subject names)</li>
                  <li><strong>Numerical</strong> - These are measurements in kilograms</li>
                  <li><strong>Categorical</strong> - These are category labels (animal types)</li>
                </ol>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Overview of Statistical Diagrams */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Common Statistical Diagrams
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Different diagrams are suitable for different types of data. Here's an overview of the diagrams we'll study:
            </p>
          </div>

          {/* Diagram Comparison Table */}
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-800 dark:text-gray-100">
                    Diagram Type
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-800 dark:text-gray-100">
                    Data Type
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-800 dark:text-gray-100">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Pictogram</strong>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Categorical
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Visual appeal, small data sets
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Bar Chart</strong>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Categorical
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Comparing frequencies across categories
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Pie Chart</strong>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Categorical
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Showing proportions/parts of a whole
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Line Graph</strong>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Two related numerical sets
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Showing trends over time
                  </td>
                </tr>
                <tr className="bg-purple-100 dark:bg-purple-900/30">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Dot Diagram</strong> ⭐
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Numerical (small sets)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Small numerical data, showing distribution
                  </td>
                </tr>
                <tr className="bg-purple-100 dark:bg-purple-900/30">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Histogram (Ungrouped)</strong> ⭐
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Numerical
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Frequency distribution of individual values
                  </td>
                </tr>
                <tr className="bg-purple-100 dark:bg-purple-900/30">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Stem-and-Leaf</strong> ⭐
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Numerical
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Preserving actual data values while showing distribution
                  </td>
                </tr>
                <tr className="bg-purple-100 dark:bg-purple-900/30">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    <strong>Histogram (Grouped)</strong> ⭐
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Numerical (large sets)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Large data sets with class intervals
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
            <p className="text-sm text-purple-900 dark:text-purple-200">
              <strong>⭐ New in this chapter:</strong> The diagrams marked with stars are what we'll focus on in this topic.
              They are specifically designed for numerical data and help us see patterns and distributions.
            </p>
          </div>
        </section>

        {/* Section 4: Choosing the Right Diagram */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Choosing the Right Diagram
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Selecting the appropriate diagram depends on several factors:
            </p>
          </div>

          {/* Decision Guide */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-700">
            <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-200 mb-4">
              Decision Guide: Which Diagram Should I Use?
            </h3>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Step 1: What type of data do you have?
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 text-sm">
                  <li><strong>Categorical</strong> → Use bar chart, pie chart, or pictogram</li>
                  <li><strong>Numerical</strong> → Continue to Step 2</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Step 2: How large is your numerical data set?
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 text-sm">
                  <li><strong>Small (under 30 values)</strong> → Use dot diagram or stem-and-leaf</li>
                  <li><strong>Large (30+ values)</strong> → Continue to Step 3</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-yellow-500">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Step 3: Do you want to preserve exact data values?
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 text-sm">
                  <li><strong>Yes, preserve values</strong> → Use stem-and-leaf diagram</li>
                  <li><strong>No, show distribution only</strong> → Use histogram (grouped data)</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-purple-500">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Step 4: How many different values are there?
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 text-sm">
                  <li><strong>Few different values</strong> → Histogram for ungrouped data works well</li>
                  <li><strong>Many different values</strong> → Group into class intervals (grouped histogram)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Practice Question */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mt-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Choosing Diagrams
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              For each scenario, decide which diagram would be most appropriate:
            </p>

            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Showing the masses (in kg) of 24 students: 25, 30, 32, 35, 31, 28...</li>
              <li>Displaying heights of 40 students ranging from 140 cm to 180 cm</li>
              <li>Showing travel times (in minutes) for 12 employees: 20, 22, 21, 23...</li>
              <li>Displaying favorite colors of 50 students</li>
            </ol>

            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 ml-4">
                  <li>
                    <strong>Dot diagram or stem-and-leaf</strong> - Small numerical data set (24 values),
                    can show distribution clearly
                  </li>
                  <li>
                    <strong>Stem-and-leaf or grouped histogram</strong> - Larger data set (40 values)
                    with wide range, may need grouping
                  </li>
                  <li>
                    <strong>Dot diagram</strong> - Very small numerical data set (12 values),
                    perfect for simple visualization
                  </li>
                  <li>
                    <strong>Bar chart or pie chart</strong> - Categorical data (colors are categories)
                  </li>
                </ol>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Categorical data</strong> uses labels/categories (e.g., colors, names).
              Best shown with bar charts, pie charts, or pictograms.
            </li>
            <li>
              <strong>Numerical data</strong> consists of numbers from measurements or counts.
              Can be discrete (whole numbers) or continuous (any value).
            </li>
            <li>
              Different diagrams serve different purposes - choosing the right one depends on your
              data type, size, and what you want to show.
            </li>
            <li>
              For numerical data, we'll focus on: <strong>dot diagrams</strong> (small sets),
              <strong>histograms</strong> (frequencies), and <strong>stem-and-leaf</strong> (preserving values).
            </li>
            <li>
              The goal of statistical diagrams is to make data easier to understand by revealing
              patterns, trends, and distributions visually.
            </li>
          </ul>
        </div>

        {/* Advanced: Why Diagrams Matter */}
        <div className="mt-6">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold"
          >
            <span>{showAdvanced ? '▼' : '▶'}</span>
            <span>Advanced: Why Different Diagrams Can Give Different Impressions</span>
          </button>

          {showAdvanced && (
            <div className="mt-4 ml-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded border-l-2 border-indigo-500">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The same data can look very different depending on which diagram we use. This is important
                because:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>
                  <strong>Scale matters</strong>: Changing the scale on axes can make differences look
                  bigger or smaller than they really are.
                </li>
                <li>
                  <strong>Grouping choices</strong>: How we group data into intervals can hide or
                  reveal patterns.
                </li>
                <li>
                  <strong>Misleading visuals</strong>: Some diagrams can be manipulated to mislead readers
                  (e.g., truncated axes, 3D effects in pie charts).
                </li>
                <li>
                  <strong>Critical thinking</strong>: When reading diagrams, always check the axes, scales,
                  and groupings to ensure you're interpreting the data correctly.
                </li>
              </ul>
              <p className="text-sm text-indigo-900 dark:text-indigo-200 mt-4 font-semibold">
                We'll explore this more when we study histograms with different class intervals!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
