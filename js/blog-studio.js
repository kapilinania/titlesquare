/**
 * Title Square - Blog Studio & Git Approval Workflow Engine
 * Handles Author/Admin authentication, blog creation/editing with legal writing helpers,
 * real-time desktop/mobile live preview, and Git commit approval workflow.
 */

(function () {
  'use strict';

  // Pre-configured Accounts
  const ACCOUNTS = [
    { username: 'author', email: 'author@titlesquare.in', password: '123', name: 'Adv. A. Roy (Contributor)', role: 'author' },
    { username: 'client', email: 'client@titlesquare.in', password: '123', name: 'Client Contributor', role: 'author' },
    { username: 'admin', email: 'contact@titlesquare.in', password: '123', name: 'Chief Legal Editor (Admin)', role: 'admin' }
  ];

  // Default seed articles to allow immediate editing of pre-existing articles
  const DEFAULT_ARTICLES = [
    {
      id: 'art-30-yr-title-search',
      title: 'The Definitive Guide to a 30-Year Property Title Search in India: What Advocates Check',
      category: 'delhi bank',
      categoryLabel: 'National Guide & TSR',
      tag: 'Due Diligence',
      date: 'March 2026',
      readTime: '6 min read',
      author: 'Senior Advocate Panel, Title Square',
      lead: 'Before transferring advance funds for a plot, flat, or commercial floor, why is a 30-year archival search mandated by leading national banks (SBI, HDFC, ICICI)? Discover how advocates examine Sub-Registrar Book 1, Index II records, and uncover hidden encumbrances across three decades.',
      content: `<h2>1. Why 30 Years? The Limitation Act & Archival Chain</h2>
<p>Under Section 17 of the Registration Act, 1908 and standard banking due diligence protocols, tracing title deeds back 30 unbroken years ensures that any adverse possession claims, unrecorded equitable mortgages, or minor's partition disputes have extinguished under the Limitation Act, 1963.</p>

<div class="legal-warning-box">
  <strong>⚠️ Advocate Precedent Warning:</strong>
  Even if the seller holds a recent Registered Sale Deed from 2021, if the predecessor partition in 1998 had an excluded co-sharer, your purchased property remains vulnerable to ancestral claim litigation.
</div>

<h2>2. The 5 Crucial Archival Touchpoints</h2>
<p>Our empanelled advocates systematically inspect these registers at the Sub-Registrar office:</p>
<ul>
  <li><strong>Book 1 Records:</strong> Register of non-testamentary documents relating to immovable property.</li>
  <li><strong>Index II Registers:</strong> Property-wise nominal index cross-referencing survey and plot numbers.</li>
  <li><strong>Encumbrance Certificate (Form 15/16):</strong> Certificate confirming registered registered charges or Nil Encumbrance.</li>
  <li><strong>Mutation & Revenue Ledger:</strong> Verification that municipality/revenue circle records match registered title.</li>
  <li><strong>Court Litigation Search:</strong> Cross-checking District Courts, High Court, and DRT for pending stay orders.</li>
</ul>`,
      status: 'published',
      submittedBy: 'System Pre-seed',
      submittedAt: '2026-03-01T10:00:00Z',
      approvedBy: 'Admin',
      approvedAt: '2026-03-01T10:00:00Z'
    },
    {
      id: 'art-dharitree-namjari-assam',
      title: 'Dharitree Portal & Revenue Mutation in Assam: The Step-by-Step Namjari Legal Guide',
      category: 'assam',
      categoryLabel: 'Guwahati & Assam',
      tag: 'Assam Land Law',
      date: 'March 2026',
      readTime: '5 min read',
      author: 'Gauhati High Court Bar Panel',
      lead: 'A Registered Sale Deed in Assam conveys title, but without Namjari (revenue mutation) in Dharitree, you cannot legally pay land revenue (Khajna), obtain an NOC for construction, or resell. Here is how our legal team navigates the Revenue Circle Office.',
      content: `<h2>1. Registered Deed vs. Dharitree Mutation</h2>
<p>In Assam, registration of deed under the Registration Act 1908 and mutation under the Assam Land and Revenue Regulation 1886 are two separate administrative processes. Having a deed without mutation leaves the seller's name in the Jamabandi, allowing potential fraudulent double sales.</p>

<div class="legal-case-quote">
  <p>"Mutation in revenue records does not create title, but non-mutation paralyzes lawful enjoyment and allows prior owners to mortgage the land." — Gauhati High Court Precedent</p>
</div>

<h2>2. Essential Documents for Assam Mutation</h2>
<ul>
  <li>Original Registered Sale Deed / Gift Deed / Partition Deed</li>
  <li>Up-to-date Land Revenue Receipt (Khajna receipt)</li>
  <li>Extract of current Jamabandi (Chitha record)</li>
  <li>Trace Map / Field Verification Report from the Lat Mandal</li>
  <li>Affidavit of Peaceful Possession and Clear Title</li>
</ul>`,
      status: 'published',
      submittedBy: 'System Pre-seed',
      submittedAt: '2026-03-05T12:00:00Z',
      approvedBy: 'Admin',
      approvedAt: '2026-03-05T12:00:00Z'
    },
    {
      id: 'art-suraj-lamp-gpa-sales',
      title: 'Supreme Court Suraj Lamp Landmark Ruling: Why GPA Property Sales Are Void Without a Deed',
      category: 'delhi fraud',
      categoryLabel: 'Delhi NCR & Fraud Prevention',
      tag: 'Supreme Court Precedent',
      date: 'March 2026',
      readTime: '8 min read',
      author: 'Supreme Court Advocate Panel',
      lead: 'Thousands of property buyers in Delhi NCR unauthorized colonies and builder floors purchased homes on GPA, Agreement to Sell, and Will. Review the Supreme Court precedent that declared all GPA sales legally invalid without a registered conveyance deed.',
      content: `<h2>1. The Suraj Lamp & Industries Ruling (2012)</h2>
<p>The Supreme Court of India in <em>Suraj Lamp & Industries Pvt. Ltd. v. State of Haryana (2012) 1 SCC 656</em> definitively held that immovable property can only be legally transferred by a registered deed of conveyance. Transactions titled 'SA/GPA/Will transfers' do not convey title or create ownership rights.</p>

<div class="legal-warning-box">
  <strong>⚠️ Bank Finance Prohibition:</strong>
  No RBI-regulated bank or HFC (HDFC, SBI, PNB Housing) will sanction home loans or reverse mortgages against GPA-held properties without regularized registered conveyance.
</div>

<h2>2. How to Regularize Existing GPA Properties</h2>
<p>If you currently hold property solely via GPA / Agreement to Sell, our advocates advise:</p>
<ul>
  <li>Obtain a registered Rectification or Confirmatory Conveyance Deed from the original vendor.</li>
  <li>In Delhi Unauthorized Regularized Colonies, apply for DDA PM-UDAY registry conveyance deed.</li>
  <li>Initiate a suit for Specific Performance if vendor is uncooperative.</li>
</ul>`,
      status: 'published',
      submittedBy: 'System Pre-seed',
      submittedAt: '2026-03-10T14:30:00Z',
      approvedBy: 'Admin',
      approvedAt: '2026-03-10T14:30:00Z'
    },
    {
      id: 'art-bank-loan-tsr-audit',
      title: 'How Advocates Conduct Title Investigation for Bank Home Loan Sanctions (TSR Audit)',
      category: 'bank',
      categoryLabel: 'Bank Loans & TSR',
      tag: 'Banking Law',
      date: 'March 2026',
      readTime: '7 min read',
      author: 'Banking Empanelled Legal Counsel',
      lead: 'Why do nationalized banks reject home loan files despite a clean CIBIL score? An inside look at the Title Search Report (TSR) and Non-Encumbrance audit performed by bank empanelled lawyers.',
      content: `<h2>1. The Role of the Title Search Report (TSR)</h2>
<p>A bank will not disburse mortgage funding until an empanelled legal counsel certifies the title as "Clear, Marketable, and Free from Encumbrances". A single discrepancy between deed boundaries and physical site inspection halts sanctioning immediately.</p>

<div class="legal-case-quote">
  <p>"Equitable mortgage created by deposit of title deeds fails if the chain of original prior title documents is fragmented or replaced by certified copies without proper police lost-article report and newspaper publication." — Banking Due Diligence Manual</p>
</div>

<h2>2. The 4 Fatal Flaws in Bank TSR Rejections</h2>
<ul>
  <li><strong>Missing Original Parent Deed:</strong> Only photocopy available without archival certified search.</li>
  <li><strong>Prior Undischarged Bank Charge:</strong> Registered mortgage in CERSAI database not satisfied.</li>
  <li><strong>Pending Mutation:</strong> Seller has deed but Jamabandi still reflects previous owner.</li>
  <li><strong>Master Plan Violations:</strong> Property built on agricultural land without Section 143/80 non-agricultural conversion.</li>
</ul>`,
      status: 'published',
      submittedBy: 'System Pre-seed',
      submittedAt: '2026-03-12T16:00:00Z',
      approvedBy: 'Admin',
      approvedAt: '2026-03-12T16:00:00Z'
    }
  ];

  // Storage Keys
  const STORAGE_ARTICLES_KEY = 'ts_blog_articles_v1';
  const STORAGE_SESSION_KEY = 'ts_blog_studio_session_v1';
  const STORAGE_GIT_LOGS_KEY = 'ts_blog_git_commits_v1';

  // Initialize Data
  function initBlogStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_ARTICLES_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_ARTICLES_KEY, JSON.stringify(DEFAULT_ARTICLES));
      }
    } catch (e) {
      console.warn('Storage unavailable:', e);
    }
  }

  function getArticles() {
    try {
      const stored = localStorage.getItem(STORAGE_ARTICLES_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn(e);
    }
    return DEFAULT_ARTICLES;
  }

  function saveArticles(list) {
    try {
      localStorage.setItem(STORAGE_ARTICLES_KEY, JSON.stringify(list));
    } catch (e) {
      console.error('Failed saving articles to localStorage:', e);
    }
  }

  function getGitLogs() {
    try {
      const stored = localStorage.getItem(STORAGE_GIT_LOGS_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return [];
  }

  function addGitLog(entry) {
    const logs = getGitLogs();
    logs.unshift(entry);
    try {
      localStorage.setItem(STORAGE_GIT_LOGS_KEY, JSON.stringify(logs.slice(0, 30)));
    } catch (e) {}
  }

  // Session handling
  function getSession() {
    try {
      const sess = sessionStorage.getItem(STORAGE_SESSION_KEY);
      if (sess) return JSON.parse(sess);
    } catch (e) {}
    return null;
  }

  function setSession(user) {
    try {
      sessionStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(user));
    } catch (e) {}
  }

  function clearSession() {
    try {
      sessionStorage.removeItem(STORAGE_SESSION_KEY);
    } catch (e) {}
  }

  // Modal open / close helpers
  window.openBlogStudio = function () {
    const studio = document.getElementById('blogStudioOverlay');
    if (!studio) return;
    studio.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    const session = getSession();
    if (!session) {
      showStudioScreen('login');
    } else {
      updateStudioUserHeader(session);
      showStudioScreen('app');
      renderArticleList();
      renderApprovalQueue();
      renderGitCommitLog();
    }
  };

  window.closeBlogStudio = function () {
    const studio = document.getElementById('blogStudioOverlay');
    if (studio) {
      studio.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };

  function showStudioScreen(screen) {
    const loginWrap = document.getElementById('bsLoginScreen');
    const appWrap = document.getElementById('bsAppScreen');
    if (loginWrap && appWrap) {
      if (screen === 'login') {
        loginWrap.style.display = 'block';
        appWrap.style.display = 'none';
      } else {
        loginWrap.style.display = 'none';
        appWrap.style.display = 'flex';
      }
    }
  }

  function updateStudioUserHeader(session) {
    const nameEl = document.getElementById('bsCurrentUserName');
    const roleBadge = document.getElementById('bsCurrentUserRole');
    const adminNavTab = document.getElementById('bsTabApprovalNav');
    if (nameEl) nameEl.textContent = session.name || session.username;
    if (roleBadge) {
      roleBadge.textContent = session.role === 'admin' ? '🛡️ Administrator' : '✍️ Contributor / Author';
      roleBadge.className = 'bs-role-pill ' + (session.role === 'admin' ? 'bs-role-pill--admin' : 'bs-role-pill--author');
    }
    if (adminNavTab) {
      adminNavTab.style.display = session.role === 'admin' ? 'inline-flex' : 'none';
    }
  }

  // Handle Login
  window.handleStudioLogin = function (e) {
    e.preventDefault();
    const userIn = document.getElementById('bsLoginUser').value.trim().toLowerCase();
    const passIn = document.getElementById('bsLoginPass').value.trim();
    const errEl = document.getElementById('bsLoginError');

    const matched = ACCOUNTS.find(acc => (acc.username.toLowerCase() === userIn || acc.email.toLowerCase() === userIn) && acc.password === passIn);

    if (matched) {
      if (errEl) errEl.style.display = 'none';
      setSession(matched);
      updateStudioUserHeader(matched);
      showStudioScreen('app');
      renderArticleList();
      renderApprovalQueue();
      renderGitCommitLog();
      showStudioToast('Welcome ' + matched.name + ' (' + matched.role.toUpperCase() + ')');
    } else {
      if (errEl) {
        errEl.textContent = 'Invalid credentials. Use Author: author / 123 or Admin: admin / 123';
        errEl.style.display = 'block';
      }
    }
  };

  window.handleStudioLogout = function () {
    clearSession();
    showStudioScreen('login');
    showStudioToast('Logged out of Blog Studio');
  };

  // Switch tabs inside Studio
  window.switchStudioTab = function (tabName, btn) {
    document.querySelectorAll('.bs-tab-btn').forEach(b => b.classList.remove('is-active'));
    if (btn) btn.classList.add('is-active');

    document.querySelectorAll('.bs-tab-pane').forEach(p => p.classList.remove('is-active'));
    const target = document.getElementById('bsPane-' + tabName);
    if (target) target.classList.add('is-active');

    if (tabName === 'list') renderArticleList();
    if (tabName === 'approvals') renderApprovalQueue();
    if (tabName === 'git') renderGitCommitLog();
  };

  // Live Preview Engine & Helper Tools
  let activeEditingId = null;

  window.initNewArticle = function () {
    activeEditingId = null;
    document.getElementById('bsArticleForm').reset();
    document.getElementById('bsFormModeTitle').textContent = 'Create New Legal Analysis';
    document.getElementById('bsSubmitBtnText').textContent = 'Submit for Git Approval';
    document.getElementById('bsArticleStatusBadge').textContent = 'Draft (Unsaved)';
    document.getElementById('bsArticleStatusBadge').className = 'bs-status-badge bs-status-badge--draft';

    // Set default author name based on logged user
    const session = getSession();
    if (session) {
      document.getElementById('bsAuthorName').value = session.name;
    }
    updateLivePreview();
    window.switchStudioTab('editor', document.querySelector('.bs-tab-btn[data-tab="editor"]'));
  };

  window.editArticle = function (id) {
    const list = getArticles();
    const art = list.find(a => a.id === id);
    if (!art) return;

    activeEditingId = id;
    document.getElementById('bsFormModeTitle').textContent = 'Editing: ' + art.title.substring(0, 45) + '...';
    document.getElementById('bsArticleTitle').value = art.title || '';
    document.getElementById('bsArticleCategory').value = art.category ? art.category.split(' ')[0] : 'delhi';
    document.getElementById('bsArticleTag').value = art.tag || '';
    document.getElementById('bsAuthorName').value = art.author || '';
    document.getElementById('bsArticleLead').value = art.lead || '';
    document.getElementById('bsArticleContent').value = art.content || '';

    const statusBadge = document.getElementById('bsArticleStatusBadge');
    if (statusBadge) {
      statusBadge.textContent = art.status === 'published' ? 'Published Live' : (art.status === 'pending_approval' ? 'Pending Git Approval' : 'Draft');
      statusBadge.className = 'bs-status-badge ' + (art.status === 'published' ? 'bs-status-badge--published' : (art.status === 'pending_approval' ? 'bs-status-badge--pending' : 'bs-status-badge--draft'));
    }

    const session = getSession();
    if (session && session.role === 'admin') {
      document.getElementById('bsSubmitBtnText').textContent = 'Save & Update Live Immediately';
    } else {
      document.getElementById('bsSubmitBtnText').textContent = 'Save & Request Git Approval';
    }

    updateLivePreview();
    window.switchStudioTab('editor', document.querySelector('.bs-tab-btn[data-tab="editor"]'));
  };

  window.updateLivePreview = function () {
    const title = document.getElementById('bsArticleTitle').value.trim() || 'Untitled Legal Analysis';
    const tag = document.getElementById('bsArticleTag').value.trim() || 'Due Diligence';
    const categoryVal = document.getElementById('bsArticleCategory').value;
    const author = document.getElementById('bsAuthorName').value.trim() || 'Title Square Legal Contributor';
    const lead = document.getElementById('bsArticleLead').value.trim() || 'Write a compelling lead paragraph summarizing the legal issue, affected buyers, and the High Court/Sub-Registrar touchpoints...';
    const content = document.getElementById('bsArticleContent').value.trim() || '<p>Detailed article text will appear here in real time. Use the legal writing helpers above to insert advocate callouts, RERA precedents, checklists, and statutory warnings.</p>';

    // Word count and reading time
    const textOnly = (title + ' ' + lead + ' ' + content.replace(/<[^>]*>/g, ' ')).trim();
    const wordCount = textOnly ? textOnly.split(/\s+/).length : 0;
    const readMins = Math.max(1, Math.ceil(wordCount / 180));

    const wordCountEl = document.getElementById('bsWordCount');
    if (wordCountEl) wordCountEl.textContent = wordCount + ' words (' + readMins + ' min read)';

    // Category label map
    const catLabels = {
      'delhi': 'Delhi NCR Jurisdiction',
      'assam': 'Guwahati & Assam Revenue',
      'bank': 'Bank Loans & TSR Audit',
      'fraud': 'Fraud & Risk Prevention',
      'rera': 'RERA & Consumer Precedents'
    };
    const catLabel = catLabels[categoryVal] || 'National Real Estate Law';

    // Populate Desktop & Mobile preview containers
    const previewHTML = `
      <div class="blog-post-meta">
        <span class="blog-badge-tag blog-badge-tag--${categoryVal}">${escapeHTML(tag)}</span>
        <span class="blog-badge-tag blog-badge-tag--delhi">${catLabel}</span>
        <span class="blog-post-date">
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          ${new Date().toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })} &bull; ${readMins} min read
        </span>
      </div>
      <h2 class="blog-post-title" style="margin: 12px 0 10px; font-family: var(--font-serif); font-size: 23px; line-height: 1.35; color: var(--navy);">
        ${escapeHTML(title)}
      </h2>
      <div style="font-size: 11.5px; color: #64748b; font-weight: 600; margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
        <span>By ${escapeHTML(author)}</span>
        <span style="color: #cbd5e1;">&bull;</span>
        <span style="color: var(--green); font-weight: 700;">Verified Legal Editorial</span>
      </div>
      <p class="blog-lead-paragraph" style="font-style: italic; color: #334155; line-height: 1.6; padding: 10px 14px; background: rgba(15,32,67,0.03); border-left: 3px solid var(--gold); border-radius: 4px; margin-bottom: 18px;">
        "${escapeHTML(lead)}"
      </p>
      <div class="blog-post-body preview-rendered-content" style="color: #2b3b4c; font-size: 14px; line-height: 1.75;">
        ${content}
      </div>
    `;

    const desktopView = document.getElementById('bsPreviewDesktop');
    const mobileView = document.getElementById('bsPreviewMobileInner');
    if (desktopView) desktopView.innerHTML = previewHTML;
    if (mobileView) mobileView.innerHTML = previewHTML;
  };

  // Device switcher in Preview panel
  window.setPreviewDevice = function (mode, btn) {
    document.querySelectorAll('.bs-preview-device-btn').forEach(b => b.classList.remove('is-active'));
    if (btn) btn.classList.add('is-active');

    const deskWrap = document.getElementById('bsPreviewDesktopWrap');
    const mobWrap = document.getElementById('bsPreviewMobileWrap');
    if (mode === 'mobile') {
      deskWrap.style.display = 'none';
      mobWrap.style.display = 'flex';
    } else {
      deskWrap.style.display = 'block';
      mobWrap.style.display = 'none';
    }
  };

  // Helper insertion tools
  window.insertEditorSnippet = function (type) {
    const textarea = document.getElementById('bsArticleContent');
    if (!textarea) return;

    let snippet = '';
    switch (type) {
      case 'h2':
        snippet = '\n<h2>Section Heading: Legal Analysis</h2>\n<p>Explain the core legal rule or Sub-Registrar observation here...</p>\n';
        break;
      case 'h3':
        snippet = '\n<h3>Subsection: Case Law Touchpoint</h3>\n<p>Reference specific deed covenants or revenue circle records...</p>\n';
        break;
      case 'warning':
        snippet = '\n<div class="legal-warning-box">\n  <strong>⚠️ Statutory Caution:</strong>\n  Purchasing property without physical chain of original title deeds exposes the buyer to third-party equitable mortgage claims under Section 58(f) of the Transfer of Property Act.\n</div>\n';
        break;
      case 'quote':
        snippet = '\n<div class="legal-case-quote">\n  <p>"Registration of an Agreement to Sell does not confer ownership title; it merely confers an inchoate right to seek specific performance." — Supreme Court Precedent</p>\n</div>\n';
        break;
      case 'checklist':
        snippet = '\n<div class="legal-checklist-box">\n  <strong>📋 5-Step Due Diligence Checklist:</strong>\n  <ul>\n    <li>Verify 30-Year Chain of Title Deeds in Book 1</li>\n    <li>Inspect Encumbrance Certificate (Form 15 & Form 16)</li>\n    <li>Cross-verify Revenue Mutation & Jamabandi namjari</li>\n    <li>Confirm Nil Litigation Stay Order in District/High Court</li>\n    <li>Obtain Bank NOC & Original Loan Discharge Letter</li>\n  </ul>\n</div>\n';
        break;
      case 'stat':
        snippet = '\n<div class="legal-stat-box">\n  <div class="legal-stat-number">30 Years</div>\n  <div class="legal-stat-desc">Mandatory Archival Title Trace Required by Public Sector & Private Banks</div>\n</div>\n';
        break;
      case 'bold':
        wrapText(textarea, '<strong>', '</strong>');
        updateLivePreview();
        return;
      case 'italic':
        wrapText(textarea, '<em>', '</em>');
        updateLivePreview();
        return;
      default:
        break;
    }

    insertAtCursor(textarea, snippet);
    updateLivePreview();
  };

  function insertAtCursor(textarea, text) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const val = textarea.value;
    textarea.value = val.substring(0, start) + text + val.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + text.length;
    textarea.focus();
  }

  function wrapText(textarea, before, after) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const val = textarea.value;
    const selected = val.substring(start, end) || 'Sample text';
    textarea.value = val.substring(0, start) + before + selected + after + val.substring(end);
    textarea.selectionStart = start + before.length;
    textarea.selectionEnd = textarea.selectionStart + selected.length;
    textarea.focus();
  }

  // Handle Form Submission: Create or Edit Article
  window.handleArticleSubmit = function (e) {
    e.preventDefault();
    const session = getSession();
    if (!session) {
      alert('Your session expired. Please log in again.');
      showStudioScreen('login');
      return;
    }

    const title = document.getElementById('bsArticleTitle').value.trim();
    const category = document.getElementById('bsArticleCategory').value.trim();
    const tag = document.getElementById('bsArticleTag').value.trim() || 'Property Law';
    const author = document.getElementById('bsAuthorName').value.trim() || session.name;
    const lead = document.getElementById('bsArticleLead').value.trim();
    const content = document.getElementById('bsArticleContent').value.trim();

    if (!title || !lead || !content) {
      alert('Please fill out Title, Lead Summary, and Article Content.');
      return;
    }

    const textOnly = (title + ' ' + lead + ' ' + content.replace(/<[^>]*>/g, ' ')).trim();
    const wordCount = textOnly ? textOnly.split(/\s+/).length : 0;
    const readMins = Math.max(1, Math.ceil(wordCount / 180));

    const catLabels = {
      'delhi': 'Delhi NCR Jurisdiction',
      'assam': 'Guwahati & Assam Revenue',
      'bank': 'Bank Loans & TSR Audit',
      'fraud': 'Fraud & Risk Prevention',
      'rera': 'RERA & Consumer Precedents'
    };
    const categoryLabel = catLabels[category] || 'National Property Law';

    const articles = getArticles();
    const isOwnerOrAdmin = session.role === 'admin';

    if (activeEditingId) {
      // Edit existing
      const idx = articles.findIndex(a => a.id === activeEditingId);
      if (idx !== -1) {
        articles[idx].title = title;
        articles[idx].category = category;
        articles[idx].categoryLabel = categoryLabel;
        articles[idx].tag = tag;
        articles[idx].author = author;
        articles[idx].lead = lead;
        articles[idx].content = content;
        articles[idx].readTime = readMins + ' min read';
        articles[idx].updatedAt = new Date().toISOString();

        if (isOwnerOrAdmin) {
          articles[idx].status = 'published';
          articles[idx].approvedBy = session.name;
          articles[idx].approvedAt = new Date().toISOString();
          recordGitCommit(articles[idx], 'UPDATE_AND_PUBLISH', session);
          showStudioToast('✓ Article updated & published live to website!');
        } else {
          articles[idx].status = 'pending_approval';
          recordGitCommit(articles[idx], 'REQUEST_UPDATE_COMMIT', session);
          showStudioToast('✓ Update submitted! Git commit request sent for Admin approval.');
        }
      }
    } else {
      // Create new article
      const newId = 'art-' + Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 6);
      const newArticle = {
        id: newId,
        title: title,
        category: category,
        categoryLabel: categoryLabel,
        tag: tag,
        date: new Date().toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }),
        readTime: readMins + ' min read',
        author: author,
        lead: lead,
        content: content,
        status: isOwnerOrAdmin ? 'published' : 'pending_approval',
        submittedBy: session.name + ' (' + session.username + ')',
        submittedAt: new Date().toISOString(),
        approvedBy: isOwnerOrAdmin ? session.name : null,
        approvedAt: isOwnerOrAdmin ? new Date().toISOString() : null
      };

      articles.unshift(newArticle);

      if (isOwnerOrAdmin) {
        recordGitCommit(newArticle, 'CREATE_AND_PUBLISH', session);
        showStudioToast('✓ New article published live immediately!');
      } else {
        recordGitCommit(newArticle, 'REQUEST_NEW_COMMIT', session);
        showStudioToast('✓ Article submitted! Git commit request generated awaiting approval.');
      }
    }

    saveArticles(articles);
    renderPublicArticles();
    renderArticleList();
    renderApprovalQueue();
    renderGitCommitLog();

    // Switch to list or approvals view
    if (isOwnerOrAdmin) {
      window.switchStudioTab('list', document.querySelector('.bs-tab-btn[data-tab="list"]'));
    } else {
      window.switchStudioTab('list', document.querySelector('.bs-tab-btn[data-tab="list"]'));
    }
  };

  // Git Commit Request Recording
  function recordGitCommit(article, action, session) {
    const commitHash = Math.random().toString(16).substring(2, 9);
    const commitMsg = `[Blog] ${action}: "${article.title.substring(0, 50)}..." by ${session.username}`;

    const commitEntry = {
      hash: commitHash,
      action: action,
      articleId: article.id,
      title: article.title,
      author: session.name,
      username: session.username,
      status: article.status,
      timestamp: new Date().toISOString(),
      message: commitMsg,
      gitPayload: {
        file: `content/blogs/${article.id}.json`,
        branch: 'contributions/' + article.id,
        commitMessage: commitMsg,
        data: article
      }
    };

    addGitLog(commitEntry);
  }

  // Admin Approval Operations
  window.approvePendingArticle = function (id) {
    const session = getSession();
    if (!session || session.role !== 'admin') {
      alert('Only Administrators can approve and publish Git commits.');
      return;
    }

    const articles = getArticles();
    const art = articles.find(a => a.id === id);
    if (!art) return;

    art.status = 'published';
    art.approvedBy = session.name;
    art.approvedAt = new Date().toISOString();

    recordGitCommit(art, 'MERGE_AND_PUBLISH', session);
    saveArticles(articles);

    renderPublicArticles();
    renderArticleList();
    renderApprovalQueue();
    renderGitCommitLog();
    showStudioToast('🎉 Approved & Merged! Article is now live for all visitors.');
  };

  window.rejectPendingArticle = function (id) {
    const session = getSession();
    if (!session || session.role !== 'admin') {
      alert('Only Administrators can reject submissions.');
      return;
    }

    const reason = prompt('Please enter revision instructions or reason for rejection:', 'Please add specific High Court case citation and clarify RERA section.');
    if (reason === null) return;

    const articles = getArticles();
    const art = articles.find(a => a.id === id);
    if (!art) return;

    art.status = 'draft';
    art.rejectionNote = reason;

    recordGitCommit(art, 'REQUEST_REVISION', session);
    saveArticles(articles);

    renderArticleList();
    renderApprovalQueue();
    renderGitCommitLog();
    showStudioToast('Article returned to author with revision note.');
  };

  window.deleteArticle = function (id) {
    const session = getSession();
    if (!session || session.role !== 'admin') {
      alert('Only Administrators can permanently delete articles.');
      return;
    }

    if (!confirm('Are you sure you want to delete this article? This action cannot be undone.')) return;

    let articles = getArticles();
    articles = articles.filter(a => a.id !== id);
    saveArticles(articles);

    renderPublicArticles();
    renderArticleList();
    renderApprovalQueue();
    showStudioToast('Article removed from system.');
  };

  // Open GitHub PR link generator
  window.openGitHubPRRequest = function (id) {
    const articles = getArticles();
    const art = articles.find(a => a.id === id);
    if (!art) return;

    const repoUrl = 'https://github.com/kapilinania/titlesquare/issues/new';
    const issueTitle = encodeURIComponent(`[Blog Commit Request] ${art.title}`);
    const issueBody = encodeURIComponent(
      `### Title Square Blog Contribution Request\n\n` +
      `**Title:** ${art.title}\n` +
      `**Category:** ${art.categoryLabel}\n` +
      `**Author:** ${art.author} (${art.submittedBy || 'Contributor'})\n` +
      `**Read Time:** ${art.readTime}\n` +
      `**Status:** ${art.status}\n\n` +
      `#### Lead Paragraph:\n> ${art.lead}\n\n` +
      `#### Content JSON:\n\`\`\`json\n${JSON.stringify(art, null, 2)}\n\`\`\`\n\n` +
      `*Submitted via Title Square Blog Studio approval engine.*`
    );

    window.open(`${repoUrl}?title=${issueTitle}&body=${issueBody}`, '_blank');
  };

  // Copy JSON Git Diff
  window.copyGitPayload = function (id) {
    const articles = getArticles();
    const art = articles.find(a => a.id === id);
    if (!art) return;

    const json = JSON.stringify(art, null, 2);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(json).then(() => {
        showStudioToast('✓ Git article JSON copied to clipboard!');
      });
    } else {
      prompt('Copy JSON payload:', json);
    }
  };

  // Render Table of All Blogs in Studio
  function renderArticleList() {
    const container = document.getElementById('bsArticlesTableBody');
    if (!container) return;

    const articles = getArticles();
    const session = getSession();
    const isAdmin = session && session.role === 'admin';

    if (!articles.length) {
      container.innerHTML = '<tr><td colspan="5" style="text-align:center; padding: 24px; color:#64748b;">No articles found. Click "Create New Article" to start.</td></tr>';
      return;
    }

    container.innerHTML = articles.map(a => {
      const statusBadge = a.status === 'published'
        ? '<span class="bs-status-badge bs-status-badge--published">Live on Website</span>'
        : (a.status === 'pending_approval'
          ? '<span class="bs-status-badge bs-status-badge--pending">Pending Git Approval</span>'
          : '<span class="bs-status-badge bs-status-badge--draft">Draft</span>');

      return `
        <tr>
          <td style="font-weight: 600; color: var(--navy); max-width: 260px;">
            <div style="font-size: 13.5px; line-height: 1.35; margin-bottom: 4px;">${escapeHTML(a.title)}</div>
            <div style="font-size: 11px; color: #64748b; font-weight: normal;">Author: ${escapeHTML(a.author || 'Advocate')}</div>
          </td>
          <td style="font-size: 12px; color: #475569;">${escapeHTML(a.categoryLabel || a.category)}</td>
          <td>${statusBadge}</td>
          <td style="font-size: 12px; color: #64748b;">${a.date || 'Recent'}</td>
          <td style="text-align: right;">
            <div class="bs-table-actions">
              <button type="button" class="btn-bs-action" onclick="editArticle('${a.id}')" title="Edit Article">
                <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                <span>Edit</span>
              </button>
              <button type="button" class="btn-bs-action" onclick="copyGitPayload('${a.id}')" title="Copy Git JSON">
                <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                <span>Git Code</span>
              </button>
              ${isAdmin ? `
              <button type="button" class="btn-bs-action btn-bs-action--danger" onclick="deleteArticle('${a.id}')" title="Delete Article">
                <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
              </button>
              ` : ''}
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  // Render Admin Approval Queue
  function renderApprovalQueue() {
    const queueList = document.getElementById('bsApprovalQueueList');
    const badgeEl = document.getElementById('bsPendingCountBadge');
    if (!queueList) return;

    const articles = getArticles();
    const pending = articles.filter(a => a.status === 'pending_approval');

    if (badgeEl) {
      badgeEl.textContent = pending.length;
      badgeEl.style.display = pending.length > 0 ? 'inline-flex' : 'none';
    }

    if (!pending.length) {
      queueList.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; background: #ffffff; border-radius: 8px; border: 1px dashed #cbd5e1;">
          <div style="font-size: 32px; margin-bottom: 8px;">✅</div>
          <h4 style="font-size: 16px; color: var(--navy); margin-bottom: 4px;">Approval Queue is Clear</h4>
          <p style="color: #64748b; font-size: 13px;">All client and author blog submissions have been reviewed and published to the website.</p>
        </div>
      `;
      return;
    }

    queueList.innerHTML = pending.map(item => `
      <div class="bs-approval-card">
        <div class="bs-approval-card-top">
          <div>
            <span class="bs-status-badge bs-status-badge--pending">Pending Git Commit Approval</span>
            <span style="font-size: 11.5px; color: #64748b; margin-left: 8px;">Submitted by: <strong>${escapeHTML(item.submittedBy || item.author)}</strong></span>
          </div>
          <div style="font-size: 11.5px; color: #94a3b8;">${new Date(item.submittedAt || Date.now()).toLocaleString('en-IN')}</div>
        </div>
        <h3 class="bs-approval-card-title">${escapeHTML(item.title)}</h3>
        <p class="bs-approval-card-lead">"${escapeHTML(item.lead)}"</p>
        <div class="bs-approval-actions">
          <button type="button" class="btn btn-navy" style="background: var(--green); border-color: var(--green); padding: 8px 16px; font-size: 12.5px;" onclick="approvePendingArticle('${item.id}')">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Approve &amp; Publish Live
          </button>
          <button type="button" class="btn btn-outline" style="padding: 8px 14px; font-size: 12.5px;" onclick="editArticle('${item.id}')">
            <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
            Inspect / Edit Article
          </button>
          <button type="button" class="btn btn-outline" style="padding: 8px 14px; font-size: 12.5px;" onclick="openGitHubPRRequest('${item.id}')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Create GitHub PR
          </button>
          <button type="button" class="btn btn-outline" style="color: var(--crimson); border-color: #fca5a5; padding: 8px 14px; font-size: 12.5px;" onclick="rejectPendingArticle('${item.id}')">
            Request Revisions
          </button>
        </div>
      </div>
    `).join('');
  }

  // Render Git Commit Log
  function renderGitCommitLog() {
    const listEl = document.getElementById('bsGitCommitLogList');
    if (!listEl) return;

    const logs = getGitLogs();
    if (!logs.length) {
      listEl.innerHTML = '<div style="color: #64748b; font-size: 13px; text-align: center; padding: 24px;">No Git commit requests recorded yet. Submitting or approving blogs creates git sync payloads.</div>';
      return;
    }

    listEl.innerHTML = logs.map(log => `
      <div class="bs-git-row">
        <div class="bs-git-hash">commit ${log.hash}</div>
        <div class="bs-git-meta">
          <strong>${escapeHTML(log.author)}</strong> (${log.username}) &bull; ${new Date(log.timestamp).toLocaleString('en-IN')}
        </div>
        <div class="bs-git-msg">${escapeHTML(log.message)}</div>
        <div style="margin-top: 6px;">
          <a href="https://github.com/kapilinania/titlesquare/commits/main" target="_blank" rel="noopener" class="bs-git-link">
            View on GitHub repo &rarr;
          </a>
        </div>
      </div>
    `).join('');
  }

  // Render public articles on the main blog page
  function renderPublicArticles() {
    const container = document.querySelector('.blog-main-column');
    if (!container) return;

    const articles = getArticles();
    const published = articles.filter(a => a.status === 'published');

    // Update count stats pill
    const countPill = document.getElementById('blogResultsCount');
    if (countPill) countPill.textContent = published.length + ' Legal Analyses Available';

    // Render cards into container
    container.innerHTML = published.map((art, idx) => {
      const artId = art.id || ('art-gen-' + idx);
      const bodyId = 'body-' + artId;

      return `
        <article class="blog-post-card" data-category="${escapeHTML(art.category || 'delhi')}" id="${artId}">
          <div class="blog-post-meta">
            <span class="blog-badge-tag blog-badge-tag--bank">${escapeHTML(art.tag || 'Due Diligence')}</span>
            <span class="blog-badge-tag blog-badge-tag--delhi">${escapeHTML(art.categoryLabel || 'National Guide')}</span>
            <span class="blog-post-date">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              Published: ${escapeHTML(art.date || 'March 2026')} &bull; ${escapeHTML(art.readTime || '6 min read')}
            </span>
          </div>

          <!-- Interactive Action Controls -->
          <div class="article-action-row">
            <button type="button" class="btn-article-action" onclick="toggleArticle('${bodyId}', this)">
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
              <span class="toggle-lbl">Collapse</span>
            </button>
            <button type="button" class="btn-article-action" onclick="shareArticle('${artId}')">
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
              <span>Share</span>
            </button>
            <button type="button" class="btn-article-action btn-bookmark" onclick="toggleBookmark(this)">
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
              <span>Bookmark</span>
            </button>
            <button type="button" class="btn-article-action" onclick="window.openBlogStudio(); window.editArticle('${art.id}');">
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
              <span>Edit Article</span>
            </button>
          </div>

          <h2 class="blog-post-title">
            <a href="javascript:void(0)" onclick="toggleArticle('${bodyId}')">
              ${escapeHTML(art.title)}
            </a>
          </h2>

          <div style="font-size: 12px; color: #64748b; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <span>By <strong>${escapeHTML(art.author || 'Senior Advocate Panel')}</strong></span>
            <span style="color: #cbd5e1;">&bull;</span>
            <span style="color: var(--green); font-weight: 600;">Gauhati HC &amp; Delhi Bar Empanelled</span>
          </div>

          <p class="blog-lead-paragraph">
            "${escapeHTML(art.lead)}"
          </p>

          <!-- Expandable Body Content -->
          <div class="blog-post-body" id="${bodyId}">
            ${art.content}

            <!-- Advocate Consultation CTA inside post -->
            <div class="blog-cta-banner">
              <div class="blog-cta-title">Concerned about your property's legal chain?</div>
              <p class="blog-cta-desc">High Court advocates conduct 30-year archival title search &amp; revenue mutation audit within 24–48 hours.</p>
              <div class="blog-cta-actions">
                <button type="button" class="btn-cta-gold open-modal-trigger">
                  <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  <span>Request Title Verification</span>
                </button>
                <a href="tel:+919957643980" class="btn-cta-phone">
                  <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <span>Speak with Advocate: +91 99576 43980</span>
                </a>
              </div>
            </div>

            <!-- Feedback & Inquiries -->
            <div class="blog-feedback-strip">
              <span class="feedback-label">Was this legal analysis helpful?</span>
              <button type="button" class="btn-feedback-vote" onclick="voteHelpful(this)">
                <span>👍 Helpful</span>
                <span class="vote-num">${24 + idx * 7}</span>
              </button>
              <button type="button" class="btn-feedback-vote" onclick="voteHelpful(this)">
                <span>💡 Needs More Detail</span>
                <span class="vote-num">${1 + idx}</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  function showStudioToast(msg) {
    if (window.showToast) {
      window.showToast(msg);
    } else {
      alert(msg);
    }
  }

  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initialize on load
  document.addEventListener('DOMContentLoaded', () => {
    initBlogStorage();
    renderPublicArticles();

    // Check if session exists to update header
    const sess = getSession();
    if (sess) {
      updateStudioUserHeader(sess);
      renderApprovalQueue();
    }
  });

})();
