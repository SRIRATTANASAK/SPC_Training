# Module 4 Full Lesson Content (Web & MDX Ready — 27 Screens)

**Module 4: Process Variation and Capability (จุดเชื่อมก่อนเข้า SPC — VOP/VOC, Cp/Cpk/Pp/Ppk, AIAG/VDA & JEDEC Standard)**  
เอกสารนี้คือ **เนื้อหาบนหน้าจอฉบับสมบูรณ์ (On-Screen Teaching Copy)** สำหรับนักพัฒนาเว็บนำไปสร้างหน้าเว็บ/สไลด์ (MDX/React) คู่กับเสียงบรรยายใน [02_voiceover_th_en.md](02_voiceover_th_en.md) และตัวจำลองใน [04_interactive_logic.md](04_interactive_logic.md)

---

# LESSON M4-L1: Understanding Process Variation — VOP vs VOC (`4.1`)

## M4L1-S01 — Welcome & Capability Bridge ("Stable ≠ Capable!")
`<Asset id="AST-M4-001" />`
- **จุดเชื่อมก่อนเข้า SPC:** กระบวนการที่ "นิ่ง/เสถียร (Stable)" ไม่ได้แปลว่า "ได้ตามสเปกลูกค้า (Capable)" เสมอไป!
- **วัตถุประสงค์การเรียนรู้ประจำ Module 4:**
  1. แยกแยะ **Voice of Process (VOP)** ออกจาก **Voice of Customer (VOC)**
  2. เข้าใจ **USL, LSL, Target** ทั้งแบบ 2 ด้าน (Bilateral) และ 1 ด้าน (Unilateral)
  3. คำนวณและตีความ **$C_p, C_{pk}, P_p, P_{pk}$** พร้อมวินิจฉัยความต่างของ $\hat{\sigma}_{\text{within}}$ กับ $s_{\text{overall}}$
  4. ประยุกต์ใช้เกณฑ์ **AIAG/VDA** และ **JEDEC Standard** ในการตรวจรับและ Release กระบวนการ

## M4L1-S02 — Voice of Process (VOP)
`<Asset id="AST-M4-002" />`
- **นิยาม:** เสียงจริงของกระบวนการผลิต — สิ่งที่เครื่องจักร **ทำได้จริง** ในหน้างาน
- **ตัวแทนทางคณิตศาสตร์:** จุดศูนย์กลาง ($\mu$) และความกว้างธรรมชาติ ($\pm 3\sigma$ หรือ **`6σ`** ที่ครอบคลุมผลผลิต `99.73%`)
- **ที่มา:** กำหนดโดย 5M1E (เครื่องจักร, Tooling, วัตถุดิบ, พนักงาน, วิธีทำ, ระบบวัด, สภาพแวดล้อม)

## M4L1-S03 — Voice of Customer (VOC)
`<Asset id="AST-M4-003" />`
- **นิยาม:** เสียงความต้องการของลูกค้า — ขอบเขตที่แบบวิศวกรรม (Drawing) และลูกค้า **ยอมรับได้**
- **ตัวแทน:** **Target (Nominal)**, **USL** (ขอบบน), และ **LSL** (ขอบล่าง) → ความกว้าง Tolerance = `USL − LSL`
- **กฎเหล็ก:** VOP คือ "พฤติกรรมของเครื่อง" ส่วน VOC คือ "ความต้องการของลูกค้า" ทั้งสองอย่างแยกขาดจากกัน (ห้ามเอา Spec ลูกค้ามาตั้งเป็น Control Limit!)

## M4L1-S04 — VOP vs VOC 4-Quadrant Matrix
`<Asset id="AST-M4-004" />`

