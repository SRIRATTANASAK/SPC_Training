# Module 4 Production Storyboard (Developer & Web/LMS Ready)

**Module:** Module 4 — Process Variation and Capability (VOP/VOC, Cp/Cpk/Pp/Ppk, AIAG/VDA & JEDEC Standard)  
**Total Lessons:** 4 Lessons | **Total Screens:** 27 Screens (`M4L1-S01` .. `M4L4-S08`)  
**Estimated Duration:** ~35 minutes (including interactive capability labs & workshop)  
**Delivery Target:** Web Interactive Training (MDX/React + Thai Audio Sync) & SCORM 2004 Compatible  

---

# LESSON M4-L1: Understanding Process Variation — VOP vs VOC (`4.1`)

## Screen M4L1-S01 — Welcome & Capability Bridge
- **Learning Objective:** เข้าใจว่ากระบวนการที่เสถียร (Stable) ไม่จำเป็นต้องได้ตามสเปกลูกค้า (Capable) เสมอไป
- **Duration:** 25s
- **Layout:** Hero Split (Left Bell Curve vs Spec Walls 60% | Right Objectives 40%)
- **Asset ID:** `AST-M4-001`
- **On Screen Text:** `STABLE ≠ CAPABLE` — "นิ่งไม่ได้แปลว่าเก่งพอ! ต้องเทียบ Voice of Process กับ Voice of Customer"
- **Voice Over Script Ref:** `AUD-M4L1-S01`
- **Motion Specification:** Stable tight curve sits off-center crossing USL wall.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** TH/EN captions + keyboard navigation.
- **Developer Notes:** Preload `AST-M4-002`.

## Screen M4L1-S02 — Voice of Process (VOP)
- **Learning Objective:** นิยาม Voice of Process (`μ ± 3σ = 6σ`) ในฐานะสมรรถนะจริงของเครื่องจักร
- **Duration:** 30s
- **Layout:** Left 5M1E Machine Output (`AST-M4-002`) | Right `6σ` Natural Spread Card
- **Asset ID:** `AST-M4-002`
- **On Screen Text:** `Voice of Process (VOP)` — "สิ่งที่เครื่องจักรทำได้จริง: กว้าง 6σ (ครอบคลุม 99.73%)"
- **Voice Over Script Ref:** `AUD-M4L1-S02`
- **Motion Specification:** Span bracket `μ - 3σ` to `μ + 3σ` animates across curve.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear alt-text.
- **Developer Notes:** Contrast VOP as natural machine behavior.

## Screen M4L1-S03 — Voice of Customer (VOC)
- **Learning Objective:** นิยาม Voice of Customer (`USL, LSL, Target`) และกฎห้ามสลับ VOC กับ Control Limits
- **Duration:** 30s
- **Layout:** Left Engineering Blueprint Tolerance (`AST-M4-003`) | Right Warning Callout
- **Asset ID:** `AST-M4-003`
- **On Screen Text:** `Voice of Customer (VOC)` — "ขอบเขตที่ลูกค้ายอมรับ (USL / LSL / Target) — แยกขาดจาก Control Limit!"
- **Voice Over Script Ref:** `AUD-M4L1-S03`
- **Motion Specification:** Drawing dimension lines `9.85 — 10.00 — 10.15` highlight sequentially.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** High-contrast limit markers.
- **Developer Notes:** Sets up Module 5 Control vs Spec limit comparison.

## Screen M4L1-S04 — VOP vs VOC 4-Quadrant Matrix
- **Learning Objective:** วินิจฉัยสถานะโรงงานทั้ง 4 แบบจากความสัมพันธ์ของ Stability และ Capability
- **Duration:** 45s
- **Layout:** Interactive 2×2 Quadrant Matrix (`AST-M4-004`)
- **Asset ID:** `AST-M4-004`
- **On Screen Text:** "4 สถานะการผลิต: Ideal State | Predictable Scrap | Brink of Chaos | Firefighting"
- **Voice Over Script Ref:** `AUD-M4L1-S04`
- **Motion Specification:** Each quadrant reveals mini run-chart + histogram animation on click/narration.
- **Trigger Logic:** Click all 4 quadrants to review remedies.
- **Accessibility Notes:** Semantic HTML table + keyboard focus.
- **Developer Notes:** Emphasize "Fix Stability BEFORE Capability."

