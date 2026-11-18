#!/usr/bin/env bash
# สคริปต์ Generate ไฟล์เสียงพากย์ภาษาไทยครบทั้ง 29 หน้าจอใน Module 1
# ใช้น้ำเสียง Neural ธรรมชาติของคนๆ เดียวกัน ไม่ยาน ไม่ยืด
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

cd "${ROOT_DIR}"

echo "=========================================================="
echo "  SPC Training — Module 1 Natural Voice Generator"
echo "=========================================================="
echo "กำลังติดตั้ง edge-tts (หากยังไม่ได้ติดตั้ง)..."
pip install -q edge-tts

echo "กำลังสังเคราะห์เสียงพากย์ไทย (th-TH-PremwadeeNeural, Rate +5%)..."
python3 scripts/generate_tts.py --provider edge-tts --voice th-TH-PremwadeeNeural --rate "+5%"

echo ""
echo "✓ สำเร็จครบทั้ง 29 Tracks! ไฟล์เสียงทั้งหมดถูกบันทึกที่:"
echo "  - web/public/audio/module-01/"
echo "  - modules/module-01/assets/audio/"
