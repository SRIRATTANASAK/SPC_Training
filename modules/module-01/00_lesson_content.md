# Module 1 Full Lesson Content (Web & MDX Ready — 29 Screens)

เอกสารนี้คือ **เนื้อหาบนหน้าจอฉบับสมบูรณ์ (On-Screen Teaching Copy)** สำหรับนักพัฒนาเว็บนำไปแสดงผลบนหน้าเว็บ/สไลด์ (MDX/React) คู่กับเสียงบรรยายใน [02_voiceover_th_en.md](02_voiceover_th_en.md) และตัวจำลองใน [04_interactive_logic.md](04_interactive_logic.md)

---

# LESSON M1-L1: Why Statistics in Manufacturing?

## M1L1-S01 — Welcome & Variation Reality
**หัวข้อ:** ทุกกระบวนการผลิตมีความแปรปรวน (Every Process Has Variation)  
`<Asset id="AST-M1-001" />`

- **ความจริงหน้างาน:** แม้ใช้เครื่อง CNC เดิม, วัตถุดิบ Lot เดิม, และช่างคนเดิม เพลาขนาดเป้า `50.00 mm` ที่กลึงออกมาทีละชิ้นจะได้ค่าต่างกันเสมอ เช่น `49.99`, `50.01`, `50.00`, `50.02 mm`
- **วัตถุประสงค์การเรียนรู้ประจำ Module 1:**
  1. เข้าใจบทบาทของสถิติและการลดความแปรปรวนต่อต้นทุนคุณภาพ (COPQ)
  2. จำแนกชนิดข้อมูล (Variable/Attribute, Continuous/Discrete) และมาตราการวัด 4 ระดับ (NOIR) ได้แม่นยำ
  3. คำนวณและตีความสถิติเชิงพรรณนา (Mean, Median, Mode, Range, Variance, SD, CV) ได้ถูกต้อง
  4. เลือกใช้และอ่านกราฟ 5 ชนิด (Histogram, Box Plot, Pareto, Scatter, Run Chart) จากข้อมูลโรงงานจริง

---

## M1L1-S02 — Importance of Data-Driven Decision
**หัวข้อ:** ตัดสินใจด้วยข้อมูลจริง แทนการเดาด้วยความรู้สึก  
`<Asset id="AST-M1-002" />`

| มิติการตัดสินใจ | แบบเดิม (Gut Feeling / ประสบการณ์ล้วน) | แบบ Data-Driven Decision (ใช้สถิติ) |
|---|---|---|
| **การหาสาเหตุ** | ลองผิดลองถูก ปรับตั้งเครื่องไปเรื่อยๆ | วัดผลและทดสอบสมมติฐาน ชี้เป้าสาเหตุจริง |
| **มุมมองความเห็น** | เถียงกันตามความเห็นของแต่ละกะ/แผนก | ใช้ตัวเลขกลางชุดเดียวกัน คุยด้วยหลักฐาน |
| **จังหวะการแก้ไข** | รอให้ลูกค้าเคลมหรือเกิดของเสียกองโตก่อน (Reactive) | จับสัญญาณแนวโน้มก่อนหลุด Spec (Proactive) |

*(Hotspot 1: Trial & Error vs Root Cause | Hotspot 2: Opinion vs Fact | Hotspot 3: Firefighting vs Prevention)*

---

## M1L1-S03 — Cost of Poor Quality (COPQ)
**หัวข้อ:** ภูเขาน้ำแข็งแห่งความสูญเสีย (Cost of Poor Quality)  
`<Asset id="AST-M1-003" />` `<Interactive id="INT-M1-L1-02" />`

$$\text{COPQ} = \text{Prevention} + \text{Appraisal} + \text{Internal Failure} + \text{External Failure}$$

- **ส่วนยอดภูเขาน้ำแข็ง (มองเห็นง่ายในบัญชี):**
  - งานทิ้ง (**Scrap**) และ งานซ่อม (**Rework**)
