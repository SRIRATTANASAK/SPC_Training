# Module 6 Interactive Logic Specification (Web-Native & SCORM Ready)

**Module:** Module 6 — Control Chart Selection (`I-MR, X̄-R, X̄-S` & `p, np, c, u` + 10 Real Factory Scenarios)  
**Primary Runtime:** Web App (React / Astro MDX / HTML5 Interactive Components)  
**Passing Score (`EXAM-M6`):** 80% (`>= 16 / 20`)

---

## Global State Variables
```json
{
  "var_current_screen": "M6L1-S01",
  "var_completed_screens": [],
  "var_var_subgroup_n": 5,
  "var_attr_type": "defective",
  "var_attr_constant_n": false,
  "var_wizard_answers": { "data_type": null, "sub_mode": null, "n_cond": null },
  "var_scenario_score": 0,
  "var_lesson_scores": { "L1": 0, "L2": 0, "L3": 0, "L4": 0 },
  "var_exam_score": 0,
  "var_exam_passed": false
}
```

---

## Lesson M6-L1 Interactions

### INT-M6-L1-01 — Variable Chart & Subgroup Size Efficiency Lab (`M6L1-S07`)
- **Inputs:**
  - `var_var_subgroup_n`: Mode buttons `n = 1 (I-MR)` | `n = 5 (X̄-R)` | `n = 15 (X̄-S)`
  - Optional Stress Toggle: `"Compare Range vs SD at n = 15"` (shows middle 13 points ignored by Range!)
- **Logic:**
  - Dynamically renders chart type title, applied formula (`E2 = 2.660` vs `A2 = 0.577, D4 = 2.114` vs `A3 = 0.789, B3 = 0.428, B4 = 1.572`), and standard error scaling (`σ / √n`).
  - Highlights why `B3 > 0` activates at `n = 15` whereas `D3 = 0` for `n <= 6`.
- **Completion Trigger:** Explore all 3 `n` modes (`+10 pts`).

---

## Lesson M6-L2 Interactions

### INT-M6-L2-01 — Defective vs Defect & Attribute Staircase Sandbox (`M6L2-S06`)
- **Inputs:**
  - `var_attr_type`: `"defective"` (Binomial) | `"defect"` (Poisson)
  - `var_attr_constant_n`: `true` (Constant `n = 140`) | `false` (Varying `n = 100..180`)
- **Logic:**
  - Maps `[defective, constant]` → **`np` Chart**, `[defective, varying]` → **`p` Chart**, `[defect, constant]` → **`c` Chart**, `[defect, varying]` → **`u` Chart**.
  - Renders live staircase `UCL/LCL` when `varying` is toggled ON, and clamps negative `LCL < 0 → 0` with an explanation badge (`Zero-Bound Clamp`).
- **Completion Trigger:** Inspect all 4 chart combinations (`+10 pts`).

---

## Lesson M6-L3 Interactions

### INT-M6-L3-01 — Interactive Control Chart Selection Wizard (`M6L3-S04`)
- **Type:** 3-Step Guided Decision Wizard (Roadmap Core Deliverable, `+10 pts`)
- **Decision Flow:**
  1. `Q1`: Data Type = `Variable (Continuous)` or `Attribute (Count)`?
  2. `Q2`: If Variable → Subgroup `n` (`n=1`, `2–10`, `>10`) | If Attribute → Counting `Defective Units` or `Defects`?
  3. `Q3` *(Attribute)*: Sample/Unit Size `Constant` or `Varying`?
- **Outputs:** Recommended Chart Card + Exact Center/Control Limit Formula + Valid `LCL` Check Rule + Shop-floor Caution Note.
- **Completion Trigger:** Complete at least 3 distinct Wizard paths.

---

## Lesson M6-L4 Interactions

