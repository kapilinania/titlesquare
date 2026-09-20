// ============================================================
// GOOGLE SHEETS LEAD SYNC CONFIGURATION
// ============================================================
// Replace the URL below with your Google Apps Script Web App URL to stream leads directly into Google Sheets
window.GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxbE0he_Ls3-GRKBaeMC1uA0u7CkRuZMnS5knr49M3I9-vG8vUBqDK2jizpyEASTZiq/exec";

// ============================================================
// GLOBAL AUTH MODAL HANDLERS
// ============================================================
window.openAuth = function(tab) {
  const modal = document.getElementById('authModalLayer');
  if (!modal) return;
  modal.classList.add('is-active');
  if (tab === 'login') {
    window.showLoginTab();
  } else {
    window.showRegisterTab();
  }
};

window.closeAuth = function() {
  const modal = document.getElementById('authModalLayer');
  if (modal) modal.classList.remove('is-active');
};

window.showRegisterTab = function() {
  const tabReg = document.getElementById('tabRegisterBtn');
  const tabLog = document.getElementById('tabLoginBtn');
  const regPanel = document.getElementById('registerPanel');
  const logPanel = document.getElementById('loginPanel');
  const authErr = document.getElementById('authErrorBox');

  if (tabReg) tabReg.classList.add('is-active');
  if (tabLog) tabLog.classList.remove('is-active');
  if (regPanel) regPanel.style.display = 'block';
  if (logPanel) logPanel.style.display = 'none';
  if (authErr) authErr.style.display = 'none';
};

window.showLoginTab = function() {
  const tabReg = document.getElementById('tabRegisterBtn');
  const tabLog = document.getElementById('tabLoginBtn');
  const regPanel = document.getElementById('registerPanel');
  const logPanel = document.getElementById('loginPanel');
  const authErr = document.getElementById('authErrorBox');

  if (tabLog) tabLog.classList.add('is-active');
  if (tabReg) tabReg.classList.remove('is-active');
  if (logPanel) logPanel.style.display = 'block';
  if (regPanel) regPanel.style.display = 'none';
  if (authErr) authErr.style.display = 'none';
};

// ============================================================
// MOBILE NAVIGATION DRAWER
// ============================================================
window.toggleMobileNav = function() {
  const navMenu = document.getElementById('navMenu');
  let shadow = document.querySelector('.mobile-overlay-shadow');
  if (!shadow) {
    shadow = document.createElement('div');
    shadow.className = 'mobile-overlay-shadow';
    document.body.appendChild(shadow);
    shadow.addEventListener('click', window.closeMobileNav);
  }
  if (navMenu) {
    const isOpen = navMenu.classList.toggle('mobile-visible');
    shadow.classList.toggle('mobile-visible', isOpen);
    document.body.classList.toggle('mobile-nav-open', isOpen);
    const siteHeader = navMenu.closest('.site-header') || document.querySelector('.site-header');
    if (siteHeader) siteHeader.classList.toggle('mobile-nav-active', isOpen);
  }
};

window.closeMobileNav = function() {
  const navMenu = document.getElementById('navMenu');
  const shadow = document.querySelector('.mobile-overlay-shadow');
  if (navMenu) navMenu.classList.remove('mobile-visible');
  if (shadow) shadow.classList.remove('mobile-visible');
  document.body.classList.remove('mobile-nav-open');
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) siteHeader.classList.remove('mobile-nav-active');
};

// ============================================================
// QUICK CHECK FLOATING WIDGET LOGIC
// ============================================================
let qcRiskScore = 0;

window.goToQuickCheckStep2 = function(riskDelta) {
  qcRiskScore += riskDelta;
  const qcStep1 = document.getElementById('quickCheckStep1');
  const qcStep2 = document.getElementById('quickCheckStep2');
  const qcDot2 = document.getElementById('qcDot2');
  if (qcStep1) qcStep1.style.display = 'none';
  if (qcStep2) qcStep2.style.display = 'block';
  if (qcDot2) qcDot2.classList.remove('inactive');
};

