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
  <button class="filter-btn" onclick="filterMissions('htb')">HACKTHEBOX</button>
  <button class="filter-btn" onclick="filterMissions('htb-business-2026')">HTB BUSINESS 2026</button>
  <button class="filter-btn" onclick="filterMissions('full-pwn')">FULL PWN</button>
  <button class="filter-btn" onclick="filterMissions('coding')">CODING</button>
  <button class="filter-btn" onclick="filterMissions('osint')">OSINT</button>
  <button class="filter-btn" onclick="filterMissions('thm')">TRYHACKME</button>
  <button class="filter-btn" onclick="filterMissions('web')">WEB</button>
  <button class="filter-btn" onclick="filterMissions('pwn')">PWN</button>
  <button class="filter-btn" onclick="filterMissions('rev')">REVERSE</button>
  <button class="filter-btn" onclick="filterMissions('forensics')">FORENSICS</button>
</div>

---

## 📋 MISSION LOG

<div class="mission-card status-wip" data-tags="htb htb-business-2026 full-pwn coding osint">
  <div class="mission-status">🚧 WIP</div>
  <h3 style="margin-top: 0.5rem;">Hackthebox Business CTF 2026</h3>
  <p><strong>Event:</strong> Hackthebox Business 2026 · <strong>Platform:</strong> Hackthebox</p>
  <p><strong>Categories:</strong> Full Pwn · Coding · OSINT</p>
  <p>Casual participation in the Hackthebox Business CTF 2026. Writeups covering challenges across full pwn, coding, and OSINT categories. Focus on technique breakdowns and educational value.</p>
  <p style="margin-bottom: 0;"><em>Writeups in progress — check back soon.</em></p>
</div>

---

## 🚧 UPCOMING PROJECTS

<div class="pixel-box" style="border-style: dashed; border-color: var(--c-yellow);">
  <h3 style="color: var(--c-yellow); margin-top: 0;">🏗️ CTF CHALLENGE — UNDER CONSTRUCTION</h3>
  <p>Building a custom and challenge repository.</p>
</div>

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
