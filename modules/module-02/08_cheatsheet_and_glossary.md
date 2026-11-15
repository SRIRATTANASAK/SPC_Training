# Module 2 Quick Reference: Formula Cheat Sheet & Glossary

เอกสารสรุปสำหรับปุ่ม **`Resources`** ประจำ Module 2 (Probability & Distribution)

---

## 1. Common Cause vs Special Cause

| หัวข้อ | Common Cause (Noise) | Special Cause (Signal) |
|---|---|---|
| **ลักษณะ** | แปรปรวนปกติของระบบ คาดเดาได้ | เกิดจากเหตุเฉพาะ เช่น มีดบิ่น, จิ๊กหลวม |
| **สถานะ** | Stable (In Control) | Unstable (Out of Control) |
| **การจัดการ** | แก้ที่ระบบโดยวิศวกร (**ห้ามปรับเครื่องหน้างาน**) | หยุดเช็ค/แก้ไขทันทีตาม Reaction Plan (OCAP) |

---

## 2. สูตรความน่าจะเป็นและสัญลักษณ์ประชากร vs ตัวอย่าง

- **Series First Pass Yield (FPY):** $FPY_{\text{total}} = Y_1 \times Y_2 \times \dots \times Y_k$
- **Population Parameters:** ขนาด $N$, ค่าเฉลี่ย $\mu$, ส่วนเบี่ยงเบน $\sigma$, สัดส่วน $p$
- **Sample Statistics:** ขนาด $n$, ค่าเฉลี่ย $\bar{x}$, ส่วนเบี่ยงเบน $s$, สัดส่วน $\hat{p}$

---

## 3. การแจกแจงความน่าจะเป็น 3 แบบหลัก & Central Limit Theorem

| Distribution | ใช้เมื่อไร | สูตรสำคัญ | ค่าเฉลี่ย / ส่วนเบี่ยงเบน |
|---|---|---|---|
| **Normal** | วัดค่าต่อเนื่อง (Variable: mm, g, N·m) | $Z = \dfrac{X - \mu}{\sigma}$ | $\mu$, $\sigma$ (เช็ค Normality `p >= 0.05`) |
| **Binomial** | นับชิ้นงาน Pass/Fail (`Defective`) จาก $n$ ชิ้น | $P(X=k) = \binom{n}{k}p^k(1-p)^{n-k}$ | $\mu = np$, $\sigma = \sqrt{np(1-p)}$ |
| **Poisson** | นับจำนวนจุดตำหนิ (`Defects`) ต่อหน่วย | $P(X=k) = \dfrac{e^{-\lambda}\lambda^k}{k!}$ | $\mu = \lambda$, $\sigma = \sqrt{\lambda}$ |
| **CLT ($\bar{X}$)** | ค่าเฉลี่ยของ Subgroup ขนาด $n$ | $\sigma_{\bar{x}} = \dfrac{\sigma}{\sqrt{n}}$ | $\mu_{\bar{x}} = \mu$ (**ห้ามเทียบ $\bar{X}$ กับ USL/LSL!**) |

---

## 4. อภิธานศัพท์ (Bilingual Glossary)

| Term (EN) | คำศัพท์ / ความหมาย (TH) |
|---|---|
| **Common / Special Cause** | ความแปรปรวนปกติของระบบ / ความแปรปรวนจากสาเหตุพิเศษที่ระบุตัวได้ |
| **Tampering** | การปรับแต่งกระบวนการตามสัญญาณรบกวนปกติ จนความแปรปรวนยิ่งเพิ่มขึ้น |
| **First Pass Yield (FPY)** | สัดส่วนชิ้นงานที่ดีตั้งแต่ครั้งแรกโดยไม่ต้องซ่อม (ผลคูณข้ามสถานี) |
| **Sampling Error vs Bias** | ความคลาดเคลื่อนจากการสุ่มบางส่วน (ลดได้ด้วย $n$) vs ความเอนเอียงจากวิธีสุ่มผิด |
| **Z-Score** | ระยะห่างจากค่าเฉลี่ยในหน่วยจำนวนเท่าของส่วนเบี่ยงเบนมาตรฐาน ($\sigma$) |
| **Normality Test (`p >= 0.05`)** | การทดสอบว่าข้อมูลแจกแจงปกติหรือไม่ ก่อนใช้สูตร Z หรือ Cpk มาตรฐาน |
| **Central Limit Theorem (CLT)** | ทฤษฎีบทขีดจำกัดกลาง: ค่าเฉลี่ย $\bar{X}$ ลู่เข้า Normal เสมอเมื่อ $n$ ใหญ่พอ |
| **Standard Error ($\sigma_{\bar{x}}$)** | ส่วนเบี่ยงเบนมาตรฐานของค่าเฉลี่ยกลุ่มตัวอย่าง ($\sigma / \sqrt{n}$) |