window.showQuickCheckResult = function(riskDelta) {
  qcRiskScore += riskDelta;
  const qcStep2 = document.getElementById('quickCheckStep2');
  const qcResult = document.getElementById('quickCheckResult');
  const qcResultText = document.getElementById('quickCheckResultText');
  const qcDot3 = document.getElementById('qcDot3');

  if (qcStep2) qcStep2.style.display = 'none';
  if (qcResult) qcResult.style.display = 'block';
  if (qcDot3) qcDot3.classList.remove('inactive');

  const lang = localStorage.getItem('titlesquare_lang') || 'en';

  if (qcRiskScore >= 2) {
    if (lang === 'hi') {
      qcResultText.innerHTML = `
        <div style="background:#fef2f2; border:1px solid #fecaca; padding:10px; border-radius:6px; margin-bottom:10px;">
          <strong style="color:var(--red); font-size:13px; display:block; margin-bottom:4px;">🚨 उच्च कानूनी जोखिम (स्कोर: 88%)</strong>
          <span style="font-size:12px; color:#991b1b; line-height:1.4; display:block;">
            अद्यतन जमाबंदी या भारमुक्त प्रमाण (NEC) के अभाव में संपत्ति पर बैंक लोन रिजेक्शन, गुप्त बंधक या पूर्व अदालती कुर्की का गंभीर जोखिम हो सकता है।
          </span>
        </div>
      `;
    } else {
      qcResultText.innerHTML = `
        <div style="background:#fef2f2; border:1px solid #fecaca; padding:10px; border-radius:6px; margin-bottom:10px;">
          <strong style="color:var(--red); font-size:13px; display:block; margin-bottom:4px;">🚨 High Risk Detected (Score: 88%)</strong>
          <span style="font-size:12px; color:#991b1b; line-height:1.4; display:block;">
            Unchecked non-encumbrance or missing Jamabandi mutation exposes your deal to illegal claims, bank loan rejections, or prior court attachments.
          </span>
        </div>
      `;
    }
  } else if (qcRiskScore === 1) {
    if (lang === 'hi') {
      qcResultText.innerHTML = `
        <div style="background:#fffbeb; border:1px solid #fde68a; padding:10px; border-radius:6px; margin-bottom:10px;">
          <strong style="color:#b45309; font-size:13px; display:block; margin-bottom:4px;">⚠️ मध्यम विधिक जांच आवश्यक (स्कोर: 50%)</strong>
          <span style="font-size:12px; color:#92400e; line-height:1.4; display:block;">
            यद्यपि मूल दस्तावेज उपलब्ध हैं, सरकारी धरित्री / सर्कल रिकॉर्ड में म्यूटेशन और 30-वर्षीय भारमुक्त स्थिति का मिलान आवश्यक है।
          </span>
        </div>
      `;
    } else {
      qcResultText.innerHTML = `
        <div style="background:#fffbeb; border:1px solid #fde68a; padding:10px; border-radius:6px; margin-bottom:10px;">
          <strong style="color:#b45309; font-size:13px; display:block; margin-bottom:4px;">⚠️ Moderate Due Diligence Required (Score: 50%)</strong>
          <span style="font-size:12px; color:#92400e; line-height:1.4; display:block;">
            Even if registration papers look valid, official Dharitree / Circle Office mutation ledgers must be reconciled to confirm unencumbered ownership.
          </span>
        </div>
      `;
    }
  } else {
    if (lang === 'hi') {
      qcResultText.innerHTML = `
        <div style="background:#f0fdf4; border:1px solid #bbf7d0; padding:10px; border-radius:6px; margin-bottom:10px;">
          <strong style="color:var(--green); font-size:13px; display:block; margin-bottom:4px;">✅ प्राथमिक स्थिति संतोषजनक (अधिवक्ता सील अनुशंसित)</strong>
          <span style="font-size:12px; color:#166534; line-height:1.4; display:block;">
            बैंक-मान्य गैर-प्रभार प्रमाणपत्र (NEC) प्राप्त करने के लिए उप-पंजीयक बुक 1 के 30-वर्षीय अभिलेखों से पूर्ण विलेख श्रृंखला सत्यापित करवाएं।
          </span>
        </div>
      `;
    } else {
      qcResultText.innerHTML = `
        <div style="background:#f0fdf4; border:1px solid #bbf7d0; padding:10px; border-radius:6px; margin-bottom:10px;">
          <strong style="color:var(--green); font-size:13px; display:block; margin-bottom:4px;">✅ Good Foundation! (Advocate Seal Recommended)</strong>
          <span style="font-size:12px; color:#166534; line-height:1.4; display:block;">
            Verify your complete 30-year mother deed chain through Sub-Registrar Book I to obtain a bank-grade certified Non-Encumbrance Certificate.
          </span>
        </div>
      `;
    }
  }
};

window.closeQuickCheck = function() {
  const widget = document.getElementById('quickCheckWidget');
  const reopen = document.getElementById('reopenQuickCheck');
  if (widget) widget.classList.add('is-minimized');
  if (reopen) reopen.classList.add('is-visible');
};

window.reopenQuickCheck = function() {
  const widget = document.getElementById('quickCheckWidget');
  const reopen = document.getElementById('reopenQuickCheck');
  if (widget) widget.classList.remove('is-minimized');
  if (reopen) reopen.classList.remove('is-visible');
};

window.notifyCity = function(city) {
  const num = prompt(`Enter 10-digit mobile number to get alerted when Title Square expands field presence in ${city}:`);
  if (num) {
    alert(`Thank you! We will notify ${num} when field desk launches in ${city}. Note: Bank Loan Documentation & Title Search are already available Pan-India!`);
  }
};

