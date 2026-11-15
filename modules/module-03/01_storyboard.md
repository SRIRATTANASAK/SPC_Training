# Module 3 Production Storyboard (Developer & Web/LMS Ready)

**Module:** Module 3 — Confidence and Hypothesis Testing  
**Total Lessons:** 4 Lessons | **Total Screens:** 26 Screens (`M3L1-S01` .. `M3L4-S09`)  
**Estimated Duration:** ~30–35 minutes (including simulators & Machine A vs B workshop)  
**Delivery Target:** Web Interactive Training (MDX/React + Thai Audio Sync) & SCORM 2004 Compatible  

---

# LESSON M3-L1: Sampling Strategy (`3.1`)

## Screen M3L1-S01 — Welcome & Why Sampling Strategy Matters
- **Learning Objective:** ตระหนักว่าการวางแผนสุ่มตัวอย่างผิดวิธีทำให้ข้อมูลสถิติเอนเอียงแม้จะคำนวณเก่งแค่ไหน
- **Duration:** 25s
- **Layout:** Hero Split (Left Animated Sampling Line 60% | Right Objectives 40%)
- **Asset ID:** `AST-M3-001`
- **On Screen Text:** `GARBAGE IN = GARBAGE OUT` — "กลยุทธ์การสุ่มที่ดีคือรากฐานของ Confidence Interval, Hypothesis Test และ SPC"
- **Voice Over Script Ref:** `AUD-M3L1-S01`
- **Motion Specification:** Conveyor parts route into sampling trays; 4 objectives slide in.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** TH/EN captions + keyboard navigation.
- **Developer Notes:** Preload `AST-M3-002`.

## Screen M3L1-S02 — Simple Random & Systematic Sampling
- **Learning Objective:** แยกความแตกต่างและข้อควรระวังระหว่าง Simple Random กับ Systematic Sampling
- **Duration:** 35s
- **Layout:** 2-Column Interactive Illustration
- **Asset ID:** `AST-M3-002`
- **On Screen Text:** `Random Sampling` (โอกาสเท่ากันทุกชิ้น) vs `Systematic Sampling` (ทุกชิ้นที่ `k` — ระวังรอบ Cycle ตรงกัน!)
- **Voice Over Script Ref:** `AUD-M3L1-S02`
- **Motion Specification:** Random lottery highlight vs periodic every-5th-part pulse showing cycle resonance warning.
- **Trigger Logic:** Toggle "Periodic Machine Cycle" warning demo.
- **Accessibility Notes:** Clear pattern alt text.
- **Developer Notes:** Highlight IQC vs line check use cases.

## Screen M3L1-S03 — Stratified Sampling
- **Learning Objective:** ออกแบบ Stratified Sampling เมื่อโรงงานมีหลายเครื่องจักร หลาย Cavity หรือหลายกะ
- **Duration:** 35s
- **Layout:** Left 4-Cavity Stratified Grid + Right Mixing Trap Alert
- **Asset ID:** `AST-M3-003`
- **On Screen Text:** `Stratified Sampling` — "แบ่งกลุ่มย่อย (Cavity / Shift / Machine) ก่อนสุ่มตามสัดส่วน เพื่อไม่ให้ปัญหาของ 1 กลุ่มถูกกลบ"
- **Voice Over Script Ref:** `AUD-M3L1-S03`
- **Motion Specification:** Parts separate into 4 color-coded strata before proportional sampling.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Distinct stratum labels + color-safe palette.
- **Developer Notes:** Reinforce tagging metadata (`Machine`, `Shift`).

## Screen M3L1-S04 — Rational Subgroup & Sampling Strategy Matcher
- **Learning Objective:** เข้าใจหลัก Rational Subgroup (ลด Within-group, จับ Between-group) และเลือกวิธีสุ่มให้ตรงสถานการณ์
- **Duration:** 55s
- **Layout:** Top Consecutive vs Hourly Mix Visual (`AST-M3-004`) | Bottom Strategy Matcher (`INT-M3-L1-01`)
- **Asset ID:** `AST-M3-004` | **Interactive ID:** `INT-M3-L1-01`
- **On Screen Text:** `Rational Subgroup` — "เก็บชิ้นงานติดกันในเวลาสั้นๆ (เฉพาะ Common Cause ในกลุ่ม) เพื่อจับ Special Cause ระหว่างกลุ่ม!"
- **Voice Over Script Ref:** `AUD-M3L1-S04`
- **Motion Specification:** Conveyor highlights 5 consecutive parts forming a tight subgroup window.
- **Trigger Logic:** Score `>= 4/5` on strategy matcher (`+10 pts`).
- **Accessibility Notes:** Dropdown selector alternative.
- **Developer Notes:** Direct foundation for Module 6 Xbar-R subgroups.

