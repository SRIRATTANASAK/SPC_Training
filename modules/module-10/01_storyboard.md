# Module 10 Production Storyboard (Developer & Web/LMS Ready)

**Module:** Module 10 — Industrial Case Study (`AIAG-Based Cases 1–4`: Machining `X̄-R`, Assembly `I-MR`, Defect `p/u`, PPAP `Ppk` Release)  
**Total Lessons:** 4 Lessons | **Total Screens:** 24 Screens (`M10L1-S01..S06`, `M10L2-S01..S05`, `M10L3-S01..S05`, `M10L4-S01..S08`)  
**Estimated Duration:** ~45 minutes (including 4 Interactive Case Dashboards + Final Capstone Exam)  
**Delivery Target:** Web Interactive Training (MDX/React + Thai Audio Sync) & SCORM 2004 Compatible

---

# LESSON M10-L1: Case 1 — Machining Process (`X̄-R` + `Cp/Cpk`) (`10.1`)

## Screen M10L1-S01 — Welcome to the Capstone: 4 AIAG Industrial Cases
- **Learning Objective:** เชื่อมโยงความรู้จาก Module 1–9 เข้าสู่ 4 กรณีศึกษาอุตสาหกรรมจริง
- **Duration:** 25s | **Asset ID:** `AST-M10-001` | **Voice Over:** `AUD-M10L1-S01`
- **Layout:** Hero Split (4 Case Cards | Roadmap Completion Badge)
- **On Screen Text:** `CAPSTONE INDUSTRIAL CASES` — "นำทุกทักษะจาก M1–M9 ลงสนามจริง 4 โรงงาน!"

## Screen M10L1-S02 — Case 1 Brief: CNC Shaft Turning (`30.000 ± 0.050 mm`)
- **Learning Objective:** เข้าใจบริบท MSA, แผนสุ่ม `n=5`, และข้อมูล `case1_machining_xbar_r.csv`
- **Duration:** 30s | **Asset ID:** `AST-M10-002` | **Voice Over:** `AUD-M10L1-S02`
- **Layout:** Station Brief + CSV Preview
- **On Screen Text:** `Case 1:` "Shaft OD `30.000 ± 0.050 mm` | `X̄-R` (`20 × 5 = 100 ชิ้น`)"

## Screen M10L1-S03 — Case 1 Analysis: Baseline Limits, Tool Wear Drift & Capability
- **Learning Objective:** วิเคราะห์เส้นควบคุม `UCL_X = 30.0028`, `Cpk = 8.08`, และจับ Tool Wear Drift ใน `SG-16..20`
- **Duration:** 40s | **Asset ID:** `AST-M10-003` | **Voice Over:** `AUD-M10L1-S03`
- **Layout:** Annotated `X̄-R` Chart
- **On Screen Text:** "`SG-16..20` ไหลขึ้นต่อเนื่องจาก Tool Wear จนทะลุ `UCL_X (30.0028)`!"

## Screen M10L1-S04 — Case 1 OCAP & Tool-Life Preventive Action
- **Learning Objective:** ตัดสินใจเปลี่ยนมีดกลึงและตั้ง Tool Life Counter ก่อนถึง `SG-16`
- **Duration:** 30s | **Asset ID:** `AST-M10-004` | **Voice Over:** `AUD-M10L1-S04`
- **Layout:** OCAP Action Card
- **On Screen Text:** "เปลี่ยน Insert + ลง Event Log + ตั้ง Tool Life Counter ป้องกันซ้ำ!"

## Screen M10L1-S05 — Interactive Case 1 Dashboard (`X̄-R + Cpk`)
- **Learning Objective:** วิเคราะห์ `case1_machining_xbar_r.csv` และเลือก OCAP Action
- **Duration:** 60s | **Asset ID:** N/A | **Interactive ID:** `INT-M10-L1-01` | **Voice Over:** `AUD-M10L1-S05`
- **Layout:** Interactive Chart + Action Selector
- **On Screen Text:** "คลิกจุด OOC บนกราฟ Case 1 และเลือกมาตรการแก้ไข!"

## Screen M10L1-S06 — Lesson 1 Knowledge Check (`KC-M10-L1`)
- **Learning Objective:** ทดสอบ Case 1 (`M10-Q001`, `M10-Q008`)
- **Duration:** 30s | **Asset ID:** N/A | **Voice Over:** `AUD-M10L1-S06`
- **Layout:** Centered 2-Question Card

---

# LESSON M10-L2: Case 2 — Assembly Process (`I-MR` Torque) (`10.2`)

