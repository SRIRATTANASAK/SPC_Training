# Module 6 Voice Over Script Package (Thai Primary + TTS-Ready + EN Reference)

**Module:** Module 6 — Control Chart Selection (`I-MR, X̄-R, X̄-S` & `p, np, c, u` + 10 Real Factory Scenarios)  
**Total Audio Tracks:** 28 Tracks (`AUD-M6L1-S01` .. `AUD-M6L4-S08`)  
**Dual Format Ready:** Display Script (TH) สำหรับนักพากย์/Sync Animation + TTS Clean Script (TH) ปลอดสัญลักษณ์ พร้อมป้อน AI Thai TTS ทันที

---

## LESSON M6-L1: Variable Data Control Charts

### AUD-M6L1-S01 (25 sec) — Welcome & Why Chart Choice Matters
- **Display Script (TH):**  
  ยินดีต้อนรับสู่ Module 6 ครับ! [PAUSE-1] [ANIM: chart_choice_hero] จาก Module 5 เราเข้าใจหลักการทำงานของ Control Chart แล้ว แต่ถ้าเลือกชนิดของกราฟผิดตั้งแต่ต้น เส้นควบคุมจะเพี้ยนจนตาบอดหรือเตือนมั่วทันที วันนี้เรามาเรียนรู้วิธีเลือกทั้ง 7 กราฟมาตรฐานให้แม่น 100% ครับ
- **TTS Clean Script (TH):**  
  ยินดีต้อนรับสู่ โมดูล 6 ครับ, จาก โมดูล 5 เราเข้าใจหลักการทำงานของ คอนโทรล ชาร์ท แล้ว แต่ถ้าเลือกชนิดของกราฟผิดตั้งแต่ต้น เส้นควบคุมจะเพี้ยนจนตาบอดหรือเตือนมั่วทันที วันนี้เรามาเรียนรู้วิธีเลือกทั้ง 7 กราฟมาตรฐานให้แม่น 100 เปอร์เซ็นต์ ครับ
- **EN Reference:**  
  Welcome to Module 6: Control Chart Selection. Choosing the wrong chart distorts control limits and blinds your line—today we master all seven standard variable and attribute charts.

### AUD-M6L1-S02 (35 sec) — Variable Data Branches
- **Display Script (TH):**  
  เริ่มจากฝั่ง **Variable Data** ที่วัดเป็นตัวเลขต่อเนื่องเช่น มิลลิเมตร องศา หรือแรงบิดครับ [ANIM: variable_branches] การเลือกกราฟฝั่งนี้ถามคำถามเดียวเลยคือ **Subgroup Size `n` เท่าไร?** [PAUSE-1] ถ้า **`n = 1`** ใช้ `I-MR`, ถ้า **`n = 2 ถึง 10`** ใช้ $\bar{X}$-$R$, และถ้า **`n > 10`** ให้ใช้ $\bar{X}$-$S$ ครับ
- **TTS Clean Script (TH):**  
  เริ่มจากฝั่ง แวริเอเบิล ดาต้า ที่วัดเป็นตัวเลขต่อเนื่องเช่น มิลลิเมตร องศา หรือแรงบิดครับ การเลือกกราฟฝั่งนี้ถามคำถามเดียวเลยคือ ซับกรุ๊ป ไซส์ เอ็น เท่าไร, ถ้า เอ็น เท่ากับ 1 ใช้ ไอ เอ็มอาร์, ถ้า เอ็น 2 ถึง 10 ใช้ เอ็กซ์บาร์ อาร์, และถ้า เอ็น มากกว่า 10 ให้ใช้ เอ็กซ์บาร์ เอส ครับ
- **EN Reference:**  
  For continuous variable measurements, chart selection depends on one question: subgroup size n. Choose I-MR for n equals 1, X-bar and R for n between 2 and 10, and X-bar and S when n exceeds 10.

### AUD-M6L1-S03 (45 sec) — `I-MR` Chart (`n = 1`)
- **Display Script (TH):**  
  ตัวแรกคือ **`I-MR` Chart (`n = 1`)** ครับ [PAUSE-1] [ANIM: imr_demo] เหมาะกับงานที่เป็น Batch เช่น อุณหภูมิอ่างเคมี, การทดสอบแบบทำลายชิ้นงานราคาแพง, หรือเครื่องที่ตรวจ 100% ชิ้นต่อชิ้น [PAUSE-1] เราใช้ระยะห่างระหว่างสองจุดติดกัน หรือ **Moving Range** มาคำนวณเส้นควบคุมด้วยค่าคงที่ **`E2 = 2.660`** แต่จำไว้ว่า `I` Chart ไวต่อการแจกแจงเบ้มากกว่ากราฟค่าเฉลี่ย และต้องอ่าน $MR$ Chart ก่อนเสมอครับ
