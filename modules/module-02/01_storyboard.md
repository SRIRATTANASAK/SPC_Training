# Module 2 Production Storyboard (Developer & Web/LMS Ready)

**Module:** Module 2 — Probability and Distribution  
**Total Lessons:** 4 Lessons | **Total Screens:** 28 Screens (`M2L1-S01` .. `M2L4-S08`)  
**Estimated Duration:** ~30–35 minutes (including interactive labs & CTQ workshop)  
**Delivery Target:** Web Interactive Training (MDX/React + Thai Audio Sync) & SCORM 2004 Compatible  

---

# LESSON M2-L1: Concept of Variation (`2.1`)

## Screen M2L1-S01 — Welcome & Variation-to-Probability Bridge
- **Learning Objective:** เชื่อมโยงความเข้าใจเรื่องความแปรปรวนจาก Module 1 ไปสู่การประเมินความน่าจะเป็น
- **Duration:** 25s
- **Layout:** Hero Split (Left Animated Bell/Parts 60% | Right Objectives 40%)
- **Asset ID:** `AST-M2-001`
- **On Screen Text:** `VARIATION → PROBABILITY → SPC` — "รู้ระดับความแปรปรวน = ทำนายความเสี่ยงของเสียได้ล่วงหน้า"
- **Voice Over Script Ref:** `AUD-M2L1-S01`
- **Motion Specification:** Morphing transition from individual shaft bars into smooth probability curve.
- **Trigger Logic:** Unlock Next on audio complete or review toggle.
- **Accessibility Notes:** TH/EN captions + keyboard navigation.
- **Developer Notes:** Preload `AST-M2-002`.

## Screen M2L1-S02 — Common Cause Variation
- **Learning Objective:** อธิบายลักษณะและแนวทางจัดการ Common Cause Variation (System Noise)
- **Duration:** 35s
- **Layout:** Left Stable Run Chart + Right Cause Cards
- **Asset ID:** `AST-M2-002`
- **On Screen Text:** `Common Cause Variation` — "เสียงรบกวนปกติของระบบ: คาดเดาได้ (Stable) — ต้องแก้ที่ระบบ ไม่ใช่ปรับเครื่องหน้างาน"
- **Voice Over Script Ref:** `AUD-M2L1-S02`
- **Motion Specification:** Steady oscillating wave inside uniform band; pulsing 5M1E micro-sources.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Alt-text describing steady pattern.
- **Developer Notes:** Emphasize "Management/Engineering owns system improvement."

## Screen M2L1-S03 — Special Cause Variation & Tampering Trap
- **Learning Objective:** ระบุ Special Cause Variation (Assignable Signal) และเข้าใจอันตรายของ Tampering
- **Duration:** 40s
- **Layout:** Left Split Chart (Signal Spike vs Tampering Chaos) + Right Comparison Table
- **Asset ID:** `AST-M2-003`
- **On Screen Text:** `Special Cause Variation` — "สัญญาณผิดปกติที่มีสาเหตุชัด (Unstable) + คำเตือนห้าม Tampering!"
- **Voice Over Script Ref:** `AUD-M2L1-S03`
- **Motion Specification:** Red spike & upward shift pulse on chart; side-by-side over-adjustment wave widens.
- **Trigger Logic:** Toggle "See Tampering Effect" button.
- **Accessibility Notes:** Shape markers (diamond/triangle) paired with red highlight.
- **Developer Notes:** Contrast table `Common vs Special`.

