# Module 9 Voice Over Script Package (Thai Primary + TTS-Ready + EN Reference)

**Module:** Module 9 — MSA Connection to SPC (`Why MSA Before SPC`, `Gage R&R`, `Bias / Linearity / Stability` & Report Workshop)  
**Total Audio Tracks:** 30 Tracks (`AUD-M9L1-S01` .. `AUD-M9L4-S09`)  
**Dual Format Ready:** Display Script (TH) สำหรับนักพากย์/Sync Animation + TTS Clean Script (TH) ปลอดสัญลักษณ์ พร้อมป้อน AI Thai TTS ทันที

---

## LESSON M9-L1: Why MSA Before SPC

### AUD-M9L1-S01 (25 sec) — Welcome: Is Your Control Chart Lying?
- **Display Script (TH):**  
  ยินดีต้อนรับสู่ Module 9 ! [PAUSE-1] [ANIM: msa_hero] เคยสงสัยไหมว่าทำไมบางครั้ง Control Chart ถึงร้องเตือนมั่ว หรือค่า $C_{pk}$ ตกต่ำทั้งที่เครื่องจักรยังดีอยู่? คำตอบมักซ่อนอยู่ใน **ระบบการวัด หรือ MSA** กฎเหล็กคือต้องตรวจ MSA ให้ผ่านก่อนเชื่อถือกราฟ SPC เสมอ
- **TTS Clean Script (TH):**  
  ยินดีต้อนรับสู่ โมดูล 9, เคยสงสัยไหมว่าทำไมบางครั้ง คอนโทรล ชาร์ท ถึงร้องเตือนมั่ว หรือค่า ซีพีเค ตกต่ำทั้งที่เครื่องจักรยังดีอยู่ คำตอบมักซ่อนอยู่ใน ระบบการวัด หรือ เอ็มเอสเอ กฎเหล็กคือต้องตรวจ เอ็มเอสเอ ให้ผ่านก่อนเชื่อถือกราฟ เอสพีซี เสมอ
- **EN Reference:**  
  Welcome to Module 9: MSA Connection to SPC. Before blaming your machine for false alarms or low Cpk, always verify your measurement system first.

### AUD-M9L1-S02 (40 sec) — The Observed Variance Equation
- **Display Script (TH):**  
  ตัวเลขทุกตัวที่เราอ่านจากเครื่องวัด ไม่ใช่ขนาดจริงของชิ้นงานร้อยเปอร์เซ็นต์ [ANIM: variance_stack] แต่มาจาก **ความแปรปรวนจริงของชิ้นงาน บวกกับ ความแปรปรวนของเครื่องวัด** ถ้าความแปรปรวนของเครื่องวัดใหญ่เกินไป มันจะทำให้เส้นควบคุมถ่างออก เกิด False OOC และกดค่า **`Cpk` จริงให้ดูต่ำลง** จนไม่ผ่าน PPAP ได้เลย
- **TTS Clean Script (TH):**  
  ตัวเลขทุกตัวที่เราอ่านจากเครื่องวัด ไม่ใช่ขนาดจริงของชิ้นงานร้อยเปอร์เซ็นต์ แต่มาจาก ความแปรปรวนจริงของชิ้นงาน บวกกับ ความแปรปรวนของเครื่องวัด ถ้าความแปรปรวนของเครื่องวัดใหญ่เกินไป มันจะทำให้เส้นควบคุมถ่างออก เกิด ฟอลส์ โอโอซี และกดค่า ซีพีเค จริงให้ดูต่ำลง จนไม่ผ่าน พีแพป ได้เลย
- **EN Reference:**  
  Observed variance equals true part variance plus measurement variance. Excessive gage variation inflates control limits, triggers false alarms, and artificially deflates Cpk.

### AUD-M9L1-S03 (40 sec) — Cpk Distortion & 10-to-1 Resolution Rule
- **Display Script (TH):**  
  ลองดูตัวอย่างตัวเลข [ANIM: cpk_distortion] ถ้า `%GRR` สูงถึง 70 เปอร์เซ็นต์ ค่า $C_{pk}$ ที่วัดได้จะหดหายไปเกือบ **30 เปอร์เซ็นต์** เลยทีเดียว! [PAUSE-1] และอย่าลืมกฎ **10 ต่อ 1**: ความละเอียดของเครื่องวัดต้องละเอียดอย่างน้อย **1 ใน 10 ของ Tolerance** เช่น Tolerance 0.10 มิลลิเมตร ห้ามใช้เวอร์เนียร์ 0.05 มิลลิเมตรเด็ดขาด
