# Module 10 Quick Reference: Capstone Master Cheat Sheet

เอกสารสรุปสำหรับปุ่ม **`Resources`** ประจำ Module 10 (สรุปรวม 4 กรณีศึกษา AIAG และสูตรสำคัญทั้งหลักสูตร)

---

## 1. ตารางสรุป 4 กรณีศึกษาอุตสาหกรรม (AIAG-Based)

| Case | กระบวนการ | ข้อมูล & ขนาดกลุ่ม | Chart ที่ใช้ | เกณฑ์ / ผลลัพธ์สำคัญ |
|---|---|---|---|---|
| **Case 1** | **Machining** (`Shaft OD`) | Variable, `n = 5` | **`X̄-R` + `Cp/Cpk`** | `UCL_X = 30.0028`, `Cpk = 8.08` → จับ Tool Wear `SG-16..20` |
| **Case 2** | **Assembly** (`Bolt Torque`) | Variable, `n = 1` (PLC) | **`I-MR`** | `LCL_I = 24.19` → จับ Clutch Slippage `PT-21..25` ก่อนหลุด `LSL` |
| **Case 3** | **Defect Monitoring** | Attribute (`n_i` เปลี่ยน) | **`p` & `u` Chart** | `LOT-13` OOC `p` (`0.0875`), `LOT-17` OOC `u` (`0.1500`) |
| **Case 4** | **PPAP Release** (`Bracket`) | `100` ชิ้น (`20 × 5`) | **3 Gates + `Ppk`** | `Ppk = 2.474 >= 1.67` → **Approved for PPAP Release!** |

---

## 2. Master SPC Deployment Checklist (10-Module Integration)
1. **CTQ & MSA First:** คัด CTQ จาก PFMEA → ตรวจ `10-to-1` Resolution, Bias/Linearity, และ Gage R&R (`%GRR < 10%`, `ndc >= 5`)
2. **Chart & Subgroup:** เลือก Chart ให้ถูก (`I-MR`, `X̄-R`, `X̄-S`, `p, np, c, u`) และเก็บ Rational Subgroup ต่อเนื่องไม่ผสม Stream
3. **Rules & OCAP:** ตั้ง `Mandatory Rules` + `>= 1 Optional Rule` → เกิด OOC ให้ **Pause → Contain Backtrack → Verify Gage/Data → 7 QC + 5 Why + Poka-Yoke**
4. **Sustain:** ตรวจวินัยหน้างานด้วย **LPA (`AIAG CQI-8`)** และอัปเดต **PFMEA / Control Plan** แบบวงจรปิด
