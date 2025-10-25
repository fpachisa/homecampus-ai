import { useState } from 'react';

const AngleInSemicircle = () => {
  const [showProof, setShowProof] = useState(false);
  const [_exampleStep, _setExampleStep] = useState(1);

  // Semicircle Theorem Visualizer
  const SemicircleVisualizer = ({ showRadii = false, showAngles = false }) => {
    const centerX = 200;
    const centerY = 150;
    const radius = 90;

    // Diameter endpoints
    const pointA = { x: centerX - radius, y: centerY };
    const pointB = { x: centerX + radius, y: centerY };

    // Point C on circumference
    const angleC = -100; // degrees
    const pointC = {
      x: centerX + radius * Math.cos((angleC * Math.PI) / 180),
      y: centerY + radius * Math.sin((angleC * Math.PI) / 180)
    };

    // Calculate right angle marker using direction vectors
    const markerSize = 12;

    // Direction vector from C to A (normalized)
    const dxCA = pointA.x - pointC.x;
    const dyCA = pointA.y - pointC.y;
    const lenCA = Math.sqrt(dxCA * dxCA + dyCA * dyCA);
    const uxCA = (dxCA / lenCA) * markerSize;
    const uyCA = (dyCA / lenCA) * markerSize;

    // Direction vector from C to B (normalized)
    const dxCB = pointB.x - pointC.x;
    const dyCB = pointB.y - pointC.y;
    const lenCB = Math.sqrt(dxCB * dxCB + dyCB * dyCB);
    const uxCB = (dxCB / lenCB) * markerSize;
    const uyCB = (dyCB / lenCB) * markerSize;

    // Right angle marker points
    const p1 = { x: pointC.x + uxCA, y: pointC.y + uyCA };
    const p2 = { x: p1.x + uxCB, y: p1.y + uyCB };
    const p3 = { x: pointC.x + uxCB, y: pointC.y + uyCB };

    return (
      <svg width="400" height="300" className="mx-auto">
        {/* Circle */}
        <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#333" strokeWidth="2" />

        {/* Diameter AB */}
        <line
          x1={pointA.x}
          y1={pointA.y}
          x2={pointB.x}
          y2={pointB.y}
          stroke="#2563eb"
          strokeWidth="3"
        />

        {/* Triangle ACB */}
        <line x1={pointA.x} y1={pointA.y} x2={pointC.x} y2={pointC.y} stroke="#666" strokeWidth="2" />
        <line x1={pointB.x} y1={pointB.y} x2={pointC.x} y2={pointC.y} stroke="#666" strokeWidth="2" />

        {/* Radii for proof */}
        {showRadii && (
          <>
            <line x1={centerX} y1={centerY} x2={pointC.x} y2={pointC.y} stroke="#22c55e" strokeWidth="2" strokeDasharray="4" />
            <text x={centerX + 30} y={centerY - 30} className="text-xs fill-green-600">OC = r</text>
          </>
        )}

        {/* Right angle marker at C */}
        <path
          d={`M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y}`}
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
        />

        {/* Angle label */}
        {showAngles && (
          <text x={pointC.x - 15} y={pointC.y + 25} className="text-lg font-bold text-red-600">90°</text>
        )}

        {/* Points */}
        <circle cx={pointA.x} cy={pointA.y} r="4" fill="#333" />
        <circle cx={pointB.x} cy={pointB.y} r="4" fill="#333" />
        <circle cx={pointC.x} cy={pointC.y} r="4" fill="#ef4444" />
        <circle cx={centerX} cy={centerY} r="4" fill="#2563eb" />

        {/* Labels */}
        <text x={pointA.x - 20} y={pointA.y + 5} className="text-base font-bold">A</text>
        <text x={pointB.x + 10} y={pointB.y + 5} className="text-base font-bold">B</text>
        <text x={pointC.x - 10} y={pointC.y - 15} className="text-base font-bold text-red-600">C</text>
        <text x={centerX - 10} y={centerY + 20} className="text-base font-bold text-blue-600">O</text>

        <text x={centerX - 40} y={centerY + 40} className="text-sm text-blue-600">diameter</text>
      </svg>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Angle in a Semi-circle Theorem</h1>
        <p className="text-lg">One of the most important theorems in circle geometry</p>
      </div>

      <div className="space-y-8">
        {/* Theorem Statement */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800">The Theorem</h2>

          <div className="bg-red-50 p-6 rounded-lg border-4 border-red-400 mb-6">
            <p className="text-xl font-bold text-center text-red-900 mb-4">
              The angle in a semi-circle is a right angle (90°)
            </p>
            <p className="text-center text-gray-700">
              If AB is a diameter and C is any point on the circumference, then ∠ACB = 90°
            </p>
          </div>

          <SemicircleVisualizer showRadii={false} showAngles={true} />

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mt-6">
            <p className="font-bold mb-2">Key Conditions:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>AB must be a <strong>diameter</strong> (passes through centre)</li>
              <li>Point C must be on the <strong>circumference</strong></li>
              <li>The angle at C (opposite the diameter) is <strong>always 90°</strong></li>
              <li>This works for ANY position of C on the circle!</li>
            </ul>
          </div>
        </div>

        {/* Proof Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800">Proof of the Theorem</h2>

          <button
            onClick={() => setShowProof(!showProof)}
            className="mb-4 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            {showProof ? 'Hide Proof' : 'Show Proof'}
          </button>

          {showProof && (
            <div className="bg-white p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Step-by-Step Proof</h3>

              <SemicircleVisualizer showRadii={true} showAngles={false} />

              <div className="space-y-4 mt-6">
                <div className="bg-purple-50 p-4 rounded">
                  <p className="font-bold text-purple-800">Step 1: Draw radius OC</p>
                  <p>Since O is the centre, OA = OB = OC = r (all radii are equal)</p>
                </div>

                <div className="bg-purple-50 p-4 rounded">
                  <p className="font-bold text-purple-800">Step 2: Identify isosceles triangles</p>
                  <p>△OAC has OA = OC, so it's isosceles → ∠OAC = ∠OCA (let's call this α)</p>
                  <p>△OBC has OB = OC, so it's isosceles → ∠OBC = ∠OCB (let's call this β)</p>
                </div>

                <div className="bg-purple-50 p-4 rounded">
                  <p className="font-bold text-purple-800">Step 3: Use angle sum in triangles</p>
                  <p>In △OAC: ∠AOC + α + α = 180° → ∠AOC = 180° - 2α</p>
                  <p>In △OBC: ∠BOC + β + β = 180° → ∠BOC = 180° - 2β</p>
                </div>

                <div className="bg-purple-50 p-4 rounded">
                  <p className="font-bold text-purple-800">Step 4: Use the straight line AOB</p>
                  <p>∠AOC + ∠BOC = 180° (angles on a straight line)</p>
                  <p>(180° - 2α) + (180° - 2β) = 180°</p>
                  <p>360° - 2α - 2β = 180°</p>
                  <p>2α + 2β = 180°</p>
                  <p>α + β = 90°</p>
                </div>

                <div className="bg-green-50 p-4 rounded border-2 border-green-400">
                  <p className="font-bold text-green-800">Conclusion:</p>
                  <p>∠ACB = ∠OCA + ∠OCB = α + β = 90°</p>
                  <p className="mt-2 text-lg font-bold">Therefore, the angle in a semi-circle is 90°! ✓</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-800">Worked Examples</h2>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-300 mb-4">
            <h3 className="font-bold text-lg mb-3">Example 1: Finding an angle</h3>
            <p className="mb-3"><strong>Problem:</strong> In circle with centre O, AB is a diameter. Point C lies on the circumference. If ∠CAB = 35°, find ∠CBA.</p>

            <div className="bg-blue-50 p-4 rounded mb-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p>Since AB is a diameter and C is on the circumference:</p>
              <p className="mt-2">∠ACB = 90° (angle in a semi-circle)</p>
              <p className="mt-2">In △ABC, angles sum to 180°:</p>
              <p>∠CAB + ∠ACB + ∠CBA = 180°</p>
              <p>35° + 90° + ∠CBA = 180°</p>
              <p>∠CBA = 180° - 125° = <strong>55°</strong></p>
            </div>

            <div className="bg-green-50 p-3 rounded">
              <p className="font-bold">Answer: ∠CBA = 55°</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-300">
            <h3 className="font-bold text-lg mb-3">Example 2: Proving a line is a diameter</h3>
            <p className="mb-3"><strong>Problem:</strong> Triangle PQR is inscribed in a circle. If ∠QPR = 90°, prove that QR is a diameter.</p>

            <div className="bg-blue-50 p-4 rounded mb-3">
              <p className="font-semibold mb-2">Solution (Converse of the theorem):</p>
              <p>Given: ∠QPR = 90° and all three points are on the circle</p>
              <p className="mt-2">By the <strong>converse</strong> of the angle in semi-circle theorem:</p>
              <p>If an angle at the circumference is 90°, then the side opposite to it must be a diameter.</p>
              <p className="mt-2">Since ∠QPR = 90° and QR is opposite to this angle,</p>
              <p><strong>QR must be a diameter.</strong></p>
            </div>

            <div className="bg-green-50 p-3 rounded">
              <p className="font-bold">Conclusion: QR is a diameter ✓</p>
            </div>
          </div>
        </div>

        {/* The Converse */}
        <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-400">
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">The Converse Theorem</h2>
          <p className="text-lg font-semibold mb-3">
            If an angle in a triangle inscribed in a circle is 90°, then the side opposite that angle is a diameter.
          </p>
          <p className="mb-2">In other words:</p>
          <p>If ∠ACB = 90° and A, B, C are on the circle, then AB must be a diameter.</p>
          <p className="mt-4 text-sm text-gray-700">This converse is very useful for proving that certain lines are diameters!</p>
        </div>

        {/* Practice Problems */}
        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Practice Problems</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>AB is a diameter of a circle. Point C is on the circumference. If ∠ABC = 28°, find ∠BAC.</li>
            <li>In a circle with centre O, PQ is a diameter. If ∠PRQ = 90° where R is on the circumference, what can you conclude about PQ?</li>
            <li>Triangle XYZ is inscribed in a circle with XY as diameter. If ∠YXZ = 42°, find ∠XYZ.</li>
            <li>In a circle, AB is a diameter. Point C is on the major arc. If AC = BC, find all angles of triangle ABC.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AngleInSemicircle;
