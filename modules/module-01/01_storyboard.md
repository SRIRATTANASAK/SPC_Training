# Module 1 Production Storyboard (v5 — Canonical & Web/LMS Ready)

**Module:** Module 1 — Statistics Foundation for Manufacturing (พื้นฐานสถิติสำหรับงานวิศวกรรม)  
**Total Lessons:** 4 Lessons | **Total Screens:** 29 Screens (`M1L1-S01` .. `M1L4-S08`)  
**Estimated Duration:** ~25–30 minutes (including interactive labs & workshops)  
**Delivery Target:** Web Interactive Training (MDX/React + Thai Audio Sync) & SCORM 2004 Compatible  

---

## Standard Template (สำหรับขยายต่อ Modules 2–10)
ทุก Screen ต้องระบุครบทั้ง 11 Fields:
1. `Screen ID` (`M{x}L{y}-S{zz}`)
2. `Learning Objective`
3. `Duration`
4. `Layout`
5. `Asset ID` / `Interactive ID`
6. `On Screen Text`
7. `Voice Over Script Ref` (`AUD-M1L{y}-S{zz}`)
8. `Motion Specification`
9. `Trigger Logic`
10. `Accessibility Notes`
11. `Developer Notes`

---

# LESSON M1-L1: Why Statistics in Manufacturing? (ความสำคัญของสถิติในโรงงาน)

## Screen M1L1-S01 — Welcome & Variation Reality
- **Learning Objective:** เข้าใจว่าทุกกระบวนการผลิตมีความแปรปรวน (Variation) เป็นธรรมชาติ
- **Duration:** 25s
- **Layout:** Hero Split Banner (ซ้าย: Factory Animation 60%, ขวา: Title & Objectives 40%)
- **Asset ID:** `AST-M1-001`
- **On Screen Text:** `EVERY PROCESS HAS VARIATION` / "ทุกกระบวนการผลิตมีความแปรปรวน — แม้เครื่องจักรจะทำงานปกติ" + 4 Learning Objectives
- **Voice Over Script Ref:** `AUD-M1L1-S01`
- **Motion Specification:** Slow left-to-right factory pan (5s); slide-in bullet objectives synced to narration cues.
- **Trigger Logic:** Auto-play narration; unlock `Next` after narration or manual skip enabled in review mode.
- **Accessibility Notes:** Thai & English Closed Captions; keyboard focus on Next button.
- **Developer Notes:** Layer 1 hero animation; preload `AST-M1-002`.

## Screen M1L1-S02 — Importance of Data-Driven Decision
- **Learning Objective:** เปรียบเทียบการตัดสินใจด้วยความรู้สึก (Gut Feeling) กับการตัดสินใจบนฐานข้อมูลจริง (Data-Driven Decision)
- **Duration:** 35s
- **Layout:** Left Infographic + Right Narration & Hotspot Panel
- **Asset ID:** `AST-M1-002`
- **On Screen Text:** `Data-Driven Decision` / "อย่าเดาด้วยความรู้สึก — ตัดสินใจด้วยตัวเลขและหลักฐานทางสถิติ" (3 Hotspots: Trial & Error vs Root Cause, Bias vs Fact, Reactive vs Proactive)
- **Voice Over Script Ref:** `AUD-M1L1-S02`
- **Motion Specification:** Zoom into SPC dashboard; highlight each hotspot sequentially.
- **Trigger Logic:** User clicks all 3 hotspots to mark micro-interaction complete (or auto-reveals with audio).
- **Accessibility Notes:** Tab-accessible hotspots with ARIA labels and high-contrast focus ring.
- **Developer Notes:** Track `var_l1_hotspots_viewed = 3/3`.