// ============================================================
// 4-STAGE FORENSIC AUDIT SAMPLE INSPECTION
// ============================================================
const inspectData = {
  1: {
    stage: "STAGE 01",
    heading: "30-Year Archival Sub-Registrar Ledger (Book 1 & Index II)",
    summary: "Physical search conducted at Sub-Registrar Office (Kamrup / Delhi SRO) cross-matching register entries from 1994 to 2024 to trace the unbroken title sequence.",
    doc: "• SUB-REGISTRAR OFFICE: GUWAHATI / SOUTH-WEST DELHI\n• REGISTER BOOK 1, VOLUME: 412, PAGES: 88-112\n• MOTHER DEED: Reg. No. 1842/1996 (Partition Deed)\n• CHAIN STATUS: Clean unbroken lineage verified up to Seller Deed (2018)\n• PRIOR ENCUMBRANCES: None recorded in Index II",
    checks: [
      "Unbroken 30-year mother deed chain",
      "Index II encumbrance cross-verification",
      "Registered GPA / SPA validity audit",
      "Physical inspection of volume margins"
    ]
  },
  2: {
    stage: "STAGE 02",
    heading: "Circle Officer Revenue & Jamabandi Mutation Record",
    summary: "Official cross-examination on Government land portal (Dharitree Assam & Delhi e-Dharti) to verify mutated Pattadar and Jamabandi Dag numbers.",
    doc: "• REVENUE CIRCLE: AZARA / MEHRAULI TEHSIL\n• MOUZA: RAMCHARANI, PATTA NO: 148, DAG NO: 409/812\n• MUTATION CASE NO: MUT/AZR/2021/0491\n• RECORD STATUS: Field Jamabandi updated in Seller's name\n• REVENUE ARREARS: Land Khajana paid up to current financial year",
    checks: [
      "Circle Officer Mutation order verification",
      "Jamabandi Dag & Patta coordinates match",
      "Khajana (Land Revenue) clearance receipt",
      "Tribal / Ceiling belt restriction check"
    ]
  },
  3: {
    stage: "STAGE 03",
    heading: "Judicial Litigation, Attachment & DRT Registry Check",
    summary: "Comprehensive scan across High Courts, District Courts, Debt Recovery Tribunals (DRT) and NCLT for pending partition suits or court attachments.",
    doc: "• JURISDICTION: GUWAHATI HIGH COURT / SAKET COURTS\n• SEARCH SCOPE: Civil Suits, Injunctions & Section 52 Lis Pendens\n• COMMERCIAL SUITS: DRT & Insolvency Registry Checked\n• LITIGATION STATUS: No active stay orders or interim injunctions\n• COURT ATTACHMENT: Zero government or court liens",
    checks: [
      "High Court & District Court docket scan",
      "Lis Pendens & Sec 52 Transfer of Property Act",
      "Debt Recovery Tribunal (DRT) bank lien check",
      "RERA complaint & insolvency record search"
    ]
  },
  4: {
    stage: "STAGE 04",
    heading: "Advocate-Certified Title Opinion & Bank-Ready TSR",
    summary: "Official Legal Scrutiny Report (LSR) and Non-Encumbrance Certificate signed by empanelled High Court advocate, accepted by SBI, HDFC, ICICI, and Axis Bank.",
    doc: "• ISSUING : TITLE SQUARE LEGAL ASSOCIATES\n• EMPANELLED ADVOCATE: Khusboo Verma, Sangita Sarma (Advocates)\n• BAR ENROLMENT: Gauhati High Court Bar Association\n• FINAL OPINION: Title is Marketable, Clear and Free from all Encumbrances\n• CERTIFICATION: Ready for Bank Loan Disbursement & Sub-Registrar Execution",
    checks: [
      "Bar Council verified advocate signature",
      "Pan-India Bank-approved TSR format",
      "13-Point Title Warranty & Indemnity Checklist",
      "Official  Seal & Enrolment Number"
    ]
  }
};

window.openStageInspect = function(stageNum) {
  const data = inspectData[stageNum];
  const inspectModal = document.getElementById('auditInspectModal');
  if (!data || !inspectModal) return;

  const stageEl = document.getElementById('inspectModalStage');
  const headEl = document.getElementById('inspectModalHeading');
  const sumEl = document.getElementById('inspectModalSummary');
  const codeEl = document.getElementById('inspectModalCodeBlock');
  const checklistWrap = document.getElementById('inspectModalChecklist');

  if (stageEl) stageEl.textContent = data.stage;
  if (headEl) headEl.textContent = data.heading;
  if (sumEl) sumEl.textContent = data.summary;
  if (codeEl) codeEl.textContent = data.doc;

  if (checklistWrap) {
    checklistWrap.innerHTML = data.checks.map(c => `
      <div class="sample-check-item">
        <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
        <span>${c}</span>
      </div>
    `).join('');
  }

  inspectModal.classList.add('is-active');
};

window.closeStageInspect = function() {
  const inspectModal = document.getElementById('auditInspectModal');
  if (inspectModal) inspectModal.classList.remove('is-active');
};

