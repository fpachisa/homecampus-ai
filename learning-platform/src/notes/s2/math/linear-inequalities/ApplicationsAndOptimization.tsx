import { useState } from 'react';
import { MathToolRenderer } from '../../../../components/practice/MathToolRenderer';

export default function ApplicationsAndOptimization() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Applications and Optimization</h1>
        <p className="mt-2 text-amber-100">Real-world problem solving with linear inequalities</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Introduction */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3 text-lg">
              Why Linear Inequalities Matter
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Linear inequalities aren't just abstract math - they're powerful tools for solving real problems! Businesses use them to maximize profits, engineers use them to optimize designs, and planners use them to allocate resources efficiently.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              In this section, you'll see how everything you've learned comes together to solve practical problems where you need to:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Work within <strong>multiple constraints</strong> (budgets, time, materials)</li>
              <li>Find the <strong>best solution</strong> (maximum profit, minimum cost)</li>
              <li>Make <strong>informed decisions</strong> based on mathematical models</li>
            </ul>
          </div>
        </section>

        {/* Section 1: Constraint Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Modeling Real-World Constraints
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many real-world problems involve multiple limitations or requirements. Each constraint can be expressed as an inequality!
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3">
                Common Types of Constraints
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Budget Constraints</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">"You can't spend more than you have"</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Time Constraints</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">"Work must be completed in limited time"</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Resource Constraints</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">"Limited raw materials or ingredients"</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Minimum Requirements</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">"Need at least X amount of something"</p>
                </div>
              </div>
            </div>

            {/* Example 1: Budget Problem */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: School Event Budget
              </h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-3">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Problem:</strong> Your class is organizing a party. You want to buy pizzas and drinks.
                </p>
                <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  <li>Each pizza costs $12</li>
                  <li>Each drink pack costs $8</li>
                  <li>Total budget: $120</li>
                  <li>You need at least 3 pizzas</li>
                  <li>You need at least 2 drink packs</li>
                </ul>

                <div className="mt-3">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 1: Define variables</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 text-sm">
                    Let x = number of pizzas<br />
                    Let y = number of drink packs
                  </p>
                </div>

                <div className="mt-3">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 2: Write constraints</p>
                  <div className="ml-4 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <p className="font-mono">12x + 8y ≤ 120</p>
                    <p className="text-xs ml-6">(total cost can't exceed budget)</p>
                    <p className="font-mono">x ≥ 3</p>
                    <p className="text-xs ml-6">(need at least 3 pizzas)</p>
                    <p className="font-mono">y ≥ 2</p>
                    <p className="text-xs ml-6">(need at least 2 drink packs)</p>
                    <p className="font-mono">x ≥ 0, y ≥ 0</p>
                    <p className="text-xs ml-6">(can't have negative quantities)</p>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 3: Interpret feasible region</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 text-sm">
                    Any point (x, y) in the shaded feasible region represents a valid combination of pizzas and drinks you can buy within all constraints.
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Visual: The feasible region shows all valid combinations</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Budget constraint: 12x + 8y ≤ 120</p>
                    <MathToolRenderer
                      toolName="linearInequalityGrapher"
                      parameters={{
                        coefficientX: 12,
                        coefficientY: 8,
                        constant: 120,
                        inequalityType: "<=",
                        xMin: 0,
                        xMax: 12,
                        yMin: 0,
                        yMax: 16,
                        color: "#3b82f6",
                        shadeOpacity: 0.25
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Minimum pizzas: x ≥ 3</p>
                    <MathToolRenderer
                      toolName="linearInequalityGrapher"
                      parameters={{
                        coefficientX: 1,
                        coefficientY: 0,
                        constant: 3,
                        inequalityType: ">=",
                        xMin: 0,
                        xMax: 12,
                        yMin: 0,
                        yMax: 16,
                        color: "#10b981",
                        shadeOpacity: 0.25
                      }}
                    />
                  </div>
                </div>
                <div className="mt-3 bg-green-50 dark:bg-green-900/20 p-3 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Feasible combinations include:</strong> (3, 10), (5, 7), (8, 3), etc. Each represents pizzas and drinks you can afford!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Introduction to Optimization */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Introduction to Linear Programming
          </h2>

          <div className="mb-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                What is Linear Programming?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Linear Programming</strong> is a method for finding the <strong>best outcome</strong> (maximum or minimum) in a system with multiple constraints. It's used in:
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                <li><strong>Business:</strong> Maximize profit or minimize cost</li>
                <li><strong>Manufacturing:</strong> Optimize production schedules</li>
                <li><strong>Logistics:</strong> Plan efficient delivery routes</li>
                <li><strong>Nutrition:</strong> Design meal plans meeting dietary requirements</li>
                <li><strong>Resource allocation:</strong> Distribute limited resources optimally</li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">
                The Optimization Process
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Define variables:</strong> What are you trying to determine?</li>
                <li><strong>Write constraints:</strong> What are the limitations? (inequalities)</li>
                <li><strong>Define objective function:</strong> What do you want to maximize or minimize? (equation)</li>
                <li><strong>Graph the feasible region:</strong> Find where all constraints are satisfied</li>
                <li><strong>Test vertices:</strong> The optimal solution occurs at a corner point!</li>
              </ol>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                🔑 Key Theorem: Corner Point Principle
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                For linear programming problems with bounded feasible regions, the optimal value (maximum or minimum) always occurs at one of the <strong>vertices (corner points)</strong> of the feasible region.<br /><br />
                <strong>What this means:</strong> You only need to test the corner points - you don't need to check every point in the region!
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Solving Optimization Problems */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Solving Optimization Problems
          </h2>

          {/* Example 2: Manufacturing Problem */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Furniture Manufacturing
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700 space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Problem:</strong> A furniture company makes chairs and tables.
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Each chair requires 2 hours of labor</li>
                <li>Each table requires 4 hours of labor</li>
                <li>Available: 40 hours of labor per week</li>
                <li>Storage space: Can produce at most 15 items total</li>
                <li>Profit: $30 per chair, $50 per table</li>
                <li><strong>Goal: Maximize weekly profit</strong></li>
              </ul>

              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 1: Variables</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 text-sm">
                    x = number of chairs<br />
                    y = number of tables
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 2: Constraints</p>
                  <div className="ml-4 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <p className="font-mono">2x + 4y ≤ 40</p>
                    <p className="text-xs ml-6">(labor constraint)</p>
                    <p className="font-mono">x + y ≤ 15</p>
                    <p className="text-xs ml-6">(storage constraint)</p>
                    <p className="font-mono">x ≥ 0, y ≥ 0</p>
                    <p className="text-xs ml-6">(non-negative quantities)</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 3: Objective Function</p>
                  <p className="text-gray-700 dark:text-gray-300 ml-4 text-sm">
                    <strong className="font-mono">Profit = 30x + 50y</strong> (we want to MAXIMIZE this!)
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 4: Find vertices of feasible region</p>
                  <div className="ml-4 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <p><strong>Vertex 1:</strong> (0, 0) - Make nothing</p>
                    <p><strong>Vertex 2:</strong> (20, 0) - Only chairs: 2(20) + 4(0) = 40 ✓</p>
                    <p><strong>Vertex 3:</strong> (0, 10) - Only tables: 2(0) + 4(10) = 40 ✓</p>
                    <p><strong>Vertex 4:</strong> (10, 5) - Both: From intersection of 2x + 4y = 40 and x + y = 15</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Step 5: Test each vertex in profit function</p>
                  <div className="ml-4 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <p>(0, 0): Profit = 30(0) + 50(0) = <strong>$0</strong></p>
                    <p>(20, 0): Profit = 30(20) + 50(0) = <strong>$600</strong></p>
                    <p>(0, 10): Profit = 30(0) + 50(10) = <strong>$500</strong></p>
                    <p className="text-green-600 dark:text-green-400 font-bold">(10, 5): Profit = 30(10) + 50(5) = <strong>$550</strong></p>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded mt-3">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">Answer:</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Wait! The maximum profit is <strong>$600</strong>, achieved by making <strong>20 chairs and 0 tables</strong>.<br />
                    (Even though making both seems balanced, pure chair production is actually more profitable in this case!)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Visual: Feasible region (simplified view)</p>
              <MathToolRenderer
                toolName="linearInequalityGrapher"
                parameters={{
                  coefficientX: 2,
                  coefficientY: 4,
                  constant: 40,
                  inequalityType: "<=",
                  xMin: 0,
                  xMax: 25,
                  yMin: 0,
                  yMax: 15,
                  title: "Labor constraint: 2x + 4y ≤ 40"
                }}
              />
            </div>
          </div>
        </section>

        {/* Section 4: More Real-World Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            4. More Real-World Applications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Nutrition Example */}
            <div className="border border-gray-300 dark:border-gray-700 p-4 rounded bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🥗</span>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">Nutrition Planning</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Scenario:</strong> Plan meals meeting daily nutritional requirements
              </p>
              <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                <li>Minimum protein: x g/day</li>
                <li>Maximum calories: y cal/day</li>
                <li>Budget constraint: ≤ $z/day</li>
                <li><strong>Minimize cost</strong> while meeting nutrition needs</li>
              </ul>
            </div>

            {/* Investment Example */}
            <div className="border border-gray-300 dark:border-gray-700 p-4 rounded bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">📈</span>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">Investment Portfolio</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Scenario:</strong> Allocate funds between stocks and bonds
              </p>
              <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                <li>Total investment: ≤ $X</li>
                <li>Risk tolerance: Limit on stocks</li>
                <li>Diversification: Minimum bonds</li>
                <li><strong>Maximize returns</strong> within risk limits</li>
              </ul>
            </div>

            {/* Transportation Example */}
            <div className="border border-gray-300 dark:border-gray-700 p-4 rounded bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🚚</span>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">Shipping & Logistics</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Scenario:</strong> Ship products from warehouses to stores
              </p>
              <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                <li>Warehouse capacity limits</li>
                <li>Store demand requirements</li>
                <li>Truck capacity constraints</li>
                <li><strong>Minimize shipping cost</strong></li>
              </ul>
            </div>

            {/* Agriculture Example */}
            <div className="border border-gray-300 dark:border-gray-700 p-4 rounded bg-gradient-to-br from-yellow-50 to-lime-50 dark:from-yellow-900/20 dark:to-lime-900/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🌾</span>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">Farm Planning</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Scenario:</strong> Decide how much of each crop to plant
              </p>
              <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                <li>Limited land area</li>
                <li>Water supply constraints</li>
                <li>Labor availability</li>
                <li><strong>Maximize crop yield</strong> or profit</li>
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
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Writing Constraints
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A baker makes cookies (x) and brownies (y). Each batch of cookies takes 30 minutes and each batch of brownies takes 45 minutes. The baker has 6 hours (360 minutes) available. Write the constraint inequality.
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong className="font-mono">30x + 45y ≤ 360</strong><br /><br />
                  Or simplified by dividing by 15:<br />
                  <strong className="font-mono">2x + 3y ≤ 24</strong>
                </p>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Identifying Objective Function
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A company sells Product A for $15 profit each and Product B for $20 profit each. If x = units of A and y = units of B, what is the profit function to MAXIMIZE?
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Profit = 15x + 20y</strong><br /><br />
                  This is the objective function we want to maximize. Test this at each vertex of the feasible region to find maximum profit.
                </p>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Complete Optimization
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A farm sells eggs and milk. Constraints:<br />
              • Production: x + 2y ≤ 10 (resource limit)<br />
              • Storage: x ≤ 8, y ≤ 4<br />
              • Non-negative: x ≥ 0, y ≥ 0<br />
              • Profit: $3 per egg carton, $4 per milk jug<br />
              Find the maximum profit and where it occurs.
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 space-y-2">
                  <strong>Vertices:</strong> (0,0), (8,0), (8,1), (2,4), (0,4)<br /><br />
                  <strong>Test each in Profit = 3x + 4y:</strong><br />
                  • (0, 0): $0<br />
                  • (8, 0): $24<br />
                  • (8, 1): $28<br />
                  • (2, 4): $22<br />
                  • (0, 4): $16<br /><br />
                  <strong className="text-green-600 dark:text-green-400">Maximum profit: $28 at (8, 1)</strong><br />
                  Produce 8 egg cartons and 1 milk jug
                </p>
              </div>
            )}
          </div>

          {/* Practice 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Real-World Interpretation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A solution to a linear programming problem is (5, 10) with a maximum value of $350. Interpret: What does this solution mean in context if x = hours of online tutoring and y = hours of in-person tutoring, and the objective was to maximize weekly earnings?
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Interpretation:</strong><br /><br />
                  To maximize weekly earnings, you should work:<br />
                  • <strong>5 hours</strong> of online tutoring<br />
                  • <strong>10 hours</strong> of in-person tutoring<br /><br />
                  This schedule will earn you <strong>$350 per week</strong>, which is the maximum possible earnings given all your constraints (time availability, client demand, etc.).
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border-l-4 border-blue-500 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Real-world modeling:</strong> Translate constraints (budgets, time, resources) into inequalities</li>
            <li><strong>Objective function:</strong> The quantity you want to maximize or minimize (profit, cost, time, etc.)</li>
            <li><strong>Linear programming:</strong> Find optimal solutions by testing vertices of feasible region</li>
            <li><strong>Corner Point Principle:</strong> Optimal values occur at vertices - you don't need to test interior points!</li>
            <li><strong>Applications everywhere:</strong> Business, manufacturing, agriculture, logistics, nutrition, finance, and more</li>
            <li><strong>Why it matters:</strong> Linear inequalities help make better decisions with limited resources</li>
          </ul>
        </div>

        {/* Closing Inspiration */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg mt-6">
          <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">
            🎓 You've Mastered Linear Inequalities!
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            From understanding basic inequality symbols to solving complex optimization problems, you now have powerful tools to model and solve real-world challenges. These skills are the foundation for advanced topics like operations research, economics, and data science. Keep practicing, and you'll see inequalities everywhere - helping businesses make decisions, engineers design systems, and scientists optimize experiments. Math isn't just abstract - it's the key to solving real problems!
          </p>
        </div>
      </div>
    </div>
  );
}
