# Module 9 Production Storyboard (Developer & Web/LMS Ready)

**Module:** Module 9 — MSA Connection to SPC (`Why MSA Before SPC`, `Gage R&R`, `Bias / Linearity / Stability` & Report Workshop)  
**Total Lessons:** 4 Lessons | **Total Screens:** 28 Screens (`M9L1-S01` .. `M9L4-S09`)  
**Estimated Duration:** ~45 minutes (including Gage R&R Impact Simulator, EV vs AV Lab, Bias/Linearity/Stability Diagnostic & `10×3×3` Report Workshop)  
**Delivery Target:** Web Interactive Training (MDX/React + Thai Audio Sync) & SCORM 2004 Compatible

---

# LESSON M9-L1: Why MSA Before SPC (`9.1`)

## Screen M9L1-S01 — Welcome: Is Your Control Chart Lying to You?
- **Learning Objective:** เข้าใจเหตุผลที่ต้องตรวจสอบระบบการวัด (`MSA`) ก่อนเชื่อถือ Control Chart และค่า $C_{pk}$
- **Duration:** 25s
- **Layout:** Hero Split (Left Gage + Control Chart Distortion Visual `AST-M9-001` 60% | Right 4 Objectives 40%)
- **Asset ID:** `AST-M9-001`
- **On Screen Text:** `MSA BEFORE SPC` — "ก่อนโทษเครื่องจักร เช็กให้ชัวร์ว่า 'เครื่องวัด' ไม่ได้หลอกคุณอยู่!"
- **Voice Over Script Ref:** `AUD-M9L1-S01`
- **Motion Specification:** Magnifying glass scans micrometer feeding noisy dots onto Control Chart.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** TH/EN captions + keyboard focus.
- **Developer Notes:** Preload `AST-M9-002`.

## Screen M9L1-S02 — The Observed Variance Equation ($\sigma^2_{\text{obs}} = \sigma^2_{\text{part}} + \sigma^2_{\text{gage}}$)
- **Learning Objective:** เข้าใจสมการรวมความแปรปรวนและผลกระทบ 3 ต่อเมื่อ $\sigma_{\text{gage}}$ สูง
- **Duration:** 40s
- **Layout:** Variance Stack Equation + 3 Impact Cards (`AST-M9-002`)
- **Asset ID:** `AST-M9-002`
- **On Screen Text:** `σ²_obs = σ²_part + σ²_gage` — "ความแกว่งของเครื่องวัดจะไปปนใน Control Chart และกดค่า Cpk!"
- **Voice Over Script Ref:** `AUD-M9L1-S02`
- **Motion Specification:** Blue `Part` bar + Red `Gage` bar stack into wider `Observed` distribution.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Equation alt-text.
- **Developer Notes:** Core mathematical link between M8 Gate 3 and M9.

## Screen M9L1-S03 — How Bad MSA Distorts Control Charts & Resolution Rule
- **Learning Objective:** เห็นตัวเลขการหดตัวของ $C_{pk}$ เมื่อ `%GRR` สูง และใช้กฎความละเอียด `10-to-1`
- **Duration:** 40s
- **Layout:** Split Panel (`AST-M9-003`: Good `8%` vs Bad `50%/70%` Cpk Drop | Right `10-to-1` Resolution Rule)
- **Asset ID:** `AST-M9-003`
- **On Screen Text:** "`%GRR = 70%` กด `Cpk` หายเกือบ 30%! — ความละเอียดเกจต้องได้อย่างน้อย `1/10` ของ Tolerance"
- **Voice Over Script Ref:** `AUD-M9L1-S03`
- **Motion Specification:** Vernier `0.05 mm` gets red X; Micrometer `0.001 mm` gets green check.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear numerical comparison labels.
- **Developer Notes:** Reinforces practical gage selection.

