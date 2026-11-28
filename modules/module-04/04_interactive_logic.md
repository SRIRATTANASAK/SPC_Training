# Module 4 Interactive Logic Specification (Web-Native & SCORM Ready)

**Module:** Module 4 — Process Variation and Capability (VOP/VOC, Cp/Cpk/Pp/Ppk, AIAG/VDA & JEDEC Standard)  
**Primary Runtime:** Web App (React / Astro MDX / HTML5 Interactive Components)  
**Passing Score (`EXAM-M4`):** 80% (`>= 16 / 20`)

---

## Global State Variables
```json
{
  "var_current_screen": "M4L1-S01",
  "var_completed_screens": [],
  "var_spec_mode": "two_sided",
  "var_lsl": 9.85,
  "var_target": 10.00,
  "var_usl": 10.15,
  "var_process_mean": 10.018,
  "var_process_sigma": 0.0268,
  "var_lesson_scores": { "L1": 0, "L2": 0, "L3": 0, "L4": 0 },
  "var_exam_score": 0,
  "var_exam_passed": false
}
```

---

## Lesson M4-L2 Interactions

### INT-M4-L2-01 — VOP-Inside-VOC Spec Margin Explorer (`M4L2-S04`)
- **Inputs:**
  - `var_process_mean`: Slider `9.80` .. `10.20 mm` (step `0.005`, default `10.030`)
  - `var_process_sigma`: Slider `0.010` .. `0.080 mm` (step `0.002`, default `0.050`)
  - Fixed Blueprint VOC: `LSL = 9.85 mm`, `Target = 10.00 mm`, `USL = 10.15 mm` (`Tolerance = 0.30 mm`)
- **Logic:**
  - `Natural_Spread = 6 * σ`
  - `Tolerance_Used_Pct = (Natural_Spread / (USL - LSL)) * 100`
  - `Lower_Tail_Area = Φ((LSL - μ) / σ)`, `Upper_Tail_Area = 1 - Φ((USL - μ) / σ)`
  - `Total_Defect_Pct = (Lower_Tail_Area + Upper_Tail_Area) * 100`
  - Tolerance bar color coding:
    - Green (`<= 75%`, equivalent to `Cp >= 1.33`)
    - Amber (`75.1% – 100%`, marginal `Cp 1.00–1.33`)
    - Red (`> 100%`, process wider than spec)
- **Completion Trigger:** Adjust Mean within `10.00 ± 0.02 mm` and Sigma so `Tolerance_Used_Pct <= 75%` (`+10 pts`).

---

## Lesson M4-L3 Interactions

### INT-M4-L3-01 — Cp vs Cpk Live Playground (`M4L3-S07`)
- **Inputs:**
  - `var_spec_mode`: `"two_sided"` | `"lsl_only"` | `"usl_only"`
  - `var_process_mean`: Slider `9.80` .. `10.20 mm` (step `0.002`, default `10.050`)
  - `var_process_sigma`: Slider `0.010` .. `0.080 mm` (step `0.001`, default `0.025`)
  - Preset Buttons: `"Cp Lie Demo (Mean = USL)"`, `"On-Target 1.33"`, `"World-Class 1.67"`, `"Workshop Baseline"`
- **Logic:**
  - **When `"two_sided"` (`LSL = 9.85, USL = 10.15`):**
    - `Cp = (USL - LSL) / (6 * σ)`
    - `Cpu = (USL - μ) / (3 * σ)`
    - `Cpl = (μ - LSL) / (3 * σ)`
    - `Cpk = min(Cpu, Cpl)`
    - `Defect_Prob = Φ((LSL - μ) / σ) + (1 - Φ((USL - μ) / σ))`
  - **When `"lsl_only"` (Unilateral Minimum, e.g., Bond Pull `LSL = 5.0 gf`, scaled display):**
    - `Cp = "N/A (1-Sided)"`, `Cpk = Cpl = (μ - LSL) / (3 * σ)`
    - `Defect_Prob = Φ((LSL - μ) / σ)`
  - **When `"usl_only"` (Unilateral Maximum, e.g., Flatness/Leakage):**
    - `Cp = "N/A (1-Sided)"`, `Cpk = Cpu = (USL - μ) / (3 * σ)`
    - `Defect_Prob = 1 - Φ((USL - μ) / σ)`
  - Live KPI Cards: `Cp`, `Cpk`, `Cpu`, `Cpl`, `Expected PPM = round(Defect_Prob * 1e6, 2)`, `Yield % = (1 - Defect_Prob) * 100`.
- **Completion Trigger:** Achieve `Cpk >= 1.67` in live mode (`+10 pts`).

