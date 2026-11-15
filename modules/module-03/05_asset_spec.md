# Module 3 Asset Production Specification (Web & Animation Ready)

**Module:** Confidence and Hypothesis Testing  
**Style Guide:** Consistent blue-slate-amber industrial theme (`#0F172A`, `#1E40AF`, `#0284C7`, `#F59E0B`), 16:9 format

| Asset ID | Asset Name | Used In | Type | Visual Spec | Animation Requirement |
|---|---|---|---|---|---|
| `AST-M3-001` | Conveyor Sampling Hero | `M3L1-S01` | Photo/SVG | Production conveyor routing parts into inspection trays, no text | Conveyor flow + tray pop |
| `AST-M3-002` | Random vs Systematic | `M3L1-S02` | Animated SVG | Lot grid highlighting random picks vs every-5th-part cycle sync trap | Periodic pulse highlight |
| `AST-M3-003` | Stratified 4-Cavity Grid | `M3L1-S03` | Animated SVG | 4 color-coded mold cavity streams sampled proportionally | Stratum split & draw |
| `AST-M3-004` | Rational Subgroup Window | `M3L1-S04` | Animated SVG | 5 consecutive parts grouped cleanly per hour vs mixed hourly bag | Sliding subgroup bracket |
| `AST-M3-005` | Point vs Interval Estimate | `M3L2-S01` | Animated SVG | Single dot `119.50` expanding into `95% CI` bracket `[118.76, 120.24]` | Bracket expansion |
| `AST-M3-006` | t vs Z Distribution Tails | `M3L2-S02` | Interactive SVG | Overlay of t-distribution (wider tails for small `n`) vs Standard Normal Z | Tail morph as `n` increases |
| `AST-M3-007` | 4× Sample Size Shrinking ME | `M3L2-S03` | Animated SVG | Visual stack showing `4× n` cuts Margin of Error in half (`1/√n`) | Error bar squeeze |
| `AST-M3-008` | Courtroom Hypothesis Scale | `M3L3-S01` | Animated SVG | Balance scale holding `H₀ (Innocent)` vs `H₁ (Sample Evidence)` | Scale tilt on evidence weight |
| `AST-M3-009` | Alpha Critical Tails | `M3L3-S02` | Animated SVG | Null distribution curve with shaded `α = 5%` rejection tails | Tail fill outward |
| `AST-M3-010` | Beta & Power Dual Curves | `M3L3-S03` | Interactive SVG | Overlapping `H₀` and `H₁` curves shading `α`, `β`, and `Power (1−β)` | Curve separation & shade |
| `AST-M3-011` | p-value Threshold Gauge | `M3L3-S04` | Interactive SVG | Horizontal gauge `0..1` with `α = 0.05` line and Reject/Fail badge | Needle slide across `0.05` |
| `AST-M3-012` | Stat vs Practical Spec Wall | `M3L3-S05` | Animated SVG | Tiny `0.002 mm` CI zoomed inside wide `±0.10 mm` spec walls | Camera zoom out |
| `AST-M3-013` | Hypothesis Test Flowchart | `M3L4-S01` | Animated SVG | Tree: `Normality → Equal Variance → 1-Sample / 2-Sample / Paired / ANOVA` | Node-by-node illumination |
| `AST-M3-014` | 1-Sample T-Test MC-A | `M3L4-S02` | SVG Chart | `MC-A` 95% CI overlapping `120.0 N` target line (`p = 0.173`) | CI overlap highlight |
| `AST-M3-015` | 2-Sample vs Paired Diagram | `M3L4-S03` | Animated SVG | Two separate boxes (MC-A vs MC-B) vs linked pre/post pairs on same parts | Pair link arrow draw |
| `AST-M3-016` | ANOVA 4-Cavity F-Ratio | `M3L4-S04` | Animated SVG | 4 cavity box plots showing Between-group spread vs Within-group spread | Cavity 3 shift highlight |
| `AST-M3-017` | Workshop Result Dashboard | `M3L4-S07` | SVG Dashboard | `MC-A vs MC-B` Box Plot + Difference CI `[4.73, 6.57]` clearly above `0` | CI bar highlight |
| `AST-M3-018` | Module 3 to 4 Milestone | `M3L4-S08` | SVG Graphic | Bridge from Hypothesis Testing (`μ`) to Process Capability (`Cp/Cpk`) | Milestone glow |
