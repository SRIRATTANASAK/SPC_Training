# Module 9 Full Lesson Content (Web & MDX Ready — 28 Screens)

**Module 9: MSA Connection to SPC (`Why MSA Before SPC`, `Gage R&R`, `Bias / Linearity / Stability` & Gage R&R Report Workshop)**  
เอกสารนี้คือ **เนื้อหาบนหน้าจอฉบับสมบูรณ์ (On-Screen Teaching Copy)** สำหรับนักพัฒนาเว็บนำไปสร้างหน้าเว็บ/สไลด์ (MDX/React) คู่กับเสียงบรรยายใน [02_voiceover_th_en.md](02_voiceover_th_en.md) และตัวจำลองใน [04_interactive_logic.md](04_interactive_logic.md)

---

# LESSON M9-L1: Why MSA Before SPC (`9.1`)

## M9L1-S01 — Welcome: Is Your Control Chart Lying to You?
`<Asset id="AST-M9-001" />`
- **จุดเชื่อมสำคัญจาก Module 8 (Gate 3) & Module 7 (Phase 2):** ในโรงงานจริง วิศวกรจำนวนมากรีบตั้ง Control Chart ทันทีโดยไม่เคยตรวจสอบเครื่องมือวัด (**Measurement System Analysis: `MSA`**) — ผลคือเห็นจุด OOC เต็มกราฟ หรือ $C_{pk}$ ตกต่ำ ทั้งที่เครื่องจักรดีอยู่แล้ว!
- **กฎเหล็กของ AIAG MSA 4th Edition & IATF 16949:** **ต้องทำ MSA ให้ผ่านก่อนเชื่อถือ Control Chart และค่า Capability (`Cpk / Ppk`) เสมอ!**
- **วัตถุประสงค์การเรียนรู้ประจำ Module 9:**
  1. เข้าใจสมการแยกความแปรปรวน $\sigma^2_{\text{obs}} = \sigma^2_{\text{part}} + \sigma^2_{\text{gage}}$ และผลกระทบต่อ **False Signal & $C_{pk}$**
  2. แยกแยะและคำนวณ **Gage R&R (`Repeatability` vs `Reproducibility`, `%GRR`, `%Tolerance`, `ndc >= 5`)**
  3. ตรวจสอบ **Bias, Linearity, และ Stability** ของระบบการวัด
  4. อ่านและวินิจฉัย **Gage R&R Report** จากข้อมูลโรงงานจริง (`10 Parts × 3 Appraisers × 3 Trials`)

## M9L1-S02 — The Observed Variance Equation ($\sigma^2_{\text{obs}} = \sigma^2_{\text{part}} + \sigma^2_{\text{gage}}$)
`<Asset id="AST-M9-002" />`
- **ความจริงที่ซ่อนอยู่ในตัวเลขทุกตัวที่เราวัด:** ค่าที่อ่านได้บนหน้าจอเครื่องวัด ($X_{\text{obs}}$) ไม่ใช่ขนาดจริงของชิ้นงาน 100% แต่เป็นผลรวมของ:
  $$\sigma^2_{\text{observed}} = \sigma^2_{\text{part (จริง)}} + \sigma^2_{\text{measurement (gage)}}$$
- **ผลกระทบ 3 ต่อเมื่อ $\sigma_{\text{gage}}$ ใหญ่เกินไป:**
  1. **Control Limits (`UCL/LCL`) ถ่างกว้างหรือเกิด False OOC Signal:** เส้นควบคุมถูกปนด้วยความแกว่งของคนวัดและเกจ
  2. **ค่า $C_{pk}$ จริงถูกกดให้ดูต่ำลง (`Artificially Deflated Cpk`):** เช่น กระบวนการจริง $C_{pk} = 1.67$ อาจถูกกดเหลือ `1.20` จนไม่ผ่าน PPAP!
  3. **การตัดสินใจผิด (`Type I / Type II Error`):** ทิ้งของดี (`Producer's Risk`) หรือปล่อยของเสียหลุด (`Consumer's Risk`)

## M9L1-S03 — How Bad MSA Distorts Control Charts & Capability
`<Asset id="AST-M9-003" />`
- **ตัวอย่างตัวเลขชัดเจน:** สมมติความแปรปรวนจริงของชิ้นงาน $\sigma_{\text{part}} = 0.010\text{ mm}$:
  - ถ้าใช้เครื่องวัดดี (`%GRR = 8%`): $\sigma_{\text{obs}} \approx 0.01003$ → **แทบไม่เพี้ยน!**
  - ถ้าใช้เครื่องวัดแย่ (`%GRR = 50%`): $\sigma_{\text{obs}}$ พองขึ้นเป็น **`0.01155`** และหาก `%GRR = 70%` ค่า `Cpk` ที่วัดได้จะหดหายไปเกือบ **`30%`**!
