# Eve Local

**Download page: https://alexa-loste.github.io/eve-local/**

Eve is a long-term memory for the AI assistants you already use. Eve Local is the Mac app: your memories live on your computer, in `~/Library/Application Support/Eve`, with no account and no server.

## Install

Any Mac with macOS 12 (Monterey) or newer, Apple chip or Intel. Paste this into Terminal:

```sh
curl -fsSL https://github.com/alexa-loste/eve-local/releases/latest/download/install.sh | sh
```

The script:
1. Downloads the latest `Eve.dmg` (Apple chip) or `Eve-intel.dmg` (Intel) from [Releases](https://github.com/alexa-loste/eve-local/releases), whichever fits your Mac.
2. Checks it against the published `SHA256SUMS`.
3. Copies Eve into Applications, replacing an older version.
4. Opens it.

Or download `Eve.dmg` (Apple chip) or `Eve-intel.dmg` (Intel) from Releases yourself. The app is not notarized, so the first time you open it, macOS asks you to approve it: **System Settings → Privacy & Security → Open Anyway**.

## First launch

Click **Set up everything**. Eve will:
- Connect Claude Desktop and Claude Code, if you have them.
- Bring over your memories from hosted Eve. It looks for an `Eve-memories.evebundle` you downloaded from [evecortex.com/desktop](https://evecortex.com/desktop); if there isn't one, it opens your browser to fetch them.

## How Eve saves memories

- **Your connected assistant files them itself.** Eve calls no model and costs you nothing extra.
- **Memories you type into the app,** and consolidation, use a model. Choose one in **Settings → Model access**: the included key while its credit lasts, your own Fireworks or DeepSeek key, or your Claude or ChatGPT subscription.
- **With no model available,** Eve still saves the words as they are.