- **TTS Clean Script (TH):**  
  ตัวแรกคือ ไอ เอ็มอาร์ ชาร์ท ที่ เอ็น เท่ากับ 1 ครับ, เหมาะกับงานที่เป็น แบตช์ เช่น อุณหภูมิอ่างเคมี การทดสอบแบบทำลายชิ้นงานราคาแพง หรือเครื่องที่ตรวจ 100 เปอร์เซ็นต์ ชิ้นต่อชิ้น, เราใช้ระยะห่างระหว่างสองจุดติดกัน หรือ มูฟวิ่ง เรนจ์ มาคำนวณเส้นควบคุมด้วยค่าคงที่ อีทู เท่ากับ 2.660 แต่จำไว้ว่า ไอ ชาร์ท ไวต่อการแจกแจงเบ้มากกว่ากราฟค่าเฉลี่ย และต้องอ่าน เอ็มอาร์ ชาร์ท ก่อนเสมอครับ
- **EN Reference:**  
  Use the I-MR chart when only one observation exists per period, such as batch processes or destructive tests, using moving ranges with constant E2 equal to 2.660—while checking non-normality and reading MR first.

### AUD-M6L1-S04 (40 sec) — $\bar{X}$-$R$ Chart (`n = 2–10`)
- **Display Script (TH):**  
  ตัวที่สองคือ **$\bar{X}$-$R$ Chart** ขวัญใจโรงงานครับ [ANIM: xbar_r_cnc] ใช้เมื่อเก็บ **`n = 2` ถึง `10` ชิ้น** โดยเฉพาะ **`n = 4` หรือ `5`** อย่างเช่น วัดเพลา CNC ชั่วโมงละ 5 ชิ้น [PAUSE-1] จุดเด่นคือใช้พิสัย **Range (`Max - Min`)** คำนวณง่ายหน้าเครื่องจักรด้วย **`A2`, `D3`, `D4`** และแม่นยำเทียบเท่า SD ในกลุ่มขนาดเล็กครับ
- **TTS Clean Script (TH):**  
  ตัวที่สองคือ เอ็กซ์บาร์ อาร์ ชาร์ท ขวัญใจโรงงานครับ ใช้เมื่อเก็บ เอ็น เท่ากับ 2 ถึง 10 ชิ้น โดยเฉพาะ เอ็น เท่ากับ 4 หรือ 5 อย่างเช่น วัดเพลา ซีเอ็นซี ชั่วโมงละ 5 ชิ้น, จุดเด่นคือใช้พิสัย เรนจ์ คำนวณง่ายหน้าเครื่องจักรด้วย เอทู ดีทรี ดีโฟร์ และแม่นยำเทียบเท่า เอสดี ในกลุ่มขนาดเล็กครับ
- **EN Reference:**  
  The X-bar and R chart is the shop-floor workhorse for subgroups of 2 to 10—especially n equals 4 or 5—combining ease of range calculation with strong statistical sensitivity.

### AUD-M6L1-S05 (45 sec) — $\bar{X}$-$S$ Chart (`n > 10`)
- **Display Script (TH):**  
  แต่ถ้ากลุ่มตัวอย่างใหญ่กว่า 10 ชิ้น เช่น วัด **16 จุดบนแผ่น Wafer** หรือ **12 Spindles** ห้ามใช้ Range แล้วนะครับ! [PAUSE-1] [ANIM: xbar_s_efficiency] เพราะ Range ใช้แค่ค่าสูงสุดกับต่ำสุดแล้ว **โยนข้อมูลตรงกลางทิ้งทั้งหมด** ทำให้เสียประสิทธิภาพมาก เราจึงต้องใช้ **$\bar{X}$-$S$ Chart** ที่นำทุกจุดมาคำนวณ Standard Deviation ด้วยค่าคงที่ **`A3`, `B3`, `B4`, `c4`** ครับ
- **TTS Clean Script (TH):**  
  แต่ถ้ากลุ่มตัวอย่างใหญ่กว่า 10 ชิ้น เช่น วัด 16 จุดบนแผ่น เวเฟอร์ หรือ 12 สปินเดิลส์ ห้ามใช้ เรนจ์ แล้วนะครับ, เพราะ เรนจ์ ใช้แค่ค่าสูงสุดกับต่ำสุดแล้ว โยนข้อมูลตรงกลางทิ้งทั้งหมด ทำให้เสียประสิทธิภาพมาก เราจึงต้องใช้ เอ็กซ์บาร์ เอส ชาร์ท ที่นำทุกจุดมาคำนวณ สแตนดาร์ด ดีวิเอชั่น ด้วยค่าคงที่ เอทรี บีทรี บีโฟร์ ซีโฟร์ ครับ
- **EN Reference:**  
  Once subgroup size exceeds 10, range discards all middle data points and loses efficiency. Switch to the X-bar and S chart using standard deviation and constants A3, B3, B4, and c4.

### AUD-M6L1-S06 (35 sec) — Variable Constants Table
- **Display Script (TH):**  
  ตารางนี้รวมค่าคงที่มาตรฐานของ Variable Charts ตั้งแต่ **`n = 2` ถึง `15`** ไว้ครบครับ [ANIM: constants_highlight] จำง่ายๆ: `n = 2` ใช้ $E_2 = 2.660$ กับ `I-MR`, `n = 5` ใช้ $A_2 = 0.577$ กับ $\bar{X}$-$R$, และ `n = 15` ใช้ $A_3 = 0.789, B_3 = 0.428, B_4 = 1.572$ กับ $\bar{X}$-$S$ ครับ
