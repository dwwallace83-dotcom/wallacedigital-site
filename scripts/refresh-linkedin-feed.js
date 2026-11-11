// Nightly job: keep content/linkedin-feed.json current with Damian's latest
// LinkedIn articles, fully hands-off. Run by a Windows Scheduled Task (see
// scripts/README.md) via:
//   node scripts/refresh-linkedin-feed.js
//
// Behaviour (per brief):
//   - Try, in order: (1) a feed-generator service URL from content/feed-source.json,
//     (2) a lightweight fetch of the public LinkedIn articles page.
//   - If either yields new articles: merge newest-first, keep 6, rebuild the
//     site, commit, push. No human action needed.
//   - If both fail: change nothing, log it, keep the last good list live.
//     After 3 failed nights in a row, send exactly one Telegram alert.
//   - Never leaves the section blank or broken — content/linkedin-feed.json
//     is only ever overwritten with a verified non-empty result.

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { parseFeed, extractArticleLinksFromHtml } = require("./parse-feed.js");

const ROOT = path.join(__dirname, "..");
const FEED_JSON_PATH = path.join(ROOT, "content", "linkedin-feed.json");
const FEED_SOURCE_PATH = path.join(ROOT, "content", "feed-source.json");
const STATE_PATH = path.join(__dirname, ".feed-refresh-state.json");
const LOG_PATH = path.join(ROOT, "linkedin_feed_refresh.log");
const SECRETS_PATH = path.join(ROOT, ".secrets", "telegram.json");
const ARTICLES_PAGE_URL = "https://www.linkedin.com/in/damian-wallace-0b41766a/recent-activity/articles/";
const MAX_ARTICLES = 6;
const ALERT_AFTER_FAILURES = 3;

function log(line) {
  const stamp = new Date().toISOString();
  fs.appendFileSync(LOG_PATH, `${stamp}  ${line}\n`, "utf8");
  console.log(line);
}

function readJson(p, fallback) {
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return fallback;
  }
}

function writeJson(p, obj) {
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + "\n", "utf8");
}