## Screen M2L1-S04 — Interactive Classifier & Deming Funnel Lab
- **Learning Objective:** จำแนกสถานการณ์ Common vs Special Cause และสังเกตผลของ Funnel Tampering
- **Duration:** 60s
- **Layout:** Top 8-Item Quick Classifier | Bottom Deming Funnel Simulator (`INT-M2-L1-01`)
- **Asset ID:** `AST-M2-004` | **Interactive ID:** `INT-M2-L1-01`
- **On Screen Text:** "ทดสอบแยก Common vs Special Cause (8 สถานการณ์) และกดปล่อยลูกแก้ว Deming Funnel"
- **Voice Over Script Ref:** `AUD-M2L1-S04`
- **Motion Specification:** Animated marble drop scatter plot comparing Rule 1 (No Adjustment) vs Rule 2 (Compensate last error).
- **Trigger Logic:** Score `>= 6/8` on classifier + run both Funnel rules (`+10 pts`).
- **Accessibility Notes:** Keyboard-selectable cards & numeric dispersion readout.
- **Developer Notes:** Show variance ratio `Rule 2 ≈ 2× Rule 1`.

## Screen M2L1-S05 — Lesson 1 Knowledge Check (`KC-M2-L1`)
- **Learning Objective:** ทดสอบความเข้าใจ Common vs Special Cause (`M2-Q001`, `M2-Q005`)
- **Duration:** 30s
- **Layout:** Centered Quiz Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 1 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M2L1-S05`
- **Motion Specification:** Card flip feedback.
- **Trigger Logic:** Answer both questions to unlock Lesson 2.
- **Accessibility Notes:** Radio group keyboard support.
- **Developer Notes:** Log `var_lesson_scores.L1`.

---

# LESSON M2-L2: Probability Basics & Sampling (`2.2`)

## Screen M2L2-S01 — Probability Concept & First Pass Yield (FPY)
- **Learning Objective:** คำนวณความน่าจะเป็นพื้นฐานและ Rolled FPY ของสายการผลิตหลายสถานี
- **Duration:** 40s
- **Layout:** Left 3-Station Line Flow + Right Formula & FPY Multiplier
- **Asset ID:** `AST-M2-005`
- **On Screen Text:** `P(A) ∈ [0, 1]` | `Series FPY = Y₁ × Y₂ × Y₃` — "สถานีละ 95% 3 สถานี = FPY เหลือเพียง 85.7%!"
- **Voice Over Script Ref:** `AUD-M2L2-S01`
- **Motion Specification:** Yield flow shrinks sequentially across stations `1 → 2 → 3`.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear equation + station table.
- **Developer Notes:** Real factory link to RTY.

## Screen M2L2-S02 — Conditional Probability & Inspection Risk
- **Learning Objective:** เข้าใจความน่าจะเป็นแบบมีเงื่อนไข $P(B \mid A)$ และปูพื้นฐานความเสี่ยง False Alarm vs Escape
- **Duration:** 35s
- **Layout:** 2×2 Confusion Matrix Preview (True State vs Inspection Call)
- **Asset ID:** `AST-M2-006`
- **On Screen Text:** `Conditional Probability & Inspection Risk` — "False Alarm (ทิ้งของดี) vs Escape (หลุดของเสีย)"
- **Voice Over Script Ref:** `AUD-M2L2-S02`
- **Motion Specification:** Matrix quadrants highlight sequentially.
- **Trigger Logic:** Click quadrants to inspect definitions.
- **Accessibility Notes:** Pattern + icon indicators.
- **Developer Notes:** Bridge to Module 3 ($\alpha/\beta$) and Module 9 (MSA).

## Screen M2L2-S03 — Why Sampling?
- **Learning Objective:** อธิบาย 3 เหตุผลที่โรงงานต้องใช้ Sampling แทนการตรวจ 100%
- **Duration:** 30s
- **Layout:** 3 Icon Cards (Destructive Test, Speed/Cost, Fatigue ~80–85% detection)
- **Asset ID:** `AST-M2-007`
- **On Screen Text:** "ทำไมต้องสุ่มตัวอย่าง? — ทดสอบทำลายชิ้นงาน, ต้นทุน/เวลา, และความล้าของการตรวจ 100%"
- **Voice Over Script Ref:** `AUD-M2L2-S03`
- **Motion Specification:** Sequential 3-card reveal.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Captions + semantic headings.
- **Developer Notes:** Mention visual inspection fatigue limit.

## Screen M2L2-S04 — Population vs Sample
- **Learning Objective:** แยก Population Parameters ($\mu, \sigma, N, p$) ออกจาก Sample Statistics ($\bar{x}, s, n, \hat{p}$) และ Sampling Error vs Bias
- **Duration:** 45s
- **Layout:** Left Lot Box (`N`) → Sample Basket (`n`) Animation + Right Symbol Comparison Table
- **Asset ID:** `AST-M2-008`
- **On Screen Text:** `Population (μ, σ, N, p)` vs `Sample (x̄, s, n, p̂)` — "Sampling Error ลดได้ด้วย n แต่ Bias ต้องแก้ที่วิธีสุ่ม!"
- **Voice Over Script Ref:** `AUD-M2L2-S04`
- **Motion Specification:** Random dots extracted from lot into sample box; bias toggle shows sampling only from top layer.
- **Trigger Logic:** Toggle "Random Sampling" vs "Convenience Bias".
- **Accessibility Notes:** Screen-reader symbol glossary.
- **Developer Notes:** Crucial symbol convention for Modules 3–6.

## Screen M2L2-S05 — Interactive FPY & Random Sampling Simulator
- **Learning Objective:** ทดลองสุ่มตัวอย่างจากประชากรจำลองเพื่อเห็น Sampling Error ลดลงเมื่อ `n` เพิ่ม
- **Duration:** 50s
- **Layout:** Top FPY Calculator | Bottom Population `N=1000` Sampler (`INT-M2-L2-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M2-L2-01`
- **On Screen Text:** "ลองสุ่มตัวอย่าง n = 5, 20, 50 จากประชากร μ = 20.00 mm แล้วดูระยะห่าง |x̄ − μ|"
- **Voice Over Script Ref:** `AUD-M2L2-S05`
- **Motion Specification:** Animated dot draws + live error bar shrinking.
- **Trigger Logic:** Run at least 2 sample sizes (`+10 pts`).
- **Accessibility Notes:** Live numeric readout table.
- **Developer Notes:** Generates reproducible seeded samples.

## Screen M2L2-S06 — Lesson 2 Knowledge Check (`KC-M2-L2`)
- **Learning Objective:** ทดสอบความเข้าใจ Probability, FPY, และ Population vs Sample (`M2-Q012`, `M2-Q018`)
- **Duration:** 30s
- **Layout:** Centered 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 2 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M2L2-S06`
- **Motion Specification:** Feedback reveal.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 3.
- **Accessibility Notes:** Keyboard radio controls.
- **Developer Notes:** Update module progress to 40%.

