# Curriculum Master Roadmap (Modules 1–10)

แผนแม่บทหลักสูตร **SPC & Manufacturing Statistics Online Training** ครอบคลุมทั้ง 10 Modules พร้อมจุดเน้นทางเทคนิค แผน Animation/Interactive และชุดข้อมูล Workshop

---

## Module 1 : Statistics Foundation for Manufacturing (พื้นฐานสถิติสำหรับงานวิศวกรรม)
- **สถานะ:** ✅ พร้อมใช้งานใน [modules/module-01/](modules/module-01/)
- **เนื้อหาหลัก:**
  - `1.1` Why Statistics in Manufacturing? (Data-Driven Decision, COPQ, Factory Examples, Statistical Thinking)
  - `1.2` Types of Data (Variable vs Attribute, Continuous vs Discrete, Nominal/Ordinal/Interval/Ratio) + Workshop จำแนกข้อมูลจริง
  - `1.3` Descriptive Statistics (Mean, Median, Mode, Range, Variance, Standard Deviation, CV)
  - `1.4` Data Visualization (Histogram, Box Plot, Pareto Chart, Scatter Plot, Run Chart) + Workshop สร้าง/แปลผลกราฟจาก Defect & Dimension จริง
- **Interactive / Animation:** COPQ Calculator, 4M1E Variation Explorer, Drag-and-Drop Data Classification, Sigma Slider Simulator, Chart Selection Matrix

---

## Module 2 : Probability and Distribution
- **สถานะ:** ✅ พร้อมใช้งานใน [modules/module-02/](modules/module-02/)
- **เนื้อหาหลัก:**
  - `2.1` Concept of Variation (Common Cause vs Special Cause Variation)
  - `2.2` Probability Basics (Probability Concept, Sampling, Population vs Sample)
  - `2.3` Probability Distribution (Normal, Binomial, Poisson Distribution — เชื่อมโยงไป Variable vs Attribute SPC)
  - `2.4` Central Limit Theorem (หลักการสำคัญของ SPC และ Sampling Distribution)
  - **Workshop:** วิเคราะห์ข้อมูล CTQ ของชิ้นงานจริง (Normality Check & Z-score)
- **จุดเน้นเพิ่มเติม:** แสดงให้เห็นว่าทำไม Raw Data ที่เบ้ (Skewed) พอสุ่มเป็น Subgroup $\bar{X}$ แล้วจึงเข้าใกล้ Normal Distribution ทำให้ Control Chart ใช้งานได้
- **Interactive / Animation:** **CLT Live Simulator** (เลือก Shape ประชากร + ปรับ `n = 1, 5, 10, 30` แล้วดูกราฟ Sampling Distribution แปลงร่างเป็น Normal), Common vs Special Cause Simulator

---

## Module 3 : Confidence and Hypothesis Testing
- **สถานะ:** ✅ พร้อมใช้งานใน [modules/module-03/](modules/module-03/)
- **เนื้อหาหลัก:**
  - `3.1` Sampling Strategy (Random, Stratified, Rational Subgroup)
  - `3.2` Confidence Interval (Confidence Level, Margin of Error)
  - `3.3` Hypothesis Testing ($H_0$ และ $H_1$, $\alpha$ Risk / Type I Error, $\beta$ Risk / Type II Error, p-value)
  - `3.4` Practical Test (1-Sample T-Test, 2-Sample T-Test, ANOVA Concept Intro)
  - **Workshop:** เปรียบเทียบ Machine A vs Machine B
- **จุดเน้นเพิ่มเติม:** เพิ่มขั้นตอนตรวจสอบ Assumption ก่อนทำ T-test (Normality Test + Equal Variance Test) และการแยก Statistical Significance vs Practical Significance
- **Interactive / Animation:** **Alpha vs Beta Risk Visualizer** (เลื่อน Sample Size และ Effect Size เพื่อดูผลต่อ $\alpha, \beta$, Power), Interactive Machine A vs B T-Test Lab

---

## Module 4 : Process Variation and Capability (จุดเชื่อมก่อนเข้า SPC)
- **สถานะ:** ✅ พร้อมใช้งานใน [modules/module-04/](modules/module-04/)
- **เนื้อหาหลัก:**
  - `4.1` Understanding Process Variation (Voice of Process vs Voice of Customer, 4-Quadrant Matrix)
  - `4.2` Specification vs Process (USL, LSL, Target, Taguchi Loss, Bilateral vs Unilateral Specs, 3 Limits)
  - `4.3` Process Capability Index ($C_p, C_{pk}, P_p, P_{pk}$ — ความต่างของ $\hat{\sigma}_{\text{within}}$ vs $s_{\text{overall}}$, PPM Conversion)
  - `4.4` AIAG/VDA & JEDEC Standard Requirements (3 Prerequisite Gates, PPAP `1.67` vs Ongoing `1.33`, JEDEC Semiconductor 1-Sided/Non-Normal/OCAP)
  - **Workshop:** คำนวณ $C_p/C_{pk}/P_p/P_{pk}$ จากข้อมูล Pin Length 100 ชิ้น (`20 Subgroups × 5`) พร้อมวินิจฉัย Shift กะดึก
- **Interactive / Animation:** **Cp vs Cpk Interactive Playground** (Slider ปรับ Mean Shift และ $\sigma$ พร้อมสลับ Spec 2 ด้าน/1 ด้าน แสดงค่า Cp, Cpk, Expected PPM แบบ Real-time) + **AIAG/VDA & JEDEC Release Gate Simulator**

---

