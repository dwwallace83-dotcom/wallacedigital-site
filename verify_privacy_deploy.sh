#!/usr/bin/env bash
# Post-deploy privacy-policy smoke test (task 1000084).
# Confirms the live /privacy page is up AND matches the locally-built,
# approved privacy.html exactly — catches a bad deploy (stale/broken page)
# as well as any drift that slipped past the build-time guard.
set -euo pipefail
BASE="${1:-https://wallacedigital.au}"
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "=== Privacy policy deploy verification ==="
echo "Target: $BASE/privacy"
echo ""

STATUS=$(curl -s -o /tmp/privacy_live.html -w "%{http_code}" -L "$BASE/privacy")
echo "--- HTTP status ---"
echo "$STATUS"
if [[ "$STATUS" != "200" ]]; then
  echo "FAIL: expected HTTP 200, got $STATUS"
  exit 1
fi

# Cloudflare's edge "Email Address Obfuscation" feature rewrites plain
# email text into a JS-decoded <a data-cfemail=...> span on every response —
# a CDN transform, not build drift. Strip anything email-shaped from both
# sides before hashing so the guard compares policy wording, not that.
normalize() {
  sed -E '
    s@<a[^>]*class="__cf_email__"[^>]*>\[email&#160;protected\]</a>@@g;
    s@<script data-cfasync="false" src="/cdn-cgi/scripts/[^"]*"></script>@@g;
    s@[A-Za-z0-9._%+-]+\@[A-Za-z0-9.-]+\.[A-Za-z]{2,}@@g;
    s@data-cfemail="[0-9a-f]+"@@g;
    s@/cdn-cgi/l/email-protection@@g
  ' "$1" | sha256sum | awk '{print $1}'
}

LOCAL_HASH=$(normalize "$DIR/privacy.html")
LIVE_HASH=$(normalize /tmp/privacy_live.html)
echo ""
echo "--- content hash (emails normalized out — Cloudflare obfuscates them at the edge) ---"
echo "local (approved): $LOCAL_HASH"
echo "live:              $LIVE_HASH"

if [[ "$LOCAL_HASH" != "$LIVE_HASH" ]]; then
  echo "FAIL: live /privacy content does not match the local approved privacy.html — deploy is stale or content drifted"
  exit 1
fi

echo ""
echo "OK: live /privacy is 200 and matches the approved local build exactly"
