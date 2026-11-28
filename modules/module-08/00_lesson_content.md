# Module 8 Full Lesson Content (Web & MDX Ready — 28 Screens)

**Module 8: SPC Problem Solving (`OCAP`, `7 QC Tools`, Root Cause Analysis, `PDCA / Kaizen / DMAIC / 8D` & Workshop)**  
เอกสารนี้คือ **เนื้อหาบนหน้าจอฉบับสมบูรณ์ (On-Screen Teaching Copy)** สำหรับนักพัฒนาเว็บนำไปสร้างหน้าเว็บ/สไลด์ (MDX/React) คู่กับเสียงบรรยายใน [02_voiceover_th_en.md](02_voiceover_th_en.md) และตัวจำลองใน [04_interactive_logic.md](04_interactive_logic.md)

---

# LESSON M8-L1: Out of Control Action Plan (`OCAP`) (`8.1`)

## M8L1-S01 — Welcome: When the Alarm Rings, What Happens Next?
`<Asset id="AST-M8-001" />`
- **จากสัญญาณเตือนสู่การปิดปัญหาถาวร:** ใน Module 7 เราเรียนรู้วิธีวาง SPC ลงสายการผลิตและสร้าง Reaction Plan / 3-Tier Escalation แล้ว — แต่เมื่อปัญหาถูกส่งต่อเข้าสู่ **Tier 2 / Tier 3 (`OCAP`)** คำถามสำคัญคือ *"เราจะสืบค้นและกำจัดต้นตออย่างไรไม่ให้ของเสียกลับมาเป็นซ้ำอีก?"*
- **มาตรฐานที่เชื่อมโยง:** **AIAG SPC (Chapter I — การปฏิบัติต่อสาเหตุ)** และ **JEDEC `JESD557C` p.9** (เอกสาร **OCAP**, สืบ **Root Cause** และ **Corrective Action** ตามความเหมาะสม)
- **วัตถุประสงค์การเรียนรู้ประจำ Module 8:**
  1. ออกแบบและดำเนินการตาม **5-Gate Out of Control Action Plan (`OCAP`)**
  2. ใช้ **7 QC Tools** ร่วมกับ Control Chart เพื่อแยกชั้น (`Stratify`), จัดลำดับ (`Pareto`), ระดมสาเหตุ (`Fishbone`), และพิสูจน์ความสัมพันธ์ (`Scatter`)
  3. วิเคราะห์ต้นตอเชิงลึกด้วย **3-Legged 5 Why**, **Is/Is-Not Matrix**, **Fault Tree Analysis (`FTA`)**, และป้องกันซ้ำด้วย **Poka-Yoke**
  4. ปิดวงจรแก้ปัญหาด้วย **PDCA / Kaizen / DMAIC / 8D** พร้อมพิสูจน์ผลบนกราฟ SPC (`Before vs After`) จากชุดข้อมูลโรงงานจริง

## M8L1-S02 — Anatomy of OCAP: The 5-Gate Closed-Loop Flow
`<Asset id="AST-M8-002" />`
- **ความหมายของ OCAP (`Out of Control Action Plan`):** แผนผังคำสั่งมาตรฐาน (**Flowchart**) ที่กำหนดขั้นตอนล่วงหน้าว่าเมื่อ Control Chart ส่งสัญญาณผิดปกติ ทีมงานต้องทำอะไรตามลำดับ **ไม่ให้คิดสดหน้าเครื่องจนเกิดการปรับมั่ว (`Tampering`)**:
  1. **Gate 1 — Detection:** ระบุชนิดสัญญาณ (เช่น `Rule 1 > UCL`, `Trend 6 pts`, `R > UCL_R`, หรือ `Raw Data > Spec`) และลงเวลาเกิดเหตุ
  2. **Gate 2 — Immediate Containment:** หยุด/Hold (แนวปฏิบัติ) สินค้าในโซนเสี่ยงย้อนหลังถึง **Last Good Subgroup (`100% Backtrack`)** ป้องกันของเสียหลุดไปสถานีถัดไปหรือลูกค้า
  3. **Gate 3 — Data & Measurement Verification:** ตรวจการคีย์ตัวเลข วัดชิ้นงานเดิมซ้ำ และตรวจเครื่องวัดเบื้องต้น (*ตัด Human/Gage Error ก่อนแตะเครื่องจักร!*)
  4. **Gate 4 — Root Cause Investigation (`RCA`):** ใช้ **7 QC Tools + 5 Why + FTA** ค้นหา Special Cause ตัวจริง
  5. **Gate 5 — Corrective Action, Verification & Closure:** แก้ต้นตอ + สร้าง **Poka-Yoke** + เก็บ Confirmation Run พิสูจน์บนกราฟ SPC + อัปเดต `PFMEA / Control Plan`