// ============================================================
// DOCUMENT-LEVEL DELEGATED EVENT LISTENERS (FOOLPROOF BINDINGS)
// ============================================================
document.addEventListener('click', (e) => {
  // 1. Auth Modal Triggers
  const authTrigger = e.target.closest('.open-auth-btn');
  if (authTrigger) {
    e.preventDefault();
    const tab = authTrigger.getAttribute('data-tab') || 'register';
    window.openAuth(tab);
    window.closeMobileNav();
    return;
  }

  // Close Auth Modal
  if (e.target.closest('#closeAuthModal') || e.target.id === 'authModalLayer') {
    window.closeAuth();
    return;
  }

  // Auth Tabs & Switchers
  if (e.target.closest('#tabRegisterBtn') || e.target.closest('#switchToRegister')) {
    e.preventDefault();
    window.showRegisterTab();
    return;
  }
  if (e.target.closest('#tabLoginBtn') || e.target.closest('#switchToLogin')) {
    e.preventDefault();
    window.showLoginTab();
    return;
  }

  // Auto Fill Demo Credentials
  if (e.target.closest('#fillDemoLogin')) {
    e.preventDefault();
    const idInput = document.getElementById('loginEmail');
    const passInput = document.getElementById('loginPassword');
    if (idInput) idInput.value = 'contact@titlesquare.in';
    if (passInput) passInput.value = '123';
    return;
  }

  // Password Visibility Eye Toggle
  const eyeBtn = e.target.closest('.auth-eye-btn');
  if (eyeBtn) {
    e.preventDefault();
    const targetId = eyeBtn.getAttribute('data-target');
    const input = document.getElementById(targetId);
    if (input) {
      input.type = input.type === 'password' ? 'text' : 'password';
    }
    return;
  }

  // 2. Mobile Nav Toggle and Close
  if (e.target.closest('#mobileToggleBtn')) {
    e.preventDefault();
    window.toggleMobileNav();
    return;
  }
  if (e.target.closest('#mobileDrawerClose') || e.target.closest('.mobile-overlay-shadow')) {
    e.preventDefault();
    window.closeMobileNav();
    return;
  }
  // If clicking nav link inside mobile drawer, close drawer
  if (e.target.closest('.nav-link') && document.getElementById('navMenu')?.classList.contains('mobile-visible')) {
    window.closeMobileNav();
  }

  // 3. Quick Check Widget Buttons
  if (e.target.closest('#closeQuickCheck')) {
    e.preventDefault();
    window.closeQuickCheck();
    return;
  }
  if (e.target.closest('#reopenQuickCheck')) {
    e.preventDefault();
    window.reopenQuickCheck();
    return;
  }
  if (e.target.closest('#qcYesBtn')) {
    e.preventDefault();
    window.goToQuickCheckStep2(0);
    return;
  }
  if (e.target.closest('#qcNoBtn')) {
    e.preventDefault();
    window.goToQuickCheckStep2(1);
    return;
  }
  if (e.target.closest('#qcStep2Yes')) {
    e.preventDefault();
    window.showQuickCheckResult(0);
    return;
  }
  if (e.target.closest('#qcStep2NotSure')) {
    e.preventDefault();
    window.showQuickCheckResult(1);
    return;
  }
  if (e.target.closest('#qcStep2No')) {
    e.preventDefault();
    window.showQuickCheckResult(2);
    return;
  }

  // 4. Report Consultation Modal Triggers
  const reportTrigger = e.target.closest('.open-modal-trigger');
  if (reportTrigger) {
    e.preventDefault();
    const modal = document.getElementById('reportModalLayer');
    if (modal) {
      const expert = reportTrigger.getAttribute('data-expert');
      const targetCity = reportTrigger.getAttribute('data-city');
      const titleEl = modal.querySelector('.modal-banner h4');
      if (expert && titleEl) {
        titleEl.textContent = `Consult with ${expert}`;
      } else if (titleEl) {
        titleEl.textContent = 'Get Jamabandi Copy';
      }

      // Pre-select city if triggered from city buttons/links
      if (targetCity) {
        const citySelect = modal.querySelector('select');
        if (citySelect) {
          for (let i = 0; i < citySelect.options.length; i++) {
            if (citySelect.options[i].value.toLowerCase().includes(targetCity.toLowerCase())) {
              citySelect.selectedIndex = i;
              break;
            }
          }
        }
      }

      modal.classList.add('is-active');
      window.closeMobileNav();
    }
    return;
  }

  // Close Report Modal
  if (e.target.closest('#modalCloseBtn') || e.target.id === 'reportModalLayer') {
    const modal = document.getElementById('reportModalLayer');
    if (modal) modal.classList.remove('is-active');
    return;
  }

  // 5. Close Inspect Modal
  if (e.target.closest('#closeInspectModal') || e.target.id === 'auditInspectModal') {
    window.closeStageInspect();
    return;
  }
});