## Screen M1L1-S03 — Cost of Poor Quality (COPQ)
- **Learning Objective:** คำนวณและตระหนักถึงผลกระทบทางการเงินจากคุณภาพต่ำ (COPQ)
- **Duration:** 45s (รวมเวลาลองกดคำนวณ)
- **Layout:** Top COPQ Formula + Center Interactive Calculator + Bottom Severity Feedback
- **Asset ID:** `AST-M1-003` | **Interactive ID:** `INT-M1-L1-02`
- **On Screen Text:** `COPQ = Prevention + Appraisal + Internal Failure (Scrap/Rework/Sorting) + External Failure (Warranty/Claim)` — "ภูเขาน้ำแข็งแห่งความสูญเสีย"
- **Voice Over Script Ref:** `AUD-M1L1-S03`
- **Motion Specification:** Iceberg reveal animation (Visible Scrap vs Hidden Costs); live bar gauge update.
- **Trigger Logic:** Live calculation on input change; Green (`< 10,000`), Yellow (`10,000–50,000`), Red (`> 50,000`).
- **Accessibility Notes:** Numeric inputs support keyboard arrows; color-independent status badges (Safe / Warning / Critical).
- **Developer Notes:** Bind to `INT-M1-L1-02`; award 10 pts upon interaction.

## Screen M1L1-S04 — Factory Examples & Sources of Variation (4M1E)
- **Learning Objective:** ระบุตัวอย่างการใช้สถิติในโรงงานและแหล่งที่มาของความแปรปรวน (Man, Machine, Material, Method, Measurement, Environment)
- **Duration:** 50s
- **Layout:** Top Case Tabs (CNC / Injection / Stamping / Electronics) + Bottom Interactive Variation Explorer
- **Asset ID:** `AST-M1-004`, `AST-M1-005` | **Interactive ID:** `INT-M1-L1-01`
- **On Screen Text:** "ตัวอย่างการใช้สถิติในโรงงาน & 6 ปัจจัยความแปรปรวน (4M1E+M)" — Shaft 50.00 mm target example.
- **Voice Over Script Ref:** `AUD-M1L1-S04`
- **Motion Specification:** Icons appear one-by-one; defect rate bar chart animates when user toggles Machine/Material/Shift.
- **Trigger Logic:** Changing `var_shift`, `var_machine`, or `var_material` updates simulated defect distribution.
- **Accessibility Notes:** Screen-reader table summary for chart changes.
- **Developer Notes:** Bind to `INT-M1-L1-01`; award 5 pts.

## Screen M1L1-S05 — Statistical Thinking
- **Learning Objective:** เข้าใจหลักการคิดเชิงสถิติ (Process → Variation → Data → Normal vs Abnormal Action)
- **Duration:** 35s
- **Layout:** Left Process-Variation Loop Animation + Right Core 3 Principles
- **Asset ID:** `AST-M1-004`
- **On Screen Text:** `Statistical Thinking`: 1) งานทุกอย่างคือกระบวนการ 2) ทุกกระบวนการมีความแปรปรวน 3) ต้องแยก Normal Variation ออกจาก Abnormal Variation ก่อนปรับเครื่อง
- **Voice Over Script Ref:** `AUD-M1L1-S05`
- **Motion Specification:** Animated histogram builds from raw shaft measurements; green zone (normal) vs red outlier (abnormal).
- **Trigger Logic:** Continue after narration or click Next.
- **Accessibility Notes:** Captions + alt-text for histogram progression.
- **Developer Notes:** Bridge concept directly to Module 2 & 5.

## Screen M1L1-S06 — Lesson 1 Knowledge Check (`KC-M1-L1`)
- **Learning Objective:** ทดสอบความเข้าใจพื้นฐาน Statistical Thinking และ COPQ
- **Duration:** 30s
- **Layout:** Centered Quiz Card (Question + Choices + Immediate Rationale Feedback)
- **Asset ID:** N/A
- **On Screen Text:** 2 Quick Questions (ดึงจาก `M1-Q001`, `M1-Q005`): "กระบวนการที่เสถียร (Stable Process) ยังคงมีความแปรปรวนตามธรรมชาติหรือไม่?"
- **Voice Over Script Ref:** `AUD-M1L1-S06`
- **Motion Specification:** Smooth feedback card flip on Submit.
- **Trigger Logic:** Must answer to proceed; immediate feedback layer shows explanation.
- **Accessibility Notes:** Radio group keyboard navigation (`Space`/`Enter`).
- **Developer Notes:** Log score to `var_lesson_score`.