### INT-M6-L4-01 — Workshop Part A: 10 Real Factory Scenarios Decision Game (`M6L4-S01`)
- **Data Source:** `data/workshop_m6_scenarios_10_cases.csv` (`SCEN-01` .. `SCEN-10`)
- **Allowed Choices:** `I-MR Chart`, `Xbar-R Chart`, `Xbar-S Chart`, `p Chart`, `np Chart`, `c Chart`, `u Chart`
- **Answer Key:**
  1. `SCEN-01` Chemical Bath Temp (`n=1`): **`I-MR Chart`**
  2. `SCEN-02` CNC Shaft OD (`n=5`): **`Xbar-R Chart`**
  3. `SCEN-03` Wafer Oxide Thickness (`n=16`): **`Xbar-S Chart`**
  4. `SCEN-04` PCB Solder Defects (`varying 8–20 panels`): **`u Chart`**
  5. `SCEN-05` Fixed 100 Motors Pass/Fail (`constant n=100`): **`np Chart`**
  6. `SCEN-06` Incoming Brackets % Defective (`varying n=80..250`): **`p Chart`**
  7. `SCEN-07` Paint Scratches per 1 Car Body (`fixed 1 car`): **`c Chart`**
  8. `SCEN-08` Destructive Weld Pull-Force (`1/shift`): **`I-MR Chart`**
  9. `SCEN-09` 12-Spindle Hole Size (`n=12`): **`Xbar-S Chart`**
  10. `SCEN-10` Plastic Cover Weight (`n=4`): **`Xbar-R Chart`**
- **Completion Trigger:** Score `>= 8/10` (`+15 pts`) with instant engineering feedback per card.

### INT-M6-L4-02 — Workshop Part B: `p` & `u` Chart CSV Lab (`M6L4-S04`)
- **Data Source:** `data/workshop_m6_attribute_inspection.csv` (`20 Lots`, `∑n = 2,835`, `∑d = 80`, `∑c = 183`)
- **4 Diagnostic Questions (Passing `>= 3/4`, `+10 pts`):**
  1. **Q1:** เหตุใดข้อมูล `workshop_m6_attribute_inspection.csv` จึง **ห้ามใช้ `np` และ `c` Chart** แต่ต้องใช้ **`p` และ `u` Chart**?
     - `A)` เพราะมีจำนวน Lot แค่ 20 Lots
     - `B)` **เพราะขนาดตัวอย่าง `Sample_Size_n` เปลี่ยนแปลงทุก Lot (`100` ถึง `180` ชิ้น) จึงต้องหารด้วย `n_i` เพื่อคำนวณสัดส่วน (`p`) และจุดต่อหน่วย (`u`)** ✅
     - `C)` เพราะเป็นข้อมูลความยาว
     - `D)` เพราะ `n = 1`
  2. **Q2:** จากคอลัมน์ `Defective_Parts` (`∑d = 80, ∑n = 2,835`) ค่า Center Line **`p̄`** และ **`LCL_p`** ของ `LOT-12` (`n = 150`) เป็นเท่าใด?
     - `A)` `p̄ = 0.0645`, `LCL_p = -0.0123`
     - `B)` **`p̄ = 0.02822 (2.82%)`, ค่า Raw `LCL_p = -0.0123 < 0` ไม่ Valid → ปัดเป็น `LCL_p = 0`** ✅
     - `C)` `p̄ = 0.0933`, `LCL_p = 0.0500`
     - `D)` `p̄ = 0.02822`, ต้องเตือน Rule 1 ต่ำกว่า `-0.0123`
  3. **Q3:** Lot ใดหลุด **`UCL` บน `p` Chart** (`p̄ = 0.02822`)?
     - `A)` `LOT-09` (`p = 0.0480`)
     - `B)` **`LOT-12` (`d = 14 / n = 150` → `p = 0.0933 > UCL_p = 0.0688`)** ✅
     - `C)` `LOT-17` (`p = 0.0286`)
     - `D)` ไม่มี Lot ใดหลุด
  4. **Q4:** บน **`u` Chart** (`ū = 183/2835 = 0.06455`) เกิดเหตุการณ์สำคัญใดกับ **`LOT-17`** (`n = 140, d = 4, c = 24`)?
     - `A)` ผ่านทั้ง `p` Chart และ `u` Chart
     - `B)` **`LOT-17` ผ่าน `p` Chart (`p = 0.0286` ปกติ!) แต่พังบน `u` Chart (`u = 0.1714 > UCL_u = 0.1290`) — ชี้ชัดว่าชิ้นเสียไม่กี่ชิ้นมีรอยตำหนิรุมหลายจุดมากผิดปกติ!** ✅
     - `C)` `LOT-17` ตกเฉพาะ `LCL`
     - `D)` ต้องใช้ `X̄-R` แทน

---

## Final Exam Logic (`EXAM-M6` on `M6L4-S08`)
- **Question Pool:** `M6-Q001` .. `M6-Q060` (`06_assessment_bank.md`)
- **Stratified Random Draw (20 Questions):** `5 L1 + 5 L2 + 5 L3 + 5 L4`
- **Pass Criteria:** `>= 80%` (`16/20`), Unlimited retries with remediation links.
