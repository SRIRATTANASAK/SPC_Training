# Module 8 Workshop Guide & Verified Solutions

คู่มือปฏิบัติการ Workshop ประจำ Module 8: **การสืบค้นและปิดเคส OOC สายการผลิต CNC Housing Bore (`SG-01` .. `SG-24`)** ครบวงจรตั้งแต่ **OCAP → 7 QC Tools → 5 Why & FTA → Poka-Yoke & PDCA/8D Closure** ตรวจสอบตัวเลขครบ 100%

---

## ชุดข้อมูลประกอบ Workshop (`data/`)
1. [data/workshop_m8_ooc_case_study.csv](data/workshop_m8_ooc_case_study.csv) — **24 Subgroups × 5 ชิ้น = `120` ชิ้น** (`Housing Bore ID`: Spec **`40.000 ± 0.050 mm`**, `LSL = 39.950`, `USL = 40.050`) พร้อม Shift, `Fixture_ID` (`FIX-A / FIX-B`), `Clamp_Pressure_Bar`, `Coolant_Temp_C`, `Xbar_mm`, `Range_mm`, `Max_Raw_mm`, และสถานะ OOC
   - **Phase I Control Limits (Baseline `X̄̄ = 40.0000`, `R̄ = 0.0200`, `n = 5`):**
     - `UCL_X = 40.0000 + 0.577(0.0200) = 40.0115 mm` | `LCL_X = 39.9885 mm`
     - `UCL_R = 2.114(0.0200) = 0.0423 mm` | `LCL_R = 0`
2. [data/workshop_m8_defect_pareto.csv](data/workshop_m8_defect_pareto.csv) — **ตารางสรุป Defect 5 ประเภท (`200` ชิ้น, COPQ รวม `61,740 THB`)** จากการคัดแยก Lot กักกันและข้อมูลประจำเดือน

---

## Part A: OCAP & 7 QC Tools Investigation (`M8L4-S04` & `S05`)

### 1. Gate 1 & 2 — ตรวจจับ OOC และกำหนดขอบเขต Backtrack Containment
- **กลุ่มย่อยที่เกิด Out-of-Control (`6` Subgroups):**
  - `SG-08` (Afternoon, `FIX-B`): `X̄ = 40.0146 > 40.0115`
  - `SG-10` (Night, `FIX-B`): `X̄ = 40.0180 > 40.0115`
  - `SG-12` (Night, `FIX-B`): `X̄ = 40.0230 > 40.0115`
  - `SG-14` (Night, `FIX-B`): `X̄ = 40.0290 > 40.0115` (`Max Raw = 40.0480` จ่อ `USL`)
  - `SG-15` (Night, `FIX-B`): **`OOC ครบ 3 เด้ง!`** `X̄ = 40.0330 > 40.0115`, **`R = 0.0440 > 0.0423`**, **`Max Raw = 40.0560 > 40.050 USL`**
  - `SG-16` (Night, `FIX-B`): **`OOC ครบ 3 เด้ง!`** `X̄ = 40.0350 > 40.0115`, **`R = 0.0480 > 0.0423`**, **`Max Raw = 40.0590 > 40.050 USL`** → Line Stop + Tier 3 OCAP Lot Hold!
  - *(หมายเหตุ: สัญญาณเตือนล่วงหน้า Warning Zone A เริ่มโผล่ตั้งแต่ `SG-06` ที่ `X̄ = 40.0090`)*
- **Backtrack Containment:** กักกันสินค้าจาก **`FIX-B`** ทั้งหมดย้อนหลังตั้งแต่หลังจุดปกติล่าสุด (`SG-04` / ก่อน `SG-06`) จนถึง `SG-16` เพื่อทำ `100% Sorting`!

### 2. Stratification (`FIX-A` vs `FIX-B` & `Shift`)
- เมื่อแยกชั้นข้อมูลระหว่าง 2 Fixtures จะพบข้อเท็จจริงขาดลอย:
  - **`FIX-A`** (`SG-01, 02, 05, 07, 09, 11, 13`): **`0` OOC** ในทุกกะ (ทั้ง Day, Afternoon, Night) โดยแรงดันแคลมป์นิ่งที่ `60.4–61.0 bar`
  - **`FIX-B`**: ครอง **`100%` ของจุด OOC ทั้งหมด (`6/6`)** โดยแรงดันแคลมป์ไหลลงจาก `53.5 → 40.0 bar`!

### 3. Dual Pareto (`Defect Count` vs `COPQ THB`)

| Defect Code | ลักษณะเสีย | Count | % Count | Cum % Count | COPQ (THB) | % COPQ | Cum % COPQ |
|---|---|---|---|---|---|---|---|
| **`DEF-01`** | **Bore Oversize & Chatter (`FIX-B`)** | **`112`** | **`56.0%`** | **`56.0%`** | **`50,400`** | **`81.6%`** | **`81.6%`** |
| `DEF-02` | Burr at Chamfer Edge | `38` | `19.0%` | `75.0%` | `4,560` | `7.4%` | `89.0%` |
| `DEF-03` | Surface Scratch (Handling) | `24` | `12.0%` | `87.0%` | `3,600` | `5.8%` | `94.8%` |
| `DEF-04` | Chip Entrapment Under Datum Pin | `16` | `8.0%` | `95.0%` | `2,880` | `4.7%` | `99.5%` |
| `DEF-05` | Minor Coolant Stain | `10` | `5.0%` | `100.0%` | `300` | `0.5%` | `100.0%` |

