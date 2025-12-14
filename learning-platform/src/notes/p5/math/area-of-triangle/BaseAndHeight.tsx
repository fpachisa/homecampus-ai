import { useState } from 'react';

const BaseAndHeight = () => {
  const [showPractice1, setShowPractice1] = useState(false);
  const [showPractice2, setShowPractice2] = useState(false);
  const [showPractice3, setShowPractice3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Base and Height of a Triangle</h1>
        <p className="text-lg">Learning to identify the base and height in different triangles</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is a Triangle? */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">1. What is a Triangle?</h2>

          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg border-l-4 border-emerald-500 mb-4">
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              A <strong>triangle</strong> has <span className="text-emerald-600 dark:text-emerald-400 font-bold">3 sides</span> and <span className="text-emerald-600 dark:text-emerald-400 font-bold">3 angles</span>.
            </p>
          </div>

          {/* Triangle diagram */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 200 160" width="200" height="160" style={{ maxWidth: '200px' }}>
                {/* Triangle */}
                <polygon
                  points="100,20 30,130 170,130"
                  fill="rgba(16, 185, 129, 0.2)"
                  stroke="#10b981"
                  strokeWidth="2"
                />
                {/* Vertex labels */}
                <text x="100" y="14" textAnchor="middle" fill="#1f2937" fontSize="14" fontWeight="bold">A</text>
                <text x="20" y="140" textAnchor="middle" fill="#1f2937" fontSize="14" fontWeight="bold">B</text>
                <text x="180" y="140" textAnchor="middle" fill="#1f2937" fontSize="14" fontWeight="bold">C</text>
                {/* Side labels */}
                <text x="55" y="70" textAnchor="middle" fill="#2563eb" fontSize="11" fontWeight="600">AB</text>
                <text x="145" y="70" textAnchor="middle" fill="#2563eb" fontSize="11" fontWeight="600">AC</text>
                <text x="100" y="150" textAnchor="middle" fill="#2563eb" fontSize="11" fontWeight="600">BC</text>
              </svg>
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 text-sm">
              Triangle ABC has three sides: AB, BC, and AC
            </p>
          </div>
        </section>

        {/* Section 2: What is the Base? */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">2. What is the Base?</h2>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-500 mb-4">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">Key Fact:</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              The <strong>base of a triangle can be any of its three sides!</strong>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              We usually choose one side to be the base, then find the height from that base.
            </p>
          </div>

          {/* Three different bases */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Same Triangle, Different Bases:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Base at bottom */}
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <svg viewBox="0 0 120 100" width="100" height="84" style={{ maxWidth: '100px', margin: '0 auto', display: 'block' }}>
                  <polygon points="60,10 20,80 100,80" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2"/>
                  <line x1="20" y1="80" x2="100" y2="80" stroke="#ef4444" strokeWidth="3"/>
                  <text x="60" y="95" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">base</text>
                </svg>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Base at <strong>bottom</strong></p>
              </div>
              {/* Base on left */}
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <svg viewBox="0 0 120 100" width="100" height="84" style={{ maxWidth: '100px', margin: '0 auto', display: 'block' }}>
                  <polygon points="60,10 20,80 100,80" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2"/>
                  <line x1="20" y1="80" x2="60" y2="10" stroke="#ef4444" strokeWidth="3"/>
                  <text x="30" y="40" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">base</text>
                </svg>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Base on <strong>left side</strong></p>
              </div>
              {/* Base on right */}
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <svg viewBox="0 0 120 100" width="100" height="84" style={{ maxWidth: '100px', margin: '0 auto', display: 'block' }}>
                  <polygon points="60,10 20,80 100,80" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="2"/>
                  <line x1="60" y1="10" x2="100" y2="80" stroke="#ef4444" strokeWidth="3"/>
                  <text x="90" y="40" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">base</text>
                </svg>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Base on <strong>right side</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: What is the Height? */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">3. What is the Height?</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Definition:</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg mb-2">
              The <strong>height</strong> of a triangle is the <strong>perpendicular distance</strong> from the base to the opposite vertex (corner).
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              The height is always at a <strong>90° angle (right angle)</strong> to the base.
            </p>
          </div>

          {/* Height diagram */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Height from Vertex to Base:</h3>
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 240 160" width="240" height="160" style={{ maxWidth: '240px' }}>
                {/* Triangle */}
                <polygon
                  points="120,20 35,120 205,120"
                  fill="rgba(16, 185, 129, 0.15)"
                  stroke="#10b981"
                  strokeWidth="2"
                />
                {/* Base highlight */}
                <line x1="35" y1="120" x2="205" y2="120" stroke="#3b82f6" strokeWidth="3"/>
                {/* Height line (dashed) */}
                <line x1="120" y1="20" x2="120" y2="120" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,3"/>
                {/* Right angle marker */}
                <path d="M 120,120 L 120,110 L 130,110 L 130,120" fill="none" stroke="#059669" strokeWidth="2"/>
                {/* Labels */}
                <text x="120" y="14" textAnchor="middle" fill="#1f2937" fontSize="13" fontWeight="bold">F</text>
                <text x="22" y="128" textAnchor="middle" fill="#1f2937" fontSize="13" fontWeight="bold">E</text>
                <text x="218" y="128" textAnchor="middle" fill="#1f2937" fontSize="13" fontWeight="bold">G</text>
                <text x="120" y="138" textAnchor="middle" fill="#1f2937" fontSize="11" fontWeight="bold">H</text>
                {/* Base and height labels */}
                <text x="120" y="152" textAnchor="middle" fill="#2563eb" fontSize="10" fontWeight="bold">base (EG)</text>
                <text x="145" y="70" fill="#dc2626" fontSize="10" fontWeight="bold">height</text>
              </svg>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-center">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>EG</strong> is the base. <strong>FH</strong> is the height.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                FH ⊥ EG (FH is perpendicular to EG)
              </p>
            </div>
          </div>

          {/* Key Rule */}
          <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border-2 border-red-400 dark:border-red-600 mb-4">
            <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">⚠️ Important Rule:</h3>
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              The height of a triangle is <strong>always perpendicular</strong> to its base.
            </p>
          </div>
        </section>

        {/* Section 4: Height Inside or Outside? */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">4. Height Inside or Outside the Triangle?</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <p className="text-gray-800 dark:text-gray-200">
              Sometimes the height falls <strong>inside</strong> the triangle, and sometimes it falls <strong>outside</strong>!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {/* Height Inside */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-green-400 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-4 text-center">Height INSIDE</h3>
              <div className="flex justify-center mb-4">
                <svg viewBox="0 0 160 120" width="140" height="105" style={{ maxWidth: '140px' }}>
                  {/* Acute triangle */}
                  <polygon points="80,15 25,95 135,95" fill="rgba(34, 197, 94, 0.15)" stroke="#22c55e" strokeWidth="2"/>
                  {/* Height line */}
                  <line x1="80" y1="15" x2="80" y2="95" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,3"/>
                  {/* Right angle */}
                  <path d="M 80,95 L 80,87 L 88,87 L 88,95" fill="none" stroke="#059669" strokeWidth="2"/>
                  <text x="80" y="112" textAnchor="middle" fill="#4b5563" fontSize="10">Acute triangle</text>
                </svg>
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                In acute triangles, the height is inside
              </p>
            </div>

            {/* Height Outside */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-orange-400 dark:border-orange-600">
              <h3 className="font-bold text-orange-700 dark:text-orange-300 mb-4 text-center">Height OUTSIDE</h3>
              <div className="flex justify-center mb-4">
                <svg viewBox="0 0 180 120" width="160" height="107" style={{ maxWidth: '160px' }}>
                  {/* Obtuse triangle - apex far left, outside base */}
                  <polygon points="25,30 60,95 160,95" fill="rgba(249, 115, 22, 0.15)" stroke="#f97316" strokeWidth="2"/>
                  {/* Extended base (dashed) to the left */}
                  <line x1="15" y1="95" x2="60" y2="95" stroke="#6b7280" strokeWidth="1" strokeDasharray="4,2"/>
                  {/* Height line clearly outside */}
                  <line x1="25" y1="30" x2="25" y2="95" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,3"/>
                  {/* Right angle marker */}
                  <path d="M 25,95 L 25,87 L 33,87 L 33,95" fill="none" stroke="#059669" strokeWidth="2"/>
                  {/* Height label */}
                  <text x="15" y="60" fill="#dc2626" fontSize="9" fontWeight="bold">h</text>
                  <text x="100" y="112" textAnchor="middle" fill="#4b5563" fontSize="10">Obtuse triangle</text>
                </svg>
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                In obtuse triangles, height may be outside
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Practice */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">5. Practice Questions</h2>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-4">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">Practice 1:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              In Triangle PQR, PQ is the base. Which line segment represents the height?
            </p>
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 160 120" width="140" height="105" style={{ maxWidth: '140px' }}>
                <polygon points="25,95 135,95 80,20" fill="rgba(234, 179, 8, 0.15)" stroke="#eab308" strokeWidth="2"/>
                <line x1="80" y1="20" x2="80" y2="95" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,3"/>
                <path d="M 80,95 L 80,87 L 88,87 L 88,95" fill="none" stroke="#059669" strokeWidth="2"/>
                <text x="15" y="102" fill="#1f2937" fontSize="12" fontWeight="bold">P</text>
                <text x="140" y="102" fill="#1f2937" fontSize="12" fontWeight="bold">Q</text>
                <text x="80" y="14" textAnchor="middle" fill="#1f2937" fontSize="12" fontWeight="bold">R</text>
                <text x="80" y="112" textAnchor="middle" fill="#1f2937" fontSize="10" fontWeight="bold">S</text>
              </svg>
            </div>
            <button
              onClick={() => setShowPractice1(!showPractice1)}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition-colors"
            >
              {showPractice1 ? 'Hide' : 'Show'} Answer
            </button>
            {showPractice1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Answer:</strong> The height is <strong>RS</strong> because it is perpendicular to the base PQ.
                </p>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Practice 2:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Look at this obtuse triangle. If AB is the base, where does the height line meet the base?
            </p>
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 180 120" width="160" height="107" style={{ maxWidth: '160px' }}>
                {/* Obtuse triangle - apex leans right */}
                <polygon points="25,95 120,95 155,30" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="2"/>
                {/* Extended base */}
                <line x1="120" y1="95" x2="155" y2="95" stroke="#6b7280" strokeWidth="1" strokeDasharray="4,2"/>
                {/* Height line */}
                <line x1="155" y1="30" x2="155" y2="95" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,3"/>
                {/* Right angle */}
                <path d="M 155,95 L 155,87 L 147,87 L 147,95" fill="none" stroke="#059669" strokeWidth="2"/>
                {/* Labels */}
                <text x="15" y="102" fill="#1f2937" fontSize="12" fontWeight="bold">A</text>
                <text x="120" y="108" fill="#1f2937" fontSize="12" fontWeight="bold">B</text>
                <text x="160" y="26" fill="#1f2937" fontSize="12" fontWeight="bold">C</text>
                <text x="160" y="102" fill="#1f2937" fontSize="10" fontWeight="bold">D</text>
              </svg>
            </div>
            <button
              onClick={() => setShowPractice2(!showPractice2)}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
            >
              {showPractice2 ? 'Hide' : 'Show'} Answer
            </button>
            {showPractice2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Answer:</strong> The height CD meets at point <strong>D</strong>, which is on the <strong>extended base line</strong> (outside the triangle).
                </p>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 mb-4">
            <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">Practice 3:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              In a right triangle, one side is already perpendicular to another. Which two sides can be the base and height?
            </p>
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 140 110" width="130" height="102" style={{ maxWidth: '130px' }}>
                {/* Right triangle */}
                <polygon points="25,20 25,90 120,90" fill="rgba(34, 197, 94, 0.15)" stroke="#22c55e" strokeWidth="2"/>
                {/* Right angle at corner */}
                <path d="M 25,82 L 33,82 L 33,90" fill="none" stroke="#059669" strokeWidth="2"/>
                {/* Labels */}
                <text x="22" y="14" fill="#1f2937" fontSize="12" fontWeight="bold">X</text>
                <text x="15" y="98" fill="#1f2937" fontSize="12" fontWeight="bold">Y</text>
                <text x="125" y="98" fill="#1f2937" fontSize="12" fontWeight="bold">Z</text>
              </svg>
            </div>
            <button
              onClick={() => setShowPractice3(!showPractice3)}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition-colors"
            >
              {showPractice3 ? 'Hide' : 'Show'} Answer
            </button>
            {showPractice3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-green-300 dark:border-green-700">
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Answer:</strong> In this right triangle:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                  <li>If <strong>YZ</strong> is the base, then <strong>XY</strong> is the height</li>
                  <li>If <strong>XY</strong> is the base, then <strong>YZ</strong> is the height</li>
                </ul>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                  The two sides that form the right angle can be used as base and height!
                </p>
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
            <li>The <strong>base</strong> of a triangle can be any of its three sides</li>
            <li>The <strong>height</strong> is the perpendicular distance from the opposite vertex to the base</li>
            <li>The height is always at a <strong>90° angle</strong> to the base</li>
            <li>For obtuse triangles, the height may fall <strong>outside</strong> the triangle</li>
            <li>For right triangles, the two sides forming the right angle can be the base and height</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BaseAndHeight;