---

# LESSON M2-L3: Probability Distributions (`2.3`)

## Screen M2L3-S01 — Continuous vs Discrete Distributions Overview
- **Learning Objective:** จับคู่ประเภทข้อมูลกับ Normal, Binomial และ Poisson พร้อมเห็นปลายทางสู่ Control Chart
- **Duration:** 30s
- **Layout:** 3-Branch Decision Map
- **Asset ID:** `AST-M2-009`
- **On Screen Text:** "Normal (วัดค่าต่อเนื่อง) | Binomial (นับชิ้นเสีย) | Poisson (นับจำนวนจุดเสีย)"
- **Voice Over Script Ref:** `AUD-M2L3-S01`
- **Motion Specification:** Animated flow branches lighting up.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Accessible comparison table.
- **Developer Notes:** Directly connects to Module 6 chart matrix.

## Screen M2L3-S02 — Normal Distribution
- **Learning Objective:** เข้าใจคุณสมบัติระฆังคว่ำ, พารามิเตอร์ $\mu, \sigma$ และกฎ 68–95–99.7%
- **Duration:** 40s
- **Layout:** Interactive Bell Curve with Mean/SD Sliders
- **Asset ID:** `AST-M2-010`
- **On Screen Text:** `Normal Distribution` — "Mean = Median = Mode | μ กำหนดตำแหน่ง, σ กำหนดความกว้าง | ±3σ = 99.73%"
- **Voice Over Script Ref:** `AUD-M2L3-S02`
- **Motion Specification:** Curve shifts horizontally with $\mu$ and flattens/sharpens with $\sigma$.
- **Trigger Logic:** Interactive preset tabs (`Shifted Mean` vs `Widened Sigma`).
- **Accessibility Notes:** Captions + numeric percentage badges.
- **Developer Notes:** Show `6 sigma = 0.002 PPM` reference.

