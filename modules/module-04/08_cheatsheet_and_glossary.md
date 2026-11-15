# Module 4 Quick Reference: Formula Cheat Sheet & Glossary

เอกสารสรุปสำหรับปุ่ม **`Resources`** ประจำ Module 4 (Process Variation, Capability Indices, AIAG/VDA & JEDEC)

---

## 1. ความแตกต่างหลัก: VOP vs VOC & 3 เส้นควบคุม

| แนวคิด | ใครเป็นผู้กำหนด | สูตร / ความหมาย | ใช้ตัดสินอะไร |
|---|---|---|---|
| **VOC (Specification Limits)** | ลูกค้า / แบบ Drawing | `LSL, Target, USL` (Tolerance = `USL − LSL`) | **ชิ้นงานรายชิ้น** (Pass / Fail) |
| **VOP (Natural Spread)** | เครื่องจักร / 5M1E | $\mu \pm 3\sigma = 6\sigma$ (`99.73%`) | สมรรถนะจริงของเครื่อง |
| **Control Limits (`UCL/LCL`)** | สถิติจาก Subgroup บน SPC Chart | $\bar{\bar{x}} \pm A_2\bar{R}$ (แคบกว่า `6σ` ชิ้นเดี่ยว) | **ความเสถียรของค่าเฉลี่ย $\bar{X}$** |

> **กฎทอง:** ห้ามนำ `USL/LSL` ของลูกค้ามาตั้งเป็น Control Limits บน Control Chart เด็ดขาด!

---

## 2. สรุปสูตร $C_p, C_{pk}, P_p, P_{pk}$ (และ Spec 1 ด้าน vs 2 ด้าน)

| ดัชนี | สูตร (Two-Sided Spec) | ตัวหาร $\sigma$ | วัดอะไร | Spec 1 ด้าน |
|---|---|---|---|---|
| **$C_p$** | $\dfrac{\text{USL} - \text{LSL}}{6\hat{\sigma}_{\text{within}}}$ | $\hat{\sigma}_{\text{within}} = \dfrac{\bar{R}}{d_2}$ | **ศักยภาพสูงสุด** (ไม่สน Center!) | **ไม่มีค่า $C_p$** (`N/A`) |
| **$C_{pk}$** | $\min\left(\dfrac{\text{USL} - \bar{\bar{x}}}{3\hat{\sigma}_{\text{within}}},\; \dfrac{\bar{\bar{x}} - \text{LSL}}{3\hat{\sigma}_{\text{within}}}\right)$ | $\hat{\sigma}_{\text{within}} = \dfrac{\bar{R}}{d_2}$ | **ความสามารถจริงระยะสั้น** (ต้อง $\le C_p$ เสมอ) | ใช้ $C_{pl}$ (มีแค่ LSL) หรือ $C_{pu}$ (มีแค่ USL) |
| **$P_p$** | $\dfrac{\text{USL} - \text{LSL}}{6 s_{\text{overall}}}$ | $s_{\text{overall}} = \sqrt{\dfrac{\sum (x_i - \bar{\bar{x}})^2}{N - 1}}$ | **สมรรถนะระยะยาว** (รวม Shift/Drift ทั้งหมด) | **ไม่มีค่า $P_p$** (`N/A`) |
| **$P_{pk}$** | $\min\left(\dfrac{\text{USL} - \bar{\bar{x}}}{3 s_{\text{overall}}},\; \dfrac{\bar{\bar{x}} - \text{LSL}}{3 s_{\text{overall}}}\right)$ | $s_{\text{overall}}$ | **สมรรถนะจริงระยะยาว** (AIAG ใช้ตรวจ PPAP!) | ใช้ $P_{pl}$ หรือ $P_{pu}$ |

**ค่าคงที่ $d_2$ ที่ใช้บ่อย:** `n=2: 1.128` | `n=3: 1.693` | `n=4: 2.059` | **`n=5: 2.326`**

---

## 3. ตารางวินิจฉัย $C_{pk}$ เทียบ $P_{pk}$ และตาราง PPM

| รูปแบบผลลัพธ์ | ความหมายทางวิศวกรรม | วิธีแก้ไข |
|---|---|---|
| **$C_{pk} \approx P_{pk} \ge 1.33$** | กระบวนการ **เสถียรและเก่งพอ** | รักษาเสถียรภาพด้วย SPC |
| **$C_{pk} \gg P_{pk}$** | เครื่องดีในชั่วโมง แต่ **ไหล/กระโดดข้ามเวลา (Unstable!)** | จับ Special Cause ระหว่าง Subgroup ก่อน |
| **$C_p \gg C_{pk}$** | การกระจายแคบดีแล้ว แต่ **Center เบี้ยวจาก Target** | ปรับ Offset เข้าหา Target |
| **$C_p \approx C_{pk} < 1.00$** | อยู่ตรงกลางและเสถียรแล้ว แต่เครื่องกว้างเกินสเปก | ลด Variation ที่ 5M1E (ห้ามแค่ปรับ Offset) |

