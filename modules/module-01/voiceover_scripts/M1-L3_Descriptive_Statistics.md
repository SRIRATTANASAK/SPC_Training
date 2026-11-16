# บทพากย์สำหรับตรวจและปรับแก้ — M1-L3: Descriptive Statistics
> **Module 1:** Statistics Foundation for Manufacturing  
> **สถานะ:** ฉบับแยกรายบทเรียนสำหรับปะป๊าตรวจทาน เสริม หรือแก้ไขข้อความก่อนนำไปลงเสียงจริง / เจนเนอเรต AI TTS  
> **คำแนะนำการแก้ไข:**
> 1. ปะป๊าสามารถแก้ไขข้อความในช่อง **[ฉบับแก้ไข / ร่างปรับปรุง]** ได้โดยตรง
> 2. หากต้องการแก้คำอ่านภาษาไทยสำหรับ AI ให้แก้ใน **TTS Clean Script (TH)** โดยหลีกเลี่ยงสัญลักษณ์คณิตศาสตร์ เช่น ใช้คำว่า "เอ็กซ์บาร์" แทน "$\bar{x}$"
> 3. ความยาวของบทพากย์ที่เหมาะสมคือประมาณ 130–145 คำต่อนาที (หน้าละประมาณ 25–45 วินาที)

---

### AUD-M1L3-S01 (40 sec) — Mean
- **Display Script (TH):**  
  เมื่อมีข้อมูลเยอะๆ เราต้องย่อให้เหลือตัวเลขสำคัญไม่กี่ตัวเพื่ออ่านภาพรวม [PAUSE-1] [ANIM: mean_line] ตัวแรกคือ **Mean หรือค่าเฉลี่ย ($\bar{x}$)** ใช้บอกตำแหน่งศูนย์กลางของกระบวนการ [PAUSE-1] แต่ข้อควรระวังสำคัญคือ **Mean ไวต่อค่าผิดปกติ (Outlier) มาก** ถ้ามีชิ้นงานเพี้ยนหลุดไป 1 ชิ้น ค่าเฉลี่ยจะถูกดึงเอียงตามทันที ลองแก้ตัวเลขใน Mean Builder ดูได้เลย
- **TTS Clean Script (TH):**  
  เมื่อมีข้อมูลเยอะๆ เราต้องย่อให้เหลือตัวเลขสำคัญไม่กี่ตัวเพื่ออ่านภาพรวม, ตัวแรกคือ มีน หรือค่าเฉลี่ย เอ็กซ์บาร์ ใช้บอกตำแหน่งศูนย์กลางของกระบวนการ, แต่ข้อควรระวังสำคัญคือ มีน ไวต่อค่าผิดปกติ หรือ เอ้าท์ไลเออร์ มาก ถ้ามีชิ้นงานเพี้ยนหลุดไป 1 ชิ้น ค่าเฉลี่ยจะถูกดึงเอียงตามทันที ลองแก้ตัวเลขใน มีน บิวเดอร์ ดูได้เลย
- **EN Reference:**  
  The MEAN represents the arithmetic center of a data set and helps evaluate process centering, but it is sensitive to extreme outliers.

### AUD-M1L3-S02 (35 sec) — Median
- **Display Script (TH):**  
  เมื่อข้อมูลเบ้หรือมีค่าโดดผิดปกติ ตัวช่วยที่ดีกว่า Mean คือ **Median หรือค่ามัธยฐาน** [PAUSE-1] [ANIM: sort_animation] หลักการง่ายมาก คือจับข้อมูลมาเรียงจากน้อยไปมาก แล้วหยิบตัวที่อยู่ตรงกลางเป๊ะขึ้นมา [PAUSE-1] ค่านี้จะไม่ถูกค่า Outlier สุดโต่งมาดึงให้หลงทาง
- **TTS Clean Script (TH):**  
  เมื่อข้อมูลเบ้หรือมีค่าโดดผิดปกติ ตัวช่วยที่ดีกว่า มีน คือ มีเดียน หรือค่ามัธยฐาน, หลักการง่ายมาก คือจับข้อมูลมาเรียงจากน้อยไปมาก แล้วหยิบตัวที่อยู่ตรงกลางเป๊ะขึ้นมา, ค่านี้จะไม่ถูกค่า เอ้าท์ไลเออร์ สุดโต่งมาดึงให้หลงทาง
- **EN Reference:**  
  The MEDIAN is the middle value when data are arranged in ascending order. Unlike the mean, the median is robust against outliers and skewed data.

### AUD-M1L3-S03 (30 sec) — Mode
- **Display Script (TH):**  
  ตัวที่สามคือ **Mode หรือฐานนิยม** คือค่าที่โผล่ซ้ำบ่อยที่สุดในชุดข้อมูล [PAUSE-1] [ANIM: mode_bars] ข้อดีคือใช้กับข้อมูลหมวดหมู่ (Nominal) ได้ด้วย เช่น Defect ไหนพบบ่อยสุด และถ้าข้อมูลวัดขนาดมี Mode โผล่มา **2 ยอด (Bimodal)** ให้สงสัยทันทีว่าอาจมีข้อมูลจาก **2 เครื่องจักร หรือ 2 แม่พิมพ์ปนกันอยู่**