- **TTS Clean Script (TH):**  
  ตารางนี้รวมค่าคงที่มาตรฐานของ แวริเอเบิล ชาร์ท ตั้งแต่ เอ็น เท่ากับ 2 ถึง 15 ไว้ครบครับ จำง่ายๆ เอ็น เท่ากับ 2 ใช้ อีทู เท่ากับ 2.660 กับ ไอ เอ็มอาร์, เอ็น เท่ากับ 5 ใช้ เอทู เท่ากับ 0.577 กับ เอ็กซ์บาร์ อาร์, และ เอ็น เท่ากับ 15 ใช้ เอทรี 0.789 บีทรี 0.428 บีโฟร์ 1.572 กับ เอ็กซ์บาร์ เอส ครับ
- **EN Reference:**  
  Keep this constants table handy: E2 equals 2.660 for moving ranges, A2 equals 0.577 at n equals 5 for X-bar R, and A3/B3/B4 for large X-bar S subgroups.

### AUD-M6L1-S07 (30 sec) — Variable Chart Efficiency Lab
- **Display Script (TH):**  
  ลองสลับโหมด `n = 1`, `n = 5`, และ `n = 15` ใน Lab ด้านล่าง เพื่อดูความต่างของการคำนวณเส้นควบคุมทั้ง 3 ชนิดครับ
- **TTS Clean Script (TH):**  
  ลองสลับโหมด เอ็น เท่ากับ 1 เอ็น เท่ากับ 5 และ เอ็น เท่ากับ 15 ใน แล็บ ด้านล่าง เพื่อดูความต่างของการคำนวณเส้นควบคุมทั้ง 3 ชนิดครับ
- **EN Reference:**  
  Switch between n equals 1, 5, and 15 in the interactive lab below to see limit widths and constants change in real time.

### AUD-M6L1-S08 (20 sec) — Lesson 1 Knowledge Check
- **Display Script (TH):**  
  ทบทวนความรู้เรื่อง `I-MR`, $\bar{X}$-$R$ และ $\bar{X}$-$S$ Chart ด้วยคำถาม 2 ข้อครับ
- **TTS Clean Script (TH):**  
  ทบทวนความรู้เรื่อง ไอ เอ็มอาร์ เอ็กซ์บาร์ อาร์ และ เอ็กซ์บาร์ เอส ชาร์ท ด้วยคำถาม 2 ข้อครับ
- **EN Reference:**  
  Complete two quick review questions on selecting variable control charts.

---

## LESSON M6-L2: Attribute Control Charts

### AUD-M6L2-S01 (35 sec) — Attribute Chart Role
- **Display Script (TH):**  
  ทีนี้มาดูฝั่ง **Attribute Data** หรือข้อมูลนับจำนวนครับ [ANIM: attribute_floor] เหมาะกับการตรวจด้วยสายตา Pass/Fail หรือนับรอยตำหนิ แต่ข้อควรจำคือ **Attribute ใช้ข้อมูลเยอะกว่า Variable มาก** ต้องเก็บถึง `50–200+` ชิ้นต่อจุดถึงจะเห็นความผิดปกติชัดครับ
- **TTS Clean Script (TH):**  
  ทีนี้มาดูฝั่ง แอตทริบิวต์ ดาต้า หรือข้อมูลนับจำนวนครับ เหมาะกับการตรวจด้วยสายตา พาส เฟล หรือนับรอยตำหนิ แต่ข้อควรจำคือ แอตทริบิวต์ ใช้ข้อมูลเยอะกว่า แวริเอเบิล มาก ต้องเก็บถึง 50 ถึง 200 ชิ้นขึ้นไปต่อจุดถึงจะเห็นความผิดปกติชัดครับ
- **EN Reference:**  
  Attribute charts monitor count or pass/fail data such as visual defects, but require much larger sample sizes—often 50 to 200 or more units per sample—than variable charts.

### AUD-M6L2-S02 (45 sec) — Defective vs Defect
- **Display Script (TH):**  
  นี่คือจุดตายอันดับหนึ่งที่วิศวกรมักสับสนครับ! [PAUSE-1] [ANIM: defective_vs_defect] แยก **Defective (ชิ้นเสีย)** ออกจาก **Defect (จุดตำหนิ)** ให้ขาดครับ: สมมติแผ่น PCB **1 แผ่นมีรอยขีดข่วน 5 จุด** — ถ้านับว่าเสียทั้งแผ่น มันคือ **`1 Defective`** (ใช้ `p` หรือ `np`) แต่ถ้านับรอยเสียทั้งหมด มันคือ **`5 Defects`** (ใช้ `c` หรือ `u`) ครับ!
