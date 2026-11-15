# Module 5 Full Lesson Content (Web & MDX Ready — 28 Screens)

**Module 5: SPC Concept and Methodology (หัวใจของ SPC — Walter Shewhart, Control Limits vs Spec Limits, Stability, Western Electric & Nelson Rules)**  
เอกสารนี้คือ **เนื้อหาบนหน้าจอฉบับสมบูรณ์ (On-Screen Teaching Copy)** สำหรับนักพัฒนาเว็บนำไปสร้างหน้าเว็บ/สไลด์ (MDX/React) คู่กับเสียงบรรยายใน [02_voiceover_th_en.md](02_voiceover_th_en.md) และตัวจำลองใน [04_interactive_logic.md](04_interactive_logic.md)

---

# LESSON M5-L1: Introduction to SPC (`5.1`)

## M5L1-S01 — Welcome & From Capability to Real-Time Control
`<Asset id="AST-M5-001" />`
- **ภาพต่อจาก Module 4:** แม้เครื่องจักรจะมีศักยภาพสูง ($C_{pk} = 1.83$) แต่ในหน้างานจริงหากไม่มีระบบเฝ้าระวัง ปัญหา **Shift/Drift (เช่นกะดึก `SG-15..20`)** จะทำลายสมรรถนะโดยไม่รู้ตัว!
- **วัตถุประสงค์การเรียนรู้ประจำ Module 5:**
  1. เข้าใจแนวคิดต้นกำเนิด **Statistical Process Control (SPC)** ของ Walter Shewhart, กรอบ **AIAG SPC** และ **JEDEC `JESD557`**
  2. แยกแยะ **Control Limits (`UCL/CL/LCL`)** ออกจาก **Specification Limits (`USL/LSL`)** อย่างเด็ดขาด พร้อมเข้าใจ **Phase I vs Phase II**
  3. ประเมิน **Process Stability** และอ่านสัญญาณรูปทรง Special Cause บนกราฟได้อย่างแม่นยำ
  4. ประยุกต์ใช้ **Western Electric Rules (1–4)** และ **Nelson Rules** เพื่อจับปัญหาก่อนเกิดของเสีย โดยไม่สร้าง False Alarm ล้นไลน์

## M5L1-S02 — Walter Shewhart & The Birth of SPC (1924)
`<Asset id="AST-M5-002" />`
- **จุดเริ่มต้นประวัติศาสตร์ (16 พฤษภาคม 1924):** **Dr. Walter A. Shewhart** แห่ง Bell Telephone Laboratories ส่งบันทึก Memo หน้าเดียวที่มีกราฟ Control Chart ฉบับแรกของโลก เพื่อแก้ปัญหาความไม่เสถียรของอุปกรณ์สื่อสาร
- **แก่นปรัชญา Shewhart:**
  - ทุกกระบวนการมี **Variation** สองชนิด: **Chance Cause (Common Cause)** และ **Assignable Cause (Special Cause)**
  - *ไม่ควรปรับแต่งเครื่องจักรตามจุดสุ่มธรรมดา* แต่ต้องมีเส้นเกณฑ์สถิติเพื่อแยกแยะ **"เสียงรบกวนปกติ (Noise)"** ออกจาก **"สัญญาณผิดปกติจริง (Signal)"**
- แนวคิดนี้ถูก **Dr. W. Edwards Deming** นำไปปฏิวัติคุณภาพในญี่ปุ่น จนกลายเป็นรากฐานของ **TQM, IATF 16949 และ Six Sigma**

## M5L1-S03 — Prevention vs Detection (คุมกระบวนการ แทนการตรวจคัดทิ้ง)
`<Asset id="AST-M5-003" />`

