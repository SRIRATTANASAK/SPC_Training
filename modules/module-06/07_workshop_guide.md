# Module 6 Workshop Guide & Verified Solutions

คู่มือปฏิบัติการ Workshop ประจำ Module 6 ทั้ง **Part A (10 สถานการณ์โรงงานจริง)** และ **Part B (คำนวณจริงบน `p` Chart & `u` Chart)** ตรวจสอบความถูกต้อง 100%

---

## Part A: เลือก Control Chart จากสถานการณ์โรงงานจริง 10 กรณี (`M6L4-S01` – `S03`)
- **ไฟล์ข้อมูล:** [data/workshop_m6_scenarios_10_cases.csv](data/workshop_m6_scenarios_10_cases.csv)

| Scenario | บริบทหน้างาน | Data Type | Subgroup / Sample Condition | Chart ที่ถูกต้อง | เหตุผลทางวิศวกรรม |
|---|---|---|---|---|---|
| `SCEN-01` | Chemical Bath Temperature (วัด 1 ค่าทุก 4 ชม.) | Variable | `n = 1` (Batch เป็นเนื้อเดียว) | **`I-MR Chart`** | วัดได้ 1 ค่าต่อเนื่องต่อรอบ ใช้ Moving Range + `E2 = 2.660` |
| `SCEN-02` | CNC Shaft OD (เก็บ 5 ชิ้นติดกันทุก ชม.) | Variable | `n = 5` (`2 <= n <= 10`) | **$\bar{X}$-$R$ Chart** | กลุ่มขนาด 5 เหมาะสมและแม่นยำตาม AIAG (`A2 = 0.577`) |
| `SCEN-03` | Wafer Oxide Thickness (วัด 16 จุด/แผ่น) | Variable | **16 จุดต่อแผ่น** | **`I-MR Chart`** | I-MR ของค่าเฉลี่ยต่อ wafer + chart ความแปรปรวนภายใน wafer แยกต่างหาก — 16 จุดบนแผ่นเดียวไม่ใช่ subgroup ของ X̄–S |
| `SCEN-04` | PCB Solder Defects (ตรวจ Lot 8–20 แผงไม่เท่ากัน) | Attribute (Defect) | Varying unit count | **`u Chart`** | นับ **จุดตำหนิ** บนจำนวนแผงที่ **เปลี่ยนตาม Lot** (Staircase limits) |
| `SCEN-05` | Final Motor Audit (สุ่มคงที่กะละ 100 ตัว Pass/Fail) | Attribute (Defective) | Constant `n = 100` | **`np Chart`** | นับ **ชิ้นเสีย** ที่ขนาดตรวจ **คงที่ 100% เสมอ** อ่านเป็นจำนวนชิ้นตรงๆ |
| `SCEN-06` | Incoming Brackets (% เสีย Lot ละ 80–250 ชิ้น) | Attribute (Defective) | Varying `n = 80..250` | **`p Chart`** | นับ **ชิ้นเสีย** โดยขนาดตัวอย่าง **ไม่คงที่** ต้องหารเป็นสัดส่วน |
| `SCEN-07` | Paint Line Scratches (นับรอยขีดข่วนต่อรถ 1 คันรุ่นเดิม) | Attribute (Defect) | Constant (`1 car body`) | **`c Chart`** | นับ **จุดตำหนิ** บนหน่วยตรวจสอบ **ขนาดคงที่เสมอ** |
| `SCEN-08` | Destructive Weld Pull-Force (ทำลายกะละ 1 ชิ้น) | Variable | `n = 1` (Destructive) | **`I-MR Chart`** | ทดสอบทำลายได้แค่ 1 ค่าต่อเนื่องต่อกะ |
| `SCEN-09` | 12-Spindle Machining Bore Size (วัดทั้ง 12 หัวทุก 2 ชม.) | Variable | **12 หัว หัวละ 1 ค่า** | **`I-MR Chart`** | I-MR แยกราย Spindle (หรือ Group Chart) — ห้ามรวม 12 หัวเป็น subgroup เดียว เพราะเป็นคนละ stream |
| `SCEN-10` | Injection Molding Cover Weight (4 ชิ้น/ชม. กลุ่มเดียว) | Variable | `n = 4` (`2 <= n <= 10`) | **$\bar{X}$-$R$ Chart** | `n = 4` อยู่ในช่วง `2–10` ใช้ `A2 = 0.729, D4 = 2.282` |

---

