# Module 7 Quick Reference: Formula Cheat Sheet & Glossary

เอกสารสรุปสำหรับปุ่ม **`Resources`** ประจำ Module 7 (SPC for Manufacturing Process, Sampling, Escalation & LPA)

---

## 1. สูตรคำนวณความเสี่ยงกักกัน & กฎ Sampling Plan

$$\text{Max Parts at Risk (Containment)} = \text{Line Speed (pcs/hr)} \times \frac{\text{Sampling Interval (min)}}{60}$$

- **หลัก Rational Subgroup:** หยิบ **`5` ชิ้นผลิตต่อเนื่องติดกัน** ณ จุดเวลาเดียว จากแหล่งเดียวกัน (ห้ามผสมข้าม Machine / Spindle / Cavity!)
- **กฎ Critical Few (CTQ):** เลือกเฉพาะ **CC/SC และ PFMEA High AP/Severity** แทนการเปิดทุกจุดจนเกิด **Pencil-Whipping**

---

## 2. คู่มือวาง SPC ตามประเภทกระบวนการ (4 Main Processes)

| กระบวนการ | Dominant Noise | ตัวอย่าง CTQ | วิธีเก็บ Subgroup & Chart แนะนำ | กฎเสริม / Event Log สำคัญ |
|---|---|---|---|---|
| **Machining** (CNC Turning/Grinding) | Tool Wear / Thermal Drift | Shaft OD / Bore / **Roughness ($R_a$)** | `5` ชิ้นติดกันจาก Spindle เดียว (`X̄-R`) | **Trend (6 pts)**, `Ra` ใช้ **UCL Only**, ลง Log เปลี่ยนมีด |
| **Assembly & SMT** (Torque / Paste) | Piece-to-Piece / Multi-Site | Bolt Torque / Paste Vol / Solder Defects | PLC 100% **`I-MR`** / 16-site **`X̄-S`** / **`u`** | Auto Interlock หยุดทีละ `1` ชิ้น / `JESD557` Auto Hold |
| **Injection Molding** (Multi-Cavity) | **Cavity-to-Cavity Stream Bias** | Part Weight / Critical Boss ID | **Stratified Per Cavity (`X̄-R`)** | **ห้ามผสม Cav 1–4 ลงกลุ่มเดียวเด็ดขาด!** |
| **Stamping Press** (Die & Coil) | **Coil Lot Swap** & Punch Wear | Bend Angle / Burr Height | `5` ชิ้นติดกัน (`X̄-R`) + `np` (`n` คงที่) | ตรวจเพิ่ม **ทุกครั้งที่เปลี่ยน Coil**, ปัด `LCL_np = 0` |

---

## 3. โครงสร้าง 3-Tier Escalation Matrix & SLA

| Tier | ผู้รับผิดชอบ | SLA (กรอบเวลา) | หน้าที่ปฏิบัติทันที |
|---|---|---|---|
| **Tier 1** | Operator หน้าเครื่อง | **`0 – 15 นาที`** | Auto-Pause → Verify วัดซ้ำ (`< 2 นาที`) → Contain ย้อนหลัง → เช็กพื้นฐาน/เปลี่ยนมีด |
| **Tier 2** | Line Leader / Tech | **`15 – 60 นาที`** | ตรวจ Setup/Fixture/Parameter เครื่องจักร + สั่ง 100% Sort ในโซนกักกัน |
| **Tier 3** | QE / PE Engineer | **`> 60 นาที` หรือ Raw > Spec ร้ายแรง** | สั่ง **Lot Hold (`OCAP / JESD557`)**, เปิด MRB & 8D Root Cause Analysis (**Module 8**) |

---

## 4. Top 6 LPA Checkpoints (AIAG CQI-8)
1. **Real-Time Plot?** (ไม่เป็น Wallpaper SPC รอเขียนตอนเลิกกะ)  
2. **Consecutive / Stratified Subgroup?** (ไม่ Cherry-pick ไม่ผสม Cavity)  
3. **Rule Literacy?** (เข้าใจ Rule 1 บน Valid Limits + Optional Rules)  
4. **Event Log Match?** (จดเปลี่ยนมีด/Coil/Offset ตรงหน้างาน)  
5. **Reaction Sign-Off?** (กักกัน & Escalate ครบเมื่อเคยหลุดเส้น)  
6. **Gage Calibrated?** (รหัสตรง Control Plan & ไม่หมดอายุ)

---

## 5. อภิธานศัพท์ (Bilingual Glossary)

| Term (EN) | คำศัพท์ / ความหมาย (TH) |
|---|---|
| **Wallpaper SPC** | กราฟที่รอจดย้อนหลังปลายกะจนไร้ประโยชน์ในการป้องกันของเสียแบบ Real-time |
| **Pencil-Whipping** | การเขียน/กรอกตัวเลขเดาบนกราฟให้ดูสวยโดยไม่ได้วัดจริง (มักเกิดเมื่อภาระจุดตรวจล้น) |
| **Containment Exposure** | จำนวนชิ้นงานสูงสุดที่ผลิตขึ้นระหว่างรอบตรวจและต้องถูกกักกันเมื่อเกิด OOC |
| **Stratified Per-Cavity SPC** | การแยกกราฟควบคุมทีละ Cavity/Spindle เพื่อไม่ให้ความต่างระหว่างหัวปนใน $R$ |
| **Actionable Reaction Plan** | แผนโต้ตอบที่ระบุผู้ทำ ขั้นตอน เวลา และปริมาณกักกันชัดเจน (ไม่ใช่แค่ "แจ้งหัวหน้า") |
| **3-Tier Escalation** | การส่งต่อปัญหาตามลำดับขั้นและกรอบเวลา (`Operator → Leader/Tech → QE/PE`) |
| **Layered Process Audit (LPA)** | การตรวจประเมินวินัยหน้างานหลายระดับชั้น (`AIAG CQI-8`: รายวัน/สัปดาห์/เดือน) |
