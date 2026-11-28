# Module 5 Production Storyboard (Developer & Web/LMS Ready)

**Module:** Module 5 — SPC Concept and Methodology (Shewhart, Control vs Spec Limit, Stability, Western Electric & Nelson Rules)  
**Total Lessons:** 4 Lessons | **Total Screens:** 28 Screens (`M5L1-S01` .. `M5L4-S10`)  
**Estimated Duration:** ~40 minutes (including pattern labs, WECO rule selection simulator & workshop)  
**Delivery Target:** Web Interactive Training (MDX/React + Thai Audio Sync) & SCORM 2004 Compatible

---

# LESSON M5-L1: Introduction to SPC (`5.1`)

## Screen M5L1-S01 — Welcome & From Capability to Real-Time Control
- **Learning Objective:** เชื่อมโยงเหตุผลที่ต้องมี SPC ต่อเนื่องจาก Module 4 เพื่อเฝ้าระวัง Drift ก่อนเสีย
- **Duration:** 25s
- **Layout:** Hero Split (Left Live Chart Transition `AST-M5-001` 60% | Right 4 Objectives 40%)
- **Asset ID:** `AST-M5-001`
- **On Screen Text:** `CAPABLE TODAY ≠ CAPABLE TOMORROW` — "มี Cpk สูงแล้วยังต้องใช้ SPC เพื่อจับ Drift ทันที!"
- **Voice Over Script Ref:** `AUD-M5L1-S01`
- **Motion Specification:** Green capable bell curve develops sudden upward shift alert caught by red SPC control line.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** TH/EN captions + keyboard navigation.
- **Developer Notes:** Preload `AST-M5-002`.

## Screen M5L1-S02 — Walter Shewhart & The Birth of SPC (1924)
- **Learning Objective:** เข้าใจที่มาทางประวัติศาสตร์และแก่นปรัชญาการแยก Noise ออกจาก Signal ของ Walter Shewhart
- **Duration:** 35s
- **Layout:** Left 1924 Bell Labs Memo & Shewhart Portrait Timeline (`AST-M5-002`) | Right Core Principle
- **Asset ID:** `AST-M5-002`
- **On Screen Text:** `Walter A. Shewhart (1924)` — "แยก Noise (Common Cause) ออกจาก Signal (Special Cause)"
- **Voice Over Script Ref:** `AUD-M5L1-S02`
- **Motion Specification:** Historic 1924 memo diagram transforms into modern glowing digital control chart.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear timeline alt-text.
- **Developer Notes:** Mention Deming & global quality evolution.

## Screen M5L1-S03 — Prevention vs Detection
- **Learning Objective:** เปรียบเทียบแนวคิด Detection ปลายทาง กับ Prevention ด้วย SPC กลางไลน์ผลิต
- **Duration:** 35s
- **Layout:** Split Comparison Conveyor Animation (`AST-M5-003`) + Comparison Table
- **Asset ID:** `AST-M5-003`
- **On Screen Text:** `Prevention > Detection` — "รู้ตัวตั้งแต่กราฟเริ่มขยับ ก่อนจะผลิตของเสียเต็มลัง!"
- **Voice Over Script Ref:** `AUD-M5L1-S03`
- **Motion Specification:** Top conveyor detects scrap too late; bottom conveyor triggers early warning on SPC chart before any red part appears.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Accessible comparison table.
- **Developer Notes:** Connects directly to COPQ reduction from Module 1.

## Screen M5L1-S04 — AIAG SPC Framework & JEDEC `JESD557C` (เกณฑ์ตัวเลข: ISQC หรือข้อกำหนดลูกค้า ซึ่งยังไม่ยืนยันจากต้นฉบับ)
- **Learning Objective:** เห็นภาพการใช้งานจริงของระบบ SPC ในกรอบ AIAG/IATF 16949 และ JEDEC `JESD557C`
- **Duration:** 40s
- **Layout:** Dual Standard Pillar Visual (`AST-M5-004`: AIAG 3-Step Cycle | JEDEC Online / Real-time SPC + OCAP)
- **Asset ID:** `AST-M5-004`
- **On Screen Text:** `AIAG SPC & JEDEC JESD557C` — "Data → Control Stability → Capability + OCAP"
- **Voice Over Script Ref:** `AUD-M5L1-S04`
- **Motion Specification:** Three-step AIAG cycle loops smoothly alongside JEDEC OCAP trigger.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Descriptive diagram labels.
- **Developer Notes:** Ties back to Module 4 standards.