## M8L1-S03 — Gates 1–3 Deep Dive: Verify First, Contain Backwards, Never Adjust Blindly
`<Asset id="AST-M8-003" />`
- **ความผิดพลาดอันดับ 1 หน้าไลน์:** ทันทีที่เห็นจุดเกิน `UCL` ช่างเดินไป **หมุน Tool Offset กลับทันทีโดยไม่เช็กอะไร** → ผลคือถ้าเหตุเกิดจากคีย์ตัวเลขผิดหรือแคลมป์หลวม การหมุน Offset จะยิ่งพังทั้ง Mean และ Range (`Tampering`)!
- **กฎทองของ Gates 2 & 3:**
  - **100% Backtrack Containment:** ต้องกักกันสินค้าที่ผลิต *ระหว่าง Subgroup ที่ดีล่าสุดจนถึงจุดปัจจุบัน* แยกใส่ตะกร้า/พื้นที่ป้ายแดง (`Hold Zone`) เพื่อคัดแยก `100%`
  - **Verify Data & Gage First:** ทวนค่าที่วัดซ้ำบนชิ้นงานเดิม — ถ้าวัดซ้ำแล้วปกติ ให้ดูว่าผิดพลาดตอนคีย์ข้อมูลหรือเครื่องวัดสกปรก (ห้ามปรับเครื่อง!)
  - **Check Event Log & Stream ID:** เกิดขึ้นหลังเปลี่ยนม้วนเหล็ก (`Coil`), เปลี่ยนมีด, หรือเกิดเฉพาะบาง Cavity / บาง Fixture หรือไม่?

## M8L1-S04 — Mapping Control Chart Signatures to Root Cause Direction
`<Asset id="AST-M8-004" />`
- ใช้ลักษณะความผิดปกติบน Control Chart เป็น "เข็มทิศ" ชี้ทางสืบค้นก่อนลงมือรื้อเครื่องจักร:

| อาการที่พบบน Control Chart | แนวโน้มสาเหตุระดับกระบวนการ (Likely Special Cause Direction) | จุดแรกที่ต้องตรวจใน OCAP |
|---|---|---|
| **Sudden Single Spike** (`Rule 1` จุดเดียว) | คีย์เลขผิด, วัดผิด, ชิ้นงานหล่น/เบี้ยว 1 ชิ้น, เศษโลหะติด Datum ชั่วคราว | Verify การวัด/คีย์ซ้ำ, เป่าลมทำความสะอาด Datum Pin, ตรวจชิ้นนั้น |
| **Trend / Gradual Drift** (เดินขึ้น/ลง `>= 6` จุด) | มีดกลึง/หินเจียรสึกหรอ, น้ำมันหล่อเย็นร้อนขึ้น, ความดันลม/ไฮดรอลิกค่อยๆ รั่ว | ตรวจคมมีด (`Tool Life`), อุณหภูมิน้ำยา, แรงดันยึดจับ (`Clamp Pressure`) |
| **Sudden Step Shift** (`>= 7` จุดฝั่งเดียว ตาม AIAG; ISQC ใช้ 8 จุด) | เปลี่ยน Lot วัตถุดิบ, เปลี่ยนกะคนตั้งเครื่อง, เปลี่ยน Offset / Fixture | ตรวจ Event Log: เปลี่ยน Material Coil/Lot, ตรวจ Shift Handover |
| **Range ($R$ หรือ $S$) ทะลุ `UCL_R`** | เครื่องหลวม (`Fixture/Spindle Clamping`), ผสม Multi-Stream (`Cavity 1–4`), เกจวัดพัง | **หยุดแก้ $\bar{X}$ ก่อน!** แก้แคลมป์หลวม/สั่น, แยก Stream, เช็ก Gage |
| **Cyclic (ขึ้น-ลงเป็นจังหวะ)** | อุณหภูมิห้องเปิด-ปิดแอร์เป็นรอบ, แรงดันไฟ/ลมแกว่ง, รอบหมุน Gear/Cam | จับเวลาครบรอบ (Period) เทียบกับวงจรเครื่องกำเนิดพลังงาน/สภาพแวดล้อม |

