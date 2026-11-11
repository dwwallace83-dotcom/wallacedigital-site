// ============================================================
//  WALLACE DIGITAL — SITE BUILDER
//  Edit everything in CONFIG below, then run:
//    node build_site.js
//  Output: wallacedigital.html  (drop this on Cloudflare Pages)
// ============================================================

const CONFIG = {

  // ── SITE META (for Google indexing) ──────────────────────
  baseUrl:      "https://wallacedigital.au",
  metaTitle:    "Wallace Digital — Damian Wallace | Project Delivery & Operations Improvement",
  metaDesc:     "I find where time and money are being lost, and lead the fix. Project delivery and operations improvement for mining and heavy industry — Perth-based.",

  // ── PERSONAL ────────────────────────────────────────────
  name:         "Damian Wallace",
  headlineMain:      "I find where time and money are being lost —",
  headlineHighlight: "and lead the fix.",
  tagline:      "Project delivery and operations improvement for mining and heavy industry, from someone who started on the tools and now runs multi-million-dollar projects.",
  strapline:    "Solve the right problem. Spend money where it counts. Bring the team with you.",
  location:     "Perth, Western Australia",
  // NOTE (Nov 2026 refresh): brief asked for hello@wallacedigital.au everywhere.
  // Task 1000144 (7 Sep 2026) had switched this to damian@wallacedigital.au after
  // confirming damian@ has live Cloudflare Email Routing and hello@ did not have
  // a routing rule at that time. Flagged for Damian to confirm hello@ is now
  // routed before relying on this — see session summary.
  email:        "hello@wallacedigital.au",
  linkedin:     "https://www.linkedin.com/in/damian-wallace-0b41766a/",
  abn:          "ABN active",

  // ── HOW I WORK ───────────────────────────────────────────
  howIWork:     "Every job starts with the problem statement, not the solution. I map the problem, source the options, work with the team to pick the right one, then keep asking: is this still the problem we're solving? That loop is where projects stay on track and savings are found.",

  // ── HERO STATS ───────────────────────────────────────────
  stats: [
    { number: "15+",    label: "Years in planning and project management" },
    { number: "$2.6M+", label: "Excavator relocation" },
    { number: "MBA",    label: "Distinction average" },
  ],

  // ── ABOUT TEXT ───────────────────────────────────────────
  // Each string = one paragraph
  about: [
    "I'm a systems thinker with 15 years in mining operations. I started as a heavy duty diesel mechanic, led crews as a leading hand, and moved into maintenance planning and operational improvement.",
    "As Central Planner at Macmahon, I replaced chaotic flagged-email workflows with a structured digital ticketing system, with online forms, automated workflows and approvals now used across the department and remote sites. I'm also leading a $2.6M+ excavator relocation across six-plus suppliers.",
    "I've just completed my MBA with a Distinction average, so the commercial side gets the same attention as the technical side.",
  ],
  // ── YOUR PHOTO ───────────────────────────────────────────
  // Local file path OR a URL (Immich share link, Cloudflare image, etc.)
  // Leave empty "" to show the placeholder honeycomb graphic
  photo: "./images/DamianPro2026.jpeg",
  // Example — local file:  photo: "./images/damian.jpg"
  // Example — Immich share: photo: "http://192.168.4.140:2283/api/asset/YOUR-ASSET-ID/original"
  // Example — Cloudflare:  photo: "https://imagedelivery.net/YOUR-ACCOUNT/photo/public"

  // ── QUALIFICATIONS ───────────────────────────────────────
  qualifications: [
    {
      title: "MBA (Distinction average)",
      org:   "",
    },
    {
      title: "Certificate IV in Project Management Practice",
      org:   "TAFE / BSB — Verified on LinkedIn",
    },
    {
      title: "Planning and Scheduling (Advanced)",
      org:   "Macmahon Holdings — Mining & Infrastructure",
    },
    {
      title: "Trade Certificate, Mechanical (Plant Mechanic)",
      org:   "",
    },
    // Add more like: { title: "Your Cert", org: "Issuer" },
  ],

  // ── SERVICES ("How I can help") ──────────────────────────
  services: [
    {
      icon:  "📐",
      title: "Project delivery",
      desc:  "Scoping, programme development, supplier coordination and cost tracking from kick-off to handover. Primavera P6 / MS Project.",
      items: [
        "Scoping & programme development",
        "Supplier coordination",
        "Cost tracking",
        "Primavera P6 / MS Project",
      ],
    },
    {
      icon:  "🔍",
      title: "Finding the bottlenecks",
      desc:  "Pinpointing where established processes lose the most time and money, then fixing them.",
      items: [
        "Process mapping",
        "Root-cause analysis",
        "Time & cost loss diagnosis",
        "Practical fixes, not just reports",
      ],
    },
    {
      icon:  "🛠️",
      title: "Maintenance and asset strategy",
      desc:  "Shutdowns, service strategies and warranty recovery that keep fleets running and budgets intact.",
      items: [
        "Shutdown planning",
        "Service strategy",
        "Warranty recovery",
        "Fleet uptime",
      ],
    },
    {
      icon:  "📦",
      title: "Procurement and sourcing",
      desc:  "OEM versus aftermarket calls and supplier management. Sourced one critical component for about $12.5k against a $33k OEM quote.",
      items: [
        "OEM vs aftermarket evaluation",
        "Supplier management",
        "Cost-down sourcing",
        "Component-level cost analysis",
      ],
    },
    {
      icon:  "⚙️",
      title: "Process automation",
      desc:  "Forms, approval flows and reporting with Power Automate, SharePoint and AI tools.",
      items: [
        "Power Automate flows",
        "SharePoint + Teams integration",
        "Approval workflows",
        "AI-assisted reporting",
      ],
    },
    {
      icon:  "🎯",
      title: "Expert advisory",
      desc:  "Paid calls and short engagements for investors, consultancies and operators.",
      items: [
        "Investor due-diligence calls",
        "Short consulting engagements",
        "Operator advisory",
        "Mining & heavy industry expertise",
      ],
    },
  ],

  // ── SIDE PROJECTS ─────────────────────────────────────────
  sideProjects: {
    text: "ChargeSafe, an EV trip planner for WA, built in my own time.",
    link: "https://chargesafe.au",
    linkLabel: "chargesafe.au →",
  },

  // ── WORK / GALLERY ───────────────────────────────────────
  // IMAGES: copy your photos from C:\Users\Damian\Downloads\damo photos
  // into an "images" subfolder next to this script, rename as shown below.
  // Or swap the path to any URL (Immich share link etc).
  work: [
    {
      image:    "./images/bee-activities-1.jpg",
      // SOURCE: Bee activities (1).jpg  — your wide hero shot
      wide:     true,
      category: "Apiculture",
      title:    "Perth metro hive management",
      sub:      "Colony health, honey harvests, seasonal splits",
      icon:     "🐝",
    },
    {
      image:    "./images/renovating-1.jpg",
      // SOURCE: Renovating (1).jpg
      wide:     false,
      category: "Renovation",
      title:    "Residential project",
      sub:      "Full scope from planning to handover",
      icon:     "🔨",
    },
    {
      image:    "./images/ChargeSafe-2.png",
      wide:     false,
      category: "App development",
      title:    "ChargeSafe — map view",
      sub:      "React Native, live charger data, Perth metro",
      icon:     "📱",
    },
    {
      image:    "./images/aimwa-1.jpg",
      // SOURCE: AIMWA Higher Education by Csmith Pho... (1).jpg
      wide:     false,
      category: "Planning & Industry",
      title:    "AIMWA — Industry engagement",
      sub:      "Planning, infrastructure, professional development",
      icon:     "🏗️",
    },
    {
      image:    "./images/renovating-3.jpg",
      // SOURCE: Renovating (3).jpg
      wide:     false,
      category: "Renovation",
      title:    "On-site delivery",
      sub:      "Detail work, hands-on",
      icon:     "🔨",
    },
  ],

  // ── ARTICLES ────────────────────────────────────────────
  // Titles derived from your LinkedIn pulse URLs.
  // Excerpts written by Claude — update any you want to change.
  articles: [
    {
      date:    "2026",
      title:   "What Paris-Roubaix, Team Size, and Toxic Charity Have in Common",
      excerpt: "Three things that look unrelated on the surface — a bike race, headcount decisions, and charitable giving — all share the same structural flaw. A look at how good intentions without the right system produce bad outcomes.",
      url:     "https://www.linkedin.com/pulse/what-parisroubaix-team-size-toxic-charity-have-common-damian-wallace-lvrqc/",
    },
    {
      date:    "2026",
      title:   "How a Chicken Tariff Gave America Massive Pickup Trucks",
      excerpt: "The unexpected origin story of the American ute — a 1960s trade dispute that reshaped an entire vehicle category for decades. A lesson in how policy creates permanent market structures nobody planned for.",
      url:     "https://www.linkedin.com/pulse/how-chicken-tariff-gave-america-massive-pickup-trucks-damian-wallace-p6okc/",
    },
    {
      date:    "2026",
      title:   "When Mastery Removes the Need to Prove Anything — Restraint Starts Here",
      excerpt: "The most capable people in the room are often the quietest. On the relationship between genuine expertise, ego, and why restraint is a signal of competence rather than a lack of it.",
      url:     "https://www.linkedin.com/pulse/when-mastery-removes-need-prove-anything-restraint-starts-wallace-pikdc/",
    },
    {
      date:    "2025",
      title:   "Same Name, Different Lives — What Curiosity Reveals About Value",
      excerpt: "What happens when you look up everyone who shares your name? An exploration of how curiosity about others sharpens your understanding of your own path and what you actually bring to the table.",
      url:     "https://www.linkedin.com/pulse/same-name-different-lives-what-curiosity-reveals-value-damian-wallace-ttbyc/",
    },
    {
      date:    "2025",
      title:   "Failure Isn't the Opposite of Progress — It's the Steering Wheel",
      excerpt: "Reframing failure not as a setback but as the feedback mechanism that keeps you on course. The projects and decisions that taught the most were rarely the ones that went smoothly.",
      url:     "https://www.linkedin.com/pulse/failure-isnt-opposite-progress-its-steering-wheel-damian-wallace-cma1c/",
    },
    {
      date:    "2025",
      title:   "Reading the System Through the Wrapper",
      excerpt: "How to understand what's really going on in any organisation, project, or product — by paying attention to the surface behaviours that reveal the underlying structure.",
      url:     "https://www.linkedin.com/pulse/reading-system-through-wrapper-damian-wallace-ifodc/",
    },
  ],

};

