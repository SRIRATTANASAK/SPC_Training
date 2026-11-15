# Module 10 Full Lesson Content (Web & MDX Ready — 26 Screens)

**Module 10: Industrial Case Study (`AIAG-Based Capstone Cases 1–4`: Machining `X̄-R`, Assembly `I-MR`, Defect `p/u`, PPAP `Ppk` Release)**  
เอกสารนี้คือ **เนื้อหาบนหน้าจอฉบับสมบูรณ์ (On-Screen Teaching Copy)** สำหรับนักพัฒนาเว็บนำไปสร้างหน้าเว็บ/สไลด์ (MDX/React) คู่กับเสียงบรรยายใน [02_voiceover_th_en.md](02_voiceover_th_en.md) และตัวจำลองใน [04_interactive_logic.md](04_interactive_logic.md)

---

# LESSON M10-L1: Case 1 — Machining Process (`X̄-R` Chart + `Cp / Cpk`) (`10.1`)

## M10L1-S01 — Welcome to the Capstone: From Theory to 4 AIAG Industrial Cases
`<Asset id="AST-M10-001" />`
- **บทส่งท้ายหลักสูตร (`Module 1–9` Integration):** ตลอด 9 Modules ที่ผ่านมา คุณได้สะสมเครื่องมือครบชุดตั้งแต่ **Data & Probability (M1–2) → Hypothesis Testing (M3) → Capability (M4) → SPC Rules (M5) → Chart Selection (M6) → Shop-Floor Control Plan & LPA (M7) → OCAP & RCA (M8) → MSA (M9)**
- **ภารกิจใน Module 10:** ลงสนามวิเคราะห์ **4 กรณีศึกษาอุตสาหกรรมมาตรฐาน AIAG** ด้วยชุดข้อมูล CSV จริง พร้อมตัดสินใจเชิงวิศวกรรมครบวงจร!

## M10L1-S02 — Case 1 Brief: CNC Shaft Turning (`30.000 ± 0.050 mm`)
`<Asset id="AST-M10-002" />`
- **โจทย์โรงงาน:** สายการกลึงเพลา CNC (`Shaft OD`) — Spec **`30.000 ± 0.050 mm`** (`LSL = 29.950`, `USL = 30.050`)
- **ความพร้อม MSA:** ผ่าน Gage R&R ด้วยไมโครมิเตอร์ `0.001 mm` (`%GRR = 6.5% < 10%`, `ndc = 18`)
- **แผนสุ่มตัวอย่าง:** เก็บ `n = 5` ชิ้นต่อเนื่องทุก 30 นาที (`20 Subgroups = 100 ชิ้น`) → ใช้ **`X̄-R` Chart** ([data/case1_machining_xbar_r.csv](data/case1_machining_xbar_r.csv))

## M10L1-S03 — Case 1 Analysis: Baseline Limits, Tool Wear Drift & Capability
`<Asset id="AST-M10-003" />`
- **Phase I Baseline (`SG-01..15`):**
  - $\bar{\bar{X}} = 30.0000\text{ mm}$, $\bar{R} = 0.0048\text{ mm}$
  - `UCL_X` $= 30.0000 + 0.577(0.0048) = \mathbf{30.0028\text{ mm}}$ | `LCL_X` $= \mathbf{29.9972\text{ mm}}$
  - `UCL_R` $= 2.114(0.0048) = \mathbf{0.0101\text{ mm}}$ | `LCL_R = 0`
  - **Capability ช่วงเสถียร:** $\hat{\sigma}_{\text{within}} = 0.0048 / 2.326 = 0.00206\text{ mm}$ → **`Cp = 8.08`, `Cpk = 8.08`**!
- **สิ่งที่เกิดขึ้นใน `SG-16..20`:** `R` Chart ยังนิ่งอยู่ในเส้นควบคุม แต่ `X̄` ไหลขึ้นต่อเนื่อง (**Tool Wear Drift**) จนทะลุ `UCL_X` ตั้งแต่ `SG-16..20` (`30.0040 → 30.0150 mm`)!

