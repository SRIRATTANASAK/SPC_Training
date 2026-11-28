# Module 1 Quick Reference: Formula Cheat Sheet & Glossary

เอกสารอ้างอิงสำหรับปุ่ม **`Resources`** บนหน้าเว็บอบรม (1 หน้าจบ พิมพ์ติดหน้าไลน์หรือเปิดดูขณะทำ Workshop ได้)

---

## 1. ตารางจำแนกชนิดข้อมูลและเครื่องมือที่เลือกใช้

| คำถามหน้างาน | Variable Data | Attribute Data |
|---|---|---|
| **ได้มาอย่างไร?** | วัดค่าด้วยเครื่องมือมีสเกล (`mm`, `g`, `N·m`, `°C`) | นับจำนวนชิ้น/จุดเสีย หรือจัดกลุ่ม (`Pass/Fail`, `Go/No-Go`) |
| **Scale ที่พบบ่อย** | Interval (`°C`), Ratio (`mm`, `g`, `sec`) | Nominal (`Defect Type`, `Cavity ID`), Ordinal (`Grade 1–5`), Ratio (`Count`) |
| **สถิติที่เหมาะสม** | Mean, Median, Range, Variance, SD, CV | Mode, Count, Proportion (`%`), Defect per Unit |
| **กราฟเบื้องต้น** | Histogram, Box Plot, Scatter Plot, Run Chart | Pareto Chart, Bar Chart |

---

## 2. สูตรสถิติเชิงพรรณนา (Descriptive Statistics)

| ตัวชี้วัด | สูตร | ใช้ทำอะไร / จุดระวัง |
|---|---|---|
| **Mean ($\bar{x}$)** | $\bar{x} = \dfrac{\sum x_i}{n}$ | บอกตำแหน่งศูนย์กลาง (Process Centering) — *ไวต่อ Outlier* |
| **Median** | ค่ากลางเมื่อเรียงข้อมูลจากน้อย→มาก | ใช้แทน Mean เมื่อข้อมูลเบ้หรือมี Outlier |
| **Mode** | ค่าที่เกิดซ้ำมากที่สุด | ใช้ได้กับ Nominal; พบ 2 ยอด (Bimodal) = อาจมี 2 เครื่อง/กะปนกัน |
| **Range ($R$)** | $R = X_{\max} - X_{\min}$ | คำนวณไวหน้างาน ($n \le 10$); ใช้แค่ 2 ค่าหัวท้าย |
| **Sample Variance ($s^2$)** | $s^2 = \dfrac{\sum (x_i - \bar{x})^2}{n - 1}$ | วัดการกระจายตัวของข้อมูลทุกตัว (หน่วยยกกำลังสอง) |
| **Sample SD ($s$)** | $s = \sqrt{s^2}$ | หน่วยเดียวกับชิ้นงานจริง; $\pm 3\sigma \approx 99.73\%$ (Normal) |
| **CV (%)** | $CV = \left(\dfrac{s}{\bar{x}}\right) \times 100\%$ | เทียบความนิ่งระหว่างกระบวนการที่ขนาด/หน่วยต่างกัน |

---

## 3. เลือกกราฟให้ตรงโจทย์ (5 Core Charts)

- **อยากดูรูปร่างการกระจายตัว & เทียบ Spec** → **Histogram** *(ระวัง Cliff shape = มี Sorting)*
- **อยากเทียบหลายเครื่องจักร / หลายกะ & หา Outlier** → **Box Plot** *(Q1, Median, Q3, Outlier)*
- **อยากจัดลำดับปัญหาใหญ่สุดเพื่อลดของเสีย 80/20 (ค่าประมาณเพื่อการสอน)** → **Pareto Chart** *(Bars + Cumulative %)*
- **อยากเช็คความสัมพันธ์ระหว่างตัวแปร $X$ กับ $Y$** → **Scatter Plot** *(Correlation ≠ Causation)*
- **อยากเห็นการไหล (Drift) หรือความเปลี่ยนตามเวลา** → **Run Chart** *(ฐานก่อนเข้า Control Chart)*

---

## 4. อภิธานศัพท์วิศวกรรม (Bilingual Glossary)

| Term (EN) | คำศัพท์ / ความหมาย (TH) |
|---|---|
| **Variation** | ความแปรปรวน — ความแตกต่างของผลลัพธ์จากกระบวนการผลิตแม้ตั้งค่าเหมือนเดิม |
| **COPQ (Cost of Poor Quality)** | ต้นทุนความสูญเสียจากคุณภาพต่ำ: COPQ = Internal Failure + External Failure (โดย COQ = Cost of Conformance + COPQ) |
| **Data-Driven Decision** | การตัดสินใจบนฐานข้อมูลและหลักฐานทางสถิติ |
| **Statistical Thinking** | การคิดเชิงสถิติเพื่อแยก Normal Variation ออกจาก Abnormal Variation ก่อนปรับตั้งเครื่อง |
| **Variable / Continuous Data** | ข้อมูลเชิงปริมาณแบบวัดค่าต่อเนื่องบนสเกล (เช่น mm, g, N·m) |
| **Attribute / Discrete Data** | ข้อมูลเชิงคุณลักษณะจากการนับจำนวนเต็มหรือจัดหมวดหมู่ (เช่น Pass/Fail, จำนวนแผล) |
| **Measurement Scale (NOIR)** | ระดับมาตราการวัด: Nominal (ชื่อ), Ordinal (อันดับ), Interval (ช่วงไม่มีศูนย์แท้), Ratio (มีศูนย์แท้) |
| **Outlier** | ค่าผิดปกติที่โดดแยกออกจากกลุ่มข้อมูลส่วนใหญ่ |
| **Bimodal Distribution** | การกระจายตัวที่มี 2 ยอด มักเกิดจากข้อมูล 2 แหล่ง (เช่น 2 เครื่อง/กะ) ปนกัน |
| **Empirical Rule (68–95–99.7)** | สัดส่วนข้อมูลในการแจกแจงปกติภายใน $\pm 1\sigma$, $\pm 2\sigma$, $\pm 3\sigma$ |
| **CTQ (Critical to Quality)** | คุณลักษณะสำคัญของชิ้นงานที่มีผลโดยตรงต่อความพึงพอใจลูกค้าและฟังก์ชันการทำงาน |
| **Tampering / Over-adjustment** | การเข้าไปปรับเครื่องจักรตามความแปรปรวนปกติ จนทำให้กระบวนการยิ่งแกว่งกว้างขึ้น |
