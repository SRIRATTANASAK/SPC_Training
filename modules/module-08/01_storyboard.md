# Module 8 Production Storyboard (Developer & Web/LMS Ready)

**Module:** Module 8 — SPC Problem Solving (`OCAP`, `7 QC Tools`, `5 Why / FTA / Poka-Yoke`, `PDCA / Kaizen / DMAIC / 8D`)  
**Total Lessons:** 4 Lessons | **Total Screens:** 28 Screens (`M8L1-S01` .. `M8L4-S09`)  
**Estimated Duration:** ~45 minutes (including OCAP Router, 7 QC Tools Drill-Down, Fishbone Builder, 5 Why/FTA Trainer & 2-Part Production Line Case Workshop)  
**Delivery Target:** Web Interactive Training (MDX/React + Thai Audio Sync) & SCORM 2004 Compatible

---

# LESSON M8-L1: Out of Control Action Plan (`OCAP`) (`8.1`)

## Screen M8L1-S01 — Welcome: When the Alarm Rings, What Happens Next?
- **Learning Objective:** เชื่อมโยงสัญญาณ OOC จาก Control Plan (Module 7) เข้าสู่ระบบปิดปัญหาถาวรตามมาตรฐาน AIAG SPC & JEDEC `JESD557`
- **Duration:** 25s
- **Layout:** Hero Split (Left Live Flashing OOC Alarm Routing to Problem Solving Toolkit `AST-M8-001` 60% | Right 4 Objectives 40%)
- **Asset ID:** `AST-M8-001`
- **On Screen Text:** `SPC PROBLEM SOLVING` — "รู้ว่าจุดหลุดยังไม่พอ ต้องปิดต้นตอไม่ให้กลับมาเป็นซ้ำ!"
- **Voice Over Script Ref:** `AUD-M8L1-S01`
- **Motion Specification:** Red OOC dot pulses on Control Chart and flows into 4 glowing badges (`OCAP`, `7 QC Tools`, `5 Why/FTA`, `PDCA/8D`).
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** TH/EN captions + keyboard focus order.
- **Developer Notes:** Preload `AST-M8-002`.

## Screen M8L1-S02 — Anatomy of OCAP: The 5-Gate Closed-Loop Flow
- **Learning Objective:** เข้าใจโครงสร้างและลำดับ 5 ประตูของ Out of Control Action Plan (`OCAP`)
- **Duration:** 40s
- **Layout:** 5-Gate Horizontal Flowchart (`AST-M8-002`)
- **Asset ID:** `AST-M8-002`
- **On Screen Text:** `1. Detection` → `2. Contain Backtrack` → `3. Verify Data/Gage` → `4. RCA` → `5. CAPA & Verify SPC`
- **Voice Over Script Ref:** `AUD-M8L1-S02`
- **Motion Specification:** Flowchart gates illuminate sequentially from alarm trigger through verified Control Plan closure.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Screen-reader flowchart sequence labels.
- **Developer Notes:** Backbone flow for entire Module 8.

## Screen M8L1-S03 — Gates 1–3 Deep Dive: Verify First, Contain Backwards, Never Adjust Blindly
- **Learning Objective:** ป้องกัน Tampering ด้วยการ Verify ข้อมูล/เครื่องวัดก่อนปรับเครื่อง และกักกันย้อนหลัง `100% Backtrack`
- **Duration:** 45s
- **Layout:** Split Comparison (`AST-M8-003`: Panic Offset Turn = Tampering vs Structured Containment + Verify)
- **Asset ID:** `AST-M8-003`
- **On Screen Text:** "ห้ามหมุน Offset มั่วก่อน Verify! กักกันย้อนหลังถึงจุดดีล่าสุด + เช็กเกจ/ตัวเลขก่อน"
- **Voice Over Script Ref:** `AUD-M8-003`
- **Motion Specification:** Red hand turning knob wildly widens scatter; green checklist pauses line, backtracks lot basket, verifies gage first.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear visual warning markers.
- **Developer Notes:** Emphasizes JEDEC Auto Hold & Backtrack discipline.

