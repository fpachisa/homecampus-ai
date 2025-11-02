import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function ChangingTheSubject() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 dark:from-violet-600 dark:to-purple-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Changing the Subject of a Formula</h1>
        <p className="mt-2 text-violet-100">Learn to rearrange formulas to make different variables the subject</p>
      </div>

      <div className="p-6">
        {/* Section 1: Simple Rearrangement */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Simple Rearrangement
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A <strong>formula</strong> is an equation that shows the relationship between two or more variables.
              <strong>Changing the subject</strong> means rearranging the formula to isolate a different variable.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>The Subject of a Formula:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                The subject is the variable that appears by itself on one side of the equation (usually the left side).
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                For example, in <MathText>{'$A = lw$'}</MathText>, <MathText>A</MathText> is the subject.
                We can rearrange to make <MathText>l</MathText> or <MathText>w</MathText> the subject instead.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Key Principle:</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Use the same techniques as solving equations - apply inverse operations to both sides
                to isolate the desired variable.
              </p>
            </div>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Make <MathText>l</MathText> the Subject
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Rearrange <MathText>{'$A = lw$'}</MathText> to make <MathText>l</MathText> the subject
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>Currently: <MathText>{'$A = lw$'}</MathText> (<MathText>A</MathText> is the subject)</p>
                <p className="ml-4">We want: <MathText>{'$l = \\text{...}$'}</MathText> (<MathText>l</MathText> as the subject)</p>
                <p className="mt-3">Currently <MathText>l</MathText> is multiplied by <MathText>w</MathText></p>
                <p>Inverse: Divide both sides by <MathText>w</MathText></p>
                <p className="mt-3"><MathText>{'$\\frac{A}{w} = \\frac{lw}{w}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$\\frac{A}{w} = l$'}</MathText></p>
                <p className="mt-3">Usually written with subject on left:</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$l = \\frac{A}{w}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Simple Addition Formula
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Rearrange <MathText>{'$P = a + b$'}</MathText> to make <MathText>b</MathText> the subject
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>We want to isolate <MathText>b</MathText></p>
                <p>Currently <MathText>b</MathText> has <MathText>a</MathText> added to it</p>
                <p>Inverse: Subtract <MathText>a</MathText> from both sides</p>
                <p className="mt-3"><MathText>{'$P - a = a + b - a$'}</MathText></p>
                <p><MathText>{'$P - a = b$'}</MathText></p>
                <p className="mt-3">Rewrite with subject on left:</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$b = P - a$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Make <MathText>r</MathText> the Subject
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Rearrange <MathText>{'$C = 2\\pi r$'}</MathText> to make <MathText>r</MathText> the subject
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><MathText>r</MathText> is multiplied by <MathText>{'$2\\pi$'}</MathText></p>
                  <p>Inverse: Divide both sides by <MathText>{'$2\\pi$'}</MathText></p>
                  <p className="mt-2"><MathText>{'$\\frac{C}{2\\pi} = \\frac{2\\pi r}{2\\pi}$'}</MathText></p>
                  <p className="mt-2"><MathText>{'$\\frac{C}{2\\pi} = r$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$r = \\frac{C}{2\\pi}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Rearranging with Multiple Operations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Rearranging with Multiple Operations
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When a formula has multiple operations (addition, subtraction, multiplication, division),
              you need to apply inverse operations in the correct order to isolate the desired variable.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Order of Operations (REVERSED):</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 ml-4">
                When rearranging, undo operations in reverse order of how you'd calculate them:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-8 mt-2">
                <li>Undo addition/subtraction first</li>
                <li>Then undo multiplication/division</li>
                <li>Then undo powers/roots</li>
              </ol>
            </div>
          </div>

          {/* Worked Example 3 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 3: Two Operations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Rearrange <MathText>{'$v = u + at$'}</MathText> to make <MathText>t</MathText> the subject
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Isolate the term containing <MathText>t</MathText></p>
                <p className="ml-4">Subtract <MathText>u</MathText> from both sides:</p>
                <p className="ml-4"><MathText>{'$v - u = u + at - u$'}</MathText></p>
                <p className="ml-4"><MathText>{'$v - u = at$'}</MathText></p>
                <p className="mt-3"><strong>Step 2:</strong> Isolate <MathText>t</MathText></p>
                <p className="ml-4">Divide both sides by <MathText>a</MathText>:</p>
                <p className="ml-4"><MathText>{'$\\frac{v - u}{a} = \\frac{at}{a}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$\\frac{v - u}{a} = t$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$t = \\frac{v - u}{a}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 4 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 4: Make <MathText>x</MathText> the Subject
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Rearrange <MathText>{'$y = mx + c$'}</MathText> to make <MathText>x</MathText> the subject
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Remove the constant term <MathText>c</MathText></p>
                <p className="ml-4">Subtract <MathText>c</MathText> from both sides:</p>
                <p className="ml-4"><MathText>{'$y - c = mx + c - c$'}</MathText></p>
                <p className="ml-4"><MathText>{'$y - c = mx$'}</MathText></p>
                <p className="mt-3"><strong>Step 2:</strong> Remove the coefficient <MathText>m</MathText></p>
                <p className="ml-4">Divide both sides by <MathText>m</MathText>:</p>
                <p className="ml-4"><MathText>{'$\\frac{y - c}{m} = \\frac{mx}{m}$'}</MathText></p>
                <p className="ml-4"><MathText>{'$\\frac{y - c}{m} = x$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$x = \\frac{y - c}{m}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Celsius to Fahrenheit
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              The formula to convert Fahrenheit to Celsius is <MathText>{'$C = \\frac{5}{9}(F - 32)$'}</MathText>.
              Rearrange to make <MathText>F</MathText> the subject.
            </p>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Remove the fraction <MathText>{'$\\frac{5}{9}$'}</MathText></p>
                  <p className="ml-4">Multiply both sides by <MathText>{'$\\frac{9}{5}$'}</MathText>:</p>
                  <p className="ml-4"><MathText>{'$\\frac{9}{5}C = \\frac{9}{5} \\times \\frac{5}{9}(F - 32)$'}</MathText></p>
                  <p className="ml-4"><MathText>{'$\\frac{9}{5}C = F - 32$'}</MathText></p>
                  <p className="mt-2"><strong>Step 2:</strong> Add 32 to both sides</p>
                  <p className="ml-4"><MathText>{'$\\frac{9}{5}C + 32 = F$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$F = \\frac{9}{5}C + 32$'}</MathText> or <MathText>{'$F = 1.8C + 32$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Complex Rearrangement */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Complex Rearrangement
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Some formulas involve brackets, fractions, or multiple instances of the variable.
              These require more careful manipulation but use the same principles.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Strategy for Complex Formulas:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Expand brackets if necessary</li>
                <li>Clear fractions by multiplying through</li>
                <li>Collect all terms with the desired variable on one side</li>
                <li>Factor out the variable if it appears multiple times</li>
                <li>Isolate the variable using inverse operations</li>
              </ul>
            </div>
          </div>

          {/* Worked Example 5 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 5: Formula with Brackets
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Rearrange <MathText>{'$A = \\frac{1}{2}(a + b)h$'}</MathText> to make <MathText>a</MathText> the subject
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Step 1:</strong> Remove <MathText>h</MathText></p>
                <p className="ml-4">Divide both sides by <MathText>h</MathText>:</p>
                <p className="ml-4"><MathText>{'$\\frac{A}{h} = \\frac{1}{2}(a + b)$'}</MathText></p>
                <p className="mt-3"><strong>Step 2:</strong> Remove <MathText>{'$\\frac{1}{2}$'}</MathText></p>
                <p className="ml-4">Multiply both sides by 2:</p>
                <p className="ml-4"><MathText>{'$\\frac{2A}{h} = a + b$'}</MathText></p>
                <p className="mt-3"><strong>Step 3:</strong> Isolate <MathText>a</MathText></p>
                <p className="ml-4">Subtract <MathText>b</MathText> from both sides:</p>
                <p className="ml-4"><MathText>{'$\\frac{2A}{h} - b = a$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$a = \\frac{2A}{h} - b$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Worked Example 6 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 6: Variable in Denominator
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Rearrange <MathText>{'$s = \\frac{d}{t}$'}</MathText> to make <MathText>t</MathText> the subject
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><MathText>t</MathText> is in the denominator (bottom of fraction)</p>
                <p><strong>Step 1:</strong> Clear the fraction</p>
                <p className="ml-4">Multiply both sides by <MathText>t</MathText>:</p>
                <p className="ml-4"><MathText>{'$st = \\frac{d}{t} \\times t$'}</MathText></p>
                <p className="ml-4"><MathText>{'$st = d$'}</MathText></p>
                <p className="mt-3"><strong>Step 2:</strong> Isolate <MathText>t</MathText></p>
                <p className="ml-4">Divide both sides by <MathText>s</MathText>:</p>
                <p className="ml-4"><MathText>{'$t = \\frac{d}{s}$'}</MathText></p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$t = \\frac{d}{s}$'}</MathText>
                </p>
              </div>
            </div>
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice: Complex Formula
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Rearrange <MathText>{'$P = 2(l + w)$'}</MathText> to make <MathText>w</MathText> the subject
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Remove the 2</p>
                  <p className="ml-4">Divide both sides by 2:</p>
                  <p className="ml-4"><MathText>{'$\\frac{P}{2} = l + w$'}</MathText></p>
                  <p className="mt-2"><strong>Step 2:</strong> Isolate <MathText>w</MathText></p>
                  <p className="ml-4">Subtract <MathText>l</MathText> from both sides:</p>
                  <p className="ml-4"><MathText>{'$\\frac{P}{2} - l = w$'}</MathText></p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                    <strong>Answer:</strong> <MathText>{'$w = \\frac{P}{2} - l$'}</MathText>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    (Alternative form: <MathText>{'$w = \\frac{P - 2l}{2}$'}</MathText>)
                  </p>
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
            <li>Changing the subject means rearranging a formula to isolate a different variable</li>
            <li>Use inverse operations just like when solving equations</li>
            <li>Undo operations in reverse order: addition/subtraction first, then multiplication/division</li>
            <li>When a variable is in the denominator, multiply through to clear it first</li>
            <li>For formulas with brackets, decide whether to expand or work with the entire bracket</li>
            <li>Always maintain balance - what you do to one side, do to the other</li>
            <li>Check your rearrangement by substituting values and verifying both forms give the same result</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
