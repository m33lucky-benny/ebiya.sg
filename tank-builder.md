---
layout: page
title: "Caridina Tank Builder Singapore | Free Tool | ebiya.sg"
description: "Free interactive Caridina shrimp tank builder for Singapore. Get personalized equipment, water parameters & stocking recommendations for your setup."
keywords:
  - Caridina tank builder
  - shrimp tank Singapore
  - tank setup guide
  - shrimp soil and filtration
  - Taiwan bee shrimp
  - Caridina cantonensis
permalink: /tank-builder/
author: ebiyaSG

# Open Graph (Social Sharing)
og_title: "Caridina Tank Builder Singapore | Free Tool | ebiya.sg"
og_description: "Interactive Caridina tank builder for Singapore: tank size, stocking guidance in liters, soil, filtration, and UGF."
og_type: website
og_url: https://www.ebiya.sg/tank-builder/
og_image: https://www.ebiya.sg/assets/images/caridina-tank-builder-hero.jpg
og_image_alt: "Caridina shrimp tank builder guide"

# Twitter
twitter_card: summary_large_image
twitter_title: "Caridina Tank Builder Singapore | Free Tool | ebiya.sg"
twitter_description: "Build a stable Caridina tank in Singapore: tank size, stocking guidance (L), soil, filtration, and UGF."
twitter_image: https://www.ebiya.sg/assets/images/caridina-tank-builder-hero.jpg
---

<link rel="canonical" href="https://www.ebiya.sg/tank-builder/" />

<!-- =========================
     Tank Builder Styles
========================= -->
<style>
:root{
  --accent:#ff2f92;
  --bg:#121212;
  --card:#181818;
  --soft:rgba(255,47,146,.15);
}

.page-container{
  max-width:1100px;
  margin:auto;
}

.hero-subtitle{
  color:rgba(255,255,255,.8);
  margin-bottom:2rem;
}

.tank-cards{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:1.5rem;
}

.tank-card{
  background:var(--card);
  border:2px solid var(--soft);
  border-radius:14px;
  padding:1.5rem;
  cursor:pointer;
  transition:.2s ease;
}
.tank-card:hover{
  border-color:var(--accent);
  transform:translateY(-4px);
}
.tank-card.selected{
  border-color:var(--accent);
  background:rgba(255,47,146,.06);
}
.tank-card h3{margin-top:0}
.tank-card .tag{
  color:var(--accent);
  font-weight:700;
  margin-bottom:.5rem;
}

.build-section{
  display:none;
  margin-top:3rem;
  background:var(--bg);
  border-radius:16px;
  padding:2rem;
  border:1px solid var(--soft);
}
.build-section.active{display:block}

.param-box{
  margin-top:1.5rem;
  background:rgba(255,47,146,.05);
  border:1px solid var(--soft);
  border-radius:14px;
  padding:1.2rem;
}
.param-box h3{color:var(--accent);margin-top:0}

.param-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:.75rem;
}
.param-item{
  background:rgba(255,255,255,.03);
  border-radius:10px;
  padding:.6rem .75rem;
}
.param-item .k{font-size:.85rem;color:rgba(255,255,255,.75)}
.param-item .v{font-weight:800}

