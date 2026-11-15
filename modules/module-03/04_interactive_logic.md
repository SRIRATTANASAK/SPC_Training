# Module 3 Interactive Logic Specification (Web-Native & SCORM Ready)

**Module:** Module 3 — Confidence and Hypothesis Testing  
**Primary Runtime:** Web App (React / Astro MDX / HTML5 Interactive Components)  
**Passing Score (`EXAM-M3`):** 80% (`>= 16 / 20`)

---

## Global State Variables
```json
{
  "var_current_screen": "M3L1-S01",
  "var_completed_screens": [],
  "var_ci_confidence": 0.95,
  "var_ci_n": 20,
  "var_ci_sd": 1.5,
  "var_alpha": 0.05,
  "var_effect_delta": 1.0,
  "var_test_n": 20,
  "var_lesson_scores": { "L1": 0, "L2": 0, "L3": 0, "L4": 0 },
  "var_exam_score": 0,
  "var_exam_passed": false
}
```

---

## Lesson M3-L1 Interactions

### INT-M3-L1-01 — Sampling Strategy Matcher (`M3L1-S04`)
- **Type:** 5-Scenario Dropdown/Card Match (`Passing >= 4/5`, `+10 pts`)
- **Scenarios:**
  1. "สุ่มตรวจรับสกรู 30 ตัวจากกล่องพาเลท 5,000 ตัวเพื่อให้ทุกตัวมีโอกาสถูกเลือกเท่ากัน" → `Simple Random Sampling`
  2. "หยิบเพลา 5 ชิ้นที่กลึงต่อเนื่องติดกันทุกๆ 1 ชั่วโมงเพื่อสร้าง Xbar-R Chart" → `Rational Subgroup`
  3. "โรงงานมีแม่พิมพ์ 4 Cavities จึงแบ่งสุ่มเก็บ Cavity ละ 10 ชิ้นพร้อมติดป้ายกำกับ" → `Stratified Sampling`
  4. "ตรวจความหนาแผ่นโลหะ 1 ชิ้นทุกๆ 100 แผ่นตลอดกะการผลิต" → `Systematic Sampling`
  5. "ต้องการจับปัญหาที่เกิดขึ้นระหว่างชั่วโมงโดยลดความแปรปรวนภายในกลุ่มตัวอย่างให้น้อยที่สุด" → `Rational Subgroup`

---

## Lesson M3-L2 Interactions

### INT-M3-L2-01 — Confidence Interval & 20-Sample Capture Explorer (`M3L2-S04`)
- **Inputs:**
  - `var_ci_confidence`: `0.90` | `0.95` | `0.99`
  - `var_ci_n`: `5` .. `100` (step `5`)
  - `var_ci_sd`: `0.5` .. `3.0` (step `0.5`)
- **Logic:**
  - True Population Mean fixed at `μ = 120.0 N`
  - Margin of Error `ME = t_{α/2, n-1} × (s / √n)`
  - Button `"Simulate 20 Repeated Samples"`: generates 20 sample means `N(120.0, s/√n)`, draws horizontal bars `[x̄ - ME, x̄ + ME]`
  - Marks bars capturing `120.0` in Green `✓` and misses in Red `✕`, displaying actual capture rate (e.g., `19/20 = 95%`).
  - Also displays required `n` to achieve target `ME <= 0.5 N`.

---

## Lesson M3-L3 Interactions

### INT-M3-L3-01 — Alpha–Beta–Power Trade-Off Visualizer (`M3L3-S06`)
- **Inputs:**
  - `var_alpha`: `0.01` | `0.05` | `0.10`
  - `var_effect_delta`: `0.5` .. `2.5` (in σ units)
  - `var_test_n`: `5` .. `60` (step `5`)
- **Logic:**
  - Critical Z cutoff `Z_crit = Φ⁻¹(1 - α/2)`
  - Non-centrality parameter `NCP = Δ × √n`
  - `Power = 1 - Φ(Z_crit - NCP) + Φ(-Z_crit - NCP)`, `Beta = 1 - Power`
  - Renders overlapping `H0` (`N(0,1)`) and `H1` (`N(NCP, 1)`) curves with shaded `α` (Red), `β` (Amber), and `Power` (Emerald) areas.
  - Badge turns Green `✓ Adequate Power` when `Power >= 80%`.

---

## Lesson M3-L4 Interactions

### INT-M3-L4-01 — Practical Test Selection Wizard (`M3L4-S05`)
- **Type:** 6-Scenario Decision Quiz (`Passing >= 5/6`, `+10 pts`)
- **Scenarios:**
  1. "เทียบค่าเฉลี่ยแรงดึงของ MC-A (20 ชิ้น) กับค่ามาตรฐานลูกค้า 120.0 N" → `1-Sample T-Test`
  2. "เทียบแรงดึงเฉลี่ยของ MC-A (20 ชิ้น) กับ MC-B (20 ชิ้น) ที่เป็นอิสระต่อกัน" → `2-Sample T-Test`
  3. "วัดความแข็งของชิ้นงานชุดเดียวกัน 15 ชิ้น *ก่อน* และ *หลัง* อบความร้อน" → `Paired T-Test`
  4. "เปรียบเทียบความหนาเฉลี่ยของชิ้นงานจากแม่พิมพ์ Cavity 1, 2, 3 และ 4 พร้อมกัน" → `One-Way ANOVA`
  5. "เทียบ 2 เครื่องจักร แต่พบว่าความแปรปรวนของสองเครื่องไม่เท่ากัน (`Equal Variance p = 0.01`)" → `Welch's 2-Sample T-Test`
  6. "ข้อมูลเบ้รุนแรง (`Normality p < 0.001`) และขนาดตัวอย่างเล็ก (`n = 8` ต่อกลุ่ม)" → `Non-parametric Test (Mann-Whitney / Kruskal-Wallis)`

