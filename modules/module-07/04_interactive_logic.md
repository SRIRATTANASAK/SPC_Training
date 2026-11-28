# Module 7 Interactive Logic Specification (Web-Native & SCORM Ready)

**Module:** Module 7 — SPC for Manufacturing Process  
**Primary Runtime:** Web App (React / Astro MDX / HTML5 Interactive Components)  
**Passing Score (`EXAM-M7`):** 80% (`>= 16 / 20`)

---

## Global State Variables
```json
{
  "var_current_screen": "M7L1-S01",
  "var_completed_screens": [],
  "var_line_speed_pph": 600,
  "var_sampling_interval_min": 120,
  "var_subgroup_method": "consecutive",
  "var_escalation_step": 1,
  "var_lesson_scores": { "L1": 0, "L2": 0, "L3": 0, "L4": 0 },
  "var_exam_score": 0,
  "var_exam_passed": false
}
```

---

## Lesson M7-L1 Interactions

### INT-M7-L1-01 — Sampling Frequency & Rational Subgroup Risk Calculator (`M7L1-S05`)
- **Inputs:**
  - `var_line_speed_pph`: Slider `30` to `600 pcs/hr` (Default `600`)
  - `var_sampling_interval_min`: Slider `15` to `240 min` (Default `120`)
  - `var_subgroup_method`: Toggle `"consecutive"` (5 parts back-to-back) vs `"mixed_time"` (spread over 60 min)
- **Calculated Outputs:**
  - `parts_at_risk = Math.round(var_line_speed_pph * (var_sampling_interval_min / 60))`
  - At `600 pcs/hr` & `120 min` → **`1,200 parts at risk`** (`Red High Risk Badge`)
  - At `600 pcs/hr` & `30 min` → **`300 parts at risk`** (`Green Controlled Badge`)
  - Switching to `"mixed_time"` simulates artificial `R̄` inflation (`+45%` wider limits) hiding gradual tool drift.
- **Completion Trigger:** Adjust interval to cut risk AND compare both subgroup modes (`+10 pts`).

---

## Lesson M7-L2 Interactions

### INT-M7-L2-01 — Production Line CTQ & Subgroup Planner (`M7L2-S05`)
- **Type:** 4-Process Interactive Configurator (`Passing = 4/4`, `+10 pts`)
- **Configurations:**
  1. **Machining (CNC Lathe):** Dominant = `Time / Tool Wear` | Method = `5 consecutive parts/hr` | Chart = `X̄-R` (+ `Trend 6 pts`, `Ra UCL only`)
  2. **Assembly / Electronics (Auto Torque & SMT):** Dominant = `Piece-to-Piece / Multi-Site` | Method = `100% PLC or Multi-site` | Chart = `I-MR (Auto Interlock)` / `X̄-S`
  3. **Injection Molding (4-Cavity Mold):** Dominant = `Cavity-to-Cavity Bias` | Method = **`Stratified Per Cavity (Never Mix 1–4!)`** | Chart = `X̄-R Per Cavity`
  4. **Stamping Press (Progressive Die):** Dominant = `Coil Lot & Die Clearance` | Method = `5 consecutive + Every Coil Swap` | Chart = `X̄-R` / `np (Fixed n Burr)`

---

## Lesson M7-L3 Interactions

