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
- **สถานะ:** ✅ พร้อมใช้งานใน [modules/module-05/](modules/module-05/)
- **เนื้อหาหลัก:**
  - `5.1` Introduction to SPC (History, Walter Shewhart Concept, AIAG SPC Framework, JEDEC `JESD557`)
  - `5.2` Control Chart Principle (Natural Variation, `UCL/CL/LCL` vs `USL/LSL`, Phase I Trial vs Phase II Frozen Limits)
  - `5.3` Stability Assessment (Reading $R$ Before $\bar{X}$, 6 Special Cause Signatures, Tampering & Early OOC Warning)
  - `5.4` Western Electric Rules (`1–4`), Nelson Rules (`5–8`), `ARL` Trade-off, **SPC Rule Selection Strategy** (`Mandatory Rules`: Rule 1 ขอบเขตที่ Valid + `Raw Data vs Spec Limits`, ข้อยกเว้น `LCL < 0` บน Lower-is-Better และ `LCL = 0` บน Variation Chart, การเลือก `≥ 1 Optional Rule` ด้วย Engineering Judgement & Process Characteristic) & OCAP Hook
  - **Workshop:** หา Special Cause จาก Control Chart ข้อมูล Shaft OD 125 ชิ้น (`25 Subgroups × 5`)
- **Interactive / Animation:** **Western Electric, Nelson & Rule Selection Trigger Lab** (สลับ Process Profile + กดจำลองทั้ง 7 อาการและเลือก Mandatory/Optional Rules ดูค่า `ARL`) + **Rule Selection & Zero-Bound Animation (`AST-M5-020`)** + **Phase I/II Control vs Spec Builder** + **6-Pattern Diagnosis Matcher**

---

## Module 6 : Control Chart Selection (เลือก Chart ให้ถูกต้อง)
- **สถานะ:** ✅ พร้อมใช้งานใน [modules/module-06/](modules/module-06/)
- **เนื้อหาหลัก:**
  - `6.1` Variable Data Control Chart (I-MR Chart, $\bar{X}$-$R$ Chart สำหรับ $n=2\text{–}10$, $\bar{X}$-$S$ Chart สำหรับ $n>10$ + ตารางค่าคงที่ $E_2, A_2, D_3, D_4, d_2, A_3, B_3, B_4, c_4$)
  - `6.2` Attribute Chart (`p, np, c, u` Chart — แยก Defective vs Defect, Constant vs Varying Sample Size, Zero-Bound `LCL < 0` & Big-`n` Overdispersion `Laney p'/u'`)
  - `6.3` Control Chart Selection Decision Tree, Master Matrix & Top 5 Mistakes
  - **Workshop:** Part A เลือก Chart จาก Case Study 10 สถานการณ์ (`SCEN-01..10`) + Part B คำนวณจริง `p` vs `u` Chart จากข้อมูล 20 Lots (`∑n = 2,835`)
- **Interactive / Animation:** **Interactive Chart Selection Wizard** (ตอบคำถาม 3 ขั้นแล้วแนะนำ Chart + สูตร + กฎ LCL) + **10-Scenario Decision Game** + **Attribute Staircase & Variable Efficiency Labs**

---

## Module 7 : SPC for Manufacturing Process (SPC ในโรงงาน)
- **สถานะ:** ✅ พร้อมใช้งานใน [modules/module-07/](modules/module-07/)
- **เนื้อหาหลัก:**
  - `7.1` SPC Implementation Roadmap (`4-Phase Roadmap`: Identify CTQ via PFMEA, MSA & Chart Selection, Rational Subgroup & Sampling Containment Risk `Line Rate × Interval`, Deployment)
  - `7.2` SPC in Production Line (`4 Core Processes`: Machining, Assembly & SMT Electronics, Injection Molding Multi-Cavity Stratification, Stamping & Coil Changeover)
  - `7.3` SPC & Process Monitoring (Real-Time Plotting vs "Wallpaper SPC", Actionable Reaction Plan & `3-Tier Escalation Matrix / SLA`: Tier 1 `0–15m` / Tier 2 `15–60m` / Tier 3 `>60m` + OCAP)
  - `7.4` Layered Process Audit (`LPA AIAG CQI-8` 3-Layer Cadence & 6-Point Gemba Audit), Closed-Loop Ecosystem (`PFMEA ↔ Control Plan ↔ SPC ↔ LPA`) & Control Plan Workshop
  - **Workshop:** Part A ออกแบบและคำนวณ Containment Risk ใน **6-Station Control Plan (`STN-10..60`)** (`workshop_m7_control_plan_line.csv`) + Part B ปรับปรุง `STN-40` Sampling Interval (`120 → 30 min`, ลด Containment Risk `-75%` จาก `1,200 → 300 pcs`) & เขียน Actionable Reaction Plan / LPA Audit Checklist
- **Interactive / Animation:** **Sampling Risk Calculator (`INT-M7-L1-01`)**, **4-Line CTQ & Subgroup Planner (`INT-M7-L2-01`)**, **Escalation Flowchart Simulator (`INT-M7-L3-01`)**, **LPA Gemba Auditor (`INT-M7-L4-01`)**, **Control Plan Workbench (`INT-M7-L4-02`)**

---

