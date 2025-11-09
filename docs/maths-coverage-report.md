# Mathematics Syllabus Coverage (G3) — S1 to S4

Source syllabus: `learning-platform/public/curriculum-content/2020-g2-and-g3-mathematics-syllabuses.pdf` (G3 text extracted).
Scope: Compare application notes in `learning-platform/src/notes/` (S1–S4) against G3 syllabus topics, listing coverage and gaps per level.

## Legend
- Covered: Implemented in notes (example paths shown)
- Missing: Not found in notes but present in syllabus
- Extra: Implemented, but beyond the stated G3 syllabus

---

## S1 (Secondary One)

### Number & Algebra
- Covered:
  - Numbers & operations: primes/HCF/LCM/square & cube roots — e.g., `s1/math/factors-multiples/*`
  - Integers/rational/real numbers; operations; number line — e.g., `s1/math/real-numbers/*`
  - Approximation & estimation (DP, SF, estimation) — `s1/math/approximation-estimation/*`
  - Ratios & proportion basics — `s1/math/ratio-rate-speed/UnderstandingRatios.tsx`, `RatiosAndProportions.tsx`
  - Percentages (comparison, >100%, change, reverse) — `s1/math/percentage/*`
  - Rate & speed; unit conversion — `s1/math/ratio-rate-speed/RateAndSpeed.tsx`
  - Algebraic basics: notation, simplify, expand, factor, evaluate, word problems — `s1/math/basic-algebra/*`
- Missing:
  - Explicit “calculations with calculator” guidance
  - Using comparison symbols `<, >, ≤, ≥` explicitly
  - Patterns/relationships: nth-term of sequences

### Functions & Graphs
- Covered: Cartesian plane; linear function `y = ax + b`; gradients; plotting — `s1/math/linear-functions-graphs/*`

### Equations & Inequalities
- Covered: Linear equations; simple fractional equations; forming equations — `s1/math/simple-linear-equations/*`

### Geometry & Measurement
- Covered: Angle types; angles on lines/at a point; parallel-line angle facts — `s1/math/angles-parallel-lines/*`
- Missing:
  - Properties of triangles, special quadrilaterals, and regular polygons (incl. symmetry, classification)
  - Angle sum of interior/exterior angles of convex polygons
  - Basic constructions (compass, ruler, set squares, protractor)
  - Mensuration: volume/surface area of prisms and cylinders; conversions cm²↔m², cm³↔m³; composite solids

### Statistics & Probability
- Covered: Data collection/classification; tables/bar/pictograms/line/pie; critique — `s1/math/data-handling/*`

---

## S2 (Secondary Two)

### Number & Algebra
- Covered:
  - Direct & inverse proportion — `s2/math/proportion/*`
  - Expansion, identities, factorisation (incl. quadratics) — `s2/math/expansion-factorisation/*`
  - Algebraic fractions (×, ÷, +, −; linear/quadratic denominators) — `s2/math/algebraic-fractions-formulae/*`
  - Changing subject / evaluate unknowns in formulae — `s1/math/basic-algebra/ChangingTheSubject.tsx`, `s2/.../EquationsFormulae.tsx`
- Missing:
  - Map scales (distance and area)

### Functions & Graphs
- Covered: Quadratic functions, graphs, key properties — `s2/math/quadratic-equations-graphs/*`

### Equations & Inequalities
- Covered: Linear inequalities and number-line solutions — `s2/math/linear-inequalities/*`
- Covered: Graphs of `ax + by = c`; simultaneous equations (alg/graph) — `s2/math/linear-graph/*`
- Covered: Quadratic equations by factorisation — `s2/math/quadratic-equations-graphs/SolvingByFactorization.tsx`

### Geometry & Measurement
- Covered: Pythagoras’ theorem (incl. converse) — `s2/math/pythagoras/*`
- Covered: Trigonometric ratios in right triangles — `s2/math/trigonometric-ratios/*`
- Missing:
  - Congruence & similarity (defs, properties, enlargement/reduction, applications)
  - Mensuration: volume/surface area of pyramid, cone, sphere

### Statistics & Probability
- Covered: Dot plots/histograms/stem-and-leaf; critique — `s2/math/statistical-diagrams/*`
- Covered: Mean/median/mode (incl. grouped data mean) — `s2/math/averages-statistical-data/*`
- Covered: Probability of single events — `s2/math/probability-single-event/*`

---

## S3 (Secondary Three)

### Number & Algebra
- Covered: Standard form; indices (incl. fractional); laws of indices — `s3/math/exponents/*`

