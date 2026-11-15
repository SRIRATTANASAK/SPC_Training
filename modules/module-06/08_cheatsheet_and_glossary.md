# Module 6 Quick Reference: Formula Cheat Sheet & Glossary

เอกสารสรุปสำหรับปุ่ม **`Resources`** ประจำ Module 6 (Control Chart Selection: Variable & Attribute Charts)

---

## 1. Master Control Chart Selection Matrix (7 Classic Charts)

| Chart | Data Type | Subgroup / Sample | Center Line | Control Limits (`UCL / LCL`) |
|---|---|---|---|---|
| **`I-MR`** | Variable | **`n = 1`** (`MR = |Xᵢ - Xᵢ₋₁|`) | $\bar{X},\;\overline{MR}$ | $\bar{X} \pm 2.660\,\overline{MR}$ / $D_4\overline{MR}$ (`3.267`) |
| **$\bar{X}$-$R$** | Variable | **`n = 2–10`** (แนะนำ `3–5`) | $\bar{\bar{x}},\;\bar{R}$ | $\bar{\bar{x}} \pm A_2\bar{R}$ / $D_4\bar{R},\;D_3\bar{R}$ |
| **$\bar{X}$-$S$** | Variable | **`n > 10`** | $\bar{\bar{x}},\;\bar{S}$ | $\bar{\bar{x}} \pm A_3\bar{S}$ / $B_4\bar{S},\;B_3\bar{S}$ |
| **`p`** | Attribute (**Defective**) | **คงที่ หรือ ไม่คงที่** | $\bar{p} = \frac{\sum d_i}{\sum n_i}$ | $\bar{p} \pm 3\sqrt{\frac{\bar{p}(1-\bar{p})}{n_i}}$ *(Staircase)* |
| **`np`** | Attribute (**Defective**) | **ต้องคงที่ 100%** | $\overline{np} = n\bar{p}$ | $\overline{np} \pm 3\sqrt{\overline{np}(1-\bar{p})}$ |
| **`c`** | Attribute (**Defect**) | **หน่วยคงที่ 100%** | $\bar{c} = \frac{\sum c_i}{k}$ | $\bar{c} \pm 3\sqrt{\bar{c}}$ |
| **`u`** | Attribute (**Defect**) | **คงที่ หรือ ไม่คงที่** | $\bar{u} = \frac{\sum c_i}{\sum n_i}$ | $\bar{u} \pm 3\sqrt{\frac{\bar{u}}{n_i}}$ *(Staircase)* |

> **Zero-Bound Guard:** สำหรับ `R`, `S` (เมื่อ `D3=0` / `B3=0`) และ `p, np, c, u` หากคำนวณ **`LCL < 0`** → **ไม่ Valid** ให้ปัดเป็น `0` และไม่ตั้ง Rule เช็ก `< LCL`!

---

## 2. ตารางค่าคงที่ Variable Charts (`n = 2..15`)

| $n$ | $A_2$ ($\bar{X}$-$R$) | $D_3$ | $D_4$ | $d_2$ | $A_3$ ($\bar{X}$-$S$) | $B_3$ | $B_4$ | $c_4$ |
|---|---|---|---|---|---|---|---|---|
| `2` | `1.880` *($E_2=2.660$)* | `0` | `3.267` | `1.128` | `2.659` | `0` | `3.267` | `0.7979` |
| `3` | `1.023` | `0` | `2.574` | `1.693` | `1.954` | `0` | `2.568` | `0.8862` |
| `4` | `0.729` | `0` | `2.282` | `2.059` | `1.628` | `0` | `2.266` | `0.9213` |
| **`5`** | **`0.577`** | **`0`** | **`2.114`** | **`2.326`** | `1.427` | `0` | `2.089` | `0.9400` |
| `6` | `0.483` | `0` | `2.004` | `2.534` | `1.287` | `0.030` | `1.970` | `0.9515` |
| `10` | `0.308` | `0.223` | `1.777` | `3.078` | `0.975` | `0.284` | `1.716` | `0.9727` |
| **`15`** | *ใช้ $S$ แทน* | *-* | *-* | *-* | **`0.789`** | **`0.428`** | **`1.572`** | **`0.9823`** |

---

## 3. จุดตายที่ห้ามสลับ (`Defective` vs `Defect`)
- **Defective (ชิ้นเสีย — Binomial):** 1 ชิ้นนับเสียได้ **สูงสุด `1`** (ดี=0, เสีย=1) → **`p` / `np`**
- **Defect (จุดตำหนิ — Poisson):** 1 ชิ้นมีจุดเสียได้ **`0..∞` จุด** (เช่น PCB 1 แผ่น มี 5 รอยตำหนิ = `1 Defective`, `5 Defects`) → **`c` / `u`**

---

## 4. อภิธานศัพท์ (Bilingual Glossary)

| Term (EN) | คำศัพท์ / ความหมาย (TH) |
|---|---|
| **`I-MR` Chart** | กราฟควบคุมค่าเดี่ยว (`n=1`) และ Moving Range สำหรับงาน Batch / ทำลายชิ้นงาน |
| **`X̄-R` Chart** | กราฟค่าเฉลี่ยและพิสัยสำหรับกลุ่ม `n = 2–10` |
| **`X̄-S` Chart** | กราฟค่าเฉลี่ยและส่วนเบี่ยงเบนมาตรฐานสำหรับกลุ่มใหญ่ `n > 10` |
| **Statistical Efficiency** | ประสิทธิภาพการใช้ข้อมูล (`R` ทิ้งค่ากลางเมื่อ `n>10` จึงต้องใช้ `S`) |
| **Defective vs Defect** | ชิ้นงานเสีย (ทั้งตัว, Binomial) vs จุดบกพร่อง (นับจำนวนรอย, Poisson) |
| **Staircase Limits** | เส้นควบคุมแบบขั้นบันไดบน `p` / `u` Chart ที่แคบลงเมื่อ `n_i` ใหญ่ขึ้น |
| **Overdispersion (`Laney p'/u'`)** | อาการความแปรปรวนเกินโมเดล Binomial/Poisson เมื่อ `n` ใหญ่มาก (หลักหมื่น) จนเส้นแคบหลอก |