## Module 8 : SPC Problem Solving
- **สถานะ:** ✅ พร้อมใช้งานใน [modules/module-08/](modules/module-08/)
- **เนื้อหาหลัก:**
  - `8.1` Out of Control Action Plan (`OCAP`: 5-Gate Closed-Loop Flow — Detection, `100% Backtrack Containment`, Data/Gage Verification ก่อนปรับเครื่อง, Signal Signature Map, `JESD557` Auto Lot Hold)
  - `8.2` SPC + 7 QC Tools (Check Sheet, **Stratification**, **Dual Pareto `Count` vs `COPQ`**, Histogram Bimodal/Cliff Diagnostics, Fishbone `4M1E+M`, Scatter `r` Correlation vs Causation + Control Chart Confirmation)
  - `8.3` Deep Root Cause Analysis (Direct vs Root vs Systemic Cause, **3-Legged 5 Why** + *Therefore Test*, Is/Is-Not Matrix, Fault Tree `AND/OR Gate`, **Preventive Poka-Yoke** Hierarchy)
  - `8.4` Continuous Improvement (`PDCA / Kaizen / DMAIC / 8D`), Before/After SPC Proof & Living `PFMEA / Control Plan` (`Yokoten`)
  - **Workshop:** ปิดเคสสายการผลิต `CNC Housing Bore` (`40.000 ± 0.050 mm`, `24 Subgroups × 5 = 120 ชิ้น` ใน `workshop_m8_ooc_case_study.csv` + `200 Defects` / `61,740 THB COPQ` ใน `workshop_m8_defect_pareto.csv`): จับ `SG-08..16` บน `FIX-B` (`r = -0.9955` Clamp Pressure) → ติด Pressure Switch `< 55 bar` → ยืนยัน `Ppk 0.84` (Incident `0.74`) → **`Cpk = 2.04` (`0 OOC`)**
- **Interactive / Animation:** **OCAP Gate & Containment Router (`INT-M8-L1-01`)**, **7 QC Tools Drill-Down Explorer (`INT-M8-L2-01`)**, **Fishbone `4M1E+M` Builder (`INT-M8-L2-02`)**, **5 Why & FTA Builder (`INT-M8-L3-01`)**, **Workshop Part A Investigation (`INT-M8-L4-01`)**, **Workshop Part B 8D Closure (`INT-M8-L4-02`)**

---

## Module 9 : MSA Connection to SPC (หัวข้อที่ Engineer ใหม่มักไม่เข้าใจ)
- **สถานะ:** ✅ พร้อมใช้งานใน [modules/module-09/](modules/module-09/)
- **เนื้อหาหลัก:**
  - `9.1` Why MSA Before SPC (Observed Variance $\sigma^2_{\text{obs}} = \sigma^2_{\text{part}} + \sigma^2_{\text{gage}}$, False Signal & $C_{pk}$ Deflation, `10-to-1` Resolution Rule)
  - `9.2` Gage R&R (`Repeatability EV` vs `Reproducibility AV`, `10×3×3` Blind & Randomized Study, `%GRR %SV` vs `%Tolerance`, `ndc >= 5`, Diagnosing `EV > AV` vs `AV > EV`)
  - `9.3` Bias (Offset from Master Gage Block & `95% CI`)
  - `9.4` Linearity (5-Point Operating Range Slope)
  - `9.5` Stability (Check Standard $\bar{X}$-$R$ Control Chart Over Time) + Attribute MSA (`Kappa >= 0.75`)
  - **Workshop:** อ่านและวินิจฉัยผล Gage R&R Report (`workshop_m9_gage_rr_study.csv`, `10 Parts × 3 Appraisers × 3 Trials = 90` การวัด, Pin OD `12.000 ± 0.100 mm`): `%GRR = 51.25%`, `%Tol = 37.74%`, `ndc = 2` (`AV = 0.01252 >> EV = 0.00126` จาก Appraiser B กดแรง `-0.022 mm`) → แก้ด้วย **Ratchet Stop Micrometer** เหลือ **`%GRR < 8%`**, `ndc >= 15`
- **Interactive / Animation:** **Gage R&R Impact Simulator (`INT-M9-L1-01`)**, **Repeatability vs Reproducibility Lab (`INT-M9-L2-01`)**, **Bias, Linearity & Stability Diagnostic (`INT-M9-L3-01`)**, **Gage R&R Report Reader Workshop (`INT-M9-L4-01`)**

---

## Module 10 : Industrial Case Study (AIAG-Based)
- **สถานะ:** 📋 Planned
- **เนื้อหาหลัก & Workshop ครบวงจร:**
  - **Case 1:** Machining Process — Diameter Control ($\bar{X}$-$R$ Chart + $C_p/C_{pk}$)
  - **Case 2:** Assembly Process — Torque Monitoring ($I$-$MR$ Chart)
  - **Case 3:** Defect Monitoring — P Chart & U Chart (Surface Defect & Assembly Scrap)
  - **Case 4:** Process Release Study — $P_{pk}$ Study & Production Trial Run (AIAG PPAP Run-at-Rate / Initial Process Study)
- **Interactive / Animation:** **Capstone SPC Case Dashboard** (โหลด Dataset จริงของ Case 1–4 วิเคราะห์ Chart, Rules, Capability และสรุป Report การตัดสินใจ Release Process)
