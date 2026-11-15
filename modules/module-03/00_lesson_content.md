# Module 3 Full Lesson Content (Web & MDX Ready — 26 Screens)

**Module 3: Confidence and Hypothesis Testing (กลยุทธ์การสุ่ม ช่วงความเชื่อมั่น และการทดสอบสมมติฐาน)**  
เอกสารนี้คือ **เนื้อหาบนหน้าจอฉบับสมบูรณ์ (On-Screen Teaching Copy)** สำหรับนักพัฒนาเว็บนำไปสร้างหน้าเว็บ/สไลด์ (MDX/React) คู่กับเสียงบรรยายใน [02_voiceover_th_en.md](02_voiceover_th_en.md) และตัวจำลองใน [04_interactive_logic.md](04_interactive_logic.md)

---

# LESSON M3-L1: Sampling Strategy (`3.1`)

## M3L1-S01 — Welcome & Why Sampling Strategy Matters
`<Asset id="AST-M3-001" />`
- **จาก Module 2 สู่ Module 3:** เรารู้แล้วว่าการสุ่มตัวอย่างช่วยประหยัดเวลาและค่าใช้จ่าย แต่ถ้า **สุ่มผิดวิธี** ข้อมูลที่ได้จะหลอกเราทั้งไลน์!
- **วัตถุประสงค์การเรียนรู้ประจำ Module 3:**
  1. เลือกใช้ **Random**, **Stratified** และ **Rational Subgroup** ให้ตรงวัตถุประสงค์
  2. คำนวณและตีความ **Confidence Interval (CI)** และ **Margin of Error (ME)**
  3. ตั้งสมมติฐาน **$H_0 / H_1$** และบริหารความเสี่ยง **$\alpha$ Risk**, **$\beta$ Risk**, **Power**, และ **p-value**
  4. ใช้ **1-Sample T-Test**, **2-Sample T-Test**, และเข้าใจ **ANOVA** พร้อมตรวจ Assumption ก่อนตัดสินใจ

## M3L1-S02 — Simple Random & Systematic Sampling
`<Asset id="AST-M3-002" />`
- **Simple Random Sampling (สุ่มอย่างง่าย):** ทุกชิ้นงานในล็อตมีโอกาสถูกเลือกเท่ากัน (เช่น สุ่มจับฉลาก/สุ่มด้วยตารางเลขสุ่มจากทุกชั้นของพาเลท) — *เหมาะสำหรับตรวจรับวัตถุดิบ (IQC) เพื่อหาภาพรวมของทั้ง Lot*
- **Systematic Sampling (สุ่มแบบมีระบบ):** เก็บตัวอย่างทุกๆ ช่วงคงที่ เช่น ทุกชิ้นที่ `k = 50` หรือทุกๆ `30 นาที` — *ใช้งานง่ายหน้าไลน์ แต่ต้องระวังหากเครื่องจักรมีรอบการแกว่ง (Cycle) ตรงกับรอบสุ่มพอดี!*

## M3L1-S03 — Stratified Sampling (การสุ่มแบบแบ่งชั้น)
`<Asset id="AST-M3-003" />`
- **หลักการ:** เมื่อประชากรประกอบด้วย **กลุ่มย่อยที่อาจแตกต่างกัน** เช่น 4 Cavities, 3 เครื่องจักร, กะเช้า-กะดึก, หรือวัตถุดิบ 2 Supplier
- **วิธีทำ:** แบ่งกลุ่มย่อย (Strata) ก่อน แล้วสุ่มเก็บข้อมูลให้ **ครบทุกกลุ่มตามสัดส่วน** พร้อมติดป้ายกำกับ (`Cavity ID`, `Shift`) ไว้ด้วยเสมอ เพื่อไม่ให้ปัญหากลุ่มหนึ่งถูกกลบหายไปในค่าเฉลี่ยรวม

## M3L1-S04 — Rational Subgroup (กลยุทธ์หัวใจของ SPC)
`<Asset id="AST-M3-004" />` `<Interactive id="INT-M3-L1-01" />`
- **นิยามของ Shewhart:** การจัดกลุ่มตัวอย่าง (`n = 4–5` ชิ้น) ที่ถูกผลิตขึ้น **ต่อเนื่องกันในสภาวะเดียวกันและช่วงเวลาสั้นๆ**
- **หลักคิด 2 ข้อของ Rational Subgroup:**
  1. **Minimize Within-Subgroup Variation:** ชิ้นงานภายในกลุ่มเดียวกันต้องมีเฉพาะ **Common Cause** (ห้ามเอาของ 2 เครื่องหรือคนละกะมารวมเป็น 1 Subgroup!)
  2. **Maximize Between-Subgroup Opportunity:** เพื่อให้ช่วงเวลาระหว่างกลุ่มจับ **Special Cause** (เช่น Tool Wear, เปลี่ยน Lot, อุณหภูมิไหล) ได้คมที่สุด!