## Screen M4L1-S05 — Lesson 1 Knowledge Check (`KC-M4-L1`)
- **Learning Objective:** ทดสอบความเข้าใจ VOP vs VOC (`M4-Q001`, `M4-Q006`)
- **Duration:** 30s
- **Layout:** Centered 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 1 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M4L1-S05`
- **Motion Specification:** Card flip feedback.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 2.
- **Accessibility Notes:** Keyboard radio controls.
- **Developer Notes:** Progress 20%.

---

# LESSON M4-L2: Specification vs Process (`4.2`)

## Screen M4L2-S01 — USL, LSL & Target (Taguchi Loss Insight)
- **Learning Objective:** เข้าใจ USL, LSL, Target และแนวคิด Taguchi Loss Function (On-Target with Minimum Variance)
- **Duration:** 35s
- **Layout:** Left Tolerance Stack + Taguchi Parabola (`AST-M4-005`) | Right Explanation
- **Asset ID:** `AST-M4-005`
- **On Screen Text:** `Target ≠ Just Inside Spec` — "ยิ่งใกล้ Target ยิ่งคุณภาพดีและลด Loss (Taguchi Loss Function)"
- **Voice Over Script Ref:** `AUD-M4L2-S01`
- **Motion Specification:** Parabola loss curve draws over flat goalpost step function.
- **Trigger Logic:** Toggle "Goalpost View" vs "Taguchi Loss View".
- **Accessibility Notes:** Alt-text comparing step vs parabola.
- **Developer Notes:** Great engineering depth for automotive/semiconductor trainees.

## Screen M4L2-S02 — Bilateral (2-Sided) vs Unilateral (1-Sided) Specs
- **Learning Objective:** แยก Spec 2 ด้าน กับ Spec ด้านเดียว (`LSL only` / `USL only`) และผลต่อการคำนวณ Cp vs Cpk
- **Duration:** 40s
- **Layout:** 3-Column Visual (`2-Sided Pin Length` | `LSL-only Bond Pull` | `USL-only Flatness/Leakage`, `AST-M4-006`)
- **Asset ID:** `AST-M4-006`
- **On Screen Text:** "Spec ด้านเดียว ไม่มีค่า Cp! — ใช้เฉพาะ Cpl (เช่น Pull Force) หรือ Cpu (เช่น Flatness/Leakage)"
- **Voice Over Script Ref:** `AUD-M4L2-S02`
- **Motion Specification:** Single spec wall appears on left or right; Cp badge grays out with explanation.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear badge indicators.
- **Developer Notes:** Crucial for JEDEC electronics & assembly specs.

## Screen M4L2-S03 — Spec Limits vs Natural Spread vs Control Limits
- **Learning Objective:** แยกเส้น Spec (VOC), เส้น Natural Spread (`±3σ`), และ Control Limits (Subgroup $\bar{X}$)
- **Duration:** 35s
- **Layout:** 3-Layer Visual Comparison (`AST-M4-007`)
- **Asset ID:** `AST-M4-007`
- **On Screen Text:** "Spec Limit (ชิ้นงานเดี่ยว) vs Natural Spread (6σ รายชิ้น) vs Control Limit (Subgroup X̄)"
- **Voice Over Script Ref:** `AUD-M4L2-S03`
- **Motion Specification:** Three horizontal brackets stack vertically showing different widths.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Descriptive labels.
- **Developer Notes:** Reinforces Module 2 CLT spec-trap warning.

## Screen M4L2-S04 — Interactive VOP-Inside-VOC Spec Margin Explorer
- **Learning Objective:** ทดลองปรับ Mean และ Sigma เพื่อสังเกต `% Tolerance Used` และ Margin ถึง Spec Wall
- **Duration:** 50s
- **Layout:** Interactive Canvas + Tolerance Bar (`INT-M4-L2-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M4-L2-01`
- **On Screen Text:** "ลองปรับค่า Mean และ SD เพื่อดู % การใช้พื้นที่ Tolerance ของลูกค้า (เป้า ≤ 75% สำหรับ Cpk ≥ 1.33)"
- **Voice Over Script Ref:** `AUD-M4L2-S04`
- **Motion Specification:** Live bell curve and tolerance utilization bar resize at 60fps.
- **Trigger Logic:** Achieve `<= 75%` tolerance utilization (`+10 pts`).
- **Accessibility Notes:** Keyboard slider controls.
- **Developer Notes:** Visualizes `6σ / (USL - LSL) = 1 / Cp`.

## Screen M4L2-S05 — Lesson 2 Knowledge Check (`KC-M4-L2`)
- **Learning Objective:** ทดสอบความเข้าใจ Spec vs Process (`M4-Q013`, `M4-Q018`)
- **Duration:** 30s
- **Layout:** 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 2 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M4L2-S05`
- **Motion Specification:** Card flip feedback.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 3.
- **Accessibility Notes:** Keyboard accessible.
- **Developer Notes:** Progress 38%.

