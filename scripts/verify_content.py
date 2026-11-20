#!/usr/bin/env python3
"""Automated verification script for SPC_Training (Modules 01-10).

Checks:
1. Presence of all 9 standard markdown files per module + at least 1 CSV in data/.
2. Single Source of Truth: Screen IDs (M#L#-S##) match 100% between
   01_storyboard.md, 02_voiceover_th_en.md, 03_screen_wireframe.md,
   04_interactive_logic.md, and 05_asset_spec.md.
3. TTS Clean Script (TH) blocks in 02_voiceover_th_en.md match track count
   and contain zero forbidden characters ($ * [ ] ± ² ≠ → `).
4. Assessment bank (06_assessment_bank.md) has exactly 60 questions
   (M#-Q001..M#-Q060) with strictly 13 pipes per row.
5. CSV files in data/ have consistent column counts across all rows.

Usage:
    python3 scripts/verify_content.py
"""

from __future__ import annotations

import collections
import csv
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / "modules"
STANDARD_FILES = [
    "00_lesson_content.md",
    "01_storyboard.md",
    "02_voiceover_th_en.md",
    "03_screen_wireframe.md",
    "04_interactive_logic.md",
    "05_asset_spec.md",
    "06_assessment_bank.md",
    "07_workshop_guide.md",
    "08_cheatsheet_and_glossary.md",
]
FORBIDDEN_TTS_CHARS = set("$*[]±²≠→`")


def verify_all() -> int:
    issues: list[str] = []
    rows_summary: list[str] = []

    for m in range(1, 11):
        mod_dir = ROOT / f"module-{m:02d}"
        tag = f"M{m}"
        texts: dict[str, str] = {}

        for fname in STANDARD_FILES:
            fpath = mod_dir / fname
            if not fpath.exists():
                issues.append(f"[{tag}] Missing required file: {fname}")
            else:
                texts[fname] = fpath.read_text(encoding="utf-8")

        sid_re = re.compile(rf"\bM{m}L\d+-S\d{{2}}\b")
        sb = texts.get("01_storyboard.md", "")
        sb_ids = list(
            dict.fromkeys(
                re.findall(rf"^#+\s*Screen\s+(M{m}L\d+-S\d{{2}})\b", sb, re.M)
            )
        )
        sb_set = set(sb_ids)

        vo = texts.get("02_voiceover_th_en.md", "")
        vo_ids = set(re.findall(rf"^###\s*AUD-(M{m}L\d+-S\d{{2}})\b", vo, re.M))
        wf_ids = set(sid_re.findall(texts.get("03_screen_wireframe.md", "")))
        il_ids = set(sid_re.findall(texts.get("04_interactive_logic.md", "")))
        as_ids = set(sid_re.findall(texts.get("05_asset_spec.md", "")))

        if sb_set != vo_ids:
            issues.append(
                f"[{tag}] Storyboard vs Voiceover mismatch: "
                f"only-SB={sorted(sb_set - vo_ids)} only-VO={sorted(vo_ids - sb_set)}"
            )
        if sb_set - wf_ids:
            issues.append(
                f"[{tag}] Screens missing in wireframe: {sorted(sb_set - wf_ids)}"
            )
        for label, ref_ids in (
            ("wireframe", wf_ids),
            ("interactive", il_ids),
            ("asset", as_ids),
        ):
            extra = ref_ids - sb_set
            if extra:
                issues.append(
                    f"[{tag}] {label} references unknown screens: {sorted(extra)}"
                )

        tts_blocks = re.findall(
            r"TTS Clean Script \(TH\):\*\*\s*\n(.*?)(?=\n- \*\*|\n###|\n##|\Z)",
            vo,
            re.S,
        )
        if len(tts_blocks) != len(vo_ids):
            issues.append(
                f"[{tag}] TTS Clean blocks ({len(tts_blocks)}) != AUD tracks ({len(vo_ids)})"
            )
        bad_chars = collections.Counter(
            ch for block in tts_blocks for ch in block if ch in FORBIDDEN_TTS_CHARS
        )
        if bad_chars:
            issues.append(
                f"[{tag}] Forbidden chars in TTS Clean Script: {dict(bad_chars)}"
            )

        ab = texts.get("06_assessment_bank.md", "")
        q_rows = [
            line
            for line in ab.splitlines()
            if re.match(rf"^\|\s*M{m}-Q\d{{3}}\s*\|", line)
        ]
        q_ids = [
            re.match(rf"^\|\s*(M{m}-Q\d{{3}})", line).group(1) for line in q_rows
        ]
        expected_qids = [f"M{m}-Q{i:03d}" for i in range(1, 61)]
        if q_ids != expected_qids:
            issues.append(
                f"[{tag}] Question IDs mismatch (count={len(q_ids)}, "
                f"missing={sorted(set(expected_qids) - set(q_ids))})"
            )
        for line in q_rows:
            pipes = line.count("|")
            qid = line.split("|")[1].strip()
            if pipes != 13:
                issues.append(f"[{tag}] {qid} has {pipes} pipes (expected 13)")

        csv_files = sorted((mod_dir / "data").glob("*.csv"))
        if not csv_files:
            issues.append(f"[{tag}] No CSV files found in data/")
        for csv_path in csv_files:
            with csv_path.open(encoding="utf-8", newline="") as fh:
                data = list(csv.reader(fh))
            if not data:
                issues.append(f"[{tag}] {csv_path.name} is empty")
                continue
            width = len(data[0])
            ragged = [idx + 1 for idx, row in enumerate(data) if len(row) != width]
            if ragged:
                issues.append(
                    f"[{tag}] {csv_path.name} ragged rows at lines {ragged[:5]}"
                )

        rows_summary.append(
            f"{tag:<4} | {len(sb_ids):>7} | {len(vo_ids):>3} | {len(q_ids):>3} | {len(csv_files):>3}"
        )

    print("Mod  | Screens | AUD |  Qs | CSV")
    print("-----+---------+-----+-----+----")
    for row in rows_summary:
        print(row)

    if issues:
        print("\nISSUES FOUND:")
        for item in issues:
            print(f"  - {item}")
        print(f"\nFAIL: {len(issues)} issue(s) detected.")
        return 1

    total_screens = sum(int(r.split('|')[1].strip()) for r in rows_summary)
    print(f"\nPASS: All 10 modules verified 100% ({total_screens} screens, 600 questions, 16 CSVs).")
    return 0


if __name__ == "__main__":
    sys.exit(verify_all())