- **ส่วนใต้น้ำ (ซ่อนอยู่ แต่มักใหญ่กว่า 3–5 เท่า):**
  - ค่าแรงคัดแยก (**100% Sorting**), เครื่องจักรเสียโอกาสผลิต (**Lost Capacity**), ค่าขนส่งด่วน (**Premium Freight**), ค่าเคลม (**Warranty**) และการสูญเสียความเชื่อมั่นจากลูกค้า

---

## M1L1-S04 — Factory Examples & Sources of Variation (4M1E+M)
**หัวข้อ:** ตัวอย่างการใช้สถิติในโรงงาน & 6 ปัจจัยความแปรปรวน  
`<Asset id="AST-M1-004" />` `<Asset id="AST-M1-005" />` `<Interactive id="INT-M1-L1-01" />`

- **ตัวอย่างการใช้สถิติจริงใน 4 อุตสาหกรรม:**
  1. **Machining (CNC):** คุมเส้นผ่านศูนย์กลางเพลา `50.00 ± 0.05 mm` และอายุการใช้งาน Tool Wear
  2. **Injection Molding:** คุมน้ำหนักชิ้นงาน (Shot Weight) และเปรียบเทียบความต่างระหว่าง Cavity 1–4
  3. **Stamping:** นับจำนวนครีบ (Burr) และติดตามความหนาแผ่นโลหะ
  4. **Electronics / Assembly:** คุมแรงบิดขันสกรู (Torque) และจัดอันดับ Defect ด้วย Pareto
- **6 แหล่งที่มาของความแปรปรวน (5M1E):**
  `Man (คน)` • `Machine (เครื่องจักร)` • `Material (วัตถุดิบ)` • `Method (วิธีการ)` • `Measurement (ระบบการวัด)` • `Environment (สภาพแวดล้อม)`

---

## M1L1-S05 — Statistical Thinking
**หัวข้อ:** หลักคิดเชิงสถิติ 3 ประการ (3 Pillars of Statistical Thinking)  
`<Asset id="AST-M1-004" />`

1. **All work is a process:** ทุกงานในโรงงานคือกระบวนการที่เชื่อมโยงกัน (`Input → Process → Output`)
2. **Variation exists in all processes:** ทุกกระบวนการมีความแปรปรวนอยู่เสมอ (เสถียร ≠ เท่ากันทุกชิ้น)
3. **Reduce variation systematically:** ต้องแยก **Normal Variation** ออกจาก **Abnormal Variation** ให้ได้ก่อนลงมือปรับเครื่อง มิฉะนั้นจะเกิด **Tampering (ปรับเกินความจำเป็นจนเครื่องยิ่งแกว่ง)**

---

## M1L1-S06 — Lesson 1 Knowledge Check (`KC-M1-L1`)
- ทบทวน 2 ข้อ (`M1-Q001`, `M1-Q005`) จาก [06_assessment_bank.md](06_assessment_bank.md)

---

# LESSON M1-L2: Types of Data & Measurement Scales

## M1L2-S01 — Variable Data vs Attribute Data
`<Asset id="AST-M1-006" />` `<Asset id="AST-M1-007" />`

| หัวข้อเปรียบเทียบ | Variable Data (ข้อมูลเชิงปริมาณ) | Attribute Data (ข้อมูลเชิงคุณลักษณะ) |
|---|---|---|
| **วิธีได้มา** | **วัดค่า** ด้วยเครื่องมือวัดที่มีสเกล | **นับจำนวน** หรือ **จำแนกหมวดหมู่** |
| **ตัวอย่างหน้างาน** | ความยาว (mm), น้ำหนัก (g), แรงบิด (N·m), อุณหภูมิ (°C) | Pass/Fail, Go/No-Go, จำนวน Scratch, Burr, Dent |
| **ปริมาณข้อมูลเชิงลึก** | สูง (รู้ว่าใกล้ขอบ Spec แค่ไหน ใช้ตัวอย่างน้อย) | ต่ำกว่า (รู้แค่ผ่าน/ไม่ผ่าน ต้องใช้ตัวอย่างเยอะ) |
| **Control Chart ที่ใช้** | $\bar{X}\text{-}R$, $\bar{X}\text{-}S$, $I\text{-}MR$ | $P$, $NP$, $C$, $U$ |