| วิธีสุ่ม | เป้าหมายหลัก | ตัวอย่างหน้างาน |
|---|---|---|
| **Random** | ประเมินคุณภาพเฉลี่ยทั้งล็อต (Lot Acceptance) | สุ่มตรวจรับสินค้า 30 ชิ้นจากพาเลท IQC |
| **Stratified** | เทียบความต่างระหว่างกลุ่มย่อย & ไม่ตกหล่นกลุ่มเล็ก | สุ่มเก็บแม่พิมพ์ Cavity 1, 2, 3, 4 อย่างละเท่าๆ กัน |
| **Rational Subgroup** | ตรวจจับการเปลี่ยนแปลงของกระบวนการตามเวลา (SPC) | หยิบ 5 ชิ้นที่กลึงติดกันทุกๆ 1 ชั่วโมง |

## M3L1-S05 — Lesson 1 Knowledge Check (`KC-M3-L1`)
- ทบทวน 2 ข้อ (`M3-Q001`, `M3-Q006`) จาก [06_assessment_bank.md](06_assessment_bank.md)

---

# LESSON M3-L2: Confidence Interval (`3.2`)

## M3L2-S01 — Point Estimate vs Interval Estimate
`<Asset id="AST-M3-005" />`
- **Point Estimate:** ตัวเลขเดียวที่ได้จากตัวอย่าง เช่น แรงดึงเฉลี่ยของ `MC-A` = `119.50 N`
- **ปัญหา:** ถ้าสุ่มใหม่อีก 20 ชิ้น ค่าเฉลี่ยคงไม่เท่า `119.50 N` เป๊ะ จึงต้องสร้าง **Interval Estimate (ช่วงความเชื่อมั่น)** เพื่อบอกช่วงที่เชื่อมั่นว่าค่าจริงของประชากร ($\mu$) ซ่อนอยู่ เช่น **`[118.76, 120.24] N`**

## M3L2-S02 — Confidence Level & Correct Interpretation
`<Asset id="AST-M3-006" />`

$$\text{CI} = \bar{x} \pm t_{\alpha/2, \, n-1} \left(\frac{s}{\sqrt{n}}\right)$$

- **Confidence Level (`90% / 95% / 99%`):** มาตรฐานอุตสาหกรรมนิยมใช้ **`95%`** ($\alpha = 0.05$)
- **การตีความที่ถูกต้อง:** *"หากเราสุ่มตัวอย่างซ้ำ 100 ชุด แล้วสร้างช่วง CI ขึ้นมา 100 ช่วง จะมีประมาณ 95 ช่วงที่ครอบคลุมค่าจริง $\mu$ ของเครื่องจักร"*
- **ทำไมใช้ t-distribution แทน Z?** เพราะหน้างานจริงเรามักไม่รู้ $\sigma$ ของประชากร ต้องใช้ $s$ จากตัวอย่าง จึงต้องใช้ $t$-value ที่หางกว้างกว่าเล็กน้อย (เมื่อ $n$ ใหญ่ $t$ จะลู่เข้า $Z = 1.96$)

## M3L2-S03 — Margin of Error & Sample Size Planning
`<Asset id="AST-M3-007" />`

$$\text{Margin of Error (ME)} = t_{\alpha/2, \, n-1} \cdot \frac{s}{\sqrt{n}}, \qquad n = \left(\frac{Z_{\alpha/2} \cdot \sigma}{E}\right)^2$$

- **ปัจจัย 3 ตัวที่ทำให้ช่วง CI แคบลง (แม่นยำขึ้น):**
  1. เพิ่มขนาดตัวอย่าง **`n`** *(ลด ME ตาม $1/\sqrt{n}$ — อยากลด ME ครึ่งหนึ่ง ต้องเพิ่ม $n$ ถึง **4 เท่า**!)*
  2. ลดความแปรปรวนกระบวนการ **`s`**
  3. ลด Confidence Level (เช่น `99%` → `95%` จะแคบลง แต่ความมั่นใจลดลง)