- **กฎ 10-to-1 Resolution Rule (Discrimination):** ความละเอียดของเครื่องวัด (`Resolution`) ต้องละเอียดอย่างน้อย **1 ใน 10 ของ Tolerance** (หรือ $0.1 \times 6\sigma_{\text{part}}$) — เช่น Spec `±0.05 mm` (Tol `0.10`) ห้ามใช้เวอร์เนียร์ความละเอียด `0.05 mm` เด็ดขาด ต้องใช้ **`0.001–0.01 mm`**!

## M9L1-S04 — Interactive Gage R&R Impact Simulator
`<Interactive id="INT-M9-L1-01" />`
- ลองเลื่อน Slider **`%Repeatability`** และ **`%Reproducibility`** แล้วดูผลกระทบแบบ Real-time ต่อ:
  - เส้น **Control Chart** (เกิดจุด False Out-of-Control และ `R̄` พุ่ง)
  - ค่า **$C_{pk}$ ที่วัดได้ (`Observed Cpk`)** ที่ถูกกดต่ำลงจากค่าจริง! (`+10 pts`)

## M9L1-S05 — Lesson 1 Knowledge Check (`KC-M9-L1`)
- ทบทวน 2 ข้อ (`M9-Q001`, `M9-Q008`) จาก [06_assessment_bank.md](06_assessment_bank.md)

---

# LESSON M9-L2: Gage R&R (`Repeatability`, `Reproducibility`, `%GRR`, `ndc`) (`9.2`)

## M9L2-S01 — Repeatability (`EV`) vs Reproducibility (`AV`)
`<Asset id="AST-M9-004" />`
- **Gage R&R** แยกความแปรปรวนของระบบวัดออกเป็น 2 องค์ประกอบหลัก:
  1. **Repeatability (`EV` — Equipment Variation):** **คนเดิม + เครื่องวัดเดิม + ชิ้นเดิม** วัดซ้ำหลายครั้งแล้วค่าไม่เท่ากัน → สะท้อน **ความแม่นยำของตัวเครื่องวัด / Fixture วัด**
  2. **Reproducibility (`AV` — Appraiser Variation):** **คนวัดต่างกัน (`Appraiser A vs B vs C`)** วัดชิ้นงานเดียวกันด้วยเครื่องเดียวกันแล้วได้ค่าเฉลี่ยต่างกัน → สะท้อน **ความต่างของทักษะ วิธีจับ หรือแรงกดในการวัด**

## M9L2-S02 — Conducting a Standard Gage R&R Study (`10 × 3 × 3`)
`<Asset id="AST-M9-005" />`
- **แผนการทดลองมาตรฐาน AIAG MSA:**
  - **10 Parts:** สุ่มชิ้นงานให้ครอบคลุมช่วงการผลิตจริง (ห้ามเลือกเฉพาะชิ้นที่เหมือนกันเป๊ะ!)
  - **3 Appraisers (A, B, C):** ผู้ปฏิบัติงานที่วัดจริงหน้าไลน์
  - **3 Trials (ทำซ้ำคนละ 3 รอบ):** วัดแบบ **Blind & Randomized** (ไม่ให้คนวัดเห็นเบอร์ชิ้นงานหรือจำค่าเดิมได้!)
- **รวมทั้งหมด:** $10 \times 3 \times 3 = \mathbf{90\text{ การวัด}}$

## M9L2-S03 — Key Formulas: `EV`, `AV`, `GRR`, `%GRR` & `ndc`
`<Asset id="AST-M9-006" />`
- **สูตรคำนวณ (Average & Range Method — AIAG 4th Ed.):**
  - $\text{EV} = \bar{\bar{R}} \times K_1$ (เมื่อ $m=3$ Trials: $K_1 = 0.5908$)
  - $\text{AV} = \sqrt{(\bar{X}_{\text{diff}} \times K_2)^2 - \frac{\text{EV}^2}{n \cdot r}}$ (เมื่อ $k=3$ Appraisers: $K_2 = 0.5231$)
  - $\text{GRR} = \sqrt{\text{EV}^2 + \text{AV}^2}$, $\quad \text{PV} = R_p \times K_3$ ($n=10 \rightarrow K_3 = 0.3146$), $\quad \text{TV} = \sqrt{\text{GRR}^2 + \text{PV}^2}$