---

## M1L2-S02 — Continuous vs Discrete Data
`<Asset id="AST-M1-008" />` `<Asset id="AST-M1-009" />`

- **Continuous Data (ข้อมูลต่อเนื่อง):** แบ่งย่อยเป็นทศนิยมได้ไม่สิ้นสุดขึ้นกับความละเอียดเครื่องมือวัด เช่น `50.00`, `50.01`, `50.014 mm`
- **Discrete Data (ข้อมูลไม่ต่อเนื่อง):** เป็นจำนวนนับเต็มหน่วย (`0, 1, 2, 3 จุดเสีย`) หรือหมวดหมู่ที่ชัดเจน (`Day / Night`, `Pass / Fail`)
- **ข้อควรระวังหน้างาน:** หากใช้เครื่องมือวัดที่หยาบเกินไป (Resolution ต่ำ เช่น อ่านได้ทีละ `0.5 mm`) ข้อมูล Continuous อาจเรียงเป็นขั้นๆ เหมือน Discrete (Chunky Data) จนนำไปวิเคราะห์ SPC ได้ไม่แม่นยำ

---

## M1L2-S03 — Measurement Scales (NOIR)
`<Asset id="AST-M1-010" />`

| Scale | ความหมาย | ตัวอย่างโรงงาน | สถิติที่ใช้ได้ | ข้อควรระวัง |
|---|---|---|---|---|
| **N — Nominal** | ชื่อ/ป้ายกำกับ (เรียงลำดับไม่ได้) | รหัสกะ (`Day/Night`), ประเภท Defect, **`Cavity 1,2,3,4`** | Mode, % สัดส่วน, Pareto | **ห้ามหา Mean เด็ดขาด** |
| **O — Ordinal** | จัดอันดับได้ แต่ช่วงห่างไม่เท่ากัน | เกรดผิว (`Poor/Fair/Good`), คะแนน `1–5 ดาว`, ระดับทักษะ | Median, Mode, Percentile | ระยะห่าง `1→2` ≠ `4→5` |
| **I — Interval** | ช่วงห่างเท่ากัน แต่ **ไม่มีศูนย์แท้** | อุณหภูมิ `°C` / `°F` | Mean, SD, Variance, Range | พูดว่า `40°C ร้อนเป็น 2 เท่าของ 20°C` **ไม่ได้** |
| **R — Ratio** | ช่วงห่างเท่ากัน และ **มีศูนย์แท้ (True Zero)** | ความยาว (`mm`), น้ำหนัก (`g`), Torque (`N·m`), จำนวน Defect | **ใช้ได้ทุกตัว** (Mean, SD, CV, % สัดส่วน) | เป็น Scale ที่ทรงพลังที่สุดในวิศวกรรม |

---

## M1L2-S04 — Workshop 1: จำแนกข้อมูลจริงในโรงงาน
`<Interactive id="INT-M1-L2-01" />` `<Interactive id="INT-M1-L2-02" />`
- ใช้ชุดข้อมูลจริง 20 รายการจาก [data/workshop_m1_data_classification.csv](data/workshop_m1_data_classification.csv)
- ลากวางแยก Variable / Attribute และจับคู่ Measurement Scale (`Nominal / Ordinal / Interval / Ratio`)

## M1L2-S05 — Feedback & Rationale Layer
สรุป 3 กับดักที่พบบ่อยจาก Workshop 1:
1. **Go / No-Go Plug Gauge** → เป็น **Attribute (Nominal)** แม้ใช้ตรวจขนาดเพลา
2. **หมายเลข Cavity (1, 2, 3, 4)** → เป็น **Attribute (Nominal)** ไม่ใช่ Ratio
3. **อุณหภูมิ °C** → เป็น **Variable Continuous (Interval)** ไม่ใช่ Ratio

## M1L2-S06 — Lesson 2 Summary & Knowledge Check (`KC-M1-L2`)
- ทบทวน 2 ข้อ (`M1-Q012`, `M1-Q018`) จาก [06_assessment_bank.md](06_assessment_bank.md)

---

