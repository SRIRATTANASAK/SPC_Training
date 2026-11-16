#!/usr/bin/env python3
"""Build structured JSON data for the Astro web app from Module 1 Markdown/CSV sources."""

from __future__ import annotations

import csv
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MOD1 = ROOT / "modules" / "module-01"
OUT_JSON = ROOT / "web" / "src" / "data" / "module-01.json"

LESSON_TITLES = {
    "M1-L1": "Why Statistics in Manufacturing?",
    "M1-L2": "Types of Data & Measurement Scales",
    "M1-L3": "Descriptive Statistics",
    "M1-L4": "Data Visualization & Final Assessment",
}


def parse_lesson_content(text: str) -> dict[str, dict[str, str]]:
    sections: dict[str, dict[str, str]] = {}
    matches = list(re.finditer(r"^##\s+(M1L\d+-S\d{2})\s+—\s+(.+)$", text, re.M))
    for i, m in enumerate(matches):
        sid = m.group(1)
        title = m.group(2).strip()
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        body = text[start:end].strip()
        # Strip trailing lesson header if captured
        body = re.sub(r"\n---\s*\n#\s+LESSON\s+M1-L\d+.*$", "", body, flags=re.S).strip()
        sections[sid] = {"title": title, "markdown": body}
    return sections


def parse_storyboard(text: str) -> list[dict]:
    screens: list[dict] = []
    matches = list(re.finditer(r"^##\s+Screen\s+(M1L\d+-S\d{2})\s+—\s+(.+)$", text, re.M))
    for i, m in enumerate(matches):
        sid = m.group(1)
        title = m.group(2).strip()
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        block = text[start:end]
        lesson_num = sid.split("L")[1].split("-")[0]
        lesson_id = f"M1-L{lesson_num}"
        interactive_ids = list(dict.fromkeys(re.findall(r"\bINT-M1-L\d+-\d{2}\b", block)))
        asset_ids = list(dict.fromkeys(re.findall(r"\bAST-M1-\d{3}\b", block)))
        screens.append(
            {
                "screenId": sid,
                "lessonId": lesson_id,
                "lessonTitle": LESSON_TITLES.get(lesson_id, lesson_id),
                "storyboardTitle": title,
                "interactiveIds": interactive_ids,
                "assetIds": asset_ids,
            }
        )
    return screens


def parse_voiceover(text: str) -> dict[str, dict[str, str]]:
    tracks: dict[str, dict[str, str]] = {}
    matches = list(
        re.finditer(
            r"^###\s+AUD-(M1L\d+-S\d{2})\s+\(([^)]+)\)\s+—\s+(.+)$", text, re.M
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
            "audioFile": f"/audio/module-01/AUD-{sid}.mp3",
            "duration": duration,
            "displayScriptTh": extract_field("Display Script (TH)"),
            "ttsCleanTh": extract_field("TTS Clean Script (TH)"),
            "enReference": extract_field("EN Reference"),
        }
    return tracks


def parse_questions(text: str) -> list[dict]:
    questions: list[dict] = []
    for line in text.splitlines():
        if not re.match(r"^\|\s*M1-Q\d{3}\s*\|", line):
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


def main() -> None:
    content_map = parse_lesson_content((MOD1 / "00_lesson_content.md").read_text(encoding="utf-8"))
    storyboard = parse_storyboard((MOD1 / "01_storyboard.md").read_text(encoding="utf-8"))
    voice_map = parse_voiceover((MOD1 / "02_voiceover_th_en.md").read_text(encoding="utf-8"))
    questions = parse_questions((MOD1 / "06_assessment_bank.md").read_text(encoding="utf-8"))
    cheatsheet_md = (MOD1 / "08_cheatsheet_and_glossary.md").read_text(encoding="utf-8")

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

    payload = {
        "moduleId": "M1",
        "moduleTitle": "Statistics Foundation for Manufacturing",
        "moduleTitleTh": "พื้นฐานสถิติสำหรับงานวิศวกรรมการผลิต",
        "totalScreens": len(screens),
        "lessons": [
            {"id": lid, "title": title, "screens": [s["screenId"] for s in screens if s["lessonId"] == lid]}
            for lid, title in LESSON_TITLES.items()
        ],
        "screens": screens,
        "questions": questions,
        "workshops": {
            "classification": load_csv(MOD1 / "data" / "workshop_m1_data_classification.csv"),
            "dimensionsAndDefects": load_csv(MOD1 / "data" / "workshop_m1_dimensions_and_defects.csv"),
        },
        "resourcesMarkdown": cheatsheet_md,
    }

    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(
        f"Built {OUT_JSON.relative_to(ROOT)}: "
        f"{len(screens)} screens, {len(questions)} questions, "
        f"{len(payload['workshops']['classification'])} classification rows, "
        f"{len(payload['workshops']['dimensionsAndDefects'])} workshop rows."
    )


if __name__ == "__main__":
    main()
