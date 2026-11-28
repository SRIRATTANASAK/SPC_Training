# Module 6 Full Lesson Content (Web & MDX Ready — 28 Screens)

**Module 6: Control Chart Selection (เลือก Control Chart ให้ถูกต้อง — Variable `I-MR, X̄-R, X̄-S` & Attribute `p, np, c, u` + 10 Real Factory Scenarios)**  
เอกสารนี้คือ **เนื้อหาบนหน้าจอฉบับสมบูรณ์ (On-Screen Teaching Copy)** สำหรับนักพัฒนาเว็บนำไปสร้างหน้าเว็บ/สไลด์ (MDX/React) คู่กับเสียงบรรยายใน [02_voiceover_th_en.md](02_voiceover_th_en.md) และตัวจำลองใน [04_interactive_logic.md](04_interactive_logic.md)

---

# LESSON M6-L1: Variable Data Control Charts (`6.1`)

## M6L1-S01 — Welcome & Why Choosing the Wrong Chart Blinds Your Line
`<Asset id="AST-M6-001" />`
- **ต่อยอดจาก Module 5:** คุณเข้าใจกลไก `UCL/CL/LCL`, Western Electric Rules และวิธีเลือก Rules (`Mandatory` vs `Optional`) แล้ว — แต่หาก **หยิบ Control Chart ผิดชนิด** ตั้งแต่ต้น (เช่น เอา `I-MR` ไปคุมกลุ่ม 15 ชิ้น หรือใช้ `np` ทั้งที่ขนาด Lot เปลี่ยนทุกวัน) เส้นควบคุมจะ **เพี้ยนจนเกิด False Alarm ล้นสาย หรือตาบอดไม่เห็นของเสีย!**
- **วัตถุประสงค์การเรียนรู้ประจำ Module 6:**
  1. เลือกและคำนวณ **Variable Control Charts** ได้ตรงงาน (`I-MR`, $\bar{X}$-$R$, $\bar{X}$-$S$) พร้อมเข้าใจตารางค่าคงที่ $E_2, A_2, D_3, D_4, d_2, A_3, B_3, B_4, c_4$
  2. แยกแยะ **Defective (ชิ้นเสีย)** ออกจาก **Defect (จุดบกพร่อง)** เพื่อเลือก **Attribute Charts** (`p, np, c, u`) ได้แม่นยำ 100%
  3. ใช้ **Control Chart Decision Tree & Matrix** ตัดสินใจได้ใน 3 คำถาม
  4. ฝึกวิเคราะห์ **10 สถานการณ์โรงงานจริง** + คำนวณจริงบนข้อมูล `p` และ `u` Chart พร้อมกฎ `LCL < 0`

## M6L1-S02 — Variable Data Foundation & Subgroup Size Branches
`<Asset id="AST-M6-002" />`
- **Variable Data (ข้อมูลต่อเนื่องที่วัดค่าได้):** เช่น ความยาว (`mm`), แรงบิด (`N·m`), อุณหภูมิ (`°C`), ความต้านทาน (`Ω`), ความหยาบผิว ($R_a$) — ให้ข้อมูลเชิงปริมาณละเอียดกว่า Attribute มาก ใช้ Sample Size น้อยก็เห็น Drift ชัด
- **คำถามเดียวสำหรับสาย Variable Chart — "Rational Subgroup Size (`n`) เท่ากับเท่าไร?"**
  - **`n = 1`** (วัดทีละ 1 ค่าต่อช่วงเวลา/Batch) → ใช้ **`I-MR` Chart**
  - **`n = 2–10`** (แนะนำหน้างานจริง `n = 3–5`) → ใช้ **$\bar{X}$-$R$ Chart**
  - **`n > 10`** (กลุ่มตัวอย่างขนาดใหญ่ / Automated Inspection) → ใช้ **$\bar{X}$-$S$ Chart**