## Screen M10L2-S01 — Case 2 Brief: Automated Bolt Torque (`25.0 ± 3.0 Nm`)
- **Learning Objective:** เข้าใจเหตุผลที่ใช้ `I-MR` กับข้อมูล PLC 100% (`25` จุด)
- **Duration:** 30s | **Asset ID:** `AST-M10-005` | **Voice Over:** `AUD-M10L2-S01`
- **Layout:** Torque Station Brief + CSV Preview
- **On Screen Text:** `Case 2:` "Bolt Torque `25.0 ± 3.0 Nm` | PLC `I-MR` (`n = 1`)"

## Screen M10L2-S02 — Case 2 Analysis: Detecting Sudden Clutch Slippage
- **Learning Objective:** จับสัญญาณ `PT-21..25` ต่ำกว่า `LCL_I (24.19)` และ `MR > 1.00`
- **Duration:** 40s | **Asset ID:** `AST-M10-006` | **Voice Over:** `AUD-M10L2-S02`
- **Layout:** Annotated `I-MR` Chart
- **On Screen Text:** "`PT-21..25` ตกเหลือ `22.4–22.8 Nm` ต่ำกว่า `LCL_I (24.19)`!"

## Screen M10L2-S03 — Case 2 Root Cause & PLC Interlock Solution
- **Learning Objective:** เห็นคุณค่าของ Control Limit ที่จับปัญหาก่อนหลุด `LSL (22.0)` และสั่ง PLC Interlock
- **Duration:** 30s | **Asset ID:** `AST-M10-007` | **Voice Over:** `AUD-M10L2-S03`
- **Layout:** Interlock Action Card
- **On Screen Text:** "จับได้ก่อนหลุด `LSL (22.0)` → เปลี่ยน Clutch + เปิด PLC Auto-Interlock!"

## Screen M10L2-S04 — Interactive Case 2 Dashboard (`I-MR` Torque)
- **Learning Objective:** วิเคราะห์ `case2_assembly_imr_torque.csv` และเปิด PLC Interlock
- **Duration:** 60s | **Asset ID:** N/A | **Interactive ID:** `INT-M10-L2-01` | **Voice Over:** `AUD-M10L2-S04`
- **Layout:** Interactive `I-MR` Dashboard

## Screen M10L2-S05 — Lesson 2 Knowledge Check (`KC-M10-L2`)
- **Learning Objective:** ทดสอบ Case 2 (`M10-Q016`, `M10-Q023`)
- **Duration:** 30s | **Asset ID:** N/A | **Voice Over:** `AUD-M10L2-S05`
- **Layout:** Centered 2-Question Card

---

# LESSON M10-L3: Case 3 — Defect Monitoring (`p` & `u` Chart) (`10.3`)

## Screen M10L3-S01 — Case 3 Brief: Surface Defective (`p`) vs Assembly Defects (`u`)
- **Learning Objective:** แยกตัวชี้วัด `p` (ชิ้นเสีย) กับ `u` (จุดตำหนิ) บนข้อมูล `20 Lots` (`∑n = 2,835`)
- **Duration:** 30s | **Asset ID:** `AST-M10-008` | **Voice Over:** `AUD-M10L3-S01`
- **Layout:** Dual Attribute Brief
- **On Screen Text:** `Case 3:` "20 Lots (`∑n = 2,835`) — `p Chart` vs `u Chart`"

## Screen M10L3-S02 — Case 3 Analysis: Staircase Limits & Dual OOC Signals
- **Learning Objective:** อ่าน Staircase `UCL_p / UCL_u` และจับ `LOT-13` (OOC `p`) กับ `LOT-17` (OOC `u`)
- **Duration:** 40s | **Asset ID:** `AST-M10-009` | **Voice Over:** `AUD-M10L3-S02`
- **Layout:** Dual Staircase Control Charts
- **On Screen Text:** "`LOT-13` หลุด `p Chart` (`0.0875`) | `LOT-17` หลุด `u Chart` (`0.1500`)!"

## Screen M10L3-S03 — Case 3 Insight: Why Both `p` and `u` Matter Together
- **Learning Objective:** เข้าใจเหตุผลที่ `LOT-17` ผ่าน `p Chart` แต่หลุด `u Chart`
- **Duration:** 30s | **Asset ID:** `AST-M10-010` | **Voice Over:** `AUD-M10L3-S03`
- **Layout:** Insight Comparison Card
- **On Screen Text:** "`LOT-17`: เสียแค่ `3` ชิ้น (`p` ปกติ) แต่มีรอยขีดข่วนถึง `18` จุด (`u` OOC)!"

