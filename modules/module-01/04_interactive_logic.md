# Module 1 Interactive Logic Specification (v3 — Web-Native & SCORM Ready)

**Module:** Module 1 — Statistics Foundation for Manufacturing  
**Primary Runtime:** Web App (React / Astro MDX / HTML5 Interactive Components)  
**LMS Compatibility:** SCORM 2004 4th Ed. & xAPI event hooks optional  
**Passing Score (`EXAM-M1`):** 80% (`>= 16 / 20`)

---

## Global State Variables
```json
{
  "var_current_screen": "M1L1-S01",
  "var_completed_screens": [],
  "var_l1_hotspots_viewed": 0,
  "var_copq_tested": false,
  "var_shift": "Day",
  "var_machine": "MC-A",
  "var_material": "Lot-1",
  "var_sigma_value": 0.5,
  "var_chart_choice": null,
  "var_lesson_scores": { "L1": 0, "L2": 0, "L3": 0, "L4": 0 },
  "var_exam_score": 0,
  "var_exam_passed": false
}
```

---

## Lesson M1-L1 Interactions

### INT-M1-L1-01 — 4M1E Variation Explorer (`M1L1-S04`)
- **Type:** Interactive Simulation
- **Inputs:**
  - `var_shift`: `Day` | `Night`
  - `var_machine`: `MC-A (New)` | `MC-B (Worn Spindle)`
  - `var_material`: `Lot-1 (Normal)` | `Lot-2 (High Hardness)`
- **Logic:**
  - Base defect rate = `1.0%`, Mean = `50.00 mm`, SD = `0.015 mm`
  - If `var_machine == "MC-B"`: Mean shifts `+0.04 mm`, SD increases to `0.030 mm`, Defect Rate `+3.5%`
  - If `var_material == "Lot-2"`: SD increases `+0.015 mm`, Defect Rate `+2.0%`
  - If `var_shift == "Night"`: Mean shifts `+0.01 mm`, Defect Rate `+0.8%`
- **Output:** Re-renders live defect rate bar + simulated shaft distribution curve + cause explanation.
- **Completion:** User changes at least 2 variables (`+5 pts`).

### INT-M1-L1-02 — COPQ Calculator (`M1L1-S03`)
- **Type:** Live Financial Calculator
- **Inputs:** `scrap_cost`, `rework_cost`, `sorting_cost`, `warranty_cost` (THB/month, default `15000, 12000, 8000, 5000`)
- **Formula:** `total_copq = scrap_cost + rework_cost + sorting_cost + warranty_cost`
- **Feedback Thresholds (Color + Icon + Label):**
  - `< 10,000 THB`: Green `✓ Low Impact` — ควบคุมได้ดี แต่ยังลดต่อได้
  - `10,000 – 50,000 THB`: Amber `⚠ Moderate Loss` — สูญเสียเทียบเท่าค่าจ้างพนักงาน 1–3 คน/เดือน
  - `> 50,000 THB`: Red `✕ Critical Profit Leak` — ต้องรีบทำ SPC & Root Cause ทันที! (แสดงยอดสูญเสียสะสมต่อปี `total_copq * 12`)
- **Completion:** User modifies any input or clicks Preset Scenario (`+10 pts`).

---

## Lesson M1-L2 Interactions

### INT-M1-L2-01 — Data Classification Game (`M1L2-S04`)
- **Type:** Drag-and-Drop (with Keyboard Dropdown fallback)
- **Data Source:** `data/workshop_m1_data_classification.csv`
  - Quick Mode: 8 core items (`Length, Diameter, Weight, Temperature, Scratch, Dent, Crack, Pass/Fail`)
  - Full Workshop Mode: All 20 items (`DC-01` .. `DC-20`)
- **Drop Zones:** `Variable Data` | `Attribute Data`
- **Scoring:** `+1` per correct item; Passing `>= 7/8` (Quick) or `>= 16/20` (Full).
- **Feedback:** Displays `Rationale` column from CSV for every item upon Submit.

