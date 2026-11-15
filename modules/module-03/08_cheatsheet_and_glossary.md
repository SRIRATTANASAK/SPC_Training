# Module 3 Quick Reference: Formula Cheat Sheet & Glossary

เอกสารสรุปสำหรับปุ่ม **`Resources`** ประจำ Module 3 (Confidence & Hypothesis Testing)

---

## 1. เลือกกลยุทธ์การสุ่มให้ถูกงาน (Sampling Strategy)

- **Simple Random:** ตรวจรับล็อต (IQC) เพื่อให้ทุกชิ้นมีโอกาสเท่ากัน
- **Stratified:** แบ่งกลุ่มย่อย (Cavity / Shift / Supplier) ก่อนสุ่มเพื่อไม่ให้ปัญหาถูกกลบ
- **Rational Subgroup:** เก็บชิ้นงานต่อเนื่องในเวลาสั้น (`n = 4–5`) สำหรับ SPC Control Chart

---

## 2. สูตรช่วงความเชื่อมั่นและการวางแผนตัวอย่าง

| หัวข้อ | สูตร | จุดจำสำคัญ |
|---|---|---|
| **Confidence Interval ($\bar{x}$)** | $\bar{x} \pm t_{\alpha/2, \, n-1}\left(\dfrac{s}{\sqrt{n}}\right)$ | ใช้ $t$ เมื่อไม่ทราบ $\sigma$ ประชากร |
| **Sample Size ($n$)** | $n = \left(\dfrac{Z_{\alpha/2} \cdot \sigma}{E}\right)^2$ | ลด Error ครึ่งหนึ่ง ต้องเพิ่ม $n$ **4 เท่า** |

---

## 3. ตารางความเสี่ยงในการทดสอบสมมติฐาน ($\alpha, \beta, \text{Power}$)

| ความจริง | Fail to Reject $H_0$ | Reject $H_0$ (`p < α`) |
|---|---|---|
| **$H_0$ จริง (ไม่ต่าง)** | ถูก ($1 - \alpha$) | **Type I Error ($\alpha$): False Alarm** |
| **$H_0$ เท็จ (ต่างจริง)** | **Type II Error ($\beta$): Escape / Missed** | **Power ($1 - \beta \ge 80\%$)** |

---

## 4. เลือก Practical Test ให้ถูกโจทย์ (เช็ค Normality `p ≥ 0.05` ก่อนเสมอ!)

| โจทย์หน้างาน | เครื่องมือที่เลือกใช้ | หมายเหตุสำคัญ |
|---|---|---|
| เทียบ 1 เครื่อง กับ Target ($\mu_0$) | **1-Sample T-Test** | $t = (\bar{x} - \mu_0) / (s/\sqrt{n})$ |
| เทียบ 2 กลุ่มอิสระ (เช่น MC-A vs MC-B) | **2-Sample T-Test** | ถ้า Variance ไม่เท่ากัน (`p < 0.05`) ใช้ **Welch's** |
| วัดชิ้นงานชุดเดิมซ้ำ (Before vs After / 2 Gage) | **Paired T-Test** | วิเคราะห์ผลต่างรายคู่ $d_i$ |
| เทียบ $\ge 3$ กลุ่ม (เช่น 4 Cavities) | **One-Way ANOVA** | ป้องกัน $\alpha$ Inflation + ตามด้วย Tukey |
| ข้อมูลเบ้รุนแรง (`Normality p < 0.05`, $n$ เล็ก) | **Non-parametric** | Mann-Whitney (2 กลุ่ม) / Kruskal-Wallis ($\ge 3$ กลุ่ม) |

---

## 5. อภิธานศัพท์ (Bilingual Glossary)

| Term (EN) | คำศัพท์ / ความหมาย (TH) |
|---|---|
| **Rational Subgroup** | กลุ่มตัวอย่างขนาดเล็กที่ผลิตต่อเนื่องในสภาวะเดียวกันเพื่อแยก Special Cause |
| **Confidence Interval (CI)** | ช่วงประมาณค่าพารามิเตอร์ประชากรที่ระดับความเชื่อมั่นกำหนด (เช่น 95%) |
| **Margin of Error (ME)** | ครึ่งหนึ่งของความกว้างช่วงความเชื่อมั่น |
| **Null / Alternative ($H_0 / H_1$)** | สมมติฐานตั้งต้น (ไม่มีผลต่าง) / สมมติฐานแย้ง (มีความต่าง) |
| **Alpha ($\alpha$) / Type I Error** | ความเสี่ยงเตือนผิดพลาด (Reject $H_0$ ทั้งที่ $H_0$ เป็นจริง) |
| **Beta ($\beta$) / Type II Error** | ความเสี่ยงพลาดไม่เจอปัญหา (Fail to Reject $H_0$ ทั้งที่ $H_0$ เท็จ) |
| **Statistical Power ($1 - \beta$)** | ความสามารถในการจับความต่างที่เกิดขึ้นจริง (ตั้งเป้า $\ge 80\%$) |
| **p-value** | ความน่าจะเป็นที่จะพบข้อมูลสุดโต่งเท่านี้หรือมากกว่า หาก $H_0$ เป็นจริง |
| **ANOVA ($F$-ratio)** | การวิเคราะห์ความแปรปรวนเทียบความต่างระหว่างกลุ่มต่อความแปรปรวนภายในกลุ่ม |
