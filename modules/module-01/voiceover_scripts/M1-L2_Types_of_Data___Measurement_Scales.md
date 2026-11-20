# บทพากย์สำหรับตรวจและปรับแก้ — M1-L2: Types of Data & Measurement Scales
> **Module 1:** Statistics Foundation for Manufacturing  
> **สถานะ:** ฉบับแยกรายบทเรียนสำหรับปะป๊าตรวจทาน เสริม หรือแก้ไขข้อความก่อนนำไปลงเสียงจริง / เจนเนอเรต AI TTS  
> **คำแนะนำการแก้ไข:**
> 1. ปะป๊าสามารถแก้ไขข้อความในช่อง **[ฉบับแก้ไข / ร่างปรับปรุง]** ได้โดยตรง
> 2. หากต้องการแก้คำอ่านภาษาไทยสำหรับ AI ให้แก้ใน **TTS Clean Script (TH)** โดยหลีกเลี่ยงสัญลักษณ์คณิตศาสตร์ เช่น ใช้คำว่า "เอ็กซ์บาร์" แทน "$\bar{x}$"
> 3. ความยาวของบทพากย์ที่เหมาะสมคือประมาณ 130–145 คำต่อนาที (หน้าละประมาณ 25–45 วินาที)

---

### AUD-M1L2-S01 (35 sec) — Variable vs Attribute Data
- **Display Script (TH):**  
  ข้อมูลในโรงงานแบ่งออกเป็น 2 ตระกูลใหญ่ๆ ที่ต้องแยกให้ออกตั้งแต่ต้น คือ **Variable Data** และ **Attribute Data** [PAUSE-1] [ANIM: split_compare] **Variable Data** คือข้อมูลที่ได้จากการวัดค่าจริง เช่น ความยาว น้ำหนัก แรงบิด หรืออุณหภูมิ [PAUSE-1] ส่วน **Attribute Data** คือข้อมูลที่ได้จากการนับหรือการตัดสิน เช่น ผ่าน-ไม่ผ่าน, รอยขีดข่วน, หรือจำนวนชิ้นงานเสีย
- **TTS Clean Script (TH):**  
  ข้อมูลในโรงงานแบ่งออกเป็น 2 ตระกูลใหญ่ๆ ที่ต้องแยกให้ออกตั้งแต่ต้น คือ แวริเอเบิล เดต้า และ แอททริบิวต์ เดต้า, แวริเอเบิล เดต้า คือข้อมูลที่ได้จากการวัดค่าจริง เช่น ความยาว น้ำหนัก แรงบิด หรืออุณหภูมิ, ส่วน แอททริบิวต์ เดต้า คือข้อมูลที่ได้จากการนับหรือการตัดสิน เช่น ผ่านหรือไม่ผ่าน รอยขีดข่วน หรือจำนวนชิ้นงานเสีย
- **EN Reference:**  
  Manufacturing data fall into two main categories: variable data measured on a scale such as diameter or torque, and attribute data classified or counted such as pass-fail or defect counts.

### AUD-M1L2-S02 (35 sec) — Continuous vs Attribute Data
- **Display Script (TH):**  
  มาดูความละเอียดลงไปอีกขั้น [ANIM: gauge_vs_bin] **Continuous Data** คือข้อมูลต่อเนื่องที่ซอยละเอียดเป็นทศนิยมได้เรื่อยๆ ตามความละเอียดของเครื่องมือวัด เช่น 50.012 มิลลิเมตร [PAUSE-1] ส่วน **Attribute Data** คือข้อมูลเชิงคุณลักษณะที่เป็นจำนวนนับเต็มหน่วย หรือเป็นหมวดหมู่ชัดเจน เช่น พบจุดเสีย 0, 1, 2 จุด ไม่สามารถมี 1.5 จุดได้
