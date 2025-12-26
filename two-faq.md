---
layout: default
title: Frequently Asked Questions | Caridina Shrimp & Custom Tanks Singapore
description: Expert answers to common questions about keeping caridina shrimp and custom shrimp tanks in Singapore. Learn water parameters, care tips, breeding, and tank setup from ebiya.sg.
permalink: /two-faq/
---

<div class="faq-container">
  <header class="faq-header">
    <h1>Frequently Asked Questions</h1>
    <p>Everything you need to know about Caridina shrimp care and custom shrimp tanks in Singapore.</p>
  </header>

  {% assign faq_id = 0 %}
  {% for category in site.data.faqs %}
  <section class="faq-category" id="cat-{{ forloop.index }}">
    <h2 class="category-title">{{ category.title }}</h2>

    {% for faq in category.questions %}
      {% assign faq_id = faq_id | plus: 1 %}
      <div class="faq-item" id="faq-{{ faq_id }}">
        <div class="faq-question">
          {{ faq.question }}
        </div>
        <div class="faq-answer">
          {{ faq.answer | markdownify }}
        </div>
      </div>
    {% endfor %}
  </section>
  {% endfor %}
</div>

<style>
/* Brand-aware FAQ styling (no accordion) */
body {
  background:#05050a;
  color:#f5f5f5;
}

.faq-container {
  max-width:900px;
  margin:40px auto;
  padding:20px;
}

.faq-header h1 {
  font-size:2.5em;
  color:#FF10F0;
}

.faq-header p {
  font-size:1.1em;
  color:#d0d4da;
  margin-bottom:30px;
}

.faq-category {
  margin-bottom:50px;
}

.category-title {
  font-size:1.8em;
  margin-bottom:20px;
  color:#FF006E;
  border-bottom:3px solid #FF10F0;
  padding-bottom:10px;
}

/* Card-style Q&A blocks */
.faq-item {
  margin-bottom:12px;
  border-radius:8px;
  overflow:hidden;
  background:#0d0d18;
  border:1px solid #222437;
  box-shadow:0 4px 10px rgba(0,0,0,0.4);
}

.faq-question {
  background:#111325;
  color:#f3f5ff;
  padding:14px 18px;
  font-weight:600;
  border-bottom:1px solid #222437;
}

.faq-answer {
  padding:14px 18px;
  background:#121426;
  color:#e3e7ff;
}

/* Optional: highlight links inside answers */
.faq-answer a {
  color:#FF10F0;
  text-decoration:underline;
}
</style>

<!-- JSON-LD FAQ Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {% assign faqs_flat = site.data.faqs | map: 'questions' | flatten %}
    {% for faq in faqs_flat %}
    {
      "@type": "Question",
      "name": "{{ faq.question | escape }}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{ faq.answer | strip_html | escape }}"
      }
    }{% if forloop.last == false %},{% endif %}
    {% endfor %}
  ]
}
</script>


<!--
<pre>{{ site.data.faqs | jsonify }}</pre>


<div class="faq-container">
  <header class="faq-header">
    <h1>Frequently Asked Questions</h1>
    <p>Everything you need to know about Caridina shrimp care and custom shrimp tanks in Singapore.</p>
  </header>

  {% assign faq_id = 0 %}
  {% for category in site.data.faqs %}
  <section class="faq-category" id="cat-{{ forloop.index }}">
    <h2 class="category-title">{{ category.title }}</h2>

    {% for faq in category.questions %}
      {% assign faq_id = faq_id | plus: 1 %}
      <div class="faq-item" id="faq-{{ faq_id }}">
        <button class="faq-question" aria-expanded="false" aria-controls="faq-{{ faq_id }}-answer" id="faq-btn-{{ faq_id }}">
          {{ faq.question }}
        </button>
        <div class="faq-answer" id="faq-{{ faq_id }}-answer" role="region" aria-labelledby="faq-btn-{{ faq_id }}">
          {{ faq.answer | markdownify }}
        </div>
      </div>
    {% endfor %}
  </section>
  {% endfor %}
</div>

<style>
/* Simple FAQ styling, answers always visible */
.faq-container { max-width:900px; margin:40px auto; padding:20px; }
.faq-header h1 { font-size:2.5em; color:#FF10F0; }
.faq-header p { font-size:1.1em; color:#36454F; margin-bottom:30px; }
.faq-category { margin-bottom:50px; }
.category-title { font-size:1.8em; margin-bottom:20px; color:#FF006E; border-bottom:3px solid #FF10F0; padding-bottom:10px; }
.faq-item { margin-bottom:10px; border:1px solid #ddd; border-radius:6px; overflow:hidden; }
.faq-question { background:#fafafa; padding:15px 20px; width:100%; text-align:left; border:none; display:block; font-weight:600; }
.faq-answer { padding:15px 20px; background:#fff; }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const button = item.querySelector('.faq-question');
    button.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(i => { i.classList.remove('active'); i.querySelector('.faq-question').setAttribute('aria-expanded','false'); });
      if (!isActive) { item.classList.add('active'); button.setAttribute('aria-expanded','true'); }
    });
    button.addEventListener('keydown', (e) => { if(e.key=='Enter'||e.key==' ') { e.preventDefault(); button.click(); } });
  });

  // Deep linking
  const hash = window.location.hash;
  if(hash) {
    const target = document.querySelector(hash);
    if(target && target.classList.contains('faq-item')) {
      target.querySelector('.faq-question').click();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  }
});
</script>

<!-- JSON-LD FAQ Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {% assign faqs_flat = site.data.faqs | map: 'questions' | flatten %}
    {% for faq in faqs_flat %}
    {
      "@type": "Question",
      "name": "{{ faq.question | escape }}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{ faq.answer | strip_html | escape }}"
      }
    }{% if forloop.last == false %},{% endif %}
    {% endfor %}
  ]
}
</script>

-->