## Screen M5L1-S05 — Lesson 1 Knowledge Check (`KC-M5-L1`)
- **Learning Objective:** ทดสอบความเข้าใจแก่นของ SPC, Shewhart และ Prevention (`M5-Q001`, `M5-Q006`)
- **Duration:** 30s
- **Layout:** Centered 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 1 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M5L1-S05`
- **Motion Specification:** Card flip feedback.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 2.
- **Accessibility Notes:** Keyboard radio controls.
- **Developer Notes:** Progress 18%.

---

# LESSON M5-L2: Control Chart Principle (`5.2`)

## Screen M5L2-S01 — Anatomy of a Control Chart (`UCL, CL, LCL` & Zones)
- **Learning Objective:** ระบุส่วนประกอบ `CL, UCL, LCL` และพื้นที่ Zone C/B/A (`±1σ, ±2σ, ±3σ`)
- **Duration:** 35s
- **Layout:** Full-Width Zone Breakdown Canvas (`AST-M5-005`)
- **Asset ID:** `AST-M5-005`
- **On Screen Text:** `UCL / CL / LCL (±3σ)` — "Zone C (±1σ: 68.3%) | Zone B (±2σ) | Zone A (±3σ: 99.73%)"
- **Voice Over Script Ref:** `AUD-M5L2-S01`
- **Motion Specification:** Rotated normal bell curve projects horizontal Zone C/B/A bands across time-series chart.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Colorblind-friendly banded zones with labels.
- **Developer Notes:** Sets visual foundation for WE Rules.

## Screen M5L2-S02 — Control Limits vs Spec Limits
- **Learning Objective:** แยก `UCL/LCL` (Subgroup Statistic, VOP) ออกจาก `USL/LSL` (Individual Parts, VOC) อย่างเด็ดขาด
- **Duration:** 45s
- **Layout:** Side-by-Side Comparison (`AST-M5-006`) + Red Spec-Trap Warning Box
- **Asset ID:** `AST-M5-006`
- **On Screen Text:** `Control Limit ≠ Spec Limit` — "ห้ามเอา USL/LSL มาวาดแทน UCL/LCL บนกราฟ X̄ เด็ดขาด!"
- **Voice Over Script Ref:** `AUD-M5L2-S02`
- **Motion Specification:** Overlay shows wide Spec walls vs `√n`-narrower Control limits catching a mean shift invisible to Spec limits.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear inequality callouts.
- **Developer Notes:** Reinforces Module 2 CLT spec-trap lesson.

## Screen M5L2-S03 — How `UCL/CL/LCL` Are Calculated ($\bar{X}$-$R$ Constants)
- **Learning Objective:** คำนวณ `UCL, CL, LCL` ของ $\bar{X}$ และ $R$ Chart ด้วยค่าคงที่ `A2, D3, D4`
- **Duration:** 40s
- **Layout:** Left Dual Formula Cards (`AST-M5-007`) | Right `A2/D3/D4/d2` Reference Table (`n=2..5`)
- **Asset ID:** `AST-M5-007`
- **On Screen Text:** `UCL_X = X̄̄ + A₂R̄` | `UCL_R = D₄R̄` — "ที่ n=5 ใช้ A₂=0.577, D₃=0, D₄=2.114"
- **Voice Over Script Ref:** `AUD-M5L2-S03`
- **Motion Specification:** Constants row `n=5` highlights as numbers flow into X̄ and R limit formulas.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Full constants table alt-text.
- **Developer Notes:** Exact constants matching Workshop 5 CSV.

## Screen M5L2-S04 — Phase I (Trial Limits) vs Phase II (Ongoing Control)
- **Learning Objective:** เข้าใจกระบวนการสร้าง Trial Limits (Phase I), การคัดจุดที่มีสาเหตุจริง, และการล็อกเส้นสำหรับ Phase II
- **Duration:** 40s
- **Layout:** Two-Stage Workflow Diagram (`AST-M5-008`)
- **Asset ID:** `AST-M5-008`
- **On Screen Text:** `Phase I (20–25 SG) → Remove Verified Special Causes → Phase II (Freeze Limits)`
- **Voice Over Script Ref:** `AUD-M5L2-S04`
- **Motion Specification:** Phase I flags OOC point, removes it upon RCA, shrinks limits cleanly, and locks Phase II padlock.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear rule warning: never drop points without assignable cause.
- **Developer Notes:** Core practical knowledge often tested in interviews/audits.

## Screen M5L2-S05 — Interactive Control vs Spec & Phase I/II Builder
- **Learning Objective:** ทดลองเปรียบเทียบ Spec-on-Chart vs Control Limits จริง และปรับ Phase I Revised Limits
- **Duration:** 55s
- **Layout:** Interactive Chart Toggle + Phase I Subgroup Point Exclusion Lab (`INT-M5-L2-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M5-L2-01`
- **On Screen Text:** "ลองสลับดูกับดัก Spec Limit บน X̄ Chart แล้วลองตัดจุด Special Cause ออกเพื่อคำนวณ Revised Limits!"
- **Voice Over Script Ref:** `AUD-M5L2-S05`
- **Motion Specification:** Limits recalculate smoothly as user removes verified special-cause subgroup.
- **Trigger Logic:** Complete Spec-trap toggle + clean Phase I recalculation (`+10 pts`).
- **Accessibility Notes:** Keyboard button controls + ARIA readouts.
- **Developer Notes:** Builds intuition directly ahead of Workshop 5.

## Screen M5L2-S06 — Lesson 2 Knowledge Check (`KC-M5-L2`)
- **Learning Objective:** ทดสอบความเข้าใจ Control vs Spec Limits และ Phase I/II (`M5-Q013`, `M5-Q019`)
- **Duration:** 30s
- **Layout:** 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 2 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M5L2-S06`
- **Motion Specification:** Card flip feedback.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 3.
- **Accessibility Notes:** Keyboard accessible.
- **Developer Notes:** Progress 40%.

