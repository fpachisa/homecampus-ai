# Parent Dashboard: Quick Reference & Implementation Guide

**For:** Product Managers, Designers, Engineers  
**Time to Read:** 10 minutes  
**Related Documents:** 
- `PARENT_DASHBOARD_REQUIREMENTS.md` (Full requirements)
- `PARENT_DASHBOARD_RESEARCH.md` (Research & best practices)

---

## The Parent Dashboard Problem in 90 Seconds

### What Parents Need
1. **Peace of mind** - "Is my child learning?"
2. **Actionable insights** - "What should I do?"
3. **Early warnings** - "Are they struggling?"
4. **Progress celebration** - "What have they achieved?"

### What We're Building
A dashboard where parents can:
- Quickly check child's progress (< 30 seconds)
- Understand what metrics mean (plain English)
- Get smart alerts (don't miss problems)
- Take action (with guidance)
- Manage multiple children (without chaos)

### Key Principle
> **Insights over data.** Parents don't want raw numbers—they want meaning.

---

## Core Parent Questions (Priority Order)

| Question | What They Need | Metric |
|----------|---|---|
| **"Is my child learning?"** | Progress %, recent activity, streak | Topic completion, last active |
| **"Where are they struggling?"** | Specific topics, error patterns, hints | Accuracy by topic, hint usage |
| **"What should I do?"** | Actionable advice, resources | AI-generated suggestions |
| **"Are they on track?"** | Grade benchmarks, growth trajectory | Grade-level comparison, trends |
| **"Are they engaged?"** | Consistency, session quality | Frequency, problems/session |

---

## Key Metrics (MVP Phase 1)

```
PRIMARY METRICS (Show First)
├─ Progress: X% of topics completed
├─ Recent Activity: "Last active Xh/Xd ago"
├─ Current Streak: X days 🔥
├─ This Week: Y problems solved
├─ Accuracy: Z% (with context)
└─ Current Level: L (+ XP)

SECONDARY METRICS (Show on Click)
├─ Struggling Topics: ["Topic A", "Topic B"]
├─ Learning Style: Visual/Procedural/Conceptual
├─ Mastery Status: By section/chapter
├─ Time Invested: Xh this week (healthy/excessive)
└─ Growth Trend: Week-over-week change

DO NOT SHOW (Privacy/Anxiety)
├─ Individual problem answers
├─ Per-session tracking
├─ Real-time activity ("now studying...")
├─ Sibling comparisons (unless opted-in)
└─ Emotional data (shame, frustration, fear)
```

---

## Alert System (3 Tiers)

### 🔴 CRITICAL (Email + Push + Dashboard)
- No activity for 7+ days
- Accuracy drops >20% in one week  
- Streak ending (no activity in 48h)
- Failed assessment (0% accuracy repeated)

**Action:** Immediate intervention needed

### 🟡 WARNING (Email + Dashboard Banner)
- Accuracy <60% for 2+ consecutive weeks
- Session duration declining (<5 min average)
- Streak at 1 day (encourage today)
- Struggling topic (40-60% accuracy)

**Action:** Monitor and provide support

### 🟢 INFO (Dashboard Only)
- New achievement earned
- Topic completed  
- Level gained
- Weekly summary

**Action:** Celebrate!

---

## Multi-Child Strategy

### Family Overview (Parent Home)
```
┌─────────────────────────────────────────────┐
│ Welcome, Sarah!                             │
│ Monitoring 3 children's progress            │
├─────────────────────────────────────────────┤
│ Total Family Stats                          │
│  • This week: 4 active sessions             │
│  • Average accuracy: 76%                    │
│  • Combined XP earned: 1,250                │
│  • Alerts: 1 (Emma's streak at risk)        │
├─────────────────────────────────────────────┤
│ YOUR CHILDREN                               │
│ ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│ │ Marcus   │  │ Emma     │  │ Alex     │   │
│ │ Gr 8     │  │ Gr 7     │  │ Gr 5     │   │
│ │ 75% prog │  │ 82% prog │  │ 45% prog │   │
│ │ 7d ✓     │  │ 3d ✓     │  │ No act ⚠ │   │
│ │ [View]   │  │ [View]   │  │ [View]   │   │
│ └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────┘
```

### Individual Child Dashboard
```
┌─────────────────────────────────────────────┐
│ ← Back to Family   Emma's Progress          │
├─────────────────────────────────────────────┤
│ STATUS                                      │
│ ✓ On Track                                  │
│                                             │
│ THIS WEEK                                   │
│ 📈 18 problems solved                       │
│ ⏱️ 4h 35m invested                         │
│ 📊 79% accuracy (above 70%)                 │
│ 🔥 3-day streak                             │
│                                             │
│ TOPICS (Swipe to see all)                   │
│ • Trigonometry: 95% ✓ Mastered             │
│ • Algebra: 60% In Progress                  │
│ • Calculus: 0% Locked                       │
│                                             │
│ 💡 INSIGHTS                                 │
│ Emma learns best with visual tools.         │
│ Consider using diagrams for Algebra.        │
│                                             │
│ 🏆 ACHIEVEMENTS                             │
│ Recently earned: "Consistent Learner"       │
│                                             │
│ [See Details] [Send Message] [History]     │
└─────────────────────────────────────────────┘
```

---

## Privacy Rules (Non-Negotiable)

```
SHOW TO PARENTS          HIDE FROM PARENTS
✓ Progress %             ✗ Individual answers
✓ Topics/Subjects        ✗ Specific errors
✓ Time (weekly agg)      ✗ Personal messages
✓ Accuracy (weekly agg)  ✗ Emotional signals
✓ Struggling areas       ✗ Hints per problem
✓ Learning style         ✗ Video of screen
✓ Achievements           ✗ Keystroke logs
✓ Streak                 ✗ Real-time tracking
```

**Golden Rule:** Parents support, don't spy

---

## UX Principles (Top 5)

### 1. Progressive Disclosure
```
Hero Stats (30 sec)  →  Details (2 min)  →  Deep Dive (10 min)

Example:
[Quick View: 75% | Streak: 5]
  ↓ Click for details
[Breakdown: Trig 95%, Algebra 60%, Calc 0%]
  ↓ Click for insights  
[Emma learns best with visual approaches...]
```

### 2. Interpretation Over Data
```
BAD:   Accuracy: 67%
GOOD:  Emma's at 67% on challenging material.
       That's normal for week 2. Keep going!
```

### 3. Context for Everything
```
This week: 18 problems
Grade average: 15 problems
Last week: 15 problems

Interpretation: Above average, slight improvement
```

### 4. Actionable Advice
```
Insight:      "Alex is struggling with Trig (45%)"
Context:      "New topic, hard for most kids"
Action:       "Ask: 'What part confuses you?'"
Resource:     "Khan Academy video (12 min)"
```

### 5. Growth Mindset Framing
```
NOT:  Marcus is bad at math (43% accuracy)
YES:  Marcus is building Algebra skills.
      He's improved 5% this week. Good progress!
```

---

## Parent Personas (Design For Each)

### Persona A: Engaged Parent (25%)
- **Checks:** 3-5x/week  
- **Wants:** Deep insights, trends, learning style  
- **Risk:** Helicopter parenting  
- **Design:** Provide context & reassurance

### Persona B: Busy Parent (40%)
- **Checks:** 1-2x/week  
- **Wants:** Quick health check, alerts  
- **Risk:** Missing signals  
- **Design:** Hero stats, critical alerts only

### Persona C: Anxious Parent (20%)
- **Checks:** Daily+  
- **Wants:** Benchmarks, reassurance  
- **Risk:** Over-reactive  
- **Design:** Context, historical trends, "this is normal"

### Persona D: Hands-Off Parent (15%)
- **Checks:** Rarely  
- **Wants:** Critical problems only  
- **Risk:** Missing gradual decline  
- **Design:** Monthly email, plain English

---

## Component Roadmap

### Phase 1: MVP (Weeks 1-2)
**Goal:** Basic parent dashboard

Components:
- `ParentDashboard.tsx` (routing)
- `FamilyOverview.tsx` (multi-child summary)
- `ChildDetailDashboard.tsx` (individual child)
- `AlertPanel.tsx` (critical alerts)

Features:
- Progress % by topic
- This week's stats
- Current streak
- Recent achievements

### Phase 2: Insights (Weeks 3-4)
**Goal:** Add meaning

New Components:
- `InsightsPanel.tsx` (AI-generated)
- `WeeklyActivityChart.tsx` (trends)
- `AccuracyTrendChart.tsx` (week-over-week)

Features:
- Struggling topics
- Learning style
- Growth context
- Expanded alerts (5+ types)

### Phase 3: Advanced (Weeks 5-6)
**Goal:** Scale to multi-child + communication

New Components:
- `GoalSettingPanel.tsx`
- `CommunicationHub.tsx`
- `HistoricalTrendChart.tsx`

Features:
- Family aggregate
- Goal tracking
- Parent-child messages
- 30/60/90-day views

### Phase 4: Personalization (Weeks 7-8)
**Goal:** Customization & preferences

New Components:
- `DashboardCustomizer.tsx`
- `PreferencesPanel.tsx`
- `AccessControlPanel.tsx`

Features:
- Drag-to-reorder
- Alert frequency settings
- Multi-parent access control
- Report generation

---

## Data Sources (Already Available!)

### ProgressSummary
```typescript
{
  totalTopicsStarted: number;
  totalTopicsCompleted: number;
  currentLevel: number;
  totalXP: number;
  learnSubtopics: {
    [id]: { displayName, progress, accuracy, timeSpent }
  };
  practiceTopics: {
    [id]: { displayName, nodesCompleted, totalXP }
  };
  recentActivity: [{date, topicId, problemsSolved, timeSpent}];
  lastUpdated: Timestamp;
}
```

### LearnConversation
```typescript
{
  subtopicId: string;
  sectionProgress: { masteredSections, currentSection };
  studentProfile: { 
    strugglingWith: string[]; 
    preferredMethod: 'visual' | 'procedural' | 'conceptual';
    confidenceLevel: number;
  };
}
```

### PracticeProgress
```typescript
{
  topicId: string;
  layerProgress: { foundation, integration, application };
  totalXP: number;
  currentLevel: number;
  achievements: [{id, title, icon, xpReward}];
  sessionHistory: [{date, problemsSolved, xpEarned, accuracy}];
}
```

---

## Implementation Priorities

### Must Have (Phase 1)
- [x] Multi-child selector
- [x] Progress % by topic
- [x] This week's stats
- [x] Current streak
- [x] Recent achievements
- [x] Critical alerts (3 types)

### Should Have (Phase 2)
- [ ] Struggling topics detection
- [ ] Learning style insights
- [ ] Weekly trend charts
- [ ] Accuracy comparison
- [ ] Expanded alerts (5+ types)

### Nice to Have (Phase 3+)
- [ ] Goal setting
- [ ] Parent-child messaging
- [ ] Historical trending
- [ ] Dashboard customization
- [ ] Multi-parent access control
- [ ] Export reports

---

## Compliance Checklist

- [ ] **COPPA:** Parental consent required for <13  
- [ ] **FERPA:** Parent can export all data  
- [ ] **GDPR:** Data minimization, right to deletion  
- [ ] **CCPA:** Privacy policy in plain English  
- [ ] **Accessibility:** WCAG 2.1 AA (color, contrast, keyboard)  
- [ ] **Privacy:** No keystroke logs, no real-time tracking  

---

## Testing Checklist

### Functional
- [ ] Multi-child dashboard loads correctly
- [ ] Alerts trigger at correct thresholds
- [ ] Charts display accurate data
- [ ] Mobile responsive (320px-1920px)
- [ ] Parent can navigate all views

### UX
- [ ] Dashboard loads in <2s (desktop)
- [ ] Dashboard loads in <3s (mobile 4G)
- [ ] Parent understands all metrics (user test)
- [ ] No parent confusion on actionable advice
- [ ] Alerts feel timely (not too frequent)

### Accessibility
- [ ] WCAG 2.1 AA color contrast (4.5:1)
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] No layout shift on load
- [ ] Touch targets ≥44px

