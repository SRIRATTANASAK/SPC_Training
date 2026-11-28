# Module 6 Production Storyboard (Developer & Web/LMS Ready)

**Module:** Module 6 — Control Chart Selection (`I-MR, X̄-R, X̄-S` & `p, np, c, u` + 10 Real Factory Scenarios)  
**Total Lessons:** 4 Lessons | **Total Screens:** 28 Screens (`M6L1-S01` .. `M6L4-S08`)  
**Estimated Duration:** ~42 minutes (including Variable Efficiency Lab, Attribute Staircase Lab, Selection Wizard & 10-Scenario Game)  
**Delivery Target:** Web Interactive Training (MDX/React + Thai Audio Sync) & SCORM 2004 Compatible

---

# LESSON M6-L1: Variable Data Control Charts (`6.1`)

## Screen M6L1-S01 — Welcome & Why Wrong Chart Selection Blinds Your Line
- **Learning Objective:** เข้าใจผลกระทบของการเลือก Control Chart ผิดชนิดต่อความแม่นยำในการจับ Special Cause
- **Duration:** 25s
- **Layout:** Hero Split (Left Misapplied Chart Warning `AST-M6-001` 60% | Right 4 Objectives 40%)
- **Asset ID:** `AST-M6-001`
- **On Screen Text:** `RIGHT CHART = CLEAR VISION` — "เลือกกราฟผิด เส้นเพี้ยนทั้งไลน์ — เลือกกราฟถูก จับปัญหาแม่น 100%!"
- **Voice Over Script Ref:** `AUD-M6L1-S01`
- **Motion Specification:** Wrong chart icon blurs signal into red alarm; switching to matched chart reveals crisp crystal signal.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** TH/EN captions + keyboard navigation.
- **Developer Notes:** Preload `AST-M6-002`.

## Screen M6L1-S02 — Variable Data Foundation & Subgroup Size Branches
- **Learning Objective:** จำแนกทางเลือกสาย Variable Data ตาม Rational Subgroup Size (`n = 1`, `n = 2–10`, `n > 10`)
- **Duration:** 35s
- **Layout:** 3-Branch Subgroup Tree (`AST-M6-002`: `n=1 → I-MR` | `n=2–10 → X̄-R` | `n>10 → X̄-S`)
- **Asset ID:** `AST-M6-002`
- **On Screen Text:** `Variable Data Split by Subgroup Size n` — "`n=1: I-MR` | `n=2–10: X̄-R` | `n>10: X̄-S`"
- **Voice Over Script Ref:** `AUD-M6L1-S02`
- **Motion Specification:** Caliper/micrometer data splits cleanly down 3 animated subgroup tracks.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Branch badges readable by screen readers.
- **Developer Notes:** Core Variable branch.

## Screen M6L1-S03 — `I-MR` Chart (`Individuals and Moving Range`, `n = 1`)
- **Learning Objective:** เข้าใจกรณีใช้งาน สูตร `E2 = 2.660` และข้อควรระวังของ `I-MR` Chart
- **Duration:** 45s
- **Layout:** Stacked `I` & `MR` Chart + Calculation Callout (`AST-M6-003`)
- **Asset ID:** `AST-M6-003`
- **On Screen Text:** `I-MR Chart (n = 1)` — "Batch / Destructive / Slow Cycle | ใช้ Moving Range (MR = |Xᵢ - Xᵢ₋₁|) กับ E₂ = 2.660"
- **Voice Over Script Ref:** `AUD-M6L1-S03`
- **Motion Specification:** Consecutive individual points pair up to generate moving-range bars below.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Full formula labels for screen readers.
- **Developer Notes:** Highlight sensitivity to non-normal skew.