# LESSON M1-L3: Descriptive Statistics

*(ใช้ตัวอย่างเพลาจากเครื่อง `MC-A` 5 ชิ้นแรก: `50.00, 50.01, 49.99, 50.02, 50.00 mm` เพื่อแสดงวิธีคำนวณจริง)*

## M1L3-S01 — Mean ($\bar{x}$ — ค่าเฉลี่ย)
`<Asset id="AST-M1-011" />` `<Interactive id="INT-M1-L3-01" />`

$$\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}$$

- **ตัวอย่างคำนวณ:** $\bar{x} = \frac{50.00 + 50.01 + 49.99 + 50.02 + 50.00}{5} = \frac{250.02}{5} = 50.004\text{ mm}$
- **การใช้หน้างาน:** วัด **Process Centering** (อยู่ตรง Target หรือเยื้อง)
- **จุดอ่อน:** ไวต่อ Outlier มาก (ถ้าชิ้นที่ 5 เพี้ยนเป็น `50.50` ค่า Mean จะกระโดดไปที่ `50.100 mm` ทันที!)

## M1L3-S02 — Median (ค่ามัธยฐาน)
`<Asset id="AST-M1-012" />`

- **วิธีหา:** เรียงข้อมูลจากน้อยไปมาก: `49.99, 50.00, [50.00], 50.01, 50.02` → **Median = `50.00 mm`** (ถ้า $n$ เป็นเลขคู่ ให้เอา 2 ตัวกลางมาบวกกันหาร 2)
- **ข้อดี:** ทนทานต่อ Outlier (แม้เปลี่ยน `50.02` เป็น `50.50` ค่า Median ยังคงเป็น `50.00 mm`!) เหมาะกับข้อมูลที่เบ้ (Skewed) เช่น Lead Time หรือ Cycle Time ที่มีสะดุดเป็นบางครั้ง

## M1L3-S03 — Mode (ฐานนิยม)
`<Asset id="AST-M1-013" />`

- **วิธีหา:** ค่าที่เกิดซ้ำบ่อยที่สุด → ในชุดตัวอย่าง `50.00 mm` ซ้ำ 2 ครั้ง → **Mode = `50.00 mm`**
- **ประโยชน์สำคัญ:** ใช้ได้กับข้อมูลหมวดหมู่ (Nominal เช่น Defect ที่เจอบ่อยที่สุด) และหากพบ **Bimodal (มี 2 ยอด)** บนกราฟขนาดชิ้นงาน แสดงว่าอาจมี 2 เครื่องจักร, 2 กะ, หรือ 2 แม่พิมพ์ผสมกันอยู่

## M1L3-S04 — Range ($R$ — พิสัย)
`<Asset id="AST-M1-014" />`

$$R = X_{\max} - X_{\min}$$

- **ตัวอย่างคำนวณ (ทั้งหมด 30 ชิ้นใน Workshop 2):** $R = 50.14 - 49.98 = 0.16\text{ mm}$
- **ข้อดี/ข้อจำกัด:** คำนวณไวมากสำหรับ Subgroup เล็ก ($n = 2\text{–}10$ ใน $\bar{X}\text{-}R$ Chart) แต่ดูเพียง 2 จุดปลายสุด จึงไม่เหมาะกับชุดข้อมูลใหญ่ ($n > 10$)

## M1L3-S05 — Variance ($s^2$ — ความแปรปรวน)
`<Asset id="AST-M1-015" />`

$$s^2 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n - 1}$$

- **ตัวอย่างคำนวณ (`50.00, 50.01, 49.99, 50.02, 50.00`, $\bar{x} = 50.004$):**
  1. หาค่าเบี่ยงเบน $(x_i - \bar{x})$: `-0.004, +0.006, -0.014, +0.016, -0.004`
  2. ยกกำลังสอง (เพื่อไม่ให้บวกลบหักล้างกัน): `0.000016 + 0.000036 + 0.000196 + 0.000256 + 0.000016 = 0.000520`
  3. หารด้วย $n - 1 = 4$: $s^2 = 0.000520 / 4 = 0.000130\text{ mm}^2$

