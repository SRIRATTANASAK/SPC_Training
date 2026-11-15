# Module 7 Full Lesson Content (Web & MDX Ready — 26 Screens)

**Module 7: SPC for Manufacturing Process (การนำ SPC ลงสายการผลิตจริง — Roadmap, Machining/Assembly/Injection/Stamping, Reaction Plan, Escalation & Layered Process Audit)**  
เอกสารนี้คือ **เนื้อหาบนหน้าจอฉบับสมบูรณ์ (On-Screen Teaching Copy)** สำหรับนักพัฒนาเว็บนำไปสร้างหน้าเว็บ/สไลด์ (MDX/React) คู่กับเสียงบรรยายใน [02_voiceover_th_en.md](02_voiceover_th_en.md) และตัวจำลองใน [04_interactive_logic.md](04_interactive_logic.md)

---

# LESSON M7-L1: SPC Implementation Roadmap (`7.1`)

## M7L1-S01 — Welcome & Bridging Statistical Theory to the Shop Floor
`<Asset id="AST-M7-001" />`
- **จากห้องเรียนสู่สายการผลิตจริง:** ใน Module 1–6 คุณเรียนรู้สถิติ $C_{pk}$ กฎ Western Electric และวิธีเลือก Control Chart ทั้ง 7 ชนิดแล้ว — แต่ในโรงงานจริง 80% ของความล้มเหลวไม่ได้เกิดจากการคำนวณสูตรผิด **แต่เกิดจากวางระบบหน้าไลน์ไม่ถูกต้อง** (เลือก CTQ เยอะจนวัดไม่ไหว, เก็บ Subgroup ผิดจังหวะ, หรือมีกราฟติดผนังไว้สวยๆ แต่ไม่มีคนแก้ปัญหาเมื่อจุดหลุด!)
- **วัตถุประสงค์การเรียนรู้ประจำ Module 7:**
  1. วางแผน **4-Phase SPC Implementation Roadmap** ตั้งแต่คัดเลือก CTQ จนถึง Sustain บน Control Plan
  2. ออกแบบ **Rational Subgroup** และความถี่สุ่มตัวอย่าง (`Sampling Plan`) ที่สมดุลระหว่างต้นทุนตรวจกับปริมาณความเสี่ยง (`Parts at Risk`)
  3. ประยุกต์ใช้ SPC ให้ตรงธรรมชาติของ 4 กระบวนการหลัก: **Machining, Assembly, Injection Molding, Stamping**
  4. สร้าง **Reaction Plan, 3-Tier Escalation Process**, และตรวจสอบความยั่งยืนด้วย **Layered Process Audit (LPA)**

## M7L1-S02 — The 4-Phase SPC Implementation Roadmap
`<Asset id="AST-M7-002" />`
- **ขั้นตอนวางระบบ SPC ลงสายการผลิตใหม่ตามแนวทาง AIAG / IATF 16949:**
  1. **Phase 1 — Identify CTQ:** คัดเฉพาะขนาด/ลักษณะสำคัญจาก **Customer Drawing, Special Characteristics (CC/SC), และ PFMEA** (ห้ามทำ SPC ทุกจุดบน Drawing จน Operator วัดไม่ทัน!)
  2. **Phase 2 — Select Process & Check Readiness:** ตรวจสอบว่าเครื่องมือวัดผ่าน **MSA / Gage R&R (`%GRR < 10%` — เตรียมเจาะลึกใน Module 9)** และเลือกชนิด Control Chart ที่ถูกต้องจาก Module 6
  3. **Phase 3 — Data Collection & Sampling Plan:** ออกแบบ **Rational Subgroup** (วิธีหยิบชิ้นงานให้ Within-subgroup เล็กที่สุด) + ความถี่ (`Frequency`) ตามความเร็วสายพานและโอกาสไหลของเครื่อง
  4. **Phase 4 — Control Rules, Reaction & Sustain:** กำหนด **Mandatory + Optional SPC Rules**, ผูก **Reaction Plan / Escalation**, บรรจุลง **Control Plan**, และตรวจติดตามด้วย **LPA**

