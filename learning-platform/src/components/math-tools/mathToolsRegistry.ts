/**
 * Math Tools Registry - Centralized repository for all visual math tools
 *
 * SINGLE SOURCE OF TRUTH for:
 * - Tool definitions and metadata
 * - Parameter specifications
 * - AI usage guidelines
 * - Component mappings
 *
 * This registry is used by:
 * - MathToolRenderer.tsx (runtime component selection)
 * - Topic configuration files (specifying available tools)
 * - AI prompt system (tool documentation for AI)
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface ToolParameter {
  name: string;
  type: string;
  description: string;
  default?: any;
  required?: boolean;
}

export interface ToolExample {
  scenario: string;
  caption: string;
  parameters: Record<string, any>;
}

export interface MathToolDefinition {
  // Basic Info
  name: string;                    // Display name
  technicalName: string;           // Key used in code
  component: string;               // React component name
  category: 'trigonometry' | 'geometry-3d' | 'circle' | 'quadratic' | 'exponential-logarithm' | 'sets' | 'statistics' | 'general' | 'coordinate-geometry' | 'calculus' | 'probability';

  // Documentation
  description: string;             // What this tool does
  whenToUse: string;              // When AI should use this tool

  // Parameters
  parameters: Record<string, string>;  // parameter: description

  // Examples
  exampleUsage: ToolExample | ToolExample[];
}

// ============================================
// TOOL REGISTRY
// ============================================

export const MATH_TOOLS_REGISTRY: Record<string, MathToolDefinition> = {

  // ============================================
  // TRIGONOMETRY TOOLS
  // ============================================

  rightTriangle: {
    name: "Right Triangle Visualizer",
    technicalName: "rightTriangle",
    component: "RightTriangleVisualizer",
    category: "trigonometry",
    description: "Interactive right triangle for teaching trig ratios (sine, cosine, tangent) and solving for unknown sides or angles.",
    whenToUse: "Use for basic trigonometry problems involving right triangles, finding sides or angles using sin/cos/tan.",

    parameters: {
      angle: "number (20-90) or null when asking students to find the angle or Trigonometric Ratios (Sine, Cosine and Tangent) or identifying sides",
      angleLabel: "string (optional, default: 'θ') - label for the angle arc (Only Unicode characters allowed)",
      hypotenuse: "string - label for hypotenuse (e.g., '10', '10m', 'h')",
      opposite: "string - label for opposite side (e.g., 'x', '5', '5cm')",
      adjacent: "string - label for adjacent side (e.g., 'y', '8', '8m')",
      highlightSide: "'opposite' | 'adjacent' | 'hypotenuse' | 'none' - which side to highlight in red. Do not highlight when asking students to identify sides.",
      showAngleMark: "boolean - show the angle arc and label",
      showRightAngle: "boolean - show the right angle marker",
      showSideTypeLabels: "boolean (default: false) - show '(Opposite)', '(Adjacent)', '(Hypotenuse)' labels. Set false when asking students to identify sides."
    },

    exampleUsage:[
        {
        scenario: "Finding opposite side with known angle",
        caption: "Find the opposite side x when angle=35° and hypotenuse=10",
        parameters: {
          angle: 35,
          angleLabel: "",
          hypotenuse: "10",
          opposite: "x",
          adjacent: "",
          highlightSide: "opposite",
          showAngleMark: true,
          showRightAngle: true,
          showSideTypeLabels: false}
        },
        { 
        scenario: "Asking students to identify sides",
        caption: "A right triangle with side A, B and C with angle θ.",
        parameters: {
          angle: null,
          angleLabel: "θ",
          hypotenuse: "A",
          opposite: "B",
          adjacent: "C",
          highlightSide: "none",
          showAngleMark: true,
          showRightAngle: true,
          showSideTypeLabels: true}
        }
    ]

  },

  unitCircle: {
    name: "Unit Circle Visualizer",
    technicalName: "unitCircle",
    component: "UnitCircleVisualizer",
    category: "trigonometry",
    description: "Interactive unit circle visualization showing the relationship between angles and coordinates (cos θ, sin θ). Supports special angles, reference triangles, ASTC quadrant rules, and both degree/radian modes.",
    whenToUse: "Use for teaching unit circle fundamentals, special angle values (30°, 45°, 60°, 90°), quadrant signs (ASTC), Pythagorean identity, radian measure, or any problem involving circular trigonometry. Perfect for demonstrating how cos and sin relate to x and y coordinates on the unit circle.",

    parameters: {
      angle: "number (optional, default: 45) - angle in degrees to display. Use common values like 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330 for special angles",
      showPoint: "boolean (optional, default: true) - show point P at (cos θ, sin θ) on the circle",
      showTriangle: "boolean (optional, default: false) - show reference right triangle connecting origin to point P, with legs showing cos θ and sin θ. Use when teaching how sin/cos relate to unit circle or Pythagorean identity",
      showQuadrants: "boolean (optional, default: false) - lightly highlight all four quadrants with different shading. Use when teaching quadrant concepts",
      showSpecialAngles: "boolean (optional, default: false) - mark and label special angles at 30°, 45°, 60°, 90°, etc. around the circle. Use when teaching special angle values or asking students to identify angles",
      highlightQuadrant: "1 | 2 | 3 | 4 (optional) - highlight a specific quadrant (1=top-right, 2=top-left, 3=bottom-left, 4=bottom-right). Use when focusing on signs in a particular quadrant",
      showCoordinates: "boolean (optional, default: true) - display the (cos θ, sin θ) coordinates next to point P. Set false when asking students to find the coordinates",
      showASTC: "boolean (optional, default: false) - show ASTC labels in each quadrant (All-Sin-Tan-Cos). Use when teaching which trig functions are positive in each quadrant",
      showAngleArc: "boolean (optional, default: true) - show arc from positive x-axis to the angle θ. Set false for cleaner display when arc is not needed",
      angleMode: "'degrees' | 'radians' (optional, default: 'degrees') - display angles in degrees or radians. Use 'radians' when teaching radian measure or converting between degrees/radians"
    },

    exampleUsage: [
      {
        scenario: "Basic unit circle at 45°",
        caption: "Point P at 45° on the unit circle shows cos(45°) and sin(45°)",
        parameters: {
          angle: 45,
          showPoint: true,
          showCoordinates: true,
          showAngleArc: true
        }
      },
      {
        scenario: "Teaching reference triangle and Pythagorean identity",
        caption: "Reference triangle shows that (cos θ)² + (sin θ)² = 1",
        parameters: {
          angle: 30,
          showPoint: true,
          showTriangle: true,
          showCoordinates: true,
          showAngleArc: true
        }
      },
      {
        scenario: "Special angles marked for reference",
        caption: "All special angles marked on the unit circle",
        parameters: {
          angle: 60,
          showPoint: true,
          showSpecialAngles: true,
          showCoordinates: true
        }
      },
      {
        scenario: "ASTC demonstration in quadrant 2",
        caption: "Quadrant 2: Only sine is positive (S in ASTC)",
        parameters: {
          angle: 120,
          showPoint: true,
          showASTC: true,
          highlightQuadrant: 2,
          showCoordinates: true
        }
      },
      {
        scenario: "Radian mode for advanced students",
        caption: "Unit circle with angles displayed in radians",
        parameters: {
          angle: 60,
          showPoint: true,
          showSpecialAngles: true,
          showCoordinates: true,
          angleMode: "radians"
        }
      },
      {
        scenario: "Finding coordinates (coordinates hidden for student to determine)",
        caption: "What are the coordinates of point P at θ = 135°?",
        parameters: {
          angle: 135,
          showPoint: true,
          showCoordinates: false,
          showAngleArc: true,
          showTriangle: true
        }
      }
    ]
  },

  elevationDepression: {
    name: "Elevation and Depression Angle Visualizer",
    technicalName: "elevationDepression",
    component: "ElevationDepressionVisualizer",
    category: "trigonometry",
    description: "Visualizes angles of elevation (looking up) and depression (looking down) with observer, target, horizontal reference line, and right triangle overlay.",
    whenToUse: "Use for elevation/depression word problems. Use type='elevation' when observer looks UP, type='depression' when observer looks DOWN.",

    parameters: {
      type: "'elevation' | 'depression' - type of angle problem",
      angle: "number (0-90) | null - the angle in degrees, or null/0 to show 'θ'",
      height: "string - label for vertical distance (e.g., '50m', 'h')",
      distance: "string - label for horizontal distance (e.g., '100m', 'd')",
      observerLabel: "string (optional, default: 'Observer') - e.g., 'Person', 'Boat', 'Plane'",
      targetLabel: "string (optional, default: 'Target') - e.g., 'Top of building', 'Boat'",
      showTriangle: "boolean (default: true) - show right triangle overlay",
      showRightAngle: "boolean (default: true) - show right angle marker",
      highlightSide: "'height' | 'distance' | 'hypotenuse' | 'none'"
    },

    exampleUsage: {
      scenario: "Angle of elevation problem",
      caption: "A person 50m from a building looks up at 35°. Find the height h.",
      parameters: {
        type: "elevation",
        angle: 35,
        height: "h",
        distance: "50m",
        observerLabel: "Person",
        targetLabel: "Top of building",
        showTriangle: true,
        showRightAngle: true,
        highlightSide: "height"
      }
    }
  },

  multipleDepressionAngles: {
    name: "Multiple Depression Angles Visualizer",
    technicalName: "multipleDepressionAngles",
    component: "MultipleDepressionAnglesVisualizer",
    category: "trigonometry",
    description: "Visualizes problems with one observer at elevated position looking down at multiple targets at different angles of depression.",
    whenToUse: "Use for complex problems like 'From cliff Q, angles of depression to boats A and B are 62° and 36°.'",

    parameters: {
      observerPoint: "string (default: 'Q') - label for observer at top",
      basePoint: "string (default: 'P') - label for base point at bottom",
      height: "string - label for vertical height (e.g., '130 m', 'h')",
      targets: "Array<{label, angle, angleLabel?, distance?, showDistance?}> - array of ground-level targets",
      showRightAngles: "boolean (default: true) - show right angle markers",
      showHorizontalLine: "boolean (default: true) - show ground/sea level",
      highlightTarget: "number (default: -1) - index of target to highlight (0=first, -1=none)"
    },

    exampleUsage: {
      scenario: "Cliff problem with two boats",
      caption: "Observer at cliff Q (height 130m) looking at boats A and B with depression angles 62° and 36°.",
      parameters: {
        observerPoint: "Q",
        basePoint: "P",
        height: "130 m",
        targets: [
          { label: "A", angle: 62, angleLabel: "62°", showDistance: false },
          { label: "B", angle: 36, angleLabel: "36°", distance: "AB", showDistance: true }
        ],
        showRightAngles: true,
        showHorizontalLine: true,
        highlightTarget: -1
      }
    }
  },

  generalTriangle: {
    name: "General Triangle Visualizer",
    technicalName: "generalTriangle",
    component: "GeneralTriangleVisualizer",
    category: "general",
    description: "Visualizes any triangle (acute, obtuse, right) with labeled sides and angles. Use for sine rule, cosine rule, and area formula. IMPORTANT: Only ONE angle can be obtuse (>90°) at a time.",
    whenToUse: "Use for non-right triangles, sine/cosine rule problems, or when teaching triangle area formula (Area = ½ab sin C). For obtuse triangles, ensure only ONE angle is > 90°.",

    parameters: {
      sideA: "string (optional) - label for side a (opposite angle A)",
      sideB: "string (optional) - label for side b (opposite angle B)",
      sideC: "string (optional) - label for side c (opposite angle C)",
      angleA: "number (30-150) | null - angle A in degrees. Only angleA can be obtuse (>90°).",
      angleB: "number (30-80) | null - angle B in degrees.",
      angleC: "number (30-80) | null - angle C in degrees",
      angleA_label: "string (optional) - custom label for angle A arc (e.g., 'θ', '$45^{\\circ}$')",
      angleB_label: "string (optional) - custom label for angle B arc",
      angleC_label: "string (optional) - custom label for angle C arc",
      vertexA_label: "string (optional, default: 'A') - vertex A label (e.g., 'P', 'X')",
      vertexB_label: "string (optional, default: 'B') - vertex B label",
      vertexC_label: "string (optional, default: 'C') - vertex C label",
      highlightSide: "'a' | 'b' | 'c' | 'none'",
      highlightAngle: "'A' | 'B' | 'C' | 'none'",
      showAngles: "boolean (default: true) - show angle arcs",
      showSides: "boolean (default: true) - show side labels",
      triangleType: "'acute' | 'obtuse' | 'right' | 'auto' (default: 'auto')",
      showAmbiguousCase: "boolean (default: false) - NOT YET IMPLEMENTED - will show placeholder message"
    },

    exampleUsage: [
      {
        scenario: "Sine rule - find unknown side",
        caption: "Triangle ABC with angle A = 45°, angle B = 60°, side a = 10. Find side b.",
        parameters: {
          sideA: "10",
          sideB: "b",
          angleA: 45,
          angleB: 60,
          angleC: 75,
          highlightSide: "b",
          showAngles: true,
          showSides: true,
          triangleType: "auto"
        }
      },
      {
        scenario: "Obtuse triangle - cosine rule",
        caption: "Triangle PQR with obtuse angle at P (110°), sides QR=15m, PR=18m. Find side PQ (labeled a).",
        parameters: {
          sideA: "a",
          sideB: "18 m",
          sideC: "15 m",
          angleA: 110,
          angleA_label: "110°",
          vertexA_label: "P",
          vertexB_label: "Q",
          vertexC_label: "R",
          highlightSide: "a",
          showAngles: true,
          showSides: true,
          triangleType: "obtuse"
        }
      }
    ]
  },

  extendedLineTriangle: {
    name: "Extended Line Triangle Visualizer",
    technicalName: "extendedLineTriangle",
    component: "ExtendedLineTriangleVisualizer",
    category: "trigonometry",
    description: "Triangle with one side extended beyond a vertex to show exterior angles and supplementary angle relationships.",
    whenToUse: "Use for problems involving exterior angles, extended lines, or when teaching angle relationships in triangles.",

    parameters: {
      sideA: "string - base side label",
      sideB: "string - left side label",
      sideC: "string - right side label",
      angleA: "number (0-180) - interior angle at vertex A",
      angleB: "number (0-180) - interior angle at vertex B",
      angleC: "number (0-180) - interior angle at vertex C",
      extendedSide: "'A' | 'B' | 'C' - which side to extend",
      showExteriorAngle: "boolean (default: true) - show exterior angle",
      highlightAngle: "'interior' | 'exterior' | 'none'"
    },

    exampleUsage: {
      scenario: "Exterior angle theorem",
      caption: "Triangle ABC with side BC extended showing exterior angle.",
      parameters: {
        sideA: "a",
        sideB: "b",
        sideC: "c",
        angleA: 50,
        angleB: 60,
        angleC: 70,
        extendedSide: "C",
        showExteriorAngle: true,
        highlightAngle: "exterior"
      }
    }
  },

  quadrilateral: {
    name: "Quadrilateral Visualizer",
    technicalName: "quadrilateral",
    component: "QuadrilateralCompositeVisualizer",
    category: "trigonometry",
    description: "Visualizes quadrilaterals split by a diagonal into two triangles. Perfect for multi-step problems where a diagonal creates triangles with known angles and sides. CRITICAL: This tool has specific constraints on diagonal placement and mandatory fields.",
    whenToUse: "Use for quadrilateral problems with a DIAGONAL from vertex 1 to vertex 3 (e.g., Q to S in PQRS). The algorithm splits the quadrilateral along this diagonal and calculates the first triangle (vertices 1→2→3) using cosine rule. MANDATORY REQUIREMENTS: You MUST provide sides[1] (between vertices 1-2), sides[2] (between vertices 2-3), angles[2] (at vertex 2), and diagonal from vertex 1 to vertex 3. Without these, the visualization will fail.",

    parameters: {
      vertices: "MANDATORY: [string, string, string, string] - 4 vertex labels in order, e.g., ['P','Q','R','S']. Vertices indexed 0-3 (P=0, Q=1, R=2, S=3).",
      sides: "MANDATORY FIELDS: [Side, Side, Side, Side] - Format: {label: '250 m', showLabel: true}. CRITICAL: sides[1] (vertex 1→2, e.g., QR) and sides[2] (vertex 2→3, e.g., RS) MUST contain numeric values (e.g., '15 km', '18 km'). These form the first triangle with the diagonal. Sides[0] (PQ) and sides[3] (SP) can be empty if unknown.",
      angles: "MANDATORY FIELD: [Angle, Angle, Angle, Angle] - Format: {value: 110, label: '110°', showAngle: true}. CRITICAL: angles[2] (at vertex 2, e.g., angle at R) MUST have a numeric value. This angle is between sides[1] and sides[2] in the first triangle calculation. Label format: '110°' (number + degree symbol only, no extra text). Unknown angles use {showAngle: false}.",
      diagonals: "MANDATORY CONSTRAINT: Array<Diagonal> - The diagonal MUST connect vertex 1 to vertex 3 (not 0 to 2). Format: [{from: 1, to: 3, label: 'QS', showLabel: true, style: 'solid'}]. For PQRS, this means Q→S diagonal. Other diagonal configurations will not work correctly.",
      showVertices: "boolean (default: true) - show vertex points",
      highlightVertex: "number (default: -1) - vertex index to highlight, -1 for none",
      highlightSide: "number (default: -1) - side index to highlight, -1 for none"
    },

    exampleUsage: {
      scenario: "Quadrilateral PQRS with diagonal QS",
      caption: "Points P, Q, R, S on horizontal ground. QR = 250m, RS = 285m, with diagonal QS dividing into triangles QRS and QPS.",
      parameters: {
        vertices: ["P", "Q", "R", "S"],                       // P=0, Q=1, R=2, S=3
        sides: [
          { label: "", showLabel: false },                    // sides[0]: PQ - unknown
          { label: "250 m", showLabel: true },                // sides[1]: QR - MANDATORY (vertex 1→2)
          { label: "285 m", showLabel: true },                // sides[2]: RS - MANDATORY (vertex 2→3)
          { label: "", showLabel: false }                     // sides[3]: SP - unknown
        ],
        angles: [
          { showAngle: false },                               // angles[0]: at P (vertex 0) - unknown
          { value: 36, label: "36°", showAngle: true },       // angles[1]: at Q (vertex 1) - optional
          { value: 133, label: "133°", showAngle: true },     // angles[2]: at R (vertex 2) - MANDATORY
          { value: 47, label: "47°", showAngle: true }        // angles[3]: at S (vertex 3) - optional
        ],
        diagonals: [
          { from: 1, to: 3, label: "QS", showLabel: true, style: "solid" }  // MUST be vertex 1→3
        ],
        showVertices: true
      }
    }
  },

  // ============================================
  // 3D GEOMETRY TOOLS
  // ============================================

  cuboid: {
    name: "Cuboid (3D Box) Visualizer",
    technicalName: "cuboid",
    component: "CuboidVisualizer",
    category: "geometry-3d",
    description: "3D cuboid showing length, width, height, face diagonals, and space diagonals. IMPORTANT: For angle problems, show BOTH diagonals.",
    whenToUse: "Use for 3D Pythagoras problems, finding diagonals, or angle problems like 'find angle GAC'. For angle problems, set showFaceDiagonal=true AND showSpaceDiagonal=true.",

    parameters: {
      length: "string - label for length/depth (e.g., '4cm', 'l'). Value range: 5 to 8. Let length be the shortest side if possible.",
      width: "string - label for width (e.g., '6cm', 'w'). Value range: 6 to 9.",
      height: "string - label for height (e.g., '8cm', 'h'). Value range 8 to 12. Let height be the longest side if possible.",
      faceDiagonal: "string (optional) - label for face diagonal (e.g., 'AC', 'd₁')",
      spaceDiagonal: "string (optional) - label for space diagonal (e.g., 'AG', 'd')",
      highlightElement: "'length' | 'width' | 'height' | 'faceDiagonal' | 'spaceDiagonal' | 'none'",
      showFaceDiagonal: "boolean (default: false) - show diagonal on face. Set true for base diagonal problems.",
      showSpaceDiagonal: "boolean (default: false) - show body diagonal",
      diagonalFace: "'bottom' | 'front' | 'side' | 'top' (default: 'bottom') - which face for diagonal",
      showVertexLabels: "boolean (default: false) - show vertex labels A-H"
    },

    exampleUsage: {
      scenario: "Find angle between space diagonal and base diagonal",
      caption: "Cuboid showing angle GAC formed by space diagonal AG and base diagonal AC.",
      parameters: {
        length: "5m",
        width: "7m",
        height: "10m",
        faceDiagonal: "AC",
        spaceDiagonal: "AG",
        showFaceDiagonal: true,
        showSpaceDiagonal: true,
        diagonalFace: "bottom",
        highlightElement: "none",
        showVertexLabels: true
      }
    }
  },

  pyramid: {
    name: "Pyramid Visualizer",
    technicalName: "pyramid",
    component: "PyramidVisualizer",
    category: "geometry-3d",
    description: "3D pyramid showing perpendicular height (base center to apex), slant height (base edge midpoint to apex), and lateral edge (base corner to apex).",
    whenToUse: "Use for teaching Pythagoras in 3D: s² = h² + (a/2)², or for surface area and volume problems.",

    parameters: {
      baseLength: "string - base edge length (e.g., '10cm', 'a')",
      baseWidth: "string (optional) - base width for rectangular pyramid",
      height: "string - perpendicular height (e.g., '12cm', 'h')",
      slantHeight: "string (optional) - slant height (e.g., '13cm', 's')",
      lateralEdge: "string (optional) - lateral edge (e.g., '15cm', 'e')",
      highlightElement: "'baseLength' | 'baseWidth' | 'height' | 'slantHeight' | 'lateralEdge' | 'none'",
      pyramidType: "'square' | 'rectangular' (default: 'square')",
      showHeight: "boolean (default: true)",
      showSlantHeight: "boolean (default: false)",
      showVertexLabels: "boolean (default: false) - show A,B,C,D (base), V (apex)"
    },

    exampleUsage: {
      scenario: "Find slant height given height and base",
      caption: "A square pyramid with base 10cm and height 12cm. Find slant height s.",
      parameters: {
        baseLength: "10cm",
        height: "12cm",
        slantHeight: "s",
        highlightElement: "slantHeight",
        pyramidType: "square",
        showHeight: true,
        showSlantHeight: true,
        showVertexLabels: false
      }
    }
  },

  bearings: {
    name: "Bearings Visualizer",
    technicalName: "bearings",
    component: "BearingsVisualizer",
    category: "trigonometry",
    description: "Multi-point compass bearing navigation with North reference lines. Shows bearings (000°-360° from North), distances, back bearings, and interior angles.",
    whenToUse: "Use for navigation problems with bearings, compass directions, and multi-waypoint paths forming triangles.",

    parameters: {
      points: "Array<{label, bearing?, backBearing?}> - waypoints with bearings",
      legs: "Array<{fromPoint, toPoint, distance?}> - connections between points",
      showInteriorAngles: "boolean (default: false) - show angles at waypoints",
      interiorAngleLabel: "string (default: 'θ') - label for interior angles",
      showCompassRose: "boolean (default: true) - show N/E/S/W at first point. Set false if there is no N/E/S/W reference in the problem statement.",
      showNorthLines: "boolean (default: true) - show North lines at all points",
      highlightPoint: "number (default: -1) - point index to highlight"
    },

    exampleUsage: {
      scenario: "Three-point bearing navigation",
      caption: "Plane flies from A on bearing 143° for 368 km to B, then 233° for 472 km to C.",
      parameters: {
        points: [
          { label: "A", bearing: 143 },
          { label: "B", bearing: 233, backBearing: 37 },
          { label: "C" }
        ],
        legs: [
          { fromPoint: 0, toPoint: 1, distance: "368 km" },
          { fromPoint: 1, toPoint: 2, distance: "472 km" }
        ],
        showInteriorAngles: true,
        showCompassRose: true,
        showNorthLines: true
      }
    }
  },

  // ============================================
  // CIRCLE GEOMETRY TOOLS
  // ============================================

  circleBasic: {
    name: "Basic Circle Visualizer",
    technicalName: "circleBasic",
    component: "CircleBasicVisualizer",
    category: "circle",
    description: "Simple circle showing centre, radius, diameter, and basic elements.",
    whenToUse: "Use for introducing circle terminology and basic parts.",

    parameters: {
      radius: "string - radius label (e.g., 'r', '5cm', '10')",
      centreLabel: "string (optional, default: 'O') - centre point label (e.g., 'O', 'P', 'C')",
      showCentre: "boolean (default: true) - show centre point",
      showRadius: "boolean (default: false) - show radius line",
      showDiameter: "boolean (default: false) - show diameter line",
      highlightElement: "'radius' | 'diameter' | 'centre' | 'none'"
    },

    exampleUsage: {
      scenario: "Introducing circle parts",
      caption: "A circle with centre O and radius 5cm",
      parameters: {
        radius: "5cm",
        centreLabel: "O",
        showCentre: true,
        showRadius: true,
        showDiameter: false,
        highlightElement: "radius"
      }
    }
  },

  circleWithArcs: {
    name: "Circle with Arcs Visualizer",
    technicalName: "circleWithArcs",
    component: "CircleBasicVisualizer",
    category: "circle",
    description: "Circle showing arcs (major and minor), chords, and segments.",
    whenToUse: "Use for teaching arc and segment definitions.",

    parameters: {
      pointA: "string - first point on circumference (e.g., 'A')",
      pointB: "string - second point on circumference (e.g., 'B')",
      arcAngle: "number (0-360) - angle subtended by arc at centre",
      centreLabel: "string (optional, default: 'O') - centre point label (e.g., 'O', 'P', 'C')",
      showChord: "boolean (default: false) - show chord AB",
      showMinorArc: "boolean (default: true) - highlight minor arc",
      showMajorArc: "boolean (default: false) - highlight major arc",
      showSegment: "boolean (default: false) - shade the segment"
    },

    exampleUsage: {
      scenario: "Showing minor and major arcs",
      caption: "Circle showing minor arc AB and major arc AB",
      parameters: {
        pointA: "A",
        pointB: "B",
        arcAngle: 120,
        centreLabel: "O",
        showChord: true,
        showMinorArc: true,
        showMajorArc: false,
        showSegment: false
      }
    }
  },

  circleWithChords: {
    name: "Circle with Chords Visualizer",
    technicalName: "circleWithChords",
    component: "CircleChordVisualizer",
    category: "circle",
    description: "Circle showing one or two chords with perpendicular from centre.",
    whenToUse: "Use for chord theorems (equal chords, perpendicular bisector).",

    parameters: {
      chord1Points: "string - first chord endpoints (e.g., 'AB')",
      chord2Points: "string (optional) - second chord endpoints (e.g., 'CD')",
      showPerpendicular: "boolean (default: false) - show perpendicular from centre",
      showMidpoint: "boolean (default: false) - mark midpoint of chord",
      equalChords: "boolean (default: false) - mark chords as equal",
      highlightChord: "1 | 2 | 'none'"
    },

    exampleUsage: {
      scenario: "Equal chords theorem",
      caption: "Two equal chords AB and CD equidistant from centre O",
      parameters: {
        chord1Points: "AB",
        chord2Points: "CD",
        showPerpendicular: true,
        showMidpoint: true,
        equalChords: true,
        highlightChord: "none"
      }
    }
  },

  circleSemicircle: {
    name: "Semicircle Angle Visualizer",
    technicalName: "circleSemicircle",
    component: "CircleAngleVisualizer",
    category: "circle",
    description: "Circle showing angle in semicircle theorem. Shows diameter and angle subtended at circumference.",
    whenToUse: "CRITICAL: Use this for angle in semicircle problems (angle = 90°).",

    parameters: {
      diameter: "string - diameter endpoints (e.g., 'AB')",
      pointOnCircle: "string - point on circumference (e.g., 'C')",
      showAngle: "boolean (default: true) - show angle at circumference",
      showRightAngleMarker: "boolean (default: false) - show 90° marker",
      highlightDiameter: "boolean (default: false) - highlight diameter"
    },

    exampleUsage: {
      scenario: "Angle in semicircle is 90°",
      caption: "Triangle ABC where AB is diameter. Angle ACB = 90°",
      parameters: {
        diameter: "AB",
        pointOnCircle: "C",
        showAngle: true,
        showRightAngleMarker: true,
        highlightDiameter: false
      }
    }
  },

  circleTangent: {
    name: "Circle with Tangent Visualizer",
    technicalName: "circleTangent",
    component: "CircleTangentVisualizer",
    category: "circle",
    description: "Circle showing tangent line and radius to point of contact.",
    whenToUse: "Use for radius-tangent perpendicular theorem.",

    parameters: {
      tangentPoint: "string - point of tangency (e.g., 'T')",
      showRadius: "boolean (default: true) - show radius to tangent point",
      showRightAngle: "boolean (default: false) - show 90° marker",
      tangentLabel: "string (optional) - label for tangent line",
      highlightRadius: "boolean (default: false)",
      highlightTangent: "boolean (default: false)"
    },

    exampleUsage: {
      scenario: "Radius perpendicular to tangent",
      caption: "Radius OT is perpendicular to tangent at T",
      parameters: {
        tangentPoint: "T",
        showRadius: true,
        showRightAngle: true,
        tangentLabel: "tangent",
        highlightRadius: false,
        highlightTangent: false
      }
    }
  },

  circleTwoTangents: {
    name: "Circle with Two Tangents from External Point",
    technicalName: "circleTwoTangents",
    component: "CircleTangentVisualizer",
    category: "circle",
    description: "Circle showing two tangents from external point.",
    whenToUse: "Use for 'tangents from external point are equal' theorem.",

    parameters: {
      externalPoint: "string - external point label (e.g., 'P')",
      tangentPoint1: "string - first tangent point (e.g., 'T1')",
      tangentPoint2: "string - second tangent point (e.g., 'T2')",
      showRadii: "boolean (default: false) - show radii to tangent points",
      showTangentLengths: "boolean (default: false) - mark equal lengths",
      highlightTangents: "boolean (default: false)"
    },

    exampleUsage: {
      scenario: "Equal tangents from external point",
      caption: "Tangents from P to circle at T1 and T2 are equal: PT1 = PT2",
      parameters: {
        externalPoint: "P",
        tangentPoint1: "T1",
        tangentPoint2: "T2",
        showRadii: true,
        showTangentLengths: true,
        highlightTangents: false
      }
    }
  },

  circleAngleCentre: {
    name: "Angle at Centre Visualizer",
    technicalName: "circleAngleCentre",
    component: "CircleAngleVisualizer",
    category: "circle",
    description: "Circle showing angle at centre and angle at circumference subtended by same arc.",
    whenToUse: "Use for 'angle at centre = 2 × angle at circumference' theorem.",

    parameters: {
      arcPoints: "string - arc endpoints (e.g., 'AB')",
      circumferencePoint1: "string - point on circumference (e.g., 'C')",
      arcAngleDegrees: "number (optional, default: 80) - angle of arc AB at centre in degrees (controls diagram shape)",
      showAngleCentre: "boolean (default: true) - show angle AOB",
      showAngleCircumference: "boolean (default: true) - show angle ACB",
      angleCentreLabel: "string (optional) - label for centre angle (e.g., '$2\\theta$', '100')",
      angleCircumferenceLabel: "string (optional) - label for circumference angle (e.g., '$\\theta$', '50°')",
      highlightArc: "boolean (default: false)"
    },

    exampleUsage: {
      scenario: "Angle at centre is twice angle at circumference",
      caption: "∠AOB = 2 × ∠ACB (both subtended by arc AB)",
      parameters: {
        arcPoints: "AB",
        circumferencePoint1: "C",
        arcAngleDegrees: 110,
        showAngleCentre: true,
        showAngleCircumference: true,
        angleCentreLabel: "110°",
        angleCircumferenceLabel: "55°",
        highlightArc: true
      }
    }
  },

  circleSameArc: {
    name: "Angles in Same Segment Visualizer",
    technicalName: "circleSameArc",
    component: "CircleAngleVisualizer",
    category: "circle",
    description: "Circle showing multiple angles subtended by same arc (angles in same segment).",
    whenToUse: "Use for 'angles in same segment are equal' theorem.",

    parameters: {
      arcPoints: "string - arc endpoints (e.g., 'AB')",
      circumferencePoint1: "string - first point on circumference (e.g., 'C')",
      circumferencePoint2: "string (optional) - second point (e.g., 'D')",
      arcAngleDegrees: "number (optional, default: 80) - angle of arc AB at centre in degrees (controls diagram shape)",
      oppositeSegments: "boolean (optional, default: false) - position C and D on opposite sides of chord AB (C on minor arc, D on major arc)",
      showAngle1: "boolean (default: true) - show angle ACB",
      showAngle2: "boolean (default: true) - show angle ADB",
      angleLabel: "string (optional) - label for angle at C (e.g., '$\\theta$', '45°')",
      angleLabel2: "string (optional) - separate label for angle at D, defaults to angleLabel",
      highlightSegment: "boolean (default: false) - shade the segment"
    },

    exampleUsage: {
      scenario: "Angles in opposite segments (comparison)",
      caption: "Compare ∠ACB (minor segment) and ∠ADB (major segment)",
      parameters: {
        arcPoints: "AB",
        circumferencePoint1: "C",
        circumferencePoint2: "D",
        arcAngleDegrees: 100,
        oppositeSegments: true,
        showAngle1: true,
        showAngle2: true,
        angleLabel: "$50^{\\circ}$",
        angleLabel2: "$130^{\\circ}$",
        highlightSegment: false
      }
    }
  },

  // ============================================
  // QUADRATIC EQUATIONS TOOLS
  // ============================================

  parabolaGraph: {
    name: "Parabola Graph Visualizer",
    technicalName: "parabolaGraph",
    component: "ParabolaGraphVisualizer",
    category: "quadratic",
    description: "Interactive parabola graph showing vertex, axis of symmetry, roots, and y-intercept.",
    whenToUse: "Use for teaching quadratic graphs, vertex form, transformations, and solving by graphing.",

    parameters: {
      a: "number - coefficient of x² (determines width and direction)",
      b: "number - coefficient of x",
      c: "number - constant term (y-intercept)",
      showVertex: "boolean (default: true) - show vertex point",
      showRoots: "boolean (default: true) - show x-intercepts",
      showAxisOfSymmetry: "boolean (default: true) - show vertical line of symmetry",
      highlightVertex: "boolean (default: false)",
      xMin: "number (optional) - minimum x value for graph",
      xMax: "number (optional) - maximum x value for graph"
    },

    exampleUsage: {
      scenario: "Graphing y = x² - 4x + 3",
      caption: "Parabola showing vertex, roots at x=1 and x=3, and axis of symmetry.",
      parameters: {
        a: 1,
        b: -4,
        c: 3,
        showVertex: true,
        showRoots: true,
        showAxisOfSymmetry: true,
        highlightVertex: false
      }
    }
  },

  factoringVisualizer: {
    name: "Factoring Visualizer",
    technicalName: "factoringVisualizer",
    component: "FactoringVisualizer",
    category: "quadratic",
    description: "Visual representation of factoring quadratics showing the relationship between expanded and factored forms.",
    whenToUse: "Use for teaching factorization methods and showing how factors relate to roots.",

    parameters: {
      a: "number - coefficient of x²",
      b: "number - coefficient of x",
      c: "number - constant term",
      showSteps: "boolean (default: true) - show factoring steps",
      method: "'split-middle' | 'grouping' | 'auto' (default: 'auto')"
    },

    exampleUsage: {
      scenario: "Factoring x² + 5x + 6",
      caption: "Visual breakdown showing how to factor into (x + 2)(x + 3).",
      parameters: {
        a: 1,
        b: 5,
        c: 6,
        showSteps: true,
        method: "auto"
      }
    }
  },

  completingSquareVisualizer: {
    name: "Completing the Square Visualizer",
    technicalName: "completingSquareVisualizer",
    component: "CompletingSquareVisualizer",
    category: "quadratic",
    description: "Geometric visualization of completing the square process.",
    whenToUse: "Use for teaching completing the square method visually.",

    parameters: {
      a: "number - coefficient of x²",
      b: "number - coefficient of x",
      c: "number - constant term",
      showGeometric: "boolean (default: true) - show square diagram",
      showSteps: "boolean (default: true) - show algebraic steps"
    },

    exampleUsage: {
      scenario: "Completing the square for x² + 6x + 5",
      caption: "Visual and algebraic steps showing (x + 3)² - 4.",
      parameters: {
        a: 1,
        b: 6,
        c: 5,
        showGeometric: true,
        showSteps: true
      }
    }
  },

  quadraticFormulaVisualizer: {
    name: "Quadratic Formula Visualizer",
    technicalName: "quadraticFormulaVisualizer",
    component: "QuadraticFormulaVisualizer",
    category: "quadratic",
    description: "Step-by-step visualization of applying the quadratic formula.",
    whenToUse: "Use for teaching the quadratic formula and showing substitution steps.",

    parameters: {
      a: "number - coefficient of x²",
      b: "number - coefficient of x",
      c: "number - constant term",
      showDiscriminant: "boolean (default: true) - show b² - 4ac calculation",
      showSteps: "boolean (default: true) - show all calculation steps"
    },

    exampleUsage: {
      scenario: "Solving 2x² + 5x - 3 = 0 using quadratic formula",
      caption: "Step-by-step application of x = (-b ± √(b² - 4ac)) / 2a",
      parameters: {
        a: 2,
        b: 5,
        c: -3,
        showDiscriminant: true,
        showSteps: true
      }
    }
  },

  vertexFormTransform: {
    name: "Vertex Form Transform Visualizer",
    technicalName: "vertexFormTransform",
    component: "VertexFormTransformVisualizer",
    category: "quadratic",
    description: "Shows transformation from standard form to vertex form and the effect on the graph.",
    whenToUse: "Use for teaching conversions between forms and understanding transformations.",

    parameters: {
      a: "number - coefficient from standard form",
      h: "number - horizontal shift (vertex x-coordinate)",
      k: "number - vertical shift (vertex y-coordinate)",
      showTransformations: "boolean (default: true) - show shift animations",
      showBothForms: "boolean (default: true) - display both equations"
    },

    exampleUsage: {
      scenario: "Converting to vertex form y = 2(x - 1)² + 3",
      caption: "Showing horizontal shift right 1, vertical shift up 3, and vertical stretch by 2.",
      parameters: {
        a: 2,
        h: 1,
        k: 3,
        showTransformations: true,
        showBothForms: true
      }
    }
  },

  rootsVisualizer: {
    name: "Roots Visualizer",
    technicalName: "rootsVisualizer",
    component: "RootsVisualizer",
    category: "quadratic",
    description: "Visualizes the nature of roots based on discriminant (two real, one real, or complex).",
    whenToUse: "Use for teaching the discriminant and understanding root types.",

    parameters: {
      a: "number - coefficient of x²",
      b: "number - coefficient of x",
      c: "number - constant term",
      showDiscriminant: "boolean (default: true) - show b² - 4ac value",
      showRootType: "boolean (default: true) - indicate root type",
      showComplexPlane: "boolean (default: false) - show complex roots on plane"
    },

    exampleUsage: {
      scenario: "Analyzing roots of x² - 4x + 4",
      caption: "Discriminant = 0, showing one repeated real root.",
      parameters: {
        a: 1,
        b: -4,
        c: 4,
        showDiscriminant: true,
        showRootType: true,
        showComplexPlane: false
      }
    }
  },

  wordProblemDiagram: {
    name: "Word Problem Diagram Visualizer",
    technicalName: "wordProblemDiagram",
    component: "WordProblemDiagramVisualizer",
    category: "quadratic",
    description: "Generic diagram generator for quadratic word problems (area, projectile motion, optimization).",
    whenToUse: "Use for illustrating real-world quadratic problem scenarios.",

    parameters: {
      problemType: "'area' | 'projectile' | 'optimization' | 'generic'",
      labels: "Record<string, string> - custom labels for diagram elements",
      dimensions: "Record<string, number> (optional) - sizes for diagram",
      showEquation: "boolean (default: true) - show the quadratic equation"
    },

    exampleUsage: {
      scenario: "Rectangular garden problem",
      caption: "Garden with length (x+5) and width x, showing area equation.",
      parameters: {
        problemType: "area",
        labels: {
          length: "x + 5",
          width: "x",
          area: "A = x(x + 5)"
        },
        showEquation: true
      }
    }
  },

  // ============================================
  // EXPONENTIAL AND LOGARITHM TOOLS
  // ============================================

  exponentialGraph: {
    name: "Exponential Graph Visualizer",
    technicalName: "exponentialGraph",
    component: "ExponentialGraphVisualizer",
    category: "exponential-logarithm",
    description: "Interactive graph showing exponential functions f(x) = a × b^x + k. Automatically detects growth (b > 1) or decay (0 < b < 1).",
    whenToUse: "Use for graphing exponential functions, showing growth/decay patterns, y-intercepts, and horizontal asymptotes.",

    parameters: {
      base: "number - base b in f(x) = a × b^x (must be positive, b ≠ 1)",
      coefficient: "number (default: 1) - coefficient a",
      verticalShift: "number (default: 0) - vertical shift k",
      showAsymptote: "boolean (default: true) - show horizontal asymptote at y = k",
      showYIntercept: "boolean (default: true) - show y-intercept at (0, a + k)",
      highlightPoints: "Array<{x: number, label?: string}> (optional) - points to highlight",
      xRange: "[number, number] (optional) - x-axis range",
      yRange: "[number, number] (optional) - y-axis range",
      xMin: "number (optional) - minimum x value",
      xMax: "number (optional) - maximum x value",
      yMin: "number (optional) - minimum y value",
      yMax: "number (optional) - maximum y value",
      showGrid: "boolean (default: true) - show grid lines",
      label: "string (optional) - custom function label",
      color: "string (optional) - custom curve color",
      caption: "string (optional) - explanation text",
      realWorldContext: "boolean (default: false) - if true, x-axis starts at 0 (for time, population, etc. where negative values don't make sense)"
    },

    exampleUsage: [
      {
        scenario: "Exponential growth",
        caption: "Exponential growth function f(x) = 2^x showing base (0, 1) and rapid increase.",
        parameters: {
          base: 2,
          coefficient: 1,
          verticalShift: 0,
          showAsymptote: true,
          showYIntercept: true,
          xRange: [-3, 5],
          showGrid: true
        }
      },
      {
        scenario: "Exponential decay",
        caption: "Exponential decay function f(x) = 0.5^x showing approach to horizontal asymptote.",
        parameters: {
          base: 0.5,
          coefficient: 1,
          verticalShift: 0,
          showAsymptote: true,
          showYIntercept: true,
          xRange: [-2, 6],
          showGrid: true
        }
      },
      {
        scenario: "Population growth (real-world context)",
        caption: "Population growth: P(t) = 100 × 1.12^t (12% annual growth, starting at 100)",
        parameters: {
          base: 1.12,
          coefficient: 100,
          verticalShift: 0,
          label: "P(t)",
          showAsymptote: true,
          showYIntercept: true,
          highlightPoints: [{ x: 3, label: "(3 years)" }],
          realWorldContext: true  // Starts x-axis at 0 (no negative time)
        }
      }
    ]
  },

  logarithmGraph: {
    name: "Logarithm Graph Visualizer",
    technicalName: "logarithmGraph",
    component: "LogarithmGraphVisualizer",
    category: "exponential-logarithm",
    description: "Interactive graph showing logarithmic functions f(x) = a × log_b(x - h) + k. Shows vertical asymptote and key points.",
    whenToUse: "Use for graphing logarithmic functions, showing domain restrictions (x > 0), vertical asymptotes, and key points like (1, 0) and (base, 1).",

    parameters: {
      base: "number (default: 10) - base b in log_b(x) (must be positive, b ≠ 1)",
      coefficient: "number (default: 1) - coefficient a",
      horizontalShift: "number (default: 0) - horizontal shift h in log(x - h)",
      verticalShift: "number (default: 0) - vertical shift k",
      showAsymptote: "boolean (default: true) - show vertical asymptote at x = h",
      showKeyPoints: "boolean (default: true) - show points (1 + h, 0 + k) and (base + h, 1*a + k)",
      xRange: "[number, number] (optional) - x-axis range (must be > h)",
      yRange: "[number, number] (optional) - y-axis range",
      xMin: "number (optional) - minimum x value",
      xMax: "number (optional) - maximum x value",
      yMin: "number (optional) - minimum y value",
      yMax: "number (optional) - maximum y value",
      showGrid: "boolean (default: true) - show grid lines",
      label: "string (optional) - custom function label",
      color: "string (optional) - custom curve color",
      caption: "string (optional) - explanation text"
    },

    exampleUsage: [
      {
        scenario: "Common logarithm (base 10)",
        caption: "Common logarithm f(x) = log₁₀(x) with vertical asymptote at x = 0.",
        parameters: {
          base: 10,
          coefficient: 1,
          horizontalShift: 0,
          verticalShift: 0,
          showAsymptote: true,
          showKeyPoints: true,
          xRange: [0.1, 10],
          showGrid: true
        }
      },
      {
        scenario: "Natural logarithm",
        caption: "Natural logarithm f(x) = ln(x) showing key points (1, 0) and (e, 1).",
        parameters: {
          base: Math.E,
          coefficient: 1,
          horizontalShift: 0,
          verticalShift: 0,
          label: "ln(x)",
          showAsymptote: true,
          showKeyPoints: true,
          xRange: [0.1, 8],
          showGrid: true
        }
      },
      {
        scenario: "Base 2 logarithm",
        caption: "Binary logarithm f(x) = log₂(x) used in computer science.",
        parameters: {
          base: 2,
          coefficient: 1,
          horizontalShift: 0,
          verticalShift: 0,
          label: "log_2(x)",
          showAsymptote: true,
          showKeyPoints: true,
          xRange: [0.1, 10],
          showGrid: true
        }
      }
    ]
  },

  graphCompare: {
    name: "Graph Compare Visualizer",
    technicalName: "graphCompare",
    component: "GraphCompareVisualizer",
    category: "exponential-logarithm",
    description: "Compare two functions (exponential, logarithm, or linear) on the same graph. Shows both curves with color-coded legend and optional intersection point.",
    whenToUse: "Use for comparing growth rates (e.g., 2^x vs 3^x), inverse relationships (e.g., 2^x vs log₂(x)), or exponential vs linear growth.",

    parameters: {
      function1Type: "'exponential' | 'logarithm' | 'linear' - type of first function",
      function1Params: "object - parameters for function 1 (base, coefficient, shifts, slope, intercept)",
      function1Label: "string (default: 'f(x)') - label for function 1",
      function1Color: "string (optional) - color for function 1 curve",
      function2Type: "'exponential' | 'logarithm' | 'linear' - type of second function",
      function2Params: "object - parameters for function 2",
      function2Label: "string (default: 'g(x)') - label for function 2",
      function2Color: "string (optional) - color for function 2 curve",
      showIntersection: "boolean (default: false) - highlight intersection point if exists",
      showLegend: "boolean (default: true) - show color-coded legend",
      xRange: "[number, number] (optional) - x-axis range",
      yRange: "[number, number] (optional) - y-axis range",
      xMin: "number (optional) - minimum x value",
      xMax: "number (optional) - maximum x value",
      yMin: "number (optional) - minimum y value",
      yMax: "number (optional) - maximum y value",
      showGrid: "boolean (default: true) - show grid lines",
      caption: "string (optional) - explanation text"
    },

    exampleUsage: [
      {
        scenario: "Comparing exponential growth rates",
        caption: "Comparing f(x) = 2^x (slower growth) with g(x) = 5^x (faster growth).",
        parameters: {
          function1Type: "exponential",
          function1Params: { base: 2, coefficient: 1, verticalShift: 0 },
          function1Label: "f(x) = 2^x",
          function2Type: "exponential",
          function2Params: { base: 5, coefficient: 1, verticalShift: 0 },
          function2Label: "g(x) = 5^x",
          showIntersection: true,
          showLegend: true,
          xRange: [-2, 3],
          showGrid: true
        }
      },
      {
        scenario: "Exponential vs logarithm (inverse functions)",
        caption: "f(x) = 2^x and g(x) = log₂(x) are inverse functions, reflected across y = x.",
        parameters: {
          function1Type: "exponential",
          function1Params: { base: 2 },
          function1Label: "f(x) = 2^x",
          function2Type: "logarithm",
          function2Params: { base: 2 },
          function2Label: "g(x) = log₂(x)",
          showIntersection: true,
          showLegend: true,
          xRange: [0.1, 5],
          showGrid: true
        }
      },
      {
        scenario: "Growth vs decay",
        caption: "Comparing exponential growth f(x) = 2^x with decay g(x) = 0.5^x.",
        parameters: {
          function1Type: "exponential",
          function1Params: { base: 2 },
          function1Label: "Growth: 2^x",
          function2Type: "exponential",
          function2Params: { base: 0.5 },
          function2Label: "Decay: 0.5^x",
          showIntersection: true,
          showLegend: true,
          xRange: [-3, 3],
          showGrid: true
        }
      }
    ]
  },

  // ============================================
  // SETS AND VENN DIAGRAMS TOOLS
  // ============================================

  vennDiagram1Set: {
    name: "Single-Set Venn Diagram",
    technicalName: "vennDiagram1Set",
    component: "VennDiagram1SetVisualizer",
    category: "sets",
    description: "Interactive single-set Venn diagram showing one set A within universal set U. Perfect for teaching set complements (A'), universal sets, and basic set notation with one set.",
    whenToUse: "Use for single-set problems: teaching A' (complement), n(A) and n(A'), visualizing 'elements in A' vs 'elements not in A', or introducing universal set concept with one set.",

    parameters: {
      setLabel: "string (default: 'A') - label for the set",
      universalSetLabel: "string (default: 'U') - label for universal set",
      setElements: "string[] | number - elements in the set A, or count",
      complementElements: "string[] | number - elements in A' (outside A), or count",
      showElements: "boolean (default: true) - show actual elements vs just counts",
      showRegionCounts: "boolean (default: false) - use (n) bracket notation for counts",
      shadeRegion: "'none' | 'set' | 'complement' | 'universal' (default: 'none') - which region to shade",
      caption: "string (optional) - explanation text below diagram"
    },

    exampleUsage: [
      {
        scenario: "Visualizing set complement",
        caption: "Set M with complement M' shaded (elements not in M)",
        parameters: {
          setLabel: "M",
          universalSetLabel: "U",
          setElements: 5,
          complementElements: 8,
          showRegionCounts: true,
          shadeRegion: "complement"
        }
      },
      {
        scenario: "Elements in set vs outside",
        caption: "Set A = {1, 2, 3} and A' = {4, 5, 6, 7, 8} within U",
        parameters: {
          setLabel: "A",
          setElements: ["1", "2", "3"],
          complementElements: ["4", "5", "6", "7", "8"],
          showElements: true,
          shadeRegion: "none"
        }
      },
      {
        scenario: "Highlighting the set itself",
        caption: "Shaded region shows set M (elements in M)",
        parameters: {
          setLabel: "M",
          setElements: ["a", "b", "c"],
          complementElements: ["d", "e", "f"],
          showElements: true,
          shadeRegion: "set"
        }
      }
    ]
  },

  vennDiagram: {
    name: "Two-Set Venn Diagram",
    technicalName: "vennDiagram",
    component: "VennDiagram2SetVisualizer",
    category: "sets",
    description: "Interactive two-set Venn diagram showing sets A and B within universal set U. Supports overlapping, disjoint, subset, and equal set relationships. Can display elements or counts in regions, shade specific regions for operations.",
    whenToUse: "Use for teaching set operations (∩, ∪, '), set relationships (subset, disjoint), counting elements in regions, or visualizing survey problems with two categories.",

    parameters: {
      setALabel: "string (default: 'A') - label for first set",
      setBLabel: "string (default: 'B') - label for second set",
      universalSetLabel: "string (default: 'U') - label for universal set",
      layout: "'overlapping' | 'disjoint' | 'subset' | 'equal' (default: 'overlapping') - relationship between sets",
      aOnlyElements: "string[] | number - elements only in A (not in B), or count",
      bOnlyElements: "string[] | number - elements only in B (not in A), or count",
      intersectionElements: "string[] | number - elements in both A and B, or count",
      neitherElements: "string[] | number - elements in neither A nor B (outside both), or count",
      showElements: "boolean (default: true) - show actual elements vs just counts",
      showRegionCounts: "boolean (default: false) - use (n) bracket notation for counts",
      shadeRegion: "'none' | 'intersection' | 'union' | 'aOnly' | 'bOnly' | 'aComplement' | 'bComplement' | 'neither' | 'unionComplement' (default: 'none')",
      highlightSet: "'A' | 'B' | 'both' | 'none' (default: 'none') - highlight set borders",
      caption: "string (optional) - explanation text below diagram"
    },

    exampleUsage: [
      {
        scenario: "Counting elements in regions",
        caption: "Venn diagram showing n(A only) = 4, n(A ∩ B) = 6, n(B only) = 3, n(neither) = 7",
        parameters: {
          setALabel: "A",
          setBLabel: "B",
          layout: "overlapping",
          aOnlyElements: 4,
          bOnlyElements: 3,
          intersectionElements: 6,
          neitherElements: 7,
          showRegionCounts: true,
          shadeRegion: "none"
        }
      },
      {
        scenario: "Visualizing intersection",
        caption: "Shaded region shows A ∩ B (elements in both sets)",
        parameters: {
          setALabel: "A",
          setBLabel: "B",
          layout: "overlapping",
          aOnlyElements: ["1", "2"],
          bOnlyElements: ["5", "6"],
          intersectionElements: ["3", "4"],
          showElements: true,
          shadeRegion: "intersection"
        }
      },
      {
        scenario: "Subset relationship",
        caption: "Set A is a subset of set B (A ⊆ B)",
        parameters: {
          setALabel: "A",
          setBLabel: "B",
          layout: "subset",
          aOnlyElements: ["1", "2", "3"],
          bOnlyElements: ["4", "5", "6"],
          showElements: true
        }
      }
    ]
  },

  vennDiagram3: {
    name: "Three-Set Venn Diagram",
    technicalName: "vennDiagram3",
    component: "VennDiagram3SetVisualizer",
    category: "sets",
    description: "Interactive three-set Venn diagram with 8 distinct regions: A only, B only, C only, A∩B only, A∩C only, B∩C only, A∩B∩C (center), and neither. Essential for complex counting problems and set identities.",
    whenToUse: "Use for three-set problems, complex survey questions (e.g., 'How many speak all three languages?'), counting 'exactly one', 'exactly two', 'at least one', verifying set identities, or De Morgan's laws.",

    parameters: {
      setALabel: "string (default: 'A') - label for first set",
      setBLabel: "string (default: 'B') - label for second set",
      setCLabel: "string (default: 'C') - label for third set",
      universalSetLabel: "string (default: 'U') - label for universal set",
      aOnly: "string[] | number - elements only in A (not in B or C), or count",
      bOnly: "string[] | number - elements only in B (not in A or C), or count",
      cOnly: "string[] | number - elements only in C (not in A or B), or count",
      abOnly: "string[] | number - elements in A∩B but not C, or count",
      acOnly: "string[] | number - elements in A∩C but not B, or count",
      bcOnly: "string[] | number - elements in B∩C but not A, or count",
      abc: "string[] | number - elements in A∩B∩C (all three), or count",
      neither: "string[] | number - elements in none of A, B, C, or count",
      showElements: "boolean (default: false) - show actual elements vs counts",
      showRegionCounts: "boolean (default: true) - use (n) bracket notation",
      shadeRegions: "string[] (default: []) - array of region names to shade: 'aOnly', 'bOnly', 'cOnly', 'abOnly', 'acOnly', 'bcOnly', 'abc', 'neither'",
      highlightSets: "string[] (default: []) - array of set names to highlight borders: 'A', 'B', 'C'",
      caption: "string (optional) - explanation text"
    },

    exampleUsage: [
      {
        scenario: "Three-language survey problem",
        caption: "Venn diagram for students speaking English, French, German with counts in all 8 regions",
        parameters: {
          setALabel: "English",
          setBLabel: "French",
          setCLabel: "German",
          aOnly: 11,
          bOnly: 8,
          cOnly: 5,
          abOnly: 4,
          acOnly: 3,
          bcOnly: 2,
          abc: 2,
          neither: 6,
          showRegionCounts: true
        }
      },
      {
        scenario: "Finding 'exactly one' count",
        caption: "Shaded regions show students speaking exactly one language",
        parameters: {
          setALabel: "A",
          setBLabel: "B",
          setCLabel: "C",
          aOnly: 10,
          bOnly: 8,
          cOnly: 6,
          abOnly: 3,
          acOnly: 2,
          bcOnly: 2,
          abc: 1,
          neither: 4,
          shadeRegions: ["aOnly", "bOnly", "cOnly"],
          showRegionCounts: true
        }
      }
    ]
  },

  setVisualizer: {
    name: "Set Visualizer",
    technicalName: "setVisualizer",
    component: "SetVisualizer",
    category: "sets",
    description: "Visual representation of individual sets showing notation, elements, cardinality, and relationships. Displays sets in list notation, box, or circle format.",
    whenToUse: "Use for introducing set notation { }, showing elements, teaching n(A) cardinality, demonstrating ∈ and ∉ membership, or showing set relationships like ⊆, =, or disjoint.",

    parameters: {
      setName: "string (default: 'A') - set label",
      elements: "string[] - array of elements in the set",
      setDescription: "string (optional) - description like 'factors of 12' or 'even numbers < 10' (shown instead of listing all elements)",
      displayMode: "'list' | 'box' | 'circle' (default: 'list') - visual representation style",
      showCardinality: "boolean (default: false) - show n(A) = count",
      showBraces: "boolean (default: true) - show { } notation",
      isSubsetOf: "string (optional) - show 'A ⊆ B' relationship",
      isEqualTo: "string (optional) - show 'A = B' relationship",
      isDisjointFrom: "string (optional) - show 'A ∩ B = ∅' relationship",
      membershipExamples: "Array<{element: string, isMember: boolean}> (optional) - show ∈ or ∉ examples",
      caption: "string (optional) - explanation text"
    },

    exampleUsage: [
      {
        scenario: "Introducing set notation",
        caption: "Set A with elements listed in { } notation",
        parameters: {
          setName: "A",
          elements: ["1", "2", "3", "4", "5"],
          displayMode: "box",
          showCardinality: true,
          showBraces: true
        }
      },
      {
        scenario: "Element membership examples",
        caption: "Showing which elements are in set A and which are not",
        parameters: {
          setName: "A",
          elements: ["2", "4", "6", "8"],
          displayMode: "list",
          membershipExamples: [
            { element: "2", isMember: true },
            { element: "3", isMember: false },
            { element: "6", isMember: true }
          ]
        }
      },
      {
        scenario: "Set relationships",
        caption: "Set A is a subset of set B",
        parameters: {
          setName: "A",
          elements: ["1", "2"],
          displayMode: "circle",
          isSubsetOf: "B"
        }
      }
    ]
  },

  numberLine: {
    name: "Number Line Visualizer",
    technicalName: "numberLine",
    component: "NumberLineVisualizer",
    category: "sets",
    description: "Interactive number line for intervals, inequalities, and number sets. Shows open circles (○) for excluded endpoints and closed circles (●) for included endpoints. Supports shading intervals and unbounded regions.",
    whenToUse: "Use for interval notation [a, b], (a, b], teaching inequalities x < 5 or x ≥ -2, visualizing special number sets (ℤ, ℚ, ℝ), or showing union of intervals.",

    parameters: {
      min: "number (default: -5) - minimum value on number line",
      max: "number (default: 5) - maximum value on number line",
      step: "number (default: 1) - spacing between tick marks",
      intervals: "Array<{start: number | null, end: number | null, startInclusive?: boolean, endInclusive?: boolean, color?: string, label?: string}> - intervals to shade. Use null for ±∞",
      points: "Array<{value: number, label?: string, style: 'open' | 'closed' | 'none', color?: string}> (optional) - individual points to mark",
      showTickMarks: "boolean (default: true) - show tick marks",
      showTickLabels: "boolean (default: true) - show numbers at ticks",
      showArrows: "boolean (default: true) - show arrows at line ends",
      highlightIntegers: "boolean (default: false) - make integer ticks more prominent",
      title: "string (optional) - title above number line",
      caption: "string (optional) - explanation text"
    },

    exampleUsage: [
      {
        scenario: "Closed interval [2, 5]",
        caption: "Interval [2, 5] showing both endpoints included (closed circles)",
        parameters: {
          min: 0,
          max: 7,
          intervals: [
            { start: 2, end: 5, startInclusive: true, endInclusive: true, label: "[2, 5]" }
          ]
        }
      },
      {
        scenario: "Half-open interval (1, 4]",
        caption: "Interval (1, 4] with 1 excluded (open circle) and 4 included (closed circle)",
        parameters: {
          min: 0,
          max: 6,
          intervals: [
            { start: 1, end: 4, startInclusive: false, endInclusive: true, label: "(1, 4]" }
          ]
        }
      },
      {
        scenario: "Unbounded interval x ≥ 3",
        caption: "Interval [3, ∞) showing x ≥ 3 with arrow to the right",
        parameters: {
          min: 0,
          max: 8,
          intervals: [
            { start: 3, end: null, startInclusive: true, label: "[3, ∞)" }
          ]
        }
      },
      {
        scenario: "Union of intervals",
        caption: "Showing [-2, 1) ∪ (3, 5] as two separate shaded regions",
        parameters: {
          min: -3,
          max: 6,
          intervals: [
            { start: -2, end: 1, startInclusive: true, endInclusive: false, color: "#86efac" },
            { start: 3, end: 5, startInclusive: false, endInclusive: true, color: "#86efac" }
          ]
        }
      }
    ]
  },

  algebraDiscSimulator: {
    name: "Algebra Disc Simulator",
    technicalName: "algebraDiscSimulator",
    component: "AlgebraDiscSimulator",
    category: "general",
    description: "Interactive visualizer for integer operations using algebra discs (counters). Blue discs represent positive numbers (+1), red discs represent negative numbers (-1). Zero pairs (one blue + one red = 0) are highlighted and can be removed. Teaches addition, subtraction, and multiplication of integers through concrete visual models.",
    whenToUse: "Use for teaching integer operations (positive and negative numbers), explaining why adding a negative is like subtracting, showing zero pairs concept, visualizing multiplication as repeated addition, and helping students understand sign rules through concrete models. Perfect for S1/S2 Real Numbers topics.",

    parameters: {
      operation: "'add' | 'subtract' | 'multiply' - which operation to visualize",
      firstNumber: "number - first operand (can be positive or negative)",
      secondNumber: "number - second operand (can be positive or negative)",
      showSteps: "boolean (optional, default: false) - display step-by-step breakdown of the operation",
      highlightZeroPairs: "boolean (optional, default: true) - highlight zero pairs with dashed yellow circles",
      title: "string (optional) - title above the simulator",
      caption: "string (optional) - explanation text below the visualization"
    },

    exampleUsage: [
      {
        scenario: "Adding positive and negative: 5 + (-3)",
        caption: "Adding 5 and -3: Combine 5 blue discs and 3 red discs, then remove 3 zero pairs to get 2",
        parameters: {
          operation: "add",
          firstNumber: 5,
          secondNumber: -3,
          showSteps: true,
          highlightZeroPairs: true
        }
      },
      {
        scenario: "Subtracting integers: 4 - 7",
        caption: "Subtracting 7 from 4: Add 7 red discs (negative), creating zero pairs. Result: -3",
        parameters: {
          operation: "subtract",
          firstNumber: 4,
          secondNumber: 7,
          showSteps: true,
          highlightZeroPairs: true
        }
      },
      {
        scenario: "Multiplying with negative: (-2) × 3",
        caption: "Negative 2 times 3: Create 2 groups of 3, but negative multiplier flips signs to get -6",
        parameters: {
          operation: "multiply",
          firstNumber: -2,
          secondNumber: 3,
          showSteps: true,
          highlightZeroPairs: false
        }
      },
      {
        scenario: "Zero pairs concept: 3 + (-3)",
        caption: "Adding opposites: 3 blue discs and 3 red discs form 3 zero pairs, result is 0",
        parameters: {
          operation: "add",
          firstNumber: 3,
          secondNumber: -3,
          showSteps: true,
          highlightZeroPairs: true,
          title: "Understanding Zero Pairs"
        }
      }
    ]
  },

  // ============================================
  // STATISTICS TOOLS
  // ============================================

  barChart: {
    name: "Bar Chart Visualizer",
    technicalName: "barChart",
    component: "BarChartVisualizer",
    category: "statistics",
    description: "Displays discrete categorical data with frequencies/counts. Shows vertical or horizontal bars representing frequency for each category. Used for survey results, favorite items, and categorical distributions.",
    whenToUse: "Use for discrete data like categories, survey results, favorite colors, or any data where you count occurrences in distinct categories. Perfect for comparing frequencies across non-numeric categories.",

    parameters: {
      categories: "string[] - Category labels (e.g., ['Red', 'Blue', 'Green'])",
      values: "number[] - Frequencies/counts for each category (same length as categories)",
      xLabel: "string (optional) - X-axis label (e.g., 'Color', 'Category')",
      yLabel: "string (optional, default: 'Frequency') - Y-axis label",
      title: "string (optional) - Chart title displayed at top",
      showValues: "boolean (optional, default: true) - Show frequency numbers on/above bars",
      highlightIndex: "number (optional, default: -1) - Index of bar to highlight (0-based, -1 for none)",
      orientation: "'vertical' | 'horizontal' (optional, default: 'vertical') - Bar direction",
      caption: "string (optional) - Explanation text below chart (supports LaTeX)"
    },

    exampleUsage: [
      {
        scenario: "Survey results - favorite colors",
        caption: "Class survey showing favorite colors: Red (5), Blue (8), Green (3), Yellow (4)",
        parameters: {
          categories: ["Red", "Blue", "Green", "Yellow"],
          values: [5, 8, 3, 4],
          xLabel: "Color",
          yLabel: "Number of Students",
          title: "Favorite Colors",
          showValues: true,
          highlightIndex: 1  // Highlight Blue (most popular)
        }
      },
      {
        scenario: "Horizontal bar chart for long category names",
        caption: "Comparison of programming languages usage",
        parameters: {
          categories: ["JavaScript", "Python", "Java"],
          values: [45, 38, 28],
          xLabel: "Percentage",
          yLabel: "Language",
          orientation: "horizontal",
          showValues: true
        }
      }
    ]
  },

  histogram: {
    name: "Histogram Visualizer",
    technicalName: "histogram",
    component: "HistogramVisualizer",
    category: "statistics",
    description: "Displays continuous data distributions using class intervals and frequencies. Bars are continuous (no gaps) representing frequency density. Shows how data is distributed across ranges.",
    whenToUse: "Use for continuous data like heights, weights, test scores, ages, or temperatures. Perfect for showing distribution shape, identifying patterns, and finding modal classes.",

    parameters: {
      intervals: "Array<{start: number, end: number, frequency: number}> - Class intervals with frequencies. Intervals should be contiguous (end of one = start of next)",
      xLabel: "string (optional) - X-axis label describing the variable (e.g., 'Height (cm)', 'Test Score')",
      yLabel: "string (optional, default: 'Frequency') - Y-axis label",
      title: "string (optional) - Chart title displayed at top",
      showFrequencies: "boolean (optional, default: true) - Show frequency numbers on top of bars",
      showMidpoints: "boolean (optional, default: false) - Show class midpoint markers below bars",
      highlightInterval: "number (optional, default: -1) - Index of interval to highlight (0-based, -1 for none)",
      caption: "string (optional) - Explanation text below chart (supports LaTeX)"
    },

    exampleUsage: [
      {
        scenario: "Height distribution",
        caption: "Height distribution of 30 students showing most are 150-160 cm tall",
        parameters: {
          intervals: [
            { start: 140, end: 150, frequency: 3 },
            { start: 150, end: 160, frequency: 12 },
            { start: 160, end: 170, frequency: 10 },
            { start: 170, end: 180, frequency: 5 }
          ],
          xLabel: "Height (cm)",
          yLabel: "Frequency",
          title: "Student Heights",
          showFrequencies: true,
          highlightInterval: 1  // Highlight modal class
        }
      },
      {
        scenario: "Test scores with midpoints",
        caption: "Showing class midpoints for calculating estimates",
        parameters: {
          intervals: [
            { start: 0, end: 20, frequency: 2 },
            { start: 20, end: 40, frequency: 5 },
            { start: 40, end: 60, frequency: 8 },
            { start: 60, end: 80, frequency: 12 },
            { start: 80, end: 100, frequency: 3 }
          ],
          xLabel: "Test Score",
          showMidpoints: true,
          showFrequencies: true
        }
      }
    ]
  },

  boxPlot: {
    name: "Box Plot Visualizer",
    technicalName: "boxPlot",
    component: "BoxPlotVisualizer",
    category: "statistics",
    description: "Displays five-number summary (min, Q1, median, Q3, max) using box-and-whisker plot. Shows data spread, skewness, and outliers. The box represents the interquartile range (IQR = Q3 - Q1), containing the middle 50% of data.",
    whenToUse: "Use for showing data distribution, comparing spread between datasets, identifying outliers, or visualizing quartiles and range. Essential for understanding data variability and detecting unusual values.",

    parameters: {
      min: "number - Minimum value (lower whisker end)",
      q1: "number - First quartile Q₁ (25th percentile, lower box edge)",
      median: "number - Median (50th percentile, line inside box)",
      q3: "number - Third quartile Q₃ (75th percentile, upper box edge)",
      max: "number - Maximum value (upper whisker end)",
      outliers: "number[] (optional, default: []) - Outlier values plotted as individual points beyond whiskers",
      label: "string (optional) - Dataset label displayed at top (e.g., 'Class A Test Scores')",
      showLabels: "boolean (optional, default: true) - Show five-number summary labels on the plot",
      showIQR: "boolean (optional, default: false) - Highlight and label the IQR region",
      orientation: "'horizontal' | 'vertical' (optional, default: 'horizontal') - Box plot orientation",
      caption: "string (optional) - Explanation text below plot (supports LaTeX)"
    },

    exampleUsage: [
      {
        scenario: "Test scores distribution",
        caption: "Box plot showing test scores: Min=45, Q₁=62, Median=75, Q₃=84, Max=98. IQR=22 shows middle 50% spread.",
        parameters: {
          min: 45,
          q1: 62,
          median: 75,
          q3: 84,
          max: 98,
          label: "Math Test Scores",
          showLabels: true,
          showIQR: true
        }
      },
      {
        scenario: "Data with outliers",
        caption: "Height data with two outliers: one very tall (192cm) and one very short (142cm)",
        parameters: {
          min: 150,
          q1: 160,
          median: 168,
          q3: 175,
          max: 185,
          outliers: [142, 192],
          label: "Student Heights (cm)",
          showLabels: true,
          orientation: "horizontal"
        }
      }
    ]
  },

  scatterPlot: {
    name: "Scatter Plot Visualizer",
    technicalName: "scatterPlot",
    component: "ScatterPlotVisualizer",
    category: "statistics",
    description: "Displays bivariate data as points on x-y axes to show relationships between two variables. Optional trend line shows direction and strength of linear relationship. Used for identifying correlation patterns.",
    whenToUse: "Use for exploring relationships between two variables (e.g., study time vs test score, height vs weight). Perfect for identifying positive/negative correlation, detecting outliers, and showing data clustering patterns.",

    parameters: {
      points: "Array<{x: number, y: number, label?: string}> - Data points to plot. Each point needs x and y coordinates, optional label for annotation",
      xLabel: "string (optional) - X-axis label describing the independent variable (e.g., 'Study Hours', 'Temperature')",
      yLabel: "string (optional) - Y-axis label describing the dependent variable (e.g., 'Test Score', 'Ice Cream Sales')",
      title: "string (optional) - Chart title displayed at top",
      showTrendLine: "boolean (optional, default: false) - Show line of best fit (linear regression)",
      showGrid: "boolean (optional, default: true) - Show grid lines for easier reading",
      xRange: "[number, number] (optional) - X-axis range as [min, max]. Auto-calculated with 10% padding if not provided",
      yRange: "[number, number] (optional) - Y-axis range as [min, max]. Auto-calculated with 10% padding if not provided",
      highlightPoint: "number (optional, default: -1) - Index of point to highlight (0-based, -1 for none)",
      caption: "string (optional) - Explanation text below plot (supports LaTeX)"
    },

    exampleUsage: [
      {
        scenario: "Study time vs test score with positive correlation",
        caption: "Scatter plot showing positive correlation: more study hours lead to higher test scores. Trend line: y = 8.2x + 45",
        parameters: {
          points: [
            { x: 1, y: 55 },
            { x: 2, y: 62 },
            { x: 3, y: 70 },
            { x: 4, y: 75 },
            { x: 5, y: 85 },
            { x: 6, y: 92 }
          ],
          xLabel: "Study Hours",
          yLabel: "Test Score (%)",
          title: "Study Time vs Performance",
          showTrendLine: true,
          showGrid: true
        }
      },
      {
        scenario: "Temperature vs ice cream sales",
        caption: "Scatter plot with labeled outlier point showing unusually high sales",
        parameters: {
          points: [
            { x: 15, y: 120 },
            { x: 20, y: 180 },
            { x: 25, y: 240 },
            { x: 30, y: 310 },
            { x: 22, y: 420, label: "Festival day" }  // Outlier
          ],
          xLabel: "Temperature (°C)",
          yLabel: "Sales ($)",
          showTrendLine: true,
          highlightPoint: 4
        }
      }
    ]
  },

  // ============================================
  // COORDINATE GEOMETRY TOOLS
  // ============================================

  cartesianPlane: {
    name: "Cartesian Plane Visualizer",
    technicalName: "cartesianPlane",
    component: "CartesianPlaneVisualizer",
    category: "coordinate-geometry",
    description: "General-purpose 2D coordinate grid for plotting points, drawing lines, and graphing curves. Supports relations, functions, transformations, and domain/range visualization. Highly versatile tool for 2D coordinate geometry.",
    whenToUse: "Use for 2D coordinate problems: plotting points (relations/functions), graphing linear equations, showing function transformations (shifts, stretches, reflections), visualizing domain/range restrictions, vertical line test, and any problem involving the x-y coordinate plane.",

    parameters: {
      xMin: "number (optional, default: -10) - Minimum x-axis value",
      xMax: "number (optional, default: 10) - Maximum x-axis value",
      yMin: "number (optional, default: -10) - Minimum y-axis value",
      yMax: "number (optional, default: 10) - Maximum y-axis value",
      showGrid: "boolean (optional, default: true) - Show grid lines",
      points: "Array<{x: number, y: number, label?: string, color?: string, style?: 'open' | 'closed'}> (optional) - Points to plot. Use 'open' for hollow circles, 'closed' for filled",
      lines: "Array<{type: 'linear' | 'vertical' | 'horizontal', slope?: number, yIntercept?: number, xValue?: number, yValue?: number, equation?: string, color?: string, style?: 'solid' | 'dashed'}> (optional) - Lines to draw. For linear: provide slope and yIntercept. For vertical: provide xValue. For horizontal: provide yValue",
      curves: "Array<{type: 'quadratic' | 'absolute' | 'custom', points: Array<{x: number, y: number}>, equation?: string, color?: string, style?: 'solid' | 'dashed'}> (optional) - Pre-calculated curve points to connect",
      highlightRegion: "{type: 'vertical' | 'horizontal' | 'rectangle', xMin?: number, xMax?: number, yMin?: number, yMax?: number, color?: string, label?: string} (optional) - Region to highlight (e.g., for domain/range)",
      title: "string (optional) - Title displayed at top",
      xLabel: "string (optional, default: 'x') - X-axis label",
      yLabel: "string (optional, default: 'y') - Y-axis label",
      caption: "string (optional) - Explanation text below plot (supports LaTeX)"
    },

    exampleUsage: [
      {
        scenario: "Plotting a relation as points",
        caption: "A relation showing 4 points on the coordinate plane",
        parameters: {
          points: [
            { x: 1, y: 2, label: "(1,2)" },
            { x: 3, y: 4, label: "(3,4)" },
            { x: 5, y: 1, label: "(5,1)" },
            { x: 2, y: 3, label: "(2,3)" }
          ],
          title: "Relation as Points",
          xMin: -1,
          xMax: 7,
          yMin: -1,
          yMax: 6
        }
      },
      {
        scenario: "Graphing a linear function",
        caption: "The line y = 2x + 1 graphed on the coordinate plane",
        parameters: {
          lines: [
            { type: "linear", slope: 2, yIntercept: 1, equation: "y = 2x + 1" }
          ],
          title: "Linear Function",
          xMin: -5,
          xMax: 5,
          yMin: -5,
          yMax: 12
        }
      },
      {
        scenario: "Vertical line test",
        caption: "Testing if a relation is a function using vertical lines",
        parameters: {
          points: [
            { x: 1, y: 2 },
            { x: 1, y: 4 },
            { x: 3, y: 3 }
          ],
          lines: [
            { type: "vertical", xValue: 1, equation: "x = 1", style: "dashed" }
          ],
          title: "Vertical Line Test",
          caption: "Two points share x=1, so this is NOT a function"
        }
      },
      {
        scenario: "Showing domain restriction",
        caption: "Function defined only for x ≥ 2",
        parameters: {
          lines: [
            { type: "linear", slope: 1, yIntercept: 0, equation: "y = x" }
          ],
          highlightRegion: {
            type: "vertical",
            xMin: 2,
            xMax: 10,
            color: "#10b981",
            label: "Domain: x ≥ 2"
          },
          points: [
            { x: 2, y: 2, style: "closed", label: "(2,2)" }
          ]
        }
      },
      {
        scenario: "Absolute value function",
        caption: "The graph of f(x) = |x|",
        parameters: {
          curves: [
            {
              type: "absolute",
              points: [
                { x: -5, y: 5 },
                { x: -4, y: 4 },
                { x: -3, y: 3 },
                { x: -2, y: 2 },
                { x: -1, y: 1 },
                { x: 0, y: 0 },
                { x: 1, y: 1 },
                { x: 2, y: 2 },
                { x: 3, y: 3 },
                { x: 4, y: 4 },
                { x: 5, y: 5 }
              ],
              equation: "f(x) = |x|"
            }
          ],
          title: "Absolute Value Function"
        }
      }
    ]
  },

  coordinate3DPlane: {
    name: "3D Coordinate Plane with Cuboid",
    technicalName: "coordinate3DPlane",
    component: "Coordinate3DPlaneVisualizer",
    category: "coordinate-geometry",
    description: "3D coordinate system showing a cuboid (rectangular prism) on extended X, Y, Z axes. Shows only origin label and custom points specified by AI. Perfect for teaching 3D coordinates with specific points of interest.",
    whenToUse: "Use for 3D coordinate problems: teaching coordinate system with origin and axes, plotting specific points in 3D space, finding distance between points, calculating midpoint. Shows only origin 'O' and custom points you specify - no vertex labels cluttering the diagram.",

    parameters: {
      length: "string (optional, default: '4') - Y-axis dimension (depth, front-back). Can include units like '4cm' or just '4'",
      width: "string (optional, default: '3') - X-axis dimension (left-right). Can include units like '3cm' or just '3'",
      height: "string (optional, default: '5') - Z-axis dimension (up-down). Can include units like '5cm' or just '5'",

      showFaceDiagonal: "boolean (optional) - Show diagonal on a face of the cuboid",
      showSpaceDiagonal: "boolean (optional) - Show space diagonal (body diagonal) from origin to opposite corner",
      faceDiagonal: "string (optional) - Label for face diagonal (e.g., 'd', '5cm')",
      spaceDiagonal: "string (optional) - Label for space diagonal (e.g., 'd', '7.07cm')",
      diagonalFace: "'front' | 'side' | 'top' | 'bottom' (optional) - Which face to show diagonal on",
      highlightElement: "'length' | 'width' | 'height' | 'faceDiagonal' | 'spaceDiagonal' | 'none' (optional) - Highlight specific element in red",

      showAxes: "boolean (optional, default: true) - Show X (red), Y (green), Z (blue) axes with arrows and labels. Axes extend well beyond the cuboid.",
      showGrid: "boolean (optional, default: false) - Show grid lines on specified plane",
      gridPlane: "'xy' | 'xz' | 'yz' | 'none' (optional, default: 'none') - Which coordinate plane to show grid on",
      showOriginLabel: "boolean (optional, default: true) - Show 'O' label at origin point (0,0,0)",

      customPoints: "array of {x: number, y: number, z: number, label: string} (optional) - Specific points to display on the diagram. Example: [{x: 4, y: 3, z: 5, label: 'P'}] will highlight point (4,3,5) with red dot. If identifying point on a plane for e.g. XY plane then z SHOULD BE 0",

      title: "string (optional) - Title displayed above visualization",
      caption: "string (optional) - Explanation text below visualization (supports LaTeX)"
    },

    exampleUsage: [
      {
        scenario: "Plotting a point P in 3D space",
        caption: "Point P(4,3,5) plotted on 3D coordinate system with cuboid reference",
        parameters: {
          length: "4",
          width: "6",
          height: "5",
          showAxes: true,
          showOriginLabel: true,
          customPoints: [
            { x: 4, y: 3, z: 5, label: "P" }
          ]
        }
      },
      {
        scenario: "Finding distance between two points in 3D",
        caption: "Points A(2,1,3) and B(5,4,7) showing distance calculation setup",
        parameters: {
          length: "5",
          width: "6",
          height: "8",
          showAxes: true,
          showOriginLabel: true,
          customPoints: [
            { x: 2, y: 1, z: 3, label: "A" },
            { x: 5, y: 4, z: 7, label: "B" }
          ]
        }
      },
      {
        scenario: "Finding midpoint M between two points",
        caption: "Midpoint M(3.5, 2.5, 5) between A(2,1,3) and B(5,4,7)",
        parameters: {
          length: "5",
          width: "6",
          height: "8",
          showAxes: true,
          showOriginLabel: true,
          customPoints: [
            { x: 2, y: 1, z: 3, label: "A" },
            { x: 5, y: 4, z: 7, label: "B" },
            { x: 3.5, y: 2.5, z: 5, label: "M" }
          ]
        }
      },
      {
        scenario: "Teaching 3D coordinate system with grid",
        caption: "3D coordinate axes with XY-plane grid for reference",
        parameters: {
          length: "4",
          width: "6",
          height: "5",
          showAxes: true,
          showGrid: true,
          gridPlane: "xy",
          showOriginLabel: true,
          customPoints: [
            { x: 4, y: 6, z: 0, label: "P" }]
        }
      }
    ]
  },

  // ============================================
  // DIFFERENTIAL CALCULUS TOOLS
  // ============================================

  functionGraph: {
    name: "Function Grapher",
    technicalName: "functionGraph",
    component: "FunctionGraphVisualizer",
    category: "calculus",
    description: "Generic function plotter for visualizing mathematical functions",
    whenToUse: "Use for plotting any function expression, marking specific points, or showing function behavior. IMPORTANT: For rational functions or functions with asymptotes (e.g., 1/x, 1/(x^2+1)), ALWAYS specify yMin and yMax to prevent rendering crashes from extreme values.",

    parameters: {
      expression: "string - function expression like 'x^2', 'sin(x)', '2*x+3'",
      xMin: "number (optional, default: -5) - minimum x value",
      xMax: "number (optional, default: 5) - maximum x value",
      yMin: "number (**REQUIRED for rational functions/asymptotes**, otherwise auto-calculated) - minimum y value to prevent crashes from extreme values",
      yMax: "number (**REQUIRED for rational functions/asymptotes**, otherwise auto-calculated) - maximum y value to prevent crashes from extreme values",
      showGrid: "boolean (optional, default: true) - show grid lines",
      showPoints: "array (optional) - points to mark: [{x: number, label?: string, color?: string}]",
      color: "string (optional, default: blue) - curve color",
      label: "string (optional) - function label",
      caption: "string (optional) - caption below graph",
      xAxisMode: "string (optional, default: 'radians') - 'degrees' or 'radians'. **CRITICAL for trig functions**: When xMin/xMax are in degrees (e.g., 0-720), MUST set xAxisMode: 'degrees' to convert x values to radians before evaluating trig functions"
    },

    exampleUsage: {
      scenario: "Plot f(x) = x^2 with marked point at x=2",
      caption: "Quadratic function with vertex at origin",
      parameters: {
        expression: "x^2",
        xMin: -3,
        xMax: 3,
        showPoints: [{x: 2, label: "(2,4)", color: "#ef4444"}],
        label: "f(x) = x²"
      }
    }
  },

  limitVisualizer: {
    name: "Limit Visualizer",
    technicalName: "limitVisualizer",
    component: "LimitVisualizerComponent",
    category: "calculus",
    description: "Visualize limits at a point, showing approach from both sides and continuity",
    whenToUse: "Use for teaching limits, showing when limits exist vs don't exist, and demonstrating continuity",

    parameters: {
      expression: "string - function expression",
      limitPoint: "number - x-value where limit is evaluated",
      limitValue: "number (optional) - the limit value if it exists",
      leftValue: "number (optional) - f(x) as x approaches from left",
      rightValue: "number (optional) - f(x) as x approaches from right",
      functionValue: "number (optional) - f(limitPoint), may differ from limit",
      showApproach: "boolean (optional, default: true) - show approach arrows",
      xMin: "number (optional, auto-calculated) - minimum x",
      xMax: "number (optional, auto-calculated) - maximum x",
      caption: "string (optional) - caption"
    },

    exampleUsage: {
      scenario: "Limit exists but function not continuous",
      caption: "lim(x→2) f(x) = 4, but f(2) = 6 (removable discontinuity)",
      parameters: {
        expression: "(x^2-4)/(x-2)",
        limitPoint: 2,
        limitValue: 4,
        functionValue: 6,
        showApproach: true
      }
    }
  },

  tangentVisualizer: {
    name: "Tangent Line Visualizer",
    technicalName: "tangentVisualizer",
    component: "TangentVisualizerComponent",
    category: "calculus",
    description: "Show function with tangent line at a specific point",
    whenToUse: "Use for introducing derivatives, showing instantaneous rate of change, or demonstrating tangent lines. IMPORTANT: For polynomial functions of degree ≥3 (cubic, quartic, etc.), specify xMin/xMax centered around tangentPoint to constrain the view and prevent extreme function values far from the point of interest.",

    parameters: {
      expression: "string - function expression",
      tangentPoint: "number - x-value where tangent is drawn",
      slope: "number (optional, auto-calculated) - tangent slope",
      showSlope: "boolean (optional, default: true) - show slope value",
      showPoint: "boolean (optional, default: true) - show point of tangency",
      xMin: "number (**Recommended for polynomials degree≥3**) - minimum x to constrain range near tangent point",
      xMax: "number (**Recommended for polynomials degree≥3**) - maximum x to constrain range near tangent point",
      caption: "string (optional) - caption"
    },

    exampleUsage: {
      scenario: "Tangent to f(x)=x^2 at x=1",
      caption: "Tangent line has slope 2 at x=1",
      parameters: {
        expression: "x^2",
        tangentPoint: 1,
        slope: 2,
        showSlope: true
      }
    }
  },

  secantTangentComparison: {
    name: "Secant vs Tangent Comparison",
    technicalName: "secantTangentComparison",
    component: "SecantTangentComparisonVisualizer",
    category: "calculus",
    description: "Compare secant line (average rate) with tangent line (instantaneous rate)",
    whenToUse: "Use for teaching the difference between average and instantaneous rates of change",

    parameters: {
      expression: "string - function expression",
      point1: "number - first point x-coordinate (for secant)",
      point2: "number - second point x-coordinate (for secant)",
      tangentPoint: "number (optional, defaults to point1) - tangent point",
      showBoth: "boolean (optional, default: true) - show both lines",
      showSlopes: "boolean (optional, default: true) - show slope values",
      xMin: "number (optional) - minimum x",
      xMax: "number (optional) - maximum x",
      caption: "string (optional) - caption"
    },

    exampleUsage: {
      scenario: "Secant vs tangent for f(x)=x^2",
      caption: "As points get closer, secant approaches tangent",
      parameters: {
        expression: "x^2",
        point1: 1,
        point2: 2,
        tangentPoint: 1,
        showBoth: true
      }
    }
  },

  derivativeGrapher: {
    name: "Function and Derivative Grapher",
    technicalName: "derivativeGrapher",
    component: "DerivativeGrapherVisualizer",
    category: "calculus",
    description: "Side-by-side graphs of f(x) and f'(x) showing their relationship",
    whenToUse: "Use for showing how derivative relates to original function behavior",

    parameters: {
      originalExpression: "string - f(x) expression",
      derivativeExpression: "string - f'(x) expression",
      showRelation: "boolean (optional, default: false) - connect corresponding points",
      highlightPoints: "array (optional) - x-values to highlight: [1, 2, 3]",
      xMin: "number (optional, default: -5) - minimum x",
      xMax: "number (optional, default: 5) - maximum x",
      caption: "string (optional) - caption"
    },

    exampleUsage: {
      scenario: "f(x)=x^2 and f'(x)=2x",
      caption: "Where f(x) increasing, f'(x) > 0; where decreasing, f'(x) < 0",
      parameters: {
        originalExpression: "x^2",
        derivativeExpression: "2*x",
        highlightPoints: [0, 2]
      }
    }
  },

  firstPrinciplesVisualizer: {
    name: "First Principles Visualizer",
    technicalName: "firstPrinciplesVisualizer",
    component: "FirstPrinciplesVisualizer",
    category: "calculus",
    description: "Geometric interpretation of derivative definition with rise/run triangle",
    whenToUse: "Use for teaching derivative definition from first principles",

    parameters: {
      expression: "string - function expression",
      point: "number - x-value where derivative is calculated",
      h: "number - delta x value (small like 0.5 or 0.1)",
      showTriangle: "boolean (optional, default: true) - show rise/run triangle",
      showFormula: "boolean (optional, default: true) - show derivative formula",
      xMin: "number (optional) - minimum x",
      xMax: "number (optional) - maximum x",
      caption: "string (optional) - caption"
    },

    exampleUsage: {
      scenario: "First principles for f(x)=x^2 at x=1 with h=0.5",
      caption: "As h→0, [f(x+h)-f(x)]/h approaches f'(x)",
      parameters: {
        expression: "x^2",
        point: 1,
        h: 0.5,
        showTriangle: true,
        showFormula: true
      }
    }
  },

  chainRuleVisualizer: {
    name: "Chain Rule Visualizer",
    technicalName: "chainRuleVisualizer",
    component: "ChainRuleVisualizer",
    category: "calculus",
    description: "Visualize function composition for chain rule",
    whenToUse: "Use for teaching chain rule and function composition",

    parameters: {
      outerFunction: "string - f(u) in terms of u",
      innerFunction: "string - g(x) in terms of x",
      compositeExpression: "string (optional) - f(g(x)) composite",
      evaluationPoint: "number (optional, default: 1) - x to evaluate",
      showSteps: "boolean (optional, default: true) - show step breakdown",
      caption: "string (optional) - caption"
    },

    exampleUsage: {
      scenario: "Chain rule for (2x+1)^3",
      caption: "d/dx[f(g(x))] = f'(g(x))·g'(x)",
      parameters: {
        outerFunction: "u^3",
        innerFunction: "2*x+1",
        compositeExpression: "(2*x+1)^3",
        evaluationPoint: 1
      }
    }
  },

  normalLineGrapher: {
    name: "Normal Line Grapher",
    technicalName: "normalLineGrapher",
    component: "NormalLineGrapherVisualizer",
    category: "calculus",
    description: "Show tangent and perpendicular normal line",
    whenToUse: "Use for teaching normal lines and perpendicular gradients. CRITICAL: ALWAYS specify xMin/xMax to constrain the normal line, as it can extend to extreme y-values (especially when tangent is steep). Center the range around the point of tangency.",

    parameters: {
      expression: "string - function expression",
      point: "number - x-value where lines are drawn",
      tangentSlope: "number (optional, auto-calculated) - tangent slope",
      showAngles: "boolean (optional, default: true) - show perpendicular indicator",
      showSlopes: "boolean (optional, default: true) - show slope values",
      xMin: "number (**STRONGLY RECOMMENDED**, default: point-4) - minimum x to constrain normal line extension and prevent extreme y-values",
      xMax: "number (**STRONGLY RECOMMENDED**, default: point+4) - maximum x to constrain normal line extension and prevent extreme y-values",
      caption: "string (optional) - caption"
    },

    exampleUsage: {
      scenario: "Tangent and normal at x=2 for f(x)=x^2",
      caption: "Normal perpendicular to tangent: m₁·m₂ = -1",
      parameters: {
        expression: "x^2",
        point: 2,
        showAngles: true
      }
    }
  },

  stationaryPointsVisualizer: {
    name: "Stationary Points Visualizer",
    technicalName: "stationaryPointsVisualizer",
    component: "StationaryPointsVisualizer",
    category: "calculus",
    description: "Mark and classify stationary points (maxima, minima, inflection)",
    whenToUse: "Use for showing critical points where f'(x)=0",

    parameters: {
      expression: "string - function expression",
      stationaryPoints: "array - [{x: number, y: number, type: 'max'|'min'|'inflection', label?: string}]",
      showDerivativeZero: "boolean (optional, default: true) - show f'(x)=0 annotation",
      xMin: "number (optional) - minimum x",
      xMax: "number (optional) - maximum x",
      caption: "string (optional) - caption"
    },

    exampleUsage: {
      scenario: "f(x)=x^3-3x with max and min",
      caption: "Local maximum at (-1,2) and local minimum at (1,-2)",
      parameters: {
        expression: "x^3-3*x",
        stationaryPoints: [
          {x: -1, y: 2, type: "max", label: "Max"},
          {x: 1, y: -2, type: "min", label: "Min"}
        ]
      }
    }
  },

  optimizationGrapher: {
    name: "Optimization Grapher",
    technicalName: "optimizationGrapher",
    component: "OptimizationGrapherVisualizer",
    category: "calculus",
    description: "Visualize optimization problems with marked optimal point",
    whenToUse: "Use for applied optimization problems (maximize/minimize)",

    parameters: {
      expression: "string - function to optimize",
      optimal: "object - {x: number, y: number} optimal point",
      type: "string (optional, default: 'maximize') - 'maximize' or 'minimize'",
      constraint: "string (optional) - constraint description",
      showConstraints: "boolean (optional, default: false) - shade constraint region",
      xMin: "number (optional) - minimum x",
      xMax: "number (optional) - maximum x",
      caption: "string (optional) - caption"
    },

    exampleUsage: {
      scenario: "Maximize area with perimeter 20",
      caption: "Maximum area 25 when square is 5×5",
      parameters: {
        expression: "x*(10-x)",
        optimal: {x: 5, y: 25},
        type: "maximize",
        constraint: "x + y = 10 (half-perimeter)"
      }
    }
  },

  // ============================================
  // INTEGRATION TOOLS
  // ============================================

  areaApproximation: {
    name: "Area Approximation Visualizer",
    technicalName: "areaApproximation",
    component: "AreaApproximationVisualizer",
    category: "calculus",
    description: "Visualize area under curve using rectangle approximations (left, right, midpoint Riemann sums)",
    whenToUse: "Use when teaching Riemann sums, rectangle approximation method, or introducing integration as area under curve",

    parameters: {
      functionExpression: "string - function expression (e.g., 'x^2', '2*x+1', 'sin(x)')",
      lowerBound: "number - lower limit of integration (a)",
      upperBound: "number - upper limit of integration (b)",
      rectangles: "number (2-20) - number of rectangles to use",
      method: "'left' | 'right' | 'midpoint' - approximation method",
      showExact: "boolean (optional, default: false) - show exact area for comparison"
    },

    exampleUsage: {
      scenario: "Approximate area under x^2 from 0 to 2 using 6 left rectangles",
      caption: "Using 6 left rectangles to approximate ∫₀² x² dx",
      parameters: {
        functionExpression: "x^2",
        lowerBound: 0,
        upperBound: 2,
        rectangles: 6,
        method: "left",
        showExact: true
      }
    }
  },

  definiteIntegralVisualizer: {
    name: "Definite Integral Visualizer",
    technicalName: "definiteIntegralVisualizer",
    component: "DefiniteIntegralVisualizer",
    category: "calculus",
    description: "Visualize definite integrals with shaded area under curve between bounds",
    whenToUse: "Use for definite integral problems, showing area between curve and x-axis, or when evaluating ∫ₐᵇ f(x)dx",

    parameters: {
      functionExpression: "string - function expression (e.g., 'x^2+1', '3*x', 'cos(x)')",
      lowerBound: "number - lower limit a",
      upperBound: "number - upper limit b",
      shadeArea: "boolean (optional, default: true) - shade the area under curve",
      showValue: "boolean (optional, default: true) - display calculated integral value"
    },

    exampleUsage: {
      scenario: "Evaluate ∫₁³ (2x+1) dx",
      caption: "Definite integral from 1 to 3 of 2x+1",
      parameters: {
        functionExpression: "2*x+1",
        lowerBound: 1,
        upperBound: 3,
        shadeArea: true,
        showValue: true
      }
    }
  },

  riemannSumVisualizer: {
    name: "Riemann Sum Comparison",
    technicalName: "riemannSumVisualizer",
    component: "RiemannSumVisualizer",
    category: "calculus",
    description: "Compare multiple Riemann sum approximation methods side-by-side (left, right, midpoint, trapezoid)",
    whenToUse: "Use when comparing accuracy of different approximation methods or teaching the relationship between Riemann sums and integration",

    parameters: {
      functionExpression: "string - function to integrate",
      lowerBound: "number - lower limit a",
      upperBound: "number - upper limit b",
      partitions: "number (4-12) - number of subdivisions",
      showMethods: "Array<'left'|'right'|'midpoint'|'trapezoid'> (optional, default: ['left','right','midpoint']) - which methods to compare"
    },

    exampleUsage: {
      scenario: "Compare left, right, and midpoint approximations for x^2 from 0 to 2 using 8 partitions",
      caption: "Compare approximation methods with 8 partitions",
      parameters: {
        functionExpression: "x^2",
        lowerBound: 0,
        upperBound: 2,
        partitions: 8,
        showMethods: ["left", "right", "midpoint", "trapezoid"]
      }
    }
  },

  // ============================================
  // PROBABILITY TOOLS
  // ============================================

  probabilityTree: {
    name: "Probability Tree Diagram",
    technicalName: "probabilityTree",
    component: "ProbabilityTreeVisualizer",
    category: "probability",
    description: "Interactive probability tree for multi-stage experiments. Shows branches with outcomes and probabilities, multiply-along-branch rule, and final outcome probabilities.",
    whenToUse: "Use for two or three-stage experiments (coin flips, dice rolls, drawing with/without replacement), conditional probability, dependent/independent events, and calculating P(specific sequence).",

    parameters: {
      stage1: "Array<{outcome: string, probability: number}> - first stage branches",
      stage2: "Array<{outcome: string, probability: number}> - second stage branches",
      stage3: "Array<{outcome: string, probability: number}> (optional) - third stage branches",
      highlightPaths: "string[] (optional, default: []) - paths to highlight like ['Heads-Red', 'Tails-Blue']",
      showProbabilities: "boolean (optional, default: true) - show probabilities on branches and endpoints",
      caption: "string (optional) - explanation text"
    },

    exampleUsage: [
      {
        scenario: "Two coin flips",
        caption: "Probability tree showing all outcomes for flipping two coins",
        parameters: {
          stage1: [
            { outcome: "Heads", probability: 0.5 },
            { outcome: "Tails", probability: 0.5 }
          ],
          stage2: [
            { outcome: "Heads", probability: 0.5 },
            { outcome: "Tails", probability: 0.5 }
          ],
          showProbabilities: true
        }
      },
      {
        scenario: "Drawing without replacement",
        caption: "Drawing 2 balls from bag with 3 red, 2 blue (without replacement)",
        parameters: {
          stage1: [
            { outcome: "Red", probability: 0.6 },
            { outcome: "Blue", probability: 0.4 }
          ],
          stage2: [
            { outcome: "Red", probability: 0.5 },
            { outcome: "Blue", probability: 0.5 }
          ],
          highlightPaths: ["Red-Red"],
          caption: "Note: Stage 2 probabilities change based on Stage 1 outcome"
        }
      },
      {
        scenario: "Medical testing (3 stages)",
        caption: "Disease testing with initial probability, test result, and confirmation",
        parameters: {
          stage1: [
            { outcome: "Disease", probability: 0.01 },
            { outcome: "No Disease", probability: 0.99 }
          ],
          stage2: [
            { outcome: "Positive", probability: 0.95 },
            { outcome: "Negative", probability: 0.05 }
          ],
          stage3: [
            { outcome: "Confirm+", probability: 0.99 },
            { outcome: "Confirm-", probability: 0.01 }
          ]
        }
      }
    ]
  },

  twoWayTable: {
    name: "Two-Way Table (Contingency Table)",
    technicalName: "twoWayTable",
    component: "TwoWayTableVisualizer",
    category: "probability",
    description: "Interactive two-way table for categorical data and conditional probability. Shows row/column totals, highlights cells/rows/columns for conditional probability calculations.",
    whenToUse: "Use for survey data, medical testing results, customer categorization, calculating P(A|B) from tables, identifying independence, or organizing categorical data.",

    parameters: {
      rowLabels: "string[] - row category labels",
      columnLabels: "string[] - column category labels",
      data: "number[][] - 2D array of counts: data[row][column]",
      highlightCell: "{row: number, col: number} (optional) - highlight specific cell",
      highlightRow: "number (optional) - highlight entire row (for 'given' condition)",
      highlightColumn: "number (optional) - highlight entire column (for 'given' condition)",
      showTotals: "boolean (optional, default: true) - show row, column, and grand totals",
      showProbabilities: "boolean (optional, default: false) - show probabilities alongside counts",
      caption: "string (optional) - explanation text"
    },

    exampleUsage: [
      {
        scenario: "Gender vs Purchase preference survey",
        caption: "Two-way table showing survey results for 110 people",
        parameters: {
          rowLabels: ["Male", "Female"],
          columnLabels: ["Yes", "No"],
          data: [
            [30, 20],
            [45, 15]
          ],
          showTotals: true,
          showProbabilities: false
        }
      },
      {
        scenario: "Conditional probability: P(Male | Yes)",
        caption: "Find P(Male | answered Yes). Highlight 'Yes' column since it's the condition.",
        parameters: {
          rowLabels: ["Male", "Female"],
          columnLabels: ["Yes", "No"],
          data: [
            [30, 20],
            [45, 15]
          ],
          highlightColumn: 0,
          highlightCell: { row: 0, col: 0 },
          showTotals: true,
          caption: "P(Male | Yes) = 30/75 = 0.4"
        }
      },
      {
        scenario: "Medical testing: Disease vs Test result",
        caption: "100 patients: Disease status vs Test result",
        parameters: {
          rowLabels: ["Has Disease", "No Disease"],
          columnLabels: ["Test Positive", "Test Negative"],
          data: [
            [9, 1],
            [5, 85]
          ],
          showTotals: true,
          showProbabilities: true,
          caption: "Find P(Has Disease | Test Positive) = 9/(9+5) = 9/14"
        }
      }
    ]
  },

  // ============================================
  // VECTOR TOOLS
  // ============================================

  vectorDiagram: {
    name: "Vector Diagram Tool",
    technicalName: "vectorDiagram",
    component: "VectorDiagramTool",
    category: "general",
    description: "Visualizes vectors on a coordinate grid with support for operations like addition, subtraction, and scalar multiplication. Shows geometric representation of vectors with arrows. Grid automatically scales to fit any vector size.",
    whenToUse: "Use when teaching vector addition (triangle/parallelogram law), vector subtraction, or scalar multiplication. Perfect for geometric representation of vectors. Use for foundational vector concepts. For relative motion with same-direction vectors, use operation='none' with appropriate positive/negative coordinates.",

    parameters: {
      vectors: "string - JSON array of vectors: [{\"label\":\"a\",\"x\":3,\"y\":4},{\"label\":\"b\",\"x\":-2,\"y\":1}]. Each vector needs label (string), x (number), y (number). Keep it simple with 1-3 vectors maximum. Use negative coordinates to represent opposite directions (e.g., x=-150 for West).",
      operation: "'none' | 'add' | 'subtract' | 'scalar' (default: 'none') - operation to visualize. 'add' shows triangle law, 'subtract' shows a and -b from origin (for teaching a-b=a+(-b) concept), 'scalar' shows scalar multiples, 'none' shows individual vectors as-is from origin. IMPORTANT: For relative motion problems (cars, trains), use 'none' and encode direction in coordinates (e.g., x=60, x=40 for same direction; x=100, x=-150 for opposite directions). Only use 'subtract' when teaching the mathematical concept of vector subtraction.",
      resultant: "boolean (default: false) - show resultant vector in green when operation is 'add' or 'subtract'",
      showComponents: "boolean (default: false) - show i,j component breakdown as dashed lines for each vector",
      gridSize: "number (optional, auto-scales if not provided) - manual grid scale override. Grid automatically calculates optimal scale based on vector magnitudes. Only specify this to force a particular scale. Supports any positive number."
    },

    exampleUsage: [
      {
        scenario: "Vector addition using triangle law",
        caption: "Adding vectors a = (3,4) and b = (-2,1) using triangle law with resultant",
        parameters: {
          vectors: "[{\"label\":\"a\",\"x\":3,\"y\":4},{\"label\":\"b\",\"x\":-2,\"y\":1}]",
          operation: "add",
          resultant: true,
          showComponents: false,
          gridSize: 10
        }
      },
      {
        scenario: "Individual vectors from origin",
        caption: "Two vectors p and q shown from the origin",
        parameters: {
          vectors: "[{\"label\":\"p\",\"x\":4,\"y\":3},{\"label\":\"q\",\"x\":2,\"y\":-1}]",
          operation: "none",
          resultant: false,
          showComponents: false,
          gridSize: 10
        }
      },
      {
        scenario: "Vector with component breakdown",
        caption: "Vector v = (3,2) with i and j components shown",
        parameters: {
          vectors: "[{\"label\":\"v\",\"x\":3,\"y\":2}]",
          operation: "none",
          resultant: false,
          showComponents: true,
          gridSize: 10
        }
      },
      {
        scenario: "Relative motion - same direction",
        caption: "Car A at 60 km/h east, Car B at 40 km/h east (both pointing right)",
        parameters: {
          vectors: "[{\"label\":\"v_A\",\"x\":60,\"y\":0},{\"label\":\"v_B\",\"x\":40,\"y\":0}]",
          operation: "none",
          resultant: false,
          showComponents: false
        }
      },
      {
        scenario: "Relative motion - opposite directions",
        caption: "Train A at 100 km/h east, Train B at 150 km/h west (opposite directions)",
        parameters: {
          vectors: "[{\"label\":\"v_A\",\"x\":100,\"y\":0},{\"label\":\"v_B\",\"x\":-150,\"y\":0}]",
          operation: "none",
          resultant: false,
          showComponents: false
        }
      },
      {
        scenario: "Teaching subtraction concept",
        caption: "Vector subtraction a - b = a + (-b), shows both a and -b",
        parameters: {
          vectors: "[{\"label\":\"a\",\"x\":6,\"y\":0},{\"label\":\"b\",\"x\":4,\"y\":0}]",
          operation: "subtract",
          resultant: false,
          showComponents: false
        }
      }
    ]
  },

  componentForm: {
    name: "Component Form Visualizer",
    technicalName: "componentForm",
    component: "ComponentFormVisualizer",
    category: "general",
    description: "Shows vector in both geometric and component form (column notation and i,j notation) on a coordinate grid. Displays magnitude calculation and component breakdown.",
    whenToUse: "Use when teaching component form, i,j notation, column vectors, or converting between geometric and algebraic representation. Perfect for sections on position vectors and vector components.",

    parameters: {
      vectorX: "number - x-component of the vector (horizontal component)",
      vectorY: "number - y-component of the vector (vertical component)",
      label: "string (default: 'v') - vector label (e.g., 'a', 'b', 'p', 'v')",
      showIJ: "boolean (default: true) - show i,j notation below diagram (e.g., 3i + 4j)",
      showColumn: "boolean (default: true) - show column vector notation below diagram",
      showGrid: "boolean (default: true) - show coordinate grid with axes",
      highlightComponent: "'none' | 'x' | 'y' | 'both' (default: 'none') - highlight specific component in red. Use 'x' when focusing on horizontal component, 'y' for vertical, 'both' for complete breakdown, 'none' for regular display"
    },

    exampleUsage: [
      {
        scenario: "Basic vector in component form",
        caption: "Vector a = (3,4) shown with both notations and magnitude",
        parameters: {
          vectorX: 3,
          vectorY: 4,
          label: "a",
          showIJ: true,
          showColumn: true,
          showGrid: true,
          highlightComponent: "none"
        }
      },
      {
        scenario: "Highlighting x-component",
        caption: "Vector p = (5,2) with horizontal component highlighted",
        parameters: {
          vectorX: 5,
          vectorY: 2,
          label: "p",
          showIJ: true,
          showColumn: true,
          showGrid: true,
          highlightComponent: "x"
        }
      },
      {
        scenario: "Negative components",
        caption: "Vector b = (-2,3) showing negative x-component",
        parameters: {
          vectorX: -2,
          vectorY: 3,
          label: "b",
          showIJ: true,
          showColumn: true,
          showGrid: true,
          highlightComponent: "none"
        }
      }
    ]
  },

  dotProduct: {
    name: "Dot Product Visualizer",
    technicalName: "dotProduct",
    component: "DotProductVisualizer",
    category: "general",
    description: "Visualizes two vectors and calculates their dot product, angle between them, and checks for perpendicularity. Shows both geometric and algebraic representation of scalar product.",
    whenToUse: "Use when teaching dot product (scalar product), angle between vectors, perpendicularity test (a·b = 0), or geometric applications of dot product. Essential for advanced vector topics.",

    parameters: {
      vector1X: "number - x-component of first vector",
      vector1Y: "number - y-component of first vector",
      vector2X: "number - x-component of second vector",
      vector2Y: "number - y-component of second vector",
      label1: "string (default: 'a') - label for first vector",
      label2: "string (default: 'b') - label for second vector",
      showAngle: "boolean (default: true) - show angle arc and angle calculation between vectors",
      showDotProduct: "boolean (default: true) - show dot product calculation and value",
      showMagnitudes: "boolean (default: false) - show magnitude values of both vectors"
    },

    exampleUsage: [
      {
        scenario: "Calculating dot product and angle",
        caption: "Find dot product of a = (2,3) and b = (4,1) and angle between them",
        parameters: {
          vector1X: 2,
          vector1Y: 3,
          vector2X: 4,
          vector2Y: 1,
          label1: "a",
          label2: "b",
          showAngle: true,
          showDotProduct: true,
          showMagnitudes: false
        }
      },
      {
        scenario: "Perpendicular vectors",
        caption: "Vectors p = (3,2) and q = (-2,3) are perpendicular (p·q = 0)",
        parameters: {
          vector1X: 3,
          vector1Y: 2,
          vector2X: -2,
          vector2Y: 3,
          label1: "p",
          label2: "q",
          showAngle: true,
          showDotProduct: true,
          showMagnitudes: true
        }
      },
      {
        scenario: "Testing perpendicularity",
        caption: "Check if vectors u = (1,2) and v = (4,-2) are perpendicular",
        parameters: {
          vector1X: 1,
          vector1Y: 2,
          vector2X: 4,
          vector2Y: -2,
          label1: "u",
          label2: "v",
          showAngle: true,
          showDotProduct: true,
          showMagnitudes: false
        }
      }
    ]
  }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get tool definition by technical name
 */
