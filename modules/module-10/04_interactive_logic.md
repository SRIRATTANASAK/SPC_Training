# Module 10 Interactive Logic Specification (Web-Native & SCORM Ready)

**Module:** Module 10 — Industrial Case Study (AIAG-Based Cases 1–4)  
**Primary Runtime:** Web App (React / Astro MDX / HTML5 Interactive Components)  
**Passing Score (`EXAM-M10`):** 80% (`>= 16 / 20`)

---

## Global State Variables
```json
{
  "var_current_screen": "M10L1-S01",
  "var_completed_screens": [],
  "var_case1_solved": false,
  "var_case2_interlock_on": false,
  "var_case3_active_chart": "p",
  "var_case4_ppap_approved": false,
  "var_lesson_scores": { "L1": 0, "L2": 0, "L3": 0, "L4": 0 },
  "var_exam_score": 0,
  "var_exam_passed": false
}
```

---

## Case Dashboards (`INT-M10-L1-01` .. `INT-M10-L4-01`)

### INT-M10-L1-01 — Case 1 Machining Dashboard (`M10L1-S05`)
- **Data Source:** `data/case1_machining_xbar_r.csv` (`30.000 ± 0.050 mm`, `UCL_X = 30.0028`, `LCL_X = 29.9972`, `UCL_R = 0.0101`)
- **Tasks (`+15 pts`):** Identify `SG-16..20` OOC on `X̄` (`Cp = 8.08`, `Cpk = 8.08` baseline) and select **Replace Tool Insert + Log Event + Set Preventive Tool-Life Counter**.

### INT-M10-L2-01 — Case 2 Assembly Torque Dashboard (`M10L2-S04`)
- **Data Source:** `data/case2_assembly_imr_torque.csv` (`25.0 ± 3.0 Nm`, `UCL_I = 25.82`, `LCL_I = 24.19`, `UCL_MR = 1.00`)
- **Tasks (`+15 pts`):** Flag `PT-21..25 < LCL_I (24.19)` and toggle `var_case2_interlock_on = true` (**Replace Worn Clutch + Enable PLC Auto-Interlock**).

### INT-M10-L3-01 — Case 3 Defect Monitoring Dashboard (`M10L3-S04`)
- **Data Source:** `data/case3_defect_p_u_chart.csv` (`20 Lots`, `∑n = 2,835`, `p̄ = 0.0282`, `ū = 0.0519`)
- **Tasks (`+15 pts`):** Switch `var_case3_active_chart` between `"p"` and `"u"` to flag **`LOT-13` (`OOC_p = 0.0875`)** and **`LOT-17` (`OOC_u = 0.1500`)**.

### INT-M10-L4-01 — Case 4 PPAP Release Console (`M10L4-S04`)
- **Data Source:** `data/case4_ppap_release_ppk.csv` (`50.000 ± 0.100 mm`, `100` parts)
- **Tasks (`+15 pts`):** Verify 3 Gates (`MSA < 10%`, `Stability 0 OOC`, `Normality`), confirm **`Ppk = 2.474 >= 1.67`** (เกณฑ์ตามข้อกำหนดลูกค้า/PPAP (ยังไม่ได้ยืนยันจากต้นฉบับ)), and click **Approve PPAP Release** (`var_case4_ppap_approved = true`).

---

## Final Exam Logic (`EXAM-M10` on `M10L4-S08`)
- **Question Pool:** `M10-Q001` .. `M10-Q060` (`06_assessment_bank.md`)
- **Stratified Random Draw (20 Questions):** `5 L1 + 5 L2 + 5 L3 + 5 L4`
- **Pass Criteria:** `>= 80%` (`16/20`) -> Unlocks **Course Completion Certificate**.