// ============================================================
// DOMCONTENTLOADED INITIALIZATIONS
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  // Mobile overlay element check
  let shadow = document.querySelector('.mobile-overlay-shadow');
  if (!shadow) {
    shadow = document.createElement('div');
    shadow.className = 'mobile-overlay-shadow';
    document.body.appendChild(shadow);
  }

  // SquareYards FAQ Accordion Toggle
  const faqRows = document.querySelectorAll('.faq-item-row');
  faqRows.forEach(row => {
    const btn = row.querySelector('.faq-trigger-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = row.classList.contains('is-open');
        faqRows.forEach(r => r.classList.remove('is-open'));
        if (!isOpen) {
          row.classList.add('is-open');
        }
      });
    }
  });

  // AJAX Lead Forms with Google Sheets Integration
  window._ajaxFormsInitialized = true;
  const forms = document.querySelectorAll('form.ajax-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn ? btn.innerHTML : 'Submit';
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Saving to Sheet & Verifying...';
      }

      // Determine exact Form Type and destination Sheet Tab
      let formType = 'Get Jamabandi Copy Modal';
      let sheetTab = 'Jamabandi_Leads';

      if (form.closest('#consultation-scheduler')) {
        formType = 'Advocate Consultation Appointment';
        sheetTab = 'Contact_Us_Appointments';
      } else if (form.closest('.reg-card')) {
        formType = 'Hero Property Check';
        sheetTab = 'Hero_Property_Checks';
      } else if (window.location.pathname.includes('contact-us.html') && !form.closest('.modal-layer')) {
        formType = 'Contact Us Consultation';
        sheetTab = 'Contact_Us_Appointments';
      }

      const payload = {
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        sheetTab: sheetTab,
        formType: formType,
        page: window.location.pathname.split('/').pop() || 'index.html'
      };

      // Extract named and positional form inputs
      const nameInput = form.querySelector('input[name="name"], input[placeholder*="name" i], input[type="text"]:first-of-type');
      const phoneInput = form.querySelector('input[name="phone"], input[type="tel"]');
      const citySelect = form.querySelector('select');
      const villageInput = form.querySelector('input[name="village"], input[placeholder*="Village" i]');
      const pinInput = form.querySelector('input[name="pincode"], input[placeholder*="PIN" i]');
      const khasraInput = form.querySelector('input[name="khasra"], input[placeholder*="142" i]');
      const pattaInput = form.querySelector('input[name="patta"], input[placeholder*="88" i]');
      const queryInput = form.querySelector('input[placeholder*="Query" i], input[placeholder*="Brief" i], textarea');
      const slotInput = form.querySelector('#selectedSlotDetail');

      payload.fullName = nameInput ? nameInput.value.trim() : '';
      payload.phone = phoneInput ? phoneInput.value.trim() : '';
      payload.city = citySelect ? citySelect.value : '';
      payload.village = villageInput ? villageInput.value.trim() : '';
      payload.pincode = pinInput ? pinInput.value.trim() : '';
      payload.dagKhasraSurvey = khasraInput ? khasraInput.value.trim() : '';
      payload.pattaKhataKhatiyan = pattaInput ? pattaInput.value.trim() : '';
      payload.queryService = queryInput ? queryInput.value.trim() : '';
      payload.appointmentSlot = slotInput ? slotInput.value.trim() : '';

      // 1. Instantly close lead modal
      const modal = document.getElementById('reportModalLayer');
      if (modal) modal.classList.remove('is-active');

      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Submitted ✓';
      }

      // Safe form reset after extracting
      setTimeout(() => {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = orig;
        }
        form.reset();
      }, 400);

      // Show interactive custom success dialog popup (No native browser alert)
      window.showLeadSuccessModal(payload);

      // 2. Transmit to Google Sheets in the background (Non-blocking)
      const webhookUrl = window.GOOGLE_SHEETS_WEBHOOK_URL;
      if (webhookUrl && !webhookUrl.includes('REPLACE_WITH_YOUR_DEPLOYMENT_ID')) {
        // Use navigator.sendBeacon if supported, or fire-and-forget fetch
        try {
          const blob = new Blob([JSON.stringify(payload)], { type: 'text/plain' });
          if (navigator.sendBeacon) {
            navigator.sendBeacon(webhookUrl, blob);
          } else {
            fetch(webhookUrl, {
              method: 'POST',
              mode: 'no-cors',
              headers: { 'Content-Type': 'text/plain' },
              body: JSON.stringify(payload)
            }).catch(e => console.warn('Background sync note:', e));
          }
        } catch (postErr) {
          fetch(webhookUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(payload)
          }).catch(e => console.warn('Background fetch error:', e));
        }
      }
    });
  });

  // Login Form Submission
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const identifier = document.getElementById('loginEmail').value.trim().toLowerCase();
      const pass = document.getElementById('loginPassword').value.trim();
      const authErr = document.getElementById('authErrorBox');

      const validIdentifiers = ['contact@titlesquare.in', '9957643980', '+919957643980', '9871761798', '+919871761798', 'admin@gmail.com', 'admin', '9876543210', '+919876543210'];

      if (validIdentifiers.includes(identifier) && pass === '123') {
        sessionStorage.setItem('titleSquare_user', identifier);
        window.closeAuth();
        window.location.href = 'dashboard.html';
      } else {
        if (authErr) {
          authErr.textContent = 'Invalid credentials. Please enter Mobile: 9871761798, Email: contact@titlesquare.in, or Username: admin with Password: 123';
          authErr.style.display = 'block';
        }
      }
    });
  }

  // Register Form Submission
  const regForm = document.getElementById('registerForm');
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('regFullName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      sessionStorage.setItem('titleSquare_user', email || name);
      alert('Welcome to Title Square, ' + name + '! Your account has been created. Redirecting to your Audit Dashboard...');
      window.closeAuth();
      window.location.href = 'dashboard.html';
    });
  }

  // Interactive Risk Scanner Navigation (index.html)
  const riskButtons = document.querySelectorAll('.risk-nav-btn');
  const riskPanels = document.querySelectorAll('.risk-content-panel');

  if (riskButtons.length > 0 && riskPanels.length > 0) {
    riskButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-risk-target');
        riskButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        riskPanels.forEach(panel => {
          if (panel.getAttribute('id') === targetId) {
            panel.style.display = 'flex';
          } else {
            panel.style.display = 'none';
          }
        });
      });
    });
  }

  // Interactive Estimator (contact-us.html)
  const propChips = document.querySelectorAll('.chip-prop');
  const serviceChips = document.querySelectorAll('.chip-service');
  const estTat = document.getElementById('estTat');
  const estDocCount = document.getElementById('estDocCount');
  const estScope = document.getElementById('estScope');
  const estDocList = document.getElementById('estDocList');

  function updateEstimator() {
    if (!estTat) return;
    const selectedProp = document.querySelector('.chip-prop.is-selected')?.getAttribute('data-val') || 'plot';
    const selectedService = document.querySelector('.chip-service.is-selected')?.getAttribute('data-val') || 'search';

    if (selectedService === 'search') {
      estTat.textContent = selectedProp === 'apartment' ? '24 - 36 Hours' : '24 - 48 Hours';
      estDocCount.textContent = '3 Essential Documents';
      estScope.textContent = '30-Year Archival & Encumbrance Clearance';
      estDocList.innerHTML = '• Copy of Latest Sale Deed / Conveyance<br>• Previous Mother Deed chain (if available)<br>• Khatauni / Jamabandi / Patta Number';
    } else if (selectedService === 'mutation') {
      estTat.textContent = '3 - 5 Business Days';
      estDocCount.textContent = '4 Revenue Documents';
      estScope.textContent = 'Circle Office Jamabandi / Mutation Verification';
      estDocList.innerHTML = '• Registered Sale Deed copy<br>• Up-to-date Land Revenue (Khajana) receipt<br>• NOC / Trace Map & Dag / Patta details';
    } else if (selectedService === 'loan') {
      estTat.textContent = '48 - 72 Hours';
      estDocCount.textContent = 'Comprehensive Bank Docket';
      estScope.textContent = 'Bank Loan Documentation (Pan-India format)';
      estDocList.innerHTML = '• 30-Year Title Search Report (TSR)<br>• Non-Encumbrance Certificate (NEC)<br>• Advocate Legal Scrutiny Report (LSR)';
    } else if (selectedService === 'deed') {
      estTat.textContent = '24 - 48 Hours';
      estDocCount.textContent = 'Drafting + Stamp Duty Calculation';
      estScope.textContent = 'Sale Deed / Agreement to Sell Drafting';
      estDocList.innerHTML = '• Buyer & Seller KYC Details<br>• Property schedule & boundary coordinates<br>• Circle rate valuation & token receipt';
    }
  }

  propChips.forEach(chip => {
    chip.addEventListener('click', () => {
      propChips.forEach(c => c.classList.remove('is-selected'));
      chip.classList.add('is-selected');
      updateEstimator();
    });
  });

  serviceChips.forEach(chip => {
    chip.addEventListener('click', () => {
      serviceChips.forEach(c => c.classList.remove('is-selected'));
      chip.classList.add('is-selected');
      updateEstimator();
    });
  });

  // Interactive Consultation Scheduler (contact-us.html)
  const dayBtns = document.querySelectorAll('.slot-day-btn');
  const timeBtns = document.querySelectorAll('.time-slot-btn');
  const modeBtns = document.querySelectorAll('.mode-btn');
  const hiddenSlotInput = document.getElementById('selectedSlotDetail');

  function updateSlotInput() {
    if (!hiddenSlotInput) return;
    const activeDay = document.querySelector('.slot-day-btn.is-active strong')?.textContent || 'Today';
    const activeTime = document.querySelector('.time-slot-btn.is-selected')?.textContent || '10:30 AM';
    const activeMode = document.querySelector('.mode-btn.is-active')?.textContent || 'In-Person ';
    hiddenSlotInput.value = `${activeDay} | ${activeTime} | ${activeMode}`;
  }

  dayBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dayBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      updateSlotInput();
    });
  });

  timeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timeBtns.forEach(b => b.classList.remove('is-selected'));
      btn.classList.add('is-selected');
      updateSlotInput();
    });
  });

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modeBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      updateSlotInput();
    });
  });

  // Metro Cities Grid "Load More" functionality
  initCitiesLoadMore();

  // Indian State Capitals Directory Live Filter
  initCapitalDirectoryFilter();
});

