# HANDOFF.md — SPC & Manufacturing Statistics Online Training

เอกสารนี้เป็น **ศูนย์กลางส่งต่องาน (Single Source of Truth Handoff)** สำหรับการพัฒนาหลักสูตร **SPC & Manufacturing Statistics Online Training (Modules 1–10)** เพื่อให้ปะป๊า ทีมพัฒนาเว็บ และ AI ผู้ช่วย สามารถทำงานต่อเนื่องกันได้โดยไม่หลุดมาตรฐานและโครงสร้าง

---

## 1. ภาพรวมเป้าหมายและสถาปัตยกรรม (Project Vision & Architecture)

- **เจ้าของหลักสูตร:** SRIRATTANASAK (ปะป๊า)
- **กลุ่มผู้เรียน:** Manufacturing / Quality / Process / Maintenance Engineers และ Supervisor ในโรงงานอุตสาหกรรม (Automotive, Electronics, Machining, Injection, Stamping, Assembly)
- **เป้าหมายการส่งมอบ (Delivery Target):**
  1. **Markdown Repository (`SPC_Training`)**: เก็บเนื้อหา, Storyboard, บทเสียงบรรยาย, สเปก Interactive, ข้อสอบ, และชุดข้อมูล Workshop อย่างเป็นระบบ (รองรับทั้ง **Web App บน Internet** และสามารถ Export/Wrap เข้า LMS/SCORM ในอนาคตได้)
  2. **Interactive Web Training บน Internet**: แปลงเนื้อหาจาก Markdown/MDX เป็นเว็บแอปพลิเคชัน (แนะนำ **Astro + React/MDX** หรือ **Next.js + MDX** Deploy บน **Cloudflare Pages / Vercel / GitHub Pages**)
  3. **Animation & Interactive Simulations**: ผู้เรียนสามารถปรับค่า Slider, ลากวาง (Drag-and-Drop), กดดูการเปลี่ยนแปลงของกราฟสถิติ/SPC Chart แบบ Real-time
  4. **Thai Voice Narration**: เสียงบรรยายภาษาไทยประจำแต่ละ Screen ที่ Sync กับจังหวะการขึ้นข้อความและ Animation (รองรับทั้ง AI Thai TTS เช่น Edge TTS / Google Cloud TTS / ElevenLabs และการอัดเสียงจริง)

---

## 2. สถานะปัจจุบันของโปรเจกต์ (Current Status Snapshot)

