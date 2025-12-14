import { useState } from 'react';

const AreaOfTriangle = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showPractice1, setShowPractice1] = useState(false);
  const [showPractice2, setShowPractice2] = useState(false);
  const [showPractice3, setShowPractice3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Area of a Triangle</h1>
        <p className="text-lg">Learning the formula and how to calculate the area of triangles</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: The Related Rectangle */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">1. Triangle and Its Related Rectangle</h2>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              Every triangle can be placed inside a rectangle. The triangle takes up exactly <strong className="text-blue-600 dark:text-blue-400">half</strong> of the rectangle!
            </p>
          </div>

          {/* Visual demonstration */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">See How It Works:</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-4">
              {/* Triangle in rectangle */}
              <div className="text-center">
                <svg viewBox="0 0 180 140" width="170" height="130" style={{ maxWidth: '170px' }}>
                  {/* Rectangle */}
                  <rect x="20" y="15" width="130" height="90" fill="none" stroke="#3b82f6" strokeWidth="2"/>
                  {/* Triangle - shaded */}
                  <polygon points="20,15 20,105 150,105" fill="rgba(59, 130, 246, 0.3)" stroke="#2563eb" strokeWidth="2"/>
                  {/* Labels */}
                  <text x="12" y="12" fill="#1f2937" fontSize="11" fontWeight="bold">A</text>
                  <text x="153" y="12" fill="#1f2937" fontSize="11" fontWeight="bold">B</text>
                  <text x="12" y="115" fill="#1f2937" fontSize="11" fontWeight="bold">D</text>
                  <text x="153" y="115" fill="#1f2937" fontSize="11" fontWeight="bold">C</text>
                  {/* Dimensions */}
                  <text x="85" y="128" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="bold">6 cm (base)</text>
                  <text x="165" y="60" fill="#7c3aed" fontSize="10" fontWeight="bold">4 cm</text>
                </svg>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Triangle ACD inside rectangle ABCD</p>
              </div>

              {/* Arrow */}
              <div className="text-3xl text-gray-400">→</div>

              {/* Split view */}
              <div className="text-center">
                <svg viewBox="0 0 170 130" width="160" height="120" style={{ maxWidth: '160px' }}>
                  {/* Rectangle */}
                  <rect x="20" y="15" width="130" height="90" fill="none" stroke="#3b82f6" strokeWidth="2"/>
                  {/* Triangle - shaded blue */}
                  <polygon points="20,15 20,105 150,105" fill="rgba(59, 130, 246, 0.4)" stroke="#2563eb" strokeWidth="2"/>
                  {/* Other half - lighter */}
                  <polygon points="20,15 150,15 150,105" fill="rgba(251, 191, 36, 0.3)" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2"/>
                  {/* Labels */}
                  <text x="55" y="80" fill="#1d4ed8" fontSize="14" fontWeight="bold">½</text>
                  <text x="110" y="45" fill="#a16207" fontSize="14" fontWeight="bold">½</text>
                </svg>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Triangle = ½ of rectangle</p>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border border-green-300 dark:border-green-600">
              <p className="text-center text-gray-800 dark:text-gray-200">
                <strong>Area of Triangle ACD</strong> = ½ × Area of Rectangle ABCD
              </p>
              <p className="text-center text-gray-800 dark:text-gray-200 mt-2">
                = ½ × 6 cm × 4 cm = ½ × 24 cm² = <strong className="text-green-600 dark:text-green-400">12 cm²</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The Formula */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">2. The Area Formula</h2>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 p-8 rounded-lg border-2 border-purple-400 dark:border-purple-600 mb-6">
            <h3 className="text-center text-2xl font-bold text-purple-800 dark:text-purple-200 mb-4">Area of Triangle Formula</h3>
            <div className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Area = ½ × base × height
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300">
              or written as: Area = (base × height) ÷ 2
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500 mb-4">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">Remember:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
              <li>The <strong>base</strong> and <strong>height</strong> must be perpendicular (at 90°)</li>
              <li>Always use the perpendicular height, not the slanted side</li>
              <li>Area is measured in square units (cm², m², etc.)</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Worked Examples */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">3. Worked Examples</h2>

          {/* Example 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
            <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Example 1: Acute Triangle</h3>
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="flex-shrink-0">
                <svg viewBox="0 0 200 160" width="180" height="145" style={{ maxWidth: '180px' }}>
                  {/* Triangle */}
                  <polygon points="100,25 30,125 170,125" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2"/>
                  {/* Height line */}
                  <line x1="100" y1="25" x2="100" y2="125" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,3"/>
                  {/* Right angle */}
                  <path d="M 100,125 L 100,115 L 110,115 L 110,125" fill="none" stroke="#059669" strokeWidth="2"/>
                  {/* Dimension labels */}
                  <text x="100" y="145" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="bold">10 cm</text>
                  <text x="115" y="80" fill="#dc2626" fontSize="12" fontWeight="bold">3 cm</text>
                  <text x="100" y="18" textAnchor="middle" fill="#1f2937" fontSize="12" fontWeight="bold">M</text>
                </svg>
              </div>
              <div className="flex-grow">
                <p className="text-gray-800 dark:text-gray-200 mb-3">
                  Find the area of Triangle M with base 10 cm and height 3 cm.
                </p>
                <button
                  onClick={() => setShowExample1(!showExample1)}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                >
                  {showExample1 ? 'Hide' : 'Show'} Solution
                </button>
                {showExample1 && (
                  <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-blue-300 dark:border-blue-700">
                    <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Solution:</strong></p>
                    <p className="text-gray-700 dark:text-gray-300">Area of Triangle M</p>
                    <p className="text-gray-700 dark:text-gray-300 ml-4">= ½ × base × height</p>
                    <p className="text-gray-700 dark:text-gray-300 ml-4">= ½ × 10 cm × 3 cm</p>
                    <p className="text-gray-700 dark:text-gray-300 ml-4">= ½ × 30 cm²</p>
                    <p className="text-green-600 dark:text-green-400 font-bold ml-4">= 15 cm²</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 mb-6">
            <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">Example 2: Right Triangle</h3>
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="flex-shrink-0">
                <svg viewBox="0 0 180 160" width="165" height="145" style={{ maxWidth: '165px' }}>
                  {/* Right triangle */}
                  <polygon points="35,25 35,125 150,125" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2"/>
                  {/* Right angle marker */}
                  <path d="M 35,115 L 45,115 L 45,125" fill="none" stroke="#059669" strokeWidth="2"/>
                  {/* Height dimension (vertical side) */}
                  <text x="20" y="80" fill="#dc2626" fontSize="12" fontWeight="bold">6 cm</text>
                  {/* Base dimension */}
                  <text x="92" y="145" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="bold">6 cm</text>
                  <text x="85" y="85" fill="#1f2937" fontSize="14" fontWeight="bold">J</text>
                </svg>
              </div>
              <div className="flex-grow">
                <p className="text-gray-800 dark:text-gray-200 mb-3">
                  Find the area of Triangle J with base 6 cm and height 6 cm.
                </p>
                <button
                  onClick={() => setShowExample2(!showExample2)}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition-colors"
                >
                  {showExample2 ? 'Hide' : 'Show'} Solution
                </button>
                {showExample2 && (
                  <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-green-300 dark:border-green-700">
                    <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Solution:</strong></p>
                    <p className="text-gray-700 dark:text-gray-300">Area of Triangle J</p>
                    <p className="text-gray-700 dark:text-gray-300 ml-4">= ½ × base × height</p>
                    <p className="text-gray-700 dark:text-gray-300 ml-4">= ½ × 6 cm × 6 cm</p>
                    <p className="text-gray-700 dark:text-gray-300 ml-4">= ½ × 36 cm²</p>
                    <p className="text-green-600 dark:text-green-400 font-bold ml-4">= 18 cm²</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Practice */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">4. Practice Questions</h2>

          {/* Practice 1 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-4">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">Practice 1:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Find the area of a triangle with base 12 cm and height 8 cm.
            </p>
            <button
              onClick={() => setShowPractice1(!showPractice1)}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition-colors"
            >
              {showPractice1 ? 'Hide' : 'Show'} Answer
            </button>
            {showPractice1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-800 dark:text-gray-200">Area = ½ × 12 × 8 = ½ × 96 = <strong>48 cm²</strong></p>
              </div>
            )}
          </div>

          {/* Practice 2 */}
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Practice 2:</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A triangle has an area of 30 cm² and a base of 10 cm. What is the height?
            </p>
            <button
              onClick={() => setShowPractice2(!showPractice2)}
              className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded transition-colors"
            >
              {showPractice2 ? 'Hide' : 'Show'} Answer
            </button>
            {showPractice2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-purple-300 dark:border-purple-700">
                <p className="text-gray-800 dark:text-gray-200 mb-2">
                  Area = ½ × base × height
                </p>
                <p className="text-gray-700 dark:text-gray-300">30 = ½ × 10 × height</p>
                <p className="text-gray-700 dark:text-gray-300">30 = 5 × height</p>
                <p className="text-gray-700 dark:text-gray-300">height = 30 ÷ 5 = <strong>6 cm</strong></p>
              </div>
            )}
          </div>

          {/* Practice 3 */}
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg border-l-4 border-teal-500 mb-4">
            <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-3">Practice 3:</h3>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-shrink-0">
                <svg viewBox="0 0 240 165" width="200" height="140" style={{ maxWidth: '200px' }}>
                  {/* Obtuse triangle */}
                  <polygon points="25,125 165,125 195,35" fill="rgba(20, 184, 166, 0.2)" stroke="#14b8a6" strokeWidth="2"/>
                  {/* Extended base */}
                  <line x1="165" y1="125" x2="195" y2="125" stroke="#6b7280" strokeWidth="1" strokeDasharray="4,2"/>
                  {/* Height line */}
                  <line x1="195" y1="35" x2="195" y2="125" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,3"/>
                  {/* Right angle */}
                  <path d="M 195,125 L 195,115 L 185,115 L 185,125" fill="none" stroke="#059669" strokeWidth="2"/>
                  {/* Height foot dot */}
                  <circle cx="195" cy="125" r="3" fill="#dc2626"/>
                  {/* Dimensions */}
                  <text x="95" y="150" textAnchor="middle" fill="#7c3aed" fontSize="13" fontWeight="bold">17 m</text>
                  <text x="215" y="85" fill="#dc2626" fontSize="13" fontWeight="bold">14 m</text>
                </svg>
              </div>
              <div className="flex-grow">
                <p className="text-gray-800 dark:text-gray-200 mb-4">
                  Find the area of this triangle with base 17 m and height 14 m.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowPractice3(!showPractice3)}
              className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded transition-colors"
            >
              {showPractice3 ? 'Hide' : 'Show'} Answer
            </button>
            {showPractice3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-teal-300 dark:border-teal-700">
                <p className="text-gray-800 dark:text-gray-200">
                  Area = ½ × 17 × 14 = ½ × 238 = <strong>119 m²</strong>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Note: Even though the height is outside the triangle, we still use the same formula!
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
            <li>A triangle is <strong>half</strong> of its related rectangle</li>
            <li><strong>Area of Triangle = ½ × base × height</strong></li>
            <li>The base and height must be <strong>perpendicular</strong> (at 90°)</li>
            <li>The formula works for ALL triangles - acute, right, and obtuse</li>
            <li>Area is always in <strong>square units</strong> (cm², m², km²)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AreaOfTriangle;