| สถานะการผลิต | เสถียร (Stable — Common Cause เท่านั้น) | ไม่เสถียร (Unstable — มี Special Cause) |
|---|---|---|
| **Capable (VOP แคบกว่า VOC)** | **1. Ideal State:** ส่งของดีต่อเนื่อง พร้อมลดการตรวจ | **3. Brink of Chaos:** วันนี้อาจฟลุ๊ครอด แต่พรุ่งนี้หลุด Spec ได้ทุกเมื่อ |
| **Incapable (VOP กว้างกว่า/เบี้ยว)** | **2. Predictable Scrap:** ผลิตของเสียสม่ำเสมอ! ต้องปรับปรุงระบบ/ลด $\sigma$ | **4. Firefighting:** แย่ที่สุด! ทั้งไม่นิ่งและตก Spec — ต้องดับไฟหา Special Cause ทันที |

## M4L1-S05 — Lesson 1 Knowledge Check (`KC-M4-L1`)
- ทบทวน 2 ข้อ (`M4-Q001`, `M4-Q006`) จาก [06_assessment_bank.md](06_assessment_bank.md)

---

# LESSON M4-L2: Specification vs Process (`4.2`)

## M4L2-S01 — USL, LSL & Target Anatomy
`<Asset id="AST-M4-005" />`
- **Target (Nominal):** ค่าเป้าหมายในอุดมคติที่ชิ้นงานทำงานได้ดีที่สุด (เช่น `10.00 mm`)
- **LSL (Lower Specification Limit):** ค่าต่ำสุดที่ลูกค้ายอมรับ (เช่น `9.85 mm`)
- **USL (Upper Specification Limit):** ค่าสูงสุดที่ลูกค้ายอมรับ (เช่น `10.15 mm`)
- **Taguchi Loss Function Insight:** แม้ชิ้นงานที่ `10.14 mm` ยังไม่ตก Spec แต่เริ่มสร้างความสูญเสียเชิงคุณภาพมากกว่าชิ้นงานที่ `10.00 mm` แล้ว — เป้าหมายสมัยใหม่จึงเน้น **On-Target with Minimum Variance** ไม่ใช่แค่ "อยู่ภายใน Spec ก็พอ"

## M4L2-S02 — Bilateral (2-Sided) vs Unilateral (1-Sided) Specifications
`<Asset id="AST-M4-006" />`
- **Two-Sided Spec (มีทั้ง LSL และ USL):** เช่น ความยาวพิน `10.00 ± 0.15 mm`, เส้นผ่านศูนย์กลางเพลา → คำนวณได้ทั้ง $C_p$ และ $C_{pk}$
- **One-Sided Spec (มีขอบเดียว):**
  - *มีเฉพาะ `LSL` (ยิ่งมากยิ่งดี):* แรงดึง Wire Bond Pull Force ($\ge 5.0\text{ gf}$), แรงเฉือน Die Shear → มีเฉพาะ **$C_{pl}$ (`Cpk = Cpl`)** ไม่มี $C_p$!
  - *มีเฉพาะ `USL` (ยิ่งน้อยยิ่งดี):* ความเรียบผิว Flatness ($\le 0.05\text{ mm}$), ค่ากระแสรั่วไหล Leakage Current → มีเฉพาะ **$C_{pu}$ (`Cpk = Cpu`)** ไม่มี $C_p$!

## M4L2-S03 — Spec Limits vs Natural Spread vs Control Limits
`<Asset id="AST-M4-007" />`
- **Specification Limits (`USL/LSL`):** เส้นของลูกค้า (VOC) ใช้ตัดสินชิ้นงานรายชิ้น (Pass / Fail)
- **Natural Process Limits (`μ ± 3σ`):** เส้นของกระบวนการรายชิ้น (VOP)
- **Control Limits (`UCL/LCL`):** เส้นสถิติของ **Subgroup Mean ($\bar{X}$)** บน Control Chart ซึ่งแคบกว่าชิ้นงานเดี่ยว $\sqrt{n}$ เท่า (เชื่อมต่อสู่ Module 5!)

