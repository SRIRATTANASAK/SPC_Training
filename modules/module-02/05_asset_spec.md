# Module 2 Asset Production Specification (Web & Animation Ready)

**Module:** Probability and Distribution  
**Style Guide:** Consistent blue-slate-amber industrial theme (`#0F172A`, `#1E40AF`, `#0284C7`, `#F59E0B`), 16:9 format  
**Note:** Statistical animations (`AST-M2-002..019`) are best built as interactive SVG/Canvas components so parameters animate smoothly at 60fps.

| Asset ID | Asset Name | Used In | Type | Visual Spec | Animation Requirement |
|---|---|---|---|---|---|
| `AST-M2-001` | Variation to Probability Hero | `M2L1-S01` | Photo/SVG | CNC bore inspection station morphing into probability density curve, no text | Smooth bars-to-curve morph |
| `AST-M2-002` | Common Cause Wave | `M2L1-S02` | Animated SVG | Stable run chart oscillating uniformly inside control zone | Steady gentle oscillation |
| `AST-M2-003` | Special Cause vs Tampering | `M2L1-S03` | Animated SVG | Split chart: spike/shift signal vs erratic tampering wave | Spike pulse + wave widening |
| `AST-M2-004` | Deming Funnel Target | `M2L1-S04` | Interactive Canvas | Overhead target bullseye comparing Rule 1 tight cluster vs Rule 2 wide scatter | Marble drop scatter animation |
| `AST-M2-005` | Series Line FPY Flow | `M2L2-S01` | Animated SVG | 3 assembly stations showing green good yield shrinking (`95% → 90.25% → 85.74%`) | Flow bar depletion across stations |
| `AST-M2-006` | Inspection Risk 2×2 Matrix | `M2L2-S02` | Interactive SVG | Quadrant diagram: True Good/Defect vs Call Pass/Fail highlighting False Alarm & Escape | Quadrant pulse on hover/click |
| `AST-M2-007` | Why Sampling Cards | `M2L2-S03` | SVG Icon Set | Destructive pull-test icon, high-speed conveyor icon, tired eye 100% inspection icon | Sequential 3-card pop |
| `AST-M2-008` | Population vs Sample | `M2L2-S04` | Animated SVG | Lot bin `N` (`μ, σ`) extracting random `n` (`x̄, s`) vs biased top-layer grab | Dot extraction + bias highlight |
| `AST-M2-009` | Distribution Roadmap | `M2L3-S01` | Animated SVG | Tree branching into Normal (Variable), Binomial (Defective), Poisson (Defect) → SPC | Branch glow left-to-right |
| `AST-M2-010` | Normal Bell Curve | `M2L3-S02` | Interactive SVG | Bell curve with `±1σ/±2σ/±3σ` shading and `μ` / `σ` handles | Curve shift & stretch |
| `AST-M2-011` | Z-Score Shaded Tail | `M2L3-S03` | Interactive SVG | Normal curve with `USL = 20.10` cutoff and red shaded tail (`2.28%`) | Dynamic tail fill animation |
| `AST-M2-012` | Normality Q-Q Comparison | `M2L3-S04` | SVG Chart | Side-by-side Q-Q plot: Normal straight line (`p=0.42`) vs Skewed curve (`p<0.005`) | Sequential point plotting |
| `AST-M2-013` | Binomial PMF Chart | `M2L3-S05` | Animated SVG | Discrete probability bars (`k=0..5`) for `n=20, p=0.05` highlighting `P(0)=35.85%` | Bars rise sequentially |
| `AST-M2-014` | Poisson Unit Defect Grid | `M2L3-S06` | Animated SVG | PCB/panel inspection grid with random defect dots + `λ=0.5` PMF bars | Dot drop + bar build |
| `AST-M2-015` | Subgroup Sampling Flow | `M2L4-S01` | Animated SVG | Groups of 5 parts averaging into $\bar{X}$ bars on secondary histogram | Drop-and-average loop |
| `AST-M2-016` | CLT Shape Morph | `M2L4-S02` | Animated SVG | Skewed, Uniform, and Bimodal populations all producing Normal $\bar{X}$ curves | Smooth shape morph |
| `AST-M2-017` | Individual vs Xbar Spread | `M2L4-S03` | Interactive SVG | Wide individual $X$ curve crossing USL/LSL vs narrow $\bar{X}$ curve inside limits | Overlay toggle animation |
| `AST-M2-018` | Subgroup Sensitivity | `M2L4-S04` | SVG Chart | `1σ` shift detected faster by `n=5` curve (`2.24 SE`) than `n=1` curve | Curve separation animation |
| `AST-M2-019` | Workshop SG-09 Highlight | `M2L4-S07` | SVG Dashboard | Subgroup mean chart flagging `SG-09` (`20.094 mm`) + Baseline vs All comparison | Red callout highlight |