// Load more cities functionality
function initCitiesLoadMore() {
  const loadMoreBtn = document.getElementById('loadMoreCitiesBtn');
  const hiddenCards = document.querySelectorAll('.metro-city-card.city-hidden');
  if (!loadMoreBtn || hiddenCards.length === 0) return;

  loadMoreBtn.addEventListener('click', function() {
    hiddenCards.forEach(card => {
      card.classList.remove('city-hidden');
      card.style.display = 'flex';
      card.style.animation = 'fadeIn 0.35s ease';
    });
    loadMoreBtn.style.display = 'none';
  });
}

// Indian State & UT Capitals Directory Filter & Live Search
function initCapitalDirectoryFilter() {
  const searchInput = document.getElementById('capitalSearchInput');
  const clearBtn = document.getElementById('clearCapitalSearchBtn');
  const zoneBtns = document.querySelectorAll('.cap-zone-btn');
  const cards = document.querySelectorAll('.capital-city-card');

  if (!cards.length) return;

  function filterCards() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const activeZoneBtn = document.querySelector('.cap-zone-btn.is-active');
    const selectedZone = activeZoneBtn ? activeZoneBtn.getAttribute('data-zone') : 'all';

    cards.forEach(card => {
      const city = (card.getAttribute('data-city') || '').toLowerCase();
      const state = (card.getAttribute('data-state') || '').toLowerCase();
      const zone = (card.getAttribute('data-zone') || '').toLowerCase();

      const matchesSearch = !query || city.includes(query) || state.includes(query);
      const matchesZone = selectedZone === 'all' || zone === selectedZone;

      if (matchesSearch && matchesZone) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    if (clearBtn) {
      clearBtn.style.display = query.length > 0 ? 'inline-block' : 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterCards);
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      filterCards();
      if (searchInput) searchInput.focus();
    });
  }

  zoneBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      zoneBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      filterCards();
    });
  });
}