## M4L2-S04 — Interactive VOP-Inside-VOC Explorer
`<Interactive id="INT-M4-L2-01" />`
- ปรับตำแหน่ง Mean ($\mu$) และความกว้าง SD ($\sigma$) ของเครื่องจักรภายในกรอบ `LSL = 9.85, Target = 10.00, USL = 10.15` เพื่อสังเกต `% Tolerance Used = (6σ / (USL - LSL)) × 100%` และพื้นที่หลุด Spec

## M4L2-S05 — Lesson 2 Knowledge Check (`KC-M4-L2`)
- ทบทวน 2 ข้อ (`M4-Q013`, `M4-Q018`)

---

# LESSON M4-L3: Process Capability Indices — $C_p, C_{pk}, P_p, P_{pk}$ (`4.3`)

## M4L3-S01 — $C_p$ (Potential Capability)
`<Asset id="AST-M4-008" />`

$$C_p = \frac{\text{VOC}}{\text{VOP}} = \frac{\text{USL} - \text{LSL}}{6\hat{\sigma}_{\text{within}}}$$

- **ความหมาย:** วัด **"ศักยภาพสูงสุดที่เป็นไปได้"** โดยเทียบความกว้าง Spec กับความกว้างธรรมชาติ `6σ`
- **คำเตือนอันตราย:** **$C_p$ ไม่ดูตำแหน่ง Mean!** ถ้า $C_p = 2.00$ แต่เครื่องจักรตั้ง Offset ผิดไปจ่ออยู่บนเส้น `USL` ชิ้นงานจะเสียถึง **50%** ทั้งที่ $C_p$ ยังโชว์ `2.00` สวยหรู!

## M4L3-S02 — $C_{pk}$ (Actual Capability)
`<Asset id="AST-M4-009" />`

$$C_{pu} = \frac{\text{USL} - \bar{\bar{x}}}{3\hat{\sigma}_{\text{within}}}, \quad C_{pl} = \frac{\bar{\bar{x}} - \text{LSL}}{3\hat{\sigma}_{\text{within}}}, \quad C_{pk} = \min(C_{pu}, C_{pl})$$

- **ความหมาย:** วัดความสามารถที่ **แท้จริง** โดยคิดระยะห่างจาก Mean ไปยังขอบ Spec ฝั่งที่ **ใกล้ที่สุด**
- **กฎทอง:**
  - $C_{pk} \le C_p$ เสมอ ($C_{pk} = C_p$ เฉพาะเมื่อ Mean อยู่ตรงกลาง `(USL+LSL)/2` เป๊ะ)
  - ถ้า Mean เลยออกนอก Spec → $C_{pk}$ จะ **ติดลบ**!
  - Spec ด้านเดียว ใช้ $C_{pk} = C_{pu}$ หรือ $C_{pl}$ ตามด้านที่มีขอบ

## M4L3-S03 — $\hat{\sigma}_{\text{within}}$ vs $s_{\text{overall}}$ (หัวใจที่ Engineer มักงง!)
`<Asset id="AST-M4-010" />`

$$\hat{\sigma}_{\text{within}} = \frac{\bar{R}}{d_2} \;\; \text{หรือ} \;\; \frac{\bar{s}}{c_4}, \qquad s_{\text{overall}} = \sqrt{\frac{\sum_{i=1}^{N} (x_i - \bar{\bar{x}})^2}{N - 1}}$$

- **$\hat{\sigma}_{\text{within}}$ (Short-term / Potential Spread):** คำนวณจาก **ความแปรปรวนภายใน Subgroup** (`Rbar / d2`, ที่ `n=5` ใช้ `d2 = 2.326`) จึงไม่รวมการเลื่อนไหลข้ามชั่วโมงเข้าไว้ด้วย
- **$s_{\text{overall}}$ (Long-term / Overall Spread):** คำนวณจากข้อมูลทั้งหมดรวมกัน **รวมทั้งการไหลและ Special Cause ข้ามชั่วโมง/ข้ามกะ** ไว้ด้วย

## M4L3-S04 — $P_p$ & $P_{pk}$ (Process Performance) และวิธีวินิจฉัยส่วนต่าง
`<Asset id="AST-M4-011" />`

