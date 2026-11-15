# Module 8 Interactive Logic Specification (Web-Native & SCORM Ready)

**Module:** Module 8 — SPC Problem Solving  
**Primary Runtime:** Web App (React / Astro MDX / HTML5 Interactive Components)  
**Passing Score (`EXAM-M8`):** 80% (`>= 16 / 20`)

---

## Global State Variables
```json
{
  "var_current_screen": "M8L1-S01",
  "var_completed_screens": [],
  "var_ocap_gate_step": 1,
  "var_selected_fixture_filter": "ALL",
  "var_selected_pareto_mode": "COPQ",
  "var_selected_scatter_x": "Clamp_Pressure_Bar",
  "var_pokayoke_active": false,
  "var_lesson_scores": { "L1": 0, "L2": 0, "L3": 0, "L4": 0 },
  "var_exam_score": 0,
  "var_exam_passed": false
}
```

---

## Lesson M8-L1 Interactions

### INT-M8-L1-01 — OCAP Gate & Containment Router (`M8L1-S05`)
- **Type:** 4-Scenario Decision Branching Simulator (`Passing = 4/4`, `+10 pts`)
- **Scenarios & Correct Routes:**
  1. **Scenario 1 (Single WE1 Spike — Suspected Data/Gage Error):**
     - Correct Route: `Gate 1 Detect Rule 1` → `Gate 2 Pause & Hold Last Batch` → `Gate 3 Verify Measurement & Re-enter Correct Digit` → **Resume WITHOUT Adjusting Machine Offset!**
     - Distractor Warning: *"Turn CNC Offset immediately"* triggers **Tampering Alert**!
  2. **Scenario 2 (Gradual 6-Pt Trend Upward on Bore Diameter):**
     - Correct Route: `Contain Last Good Subgroup` → `Verify Gage OK` → `Inspect Tool Wear / Hydraulic Pressure` → `Replace Worn Tool / Seal & Confirmation Run`.
  3. **Scenario 3 (Range `R` Exceeds `UCL_R`):**
     - Correct Route: **`Do NOT Adjust X̄ Offset!`** → `Contain Batch` → `Inspect Loose Clamp / Multi-Cavity / Mixed Stream / Gage Failure`.
  4. **Scenario 4 (Repeated `Raw Data > USL` on Automated Line):**
     - Correct Route: `Immediate Auto-Hold Lot (OCAP / JESD557)` → `Escalate Tier 3 QE/PE` → `Launch 7 QC + 8D RCA`.

---

## Lesson M8-L2 Interactions

### INT-M8-L2-01 — 7 QC Tools Drill-Down Explorer (`M8L2-S05`)
- **Type:** 4-Tab Synchronized Diagnostic Lab (`Passing = 4/4 checkpoints`, `+10 pts`)
- **Tabs & Interactions:**
  - **Tab 1 (`Stratification`):** Toggle `Combined` vs `Stratified by Fixture (FIX-A vs FIX-B)` → Exposes `FIX-B` as `100%` source of OOC!
  - **Tab 2 (`Dual Pareto`):** Toggle `Pareto by Defect Count` vs `Pareto by Cost (COPQ THB)` → Shows `DEF-01` jumps from `56.0%` count share to **`81.6%` COPQ share**!
  - **Tab 3 (`Histogram`):** Inspect combined Bimodal Histogram splitting cleanly into centered `FIX-A` (`40.000`) and right-shifted `FIX-B` (`40.024+`).
  - **Tab 4 (`Scatter Plot`):** Toggle X-axis between `Clamp_Pressure_Bar` (`r = -0.996`) vs `Coolant_Temp_C` (`r = -0.207`) → User picks real driver!

### INT-M8-L2-02 — Fishbone `4M1E+M` Builder (`M8L2-S06`)
- **Type:** 8-Factor Category Classifier (`Passing >= 7/8`, `+10 pts`)
- **8 Factory Factors -> Correct Fishbone Branches:**
  1. Cracked Hydraulic Clamp Seal → **Machine**
  2. Inconsistent Steel Hardness Between Coils → **Material**
  3. No Fixture-ID Separation in Sampling WI → **Method**
  4. Night Shift Blind Offset Adjustment → **Man**
  5. Dirty Micrometer Anvil Causing +0.02 mm Bias → **Measurement**
  6. Afternoon Ambient Temp Swing (+6°C near Dock) → **Environment (Mother Nature)**
  7. Uncalibrated Pressure Gauge on Fixture Manifold → **Measurement**
  8. Missing Preventive Seal Replacement Schedule → **Method**