## Screen M2L3-S03 — Z-Score Standardization & Defect Prediction
- **Learning Objective:** คำนวณค่า Z-Score เพื่อพยากรณ์สัดส่วนของเสีย (% OOS / PPM) เทียบกับ Spec Limit
- **Duration:** 50s
- **Layout:** Left Formula & Worked Bore Example | Right Interactive Z-Score Calculator (`INT-M2-L3-01`)
- **Asset ID:** `AST-M2-011` | **Interactive ID:** `INT-M2-L3-01`
- **On Screen Text:** `Z = (X − μ) / σ` — "ตัวอย่าง: μ=20.04, σ=0.03, USL=20.10 → Z=+2.00 → เสี่ยงหลุด Spec 2.28% (22,750 PPM)"
- **Voice Over Script Ref:** `AUD-M2L3-S03`
- **Motion Specification:** Shaded tail area above USL highlights in amber/red dynamically.
- **Trigger Logic:** Compute Z-score for at least 1 custom input (`+10 pts`).
- **Accessibility Notes:** Screen-reader announces Z and % OOS.
- **Developer Notes:** Uses standard normal CDF (`erf()`).

## Screen M2L3-S04 — Normality Check & Non-Normal Reality
- **Learning Objective:** ตรวจสอบ Normality ด้วย Probability Plot & Anderson-Darling `p-value >= 0.05` และรู้จักรูปร่าง Non-Normal
- **Duration:** 40s
- **Layout:** Split Screen (Left Normal Q-Q Plot `p=0.42` vs Right Skewed Tool Life `p<0.005`)
- **Asset ID:** `AST-M2-012`
- **On Screen Text:** `Normality Check: p-value ≥ 0.05` — "ถ้าข้อมูลเบ้ (เช่น Flatness, Tool Life) ห้ามใช้สูตร Z/Cpk แบบ Normal ตรงๆ!"
- **Voice Over Script Ref:** `AUD-M2L3-S04`
- **Motion Specification:** Straight-line fit vs curved Q-Q plot points reveal.
- **Trigger Logic:** Toggle between Normal Diameter vs Skewed Flatness dataset.
- **Accessibility Notes:** High-contrast pass/fail p-value pill.
- **Developer Notes:** Crucial engineering addition preventing misuse in Module 4.

## Screen M2L3-S05 — Binomial Distribution
- **Learning Objective:** คำนวณและตีความ Binomial Distribution (Pass/Fail) เพื่อปูทางสู่ P/NP Chart
- **Duration:** 45s
- **Layout:** Formula + 4 Assumptions Checklist + Sample `n=20, p=5%` Bar Chart
- **Asset ID:** `AST-M2-013`
- **On Screen Text:** `Binomial: μ = np, σ = √(np(1−p))` — "ตรวจ 20 ชิ้นจากล็อตเสีย 5%: โอกาสไม่เจอของเสียเลย (X=0) สูงถึง 35.85%!"
- **Voice Over Script Ref:** `AUD-M2L3-S05`
- **Motion Specification:** Probability bars animate for `k = 0, 1, 2, 3, ...` highlighting `k = 0`.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Tabular PMF readout.
- **Developer Notes:** Explains why zero-defect in small sample doesn't prove zero defects in lot.