$$P_p = \frac{\text{USL} - \text{LSL}}{6 s_{\text{overall}}}, \qquad P_{pk} = \min\left(\frac{\text{USL} - \bar{\bar{x}}}{3 s_{\text{overall}}}, \frac{\bar{\bar{x}} - \text{LSL}}{3 s_{\text{overall}}}\right)$$

| เปรียบเทียบ $C_{pk}$ vs $P_{pk}$ | ความหมายเชิงวิศวกรรม | แนวทางแก้ไข |
|---|---|---|
| **$C_{pk} \approx P_{pk}$** (ต่างกัน $< 10\%$) | กระบวนการ **เสถียร (Stable)** ไม่มี Shift/Drift ระหว่าง Subgroup | หากค่าต่ำให้ลด Common Cause หรือตั้ง Center ใหม่ |
| **$C_{pk} \gg P_{pk}$** (เช่น `1.64` vs `1.15`) | กระบวนการ **ไม่เสถียร!** เครื่องดีภายในชั่วโมง แต่ **ไหล/กระโดดข้ามชั่วโมงหรือข้ามกะ** | จับ Special Cause ระหว่าง Subgroup ให้เจอ (เช่น คุมอุณหภูมิ/Tool Wear)! |
| **$C_p \gg C_{pk}$** | ความกว้างเครื่องแคบดีแล้ว แต่ **ตั้ง Center เบี้ยว** ไม่ตรง Target | ปรับ Centering (Offset) เข้าหา Target |

## M4L3-S05 — Capability to PPM & Sigma Level Conversion
`<Asset id="AST-M4-012" />`

| Capability ($C_{pk}$ Centered) | ความกว้างเทียบ Spec | % ชิ้นงานใน Spec | คาดการณ์ของเสีย (PPM — Parts Per Million) |
|---|---|---|---|
| `0.67` | `±2σ` | `95.45%` | `45,500 PPM` |
| `1.00` | `±3σ` | `99.73%` | `2,700 PPM` |
| **`1.33`** | **`±4σ`** | **`99.9937%`** | **`63 PPM`** *(เกณฑ์ขั้นต่ำอุตสาหกรรม)* |
| **`1.67`** | **`±5σ`** | **`99.99994%`** | **`0.57 PPM`** *(เกณฑ์ PPAP / Critical)* |
| `2.00` | `±6σ` | `99.9999998%` | `0.002 PPM` *(หรือ `3.4 PPM` เมื่อรวม Shift `1.5σ`)* |

## M4L3-S06 — Worked Step-by-Step Calculation (`n = 5, d2 = 2.326`)
`<Asset id="AST-M4-013" />`
- **โจทย์ตัวอย่าง (จากชุดข้อมูล Workshop):** Spec ความยาวพิน `10.00 ± 0.15 mm` (`LSL = 9.85, USL = 10.15`), เก็บ `20 Subgroups × 5 ชิ้น`:
  - $\bar{\bar{x}} = 10.0182\text{ mm}$, $\bar{R} = 0.0623\text{ mm}$, $s_{\text{overall}} = 0.0383\text{ mm}$
  1. $\hat{\sigma}_{\text{within}} = 0.0623 / 2.326 = 0.0268\text{ mm}$
  2. $C_p = (10.15 - 9.85) / (6 \times 0.0268) = \mathbf{1.87}$
  3. $C_{pu} = (10.15 - 10.0182) / (3 \times 0.0268) = \mathbf{1.64}$, $C_{pl} = (10.0182 - 9.85) / (3 \times 0.0268) = 2.09 \implies C_{pk} = \mathbf{1.64}$
  4. $P_p = 0.30 / (6 \times 0.0383) = \mathbf{1.31}$, $P_{pk} = (10.15 - 10.0182) / (3 \times 0.0383) = \mathbf{1.15}$

