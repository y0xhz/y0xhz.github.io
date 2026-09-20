---
layout: default
title: "Index"
description: "The working notebook of y0xhz. Penetration testing, red team research, tools, and CTF notes from Indonesia."
---
<section class="intro" aria-labelledby="intro-title">
  <div class="intro-main">
    <div class="arcade-only arcade-label" aria-hidden="true"><span>PLAYER 01</span><span>y0xhz’s world</span></div>
    <p class="eyebrow"><span class="small-cross" aria-hidden="true">+</span> Independent notes & ongoing work</p>
    <h1 id="intro-title">Breaking systems.<br><em>Keeping notes.</em></h1>
    <p class="intro-copy">I’m y0xhz, a penetration tester and red team operator based in Indonesia. This is where I keep my tools, research, and the things I learn along the way.</p>
    <a class="text-link" href="{{ '/about' | relative_url }}">A little about me <span aria-hidden="true">↗</span></a>
  </div>
  <aside class="margin-note" aria-label="Current interests">
    <div class="arcade-only arcade-scene" aria-hidden="true">
      <svg viewBox="0 0 192 136" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" focusable="false">
        <path fill="#30264c" d="M0 0h192v136H0z"/>
        <path fill="#fff0c5" d="M17 15h3v3h-3zm37 13h2v2h-2zm73-12h3v3h-3zm41 28h2v2h-2zM93 9h2v2h-2z"/>
        <path fill="#93d7ff" d="M146 12h16v4h4v16h-4v4h-16v-4h-4V16h4z"/>
        <path fill="#30264c" d="M154 12h8v4h4v16h-12v-4h-4V16h4z"/>
        <path fill="#463a63" d="M0 80h12V60h20v8h12v26h18V74h18v22h26V76h12V56h20v16h18v18h16V62h20v58H0z"/>
        <path fill="#171329" d="M0 112h192v24H0z"/>
        <path fill="#88e0b2" d="M0 108h192v5H0z"/>
        <path fill="#558775" d="M0 113h192v4H0z"/>
        <path fill="#463a63" d="M6 124h8v4H6zm24-4h4v4h-4zm26 7h8v4h-8zm58-6h8v4h-8zm34 6h4v4h-4zm24-5h8v4h-8z"/>
        <path fill="#ffe082" d="M30 55h8v3h3v12h-3v3h-8v-3h-3V58h3zm18-12h8v3h3v12h-3v3h-8v-3h-3V46h3z"/>
        <path fill="#b77c40" d="M33 58h2v12h-2zm18-12h2v12h-2z"/>
        <path fill="#171329" d="M81 54h22v4h5v22h-5v4H81v-4h-5V58h5z"/>
        <path fill="#ff9787" d="M81 62h22v17H81z"/>
        <path fill="#718ada" d="M78 54h25v5H78zM76 59h35v5H76z"/>
        <path fill="#171329" d="M95 67h4v4h-4z"/>
        <path fill="#93d7ff" d="M82 82h19v15H82z"/>
        <path fill="#718ada" d="M82 93h8v11h-8zm12 0h8v11h-8z"/>
        <path fill="#fff0c5" d="M78 104h13v4H78zm16 0h13v4H94z"/>
        <path fill="#ff9787" d="M77 85h5v9h-5zm24 0h5v9h-5z"/>
        <path fill="#ffe082" d="M140 87h24v4h4v17h-32V91h4z"/>
        <path fill="#b77c40" d="M138 95h28v3h-28zm11-5h5v13h-5z"/>
        <path fill="#fff0c5" d="M149 95h5v4h-5z"/>
      </svg>
      <span class="arcade-caption">SIDE QUEST IN PROGRESS</span>
    </div>
    <span class="note-marker" aria-hidden="true">[ In the margins ]</span>
    <p>Currently digging into<br><em>malware development<br>& cloud security.</em></p>
    <div class="note-rule"></div>
    <p class="small-copy">Also: building in Rust, designing CTF challenges, and teaching at HackTrace.</p>
    <a href="{{ '/speaking' | relative_url }}">Teaching & talks <span aria-hidden="true">↗</span></a>
  </aside>
</section>

<nav class="arcade-only arcade-menu" aria-label="Arcade shortcuts">
  <a href="{{ '/projects' | relative_url }}"><span aria-hidden="true">▶</span> Select a project</a>
  <a href="{{ '/ctf-writeups' | relative_url }}"><span aria-hidden="true">◆</span> Open quest log</a>
  <a href="{{ '/about' | relative_url }}"><span aria-hidden="true">✚</span> Player profile</a>
</nav>

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
