# Module 9 Quick Reference: Cheat Sheet & Glossary

เอกสารสรุปสำหรับปุ่ม **`Resources`** ประจำ Module 9 (`MSA Connection to SPC`: `Why MSA Before SPC`, `Gage R&R`, `Bias / Linearity / Stability` & `Attribute Kappa`)

---

## 1. สมการหลัก & กฎความละเอียด
$$\sigma^2_{\text{observed}} = \sigma^2_{\text{part}} + \sigma^2_{\text{gage}}$$
- **10-to-1 Resolution Rule:** ความละเอียดเครื่องวัด (`Resolution`) ต้อง $\le \frac{1}{10} \times \text{Tolerance}$

---

## 2. เกณฑ์ตัดสิน Gage R&R (AIAG MSA 4th Edition)

| ตัวชี้วัด | สูตร | ผ่าน (`Acceptable`) | มีเงื่อนไข (`Marginal`) | ไม่ผ่าน (`Unacceptable`) |
|---|---|---|---|---|
| **`%GRR (%SV)`** *(คุม SPC)* | $\frac{\text{GRR}}{\text{TV}} \times 100\%$ | **`< 10%`** | `10% – 30%` | **`> 30%`** |
| **`%Tolerance`** *(คัด Spec)* | $\frac{6 \times \text{GRR}}{\text{USL} - \text{LSL}} \times 100\%$ | **`< 10%`** | `10% – 30%` | **`> 30%`** |
| **`ndc`** *(แยกกลุ่ม)* | $\text{int}\!\left(1.41 \times \frac{\text{PV}}{\text{GRR}}\right)$ | **`>= 5`** | `3 – 4` | **`< 5`** |

- **ถ้า `EV > AV`:** ซ่อม/ปรับปรุงตัวเครื่องวัด, Fixture วัด, หรือเพิ่มความละเอียดเกจ
- **ถ้า `AV > EV`:** ปรับมาตรฐานวิธีจับวัด (`WI`), ใช้ **Ratchet Stop Micrometer**, และฝึก Appraiser

---

## 3. Accuracy: Bias, Linearity, Stability & Attribute Kappa
- **Bias:** $\bar{X}_{\text{obs}} - \text{Reference}$ (เลข `0` ต้องอยู่ใน `95% CI`)
- **Linearity:** ตรวจ Bias ด้วย Master **5 ขนาด** ครอบคลุม Operating Range (Slope ควรใกล้ `0`)
- **Stability:** วัด Master Check Standard ทุกกะ/วัน พล็อตลง **$\bar{X}$-$R$ Control Chart**
- **Attribute MSA (`Kappa`):** $\kappa \ge 0.75$ (Good) | $< 0.40$ (Poor — ใช้ Visual Boundary Samples)

---

## 4. อภิธานศัพท์ (Bilingual Glossary)

| Term (EN) | คำศัพท์ / ความหมาย (TH) |
|---|---|
| **MSA (Measurement Systems Analysis)** | การวิเคราะห์ความสามารถและความน่าเชื่อถือของระบบการวัด |
| **Repeatability (`EV`)** | ความแปรปรวนเมื่อคนเดิม เกจเดิม วัดชิ้นเดิมซ้ำหลายครั้ง |
| **Reproducibility (`AV`)** | ความแปรปรวนของค่าเฉลี่ยระหว่างผู้วัดต่างคนกัน |
| **`ndc` (Number of Distinct Categories)** | จำนวนกลุ่มข้อมูลที่ระบบวัดสามารถแยกแยะออกจากกันได้ (`>= 5` สำหรับ SPC) |
| **Bias** | ผลต่างเชิงระบบระหว่างค่าเฉลี่ยที่วัดได้กับค่ามาตรฐานอ้างอิง |
| **Linearity** | ความคงที่ของค่า Bias ตลอดช่วงการใช้งานของเครื่องวัด |
| **Stability** | ความสม่ำเสมอของระบบการวัดเมื่อเวลาผ่านไป |
| **Kappa ($\kappa$)** | ดัชนีวัดความเห็นพ้องของการตรวจแบบ Attribute (Pass/Fail) |