---

## Lesson M8-L3 Interactions

### INT-M8-L3-01 — 5 Why Chain & Fault Tree Builder (`M8L3-S05`)
- **Type:** 3-Challenge RCA Workbench (`Passing = 3/3`, `+10 pts`)
- **Challenge 1 (Complete 5 Why + Therefore Test):** Reject `"Operator careless"` as Why #5; accept `"No PM seal replacement interval & no pressure interlock in Control Plan"`.
- **Challenge 2 (`FTA` Gate Selection):** Shipping an OOC lot requires (`Defect Occurs` **AND** `No Interlock Stops Line` **AND** `Sorting Misses Defect`) → Select **`AND Gate`**; whereas Bore Oversize can arise from (`Tool Wear` **OR** `Clamp Leak`) → Select **`OR Gate`**.
- **Challenge 3 (Corrective Action Strength):** Pick **`Preventive Poka-Yoke: Hydraulic Pressure Switch (< 55 bar auto-halts CNC cycle)`** over `"Retrain night operators"`.

---

## Lesson M8-L4 Interactions

### INT-M8-L4-01 — Workshop Part A: OCAP & 7 QC Tools Investigation (`M8L4-S04`)
- **Data Sources:** `data/workshop_m8_ooc_case_study.csv` (`SG-01..24`) + `data/workshop_m8_defect_pareto.csv` (`DEF-01..05`)
- **Interactive Filter & Analysis State:**
  - `var_selected_fixture_filter`: `"ALL" | "FIX-A" | "FIX-B"`
  - `var_selected_pareto_mode`: `"COUNT" | "COPQ"`
  - `var_selected_scatter_x`: `"Clamp_Pressure_Bar" | "Coolant_Temp_C"`
- **4 Required Checkpoints (`+15 pts`):**
  1. Identify all OOC subgroups on baseline limits (`UCL_X = 40.0115`, `UCL_R = 0.0423`, `USL = 40.050`): **`SG-08, SG-10, SG-12, SG-14, SG-15, SG-16`** (and `SG-06` Warning Zone A!).
  2. Stratification culprit (`FIX-A` vs `FIX-B` / `Shift`): **`FIX-B` carries 100% of OOC points across Afternoon & Night shifts**.
  3. Dual Pareto priority (`DEF-01`): **`56.0%` of defects (`112/200`)** but **`81.6%` of total COPQ (`50,400 / 61,740 THB`)**.
  4. Scatter Proof: **`Clamp_Pressure_Bar` (`r = -0.9955` with `Xbar`, `r = -0.8921` with `Range`)** is the primary root cause; `Coolant_Temp_C` (`r = -0.2066`) is ruled out.

### INT-M8-L4-02 — Workshop Part B: 5 Why, Poka-Yoke & PDCA Closure (`M8L4-S06`)
- **3 Required Closure Challenges (`+15 pts`):**
  1. **Select Verified 3-Legged Root Cause:** Occurrence = Cracked hydraulic check-valve seal letting pressure bleed (`< 55 bar`); Detection = Mixed-fixture charting + no pressure sensor interlock; Systemic = Missing seal PM & Control Plan stratification.
  2. **Deploy Poka-Yoke & Living Controls:** Toggle `var_pokayoke_active = true` (**Pressure Switch `< 55 bar` PLC Interlock + Stratified `FIX-A / FIX-B` Chart + 500-hr Seal PM + Horizontal Deployment to CNC #2–#4**).
  3. **Verify Post-PDCA Capability (`SG-17..24`):** Observe **`0` OOC**, Mean = **`40.0000 mm`**, `R̄ = 0.0190`, and **`Cpk = 2.040`** (`Ppk = 2.637`) vs Before **`Ppk = 0.843`** (Incident **`0.737`**).

---

## Final Exam Logic (`EXAM-M8` on `M8L4-S09`)
- **Question Pool:** `M8-Q001` .. `M8-Q060` (`06_assessment_bank.md`)
- **Stratified Random Draw (20 Questions):** `5 L1 + 5 L2 + 5 L3 + 5 L4`
- **Pass Criteria:** `>= 80%` (`16/20`), Unlimited retries with remediation links.
