# Module 2 Full Lesson Content (Web & MDX Ready — 28 Screens)

**Module 2: Probability and Distribution (ความแปรปรวน ความน่าจะเป็น การแจกแจง และ Central Limit Theorem)**  
เอกสารนี้คือ **เนื้อหาบนหน้าจอฉบับสมบูรณ์ (On-Screen Teaching Copy)** สำหรับนักพัฒนาเว็บนำไปสร้างหน้าเว็บ/สไลด์ (MDX/React) คู่กับเสียงบรรยายใน [02_voiceover_th_en.md](02_voiceover_th_en.md) และตัวจำลองใน [04_interactive_logic.md](04_interactive_logic.md)

---

# LESSON M2-L1: Concept of Variation (`2.1`)

## M2L1-S01 — Welcome & Why Variation Matters for Probability
`<Asset id="AST-M2-001" />`
- **จาก Module 1 สู่ Module 2:** เรารู้แล้วว่า *ทุกกระบวนการมีความแปรปรวน* — คำถามต่อไปของวิศวกรคือ: **"ความแปรปรวนนั้นบอกโอกาสเกิดของเสีย (Probability) ได้อย่างไร?"**
- **วัตถุประสงค์การเรียนรู้ประจำ Module 2:**
  1. แยกแยะ **Common Cause** ออกจาก **Special Cause Variation** ได้อย่างถูกต้อง
  2. คำนวณความน่าจะเป็นพื้นฐาน, First Pass Yield (FPY) และแยก **Population vs Sample**
  3. เลือกใช้และคำนวณการแจกแจง **Normal**, **Binomial** และ **Poisson** ให้ตรงกับงานโรงงาน
  4. เข้าใจ **Central Limit Theorem (CLT)** — หัวใจสำคัญที่ทำให้ Control Chart ใน SPC ใช้งานได้จริง

## M2L1-S02 — Common Cause Variation (ความแปรปรวนปกติ)
`<Asset id="AST-M2-002" />`
- **นิยาม:** ความแปรปรวนตามธรรมชาติที่ฝังอยู่ในระบบอยู่แล้ว เกิดจากปัจจัยเล็กๆ น้อยๆ นับไม่ถ้วนรวมกัน (เช่น แรงสั่นสะเทือนปกติ, ความต่างอุณหภูมิห้องเล็กน้อย, ความต่างความแข็งวัตถุดิบใน Spec)
- **ลักษณะบนกราฟ:** สม่ำเสมอ คาดเดารูปแบบได้ เป็น **Noise (เสียงรบกวนปกติ)** กระบวนการอยู่ในสภาวะ **Stable / In Statistical Control**
- **วิธีจัดการที่ถูกต้อง:** ห้ามปรับเครื่องเฉพาะหน้า! ถ้าต้องการลด Common Cause ต้องแก้ที่ **ระบบ (System Improvement)** โดยวิศวกร/ผู้บริหาร เช่น เปลี่ยนเครื่องจักร, ปรับ Tooling, ปรับ Process Parameter

## M2L1-S03 — Special Cause Variation & Tampering Trap
`<Asset id="AST-M2-003" />`
- **นิยาม:** ความแปรปรวนที่เกิดจาก **สาเหตุเฉพาะเจาะจงที่ระบุตัวได้ (Assignable Cause)** เช่น มีดกลึงบิ่น, Fixture หลวม, เปลี่ยน Lot วัตถุดิบผิด Spec, พนักงานใหม่ปรับ Offset ผิด
- **ลักษณะบนกราฟ:** กระโดดเป็นจุดหลุด, ไหลเป็น Trend, หรือเลื่อนระดับ (Shift) — เป็น **Signal (สัญญาณผิดปกติ)** กระบวนการ **Unstable / Out of Control**
- **กับดัก Tampering (Over-adjustment):** การเข้าไปปรับเครื่องทันทีเพราะเห็นค่าแกว่งแบบ Common Cause จะทำให้ความแปรปรวนรวม **กว้างขึ้นกว่าเดิม 1.4–2 เท่า!**