.membership-cta{
  margin-top:2.5rem;
  padding:1.8rem;
  border:2px dashed var(--accent);
  border-radius:16px;
  text-align:center;
}
.membership-cta a{
  display:inline-block;
  margin-top:1rem;
  padding:.75rem 1.8rem;
  border-radius:16px;
  background:linear-gradient(180deg,#ff47a7,#ff2f92);
  color:#0b0d10;
  font-weight:900;
  text-decoration:none;
}
</style>

<!-- =========================
     Page Content
========================= -->
<div class="page-container">

<h1>Caridina Tank Builder Singapore | Free Tool | ebiya.sg</h1>
<p class="hero-subtitle">
Step-by-step guidance for building a stable <strong>Caridina (Taiwan bee)</strong> tank under Singapore conditions.
</p>

<div class="tank-cards">
  <div class="tank-card" data-size="45">
    <h3>45cm Tank</h3>
    <div class="tag">33.75 L • Budget</div>
    <ul>
      <li>Lower cooling cost</li>
      <li>More sensitive to swings</li>
      <li><strong>Start:</strong> 12–18 shrimp</li>
      <li><strong>Max (advanced):</strong> 20–25</li>
    </ul>
  </div>

  <div class="tank-card" data-size="60">
    <h3>60cm Tank</h3>
    <div class="tag">45 L • Recommended</div>
    <ul>
      <li>Higher stability</li>
      <li>Better buffering</li>
      <li><strong>Start:</strong> 20–30 shrimp</li>
      <li><strong>Max (advanced):</strong> 35–45</li>
    </ul>
  </div>
</div>

<!-- =========================
     Build Output
========================= -->
<div id="build" class="build-section">
  <h2>Your Recommended Build</h2>

  <div class="param-box">
    <h3>Target Water Parameters</h3>
    <div class="param-grid">
      <div class="param-item"><div class="k">pH</div><div class="v">5.3 – 5.5</div></div>
      <div class="param-item"><div class="k">GH</div><div class="v">4 – 6 dGH</div></div>
      <div class="param-item"><div class="k">KH</div><div class="v">0 – 1 dKH</div></div>
      <div class="param-item"><div class="k">TDS</div><div class="v">100 – 120 ppm</div></div>
      <div class="param-item"><div class="k">Temperature</div><div class="v">20 – 23°C</div></div>
      <div class="param-item"><div class="k">Ammonia / Nitrite</div><div class="v">0 ppm</div></div>
    </div>
  </div>

  <h3>Soil</h3><p id="soil"></p>
  <h3>Filtration</h3><p id="filter"></p>
  <h3>UGF Chimney</h3><p id="chimney"></p>
  <h3>Why This Works</h3><p id="reason"></p>
  <h3>Maintenance</h3><p id="maintenance"></p>

  <!-- FAQ Button Here -->
<div style="text-align:center; margin:2rem 0 1rem 0;">
  <a href="/faq/" class="faq-btn" style="
    display:inline-block; padding:.8rem 2rem; 
    background:var(--accent); color:#0b0d10; 
    font-weight:700; border-radius:12px; 
    text-decoration:none; box-shadow:0 4px 12px rgba(255,47,146,.3);
  ">❓ Common Questions? Check FAQ</a>
</div>

  <div class="membership-cta">
    <h3>Want Zero Guesswork?</h3>
    <p>
      Join <strong>ebiyaSG Membership</strong> for a full setup checklist,
      TDS tracking, feeding schedules, and pre-emptive problem solving.
    </p>
    <a href="https://www.ebiya.sg/membership/">Join Membership</a>
  </div>
</div>

</div>

<!-- =========================
     Tank Builder Logic
========================= -->
<script>
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".tank-card");
  const build = document.getElementById("build");

  const soil = document.getElementById("soil");
  const filter = document.getElementById("filter");
  const chimney = document.getElementById("chimney");
  const reason = document.getElementById("reason");
  const maintenance = document.getElementById("maintenance");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      cards.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      build.classList.add("active");

      if(card.dataset.size === "45"){
        soil.textContent = "2.5–3 L active shrimp soil. Thin slope. Do not rinse.";
        filter.textContent = "Single sponge or low-flow HOB with pre-filter sponge.";
        chimney.textContent = "Optional. Max 1 chimney with gentle airflow.";
        reason.textContent = "Smaller volume reacts faster, so simplicity and lower stocking reduce crashes.";
        maintenance.textContent = "10% weekly water change. Feed lightly. Remove leftovers.";
      }

      if(card.dataset.size === "60"){
        soil.textContent = "6–8 L active shrimp soil for longer buffering life.";
        filter.textContent = "UGF + sponge or canister with intake pre-filter.";
        chimney.textContent = "1 chimney standard. 2 only for higher stocking with gentle flow.";
        reason.textContent = "More water volume = more stable pH, TDS, and breeding success.";
        maintenance.textContent = "10% weekly water change using remineralised RO only.";
      }

      build.scrollIntoView({behavior:"smooth",block:"start"});
    });
  });
});
</script>
<!--
---
layout: page
title: "ebiyaSG Tank Builder – Build Your Caridina Shrimp Tank"
description: "Interactive Caridina (Taiwan bee) shrimp tank builder for Singapore. Pick tank size, soil depth, filtration, and UGF, with stable-parameter guidance."
keywords:
  - Caridina tank builder
  - shrimp tank Singapore
  - tank setup guide
  - shrimp soil and filtration
  - Taiwan bee shrimp
  - Caridina cantonensis
permalink: /tank-builder/
author: ebiyaSG

# Open Graph (Social Sharing)
og_title: "ebiyaSG Tank Builder – Build Your Caridina Shrimp Tank"
og_description: "Interactive Caridina tank builder for Singapore: tank size, stocking guidance in liters, soil, filtration, and UGF."
og_type: website
og_url: https://www.ebiya.sg/tank-builder/
og_image: https://www.ebiya.sg/assets/images/caridina-tank-builder-hero.jpg
og_image_alt: "Caridina shrimp tank builder guide"

# Twitter
twitter_card: summary_large_image
twitter_title: "ebiyaSG Tank Builder – Build Your Caridina Shrimp Tank"
twitter_description: "Build a stable Caridina tank in Singapore: tank size, stocking guidance (L), soil, filtration, and UGF."
twitter_image: https://www.ebiya.sg/assets/images/caridina-tank-builder-hero.jpg
---

<!-- Optional meta tags (remove if your theme already outputs them from front matter) -->
<link rel="canonical" href="https://www.ebiya.sg/tank-builder/" />
<meta property="og:url" content="https://www.ebiya.sg/tank-builder/" />
<meta property="og:type" content="website" />
<meta property="og:title" content="ebiyaSG Tank Builder – Build Your Caridina Shrimp Tank" />
<meta property="og:description" content="Interactive Caridina tank builder for Singapore: tank size, stocking guidance in liters, soil, filtration, and UGF." />
<meta property="og:image" content="https://www.ebiya.sg/assets/images/caridina-tank-builder-hero.jpg" />
<meta property="og:image:alt" content="Caridina shrimp tank builder guide" />
<meta property="og:site_name" content="ebiyaSG" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="ebiyaSG Tank Builder – Build Your Caridina Shrimp Tank" />
<meta name="twitter:description" content="Build a stable Caridina tank in Singapore: tank size, stocking guidance (L), soil, filtration, and UGF." />
<meta name="twitter:image" content="https://www.ebiya.sg/assets/images/caridina-tank-builder-hero.jpg" />