## M6L1-S03 — `I-MR` Chart (`Individuals and Moving Range`, `n = 1`)
`<Asset id="AST-M6-003" />`
- **ใช้เมื่อไร (`n = 1`):**
  1. กระบวนการเป็น Batch หรือเนื้อเดียวกันทั้งหมด วัดหลายจุดก็ซ้ำเดิม (เช่น **อุณหภูมิอ่างเคมี**, ค่า `pH` ถังผสม, ความชื้นห้องคลีนรูม)
  2. **Destructive Test** ที่ราคาแพงหรือพังสินค้า (เช่น ดึงทดสอบแรงเชื่อม 1 ชิ้นต่อกะ)
  3. Cycle Time ช้า หรือ Automated Machine ตรวจวัด 100% ชิ้นต่อชิ้นต่อเนื่อง
- **สูตรคำนวณมาตรฐาน (`n = 2` Moving Range จาก $MR_i = |X_i - X_{i-1}|$):**
  $$\text{CL}_I = \bar{X}, \quad \text{UCL}_I / \text{LCL}_I = \bar{X} \pm E_2\overline{MR} \quad (E_2 = 2.660 \text{ เมื่อเทียบระยะ 2 จุดติดกัน})$$
  $$\text{CL}_{MR} = \overline{MR}, \quad \text{UCL}_{MR} = D_4\overline{MR} = 3.267\,\overline{MR}, \quad \text{LCL}_{MR} = 0$$
- **ข้อควรระวังหน้างาน:** `I` Chart **ไวต่อการเบ้ (Non-Normality) มากกว่า $\bar{X}$ Chart** (เพราะไม่ได้ผ่าน Central Limit Theorem $\bar{X}$!) และต้องดู $MR$ Chart (ความต่อเนื่องของ 2 จุดติดกัน) ก่อนดู $I$ Chart เสมอ

## M6L1-S04 — $\bar{X}$-$R$ Chart (`n = 2–10`, Recommended `n = 3–5`)
`<Asset id="AST-M6-004" />`
- **พระเอกตลอดกาลในโรงงาน (`n = 2–10`):**
  - ใช้ **Sample Range ($R = X_{\max} - X_{\min}$)** ประเมินความแปรปรวนภายในกลุ่ม คำนวณง่ายหน้าเครื่องจักรแม้ไม่ต้องพึ่งคอมพิวเตอร์
  - แม่นยำเทียบเท่า SD เมื่อ `n <= 10` (AIAG แนะนำ **`n = 4` หรือ `5`** เพื่อใช้ประโยชน์จาก CLT และคง Within-group Homogeneity)
- **ตัวอย่างงานจริง:** เส้นผ่านศูนย์กลางเพลา CNC `5` ชิ้น/ชั่วโมง, น้ำหนักชิ้นงานพลาสติกจาก Cavity เดียวกัน `4` ชิ้น/รอบ, แรงกดปั๊มโลหะ Stamping `5` ชิ้น/ชม.
- **สูตร (ทบทวนจาก M5):** $\text{UCL}_{\bar{X}}/\text{LCL}_{\bar{X}} = \bar{\bar{x}} \pm A_2\bar{R}$, $\text{UCL}_R = D_4\bar{R}$, $\text{LCL}_R = D_3\bar{R}$ (`D3 = 0` เมื่อ `n <= 6`)

## M6L1-S05 — $\bar{X}$-$S$ Chart (`n > 10`, Standard Deviation Chart)
`<Asset id="AST-M6-005" />`
- **ทำไมเมื่อ `n > 10` จึงห้ามใช้ $R$ Chart แต่ต้องเปลี่ยนเป็น $\bar{X}$-$S$ Chart?**
  - ค่า **Range ($R$)** ใช้เพียงข้อมูล **ค่ามากสุดและน้อยสุด (`2` ตัว)** โดย **ทิ้งข้อมูลตัวเลขตรงกลางทั้งหมด!**
  - เมื่อ `n = 15` หรือ `n = 25` ค่า `R` จะสูญเสีย **Statistical Efficiency** อย่างรุนแรงและไวต่อ Outlier แค่ตัวเดียว!
- **สูตรมาตรฐานของ $\bar{X}$-$S$ Chart (ใช้ Sample SD: $S_i$):**
  $$\text{CL}_{\bar{X}} = \bar{\bar{x}}, \quad \text{UCL}_{\bar{X}}/\text{LCL}_{\bar{X}} = \bar{\bar{x}} \pm A_3\bar{S}$$
  $$\text{CL}_S = \bar{S}, \quad \text{UCL}_S = B_4\bar{S}, \quad \text{LCL}_S = B_3\bar{S} \quad (\text{และ } \hat{\sigma} = \bar{S}/c_4)$$
