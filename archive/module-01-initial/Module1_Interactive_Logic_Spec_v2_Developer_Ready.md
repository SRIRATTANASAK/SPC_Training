# Module1 Interactive Logic Specification v2 (Developer Ready)

## Scope
Module 1 : Statistics Foundation for Manufacturing
Platform: Articulate Storyline 360
SCORM: 2004 4th Edition
Passing Score: 80%

---
# M1-L1 Why Statistics in Manufacturing

## INT-M1-L1-01 Variation Explorer
Screen ID: M1L1-INT01
Type: Interactive Animation

Variables
- var_shift
- var_machine
- var_material

Logic
IF user changes material OR machine
THEN update defect_rate chart

Learning Outcome
Understand variation sources.

Score
Completion = 5 points

---
## INT-M1-L1-02 COPQ Calculator
Inputs
- Scrap Cost
- Rework Cost
- Sorting Cost

Formula
COPQ = Scrap + Rework + Sorting

Feedback
Green < 10000
Yellow 10000-50000
Red > 50000

Score = 10

---
# M1-L2 Types of Data

## INT-M1-L2-01 Data Classification Game
Type: Drag and Drop

Drop Zones
- Variable Data
- Attribute Data

Items
Length
Diameter
Weight
Temperature
Scratch
Dent
Crack
Pass Fail

Scoring
Correct +1
Incorrect 0
Passing >= 7/8

Feedback Layer
Explain why each answer is correct.

---
## INT-M1-L2-02 Measurement Scale Matrix
Columns
Nominal
Ordinal
Interval
Ratio

Logic
User classifies examples.

Score = 10

---
# M1-L3 Descriptive Statistics

## INT-M1-L3-01 Mean Builder
Input: Dataset
Output: Mean

Trigger
Calculate automatically.

Feedback
Show calculation steps.

---
## INT-M1-L3-02 Variation Simulator
Variable
sigma_value

Range
0.1 to 3.0

Action
Histogram width changes.

Message
Low Sigma = Stable Variation
High Sigma = High Variation

Score = Completion

---
## INT-M1-L3-03 Statistics Match Game
Match
Mean
Median
Mode
Range
Variance
Std Dev
CV

Passing = 80%

---
# M1-L4 Data Visualization

## INT-M1-L4-01 Chart Selection Matrix
Scenario Mapping
Distribution -> Histogram
Defect Priority -> Pareto
Relationship -> Scatter Plot
Outliers -> Box Plot
Time Trend -> Run Chart

Score Logic
Correct +2
Incorrect 0

Total 10

---
## INT-M1-L4-02 Factory Dashboard
User selects chart.
System validates suitability.

Feedback
Correct chart explanation.
Incorrect chart explanation.

---
# Final Module Assessment Logic

Question Pool Size
20 Questions

Randomized
Yes

Pass Score
80%

Attempts
Unlimited

Remediation
Below 80%
Return to lesson summary.

---
# LMS Tracking

Completion Status
Viewed all lessons + pass assessment

Bookmarking
Enabled

Resume
Enabled

SCORM Data
Score
Completion
Time Spent
Question Responses

---
# Developer Variables

var_module_score
var_lesson_score
var_sigma_value
var_chart_choice
var_data_type
var_assessment_result

---
# Accessibility

Keyboard Navigation
Required

Captions
Required

Color Independent Feedback
Required
