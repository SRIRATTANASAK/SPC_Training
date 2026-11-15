# Module 4 Asset Production Specification (Web & Animation Ready)

**Module:** Process Variation and Capability (VOP/VOC, Cp/Cpk/Pp/Ppk, AIAG/VDA & JEDEC Standard)  
**Style Guide:** Consistent blue-slate-amber-emerald industrial theme (`#0F172A`, `#1E40AF`, `#0284C7`, `#F59E0B`, `#10B981`), 16:9 format

| Asset ID | Asset Name | Used In | Type | Visual Spec | Animation Requirement |
|---|---|---|---|---|---|
| `AST-M4-001` | Stable ≠ Capable Hero | `M4L1-S01` | Animated SVG | Tight normal curve (`6σ` narrow) positioned off-center crossing red `USL` wall | Curve slides slightly off-center showing red tail outside USL |
| `AST-M4-002` | Voice of Process (VOP) | `M4L1-S02` | Animated SVG | CNC/Stamping machine outputting histogram with `μ ± 3σ = 6σ` (`99.73%`) bracket | Bracket spans across `6σ` width |
| `AST-M4-003` | Voice of Customer (VOC) | `M4L1-S03` | Animated SVG | Engineering blueprint showing Pin Length `9.85 — 10.00 — 10.15 mm` (`LSL/Target/USL`) | Dimension callout lines illuminate sequentially |
| `AST-M4-004` | VOP vs VOC 4-Quadrant Matrix | `M4L1-S04` | Interactive SVG | 2×2 grid: `Ideal State`, `Predictable Scrap`, `Brink of Chaos`, `Firefighting` with mini run charts | Quadrant expands to show mini curve + action badge on click |
| `AST-M4-005` | Goalpost vs Taguchi Loss | `M4L2-S01` | Interactive SVG | Flat binary goalpost step vs smooth parabolic Taguchi Loss curve centered at `Target` | Step function morphs into parabola on toggle |
| `AST-M4-006` | Bilateral vs Unilateral Specs | `M4L2-S02` | Animated SVG | 3 columns: `2-Sided Pin (Cp+Cpk)`, `LSL-Only Pull Force (Cpl)`, `USL-Only Leakage (Cpu)` | `Cp` badge dims out for 1-sided specs |
| `AST-M4-007` | 3 Limits Comparison Stack | `M4L2-S03` | Animated SVG | Vertical stack: `Spec Limits (Individual)` vs `Natural Spread (6σ)` vs `Control Limits (Subgroup X̄)` | Three horizontal brackets stack top-to-bottom |
| `AST-M4-008` | Cp Blind to Centering Demo | `M4L3-S01` | Animated SVG | Narrow `Cp = 2.00` bell curve sliding onto `USL` wall causing 50% red defect area while `Cp` stays `2.00` | Curve translates right to USL while `Cp = 2.00` locks |
| `AST-M4-009` | Cpk Nearest-Wall Arrows | `M4L3-S02` | Animated SVG | Asymmetric curve showing left arrow (`Cpl`) and shorter right arrow (`Cpu`) highlighted as `Cpk` | Shorter distance arrow pulses in amber/red |
| `AST-M4-010` | Within vs Overall Sigma Diagram | `M4L3-S03` | Interactive SVG | 4 shifting subgroups showing tight `σ_within` (`R̄/d2`) per group vs wide combined `s_overall` | Subgroup brackets collapse into overall distribution |
| `AST-M4-011` | Pp & Ppk Diagnostic Cards | `M4L3-S04` | Animated SVG | Visual pairs: `Cpk ≈ Ppk` (Stable), `Cpk >> Ppk` (Drift/Shift), `Cp >> Cpk` (Off-center) | Cards highlight matching curve fault pattern |
| `AST-M4-012` | Capability to PPM Ladder | `M4L3-S05` | Interactive SVG | Step ladder `Cpk 0.67 → 1.00 → 1.33 → 1.67 → 2.00` showing logarithmic PPM drop (`45,500 → 2,700 → 63 → 0.57 → 0.002`) | Steps light up with defect counter drop |
| `AST-M4-013` | 4-Step Capability Calculator | `M4L3-S06` | Animated SVG | Step-by-step equation cards for `σ_within = 0.0268`, `Cp = 1.87`, `Cpk = 1.64`, `Pp = 1.31`, `Ppk = 1.15` | Equation steps reveal sequentially |
| `AST-M4-014` | 3 Prerequisite Gates Pipeline | `M4L4-S01` | Animated SVG | 3 sequential padlocks: `1) MSA (%GRR < 10%)` → `2) Stable Chart` → `3) Normality (p ≥ 0.05)` | Gates unlock green left-to-right |
| `AST-M4-015` | AIAG / VDA Threshold Table | `M4L4-S02` | SVG Table Graphic | Clean comparison card: Initial PPAP (`Ppk ≥ 1.67`) vs Ongoing (`Cpk ≥ 1.33`) + containment note | Threshold rows highlight |
| `AST-M4-016` | JEDEC Semiconductor Standard | `M4L4-S03` | Animated SVG | IC package / wire bond / wafer probe icons paired with `1.33`, `1.67–2.00`, `1-sided`, and `OCAP` rules | Process cards illuminate in sequence |
| `AST-M4-017` | Unified Traffic-Light Gate | `M4L4-S04` | Animated SVG | 3-tier decision flowchart: `≥ 1.67 Green` | `1.33–1.66 Amber` | `< 1.33 Red` | Flow branches animate downward |
| `AST-M4-018` | Workshop Before/After Drift Fix | `M4L4-S07` | SVG Dashboard | Subgroup plot highlighting `SG-15..20` Night drift (`Ppk = 1.15` Red) vs `SG-01..14` stable (`Ppk = 1.93` Green) | Highlight toggles `SG-15..20` shift removal |