| เปรียบเทียบ | Common Cause (Noise) | Special Cause (Signal) |
|---|---|---|
| **ความถี่/ลักษณะ** | เกิดตลอดเวลา เป็นธรรมชาติ | เกิดเป็นครั้งคราว มีเหตุการณ์กระตุ้น |
| **สถานะกระบวนการ** | **Stable** (คาดเดาผลลัพธ์ได้) | **Unstable** (คาดเดาไม่ได้!) |
| **ผู้รับผิดชอบหลัก** | System / Management / Engineering | Operator Reaction Plan + OCAP |

## M2L1-S04 — Interactive Classifier & Funnel Tampering Lab
`<Asset id="AST-M2-004" />` `<Interactive id="INT-M2-L1-01" />`
- ทดลองจำแนกสถานการณ์โรงงาน 8 ข้อว่าเป็น Common Cause หรือ Special Cause + กดจำลอง **Deming Funnel Experiment** เพื่อดูผลของการปรับเครื่องมั่ว (Rule 2 Tampering) เทียบกับการปล่อยนิ่ง (Rule 1)

## M2L1-S05 — Lesson 1 Knowledge Check (`KC-M2-L1`)
- ทบทวน 2 ข้อ (`M2-Q001`, `M2-Q005`) จาก [06_assessment_bank.md](06_assessment_bank.md)

---

# LESSON M2-L2: Probability Basics & Sampling (`2.2`)

## M2L2-S01 — Probability Concept & First Pass Yield (FPY)
`<Asset id="AST-M2-005" />`
$$P(A) = \frac{\text{จำนวนเหตุการณ์ที่สนใจ}}{\text{จำนวนเหตุการณ์ทั้งหมดที่เป็นไปได้}}, \quad 0 \le P(A) \le 1$$

- **ตัวอย่างโรงงาน — Series Line First Pass Yield (กฎการคูณของเหตุการณ์อิสระ):**
  - ถ้าไลน์ประกอบมี 3 สถานีอิสระ แต่ละสถานีมีโอกาสผ่านดี 95% (`0.95`)
  - **FPY รวมของทั้งไลน์** = $0.95 \times 0.95 \times 0.95 = 0.8574 \text{ หรือ } \mathbf{85.74\%}$ (ไม่ใช่ 95%!)
  - ยิ่งมีสถานีเยอะ ความน่าจะเป็นของเสียสะสมยิ่งสูง (Rolled Throughput Yield: RTY)

## M2L2-S02 — Conditional Probability & Inspection Risk
`<Asset id="AST-M2-006" />`
- **เหตุการณ์ไม่เป็นอิสระ (Conditional Probability $P(B \mid A)$):** เช่น โอกาสเกิดรอยขีดข่วน *เมื่อใช้เครื่อง MC-B* สูงกว่า *เมื่อใช้ MC-A*
- **เชื่อมสู่ Module 3 & 9:** ความน่าจะเป็นช่วยให้เข้าใจความเสี่ยง 2 ด้านของการตรวจงานและ SPC:
  - **False Alarm ($\alpha$ Risk):** ของดีแต่ระบบฟ้องว่าเสีย / เครื่องปกติแต่ Chart ร้องเตือน
  - **Escape Risk ($\beta$ Risk):** ของเสียหรือเครื่องเพี้ยนแล้ว แต่ตรวจไม่เจอหลุดไปหาลูกค้า

## M2L2-S03 — Why Sampling? (ทำไมไม่ตรวจ 100%)
`<Asset id="AST-M2-007" />`
1. **Destructive Testing:** ทดสอบดึงขาด (Pull Test), ตัดผ่าเช็ครอยเชื่อม — ตรวจหมด 100% ก็ไม่มีของขาย!
2. **Speed & Cost:** ผลิต 10,000 ชิ้น/ชั่วโมง ไม่สามารถวัด Micrometer ทุกชิ้นทัน
3. **Inspection Fatigue:** งานวิจัยพบว่าคนตรวจ 100% ด้วยสายตา มักตรวจจับของเสียได้เพียง **~80–85%** เพราะความล้า

## M2L2-S04 — Population vs Sample (ประชากร vs ตัวอย่าง)
`<Asset id="AST-M2-008" />`