- **เกณฑ์ตัดสิน 3 ตัวชี้วัดหลัก:**
  1. **`%GRR (%Study Var)`** $= \frac{\text{GRR}}{\text{TV}} \times 100\%$ — **ใช้ดูความเหมาะสมกับ SPC Control Chart!**
  2. **`%Tolerance`** $= \frac{6 \times \text{GRR}}{\text{USL} - \text{LSL}} \times 100\%$ — **ใช้ดูความเหมาะสมกับการตรวจรับ/คัด Spec!**
  3. **`ndc` (Number of Distinct Categories):** $\text{ndc} = \text{int}\!\left(1.41 \times \frac{\text{PV}}{\text{GRR}}\right)$ — จำนวนกลุ่มข้อมูลที่เครื่องวัดแยกแยะได้

## M9L2-S04 — AIAG Acceptance Criteria (`< 10%`, `10–30%`, `> 30%` & `ndc >= 5`)
`<Asset id="AST-M9-007" />`

| ตัวชี้วัด | ผ่านสมบูรณ์ (Acceptable) | ยอมรับแบบมีเงื่อนไข (Marginal) | ไม่ผ่าน (Unacceptable — ห้ามใช้!) |
|---|---|---|---|
| **`%GRR` & `%Tolerance`** | **`< 10%`** | `10% – 30%` *(ขึ้นอยู่กับความสำคัญ/ต้นทุน)* | **`> 30%`** *(ต้องแก้ไขทันที!)* |
| **`ndc`** | **`>= 5`** | `3 – 4` *(แยกได้หยาบ)* | **`< 5`** *(ใช้คุม SPC ไม่ได้!)* |

- **ข้อควรระวัง:** หาก **`%Tolerance < 10%`** แต่ **`%GRR (%SV) > 30%`** แปลว่าเกจพอใช้คัด Spec ได้ แต่ **ไม่ไวพอสำหรับทำ SPC Control Chart** เพราะชิ้นงานจริงดีมากจนความแปรปรวนเกจกลบความแปรปรวนชิ้นงาน!

## M9L2-S05 — Diagnosing `EV > AV` vs `AV > EV` (How to Fix)
`<Asset id="AST-M9-008" />`
- **ถ้า `EV > AV` (ปัญหา Repeatability สูง):** ตัวเครื่องวัด/Fixture ไม่นิ่ง → ตรวจความหลวมของเกจ, สภาพหัววัด (`Probe`), ความสะอาด, หรือเปลี่ยนเครื่องวัดที่ละเอียดขึ้น
- **ถ้า `AV > EV` (ปัญหา Reproducibility สูง):** คนวัดแต่ละคนวัดไม่เหมือนกัน → ปรับมาตรฐานวิธีจับชิ้นงาน (`WI`), ใช้ **Ratchet Stop / Constant-Force Micrometer**, หรืออบรม Appraiser ที่ค่าเฉลี่ยเพี้ยน!

## M9L2-S06 — Interactive Repeatability vs Reproducibility Lab
`<Interactive id="INT-M9-L2-01" />`
- ทดลองสลับ 2 สถานการณ์บน Control Chart (`Range Chart by Appraiser` และ `Xbar Chart by Appraiser`): **`EV > AV`** vs **`AV > AV (Appraiser B กดแรง)`** แล้วเลือกวิธีแก้ไขให้ `%GRR` ลดต่ำกว่า `10%` และ `ndc >= 5` (`+10 pts`)

## M9L2-S07 — Lesson 2 Knowledge Check (`KC-M9-L2`)
- ทบทวน 2 ข้อ (`M9-Q016`, `M9-Q023`)

---

# LESSON M9-L3: `Bias`, `Linearity` & `Stability` (`9.3` – `9.5`)

## M9L3-S01 — Accuracy vs Precision: The 4 Location & Variation Errors
`<Asset id="AST-M9-009" />`
- **Gage R&R** วัดเฉพาะ **Precision (ความเกาะกลุ่ม)** เท่านั้น — ยังไม่พอบอกว่าค่าที่วัด **"ตรงความจริง (Accuracy)"** หรือไม่!
- ระบบการวัดที่สมบูรณ์ต้องตรวจ **Location (ความแม่นยำเชิงตำแหน่ง)** เพิ่มอีก 3 ตัว: **Bias**, **Linearity**, และ **Stability**

## M9L3-S02 — Bias (`9.3`): Systematic Offset From Master Reference
`<Asset id="AST-M9-010" />`
- **นิยาม Bias:** ผลต่างระหว่าง **ค่าเฉลี่ยที่วัดได้ ($\bar{X}$)** กับ **ค่าอ้างอิงมาตรฐาน (`Master Reference Value`)** จาก Master Gage Block:
  $$\text{Bias} = \bar{X}_{\text{observed}} - \text{Reference Value}$$