- **TTS Clean Script (TH):**  
  นี่คือจุดตายอันดับหนึ่งที่วิศวกรมักสับสนครับ, แยก ดีเฟกทีฟ หรือชิ้นเสีย ออกจาก ดีเฟกต์ หรือจุดตำหนิ ให้ขาดครับ สมมติแผ่น พีซีบี 1 แผ่นมีรอยขีดข่วน 5 จุด, ถ้านับว่าเสียทั้งแผ่น มันคือ 1 ดีเฟกทีฟ ใช้ พี หรือ เอ็นพี, แต่ถ้านับรอยเสียทั้งหมด มันคือ 5 ดีเฟกต์ส ใช้ ซี หรือ ยู ครับ
- **EN Reference:**  
  Never confuse defective units with defects. One circuit board with five scratches counts as 1 defective unit for p or np charts, yet 5 defects for c or u charts.

### AUD-M6L2-S03 (45 sec) — `p` Chart vs `np` Chart
- **Display Script (TH):**  
  สำหรับ **Defective (ชิ้นเสีย)** มี 2 กราฟครับ [ANIM: p_vs_np] ถ้าขนาดตัวอย่างในแต่ละ Lot **เปลี่ยนไปมาไม่เท่ากัน** ต้องใช้ **`p` Chart** พล็อตสัดส่วนของเสีย ทำให้เส้น `UCL` และ `LCL` หยักเป็น **ขั้นบันได** ตามขนาด $n_i$ [PAUSE-1] แต่ถ้าตรวจจำนวน **เท่ากันเป๊ะทุกวัน** เช่น วันละ `100` ชิ้น ใช้ **`np` Chart** พล็อตเป็นจำนวนชิ้นเสียอ่านง่ายๆ ได้เลยครับ
- **TTS Clean Script (TH):**  
  สำหรับ ดีเฟกทีฟ หรือชิ้นเสีย มี 2 กราฟครับ ถ้าขนาดตัวอย่างในแต่ละ ล็อต เปลี่ยนไปมาไม่เท่ากัน ต้องใช้ พี ชาร์ท พล็อตสัดส่วนของเสีย ทำให้เส้น ยูซีแอล และ แอลซีแอล หยักเป็น ขั้นบันได ตามขนาด เอ็นไอ, แต่ถ้าตรวจจำนวน เท่ากันเป๊ะทุกวัน เช่น วันละ 100 ชิ้น ใช้ เอ็นพี ชาร์ท พล็อตเป็นจำนวนชิ้นเสียอ่านง่ายๆ ได้เลยครับ
- **EN Reference:**  
  For defective units, choose the p chart when sample sizes vary—producing staircase limits—or choose the np chart to plot raw defective counts whenever sample size remains strictly constant.

### AUD-M6L2-S04 (45 sec) — `c` Chart vs `u` Chart
- **Display Script (TH):**  
  ส่วนฝั่ง **Defects (จุดตำหนิ)** ก็มี 2 กราฟคู่กันครับ [ANIM: c_vs_u] ถ้าหน่วยตรวจสอบขนาดคงที่เสมอ เช่น นับรอยตำหนิสีบนรถ **1 คันรุ่นเดิมทุกวัน** ใช้ **`c` Chart** [PAUSE-1] แต่ถ้าขนาดกลุ่มตรวจเปลี่ยนไป เช่น วันนี้ตรวจ PCB `8` แผง พรุ่งนี้ตรวจ `20` แผง ต้องใช้ **`u` Chart** คำนวณตำหนิต่อหน่วยพร้อมเส้นขั้นบันไดครับ!
- **TTS Clean Script (TH):**  
  ส่วนฝั่ง ดีเฟกต์ส หรือจุดตำหนิ ก็มี 2 กราฟคู่กันครับ ถ้าหน่วยตรวจสอบขนาดคงที่เสมอ เช่น นับรอยตำหนิสีบนรถ 1 คันรุ่นเดิมทุกวัน ใช้ ซี ชาร์ท, แต่ถ้าขนาดกลุ่มตรวจเปลี่ยนไป เช่น วันนี้ตรวจ พีซีบี 8 แผง พรุ่งนี้ตรวจ 20 แผง ต้องใช้ ยู ชาร์ท คำนวณตำหนิต่อหน่วยพร้อมเส้นขั้นบันไดครับ
- **EN Reference:**  
  For defect counts, use the c chart when the inspection opportunity is constant, and switch to the u chart for defects per unit whenever inspected lot sizes fluctuate.

### AUD-M6L2-S05 (40 sec) — Zero-Bounds & Big-n Overdispersion
- **Display Script (TH):**  
  ข้อสังเกตสำคัญที่ต่อยอดจาก Module 5 ครับ [ANIM: attr_zero_bounds] เวลาคำนวณ **`LCL` ของ `p, np, c, u` แล้วติดลบ** ค่าของเสียจริงไม่มีทางติดลบได้ `LCL` นั้นจึง **ไม่ Valid** ต้องปัดเป็น **`0`** ทันที และระวังสายผลิตที่ตรวจปริมาณหลักหมื่นชิ้นต่อวัน เส้นอาจแคบเกินจริงจนต้องใช้ **Laney `p'/u'` Chart** เข้าช่วยครับ