async function sendTelegramAlert(message) {
  const secrets = readJson(SECRETS_PATH, null);
  if (!secrets || !secrets.botToken || !secrets.chatId) {
    log(`ALERT SKIPPED (no .secrets/telegram.json configured): ${message}`);
    return;
  }
  try {
    const res = await fetch(`https://api.telegram.org/bot${secrets.botToken}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ chat_id: secrets.chatId, text: message }),
    });
    if (!res.ok) log(`Telegram alert send failed: HTTP ${res.status}`);
    else log("Telegram alert sent.");
  } catch (err) {
    log(`Telegram alert send threw: ${err.message}`);
  }
}

// Method 1: a feed-generator service (rss.app etc.) configured in content/feed-source.json.
async function tryFeedService() {
  const source = readJson(FEED_SOURCE_PATH, { feedUrl: "" });
  const feedUrl = (source.feedUrl || "").trim();
  if (!feedUrl) {
    log("Method 1 (feed service): no feedUrl configured in content/feed-source.json — skipped.");
    return [];
  }
  try {
    const res = await fetch(feedUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; WallaceDigitalBot/1.0)" },
    });
    if (!res.ok) {
      log(`Method 1 (feed service): HTTP ${res.status} fetching ${feedUrl}`);
      return [];
    }
    const raw = await res.text();
    const parsed = parseFeed(raw);
    log(`Method 1 (feed service): parsed ${parsed.length} article(s) from configured feed.`);
    return parsed;
  } catch (err) {
    log(`Method 1 (feed service): fetch threw — ${err.message}`);
    return [];
  }
}

// Method 2: best-effort lightweight fetch of the public articles page.
// LinkedIn's activity feed is a JS-rendered SPA behind bot defenses; a plain
// server-side fetch is expected to fail or return nothing useful most of the
// time. That is treated as a normal "no new articles found" outcome here,
// not an error — Method 1 (a real feed service) is the actually-reliable path.
async function tryPublicPageFetch() {
  try {
    const res = await fetch(ARTICLES_PAGE_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml",
      },
    });
    if (!res.ok) {
      log(`Method 2 (public page fetch): HTTP ${res.status} — likely blocked, as expected.`);
      return [];
    }
    const html = await res.text();
    const links = extractArticleLinksFromHtml(html);
    if (!links.length) {
      log("Method 2 (public page fetch): page fetched but no /pulse/ links found (likely JS-rendered, not in raw HTML).");
      return [];
    }
    // We only get bare URLs from HTML scraping (no reliable title/date markup
    // to scrape safely) — these get titles/dates filled in manually later if
    // ever used; for now, surface them as url-only candidates.
    log(`Method 2 (public page fetch): found ${links.length} candidate link(s).`);
    return links.map(url => ({ title: "", url, date: "", excerpt: "" }));
  } catch (err) {
    log(`Method 2 (public page fetch): threw — ${err.message} (likely blocked, as expected).`);
    return [];
  }
}

function mergeArticles(current, fresh) {
  const seen = new Set(current.map(a => a.url));
  const newOnes = fresh.filter(a => a.url && a.title && !seen.has(a.url));
  if (!newOnes.length) return { merged: current, addedCount: 0 };
  const merged = [...newOnes, ...current].slice(0, MAX_ARTICLES);
  return { merged, addedCount: newOnes.length };
}

function run(cmd, args) {
  return execFileSync(cmd, args, { cwd: ROOT, encoding: "utf8" });
}

async function main() {
  const state = readJson(STATE_PATH, { consecutiveFailures: 0, lastRun: null, lastSuccess: null });
  state.lastRun = new Date().toISOString();

  const current = readJson(FEED_JSON_PATH, []);

  let fresh = await tryFeedService();
  if (!fresh.length) fresh = await tryPublicPageFetch();

  if (!fresh.length) {
    state.consecutiveFailures += 1;
    writeJson(STATE_PATH, state);
    log(`No usable articles from either method. consecutiveFailures=${state.consecutiveFailures}. Leaving content/linkedin-feed.json untouched.`);
    if (state.consecutiveFailures === ALERT_AFTER_FAILURES) {
      await sendTelegramAlert(
        `⚠️ Wallace Digital: LinkedIn article feed refresh has failed ${ALERT_AFTER_FAILURES} nights in a row. ` +
        `Current "Recent thinking" list is untouched and still live — nothing broken on the site — but new articles ` +
        `won't appear until this is fixed. Check linkedin_feed_refresh.log on the build PC.`
      );
    }
    return;
  }

  // A successful check — even if it found nothing NEW — resets the failure streak.
  state.consecutiveFailures = 0;
  state.lastSuccess = new Date().toISOString();

  const { merged, addedCount } = mergeArticles(current, fresh);
  if (!addedCount) {
    writeJson(STATE_PATH, state);
    log("Checked successfully — no new articles beyond the current list. No rebuild needed.");
    return;
  }

  writeJson(FEED_JSON_PATH, merged);
  log(`Added ${addedCount} new article(s). Rebuilding site...`);

  run("node", ["build_site.js"]);
  fs.copyFileSync(path.join(ROOT, "wallacedigital.html"), path.join(ROOT, "index.html"));

  run("git", ["add", "content/linkedin-feed.json", "functions/api/articles.js", "wallacedigital.html", "index.html"]);
  const status = run("git", ["status", "--porcelain"]);
  if (!status.trim()) {
    log("Rebuild produced no diff (unexpected) — nothing to commit.");
    writeJson(STATE_PATH, state);
    return;
  }

  run("git", ["commit", "-m", `Automated: refresh LinkedIn articles feed (+${addedCount} new)`]);
  run("git", ["push", "origin", "main"]);
  log(`Committed and pushed ${addedCount} new article(s).`);

  writeJson(STATE_PATH, state);
}

main().catch(async (err) => {
  log(`UNCAUGHT ERROR: ${err.stack || err.message}`);
  await sendTelegramAlert(`⚠️ Wallace Digital: LinkedIn feed refresh job crashed — ${err.message}. Check linkedin_feed_refresh.log.`);
});
