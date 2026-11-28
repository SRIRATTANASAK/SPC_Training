# Module 1 Asset Production Specification (v3 — Synced & Web-Ready)

**Module:** Statistics Foundation for Manufacturing  
**Style Guide:** Clean industrial manufacturing theme, blue-slate-amber palette (`#0F172A`, `#1E40AF`, `#0284C7`, `#F59E0B`), 16:9 format  
**Formats:**
- Hero/Scene Photos: `1920x1080` WebP/PNG (no embedded text so Thai/EN UI overlays cleanly)
- Diagrams & Statistical Charts: Interactive **SVG / React Canvas** (crisp at all DPIs & animatable via CSS/GSAP)

| Asset ID | Asset Name | Used In (Synced) | Type | Prompt / Visual Spec | Animation Requirement |
|---|---|---|---|---|---|
| `AST-M1-001` | Factory Hero Scene | `M1L1-S01` | Photo/WebP | Modern automotive & electronics manufacturing line, CNC machining center, engineers reviewing SPC dashboard, photorealistic, no text | Slow pan left-to-right (5s) |
| `AST-M1-002` | Data-Driven Decision | `M1L1-S02` | Photo/WebP + Hotspots | Engineer comparing manual paper log vs digital analytics dashboard on factory floor, no text | Zoom into dashboard + 3 hotspot pulses |
| `AST-M1-003` | COPQ Iceberg Infographic | `M1L1-S03` | Animated SVG | Iceberg graphic: tip = Scrap & Rework; underwater = Sorting, Downtime, Warranty, Lost Trust | Waterline reveal + sequential icon pop |
| `AST-M1-004` | Statistical Thinking Flow | `M1L1-S04`, `M1L1-S05` | Animated SVG | Process → Variation → Data → Normal vs Abnormal Histogram wave | Animated variation wave + green/red zone highlight |
| `AST-M1-005` | 4M1E Variation Sources | `M1L1-S04` | SVG Icon Set | 6 industrial icons: Material, Machine, Method, Manpower, Measurement, Environment | Icons reveal one-by-one synced to audio |
| `AST-M1-006` | Variable Data Examples | `M1L2-S01` | Photo/SVG Split | Digital micrometer on shaft, torque wrench, thermocouple gauge, precision scale, no text | Slide-in comparison |
| `AST-M1-007` | Attribute Data Examples | `M1L2-S01` | Photo/SVG Split | QC inspector checking scratch, dent, crack, Go/No-Go plug gauge, pass/fail tags, no text | Highlight defect callouts |
| `AST-M1-008` | Continuous Measurement | `M1L2-S02` | Animated SVG | High-resolution digital caliper zooming from `50.0` → `50.01` → `50.014` mm | Smooth continuous decimal sweep |
| `AST-M1-009` | Discrete Defect Counter | `M1L2-S02` | Animated SVG | Parts moving into Pass/Fail bins with integer defect counter | Integer increment (`0 → 1 → 2 → 3`) |
| `AST-M1-010` | NOIR Measurement Scale Cards | `M1L2-S03` | Interactive SVG Cards | 4 cards: Nominal, Ordinal, Interval, Ratio with factory icons | 3D card flip reveal |
| `AST-M1-011` | Mean Balance Visualization | `M1L3-S01` | Interactive SVG | Number line balance beam showing fulcrum shifting when outlier moves | Real-time fulcrum tilt |
| `AST-M1-012` | Median Sort Visualization | `M1L3-S02` | Animated SVG | Unsorted shaft bars animating into ascending order with center bar highlighted | Sort & center glow animation |
| `AST-M1-013` | Mode & Bimodal Visualization | `M1L3-S03` | Animated SVG | Frequency bars pulsing highest peak; toggle showing 2-peak mixed machine state | Tallest bar pulse |
| `AST-M1-014` | Range Span Visualization | `M1L3-S04` | Interactive SVG | Min (`49.98`) to Max (`50.14`) caliper bracket showing `R = Max - Min` | Expanding span arrow |
| `AST-M1-015` | Variance Squared Areas | `M1L3-S04` | Animated SVG | Deviations `(x - x̄)` transforming into squared boxes visually | Deviation line → square morph |
| `AST-M1-016` | SD Bell Curve Empirical Rule | `M1L3-S04` | Interactive SVG | Normal curve shaded in `±1σ (68.27%)`, `±2σ (95.45%)`, `±3σ (99.73%)` bands | Sequential sigma band reveal |
| `AST-M1-017` | CV Comparison Dashboard | `M1L3-S05` | SVG Dashboard | Side-by-side Pin (`10 mm`) vs Shaft (`500 mm`) & MC-A vs MC-B normalized CV% bars | Bar transition animation |
| `AST-M1-018` | Histogram Shape Gallery | `M1L4-S01`, `M1L4-S02` | Interactive SVG | Normal, Skewed, Bimodal, and Cliff-shaped histograms | Bars animate upward from baseline |
| `AST-M1-019` | Pareto & Scatter Assets | `M1L4-S04`, `M1L4-S05` | Interactive SVG | Pareto 80/20 (ค่าประมาณเพื่อการสอน) cumulative line + Scatter correlation dots & trendline | Sort bars + draw trendline |
| `AST-M1-020` | Box Plot & Run Chart Assets | `M1L4-S03`, `M1L4-S06` | Interactive SVG | Box plot anatomy (`Q1/Med/Q3/Outlier`) + Time-ordered Run Chart (`Sample 1..30`) | Box expand + time-series draw |

## Visual & Localization Requirements
- **Zero baked-in text** inside photographic assets so Thai/EN labels render crisply via HTML/SVG.
- **Color-blind safe** (`#0284C7` blue / `#F59E0B` amber / `#DC2626` red paired with distinct shapes/patterns).
- Store final files in `modules/module-01/assets/images/` and `modules/module-01/assets/audio/` (`AUD-M1L1-S01.mp3` .. `AUD-M1L4-S08.mp3`).
