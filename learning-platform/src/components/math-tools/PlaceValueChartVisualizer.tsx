/**
 * PlaceValueChartVisualizer - Interactive Place Value Chart for large numbers
 *
 * Displays numbers up to 10 million in a color-coded place value chart.
 * Useful for teaching place value concepts to primary school students.
 *
 * Features:
 * - Color-coded columns for each place value
 * - Expanded form display
 * - Number words display
 * - Support for highlighting specific place values
 */

import React from 'react';

interface PlaceValueChartVisualizerProps {
  number: number;                              // The number to display (up to 10,000,000)
  showNumber?: boolean;                        // Show the number in standard form at the top
  showExpandedForm?: boolean;                  // Show the expanded form (e.g., 3,000,000 + 200,000 + ...)
  showWords?: boolean;                         // Show the number in words
  highlightPlace?: 'millions' | 'hundredThousands' | 'tenThousands' | 'thousands' | 'hundreds' | 'tens' | 'ones' | 'none';
  showColumnValues?: boolean;                  // Show the value each digit represents
}

// Helper function to convert number to words
const numberToWords = (num: number): string => {
  if (num === 0) return 'zero';

  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const convertHundreds = (n: number): string => {
    if (n === 0) return '';

    let result = '';

    if (n >= 100) {
      result += ones[Math.floor(n / 100)] + ' hundred';
      n %= 100;
      if (n > 0) result += ' and ';
    }

    if (n >= 20) {
      result += tens[Math.floor(n / 10)];
      if (n % 10 > 0) result += '-' + ones[n % 10];
    } else if (n >= 10) {
      result += teens[n - 10];
    } else if (n > 0) {
      result += ones[n];
    }

    return result;
  };

  let result = '';

  // Millions
  const millions = Math.floor(num / 1000000);
  if (millions > 0) {
    result += convertHundreds(millions) + ' million';
    num %= 1000000;
    if (num > 0) result += ', ';
  }

  // Thousands
  const thousands = Math.floor(num / 1000);
  if (thousands > 0) {
    result += convertHundreds(thousands) + ' thousand';
    num %= 1000;
    if (num > 0 && num < 100) result += ' and ';
    else if (num > 0) result += ', ';
  }

  // Hundreds, tens, ones
  if (num > 0) {
    result += convertHundreds(num);
  }

  return result;
};

