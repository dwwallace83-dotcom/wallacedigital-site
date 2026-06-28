// ============================================================
//  WALLACE DIGITAL — SITE BUILDER
//  Edit everything in CONFIG below, then run:
//    node build_site.js
//  Output: wallacedigital.html  (drop this on Cloudflare Pages)
// ============================================================

const CONFIG = {

  // ── PERSONAL ────────────────────────────────────────────
  name:         "Damian Wallace",
  tagline:      "Senior central planner by day. Independent operator and founder by build.\nI design infrastructure, develop products, and automate the gap between the two.",
  location:     "Perth, Western Australia",
  email:        "Dwwallace83@gmail.com",  // TODO: switch to damian@wallacedigital.au once Cloudflare email routing is set up
  linkedin:     "https://www.linkedin.com/in/damian-wallace-0b41766a/",
  abn:          "ABN active",

  // ── HERO STATS ───────────────────────────────────────────
  stats: [
    { number: "15+", label: "Years in planning and project management" },
    { number: "2",   label: "Live digital products" },
    { number: "1",   label: "Active ABN, Wallace Digital" },
  ],

  // ── ABOUT TEXT ───────────────────────────────────────────
  // Each string = one paragraph
  about: [
    "I'm a systems thinker who has spent 15 years in mining operations, starting as a heavy diesel mechanic and progressing into maintenance planning and operational improvement.",
    "My consistent approach has been to identify inefficient or broken systems and design practical, lasting solutions. In my current role as Central Planner at Macmahon, I led the replacement of chaotic flagged-email workflows with a fully structured digital ticketing system — implementing online forms, automated workflows, and approval processes that now serve multiple users across the department and remote sites.",
    "I apply the same systems mindset across other domains. For the past five years I've run a small beekeeping operation with 12 hives across five locations — managing a living biological system that requires constant observation, adaptation, and optimisation.",
    "I'm now extending this approach into digital systems — developing AI-powered tools including ChargeSafe, a smart EV charger directory that routes users based on real-time status and congestion, and Zed83, a personal AI assistant that acts as an intelligent central layer to monitor, integrate information, and surface timely actions.",
    "I'm in the final stages of completing my MBA and continue to explore how practical, hands-on systems thinking combined with modern tools can create better outcomes in operations and beyond.",
  ],
  // ── YOUR PHOTO ───────────────────────────────────────────
  // Local file path OR a URL (Immich share link, Cloudflare image, etc.)
  // Leave empty "" to show the placeholder honeycomb graphic
  photo: "./images/damian.jpg",
  // Example — local file:  photo: "./images/damian.jpg"
  // Example — Immich share: photo: "http://192.168.4.140:2283/api/asset/YOUR-ASSET-ID/original"
  // Example — Cloudflare:  photo: "https://imagedelivery.net/YOUR-ACCOUNT/photo/public"

  // ── QUALIFICATIONS ───────────────────────────────────────
  qualifications: [
    {
      title: "Certificate IV in Project Management Practice",
      org:   "TAFE / BSB — Verified on LinkedIn",
    },
    {
      title: "Planning and Scheduling (Advanced)",
      org:   "Macmahon Holdings — Mining & Infrastructure",
    },
    {
      title: "Self-Directed — Mobile, Backend, AI Tooling",
      org:   "React Native · Python · Node.js · Cloudflare · Docker",
    },
    // Add more like: { title: "Your Cert", org: "Issuer" },
  ],

  // ── SERVICES ────────────────────────────────────────────
  services: [
    {
      icon:  "📐",
      title: "Planning & Scheduling",
      desc:  "Complex project planning from first principles — programme development, schedule health, resource levelling, and constraint analysis.",
      items: [
        "Primavera P6 / MS Project",
        "Programme development",
        "Schedule compression & recovery",
        "Mining, construction, infrastructure",
        "Stakeholder reporting",
      ],
    },
    {
      icon:  "⚙️",
      title: "Digital Automation",
      desc:  "Business process automation using Microsoft Power Platform, bespoke API pipelines, and AI tooling. From approval flows to data reporting.",
      items: [
        "Power Automate flows",
        "SharePoint + Teams integration",
        "Forms → approval → notification",
        "Custom Python / Node.js scripts",
        "AI agent integration",
      ],
    },
    {
      icon:  "🛠️",
      title: "Product Development",
      desc:  "End-to-end mobile and web product build — from concept to deployed app. React Native, Expo, Xano backend, Cloudflare infrastructure.",
      items: [
        "React Native (Expo)",
        "Xano backend / REST APIs",
        "Cloudflare Tunnels & DNS",
        "Tailscale remote networking",
        "Docker / NAS / self-hosted",
      ],
    },
    {
      icon:  "🏗️",
      title: "Infrastructure & Renovation",
      desc:  "Hands-on residential renovation experience — planning, sequencing, and delivery. The same discipline that runs a mining programme runs a reno.",
      items: [
        "Project sequencing",
        "Trade coordination",
        "Budget tracking",
        "Before/after documentation",
      ],
    },
    {
      icon:  "🐝",
      title: "Apiculture",
      desc:  "Hobbyist beekeeper with hives in the Perth region. Available for consultation, local honey, or just a conversation about building healthy colonies.",
      items: [
        "Perth metro hive management",
        "Colony health assessment",
        "Local raw honey",
        "New beekeeper mentoring",
      ],
    },
    {
      icon:  "🤖",
      title: "AI Integration Consulting",
      desc:  "Real-world experience integrating large language models into operational workflows. No hype — just working systems built to run autonomously.",
      items: [
        "Telegram bot / assistant builds",
        "Groq / Anthropic API integration",
        "Data retrieval + scheduling",
        "Voice in/out pipelines",
        "Private, self-hosted deployments",
      ],
    },
  ],

  // ── PRODUCTS ────────────────────────────────────────────
  products: [
    {
      name:     "ChargeSafe",
      badge:    "In development",
      badgeType:"active",   // "active" = green  |  "internal" = amber
      desc:     "Australian EV charger finder and confidence app. Not just a directory — ChargeSafe gives EV drivers real-time charger status, trip energy planning, and confidence scoring so you never arrive at a broken charger unprepared.",
      stack:    ["React Native", "Expo", "Xano", "Google Maps API", "Chargefox API"],
      link:     "https://chargesafe.au",
      linkLabel:"chargesafe.au →",
    },
    {
      name:     "Zed83",
      badge:    "Private / internal",
      badgeType:"internal",
      desc:     "A personal AI assistant operating via Telegram with voice in/out, Garmin health integration, Google Calendar sync, real-time data feeds, and autonomous nightly maintenance. Built to run 24/7 without intervention.",
      stack:    ["Python", "Groq", "Anthropic", "Telegram", "Garmin", "Docker"],
      link:     "",   // leave empty to show "capacity demonstrated on request"
      linkLabel:"",
    },
  ],

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
<title>Wallace Digital — Build. Plan. Ship.</title>
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
  .hero-ctas{display:flex;gap:16px;margin-top:40px;flex-wrap:wrap}
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
  .products-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
  .product-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:36px;transition:all .25s;position:relative;overflow:hidden}
  .product-card.featured{border-color:var(--border-accent)}
  .product-card.featured::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--green)}
  .product-card:hover{background:var(--bg-card-hover);border-color:var(--border-accent)}
  .product-badge{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:4px 10px;border-radius:100px;margin-bottom:20px}
  .badge-active{background:rgba(76,255,110,0.1);color:var(--green);border:1px solid rgba(76,255,110,0.2)}
  .badge-internal{background:rgba(255,180,0,0.08);color:#c89a00;border:1px solid rgba(255,180,0,0.15)}
  .badge-dot{width:6px;height:6px;border-radius:50%;background:currentColor}
  .product-name{font-size:24px;font-weight:500;margin-bottom:10px;letter-spacing:-.02em}
  .product-desc{font-size:14px;color:var(--text-muted);line-height:1.7;max-width:100%;margin-bottom:24px}
  .product-stack{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px}
  .stack-tag{font-family:var(--mono);font-size:11px;padding:3px 10px;border-radius:100px;background:transparent;border:1px solid var(--border-accent);color:var(--text-dim)}
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
  .terminal{background:#080c08;border:1px solid var(--border);border-radius:var(--radius);padding:20px 24px;font-family:var(--mono);font-size:13px;line-height:1.8;margin:32px 0}
  .t-prompt{color:var(--green)}.t-cmd{color:var(--text)}.t-out{color:var(--text-muted)}
  @keyframes blink{50%{opacity:0}}
  .cursor{display:inline-block;width:2px;height:1em;background:var(--green);margin-left:2px;vertical-align:middle;animation:blink 1s step-end infinite}
  @media(max-width:768px){
    .hero-grid,.about-grid,.products-grid,.articles-grid{grid-template-columns:1fr}
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
    <li><a href="#services">Services</a></li>
    <li><a href="#products">Products</a></li>
    <li><a href="#work">Work</a></li>
    <li><a href="#articles">Articles</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- HERO -->
<section id="hero" style="max-width:1100px;margin:0 auto;padding:80px 5vw;">
  <div class="hero-grid">
    <div>
      <div class="section-label">${esc(CONFIG.location)}</div>
      <h1>Build.<br><em>Plan.</em><br>Ship.</h1>
      <p class="hero-tagline">${esc(CONFIG.tagline).replace(/\n/g,"<br>")}</p>
      <div class="hero-ctas">
        <a href="#services" class="btn btn-primary">What I offer</a>
        <a href="#products" class="btn btn-ghost">See the products</a>
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
            <div class="qual-org">${esc(q.org)}</div>
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
  <div class="section-label">Services</div>
  <h2>What I can do for you</h2>
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
  <div class="terminal">
    <div><span class="t-prompt">damian@wallacedigital:~$</span> <span class="t-cmd">cat capabilities.txt</span></div>
    <div class="t-out">Plan complex operations &nbsp;&nbsp;&nbsp;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A0; 15+ yrs</div>
    <div class="t-out">Build digital products &nbsp;&nbsp;&nbsp;&nbsp;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A1;&#x25A1; active</div>
    <div class="t-out">Automate workflows &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A1;&#x25A1; active</div>
    <div class="t-out">Self-hosted infra &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A0;&#x25A1;&#x25A1;&#x25A1;&#x25A1; growing</div>
    <div><span class="t-prompt">$</span> <span class="cursor"></span></div>
  </div>
</section>

<div class="section-divider"></div>

<!-- PRODUCTS -->
<section id="products" style="max-width:1100px;margin:0 auto;">
  <div class="section-label">Products</div>
  <h2>Built by Wallace Digital</h2>
  <div class="products-grid">
    ${CONFIG.products.map((p, i) => `
    <div class="product-card${i === 0 ? " featured" : ""}">
      <div class="product-badge badge-${esc(p.badgeType)}">
        <div class="badge-dot"></div>
        ${esc(p.badge)}
      </div>
      <div class="product-name">${esc(p.name)}</div>
      <p class="product-desc">${esc(p.desc)}</p>
      <div class="product-stack">
        ${p.stack.map(t => `<span class="stack-tag">${esc(t)}</span>`).join("")}
      </div>
      ${p.link
        ? `<a href="${esc(p.link)}" target="_blank" class="product-link">${esc(p.linkLabel)}</a>`
        : `<span style="font-size:13px;color:var(--text-dim);">Private deployment — capacity demonstrated on request</span>`
      }
    </div>`).join("")}
  </div>
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
  <div class="section-label">Writing</div>
  <h2>Published on LinkedIn</h2>
  <div class="articles-grid">
    ${CONFIG.articles.map(a => `
    <a href="${esc(a.url)}" target="_blank" class="article-card">
      <div class="article-date">${esc(a.date)}</div>
      <div class="article-title">${esc(a.title)}</div>
      <div class="article-excerpt">${esc(a.excerpt)}</div>
      <div class="article-arrow">Read on LinkedIn →</div>
    </a>`).join("")}
  </div>
</section>

<div class="section-divider"></div>

<!-- CONTACT -->
<section id="contact">
  <div class="section-label" style="justify-content:center;">Contact</div>
  <h2>Let's work together</h2>
  <p>Available for consulting, planning contracts, automation projects, or product partnerships. Perth-based, remote-capable.</p>
  <div class="contact-links">
    <a href="mailto:${esc(CONFIG.email)}" class="btn btn-primary">${esc(CONFIG.email)}</a>
    <a href="${esc(CONFIG.linkedin)}" target="_blank" class="btn btn-ghost">LinkedIn</a>
    <span class="btn btn-ghost" style="opacity:0.4;cursor:default;">ChargeSafe — Coming Soon</span>
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

</body>
</html>`;

const outPath = path.join(__dirname, "wallacedigital.html");
fs.writeFileSync(outPath, html, "utf8");
console.log(`✅ Built → ${outPath}`);
console.log(`   ${CONFIG.work.filter(w => !w.image).length} work image(s) still need paths`);
console.log(`   ${CONFIG.articles.filter(a => a.url.includes("YOUR")).length} article URL(s) still placeholder`);
if (!CONFIG.photo) console.log(`   Profile photo not set (CONFIG.photo is empty)`);
