# บทพากย์สำหรับตรวจและปรับแก้ — M1-L4: Data Visualization & Final Assessment
> **Module 1:** Statistics Foundation for Manufacturing  
> **สถานะ:** ฉบับแยกรายบทเรียนสำหรับปะป๊าตรวจทาน เสริม หรือแก้ไขข้อความก่อนนำไปลงเสียงจริง / เจนเนอเรต AI TTS  
> **คำแนะนำการแก้ไข:**
> 1. ปะป๊าสามารถแก้ไขข้อความในช่อง **[ฉบับแก้ไข / ร่างปรับปรุง]** ได้โดยตรง
> 2. หากต้องการแก้คำอ่านภาษาไทยสำหรับ AI ให้แก้ใน **TTS Clean Script (TH)** โดยหลีกเลี่ยงสัญลักษณ์คณิตศาสตร์ เช่น ใช้คำว่า "เอ็กซ์บาร์" แทน "$\bar{x}$"
> 3. ความยาวของบทพากย์ที่เหมาะสมคือประมาณ 130–145 คำต่อนาที (หน้าละประมาณ 25–45 วินาที)

---

### AUD-M1L4-S01 (25 sec) — Why Visualize Data?
- **Display Script (TH):**  
  ตัวเลขในตาราง 30 แถว ดูด้วยตาเปล่าแทบไม่รู้เลยว่าเครื่องจักรกำลังมีปัญหา [PAUSE-1] [ANIM: table_to_charts] การทำ **Data Visualization หรือการแสดงผลด้วยกราฟ** ช่วยให้วิศวกรเห็นความผิดปกติ รูปทรง และแนวโน้มได้ภายในไม่กี่วินาที
- **TTS Clean Script (TH):**  
  ตัวเลขในตาราง 30 แถว ดูด้วยตาเปล่าแทบไม่รู้เลยว่าเครื่องจักรกำลังมีปัญหา, การทำ เดต้า วิชวลไลเซชั่น หรือการแสดงผลด้วยกราฟ ช่วยให้วิศวกรเห็นความผิดปกติ รูปทรง และแนวโน้มได้ภายในไม่กี่วินาที
- **EN Reference:**  
  Visualizing data converts raw tables into clear patterns, anomalies, and trends that engineers can spot in seconds.

### AUD-M1L4-S02 (40 sec) — Histogram
- **Display Script (TH):**  
  กราฟแรกที่ขาดไม่ได้คือ **Histogram** [ANIM: histogram_bars] ใช้ดูรูปร่างการกระจายตัวของข้อมูล Variable ว่าเกาะกลุ่มตรง Target ไหม เบ้ซ้าย-ขวาหรือเปล่า [PAUSE-1] และถ้าเห็น Histogram ขอบตัดตรงเหมือนหน้าผา (Cliff Shape) ให้สงสัยทันทีเลยว่าหน้างานอาจมีการคัดแยกของเสียทิ้งไปก่อนส่งข้อมูลมา!
- **TTS Clean Script (TH):**  
  กราฟแรกที่ขาดไม่ได้คือ ฮิสโตแกรม, ใช้ดูรูปร่างการกระจายตัวของข้อมูล แวริเอเบิล ว่าเกาะกลุ่มตรงเป้าหมายไหม เบ้ซ้ายหรือเบ้ขวา, และถ้าเห็น ฮิสโตแกรม ขอบตัดตรงเหมือนหน้าผา ให้สงสัยทันทีเลยว่าหน้างานอาจมีการคัดแยกของเสียทิ้งไปก่อนส่งข้อมูลมา
- **EN Reference:**  
  A histogram reveals centering, spread, skewness, and patterns like bimodal peaks or cliff-shaped sorting artifacts.

### AUD-M1L4-S03 (40 sec) — Box Plot
- **Display Script (TH):**  
  กราฟที่สองคือ **Box Plot** [ANIM: boxplot_anatomy] จุดเด่นที่สุดของ Box Plot คือ **เอาไว้เทียบหลายเครื่องจักร หลายกะ หรือหลายแม่พิมพ์พร้อมๆ กัน** ในภาพเดียว [PAUSE-1] กล่องตรงกลางแสดงข้อมูล 50% ตรงกลาง (Q1 ถึง Q3) เส้นกลางกล่องคือ Median และจุดที่กระโดดแยกเดี่ยวๆ ออกไปคือ **Outlier** ที่ต้องรีบเข้าไปดู
