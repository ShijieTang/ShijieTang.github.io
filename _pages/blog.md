---
layout: archive
title: "Blog"
permalink: /blog/
author_profile: true
---

Occasional thoughts on research, machine learning, biology, and things I find interesting.

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}