const PlaceValueChartVisualizer: React.FC<PlaceValueChartVisualizerProps> = ({
  number,
  showNumber = false,        // Default false - don't give away the answer
  showExpandedForm = false,  // Default false - don't give away answers
  showWords = false,         // Default false - don't give away answers
  highlightPlace = 'none',
  showColumnValues = false   // Default false - let students figure out digit values
}) => {
  // Guard against undefined number
  if (typeof number !== 'number' || isNaN(number)) {
    return (
      <div className="p-4 text-center text-gray-500 dark:text-gray-400">
        <p>Place Value Chart</p>
        <p className="text-sm">Waiting for number input...</p>
      </div>
    );
  }

  // Ensure number is within range
  const safeNumber = Math.min(Math.max(0, Math.floor(number)), 9999999);

  // Extract digits
  const numStr = safeNumber.toString().padStart(7, '0');
  const digits = {
    millions: parseInt(numStr[0]),
    hundredThousands: parseInt(numStr[1]),
    tenThousands: parseInt(numStr[2]),
    thousands: parseInt(numStr[3]),
    hundreds: parseInt(numStr[4]),
    tens: parseInt(numStr[5]),
    ones: parseInt(numStr[6])
  };

  // Place value information
  const places = [
    { key: 'millions', label: 'Millions', shortLabel: 'M', value: 1000000, color: 'bg-pink-500', textColor: 'text-pink-600 dark:text-pink-400', bgLight: 'bg-pink-100 dark:bg-pink-900/50' },
    { key: 'hundredThousands', label: 'Hundred Thousands', shortLabel: '100K', value: 100000, color: 'bg-purple-500', textColor: 'text-purple-600 dark:text-purple-400', bgLight: 'bg-purple-100 dark:bg-purple-900/50' },
    { key: 'tenThousands', label: 'Ten Thousands', shortLabel: '10K', value: 10000, color: 'bg-blue-500', textColor: 'text-blue-600 dark:text-blue-400', bgLight: 'bg-blue-100 dark:bg-blue-900/50' },
    { key: 'thousands', label: 'Thousands', shortLabel: '1K', value: 1000, color: 'bg-green-500', textColor: 'text-green-600 dark:text-green-400', bgLight: 'bg-green-100 dark:bg-green-900/50' },
    { key: 'hundreds', label: 'Hundreds', shortLabel: '100', value: 100, color: 'bg-yellow-500', textColor: 'text-yellow-600 dark:text-yellow-400', bgLight: 'bg-yellow-100 dark:bg-yellow-900/50' },
    { key: 'tens', label: 'Tens', shortLabel: '10', value: 10, color: 'bg-orange-500', textColor: 'text-orange-600 dark:text-orange-400', bgLight: 'bg-orange-100 dark:bg-orange-900/50' },
    { key: 'ones', label: 'Ones', shortLabel: '1', value: 1, color: 'bg-red-500', textColor: 'text-red-600 dark:text-red-400', bgLight: 'bg-red-100 dark:bg-red-900/50' }
  ];

  // Calculate expanded form
  const expandedParts = places
    .map(place => ({
      ...place,
      digit: digits[place.key as keyof typeof digits],
      digitValue: digits[place.key as keyof typeof digits] * place.value
    }))
    .filter(part => part.digitValue > 0);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Title */}
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Place Value Chart</h3>
        {showNumber && (
          <p className="text-2xl font-mono font-bold text-gray-800 dark:text-gray-200">
            {safeNumber.toLocaleString()}
          </p>
        )}
      </div>

      {/* Place Value Chart */}
      <div className="overflow-x-auto mb-4">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {places.map(place => (
                <th
                  key={place.key}
                  className={`px-2 py-2 text-xs font-bold text-white ${place.color} ${
                    highlightPlace === place.key ? 'ring-4 ring-yellow-400 ring-offset-2' : ''
                  }`}
                >
                  <div>{place.shortLabel}</div>
                  <div className="text-[10px] font-normal opacity-80 hidden sm:block">
                    {place.label}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {places.map(place => {
                const digit = digits[place.key as keyof typeof digits];
                const isHighlighted = highlightPlace === place.key;
                return (
                  <td
                    key={place.key}
                    className={`px-2 py-4 text-center border border-gray-300 dark:border-gray-600 ${
                      isHighlighted ? 'bg-yellow-100 dark:bg-yellow-900/50 ring-2 ring-yellow-400' : 'bg-white dark:bg-gray-800'
                    }`}
                  >
                    <span className={`text-3xl font-bold ${place.textColor}`}>
                      {digit}
                    </span>
                  </td>
                );
              })}
            </tr>
            {/* Column values row */}
            {showColumnValues && (
              <tr>
                {places.map(place => {
                  const digit = digits[place.key as keyof typeof digits];
                  const value = digit * place.value;
                  return (
                    <td
                      key={`${place.key}-value`}
                      className={`px-1 py-2 text-center border border-gray-300 dark:border-gray-600 ${place.bgLight}`}
                    >
                      <span className={`text-xs font-mono ${place.textColor}`}>
                        {value > 0 ? value.toLocaleString() : '-'}
                      </span>
                    </td>
                  );
                })}
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Expanded Form */}
      {showExpandedForm && expandedParts.length > 0 && (
        <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Expanded Form:</h4>
          <div className="flex flex-wrap items-center gap-2 text-sm font-mono">
            {expandedParts.map((part, index) => (
              <React.Fragment key={part.key}>
                {index > 0 && <span className="text-gray-500 dark:text-gray-400">+</span>}
                <span className={`px-2 py-1 rounded ${part.bgLight} ${part.textColor} font-bold`}>
                  {part.digitValue.toLocaleString()}
                </span>
              </React.Fragment>
            ))}
            <span className="text-gray-500 dark:text-gray-400">=</span>
            <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-gray-900 dark:text-gray-100 font-bold">
              {safeNumber.toLocaleString()}
            </span>
          </div>
        </div>
      )}

      {/* Number in Words */}
      {showWords && (
        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
          <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1">In Words:</h4>
          <p className="text-gray-800 dark:text-gray-200 capitalize">
            {numberToWords(safeNumber)}
          </p>
        </div>
      )}

      {/* Legend for mobile */}
      <div className="mt-4 sm:hidden">
        <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Place Values:</h4>
        <div className="flex flex-wrap gap-1">
          {places.map(place => (
            <span
              key={`legend-${place.key}`}
              className={`text-[10px] px-2 py-1 rounded ${place.color} text-white`}
            >
              {place.shortLabel} = {place.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceValueChartVisualizer;