| พื้นที่งาน | สถานะ | รายละเอียด |
|---|---|---|
| **Repo Governance & Handoff** | ✅ เสร็จสมบูรณ์ | สร้าง `README.md`, `HANDOFF.md`, `CURRICULUM_ROADMAP.md`, `.gitattributes`, `.gitignore` |
| **Module 1: Content & Specs** | ✅ เสร็จสมบูรณ์ 100% (Web/Animation/TTS Ready) | ซิงก์ครบ 29 หน้าจอ + เนื้อหาหน้าจอเต็ม (`00_lesson_content.md`) + บทพากย์ไทยแบบ TTS Clean (`02_voiceover_th_en.md`) + Interactive Spec ครบตัวเลือก/นิยาม + ข้อสอบจริง `Q001–Q060` + Cheat Sheet & Glossary + ข้อมูล Workshop `.csv` 2 ชุด |
| **Module 1: Visual Assets (`AST-M1-001..020`)** | ⏳ รอผลิตไฟล์ภาพ/SVG | มี Prompt และ Spec ครบใน `05_asset_spec.md` แล้ว (พร้อมส่งต่อทีมทำเว็บ/กราฟิก) |
| **Module 1: Audio Narration (`.mp3`)** | ⏳ รอ Generate/อัดเสียง | มี `TTS Clean Script (TH)` ครบทั้ง 29 Tracks ใน `02_voiceover_th_en.md` พร้อมป้อนเข้า TTS ทันที |
| **Module 1: Web Prototype** | ⏸️ พักไว้ก่อน (ทำ Markdown ให้ครบทุก Module ก่อน) | พร้อมพัฒนาเป็น Interactive Web + Animation + Voice Player ได้ทันทีเมื่อครบ Modules 1–10 |
| **Module 2: Content & Specs** | ✅ เสร็จสมบูรณ์ 100% (Web/Animation/TTS Ready) | ซิงก์ครบ 28 หน้าจอ + เนื้อหาเต็ม (`00_lesson_content.md`) + TTS Clean 28 Tracks + ข้อสอบจริง `M2-Q001–Q060` + CTQ Dataset 50 ชิ้น (`10 Subgroups`) |
| **Module 3: Content & Specs** | ✅ เสร็จสมบูรณ์ 100% (Web/Animation/TTS Ready) | ซิงก์ครบ 26 หน้าจอ + เนื้อหาเต็ม (`00_lesson_content.md`) + TTS Clean 26 Tracks + ข้อสอบจริง `M3-Q001–Q060` + Workshop `MC-A vs MC-B` 40 ชิ้น |
| **Module 4: Content & Specs** | ✅ เสร็จสมบูรณ์ 100% (Web/Animation/TTS Ready) | ซิงก์ครบ 27 หน้าจอ + เนื้อหาเต็ม (`00_lesson_content.md`) + TTS Clean 27 Tracks + ข้อสอบจริง `M4-Q001–Q060` + ครบทั้ง AIAG/VDA & JEDEC + Workshop `Pin_Length_mm` 100 ชิ้น (`20 Subgroups`) |
| **Module 5: Content & Specs** | ✅ เสร็จสมบูรณ์ 100% (Web/Animation/TTS Ready) | ซิงก์ครบ 28 หน้าจอ + เนื้อหาเต็ม (`00_lesson_content.md`) + TTS Clean 28 Tracks + ข้อสอบจริง `M5-Q001–Q060` + WE/Nelson Rules, `Mandatory vs Optional` Rule Selection (Zero-bounds & Raw Data vs Spec) + Animation `AST-M5-020` + Workshop `Shaft_OD_mm` 125 ชิ้น (`25 Subgroups`) |
| **Module 6: Content & Specs** | ✅ เสร็จสมบูรณ์ 100% (Web/Animation/TTS Ready) | ซิงก์ครบ 28 หน้าจอ + เนื้อหาเต็ม (`00_lesson_content.md`) + TTS Clean 28 Tracks + ข้อสอบจริง `M6-Q001–Q060` + Variable (`I-MR, X̄-R, X̄-S`) & Attribute (`p, np, c, u`) Selection Matrix & Wizard + Workshop 10 สถานการณ์ + Attribute 20-Lot CSV Lab |
| **Module 7: Content & Specs** | ✅ เสร็จสมบูรณ์ 100% (Web/Animation/TTS Ready) | ซิงก์ครบ 26 หน้าจอ + เนื้อหาเต็ม (`00_lesson_content.md`) + TTS Clean 26 Tracks + ข้อสอบจริง `M7-Q001–Q060` + 4-Phase Roadmap, 4 Core Lines, Reaction Plan & 3-Tier Escalation SLA, LPA (`CQI-8`) + 6-Station Control Plan CSV |
| **Module 8: Content & Specs** | ✅ เสร็จสมบูรณ์ 100% (Web/Animation/TTS Ready) | ซิงก์ครบ 28 หน้าจอ + เนื้อหาเต็ม (`00_lesson_content.md`) + TTS Clean 28 Tracks + ข้อสอบจริง `M8-Q001–Q060` + `OCAP` 5-Gate, `7 QC Tools` + Stratify/Dual Pareto/Scatter, `3-Legged 5 Why` / `FTA` / `Poka-Yoke`, `PDCA/Kaizen/DMAIC/8D` + Workshop CSV 2 ชุด (`24 Subgroups` & `200 Defects`) |
| **Module 9: Content & Specs** | ✅ เสร็จสมบูรณ์ 100% (Web/Animation/TTS Ready) | ซิงก์ครบ 27 หน้าจอ + เนื้อหาเต็ม (`00_lesson_content.md`) + TTS Clean 27 Tracks + ข้อสอบจริง `M9-Q001–Q060` + `σ²_obs = σ²_part + σ²_gage`, `Gage R&R` (`EV, AV, %GRR, %Tol, ndc`), `Bias / Linearity / Stability`, `Attribute Kappa` + Workshop `10×3×3` CSV (`90` การวัด) |
| **Module 10: Content & Specs** | ✅ เสร็จสมบูรณ์ 100% (Web/Animation/TTS Ready) | ซิงก์ครบ 24 หน้าจอ + เนื้อหาเต็ม (`00_lesson_content.md`) + TTS Clean 24 Tracks + ข้อสอบจริง `M10-Q001–Q060` + 4 AIAG Industrial Cases (`X̄-R + Cpk`, `I-MR Torque`, `p/u Defects`, `PPAP Ppk Release`) + 4 CSV Datasets จริง — **ครบ 10/10 Modules พร้อมเข้าสู่เฟสสร้างเว็บ (Phase B) แล้ว!** |

---

## 3. มาตรฐานโครงสร้างและระบบรหัส (Canonical Conventions)

ทุก Module (1 ถึง 10) **ต้อง** ใช้มาตรฐานรหัสเดียวกันเพื่อให้ Script อ่านไฟล์และทำเว็บอัตโนมัติได้:

### 3.1 โครงสร้างโฟลเดอร์ต่อ 1 Module
```text
modules/module-XX/
├── 00_lesson_content.md         # เนื้อหาบนหน้าจอฉบับเต็ม สูตร ตาราง ตัวอย่างคำนวณ (MDX Ready)
├── 01_storyboard.md             # ตาราง/หัวข้อครบทุก Screen ID
├── 02_voiceover_th_en.md        # บทพากย์ไทย + TTS Clean Script + EN Reference + Audio Cue
├── 03_screen_wireframe.md       # Layout หน้าจอ + Accessibility + Navigation
├── 04_interactive_logic.md      # State, Variables, Formula, Scoring, Quiz/Game Options
├── 05_asset_spec.md             # รายการรูปภาพ, SVG, Animation Spec
├── 06_assessment_bank.md        # ข้อสอบจริงพร้อม Choice A–D, เฉลย, Bloom, LO, คำอธิบาย
├── 07_workshop_guide.md         # โจทย์ Workshop + ขั้นตอนทำ + เฉลยสำหรับผู้สอน
├── 08_cheatsheet_and_glossary.md# สรุปสูตร 1 หน้าจบ & คำศัพท์ TH/EN สำหรับปุ่ม Resources
├── data/                        # ชุดข้อมูล CSV/JSON สำหรับ Workshop และ Simulator
└── assets/                      # (เพิ่มเมื่อผลิต) รูปภาพ .webp/.svg และไฟล์เสียง .mp3
```

### 3.2 ระบบรหัส (ID Naming Standard)
- **Module ID**: `M1` – `M10`
- **Lesson ID**: `M{x}-L{y}` เช่น `M1-L1`, `M4-L3`
- **Screen ID**: `M{x}L{y}-S{zz}` (2 หลัก) เช่น `M1L1-S01` ถึง `M1L4-S08`
- **Knowledge Check / Assessment Tag**: `KC-M{x}-L{y}` (ท้ายบท), `EXAM-M{x}` (สอบปลาย Module)
- **Question ID**: `M{x}-Q{nnn}` (3 หลัก) เช่น `M1-Q001` ถึง `M1-Q060`
- **Interactive Component ID**: `INT-M{x}-L{y}-{zz}` เช่น `INT-M1-L1-02` (COPQ Calculator)
- **Visual Asset ID**: `AST-M{x}-{nnn}` เช่น `AST-M1-001`
- **Audio File ID**: `AUD-M{x}L{y}-S{zz}.mp3` (1 ไฟล์ต่อ 1 Screen ID เพื่อ Sync ง่ายที่สุด)

### 3.3 กฎ Single Source of Truth (ห้าม Screen ID เพี้ยนข้ามไฟล์)
เมื่อเพิ่ม ลบ หรือเปลี่ยนลำดับ Screen ใน `01_storyboard.md` **ต้องอัปเดตให้ตรงกัน 100%** ใน:
1. `02_voiceover_th_en.md` (ต้องมีครบทุก `Screen ID`)
2. `03_screen_wireframe.md` (ต้องมีครบทุก `Screen ID`)
3. `04_interactive_logic.md` (ทุก `INT-*` ต้องผูกกับ `Screen ID` ที่มีอยู่จริง)
4. `05_asset_spec.md` (ทุก `AST-*` ต้องชี้ไปยัง `Screen ID` ที่มีอยู่จริง)

---

## 4. สิ่งที่ปรับปรุงแก้ไขจากไฟล์ร่างเดิม (`archive/module-01-initial/`)

ไฟล์ร่างเดิมทั้ง 7 ไฟล์ถูกเก็บไว้ที่ `archive/module-01-initial/` เพื่ออ้างอิงประวัติ โดยเวอร์ชันใหม่ใน `modules/module-01/` ได้แก้ไขปัญหาต่อไปนี้แล้ว:
1. **รวมและจัดแนว Screen ID ใหม่ทั้งหมดเป็น 29 Screens (`M1L1-S01`..`M1L4-S08`)**:
   - เพิ่มหน้า **Data-Driven Decision**, **COPQ**, **Factory Examples**, **Statistical Thinking** เข้าใน `01_storyboard.md` และ `02_voiceover_th_en.md` ให้ตรงกับ Wireframe และ Outline 1.1
   - เติมหัวข้อ **Mode**, **Variance**, **CV** และ **Run Chart** ที่เคยขาดหายไปใน Storyboard/VoiceOver ให้ครบตาม Outline 1.3 และ 1.4
