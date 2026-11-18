#!/usr/bin/env python3
"""Generate Thai MP3 voiceover tracks from TTS Clean Script (TH).

Supports:
  - --provider gemini     (GEMINI_API_KEY, uses gemini-2.5-flash-preview-tts + ffmpeg -> .mp3)
  - --provider google     (GOOGLE_TTS_API_KEY, Google Cloud Text-to-Speech)
  - --provider elevenlabs (ELEVENLABS_API_KEY, optional ELEVENLABS_VOICE_ID)

Usage:
    GEMINI_API_KEY=... python3 scripts/generate_tts.py --provider gemini
"""

from __future__ import annotations

import argparse
import base64
import json
import os
import subprocess
import sys
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_JSON = ROOT / "web" / "src" / "data" / "module-01.json"
ASSETS_AUDIO = ROOT / "modules" / "module-01" / "assets" / "audio"
PUBLIC_AUDIO = ROOT / "web" / "public" / "audio" / "module-01"


GEMINI_TTS_MODELS = [
    "gemini-2.5-flash-preview-tts",
    "gemini-3.1-flash-tts-preview",
    "gemini-3.8-flash-tts",
    "gemini-3.8-flash-lite-tts",
    "gemini-2.5-pro-preview-tts",
]


def get_ffmpeg_cmd() -> str:
    import shutil
    cmd = shutil.which("ffmpeg")
    if cmd:
        return cmd
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except Exception:
        return "ffmpeg"


def synth_gemini(
    text: str,
    api_key: str,
    voice_name: str = "Achernar",
    preferred_model: str = "",
) -> bytes:
    import urllib.error

    models = [preferred_model] + [m for m in GEMINI_TTS_MODELS if m != preferred_model] if preferred_model else list(GEMINI_TTS_MODELS)
    payload = {
        "contents": [
            {
                "parts": [
                    {
                        "text": text
                    }
                ]
            }
        ],
        "generationConfig": {
            "responseModalities": ["AUDIO"],
            "speechConfig": {
                "voiceConfig": {
                    "prebuiltVoiceConfig": {"voiceName": voice_name}
                }
            },
        },
    }

    data = None
    last_err: Exception | None = None
    for model in models:
        url = (
            "https://generativelanguage.googleapis.com/v1beta/models/"
            f"{model}:generateContent?key={api_key}"
        )
        for attempt in range(3):
            req = urllib.request.Request(
                url,
                data=json.dumps(payload).encode("utf-8"),
                headers={"Content-Type": "application/json"},
            )
            try:
                with urllib.request.urlopen(req, timeout=90) as resp:
                    data = json.loads(resp.read().decode("utf-8"))
                break
            except urllib.error.HTTPError as err:
                last_err = err
                body = err.read().decode("utf-8", errors="ignore")
                if err.code == 429:
                    if "PerDay" in body or "daily" in body.lower():
                        print(f"Model {model} hit daily quota, trying next model...", flush=True)
                        break
                    wait_s = 22 * (attempt + 1)
                    print(f"Rate limited (429) on {model}, waiting {wait_s}s...", flush=True)
                    time.sleep(wait_s)
                    continue
                raise
        if data is not None:
            break

    if data is None:
        if last_err:
            raise last_err
        raise RuntimeError("All Gemini TTS models exhausted")

    part = data["candidates"][0]["content"]["parts"][0]["inlineData"]
    raw_bytes = base64.b64decode(part["data"])
    mime = part.get("mimeType", "audio/L16;rate=24000")
    if "mp3" in mime or "mpeg" in mime:
        return raw_bytes

    # Convert PCM (audio/L16;codec=pcm;rate=24000) to MP3 via ffmpeg
    ffmpeg_exe = get_ffmpeg_cmd()
    proc = subprocess.run(
        [
            ffmpeg_exe,
            "-y",
            "-f",
            "s16le",
            "-ar",
            "24000",
            "-ac",
            "1",
            "-i",
            "pipe:0",
            "-codec:a",
            "libmp3lame",
            "-b:a",
            "128k",
            "-f",
            "mp3",
            "pipe:1",
        ],
        input=raw_bytes,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=True,
    )
    return proc.stdout


def synth_google(text: str, api_key: str) -> bytes:
    url = f"https://texttospeech.googleapis.com/v1/text:synthesize?key={api_key}"
    payload = {
        "input": {"text": text},
        "voice": {"languageCode": "th-TH", "name": "th-TH-Standard-A"},
        "audioConfig": {"audioEncoding": "MP3", "speakingRate": 1.0},
    }
    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    return base64.b64decode(data["audioContent"])


def synth_elevenlabs(text: str, api_key: str, voice_id: str) -> bytes:
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"
    payload = {
        "text": text,
        "model_id": "eleven_multilingual_v2",
        "voice_settings": {"stability": 0.5, "similarity_boost": 0.75},
    }
    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "xi-api-key": api_key,
            "Accept": "audio/mpeg",
        },
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read()


def synth_gtts(text: str) -> bytes:
    import io
    from gtts import gTTS
    tts = gTTS(text, lang="th")
    buf = io.BytesIO()
    tts.write_to_fp(buf)
    return buf.getvalue()