- **ข้อสังเกต:** เมื่อ `n >= 6` ค่า **`B3 > 0`** แล้ว! (เช่น `n = 15`: $A_3 = 0.789, B_3 = 0.428, B_4 = 1.572, c_4 = 0.9823$) และใน Variation Chart เมื่อ $B_3 = 0$ (ที่ $n \le 5$) `LCL_S = 0` ก็ไม่จำเป็นต้องตั้งกฎเช็ก `< LCL_S` เช่นกัน!

## M6L1-S06 — Variable Chart Constants Reference (`n = 2..15`)
`<Asset id="AST-M6-006" />`

| $n$ | ใช้กราฟ | $A_2$ ($\bar{X}$-$R$) | $D_3$ | $D_4$ | $d_2$ | $A_3$ ($\bar{X}$-$S$) | $B_3$ | $B_4$ | $c_4$ |
|---|---|---|---|---|---|---|---|---|---|
| `2` *(MR)* | `I-MR` / $\bar{X}$-$R$ | `1.880` *($E_2=2.660$)* | `0` | `3.267` | `1.128` | `2.659` | `0` | `3.267` | `0.7979` |
| `4` | $\bar{X}$-$R$ | `0.729` | `0` | `2.282` | `2.059` | `1.628` | `0` | `2.266` | `0.9213` |
| **`5`** | **$\bar{X}$-$R$** | **`0.577`** | **`0`** | **`2.114`** | **`2.326`** | `1.427` | `0` | `2.089` | `0.9400` |
| `10` | $\bar{X}$-$R$ / $\bar{X}$-$S$ | `0.308` | `0.223` | `1.777` | `3.078` | `0.975` | `0.284` | `1.716` | `0.9727` |
| **`15`** | **$\bar{X}$-$S$ (`n>10`)** | *ไม่แนะนำ* | *-* | *-* | *-* | **`0.789`** | **`0.428`** | **`1.572`** | **`0.9823`** |

## M6L1-S07 — Interactive Variable Chart & Subgroup Size Efficiency Lab
`<Interactive id="INT-M6-L1-01" />`
- สลับขนาด `n = 1 (I-MR)`, `n = 5 (X̄-R)`, และ `n = 15 (X̄-S)` เพื่อเห็นความแตกต่างของความกว้างเส้น `UCL/LCL`, ค่า `E2` vs `A2` vs `A3`, และการสูญเสียประสิทธิภาพของ $R$ เมื่อ $n > 10$

## M6L1-S08 — Lesson 1 Knowledge Check (`KC-M6-L1`)
- ทบทวน 2 ข้อ (`M6-Q001`, `M6-Q008`) จาก [06_assessment_bank.md](06_assessment_bank.md)

---

# LESSON M6-L2: Attribute Control Charts (`6.2`)

## M6L2-S01 — When & Why We Use Attribute Control Charts
`<Asset id="AST-M6-007" />`
- **Attribute Data (ข้อมูลนับจำนวน/คุณลักษณะ):** ใช้เมื่อวัดเป็นตัวเลขต่อเนื่องไม่ได้หรือไม่คุ้ม เช่น การตรวจรอยขีดข่วนด้วยสายตา (Visual Check), ชิ้นงานร้าว/บิ่น, Go/No-Go Gauge, จำนวน Error บนแผ่น PCB
- **ข้อแลกเปลี่ยนที่ต้องรู้:**
  - ข้อดี: เก็บข้อมูลเร็ว ใช้ข้อมูล Audit เดิมที่มีในโรงงานได้ทันที
  - ข้อจำกัด: **ต้องใช้ Sample Size ใหญ่กว่า Variable Chart มาก** (`n = 50–200+` ชิ้นต่อจุด) เพื่อให้เห็นค่าเฉลี่ยและจับจุดผิดปกติได้!

## M6L2-S02 — Defective (ชิ้นเสีย) vs Defect (จุดตำหนิ) — จุดตายที่ห้ามสับสน!
`<Asset id="AST-M6-008" />`

