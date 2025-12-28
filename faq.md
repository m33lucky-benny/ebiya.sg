---
layout: default
title: Frequently Asked Questions | Caridina Shrimp & Custom Tanks Singapore
description: Expert answers to common questions about keeping caridina shrimp and custom shrimp tanks in Singapore. Learn water parameters, care tips, breeding, and tank setup from ebiya.sg.
permalink: /faq/
---

<div class="faq-container">
  <header class="faq-header">
    <h1>Frequently Asked Questions</h1>
    <header class="faq-header">
  <h1>Frequently Asked Questions</h1>
  <p>Everything you need to know about custom shrimp tanks, setup services, ordering, and aquarium solutions from ebiya.sg.</p>
  <p style="margin-top:1rem; font-size:0.95em;">
    For Caridina shrimp care questions (water parameters, cycling, breeding), visit our 
    <a href="/caridina-shrimp-care-guide/" style="color:#FF10F0; text-decoration:underline;">Caridina Care Guide</a>.
  </p>
</header>

    <p>Everything you need to know about Caridina shrimp care and custom shrimp tanks in Singapore.</p>
  </header>

  {% assign faq_id = 0 %}
  {% for category in site.data.faqs %}
  <section class="faq-category" id="cat-{{ forloop.index }}">
    <h2 class="category-title">{{ category.title }}</h2>

    {% for faq in category.questions %}
      {% assign faq_id = faq_id | plus: 1 %}
      <div class="faq-item" id="faq-{{ faq_id }}">
        <button class="faq-question" aria-expanded="false" aria-controls="faq-{{ faq_id }}-answer">
          <span>{{ faq.question }}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" id="faq-{{ faq_id }}-answer">
          {{ faq.answer | markdownify }}
        </div>
      </div>
    {% endfor %}
  </section>
  {% endfor %}
</div>

<style>
/* Brand colors accordion FAQ */
.faq-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
}

.faq-header h1 {
  font-size: 2.5em;
  color: #FF10F0;
  margin-bottom: 10px;
}

.faq-header p {
  font-size: 1.1em;
  color: #888888;
  margin-bottom: 30px;
}

.faq-category {
  margin-bottom: 50px;
}

.category-title {
  font-size: 1.8em;
  margin-bottom: 20px;
  color: #FF006E;
  border-bottom: 3px solid #FF10F0;
  padding-bottom: 10px;
}

.faq-item {
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
  background: #1a1a1a;
  border: 1px solid #333333;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: #FF10F0;
}

.faq-question {
  background: #1a1a1a;
  color: #ffffff;
  padding: 16px 20px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 1.05em;
  transition: background 0.2s ease;
}

.faq-question:hover {
  background: #222;
}

.faq-icon {
  color: #FF10F0;
  font-size: 1.5em;
  font-weight: 300;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  margin-left: 15px;
}

.faq-item.active .faq-icon {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  background: #2a2a2a;
  color: #ffffff;
  line-height: 1.6;
}

.faq-item.active .faq-answer {
  max-height: 1000px;
  padding: 16px 20px;
}

.faq-answer p {
  margin: 0 0 10px 0;
  color: #ffffff;
}

.faq-answer p:last-child {
  margin-bottom: 0;
}

.faq-answer a {
  color: #FF10F0;
  text-decoration: underline;
}

/* Mobile optimization */
@media (max-width: 768px) {
  .faq-container {
    padding: 15px;
  }
  
  .faq-header h1 {
    font-size: 2em;
  }
  
  .category-title {
    font-size: 1.4em;
  }
  
  .faq-question {
    padding: 14px 16px;
    font-size: 1em;
  }
  
  .faq-item.active .faq-answer {
    padding: 14px 16px;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.faq-item');
  
  items.forEach(item => {
    const button = item.querySelector('.faq-question');
    
    button.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      items.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      
      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
  
  // Deep linking support
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target && target.classList.contains('faq-item')) {
      target.classList.add('active');
      target.querySelector('.faq-question').setAttribute('aria-expanded', 'true');
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
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