| แนวทางจัดการคุณภาพ | Detection (ตรวจจับปลายทาง) | Prevention with SPC (ป้องกันกลางไลน์) |
|---|---|---|
| **วิธีปฏิบัติ** | ผลิตเสร็จแล้วค่อยตรวจ 100% หรือ Sampling ปลายสาย | วัดตัวอย่างตามจังหวะเวลาบน **Control Chart** ระหว่างผลิต |
| **จังหวะการรู้ตัว** | รู้เมื่อ **ของเสียเกิดขึ้นแล้ว** (Waste, Rework, Scrap) | รู้ตั้งแต่ **กราฟเริ่มขยับ/มีแนวโน้ม** ทั้งที่ชิ้นงานยังอยู่ใน Spec! |
| **ผลกระทบต่อ COPQ** | ต้นทุน Appraisal + Internal Failure สูงลิ่ว | ลด Scrap, ป้องกัน Escape ไปหาลูกค้า และคุม Process ให้ Predictable |

## M5L1-S04 — AIAG SPC Framework & JEDEC `JESD557`
`<Asset id="AST-M5-004" />`
- **AIAG SPC (4th Ed.) — มาตรฐานยานยนต์ & IATF 16949:**
  - เน้น **Continual Improvement & Variation Reduction** ผูก Control Chart เข้ากับ **PFMEA** และ **Control Plan**
  - วงจร 3 ขั้น: *1) Collect Data → 2) Control (Stability) → 3) Analyze Capability ($C_{pk}/P_{pk}$)*
- **JEDEC `JESD557` — มาตรฐานเซมิคอนดักเตอร์ & อิเล็กทรอนิกส์:**
  - กำหนดระบบ **Automated Real-Time SPC** ตลอด Wafer Fab / Assembly / ATE
  - เน้น **Zone/Run Rules**, **Auto Lot Hold**, และการผูกทุก Out-of-Control Signal เข้ากับ **OCAP (Out-of-Control Action Plan)** ทันที

## M5L1-S05 — Lesson 1 Knowledge Check (`KC-M5-L1`)
- ทบทวน 2 ข้อ (`M5-Q001`, `M5-Q006`) จาก [06_assessment_bank.md](06_assessment_bank.md)

---

# LESSON M5-L2: Control Chart Principle (`5.2`)

## M5L2-S01 — Anatomy of a Control Chart (`UCL, CL, LCL` & Zones)
`<Asset id="AST-M5-005" />`
- **3 เส้นหลักบน Control Chart:**
  - **Center Line (`CL`):** ค่าเฉลี่ยของข้อมูล (เช่น $\bar{\bar{x}}$ หรือ $\bar{R}$) แทนสภาวะปกติ
  - **Upper / Lower Control Limits (`UCL / LCL`):** อยู่ที่ระยะ **$\pm 3\sigma_{\text{stat}}$** จาก `CL` (ครอบคลุมโอกาสสุ่มปกติถึง **`99.73%`** เหลือ False Alarm เพียง `0.27%` หรือ 1 ใน 370 จุด)
- **แถบโซน (Zones C, B, A):**
  - **Zone C:** ภายใน $\pm 1\sigma$ (`~68.27%`)
  - **Zone B:** ช่วง $\pm 1\sigma$ ถึง $\pm 2\sigma$ (`~27.18%`)
  - **Zone A:** ช่วง $\pm 2\sigma$ ถึง $\pm 3\sigma$ (`~4.28%`)

## M5L2-S02 — Control Limits vs Spec Limits (ความแตกต่างที่สำคัญที่สุด!)
`<Asset id="AST-M5-006" />`

| ประเด็นเปรียบเทียบ | Control Limits (`UCL / LCL`) | Specification Limits (`USL / LSL`) |
|---|---|---|
| **เสียงของใคร?** | **Voice of Process (VOP)** — คำนวณจากข้อมูลจริง | **Voice of Customer (VOC)** — กำหนดใน Drawing |
| **พล็อตไว้สำหรับอะไร?** | ค่าสถิติของ **Subgroup** (เช่น $\bar{X}, R$) เพื่อดู Stability | เปรียบเทียบกับ **ชิ้นงานรายชิ้น** เพื่อตัดสิน Pass / Fail |
| **ตำแหน่งความกว้าง** | **$\bar{\bar{x}} \pm 3\frac{\sigma}{\sqrt{n}}$** (แคบกว่าชิ้นเดี่ยว $\sqrt{n}$ เท่า!) | `Target ± Tolerance` |