| เกณฑ์เปรียบเทียบ | Defective (ชิ้นงานเสีย / Nonconforming Unit) | Defect (จุดบกพร่อง / Nonconformity) |
|---|---|---|
| **การแจกแจงทางสถิติ** | **Binomial Distribution** (ใช่/ไม่ใช่, Pass/Fail) | **Poisson Distribution** (นับจำนวนจุดต่อพื้นที่/ชิ้น/เวลา) |
| **จำนวนค่าที่นับได้ต่อ 1 ชิ้น** | นับได้สูงสุด **`1` เท่านั้น** (เสีย = 1, ดี = 0) | นับได้ **ตั้งแต่ `0, 1, 2, ... ∞` จุด** ต่อ 1 ชิ้น |
| **ตัวอย่างหน้างาน** | ตรวจ `100` ชิ้น พบชิ้นเสียตกเกณฑ์ `4` ชิ้น | แผ่น PCB `1` แผ่น พบจุดบัดกรีเย็น + รอยขีดข่วนรวม `7` จุด |
| **ตระกูลกราฟที่ต้องใช้** | **`p` Chart** หรือ **`np` Chart** | **`c` Chart** หรือ **`u` Chart** |

> **กฎทอง:** ชิ้นงาน `1` ชิ้นที่มีตำหนิ `5` จุด = **`1 Defective`** (บนกราฟ `p/np`) แต่เท่ากับ **`5 Defects`** (บนกราฟ `c/u`)!

## M6L2-S03 — `p` Chart vs `np` Chart (สำหรับ Defective Units — Binomial)
`<Asset id="AST-M6-009" />`
- **`p` Chart (Proportion Defective — ใช้ได้ทั้ง `n` คงที่และ `n` ไม่คงที่!):**
  - แปลงเป็นสัดส่วน $p_i = d_i / n_i$ ทำให้ **ขนาดตัวอย่าง $n_i$ เปลี่ยนทุก Lot/ทุกวันได้** (เช่น ตรวจรับเข้า 100% ที่ยอดแต่ละวันไม่เท่ากัน)
  $$\bar{p} = \frac{\sum d_i}{\sum n_i}, \quad \text{UCL}_{p,i} / \text{LCL}_{p,i} = \bar{p} \pm 3\sqrt{\frac{\bar{p}(1-\bar{p})}{n_i}}$$
  - *ภาพบนกราฟ:* เส้น `UCL/LCL` จะ **หยักขึ้นลงเป็นขั้นบันได (Staircase Limits)** เมื่อ $n_i$ เปลี่ยน (`n` ใหญ่ = เส้นแคบลง, `n` เล็ก = เส้นถ่างออก)
- **`np` Chart (Number of Defectives — `n` ต้องคงที่ 100% เสมอ!):**
  - พล็อต **จำนวนชิ้นเสีย ($np_i = d_i$)** ตรงๆ อ่านเข้าใจง่ายมากสำหรับหน้าไลน์ แต่ **ห้ามใช้เด็ดขาดถ้า $n$ ไม่เท่ากัน!**
  $$\overline{np} = \frac{\sum d_i}{k} = n\bar{p}, \quad \text{UCL}_{np} / \text{LCL}_{np} = \overline{np} \pm 3\sqrt{\overline{np}(1-\bar{p})}$$

## M6L2-S04 — `c` Chart vs `u` Chart (สำหรับ Count of Defects — Poisson)
`<Asset id="AST-M6-010" />`
- **`c` Chart (Count of Defects — พื้นที่/หน่วยตรวจคงที่ 100% เสมอ!):**
  - นับจำนวนจุดตำหนิบน **"หน่วยตรวจขนาดคงที่"** เช่น รถยนต์ 1 คันรุ่นเดิม, ม้วนผ้า 100 เมตรเท่ากันทุกม้วน
  $$\bar{c} = \frac{\sum c_i}{k}, \quad \text{UCL}_c / \text{LCL}_c = \bar{c} \pm 3\sqrt{\bar{c}}$$