- **วิธีตรวจ:** นำ Master ชิ้นเดียววัดซ้ำ `10–15` ครั้ง → เช็กว่า `0` อยู่ในช่วงความเชื่อมั่น (`95% CI` ของ Bias) หรือไม่ — ถ้าไม่, แปลว่าเกจมี **Bias (ต้อง Zero / Calibrate ใหม่!)**

## M9L3-S03 — Linearity (`9.4`): Is Bias Constant Across the Operating Range?
`<Asset id="AST-M9-011" />`
- **นิยาม Linearity:** การเปลี่ยนแปลงของ **Bias ตลอดช่วงการใช้งาน (`Operating Range`)** ของเครื่องวัด
- **วิธีตรวจ:** ใช้ Master Reference อย่างน้อย **`5` ขนาด** ครอบคลุมช่วงต่ำสุดถึงสูงสุดที่ใช้งานจริง (เช่น `10, 20, 30, 40, 50 mm`) → พล็อตกราฟ **Bias vs Reference Value**:
  - **Linearity ดี:** ความชัน (`Slope`) ใกล้ `0` (Bias คงที่ทุกขนาด)
  - **Linearity แย่:** วัดชิ้นเล็กแม่น แต่พอวัดชิ้นใหญ่ค่าเพี้ยนมากขึ้นเรื่อยๆ → ต้องส่งสอบเทียบ/ซ่อมกลไก!

## M9L3-S04 — Stability (`9.5`): Consistency Over Time Using Control Chart
`<Asset id="AST-M9-012" />`
- **นิยาม Stability:** การเปลี่ยนแปลงของ **Bias และ Variation เมื่อเวลาผ่านไป** (เช่น ผลจากอุณหภูมิ, การสึกหรอหัววัด, แบตเตอรี่อ่อน)
- **วิธีตรวจ (ใช้ SPC คุมเครื่องวัดเอง!):** นำ **Master Check Standard** มาวัดซ้ำทุกกะ/ทุกวัน (`n = 3–5` ครั้ง) แล้วพล็อตลงบน **$\bar{X}$-$R$ Control Chart** — หากเกิดจุด OOC แสดงว่าเครื่องวัดเริ่ม Drift ต้องหยุดใช้งานและ Calibrate ทันที!

## M9L3-S05 — Interactive Bias, Linearity & Stability Diagnostic
`<Interactive id="INT-M9-L3-01" />`
- วินิจฉัย 3 กราฟจำลอง (`Bias Offset`, `Linearity Slope`, `Stability OOC Drift`) พร้อมจับคู่วิธีแก้ไขที่ถูกต้อง (`Zero/Calibrate`, `Repair Scale`, `Recall Gage`) (`+10 pts`)

## M9L3-S06 — Lesson 3 Knowledge Check (`KC-M9-L3`)
- ทบทวน 2 ข้อ (`M9-Q031`, `M9-Q038`)

---

# LESSON M9-L4: Gage R&R Report Workshop & Bridge to Module 10 (`9.6`)

## M9L4-S01 — Anatomy of a Standard Gage R&R Report (Minitab / AIAG Format)
`<Asset id="AST-M9-013" />`
- วิธีอ่าน **6 กราฟมาตรฐานใน Gage R&R Report** ภายใน 60 วินาที:
  1. **Components of Variation Bar:** เทียบ `Repeatability` vs `Reproducibility` vs `Part-to-Part`
  2. **`R` Chart by Appraiser:** มีจุดเกิน `UCL_R` หรือไม่? (ถ้ามี → คนนั้นวัดไม่สม่ำเสมอ)
  3. **`Xbar` Chart by Appraiser:** จุดควร **ออกนอก `UCL/LCL` ให้มากที่สุด** (เพื่อพิสูจน์ว่าเครื่องวัดแยกความต่างระหว่าง Part ได้!)
  4. **By Part & By Appraiser Plots:** เส้นค่าเฉลี่ยของ A, B, C ขนานทับกันหรือไม่?
  5. **Part × Appraiser Interaction:** เส้นตัดกันไขว้ไปมาหรือไม่?

