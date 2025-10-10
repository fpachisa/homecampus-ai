import React, { useState } from 'react';

const CircleDefinitions = () => {
  const [selectedPart, setSelectedPart] = useState('radius');
  const [selectedArc, setSelectedArc] = useState('minor');

  // Basic Circle Parts Visualizer
  const CirclePartsVisualizer = ({ highlight = 'radius' }) => {
    const centerX = 175;
    const centerY = 150;
    const radius = 80;

    return (
      <svg width="350" height="300" className="mx-auto">
        {/* Circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke={highlight === 'circumference' ? '#ef4444' : '#333'}
          strokeWidth={highlight === 'circumference' ? '4' : '2'}
        />

        {/* Centre point */}
        <circle
          cx={centerX}
          cy={centerY}
          r="4"
          fill={highlight === 'centre' ? '#ef4444' : '#2563eb'}
        />
        <text x={centerX - 15} y={centerY - 10} className="text-sm font-bold fill-blue-600">O</text>

        {/* Radius */}
        {(highlight === 'radius' || highlight === 'diameter') && (
          <>
            <line
              x1={centerX}
              y1={centerY}
              x2={centerX + radius}
              y2={centerY}
              stroke={highlight === 'radius' ? '#ef4444' : '#333'}
              strokeWidth="3"
            />
            <circle cx={centerX + radius} cy={centerY} r="3" fill="#333" />
            <text x={centerX + radius / 2 - 10} y={centerY - 10} className="text-sm font-semibold" fill={highlight === 'radius' ? '#ef4444' : '#333'}>r</text>
            <text x={centerX + radius + 5} y={centerY + 5} className="text-sm font-bold">A</text>
          </>
        )}

        {/* Diameter */}
        {highlight === 'diameter' && (
          <>
            <line
              x1={centerX - radius}
              y1={centerY}
              x2={centerX + radius}
              y2={centerY}
              stroke="#ef4444"
              strokeWidth="3"
            />
            <circle cx={centerX - radius} cy={centerY} r="3" fill="#333" />
            <text x={centerX - radius - 15} y={centerY + 5} className="text-sm font-bold">B</text>
            <text x={centerX - 10} y={centerY + 25} className="text-sm font-semibold text-red-600">d = 2r</text>
          </>
        )}
      </svg>
    );
  };

  // Arc and Chord Visualizer
  const ArcChordVisualizer = ({ showMinor = true, showChord = false }) => {
    const centerX = 175;
    const centerY = 150;
    const radius = 80;
    const angle1 = -20; // degrees (right side)
    const angle2 = 100; // degrees (upper left) - creates 120° minor arc

    const pointA = {
      x: centerX + radius * Math.cos((angle1 * Math.PI) / 180),
      y: centerY + radius * Math.sin((angle1 * Math.PI) / 180)
    };
    const pointB = {
      x: centerX + radius * Math.cos((angle2 * Math.PI) / 180),
      y: centerY + radius * Math.sin((angle2 * Math.PI) / 180)
    };

    // Calculate arc path
    // For minor arc: sweep clockwise (flag=1) for the shorter path
    // For major arc: sweep counter-clockwise (flag=0) for the longer path
    const largeArcFlag = showMinor ? 0 : 1;
    const sweepFlag = showMinor ? 1 : 0;
    const arcPath = `M ${pointA.x} ${pointA.y} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${pointB.x} ${pointB.y}`;

    return (
      <svg width="350" height="300" className="mx-auto">
        {/* Full circle (light) */}
        <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#ddd" strokeWidth="2" />

        {/* Highlighted arc */}
        <path
          d={arcPath}
          fill="none"
          stroke="#ef4444"
          strokeWidth="4"
        />

        {/* Points A and B */}
        <circle cx={pointA.x} cy={pointA.y} r="4" fill="#333" />
        <circle cx={pointB.x} cy={pointB.y} r="4" fill="#333" />
        <text x={pointA.x + 10} y={pointA.y - 5} className="text-sm font-bold">A</text>
        <text x={pointB.x - 20} y={pointB.y - 5} className="text-sm font-bold">B</text>

        {/* Chord */}
        {showChord && (
          <line
            x1={pointA.x}
            y1={pointA.y}
            x2={pointB.x}
            y2={pointB.y}
            stroke="#2563eb"
            strokeWidth="2"
          />
        )}

        {/* Centre */}
        <circle cx={centerX} cy={centerY} r="3" fill="#666" />
        <text x={centerX - 15} y={centerY + 25} className="text-sm font-bold fill-gray-600">O</text>

        {/* Arc label */}
        <text x={centerX + 60} y={centerY - 60} className="text-sm font-semibold text-red-600">
          {showMinor ? 'Minor Arc AB' : 'Major Arc AB'}
        </text>
      </svg>
    );
  };

  // Segment Visualizer
  const SegmentVisualizer = ({ showMajor = false }) => {
    const centerX = 175;
    const centerY = 150;
    const radius = 80;
    const angle1 = -10; // degrees (right side)
    const angle2 = 90; // degrees (top) - creates 100° minor arc

    const pointA = {
      x: centerX + radius * Math.cos((angle1 * Math.PI) / 180),
      y: centerY + radius * Math.sin((angle1 * Math.PI) / 180)
    };
    const pointB = {
      x: centerX + radius * Math.cos((angle2 * Math.PI) / 180),
      y: centerY + radius * Math.sin((angle2 * Math.PI) / 180)
    };

    // For segment path: arc + straight line back to start
    // Minor segment: clockwise (flag=1), Major segment: counter-clockwise (flag=0)
    const largeArcFlag = showMajor ? 1 : 0;
    const sweepFlag = showMajor ? 0 : 1;
    const segmentPath = `M ${pointA.x} ${pointA.y} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${pointB.x} ${pointB.y} L ${pointA.x} ${pointA.y} Z`;

    return (
      <svg width="350" height="300" className="mx-auto">
        {/* Full circle */}
        <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#333" strokeWidth="2" />

        {/* Shaded segment */}
        <path d={segmentPath} fill="#fecaca" stroke="none" opacity="0.6" />

        {/* Chord */}
        <line x1={pointA.x} y1={pointA.y} x2={pointB.x} y2={pointB.y} stroke="#333" strokeWidth="2" />

        {/* Points */}
        <circle cx={pointA.x} cy={pointA.y} r="4" fill="#333" />
        <circle cx={pointB.x} cy={pointB.y} r="4" fill="#333" />
        <text x={pointA.x + 10} y={pointA.y - 5} className="text-sm font-bold">A</text>
        <text x={pointB.x - 20} y={pointB.y - 5} className="text-sm font-bold">B</text>

        {/* Centre */}
        <circle cx={centerX} cy={centerY} r="3" fill="#666" />
        <text x={centerX - 15} y={centerY + 5} className="text-sm font-bold fill-gray-600">O</text>

        {/* Label */}
        <text x={centerX - 40} y={centerY - 40} className="text-sm font-semibold text-red-600">
          {showMajor ? 'Major Segment' : 'Minor Segment'}
        </text>
      </svg>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Circle Geometry: Definitions</h1>
        <p className="text-lg">Understanding the fundamental parts and terminology of circles</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Parts of a Circle */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">1. Parts of a Circle</h2>

          <p className="mb-4">A circle is a set of all points that are equidistant from a fixed point called the centre.</p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-purple-50 p-4 rounded">
              <p className="font-semibold mb-2">Select a part to highlight:</p>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedPart('centre')}
                  className={`w-full p-2 rounded ${selectedPart === 'centre' ? 'bg-red-500 text-white' : 'bg-white'}`}
                >
                  Centre (O)
                </button>
                <button
                  onClick={() => setSelectedPart('radius')}
                  className={`w-full p-2 rounded ${selectedPart === 'radius' ? 'bg-red-500 text-white' : 'bg-white'}`}
                >
                  Radius (r)
                </button>
                <button
                  onClick={() => setSelectedPart('diameter')}
                  className={`w-full p-2 rounded ${selectedPart === 'diameter' ? 'bg-red-500 text-white' : 'bg-white'}`}
                >
                  Diameter (d)
                </button>
                <button
                  onClick={() => setSelectedPart('circumference')}
                  className={`w-full p-2 rounded ${selectedPart === 'circumference' ? 'bg-red-500 text-white' : 'bg-white'}`}
                >
                  Circumference
                </button>
              </div>
            </div>
            <CirclePartsVisualizer highlight={selectedPart} />
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mb-4">
            <p className="font-semibold mb-2">Key Definitions:</p>
            <ul className="space-y-2">
              <li><span className="font-semibold text-purple-600">Centre (O):</span> The fixed point equidistant from all points on the circle</li>
              <li><span className="font-semibold text-purple-600">Radius (r):</span> The distance from the centre to any point on the circle</li>
              <li><span className="font-semibold text-purple-600">Diameter (d):</span> A line segment passing through the centre, connecting two points on the circle. <strong>d = 2r</strong></li>
              <li><span className="font-semibold text-purple-600">Circumference:</span> The perimeter (total distance around) the circle</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
            <p className="font-bold mb-2">Important Relationship:</p>
            <p className="text-lg font-mono">Diameter = 2 × Radius</p>
            <p className="text-lg font-mono">d = 2r</p>
            <p className="mt-2 text-sm">The diameter is always the longest chord in a circle!</p>
          </div>
        </div>

        {/* Section 2: Arcs */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">2. Arcs</h2>

          <p className="mb-4">An <strong>arc</strong> is a part of the circumference between two points on the circle.</p>

          <div className="mb-4">
            <p className="font-semibold mb-2">Explore arcs:</p>
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setSelectedArc('minor')}
                className={`px-4 py-2 rounded ${selectedArc === 'minor' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
              >
                Minor Arc
              </button>
              <button
                onClick={() => setSelectedArc('major')}
                className={`px-4 py-2 rounded ${selectedArc === 'major' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
              >
                Major Arc
              </button>
            </div>
            <ArcChordVisualizer showMinor={selectedArc === 'minor'} showChord={false} />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded border-2 border-red-300">
              <h3 className="font-bold text-lg mb-2 text-red-700">Minor Arc</h3>
              <p className="text-sm">The <strong>shorter</strong> arc between two points on the circle.</p>
              <p className="text-sm mt-2">Notation: Arc AB or ⌒AB</p>
            </div>
            <div className="bg-blue-50 p-4 rounded border-2 border-blue-300">
              <h3 className="font-bold text-lg mb-2 text-blue-700">Major Arc</h3>
              <p className="text-sm">The <strong>longer</strong> arc between two points on the circle.</p>
              <p className="text-sm mt-2">Often written with three letters: Arc ACB (via point C)</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mt-4">
            <p className="font-bold">Key Concept:</p>
            <p>Two points on a circle divide it into <strong>two arcs</strong>: a minor arc (shorter) and a major arc (longer).</p>
            <p className="mt-2">Minor arc + Major arc = Complete circumference</p>
          </div>
        </div>

        {/* Section 3: Chords and Segments */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">3. Chords and Segments</h2>

          <h3 className="text-xl font-semibold mb-3 text-blue-700">What is a Chord?</h3>
          <p className="mb-4">A <strong>chord</strong> is a line segment that connects two points on the circumference of a circle.</p>

          <div className="mb-4">
            <ArcChordVisualizer showMinor={true} showChord={true} />
          </div>

          <div className="bg-blue-50 p-4 rounded mb-4">
            <p className="font-semibold mb-2">Chord Properties:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>A chord connects two points on the circle</li>
              <li>The <strong>diameter</strong> is the longest possible chord</li>
              <li>A diameter passes through the centre; other chords do not</li>
              <li>Every chord divides the circle into two segments</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-blue-700">What is a Segment?</h3>
          <p className="mb-4">A <strong>segment</strong> is the region between a chord and the arc it cuts off.</p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="font-semibold mb-2 text-center">Minor Segment</p>
              <SegmentVisualizer showMajor={false} />
              <p className="text-sm text-center mt-2">The smaller region</p>
            </div>
            <div>
              <p className="font-semibold mb-2 text-center">Major Segment</p>
              <SegmentVisualizer showMajor={true} />
              <p className="text-sm text-center mt-2">The larger region</p>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
            <p className="font-bold mb-2">Remember:</p>
            <p>A chord divides a circle into <strong>two segments</strong>:</p>
            <ul className="list-disc list-inside mt-2">
              <li><strong>Minor segment:</strong> The smaller region (with minor arc)</li>
              <li><strong>Major segment:</strong> The larger region (with major arc)</li>
            </ul>
          </div>
        </div>

        {/* Summary Table */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">Summary of Circle Terms</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-gray-300">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="border border-gray-300 p-3 text-left">Term</th>
                  <th className="border border-gray-300 p-3 text-left">Definition</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">Centre</td>
                  <td className="border border-gray-300 p-3">Fixed point equidistant from all points on the circle</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Radius</td>
                  <td className="border border-gray-300 p-3">Distance from centre to any point on the circle</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">Diameter</td>
                  <td className="border border-gray-300 p-3">Line through centre connecting two points (d = 2r)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Circumference</td>
                  <td className="border border-gray-300 p-3">Perimeter of the circle</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">Arc</td>
                  <td className="border border-gray-300 p-3">Part of the circumference between two points</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Chord</td>
                  <td className="border border-gray-300 p-3">Line segment connecting two points on the circle</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">Segment</td>
                  <td className="border border-gray-300 p-3">Region between a chord and its arc</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Sector</td>
                  <td className="border border-gray-300 p-3">Region bounded by two radii and an arc (like a pizza slice)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Practice Questions */}
        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Quick Check</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>If the radius of a circle is 7cm, what is its diameter?</li>
            <li>What is the longest chord in a circle called?</li>
            <li>How many arcs are formed when two points divide a circle?</li>
            <li>What is the region between a chord and an arc called?</li>
            <li>True or False: All radii of the same circle are equal in length.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CircleDefinitions;
