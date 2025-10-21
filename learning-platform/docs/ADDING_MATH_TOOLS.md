# Adding New Math Tools

This guide explains how to add new visual math tools (visualizers) to the AI Campus platform.

## Overview

Math tools are interactive React components that help students visualize mathematical concepts. They are:
- **Centrally registered** in `mathToolsRegistry.ts` (single source of truth)
- **Rendered dynamically** by `MathToolRenderer.tsx`
- **Used by AI** to generate visual explanations in both Socratic and Practice modes

## Architecture

```
src/
├── components/
│   └── math-tools/
│       ├── mathToolsRegistry.ts        ← Central registry (add definition here)
│       ├── YourNewVisualizer.tsx       ← Your React component
│       ├── MathToolRenderer.tsx        ← Renderer (add switch case)
│       └── index.ts                    ← Exports (optional update)
└── prompts/
    └── topics/
        └── YourTopic.ts                ← Add tool to MATH_TOOLS_AVAILABLE
```

---

## Step-by-Step Guide

### 1. Create Your Visualizer Component

Create a new React component in `src/components/math-tools/`:

```tsx
// src/components/math-tools/MyNewVisualizer.tsx

import React from 'react';

interface MyNewVisualizerProps {
  // Define your parameters
  value: string;
  showLabel?: boolean;
  highlightElement?: 'none' | 'value';
  // ... more parameters
}

const MyNewVisualizer: React.FC<MyNewVisualizerProps> = ({
  value,
  showLabel = true,
  highlightElement = 'none'
}) => {
  return (
    <svg width="400" height="300" viewBox="0 0 400 300">
      {/* Your visualization code */}
      <text x="200" y="150" textAnchor="middle">
        {value}
      </text>
    </svg>
  );
};

export default MyNewVisualizer;
```

**Best Practices:**
- Use SVG for scalable, resolution-independent graphics
- Make parameters optional with sensible defaults
- Use TypeScript interfaces for type safety
- Keep components pure and stateless where possible

---

### 2. Register in Central Registry

Add your tool definition to `mathToolsRegistry.ts`:

```typescript
// src/components/math-tools/mathToolsRegistry.ts

export const MATH_TOOLS_REGISTRY: Record<string, MathToolDefinition> = {
  // ... existing tools

  myNewTool: {
    name: "My New Visualizer",
    technicalName: "myNewTool",  // ← Use this in AI prompts
    component: "MyNewVisualizer",
    category: "geometry-3d", // or "trigonometry", "circle", "quadratic", "general"

    description: "Clear description of what this tool does and when to use it.",
    whenToUse: "Use when teaching [specific concept]. Perfect for [specific scenarios].",

    parameters: {
      value: "string - description of value parameter (e.g., '10', 'x', '5cm')",
      showLabel: "boolean (default: true) - whether to show label",
      highlightElement: "'none' | 'value' - which element to highlight in red"
    },

    exampleUsage: {
      scenario: "Teaching example scenario",
      caption: "Caption that AI can use to describe the visualization",
      parameters: {
        value: "10",
        showLabel: true,
        highlightElement: "value"
      }
    }
  }
};
```

**Registry Field Guidelines:**

| Field | Required | Description |
|-------|----------|-------------|
| `name` | ✅ | Display name (human-readable) |
| `technicalName` | ✅ | **CRITICAL:** This is what AI uses in `toolName` field |
| `component` | ✅ | React component name (must match file export) |
| `category` | ✅ | Tool category for filtering |
| `description` | ✅ | What the tool does |
| `whenToUse` | ✅ | When AI should use this tool |
| `parameters` | ✅ | All parameters with types and descriptions |
| `exampleUsage` | ✅ | Working example with actual parameter values |

---

### 3. Add to MathToolRenderer

Add a switch case in `MathToolRenderer.tsx`:

```tsx
// src/components/practice/MathToolRenderer.tsx

import MyNewVisualizer from '../math-tools/MyNewVisualizer';

// ... existing imports

const renderTool = () => {
  switch (toolName) {
    // ... existing cases

    case 'myNewTool':
      return <MyNewVisualizer {...parameters} />;

    // ... rest of cases
  }
};
```

**Important:** The case must match the `technicalName` in the registry.

---

### 4. Add to Topic Configuration (if topic-specific)

If your tool is specific to a topic, add it to the topic's available tools:

```typescript
// src/prompts/topics/S3-Math-YourTopic.ts

export const S3_MATH_YOUR_TOPIC_CONFIG = {
  // ... other config

  MATH_TOOLS_AVAILABLE: [
    "existingTool1",
    "existingTool2",
    "myNewTool"  // ← Add your tool here
  ],

  // ... rest of config
};
```

---

### 5. Test Your Tool

#### Manual Testing