## M1L3-S06 — Standard Deviation ($s$ / $\sigma$ — ส่วนเบี่ยงเบนมาตรฐาน)
`<Asset id="AST-M1-016" />`

$$s = \sqrt{s^2} = \sqrt{0.000130} \approx 0.0114\text{ mm}$$

- **ข้อดี:** หน่วยกลับมาเป็น **mm** เดียวกับชิ้นงานจริง!
- **Empirical Rule (สำหรับ Normal Distribution):**
  - $\bar{x} \pm 1\sigma$ ครอบคลุม **~68.27%** ของชิ้นงาน
  - $\bar{x} \pm 2\sigma$ ครอบคลุม **~95.45%** ของชิ้นงาน
  - $\bar{x} \pm 3\sigma$ ครอบคลุม **~99.73%** ของชิ้นงาน *(หัวใจของเส้น Control Limit ใน SPC!)*

## M1L3-S07 — Coefficient of Variation (CV — สัมประสิทธิ์การแปรผัน)
`<Asset id="AST-M1-017" />`

$$CV = \left(\frac{s}{\bar{x}}\right) \times 100\%$$

- **ตัวอย่างเทียบข้ามขนาด:**
  - พินเล็ก (`Mean = 10 mm, SD = 0.2 mm`) → $CV = (0.2 / 10) \times 100\% = 2.0\%$
  - เพลายาว (`Mean = 500 mm, SD = 2.0 mm`) → $CV = (2.0 / 500) \times 100\% = 0.4\%$ → **สายเพลายาวนิ่งกว่าเมื่อเทียบสัดส่วนขนาด!**
- **ตัวอย่างในชุดข้อมูล Workshop 2:** `MC-A` มี `CV = 0.0304%` ส่วน `MC-B` มี `CV = 0.0606%` (แกว่งกว่า 2 เท่า)

## M1L3-S08 — Sigma Simulator & Statistics Match Game
`<Interactive id="INT-M1-L3-02" />` `<Interactive id="INT-M1-L3-03" />`
- เลื่อนค่า Sigma (`0.1` – `3.0`) เทียบกับเส้น Spec (`LSL / USL`) และเล่นเกมจับคู่คำศัพท์สถิติ 7 คำ

## M1L3-S09 — Lesson 3 Knowledge Check (`KC-M1-L3`)
- ทบทวน 5 ข้อ (`M1-Q031`, `M1-Q035`, `M1-Q040`, `M1-Q044`, `M1-Q048`)

---

# LESSON M1-L4: Data Visualization & Final Assessment

## M1L4-S01 — Why Visualize Data?
`<Asset id="AST-M1-018" />`
- ตารางข้อมูล 30 แถวดูด้วยตาเปล่าอาจไม่เห็นความผิดปกติ แต่กราฟช่วยเปิดเผย **รูปร่าง (Shape), กลุ่มปัญหาใหญ่ (Vital Few), ความสัมพันธ์ (Correlation), และแนวโน้มตามเวลา (Drift)** ภายใน 3 วินาที

## M1L4-S02 — Histogram (ดูรูปร่างการกระจายตัว)
`<Asset id="AST-M1-018" />`

| รูปร่างที่พบ | ชื่อเรียก | สาเหตุที่มักพบในโรงงาน |
|---|---|---|
| ระฆังคว่ำสมมาตร | Normal / Bell-shaped | กระบวนการเสถียรตามธรรมชาติ (Common cause เท่านั้น) |
| หางยาวข้างเดียว | Skewed (Right/Left) | มีขีดจำกัดทางกายภาพด้านหนึ่ง หรือเกิด Tool wear ไหลทางเดียว |
| สองยอด | Bimodal | ข้อมูลจาก 2 เครื่องจักร, 2 กะ, หรือ 2 Cavity ผสมกัน |
| ขอบตัดตรงเป็นหน้าผา | Cliff / Truncated | มีการคัดงานเสีย (100% Sorting) ทิ้งไปก่อนบันทึกข้อมูล! |

