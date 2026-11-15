# Module 9 Asset Production Specification (Web & Animation Ready)

**Module:** MSA Connection to SPC (`Why MSA Before SPC`, `Gage R&R`, `Bias / Linearity / Stability`, `Report Workshop`)  
**Style Guide:** Consistent blue-slate-amber-emerald-crimson metrology theme (`#0F172A`, `#1E40AF`, `#0284C7`, `#F59E0B`, `#10B981`, `#EF4444`), 16:9 format

| Asset ID | Asset Name | Used In | Type | Visual Spec | Animation Requirement |
|---|---|---|---|---|---|
| `AST-M9-001` | MSA Before SPC Hero | `M9L1-S01` | Animated SVG | Micrometer feeding noisy points onto Control Chart with MSA Shield gate | Magnifier scan & pulse |
| `AST-M9-002` | Observed Variance Stack Equation | `M9L1-S02` | Animated SVG | $\sigma^2_{\text{obs}} = \sigma^2_{\text{part}} + \sigma^2_{\text{gage}}$ stacked bars + 3 impact cards | Bar stack & expand |
| `AST-M9-003` | Cpk Distortion & 10-to-1 Rule | `M9L1-S03` | Animated SVG | `8%` vs `70%` GRR Cpk shrinkage + Vernier `0.05` (X) vs Micrometer `0.001` (Check) | Gauge shrink & check |
| `AST-M9-004` | Repeatability (`EV`) vs Reproducibility (`AV`) | `M9L2-S01` | Animated SVG | Bullseye targets contrasting tight/loose `EV` vs shifted appraiser means `AV` | Target dot scatter |
| `AST-M9-005` | Standard `10 × 3 × 3` Blind Study Matrix | `M9L2-S02` | SVG Diagram | `10 Parts × 3 Appraisers × 3 Trials = 90` randomized blind cells | Cell randomize pulse |
| `AST-M9-006` | Gage R&R Formulas (`%GRR, %Tol, ndc`) | `M9L2-S03` | SVG Infographic | Clean formula cards for `EV, AV, GRR, PV, TV, %GRR, %Tol, ndc` | Formula highlight |
| `AST-M9-007` | AIAG MSA Acceptance Traffic Light | `M9L2-S04` | SVG Table | `< 10%` Green, `10–30%` Amber, `> 30%` Red + `ndc >= 5` badge | Light glow |
| `AST-M9-008` | `EV > AV` vs `AV > EV` Fix Router | `M9L2-S05` | SVG Diagram | Bar comparison routing `EV` to Gage Repair and `AV` to Ratchet Stop + WI | Route arrow glow |
| `AST-M9-009` | Accuracy vs Precision 4-Target Matrix | `M9L3-S01` | SVG Diagram | 4 bullseyes: Precision (`Gage R&R`) vs Accuracy (`Bias, Linearity, Stability`) | Quadrant highlight |
| `AST-M9-010` | Bias Offset From Master Block | `M9L3-S02` | Animated SVG | Distribution shifted off Master Reference line snapping back on Zero/Calibrate | Curve snap |
| `AST-M9-011` | Linearity 5-Point Operating Range | `M9L3-S03` | Animated SVG | Flat zero-slope line vs steep tilted Bias slope across 5 master sizes | Line draw |
| `AST-M9-012` | Stability `X̄-R` Control Chart | `M9L3-S04` | Animated SVG | Daily Master Check Standard plotting steadily then drifting OOC | Drift & recall alert |
| `AST-M9-013` | 6-Panel Gage R&R Report Guide | `M9L4-S01` | Animated SVG | Minitab-style 6-panel report spotlighting `R` in-control & `X̄` out-of-control | Magnifier sweep |
| `AST-M9-014` | Pin OD Workshop Brief (`90` Readings) | `M9L4-S02` | SVG Infographic | Pin OD `12.000 ± 0.100 mm` preview highlighting Appraiser A, B, C | Row highlight |
| `AST-M9-015` | Workshop Before vs After Gage R&R | `M9L4-S04` | Animated SVG | Red `51.25%` (`ndc 2`) bars shrinking to green `< 8%` (`ndc >= 15`) | Bar shrink & PASS stamp |
| `AST-M9-016` | Attribute MSA (`Kappa >= 0.75`) Scale | `M9L4-S05` | SVG Diagram | Kappa meter from `< 0.40 Poor` to `>= 0.75 Good` + Boundary Sample card | Meter sweep |
| `AST-M9-017` | Module 9 to 10 Capstone Bridge | `M9L4-S06` | Animated SVG | MSA Shield locking onto Control Chart illuminating 4 AIAG Industrial Cases | Shield lock |
| `AST-M9-018` | AIAG MSA Quick Reference Card | `M9L4-S08` | SVG Graphic | Compact pre-exam checklist of `<10%`, `ndc >= 5`, `10-to-1`, `Kappa >= 0.75` | Checkmark reveal |
| `AST-M9-019` | `X̄-R` vs `ANOVA` Calculation Comparison | `M9L2-S07` | SVG Table | Comparison card highlighting `Part × Appraiser Interaction` detection in `ANOVA` | Row highlight |
| `AST-M9-020` | Non-Destructive vs Destructive MSA | `M9L2-S08` | Animated SVG | Crossed `10×3×3` reusable part vs Nested sequential homogeneous batch for pull test | Split flow animation |
| `AST-M9-021` | `Appraiser = 1` & Automated Gage MSA | `M9L2-S09` | SVG Diagram | Single operator Type 1 (`50`x Master) & CMM/Auto Tester `EV` + Load check | Branch glow |