## M8L1-S05 — Interactive OCAP Gate & Containment Router
`<Interactive id="INT-M8-L1-01" />`
- จำลองเหตุการณ์ OOC หน้าไลน์ 4 เคส (`Spike จากคีย์เลขผิด`, `Trend มีดกลึง`, `R พุ่งจาก Fixture หลวม`, `Raw Data > USL ซ้ำ`) — ผู้เรียนเลือก Route ตั้งแต่ **Gate 1 → Gate 2 Containment → Gate 3 Verify → Gate 4 ทิศทางสาเหตุ** (`Passing = 4/4`, `+10 pts`)

## M8L1-S06 — Lesson 1 Knowledge Check (`KC-M8-L1`)
- ทบทวน 2 ข้อ (`M8-Q001`, `M8-Q008`) จาก [06_assessment_bank.md](06_assessment_bank.md)

---

# LESSON M8-L2: SPC + 7 QC Tools (`8.2`)

## M8L2-S01 — Control Chart Tells "WHEN", 7 QC Tools Tell "WHO & WHY"
`<Asset id="AST-M8-005" />`
- Control Chart (หนึ่งใน **7 QC Tools**) บอกได้แม่นยำว่ากระบวนการผิดปกติ **เมื่อไร (`When`)** และรูปแบบใด (**Mean Shift vs Variance**), แต่ไม่สามารถบอกลึกได้ว่า *เกิดจากชิ้นส่วนใด เครื่องใด กะใด หรือพารามิเตอร์ใด*
- **การทำงานประสานกัน (`SPC + 6 Other QC Tools`):**
  - เก็บบันทึกบริบทด้วย **Check Sheet** → แยกกลุ่มด้วย **Stratification** → จัดอันดับผู้ร้ายตัวใหญ่ด้วย **Pareto Chart** → ส่องรูปทรงประชากรด้วย **Histogram** → ระดมสมมติฐานครบด้านด้วย **Fishbone (`4M1E+M`)** → พิสูจน์ความสัมพันธ์ตัวเลขด้วย **Scatter Diagram** → แล้วกลับมายืนยันบน **Control Chart**!

## M8L2-S02 — Tools 1–3: Check Sheet, Stratification & Pareto (`80/20` (ค่าประมาณเพื่อการสอน) by Count & COPQ)
`<Asset id="AST-M8-006" />`
- **1. Check Sheet (ใบตรวจสอบ):** ออกแบบให้บันทึก *เวลา + กะ + เครื่อง/Fixture + Cavity + ลักษณะเสีย* ไปพร้อมกัน ไม่ใช่ขีดแค่จำนวนรวมจนแยกชั้นย้อนหลังไม่ได้
- **2. Stratification (การแยกชั้นข้อมูล — อาวุธลับที่ถูกมองข้าม!):** แยกข้อมูลรวมออกเป็นชั้นย่อย เช่น `Day vs Night`, `Fixture A vs Fixture B`, `Cavity 1–4` — หากไม่แยกชั้น ข้อมูลดีกับข้อมูลเสียจะปนกันจนมองไม่เห็นผู้ร้าย!
- **3. Pareto Chart (`80/20 Vital Few` (ค่าประมาณเพื่อการสอน)):** เรียงแท่งจากมากไปน้อยพร้อมเส้นสะสม (%) เพื่อเลือกแก้ **20% แรกที่สร้างปัญหา ~80%** (ค่าประมาณเพื่อการสอน)
  - **Pro Tip:** ควรทำ **Dual Pareto** ทั้ง **ตามจำนวนชิ้น (`Defect Count`)** และ **ตามต้นทุนความสูญเสีย (`COPQ Cost THB`)** เสมอ! เพราะ Defect ที่เกิดน้อยครั้งแต่อะไหล่แพงอาจสร้างความเสียหายสูงกว่า Defect เล็กน้อยที่เกิดบ่อย

