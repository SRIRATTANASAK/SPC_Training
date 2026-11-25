#!/usr/bin/env python3
"""Build structured JSON data for the Astro web app from Module Markdown/CSV sources."""

from __future__ import annotations

import argparse
import csv
import json
import re
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent.parent

MODULE_CONFIGS: dict[int, dict[str, Any]] = {
    1: {
        "moduleId": "M1",
        "slug": "module-01",
        "moduleTitle": "Statistics Foundation for Manufacturing",
        "moduleTitleTh": "พื้นฐานสถิติสำหรับงานวิศวกรรมการผลิต",
        "lessonTitles": {
            "M1-L1": "Why Statistics in Manufacturing?",
            "M1-L2": "Types of Data & Measurement Scales",
            "M1-L3": "Descriptive Statistics",
            "M1-L4": "Data Visualization & Final Assessment",
        },
        "workshops": {
            "classification": "workshop_m1_data_classification.csv",
            "dimensionsAndDefects": "workshop_m1_dimensions_and_defects.csv",
        },
    },
    2: {
        "moduleId": "M2",
        "slug": "module-02",
        "moduleTitle": "Probability and Distribution",
        "moduleTitleTh": "",
        "lessonTitles": {
            "M2-L1": "Concept of Variation",
            "M2-L2": "Probability Basics & Sampling",
            "M2-L3": "Probability Distributions",
            "M2-L4": "Central Limit Theorem & CTQ Workshop",
        },
        "workshops": {
            "ctqBore": "workshop_m2_ctq_parts.csv",
        },
    },
}


def parse_lesson_content(text: str) -> dict[str, dict[str, str]]:
    sections: dict[str, dict[str, str]] = {}
    matches = list(re.finditer(r"^##\s+(M\d+L\d+-S\d{2})\s+—\s+(.+)$", text, re.M))
    for i, m in enumerate(matches):
        sid = m.group(1)
        title = m.group(2).strip()
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        body = text[start:end].strip()
        # Strip trailing lesson header or module note if captured
        body = re.sub(r"\n---\s*\n(?:#\s+LESSON\s+M\d+-L\d+|\*\(ใช้ตัวอย่างเพลา).*$", "", body, flags=re.S).strip()
        # Strip trailing horizontal rules
        body = re.sub(r"\n---\s*$", "", body).strip()
        # Strip inline <Asset id="..." /> and <Interactive id="..." /> tags so learners don't see raw tags
        body = re.sub(r"`<(?:Asset|Interactive)\s+id=\"[^\"]+\"\s*/>`", "", body)
        body = re.sub(r"<(?:Asset|Interactive)\s+id=\"[^\"]+\"\s*/>", "", body)
        # Clean up empty lines left by stripped tags
        body = re.sub(r"\n{3,}", "\n\n", body).strip()
        sections[sid] = {"title": title, "markdown": body}
    return sections


def parse_storyboard(text: str, lesson_titles: dict[str, str]) -> list[dict[str, Any]]:
    screens: list[dict[str, Any]] = []
    matches = list(re.finditer(r"^##\s+Screen\s+(M\d+L\d+-S\d{2})\s+—\s+(.+)$", text, re.M))
    for i, m in enumerate(matches):
        sid = m.group(1)
        title = m.group(2).strip()
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        block = text[start:end]
        mod_prefix, rest = sid.split("L", 1)
        lesson_num = rest.split("-")[0]
        lesson_id = f"{mod_prefix}-L{lesson_num}"
        interactive_ids = list(dict.fromkeys(re.findall(r"\bINT-M\d+-L\d+-\d{2}\b", block)))
        asset_ids = list(dict.fromkeys(re.findall(r"\bAST-M\d+-\d{3}\b", block)))
        screens.append(
            {
                "screenId": sid,
                "lessonId": lesson_id,
                "lessonTitle": lesson_titles.get(lesson_id, lesson_id),
                "storyboardTitle": title,
                "interactiveIds": interactive_ids,
                "assetIds": asset_ids,
            }
        )
    return screens


def clean_display_caption(raw: str) -> str:
    # Remove [PAUSE-1], [PAUSE-2], [ANIM: ...] and ** markdown bold markers for clean learner captions
    text = re.sub(r"\[(?:PAUSE-\d+|ANIM:[^\]]+)\]", "", raw)
    text = text.replace("**", "")
    return " ".join(text.split())


