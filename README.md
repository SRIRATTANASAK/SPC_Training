# SPC & Manufacturing Statistics Online Training

หลักสูตรอบรมออนไลน์ **Statistics & Statistical Process Control (SPC) for Manufacturing** (10 Modules) ออกแบบสำหรับวิศวกรฝ่ายผลิต วิศวกรคุณภาพ (QE/QA) วิศวกรกระบวนการ (PE) และหัวหน้างานในอุตสาหกรรมยานยนต์ อิเล็กทรอนิกส์ และชิ้นส่วนเครื่องจักร

> **เป้าหมายโครงการ:** พัฒนาจากคลังเนื้อหา **Markdown (Single Source of Truth)** ไปสู่ **Web-based Interactive Online Training บน Internet** ที่มีครบทั้ง **Animation / Interactive Simulator**, **Workshop ข้อมูลโรงงานจริง**, **คลังข้อสอบวัดผล**, และ **เสียงบรรยายภาษาไทย (Thai Voice Narration)**

---

## โครงสร้างหลักสูตร (10 Modules)

| Module | หัวข้อหลัก | สถานะ | โฟลเดอร์ |
|---|---|---|---|
| **Module 1** | Statistics Foundation for Manufacturing (พื้นฐานสถิติสำหรับงานวิศวกรรม) | ✅ Content & Spec Ready (Web/Animation/TTS Ready) | [modules/module-01](modules/module-01/) |
| **Module 2** | Probability and Distribution (ความน่าจะเป็น, การแจกแจง, CLT) | ✅ Content & Spec Ready (Web/Animation/TTS Ready) | [modules/module-02](modules/module-02/) |
| **Module 3** | Confidence and Hypothesis Testing (Sampling, CI, T-Test, ANOVA) | ✅ Content & Spec Ready (Web/Animation/TTS Ready) | [modules/module-03](modules/module-03/) |
| **Module 4** | Process Variation and Capability (VOP/VOC, Cp/Cpk/Pp/Ppk, AIAG/VDA & JEDEC) | ✅ Content & Spec Ready (Web/Animation/TTS Ready) | [modules/module-04](modules/module-04/) |
| **Module 5** | SPC Concept and Methodology (Shewhart, Control vs Spec Limit, WE & Nelson Rules) | ✅ Content & Spec Ready (Web/Animation/TTS Ready) | [modules/module-05](modules/module-05/) |
| **Module 6** | Control Chart Selection (`I-MR, X̄-R, X̄-S` & `p, np, c, u` + 10 Scenarios) | ✅ Content & Spec Ready (Web/Animation/TTS Ready) | [modules/module-06](modules/module-06/) |
| **Module 7** | SPC for Manufacturing Process (Roadmap, 4 Core Lines, Reaction/Escalation, LPA `CQI-8`) | ✅ Content & Spec Ready (Web/Animation/TTS Ready) | [modules/module-07](modules/module-07/) |
| **Module 8** | SPC Problem Solving (`OCAP`, `7 QC Tools`, `5 Why / FTA / Poka-Yoke`, `PDCA / Kaizen / DMAIC / 8D`) | ✅ Content & Spec Ready (Web/Animation/TTS Ready) | [modules/module-08](modules/module-08/) |
| **Module 9** | MSA Connection to SPC (Gage R&R, Repeatability/Reproducibility, Bias, Linearity, Stability) | 📋 Planned | `modules/module-09/` |
| **Module 10** | Industrial Case Study (AIAG-Based Cases 1–4) | 📋 Planned | `modules/module-10/` |

---

## โครงสร้างไฟล์ใน Repository

```text
SPC_Training/
├── README.md                     # ภาพรวมโปรเจกต์และการใช้งาน
├── HANDOFF.md                    # เอกสารส่งต่อมาตรฐาน/สถาปัตยกรรม/Checklist สำหรับทีมและ AI
├── CURRICULUM_ROADMAP.md         # แผนแม่บท Module 1–10 (เนื้อหา + Interactive + เสียง)
├── .gitattributes                # จัดการ Line Ending (Windows <-> Linux)
├── .gitignore
├── modules/
│   └── module-01/                # ต้นแบบมาตรฐาน (Golden Template) สำหรับทุก Module
│       ├── 00_lesson_content.md  # เนื้อหาบนหน้าจอฉบับเต็มพร้อมสูตร/ตาราง (MDX Ready)
│       ├── 01_storyboard.md      # Production Storyboard ครบทุกหน้าจอ (M1L1-S01..M1L4-S08)
│       ├── 02_voiceover_th_en.md # บทพากย์เสียงภาษาไทย + TTS Clean Script + EN Reference
│       ├── 03_screen_wireframe.md# โครงหน้าจอ Responsive & Navigation Rules
│       ├── 04_interactive_logic.md # Logic การทำงานของ Simulator/Game/Scoring
│       ├── 05_asset_spec.md      # สเปกภาพ SVG/Illustration/Chart Assets
│       ├── 06_assessment_bank.md # คลังข้อสอบจริง Q001–Q060 พร้อมเฉลยและคำอธิบาย
│       ├── 07_workshop_guide.md  # คู่มือทำ Workshop 1 & 2 พร้อมเฉลย Step-by-Step
│       ├── 08_cheatsheet_and_glossary.md # สรุปสูตร 1 หน้าจบ & คำศัพท์ TH/EN (ปุ่ม Resources)
│       └── data/                 # ชุดข้อมูลโรงงานจริง (.csv) สำหรับ Workshop
│           ├── workshop_m1_data_classification.csv
│           └── workshop_m1_dimensions_and_defects.csv
└── archive/
    └── module-01-initial/        # ไฟล์ร่างเริ่มต้น v2–v4 ของปะป๊า (เก็บอ้างอิงประวัติ)
```

---

## การอัปเดตงานระหว่างเครื่อง Windows (`C:\Project\SPC_Training`) กับ GitHub

ก่อนเริ่มแก้ไขงานบน Windows ให้ดึงเวอร์ชันล่าสุดจาก GitHub ก่อนเสมอ:
```powershell
cd C:\Project\SPC_Training
git pull origin main
```
และหลังแก้ไขงานเสร็จ ให้ส่งกลับขึ้น GitHub:
```powershell
git add .
git commit -m "อธิบายสิ่งที่แก้ไข"
git push origin main
```

รายละเอียดเชิงลึกทั้งหมดสำหรับนักพัฒนาและผู้เขียนเนื้อหา ดูได้ใน [HANDOFF.md](HANDOFF.md)
