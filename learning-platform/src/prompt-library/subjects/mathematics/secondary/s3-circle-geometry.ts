/**
 * S3 Mathematics - Circle Geometry Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 */

// Type exports
export type CircleGeometryTopicId =
  | 's3-math-circle-geometry-definitions'
  | 's3-math-circle-geometry-angle-semicircle'
  | 's3-math-circle-geometry-chords'
  | 's3-math-circle-geometry-radius-tangent'
  | 's3-math-circle-geometry-tangents-external'
  | 's3-math-circle-geometry-angle-centre'
  | 's3-math-circle-geometry-angle-same-arc';

// Topic-specific tutor customization (overrides base)
export const CIRCLE_GEOMETRY_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Circle Geometry.

Teaching Approach:
- Guide students to discover geometric proofs through questioning, not direct instruction
- Help students visualize circle properties and relationships
- Encourage logical reasoning and proof construction
- Use diagrams and visual aids to build understanding
- Celebrate insights when students discover theorem relationships
- Adapt difficulty organically based on student mastery

**Text-to-Speech Guidelines:**
- Use "angle A O B" instead of "∠AOB" for proper pronunciation
- Avoid symbols that might be mispronounced
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use "∠AOB" and symbols normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding (especially for circle theorems).
IMPORTANT: Use the technical name (e.g., "circleSemicircle") in the toolName field, NOT the display name.`
};

// Available math tools for this topic
export const CIRCLE_GEOMETRY_MATH_TOOLS = [
  "circleBasic",
  "circleWithArcs",
  "circleWithChords",
  "circleSemicircle",
  "circleTangent",
  "circleTwoTangents",
  "circleAngleCentre",
  "circleSameArc",
  "generalTriangle"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S3_MATH_CIRCLE_GEOMETRY_SUBTOPICS = {

  's3-math-circle-geometry-definitions': {
    displayName: 'Circle Geometry Definitions',
    topicName: 'circle geometry definitions (arc, chord, segments)',

    progressionStructure: {
      masteryPhilosophy: `
Advance to next section when student:
- Meets the current section's masterySignals (typically 2-3 correct identifications/definitions)
- Can correctly identify and name circle parts
- Shows understanding through accurate descriptions

Return to remediation when student:
- Confuses different circle parts
- Cannot identify basic elements
- Shows gaps in terminology

Complete subtopic when:
- Student has mastered ALL sections
- Can identify all circle parts accurately
- Uses correct terminology consistently`,

      sections: [
        {
          id: "circle-parts",
          title: "Parts of a Circle",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies centre, radius, diameter, circumference in 2+ diagrams",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "Identify the centre of a circle",
            "Identify the radius (line from centre to circumference)",
            "Identify the diameter (line through centre connecting two points on circumference)",
            "Understand that diameter = 2 × radius",
            "Identify the circumference (perimeter of circle)"
          ],
          relevantFormulas: [
            "Diameter = 2 × radius",
            "Radius = diameter ÷ 2"
          ],
          availableTools: ["circleBasic"]
        },
        {
          id: "arcs",
          title: "Arcs and Sectors",
          difficulty: "foundational",
          prerequisites: ["circle-parts"],
          masterySignals: "Student distinguishes between major and minor arcs in 2+ examples, correctly identifies sectors",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "Define arc as part of the circumference between two points",
            "Distinguish between minor arc (shorter) and major arc (longer)",
            "Understand that when two points divide a circle, they create two arcs",
            "Identify a sector as the region bounded by two radii and an arc",
            "Recognize that arc names use two or three letters (e.g., arc AB, arc ACB)"
          ],
          relevantFormulas: [
            "Minor arc + major arc = complete circumference",
            "Arc is measured by the angle it subtends at the centre"
          ],
          availableTools: ["circleWithArcs"]
        },
        {
          id: "chords-and-segments",
          title: "Chords and Segments",
          difficulty: "foundational",
          prerequisites: ["arcs"],
          masterySignals: "Student correctly identifies chords and segments in 2+ diagrams, understands relationship to arcs",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "Define a chord as a line segment joining two points on the circumference",
            "Recognize that a diameter is the longest chord",
            "Define a segment as the region between a chord and the arc it cuts off",
            "Distinguish between major segment and minor segment",
            "Understand that a chord divides a circle into two segments"
          ],
          relevantFormulas: [
            "Diameter is a special chord passing through the centre",
            "Chord creates two segments: major and minor"
          ],
          availableTools: ["circleWithArcs", "circleWithChords"]
        }
      ]
    },

    learningObjectives: `Students will master circle terminology:
1. Circle Parts - Centre, radius, diameter, circumference
2. Arcs and Sectors - Minor/major arcs, sectors
3. Chords and Segments - Chords, major/minor segments`,

    keyFormulas: `• Diameter = 2 × radius
• Chord: line segment joining two points on circumference
• Arc: part of circumference between two points
• Segment: region between chord and arc`
  },

  's3-math-circle-geometry-angle-semicircle': {
    displayName: 'Angle in a Semi-circle',
    topicName: 'angle in a semi-circle theorem',

    progressionStructure: {
      masteryPhilosophy: `
Advance when student:
- States theorem correctly
- Understands proof logic
- Applies theorem to find angles

Return to remediation when:
- Cannot state theorem
- Struggles with proof steps
- Makes errors in application

Complete when student masters all aspects of the theorem`,

      sections: [
        {
          id: "theorem-statement",
          title: "Understanding the Theorem",
          difficulty: "foundational",
          prerequisites: ["s3-math-circle-geometry-definitions"],
          masterySignals: "Student states theorem correctly 1+ times and identifies semicircle setups in diagrams",
          estimatedQuestions: "1-2 questions",
          learningObjectives: [
            "State the angle in a semi-circle theorem: The angle in a semi-circle is a right angle (90°)",
            "Identify when a triangle is inscribed in a semi-circle (one side is diameter)",
            "Recognize that the angle opposite the diameter is 90°",
            "Understand the condition: angle must be on the circumference, with diameter as one side"
          ],
          relevantFormulas: [
            "If AB is a diameter and C is on the circumference, then ∠ACB = 90°"
          ],
          availableTools: ["circleSemicircle"]
        },
        {
          id: "proof",
          title: "Proof of the Theorem",
          difficulty: "intermediate",
          prerequisites: ["theorem-statement"],
          masterySignals: "Student follows proof logic, explains each step, constructs proof with guidance in 2+ attempts",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "Understand the proof approach: draw radii OA, OB, OC (where O is centre)",
            "Recognize that OA = OB = OC (all radii)",
            "Apply isosceles triangle properties: if OA = OC, then ∠OAC = ∠OCA",
            "Use angle sum in triangle: angles in triangle sum to 180°",
            "Complete proof: 2(∠OAC + ∠OCB) = 180°, therefore ∠ACB = 90°",
            "Construct the proof independently"
          ],
          relevantFormulas: [
            "In isosceles triangle: base angles are equal",
            "Angle sum in triangle = 180°",
            "∠AOC + ∠OCA + ∠OAC = 180°"
          ],
          availableTools: ["circleSemicircle", "generalTriangle"]
        },
        {
          id: "applications",
          title: "Applying the Theorem",
          difficulty: "intermediate-advanced",
          prerequisites: ["proof"],
          masterySignals: "Student applies theorem to find unknown angles in 2+ problems, recognizes when to use theorem",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "Identify when angle in semi-circle theorem applies",
            "Use theorem to find unknown angles when diameter is given",
            "Recognize that if an angle in a triangle inscribed in a circle is 90°, then the opposite side is a diameter",
            "Apply theorem in multi-step problems",
            "Combine with other angle properties (angle sum, isosceles triangles)"
          ],
          relevantFormulas: [
            "If ∠ACB = 90° and A, B, C are on circle, then AB is diameter",
            "In semi-circle: ∠ACB = 90°, so ∠CAB + ∠CBA = 90°"
          ],
          sampleProblems: [
            {
              problem: "In circle with centre O, AB is a diameter. Point C lies on the circumference. If ∠CAB = 35°, find ∠CBA."
            },
            {
              problem: "Triangle PQR is inscribed in a circle with PQ as diameter. If ∠QPR = 42°, find ∠PRQ."
            }
          ],
          availableTools: ["circleSemicircle", "generalTriangle"]
        }
      ]
    },

    learningObjectives: `Students will master the angle in semi-circle theorem:
1. Theorem Statement - Angle in semi-circle is 90°
2. Proof - Using isosceles triangles and angle sum
3. Applications - Finding angles using the theorem`,

    keyFormulas: `• The angle in a semi-circle is 90°
• If AB is diameter and C is on circumference, then ∠ACB = 90°
• Converse: If ∠ACB = 90° (C on circle), then AB is diameter`
  },

  's3-math-circle-geometry-chords': {
    displayName: 'Chords of a Circle',
    topicName: 'chords of a circle theorems',

    progressionStructure: {
      masteryPhilosophy: `
Advance when student:
- States chord theorems correctly
- Understands proofs
- Applies theorems to solve problems

Complete when student masters all chord relationships`,

      sections: [
        {
          id: "equal-chords-equal-angles",
          title: "Equal Chords Theorem",
          difficulty: "intermediate",
          prerequisites: ["s3-math-circle-geometry-definitions"],
          masterySignals: "Student states theorem correctly and applies to 2+ problems",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "State theorem: Equal chords subtend equal angles at the centre",
            "Understand the converse: If angles at centre are equal, then chords are equal",
            "Apply theorem to find equal chords given equal angles",
            "Apply converse to find equal angles given equal chords",
            "Recognize proof using congruent triangles (SAS)"
          ],
          relevantFormulas: [
            "If chord AB = chord CD, then ∠AOB = ∠COD (O is centre)",
            "If ∠AOB = ∠COD, then chord AB = chord CD"
          ],
          availableTools: ["circleWithChords"]
        },
        {
          id: "perpendicular-bisector",
          title: "Perpendicular from Centre to Chord",
          difficulty: "intermediate",
          prerequisites: ["equal-chords-equal-angles"],
          masterySignals: "Student applies perpendicular bisector theorem in 2+ problems",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "State theorem: The perpendicular from the centre to a chord bisects the chord",
            "Understand converse: The line from centre to midpoint of chord is perpendicular to chord",
            "Apply to find chord lengths when perpendicular distance is given",
            "Use Pythagoras theorem with radius, half-chord, and perpendicular distance",
            "Recognize that equal chords are equidistant from centre"
          ],
          relevantFormulas: [
            "If OM ⊥ chord AB, then AM = MB (M is midpoint)",
            "r² = d² + (chord/2)² where r = radius, d = perpendicular distance to chord",
            "Equal chords have equal perpendicular distances from centre"
          ],
          sampleProblems: [
            {
              problem: "A chord of length 24cm is at a distance of 5cm from the centre of a circle. Find the radius of the circle."
            },
            {
              problem: "In a circle with radius 13cm, a chord is 10cm from the centre. Find the length of the chord."
            }
          ],
          availableTools: ["circleWithChords", "generalTriangle"]
        },
        {
          id: "chord-applications",
          title: "Applications of Chord Theorems",
          difficulty: "advanced",
          prerequisites: ["perpendicular-bisector"],
          masterySignals: "Student solves complex multi-step chord problems in 2-3 attempts",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "Combine chord theorems with angle properties",
            "Apply Pythagoras theorem in chord problems",
            "Solve problems involving two or more chords",
            "Use chord theorems in real-world contexts (architecture, engineering)",
            "Prove relationships between chords, radii, and angles"
          ],
          relevantFormulas: [
            "All chord theorems combined",
            "Pythagoras: r² = d² + (c/2)² for chord c at distance d from centre radius r"
          ],
          availableTools: ["circleWithChords", "generalTriangle"]
        }
      ]
    },

    learningObjectives: `Students will master chord theorems:
1. Equal Chords - Equal chords subtend equal angles at centre
2. Perpendicular Bisector - Perpendicular from centre bisects chord
3. Applications - Solve complex chord problems`,

    keyFormulas: `• Equal chords → equal angles at centre (and converse)
• Perpendicular from centre bisects chord
• Equal chords are equidistant from centre
• r² = d² + (chord/2)² (Pythagoras with chords)`
  },

  's3-math-circle-geometry-radius-tangent': {
    displayName: 'Radius-Tangent Theorem',
    topicName: 'radius and tangent perpendicular theorem',

    progressionStructure: {
      masteryPhilosophy: `
