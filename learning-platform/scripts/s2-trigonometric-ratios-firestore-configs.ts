/**
 * S2 Trigonometric Ratios - Firestore Migration Configurations
 *
 * ADD THESE 5 CONFIGS to scripts/migrateAllConfigs.ts
 * Insert after the existing S2 configs
 *
 * To migrate:
 *   1. Import in migrateAllConfigs.ts: import { S2_TRIGONOMETRIC_RATIOS_CONFIGS } from './s2-trigonometric-ratios-firestore-configs';
 *   2. Add to ALL_CONFIGS array: ...S2_TRIGONOMETRIC_RATIOS_CONFIGS,
 *   3. Run: npx tsx scripts/migrateAllConfigs.ts
 *   4. Verify in Firebase Console → Firestore Database → subtopics collection
 */

const STANDARD_SCORING = {
  easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
  medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
  hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
};

const STANDARD_MODULES = {
  learn: true,
  practice: true,
  visualizations: true
};

export const S2_TRIGONOMETRIC_RATIOS_CONFIGS = [
  // ============================================
  // S2 TRIGONOMETRIC RATIOS (5 NEW CONFIGS)
  // ============================================

  // Subtopic 1: Introduction to Trigonometric Ratios
  {
    id: 's2-math-trig-ratios-introduction',
    displayName: 'Introduction to Trigonometric Ratios',
    grade: 's2',
    subject: 'math',
    topic: 'trigonometric-ratios',
    subtopic: 'introduction',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 50,
      prerequisites: ['Pythagoras\' Theorem', 'Right-angled triangles'],
      keywords: [
        'trigonometry',
        'sine',
        'cosine',
        'tangent',
        'SOH-CAH-TOA',
        'opposite',
        'adjacent',
        'hypotenuse',
        'right-angled triangle'
      ],
      learningObjectives: [
        'Identify the hypotenuse (longest side, opposite right angle)',
        'Identify the opposite side (opposite to the angle being considered)',
        'Identify the adjacent side (next to the angle, but not the hypotenuse)',
        'State the sine ratio: sin θ = Opposite / Hypotenuse',
        'State the cosine ratio: cos θ = Adjacent / Hypotenuse',
        'State the tangent ratio: tan θ = Opposite / Adjacent',
        'Recall and apply the SOH-CAH-TOA mnemonic',
        'Calculate exact ratio values from triangle diagrams',
        'Understand that opposite and adjacent are relative to the angle being considered'
      ]
    },
    notesComponent: 's2/math/trigonometric-ratios/IntroductionToTrigRatios',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 2: Finding Sides Using Sine
  {
    id: 's2-math-trig-ratios-finding-sides-sine',
    displayName: 'Finding Sides Using Sine',
    grade: 's2',
    subject: 'math',
    topic: 'trigonometric-ratios',
    subtopic: 'finding-sides-sine',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 60,
      prerequisites: ['s2-math-trig-ratios-introduction'],
      keywords: [
        'sine ratio',
        'finding opposite',
        'finding hypotenuse',
        'rearranging sine equation',
        'multiply to find opposite',
        'divide to find hypotenuse',
        'calculator degree mode',
        'ladder problems'
      ],
      learningObjectives: [
        'Identify when sine ratio is appropriate (opposite and hypotenuse involved)',
        'Set up sine equation: sin(angle) = opposite / hypotenuse',
        'Find opposite side: opposite = hypotenuse × sin(angle)',
        'Find hypotenuse: hypotenuse = opposite / sin(angle)',
        'Use calculator in degree mode correctly',
        'Round answers to appropriate precision',
        'Verify answers are reasonable (opposite < hypotenuse)'
      ]
    },
    notesComponent: 's2/math/trigonometric-ratios/FindingSidesUsingSine',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 3: Finding Sides Using Cosine and Tangent
  {
    id: 's2-math-trig-ratios-finding-sides-cos-tan',
    displayName: 'Finding Sides Using Cosine and Tangent',
    grade: 's2',
    subject: 'math',
    topic: 'trigonometric-ratios',
    subtopic: 'finding-sides-cos-tan',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 70,
      prerequisites: ['s2-math-trig-ratios-finding-sides-sine'],
      keywords: [
        'cosine ratio',
        'tangent ratio',
        'finding adjacent',
        'choosing correct ratio',
        'cos for adjacent and hypotenuse',
        'tan for opposite and adjacent',
        'rearranging equations',
        'ratio selection strategy'
      ],
      learningObjectives: [
        'Use cosine ratio to find adjacent or hypotenuse',
        'Use tangent ratio to find opposite or adjacent',
        'Choose appropriate ratio based on given and unknown sides',
        'Distinguish adjacent from opposite in different orientations',
        'Understand when to use tangent (no hypotenuse involved)',
        'Solve problems requiring correct ratio choice'
      ]
    },
    notesComponent: 's2/math/trigonometric-ratios/FindingSidesCosAndTan',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 4: Finding Unknown Angles
  {
    id: 's2-math-trig-ratios-finding-angles',
    displayName: 'Finding Unknown Angles',
    grade: 's2',
    subject: 'math',
    topic: 'trigonometric-ratios',
    subtopic: 'finding-angles',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 65,
      prerequisites: [
        's2-math-trig-ratios-finding-sides-sine',
        's2-math-trig-ratios-finding-sides-cos-tan'
      ],
      keywords: [
        'inverse sine',
        'inverse cosine',
        'inverse tangent',
        'sin⁻¹',
        'cos⁻¹',
        'tan⁻¹',
        'arcsin',
        'arccos',
        'arctan',
        'finding angles from sides',
        'calculator inverse button'
      ],
      learningObjectives: [
        'Understand that inverse trig functions "undo" trig functions to find angles',
        'Choose correct inverse function based on given sides',
        'Use sin⁻¹ when opposite and hypotenuse are given',
        'Use cos⁻¹ when adjacent and hypotenuse are given',
        'Use tan⁻¹ when opposite and adjacent are given',
        'Calculate the ratio first, then apply inverse function',
        'Use calculator\'s inverse function buttons correctly',
        'Verify angle is between 0° and 90° for right triangle',
        'Round angles appropriately and include degree symbol'
      ]
    },
    notesComponent: 's2/math/trigonometric-ratios/FindingUnknownAngles',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 5: Real-World Applications
  {
    id: 's2-math-trig-ratios-real-world-applications',
    displayName: 'Real-World Applications',
    grade: 's2',
    subject: 'math',
    topic: 'trigonometric-ratios',
    subtopic: 'real-world-applications',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 80,
      prerequisites: [
        's2-math-trig-ratios-finding-sides-sine',
        's2-math-trig-ratios-finding-angles'
      ],
      keywords: [
        'angle of elevation',
        'angle of depression',
        'ladder problems',
        'kite problems',
        'building height',
        'ramp angle',
        'horizontal line of sight',
        'alternate angles',
        'real-world trigonometry',
        'multi-step problems'
      ],
      learningObjectives: [
        'Define angle of elevation (measured UP from horizontal)',
        'Define angle of depression (measured DOWN from horizontal)',
        'Draw diagrams showing horizontal line of sight',
        'Recognize alternate angle relationship',
        'Solve problems finding heights using elevation angles',
        'Solve problems finding distances using depression angles',
        'Apply to ladder, kite, ramp, and navigation problems',
        'Draw diagrams from word problem descriptions',
        'Choose appropriate trig ratio and method',
        'Solve multi-step problems',
        'Interpret results with correct units and context'
      ]
    },
    notesComponent: 's2/math/trigonometric-ratios/RealWorldApplications',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];