---

# LESSON M5-L3: Stability Assessment (`5.3`)

## Screen M5L3-S01 — Statistical Stability & Golden Reading Order
- **Learning Objective:** นิยาม Stability และรู้เหตุผลว่าทำไมต้องอ่าน $R$ Chart ก่อน $\bar{X}$ Chart เสมอ
- **Duration:** 35s
- **Layout:** Stacked `X̄` & `R` Chart Highlighting Reading Sequence (`AST-M5-009`)
- **Asset ID:** `AST-M5-009`
- **On Screen Text:** "กฎทองการอ่านกราฟ 2 ชั้น: ตรวจ R Chart (ความกว้าง) ให้เสถียรก่อน ดู X̄ Chart (ค่าเฉลี่ย) เสมอ!"
- **Voice Over Script Ref:** `AUD-M5L3-S01`
- **Motion Specification:** Step 1 arrow highlights bottom `R` chart stability before arrow moves up to Step 2 `X̄` chart.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Numbered reading sequence badges.
- **Developer Notes:** Explains dependency of `A2 * Rbar`.

## Screen M5L3-S02 — Special Cause Signatures Part 1: Sudden Shift & Trend
- **Learning Objective:** แยกแยะรูปทรง **Sudden Shift** และ **Trend / Tool Wear** พร้อมระบุต้นตอหน้างาน
- **Duration:** 40s
- **Layout:** Dual Pattern Card (`AST-M5-010`: Left Sudden Shift | Right Trend/Tool Wear)
- **Asset ID:** `AST-M5-010`
- **On Screen Text:** `Sudden Shift` (เปลี่ยนล็อต/Offset/Setup) vs `Trend` (มีดกลึงสึก/อุณหภูมิสะสม)
- **Voice Over Script Ref:** `AUD-M5L3-S02`
- **Motion Specification:** Step jump animation on left; steady upward slope on right.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear pattern descriptions.
- **Developer Notes:** Most frequent machine behaviors.