- **TTS Clean Script (TH):**  
  ลองดูตัวอย่างตัวเลข ถ้า เปอร์เซ็นต์ จีอาร์อาร์ สูงถึง 70 เปอร์เซ็นต์ ค่า ซีพีเค ที่วัดได้จะหดหายไปเกือบ 30 เปอร์เซ็นต์ เลยทีเดียว, และอย่าลืมกฎ 10 ต่อ 1 ความละเอียดของเครื่องวัดต้องละเอียดอย่างน้อย 1 ใน 10 ของ ทอเลอแรนซ์ เช่น ทอเลอแรนซ์ 0.10 มิลลิเมตร ห้ามใช้เวอร์เนียร์ 0.05 มิลลิเมตรเด็ดขาด
- **EN Reference:**  
  A 70 percent GRR can shrink observed Cpk by nearly 30 percent. Always enforce the 10-to-1 resolution rule: gage discrimination must be at least one-tenth of tolerance.

### AUD-M9L1-S04 (30 sec) — Interactive Gage R&R Impact Simulator
- **Display Script (TH):**  
  ลองเลื่อน Slider เพิ่มค่า `%Repeatability` และ `%Reproducibility` ด้านล่าง เพื่อดูกราฟ Control Chart เกิด False Signal และค่า `Cpk` ถูกกดต่ำลงแบบ Real-time
- **TTS Clean Script (TH):**  
  ลองเลื่อน สไลเดอร์ เพิ่มค่า เปอร์เซ็นต์ รีพีททะบิลิตี้ และ เปอร์เซ็นต์ รีโพรดิวซิบิลิตี้ ด้านล่าง เพื่อดูกราฟ คอนโทรล ชาร์ท เกิด ฟอลส์ ซิกแนล และค่า ซีพีเค ถูกกดต่ำลงแบบ เรียลไทม์
- **EN Reference:**  
  Adjust Repeatability and Reproducibility sliders below to watch false out-of-control signals appear and observed Cpk drop in real time.

### AUD-M9L1-S05 (20 sec) — Lesson 1 Knowledge Check
- **Display Script (TH):**  
  เช็คความเข้าใจเรื่องผลกระทบของ MSA ต่อ Control Chart และกฎ 10 ต่อ 1 จำนวน 2 ข้อ
- **TTS Clean Script (TH):**  
  เช็คความเข้าใจเรื่องผลกระทบของ เอ็มเอสเอ ต่อ คอนโทรล ชาร์ท และกฎ 10 ต่อ 1 จำนวน 2 ข้อ
- **EN Reference:**  
  Answer two review questions on why MSA precedes SPC and the 10-to-1 resolution rule.

---

## LESSON M9-L2: Gage R&R (`Repeatability`, `Reproducibility`, `%GRR`, `ndc`)

### AUD-M9L2-S01 (40 sec) — Repeatability (`EV`) vs Reproducibility (`AV`)
- **Display Script (TH):**  
  Gage R&R แยกความแปรปรวนออกเป็น 2 ตัว [ANIM: ev_vs_av] ตัวแรก **Repeatability หรือ `EV`** คือ **คนเดิม เกจเดิม ชิ้นเดิม** วัดซ้ำแล้วค่าแกว่ง สะท้อนคุณภาพตัวเครื่องวัด [PAUSE-1] ตัวที่สอง **Reproducibility หรือ `AV`** คือ **คนวัดต่างกัน** แต่วัดชิ้นเดียวกันแล้วค่าเฉลี่ยต่างกัน สะท้อนความต่างของวิธีจับหรือแรงกด
- **TTS Clean Script (TH):**  
  เกจ อาร์แอนด์อาร์ แยกความแปรปรวนออกเป็น 2 ตัว ตัวแรก รีพีททะบิลิตี้ หรือ อีวี คือ คนเดิม เกจเดิม ชิ้นเดิม วัดซ้ำแล้วค่าแกว่ง สะท้อนคุณภาพตัวเครื่องวัด, ตัวที่สอง รีโพรดิวซิบิลิตี้ หรือ เอวี คือ คนวัดต่างกัน แต่วัดชิ้นเดียวกันแล้วค่าเฉลี่ยต่างกัน สะท้อนความต่างของวิธีจับหรือแรงกด
- **EN Reference:**  
  Repeatability, EV, measures variation when one appraiser repeats measurements on the same part. Reproducibility, AV, measures average differences between different appraisers.

### AUD-M9L2-S02 (35 sec) — Standard `10 × 3 × 3` Study
- **Display Script (TH):**  
  มาตรฐาน **AIAG MSA** นิยมเก็บข้อมูลแบบ **`10 × 3 × 3`** [ANIM: study_matrix] คือใช้ **10 ชิ้นงาน** ที่กระจายตัวแทนช่วงผลิตจริง, **3 คนวัด**, วัดคนละ **3 รอบ** รวม **90 การวัด** โดยต้อง **ปิดเบอร์ชิ้นงานและสุ่มลำดับ (Blind & Randomized)** เพื่อไม่ให้คนวัดจำค่าเดิมได้