- **TTS Clean Script (TH):**  
  ข้อสังเกตสำคัญที่ต่อยอดจาก โมดูล 5 ครับ เวลาคำนวณ แอลซีแอล ของ พี เอ็นพี ซี ยู แล้วติดลบ ค่าของเสียจริงไม่มีทางติดลบได้ แอลซีแอล นั้นจึง ไม่แวลิด ต้องปัดเป็น ศูนย์ ทันที และระวังสายผลิตที่ตรวจปริมาณหลักหมื่นชิ้นต่อวัน เส้นอาจแคบเกินจริงจนต้องใช้ เลนีย์ พีไพรม์ ยูไพรม์ ชาร์ท เข้าช่วยครับ
- **EN Reference:**  
  Just as in Module 5, whenever calculated LCL on an attribute chart falls below zero, it is invalid—clamp it to zero. Also watch for overdispersion in massive daily sample sizes, where Laney charts help.

### AUD-M6L2-S06 (30 sec) — Attribute Staircase Sandbox
- **Display Script (TH):**  
  มาลองเล่น Interactive Sandbox ด้านล่าง ลองสลับระหว่างจำนวนชิ้นเสีย กับจุดตำหนิ และเปลี่ยน Sample Size เพื่อดูเส้น Staircase UCL เปลี่ยนตามจริงครับ
- **TTS Clean Script (TH):**  
  มาลองเล่น อินเทอร์แอคทีฟ แซนด์บ็อกซ์ ด้านล่าง ลองสลับระหว่างจำนวนชิ้นเสีย กับจุดตำหนิ และเปลี่ยน แซมเปิล ไซส์ เพื่อดูเส้น สแตร์เคส ยูซีแอล เปลี่ยนตามจริงครับ
- **EN Reference:**  
  Use the sandbox below to compare defective versus defect counts and watch staircase control limits respond as sample size varies.

### AUD-M6L2-S07 (20 sec) — Lesson 2 Knowledge Check
- **Display Script (TH):**  
  เช็คความเข้าใจเรื่อง Defective vs Defect และกราฟ `p, np, c, u` จำนวน 2 ข้อครับ
- **TTS Clean Script (TH):**  
  เช็คความเข้าใจเรื่อง ดีเฟกทีฟ กับ ดีเฟกต์ และกราฟ พี เอ็นพี ซี ยู จำนวน 2 ข้อครับ
- **EN Reference:**  
  Answer two check questions on defective versus defect classification and attribute control charts.

---

## LESSON M6-L3: Control Chart Selection Matrix

### AUD-M6L3-S01 (40 sec) — Master 3-Step Decision Tree
- **Display Script (TH):**  
  สรุปเป็น **Decision Tree 3 คำถามจบ** ใช้ได้ตลอดชีวิตทำงานครับ [ANIM: decision_tree] **หนึ่ง:** เป็น Variable หรือ Attribute? **สอง:** ถ้า Variable ดูขนาด `n` (`1`, `2–10`, `>10`) แต่ถ้า Attribute ดูว่านับชิ้นเสีย (`Defective`) หรือจุดตำหนิ (`Defect`)? **สาม:** ขนาดตัวอย่างคงที่หรือเปลี่ยนไปมา? แค่นี้ก็ชี้เป้าถูกทั้ง 7 ชาร์ตครับ!
- **TTS Clean Script (TH):**  
  สรุปเป็น ดีซิชั่น ทรี 3 คำถามจบ ใช้ได้ตลอดชีวิตทำงานครับ, หนึ่ง เป็น แวริเอเบิล หรือ แอตทริบิวต์, สอง ถ้า แวริเอเบิล ดูขนาด เอ็น ว่า 1 หรือ 2 ถึง 10 หรือมากกว่า 10 แต่ถ้า แอตทริบิวต์ ดูว่านับชิ้นเสีย ดีเฟกทีฟ หรือจุดตำหนิ ดีเฟกต์, สาม ขนาดตัวอย่างคงที่หรือเปลี่ยนไปมา แค่นี้ก็ชี้เป้าถูกทั้ง 7 ชาร์ตครับ
- **EN Reference:**  
  Any standard control chart can be chosen in three questions: Variable or Attribute, subgroup size or defect type, and constant versus varying sample size.

### AUD-M6L3-S02 (40 sec) — Complete Selection Matrix
- **Display Script (TH):**  
  หน้านี้คือ **Master Selection Matrix** รวมสูตร ขนาดกลุ่มตัวอย่าง และตัวอย่างโรงงานจริงของทั้ง **7 Control Charts** ให้คุณเซฟไว้ใช้เทียบหน้าเครื่องจักรได้ทันทีครับ [ANIM: master_matrix]
- **TTS Clean Script (TH):**  
  หน้านี้คือ มาสเตอร์ ซีเลกชั่น เมทริกซ์ รวมสูตร ขนาดกลุ่มตัวอย่าง และตัวอย่างโรงงานจริงของทั้ง 7 คอนโทรล ชาร์ท ให้คุณเซฟไว้ใช้เทียบหน้าเครื่องจักรได้ทันทีครับ