## M4L3-S07 — Interactive Cp vs Cpk Live Playground
`<Interactive id="INT-M4-L3-01" />`
- เลื่อน Slider ปรับ `Mean` และ `SD` ในกรอบ `LSL = 9.85 .. USL = 10.15` ดู `Cp, Cpk, Cpu, Cpl, PPM, Yield %` อัปเดตแบบ Real-time

## M4L3-S08 — Interactive Cp/Cpk/Pp/Ppk Diagnostic Match
`<Interactive id="INT-M4-L3-02" />`
- วินิจฉัย 4 สถานการณ์จริงของโรงงานจากคู่ค่า `Cp, Cpk, Pp, Ppk`

## M4L3-S09 — Lesson 3 Knowledge Check (`KC-M4-L3`)
- ทบทวน 3 ข้อ (`M4-Q025`, `M4-Q033`, `M4-Q040`)

---

# LESSON M4-L4: AIAG/VDA & JEDEC Requirements + Capability Workshop (`4.4`)

## M4L4-S01 — Prerequisite Gate Before Claiming Capability
`<Asset id="AST-M4-014" />`
- **กฎเหล็ก 3 ด่านก่อนรายงาน $C_p/C_{pk}$:**
  1. **MSA Ready:** ระบบวัดผ่าน Gage R&R (`%GRR < 10%` หรือตามเกณฑ์ AIAG) — มิฉะนั้น Measurement Error จะกด $C_{pk}$ ต่ำปลอม!
  2. **Statistical Stability:** ตรวจ Control Chart ก่อน! ถ้ายัง **Unstable** ห้ามรายงาน $C_{pk}$ ให้รายงานเป็น Preliminary $P_{pk}$ และรีบกำจัด Special Cause
  3. **Normality Check:** ถ้าข้อมูลเบ้ (`p-value < 0.05`) ห้ามใช้สูตร $\bar{x} \pm 3\sigma$ ตรงๆ (ต้องใช้ Box-Cox/Johnson Transformation หรือ Percentile Non-normal Capability)

## M4L4-S02 — AIAG / VDA & IATF 16949 Requirements (Automotive)
`<Asset id="AST-M4-015" />`

| ช่วงการประเมิน (AIAG SPC / PPAP / VDA) | ดัชนีที่ใช้ | เกณฑ์มาตรฐาน | การดำเนินการเมื่อไม่ผ่าน |
|---|---|---|---|
| **Initial Process Study / PPAP Release** (Short-term 25+ Subgroups / ≥ 100 ชิ้น) | **$P_{pk}$** | **≥ 1.67** (ผ่าน)<br>`1.33 – 1.67` (มีเงื่อนไข)<br>`< 1.33` (ไม่ผ่าน) | ถ้า `1.33–1.67` หรือ `< 1.33`: ต้องทำ Containment (เช่น 100% Sorting / Poka-Yoke) + Corrective Action Plan ส่งลูกค้าอนุมัติ |
| **Ongoing Production Monitoring** (กระบวนการเดินเสถียรแล้ว) | **$C_{pk}$** | **≥ 1.33** (ทั่วไป)<br>**≥ 1.67** (CC / SC สำคัญ) | ปรับปรุง Centering / ลดความแปรปรวน + คงความถี่ SPC ใน Control Plan |

