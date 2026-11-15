# Module 2 Interactive Logic Specification (Web-Native & SCORM Ready)

**Module:** Module 2 — Probability and Distribution  
**Primary Runtime:** Web App (React / Astro MDX / HTML5 Interactive Components)  
**Passing Score (`EXAM-M2`):** 80% (`>= 16 / 20`)

---

## Global State Variables
```json
{
  "var_current_screen": "M2L1-S01",
  "var_completed_screens": [],
  "var_funnel_rule": "Rule1",
  "var_fpy_yields": [0.95, 0.95, 0.95],
  "var_sample_size_n": 5,
  "var_dist_type": "Normal",
  "var_z_inputs": { "mu": 20.04, "sigma": 0.03, "usl": 20.10, "lsl": 19.90 },
  "var_clt_pop": "Skewed",
  "var_clt_n": 5,
  "var_lesson_scores": { "L1": 0, "L2": 0, "L3": 0, "L4": 0 },
  "var_exam_score": 0,
  "var_exam_passed": false
}
```

---

## Lesson M2-L1 Interactions

### INT-M2-L1-01 — Common vs Special Classifier & Deming Funnel (`M2L1-S04`)
- **Part A (8-Scenario Classifier):**
  1. ความสั่นสะเทือนปกติของมอเตอร์ที่ยังอยู่ในค่ามาตรฐาน → `Common Cause`
  2. เม็ดมีดกลึง (Carbide Insert) แตกบิ่นกะทันหัน → `Special Cause`
  3. ความแปรปรวนความแข็งเล็กน้อยภายในวัตถุดิบ Lot เดียวกัน → `Common Cause`
  4. พนักงานใหม่กะดึกตั้งค่า Tool Offset ผิดไป `+0.08 mm` → `Special Cause`
  5. ลมแอร์ในโรงงานเปลี่ยนอุณหภูมิเล็กน้อย `±0.5 °C` ตลอดวัน → `Common Cause`
  6. น็อตยึด Fixture คลายตัวหลังเดินเครื่อง 14:00 น. → `Special Cause`
  7. ค่าการอ่าน Micrometer ที่แกว่งตาม Repeatability ปกติ (`±0.002 mm`) → `Common Cause`
  8. ไฟตกชั่วขณะทำให้หัวฉีดขึ้นรูปแรงดันตก 1 รอบ → `Special Cause`
  - **Passing:** `>= 6/8`
- **Part B (Deming Funnel Simulator):**
  - Drop 30 simulated marbles (`N(0, 1)` natural scatter):
    - `Rule 1 (Leave funnel over target)`: Expected spread `σ_total = 1.00`
    - `Rule 2 (Adjust funnel by −last_error)`: Expected spread jumps to **`σ_total ≈ √2 = 1.414` (Variance 2×!)**
  - Displays live target bullseye scatter & variance ratio badge.

---

## Lesson M2-L2 Interactions

### INT-M2-L2-01 — Series FPY & Random Sampling Simulator (`M2L2-S05`)
- **Part A (Series Line FPY Calculator):**
  - 3 Sliders: `Y1, Y2, Y3` (`0.80` – `1.00`, default `0.95`)
  - Formula: `FPY_total = Y1 × Y2 × Y3 × 100%` (plus `Defective_Rate = 1 - FPY_total`)
- **Part B (Population `N=1000` Random Sampler):**
  - Pre-seeded Normal population (`μ = 20.000 mm, σ = 0.025 mm`)
  - Buttons: `Draw n = 5`, `Draw n = 20`, `Draw n = 50`, plus `Biased Top-Layer Draw`
  - Displays sample mean $\bar{x}$, sample SD $s$, sampling error $|\bar{x} - \mu|$, and comparison with theoretical $\sigma / \sqrt{n}$.

---

## Lesson M2-L3 Interactions

### INT-M2-L3-01 — Z-Score & Tail Area Calculator (`M2L3-S03`)
- **Inputs:** `μ`, `σ` (`> 0`), `LSL`, `USL` (Default: `20.04, 0.03, 19.90, 20.10`)
- **Calculations:**
  - `Z_USL = (USL - μ) / σ` → Upper Tail `P(X > USL) = 1 - Φ(Z_USL)`
  - `Z_LSL = (LSL - μ) / σ` → Lower Tail `P(X < LSL) = Φ(Z_LSL)`
  - `Total_OOS_pct = (P_upper + P_lower) × 100%`
  - `Total_PPM = (P_upper + P_lower) × 1,000,000`
- **Visual:** Renders Bell Curve with shaded red areas outside `[LSL, USL]`.

### INT-M2-L3-02 — Distribution Explorer (`M2L3-S07`)
- **Tab 1 — Normal:** Sliders `μ ∈ [-5, 5]`, `σ ∈ [0.3, 3.0]`
- **Tab 2 — Binomial:** Sliders `n ∈ [5, 50]`, `p ∈ [0.01, 0.50]` → Computes exact PMF `C(n,k) p^k (1-p)^(n-k)`, `Mean = np`, `SD = √(np(1-p))`, and displays badge when Normal Approximation applies (`np >= 5 && n(1-p) >= 5`)
- **Tab 3 — Poisson:** Slider `λ ∈ [0.2, 10.0]` → Computes exact PMF `e^-λ λ^k / k!`, `Mean = λ`, `SD = √λ`

