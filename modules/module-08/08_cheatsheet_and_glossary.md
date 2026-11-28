# Module 8 Quick Reference: Cheat Sheet & Glossary

เอกสารสรุปสำหรับปุ่ม **`Resources`** ประจำ Module 8 (`SPC Problem Solving`: `OCAP`, `7 QC Tools`, `5 Why / Is-Is-Not / FTA / Poka-Yoke`, `PDCA / Kaizen / DMAIC / 8D`)

---

## 1. 5-Gate OCAP Checklist (ทำตามลำดับ ห้ามข้าม!)
1. **Gate 1 — Detection:** จับสัญญาณ OOC (`Rule 1` / `R > UCL_R` / `Trend` / `Shift` / `Raw > Spec`) + ลงเวลา
2. **Gate 2 — Immediate Containment:** หยุดจ่ายงาน / Hold Lot (แนวปฏิบัติ) → กักกัน **100% Backtrack** ถึงจุดตรวจที่ดีล่าสุด
3. **Gate 3 — Data & Gage Verify:** ทวนเลขคีย์ + วัดซ้ำ + เช็ก Datum/เกจวัด (*ห้ามหมุน Offset มั่วก่อน Verify!*)
4. **Gate 4 — Root Cause Investigation:** ใช้ **7 QC Tools + Is/Is-Not + 3-Legged 5 Why + FTA** เจาะให้ถึง Root & Systemic Cause
5. **Gate 5 — CAPA, SPC Verification & Update:** แก้ด้วย **Preventive Poka-Yoke** → เก็บ Confirmation Run (`0` OOC, $C_{pk}$ ผ่าน) → อัปเดต **PFMEA / Control Plan** & **Yokoten**

---

## 2. คู่มือเลือก 7 QC Tools ร่วมกับ Control Chart

| เครื่องมือ | บทบาทหลักในการแก้ปัญหา SPC | จุดสังเกตหน้างาน (Pro Tip) |
|---|---|---|
| **1. Control Chart** | **เข็มทิศ** บอกเวลาเกิดเหตุ & แยก Mean Shift vs Spread | `R` พุ่ง → แก้แคลมป์/Gage/Stream ก่อนปรับ $\bar{X}$! |
| **2. Check Sheet** | เก็บบันทึกเหตุการณ์พร้อม Shift/Fixture/Cavity | อย่าเก็บแค่ยอดรวม ต้องเก็บ Tag แยกชั้นให้ได้ |
| **3. Stratification** | **อาวุธลับแยกชั้น** (`FIX-A vs FIX-B`, `Day vs Night`) | ป้องกันค่าดีของเครื่องหนึ่งมากลบเครื่องที่พัง |
| **4. Pareto Chart** | คัด **Vital Few (`80/20` (ค่าประมาณเพื่อการสอน))** เพื่อลุยจุดคุ้มค่าสุด | ทำ **Dual Pareto** ทั้ง `Count` และ `COPQ Cost`! |
| **5. Histogram** | ส่องรูปทรงประชากรของ Lot กักกัน | **2 ยอด (Bimodal)** = 2 แหล่งปนกัน / **หน้าผาตัด** = คัดทิ้งมาแล้ว |
| **6. Fishbone (`6M`)** | แตกสมมติฐานครบ: *Machine, Material, Method, Man, **Measurement**, Env* | อย่าลืมขา **Measurement** (เตรียมเชื่อม Module 9!) |
| **7. Scatter Diagram** | วัดสหสัมพันธ์ **`r`** แยกตัวการจริง vs ตัวหลอก | `Correlation != Causation` — ต้องทดสอบปรับยืนยันบน Control Chart |

---

## 3. กรอบการปรับปรุงต่อเนื่อง (`PDCA vs Kaizen vs DMAIC vs 8D`)

| กรอบงาน | เหมาะกับเมื่อไร | จุดเน้น |
|---|---|---|
| **PDCA** | คุมมาตรฐานประจำวัน / ทดสอบแก้อาการหน้างาน | `Check` ผลบน SPC + `Act` ตั้งมาตรฐานใหม่ |
| **Kaizen** | ลด Waste / ปรับสถานีวัด / 5ส. / Poka-Yoke เล็กๆ เร็วๆ | ทำไวที่หน้างานจริง (**Gemba**) ร่วมกับ Operator |
| **DMAIC** | ปัญหาเรื้อรัง (`Low Cpk` นาน) ซับซ้อนหลายตัวแปร | เน้นสถิติเข้มข้น (`Measure → Analyze → Improve → Control`) |
| **8D** | **เคส OOC รุนแรง / Lot Hold (แนวปฏิบัติ) / Customer Claim** | เร่ง **`D3` Containment**, **`D4` 3-Legged 5 Why**, **`D7` Yokoten** |

---

## 4. อภิธานศัพท์ (Bilingual Glossary)

| Term (EN) | คำศัพท์ / ความหมาย (TH) |
|---|---|
| **OCAP (Out of Control Action Plan)** | แผนผังปฏิบัติการมาตรฐานเมื่อ Control Chart ออกนอกขอบเขตควบคุม |
| **100% Backtrack Containment** | การกักกันสินค้าทั้งหมดย้อนหลังตั้งแต่จุดปัญหาไปจนถึง Subgroup ที่ดีล่าสุด |
| **Stratification** | การแยกชั้นข้อมูลตามเครื่องจักร กะ Cavity หรือ Fixture เพื่อไม่ให้ข้อมูลกลบกัน |
| **Bimodal Distribution** | การแจกแจงรูป 2 ยอดบน Histogram บ่งชี้การปะปนของ 2 แหล่งผลิต |
| **Spurious Correlation** | ความสัมพันธ์เชิงตัวเลขที่ดูสูงบน Scatter แต่ไม่ใช่เหตุและผลจริง |
| **3-Legged 5 Why** | การวิเคราะห์ 5 Why ครบ 3 ขา: *การเกิด (Occurrence), การตรวจจับ (Detection), เชิงระบบ (Systemic)* |
| **Therefore Test** | การทวนคำตอบ 5 Why ย้อนกลับจากล่างขึ้นบนด้วย *"ดังนั้น... จึงเกิด..."* เพื่อตรวจตรรกะ |
| **Is / Is-Not Matrix** | ตารางเปรียบเทียบขอบเขตที่เกิดและไม่เกิดเพื่อตัดตัวแปรที่ไม่เกี่ยวข้องออก |
| **Fault Tree Analysis (`FTA`)** | แผนภูมิต้นไม้ความผิดพลาดที่ใช้ `AND Gate` และ `OR Gate` ไล่สายเหตุ |
| **Preventive Poka-Yoke** | ระบบป้องกันความผิดพลาดที่ตัดโอกาสผลิตของเสียตั้งแต่ต้น (เช่น PLC Interlock) |
| **Yokoten (Horizontal Deployment)** | การนำมาตรการป้องกันจากเครื่องที่มีปัญหาไปขยายผลใช้กับเครื่องพี่น้องทั้งหมด |