---

# LESSON M4-L3: Process Capability Indices — Cp, Cpk, Pp, Ppk (`4.3`)

## Screen M4L3-S01 — $C_p$ (Potential Capability)
- **Learning Objective:** คำนวณ $C_p$ และตระหนักถึงจุดอ่อนสำคัญที่ $C_p$ ไม่สะท้อนการเยื้องศูนย์ (Centering)
- **Duration:** 40s
- **Layout:** Left Formula + Ratio Animation (`AST-M4-008`) | Right Off-Center Lie Warning
- **Asset ID:** `AST-M4-008`
- **On Screen Text:** `Cp = (USL − LSL) / 6σ_within` — "Cp สูงแต่ Mean ชนขอบ USL = ของเสีย 50%!"
- **Voice Over Script Ref:** `AUD-M4L3-S01`
- **Motion Specification:** Narrow curve shifts onto USL wall while `Cp = 2.00` badge remains unchanged!
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Red defect area pattern.
- **Developer Notes:** Memorable "Cp can lie" demo.

## Screen M4L3-S02 — $C_{pk}$ (Actual Capability)
- **Learning Objective:** คำนวณ $C_{pk} = \min(C_{pu}, C_{pl})$ และเข้าใจคุณสมบัติ $C_{pk} \le C_p$ รวมถึงกรณี $C_{pk} < 0$
- **Duration:** 40s
- **Layout:** Formula + Asymmetric Distance Arrows (`AST-M4-009`)
- **Asset ID:** `AST-M4-009`
- **On Screen Text:** `Cpk = min(Cpu, Cpl)` — "วัดระยะจาก Mean ไปขอบ Spec ที่ใกล้ที่สุดเสมอ (ยิ่งเยื้อง Cpk ยิ่งตก)"
- **Voice Over Script Ref:** `AUD-M4L3-S02`
- **Motion Specification:** Left (`Cpl`) and right (`Cpu`) arrows highlight; shorter side flashes as `Cpk`.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear inequality badges (`Cpk <= Cp`).
- **Developer Notes:** Highlight negative `Cpk` when Mean outside Spec.

## Screen M4L3-S03 — $\hat{\sigma}_{\text{within}}$ vs $s_{\text{overall}}$
- **Learning Objective:** เข้าใจความต่างระหว่าง Within-Subgroup SD ($\bar{R}/d_2$) กับ Overall SD ($s_{\text{overall}}$)
- **Duration:** 45s
- **Layout:** Split Formula & Subgroup Variance Diagram (`AST-M4-010`)
- **Asset ID:** `AST-M4-010`
- **On Screen Text:** `σ_within = R̄ / d₂` (นิ่งภายในกลุ่ม) vs `s_overall` (รวมทุกกลุ่ม + การไหลข้ามเวลา)
- **Voice Over Script Ref:** `AUD-M4L3-S03`
- **Motion Specification:** 4 subgroups oscillating at shifting levels → narrow within-group brackets vs wide overall bracket.
- **Trigger Logic:** Toggle "Within View" vs "Overall View".
- **Accessibility Notes:** Explicit `d2` value table (`n=2..5`).
- **Developer Notes:** Clarifies the #1 source of Cp vs Pp confusion.

## Screen M4L3-S04 — $P_p$ & $P_{pk}$ and Diagnosing $C_{pk}$ vs $P_{pk}$ Gaps
- **Learning Objective:** คำนวณ $P_p, P_{pk}$ และใช้อัตราส่วน $C_{pk}$ เทียบ $P_{pk}$ วินิจฉัยต้นตอปัญหา (Shift vs Spread vs Off-center)
- **Duration:** 45s
- **Layout:** Left `Pp/Ppk` Formulas (`AST-M4-011`) | Right 3-Row Diagnostic Table
- **Asset ID:** `AST-M4-011`
- **On Screen Text:** "Cpk ≈ Ppk = เสถียร | Cpk >> Ppk = เครื่องไหลข้ามชั่วโมง (Unstable!) | Cp >> Cpk = ตั้ง Center เบี้ยว"
- **Voice Over Script Ref:** `AUD-M4L3-S04`
- **Motion Specification:** Diagnostic badges highlight matching curve shapes.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Accessible diagnostic matrix.
- **Developer Notes:** Core troubleshooting tool for QE/PE.

