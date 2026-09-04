/**
 * Title Square - Modal & Lead Capture Handlers
 */

document.addEventListener('DOMContentLoaded', () => {
  initReportModal();
  initFormSubmissions();
});

function initReportModal() {
  const modal = document.getElementById('reportModal');
  const openButtons = document.querySelectorAll('.open-report-modal');
  const closeBtn = document.getElementById('closeReportModal');

  if (!modal) return;

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(modal);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal(modal));
  }

  // Click on backdrop to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });

  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal(modal);
    }
  });
}

function openModal(modal) {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Handle Form Submissions with visual feedback
function initFormSubmissions() {
  const forms = document.querySelectorAll('form.ajax-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg style="animation: spin 1s linear infinite; width: 18px; height: 18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" stroke-width="4" stroke-dasharray="32" stroke-dashoffset="10"></circle>
          </svg> Generating Instant Report...
        `;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        // Close modal if inside modal
        const parentModal = form.closest('.modal-backdrop');
        if (parentModal) {
          closeModal(parentModal);
        }

        form.reset();
        
        // Show success alert
        if (typeof showToast === 'function') {
          showToast('Success! Title Square legal team received your request. We will reach you shortly on WhatsApp & Call.', 'success');
        } else {
          alert('Success! Your request has been recorded. Our property legal advocate will connect with you.');
        }
      }, 1200);
    });
  });
}

// Helper for "Notify Me" on Coming Soon Cities
window.notifyCity = function(cityName) {
  const emailOrPhone = prompt(`Enter your Mobile Number / Email to get notified when Title Square launches in ${cityName}:`);
  if (emailOrPhone) {
    if (typeof showToast === 'function') {
      showToast(`Thank you! We will alert you immediately once services go live in ${cityName}.`, 'success');
    } else {
      alert(`Thank you! We will notify you for ${cityName}.`);
    }
  }
};
