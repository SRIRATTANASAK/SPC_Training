# Module 7 Production Storyboard (Developer & Web/LMS Ready)

**Module:** Module 7 — SPC for Manufacturing Process (Roadmap, Line Implementation, Reaction/Escalation & LPA)  
**Total Lessons:** 4 Lessons | **Total Screens:** 26 Screens (`M7L1-S01` .. `M7L4-S09`)  
**Estimated Duration:** ~40 minutes (including Sampling Risk Calculator, Line CTQ Planner, Escalation Simulator & Control Plan Workshop)  
**Delivery Target:** Web Interactive Training (MDX/React + Thai Audio Sync) & SCORM 2004 Compatible

---

# LESSON M7-L1: SPC Implementation Roadmap (`7.1`)

## Screen M7L1-S01 — Welcome & Bridging Theory to the Real Shop Floor
- **Learning Objective:** เห็นภาพความท้าทายของการนำ SPC จากทฤษฎีไปใช้งานจริงบนสายการผลิต
- **Duration:** 25s
- **Layout:** Hero Split (Left Live Factory Line Integration `AST-M7-001` 60% | Right 4 Objectives 40%)
- **Asset ID:** `AST-M7-001`
- **On Screen Text:** `SHOP-FLOOR SPC DEPLOYMENT` — "เลือกกราฟถูกยังไม่พอ ต้องวางระบบหน้าไลน์ให้ยั่งยืนด้วย!"
- **Voice Over Script Ref:** `AUD-M7L1-S01`
- **Motion Specification:** Factory line stations (`CNC, Injection, Stamping, Assembly`) illuminate sequentially with live SPC badges.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** TH/EN captions + keyboard navigation.
- **Developer Notes:** Preload `AST-M7-002`.

## Screen M7L1-S02 — The 4-Phase SPC Implementation Roadmap
- **Learning Objective:** เข้าใจ 4 ขั้นตอนหลักในการวางระบบ SPC ตามกรอบ AIAG / IATF 16949
- **Duration:** 40s
- **Layout:** 4-Phase Horizontal Roadmap Ribbon (`AST-M7-002`)
- **Asset ID:** `AST-M7-002`
- **On Screen Text:** `1. Identify CTQ (PFMEA)` → `2. Select Process & MSA` → `3. Rational Subgroup & Sampling` → `4. Rules, Reaction & LPA`
- **Voice Over Script Ref:** `AUD-M7L1-S02`
- **Motion Specification:** Roadmap milestones light up step-by-step from PFMEA node through LPA sustain node.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Sequential step labels.
- **Developer Notes:** Core module backbone.

## Screen M7L1-S03 — Identifying True CTQs (Critical Few vs Trivial Many)
- **Learning Objective:** คัดเลือก CTQ จาก Drawing (`CC/SC`) และ PFMEA แทนการเปิด SPC มั่วทุกมิติ
- **Duration:** 35s
- **Layout:** Funnel Filter Diagram (`AST-M7-003`: 40 Drawing Dimensions → 6 True CTQs)
- **Asset ID:** `AST-M7-003`
- **On Screen Text:** "อย่าเปิด SPC 40 จุดต่อเครื่อง! คัดเฉพาะ CTQ ที่เสี่ยงสูงจาก PFMEA & VOC"
- **Voice Over Script Ref:** `AUD-M7L1-S03`
- **Motion Specification:** Funnel filters 40 dimensions down to 6 glowing CTQ badges based on Severity/AP filters.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear filter criteria text.
- **Developer Notes:** Prevents operator overload and pencil-whipping.

## Screen M7L1-S04 — Rational Subgrouping & Risk-Based Sampling Plan Design
- **Learning Objective:** แยกวิธีเก็บ **Consecutive Rational Subgroup** กับ **Mixed-Time Trap** และคำนวณปริมาณความเสี่ยงกักกัน (`Containment Volume`)
- **Duration:** 45s
- **Layout:** Left Consecutive vs Scattered Parts Visual | Right Containment Formula Card (`AST-M7-004`)
- **Asset ID:** `AST-M7-004`
- **On Screen Text:** `Containment Risk = Line Speed × (Interval / 60)` — "หยิบ 5 ชิ้นติดกัน ณ จุดเวลาเดียว!"
- **Voice Over Script Ref:** `AUD-M7L1-S04`
- **Motion Specification:** Conveyor highlights 5 consecutive parts cleanly vs scattered parts widening range band; containment counter counts up `600 → 1,200 pcs`.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Formula alt-text.
- **Developer Notes:** Sets up `INT-M7-L1-01` and Workshop Part B.