- **EN Reference:**  
  Save this master matrix summarizing formulas, sample sizes, and industrial examples for all seven control charts.

### AUD-M6L3-S03 (45 sec) — Top 5 Chart Selection Mistakes
- **Display Script (TH):**  
  ระวัง 5 ความผิดพลาดยอดฮิตในโรงงานจริงนะครับ [PAUSE-1] [ANIM: top5_mistakes] ทั้งแอบจับข้อมูล `n=1` มายัดเป็น Subgroup `5` ชิ้น, ใช้ `R` Chart กับ `n=20`, ใช้ `np` หรือ `c` ทั้งที่ยอดตรวจรายวันไม่เท่ากัน, และข้อเสียดายที่สุดคือ **มีเวอร์เนียร์วัดตัวเลขได้ละเอียด แต่กลับบันทึกแค่ Pass/Fail ลง `p` Chart จนเสียความไวในการเตือนภัยครับ!**
- **TTS Clean Script (TH):**  
  ระวัง 5 ความผิดพลาดยอดฮิตในโรงงานจริงนะครับ, ทั้งแอบจับข้อมูล เอ็น เท่ากับ 1 มายัดเป็น ซับกรุ๊ป 5 ชิ้น ใช้ อาร์ ชาร์ท กับ เอ็น เท่ากับ 20 ใช้ เอ็นพี หรือ ซี ทั้งที่ยอดตรวจรายวันไม่เท่ากัน และข้อเสียดายที่สุดคือ มีเวอร์เนียร์วัดตัวเลขได้ละเอียด แต่กลับบันทึกแค่ พาส เฟล ลง พี ชาร์ท จนเสียความไวในการเตือนภัยครับ
- **EN Reference:**  
  Avoid five classic factory traps: grouping single-reading data, using R charts when n exceeds 10, applying np or c charts on varying sample sizes, and discarding continuous measurements into binary pass-fail counts.

### AUD-M6L3-S04 (30 sec) — Interactive Chart Selection Wizard
- **Display Script (TH):**  
  ลองใช้งาน **Interactive Chart Selection Wizard** เลือกตอบทีละคำถามจากโจทย์โรงงาน แล้วดู Chart สูตร และกฎ LCL ที่ Wizard แนะนำครับ
- **TTS Clean Script (TH):**  
  ลองใช้งาน อินเทอร์แอคทีฟ ชาร์ท ซีเลกชั่น วิซาร์ด เลือกตอบทีละคำถามจากโจทย์โรงงาน แล้วดู ชาร์ท สูตร และกฎ แอลซีแอล ที่ วิซาร์ด แนะนำครับ
- **EN Reference:**  
  Step through the interactive chart selection wizard to match real process conditions with the proper control chart, formula, and rule boundaries.

### AUD-M6L3-S05 (20 sec) — Lesson 3 Knowledge Check
- **Display Script (TH):**  
  ทดสอบการตัดสินใจเลือก Control Chart จากสถานการณ์จริง 2 ข้อครับ
- **TTS Clean Script (TH):**  
  ทดสอบการตัดสินใจเลือก คอนโทรล ชาร์ท จากสถานการณ์จริง 2 ข้อครับ
- **EN Reference:**  
  Answer two check questions applying the control chart selection matrix and avoiding common traps.

---

## LESSON M6-L4: Workshop — 10 Real Factory Scenarios & Calculation

### AUD-M6L4-S01 (45 sec) — Workshop Part A: 10 Real Factory Scenarios
- **Display Script (TH):**  
  เข้าสู่ **Workshop Part A** ครับ [PAUSE-1] เรามีสถานการณ์หน้างานจริง **10 โรงงาน (`SCEN-01` ถึง `SCEN-10`)** ลองสวมหมวก Quality Engineer ตัดสินใจเลือก Control Chart ให้ถูกต้องอย่างน้อย **8 ใน 10 ข้อ** ครับ!
- **TTS Clean Script (TH):**  
  เข้าสู่ เวิร์คช็อป พาร์ท เอ ครับ, เรามีสถานการณ์หน้างานจริง 10 โรงงาน ตั้งแต่ เอสซีอีเอ็น 01 ถึง 10 ลองสวมหมวก ควอลิตี้ เอนจิเนียร์ ตัดสินใจเลือก คอนโทรล ชาร์ท ให้ถูกต้องอย่างน้อย 8 ใน 10 ข้อ ครับ
- **EN Reference:**  
  In Workshop Part A, test your engineering decision-making across ten real manufacturing scenarios and aim for at least eight out of ten correct.

### AUD-M6L4-S02 (45 sec) — Workshop Part A Solution (Cases 1–5)
- **Display Script (TH):**  
  มาดูเฉลย **Case 1 ถึง 5** ครับ [ANIM: cases_1_to_5] อุณหภูมิอ่างเคมีราย Batch ใช้ **`I-MR`**, เพลากลึง CNC ชั่วโมงละ 5 ชิ้นใช้ **$\bar{X}$-$R$**, วัด Wafer `16` จุด ใช้ **$\bar{X}$-$S$**, ตำหนิบัดกรี PCB ที่จำนวนแผงไม่เท่ากันใช้ **`u` Chart**, และตรวจมอเตอร์คงที่กะละ `100` ตัว Pass/Fail ใช้ **`np` Chart** ครับ