- **TTS Clean Script (TH):**  
  มาดูความละเอียดลงไปอีกขั้น, คอนทินิวอัส เดต้า คือข้อมูลต่อเนื่องที่ซอยละเอียดเป็นทศนิยมได้เรื่อยๆ ตามความละเอียดของเครื่องมือวัด เช่น 50.012 มิลลิเมตร, ส่วน แอททริบิวต์ เดต้า คือข้อมูลเชิงคุณลักษณะที่เป็นจำนวนนับเต็มหน่วย หรือเป็นหมวดหมู่ชัดเจน เช่น พบจุดเสีย 0, 1, 2 จุด ไม่สามารถมี 1.5 จุดได้
- **EN Reference:**  
  Continuous data can take any value along a measurement continuum depending on gauge resolution, whereas attribute data consist of countable whole numbers or distinct categories.

### AUD-M1L2-S03 (55 sec) — Measurement Scales (NOIR)
- **Display Script (TH):**  
  นอกจากแยก Variable กับ Attribute แล้ว วิศวกรต้องรู้จักมาตราการวัด 4 ระดับ หรือ **NOIR** ด้วย [PAUSE-1] [ANIM: cards_4_scales]
  หนึ่ง **Nominal** คือแค่ชื่อหรือป้ายกำกับ เช่น เลข Cavity 1, 2, 3, 4 อันนี้ห้ามจับมาหาค่าเฉลี่ยเด็ดขาด! [PAUSE-1]
  สอง **Ordinal** คือเรียงลำดับได้ เช่น เกรดสวย-พอใช้-แย่ แต่ระยะห่างแต่ละเกรดไม่เท่ากัน [PAUSE-1]  
  สาม **Interval** มีช่วงห่างเท่ากัน แต่ไม่มีศูนย์แท้ เช่น อุณหภูมิ 0 องศาเซลเซียส ไม่ได้แปลว่าไม่มีความร้อน [PAUSE-1]  
  สี่ **Ratio** มีศูนย์แท้ วัดได้ทั้งความยาว น้ำหนัก แรงบิด และคำนวณสถิติได้ครบทุกตัว
- **TTS Clean Script (TH):**  
  นอกจากแยก แวริเอเบิล กับ แอททริบิวต์ แล้ว วิศวกรต้องรู้จักมาตราการวัด 4 ระดับด้วย, หนึ่ง นอมินัล คือแค่ชื่อหรือป้ายกำกับ เช่น เลข คาวิตี้ 1 2 3 4 อันนี้ห้ามจับมาหาค่าเฉลี่ยเด็ดขาด, สอง ออดินัล คือเรียงลำดับได้ เช่น เกรดสวย พอใช้ แย่ แต่ระยะห่างแต่ละเกรดไม่เท่ากัน, สาม อินเทอร์วัล มีช่วงห่างเท่ากัน แต่ไม่มีศูนย์แท้ เช่น อุณหภูมิ 0 องศาเซลเซียส ไม่ได้แปลว่าไม่มีความร้อน, สี่ เรโช มีศูนย์แท้ วัดได้ทั้งความยาว น้ำหนัก แรงบิด และคำนวณสถิติได้ครบทุกตัว
- **EN Reference:**  
  Measurement scales determine which statistical operations are valid: Nominal labels without order, Ordinal ranks without equal intervals, Interval scales with arbitrary zero like Celsius, and Ratio scales with a true zero like millimeters and grams.

### AUD-M1L2-S04 (30 sec) — Workshop 1 : Data Classification
- **Display Script (TH):**  
  ถึงเวลาลงมือทำ **Workshop 1 : การจำแนกข้อมูล** แล้ว [PAUSE-1] ลองจำแนกข้อมูลจริงจากโรงงานลงในหมวด **Variable** หรือ **Attribute** พร้อมระบุ Measurement Scale ให้ถูกต้อง ทำความคุ้นเคยกับตัวอย่างจริงหน้างาน แล้วดูผลเฉลยกัน
- **TTS Clean Script (TH):**  
  ถึงเวลาลงมือทำ เวิร์คช็อป หนึ่ง การจำแนกข้อมูล แล้ว, ลองจำแนกข้อมูลจริงจากโรงงานลงในหมวด แวริเอเบิล หรือ แอททริบิวต์ พร้อมระบุระดับมาตราการวัดให้ถูกต้อง ทำความคุ้นเคยกับตัวอย่างจริงหน้างาน แล้วดูผลเฉลยกัน