| แนวคิด | Population (ประชากรทั้งหมด — Parameter) | Sample (กลุ่มตัวอย่าง — Statistic) |
|---|---|---|
| **ความหมาย** | ชิ้นงานทั้งหมดที่ผลิต (หรือกำลังจะผลิต) | ชิ้นงานบางส่วนที่สุ่มมาวัดเพื่อเป็นตัวแทน |
| **ขนาด** | $N$ | $n$ |
| **ค่าเฉลี่ย** | $\mu$ (อ่านว่า มิว) | $\bar{x}$ (เอ็กซ์บาร์) |
| **ส่วนเบี่ยงเบนมาตรฐาน** | $\sigma$ (ซิกม่า) | $s$ (เอส) |
| **สัดส่วนของเสีย** | $p$ | $\hat{p}$ (พี-แฮต) |

- **Sampling Error:** ความคลาดเคลื่อนธรรมชาติที่ $\bar{x} \ne \mu$ เพราะสุ่มมาบางส่วน *(ลดลงได้เมื่อเพิ่ม $n$)*
- **Bias (Non-sampling Error):** ความเอนเอียงจากการสุ่มผิดวิธี เช่น หยิบเฉพาะชิ้นบนสุดของกล่อง *(เพิ่ม $n$ ก็ไม่หาย ต้องแก้ที่วิธีสุ่ม!)*

## M2L2-S05 — Interactive FPY & Random Sampling Simulator
`<Interactive id="INT-M2-L2-01" />`
- ปรับ % Yield รายสถานีเพื่อคำนวณ FPY รวม + ทดลองกด "สุ่มตัวอย่าง" `n = 5, 20, 50` จากประชากร `N = 1,000` ชิ้น ดูความคลาดเคลื่อนของ $\bar{x}$ เทียบ $\mu$

## M2L2-S06 — Lesson 2 Knowledge Check (`KC-M2-L2`)
- ทบทวน 2 ข้อ (`M2-Q012`, `M2-Q018`) จาก [06_assessment_bank.md](06_assessment_bank.md)

---

# LESSON M2-L3: Probability Distributions (`2.3`)

## M2L3-S01 — Continuous vs Discrete Distributions Roadmap
`<Asset id="AST-M2-009" />`

| ประเภทข้อมูล | การแจกแจงหลัก (Distribution) | ตัวอย่างหน้างาน | เชื่อมต่อไป Control Chart (Module 6) |
|---|---|---|---|
| **Variable (Continuous)** | **Normal Distribution** | Diameter (mm), Weight (g), Torque (N·m) | $\bar{X}$-$R$, $\bar{X}$-$S$, $I$-$MR$ |
| **Attribute (Pass/Fail Count)** | **Binomial Distribution** | จำนวนชิ้นงานเสีย (`Defective`) จาก $n$ ชิ้น | $P$ Chart, $NP$ Chart |
| **Attribute (Defect Count)** | **Poisson Distribution** | จำนวนรอยขีดข่วน/ตำหนิ (`Defects`) ต่อชิ้น/พื้นที่ | $C$ Chart, $U$ Chart |

## M2L3-S02 — Normal Distribution (การแจกแจงปกติ)
`<Asset id="AST-M2-010" />`
- รูประฆังคว่ำสมมาตร 2 ข้าง, **Mean = Median = Mode**, กำหนดรูปทรงด้วย 2 ค่าคือ **$\mu$ (ตำแหน่ง)** และ **$\sigma$ (ความกว้าง)**
- **พื้นที่ใต้โค้งรวม = `1.0` (100%):** $\pm 1\sigma = 68.27\%$, $\pm 2\sigma = 95.45\%$, $\pm 3\sigma = 99.73\%$, $\pm 6\sigma = 99.9999998\%$ (`0.002 PPM` ฝั่งละ `1 ppb`)

## M2L3-S03 — Z-Score Standardization & Defect Prediction
`<Asset id="AST-M2-011" />` `<Interactive id="INT-M2-L3-01" />`

$$Z = \frac{X - \mu}{\sigma}$$