- **TTS Clean Script (TH):**  
  กราฟที่สองคือ บ็อกซ์ พล็อต, จุดเด่นที่สุดของ บ็อกซ์ พล็อต คือ เอาไว้เทียบหลายเครื่องจักร หลายกะ หรือหลายแม่พิมพ์พร้อมๆ กันในภาพเดียว, กล่องตรงกลางแสดงข้อมูล 50 เปอร์เซ็นต์ ตรงกลาง คือ คิว 1 ถึง คิว 3 เส้นกลางกล่องคือ มีเดียน และจุดที่กระโดดแยกเดี่ยวๆ ออกไปคือ เอ้าท์ไลเออร์ ที่ต้องรีบเข้าไปดู
- **EN Reference:**  
  A box plot summarizes quartiles, median, spread, and outliers, making it ideal for comparing multiple machines, shifts, or cavities side by side.

### AUD-M1L4-S04 (40 sec) — Pareto Chart
- **Display Script (TH):**  
  กราฟที่สามคือ **Pareto Chart** ตามกฎ **80/20** [ANIM: pareto_sort] เรียงปัญหาจากมากไปน้อย พร้อมเส้นเปอร์เซ็นต์สะสม [PAUSE-1] เพื่อบอกว่าเราควรเอาเวลาและทรัพยากรไปแก้ปัญหา 20% แรก ที่เป็นตัวสร้างความเสียหาย 80% ให้โรงงานก่อน แทนที่จะไล่แก้ปัญหาจุกจิก
- **TTS Clean Script (TH):**  
  กราฟที่สามคือ พาเรโต้ ชาร์ท ตามกฎ 80 ยี่สิบ, เรียงปัญหาจากมากไปน้อย พร้อมเส้นเปอร์เซ็นต์สะสม, เพื่อบอกว่าเราควรเอาเวลาและทรัพยากรไปแก้ปัญหา 20 เปอร์เซ็นต์แรก ที่เป็นตัวสร้างความเสียหาย 80 เปอร์เซ็นต์ ให้โรงงานก่อน แทนที่จะไล่แก้ปัญหาจุกจิก
- **EN Reference:**  
  A Pareto chart ranks defect categories from highest to lowest alongside a cumulative percentage line to separate the vital few contributors from the trivial many.

### AUD-M1L4-S05 (40 sec) — Scatter Plot
- **Display Script (TH):**  
  กราฟที่สี่คือ **Scatter Plot** [ANIM: scatter_line] เอาไว้เช็คว่าตัวแปร X เช่น อุณหภูมิแม่พิมพ์ มีความสัมพันธ์กับตัวแปร Y เช่น ขนาดเส้นผ่านศูนย์กลางเพลาหรือไม่ [PAUSE-1] แต่จำไว้เสมอว่า **"Correlation ไม่เท่ากับ Causation"** เห็นจุดเรียงสวยเป็นเส้นตรง ต้องพิสูจน์ทางวิศวกรรมต่อด้วยเสมอ
- **TTS Clean Script (TH):**  
  กราฟที่สี่คือ สแก็ตเตอร์ พล็อต, เอาไว้เช็คว่าตัวแปร เอ็กซ์ เช่น อุณหภูมิแม่พิมพ์ มีความสัมพันธ์กับตัวแปร วาย เช่น ขนาดเส้นผ่านศูนย์กลางเพลาหรือไม่, แต่จำไว้เสมอว่า ความสัมพันธ์กัน ไม่ได้แปลว่าเป็นเหตุและผลกันเสมอไป เห็นจุดเรียงสวยเป็นเส้นตรง ต้องพิสูจน์ทางวิศวกรรมต่อด้วยเสมอ
- **EN Reference:**  
  A scatter plot explores relationships between two numerical variables such as process temperature and part diameter—always remembering that correlation does not automatically prove causation.

### AUD-M1L4-S06 (40 sec) — Run Chart
- **Display Script (TH):**  
  กราฟที่ห้าสำคัญมากๆ สำหรับการปูทางสู่ SPC คือ **Run Chart** [ANIM: runchart_draw] ลองคิดดูว่า: Histogram มองไม่เห็น "เวลา" ว่าชิ้นไหนผลิตก่อน-หลัง [PAUSE-1] แต่ **Run Chart** พล็อตข้อมูลเรียงตามเวลาเป๊ะ ทำให้เราเห็นทันทีว่าขนาดเพลาเริ่มไหลสูงขึ้นเรื่อยๆ ตอนบ่าย ซึ่งนี่คือจุดเริ่มต้นของ Control Chart ใน Module หน้า!