- **กฎเหล็ก:** **ห้ามนำ `USL/LSL` มาวาดเป็น `UCL/LCL` บน $\bar{X}$ Chart เด็ดขาด!** เพราะค่าเฉลี่ย Subgroup กระจายแคบกว่าชิ้นเดี่ยว หากใช้ Spec Limit แทน จะมองไม่เห็นการ Shift จนกว่าจะมีของเสียเต็มลังแล้ว!

## M5L2-S03 — How `UCL/CL/LCL` Are Calculated ($\bar{X}$-$R$ Constants)
`<Asset id="AST-M5-007" />`

$$\text{CL}_{\bar{X}} = \bar{\bar{x}}, \quad \text{UCL}_{\bar{X}} = \bar{\bar{x}} + A_2\bar{R}, \quad \text{LCL}_{\bar{X}} = \bar{\bar{x}} - A_2\bar{R}$$
$$\text{CL}_{R} = \bar{R}, \quad \text{UCL}_{R} = D_4\bar{R}, \quad \text{LCL}_{R} = D_3\bar{R}$$

- **ตารางค่าคงที่มาตรฐาน (`AIAG SPC`):**
  - `n = 2`: `A2 = 1.880`, `D3 = 0`, `D4 = 3.267`, `d2 = 1.128`
  - `n = 3`: `A2 = 1.023`, `D3 = 0`, `D4 = 2.574`, `d2 = 1.693`
  - `n = 4`: `A2 = 0.729`, `D3 = 0`, `D4 = 2.282`, `d2 = 2.059`
  - **`n = 5`: `A2 = 0.577`, `D3 = 0`, `D4 = 2.114`, `d2 = 2.326`**
- **ข้อสังเกต:** Control Limits ใช้ค่า $\bar{R}$ (**Within-subgroup**) จึงไวต่อการเปลี่ยนแปลงระหว่างกลุ่ม!

## M5L2-S04 — Phase I (Trial Limits) vs Phase II (Ongoing Control)
`<Asset id="AST-M5-008" />`
- **Phase I — Retrospective / Establishing Limits (สร้างเส้นควบคุม):**
  1. เก็บข้อมูลอย่างน้อย **`20–25` Subgroups** (`~100+` ชิ้น)
  2. คำนวณ **Trial Control Limits** ($R$ Chart ก่อน แล้วตามด้วย $\bar{X}$ Chart)
  3. หากพบจุด Special Cause ที่ **หาสาเหตุและแก้ไขได้จริง** → ตัดจุดนั้นออกแล้วคำนวณ **Revised Control Limits** ใหม่ (ห้ามตัดจุดทิ้งโดยไม่มีสาเหตุ!)
- **Phase II — Real-Time Process Monitoring:**
  - **ล็อก (Freeze)** เส้น `UCL/CL/LCL` ที่เสถียรแล้วมาเฝ้าระวังการผลิตจริงรายชั่วโมง — **ห้ามคำนวณเส้นใหม่ทุกวัน** มิฉะนั้นเส้นจะขยายตามปัญหาจนจับ Shift ไม่ได้! (คำนวณใหม่เฉพาะเมื่อมีการปรับปรุงระบบถาวรหรือมีจุดนิ่งสะสมตามเงื่อนไข)

## M5L2-S05 — Interactive Control vs Spec Limit & Phase I/II Builder
`<Interactive id="INT-M5-L2-01" />`
- สลับโหมดดูความต่างระหว่าง **"วาด Spec หลอกตา บนกราฟ $\bar{X}$"** กับ **"Control Limits จริง ($\pm 3\sigma/\sqrt{n}$)"** และกดลบ Subgroup ที่มี Special Cause เพื่อดูการคำนวณ Revised Limits

## M5L2-S06 — Lesson 2 Knowledge Check (`KC-M5-L2`)
- ทบทวน 2 ข้อ (`M5-Q013`, `M5-Q019`)

---

# LESSON M5-L3: Stability Assessment (`5.3`)