// ============================================================
// INTERACTIVE  LOCATION & MAP HANDLERS
// ============================================================
window.copyAddress = function() {
  const address = "Flat No. 5F, B Block, Royal Residency, Azara SOS Road (Opp. Guwahati International Airport), Guwahati, Assam — 781017";
  const btn = document.getElementById('copyAddressBtn');
  const textSpan = document.getElementById('copyBtnText');

  function showSuccess() {
    if (btn && textSpan) {
      const origText = textSpan.innerHTML;
      btn.classList.add('is-copied');
      textSpan.innerHTML = 'Address Copied! ✓';
      setTimeout(() => {
        btn.classList.remove('is-copied');
        textSpan.innerHTML = origText;
      }, 2500);
    }
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(address).then(showSuccess).catch(() => {
      fallbackCopyText(address, showSuccess);
    });
  } else {
    fallbackCopyText(address, showSuccess);
  }
};

window.copyDelhiAddress = function() {
  const address = " no. 396, Western Wing, Tis Hazari Courts, Delhi — 110054";
  const btn = document.getElementById('copyDelhiAddressBtn');
  const textSpan = document.getElementById('copyDelhiBtnText');

  function showSuccess() {
    if (btn && textSpan) {
      const origText = textSpan.innerHTML;
      btn.classList.add('is-copied');
      textSpan.innerHTML = 'Address Copied! ✓';
      setTimeout(() => {
        btn.classList.remove('is-copied');
        textSpan.innerHTML = origText;
      }, 2500);
    }
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(address).then(showSuccess).catch(() => {
      fallbackCopyText(address, showSuccess);
    });
  } else {
    fallbackCopyText(address, showSuccess);
  }
};

