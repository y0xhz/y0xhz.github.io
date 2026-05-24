---
layout: page
title: "Red Team Arsenal"
subtitle: "<span class='retro-only'>Inventory Screen / Weapon Shop</span><span class='pro-only'>Red Team Arsenal</span>"
description: "Ethical offensive security tools, simulators, and research projects by y0xhz. For authorized testing only."
---

<div class="warning-screen">
  <h3 class="retro-only">⚠️ WARNING SCREEN</h3>
  <h3 class="pro-only">⚠️ Ethical Use Disclaimer</h3>
  <p><strong>FOR AUTHORIZED TESTING ONLY</strong></p>
  <p style="font-size: 0.8rem; color: var(--text-muted);" class="retro-only">CHEAT CODES DON'T WORK IN REAL LIFE</p>
  <p style="font-size: 0.85rem; margin-top: 1rem;">
    All tools listed here are designed for <strong>legal security assessments, red team exercises, and educational research</strong>.
    Using these tools without explicit authorization is illegal and unethical.<br><br>
    Every item includes a <strong><span class="retro-only">Boss Strategy Guide</span><span class="pro-only">Defense Guide</span></strong> — defensive recommendations to detect and mitigate the technique.
  </p>
</div>

---

## <span class="retro-only">🗡️ INITIAL ACCESS & LOADERS</span><span class="pro-only">Initial Access & Loaders</span>

<div class="inventory-grid">
  <div class="inventory-card" data-rarity="Legendary">
    <div class="item-type"><span class="retro-only">Weapon · </span>PE Packer / Loader</div>
    <h4>Rust PE Packer</h4>
    <p>Custom PE packer built in Rust with novel cryptographic implementation. Designed for academic research into packer architecture, section encryption, and loader mechanics.</p>
    <p><strong>Intended Use:</strong> Malware analysis research, EDR testing in isolated environments, university project demonstration.</p>
    <p><strong>Safety:</strong> Sandbox-safe. No C2 embedded. Decryption keys included in source. Marked as PoC/Simulator.</p>
    <p><strong>License:</strong> MIT (Research/Educational)</p>
    <p style="margin-bottom: 0;"><a href="https://github.com/y0xhz">→ Repository (Coming Soon)</a></p>
  </div>

  <div class="inventory-card" data-rarity="Rare">
    <div class="item-type"><span class="retro-only">Weapon · </span>Wireless Access Point</div>
    <h4>ESP32 EvilTwin</h4>
    <p>Automated Evil Twin access point deployment on ESP32. Captures credentials from users connecting to rogue APs. Useful for wireless security awareness training.</p>
    <p><strong>Intended Use:</strong> Authorized wireless pentests, security awareness demonstrations.</p>
    <p><strong>Safety:</strong> Hardware-limited range. Designed for controlled lab environments.</p>
    <p><strong>License:</strong> Open Source</p>
    <p style="margin-bottom: 0;"><a href="https://github.com/y0xhz/ESP32-EvilTwin">→ Repository</a></p>
  </div>
</div>

<div class="pixel-box" style="border-color: var(--accent); margin-top: 1.5rem;">
  <h4 style="color: var(--accent); margin-top: 0;" class="retro-only">🛡️ Boss Strategy Guide — Initial Access</h4>
  <h4 style="color: var(--accent); margin-top: 0;" class="pro-only">🛡️ Defense Guide — Initial Access</h4>
  <ul style="margin-bottom: 0;">
    <li>Deploy network segmentation to limit lateral movement from compromised endpoints.</li>
    <li>Use wireless intrusion detection systems (WIDS) to detect rogue access points.</li>
    <li>Enforce certificate-based WPA-Enterprise to prevent Evil Twin attacks.</li>
    <li>Monitor for unknown PE packers and suspicious section entropy via EDR/XDR.</li>
  </ul>
</div>

---

## <span class="retro-only">🛡️ DEFENSE EVASION</span><span class="pro-only">Defense Evasion</span>

<div class="inventory-grid">
  <div class="inventory-card" data-rarity="Legendary">
    <div class="item-type"><span class="retro-only">Armor · </span>EDR Evasion Research</div>
    <h4>Rust Packer — EDR Evasion Module</h4>
    <p>Research module exploring modern EDR telemetry blind spots. Covers API unhooking, indirect syscalls, and manual mapping techniques implemented in Rust.</p>
    <p><strong>Intended Use:</strong> Red team exercise preparation, EDR efficacy testing in isolated labs, research publication.</p>
    <p><strong>Safety:</strong> No persistence mechanisms. Requires manual compilation and explicit target configuration.</p>
    <p><strong>License:</strong> MIT (Research/Educational)</p>
    <p style="margin-bottom: 0;"><a href="https://github.com/y0xhz">→ Repository (Coming Soon)</a></p>
  </div>

  <div class="inventory-card" data-rarity="Epic">
    <div class="item-type"><span class="retro-only">Armor · </span>Process Injection Simulator</div>
    <h4>Process Injection Lab</h4>
    <p>Collection of common process injection techniques implemented for detection engineering practice. Includes DLL injection, APC injection, and thread hijacking simulators.</p>
    <p><strong>Intended Use:</strong> Blue team training, detection rule validation, SIEM tuning.</p>
    <p><strong>Safety:</strong> Self-targeting only. Injects into spawned dummy processes.</p>
    <p><strong>License:</strong> MIT</p>
    <p style="margin-bottom: 0;"><a href="https://github.com/y0xhz">→ Repository (Coming Soon)</a></p>
  </div>