## Screen M4L3-S05 — Capability to PPM & Sigma Level Conversion
- **Learning Objective:** แปลงค่า $C_{pk}$ (`1.00, 1.33, 1.67, 2.00`) เป็น Yield % และ PPM Defect Rate
- **Duration:** 35s
- **Layout:** Interactive Conversion Ladder (`AST-M4-012`)
- **Asset ID:** `AST-M4-012`
- **On Screen Text:** `Cpk 1.00 = 2,700 PPM` | `1.33 = 63 PPM` | `1.67 = 0.6 PPM` | `2.00 = 0.002 PPM (3.4 PPM w/ 1.5σ shift)`
- **Voice Over Script Ref:** `AUD-M4L3-S05`
- **Motion Specification:** Ladder steps light up exponentially showing PPM shrinking 1,000× from `1.00` to `1.67`.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Data table equivalent.
- **Developer Notes:** Clarify centered vs 1.5σ shift Six Sigma convention.

## Screen M4L3-S06 — Worked Step-by-Step Calculation
- **Learning Objective:** คำนวณ $C_p, C_{pk}, P_p, P_{pk}$ ด้วยมืออย่างเป็นขั้นตอนจากข้อมูล 20 Subgroups (`d2 = 2.326`)
- **Duration:** 45s
- **Layout:** 4-Step Interactive Calculator Walkthrough (`AST-M4-013`)
- **Asset ID:** `AST-M4-013`
- **On Screen Text:** "ตัวอย่างจริง (`10.00 ± 0.15 mm`): Cp = 1.87, Cpk = 1.64 vs Pp = 1.31, Ppk = 1.15"
- **Voice Over Script Ref:** `AUD-M4L3-S06`
- **Motion Specification:** Step-by-step equation lines expand on click/audio cue.
- **Trigger Logic:** Click through Steps 1–4.
- **Accessibility Notes:** Readable equations.
- **Developer Notes:** Exact numbers from Workshop 4 CSV.