## Screen M10L3-S04 — Interactive Case 3 Dashboard (`p` & `u` Chart)
- **Learning Objective:** วิเคราะห์ `case3_defect_p_u_chart.csv` และระบุ Lot ที่ OOC
- **Duration:** 60s | **Asset ID:** N/A | **Interactive ID:** `INT-M10-L3-01` | **Voice Over:** `AUD-M10L3-S04`
- **Layout:** Interactive `p / u` Switcher Dashboard

## Screen M10L3-S05 — Lesson 3 Knowledge Check (`KC-M10-L3`)
- **Learning Objective:** ทดสอบ Case 3 (`M10-Q031`, `M10-Q038`)
- **Duration:** 30s | **Asset ID:** N/A | **Voice Over:** `AUD-M10L3-S05`
- **Layout:** Centered 2-Question Card

---

# LESSON M10-L4: Case 4 — PPAP Release (`Ppk >= 1.67`) & Graduation (`10.4`)

## Screen M10L4-S01 — Case 4 Brief: AIAG PPAP Run-at-Rate (`100` Parts)
- **Learning Objective:** เข้าใจโจทย์ PPAP Release (`Bracket Width 50.000 ± 0.100 mm`)
- **Duration:** 30s | **Asset ID:** `AST-M10-011` | **Voice Over:** `AUD-M10L4-S01`
- **Layout:** PPAP Brief + CSV Preview

## Screen M10L4-S02 — Checking the 3 Prerequisite Gates Before Releasing `Ppk`
- **Learning Objective:** ตรวจ 3 Gates (`MSA < 10%`, `Stability 0 OOC`, `Normality`) ก่อนคำนวณ `Ppk`
- **Duration:** 35s | **Asset ID:** `AST-M10-012` | **Voice Over:** `AUD-M10L4-S02`
- **Layout:** 3-Gate Checklist

## Screen M10L4-S03 — Case 4 Calculation & Release Decision (`Ppk = 2.474`)
- **Learning Objective:** คำนวณ `Ppk = 2.474 >= 1.67` และอนุมัติ **PPAP Release** (เกณฑ์ตามข้อกำหนดลูกค้า/PPAP (ยังไม่ได้ยืนยันจากต้นฉบับ))
- **Duration:** 35s | **Asset ID:** `AST-M10-013` | **Voice Over:** `AUD-M10L4-S03`
- **Layout:** PPAP Approval Scorecard

## Screen M10L4-S04 — Interactive Capstone Case 4 Dashboard (`PPAP Release`)
- **Learning Objective:** ตรวจ 3 Gates และอนุมัติ PPAP Release จาก `case4_ppap_release_ppk.csv`
- **Duration:** 60s | **Asset ID:** N/A | **Interactive ID:** `INT-M10-L4-01` | **Voice Over:** `AUD-M10L4-S04`
- **Layout:** Interactive PPAP Release Console

## Screen M10L4-S05 — Capstone Summary: Your Complete 10-Module SPC Playbook
- **Learning Objective:** สรุปภาพรวมทั้ง 10 Modules
- **Duration:** 35s | **Asset ID:** `AST-M10-014` | **Voice Over:** `AUD-M10L4-S05`
- **Layout:** 10-Module Mastery Map

## Screen M10L4-S06 — Lesson 4 Knowledge Check (`KC-M10-L4`)
- **Learning Objective:** ทดสอบ Case 4 (`M10-Q046`, `M10-Q052`)
- **Duration:** 30s | **Asset ID:** N/A | **Voice Over:** `AUD-M10L4-S06`
- **Layout:** Centered 2-Question Card

## Screen M10L4-S07 — Course Resources & Final Master Checklist
- **Learning Objective:** ทบทวน Cheat Sheet ทั้ง 4 Cases ก่อนสอบ
- **Duration:** 20s | **Asset ID:** `AST-M10-015` | **Voice Over:** `AUD-M10L4-S07`
- **Layout:** Master Checklist + Cheat Sheet Link

## Screen M10L4-S08 — Module 10 Final Assessment (`EXAM-M10`) & Graduation
- **Learning Objective:** วัดผลสัมฤทธิ์ Module 10 (`>= 80%` จาก 20 ข้อ) และรับใบประกาศจบหลักสูตร
- **Duration:** 15m (Exam) | **Asset ID:** `AST-M10-016` | **Voice Over:** `AUD-M10L4-S08`
- **Layout:** Full-Screen Exam Runner + Graduation Certificate