## M10L1-S04 — Case 1 OCAP & Tool-Life Preventive Action
`<Asset id="AST-M10-004" />`
- **การตัดสินใจเชิงวิศวกรรม:**
  - แม้ค่าที่ `30.0150 mm` ยังไม่หลุด `USL (30.050)` แต่ `X̄` **หลุด `UCL_X` แล้ว!** → ต้องปฏิบัติตาม **OCAP** เปลี่ยนเม็ดมีดกลึง (`Tool Insert`), ลง **Event Log**, และตั้งรอบเปลี่ยนมีดเชิงป้องกัน (`Tool Life Counter`) ก่อนถึง Subgroup ที่ 16!

## M10L1-S05 — Interactive Case 1 Dashboard (`X̄-R + Cpk`)
`<Interactive id="INT-M10-L1-01" />`
- โหลดข้อมูล `case1_machining_xbar_r.csv` → ตรวจจุด OOC บน `X̄-R` Chart, เช็ก `Cp/Cpk`, และเลือก OCAP Action ที่ถูกต้อง (`+15 pts`)

## M10L1-S06 — Lesson 1 Knowledge Check (`KC-M10-L1`)
- ทบทวน 2 ข้อ (`M10-Q001`, `M10-Q008`) จาก [06_assessment_bank.md](06_assessment_bank.md)

---

# LESSON M10-L2: Case 2 — Assembly Process (`I-MR` Torque Monitoring) (`10.2`)

## M10L2-S01 — Case 2 Brief: Automated Bolt Torque (`25.0 ± 3.0 Nm`)
`<Asset id="AST-M10-005" />`
- **โจทย์โรงงาน:** สถานีขันสกรูอัตโนมัติ (`Automated Torque Driver`) — Spec **`25.0 ± 3.0 Nm`** (`LSL = 22.0`, `USL = 28.0`)
- **เหตุผลที่เลือก `I-MR` Chart:** PLC อ่านค่าทุกชิ้น (`n = 1`, `25` จุดต่อเนื่อง) ([data/case2_assembly_imr_torque.csv](data/case2_assembly_imr_torque.csv))

## M10L2-S02 — Case 2 Analysis: Detecting Sudden Clutch Slippage
`<Asset id="AST-M10-006" />`
- **Phase I Baseline (`PT-01..20`):**
  - $\bar{I} = 25.01\text{ Nm}$, $\overline{MR} = 0.305\text{ Nm}$
  - `UCL_I` $= 25.01 + 2.660(0.305) = \mathbf{25.82\text{ Nm}}$ | `LCL_I` $= 25.01 - 2.660(0.305) = \mathbf{24.19\text{ Nm}}$
  - `UCL_MR` $= 3.267(0.305) = \mathbf{1.00\text{ Nm}}$
- **สัญญาณ OOC (`PT-21..25`):** ค่าแรงบิดตกลงมาอยู่ที่ **`22.4 – 22.8 Nm` ต่ำกว่า `LCL_I (24.19)`** ถึง `5` จุดติด! (และ `MR` ตรงรอยต่อ `PT-21` พุ่งเป็น `2.30 > 1.00`)

## M10L2-S03 — Case 2 Root Cause & PLC Interlock Solution
`<Asset id="AST-M10-007" />`
- **ข้อสังเกตสำคัญ:** ค่า `22.4 Nm` **ยังไม่หลุด `LSL (22.0)`** — ถ้าไม่มี SPC คุม ไลน์จะปล่อยงานหลุดไปเรื่อยๆ จนสกรูคลาย!
- **การแก้ไข:** ตรวจพบ **Clutch ของปืนขันสกรูสึก** → เปลี่ยนชุด Clutch + ตั้ง **PLC Auto-Interlock** หยุดสายพานทันทีเมื่อต่ำกว่า `LCL_I`!

