

const TrueBearings = () => {
  const BearingDiagram = () => (
    <svg width="300" height="300" className="mx-auto">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
        </marker>
      </defs>

      {/* Compass */}
      <circle cx="150" cy="150" r="100" fill="none" stroke="#333" strokeWidth="2" />
      <line x1="150" y1="50" x2="150" y2="250" stroke="#ccc" strokeWidth="1" />
      <line x1="50" y1="150" x2="250" y2="150" stroke="#ccc" strokeWidth="1" />

      {/* North arrow */}
      <line x1="150" y1="150" x2="150" y2="60" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrowhead)" />
      <text x="155" y="45" className="text-sm font-bold fill-red-600">N</text>

      {/* Example bearing 045° */}
      <line x1="150" y1="150" x2="220" y2="80" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <path d="M 150 90 A 60 60 0 0 1 190 110" fill="none" stroke="#2563eb" strokeWidth="1" />
      <text x="175" y="100" className="text-xs fill-blue-600">045°</text>

      {/* Cardinal directions */}
      <text x="155" y="260" className="text-xs">S</text>
      <text x="260" y="155" className="text-xs">E</text>
      <text x="40" y="155" className="text-xs">W</text>
    </svg>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">3. True Bearings</h1>
        <p className="text-lg">Understanding and applying bearings for navigation</p>
      </div>

      <div className="space-y-6">
        <div>
          <p className="mb-4">A bearing is a direction measured clockwise from North, always expressed as a three-digit number.</p>

          <BearingDiagram />

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Bearing Rules:</h4>
              <ul className="space-y-2">
                <li>• Always measured clockwise from North</li>
                <li>• Written with three digits (e.g., 045°, not 45°)</li>
                <li>• Range from 000° to 360°</li>
                <li>• North = 000° or 360°</li>
                <li>• East = 090°</li>
                <li>• South = 180°</li>
                <li>• West = 270°</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-gray-300">
              <h4 className="font-semibold mb-2">Back Bearings:</h4>
              <p className="mb-2">The bearing from B to A is called the back bearing from A to B.</p>
              <p className="font-semibold text-blue-600 mb-2">Rules:</p>
              <p className="text-sm mb-1">• If bearing is less than 180°: add 180°</p>
              <p className="text-sm mb-3">• If bearing is more than 180°: subtract 180°</p>
              <p className="bg-gray-100 p-2 rounded text-sm">Example: If bearing from A to B is 065°, then bearing from B to A is 065° + 180° = 245°</p>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500 mt-4">
            <p className="font-bold mb-2">Key Concepts:</p>
            <ul className="space-y-2">
              <li><span className="font-semibold">Three-digit format:</span> Always use 3 digits (020°, not 20°)</li>
              <li><span className="font-semibold">Clockwise:</span> Always measure angles clockwise from North</li>
              <li><span className="font-semibold">Back bearing:</span> The reverse direction (opposite direction of travel)</li>
              <li><span className="font-semibold">North lines:</span> Draw parallel North lines at each location for calculations</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded border border-gray-300 mt-4">
            <p className="font-semibold mb-2">Navigation Problem Example:</p>
            <p className="mb-2">A ship sails 40 km on a bearing of 120°, then 30 km on a bearing of 050°. How far is it from the starting point?</p>
            <p className="text-sm italic mt-2">Strategy: Draw a scale diagram or use the cosine rule to find the distance. You need to find the angle between the two paths first by analyzing the bearings.</p>
            <p className="text-sm mt-2">The angle between the paths = 120° - 50° = 70°</p>
            <p className="text-sm">Using cosine rule: c² = 40² + 30² - 2(40)(30)cos(70°)</p>
          </div>

          <div className="bg-green-50 p-4 rounded mt-4">
            <p className="font-bold mb-2">Working with Bearing Diagrams:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Draw a North line at each location (these are parallel)</li>
              <li>Mark the bearing as a clockwise angle from North</li>
              <li>Use alternate angles (parallel North lines create alternate angles)</li>
              <li>Form triangles and use sine/cosine rules to solve</li>
              <li>Check your answer makes sense (reasonable distance/direction)</li>
            </ol>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse border-2 border-gray-300">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="border border-gray-300 p-3">Direction</th>
                  <th className="border border-gray-300 p-3">Bearing</th>
                  <th className="border border-gray-300 p-3">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">North</td>
                  <td className="border border-gray-300 p-3 text-center">000° or 360°</td>
                  <td className="border border-gray-300 p-3">Straight up</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">North-East</td>
                  <td className="border border-gray-300 p-3 text-center">045°</td>
                  <td className="border border-gray-300 p-3">Halfway between N and E</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">East</td>
                  <td className="border border-gray-300 p-3 text-center">090°</td>
                  <td className="border border-gray-300 p-3">Right</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">South-East</td>
                  <td className="border border-gray-300 p-3 text-center">135°</td>
                  <td className="border border-gray-300 p-3">Halfway between S and E</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">South</td>
                  <td className="border border-gray-300 p-3 text-center">180°</td>
                  <td className="border border-gray-300 p-3">Straight down</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">South-West</td>
                  <td className="border border-gray-300 p-3 text-center">225°</td>
                  <td className="border border-gray-300 p-3">Halfway between S and W</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">West</td>
                  <td className="border border-gray-300 p-3 text-center">270°</td>
                  <td className="border border-gray-300 p-3">Left</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">North-West</td>
                  <td className="border border-gray-300 p-3 text-center">315°</td>
                  <td className="border border-gray-300 p-3">Halfway between N and W</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrueBearings;
