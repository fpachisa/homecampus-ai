# Schema Documentation

## Supported JSON Structures

The extraction pipeline supports both **flat** and **nested** question structures.

### Flat Structure (Claude style)

```json
{
  "questions": [
    {
      "question": "A temperature T°C at time t hours is modeled by...",
      "parts": [
        {
          "label": "a",
          "text": "Find the initial temperature when t = 0.",
          "answer": "25°C"
        },
        {
          "label": "b",
          "text": "Calculate the temperature after 3 hours.",
          "answer": "12.3°C"
        }
      ]
    }
  ]
}
```

### Nested Structure (Gemini style, preferred)

```json
{
  "questions": [
    {
      "question": "Let $f(x) = \\ln(2x+4)+3$ for $-2<x<3$.",
      "parts": [
        {
          "label": "a",
          "text": "For the graph of $f$,",
          "sub_parts": [
            {
              "label": "a-i",
              "text": "find the $x$-intercept",
              "answer": "$x = -1.98$"
            },
            {
              "label": "a-ii",
              "text": "find the $y$-intercept",
              "answer": "$y = 4.39$"
            }
          ]
        },
        {
          "label": "b",
          "text": "Hence, sketch the graph of $f$",
          "answer": ""
        }
      ]
    }
  ]
}
```

## Normalization Process

The extraction script automatically normalizes nested structures into a flat format:

**Input (nested):**
```json
{
  "label": "a",
  "text": "For the graph of f,",
  "sub_parts": [
    {"label": "a-i", "text": "find the x-intercept", "answer": "..."},
    {"label": "a-ii", "text": "find the y-intercept", "answer": "..."}
  ]
}
```

**Output (flat with context):**
```json
[
  {
    "label": "a-i",
    "text": "find the x-intercept",
    "answer": "...",
    "parentLabel": "a",
    "parentText": "For the graph of f,"
  },
  {
    "label": "a-ii",
    "text": "find the y-intercept",
    "answer": "...",
    "parentLabel": "a",
    "parentText": "For the graph of f,"
  }
]
```

## Why Nested Structure is Better

✅ **Preserves hierarchy** - (a)(i), (a)(ii) structure is clear
✅ **Cleaner question text** - No metadata clutter
✅ **Logical grouping** - Related sub-questions stay together
✅ **Better for AI understanding** - Context is explicit

## LaTeX Formatting Rules

### In JSON Source (What AI should output)
- Use **single backslash**: `"\\sin"`, `"\\theta"`, `"e^{-kt}"`
- Dollar delimiters for math: `"$x^2 + 3x$"`
- Currency outside math: `"\\$1000"` (NOT `"$\\$1000$"`)

### After JSON Parsing (JavaScript string)
- Still single backslash: `\sin`, `\theta`
- Ready for KaTeX rendering

### Examples

| PDF Text | JSON String | After Parsing | KaTeX Result |
|----------|-------------|---------------|--------------|
| sin θ | `"$\\sin \\theta$"` | `$\sin \theta$` | sin θ |
| e^(-kt) | `"$e^{-kt}$"` | `$e^{-kt}$` | e^(-kt) |
| $1,500 | `"\\$1,500"` | `\$1,500` | $1,500 |

## Field Definitions

### Question Object
- `question` (string): Main question stem/context
- `parts` (array): Array of question parts

### Part Object
- `label` (string): Part identifier ("a", "b", "a-i", etc.)
- `text` (string): Question text for this part
- `answer` (string): Final answer (empty if not visible in PDF)
- `sub_parts` (array, optional): Nested sub-questions
- `parentLabel` (string, optional): Added during normalization
- `parentText` (string, optional): Added during normalization

## Integration Notes

The rest of the pipeline (filter, combine, generate-solutions, format-yaml) works with the normalized flat structure. The nested structure is only used during extraction and immediately flattened.

This design allows:
- AI providers to use their preferred structure
- Consistent processing in downstream steps
- Parent context preservation throughout pipeline