## M3L2-S04 — Interactive Confidence Interval & Sample Size Explorer
`<Interactive id="INT-M3-L2-01" />`
- ปรับ `Confidence Level (90/95/99%)`, `Sample Size (n = 5..100)`, `SD (s)` และกดปุ่ม **"Simulate 20 Repeated Samples"** เพื่อดูจำนวนช่วงสีเขียวที่จับค่า $\mu$ จริงได้เทียบกับช่วงสีแดงที่พลาดเป้า (~5% ที่ 95% CI!)

## M3L2-S05 — Lesson 2 Knowledge Check (`KC-M3-L2`)
- ทบทวน 2 ข้อ (`M3-Q014`, `M3-Q020`)

---

# LESSON M3-L3: Hypothesis Testing (`3.3`)

## M3L3-S01 — Null ($H_0$) vs Alternative ($H_1$) Hypothesis
`<Asset id="AST-M3-008" />`
- **เปรียบเหมือนศาลยุติธรรม:** *"ผู้ต้องหาบริสุทธิ์ไว้ก่อน จนกว่าจะมีหลักฐานพิสูจน์ชัดว่าผิด"*
  - **$H_0$ (Null Hypothesis):** สมมติฐานตั้งต้นว่า **"ไม่มีความแตกต่าง / ไม่มีการเปลี่ยนแปลง"** (เช่น $\mu_A = \mu_B$, หรือ $\mu = 120.0\text{ N}$)
  - **$H_1$ (Alternative Hypothesis):** สมมติฐานแย้งที่วิศวกรต้องการพิสูจน์ (Two-sided: $\mu_A \ne \mu_B$ หรือ One-sided: $\mu_B > \mu_A$)
- **กฎทอง:** เราไม่มีวันพูดว่า *"Accept $H_0$"* — พูดได้เพียง **"Reject $H_0$"** (หลักฐานพอ) หรือ **"Fail to Reject $H_0$"** (หลักฐานยังไม่พอ)