## M10L2-S04 — Interactive Case 2 Dashboard (`I-MR` Torque)
`<Interactive id="INT-M10-L2-01" />`
- โหลดข้อมูล `case2_assembly_imr_torque.csv` → ชี้จุด OOC บน `I` & `MR` Chart และสั่ง PLC Interlock (`+15 pts`)

## M10L2-S05 — Lesson 2 Knowledge Check (`KC-M10-L2`)
- ทบทวน 2 ข้อ (`M10-Q016`, `M10-Q023`)

---

# LESSON M10-L3: Case 3 — Defect Monitoring (`p` Chart & `u` Chart) (`10.3`)

## M10L3-S01 — Case 3 Brief: Surface Defective (`p`) vs Assembly Defects (`u`)
`<Asset id="AST-M10-008" />`
- **โจทย์โรงงาน:** ตรวจสอบชิ้นงาน **`20 Lots` (`∑n = 2,835` ชิ้น)** ที่ขนาด Lot (`n_i`) ไม่เท่ากัน (`100–180` ชิ้น) ([data/case3_defect_p_u_chart.csv](data/case3_defect_p_u_chart.csv))
  - **`p` Chart:** ติดตามสัดส่วน **ชิ้นเสีย (Defective Units)** ต่อ Lot
  - **`u` Chart:** ติดตามค่าเฉลี่ย **จุดตำหนิ (Total Defects per Unit)** ต่อ Lot

## M10L3-S02 — Case 3 Analysis: Staircase Limits & Dual OOC Signals
`<Asset id="AST-M10-009" />`
- **ค่าเฉลี่ยรวม:** $\bar{p} = \mathbf{0.0282}$ (`2.82%`), $\bar{u} = \mathbf{0.0501}$ จุด/ชิ้น
- **เส้นควบคุมแบบขั้นบันได (Staircase Limits):** เปลี่ยนตาม $n_i$ ของแต่ละ Lot!
- **ผลการตรวจจับ OOC:**
  - **`LOT-13` (`n = 160`):** พบ `14` ชิ้นเสีย → $p = 0.0875 > \text{UCL}_p (0.0675)$ (**`OOC บน p Chart`**)
  - **`LOT-17` (`n = 120`):** พบ `18` จุดตำหนิ (จาก `3` ชิ้นเสีย) → $u = 0.1500 > \text{UCL}_u (0.1114)$ (**`OOC บน u Chart`**)

## M10L3-S03 — Case 3 Insight: Why Both `p` and `u` Matter Together
`<Asset id="AST-M10-010" />`
- **บทเรียนสำคัญ:** ที่ `LOT-17` มีชิ้นเสียแค่ `3` ชิ้น (`p = 0.0250` ปกติ!) แต่แต่ละชิ้นมีรอยขีดข่วนเฉลี่ยชิ้นละ `6` จุด (`18` จุดรวม) ทำให้ **`u` Chart ร้องเตือนทันที!** → การแยก `Defective` ออกจาก `Defect` ช่วยจับปัญหาคุณภาพผิวได้ไวกว่า `p` Chart อย่างเดียว

## M10L3-S04 — Interactive Case 3 Dashboard (`p` & `u` Chart)
`<Interactive id="INT-M10-L3-01" />`
- โหลดข้อมูล `case3_defect_p_u_chart.csv` → สลับมุมมอง `p Chart` vs `u Chart` เพื่อจับ `LOT-13` และ `LOT-17` (`+15 pts`)

## M10L3-S05 — Lesson 3 Knowledge Check (`KC-M10-L3`)
- ทบทวน 2 ข้อ (`M10-Q031`, `M10-Q038`)

---

# LESSON M10-L4: Case 4 — PPAP Process Release Study (`Ppk >= 1.67`) & Graduation (`10.4`)

