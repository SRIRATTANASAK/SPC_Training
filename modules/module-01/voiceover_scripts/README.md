# เอกสารบทพูดและบทพากย์ Module 1 (แยกรายบทเรียนสำหรับตรวจทานและแก้ไข)

โฟลเดอร์นี้รวบรวมบทพูดและบทบรรยายทั้งหมดของ **Module 1: Statistics Foundation for Manufacturing** โดยแยกไฟล์ออกเป็น 4 บทเรียนตามโครงสร้างหน้าจอจริง รวมทั้งหมด **29 Tracks (`AUD-M1L1-S01` .. `AUD-M1L4-S08`)** เพื่อให้ปะป๊าสามารถเปิดอ่าน ตรวจสอบความถูกต้อง เสริมเนื้อหา หรือแก้ไขข้อความได้สะดวกค่ะ

---

## สารบัญไฟล์บทพูดแยกรายบทเรียน

1. [Lesson 1: Why Statistics in Manufacturing?](M1-L1_Why_Statistics_in_Manufacturing.md)
   - จำนวนหน้าจอ: 6 หน้าจอ (`AUD-M1L1-S01` ถึง `AUD-M1L1-S06`)
   - เนื้อหาหลัก: ทุกกระบวนการมีความแปรปรวน (Variation), Data-Driven Decision, ต้นทุนคุณภาพ COPQ, ปัจจัยความผันแปร 4M1E, และ Statistical Thinking

2. [Lesson 2: Types of Data & Measurement Scales](M1-L2_Types_of_Data___Measurement_Scales.md)
   - จำนวนหน้าจอ: 6 หน้าจอ (`AUD-M1L2-S01` ถึง `AUD-M1L2-S06`)
   - เนื้อหาหลัก: Variable vs Attribute Data, Continuous vs Discrete, มาตราการวัด 4 ระดับ (NOIR), Workshop การจำแนกข้อมูล และข้อควรระวังหน้างาน

3. [Lesson 3: Descriptive Statistics](M1-L3_Descriptive_Statistics.md)
   - จำนวนหน้าจอ: 9 หน้าจอ (`AUD-M1L3-S01` ถึง `AUD-M1L3-S09`)
   - เนื้อหาหลัก: Mean, Median, Mode, Range, Variance, Standard Deviation, Coefficient of Variation (CV), และ Sigma Simulator

4. [Lesson 4: Data Visualization & Final Assessment](M1-L4_Data_Visualization___Final_Assessment.md)
   - จำนวนหน้าจอ: 8 หน้าจอ (`AUD-M1L4-S01` ถึง `AUD-M1L4-S08`)
   - เนื้อหาหลัก: กราฟ 5 ชนิดในโรงงาน (Histogram, Box Plot, Pareto Chart, Scatter Plot, Run Chart), Workshop 2 วิเคราะห์ข้อมูลจริง และแบบทดสอบปลายบท EXAM-M1

---

## โครงสร้างในแต่ละหน้าจอ (Format Guide)

ในแต่ละหน้าจอจะมีข้อมูล 3 ส่วนหลักดังนี้ค่ะ:
- **Display Script (TH):** ข้อความภาษาไทยฉบับจัดหน้าจอ/บทพากย์คนจริง มีการใส่ `[PAUSE-1]` (หยุด 1 วิ) และเน้นคำสำคัญ
- **TTS Clean Script (TH):** ข้อความคำอ่านภาษาไทยสะอาด 100% ปลอดสัญลักษณ์ทางคณิตศาสตร์ สำหรับป้อนเข้าโมเดล AI TTS เพื่อสร้างไฟล์ `.mp3`
- **EN Reference:** คำแปลภาษาอังกฤษอ้างอิงสำหรับคำบรรยายสองภาษา

---

## ขั้นตอนเมื่อปะป๊าตรวจทานหรือแก้ไขข้อความเสร็จแล้ว:

1. หากปะป๊าแก้ไขข้อความในไฟล์ใดไฟล์หนึ่ง สามารถแจ้งสีนวลได้เลยค่ะ
2. สีนวลจะทำการซิงค์ข้อความกลับเข้าไปที่ `02_voiceover_th_en.md` และสั่งรันสคริปต์ `generate_tts.py` เพื่อเรนเดอร์ไฟล์เสียง `.mp3` ผู้หญิงโทนอ่อนหวานชุดใหม่ให้ตรงกับบทพูดที่ปะป๊าปรับแก้ทันทีค่ะ