// Instructions for migration:
console.log(`
====================================
S2 TRIGONOMETRIC RATIOS FIRESTORE MIGRATION
====================================

To add these configs to Firestore:

1. Open scripts/migrateAllConfigs.ts

2. Import this file at the top:
   import { S2_TRIGONOMETRIC_RATIOS_CONFIGS } from './s2-trigonometric-ratios-firestore-configs';

3. Add to the ALL_CONFIGS array (after other S2 configs):
   ...S2_TRIGONOMETRIC_RATIOS_CONFIGS,

4. Run migration:
   npx tsx scripts/migrateAllConfigs.ts

5. Verify in Firebase Console:
   - Go to Firestore Database
   - Check 'subtopics' collection
   - Look for 5 new documents with IDs:
     * s2-math-trig-ratios-introduction
     * s2-math-trig-ratios-finding-sides-sine
     * s2-math-trig-ratios-finding-sides-cos-tan
     * s2-math-trig-ratios-finding-angles
     * s2-math-trig-ratios-real-world-applications

NOTES COMPONENTS CREATED:
✅ All 5 notes files created at:
   - src/notes/s2/math/trigonometric-ratios/IntroductionToTrigRatios.tsx
   - src/notes/s2/math/trigonometric-ratios/FindingSidesUsingSine.tsx
   - src/notes/s2/math/trigonometric-ratios/FindingSidesCosAndTan.tsx
   - src/notes/s2/math/trigonometric-ratios/FindingUnknownAngles.tsx
   - src/notes/s2/math/trigonometric-ratios/RealWorldApplications.tsx

✅ Notes registered in NotesViewerPage.tsx

TOPIC CONFIGURATION CREATED:
✅ Complete config with detailed rubrics at:
   - src/prompt-library/subjects/mathematics/secondary/s2-trigonometric-ratios.ts

FIRESTORE CONFIGURATION CREATED:
✅ Firestore migration config at:
   - scripts/s2-trigonometric-ratios-firestore-configs.ts

NEXT STEPS:
1. Add import and configs to migrateAllConfigs.ts (instructions above)
2. Run the migration: npx tsx scripts/migrateAllConfigs.ts
3. Generate initial greetings for each subtopic
4. Update topicsByGrade.ts to include in S2 Math curriculum
5. Update curriculum YAML if needed

====================================
`);