- **TTS Clean Script (TH):**  
  มาตรฐาน เอไอเอจี เอ็มเอสเอ นิยมเก็บข้อมูลแบบ 10 คูณ 3 คูณ 3 คือใช้ 10 ชิ้นงาน ที่กระจายตัวแทนช่วงผลิตจริง 3 คนวัด วัดคนละ 3 รอบ รวม 90 การวัด โดยต้อง ปิดเบอร์ชิ้นงานและสุ่มลำดับ หรือ ไบลด์ แอนด์ แรนดอมไมซ์ เพื่อไม่ให้คนวัดจำค่าเดิมได้
- **EN Reference:**  
  A standard AIAG Gage R&R uses 10 representative parts, 3 appraisers, and 3 blind randomized trials each—totaling 90 measurements without memory bias.

### AUD-M9L2-S03 (45 sec) — Key Formulas: `%GRR`, `%Tolerance` & `ndc`
- **Display Script (TH):**  
  ตัวชี้วัดสำคัญมี 3 ตัว [ANIM: grr_formulas] หนึ่ง **`%GRR` เทียบ Study Variation** ใช้ดูว่าเกจดีพอสำหรับ **ทำ SPC** หรือไม่ สอง **`%Tolerance`** ใช้ดูว่าเกจดีพอสำหรับ **คัด Spec** หรือไม่ และสาม **`ndc`** คือจำนวนกลุ่มข้อมูลที่เครื่องวัดแยกแยะได้
- **TTS Clean Script (TH):**  
  ตัวชี้วัดสำคัญมี 3 ตัว หนึ่ง เปอร์เซ็นต์ จีอาร์อาร์ เทียบ สตัดดี้ แวริเอชั่น ใช้ดูว่าเกจดีพอสำหรับ ทำ เอสพีซี หรือไม่ สอง เปอร์เซ็นต์ ทอเลอแรนซ์ ใช้ดูว่าเกจดีพอสำหรับ คัด สเปก หรือไม่ และสาม เอ็นดีซี คือจำนวนกลุ่มข้อมูลที่เครื่องวัดแยกแยะได้
- **EN Reference:**  
  Evaluate three key metrics: percent GRR of Study Variation for SPC suitability, percent Tolerance for part acceptance, and ndc for distinct category resolution.

### AUD-M9L2-S04 (40 sec) — AIAG Acceptance Criteria
- **Display Script (TH):**  
  เกณฑ์ตัดสินของ **AIAG** จำง่ายมาก [ANIM: aiag_criteria] **`< 10%`** ผ่านสมบูรณ์, **`10% ถึง 30%`** ยอมรับแบบมีเงื่อนไข, แต่ถ้า **`> 30%`** ตกทันทีห้ามใช้! [PAUSE-1] และสำหรับงาน SPC ค่า **`ndc` ต้องมากกว่าหรือเท่ากับ `5`** เสมอ
- **TTS Clean Script (TH):**  
  เกณฑ์ตัดสินของ เอไอเอจี จำง่ายมาก น้อยกว่า 10 เปอร์เซ็นต์ ผ่านสมบูรณ์, 10 ถึง 30 เปอร์เซ็นต์ ยอมรับแบบมีเงื่อนไข, แต่ถ้า มากกว่า 30 เปอร์เซ็นต์ ตกทันทีห้ามใช้, และสำหรับงาน เอสพีซี ค่า เอ็นดีซี ต้องมากกว่าหรือเท่ากับ 5 เสมอ
- **EN Reference:**  
  AIAG rules are clear: under 10 percent is acceptable, 10 to 30 percent is marginal, over 30 percent is unacceptable, and ndc must be at least 5 for SPC.

### AUD-M9L2-S05 (35 sec) — Diagnosing `EV > AV` vs `AV > EV`
- **Display Script (TH):**  
  เมื่อผลไม่ผ่าน ให้ดูว่าใครใหญ่กว่ากัน [ANIM: ev_av_fix] ถ้า **`EV` ใหญ่กว่า `AV`** แปลว่าตัวเกจหรือ Fixture หลวม ต้องซ่อมหรือเปลี่ยนเกจที่ละเอียดขึ้น แต่ถ้า **`AV` ใหญ่กว่า `EV`** แปลว่าคนวัดต่างกัน ต้องปรับ WI วิธีจับ หรือเปลี่ยนมาใช้ **Ratchet Stop Micrometer**