## Screen M5L3-S03 — Special Cause Signatures Part 2: Cyclic & Mixture
- **Learning Objective:** แยกแยะ **Cyclic Pattern** และ **Mixture / Two Streams** พร้อมวิธี Stratify แยกข้อมูล
- **Duration:** 40s
- **Layout:** Dual Pattern Card (`AST-M5-011`: Left Cyclic Wave | Right Two-Stream Mixture)
- **Asset ID:** `AST-M5-011`
- **On Screen Text:** `Cyclic` (รอบอุณหภูมิ/กะ) vs `Mixture` (รวม 2 เครื่อง/2 Cavities → แยกกราฟด้วย Stratification!)
- **Voice Over Script Ref:** `AUD-M5L3-S03`
- **Motion Specification:** Sine wave oscillation vs bimodal points splitting into two clean streams when stratified.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** High-contrast distinct stream colors.
- **Developer Notes:** Connects back to Stratified Sampling (M3).

## Screen M5L3-S04 — Special Cause Signatures Part 3: Stratification (Hugging CL)
- **Learning Objective:** วินิจฉัยกราฟที่จุด **เกาะชิดเส้นกลาง (`Zone C` 15+ จุด)** ซึ่งเกิดจาก Mixing ใน Subgroup หรือ Data Faking
- **Duration:** 40s
- **Layout:** Center-Hugging Chart (`AST-M5-012`) + Root Cause Diagnostic Callout
- **Asset ID:** `AST-M5-012`
- **On Screen Text:** `Hugging the Center Line` — "กราฟนิ่งผิดปกติเกินจริง! ระวัง 1) ยัดต่างแหล่งรวมเป็น 1 Subgroup จน R̄ บวม หรือ 2) ตัวเลขปลอม"
- **Voice Over Script Ref:** `AUD-M5L3-S04`
- **Motion Specification:** Wide `UCL/LCL` sits far outside tightly compressed flat points hugging `CL`.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Explicit audit warning note.
- **Developer Notes:** Essential auditor skill for QE/QA.

## Screen M5L3-S05 — Over-Control (Tampering) & Unstable-Yet-In-Spec Trap
- **Learning Objective:** เข้าใจโทษของ Over-Control (Tampering) และคุณค่าของสัญญาณ OOC ขณะชิ้นงานยังผ่าน Spec
- **Duration:** 40s
- **Layout:** Split Comparison (`AST-M5-013`: Tampering Sawtooth | Early Warning Inside Spec)
- **Asset ID:** `AST-M5-013`
- **On Screen Text:** "ห้ามปรับเครื่องตาม Common Cause (Tampering!) & จุดหลุด UCL ทั้งที่ยังไม่ตก Spec คือโอกาสทอง!"
- **Voice Over Script Ref:** `AUD-M5L3-S05`
- **Motion Specification:** Operator adjustment doubles variance amplitude; second panel shows OOC caught well inside USL wall.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear icon contrast.
- **Developer Notes:** Connects Deming Funnel (M2) directly to real control charts.

