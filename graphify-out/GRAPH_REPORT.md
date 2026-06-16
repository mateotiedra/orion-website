# Graph Report - orion-0  (2026-06-16)

## Corpus Check
- 24 files · ~4,716,341 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 192 nodes · 226 edges · 26 communities (12 shown, 14 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2efdc08c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `compilerOptions` - 16 edges
3. `scripts` - 6 edges
4. `scripts` - 6 edges
5. `useCountdownFinished()` - 5 edges
6. `permissions` - 3 edges
7. `Countdown()` - 3 edges
8. `metadata` - 2 edges
9. `pillars` - 2 edges
10. `Member` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Countdown()` --calls--> `useCountdownFinished()`  [EXTRACTED]
  src/components/Countdown.tsx → src/components/CountdownTimer.tsx

## Import Cycles
- None detected.

## Communities (26 total, 14 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.14
Nodes (15): Home(), AssociationPage(), Member, members, metadata, offsets, pillars, rotations (+7 more)

### Community 1 - "Community 1"
Cohesion: 0.22
Nodes (12): CSSVarStyle, logoStyle(), packRowStyle, Partner, partners, PartnersSection(), supporters, supportersRowStyle (+4 more)

### Community 2 - "Community 2"
Cohesion: 0.08
Nodes (24): dependencies, next, react, react-dom, react-icons, devDependencies, eslint, eslint-config-next (+16 more)

### Community 3 - "Community 3"
Cohesion: 0.23
Nodes (11): Countdown(), CountdownTimer(), getTimeLeft(), sizeClasses, TARGET_DATE, useCountdownFinished(), artists, metadata (+3 more)

### Community 4 - "Community 4"
Cohesion: 0.33
Nodes (5): horizon, metadata, poppins, RootLayout(), LoadingScreen()

### Community 5 - "Community 5"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 6 - "Community 6"
Cohesion: 0.08
Nodes (24): dependencies, next, react, react-dom, react-icons, devDependencies, eslint, eslint-config-next (+16 more)

### Community 8 - "Community 8"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

## Knowledge Gaps
- **89 isolated node(s):** `allow`, `eslintConfig`, `nextConfig`, `name`, `version` (+84 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `allow`, `eslintConfig`, `nextConfig` to the rest of the system?**
  _89 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Community 5` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 6` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Community 8` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._