"""Snapshot evecortex.com's public pages into a static archive folder.

Usage: archive_site.py OUT_DIR
Pages come from the live site's own sitemap list; same-origin assets are copied,
links are made relative, and sign-up / sign-in buttons point at the download page.
"""
import re
import sys
import urllib.request
from datetime import date
from pathlib import Path

BASE = "https://evecortex.com"
OUT = Path(sys.argv[1])
PAGES = {"/": "index.html", "/about.html": "about.html", "/docs.html": "docs.html",
         "/benchmark.html": "benchmark.html", "/patches.html": "patches.html",
         "/data": "data.html", "/privacy": "privacy.html", "/terms": "terms.html"}
FILES = {"/llms.txt": "llms.txt", "/eve-mark.svg": "eve-mark.svg", "/tokens.css": "tokens.css",
         "/patches.js": "patches.js"}
LINKS = {**PAGES, "/privacy.html": "privacy.html", "/data.html": "data.html", "/terms.html": "terms.html",
         "/llms.txt": "llms.txt", "/eve-mark.svg": "eve-mark.svg", "/tokens.css": "tokens.css"}
DOWNLOAD = "../"
STAMP = date.today().strftime("%B %Y")
CHARTS_GONE = {"about.html", "benchmark.html"}


def get(path):
    request = urllib.request.Request(BASE + path, headers={"User-Agent": "eve-archive"})
    with urllib.request.urlopen(request, timeout=60) as response:
        return response.read()


def banner(name):
    extra = (" The interactive benchmark charts were served from a separate site that is no longer online."
             if name in CHARTS_GONE else "")
    return (
        '<div style="position:fixed;left:0;right:0;bottom:0;z-index:2147483647;background:#1e2126;color:#f1efeb;'
        'font:14px/1.5 -apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;padding:10px 16px;'
        'text-align:center">An archived copy of evecortex.com from ' + STAMP + '. Eve now runs on your Mac: '
        '<a href="' + DOWNLOAD + '" style="color:#f1efeb;font-weight:600">download Eve for Mac</a>.'
        + extra + '</div>')


def rewrite(html, name):
    # Same-origin links and assets become relative files in this folder.
    def link(match):
        attr, quote, target = match.group(1), match.group(2), match.group(3)
        path, _, frag = target.partition("#")
        path = path.split("?")[0]
        if path in ("/auth/login", "/signin", "/auth/email"):
            new = DOWNLOAD
        elif path in LINKS:
            new = LINKS[path] if path != "/" else "./"
        elif path.startswith("/patches.js"):
            new = "patches.js"
        else:
            return match.group(0)
        return f'{attr}={quote}{new}{("#" + frag) if frag else ""}{quote}'
    html = re.sub(r'(href|src)=(["\'])(/[^"\']*)\2', link, html)
    html = re.sub(r'(href)=(["\'])https://evecortex\.com(/[^"\']*)\2', link, html)
    # Calls to action now lead to the Mac app.
    for old in ("Join the open beta, free", "Join the beta"):
        html = html.replace(">" + old, ">Download Eve for Mac")
    html = re.sub(r'(<a[^>]*href="\.\./"[^>]*>)Sign in', r'\1Download', html)
    # A bar fixed to the bottom: pages with fixed headers keep them; a spacer
    # keeps the page's own last lines from sitting under the bar.
    html = html.replace("</body>", '<div style="height:64px"></div>' + banner(name) + "</body>", 1)
    return html


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for path, name in FILES.items():
        (OUT / name).write_bytes(get(path))
    for path, name in PAGES.items():
        html = get(path).decode("utf-8")
        (OUT / name).write_text(rewrite(html, name), encoding="utf-8")
        leftover = sorted(set(re.findall(r'(?:href|src)=["\'](/[^"\']*)', (OUT / name).read_text())))
        print(f"{name:16} {len(html):7} bytes; unrewritten same-origin refs: {leftover}")


if __name__ == "__main__":
    main()
