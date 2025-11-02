import { useState } from 'react';
import MathText from '../../../../components/MathText';

export default function IntroductionToAngles() {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Introduction to Angles</h1>
        <p className="mt-2 text-purple-100">Learn angle notation, measurement, and types of angles</p>
      </div>

      <div className="p-6">
        {/* Section 1: What is an Angle? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            What is an Angle?
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              An <strong>angle</strong> is formed when two straight lines (called <strong>arms</strong> or <strong>rays</strong>) meet at a common point called the <strong>vertex</strong>.
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Angle Notation:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>We use the symbol <MathText>{'$\\angle$'}</MathText> to denote an angle</li>
                <li>An angle is named using <strong>three points</strong>: <MathText>{'$\\angle ABC$'}</MathText></li>
                <li>The <strong>vertex</strong> is always the middle letter (point B)</li>
                <li>The other two letters represent points on the two arms</li>
                <li>We can also use a single letter at the vertex: <MathText>{'$\\angle B$'}</MathText> (only when there's no confusion)</li>
              </ul>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>How to Read:</strong> <MathText>{'$\\angle ABC$'}</MathText> is read as "angle ABC" or "angle A-B-C"
            </p>
          </div>

          {/* Worked Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Naming Angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              In the diagram, point O is the vertex where lines OA and OB meet. Name the angle in two different ways.
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Method 1:</strong> Using three points - <MathText>{'$\\angle AOB$'}</MathText></p>
                <p className="ml-4">The vertex O is in the middle, with A and B on the two arms</p>
                <p><strong>Method 2:</strong> Using the vertex only - <MathText>{'$\\angle O$'}</MathText></p>
                <p className="ml-4">We can use this when there's only one angle at point O</p>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                  <strong>Answer:</strong> <MathText>{'$\\angle AOB$'}</MathText> or <MathText>{'$\\angle O$'}</MathText>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Measuring Angles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Measuring Angles
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Angles are measured in <strong>degrees</strong> using a <strong>protractor</strong>. The symbol for degrees is <MathText>{'$^{\\circ}$'}</MathText>.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4 border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Key Facts about Degrees:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>A full turn (complete rotation) = <MathText>{'$360^{\\circ}$'}</MathText></li>
                <li>A half turn (straight line) = <MathText>{'$180^{\\circ}$'}</MathText></li>
                <li>A quarter turn (right angle) = <MathText>{'$90^{\\circ}$'}</MathText></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Types of Angles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Types of Angles
          </h2>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Angles are classified based on their size:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Acute Angle</h4>
                <p className="text-gray-700 dark:text-gray-300">An angle <strong>less than</strong> <MathText>{'$90^{\\circ}$'}</MathText></p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">Example: <MathText>{'$30^{\\circ}$'}</MathText>, <MathText>{'$45^{\\circ}$'}</MathText>, <MathText>{'$60^{\\circ}$'}</MathText></p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Right Angle</h4>
                <p className="text-gray-700 dark:text-gray-300"><strong>Exactly</strong> <MathText>{'$90^{\\circ}$'}</MathText></p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">Shown with a small square symbol at the vertex</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Obtuse Angle</h4>
                <p className="text-gray-700 dark:text-gray-300"><strong>Greater than</strong> <MathText>{'$90^{\\circ}$'}</MathText> but <strong>less than</strong> <MathText>{'$180^{\\circ}$'}</MathText></p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">Example: <MathText>{'$110^{\\circ}$'}</MathText>, <MathText>{'$135^{\\circ}$'}</MathText>, <MathText>{'$150^{\\circ}$'}</MathText></p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded">
                <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Straight Angle</h4>
                <p className="text-gray-700 dark:text-gray-300"><strong>Exactly</strong> <MathText>{'$180^{\\circ}$'}</MathText></p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">Forms a straight line</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Reflex Angle</h4>
                <p className="text-gray-700 dark:text-gray-300"><strong>Greater than</strong> <MathText>{'$180^{\\circ}$'}</MathText> but <strong>less than</strong> <MathText>{'$360^{\\circ}$'}</MathText></p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">Example: <MathText>{'$200^{\\circ}$'}</MathText>, <MathText>{'$270^{\\circ}$'}</MathText>, <MathText>{'$315^{\\circ}$'}</MathText></p>
              </div>
            </div>
          </div>

          {/* Worked Example 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Classifying Angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Classify each angle as acute, right, obtuse, straight, or reflex:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              (a) <MathText>{'$75^{\\circ}$'}</MathText> &nbsp;&nbsp; (b) <MathText>{'$90^{\\circ}$'}</MathText> &nbsp;&nbsp; (c) <MathText>{'$135^{\\circ}$'}</MathText> &nbsp;&nbsp; (d) <MathText>{'$225^{\\circ}$'}</MathText>
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Solution:</strong>
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>(a) <MathText>{'$75^{\\circ}$'}</MathText> is <strong>less than</strong> <MathText>{'$90^{\\circ}$'}</MathText> → <strong className="text-purple-600 dark:text-purple-400">Acute angle</strong></p>
                <p>(b) <MathText>{'$90^{\\circ}$'}</MathText> is <strong>exactly</strong> <MathText>{'$90^{\\circ}$'}</MathText> → <strong className="text-blue-600 dark:text-blue-400">Right angle</strong></p>
                <p>(c) <MathText>{'$135^{\\circ}$'}</MathText> is <strong>between</strong> <MathText>{'$90^{\\circ}$'}</MathText> and <MathText>{'$180^{\\circ}$'}</MathText> → <strong className="text-green-600 dark:text-green-400">Obtuse angle</strong></p>
                <p>(d) <MathText>{'$225^{\\circ}$'}</MathText> is <strong>greater than</strong> <MathText>{'$180^{\\circ}$'}</MathText> → <strong className="text-red-600 dark:text-red-400">Reflex angle</strong></p>
              </div>
            </div>
          </div>

          {/* Practice Problem 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Classify These Angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Classify each angle:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2 ml-4">
              (a) <MathText>{'$45^{\\circ}$'}</MathText> &nbsp;&nbsp; (b) <MathText>{'$180^{\\circ}$'}</MathText> &nbsp;&nbsp; (c) <MathText>{'$95^{\\circ}$'}</MathText> &nbsp;&nbsp; (d) <MathText>{'$300^{\\circ}$'}</MathText> &nbsp;&nbsp; (e) <MathText>{'$15^{\\circ}$'}</MathText>
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
                  <p>(a) <MathText>{'$45^{\\circ}$'}</MathText> → <strong>Acute</strong> (less than <MathText>{'$90^{\\circ}$'}</MathText>)</p>
                  <p>(b) <MathText>{'$180^{\\circ}$'}</MathText> → <strong>Straight</strong> (exactly <MathText>{'$180^{\\circ}$'}</MathText>)</p>
                  <p>(c) <MathText>{'$95^{\\circ}$'}</MathText> → <strong>Obtuse</strong> (between <MathText>{'$90^{\\circ}$'}</MathText> and <MathText>{'$180^{\\circ}$'}</MathText>)</p>
                  <p>(d) <MathText>{'$300^{\\circ}$'}</MathText> → <strong>Reflex</strong> (greater than <MathText>{'$180^{\\circ}$'}</MathText>)</p>
                  <p>(e) <MathText>{'$15^{\\circ}$'}</MathText> → <strong>Acute</strong> (less than <MathText>{'$90^{\\circ}$'}</MathText>)</p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 2 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: True or False
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Determine if each statement is true or false:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mb-2">
              <li>An angle of <MathText>{'$89^{\\circ}$'}</MathText> is an obtuse angle</li>
              <li>A right angle measures exactly <MathText>{'$90^{\\circ}$'}</MathText></li>
              <li>An angle of <MathText>{'$270^{\\circ}$'}</MathText> is a reflex angle</li>
              <li>All angles less than <MathText>{'$180^{\\circ}$'}</MathText> are acute</li>
            </ol>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>1. FALSE</strong> - <MathText>{'$89^{\\circ}$'}</MathText> is less than <MathText>{'$90^{\\circ}$'}</MathText>, so it's an <strong>acute</strong> angle, not obtuse.</p>
                  <p><strong>2. TRUE</strong> - By definition, a right angle is exactly <MathText>{'$90^{\\circ}$'}</MathText>.</p>
                  <p><strong>3. TRUE</strong> - <MathText>{'$270^{\\circ}$'}</MathText> is greater than <MathText>{'$180^{\\circ}$'}</MathText> but less than <MathText>{'$360^{\\circ}$'}</MathText>, so it's reflex.</p>
                  <p><strong>4. FALSE</strong> - Angles less than <MathText>{'$180^{\\circ}$'}</MathText> can be acute (<MathText>{'$< 90^{\\circ}$'}</MathText>), right (<MathText>{'$= 90^{\\circ}$'}</MathText>), or obtuse (<MathText>{'$90^{\\circ} < \\theta < 180^{\\circ}$'}</MathText>).</p>
                </div>
              </div>
            )}
          </div>

          {/* Practice Problem 3 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Estimating Angles
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Without using a protractor, estimate whether each angle is acute, right, obtuse, or reflex. Then check if your estimate makes sense:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mb-2">
              <li>An angle that looks slightly less than a quarter turn</li>
              <li>An angle that looks like half a straight line</li>
              <li>An angle that looks more than a half turn but less than a full turn</li>
            </ol>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>1. Acute angle</strong> - A quarter turn is <MathText>{'$90^{\\circ}$'}</MathText>, so slightly less would be acute (less than <MathText>{'$90^{\\circ}$'}</MathText>).</p>
                  <p><strong>2. Right angle</strong> - Half of a straight line (<MathText>{'$180^{\\circ}$'}</MathText>) is <MathText>{'$90^{\\circ}$'}</MathText>, which is a right angle.</p>
                  <p><strong>3. Reflex angle</strong> - More than half a turn (<MathText>{'$180^{\\circ}$'}</MathText>) but less than a full turn (<MathText>{'$360^{\\circ}$'}</MathText>) is reflex.</p>
                  <p className="mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-300 dark:border-blue-700">
                    <strong>Tip:</strong> Use familiar references - quarter turn = <MathText>{'$90^{\\circ}$'}</MathText>, half turn = <MathText>{'$180^{\\circ}$'}</MathText>, three-quarter turn = <MathText>{'$270^{\\circ}$'}</MathText>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>An angle is formed when two lines meet at a vertex</li>
            <li>Angles are named using three points, with the vertex in the middle: <MathText>{'$\\angle ABC$'}</MathText></li>
            <li>Angles are measured in degrees (<MathText>{'$^{\\circ}$'}</MathText>) using a protractor</li>
            <li><strong>Acute:</strong> <MathText>{'$< 90^{\\circ}$'}</MathText> &nbsp;|&nbsp; <strong>Right:</strong> <MathText>{'$= 90^{\\circ}$'}</MathText> &nbsp;|&nbsp; <strong>Obtuse:</strong> <MathText>{'$90^{\\circ} < \\theta < 180^{\\circ}$'}</MathText></li>
            <li><strong>Straight:</strong> <MathText>{'$= 180^{\\circ}$'}</MathText> &nbsp;|&nbsp; <strong>Reflex:</strong> <MathText>{'$180^{\\circ} < \\theta < 360^{\\circ}$'}</MathText></li>
            <li>A full rotation = <MathText>{'$360^{\\circ}$'}</MathText></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