## M9L4-S02 — Workshop Intro: Pin OD Gage R&R Study (`10 Parts × 3 × 3`)
`<Asset id="AST-M9-014" />`
- **โจทย์โรงงานจริง (`Pin OD`: Spec `12.000 ± 0.100 mm`, Tolerance = `0.200 mm`):**
  - ไฟล์ข้อมูล: [data/workshop_m9_gage_rr_study.csv](data/workshop_m9_gage_rr_study.csv) (`10 Parts × 3 Appraisers × 3 Trials = 90` การวัด)
  - ทีม QC ส่งรายงาน Gage R&R มาว่าไม่ผ่านเกณฑ์ ภารกิจของคุณคือ **อ่านตัวเลข `EV, AV, %GRR, %Tol, ndc`**, ชี้ตัวการที่ทำให้ไม่ผ่าน, และเลือกมาตรการแก้ไข!

## M9L4-S03 — Interactive Workshop: Reading & Fixing the Gage R&R Report
`<Interactive id="INT-M9-L4-01" />`
- วิเคราะห์ข้อมูลจาก CSV (`Appraiser A = 12.0003`, `B = 11.9783`, `C = 12.0022`, `R̄̄ = 0.00213`, `X̄_diff = 0.02393`, `R_p = 0.06700`) → คำนวณ/ตรวจผล:
  - `EV = 0.00126 mm`, **`AV = 0.01252 mm`**, `GRR = 0.01258 mm`, `TV = 0.02455 mm`
  - **`%GRR (SV) = 51.25%`** (`FAIL > 30%`), **`%GRR (Tol) = 37.74%`** (`FAIL > 30%`), **`ndc = 2`** (`FAIL < 5`)
  - **วินิจฉัย:** `AV >> EV` (`Reproducibility` พังเพราะ **Appraiser B กดไมโครมิเตอร์แรงเกินไป `-0.022 mm`**) → แก้ด้วย **Ratchet Stop / Constant-Force Micrometer + WI มาตรฐานแรงกด**! (`+15 pts`)

## M9L4-S04 — Workshop Solution: Before vs After Gage R&R Improvement
`<Asset id="AST-M9-015" />`
- **Before:** `%GRR = 51.25%`, `%Tol = 37.74%`, `ndc = 2` (ใช้คุม SPC ไม่ได้!)
- **After Standardizing Ratchet Stop (`X̄_diff` ลดเหลือ `0.0019`):** `AV` ลดฮวบ → **`%GRR < 8%`**, **`%Tol < 6%`**, **`ndc >= 15`** → **ผ่านเกณฑ์ AIAG 100% พร้อมขึ้น Control Chart!**

## M9L4-S05 — Attribute MSA (Kappa) Quick Note
`<Asset id="AST-M9-016" />`
- สำหรับงาน **Attribute (Pass/Fail ด้วยสายตา)** ใช้ **Attribute Agreement Analysis (`Kappa`)**:
  - **$\kappa \ge 0.75$:** ยอมรับได้ดี (Good Agreement)
  - **$\kappa < 0.40$:** แย่ (Poor — ต้องทำ Visual Boundary Sample & อบรมใหม่!)

## M9L4-S06 — Module 9 Summary & Bridge to Module 10 (`Capstone Industrial Cases`)
`<Asset id="AST-M9-017" />`
- **สรุป 4 กุญแจสำคัญของ Module 9:** $\sigma^2_{\text{obs}} = \sigma^2_{\text{part}} + \sigma^2_{\text{gage}}$ → `EV` vs `AV` (`%GRR < 10%`, `ndc >= 5`) → `Bias / Linearity / Stability` → Attribute `Kappa`
- **ก้าวสุดท้ายสู่ Module 10 (`Industrial Case Study`):** เมื่อระบบวัดผ่าน MSA แล้ว เราจะนำความรู้ทั้งหมดตั้งแต่ **Module 1–9** มาลงสนามจริงใน **4 กรณีศึกษาอุตสาหกรรมมาตรฐาน AIAG** (Machining `X̄-R + Cpk`, Assembly `I-MR`, Defect `p/u Chart`, และ PPAP `Ppk` Release Study)!

## M9L4-S07 — Lesson 4 Knowledge Check (`KC-M9-L4`)
- ทบทวน 2 ข้อ (`M9-Q046`, `M9-Q052`)

## M9L4-S08 — Module 9 Resources & Quick Checklist
`<Asset id="AST-M9-018" />`
- สรุปเกณฑ์ AIAG MSA 4th Edition ครบทุกค่าพร้อมลิงก์เปิด [08_cheatsheet_and_glossary.md](08_cheatsheet_and_glossary.md) ก่อนเข้าสู่การสอบปลายบท

## M9L4-S09 — Module 9 Final Assessment (`EXAM-M9`)
- แบบทดสอบปลาย Module 9 แบบสุ่มแยกบท **20 ข้อ (`M9-Q001`–`M9-Q060`)** — เกณฑ์ผ่าน **`>= 80%` (`16/20`)**