Advance when student:
- States radius-tangent theorem correctly
- Applies to find angles and lengths
- Proves using the theorem

Complete when student masters all applications`,

      sections: [
        {
          id: "tangent-definition",
          title: "Understanding Tangents",
          difficulty: "foundational",
          prerequisites: ["s3-math-circle-geometry-definitions"],
          masterySignals: "Student defines tangent correctly and identifies tangents in 2+ diagrams",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "Define a tangent as a line that touches the circle at exactly one point",
            "Identify the point of tangency (point where tangent touches circle)",
            "Understand that a tangent never crosses into the circle",
            "Distinguish between secant (cuts circle at 2 points) and tangent (touches at 1 point)",
            "Recognize that there are infinite tangents to a circle"
          ],
          relevantFormulas: [
            "Tangent touches circle at exactly one point (point of tangency)"
          ],
          availableTools: ["circleTangent"]
        },
        {
          id: "radius-tangent-perpendicular",
          title: "Radius Perpendicular to Tangent",
          difficulty: "intermediate",
          prerequisites: ["tangent-definition"],
          masterySignals: "Student applies radius-tangent perpendicular theorem in 2+ problems",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "State theorem: The radius is perpendicular to the tangent at the point of tangency",
            "Understand that angle between radius and tangent is always 90°",
            "Apply theorem to find angles in diagrams",
            "Use right-angled triangle properties with radius and tangent",
            "Recognize converse: If a line through a point on the circle is perpendicular to the radius, it is a tangent"
          ],
          relevantFormulas: [
            "Radius ⊥ tangent at point of tangency",
            "∠OTP = 90° where O is centre, T is point of tangency, P is on tangent"
          ],
          sampleProblems: [
            {
              problem: "A tangent to a circle with centre O touches at point T. If ∠OTP = x, find x."
            },
            {
              problem: "From an external point P, a tangent touches circle at T. If OP = 13cm and radius = 5cm, find PT."
            }
          ],
          availableTools: ["circleTangent", "generalTriangle"]
        },
        {
          id: "applications-radius-tangent",
          title: "Applications of Radius-Tangent Theorem",
          difficulty: "advanced",
          prerequisites: ["radius-tangent-perpendicular"],
          masterySignals: "Student solves multi-step problems using radius-tangent theorem in 2+ attempts",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "Apply Pythagoras theorem with radius, tangent, and external point",
            "Solve problems involving tangent lengths",
            "Combine radius-tangent theorem with other circle properties",
            "Use in construction problems (finding tangent from external point)",
            "Apply to real-world scenarios"
          ],
          relevantFormulas: [
            "In right triangle OTP: OP² = OT² + TP² where OT is radius, TP is tangent length",
            "Tangent length = √(distance² - radius²)"
          ],
          availableTools: ["circleTangent", "generalTriangle"]
        }
      ]
    },

    learningObjectives: `Students will master radius-tangent relationship:
1. Tangent Definition - Line touching circle at one point
2. Perpendicular Theorem - Radius ⊥ tangent at point of tangency
3. Applications - Solve problems using the theorem`,

    keyFormulas: `• Tangent touches circle at exactly one point
• Radius ⊥ tangent at point of tangency
• OP² = OT² + TP² (Pythagoras with tangent from external point)`
  },

  's3-math-circle-geometry-tangents-external': {
    displayName: 'Tangents from an External Point',
    topicName: 'tangents from an external point theorem',

    progressionStructure: {
      masteryPhilosophy: `
Advance when student:
- States equal tangents theorem
- Applies to find tangent lengths
- Proves the theorem