2. **เพิ่มบทพากย์ภาษาไทย (Recording / TTS Ready)** ครบทั้ง 29 Screens พร้อม `[PAUSE-1]`, `[PAUSE-2]`, `[ANIM: ...]` cues และ Pronunciation Guide คำศัพท์เทคนิคไทย-อังกฤษ
3. **เติมคลังข้อสอบจริง `M1-Q001` ถึง `M1-Q060` ครบ 60 ข้อ** พร้อม Bloom's Taxonomy, Difficulty, Choice A–D, เฉลย และคำอธิบายเหตุผล (จากเดิมที่มีเพียงโครง Blueprint)
4. **สร้างชุดข้อมูลโรงงานจริง (`.csv`) และคู่มือ Workshop** สำหรับ Workshop 1 (จำแนกชนิดข้อมูล) และ Workshop 2 (วิเคราะห์ Defect & Dimension ด้วยกราฟ)
5. **ปรับเป้าหมาย Interactive Spec ให้รองรับ Web Native (HTML5/React/MDX)** เป็นหลัก โดยยังคงรองรับการ Map Field สำหรับ SCORM/xAPI ไว้ด้วย

---

## 5. แผนการส่งมอบขึ้น Internet (Web + Animation + Voice Plan)

### 5.1 Tech Stack ที่แนะนำสำหรับเฟสสร้างเว็บ (Phase B)
- **Framework**: **Astro + React + Tailwind CSS** (หรือ Vite + React SPA) อ่านเนื้อหาจากไฟล์ Markdown/MDX + JSON/CSV โดยตรง
- **Interactive Charts & Math**: **SVG / Recharts / Plotly / Custom Canvas** (เพื่อทำ Slider ปรับ Mean/Sigma, Control Chart Interactive, CLT Simulator แบบลื่นไหล 60fps ไม่ต้องพึ่ง Server หนัก)
- **Voice Narration Player**:
  - สร้าง Script Python/Node แปลง `02_voiceover_th_en.md` → ไฟล์เสียง `.mp3` แยกตาม Screen ID (`AUD-M1L1-S01.mp3`)
  - ในหน้าเว็บมีแถบ Audio Player พร้อม **Closed Captions (คำบรรยายภาษาไทย)**, **Auto-advance toggle**, และ **Cue Sync** (เมื่อเสียงพูดถึงคำสำคัญ Animation/Highlight บนหน้าจอขยับตาม)
- **Hosting (Internet)**: **Cloudflare Pages** หรือ **Vercel** หรือ **GitHub Pages** (Deploy อัตโนมัติทุกครั้งที่ `git push origin main`)

### 5.2 การทำงานร่วมกันระหว่าง Windows (`C:\Project\SPC_Training`) และ Cloud
- ปะป๊าแก้เนื้อหา/ตรวจคำบน Windows → `git add . && git commit -m "..." && git push origin main`
- เวลาเริ่มงานรอบใหม่กับ AI หรือทีมพัฒนา: ให้อ่าน `HANDOFF.md` และ `CURRICULUM_ROADMAP.md` ก่อนเสมอ แล้วเช็ค Checklist ในหัวข้อถัดไป

---

## 6. Next Action Checklist (ลำดับงานถัดไป)

- [ ] **Step 1 (Review M1):** ปะป๊าตรวจทานเนื้อหาภาษาไทย, ตัวอย่างโรงงาน, และข้อสอบ `M1-Q001`–`M1-Q060` ใน `modules/module-01/`
- [ ] **Step 2 (Web Prototype - ข้อ B):** สร้าง Web App Prototype ของ **Module 1** (อย่างน้อย Lesson `M1-L1` และ `M1-L3` + `M1-L4`) ที่มี Animation/Interactive จริง (COPQ Calculator, Data Classification Drag-Drop, Sigma Slider, Chart Selector + Workshop CSV Viewer) พร้อมปุ่มเล่นเสียงบรรยายไทย (TTS Prototype)
- [ ] **Step 3 (Audio & Visuals):** Generate ไฟล์ภาพ/SVG จาก `05_asset_spec.md` และ Generate/อัดเสียงจาก `02_voiceover_th_en.md`
- [ ] **Step 4 (Scale Modules 2–10):** ใช้ `modules/module-01/` เป็น **Golden Template** ขยายสร้างเนื้อหา Markdown + ชุดข้อมูล + Simulator Spec ของ **Module 2 ถึง Module 10** ตาม `CURRICULUM_ROADMAP.md`
- [ ] **Step 5 (Deploy Online):** เปิดใช้งานบน Internet (Public หรือ Password/Auth Protected สำหรับพนักงานโรงงาน) พร้อมระบบเก็บ Progress/คะแนนสอบ (LocalStorage → Supabase/LMS)
