---
layout: homepage
title: Blog
permalink: /blog/
---

## All Blog Posts

<div class="blog-archive-list">
{% assign blog_posts = site.blog | sort: "date" | reverse %}
{% for post in blog_posts %}
  <article class="blog-archive-item">
    <p class="blog-archive-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time></p>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p>{{ post.description }}</p>
    {% if post.keywords and post.keywords.size > 0 %}
    <p class="blog-archive-keywords">Keywords: {{ post.keywords | join: ", " }}</p>
    {% endif %}
  </article>
{% endfor %}
</div>

<p><a href="{{ '/' | relative_url }}">&larr; back to {{ site.title }}</a></p>