### Privacy
- [ ] No personal data in URLs
- [ ] Data encrypted in transit
- [ ] No logging of sensitive data
- [ ] Parent consent recorded with timestamp
- [ ] Data deletion works end-to-end

---

## Common Pitfalls to Avoid

### ❌ DON'T
- Show individual problem answers
- Compare siblings (without explicit opt-in)
- Display "failure" language
- Track real-time activity
- Overwhelm with too many metrics
- Use education jargon
- Hide bad news (no context)
- Expect parents to interpret data
- Show only current (no trends)
- Design desktop-first (design mobile-first)

### ✓ DO
- Show progress aggregates
- Celebrate effort & growth
- Provide context for everything
- Show weekly aggregates
- Prioritize key metrics
- Use plain English
- Explain what it means & what to do
- Provide guidance with every metric
- Show trends (last week, last month)
- Design for 5" mobile screens first

---

## Glossary

| Term | What It Means | Parent Explanation |
|------|---|---|
| **Progress %** | Topics/sections completed | How much of the curriculum done |
| **Accuracy** | % of correct answers | How well understood (not speed) |
| **Streak** | Consecutive days of activity | Shows consistency & habit |
| **Mastery** | Learned topic well (>80%) | Ready for next topic |
| **Hint** | AI clue when stuck | Shows where confused |
| **XP** | Experience Points | Reward for effort |
| **Level** | Achievement level (1-20+) | Progress through gamification |
| **Learning Style** | Preferred method | How they learn best (visual/text) |
| **Struggling Area** | Topic <60% accuracy | Needs extra support |
| **Session** | One study period | One sitting |

