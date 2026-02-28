---
layout: page
title: Photos
permalink: /photos/
description: A growing collection of photos by category.
nav: false
display_categories: [work, fun, nature, food]
horizontal: false
---

<!-- pages/photos.md -->
<div class="photos">
{% if page.display_categories and page.display_categories.size > 0 %}
  <!-- Display photos by category, sorted by date (newest first) -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_photos = site.photos | where_exp: "item", "item.categories contains category" %}
  {% assign sorted_photos = categorized_photos | sort: "date" | reverse %}
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for photo in sorted_photos %}
      {% include photos.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for photo in sorted_photos %}
      {% include photos.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display all photos sorted by date (newest first) -->

{% assign sorted_photos = site.photos | sort: "date" | reverse %}

<div class="row row-cols-1 row-cols-md-3">
  {% for photo in sorted_photos %}
    {% include photos.liquid %}
  {% endfor %}
</div>
{% endif %}
</div>
