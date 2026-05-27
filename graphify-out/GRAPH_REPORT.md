# Graph Report - src  (2026-05-27)

## Corpus Check
- Corpus is ~6,561 words - fits in a single context window. You may not need a graph.

## Summary
- 57 nodes · 63 edges · 8 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Page Shell & Navigation|Page Shell & Navigation]]
- [[_COMMUNITY_Partners & Sponsors|Partners & Sponsors]]
- [[_COMMUNITY_Association Page|Association Page]]
- [[_COMMUNITY_Countdown Timer|Countdown Timer]]
- [[_COMMUNITY_Root Layout & Loading|Root Layout & Loading]]
- [[_COMMUNITY_Programmation Page|Programmation Page]]
- [[_COMMUNITY_Donations Page|Donations Page]]

## God Nodes (most connected - your core abstractions)
1. `useCountdownFinished()` - 3 edges
2. `Countdown()` - 2 edges
3. `horizon` - 1 edges
4. `poppins` - 1 edges
5. `metadata` - 1 edges
6. `metadata` - 1 edges
7. `pillars` - 1 edges
8. `Member` - 1 edges
9. `members` - 1 edges
10. `offsets` - 1 edges

## Surprising Connections (you probably didn't know these)
- `Countdown()` --calls--> `useCountdownFinished()`  [EXTRACTED]
  components/Countdown.tsx → components/CountdownTimer.tsx

## Communities (8 total, 0 thin omitted)

### Community 0 - "Page Shell & Navigation"
Cohesion: 0.18
Nodes (4): navLinks, navLinks, contacts, metadata

### Community 1 - "Partners & Sponsors"
Cohesion: 0.22
Nodes (6): CSSVarStyle, packRowStyle, Partner, partners, supporters, supportersRowStyle

### Community 2 - "Association Page"
Cohesion: 0.25
Nodes (6): Member, members, metadata, offsets, pillars, rotations

### Community 3 - "Countdown Timer"
Cohesion: 0.32
Nodes (4): Countdown(), sizeClasses, TARGET_DATE, useCountdownFinished()

### Community 4 - "Root Layout & Loading"
Cohesion: 0.29
Nodes (3): horizon, metadata, poppins

### Community 5 - "Programmation Page"
Cohesion: 0.33
Nodes (4): artists, metadata, offsets, rotations

### Community 6 - "Donations Page"
Cohesion: 0.40
Nodes (3): metadata, tiers, values

## Knowledge Gaps
- **28 isolated node(s):** `horizon`, `poppins`, `metadata`, `metadata`, `pillars` (+23 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `horizon`, `poppins`, `metadata` to the rest of the system?**
  _28 weakly-connected nodes found - possible documentation gaps or missing edges._