---

# LESSON M1-L2: Types of Data & Measurement Scales (ชนิดของข้อมูลและมาตราการวัด)

## Screen M1L2-S01 — Variable Data vs Attribute Data
- **Learning Objective:** แยกความแตกต่างระหว่างข้อมูลแบบวัดค่า (Variable) และข้อมูลแบบนับ/จำแนก (Attribute)
- **Duration:** 35s
- **Layout:** 2-Column Split Comparison (ซ้าย: Variable, ขวา: Attribute)
- **Asset ID:** `AST-M1-006`, `AST-M1-007`
- **On Screen Text:** `Variable Data (ข้อมูลเชิงปริมาณ/วัดค่า)` เช่น Diameter, Torque, Temp vs `Attribute Data (ข้อมูลเชิงคุณลักษณะ/นับ)` เช่น Scratch, Dent, Pass/Fail
- **Voice Over Script Ref:** `AUD-M1L2-S01`
- **Motion Specification:** Side-by-side slide comparison; highlight measurement gauge vs defect bin.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** High-contrast card headers + captions.
- **Developer Notes:** Show why choosing wrong data type leads to wrong SPC chart later.

## Screen M1L2-S02 — Continuous vs Attribute Data
- **Learning Objective:** แยกข้อมูลต่อเนื่อง (Continuous) และข้อมูลเชิงคุณลักษณะ (Attribute) พร้อมเข้าใจข้อควรระวังเรื่อง Resolution
- **Duration:** 35s
- **Layout:** Animated Gauge Comparison (Digital Micrometer vs Defect Counter)
- **Asset ID:** `AST-M1-008`, `AST-M1-009`
- **On Screen Text:** `Continuous Data` (แบ่งละเอียดเป็นทศนิยมได้ไม่สิ้นสุด) vs `Attribute Data` (นับเป็นจำนวนเต็ม 0, 1, 2... หรือหมวดหมู่)
- **Voice Over Script Ref:** `AUD-M1L2-S02`
- **Motion Specification:** Smooth continuous decimal needle sweep vs integer step counter (`0 -> 1 -> 2 -> 3`).
- **Trigger Logic:** Interactive toggle between "Continuous Zoom" and "Attribute Count".
- **Accessibility Notes:** Text equivalents for numeric animations.
- **Developer Notes:** Clarify that measurement resolution (เช่น ปัดเศษหยาบเกินไป) อาจทำให้ Continuous ดูเหมือน Discrete/Attribute ได้.

## Screen M1L2-S03 — Measurement Scales (Nominal, Ordinal, Interval, Ratio)
- **Learning Objective:** จำแนกมาตราการวัดทั้ง 4 ระดับ และรู้ว่ามาตราใดคำนวณ Mean/SD ได้จริง
- **Duration:** 55s
- **Layout:** 4 Interactive Flip Cards (Nominal | Ordinal | Interval | Ratio)
- **Asset ID:** `AST-M1-010`
- **On Screen Text:** `NOIR Scales`: Nominal (ชื่อกลุ่ม เช่น Cavity ID), Ordinal (อันดับ เช่น เกรด A/B/C), Interval (ช่วงเท่ากัน ไม่มีศูนย์แท้ เช่น °C), Ratio (มีศูนย์แท้ เช่น mm, g, N·m)
- **Voice Over Script Ref:** `AUD-M1L2-S03`
- **Motion Specification:** 3D card flip reveal for each scale when clicked or during audio cues.
- **Trigger Logic:** Click all 4 cards to inspect factory examples and allowed math operations.
- **Accessibility Notes:** Flip state announced via `aria-expanded`.
- **Developer Notes:** Highlight common trap: `Cavity 1, 2, 3, 4` is **Nominal**, NOT Ratio!

