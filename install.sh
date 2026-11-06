#!/bin/sh
# Install Eve Local, the Mac app that keeps your Eve memories on your computer.
#
#   curl -fsSL https://github.com/alexa-loste/eve-local/releases/latest/download/install.sh | sh
#
# Downloads the latest Eve.dmg from this repository's releases, checks its
# SHA-256 against the published SHA256SUMS, copies Eve.app into Applications
# (replacing an older Eve Local), and opens it. Nothing else on the Mac changes.
set -eu

REPO="alexa-loste/eve-local"
BASE="https://github.com/$REPO/releases/latest/download"

say() { printf '%s\n' "$*"; }
fail() { printf 'Eve Local was not installed: %s\n' "$*" >&2; exit 1; }

[ "$(uname -s)" = "Darwin" ] || fail "it runs on macOS only."
[ "$(uname -m)" = "arm64" ] || fail "it needs an Apple Silicon Mac (M1 or later)."

work=$(mktemp -d /tmp/eve-install.XXXXXX)
mount="$work/mount"
cleanup() {
  if [ -d "$mount" ]; then hdiutil detach "$mount" -quiet >/dev/null 2>&1 || true; fi
  rm -rf "$work"
}
trap cleanup EXIT INT TERM

say "Downloading Eve Local…"
curl -fL --progress-bar -o "$work/Eve.dmg" "$BASE/Eve.dmg" || fail "the download did not finish. Check your connection and run the command again."
curl -fsSL -o "$work/SHA256SUMS" "$BASE/SHA256SUMS" || fail "could not download the checksum file."

expected=$(awk '$2 == "Eve.dmg" || $2 == "*Eve.dmg" {print $1}' "$work/SHA256SUMS")
actual=$(shasum -a 256 "$work/Eve.dmg" | awk '{print $1}')
[ -n "$expected" ] && [ "$expected" = "$actual" ] || fail "the download did not match its published checksum, so it was not opened."

mkdir -p "$mount"
hdiutil attach "$work/Eve.dmg" -nobrowse -readonly -quiet -mountpoint "$mount" || fail "could not open the disk image."
[ -d "$mount/Eve.app" ] || fail "the disk image does not contain Eve.app."

dest="/Applications"
[ -w "$dest" ] || { dest="$HOME/Applications"; mkdir -p "$dest"; }

if pgrep -xq Eve; then
  say "Closing the Eve Local that is open now…"
  osascript -e 'tell application id "com.evecortex.local" to quit' >/dev/null 2>&1 || true
  i=0; while pgrep -xq Eve && [ $i -lt 40 ]; do sleep 0.5; i=$((i + 1)); done
  pgrep -xq Eve && fail "Eve Local is still open. Quit it and run the command again."
fi

say "Installing into $dest…"
ditto "$mount/Eve.app" "$dest/Eve.app.new"
rm -rf "$dest/Eve.app"
mv "$dest/Eve.app.new" "$dest/Eve.app"

say "Done. Opening Eve Local. Your memories stay in ~/Library/Application Support/Eve."
open "$dest/Eve.app"
