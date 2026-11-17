# Graph Report - 3d-portfolio-main  (2026-11-17)

## Corpus Check
- 52 files · ~28,367 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: .glb 8, (none) 1, .ico 1)

## Summary
- 215 nodes · 457 edges · 13 communities (8 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ec97084b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- TitleHeader
- Room.jsx
- index.js
- App.jsx
- react
- Contact.jsx
- manifest.json
- AudioFXEngine
- sw.js

## God Nodes (most connected - your core abstractions)
1. `react` - 31 edges
2. `App()` - 23 edges
3. `TitleHeader()` - 19 edges
4. `GlowingBorderCard()` - 15 edges
5. `audioFX` - 11 edges
6. `gsap` - 10 edges
7. `@gsap/react` - 9 edges
8. `@react-three/drei` - 9 edges
9. `AudioFXEngine` - 9 edges
10. `@react-three/fiber` - 8 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `AgenticSandbox()`  [EXTRACTED]
  src/App.jsx → src/components/AgenticSandbox.jsx
- `App()` --calls--> `ArchitectureExplorer()`  [EXTRACTED]
  src/App.jsx → src/components/ArchitectureExplorer.jsx
- `App()` --calls--> `GitHubActivityMatrix()`  [EXTRACTED]
  src/App.jsx → src/components/GitHubActivityMatrix.jsx
- `App()` --calls--> `LatencyBenchmarkPlayground()`  [EXTRACTED]
  src/App.jsx → src/components/LatencyBenchmarkPlayground.jsx
- `App()` --calls--> `Contact()`  [EXTRACTED]
  src/App.jsx → src/sections/Contact.jsx

## Import Cycles
- None detected.

## Communities (13 total, 5 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.06
Nodes (45): dependencies, @gsap/react@^2.1.2, react@^19.0.0, react-dom@^19.0.0, react-responsive@^10.0.1, @react-three/drei@^10.0.4, @react-three/fiber@^9.1.0, @react-three/postprocessing@^3.0.4 (+37 more)

### Community 1 - "TitleHeader"
Cohesion: 0.15
Nodes (18): gsap@^3.12.7, gsap, @gsap/react, AgenticSandbox(), ArchitectureExplorer(), GITHUB_STATS, GitHubActivityMatrix(), GlowingBorderCard() (+10 more)

### Community 2 - "Room.jsx"
Cohesion: 0.10
Nodes (20): three@^0.174.0, @react-three/drei, @react-three/fiber, three, Computer(), ContactExperience(), HeroExperience(), HeroLights() (+12 more)

### Community 3 - "index.js"
Cohesion: 0.11
Nodes (18): abilities, agenticScenarios, architectureADRs, counterItems, expCards, expLogos, logoIconsList, navLinks (+10 more)

### Community 4 - "App.jsx"
Cohesion: 0.16
Nodes (14): App(), HUDCommandPalette, PreetAICopilot, ResumeModal, SystemDesignModal, TechStack, BootLoader(), CustomCursor() (+6 more)

### Community 5 - "react"
Cohesion: 0.20
Nodes (9): react, AnimatedCounter(), BOOT_LOGS, Button(), SOCIAL_CONFIGS, PREET_KNOWLEDGE_BASE, SystemTelemetryBar(), Hero() (+1 more)

### Community 6 - "Contact.jsx"
Cohesion: 0.25
Nodes (6): @emailjs/browser@^4.4.1, @emailjs/browser, useInView(), Contact(), ContactExperience, ModelErrorBoundary

### Community 7 - "manifest.json"
Cohesion: 0.22
Nodes (8): background_color, display, icons, name, orientation, short_name, start_url, theme_color

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `package.json`, `TitleHeader`, `Room.jsx`, `index.js`, `App.jsx`, `Contact.jsx`?**
  _High betweenness centrality (0.376) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05782312925170068 - nodes in this community are weakly interconnected._
- **Why does `AudioFXEngine` connect `AudioFXEngine` to `react`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **Should `Room.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1010752688172043 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `package.json` to `TitleHeader`, `Room.jsx`, `Contact.jsx`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Should `index.js` be split into smaller, more focused modules?**
  _Cohesion score 0.10507246376811594 - nodes in this community are weakly interconnected._