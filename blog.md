---
layout: default
title: Caridina Shrimp Care Singapore | Expert Guides | ebiya.sg
description: Expert Caridina shrimp care guides for Singapore breeders. Tank setup, water parameters, equipment
tagline: Your trusted resource for keeping thriving Caridina shrimp in Singapore's tropical climate
permalink: /blog/
---

<div class="container">
  <h1>Caridina Shrimp Care Singapore | Expert Guides | ebiya.sg</h1>
  <p>Guides, builds, and breeder notes.</p>
  
  <p class="tagline" style="border-bottom: 2px dotted #ccc; padding-bottom: 15px; margin-bottom: 30px; color: #666; font-style: italic;">
	{{ page.tagline | default: site.tagline }}
</p>

  <div class="blog-list">
    {% for post in site.posts %}
      <article class="post-card" style="border: 2px dotted #ff69b4; padding: 20px; margin-bottom: 20px; border-radius: 8px;">
        <h2>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </h2>

        <div class="post-meta">
          {{ post.date | date: "%b %d, %Y" }}
        </div>

        <p class="post-excerpt">
          {{ post.excerpt }}
        </p>

        <a href="{{ post.url }}">Read article »</a>
      </article>
    {% endfor %}
  </div>
</div>