- **Capability ↔ PPM (Centered):** `1.00 ≈ 2,700 PPM` | **`1.33 ≈ 63 PPM`** | **`1.67 ≈ 0.57 PPM`** | `2.00 ≈ 0.002 PPM (3.4 PPM w/ 1.5σ shift)`

---

## 4. เกณฑ์มาตรฐาน AIAG/VDA & JEDEC (3 Gates + Traffic Light)

**3 ด่านบังคับก่อนรายงาน $C_{pk}$:** `1) MSA ผ่าน (%GRR < 10%)` → `2) Control Chart เสถียร` → `3) Normality ผ่าน (p ≥ 0.05)`

| มาตรฐาน / ช่วงงาน | เกณฑ์สีเขียว (Pass) | เหลือง (Conditional) | แดง (Reject / Hold) |
|---|---|---|---|
| **AIAG / VDA — Initial PPAP (`Ppk`)** | **`Ppk ≥ 1.67`** | `1.33 – 1.66` (ต้องมี Containment & Plan) | **`< 1.33`** (100% Sort / ห้ามปล่อย) |
| **AIAG / VDA — Ongoing (`Cpk`)** | **`Cpk ≥ 1.33`** (`≥ 1.67` สำหรับ CC/SC) | `1.00 – 1.32` (เฝ้าระวังใกล้ชิด) | `< 1.00` (ของเสียสูงมาก) |
| **JEDEC (Semiconductor / Electronics)** | **`Cpk ≥ 1.33`** (ปกติ) / **`1.67–2.00`** (Automotive/Critical) | ตรวจ 1-Sided (`Cpl/Cpu`) & Non-Normal + ผูก OCAP | Hold Lot ทันทีตาม OCAP |

---

## 5. อภิธานศัพท์ (Bilingual Glossary)

| Term (EN) | คำศัพท์ / ความหมาย (TH) |
|---|---|
| **Voice of Process (VOP)** | สมรรถนะธรรมชาติที่กระบวนการผลิตทำได้จริง ($\mu \pm 3\sigma = 6\sigma$) |
| **Voice of Customer (VOC)** | ขอบเขตสเปกที่ลูกค้าและแบบวิศวกรรมกำหนด (`USL, LSL, Target`) |
| **Taguchi Loss Function** | แนวคิดที่ว่าความสูญเสียทางคุณภาพเพิ่มขึ้นแบบกำลังสองเมื่อค่าเบี่ยงออกจาก Target แม้ยังไม่ตก Spec |
| **Unilateral Specification** | สเปกด้านเดียว (มีเฉพาะ LSL เช่น Pull Force หรือเฉพาะ USL เช่น Leakage) — ไม่สามารถคำนวณ $C_p$ ได้ |
| **Within-Subgroup Sigma ($\hat{\sigma}_{\text{within}}$)** | ความแปรปรวนระยะสั้นภายใน Subgroup ($\bar{R}/d_2$ หรือ $\bar{s}/c_4$) |
| **Overall SD ($s_{\text{overall}}$)** | ส่วนเบี่ยงเบนมาตรฐานรวมทุกชิ้นงาน ซึ่งรวมความแปรปรวนจาก Shift/Drift ข้ามเวลาไว้ด้วย |
| **Potential Capability ($C_p$)** | ศักยภาพความกว้างของกระบวนการเทียบ Spec โดยยังไม่คิดตำแหน่ง Center |
| **Actual Capability ($C_{pk}$)** | ความสามารถจริงระยะสั้นที่คิดทั้งความกว้างและระยะใกล้ขอบ Spec ฝั่งที่แย่ที่สุด |
| **Process Performance ($P_p, P_{pk}$)** | สมรรถนะรวมระยะยาวของกระบวนการที่ใช้ $s_{\text{overall}}$ เป็นตัวหาร |
| **PPM / DPPM** | จำนวนชิ้นงานบกพร่องที่คาดว่าจะเกิดขึ้นต่อหนึ่งล้านชิ้น (Parts / Defects Per Million) |
| **PPAP Initial Process Study** | การศึกษาสมรรถนะเบื้องต้นก่อนอนุมัติผลิตจริงในอุตสาหกรรมยานยนต์ (ใช้ $P_{pk} \ge 1.67$) |
| **JEDEC Standard (JESD557)** | มาตรฐาน SPC และ Process Capability สำหรับอุตสาหกรรมเซมิคอนดักเตอร์และอิเล็กทรอนิกส์ |