## Module 5 : SPC Concept and Methodology
- **สถานะ:** 📋 Planned
- **เนื้อหาหลัก:**
  - `5.1` Introduction to SPC (History, Walter Shewhart Concept, AIAG SPC Framework, JEDEC Standard)
  - `5.2` Control Chart Principle (Natural Variation, UCL/CL/LCL vs USL/LSL — ความแตกต่างที่สำคัญที่สุด)
  - `5.3` Stability Assessment (Process Stability, Out of Control Condition)
  - `5.4` Western Electric Rules (Rule 1–4 + เปรียบเทียบกับ Nelson Rules เพื่อป้องกัน False Alarm)
  - **Workshop:** หา Special Cause จาก Control Chart
- **Interactive / Animation:** **Western Electric Rules Trigger Lab** (กดจำลอง Point Beyond 3$\sigma$, 2 of 3, 4 of 5, 8 in a row / Run / Trend แล้วดูการแจ้งเตือนและคำอธิบาย Root Cause เบื้องต้น)

---

## Module 6 : Control Chart Selection (เลือก Chart ให้ถูกต้อง)
- **สถานะ:** 📋 Planned
- **เนื้อหาหลัก:**
  - `6.1` Variable Data Control Chart (I-MR Chart, $\bar{X}$-$R$ Chart สำหรับ $n=2\text{–}10$, $\bar{X}$-$S$ Chart สำหรับ $n>10$ + ตารางค่าคงที่ $A_2, D_3, D_4, d_2, c_4$)
  - `6.2` Attribute Chart (P Chart, NP Chart, C Chart, U Chart — แยก Defective vs Defect และ Constant vs Varying Sample Size)
  - `6.3` Control Chart Selection Matrix
  - **Workshop:** เลือก Chart จาก Case Study 10 สถานการณ์
- **Interactive / Animation:** **Interactive Chart Selection Wizard** (ตอบคำถามทีละขั้นแล้วแนะนำ Chart ที่ถูกต้อง + เกมฝึกตัดสินใจ 10 สถานการณ์พร้อม Feedback)

---

## Module 7 : SPC for Manufacturing Process (SPC ในโรงงาน)
- **สถานะ:** 📋 Planned
- **เนื้อหาหลัก:**
  - `7.1` SPC Implementation Roadmap (Identify CTQ, Select Process, Data Collection, Sampling Plan)
  - `7.2` SPC in Production Line (Machining, Assembly, Injection, Stamping — ตัวอย่าง CTQ และ Rational Subgroup ของแต่ละกระบวนการ)
  - `7.3` SPC and Process Monitoring (Reaction Plan, Escalation Process)
  - `7.4` Layered Process Audit (LPA) and SPC
  - **Workshop:** ออกแบบ SPC Monitoring Plan (เชื่อมกับ Control Plan)
- **Interactive / Animation:** Interactive Production Line CTQ & Subgroup Planner + Reaction/Escalation Flowchart

---

## Module 8 : SPC Problem Solving
- **สถานะ:** 📋 Planned
- **เนื้อหาหลัก:**
  - `8.1` Out of Control Action Plan (OCAP: Detection → Containment → Root Cause Analysis)
  - `8.2` SPC + 7 QC Tools (Check Sheet, Pareto, Fishbone, Histogram, Scatter, Stratification, Control Chart)
  - `8.3` SPC + Root Cause Analysis (5 Why, Fishbone, Fault Tree)
  - `8.4` SPC + Continuous Improvement (PDCA, Kaizen, DMAIC)
  - **Workshop:** Case Study จริงจาก Line Production
- **Interactive / Animation:** **Interactive OCAP Decision Simulator** (เกิดจุด Out of Control บนไลน์ → เลือกขั้นตอน Containment → Drill-down 7 QC Tools → 5 Why → ปิด Action)

---

## Module 9 : MSA Connection to SPC (หัวข้อที่ Engineer ใหม่มักไม่เข้าใจ)
- **สถานะ:** 📋 Planned
- **เนื้อหาหลัก:**
  - `9.1` Why MSA Before SPC (Measurement Error, Observed Variance $\sigma^2_{\text{obs}} = \sigma^2_{\text{part}} + \sigma^2_{\text{gage}}$, False Signal)
  - `9.2` Gage R&R Overview (Repeatability vs Reproducibility, %GRR, %Tolerance, ndc $\ge 5$)
  - `9.3` Bias
  - `9.4` Linearity
  - `9.5` Stability
  - **Workshop:** อ่านผล Gage R&R Report
- **Interactive / Animation:** **Gage R&R Impact Simulator** (ปรับ %Repeatability / %Reproducibility แล้วเห็น Control Chart เกิด False Out-of-Control Signal และเห็นค่า Cpk จริงถูกกดต่ำลง)

---

## Module 10 : Industrial Case Study (AIAG-Based)
- **สถานะ:** 📋 Planned
- **เนื้อหาหลัก & Workshop ครบวงจร:**
  - **Case 1:** Machining Process — Diameter Control ($\bar{X}$-$R$ Chart + $C_p/C_{pk}$)
  - **Case 2:** Assembly Process — Torque Monitoring ($I$-$MR$ Chart)
  - **Case 3:** Defect Monitoring — P Chart & U Chart (Surface Defect & Assembly Scrap)
  - **Case 4:** Process Release Study — $P_{pk}$ Study & Production Trial Run (AIAG PPAP Run-at-Rate / Initial Process Study)
- **Interactive / Animation:** **Capstone SPC Case Dashboard** (โหลด Dataset จริงของ Case 1–4 วิเคราะห์ Chart, Rules, Capability และสรุป Report การตัดสินใจ Release Process)