## M1L4-S03 — Box Plot (เปรียบเทียบหลายกลุ่ม & จับ Outlier)
`<Asset id="AST-M1-020" />`
- **องค์ประกอบ 5 จุด:** `Min` (ปลาย Whisker ล่าง), `Q1` (25%), `Median` (เส้นกลางกล่อง 50%), `Q3` (75%), `Max` (ปลาย Whisker บน) และ **จุด Outlier** (`> Q3 + 1.5×IQR` หรือ `< Q1 − 1.5×IQR`)
- **ผลจากข้อมูล Workshop 2:** `MC-A` กล่องแคบกลาง Target (`IQR = 0.02 mm`) ส่วน `MC-B` เลื่อนสูง (`Median = 50.04 mm`) และพบจุด Outlier ชัดเจนที่ `50.14 mm`!

## M1L4-S04 — Pareto Chart (กฎ 80/20 จัดลำดับความสำคัญ)
`<Asset id="AST-M1-019" />`
- เรียงแท่งความถี่จากมากไปน้อย + เส้น **Cumulative %**
- **ผลจากข้อมูล Workshop 2 (รวม 15 Defects):**
  - `Scratch`: 9 (`60.0%`) → `Burr`: 4 (`26.7%`, สะสม **`86.7%`**) → `Dent`: 1 (`6.7%`) → `Crack`: 1 (`6.7%`)
  - **Action:** แก้เพียง 2 หัวข้อแรก (`Scratch + Burr`) จะลดของเสียได้ถึง **86.7%**!

## M1L4-S05 — Scatter Plot (ความสัมพันธ์ระหว่าง 2 ตัวแปร)
`<Asset id="AST-M1-019" />`
- พล็อตตัวแปรต้น $X$ (แกนนอน) กับตัวแปรผล $Y$ (แกนตั้ง) เพื่อประเมินทิศทางและความแรงของสหสัมพันธ์ ($r \in [-1, +1]$)
- **ผลจากข้อมูล Workshop 2:** `Mold_Temp_C` vs `Shaft_Diameter_mm` ให้ค่า **$r = +0.9949$** (สหสัมพันธ์เชิงบวกสูงมาก)
- **คำเตือนทองคำ:** **Correlation ≠ Causation** — ต้องทดสอบยืนยันเชิงวิศวกรรมเสมอว่าไม่ใช่ตัวแปรแฝง (Confounding Factor)

## M1L4-S06 — Run Chart (แนวโน้มตามลำดับเวลา)
`<Asset id="AST-M1-020" />`
- **ทำไมต้องมี Run Chart ทั้งที่มี Histogram แล้ว?** เพราะ Histogram มองไม่เห็น **ลำดับเวลา (Time Order)**!
- **ผลจากข้อมูล Workshop 2:** เมื่อพล็อต `Sample 1..30` ตามเวลา `08:00–16:30` จะเห็นชัดทันทีว่าช่วงเช้า (`MC-A`) นิ่ง แต่ช่วงบ่าย (`MC-B`) ขนาดเพลาค่อยๆ ไหลสูงขึ้นเรื่อยๆ (**Upward Drift**) จนทะลุ USL (`50.05 mm`)
- *จุดเชื่อมสู่ Module 5:* เมื่อเติมเส้น **UCL / CL / LCL** ลงใน Run Chart ก็จะได้ **SPC Control Chart**!

## M1L4-S07 — Workshop 2: Real Defect & Dimension Visualization
`<Interactive id="INT-M1-L4-01" />` `<Interactive id="INT-M1-L4-02" />`
- ดาวน์โหลดและวิเคราะห์ชุดข้อมูลจริง [data/workshop_m1_dimensions_and_defects.csv](data/workshop_m1_dimensions_and_defects.csv) ดูคู่มือเฉลยใน [07_workshop_guide.md](07_workshop_guide.md)

## M1L4-S08 — Module 1 Final Assessment (`EXAM-M1`)
- สอบประมวลผลสุ่ม **20 ข้อ** จากคลัง [06_assessment_bank.md](06_assessment_bank.md) (`M1-Q001`–`M1-Q060`) | เกณฑ์ผ่าน **80% (`16/20`)**