## M8L2-S03 — Tools 4–5: Histogram Diagnostics & Fishbone (`4M1E + Measurement`)
`<Asset id="AST-M8-007" />`
- **4. Histogram Diagnosis:** รูปทรงของข้อมูลในโซน Containment เผยเบาะแสสำคัญ:
  - **Bimodal (ยอด 2 ยอด):** มี 2 แหล่งผลิตปนกัน! (เช่น `Fixture A` แยกกับ `Fixture B`, กะเช้า vs กะดึก, หรือ 2 Cavities)
  - **Skewed / Cliff (เบ้หรือถูกตัดปลาย):** มีการคัดทิ้ง (`100% Sorting`) หรือขีดจำกัดฝั่งเดียว (Roughness)
- **5. Cause-and-Effect / Fishbone (Ishikawa Diagram):** แตกก้างปลาอย่างเป็นระบบ 6 หมวด (**`5M1E` / `4M1E + Measurement`**):
  1. **Machine:** เครื่องจักร, Spindle, แคลมป์ไฮดรอลิก, มีดกลึง
  2. **Material:** ความแข็ง Coil, เรซิน, Lot วัตถุดิบ
  3. **Method:** ขั้นตอน Setup, ความถี่ทำความสะอาด, วิธีจับยึด
  4. **Man:** ทักษะกะดึก/กะเช้า, การตัดสินใจ Offset
  5. **Measurement:** ความคลาดเคลื่อนเกจ, Fixture วัดชิ้นงาน (**เตรียมต่อเข้า Module 9!**)
  6. **Mother Nature (Environment):** อุณหภูมิโรงงาน, ความชื้น, แรงดันไฟ/ลม

## M8L2-S04 — Tools 6–7: Scatter Diagram (`r` Correlation vs Causation) & Control Chart Proof
`<Asset id="AST-M8-008" />`
- **6. Scatter Diagram (แผนภาพการกระจาย):** พล็อตปัจจัยที่สงสัย ($X$) เทียบกับผลผลิต CTQ ($Y$) เพื่อดูทิศทางและความแรงของค่าสัมประสิทธิ์สหสัมพันธ์ **$r \in [-1, +1]$**:
  - $|r| \ge 0.80$: สัมพันธ์เชิงเส้นแข็งแรงมาก (**ตัวการน่าสงสัยสูง!** เช่น `Clamp Pressure` vs `Bore Diameter` $r = -0.996$)
  - $|r| < 0.30$: ไม่สัมพันธ์เชิงเส้น (เช่น `Coolant Temp` $r = -0.207$ → **ตัดผู้บริสุทธิ์ออก** ไม่ต้องเสียเงินเปลี่ยน Chiller!)
- **ข้อควรระวัง (Correlation $\neq$ Causation):** ตัวเลขสองตัวอาจวิ่งตามกันเพราะบังเอิญหรือมีตัวแปรที่ 3 ซ่อนอยู่ (**Spurious Correlation**) — วิศวกรต้องทดสอบยืนยันเชิงฟิสิกส์ (เปิด/ปิดหรือปรับ $X$) และดูผลกลับบน **7. Control Chart** เสมอ!

## M8L2-S05 — Interactive 7 QC Tools Drill-Down Explorer
`<Interactive id="INT-M8-L2-01" />`
- เจาะข้อมูลจาก Control Chart OOC ผ่าน 4 เครื่องมือ (**Stratify by Shift/Fixture → Pareto Count vs COPQ → Histogram Bimodal → Scatter Pressure vs Temp**) เพื่อชี้ตัวแปรต้นเหตุตัวจริง (`+10 pts`)

