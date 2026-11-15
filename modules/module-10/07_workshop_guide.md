# Module 10 Capstone Workshop Guide & Verified Solutions

คู่มือปฏิบัติการ **4 กรณีศึกษาอุตสาหกรรมมาตรฐาน AIAG** ประจำ Module 10 ตรวจสอบตัวเลขจากชุดข้อมูล CSV จริงครบ 100%

---

## Case 1: Machining Process (`X̄-R` + `Cp/Cpk`)
- **ไฟล์ข้อมูล:** [data/case1_machining_xbar_r.csv](data/case1_machining_xbar_r.csv) (`30.000 ± 0.050 mm`, `20 Subgroups × 5 = 100` ชิ้น)
- **Baseline (`SG-01..15`):** $\bar{\bar{X}} = 30.0000$, $\bar{R} = 0.0048$, **`UCL_X = 30.0028`**, **`LCL_X = 29.9972`**, **`UCL_R = 0.0101`**, **`Cp = Cpk = 8.08`**
- **OOC & Action:** `SG-16..20` ไหลขึ้นต่อเนื่องจาก **Tool Wear** จนทะลุ `UCL_X` → เปลี่ยน Tool Insert + ลง Event Log + ตั้ง **Tool Life Counter** ก่อนถึง Subgroup ที่ 16

## Case 2: Assembly Process (`I-MR` Torque)
- **ไฟล์ข้อมูล:** [data/case2_assembly_imr_torque.csv](data/case2_assembly_imr_torque.csv) (`25.0 ± 3.0 Nm`, `25` จุด)
- **Baseline (`PT-01..20`):** $\bar{I} = 25.01\text{ Nm}$, $\overline{MR} = 0.305$, **`UCL_I = 25.82`**, **`LCL_I = 24.19`**, **`UCL_MR = 1.00`**
- **OOC & Action:** `PT-21..25` ร่วงเหลือ `22.4–22.8 Nm` ต่ำกว่า `LCL_I` (แต่ยังไม่หลุด `LSL = 22.0`!) → เปลี่ยน **Clutch ปืนขันสกรู** + เปิด **PLC Auto-Interlock** ที่ `LCL_I` (Containment เหลือ `1` ชิ้น)

## Case 3: Defect Monitoring (`p` & `u` Chart)
- **ไฟล์ข้อมูล:** [data/case3_defect_p_u_chart.csv](data/case3_defect_p_u_chart.csv) (`20 Lots`, `∑n = 2,835` ชิ้น)
- **ค่าเฉลี่ยรวม:** $\bar{p} = \mathbf{0.0282}$ (`2.82%`), $\bar{u} = \mathbf{0.0501}$ จุด/ชิ้น (Staircase Limits ตาม $n_i$)
- **OOC & Action:**
  - **`LOT-13` (`n=160`):** `14` ชิ้นเสีย → `p = 0.0875 > UCL_p` (**OOC บน `p` Chart**)
  - **`LOT-17` (`n=120`):** `3` ชิ้นเสีย (`p` ปกติ) แต่มี **`18` จุดตำหนิ** → `u = 0.1500 > UCL_u` (**OOC บน `u` Chart**) → กักกัน Lot และทำ Pareto แยกประเภทตำหนิ

## Case 4: PPAP Process Release Study (`Ppk >= 1.67`)
- **ไฟล์ข้อมูล:** [data/case4_ppap_release_ppk.csv](data/case4_ppap_release_ppk.csv) (`50.000 ± 0.100 mm`, `20 × 5 = 100` ชิ้น)
- **3 Gates:** MSA `< 10%` (Pass) + Stability `0` OOC (Pass) + Normality (Pass)
- **Calculation:** $\bar{X} = 50.0019\text{ mm}$, $s_{\text{overall}} = 0.01322\text{ mm}$ → **`Ppk = 2.474 >= 1.67`** → **APPROVED FOR PPAP RELEASE!**