- **ความหมาย:** บอกว่าค่า $X$ อยู่ห่างจากค่าเฉลี่ยกี่เท่าของ $\sigma$
- **ตัวอย่างคำนวณ (รูเจาะ `USL = 20.10 mm`):** ถ้ากระบวนการมี $\mu = 20.04\text{ mm}, \sigma = 0.03\text{ mm}$
  - $Z_{\text{USL}} = \frac{20.10 - 20.04}{0.03} = \mathbf{+2.00}$
  - เปิดตาราง Z พบพื้นที่เกิน $+2.00 = 0.02275$ → คาดการณ์ของเสียฝั่งบน **$\mathbf{2.28\%}$ (`22,750 PPM`)**!

## M2L3-S04 — Normality Check & Non-Normal Reality (จุดเสริมสำคัญ)
`<Asset id="AST-M2-012" />`
- **อย่าเหมารวมว่าทุกตัวแปรในโรงงานเป็น Normal!** ค่าที่มัก **เบ้ขวา (Skewed)** เช่น Flatness, Concentricity, Roughness ($R_a$), Tool Life (Weibull), Cycle Time (ติดขอบ 0 ด้านซ้าย)
- **วิธีตรวจ Normality ก่อนคำนวณ Z / Cp / Ppk:**
  1. **Histogram + Probability Plot (Q-Q Plot):** จุดเรียงเกาะเส้นตรง = Normal
  2. **Anderson-Darling Test (`p-value`):**
     - ถ้า **`p-value ≥ 0.05`** → ยอมรับว่าเป็น Normal (ใช้สูตร Z / Cpk มาตรฐานได้)
     - ถ้า **`p-value < 0.05`** → ข้อมูลไม่ Normal (ห้ามใช้สูตร Z ตรงๆ ต้องตรวจหา Special Cause ก่อน หรือใช้ Transformation / Non-normal Capability!)

## M2L3-S05 — Binomial Distribution (การแจกแจงทวินาม)
`<Asset id="AST-M2-013" />`

$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad \mu = np, \quad \sigma = \sqrt{np(1-p)}$$

- **เงื่อนไข 4 ข้อ:** (1) ทดลองซ้ำ $n$ ครั้งคงที่ (2) แต่ละชิ้นมีผลแค่ 2 แบบ: Pass หรือ Fail (3) โอกาสเสีย $p$ คงที่ทุกชิ้น (4) ชิ้นงานเป็นอิสระต่อกัน
- **ตัวอย่างโรงงาน:** ไลน์ผลิตมีอัตราของเสีย $p = 0.05$ (5%) สุ่มมาตรวจ $n = 20$ ชิ้น
  - คาดว่าจะเจอของเสียเฉลี่ย $\mu = 20 \times 0.05 = 1\text{ ชิ้น}$, $\sigma = \sqrt{20 \times 0.05 \times 0.95} = 0.975$
  - โอกาสไม่เจอของเสียเลย ($k=0$): $P(X=0) = (0.95)^{20} = \mathbf{35.85\%}$ *(นี่คือเหตุผลว่าทำไมตรวจแค่ 20 ชิ้นแล้วผ่าน ไม่ได้แปลว่าล็อตนั้นไม่มีของเสีย!)*

## M2L3-S06 — Poisson Distribution (การแจกแจงปัวส์ซง)
`<Asset id="AST-M2-014" />`

$$P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}, \quad \mu = \lambda, \quad \sigma = \sqrt{\lambda}$$

- **ใช้เมื่อไร:** นับ **จำนวนเหตุการณ์/จุดตำหนิ (Defects)** ที่เกิดบนพื้นที่ เวลา หรือชิ้นงาน 1 หน่วย โดยรู้ค่าเฉลี่ยต่อหน่วยคือ $\lambda$ (เช่น รอยขีดข่วนเฉลี่ย `0.2 จุด/ชิ้น` หรือรอยเชื่อมเสียบนแผง PCB)
- **ตัวอย่างโรงงาน:** เฉลี่ยพบรอยตำหนิบนชิ้นงาน $\lambda = 0.5\text{ จุด/ชิ้น}$
  - โอกาสได้ชิ้นงานไร้ตำหนิ ($k=0$): $P(X=0) = e^{-0.5} = \mathbf{60.65\%}$
  - โอกาสเจอ 2 จุดขึ้นไป ($k \ge 2$): $1 - [P(0) + P(1)] = 1 - (0.6065 + 0.3033) = \mathbf{9.02\%}$

