# S1 Data Handling - Math Tool Parameter Reference

## Quick Reference: Available Tools

1. **barChart** - Categorical data with frequencies (vertical or horizontal bars)
2. **histogram** - Continuous data with class intervals (NO gaps between bars)
3. **pieChart** - Proportions and parts of a whole (sector angles sum to 360°)
4. **lineChart** - Time-series data showing trends and changes over time

---

## 1. BarChartVisualizer

### TypeScript Interface

```typescript
interface BarChartVisualizerProps {
  categories: string[];           // Category labels (e.g., ['Red', 'Blue', 'Green'])
  values: number[];               // Frequencies/counts for each category
  xLabel?: string;                // X-axis label (e.g., 'Color')
  yLabel?: string;                // Y-axis label (default: 'Frequency')
  title?: string;                 // Chart title
  showValues?: boolean;           // Show values on top of bars (default: true)
  highlightIndex?: number;        // Index of bar to highlight (default: -1, none)
  orientation?: 'vertical' | 'horizontal'; // Bar direction (default: 'vertical')
  caption?: string;               // Optional caption below chart
}
```

### Parameter Details

**Required:**
- ✅ `categories` (string[]) - Array of category names
- ✅ `values` (number[]) - Array of frequencies (MUST match categories length)

**Optional:**
- ✅ `xLabel` (string) - X-axis label
- ✅ `yLabel` (string) - Y-axis label (default: "Frequency")
- ✅ `title` (string) - Chart title
- ✅ `showValues` (boolean) - Display values on bars (default: true)
- ✅ `highlightIndex` (number) - Which bar to highlight (0-indexed, -1 = none)
- ✅ `orientation` (enum) - 'vertical' | 'horizontal' (default: 'vertical')
- ✅ `caption` (string) - Explanatory text below chart

### Use Cases for Data Handling

**✅ GOOD - Comparing Categories:**
```json
{
  "toolName": "barChart",
  "parameters": {
    "categories": ["Red", "Blue", "Green", "Yellow"],
    "values": [12, 18, 8, 15],
    "xLabel": "Color",
    "yLabel": "Frequency",
    "title": "Favorite Colors Survey",
    "orientation": "vertical"
  }
}
```

**✅ GOOD - Horizontal for Long Labels:**
```json
{
  "toolName": "barChart",
  "parameters": {
    "categories": ["Student Government Representative", "Sports Team Captain", "Club President"],
    "values": [45, 62, 38],
    "orientation": "horizontal",
    "yLabel": "Votes"
  }
}
```

**❌ BAD - Revealing Answer:**
```json
{
  "problemText": "From the data, which color is most popular?",
  "mathTool": {
    "parameters": {
      "categories": ["Red", "Blue", "Green"],
      "values": [12, 18, 8],
      "highlightIndex": 1  // ← Highlights Blue, revealing the answer!
    }
  }
}
```

---

## 2. HistogramVisualizer

### TypeScript Interface

```typescript
interface HistogramInterval {
  start: number;      // Class interval start (e.g., 0)
  end: number;        // Class interval end (e.g., 10)
  frequency: number;  // Count in this interval
}

interface HistogramVisualizerProps {
  intervals: HistogramInterval[];  // Array of class intervals with frequencies
  xLabel?: string;                 // X-axis label (e.g., 'Height (cm)')
  yLabel?: string;                 // Y-axis label (default: 'Frequency')
  title?: string;                  // Chart title
  showFrequencies?: boolean;       // Show frequency labels on bars (default: true)
  showMidpoints?: boolean;         // Show class midpoint markers (default: false)
  highlightInterval?: number;      // Index of interval to highlight (default: -1)
  caption?: string;                // Optional caption
}
```

### Parameter Details

**Required:**
- ✅ `intervals` (array of objects) - MUST show complete interval structure:
  ```json
  [
    {"start": 0, "end": 10, "frequency": 5},
    {"start": 10, "end": 20, "frequency": 12},
    {"start": 20, "end": 30, "frequency": 18}
  ]
  ```

**CRITICAL Rules for Intervals:**
- Intervals MUST be contiguous (no gaps)
- End of one interval = Start of next interval
- Intervals are NON-OVERLAPPING
- Example: 0-10, 10-20, 20-30 ✓ (not 0-10, 11-20)

### Use Cases

**✅ GOOD - Grouped Continuous Data:**
```json
{
  "toolName": "histogram",
  "parameters": {
    "intervals": [
      {"start": 140, "end": 150, "frequency": 3},
      {"start": 150, "end": 160, "frequency": 12},
      {"start": 160, "end": 170, "frequency": 18},
      {"start": 170, "end": 180, "frequency": 9}
    ],
    "xLabel": "Height (cm)",
    "yLabel": "Frequency",
    "title": "Student Height Distribution"
  }
}
```

**❌ BAD - Using with Categorical Data:**
```json
{
  "problemText": "Survey of favorite sports",
  "mathTool": {
    "toolName": "histogram"  // ← WRONG! Use barChart for categories!
  }
}
```

---

## 3. PieChartVisualizer

### TypeScript Interface