## Part B: คำนวณ Attribute Charts (`p` vs `u` Chart) จากข้อมูลจริง 20 Lots (`M6L4-S04` & `S05`)
- **ไฟล์ข้อมูล:** [data/workshop_m6_attribute_inspection.csv](data/workshop_m6_attribute_inspection.csv)
- **ขนาดข้อมูลรวม:** `20 Lots`, `Sample_Size_n` เปลี่ยนตั้งแต่ `100` ถึง `180` ชิ้น (**รวม `∑n = 2,835` ชิ้น**), พบชิ้นเสียรวม `∑d = 80` ชิ้น และจุดตำหนิรวม `∑c = 183` จุด

### เฉลย Step 1: เหตุใดต้องเลือก **`p` Chart** และ **`u` Chart**?
- เพราะ **`Sample_Size_n` ไม่คงที่ในแต่ละ Lot (`100..180`)** จึงห้ามใช้ `np` หรือ `c` Chart:
  - คอลัมน์ `Defective_Parts` (ชิ้นเสีย) → ใช้ **`p` Chart**
  - คอลัมน์ `Total_Defects` (จุดตำหนิ) → ใช้ **`u` Chart**

### เฉลย Step 2: ผลคำนวณจริงบน **`p` Chart** & Zero-Bound Clamping
- **Center Line:** $\bar{p} = \frac{80}{2,835} = \mathbf{0.02822}$ (**`2.82%`**)
- **Staircase Limits ตัวอย่าง (`UCL/LCL` เปลี่ยนตาม $n_i$):**
  - `LOT-03` (`n = 100`, เล็กสุด): $\text{UCL}_p = 0.0779$, Raw $\text{LCL}_p = -0.0215 \to \mathbf{0}$ (ไม่ Valid)
  - **`LOT-12`** (`n = 150, d = 14`): $p_{12} = 14/150 = \mathbf{0.0933} > \text{UCL}_{p,12} = \mathbf{0.0688}$ → **OUT OF CONTROL!**
- **Zero-Bound Check:** ทุก Lot (`20/20`) คำนวณ Raw `LCL_p` ได้ค่าติดลบ (`-0.0215` ถึง `-0.0088`) → **ไม่ Valid ทั้งหมด ปัดเป็น `LCL_p = 0` และไม่ตั้ง Rule เช็ก `< LCL`**
- **เงื่อนไขก่อนใช้ `p` Chart:** ควรให้ $n\bar{p} \ge 5$ (AIAG pp.89, 93; IGNOU p.85: $nP > 5$ และ $nQ > 5$) — ข้อมูลชุดนี้ $n\bar{p} \approx 2.8$–$5.1$ ผ่านเพียง **1 จาก 20 lot** เส้น `p` Chart จึงเป็น **ค่าประมาณหยาบ**
- **Revised $\bar{p}$ (หลังตัด `LOT-12` เหลือ 19 Lots เสถียร `66 / 2,685`):** **`0.02458` (`2.46%`)** — ไม่มี Lot ใดหลุด `UCL_p` อีกเลย!

### เฉลย Step 3: ผลคำนวณจริงบน **`u` Chart** & ข้อค้นพบ **`LOT-17`**!
- **Center Line:** $\bar{u} = \frac{183}{2,835} = \mathbf{0.06455}$ จุดตำหนิ/ชิ้น
- **ข้อค้นพบสำคัญทางวิศวกรรมใน `LOT-17` (`n = 140, d = 4, c = 24`):**
  - บน **`p` Chart:** `LOT-17` มีชิ้นเสียเพียง `4 / 140 = 0.0286 (2.86%)` ซึ่ง **อยู่ภายใน `UCL_p = 0.0702` ปกติดีทุกอย่าง!**
  - บน **`u` Chart:** `LOT-17` มีจุดตำหนิต่อชิ้น $u_{17} = 24 / 140 = \mathbf{0.1714} > \text{UCL}_{u,17} = \mathbf{0.1290}$ → **OUT OF CONTROL!**
  - **เหตุผล:** ชิ้นงานเสีย 4 ชิ้นนั้นมีรอยตำหนิพ่วงรุมอยู่เฉลี่ยชิ้นละ `6` จุด (เช่น ผิวพ่นสีพังหรือแม่พิมพ์เป็นรอยหลายจุดพร้อมกัน) ซึ่งเป็นสิ่งที่ **`p` Chart มองไม่เห็น แต่ `u` Chart จับได้ทัน!**
- **Zero-Bound บน `u` Chart:** `8/20` Lots (กลุ่มที่ `n <= 135`) มี Raw `LCL_u < 0` → ปัดเป็น `0` ส่วน Lots ใหญ่ (`n >= 140`) มี `LCL_u > 0` (เช่น `n=180` ได้ `LCL_u = 0.0077`)
- **Revised $\bar{u}$ (หลังตัด `LOT-17` เหลือ 19 Lots เสถียร `159 / 2,695`):** **`0.05900`** จุด/ชิ้น — ผ่านเกณฑ์เสถียร 100%!