Create a test page or use existing practice mode:

```typescript
const testTool = {
  toolName: "myNewTool",
  parameters: {
    value: "42",
    showLabel: true,
    highlightElement: "value"
  },
  caption: "Test visualization"
};

// Use MathToolRenderer
<MathToolRenderer {...testTool} />
```

#### Test with AI

The AI will automatically have access to your tool. Test by:
1. Starting a practice session in your topic
2. Observing if AI uses the tool appropriately
3. Checking the tool renders correctly with AI-generated parameters

---

## Complete Example: Adding a "Graph Visualizer"

### 1. Create Component

```tsx
// src/components/math-tools/GraphVisualizer.tsx
import React from 'react';

interface GraphVisualizerProps {
  equation: string;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  showAxes?: boolean;
  showGrid?: boolean;
  highlightPoint?: { x: number; y: number } | null;
}

const GraphVisualizer: React.FC<GraphVisualizerProps> = ({
  equation,
  xMin,
  xMax,
  yMin,
  yMax,
  showAxes = true,
  showGrid = false,
  highlightPoint = null
}) => {
  // Implementation
  return (
    <svg width="500" height="400" viewBox="0 0 500 400">
      {/* Graph rendering */}
    </svg>
  );
};

export default GraphVisualizer;
```

### 2. Register in Registry

```typescript
// mathToolsRegistry.ts
graphVisualizer: {
  name: "Graph Visualizer",
  technicalName: "graphVisualizer",
  component: "GraphVisualizer",
  category: "general",

  description: "Plots functions on a coordinate plane. Supports any mathematical function.",
  whenToUse: "Use when teaching functions, graphs, or coordinate geometry. Perfect for visualizing y = f(x).",

  parameters: {
    equation: "string - the equation to plot (e.g., 'y = 2x + 3', 'y = x²')",
    xMin: "number - minimum x value",
    xMax: "number - maximum x value",
    yMin: "number - minimum y value",
    yMax: "number - maximum y value",
    showAxes: "boolean (default: true) - show x and y axes",
    showGrid: "boolean (default: false) - show coordinate grid",
    highlightPoint: "object | null - point to highlight: {x: number, y: number}"
  },

  exampleUsage: {
    scenario: "Plotting linear function y = 2x + 3",
    caption: "Graph of y = 2x + 3 showing y-intercept at (0, 3)",
    parameters: {
      equation: "y = 2x + 3",
      xMin: -5,
      xMax: 5,
      yMin: -5,
      yMax: 15,
      showAxes: true,
      showGrid: true,
      highlightPoint: { x: 0, y: 3 }
    }
  }
}
```

### 3. Add to Renderer

```tsx
// MathToolRenderer.tsx
import GraphVisualizer from '../math-tools/GraphVisualizer';

case 'graphVisualizer':
  return <GraphVisualizer {...parameters} />;
```

### 4. Add to Topics

```typescript
// S3-Math-Functions.ts
MATH_TOOLS_AVAILABLE: [
  "rightTriangle",
  "generalTriangle",
  "graphVisualizer"  // ← New tool
],
```

### 5. Test

The AI can now use it:

```json
{
  "mathTool": {
    "toolName": "graphVisualizer",
    "parameters": {
      "equation": "y = x²",
      "xMin": -5,
      "xMax": 5,
      "yMin": -2,
      "yMax": 25,
      "showAxes": true,
      "showGrid": true,
      "highlightPoint": { "x": 0, "y": 0 }
    },
    "caption": "Parabola opening upward with vertex at origin"
  }
}
```

---

## Common Patterns

### Pattern 1: Highlighting Elements

Many tools allow highlighting specific parts:

```typescript
parameters: {
  highlightSide: "'a' | 'b' | 'c' | 'none' - which side to highlight in red",
  highlightAngle: "'A' | 'B' | 'C' | 'none' - which angle to highlight"
}
```

### Pattern 2: Show/Hide Toggles

Give control over what's displayed:

```typescript
parameters: {
  showLabels: "boolean (default: true) - show element labels",
  showAngles: "boolean (default: true) - show angle arcs",
  showMeasurements: "boolean (default: false) - show measurements"
}
```

### Pattern 3: Optional Custom Labels

Allow AI to customize labels:

```typescript
parameters: {
  sideA: "string (optional) - label for side a (e.g., '10', '10cm', 'x')",
  angleLabel: "string (optional) - custom label for angle (e.g., 'θ', '45°')"
}
```

### Pattern 4: Multiple Examples

If tool is versatile, provide multiple examples:

```typescript
exampleUsage: [
  {
    scenario: "Acute triangle",
    caption: "Triangle with all angles less than 90°",
    parameters: { /* ... */ }
  },
  {
    scenario: "Obtuse triangle",
    caption: "Triangle with one angle greater than 90°",
    parameters: { /* ... */ }
  }
]
```