## M2L3-S07 — Interactive Distribution Explorer
`<Interactive id="INT-M2-L3-02" />`
- สลับกราฟ `Normal` / `Binomial` / `Poisson` และปรับค่า $\mu, \sigma, n, p, \lambda$ แบบ Real-time

## M2L3-S08 — Distribution Selection Matrix (`INT-M2-L3-03`)
`<Interactive id="INT-M2-L3-03" />`
- จับคู่โจทย์โรงงาน 6 สถานการณ์ให้ตรงกับการแจกแจง (Normal vs Binomial vs Poisson vs Non-normal/Skewed)

## M2L3-S09 — Lesson 3 Knowledge Check (`KC-M2-L3`)
- ทบทวน 3 ข้อ (`M2-Q026`, `M2-Q033`, `M2-Q040`)

---

# LESSON M2-L4: Central Limit Theorem & CTQ Workshop (`2.4`)

## M2L4-S01 — Sampling Distribution of the Mean ($\bar{X}$)
`<Asset id="AST-M2-015" />`
- หากเราสุ่มตัวอย่างกลุ่มละ $n = 5$ ชิ้น มาคำนวณ $\bar{X}_1, \bar{X}_2, \bar{X}_3, \dots$ ไปเรื่อยๆ แล้วนำ **ค่าเฉลี่ย $\bar{X}$ เหล่านั้น** มาพล็อตเป็น Histogram ใหม่ กราฟที่ได้เรียกว่า **Sampling Distribution of the Mean**

## M2L4-S02 — Central Limit Theorem (CLT)
`<Asset id="AST-M2-016" />`
- **ทฤษฎีบทขีดจำกัดกลาง (CLT):** ไม่ว่าข้อมูลดิบของประชากรเดิมจะมีรูปร่างใด (Normal, Uniform, หรือแม้แต่ **Skewed**!) เมื่อเราสุ่มตัวอย่างขนาด $n$ ขึ้นมาหาค่าเฉลี่ย $\bar{X}$ การแจกแจงของ $\bar{X}$ จะ **ลู่เข้าสู่ Normal Distribution เสมอ** เมื่อ $n$ ใหญ่พอ (และแม้ $n = 4\text{–}5$ ก็ใกล้เคียง Normal มากแล้วสำหรับข้อมูลโรงงานส่วนใหญ่)

## M2L4-S03 — Standard Error & The Spec Limit Trap
`<Asset id="AST-M2-017" />`

$$\mu_{\bar{x}} = \mu, \qquad \sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$$

- **ความหมาย:** การแจกแจงของค่าเฉลี่ย $\bar{X}$ **แคบกว่า** การแจกแจงของชิ้นงานรายชิ้นถึง $\sqrt{n}$ เท่า! (เช่น $n=4$ แคบลง 2 เท่า, $n=9$ แคบลง 3 เท่า)
- **กับดักอันตรายที่สุดของมือใหม่ SPC:** **ห้ามนำเส้น Specification Limit (`USL / LSL`) ของชิ้นงานรายชิ้น มาวาดเปรียบเทียบกับกราฟค่าเฉลี่ย $\bar{X}$ เด็ดขาด!** เพราะ $\bar{X}$ แคบกว่ามาก ถึงจุด $\bar{X}$ อยู่ใน Spec ก็อาจมีชิ้นงานจริงหลุด Spec ไปแล้ว!