window.shareLocation = function() {
  const shareBtn = document.getElementById('shareLocationBtn');
  const mapUrl = "https://www.google.com/maps/place/Title+Square/@26.1107966,91.595573,17z";
  const shareData = {
    title: 'Title Square Registered Headquarters & ',
    text: 'Title Square Legal  — Royal Residency, Azara (Opp. Guwahati Airport), Assam 781017',
    url: mapUrl
  };

  function showCopied() {
    if (shareBtn) {
      const orig = shareBtn.innerHTML;
      shareBtn.classList.add('is-copied');
      shareBtn.innerHTML = '<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg> Link Copied!';
      setTimeout(() => {
        shareBtn.classList.remove('is-copied');
        shareBtn.innerHTML = orig;
      }, 2500);
    }
  }

  if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
    navigator.share(shareData).catch(() => {});
  } else if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(mapUrl).then(showCopied).catch(showCopied);
  } else {
    fallbackCopyText(mapUrl, showCopied);
  }
};

function fallbackCopyText(text, callback) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    if (callback) callback();
  } catch (err) {
    console.error('Fallback copy failed', err);
  }
  document.body.removeChild(textArea);
}

// ============================================================
// INDIAN STATE CAPITALS DIRECTORY FILTER & SEARCH
// ============================================================
function initCapitalDirectoryFilter() {
  const searchInput = document.getElementById('capitalSearchInput');
  const clearBtn = document.getElementById('clearCapitalSearchBtn');
  const zoneBtns = document.querySelectorAll('#capitalZoneTabs .cap-zone-btn');
  const cards = document.querySelectorAll('#capitalsCardsGrid .capital-city-card');

  if (!cards.length) return;

  let activeZone = 'all';
  let searchQuery = '';

  function filterCards() {
    cards.forEach(card => {
      const cardZone = card.getAttribute('data-zone') || '';
      const cardCity = (card.getAttribute('data-city') || '').toLowerCase();
      const cardState = (card.getAttribute('data-state') || '').toLowerCase();
      const cardText = card.textContent.toLowerCase();

      const matchesZone = (activeZone === 'all') || 
        (cardZone === activeZone) || 
        (activeZone === 'ut' && (cardZone === 'ut' || cardState.includes('ut')));
      const matchesSearch = !searchQuery || 
        cardCity.includes(searchQuery) || 
        cardState.includes(searchQuery) || 
        cardText.includes(searchQuery);

      if (matchesZone && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    if (clearBtn) {
      clearBtn.style.display = searchQuery ? 'inline-block' : 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterCards();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      searchQuery = '';
      filterCards();
    });
  }

  if (zoneBtns.length) {
    zoneBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        zoneBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        activeZone = btn.getAttribute('data-zone') || 'all';
        filterCards();
      });
    });
  }
}

// Auto-run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCapitalDirectoryFilter);
} else {
  initCapitalDirectoryFilter();
}

// ============================================================
// INTERACTIVE LEAD SUCCESS MODAL POPUP
// ============================================================
window.showLeadSuccessModal = function(lead) {
  let layer = document.getElementById('leadSuccessLayer');
  if (!layer) {
    layer = document.createElement('div');
    layer.className = 'lead-success-layer';
    layer.id = 'leadSuccessLayer';
    document.body.appendChild(layer);

    layer.addEventListener('click', (e) => {
      if (e.target === layer) window.closeLeadSuccessModal();
    });
  }

  const clientName = lead.fullName || 'Valued Client';
  const clientPhone = lead.phone || '';
  const locationText = [lead.city, lead.village, lead.pincode].filter(Boolean).join(', ') || 'Pan-India';
  const landRef = [
    lead.dagKhasraSurvey ? `Dag/Khasra: ${lead.dagKhasraSurvey}` : '',
    lead.pattaKhataKhatiyan ? `Patta: ${lead.pattaKhataKhatiyan}` : ''
  ].filter(Boolean).join(' • ');

  layer.innerHTML = `
    <div class="lead-success-card">
      <div class="lead-success-header">
        <div class="lead-success-badge-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 class="lead-success-title">Request Received Successfully!</h3>
        <p class="lead-success-sub">Title Square Law Firm &bull; Delhi &amp; Guwahati s</p>
      </div>
      <div class="lead-success-body">
        <div class="lead-success-pill">
          <span>✓</span> Data Recorded &amp; Transmitted to Legal Desk
        </div>
        <div class="lead-success-meta-box">
          <div><strong>Applicant:</strong> ${escapeHTML(clientName)} ${clientPhone ? '(' + escapeHTML(clientPhone) + ')' : ''}</div>
          <div><strong>Jurisdiction:</strong> ${escapeHTML(locationText)}</div>
          ${landRef ? `<div><strong>Land Record:</strong> ${escapeHTML(landRef)}</div>` : ''}
          <div style="margin-top: 6px; font-size: 11.5px; color: #059669; font-weight: 700;">
            ✓ High Court Empanelled Advocate assigned for verification.
          </div>
        </div>
        <button type="button" class="lead-success-action-btn" onclick="window.closeLeadSuccessModal()">
          Done &amp; Continue &rarr;
        </button>
      </div>
    </div>
  `;

  layer.classList.add('is-active');
};

window.closeLeadSuccessModal = function() {
  const layer = document.getElementById('leadSuccessLayer');
  if (layer) layer.classList.remove('is-active');
};

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