## M8L2-S06 — Interactive Fishbone `4M1E+M` Builder
`<Interactive id="INT-M8-L2-02" />`
- ลาก/จำแนกปัจจัยปัญหาหน้างาน `8` รายการ (เช่น ซีลไฮดรอลิกแคลมป์รั่ว, เกจเทียบไม่ตรง, พนักงานกะดึกปรับ Offset มั่ว, ความชื้นห้องสูง) เข้าก้างปลาให้ถูกหมวด (`>= 7/8`, `+10 pts`)

## M8L2-S07 — Lesson 2 Knowledge Check (`KC-M8-L2`)
- ทบทวน 2 ข้อ (`M8-Q016`, `M8-Q023`)

---

# LESSON M8-L3: Deep Root Cause Analysis (`5 Why`, `Is/Is-Not`, `FTA` & `Poka-Yoke`) (`8.3`)

## M8L3-S01 — Direct Cause vs Technical Root Cause vs Systemic Cause
`<Asset id="AST-M8-009" />`
- ทำไมหลายโรงงานแก้ปัญหาเดิมซ้ำๆ ทุก 3 เดือน? เพราะหยุดแค่ **Direct Cause (อาการตรงหน้า)**:
  - **Level 1 — Symptom / Direct Cause:** *"รูเจาะโตเกิน Spec เพราะแคลมป์ Fixture B หลวม"* → แก้แค่ขันน็อต/เปลี่ยนซีล (เดี๋ยวก็รั่วซ้ำอีก!)
  - **Level 2 — Technical Root Cause:** *"ซีลไฮดรอลิกเสื่อมก่อนกำหนดจากเศษโลหะกัดบาด และไม่มี Pressure Switch ตัดการทำงานเมื่อแรงดันต่ำกว่า `55 bar`"*
  - **Level 3 — Systemic / Control System Cause:** *"PM Checklist ไม่มีรอบเปลี่ยนซีลเชิงป้องกัน และ Control Plan ไม่ได้แยกติดตามราย Fixture"*

## M8L3-S02 — 3-Legged 5 Why Analysis & The "Therefore Test"
`<Asset id="AST-M8-010" />`
- **หลักการ 5 Why แบบมืออาชีพ (ห้ามโทษ *"Operator สะเพร่า"* เป็นคำตอบสุดท้าย!):**
  - แยกวิเคราะห์เป็น **3 ขา (3-Legged 5 Why)** ตามมาตรฐาน `IATF / 8D`:
    1. **Specific / Occurrence Why (ทำไมของเสียจึงเกิด?):** สืบสายกระบวนการจนเจอจุดบกพร่องทางกายภาพ/การออกแบบ
    2. **Detection Why (ทำไมระบบตรวจไม่เจอทันที?):** ทำไมของเสียถึงหลุดรอดจาก Gate/Sensor
    3. **Systemic Why (ทำไมระบบบริหารจัดการปล่อยให้เกิดขึ้นได้?):** ช่องโหว่ใน PFMEA, Control Plan, PM, Training
  - **กฎตรวจสอบความถูกต้อง ("Therefore Test"):** อ่านคำตอบย้อนกลับจาก **Why 5 ขึ้นมา Why 1** ด้วยคำว่า *"ดังนั้น... จึงเกิด..."* — ถ้าเชื่อมเหตุผลทางวิศวกรรมไม่ได้ แสดงว่าข้ามขั้นหรือเดา!

## M8L3-S03 — Is / Is-Not Matrix & Fault Tree Analysis (`FTA`)
`<Asset id="AST-M8-011" />`
- **Is / Is-Not Matrix (ตารางใช่ / ไม่ใช่):** ใช้ตีกรอบปัญหาอย่างคมชัดใน 4 มิติ (**What / Where / When / Extent**):
  - *ตัวอย่าง:* **IS:** เกิดเฉพาะ `Fixture B` ในกะบ่าย-ดึก หลังเดินเครื่องต่อเนื่อง — **IS NOT:** ไม่เกิดกับ `Fixture A` แม้ใช้วัตถุดิบ Lot เดียวกันและ Operator คนเดียวกัน! → ตัดเรื่อง Lot วัตถุดิบกับคนออกได้ทันที!
