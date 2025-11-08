/**
 * S2 Pythagoras' Theorem - Firestore Migration Configurations
 *
 * ADD THESE 5 CONFIGS to scripts/migrateAllConfigs.ts
 * Insert after the existing S2 configs
 *
 * To migrate:
 *   1. Copy the configs below into the main migration array in migrateAllConfigs.ts
 *   2. Run: npx tsx scripts/migrateAllConfigs.ts
 *   3. Verify in Firebase Console → Firestore Database → subtopics collection
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

export const S2_PYTHAGORAS_CONFIGS = [
  // ============================================
  // S2 PYTHAGORAS' THEOREM (5 NEW CONFIGS)
  // ============================================

  // Subtopic 1: Introduction to Pythagoras' Theorem
  {
    id: 's2-math-pythagoras-introduction',
    displayName: 'Introduction to Pythagoras\' Theorem',
    grade: 's2',
    subject: 'math',
    topic: 'pythagoras',
    subtopic: 'introduction',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 45,
      prerequisites: ['Basic knowledge of right-angled triangles', 'Squares and square roots'],
      keywords: [
        'pythagoras',
        'hypotenuse',
        'right-angled triangle',
        'pythagorean triple',
        'a squared plus b squared equals c squared'
      ],
      learningObjectives: [
        'Identify the hypotenuse and legs of a right-angled triangle',
        'State Pythagoras\' Theorem: a² + b² = c²',
        'Understand that c is the hypotenuse (longest side)',
        'Recognize common Pythagorean triples (3-4-5, 5-12-13, 8-15-17, 7-24-25)',
        'Verify the theorem with given side lengths'
      ]
    },
    notesComponent: 's2/math/pythagoras/Introduction',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 2: Finding the Hypotenuse
  {
    id: 's2-math-pythagoras-finding-hypotenuse',
    displayName: 'Finding the Hypotenuse',
    grade: 's2',
    subject: 'math',
    topic: 'pythagoras',
    subtopic: 'finding-hypotenuse',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 60,
      prerequisites: ['s2-math-pythagoras-introduction'],
      keywords: [
        'hypotenuse',
        'finding longest side',
        'c equals square root',
        'pythagorean triples',
        'rounding decimals',
        'ladder problems'
      ],
      learningObjectives: [
        'Apply c = √(a² + b²) to find hypotenuse',
        'Square numbers and add squares correctly',
        'Find square roots using calculator',
        'Round answers to specified precision',
        'Solve word problems involving hypotenuse'
      ]
    },
    notesComponent: 's2/math/pythagoras/FindingHypotenuse',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 3: Finding Shorter Sides (Legs)
  {
    id: 's2-math-pythagoras-finding-shorter-sides',
    displayName: 'Finding Shorter Sides',
    grade: 's2',
    subject: 'math',
    topic: 'pythagoras',
    subtopic: 'finding-shorter-sides',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 60,
      prerequisites: ['s2-math-pythagoras-introduction', 's2-math-pythagoras-finding-hypotenuse'],
      keywords: [
        'finding leg',
        'rearranging formula',
        'subtract from hypotenuse',
        'a squared equals c squared minus b squared',
        'ladder height problems'
      ],
      learningObjectives: [
        'Rearrange a² + b² = c² to find a leg: a² = c² - b²',
        'Apply a = √(c² - b²) correctly',
        'Distinguish finding hypotenuse from finding leg',
        'Solve word problems where hypotenuse is given',
        'Verify answers using the original theorem'
      ]
    },
    notesComponent: 's2/math/pythagoras/FindingShorterSides',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 4: Real-World Applications
  {
    id: 's2-math-pythagoras-real-world-applications',
    displayName: 'Real-World Applications',
    grade: 's2',
    subject: 'math',
    topic: 'pythagoras',
    subtopic: 'real-world-applications',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 75,
      prerequisites: ['s2-math-pythagoras-finding-hypotenuse', 's2-math-pythagoras-finding-shorter-sides'],
      keywords: [
        'ladder problems',
        'navigation distance',
        'rectangle diagonal',
        'space diagonal',
        '3D pythagoras',
        'TV screen size',
        'construction applications'
      ],
      learningObjectives: [
        'Identify right-angled triangles in real contexts',
        'Solve ladder problems (wall-ground-ladder)',
        'Calculate navigation distances (perpendicular directions)',
        'Find rectangle diagonals',
        'Apply Pythagoras twice for 3D space diagonals',
        'Interpret answers in context with correct units'
      ]
    },
    notesComponent: 's2/math/pythagoras/RealWorldApplications',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 5: Converse of Pythagoras' Theorem
  {
    id: 's2-math-pythagoras-converse',
    displayName: 'Converse of Pythagoras\' Theorem',
    grade: 's2',
    subject: 'math',
    topic: 'pythagoras',
    subtopic: 'converse',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 50,
      prerequisites: ['s2-math-pythagoras-finding-hypotenuse', 's2-math-pythagoras-finding-shorter-sides'],
      keywords: [
        'converse theorem',
        'testing right angle',
        'checking if right-angled',
        'construction checking',
        '3-4-5 method',
        'carpenter square',
        'if and only if'
      ],
      learningObjectives: [
        'State the converse of Pythagoras\' Theorem',
        'Test if a triangle is right-angled using side lengths',
        'Identify the longest side as potential hypotenuse',
        'Apply to construction checking (3-4-5 method)',
        'Explain the difference between theorem and converse'
      ]
    },
    notesComponent: 's2/math/pythagoras/Converse',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];

// Instructions for migration:
console.log(`
====================================
S2 PYTHAGORAS' THEOREM FIRESTORE MIGRATION
====================================

To add these configs to Firestore:

1. Open scripts/migrateAllConfigs.ts

2. Import this file at the top:
   import { S2_PYTHAGORAS_CONFIGS } from './s2-pythagoras-firestore-configs';

3. Add to the configs array (after other S2 configs):
   ...S2_PYTHAGORAS_CONFIGS,

4. Run migration:
   npx tsx scripts/migrateAllConfigs.ts

5. Verify in Firebase Console:
   - Go to Firestore Database
   - Check 'subtopics' collection
   - Look for 5 new documents with IDs:
     * s2-math-pythagoras-introduction
     * s2-math-pythagoras-finding-hypotenuse
     * s2-math-pythagoras-finding-shorter-sides
     * s2-math-pythagoras-real-world-applications
     * s2-math-pythagoras-converse

NOTES COMPONENTS CREATED:
✅ All 5 notes files created at:
   - src/notes/s2/math/pythagoras/Introduction.tsx
   - src/notes/s2/math/pythagoras/FindingHypotenuse.tsx
   - src/notes/s2/math/pythagoras/FindingShorterSides.tsx
   - src/notes/s2/math/pythagoras/RealWorldApplications.tsx
   - src/notes/s2/math/pythagoras/Converse.tsx

✅ Notes registered in NotesViewerPage.tsx

TOPIC CONFIGURATION CREATED:
✅ Complete config with detailed rubrics at:
   - src/prompt-library/subjects/mathematics/secondary/s2-pythagoras.ts

NEXT STEPS:
1. Run the migration (steps above)
2. Generate initial greetings for each subtopic
3. Add to curriculum YAML if not already present
4. Update topicsByGrade.ts to include in S2 Math curriculum

====================================
`);
