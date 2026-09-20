---
layout: page
title: "Red Team Arsenal"
kicker: "Research / lab tools"
subtitle: "Tools and experiments, with notes on the defensive side of each technique."
description: "Ethical offensive security tools, simulators, and research projects by y0xhz. For authorized testing only."
---

<aside class="notice">
  <h2>For authorized testing & research</h2>
  <p>These projects are for security assessments, controlled labs, and education. Most repositories are not yet published; each entry shows its availability. Defensive notes accompany each area of research.</p>
</aside>

---

## Initial Access & Loaders

<div class="inventory-grid">
  <div class="inventory-card">
    <div class="item-type">PE Packer / Loader</div>
    <h3>Rust PE Packer</h3>
    <p>Custom PE packer built in Rust with novel cryptographic implementation. Designed for academic research into packer architecture, section encryption, and loader mechanics.</p>
    <p><strong>Intended Use:</strong> Malware analysis research, EDR testing in isolated environments, university project demonstration.</p>
    <p><strong>Safety:</strong> Sandbox-safe. No C2 embedded. Decryption keys included in source. Marked as PoC/Simulator.</p>
    <p><strong>License:</strong> MIT (Research/Educational)</p>
    <p><span class="research-status">Repository not yet published</span></p>
  </div>

  <div class="inventory-card">
    <div class="item-type">Wireless Access Point</div>
    <h3>ESP32 EvilTwin</h3>
    <p>Automated Evil Twin access point deployment on ESP32. Captures credentials from users connecting to rogue APs. Useful for wireless security awareness training.</p>
    <p><strong>Intended Use:</strong> Authorized wireless pentests, security awareness demonstrations.</p>
    <p><strong>Safety:</strong> Hardware-limited range. Designed for controlled lab environments.</p>
    <p><strong>License:</strong> Open Source</p>
    <p><a href="https://github.com/y0xhz/ESP32-EvilTwin">→ Repository</a></p>
  </div>
</div>

<div class="defense-note">

  <h3>Defense Guide — Initial Access</h3>
  <ul>
    <li>Deploy network segmentation to limit lateral movement from compromised endpoints.</li>
    <li>Use wireless intrusion detection systems (WIDS) to detect rogue access points.</li>
    <li>Enforce certificate-based WPA-Enterprise to prevent Evil Twin attacks.</li>
    <li>Monitor for unknown PE packers and suspicious section entropy via EDR/XDR.</li>
  </ul>
</div>

---

## Defense Evasion

<div class="inventory-grid">
  <div class="inventory-card">
    <div class="item-type">EDR Evasion Research</div>
    <h3>Rust Packer — EDR Evasion Module</h3>
    <p>Research module exploring modern EDR telemetry blind spots. Covers API unhooking, indirect syscalls, and manual mapping techniques implemented in Rust.</p>
    <p><strong>Intended Use:</strong> Red team exercise preparation, EDR efficacy testing in isolated labs, research publication.</p>
    <p><strong>Safety:</strong> No persistence mechanisms. Requires manual compilation and explicit target configuration.</p>
    <p><strong>License:</strong> MIT (Research/Educational)</p>
    <p><span class="research-status">Repository not yet published</span></p>
  </div>

  <div class="inventory-card">
    <div class="item-type">Process Injection Simulator</div>
    <h3>Process Injection Lab</h3>
    <p>Collection of common process injection techniques implemented for detection engineering practice. Includes DLL injection, APC injection, and thread hijacking simulators.</p>
    <p><strong>Intended Use:</strong> Blue team training, detection rule validation, SIEM tuning.</p>
    <p><strong>Safety:</strong> Self-targeting only. Injects into spawned dummy processes.</p>
    <p><strong>License:</strong> MIT</p>
    <p><span class="research-status">Repository not yet published</span></p>
  </div>
</div>

<div class="defense-note">

  <h3>Defense Guide — Defense Evasion</h3>
  <ul>
    <li>Enable kernel-level ETW (Event Tracing for Windows) and Tamper Protection on EDR agents.</li>
    <li>Monitor for abnormal memory allocations with RWX permissions in legitimate processes.</li>
    <li>Use Attack Surface Reduction (ASR) rules and Windows Defender Application Control (WDAC).</li>
    <li>Implement behavioral analytics to catch syscall anomalies and unhooking patterns.</li>
  </ul>
</div>

---

## Post-Exploitation Simulators

<div class="inventory-grid">
  <div class="inventory-card">
    <div class="item-type">Lab Only</div>
    <h3>Ransomware Simulator</h3>
    <p>Controlled ransomware simulator for incident response drills. Encrypts files in a designated sandbox directory with a recoverable key. Designed for tabletop exercises and SOC readiness testing.</p>
    <p><strong>Intended Use:</strong> IR tabletop exercises, SOC detection validation, recovery procedure testing.</p>
    <p><strong>Safety:</strong> Sandbox-directory-only. Master decryption key always available. No network propagation.</p>
    <p><strong>License:</strong> MIT (Lab Use Only)</p>
    <p><span class="research-status">Repository not yet published</span></p>
  </div>

  <div class="inventory-card">
    <div class="item-type">Lab Only</div>
    <h3>Active Directory Attack Lab</h3>
    <p>Automated AD misconfiguration deployment for training environments. Includes common attack paths: Kerberoasting, AS-REP Roasting, ACL abuse, and DCSync prerequisites.</p>
    <p><strong>Intended Use:</strong> Internal red team training, certification prep (OSCP, CRTO), detection engineering.</p>
    <p><strong>Safety:</strong> Vagrant/VM-based. Isolated network. No external exposure.</p>
    <p><strong>License:</strong> MIT</p>
    <p><span class="research-status">Repository not yet published</span></p>
  </div>