---

## Key Numbers to Remember

- **73%** of parents want "Is child on track?"
- **68%** want actionable advice
- **89%** prefer weekly > daily notifications
- **65%** check dashboard on mobile
- **58%** don't understand education jargon
- **67%** feel anxious seeing low scores
- **24%** engagement increase with growth-mindset framing
- **53%** anxiety reduction with reframing as "learning opportunity"

---

## Success Metrics

**Phase 1 Success:**
- Dashboard loads in <2s
- 80% of parents understand all metrics
- 90% of parents find alerts helpful
- Mobile usage >65%

**Phase 2 Success:**
- Average visit: 3-4 min (engaged, not overwhelmed)
- Alert follow-through: 40%+ parents take action
- Retention: 60%+ weekly active
- NPS: >40 (parents recommend)

---

## Resources & References

**Related Documents:**
- `PARENT_DASHBOARD_REQUIREMENTS.md` - Full spec
- `PARENT_DASHBOARD_RESEARCH.md` - Research & best practices
- `STUDENT_DASHBOARD_REDESIGN.md` - Student dashboard precedent

**External References:**
- Khan Academy Parent Dashboard (best: simplicity)
- IXL Parent Dashboard (best: analytics)
- Duolingo Parent Dashboard (best: notifications)
- FERPA Compliance Guide
- COPPA for Parents

---

**Last Updated:** November 2025  
**Maintained by:** AI Campus Product Team  
**Version:** 1.0