## Screen M2L3-S06 — Poisson Distribution
- **Learning Objective:** คำนวณและตีความ Poisson Distribution (Defect Count ต่อหน่วย) เพื่อปูทางสู่ C/U Chart
- **Duration:** 45s
- **Layout:** Formula + PCB/Surface Defect Unit Visual + `λ = 0.5` Bar Chart
- **Asset ID:** `AST-M2-014`
- **On Screen Text:** `Poisson: μ = λ, σ = √λ` — "นับจำนวนตำหนิต่อหน่วย (0, 1, 2... ไม่จำกัดเพดานบน) | ตัวอย่าง λ=0.5 → P(0)=60.65%"
- **Voice Over Script Ref:** `AUD-M2L3-S06`
- **Motion Specification:** Random defect dots drop onto unit area grid; PMF bars build.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear distinction box: `Binomial (Defective)` vs `Poisson (Defect)`.
- **Developer Notes:** Reinforces Defect vs Defective difference.

## Screen M2L3-S07 — Interactive Distribution Explorer
- **Learning Objective:** ทดลองปรับพารามิเตอร์ของ Normal, Binomial และ Poisson เพื่อเข้าใจพฤติกรรมกราฟ
- **Duration:** 60s
- **Layout:** Tabbed Interactive Playground (`INT-M2-L3-02`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M2-L3-02`
- **On Screen Text:** "เลือก Normal / Binomial / Poisson แล้วปรับค่า μ, σ, n, p, λ เพื่อสังเกตการเปลี่ยนแปลงรูปทรงกราฟ"
- **Voice Over Script Ref:** `AUD-M2L3-S07`
- **Motion Specification:** Live SVG/Canvas chart morphing.
- **Trigger Logic:** Explore all 3 tabs (`+5 pts`).
- **Accessibility Notes:** Keyboard slider controls.
- **Developer Notes:** Notice Binomial approaches Normal when `np ≥ 5` and `n(1-p) ≥ 5`.

## Screen M2L3-S08 — Distribution Selection Matrix
- **Learning Objective:** เลือก Distribution ให้ตรงกับสถานการณ์จริงในโรงงาน 6 ข้อ
- **Duration:** 60s
- **Layout:** 6-Scenario Interactive Match Matrix (`INT-M2-L3-03`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M2-L3-03`
- **On Screen Text:** "แบบฝึกหัด: ข้อมูลหน้างาน 6 กรณีนี้ ใช้ Distribution แบบใด?"
- **Voice Over Script Ref:** `AUD-M2L3-S08`
- **Motion Specification:** Instant card check feedback.
- **Trigger Logic:** Passing `>= 5/6` (`+10 pts`).
- **Accessibility Notes:** Dropdown/radio keyboard options.
- **Developer Notes:** Includes Skewed/Non-normal trap item.

## Screen M2L3-S09 — Lesson 3 Knowledge Check (`KC-M2-L3`)
- **Learning Objective:** ทดสอบการคำนวณและเลือกใช้ Probability Distributions (`M2-Q025`, `M2-Q033`, `M2-Q040`)
- **Duration:** 45s
- **Layout:** 3-Question Assessment Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 3 (3 ข้อ)"
- **Voice Over Script Ref:** `AUD-M2L3-S09`
- **Motion Specification:** Progress bar per question.
- **Trigger Logic:** Complete 3 questions to unlock Lesson 4.
- **Accessibility Notes:** Keyboard accessible.
- **Developer Notes:** Update module progress to 72%.

---

# LESSON M2-L4: Central Limit Theorem & CTQ Workshop (`2.4`)

## Screen M2L4-S01 — Sampling Distribution of the Mean ($\bar{X}$)
- **Learning Objective:** เข้าใจแนวคิดการสร้างกราฟการแจกแจงของค่าเฉลี่ยกลุ่มตัวอย่าง ($\bar{X}$)
- **Duration:** 35s
- **Layout:** Left Raw Samples Grouping (`n=5`) → Right Histogram of $\bar{X}$
- **Asset ID:** `AST-M2-015`
- **On Screen Text:** `Sampling Distribution of X̄` — "สุ่มเก็บกลุ่มละ 5 ชิ้น หาค่าเฉลี่ย X̄ แล้วนำค่า X̄ มาพล็อตเป็นกราฟใหม่"
- **Voice Over Script Ref:** `AUD-M2L4-S01`
- **Motion Specification:** 5 dots drop into subgroup basket → computes mean → drops bar onto $\bar{X}$ histogram.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Step-by-step captioning.
- **Developer Notes:** Visualizes how Xbar differs from individual X.

## Screen M2L4-S02 — Central Limit Theorem (CLT)
- **Learning Objective:** เข้าใจใจความของ CLT ที่เปลี่ยนประชากรทุกรูปแบบให้ค่าเฉลี่ยเข้าใกล้ Normal
- **Duration:** 40s
- **Layout:** 3 Population Shapes (Skewed / Uniform / Bimodal) → Normal $\bar{X}$ Curve
- **Asset ID:** `AST-M2-016`
- **On Screen Text:** `Central Limit Theorem (CLT)` — "ไม่ว่าข้อมูลดิบจะเบ้หรือแบนราบ การแจกแจงของค่าเฉลี่ย X̄ จะลู่เข้าสู่ Normal เสมอ!"
- **Voice Over Script Ref:** `AUD-M2L4-S02`
- **Motion Specification:** Morphing skewed population into crisp symmetric bell curve as `n` increases.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Shape descriptions in alt text.
- **Developer Notes:** Core theoretical justification for Xbar-R charts.

## Screen M2L4-S03 — Standard Error ($\sigma_{\bar{x}} = \sigma / \sqrt{n}$) & The Spec Trap
- **Learning Objective:** คำนวณ Standard Error และเข้าใจเหตุผลที่ **ห้ามเทียบค่าเฉลี่ย $\bar{X}$ กับ USL/LSL ของชิ้นงานเดี่ยว**
- **Duration:** 45s
- **Layout:** Nested Curves (Wide Individual $\sigma$ vs Narrow Mean $\sigma/\sqrt{n}$) + Warning Callout
- **Asset ID:** `AST-M2-017`
- **On Screen Text:** `σ_x̄ = σ / √n` — "คำเตือน: กราฟ X̄ แคบกว่าชิ้นงานจริง √n เท่า! ห้ามนำจุด X̄ ไปเทียบกับ USL/LSL เด็ดขาด"
- **Voice Over Script Ref:** `AUD-M2L4-S03`
- **Motion Specification:** Overlay narrow blue $\bar{X}$ curve inside wide gray Individual $X$ curve showing tails crossing USL.
- **Trigger Logic:** Interactive toggle `n = 1` vs `n = 5` vs `n = 9`.
- **Accessibility Notes:** Distinct dashed vs solid curve lines.
- **Developer Notes:** Classic SPC audit failure point.

## Screen M2L4-S04 — Why CLT Is the Backbone of SPC
- **Learning Objective:** เชื่อมโยง CLT สู่การเลือก Subgroup Size `n = 4` หรือ `5` ในโรงงานจริง
- **Duration:** 35s
- **Layout:** 3 Pillars connecting CLT to Module 5 Control Charts
- **Asset ID:** `AST-M2-018`
- **On Screen Text:** "ทำไมโรงงานนิยมเก็บ Subgroup n = 5? — CLT ทำงานเร็ว, จับ Mean Shift ไวขึ้น √5 เท่า, และคำนวณง่าย"
- **Voice Over Script Ref:** `AUD-M2L4-S04`
- **Motion Specification:** Highlight sensitivity gain (`1σ shift` vs `2.24 SE shift`).
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Summary cards.
- **Developer Notes:** Sets up Module 5 & 6 seamlessly.

## Screen M2L4-S05 — Interactive Live CLT Simulator
- **Learning Objective:** ทดลองสุ่มซ้ำ 500 ครั้งเพื่อเห็น CLT ทำงานจริงกับตาบนกราฟ
- **Duration:** 60s
- **Layout:** Control Bar (Population Shape + Sample Size `n`) | Dual Side-by-Side Histograms (`INT-M2-L4-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M2-L4-01`
- **On Screen Text:** "ลองเลือกประชากรที่เบ้ (Skewed) แล้วปรับ n = 1 → 5 → 15 → 30 ดูกราฟ X̄ แปลงร่างเป็น Normal!"
- **Voice Over Script Ref:** `AUD-M2L4-S05`
- **Motion Specification:** Animated Monte Carlo sampling burst (500 subgroup draws).
- **Trigger Logic:** Run simulation with at least 2 values of `n` (`+10 pts`).
- **Accessibility Notes:** Live readout of theoretical vs simulated $\sigma_{\bar{x}}$.
- **Developer Notes:** Pure client-side JS Monte Carlo engine.

## Screen M2L4-S06 — Workshop: วิเคราะห์ข้อมูล CTQ ชิ้นงานจริง
- **Learning Objective:** วิเคราะห์ข้อมูล CTQ `Bore_Diameter_mm` 50 ชิ้น (`workshop_m2_ctq_parts.csv`) ด้วย Probability, Z-score และ CLT
- **Duration:** 120s
- **Layout:** Interactive Workshop Lab (`INT-M2-L4-02`) + CSV Download + 4 Diagnostic Prompts
- **Asset ID:** N/A | **Interactive ID:** `INT-M2-L4-02`
- **On Screen Text:** "Workshop: ข้อมูล CTQ 50 ชิ้น (10 Subgroups × 5 ชิ้น | Spec 20.00 ± 0.10 mm) — คำนวณ Z-score, หา Special Cause และเทียบ σ vs σ/√5"
- **Voice Over Script Ref:** `AUD-M2L4-S06`
- **Motion Specification:** Subgroup plot highlights `SG-09` above target; dual histogram compares All `n=50` vs Baseline `n=45`.
- **Trigger Logic:** Answer 4 diagnostic questions (`>= 3/4` to pass workshop).
- **Accessibility Notes:** Full accessible data summary table.
- **Developer Notes:** Exact numbers verified against `workshop_m2_ctq_parts.csv`.

## Screen M2L4-S07 — Workshop Solution & Engineering Interpretation
- **Learning Objective:** สรุปคำตอบ Workshop และแยกผลกระทบของ Special Cause `SG-09` ต่อ Z-score และ Standard Error
- **Duration:** 40s
- **Layout:** Left Before/After Comparison Table (`All 50` vs `Baseline 45`) | Right Action Plan
- **Asset ID:** `AST-M2-019`
- **On Screen Text:** "เฉลย Workshop: เมื่อแยก SG-09 ออก กระบวนการนิ่งมาก (Mean 20.0009, SD 0.0220, Z_USL = 4.50, σ_x̄ = 0.0099)"
- **Voice Over Script Ref:** `AUD-M2L4-S07`
- **Motion Specification:** Highlight `SG-09` removal transforming predicted OOS from `0.68%` to `<0.001%`.
- **Trigger Logic:** Review solution to unlock Final Exam.
- **Accessibility Notes:** Semantic comparison table.
- **Developer Notes:** Bridges directly to Module 3 (Sampling/Hypothesis) & Module 4 (Cp/Cpk).

## Screen M2L4-S08 — Module 2 Final Assessment (`EXAM-M2`)
- **Learning Objective:** วัดผลสัมฤทธิ์ Module 2 (เกณฑ์ผ่าน 80% = 16/20 ข้อ)
- **Duration:** 10–15 min
- **Layout:** Exam Runner (20 Randomized Questions from `M2-Q001..M2-Q060`)
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบประมวลผล Module 2 (สุ่ม 20 ข้อ จากคลัง 60 ข้อ | เกณฑ์ผ่าน 80% | ทำซ้ำได้ไม่จำกัด)"
- **Voice Over Script Ref:** `AUD-M2L4-S08`
- **Motion Specification:** Progress ring & lesson-level breakdown chart on completion.
- **Trigger Logic:** Stratify `3 L1 + 5 L2 + 7 L3 + 5 L4 = 20 Qs`; Pass `>= 80%` unlocks Module 3.
- **Accessibility Notes:** Untimed accessible quiz runner.
- **Developer Notes:** Store score in `var_exam_score`.