</div>

<div class="pixel-box" style="border-color: var(--accent); margin-top: 1.5rem;">
  <h4 style="color: var(--accent); margin-top: 0;" class="retro-only">🛡️ Boss Strategy Guide — Defense Evasion</h4>
  <h4 style="color: var(--accent); margin-top: 0;" class="pro-only">🛡️ Defense Guide — Defense Evasion</h4>
  <ul style="margin-bottom: 0;">
    <li>Enable kernel-level ETW (Event Tracing for Windows) and Tamper Protection on EDR agents.</li>
    <li>Monitor for abnormal memory allocations with RWX permissions in legitimate processes.</li>
    <li>Use Attack Surface Reduction (ASR) rules and Windows Defender Application Control (WDAC).</li>
    <li>Implement behavioral analytics to catch syscall anomalies and unhooking patterns.</li>
  </ul>
</div>

---

## <span class="retro-only">⚗️ POST-EXPLOITATION SIMULATORS</span><span class="pro-only">Post-Exploitation Simulators</span>

<div class="inventory-grid">
  <div class="inventory-card" data-rarity="Rare">
    <div class="item-type"><span class="retro-only">Potion · </span>Lab Only</div>
    <h4>Ransomware Simulator</h4>
    <p>Controlled ransomware simulator for incident response drills. Encrypts files in a designated sandbox directory with a recoverable key. Designed for tabletop exercises and SOC readiness testing.</p>
    <p><strong>Intended Use:</strong> IR tabletop exercises, SOC detection validation, recovery procedure testing.</p>
    <p><strong>Safety:</strong> Sandbox-directory-only. Master decryption key always available. No network propagation.</p>
    <p><strong>License:</strong> MIT (Lab Use Only)</p>
    <p style="margin-bottom: 0;"><a href="https://github.com/y0xhz">→ Repository (Coming Soon)</a></p>
  </div>

  <div class="inventory-card" data-rarity="Common">
    <div class="item-type"><span class="retro-only">Potion · </span>Lab Only</div>
    <h4>Active Directory Attack Lab</h4>
    <p>Automated AD misconfiguration deployment for training environments. Includes common attack paths: Kerberoasting, AS-REP Roasting, ACL abuse, and DCSync prerequisites.</p>
    <p><strong>Intended Use:</strong> Internal red team training, certification prep (OSCP, CRTO), detection engineering.</p>
    <p><strong>Safety:</strong> Vagrant/VM-based. Isolated network. No external exposure.</p>
    <p><strong>License:</strong> MIT</p>
    <p style="margin-bottom: 0;"><a href="https://github.com/y0xhz">→ Repository (Coming Soon)</a></p>
  </div>
</div>

<div class="pixel-box" style="border-color: var(--accent); margin-top: 1.5rem;">
  <h4 style="color: var(--accent); margin-top: 0;" class="retro-only">🛡️ Boss Strategy Guide — Post-Exploitation</h4>
  <h4 style="color: var(--accent); margin-top: 0;" class="pro-only">🛡️ Defense Guide — Post-Exploitation</h4>
  <ul style="margin-bottom: 0;">
    <li>Maintain offline, immutable backups tested on a regular schedule.</li>
    <li>Deploy canary tokens and honey files to detect early-stage encryption behavior.</li>
    <li>Implement privileged access management (PAM) and Just-in-Time (JIT) admin elevation.</li>
    <li>Monitor for Kerberoasting indicators (TGS-REQ with RC4 encryption) and anomalous LDAP queries.</li>
  </ul>
</div>

---

## <span class="retro-only">☁️ CLOUD RED TEAM TOOLS</span><span class="pro-only">Cloud Red Team Tools</span>

