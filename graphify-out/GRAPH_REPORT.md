# Graph Report - orion-0  (2026-06-16)

## Corpus Check
- 22 files · ~4,715,931 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 117 nodes · 114 edges · 16 communities (9 shown, 7 thin omitted)
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
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `scripts` - 6 edges
3. `useCountdownFinished()` - 3 edges
4. `permissions` - 2 edges
5. `Countdown()` - 2 edges
6. `paths` - 2 edges
7. `allow` - 1 edges
8. `eslintConfig` - 1 edges
9. `nextConfig` - 1 edges
10. `private` - 1 edges

## Surprising Connections (you probably didn't know these)
- `Countdown()` --calls--> `useCountdownFinished()`  [EXTRACTED]
  src/components/Countdown.tsx → src/components/CountdownTimer.tsx

## Import Cycles
- None detected.

## Communities (16 total, 7 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (7): navLinks, navLinks, contacts, metadata, metadata, tiers, values

### Community 1 - "Community 1"
Cohesion: 0.22
Nodes (6): CSSVarStyle, packRowStyle, Partner, partners, supporters, supportersRowStyle

### Community 2 - "Community 2"
Cohesion: 0.25
Nodes (6): Member, members, metadata, offsets, pillars, rotations

### Community 3 - "Community 3"
Cohesion: 0.18
Nodes (8): Countdown(), sizeClasses, TARGET_DATE, useCountdownFinished(), artists, metadata, offsets, rotations

### Community 4 - "Community 4"
Cohesion: 0.29
Nodes (3): horizon, metadata, poppins

### Community 5 - "Community 5"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 6 - "Community 6"
Cohesion: 0.13
Nodes (14): dependencies, next, react, react-dom, react-icons, name, private, scripts (+6 more)

### Community 8 - "Community 8"
Cohesion: 0.20
Nodes (10): devDependencies, eslint, eslint-config-next, @netlify/plugin-nextjs, tailwindcss, @tailwindcss/postcss, @types/node, @types/react (+2 more)

## Knowledge Gaps
- **73 isolated node(s):** `allow`, `eslintConfig`, `nextConfig`, `name`, `version` (+68 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 8` to `Community 6`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **What connects `allow`, `eslintConfig`, `nextConfig` to the rest of the system?**
  _73 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.1323529411764706 - nodes in this community are weakly interconnected._
- **Should `Community 5` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 6` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._