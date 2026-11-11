// SHARED feed-parsing core — single source of truth.
//
// Used by TWO consumers that can't share a normal require/import:
//   1. functions/api/articles.js (Cloudflare Pages Function, ES module) —
//      build_site.js reads this file's raw text and splices it in verbatim.
//   2. scripts/refresh-linkedin-feed.js (Node nightly job) — requires this
//      file directly like any other module.
// Keep this file free of top-level import/export syntax so it works
// spliced into an ESM context as plain function declarations; the
// module.exports guard at the bottom only fires under Node (CommonJS),
// where `module` exists — in the Workers ESM context `typeof module` is
// just "undefined" and the block is skipped harmlessly.
//
// Edit this ONE file to change parsing behaviour in both places, then
// re-run `node build_site.js` to regenerate functions/api/articles.js.

// Accepts RSS 2.0 XML or a JSON Feed / generic JSON array — covers rss.app,
// FetchRSS, and most "LinkedIn profile to feed" bridge services.
function parseFeed(raw) {
  const trimmed = raw.trim();
  let list = [];

  if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
    try {
      const data = JSON.parse(trimmed);
      const arr = Array.isArray(data) ? data : (data.items || data.articles || []);
      list = arr.map(it => ({
        title: it.title || it.name || "",
        url: it.url || it.link || it.permalink || "",
        rawDate: it.date_published || it.pubDate || it.date || it.published || "",
        excerpt: "",
      }));
    } catch {
      list = [];
    }
  } else {
    const blocks = [...trimmed.matchAll(/<item\b[\s\S]*?<\/item>/gi)].map(m => m[0]);
    list = blocks.map(block => ({
      title: decodeEntities(textOf(block, "title")),
      url: (textOf(block, "link") || hrefOf(block, "link")).trim(),
      rawDate: textOf(block, "pubDate") || textOf(block, "dc:date") || textOf(block, "published"),
      excerpt: "",
    }));
  }

  return list
    .filter(a => a.title && a.url)
    .map(a => ({
      title: a.title,
      url: a.url,
      date: formatDate(a.rawDate),
      excerpt: "",
      _sort: Date.parse(a.rawDate) || 0,
    }))
    .sort((a, b) => b._sort - a._sort)
    .map(({ _sort, ...rest }) => rest);
}

function textOf(block, tag) {
  const m = block.match(new RegExp("<" + tag + "[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/" + tag + ">", "i"));
  return m ? m[1].trim() : "";
}
function hrefOf(block, tag) {
  const m = block.match(new RegExp("<" + tag + "[^>]*href=[\"']([^\"']+)[\"']", "i"));
  return m ? m[1] : "";
}
function decodeEntities(str) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
function formatDate(raw) {
  if (!raw) return "";
  const d = new Date(raw);
  if (isNaN(d.getTime())) return raw;
  return d.toLocaleDateString("en-AU", { year: "numeric", month: "short" });
}

// Best-effort extraction of article links from LinkedIn's public
// recent-activity/articles HTML, for the no-feed-configured fallback path.
// LinkedIn's activity feed is a JS-rendered SPA behind bot defenses, so this
// is unlikely to find anything from a plain server-side fetch — it's here
// because the brief asked for it to be attempted, not because it's proven
// to work. A failed/empty result here is expected and handled as a normal
// "nothing new found" outcome, not an error.
function extractArticleLinksFromHtml(html) {
  const seen = new Set();
  const out = [];
  const linkRe = /https:\/\/www\.linkedin\.com\/pulse\/[a-z0-9-]+\/?/gi;
  let m;
  while ((m = linkRe.exec(html))) {
    const url = m[0];
    if (!seen.has(url)) {
      seen.add(url);
      out.push(url);
    }
  }
  return out;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { parseFeed, textOf, hrefOf, decodeEntities, formatDate, extractArticleLinksFromHtml };
}