## M3L3-S02 — Alpha Risk ($\alpha$, Type I Error)
`<Asset id="AST-M3-009" />`
- **นิยาม:** **ปฏิเสธ $H_0$ ทั้งที่ความจริง $H_0$ เป็นจริง** = **False Alarm (สัญญาณเตือนลวง / Producer's Risk)**
- **ตัวอย่างโรงงาน:** เครื่องจักรทั้ง 2 ตัวผลิตได้เท่ากันปกติ แต่ผลสุ่มบังเอิญเพี้ยนจนสรุปว่า "เครื่องต่างกัน" แล้วสั่งหยุดไลน์ปรับเครื่องฟรี
- มาตรฐานทั่วไปกำหนด $\alpha = 0.05$ (`5%` ความเสี่ยงที่จะเตือนผิดพลาด)

## M3L3-S03 — Beta Risk ($\beta$, Type II Error) & Statistical Power
`<Asset id="AST-M3-010" />`
- **นิยาม:** **ไม่ปฏิเสธ $H_0$ ทั้งที่ความจริง $H_0$ ผิด** = **Escape Risk (พลาดจับความผิดปกติไม่เจอ / Consumer's Risk)**
- **Statistical Power ($1 - \beta$):** ความสามารถของแบบทดสอบในการ **"ตรวจจับความต่างที่เกิดขึ้นจริงให้เจอ"** (มาตรฐานอุตสาหกรรมต้องการ Power **$\ge 80\%$**, $\beta \le 0.20$)
- **ทางเดียวที่ได้ทั้ง $\alpha$ ต่ำ และ Power สูงพร้อมกัน:** **เพิ่มขนาดตัวอย่าง $n$** หรือลด Measurement Noise!

| ความจริงในโรงงาน | ตัดสิน: Fail to Reject $H_0$ | ตัดสิน: Reject $H_0$ |
|---|---|---|
| **$H_0$ จริง (ไม่ต่าง/ปกติ)** | ✓ ตัดสินถูก ($1 - \alpha$) | **✕ Type I Error ($\alpha$ — False Alarm)** |
| **$H_0$ เท็จ (ต่างจริง/มีปัญหา)** | **✕ Type II Error ($\beta$ — Missed Signal)** | ✓ ตัดสินถูก (**Power = $1 - \beta$**) |

## M3L3-S04 — Understanding p-value
`<Asset id="AST-M3-011" />`
- **นิยาม:** โอกาสที่จะได้ข้อมูลต่างเท่านี้ (หรือมากกว่า) **หากสมมติว่า $H_0$ เป็นจริง**
- **กติกาจำง่าย:** ***"If the p is low, the Null must go!"***
  - **`p-value < α` (เช่น `< 0.05`)** → **Reject $H_0$** (หลักฐานชัดว่าแตกต่างอย่างมีนัยสำคัญทางสถิติ)
  - **`p-value ≥ α` (เช่น `≥ 0.05`)** → **Fail to Reject $H_0$** (หลักฐานยังไม่พอสรุปว่าต่าง)

## M3L3-S05 — Statistical vs Practical Significance
`<Asset id="AST-M3-012" />`
- **คำเตือนสำหรับวิศวกร:** ถ้าเก็บตัวอย่างเยอะมาก เช่น `n = 10,000` ชิ้น ความต่างเพียง **`0.002 mm`** ก็อาจได้ `p-value = 0.001` (Statistically Significant) ทั้งที่ในทางวิศวกรรมไม่มีผลต่อฟังก์ชันชิ้นงานเลย (Not Practically Significant) — **ต้องดู Confidence Interval ของความต่างร่วมกับ Specification เสมอ!**

## M3L3-S06 — Interactive Alpha–Beta–Power Visualizer
`<Interactive id="INT-M3-L3-01" />`
- เลื่อน Slider ปรับ `α (0.01–0.10)`, `Delta / Effect Size`, `Sample Size (n)` แล้วสังเกตการขยับของพื้นที่สีแดง ($\alpha$) สีส้ม ($\beta$) และค่า **Power ($1-\beta$)** แบบ Real-time

## M3L3-S07 — Lesson 3 Knowledge Check (`KC-M3-L3`)
- ทบทวน 3 ข้อ (`M3-Q027`, `M3-Q034`, `M3-Q039`)

---

# LESSON M3-L4: Practical Tests & Machine A vs B Workshop (`3.4`)

## M3L4-S01 — Practical Test Roadmap & Prerequisite Assumptions
`<Asset id="AST-M3-013" />`
- **ก่อนรัน T-Test หรือ ANOVA ต้องเช็ค 3 ข้อเสมอ:**
  1. **Independence:** ข้อมูลสุ่มอิสระ ไม่ปนกัน
  2. **Normality Check:** Anderson-Darling `p-value >= 0.05` (หรือถ้า $n$ ใหญ่ CLT ช่วยได้; หากเบ้มากใช้ Non-parametric เช่น Mann-Whitney / Kruskal-Wallis)
  3. **Equal Variance Check (สำหรับ 2-Sample / ANOVA):** Levene's / F-test `p-value >= 0.05` → ถ้าความแปรปรวนไม่เท่ากัน ใช้ **Welch's T-Test** (เป็นค่า Default ของ Minitab!)

## M3L4-S02 — 1-Sample T-Test
`<Asset id="AST-M3-014" />`

$$t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}, \qquad df = n - 1$$

- **ใช้เมื่อไร:** เทียบค่าเฉลี่ยของ **1 กระบวนการ** กับ **Target / Standard ($\mu_0$)**
- **ตัวอย่างหน้างาน (`MC-A` จาก Workshop):** เป้าหมาย `120.0 N`, วัด 20 ชิ้นได้ $\bar{x} = 119.50\text{ N}, s = 1.581\text{ N}$
  - $t = \frac{119.50 - 120.00}{1.581 / \sqrt{20}} = -1.415$ (`p = 0.173 >= 0.05`) → **Fail to Reject $H_0$** (ค่าเฉลี่ยยังไม่ต่างจากเป้า 120 N อย่างมีนัยสำคัญ)

## M3L4-S03 — 2-Sample T-Test (vs Paired T-Test)
`<Asset id="AST-M3-015" />`

$$t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}$$

- **2-Sample T-Test (Independent):** เทียบ 2 กลุ่มอิสระกัน เช่น `Machine A` (20 ชิ้น) vs `Machine B` (อีก 20 ชิ้น)
- **ระวังแยกให้ออกกับ Paired T-Test:** ถ้าวัด **"ชิ้นงานชุดเดียวกัน"** ก่อน-หลังอบความร้อน หรือวัดชิ้นเดิมด้วย 2 เครื่องมือวัด → ต้องใช้ **Paired T-Test** (วิเคราะห์ผลต่างรายคู่ $d_i$) เพื่อตัดความแปรปรวนระหว่างชิ้นงานออก!

## M3L4-S04 — ANOVA Concept (Analysis of Variance)
`<Asset id="AST-M3-016" />`