## M7L1-S03 — Identifying True CTQs (Focus on Critical Few, Not Trivial Many)
`<Asset id="AST-M7-003" />`
- **กับดักที่พบบ่อย:** โรงงานบางแห่งเปิด Control Chart `40` จุดในเครื่องเดียว จนพนักงานใช้เวลาครึ่งกะนั่งวัดแทนที่จะควบคุมเครื่อง → สุดท้ายเกิดอาการ **จดเลขเดา (Pencil-Whipping)!**
- **เกณฑ์คัดเลือก CTQ เข้า SPC อย่างชาญฉลาด:**
  - **Safety / Regulatory / Fit & Function (`CC / SC`):** ขนาดที่ส่งผลต่อความปลอดภัยหรือการประกอบ
  - **PFMEA High Risk (High Severity / High Action Priority `AP`):** จุดที่มีโอกาสหลุดไปหาลูกค้าหรือเกิด Defect ราคาแพง
  - **Unstable / High-Variation Processes:** จุดที่ไวต่อการสึกหรอของ Tooling, อุณหภูมิ หรือ Batch Changeover (เช่น จุดที่ `Ppk < 1.67`)

## M7L1-S04 — Rational Subgrouping & Risk-Based Sampling Plan Design
`<Asset id="AST-M7-004" />`
- **หลักการหยิบชิ้นงานของ Rational Subgroup (`n = 5`):**
  - **วิธีที่ถูก (Consecutive Sampling):** หยิบ `5` ชิ้น **ที่ผลิตต่อเนื่องติดกัน** ณ จุดเวลาเดียวกัน (เช่น `08:00` หยิบชิ้นที่ `101, 102, 103, 104, 105`) → ทำให้ Range ($R$) สะท้อนเฉพาะ **ความแปรปรวนบริสุทธิ์ภายในเครื่องจักร (`Within-subgroup`)** ส่วนการไหลของมีดกลึงจะโผล่ให้เห็นข้ามกลุ่มบน $\bar{X}$ Chart!
  - **วิธีที่ผิด:** หยิบกระจายชั่วโมงละ 1 ชิ้น (`08:10, 08:22, 08:35, 08:48, 08:59`) มารวมเป็น 1 กลุ่ม → ค่าไหลระหว่างชั่วโมงจะปนเข้าไปใน $R$ จน `UCL/LCL` ถ่างกว้างตาบอด!
- **สูตรคำนวณความเสี่ยงกักกันสินค้า (Containment Volume Risk):**
  $$\text{Max Parts at Risk (Containment)} = \text{Line Speed (pcs/hr)} \times \frac{\text{Sampling Interval (min)}}{60}$$
  - *ตัวอย่าง:* สาย Stamping เดิน `600 pcs/hr` ถ้าตรวจทุก `2 ชั่วโมง` (`120 min`) ทันทีที่จุดหลุดต้อง **กักกันถึง `1,200 ชิ้น`**! หากปรับเป็นตรวจทุก `30 min` ความเสี่ยงเหลือ **`300 ชิ้น`**!

## M7L1-S05 — Interactive Sampling Frequency & Rational Subgroup Risk Calculator
`<Interactive id="INT-M7-L1-01" />`
- ปรับ Slider **`Line Speed (pcs/hr)`**, **`Sampling Interval (min)`**, และสลับวิธีหยิบตัวอย่าง (**Consecutive 5 pcs** vs **Mixed-time / Mixed-cavity**) เพื่อดูผลต่อ **Max Parts at Risk (ต้องกักกัน)** และรูปร่างเส้นควบคุม `UCL/LCL` แบบ Real-time

