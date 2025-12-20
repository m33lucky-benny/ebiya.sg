---
layout: page
title: "ebiyaSG Tank Builder – Build Your Caridina Shrimp Tank"
description: "Step-by-step Caridina shrimp tank builder. Select tank size, soil, filtration, and UGF for Singapore conditions. Membership guidance included."
keywords:
  - Caridina tank builder
  - shrimp tank Singapore
  - tank setup guide
  - shrimp soil and filtration
permalink: /tank-builder/
author: ebiyaSG
canonical_url: https://www.ebiya.sg/tank-builder/
og_title: "ebiyaSG Tank Builder – Build Your Caridina Shrimp Tank"
og_description: "Step-by-step Caridina shrimp tank builder for Singapore. Select tank size, soil, filtration, and UGF. Membership guidance included."
og_type: website
---

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

<div class="page-container">
  <h1>Caridina Shrimp Tank Builder</h1>
  <p class="hero-subtitle">Step-by-step guide to building your perfect tank for Singapore conditions.</p>

  <!-- Tank Size Cards -->
  <div class="tank-cards">
    <div class="tank-card" data-size="45">
      <h3>45cm Tank</h3>
      <div class="tag">Recommended</div>
      <ul>
        <li>Beginner friendly</li>
        <li>Lower cooling cost</li>
        <li>10–20 Caridina</li>
      </ul>
    </div>
    <div class="tank-card" data-size="60">
      <h3>60cm Tank</h3>
      <div class="tag">Colony / Breeding</div>
      <ul>
        <li>Higher stability</li>
        <li>More buffering</li>
        <li>25–40 Caridina</li>
      </ul>
    </div>
  </div>

  <!-- Build Result -->
  <div id="build" class="build-section">
    <h2>Your Recommended Build</h2>
    <h3>Soil</h3><p id="soil"></p>
    <h3>Filtration</h3><p id="filter"></p>
    <h3>UGF Chimney</h3><p id="chimney"></p>
    <h3>Why This Works</h3><p id="reason"></p>

    <!-- Membership CTA -->
    <div id="membership" class="membership-cta">
      <h3>Want Step-by-Step Guidance?</h3>
      <p>Join <strong>ebiyaSG Membership</strong> for a full setup checklist, water parameters, and support before something goes wrong.</p>
      <a href="/membership/">Join Now</a>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.tank-card');
  const build = document.getElementById('build');
  const soil = document.getElementById('soil');
  const filter = document.getElementById('filter');
  const chimney = document.getElementById('chimney');
  const reason = document.getElementById('reason');
  const membership = document.getElementById('membership');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      const size = card.dataset.size;
      build.classList.add('active');

      if (size === "45") {
        soil.textContent = "Active shrimp soil: 3L. Thin slope. Do not rinse.";
        filter.textContent = "Single sponge filter OR low-flow HOB with pre-filter. UGF optional.";
        chimney.textContent = "UGF: Max 1 chimney only (sufficient for 45cm).";
        reason.textContent = "45cm tanks stabilise faster with simple filtration. Lower flow prevents stress and biofilm loss.";
      }

      if (size === "60") {
        soil.textContent = "Active shrimp soil: 8L. Deeper bed for long-term buffering.";
        filter.textContent = "UGF + sponge OR canister with pre-filter.";
        chimney.textContent = "UGF: Can have 1 or 2 chimneys depending on colony size.";
        reason.textContent = "60cm tanks benefit from UGF for even flow, better bacterial distribution, and soil longevity.";
      }

      build.scrollIntoView({ behavior: "smooth", block: "start" });
      membership.classList.add('highlight');
      setTimeout(() => membership.classList.remove('highlight'), 2000);
    });
  });
});
</script>
