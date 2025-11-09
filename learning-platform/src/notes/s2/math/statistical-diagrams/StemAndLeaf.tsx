import { useState } from 'react';

export default function StemAndLeafNotes() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSplit, setShowSplit] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Stem-and-Leaf Diagrams</h1>
        <p className="mt-2 text-amber-100">Preserving actual data values while showing distribution</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Understanding Stem-and-Leaf */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What is a Stem-and-Leaf Diagram?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>stem-and-leaf diagram</strong> (also called a stem-and-leaf plot or stem plot) is a method
              of displaying numerical data that preserves the <strong>actual data values</strong> while still showing
              the distribution pattern.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              It works by splitting each number into two parts: the <strong>stem</strong> (leading digit(s)) and
              the <strong>leaf</strong> (trailing digit).
            </p>
          </div>

          {/* Visual Example */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-4">
              Example: Breaking Down Numbers
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Two-Digit Numbers:</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p><span className="font-mono bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">142</span> → Stem: <strong>14</strong>, Leaf: <strong>2</strong></p>
                  <p><span className="font-mono bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">157</span> → Stem: <strong>15</strong>, Leaf: <strong>7</strong></p>
                  <p><span className="font-mono bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">164</span> → Stem: <strong>16</strong>, Leaf: <strong>4</strong></p>
                  <p><span className="font-mono bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">170</span> → Stem: <strong>17</strong>, Leaf: <strong>0</strong></p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">The Stem-and-Leaf Display:</p>
                <div className="font-mono text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-300 dark:border-gray-600">
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-right text-gray-600 dark:text-gray-400">Stem</span>
                    <span className="text-center">|</span>
                    <span className="text-gray-600 dark:text-gray-400">Leaves</span>
                    <span className="text-right text-gray-800 dark:text-gray-100">14</span>
                    <span className="text-center text-gray-600 dark:text-gray-400">|</span>
                    <span className="text-gray-800 dark:text-gray-100">2</span>
                    <span className="text-right text-gray-800 dark:text-gray-100">15</span>
                    <span className="text-center text-gray-600 dark:text-gray-400">|</span>
                    <span className="text-gray-800 dark:text-gray-100">7</span>
                    <span className="text-right text-gray-800 dark:text-gray-100">16</span>
                    <span className="text-center text-gray-600 dark:text-gray-400">|</span>
                    <span className="text-gray-800 dark:text-gray-100">4</span>
                    <span className="text-right text-gray-800 dark:text-gray-100">17</span>
                    <span className="text-center text-gray-600 dark:text-gray-400">|</span>
                    <span className="text-gray-800 dark:text-gray-100">0</span>
                  </div>
                  <p className="mt-3 text-xs text-gray-600 dark:text-gray-400">Key: 14 | 2 means 142</p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded">
              <p className="text-sm text-amber-900 dark:text-amber-200">
                <strong>Advantage:</strong> Unlike histograms, stem-and-leaf diagrams preserve the exact values!
                You can read the original data from the diagram.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded">
            <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-3">
              Key Features
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Stems are arranged in <strong>ascending order</strong> from top to bottom</li>
              <li>Leaves are recorded in <strong>ascending order</strong> from left to right (after sorting)</li>
              <li>All leaves must be <strong>single digits</strong> (0-9)</li>
              <li>A stem can have <strong>multiple leaves</strong> if several values share that stem</li>
              <li>Must include a <strong>key</strong> explaining how to read the diagram</li>
              <li>The diagram shows both <strong>individual values</strong> and the <strong>distribution shape</strong></li>
            </ul>
          </div>
        </section>

        {/* Section 2: Constructing Stem-and-Leaf Diagrams */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            How to Construct a Stem-and-Leaf Diagram
          </h2>

          {/* Worked Example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Worked Example: Student Heights
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The heights (in cm) of 40 students in a class:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4 font-mono text-sm">
              <div className="grid grid-cols-10 gap-2 text-center text-gray-700 dark:text-gray-300">
                142 144 147 151 151 152 153 155 155 156<br />
                156 157 157 158 158 159 159 160 160 161<br />
                162 162 163 164 164 165 166 166 167 167<br />
                168 169 169 170 171 174 176 176 177 178
              </div>
            </div>

            {/* Step-by-Step */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Step 1: Identify the stems</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Range: 142 to 178 cm<br />
                  Stems will be the first two digits: 14, 15, 16, 17
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Step 2: List stems in order</p>
                <div className="font-mono text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded mt-2">
                  14 |<br />
                  15 |<br />
                  16 |<br />
                  17 |
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Step 3: Record leaves (unsorted first)</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Go through data and write each leaf next to its stem:
                </p>
                <div className="font-mono text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded">
                  14 | 2 4 7<br />
                  15 | 1 1 2 3 5 5 6 6 7 7 8 8 9 9<br />
                  16 | 0 0 1 2 2 3 4 4 5 6 6 7 7 8 9 9<br />
                  17 | 0 1 4 6 6 7 8
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Step 4: Sort leaves in ascending order</p>
                <div className="font-mono text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded border-2 border-blue-500">
                  <div className="text-gray-700 dark:text-gray-300">
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <span className="text-right font-semibold">Stem</span>
                      <span>Leaves</span>
                    </div>
                    14 | 2 4 7<br />
                    15 | 1 1 2 3 5 5 6 6 7 7 8 8 9 9<br />
                    16 | 0 0 1 2 2 3 4 4 5 6 6 7 7 8 9 9<br />
                    17 | 0 1 4 6 6 7 8<br />
                    <div className="mt-3 pt-3 border-t border-gray-300 dark:border-gray-600 text-xs">
                      Key: 14 | 2 means 142 cm
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Step 5: Identify the modal class</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The interval with the most leaves is <strong>160-169 cm</strong> (stem 16 has 16 values).
                </p>
              </div>
            </div>
          </div>

          {/* Important Rules */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3">
              Important Rules & Tips
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 dark:text-yellow-400 font-bold mt-0.5">①</span>
                <span><strong>Stems must be in ascending order</strong> from top to bottom (140s, then 150s, then 160s, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 dark:text-yellow-400 font-bold mt-0.5">②</span>
                <span><strong>Leaves must be sorted</strong> from left to right in ascending order within each stem</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 dark:text-yellow-400 font-bold mt-0.5">③</span>
                <span><strong>Include all stems in the range</strong> even if they have no leaves (unlike histograms)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 dark:text-yellow-400 font-bold mt-0.5">④</span>
                <span><strong>Comma usage:</strong> Use commas between leaves only if needed for clarity (optional)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 dark:text-yellow-400 font-bold mt-0.5">⑤</span>
                <span><strong>Always include a key</strong> showing how to interpret the diagram (e.g., "14 | 2 means 142")</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Split Stems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Split Stems for Better Distribution
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sometimes a stem has <strong>too many leaves</strong>, making the diagram hard to read or hiding
              the distribution pattern. We can <strong>split each stem into two</strong> to spread the data more evenly.
            </p>
          </div>

          {/* How Split Stems Work */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded mb-6">
            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-4">
              How Split Stems Work
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Regular Stem:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">One row per stem value:</p>
                <div className="font-mono text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded">
                  15 | 1 1 2 3 5 5 6 6 7 7 8 8 9 9
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">All leaves 0-9 on same line</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Split Stem:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Two rows per stem value:</p>
                <div className="font-mono text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded">
                  15 | 1 1 2 3<br />
                  15 | 5 5 6 6 7 7 8 8 9 9
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">First row: leaves 0-4, Second row: leaves 5-9</p>
              </div>
            </div>

            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded">
              <p className="text-sm text-purple-900 dark:text-purple-200">
                <strong>Splitting Rule:</strong><br />
                • First stem row: leaves <strong>0, 1, 2, 3, 4</strong><br />
                • Second stem row: leaves <strong>5, 6, 7, 8, 9</strong>
              </p>
            </div>
          </div>

          {/* Example with Split Stems */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example: Same Height Data with Split Stems
            </h3>

            <button
              onClick={() => setShowSplit(!showSplit)}
              className="mt-2 mb-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded transition-colors"
            >
              {showSplit ? 'Hide' : 'Show'} Split Stem Diagram
            </button>

            {showSplit && (
              <div className="space-y-4">
                <div className="font-mono text-sm bg-white dark:bg-gray-800 p-4 rounded border-2 border-blue-500">
                  <div className="text-gray-700 dark:text-gray-300">
                    <div className="grid grid-cols-2 gap-2 mb-2 font-semibold">
                      <span className="text-right">Stem</span>
                      <span>Leaves</span>
                    </div>
                    14 | 2 4<br />
                    14 | 7<br />
                    15 | 1 1 2 3<br />
                    15 | 5 5 6 6 7 7 8 8 9 9<br />
                    16 | 0 0 1 2 2 3 4 4<br />
                    16 | 5 6 6 7 7 8 9 9<br />
                    17 | 0 1 4<br />
                    17 | 6 6 7 8<br />
                    <div className="mt-3 pt-3 border-t border-gray-300 dark:border-gray-600 text-xs">
                      Key: 14 | 2 means 142 cm
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded">
                  <p className="text-sm text-blue-900 dark:text-blue-200">
                    <strong>Benefit:</strong> The split stem diagram shows the distribution more clearly.
                    We can see that heights are concentrated in the 155-169 cm range, with the peak around 160-164 cm.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Advantages */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Advantages of Stem-and-Leaf Diagrams
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-2 border-green-500">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                <span className="text-2xl">✓</span>
                Advantages
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span><strong>Preserves actual data values</strong> - Can retrieve original numbers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span><strong>Shows distribution shape</strong> - Pattern visible at a glance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span><strong>Easy to find median</strong> - Count to middle value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span><strong>Compact display</strong> - More efficient than listing all values</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span><strong>Works well for 30-100 values</strong> - Good middle-ground tool</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-lg border-2 border-orange-500">
              <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
                <span className="text-2xl">⚠</span>
                When to Use
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400">•</span>
                  <span>Data has <strong>30-100 values</strong> (too many for dot diagrams)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400">•</span>
                  <span>You want to <strong>preserve exact values</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400">•</span>
                  <span>Data is <strong>numerical</strong> (not categorical)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400">•</span>
                  <span>Values have <strong>2-3 digits</strong> (works best)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400">•</span>
                  <span>You need to find <strong>median or quartiles</strong> easily</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Practice Problems
          </h2>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Constructing a Stem-and-Leaf Diagram
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Test scores (out of 50) for 20 students:
            </p>
            <p className="font-mono bg-white dark:bg-gray-800 p-3 rounded mb-3 text-gray-800 dark:text-gray-200 text-sm">
              23, 35, 41, 28, 33, 45, 38, 27, 42, 35, 31, 44, 29, 36, 40, 33, 38, 26, 42, 35
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              (a) Construct a stem-and-leaf diagram for this data.<br />
              (b) Find the median score.<br />
              (c) What is the range of scores?
            </p>

            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700 space-y-4">
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">(a) Stem-and-Leaf Diagram:</p>
                  <div className="font-mono text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded border border-gray-300 dark:border-gray-600">
                    <div className="text-gray-700 dark:text-gray-300">
                      Stem | Leaves<br />
                      2 | 3 6 7 8 9<br />
                      3 | 1 3 3 5 5 5 6 8 8<br />
                      4 | 0 1 2 2 4 5<br />
                      <br />
                      Key: 2 | 3 means 23
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">(b) Median:</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    With 20 values, the median is the average of the 10th and 11th values.<br />
                    Counting from the diagram: 10th value = 35, 11th value = 35<br />
                    Median = (35 + 35) ÷ 2 = <strong>35</strong>
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">(c) Range:</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Highest score = 45, Lowest score = 23<br />
                    Range = 45 - 23 = <strong>22</strong>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Reading a Stem-and-Leaf Diagram
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              The diagram shows waiting times (in minutes) at a clinic:
            </p>

            <div className="font-mono text-sm bg-white dark:bg-gray-800 p-4 rounded mb-3 border border-gray-300 dark:border-gray-600">
              <div className="text-gray-700 dark:text-gray-300">
                Stem | Leaves<br />
                0 | 5 8 9<br />
                1 | 2 3 5 7 8 9<br />
                2 | 0 1 4 6 8<br />
                3 | 2 5<br />
                <br />
                Key: 1 | 2 means 12 minutes
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              (a) How many patients were included in this data?<br />
              (b) What was the longest waiting time?<br />
              (c) How many patients waited less than 15 minutes?
            </p>

            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>

            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700 space-y-3">
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">(a) Number of patients:</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Count all leaves: 3 + 6 + 5 + 2 = <strong>16 patients</strong>
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">(b) Longest waiting time:</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Last leaf on stem 3: 3 | 5 means <strong>35 minutes</strong>
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">(c) Patients waiting less than 15 minutes:</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Values less than 15: 5, 8, 9, 12, 13<br />
                    <strong>5 patients</strong> waited less than 15 minutes
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-amber-700 dark:text-amber-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              Stem-and-leaf diagrams <strong>preserve actual data values</strong> while showing the distribution.
            </li>
            <li>
              Each number is split into a <strong>stem</strong> (leading digits) and <strong>leaf</strong> (last digit).
            </li>
            <li>
              Stems are arranged in <strong>ascending order</strong> from top to bottom.
            </li>
            <li>
              Leaves must be <strong>sorted in ascending order</strong> from left to right within each stem.
            </li>
            <li>
              <strong>Split stems</strong> (dividing leaves 0-4 and 5-9) help show distribution when a stem has many leaves.
            </li>
            <li>
              Always include a <strong>key</strong> explaining how to read the diagram (e.g., "14 | 2 = 142").
            </li>
            <li>
              Best for <strong>30-100 values</strong> when you want to preserve exact data while showing patterns.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