## Screen M6L1-S04 — $\bar{X}$-$R$ Chart (`n = 2–10`, Recommended `n = 3–5`)
- **Learning Objective:** ประยุกต์ใช้ $\bar{X}$-$R$ Chart และทราบช่วงขนาดกลุ่มตัวอย่างที่เหมาะสม (`n = 2–10`)
- **Duration:** 40s
- **Layout:** Left Shop-Floor Subgroup Card (`n = 5`) | Right $\bar{X}$-$R$ Formula Highlight (`AST-M6-004`)
- **Asset ID:** `AST-M6-004`
- **On Screen Text:** `X̄-R Chart (n = 2–10)` — "พระเอกไลน์ผลิต คำนวณง่ายด้วย Range (Max–Min) ใช้คู่ A₂, D₃, D₄"
- **Voice Over Script Ref:** `AUD-M6L1-S04`
- **Motion Specification:** 5 parts in CNC tray condense into single $\bar{X}$ and $R$ coordinate pair.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear subgroup n callouts.
- **Developer Notes:** Connect back to Module 5 Workshop dataset (`n=5`).

## Screen M6L1-S05 — $\bar{X}$-$S$ Chart (`n > 10`, Standard Deviation Chart)
- **Learning Objective:** อธิบายเหตุผลที่ไม่ใช้ Range เมื่อ `n > 10` และใช้สูตร $\bar{X}$-$S$ (`A3, B3, B4, c4`)
- **Duration:** 45s
- **Layout:** Split Comparison (`AST-M6-005`: Range Losing Efficiency at `n=15` vs `S` Using All 15 Data Points)
- **Asset ID:** `AST-M6-005`
- **On Screen Text:** `X̄-S Chart (n > 10)` — "Range ทิ้งข้อมูลตรงกลาง! เมื่อ n > 10 ต้องใช้ Standard Deviation (S) พร้อม A₃, B₃, B₄"
- **Voice Over Script Ref:** `AUD-M6L1-S05`
- **Motion Specification:** 15 data points light up: Range greys out the 13 middle points, whereas SD illuminates all 15 points cleanly.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Formula contrast highlights.
- **Developer Notes:** Explicitly mention `B3 = 0` vs `B3 > 0` transition at `n >= 6`.

## Screen M6L1-S06 — Variable Chart Constants Reference (`n = 2..15`)
- **Learning Objective:** อ่านและใช้งานตารางค่าคงที่ `E2, A2, D3, D4, d2, A3, B3, B4, c4` ได้ถูกต้อง
- **Duration:** 35s
- **Layout:** Interactive-Ready Constants Table (`AST-M6-006`)
- **Asset ID:** `AST-M6-006`
- **On Screen Text:** "ตารางค่าคงที่ Variable Charts (`n = 2..15`) — เทียบ `A2/D3/D4` กับ `A3/B3/B4/c4`"
- **Voice Over Script Ref:** `AUD-M6L1-S06`
- **Motion Specification:** Rows for `n=2 (MR)`, `n=5 (R)`, and `n=15 (S)` highlight sequentially.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Proper HTML `<table>` headers.
- **Developer Notes:** Exact numbers match `08_cheatsheet_and_glossary.md`.