- **TTS Clean Script (TH):**  
  มาดูเฉลย เคส 1 ถึง 5 ครับ อุณหภูมิอ่างเคมีราย แบตช์ ใช้ ไอ เอ็มอาร์, เพลากลึง ซีเอ็นซี ชั่วโมงละ 5 ชิ้นใช้ เอ็กซ์บาร์ อาร์, วัด เวเฟอร์ 16 จุด ใช้ เอ็กซ์บาร์ เอส, ตำหนิบัดกรี พีซีบี ที่จำนวนแผงไม่เท่ากันใช้ ยู ชาร์ท, และตรวจมอเตอร์คงที่กะละ 100 ตัว พาส เฟล ใช้ เอ็นพี ชาร์ท ครับ
- **EN Reference:**  
  Cases 1 to 5 match bath temperature to I-MR, CNC five-part samples to X-bar R, 16-site wafers to X-bar S, variable PCB defect counts to u chart, and constant 100-motor audits to np chart.

### AUD-M6L4-S03 (45 sec) — Workshop Part A Solution (Cases 6–10)
- **Display Script (TH):**  
  ต่อที่ **Case 6 ถึง 10** ครับ [ANIM: cases_6_to_10] ตรวจรับ Lot ที่ยอดไม่เท่ากันดูชิ้นเสียใช้ **`p` Chart**, นับรอยขีดข่วนรถ `1` คันรุ่นเดิมใช้ **`c` Chart**, ทดสอบดึงทำลาย 1 ชิ้นต่อกะใช้ **`I-MR`**, วัด `12` Spindles ใช้ **$\bar{X}$-$S$**, และชั่งน้ำหนักพลาสติกกลุ่ม `4` ชิ้นใช้ **$\bar{X}$-$R$** ครับ!
- **TTS Clean Script (TH):**  
  ต่อที่ เคส 6 ถึง 10 ครับ ตรวจรับ ล็อต ที่ยอดไม่เท่ากันดูชิ้นเสียใช้ พี ชาร์ท, นับรอยขีดข่วนรถ 1 คันรุ่นเดิมใช้ ซี ชาร์ท, ทดสอบดึงทำลาย 1 ชิ้นต่อกะใช้ ไอ เอ็มอาร์, วัด 12 สปินเดิลส์ ใช้ เอ็กซ์บาร์ เอส, และชั่งน้ำหนักพลาสติกกลุ่ม 4 ชิ้นใช้ เอ็กซ์บาร์ อาร์ ครับ
- **EN Reference:**  
  Cases 6 to 10 assign varying incoming defective lots to p chart, single car body defects to c chart, destructive pull tests to I-MR, 12-spindle bores to X-bar S, and four-part mold weights to X-bar R.

### AUD-M6L4-S04 (40 sec) — Workshop Part B: `p` vs `u` Chart Lab
- **Display Script (TH):**  
  ต่อด้วย **Workshop Part B** ข้อมูลตรวจรับจริง `20 Lots` ครับ [PAUSE-1] ขนาดตัวอย่างเปลี่ยนตั้งแต่ `100` ถึง `180` ชิ้น ลองคำนวณทั้ง **`p` Chart (ชิ้นเสีย)** และ **`u` Chart (จุดตำหนิต่อชิ้น)** ดูสิว่า Lot ไหนผิดปกติบนกราฟใด!
- **TTS Clean Script (TH):**  
  ต่อด้วย เวิร์คช็อป พาร์ท บี ข้อมูลตรวจรับจริง 20 ล็อต ครับ, ขนาดตัวอย่างเปลี่ยนตั้งแต่ 100 ถึง 180 ชิ้น ลองคำนวณทั้ง พี ชาร์ท หรือชิ้นเสีย และ ยู ชาร์ท หรือจุดตำหนิต่อชิ้น ดูสิว่า ล็อต ไหนผิดปกติบนกราฟใด
- **EN Reference:**  
  In Workshop Part B, analyze 20 incoming lots with varying sample sizes on both p and u charts to spot staircase OOC lots.

### AUD-M6L4-S05 (45 sec) — Workshop Part B Solution
- **Display Script (TH):**  
  เฉลย Part B สุดยอดมากครับ! [ANIM: workshop6_partb_sol] บน **`p` Chart** เส้น `LCL` ติดลบหมดต้องปัดเป็น `0` และจับ **`LOT-12` (`9.33%`)** ทะลุ `UCL` [PAUSE-1] แต่ที่เด็ดคือ **`LOT-17`** ผ่าน `p Chart` แบบปกติที่ `2.86%` ทว่าบน **`u` Chart** กลับพุ่งหลุด `UCL` ที่ `0.1714` จุดต่อชิ้น เพราะชิ้นงานเสียเหล่านั้นมีตำหนิพ่วงชิ้นละหลายจุดนั่นเองครับ!