<div class="inventory-grid">
  <div class="inventory-card" data-rarity="Epic">
    <div class="item-type"><span class="retro-only">Cloud Power-Up · </span>AWS/GCP</div>
    <h4>Cloud Misconfiguration Scanner</h4>
    <p>Offensive cloud security assessment toolkit for AWS and GCP. Enumerates IAM policies, S3 bucket permissions, Lambda vulnerabilities, and GCP service account misconfigurations.</p>
    <p><strong>Intended Use:</strong> Authorized cloud pentests, cloud security assessments, compliance gap analysis.</p>
    <p><strong>Safety:</strong> Read-only enumeration by default. Explicit flags required for any write operations.</p>
    <p><strong>License:</strong> MIT</p>
    <p style="margin-bottom: 0;"><a href="https://github.com/y0xhz">→ Repository (Coming Soon)</a></p>
  </div>

  <div class="inventory-card" data-rarity="Rare">
    <div class="item-type"><span class="retro-only">Cloud Power-Up · </span>Container</div>
    <h4>Kubernetes Attack Toolkit</h4>
    <p>Container escape and Kubernetes privilege escalation testing framework. Identifies overly permissive RBAC, exposed dashboard, and insecure pod security policies.</p>
    <p><strong>Intended Use:</strong> Kubernetes security audits, DevSecOps pipeline integration.</p>
    <p><strong>Safety:</strong> Requires cluster-admin or explicit namespace permissions to run.</p>
    <p><strong>License:</strong> MIT</p>
    <p style="margin-bottom: 0;"><a href="https://github.com/y0xhz">→ Repository (Coming Soon)</a></p>
  </div>
</div>

<div class="pixel-box" style="border-color: var(--accent); margin-top: 1.5rem;">
  <h4 style="color: var(--accent); margin-top: 0;" class="retro-only">🛡️ Boss Strategy Guide — Cloud Defense</h4>
  <h4 style="color: var(--accent); margin-top: 0;" class="pro-only">🛡️ Defense Guide — Cloud Defense</h4>
  <ul style="margin-bottom: 0;">
    <li>Enforce least-privilege IAM policies with regular access reviews.</li>
    <li>Enable CloudTrail/Cloud Audit Logs with tamper-proof storage.</li>
    <li>Use SCPs (Service Control Policies) and Organization Policies to restrict risky actions.</li>
    <li>Implement pod security standards and network policies in Kubernetes clusters.</li>
  </ul>
</div>

---

## <span class="retro-only">📱 MOBILE RED TEAM</span><span class="pro-only">Mobile Red Team</span>

<div class="inventory-grid">
  <div class="inventory-card" data-rarity="Legendary">
    <div class="item-type"><span class="retro-only">Mobile Item · </span>Android</div>
    <h4>Mobile Pentest Framework</h4>
    <p>Comprehensive Android penetration testing framework covering RASP bypass, SSL pinning circumvention, native library analysis (JNI), and runtime instrumentation using Frida.</p>
    <p><strong>Intended Use:</strong> Authorized mobile application security assessments, RASP efficacy testing.</p>
    <p><strong>Safety:</strong> Requires rooted test device or debug build. No distribution mechanism.</p>
    <p><strong>License:</strong> MIT</p>
    <p style="margin-bottom: 0;"><a href="https://github.com/y0xhz">→ Repository (Coming Soon)</a></p>
  </div>

  <div class="inventory-card" data-rarity="Rare">
    <div class="item-type"><span class="retro-only">Mobile Item · </span>iOS/Android</div>
    <h4>Mobile Traffic Interceptor</h4>
    <p>Automated setup for intercepting mobile application traffic in pentest environments. Handles certificate pinning bypass, proxy auto-configuration, and binary patching.</p>
    <p><strong>Intended Use:</strong> Mobile API security testing, traffic analysis during assessments.</p>
    <p><strong>Safety:</strong> Local proxy only. No remote data exfiltration.</p>
    <p><strong>License:</strong> MIT</p>
    <p style="margin-bottom: 0;"><a href="https://github.com/y0xhz">→ Repository (Coming Soon)</a></p>
  </div>
</div>

<div class="pixel-box" style="border-color: var(--accent); margin-top: 1.5rem;">
  <h4 style="color: var(--accent); margin-top: 0;" class="retro-only">🛡️ Boss Strategy Guide — Mobile Defense</h4>
  <h4 style="color: var(--accent); margin-top: 0;" class="pro-only">🛡️ Defense Guide — Mobile Defense</h4>
  <ul style="margin-bottom: 0;">
    <li>Implement certificate pinning with secondary pinning (backup certificates).</li>
    <li>Use RASP (Runtime Application Self-Protection) with integrity checks and debug detection.</li>
    <li>Obfuscate native libraries and implement anti-tampering mechanisms.</li>
    <li>Deploy Mobile Device Management (MDM) with strong jailbreak/root detection policies.</li>
  </ul>
</div>

---

<div class="warning-screen" style="margin-top: 3rem;">
  <h3 class="retro-only">💀 GAME OVER?</h3>
  <h3 class="pro-only">Responsible Disclosure</h3>
  <p>Remember: <strong>with great power comes great responsibility</strong>.</p>
  <p style="font-size: 0.85rem;">
    These tools are shared to advance the state of defensive security.<br>
    <span class="retro-only">If you use them maliciously, you are the final boss — and you will be defeated.</span>
    <span class="pro-only">Unauthorized use is illegal and unethical.</span>
  </p>
</div>
