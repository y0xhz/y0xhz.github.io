---
layout: page
title: "Working notes."
kicker: "The journal"
subtitle: "Research and methods I’m writing up. These are drafts, with articles to follow."
description: "Planned articles and research notes on Rust, cloud security, mobile testing, and CTF design by y0xhz."
---
{% if site.posts.size > 0 %}
<div class="entry-list">
  {% for post in site.posts %}
  <article class="entry">
    <div class="entry-meta">{{ post.date | date: '%d %b %Y' }}</div>
    <div><h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2><p>{{ post.excerpt | strip_html | truncatewords: 35 }}</p><a class="text-link" href="{{ post.url | relative_url }}">Read article <span aria-hidden="true">↗</span></a></div>
  </article>
  {% endfor %}
</div>
<h2>On the writing desk</h2>
{% else %}
<p class="notice">No published articles yet. Below is the current writing list. For available code and study material, see <a href="{{ '/projects' | relative_url }}">projects</a>.</p>
{% endif %}
<div class="entry-list">
  <article class="entry">
    <div class="entry-meta">Rust / Windows internals<span>Planned article</span></div>
    <div><h2>Building a Rust PE packer</h2><p>Packer architecture, section encryption, and loader design. Notes from an academic research project.</p></div>
  </article>
  <article class="entry">
    <div class="entry-meta">Cloud security / AWS<span>Planned article</span></div>
    <div><h2>AWS cloud pentesting playbook</h2><p>IAM enumeration, S3 permissions, Lambda, and privilege escalation paths during cloud assessments.</p></div>
  </article>
  <article class="entry">
    <div class="entry-meta">Android / iOS<span>Planned article</span></div>
    <div><h2>Mobile app pentest methodology</h2><p>RASP and certificate pinning, native library analysis, and runtime instrumentation with Frida.</p></div>
  </article>
  <article class="entry">
    <div class="entry-meta">CTF / Education<span>Planned article</span></div>
    <div><h2>Designing Boot2Root challenges</h2><p>Building a challenge that teaches something: difficulty, storytelling, and the moment a solution starts making sense.</p></div>
  </article>
</div>