## M5L3-S01 — What Is Statistical Stability & Golden Reading Order
`<Asset id="AST-M5-009" />`
- **ความเสถียร (Statistical Control / Stability):** สถานะที่ผลลัพธ์จากอดีตสามารถ **ทำนายอนาคตได้ (Predictable)** เพราะมีเพียง Common Cause เท่านั้น
- **กฎเหล็กการอ่านกราฟ 2 ชั้น: อ่าน $R$ (หรือ $S$) Chart ก่อน $\bar{X}$ Chart เสมอ!**
  - **ทำไมต้องดู $R$ Chart ก่อน?** เพราะสูตร $\text{UCL}/\text{LCL}$ ของกราฟ $\bar{X}$ ใช้ค่า $\bar{R}$ (`A2 × R̄`)! หากความแปรปรวนภายในกลุ่ม ($R$) ไม่นิ่ง เส้นควบคุมของ $\bar{X}$ ก็จะ **เชื่อถือไม่ได้**

## M5L3-S02 — Special Cause Signatures Part 1: Sudden Shift & Trend
`<Asset id="AST-M5-010" />`
- **1. Sudden Shift / Level Shift (กระโดดเปลี่ยนระดับ):**
  - ลักษณะ: ค่าเฉลี่ยกระโดดขึ้นหรือลงทันที แล้วแช่ระดับใหม่
  - ต้นเหตุหน้างาน: เปลี่ยนล็อตวัตถุดิบ, เปลี่ยนกะ/Operator ปรับ Offset, เปลี่ยน Tool/Setup ใหม่
- **2. Trend / Drift (เอียงขึ้นหรือลงต่อเนื่อง):**
  - ลักษณะ: จุดขยับไปในทิศทางเดียวต่อเนื่อง 6+ จุด
  - ต้นเหตุหน้างาน: **Tool Wear (มีดกลึง/ดอกเจาะสึก)**, อุณหภูมิสะสมในเครื่อง, น้ำยาเคมีค่อยๆ เจือจาง, แรงดันตก

## M5L3-S03 — Special Cause Signatures Part 2: Cyclic & Mixture
`<Asset id="AST-M5-011" />`
- **3. Cyclic Pattern (ขึ้นลงเป็นรอบซ้ำๆ):**
  - ลักษณะ: คลื่นขึ้น-ลงสม่ำเสมอตามเวลา
  - ต้นเหตุหน้างาน: อุณหภูมิกลางวัน vs กลางคืน, รอบเปิด-ปิดแอร์/ชิลเลอร์, ความล้าหรือรอบเปลี่ยนกะ, Voltage Fluctuation
- **4. Mixture / Two Streams (ข้อมูล 2 แหล่งปนกัน — วิ่งชิดขอบบน/ล่าง):**
  - ลักษณะ: จุดกระโดดสลับใกล้ `UCL` กับ `LCL` (ไม่ค่อยอยู่ใกล้ตรงกลาง `CL`)
  - ต้นเหตุหน้างาน: นำชิ้นงานจาก **2 เครื่องจักร, 2 Cavities, หรือ 2 หัวฉีดที่ตั้งค่าต่างกัน** มารวมกันในกราฟเดียว → แก้ด้วยการ **Stratify แยกกราฟตามเครื่อง/Cavity**!

## M5L3-S04 — Special Cause Signatures Part 3: Stratification (Hugging CL)
`<Asset id="AST-M5-012" />`
- **5. Stratification / Hugging the Center Line (เกาะเส้นกลางผิดปกติ):**
  - ลักษณะ: จุดทั้งหมด 15+ จุด **กระจุกตัวอยู่แค่ใน Zone C ($\pm 1\sigma$)** ไม่ยอมแตะ `UCL/LCL` เลย!
  - ต้นเหตุ 2 แบบที่พบบ่อยมาก:
    1. **ผสมต่างกลุ่มเข้าใน 1 Subgroup (Violating Rational Subgroup):** เช่น หยิบจาก Cavity 1–5 มารวมในกลุ่มเดียวกัน ทำให้ $R$ ภายในกลุ่ม **บวมโตเกินจริง** จน `A2 × R̄` ถ่างเส้น `UCL/LCL` กว้างผิดปกติ
    2. **Control Limits คำนวณผิด / ปลอมแปลงข้อมูล (Pencil-whipping):** จดตัวเลขให้ดูสวยใกล้ Target เสมอ!