- **TTS Clean Script (TH):**  
  เมื่อผลไม่ผ่าน ให้ดูว่าใครใหญ่กว่ากัน ถ้า อีวี ใหญ่กว่า เอวี แปลว่าตัวเกจหรือ ฟิกซ์เจอร์ หลวม ต้องซ่อมหรือเปลี่ยนเกจที่ละเอียดขึ้น แต่ถ้า เอวี ใหญ่กว่า อีวี แปลว่าคนวัดต่างกัน ต้องปรับ ดับเบิลยูไอ วิธีจับ หรือเปลี่ยนมาใช้ แรตเชต สต็อป ไมโครมิเตอร์
- **EN Reference:**  
  If EV dominates, fix or upgrade the gage; if AV dominates, standardize clamping technique or switch to a constant-force ratchet stop micrometer.

### AUD-M9L2-S06 (30 sec) — Interactive Repeatability vs Reproducibility Lab
- **Display Script (TH):**  
  ลองสลับดูอาการ `EV > AV` กับ `AV > EV` ใน Lab ด้านล่าง แล้วเลือกวิธีแก้ให้ `%GRR` ผ่านเกณฑ์
- **TTS Clean Script (TH):**  
  ลองสลับดูอาการ อีวี มากกว่า เอวี กับ เอวี มากกว่า อีวี ใน แล็บ ด้านล่าง แล้วเลือกวิธีแก้ให้ เปอร์เซ็นต์ จีอาร์อาร์ ผ่านเกณฑ์
- **EN Reference:**  
  Toggle between EV-dominant and AV-dominant scenarios below and apply the right corrective fix.

### AUD-M9L2-S07 (40 sec) — `X̄-R` vs `ANOVA` Calculation Methods
- **Display Script (TH):**  
  วิธีคำนวณ Gage R&R มี 2 แบบ [ANIM: xbar_r_vs_anova] **`X̄-R` Method** คำนวณมือง่าย ไว เหมาะกับ Quick Check หน้าไลน์ แต่แยก Interaction ไม่ได้ ส่วน **`ANOVA` Method** ใช้ซอฟต์แวร์คำนวณ แม่นยำกว่า แยก **`Part × Appraiser Interaction`** ได้ จึงเป็นวิธีที่ AIAG แนะนำหลักสำหรับรายงานส่งลูกค้า
- **TTS Clean Script (TH):**  
  วิธีคำนวณ เกจ อาร์แอนด์อาร์ มี 2 แบบ เอ็กซ์บาร์ อาร์ เมธอด คำนวณมือง่าย ไว เหมาะกับ ควิก เช็ก หน้าไลน์ แต่แยก อินเตอร์แอคชั่น ไม่ได้ ส่วน อะโนวา เมธอด ใช้ซอฟต์แวร์คำนวณ แม่นยำกว่า แยก พาร์ต คูณ แอปเพรเซอร์ อินเตอร์แอคชั่น ได้ จึงเป็นวิธีที่ เอไอเอจี แนะนำหลักสำหรับรายงานส่งลูกค้า
- **EN Reference:**  
  Use the X-bar R method for quick shop-floor checks, and choose ANOVA whenever software is available or you need to detect part-by-appraiser interaction for customer PPAP reports.

### AUD-M9L2-S08 (40 sec) — Non-Destructive vs Destructive MSA
- **Display Script (TH):**  
  สำหรับ Variable MSA แบ่งเป็น 2 แบบ [ANIM: destructive_msa] **Non-Destructive** ชิ้นงานไม่เสีย วัดซ้ำชิ้นเดิมได้ ใช้ Crossed Study 10×3×3 ปกติ แต่ถ้าเป็น **Destructive** เช่น Pull Test ดึงขาด วัดซ้ำไม่ได้ ให้ใช้ **Nested Study** โดยสุ่มชิ้นงานจาก **Batch เดียวกันที่ผลิตต่อเนื่องติดกัน** แบ่งให้แต่ละคนวัด
- **TTS Clean Script (TH):**  
  สำหรับ แวริเอเบิล เอ็มเอสเอ แบ่งเป็น 2 แบบ นอนดีสตรักทีฟ ชิ้นงานไม่เสีย วัดซ้ำชิ้นเดิมได้ ใช้ ครอส สตัดดี้ 10 คูณ 3 คูณ 3 ปกติ แต่ถ้าเป็น ดีสตรักทีฟ เช่น พูล เทสต์ ดึงขาด วัดซ้ำไม่ได้ ให้ใช้ เนสเต็ด สตัดดี้ โดยสุ่มชิ้นงานจาก แบตช์ เดียวกันที่ผลิตต่อเนื่องติดกัน แบ่งให้แต่ละคนวัด
- **EN Reference:**  
  Non-destructive tests repeat measurements on the same parts in a crossed study, whereas destructive tests require a nested design using homogeneous consecutive batches.