$$F = \frac{\text{Variation Between Groups (MS}_{\text{between}}\text{)}}{\text{Variation Within Groups (MS}_{\text{within}}\text{)}}$$

- **ทำไมไม่ทำ 2-Sample T-Test หลายๆ คู่แทน ANOVA?** เพราะถ้ามี 4 แม่พิมพ์ (`Cavity 1–4`) ต้องจับคู่เทียบถึง 6 ครั้ง ทำให้ความเสี่ยง False Alarm รวมพุ่งจาก 5% เป็น **`1 - 0.95⁶ = 26.5%`**!
- **ANOVA** ทดสอบพร้อมกันทีเดียว ($H_0: \mu_1 = \mu_2 = \mu_3 = \mu_4$): ถ้า `p-value < 0.05` แปลว่า *มีอย่างน้อย 1 คู่ที่ต่างกัน* แล้วค่อยใช้ Post-hoc test (Tukey) ชี้เป้าว่าตัวไหนต่าง (และตรวจ Residual Diagnostics ด้วย)

## M3L4-S05 — Interactive Test Selection Wizard
`<Interactive id="INT-M3-L4-01" />`
- ฝึกเลือกเครื่องมือทดสอบ (`1-Sample T`, `2-Sample T`, `Paired T`, `One-Way ANOVA`, `Equal Variance / Non-parametric`) จากโจทย์โรงงาน 6 สถานการณ์

## M3L4-S06 — Workshop: เปรียบเทียบ Machine A vs Machine B
`<Interactive id="INT-M3-L4-02" />`
- **ไฟล์ข้อมูล:** [data/workshop_m3_machine_a_vs_b.csv](data/workshop_m3_machine_a_vs_b.csv) (`Pull_Force_N` ของ `MC-A` 20 ชิ้น vs `MC-B` 20 ชิ้น, Target = `120.0 N`, `LSL = 105.0 N`)
- **ภารกิจ 4 ขั้นตอน:**
  1. ตรวจ 95% CI ของ `MC-A` และ `MC-B` รวมถึงทำ **1-Sample T-Test** ของ `MC-A` เทียบเป้า `120.0 N`
  2. ตรวจ **Equal Variance (F-Test)** ระหว่าง `MC-A` และ `MC-B`
  3. รัน **2-Sample T-Test** ($H_0: \mu_A = \mu_B$) และอ่านค่า `t-stat`, `p-value`, และ `95% CI ของผลต่าง`
  4. สรุปการตัดสินใจเชิงวิศวกรรม (Statistical vs Practical Significance)

## M3L4-S07 — Workshop Step-by-Step Solution
`<Asset id="AST-M3-017" />`
- **`MC-A`:** Mean = `119.500 N`, SD = `1.581 N`, 95% CI = `[118.760, 120.240] N` → 1-Sample `t = -1.415, p = 0.173` (ตรงเป้า `120 N`)
- **`MC-B`:** Mean = `125.150 N`, SD = `1.290 N`, 95% CI = `[124.546, 125.754] N`
- **Variance Check:** `F = 1.501` (`< 2.53`, `p = 0.382 >= 0.05`) → ความแปรปรวนใกล้เคียงกัน
- **2-Sample T-Test (`MC-B - MC-A`):** ผลต่าง = **`+5.650 N`**, `t = 12.383`, `df = 38`, **`p < 0.0001`**, 95% CI ของผลต่าง = **`[4.726, 6.574] N`** → **Reject $H_0$** (`MC-B` แข็งแรงกว่า `MC-A` อย่างชัดเจนทั้งทางสถิติและทางวิศวกรรม แถม Cycle Time เร็วกว่าเล็กน้อย!)
- ดูเฉลยละเอียดใน [07_workshop_guide.md](07_workshop_guide.md)

## M3L4-S08 — Practical Summary & Bridge to Module 4
`<Asset id="AST-M3-018" />`
- ทบทวน Workflow: `Sample Strategy → CI → Assumptions Check → Hypothesis Test → Practical Action` และเชื่อมต่อไป **Module 4 (Process Capability: Cp/Cpk/Pp/Ppk)**

## M3L4-S09 — Module 3 Final Assessment (`EXAM-M3`)
- สอบประมวลผลสุ่ม **20 ข้อ** จากคลัง [06_assessment_bank.md](06_assessment_bank.md) (`M3-Q001`–`M3-Q060`) | เกณฑ์ผ่าน **80% (`16/20`)**