- **`u` Chart (Defects per Unit — พื้นที่/จำนวนหน่วยตรวจไม่คงที่ก็ได้!):**
  - หารจำนวนจุดตำหนิทั้งหมดด้วยจำนวนหน่วยตรวจ $n_i$ เช่น $u_i = c_i / n_i$ (จำนวนจุดเสียต่อแผ่น PCB เมื่อแต่ละ Lot มีจำนวนแผ่น `n_i` ต่างกัน!)
  $$\bar{u} = \frac{\sum c_i}{\sum n_i}, \quad \text{UCL}_{u,i} / \text{LCL}_{u,i} = \bar{u} \pm 3\sqrt{\frac{\bar{u}}{n_i}}$$
  - *ภาพบนกราฟ:* มี **Staircase Limits** ตามขนาด $n_i$ เช่นเดียวกับ `p` Chart!

## M6L2-S05 — Attribute Zero-Bounds (`LCL < 0`) & High-Volume Overdispersion
`<Asset id="AST-M6-011" />`
- **เชื่อมโยงกฎ Zero-Bound จาก Module 5 (`M5L4-S04`):**
  - บน `p, np, c, u` Chart สัดส่วนหรือจำนวนจุดเสียมีค่าต่ำสุดคือ **`0`** (ไม่มีทางติดลบ!)
  - เมื่อคำนวณได้ **`LCL < 0` (พบบ่อยมากเมื่อ % เสียต่ำ!)** → `LCL` ที่ติดลบ **ไม่ Valid** ต้องปัดเป็น **`LCL = 0`** (และไม่ตั้ง Rule เช็ก `< LCL` — คุมเฉพาะ `> UCL` เว้นแต่ `LCL > 0` จริงๆ ซึ่งถ้าจุดตก `< LCL` แปลว่าอาจเป็น **Improvement น่าดีใจ** หรือ **คนตรวจหลุดเกณฑ์!**)
- **ระวังกับดัก Big-$n$ Overdispersion:** ในโรงงานยุคใหม่ที่ตรวจหลายหมื่นชิ้นต่อวัน (`n` ใหญ่มาก), `p` และ `u` Chart แบบดั้งเดิมอาจแคบจนเกิด False Alarm บ่อยผิดปกติ (เพราะ Overdispersion) — ในกรณีนี้มาตรฐานสากลแนะนำใช้ **Laney `p'` / Laney `u'` Chart** เพื่อปรับ Scaling ของความแปรปรวนตามข้อมูลจริง!

## M6L2-S06 — Interactive Defective vs Defect & Attribute Staircase Calculator
`<Interactive id="INT-M6-L2-01" />`
- สลับป้อนชุดข้อมูลที่มีทั้งชิ้นเสียและจุดตำหนิ พร้อมเปลี่ยนสถานะ **"Sample Size คงที่ vs ไม่คงที่"** เพื่อดูเหตุผลเลือก `p / np / c / u` และสังเกตเส้น **Staircase UCL/LCL** กับการ Clamp `LCL < 0 → 0`

## M6L2-S07 — Lesson 2 Knowledge Check (`KC-M6-L2`)
- ทบทวน 2 ข้อ (`M6-Q019`, `M6-Q027`)

---

# LESSON M6-L3: Control Chart Selection Matrix (`6.3`)

## M6L3-S01 — Master 3-Step Control Chart Decision Tree
`<Asset id="AST-M6-012" />`
- **ถาม 3 คำถามจบ เลือกได้ครบทั้ง 7 Control Charts มาตรฐาน:**
  1. **Step 1 — ข้อมูลเป็นแบบใด?**
     - วัดค่าต่อเนื่องมีหน่วย (`mm, °C, g, N·m, Ω`) → ไปสาย **Variable**
     - นับ Pass/Fail หรือจำนวนตำหนิ → ไปสาย **Attribute**
  2. **Step 2 — โครงสร้างการนับ / ขนาด Subgroup:**
     - *สาย Variable:* Subgroup Size `n` เท่าไร? → **`n = 1` (`I-MR`)** | **`n = 2–10` ($\bar{X}$-$R$)** | **`n > 10` ($\bar{X}$-$S$)**
     - *สาย Attribute:* นับ **"ชิ้นเสีย (Defective)"** หรือ **"จุดตำหนิ (Defect)"**?
  3. **Step 3 — ขนาดกลุ่มตัวอย่างคงที่หรือไม่? *(สำหรับ Attribute)***
     - *Defective:* `n` คงที่ (`np` หรือ `p`) vs **`n` ไม่คงที่ (`p` เท่านั้น)**
     - *Defect:* ขนาดพื้นที่/หน่วยคงที่ (`c` หรือ `u`) vs **ไม่คงที่ (`u` เท่านั้น)**