### INT-M1-L2-02 — Measurement Scale Matrix (`M1L2-S04`)
- **Type:** Classification Matrix
- **Columns:** `Nominal` | `Ordinal` | `Interval` | `Ratio`
- **Trap Items Included:**
  - `Mold Cavity ID (1,2,3,4)` -> `Nominal` (warning if user selects Ratio!)
  - `Furnace Temp (°C)` -> `Interval`
  - `Visual Grade (Poor/Fair/Good/Excellent)` -> `Ordinal`
  - `Shaft Diameter (mm)` -> `Ratio`
  - `Go/No-Go Plug Gauge` -> `Nominal`
- **Completion:** Score `>= 80%` (`+10 pts`).

---

## Lesson M1-L3 Interactions

### INT-M1-L3-01 — Mean vs Median Outlier Lab & Dispersion Explorer (`M1L3-S01`, `M1L3-S02`, `M1L3-S04`)
- **Type:** Interactive Array Editor
- **Initial Dataset:** `[49.99, 50.00, 50.00, 50.01, 50.02]` (Mean = `50.004`, Median = `50.000`)
- **Action:** User drags slider or edits 5th value up to `50.50`
- **Logic:** Auto-recalculates `Mean`, `Median`, `Range`, `Variance`, `SD` step-by-step and highlights why `Mean` jumps to `50.100` while `Median` stays `50.000`!

### INT-M1-L3-02 — Sigma Variation Simulator (`M1L3-S06`)
- **Type:** Real-Time Distribution Visualizer
- **Variable:** `var_sigma_value` (`0.1` to `3.0`, step `0.1`) | Spec Limits fixed visually at `Target ± 3.0`
- **Logic:**
  - Renders Normal PDF + simulated 200-sample Histogram
  - Computes real-time `% Out of Spec` outside `[LSL, USL]` using `erf()` approximation
  - Status Messages:
    - `sigma <= 0.8`: Tight & Capable (`✓ Low Variation — Safe Margin`)
    - `0.8 < sigma <= 1.2`: Moderate (`⚠ Variation Approaching Spec Limits`)
    - `sigma > 1.2`: High Risk (`✕ High Variation — Producing Defects!`)

### INT-M1-L3-03 — Statistics Match Game (`M1L3-S06`)
- **Type:** 7-Pair Card/Term Matching (`Passing >= 6/7 = 85%`)
- **Pairs (`Term` ↔ `Definition`):**
  1. `Mean (ค่าเฉลี่ย)` ↔ `ผลรวมข้อมูลทั้งหมดหารด้วยจำนวนตัวอย่าง — บอก Process Centering แต่วิ่งตาม Outlier`
  2. `Median (มัธยฐาน)` ↔ `ค่าตรงกลางเมื่อเรียงข้อมูลจากน้อยไปมาก — ทนทานต่อ Outlier และข้อมูลเบ้`
  3. `Mode (ฐานนิยม)` ↔ `ค่าที่เกิดซ้ำบ่อยที่สุด — ใช้จับสัญญาณ Bimodal (ข้อมูล 2 แหล่งปนกัน) ได้`
  4. `Range (พิสัย)` ↔ `ค่าสูงสุดลบค่าต่ำสุด (Max − Min) — คำนวณเร็วหน้างานสำหรับกลุ่มเล็ก n ≤ 10`
  5. `Variance (ความแปรปรวน)` ↔ `ค่าเฉลี่ยกำลังสองของระยะห่างจาก Mean (หาร n − 1) — มีหน่วยเป็นกำลังสอง`
  6. `Standard Deviation (SD)` ↔ `รากที่สองของ Variance — หน่วยเดียวกับชิ้นงานจริง ใช้สร้างกฎ ±3σ`
  7. `CV (%)` ↔ `(SD / Mean) × 100% — ใช้เทียบความนิ่งข้ามขนาดหรือข้ามหน่วย`

---

## Lesson M1-L4 Interactions

### INT-M1-L4-01 — Chart Selection Matrix (`M1L4-S07`)
- **Type:** Scenario-to-Chart Matching (5 Scenarios × 2 pts = 10 pts)
- **Mapping:**
  1. "ต้องการดูรูปร่างการกระจายตัวของขนาดเพลาเทียบกับ Spec" → `Histogram`
  2. "ต้องการจัดอันดับปัญหาของเสียเพื่อเลือกแก้ตัวใหญ่สุดก่อน (80/20 (ค่าประมาณเพื่อการสอน))" → `Pareto Chart`
  3. "ต้องการดูว่าอุณหภูมิแม่พิมพ์สัมพันธ์กับขนาดชิ้นงานหรือไม่" → `Scatter Plot`
  4. "ต้องการเปรียบเทียบความนิ่งระหว่างเครื่อง MC-A และ MC-B พร้อมหา Outlier" → `Box Plot`
  5. "ต้องการติดตามว่าขนาดเพลาไหล (Drift) ตั้งแต่เช้าถึงบ่ายหรือไม่" → `Run Chart`