## M5L3-S05 — Over-Control (Tampering) & Unstable-Yet-In-Spec Trap
`<Asset id="AST-M5-013" />`
- **Over-Control / Tampering:** เมื่อจุดยังแกว่งปกติภายใน `UCL/LCL` (`Common Cause`) แต่ช่างไปปรับเครื่องชดเชยทุกชั่วโมง → ผลคือ **ความแปรปรวนพุ่งขึ้น 2 เท่า** และกราฟแกว่งฟันปลา!
- **Unstable-Yet-In-Spec Warning:** ในสายการผลิตจริง บ่อยครั้งที่ `UCL` แคบกว่า `USL` มาก จุดสามารถ **หลุด Control Limit (เกิด Special Cause)** โดยที่ชิ้นงานทุกชิ้นยัง **ไม่หลุด Spec** — นี่คือ **"สัญญาณเตือนล่วงหน้าทองคำ"** ที่ให้เวลาเราแก้เครื่องก่อนเกิดของเสียจริง!

## M5L3-S06 — Interactive Pattern Diagnosis Matcher
`<Interactive id="INT-M5-L3-01" />`
- ดูรูปกราฟ Control Chart 6 รูปแบบจริง (`Sudden Shift`, `Trend`, `Cyclic`, `Mixture`, `Stratification`, `Tampering`) แล้วเลือกต้นเหตุหน้างานและวิธีแก้ที่ถูกต้อง

## M5L3-S07 — Lesson 3 Knowledge Check (`KC-M5-L3`)
- ทบทวน 2 ข้อ (`M5-Q025`, `M5-Q033`)

---

# LESSON M5-L4: Western Electric Rules, Nelson Rules & Workshop (`5.4`)

## M5L4-S01 — Zone Logic Behind Run Rules (`68% – 95% – 99.7%`)
`<Asset id="AST-M5-014" />`
- หากกระบวนการเสถียรจริง (`Normal`) โอกาสสุ่มปกติของจุดถัดไปคือ:
  - ตกนอก $\pm 3\sigma$: `0.27%` (`0.0027`) — แทบไม่มีทางบังเอิญ!
  - ตกเกิน $\pm 2\sigma$ ข้างเดียวกัน 2 ใน 3 จุด: โอกาสบังเอิญ `< 0.19%`
  - ตกด้านเดียวกับ `CL` ต่อเนื่องกันถึง 8 จุด: $(0.5)^8 \times 2 \approx 0.78\%$
- **สรุป:** Run Rules คือเครื่องมือ **เพิ่มความไว (Sensitivity)** ให้จับ Shift ขนาดเล็ก-กลาง (`1σ–2σ`) ได้เร็วขึ้น โดยไม่ต้องรอให้หลุด `3σ`!

## M5L4-S02 — Western Electric Rules (WECO Rules 1–4)
`<Asset id="AST-M5-015" />`

| กฎ (Rule) | เงื่อนไขการจับสัญญาณ | รูปแบบปัญหาที่มักจับได้ |
|---|---|---|
| **WE Rule 1** | **1 จุด** อยู่นอกเส้นควบคุม (`> +3σ` หรือ `< −3σ`) | **Large Sudden Shift**, วัดผิด, เครื่องขัดข้องรุนแรง |
| **WE Rule 2** | **2 ใน 3 จุดติดกัน** อยู่ใน **Zone A หรือไกลกว่า** (`> 2σ` ฝั่งเดียวกัน) | **Medium Shift (~2σ)** เริ่มขยับชัดเจน |
| **WE Rule 3** | **4 ใน 5 จุดติดกัน** อยู่ใน **Zone B หรือไกลกว่า** (`> 1σ` ฝั่งเดียวกัน) | **Small–Medium Shift (~1.5σ)** กำลังเคลื่อนตัว |
| **WE Rule 4** | **8 จุดติดกัน** อยู่ **ฝั่งเดียวกันของ Center Line** (ข้างบนหมด หรือ ข้างล่างหมด) | **Small Sustained Shift (~1σ)** เช่น เปลี่ยนล็อตวัสดุ, Offset เปลี่ยนกะ |

