# S1 Perimeter and Area - Math Tool Parameter Reference

## Quick Reference: Available Tools

1. **rectangle** - Rectangle perimeter and area visualization
2. **square** - Square perimeter and area visualization
3. **parallelogram** - Parallelogram with perpendicular height (CRITICAL: distinguish from slant side)
4. **trapezium** - Trapezium with parallel sides highlighted and height

---

## 1. RectangleVisualizer

### TypeScript Interface

```typescript
interface RectangleVisualizerProps {
  length?: string;              // length label (e.g., 'l', '12cm', '15')
  width?: string;               // width label (e.g., 'w', '8cm', '10')
  highlightMode?: 'perimeter' | 'area' | 'both' | 'none';
  showFormula?: boolean;        // show perimeter or area formula
  showGrid?: boolean;           // show grid overlay for area counting
  gridSize?: number;            // number of grid divisions (default: 10)
  vertexLabels?: [string, string, string, string]; // [topLeft, topRight, bottomRight, bottomLeft]
  caption?: string;
}
```

### Parameter Details

**Required:** None (all parameters optional)

**Optional:**
- ✅ `length` (string) - length label (e.g., '12cm', 'l', '15')
- ✅ `width` (string) - width label (e.g., '8cm', 'w', '10')
- ✅ `highlightMode` (enum) - 'perimeter' | 'area' | 'both' | 'none'
- ✅ `showFormula` (boolean) - display P = 2(l + w) or A = l × w
- ✅ `showGrid` (boolean) - show grid for counting squares
- ✅ `gridSize` (number) - grid divisions (default: 10)
- ✅ `vertexLabels` (array) - four corner labels [TL, TR, BR, BL]
- ✅ `caption` (string) - explanatory text

### Use Cases for Perimeter and Area

**✅ GOOD - Reviewing Rectangle Perimeter:**
```json
{
  "toolName": "rectangle",
  "parameters": {
    "length": "12cm",
    "width": "8cm",
    "highlightMode": "perimeter",
    "showFormula": true,
    "caption": "Find the perimeter of this rectangle"
  }
}
```

**✅ GOOD - Teaching Area Concept:**
```json
{
  "toolName": "rectangle",
  "parameters": {
    "length": "l",
    "width": "w",
    "highlightMode": "area",
    "showGrid": true,
    "caption": "Area = length × width"
  }
}
```

**❌ BAD - Revealing Answer:**
```json
{
  "problemText": "Calculate the area of a rectangle with length 12cm and width 8cm",
  "mathTool": {
    "parameters": {
      "length": "12cm",
      "width": "8cm",
      "highlightMode": "area",
      "showFormula": true  // ← Shows formula, might reveal calculation method
    }
  }
}
```

---

## 2. SquareVisualizer

### TypeScript Interface

```typescript
interface SquareVisualizerProps {
  side?: string;                // side length label (e.g., 's', '10cm', '15')
  highlightMode?: 'perimeter' | 'area' | 'both' | 'none';
  showFormula?: boolean;        // show P = 4s or A = s²
  showGrid?: boolean;           // show grid overlay
  gridSize?: number;            // number of grid divisions (default: 10)
  showEqualMarks?: boolean;     // show tick marks for equal sides (default: true)
  vertexLabels?: [string, string, string, string]; // [TL, TR, BR, BL]
  caption?: string;
}
```

### Use Cases

**✅ GOOD - Identifying Square Properties:**
```json
{
  "toolName": "square",
  "parameters": {
    "side": "s",
    "showEqualMarks": true,
    "caption": "All sides of a square are equal"
  }
}
```

**✅ GOOD - Distinguishing from Rectangle:**
```json
{
  "toolName": "square",
  "parameters": {
    "side": "10cm",
    "highlightMode": "both",
    "showFormula": true,
    "caption": "Square: P = 4s, A = s²"
  }
}
```

---

## 3. ParallelogramVisualizer

### TypeScript Interface

```typescript
interface ParallelogramVisualizerProps {
  base?: string;                // base length label (e.g., 'b', '12cm')
  height?: string;              // perpendicular height label (e.g., 'h', '8cm')
  slantSide?: string;           // slant side label (e.g., 's', '10cm')
  showPerpendicular?: boolean;  // show perpendicular height line (default: true)
  highlightMode?: 'perimeter' | 'area' | 'both' | 'height' | 'none';
  showFormula?: boolean;        // show formula
  showRightAngle?: boolean;     // show 90° symbol at height (default: true)
  vertexLabels?: [string, string, string, string]; // [BL, BR, TR, TL]
  skewAngle?: number;           // skew angle in degrees (default: 30, range: 15-75)
  showTransformation?: boolean; // show transform-to-rectangle animation
  caption?: string;
}
```

### Parameter Details