## Screen M4L3-S07 — Interactive Cp vs Cpk Live Playground
- **Learning Objective:** ทดลองปรับ Mean Shift และ Sigma เพื่อสังเกตผลต่อ $C_p, C_{pk}$, PPM และ Yield
- **Duration:** 60s
- **Layout:** Interactive Curve Canvas + 2 Sliders (`INT-M4-L3-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M4-L3-01`
- **On Screen Text:** "ลองขยับ Mean ออกจากเป้าแล้วดู Cp นิ่งสนิทแต่ Cpk ร่วง! จากนั้นลองลด Sigma เพื่อเพิ่มทั้ง Cp และ Cpk"
- **Voice Over Script Ref:** `AUD-M4L3-S07`
- **Motion Specification:** Live curve, LSL/USL tail shading, and KPI cards update smoothly.
- **Trigger Logic:** Achieve `Cpk >= 1.67` in sandbox (`+10 pts`).
- **Accessibility Notes:** Live ARIA KPI readouts.
- **Developer Notes:** Supports 2-sided and 1-sided spec toggle!

## Screen M4L3-S08 — Interactive Cp/Cpk/Pp/Ppk Diagnostic Match
- **Learning Objective:** จับคู่ผล Capability Report 4 รูปแบบให้ตรงกับสาเหตุรากเหง้า
- **Duration:** 45s
- **Layout:** 4-Case Diagnostic Matcher (`INT-M4-L3-02`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M4-L3-02`
- **On Screen Text:** "วินิจฉัย 4 สถานการณ์: อ่านค่า Cp, Cpk, Pp, Ppk แล้วระบุสิ่งที่ต้องแก้ไข"
- **Voice Over Script Ref:** `AUD-M4L3-S08`
- **Motion Specification:** Immediate rationale cards.
- **Trigger Logic:** Score `>= 3/4` (`+10 pts`).
- **Accessibility Notes:** Keyboard dropdown selection.
- **Developer Notes:** Reinforces `Cpk vs Ppk` and `Cp vs Cpk`.

## Screen M4L3-S09 — Lesson 3 Knowledge Check (`KC-M4-L3`)
- **Learning Objective:** ทดสอบการคำนวณและแปลผล $C_p, C_{pk}, P_p, P_{pk}$ (`M4-Q025`, `M4-Q033`, `M4-Q040`)
- **Duration:** 45s
- **Layout:** 3-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 3 (3 ข้อ)"
- **Voice Over Script Ref:** `AUD-M4L3-S09`
- **Motion Specification:** Feedback reveal.
- **Trigger Logic:** Complete 3 questions to unlock Lesson 4.
- **Accessibility Notes:** Keyboard controls.
- **Developer Notes:** Progress 70%.

---

# LESSON M4-L4: AIAG/VDA & JEDEC Requirements + Capability Workshop (`4.4`)

## Screen M4L4-S01 — Prerequisite Gate: Stability + Normality + MSA
- **Learning Objective:** ตรวจ 3 เงื่อนไขบังคับ (MSA ผ่าน, Control Chart เสถียร, ข้อมูล Normal) ก่อนประกาศค่า Capability
- **Duration:** 35s
- **Layout:** 3-Gate Verification Pipeline (`AST-M4-014`)
- **Asset ID:** `AST-M4-014`
- **On Screen Text:** "3 ด่านก่อนรายงาน Cpk: 1) MSA Ready → 2) Stable Process → 3) Normality Check (p ≥ 0.05)"
- **Voice Over Script Ref:** `AUD-M4L4-S01`
- **Motion Specification:** 3 pipeline gates unlock sequentially.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Step list captions.
- **Developer Notes:** Links directly to Module 5 (SPC) and Module 9 (MSA).

## Screen M4L4-S02 — AIAG / VDA & IATF 16949 Requirements
- **Learning Objective:** เข้าใจเกณฑ์ PPAP Initial Study (`Ppk ≥ 1.67`) vs Ongoing (`Cpk ≥ 1.33`) และแผนรับมือตาม AIAG/VDA
- **Duration:** 40s
- **Layout:** Automotive Standard Comparison Matrix (`AST-M4-015`)
- **Asset ID:** `AST-M4-015`
- **On Screen Text:** `AIAG / VDA`: "Initial PPAP Study: Ppk ≥ 1.67 | Ongoing Stable: Cpk ≥ 1.33 | 1.33–1.67 ต้องมี Containment/Action Plan"
- **Voice Over Script Ref:** `AUD-M4L4-S02`
- **Motion Specification:** Traffic light gates highlight thresholds.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Full table readout.
- **Developer Notes:** Include CC/SC (Critical/Special Characteristics) note.

## Screen M4L4-S03 — JEDEC Standard Requirements (Semiconductor & Electronics)
- **Learning Objective:** เข้าใจข้อกำหนด JEDEC (JESD557) ด้าน Capability, 1-sided specs, Non-normal data และ OCAP
- **Duration:** 45s
- **Layout:** Semiconductor Process Cards + JEDEC Threshold Table (`AST-M4-016`)
- **Asset ID:** `AST-M4-016`
- **On Screen Text:** `JEDEC Standard`: "Wafer/Assembly/Test Critical Parameters | Ongoing Cpk ≥ 1.33, Automotive/Critical ≥ 1.67–2.00 | 1-Sided & Skewed Handling"
- **Voice Over Script Ref:** `AUD-M4L4-S03`
- **Motion Specification:** Wire bond pull, solder ball shear, and leakage current cards animate.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear comparison cards.
- **Developer Notes:** Addresses PaPa's explicit JEDEC requirement.

## Screen M4L4-S04 — AIAG/VDA vs JEDEC Summary & Decision Flow
- **Learning Objective:** เปรียบเทียบ Traffic-Light Action Flow ของทั้งมาตรฐานยานยนต์และอิเล็กทรอนิกส์
- **Duration:** 30s
- **Layout:** Unified Traffic Light Decision Tree (`AST-M4-017`)
- **Asset ID:** `AST-M4-017`
- **On Screen Text:** `≥ 1.67 (Green: Release)` | `1.33–1.66 (Amber: Containment + Improve)` | `< 1.33 (Red: Reject / 100% Sort)`
- **Voice Over Script Ref:** `AUD-M4L4-S04`
- **Motion Specification:** Decision branches animate downward.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Icon + color paired badges.
- **Developer Notes:** Clean reference before simulator.

## Screen M4L4-S05 — Interactive Release Gate Decision Simulator
- **Learning Objective:** ประเมินผล Capability Study 5 เคสจริงตามกฎ AIAG/VDA & JEDEC
- **Duration:** 50s
- **Layout:** 5-Case Release Gate Console (`INT-M4-L4-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M4-L4-01`
- **On Screen Text:** "ตัดสินใจ 5 เคส: Approve Release | Conditional (Contain) | Reject (Fix Stability/Non-Normal)"
- **Voice Over Script Ref:** `AUD-M4L4-S05`
- **Motion Specification:** Gate stamp (`APPROVED` / `CONDITIONAL` / `HOLD`) animates on choice.
- **Trigger Logic:** Score `>= 4/5` (`+10 pts`).
- **Accessibility Notes:** Keyboard button choices.
- **Developer Notes:** Includes unstable `Cpk=1.64, Ppk=1.15` & skewed `p=0.002` traps!

## Screen M4L4-S06 — Workshop: คำนวณ $C_p / C_{pk} / P_p / P_{pk}$ จากข้อมูลจริง
- **Learning Objective:** วิเคราะห์ไฟล์ `workshop_m4_capability_subgroups.csv` (100 ชิ้น) และวินิจฉัยปัญหา Drift
- **Duration:** 120s
- **Layout:** Interactive Capability Lab (`INT-M4-L4-02`) + CSV Download + 4 Diagnostic Questions
- **Asset ID:** N/A | **Interactive ID:** `INT-M4-L4-02`
- **On Screen Text:** "Workshop: ข้อมูล Pin Length 100 ชิ้น (20 Subgroups × 5 ชิ้น | Spec 10.00 ± 0.15 mm) — คำนวณ Cp, Cpk, Pp, Ppk และตัดสิน Release!"
- **Voice Over Script Ref:** `AUD-M4L4-S06`
- **Motion Specification:** Histogram + Subgroup Run Plot highlights `SG-15..20` Night shift drift.
- **Trigger Logic:** Score `>= 3/4` on Workshop diagnostic quiz.
- **Accessibility Notes:** Full CSV summary stats table.
- **Developer Notes:** Exact verified numbers in `07_workshop_guide.md`.

## Screen M4L4-S07 — Workshop Solution & Engineering Diagnosis
- **Learning Objective:** สรุปผลเปรียบเทียบช่วง All (`SG 1–20`) vs Stable (`SG 1–14`) และการตัดสินใจตาม AIAG/JEDEC
- **Duration:** 40s
- **Layout:** Before/After Drift Fix Dashboard (`AST-M4-018`)
- **Asset ID:** `AST-M4-018`
- **On Screen Text:** "เฉลย: รวม 20 กลุ่มได้ Cpk=1.64 แต่ Ppk=1.15 (FAIL!) เพราะกะดึก SG-15..20 ไหลขึ้น +0.060 mm — เมื่อแก้ Drift ได้ Ppk=1.93!"
- **Voice Over Script Ref:** `AUD-M4L4-S07`
- **Motion Specification:** Highlight `SG-15..20` removal shifting `Ppk` from Red `1.15` to Green `1.93`.
- **Trigger Logic:** Review solution to unlock Final Exam.
- **Accessibility Notes:** Structured comparison table.
- **Developer Notes:** Sets up Module 5 SPC Control Charts directly.

## Screen M4L4-S08 — Module 4 Final Assessment (`EXAM-M4`)
- **Learning Objective:** วัดผลสัมฤทธิ์ Module 4 (เกณฑ์ผ่าน 80% = 16/20 ข้อ)
- **Duration:** 10–15 min
- **Layout:** Exam Runner (20 Randomized Questions from `M4-Q001..M4-Q060`)
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบประมวลผล Module 4 (สุ่ม 20 ข้อ จากคลัง 60 ข้อ | เกณฑ์ผ่าน 80% | ทำซ้ำได้ไม่จำกัด)"
- **Voice Over Script Ref:** `AUD-M4L4-S08`
- **Motion Specification:** Lesson breakdown progress rings.
- **Trigger Logic:** Stratify `4 L1 + 4 L2 + 6 L3 + 6 L4 = 20 Qs`; Pass `>= 80%` unlocks Module 5.
- **Accessibility Notes:** Untimed accessible exam.
- **Developer Notes:** Save `var_exam_score`.