def parse_voiceover(text: str, module_slug: str) -> dict[str, dict[str, str]]:
    tracks: dict[str, dict[str, str]] = {}
    matches = list(
        re.finditer(
            r"^###\s+AUD-(M\d+L\d+-S\d{2})\s+\(([^)]+)\)\s+—\s+(.+)$", text, re.M
        )
    )
    for i, m in enumerate(matches):
        sid = m.group(1)
        duration = m.group(2).strip()
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        block = text[start:end]

        def extract_field(label: str) -> str:
            fm = re.search(
                rf"\*\*{re.escape(label)}:\*\*\s*\n(.*?)(?=\n-\s+\*\*|\n###|\n##|\Z)",
                block,
                re.S,
            )
            return " ".join(fm.group(1).strip().split()) if fm else ""

        tracks[sid] = {
            "audioId": f"AUD-{sid}",
            "audioFile": f"/audio/{module_slug}/AUD-{sid}.mp3",
            "duration": duration,
            "displayScriptTh": clean_display_caption(extract_field("Display Script (TH)")),
            "ttsCleanTh": extract_field("TTS Clean Script (TH)"),
            "enReference": extract_field("EN Reference"),
        }
    return tracks


def parse_questions(text: str) -> list[dict[str, Any]]:
    questions: list[dict[str, Any]] = []
    for line in text.splitlines():
        if not re.match(r"^\|\s*M\d+-Q\d{3}\s*\|", line):
            continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(cells) != 12:
            continue
        questions.append(
            {
                "id": cells[0],
                "lo": cells[1],
                "bloom": cells[2],
                "difficulty": cells[3],
                "type": cells[4],
                "question": cells[5],
                "choices": {
                    "A": cells[6],
                    "B": cells[7],
                    "C": cells[8],
                    "D": cells[9],
                },
                "correct": cells[10],
                "explanation": cells[11],
            }
        )
    return questions


def load_csv(path: Path) -> list[dict[str, str]]:
    with path.open(encoding="utf-8", newline="") as fh:
        return list(csv.DictReader(fh))


def build_module(mod_num: int) -> None:
    cfg = MODULE_CONFIGS[mod_num]
    slug = cfg["slug"]
    mod_dir = ROOT / "modules" / slug
    out_json = ROOT / "web" / "src" / "data" / f"{slug}.json"
    lesson_titles: dict[str, str] = cfg["lessonTitles"]

    content_map = parse_lesson_content((mod_dir / "00_lesson_content.md").read_text(encoding="utf-8"))
    storyboard = parse_storyboard((mod_dir / "01_storyboard.md").read_text(encoding="utf-8"), lesson_titles)
    voice_map = parse_voiceover((mod_dir / "02_voiceover_th_en.md").read_text(encoding="utf-8"), slug)
    questions = parse_questions((mod_dir / "06_assessment_bank.md").read_text(encoding="utf-8"))
    cheatsheet_md = (mod_dir / "08_cheatsheet_and_glossary.md").read_text(encoding="utf-8")

    screens = []
    for idx, sb in enumerate(storyboard):
        sid = sb["screenId"]
        lc = content_map.get(sid, {"title": sb["storyboardTitle"], "markdown": ""})
        vo = voice_map.get(sid, {})
        screens.append(
            {
                "index": idx + 1,
                "screenId": sid,
                "lessonId": sb["lessonId"],
                "lessonTitle": sb["lessonTitle"],
                "title": lc["title"],
                "markdown": lc["markdown"],
                "interactiveIds": sb["interactiveIds"],
                "assetIds": sb["assetIds"],
                "voiceover": vo,
                "prevScreenId": storyboard[idx - 1]["screenId"] if idx > 0 else None,
                "nextScreenId": storyboard[idx + 1]["screenId"] if idx + 1 < len(storyboard) else None,
            }
        )

    workshops: dict[str, list[dict[str, str]]] = {}
    for ws_key, csv_filename in cfg["workshops"].items():
        workshops[ws_key] = load_csv(mod_dir / "data" / csv_filename)

    payload = {
        "moduleId": cfg["moduleId"],
        "moduleTitle": cfg["moduleTitle"],
        "moduleTitleTh": cfg["moduleTitleTh"],
        "totalScreens": len(screens),
        "lessons": [
            {"id": lid, "title": title, "screens": [s["screenId"] for s in screens if s["lessonId"] == lid]}
            for lid, title in lesson_titles.items()
        ],
        "screens": screens,
        "questions": questions,
        "workshops": workshops,
        "resourcesMarkdown": cheatsheet_md,
    }

    out_json.parent.mkdir(parents=True, exist_ok=True)
    out_json.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")
    ws_summary = ", ".join(f"{len(rows)} {k} rows" for k, rows in workshops.items())
    print(
        f"Built {out_json.relative_to(ROOT)}: "
        f"{len(screens)} screens, {len(questions)} questions, {ws_summary}."
    )


def main() -> None:
    parser = argparse.ArgumentParser(description="Build structured JSON data for SPC_Training modules.")
    parser.add_argument(
        "--module",
        type=int,
        choices=sorted(MODULE_CONFIGS.keys()),
        help="Module number to build (default: build all configured modules).",
    )
    args = parser.parse_args()

    targets = [args.module] if args.module else sorted(MODULE_CONFIGS.keys())
    for mod_num in targets:
        build_module(mod_num)


if __name__ == "__main__":
    main()