### INT-M4-L3-02 — Cp / Cpk / Pp / Ppk Diagnostic Match (`M4L3-S08`)
- **Type:** 4-Case Root Cause & Action Matcher (`Passing >= 3/4`, `+10 pts`)
- **Cases:**
  1. **`Cp = 1.90, Cpk = 0.85, Pp = 1.85, Ppk = 0.82`**
     - *Correct Diagnosis:* เครื่องจักรนิ่งและแคบมาก (`Cp ≈ Pp` เกือบ 1.9) แต่ **ตั้ง Center เบี้ยวออกจาก Target** — ให้ปรับ Tool Offset เข้าหา Target
  2. **`Cp = 1.87, Cpk = 1.64, Pp = 1.31, Ppk = 1.15`**
     - *Correct Diagnosis:* ความนิ่งภายใน Subgroup ดีมาก แต่ **ไม่เสถียรข้ามเวลา (`Cpk >> Ppk`)** เกิดการ Drift/Shift ระหว่างกะหรือชั่วโมง — ให้หา Special Cause ก่อน!
  3. **`Cp = 0.92, Cpk = 0.90, Pp = 0.91, Ppk = 0.89`**
     - *Correct Diagnosis:* กระบวนการ **เสถียรและอยู่ตรงกลางดีแล้ว (`Cp ≈ Cpk ≈ Pp ≈ Ppk`)** แต่ความแปรปรวนธรรมชาติ (`6σ`) กว้างกว่าสเปกลูกค้า — ปรับ Offset ไม่ช่วย ต้องทำ Engineering Improvement ลด Variation (5M1E)
  4. **`Cp = 1.78, Cpk = 1.75, Pp = 1.76, Ppk = 1.73`**
     - *Correct Diagnosis:* **Ideal State** ทั้งเสถียร อยู่ตรงกลาง และมีความสามารถเกินเกณฑ์ `1.67` พร้อมอนุมัติเดินผลิตภายใต้ Control Plan

---

## Lesson M4-L4 Interactions

### INT-M4-L4-01 — Customer / PPAP Release Gate Decision Simulator (`M4L4-S05`)
- **Type:** 5-Case Release Engineer Console (`Passing >= 4/5`, `+10 pts`)
- **Choices per Case:** `Approve Release` | `Conditional (Containment + Action Plan)` | `Hold / Reject (Fix Stability / MSA / Distribution First)`
- **Cases:**
  1. **Automotive PPAP Initial Study:** MSA `%GRR = 7%`, Control Chart เสถียร (`Normality p = 0.42`), `Ppk = 1.74, Cpk = 1.78`
     - *Correct:* `Approve Release` (ผ่านเกณฑ์ 3 ด่าน และ `Ppk >= 1.67`)
  2. **Stamping Pin Initial Study (Drift Trap):** MSA `%GRR = 8%`, Control Chart พบช่วงท้ายกะ Drift ชัดเจน, ได้ `Cpk = 1.64` แต่ `Ppk = 1.15`
     - *Correct:* `Hold / Reject` (กระบวนการยังไม่เสถียร ห้ามรายงาน `Cpk = 1.64` เพื่อขอผ่าน — และ `Ppk = 1.15 < 1.33`)
  3. **Automotive Ongoing Production:** เสถียร (`Normality p = 0.31`), ลักษณะทั่วไป (Non-CC) ได้ `Cpk = 1.48, Ppk = 1.44` แต่ลูกค้าตั้งขอ `1.67` สำหรับ PPAP แรกเริ่ม หรืออยู่ช่วง `1.33–1.66` ใน PPAP
     - *Case Framing in Console:* "Initial PPAP Study ที่เสถียรและ Normal แล้ว แต่ได้ `Ppk = 1.48` (`1.33–1.66`)" → *Correct:* `Conditional (Containment + Action Plan)` (เกณฑ์ `1.33–1.67` ตามข้อกำหนดลูกค้า/PPAP (ยังไม่ได้ยืนยันจากต้นฉบับ) ต้องมีแผนคัดกรอง/ปรับปรุงส่งอนุมัติ)
  4. **Semiconductor Wire Bond Pull (One-Sided LSL only):** `n = 125`, เสถียร, `%GRR = 6%`, `Normality p = 0.25`, `Cpl = 1.82` (ไม่มี `Cp`)
     - *Correct:* `Approve Release` (งาน One-sided LSL ใช้ `Cpk = Cpl = 1.82 >= 1.67` ผ่านเกณฑ์ที่ลูกค้ากำหนด)
  5. **Semiconductor Leakage Current Test (Skew Trap):** ข้อมูลเบ้ขวาจัด (`Normality p = 0.002`), มีแต่ `USL`, คำนวณตรงๆ ด้วยสูตร Normal ได้ `Cpu = 1.55`
     - *Correct:* `Hold / Reject (Fix Stability / MSA / Distribution First)` (ข้อมูลไม่เป็น Normal ห้ามใช้สูตร Normal Capability ตรงๆ ต้องแปลงข้อมูล Box-Cox/Log หรือใช้ Percentile Method ก่อน!)

