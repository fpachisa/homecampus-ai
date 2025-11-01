import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function OperationsRealNumbers() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);
  const [showSolution5, setShowSolution5] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Operations on Real Numbers</h1>
        <p className="mt-2 text-orange-100">
          Mastering fraction and decimal operations with confidence
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Section 1: Fraction Operations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            A. Operations with Fractions
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Review the four basic operations with fractions:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Addition/Subtraction */}
              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded">
                <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">
                  1. Addition & Subtraction
                </h3>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p><strong>Rule:</strong> Find common denominator</p>
                  <p><MathText>{'$\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$'}</MathText></p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    Example: <MathText>{'$\\frac{1}{4} + \\frac{1}{6} = \\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$'}</MathText>
                  </p>
                </div>
              </div>

              {/* Multiplication */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                  2. Multiplication
                </h3>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p><strong>Rule:</strong> Multiply across</p>
                  <p><MathText>{'$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$'}</MathText></p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    Example: <MathText>{'$\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$'}</MathText>
                  </p>
                </div>
              </div>

              {/* Division */}
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded md:col-span-2">
                <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3">
                  3. Division (Multiply by Reciprocal)
                </h3>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p><strong>Rule:</strong> Flip the second fraction and multiply</p>
                  <p><MathText>{'$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$'}</MathText></p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    Example: <MathText>{'$\\frac{3}{4} \\div \\frac{2}{5} = \\frac{3}{4} \\times \\frac{5}{2} = \\frac{15}{8}$'}</MathText>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 1: Adding Fractions with Unlike Denominators
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculate: <MathText>{'$\\frac{2}{3} + \\frac{5}{6}$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Step 1: Find LCD of 3 and 6 → LCD = 6</p>
                <p>Step 2: Convert <MathText>{'$\\frac{2}{3}$'}</MathText> to denominator 6: <MathText>{'$\\frac{2 \\times 2}{3 \\times 2} = \\frac{4}{6}$'}</MathText></p>
                <p>Step 3: Add: <MathText>{'$\\frac{4}{6} + \\frac{5}{6} = \\frac{9}{6}$'}</MathText></p>
                <p>Step 4: Simplify: <MathText>{'$\\frac{9}{6} = \\frac{3}{2} = 1\\frac{1}{2}$'}</MathText></p>
                <p><strong>Answer: <MathText>{'$1\\frac{1}{2}$'}</MathText></strong></p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 2: Dividing Fractions
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculate: <MathText>{'$\\frac{5}{6} \\div \\frac{2}{3}$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Step 1: Flip the second fraction (reciprocal): <MathText>{'$\\frac{2}{3}$'}</MathText> becomes <MathText>{'$\\frac{3}{2}$'}</MathText></p>
                <p>Step 2: Multiply: <MathText>{'$\\frac{5}{6} \\times \\frac{3}{2}$'}</MathText></p>
                <p>Step 3: Multiply numerators and denominators: <MathText>{'$\\frac{5 \\times 3}{6 \\times 2} = \\frac{15}{12}$'}</MathText></p>
                <p>Step 4: Simplify by dividing both by 3: <MathText>{'$\\frac{15}{12} = \\frac{5}{4} = 1\\frac{1}{4}$'}</MathText></p>
                <p><strong>Answer: <MathText>{'$1\\frac{1}{4}$'}</MathText></strong></p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Fraction Operations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Calculate: <MathText>{'$\\frac{3}{8} \\times \\frac{4}{9}$'}</MathText>
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
                  <p>Multiply numerators and denominators:</p>
                  <p><MathText>{'$\\frac{3 \\times 4}{8 \\times 9} = \\frac{12}{72}$'}</MathText></p>
                  <p>Simplify by dividing both by 12:</p>
                  <p><MathText>{'$\\frac{12}{72} = \\frac{1}{6}$'}</MathText></p>
                  <p><strong>Answer: <MathText>{'$\\frac{1}{6}$'}</MathText></strong></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Decimal Operations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            B. Operations with Decimals
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When working with decimals, proper alignment and place value understanding are crucial:
            </p>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded mb-6">
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-4">
                Decimal Operation Rules
              </h3>

              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-orange-200 dark:border-orange-700">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Addition & Subtraction</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Line up decimal points vertically</p>
                  <div className="mt-2 font-mono text-sm bg-gray-50 dark:bg-gray-900 p-2 rounded">
                    <div className="text-gray-700 dark:text-gray-300">
                      <p className="text-right">12.35</p>
                      <p className="text-right">+ 3.7</p>
                      <p className="text-right border-t border-gray-400 dark:border-gray-600">16.05</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-orange-200 dark:border-orange-700">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Multiplication</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Multiply as whole numbers, then count total decimal places</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Example: <MathText>1.2 × 0.3</MathText> → 2 decimal places total → 0.36</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded border border-orange-200 dark:border-orange-700">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Division</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Move decimal point in divisor to make it whole, move same in dividend</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Example: <MathText>4.5 ÷ 0.5</MathText> → <MathText>45 ÷ 5 = 9</MathText></p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 3: Adding Decimals
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculate: <MathText>15.8 + 3.45</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Step 1: Line up decimal points</p>
                <div className="font-mono text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded my-2">
                  <div className="text-right">
                    <p>15.80</p>
                    <p>+ 3.45</p>
                    <p className="border-t border-gray-400 dark:border-gray-600">19.25</p>
                  </div>
                </div>
                <p><strong>Answer: 19.25</strong></p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 4: Multiplying Decimals
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculate: <MathText>2.5 × 1.2</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution:</strong></p>
                <p>Step 1: Multiply as whole numbers: <MathText>25 × 12 = 300</MathText></p>
                <p>Step 2: Count decimal places: 2.5 (1 place) + 1.2 (1 place) = 2 places total</p>
                <p>Step 3: Place decimal: 300 → 3.00</p>
                <p><strong>Answer: 3.0 (or 3)</strong></p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Decimal Operations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Calculate: <MathText>8.4 ÷ 0.2</MathText>
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
                  <p>Move decimal in divisor (0.2) one place right to make it 2</p>
                  <p>Move decimal in dividend (8.4) one place right to get 84</p>
                  <p>Now divide: <MathText>84 ÷ 2 = 42</MathText></p>
                  <p><strong>Answer: 42</strong></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Converting Between Forms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            C. Converting Between Fractions and Decimals
          </h2>

          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Fraction to Decimal */}
              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded">
                <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">
                  Fraction → Decimal
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Method:</strong> Divide numerator by denominator
                </p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm">
                  <p className="text-gray-700 dark:text-gray-300 mb-1">Example: <MathText>{'$\\frac{3}{4}$'}</MathText></p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">Divide: <MathText>3 ÷ 4 = 0.75</MathText></p>
                </div>
              </div>

              {/* Decimal to Fraction */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                  Decimal → Fraction
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Method:</strong> Use place value, then simplify
                </p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm">
                  <p className="text-gray-700 dark:text-gray-300 mb-1">Example: 0.6</p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs"><MathText>{'$\\frac{6}{10} = \\frac{3}{5}$'}</MathText> (simplified)</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Example 5: Mixed Operations (Fractions & Decimals)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Calculate: <MathText>{'$\\frac{1}{2} + 0.25$'}</MathText>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Solution Method 1 (Convert to decimals):</strong></p>
                <p>Convert fraction: <MathText>{'$\\frac{1}{2} = 0.5$'}</MathText></p>
                <p>Add: <MathText>0.5 + 0.25 = 0.75</MathText></p>

                <p className="mt-3"><strong>Solution Method 2 (Convert to fractions):</strong></p>
                <p>Convert decimal: <MathText>{'$0.25 = \\frac{25}{100} = \\frac{1}{4}$'}</MathText></p>
                <p>Add: <MathText>{'$\\frac{1}{2} + \\frac{1}{4} = \\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$'}</MathText></p>

                <p className="mt-3"><strong>Answer: 0.75 or <MathText>{'$\\frac{3}{4}$'}</MathText></strong></p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-gray-100">Conversion Tips:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mt-2 text-sm">
                <li>Common fractions to memorize: <MathText>{'$\\frac{1}{2} = 0.5$'}</MathText>, <MathText>{'$\\frac{1}{4} = 0.25$'}</MathText>, <MathText>{'$\\frac{3}{4} = 0.75$'}</MathText></li>
                <li>For recurring decimals: Use algebra or standard conversion methods</li>
                <li>When adding/subtracting mixed forms, convert to one type first</li>
                <li>Choose the form that makes the calculation easier</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Conversion
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Convert <MathText>{'$\\frac{7}{8}$'}</MathText> to a decimal
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
                  <p>Divide numerator by denominator: <MathText>7 ÷ 8</MathText></p>
                  <p><MathText>7 ÷ 8 = 0.875</MathText></p>
                  <p><strong>Answer: 0.875</strong></p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-4">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 4: Mixed Calculation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Calculate: <MathText>{'$0.5 \\times \\frac{2}{5}$'}</MathText>
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
                  <p>Convert 0.5 to fraction: <MathText>{'$0.5 = \\frac{1}{2}$'}</MathText></p>
                  <p>Multiply: <MathText>{'$\\frac{1}{2} \\times \\frac{2}{5} = \\frac{2}{10} = \\frac{1}{5}$'}</MathText></p>
                  <p>Or as decimal: <MathText>{'$\\frac{1}{5} = 0.2$'}</MathText></p>
                  <p><strong>Answer: <MathText>{'$\\frac{1}{5}$'}</MathText> or 0.2</strong></p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 5: Real-World Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A recipe calls for <MathText>{'$\\frac{3}{4}$'}</MathText> cup of sugar. If you want to make 1.5 times the recipe, how much sugar do you need?
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
                  <p>Multiply: <MathText>{'$\\frac{3}{4} \\times 1.5$'}</MathText></p>
                  <p>Convert 1.5 to fraction: <MathText>{'$1.5 = \\frac{3}{2}$'}</MathText></p>
                  <p>Multiply: <MathText>{'$\\frac{3}{4} \\times \\frac{3}{2} = \\frac{9}{8}$'}</MathText></p>
                  <p>Convert to mixed number: <MathText>{'$\\frac{9}{8} = 1\\frac{1}{8}$'}</MathText></p>
                  <p>Or as decimal: <MathText>{'$1\\frac{1}{8} = 1.125$'}</MathText> cups</p>
                  <p><strong>Answer: <MathText>{'$1\\frac{1}{8}$'}</MathText> cups (or 1.125 cups)</strong></p>
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
            <li><strong>Fraction addition/subtraction:</strong> Find common denominator first</li>
            <li><strong>Fraction multiplication:</strong> Multiply numerators and denominators directly</li>
            <li><strong>Fraction division:</strong> Multiply by the reciprocal ("flip and multiply")</li>
            <li><strong>Decimal addition/subtraction:</strong> Line up decimal points vertically</li>
            <li><strong>Decimal multiplication:</strong> Count total decimal places in both numbers</li>
            <li><strong>Decimal division:</strong> Move decimal points to make divisor a whole number</li>
            <li><strong>Conversions:</strong> Fraction → Decimal (divide), Decimal → Fraction (use place value)</li>
            <li>When mixing fractions and decimals, convert to one form before calculating</li>
            <li>Always simplify your final answer to lowest terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
