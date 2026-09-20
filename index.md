---
layout: default
title: "Index"
description: "The working notebook of y0xhz. Penetration testing, red team research, tools, and CTF notes from Indonesia."
---
<section class="intro" aria-labelledby="intro-title">
  <div class="intro-main">
    <p class="eyebrow"><span class="small-cross" aria-hidden="true">+</span> Independent notes & ongoing work</p>
    <h1 id="intro-title">Breaking systems.<br><em>Keeping notes.</em></h1>
    <p class="intro-copy">I’m y0xhz, a penetration tester and red team operator based in Indonesia. This is where I keep my tools, research, and the things I learn along the way.</p>
    <a class="text-link" href="{{ '/about' | relative_url }}">A little about me <span aria-hidden="true">↗</span></a>
  </div>
  <aside class="margin-note" aria-label="Current interests">
    <span class="note-marker" aria-hidden="true">[ In the margins ]</span>
    <p>Currently digging into<br><em>malware development<br>& cloud security.</em></p>
    <div class="note-rule"></div>
    <p class="small-copy">Also: building in Rust, designing CTF challenges, and teaching at HackTrace.</p>
    <a href="{{ '/speaking' | relative_url }}">Teaching & talks <span aria-hidden="true">↗</span></a>
  </aside>
</section>

<section class="work-section" aria-labelledby="work-title">
  <div class="section-heading">
    <h2 id="work-title"><span class="section-number">01 /</span> On the workbench</h2>
    <a href="{{ '/projects' | relative_url }}">All projects <span aria-hidden="true">↗</span></a>
  </div>
  <div class="featured-work">
    <a class="research-figure" href="{{ '/red-team-arsenal' | relative_url }}#initial-access--loaders" aria-label="Explore the Rust PE packer research">
      <div class="figure-top"><span>RESEARCH / 001</span><span>PE32+</span></div>
      <svg class="pe-diagram" viewBox="0 0 500 250" fill="none" aria-hidden="true">
        <g stroke="currentColor" stroke-width="1">
          <rect x="42" y="40" width="178" height="165"/>
          <path d="M42 76h178M42 119h178M42 162h178M282 40h176v165H282zM282 76h176M282 119h176M282 162h176" />
          <path d="M228 140h44m-8-7 8 7-8 7"/>
          <path d="m293 85 25 25m-7-25 25 25m-7-25 25 25m-7-25 25 25m-7-25 25 25m-7-25 25 25m-7-25 25 25M293 128l25 25m-7-25 25 25m-7-25 25 25m-7-25 25 25m-7-25 25 25m-7-25 25 25m-7-25 25 25" opacity=".4"/>
        </g>
        <g fill="currentColor" font-family="monospace" font-size="13">
          <text x="58" y="63">PE headers</text><text x="58" y="103">.text</text><text x="58" y="146">.rdata</text><text x="58" y="189">.data</text>
          <text x="298" y="63">PE headers</text><text x="298" y="189">loader stub</text>
          <text x="42" y="232" font-size="11">INPUT BINARY</text><text x="282" y="232" font-size="11">PACKED SECTIONS</text>
        </g>
      </svg>
      <div class="figure-bottom"><span>Section encryption / loader mechanics</span><span aria-hidden="true">↗</span></div>
    </a>
    <div class="featured-copy">
      <p class="eyebrow">Research in progress <span class="status-dot" aria-hidden="true"></span></p>
      <h3><a href="{{ '/red-team-arsenal' | relative_url }}#initial-access--loaders">Inside a<br><em>Rust PE packer.</em></a></h3>
      <p>An academic project exploring PE file structure, section encryption, and loader design. A way to understand what happens between a binary on disk and code in memory.</p>
      <p class="project-tags">Rust <span>/</span> Windows internals <span>/</span> Research</p>
      <a class="text-link" href="{{ '/red-team-arsenal' | relative_url }}#initial-access--loaders">Research details <span aria-hidden="true">↗</span></a>
    </div>
  </div>
  <div class="project-index">
    <a class="project-row" href="https://github.com/y0xhz/Obsidian-OSCP-Notes">
      <span class="row-number">02</span><span class="row-title">Obsidian OSCP Notes<span>A place for the methodology, commands, and details worth keeping.</span></span><span class="row-meta">Knowledge base</span><span class="row-arrow" aria-hidden="true">↗</span>
    </a>
    <a class="project-row" href="https://github.com/y0xhz/ESP32-EvilTwin">
      <span class="row-number">03</span><span class="row-title">ESP32 EvilTwin<span>Wireless assessment and awareness training on a small piece of hardware.</span></span><span class="row-meta">Hardware / Wireless</span><span class="row-arrow" aria-hidden="true">↗</span>
    </a>
    <a class="project-row" href="{{ '/ctf-writeups' | relative_url }}">
      <span class="row-number">04</span><span class="row-title">Boot2Root challenges<span>Building multi-stage labs with a story to work through.</span></span><span class="row-meta">Challenge design</span><span class="row-arrow" aria-hidden="true">↗</span>
    </a>
  </div>
</section>

<section class="notebook-section" aria-labelledby="notebook-title">
  <div class="section-heading">
    <h2 id="notebook-title"><span class="section-number">02 /</span> The notebook</h2>
    <a href="{{ '/blog' | relative_url }}">Journal <span aria-hidden="true">↗</span></a>
  </div>
  <div class="notebook-grid">
    <div class="notebook-lead">
      <p class="eyebrow">CTF notes / 2026</p>
      <h3><a href="{{ '/ctf-writeups' | relative_url }}">HackTheBox<br>Business CTF.</a></h3>
      <p>Full pwn, coding, and OSINT. I’m working through my notes from the event and turning them into walkthroughs.</p>
      <a class="text-link" href="{{ '/ctf-writeups' | relative_url }}">See the writeup log <span aria-hidden="true">↗</span></a>
      <span class="draft-note">Walkthroughs in progress</span>
    </div>
    <div class="notebook-side">
      <p class="eyebrow">Other things I’m working on</p>
      <a class="note-link" href="{{ '/ai-skills' | relative_url }}"><span>AI-assisted security workflows<small>Tooling experiments · In development</small></span><span aria-hidden="true">↗</span></a>
      <a class="note-link" href="{{ '/blog' | relative_url }}"><span>AWS & mobile pentest notes<small>Methods and working drafts</small></span><span aria-hidden="true">↗</span></a>
      <p class="personal-note">CTFs are how I learn.<br>No leaderboard, just the process.</p>
    </div>
  </div>
</section>

<section class="contact-strip" aria-labelledby="contact-title">
  <p class="eyebrow">Compare notes</p>
  <h2 id="contact-title">Have something<br><em>worth digging into?</em></h2>
  <div><p>Security assessments, a training session,<br>or an interesting technical problem.</p><a class="text-link" href="mailto:{{ site.author.email }}">Let’s talk <span aria-hidden="true">↗</span></a></div>
</section>