export function getToolDefinition(technicalName: string): MathToolDefinition | undefined {
  return MATH_TOOLS_REGISTRY[technicalName];
}

/**
 * Get all tools for a specific category
 */
export function getToolsByCategory(category: MathToolDefinition['category']): Record<string, MathToolDefinition> {
  return Object.entries(MATH_TOOLS_REGISTRY)
    .filter(([_, tool]) => tool.category === category)
    .reduce((acc, [key, tool]) => ({ ...acc, [key]: tool }), {});
}

/**
 * Get filtered tools by technical names
 */
export function getFilteredTools(technicalNames: string[]): Record<string, MathToolDefinition> {
  return technicalNames.reduce((acc, name) => {
    const tool = MATH_TOOLS_REGISTRY[name];
    if (tool) {
      acc[name] = tool;
    }
    return acc;
  }, {} as Record<string, MathToolDefinition>);
}

/**
 * Get all tool names (for validation)
 */
export function getAllToolNames(): string[] {
  return Object.keys(MATH_TOOLS_REGISTRY);
}

/**
 * Check if a tool exists
 */
export function toolExists(technicalName: string): boolean {
  return technicalName in MATH_TOOLS_REGISTRY;
}

// ============================================
// EXPORTS
// ============================================

export type MathToolName = keyof typeof MATH_TOOLS_REGISTRY;

// Legacy export for backward compatibility with index.ts
export const MATH_TOOL_COMPONENTS = Object.entries(MATH_TOOLS_REGISTRY).reduce(
  (acc, [key, tool]) => ({
    ...acc,
    [key]: tool.component
  }),
  {} as Record<string, string>
);