- **EN Reference:**  
  Now complete Workshop 1 : Data Classification by classifying real manufacturing items into Variable or Attribute data and matching their measurement scales.

### AUD-M1L2-S05 (40 sec) — Feedback & Rationale
- **Display Script (TH):**  
  จุดที่วิศวกรมักพลาดบ่อยๆ คือ ข้อแรก **Go/No-Go Gauge** แม้จะเช็คขนาดเพลา แต่ผลที่บันทึกคือ "ผ่าน หรือ ไม่ผ่าน" จึงถือเป็น **Attribute Nominal** ไม่ใช่ Variable [PAUSE-1] ข้อสอง **หมายเลข Cavity** ที่เป็นแค่ชื่อเรียกหลุมแม่พิมพ์ ไม่ใช่ตัวเลขสำหรับนำมาบวกลบหาค่าเฉลี่ย [PAUSE-1] และข้อสาม **อุณหภูมิเตาอบ** หลายคนคิดว่าเป็น Ratio Scale แต่แท้จริงเป็น **Interval Scale** เพราะศูนย์องศาเซลเซียส ไม่ใช่ศูนย์แท้ทางความร้อน จึงเปรียบเทียบสัดส่วนกี่เท่าไม่ได้
- **TTS Clean Script (TH):**  
  จุดที่วิศวกรมักพลาดบ่อยๆ คือ ข้อแรก โก โนโก เกจ แม้จะเช็คขนาดเพลา แต่ผลที่บันทึกคือ ผ่าน หรือ ไม่ผ่าน จึงถือเป็น แอททริบิวต์ นอมินัล ไม่ใช่ แวริเอเบิล, ข้อสอง หมายเลข คาวิตี้ ที่เป็นแค่ชื่อเรียกหลุมแม่พิมพ์ ไม่ใช่ตัวเลขสำหรับนำมาบวกลบหาค่าเฉลี่ย, และข้อสาม อุณหภูมิเตาอบ หลายคนคิดว่าเป็น เรโช สเกล แต่แท้จริงเป็น อินเทอร์วัล สเกล เพราะศูนย์องศาเซลเซียส ไม่ใช่ศูนย์แท้ทางความร้อน จึงเปรียบเทียบสัดส่วนกี่เท่าไม่ได้
- **EN Reference:**  
  Watch out for common traps: First, Go/No-Go gauge results are Attribute Nominal even when checking dimensions, because the record is Pass/Fail rather than a measured continuous value. Second, mold cavity numbers are labels (Nominal) rather than numbers for calculating averages. Third, oven temperature in Celsius is an Interval Scale rather than a Ratio Scale, because 0°C is not an absolute zero temperature and ratios cannot be computed.

### AUD-M1L2-S06 (20 sec) — Lesson 2 Summary & Check
- **Display Script (TH):**  
  สรุปสั้นๆ ก่อนเลือกใช้กราฟหรือ Control Chart ในบทหลังๆ: ให้ถามตัวเองเสมอว่า **ข้อมูลนี้วัดค่าได้ (Variable) หรือนับเอา (Attribute)** ลองตอบคำถามทบทวน 2 ข้อเพื่อไปต่อ
- **TTS Clean Script (TH):**  
  สรุปสั้นๆ ก่อนเลือกใช้กราฟหรือ คอนโทรล ชาร์ท ในบทหลังๆ, ให้ถามตัวเองเสมอว่า ข้อมูลนี้วัดค่าได้แบบ แวริเอเบิล หรือนับเอาแบบ แอททริบิวต์, ลองตอบคำถามทบทวน 2 ข้อเพื่อไปต่อ
- **EN Reference:**  
  Before choosing any statistical tool or control chart, always identify whether your data are variable or attribute. Complete the two check questions to unlock Lesson 3.

---