### INT-M7-L3-01 — Reaction & Escalation Flowchart Simulator (`M7L3-S04`)
- **Type:** 4-Scenario Decision Branching Simulator (`Passing = 4/4`, `+10 pts`)
- **Scenarios & Correct Paths:**
  1. **Scenario 1 (Single WE1 Spike — Suspected Typo):** Operator pauses → Re-measures same part within 2 min (Verification) → Finds decimal entry typo → Corrects log & resumes (No machine adjustment!).
  2. **Scenario 2 (6-Point Trend on Machining Shaft):** Tier 1 Operator pauses → Quarantines last `60 pcs` back to last good subgroup → Inspects tool insert & detects chipping → Replaces insert + logs `"Tool Change"` (`Resolved inside 15 min` at Tier 1).
  3. **Scenario 3 (Persistent Shift Across 2 Subgroups After Tool Change):** Tier 1 cannot resolve inside 15 min → Escalates to **Tier 2 Process Technician (`15–60 min`)** → Checks hydraulic clamp & fixture alignment.
  4. **Scenario 4 (Repeated Raw Data > USL After 60 min):** Escalates to **Tier 3 QE/PE** → Triggers **Hold Lot (แนวปฏิบัติ) ตาม OCAP** & MRB containment sort across batch (`Module 8` handoff).

---

## Lesson M7-L4 Interactions

### INT-M7-L4-01 — Workshop Part A: 6-Station Control Plan Builder (`M7L4-S04`)
- **Data Source:** `data/workshop_m7_control_plan_line.csv` (`STN-10` .. `STN-60`)
- **Interactive Task:** Map `Recommended_Chart`, `SPC_Rules_Config`, and `LPA_Verification_Focus` for all 6 stations:
  - `STN-10 CNC Turning`: `Xbar-R`, `Rule 1 + Raw Spec + Trend (6)`, `No cherry-pick + Tool log`
  - `STN-20 Grinding Ra`: `Xbar-R`, **`UCL ONLY (LCL < 0 Invalid)` + Trend**, `Verify < LCL not alarming`
  - `STN-30 4-Cavity Mold`: **`Xbar-R Stratified Per Cavity`**, `Rule 1 + Raw Spec + Shift`, `Audit cavities NOT mixed`
  - `STN-40 Stamping Burr`: `np Chart`, `UCL ONLY (LCL=0)`, `Verify fixed n=100 & Gage Cal`
  - `STN-50 Auto Torque`: `I-MR (Auto PLC)`, `Rule 1 + Raw Spec + Shift`, `Verify PLC interlock active`
  - `STN-60 SMT Solder`: `u Chart` (varying 20–50 boards), `UCL ONLY if LCL<0`, `Verify staircase n_i accuracy`
- **Completion Trigger:** Configure `>= 5/6` stations accurately (`+15 pts`).

### INT-M7-L4-02 — Workshop Part B: Containment, Reaction & LPA Audit Lab (`M7L4-S06`)
- **3 Hands-On Challenges (`Passing = 3/3`, `+10 pts`):**
  1. **Containment Math (`STN-40`):** Line speed = `600 pcs/hr`, current interval = `120 min` (`1,200 pcs at risk`). What maximum sampling interval keeps containment risk **`<= 300 pcs`**?
     - Answer: **`30 minutes`** (`600 × 30/60 = 300 pcs` — cutting containment exposure by `75%`!).
  2. **Rewrite Broken Reaction Plan:** Select replacement for *"If OOC, notify Supervisor"*:
     - Correct: **"1) Pause feed immediately, 2) Re-measure check within 2 min, 3) Quarantine all units back to Last Good Subgroup (`max 300 pcs`), 4) Inspect punch clearance & escalate to Tier 2 if unresolved in 15 min."** ✅
  3. **Spot LPA Audit Violations:** Inspector at `STN-30` sees empty chart at `15:30` (operator says *"Will plot all at 17:00"*) AND finds Cavities 1–4 mixed in one subgroup. What are the 2 violations?
     - Correct: **1) `Wallpaper SPC` (not plotting real-time) & 2) Mixed-Cavity Rational Subgroup violation!** ✅

---

## Final Exam Logic (`EXAM-M7` on `M7L4-S09`)
- **Question Pool:** `M7-Q001` .. `M7-Q060` (`06_assessment_bank.md`)
- **Stratified Random Draw (20 Questions):** `5 L1 + 5 L2 + 5 L3 + 5 L4`
- **Pass Criteria:** `>= 80%` (`16/20`), Unlimited retries with remediation links.