- **TTS Clean Script (TH):**  
  ตัวที่สามคือ โหมด หรือฐานนิยม คือค่าที่โผล่ซ้ำบ่อยที่สุดในชุดข้อมูล, ข้อดีคือใช้กับข้อมูลหมวดหมู่ นอมินัล ได้ด้วย เช่น ดีเฟค ไหนพบบ่อยสุด, และถ้าข้อมูลวัดขนาดมี โหมด โผล่มา 2 ยอด หรือ ไบโมดัล ให้สงสัยทันทีว่าอาจมีข้อมูลจาก 2 เครื่องจักร หรือ 2 แม่พิมพ์ปนกันอยู่
- **EN Reference:**  
  The MODE is the most frequently occurring value. In manufacturing, seeing two modes often signals mixed streams such as two machines, shifts, or mold cavities.

### AUD-M1L3-S04 (30 sec) — Range
- **Display Script (TH):**  
  ต่อมาคือตัววัดการกระจายตัวที่เร็วที่สุดบนไลน์ผลิต นั่นคือ **Range หรือพิสัย** ซึ่งเท่ากับ **ค่าสูงสุด ลบด้วย ค่าต่ำสุด** [PAUSE-1] [ANIM: range_expand] ข้อดีคือคำนวณง่ายมาก เหมาะกับกราฟ Xbar-R ที่เก็บตัวอย่างกลุ่มเล็กๆ แต่ข้อเสียคือดูแค่ 2 ตัวหัวท้าย จึงไม่ได้สะท้อนข้อมูลตัวที่อยู่ตรงกลาง
- **TTS Clean Script (TH):**  
  ต่อมาคือตัววัดการกระจายตัวที่เร็วที่สุดบนไลน์ผลิต นั่นคือ เรนจ์ หรือพิสัย ซึ่งเท่ากับ ค่าสูงสุด ลบด้วย ค่าต่ำสุด, ข้อดีคือคำนวณง่ายมาก เหมาะกับกราฟ เอ็กซ์บาร์ อาร์ ที่เก็บตัวอย่างกลุ่มเล็กๆ แต่ข้อเสียคือดูแค่ 2 ตัวหัวท้าย จึงไม่ได้สะท้อนข้อมูลตัวที่อยู่ตรงกลาง
- **EN Reference:**  
  The RANGE is the difference between maximum and minimum values. It is quick for small shop-floor subgroups, though it uses only two extreme points.

### AUD-M1L3-S05 (40 sec) — Variance
- **Display Script (TH):**  
  เพื่อให้เห็นการกระจายตัวของข้อมูล **ทุกตัว** เราจึงใช้ **Variance หรือความแปรปรวน ($s^2$)** [PAUSE-1] [ANIM: variance_squares] หลักการคือวัดว่าข้อมูลแต่ละตัวห่างจากค่าเฉลี่ยเท่าไหร่ แล้วยกกำลังสองเพื่อไม่ให้ค่าบวกกับค่าลบหักล้างกัน [PAUSE-1] และสำหรับการเก็บตัวอย่าง (Sample) เราจะหารด้วย $n - 1$ เพื่อให้เป็นตัวประมาณค่าประชากรที่ไม่เอนเอียง
- **TTS Clean Script (TH):**  
  เพื่อให้เห็นการกระจายตัวของข้อมูลทุกตัว เราจึงใช้ แวเรียนซ์ หรือความแปรปรวน เอสกำลังสอง, หลักการคือวัดว่าข้อมูลแต่ละตัวห่างจากค่าเฉลี่ยเท่าไหร่ แล้วยกกำลังสองเพื่อไม่ให้ค่าบวกกับค่าลบหักล้างกัน, และสำหรับการเก็บตัวอย่าง เราจะหารด้วย เอ็น ลบ หนึ่ง เพื่อให้เป็นตัวประมาณค่าประชากรที่ไม่เอนเอียง
- **EN Reference:**  
  Sample variance averages the squared deviations from the mean across all observations using n minus 1 in the denominator to provide an unbiased estimate of process spread.

### AUD-M1L3-S06 (45 sec) — Standard Deviation
- **Display Script (TH):**  
  เนื่องจาก Variance มีหน่วยเป็นกำลังสอง เช่น ตารางมิลลิเมตร อ่านยากหน้างาน เราจึงถอดรากที่สองกลับมาเป็น **Standard Deviation หรือส่วนเบี่ยงเบนมาตรฐาน ($s$ / $\sigma$)** เพื่อให้มีหน่วยเดียวกับชิ้นงานจริง [PAUSE-1] [ANIM: bell_sigma] ในโค้งปกติ ข้อมูลประมาณ **68% จะอยู่ในช่วง $\pm 1\sigma$**, **95% อยู่ในช่วง $\pm 2\sigma$**, และ **99.7% อยู่ในช่วง $\pm 3\sigma$** ซึ่งนี่แหละคือรากฐานของเส้น Control Limit ใน SPC!
