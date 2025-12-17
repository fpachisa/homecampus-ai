import { useState } from 'react';

const WordProblems = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showSolution4, setShowSolution4] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Rate Word Problems</h1>
        <p className="text-lg">Apply your rate skills to solve real-world problems involving tables and tiered rates</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Table-Based Rate Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">1. Table-Based Rate Problems</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Key Idea:</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Some problems give you a <strong>rate table</strong> to look up values. Read the table carefully to find the correct rate.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Postage Charges</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">The table below shows the amounts a certain country charges for sending mails.</p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border-2 border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-blue-100 dark:bg-blue-900/50">
                    <th className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">Mass up to</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">20 g</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">$2.55</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">50 g</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">$2.65</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">100 g</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">$2.85</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">250 g</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">$3.15</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">400 g</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">$5</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded mb-4">
              <p className="text-gray-800 dark:text-gray-200 text-sm">
                <strong>Important:</strong> "Mass up to 50 g" means the charge is for items with mass greater than 20 g but less than or equal to 50 g.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">(a) Devi wants to send a mail with a mass of 400 g. How much does she have to pay?</p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2">
                  <p className="text-gray-800 dark:text-gray-200">Look at "Mass up to 400 g" → Charge = <strong>$5</strong></p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">(b) Andy wants to send a mail that has a mass of 80 g. How much does he have to pay?</p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2">
                  <p className="text-gray-800 dark:text-gray-200">80 g is more than 50 g but less than 100 g</p>
                  <p className="text-gray-800 dark:text-gray-200">Look at "Mass up to 100 g" → Charge = <strong>$2.85</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Parcel Charges</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">The table shows the postal charges for sending parcels to Country A.</p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border-2 border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-purple-100 dark:bg-purple-900/50">
                    <th className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">Mass up to</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">2 kg</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">$25</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">4 kg</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">$32</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">6 kg</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">$46</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">8 kg</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">$55</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Henry needs to send a parcel with a mass of 2 kg 800 g to Country A. How much does Henry need to pay?</p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2">
                <p className="text-gray-800 dark:text-gray-200">2 kg 800 g = 2.8 kg</p>
                <p className="text-gray-800 dark:text-gray-200">2.8 kg is more than 2 kg but less than 4 kg</p>
                <p className="text-gray-800 dark:text-gray-200">Look at "Mass up to 4 kg" → Charge = <strong>$32</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Tiered Rate Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">2. Tiered Rate Problems</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What are Tiered Rates?</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Sometimes rates <strong>change</strong> after a certain amount. For example, parking charges might be different for the first hour compared to additional hours.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Parking Charges</h3>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded mb-4">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Parking rates:</strong><br />
                First hour: $2.20<br />
                Every subsequent ½ hour: $1.20
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Mrs Leng parked her car from 10:00 am to 12:30 pm. How much did she have to pay?</p>

                {/* Timeline visual */}
                <div className="my-4 overflow-x-auto">
                  <svg viewBox="0 0 500 80" className="w-full max-w-lg mx-auto">
                    {/* Main line */}
                    <line x1="30" y1="50" x2="470" y2="50" stroke="currentColor" strokeWidth="2" className="text-gray-400 dark:text-gray-500" />

                    {/* Time markers */}
                    {[
                      { x: 30, label: '10:00 am' },
                      { x: 130, label: '11:00 am' },
                      { x: 230, label: '11:30 am' },
                      { x: 330, label: '12 noon' },
                      { x: 430, label: '12:30 pm' },
                    ].map((mark, i) => (
                      <g key={i}>
                        <line x1={mark.x} y1="45" x2={mark.x} y2="55" stroke="currentColor" strokeWidth="2" className="text-gray-600 dark:text-gray-400" />
                        <text x={mark.x} y="70" textAnchor="middle" fontSize="10" className="fill-gray-700 dark:fill-gray-300">{mark.label}</text>
                      </g>
                    ))}

                    {/* Duration brackets */}
                    <path d="M 30 40 Q 80 25, 130 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-500" />
                    <text x="80" y="22" textAnchor="middle" fontSize="10" className="fill-blue-600 dark:fill-blue-400">1 h</text>

                    {[
                      { x1: 130, x2: 230, label: '½ h' },
                      { x1: 230, x2: 330, label: '½ h' },
                      { x1: 330, x2: 430, label: '½ h' },
                    ].map((bracket, i) => (
                      <g key={i}>
                        <path d={`M ${bracket.x1} 40 Q ${(bracket.x1 + bracket.x2) / 2} 25, ${bracket.x2} 40`} fill="none" stroke="currentColor" strokeWidth="1.5" className="text-green-500" />
                        <text x={(bracket.x1 + bracket.x2) / 2} y="22" textAnchor="middle" fontSize="10" className="fill-green-600 dark:fill-green-400">{bracket.label}</text>
                      </g>
                    ))}
                  </svg>
                </div>

                <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2">
                  <p className="text-gray-800 dark:text-gray-200">Charges from 10:00 am to 11:00 am = $2.20 (first hour)</p>
                  <p className="text-gray-800 dark:text-gray-200">Charges from 11:00 am to 12:30 pm = $1.20 × 3 = $3.60 (three ½ hours)</p>
                  <p className="text-gray-800 dark:text-gray-200 mt-2">Total charges = $2.20 + $3.60 = <strong>$5.80</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Water Charges</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">The table below shows the water charges in cubic metres.</p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border-2 border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-cyan-100 dark:bg-cyan-900/50">
                    <th className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">Volume of water</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">First 40 m³</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-900 dark:text-gray-100">More than 40 m³</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">Water charges</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">$1.43 per m³</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-gray-200">$1.81 per m³</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">(a) Company A uses 35 m³ of water. How much is Company A charged?</p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2">
                  <p className="text-gray-800 dark:text-gray-200">35 m³ is less than 40 m³, so use $1.43 per m³</p>
                  <p className="text-gray-800 dark:text-gray-200">35 × $1.43 = <strong>$50.05</strong></p>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">(b) Company B uses 46 m³ of water. How much is Company B charged?</p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2">
                  <p className="text-gray-800 dark:text-gray-200 mb-2">46 m³ is more than 40 m³, so we split it:</p>
                  <p className="text-gray-800 dark:text-gray-200">First 40 m³: 40 × $1.43 = $57.20</p>
                  <p className="text-gray-800 dark:text-gray-200">Remaining: 46 - 40 = 6 m³</p>
                  <p className="text-gray-800 dark:text-gray-200">Additional 6 m³: 6 × $1.81 = $10.86</p>
                  <p className="text-gray-800 dark:text-gray-200 mt-2">Total = $57.20 + $10.86 = <strong>$68.06</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Multi-Step Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">3. Multi-Step Word Problems</h2>

          <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Problem-Solving Strategy:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li><strong>Read carefully</strong> — what information is given?</li>
              <li><strong>Identify</strong> — what is the question asking?</li>
              <li><strong>Plan</strong> — what steps do you need?</li>
              <li><strong>Calculate</strong> — work step by step</li>
              <li><strong>Check</strong> — does your answer make sense?</li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Sending Multiple Parcels</h3>
            <p className="mb-3 text-gray-700 dark:text-gray-300">Using the parcel charges table:</p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border-2 border-gray-300 dark:border-gray-600 text-sm">
                <thead>
                  <tr className="bg-purple-100 dark:bg-purple-900/50">
                    <th className="border-2 border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-100">Mass up to</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-100">2 kg</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-100">4 kg</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-100">6 kg</th>
                    <th className="border-2 border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-100">8 kg</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-200">Charges</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-200">$25</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-200">$32</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-200">$46</td>
                    <td className="border-2 border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-800 dark:text-gray-200">$55</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded">
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Mdm Chan needs to send two different parcels separately to Country A. The masses of the parcels are 3 kg and 5 kg 500 g. How much does she need to pay for the two parcels altogether?</p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded mt-2">
                <p className="text-gray-800 dark:text-gray-200 mb-2"><strong>Step 1:</strong> Find charge for first parcel (3 kg)</p>
                <p className="text-gray-800 dark:text-gray-200">3 kg is more than 2 kg but ≤ 4 kg → Charge = $32</p>

                <p className="text-gray-800 dark:text-gray-200 mt-3 mb-2"><strong>Step 2:</strong> Find charge for second parcel (5 kg 500 g = 5.5 kg)</p>
                <p className="text-gray-800 dark:text-gray-200">5.5 kg is more than 4 kg but ≤ 6 kg → Charge = $46</p>

                <p className="text-gray-800 dark:text-gray-200 mt-3 mb-2"><strong>Step 3:</strong> Find total</p>
                <p className="text-gray-800 dark:text-gray-200">$32 + $46 = <strong>$78</strong></p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Graph Interpretation</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">The line graph shows the number of jars a machine filled with peanut butter over 10 minutes.</p>

            {/* Simple line graph */}
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 300 220" className="w-full max-w-sm">
                {/* Grid */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                  <line key={`h${i}`} x1="50" y1={180 - i * 20} x2="280" y2={180 - i * 20} stroke="currentColor" strokeWidth="0.5" className="text-gray-300 dark:text-gray-600" />
                ))}
                {[0, 1, 2, 3, 4, 5].map(i => (
                  <line key={`v${i}`} x1={50 + i * 46} y1="20" x2={50 + i * 46} y2="180" stroke="currentColor" strokeWidth="0.5" className="text-gray-300 dark:text-gray-600" />
                ))}

                {/* Axes */}
                <line x1="50" y1="180" x2="280" y2="180" stroke="currentColor" strokeWidth="2" className="text-gray-600 dark:text-gray-400" />
                <line x1="50" y1="180" x2="50" y2="20" stroke="currentColor" strokeWidth="2" className="text-gray-600 dark:text-gray-400" />

                {/* Line */}
                <line x1="50" y1="180" x2="280" y2="40" stroke="currentColor" strokeWidth="2" className="text-red-500" />

                {/* Y-axis labels */}
                <text x="40" y="184" textAnchor="end" fontSize="10" className="fill-gray-700 dark:fill-gray-300">0</text>
                <text x="40" y="144" textAnchor="end" fontSize="10" className="fill-gray-700 dark:fill-gray-300">100</text>
                <text x="40" y="104" textAnchor="end" fontSize="10" className="fill-gray-700 dark:fill-gray-300">200</text>
                <text x="40" y="64" textAnchor="end" fontSize="10" className="fill-gray-700 dark:fill-gray-300">300</text>

                {/* X-axis labels */}
                <text x="50" y="195" textAnchor="middle" fontSize="10" className="fill-gray-700 dark:fill-gray-300">0</text>
                <text x="96" y="195" textAnchor="middle" fontSize="10" className="fill-gray-700 dark:fill-gray-300">2</text>
                <text x="142" y="195" textAnchor="middle" fontSize="10" className="fill-gray-700 dark:fill-gray-300">4</text>
                <text x="188" y="195" textAnchor="middle" fontSize="10" className="fill-gray-700 dark:fill-gray-300">6</text>
                <text x="234" y="195" textAnchor="middle" fontSize="10" className="fill-gray-700 dark:fill-gray-300">8</text>
                <text x="280" y="195" textAnchor="middle" fontSize="10" className="fill-gray-700 dark:fill-gray-300">10</text>

                {/* Axis titles */}
                <text x="165" y="212" textAnchor="middle" fontSize="11" className="fill-gray-700 dark:fill-gray-300">Time (min)</text>
                <text x="15" y="100" textAnchor="middle" fontSize="11" className="fill-gray-700 dark:fill-gray-300" transform="rotate(-90, 15, 100)">Number of jars</text>
              </svg>
            </div>

            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">(i) How many jars of peanut butter did the machine fill in 1 minute?</p>
                <p className="text-gray-800 dark:text-gray-200 mt-2">From graph: 350 jars in 10 minutes</p>
                <p className="text-gray-800 dark:text-gray-200">350 ÷ 10 = <strong>35 jars per minute</strong></p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                <p className="font-semibold text-gray-900 dark:text-gray-100">(ii) At this rate, how many jars can the machine fill in 1 hour?</p>
                <p className="text-gray-800 dark:text-gray-200 mt-2">1 hour = 60 minutes</p>
                <p className="text-gray-800 dark:text-gray-200">35 × 60 = <strong>2100 jars</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-300">Practice Problems</h2>

          <div className="space-y-4">
            {/* Problem 1 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 1: Table Reading
              </h3>
              <p className="mb-2 text-gray-800 dark:text-gray-200">Using the postage charges table (20 g: $2.55, 50 g: $2.65, 100 g: $2.85, 250 g: $3.15, 400 g: $5):</p>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                How much does it cost to send a mail with a mass of 180 g?
              </p>
              <button
                onClick={() => setShowSolution1(!showSolution1)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution1 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution1 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">180 g is more than 100 g but less than 250 g</p>
                  <p className="text-gray-800 dark:text-gray-200">Look at "Mass up to 250 g" → <strong>$3.15</strong></p>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 2: Parking Calculation
              </h3>
              <p className="mb-2 text-gray-800 dark:text-gray-200">Parking rates: First hour $2.20, every subsequent ½ hour $1.20</p>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                Dan parked his car from 1:15 pm to 4:05 pm. How much did he have to pay?
              </p>
              <button
                onClick={() => setShowSolution2(!showSolution2)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution2 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution2 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">1:15 pm to 2:15 pm = 1 hour → $2.20</p>
                  <p className="text-gray-800 dark:text-gray-200">2:15 pm to 4:05 pm = 1 h 50 min = 4 half-hours → $1.20 × 4 = $4.80</p>
                  <p className="text-gray-800 dark:text-gray-200 mt-2">Total = $2.20 + $4.80 = <strong>$7</strong></p>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 3: Tiered Rates
              </h3>
              <p className="mb-2 text-gray-800 dark:text-gray-200">Water charges: First 40 m³ at $1.43 per m³, above 40 m³ at $1.81 per m³</p>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A company uses 55 m³ of water. How much are they charged?
              </p>
              <button
                onClick={() => setShowSolution3(!showSolution3)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution3 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution3 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">First 40 m³: 40 × $1.43 = $57.20</p>
                  <p className="text-gray-800 dark:text-gray-200">Remaining: 55 - 40 = 15 m³</p>
                  <p className="text-gray-800 dark:text-gray-200">Additional 15 m³: 15 × $1.81 = $27.15</p>
                  <p className="text-gray-800 dark:text-gray-200 mt-2">Total = $57.20 + $27.15 = <strong>$84.35</strong></p>
                </div>
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Practice 4: Multi-Step
              </h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">
                A vacuum cleaner cleans a floor area of 10 m² every 4 min. What is the floor area it cleans in 30 min?
              </p>
              <button
                onClick={() => setShowSolution4(!showSolution4)}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
              >
                {showSolution4 ? 'Hide' : 'Show'} Solution
              </button>
              {showSolution4 && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                  <p className="text-gray-800 dark:text-gray-200">Method 1: Find rate per minute first</p>
                  <p className="text-gray-800 dark:text-gray-200">10 m² ÷ 4 = 2.5 m² per minute</p>
                  <p className="text-gray-800 dark:text-gray-200">2.5 × 30 = <strong>75 m²</strong></p>
                  <p className="text-gray-800 dark:text-gray-200 mt-3">Method 2: Use ratio</p>
                  <p className="text-gray-800 dark:text-gray-200">30 min ÷ 4 min = 7.5 times</p>
                  <p className="text-gray-800 dark:text-gray-200">10 m² × 7.5 = <strong>75 m²</strong></p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Table-based problems:</strong> Read the table carefully — "up to" includes values less than or equal to that amount</li>
            <li><strong>Tiered rates:</strong> Different rates apply to different portions — calculate each portion separately, then add</li>
            <li><strong>Multi-step problems:</strong> Break down into smaller steps and work systematically</li>
            <li><strong>Check your work:</strong> Does your answer make sense in the context of the problem?</li>
            <li><strong>Units matter:</strong> Convert units if needed (g to kg, min to hours, etc.)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WordProblems;