> *(หมายเหตุ: เวอร์ชันสั้นบางตำรารวมเงื่อนไข Zone ไว้ชัดเจนบน Chart เดียว และใน Control Chart ของ $\bar{X}$ ใช้กฎทั้ง 4 นี้ได้ตรงไปตรงมา)*

## M5L4-S03 — Nelson Rules (Rules 5–8) & Avoiding False Alarm Fatigue
`<Asset id="AST-M5-016" />`
- **4 กฎเพิ่มเติมในชุด Nelson Rules (1984) ที่นิยมในโปรแกรมสถิติ (Minitab / JMP / AIAG):**
  - **Trend Rule:** **6 จุดติดกัน** เพิ่มขึ้นเรื่อยๆ หรือลดลงเรื่อยๆ → *Tool Wear, Thermal Drift*
  - **Alternating Rule:** **14 จุดติดกัน** สลับขึ้น-ลงเป็นฟันปลา → *2 หัวฉีดสลับกัน หรือ Tampering!*
  - **Stratification Rule:** **15 จุดติดกัน** เกาะใน Zone C ($\pm 1\sigma$) → *Rational Subgroup ผิด หรือข้อมูลปลอม*
  - **Mixture Rule:** **8 จุดติดกัน** ไม่อยู่ใน Zone C เลย (สลับออกทั้ง 2 ฝั่ง > $\pm 1\sigma$) → *ผสม 2 แหล่ง*
- **คำเตือนวิศวกรเรื่อง False Alarm (`ARL` Trade-off):**
  - ใช้ **Rule 1 อย่างเดียว:** False Alarm เฉลี่ยทุก **`~370 จุด`** (`p = 0.0027`)
  - เปิด **ทุกกฎ (WECO / Nelson 8 Rules) พร้อมกัน:** ความเสี่ยง False Alarm พุ่งเป็นทุก **`~91 จุด`** (เกือบ **4 เท่า**!) จนพนักงานหน้าไลน์ **"ชินชาต่อสัญญาณเตือน (Alarm Fatigue)"**
  - **Best Practice (AIAG & JEDEC):** ต้องวางโครงสร้างกฎอย่างเป็นระบบ (เช่น **Rule 1 + Raw Data Check** เป็นกฎบังคับ และคัดเลือกกฎเสริมตามพฤติกรรมกระบวนการจริง) ซึ่งเราจะเจาะลึกวิธีเลือกในหน้าถัดไป!

## M5L4-S04 — SPC Rule Selection Strategy: Mandatory Rules, Zero-Bounds & Engineering Judgement
`<Asset id="AST-M5-020" />`
- **1. ขอบเขตของ Rule 1 (`1 จุดออกนอกเส้นควบคุม`) บนกราฟแต่ละประเภท:**
  - **Mean Chart ($\bar{X}$) แบบปกติ (Two-sided):** ใช้ Rule 1 ตรวจจับได้ทั้ง **เหนือ `UCL` และต่ำกว่า `LCL`**
  - **กรณีค่าลักษณะ "ยิ่งน้อยยิ่งดี" (`Lower-is-Better` / Non-negative Near Zero):** เช่น **Roughness ($R_a$), Flatness, Coplanarity, Tilt, Warpage** ซึ่งค่ามีแนวโน้มเข้าใกล้ **`0`** → เมื่อคำนวณด้วยสูตรสถิติ ค่า **`LCL` อาจติดลบ (`LCL < 0`)!** แต่ในโลกจริง **ค่าที่วัดออกมาไม่มีทางติดลบได้** ดังนั้น **`LCL` ที่ติดลบจึงไม่ Valid (Invalid)** → ให้ **ยกเลิก `LCL` ทิ้ง (N/A)** และใช้ Rule 1 ตรวจ **เฉพาะฝั่ง `UCL` ด้านเดียวเท่านั้น!**
  - **กรณี Variation Chart ($R$ Chart / $S$ Chart):** ค่าความแปรปรวนต่ำสุดทางกายภาพคือ **`0`** เมื่อคำนวณแล้วได้ **`LCL = 0`** (เช่น `n = 2–6` ที่ `D3 = 0`) → **ไม่จำเป็นต้องตั้ง SPC Rule ตรวจสอบว่าต่ำกว่า `LCL` ใน Variation Chart** ให้เฝ้าระวังเฉพาะด้านบน (`> UCL`)!