## Screen M3L1-S05 — Lesson 1 Knowledge Check (`KC-M3-L1`)
- **Learning Objective:** ทดสอบความเข้าใจ Sampling Strategy (`M3-Q001`, `M3-Q006`)
- **Duration:** 30s
- **Layout:** Centered 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 1 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M3L1-S05`
- **Motion Specification:** Card flip feedback.
- **Trigger Logic:** Answer both to unlock Lesson 2.
- **Accessibility Notes:** Keyboard radio controls.
- **Developer Notes:** Update module progress to 20%.

---

# LESSON M3-L2: Confidence Interval (`3.2`)

## Screen M3L2-S01 — Point Estimate vs Interval Estimate
- **Learning Objective:** เข้าใจเหตุผลที่ต้องรายงาน Confidence Interval คู่กับ Sample Mean เสมอ
- **Duration:** 30s
- **Layout:** Left Number Line (Dot vs Interval Bracket) + Right Explanation
- **Asset ID:** `AST-M3-005`
- **On Screen Text:** `119.50 N` (Point) vs `[118.76, 120.24] N` (95% CI) — "ช่วงความเชื่อมั่นบอกความแม่นยำของการประมาณค่า"
- **Voice Over Script Ref:** `AUD-M3L2-S01`
- **Motion Specification:** Single dot expands into error-bar interval bracket.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Numeric range readouts.
- **Developer Notes:** Use `MC-A` preview numbers from Workshop CSV.

## Screen M3L2-S02 — Confidence Level & Interpretation
- **Learning Objective:** ตีความ Confidence Level (`90% / 95% / 99%`) และเหตุผลที่ใช้ t-distribution เมื่อไม่รู้ $\sigma$
- **Duration:** 40s
- **Layout:** Left Formula & t vs Z Curve (`AST-M3-006`) | Right True vs False Interpretation Cards
- **Asset ID:** `AST-M3-006`
- **On Screen Text:** `CI = x̄ ± t · (s / √n)` — "95% CI: ถ้าสุ่มสร้างช่วง 100 ครั้ง ประมาณ 95 ช่วงจะคลุมค่า μ จริง"
- **Voice Over Script Ref:** `AUD-M3L2-S02`
- **Motion Specification:** Overlay wider t-distribution tails vs standard normal Z curve.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear myth-vs-fact table.
- **Developer Notes:** Clarify that $\mu$ is fixed, the random interval moves.

## Screen M3L2-S03 — Margin of Error & Sample Size Planning
- **Learning Objective:** คำนวณ Margin of Error และวางแผนขนาดตัวอย่าง $n$ ที่ต้องการ
- **Duration:** 40s
- **Layout:** Interactive Formula Breakdown (`AST-M3-007`)
- **Asset ID:** `AST-M3-007`
- **On Screen Text:** `ME = t · s / √n` — "อยากลด Margin of Error ลงครึ่งหนึ่ง ต้องเพิ่ม Sample Size n ถึง 4 เท่า!"
- **Voice Over Script Ref:** `AUD-M3L2-S03`
- **Motion Specification:** Visual 4× sample stack shrinking error bracket by 50%.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** MathML formula text.
- **Developer Notes:** Include $n = (Z \cdot \sigma / E)^2$ formula.

## Screen M3L2-S04 — Interactive CI & Sample Size Explorer
- **Learning Objective:** ทดลองปรับ Confidence Level, `n`, `s` และจำลองการสุ่มซ้ำ 20 ครั้งเพื่อเห็น 95% Capture Rate
- **Duration:** 60s
- **Layout:** Sliders + 20-Sample CI Capture Canvas (`INT-M3-L2-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M3-L2-01`
- **On Screen Text:** "ลองกด 'Simulate 20 Samples' แล้วดูว่ามีกี่ช่วงที่คลุมเส้นค่าจริง μ (สีเขียว) และกี่ช่วงที่พลาด (สีแดง)!"
- **Voice Over Script Ref:** `AUD-M3L2-S04`
- **Motion Specification:** 20 horizontal confidence bars pop in sequentially across vertical $\mu$ line.
- **Trigger Logic:** Run simulation at least once and test 2 confidence levels (`+10 pts`).
- **Accessibility Notes:** Icon badges (`✓` / `✕`) alongside green/red bars.
- **Developer Notes:** Computes exact student-t critical approximation.

## Screen M3L2-S05 — Lesson 2 Knowledge Check (`KC-M3-L2`)
- **Learning Objective:** ทดสอบความเข้าใจ CI และ Margin of Error (`M3-Q014`, `M3-Q020`)
- **Duration:** 30s
- **Layout:** Centered 2-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 2 (2 ข้อ)"
- **Voice Over Script Ref:** `AUD-M3L2-S05`
- **Motion Specification:** Feedback reveal.
- **Trigger Logic:** Complete 2 questions to unlock Lesson 3.
- **Accessibility Notes:** Keyboard accessible.
- **Developer Notes:** Update module progress to 40%.

---

# LESSON M3-L3: Hypothesis Testing (`3.3`)

## Screen M3L3-S01 — Courtroom Analogy: $H_0$ vs $H_1$
- **Learning Objective:** ตั้งสมมติฐาน $H_0$ (ไม่มีผลต่าง) และ $H_1$ (Two-sided / One-sided) ได้ถูกต้อง
- **Duration:** 35s
- **Layout:** Left Courtroom Metaphor (`AST-M3-008`) | Right $H_0 / H_1$ Factory Templates
- **Asset ID:** `AST-M3-008`
- **On Screen Text:** `H₀: μ₁ = μ₂` ("บริสุทธิ์ไว้ก่อน จนกว่าหลักฐานจะชี้ชัด") vs `H₁: μ₁ ≠ μ₂`
- **Voice Over Script Ref:** `AUD-M3L3-S01`
- **Motion Specification:** Balance scale animation weighting evidence against $H_0$.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear phrasing warning: never say "Accept $H_0$".
- **Developer Notes:** Show 1-tailed vs 2-tailed triggers.

## Screen M3L3-S02 — Alpha Risk ($\alpha$, Type I Error)
- **Learning Objective:** เข้าใจ $\alpha$ Risk (False Alarm / Producer's Risk) และบทบาทของระดับนัยสำคัญ `0.05`
- **Duration:** 35s
- **Layout:** Left Null Curve Tail Shading (`AST-M3-009`) | Right 2×2 Matrix Focus
- **Asset ID:** `AST-M3-009`
- **On Screen Text:** `α Risk (Type I Error)` — "ปฏิเสธ H₀ ทั้งที่ H₀ เป็นจริง = เตือนผิดพลาด (False Alarm)"
- **Voice Over Script Ref:** `AUD-M3L3-S02`
- **Motion Specification:** Red critical tail regions (`2.5% + 2.5% = 5%`) shade outward on $H_0$ curve.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Patterned red tail area.
- **Developer Notes:** Link to SPC `±3σ` false alarm rate (`0.27%`).

## Screen M3L3-S03 — Beta Risk ($\beta$, Type II Error) & Power ($1 - \beta$)
- **Learning Objective:** เข้าใจ $\beta$ Risk (Missed Signal / Consumer's Risk) และ Statistical Power ($\ge 80\%$)
- **Duration:** 40s
- **Layout:** Overlapping $H_0$ & $H_1$ Curves (`AST-M3-010`) + 2×2 Error Matrix
- **Asset ID:** `AST-M3-010`
- **On Screen Text:** `β Risk (Type II Error) & Power (1 − β)` — "พลาดจับความผิดปกติไม่เจอ (Escape) | มาตรฐานต้องการ Power ≥ 80%"
- **Voice Over Script Ref:** `AUD-M3L3-S03`
- **Motion Specification:** Shaded overlap under $H_1$ left of critical cutoff (`β`) vs right of cutoff (`Power`).
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Full accessible 2×2 HTML table.
- **Developer Notes:** Emphasize increasing `n` improves Power without hurting $\alpha$.

## Screen M3L3-S04 — Understanding p-value
- **Learning Objective:** ตีความค่า `p-value` เทียบกับ $\alpha$ เพื่อสรุปผลทางสถิติได้ทันที
- **Duration:** 35s
- **Layout:** Left p-value Gauge (`0.000 .. 1.000`) + Right Decision Rule (`AST-M3-011`)
- **Asset ID:** `AST-M3-011`
- **On Screen Text:** `"If the p is low, the Null must go!"` — `p < 0.05` → Reject $H_0$ | `p ≥ 0.05` → Fail to Reject $H_0$
- **Voice Over Script Ref:** `AUD-M3L3-S04`
- **Motion Specification:** Animated p-value pointer crossing `0.05` threshold flipping decision badge.
- **Trigger Logic:** Click 3 sample `p-value` presets (`0.002`, `0.048`, `0.173`).
- **Accessibility Notes:** High-contrast decision banner.
- **Developer Notes:** Clarify `p = 0.173` means insufficient evidence, not proof of equality.

## Screen M3L3-S05 — Statistical vs Practical Significance
- **Learning Objective:** แยกความต่างระหว่าง "มีนัยสำคัญทางสถิติ" กับ "มีนัยสำคัญในงานวิศวกรรมจริง"
- **Duration:** 35s
- **Layout:** Split Case (`n=10,000, Δ=0.002 mm, p=0.001` vs `Spec ±0.10 mm`) (`AST-M3-012`)
- **Asset ID:** `AST-M3-012`
- **On Screen Text:** "p < 0.05 ไม่ได้แปลว่าต้องเสียเงินแก้ไขเสมอไป — ให้ดูขนาดผลต่างจริง (CI) เทียบ Spec ด้วย!"
- **Voice Over Script Ref:** `AUD-M3L3-S05`
- **Motion Specification:** Zoom out from narrow `0.002 mm` CI inside wide `±0.10 mm` spec walls.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Side-by-side comparison box.
- **Developer Notes:** Crucial seniority skill for QA/PE leads.

## Screen M3L3-S06 — Interactive Alpha–Beta–Power Visualizer
- **Learning Objective:** ทดลองปรับ $\alpha$, Effect Size ($\Delta$) และ Sample Size ($n$) เพื่อดูการแลกเปลี่ยนระหว่าง $\alpha, \beta$ และ Power
- **Duration:** 60s
- **Layout:** Dual Overlapping Normal Curves + 3 Sliders (`INT-M3-L3-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M3-L3-01`
- **On Screen Text:** "ลองลด α จาก 0.05 เป็น 0.01 แล้วดู β พุ่งสูงขึ้น — จากนั้นลองเพิ่ม n เพื่อดึง Power กลับมา ≥ 80%!"
- **Voice Over Script Ref:** `AUD-M3L3-S06`
- **Motion Specification:** Real-time curve separation and cutoff line sliding.
- **Trigger Logic:** Achieve `Power >= 80%` by adjusting `n` (`+10 pts`).
- **Accessibility Notes:** Live ARIA readout for `Alpha`, `Beta`, and `Power %`.
- **Developer Notes:** Exact Normal CDF math in JS.

## Screen M3L3-S07 — Lesson 3 Knowledge Check (`KC-M3-L3`)
- **Learning Objective:** ทดสอบความเข้าใจ $H_0/H_1$, $\alpha/\beta$, Power และ p-value (`M3-Q027`, `M3-Q034`, `M3-Q039`)
- **Duration:** 45s
- **Layout:** 3-Question Card
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบท้ายบทที่ 3 (3 ข้อ)"
- **Voice Over Script Ref:** `AUD-M3L3-S07`
- **Motion Specification:** Feedback reveal.
- **Trigger Logic:** Complete 3 questions to unlock Lesson 4.
- **Accessibility Notes:** Keyboard controls.
- **Developer Notes:** Update module progress to 65%.

---

# LESSON M3-L4: Practical Tests & Machine A vs B Workshop (`3.4`)

## Screen M3L4-S01 — Practical Test Roadmap & Prerequisite Checks
- **Learning Objective:** ตรวจสอบ Normality (`p >= 0.05`) และ Equal Variance ก่อนเลือกรัน T-Test หรือ ANOVA
- **Duration:** 35s
- **Layout:** Decision Flowchart (`AST-M3-013`)
- **Asset ID:** `AST-M3-013`
- **On Screen Text:** "เช็ค 3 ด่านก่อนรัน Test: Independence → Normality (p ≥ 0.05) → Equal Variance (Welch vs Pooled)"
- **Voice Over Script Ref:** `AUD-M3L4-S01`
- **Motion Specification:** Flowchart nodes illuminate sequentially (`1 Group → 1-Sample T`, `2 Groups → 2-Sample / Paired T`, `3+ Groups → ANOVA`).
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Text flowchart alternative.
- **Developer Notes:** Note Welch's T-test does not require equal variances.

## Screen M3L4-S02 — 1-Sample T-Test
- **Learning Objective:** ใช้ 1-Sample T-Test ทดสอบค่าเฉลี่ยเครื่องจักรกับ Target Spec ($\mu_0$)
- **Duration:** 40s
- **Layout:** Left Formula & `MC-A vs 120.0 N` Worked Example | Right t-Distribution Cutoff (`AST-M3-014`)
- **Asset ID:** `AST-M3-014`
- **On Screen Text:** `1-Sample T-Test: t = (x̄ − μ₀) / (s / √n)` — "MC-A (119.50 N) vs เป้า 120.0 N: t = −1.415, p = 0.173 → ยังไม่ต่างจากเป้า"
- **Voice Over Script Ref:** `AUD-M3L4-S02`
- **Motion Specification:** Sample mean CI overlaps `120.0 N` vertical target line.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Clear worked steps.
- **Developer Notes:** Exact Workshop CSV `MC-A` calculation.

## Screen M3L4-S03 — 2-Sample T-Test (vs Paired T-Test)
- **Learning Objective:** ใช้ 2-Sample T-Test เปรียบเทียบ 2 เครื่องจักรอิสระ และแยกแยะออกจาก Paired T-Test
- **Duration:** 45s
- **Layout:** Split Comparison (`2-Sample Independent` vs `Paired Before-After`, `AST-M3-015`)
- **Asset ID:** `AST-M3-015`
- **On Screen Text:** `2-Sample T-Test` (เทียบคนละกลุ่ม เช่น MC-A vs MC-B) vs `Paired T-Test` (วัดชิ้นเดิมซ้ำ ก่อน-หลัง)
- **Voice Over Script Ref:** `AUD-M3L4-S03`
- **Motion Specification:** Independent box plots vs paired connecting arrows on identical parts.
- **Trigger Logic:** Toggle between Independent vs Paired visual diagram.
- **Accessibility Notes:** Semantic comparison table.
- **Developer Notes:** Prevents common Paired vs 2-Sample confusion.

## Screen M3L4-S04 — ANOVA Concept (Introduction)
- **Learning Objective:** เข้าใจหลักการ One-Way ANOVA (`F = MS_between / MS_within`) เพื่อเทียบ ≥ 3 กลุ่มพร้อมกัน
- **Duration:** 45s
- **Layout:** Left 4-Cavity Box Plot + F-Ratio Visual (`AST-M3-016`) | Right Alpha Inflation Alert (`26.5%`)
- **Asset ID:** `AST-M3-016`
- **On Screen Text:** `ANOVA: F = Between-Group Variance / Within-Group Variance` — "เทียบ 4 Cavities ใช้ ANOVA ครั้งเดียว กัน Alpha พุ่ง 26.5%!"
- **Voice Over Script Ref:** `AUD-M3L4-S04`
- **Motion Specification:** Compares low-F overlapping groups vs high-F separated Cavity 3.
- **Trigger Logic:** Narration complete unlocks Next.
- **Accessibility Notes:** Explain Tukey post-hoc follow-up.
- **Developer Notes:** Conceptual introduction (calculations automated in software).

## Screen M3L4-S05 — Interactive Test Selection Wizard
- **Learning Objective:** เลือกการทดสอบทางสถิติให้ถูกต้องจาก 6 สถานการณ์หน้างาน
- **Duration:** 50s
- **Layout:** 6-Case Interactive Matcher (`INT-M3-L4-01`)
- **Asset ID:** N/A | **Interactive ID:** `INT-M3-L4-01`
- **On Screen Text:** "แบบฝึกหัด: เลือก Statistical Test ที่เหมาะสมสำหรับ 6 โจทย์วิศวกรรม"
- **Voice Over Script Ref:** `AUD-M3L4-S05`
- **Motion Specification:** Immediate rationale cards.
- **Trigger Logic:** Passing `>= 5/6` (`+10 pts`).
- **Accessibility Notes:** Accessible radio/select options.
- **Developer Notes:** Covers 1-Sample, 2-Sample, Paired, ANOVA, and Non-normal cases.

## Screen M3L4-S06 — Workshop: เปรียบเทียบ Machine A vs Machine B
- **Learning Objective:** วิเคราะห์ข้อมูลจริง 40 ชิ้น (`workshop_m3_machine_a_vs_b.csv`) เพื่อตัดสินใจเปรียบเทียบ MC-A vs MC-B
- **Duration:** 120s
- **Layout:** Interactive Hypothesis Test Lab (`INT-M3-L4-02`) + CSV Download + 4 Diagnostic Questions
- **Asset ID:** N/A | **Interactive ID:** `INT-M3-L4-02`
- **On Screen Text:** "Workshop: วิเคราะห์แรงดึง Pull Force (N) ระหว่าง Machine A (20 ชิ้น) vs Machine B (20 ชิ้น)"
- **Voice Over Script Ref:** `AUD-M3L4-S06`
- **Motion Specification:** Box plot, 95% CI error bars, and t-test p-value readout animate dynamically.
- **Trigger Logic:** Score `>= 3/4` on Workshop diagnostic quiz.
- **Accessibility Notes:** Full summary statistics table.
- **Developer Notes:** Exact statistics verified against CSV.

## Screen M3L4-S07 — Workshop Step-by-Step Solution
- **Learning Objective:** สรุปผล Workshop ทั้ง 95% CI, F-test, 2-Sample T-test และข้อสรุปเชิงวิศวกรรม
- **Duration:** 40s
- **Layout:** Left Output Report Card (`t=12.38, p<0.0001`, `AST-M3-017`) | Right Engineering Decision
- **Asset ID:** `AST-M3-017`
- **On Screen Text:** "ผลเฉลย: MC-B (125.15 N) แรงดึงสูงกว่า MC-A (119.50 N) ถึง +5.65 N (95% CI [4.73, 6.57], p < 0.0001)"
- **Voice Over Script Ref:** `AUD-M3L4-S07`
- **Motion Specification:** Difference CI bar renders cleanly above zero line.
- **Trigger Logic:** Review solution to unlock summary.
- **Accessibility Notes:** Structured summary table.
- **Developer Notes:** Full workings in `07_workshop_guide.md`.

## Screen M3L4-S08 — Practical Summary & Bridge to Module 4
- **Learning Objective:** สรุปความเชื่อมโยงจาก Hypothesis Testing สู่ Process Capability (Module 4)
- **Duration:** 25s
- **Layout:** Summary Roadmap (`AST-M3-018`)
- **Asset ID:** `AST-M3-018`
- **On Screen Text:** "Module 3 จบแล้ว! รู้จักเทียบค่าเฉลี่ยด้วย T-Test/ANOVA → บทหน้าไปดูว่ากระบวนการ 'เก่งพอ' เทียบ Spec ลูกค้าไหม (Cp/Cpk)"
- **Voice Over Script Ref:** `AUD-M3L4-S08`
- **Motion Specification:** Milestone badge highlights Module 3 → Module 4.
- **Trigger Logic:** Next opens Final Exam.
- **Accessibility Notes:** Summary bullet list.
- **Developer Notes:** Preload Exam bank.

## Screen M3L4-S09 — Module 3 Final Assessment (`EXAM-M3`)
- **Learning Objective:** วัดผลสัมฤทธิ์ Module 3 (เกณฑ์ผ่าน 80% = 16/20 ข้อ)
- **Duration:** 10–15 min
- **Layout:** Exam Runner (20 Randomized Questions from `M3-Q001..M3-Q060`)
- **Asset ID:** N/A
- **On Screen Text:** "แบบทดสอบประมวลผล Module 3 (สุ่ม 20 ข้อ จากคลัง 60 ข้อ | เกณฑ์ผ่าน 80% | ทำซ้ำได้ไม่จำกัด)"
- **Voice Over Script Ref:** `AUD-M3L4-S09`
- **Motion Specification:** Lesson breakdown progress rings.
- **Trigger Logic:** Stratify `4 L1 + 4 L2 + 6 L3 + 6 L4 = 20 Qs`; Pass `>= 80%` unlocks Module 4.
- **Accessibility Notes:** Untimed accessible exam.
- **Developer Notes:** Save `var_exam_score`.
