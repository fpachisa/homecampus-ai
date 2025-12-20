import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function WordProblems() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Average Word Problems</h1>
        <p className="text-lg">Master challenging problems using all three average formulas</p>
      </div>

      <div className="space-y-8">
        {/* Golden Rule */}
        <section>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">The Golden Rule</h2>
            <p className="text-xl text-center font-bold text-gray-800 dark:text-gray-200">
              Always find the <span className="text-yellow-600 dark:text-yellow-400">TOTAL</span> first, then work from there!
            </p>
          </div>
        </section>

        {/* Section 1: Finding Missing Values */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">1. Finding Missing Values</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Strategy</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li><strong>Find the total:</strong> Total = Average × Number</li>
              <li><strong>Find the missing value:</strong> Missing = Total - Sum of known values</li>
            </ol>
          </div>

          {/* Example 1: Fourth Number */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 1: Finding the Fourth Number</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The average of 4 numbers is <strong>20</strong>.
              The sum of 3 of the numbers is <strong>69</strong>.
              What is the fourth number?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Finding the Missing Number",
                bars: [
                  {
                    label: "4 numbers",
                    segments: [
                      { value: "69", units: 3, highlight: false },
                      { value: "?", units: 1, highlight: true }
                    ],
                    totalLabel: "Total = 80"
                  }
                ],
                showUnitDividers: true,
                caption: "3 numbers sum to 69, the 4th is unknown"
              }}
            />

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 1:</strong> Find the total
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  Sum of 4 numbers = Average × Number = 20 × 4 = <strong>80</strong>
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 2:</strong> Find the missing number
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  Fourth number = 80 - 69 = <strong>11</strong>
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Check:</strong> If the 4th number is 11, then sum = 69 + 11 = 80.
                Average = 80 ÷ 4 = 20 ✓
              </p>
            </div>
          </div>

          {/* Example 2: Fifth Number */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example 2: Finding the Fifth Number</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The average of 5 numbers is <strong>50</strong>.
              The sum of 4 of the numbers is <strong>192</strong>.
              What is the fifth number?
            </p>

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 1:</strong> Sum of 5 numbers = 50 × 5 = <strong>250</strong>
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 2:</strong> Fifth number = 250 - 192 = <strong>58</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Bar Graph Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">2. Problems with Bar Graphs</h2>

          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Strategy</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li><strong>Find total:</strong> Total = Average × Number of bars</li>
              <li><strong>Add visible bars:</strong> Sum the bars you can read</li>
              <li><strong>Find missing:</strong> Missing bar = Total - Sum of visible bars</li>
            </ol>
          </div>

          {/* Example: Drink Seller */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Packet Drinks Sold</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The bar graph shows the number of packet drinks sold by a drink seller over 4 days.
              The average number of packets sold each day was <strong>48</strong>.
              The bar showing Thursday is partially torn off.
              How many packets were sold on Thursday?
            </p>

            <MathToolRenderer
              toolName="barChart"
              parameters={{
                categories: ["Mon", "Tue", "Wed", "Thu"],
                values: [56, 44, 52, 40],
                title: "Packet Drinks Sold Over 4 Days",
                xLabel: "Day",
                yLabel: "Number of Packets",
                showValues: true,
                highlightIndex: 3
              }}
            />

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Given:</strong> Mon = 56, Tue = 44, Wed = 52, Thu = ?
                <br />Average = 48 packets per day over 4 days
              </p>
            </div>

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 1:</strong> Find total packets sold
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  Total = 48 × 4 = <strong>192 packets</strong>
                </p>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 2:</strong> Sum of visible bars
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  Mon + Tue + Wed = 56 + 44 + 52 = <strong>152 packets</strong>
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 3:</strong> Find Thursday
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  Thursday = 192 - 152 = <strong>40 packets</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Example: Clinic Patients */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Patients at Clinic</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The bar graph shows patients from Monday to Friday.
              The average from Monday to Saturday was <strong>38</strong>.
              How many patients were there on Saturday?
            </p>

            <MathToolRenderer
              toolName="barChart"
              parameters={{
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
                values: [44, 58, 32, 52, 26],
                title: "Patients at Lim's Clinic",
                xLabel: "Day",
                yLabel: "Number of Patients",
                showValues: true
              }}
            />

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 1:</strong> Total for 6 days (Mon-Sat) = 38 × 6 = <strong>228</strong>
                </p>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 2:</strong> Sum Mon-Fri = 44 + 58 + 32 + 52 + 26 = <strong>212</strong>
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 3:</strong> Saturday = 228 - 212 = <strong>16 patients</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Combined Averages */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">3. Combined Averages</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Important Warning!</h3>
            <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-semibold">
                You CANNOT simply add averages!
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                If boys average 7 and girls average 10, the combined average is NOT 7 + 10 = 17!
              </p>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Strategy</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li>Find <strong>combined total</strong> = Combined average × Total count</li>
              <li>Find <strong>known subgroup total</strong> = Subgroup average × Subgroup count</li>
              <li>Find <strong>other subgroup</strong> = Combined total - Known subgroup total</li>
            </ol>
          </div>

          {/* Example: Boys and Girls */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Boys and Girls Savings</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              In March, <strong>3 boys and 2 girls</strong> saved an average of <strong>$10</strong>.
              The 3 boys saved an average of <strong>$7</strong>.
              How much did the 2 girls save in total?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Savings Problem",
                bars: [
                  {
                    label: "3 boys + 2 girls",
                    segments: [
                      { value: "$10 avg", units: 5 }
                    ],
                    totalLabel: "$50"
                  },
                  {
                    label: "3 boys",
                    segments: [
                      { value: "$7 avg", units: 3 }
                    ],
                    totalLabel: "$21"
                  }
                ],
                showUnitDividers: true,
                caption: "Total for all 5 children vs Total for 3 boys"
              }}
            />

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 1:</strong> Total saved by all 5 children
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  = $10 × 5 = <strong>$50</strong>
                </p>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 2:</strong> Total saved by 3 boys
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  = $7 × 3 = <strong>$21</strong>
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 3:</strong> Total saved by 2 girls
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  = $50 - $21 = <strong>$29</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Example: Men and Women */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Buying Fruits</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              <strong>4 men and 6 women</strong> bought an average of <strong>12 fruits</strong>.
              The 4 men bought an average of <strong>10 fruits</strong>.
              How many fruits did the 6 women buy in total?
            </p>

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 1:</strong> Total fruits bought by all 10 people
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  = 12 × 10 = <strong>120 fruits</strong>
                </p>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 2:</strong> Total fruits bought by 4 men
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  = 10 × 4 = <strong>40 fruits</strong>
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 3:</strong> Total fruits bought by 6 women
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  = 120 - 40 = <strong>80 fruits</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: New Member Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-700 dark:text-teal-300">4. New Member Joins</h2>

          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Strategy</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li>Find <strong>old total</strong> = Old average × Old count</li>
              <li>Find <strong>new total</strong> = Old total + New member's value</li>
              <li>Find <strong>new average</strong> = New total ÷ New count</li>
            </ol>
          </div>

          {/* Example: Children's Height */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Average Height Changes</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The average height of <strong>4 children</strong> is <strong>1.45 m</strong>.
              Another child whose height is <strong>1.55 m</strong> joins the group.
              What is the average height of the <strong>5 children</strong>?
            </p>

            <MathToolRenderer
              toolName="barModel"
              parameters={{
                title: "Finding New Total Height",
                bars: [
                  {
                    label: "4 children",
                    segments: [
                      { value: "1.45m avg", units: 4, color: "blue" }
                    ],
                    totalLabel: "5.8m",
                    bracketPosition: "top"
                  },
                  {
                    label: "New child",
                    segments: [
                      { value: "1.55m" }
                    ],
                    totalLabel: "1.55m",
                    bracketPosition: "top"
                  }
                ],
                caption: "Total = 5.8m + 1.55m = 7.35m, then divide by 5"
              }}
            />

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 1:</strong> Total height of 4 children
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  = 1.45 m × 4 = <strong>5.8 m</strong>
                </p>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 2:</strong> Total height of 5 children
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  = 5.8 m + 1.55 m = <strong>7.35 m</strong>
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 3:</strong> New average height
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  = 7.35 m ÷ 5 = <strong>1.47 m</strong>
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Notice:</strong> The new child (1.55 m) is taller than the old average (1.45 m),
                so the new average (1.47 m) goes UP!
              </p>
            </div>
          </div>

          {/* Example: Ribbons */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Adding a Ribbon</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Hasnah has <strong>3 ribbons</strong>.
              The average length of the 3 ribbons is <strong>8.5 m</strong>.
              She buys another ribbon that is <strong>7.5 m</strong> long.
              What is the average length of all the ribbons?
            </p>

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 1:</strong> Total length of 3 ribbons = 8.5 × 3 = <strong>25.5 m</strong>
                </p>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 2:</strong> Total length of 4 ribbons = 25.5 + 7.5 = <strong>33 m</strong>
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 3:</strong> New average = 33 ÷ 4 = <strong>8.25 m</strong>
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Notice:</strong> The new ribbon (7.5 m) is shorter than the old average (8.5 m),
                so the new average (8.25 m) goes DOWN!
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Teacher Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">5. Challenging Problems</h2>

          {/* Example: Teacher's Mass */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Teacher Joins the Class</h3>

            <p className="text-gray-800 dark:text-gray-200 mb-4">
              The average mass of <strong>39 students</strong> in Class 6A is <strong>40 kg</strong>.
              When the mass of the teacher is included, the average mass becomes <strong>41 kg</strong>.
              What is the mass of the teacher?
            </p>

            <div className="mt-4 space-y-3">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 1:</strong> Total mass of 39 students
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  = 40 × 39 = <strong>1560 kg</strong>
                </p>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 2:</strong> Total mass of 40 people (39 students + teacher)
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  = 41 × 40 = <strong>1640 kg</strong>
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Step 3:</strong> Mass of teacher
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-4">
                  = 1640 - 1560 = <strong>80 kg</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Points Summary */}
        <section>
          <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 p-6 rounded-lg border-2 border-orange-300 dark:border-orange-700">
            <h2 className="text-xl font-bold mb-4 text-orange-800 dark:text-orange-200">Key Problem-Solving Strategies</h2>
            <ul className="space-y-3 text-gray-800 dark:text-gray-200">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">1.</span>
                <span><strong>Missing Values:</strong> Total = Avg × Number, then Missing = Total - Known sum</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">2.</span>
                <span><strong>Bar Graphs:</strong> Total = Avg × Bars, then Missing bar = Total - Visible sum</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">3.</span>
                <span><strong>Combined Groups:</strong> Find both totals separately, then subtract</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">4.</span>
                <span><strong>New Member:</strong> New total = Old total + New value, then divide by new count</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold">!</span>
                <span><strong>Golden Rule:</strong> Always find the TOTAL first!</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