### INT-M2-L3-03 — Distribution Selection Matrix (`M2L3-S08`)
- **6 Scenarios (`Passing >= 5/6`):**
  1. "น้ำหนักเม็ดพลาสติกต่อชิ้น (g) วัดด้วยเครื่องชั่งละเอียด" → `Normal Distribution`
  2. "จำนวนชิ้นงานที่ 'ไม่ผ่าน' ในกล่อง 50 ชิ้น (Pass/Fail)" → `Binomial Distribution`
  3. "จำนวนรอยขีดข่วนที่นับได้บนประตูรถยนต์ 1 บาน" → `Poisson Distribution`
  4. "จำนวนล็อตที่ถูก Reject จากการตรวจรับสินค้า 30 ล็อต" → `Binomial Distribution`
  5. "จำนวนฟองอากาศต่อแผ่นกระจก 1 ตารางเมตร" → `Poisson Distribution`
  6. "อายุการใช้งานมีดกลึง (Tool Life) จนหัก ซึ่งมักเบ้ขวาชัดเจน" → `Non-Normal / Weibull (Skewed)`

---

## Lesson M2-L4 Interactions

### INT-M2-L4-01 — Live Central Limit Theorem (CLT) Simulator (`M2L4-S05`)
- **Controls:**
  - `var_clt_pop`: `Normal` | `Right-Skewed (Exponential)` | `Uniform (Flat)` | `Bimodal`
  - `var_clt_n`: `1` | `2` | `5` | `15` | `30`
- **Monte Carlo Engine:**
  - Draws `500` independent samples of size `var_clt_n` from chosen population
  - Left Chart: Population shape (fixed reference `μ`, `σ`)
  - Right Chart: Histogram of the `500` sample means ($\bar{X}$) + theoretical Normal overlay `N(μ, σ/√n)`
  - Displays live ratio: `Actual SD of X̄` vs `Theoretical σ / √n`

### INT-M2-L4-02 — Workshop: CTQ Bore Diameter Analyzer (`M2L4-S06`)
- **Data Source:** `data/workshop_m2_ctq_parts.csv` (50 rows, 10 subgroups `SG-01..SG-10`, Spec `20.00 ± 0.10 mm`)
- **Toggle:** `All Data (n=50)` vs `Exclude Special Cause SG-09 (n=45)`
- **Diagnostic Quiz (4 Choices each, Passing `>= 3/4`):**
  1. **Q1:** เมื่อวิเคราะห์ข้อมูลทั้งหมด 50 ชิ้น (`Mean = 20.0102, SD = 0.0356`) ค่า $Z_{\text{USL}}$ (`USL = 20.10`) และโอกาสหลุด Spec รวมอยู่ที่ประมาณเท่าใด?
     - `A)` `Z = +4.50`, `OOS < 0.01%`
     - `B)` `Z = +2.52`, `OOS ≈ 0.68%` ✅
     - `C)` `Z = +1.00`, `OOS ≈ 15.87%`
     - `D)` `Z = +3.10`, `OOS ≈ 0.10%`
  2. **Q2:** เมื่อพล็อตค่าเฉลี่ยราย Subgroup (`SG-01` ถึง `SG-10`) Subgroup ใดแสดงสัญญาณ **Special Cause** ชัดเจนที่สุด?
     - `A)` `SG-03` (`20.004 mm`)
     - `B)` `SG-08` (`19.994 mm`)
     - `C)` `SG-09` (`20.094 mm` — พุ่งสูงผิดปกติและมีชิ้นเกิน `20.10 mm`) ✅
     - `D)` `SG-10` (`20.000 mm`)
  3. **Q3:** เมื่อแยก `SG-09` ออก (`Baseline n=45`) ได้ `SD รายชิ้น = 0.0220 mm` ตามกฎ CLT ค่า Standard Error ($\sigma_{\bar{x}}$) ของ Subgroup ละ `n = 5` ชิ้นจะเท่ากับเท่าใด?
     - `A)` `0.0220 mm` (เท่าเดิม)
     - `B)` `0.0220 / 5 = 0.0044 mm`
     - `C)` `0.0220 / √5 = 0.0099 mm` ✅
     - `D)` `0.0220 × √5 = 0.0492 mm`
  4. **Q4:** จากข้อมูลทั้งหมด 50 ชิ้น หากวัดในมุม Attribute จะได้ค่าประมาณ Binomial Fail Rate ($\hat{p}$) และ Poisson Defect Rate ($\hat{\lambda}$) เท่าใด?
     - `A)` $\hat{p} = 8.0\%$ (`4/50`), $\hat{\lambda} = 0.18$ (`9/50`) ✅
     - `B)` $\hat{p} = 4.0\%$, $\hat{\lambda} = 0.08$
     - `C)` $\hat{p} = 18.0\%$, $\hat{\lambda} = 0.50$
     - `D)` $\hat{p} = 2.0\%$, $\hat{\lambda} = 0.09$

---

## Final Exam Logic (`EXAM-M2` on `M2L4-S08`)
- **Question Pool:** `M2-Q001` .. `M2-Q060` (`06_assessment_bank.md`)
- **Stratified Random Draw (20 Questions):** `3 L1 + 5 L2 + 7 L3 + 5 L4`
- **Pass Score:** `>= 80%` (`16/20`), Unlimited attempts with remediation links.