Complete when student masters all aspects`,

      sections: [
        {
          id: "equal-tangents-theorem",
          title: "Equal Tangents Theorem",
          difficulty: "intermediate",
          prerequisites: ["s3-math-circle-geometry-radius-tangent"],
          masterySignals: "Student states theorem and applies in 2+ problems",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "State theorem: Tangents from an external point to a circle are equal in length",
            "Identify the two tangent segments from external point",
            "Recognize that tangent lengths PA = PB where P is external point",
            "Understand the setup: one external point, two points of tangency",
            "Apply theorem to find unknown tangent lengths"
          ],
          relevantFormulas: [
            "If PA and PB are tangents from external point P, then PA = PB"
          ],
          availableTools: ["circleTwoTangents"]
        },
        {
          id: "proof-equal-tangents",
          title: "Proof of Equal Tangents",
          difficulty: "intermediate-advanced",
          prerequisites: ["equal-tangents-theorem"],
          masterySignals: "Student follows proof and can reproduce key steps in 2+ attempts",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "Draw radii OA and OB to points of tangency",
            "Recognize right angles: ∠OAP = ∠OBP = 90° (radius ⊥ tangent)",
            "Identify common hypotenuse OP in both right triangles",
            "Recognize equal radii: OA = OB",
            "Apply RHS (Right angle-Hypotenuse-Side) congruence: △OAP ≅ △OBP",
            "Conclude PA = PB from congruent triangles"
          ],
          relevantFormulas: [
            "∠OAP = ∠OBP = 90° (radius ⊥ tangent)",
            "OA = OB (radii)",
            "OP = OP (common side)",
            "△OAP ≅ △OBP (RHS)",
            "∴ PA = PB"
          ],
          availableTools: ["circleTwoTangents", "generalTriangle"]
        },
        {
          id: "applications-two-tangents",
          title: "Applications of Equal Tangents",
          difficulty: "advanced",
          prerequisites: ["proof-equal-tangents"],
          masterySignals: "Student solves complex problems involving equal tangents in 2+ attempts",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "Find tangent lengths when other measurements are given",
            "Use equal tangents with Pythagoras theorem",
            "Solve problems with multiple external points",
            "Apply to angle calculations (∠APB at external point)",
            "Combine with other circle theorems",
            "Recognize equal tangents in compound shapes"
          ],
          relevantFormulas: [
            "PA = PB (equal tangents from P)",
            "PA² = OP² - r² (Pythagoras)",
            "Angle between tangents can be found using triangle properties"
          ],
          sampleProblems: [
            {
              problem: "Two tangents from point P touch circle at A and B. If OP = 10cm and radius = 6cm, find PA."
            },
            {
              problem: "Tangents from P to circle touch at A and B. If PA = 12cm and ∠APB = 60°, find the radius."
            }
          ],
          availableTools: ["circleTwoTangents", "generalTriangle"]
        }
      ]
    },

    learningObjectives: `Students will master tangents from external point:
1. Equal Tangents Theorem - Tangents from external point are equal
2. Proof - Using RHS congruence
3. Applications - Solve complex tangent problems`,

    keyFormulas: `• Tangents from external point P are equal: PA = PB
• Proof uses: radius ⊥ tangent + RHS congruence
• PA² = OP² - r² (Pythagoras with tangent length)`
  },

  's3-math-circle-geometry-angle-centre': {
    displayName: 'Angle at the Centre',
    topicName: 'angle at the centre theorem',

    progressionStructure: {
      masteryPhilosophy: `
Advance when student:
- States theorem correctly (angle at centre = 2 × angle at circumference)
- Applies to find angles
- Understands proof