## M6L3-S02 — Complete Control Chart Selection Matrix (Single-Page Reference)
`<Asset id="AST-M6-013" />`

| Control Chart | ชนิดข้อมูล | สิ่งที่พล็อตบนกราฟ | ขนาดตัวอย่าง (`n`) | สูตรเส้นควบคุมหลัก | ตัวอย่างหน้างาน |
|---|---|---|---|---|---|
| **`I-MR`** | Variable | ค่าเดี่ยว ($X_i$) & Moving Range | **`n = 1`** | $\bar{X} \pm 2.660\overline{MR}$ | Temp อ่างเคมี, Destructive Pull |
| **$\bar{X}$-$R$** | Variable | ค่าเฉลี่ย ($\bar{X}$) & Range ($R$) | **`n = 2–10`** (`3–5`) | $\bar{\bar{x}} \pm A_2\bar{R}$ | CNC Diameter, Injection Weight |
| **$\bar{X}$-$S$** | Variable | ค่าเฉลี่ย ($\bar{X}$) & SD ($S$) | **`n > 10`** | $\bar{\bar{x}} \pm A_3\bar{S}$ | — |
| **`p`** | Attribute (Defective) | สัดส่วนชิ้นเสีย ($p_i$) | **คงที่ หรือ ไม่คงที่** | $\bar{p} \pm 3\sqrt{\bar{p}(1-\bar{p})/n_i}$ | % Scrap ตรวจ Lot ยอดไม่เท่ากัน |
| **`np`** | Attribute (Defective) | จำนวนชิ้นเสีย ($d_i$) | **ต้องคงที่ 100%** | $\overline{np} \pm 3\sqrt{\overline{np}(1-\bar{p})}$ | จำนวนชิ้นเสียใน 100 ชิ้น/กะ |
| **`c`** | Attribute (Defect) | จำนวนจุดตำหนิ ($c_i$) | **หน่วยคงที่ 100%** | $\bar{c} \pm 3\sqrt{\bar{c}}$ | รอยสีรถ 1 คัน, ตำหนิ PCB รุ่นเดียว |
| **`u`** | Attribute (Defect) | จุดตำหนิต่อหน่วย ($u_i$) | **คงที่ หรือ ไม่คงที่** | $\bar{u} \pm 3\sqrt{\bar{u}/n_i}$ | Solder defects/แผง เมื่อยอดแผงเปลี่ยน |

## M6L3-S03 — Top 5 Chart-Selection Mistakes in Real Factories
`<Asset id="AST-M6-014" />`
1. **เอา $\bar{X}$-$R$ ไปจับข้อมูล `n = 1` โดยแอบจัด 5 ชั่วโมงมารวมกันเป็น 1 Subgroup!** → ผิด Rational Subgroup (ทำให้ R บวมข้ามกะ) ต้องใช้ `I-MR`
2. **ใช้ $\bar{X}$-$R$ กับ `n = 20`** → Range ใช้แค่ Max–Min โยนข้อมูล 18 ตัวกลางทิ้ง ต้องเปลี่ยนเป็น **$\bar{X}$-$S$**
3. **ใช้ `np` หรือ `c` ทั้งที่ยอดผลิต/ยอดตรวจแต่ละวันไม่เท่ากัน** → วันไหนผลิตเยอะจุดจะพุ่งทะลุ UCL หลอก! ต้องใช้ **`p`** หรือ **`u`**
4. **นับจำนวนจุดตำหนิหลายจุดต่อชิ้น แต่จับไปใส่ `np` หรือ `p` Chart** → ค่ารวมเกิน `100%` ทันที! ถ้านับตำหนิต่อหน่วยต้องใช้ **`c` / `u`**
5. **ไม่รู้ความสำคัญของ Variable over Attribute:** วัดขนาดด้วย Vernier ได้เป็นตัวเลข (`mm`) แต่กลับบันทึกแค่ Pass/Fail ไปลง `p Chart` → สูญเสียความไวในการเตือนล่วงหน้ามหาศาล!

