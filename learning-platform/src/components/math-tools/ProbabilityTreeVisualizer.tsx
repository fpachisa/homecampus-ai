/**
 * Probability Tree Visualizer
 *
 * Interactive probability tree diagram for multi-stage experiments.
 * Simplified AI-friendly parameter structure.
 */

import React from 'react';
import MathText from '../MathText';

interface TreeOutcome {
  outcome: string;
  probability: number;
}

interface ProbabilityTreeProps {
  stage1: TreeOutcome[];
  stage2: TreeOutcome[];
  stage3?: TreeOutcome[];
  highlightPaths?: string[];  // e.g., ["Heads-Red", "Tails-Blue"]
  showProbabilities?: boolean;
  caption?: string;
}

const ProbabilityTreeVisualizer: React.FC<ProbabilityTreeProps> = ({
  stage1,
  stage2,
  stage3,
  highlightPaths = [],
  showProbabilities = true,
  caption
}) => {
  // Normalize probabilities (convert strings to numbers if needed)
  const normalizeProbability = (p: number | string | any): number => {
    if (typeof p === 'number') return p;
    if (typeof p === 'string') {
      const parsed = parseFloat(p);
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  };

  const normalizeStage = (stage: TreeOutcome[]): TreeOutcome[] => {
    return stage.map(item => ({
      outcome: item.outcome,
      probability: normalizeProbability(item.probability)
    }));
  };

  // Normalize all stages
  const normalizedStage1 = normalizeStage(stage1);
  const normalizedStage2 = normalizeStage(stage2);
  const normalizedStage3 = stage3 ? normalizeStage(stage3) : undefined;

  const hasStage3 = normalizedStage3 && normalizedStage3.length > 0;
  const numStages = hasStage3 ? 3 : 2;

  // Calculate total width based on number of stages
  const width = numStages === 2 ? 600 : 800;
  const height = Math.max(400, normalizedStage1.length * normalizedStage2.length * (hasStage3 ? normalizedStage3!.length : 1) * 80);

  // Stage positions (x-coordinates)
  const stage1X = 50;
  const stage2X = numStages === 2 ? 250 : 250;
  const stage3X = 500;
  const endX = numStages === 2 ? 450 : 700;

  // Calculate vertical spacing
  const totalEndpoints = normalizedStage1.length * normalizedStage2.length * (hasStage3 ? normalizedStage3!.length : 1);
  const verticalSpacing = (height - 100) / totalEndpoints;

  // Generate all paths
  let currentY = 50;
  const allPaths: Array<{
    stage1Item: TreeOutcome;
    stage2Item: TreeOutcome;
    stage3Item?: TreeOutcome;
    stage1Y: number;
    stage2Y: number;
    stage3Y?: number;
    endY: number;
    combinedProb: number;
    pathString: string;
    isHighlighted: boolean;
  }> = [];

  // Calculate midpoint Y for stage 1 branches
  const stage1Ys = normalizedStage1.map((_, idx) => {
    const startY = 50 + (idx * (height - 100) / normalizedStage1.length);
    const endY = 50 + ((idx + 1) * (height - 100) / normalizedStage1.length);
    return (startY + endY) / 2;
  });

  normalizedStage1.forEach((s1Item, s1Idx) => {
    normalizedStage2.forEach((s2Item, _s2Idx) => {
      if (hasStage3 && normalizedStage3) {
        normalizedStage3.forEach((s3Item, _s3Idx) => {
          const pathString = `${s1Item.outcome}-${s2Item.outcome}-${s3Item.outcome}`;
          const combinedProb = s1Item.probability * s2Item.probability * s3Item.probability;

          allPaths.push({
            stage1Item: s1Item,
            stage2Item: s2Item,
            stage3Item: s3Item,
            stage1Y: stage1Ys[s1Idx],
            stage2Y: currentY,
            stage3Y: currentY,
            endY: currentY,
            combinedProb,
            pathString,
            isHighlighted: highlightPaths.includes(pathString)
          });
          currentY += verticalSpacing;
        });
      } else {
        const pathString = `${s1Item.outcome}-${s2Item.outcome}`;
        const combinedProb = s1Item.probability * s2Item.probability;

        allPaths.push({
          stage1Item: s1Item,
          stage2Item: s2Item,
          stage1Y: stage1Ys[s1Idx],
          stage2Y: currentY,
          endY: currentY,
          combinedProb,
          pathString,
          isHighlighted: highlightPaths.includes(pathString)
        });
        currentY += verticalSpacing;
      }
    });
  });

  // Group stage2 by stage1 for midpoint calculation
  const stage2GroupedByStage1 = normalizedStage1.map((s1Item, s1Idx) => {
    const pathsForThisStage1 = allPaths.filter(p => p.stage1Item.outcome === s1Item.outcome);
    return {
      stage1Item: s1Item,
      stage1Y: stage1Ys[s1Idx],
      stage2Paths: normalizedStage2.map((s2Item, _s2Idx) => {
        const pathsForThisStage2 = pathsForThisStage1.filter(p => p.stage2Item.outcome === s2Item.outcome);
        const avgY = pathsForThisStage2.reduce((sum, p) => sum + p.stage2Y, 0) / pathsForThisStage2.length;
        return {
          stage2Item: s2Item,
          stage2Y: avgY,
          paths: pathsForThisStage2
        };
      })
    };
  });

  return (
    <div className="flex flex-col items-center gap-3">
      <svg width={width} height={height} className="mx-auto">
        {/* Draw all branches and labels */}
        {stage2GroupedByStage1.map((group, groupIdx) => (
          <g key={groupIdx}>
            {/* Stage 1 to Stage 2 branches */}
            {group.stage2Paths.map((s2Path, s2Idx) => {
              const anyHighlighted = s2Path.paths.some(p => p.isHighlighted);
              const strokeColor = anyHighlighted ? '#fbbf24' : '#94a3b8';
              const strokeWidth = anyHighlighted ? 3 : 2;

              return (
                <g key={s2Idx}>
                  {/* Branch line */}
                  <line
                    x1={stage1X}
                    y1={group.stage1Y}
                    x2={stage2X}
                    y2={s2Path.stage2Y}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                  />

                  {/* Outcome label */}
                  <text
                    x={(stage1X + stage2X) / 2}
                    y={s2Path.stage2Y - 12}
                    fontSize="12"
                    textAnchor="middle"
                    fill="#1f2937"
                    fontWeight={anyHighlighted ? "bold" : "normal"}
                  >
                    {s2Path.stage2Item.outcome}
                  </text>

                  {/* Probability label */}
                  {showProbabilities && (
                    <text
                      x={(stage1X + stage2X) / 2}
                      y={s2Path.stage2Y + 5}
                      fontSize="11"
                      textAnchor="middle"
                      fill="#6b7280"
                      fontWeight={anyHighlighted ? "bold" : "normal"}
                    >
                      {s2Path.stage2Item.probability.toFixed(2)}
                    </text>
                  )}

                  {/* Stage 2 to Stage 3 branches (if 3 stages) */}
                  {hasStage3 && s2Path.paths.map((path, pathIdx) => {
                    const highlightedStroke = path.isHighlighted ? '#fbbf24' : '#94a3b8';
                    const highlightedWidth = path.isHighlighted ? 3 : 2;

                    return (
                      <g key={pathIdx}>
                        <line
                          x1={stage2X}
                          y1={s2Path.stage2Y}
                          x2={stage3X}
                          y2={path.stage3Y!}
                          stroke={highlightedStroke}
                          strokeWidth={highlightedWidth}
                        />

                        {/* Stage 3 outcome label */}
                        <text
                          x={(stage2X + stage3X) / 2}
                          y={path.stage3Y! - 12}
                          fontSize="12"
                          textAnchor="middle"
                          fill="#1f2937"
                          fontWeight={path.isHighlighted ? "bold" : "normal"}
                        >
                          {path.stage3Item!.outcome}
                        </text>

                        {/* Stage 3 probability */}
                        {showProbabilities && (
                          <text
                            x={(stage2X + stage3X) / 2}
                            y={path.stage3Y! + 5}
                            fontSize="11"
                            textAnchor="middle"
                            fill="#6b7280"
                            fontWeight={path.isHighlighted ? "bold" : "normal"}
                          >
                            {path.stage3Item!.probability.toFixed(2)}
                          </text>
                        )}

                        {/* End line to final outcome */}
                        <line
                          x1={stage3X}
                          y1={path.stage3Y!}
                          x2={endX}
                          y2={path.endY}
                          stroke={highlightedStroke}
                          strokeWidth={highlightedWidth}
                        />

                        {/* Final probability */}
                        {showProbabilities && (
                          <text
                            x={endX + 10}
                            y={path.endY + 5}
                            fontSize="12"
                            textAnchor="start"
                            fill="#1f2937"
                            fontWeight={path.isHighlighted ? "bold" : "normal"}
                          >
                            {path.combinedProb.toFixed(4)}
                          </text>
                        )}
                      </g>
                    );
                  })}

                  {/* For 2-stage trees, draw end line and probability */}
                  {!hasStage3 && s2Path.paths.map((path, pathIdx) => {
                    const highlightedStroke = path.isHighlighted ? '#fbbf24' : '#94a3b8';
                    const highlightedWidth = path.isHighlighted ? 3 : 2;

                    return (
                      <g key={pathIdx}>
                        <line
                          x1={stage2X}
                          y1={s2Path.stage2Y}
                          x2={endX}
                          y2={path.endY}
                          stroke={highlightedStroke}
                          strokeWidth={highlightedWidth}
                        />

                        {/* Final probability */}
                        {showProbabilities && (
                          <text
                            x={endX + 10}
                            y={path.endY + 5}
                            fontSize="12"
                            textAnchor="start"
                            fill="#1f2937"
                            fontWeight={path.isHighlighted ? "bold" : "normal"}
                          >
                            {path.combinedProb.toFixed(3)}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </g>
              );
            })}

            {/* Stage 1 circle and label */}
            <circle
              cx={stage1X}
              cy={group.stage1Y}
              r={6}
              fill="#3b82f6"
            />
            <text
              x={stage1X - 15}
              y={group.stage1Y - 15}
              fontSize="13"
              textAnchor="end"
              fill="#1f2937"
              fontWeight="bold"
            >
              {group.stage1Item.outcome}
            </text>
            {showProbabilities && (
              <text
                x={stage1X - 15}
                y={group.stage1Y}
                fontSize="11"
                textAnchor="end"
                fill="#6b7280"
              >
                {group.stage1Item.probability.toFixed(2)}
              </text>
            )}
          </g>
        ))}

        {/* Stage labels */}
        <text x={stage1X} y={20} fontSize="13" textAnchor="middle" fill="#6b7280" fontWeight="bold">
          Stage 1
        </text>
        <text x={stage2X} y={20} fontSize="13" textAnchor="middle" fill="#6b7280" fontWeight="bold">
          Stage 2
        </text>
        {hasStage3 && (
          <text x={stage3X} y={20} fontSize="13" textAnchor="middle" fill="#6b7280" fontWeight="bold">
            Stage 3
          </text>
        )}
        {showProbabilities && (
          <text x={endX + 40} y={20} fontSize="13" textAnchor="middle" fill="#6b7280" fontWeight="bold">
            P(outcome)
          </text>
        )}
      </svg>

      {/* Caption */}
      {caption && (
        <div className="text-sm text-center text-gray-900 dark:text-gray-100 max-w-2xl px-4 mt-2 font-medium">
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default ProbabilityTreeVisualizer;