- **Fault Tree Analysis (`FTA`):** แผนภาพแบบ Top-Down จาก **Top Event (เช่น `Bore Out-of-Spec Shipped`)** แตกผ่าน Gate ตรรกะ:
  - **`AND Gate` (ต้องเกิดพร้อมกันทั้งหมด):** เช่น `Fixture B แรงดันตก` **AND** `ไม่มี Interlock ตัดเครื่อง` **AND** `ไม่แยก Fixture บน SPC Chart`
  - **`OR Gate` (เกิดอย่างใดอย่างหนึ่งก็พัง):** เช่น `Tool Wear` **OR** `Clamp Slip` **OR** `Wrong Offset`

## M8L3-S04 — Poka-Yoke (Error Proofing) & Corrective Action Hierarchy
`<Asset id="AST-M8-012" />`
- ลำดับความแข็งแกร่งของการแก้ปัญหา (**Hierarchy of Controls** จากอ่อนที่สุด → แข็งแกร่งที่สุด):
  1. *อ่อนที่สุด (Weak):* **อบรมซ้ำ / เตือนพนักงาน / ติดป้ายระวัง ("ห้ามลืม...")** — มนุษย์เหนื่อยและพลาดได้เสมอ!
  2. *ปานกลาง (Detection):* **ตรวจ 100% / Alarm Warning** — ของเสียอาจเกิดขึ้นแล้วค่อยคัดทิ้ง
  3. *แข็งแกร่ง (Preventive Poka-Yoke):* **Physical Pin / Automated PLC Interlock** เช่น **Pressure Switch `< 55 bar` ตัด Cycle CNC อัตโนมัติ** ทำให้เครื่องจักร *ไม่สามารถผลิตของเสียได้ตั้งแต่ต้น!*

## M8L3-S05 — Interactive 5 Why Chain & Fault Tree Builder
`<Interactive id="INT-M8-L3-01" />`
- ฝึกต่อห่วงโซ่ **3-Legged 5 Why** (พร้อมทดสอบย้อนกลับ *Therefore Test*) และเลือก Gate **`AND` vs `OR`** ใน Fault Tree + เลือกระดับ **Poka-Yoke** ที่กันการเกิดซ้ำได้จริง (`+10 pts`)

## M8L3-S06 — Lesson 3 Knowledge Check (`KC-M8-L3`)
- ทบทวน 2 ข้อ (`M8-Q031`, `M8-Q038`)

---

# LESSON M8-L4: `PDCA / Kaizen / DMAIC / 8D` & Production OOC Workshop (`8.4`)

## M8L4-S01 — Choosing the Right Continuous Improvement Framework (`PDCA, Kaizen, DMAIC, 8D`)
`<Asset id="AST-M8-013" />`
- เครื่องมือปรับปรุงต่อเนื่องทั้ง 4 แบบใช้ต่างสถานการณ์กัน:

| กรอบงาน (Framework) | จุดเด่นและโครงสร้าง | เหมาะกับปัญหาแบบใดในโรงงาน |
|---|---|---|
| **PDCA (Deming Wheel)** | `Plan → Do → Check → Act` (หมุนต่อเนื่อง) | ปรับปรุงมาตรฐานงานหน้าไลน์ประจำวัน, ทดสอบการแก้ OOC เบื้องต้นและตั้งมาตรฐานใหม่ |
| **Kaizen** | ปรับปรุงทีละนิดเร็วๆ ร่วมกันหน้างาน (`Gemba`) | ลดความสูญเปล่า (`Muda`), จัดสถานีวัด, ลดรอบเวลาตรวจ, เพิ่ม Poka-Yoke เล็กๆ |
| **DMAIC (Six Sigma)** | `Define → Measure → Analyze → Improve → Control` | ปัญหาเรื้อรัง (`Chronic Low Cpk`), ความแปรปรวนหลายตัวแปรที่ต้องใช้สถิติเข้มข้น |
| **8D (Eight Disciplines)** | `D1 Team → D2 Describe → D3 Contain → D4 RCA → D5–D6 CAPA → D7 Prevent → D8 Congratulate` | **ตอบสนองเหตุการณ์ OOC รุนแรง / Customer Claim** ที่ต้องกักกันด่วน (OCAP) และป้องกันข้ามสาย (`Horizontal Deployment`) |