### AUD-M9L2-S09 (40 sec) — Special Cases: `Appraiser = 1` & Automated Gage
- **Display Script (TH):**  
  ถ้ามี **Appraiser แค่ 1 คน** ทำ Gage R&R มาตรฐานไม่ได้ เพราะหา `AV` ไม่ได้ ให้แก้โดยทำ **Type 1 Gage Study** วัด Master ซ้ำ 50 ครั้งแทน [PAUSE-1] ส่วนกรณี **เครื่องวัดอัตโนมัติ** ที่คนแค่ Load งานแล้วกดปุ่ม ให้ทำ **EV Study** ของเครื่อง และลองสลับ 2–3 คนมา Load งานเพื่อพิสูจน์ว่าคนไม่มีผล
- **TTS Clean Script (TH):**  
  ถ้ามี แอปเพรเซอร์ แค่ 1 คน ทำ เกจ อาร์แอนด์อาร์ มาตรฐานไม่ได้ เพราะหา เอวี ไม่ได้ ให้แก้โดยทำ ไทป์ วัน เกจ สตัดดี้ วัด มาสเตอร์ ซ้ำ 50 ครั้งแทน, ส่วนกรณี เครื่องวัดอัตโนมัติ ที่คนแค่ โหลด งานแล้วกดปุ่ม ให้ทำ อีวี สตัดดี้ ของเครื่อง และลองสลับ 2 ถึง 3 คนมา โหลด งานเพื่อพิสูจน์ว่าคนไม่มีผล
- **EN Reference:**  
  With only one appraiser, AV cannot be estimated—run a Type 1 Gage Study on a master part instead. For automated gages, evaluate machine EV and verify part-loading consistency across operators.

### AUD-M9L2-S10 (20 sec) — Lesson 2 Knowledge Check
- **Display Script (TH):**  
  ทบทวนความเข้าใจเรื่อง Gage R&R, `X̄-R` vs `ANOVA`, และ Destructive MSA จำนวน 2 ข้อ
- **TTS Clean Script (TH):**  
  ทบทวนความเข้าใจเรื่อง เกจ อาร์แอนด์อาร์ เอ็กซ์บาร์ อาร์ เทียบ อะโนวา และ ดีสตรักทีฟ เอ็มเอสเอ จำนวน 2 ข้อ
- **EN Reference:**  
  Complete two review questions on Gage R&R methods, destructive studies, and special appraiser cases.

---

## LESSON M9-L3: `Bias`, `Linearity` & `Stability`

### AUD-M9L3-S01 (35 sec) — Accuracy vs Precision
- **Display Script (TH):**  
  Gage R&R บอกแค่ว่าเกจวัด **เกาะกลุ่มกันไหม (Precision)** [ANIM: accuracy_precision] แต่ยังไม่บอกว่าวัด **ตรงความจริงไหม (Accuracy)** เราจึงต้องตรวจอีก 3 ตัวคือ **Bias, Linearity, และ Stability**
- **TTS Clean Script (TH):**  
  เกจ อาร์แอนด์อาร์ บอกแค่ว่าเกจวัด เกาะกลุ่มกันไหม หรือ พรีซิชั่น แต่ยังไม่บอกว่าวัด ตรงความจริงไหม หรือ แอคคิวราซี เราจึงต้องตรวจอีก 3 ตัวคือ ไบแอส ลิเนียริตี้ และ สเตบิลิตี้
- **EN Reference:**  
  Gage R&R evaluates precision only. To ensure true accuracy, you must also verify Bias, Linearity, and Stability.

### AUD-M9L3-S02 (35 sec) — Bias: Systematic Offset
- **Display Script (TH):**  
  **Bias** คือผลต่างระหว่าง **ค่าเฉลี่ยที่วัดได้** เทียบกับ **ค่าจริงของ Master Gage Block** [ANIM: bias_offset] ถ้าวัด Master ซ้ำ 10–15 ครั้งแล้ว `0` ไม่อยู่ในช่วงความเชื่อมั่น แปลว่าเกจมี Offset ต้อง **Zero หรือ Calibrate** ใหม่
- **TTS Clean Script (TH):**  
  ไบแอส คือผลต่างระหว่าง ค่าเฉลี่ยที่วัดได้ เทียบกับ ค่าจริงของ มาสเตอร์ เกจ บล็อก ถ้าวัด มาสเตอร์ ซ้ำ 10 ถึง 15 ครั้งแล้ว 0 ไม่อยู่ในช่วงความเชื่อมั่น แปลว่าเกจมี ออฟเซต ต้อง ซีโร่ หรือ คาลิเบรต ใหม่
- **EN Reference:**  
  Bias is the average offset from a master reference block. If zero falls outside the confidence interval, zero or recalibrate the gage.