## Screen M8L1-S04 — Mapping Control Chart Signatures to Likely Root Causes
- **Learning Objective:** แปลงลักษณะอาการบน Control Chart (`Spike, Trend, Shift, R > UCL_R, Cyclic`) เป็นแนวทางสืบค้นเบื้องต้น
- **Duration:** 40s
- **Layout:** Interactive-Style Reference Table + Mini Sparklines (`AST-M8-004`)
- **Asset ID:** `AST-M8-004`
- **On Screen Text:** `Chart Signal Map:` "อ่านรูปร่างจุดหลุดให้ขาด เพื่อยิงจุดตรวจแรกใน OCAP ให้แม่น!"
- **Voice Over Script Ref:** `AUD-M8-004`
- **Motion Specification:** Each of 5 chart signatures highlights paired inspection target icon.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Table row headers scoped for screen readers.
- **Developer Notes:** Connects M5 pattern literacy to M8 problem solving.

## Screen M8L1-S05 — Interactive OCAP Gate & Containment Router
- **Learning Objective:** ฝึกตัดสินใจเดินขั้นตอนใน OCAP 4 เคสหน้างานจริงโดยไม่เกิด Tampering
- **Duration:** 50s
- **Layout:** Interactive Branching Flowchart Simulator (`INT-M8-L1-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M8-L1-01`
- **On Screen Text:** "เลือก Route การจัดการ OOC ที่ถูกต้องทั้ง 4 กรณี!"
- **Voice Over Script Ref:** `AUD-M8-L1-05`
- **Motion Specification:** Selected action animates gate color (green advance / red tampering warning).
- **Trigger Logic:** Complete 4/4 scenarios (`+10 pts`).
- **Accessibility Notes:** Keyboard-selectable action cards.
- **Developer Notes:** Reinforces Gate 1–3 discipline before diving into 7 QC Tools.

## Screen M8L1-S06 — Lesson 1 Knowledge Check (`KC-M8-L1`)
- **Learning Objective:** ทดสอบความเข้าใจ OCAP (`M8-Q001`, `M8-Q008`)
- **Duration:** 30s
- **Layout:** Centered 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 1 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M8L1-S06`
- **Motion Specification:** Answer validation flip.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 2.
- **Accessibility Notes:** Standard accessible quiz controls.
- **Developer Notes:** Progress 21%.

---

# LESSON M8-L2: SPC + 7 QC Tools (`8.2`)

## Screen M8L2-S01 — Control Chart Tells "WHEN", 7 QC Tools Tell "WHO & WHY"
- **Learning Objective:** เห็นภาพรวมการประสานงานของ Control Chart กับอีก 6 เครื่องมือใน 7 QC Tools เพื่อสืบค้นต้นเหตุ
- **Duration:** 35s
- **Layout:** Hub-and-Spoke Investigation Map (`AST-M8-005`)
- **Asset ID:** `AST-M8-005`
- **On Screen Text:** `SPC + 7 QC Tools:` "Control Chart บอก 'เมื่อไร' — 6 เครื่องมือที่เหลือช่วยจับ 'ตัวการ'"
- **Voice Over Script Ref:** `AUD-M8L2-S01`
- **Motion Specification:** Control Chart triggers magnifying glass sweeping sequentially across Check Sheet, Stratification, Pareto, Histogram, Fishbone, and Scatter.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear numbered sequence badges.
- **Developer Notes:** Note Stratification is explicitly highlighted alongside classic 7 QC Tools.

## Screen M8L2-S02 — Tools 1–3: Check Sheet, Stratification & Dual Pareto (`Count` vs `COPQ`)
- **Learning Objective:** ใช้การแยกชั้น (`Stratification`) และ **Dual Pareto (`Count` เทียบ `Cost`)** คัดกรอง `Vital Few`
- **Duration:** 45s
- **Layout:** Split Panel (`AST-M8-006`: Left Mixed vs Stratified Fixture/Shift | Right Count Pareto vs Cost COPQ Pareto)
- **Asset ID:** `AST-M8-006`
- **On Screen Text:** "แยกชั้นข้อมูลให้ขาด แล้วดู Pareto ทั้ง 'จำนวนชิ้น' และ 'มูลค่าความเสียหาย (COPQ)'!"
- **Voice Over Script Ref:** `AUD-M8L2-S02`
- **Motion Specification:** Mixed gray bar splits into red `FIX-B` vs blue `FIX-A`; Pareto bars sort tallest-first with 80% cumulative curve.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Data values displayed inside bar labels.
- **Developer Notes:** Mirrors `workshop_m8_defect_pareto.csv` structure (`56%` count vs `81.6%` cost).

## Screen M8L2-S03 — Tools 4–5: Histogram Diagnostics & Fishbone (`4M1E + Measurement`)
- **Learning Objective:** อ่านเบาะแส Bimodal/Skew บน Histogram และระดมสาเหตุครบ 6 หมวดบนก้างปลา (`4M1E+M`)
- **Duration:** 45s
- **Layout:** Left Bimodal Histogram Morph (`AST-M8-007`) | Right 6-Branch Fishbone Diagram
- **Asset ID:** `AST-M8-007`
- **On Screen Text:** "Histogram 2 ยอดฟ้องการปนกันของ 2 แหล่งผลิต! — แตกสมมติฐานด้วยก้างปลา 6M"
- **Voice Over Script Ref:** `AUD-M8L2-S03`
- **Motion Specification:** Twin-peak histogram overlays two distributions (`FIX-A` & `FIX-B`); Fishbone branches expand cleanly.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Alt-text describing bimodal peaks and 6 Fishbone categories.
- **Developer Notes:** `Measurement` branch foreshadows Module 9.

## Screen M8L2-S04 — Tools 6–7: Scatter Diagram (`r` Correlation vs Causation) & Control Chart Proof
- **Learning Objective:** แปลค่า `r` ใน Scatter Diagram แยกปัจจัยจริงออกจากตัวแปรลวง และพิสูจน์ผลกลับบน Control Chart
- **Duration:** 40s
- **Layout:** Dual Scatter Comparison (`AST-M8-008`: Strong Negative `r = -0.996` vs Flat Noise `r = -0.207`)
- **Asset ID:** `AST-M8-008`
- **On Screen Text:** "`Correlation != Causation` — เช็กค่า `r` คัดปัจจัย แล้วทดสอบยืนยันกลับบน Control Chart!"
- **Voice Over Script Ref:** `AUD-M8L2-S04`
- **Motion Specification:** Tight regression line highlights `Clamp Pressure` while flat cloud fades out `Coolant Temp`.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** High-contrast dots and regression line labels.
- **Developer Notes:** Prepares exact metrics used in Workshop Part A.

## Screen M8L2-S05 — Interactive 7 QC Tools Drill-Down Explorer
- **Learning Objective:** ฝึกเชื่อมโยงหลักฐานข้าม Stratification, Pareto (`Count` vs `COPQ`), Histogram และ Scatter
- **Duration:** 50s
- **Layout:** 4-Tab Interactive Investigation Canvas (`INT-M8-L2-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M8-L2-01`
- **On Screen Text:** "คลิกเจาะข้อมูลจากกราฟ OOC ทีละเครื่องมือเพื่อหาตัวการหลัก!"
- **Voice Over Script Ref:** `AUD-M8L2-S05`
- **Motion Specification:** Switching tool tabs reveals synchronized highlights across the same incident dataset.
- **Trigger Logic:** Inspect all 4 tabs and answer diagnostic checkpoint (`+10 pts`).
- **Accessibility Notes:** Accessible tablist navigation.
- **Developer Notes:** Interactive practice before Workshop.

## Screen M8L2-S06 — Interactive Fishbone `4M1E+M` Builder
- **Learning Objective:** จัดหมวดหมู่ปัจจัยหน้างาน 8 รายการเข้าก้างปลา `4M1E + Measurement` ได้แม่นยำ
- **Duration:** 45s
- **Layout:** Drag-and-Drop / Click-to-Assign Fishbone Spine (`INT-M8-L2-02`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M8-L2-02`
- **On Screen Text:** "จัดกลุ่มปัจจัยเสี่ยง 8 ข้อลงบนก้างปลาทั้ง 6 หมวดให้ถูกต้อง!"
- **Voice Over Script Ref:** `AUD-M8L2-S06`
- **Motion Specification:** Chips snap onto corresponding Fishbone bones with immediate validation glow.
- **Trigger Logic:** Score `>= 7/8` (`+10 pts`).
- **Accessibility Notes:** Keyboard menu assignment alternative to dragging.
- **Developer Notes:** Reinforces distinguishing `Method` vs `Machine` vs `Measurement`.

## Screen M8L2-S07 — Lesson 2 Knowledge Check (`KC-M8-L2`)
- **Learning Objective:** ทดสอบการใช้ 7 QC Tools ร่วมกับ SPC (`M8-Q016`, `M8-Q023`)
- **Duration:** 30s
- **Layout:** Centered 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 2 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M8L2-S07`
- **Motion Specification:** Card feedback animation.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 3.
- **Accessibility Notes:** Accessible radio options.
- **Developer Notes:** Progress 46%.

---

# LESSON M8-L3: Deep Root Cause Analysis (`5 Why`, `Is/Is-Not`, `FTA` & `Poka-Yoke`) (`8.3`)

## Screen M8L3-S01 — Direct Cause vs Technical Root Cause vs Systemic Cause
- **Learning Objective:** แยกอาการเฉพาะหน้า (`Symptom`) ออกจากต้นตอเทคนิค (`Root Cause`) และช่องโหว่เชิงระบบ (`Systemic Cause`)
- **Duration:** 40s
- **Layout:** 3-Layer Iceberg Diagram (`AST-M8-009`)
- **Asset ID:** `AST-M8-009`
- **On Screen Text:** "แก้แค่อาการเหนือน้ำ ปัญหาจะกลับมาอีก! ต้องขุดให้ถึง Root & Systemic Cause ใต้น้ำ"
- **Voice Over Script Ref:** `AUD-M8L3-S01`
- **Motion Specification:** Waterline reveals submerged mechanical seal failure & missing PM/Interlock layers.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear depth level text.
- **Developer Notes:** Core RCA mindset slide.

## Screen M8L3-S02 — 3-Legged 5 Why Analysis & The "Therefore Test"
- **Learning Objective:** เขียน 5 Why ครบทั้ง 3 ขา (`Occurrence, Detection, Systemic`) และตรวจความสมเหตุสมผลด้วย `Therefore Test`
- **Duration:** 45s
- **Layout:** 3-Track 5 Why Ladder with Bidirectional Arrows (`AST-M8-010`)
- **Asset ID:** `AST-M8-010`
- **On Screen Text:** `3-Legged 5 Why:` "เกิดได้อย่างไร? หลุดรอดได้อย่างไร? ระบบปล่อยผ่านได้อย่างไร? + ทวนขึ้นด้วย 'ดังนั้น...'"
- **Voice Over Script Ref:** `AUD-M8L3-S02`
- **Motion Specification:** Arrows cascade down `Why 1..5`, then reverse upward highlighting *"Therefore..."* verification checks.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Structured accordion/list hierarchy.
- **Developer Notes:** Explicitly rejects `"Operator Error"` as a final root cause.

## Screen M8L3-S03 — Is / Is-Not Matrix & Fault Tree Analysis (`FTA`)
- **Learning Objective:** ตีวงปัญหาด้วย `Is / Is-Not` และวิเคราะห์โครงสร้างหลายปัจจัยร่วมด้วย `FTA (AND vs OR Gate)`
- **Duration:** 45s
- **Layout:** Split Screen (`AST-M8-011`: Left Is/Is-Not Table | Right Fault Tree with `AND` & `OR` Gates)
- **Asset ID:** `AST-M8-011`
- **On Screen Text:** "`Is / Is-Not` ตัดผู้บริสุทธิ์ทิ้ง — `FTA` แยกสาเหตุร่วม `AND` กับสาเหตุเดี่ยว `OR`"
- **Voice Over Script Ref:** `AUD-M8L3-S03`
- **Motion Specification:** `Is-Not` rows dim eliminated variables; `AND` gate pulses only when all 3 child conditions light up.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Distinct icons/labels for `AND` vs `OR` gates.
- **Developer Notes:** Practical manufacturing reliability link.

## Screen M8L3-S04 — Poka-Yoke (Error Proofing) & Hierarchy of Corrective Actions
- **Learning Objective:** ออกแบบการแก้ไขระดับ `Preventive Poka-Yoke` แทนการพึ่งแค่คำเตือนหรืออบรมซ้ำ
- **Duration:** 40s
- **Layout:** Inverted Strength Pyramid (`AST-M8-012`: Retrain/Sign -> Inspection/Alarm -> Physical/PLC Interlock Poka-Yoke)
- **Asset ID:** `AST-M8-012`
- **On Screen Text:** "อบรมซ้ำ/ติดป้ายเตือนคือวิธีอ่อนสุด! Poka-Yoke ต้อง 'กันไม่ให้เครื่องเดิน' เมื่อเงื่อนไขผิด"
- **Voice Over Script Ref:** `AUD-M8L3-S04`
- **Motion Specification:** Shield bar strengthens from yellow Retrain (low durability) up to emerald PLC Pressure Interlock (100% block).
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Level ranking percentages/tiers clearly labeled.
- **Developer Notes:** Connects directly to `FIX-B Pressure Switch < 55 bar`.

## Screen M8L3-S05 — Interactive 5 Why Chain & Fault Tree Builder
- **Learning Objective:** ฝึกต่อห่วงโซ่ 5 Why ตรวจด้วย `Therefore Test`, เลือก `AND/OR` Gate และเลือก `Poka-Yoke` ที่แข็งแกร่ง
- **Duration:** 50s
- **Layout:** Multi-Step RCA Puzzle (`INT-M8-L3-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M8-L3-01`
- **On Screen Text:** "ต่อห่วงโซ่ 5 Why ให้ผ่าน Therefore Test แล้วเลือก Poka-Yoke ที่ปิดปัญหาถาวร!"
- **Voice Over Script Ref:** `AUD-M8L3-S05`
- **Motion Specification:** Submitting weak `"Tell operator be careful"` triggers bounce feedback; selecting interlock triggers green lock.
- **Trigger Logic:** Pass 3 challenges (`+10 pts`).
- **Accessibility Notes:** Step-by-step aria announcements.
- **Developer Notes:** Hands-on drill before Workshop Part B.

## Screen M8L3-S06 — Lesson 3 Knowledge Check (`KC-M8-L3`)
- **Learning Objective:** ทดสอบ RCA (`5 Why`, `Is/Is-Not`, `FTA`, `Poka-Yoke`) (`M8-Q031`, `M8-Q038`)
- **Duration:** 30s
- **Layout:** Centered 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 3 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M8L3-S06`
- **Motion Specification:** Answer validation flip.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 4.
- **Accessibility Notes:** Accessible quiz markup.
- **Developer Notes:** Progress 68%.

---

# LESSON M8-L4: `PDCA / Kaizen / DMAIC / 8D` & Production Line OOC Workshop (`8.4`)

## Screen M8L4-S01 — Continuous Improvement Frameworks: `PDCA`, `Kaizen`, `DMAIC` & `8D`
- **Learning Objective:** เลือกใช้กรอบปรับปรุงต่อเนื่อง (`PDCA, Kaizen, DMAIC, 8D`) ให้เหมาะกับขนาดและความเร่งด่วนของปัญหา
- **Duration:** 40s
- **Layout:** 4-Card Framework Matrix (`AST-M8-013`)
- **Asset ID:** `AST-M8-013`
- **On Screen Text:** "`PDCA` คุมมาตรฐานประจำวัน | `Kaizen` ลุยจุดหน้างาน | `DMAIC` แก้เรื้อรัง | `8D` ปิดเคส OOC/ลูกค้า"
- **Voice Over Script Ref:** `AUD-M8L4-S01`
- **Motion Specification:** Cards highlight matching use-case badges (Speed vs Statistical Depth).
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Concise comparison summary.
- **Developer Notes:** Clarifies overlap and synergy among all 4 frameworks.

## Screen M8L4-S02 — Closing the Loop: Before/After SPC Proof & Living PFMEA / Control Plan
- **Learning Objective:** ยืนยันประสิทธิผลการแก้ไขบน Control Chart (`0 OOC`, $C_{pk}$ เพิ่ม, Update `PFMEA/CP`, `Yokoten`)
- **Duration:** 40s
- **Layout:** Before/After Control Chart Split + Document Feedback Loop (`AST-M8-014`)
- **Asset ID:** `AST-M8-014`
- **On Screen Text:** "อย่าปิดเคสจนกว่ากราฟหลังแก้จะนิ่ง 0 OOC, Cpk ผ่าน, และอัปเดต PFMEA + Control Plan!"
- **Voice Over Script Ref:** `AUD-M8L4-S02`
- **Motion Specification:** Red erratic Before chart transitions into tight After chart; gears update PFMEA AP score & Horizontal Deployment badge.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear numeric Before/After legend.
- **Developer Notes:** Reinforces never widening Control Limits to hide defects.

## Screen M8L4-S03 — Workshop Intro: Housing Bore OOC Incident (`SG-01` .. `SG-24`)
- **Learning Objective:** ทำความเข้าใจสถานการณ์ Workshop สายการผลิต CNC Housing Bore และโครงสร้างชุดข้อมูล CSV จริง
- **Duration:** 35s
- **Layout:** Incident Brief + Dataset Preview Card (`AST-M8-015`)
- **Asset ID:** `AST-M8-015`
- **On Screen Text:** `WORKSHOP:` "Housing Bore `40.000 ± 0.050 mm` เกิด OOC ทั้ง `X̄`, `R` และ `Raw > USL` — ลุยปิดเคส!"
- **Voice Over Script Ref:** `AUD-M8L4-S03`
- **Motion Specification:** Data preview highlights Shift, Fixture ID, Clamp Pressure, Coolant Temp, and OOC flags.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** CSV download links labeled clearly.
- **Developer Notes:** Loads `workshop_m8_ooc_case_study.csv` and `workshop_m8_defect_pareto.csv`.

## Screen M8L4-S04 — Interactive Workshop Part A: OCAP & 7 QC Tools Investigation
- **Learning Objective:** ปฏิบัติการระบุ OOC Subgroups (`SG-08..16`), แยกชั้น `FIX-A vs FIX-B`, อ่าน Dual Pareto และเทียบ Scatter $r$
- **Duration:** 90s
- **Layout:** Split Interactive Lab Console (`INT-M8-L4-01`: Left Chart/Pareto/Scatter View | Right Step-by-Step Investigation Form)
- **Asset ID:** N/A | **Interactive ID:** `INT-M8-L4-01`
- **On Screen Text:** "Workshop Part A: หาผู้ร้ายตัวจริงจาก Control Chart, Stratification, Pareto และ Scatter!"
- **Voice Over Script Ref:** `AUD-M8L4-S04`
- **Motion Specification:** Filtering by `FIX-B` updates chart & Pareto bars dynamically; hovering Scatter dots displays exact $(X, Y)$ values.
- **Trigger Logic:** Complete 4 investigation checkpoints (`+15 pts`).
- **Accessibility Notes:** Tabular data view option alongside charts.
- **Developer Notes:** Uses verified `r = -0.9955` (`Clamp Pressure`) vs `r = -0.2066` (`Coolant Temp`).

## Screen M8L4-S05 — Workshop Part A Solution: Root Cause Revealed
- **Learning Objective:** ตรวจทานคำตอบ Part A จากข้อมูลจริงของทั้ง 24 Subgroups และ 200 Defects (`61,740 THB`)
- **Duration:** 35s
- **Layout:** Verified Evidence Dashboard (`AST-M8-016`)
- **Asset ID:** `AST-M8-016`
- **On Screen Text:** "เฉลย Part A: `FIX-B` แคลมป์แรงดันตก (`r = -0.996`) สร้างความเสียหาย `81.6%` ของ COPQ!"
- **Voice Over Script Ref:** `AUD-M8L4-S05`
- **Motion Specification:** Four evidence cards lock into place with verified checkmarks.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Complete numerical callouts.
- **Developer Notes:** Bridges directly to Part B RCA & Poka-Yoke closure.

## Screen M8L4-S06 — Interactive Workshop Part B: 5 Why, Poka-Yoke & PDCA Closure
- **Learning Objective:** เขียน 5 Why ของเคส `FIX-B`, เลือก Poka-Yoke Interlock และยืนยันผล `Before vs After Cpk`
- **Duration:** 75s
- **Layout:** Interactive CAPA & Closure Workbench (`INT-M8-L4-02`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M8-L4-02`
- **On Screen Text:** "Workshop Part B: เลือก 5 Why + ออกแบบ Poka-Yoke + ตรวจผล `SG-17..24` ก่อนปิด 8D!"
- **Voice Over Script Ref:** `AUD-M8L4-S06`
- **Motion Specification:** Activating `< 55 bar` Pressure Interlock switches `SG-17..24` trend green and recalculates `Cpk = 2.040`.
- **Trigger Logic:** Complete 3 closure challenges (`+15 pts`).
- **Accessibility Notes:** Keyboard form steps and clear contrast.
- **Developer Notes:** Enforces Yokoten horizontal deployment across sister CNC machines.

## Screen M8L4-S07 — Workshop Part B Verified Closure: Before vs After SPC Proof
- **Learning Objective:** ยืนยันการปิดเคส 8D ด้วยตัวเลข Before (`Ppk = 0.843`) vs After (`Cpk = 2.040`, `0 OOC`)
- **Duration:** 35s
- **Layout:** Executive Before/After Scorecard (`AST-M8-017`)
- **Asset ID:** `AST-M8-017`
- **On Screen Text:** "`APPROVED 8D CLOSURE:` `Ppk 0.84` (Incident `0.74`) → **`Cpk 2.04` (`0` OOC)**!"
- **Voice Over Script Ref:** `AUD-M8L4-S07`
- **Motion Specification:** Capability gauge sweeps from red `0.84` into emerald `2.04` with `8D CLOSED` seal stamp.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** High-contrast scorecard summary.
- **Developer Notes:** Celebrates real data closure.

## Screen M8L4-S08 — Module 8 Summary & Bridge to Module 9 (`MSA Connection to SPC`)
- **Learning Objective:** สรุปหัวใจ Module 8 และเชื่อมคำถามสำคัญเรื่องความน่าเชื่อถือของระบบวัดเข้าสู่ Module 9 (`MSA`)
- **Duration:** 35s
- **Layout:** Summary Recap + Module 9 Teaser Bridge (`AST-M8-018`)
- **Asset ID:** `AST-M8-018`
- **On Screen Text:** "ปิดปัญหาด้วย `OCAP + 7 QC + 5 Why + PDCA` — แต่ถ้า 'เครื่องวัด' หลอกเราอยู่ล่ะ? พบกันใน Module 9!"
- **Voice Over Script Ref:** `AUD-M8L4-S08`
- **Motion Specification:** Variance equation $\sigma^2_{\text{obs}} = \sigma^2_{\text{part}} + \sigma^2_{\text{gage}}$ highlights red gage slice leading to Module 9 card.
- **Trigger Logic:** Narration complete unlocks Final Exam.
- **Accessibility Notes:** Readable recap bullets.
- **Developer Notes:** Seamless transition into MSA (`Module 9`).

## Screen M8L4-S09 — Module 8 Final Assessment (`EXAM-M8`)
- **Learning Objective:** วัดผลสัมฤทธิ์ Module 8 (`>= 80%` จาก 20 ข้อสุ่มจาก `M8-Q001`–`M8-Q060`)
- **Duration:** 15m (Exam)
- **Layout:** Full-Screen Stratified Quiz Runner
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบประมวลผล Module 8 (20 ข้อ | ผ่าน 80%)"
- **Voice Over Script Ref:** `AUD-M8L4-S09`
- **Motion Specification:** Progress bar + Question Flagging + Weak-LO Remediation links.
- **Trigger Logic:** Submit triggers Module 8 Certificate & unlocks Module 9.
- **Accessibility Notes:** Keyboard navigation + screen-reader alert on score report.
- **Developer Notes:** `5 L1 + 5 L2 + 5 L3 + 5 L4` stratified random draw.