### Functions & Graphs
- Covered: Quadratic graphs (vertex/factored forms; features) — `s3/math/quadratic-equations/*`
- Covered: Exponential functions/graphs — `s3/math/exponential-logarithms/*`
- Missing:
  - Power functions `y = a x^n` for n ∈ {−2, −1, 0, 1, 2, 3} (explicit coverage)
  - Estimating gradient of a curve by drawing a tangent (non-calculus estimate) — covered later under S4 calculus

### Equations & Inequalities
- Covered: Quadratics — formula; completing square; graphical; fractional reducible to quadratics — `s3/math/quadratic-equations/*`
- Covered earlier: Linear inequalities in one variable (incl. simultaneous) — `s2/math/linear-inequalities/*`

### Sets & Matrices
- Covered: Sets, set notation, Venn diagrams — `s3/math/sets-venn-diagrams/*`
- Missing: Matrices (display, scalar product, +/−/×, word problems)

### Geometry & Measurement
- Covered: Circle properties — `s3/math/circle-geometry/*`
- Covered: Coordinate geometry (gradient, distance, y=mx+c, applications) — `s3/math/coordinate-geometry/*`
- Covered: Trigonometry (obtuse angles; ½ab sin C; sine/cosine rules; bearings/problems) — `s3/math/trigonometry/*`
- Missing:
  - Congruence/similarity advanced: scale drawings; perpendicular/angle bisectors; determine congruent/similar; ratios of areas/volumes of similar figures
  - Mensuration: arc length, sector area, area of a segment; radian measure is under S4

### Vectors in Two Dimensions
- Partially Covered (under S4): vectors fundamentals, magnitude, operations — `s4/math/vectors/*`
- Missing (in S3): translations by a vector; explicit position vectors within S3 level

### Statistics & Probability
- Covered: Quartiles/percentiles; range/IQR/SD; cumulative frequency; box plots; use of mean/SD for comparison — `s3/math/statistics/*`
- Covered later (S4): probability of simple combined events; addition/multiplication rules — `s4/math/probability/*`

---

## S4 (Secondary Four)

Note: S3/S4 syllabus items are combined in G3. S4 notes also include additional topics beyond G3 (calculus).

### Functions & Graphs
- Covered: Quadratic graphs and transformations — `s4/math/quadratic-functions/*`

### Vectors
- Covered: 2D vectors fundamentals, components, magnitude, operations, parallelism; dot product (extra) — `s4/math/vectors/*`

### Probability (Combined Events)
- Covered: Combined events; tree diagrams; conditional probability; applications — `s4/math/probability/*`

### Trigonometry & Radians
- Covered: Radian measure (conversion) — `s4/math/advanced-trigonometry/RadianMeasure.tsx`
- Missing:
  - Circle mensuration: arc length, sector area, area of a segment

### Calculus (Extra)
- Extra (not in G3): Differential calculus (limits, first principles, derivatives, tangents) — `s4/math/differential-calculus/*`
- Extra (not in G3): Integration (antiderivatives, definite integrals, area under curves) — `s4/math/integration/*`
- Note: “Estimate gradient via tangent” from S3 can be cross-referenced to `s4/.../GradientOfTangent.tsx` though calculus is beyond G3.

---

## Consolidated Missing Topics (to implement)
- S1 Geometry: triangle/quadrilateral/polygon properties; angle sums; basic constructions
- S1 Mensuration: volumes/surface areas (prisms, cylinders); area/volume unit conversions; composite solids
- S1 Number: comparison symbols usage; calculator techniques; sequences nth-term
- S2 Geometry: congruence & similarity (defs, properties, enlargement); mensuration of pyramid, cone, sphere
- S2 Number: map scales (distance and area)
- S3 Functions: power functions `y = a x^n` (n = −2, −1, 0, 1, 2, 3); non-calculus tangent gradient estimation
- S3 Matrices: fundamentals (+/−/×, scalar product, applications)
- S3 Geometry: scale drawings; perpendicular/angle bisectors; congruent/similar determination; ratios of areas/volumes
- S3/4 Mensuration: circle measures — arc length, sector area, segment area
- S3 Vectors (if desired within S3): translations; position vectors (intro level)

---

## Extras Present (beyond G3 syllabus)
- S3: Exponential and logarithms (log laws, base change, use)
- S3: Surds and radicals (simplify, operations, rationalisation)
- S4: Differential calculus and Integration
- S4: Vector dot product

---

## Notes
- This mapping uses file names and directories as proxies for coverage; individual lesson scopes may overlap or differ. Where naming was ambiguous, items are marked as “missing” pending explicit confirmation.
- If desired, we can create stubs for each missing topic to standardise coverage and link to syllabus codes.