## M8L4-S02 — Closing the Loop: SPC Before/After Proof & Living PFMEA / Control Plan
`<Asset id="AST-M8-014" />`
- **ห้ามปิด Case เพียงเพราะ *"เปลี่ยนซีลแล้วจบ"*!** ก่อนปิด `PDCA / 8D` ต้องผ่าน 4 ด่านยืนยัน:
  1. **Confirmation Run บน SPC Chart:** เก็บข้อมูลหลังแก้ไขอย่างน้อย `8–20 Subgroups` ยืนยันว่า Mean กลับมาชิด Target, Range ลดลง, และ **`0` OOC**
  2. **Before vs After Capability Check:** เปรียบเทียบ $P_{pk}$ ช่วงเกิดเหตุ vs $C_{pk}$ หลังแก้ไข (ต้องผ่านเกณฑ์ตามข้อกำหนดลูกค้า เช่น $\ge 1.33$ หรือ $1.67$)
  3. **Phase I Limit Update (ถ้าลด Common Cause สำเร็จ):** คำนวณเส้น `UCL/LCL` ใหม่ให้แคบลงตามศักยภาพใหม่ (ห้ามขยายเส้นเพื่อซ่อนปัญหา!)
  4. **Living Documentation & Horizontal Deployment:** อัปเดต **PFMEA (ลด Occurrence/Detection Rating)**, **Control Plan**, **WI**, และขยายผล **Poka-Yoke** ไปยังเครื่องจักรพี่น้อง (`Machine #2, #3`)!

## M8L4-S03 — Workshop Intro: Housing Bore OOC Incident (`SG-01` .. `SG-24`)
`<Asset id="AST-M8-015" />`
- **โจทย์โรงงานจริง (`CNC Housing Bore ID` — Spec `40.000 ± 0.050 mm`, Baseline `X̄̄ = 40.000`, `R̄ = 0.020`, `UCL_X = 40.0115`, `UCL_R = 0.0423`):**
  - ไฟล์ข้อมูล: [data/workshop_m8_ooc_case_study.csv](data/workshop_m8_ooc_case_study.csv) (`24 Subgroups × 5` ชิ้น = `120 ชิ้น` ครอบคลุม Before / OOC Incident / After PDCA) และ [data/workshop_m8_defect_pareto.csv](data/workshop_m8_defect_pareto.csv) (`200` Defects / COPQ `61,740 THB`)
  - กะดึกพบค่าหลุดทั้ง **`UCL_X`**, **`UCL_R`**, และ **`Raw Data > 40.050 USL`** จนต้องสั่ง **Tier 3 OCAP Lot Hold** (แนวปฏิบัติ)! ภารกิจของคุณคือใช้ **OCAP + 7 QC Tools + 5 Why + Poka-Yoke + PDCA/8D** ปิดปัญหาให้จบขาด!

## M8L4-S04 — Interactive Workshop Part A: OCAP & 7 QC Tools Investigation
`<Interactive id="INT-M8-L4-01" />`
- วิเคราะห์จากข้อมูลจริง 4 ขั้นตอน:
  1. **ระบุ Subgroup ที่เกิด OOC (`SG-08, 10, 12, 14, 15, 16`)** และกำหนดจุด **Backtrack Containment** (ต้องกักกันย้อนหลังไปถึงก่อนจุดผิดปกติแรก!)
  2. **Stratify ข้อมูลตาม Shift และ Fixture (`FIX-A` vs `FIX-B`)** — พบว่า **100% ของจุด OOC เกิดเฉพาะ `FIX-B`**!
  3. **อ่าน Pareto (`Count` vs `COPQ`)** — พบ `DEF-01` กิน **`56.0%` ของจำนวนเสีย** แต่สร้างความเสียหายสูงถึง **`81.6%` ของ COPQ (`50,400 / 61,740 THB`)**!
  4. **เทียบ Scatter Correlation (`Clamp_Pressure_Bar` $r = -0.996$ vs `Coolant_Temp_C` $r = -0.207$)** เพื่อชี้ตัวการที่แท้จริง!

