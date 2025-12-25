---
layout: page
title: "Frequently Asked Questions | Caridina Shrimp & Custom Tanks Singapore"
description: "Expert answers to common questions about keeping caridina shrimp and custom shrimp tanks in Singapore. Learn water parameters, care tips, breeding, and tank setup from ebiya.sg."
permalink: /new-faq/
author: ebiya.sg
robots: index, follow
lang: en-SG
---
<div class="faq-container">
  <header class="faq-header">
    <h1>Frequently Asked Questions</h1>
    <p>Everything you need to know about caridina shrimp care and custom shrimp tanks in Singapore.</p>
  </header>

  <section class="faq-category">
    <h2 class="category-title">Caridina Shrimp Care</h2>

    <article class="faq-item">
      <button class="faq-question" aria-expanded="false" aria-controls="answer-1">
        <h3>What are caridina shrimp and why are they popular?</h3>
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" id="answer-1" role="region">
        <p>Caridina shrimp are freshwater dwarf shrimp known for their stunning colors and patterns, including popular varieties like Crystal Red Shrimp (CRS), Crystal Black Shrimp (CBS), and Taiwan Bee shrimp. They are highly sought after for their beauty, active behavior, and fascinating breeding potential.</p>
        <p>These shrimp spend their days grazing on biofilm, exploring plants, and displaying colors from deep reds and blacks to striking blues and golds. Their peaceful nature and small size make them perfect for nano aquariums and planted tanks.</p>
      </div>
    </article>

    <article class="faq-item">
      <button class="faq-question" aria-expanded="false" aria-controls="answer-2">
        <h3>Can Caridina shrimp survive in Singapore without a chiller?</h3>
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" id="answer-2" role="region">
        <p>It is challenging but possible with the right approach. Caridina shrimp prefer 20–24°C, while Singapore rooms often sit at 28–32°C. Long term, serious keeping usually requires either a chiller or a consistently air-conditioned room.</p>
        <p>Fans and smart tank placement can shave off a few degrees, but they are often not enough during hotter periods. For stable breeding colonies, plan for active cooling rather than relying only on ambient room temperature.</p>
      </div>
    </article>

    <!-- Add more <article class="faq-item"> blocks here for each question/answer -->
  </section>

  <section class="faq-category">
    <h2 class="category-title">Custom Shrimp Tanks</h2>

    <article class="faq-item">
      <button class="faq-question" aria-expanded="false" aria-controls="answer-11">
        <h3>What makes a good shrimp tank?</h3>
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" id="answer-11" role="region">
        <p>A good shrimp tank prioritizes water stability, grazing surface area, and safety for shrimplets. Wider tanks offer more usable floor space than tall, narrow tanks.</p>
        <p>Use gentle filtration, plenty of plants and moss, and an active buffering substrate if you are keeping caridina. Stable parameters matter more than fancy equipment.</p>
      </div>
    </article>
  </section>
</div>

<!-- css -->

<style>
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: #000000;
    color: #e5e5e5;
  }

  .faq-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 20px 60px;
  }

  .faq-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .faq-header h1 {
    color: #ff10f0;
    font-size: 2.3rem;
    margin-bottom: 10px;
  }

  .faq-header p {
    color: #d0d0d0;
    font-size: 1rem;
    line-height: 1.7;
  }

  .faq-category {
    margin-bottom: 40px;
  }

  .category-title {
    color: #ff006e;
    font-size: 1.6rem;
    margin-bottom: 20px;
    padding-bottom: 8px;
    border-bottom: 3px solid #ff10f0;
  }

  .faq-item {
    margin-bottom: 12px;
    border-radius: 10px;
    background: #0b0d10;
    border: 1px solid #242736;
    overflow: hidden;
    transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.15s ease;
  }

  .faq-item:hover {
    border-color: #ff10f0;
    box-shadow: 0 10px 30px rgba(255, 16, 240, 0.18);
    transform: translateY(-1px);
  }

  .faq-question {
    width: 100%;
    border: none;
    background: #0f1117;
    color: #f5f5f5;
    padding: 16px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    text-align: left;
    gap: 12px;
  }

  .faq-question h3 {
    font-size: 1rem;
    margin: 0;
    font-weight: 600;
  }

  .faq-icon {
    font-size: 1.5rem;
    color: #ff10f0;
    transition: transform 0.25s ease;
    flex-shrink: 0;
  }

  .faq-item.active .faq-icon {
    transform: rotate(45deg);
  }

  .faq-answer {
    max-height: 0;
    overflow: hidden;
    padding: 0 18px;
    background: #05060a;
    transition: max-height 0.35s ease, padding-top 0.25s ease, padding-bottom 0.25s ease;
  }

  .faq-item.active .faq-answer {
    padding-top: 14px;
    padding-bottom: 16px;
  }

  .faq-answer p {
    margin: 0 0 10px;
    color: #d4d4d4;
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .faq-answer ul {
    padding-left: 18px;
    margin: 6px 0 10px;
  }

  .faq-answer li {
    margin-bottom: 6px;
    color: #d4d4d4;
    font-size: 0.93rem;
  }

  .faq-question:focus-visible {
    outline: 3px solid #ff10f0;
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    .faq-container {
      padding: 30px 14px 40px;
    }

    .faq-header h1 {
      font-size: 1.8rem;
    }

    .category-title {
      font-size: 1.4rem;
    }

    .faq-question {
      padding: 14px 14px;
    }

    .faq-question h3 {
      font-size: 0.97rem;
    }
  }

  @media (max-width: 480px) {
    .faq-header h1 {
      font-size: 1.5rem;
    }

    .faq-header p {
      font-size: 0.9rem;
    }

    .faq-answer p,
    .faq-answer li {
      font-size: 0.9rem;
    }
  }
</style>

<!-- js -->

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
      const button = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      button.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all
        items.forEach(i => {
          const b = i.querySelector('.faq-question');
          const a = i.querySelector('.faq-answer');
          i.classList.remove('active');
          b.setAttribute('aria-expanded', 'false');
          a.style.maxHeight = null;
        });

        // Toggle current
        if (!isActive) {
          item.classList.add('active');
          button.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  });
</script>