## M4L4-S03 — JEDEC Standard Requirements (Semiconductor & Electronics)
`<Asset id="AST-M4-016" />`
- **บริบทอุตสาหกรรมเซมิคอนดักเตอร์ & อิเล็กทรอนิกส์ (JEDEC JESD557 SPC & Qualification):**
  - ใช้คุม Critical Parameters ใน Wafer Fab, Wire Bonding (Pull/Shear), Die Attach, Solder Ball Shear, Mold Thickness, และ Electrical Test
  - **เกณฑ์ Capability & DPPM:**
    - Ongoing Production: **$C_{pk} \ge 1.33$** (`≤ 63 DPPM`)
    - New Process Qualification / Automotive Grade (AEC-Q / Zero-Defect mindset): **$C_{pk} / P_{pk} \ge 1.67$** (หลายโรงงาน Automotive Semiconductor ตั้งเป้า **$C_{pk} \ge 2.00$** สำหรับพารามิเตอร์วิกฤต)
  - **จุดเน้นเฉพาะของ JEDEC:**
    1. **One-Sided Specs เยอะมาก:** เช่น Wire Bond Pull Strength (`LSL only → Cpl`), Leakage Current (`USL only → Cpu`)
    2. **Non-Normal Distribution Awareness:** พารามิเตอร์ไฟฟ้า/ความต้านทาน/Leakage มักเบ้ขวา ต้องตรวจ Normality หรือใช้ Log-transformation ก่อนคำนวณ $C_{pk}$ เสมอ
    3. **OCAP & Automated FDC/SPC:** ผูกจุด Out-of-Control กับ Out-of-Control Action Plan (OCAP) และ Lot Hold อัตโนมัติทันที

## M4L4-S04 — AIAG/VDA vs JEDEC Decision Flow
`<Asset id="AST-M4-017" />`
- เปรียบเทียบ Traffic Light Gate: **`>= 1.67` (Release / Green)** | **`1.33 – 1.66` (Conditional / Amber)** | **`< 1.33` (Reject & Contain / Red)**

## M4L4-S05 — Interactive Release Gate Decision Simulator
`<Interactive id="INT-M4-L4-01" />`
- สวมบทบาท Supplier Quality / Process Release Engineer ตัดสินผล Process Study 5 เคสจริงตามเกณฑ์ AIAG/VDA และ JEDEC

## M4L4-S06 — Workshop: คำนวณ $C_p / C_{pk} / P_p / P_{pk}$ จากข้อมูลจริง
`<Interactive id="INT-M4-L4-02" />`
- **ไฟล์ข้อมูล:** [data/workshop_m4_capability_subgroups.csv](data/workshop_m4_capability_subgroups.csv) (`100` ชิ้น, `20 Subgroups × 5 ชิ้น`, Spec `10.00 ± 0.15 mm`)
- **ภารกิจ:** คำนวณ $\bar{\bar{x}}, \bar{R}, \hat{\sigma}_{\text{within}}, s_{\text{overall}}, C_p, C_{pk}, P_p, P_{pk}$ และตัดสินตามเกณฑ์ PPAP/JEDEC (`>= 1.67`) พร้อมเปรียบเทียบช่วง Day/Early (`SG-01..14`) vs ช่วง Night Drift (`SG-15..20`)

## M4L4-S07 — Workshop Solution & Diagnosis
`<Asset id="AST-M4-018" />`
- **รวม 20 Subgroups:** `Cp = 1.87`, `Cpk = 1.64` vs `Pp = 1.31`, **`Ppk = 1.15` (FAIL!)**
- **วินิจฉัย:** เครื่องจักรมีความสามารถภายในกลุ่มดีมาก (`Cp = 1.87`) แต่ช่วง `SG-15..20` ค่าเฉลี่ยไหลขึ้น `+0.060 mm` ทำให้ `s_overall` พุ่งจาก `0.0268` เป็น `0.0383` จน `Ppk` ร่วงลงมาที่ `1.15`!
- **เมื่อแก้ Drift (ดูเฉพาะช่วงเสถียร `SG-01..14`):** `Cp = 1.83`, `Cpk = 1.83`, `Ppk = 1.93` → **PASS `>= 1.67` อย่างสวยงาม!** ดูเฉลยละเอียดใน [07_workshop_guide.md](07_workshop_guide.md)

## M4L4-S08 — Module 4 Final Assessment (`EXAM-M4`)
- สอบประมวลผลสุ่ม **20 ข้อ** จากคลัง [06_assessment_bank.md](06_assessment_bank.md) (`M4-Q001`–`M4-Q060`) | เกณฑ์ผ่าน **80% (`16/20`)**
