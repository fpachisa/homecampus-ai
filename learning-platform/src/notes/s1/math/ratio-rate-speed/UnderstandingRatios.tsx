import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function UnderstandingRatios() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Understanding Ratios</h1>
        <p className="mt-2 text-blue-100">
          Learn how to compare quantities using ratios in different forms
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section A: Ratio Notation and Basics */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            A. Ratio Notation and Basics
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong className="text-blue-600 dark:text-blue-400">ratio</strong> compares two or more quantities of the <strong>same kind</strong>. It shows the relative size of the quantities compared to each other.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Three Ways to Write a Ratio
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                If there are 16 girls and 20 boys in a class, the ratio of girls to boys can be written as:
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <p>1. Using a colon: <strong>16:20</strong> (read as "16 to 20")</p>
                <p>2. Using the word "to": <strong>16 to 20</strong></p>
                <p>3. As a fraction: <MathText>{'$\\frac{16}{20}$'}</MathText></p>
              </div>
              <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                <p className="text-center font-semibold text-gray-800 dark:text-gray-100">
                  ⚠️ Important: Order matters! The ratio 16:20 is different from 20:16
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: Writing Ratios from Word Problems
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                There are 16 girls and 20 boys in a class. Find the ratio of the number of boys to the number of girls.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Number of boys: 20</p>
                <p>Number of girls: 16</p>
                <p>The ratio of <strong>boys to girls</strong> is: <strong>20:16</strong></p>
                <p className="mt-3 text-sm italic">Notice: We wrote boys first because the question asked for boys to girls!</p>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                ❌ Common Mistake: Comparing Different Quantities
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A recipe uses 300 mL milk and 200 g sugar. Can we write the ratio of milk to sugar?
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Answer: No!</strong></p>
                <p>Milk is measured in volume (mL) and sugar is measured in mass (g).</p>
                <p>Ratios can only compare quantities of the <strong>same kind</strong>.</p>
                <p className="mt-3 text-sm">We could compare 300 mL milk to 500 mL water, or 200 g sugar to 300 g flour.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Writing Ratios
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              The masses of 2 bags of sugar, A and B, are 750 g and 1500 g respectively. Find the ratio of the mass of A to the mass of B.
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
                  <p>Mass of A: 750 g</p>
                  <p>Mass of B: 1500 g</p>
                  <p className="mt-3">Ratio of mass of A to mass of B = <strong>750:1500</strong></p>
                  <p className="text-sm italic">Both are masses (same kind of quantity) ✓</p>
                  <p className="text-sm italic">A is first because question asks for "A to B" ✓</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section B: Equivalent Ratios */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            B. Equivalent Ratios
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Just like fractions, ratios can be <strong className="text-indigo-600 dark:text-indigo-400">equivalent</strong>. We create equivalent ratios by multiplying or dividing both terms by the same number.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
                Rule for Equivalent Ratios
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                If <MathText>a</MathText> and <MathText>b</MathText> represent two similar quantities, then:
              </p>
              <div className="p-3 bg-white dark:bg-gray-800 rounded border border-indigo-300 dark:border-indigo-700">
                <p className="text-center font-semibold text-gray-800 dark:text-gray-100">
                  <MathText>{'$a:b = ma:mb = \\frac{a}{n}:\\frac{b}{n}$'}</MathText>
                </p>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                  where <MathText>m</MathText> and <MathText>n</MathText> are positive numbers
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>In other words:</strong> Multiply or divide both terms by the same number to get an equivalent ratio.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 2: Finding Equivalent Ratios
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Find three ratios equivalent to 2:3.
              </p>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Multiply both terms by 2: <MathText>{'$2 \\times 2 : 3 \\times 2 = 4:6$'}</MathText></p>
                <p>Multiply both terms by 3: <MathText>{'$2 \\times 3 : 3 \\times 3 = 6:9$'}</MathText></p>
                <p>Multiply both terms by 5: <MathText>{'$2 \\times 5 : 3 \\times 5 = 10:15$'}</MathText></p>
                <p className="mt-3 font-semibold">So 2:3 = 4:6 = 6:9 = 10:15 (all equivalent!)</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 3: Using Equivalent Ratios to Solve Problems
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The ratio of sugar to flour in a recipe is 2:5. If I use 10 g of sugar, how much flour do I need?
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Original ratio: Sugar : Flour = 2:5</p>
                <p>We have 10 g sugar. Since <MathText>{'$2 \\times 5 = 10$'}</MathText>, we multiply both terms by 5:</p>
                <p><MathText>{'$2 \\times 5 : 5 \\times 5 = 10:25$'}</MathText></p>
                <p className="mt-3 font-semibold">Answer: I need 25 g of flour.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Equivalent Ratios
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Are the ratios 3:4 and 9:12 equivalent? Show your working.
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
                  <p><strong>Method 1: Multiply to check</strong></p>
                  <p><MathText>{'$3 \\times 3 = 9$'}</MathText> and <MathText>{'$4 \\times 3 = 12$'}</MathText></p>
                  <p>So 3:4 = 9:12 ✓</p>
                  <p className="mt-4"><strong>Method 2: Use fractions</strong></p>
                  <p><MathText>{'$\\frac{3}{4} = \\frac{9}{12}$'}</MathText> (both equal 0.75)</p>
                  <p className="mt-4 font-semibold">Yes, they are equivalent!</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section C: Simplifying Ratios */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            C. Simplifying Ratios to Simplest Form
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A ratio is in <strong className="text-purple-600 dark:text-purple-400">simplest form</strong> when the terms are integers (whole numbers) with no common factor greater than 1.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                How to Simplify Ratios
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 dark:bg-purple-400 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">Check if units are the same</p>
                    <p className="text-sm">If not, convert to the same unit first!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 dark:bg-purple-400 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">Find the HCF (Highest Common Factor)</p>
                    <p className="text-sm">Find the largest number that divides both terms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 dark:bg-purple-400 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">Divide both terms by the HCF</p>
                    <p className="text-sm">This gives you the simplest form</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 4: Simplifying with the Same Units
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Simplify the ratio 20:12.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Step 1: Find the HCF of 20 and 12</p>
                <p className="ml-4">Factors of 20: 1, 2, 4, 5, 10, 20</p>
                <p className="ml-4">Factors of 12: 1, 2, 3, 4, 6, 12</p>
                <p className="ml-4">HCF = 4</p>
                <p className="mt-3">Step 2: Divide both terms by 4</p>
                <p className="ml-4"><MathText>{'$20 \\div 4 : 12 \\div 4 = 5:3$'}</MathText></p>
                <p className="mt-3 font-semibold">Answer: 5:3 (in simplest form)</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 5: Simplifying with Different Units
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The masses of 2 bags of sugar, A and B, are 750 g and 1.5 kg respectively. Find the ratio of the mass of B to the mass of A in simplest form.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Step 1: Convert to the same unit</p>
                <p className="ml-4">1.5 kg = 1.5 × 1000 = 1500 g</p>
                <p className="mt-3">Step 2: Write the ratio (B to A)</p>
                <p className="ml-4">1500 g : 750 g = 1500:750</p>
                <p className="mt-3">Step 3: Find HCF and simplify</p>
                <p className="ml-4">HCF(1500, 750) = 750</p>
                <p className="ml-4"><MathText>{'$1500 \\div 750 : 750 \\div 750 = 2:1$'}</MathText></p>
                <p className="mt-3 font-semibold">Answer: 2:1</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 6: Simplifying Decimal Ratios
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Simplify the ratio 0.280:0.182.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Step 1: Convert to integers by multiplying by 1000</p>
                <p className="ml-4">0.280 × 1000 = 280</p>
                <p className="ml-4">0.182 × 1000 = 182</p>
                <p className="ml-4">Ratio becomes 280:182</p>
                <p className="mt-3">Step 2: Find HCF and simplify</p>
                <p className="ml-4">HCF(280, 182) = 14</p>
                <p className="ml-4"><MathText>{'$280 \\div 14 : 182 \\div 14 = 20:13$'}</MathText></p>
                <p className="mt-3 font-semibold">Answer: 20:13</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Simplifying Ratios
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A blue whale grows up to 29.9 m and a great white shark grows up to 490 cm. Find the ratio of the length of the blue whale to the length of the white shark in simplest form.
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
                  <p>Step 1: Convert to same unit (cm)</p>
                  <p className="ml-4">Blue whale: 29.9 m = 29.9 × 100 = 2990 cm</p>
                  <p className="ml-4">Shark: 490 cm</p>
                  <p className="mt-3">Step 2: Write ratio (whale to shark)</p>
                  <p className="ml-4">2990:490</p>
                  <p className="mt-3">Step 3: Simplify</p>
                  <p className="ml-4">HCF(2990, 490) = 10</p>
                  <p className="ml-4"><MathText>{'$2990 \\div 10 : 490 \\div 10 = 299:49$'}</MathText></p>
                  <p className="mt-4 font-semibold">Answer: 299:49</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section D: Three-Term Ratios */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            D. Ratios of Three Quantities
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We can also use ratios to compare <strong className="text-emerald-600 dark:text-emerald-400">three quantities</strong>. The process is similar, but we divide all three terms by their HCF.
            </p>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-3">
                Three-Term Ratio Notation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                If <MathText>a</MathText>, <MathText>b</MathText>, and <MathText>c</MathText> represent three quantities, we write:
              </p>
              <div className="p-3 bg-white dark:bg-gray-800 rounded border border-emerald-300 dark:border-emerald-700">
                <p className="text-center font-semibold text-gray-800 dark:text-gray-100">
                  <MathText>{'$a:b:c$'}</MathText>
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>Important:</strong> A three-term ratio cannot be written as a single fraction. However, we can extract two-term ratios from it:
              </p>
              <div className="ml-4 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <p>From 18:24:16, we can find:</p>
                <p><MathText>{'$a:b = 18:24 = 3:4$'}</MathText></p>
                <p><MathText>{'$b:c = 24:16 = 3:2$'}</MathText></p>
                <p><MathText>{'$a:c = 18:16 = 9:8$'}</MathText></p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 7: Simplifying Three-Term Ratios
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Simplify the ratio 18:24:6.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Step 1: Find the HCF of all three numbers</p>
                <p className="ml-4">HCF(18, 24, 6) = 6</p>
                <p className="mt-3">Step 2: Divide all three terms by 6</p>
                <p className="ml-4"><MathText>{'$18 \\div 6 : 24 \\div 6 : 6 \\div 6$'}</MathText></p>
                <p className="ml-4">= 3:4:1</p>
                <p className="mt-3 font-semibold">Answer: 3:4:1</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 8: Extracting Two-Term Ratios
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                If <MathText>{'$a:b:c = 9:12:8$'}</MathText>, find: (a) <MathText>{'$a:b$'}</MathText>  (b) <MathText>{'$b:c$'}</MathText>  (c) <MathText>{'$a:c$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p><strong>(a)</strong> <MathText>{'$a:b = 9:12$'}</MathText></p>
                <p className="ml-4">Simplify by dividing by HCF(9, 12) = 3</p>
                <p className="ml-4"><MathText>{'$a:b = 3:4$'}</MathText></p>
                <p className="mt-3"><strong>(b)</strong> <MathText>{'$b:c = 12:8$'}</MathText></p>
                <p className="ml-4">Simplify by dividing by HCF(12, 8) = 4</p>
                <p className="ml-4"><MathText>{'$b:c = 3:2$'}</MathText></p>
                <p className="mt-3"><strong>(c)</strong> <MathText>{'$a:c = 9:8$'}</MathText> (already in simplest form)</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Three-Term Ratios
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Simplify the ratio 0.4:2:1.6
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p>Step 1: Convert to integers by multiplying all by 10</p>
                  <p className="ml-4">0.4 × 10 = 4</p>
                  <p className="ml-4">2 × 10 = 20</p>
                  <p className="ml-4">1.6 × 10 = 16</p>
                  <p className="ml-4">Ratio becomes 4:20:16</p>
                  <p className="mt-3">Step 2: Find HCF and simplify</p>
                  <p className="ml-4">HCF(4, 20, 16) = 4</p>
                  <p className="ml-4"><MathText>{'$4 \\div 4 : 20 \\div 4 : 16 \\div 4 = 1:5:4$'}</MathText></p>
                  <p className="mt-4 font-semibold">Answer: 1:5:4</p>
                </div>
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
            <li>Ratios compare quantities of the same kind and can be written as <MathText>a:b</MathText>, "a to b", or <MathText>{'$\\frac{a}{b}$'}</MathText></li>
            <li>Order matters in ratios: 2:3 is different from 3:2</li>
            <li>Equivalent ratios are created by multiplying or dividing both terms by the same number</li>
            <li>To simplify a ratio: (1) Convert to same units if needed, (2) Find HCF, (3) Divide both terms by HCF</li>
            <li>Simplest form means integers with no common factor greater than 1</li>
            <li>Three-term ratios <MathText>a:b:c</MathText> can be simplified by dividing all terms by their HCF</li>
            <li>From a three-term ratio, we can extract multiple two-term ratios</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