### AUD-M9L3-S03 (40 sec) — Linearity: Bias Across Operating Range
- **Display Script (TH):**  
  **Linearity** คือการตรวจว่า **Bias คงที่ตลอดช่วงการใช้งาน** หรือไม่ [ANIM: linearity_slope] โดยใช้ Master อย่างน้อย **5 ขนาด** ตั้งแต่ค่าน้อยสุดถึงมากสุด ถ้ากราฟเอียงชัน แปลว่าวัดชิ้นเล็กแม่นแต่วัดชิ้นใหญ่เพี้ยน ต้องส่งซ่อมหรือสอบเทียบ
- **TTS Clean Script (TH):**  
  ลิเนียริตี้ คือการตรวจว่า ไบแอส คงที่ตลอดช่วงการใช้งาน หรือไม่ โดยใช้ มาสเตอร์ อย่างน้อย 5 ขนาด ตั้งแต่ค่าน้อยสุดถึงมากสุด ถ้ากราฟเอียงชัน แปลว่าวัดชิ้นเล็กแม่นแต่วัดชิ้นใหญ่เพี้ยน ต้องส่งซ่อมหรือสอบเทียบ
- **EN Reference:**  
  Linearity checks whether bias stays constant across five master sizes spanning your operating range; a steep slope signals mechanical wear or calibration error.

### AUD-M9L3-S04 (40 sec) — Stability: Consistency Over Time
- **Display Script (TH):**  
  **Stability** คือความนิ่งของเกจ **เมื่อเวลาผ่านไป** [ANIM: stability_chart] วิธีตรวจเท่มากคือเอา **Control Chart มาคุมเครื่องวัดเอง** โดยวัด Master Check Standard ทุกกะหรือทุกวัน ถ้าเกิดจุด OOC แปลว่าเกจเริ่ม Drift ต้องหยุดใช้ทันที
- **TTS Clean Script (TH):**  
  สเตบิลิตี้ คือความนิ่งของเกจ เมื่อเวลาผ่านไป วิธีตรวจเท่มากคือเอา คอนโทรล ชาร์ท มาคุมเครื่องวัดเอง โดยวัด มาสเตอร์ เช็ก สแตนดาร์ด ทุกกะหรือทุกวัน ถ้าเกิดจุด โอโอซี แปลว่าเกจเริ่ม ดริฟต์ ต้องหยุดใช้ทันที
- **EN Reference:**  
  Stability tracks measurement consistency over time by plotting a master check standard on an X-bar R control chart every shift or day.

### AUD-M9L3-S05 (30 sec) — Interactive Bias, Linearity & Stability Diagnostic
- **Display Script (TH):**  
  ลองวินิจฉัยกราฟทั้ง 3 อาการและจับคู่วิธีแก้ไขที่ถูกต้องด้านล่าง
- **TTS Clean Script (TH):**  
  ลองวินิจฉัยกราฟทั้ง 3 อาการและจับคู่วิธีแก้ไขที่ถูกต้องด้านล่าง
- **EN Reference:**  
  Diagnose the three accuracy charts below and match each to its proper corrective action.

### AUD-M9L3-S06 (20 sec) — Lesson 3 Knowledge Check
- **Display Script (TH):**  
  เช็คความเข้าใจเรื่อง Bias, Linearity และ Stability จำนวน 2 ข้อ
- **TTS Clean Script (TH):**  
  เช็คความเข้าใจเรื่อง ไบแอส ลิเนียริตี้ และ สเตบิลิตี้ จำนวน 2 ข้อ
- **EN Reference:**  
  Answer two quick check questions on Bias, Linearity, and Stability.

---

## LESSON M9-L4: Gage R&R Report Workshop & Bridge to Module 10

### AUD-M9L4-S01 (40 sec) — Anatomy of 6-Panel Gage R&R Report
- **Display Script (TH):**  
  เวลาอ่าน **Gage R&R Report 6 ช่อง** จำหลักง่ายๆ [ANIM: report_6panel] หนึ่ง **`R` Chart** ต้องนิ่งอยู่ในเส้นควบคุม แต่สอง **`Xbar` Chart** ต้อง **หลุดออกนอกเส้น `UCL/LCL` ให้มากที่สุด** เพื่อพิสูจน์ว่าเกจแยกความต่างระหว่างชิ้นงานได้จริง!
- **TTS Clean Script (TH):**  
  เวลาอ่าน เกจ อาร์แอนด์อาร์ รีพอร์ต 6 ช่อง จำหลักง่ายๆ หนึ่ง อาร์ ชาร์ท ต้องนิ่งอยู่ในเส้นควบคุม แต่สอง เอ็กซ์บาร์ ชาร์ท ต้อง หลุดออกนอกเส้น ยูซีแอล แอลซีแอล ให้มากที่สุด เพื่อพิสูจน์ว่าเกจแยกความต่างระหว่างชิ้นงานได้จริง