## M10L4-S01 — Case 4 Brief: AIAG PPAP Run-at-Rate (`100` Parts)
`<Asset id="AST-M10-011" />`
- **โจทย์โรงงาน:** ทดสอบเดินเครื่องผลิตจริงก่อนส่งมอบลูกค้า (**PPAP Initial Process Study / Run-at-Rate**) งาน `Bracket Width` — Spec **`50.000 ± 0.100 mm`** (`LSL = 49.900`, `USL = 50.100`), เก็บ `20 Subgroups × 5 = 100` ชิ้น ([data/case4_ppap_release_ppk.csv](data/case4_ppap_release_ppk.csv))

## M10L4-S02 — Checking the 3 Prerequisite Gates Before Releasing `Ppk`
`<Asset id="AST-M10-012" />`
- ก่อนคำนวณ $P_{pk}$ ส่งลูกค้า ต้องผ่าน **3 ด่านบังคับ (AIAG PPAP)**:
  1. **MSA Gate:** `%GRR < 10%` (ผ่าน!)
  2. **Stability Gate:** พล็อต `X̄-R` Chart ทั้ง `20` กลุ่มต้อง **`0` OOC** (ผ่าน!)
  3. **Normality Gate:** ข้อมูล `100` ชิ้นแจกแจงปกติ (ผ่าน!)

## M10L4-S03 — Case 4 Calculation & Release Decision (`Ppk = 2.474`)
`<Asset id="AST-M10-013" />`
- **ผลคำนวณจาก `100` ชิ้น:**
  - $\bar{X} = \mathbf{50.0019\text{ mm}}$, $s_{\text{overall}} = \mathbf{0.01322\text{ mm}}$
  - $P_{pu} = \frac{50.100 - 50.0019}{3 \times 0.01322} = 2.474$, $\quad P_{pl} = \frac{50.0019 - 49.900}{3 \times 0.01322} = 2.569$
  - **$P_{pk} = \mathbf{2.474} \ge 1.67$** → **APPROVED FOR PPAP RELEASE!** (ส่งมอบไลน์ผลิตจริงและลดความถี่คุมเป็น Ongoing `Cpk >= 1.33` บน Control Plan)

## M10L4-S04 — Interactive Capstone Case 4 Dashboard (`PPAP Release`)
`<Interactive id="INT-M10-L4-01" />`
- โหลดข้อมูล `case4_ppap_release_ppk.csv` → ตรวจ 3 Gates, ยืนยัน `Ppk = 2.474`, และกดอนุมัติ **PPAP Release** (`+15 pts`)

## M10L4-S05 — Capstone Summary: Your Complete 10-Module SPC Playbook
`<Asset id="AST-M10-014" />`
- ยินดีด้วยครับ! คุณได้เชื่อมต่อครบทั้ง **10 Modules** ตั้งแต่พื้นฐานสถิติ (`M1–M3`) → Capability (`M4`) → SPC Rules & Chart Selection (`M5–M6`) → Shop-Floor Deployment & LPA (`M7`) → Problem Solving (`M8`) → MSA (`M9`) → **4 AIAG Industrial Cases (`M10`)**!

## M10L4-S06 — Lesson 4 Knowledge Check (`KC-M10-L4`)
- ทบทวน 2 ข้อ (`M10-Q046`, `M10-Q052`)

## M10L4-S07 — Course Resources & Final Master Checklist
`<Asset id="AST-M10-015" />`
- ดาวน์โหลด [08_cheatsheet_and_glossary.md](08_cheatsheet_and_glossary.md) และทบทวนสูตรทั้ง 4 Cases ก่อนเข้าสู่ Final Exam

## M10L4-S08 — Module 10 Final Assessment (`EXAM-M10`) & Graduation
`<Asset id="AST-M10-016" />`
- แบบทดสอบปลาย Module 10 แบบสุ่มแยกบท **20 ข้อ (`M10-Q001`–`M10-Q060`)** — เกณฑ์ผ่าน **`>= 80%` (`16/20`)** เพื่อรับ **Certificate of Completion (SPC & Manufacturing Statistics)**!