## Screen M1L2-S04 — Workshop 1 : การจำแนกข้อมูล
- **Learning Objective:** ฝึกจำแนกข้อมูลจริงจากหน้างานผ่านระบบสุ่มแบบทดสอบได้ถูกต้อง ≥ 80%
- **Duration:** 90s
- **Layout:** Full-width Interactive Drag-and-Drop + Scale Matrix (`workshop_m1_data_classification.csv`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M1-L2-01`, `INT-M1-L2-02`
- **On Screen Text:** "Workshop 1 : การจำแนกข้อมูล — จำแนกข้อมูลโรงงานลงกล่อง Variable / Attribute และระบุ Measurement Scale (Nominal / Ordinal / Interval / Ratio)"
- **Voice Over Script Ref:** `AUD-M1L2-S04`
- **Motion Specification:** Snap-to-zone animation; green check / amber retry bounce.
- **Trigger Logic:** Score +1 per item; passing >= 7/8 in quick round or >= 16/20 in full dataset mode.
- **Accessibility Notes:** Keyboard alternative (dropdown select per item) for users who cannot drag-and-drop.
- **Developer Notes:** Load items from `data/workshop_m1_data_classification.csv`.

## Screen M1L2-S05 — Feedback & Rationale Layer
- **Learning Objective:** เข้าใจเหตุผลเบื้องหลังข้อผิดพลาดที่พบบ่อยในการจำแนกข้อมูล
- **Duration:** 30s
- **Layout:** Diagnostic Summary Table (Item | Your Choice | Correct Answer | Engineering Rationale)
- **Asset ID:** N/A
- **On Screen Text:** "ทำไมเรื่องนี้ถึงสำคัญ? — Go/No-Go Gauge เป็น Attribute แม้จะวัดขนาด, อุณหภูมิ °C เป็น Interval, เลข Cavity เป็น Nominal"
- **Voice Over Script Ref:** `AUD-M1L2-S05`
- **Motion Specification:** Expandable rationale rows for missed items.
- **Trigger Logic:** Review missed items before clicking Next.
- **Accessibility Notes:** Semantic `<table>` with `scope="col"`.
- **Developer Notes:** Reads state from `INT-M1-L2-01` & `INT-M1-L2-02`.

## Screen M1L2-S06 — Lesson 2 Summary & Knowledge Check
- **Learning Objective:** สรุปและทดสอบความเข้าใจ Lesson 2
- **Duration:** 30s
- **Layout:** Top Decision Tree Summary + Bottom 2-Question Check (`M1-Q012`, `M1-Q018`)
- **Asset ID:** N/A
- **On Screen Text:** "จำง่ายๆ ก่อนเลือกเครื่องมือ SPC: ถามตัวเองเสมอว่าเป็น Variable หรือ Attribute และเป็น Scale ระดับไหน"
- **Voice Over Script Ref:** `AUD-M1L2-S06`
- **Motion Specification:** Decision flow highlight.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 3.
- **Accessibility Notes:** Full keyboard support.
- **Developer Notes:** Update module progress bar to 45%.

---

# LESSON M1-L3: Descriptive Statistics (สถิติเชิงพรรณนา)

## Screen M1L3-S01 — Mean ($\bar{X}$)
- **Learning Objective:** คำนวณและตีความค่าเฉลี่ย (Process Centering) พร้อมรู้ข้อจำกัดเมื่อมี Outlier
- **Duration:** 40s
- **Layout:** Formula Panel + Interactive Mean Builder (`INT-M1-L3-01`)
- **Asset ID:** `AST-M1-011` | **Interactive ID:** `INT-M1-L3-01`
- **On Screen Text:** `Mean (ค่าเฉลี่ย): X̄ = Σx / n` — "ตัวแทนจุดศูนย์กลางกระบวนการ แต่ไวต่อค่าผิดปกติ (Outlier)"
- **Voice Over Script Ref:** `AUD-M1L3-S01`
- **Motion Specification:** Balance beam / average line draw animation across data points.
- **Trigger Logic:** User can edit a sample value (e.g., change 50.02 to 50.50) and see Mean jump immediately.
- **Accessibility Notes:** Live numeric readout with `aria-live="polite"`.
- **Developer Notes:** Use MC-A subset from `workshop_m1_dimensions_and_defects.csv` (`50.008 mm`).

## Screen M1L3-S02 — Median (ค่ามัธยฐาน)
- **Learning Objective:** คำนวณค่า Median และเลือกใช้แทน Mean เมื่อข้อมูลเบ้หรือมี Outlier
- **Duration:** 35s
- **Layout:** Left Sorted Array Animation + Right Mean vs Median Comparison
- **Asset ID:** `AST-M1-012`
- **On Screen Text:** `Median (มัธยฐาน)` — "เรียงจากน้อยไปมากแล้วหยิบตัวกลาง (ไม่หวั่นไหวต่อ Outlier)"
- **Voice Over Script Ref:** `AUD-M1L3-S02`
- **Motion Specification:** Unsorted numbers animate into ascending order; middle element glows.
- **Trigger Logic:** Narration complete or Next click.
- **Accessibility Notes:** Alt-text describing sorted values.
- **Developer Notes:** Contrast Mean (`50.0293`) vs Median (`50.0250`) when `50.14` outlier exists.

## Screen M1L3-S03 — Mode (ฐานนิยม)
- **Learning Objective:** ใช้ Mode ตรวจจับความถี่ซ้ำและสัญญาณ Bimodal (เช่น 2 กะ หรือ 2 แม่พิมพ์ปนกัน)
- **Duration:** 30s
- **Layout:** Frequency Bar Highlight + Factory Bimodal Alert
- **Asset ID:** `AST-M1-013`
- **On Screen Text:** `Mode (ฐานนิยม)` — "ค่าที่ซ้ำบ่อยที่สุด: ใช้ได้กับข้อมูล Nominal ด้วย และถ้าเจอ 2 ยอด (Bimodal) ให้สงสัยว่าข้อมูลปนกัน!"
- **Voice Over Script Ref:** `AUD-M1L3-S03`
- **Motion Specification:** Tallest bar(s) pulse sequentially.
- **Trigger Logic:** Toggle "1 Machine" vs "2 Machines Mixed (Bimodal)".
- **Accessibility Notes:** Captions + chart data table.
- **Developer Notes:** Covers Mode requirement missing in v4 draft.

## Screen M1L3-S04 — Measures of Dispersion (Range, Variance, Standard Deviation)
- **Learning Objective:** คำนวณและเปรียบเทียบตัววัดการกระจายตัวทั้ง 3 แบบ (Range, Variance, Standard Deviation) จากชุดข้อมูลเดียวกัน พร้อมเข้าใจกฎ Empirical Rule (68-95-99.73%)
- **Duration:** 65s
- **Layout:** Unified 3-Part Dispersion Comparison & Interactive Calculator
- **Asset ID:** `AST-M1-014`, `AST-M1-015`, `AST-M1-016` | **Interactive ID:** `INT-M1-L3-01`
- **On Screen Text:** "ตัววัดการกระจายตัว (Dispersion): Range (พิสัย), Variance (ความแปรปรวน), Standard Deviation (ส่วนเบี่ยงเบนมาตรฐาน) และกฎ 68-95-99.73%"
- **Voice Over Script Ref:** `AUD-M1L3-S04`
- **Motion Specification:** Dynamic step tabs showing Range bracket -> Squared deviations area -> Normal Bell Curve sigma bands for the exact same 5 shaft samples.
- **Trigger Logic:** Interactive simulator allows switching parameters and observing Range, Variance, and SD live simultaneously.
- **Accessibility Notes:** Semantic table summary and high-contrast formula callouts.
- **Developer Notes:** Foundation for SPC Control Limits ($\pm 3\sigma$) in Module 5 and $\bar{X}$-$R$ charts in Module 6.

## Screen M1L3-S05 — Coefficient of Variation (CV) & Workshop 2
- **Learning Objective:** ใช้ค่า CV (%) เปรียบเทียบความแปรปรวนระหว่างกระบวนการที่หน่วยหรือขนาดต่างกัน และคำนวณสถิติจาก Workshop 2
- **Duration:** 35s
- **Layout:** Side-by-Side Comparison Dashboard (Pin 10 mm vs Shaft 500 mm, MC-A vs MC-B)
- **Asset ID:** `AST-M1-017`
- **On Screen Text:** `CV = (s / x̄) × 100%` — "เปรียบเทียบความนิ่งข้ามขนาดหรือข้ามหน่วยได้ยุติธรรม (ตัวอย่าง: MC-A CV=0.03% vs MC-B CV=0.06%)"
- **Voice Over Script Ref:** `AUD-M1L3-S05`
- **Motion Specification:** Dashboard card transition comparing raw SD vs normalized CV%.
- **Trigger Logic:** Narration complete or toggle unit comparison.
- **Accessibility Notes:** Clear ratio table.
- **Developer Notes:** Connects directly to `workshop_m1_dimensions_and_defects.csv`.

## Screen M1L3-S06 — Sigma Simulator & Statistics Match Game
- **Learning Objective:** ทดลองปรับค่า Mean และ Sigma เพื่อสังเกตผลต่อ Histogram และความเสี่ยงของเสีย (Out of Spec)
- **Duration:** 60s
- **Layout:** Interactive Histogram Slider (`INT-M1-L3-02`) + Quick Match Game (`INT-M1-L3-03`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M1-L3-02`, `INT-M1-L3-03`
- **On Screen Text:** "ลองเลื่อนค่า Sigma (0.1 ถึง 3.0) แล้วสังเกตการกระจายตัวของชิ้นงานเทียบกับเส้น USL/LSL"
- **Voice Over Script Ref:** `AUD-M1L3-S06`
- **Motion Specification:** Smooth 60fps SVG/Canvas bell curve & histogram bars morphing as slider moves.
- **Trigger Logic:** Moving `var_sigma_value` updates curve width & out-of-spec %; complete Match Game (≥ 80%).
- **Accessibility Notes:** Range slider keyboard accessible (`Left`/`Right` arrows).
- **Developer Notes:** Reuses core curve renderer planned for Module 4 Cp/Cpk playground.

## Screen M1L3-S07 — Lesson 3 Knowledge Check (`KC-M1-L3`)
- **Learning Objective:** ทดสอบการเลือกใช้และคำนวณ Descriptive Statistics (3 ข้อสุ่ม)
- **Duration:** 45s
- **Layout:** 3-Question Randomized Assessment Card (`M1-Q031`, `M1-Q035`, `M1-Q040`, `M1-Q044`, `M1-Q048`)
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบความเข้าใจสถิติเชิงพรรณนา (3 ข้อสุ่ม)"
- **Voice Over Script Ref:** `AUD-M1L3-S07`
- **Motion Specification:** Progress indicator per question.
- **Trigger Logic:** Immediate feedback after each answer; shuffle options.
- **Accessibility Notes:** Full keyboard navigation.
- **Developer Notes:** Update module progress bar to 75%.

---

# LESSON M1-L4: Data Visualization & Final Assessment (การแสดงผลข้อมูลด้วยกราฟ)

## Screen M1L4-S01 — Why Visualize Data?
- **Learning Objective:** เห็นพลังของการแปลงตารางตัวเลขเป็นกราฟเพื่อจับ Pattern ที่ตาเปล่ามองไม่เห็นในตาราง
- **Duration:** 25s
- **Layout:** Left Raw Data Table (30 rows) → Right Visual Insight Cards
- **Asset ID:** `AST-M1-018`
- **On Screen Text:** "ตารางตัวเลขซ่อนความจริง — กราฟเผย Pattern ทันทีภายใน 3 วินาที"
- **Voice Over Script Ref:** `AUD-M1L4-S01`
- **Motion Specification:** Table rows morph/fade into 5 chart thumbnails.
- **Trigger Logic:** Auto-advance or click Next.
- **Accessibility Notes:** Summary captions.
- **Developer Notes:** Preview the 5 core charts covered in `S02–S06`.

## Screen M1L4-S02 — Histogram (กราฟแท่งความถี่)
- **Learning Objective:** อ่าน Histogram เพื่อดู Center, Spread, Skewness และ Bimodal Distribution
- **Duration:** 40s
- **Layout:** Interactive Histogram + Shape Selector (Normal / Skewed / Bimodal / Cliff)
- **Asset ID:** `AST-M1-018`
- **On Screen Text:** `Histogram` — "ดูรูปร่างการกระจายตัวของข้อมูล Variable (Center, Spread, Shape)"
- **Voice Over Script Ref:** `AUD-M1L4-S02`
- **Motion Specification:** Histogram bars animate upward smoothly; shape presets morph bins.
- **Trigger Logic:** Click 4 shape tabs to see real factory cause of each shape (e.g., Cliff = 100% Sorting!).
- **Accessibility Notes:** Alt-text per distribution shape.
- **Developer Notes:** Plot using `Shaft_Diameter_mm` from Workshop 2 CSV.

## Screen M1L4-S03 — Box Plot (แผนภาพกล่อง)
- **Learning Objective:** อ่านองค์ประกอบ Box Plot (Min, Q1, Median, Q3, Max, Outliers) เพื่อเทียบหลายเครื่องจักรพร้อมกัน
- **Duration:** 40s
- **Layout:** Left Box Plot Anatomy + Right MC-A vs MC-B Comparison
- **Asset ID:** `AST-M1-020`
- **On Screen Text:** `Box Plot` — "เปรียบเทียบหลายเครื่องจักร/หลายกะในรูปเดียว พร้อมชี้เป้า Outlier (`50.14 mm`)"
- **Voice Over Script Ref:** `AUD-M1L4-S03`
- **Motion Specification:** Box anatomy labels highlight sequentially; outlier dot pulses.
- **Trigger Logic:** Hover/click anatomy parts (Q1, Median, Q3, IQR, Whisker, Outlier).
- **Accessibility Notes:** Keyboard tooltips on each anatomy marker.
- **Developer Notes:** Directly shows MC-A vs MC-B from `workshop_m1_dimensions_and_defects.csv`.

## Screen M1L4-S04 — Pareto Chart (กฎ 80/20)
- **Learning Objective:** สร้างและอ่าน Pareto Chart เพื่อจัดลำดับความสำคัญของปัญหา (Vital Few vs Trivial Many)
- **Duration:** 40s
- **Layout:** Left Interactive Pareto (Bars + Cumulative % Line) + Right 80/20 Callout
- **Asset ID:** `AST-M1-019`
- **On Screen Text:** `Pareto Chart` — "โฟกัส 20% ของสาเหตุ ที่สร้าง 80% ของปัญหา (ในโรงงานเรา: Scratch + Burr = 86.7%!)"
- **Voice Over Script Ref:** `AUD-M1L4-S04`
- **Motion Specification:** Unsorted defect bars sort descending, then cumulative % curve draws left-to-right.
- **Trigger Logic:** Click "Sort by Impact" animation button.
- **Accessibility Notes:** Table view of defect counts & cumulative %.
- **Developer Notes:** Exact numbers from Workshop 2 CSV (`Scratch=9, Burr=4, Dent=1, Crack=1`).

## Screen M1L4-S05 — Scatter Plot (ความสัมพันธ์ 2 ตัวแปร)
- **Learning Objective:** อ่าน Scatter Plot เพื่อหาความสัมพันธ์ X กับ Y และเข้าใจว่า "Correlation ≠ Causation"
- **Duration:** 40s
- **Layout:** Interactive Correlation Explorer (Positive / Negative / No Correlation + Temp vs Diameter Lab)
- **Asset ID:** `AST-M1-019`
- **Motion Specification:** Scatter dots plot sequentially; best-fit trendline draws across points.
- **On Screen Text:** `Scatter Plot` — "เช็คความสัมพันธ์ระหว่างตัวแปร X (เช่น Mold Temp) กับ Y (Shaft Diameter): r = +0.99"
- **Voice Over Script Ref:** `AUD-M1L4-S05`
- **Trigger Logic:** Toggle between Positive, Negative, and Zero correlation patterns.
- **Accessibility Notes:** Include correlation coefficient `r` text readout.
- **Developer Notes:** Uses `Mold_Temp_C` vs `Shaft_Diameter_mm` from Workshop 2 CSV.

## Screen M1L4-S06 — Run Chart (กราฟแนวโน้มตามเวลา)
- **Learning Objective:** ใช้ Run Chart ติดตามข้อมูลตามลำดับเวลาเพื่อจับ Trend, Shift, Cycle ก่อนยกระดับเป็น Control Chart
- **Duration:** 40s
- **Layout:** Time-Series Line Chart (`Sample 1..30`) + Median Reference Line
- **Asset ID:** `AST-M1-020`
- **On Screen Text:** `Run Chart` — "ดูพฤติกรรมตามเวลา! Histogram มองไม่เห็น 'เวลา' แต่ Run Chart เห็นการไหล (Drift) ชัดเจน"
- **Voice Over Script Ref:** `AUD-M1L4-S06`
- **Motion Specification:** Time-series line draws point 1 → 30; highlights upward shift after `13:00` (MC-B).
- **Trigger Logic:** Toggle "Compare Histogram vs Run Chart" on the exact same dataset!
- **Accessibility Notes:** Keyboard scrubbing across time points.
- **Developer Notes:** Covers Run Chart requirement missing in v4 draft; sets up Module 5 SPC Control Charts.

## Screen M1L4-S07 — Workshop 2: Real Defect & Dimension Visualization
- **Learning Objective:** เลือกและแปลผลกราฟจากข้อมูลจริง `workshop_m1_dimensions_and_defects.csv` (30 ชิ้นงาน)
- **Duration:** 120s
- **Layout:** Top Scenario Matrix (`INT-M1-L4-01`) + Bottom Interactive Factory Dashboard (`INT-M1-L4-02`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M1-L4-01`, `INT-M1-L4-02`
- **On Screen Text:** "Workshop 2: ใช้ข้อมูล Defect & Dimension จริง 30 ชิ้น — เลือกกราฟที่ตอบโจทย์วิศวกรรมได้ตรงจุดที่สุด (5 สถานการณ์ + วิเคราะห์กราฟจริง)"
- **Voice Over Script Ref:** `AUD-M1L4-S07`
- **Motion Specification:** Live chart switch when user chooses Histogram / Box Plot / Pareto / Scatter / Run Chart.
- **Trigger Logic:** Score +2 per scenario (Total 10) + complete Factory Dashboard diagnosis questions.
- **Accessibility Notes:** Downloadable CSV button + keyboard chart selector.
- **Developer Notes:** Full instructor solution in `07_workshop_guide.md`.

## Screen M1L4-S08 — Module 1 Final Assessment (`EXAM-M1`)
- **Learning Objective:** วัดผลสัมฤทธิ์ Module 1 (เกณฑ์ผ่าน 80% = 16/20 ข้อ)
- **Duration:** 10–15 min
- **Layout:** Exam Runner (20 Randomized Questions drawn from `M1-Q001..M1-Q060` stratified by Lesson)
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบประมวลผล Module 1 (สุ่ม 20 ข้อ จากคลัง 60 ข้อ | เกณฑ์ผ่าน 80% | ทำซ้ำได้ไม่จำกัด)"
- **Voice Over Script Ref:** `AUD-M1L4-S08`
- **Motion Specification:** Exam progress ring + Pass/Remediation result dashboard broken down by Lesson `M1-L1`..`M1-L4`.
- **Trigger Logic:** Pass (`>= 80%`) unlocks Module 1 Completion Badge & Module 2; Below 80% highlights weak lessons for review.
- **Accessibility Notes:** Timer-free accessible exam; full review mode with explanations.
- **Developer Notes:** Stratify random draw: 3 Qs from L1, 6 Qs from L2, 6 Qs from L3, 5 Qs from L4 (= 20 Qs).

---

## Web & LMS Completion Rules
- **Web Native Mode:** View all 29 screens + complete Workshop 1 & 2 + score `>= 80%` on `EXAM-M1` (saved in `localStorage` / backend DB).
- **SCORM 2004 4th Ed. Compatibility Mode:** Maps `cmi.completion_status`, `cmi.success_status`, `cmi.score.scaled`, `cmi.location` (bookmarking), and `cmi.interactions`.
