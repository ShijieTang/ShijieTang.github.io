---
layout: single
title: "Photography"
permalink: /photography/
author_profile: true
---

I shoot with a Canon G7X Mark III. This is a small visual journal of trips, night skies, coastlines, and candid moments.

<div class="story-gallery">
  <nav class="story-gallery__locations" aria-label="Photo locations">
    {% for trip in site.data.gallery %}
      <a href="#{{ trip.location | slugify }}">{{ trip.location }}</a>
    {% endfor %}
  </nav>

  {% for trip in site.data.gallery %}
    <section class="story-gallery__trip" id="{{ trip.location | slugify }}">
      <div class="story-gallery__intro">
        <a class="story-gallery__cover" href="{{ trip.cover | relative_url }}">
          <img src="{{ trip.cover | relative_url }}" alt="{{ trip.title }}" draggable="false">
        </a>
        <div class="story-gallery__copy">
          <p class="story-gallery__kicker">{{ trip.title }}{% if trip.date %} / {{ trip.date }}{% endif %}</p>
          <h2>{{ trip.location }}</h2>
          <p>{{ trip.summary }}</p>
          {% if trip.companions %}
            <p class="story-gallery__companions">With {{ trip.companions }}</p>
          {% endif %}
        </div>
      </div>

      <div class="story-gallery__grid">
        {% for photo in trip.photos %}
          <a class="story-gallery__photo" href="{{ photo.path | relative_url }}">
            <img src="{{ photo.path | relative_url }}" alt="{{ photo.alt }}" draggable="false">
          </a>
        {% endfor %}
      </div>
    </section>
  {% endfor %}
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    var gallery = document.querySelector(".story-gallery");
    if (!gallery) {
      return;
    }

    document.addEventListener("contextmenu", function(event) {
      if (event.target.closest(".story-gallery img, .mfp-img")) {
        event.preventDefault();
      }
    });

    document.addEventListener("dragstart", function(event) {
      if (event.target.closest(".story-gallery img, .mfp-img")) {
        event.preventDefault();
      }
    });
  });
</script>
