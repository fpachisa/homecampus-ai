/**
 * TableRenderer - Displays structured table data for practice questions
 *
 * Used for questions with tabular data (e.g., pricing tables, data tables)
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface TableData {
  title?: string;
  zones?: Record<string, Record<string, any>>;
  constraints?: Record<string, string>;
  bookSpecs?: Record<string, string>;
  [key: string]: any;
}

interface TableRendererProps {
  tableData: TableData;
  caption?: string;
}

export const TableRenderer: React.FC<TableRendererProps> = ({ tableData, caption }) => {
  const { theme } = useTheme();

  // For Speedpost-style zone tables
  if (tableData.zones) {
    const zones = Object.entries(tableData.zones);
    const firstZone = zones[0]?.[1];
    const weightCategories = firstZone ? Object.keys(firstZone) : [];
    const serviceTypes = firstZone && weightCategories[0]
      ? Object.keys(firstZone[weightCategories[0]])
      : [];

    return (
      <div
        className="my-6 p-4 rounded-xl overflow-hidden"
        style={{
          background: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
        }}
      >
        {/* Title */}
        {tableData.title && (
          <h3
            className="text-lg font-bold mb-4 text-center"
            style={{ color: theme.colors.textPrimary }}
          >
            {tableData.title}
          </h3>
        )}

        {/* Table for each zone */}
        <div className="space-y-6">
          {zones.map(([zoneName, zoneData]) => (
            <div key={zoneName}>
              {/* Zone Header */}
              <h4
                className="font-semibold mb-2 text-sm"
                style={{ color: theme.colors.brand }}
              >
                {zoneName}
              </h4>

              {/* Zone Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: theme.colors.interactive }}>
                      <th
                        className="p-2 text-left font-semibold border"
                        style={{
                          color: theme.colors.textPrimary,
                          borderColor: theme.colors.border,
                        }}
                      >
                        Weight
                      </th>
                      {serviceTypes.map((service) => (
                        <th
                          key={service}
                          className="p-2 text-center font-semibold border"
                          style={{
                            color: theme.colors.textPrimary,
                            borderColor: theme.colors.border,
                          }}
                        >
                          {service.charAt(0).toUpperCase() + service.slice(1)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {weightCategories.map((weight, idx) => (
                      <tr
                        key={weight}
                        style={{
                          backgroundColor:
                            idx % 2 === 0
                              ? theme.colors.surface
                              : theme.colors.panel,
                        }}
                      >
                        <td
                          className="p-2 font-medium border"
                          style={{
                            color: theme.colors.textPrimary,
                            borderColor: theme.colors.border,
                          }}
                        >
                          {weight}
                        </td>
                        {serviceTypes.map((service) => (
                          <td
                            key={service}
                            className="p-2 text-center border"
                            style={{
                              color: theme.colors.textSecondary,
                              borderColor: theme.colors.border,
                            }}
                          >
                            {zoneData[weight][service]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Constraints */}
        {tableData.constraints && (
          <div
            className="mt-4 p-3 rounded-lg text-sm"
            style={{
              backgroundColor: theme.colors.interactive,
              color: theme.colors.textSecondary,
            }}
          >
            <p className="font-semibold mb-1" style={{ color: theme.colors.textPrimary }}>
              Package Constraints:
            </p>
            {Object.entries(tableData.constraints).map(([key, value]) => (
              <p key={key}>
                • {value}
              </p>
            ))}
          </div>
        )}

        {/* Book Specs */}
        {tableData.bookSpecs && (
          <div
            className="mt-2 p-3 rounded-lg text-sm"
            style={{
              backgroundColor: theme.colors.interactive,
              color: theme.colors.textSecondary,
            }}
          >
            <p className="font-semibold mb-1" style={{ color: theme.colors.textPrimary }}>
              Book Specifications:
            </p>
            {Object.entries(tableData.bookSpecs).map(([key, value]) => (
              <p key={key}>
                • {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
              </p>
            ))}
          </div>
        )}

        {/* Caption */}
        {caption && (
          <p
            className="mt-3 text-sm italic text-center"
            style={{ color: theme.colors.textSecondary }}
          >
            {caption}
          </p>
        )}
      </div>
    );
  }

  // Generic table renderer for other table structures
  return (
    <div
      className="my-6 p-4 rounded-xl"
      style={{
        background: theme.glass.background,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
      }}
    >
      <pre className="text-sm" style={{ color: theme.colors.textPrimary }}>
        {JSON.stringify(tableData, null, 2)}
      </pre>
      {caption && (
        <p
          className="mt-3 text-sm italic text-center"
          style={{ color: theme.colors.textSecondary }}
        >
          {caption}
        </p>
      )}
    </div>
  );
};
