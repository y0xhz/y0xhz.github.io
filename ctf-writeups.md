---
layout: page
title: "CTF Writeups"
subtitle: "Mission Select Screen"
description: "CTF walkthroughs, writeups, and challenge solutions by y0xhz. Casual player — writeups shared for educational purposes."
---

<div class="mission-banner">
  🎮 ARCADE MODE — CASUAL PLAYER — WRITEUPS FOR EDUCATION ONLY 🎮
</div>

> **Note:** I play CTFs for fun and learning, not active competition. You won't find rankings, leaderboard positions, or competitive stats here — just honest walkthroughs and technique breakdowns.

---

## 🔍 FILTER CONTROLS

<div class="filter-bar">
  <button class="filter-btn active" onclick="filterMissions('all')">ALL MISSIONS</button>
  <button class="filter-btn" onclick="filterMissions('htb')">HACK THE BOX</button>
  <button class="filter-btn" onclick="filterMissions('thm')">TRYHACKME</button>
  <button class="filter-btn" onclick="filterMissions('web')">WEB</button>
  <button class="filter-btn" onclick="filterMissions('crypto')">CRYPTO</button>
  <button class="filter-btn" onclick="filterMissions('pwn')">PWN</button>
  <button class="filter-btn" onclick="filterMissions('rev')">REVERSE</button>
  <button class="filter-btn" onclick="filterMissions('forensics')">FORENSICS</button>
</div>

---

## 📋 MISSION LOG

<div class="mission-card status-wip" data-tags="htb pwn">
  <div class="mission-status">🔒 UPCOMING</div>
  <h3 style="margin-top: 0.5rem;">Boot2Root: Retro Dungeon</h3>
  <p><strong>Platform:</strong> Custom · <strong>Category:</strong> Pwn / Boot2Root · <strong>Difficulty:</strong> ⭐⭐⭐⭐⭐ Legendary</p>
  <p>A 12-hour Boot2Root challenge designed with retro game aesthetics. Multi-stage exploitation chain covering web, privilege escalation, and custom binary exploitation.</p>
  <p style="margin-bottom: 0;"><em>Writeup will be published after challenge release.</em></p>
</div>

<div class="mission-card status-wip" data-tags="htb web">
  <div class="mission-status">🔒 UPCOMING</div>
  <h3 style="margin-top: 0.5rem;">Advanced Web Exploitation Series</h3>
  <p><strong>Platform:</strong> Hack The Box · <strong>Category:</strong> Web · <strong>Difficulty:</strong> ⭐⭐⭐⭐☆ Epic</p>
  <p>Deep-dive into modern web application vulnerabilities: SSRF chains, prototype pollution, JWT manipulation, and GraphQL injection techniques.</p>
  <p style="margin-bottom: 0;"><em>Writeups in draft — scheduled for Q3 2026.</em></p>
</div>

---

## 🚧 UPCOMING PROJECTS

<div class="pixel-box" style="border-style: dashed; border-color: var(--c-yellow);">
  <h3 style="color: var(--c-yellow); margin-top: 0;">🏗️ CTF PLATFORM — UNDER CONSTRUCTION</h3>
  <p>Building a custom CTF platform and challenge repository. Early stage development. Target release: late 2026.</p>
  <ul>
    <li>Retro 8-bit game aesthetic UI</li>
    <li>Docker-based challenge isolation</li>
    <li>Dynamic scoring engine</li>
    <li>Story-driven Boot2Root narratives</li>
  </ul>
</div>

---

## 📝 WRITEUP TEMPLATE

When writeups are published, they follow this structure:

```
╔════════════════════════════════════════╗
║  MISSION BRIEFING                      ║
║  ├── Target Info                       ║
║  ├── Difficulty Rating                 ║
║  └── Initial Recon Notes               ║
╠════════════════════════════════════════╣
║  PHASE 1: RECONNAISSANCE               ║
║  ├── Nmap / Service Enumeration        ║
║  └── Web App Mapping                   ║
╠════════════════════════════════════════╣
║  PHASE 2: INITIAL FOOTHOLD             ║
║  ├── Vulnerability Identification      ║
║  └── Exploitation Chain                ║
╠════════════════════════════════════════╣
║  PHASE 3: PRIVILEGE ESCALATION         ║
║  ├── Local Enumeration                 ║
║  └── Exploit / Misconfiguration        ║
╠════════════════════════════════════════╣
║  PHASE 4: POST-EXPLOITATION            ║
║  ├── Loot / Flags                      ║
║  └── Lessons Learned                   ║
╚════════════════════════════════════════╝
```

---

<script>
function filterMissions(tag) {
  const cards = document.querySelectorAll('.mission-card');
  const buttons = document.querySelectorAll('.filter-btn');
  
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  cards.forEach(card => {
    if (tag === 'all' || card.dataset.tags.includes(tag)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
</script>
