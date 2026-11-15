# Module 5 Quick Reference: Formula Cheat Sheet & Glossary

เอกสารสรุปสำหรับปุ่ม **`Resources`** ประจำ Module 5 (SPC Concept, Control Limits, Stability & WECO/Nelson Rules)

---

## 1. Control Limits vs Specification Limits (ห้ามสับสนเด็ดขาด!)

| หัวข้อ | Control Limits (`UCL / CL / LCL`) | Specification Limits (`USL / LSL`) |
|---|---|---|
| **ที่มา** | **Voice of Process (VOP)** จากข้อมูลจริงบนเครื่อง | **Voice of Customer (VOC)** จาก Drawing |
| **ใช้วัดอะไร** | ความเสถียรของ **Subgroup Statistic** ($\bar{X}, R$) | ตัดสิน **ชิ้นงานรายชิ้น** (Pass / Fail) |
| **ความกว้าง** | $\bar{\bar{x}} \pm 3\frac{\sigma}{\sqrt{n}}$ (แคบกว่าชิ้นเดี่ยว $\sqrt{n}$ เท่า) | `Target ± Tolerance` |

> **กฎทอง 2 ข้อ:**  
> 1) **ห้ามเอา `USL/LSL` มาวาดแทน `UCL/LCL` บน $\bar{X}$ Chart**  
> 2) **อ่าน $R$ Chart (ความแปรปรวน) ให้เสถียรก่อนดู $\bar{X}$ Chart เสมอ!**

---

## 2. สูตรเส้นควบคุม $\bar{X}$-$R$ และค่าคงที่มาตรฐาน (`AIAG SPC`)

$$\text{CL}_{\bar{X}} = \bar{\bar{x}}, \quad \text{UCL}_{\bar{X}} = \bar{\bar{x}} + A_2\bar{R}, \quad \text{LCL}_{\bar{X}} = \bar{\bar{x}} - A_2\bar{R}$$
$$\text{CL}_R = \bar{R}, \quad \text{UCL}_R = D_4\bar{R}, \quad \text{LCL}_R = D_3\bar{R}$$

| Subgroup Size ($n$) | $A_2$ | $D_3$ | $D_4$ | $d_2$ (หา $\hat{\sigma} = \bar{R}/d_2$) |
|---|---|---|---|---|
| `n = 2` | `1.880` | `0` | `3.267` | `1.128` |
| `n = 3` | `1.023` | `0` | `2.574` | `1.693` |
| `n = 4` | `0.729` | `0` | `2.282` | `2.059` |
| **`n = 5`** | **`0.577`** | **`0`** | **`2.114`** | **`2.326`** |

- **Phase I (ตั้งเส้น):** เก็บ `20–25` กลุ่ม → หา Trial Limits → ตัดเฉพาะจุดที่มี Assignable Cause แก้ไขแล้ว → คำนวณ Revised Limits  
- **Phase II (ใช้งานจริง):** **Freeze เส้นควบคุม** (ห้ามคำนวณใหม่ทุกวัน)

---

## 3. อาการผิดปกติบน Control Chart (Special Cause Signatures)

| รูปทรงบนกราฟ | ต้นตอที่พบบ่อยในโรงงาน | การแก้ไข |
|---|---|---|
| **Sudden Shift** (กระโดดระดับทันที) | เปลี่ยน Lot วัตถุดิบ, เปลี่ยนกะ/Setup, ปรับ Offset | ตรวจ Log เปลี่ยน Lot/Setup |
| **Trend** (เอียงขึ้น/ลงต่อเนื่อง) | **Tool Wear** (มีดกลึงสึก), อุณหภูมิสะสม | เปลี่ยน/ชดเชย Tool ตามรอบ |
| **Cyclic** (คลื่นขึ้น-ลงเป็นรอบ) | อุณหภูมิกลางวัน–กลางคืน, รอบเครื่อง/แรงดันไฟ | คุม Environment / แยกกะ |
| **Mixture** (วิ่งชิดขอบบน & ขอบล่าง) | รวม 2 เครื่อง / 2 Cavities ในกราฟเดียว | **Stratify แยกกราฟ** รายเครื่อง/Cavity |
| **Stratification / Hugging CL** (เกาะใน ±1σ) | ผสมหลายแหล่งใน 1 Subgroup (ทำให้ `R̄` บวม) หรือ **ปลอมตัวเลข** | แก้การเก็บ Rational Subgroup / Audit ข้อมูล |
| **Sawtooth Zigzag** (ฟันปลาขึ้นลงถี่) | **Over-Control / Tampering** (ปรับเครื่องตาม Noise) | หยุดปรับมั่วเมื่ออยู่ใน `UCL/LCL`! |

