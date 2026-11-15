# Module 9 Interactive Logic Specification (Web-Native & SCORM Ready)

**Module:** Module 9 — MSA Connection to SPC  
**Primary Runtime:** Web App (React / Astro MDX / HTML5 Interactive Components)  
**Passing Score (`EXAM-M9`):** 80% (`>= 16 / 20`)

---

## Global State Variables
```json
{
  "var_current_screen": "M9L1-S01",
  "var_completed_screens": [],
  "var_ev_pct": 5,
  "var_av_pct": 5,
  "var_true_cpk": 1.67,
  "var_observed_cpk": 1.66,
  "var_ratchet_stop_applied": false,
  "var_lesson_scores": { "L1": 0, "L2": 0, "L3": 0, "L4": 0 },
  "var_exam_score": 0,
  "var_exam_passed": false
}
```

---

## Lesson M9-L1 Interactions

### INT-M9-L1-01 — Gage R&R Impact Simulator (`M9L1-S04`)
- **Inputs:**
  - `var_ev_pct`: Slider `2%` to `60%` (Default `5%`)
  - `var_av_pct`: Slider `2%` to `60%` (Default `5%`)
- **Calculated Outputs:**
  - `grr_pct = Math.sqrt(var_ev_pct**2 + var_av_pct**2)`
  - `sigma_obs_ratio = 1 / Math.sqrt(Math.max(0.05, 1 - (grr_pct/100)**2))`
  - `var_observed_cpk = +(var_true_cpk / sigma_obs_ratio).toFixed(2)`
  - Live Control Chart simulates false OOC dots when `grr_pct > 30%`.
- **Completion Trigger:** Test both `< 10%` (PASS) and `> 30%` (FAIL) regimes (`+10 pts`).

---

## Lesson M9-L2 Interactions

### INT-M9-L2-01 — Repeatability vs Reproducibility Lab (`M9L2-S06`)
- **Type:** 2-Mode Diagnostic & Fix Simulator (`Passing = 2/2`, `+10 pts`)
- **Modes:**
  1. **`EV > AV` (Loose Gage Fixture):** `R` Chart by Appraiser shows points exceeding `UCL_R` → Correct Fix: **Repair/Tighten Gage Fixture or Upgrade Resolution**.
  2. **`AV > EV` (Appraiser B Pressing Hard):** `Xbar` Chart by Appraiser shows Appraiser B shifted `-0.022 mm` → Correct Fix: **Standardize Technique & Use Ratchet Stop Micrometer**.

---

## Lesson M9-L3 Interactions

### INT-M9-L3-01 — Bias, Linearity & Stability Diagnostic (`M9L3-S05`)
- **Type:** 3-Chart Diagnostic Matcher (`Passing = 3/3`, `+10 pts`)
- **Charts & Matches:**
  1. Constant `+0.015 mm` shift on Master Block → **Bias** → *Zero / Recalibrate Offset*.
  2. Error grows from `0.000` at `10 mm` to `+0.030` at `50 mm` → **Linearity** → *Repair/Replace Gage Mechanism*.
  3. Daily Check Standard drifts above `UCL` on Day 12 → **Stability** → *Quarantine Gage & Recall for Calibration*.

---

## Lesson M9-L4 Interactions

### INT-M9-L4-01 — Workshop: Reading & Fixing the Gage R&R Report (`M9L4-S03`)
- **Data Source:** `data/workshop_m9_gage_rr_study.csv` (`10 Parts × 3 Appraisers × 3 Trials = 90` measurements, Spec `12.000 ± 0.100 mm`, Tol `0.200 mm`)
- **3 Required Checkpoints (`+15 pts`):**
  1. **Verify Metrics:** `%GRR (SV) = 51.25%` (`FAIL`), `%GRR (Tol) = 37.74%` (`FAIL`), `ndc = 2` (`FAIL < 5`).
  2. **Pinpoint Culprit:** `AV (0.01252) >> EV (0.00126)` — **Appraiser B (`11.9783 mm`) reads `-0.022 mm` lower than A (`12.0003`) & C (`12.0022`)**.
  3. **Apply Fix (`var_ratchet_stop_applied = true`):** Deploy **Constant-Force Ratchet Stop Micrometer + Standardized WI** → `%GRR` drops to **`< 8%`**, `ndc >= 15` (`PASS`).

---

## Final Exam Logic (`EXAM-M9` on `M9L4-S09`)
- **Question Pool:** `M9-Q001` .. `M9-Q060` (`06_assessment_bank.md`)
- **Stratified Random Draw (20 Questions):** `5 L1 + 5 L2 + 5 L3 + 5 L4`
- **Pass Criteria:** `>= 80%` (`16/20`), Unlimited retries with remediation links.