---

## AI Usage Guidelines

### In Registry (`whenToUse`)

Be specific about when AI should use your tool:

```typescript
whenToUse: "Use for right triangle problems involving SOH-CAH-TOA. CRITICAL: Use angle:null when asking students to find the angle."
```

### Parameter Descriptions

Include:
- **Type**: What type of value is expected
- **Examples**: Concrete examples of valid values
- **Special cases**: Important behavior (e.g., "null to show 'θ'")
- **Defaults**: Default values if optional

```typescript
parameters: {
  angle: "number (0-90) | null - angle in degrees, or null to show 'θ'. Use null when asking students to find the angle.",
  label: "string - side label (e.g., '10', '10m', 'h', 'x')"
}
```

---

## Best Practices

### ✅ DO

- **Use descriptive parameter names** (`highlightSide` not `hl`)
- **Provide sensible defaults** for optional parameters
- **Include clear examples** with actual working parameter values
- **Document special behaviors** (e.g., "null displays θ")
- **Use TypeScript** for type safety
- **Make tools reusable** across multiple topics when possible
- **Test with real AI prompts** to ensure it works as expected

### ❌ DON'T

- **Don't duplicate tools** - reuse existing ones when possible
- **Don't use generic names** - be specific (e.g., "RightTriangleVisualizer" not "TriangleVisualizer")
- **Don't hardcode values** - make everything parameterizable
- **Don't skip documentation** - undocumented tools won't be used by AI
- **Don't forget the renderer** - tool must be in MathToolRenderer switch

---

## Troubleshooting

### Issue: AI doesn't use my tool

**Check:**
1. Is `technicalName` correct in registry?
2. Is tool added to topic's `MATH_TOOLS_AVAILABLE`?
3. Is `whenToUse` description clear?
4. Are example parameters valid and realistic?

### Issue: Tool doesn't render

**Check:**
1. Is component imported in `MathToolRenderer.tsx`?
2. Is switch case added with correct `technicalName`?
3. Are parameter names exactly matching component props?
4. Check browser console for React errors

### Issue: Tool renders incorrectly

**Check:**
1. Are parameter types correct? (string vs number)
2. Are optional parameters handled with defaults?
3. Are values validated before rendering?
4. Test with example parameters from registry

### Issue: "Unknown tool name: myTool"

**Cause:** MathToolRenderer doesn't have a case for your tool

**Fix:** Add switch case in `MathToolRenderer.tsx`:

```tsx
case 'myTool':
  return <MyToolVisualizer {...parameters} />;
```

---

## Registry Helper Functions

The registry provides helper functions you can use:

```typescript
import {
  getToolDefinition,
  getToolsByCategory,
  getFilteredTools,
  toolExists,
  getAllToolNames
} from '../components/math-tools/mathToolsRegistry';

// Get single tool definition
const tool = getToolDefinition('rightTriangle');

// Get all trigonometry tools
const trigTools = getToolsByCategory('trigonometry');

// Get specific tools
const filtered = getFilteredTools(['rightTriangle', 'cuboid', 'pyramid']);

// Check if tool exists
if (toolExists('myNewTool')) {
  // Use tool
}

// Get all available tool names
const allTools = getAllToolNames();
```

---

## Categories

Choose the appropriate category for your tool:

| Category | Description | Examples |
|----------|-------------|----------|
| `trigonometry` | Right triangles, angles, ratios | RightTriangle, ElevationDepression |
| `geometry-3d` | 3D shapes and visualizations | Cuboid, Pyramid |
| `circle` | Circle geometry and theorems | CircleBasic, CircleTangent |
| `quadratic` | Quadratic equations and parabolas | ParabolaGraph, FactoringVisualizer |
| `general` | General purpose, multiple topics | GeneralTriangle, GraphVisualizer |

---

## Summary Checklist

When adding a new math tool:

- [ ] Create React component in `src/components/math-tools/`
- [ ] Add definition to `mathToolsRegistry.ts` with all required fields
- [ ] Import and add switch case in `MathToolRenderer.tsx`
- [ ] Add to relevant topic's `MATH_TOOLS_AVAILABLE` array
- [ ] Test rendering with example parameters
- [ ] Test with AI-generated parameters
- [ ] Document any special behaviors or edge cases

---

## Need Help?

- **Registry reference:** `src/components/math-tools/mathToolsRegistry.ts`
- **Example tools:** Check existing visualizers like `RightTriangleVisualizer.tsx`
- **Renderer:** `src/components/practice/MathToolRenderer.tsx`
- **Topic configs:** `src/prompts/topics/`

For complex visualizations, refer to existing tools with similar functionality and adapt their patterns.