### INT-M4-L4-02 — Workshop: Pin Length Capability Lab (`M4L4-S06`)
- **Data Source:** `data/workshop_m4_capability_subgroups.csv` (`100` records: `20 Subgroups × 5 parts`, `Pin_Length_mm`, Spec `10.00 ± 0.15 mm`, `LSL = 9.85, USL = 10.15`, `d2 = 2.326`)
- **Interactive Modules Displayed:**
  - Histogramเทียบเส้น `LSL = 9.85`, `Target = 10.00`, `USL = 10.15` + Subgroup Mean Run Chart (`SG-01..20`) แยกสี `Day` vs `Night`
  - Auto-computed KPI Comparison Table: `All (SG 1–20)` vs `Stable Baseline (SG 1–14)`
- **4 Diagnostic Questions (Passing `>= 3/4`):**
  1. **Q1:** จากข้อมูลทั้ง 20 Subgroups (`X̄̄ = 10.0182 mm`, `R̄ = 0.0623 mm`, `d2 = 2.326`) ค่า **`σ_within`** และ **`Cp`** เท่ากับเท่าใด?
     - `A)` `σ_within = 0.0383 mm`, `Cp = 1.31`
     - `B)` `σ_within = 0.0268 mm`, `Cp = 1.87` ✅
     - `C)` `σ_within = 0.0623 mm`, `Cp = 0.80`
     - `D)` `σ_within = 0.0150 mm`, `Cp = 3.33`
  2. **Q2:** เมื่อเทียบ **`Cpk = 1.64`** กับ **`Ppk = 1.15`** ของข้อมูลทั้ง 20 Subgroups ควรวินิจฉัยสถานะเครื่องจักรอย่างไร?
     - `A)` เครื่องจักรเสถียรดีเยี่ยม พร้อมผ่าน PPAP ทันที
     - `B)` ความสามารถภายใน Subgroup ดี (`Cpk = 1.64`) แต่ **ไม่เสถียรข้ามเวลา (`Cpk >> Ppk`)** เพราะมี Shift/Drift เกิดขึ้นในระบบ จึง **FAIL เกณฑ์ `< 1.33`** ✅
     - `C)` ระบบวัดพังอย่างเดียว
     - `D)` ต้องขยาย Spec ของลูกค้าเป็น `±0.30 mm`
  3. **Q3:** ช่วงใดในไฟล์ CSV ที่เป็นต้นตอทำให้ค่า `s_overall` พุ่งจาก `0.0259` เป็น `0.0383 mm` และ `Ppk` ตกเหลือ `1.15`?
     - `A)` ช่วงกะเช้า `SG-01..05`
     - `B)` ช่วงกะดึก **`SG-15..20`** ที่ค่าเฉลี่ยไหลขึ้นไปอยู่ที่ ~`10.060 mm` (สูงกว่าช่วงเสถียร `+0.060 mm`) ✅
     - `C)` เฉพาะชิ้นที่ 1 ของทุกกลุ่ม
     - `D)` ไม่มีช่วงไหนเปลี่ยนเลย
  4. **Q4:** หากทีมวิศวกรพบและแก้ไขต้นเหตุ Drift ในกะดึก (เปรียบเทียบด้วยข้อมูลช่วงเสถียร `SG-01..14`, `70` ชิ้น) ค่า **`Cpk`** และ **`Ppk`** ที่ได้คือเท่าใด และตัดสินใจอย่างไร?
     - `A)` `Cpk = 1.83`, `Ppk = 1.93` — สูงกว่า `1.67` แต่เป็น **ค่าเบื้องต้น** (14 กลุ่ม) (ยืนยันว่าตัวเครื่องจักรมีศักยภาพสูงจริง เพียงต้องคุม Special Cause กะดึกด้วย SPC ใน Control Plan!) ✅
     - `B)` `Cpk = 0.95`, `Ppk = 0.90` — ต้องเปลี่ยนเครื่องใหม่
     - `C)` `Cpk = 1.15`, `Ppk = 1.64` — ปรับ Offset อย่างเดียว
     - `D)` คำนวณไม่ได้เพราะ `n < 200`

---

## Final Exam Logic (`EXAM-M4` on `M4L4-S08`)
- **Question Pool:** `M4-Q001` .. `M4-Q060` (`06_assessment_bank.md`)
- **Stratified Random Draw (20 Questions):** `4 L1 + 4 L2 + 6 L3 + 6 L4`
- **Pass Criteria:** `>= 80%` (`16/20`), Unlimited retries with remediation links back to specific screens.
