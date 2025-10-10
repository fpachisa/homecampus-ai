import React from 'react';

const AreaOfTriangle = () => {
  const TriangleAreaDiagram = () => (
    <svg width="350" height="250" className="mx-auto">
      {/* Triangle */}
      <polygon points="80,200 280,200 180,80" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />

      {/* Height line */}
      <line x1="180" y1="80" x2="180" y2="200" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />

      {/* Right angle marker */}
      <rect x="170" y="190" width="10" height="10" fill="none" stroke="#333" strokeWidth="1" />

      {/* Labels */}
      <text x="175" y="245" className="text-sm font-semibold">Side a</text>
      <text x="120" y="135" className="text-sm font-semibold">Side b</text>
      <text x="240" y="135" className="text-sm font-semibold">Side c</text>

      {/* Angle C */}
      <path d="M 100 195 A 20 20 0 0 0 92 178" fill="none" stroke="#10b981" strokeWidth="2" />
      <text x="90" y="175" className="text-sm fill-green-600 font-bold">C</text>

      {/* Height label */}
      <text x="185" y="140" className="text-xs fill-red-600">h</text>

      {/* Formula */}
      <text x="100" y="30" className="text-base font-semibold">Area = ½ab sin C</text>
    </svg>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">5. The Area of a Triangle</h1>
        <p className="text-lg">Finding the area of any triangle using trigonometry</p>
      </div>

      <div className="space-y-6">
        <div>
          <p className="mb-4">For any triangle (not just right-angled), we can find the area when we know two sides and the included angle.</p>

          <TriangleAreaDiagram />

          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg text-center mb-4">
            <p className="text-2xl font-bold mb-2">Area = ½ab sin C</p>
            <p className="text-sm">where a and b are two sides, and C is the included angle between them</p>
          </div>

          <div className="bg-blue-50 p-4 rounded mb-4">
            <p className="font-semibold mb-2">Why This Formula Works:</p>
            <p className="mb-2">The height h of the triangle can be expressed as h = b sin C</p>
            <p className="mb-2">The traditional area formula is Area = ½ × base × height</p>
            <p>Substituting h = b sin C gives us Area = ½ × a × b sin C = ½ab sin C</p>
          </div>

          <div className="bg-white p-4 rounded border border-gray-300">
            <p className="font-semibold mb-2">Example:</p>
            <p className="mb-2">Find the area of a triangle with sides a = 8 cm, b = 10 cm, and included angle C = 35°</p>
            <p className="font-mono bg-gray-100 p-2 rounded">Area = ½ × 8 × 10 × sin 35°</p>
            <p className="font-mono bg-gray-100 p-2 rounded mt-1">Area = 40 × sin 35°</p>
            <p className="font-mono bg-gray-100 p-2 rounded mt-1">Area ≈ 40 × 0.574</p>
            <p className="font-mono bg-gray-100 p-2 rounded mt-1">Area ≈ 22.9 cm²</p>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mt-4">
            <p className="font-bold mb-2">Remember:</p>
            <p>• You can use any pair of sides and their included angle</p>
            <p>• Area = ½ab sin C = ½bc sin A = ½ac sin B</p>
            <p>• The angle must be between the two sides you're using</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">5.1 All Three Forms of the Area Formula</h3>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-red-50 p-4 rounded border-2 border-red-300">
              <p className="text-center text-lg font-bold mb-2">Form 1</p>
              <p className="text-center text-xl font-mono">Area = ½ab sin C</p>
              <p className="text-center text-sm mt-2">Use sides a and b with angle C between them</p>
            </div>
            <div className="bg-blue-50 p-4 rounded border-2 border-blue-300">
              <p className="text-center text-lg font-bold mb-2">Form 2</p>
              <p className="text-center text-xl font-mono">Area = ½bc sin A</p>
              <p className="text-center text-sm mt-2">Use sides b and c with angle A between them</p>
            </div>
            <div className="bg-green-50 p-4 rounded border-2 border-green-300">
              <p className="text-center text-lg font-bold mb-2">Form 3</p>
              <p className="text-center text-xl font-mono">Area = ½ac sin B</p>
              <p className="text-center text-sm mt-2">Use sides a and c with angle B between them</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">5.2 Finding Angles or Sides from Area</h3>

          <div className="bg-purple-50 p-4 rounded mb-4">
            <p className="font-semibold mb-2">Rearranging the Formula:</p>
            <p className="mb-2">If we know the area and want to find an angle:</p>
            <p className="font-mono text-center bg-white p-2 rounded mb-2">sin C = (2 × Area) / (ab)</p>
            <p className="font-mono text-center bg-white p-2 rounded">C = sin⁻¹((2 × Area) / (ab))</p>
          </div>

          <div className="bg-white p-4 rounded border border-gray-300 mb-4">
            <p className="font-semibold mb-2">Example: Finding an Angle</p>
            <p className="mb-2">A triangle has area 24 cm², with sides a = 8 cm and b = 10 cm. Find angle C.</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm">sin C = (2 × 24) / (8 × 10)</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">sin C = 48 / 80 = 0.6</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">C = sin⁻¹(0.6)</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">C ≈ 36.9° (or 143.1° if obtuse)</p>
          </div>

          <div className="bg-white p-4 rounded border border-gray-300">
            <p className="font-semibold mb-2">Example: Finding a Side</p>
            <p className="mb-2">A triangle has area 30 cm², side a = 12 cm, and angle C = 50°. Find side b.</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm">30 = ½ × 12 × b × sin 50°</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">30 = 6b × sin 50°</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">b = 30 / (6 × sin 50°)</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">b ≈ 6.52 cm</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">5.3 Real-World Applications</h3>

          <div className="bg-green-50 p-4 rounded">
            <p className="font-semibold mb-2">Common Applications:</p>
            <ul className="space-y-2">
              <li>• <span className="font-semibold">Land surveying:</span> Finding areas of triangular plots</li>
              <li>• <span className="font-semibold">Architecture:</span> Calculating roof areas with sloped sections</li>
              <li>• <span className="font-semibold">Engineering:</span> Finding areas of triangular structures</li>
              <li>• <span className="font-semibold">Design:</span> Computing areas for triangular gardens, sails, flags</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded border-l-4 border-blue-500 mt-6">
          <p className="font-bold mb-2">Key Takeaways:</p>
          <ul className="space-y-1">
            <li>• Area = ½ab sin C works for ALL triangles (not just right-angled)</li>
            <li>• You need two sides and the included angle between them</li>
            <li>• Three forms: ½ab sin C, ½bc sin A, ½ac sin B</li>
            <li>• Can rearrange to find angles: sin C = 2×Area/(ab)</li>
            <li>• Can rearrange to find sides: b = 2×Area/(a×sin C)</li>
            <li>• Always check units (cm², m², etc.)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AreaOfTriangle;