## M7L1-S06 — Lesson 1 Knowledge Check (`KC-M7-L1`)
- ทบทวน 2 ข้อ (`M7-Q001`, `M7-Q008`) จาก [06_assessment_bank.md](06_assessment_bank.md)

---

# LESSON M7-L2: SPC in 4 Core Manufacturing Processes (`7.2`)

## M7L2-S01 — Machining Processes (CNC Turning / Milling / Grinding)
`<Asset id="AST-M7-005" />`
- **Dominant Variation (แหล่งความแปรปรวนหลัก):** **Time-to-Time Drift / Tool Wear** (คมมีดกลึงสึก, หินเจียรทื่อ) และ Thermal Growth ของ Spindle
- **ตัวอย่าง CTQ & Chart:**
  - `Shaft Outer Diameter / Bore ID`: เก็บ **5 ชิ้นต่อเนื่อง/ชม. จาก Spindle เดียวกัน** → **$\bar{X}$-$R$ Chart** (เปิด **Mandatory Rule 1 + Raw Data vs Spec + Optional Trend 6 pts** เพื่อจับ Tool wear)
  - `Surface Roughness (Ra)`: ลักษณะ Lower-is-Better ชิด `0` → คุมเฉพาะ **`UCL`** (ตัด `LCL < 0` ออก!)
- **ข้อควรระวัง:** หลัง **เปลี่ยนมีด / ตั้ง Offset ใหม่** ต้องบันทึก **Event Log** บนกราฟทันที ไม่เช่นนั้นกราฟจะตีความว่าเกิด Sudden Shift!

## M7L2-S02 — Assembly & Electronics Processes (Torque / Press-Fit / SMT)
`<Asset id="AST-M7-006" />`
- **Dominant Variation:** **Piece-to-Piece & Machine/Fixture/Driver Variation** (เช่น ความต่างระหว่างปืนขันสกรูตัวที่ 1–4 หรือหัวบัดกรี)
- **ตัวอย่าง CTQ & Chart:**
  - `Automated Bolt Torque (N·m)` หรือ `Press-Fit Force (kN)`: ข้อมูลจาก PLC/Sensor อ่าน 100% ทุกชิ้น → ใช้ **`I-MR` Chart (Auto PLC Interlock)** หรือสุ่มจัดกลุ่มตามรอบ Fixture → **$\bar{X}$-$R$**
  - `SMT Solder Paste Thickness / Volume`: สุ่มหลายจุดต่อแผ่น (`16+` sites) → **$\bar{X}$-$S$ Chart** (ในสาย Semiconductor/SMT นิยมเชื่อมกับระบบ Auto Lot Hold ตามมาตรฐาน **JEDEC `JESD557`**)
  - `Visual Solder Bridge / Missing Component`: นับจำนวนจุดตำหนิเมื่อยอดแผงเปลี่ยน → **`u` Chart**

## M7L2-S03 — Injection Molding (Multi-Cavity Plastic Molding)
`<Asset id="AST-M7-007" />`
- **Dominant Variation:** **Stream-to-Stream Bias (Cavity-to-Cavity Variation!)** — แม่พิมพ์ 1 ตัวมักมี `4, 8, 16` Cavities ที่อุณหภูมิและแรงดันปลาย Gate ต่างกัน
- **กับดักอันตรายที่สุดของงานฉีดพลาสติก:**
  - **ห้ามเด็ดขาด:** หยิบจาก `Cavity 1, 2, 3, 4` มาอย่างละ 1 ชิ้นรวมเป็น 1 Subgroup (`n = 4`)! เพราะผลต่างระหว่าง Cavity จะทำให้ $R$ บวมโตและกราฟเกาะเส้นกลาง (`Stratification` จาก Module 5!)
  - **วิธีที่ถูกต้อง:** ทำ **Control Chart แยกตาม Cavity (Stratified Charts)** (เก็บ `4–5 ช็อตต่อเนื่องจาก Cavity เดียวกัน`) หรือใช้วิธี **Critical / Worst-Case Cavity Tracking + Multi-Vari Audit** เพื่อคุม `Melt Cushion / Part Weight / Critical Boss ID`