- **Insight:** หากดูแค่จำนวนชิ้น `DEF-01` คิดเป็น `56.0%` — แต่เมื่อแปลงเป็น **COPQ (`61,740 THB`)** แล้ว `DEF-01` ตัวเดียวสร้างความเสียหายสูงถึง **`81.6%` (`50,400 THB`)** จึงเป็น **Vital Few #1** ที่ต้องปิดให้จบก่อน!

### 4. Scatter Diagram Proof (`Clamp_Pressure_Bar` vs `Coolant_Temp_C`)
- **`Clamp_Pressure_Bar` vs `Xbar_mm`:** **$r = -0.9955$** (ความสัมพันธ์เชิงลบแข็งแรงระดับเกือบสมบูรณ์: ยิ่งแรงดันแคลมป์ตก ชิ้นงานยิ่งขยับ/ยกตัวตอนคว้านรู ทำให้ Bore โตขึ้น)
- **`Clamp_Pressure_Bar` vs `Range_mm`:** **$r = -0.8921$** (แรงดันต่ำกว่า `43 bar` ทำให้เกิดการสั่น/Chatter จน Range ทะลุ `0.0423 mm`)
- **`Coolant_Temp_C` vs `Xbar_mm`:** **$r = -0.2066$** (ไม่มีความสัมพันธ์เชิงเส้นที่มีนัยสำคัญ → **ตัดสมมติฐาน Chiller/Coolant Temp ออกทันที ไม่เสียเงินซ่อมผิดจุด!**)

---

## Part B: 5 Why, Poka-Yoke & PDCA / 8D Verified Closure (`M8L4-S06` & `S07`)

### 1. 3-Legged 5 Why (สรุปครบทั้ง 3 ขา + ผ่าน Therefore Test)
- **Occurrence Why (ทำไมถึงเกิด):** รูโตเกิน Spec ← ชิ้นงานสั่น/ขยับระหว่างคว้าน ← แรงดันแคลมป์ `FIX-B` ตกเหลือ `40 bar` ← **ซีลวาล์วกันกลับไฮดรอลิก (`Check-Valve Seal`) แตกร้าวจากเศษโลหะคมกัด**
- **Detection Why (ทำไมถึงไม่ถูกหยุดทันที):** ของเสียถูกผลิตต่อเนื่องถึง `SG-16` ← Operator ไม่เห็นสัญญาณเตือนแรงดัน ← **เครื่อง CNC ไม่มี Pressure Switch Interlock ที่ `< 55 bar` และกราฟ SPC จดรวม `FIX-A/FIX-B` ปนกัน**
- **Systemic Why (ทำไมระบบถึงปล่อยผ่าน):** ซีลรั่วโดยไม่มีการเปลี่ยนล่วงหน้า ← **PM Plan ขาดรอบเปลี่ยนซีลแคลมป์ (500 ชม.) และ Control Plan ไม่ได้แยกชั้น Monitoring ตาม Fixture**

### 2. Poka-Yoke & Living Control Plan Updates
1. **Preventive Poka-Yoke (Strongest):** ติดตั้ง **Hydraulic Pressure Switch Interlock** บนท่อ `FIX-A` และ `FIX-B` (หาก `< 55 bar` PLC ตัด Cycle CNC ทันที ป้องกันการผลิตชิ้นเสีย!)
2. **SPC & Control Plan Update:** แยก **Control Chart Stratified ตาม `FIX-A` และ `FIX-B`** + อัปเดต **PFMEA** + เพิ่มรอบ PM เปลี่ยนซีลและครอบการ์ดกันเศษโลหะทุก `500 ชม.`
3. **Yokoten (`D7` Horizontal Deployment):** ขยายผลติด Pressure Switch + การ์ดกันเศษไปยังเครื่อง CNC รุ่นเดียวกันทุกเครื่องในโรงงาน (`CNC #2, #3, #4`)

### 3. Before vs After Capability Proof (`SG-01..16` vs `SG-17..24`)

| ตัวชี้วัด (Metric) | Phase Before (`SG-01..16`) | Phase วิกฤต (`SG-05..16`) | Phase After PDCA (`SG-17..24`) | ผลลัพธ์ |
|---|---|---|---|---|
| **Mean ($\bar{X}$)** | `40.0102 mm` | `40.0135 mm` | **`40.0000 mm`** | กลับสู่ Target เป๊ะ |
| **Within-$\hat{\sigma}$ / Overall-$s$** | $s = 0.01575$ | $s = 0.01653$ | **$\hat{\sigma}_{\text{within}} = 0.00817$** ($\bar{R}=0.0190$) | ความแกว่งลดลงกว่าเท่าตัว |
| **OOC Subgroups** | `6` OOC (`+ Raw > USL`) | `6` OOC (`+ Raw > USL`) | **`0` OOC** | เสถียร 100% |
| **Capability Index** | **`Ppk = 0.843`** (Fail) | **`Ppk = 0.737`** (Critical) | **`Cpk = 2.040`** (`Ppk = 2.637`) | **Pass World-Class (> 1.67)** |