Complete when student masters all applications`,

      sections: [
        {
          id: "theorem-angle-centre",
          title: "Understanding Angle at Centre Theorem",
          difficulty: "intermediate",
          prerequisites: ["s3-math-circle-geometry-angle-semicircle"],
          masterySignals: "Student states theorem correctly and identifies setups in 2+ diagrams",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "State theorem: The angle subtended by an arc at the centre is twice the angle subtended by the same arc at any point on the remaining part of the circumference",
            "Identify angle at centre (∠AOB where O is centre)",
            "Identify angle at circumference (∠ACB where C is on circumference)",
            "Recognize the relationship: ∠AOB = 2 × ∠ACB",
            "Understand that both angles are subtended by the same arc AB"
          ],
          relevantFormulas: [
            "Angle at centre = 2 × angle at circumference (for same arc)",
            "∠AOB = 2 × ∠ACB where O is centre, C is on circumference"
          ],
          availableTools: ["circleAngleCentre"]
        },
        {
          id: "proof-angle-centre",
          title: "Proof of Angle at Centre Theorem",
          difficulty: "advanced",
          prerequisites: ["theorem-angle-centre"],
          masterySignals: "Student follows proof logic and explains key steps in 2+ attempts",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "Draw radius OC to create isosceles triangles",
            "Recognize OA = OB = OC (all radii)",
            "Use isosceles triangle property: base angles are equal",
            "Apply exterior angle theorem: exterior angle = sum of opposite interior angles",
            "Show ∠AOC = 2∠ACO (exterior angle in △OAC)",
            "Show ∠BOC = 2∠BCO (exterior angle in △OBC)",
            "Conclude ∠AOB = ∠AOC + ∠BOC = 2(∠ACO + ∠BCO) = 2∠ACB"
          ],
          relevantFormulas: [
            "In isosceles triangle: base angles equal",
            "Exterior angle = sum of opposite interior angles",
            "∠AOB = ∠AOC + ∠BOC = 2∠ACO + 2∠BCO = 2∠ACB"
          ],
          availableTools: ["circleAngleCentre", "generalTriangle"]
        },
        {
          id: "applications-angle-centre",
          title: "Applications of Angle at Centre",
          difficulty: "advanced",
          prerequisites: ["proof-angle-centre"],
          masterySignals: "Student applies theorem to find angles in 4+ problems, including multi-step questions",
          estimatedQuestions: "5-6 questions",
          learningObjectives: [
            "Find angle at centre given angle at circumference",
            "Find angle at circumference given angle at centre",
            "Recognize when angle at centre and circumference subtend same arc",
            "Apply theorem with reflex angles at centre",
            "Combine with other circle theorems (angle in semicircle, equal chords)",
            "Solve multi-step problems involving multiple angles"
          ],
          relevantFormulas: [
            "∠AOB = 2 × ∠ACB (same arc AB)",
            "If ∠AOB is reflex, use (360° - ∠AOB) for major arc calculations",
            "Can combine with: angle sum, isosceles triangles, etc."
          ],
          sampleProblems: [
            {
              problem: "Arc AB subtends ∠ACB = 35° at circumference and ∠AOB at centre O. Find ∠AOB."
            },
            {
              problem: "In circle with centre O, ∠AOB = 140°. Point C is on the major arc AB. Find ∠ACB."
            },
            {
              problem: "In circle with centre O, chord AB subtends 60° at C on circumference. If D is on the minor arc AB, find ∠ADB."
            }
          ],
          availableTools: ["circleAngleCentre", "generalTriangle"]
        }
      ]
    },

    learningObjectives: `Students will master angle at centre theorem:
1. Theorem Statement - Angle at centre = 2 × angle at circumference
2. Proof - Using isosceles triangles and exterior angle theorem
3. Applications - Finding angles in complex configurations`,

    keyFormulas: `• Angle at centre = 2 × angle at circumference (same arc)
• ∠AOB = 2 × ∠ACB where O is centre, C on circumference
• Proof uses isosceles triangles and exterior angle theorem`
  },

  's3-math-circle-geometry-angle-same-arc': {
    displayName: 'Angles Subtended by Same Arc',
    topicName: 'angles subtended by the same arc theorem',

    progressionStructure: {
      masteryPhilosophy: `
Advance when student:
- States theorem (angles in same segment are equal)
- Applies to find equal angles
- Understands cyclic quadrilaterals