## M7L2-S04 — Stamping & Forming Processes (Press / Die / Coil Feed)
`<Asset id="AST-M7-008" />`
- **Dominant Variation:** **Lot-to-Lot Material Coil Thickness & Die Clearance Wear** (เปลี่ยนม้วนเหล็ก Coil ใหม่, พันช์ทื่อเกิด Burr)
- **ตัวอย่าง CTQ & Chart:**
  - `Bend Angle / Pitch Dimension`: ความเร็วเครื่องสูงมาก (`500–1,000` strokes/hr) → เก็บ `n = 5` ชิ้นต่อเนื่องทุก 30–60 นาที **และทุกครั้งที่เปลี่ยน Coil ใหม่** → **$\bar{X}$-$R$ Chart** (เปิด **Shift Rule** จับตอนเปลี่ยน Coil)
  - `Tab Burr Height / Tear Pass-Fail`: ตรวจ Go/No-Go คงที่กะละ/รอบละ `100` ชิ้น → **`np` Chart** (ปัด `LCL = 0` เมื่อ `LCL < 0`!)

## M7L2-S05 — Interactive Production Line CTQ & Subgroup Planner
`<Interactive id="INT-M7-L2-01" />`
- เลือกสายการผลิตทั้ง 4 ประเภท (**Machining / Assembly / Injection / Stamping**) แล้วจับคู่ **CTQ + วิธีเก็บ Rational Subgroup + ชนิด Control Chart + Event Log สำคัญ** ให้ถูกต้อง (`>= 4/4`, `+10 pts`)

## M7L2-S06 — Lesson 2 Knowledge Check (`KC-M7-L2`)
- ทบทวน 2 ข้อ (`M7-Q016`, `M7-Q023`)

---

# LESSON M7-L3: Process Monitoring, Reaction Plan & Escalation (`7.3`)

## M7L3-S01 — Living Control Charts vs "Wallpaper SPC"
`<Asset id="AST-M7-009" />`
- **ปรากฏการณ์ "Wallpaper SPC" (กระดาษปิดผนัง):** พนักงานจดตัวเลขใส่กระดาษตลอดกะแล้ว **ค่อยเอามาพล็อตกราฟทีเดียวตอน 16:45 น. ก่อนกลับบ้าน** (หรือคีย์ลง Excel สิ้นวัน)!
- **ผลลัพธ์:** หากเครื่องเพี้ยนตั้งแต่ `09:00 น.` สายการผลิตได้ปั๊มของเสียไปแล้วทั้งวัน — นั่นไม่ใช่ SPC แต่เป็นแค่ *"รายงานงานศพของเสีย"*!
- **กฎเหล็ก Real-Time Plotting:** **วัดเสร็จ → พล็อตทันที (ภายใน 1 นาที)** บนหน้าเครื่อง/หน้าจอ Tablet และตัดสินใจอ่านกฎก่อนเดินเครื่องต่อ!

## M7L3-S02 — Designing an Actionable Reaction Plan (แผนโต้ตอบที่ใช้ได้จริง)
`<Asset id="AST-M7-010" />`
- **เปรียบเทียบ Reaction Plan ที่ "ห่วย" vs "มืออาชีพ":**