- **2. กฎบังคับในยุคสมัยใหม่ — `Mandatory SPC Rules`:**
  - **Mandatory SPC Rules** หมายถึง **กฎที่ทุก Control Chart จำเป็นต้องกำหนดเสมอ** ประกอบด้วย:
    1. **Rule 1 (`1 จุดออกนอก UCL / LCL ที่ Valid`)** (ตัดฝั่ง `< LCL` ออกหาก `LCL < 0` หรือ `LCL_R = 0`)
    2. **Individual Raw Data vs Specification Limits (`> USL` / `< LSL`):** ในสายผลิตยุคใหม่ มีการตรวจสอบ **ข้อมูลดิบรายชิ้น (Individual Raw Data) เทียบกับเส้น Spec** ด้วย *(เป็นการตรวจ Layer ชิ้นงานคู่ขนานกับ Control Chart — ไม่ใช่เอา Spec มาวาดแทน `UCL/LCL`!)* เพื่อป้องกันของเสียหลุดสายพานทันที
- **3. การเลือก `Optional SPC Rules` ที่เหลือ (ควรเลือกอย่างน้อย `1` Rule เสมอ):**
  - นอกจาก Mandatory Rules แล้ว ควรเลือกกฎเสริมอย่างน้อย **`1` SPC Rule** โดยพิจารณาจาก **`2` เสาหลัก**:
    1. **Engineering Judgement (เหตุผลทางวิศวกรรม):** ความเสี่ยงของเครื่องจักร (เช่น มีดสึก → เปิด Trend `6 pts`, เปลี่ยนล็อต/Offset → เปิด Shift `8–9 pts`), ความไวในการจับ Shift, และต้นทุน False Alarm
    2. **Process Characteristic (พฤติกรรมของกระบวนการนั้นๆ):** ลักษณะการแจกแจงข้อมูลจริง เช่น ข้อมูลแบบ Normal สมมาตร vs ข้อมูลเบ้ชิดศูนย์ (`Roughness / Coplanarity`) ที่ไม่ควรเปิดกฎด้านล่างให้ร้องเตือนมั่ว
  - **หัวใจของวิศวกร:** **วิศวกรต้องเข้าใจ Process ของตนเองอย่างลึกซึ้ง** จึงจะเลือก SPC Rules ได้แม่นยำและ **หลีกเลี่ยง False Alarm (Alarm Fatigue)** หน้าไลน์ผลิตได้สำเร็จ!

## M5L4-S05 — From OOC Signal to OCAP (เชื่อมต่อสู่ Module 8)
`<Asset id="AST-M5-017" />`
- เมื่อ Rule ใด Rule หนึ่งทำงาน → ห้ามแค่กดปิดหน้าต่าง! ต้องทำตาม **OCAP (Out-of-Control Action Plan)** ทันที:
  1. **Verify:** ตรวจซ้ำว่าวัดผิด/คีย์ผิดหรือไม่ (`1` นาที)
  2. **Contain:** กักกันสินค้าตั้งแต่จุดสุดท้ายที่ดี (Last Good Point)
  3. **Investigate & Fix:** แก้ Special Cause ที่ต้นตอ (ไม่ปรับมั่วถ้าเป็น Noise!) และบันทึก Log ลง Control Chart