def synth_edge_tts(
    text: str,
    voice: str = "th-TH-PremwadeeNeural",
    rate: str = "+5%",
) -> bytes:
    """Generate high-quality natural Thai speech using Microsoft Edge Neural TTS.
    
    Default voices:
      - th-TH-PremwadeeNeural (Female, natural, fluent e-learning voice)
      - th-TH-NiwatNeural (Male, natural, professional corporate voice)
    """
    import asyncio
    try:
        import edge_tts
    except ImportError:
        raise RuntimeError("Please install edge-tts first: pip install edge-tts")

    async def _generate() -> bytes:
        comm = edge_tts.Communicate(text, voice, rate=rate)
        chunks = []
        async for chunk in comm.stream():
            if chunk["type"] == "audio":
                chunks.append(chunk["data"])
        return b"".join(chunks)

    return asyncio.run(_generate())


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate Thai MP3 tracks for Module 1.")
    parser.add_argument(
        "--provider",
        choices=["edge-tts", "gemini", "google", "elevenlabs", "gtts"],
        default="edge-tts",
        help="TTS engine provider (default: edge-tts for natural Neural voice)",
    )
    parser.add_argument(
        "--voice",
        default="",
        help="Voice name (for edge-tts: th-TH-PremwadeeNeural or th-TH-NiwatNeural; for gemini: Achernar)",
    )
    parser.add_argument("--rate", default="+5%", help="Speaking rate for edge-tts (default: +5% for natural pace)")
    parser.add_argument("--model", default="", help="Preferred Gemini TTS model")
    parser.add_argument("--limit", type=int, default=0, help="Optional limit for test runs")
    parser.add_argument("--screen", default="", help="Generate for a specific screenId, e.g. M1L1-S03")
    parser.add_argument("--skip-existing", action="store_true", help="Skip already generated MP3s")
    args = parser.parse_args()

    if not DATA_JSON.exists():
        print("Run scripts/build_module_data.py first.", file=sys.stderr)
        return 1

    data = json.loads(DATA_JSON.read_text(encoding="utf-8"))
    ASSETS_AUDIO.mkdir(parents=True, exist_ok=True)
    PUBLIC_AUDIO.mkdir(parents=True, exist_ok=True)

    # Load .env if present
    for env_path in (ROOT / ".env", ROOT.parent / ".env"):
        if env_path.exists():
            for line in env_path.read_text(encoding="utf-8").splitlines():
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))

    if args.provider == "gemini":
        api_key = os.environ.get("GEMINI_API_KEY", "")
        if not api_key:
            print("Missing GEMINI_API_KEY environment variable.", file=sys.stderr)
            return 1
    elif args.provider == "google":
        api_key = os.environ.get("GOOGLE_TTS_API_KEY", "")
        if not api_key:
            print("Missing GOOGLE_TTS_API_KEY environment variable.", file=sys.stderr)
            return 1
    elif args.provider == "elevenlabs":
        api_key = os.environ.get("ELEVENLABS_API_KEY", "")
        voice_id = os.environ.get("ELEVENLABS_VOICE_ID", "21m00Tcm4TlvDq8ikWAM")
        if not api_key:
            print("Missing ELEVENLABS_API_KEY environment variable.", file=sys.stderr)
            return 1
    else:
        api_key = ""

    if args.screen:
        target = args.screen.strip().upper().replace("AUD-", "").replace(".MP3", "")
        screens = [s for s in data["screens"] if s["screenId"].upper() == target]
        if not screens:
            print(f"Error: Screen '{args.screen}' not found in {DATA_JSON.name}", file=sys.stderr)
            return 1
    elif args.limit > 0:
        screens = data["screens"][: args.limit]
    else:
        screens = data["screens"]
    for idx, s in enumerate(screens):
        sid = s["screenId"]
        text = s.get("voiceover", {}).get("ttsCleanTh", "")
        if not text:
            continue
        fname = f"AUD-{sid}.mp3"
        if args.skip_existing and (PUBLIC_AUDIO / fname).exists():
            print(f"Skipping existing {fname}", flush=True)
            continue
        if args.provider == "gemini":
            voice = args.voice or "Achernar"
            audio_bytes = synth_gemini(text, api_key, voice_name=voice, preferred_model=args.model)
        elif args.provider == "edge-tts":
            voice = args.voice or "th-TH-PremwadeeNeural"
            audio_bytes = synth_edge_tts(text, voice=voice, rate=args.rate)
        elif args.provider == "google":
            audio_bytes = synth_google(text, api_key)
        elif args.provider == "elevenlabs":
            audio_bytes = synth_elevenlabs(text, api_key, voice_id)
        else:
            audio_bytes = synth_gtts(text)

        (ASSETS_AUDIO / fname).write_bytes(audio_bytes)
        (PUBLIC_AUDIO / fname).write_bytes(audio_bytes)
        print(f"[{idx + 1}/{len(screens)}] Generated {fname} ({len(audio_bytes)} bytes)", flush=True)
        if args.provider == "gemini" and idx + 1 < len(screens):
            time.sleep(2.0)

    return 0


if __name__ == "__main__":
    sys.exit(main())
