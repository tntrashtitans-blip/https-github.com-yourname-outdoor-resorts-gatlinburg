#!/usr/bin/env python3
"""Refresh public calendar cache files from listing iCal feeds.

The site tries live iCal feeds first, then falls back to files in calendars/.
This script keeps those fallback files current while stripping private booking
details from Airbnb, Hipcamp, and VRBO feeds before anything is committed.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from urllib.error import URLError
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
LISTINGS_FILE = ROOT / "listings.js"
CALENDAR_HEADER = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//OutdoorResortsGatlinburg.com//Availability Cache//EN",
    "CALSCALE:GREGORIAN",
]


def unfold_ical(text: str) -> list[str]:
    lines = text.replace("\r\n", "\n").replace("\r", "\n").split("\n")
    unfolded: list[str] = []
    for line in lines:
        if line.startswith((" ", "\t")) and unfolded:
            unfolded[-1] += line[1:]
        else:
            unfolded.append(line)
    return unfolded


def extract_listing_blocks(text: str) -> list[str]:
    blocks = re.findall(r"\{\s*title:\s*\".*?\"\s*,.*?\n\s*\}", text, re.S)
    return [block for block in blocks if "calendarUrl" in block and "calendarCacheUrl" in block]


def js_string(block: str, key: str) -> str:
    match = re.search(rf'{key}:\s*"([^"]*)"', block)
    return match.group(1) if match else ""


def connected_calendars() -> list[tuple[str, str, Path]]:
    calendars: list[tuple[str, str, Path]] = []
    for block in extract_listing_blocks(LISTINGS_FILE.read_text()):
        title = js_string(block, "title")
        calendar_url = js_string(block, "calendarUrl")
        cache_url = js_string(block, "calendarCacheUrl")
        if calendar_url.startswith("http") and cache_url.startswith("calendars/"):
            calendars.append((title, calendar_url, ROOT / cache_url))
    return calendars


def fetch_text(url: str) -> str:
    request = Request(url, headers={"User-Agent": "ORG calendar cache refresh"})
    with urlopen(request, timeout=30) as response:
        return response.read().decode("utf-8", errors="replace")


def parse_events(text: str, fallback_prefix: str) -> list[dict[str, str]]:
    events: list[dict[str, str]] = []
    current: dict[str, str] | None = None
    for line in unfold_ical(text):
        if line == "BEGIN:VEVENT":
            current = {}
            continue
        if line == "END:VEVENT":
            if current and current.get("DTSTART") and current.get("DTEND"):
                if not current.get("UID"):
                    current["UID"] = f"{fallback_prefix}-{len(events) + 1}@outdoorresortsgatlinburg.com"
                events.append(current)
            current = None
            continue
        if current is None or ":" not in line:
            continue

        key, value = line.split(":", 1)
        prop = key.split(";", 1)[0]
        if prop in {"UID", "DTSTART", "DTEND"}:
            current[prop] = value.strip()
    return events


def sanitize_calendar(events: list[dict[str, str]]) -> str:
    lines = [*CALENDAR_HEADER]
    for event in events:
        lines.extend(
            [
                "BEGIN:VEVENT",
                f"UID:{event['UID']}",
                f"DTSTART;VALUE=DATE:{event['DTSTART']}",
                f"DTEND;VALUE=DATE:{event['DTEND']}",
                "SUMMARY:Reserved",
                "END:VEVENT",
            ]
        )
    lines.append("END:VCALENDAR")
    return "\n".join(lines) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="fail if any cache would change")
    args = parser.parse_args()

    changed: list[str] = []
    failed: list[str] = []
    for title, calendar_url, cache_path in connected_calendars():
        try:
            live_text = fetch_text(calendar_url)
            if "BEGIN:VCALENDAR" not in live_text or "END:VCALENDAR" not in live_text:
                raise ValueError("feed did not return a valid VCALENDAR")
            events = parse_events(live_text, cache_path.stem)
            sanitized = sanitize_calendar(events)
        except (URLError, TimeoutError, ValueError) as exc:
            failed.append(f"{title}: {exc}")
            continue

        current = cache_path.read_text() if cache_path.exists() else ""
        if current != sanitized:
            changed.append(str(cache_path.relative_to(ROOT)))
            if not args.check:
                cache_path.write_text(sanitized)

    for path in changed:
        print(f"changed: {path}")
    for item in failed:
        print(f"failed: {item}", file=sys.stderr)

    if failed:
        return 1
    if args.check and changed:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