```typescript
interface PieChartVisualizerProps {
  categories: string[];              // Category labels
  frequencies: number[];             // Counts for each category
  title?: string;                    // Chart title
  showAngles?: boolean;              // Show sector angles (default: true)
  showPercentages?: boolean;         // Show percentages (default: true)
  highlightSector?: number;          // Index of sector to highlight (default: -1)
  showCalculations?: boolean;        // Show angle calculation steps (default: false)
  caption?: string;                  // Optional caption
}
```

### Parameter Details

**Required:**
- ✅ `categories` (string[]) - Category names
- ✅ `frequencies` (number[]) - Counts (MUST match categories length)

**Optional:**
- ✅ `title` (string) - Chart title
- ✅ `showAngles` (boolean) - Display sector angles in degrees (default: true)
- ✅ `showPercentages` (boolean) - Display percentages (default: true)
- ✅ `highlightSector` (number) - Which sector to highlight (0-indexed, -1 = none)
- ✅ `showCalculations` (boolean) - Show angle formula breakdown (default: false)
- ✅ `caption` (string) - Explanatory text

**CRITICAL Parameter: showCalculations**
- Set `true` ONLY when teaching angle calculation formula
- Set `false` when student must calculate angles themselves

### Use Cases

**✅ GOOD - Teaching Proportions:**
```json
{
  "toolName": "pieChart",
  "parameters": {
    "categories": ["Chocolate", "Vanilla", "Strawberry"],
    "frequencies": [15, 10, 5],
    "title": "Ice Cream Preferences",
    "showAngles": true,
    "showPercentages": true,
    "showCalculations": false
  }
}
```

**✅ GOOD - Teaching Angle Calculation:**
```json
{
  "toolName": "pieChart",
  "parameters": {
    "categories": ["A", "B", "C"],
    "frequencies": [12, 8, 4],
    "showAngles": true,
    "showCalculations": true,
    "caption": "Formula: Angle = (Frequency ÷ Total) × 360°"
  }
}
```

**❌ BAD - Revealing Answer in Calculation Problem:**
```json
{
  "problemText": "Calculate the sector angle for each category",
  "mathTool": {
    "parameters": {
      "showCalculations": true  // ← Shows the calculation! Student can't practice!
    }
  }
}
```

---

## 4. LineChartVisualizer

### TypeScript Interface

```typescript
interface LineChartVisualizerProps {
  xLabels: string[];                 // X-axis labels (e.g., ['Jan', 'Feb', 'Mar'])
  yValues: number[];                 // Y-axis values
  xAxisLabel?: string;               // X-axis label (e.g., 'Month')
  yAxisLabel?: string;               // Y-axis label (e.g., 'Temperature (°C)')
  title?: string;                    // Chart title
  showPoints?: boolean;              // Show data point markers (default: true)
  showGrid?: boolean;                // Show gridlines (default: true)
  highlightPoint?: number;           // Index of point to highlight (default: -1)
  trendLine?: boolean;               // Show linear trend line (default: false)
  caption?: string;                  // Optional caption
}
```

### Parameter Details

**Required:**
- ✅ `xLabels` (string[]) - X-axis labels (time points, months, years)
- ✅ `yValues` (number[]) - Y-axis values (MUST match xLabels length)

**Optional:**
- ✅ `xAxisLabel` (string) - X-axis label
- ✅ `yAxisLabel` (string) - Y-axis label
- ✅ `title` (string) - Chart title
- ✅ `showPoints` (boolean) - Show data point markers (default: true)
- ✅ `showGrid` (boolean) - Show gridlines (default: true)
- ✅ `highlightPoint` (number) - Which point to highlight (0-indexed, -1 = none)
- ✅ `trendLine` (boolean) - Show linear trend line (default: false)
- ✅ `caption` (string) - Explanatory text

### Use Cases

**✅ GOOD - Time-Series Data:**
```json
{
  "toolName": "lineChart",
  "parameters": {
    "xLabels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    "yValues": [15, 18, 22, 28, 32, 35],
    "xAxisLabel": "Month",
    "yAxisLabel": "Temperature (°C)",
    "title": "Monthly Average Temperature",
    "showPoints": true,
    "trendLine": false
  }
}
```

**✅ GOOD - Identifying Trends:**
```json
{
  "toolName": "lineChart",
  "parameters": {
    "xLabels": ["2018", "2019", "2020", "2021", "2022"],
    "yValues": [120, 145, 165, 178, 195],
    "title": "Annual Sales",
    "trendLine": true,
    "caption": "Notice the increasing trend"
  }
}
```

**❌ BAD - Using for Categorical Data:**
```json
{
  "problemText": "Compare favorite sports",
  "mathTool": {
    "toolName": "lineChart",  // ← WRONG! Use barChart for categories!
    "xLabels": ["Soccer", "Basketball", "Tennis"]
  }
}
```

---

## Decision Matrix: When to Use Each Tool

### ✅ WHEN TO USE