## Screen M7L1-S05 — Interactive Sampling Frequency & Rational Subgroup Risk Calculator
- **Learning Objective:** ทดลองคำนวณจำนวนชิ้นงานที่เสี่ยงต่อการกักกันเมื่อปรับความเร็วไลน์และความถี่ในการสุ่ม
- **Duration:** 50s
- **Layout:** Dual Sliders (`Line Speed`, `Sampling Interval`) + Sampling Method Toggle (`INT-M7-L1-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M7-L1-01`
- **On Screen Text:** "ลองปรับความเร็วไลน์และเวลาสุ่มเพื่อดูจำนวนชิ้นงานที่ต้องกักกันเมื่อเกิด OOC!"
- **Voice Over Script Ref:** `AUD-M7L1-S05`
- **Motion Specification:** Containment pallet pile scales dynamically with interval slider.
- **Trigger Logic:** Test 2 intervals + toggle Consecutive vs Mixed sampling (`+10 pts`).
- **Accessibility Notes:** Slider ARIA value text.
- **Developer Notes:** Reinforces economic trade-off of sampling frequency.

## Screen M7L1-S06 — Lesson 1 Knowledge Check (`KC-M7-L1`)
- **Learning Objective:** ทดสอบ SPC Roadmap, CTQ และ Rational Subgroup (`M7-Q001`, `M7-Q008`)
- **Duration:** 30s
- **Layout:** Centered 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 1 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M7L1-S06`
- **Motion Specification:** Card flip feedback.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 2.
- **Accessibility Notes:** Keyboard radio controls.
- **Developer Notes:** Progress 23%.

---

# LESSON M7-L2: SPC in 4 Core Manufacturing Processes (`7.2`)

## Screen M7L2-S01 — Machining Processes (CNC Turning / Milling / Grinding)
- **Learning Objective:** วางแผน CTQ, Chart, Zero-Bound (`Ra`) และ Event Log สำหรับงาน Machining
- **Duration:** 40s
- **Layout:** CNC Lathe + `X̄-R` Chart Annotated with Tool-Change Event Pin (`AST-M7-005`)
- **Asset ID:** `AST-M7-005`
- **On Screen Text:** `Machining:` "Time/Tool-Wear Dominant → 5 ชิ้นติดกัน/ชม. (OD: X̄-R + Trend | Roughness Ra: UCL Only!)"
- **Voice Over Script Ref:** `AUD-M7L2-S01`
- **Motion Specification:** Upward tool-wear slope meets tool-change pin, dropping level cleanly back to target.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Event log badge callouts.
- **Developer Notes:** Connects back to M5 Roughness zero-bound.

## Screen M7L2-S02 — Assembly & Electronics Processes (Torque / Press-Fit / SMT)
- **Learning Objective:** เลือกวิธีเก็บข้อมูลอัตโนมัติ (`PLC 100% I-MR`, `SMT I-MR ค่าเฉลี่ยต่อแผ่น`, `u Chart`) สำหรับสาย Assembly & Electronics
- **Duration:** 40s
- **Layout:** Split Electronics & Torque Station (`AST-M7-006`: PLC `I-MR` Interlock | SMT 16-Site `I-MR` ของค่าเฉลี่ยต่อแผ่น)
- **Asset ID:** `AST-M7-006`
- **On Screen Text:** `Assembly & SMT:` "Piece-to-Piece / Driver Dominant → Auto PLC I-MR Interlock + Multi-Site: I-MR ของค่าเฉลี่ยต่อแผ่น + chart ภายในแผ่น"
- **Voice Over Script Ref:** `AUD-M7L2-S02`
- **Motion Specification:** Torque wrench PLC triggers pallet interlock pin immediately on 1-piece OOC.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear legend for PLC interlock.
- **Developer Notes:** Integrates semiconductor/SMT multi-site context.

## Screen M7L2-S03 — Injection Molding (Multi-Cavity Plastic Molding)
- **Learning Objective:** แก้ปัญหาการผสม Cavities ในงานฉีดพลาสติกด้วยการทำ Stratified Per-Cavity Control Charts
- **Duration:** 45s
- **Layout:** 4-Cavity Mold Split Animation (`AST-M7-007`: Wrong Mixed Subgroup vs Correct Cavity-Stratified Charts)
- **Asset ID:** `AST-M7-007`
- **On Screen Text:** `Injection Molding:` "ห้ามยัด Cav 1–4 รวมเป็น 1 กลุ่ม! ต้องแยกกราฟหรือตาม Cavity"
- **Voice Over Script Ref:** `AUD-M7L2-S03`
- **Motion Specification:** Red warning splits mixed 4-cavity runner into 4 separate clean cavity chart streams.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Distinct color + label per cavity stream.
- **Developer Notes:** Solves the #1 injection molding SPC error.

## Screen M7L2-S04 — Stamping & Forming Processes (Press / Die / Coil Feed)
- **Learning Objective:** วางแผนสุ่มความเร็วสูงและการบันทึกเปลี่ยน Coil สำหรับงานปั๊มขึ้นรูปโลหะ
- **Duration:** 40s
- **Layout:** Stamping Coil Press (`AST-M7-008`: Coil Changeover Marker on `X̄-R` + Burr `np` Chart)
- **Asset ID:** `AST-M7-008`
- **On Screen Text:** `Stamping:` "Coil-to-Coil & Die Wear → สุ่ม 5 ชิ้นติดกัน + ทุกครั้งที่เปลี่ยน Coil (และ np สำหรับ Burr)"
- **Voice Over Script Ref:** `AUD-M7L2-S04`
- **Motion Specification:** Coil swap marker triggers step-check highlight on chart; press stroke counter ticks at high speed.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** High-contrast coil swap marker.
- **Developer Notes:** Connects directly to `STN-40` in Workshop.

## Screen M7L2-S05 — Interactive Production Line CTQ & Subgroup Planner
- **Learning Objective:** ฝึกจับคู่กระบวนการทั้ง 4 สายงานกับ CTQ, Dominant Noise, Rational Subgroup และ Control Chart ที่ถูกต้อง
- **Duration:** 55s
- **Layout:** 4-Line Factory Configurator Matrix (`INT-M7-L2-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M7-L2-01`
- **On Screen Text:** "จัดสเปก SPC ให้สายการผลิตทั้ง 4 รูปแบบ (`Machining, Assembly, Injection, Stamping`) ให้ถูกต้อง"
- **Voice Over Script Ref:** `AUD-M7L2-S05`
- **Motion Specification:** Configured station unlocks green Factory Readiness seal.
- **Trigger Logic:** Configure all 4 lines accurately (`+10 pts`).
- **Accessibility Notes:** Keyboard dropdown matrix.
- **Developer Notes:** Matches Curriculum Roadmap Interactive spec.

## Screen M7L2-S06 — Lesson 2 Knowledge Check (`KC-M7-L2`)
- **Learning Objective:** ทดสอบการวาง SPC ใน 4 กระบวนการผลิต (`M7-Q016`, `M7-Q023`)
- **Duration:** 30s
- **Layout:** 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 2 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M7L2-S06`
- **Motion Specification:** Card flip feedback.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 3.
- **Accessibility Notes:** Keyboard radio controls.
- **Developer Notes:** Progress 46%.

---

# LESSON M7-L3: Process Monitoring, Reaction Plan & Escalation (`7.3`)

## Screen M7L3-S01 — Living Control Charts vs "Wallpaper SPC"
- **Learning Objective:** ตระหนักถึงความล้มเหลวของกราฟที่จดย้อนหลังปลายกะ (Wallpaper SPC) และความสำคัญของ Real-Time Plotting
- **Duration:** 35s
- **Layout:** Split Comparison (`AST-M7-009`: 16:45 Batch-Plotted Dead Chart vs Real-Time Shop-Floor Alert)
- **Asset ID:** `AST-M7-009`
- **On Screen Text:** `No Wallpaper SPC!` — "วัดเสร็จต้องพล็อตทันทีภายใน 1 นาที อย่ารอจดส่งตอนเลิกกะ!"
- **Voice Over Script Ref:** `AUD-M7L3-S01`
- **Motion Specification:** Clock sweeps to 16:45 over scrap heap on left; clock catches 09:00 OOC alert cleanly on right.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear timeline captions.
- **Developer Notes:** Core shop-floor cultural lesson.

## Screen M7L3-S02 — Designing an Actionable Reaction Plan
- **Learning Objective:** เขียน Reaction Plan แบบระบุการกระทำ ปริมาณกักกัน และกรอบเวลาที่ชัดเจน แทนคำคลุมเครือ
- **Duration:** 40s
- **Layout:** Bad vs Good Reaction Plan Card Transform (`AST-M7-010`)
- **Asset ID:** `AST-M7-010`
- **On Screen Text:** "ห้ามเขียนแค่ 'แจ้งหัวหน้างาน'! ต้องระบุ Step: Pause → Verify → Contain Backtrack → Specific Check"
- **Voice Over Script Ref:** `AUD-M7L3-S02`
- **Motion Specification:** Red vague stamp dissolves into crisp 4-step Reaction checklist.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Structured checklist contrast.
- **Developer Notes:** Prepares learners for Workshop Part B.

## Screen M7L3-S03 — 3-Tier Escalation Matrix & SLA
- **Learning Objective:** กำหนดกรอบเวลาและอำนาจการตัดสินใจใน **Tier 1 (Operator), Tier 2 (Leader/Tech), Tier 3 (Eng/QA Hold Lot (แนวปฏิบัติ))**
- **Duration:** 45s
- **Layout:** 3-Tier Escalation Ladder with Timers (`AST-M7-011`: `0–15m` | `15–60m` | `>60m / Lot Hold (แนวปฏิบัติ)`)
- **Asset ID:** `AST-M7-011`
- **On Screen Text:** `3-Tier Escalation:` `Tier 1 (0–15m)` → `Tier 2 (15–60m)` → `Tier 3 (>60m / Hold Lot (แนวปฏิบัติ) & OCAP)`
- **Voice Over Script Ref:** `AUD-M7L3-S03`
- **Motion Specification:** Unresolved timer climbs sequentially from Tier 1 green badge to Tier 2 amber to Tier 3 red hold lock.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Accessible ladder breakdown.
- **Developer Notes:** Connects directly to Lot Hold (แนวปฏิบัติ) & Module 8 OCAP.

## Screen M7L3-S04 — Interactive Reaction & Escalation Flowchart Simulator
- **Learning Objective:** ฝึกตัดสินใจเดินขั้นตอนใน Escalation Flowchart กับเหตุการณ์ OOC 4 รูปแบบ
- **Duration:** 55s
- **Layout:** Decision Flowchart Branch Simulator (`INT-M7-L3-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M7-L3-01`
- **On Screen Text:** "ฝึกเลือกขั้นตอนโต้ตอบและส่งต่อ Escalation เมื่อเกิดสัญญาณ OOC หน้าไลน์ทั้ง 4 กรณี!"
- **Voice Over Script Ref:** `AUD-M7L3-S04`
- **Motion Specification:** Active flowchart path illuminates green or flashes corrective coaching on wrong turn.
- **Trigger Logic:** Resolve all 4 OOC scenarios (`+10 pts`).
- **Accessibility Notes:** Keyboard branch buttons + live status announcement.
- **Developer Notes:** Directly satisfies Roadmap's Reaction/Escalation Flowchart spec.

## Screen M7L3-S05 — Lesson 3 Knowledge Check (`KC-M7-L3`)
- **Learning Objective:** ทดสอบ Reaction Plan และ 3-Tier Escalation (`M7-Q031`, `M7-Q038`)
- **Duration:** 30s
- **Layout:** 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 3 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M7L3-S05`
- **Motion Specification:** Card flip feedback.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 4.
- **Accessibility Notes:** Keyboard radio controls.
- **Developer Notes:** Progress 65%.

---

# LESSON M7-L4: Layered Process Audit (LPA) & Control Plan Workshop (`7.4`)

## Screen M7L4-S01 — What Is Layered Process Audit (LPA / `AIAG CQI-8`)?
- **Learning Objective:** เข้าใจโครงสร้าง 3 ชั้นของ Layered Process Audit (รายวัน / รายสัปดาห์ / รายเดือน) เพื่อรักษาวินัย SPC
- **Duration:** 35s
- **Layout:** 3-Layer Audit Pyramid (`AST-M7-012`: Supervisor Daily | Manager Weekly | Plant Leader Monthly)
- **Asset ID:** `AST-M7-012`
- **On Screen Text:** `Layered Process Audit (LPA):` "ตรวจสั้นๆ 5–10 นาทีที่ Gemba (รายวัน → รายสัปดาห์ → รายเดือน)"
- **Voice Over Script Ref:** `AUD-M7L4-S01`
- **Motion Specification:** Pyramid layers lock together with calendar cadence badges.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Pyramid text description.
- **Developer Notes:** Reference AIAG CQI-8 discipline.

## Screen M7L4-S02 — Top 6 High-Impact SPC Verification Questions for LPA
- **Learning Objective:** ตรวจจับอาการ Wallpaper SPC, Cherry-picking, Mixed Subgroups และ Reaction Log ตกหล่นหน้าไลน์จริง
- **Duration:** 45s
- **Layout:** 6-Card Gemba Audit Clipboard (`AST-M7-013`)
- **Asset ID:** `AST-M7-013`
- **On Screen Text:** "6 คำถาม LPA ทรงพลัง: พล็อตทันทีไหม? หยิบ Subgroup ถูกไหม? เข้าใจ Rule ไหม? Log ครบไหม? กักกันทันไหม? Gage พร้อมไหม?"
- **Voice Over Script Ref:** `AUD-M7L4-S02`
- **Motion Specification:** Audit magnifying glass inspects chart stamps, gage sticker, and operator signature sequentially.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Numbered list accessible via Tab.
- **Developer Notes:** Practical tool QA/Managers can use tomorrow.

## Screen M7L4-S03 — Closed-Loop Quality Ecosystem: PFMEA ↔ Control Plan ↔ SPC ↔ LPA
- **Learning Objective:** เชื่อมโยงข้อมูลระหว่าง PFMEA, Control Plan, SPC และ LPA เป็นวงจรปิดต่อเนื่อง
- **Duration:** 35s
- **Layout:** 4-Node Closed-Loop Gear Cycle (`AST-M7-014`)
- **Asset ID:** `AST-M7-014`
- **On Screen Text:** `PFMEA → Control Plan → Live SPC → LPA Feedback` — "ข้อมูล OOC ไหลกลับไปอัปเกรด PFMEA และ Control Plan!"
- **Voice Over Script Ref:** `AUD-M7L4-S03`
- **Motion Specification:** Bidirectional arrows rotate smoothly linking 4 system cards.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear ecosystem sequence labels.
- **Developer Notes:** Directly introduces the Control Plan Workshop.

## Screen M7L4-S04 — Workshop Part A: ออกแบบ SPC Monitoring Plan เชื่อม Control Plan (6 Stations)
- **Learning Objective:** ประกอบ SPC Monitoring Plan สำหรับสถานีผลิตจริง 6 สถานี (`workshop_m7_control_plan_line.csv`)
- **Duration:** 110s
- **Layout:** Interactive 6-Station Control Plan Builder (`INT-M7-L4-01`) + CSV Download
- **Asset ID:** N/A | **Interactive ID:** `INT-M7-L4-01`
- **On Screen Text:** "Workshop Part A: ออกแบบ Control Chart, Subgroup, SPC Rules & LPA Focus ให้ครบทั้ง 6 สถานี (`STN-10..60`)"
- **Voice Over Script Ref:** `AUD-M7L4-S04`
- **Motion Specification:** Selecting valid configurations illuminates each station row in green on Control Plan sheet.
- **Trigger Logic:** Complete at least `5/6` station blueprints cleanly (`+15 pts`).
- **Accessibility Notes:** Keyboard dropdown table + downloadable CSV.
- **Developer Notes:** Directly driven by `workshop_m7_control_plan_line.csv`.

## Screen M7L4-S05 — Workshop Part A Solution: Station-by-Station Plan
- **Learning Objective:** ตรวจทานคำตอบมาตรฐานของทั้ง 6 สถานี (`STN-10` ถึง `STN-60`)
- **Duration:** 45s
- **Layout:** Verified 6-Station Control Plan Table (`AST-M7-015`)
- **Asset ID:** `AST-M7-015`
- **On Screen Text:** "เฉลยครบ 6 สถานี: CNC (`X̄-R`), Grinding Ra (`UCL Only`), Mold (`Per-Cavity`), Stamping (`np`), Torque (`I-MR PLC`), SMT (`u`)"
- **Voice Over Script Ref:** `AUD-M7L4-S05`
- **Motion Specification:** Key highlights pulse across zero-bound `STN-20` and cavity stratification `STN-30`.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Complete CSV column readout.
- **Developer Notes:** Exact sync with `07_workshop_guide.md`.

## Screen M7L4-S06 — Workshop Part B: Containment Math, Reaction Rewrite & LPA Audit Fix
- **Learning Objective:** คำนวณลดความเสี่ยงกักกันที่ `STN-40`, เขียนแก้ Reaction Plan ที่คลุมเครือ และตรวจจับจุดบกพร่องจาก LPA Audit
- **Duration:** 90s
- **Layout:** 3-Challenge Audit & Calculation Lab (`INT-M7-L4-02`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M7-L4-02`
- **On Screen Text:** "Workshop Part B: ลด Containment `STN-40` (`1,200 → ≤300` ชิ้น) + แก้ Reaction Plan + จับผิด LPA!"
- **Voice Over Script Ref:** `AUD-M7L4-S06`
- **Motion Specification:** Stamping containment bar drops from `1,200` to `300` as sampling interval reduces to `30 min`.
- **Trigger Logic:** Score `>= 3/3` on Part B audit checks (`+10 pts`).
- **Accessibility Notes:** Full numeric fallback in guide.
- **Developer Notes:** Tests hands-on engineering judgement.

## Screen M7L4-S07 — Audit & Sustainment Dashboard (Closed-Loop Solution)
- **Learning Objective:** สรุปผลลัพธ์จาก Workshop ทั้ง Part A และ Part B พร้อมเกณฑ์ Release เข้าใช้งานจริงหน้าไลน์
- **Duration:** 40s
- **Layout:** Approved SPC Control Plan & LPA Executive Dashboard (`AST-M7-016`)
- **Asset ID:** `AST-M7-016`
- **On Screen Text:** "สรุป Workshop: ควบคุมเสี่ยงกักกันลง `75%` ที่ `STN-40` พร้อม Reaction Plan ระดับ Tier 1–3 และ LPA Checklist!"
- **Voice Over Script Ref:** `AUD-M7L4-S07`
- **Motion Specification:** Green "APPROVED FOR PRODUCTION" stamp seals complete 6-station dashboard.
- **Trigger Logic:** Review solution to continue.
- **Accessibility Notes:** Screen reader summary.
- **Developer Notes:** Ties Module 7 together.

## Screen M7L4-S08 — Module 7 Summary & Bridge to Module 8
- **Learning Objective:** สรุปการวางระบบ SPC บนสายการผลิตและเตรียมเข้าสู่ Module 8: SPC Problem Solving
- **Duration:** 25s
- **Layout:** Bridge Milestone Card (`AST-M7-017`)
- **Asset ID:** `AST-M7-017`
- **On Screen Text:** "จบ Module 7 → ก้าวต่อไปใน Module 8: เมื่อสัญญาณ OOC ดังขึ้น จะแก้ปัญหาให้จบขาดด้วย OCAP & 7 QC Tools อย่างไร!"
- **Voice Over Script Ref:** `AUD-M7L4-S08`
- **Motion Specification:** Alert siren from Module 7 Control Plan routes straight into Module 8 Problem-Solving Toolkit.
- **Trigger Logic:** Click to enter Final Exam.
- **Accessibility Notes:** Summary checklist.
- **Developer Notes:** Smooth transition cue.

## Screen M7L4-S09 — Module 7 Final Assessment (`EXAM-M7`)
- **Learning Objective:** วัดผลสัมฤทธิ์ Module 7 (เกณฑ์ผ่าน 80% = 16/20 ข้อ)
- **Duration:** 10–15 min
- **Layout:** Exam Runner (20 Randomized Questions from `M7-Q001..M7-Q060`)
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบประมวลผล Module 7 (สุ่ม 20 ข้อ จากคลัง 60 ข้อ | เกณฑ์ผ่าน 80% | ทำซ้ำได้ไม่จำกัด)"
- **Voice Over Script Ref:** `AUD-M7L4-S09`
- **Motion Specification:** Lesson progress rings (`L1..L4`).
- **Trigger Logic:** Stratify `5 L1 + 5 L2 + 5 L3 + 5 L4 = 20 Qs`; Pass `>= 80%` unlocks Module 8.
- **Accessibility Notes:** Untimed accessible exam.
- **Developer Notes:** Save `var_exam_score`.
