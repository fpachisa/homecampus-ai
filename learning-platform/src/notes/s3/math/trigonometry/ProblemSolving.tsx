

const ProblemSolvingTrigonometry = () => {
  const ElevationDiagram = () => (
    <svg width="350" height="250" className="mx-auto">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
        </marker>
      </defs>

      {/* Ground line */}
      <line x1="30" y1="180" x2="320" y2="180" stroke="#333" strokeWidth="2" />

      {/* Observer */}
      <circle cx="80" cy="165" r="8" fill="#2563eb" />
      <line x1="80" y1="173" x2="80" y2="195" stroke="#2563eb" strokeWidth="3" />

      {/* Horizontal line of sight */}
      <line x1="80" y1="165" x2="240" y2="165" stroke="#666" strokeWidth="1" strokeDasharray="5,5" />

      {/* Line of sight to object */}
      <line x1="80" y1="165" x2="240" y2="70" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Angle of elevation arc */}
      <path d="M 140 165 A 60 60 0 0 0 110 125" fill="none" stroke="#10b981" strokeWidth="2" />
      <text x="145" y="150" className="text-sm fill-green-600 font-semibold">Angle of Elevation</text>

      {/* Object (e.g., building) */}
      <rect x="235" y="70" width="5" height="110" fill="#666" />
      <rect x="220" y="60" width="35" height="10" fill="#666" />

      <text x="100" y="205" className="text-xs">Observer</text>
      <text x="210" y="205" className="text-xs">Object</text>
    </svg>
  );

  const DepressionDiagram = () => (
    <svg width="350" height="250" className="mx-auto">
      <defs>
        <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
        </marker>
      </defs>

      {/* Ground line */}
      <line x1="30" y1="200" x2="320" y2="200" stroke="#333" strokeWidth="2" />

      {/* Elevated observer (cliff/building) */}
      <rect x="70" y="80" width="20" height="120" fill="#666" />
      <circle cx="80" cy="72" r="8" fill="#2563eb" />

      {/* Horizontal line */}
      <line x1="80" y1="72" x2="260" y2="72" stroke="#666" strokeWidth="1" strokeDasharray="5,5" />

      {/* Line of sight to object */}
      <line x1="80" y1="72" x2="260" y2="180" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead2)" />

      {/* Angle of depression arc */}
      <path d="M 150 72 A 70 70 0 0 1 120 110" fill="none" stroke="#f59e0b" strokeWidth="2" />
      <text x="155" y="85" className="text-sm fill-amber-600 font-semibold">Angle of Depression</text>

      {/* Object on ground */}
      <circle cx="260" cy="195" r="8" fill="#10b981" />
      <line x1="260" y1="203" x2="260" y2="215" stroke="#10b981" strokeWidth="3" />

      <text x="50" y="220" className="text-xs">Elevated Observer</text>
      <text x="240" y="235" className="text-xs">Object</text>
    </svg>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">2. Problem Solving Using Trigonometry</h1>
        <p className="text-lg">Applying trigonometry to real-world situations and 3D problems</p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">2.1 Angles of Elevation and Depression</h3>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Angle of Elevation</h4>
            <p className="mb-3">The angle of elevation is the angle between the horizontal line of sight and the line of sight UP to an object above the observer.</p>
            <ElevationDiagram />
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Angle of Depression</h4>
            <p className="mb-3">The angle of depression is the angle between the horizontal line of sight and the line of sight DOWN to an object below the observer.</p>
            <DepressionDiagram />
          </div>

          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
            <p className="font-bold mb-2">Important Note:</p>
            <p>The angle of depression from point A to point B is equal to the angle of elevation from point B to point A (alternate angles on parallel lines).</p>
          </div>

          <div className="bg-white p-4 rounded border border-gray-300 mt-4">
            <p className="font-semibold mb-2">Example Problem:</p>
            <p className="mb-2">A person standing 50 meters from the base of a building observes the top at an angle of elevation of 32°. Find the height of the building.</p>
            <p className="font-mono bg-gray-100 p-2 rounded mt-2">tan 32° = height / 50</p>
            <p className="font-mono bg-gray-100 p-2 rounded mt-1">height = 50 × tan 32°</p>
            <p className="font-mono bg-gray-100 p-2 rounded mt-1">height ≈ 31.2 meters</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-800">2.2 3-Dimensional Problem Solving</h3>
          <p className="mb-4">Many real-world problems involve three dimensions. The key is to identify the right-angled triangle within the 3D shape.</p>

          <div className="bg-green-50 p-4 rounded mb-4">
            <p className="font-semibold mb-2">Strategy for 3D Problems:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Draw a clear diagram showing the 3D shape</li>
              <li>Identify the plane containing the right angle you need</li>
              <li>Draw this 2D triangle separately</li>
              <li>Label all known values</li>
              <li>Use trigonometry to find the unknown</li>
              <li>Check your answer makes sense in context</li>
            </ol>
          </div>

          <div className="bg-white p-4 rounded border border-gray-300">
            <p className="font-semibold mb-2">Example - Cuboid Problem:</p>
            <p className="mb-2">A rectangular box has dimensions 8 cm × 6 cm × 4 cm. Find the angle between the diagonal and the base.</p>
            <p className="text-sm mb-2">Step 1: Find the diagonal of the base using Pythagoras</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm">base diagonal = √(8² + 6²) = √100 = 10 cm</p>
            <p className="text-sm mt-2 mb-2">Step 2: Use this with height to find angle</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm">tan θ = 4/10 = 0.4</p>
            <p className="font-mono bg-gray-100 p-2 rounded text-sm mt-1">θ = tan⁻¹(0.4) ≈ 21.8°</p>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500 mt-6">
          <p className="font-bold mb-2">Key Takeaways:</p>
          <ul className="space-y-1">
            <li>• Angles of elevation and depression are alternate angles (equal)</li>
            <li>• Always identify the horizontal line of sight first</li>
            <li>• For 3D problems: break down into 2D triangles</li>
            <li>• Often need Pythagoras first, then trigonometry</li>
            <li>• Common formula for elevation/depression: tan θ = height / distance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolvingTrigonometry;