| เกณฑ์ | Reaction Plan ที่ใช้ไม่ได้จริง (Vague) | Reaction Plan ที่ชัดเจน (Actionable & Time-Bound) |
|---|---|---|
| **ข้อความใน Control Plan** | *"แจ้งหัวหน้างาน (Notify Supervisor)"* | *"1) หยุด/Pause จ่ายชิ้นงาน 2) วัดซ้ำจุดเดิมภายใน 2 นาที 3) กักกันสินค้าย้อนหลังถึง Subgroup ที่ดีล่าสุด (สูงสุด 60 ชิ้น) 4) ตรวจคมมีด/เปลี่ยน Insert ตาม WI-CNC-05"* |
| **ขอบเขตการกักกัน** | ไม่ระบุจำนวนชิ้น | ระบุ **100% Backtrack to Last Good Subgroup** ชัดเจน |
| **การปรับเครื่อง** | ปรับ Offset มั่วแม้จุดอยู่ใน `UCL/LCL` | ห้ามปรับใน Common Cause; ปรับแก้เฉพาะเมื่อเกิด OOC พร้อมบันทึก Log |

## M7L3-S03 — 3-Tier Escalation Matrix & SLA (Service Level Agreement)
`<Asset id="AST-M7-011" />`
- เมื่อเกิดสัญญาณ Out-of-Control และแก้ไขเบื้องต้นไม่หาย ต้องมีระบบ **Escalation เป็นลำดับขั้นพร้อมเวลา (Time-Bound SLA):**
  - **Tier 1 — Operator (`0–15 นาที`):** หยุด/Auto-Pause → Verify การวัด (ตัดปัญหา Measure Error) → กักกันชิ้นงาน (`Containment Block`) → ตรวจ Condition พื้นฐาน (เปลี่ยนมีด/ทำความสะอาด/Event Log)
  - **Tier 2 — Line Leader / Process Technician (`15–60 นาที`):** หากยัง OOC ซ้ำ 2 จุดติด หรือแก้ไม่จบ → ตรวจพารามิเตอร์เครื่อง, Setup, Fixture, และตรวจสอบสินค้าในโซนกักกัน (`Sort 100%`)
  - **Tier 3 — Quality Engineer / Process Engineer (`> 60 นาที` หรือ Raw Data > Spec ร้ายแรง / Multi-lot OOC):** สั่ง **Hold Lot (ตามแนวทาง `OCAP / JEDEC JESD557`)** เปิด MRB / 8D / Root Cause Analysis (Module 8) ก่อน Release ไลน์ใหม่!

## M7L3-S04 — Interactive Reaction & Escalation Flowchart Simulator
`<Interactive id="INT-M7-L3-01" />`
- จำลองเหตุการณ์ OOC หน้าไลน์ 4 สถานการณ์ (`1. Single Measurement Typo`, `2. Tool Wear Resolved at Tier 1`, `3. Unresolved Parameter Drift Escalated to Tier 2`, `4. Repeated Raw Data > USL Escalated to Tier 3 Lot Hold`) เพื่อฝึกตัดสินใจตาม Escalation Flowchart & SLA (`+10 pts`)

## M7L3-S05 — Lesson 3 Knowledge Check (`KC-M7-L3`)
- ทบทวน 2 ข้อ (`M7-Q031`, `M7-Q038`)

---

# LESSON M7-L4: Layered Process Audit (LPA) & Control Plan Workshop (`7.4`)

## M7L4-S01 — What Is Layered Process Audit (LPA / `AIAG CQI-8`)?
`<Asset id="AST-M7-012" />`
- **ทำไมระบบ SPC ดีๆ ถึงมัก "ตายลงใน 6 เดือน"?** เพราะขาดความสม่ำเสมอในการตรวจติดตามจากหัวหน้างาน!
- **Layered Process Audit (LPA):** ระบบตรวจประเมินกระบวนการผลิตซ้ำๆ แบบหลายชั้น (Multi-layered) ใช้เวลาตรวจจุดละ 5–10 นาทีที่หน้างานจริง (**Gemba**):
  - **Layer 1 — Line Supervisor:** ตรวจ **ทุกวัน/ทุกกะ** (เช็กว่าพนักงานพล็อตจริงและปฏิบัติตาม Reaction Plan)
  - **Layer 2 — Department Manager (Prod / QA / Eng):** ตรวจ **รายสัปดาห์** (เช็กคุณภาพของ Rational Subgroup และแนวโน้มจุด OOC ที่ค้าง)
  - **Layer 3 — Plant Manager / Leadership:** ตรวจ **รายเดือน** (แสดงความมุ่งมั่นของฝ่ายบริหารและตรวจการแก้ปัญหาระบบ)

