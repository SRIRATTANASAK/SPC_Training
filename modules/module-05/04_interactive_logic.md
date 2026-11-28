# Module 5 Interactive Logic Specification (Web-Native & SCORM Ready)

**Module:** Module 5 — SPC Concept and Methodology  
**Primary Runtime:** Web App (React / Astro MDX / HTML5 Interactive Components)  
**Passing Score (`EXAM-M5`):** 80% (`>= 16 / 20`)

---

## Global State Variables
```json
{
  "var_current_screen": "M5L1-S01",
  "var_completed_screens": [],
  "var_limit_mode": "control_limits",
  "var_excluded_subgroups": [],
  "var_process_profile": "symmetric_mean",
  "var_mandatory_rules": {
    "we1_ucl": true,
    "we1_lcl": true,
    "raw_data_vs_spec": true
  },
  "var_active_rules": {
    "we1": true,
    "we2": true,
    "we3": false,
    "we4": true,
    "nelson_trend": true,
    "nelson_alt": false,
    "nelson_hug": false
  },
  "var_lesson_scores": { "L1": 0, "L2": 0, "L3": 0, "L4": 0 },
  "var_exam_score": 0,
  "var_exam_passed": false
}
```

---

## Lesson M5-L2 Interactions

### INT-M5-L2-01 — Control vs Spec Limit & Phase I/II Builder (`M5L2-S05`)
- **Inputs:**
  - `var_limit_mode`: `"spec_trap"` (`USL = 25.080, LSL = 24.920` plotted wrongly on X̄ chart) | `"control_limits"` (`CL ± A2*R̄`)
  - `var_excluded_subgroups`: Checkbox toggle on verified special-cause subgroup (`SG-11`)
  - Button `"Freeze Phase II Limits"`: Locks revised `UCL/CL/LCL` and streams 5 new production subgroups
- **Logic:**
  - Demonstrates why `spec_trap` fails to trigger any alert when `SG-11 (25.035)` shifts by `+6.5σ_Xbar`, whereas true `UCL (25.0226)` flags it instantly.
  - Excluding `SG-11` dynamically recalculates `CL_X`, `UCL_X`, `LCL_X`, and `UCL_R`.
- **Completion Trigger:** Toggle both modes and exclude `SG-11` (`+10 pts`).

---

## Lesson M5-L3 Interactions

### INT-M5-L3-01 — Special Cause Pattern Diagnosis Matcher (`M5L3-S06`)
- **Type:** 6-Chart Visual Signature Matcher (`Passing >= 5/6`, `+10 pts`)
- **Patterns & Correct Causes:**
  1. **Sudden Step Jump (Level Shift):** เปลี่ยนล็อตวัตถุดิบ / ปรับ Offset / เปลี่ยน Tooling
  2. **Steady 7-Point Upward Slope (Trend):** Tool Wear (มีดกลึงสึก) หรืออุณหภูมิเครื่องสะสม
  3. **Regular Sine Wave (Cyclic):** รอบอุณหภูมิกลางวัน–กลางคืน / รอบชิลเลอร์ / รอบเปลี่ยนกะ
  4. **Points Jumping Near Both `UCL` & `LCL` (Mixture):** รวม 2 เครื่องจักร หรือ 2 Cavities ที่ตั้งค่าต่างกันในกราฟเดียว → แยกกราฟ (Stratify)
  5. **15+ Points Tightly Hugging `CL` (Stratification):** ผสมหลายแหล่งเข้าใน 1 Subgroup จน `R̄` บวมเกินจริง หรือการปลอมแปลงข้อมูล
  6. **Sawtooth Zigzag After Manual Tweaks (Over-Control / Tampering):** ปรับเครื่องชดเชยทุกจุดที่ยังอยู่ใน Common Cause จน Variance พุ่ง 2 เท่า

---

## Lesson M5-L4 Interactions

