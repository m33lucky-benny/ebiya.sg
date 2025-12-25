1️⃣ _config.yml (required for Minima)
```
title: ebiyaSG
tagline: Premium Caridina Shrimp Breeder Singapore
description: >
  Singapore-based Caridina shrimp breeder offering premium shrimp,
  custom tanks, and expert care guides.
url: "https://ebiya.sg"

theme: minima

author:
  name: ebiyaSG
  email: hello@ebiya.sg

# Minima settings
minima:
  skin: classic # or dark / solarized / auto
  social_links:
    - platform: instagram
      user_url: https://instagram.com/ebiyaSG
    - platform: github
      user_url: https://github.com/ebiyaSG

# Plugins supported by GitHub Pages
plugins:
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-feed

```

2️⃣ Home page front matter (index.md or index.html)
```
---
layout: home
title: Home
description: Premium Caridina shrimp breeder in Singapore
---
layout: home is special to Minima and enables the homepage layout.
```

3️⃣ Standard page (about.md, membership.md, etc.)
```
---
layout: page
title: About ebiyaSG
permalink: /about/
description: Learn about Singapore’s trusted Caridina shrimp breeder
---
```
4️⃣ Blog post front matter (_posts/2025-01-01-my-post.md)
```
---
layout: post
title: "How to Set Up a Caridina Shrimp Tank in Singapore"
date: 2025-01-01 10:00:00 +0800
categories: [caridina, shrimp-tank]
tags: [shrimp soil, RO water, Taiwan bee]
description: Step-by-step Caridina shrimp tank setup for Singapore conditions
---
```
5️⃣ SEO-optimized page (recommended for your shrimp site)
---
layout: page
title: "Caridina Shrimp Tank Builder Singapore"
permalink: /tank-builder/
description: Build a stable Caridina shrimp tank in Singapore with soil, filtration, and stocking guidance.
keywords:
  - caridina shrimp singapore
  - shrimp tank setup
  - crystal red shrimp
  - taiwan bee shrimp
---
keywords will be picked up by jekyll-seo-tag.

6️⃣ Hidden utility page (no nav, no SEO indexing)
---
layout: page
title: Internal Test Page
permalink: /_test/
sitemap: false
robots: noindex, nofollow
---
7️⃣ Add this to <head> (once)
Make sure this is inside your layout (_layouts/default.html):

{% seo %}
This enables:

OpenGraph

Google SEO

Social previews

Structured metadata

✅ Minima Front Matter Rules (Important)
layout: home → homepage

layout: page → normal pages

layout: post → blog posts

title and description strongly recommended

permalink avoids ugly URLs

If you want, I can:

Add LocalBusiness schema for Singapore 🏙️

Customize Minima navigation

Convert your shrimp pages to HowTo schema

Optimize Minima for mobile shrimp buyers

Just tell me 👍




No file chosenNo file chosen
ChatGPT can make mistakes. Check important info. See Cookie Preferences.