- **TTS Clean Script (TH):**  
  เนื่องจาก แวเรียนซ์ มีหน่วยเป็นกำลังสอง เช่น ตารางมิลลิเมตร อ่านยากหน้างาน เราจึงถอดรากที่สองกลับมาเป็น สแตนดาร์ด ดีวิเอชั่น หรือส่วนเบี่ยงเบนมาตรฐาน ซิกม่า เพื่อให้มีหน่วยเดียวกับชิ้นงานจริง, ในโค้งปกติ ข้อมูลประมาณ 68 เปอร์เซ็นต์ จะอยู่ในช่วง บวกลบ 1 ซิกม่า, 95 เปอร์เซ็นต์ อยู่ในช่วง บวกลบ 2 ซิกม่า, และ 99.7 เปอร์เซ็นต์ อยู่ในช่วง บวกลบ 3 ซิกม่า ซึ่งนี่แหละคือรากฐานของเส้น คอนโทรล ลิมิต ใน เอสพีซี
- **EN Reference:**  
  Standard deviation returns spread to the original measurement unit. Under a normal distribution, roughly 68%, 95%, and 99.7% of output fall within plus or minus 1, 2, and 3 sigma of the mean.

### AUD-M1L3-S07 (35 sec) — Coefficient of Variation (CV)
- **Display Script (TH):**  
  แล้วถ้าอยากเทียบความนิ่งของงาน 2 ชิ้นที่ขนาดต่างกันมากๆ ? เช่น เทียบพินเล็ก 10 มม. กับเพลายาว 500 มม. [PAUSE-1] [ANIM: cv_dashboard] เราจะเทียบ SD ตรงๆ ไม่ได้ ต้องใช้ **CV หรือ Coefficient of Variation** คือเอา SD หารด้วย Mean แล้วคูณ 100% [PAUSE-1] ค่ายิ่งน้อย แปลว่ากระบวนการยิ่งนิ่งเมื่อเทียบกับขนาดของมัน
- **TTS Clean Script (TH):**  
  แล้วถ้าอยากเทียบความนิ่งของงาน 2 ชิ้นที่ขนาดต่างกันมากๆ เช่น เทียบพินเล็ก 10 มิลลิเมตร กับเพลายาว 500 มิลลิเมตร, เราจะเทียบ เอสดี ตรงๆ ไม่ได้ ต้องใช้ ซีวี หรือ คอเอฟฟิเชียนท์ ออฟ แวริเอชั่น คือเอา เอสดี หารด้วย มีน แล้วคูณ 100 เปอร์เซ็นต์, ค่ายิ่งน้อย แปลว่ากระบวนการยิ่งนิ่งเมื่อเทียบกับขนาดของมัน
- **EN Reference:**  
  The Coefficient of Variation expresses standard deviation as a percentage of the mean, allowing fair comparison of relative variation across different scales or units.

### AUD-M1L3-S08 (45 sec) — Sigma Simulator & Match Game
- **Display Script (TH):**  
  มาลองเล่น **Sigma Simulator** กัน [ANIM: sigma_slider] ลองเลื่อนแถบค่า Sigma จาก 0.1 ไป 3.0 แล้วสังเกตดูว่าเมื่อ Sigma เพิ่มขึ้น ฐานของ Histogram จะกว้างออกจนล้นออกนอกเส้น Spec USL และ LSL ทำให้เกิดของเสียเพิ่มขึ้นทันที [PAUSE-1] เล่นเสร็จแล้ว ลองจับคู่คำศัพท์สถิติ 7 คำด้านล่างให้ครบ
- **TTS Clean Script (TH):**  
  มาลองเล่น ซิกม่า ซิมูเลเตอร์ กัน, ลองเลื่อนแถบค่า ซิกม่า จาก 0.1 ไป 3.0 แล้วสังเกตดูว่าเมื่อ ซิกม่า เพิ่มขึ้น ฐานของ ฮิสโตแกรม จะกว้างออกจนล้นออกนอกเส้น สเปก ยูเอสแอล และ แอลเอสแอล ทำให้เกิดของเสียเพิ่มขึ้นทันที, เล่นเสร็จแล้ว ลองจับคู่คำศัพท์สถิติ 7 คำด้านล่างให้ครบ
- **EN Reference:**  
  Move the sigma slider and observe the histogram. As sigma increases, the distribution widens toward specification limits, increasing nonconformance risk. Then complete the statistics matching game.

### AUD-M1L3-S09 (20 sec) — Lesson 3 Knowledge Check
- **Display Script (TH):**  
  มาทดสอบความเข้าใจสถิติเชิงพรรณนา 5 ข้อ ดูโจทย์ให้ดีว่าสถานการณ์ไหนควรใช้ Mean, Median, SD หรือ CV
- **TTS Clean Script (TH):**  
  มาทดสอบความเข้าใจสถิติเชิงพรรณนา 5 ข้อ ดูโจทย์ให้ดีว่าสถานการณ์ไหนควรใช้ มีน, มีเดียน, เอสดี หรือ ซีวี
- **EN Reference:**  
  Complete the 5-question Lesson 3 check to verify your ability to interpret and choose descriptive statistics.

---