### INT-M3-L4-02 — Workshop: Machine A vs Machine B Hypothesis Lab (`M3L4-S06`)
- **Data Source:** `data/workshop_m3_machine_a_vs_b.csv` (40 records: `MC-A n=20`, `MC-B n=20`)
- **Interactive Modules Displayed:**
  - Side-by-side Box Plot + Individual Value Plot (`MC-A` vs `MC-B` + `120 N` reference line)
  - Auto-computed table: `1-Sample T (MC-A vs 120 N)`, `F-Test Equal Variance`, `2-Sample T-Test (MC-B vs MC-A)` + `95% CI`
- **4 Diagnostic Questions (Passing `>= 3/4`):**
  1. **Q1:** เมื่อทำ **1-Sample T-Test** ของ `MC-A` เทียบเป้า `120.0 N` (`Mean = 119.50 N, t = -1.415, p = 0.173`) ควรสรุปอย่างไร?
     - `A)` Reject $H_0$ — MC-A ต่ำกว่าเป้า 120 N อย่างมีนัยสำคัญ
     - `B)` Fail to Reject $H_0$ — ยังไม่มีหลักฐานว่า MC-A ต่างจากเป้า 120 N (`p = 0.173 >= 0.05` และ 120 อยู่ใน 95% CI) ✅
     - `C)` ต้องปรับ Offset MC-A ทันที
     - `D)` ข้อมูล MC-A มีความแปรปรวนเป็นศูนย์
  2. **Q2:** จากการตรวจ Equal Variance ระหว่าง `MC-A` (`SD = 1.581`) กับ `MC-B` (`SD = 1.290`) ได้ค่า `F = 1.501` (`p = 0.382`) หมายความว่าอย่างไร?
     - `A)` ความแปรปรวนทั้ง 2 เครื่องต่างกันชัดเจน ห้ามใช้ Pooled T-Test
     - `B)` ความแปรปรวนใกล้เคียงกัน (`p >= 0.05`) สามารถใช้มาตรฐาน 2-Sample T-Test ได้ ✅
     - `C)` MC-B มีค่าเฉลี่ยเท่ากับ MC-A
     - `D)` ต้องใช้ Paired T-Test แทน
  3. **Q3:** ผล **2-Sample T-Test** ระหว่าง `MC-B` (`125.15 N`) กับ `MC-A` (`119.50 N`) ได้ `t = 12.383`, `p < 0.0001` และ `95% CI ของผลต่าง = [4.726, 6.574] N` ข้อสรุปใดถูกต้อง?
     - `A)` Fail to Reject $H_0$ — ทั้งสองเครื่องไม่ต่างกัน
     - `B)` Reject $H_0$ — MC-B มีแรงดึงสูงกว่า MC-A อย่างมีนัยสำคัญ (+5.65 N, CI ไม่คร่อม 0) ✅
     - `C)` MC-A แข็งแรงกว่า MC-B
     - `D)` ต้องเก็บตัวอย่างอีก 10,000 ชิ้นจึงสรุปได้
  4. **Q4:** หาก `MC-A` มีค่า Cycle Time เฉลี่ย 14.33 วินาที และ `MC-B` มี Cycle Time เฉลี่ย 13.98 วินาที ร่วมกับแรงดึงที่สูงกว่า +5.65 N การตัดสินใจเชิงวิศวกรรมข้อใดดีที่สุด?
     - `A)` พิจารณาถ่ายทอดพารามิเตอร์ของ MC-B ไปปรับใช้/เลือก MC-B เป็นมาตรฐานผลิต (ทั้งแข็งแรงกว่าและเร็วกว่า) ✅
     - `B)` เลิกใช้ MC-B เพราะแรงดึงเกิน LSL `105 N` มากเกินไป
     - `C)` หยุดสายการผลิตทันทีเพราะ Tampering
     - `D)` รวมข้อมูล MC-A และ MC-B เข้าด้วยกันโดยไม่แยกป้าย Machine

---

## Final Exam Logic (`EXAM-M3` on `M3L4-S09`)
- **Question Pool:** `M3-Q001` .. `M3-Q060` (`06_assessment_bank.md`)
- **Stratified Random Draw (20 Questions):** `4 L1 + 4 L2 + 6 L3 + 6 L4`
- **Pass Criteria:** `>= 80%` (`16/20`), Unlimited retries with remediation links.