| Data Type | Best Tool | Why |
|-----------|-----------|-----|
| Categorical data (colors, sports, subjects) | **barChart** | Discrete categories, easy comparison |
| Continuous data with ranges (heights 140-150, 150-160) | **histogram** | Shows distribution, NO gaps between bars |
| Proportions that sum to 100% | **pieChart** | Shows parts of whole visually |
| Time-series or sequential data | **lineChart** | Shows trends, changes over time |

### ❌ COMMON MISTAKES

| Mistake | Why Wrong | Correct Approach |
|---------|-----------|------------------|
| Using pieChart for trends | Pie charts don't show time | Use lineChart for time-series |
| Using lineChart for categories | Lines imply continuity between unrelated categories | Use barChart for discrete categories |
| Using barChart for continuous ranges | Has gaps between bars, doesn't show continuity | Use histogram (NO gaps) |
| Using histogram for categorical | Histogram requires numerical intervals | Use barChart for categories |

---

## Critical Guidelines

### Ground Rule #1: Array Lengths Must Match

**ALWAYS ensure:**
- `categories.length === values.length` (barChart)
- `categories.length === frequencies.length` (pieChart)
- `xLabels.length === yValues.length` (lineChart)

### Ground Rule #2: Complex Structures Must Be Explicit

**For histogram intervals:**
```json
// ✅ CORRECT - Show complete structure
"intervals": [
  {"start": 0, "end": 10, "frequency": 5},
  {"start": 10, "end": 20, "frequency": 12}
]

// ❌ WRONG - Too vague
"intervals": "variable"
```

### Ground Rule #3: Pie Chart Angle Calculations

**CRITICAL FORMULA:** Angle = (Frequency ÷ Total) × 360°

- Set `showCalculations: true` ONLY when teaching the formula
- Set `showCalculations: false` when student must calculate independently
- ALWAYS verify angles sum to 360°

### Ground Rule #4: When to Show vs Hide Answers

| Parameter | Show (true) | Hide (false) |
|-----------|-------------|--------------|
| `showValues` (barChart) | After student analyzes | When student must read graph |
| `showCalculations` (pieChart) | Teaching angle formula | Student calculating angles |
| `trendLine` (lineChart) | Teaching trend identification | Student must identify trend |
| `highlightIndex/Sector/Point` | AFTER answer given | When student must find maximum/minimum |

---

## Common Pitfalls

### Pitfall 1: Wrong Tool for Data Type

```json
// ❌ WRONG - Using line chart for categorical data
{
  "problemText": "Compare favorite fruits",
  "mathTool": {
    "toolName": "lineChart",
    "xLabels": ["Apple", "Banana", "Orange"]  // These are categories, not sequential!
  }
}

// ✅ CORRECT
{
  "toolName": "barChart",
  "categories": ["Apple", "Banana", "Orange"],
  "values": [15, 22, 18]
}
```

### Pitfall 2: Revealing Answer with Highlighting

```json
// ❌ WRONG - Highlighting reveals which is largest
{
  "problemText": "Which category has the highest frequency?",
  "mathTool": {
    "parameters": {
      "highlightIndex": 2  // Shows the answer!
    }
  }
}

// ✅ CORRECT
{
  "parameters": {
    "highlightIndex": -1  // No highlighting, student must analyze
  }
}
```

### Pitfall 3: Histogram vs Bar Chart Confusion

```json
// ❌ WRONG - Using histogram for categorical data
{
  "toolName": "histogram",
  "intervals": [
    {"start": 0, "end": 1, "frequency": 12},  // This represents "Red"? Doesn't make sense!
    {"start": 1, "end": 2, "frequency": 18}   // "Blue"?
  ]
}

// ✅ CORRECT - Use barChart for categories
{
  "toolName": "barChart",
  "categories": ["Red", "Blue", "Green"],
  "values": [12, 18, 8]
}
```

### Pitfall 4: Non-Contiguous Histogram Intervals

```json
// ❌ WRONG - Gaps in intervals
"intervals": [
  {"start": 0, "end": 10, "frequency": 5},
  {"start": 11, "end": 20, "frequency": 8}  // GAP! Where does 10.5 go?
]

// ✅ CORRECT - Contiguous intervals
"intervals": [
  {"start": 0, "end": 10, "frequency": 5},
  {"start": 10, "end": 20, "frequency": 8}  // No gap, 10 belongs to second interval
]
```

---

## Testing Checklist

Before finalizing any node:

- [ ] Correct tool chosen based on data type
- [ ] All required parameters provided
- [ ] Array lengths match where required
- [ ] Complex structures (histogram intervals) shown explicitly
- [ ] `showCalculations`, `highlightIndex`, etc. don't reveal answers
- [ ] Histogram intervals are contiguous (no gaps)
- [ ] Pie chart data suitable for proportions (parts of whole)
- [ ] Line chart used only for sequential/time-series data
- [ ] Caption provides context without revealing answer

---

**Created:** 2025-01-XX
**For:** S1 Data Handling Exemplar Template
**Reference:** Always check TypeScript interfaces in component files for authoritative definitions
**CRITICAL:** Choose tool based on data type: categorical → barChart, continuous → histogram, proportions → pieChart, time-series → lineChart