---

## 4. กฎตรวจจับ: Western Electric (1–4) + Nelson Rules & `ARL`

| กฎ | เงื่อนไข | จับอะไร / ข้อควรระวัง |
|---|---|---|
| **WE Rule 1** | **1 จุด** ออกนอก $\pm 3\sigma$ (`> UCL` หรือ `< LCL`) | Shift รุนแรง — **False Alarm `ARL ≈ 370`** (`0.27%`) |
| **WE Rule 2** | **2 ใน 3 จุด** ใน **Zone A** หรือไกลกว่า (`> 2σ` ฝั่งเดียว) | Shift ขนาดกลาง (`~2σ`) |
| **WE Rule 3** | **4 ใน 5 จุด** ใน **Zone B** หรือไกลกว่า (`> 1σ` ฝั่งเดียว) | Shift ขนาดเล็ก-กลาง (`~1.5σ`) |
| **WE Rule 4** | **8 จุดติดกัน** อยู่ **ฝั่งเดียวกันของ `CL`** | Sustained Small Shift (`~1σ`) |
| **Nelson Extra** | **6 Trend** / **14 สลับขึ้นลง** / **15 ใน Zone C** / **8 นอก Zone C** | *คำเตือน:* เปิดครบทุกกฎพร้อมกัน **`ARL` ลดเหลือ `~91`** (False Alarm พุ่ง 4×!) |

---

## 5. อภิธานศัพท์ (Bilingual Glossary)

| Term (EN) | คำศัพท์ / ความหมาย (TH) |
|---|---|
| **Walter A. Shewhart** | บิดาแห่ง Statistical Process Control ผู้คิดค้น Control Chart ในปี 1924 |
| **Control Limits (`UCL / CL / LCL`)** | เส้นขอบเขตทางสถิติ ($\pm 3\sigma$ ของสถิติ Subgroup) สำหรับแยก Special Cause จาก Noise |
| **Zones A, B, C** | แถบช่วง `2–3σ`, `1–2σ`, และ `0–1σ` รอบ Center Line สำหรับอ่าน Run Rules |
| **Phase I / Phase II SPC** | ช่วงสร้าง-ปรับเส้นควบคุม (20–25 กลุ่ม) / ช่วงล็อกเส้นควบคุมใช้งานจริงต่อเนื่อง |
| **Statistical Stability** | สภาวะเสถียรที่ไม่มี Special Cause ทำให้กระบวนการคาดการณ์ผลในอนาคตได้ |
| **Over-Control / Tampering** | การปรับแต่งเครื่องจักรตามความแปรปรวนปกติ (Noise) จนทำให้ Variance เพิ่มขึ้น |
| **Western Electric Rules (WECO)** | ชุดกฎ 4 ข้อมาตรฐาน (1>3σ, 2/3>2σ, 4/5>1σ, 8 ด้านเดียว) เพื่อจับสัญญาณ OOC |
| **Average Run Length (`ARL`)** | จำนวน Subgroup เฉลี่ยก่อนที่กราฟจะเกิดสัญญาณ (ยิ่ง `ARL₀` สูง False Alarm ยิ่งน้อย) |
| **OCAP (Out-of-Control Action Plan)** | ขั้นตอนมาตรฐานทันทีเมื่อเกิดจุดหลุดควบคุม: `Verify → Contain → Fix` |