## M6L3-S04 — Interactive Control Chart Selection Wizard
`<Interactive id="INT-M6-L3-01" />`
- ตอบคำถาม 3 ขั้นของ Decision Tree จากบริบทงานของคุณ ระบบแนะนำ **Control Chart ที่ถูกต้อง**, แสดงสูตรเส้นควบคุม, ระบุกฎ `Mandatory` + `LCL` Check ที่เหมาะสม และเตือนความผิดพลาดที่มักพบบ่อย

## M6L3-S05 — Lesson 3 Knowledge Check (`KC-M6-L3`)
- ทบทวน 2 ข้อ (`M6-Q037`, `M6-Q042`)

---

# LESSON M6-L4: Workshop — 10 Real Factory Scenarios & Calculation (`6.4`)

## M6L4-S01 — Workshop Briefing: 10 Real Factory Scenarios + Attribute Lab
`<Interactive id="INT-M6-L4-01" />`
- **Part A — 10 Real Factory Case Studies:** [data/workshop_m6_scenarios_10_cases.csv](data/workshop_m6_scenarios_10_cases.csv)
  - ฝึกตัดสินใจเลือก Control Chart จากสถานการณ์จริง 10 สายการผลิต (เคมี, CNC, เซมิคอนดักเตอร์ Wafer, PCB, มอเตอร์, ตรวจรับเข้า, สีตัวถังรถ, Destructive Weld, Multi-spindle, ฉีดพลาสติก) ให้ได้คะแนน `>= 8/10`
- **Part B — Attribute Inspection Calculation Lab:** [data/workshop_m6_attribute_inspection.csv](data/workshop_m6_attribute_inspection.csv)
  - วิเคราะห์ข้อมูลตรวจงาน 20 Lots (`Sample_Size_n` เปลี่ยนตั้งแต่ `100–180`, `Defective_Parts`, `Total_Defects`) เพื่อคำนวณ **`p` Chart** และ **`u` Chart**

## M6L4-S02 — Workshop Part A Solution: Scenarios 1–5
`<Asset id="AST-M6-015" />`
1. **SCEN-01 (Chemical Bath Temp, 1 reading/4hr):** Variable, `n = 1` → **`I-MR Chart`**
2. **SCEN-02 (CNC Shaft OD, 5 parts/hr):** Variable, `n = 5` (`2–10`) → **$\bar{X}$-$R$ Chart**
3. **SCEN-03 (Wafer Oxide Thickness, 16 จุดต่อแผ่น):** Variable → **`I-MR Chart`** — I-MR ของค่าเฉลี่ยต่อ wafer + chart ความแปรปรวนภายใน wafer แยกต่างหาก — 16 จุดบนแผ่นเดียวไม่ใช่ subgroup ของ X̄–S (ISQC pp.271, 286)
4. **SCEN-04 (PCB Solder Defects, 8–20 panels varying):** Attribute Defects, Varying Size → **`u Chart`**
5. **SCEN-05 (Fixed 100 Motors/Shift Pass/Fail count):** Attribute Defective, Constant `n = 100` → **`np Chart`** *(หรือ `p` ก็ได้ แต่ `np` อ่านง่ายตรงๆ)*

## M6L4-S03 — Workshop Part A Solution: Scenarios 6–10
`<Asset id="AST-M6-016" />`
6. **SCEN-06 (Incoming Brackets % Defective, Lot `n = 80..250`):** Attribute Defective, Varying `n` → **`p Chart`**
7. **SCEN-07 (Paint Scratches per 1 Car Body, fixed 1 car):** Attribute Defects, Fixed Unit → **`c Chart`**
8. **SCEN-08 (Destructive Weld Pull-Force, 1 part/shift):** Variable, `n = 1` → **`I-MR Chart`**
9. **SCEN-09 (12-Spindle Hole Size, 12 หัว หัวละ 1 ค่า ทุก 2 ชม.):** Variable → **`I-MR Chart`** — I-MR แยกราย Spindle (หรือ Group Chart) — ห้ามรวม 12 หัวเป็น subgroup เดียว เพราะเป็นคนละ stream (AIAG p.73; ISQC p.443)
10. **SCEN-10 (Plastic Cover Weight, 4 parts/hr same group):** Variable, `n = 4` (`2–10`) → **$\bar{X}$-$R$ Chart**