## M5L4-S06 — Interactive Western Electric, Nelson & Rule Selection Trigger Lab
`<Interactive id="INT-M5-L4-01" />`
- เลือก **Process Profile** (`Normal Mean`, `Lower-is-Better Near-Zero: Flatness/Roughness`, `Variation R Chart`) เพื่อดู **Mandatory Rules (`Rule 1 Valid Bounds` + `Raw Data vs Spec`)**, กดจำลองเหตุการณ์ทั้ง 7 แบบ พร้อมเลือก **Optional Rule (อย่างน้อย `1` ข้อ)** และสังเกตค่า **False Alarm (`ARL`)** แบบ Real-time

## M5L4-S07 — Workshop: หา Special Cause จาก Control Chart ข้อมูลจริง
`<Interactive id="INT-M5-L4-02" />`
- **ไฟล์ข้อมูล:** [data/workshop_m5_control_chart_subgroups.csv](data/workshop_m5_control_chart_subgroups.csv) (`125` ชิ้น, `25 Subgroups × 5 ชิ้น`, `Shaft_OD_mm`, Spec `25.000 ± 0.080 mm`, ค่าคงที่สำหรับ `n = 5`: `A2 = 0.577, D3 = 0, D4 = 2.114`)
- **ภารกิจ:** คำนวณ Trial Control Limits (`CL, UCL, LCL` ของ $\bar{X}$ และ $R$), ตรวจหากฎ **WE Rules 1–4** ที่ทำงาน, แยกจุด Special Cause, และคำนวณ **Revised Baseline Control Limits**

## M5L4-S08 — Workshop Solution: Phase I vs Revised Limits & Diagnosis
`<Asset id="AST-M5-018" />`
- **Trial Control Limits (`All 25 Subgroups`):**
  - $\bar{X}$ Chart: `CL = 25.0067 mm`, `UCL = 25.0226 mm`, `LCL = 24.9907 mm` | $R$ Chart: `CL_R = 0.0276 mm`, `UCL_R = 0.0584 mm`
- **สัญญาณ Special Cause ที่จับได้ (ทั้งที่ชิ้นงานเดี่ยวสูงสุด `25.068 mm` ยังไม่ตก `USL = 25.080`!):**
  1. **`SG-11` (`18:00`):** `X̄ = 25.0350 > UCL_X` และ `R = 0.0720 > UCL_R` → **WE Rule 1** ทั้งกราฟ $\bar{X}$ และ $R$ (เช่น มีดกลึงบิ่น/จับยึดหลวม)
  2. **`SG-18` – `SG-25` (`01:00`–`08:00`):** 8 จุดติดกันอยู่เหนือ `CL` ทั้งหมด → **WE Rule 4** (และ `SG-23..25` เข้า **WE Rule 2: 2 ใน 3 อยู่ Zone A `> +2σ`**) ทั้งที่ไม่มีจุดใดหลุด `UCL_X` เลย!
- **Revised Control Limits (หลังตัด `SG-11` และ `SG-18..25` เหลือ `16` กลุ่มเสถียร):** `CL_X = 25.0013`, `UCL_X = 25.0181`, `LCL_X = 24.9845` | `UCL_R = 0.0616` ดูรายละเอียดใน [07_workshop_guide.md](07_workshop_guide.md)

## M5L4-S09 — Module 5 Summary & Bridge to Module 6
`<Asset id="AST-M5-019" />`
- ตอนนี้คุณเข้าใจหลักการทำงานของ Control Chart และวิธีเลือกใช้ SPC Rules อย่างมืออาชีพแล้ว — ใน **Module 6** เราจะตอบคำถามสำคัญถัดไป: *"ข้อมูลโรงงานแต่ละแบบ (`Variable` vs `Attribute`, `n=1`, `n=5`, `n>10`, `P/NP/C/U`) ต้องเลือก Control Chart ตัวไหนให้ถูกต้อง!"*

## M5L4-S10 — Module 5 Final Assessment (`EXAM-M5`)
- สอบประมวลผลสุ่ม **20 ข้อ** จากคลัง [06_assessment_bank.md](06_assessment_bank.md) (`M5-Q001`–`M5-Q060`) | เกณฑ์ผ่าน **80% (`16/20`)**