### INT-M1-L4-02 — Workshop 2 Factory Dashboard (`M1L4-S07`)
- **Type:** Interactive Multi-Chart Data Explorer + 3 Diagnostic Questions
- **Data Source:** `data/workshop_m1_dimensions_and_defects.csv` (30 records)
- **User Actions:** Switch between `Histogram`, `Box Plot (MC-A vs MC-B)`, `Pareto (Defects)`, `Scatter (Temp vs Diameter)`, `Run Chart (Time)`
- **Diagnostic Questions (4 Choices each + Feedback):**
  1. **Q1:** จาก Box Plot เปรียบเทียบ เครื่องจักรใดมีความแปรปรวนสูงกว่าและเกิดจุด Outlier (`50.14 mm`)?
     - `A)` MC-A (`SD = 0.015 mm`)
     - `B)` MC-B (`SD = 0.030 mm`, มี Outlier `50.14 mm`) ✅
     - `C)` ทั้งสองเครื่องนิ่งเท่ากัน
     - `D)` สรุปไม่ได้จาก Box Plot
     - *Explanation:* กล่องของ MC-B กว้างกว่าและเลื่อนสูงขึ้น (`Median = 50.04 mm`) พร้อมจุด Outlier ที่ `50.14 mm`
  2. **Q2:** จาก Pareto Chart การแก้ไข Defect 2 อันดับแรกข้อใดจะช่วยลดจำนวนจุดเสียได้ถึง `86.7%` (กฎ 80/20 (ค่าประมาณเพื่อการสอน))?
     - `A)` Dent + Crack (`13.3%`)
     - `B)` Burr + Dent (`33.3%`)
     - `C)` Scratch (`9`) + Burr (`4`) = `13/15` (`86.7%`) ✅
     - `D)` Scratch + Crack (`66.7%`)
     - *Explanation:* Scratch (60.0%) และ Burr (26.7%) รวมกันคิดเป็น 86.7% ของจุดเสียทั้งหมด 15 จุด
  3. **Q3:** จาก Scatter Plot และ Run Chart แนวโน้มขนาดเพลาที่ไหลสูงขึ้นช่วงบ่ายสัมพันธ์กับตัวแปรใดมากที่สุด?
     - `A)` ความสัมพันธ์เชิงลบกับอุณหภูมิแม่พิมพ์
     - `B)` ความสัมพันธ์เชิงบวกแข็งแรงกับอุณหภูมิแม่พิมพ์ (`Mold_Temp_C`, `r = +0.9949`) ✅
     - `C)` ไม่มีความสัมพันธ์ใดๆ (`r ≈ 0`)
     - `D)` เกิดจากการคัดงานเสียทิ้ง (Cliff shape)
     - *Explanation:* เมื่อ `Mold_Temp_C` สูงขึ้นจาก 179°C เป็น 192°C ขนาดเพลาขยายใหญ่ขึ้นตาม (`r = +0.9949`) จึงควรตรวจสอบระบบระบายความร้อนของ MC-B

---

## Final Exam Logic (`EXAM-M1` on `M1L4-S08`)
- **Question Pool:** `M1-Q001` .. `M1-Q060` (`06_assessment_bank.md`)
- **Stratified Random Selection (20 Questions):**
  - `M1-L1`: 3 random questions from `Q001–Q010`
  - `M1-L2`: 6 random questions from `Q011–Q030`
  - `M1-L3`: 6 random questions from `Q031–Q050`
  - `M1-L4`: 5 random questions from `Q051–Q060`
- **Pass Criteria:** `>= 16/20` (`80%`), Unlimited retries with fresh random draw.
- **Remediation:** If `< 80%`, list lessons where accuracy `< 80%` with direct jump links back to those screens.
