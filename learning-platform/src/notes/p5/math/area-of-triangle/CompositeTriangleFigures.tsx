import { useState } from 'react';

const CompositeTriangleFigures = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showPractice1, setShowPractice1] = useState(false);
  const [showPractice2, setShowPractice2] = useState(false);
  const [showPractice3, setShowPractice3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Area of Composite Figures</h1>
        <p className="text-lg">Combining triangles with other shapes to find total area</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: What are Composite Figures? */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">1. What are Composite Figures?</h2>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              A <strong>composite figure</strong> is made up of <strong>two or more simple shapes</strong> combined together.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Common Combinations:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Square + Triangle */}
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <svg viewBox="0 0 100 120" className="w-24 h-28 mx-auto mb-2">
                  {/* Square */}
                  <rect x="20" y="50" width="60" height="60" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2"/>
                  {/* Triangle on top */}
                  <polygon points="50,10 20,50 80,50" fill="rgba(234, 179, 8, 0.3)" stroke="#eab308" strokeWidth="2"/>
                </svg>
                <p className="text-sm text-gray-700 dark:text-gray-300">Square + Triangle<br/>(House shape)</p>
              </div>
              {/* Rectangle + Triangle */}
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <svg viewBox="0 0 120 100" className="w-28 h-24 mx-auto mb-2">
                  {/* Rectangle */}
                  <rect x="10" y="30" width="60" height="60" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2"/>
                  {/* Triangle on right */}
                  <polygon points="70,30 70,90 110,60" fill="rgba(168, 85, 247, 0.3)" stroke="#a855f7" strokeWidth="2"/>
                </svg>
                <p className="text-sm text-gray-700 dark:text-gray-300">Rectangle + Triangle<br/>(Arrow shape)</p>
              </div>
              {/* Trapezoid */}
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                <svg viewBox="0 0 120 100" className="w-28 h-24 mx-auto mb-2">
                  {/* Square part */}
                  <rect x="20" y="30" width="50" height="60" fill="rgba(249, 115, 22, 0.2)" stroke="#f97316" strokeWidth="2"/>
                  {/* Triangle part */}
                  <polygon points="70,30 70,90 110,90" fill="rgba(236, 72, 153, 0.3)" stroke="#ec4899" strokeWidth="2"/>
                </svg>
                <p className="text-sm text-gray-700 dark:text-gray-300">Square + Triangle<br/>(Trapezoid)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Two Methods */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">2. Two Methods to Find Area</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Split and Add */}
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-2 border-green-400 dark:border-green-600">
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-3 text-lg">Method 1: Split and Add</h3>
              <div className="flex justify-center mb-4">
                <svg viewBox="0 0 140 100" className="w-36 h-24">
                  {/* Trapezoid split into square and triangle */}
                  <rect x="20" y="20" width="50" height="60" fill="rgba(34, 197, 94, 0.3)" stroke="#22c55e" strokeWidth="2"/>
                  <polygon points="70,20 70,80 120,80" fill="rgba(59, 130, 246, 0.3)" stroke="#3b82f6" strokeWidth="2"/>
                  {/* Dividing line */}
                  <line x1="70" y1="20" x2="70" y2="80" stroke="#6b7280" strokeWidth="1" strokeDasharray="4,2"/>
                  <text x="45" y="55" textAnchor="middle" className="fill-green-700 dark:fill-green-300 text-xs font-bold">A</text>
                  <text x="85" y="65" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-xs font-bold">B</text>
                </svg>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>Split into simple shapes</li>
                <li>Find area of each shape</li>
                <li><strong>Add</strong> all areas together</li>
              </ol>
              <div className="mt-3 p-2 bg-white dark:bg-gray-800 rounded text-center">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Total = Area A + Area B</p>
              </div>
            </div>

            {/* Take Away */}
            <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-2 border-orange-400 dark:border-orange-600">
              <h3 className="font-bold text-orange-700 dark:text-orange-300 mb-3 text-lg">Method 2: Take Away</h3>
              <div className="flex justify-center mb-4">
                <svg viewBox="0 0 140 100" className="w-36 h-24">
                  {/* Full rectangle */}
                  <rect x="20" y="20" width="100" height="60" fill="rgba(249, 115, 22, 0.2)" stroke="#f97316" strokeWidth="2"/>
                  {/* Triangle to remove (top right) */}
                  <polygon points="70,20 120,20 120,80" fill="rgba(239, 68, 68, 0.4)" stroke="#ef4444" strokeWidth="2"/>
                  <text x="45" y="55" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs font-bold">Keep</text>
                  <text x="100" y="45" textAnchor="middle" className="fill-red-700 dark:fill-red-300 text-xs font-bold">−</text>
                </svg>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>Start with a larger shape</li>
                <li>Find area of the larger shape</li>
                <li><strong>Subtract</strong> the removed part</li>
              </ol>
              <div className="mt-3 p-2 bg-white dark:bg-gray-800 rounded text-center">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Total = Big Area − Removed Area</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500 mb-4">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">💡 Which Method to Use?</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Both methods give the same answer! Choose the one that seems easier for each problem.
            </p>
          </div>
        </section>

        {/* Section 3: Worked Examples */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">3. Worked Examples</h2>

          {/* Example 1: Trapezoid using Split and Add */}
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 mb-6">
            <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">Example 1: Trapezoid (Split and Add)</h3>

            {/* Problem text first */}
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Find the area of trapezoid PTRS where PT = 6 cm, PS = 6 cm, and SR = 10 cm.
            </p>

            {/* Diagram in the middle */}
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 320 200" width="400" height="250" style={{ maxWidth: '420px' }}>
                {/* Square part - 80x80 for 6cm x 6cm */}
                <rect x="60" y="50" width="80" height="80" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2"/>
                {/* Triangle part - base ~53px for 4cm, height 80px for 6cm */}
                <polygon points="140,50 140,130 200,130" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2"/>
                {/* Split line (dashed) */}
                <line x1="140" y1="50" x2="140" y2="130" stroke="#6b7280" strokeWidth="1" strokeDasharray="4,2"/>

                {/* Vertex Labels - positioned outside shapes */}
                <text x="52" y="45" fill="#1f2937" fontSize="14" fontWeight="bold">P</text>
                <text x="145" y="45" fill="#1f2937" fontSize="14" fontWeight="bold">T</text>
                <text x="205" y="135" fill="#1f2937" fontSize="14" fontWeight="bold">R</text>
                <text x="52" y="140" fill="#1f2937" fontSize="14" fontWeight="bold">S</text>

                {/* Dimension: 6 cm on top (PT) */}
                <text x="100" y="38" textAnchor="middle" fill="#7c3aed" fontSize="13" fontWeight="bold">6 cm</text>

                {/* Dimension: 6 cm on left (PS) - positioned far left */}
                <text x="35" y="95" textAnchor="middle" fill="#7c3aed" fontSize="13" fontWeight="bold">6 cm</text>

                {/* Dimension: 10 cm at bottom (SR) */}
                <text x="130" y="160" textAnchor="middle" fill="#7c3aed" fontSize="13" fontWeight="bold">10 cm</text>

                {/* Shape label: Square - centered in square */}
                <text x="100" y="95" textAnchor="middle" fill="#15803d" fontSize="13" fontWeight="bold">Square</text>

                {/* Shape label: Triangle - positioned in triangle area */}
                <text x="165" y="115" textAnchor="middle" fill="#1d4ed8" fontSize="13" fontWeight="bold">Triangle</text>
              </svg>
            </div>

            {/* Button at bottom */}
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition-colors"
            >
              {showExample1 ? 'Hide' : 'Show'} Solution
            </button>
            {showExample1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-green-300 dark:border-green-700">
                <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Split and Add Method:</strong></p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Split into square PTUS and triangle TRU</p>
                  <p><strong>Step 2:</strong> Area of square PTUS = 6 × 6 = <span className="text-green-600 dark:text-green-400 font-bold">36 cm²</span></p>
                  <p><strong>Step 3:</strong> RU = 10 − 6 = 4 cm</p>
                  <p>Area of triangle TRU = ½ × 4 × 6 = <span className="text-blue-600 dark:text-blue-400 font-bold">12 cm²</span></p>
                  <p><strong>Step 4:</strong> Total area = 36 + 12 = <span className="text-purple-600 dark:text-purple-400 font-bold">48 cm²</span></p>
                </div>
              </div>
            )}
          </div>

          {/* Example 2: House shape - Square with triangle on top */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
            <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Example 2: House Shape (Square + Triangle)</h3>

            {/* Problem text first */}
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              EFGH is a square with side 8 cm. Triangle EHK has height 2 cm. Find the total area of the figure.
            </p>

            {/* Diagram in the middle */}
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 200 220" width="280" height="300" style={{ maxWidth: '300px' }}>
                {/* Triangle on top */}
                <polygon points="100,20 50,70 150,70" fill="rgba(234, 179, 8, 0.3)" stroke="#eab308" strokeWidth="2"/>
                {/* Square below */}
                <rect x="50" y="70" width="100" height="100" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2"/>
                {/* Dashed line showing triangle base = square top */}
                <line x1="50" y1="70" x2="150" y2="70" stroke="#3b82f6" strokeWidth="2"/>
                {/* Height line for triangle */}
                <line x1="100" y1="20" x2="100" y2="70" stroke="#6b7280" strokeWidth="1" strokeDasharray="4,2"/>
                {/* Right angle marker */}
                <path d="M 100,70 L 100,60 L 110,60 L 110,70" fill="none" stroke="#059669" strokeWidth="1.5"/>

                {/* Vertex Labels */}
                <text x="100" y="12" textAnchor="middle" fill="#1f2937" fontSize="14" fontWeight="bold">K</text>
                <text x="40" y="72" fill="#1f2937" fontSize="14" fontWeight="bold">E</text>
                <text x="155" y="72" fill="#1f2937" fontSize="14" fontWeight="bold">F</text>
                <text x="155" y="178" fill="#1f2937" fontSize="14" fontWeight="bold">G</text>
                <text x="40" y="178" fill="#1f2937" fontSize="14" fontWeight="bold">H</text>

                {/* Dimensions */}
                <text x="165" y="45" fill="#7c3aed" fontSize="13" fontWeight="bold">2 cm</text>
                <text x="100" y="205" textAnchor="middle" fill="#7c3aed" fontSize="13" fontWeight="bold">8 cm</text>
              </svg>
            </div>

            {/* Button at bottom */}
            <button
              onClick={() => setShowExample2(!showExample2)}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
            >
              {showExample2 ? 'Hide' : 'Show'} Solution
            </button>
            {showExample2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Solution:</strong></p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Area of square EFGH = 8 × 8 = <span className="text-blue-600 dark:text-blue-400 font-bold">64 cm²</span></p>
                  <p>Area of triangle EHK = ½ × 8 × 2 = <span className="text-yellow-600 dark:text-yellow-400 font-bold">8 cm²</span></p>
                  <p className="border-t pt-2 mt-2">Total area = 64 + 8 = <span className="text-purple-600 dark:text-purple-400 font-bold">72 cm²</span></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Practice */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">4. Practice Questions</h2>

          {/* Practice 1: Find shaded triangle using Take Away method - from PDF page 12 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-4">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">Practice 1:</h3>

            {/* Problem text first */}
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Find the area of the shaded triangle.
            </p>

            {/* Diagram centered */}
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 220 210" width="280" height="270" style={{ maxWidth: '300px' }}>
                {/* Grid scale - positioned clearly at top */}
                <line x1="30" y1="18" x2="65" y2="18" stroke="#7c3aed" strokeWidth="2"/>
                <line x1="30" y1="14" x2="30" y2="22" stroke="#7c3aed" strokeWidth="2"/>
                <line x1="65" y1="14" x2="65" y2="22" stroke="#7c3aed" strokeWidth="2"/>
                <text x="47" y="12" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="bold">1 cm</text>

                {/* Grid lines */}
                {[0,1,2,3,4].map(i => (
                  <line key={`h${i}`} x1="30" y1={40 + i*35} x2="170" y2={40 + i*35} stroke="#d1d5db" strokeWidth="1"/>
                ))}
                {[0,1,2,3,4].map(i => (
                  <line key={`v${i}`} x1={30 + i*35} y1="40" x2={30 + i*35} y2="180" stroke="#d1d5db" strokeWidth="1"/>
                ))}

                {/* Square outline */}
                <rect x="30" y="40" width="140" height="140" fill="none" stroke="#1f2937" strokeWidth="2"/>

                {/* Shaded triangle - vertices: (1cm from A), (2cm down from B on right edge), D */}
                <polygon points="65,40 170,110 30,180" fill="rgba(234, 179, 8, 0.4)" stroke="#eab308" strokeWidth="2"/>

                {/* Triangle labels P, Q, R - positioned in CENTER of each unshaded region */}
                {/* P: thin triangle at left - A(30,40), (65,40), D(30,180) */}
                <text x="38" y="100" fill="#6b7280" fontSize="14" fontWeight="bold">P</text>
                {/* Q: triangle at top-right - (65,40), B(170,40), (170,110) */}
                <text x="125" y="70" fill="#6b7280" fontSize="14" fontWeight="bold">Q</text>
                {/* R: triangle at bottom-right - D(30,180), (170,110), C(170,180) */}
                <text x="120" y="165" fill="#6b7280" fontSize="14" fontWeight="bold">R</text>

                {/* Vertex Labels */}
                <text x="22" y="38" fill="#1f2937" fontSize="13" fontWeight="bold">A</text>
                <text x="173" y="38" fill="#1f2937" fontSize="13" fontWeight="bold">B</text>
                <text x="173" y="190" fill="#1f2937" fontSize="13" fontWeight="bold">C</text>
                <text x="22" y="190" fill="#1f2937" fontSize="13" fontWeight="bold">D</text>
              </svg>
            </div>

            {/* Button at bottom */}
            <button
              onClick={() => setShowPractice1(!showPractice1)}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition-colors"
            >
              {showPractice1 ? 'Hide' : 'Show'} Answer
            </button>
            {showPractice1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Take Away Method:</strong></p>
                <div className="space-y-1 text-gray-700 dark:text-gray-300">
                  <p>Area of Square ABCD = 4 × 4 = <strong>16 cm²</strong></p>
                  <p>Area of Triangle P = ½ × 1 × 4 = <strong>2 cm²</strong></p>
                  <p>Area of Triangle Q = ½ × 3 × 2 = <strong>3 cm²</strong></p>
                  <p>Area of Triangle R = ½ × 4 × 2 = <strong>4 cm²</strong></p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-3 border-t pt-2">
                  Area of shaded triangle = 16 − 2 − 3 − 4
                </p>
                <p className="text-yellow-600 dark:text-yellow-400 font-bold">
                  = 7 cm²
                </p>
              </div>
            )}
          </div>

          {/* Practice 2: Rectangle with shaded triangle */}
          <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg border-l-4 border-pink-500 mb-4">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-3">Practice 2:</h3>

            {/* Problem text first */}
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              ABCD is a rectangle with length 30 cm and breadth 16 cm. Find the area of the shaded triangle.
            </p>

            {/* Diagram centered */}
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 240 160" width="300" height="200" style={{ maxWidth: '320px' }}>
                {/* Rectangle */}
                <rect x="30" y="30" width="150" height="100" fill="none" stroke="#6b7280" strokeWidth="2"/>
                {/* Shaded triangle */}
                <polygon points="30,30 180,30 30,130" fill="rgba(236, 72, 153, 0.3)" stroke="#ec4899" strokeWidth="2"/>

                {/* Vertex Labels */}
                <text x="22" y="25" fill="#1f2937" fontSize="13" fontWeight="bold">A</text>
                <text x="183" y="25" fill="#1f2937" fontSize="13" fontWeight="bold">B</text>
                <text x="183" y="140" fill="#1f2937" fontSize="13" fontWeight="bold">C</text>
                <text x="22" y="140" fill="#1f2937" fontSize="13" fontWeight="bold">D</text>

                {/* Dimensions */}
                <text x="105" y="20" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="bold">30 cm</text>
                <text x="200" y="85" fill="#7c3aed" fontSize="12" fontWeight="bold">16 cm</text>
              </svg>
            </div>

            {/* Button at bottom */}
            <button
              onClick={() => setShowPractice2(!showPractice2)}
              className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded transition-colors"
            >
              {showPractice2 ? 'Hide' : 'Show'} Answer
            </button>
            {showPractice2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-pink-300 dark:border-pink-700">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Base of triangle = AB = 30 cm
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Height of triangle = AD = 16 cm
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Area of triangle = ½ × 30 × 16 = ½ × 480
                </p>
                <p className="text-pink-600 dark:text-pink-400 font-bold mt-2">
                  = 240 cm²
                </p>
              </div>
            )}
          </div>

          {/* Practice 3: Arrow shape - Triangle + Rectangle + Rectangle */}
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg border-l-4 border-teal-500 mb-4">
            <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-3">Practice 3:</h3>

            {/* Problem text first */}
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Find the area of the figure.
            </p>

            {/* Diagram centered */}
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 300 230" width="360" height="280" style={{ maxWidth: '380px' }}>
                {/* Arrow/cross shape - all connected as one figure */}
                {/* Triangle A on top - base is 5cm (same as C width) */}
                <polygon points="130,20 90,55 170,55" fill="rgba(20, 184, 166, 0.25)" stroke="#14b8a6" strokeWidth="2"/>
                {/* Rectangle B in middle (15cm × 5cm) */}
                <rect x="30" y="55" width="200" height="65" fill="rgba(20, 184, 166, 0.25)" stroke="#14b8a6" strokeWidth="2"/>
                {/* Rectangle C at bottom (5cm × 3cm) - centered, same width as triangle base */}
                <rect x="90" y="120" width="80" height="50" fill="rgba(20, 184, 166, 0.25)" stroke="#14b8a6" strokeWidth="2"/>

                {/* Shape labels */}
                <text x="130" y="45" textAnchor="middle" fill="#0f766e" fontSize="14" fontWeight="bold">A</text>
                <text x="130" y="95" textAnchor="middle" fill="#0f766e" fontSize="14" fontWeight="bold">B</text>
                <text x="130" y="150" textAnchor="middle" fill="#0f766e" fontSize="14" fontWeight="bold">C</text>

                {/* Dimensions on right with lines */}
                {/* 3 cm for triangle height */}
                <line x1="245" y1="20" x2="245" y2="55" stroke="#7c3aed" strokeWidth="1.5"/>
                <line x1="241" y1="20" x2="249" y2="20" stroke="#7c3aed" strokeWidth="1.5"/>
                <line x1="241" y1="55" x2="249" y2="55" stroke="#7c3aed" strokeWidth="1.5"/>
                <text x="270" y="42" fill="#7c3aed" fontSize="12" fontWeight="bold">3 cm</text>

                {/* 5 cm for rectangle B height */}
                <line x1="245" y1="55" x2="245" y2="120" stroke="#7c3aed" strokeWidth="1.5"/>
                <line x1="241" y1="120" x2="249" y2="120" stroke="#7c3aed" strokeWidth="1.5"/>
                <text x="270" y="92" fill="#7c3aed" fontSize="12" fontWeight="bold">5 cm</text>

                {/* 3 cm for rectangle C height */}
                <line x1="245" y1="120" x2="245" y2="170" stroke="#7c3aed" strokeWidth="1.5"/>
                <line x1="241" y1="170" x2="249" y2="170" stroke="#7c3aed" strokeWidth="1.5"/>
                <text x="270" y="150" fill="#7c3aed" fontSize="12" fontWeight="bold">3 cm</text>

                {/* 5 cm for triangle base / rectangle C width - shown at top */}
                <line x1="90" y1="10" x2="170" y2="10" stroke="#dc2626" strokeWidth="1.5"/>
                <line x1="90" y1="6" x2="90" y2="14" stroke="#dc2626" strokeWidth="1.5"/>
                <line x1="170" y1="6" x2="170" y2="14" stroke="#dc2626" strokeWidth="1.5"/>
                <text x="130" y="7" textAnchor="middle" fill="#dc2626" fontSize="11" fontWeight="bold">5 cm</text>

                {/* 15 cm at bottom */}
                <line x1="30" y1="195" x2="230" y2="195" stroke="#7c3aed" strokeWidth="1.5"/>
                <line x1="30" y1="191" x2="30" y2="199" stroke="#7c3aed" strokeWidth="1.5"/>
                <line x1="230" y1="191" x2="230" y2="199" stroke="#7c3aed" strokeWidth="1.5"/>
                <text x="130" y="215" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="bold">15 cm</text>
              </svg>
            </div>

            {/* Button at bottom */}
            <button
              onClick={() => setShowPractice3(!showPractice3)}
              className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded transition-colors"
            >
              {showPractice3 ? 'Hide' : 'Show'} Answer
            </button>
            {showPractice3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-teal-300 dark:border-teal-700">
                <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Split and Add Method:</strong></p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Area of triangle A = ½ × 5 × 3 = <span className="text-teal-600 dark:text-teal-400 font-bold">7.5 cm²</span></p>
                  <p>Area of rectangle B = 15 × 5 = <span className="text-teal-600 dark:text-teal-400 font-bold">75 cm²</span></p>
                  <p>Area of rectangle C = 5 × 3 = <span className="text-teal-600 dark:text-teal-400 font-bold">15 cm²</span></p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-3 border-t pt-2">
                  Area of figure = 7.5 + 75 + 15
                </p>
                <p className="text-teal-600 dark:text-teal-400 font-bold text-lg">
                  = 97.5 cm²
                </p>
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
            <li>Composite figures are made of <strong>two or more simple shapes</strong></li>
            <li><strong>Split and Add</strong>: Divide into shapes, find each area, then add</li>
            <li><strong>Take Away</strong>: Start with larger shape, subtract removed parts</li>
            <li>Always identify the <strong>simple shapes</strong> first before calculating</li>
            <li>Label your shapes (A, B, C) to keep track of your work</li>
            <li>Both methods give the same answer - choose whichever is easier!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompositeTriangleFigures;