// ============================================================
//  BUILDER — no need to edit below this line
// ============================================================

const fs = require("fs");
const path = require("path");

// Content that changes on its own cadence lives in content/*.json, not in
// this CONFIG block, so the content-approval pipeline (task 1000144) can
// publish to it without touching code. CONFIG.articles above stays as the
// seed/fallback if the file is ever missing.
const linkedinFeedPath = path.join(__dirname, "content", "linkedin-feed.json");
if (fs.existsSync(linkedinFeedPath)) {
  CONFIG.articles = JSON.parse(fs.readFileSync(linkedinFeedPath, "utf8"));
}
const changelogPath = path.join(__dirname, "content", "changelog.json");
const CHANGELOG = fs.existsSync(changelogPath)
  ? JSON.parse(fs.readFileSync(changelogPath, "utf8"))
  : [];

function esc(str) {
  return (str || "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function photoBlock(photo) {
  if (photo) {
    return `<img src="${esc(photo)}" alt="${esc(CONFIG.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-lg);">`;
  }
  return `
    <div class="photo-placeholder">
      <svg class="hive-svg" width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="30,10 50,10 60,27 50,44 30,44 20,27" fill="none" stroke="#4cff6e" stroke-width="1"/>
        <polygon points="60,10 80,10 90,27 80,44 60,44 50,27" fill="none" stroke="#4cff6e" stroke-width="1"/>
        <polygon points="90,10 110,10 120,27 110,44 90,44 80,27" fill="none" stroke="#4cff6e" stroke-width="1"/>
        <polygon points="15,44 35,44 45,61 35,78 15,78 5,61" fill="none" stroke="#4cff6e" stroke-width="1"/>
        <polygon points="45,44 65,44 75,61 65,78 45,78 35,61" fill="none" stroke="#4cff6e" stroke-width="1"/>
        <polygon points="75,44 95,44 105,61 95,78 75,78 65,61" fill="none" stroke="#4cff6e" stroke-width="1"/>
      </svg>
      <p class="photo-note">// add photo path to CONFIG.photo</p>
    </div>`;
}

function workThumb(item) {
  if (item.image) {
    return `<img src="${esc(item.image)}" alt="${esc(item.title)}" style="width:100%;height:100%;object-fit:cover;">`;
  }
  return `
    <div class="thumb-placeholder">
      <span class="thumb-icon">${item.icon || "📷"}</span>
      <p class="thumb-note">// set image path in CONFIG.work</p>
    </div>`;
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(CONFIG.metaTitle)}</title>
<meta name="description" content="${esc(CONFIG.metaDesc)}">
<link rel="canonical" href="${esc(CONFIG.baseUrl)}/">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --bg:#0a0d0a;--bg-card:#111611;--bg-card-hover:#151e15;
    --border:#1e2b1e;--border-accent:#2d4a2d;
    --green:#4cff6e;--green-dim:#2a8c3f;--green-glow:rgba(76,255,110,0.08);
    --text:#e8ede8;--text-muted:#7a907a;--text-dim:#4a5e4a;
    --mono:'JetBrains Mono',monospace;--sans:'Inter',sans-serif;
    --radius:6px;--radius-lg:12px;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{font-family:var(--sans);background:var(--bg);color:var(--text);font-size:16px;line-height:1.6;overflow-x:hidden}
  nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:0 5vw;height:60px;background:rgba(10,13,10,0.92);border-bottom:1px solid var(--border);backdrop-filter:blur(12px)}
  .nav-logo{font-family:var(--mono);font-size:14px;font-weight:500;color:var(--green);letter-spacing:.05em;text-decoration:none}
  .nav-links{display:flex;gap:32px;list-style:none}
  .nav-links a{font-size:13px;color:var(--text-muted);text-decoration:none;transition:color .2s;letter-spacing:.02em}
  .nav-links a:hover{color:var(--text)}
  section{padding:100px 5vw;max-width:1100px;margin:0 auto}
  section:first-of-type{padding-top:160px}
  .section-label{font-family:var(--mono);font-size:11px;color:var(--green);letter-spacing:.12em;text-transform:uppercase;margin-bottom:20px;display:flex;align-items:center;gap:10px}
  .section-label::after{content:'';display:block;height:1px;width:40px;background:var(--green-dim)}
  h1{font-size:clamp(40px,6vw,72px);font-weight:300;line-height:1.1;letter-spacing:-.03em;color:var(--text)}
  h1 em{font-style:normal;color:var(--green)}
  h2{font-size:clamp(28px,3.5vw,42px);font-weight:300;letter-spacing:-.02em;line-height:1.2;margin-bottom:40px;color:var(--text)}
  h3{font-size:17px;font-weight:500;margin-bottom:10px;color:var(--text)}
  p{color:var(--text-muted);line-height:1.75;max-width:600px}
  #hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding-top:80px;position:relative}
  .hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
  .hero-tagline{font-size:15px;color:var(--text-muted);margin-top:28px;max-width:460px;line-height:1.75}
  .hero-strap{font-family:var(--mono);font-size:13px;color:var(--green-dim);margin-top:18px;letter-spacing:.02em;max-width:460px}
  .hero-ctas{display:flex;gap:16px;margin-top:40px;flex-wrap:wrap}
  #how-i-work{max-width:800px}
  #how-i-work p{font-size:17px;max-width:100%;color:var(--text-muted)}
  .btn{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border-radius:var(--radius);font-size:14px;font-weight:500;text-decoration:none;transition:all .2s;cursor:pointer;border:none}
  .btn-primary{background:var(--green);color:#0a0d0a}
  .btn-primary:hover{background:#5dff7f}
  .btn-ghost{background:transparent;color:var(--text-muted);border:1px solid var(--border-accent)}
  .btn-ghost:hover{color:var(--text);border-color:var(--green-dim)}
  .hero-stats{display:grid;grid-template-rows:1fr 1fr;gap:20px}
  .stat-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px;position:relative;overflow:hidden}
  .stat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--green-dim),transparent);opacity:.6}
  .stat-number{font-family:var(--mono);font-size:42px;font-weight:400;color:var(--green);line-height:1}
  .stat-label{font-size:13px;color:var(--text-muted);margin-top:6px}
  .stat-pair{display:grid;grid-template-columns:1fr 1fr;gap:20px}
  .stat-card.small .stat-number{font-size:28px}
  .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start}
  .about-photo{aspect-ratio:3/4;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;display:flex;align-items:center;justify-content:center}
  .photo-placeholder{text-align:center;padding:20px}
  .photo-note{font-family:var(--mono);font-size:11px;color:var(--text-dim);margin-top:12px}
  .hive-svg{opacity:.25}
  .about-text p{margin-bottom:20px}
  .quals{margin-top:32px;display:flex;flex-direction:column;gap:10px}
  .qual-item{display:flex;align-items:flex-start;gap:12px;padding:14px 16px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius)}
  .qual-dot{width:8px;height:8px;border-radius:50%;background:var(--green);flex-shrink:0;margin-top:5px}
  .qual-title{font-size:14px;font-weight:500;color:var(--text);line-height:1.3}
  .qual-org{font-size:12px;color:var(--text-muted);margin-top:2px}
  .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
  .service-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:28px;transition:all .25s;position:relative;overflow:hidden}
  .service-card:hover{background:var(--bg-card-hover);border-color:var(--border-accent)}
  .service-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--green);opacity:0;transition:opacity .25s}
  .service-card:hover::after{opacity:1}
  .service-icon{width:44px;height:44px;border-radius:var(--radius);background:var(--green-glow);border:1px solid var(--border-accent);display:flex;align-items:center;justify-content:center;margin-bottom:18px;font-size:20px}
  .service-list{list-style:none;margin-top:14px}
  .service-list li{font-size:13px;color:var(--text-muted);padding:5px 0;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:8px}
  .service-list li:last-child{border-bottom:none}
  .service-list li::before{content:'';width:4px;height:4px;border-radius:50%;background:var(--green-dim);flex-shrink:0}
  .product-link{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:var(--green);text-decoration:none;font-weight:500;transition:gap .2s}
  .product-link:hover{gap:10px}
  .work-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
  .work-item{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;transition:border-color .2s}
  .work-item:hover{border-color:var(--border-accent)}
  .work-item.wide{grid-column:span 2}
  .work-thumb{aspect-ratio:16/9;background:var(--bg);display:flex;align-items:center;justify-content:center;border-bottom:1px solid var(--border);overflow:hidden}
  .work-thumb.tall{aspect-ratio:4/5}
  .thumb-placeholder{text-align:center;padding:20px}
  .thumb-icon{font-size:36px;margin-bottom:10px;display:block;opacity:.4}
  .thumb-note{font-family:var(--mono);font-size:10px;color:var(--text-dim);line-height:1.5}
  .work-info{padding:18px 20px}
  .work-category{font-family:var(--mono);font-size:10px;color:var(--green);letter-spacing:.1em;text-transform:uppercase;margin-bottom:6px}
  .work-title{font-size:15px;font-weight:500;color:var(--text)}
  .work-sub{font-size:12px;color:var(--text-muted);margin-top:3px}
  .articles-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  .article-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px;text-decoration:none;transition:all .2s;display:block}
  .article-card:hover{background:var(--bg-card-hover);border-color:var(--border-accent)}
  .article-date{font-family:var(--mono);font-size:11px;color:var(--text-dim);margin-bottom:10px}
  .article-title{font-size:16px;font-weight:500;color:var(--text);line-height:1.4;margin-bottom:10px}
  .article-excerpt{font-size:13px;color:var(--text-muted);line-height:1.6;max-width:100%}
  .article-arrow{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--green);margin-top:16px;font-weight:500}
  #contact{text-align:center;max-width:700px;margin:0 auto;padding:120px 5vw}
  #contact h2{margin-bottom:20px}
  #contact p{margin:0 auto 40px;text-align:center;max-width:480px;font-size:15px}
  .contact-links{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
  footer{border-top:1px solid var(--border);padding:32px 5vw;display:flex;align-items:center;justify-content:space-between;max-width:1100px;margin:0 auto}
  .footer-brand{font-family:var(--mono);font-size:12px;color:var(--text-dim)}
  .footer-brand span{color:var(--green)}
  .footer-links{display:flex;gap:24px;list-style:none}
  .footer-links a{font-size:12px;color:var(--text-dim);text-decoration:none;transition:color .2s}
  .footer-links a:hover{color:var(--text-muted)}
  .section-divider{width:100%;height:1px;background:var(--border);max-width:1100px;margin:0 auto}
  @media(max-width:768px){
    .hero-grid,.about-grid,.articles-grid{grid-template-columns:1fr}
    .services-grid{grid-template-columns:1fr}
    .work-grid{grid-template-columns:1fr}
    .work-item.wide{grid-column:span 1}
    nav .nav-links{display:none}
    h1{font-size:38px}
    footer{flex-direction:column;gap:20px;text-align:center}
  }
</style>
</head>
<body>

<nav>
  <a href="#" class="nav-logo">WD /</a>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#how-i-work">How I work</a></li>
    <li><a href="#services">How I can help</a></li>
    <li><a href="#products">Side projects</a></li>
    <li><a href="#work">Work</a></li>
    <li><a href="#articles">Recent thinking</a></li>${CHANGELOG.length ? `
    <li><a href="#changelog">Changelog</a></li>` : ""}
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- HERO -->
<section id="hero" style="max-width:1100px;margin:0 auto;padding:80px 5vw;">
  <div class="hero-grid">
    <div>
      <div class="section-label">${esc(CONFIG.location)}</div>
      <h1>${esc(CONFIG.headlineMain)}<br><em>${esc(CONFIG.headlineHighlight)}</em></h1>
      <p class="hero-tagline">${esc(CONFIG.tagline)}</p>
      <p class="hero-strap">${esc(CONFIG.strapline)}</p>
      <div class="hero-ctas">
        <a href="#services" class="btn btn-primary">How I can help</a>
        <a href="#contact" class="btn btn-ghost">Get in touch</a>
      </div>
    </div>
    <div class="hero-stats">
      <div class="stat-card">
        <div class="stat-number">${esc(CONFIG.stats[0].number)}</div>
        <div class="stat-label">${esc(CONFIG.stats[0].label)}</div>
      </div>
      <div class="stat-pair">
        ${CONFIG.stats.slice(1).map(s => `
        <div class="stat-card small">
          <div class="stat-number">${esc(s.number)}</div>
          <div class="stat-label">${esc(s.label)}</div>
        </div>`).join("")}
      </div>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- HOW I WORK -->
<section id="how-i-work" style="max-width:1100px;margin:0 auto;">
  <div class="section-label">Approach</div>
  <h2>How I work</h2>
  <p>${esc(CONFIG.howIWork)}</p>
</section>

<div class="section-divider"></div>

<!-- ABOUT -->
<section id="about" style="max-width:1100px;margin:0 auto;">
  <div class="section-label">About</div>
  <div class="about-grid">
    <div class="about-photo">${photoBlock(CONFIG.photo)}</div>
    <div class="about-text">
      <h2 style="font-size:32px;margin-bottom:24px;">${esc(CONFIG.name)}</h2>
      ${CONFIG.about.map(p => `<p>${esc(p)}</p>`).join("\n      ")}
      <div class="quals">
        <div class="section-label" style="margin-top:32px;margin-bottom:12px;">Qualifications</div>
        ${CONFIG.qualifications.map(q => `
        <div class="qual-item">
          <div class="qual-dot"></div>
          <div>
            <div class="qual-title">${esc(q.title)}</div>
            ${q.org ? `<div class="qual-org">${esc(q.org)}</div>` : ""}
          </div>
        </div>`).join("")}
        <a href="${esc(CONFIG.linkedin)}" target="_blank" class="btn btn-ghost" style="margin-top:8px;font-size:13px;">
          View full profile on LinkedIn →
        </a>
      </div>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- SERVICES -->
<section id="services" style="max-width:1100px;margin:0 auto;">
  <div class="section-label">How I can help</div>
  <h2>How I can help</h2>
  <div class="services-grid">
    ${CONFIG.services.map(s => `
    <div class="service-card">
      <div class="service-icon">${s.icon}</div>
      <h3>${esc(s.title)}</h3>
      <p style="font-size:13px;margin-top:8px;max-width:100%;">${esc(s.desc)}</p>
      <ul class="service-list">
        ${s.items.map(i => `<li>${esc(i)}</li>`).join("")}
      </ul>
    </div>`).join("")}
  </div>
</section>

<div class="section-divider"></div>

<!-- SIDE PROJECTS -->
<section id="products" style="max-width:1100px;margin:0 auto;">
  <div class="section-label">Side projects</div>
  <p style="font-size:16px;">${esc(CONFIG.sideProjects.text)} <a href="${esc(CONFIG.sideProjects.link)}" target="_blank" class="product-link">${esc(CONFIG.sideProjects.linkLabel)}</a></p>
</section>

<div class="section-divider"></div>

<!-- WORK -->
<section id="work" style="max-width:1100px;margin:0 auto;">
  <div class="section-label">Work &amp; Interests</div>
  <h2 style="margin-bottom:16px;">Where the hands-on lives</h2>
  <p style="margin-bottom:48px;">Real projects, real results.</p>
  <div class="work-grid">
    ${CONFIG.work.map((w, i) => `
    <div class="work-item${w.wide ? " wide" : ""}">
      <div class="work-thumb${!w.wide && i > 0 ? " tall" : ""}">
        ${workThumb(w)}
      </div>
      <div class="work-info">
        <div class="work-category">${esc(w.category)}</div>
        <div class="work-title">${esc(w.title)}</div>
        <div class="work-sub">${esc(w.sub)}</div>
      </div>
    </div>`).join("")}
  </div>
</section>

<div class="section-divider"></div>

<!-- ARTICLES -->
<section id="articles" style="max-width:1100px;margin:0 auto;">
  <div class="section-label">Recent thinking</div>
  <h2 style="margin-bottom:8px;">Recent thinking</h2>
  <p id="feed-status" style="font-family:var(--mono);font-size:11px;color:var(--text-dim);margin-bottom:32px;">Recent highlights</p>
  <div class="articles-grid" id="articles-grid">
    ${CONFIG.articles.map(a => `
    <a href="${esc(a.url)}" target="_blank" rel="noopener" class="article-card">
      <div class="article-date">${esc(a.date)}</div>
      <div class="article-title">${esc(a.title)}</div>
      ${a.excerpt ? `<div class="article-excerpt">${esc(a.excerpt)}</div>` : ""}
      <div class="article-arrow">Read on LinkedIn →</div>
    </a>`).join("")}
  </div>
  <a href="${esc(CONFIG.linkedin)}" target="_blank" class="btn btn-ghost" style="margin-top:32px;">See all on LinkedIn →</a>
</section>
${CHANGELOG.length ? `
<div class="section-divider"></div>

<!-- CHANGELOG -->
<section id="changelog" style="max-width:1100px;margin:0 auto;">
  <div class="section-label">Changelog</div>
  <h2>Recent milestones</h2>
  <div class="articles-grid">
    ${CHANGELOG.map(c => `
    <div class="article-card" style="cursor:default;">
      <div class="article-date">${esc(c.date)}</div>
      <div class="article-title">${esc(c.title)}</div>
      <div class="article-excerpt">${esc(c.body)}</div>
    </div>`).join("")}
  </div>
</section>
` : ""}
<div class="section-divider"></div>

<!-- CONTACT -->
<section id="contact">
  <div class="section-label" style="justify-content:center;">Contact</div>
  <h2>Let's work together</h2>
  <p>Available for project roles, planning contracts and advisory work. Perth-based.</p>
  <div class="contact-links">
    <a href="mailto:${esc(CONFIG.email)}" class="btn btn-primary">${esc(CONFIG.email)}</a>
    <a href="${esc(CONFIG.linkedin)}" target="_blank" class="btn btn-ghost">LinkedIn</a>
  </div>
</section>

<div class="section-divider"></div>
<footer>
  <div class="footer-brand"><span>Wallace Digital</span> — ${esc(CONFIG.abn)} — ${esc(CONFIG.location)}</div>
  <ul class="footer-links">
    <li><a href="https://chargesafe.au" target="_blank">ChargeSafe</a></li>
    <li><a href="${esc(CONFIG.linkedin)}" target="_blank">LinkedIn</a></li>
    <li><a href="mailto:${esc(CONFIG.email)}">Contact</a></li>
  </ul>
</footer>

<script>
(function(){
  var grid = document.getElementById('articles-grid');
  var status = document.getElementById('feed-status');
  if (!grid) return;
  function esc(s){ return String(s == null ? "" : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function attr(s){ return esc(s).replace(/"/g,'&quot;'); }
  fetch('/api/articles').then(function(r){ return r.json(); }).then(function(data){
    if (!data || !Array.isArray(data.articles) || !data.articles.length) return;
    grid.innerHTML = data.articles.map(function(a){
      return '<a href="'+attr(a.url)+'" target="_blank" rel="noopener" class="article-card">'
        + '<div class="article-date">'+esc(a.date)+'</div>'
        + '<div class="article-title">'+esc(a.title)+'</div>'
        + (a.excerpt ? '<div class="article-excerpt">'+esc(a.excerpt)+'</div>' : '')
        + '<div class="article-arrow">Read on LinkedIn →</div>'
        + '</a>';
    }).join('');
    if (status) status.textContent = data.source === 'live' ? 'Live from LinkedIn' : 'Recent highlights';
  }).catch(function(){ /* keep the server-rendered fallback cards already in the page */ });
})();
</script>
</body>
</html>`;

const outPath = path.join(__dirname, "wallacedigital.html");
fs.writeFileSync(outPath, html, "utf8");
console.log(`✅ Built → ${outPath}`);
console.log(`   ${CONFIG.work.filter(w => !w.image).length} work image(s) still need paths`);
console.log(`   ${CONFIG.articles.filter(a => a.url.includes("YOUR")).length} article URL(s) still placeholder`);
if (!CONFIG.photo) console.log(`   Profile photo not set (CONFIG.photo is empty)`);

// ============================================================
//  SEO: robots.txt + sitemap.xml
// ============================================================

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${CONFIG.baseUrl}/sitemap.xml
`;
fs.writeFileSync(path.join(__dirname, "robots.txt"), robotsTxt, "utf8");

const todayIso = new Date().toISOString().slice(0, 10);
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${CONFIG.baseUrl}/</loc>
    <lastmod>${todayIso}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
fs.writeFileSync(path.join(__dirname, "sitemap.xml"), sitemapXml, "utf8");
console.log(`✅ Built → robots.txt, sitemap.xml`);

// ============================================================
//  LIVE LINKEDIN FEED: Cloudflare Pages Function
//  CONFIG.articles above is already sourced from
//  content/linkedin-feed.json (task 1000144's content-approval
//  pipeline) when that file exists, so it stays the single
//  source of truth for the fallback list baked in below.
// ============================================================

const fallbackArticles = CONFIG.articles.map(a => ({
  title: a.title,
  url:   a.url,
  date:  a.date,
  excerpt: a.excerpt,
}));

const articlesFunctionJs = `// AUTO-GENERATED by build_site.js from CONFIG.articles — do not edit by hand.
// CONFIG.articles is itself loaded from content/linkedin-feed.json when that
// file exists (task 1000144's content-approval pipeline), so editing that
// file (via the Telegram approve flow or by hand) and re-running
// node build_site.js is how you update the fallback list here.
//
// Serves the "Recent thinking" feed for wallacedigital.au.
// If env.LINKEDIN_FEED_URL is set (an RSS or JSON Feed URL, e.g. from rss.app
// pointed at Damian's LinkedIn profile activity), fetches + parses it server-side
// and caches the result for 30 minutes. Falls back to the list below —
// the same human-curated list task 1000144 publishes to — whenever the live
// feed isn't configured, fails to fetch, or returns nothing usable.

const FALLBACK_ARTICLES = ${JSON.stringify(fallbackArticles, null, 2)};

export async function onRequestGet(context) {
  const feedUrl = context.env && context.env.LINKEDIN_FEED_URL;

  if (!feedUrl) {
    return jsonResponse({ source: "fallback", articles: FALLBACK_ARTICLES });
  }

  try {
    const cache = caches.default;
    const cacheKey = new Request("https://wallacedigital.au/__linkedin-feed-cache");
    const cached = await cache.match(cacheKey);
    if (cached) return cached;

    const res = await fetch(feedUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; WallaceDigitalBot/1.0)" },
    });
    if (!res.ok) throw new Error("feed fetch failed: " + res.status);
    const raw = await res.text();
    const parsed = parseFeed(raw);

    const articles = parsed.length ? parsed : FALLBACK_ARTICLES;
    const response = jsonResponse({ source: parsed.length ? "live" : "fallback", articles });
    context.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  } catch (err) {
    return jsonResponse({
      source: "fallback",
      articles: FALLBACK_ARTICLES,
      note: String((err && err.message) || err),
    });
  }
}

function jsonResponse(obj) {
  return new Response(JSON.stringify(obj), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "public, max-age=1800",
    },
  });
}

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
    const blocks = [...trimmed.matchAll(/<item\\b[\\s\\S]*?<\\/item>/gi)].map(m => m[0]);
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
  const m = block.match(new RegExp("<" + tag + "[^>]*href=[\\"']([^\\"']+)[\\"']", "i"));
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
`;

const functionsDir = path.join(__dirname, "functions", "api");
fs.mkdirSync(functionsDir, { recursive: true });
fs.writeFileSync(path.join(functionsDir, "articles.js"), articlesFunctionJs, "utf8");
console.log(`✅ Built → functions/api/articles.js (live LinkedIn feed, env.LINKEDIN_FEED_URL not yet set = fallback mode)`);

// ============================================================
//  PRIVACY POLICY PAGE
//  Source: privacy-policy.md (edit that file, not this script,
//  to update the policy text — then re-run this build).
// ============================================================

function inlineMd(str) {
  let out = esc(str);
  out = out.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\*(.+?)\*/g, "<em>$1</em>");
  return out;
}

function mdToHtml(md) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  let html = "";
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") { i++; continue; }
    if (line.trim() === "---") { html += "<hr>\n"; i++; continue; }
    if (line.startsWith("## ")) { html += `<h2>${inlineMd(line.slice(3))}</h2>\n`; i++; continue; }
    if (line.startsWith("# ")) { html += `<h1>${inlineMd(line.slice(2))}</h1>\n`; i++; continue; }
    if (line.startsWith("- ")) {
      html += "<ul>\n";
      while (i < lines.length && lines[i].startsWith("- ")) {
        html += `  <li>${inlineMd(lines[i].slice(2))}</li>\n`;
        i++;
      }
      html += "</ul>\n";
      continue;
    }
    // paragraph — collect consecutive non-blank, non-special lines
    let para = [line];
    i++;
    while (i < lines.length && lines[i].trim() !== "" && !lines[i].startsWith("#") && !lines[i].startsWith("- ") && lines[i].trim() !== "---") {
      para.push(lines[i]);
      i++;
    }
    html += `<p>${para.map(inlineMd).join("<br>\n")}</p>\n`;
  }
  return html;
}

// ------------------------------------------------------------
//  REGENERATION GUARD (task 1000084)
//  privacy.html is the URL both the Google Play and Apple App
//  Store listings depend on. A routine, unrelated site rebuild
//  (e.g. re-running this script after an article/CONFIG edit)
//  must never silently change it. Guard: only regenerate when
//  privacy-policy.md's own content hash has changed since the
//  last recorded (approved) hash, or when --force-privacy is
//  passed explicitly. Everything else leaves privacy.html
//  byte-for-byte untouched and says so.
// ------------------------------------------------------------
const crypto = require("crypto");

const privacyMdPath = path.join(__dirname, "privacy-policy.md");
const privacyOutPath = path.join(__dirname, "privacy.html");
const privacyHashPath = path.join(__dirname, ".privacy-policy.sha256");
const privacyLogPath = path.join(__dirname, "privacy_regen.log");

const privacyMd = fs.readFileSync(privacyMdPath, "utf8");
const privacySrcHash = crypto.createHash("sha256").update(privacyMd, "utf8").digest("hex");
const lastApprovedHash = fs.existsSync(privacyHashPath)
  ? fs.readFileSync(privacyHashPath, "utf8").trim()
  : null;
const forceRebuild = process.argv.includes("--force-privacy");

function logPrivacyEvent(line) {
  const stamp = new Date().toISOString();
  fs.appendFileSync(privacyLogPath, `${stamp}  ${line}\n`, "utf8");
}

if (!forceRebuild && lastApprovedHash === privacySrcHash && fs.existsSync(privacyOutPath)) {
  console.log(`⏭  privacy.html unchanged — privacy-policy.md hash matches last approved (${privacySrcHash.slice(0, 12)}...), skipped`);
} else {
  const privacyBody = mdToHtml(privacyMd);

  const privacyHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Privacy Policy — ChargeSafe | Wallace Digital</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --bg:#0a0d0a;--bg-card:#111611;
    --border:#1e2b1e;
    --green:#4cff6e;--green-dim:#2a8c3f;
    --text:#e8ede8;--text-muted:#7a907a;
    --mono:'JetBrains Mono',monospace;--sans:'Inter',sans-serif;
    --radius:6px;--radius-lg:12px;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:var(--sans);background:var(--bg);color:var(--text);font-size:16px;line-height:1.6}
  main{max-width:720px;margin:0 auto;padding:56px 6vw 100px}
  h1{font-size:clamp(28px,5vw,38px);font-weight:400;letter-spacing:-.02em;color:var(--text);margin-bottom:24px;line-height:1.25}
  h2{font-size:clamp(19px,3vw,22px);font-weight:500;color:var(--green);margin:40px 0 14px;letter-spacing:-.01em}
  p{color:var(--text-muted);line-height:1.8;margin-bottom:16px;max-width:100%}
  strong{color:var(--text);font-weight:600}
  em{color:var(--text)}
  ul{margin:0 0 16px 1.3em;color:var(--text-muted);line-height:1.8}
  li{margin-bottom:6px}
  hr{border:none;border-top:1px solid var(--border);margin:28px 0}
  a{color:var(--green);text-decoration:none}
  a:hover{text-decoration:underline}
  .back{display:inline-block;font-family:var(--mono);font-size:13px;color:var(--text-muted);margin-bottom:32px}
  .back:hover{color:var(--green)}
  footer{text-align:center;font-family:var(--mono);font-size:11px;color:var(--text-dim,#4a5e4a);padding:32px 6vw;border-top:1px solid var(--border)}
</style>
</head>
<body>
<main>
  <a href="/" class="back">← wallacedigital.au</a>
  ${privacyBody}
</main>
<footer>Wallace Digital — ABN 51 232 784 636 — Western Australia</footer>
</body>
</html>`;

  fs.writeFileSync(privacyOutPath, privacyHtml, "utf8");
  fs.writeFileSync(privacyHashPath, privacySrcHash, "utf8");
  const reason = forceRebuild ? "--force-privacy explicit flag" : "privacy-policy.md content changed";
  logPrivacyEvent(`regenerated privacy.html (${reason}), new source hash ${privacySrcHash}`);
  console.log(`✅ Built → ${privacyOutPath}  (${reason})`);
}