### INT-M5-L4-01 — Western Electric, Nelson & Rule Selection Trigger Lab (`M5L4-S06`)
- **Inputs:**
  - `var_process_profile` Selector:
    1. `"symmetric_mean"` (`Shaft OD Mean Chart`): `we1_ucl = true`, `we1_lcl = true`, `raw_data_vs_spec = true`
    2. `"near_zero_lower_better"` (`Surface Roughness Ra / Coplanarity / Flatness / Tilt`): calculated `LCL < 0` is flagged `"INVALID (LCL < 0)"` → `we1_lcl` auto-disabled (`N/A`), keeping `we1_ucl = true` + `raw_data_vs_spec = true`
    3. `"variation_r_chart"` (`Range / SD Variation Chart`, `n = 5`, `D3 = 0`): `LCL_R = 0` → `we1_lcl` auto-disabled (`Unnecessary: Physical Min = 0`), keeping `we1_ucl = true`
  - Mandatory Rules Lock (`var_mandatory_rules`): Locked ON for valid upper/lower limits + modern `Individual Raw Data vs USL/LSL` check
  - Optional Rule Toggles (`var_active_rules`): `WE2 (2/3>2σ)`, `WE3 (4/5>1σ)`, `WE4 (8 same side)`, `Trend (6 up/down)`, `Alternating (14)`, `Zone C Hug (15)` — validation badge warns if `< 1` Optional Rule is chosen or displays guidance on **Engineering Judgement** & **Process Characteristic**
  - Preset Injection Buttons:
    1. `"Inject 3σ Spike"` → Triggers `WE1` (and tests `< LCL` validity across profiles)
    2. `"Inject Individual Raw Data > USL"` → Triggers `Raw Data vs Spec` Mandatory Gate even when subgroup `X̄` stays inside `UCL`
    3. `"Inject 2σ Shift (2 of 3 Zone A)"` → Triggers `WE2`
    4. `"Inject 1.5σ Drift (4 of 5 Zone B+)"` → Triggers `WE3`
    5. `"Inject Subtle 1σ Shift (8 Above CL)"` → Triggers `WE4`
    6. `"Inject Tool Wear (6 Increasing)"` → Triggers `Trend`
    7. `"Simulate Tampering (14 Alternating)"` → Triggers `Alternating`
    8. `"Simulate Mixed Subgroup (15 in Zone C)"` → Triggers `Zone C Hug`
- **Live False Alarm ARL Readout:**
  - `WE1 only`: `ARL ≈ 370` subgroups (`p = 0.0027`) + Prompt: *"Please select ≥ 1 Optional Rule based on Engineering Judgement & Process Characteristic"*
  - `Mandatory + WE1_Valid + Trend + WE4` (Recommended): `ARL ≈ 175` subgroups (Balanced sensitivity + low false alarm)
  - `All Rules ON`: more frequent than the Western Electric 4-rule set (`ARL ≈ 91`, 8-point version) (**Warning Badge: High False-Alarm Fatigue Risk!**)
- **Completion Trigger:** Test `>= 2` Process Profiles (including Near-Zero or Variation `LCL=0` check), ensure `>= 1` Optional Rule selected, and inspect at least 4 distinct triggers (`+10 pts`).

### INT-M5-L4-02 — Workshop: Shaft OD Control Chart Analyzer (`M5L4-S07`)
- **Data Source:** `data/workshop_m5_control_chart_subgroups.csv` (`125` records: `25 Subgroups × 5 parts`, `Shaft_OD_mm`, Spec `25.000 ± 0.080 mm`, `A2 = 0.577, D3 = 0, D4 = 2.114`)
- **Interactive Modules Displayed:**
  - Dual Stacked `X̄` (with Zone A/B/C lines) and `R` Chart (`SG-01..25`)
  - Toggle button: `"Show Trial Limits (25 SG)"` vs `"Show Revised Baseline (16 Stable SG)"` + optional `"Overlay Spec Walls (24.92–25.08)"`
