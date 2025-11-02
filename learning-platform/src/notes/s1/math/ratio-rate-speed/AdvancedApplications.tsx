import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function AdvancedApplications() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Unit Conversion and Advanced Applications</h1>
        <p className="mt-2 text-orange-100">
          Master speed conversions and solve complex ratio, rate, and speed problems
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section A: Speed Unit Conversion */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            A. Converting Speed Units
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Speed can be measured in different units. The most common conversions are between <strong className="text-orange-600 dark:text-orange-400">km/h</strong> (kilometers per hour) and <strong className="text-orange-600 dark:text-orange-400">m/s</strong> (meters per second).
            </p>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">
                Key Unit Relationships
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <div className="p-3 bg-white dark:bg-gray-800 rounded border border-orange-300 dark:border-orange-700">
                  <p className="font-semibold">Distance:</p>
                  <p>1 km = 1000 m</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 rounded border border-orange-300 dark:border-orange-700">
                  <p className="font-semibold">Time:</p>
                  <p>1 hour = 60 minutes = 3600 seconds</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3">
                Speed Conversion Formulas
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-red-300 dark:border-red-700">
                  <p className="font-semibold text-red-700 dark:text-red-300 mb-2">km/h to m/s:</p>
                  <p className="text-center text-lg mb-2"><MathText>{'$\\text{Divide by } 3.6$'}</MathText></p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Or: Multiply by 1000, then divide by 3600</p>
                  <p className="text-sm mt-2">Example: 110 km/h = 110 ÷ 3.6 = 30.56 m/s</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-red-300 dark:border-red-700">
                  <p className="font-semibold text-red-700 dark:text-red-300 mb-2">m/s to km/h:</p>
                  <p className="text-center text-lg mb-2"><MathText>{'$\\text{Multiply by } 3.6$'}</MathText></p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Or: Multiply by 3600, then divide by 1000</p>
                  <p className="text-sm mt-2">Example: 10 m/s = 10 × 3.6 = 36 km/h</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: Converting km/h to m/s
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Convert 110 km/h to m/s, correct to 2 decimal places.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p><strong>Method 1: Using 3.6</strong></p>
                <p className="ml-4">110 km/h = 110 ÷ 3.6 m/s</p>
                <p className="ml-4">= 30.555... m/s</p>
                <p className="ml-4">≈ 30.56 m/s (to 2 d.p.)</p>
                <p className="mt-3"><strong>Method 2: From first principles</strong></p>
                <p className="ml-4">110 km/h = <MathText>{'$\\frac{110 \\times 1000 \\text{ m}}{3600 \\text{ s}}$'}</MathText></p>
                <p className="ml-4">= <MathText>{'$\\frac{110000}{3600}$'}</MathText> m/s</p>
                <p className="ml-4">≈ 30.56 m/s</p>
                <p className="mt-4 font-semibold">Answer: 30.56 m/s</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 2: Converting m/s to km/h
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Usain Bolt's average speed in the 100 m sprint is 10.4 m/s. Convert this to km/h.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p><strong>Method 1: Using 3.6</strong></p>
                <p className="ml-4">10.4 m/s = 10.4 × 3.6 km/h</p>
                <p className="ml-4">= 37.44 km/h</p>
                <p className="mt-3"><strong>Method 2: From first principles</strong></p>
                <p className="ml-4">10.4 m/s = <MathText>{'$\\frac{10.4 \\times 3600 \\text{ m}}{1000 \\text{ m/km}}$'}</MathText> km/h</p>
                <p className="ml-4">= <MathText>{'$\\frac{37440}{1000}$'}</MathText> km/h</p>
                <p className="ml-4">= 37.44 km/h</p>
                <p className="mt-4 font-semibold">Answer: 37.44 km/h</p>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                💡 Quick Check: Does Your Answer Make Sense?
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>When converting the same speed:</p>
                <p className="ml-4">• The value in m/s should be SMALLER than the value in km/h</p>
                <p className="ml-4">• Example: 36 km/h = 10 m/s (36 {'>'} 10 ✓)</p>
                <p className="mt-3">Why? Because meters are smaller than kilometers, so you travel fewer of them per second!</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Unit Conversion
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Convert: (a) 72 km/h to m/s  (b) 25 m/s to km/h
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p><strong>(a) 72 km/h to m/s:</strong></p>
                  <p className="ml-4">72 ÷ 3.6 = 20 m/s</p>
                  <p className="mt-3"><strong>(b) 25 m/s to km/h:</strong></p>
                  <p className="ml-4">25 × 3.6 = 90 km/h</p>
                  <p className="mt-4"><strong>Check:</strong> 20 {'<'} 72 ✓ and 25 {'<'} 90 ✓</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section B: Comparing Rates and Speeds */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            B. Comparing Rates and Speeds
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To compare rates or speeds with <strong className="text-teal-600 dark:text-teal-400">different units</strong>, we must first convert them to the same unit.
            </p>

            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-teal-800 dark:text-teal-300 mb-3">
                Strategy for Comparing
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-500 dark:bg-teal-400 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">Identify the units</p>
                    <p className="text-sm">Check what units each quantity is in</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-500 dark:bg-teal-400 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">Choose a common unit</p>
                    <p className="text-sm">Pick one unit to convert everything to</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-500 dark:bg-teal-400 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">Convert and compare</p>
                    <p className="text-sm">Convert both to the same unit, then compare</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 3: Comparing Speeds
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A cheetah runs at 110 km/h. Usain Bolt's average speed is 10.4 m/s. Which is faster?
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Convert cheetah's speed to m/s:</p>
                <p className="ml-4">110 km/h = 110 ÷ 3.6 m/s</p>
                <p className="ml-4">= 30.56 m/s (to 2 d.p.)</p>
                <p className="mt-3">Compare:</p>
                <p className="ml-4">Cheetah: 30.56 m/s</p>
                <p className="ml-4">Usain Bolt: 10.4 m/s</p>
                <p className="mt-3">Since 30.56 {'>'} 10.4:</p>
                <p className="mt-3 font-semibold">Answer: The cheetah runs faster than Usain Bolt</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 4: Comparing Work Rates
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Cindy cleans 17 rooms in 5 hours. Eddie cleans 14 rooms in 4 hours. Who works at a faster rate?
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Calculate each person's rate in rooms per hour:</p>
                <p className="mt-3"><strong>Cindy:</strong></p>
                <p className="ml-4">Rate = 17 rooms ÷ 5 hours = 3.4 rooms/hour</p>
                <p className="mt-3"><strong>Eddie:</strong></p>
                <p className="ml-4">Rate = 14 rooms ÷ 4 hours = 3.5 rooms/hour</p>
                <p className="mt-3">Compare: 3.5 {'>'} 3.4</p>
                <p className="mt-3 font-semibold">Answer: Eddie works at a faster rate</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 5: Better Value Comparison
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Shop A sells 5-kg rice for \$9.60. Shop B sells 10-kg rice for \$18.60. Which is better value?
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Calculate price per kg:</p>
                <p className="mt-3"><strong>Shop A:</strong></p>
                <p className="ml-4">Price per kg = \$9.60 ÷ 5 kg = \$1.92/kg</p>
                <p className="mt-3"><strong>Shop B:</strong></p>
                <p className="ml-4">Price per kg = \$18.60 ÷ 10 kg = \$1.86/kg</p>
                <p className="mt-3">Compare: \$1.86 {'<'} \$1.92</p>
                <p className="mt-3 font-semibold">Answer: Shop B is better value at \$1.86 per kg</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Comparison
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Jane runs 1000 m in 3 minutes 20 seconds. Tracy runs at half of Jane's average speed. Find Tracy's average speed in km/h.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p><strong>Step 1: Find Jane's speed</strong></p>
                  <p className="ml-4">Time = 3 min 20 s = 200 s</p>
                  <p className="ml-4">Speed = 1000 m ÷ 200 s = 5 m/s</p>
                  <p className="mt-3"><strong>Step 2: Find Tracy's speed</strong></p>
                  <p className="ml-4">Tracy's speed = 5 ÷ 2 = 2.5 m/s</p>
                  <p className="mt-3"><strong>Step 3: Convert to km/h</strong></p>
                  <p className="ml-4">2.5 m/s = 2.5 × 3.6 km/h = 9 km/h</p>
                  <p className="mt-4 font-semibold">Answer: 9 km/h</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section C: Complex Multi-Step Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            C. Complex Rate and Ratio Problems
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Complex problems combine multiple concepts: ratios, rates, proportions, unit conversions, and speed calculations. The key is to <strong className="text-indigo-600 dark:text-indigo-400">break them into steps</strong>.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
                Problem-Solving Strategy
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <p>1. Read the problem carefully - what is given and what is asked?</p>
                <p>2. Identify which concepts are involved (ratio, rate, speed, conversion)</p>
                <p>3. Break the problem into smaller steps</p>
                <p>4. Solve each step systematically</p>
                <p>5. Check if your answer makes sense</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 6: Meeting Point Problem
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Along a road, spots X and Y are 1150 m apart. Ann walks from X to Y at 0.4 m/s. Yohan walks from Y to X at 1.25 m/s. Both start at the same time. How many minutes later will they meet?
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>When two people walk towards each other, their speeds ADD:</p>
                <p className="mt-3"><strong>Step 1: Combined speed</strong></p>
                <p className="ml-4">Combined speed = 0.4 + 1.25 = 1.65 m/s</p>
                <p className="mt-3"><strong>Step 2: Time to meet</strong></p>
                <p className="ml-4">Time = Distance ÷ Speed</p>
                <p className="ml-4">= 1150 m ÷ 1.65 m/s</p>
                <p className="ml-4">= 696.97 seconds</p>
                <p className="mt-3"><strong>Step 3: Convert to minutes</strong></p>
                <p className="ml-4">= 696.97 ÷ 60 minutes</p>
                <p className="ml-4">≈ 11.6 minutes</p>
                <p className="mt-4 font-semibold">Answer: About 11.6 minutes</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 7: Rental Rate Problem
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A company rents an office (100 m²) and warehouse (300 m²). The office rental rate per m² is 2.5 times that of the warehouse. Total rent is \$4400/month. Find the warehouse rental rate in \$/m².
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Let warehouse rate = <MathText>x</MathText> \$/m²</p>
                <p>Then office rate = 2.5<MathText>x</MathText> \$/m²</p>
                <p className="mt-3"><strong>Set up equation:</strong></p>
                <p className="ml-4">Office rent + Warehouse rent = Total</p>
                <p className="ml-4">(100 × 2.5<MathText>x</MathText>) + (300 × <MathText>x</MathText>) = 4400</p>
                <p className="ml-4">250<MathText>x</MathText> + 300<MathText>x</MathText> = 4400</p>
                <p className="ml-4">550<MathText>x</MathText> = 4400</p>
                <p className="ml-4"><MathText>x</MathText> = 8</p>
                <p className="mt-4 font-semibold">Answer: \$8 per m²</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 8: Train Length Problem
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A train passes through a 360 m tunnel completely in 24 seconds. It passes through a 216 m tunnel completely in 16 seconds at the same speed. Find the length of the train.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Let train length = <MathText>L</MathText> meters</p>
                <p className="mt-3">When a train passes through a tunnel <strong>completely</strong>, it travels:</p>
                <p className="ml-4">Distance = Tunnel length + Train length</p>
                <p className="mt-3"><strong>For first tunnel:</strong></p>
                <p className="ml-4">Distance = 360 + <MathText>L</MathText></p>
                <p className="ml-4">Speed = (360 + <MathText>L</MathText>) ÷ 24</p>
                <p className="mt-3"><strong>For second tunnel:</strong></p>
                <p className="ml-4">Distance = 216 + <MathText>L</MathText></p>
                <p className="ml-4">Speed = (216 + <MathText>L</MathText>) ÷ 16</p>
                <p className="mt-3">Since speeds are equal:</p>
                <p className="ml-4"><MathText>{'$\\frac{360 + L}{24} = \\frac{216 + L}{16}$'}</MathText></p>
                <p className="ml-4">16(360 + <MathText>L</MathText>) = 24(216 + <MathText>L</MathText>)</p>
                <p className="ml-4">5760 + 16<MathText>L</MathText> = 5184 + 24<MathText>L</MathText></p>
                <p className="ml-4">576 = 8<MathText>L</MathText></p>
                <p className="ml-4"><MathText>L</MathText> = 72</p>
                <p className="mt-4 font-semibold">Answer: Train length is 72 m</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Complex Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A car travels at average speed <MathText>x</MathText> km/h for 2 hours, then at <MathText>y</MathText> km/h for 3 hours. Its average speed for the whole journey is 40 km/h. Find two possible sets of values for <MathText>x</MathText> and <MathText>y</MathText>.
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p>Total time = 2 + 3 = 5 hours</p>
                  <p>Average speed = 40 km/h</p>
                  <p className="mt-3">Total distance = 40 × 5 = 200 km</p>
                  <p className="mt-3">Also: Total distance = 2<MathText>x</MathText> + 3<MathText>y</MathText></p>
                  <p className="mt-2">Therefore: 2<MathText>x</MathText> + 3<MathText>y</MathText> = 200</p>
                  <p className="mt-3"><strong>Possible values:</strong></p>
                  <p className="ml-4">If <MathText>x</MathText> = 40: 2(40) + 3<MathText>y</MathText> = 200 → <MathText>y</MathText> = 40</p>
                  <p className="ml-4">If <MathText>x</MathText> = 50: 2(50) + 3<MathText>y</MathText> = 200 → <MathText>y</MathText> = 33.33</p>
                  <p className="ml-4">If <MathText>x</MathText> = 30: 2(30) + 3<MathText>y</MathText> = 200 → <MathText>y</MathText> = 46.67</p>
                  <p className="mt-4 font-semibold">Many possible answers! Examples: (40, 40), (50, 33.33), (30, 46.67)</p>
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
            <li>Converting speed: km/h to m/s (÷ 3.6), m/s to km/h (× 3.6)</li>
            <li>Quick check: m/s value should be smaller than km/h value for same speed</li>
            <li>To compare rates/speeds: convert to same units first, then compare</li>
            <li>Complex problems: break into steps, identify concepts, solve systematically</li>
            <li>Meeting problems: speeds add when moving towards each other</li>
            <li>Always check if your final answer makes sense in the context</li>
          </ul>
        </div>

        {/* Final Summary */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">
            🎓 Complete Mastery of Ratio, Rate, and Speed!
          </h3>
          <p className="mb-4">
            You've now covered all aspects of this topic:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 p-3 rounded">
              <p className="font-semibold">✓ Understanding Ratios</p>
              <p className="text-sm">Notation, equivalent ratios, simplification, three-term ratios</p>
            </div>
            <div className="bg-white/10 p-3 rounded">
              <p className="font-semibold">✓ Proportions</p>
              <p className="text-sm">Relationships, unitary method, word problems, distribution</p>
            </div>
            <div className="bg-white/10 p-3 rounded">
              <p className="font-semibold">✓ Rate and Speed</p>
              <p className="text-sm">Formulas, distance-time graphs, average speed</p>
            </div>
            <div className="bg-white/10 p-3 rounded">
              <p className="font-semibold">✓ Advanced Applications</p>
              <p className="text-sm">Unit conversions, comparisons, complex problems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