## M7L4-S02 — Top 6 High-Impact SPC Verification Questions for LPA
`<Asset id="AST-M7-013" />`
1. **Real-Time Check:** จุดล่าสุดถูกพล็อต **ตรงเวลาตามความถี่จริง** หรือถูกเว้นว่างรอเติมปลายกะ? *(จับ Wallpaper SPC!)*
2. **Rational Subgroup Integrity:** ขอดูพนักงานหยิบตัวอย่างจริงว่าหยิบ **ต่อเนื่องจากแหล่งเดียวกัน** ไม่ผสมข้าม Cavity/Spindle หรือเลือกหยิบเฉพาะชิ้นสวย *(จับ Cherry-picking)*
3. **Rule & Zero-Bound Literacy:** พนักงานชี้บอกได้ไหมว่านอกจาก **Rule 1 (`> UCL / < LCL` ที่ Valid)** แล้ว มีกฎเสริมข้อใดที่เปิดใช้อยู่?
4. **Event Log Match:** ช่วงเวลาเปลี่ยนมีด/เปลี่ยน Coil/ปรับเครื่อง ถูกจดไว้บน Control Chart ตรงกับใบ Log เครื่องจักรหรือไม่?
5. **Reaction Plan Execution:** เมื่อจุดย้อนหลังเคยหลุด `UCL` มีหลักฐานการ **Containment + แก้สาเหตุ + ลงนาม** ครบตาม Tier 1–3 หรือไม่?
6. **Gage Validity:** เครื่องมือวัดที่ใช้อยู่ **รหัสตรงตาม Control Plan** และสติกเกอร์สอบเทียบ (Calibration) ยังไม่หมดอายุใช่หรือไม่?

## M7L4-S03 — Closed-Loop Ecosystem: PFMEA ↔ Control Plan ↔ SPC ↔ LPA
`<Asset id="AST-M7-014" />`
- วงจรปิดคุณภาพในโรงงานมาตรฐานสากล:
  - **PFMEA** ชี้ความเสี่ยง → **Control Plan** กำหนด CTQ, Chart, Subgroup, Rules, Reaction Plan → **SPC Chart หน้าไลน์** ดักจับความผิดปกติ Real-time → **LPA** ตรวจความวินัยหน้างาน + ป้อนข้อมูลความถี่ OOC กลับไปปรับปรุง **PFMEA / Control Plan** ให้แข็งแกร่งขึ้นทุกไตรมาส!

## M7L4-S04 — Workshop Part A: ออกแบบ SPC Monitoring Plan เชื่อม Control Plan (6 Stations)
`<Interactive id="INT-M7-L4-01" />`
- **ไฟล์ข้อมูล:** [data/workshop_m7_control_plan_line.csv](data/workshop_m7_control_plan_line.csv)
- **ภารกิจ:** ตรวจสอบข้อมูลสายการผลิต 6 สถานีจริง (`STN-10 CNC Turning`, `STN-20 Grinding Ra`, `STN-30 4-Cavity Injection`, `STN-40 Stamping Burr`, `STN-50 Auto Torque`, `STN-60 Final SMT Solder`) เพื่อวาง **Chart Type, Subgroup Strategy, SPC Rule Bounds, Containment Risk & LPA Check** ให้สมบูรณ์ครบทุกช่อง!