Complete when student masters all segment angle properties`,

      sections: [
        {
          id: "angles-same-segment",
          title: "Angles in the Same Segment",
          difficulty: "intermediate",
          prerequisites: ["s3-math-circle-geometry-angle-centre"],
          masterySignals: "Student states theorem and identifies equal angles in same segment in 2+ diagrams",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "State theorem: Angles in the same segment of a circle are equal",
            "Identify the segment (region between chord and arc)",
            "Recognize that angles subtended by same arc at circumference are equal",
            "Understand that ∠ACB = ∠ADB when C and D are in same segment",
            "Distinguish between angles in different segments"
          ],
          relevantFormulas: [
            "Angles in same segment are equal",
            "If ∠ACB and ∠ADB are in same segment, then ∠ACB = ∠ADB"
          ],
          availableTools: ["circleSameArc"]
        },
        {
          id: "proof-same-segment",
          title: "Proof Using Angle at Centre",
          difficulty: "intermediate-advanced",
          prerequisites: ["angles-same-segment"],
          masterySignals: "Student connects to angle at centre theorem and explains proof in 2+ attempts",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "Use angle at centre theorem: ∠AOB = 2∠ACB and ∠AOB = 2∠ADB",
            "Recognize that both angles relate to same angle at centre",
            "Conclude: if 2∠ACB = 2∠ADB, then ∠ACB = ∠ADB",
            "Understand this works for any points in the same segment",
            "Apply proof logic independently"
          ],
          relevantFormulas: [
            "∠AOB = 2∠ACB (angle at centre)",
            "∠AOB = 2∠ADB (angle at centre)",
            "∴ ∠ACB = ∠ADB (angles in same segment)"
          ],
          availableTools: ["circleSameArc", "circleAngleCentre"]
        },
        {
          id: "cyclic-quadrilaterals",
          title: "Cyclic Quadrilaterals",
          difficulty: "advanced",
          prerequisites: ["proof-same-segment"],
          masterySignals: "Student identifies cyclic quadrilaterals and applies opposite angle property in 2+ problems",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "Define cyclic quadrilateral: four vertices on a circle",
            "State theorem: Opposite angles of cyclic quadrilateral sum to 180°",
            "Prove using angles in same segment",
            "Apply to find unknown angles in cyclic quadrilaterals",
            "Recognize converse: if opposite angles sum to 180°, quadrilateral is cyclic",
            "Use exterior angle property: exterior angle = opposite interior angle"
          ],
          relevantFormulas: [
            "In cyclic quadrilateral ABCD: ∠A + ∠C = 180° and ∠B + ∠D = 180°",
            "Exterior angle of cyclic quadrilateral = opposite interior angle"
          ],
          sampleProblems: [
            {
              problem: "ABCD is a cyclic quadrilateral. If ∠A = 85° and ∠B = 70°, find ∠C and ∠D."
            },
            {
              problem: "Points P, Q, R, S lie on a circle. If ∠P = 3x and ∠R = 2x + 20°, find x."
            }
          ],
          availableTools: ["circleSameArc"]
        },
        {
          id: "applications-same-arc",
          title: "Advanced Applications",
          difficulty: "advanced",
          prerequisites: ["cyclic-quadrilaterals"],
          masterySignals: "Student solves complex problems combining multiple circle theorems in 2+ attempts",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "Combine angles in same segment with other circle theorems",
            "Solve problems with multiple circles",
            "Apply to geometric proofs",
            "Use in real-world contexts (inscribed shapes, architecture)",
            "Prove relationships between angles using circle theorems systematically"
          ],
          relevantFormulas: [
            "All circle theorems combined",
            "Angles in same segment, angle at centre, cyclic quadrilaterals, etc."
          ],
          availableTools: ["circleSameArc", "circleAngleCentre", "generalTriangle"]
        }
      ]
    },

    learningObjectives: `Students will master angles in same segment:
1. Same Segment Theorem - Angles in same segment are equal
2. Proof - Using angle at centre theorem
3. Cyclic Quadrilaterals - Opposite angles sum to 180°
4. Advanced Applications - Combining multiple theorems`,

    keyFormulas: `• Angles in same segment are equal
• Proof: Both equal to half the angle at centre
• Cyclic quadrilateral: opposite angles sum to 180°
• Exterior angle of cyclic quad = opposite interior angle`
  }
};

// Export for backward compatibility
export const S3_MATH_CIRCLE_GEOMETRY: Record<CircleGeometryTopicId, any> = S3_MATH_CIRCLE_GEOMETRY_SUBTOPICS;

// Export config that can be used by PromptLibrary
export const S3_MATH_CIRCLE_GEOMETRY_CONFIG = {
  TUTOR_ROLE: CIRCLE_GEOMETRY_TUTOR_CUSTOMIZATION.teachingPhilosophy,
  QUESTION_AGENT_ROLE: null, // Uses base from prompt-library
  SOLUTION_AGENT_ROLE: null, // Uses base from prompt-library
  MATH_TOOLS_AVAILABLE: CIRCLE_GEOMETRY_MATH_TOOLS,
  // FORMATTING_RULES: imported from prompt-library
  // INTERACTION_PROTOCOL: imported from prompt-library
};