**CRITICAL PARAMETERS for Parallelogram:**
- ✅ `showPerpendicular` (boolean) - **MUST be true** to show perpendicular height
- ✅ `showRightAngle` (boolean) - **MUST be true** to show 90° angle marking
- ✅ `highlightMode` - Use 'height' to emphasize perpendicular height vs slant side

### Use Cases for Parallelogram

**✅ GOOD - Teaching Perpendicular Height (CRITICAL):**
```json
{
  "toolName": "parallelogram",
  "parameters": {
    "base": "b",
    "height": "h",
    "slantSide": "s",
    "showPerpendicular": true,
    "showRightAngle": true,
    "highlightMode": "height",
    "caption": "Height is perpendicular to the base (at 90°), NOT the slant side"
  }
}
```

**✅ GOOD - Perimeter (uses slant side):**
```json
{
  "toolName": "parallelogram",
  "parameters": {
    "base": "8cm",
    "slantSide": "5cm",
    "showPerpendicular": false,
    "highlightMode": "perimeter",
    "showFormula": true,
    "caption": "Perimeter = 2(base + slant side)"
  }
}
```

**✅ GOOD - Area (uses perpendicular height):**
```json
{
  "toolName": "parallelogram",
  "parameters": {
    "base": "12cm",
    "height": "7cm",
    "showPerpendicular": true,
    "showRightAngle": true,
    "highlightMode": "area",
    "caption": "Area = base × perpendicular height"
  }
}
```

**✅ GOOD - Transformation to Rectangle:**
```json
{
  "toolName": "parallelogram",
  "parameters": {
    "base": "10cm",
    "height": "6cm",
    "showTransformation": true,
    "highlightMode": "area",
    "caption": "Parallelogram can be rearranged into a rectangle with same area"
  }
}
```

**❌ BAD - Confusing Height with Slant Side:**
```json
{
  "toolName": "parallelogram",
  "parameters": {
    "base": "12cm",
    "slantSide": "10cm",
    "showPerpendicular": false,  // ← Missing perpendicular height
    "highlightMode": "area"       // ← Will confuse students!
  }
}
```

---

## 4. TrapeziumVisualizer

### TypeScript Interface

```typescript
interface TrapeziumVisualizerProps {
  parallelSide1?: string;       // top parallel side label (e.g., 'a', '6cm')
  parallelSide2?: string;       // bottom parallel side label (e.g., 'b', '10cm')
  height?: string;              // perpendicular height label (e.g., 'h', '8cm')
  leftSlant?: string;           // left slant side label (e.g., 'c', '9cm')
  rightSlant?: string;          // right slant side label (e.g., 'd', '9cm')
  showHeight?: boolean;         // show perpendicular height line (default: true)
  highlightParallel?: boolean;  // highlight parallel sides (default: true)
  highlightMode?: 'perimeter' | 'area' | 'height' | 'none';
  showRightAngles?: boolean;    // show 90° symbols at height endpoints (default: true)
  vertexLabels?: [string, string, string, string]; // [BL, BR, TR, TL]
  topSideRatio?: number;        // ratio of top to bottom (0.4-0.8, default: 0.6)
  caption?: string;
}
```

### Parameter Details

**CRITICAL PARAMETERS for Trapezium:**
- ✅ `highlightParallel` (boolean) - **MUST be true** to show which sides are parallel
- ✅ `showHeight` (boolean) - Show perpendicular height between parallel sides
- ✅ `showRightAngles` (boolean) - Show 90° angle markings

### Use Cases for Trapezium

**✅ GOOD - Identifying Parallel Sides (CRITICAL):**
```json
{
  "toolName": "trapezium",
  "parameters": {
    "parallelSide1": "a",
    "parallelSide2": "b",
    "highlightParallel": true,
    "caption": "The two parallel sides are called bases (marked in green)"
  }
}
```

**✅ GOOD - Teaching Trapezium Area:**
```json
{
  "toolName": "trapezium",
  "parameters": {
    "parallelSide1": "6cm",
    "parallelSide2": "10cm",
    "height": "8cm",
    "showHeight": true,
    "highlightParallel": true,
    "highlightMode": "area",
    "caption": "Area = ½(a + b) × h where a and b are parallel sides"
  }
}
```

**✅ GOOD - Trapezium Perimeter:**
```json
{
  "toolName": "trapezium",
  "parameters": {
    "parallelSide1": "10cm",
    "parallelSide2": "6cm",
    "leftSlant": "5cm",
    "rightSlant": "5cm",
    "highlightMode": "perimeter",
    "caption": "Perimeter = sum of all four sides"
  }
}
```

**❌ BAD - Not Highlighting Parallel Sides:**
```json
{
  "problemText": "Identify which sides are parallel",
  "mathTool": {
    "parameters": {
      "parallelSide1": "a",
      "parallelSide2": "b",
      "highlightParallel": false  // ← Should be true to help identification!
    }
  }
}
```

---