## M8L4-S05 — Workshop Part A Solution: Root Cause Revealed
`<Asset id="AST-M8-016" />`
- **สรุปหลักฐานจาก 7 QC Tools (`FIX-B Hydraulic Clamp Leak`):**
  - **Control Chart + Stratification:** `FIX-A` เสถียรตลอด 3 กะ (`Clamp_Pressure = 60.4–61.0 bar`), แต่ `FIX-B` แรงดันตกจาก `53.5 → 40.0 bar` ทำให้รูเจาะโต (`X̄ = 40.0146 → 40.0350 mm`) และชิ้นงานสั่น (`R = 0.0440, 0.0480 > 0.0423` + `Max Raw = 40.059 > 40.050 USL`!)
  - **Scatter Proof:** `Clamp Pressure` สัมพันธ์เชิงลบกับ `X̄` ที่ **$r = -0.9955$** และกับ `Range` ที่ **$r = -0.8921$** ขณะที่ `Coolant Temp` ($r = -0.2066$) ไม่ใช่ต้นเหตุ!

## M8L4-S06 — Interactive Workshop Part B: 5 Why, Poka-Yoke & PDCA Closure
`<Interactive id="INT-M8-L4-02" />`
- ต่อห่วงโซ่ **5 Why** ของเหตุการณ์ `FIX-B Clamp Leak` → เลือก **Poka-Yoke (`Hydraulic Pressure Interlock < 55 bar`)** → อัปเดต **Control Plan (Stratify `FIX-A / FIX-B`)** → ตรวจผล **`SG-17..24`** ยืนยัน **`Ppk` พุ่งจาก `0.84` (Incident `0.74`) → `Cpk = 2.04` (`Ppk = 2.64`)** (ค่าเบื้องต้น / ข้อมูลตัวอย่าง)! (`+15 pts`)

## M8L4-S07 — Workshop Part B Verified Closure: Before vs After SPC Proof
`<Asset id="AST-M8-017" />`
- **Before (`SG-01..16`):** Mean = `40.0102 mm`, $s_{\text{overall}} = 0.01575$, **`Ppk = 0.843`** (ช่วง Incident `SG-05..16`: **`Ppk = 0.737`**, `6` OOC Subgroups, `Raw > USL`)
- **After PDCA (`SG-17..24`):** Mean = `40.0000 mm`, $\bar{R} = 0.01900$, $\hat{\sigma}_{\text{within}} = 0.00817$, **`Cpk = 2.040`** (`Ppk = 2.637`) *(ค่าเบื้องต้น / ข้อมูลตัวอย่าง: 8 กลุ่ม 40 ชิ้น; AIAG p.57; ISQC p.354)*, **`0` OOC** — พร้อม Horizontal Deployment ไปยัง CNC เครื่องพี่น้อง!

## M8L4-S08 — Module 8 Summary & Bridge to Module 9 (`MSA Connection to SPC`)
`<Asset id="AST-M8-018" />`
- **สรุป 4 กุญแจสำคัญของ Module 8:** OCAP 5 ด่าน → 7 QC Tools (Stratify + Pareto + Scatter) → 3-Legged 5 Why + Poka-Yoke → PDCA/8D + Before/After SPC Proof
- **คำถามชวนคิดสู่ Module 9 (`MSA Connection to SPC`):** ใน Gate 3 ของ OCAP เราต้องตรวจเครื่องวัดก่อนปรับเครื่อง... *แล้วถ้าตัวเลขบน Control Chart แกว่งหลุดเส้น หรือ `Cpk` ต่ำกว่า `1.33` เพียงเพราะ "เครื่องวัด (Gage) และคนวัด" มีความแปรปรวนปนอยู่ล่ะ?* สมการ $\sigma^2_{\text{obs}} = \sigma^2_{\text{part}} + \sigma^2_{\text{gage}}$ จะพาเราไปเจาะลึก **Gage R&R, Bias, Linearity, และ Stability** ใน **Module 9**!

## M8L4-S09 — Module 8 Final Assessment (`EXAM-M8`)
- แบบทดสอบปลาย Module 8 แบบสุ่มแยกบท **20 ข้อ (`M8-Q001`–`M8-Q060`)** — เกณฑ์ผ่าน **`>= 80%` (`16/20`)**
