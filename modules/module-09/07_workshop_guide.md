# Module 9 Workshop Guide & Verified Solutions

คู่มือปฏิบัติการ Workshop ประจำ Module 9: **การอ่านและวินิจฉัยผล Gage R&R Report (`10 Parts × 3 Appraisers × 3 Trials = 90` การวัด)** สำหรับงาน `Pin OD` (`12.000 ± 0.100 mm`) ตรวจสอบตัวเลขตามมาตรฐาน **AIAG MSA 4th Edition** ครบ 100%

---

## ชุดข้อมูลประกอบ Workshop
- **ไฟล์ข้อมูล:** [data/workshop_m9_gage_rr_study.csv](data/workshop_m9_gage_rr_study.csv)
- **สเปกชิ้นงาน:** `Pin_OD = 12.000 ± 0.100 mm` (`LSL = 11.900`, `USL = 12.100`, **Tolerance = `0.200 mm`**)
- **ค่าคงที่ AIAG MSA 4th Ed.:** $K_1 = 0.5908$ ($m=3$), $K_2 = 0.5231$ ($k=3$), $K_3 = 0.3146$ ($n=10$)

---

## ขั้นตอนที่ 1: สรุปค่าสถิติจากข้อมูล 90 การวัด
- **ค่าเฉลี่ยรายคนวัด (Appraiser Means):**
  - `Appraiser_A` = **`12.0003 mm`**
  - `Appraiser_B` = **`11.9783 mm`** *(ต่ำกว่า A และ C อยู่ราว `-0.022 mm`!)*
  - `Appraiser_C` = **`12.0022 mm`**
- **ค่าสถิติตั้งต้น:**
  - $\bar{\bar{R}} = 0.00213\text{ mm}$
  - $\bar{X}_{\text{diff}} = 12.0022 - 11.9783 = 0.02393\text{ mm}$
  - $R_p = 0.06700\text{ mm}$

---

## ขั้นตอนที่ 2: คำนวณองค์ประกอบความแปรปรวน (`EV, AV, GRR, PV, TV`)

| ตัวชี้วัด | สูตรคำนวณ | ผลลัพธ์ (mm) | การตีความ |
|---|---|---|---|
| **Repeatability (`EV`)** | $\bar{\bar{R}} \times K_1 = 0.00213 \times 0.5908$ | **`0.00126`** | ต่ำมาก! ตัวไมโครมิเตอร์เองแม่นยำดี |
| **Reproducibility (`AV`)** | $\sqrt{(\bar{X}_{\text{diff}} \times K_2)^2 - \frac{\text{EV}^2}{10 \times 3}}$ | **`0.01252`** | **สูงกว่า `EV` เกือบ `10` เท่า!** |
| **Gage R&R (`GRR`)** | $\sqrt{\text{EV}^2 + \text{AV}^2}$ | **`0.01258`** | ถูกครอบงำด้วย `AV` |
| **Part Variation (`PV`)** | $R_p \times K_3 = 0.06700 \times 0.3146$ | **`0.02108`** | ความแปรปรวนจริงของชิ้นงาน |
| **Total Variation (`TV`)** | $\sqrt{\text{GRR}^2 + \text{PV}^2}$ | **`0.02455`** | ความแปรปรวนรวมที่สังเกตได้ |

---

## ขั้นตอนที่ 3: ตัดสินเกณฑ์ AIAG (`%GRR`, `%Tolerance`, `ndc`)
1. **`%GRR (%Study Var)`** $= \frac{0.01258}{0.02455} \times 100\% = \mathbf{51.25\%}$ → **`FAIL (> 30%)`**
2. **`%GRR (%Tolerance)`** $= \frac{6 \times 0.01258}{0.200} \times 100\% = \mathbf{37.74\%}$ → **`FAIL (> 30%)`**
3. **`ndc`** $= \text{int}\!\left(1.41 \times \frac{0.02108}{0.01258}\right) = \mathbf{2}$ → **`FAIL (< 5)`**

---

## ขั้นตอนที่ 4: วินิจฉัยและแนวทางแก้ไข (Before vs After)
- **สาเหตุที่สอบตก:** ปัญหาไม่ได้อยู่ที่ตัวไมโครมิเตอร์ (`EV = 0.00126` ดีมาก) แต่อยู่ที่ **Reproducibility (`AV = 0.01252`)** เพราะ **Appraiser B กดไมโครมิเตอร์แรงเกินไป (`-0.022 mm`)**
- **มาตรการแก้ไข:** เปลี่ยนมาใช้ **Constant-Force / Ratchet Stop Micrometer** (บังคับแรงกดเท่ากันทุกคน) + ปรับ WI วิธีจับวัดมาตรฐาน
- **ผลลัพธ์หลังแก้ไข:** เมื่อ $\bar{X}_{\text{diff}}$ ลดเหลือ `0.0019 mm`, ค่า **`%GRR` ลดลงเหลือ `< 8%`**, **`%Tolerance < 6%`**, และ **`ndc >= 15`** → **ผ่านเกณฑ์ AIAG 100% พร้อมขึ้น Control Chart!**