## M2L4-S04 — Why CLT Is the Backbone of SPC
`<Asset id="AST-M2-018" />`
1. **เหตุผลที่ $\bar{X}$ Chart ใช้กฎ $\pm 3\sigma_{\bar{x}}$ (Normal 99.73%) ได้:** เพราะ CLT รับประกันว่าค่าเฉลี่ย $\bar{X}$ มีการแจกแจงใกล้เคียง Normal แม้ชิ้นงานเดี่ยวจะเบ้เล็กน้อย
2. **เหตุผลที่โรงงานนิยมเก็บ Subgroup $n = 4$ หรือ $n = 5$:**
   - $n=5$ ให้ $\sigma_{\bar{x}} = \sigma / \sqrt{5} \approx 0.447\sigma$ ทำให้จับความเคลื่อนตัวของ Mean (`Mean Shift`) ได้ไวกว่ากราฟรายชิ้น
   - คำนวณหาร 5 ง่ายหน้างาน และค่า $n \ge 4$ เพียงพอให้ CLT ทำงานได้มีประสิทธิภาพ

## M2L4-S05 — Interactive Live CLT Simulator
`<Interactive id="INT-M2-L4-01" />`
- เลือกรูปทรงประชากร (`Normal`, `Right-Skewed`, `Uniform`, `Bimodal`) แล้วปรับ Subgroup Size `n = 1, 2, 5, 15, 30` ดู Sampling Distribution หดแคบลงด้วยอัตรา $1/\sqrt{n}$ และแปลงร่างเป็นระฆังคว่ำทันที!

## M2L4-S06 — Workshop: วิเคราะห์ข้อมูล CTQ ชิ้นงานจริง
`<Interactive id="INT-M2-L4-02" />`
- **ไฟล์ข้อมูล:** [data/workshop_m2_ctq_parts.csv](data/workshop_m2_ctq_parts.csv) — ขนาดรูเจาะ `Bore_Diameter_mm` (`Target = 20.00 ± 0.10 mm`, `LSL = 19.90`, `USL = 20.10`) จำนวน `50` ชิ้น (`10 Subgroups × 5 ชิ้น`)
- **ภารกิจ 4 ขั้นตอน:**
  1. คำนวณ Mean, SD, Z-score และ % Out of Spec ของข้อมูลทั้งหมด (`n=50`)
  2. พล็อต Subgroup Means (`SG-01` .. `SG-10`) เพื่อตรวจหา **Special Cause**
  3. เปรียบเทียบ Baseline ที่เสถียร (`n=45`, ตัด `SG-09` ออก) vs ภาพรวมทั้งหมด (`n=50`) และตรวจดูการลดลงของความกว้างตาม CLT ($\sigma_{\bar{x}} = s / \sqrt{5}$)
  4. คำนวณอัตราของเสีย Binomial ($\hat{p}$) และค่าเฉลี่ยจุดตำหนิ Poisson ($\hat{\lambda}$) จากคอลัมน์ Attribute

## M2L4-S07 — Workshop Solution & Engineering Interpretation
`<Asset id="AST-M2-019" />`
- **ภาพรวม (`n=50`):** $\bar{x} = 20.0102$, $s = 0.0356\text{ mm}$, $Z_{\text{USL}} = +2.52$, คาดการณ์ OOS = `0.68%`
- **พบ Special Cause ชัดเจนที่ `SG-09` (`16:00`):** ค่าเฉลี่ยพุ่งขึ้นเป็น **`20.0940 mm`** (ห่าง Target ถึง `+0.094 mm` หรือ ~`9.5` เท่าของ Standard Error!) และมีชิ้นงานทะลุ `USL 20.10` (`20.11, 20.12 mm`)
- **Baseline เสถียร (`SG 1–8, 10`, `n=45`):** $\bar{x} = 20.0009$, $s = 0.0220\text{ mm}$, $Z_{\text{USL}} = +4.50$, $\sigma_{\bar{x}} = 0.0220/\sqrt{5} = 0.0099\text{ mm}$ → หากคุมไม่มี Special Cause กระบวนการนี้แข็งแรงมาก!
- ดูเฉลยละเอียดใน [07_workshop_guide.md](07_workshop_guide.md)

## M2L4-S08 — Module 2 Final Assessment (`EXAM-M2`)
- สอบประมวลผลสุ่ม **20 ข้อ** จากคลัง [06_assessment_bank.md](06_assessment_bank.md) (`M2-Q001`–`M2-Q060`) | เกณฑ์ผ่าน **80% (`16/20`)**