## Screen M9L1-S04 — Interactive Gage R&R Impact Simulator
- **Learning Objective:** ทดลองปรับ `%Repeatability` และ `%Reproducibility` เพื่อดู False OOC และ `Observed Cpk`
- **Duration:** 50s
- **Layout:** Dual Sliders + Live Control Chart & Cpk Gauge (`INT-M9-L1-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M9-L1-01`
- **On Screen Text:** "เลื่อน Slider ดูว่า %GRR ที่เพิ่มขึ้นสร้าง False OOC และกด Cpk ต่ำลงอย่างไร!"
- **Voice Over Script Ref:** `AUD-M9L1-S04`
- **Motion Specification:** Real-time chart dots scatter outward as `%GRR` slider increases.
- **Trigger Logic:** Test `%GRR < 10%` and `%GRR > 30%` (`+10 pts`).
- **Accessibility Notes:** ARIA slider values.
- **Developer Notes:** Core interactive simulator from Roadmap.

## Screen M9L1-S05 — Lesson 1 Knowledge Check (`KC-M9-L1`)
- **Learning Objective:** ทดสอบ Why MSA Before SPC (`M9-Q001`, `M9-Q008`)
- **Duration:** 30s
- **Layout:** Centered 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 1 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M9L1-S05`
- **Motion Specification:** Card flip validation.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 2.
- **Accessibility Notes:** Keyboard radio controls.
- **Developer Notes:** Progress 18%.

---

# LESSON M9-L2: Gage R&R (`Repeatability`, `Reproducibility`, `%GRR`, `ndc`) (`9.2`)

## Screen M9L2-S01 — Repeatability (`EV`) vs Reproducibility (`AV`)
- **Learning Objective:** แยก `Repeatability (EV)` ออกจาก `Reproducibility (AV)` ได้ชัดเจน
- **Duration:** 40s
- **Layout:** Split Comparison (`AST-M9-004`: Same Person/Same Part = `EV` vs Different Appraisers = `AV`)
- **Asset ID:** `AST-M9-004`
- **On Screen Text:** "`EV (Repeatability)` = เกจ/เครื่องวัด | `AV (Reproducibility)` = ความต่างระหว่างคนวัด"
- **Voice Over Script Ref:** `AUD-M9L2-S01`
- **Motion Specification:** Target bullseye shows tight vs loose spread for `EV` and shifted means for `AV`.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear icon labels.
- **Developer Notes:** Fundamental Gage R&R split.

## Screen M9L2-S02 — Conducting a Standard Gage R&R Study (`10 × 3 × 3`)
- **Learning Objective:** ออกแบบการเก็บข้อมูล `10 Parts × 3 Appraisers × 3 Trials = 90` แบบ Blind & Randomized
- **Duration:** 35s
- **Layout:** Study Matrix Diagram (`AST-M9-005`)
- **Asset ID:** `AST-M9-005`
- **On Screen Text:** "`10 Parts × 3 Appraisers × 3 Trials = 90` การวัด (ต้อง Blind & สุ่มลำดับ!)"
- **Voice Over Script Ref:** `AUD-M9L2-S02`
- **Motion Specification:** Matrix cells populate in randomized blind order.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Structured grid summary.
- **Developer Notes:** Prevents memory bias during trials.

## Screen M9L2-S03 — Key Formulas: `EV`, `AV`, `GRR`, `%GRR` & `ndc`
- **Learning Objective:** เข้าใจสูตรคำนวณ AIAG 4th Ed. และความต่างของ `%GRR (SV)` vs `%Tolerance`
- **Duration:** 45s
- **Layout:** Formula Cards (`AST-M9-006`)
- **Asset ID:** `AST-M9-006`
- **On Screen Text:** "`%GRR (SV)` ใช้คุม SPC | `%Tolerance` ใช้คัด Spec | `ndc = int(1.41 × PV / GRR)`"
- **Voice Over Script Ref:** `AUD-M9L2-S03`
- **Motion Specification:** Formula terms highlight sequentially.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Screen-reader math text.
- **Developer Notes:** Matches exact Python-verified Workshop formulas.

## Screen M9L2-S04 — AIAG Acceptance Criteria (`< 10%`, `10–30%`, `> 30%` & `ndc >= 5`)
- **Learning Objective:** ตัดสินผล Gage R&R ตามเกณฑ์ AIAG และเข้าใจกรณี `%Tol < 10%` แต่ `%SV > 30%`
- **Duration:** 40s
- **Layout:** Traffic-Light Criteria Table (`AST-M9-007`)
- **Asset ID:** `AST-M9-007`
- **On Screen Text:** "`< 10%` ผ่าน | `10–30%` มีเงื่อนไข | `> 30%` ตก! | `ndc >= 5` สำหรับ SPC"
- **Voice Over Script Ref:** `AUD-M9L2-S04`
- **Motion Specification:** Traffic light badges illuminate Green/Amber/Red.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Color + text labels.
- **Developer Notes:** Key decision gate.

## Screen M9L2-S05 — Diagnosing `EV > AV` vs `AV > EV` (How to Fix)
- **Learning Objective:** เลือกวิธีแก้ที่ตรงจุดเมื่อ `EV > AV` (ซ่อมเกจ/Fixture) vs `AV > EV` (มาตรฐานวิธีวัด/Ratchet Stop)
- **Duration:** 35s
- **Layout:** Two-Branch Diagnostic Card (`AST-M9-008`)
- **Asset ID:** `AST-M9-008`
- **On Screen Text:** "`EV > AV` → ซ่อม/เปลี่ยนเกจ | `AV > EV` → ปรับ WI วิธีจับ + ใช้ Ratchet Stop!"
- **Voice Over Script Ref:** `AUD-M9L2-S05`
- **Motion Specification:** Bar chart highlights dominant bar and routes to matching fix.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear cause-action pairing.
- **Developer Notes:** Prepares Workshop diagnosis.

## Screen M9L2-S06 — Interactive Repeatability vs Reproducibility Lab
- **Learning Objective:** วินิจฉัยกราฟ `EV > AV` vs `AV > EV` และเลือกวิธีแก้ไขให้ผ่าน `< 10%`
- **Duration:** 45s
- **Layout:** Interactive Appraiser `Xbar-R` Switcher (`INT-M9-L2-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M9-L2-01`
- **On Screen Text:** "สลับดูอาการ `EV > AV` กับ `AV > EV` แล้วเลือกวิธีแก้ให้ `%GRR < 10%`!"
- **Voice Over Script Ref:** `AUD-M9L2-S06`
- **Motion Specification:** Applying Ratchet Stop aligns Appraiser B's mean with A and C.
- **Trigger Logic:** Solve both modes (`+10 pts`).
- **Accessibility Notes:** Keyboard tab & radio controls.
- **Developer Notes:** Interactive reinforcement.

## Screen M9L2-S07 — Lesson 2 Knowledge Check (`KC-M9-L2`)
- **Learning Objective:** ทดสอบ Gage R&R (`M9-Q016`, `M9-Q023`)
- **Duration:** 30s
- **Layout:** Centered 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 2 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M9L2-S07`
- **Motion Specification:** Card flip validation.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 3.
- **Accessibility Notes:** Accessible quiz markup.
- **Developer Notes:** Progress 43%.

---

# LESSON M9-L3: `Bias`, `Linearity` & `Stability` (`9.3` – `9.5`)

## Screen M9L3-S01 — Accuracy vs Precision: Location & Variation Errors
- **Learning Objective:** แยก Precision (`Gage R&R`) ออกจาก Accuracy (`Bias, Linearity, Stability`)
- **Duration:** 35s
- **Layout:** 4-Target Bullseye Matrix (`AST-M9-009`)
- **Asset ID:** `AST-M9-009`
- **On Screen Text:** "Gage R&R ดูแค่ความเกาะกลุ่ม (Precision) — แต่ต้องเช็ก `Bias, Linearity, Stability` ด้วย!"
- **Voice Over Script Ref:** `AUD-M9L3-S01`
- **Motion Specification:** Four bullseyes illuminate Precision vs Accuracy combinations.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Alt-text describing 4 quadrants.
- **Developer Notes:** Sets up L3.

## Screen M9L3-S02 — Bias (`9.3`): Systematic Offset From Master Reference
- **Learning Objective:** คำนวณ `Bias = X̄_obs - Reference` และตรวจว่าต้อง Zero/Calibrate ใหม่หรือไม่
- **Duration:** 35s
- **Layout:** Master Gage Block + Offset Distribution (`AST-M9-010`)
- **Asset ID:** `AST-M9-010`
- **On Screen Text:** "`Bias = X̄_observed - Reference Value` (วัด Master ซ้ำ 10–15 ครั้ง)"
- **Voice Over Script Ref:** `AUD-M9L3-S02`
- **Motion Specification:** Distribution curve shifts off reference line; Zero-button snaps it back.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear formula callout.
- **Developer Notes:** Simple calibration link.

## Screen M9L3-S03 — Linearity (`9.4`): Is Bias Constant Across the Operating Range?
- **Learning Objective:** อ่านกราฟ `Bias vs Reference` จาก Master 5 ขนาดเพื่อตรวจ Linearity
- **Duration:** 40s
- **Layout:** 5-Point Linearity Regression Chart (`AST-M9-011`)
- **Asset ID:** `AST-M9-011`
- **On Screen Text:** "`Linearity` ตรวจ Bias ตลอดช่วงวัด (5 จุด) — ถ้าเอียงชันแสดงว่าเพี้ยนตามขนาด!"
- **Voice Over Script Ref:** `AUD-M9L3-S03`
- **Motion Specification:** Flat zero-slope line contrasted against tilted red slope line.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Axis labels clearly shown.
- **Developer Notes:** Important for wide-range micrometers/calipers.

## Screen M9L3-S04 — Stability (`9.5`): Consistency Over Time Using Control Chart
- **Learning Objective:** ใช้ `X̄-R` Control Chart กับ Master Check Standard เฝ้าระวัง Stability ของเกจ
- **Duration:** 40s
- **Layout:** Gage Stability `X̄-R` Chart (`AST-M9-012`)
- **Asset ID:** `AST-M9-012`
- **On Screen Text:** "`Stability` ใช้ Control Chart คุมเครื่องวัดเองด้วย Check Standard ทุกกะ/ทุกวัน!"
- **Voice Over Script Ref:** `AUD-M9L3-S04`
- **Motion Specification:** Daily master readings plot steadily then drift OOC triggering calibration recall.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Time-axis callouts.
- **Developer Notes:** Connects SPC back to MSA!

## Screen M9L3-S05 — Interactive Bias, Linearity & Stability Diagnostic
- **Learning Objective:** วินิจฉัยกราฟ Bias, Linearity, Stability และจับคู่วิธีแก้ไข
- **Duration:** 45s
- **Layout:** 3-Chart Diagnostic Matcher (`INT-M9-L3-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M9-L3-01`
- **On Screen Text:** "จับคู่กราฟทั้ง 3 อาการกับชื่อปัญหาและวิธีแก้ไขที่ถูกต้อง!"
- **Voice Over Script Ref:** `AUD-M9L3-S05`
- **Motion Specification:** Correct match locks green badge.
- **Trigger Logic:** Match 3/3 (`+10 pts`).
- **Accessibility Notes:** Keyboard select dropdowns.
- **Developer Notes:** Reinforces L3 concepts.

## Screen M9L3-S06 — Lesson 3 Knowledge Check (`KC-M9-L3`)
- **Learning Objective:** ทดสอบ Bias, Linearity, Stability (`M9-Q031`, `M9-Q038`)
- **Duration:** 30s
- **Layout:** Centered 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 3 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M9L3-S06`
- **Motion Specification:** Answer validation flip.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 4.
- **Accessibility Notes:** Accessible quiz controls.
- **Developer Notes:** Progress 64%.

---

# LESSON M9-L4: Gage R&R Report Workshop & Bridge to Module 10 (`9.6`)

## Screen M9L4-S01 — Anatomy of a Standard Gage R&R Report (6-Panel Format)
- **Learning Objective:** อ่าน 6 กราฟมาตรฐานใน Gage R&R Report (`Components, R, Xbar, By Part, By Appraiser, Interaction`)
- **Duration:** 40s
- **Layout:** 6-Panel Report Callout (`AST-M9-013`)
- **Asset ID:** `AST-M9-013`
- **On Screen Text:** "อ่าน Gage R&R Report ใน 60 วิ: `R` ต้องนิ่งในเส้น แต่ `Xbar` ต้องหลุดออกนอกเส้น!"
- **Voice Over Script Ref:** `AUD-M9L4-S01`
- **Motion Specification:** Magnifier spotlights each of 6 Minitab-style panels.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Panel numbers 1–6 labeled.
- **Developer Notes:** Crucial practical skill for engineers.

## Screen M9L4-S02 — Workshop Intro: Pin OD Gage R&R Study (`10 Parts × 3 × 3`)
- **Learning Objective:** ทำความเข้าใจโจทย์ Pin OD (`12.000 ± 0.100 mm`) และไฟล์ข้อมูล `workshop_m9_gage_rr_study.csv`
- **Duration:** 35s
- **Layout:** Workshop Brief + CSV Preview (`AST-M9-014`)
- **Asset ID:** `AST-M9-014`
- **On Screen Text:** `WORKSHOP:` "Pin OD `12.000 ± 0.100 mm` — อ่านผล Gage R&R 90 การวัด หาจุดพังและวิธีแก้!"
- **Voice Over Script Ref:** `AUD-M9L4-S02`
- **Motion Specification:** CSV rows highlight Appraiser A, B, C means.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** CSV download link labeled.
- **Developer Notes:** Loads `workshop_m9_gage_rr_study.csv`.

## Screen M9L4-S03 — Interactive Workshop: Reading & Fixing the Gage R&R Report
- **Learning Objective:** คำนวณ/ตรวจผล `%GRR = 51.25%`, `%Tol = 37.74%`, `ndc = 2`, ชี้เป้า `Appraiser B`, และเลือกวิธีแก้
- **Duration:** 75s
- **Layout:** Interactive Gage R&R Report Console (`INT-M9-L4-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M9-L4-01`
- **On Screen Text:** "วิเคราะห์รายงาน Pin OD Gage R&R: ตัวการคือ `EV` หรือ `AV` และใครวัดเพี้ยน?"
- **Voice Over Script Ref:** `AUD-M9L4-S03`
- **Motion Specification:** Selecting Appraiser B highlights `-0.022 mm` drop; applying Ratchet Stop updates `%GRR < 8%`.
- **Trigger Logic:** Complete 3 workshop checkpoints (`+15 pts`).
- **Accessibility Notes:** Tabular data + summary metrics.
- **Developer Notes:** Exact AIAG 4th Ed. math.

## Screen M9L4-S04 — Workshop Solution: Before vs After Gage R&R Improvement
- **Learning Objective:** ตรวจทานผล Before (`%GRR 51.25%`, `ndc 2`) vs After (`%GRR < 8%`, `ndc >= 15`)
- **Duration:** 35s
- **Layout:** Before/After Gage R&R Scorecard (`AST-M9-015`)
- **Asset ID:** `AST-M9-015`
- **On Screen Text:** "เฉลย: `AV >> EV` เพราะ Appraiser B กดแรง `-0.022 mm` → แก้ด้วย Ratchet Stop เหลือ `%GRR < 8%`!"
- **Voice Over Script Ref:** `AUD-M9L4-S04`
- **Motion Specification:** Red FAIL bars shrink into green `< 10%` PASS bars.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Full numeric summary.
- **Developer Notes:** Clean closure.

## Screen M9L4-S05 — Attribute MSA (`Kappa`) Quick Note
- **Learning Objective:** เข้าใจเกณฑ์ `Kappa >= 0.75` สำหรับการตรวจด้วยสายตา Pass/Fail
- **Duration:** 30s
- **Layout:** Kappa Scale Bar (`AST-M9-016`)
- **Asset ID:** `AST-M9-016`
- **On Screen Text:** "Attribute MSA (ตรวจสายตา): ใช้ `Kappa >= 0.75` + Visual Boundary Samples!"
- **Voice Over Script Ref:** `AUD-M9L4-S05`
- **Motion Specification:** Kappa meter highlights `< 0.40 Poor` vs `>= 0.75 Good`.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear threshold labels.
- **Developer Notes:** Completes MSA coverage.

## Screen M9L4-S06 — Module 9 Summary & Bridge to Module 10 (`Industrial Case Study`)
- **Learning Objective:** สรุปหัวใจ Module 9 และเตรียมพร้อมสู่ Capstone 4 กรณีศึกษาใน Module 10
- **Duration:** 35s
- **Layout:** Summary Recap + Module 10 Capstone Teaser (`AST-M9-017`)
- **Asset ID:** `AST-M9-017`
- **On Screen Text:** "ระบบวัดผ่าน MSA แล้ว! พร้อมลงสนามจริง 4 Industrial Cases ใน Module 10!"
- **Voice Over Script Ref:** `AUD-M9L4-S06`
- **Motion Specification:** MSA Shield locks onto Control Chart, illuminating 4 Case Study cards for Module 10.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Readable recap bullets.
- **Developer Notes:** Final bridge to Capstone.

## Screen M9L4-S07 — Lesson 4 Knowledge Check (`KC-M9-L4`)
- **Learning Objective:** ทดสอบการอ่าน Gage R&R Report & Attribute Kappa (`M9-Q046`, `M9-Q052`)
- **Duration:** 30s
- **Layout:** Centered 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 4 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M9L4-S07`
- **Motion Specification:** Card flip validation.
- **Trigger Logic:** Complete 2 questions to unlock Resources/Exam.
- **Accessibility Notes:** Accessible quiz controls.
- **Developer Notes:** Progress 93%.

## Screen M9L4-S08 — Module 9 Resources & Quick Checklist
- **Learning Objective:** ทบทวนเกณฑ์ AIAG MSA 4th Edition ครบทุกตัวก่อนสอบ
- **Duration:** 20s
- **Layout:** Quick Reference Card (`AST-M9-018`) + Cheat Sheet Link
- **Asset ID:** `AST-M9-018`
- **On Screen Text:** "ทบทวนสูตร & เกณฑ์ AIAG MSA ก่อนเข้าสู่ Final Exam!"
- **Voice Over Script Ref:** `AUD-M9L4-S08`
- **Motion Specification:** Checklist items check off smoothly.
- **Trigger Logic:** Click Start Exam.
- **Accessibility Notes:** Direct link to `08_cheatsheet_and_glossary.md`.
- **Developer Notes:** Pre-exam screen.

## Screen M9L4-S09 — Module 9 Final Assessment (`EXAM-M9`)
- **Learning Objective:** วัดผลสัมฤทธิ์ Module 9 (`>= 80%` จาก 20 ข้อสุ่มจาก `M9-Q001`–`M9-Q060`)
- **Duration:** 15m (Exam)
- **Layout:** Full-Screen Stratified Quiz Runner
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบประมวลผล Module 9 (20 ข้อ | ผ่าน 80%)"
- **Voice Over Script Ref:** `AUD-M9L4-S09`
- **Motion Specification:** Progress bar + Question Flagging + Weak-LO Remediation links.
- **Trigger Logic:** Submit triggers Module 9 Certificate & unlocks Module 10.
- **Accessibility Notes:** Keyboard navigation + screen-reader alert.
- **Developer Notes:** `5 L1 + 5 L2 + 5 L3 + 5 L4` stratified random draw.
