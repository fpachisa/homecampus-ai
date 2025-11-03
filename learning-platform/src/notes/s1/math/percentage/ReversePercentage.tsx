import { useState } from 'react';
import MathText from '../../../../components/MathText';

const ReversePercentage = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 dark:from-violet-600 dark:to-purple-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Reverse Percentage Problems</h1>
        <p className="mt-2 text-violet-100">Working backwards to find original values</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg space-y-8">

        {/* Section 1: Finding Original from Percentage */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. Finding Original Value from Percentage
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>reverse percentage problem</strong> gives you a percentage portion and asks you to find the original whole.
              For example: "35% of what number is 140?"
            </p>

            <div className="bg-violet-50 dark:bg-violet-900/20 border-l-4 border-violet-500 p-4 rounded mb-4">
              <p className="font-semibold text-violet-800 dark:text-violet-300 mb-2">Problem Structure:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Given: P% of some unknown value = y
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Find: The unknown value (original whole)
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
                <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Method 1 (Algebraic):</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  If <MathText>{'$P\\% \\text{ of } x = y$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                  Then <MathText>{'$x = y \\div (P/100)$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                  Or: <MathText>{'$x = y \\times (100/P)$'}</MathText>
                </p>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded">
                <p className="font-semibold text-pink-800 dark:text-pink-300 mb-2">Method 2 (Visual):</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Step 1: Find <MathText>{'$1\\% = y \\div P$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                  Step 2: Find <MathText>{'$100\\% = (y \\div P) \\times 100$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Basic Reverse Percentage
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              35% of what number is 140?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Method 1 (Algebraic):</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                Let the unknown number be x
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <MathText>{'$35\\% \\text{ of } x = 140$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <MathText>{'$x = 140 \\div (35/100) = 140 \\div 0.35 = 400$'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-4 mb-2"><strong>Method 2 (Visual/Proportional):</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                If 35% = 140, then:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <MathText>{'$1\\% = 140 \\div 35 = 4$'}</MathText>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <MathText>{'$100\\% = 4 \\times 100 = 400$'}</MathText>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Answer:</strong> The number is 400.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                Verify: 35% of 400 = 0.35 <MathText>{'$\\times'}</MathText> 400 = 140 ✓
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Library Books
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A library reports that 60% of its books are fiction, which amounts to 2,400 books.
              How many books does the library have in total?
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Method 1:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  Let total books = <MathText>$x$</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <MathText>{'$60\\% \\text{ of } x = 2,400$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <MathText>{'$x = 2,400 \\div 0.60 = 4,000$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-4 mb-2"><strong>Method 2:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  <MathText>{'$60\\% = 2,400$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  <MathText>{'$1\\% = 2,400 \\div 60 = 40$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  <MathText>{'$100\\% = 40 \\times 100 = 4,000$'}</MathText>
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Answer:</strong> The library has 4,000 books in total.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Reverse After Percentage Change */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Finding Original Value After Percentage Change
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sometimes we know a value <strong>after</strong> a percentage increase or decrease, and need to find
              the original value. This requires working backwards through the percentage change.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
                <p className="font-semibold text-green-800 dark:text-green-300 mb-2">After INCREASE:</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  <MathText>{'$\\text{New} = \\text{Original} \\times (100\\% + \\text{increase})$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">
                  Reverse:
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <MathText>{'$\\text{Original} = \\text{New} \\div (100\\% + \\text{increase})$'}</MathText>
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                <p className="font-semibold text-red-800 dark:text-red-300 mb-2">After DECREASE:</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  <MathText>{'$\\text{New} = \\text{Original} \\times (100\\% - \\text{decrease})$'}</MathText>
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">
                  Reverse:
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <MathText>{'$\\text{Original} = \\text{New} \\div (100\\% - \\text{decrease})$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Reverse Discount Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              After a 30% discount, a necklace costs $2,380. What was the original price before the discount?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Understand the relationship
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                After 30% discount, the customer pays 70% of the original price.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                So: 70% of Original = $2,380
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2">
                <strong>Step 2:</strong> Calculate original price
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Original = $2,380 <MathText>{'$\\div$'}</MathText> 0.70 = $3,400
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Answer:</strong> The original price was $3,400.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                Verify: $3,400 <MathText>{'$\\times$'}</MathText> 0.70 = $2,380 ✓
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                Discount amount: $3,400 - $2,380 = $1,020 (which is 30% of $3,400)
              </p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Salary Before Increase
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              After an 8% salary increase, David now earns $3,888 per month. What was his salary before the increase?
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Step 1:</strong> Understand the relationship</p>
                <p className="text-gray-700 dark:text-gray-300">
                  After 8% increase, new salary = 108% of original
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  108% of Original = $3,888
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Step 2:</strong> Calculate original salary</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Original = $3,888 <MathText>{'$\\div$'}</MathText> 1.08 = $3,600
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Answer:</strong> David's original salary was $3,600 per month.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                  Verify: $3,600 <MathText>{'$\\times$'}</MathText> 1.08 = $3,888 ✓
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Sequential Reverse Percentage */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Sequential Reverse Percentage Problems
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When a value has undergone <strong>multiple percentage changes</strong> and we need to find the original,
              we must work backwards in <strong>reverse order</strong> - undoing the last change first.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Sequential Reverse Method:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Identify all percentage changes in order</li>
                <li>Work backwards: undo the last change first</li>
                <li>Continue undoing changes in reverse order</li>
                <li>Each step divides by the multiplier</li>
                <li>Verify by calculating forward through all changes</li>
              </ol>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-4">
              <p className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Key Insight:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Order matters! Just as putting on socks then shoes is different from shoes then socks,
                we must reverse operations in the opposite order they were applied.
              </p>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Multiple Price Changes
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A product's price increased by 20%, then decreased by 15%. After these changes, the price is $153.
              What was the original price?
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Changes applied:</strong>
              </p>
              <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 ml-4">
                <li>First: +20% (multiply by 1.20)</li>
                <li>Then: -15% (multiply by 0.85)</li>
              </ol>

              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2">
                <strong>Work backwards (reverse order):</strong>
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Step 1:</strong> Undo the -15% decrease (the last change)
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Value before 2nd change = $153 <MathText>{'$\\div$'}</MathText> 0.85 = $180
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2">
                <strong>Step 2:</strong> Undo the +20% increase (the first change)
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Original value = $180 <MathText>{'$\\div$'}</MathText> 1.20 = $150
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Answer:</strong> The original price was $150.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2 text-sm italic">
                <strong>Verify by calculating forward:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm ml-4">
                <li>Start: $150</li>
                <li>After +20%: $150 <MathText>{'$\\times$'}</MathText> 1.20 = $180</li>
                <li>After -15%: $180 <MathText>{'$\\times$'}</MathText> 0.85 = $153 ✓</li>
              </ul>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Multi-Step Investment
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              An investment grew by 15% in Year 1, then by 10% in Year 2. After these two years, its value is $1,265.
              What was the initial investment amount?
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Changes applied:</strong></p>
                <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 ml-4">
                  <li>Year 1: +15% (multiply by 1.15)</li>
                  <li>Year 2: +10% (multiply by 1.10)</li>
                </ol>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Step 1:</strong> Undo Year 2 growth (+10%)</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Value after Year 1 = $1,265 <MathText>{'$\\div$'}</MathText> 1.10 = $1,150
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-2"><strong>Step 2:</strong> Undo Year 1 growth (+15%)</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Original investment = $1,150 <MathText>{'$\\div$'}</MathText> 1.15 = $1,000
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Answer:</strong> The initial investment was $1,000.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm italic">
                  Verify: $1,000 <MathText>{'$\\times$'}</MathText> 1.15 <MathText>{'$\\times$'}</MathText> 1.10 = $1,265 ✓
                </p>
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
            <li>Reverse percentage: If <MathText>{'$P\\% \\text{ of } x = y$'}</MathText>, then <MathText>{'$x = y \\div (P/100)$'}</MathText></li>
            <li>After increase: <MathText>{'$\\text{Original} = \\text{New} \\div (100\\% + \\text{increase})$'}</MathText></li>
            <li>After decrease: <MathText>{'$\\text{Original} = \\text{New} \\div (100\\% - \\text{decrease})$'}</MathText></li>
            <li>Multiple changes: Work backwards in reverse order (undo last change first)</li>
            <li>Always verify answer by calculating forward through all changes</li>
            <li>Visual method: Find 1%, then find 100% by multiplying</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReversePercentage;
