import React, { useState } from 'react';

const Chords = () => {
  const [showProof, setShowProof] = useState(false);

  const ChordsVisualizer = ({ showEqual = false, showPerpendicular = false }) => {
    const centerX = 200;
    const centerY = 150;
    const radius = 85;

    const chord1Angle1 = -50;
    const chord1Angle2 = 50;
    const chord2Angle1 = 130;
    const chord2Angle2 = 230;

    const getPoint = (angle) => ({
      x: centerX + radius * Math.cos((angle * Math.PI) / 180),
      y: centerY + radius * Math.sin((angle * Math.PI) / 180)
    });

    const A = getPoint(chord1Angle1);
    const B = getPoint(chord1Angle2);
    const C = getPoint(chord2Angle1);
    const D = getPoint(chord2Angle2);

    const midAB = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };

    return (
      <svg width="400" height="300" className="mx-auto">
        <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#333" strokeWidth="2" />

        {/* Chord AB */}
        <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="#2563eb" strokeWidth="3" />

        {showEqual && (
          <line x1={C.x} y1={C.y} x2={D.x} y2={D.y} stroke="#2563eb" strokeWidth="3" />
        )}

        {showPerpendicular && (
          <>
            <line x1={centerX} y1={centerY} x2={midAB.x} y2={midAB.y} stroke="#ef4444" strokeWidth="2" strokeDasharray="4" />
            <rect x={midAB.x - 6} y={midAB.y - 6} width="12" height="12" fill="none" stroke="#ef4444" strokeWidth="2" transform={`rotate(45 ${midAB.x} ${midAB.y})`} />
            <circle cx={midAB.x} cy={midAB.y} r="3" fill="#ef4444" />
            <text x={midAB.x + 10} y={midAB.y - 10} className="text-xs text-red-600">M</text>
          </>
        )}

        <circle cx={A.x} cy={A.y} r="4" fill="#333" />
        <circle cx={B.x} cy={B.y} r="4" fill="#333" />
        <circle cx={centerX} cy={centerY} r="4" fill="#666" />

        {showEqual && (
          <>
            <circle cx={C.x} cy={C.y} r="4" fill="#333" />
            <circle cx={D.x} cy={D.y} r="4" fill="#333" />
          </>
        )}

        <text x={A.x + 10} y={A.y - 10} className="text-base font-bold">A</text>
        <text x={B.x + 10} y={B.y + 20} className="text-base font-bold">B</text>
        <text x={centerX - 10} y={centerY + 20} className="text-base font-bold">O</text>

        {showEqual && (
          <>
            <text x={C.x - 25} y={C.y + 20} className="text-base font-bold">C</text>
            <text x={D.x - 25} y={D.y - 10} className="text-base font-bold">D</text>
          </>
        )}
      </svg>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Chords of a Circle</h1>
        <p className="text-lg">Exploring the properties and theorems of chords</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Theorem 1: Equal Chords, Equal Angles</h2>

          <div className="bg-blue-50 p-6 rounded-lg border-4 border-blue-400 mb-6">
            <p className="text-xl font-bold text-center text-blue-900 mb-3">
              Equal chords subtend equal angles at the centre
            </p>
            <p className="text-center">If chord AB = chord CD, then ∠AOB = ∠COD</p>
          </div>

          <ChordsVisualizer showEqual={true} showPerpendicular={false} />

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mt-4">
            <p className="font-bold">Converse:</p>
            <p>If ∠AOB = ∠COD, then chord AB = chord CD</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Theorem 2: Perpendicular from Centre Bisects Chord</h2>

          <div className="bg-green-50 p-6 rounded-lg border-4 border-green-400 mb-6">
            <p className="text-xl font-bold text-center text-green-900 mb-3">
              The perpendicular from the centre to a chord bisects the chord
            </p>
            <p className="text-center">If OM ⊥ chord AB, then AM = MB</p>
          </div>

          <ChordsVisualizer showEqual={false} showPerpendicular={true} />

          <div className="bg-blue-50 p-4 rounded mt-4">
            <p className="font-bold mb-2">Converse:</p>
            <p>The line from the centre to the midpoint of a chord is perpendicular to the chord</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Important Relationship: Pythagoras with Chords</h2>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-400">
            <p className="font-bold text-lg mb-3">When OM ⊥ chord AB:</p>
            <p className="text-lg mb-2">In right triangle OMA:</p>
            <p className="text-xl font-mono font-bold text-center bg-white p-3 rounded my-3">
              r² = d² + (c/2)²
            </p>
            <p className="text-sm">Where:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>r = radius of circle</li>
              <li>d = perpendicular distance from centre to chord (OM)</li>
              <li>c = length of chord (AB)</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Worked Examples</h2>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-300 mb-4">
            <h3 className="font-bold text-lg mb-3">Example 1: Finding chord length</h3>
            <p className="mb-3"><strong>Problem:</strong> A chord is 5cm from the centre of a circle with radius 13cm. Find the length of the chord.</p>

            <div className="bg-blue-50 p-4 rounded mb-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p>Given: r = 13cm, d = 5cm</p>
              <p className="mt-2">Using r² = d² + (c/2)²:</p>
              <p>13² = 5² + (c/2)²</p>
              <p>169 = 25 + (c/2)²</p>
              <p>(c/2)² = 144</p>
              <p>c/2 = 12</p>
              <p><strong>c = 24cm</strong></p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-300">
            <h3 className="font-bold text-lg mb-3">Example 2: Finding distance from centre</h3>
            <p className="mb-3"><strong>Problem:</strong> In a circle with radius 10cm, a chord has length 16cm. How far is the chord from the centre?</p>

            <div className="bg-blue-50 p-4 rounded mb-3">
              <p className="font-semibold mb-2">Solution:</p>
              <p>Given: r = 10cm, c = 16cm</p>
              <p className="mt-2">Using r² = d² + (c/2)²:</p>
              <p>10² = d² + (16/2)²</p>
              <p>100 = d² + 64</p>
              <p>d² = 36</p>
              <p><strong>d = 6cm</strong></p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-400">
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">Equal Chords are Equidistant from Centre</h2>
          <p className="mb-3">If two chords are equal in length, they are the same distance from the centre.</p>
          <p className="font-semibold">If chord AB = chord CD, then OM = ON</p>
          <p className="text-sm mt-2">(where M and N are the feet of perpendiculars from O to the chords)</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Practice Problems</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>A chord of length 24cm is at a distance of 5cm from the centre. Find the radius.</li>
            <li>In a circle of radius 17cm, a chord is 15cm from the centre. Find the chord length.</li>
            <li>Two equal chords AB and CD are each 8cm from the centre. If AB = 12cm, find the radius.</li>
            <li>Prove that equal chords subtend equal angles at the centre using congruent triangles.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Chords;
