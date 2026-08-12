/* ==========================================================================
   TitleSquare - Launching Soon Landing Page
   Interactive Logic, Canvas Particles, Social Sharing & Confetti
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initSubscriptionForm();
  initShareModal();
  initSoundEffects();
  initFeatureModals();
  initRoadmapInteractivity();
});

/* --------------------------------------------------------------------------
   1. Interactive Background Canvas (Stars & Grid Mesh)
   -------------------------------------------------------------------------- */
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 150 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  
  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.color = Math.random() > 0.4 ? '#818cf8' : (Math.random() > 0.5 ? '#38bdf8' : '#c084fc');
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > width) this.speedX *= -1;
      if (this.y < 0 || this.y > height) this.speedY *= -1;

      // Mouse interactivity
      if (mouse.x && mouse.y) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          let angle = Math.atan2(dy, dx);
          let force = (mouse.radius - distance) / mouse.radius;
          this.x -= Math.cos(angle) * force * 2;
          this.y -= Math.sin(angle) * force * 2;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
    }
  }

  // Create initial particles based on screen size
  const particleCount = Math.floor((width * height) / 12000);
  for (let i = 0; i < Math.min(particleCount, 120); i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Connect close particles with subtle lines
    for (let a = 0; a < particles.length; a++) {
      for (let b = a; b < particles.length; b++) {
        let dx = particles[a].x - particles[b].x;
        let dy = particles[a].y - particles[b].y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = '#6366f1';
          ctx.globalAlpha = (1 - dist / 110) * 0.15;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* --------------------------------------------------------------------------
   2. Roadmap Interactive Highlight
   -------------------------------------------------------------------------- */
function initRoadmapInteractivity() {
  const steps = document.querySelectorAll('.timeline-step');
  steps.forEach(step => {
    step.addEventListener('click', () => {
      const title = step.querySelector('.step-name')?.textContent || 'Roadmap Step';
      const status = step.querySelector('.step-status')?.textContent || '';
      showToast(`Phase: ${title} (${status})`, 'info');
      playBeepSound(500, 0.08);
    });
  });
}

/* --------------------------------------------------------------------------
   3. Subscription & Early Access Logic + Confetti
   -------------------------------------------------------------------------- */
function initSubscriptionForm() {
  const form = document.getElementById('notify-form');
  const emailInput = document.getElementById('email-input');
  const subscriberCountEl = document.getElementById('subscriber-count-val');

  // Load baseline subscribers
  let savedCount = localStorage.getItem('titleSquare_sub_count');
  let currentCount = savedCount ? parseInt(savedCount, 10) : 1428;
  if (subscriberCountEl) subscriberCountEl.textContent = currentCount.toLocaleString();

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email || !validateEmail(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    // Check if already subscribed
    const subscribed = localStorage.getItem(`titleSquare_sub_${email}`);
    if (subscribed) {
      showToast('You are already registered for VIP access!', 'info');
      return;
    }

    // Save subscription
    localStorage.setItem(`titleSquare_sub_${email}`, 'true');
    currentCount += 1;
    localStorage.setItem('titleSquare_sub_count', currentCount);
    if (subscriberCountEl) subscriberCountEl.textContent = currentCount.toLocaleString();

    emailInput.value = '';
    showToast('🚀 Welcome aboard! You are reserved for VIP early access.', 'success');
    triggerConfetti();
    playBeepSound(520, 0.15);
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* Confetti Burst Generator */
function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#6366f1', '#06b6d4', '#ec4899', '#8b5cf6', '#38bdf8', '#25d366'];

  for (let i = 0; i < 95; i++) {
    pieces.push({
      x: canvas.width / 2,
      y: canvas.height / 2 + 50,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.7) * 16,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }

  let animationFrame;
  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.rotSpeed;
      p.opacity -= 0.012;

      if (p.opacity > 0) {
        active = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (active) {
      animationFrame = requestAnimationFrame(updateConfetti);
    } else {
      cancelAnimationFrame(animationFrame);
      canvas.remove();
    }
  }

  updateConfetti();
}

/* --------------------------------------------------------------------------
   4. Share Modal & Social Handlers
   -------------------------------------------------------------------------- */
function initShareModal() {
  const shareBtn = document.getElementById('share-btn');
  const modalOverlay = document.getElementById('share-modal');
  const modalClose = document.getElementById('modal-close');
  
  const whatsappBtn = document.getElementById('share-whatsapp-btn');
  const instagramBtn = document.getElementById('share-instagram-btn');
  const linkedinBtn = document.getElementById('share-linkedin-btn');
  const xBtn = document.getElementById('share-x-btn');
  const copyLinkBtn = document.getElementById('copy-link-btn');

  const shareTitle = "TitleSquare — Next-Gen Workspace Launching Soon!";
  const shareUrl = window.location.href;
  const shareMsg = encodeURIComponent(`Check out TitleSquare — the next-generation digital workspace launching soon! Join the waitlist: ${shareUrl}`);

  if (shareBtn && modalOverlay) {
    shareBtn.addEventListener('click', () => {
      modalOverlay.classList.add('active');
      playBeepSound(600, 0.08);
    });
  }

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  // 1. WhatsApp Share
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      const waUrl = `https://api.whatsapp.com/send?text=${shareMsg}`;
      window.open(waUrl, '_blank');
      showToast('Opening WhatsApp to share link...', 'info');
      playBeepSound(650, 0.1);
    });
  }

  // 2. Instagram Share / Story Link Copy
  if (instagramBtn) {
    instagramBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(shareUrl);
      showToast('📸 Link copied! Open Instagram to share in your Story or Bio.', 'success');
      playBeepSound(700, 0.1);
      setTimeout(() => {
        window.open('https://instagram.com', '_blank');
      }, 1000);
    });
  }

  // 3. LinkedIn Share
  if (linkedinBtn) {
    linkedinBtn.addEventListener('click', () => {
      const liUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
      window.open(liUrl, '_blank');
      showToast('Opening LinkedIn to share post...', 'info');
      playBeepSound(650, 0.1);
    });
  }

  // 4. X / Twitter Share
  if (xBtn) {
    xBtn.addEventListener('click', () => {
      const xUrl = `https://twitter.com/intent/tweet?text=${shareMsg}`;
      window.open(xUrl, '_blank');
      showToast('Opening X to post tweet...', 'info');
      playBeepSound(650, 0.1);
    });
  }

  // 5. Copy Direct Link
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(shareUrl);
      showToast('✨ Page link copied to clipboard!', 'success');
      playBeepSound(800, 0.12);
    });
  }
}

function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const icon = type === 'success' ? '✨' : (type === 'error' ? '⚠️' : 'ℹ️');
  
  toast.innerHTML = `
    <span style="font-size: 1.1rem">${icon}</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 20);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/* --------------------------------------------------------------------------
   5. Feature Modals / Interactive Previews
   -------------------------------------------------------------------------- */
function initFeatureModals() {
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.feature-title')?.textContent || 'Feature Detail';
      showToast(`Feature preview: ${title}`, 'info');
      playBeepSound(440, 0.08);
    });
  });
}

/* --------------------------------------------------------------------------
   6. Sound Effects Synthesizer (Web Audio API)
   -------------------------------------------------------------------------- */
let audioCtx = null;
let soundEnabled = false;

function initSoundEffects() {
  const soundBtn = document.getElementById('sound-toggle');
  if (!soundBtn) return;

  soundBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundBtn.classList.toggle('active', soundEnabled);
    
    if (soundEnabled) {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      showToast('Audio feedback enabled 🔔', 'info');
      playBeepSound(800, 0.1);
    } else {
      showToast('Audio muted 🔇', 'info');
    }
  });
}

function playBeepSound(freq = 440, duration = 0.1) {
  if (!soundEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    
    gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio Context auto-play restrictions handling
  }
}