- **4 Diagnostic Questions (Passing `>= 3/4`):**
  1. **Q1:** จากข้อมูล Trial Limits ทั้ง 25 Subgroups (`X̄̄ = 25.0067 mm, R̄ = 0.0276 mm, A2 = 0.577, D4 = 2.114`) ค่า **`UCL_X`** และ **`UCL_R`** คือข้อใด?
     - `A)` `UCL_X = 25.0800 mm`, `UCL_R = 0.0800 mm`
     - `B)` **`UCL_X = 25.0226 mm`, `UCL_R = 0.0584 mm`** ✅
     - `C)` `UCL_X = 25.0181 mm`, `UCL_R = 0.0616 mm`
     - `D)` `UCL_X = 25.0500 mm`, `UCL_R = 0.0276 mm`
  2. **Q2:** ทำไมตามขั้นตอนการอ่านกราฟเราจึงต้องตรวจ `SG-11` (`X̄ = 25.0350, R = 0.0720`) บน **$R$ Chart ก่อน** และพบกฎใดทำงาน?
     - `A)` ไม่ต้องดู R Chart ดูเฉพาะ Spec
     - `B)` เพราะ `R = 0.0720 > UCL_R (0.0584)` **ติด WE Rule 1 บน R Chart** และ `X̄ = 25.0350 > UCL_X (25.0226)` ติด Rule 1 บน X̄ Chart ด้วย — บ่งชี้ความแกว่งผิดปกติภายในกลุ่ม (เช่น มีดบิ่น/จับยึดหลวม) ✅
     - `C)` เกาะ Zone C 15 จุด
     - `D)` ติดกฎ 14 จุดสลับขึ้นลง
  3. **Q3:** ในช่วง **`SG-18` ถึง `SG-25`** ไม่มีจุดใดทะลุเส้น `UCL_X = 25.0226` เลย แต่เหตุใดระบบ SPC จึงเตือนว่าเกิด Special Cause?
     - `A)` เพราะชิ้นงานหลุด USL `25.080 mm` แล้ว
     - `B)` เพราะค่าอยู่ **ฝั่งบนของ CL (`25.0067`) ต่อเนื่อง (`SG-18..25`) — ติด Rule 4 (7 จุดตาม AIAG; สัญญาณแรก `SG-24`)** และ `SG-24`, `SG-25` ติด **Rule 2** กับ **Rule 3**! ✅
     - `C)` เพราะ R Chart เกิน `UCL_R`
     - `D)` เพราะเป็นความแปรปรวนปกติ
  4. **Q4:** จากช่วงค่าจริงของชิ้นงานทั้ง 125 ชิ้น (`24.960 .. 25.068 mm` เทียบกับ Spec `24.920 .. 25.080 mm`) สิ่งนี้พิสูจน์ข้อได้เปรียบสำคัญที่สุดของ SPC ข้อใด?
     - `A)` SPC ลดจำนวนเครื่องจักรได้ครึ่งหนึ่ง
     - `B)` **SPC จับ Special Cause (`SG-11` และ `SG-18..25`) ได้ล่วงหน้า 100% ก่อนที่ชิ้นงานแม้แต่ชิ้นเดียวจะหลุดสเปกลูกค้า (Prevention before Scrap!)** ✅
     - `C)` SPC ใช้เส้น `USL/LSL` แทน `UCL/LCL`
     - `D)` ไม่จำเป็นต้องคำนวณ Revised Limits

---

## Final Exam Logic (`EXAM-M5` on `M5L4-S10`)
- **Question Pool:** `M5-Q001` .. `M5-Q060` (`06_assessment_bank.md`)
- **Stratified Random Draw (20 Questions):** `4 L1 + 5 L2 + 5 L3 + 6 L4`
- **Pass Criteria:** `>= 80%` (`16/20`), Unlimited retries with remediation links.