- **EN Reference:**  
  When reading a six-panel Gage R&R report, the Range chart should stay in control while the X-bar chart should show points outside control limits to confirm part discrimination.

### AUD-M9L4-S02 (35 sec) — Workshop Intro: Pin OD Gage R&R Study
- **Display Script (TH):**  
  มาลงมือทำ Workshop อ่านผล **Gage R&R ของงาน Pin OD (`12.000 ± 0.100 mm`)** จากข้อมูลจริง 90 การวัดในไฟล์ CSV กัน มาดูว่าทำไมรายงานถึงสอบตกและต้องแก้ตรงไหน!
- **TTS Clean Script (TH):**  
  มาลงมือทำ เวิร์กช็อป อ่านผล เกจ อาร์แอนด์อาร์ ของงาน พิน โอดี ขนาด 12.000 บวกลบ 0.100 มิลลิเมตร จากข้อมูลจริง 90 การวัดในไฟล์ ซีเอสวี กัน มาดูว่าทำไมรายงานถึงสอบตกและต้องแก้ตรงไหน
- **EN Reference:**  
  In this workshop, analyze 90 real Pin OD measurements in the CSV dataset to diagnose why the Gage R&R failed and how to fix it.

### AUD-M9L4-S03 (35 sec) — Interactive Workshop: Reading & Fixing the Report
- **Display Script (TH):**  
  ตรวจตัวเลข `%GRR`, `%Tolerance`, `ndc` และค่าเฉลี่ยของ Appraiser A, B, C ด้านล่าง เพื่อชี้ตัวการและเลือกวิธีแก้ที่ถูกต้อง
- **TTS Clean Script (TH):**  
  ตรวจตัวเลข เปอร์เซ็นต์ จีอาร์อาร์ เปอร์เซ็นต์ ทอเลอแรนซ์ เอ็นดีซี และค่าเฉลี่ยของ แอปเพรเซอร์ เอ บี ซี ด้านล่าง เพื่อชี้ตัวการและเลือกวิธีแก้ที่ถูกต้อง
- **EN Reference:**  
  Inspect percent GRR, percent Tolerance, ndc, and appraiser averages below to pinpoint the culprit and apply the fix.

### AUD-M9L4-S04 (35 sec) — Workshop Solution: Before vs After
- **Display Script (TH):**  
  เฉลยชัดเจน! [ANIM: workshop_grr_sol] ตัวเครื่องวัดแม่นยำมาก (`EV` ต่ำ) แต่ **`AV` สูงเพราะ Appraiser B กดไมโครมิเตอร์แรงเกินไป `-0.022 mm`** ทำให้ `%GRR` พุ่งถึง `51.25%` พอเปลี่ยนมาใช้ **Ratchet Stop** ค่า `%GRR` ลดเหลือต่ำกว่า **`8%`** และ `ndc >= 15` ผ่านฉลุย!
- **TTS Clean Script (TH):**  
  เฉลยชัดเจน ตัวเครื่องวัดแม่นยำมาก อีวี ต่ำ แต่ เอวี สูงเพราะ แอปเพรเซอร์ บี กดไมโครมิเตอร์แรงเกินไป ลบ 0.022 มิลลิเมตร ทำให้ เปอร์เซ็นต์ จีอาร์อาร์ พุ่งถึง 51.25 เปอร์เซ็นต์ พอเปลี่ยนมาใช้ แรตเชต สต็อป ค่า เปอร์เซ็นต์ จีอาร์อาร์ ลดเหลือต่ำกว่า 8 เปอร์เซ็นต์ และ เอ็นดีซี มากกว่าหรือเท่ากับ 15 ผ่านฉลุย
- **EN Reference:**  
  The gage itself was repeatable, but Appraiser B pressed too hard by minus 0.022 millimeters, driving GRR to 51.25 percent. Standardizing with a ratchet stop cuts GRR below 8 percent.

### AUD-M9L4-S05 (30 sec) — Attribute MSA (`Kappa`) Quick Note
- **Display Script (TH):**  
  สำหรับงานตรวจด้วยสายตา **Pass/Fail** เราใช้ **Attribute MSA (`Kappa`)** [ANIM: kappa_scale] โดยต้องได้ **`Kappa >= 0.75`** และมี **Visual Boundary Samples** เป็นตัวเทียบมาตรฐาน
- **TTS Clean Script (TH):**  
  สำหรับงานตรวจด้วยสายตา พาส เฟล เราใช้ แอตทริบิวต์ เอ็มเอสเอ แคปป้า โดยต้องได้ แคปป้า มากกว่าหรือเท่ากับ 0.75 และมี วิชวล บาวน์ดารี แซมเพิลส์ เป็นตัวเทียบมาตรฐาน
