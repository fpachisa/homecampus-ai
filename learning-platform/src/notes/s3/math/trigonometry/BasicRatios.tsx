import React, { useState } from 'react';

const TrigonometricRatios = () => {
  const [triangleType, setTriangleType] = useState('opposite');
  const [selectedAngle, setSelectedAngle] = useState(30);

  const RightTriangle = ({ angle = 30, highlight = 'opposite' }) => {
    const width = 200;
    const height = 150;
    const angleRad = (angle * Math.PI) / 180;
    const opposite = height;
    const adjacent = opposite / Math.tan(angleRad);
    const hypotenuse = Math.sqrt(opposite * opposite + adjacent * adjacent);

    return (
      <svg width="350" height="250" className="mx-auto">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
          </marker>
        </defs>

        {/* Triangle */}
        <line x1="50" y1="200" x2={50 + adjacent} y2="200" stroke={highlight === 'adjacent' ? '#ef4444' : '#333'} strokeWidth="3" />
        <line x1={50 + adjacent} y1="200" x2={50 + adjacent} y2="50" stroke={highlight === 'opposite' ? '#ef4444' : '#333'} strokeWidth="3" />
        <line x1="50" y1="200" x2={50 + adjacent} y2="50" stroke={highlight === 'hypotenuse' ? '#ef4444' : '#333'} strokeWidth="3" />

        {/* Right angle marker */}
        <rect x={50 + adjacent - 10} y="190" width="10" height="10" fill="none" stroke="#333" strokeWidth="2" />

        {/* Angle arc */}
        <path d={`M ${70} 200 A 20 20 0 0 0 ${50 + 20 * Math.cos(angleRad)} ${200 - 20 * Math.sin(angleRad)}`} fill="none" stroke="#2563eb" strokeWidth="2" />
        <text x="75" y="190" className="text-sm fill-blue-600">θ</text>

        {/* Labels */}
        <text x={50 + adjacent / 2} y="220" className="text-sm font-semibold" fill={highlight === 'adjacent' ? '#ef4444' : '#333'}>Adjacent</text>
        <text x={50 + adjacent + 15} y="125" className="text-sm font-semibold" fill={highlight === 'opposite' ? '#ef4444' : '#333'}>Opposite</text>
        <text x={50 + adjacent / 2 - 30} y="110" className="text-sm font-semibold" fill={highlight === 'hypotenuse' ? '#ef4444' : '#333'}>Hypotenuse</text>
      </svg>
    );
  };

  const SpecialAngleTriangle = ({ angle }) => {
    const triangles = {
      30: { a: 1, b: Math.sqrt(3), h: 2, angle1: 30, angle2: 60 },
      45: { a: 1, b: 1, h: Math.sqrt(2), angle1: 45, angle2: 45 },
      60: { a: Math.sqrt(3), b: 1, h: 2, angle1: 60, angle2: 30 }
    };

    const t = triangles[angle];
    const scale = 80;

    return (
      <svg width="300" height="250" className="mx-auto">
        <line x1="50" y1="200" x2={50 + t.a * scale} y2="200" stroke="#333" strokeWidth="2" />
        <line x1={50 + t.a * scale} y1="200" x2={50 + t.a * scale} y2={200 - t.b * scale} stroke="#333" strokeWidth="2" />
        <line x1="50" y1="200" x2={50 + t.a * scale} y2={200 - t.b * scale} stroke="#333" strokeWidth="2" />

        <rect x={50 + t.a * scale - 10} y="190" width="10" height="10" fill="none" stroke="#333" strokeWidth="2" />

        <text x="60" y="190" className="text-sm font-bold fill-blue-600">{angle}°</text>
        <text x={50 + t.a * scale - 20} y={200 - t.b * scale - 10} className="text-sm font-bold fill-blue-600">{t.angle2}°</text>

        <text x={50 + t.a * scale / 2} y="220" className="text-xs">{angle === 45 ? '1' : angle === 30 ? '√3' : '1'}</text>
        <text x={50 + t.a * scale + 10} y={200 - t.b * scale / 2} className="text-xs">{angle === 45 ? '1' : angle === 30 ? '1' : '√3'}</text>
        <text x={50 + t.a * scale / 2 - 20} y={200 - t.b * scale / 2 - 5} className="text-xs">{angle === 45 ? '√2' : '2'}</text>
      </svg>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">1. Trigonometric Ratios</h1>
        <p className="text-lg">Understanding the fundamental relationships in right-angled triangles</p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">1.1 Labelling Right-Angled Triangles</h3>
          <p className="mb-4">In a right-angled triangle, we label the sides relative to a chosen angle θ (theta):</p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-semibold mb-2">Select which side to highlight:</p>
              <div className="space-y-2">
                <button onClick={() => setTriangleType('opposite')} className={`w-full p-2 rounded ${triangleType === 'opposite' ? 'bg-red-500 text-white' : 'bg-white'}`}>Opposite</button>
                <button onClick={() => setTriangleType('adjacent')} className={`w-full p-2 rounded ${triangleType === 'adjacent' ? 'bg-red-500 text-white' : 'bg-white'}`}>Adjacent</button>
                <button onClick={() => setTriangleType('hypotenuse')} className={`w-full p-2 rounded ${triangleType === 'hypotenuse' ? 'bg-red-500 text-white' : 'bg-white'}`}>Hypotenuse</button>
              </div>
            </div>
            <RightTriangle angle={40} highlight={triangleType} />
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <p className="font-semibold mb-2">Key Definitions:</p>
            <ul className="space-y-2">
              <li><span className="font-semibold text-red-600">Opposite:</span> The side opposite to angle θ</li>
              <li><span className="font-semibold text-red-600">Adjacent:</span> The side next to angle θ (not the hypotenuse)</li>
              <li><span className="font-semibold text-red-600">Hypotenuse:</span> The longest side, opposite the right angle</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">1.2 The Trigonometric Ratios</h3>
          <p className="mb-4">The three primary trigonometric ratios are defined as follows:</p>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-center text-lg mb-2">SINE</h4>
              <p className="text-center text-2xl font-bold mb-2">sin θ = O/H</p>
              <p className="text-center text-sm">Opposite / Hypotenuse</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-300">
              <h4 className="font-bold text-center text-lg mb-2">COSINE</h4>
              <p className="text-center text-2xl font-bold mb-2">cos θ = A/H</p>
              <p className="text-center text-sm">Adjacent / Hypotenuse</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-center text-lg mb-2">TANGENT</h4>
              <p className="text-center text-2xl font-bold mb-2">tan θ = O/A</p>
              <p className="text-center text-sm">Opposite / Adjacent</p>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
            <p className="font-bold mb-2">Memory Aid: SOH-CAH-TOA</p>
            <p><span className="font-semibold">S</span>ine = <span className="font-semibold">O</span>pposite / <span className="font-semibold">H</span>ypotenuse</p>
            <p><span className="font-semibold">C</span>osine = <span className="font-semibold">A</span>djacent / <span className="font-semibold">H</span>ypotenuse</p>
            <p><span className="font-semibold">T</span>angent = <span className="font-semibold">O</span>pposite / <span className="font-semibold">A</span>djacent</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">1.3 Finding Side Lengths</h3>
          <p className="mb-3">When we know an angle and one side, we can find another side using trigonometric ratios.</p>

          <div className="bg-blue-50 p-4 rounded mb-3">
            <p className="font-semibold mb-2">Steps to find a side length:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Label the triangle (O, A, H) relative to the given angle</li>
              <li>Identify which two sides are involved (given and unknown)</li>
              <li>Choose the appropriate ratio (sin, cos, or tan)</li>
              <li>Write the equation and solve for the unknown</li>
            </ol>
          </div>

          <div className="bg-white p-4 rounded border border-gray-300">
            <p className="font-semibold mb-2">Example:</p>
            <p className="mb-2">Find side x in a right triangle where θ = 35°, hypotenuse = 10, and x is opposite to θ</p>
            <p className="font-mono bg-gray-100 p-2 rounded">sin 35° = x/10</p>
            <p className="font-mono bg-gray-100 p-2 rounded mt-1">x = 10 × sin 35°</p>
            <p className="font-mono bg-gray-100 p-2 rounded mt-1">x ≈ 5.74</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">1.4 Finding Angles</h3>
          <p className="mb-3">When we know two sides, we can find an angle using inverse trigonometric functions.</p>

          <div className="bg-green-50 p-4 rounded mb-3">
            <p className="font-semibold mb-2">Inverse Functions:</p>
            <p>If sin θ = x, then θ = sin⁻¹(x) or arcsin(x)</p>
            <p>If cos θ = x, then θ = cos⁻¹(x) or arccos(x)</p>
            <p>If tan θ = x, then θ = tan⁻¹(x) or arctan(x)</p>
          </div>

          <div className="bg-white p-4 rounded border border-gray-300">
            <p className="font-semibold mb-2">Example:</p>
            <p className="mb-2">Find angle θ when opposite = 7 and adjacent = 5</p>
            <p className="font-mono bg-gray-100 p-2 rounded">tan θ = 7/5</p>
            <p className="font-mono bg-gray-100 p-2 rounded mt-1">θ = tan⁻¹(7/5)</p>
            <p className="font-mono bg-gray-100 p-2 rounded mt-1">θ ≈ 54.5°</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">1.5 Special Angles for Sin, Cos and Tan</h3>
          <p className="mb-4">Certain angles have exact trigonometric values that we should memorize. These special angles are 0°, 30°, 45°, 60°, and 90°.</p>

          <div className="mb-4">
            <p className="font-semibold mb-2">Select a special angle to visualize:</p>
            <div className="flex gap-2 mb-4">
              <button onClick={() => setSelectedAngle(30)} className={`px-4 py-2 rounded ${selectedAngle === 30 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>30°</button>
              <button onClick={() => setSelectedAngle(45)} className={`px-4 py-2 rounded ${selectedAngle === 45 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>45°</button>
              <button onClick={() => setSelectedAngle(60)} className={`px-4 py-2 rounded ${selectedAngle === 60 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>60°</button>
            </div>
            <SpecialAngleTriangle angle={selectedAngle} />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-gray-300">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 p-3">Angle θ</th>
                  <th className="border border-gray-300 p-3">sin θ</th>
                  <th className="border border-gray-300 p-3">cos θ</th>
                  <th className="border border-gray-300 p-3">tan θ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold text-center">0°</td>
                  <td className="border border-gray-300 p-3 text-center">0</td>
                  <td className="border border-gray-300 p-3 text-center">1</td>
                  <td className="border border-gray-300 p-3 text-center">0</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold text-center">30°</td>
                  <td className="border border-gray-300 p-3 text-center">1/2</td>
                  <td className="border border-gray-300 p-3 text-center">√3/2</td>
                  <td className="border border-gray-300 p-3 text-center">1/√3 or √3/3</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold text-center">45°</td>
                  <td className="border border-gray-300 p-3 text-center">1/√2 or √2/2</td>
                  <td className="border border-gray-300 p-3 text-center">1/√2 or √2/2</td>
                  <td className="border border-gray-300 p-3 text-center">1</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold text-center">60°</td>
                  <td className="border border-gray-300 p-3 text-center">√3/2</td>
                  <td className="border border-gray-300 p-3 text-center">1/2</td>
                  <td className="border border-gray-300 p-3 text-center">√3</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold text-center">90°</td>
                  <td className="border border-gray-300 p-3 text-center">1</td>
                  <td className="border border-gray-300 p-3 text-center">0</td>
                  <td className="border border-gray-300 p-3 text-center">undefined</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mt-4">
            <p className="font-bold mb-2">Pattern Recognition:</p>
            <p className="mb-1">• Notice that sin 30° = cos 60° and sin 60° = cos 30°</p>
            <p className="mb-1">• At 45°, sine and cosine are equal</p>
            <p>• These values allow us to simplify expressions without a calculator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrigonometricRatios;