</div>

<div class="defense-note">

  <h3>Defense Guide — Post-Exploitation</h3>
  <ul>
    <li>Maintain offline, immutable backups tested on a regular schedule.</li>
    <li>Deploy canary tokens and honey files to detect early-stage encryption behavior.</li>
    <li>Implement privileged access management (PAM) and Just-in-Time (JIT) admin elevation.</li>
    <li>Monitor for Kerberoasting indicators (TGS-REQ with RC4 encryption) and anomalous LDAP queries.</li>
  </ul>
</div>

---

## Cloud Red Team Tools

<div class="inventory-grid">
  <div class="inventory-card">
    <div class="item-type">AWS/GCP</div>
    <h3>Cloud Misconfiguration Scanner</h3>
    <p>Offensive cloud security assessment toolkit for AWS and GCP. Enumerates IAM policies, S3 bucket permissions, Lambda vulnerabilities, and GCP service account misconfigurations.</p>
    <p><strong>Intended Use:</strong> Authorized cloud pentests, cloud security assessments, compliance gap analysis.</p>
    <p><strong>Safety:</strong> Read-only enumeration by default. Explicit flags required for any write operations.</p>
    <p><strong>License:</strong> MIT</p>
    <p><span class="research-status">Repository not yet published</span></p>
  </div>

  <div class="inventory-card">
    <div class="item-type">Container</div>
    <h3>Kubernetes Attack Toolkit</h3>
    <p>Container escape and Kubernetes privilege escalation testing framework. Identifies overly permissive RBAC, exposed dashboard, and insecure pod security policies.</p>
    <p><strong>Intended Use:</strong> Kubernetes security audits, DevSecOps pipeline integration.</p>
    <p><strong>Safety:</strong> Requires cluster-admin or explicit namespace permissions to run.</p>
    <p><strong>License:</strong> MIT</p>
    <p><span class="research-status">Repository not yet published</span></p>
  </div>
</div>

<div class="defense-note">

  <h3>Defense Guide — Cloud Defense</h3>
  <ul>
    <li>Enforce least-privilege IAM policies with regular access reviews.</li>
    <li>Enable CloudTrail/Cloud Audit Logs with tamper-proof storage.</li>
    <li>Use SCPs (Service Control Policies) and Organization Policies to restrict risky actions.</li>
    <li>Implement pod security standards and network policies in Kubernetes clusters.</li>
  </ul>
</div>

---

## Mobile Red Team

<div class="inventory-grid">
  <div class="inventory-card">
    <div class="item-type">Android</div>
    <h3>Mobile Pentest Framework</h3>
    <p>Comprehensive Android penetration testing framework covering RASP bypass, SSL pinning circumvention, native library analysis (JNI), and runtime instrumentation using Frida.</p>
    <p><strong>Intended Use:</strong> Authorized mobile application security assessments, RASP efficacy testing.</p>
    <p><strong>Safety:</strong> Requires rooted test device or debug build. No distribution mechanism.</p>
    <p><strong>License:</strong> MIT</p>
    <p><span class="research-status">Repository not yet published</span></p>
  </div>

  <div class="inventory-card">
    <div class="item-type">iOS/Android</div>
    <h3>Mobile Traffic Interceptor</h3>
    <p>Automated setup for intercepting mobile application traffic in pentest environments. Handles certificate pinning bypass, proxy auto-configuration, and binary patching.</p>
    <p><strong>Intended Use:</strong> Mobile API security testing, traffic analysis during assessments.</p>
    <p><strong>Safety:</strong> Local proxy only. No remote data exfiltration.</p>
    <p><strong>License:</strong> MIT</p>
    <p><span class="research-status">Repository not yet published</span></p>
  </div>
</div>

<div class="defense-note">

  <h3>Defense Guide — Mobile Defense</h3>
  <ul>
    <li>Implement certificate pinning with secondary pinning (backup certificates).</li>
    <li>Use RASP (Runtime Application Self-Protection) with integrity checks and debug detection.</li>
    <li>Obfuscate native libraries and implement anti-tampering mechanisms.</li>
    <li>Deploy Mobile Device Management (MDM) with strong jailbreak/root detection policies.</li>
  </ul>
</div>

---

<aside class="notice">
  <h2>Responsible use</h2>
  <p>Keep testing within an explicitly authorized scope. For questions about the research, <a href="{{ '/contact' | relative_url }}">get in touch</a>.</p>
</aside>