- **EN Reference:**  
  For visual pass/fail inspections, use Attribute MSA Kappa, targeting at least 0.75 supported by visual boundary samples.

### AUD-M9L4-S06 (35 sec) — Summary & Bridge to Module 10
- **Display Script (TH):**  
  ยินดีด้วยที่จบ **Module 9**! [PAUSE-1] [ANIM: m9_m10_bridge] ตอนนี้เรามีครบทั้งสถิติ, Capability, Control Chart, Problem Solving, และระบบวัด MSA แล้ว ใน **Module 10 บทส่งท้าย** เราจะลงสนาม **4 กรณีศึกษาอุตสาหกรรมมาตรฐาน AIAG** แบบครบวงจร!
- **TTS Clean Script (TH):**  
  ยินดีด้วยที่จบ โมดูล 9, ตอนนี้เรามีครบทั้งสถิติ คาพาบิลิตี้ คอนโทรล ชาร์ท พรอบเบลม ซอล์ฟวิ่ง และระบบวัด เอ็มเอสเอ แล้ว ใน โมดูล 10 บทส่งท้าย เราจะลงสนาม 4 กรณีศึกษาอุตสาหกรรมมาตรฐาน เอไอเอจี แบบครบวงจร
- **EN Reference:**  
  Congratulations on completing Module 9! Next in Module 10, we bring every skill together across four full AIAG-based industrial case studies.

### AUD-M9L4-S07 (20 sec) — Lesson 4 Knowledge Check
- **Display Script (TH):**  
  ทบทวนความเข้าใจเรื่องการอ่าน Gage R&R Report และ Attribute Kappa จำนวน 2 ข้อ
- **TTS Clean Script (TH):**  
  ทบทวนความเข้าใจเรื่องการอ่าน เกจ อาร์แอนด์อาร์ รีพอร์ต และ แอตทริบิวต์ แคปป้า จำนวน 2 ข้อ
- **EN Reference:**  
  Complete two review questions on reading Gage R&R reports and Attribute Kappa.

### AUD-M9L4-S08 (20 sec) — Module 9 Resources & Quick Checklist
- **Display Script (TH):**  
  ทบทวนเกณฑ์ AIAG MSA 4th Edition ใน Cheat Sheet ให้พร้อมก่อนเข้าสู่แบบทดสอบปลาย Module 9
- **TTS Clean Script (TH):**  
  ทบทวนเกณฑ์ เอไอเอจี เอ็มเอสเอ โฟร์ธ เอดิชั่น ใน ชีตชีต ให้พร้อมก่อนเข้าสู่แบบทดสอบปลาย โมดูล 9
- **EN Reference:**  
  Review the AIAG MSA quick reference checklist before starting the Module 9 Final Assessment.

### AUD-M9L4-S09 (20 sec) — Module 9 Final Exam
- **Display Script (TH):**  
  พร้อมแล้วเริ่มทำแบบทดสอบปลาย Module 9 จำนวน 20 ข้อ เกณฑ์ผ่าน 80 เปอร์เซ็นต์ สู้ๆ !
- **TTS Clean Script (TH):**  
  พร้อมแล้วเริ่มทำแบบทดสอบปลาย โมดูล 9 จำนวน 20 ข้อ เกณฑ์ผ่าน 80 เปอร์เซ็นต์ สู้ๆ
- **EN Reference:**  
  Begin the 20-question Module 9 Final Assessment. Score at least 80 percent to unlock Module 10.

---

## Pronunciation Guide (คู่มือออกเสียงคำศัพท์เทคนิค Module 9 สำหรับ Thai TTS / นักพากย์)

| คำศัพท์บนหน้าจอ | คำอ่านภาษาไทยสำหรับ TTS | หมายเหตุ |
|---|---|---|
| `MSA` | เอ็มเอสเอ | Measurement System Analysis |
| `Gage R&R` | เกจ อาร์แอนด์อาร์ | Repeatability & Reproducibility |
| `Repeatability (EV)` | รีพีททะบิลิตี้ (อีวี) | Equipment Variation |
| `Reproducibility (AV)` | รีโพรดิวซิบิลิตี้ (เอวี) | Appraiser Variation |
| `ndc` | เอ็นดีซี | Number of Distinct Categories |
| `Bias / Linearity / Stability` | ไบแอส / ลิเนียริตี้ / สเตบิลิตี้ | ความแม่นยำเชิงตำแหน่งและเวลา |
| `Ratchet Stop` | แรตเชต สต็อป | กลไกคุมแรงกดไมโครมิเตอร์ |
| `Kappa` | แคปป้า | ดัชนีความสอดคล้อง Attribute MSA |
