# Module 1 Screen Wireframe (v3 — Web-First & Responsive Ready)

## Global Layout Standard
- **Header (10%):** Course Breadcrumb (`Module 1 > Lesson > Screen`), Progress Bar (`X / 29`), Language Toggle (`TH / EN Captions`)
- **Main Content Area (75%):** Interactive Stage / Split Visual + Formula / Simulation Canvas
- **Persistent Audio & Caption Bar (5%):** Play/Pause `AUD-*`, Scrub bar, Speed (`1.0x / 1.25x`), Closed Captions Toggle
- **Footer (10%):** `Back` | Screen Indicator | `Workshop Data` Drawer | `Next`
- **Breakpoints:** Desktop (`>= 1024px`), Tablet (`768px–1023px`), Mobile (`< 768px`, vertical stack)

---

## M1-L1: Why Statistics in Manufacturing (6 Screens)
- **M1L1-S01 Welcome & Variation Reality:** Left Hero Factory Animation (`AST-M1-001`) | Right Title + 4 Learning Objectives | Footer Next
- **M1L1-S02 Data-Driven Decision:** Left Dashboard Infographic (`AST-M1-002`) with 3 Clickable Hotspots | Right Narration & Hotspot Detail Card
- **M1L1-S03 COPQ:** Top COPQ Iceberg & Formula (`AST-M1-003`) | Center Interactive Calculator (`INT-M1-L1-02`) | Bottom Risk Indicator Badge (Green/Yellow/Red)
- **M1L1-S04 Factory Examples & 4M1E:** Top 4 Industry Tabs | Bottom Interactive Variation Explorer (`INT-M1-L1-01` + `AST-M1-005`)
- **M1L1-S05 Statistical Thinking:** Left Animated Histogram (`AST-M1-004`) | Right 3 Statistical Thinking Pillars
- **M1L1-S06 Knowledge Check (`KC-M1-L1`):** Centered 2-Question Card + Immediate Rationale Drawer

## M1-L2: Types of Data & Measurement Scales (6 Screens)
- **M1L2-S01 Variable vs Attribute:** 2-Column Split Comparison Cards (`AST-M1-006` | `AST-M1-007`)
- **M1L2-S02 Continuous vs Discrete / Attribute:** Interactive Digital Micrometer vs Defect Counter Bin (`AST-M1-008` | `AST-M1-009`)
- **M1L2-S03 Measurement Scales:** 2×2 Grid of Flip Cards (`Nominal`, `Ordinal`, `Interval`, `Ratio` — `AST-M1-010`) + "Allowed Math" Badge
- **M1L2-S04 Workshop 1 (`INT-M1-L2-01`, `INT-M1-L2-02`):** Top Item Cards (Drag/Select) | Bottom Drop Zones (`Variable` vs `Attribute`) + Scale Selector Dropdown (accessible keyboard fallback)
- **M1L2-S05 Feedback & Rationale:** Diagnostic Summary Table highlighting missed items and engineering traps (Go/No-Go, Cavity ID, Celsius)
- **M1L2-S06 Lesson Summary & Check:** Quick Decision Tree + 2 Questions

## M1-L3: Descriptive Statistics (7 Screens)
- **M1L3-S01 Mean:** Formula Card + Interactive Mean Builder (`INT-M1-L3-01` + `AST-M1-011`) with editable value to test Outlier pull
- **M1L3-S02 Median:** Sorted Array Animation (`AST-M1-012`) + Mean vs Median Live Comparison Pill
- **M1L3-S03 Mode:** Frequency Bar Highlight (`AST-M1-013`) + 1-Machine vs 2-Machine Bimodal Toggle
- **M1L3-S04 Measures of Dispersion:** Unified 3-Part Dispersion Comparison & Interactive Calculator (`INT-M1-L3-01`, `AST-M1-014`, `AST-M1-015`, `AST-M1-016`: Range bracket + Variance squared areas + SD Normal curve with $\pm 1\sigma, \pm 2\sigma, \pm 3\sigma$ tabs)
- **M1L3-S05 CV & Workshop 2:** Dual-Process Dashboard (`AST-M1-017`: 10 mm Pin vs 500 mm Shaft + MC-A vs MC-B calculation)
- **M1L3-S06 Sigma Simulator & Match Game:** Top Live Histogram Slider (`INT-M1-L3-02`: `sigma 0.1–3.0` vs USL/LSL) | Bottom 7-Term Match Game (`INT-M1-L3-03`)
- **M1L3-S07 Knowledge Check (`KC-M1-L3`):** 3-Question Randomized Assessment Card

## M1-L4: Data Visualization & Final Exam (8 Screens)
- **M1L4-S01 Why Visualize Data?:** Left Raw 30-Row Table Preview | Right 5 Chart Preview Cards
- **M1L4-S02 Histogram:** Interactive Histogram (`AST-M1-018`) + 4 Shape Tabs (Normal, Skewed, Bimodal, Cliff)
- **M1L4-S03 Box Plot:** Left Anatomy Diagram (Min, Q1, Med, Q3, Max, Outlier) | Right MC-A vs MC-B Side-by-Side Box Plot (`AST-M1-020`)
- **M1L4-S04 Pareto Chart:** Interactive Defect Bar + Cumulative % Line (`AST-M1-019`) with "Sort 80/20" Trigger
- **M1L4-S05 Scatter Plot:** Correlation Explorer (`AST-M1-019`: `Mold_Temp_C` vs `Shaft_Diameter_mm`, `r = +0.99`) + Pattern Presets
- **M1L4-S06 Run Chart:** Time-Series Line (`Sample 1..30`, `AST-M1-020`) + Toggle comparing Histogram vs Run Chart
- **M1L4-S07 Workshop 2 (`INT-M1-L4-01`, `INT-M1-L4-02`):** Top 5-Scenario Chart Selector Matrix | Bottom Interactive 30-Part Production Dashboard (`CSV` Downloadable)
- **M1L4-S08 Module 1 Final Exam (`EXAM-M1`):** 20-Question Stratified Random Exam Runner + Score Breakdown by Lesson + Remediation Links

---

## Navigation & Accessibility Rules
1. **Linear Mode (First Pass):** Screens unlock sequentially after viewing/interacting; Free-jump sidebar unlocks once visited (or via Instructor Preview Mode toggle).
2. **Keyboard Navigation:** Full `Tab` / `Shift+Tab` / `Enter` / `Space` / Arrow key support on sliders and drag-drop alternatives.
3. **Color-Blind Safe Palette:** Never rely on Red/Green alone — pair colors with icons (`✓`, `⚠`, `✕`) and pattern fills.
4. **Captions & Transcript:** Toggleable Thai/EN caption strip synced to `AUD-*`.
