# Module 7 Workshop Guide & Verified Solutions

คู่มือปฏิบัติการ Workshop ประจำ Module 7 ทั้ง **Part A (ออกแบบ SPC Monitoring Plan เชื่อม Control Plan 6 สถานี)** และ **Part B (คำนวณลด Containment Risk, เขียนแก้ Reaction Plan, และจับผิด LPA Audit)** ตรวจสอบตัวเลขครบ 100%

---

## Part A: ออกแบบ SPC Monitoring Plan สำหรับสายผลิต 6 สถานี (`M7L4-S04` & `S05`)
- **ไฟล์ข้อมูล:** [data/workshop_m7_control_plan_line.csv](data/workshop_m7_control_plan_line.csv)

| Station | Process & CTQ | Dominant Variation | Chart & Subgroup | SPC Rules Config | Containment (`Max`) | LPA Verification Focus |
|---|---|---|---|---|---|---|
| **`STN-10`** | **CNC Turning** (`Shaft_OD_mm`) | Tool Wear / Time | **`Xbar-R`**, `n=5` ต่อเนื่อง / `30 min` | `Rule 1 (UCL/LCL)` + `Raw Spec` + `Trend (6)` | `120 × 30/60` = **`60 pcs`** | หยิบ 5 ชิ้นติดกันไม่ Cherry-pick + ลง Tool Change Log |
| **`STN-20`** | **CNC Grinding** (`Roughness Ra Max 0.80`) | Wheel Glazing / Wear | **`Xbar-R`**, `n=5` / `60 min` | **`Rule 1 (UCL Only: LCL<0 Invalid)`** + `Raw USL` + `Trend (6)` | `90 × 60/60` = **`90 pcs`** | ยืนยันไม่มี `< LCL` ร้องเตือนมั่วใกล้ 0 + เช็ก Log ล้างหิน |
| **`STN-30`** | **Injection 4-Cavity** (`Boss_ID_mm`) | **Cavity-to-Cavity Bias** | **`Xbar-R` Stratified Per Cavity** (`n=4` / `60 min`) | `Rule 1 (UCL/LCL)` + `Raw Spec` + Shift (7 จุด AIAG; ISQC 8) | `240 × 60/60` = **`240 pcs`** | สุ่มดูหน้างานว่า **ไม่ผสม Cavity 1–4 ลงกลุ่มเดียวกัน** |
| **`STN-40`** | **Stamping Press** (`Tab Burr Go/No-Go`) | Die Wear / Coil Swap | **`np Chart`**, คงที่ `n=100` / `120 min` | **`Rule 1 (UCL Only: LCL=0)`** + Rejects + `Trend` | `600 × 120/60` = **`1,200 pcs`** *(สูง!)* | ยืนยันตรวจครบ `n=100` + ป้าย Calibration เกจยังไม่หมดอายุ |
| **`STN-50`** | **Auto Torque** (`Bolt_Torque_Nm`) | Piece-to-Piece Driver | **`I-MR (Auto PLC)`** (`100%` ทุก 1 นาที) | `Rule 1 (UCL/LCL)` + `Raw Spec` + Shift (7 จุด AIAG; ISQC 8) | `60 × 1/60` = **`1 pc`** *(Interlock!)* | ยืนยัน Auto-Interlock เปิดทำงาน + Tier 1 ตรวจ Alarm Log |
| **`STN-60`** | **SMT Solder** (`Solder Bridge Defects`) | Stencil Clog / Paste Drift | **`u Chart`** (`Varying 20–50 boards` / `120 min`) | **`Rule 1 (UCL Only if LCL<0)`** + Shift (7 จุด AIAG; ISQC 8) | `40 × 120/60` = **`80 boards`** | จดจำนวนแผง `n_i` ตรงจริงเพื่อให้ Staircase `UCL` แม่น |

---

## Part B: Workshop Audit, Containment Reduction & Reaction Fix (`M7L4-S06` & `S07`)

### เฉลยโจทย์ 1: ลดความเสี่ยงกักกัน (`Containment Risk`) ที่เครื่องปั๊ม `STN-40`
- **สถานการณ์เดิม:** `Line_Rate = 600 pcs/hr`, `Sampling_Interval = 120 min` → ความเสี่ยงกักกัน = $600 \times \frac{120}{60} = \mathbf{1,200\text{ ชิ้น}}$ (หากพันช์แตกตอน `08:05` กว่าจะรู้ตัวตอน `10:00` อาจผลิตของเสียไปแล้วเกือบ `1,200` ชิ้น!)
- **เป้าหมาย:** ลดปริมาณสินค้าเสี่ยงกักกันลง **75%** ให้เหลือ **`<= 300 ชิ้น`**
- **การคำนวณหาความถี่ใหม่:**
  $$\text{Sampling Interval} \le \frac{300 \times 60}{600} = \mathbf{30\text{ นาที}}$$
- **คำตอบที่ถูกต้อง:** ปรับรอบตรวจจากทุก `120 นาที` เป็น **ทุก `30 นาที`** (หรือเพิ่ม Inline Optical Burr Sensor) และกำหนดให้ตรวจเพิ่ม **ทุกครั้งที่เปลี่ยนม้วนเหล็ก Coil**!

### เฉลยโจทย์ 2: แก้ไข Reaction Plan ที่เขียนไว้ว่า `"Notify Supervisor"`
- **ของเดิม (สอบตก IATF/LPA):** *"If OOC, notify Supervisor"* — ไม่มีคำสั่งหยุด, ไม่มีการตรวจซ้ำ, ไม่ระบุจำนวนกักกัน, ไม่มี SLA!
- **ฉบับแก้ไขที่ได้มาตรฐาน (Time-Bound 4-Step Actionable):**
  1. **Pause:** กดปุ่ม Pause เครื่องปั๊มทันที ห้ามส่งชิ้นงานออกจากสถานี
  2. **Verify (ภายใน 2 นาที):** ตรวจ Go/No-Go Gage และวัดยืนยันซ้ำ (ตัดปัญหาความผิดพลาดคนตรวจ)
  3. **Contain Backtrack:** กักกันชิ้นงานทั้งหมดในถาดย้อนหลังถึงจุดตรวจที่ดีล่าสุด (**สูงสุดไม่เกิน `300 ชิ้น`** ตามความถี่ใหม่ `30 นาที`) ติดป้าย Hold แดง
  4. **Inspect & Escalate:** ตรวจความคม Punch & Die Clearance ตาม `WI-STMP-04`; หากแก้ไขไม่จบภายใน **15 นาที** ให้ Escalate สู่ **Tier 2 Technician/Leader (`15–60 นาที`)** และหากยังเกิดซ้ำเกิน `60 นาที` ส่ง **Tier 3 QE เปิด Lot Hold (แนวปฏิบัติ) (`OCAP`)**

### เฉลยโจทย์ 3: จับจุดบกพร่องจาก LPA Gemba Audit
- ผู้ตรวจ LPA เจอ: 1) เวลา `15:30` แต่กราฟว่างตั้งแต่ `13:00` (พนักงานกะจดรวดเดียวตอน `17:00`) และ 2) เอา Cavity `1–4` มารวมใน 1 Subgroup ที่ `STN-30`
- **การประเมินผล LPA:** **FAIL ทั้ง 2 ข้อ:**
  1. ผิดกฎ **Real-Time Plotting (`Wallpaper SPC`)** — ต้องพล็อตภายใน `~1 นาที` หลังวัดทุกครั้ง
  2. ผิดกฎ **Rational Subgrouping (Mixed-Cavity Violation)** — ต้องแยกกราฟหรือตามทีละ Cavity ทันที!