## Screen M6L1-S07 — Interactive Variable Chart & Subgroup Size Efficiency Lab
- **Learning Objective:** ทดลองเปรียบเทียบผลลัพธ์เมื่อใช้ `I-MR`, `X̄-R`, และ `X̄-S` ตามขนาด `n`
- **Duration:** 55s
- **Layout:** Interactive 3-Mode Variable Chart Lab (`INT-M6-L1-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M6-L1-01`
- **On Screen Text:** "ลองสลับโหมด `n = 1 (I-MR)`, `n = 5 (X̄-R)`, และ `n = 15 (X̄-S)` ดูความกว้าง UCL/LCL และความนิ่งในการประมาณ σ"
- **Voice Over Script Ref:** `AUD-M6L1-S07`
- **Motion Specification:** Chart limits recalculate smoothly as `n` increases.
- **Trigger Logic:** Test all 3 chart modes (`+10 pts`).
- **Accessibility Notes:** Keyboard tab switcher + ARIA table.
- **Developer Notes:** Shows R efficiency drop at `n=15`.

## Screen M6L1-S08 — Lesson 1 Knowledge Check (`KC-M6-L1`)
- **Learning Objective:** ทดสอบความเข้าใจ `I-MR`, `X̄-R`, `X̄-S` (`M6-Q001`, `M6-Q008`)
- **Duration:** 30s
- **Layout:** Centered 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 1 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M6L1-S08`
- **Motion Specification:** Card flip feedback.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 2.
- **Accessibility Notes:** Keyboard accessible radio buttons.
- **Developer Notes:** Progress 28%.

---

# LESSON M6-L2: Attribute Control Charts (`6.2`)

## Screen M6L2-S01 — When & Why We Use Attribute Control Charts
- **Learning Objective:** เข้าใจบริบทการใช้งาน Attribute Charts และความต้องการขนาดตัวอย่างใหญ่ (`n = 50–200+`)
- **Duration:** 35s
- **Layout:** Visual Inspection Floor Graphic (`AST-M6-007`) + Sample Size Trade-off Note
- **Asset ID:** `AST-M6-007`
- **On Screen Text:** `Attribute Control Charts` — "ใช้กับข้อมูลนับ Pass/Fail หรือรอยตำหนิ — ต้องใช้ n ใหญ่พอ (`50–200+` ชิ้น)"
- **Voice Over Script Ref:** `AUD-M6L2-S01`
- **Motion Specification:** Visual inspection conveyor counters populate daily attribute tally bars.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear alt descriptions.
- **Developer Notes:** Warn against throwing away variable measurements.

## Screen M6L2-S02 — Defective vs Defect (จุดตายที่ห้ามสับสน!)
- **Learning Objective:** แยกแยะ **Defective (ชิ้นเสีย — Binomial)** ออกจาก **Defect (จุดบกพร่อง — Poisson)** ได้ 100%
- **Duration:** 45s
- **Layout:** Visual Example Card (`AST-M6-008`: 1 PCB with 5 Scratches = `1 Defective` vs `5 Defects`) + Comparison Table
- **Asset ID:** `AST-M6-008`
- **On Screen Text:** `1 PCB ที่มี 5 รอยตำหนิ` = **`1 Defective (p/np)`** แต่ = **`5 Defects (c/u)`**!
- **Voice Over Script Ref:** `AUD-M6L2-S02`
- **Motion Specification:** Highlight pins point to 5 distinct defects on 1 board, morphing left to `1 Bad Unit` and right to `5 Defect Pins`.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** High-contrast comparison icons.
- **Developer Notes:** Most commonly missed attribute concept.

## Screen M6L2-S03 — `p` Chart vs `np` Chart (Defective Units — Binomial)
- **Learning Objective:** คำนวณและเลือกใช้ระหว่าง **`p` Chart** (สัดส่วน, `n` เปลี่ยนได้) กับ **`np` Chart** (จำนวนชิ้น, `n` ต้องคงที่)
- **Duration:** 45s
- **Layout:** Dual Chart Comparison (`AST-M6-009`: Left `p` Staircase Limits | Right `np` Flat Limits)
- **Asset ID:** `AST-M6-009`
- **On Screen Text:** `p Chart (n เปลี่ยนได้ — Staircase UCL/LCL)` vs `np Chart (n ต้องคงที่ 100% — อ่านเป็นจำนวนชิ้น)`
- **Voice Over Script Ref:** `AUD-M6L2-S03`
- **Motion Specification:** Varying bar sample sizes trigger animated staircase limit jumps on `p` chart while constant `n` stays flat on `np`.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Explicit staircase labels.
- **Developer Notes:** Exact formulas match Workshop Part B.

## Screen M6L2-S04 — `c` Chart vs `u` Chart (Count of Defects — Poisson)
- **Learning Objective:** คำนวณและเลือกใช้ระหว่าง **`c` Chart** (หน่วยตรวจคงที่) กับ **`u` Chart** (จุดตำหนิต่อหน่วย, หน่วยตรวจเปลี่ยนได้)
- **Duration:** 45s
- **Layout:** Dual Chart Comparison (`AST-M6-010`: Left Car Body Fixed Unit `c` Chart | Right Varying PCB Panel Lot `u` Chart)
- **Asset ID:** `AST-M6-010`
- **On Screen Text:** `c Chart (พื้นที่/หน่วยคงที่ 100%)` vs `u Chart (Defects per Unit — ขนาดตรวจเปลี่ยนได้)`
- **Voice Over Script Ref:** `AUD-M6L2-S04`
- **Motion Specification:** Single car silhouette feeds flat `c` chart; varying PCB panel trays feed staircase `u` chart.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear Poisson variance labels.
- **Developer Notes:** Connects straight to `LOT-17` insight.

## Screen M6L2-S05 — Attribute Zero-Bounds (`LCL < 0`) & Overdispersion
- **Learning Objective:** จัดการค่า **`LCL < 0` บน Attribute Charts** (ตัดทิ้ง/ปัดเป็น 0) และรู้ข้อจำกัด Big-`n` Overdispersion (`Laney p'/u'`)
- **Duration:** 40s
- **Layout:** Attribute Zero-Floor Guardrail Visual (`AST-M6-011`)
- **Asset ID:** `AST-M6-011`
- **On Screen Text:** "Attribute ติดลบไม่ได้! เมื่อ `LCL < 0` ให้ปัดเป็น `0` (ไม่ Valid) และระวัง Big-n Overdispersion (`Laney p'/u'`)"
- **Voice Over Script Ref:** `AUD-M6L2-S05`
- **Motion Specification:** Negative binomial lower bound hits red zero-wall and snaps cleanly onto `0` floor; Laney adjustment widens overly tight high-n limits.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Links cleanly back to Module 5 `M5L4-S04`.
- **Developer Notes:** Ties Curriculum together seamlessly.

## Screen M6L2-S06 — Interactive Defective vs Defect & `p/np/c/u` Calculator
- **Learning Objective:** ทดลองแยกแยะข้อมูล Defective vs Defect และดูเส้น Staircase UCL/LCL เปลี่ยนตาม `n_i`
- **Duration:** 55s
- **Layout:** Interactive 4-Chart Sandbox (`INT-M6-L2-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M6-L2-01`
- **On Screen Text:** "สลับปรับ Sample Size (คงที่ vs แปรผัน) และดูว่าทำไม Lot ที่มี `p` ปกติอาจพังบน `u` Chart!"
- **Voice Over Script Ref:** `AUD-M6L2-S06`
- **Motion Specification:** Dynamic staircase recalculation on slider/toggle changes.
- **Trigger Logic:** Test `p`, `np`, `c`, `u` modes (`+10 pts`).
- **Accessibility Notes:** ARIA live updates.
- **Developer Notes:** Preview of Workshop Part B mechanics.

## Screen M6L2-S07 — Lesson 2 Knowledge Check (`KC-M6-L2`)
- **Learning Objective:** ทดสอบ Defective vs Defect และ `p/np/c/u` (`M6-Q019`, `M6-Q027`)
- **Duration:** 30s
- **Layout:** 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 2 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M6L2-S07`
- **Motion Specification:** Card flip feedback.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 3.
- **Accessibility Notes:** Keyboard radio controls.
- **Developer Notes:** Progress 54%.

---

# LESSON M6-L3: Control Chart Selection Matrix (`6.3`)

## Screen M6L3-S01 — The Master 3-Step Control Chart Decision Tree
- **Learning Objective:** ใช้ Decision Tree 3 คำถามเลือก Control Chart ทั้ง 7 ชนิดได้คล่องแคล่ว
- **Duration:** 40s
- **Layout:** Full-Width Animated Flowchart (`AST-M6-012`)
- **Asset ID:** `AST-M6-012`
- **On Screen Text:** `Decision Tree 3 ขั้น:` `1) Variable / Attribute` → `2) n Size / Defective vs Defect` → `3) Constant vs Varying`
- **Voice Over Script Ref:** `AUD-M6L3-S01`
- **Motion Specification:** Glowing pathway traces all 7 terminal chart nodes sequentially.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Structured text tree fallback.
- **Developer Notes:** Matches Cheat Sheet flowchart.

## Screen M6L3-S02 — Complete Control Chart Selection Matrix
- **Learning Objective:** อ่านและเปรียบเทียบ 7 Classic Control Charts พร้อมสูตรหลักและตัวอย่างหน้างาน
- **Duration:** 40s
- **Layout:** Master 7-Row Reference Matrix (`AST-M6-013`)
- **Asset ID:** `AST-M6-013`
- **On Screen Text:** `Master Matrix:` `I-MR | X̄-R | X̄-S | p | np | c | u`
- **Voice Over Script Ref:** `AUD-M6L3-S02`
- **Motion Specification:** Variable rows glow blue; Attribute Defective glow amber; Attribute Defect glow emerald.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Full table semantic tags.
- **Developer Notes:** Single-screen executive reference.

## Screen M6L3-S03 — Top 5 Chart-Selection Mistakes in Real Factories
- **Learning Objective:** ป้องกันความผิดพลาดยอดฮิต 5 ข้อในการเลือก Control Chart หน้าไลน์ผลิต
- **Duration:** 45s
- **Layout:** 5 Warning Audit Cards (`AST-M6-014`)
- **Asset ID:** `AST-M6-014`
- **On Screen Text:** "ระวัง 5 ความผิดพลาดหน้างาน: แอบจับ `n=1` มารวม, ใช้ `R` ที่ `n=20`, ใช้ `np` เมื่อ `n` แปรผัน, สลับ `p/u`, ทิ้ง Variable มาทำ Pass/Fail!"
- **Voice Over Script Ref:** `AUD-M6L3-S03`
- **Motion Specification:** Red audit stamps flip into green corrective fixes.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear icon/text pairing.
- **Developer Notes:** Draws directly from shop-floor audit findings.

## Screen M6L3-S04 — Interactive Control Chart Selection Wizard
- **Learning Objective:** ใช้ Selection Wizard เลือก Control Chart จากเงื่อนไขหน้างานจริง
- **Duration:** 50s
- **Layout:** Interactive 3-Step Guided Wizard (`INT-M6-L3-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M6-L3-01`
- **On Screen Text:** "ลองป้อนลักษณะงานหน้าไลน์ให้ Selection Wizard ช่วยแนะนำ Chart + สูตร + กฎ LCL ที่เหมาะสม"
- **Voice Over Script Ref:** `AUD-M6L3-S04`
- **Motion Specification:** Wizard cards transition step-by-step into final recommendation sheet.
- **Trigger Logic:** Complete at least 3 distinct path simulations (`+10 pts`).
- **Accessibility Notes:** Full keyboard stepper navigation.
- **Developer Notes:** Core Roadmap deliverable for Module 6.

## Screen M6L3-S05 — Lesson 3 Knowledge Check (`KC-M6-L3`)
- **Learning Objective:** ทดสอบการตัดสินใจเลือก Chart และจุดผิดพลาด (`M6-Q037`, `M6-Q042`)
- **Duration:** 30s
- **Layout:** 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 3 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M6L3-S05`
- **Motion Specification:** Card flip feedback.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 4 Workshop.
- **Accessibility Notes:** Keyboard radio controls.
- **Developer Notes:** Progress 72%.

---

# LESSON M6-L4: Workshop — 10 Real Factory Scenarios & Calculation (`6.4`)

## Screen M6L4-S01 — Workshop Part A: 10 Real Factory Chart-Selection Scenarios
- **Learning Objective:** ตัดสินใจเลือก Control Chart จาก Case Study โรงงานจริง 10 สถานการณ์ (`SCEN-01..10`)
- **Duration:** 120s
- **Layout:** 10-Card Interactive Scenario Game (`INT-M6-L4-01`) + CSV Export
- **Asset ID:** N/A | **Interactive ID:** `INT-M6-L4-01`
- **On Screen Text:** "Workshop Part A: เลือก Control Chart ให้ตรงกับ 10 สถานการณ์โรงงานจริง (`เกณฑ์ผ่าน >= 8/10`)!"
- **Voice Over Script Ref:** `AUD-M6L4-S01`
- **Motion Specification:** Scenario badges unlock instant engineering rationale feedback upon answer submission.
- **Trigger Logic:** Score `>= 8/10` (`+15 pts`).
- **Accessibility Notes:** Full keyboard card selector + rationale table.
- **Developer Notes:** Driven by `data/workshop_m6_scenarios_10_cases.csv`.

## Screen M6L4-S02 — Workshop Part A Solution: Scenarios 1–5
- **Learning Objective:** สรุปคำตอบและเหตุผลทางวิศวกรรมของสถานการณ์ `SCEN-01` ถึง `SCEN-05`
- **Duration:** 45s
- **Layout:** 5-Row Annotated Solution Grid (`AST-M6-015`)
- **Asset ID:** `AST-M6-015`
- **On Screen Text:** "เฉลย Case 1–5: Temp `I-MR` | CNC `X̄-R` | Wafer `I-MR` (ค่าเฉลี่ยต่อแผ่น + chart ภายในแผ่น) | PCB Defects `u` | Fixed Motors `np`"
- **Voice Over Script Ref:** `AUD-M6L4-S02`
- **Motion Specification:** Highlight pins sequentially verify data type + sample size logic for Cases 1–5.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Structured grid text.
- **Developer Notes:** Exact match with `workshop_m6_scenarios_10_cases.csv`.

## Screen M6L4-S03 — Workshop Part A Solution: Scenarios 6–10
- **Learning Objective:** สรุปคำตอบและเหตุผลทางวิศวกรรมของสถานการณ์ `SCEN-06` ถึง `SCEN-10`
- **Duration:** 45s
- **Layout:** 5-Row Annotated Solution Grid (`AST-M6-016`)
- **Asset ID:** `AST-M6-016`
- **On Screen Text:** "เฉลย Case 6–10: Incoming `p` | Paint `c` | Pull Test `I-MR` | 12-Spindle `I-MR` แยกราย Spindle | Mold Weight `X̄-R`"
- **Voice Over Script Ref:** `AUD-M6L4-S03`
- **Motion Specification:** Highlight pins sequentially verify logic for Cases 6–10.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Structured grid text.
- **Developer Notes:** Completes all 10 scenarios.

## Screen M6L4-S04 — Workshop Part B Lab: `p` Chart & `u` Chart Calculation (`20 Lots`)
- **Learning Objective:** วิเคราะห์ข้อมูลจริง `workshop_m6_attribute_inspection.csv` คำนวณ Staircase Limits, ตรวจ `LCL < 0` และจับ OOC Lots
- **Duration:** 90s
- **Layout:** Dual Attribute Staircase Chart Analyzer (`INT-M6-L4-02`) + CSV Download + 4 Calculation Questions
- **Asset ID:** N/A | **Interactive ID:** `INT-M6-L4-02`
- **On Screen Text:** "Workshop Part B: ข้อมูลตรวจรับ 20 Lots (`∑n = 2,835`) — คำนวณ `p` Chart vs `u` Chart & จับ Lot ผิดปกติ!"
- **Voice Over Script Ref:** `AUD-M6L4-S04`
- **Motion Specification:** Interactive `p` and `u` charts render staircase limits across `LOT-01..20`.
- **Trigger Logic:** Score `>= 3/4` on Part B diagnostic check (`+10 pts`).
- **Accessibility Notes:** Complete 20-lot data table fallback.
- **Developer Notes:** Verified exact numbers in `07_workshop_guide.md`.

## Screen M6L4-S05 — Workshop Part B Solution: Staircase Limits & Why `LOT-17` Differs
- **Learning Objective:** สรุปผลการจับ `LOT-12` บน `p` Chart (`0.0933 > 0.0688`) และ `LOT-17` บน `u` Chart (`0.1714 > 0.1290`) พร้อม `LCL < 0 → 0`
- **Duration:** 45s
- **Layout:** Annotated Dual `p` & `u` Solution Dashboard (`AST-M6-017`)
- **Asset ID:** `AST-M6-017`
- **On Screen Text:** "เฉลย: `p` Chart จับ `LOT-12` (ชิ้นเสีย 9.33%), `u` Chart จับ `LOT-17` (จุดเสียพุ่ง 0.1714 แม้ผ่าน `p` Chart!)"
- **Voice Over Script Ref:** `AUD-M6L4-S05`
- **Motion Specification:** `LOT-12` flashes red on top `p` panel while `LOT-17` stays green on `p` then flashes red on bottom `u` panel.
- **Trigger Logic:** Review solution to continue.
- **Accessibility Notes:** Explicit numerical callout table.
- **Developer Notes:** Powerful real-world demonstration of `p` vs `u` distinction.

## Screen M6L4-S06 — Control Plan Integration Playbook
- **Learning Objective:** เชื่อมโยง Control Chart ที่เลือกเข้าสู่ตาราง **Control Plan** ของโรงงาน
- **Duration:** 35s
- **Layout:** Control Plan Row Blueprint (`AST-M6-018`)
- **Asset ID:** `AST-M6-018`
- **On Screen Text:** `Control Plan Mapping:` `CTQ + Spec → Chart Type + Subgroup n → Mandatory & Optional Rules → Reaction Plan`
- **Voice Over Script Ref:** `AUD-M6L4-S06`
- **Motion Specification:** Attributes auto-populate into standardized AIAG Control Plan columns.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Accessible table layout.
- **Developer Notes:** Direct bridge into Module 7 implementation.

## Screen M6L4-S07 — Module 6 Summary & Bridge to Module 7
- **Learning Objective:** สรุปภาพรวมทั้ง 7 Control Charts และปูทางสู่ Module 7: การวางระบบ SPC ในสายการผลิตจริง
- **Duration:** 25s
- **Layout:** Bridge Milestone Card (`AST-M6-019`)
- **Asset ID:** `AST-M6-019`
- **On Screen Text:** "จบ Module 6 → ก้าวต่อไปใน Module 7: SPC Implementation Roadmap & Manufacturing Line Control!"
- **Voice Over Script Ref:** `AUD-M6L4-S07`
- **Motion Specification:** Chart selection tree plugs neatly into Factory Line Architecture icon.
- **Trigger Logic:** Click to enter Final Exam.
- **Accessibility Notes:** Summary checklist.
- **Developer Notes:** Smooth transition cue.

## Screen M6L4-S08 — Module 6 Final Assessment (`EXAM-M6`)
- **Learning Objective:** วัดผลสัมฤทธิ์ Module 6 (เกณฑ์ผ่าน 80% = 16/20 ข้อ)
- **Duration:** 10–15 min
- **Layout:** Exam Runner (20 Randomized Questions from `M6-Q001..M6-Q060`)
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบประมวลผล Module 6 (สุ่ม 20 ข้อ จากคลัง 60 ข้อ | เกณฑ์ผ่าน 80% | ทำซ้ำได้ไม่จำกัด)"
- **Voice Over Script Ref:** `AUD-M6L4-S08`
- **Motion Specification:** Progress rings by lesson (`L1..L4`).
- **Trigger Logic:** Stratify `5 L1 + 5 L2 + 5 L3 + 5 L4 = 20 Qs`; Pass `>= 80%` unlocks Module 7.
- **Accessibility Notes:** Untimed accessible exam.
- **Developer Notes:** Save `var_exam_score`.
