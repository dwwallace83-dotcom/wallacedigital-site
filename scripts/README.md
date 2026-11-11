# LinkedIn articles automation

`scripts/refresh-linkedin-feed.js` runs nightly via a Windows Scheduled Task
("WallaceDigital-LinkedIn-Feed-Refresh") and keeps `content/linkedin-feed.json`
(the "Recent thinking" list on wallacedigital.au) current, hands-off.

## To make it find NEW articles automatically

Right now it can't — see the project notes. Set `feedUrl` in
`content/feed-source.json` to an RSS or JSON Feed URL for Damian's LinkedIn
profile activity (rss.app's free "LinkedIn Profile" feed works) and the next
nightly run will start picking up new articles with no further action.

Without that, the job still runs every night, tries a direct fetch of the
public articles page as a fallback, logs the result either way, and —
critically — never blanks or breaks the live section. It just won't find
anything new until `feedUrl` is set.

## Files

- `content/feed-source.json` — committed, not secret. `feedUrl` config.
- `content/linkedin-feed.json` — committed. The actual list rendered on the
  site (newest first, max 6). This is what the script updates.
- `.secrets/telegram.json` — **gitignored, never commit.** `{ botToken, chatId }`
  for the failure-alert. Reuses the existing Flux83 pipeline bot.
- `scripts/.feed-refresh-state.json` — gitignored. Tracks `consecutiveFailures`
  so the alert fires once per failure streak, not every night.
- `linkedin_feed_refresh.log` (repo root) — gitignored. Plain-text run log,
  one line per attempt. Check this first if something seems off.
- `scripts/parse-feed.js` — shared feed-parsing code, used by both this
  script and the generated `functions/api/articles.js` (the live Pages
  Function). Edit here, not in the generated file.

## How to check it's working

- `linkedin_feed_refresh.log` — a line every night, either "no new articles"
  or "Added N new article(s)."
- `git log --oneline --grep="Automated: refresh LinkedIn"` — every real
  update it ever pushed.
- The live site itself, obviously.

## Manual run

```
node scripts/refresh-linkedin-feed.js
```

Safe to run any time — it only writes/commits/pushes if it actually finds a
genuinely new article.