## Screen M5L3-S06 — Interactive Pattern Diagnosis Matcher
- **Learning Objective:** วินิจฉัยรูปทรง Control Chart 6 รูปแบบจากกราฟจำลอง
- **Duration:** 50s
- **Layout:** 6-Card Chart Pattern Matcher (`INT-M5-L3-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M5-L3-01`
- **On Screen Text:** "ฝึกอ่านอาการผิดปกติบน Control Chart 6 รูปแบบ แล้วเลือกต้นเหตุหน้างานให้ถูกต้อง"
- **Voice Over Script Ref:** `AUD-M5L3-S06`
- **Motion Specification:** Chart zoom + instant root-cause feedback badge.
- **Trigger Logic:** Score `>= 5/6` (`+10 pts`).
- **Accessibility Notes:** Keyboard dropdown controls.
- **Developer Notes:** Interactive reinforcement before WECO rules.

## Screen M5L3-S07 — Lesson 3 Knowledge Check (`KC-M5-L3`)
- **Learning Objective:** ทดสอบความเข้าใจ Stability Assessment (`M5-Q025`, `M5-Q033`)
- **Duration:** 30s
- **Layout:** 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 3 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M5L3-S07`
- **Motion Specification:** Card flip feedback.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 4.
- **Accessibility Notes:** Keyboard controls.
- **Developer Notes:** Progress 66%.

---

# LESSON M5-L4: Western Electric Rules, Nelson Rules & Workshop (`5.4`)

## Screen M5L4-S01 — Zone Logic Behind Run Rules (`68% – 95% – 99.7%`)
- **Learning Objective:** เข้าใจเหตุผลทางความน่าจะเป็นว่าทำไม Run Rules ถึงจับ Shift ขนาดเล็ก-กลางได้ไว
- **Duration:** 35s
- **Layout:** Bell Curve Probability vs Run Probability Visual (`AST-M5-014`)
- **Asset ID:** `AST-M5-014`
- **On Screen Text:** "ทำไม 7 จุดติดกันด้านเดียว (AIAG; ISQC ใช้ 8 จุด) ถึงเป็น Special Cause? โอกาสเกิดโดยบังเอิญประมาณ 1.6% (8 จุด ≈ 0.8%)!"
- **Voice Over Script Ref:** `AUD-M5L4-S01`
- **Motion Specification:** Coin-flip / zone probabilities multiply sequentially (`0.5⁷` ตาม AIAG; `0.5⁸` ตาม ISQC) showing vanishing random chance.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Probability annotations accessible.
- **Developer Notes:** Builds statistical conviction behind WECO rules.

## Screen M5L4-S02 — Western Electric Rules 1–4 Deep Dive
- **Learning Objective:** จำแนกและประยุกต์ใช้ Western Electric Rules ข้อ 1–4 ได้อย่างแม่นยำ
- **Duration:** 50s
- **Layout:** 4-Panel Zone Diagram Grid (`AST-M5-015`)
- **Asset ID:** `AST-M5-015`
- **On Screen Text:** `WE Rule 1: 1 > 3σ` | `Rule 2: 2/3 > 2σ` | `Rule 3: 4/5 > 1σ` | `Rule 4: 7 on same side of CL (AIAG; ISQC 8)`
- **Voice Over Script Ref:** `AUD-M5L4-S02`
- **Motion Specification:** Red violation rings illuminate triggered points in each of the 4 mini-charts.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Pattern-coded zones + text rules table.
- **Developer Notes:** Core canonical WECO 1–4 rules.

## Screen M5L4-S03 — Nelson Rules (Rules 5–8) & Avoiding False Alarm Fatigue
- **Learning Objective:** รู้จัก Nelson Rules เพิ่มเติม (`6 Trend`, `14 Alternating`, `15 in Zone C`, `8 outside Zone C`) และ Trade-off ของ `ARL` (`370` vs `91` ของชุด Western Electric 4 กฎ)
- **Duration:** 50s
- **Layout:** Left 4 Nelson Pattern Cards (`AST-M5-016`) | Right `ARL False Alarm` Gauge
- **Asset ID:** `AST-M5-016`
- **On Screen Text:** "ชุด Western Electric 4 กฎ: ARL ลดจาก 370 เหลือ ~91 จุด (ค่าของชุดที่ใช้ 8 จุด) เปิดกฎมากกว่านี้ False Alarm ยิ่งถี่ — เลือกเปิดกฎให้เหมาะกับอาการ"
- **Voice Over Script Ref:** `AUD-M5L4-S03`
- **Motion Specification:** ARL counter drops from `370` to `91` for the Western Electric 4-rule set; extra rules make false alarms more frequent.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear ARL comparison bar.
- **Developer Notes:** Prevents blind "enable all 8 rules" mistake in Minitab.

## Screen M5L4-S04 — SPC Rule Selection: Mandatory Rules, Zero-Bounds & Engineering Judgement
- **Learning Objective:** เข้าใจกฎบังคับ (`Mandatory Rules`: Rule 1 ขอบเขตที่ Valid + Raw Data vs Spec), ข้อยกเว้น `LCL < 0` บนค่ายิ่งน้อยยิ่งดี และ `LCL = 0` บน Variation Chart พร้อมหลักการเลือกกฎเสริมอย่างน้อย 1 ข้อ
- **Duration:** 55s
- **Layout:** Top 3-Column Chart Bound Comparison (`AST-M5-020`: Mean Normal vs Lower-is-Better Zero-Bound vs Variation R Chart) | Bottom Mandatory Shields + 2-Pillar Optional Rule Selector
- **Asset ID:** `AST-M5-020`
- **On Screen Text:** `Mandatory Rules (Rule 1 Valid + Raw Data vs Spec)` + `Choose ≥1 Optional Rule by Engineering Judgement & Process Characteristic`
- **Voice Over Script Ref:** `AUD-M5L4-S04`
- **Motion Specification:** 3-scene animation: (1) Near-zero Roughness/Flatness/Coplanarity/Tilt pushes `LCL < 0` into red invalid zone and fades `< LCL` rule off while keeping `UCL`; (2) Variation Chart snaps bottom bar onto `0` and crosses out redundant `< LCL_R` rule; (3) Modern `Individual Raw Data vs USL/LSL` shield locks alongside `Rule 1`, then Engineering Judgement + Process Characteristic scales highlight `≥ 1` tailored Optional Rule cleanly without False Alarm fatigue.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Colorblind-safe strike-through badges (`Invalid LCL < 0`, `Unnecessary LCL = 0`) + full TH/EN captions.
- **Developer Notes:** Core rule-configuration blueprint tying straight into `INT-M5-L4-01`.

## Screen M5L4-S05 — From OOC Signal to OCAP (Bridge to Module 8)
- **Learning Objective:** รู้ขั้นตอนปฏิบัติทันทีเมื่อเกิดสัญญาณ Out-of-Control (`Verify → Contain → Fix`)
- **Duration:** 30s
- **Layout:** 3-Step OCAP Flow Strip (`AST-M5-017`)
- **Asset ID:** `AST-M5-017`
- **On Screen Text:** `1) Verify Data` → `2) Contain Since Last Good Subgroup` → `3) Find & Fix Special Cause`
- **Voice Over Script Ref:** `AUD-M5L4-S05`
- **Motion Specification:** OOC siren flows cleanly through 3 structured OCAP cards.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Step flow descriptions.
- **Developer Notes:** Preview of Module 8 OCAP.

## Screen M5L4-S06 — Interactive Western Electric, Nelson & Rule Selection Trigger Lab
- **Learning Objective:** ทดลองเลือก Process Profile (Normal vs Near-Zero Lower-is-Better vs Variation R Chart), จำลองสัญญาณ 7 รูปแบบ, ดู Mandatory Rule Bounds (`Rule 1` + `Raw Data vs Spec`) และเลือก Optional Rule อย่างน้อย 1 ข้อพร้อมเช็ก `ARL`
- **Duration:** 65s
- **Layout:** Process Profile Switcher + Interactive Rule Lab Canvas + Rule Checkboxes (`INT-M5-L4-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M5-L4-01`
- **On Screen Text:** "เลือก Process Characteristic แล้วลองเปิดกฎ Mandatory + อย่างน้อย 1 Optional Rule เพื่อดูการแจ้งเตือนและค่า ARL แบบ Real-time"
- **Voice Over Script Ref:** `AUD-M5L4-S06`
- **Motion Specification:** Points animate onto Zone A/B/C chart; `LCL` fades/locks dynamically when Near-Zero or Variation mode is active.
- **Trigger Logic:** Configure valid Mandatory + ≥1 Optional rule and trigger at least 4 distinct rules in lab (`+10 pts`).
- **Accessibility Notes:** Keyboard event triggers + live ARIA alerts.
- **Developer Notes:** Directly implements the Roadmap's "Western Electric Rules Trigger Lab" + engineering rule selection.

## Screen M5L4-S07 — Workshop: หา Special Cause จาก Control Chart ข้อมูลจริง
- **Learning Objective:** วิเคราะห์ไฟล์ `workshop_m5_control_chart_subgroups.csv` (25 Subgroups) เพื่อคำนวณ Limits และหา Special Causes
- **Duration:** 120s
- **Layout:** Interactive X̄-R Chart Analyzer (`INT-M5-L4-02`) + CSV Download + 4 Diagnostic Questions
- **Asset ID:** N/A | **Interactive ID:** `INT-M5-L4-02`
- **On Screen Text:** "Workshop: ข้อมูล Shaft OD 125 ชิ้น (25 Subgroups × 5 ชิ้น | Spec 25.000 ± 0.080 mm) — หา Trial Limits & Special Causes!"
- **Voice Over Script Ref:** `AUD-M5L4-S07`
- **Motion Specification:** Interactive X̄-R chart renders `SG-01..25` with hover values and toggleable Revised Limits.
- **Trigger Logic:** Score `>= 3/4` on Workshop diagnostic quiz.
- **Accessibility Notes:** Full subgroup `X̄, R` table fallback.
- **Developer Notes:** Exact numbers verified in `07_workshop_guide.md`.

## Screen M5L4-S08 — Workshop Solution: Phase I vs Revised Limits & Diagnosis
- **Learning Objective:** สรุปการตรวจจับ `SG-11` (Rule 1) และ `SG-18..25` (Rule 4 7 จุด + Rule 2 + Rule 3) ทั้งที่ไม่มีชิ้นงานหลุด Spec เลย
- **Duration:** 45s
- **Layout:** Annotated Dual X̄-R Solution Dashboard (`AST-M5-018`)
- **Asset ID:** `AST-M5-018`
- **On Screen Text:** "เฉลย: จับ SG-11 (Rule 1 X̄&R) + SG-18..25 (Rule 4 7 จุด, Rule 2 & Rule 3) ทั้งที่ทุกชิ้นยังอยู่ใน Spec (24.960–25.068 mm)!"
- **Voice Over Script Ref:** `AUD-M5L4-S08`
- **Motion Specification:** Trial limits tighten to Revised Limits after flagging `SG-11` and `SG-18..25`.
- **Trigger Logic:** Review solution to continue.
- **Accessibility Notes:** Clear limit comparison table.
- **Developer Notes:** Highlights SPC early-warning power.

## Screen M5L4-S09 — Module 5 Summary & Bridge to Module 6
- **Learning Objective:** สรุปหลักการ SPC, การเลือกใช้ Rules อย่างมีวิจารณญาณ และเตรียมพร้อมเข้าสู่การเลือกชนิด Control Chart ใน Module 6
- **Duration:** 25s
- **Layout:** Bridge Milestone Card (`AST-M5-019`)
- **Asset ID:** `AST-M5-019`
- **On Screen Text:** "จบบทเรียน Module 5 → ก้าวต่อไปใน Module 6: เลือก Control Chart ให้ถูกชนิด (Variable vs Attribute)"
- **Voice Over Script Ref:** `AUD-M5L4-S09`
- **Motion Specification:** Bridge arrow illuminates Module 6 chart matrix preview.
- **Trigger Logic:** Click to enter Final Exam.
- **Accessibility Notes:** Clear summary bullets.
- **Developer Notes:** Smooth transition cue.

## Screen M5L4-S10 — Module 5 Final Assessment (`EXAM-M5`)
- **Learning Objective:** วัดผลสัมฤทธิ์ Module 5 (เกณฑ์ผ่าน 80% = 16/20 ข้อ)
- **Duration:** 10–15 min
- **Layout:** Exam Runner (20 Randomized Questions from `M5-Q001..M5-Q060`)
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบประมวลผล Module 5 (สุ่ม 20 ข้อ จากคลัง 60 ข้อ | เกณฑ์ผ่าน 80% | ทำซ้ำได้ไม่จำกัด)"
- **Voice Over Script Ref:** `AUD-M5L4-S10`
- **Motion Specification:** Lesson breakdown progress rings.
- **Trigger Logic:** Stratify `4 L1 + 5 L2 + 5 L3 + 6 L4 = 20 Qs`; Pass `>= 80%` unlocks Module 6.
- **Accessibility Notes:** Untimed accessible exam.
- **Developer Notes:** Save `var_exam_score`.