<!-- Snippet / preview controls supported by Google -->
<meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />

<!-- JSON-LD: Organization -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.ebiya.sg/#organization",
  "name": "ebiyaSG",
  "url": "https://www.ebiya.sg/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.ebiya.sg/assets/img/ebiya-logo.jpg"
  },
  "sameAs": [
    "https://www.instagram.com/ebiyaSG",
    "https://www.tiktok.com/@fish_ah_gong"
  ]
}
</script>

<!-- JSON-LD: BreadcrumbList -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.ebiya.sg/tank-builder/#breadcrumbs",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.ebiya.sg/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tank Builder",
      "item": "https://www.ebiya.sg/tank-builder/"
    }
  ]
}
</script>

<!-- JSON-LD: WebPage (base) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.ebiya.sg/tank-builder/#webpage",
  "url": "https://www.ebiya.sg/tank-builder/",
  "name": "ebiyaSG Tank Builder – Build Your Caridina Shrimp Tank",
  "description": "Interactive Caridina (Taiwan bee) shrimp tank builder for Singapore. Pick tank size, soil depth, filtration, and UGF, with stable-parameter guidance.",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://www.ebiya.sg/#website",
    "url": "https://www.ebiya.sg/",
    "name": "ebiyaSG"
  },
  "publisher": {
    "@id": "https://www.ebiya.sg/#organization"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "@id": "https://www.ebiya.sg/tank-builder/#primaryimage",
    "url": "https://www.ebiya.sg/assets/images/caridina-tank-builder-hero.jpg"
  },
  "breadcrumb": {
    "@id": "https://www.ebiya.sg/tank-builder/#breadcrumbs"
  }
}
</script>

<!-- JSON-LD: WebApplication (the tool) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": "https://www.ebiya.sg/tank-builder/#webapp",
  "name": "ebiyaSG Caridina Tank Builder",
  "url": "https://www.ebiya.sg/tank-builder/",
  "applicationCategory": "LifestyleApplication",
  "operatingSystem": "Web",
  "isPartOf": {
    "@id": "https://www.ebiya.sg/tank-builder/#webpage"
  },
  "publisher": {
    "@id": "https://www.ebiya.sg/#organization"
  },
  "description": "An interactive builder that recommends tank size, soil, filtration, UGF setup, and stocking guidance for Caridina shrimp in Singapore."
}
</script>

<style>
/* Tank Builder Styling (matches ebiyaSG brand) */
.tank-card {
  background: #121212;
  border: 2px solid rgba(255,47,146,0.4);
  color: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}
.tank-card:hover { border-color: #ff2f92; transform: translateY(-3px); }
.tank-card.selected { border-color: #ff2f92; background: rgba(255,47,146,0.05); }
.tank-card .tag { color: #ff2f92; text-shadow: 0 0 8px rgba(255,47,146,0.4); font-weight: 600; }

.build-section {
  display: none;
  margin-top: 3rem;
  background: #121212;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255,47,146,0.2);
}
.build-section.active { display: block; }

.param-box{
  margin-top: 1.5rem;
  background: rgba(255,47,146,0.05);
  border: 1px solid rgba(255,47,146,0.2);
  border-radius: 12px;
  padding: 1rem;
}
.param-box h3{ margin: 0 0 .75rem; color:#ff2f92; }
.param-grid{
  display:grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap:.5rem .75rem;
}
@media (max-width: 700px){
  .param-grid{ grid-template-columns: 1fr; }
}
.param-item{
  border: 1px solid rgba(255,47,146,0.15);
  border-radius: 10px;
  padding: .65rem .75rem;
  background: rgba(255,255,255,0.02);
}
.param-item .k{ font-size:.9rem; color:rgba(255,255,255,.8); }
.param-item .v{ font-weight:800; margin-top:.2rem; }

.membership-cta {
  margin-top: 2rem;
  padding: 1.5rem;
  border: 2px dashed #ff2f92;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s, background 0.3s;
}
.membership-cta.highlight { background: rgba(255,47,146,0.05); transform: scale(1.02); }

.membership-cta a {
  display: inline-block;
  margin-top: 0.75rem;
  padding: 0.7rem 1.5rem;
  border-radius: 14px;
  font-weight: 800;
  text-decoration: none;
  background: linear-gradient(180deg, #ff47a7, #ff2f92);
  color: #0b0d10;
  box-shadow: 0 18px 50px rgba(255,47,146,0.25);
}
.membership-cta a:hover { transform: translateY(-2px); box-shadow: 0 24px 70px rgba(255,47,146,0.35); }
</style>