## M6L4-S04 — Workshop Part B Lab: `p` Chart & `u` Chart Analysis (20 Lots)
`<Interactive id="INT-M6-L4-02" />`
- โหลด [data/workshop_m6_attribute_inspection.csv](data/workshop_m6_attribute_inspection.csv) (`20 Lots`, `∑n = 2,835`):
  - เลือก Chart ที่เหมาะกับคอลัมน์ `Defective_Parts` (`p` Chart) vs `Total_Defects` (`u` Chart) เพราะ `Sample_Size_n` เปลี่ยนแปลงทุก Lot!
  - สังเกตเส้น Staircase UCL/LCL, จุดที่มี `LCL < 0` และจับ Lot ที่หลุดการควบคุม!

## M6L4-S05 — Workshop Part B Solution: Staircase Limits & OOC Lots
`<Asset id="AST-M6-017" />`
- **`p` Chart (Defective Parts, `∑d = 80 / ∑n = 2,835`):**
  - Center Line $\bar{p} = 0.02822$ (`2.82%`)
  - **เงื่อนไขก่อนใช้ `p` Chart:** ควรให้ $n\bar{p} \ge 5$ (AIAG pp.89, 93; IGNOU p.85: $nP > 5$ และ $nQ > 5$) — ข้อมูลชุดนี้ $n\bar{p} \approx 2.8$–$5.1$ ผ่านเพียง **1 จาก 20 lot** เส้น `p` Chart จึงเป็น **ค่าประมาณหยาบ**
  - **Zero-Bound Check:** `LCL_p` Raw ของทุก Lot (`20/20`) คำนวณได้ติดลบ (`-0.0215` ถึง `-0.0088`) → ไม่ Valid ทั้งหมด ให้ปัดเป็น **`LCL = 0`**!
  - **Out-of-Control Signal:** **`LOT-12`** (`n = 150, d = 14 → p = 0.0933 > UCL_p = 0.0688`) → Revised $\bar{p}$ หลังตัด `LOT-12` = **`0.02458` (`2.46%`)**
- **`u` Chart (Defects per Unit, `∑c = 183 / ∑n = 2,835`):**
  - Center Line $\bar{u} = 0.06455$ จุด/ชิ้น
  - **Out-of-Control Signal:** **`LOT-17`** (`n = 140, c = 24 → u = 0.1714 > UCL_u = 0.1290`) — **น่าทึ่ง:** ใน `LOT-17` มีชิ้นเสียเพียง 4 ชิ้น (`2.86%` ผ่าน `p Chart`!) แต่แต่ละชิ้นกลับมีรอยตำหนิเฉลี่ยถึง 6 จุด จน **`u` Chart จับเจอทันที!** ดูเฉลยครบใน [07_workshop_guide.md](07_workshop_guide.md)

## M6L4-S06 — Control Plan Integration Playbook (Bridge to Module 7)
`<Asset id="AST-M6-018" />`
- เมื่อเลือก Chart ถูกต้องแล้ว → ขั้นถัดไปคือ **บันทึกลงใน Control Plan** (ระบุ CTQ, เครื่องมือวัด, `Chart Type`, `Subgroup n`, `Sampling Frequency`, `Mandatory + Optional Rules`, และ `Reaction Plan`)

## M6L4-S07 — Module 6 Summary & Bridge to Module 7
`<Asset id="AST-M6-019" />`
- ตอนนี้คุณเลือกและคำนวณ Control Chart ทั้ง **7 ชนิด (`I-MR, X̄-R, X̄-S, p, np, c, u`)** ได้แม่นยำแล้ว — ใน **Module 7** เราจะลงพื้นที่จริงเพื่อวางระบบ **SPC for Manufacturing Process** (Roadmap, Sampling Plan, Machining/Assembly/Injection/Stamping, Escalation & LPA)!

## M6L4-S08 — Module 6 Final Assessment (`EXAM-M6`)
- สอบประมวลผลสุ่ม **20 ข้อ** จากคลัง [06_assessment_bank.md](06_assessment_bank.md) (`M6-Q001`–`M6-Q060`) | เกณฑ์ผ่าน **80% (`16/20`)**
