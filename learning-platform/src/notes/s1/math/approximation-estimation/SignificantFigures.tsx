import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function SignificantFigures() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Significant Figures</h1>
        <p className="mt-2 text-emerald-100">
          Learn to identify and round using significant figures for precise measurements
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section A: Understanding Significant Figures */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            A. Understanding Significant Figures
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong className="text-emerald-600 dark:text-emerald-400">Significant figures</strong> (s.f.) are the important digits in a number that convey meaningful information about its precision. They tell us how accurately a number has been measured or calculated.
            </p>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-3">
                Why Do Significant Figures Matter?
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p><strong>Example:</strong> Three students measure the same thickness of glass:</p>
                <div className="ml-4 space-y-1">
                  <p>• Student A: 0.004 503 m (4 s.f.)</p>
                  <p>• Student B: 0.005 m (1 s.f.)</p>
                  <p>• Student C: 0.0045 m (2 s.f.)</p>
                </div>
                <p className="mt-3">
                  <strong>Student A's measurement is the most precise</strong> because it has the most significant figures. The number of s.f. tells us about the accuracy of the measuring instrument used.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Significant Figures vs. Decimal Places
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                These are NOT the same thing!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                  <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Decimal Places (d.p.)</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Counts digits <strong>after</strong> the decimal point</p>
                  <p className="text-sm mt-2">54.332 has <strong>3 d.p.</strong></p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded">
                  <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Significant Figures (s.f.)</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Counts <strong>important digits</strong> from the first non-zero digit</p>
                  <p className="text-sm mt-2">54.332 has <strong>5 s.f.</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section B: The Five Rules */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            B. The Five Rules for Identifying Significant Figures
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Follow these 5 rules to identify which digits are significant:
            </p>

            {/* Rule 1 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Rule 1: All Non-Zero Digits Are Significant
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Any digit from 1 to 9 is always significant.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><MathText>{'$\\text{54332}$'}</MathText> → All 5 digits are non-zero → <strong>5 s.f.</strong></p>
                  <p><MathText>{'$\\text{0.16}$'}</MathText> → Digits 1 and 6 are non-zero → <strong>2 s.f.</strong> (we'll handle the zero in Rule 4)</p>
                </div>
              </div>
            </div>

            {/* Rule 2 */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
                Rule 2: Zeros BETWEEN Non-Zero Digits Are Significant
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Any zeros sandwiched between non-zero digits count as significant.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border border-purple-200 dark:border-purple-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><span className="text-purple-600 dark:text-purple-400 font-mono">1<strong className="bg-purple-200 dark:bg-purple-800">00 00</strong>9</span> → Zeros are between 1 and 9 → <strong>6 s.f.</strong></p>
                  <p><span className="text-purple-600 dark:text-purple-400 font-mono">0.04<strong className="bg-purple-200 dark:bg-purple-800">0 0</strong>5</span> → Zeros are between 4 and 5 → These contribute to <strong>4 s.f.</strong> total</p>
                </div>
              </div>
            </div>

            {/* Rule 3 */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">
                Rule 3: Zeros at the End of Integers May or May Not Be Significant
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                This depends on how the number was approximated! Context matters.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border border-orange-200 dark:border-orange-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div>
                    <p><strong>Example: 500</strong></p>
                    <p className="ml-4">• If 495 was rounded to nearest 100 → only the <strong>5</strong> is significant → <strong>1 s.f.</strong></p>
                    <p className="ml-4">• If it's an exact count → all three digits significant → <strong>3 s.f.</strong></p>
                  </div>
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded text-sm">
                    <p><strong>Exam tip:</strong> The question will usually tell you the degree of approximation to make this clear.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 4 */}
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3">
                Rule 4: Zeros BEFORE the First Non-Zero Digit in Decimals Are NOT Significant
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Leading zeros in decimals are just placeholders - they don't count!
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border border-red-200 dark:border-red-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><span className="text-red-600 dark:text-red-400 font-mono"><strong className="line-through">0.</strong><strong className="line-through">000</strong>8</span> → Only <strong>8</strong> is significant → <strong>1 s.f.</strong></p>
                  <p><span className="text-red-600 dark:text-red-400 font-mono"><strong className="line-through">0.</strong><strong className="line-through">0</strong>11</span> → First zero doesn't count, 1 and 1 do → <strong>2 s.f.</strong></p>
                </div>
              </div>
            </div>

            {/* Rule 5 */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3">
                Rule 5: Zeros AFTER a Non-Zero Digit in Decimals ARE Significant
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Trailing zeros after the decimal point show precision - they count!
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border border-green-200 dark:border-green-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><span className="text-green-600 dark:text-green-400 font-mono">1.6<strong className="bg-green-200 dark:bg-green-800">0</strong></span> → The zero shows precision → <strong>3 s.f.</strong></p>
                  <p><span className="text-green-600 dark:text-green-400 font-mono">0.07<strong className="bg-green-200 dark:bg-green-800">000</strong></span> → Three trailing zeros are significant → <strong>4 s.f.</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Applying the Five Rules
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              How many significant figures in each number: (a) 54 332, (b) 0.16, (c) 100 009, (d) 0.040 05?
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-3">
                  <p><strong>(a) 54 332</strong> → Rule 1: All non-zero digits → <strong>5 s.f.</strong></p>

                  <p><strong>(b) 0.16</strong> → Rule 4: Leading zero NOT significant; Rule 1: 1 and 6 are significant → <strong>2 s.f.</strong></p>

                  <p><strong>(c) 100 009</strong> → Rule 1: 1 and 9 significant; Rule 2: Zeros between 1 and 9 are significant → <strong>6 s.f.</strong></p>

                  <p><strong>(d) 0.040 05</strong> → Rule 4: First two zeros NOT significant; Rule 2: Middle two zeros ARE significant (between 4 and 5); All non-zero → <strong>4 s.f.</strong></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section C: Rounding to Significant Figures */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            C. Rounding to Specified Significant Figures
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Rounding to significant figures is similar to rounding to decimal places, but you count from the first non-zero digit.
            </p>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-3">
                Steps for Rounding to n Significant Figures
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>1.</strong> Count to the nth significant figure from the LEFT (starting from first non-zero digit)</p>
                <p><strong>2.</strong> Look at the NEXT digit (the n+1 position)</p>
                <p><strong>3.</strong> If next digit is 5 or more → round UP; if less than 5 → round DOWN</p>
                <p><strong>4.</strong> Replace remaining digits with zeros as placeholders (if needed for whole numbers)</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: Rounding Whole Numbers to 2 s.f.
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Round 60 220 to 2 significant figures.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Step 1: Identify first two significant figures: <span className="font-mono text-emerald-600 dark:text-emerald-400">6, 0</span></p>
                <p>Step 2: Look at next digit (3rd position): <strong>2</strong></p>
                <p>Step 3: Since 2 {'<'} 5, round DOWN (keep 2nd s.f. as 0)</p>
                <p>Step 4: Replace remaining digits with zeros: <MathText>{'$60\\,220 \\approx 60\\,000$'}</MathText></p>
                <p className="mt-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
                  <strong>Answer:</strong> <MathText>{'$60\\,000$'}</MathText> (correct to 2 s.f.)
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 2: Rounding Decimals to 3 s.f.
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Round 0.008 101 to 3 significant figures.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Step 1: First non-zero digit is 8. Count 3 s.f.: <span className="font-mono text-emerald-600 dark:text-emerald-400">8, 1, 0</span></p>
                <p>Step 2: Look at next digit (4th s.f.): <strong>1</strong></p>
                <p>Step 3: Since 1 {'<'} 5, round DOWN (keep 3rd s.f. as 0)</p>
                <p>Step 4: Remove remaining digits: <MathText>{'$0.008101 \\approx 0.00810$'}</MathText></p>
                <p className="mt-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
                  <strong>Answer:</strong> <MathText>{'$0.00810$'}</MathText> (correct to 3 s.f.)
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 3: Rounding with Carrying
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Round 89.950 to 3 significant figures.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Step 1: First three s.f.: <span className="font-mono text-emerald-600 dark:text-emerald-400">8, 9, 9</span></p>
                <p>Step 2: Look at next digit: <strong>5</strong></p>
                <p>Step 3: Since 5 ≥ 5, round UP the 3rd s.f. from 9 to 10</p>
                <p>This causes carrying: 89.9 + 0.1 = 90.0</p>
                <p className="mt-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
                  <strong>Answer:</strong> <MathText>{'$90.0$'}</MathText> (correct to 3 s.f.)
                </p>
                <p className="text-sm italic text-emerald-600 dark:text-emerald-400 mt-2">
                  Note: The trailing zero in 90.0 is significant (Rule 5)! Don't write just "90" - that would only be 2 s.f.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Rounding to Significant Figures
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Round to 3 significant figures: (a) 70 049, (b) 0.070 185, (c) 0.0100
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-3">
                  <p><strong>(a) 70 049 to 3 s.f.:</strong></p>
                  <p className="ml-4">First 3 s.f.: 7, 0, 0; Next digit: 4</p>
                  <p className="ml-4">4 {'<'} 5 → round down → <MathText>{'$70\\,000$'}</MathText></p>

                  <p className="mt-3"><strong>(b) 0.070 185 to 3 s.f.:</strong></p>
                  <p className="ml-4">First 3 s.f.: 7, 0, 1; Next digit: 8</p>
                  <p className="ml-4">8 ≥ 5 → round up 1 to 2 → <MathText>{'$0.0702$'}</MathText></p>

                  <p className="mt-3"><strong>(c) 0.0100 to 3 s.f.:</strong></p>
                  <p className="ml-4">First 3 s.f.: 1, 0, 0; No next digit (already 3 s.f.)</p>
                  <p className="ml-4">Answer: <MathText>{'$0.0100$'}</MathText> (already at 3 s.f.!)</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Challenge - Rounding to 2 s.f.
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Round 0.999 99 to 2 significant figures. Be careful with carrying!
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
                  <p>First 2 s.f.: 9, 9; Next digit: 9</p>
                  <p>Since 9 ≥ 5, round UP the 2nd s.f.</p>
                  <p>0.99 + 0.01 = 1.00 (but we need to maintain 2 s.f.!)</p>
                  <p className="mt-3 p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded">
                    <strong>Answer:</strong> <MathText>{'$1.0$'}</MathText> (correct to 2 s.f.)
                  </p>
                  <p className="text-sm italic mt-2">The trailing zero is essential to show we have 2 s.f., not just 1!</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section D: Follow-through Errors */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            D. Follow-through Errors and Calculations
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When we round too early in a calculation, errors can accumulate and give us an inaccurate final answer. This is called a <strong>follow-through error</strong>.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3">
                The Problem with Early Rounding
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p><strong>Example:</strong> Calculate <MathText>{'$\\frac{1}{3} + \\frac{1}{3} + \\frac{1}{3}$'}</MathText></p>

                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="font-semibold text-red-600 dark:text-red-400">Method A: Round Early (WRONG)</p>
                  <p className="ml-4"><MathText>{'$\\frac{1}{3} \\approx 0.3$'}</MathText> (to 1 s.f.)</p>
                  <p className="ml-4"><MathText>{'$0.3 + 0.3 + 0.3 = 0.9$'}</MathText></p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-3 rounded">
                  <p className="font-semibold text-green-600 dark:text-green-400">Method B: Keep Precision (CORRECT)</p>
                  <p className="ml-4"><MathText>{'$\\frac{1}{3} = 0.333...$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$0.333... + 0.333... + 0.333... = 1.0$'}</MathText> (round at end)</p>
                </div>

                <p className="mt-3 font-semibold">The early rounding caused an error of 0.1 - that's 10% wrong!</p>
              </div>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-3">
                The (n+1) Rule
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p className="font-semibold">If your final answer needs n significant figures, keep at least (n+1) significant figures during intermediate calculations.</p>
                <p className="mt-3"><strong>Example:</strong> If final answer needs 3 s.f., keep 4 s.f. during calculation.</p>
                <p className="mt-2">Even better: Use full calculator precision and only round the very last answer!</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 4: Applying the (n+1) Rule
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The perimeter of a square tile is <MathText>{'$P = 4s$'}</MathText> where <MathText>{'$s = \\sqrt{2} \\approx 1.414$'}</MathText> m. Find P to 3 s.f.
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution using (n+1) rule:</strong></p>
                <p>Final answer needs 3 s.f., so keep 4 s.f. during calculation</p>
                <p><MathText>{'$s = 1.414$'}</MathText> m (4 s.f.)</p>
                <p><MathText>{'$P = 4 \\times 1.414 = 5.656$'}</MathText> m</p>
                <p>Now round to 3 s.f.: <MathText>{'$P \\approx 5.66$'}</MathText> m</p>
                <p className="mt-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
                  <strong>Answer:</strong> <MathText>{'$5.66$'}</MathText> m (correct to 3 s.f.)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Understanding Follow-through Errors
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Calculate <MathText>{'$\\sqrt{83} \\div \\sqrt[3]{130}$'}</MathText>. Compare: (a) rounding intermediate values to 1 s.f., (b) using calculator precision then rounding final answer to 2 s.f.
            </p>
            <button
              onClick={() => setShowSolution4(!showSolution4)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution4 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution4 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-3">
                  <p><strong>(a) Rounding early to 1 s.f.:</strong></p>
                  <p className="ml-4"><MathText>{'$\\sqrt{83} \\approx 9$'}</MathText> (to 1 s.f.)</p>
                  <p className="ml-4"><MathText>{'$\\sqrt[3]{130} \\approx 5$'}</MathText> (to 1 s.f.)</p>
                  <p className="ml-4"><MathText>{'$9 \\div 5 = 1.8$'}</MathText></p>

                  <p className="mt-3"><strong>(b) Using calculator precision:</strong></p>
                  <p className="ml-4"><MathText>{'$\\sqrt{83} = 9.110433...$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$\\sqrt[3]{130} = 5.065797...$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$9.110433... \\div 5.065797... = 1.798420...$'}</MathText></p>
                  <p className="ml-4">Round to 2 s.f.: <MathText>{'$1.8$'}</MathText></p>

                  <p className="mt-3 p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded">
                    Both methods give 1.8 for this example, but Method B is safer! With different numbers, early rounding can cause significant errors.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 5: Real Calculation Scenario
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Calculate <MathText>{'$3\\frac{4}{7} \\times \\left(-2\\frac{1}{15}\\right)$'}</MathText>. Give answer to 4 decimal places AND to 3 significant figures.
            </p>
            <button
              onClick={() => setShowSolution5(!showSolution5)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution5 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution5 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Solution:</strong></p>
                  <p><MathText>{'$3\\frac{4}{7} = \\frac{25}{7}$'}</MathText>, <MathText>{'$-2\\frac{1}{15} = -\\frac{31}{15}$'}</MathText></p>
                  <p><MathText>{'$\\frac{25}{7} \\times \\left(-\\frac{31}{15}\\right) = -\\frac{775}{105} = -\\frac{155}{21}$'}</MathText></p>
                  <p><MathText>{'$= -7.380952...$'}</MathText></p>

                  <p className="mt-3"><strong>To 4 d.p.:</strong> <MathText>{'$-7.3810$'}</MathText></p>
                  <p><strong>To 3 s.f.:</strong> <MathText>{'$-7.38$'}</MathText></p>

                  <p className="text-sm italic text-emerald-600 dark:text-emerald-400 mt-3">
                    Notice how 4 d.p. and 3 s.f. give different answers! Always check what the question is asking for.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-emerald-50 dark:bg-emerald-900/30 border-l-4 border-emerald-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Rule 1:</strong> All non-zero digits are significant</li>
            <li><strong>Rule 2:</strong> Zeros between non-zero digits are significant</li>
            <li><strong>Rule 3:</strong> Zeros at end of integers may or may not be significant (context-dependent)</li>
            <li><strong>Rule 4:</strong> Leading zeros in decimals are NOT significant</li>
            <li><strong>Rule 5:</strong> Trailing zeros in decimals ARE significant</li>
            <li>To round to n s.f.: count from first non-zero digit, look at (n+1) digit, apply rounding rule</li>
            <li>Significant figures communicate precision - more s.f. = more precise measurement</li>
            <li>The (n+1) rule: keep one extra s.f. during calculations to avoid follow-through errors</li>
            <li>Always round only at the final answer, not during intermediate steps</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