- **TTS Clean Script (TH):**  
  กราฟที่ห้าสำคัญมากๆ สำหรับการปูทางสู่ เอสพีซี คือ รัน ชาร์ท, ลองคิดดูว่า ฮิสโตแกรม มองไม่เห็นเวลา ว่าชิ้นไหนผลิตก่อนหลัง, แต่ รัน ชาร์ท พล็อตข้อมูลเรียงตามเวลาเป๊ะ ทำให้เราเห็นทันทีว่าขนาดเพลาเริ่มไหลสูงขึ้นเรื่อยๆ ตอนบ่าย ซึ่งนี่คือจุดเริ่มต้นของ คอนโทรล ชาร์ท ใน โมดูลหน้า
- **EN Reference:**  
  Unlike a histogram, a run chart plots measurements in time order, revealing drifts, shifts, and cycles over the shift—serving as the direct bridge to SPC control charts.

### AUD-M1L4-S07 (45 sec) — Workshop 2: Real Defect & Dimension Visualization
- **Display Script (TH):**  
  มาถึง **Workshop ที่ 2** แล้ว [PAUSE-1] เรามีชุดข้อมูลจริงจากการผลิตเพลา 30 ชิ้น ทั้งขนาด Diameter, อุณหภูมิ, ชื่อเครื่องจักร, และประเภท Defect [PAUSE-1] ลองจับคู่โจทย์ปัญหาหน้างาน 5 สถานการณ์กับกราฟที่ถูกต้อง แล้วเข้าไปอ่าน Dashboard ข้อมูลจริงเพื่อหาว่าปัญหาหลักของไลน์นี้อยู่ที่ไหน
- **TTS Clean Script (TH):**  
  มาถึง เวิร์คช็อป ที่ 2 แล้ว, เรามีชุดข้อมูลจริงจากการผลิตเพลา 30 ชิ้น ทั้งขนาดเส้นผ่านศูนย์กลาง อุณหภูมิ ชื่อเครื่องจักร และประเภท ดีเฟค, ลองจับคู่โจทย์ปัญหาหน้างาน 5 สถานการณ์กับกราฟที่ถูกต้อง แล้วเข้าไปอ่าน แดชบอร์ด ข้อมูลจริงเพื่อหาว่าปัญหาหลักของไลน์นี้อยู่ที่ไหน
- **EN Reference:**  
  In Workshop 2, match five engineering questions to the right charts and analyze our 30-part shaft production dataset to pinpoint the main defect drivers and machine drift.

### AUD-M1L4-S08 (25 sec) — Module 1 Wrap-Up & Final Exam
- **Display Script (TH):**  
  ขอแสดงความยินดีด้วย ตอนนี้ปูพื้นฐานสถิติครบทั้ง 4 บทแล้ว ตั้งแต่ความแปรปรวน, ชนิดข้อมูล, สถิติเชิงพรรณนา ไปจนถึงกราฟทั้ง 5 แบบ [PAUSE-1] ลองทำแบบทดสอบปลายบท 20 ข้อ (เกณฑ์ผ่าน 80%) เพื่อรับป้ายผ่าน Module 1 แล้วเจอกันใน Module 2 เรื่อง Probability & Distribution !
- **TTS Clean Script (TH):**  
  ขอแสดงความยินดีด้วย ตอนนี้ปูพื้นฐานสถิติครบทั้ง 4 บทแล้ว ตั้งแต่ความแปรปรวน ชนิดข้อมูล สถิติเชิงพรรณนา ไปจนถึงกราฟทั้ง 5 แบบ, ลองทำแบบทดสอบปลายบท 20 ข้อ เกณฑ์ผ่าน 80 เปอร์เซ็นต์ เพื่อรับป้ายผ่าน โมดูล 1 แล้วเจอกันใน โมดูล 2 เรื่อง ความน่าจะเป็นและการแจกแจง
- **EN Reference:**  
  Congratulations on completing Module 1. Take the 20-question final exam (80% passing score) to unlock Module 2: Probability and Distribution.
