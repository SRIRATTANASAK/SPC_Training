# Module 5 Asset Production Specification (Web & Animation Ready)

**Module:** SPC Concept and Methodology (Shewhart, Control vs Spec Limit, Stability, Western Electric & Nelson Rules)  
**Style Guide:** Consistent blue-slate-amber-emerald industrial theme (`#0F172A`, `#1E40AF`, `#0284C7`, `#F59E0B`, `#10B981`), 16:9 format

| Asset ID | Asset Name | Used In | Type | Visual Spec | Animation Requirement |
|---|---|---|---|---|---|
| `AST-M5-001` | Capability to Control Hero | `M5L1-S01` | Animated SVG | Capable bell curve developing real-time upward shift flagged by glowing red `UCL` line | Shift pulse + radar sweep |
| `AST-M5-002` | Walter Shewhart 1924 Memo | `M5L1-S02` | Animated SVG | Historic 1924 Bell Labs chart card morphing into crisp digital control chart separating Noise vs Signal | Card flip & line draw |
| `AST-M5-003` | Prevention vs Detection Conveyor | `M5L1-S03` | Animated SVG | Top conveyor sorting scrap at end vs bottom conveyor pausing via early chart warning before red parts appear | Synchronized dual conveyor |
| `AST-M5-004` | AIAG SPC & JEDEC JESD557 | `M5L1-S04` | Animated SVG | Left AIAG 3-step loop (`Collect → Control → Capability`); right JEDEC online SPC + OCAP trigger | Loop & OCAP badge trigger |
| `AST-M5-005` | Control Chart Zone Anatomy | `M5L2-S01` | Animated SVG | Sideways bell curve projecting horizontal `Zone C (±1σ)`, `Zone B (±2σ)`, `Zone A (±3σ)` across chart | Zone bands highlight outward |
| `AST-M5-006` | Control Limits vs Spec Limits | `M5L2-S02` | Animated SVG | Individual parts under wide `USL/LSL` vs `√n`-narrower `UCL/LCL` catching subgroup shift immediately | Zoom comparison & warning badge |
| `AST-M5-007` | X̄-R Constants & Formulas | `M5L2-S03` | SVG Diagram | Formula cards (`CL ± A2*R̄`, `D4*R̄`) paired with highlighted `n=5` constants table row (`A2=0.577, D4=2.114`) | Constants trace into formula |
| `AST-M5-008` | Phase I vs Phase II Workflow | `M5L2-S04` | Animated SVG | Trial limits over 25 subgroups → remove verified OOC point → tighter Revised Limits locked by padlock | Padlock snap on Phase II |
| `AST-M5-009` | Stacked X̄-R Reading Order | `M5L3-S01` | Animated SVG | Stacked X̄ (top) and R (bottom) charts with numbered arrows: `1) Check R Chart` → `2) Check X̄ Chart` | Sequence arrows illuminate |
| `AST-M5-010` | Sudden Shift vs Trend | `M5L3-S02` | Animated SVG | Two chart panels: abrupt step jump (`Shift`) vs steady 7-point upward tool-wear slope (`Trend`) | Step and slope line draw |
| `AST-M5-011` | Cyclic vs Mixture Patterns | `M5L3-S03` | Animated SVG | Left sine wave (`Cyclic`); right points hugging top/bottom (`Mixture`) splitting into 2 clean stratified lines | Stratification stream split |
| `AST-M5-012` | Stratification (Hugging CL) | `M5L3-S04` | Animated SVG | Points compressed inside `Zone C` far from inflated `UCL/LCL` with audit alert badge | Wide limits contrast pulse |
| `AST-M5-013` | Tampering & Early OOC Warning | `M5L3-S05` | Animated SVG | Left manual tweaks creating 2× zigzag amplitude; right OOC alert firing well inside `USL` spec wall | Zigzag growth vs safe margin |
| `AST-M5-014` | Zone Run Probability Visual | `M5L4-S01` | Animated SVG | Coin-flip probability tree showing `0.5⁷ × 2 ≈ 1.56%` for 7 points on one side (AIAG; ISQC 8 points ≈ 0.78%) | Odds meter drops below 1% |
| `AST-M5-015` | Western Electric Rules 1–4 Grid | `M5L4-S02` | Animated SVG | 4 crisp mini-charts showing exact `1>3σ`, `2/3>2σ`, `4/5>1σ`, `8 same side` violation points ringed in red | Red rings illuminate sequentially |
| `AST-M5-016` | Nelson Rules & ARL Fatigue Gauge | `M5L4-S03` | Interactive SVG | 4 Nelson mini-charts (`6 Trend, 14 Alt, 15 Zone C, 8 Non-C`) + speedometer showing `ARL` drop (`370 → 91` for the WE 4-rule set) | Needle swings to amber alert |
| `AST-M5-017` | OOC to OCAP 3-Step Strip | `M5L4-S05` | Animated SVG | Clean flow cards: `1) Verify Measurement` → `2) Contain Last Good` → `3) Fix Special Cause` | Sequential flow highlight |
| `AST-M5-018` | Workshop 5 Annotated Solution | `M5L4-S08` | SVG Dashboard | Dual X̄-R chart highlighting `SG-11 (Rule 1)` and `SG-18..25 (Rule 4 [7 points], 2 & 3)` vs Revised Limits (`25.0013`) | Limit tighten overlay |
| `AST-M5-019` | Module 5 to 6 Milestone Bridge | `M5L4-S09` | SVG Graphic | Control chart concepts connecting directly into Module 6 Variable vs Attribute Chart Selection Tree | Bridge arrow glow |
| `AST-M5-020` | Mandatory Rules, Zero-Bounds & Rule Selection Animation | `M5L4-S04` | Animated SVG | 3-scene animation: (1) Two-sided Mean vs Lower-is-Better (`Roughness/Flatness/Coplanarity/Tilt`) pushing `LCL < 0` into red invalid zone (`Keep UCL only`), (2) Variation Chart snapping onto `LCL = 0` (`Cross out < LCL`), (3) Mandatory Shields (`Rule 1` + `Raw Data vs USL/LSL`) + Engineering Judgement & Process Characteristic scale activating `≥ 1` Optional Rule cleanly | Sequential boundary strike-through + shield lock + rule selection balance |