## M7L4-S05 — Workshop Part A Solution: Station-by-Station Plan (STN-10 to STN-60)
`<Asset id="AST-M7-015" />`
- **STN-10 (CNC Shaft OD):** `Xbar-R`, `n=5` ต่อเนื่อง/30 นาที (`60 pcs risk`) | เปิด `Rule 1 + Raw Spec + Trend (6)` | LPA เช็กไม่ Cherry-pick & Event log
- **STN-20 (Grinding Roughness Ra):** `Xbar-R`, `n=5/60 นาที` (`90 pcs`) | **Mandatory `Rule 1 > UCL ONLY` (`LCL < 0` ไม่ Valid!)** + `Trend` | LPA ยืนยันไม่เปิด `< LCL` เตือนมั่ว
- **STN-30 (Injection 4-Cavity):** **ห้ามผสม Cavities!** ใช้ **`Xbar-R` แยกตาม Cavity (`n=4/60 นาที`)** (`240 pcs total`) | LPA สุ่มตรวจวิธีหยิบแยก Cavity
- **STN-40 (Stamping Burr, Go/No-Go `n=100` คงที่):** **`np Chart`** (`LCL=0`) | ความเร็ว `600 pcs/hr`, สุ่มทุก `120 นาที` = **ความเสี่ยงกักกันสูงถึง `1,200 ชิ้น`**!
- **STN-50 (Auto Torque PLC 100%):** **`I-MR (Auto PLC)`** (`60 pcs/hr`, สุ่มทุก `1 นาที` = **`1 pc` containment**) พร้อม Auto-interlock
- **STN-60 (SMT Solder Defects, 20–50 แผง):** **`u Chart`** (Staircase limits) | สุ่มทุก 2 ชม. (`80 boards max`) ดูรายละเอียดใน [07_workshop_guide.md](07_workshop_guide.md)

## M7L4-S06 — Workshop Part B Lab: Audit Containment Risk & Fix Broken Reaction Plans
`<Interactive id="INT-M7-L4-02" />`
- แก้ปัญหาหน้างาน 3 โจทย์จากข้อมูล CSV:
  1. ลดปริมาณสินค้าเสี่ยงกักกันที่ `STN-40` จาก **`1,200 ชิ้น`** เหลือ **`<= 300 ชิ้น`** ด้วยการคำนวณ Sampling Interval ใหม่ (`120 min → 30 min`)
  2. เขียนแก้ Reaction Plan ที่ห่วย (*"แจ้งหัวหน้างาน"*) ให้เป็น Actionable 4-Step Plan + ระบุ Escalation Tier
  3. จับข้อผิดพลาดในสถานการณ์ LPA Audit จำลอง (`Wallpaper SPC` & `Mixed Cavity Subgroup`)

## M7L4-S07 — Audit & Sustainment Dashboard (Closed-Loop Ready)
`<Asset id="AST-M7-016" />`
- สรุปภาพรวม **SPC Control Plan Architecture** ที่ผ่านการตรวจสอบทั้งความไว (`Containment Volume`), การแบ่ง Subgroup, การตั้ง Mandatory/Optional Rules, Reaction/Escalation, และ LPA Audit Readiness ครบ `6/6` สถานี

## M7L4-S08 — Module 7 Summary & Bridge to Module 8
`<Asset id="AST-M7-017" />`
- ตอนนี้ระบบตรวจจับและเฝ้าระวัง SPC บนสายการผลิตพร้อมทำงาน 100% แล้ว — ใน **Module 8** เมื่อระบบส่งสัญญาณเตือน OOC ขึ้นมา เราจะไปเรียนรู้ **SPC Problem Solving** ฉบับเต็ม: **OCAP เต็มรูปแบบ, 7 QC Tools, 5 Why / Fishbone / Fault Tree และ PDCA / Kaizen / DMAIC**!

## M7L4-S09 — Module 7 Final Assessment (`EXAM-M7`)
- สอบประมวลผลสุ่ม **20 ข้อ** จากคลัง [06_assessment_bank.md](06_assessment_bank.md) (`M7-Q001`–`M7-Q060`) | เกณฑ์ผ่าน **80% (`16/20`)**