## Decision Matrix: When to Include MathTool

### ✅ INCLUDE MathTool

| Question Type | Tool | Why |
|--------------|------|-----|
| "Identify which sides are parallel" | trapezium | Shows trapezium with parallel markers |
| "What is perpendicular height?" | parallelogram | Shows height vs slant side visually |
| "Explain why area = base × height" | parallelogram | Can show transformation animation |
| "Distinguish rectangle from square" | both | Visual comparison of properties |
| "Count squares to find area" | rectangle/square | showGrid helps understand area concept |

### ❌ OMIT MathTool

| Question Type | Why Omit |
|--------------|----------|
| "Calculate area of 12cm × 8cm rectangle" | Student must calculate independently |
| "Find perimeter given all four trapezium sides" | Calculation task, no visual needed |
| "Solve for missing base given area and height" | Algebraic manipulation, not visual |

---

## Critical Guidelines

### Ground Rule #1: Perpendicular Height vs Slant Side

**For Parallelogram:**
- **ALWAYS** set `showPerpendicular: true` when teaching area
- **ALWAYS** set `showRightAngle: true` to mark 90° angle
- Use `highlightMode: 'height'` to emphasize perpendicular height
- NEVER use slant side in area calculations

**Common Student Misconception:**
```
❌ WRONG: Area = base × slant side
✅ CORRECT: Area = base × perpendicular height
```

### Ground Rule #2: Identifying Parallel Sides in Trapezium

**For Trapezium:**
- **ALWAYS** set `highlightParallel: true` when introducing trapeziums
- Parallel sides are marked with matching arrows or color
- Use `showHeight: true` to show perpendicular distance between parallel sides
- Emphasize: `parallelSide1` and `parallelSide2` are bases (a and b in formula)
- Emphasize: `leftSlant` and `rightSlant` are legs (NOT used in area formula)

### Ground Rule #3: Units

- Perimeter uses linear units (cm, m)
- Area uses squared units (cm², m²)
- Always include units in labels when showing specific measurements
- Use variable labels (l, w, b, h, s) for general formulas

### Ground Rule #4: Formula Display

- Use `showFormula: true` to reinforce formula after student attempts
- DO NOT show formula if question asks student to derive or calculate
- Formula display adapts to highlightMode:
  - 'perimeter': Shows perimeter formula
  - 'area': Shows area formula
  - 'both': Shows both formulas

---

## Common Pitfalls

### Pitfall 1: Using Slant Side for Area (Parallelogram)

```json
// ❌ WRONG - Will confuse students about area
{
  "toolName": "parallelogram",
  "parameters": {
    "base": "12cm",
    "slantSide": "10cm",
    "showPerpendicular": false,  // Missing height!
    "highlightMode": "area"
  }
}

// ✅ CORRECT
{
  "toolName": "parallelogram",
  "parameters": {
    "base": "12cm",
    "height": "7cm",
    "showPerpendicular": true,
    "showRightAngle": true,
    "highlightMode": "area"
  }
}
```

### Pitfall 2: Not Highlighting Parallel Sides (Trapezium)

```json
// ❌ WRONG
{
  "toolName": "trapezium",
  "parameters": {
    "parallelSide1": "a",
    "parallelSide2": "b",
    "highlightParallel": false  // Students won't see which are parallel!
  }
}

// ✅ CORRECT
{
  "toolName": "trapezium",
  "parameters": {
    "parallelSide1": "a",
    "parallelSide2": "b",
    "highlightParallel": true,
    "caption": "Parallel sides marked in green"
  }
}
```

### Pitfall 3: Confusing Perimeter and Area Mode

```json
// ❌ WRONG - Highlighting area but asking about perimeter
{
  "problemText": "Find the perimeter",
  "mathTool": {
    "parameters": {
      "highlightMode": "area"  // ← Wrong highlight!
    }
  }
}

// ✅ CORRECT
{
  "problemText": "Find the perimeter",
  "mathTool": {
    "parameters": {
      "highlightMode": "perimeter"
    }
  }
}
```

---

## Testing Checklist

Before finalizing any node:

- [ ] All parameter names match TypeScript interfaces exactly
- [ ] For parallelogram area: `showPerpendicular: true` and `showRightAngle: true`
- [ ] For trapezium: `highlightParallel: true` when teaching properties
- [ ] `highlightMode` matches question intent (perimeter vs area)
- [ ] Labels include units for specific measurements (12cm) or variables (b) for formulas
- [ ] `showFormula` is `false` if student must calculate independently
- [ ] `caption` provides clear explanation without revealing answer
- [ ] MathTool doesn't reveal the answer prematurely

---

**Created:** 2025-01-XX
**For:** S1 Perimeter and Area Exemplar Template
**Reference:** Always check TypeScript interfaces in component files for authoritative definitions
**CRITICAL:** Perpendicular height ≠ Slant side for parallelograms!