- **TTS Clean Script (TH):**  
  เฉลย พาร์ท บี สุดยอดมากครับ บน พี ชาร์ท เส้น แอลซีแอล ติดลบหมดต้องปัดเป็น 0 และจับ ล็อต 12 ที่ 9.33 เปอร์เซ็นต์ ทะลุ ยูซีแอล, แต่ที่เด็ดคือ ล็อต 17 ผ่าน พี ชาร์ท แบบปกติที่ 2.86 เปอร์เซ็นต์ ทว่าบน ยู ชาร์ท กลับพุ่งหลุด ยูซีแอล ที่ 0.1714 จุดต่อชิ้น เพราะชิ้นงานเสียเหล่านั้นมีตำหนิพ่วงชิ้นละหลายจุดนั่นเองครับ
- **EN Reference:**  
  The p chart flags LOT-12 at 9.33% while clamping negative LCLs to zero. Meanwhile, LOT-17 looks fine on the p chart yet explodes above UCL on the u chart—proving how defects-per-unit reveals hidden quality drops.

### AUD-M6L4-S06 (35 sec) — Control Plan Integration
- **Display Script (TH):**  
  เมื่อเลือก Control Chart และกฎ SPC Rules ครบแล้ว ให้บันทึกทุกอย่างลงใน **Control Plan** ของโรงงาน ทั้งชนิดกราฟ ขนาด `n` ความถี่สุ่ม และแผนโต้ตอบเมื่อหลุดควบคุมครับ [ANIM: control_plan_row]
- **TTS Clean Script (TH):**  
  เมื่อเลือก คอนโทรล ชาร์ท และกฎ เอสพีซี รูลส์ ครบแล้ว ให้บันทึกทุกอย่างลงใน คอนโทรล แพลน ของโรงงาน ทั้งชนิดกราฟ ขนาด เอ็น ความถี่สุ่ม และแผนโต้ตอบเมื่อหลุดควบคุมครับ
- **EN Reference:**  
  Document every selected chart, subgroup size, frequency, rule set, and reaction trigger directly inside your manufacturing Control Plan.

### AUD-M6L4-S07 (25 sec) — Bridge to Module 7
- **Display Script (TH):**  
  ยอดเยี่ยมมากครับ คุณเลือกเป็นครบทั้ง 7 กราฟแล้ว! ใน **Module 7** หน้าเราจะไปวางระบบ **SPC ในสายการผลิตจริง** ทั้ง Machining, Assembly, Injection, Stamping และ LPA ครับ!
- **TTS Clean Script (TH):**  
  ยอดเยี่ยมมากครับ คุณเลือกเป็นครบทั้ง 7 กราฟแล้ว ใน โมดูล 7 หน้าเราจะไปวางระบบ เอสพีซี ในสายการผลิตจริง ทั้ง แมชชีนนิ่ง แอสเซมบลี อินเจกชั่น แสตมปิ้ง และ แอลพีเอ ครับ
- **EN Reference:**  
  With all seven control charts mastered, Module 7 takes you onto the manufacturing floor to deploy SPC across machining, assembly, injection, stamping, and layered audits.

### AUD-M6L4-S08 (20 sec) — Module 6 Final Exam
- **Display Script (TH):**  
  ทำแบบทดสอบประมวลผล Module 6 จำนวน 20 ข้อให้ผ่าน 80 เปอร์เซ็นต์ เพื่อปลดล็อก Module 7 ได้เลยครับ!
- **TTS Clean Script (TH):**  
  ทำแบบทดสอบประมวลผล โมดูล 6 จำนวน 20 ข้อให้ผ่าน 80 เปอร์เซ็นต์ เพื่อปลดล็อก โมดูล 7 ได้เลยครับ
- **EN Reference:**  
  Complete the 20-question Module 6 assessment with 80% or higher to advance to Module 7.

---

## Pronunciation Guide (คำอ่านทับศัพท์เพิ่มเติมสำหรับ Module 6)
| คำศัพท์ | คำอ่านที่แนะนำ |
|---|---|
| `I-MR (Individuals & Moving Range)` | ไอ เอ็ม-อาร์ |
| `X̄-R / X̄-S Chart` | เอ็กซ์-บาร์ อาร์ / เอ็กซ์-บาร์ เอส ชาร์ท |
| `E2 / A3 / B3 / B4 / c4` | อี-ทู / เอ-ทรี / บี-ทรี / บี-โฟร์ / ซี-โฟร์ |
| `Defective vs Defect` | ดี-เฟก-ทีฟ กับ ดี-เฟกต์ |
| `p / np / c / u Chart` | พี / เอ็น-พี / ซี / ยู ชาร์ท |
| `Binomial / Poisson` | ไบ-โน-เมียล / พัว-ซอง |
| `Overdispersion / Laney` | โอ-เวอร์-ดิส-เพอร์-ชั่น / เล-นีย์ |
| `Staircase Limits` | สแตร์-เคส ลิ-มิต |
